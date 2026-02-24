/**
 * Diagram state: current Mermaid code, undo/redo history, and persistence.
 * Code is synced to localStorage; initial code can come from hash (#d/base64) or storage.
 */
import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';

export const CODE_STORAGE_KEY = 'diagramium-code';
const MAX_HISTORY = 50;

export interface DiagramContextValue {
  code: string;
  setCode: (code: string) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const DiagramContext = createContext<DiagramContextValue | null>(null);

const FALLBACK_CODE = 'flowchart LR\n  A --> B';

/** Wraps the app and holds code + history; persists code to localStorage on change. */
export function DiagramProvider({
  children,
  initialCode = FALLBACK_CODE,
}: {
  children: ReactNode;
  initialCode?: string;
}) {
  const initial = initialCode !== undefined && initialCode !== null ? initialCode : FALLBACK_CODE;
  const [[history, historyIndex], setHistoryState] = useState<[string[], number]>(() => [[initial], 0]);
  const code = history[historyIndex] ?? initial;

  useEffect(() => {
    try {
      localStorage.setItem(CODE_STORAGE_KEY, code);
    } catch {
      // ignore
    }
  }, [code]);

  /** Push new code onto history; used for typing and paste. */
  const setCode = useCallback((next: string) => {
    setHistoryState(([h, i]) => {
      const current = h[i] ?? '';
      if (next === current) return [h, i];
      const nextHistory = [...h.slice(0, i + 1), next].slice(-MAX_HISTORY);
      return [nextHistory, nextHistory.length - 1];
    });
  }, []);

  const undo = useCallback(() => {
    setHistoryState(([h, i]) => (i > 0 ? [h, i - 1] : [h, i]));
  }, []);

  const redo = useCallback(() => {
    setHistoryState(([h, i]) => (i < h.length - 1 ? [h, i + 1] : [h, i]));
  }, []);

  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;

  return (
    <DiagramContext.Provider value={{ code, setCode, undo, redo, canUndo, canRedo }}>
      {children}
    </DiagramContext.Provider>
  );
}

/** Access diagram code and undo/redo from any child component. */
export function useDiagram(): DiagramContextValue {
  const ctx = useContext(DiagramContext);
  if (!ctx) throw new Error('useDiagram must be used within DiagramProvider');
  return ctx;
}

/** This to inject Mermaid code from an external pipeline (e.g. AI). Returns setCode. */
export function useSetDiagramFromAI(): (mermaidCode: string) => void {
  const { setCode } = useDiagram();
  return setCode;
}
