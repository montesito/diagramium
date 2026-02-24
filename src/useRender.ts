/**
 * Renders Mermaid code to SVG with debounce and theme support.
 * Supports inline B[#hex] / F[#hex] in code for background/foreground; keeps last valid SVG on error.
 */
import { useState, useEffect, useRef } from 'react';
import mermaid from 'mermaid';

export interface UseRenderResult {
  svg: string | null;
  /** Last valid SVG when current code has a parse/render error. */
  lastValidSvg: string | null;
  error: string | null;
  loading: boolean;
}

export interface MermaidThemeOptions {
  primaryColor?: string;
  primaryTextColor?: string;
  lineColor?: string;
  background?: string;
}

const DEFAULT_DEBOUNCE_MS = 200;

/** Apply theme to Mermaid before each render (background, node fill, text, lines). */
function applyMermaidTheme(theme?: MermaidThemeOptions) {
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'loose',
    suppressErrorRendering: true,
    theme: 'base',
    themeVariables: {
      darkMode: true,
      background: theme?.background ?? '#141414',
      primaryColor: theme?.primaryColor ?? '#2d3748',
      primaryTextColor: theme?.primaryTextColor ?? '#e2e8f0',
      lineColor: theme?.lineColor ?? '#4a5568',
    },
  });
}

/** Strips B[#hex] and F[#hex] from code; returns cleaned code and optional background/foreground. */
function parseColorDirectives(code: string): { code: string; background?: string; foreground?: string } {
  let background: string | undefined;
  let foreground: string | undefined;
  let cleaned = code;
  const bMatch = cleaned.match(/\bB\[#([0-9A-Fa-f]{6})\]/);
  if (bMatch) {
    background = '#' + bMatch[1];
    cleaned = cleaned.replace(/\bB\[#([0-9A-Fa-f]{6})\]\s*/g, '');
  }
  const fMatch = cleaned.match(/\bF\[#([0-9A-Fa-f]{6})\]/);
  if (fMatch) {
    foreground = '#' + fMatch[1];
    cleaned = cleaned.replace(/\bF\[#([0-9A-Fa-f]{6})\]\s*/g, '');
  }
  return { code: cleaned.trim(), background, foreground };
}

/**
 * Debounced Mermaid render: runs after debounceMs when code or theme change; when paused, no render.
 */
export function useRender(code: string, mermaidTheme?: MermaidThemeOptions, debounceMs = DEFAULT_DEBOUNCE_MS, paused = false): UseRenderResult {
  const [svg, setSvg] = useState<string | null>(null);
  const [lastValidSvg, setLastValidSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(0);

  useEffect(() => {
    if (paused) return;

    if (!code.trim()) {
      setSvg(null);
      setLastValidSvg(null);
      setError(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const run = async () => {
      const { code: cleaned, background: inlineBg, foreground: inlineFg } = parseColorDirectives(code);
      const theme: MermaidThemeOptions = {
        ...mermaidTheme,
        ...(inlineBg != null && { background: inlineBg }),
        ...(inlineFg != null && { primaryTextColor: inlineFg }),
      };

      try {
        applyMermaidTheme(theme);
        const id = `mermaid-${Date.now()}-${Math.random().toString(36).slice(2)}`;
        const { svg: mermaidOut } = await mermaid.render(id, cleaned);
        setSvg(mermaidOut);
        setLastValidSvg(mermaidOut);
        setError(null);
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        setError(msg);
        setSvg(null);
      }

      setLoading(false);
    };

    timerRef.current = setTimeout(run, debounceMs);
    return () => clearTimeout(timerRef.current);
  }, [code, mermaidTheme, debounceMs, paused]);

  return { svg, lastValidSvg, error, loading };
}
