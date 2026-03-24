"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import type { editor } from "monaco-editor";
import type { OnMount } from "@monaco-editor/react";

const Editor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[420px] items-center justify-center rounded-[24px] bg-[#07101d] text-sm text-white/55">
      Loading editor...
    </div>
  ),
});

type MonacoPythonEditorProps = {
  value: string;
  onChange: (value: string) => void;
  highlightedLine: number;
};

export function MonacoPythonEditor({
  value,
  onChange,
  highlightedLine,
}: MonacoPythonEditorProps) {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const decorationsRef = useRef<editor.IEditorDecorationsCollection | null>(null);

  const handleMount: OnMount = (editorInstance) => {
    editorRef.current = editorInstance;
    decorationsRef.current = editorInstance.createDecorationsCollection([
      {
        range: {
          startLineNumber: highlightedLine,
          startColumn: 1,
          endLineNumber: highlightedLine,
          endColumn: 1,
        },
        options: {
          isWholeLine: true,
          className: "pyanimate-active-line",
          glyphMarginClassName: "pyanimate-active-line-glyph",
        },
      },
    ]);
  };

  useEffect(() => {
    decorationsRef.current?.set([
      {
        range: {
          startLineNumber: highlightedLine,
          startColumn: 1,
          endLineNumber: highlightedLine,
          endColumn: 1,
        },
        options: {
          isWholeLine: true,
          className: "pyanimate-active-line",
          glyphMarginClassName: "pyanimate-active-line-glyph",
        },
      },
    ]);
    editorRef.current?.revealLineInCenter(highlightedLine);
  }, [highlightedLine]);

  return (
    <div className="overflow-hidden rounded-[24px] border border-[#12213a] bg-[#07101d]">
      <div className="flex items-center justify-between border-b border-white/8 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white/45">
        <span>lesson.py</span>
        <span>line {highlightedLine}</span>
      </div>
      <Editor
        height="420px"
        defaultLanguage="python"
        theme="vs-dark"
        value={value}
        onMount={handleMount}
        onChange={(nextValue) => onChange(nextValue ?? "")}
        options={{
          glyphMargin: true,
          minimap: { enabled: false },
          fontSize: 15,
          lineHeight: 24,
          padding: { top: 18, bottom: 18 },
          roundedSelection: true,
          scrollBeyondLastLine: false,
          wordWrap: "on",
          automaticLayout: true,
          tabSize: 4,
        }}
      />
    </div>
  );
}
