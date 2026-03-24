// Pyodide web worker — loads Python runtime and traces code execution step by step.
// Runs off the main thread so the UI stays responsive during Python execution.

importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js");

let pyodide = null;

async function initPyodide() {
  if (pyodide) return;
  pyodide = await loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/",
  });
  self.postMessage({ type: "ready" });
}

// Infer a human-readable event label from what changed between two frames.
function inferEvent(frame, prevFrame, stepIndex) {
  if (!prevFrame) return "Start";

  const prevKeys = new Set(Object.keys(prevFrame.locals));
  const currKeys = Object.keys(frame.locals);

  const newVars = currKeys.filter((k) => !prevKeys.has(k));
  const changedVars = currKeys.filter(
    (k) => prevKeys.has(k) && prevFrame.locals[k] !== frame.locals[k]
  );

  if (newVars.length === 1 && changedVars.length === 0) {
    const name = newVars[0];
    const val = frame.locals[name];
    // Detect list/collection
    if (val.startsWith("[") || val.startsWith("{")) return `Load ${name}`;
    return `Create ${name}`;
  }
  if (changedVars.length === 1 && newVars.length === 0) {
    return `Update ${changedVars[0]}`;
  }
  if (changedVars.length > 0 || newVars.length > 0) {
    return `Step ${stepIndex + 1}`;
  }
  return `Line ${frame.line}`;
}

// Build a one-line summary of what happened.
function buildSummary(frame, prevFrame) {
  if (!prevFrame) {
    const entries = Object.entries(frame.locals);
    if (entries.length > 0) {
      return `${entries.map(([k, v]) => `${k} = ${v}`).join(", ")}.`;
    }
    return `Execution begins on line ${frame.line}.`;
  }

  const prevKeys = new Set(Object.keys(prevFrame.locals));
  const currEntries = Object.entries(frame.locals);

  const newVars = currEntries.filter(([k]) => !prevKeys.has(k));
  const changedVars = currEntries.filter(
    ([k, v]) => prevKeys.has(k) && prevFrame.locals[k] !== v
  );

  const parts = [];
  for (const [k, v] of newVars) parts.push(`${k} = ${v}`);
  for (const [k, v] of changedVars) parts.push(`${k} → ${v}`);

  // If new output appeared, mention it
  const newOutputCount = frame.output.length - prevFrame.output.length;
  if (newOutputCount > 0) {
    const latest = frame.output[frame.output.length - 1];
    parts.push(`prints "${latest}"`);
  }

  return parts.length > 0 ? parts.join(", ") + "." : `Line ${frame.line} executes.`;
}

async function runCode(code) {
  if (!pyodide) await initPyodide();

  // Embed the user's code as a Python string literal to pass to exec safely.
  const encodedCode = JSON.stringify(code);

  const tracerScript = `
import sys as _sys
import io as _io

_trace_frames = []
_output_lines = []

class _OutputCapture(_io.StringIO):
    def write(self, s):
        if s and s != '\\n':
            _output_lines.append(s.rstrip('\\n'))
        elif s == '\\n' and _output_lines and not _output_lines[-1].endswith('\\n'):
            # newline after content — keep as-is
            pass
    def flush(self):
        pass

_cap = _OutputCapture()
_user_code = ${encodedCode}

def _tracer(frame, event, arg):
    if event == 'line' and frame.f_code.co_filename == '<user_code>':
        locs = {}
        for _k, _v in frame.f_locals.items():
            if not _k.startswith('_'):
                try:
                    locs[_k] = repr(_v)
                except Exception:
                    locs[_k] = '?'
        _trace_frames.append({
            'line': frame.f_lineno,
            'locals': dict(locs),
            'output': list(_output_lines),
        })
    return _tracer

_sys.stdout = _cap
_sys.settrace(_tracer)
_exec_error = None
try:
    exec(compile(_user_code, '<user_code>', 'exec'))
except Exception as _e:
    _exec_error = str(_e)
finally:
    _sys.settrace(None)
    _sys.stdout = _sys.__stdout__
`;

  pyodide.runPython(tracerScript);

  const rawFrames = pyodide.globals.get("_trace_frames").toJs({
    dict_converter: Object.fromEntries,
  });
  const execError = pyodide.globals.get("_exec_error");

  // Convert to annotated ExecutionFrame array
  const frames = [];
  for (let i = 0; i < rawFrames.length; i++) {
    const raw = rawFrames[i];
    const prev = i > 0 ? rawFrames[i - 1] : null;

    const locals = raw.get ? Object.fromEntries(raw.get("locals")) : raw.locals ?? {};
    const output = raw.get ? Array.from(raw.get("output")) : raw.output ?? [];
    const line = raw.get ? raw.get("line") : raw.line;

    const prevLocals = prev
      ? prev.get
        ? Object.fromEntries(prev.get("locals"))
        : prev.locals ?? {}
      : null;
    const prevOutput = prev
      ? prev.get
        ? Array.from(prev.get("output"))
        : prev.output ?? []
      : null;

    const prevNorm = prevLocals !== null ? { locals: prevLocals, output: prevOutput, line: prev.get ? prev.get("line") : prev.line } : null;
    const currNorm = { locals, output, line };

    frames.push({
      line,
      event: inferEvent(currNorm, prevNorm, i),
      summary: buildSummary(currNorm, prevNorm),
      memory: Object.entries(locals).map(([name, value]) => ({ name, value: String(value) })),
      output: [...output],
    });
  }

  return { frames, error: execError || null };
}

self.onmessage = async (e) => {
  const { type } = e.data;

  if (type === "init") {
    try {
      await initPyodide();
    } catch (err) {
      self.postMessage({ type: "error", message: err.message });
    }
  } else if (type === "run") {
    try {
      const result = await runCode(e.data.code);
      self.postMessage({ type: "result", ...result });
    } catch (err) {
      self.postMessage({ type: "error", message: err.message });
    }
  }
};
