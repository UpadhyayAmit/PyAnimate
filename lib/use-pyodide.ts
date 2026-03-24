"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ExecutionFrame } from "@/data/course";

export type PyodideStatus = "idle" | "loading" | "ready" | "running" | "error";

type WorkerResult = {
  frames: ExecutionFrame[];
  output: string[];
  error: string | null;
};

type PendingRun = {
  resolve: (result: WorkerResult) => void;
  reject: (err: Error) => void;
};

export function usePyodide() {
  const workerRef = useRef<Worker | null>(null);
  const pendingRef = useRef<PendingRun | null>(null);
  const [status, setStatus] = useState<PyodideStatus>("idle");
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    // Only available in browser
    if (typeof window === "undefined") return;

    const worker = new Worker("/pyodide-worker.js");
    workerRef.current = worker;
    setStatus("loading");

    worker.onmessage = (e: MessageEvent) => {
      const { type } = e.data;

      if (type === "ready") {
        setStatus("ready");
      } else if (type === "result") {
        setStatus("ready");
        pendingRef.current?.resolve({
          frames: e.data.frames ?? [],
          output: e.data.frames?.flatMap((f: ExecutionFrame) => (f as any).output ?? []) ?? [],
          error: e.data.error ?? null,
        });
        pendingRef.current = null;
      } else if (type === "error") {
        setStatus("error");
        setLoadError(e.data.message);
        pendingRef.current?.reject(new Error(e.data.message));
        pendingRef.current = null;
      }
    };

    worker.onerror = (err) => {
      setStatus("error");
      setLoadError(err.message ?? "Worker failed to load");
    };

    // Kick off Pyodide initialisation immediately so it's warm by the time the user hits Run
    worker.postMessage({ type: "init" });

    return () => {
      worker.terminate();
      workerRef.current = null;
    };
  }, []);

  const runCode = useCallback((code: string): Promise<WorkerResult> => {
    return new Promise((resolve, reject) => {
      if (!workerRef.current) {
        reject(new Error("Worker not initialised"));
        return;
      }
      pendingRef.current = { resolve, reject };
      setStatus("running");
      workerRef.current.postMessage({ type: "run", code });
    });
  }, []);

  return { status, loadError, runCode };
}
