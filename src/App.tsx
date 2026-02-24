/**
 * Main UI: top bar, split pane (editor + diagram), panels (examples, saved, syntax, about, how-to),
 * export dropdown, appearance, zoom/pan, and modals. State is persisted to localStorage where needed.
 */
import { useState, useCallback, useRef, useEffect, useMemo, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import Editor from '@monaco-editor/react';
import {
  Download,
  Maximize2,
  Minimize2,
  Image,
  FileImage,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Crosshair,
  Palette,
  BookOpen,
  Search,
  Trash2,
  Info,
  HelpCircle,
  Copy,
  Upload,
  Link2,
  Sun,
  Moon,
  Undo2,
  Redo2,
  AlignLeft,
  FileCode,
  Printer,
  Save,
  History,
  LayoutGrid,
  Menu,
  Pause,
  Play,
} from 'lucide-react';
import { useRender, type MermaidThemeOptions } from './useRender';
import { useDiagram } from './DiagramContext';
import { downloadSvg, downloadPng, copyPngToClipboard, downloadMarkdown, downloadMmd } from './export';
import { TEMPLATES, CATEGORY_ORDER, getCategory } from './templates';
import { getDiagramType, suggestFilename, parseErrorLine } from './utils';

// ——— App constants ———
const APP_NAME = 'Diagramium';
const APP_VERSION = '0.1.0';
const TOP_BAR_HEIGHT = 48;
const LEFT_PANEL_DEFAULT_PCT = 30;
const MIN_LEFT_PCT = 15;
const MAX_LEFT_PCT = 70;
const SAVED_STORAGE_KEY = 'diagramium-saved';
const UI_STORAGE_KEY = 'diagramium-ui';
const HINT_SEEN_KEY = 'diagramium-hint-seen';
const RECENT_EXAMPLES_KEY = 'diagramium-recent-examples';
const MAX_SAVED = 10;
const MAX_SNAPSHOTS = 10;
const MAX_RECENT_EXAMPLES = 10;
const DEBOUNCE_OPTIONS = [200, 500, 1000] as const;
const MOBILE_BREAKPOINT = 768;

/** Match a media query; updates when the query match changes (e.g. resize). */
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia(query).matches
  );
  useEffect(() => {
    const m = window.matchMedia(query);
    const handler = () => setMatches(m.matches);
    m.addEventListener('change', handler);
    setMatches(m.matches);
    return () => m.removeEventListener('change', handler);
  }, [query]);
  return matches;
}

/** Load split ratio, dark mode, and debounce from localStorage with safe defaults. */
function loadUiState(): { leftPct: number; darkMode: boolean; renderDebounceMs: number } {
  try {
    const raw = localStorage.getItem(UI_STORAGE_KEY);
    if (!raw) return { leftPct: LEFT_PANEL_DEFAULT_PCT, darkMode: true, renderDebounceMs: 200 };
    const o = JSON.parse(raw);
    return {
      leftPct: typeof o.leftPct === 'number' ? Math.max(MIN_LEFT_PCT, Math.min(MAX_LEFT_PCT, o.leftPct)) : LEFT_PANEL_DEFAULT_PCT,
      darkMode: typeof o.darkMode === 'boolean' ? o.darkMode : true,
      renderDebounceMs: [200, 500, 1000].includes(Number(o.renderDebounceMs)) ? Number(o.renderDebounceMs) : 200,
    };
  } catch {
    return { leftPct: LEFT_PANEL_DEFAULT_PCT, darkMode: true, renderDebounceMs: 200 };
  }
}

/** Load list of recently used example ids from localStorage. */
function loadRecentExampleIds(): string[] {
  try {
    const raw = localStorage.getItem(RECENT_EXAMPLES_KEY);
    if (!raw) return [];
    const a = JSON.parse(raw);
    return Array.isArray(a) ? a.slice(0, MAX_RECENT_EXAMPLES) : [];
  } catch {
    return [];
  }
}

const DEFAULT_DIAGRAM_APPEARANCE = {
  backgroundColor: 'transparent',
  borderEnabled: false,
  borderColor: '#404040',
  borderWidth: 1,
} as const;

export type DiagramAppearance = {
  backgroundColor: string;
  borderEnabled: boolean;
  borderColor: string;
  borderWidth: number;
};

const DEFAULT_MERMAID_THEME: MermaidThemeOptions = {
  background: '#141414',
  primaryColor: '#2d3748',
  primaryTextColor: '#e2e8f0',
  lineColor: '#4a5568',
};

const PRESET_COLORS = [
  '#141414', '#1a1a1a', '#262626', '#404040', '#525252', '#737373', '#a3a3a3', '#d4d4d4', '#e5e5e5', '#ffffff',
  '#3b82f6', '#2563eb', '#1d4ed8', '#60a5fa', '#93c5fd', '#1e3a8a', '#1e40af',
  '#22c55e', '#16a34a', '#15803d', '#4ade80', '#86efac', '#14532d', '#166534',
  '#e11d48', '#b91c1c', '#dc2626', '#f87171', '#fca5a5', '#7f1d1d', '#991b1b',
  '#a855f7', '#7c3aed', '#6d28d9', '#c084fc', '#d8b4fe', '#4c1d95', '#5b21b6',
  '#f59e0b', '#d97706', '#b45309', '#fbbf24', '#fcd34d', '#78350f', '#92400e',
  '#06b6d4', '#0891b2', '#0e7490', '#22d3ee', '#67e8f9', '#164e63', '#155e75',
];

export function App() {
  const { code, setCode, undo, redo, canUndo, canRedo } = useDiagram();
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT}px)`);

  // ——— UI state: modals, panels, editor, diagram ———
  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);
  const handleResetAll = useCallback(() => setResetConfirmOpen(true), []);
  const handleResetConfirm = useCallback(() => {
    setCode('');
    setResetConfirmOpen(false);
  }, [setCode]);
  const uiState = loadUiState();
  const [leftPct, setLeftPct] = useState(uiState.leftPct);
  const [exportOpen, setExportOpen] = useState(false);
  const [previewFullscreen, setPreviewFullscreen] = useState(false);
  const [diagramAppearance, setDiagramAppearance] = useState<DiagramAppearance>({ ...DEFAULT_DIAGRAM_APPEARANCE });
  const [mermaidTheme, setMermaidTheme] = useState<MermaidThemeOptions>({ ...DEFAULT_MERMAID_THEME });
  const [appearanceOpen, setAppearanceOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [howToOpen, setHowToOpen] = useState(false);
  const [examplesOpen, setExamplesOpen] = useState(false);
  const [examplesPinned, setExamplesPinned] = useState(false);
  const [examplesSearch, setExamplesSearch] = useState('');
  const [examplesCategoryFilter, setExamplesCategoryFilter] = useState('');
  const [floatingBarExpanded, setFloatingBarExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(uiState.darkMode);
  const [toast, setToast] = useState<string | null>(null);
  const [syntaxOpen, setSyntaxOpen] = useState(false);
  const [savedOpen, setSavedOpen] = useState(false);
  const [previewPaused, setPreviewPaused] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [savedDiagrams, setSavedDiagrams] = useState<Array<{ id: string; name: string; code: string; ts: number }>>(() => {
    try {
      const raw = localStorage.getItem(SAVED_STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.slice(0, MAX_SAVED) : [];
    } catch {
      return [];
    }
  });
  const [snapshotHistory, setSnapshotHistory] = useState<string[]>([]);
  const [renderDebounceMs, setRenderDebounceMs] = useState(uiState.renderDebounceMs);
  const [recentExampleIds, setRecentExampleIds] = useState<string[]>(loadRecentExampleIds);
  const resetTriggerRef = useRef<HTMLButtonElement>(null);
  const editorRef = useRef<import('monaco-editor').editor.IStandaloneCodeEditor | null>(null);
  const saveCurrentDiagramRef = useRef<() => void>(() => {});
  const resetModalRef = useRef<HTMLDivElement>(null);
  const importFileRef = useRef<HTMLInputElement>(null);
  const exportRef = useRef<HTMLDivElement>(null);
  const appearanceRef = useRef<HTMLDivElement>(null);
  const appearancePanelRef = useRef<HTMLDivElement>(null);

  const { svg, lastValidSvg, error, loading } = useRender(code, mermaidTheme, renderDebounceMs, previewPaused);
  const displaySvg = error ? lastValidSvg : svg;
  const diagramType = useMemo(() => getDiagramType(code), [code]);

  // ——— Diagram view: zoom, pan, refs for fit-to-container ———
  const splitRef = useRef<HTMLDivElement>(null);
  const [diagramScale, setDiagramScale] = useState(1);
  const [diagramX, setDiagramX] = useState(0);
  const [diagramY, setDiagramY] = useState(0);
  const diagramContainerRef = useRef<HTMLDivElement>(null);
  const diagramWrapRef = useRef<HTMLDivElement>(null);
  const diagramScaleRef = useRef(diagramScale);
  diagramScaleRef.current = diagramScale;
  const diagramXRef = useRef(diagramX);
  diagramXRef.current = diagramX;
  const diagramYRef = useRef(diagramY);
  diagramYRef.current = diagramY;
  const PAN_STEP = 40;
  const ZOOM_STEP = 0.25;
  const WHEEL_ZOOM_FACTOR = 0.0012;
  const MIN_SCALE = 0.25;
  const MAX_SCALE = 4;
  const [panDragging, setPanDragging] = useState(false);
  const lastPanClientRef = useRef({ x: 0, y: 0 });
  const [nodePositions, setNodePositions] = useState<Record<string, { x: number; y: number }>>({});
  const nodePositionsRef = useRef(nodePositions);
  nodePositionsRef.current = nodePositions;
  const [draggingNodeId, setDraggingNodeId] = useState<string | null>(null);
  const lastNodeDragRef = useRef({ x: 0, y: 0, offsetX: 0, offsetY: 0 });

  // ——— Effects: theme, persistence, click-outside, keyboard ———
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    try {
      localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(savedDiagrams));
    } catch {
      // ignore
    }
  }, [savedDiagrams]);

  useEffect(() => {
    try {
      localStorage.setItem(UI_STORAGE_KEY, JSON.stringify({ leftPct, darkMode, renderDebounceMs }));
    } catch {
      // ignore
    }
  }, [leftPct, darkMode, renderDebounceMs]);

  useEffect(() => {
    try {
      localStorage.setItem(RECENT_EXAMPLES_KEY, JSON.stringify(recentExampleIds));
    } catch {
      // ignore
    }
  }, [recentExampleIds]);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      const inExport = exportRef.current?.contains(e.target as Node);
      const inAppearance = appearanceRef.current?.contains(e.target as Node) || appearancePanelRef.current?.contains(e.target as Node);
      if (!inExport) setExportOpen(false);
      if (!inAppearance) setAppearanceOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setResetConfirmOpen(false);
        setExportOpen(false);
        setAppearanceOpen(false);
        setAboutOpen(false);
        setExamplesOpen(false);
        setHowToOpen(false);
        setSavedOpen(false);
        return;
      }
      if (e.ctrlKey || e.metaKey) {
        if (e.key === 'z') {
          e.preventDefault();
          if (e.shiftKey) redo();
          else undo();
        } else if (e.key === 'y') {
          e.preventDefault();
          redo();
        } else if (e.key === 's') {
          e.preventDefault();
          saveCurrentDiagramRef.current();
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [undo, redo]);

  // ——— Handlers: colors, toast, clear data ———
  const getColorForField = useCallback((field: string): string => {
    if (field === 'panelBg') return diagramAppearance.backgroundColor === 'transparent' ? '#141414' : diagramAppearance.backgroundColor;
    if (field === 'borderColor') return diagramAppearance.borderColor;
    if (field === 'svgBg') return mermaidTheme.background ?? DEFAULT_MERMAID_THEME.background!;
    if (field === 'nodeFill') return mermaidTheme.primaryColor ?? DEFAULT_MERMAID_THEME.primaryColor!;
    if (field === 'nodeText') return mermaidTheme.primaryTextColor ?? DEFAULT_MERMAID_THEME.primaryTextColor!;
    if (field === 'lineColor') return mermaidTheme.lineColor ?? DEFAULT_MERMAID_THEME.lineColor!;
    return '#141414';
  }, [diagramAppearance, mermaidTheme]);

  const setColorForField = useCallback((field: string, value: string) => {
    const applied = /^#[0-9A-Fa-f]{6}$/.test(value) ? value : '#141414';
    if (field === 'panelBg') setDiagramAppearance((a) => ({ ...a, backgroundColor: value === 'transparent' ? 'transparent' : applied }));
    if (field === 'borderColor') setDiagramAppearance((a) => ({ ...a, borderColor: applied }));
    if (field === 'svgBg') setMermaidTheme((t) => ({ ...t, background: applied }));
    if (field === 'nodeFill') setMermaidTheme((t) => ({ ...t, primaryColor: applied }));
    if (field === 'nodeText') setMermaidTheme((t) => ({ ...t, primaryTextColor: applied }));
    if (field === 'lineColor') setMermaidTheme((t) => ({ ...t, lineColor: applied }));
  }, []);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
  }, []);

  /** Clear all localStorage keys used by the app and reset saved/snapshot state. */
  const clearAllData = useCallback(() => {
    try {
      localStorage.removeItem('diagramium-code');
      localStorage.removeItem(SAVED_STORAGE_KEY);
      localStorage.removeItem(UI_STORAGE_KEY);
      localStorage.removeItem(HINT_SEEN_KEY);
      localStorage.removeItem(RECENT_EXAMPLES_KEY);
    } catch {

    }
    setSavedDiagrams([]);
    setSnapshotHistory([]);
    setCode('');
    setAboutOpen(false);
    showToast('All data cleared');
  }, [setCode, showToast]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2500);
    return () => clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    if (typeof localStorage === 'undefined' || localStorage.getItem(HINT_SEEN_KEY)) return;
    const t = setTimeout(() => {
      setToast('Use Examples to insert a template');
      setTimeout(() => {
        try {
          localStorage.setItem(HINT_SEEN_KEY, '1');
        } catch {

        }
      }, 2500);
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!resetConfirmOpen || !resetModalRef.current) return;
    const el = resetModalRef.current;
    const focusables = el.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    first?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    el.addEventListener('keydown', onKeyDown);
    return () => {
      el.removeEventListener('keydown', onKeyDown);
      const trigger = resetTriggerRef.current;
      requestAnimationFrame(() => trigger?.focus());
    };
  }, [resetConfirmOpen]);

  // ——— Export, save, snapshot, import, copy, print ———
  const handleExportSvg = useCallback(() => {
    if (displaySvg) downloadSvg(displaySvg, suggestFilename(code, 'diagram') + '.svg');
    setExportOpen(false);
    if (displaySvg) showToast('Downloaded SVG');
  }, [displaySvg, code, showToast]);

  const handleExportPng = useCallback(async (scale: 1 | 2 = 2) => {
    if (displaySvg) await downloadPng(displaySvg, suggestFilename(code, 'diagram') + '.png', scale);
    setExportOpen(false);
    if (displaySvg) showToast('Downloaded PNG');
  }, [displaySvg, code, showToast]);

  const handleExportMarkdown = useCallback(() => {
    downloadMarkdown(code, suggestFilename(code, 'diagram') + '.md');
    setExportOpen(false);
    showToast('Downloaded .md');
  }, [code, showToast]);

  const handleExportMmd = useCallback(() => {
    downloadMmd(code, suggestFilename(code, 'diagram') + '.mmd');
    setExportOpen(false);
    showToast('Downloaded .mmd');
  }, [code, showToast]);

  const handleCopyError = useCallback(async () => {
    if (!error) return;
    try {
      await navigator.clipboard.writeText(error);
      showToast('Error copied');
    } catch {
      showToast('Copy failed');
    }
  }, [error, showToast]);

  const handleErrorStripClick = useCallback(() => {
    if (!error) return;
    const line = parseErrorLine(error);
    const editor = editorRef.current;
    if (editor && line != null) {
      editor.revealLine(line);
      editor.setPosition({ lineNumber: line, column: 1 });
      editor.focus();
    }
  }, [error]);

  const saveCurrentDiagram = useCallback(() => {
    const name = suggestFilename(code, 'diagram') || 'diagram';
    const id = `saved-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    setSavedDiagrams((prev) => [{ id, name, code, ts: Date.now() }, ...prev].slice(0, MAX_SAVED));
    setSavedOpen(true);
    showToast('Saved');
  }, [code, showToast]);
  saveCurrentDiagramRef.current = saveCurrentDiagram;

  const openSaved = useCallback((item: { code: string }) => {
    setCode(item.code);
    setSavedOpen(false);
    showToast('Opened');
  }, [setCode, showToast]);

  const removeSaved = useCallback((id: string) => {
    setSavedDiagrams((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const takeSnapshot = useCallback(() => {
    setSnapshotHistory((prev) => [code, ...prev].slice(0, MAX_SNAPSHOTS));
    showToast('Snapshot saved');
  }, [code, showToast]);

  const restoreSnapshot = useCallback((snapshotCode: string) => {
    setCode(snapshotCode);
    showToast('Restored');
  }, [setCode, showToast]);

  const handleCopyPng = useCallback(async () => {
    if (!displaySvg) return;
    const ok = await copyPngToClipboard(displaySvg);
    showToast(ok ? 'Copied image' : 'Copy failed');
    if (ok) setExportOpen(false);
  }, [displaySvg, showToast]);

  const handleCopyMarkdown = useCallback(async () => {
    const text = '```mermaid\n' + code + '\n```';
    try {
      await navigator.clipboard.writeText(text);
      showToast('Copied as Markdown');
      setExportOpen(false);
    } catch {
      showToast('Copy failed');
    }
  }, [code, showToast]);

  const handleCopyCode = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      showToast('Copied code');
      setExportOpen(false);
    } catch {
      showToast('Copy failed');
    }
  }, [code, showToast]);

  const handleCopyLink = useCallback(async () => {
    try {
      const encoded = btoa(unescape(encodeURIComponent(code)));
      const url = window.location.origin + window.location.pathname + '#d/' + encoded;
      await navigator.clipboard.writeText(url);
      showToast('Link copied');
      setExportOpen(false);
    } catch {
      showToast('Copy failed');
    }
  }, [code, showToast]);

  const handlePrint = useCallback(() => {
    if (!displaySvg) return;
    const win = window.open('', '_blank');
    if (!win) {
      showToast('Popup blocked');
      return;
    }
    win.document.write(`
      <!DOCTYPE html><html><head><title>Diagram</title><style>body{margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#fff;} svg{max-width:100%;height:auto;}</style></head>
      <body>${displaySvg}</body></html>
    `);
    win.document.close();
    win.focus();
    setTimeout(() => {
      win.print();
      win.close();
    }, 300);
    setExportOpen(false);
    showToast('Print dialog opened');
  }, [displaySvg, showToast]);

  const handleImportFile = useCallback(() => {
    importFileRef.current?.click();
  }, []);

  const onImportFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const text = typeof reader.result === 'string' ? reader.result : '';
        const extracted = text.replace(/^[\s\S]*?```mermaid\n?/, '').replace(/\n?```[\s\S]*$/, '').trim() || text.trim();
        setCode(extracted);
        setExportOpen(false);
      };
      reader.readAsText(file);
      e.target.value = '';
    },
    [setCode]
  );

  const handleFormat = useCallback(() => {
    // Trim trailing spaces per line and collapse multiple blank lines to one
    const lines = code.split('\n').map((l) => l.trimEnd());
    const out: string[] = [];
    let prevBlank = false;
    for (const line of lines) {
      const blank = line === '';
      if (blank && prevBlank) continue;
      prevBlank = blank;
      out.push(line);
    }
    setCode(out.join('\n').trim());
  }, [code, setCode]);

  // ——— Diagram zoom, pan, center, wheel; split-pane resize ———
  const diagramZoomIn = useCallback(() => setDiagramScale((s) => Math.min(MAX_SCALE, s + ZOOM_STEP)), []);
  const diagramZoomOut = useCallback(() => setDiagramScale((s) => Math.max(MIN_SCALE, s - ZOOM_STEP)), []);
  const diagramCenter = useCallback(() => {
    setDiagramX(0);
    setDiagramY(0);
    const container = diagramContainerRef.current;
    const wrap = diagramWrapRef.current;
    if (container && wrap) {
      const svgEl = wrap.querySelector('svg');
      if (svgEl) {
        const cRect = container.getBoundingClientRect();
        const sRect = svgEl.getBoundingClientRect();
        const currentScale = diagramScaleRef.current;
        const intrinsicWidth = Math.max(1, sRect.width / currentScale);
        const scaleFit = (cRect.width * 0.95) / intrinsicWidth;
        setDiagramScale(Math.max(MIN_SCALE, Math.min(MAX_SCALE, scaleFit)));
        return;
      }
    }
    setDiagramScale(1);
  }, []);
  const diagramPan = useCallback((dx: number, dy: number) => {
    setDiagramX((x) => x + dx);
    setDiagramY((y) => y + dy);
  }, []);

  const handleDiagramPanStart = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return;
    if ((e.target as Element)?.closest?.('g[data-id]')) return;
    setPanDragging(true);
    lastPanClientRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    if (!panDragging) return;
    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPanClientRef.current.x;
      const dy = e.clientY - lastPanClientRef.current.y;
      lastPanClientRef.current = { x: e.clientX, y: e.clientY };
      setDiagramX((x) => x + dx);
      setDiagramY((y) => y + dy);
    };
    const onUp = () => setPanDragging(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [panDragging]);

  const handleDiagramWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    const container = diagramContainerRef.current;
    const delta = -e.deltaY * WHEEL_ZOOM_FACTOR;
    const s = diagramScaleRef.current;
    const newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, s + delta));
    if (container && newScale !== s) {
      const rect = container.getBoundingClientRect();
      const pad = 24;
      const cx = e.clientX - rect.left - pad;
      const cy = e.clientY - rect.top - pad;
      const dx = diagramXRef.current;
      const dy = diagramYRef.current;
      const ux = (cx - dx) / s;
      const uy = (cy - dy) / s;
      setDiagramX(dx + ux * (s - newScale));
      setDiagramY(dy + uy * (s - newScale));
    }
    setDiagramScale(newScale);
  }, []);

  useEffect(() => {
    if (!displaySvg) return;
    const el = diagramContainerRef.current;
    if (!el) return;
    el.addEventListener('wheel', handleDiagramWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleDiagramWheel);
  }, [handleDiagramWheel, displaySvg]);

  useEffect(() => {
    if (!svg) return;
    setNodePositions({});
  }, [svg]);

  useEffect(() => {
    const wrap = diagramWrapRef.current;
    if (!wrap || !svg) return;
    const svgEl = wrap.querySelector('svg');
    if (!svgEl) return;
    const nodes = svgEl.querySelectorAll<SVGGElement>('g[data-id]');
    nodes.forEach((g) => {
      const id = g.getAttribute('data-id');
      if (!id) return;
      const pos = nodePositions[id];
      g.style.transform = pos ? `translate(${pos.x}px, ${pos.y}px)` : '';
      g.style.cursor = 'grab';
      g.style.transformOrigin = '0 0';
    });
  }, [svg, nodePositions]);

  useEffect(() => {
    const wrap = diagramWrapRef.current;
    if (!wrap || !svg) return;
    const svgEl = wrap.querySelector('svg');
    if (!svgEl) return;
    const nodes = svgEl.querySelectorAll<SVGGElement>('g[data-id]');
    const cleanups: Array<() => void> = [];
    nodes.forEach((g) => {
      const id = g.getAttribute('data-id');
      if (!id) return;
      const onDown = (e: MouseEvent) => {
        if (e.button !== 0) return;
        e.stopPropagation();
        e.preventDefault();
        setDraggingNodeId(id);
        const current = nodePositionsRef.current[id];
        lastNodeDragRef.current = {
          x: e.clientX,
          y: e.clientY,
          offsetX: current?.x ?? 0,
          offsetY: current?.y ?? 0,
        };
      };
      g.addEventListener('mousedown', onDown);
      cleanups.push(() => g.removeEventListener('mousedown', onDown));
    });
    return () => cleanups.forEach((c) => c());
  }, [svg]);

  useEffect(() => {
    if (draggingNodeId === null) return;
    const onMove = (e: MouseEvent) => {
      const { x, y, offsetX, offsetY } = lastNodeDragRef.current;
      setNodePositions((prev) => ({
        ...prev,
        [draggingNodeId]: {
          x: offsetX + (e.clientX - x),
          y: offsetY + (e.clientY - y),
        },
      }));
    };
    const onUp = () => setDraggingNodeId(null);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [draggingNodeId]);

  // refit when diagram or container size changes
  useEffect(() => {
    if (!svg) return;
    setDiagramX(0);
    setDiagramY(0);
    const fitToContainer = () => {
      const container = diagramContainerRef.current;
      const wrap = diagramWrapRef.current;
      if (!container || !wrap) return;
      const svgEl = wrap.querySelector('svg') as SVGSVGElement | null;
      if (!svgEl) return;
      const cRect = container.getBoundingClientRect();
      const pad = 48; // 24*2
      const availW = Math.max(1, cRect.width - pad);
      const availH = Math.max(1, cRect.height - pad);
      const bbox = svgEl.getBBox?.();
      const intrinsicW = bbox ? Math.max(1, bbox.width) : (svgEl.getBoundingClientRect().width || 1);
      const intrinsicH = bbox ? Math.max(1, bbox.height) : (svgEl.getBoundingClientRect().height || 1);
      const scaleW = availW / intrinsicW;
      const scaleH = availH / intrinsicH;
      const scaleFit = Math.min(scaleW, scaleH) * 0.95; 
      const scale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scaleFit));
      setDiagramScale(scale);
    };
    const t1 = setTimeout(fitToContainer, 0);
    const t2 = setTimeout(fitToContainer, 150);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [svg]);

  /** Drag to change editor/diagram split (horizontal on desktop, vertical on mobile). */
  const startResize = useCallback((vertical: boolean) => {
    const onMove = (e: MouseEvent) => {
      const el = splitRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const pct = vertical
        ? Math.min(MAX_LEFT_PCT, Math.max(MIN_LEFT_PCT, ((e.clientY - rect.top) / rect.height) * 100))
        : Math.min(MAX_LEFT_PCT, Math.max(MIN_LEFT_PCT, ((e.clientX - rect.left) / rect.width) * 100));
      setLeftPct(pct);
    };
    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.body.style.cursor = vertical ? 'row-resize' : 'col-resize';
    document.body.style.userSelect = 'none';
  }, []);

  const handleResizePointerDown = useCallback(() => {
    startResize(isMobile);
  }, [isMobile, startResize]);

  /** Insert a template into the editor and add its id to recent examples. */
  const applyExample = useCallback((t: (typeof TEMPLATES)[number]) => {
    setCode(t.code);
    setRecentExampleIds((prev) => [t.id, ...prev.filter((id) => id !== t.id)].slice(0, MAX_RECENT_EXAMPLES));
    if (!examplesPinned) setExamplesOpen(false);
  }, [setCode, examplesPinned]);

  const examplesFiltered = useMemo(() => {
    const q = examplesSearch.trim().toLowerCase();
    const cat = examplesCategoryFilter;
    return TEMPLATES.filter((t) => {
      const matchCat = !cat || (cat === 'Recent' ? recentExampleIds.includes(t.id) : getCategory(t) === cat);
      const matchSearch = !q || t.name.toLowerCase().includes(q) || (t.code.split('\n')[0]?.trim() ?? '').toLowerCase().includes(q) || t.id.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [examplesSearch, examplesCategoryFilter, recentExampleIds]);

  const examplesByCategory = useMemo(() => {
    const order = examplesCategoryFilter ? [examplesCategoryFilter] : [...(recentExampleIds.length > 0 ? ['Recent' as const] : []), ...CATEGORY_ORDER];
    return order.map((category) => ({
      category,
      items: category === 'Recent' ? examplesFiltered.filter((t) => recentExampleIds.includes(t.id)) : examplesFiltered.filter((t) => getCategory(t) === category),
    })).filter((g) => g.items.length > 0);
  }, [examplesFiltered, examplesCategoryFilter, recentExampleIds]);

  const iconBtnStyle: CSSProperties = {
    minWidth: 40,
    minHeight: 40,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: 8,
    background: 'transparent',
    color: 'var(--text)',
    cursor: 'pointer',
    transition: 'background 0.15s',
  };

  const floatingPanelStyle: CSSProperties = {
    position: 'fixed',
    ...(isMobile
      ? {
          top: 'calc(env(safe-area-inset-top, 0px) + ' + (TOP_BAR_HEIGHT + 52) + 'px)',
          left: '10vw',
          right: '10vw',
          maxWidth: 420,
          bottom: 'max(env(safe-area-inset-bottom, 0px) + 8px, 8px)',
        }
      : {
          left: 56,
          top: TOP_BAR_HEIGHT,
          bottom: 0,
          width: aboutOpen || syntaxOpen || savedOpen ? 320 : examplesOpen ? 300 : 320,
        }),
    zIndex: 50,
    background: 'var(--surface)',
    borderLeft: isMobile ? 'none' : '1px solid var(--border)',
    boxShadow: isMobile ? '0 0 24px rgba(0,0,0,0.4)' : '4px 0 24px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  };

  return (
    <>
    {toast && createPortal(
      <div role="status" aria-live="polite" style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 300, padding: '10px 16px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, boxShadow: '0 8px 24px rgba(0,0,0,0.3)', fontSize: 12, color: 'var(--text)' }}>
        {toast}
      </div>,
      document.body
    )}
    {resetConfirmOpen && createPortal(
      <div
        ref={resetModalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="reset-confirm-title"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.5)',
          padding: 24,
        }}
        onClick={() => setResetConfirmOpen(false)}
      >
        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
            padding: 20,
            maxWidth: 360,
            width: '100%',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 id="reset-confirm-title" style={{ margin: '0 0 10px', fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>Clear editor?</h2>
          <p style={{ margin: '0 0 20px', fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>This will clear the editor and diagram. This cannot be undone.</p>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
            <button
              type="button"
              onClick={() => setResetConfirmOpen(false)}
              style={{ padding: '8px 14px', fontSize: 12, border: '1px solid var(--border)', borderRadius: 6, background: 'var(--bg)', color: 'var(--text)', cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleResetConfirm}
              style={{ padding: '8px 14px', fontSize: 12, border: 'none', borderRadius: 6, background: 'var(--accent)', color: '#fff', cursor: 'pointer' }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>,
      document.body
    )}
    {isMobile && floatingBarExpanded && createPortal(
      <div
        style={{
          position: 'fixed',
          top: 'calc(env(safe-area-inset-top, 0px) + ' + (TOP_BAR_HEIGHT + 40) + 'px)',
          right: 10,
          zIndex: 45,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 4,
          padding: 6,
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 10,
          boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
        }}
      >
        {floatingBarExpanded ? (
          <>
            <button
              type="button"
              onClick={() => { setFloatingBarExpanded(false); setAboutOpen(true); setExamplesOpen(false); setSavedOpen(false); setSyntaxOpen(false); setHowToOpen(false); }}
              title="About"
              aria-label="About"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, padding: '4px 6px', border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', fontSize: 11 }}
            >
              <span>About</span>
              <Info size={16} />
            </button>
            <button
              type="button"
              onClick={() => { setFloatingBarExpanded(false); setExamplesOpen(true); setAboutOpen(false); setSavedOpen(false); setSyntaxOpen(false); setHowToOpen(false); }}
              title="Examples"
              aria-label="Examples"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, padding: '4px 6px', border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', fontSize: 11 }}
            >
              <span>Examples</span>
              <BookOpen size={16} />
            </button>
            <button
              type="button"
              onClick={() => { setFloatingBarExpanded(false); setSavedOpen(true); setAboutOpen(false); setExamplesOpen(false); setSyntaxOpen(false); setHowToOpen(false); }}
              title="Saved & history"
              aria-label="Saved and history"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, padding: '4px 6px', border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', fontSize: 11 }}
            >
              <span>Saved</span>
              <Save size={16} />
            </button>
            <button
              type="button"
              onClick={() => { setFloatingBarExpanded(false); setSyntaxOpen(true); setAboutOpen(false); setExamplesOpen(false); setSavedOpen(false); setHowToOpen(false); }}
              title="Syntax"
              aria-label="Syntax"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, padding: '4px 6px', border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', fontSize: 11 }}
            >
              <span>Syntax</span>
              <FileCode size={16} />
            </button>
            <button
              type="button"
              onClick={() => { setFloatingBarExpanded(false); setHowToOpen(true); setAboutOpen(false); setExamplesOpen(false); setSavedOpen(false); setSyntaxOpen(false); }}
              title="How to use"
              aria-label="How to use"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, padding: '4px 6px', border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', fontSize: 11 }}
            >
              <span>How to</span>
              <HelpCircle size={16} />
            </button>
            <span style={{ width: '100%', height: 1, background: 'var(--border)', margin: '4px 0' }} aria-hidden="true" />
            <button
              type="button"
              onClick={() => setFloatingBarExpanded(false)}
              title="Collapse"
              aria-label="Collapse bar"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px 6px', border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', fontSize: 11 }}
            >
              <ChevronUp size={14} />
            </button>
          </>
        ) : null}
      </div>,
      document.body
    )}
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, height: '100vh' }}>
      {/* Spacer for fixed header height */}
      <div
        style={{
          flexShrink: 0,
          height: isMobile ? 'calc(env(safe-area-inset-top, 0px) + ' + TOP_BAR_HEIGHT + 'px)' : TOP_BAR_HEIGHT,
        }}
        aria-hidden="true"
      />
      <div
        ref={splitRef}
        className={`split-pane ${isMobile ? 'split-pane-mobile' : ''}`}
        style={{
          flex: 1,
          minHeight: 0,
          width: '100%',
          position: 'relative',
          zIndex: 0,
          isolation: 'isolate' as const,
          display: 'flex',
          ...(isMobile ? { flexDirection: 'column' } : {}),
        }}
      >
        {/* Left: strip + editor, or strip only when fullscreen */}
        <div
          className="pane pane-left"
          style={{
            display: 'flex',
            flexDirection: 'row',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 0,
            borderRight: isMobile ? 'none' : '1px solid var(--border)',
            borderBottom: isMobile && !previewFullscreen ? '1px solid var(--border)' : 'none',
            ...(previewFullscreen
              ? isMobile
                ? { flex: '0 0 auto', width: '100%', height: 0, minHeight: 0 }
                : { flex: '0 0 auto', width: 56, minWidth: 56, maxWidth: 56, minHeight: 0 }
              : isMobile
                ? { flex: '0 0 auto', width: '100%', height: `${leftPct}%`, minHeight: 80, maxHeight: '85%' }
                : { flex: '0 0 auto', width: `${leftPct}%`, minWidth: 120, maxWidth: '85%', minHeight: 0 }),
          }}
        >
          {!isMobile && (
          <div
            className="frame-toolbar"
            style={{
              width: 56,
              flexShrink: 0,
              borderRight: '1px solid var(--border)',
              background: 'var(--surface)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '8px 0',
              gap: 2,
            }}
          >
            <button type="button" style={iconBtnStyle} onClick={() => { setExamplesOpen(false); setHowToOpen(false); setSyntaxOpen(false); setSavedOpen(false); setAboutOpen((o) => !o); }} title="About" aria-label="About">
              <Info size={20} />
            </button>
            <button type="button" style={iconBtnStyle} onClick={() => { setAboutOpen(false); setHowToOpen(false); setSyntaxOpen(false); setSavedOpen(false); setExamplesOpen((o) => !o); }} title="Examples" aria-label="Examples">
              <BookOpen size={20} />
            </button>
            <button type="button" style={iconBtnStyle} onClick={() => { setAboutOpen(false); setExamplesOpen(false); setHowToOpen(false); setSyntaxOpen(false); setSavedOpen((o) => !o); }} title="Saved &amp; history" aria-label="Saved and history">
              <Save size={20} />
            </button>
            <span style={{ width: '100%', height: 1, background: 'var(--border)', margin: '4px 8px 0', flexShrink: 0 }} aria-hidden="true" />
            <button type="button" style={iconBtnStyle} onClick={() => { setAboutOpen(false); setExamplesOpen(false); setSavedOpen(false); setHowToOpen(false); setSyntaxOpen((o) => !o); }} title="Syntax cheat sheet" aria-label="Syntax">
              <FileCode size={20} />
            </button>
            <button type="button" style={iconBtnStyle} onClick={() => { setAboutOpen(false); setExamplesOpen(false); setSyntaxOpen(false); setSavedOpen(false); setHowToOpen((o) => !o); }} title="How to use" aria-label="How to use">
              <HelpCircle size={20} />
            </button>
          </div>
          )}
          {!previewFullscreen && (
          <div className="editor-column" style={{ flex: 1, minWidth: 0, minHeight: 0, display: 'flex', flexDirection: 'column', background: 'var(--surface)', position: 'relative', zIndex: 0, overflow: 'hidden' }}>
            <div style={{ flexShrink: 0, padding: '2px 10px', borderBottom: '1px solid var(--border)', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 11, color: 'var(--text)', fontWeight: 500 }}>Editor — enter Mermaid code</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 10, color: 'var(--muted)' }}>
                  Render:
                  <select value={renderDebounceMs} onChange={(e) => setRenderDebounceMs(Number(e.target.value))} style={{ padding: '2px 6px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--bg)', color: 'var(--text)', fontSize: 10, cursor: 'pointer' }}>
                    {DEBOUNCE_OPTIONS.map((ms) => (
                      <option key={ms} value={ms}>{ms}ms</option>
                    ))}
                  </select>
                </label>
                <button type="button" onClick={() => setPreviewPaused((p) => !p)} title={previewPaused ? 'Resume preview' : 'Pause preview'} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px 8px', border: '1px solid var(--border)', borderRadius: 4, background: previewPaused ? 'var(--accent)' : 'var(--bg)', color: previewPaused ? '#fff' : 'var(--text)', cursor: 'pointer', fontSize: 11 }}>{previewPaused ? <Play size={12} /> : <Pause size={12} />} {previewPaused ? 'Resume' : 'Pause'}</button>
                <button type="button" onClick={takeSnapshot} title="Save snapshot to history" style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px 8px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--bg)', color: 'var(--text)', cursor: 'pointer', fontSize: 11 }}><History size={12} /> Snapshot</button>
                <button type="button" onClick={handleFormat} title="Format code" style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px 8px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--bg)', color: 'var(--text)', cursor: 'pointer', fontSize: 11 }}><AlignLeft size={12} /> Format</button>
              </div>
            </div>
            <div style={{ flex: 1, minHeight: 0, background: 'var(--surface)' }}>
              <Editor
                height="100%"
                defaultLanguage="markdown"
                language="markdown"
                value={code ?? ''}
                onChange={(v) => setCode(v ?? '')}
                onMount={(editor) => { editorRef.current = editor; }}
                theme={darkMode ? 'vs-dark' : 'vs-light'}
                options={{
                  minimap: { enabled: true },
                  lineNumbers: 'on',
                  wordWrap: 'on',
                  padding: { top: 8 },
                  fontSize: 13,
                  fontFamily: 'var(--font-mono)',
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                }}
                loading={<span style={{ color: 'var(--muted)' }}>Loading…</span>}
              />
            </div>
            {error && (
              <div style={{ flexShrink: 0, padding: '8px 10px', borderTop: '1px solid var(--border)', background: 'rgba(239,68,68,0.1)', fontSize: 11, color: 'var(--error)', display: 'flex', alignItems: 'flex-start', gap: 8, cursor: 'pointer' }} role="alert" onClick={handleErrorStripClick} title="Jump to line in editor">
                <pre style={{ margin: 0, whiteSpace: 'pre-wrap', maxHeight: 80, overflow: 'auto', flex: 1 }}>{error}</pre>
                <button type="button" onClick={(e) => { e.stopPropagation(); handleCopyError(); }} title="Copy error" style={{ flexShrink: 0, padding: '4px 8px', border: '1px solid var(--error)', borderRadius: 4, background: 'transparent', color: 'var(--error)', cursor: 'pointer', fontSize: 10 }}><Copy size={12} /> Copy</button>
              </div>
            )}
          </div>
          )}
        </div>
        {!previewFullscreen && (
        <div
          role="button"
          tabIndex={0}
          className={`resize-handle ${isMobile ? 'resize-handle-mobile' : ''}`}
          style={isMobile ? { width: '100%', height: 10, minHeight: 10, cursor: 'row-resize', touchAction: 'none' } : undefined}
          onMouseDown={handleResizePointerDown}
          onTouchStart={(e) => {
            if (!isMobile || !e.touches.length) return;
            e.preventDefault();
            const onMove = (ev: TouchEvent) => {
              const el = splitRef.current;
              if (!el || !ev.touches.length) return;
              const rect = el.getBoundingClientRect();
              const y = ev.touches[0].clientY - rect.top;
              const pct = Math.min(MAX_LEFT_PCT, Math.max(MIN_LEFT_PCT, (y / rect.height) * 100));
              setLeftPct(pct);
            };
            const onEnd = () => {
              document.removeEventListener('touchmove', onMove, { capture: true });
              document.removeEventListener('touchend', onEnd);
            };
            document.addEventListener('touchmove', onMove, { passive: false, capture: true });
            document.addEventListener('touchend', onEnd);
          }}
          onKeyDown={(e) => e.key === 'Enter' && handleResizePointerDown()}
          aria-label="Resize panels"
        />
        )}
        <div
          className="pane pane-right"
          style={{
            flex: '1 1 0',
            minWidth: isMobile ? 0 : 200,
            minHeight: isMobile ? 200 : 0,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            position: 'relative',
            overflow: 'hidden',
            zIndex: 10,
          }}
        >
          <div
            className="diagram-content"
            style={{
              flex: 1,
              minHeight: 0,
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              background: 'var(--surface)',
              position: 'relative',
            }}
          >
            {/* Diagram toolbox */}
            {displaySvg && (
              <div
                className={`toolbar diagram-toolbar ${isMobile ? 'diagram-toolbar-mobile' : ''}`}
                style={{
                  position: 'absolute',
                  bottom: 12,
                  left: 12,
                  zIndex: 20,
                  padding: '8px 6px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4,
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  ...(isMobile ? { paddingBottom: 'max(8px, env(safe-area-inset-bottom, 0px))' } : {}),
                }}
              >
                <div ref={appearanceRef} style={{ display: 'flex' }}>
                  <button type="button" style={{ ...iconBtnStyle, minHeight: 36, minWidth: 36 }} onClick={() => setAppearanceOpen((o) => !o)} title="Diagram colors" aria-label="Diagram colors">
                    <Palette size={18} />
                  </button>
                </div>
                <button type="button" onClick={() => setShowGrid((g) => !g)} title={showGrid ? 'Hide grid' : 'Show grid'} style={{ ...iconBtnStyle, minHeight: 36, minWidth: 36, background: showGrid ? 'var(--accent)' : undefined, color: showGrid ? '#fff' : undefined }} aria-label="Toggle grid">
                  <LayoutGrid size={18} />
                </button>
                <button type="button" onClick={diagramCenter} title="Fit to view" aria-label="Fit" style={{ ...iconBtnStyle, minHeight: 36, minWidth: 36 }}>
                  <Crosshair size={18} />
                </button>
                <button type="button" onClick={() => setDiagramScale(1)} title="100%" style={{ ...iconBtnStyle, minHeight: 28, minWidth: 36, fontSize: 10 }}>100%</button>
                <button type="button" onClick={diagramZoomIn} title="Zoom in" aria-label="Zoom in" style={{ ...iconBtnStyle, minHeight: 36, minWidth: 36 }}>
                  <Plus size={18} />
                </button>
                <span style={{ minWidth: 36, textAlign: 'center', fontSize: 10, color: 'var(--muted)' }} title="Zoom">{Math.round(diagramScale * 100)}%</span>
                <button type="button" onClick={diagramZoomOut} title="Zoom out" aria-label="Zoom out" style={{ ...iconBtnStyle, minHeight: 36, minWidth: 36 }}>
                  <Minus size={18} />
                </button>
                <span style={{ width: 20, height: 1, background: 'var(--border)' }} />
                <button type="button" onClick={() => diagramPan(0, -PAN_STEP)} title="Pan up" aria-label="Pan up" style={{ ...iconBtnStyle, minHeight: 36, minWidth: 36 }}>
                  <ChevronUp size={18} />
                </button>
                <button type="button" onClick={() => diagramPan(PAN_STEP, 0)} title="Pan right" aria-label="Pan right" style={{ ...iconBtnStyle, minHeight: 36, minWidth: 36 }}>
                  <ChevronRight size={18} />
                </button>
                <button type="button" onClick={() => diagramPan(-PAN_STEP, 0)} title="Pan left" aria-label="Pan left" style={{ ...iconBtnStyle, minHeight: 36, minWidth: 36 }}>
                  <ChevronLeft size={18} />
                </button>
                <button type="button" onClick={() => diagramPan(0, PAN_STEP)} title="Pan down" aria-label="Pan down" style={{ ...iconBtnStyle, minHeight: 36, minWidth: 36 }}>
                  <ChevronDown size={18} />
                </button>
              </div>
            )}
            {loading && <span style={{ position: 'absolute', top: 8, right: 8, fontSize: 11, color: 'var(--muted)', zIndex: 5 }}>Updating…</span>}
            {diagramType && displaySvg && (
              <button type="button" onClick={() => setSyntaxOpen(true)} title="Open syntax" style={{ position: 'absolute', top: 8, left: 12, zIndex: 5, fontSize: 10, fontWeight: 600, color: 'var(--muted)', background: 'var(--surface)', padding: '4px 8px', borderRadius: 4, border: '1px solid var(--border)', cursor: 'pointer' }}>{diagramType}</button>
            )}
            {error && !lastValidSvg && <pre className="preview-error" style={{ margin: 16 }}>{error}</pre>}
            {!displaySvg && (
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}>{loading ? 'Loading…' : 'Diagram'}</div>
            )}
            {displaySvg && (
              <>
                {error && (
                  <div style={{ position: 'absolute', top: 8, right: 8, left: 12, zIndex: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                    <span style={{ fontSize: 11, color: 'var(--error)', background: 'rgba(239,68,68,0.15)', padding: '6px 12px', borderRadius: 6, border: '1px solid var(--error)' }}>Diagram has errors — see editor</span>
                  </div>
                )}
                <div
                  ref={diagramContainerRef}
                  onMouseDown={handleDiagramPanStart}
                  style={{
                    flex: 1,
                    minHeight: 0,
                    minWidth: 0,
                    overflow: 'auto',
                    padding: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    cursor: panDragging || draggingNodeId ? 'grabbing' : 'grab',
                    ...(showGrid && {
                      backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                    }),
                  }}
                >
                  <div
                    ref={diagramWrapRef}
                    style={{
                      transform: `translate(${diagramX}px, ${diagramY}px) scale(${diagramScale})`,
                      transformOrigin: '0 0',
                      display: 'inline-block',
                      padding: 12,
                      background: diagramAppearance.backgroundColor,
                      border: diagramAppearance.borderEnabled
                        ? `${diagramAppearance.borderWidth}px solid ${diagramAppearance.borderColor}`
                        : 'none',
                      borderRadius: 4,
                    }}
                    dangerouslySetInnerHTML={{ __html: displaySvg }}
                  />
                </div>
              </>
            )}
          </div>
          {appearanceOpen && (
            <div
              ref={appearancePanelRef}
              role="dialog"
              aria-label="Diagram colors"
              style={{
                width: 280,
                flexShrink: 0,
                borderLeft: '1px solid var(--border)',
                background: 'var(--surface)',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 0,
                overflow: 'hidden',
              }}
            >
              <div style={{ flexShrink: 0, padding: 10, borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)' }}>Diagram colors</span>
                <button type="button" onClick={() => setAppearanceOpen(false)} title="Close" style={{ padding: 4, border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', fontSize: 16 }} aria-label="Close">×</button>
              </div>
              <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: 10, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600 }}>Panel background</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: 4 }}>
                    {PRESET_COLORS.map((hex) => (
                      <button key={hex} type="button" onClick={() => setColorForField('panelBg', hex)} style={{ width: 22, height: 22, padding: 0, border: getColorForField('panelBg').toLowerCase() === hex ? '2px solid var(--accent)' : '1px solid var(--border)', borderRadius: 4, cursor: 'pointer', background: hex, boxSizing: 'border-box' }} title={hex} />
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <input type="text" value={getColorForField('panelBg')} onChange={(e) => { const v = e.target.value; if (v === '' || /^#[0-9A-Fa-f]{0,6}$/.test(v) || /^[0-9A-Fa-f]{0,6}$/.test(v)) setColorForField('panelBg', v.startsWith('#') ? v : v ? '#' + v : '#141414'); }} style={{ flex: 1, padding: '6px 8px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--bg)', color: 'var(--text)', fontSize: 12 }} placeholder="#000000" />
                    <button type="button" onClick={() => setDiagramAppearance((a) => ({ ...a, backgroundColor: 'transparent' }))} style={{ fontSize: 11, padding: '4px 8px', border: '1px solid var(--border)', borderRadius: 4, background: 'transparent', color: 'var(--text)', cursor: 'pointer' }}>None</button>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <label style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600 }}>Border</label>
                  <input type="checkbox" checked={diagramAppearance.borderEnabled} onChange={(e) => setDiagramAppearance((a) => ({ ...a, borderEnabled: e.target.checked }))} style={{ width: 16, height: 16, cursor: 'pointer' }} />
                </div>
                {diagramAppearance.borderEnabled && (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600 }}>Border color</label>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: 4 }}>
                        {PRESET_COLORS.map((hex) => (
                          <button key={hex} type="button" onClick={() => setColorForField('borderColor', hex)} style={{ width: 22, height: 22, padding: 0, border: diagramAppearance.borderColor.toLowerCase() === hex ? '2px solid var(--accent)' : '1px solid var(--border)', borderRadius: 4, cursor: 'pointer', background: hex, boxSizing: 'border-box' }} title={hex} />
                        ))}
                      </div>
                      <input type="text" value={diagramAppearance.borderColor} onChange={(e) => { const v = e.target.value; if (v === '' || /^#[0-9A-Fa-f]{0,6}$/.test(v) || /^[0-9A-Fa-f]{0,6}$/.test(v)) setColorForField('borderColor', v.startsWith('#') ? v : v ? '#' + v : '#141414'); }} style={{ padding: '6px 8px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--bg)', color: 'var(--text)', fontSize: 12 }} placeholder="#000000" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <label style={{ fontSize: 11, color: 'var(--muted)' }}>Border width</label>
                      <input type="number" min={1} max={8} value={diagramAppearance.borderWidth} onChange={(e) => setDiagramAppearance((a) => ({ ...a, borderWidth: Math.max(1, Math.min(8, parseInt(e.target.value, 10) || 1)) }))} style={{ width: 48, padding: '4px 6px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--bg)', color: 'var(--text)', fontSize: 12 }} />
                    </div>
                  </>
                )}
                <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600 }}>Diagram colors</div>
                {(['svgBg', 'nodeFill', 'nodeText', 'lineColor'] as const).map((field) => {
                  const label = ({ svgBg: 'SVG background', nodeFill: 'Node fill', nodeText: 'Node text', lineColor: 'Lines / arrows' } as Record<string, string>)[field];
                  const value = getColorForField(field);
                  return (
                    <div key={field} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label style={{ fontSize: 11, color: 'var(--muted)' }}>{label}</label>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: 4 }}>
                        {PRESET_COLORS.map((hex) => (
                          <button key={hex} type="button" onClick={() => setColorForField(field, hex)} style={{ width: 22, height: 22, padding: 0, border: value.toLowerCase() === hex ? '2px solid var(--accent)' : '1px solid var(--border)', borderRadius: 4, cursor: 'pointer', background: hex, boxSizing: 'border-box' }} title={hex} />
                        ))}
                      </div>
                      <input type="text" value={value} onChange={(e) => { const v = e.target.value; if (v === '' || /^#[0-9A-Fa-f]{0,6}$/.test(v) || /^[0-9A-Fa-f]{0,6}$/.test(v)) setColorForField(field, v.startsWith('#') ? v : v ? '#' + v : '#141414'); }} style={{ padding: '6px 8px', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--bg)', color: 'var(--text)', fontSize: 12 }} placeholder="#000000" />
                    </div>
                  );
                })}
                <button type="button" onClick={() => setMermaidTheme({ ...DEFAULT_MERMAID_THEME })} style={{ fontSize: 11, padding: '6px 8px', border: '1px solid var(--border)', borderRadius: 4, background: 'transparent', color: 'var(--muted)', cursor: 'pointer', alignSelf: 'flex-start' }}>Reset diagram colors</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <footer style={{ flexShrink: 0, padding: '4px 12px', borderTop: '1px solid var(--border)', background: 'var(--surface)', fontSize: 10, color: 'var(--muted)', textAlign: 'center' }}>@diagramium · by montesito · Ctrl+Z undo · Ctrl+Y redo · Esc close panels</footer>
    </div>
    {(aboutOpen || examplesOpen || howToOpen || syntaxOpen || savedOpen) && createPortal(
      (savedOpen && (
        <div style={floatingPanelStyle}>
          <div style={{ flexShrink: 0, padding: 10, borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)' }}>Saved &amp; history</span>
            <button type="button" onClick={() => setSavedOpen(false)} title="Close" style={{ padding: 4, border: '1px solid var(--border)', borderRadius: 4, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 11 }} aria-label="Close">×</button>
          </div>
          <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: 12, fontSize: 12, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <section>
              <h3 style={{ margin: '0 0 8px', fontSize: 10, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase' }}>Saved diagrams</h3>
              <button type="button" onClick={saveCurrentDiagram} style={{ marginBottom: 8, padding: '6px 12px', border: '1px solid var(--border)', borderRadius: 6, background: 'var(--bg)', color: 'var(--text)', cursor: 'pointer', fontSize: 11 }}><Save size={14} style={{ verticalAlign: 'middle', marginRight: 4 }} /> Save current</button>
              {savedDiagrams.length === 0 ? <p style={{ margin: 0, fontSize: 11, color: 'var(--muted)' }}>No saved diagrams.</p> : (
                <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {savedDiagrams.map((item) => (
                    <li key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 8px', border: '1px solid var(--border)', borderRadius: 6, background: 'var(--bg)' }}>
                      <span style={{ flex: 1, fontSize: 11, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</span>
                      <button type="button" onClick={() => openSaved(item)} style={{ padding: '2px 6px', fontSize: 10, border: '1px solid var(--border)', borderRadius: 4, background: 'transparent', color: 'var(--text)', cursor: 'pointer' }}>Open</button>
                      <button type="button" onClick={() => removeSaved(item.id)} style={{ padding: '2px 6px', fontSize: 10, border: '1px solid var(--border)', borderRadius: 4, background: 'transparent', color: 'var(--error)', cursor: 'pointer' }}>Remove</button>
                    </li>
                  ))}
                </ul>
              )}
            </section>
            <section>
              <h3 style={{ margin: '0 0 8px', fontSize: 10, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase' }}>Version history</h3>
              <p style={{ margin: '0 0 8px', fontSize: 11, color: 'var(--muted)' }}>Use <strong>Snapshot</strong> in the editor toolbar to save a version. Restore from the list below.</p>
              {snapshotHistory.length === 0 ? <p style={{ margin: 0, fontSize: 11, color: 'var(--muted)' }}>No snapshots yet.</p> : (
                <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {snapshotHistory.map((snap, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 8px', border: '1px solid var(--border)', borderRadius: 6, background: 'var(--bg)' }}>
                      <span style={{ flex: 1, fontSize: 10, color: 'var(--muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Snapshot {snapshotHistory.length - i}</span>
                      <button type="button" onClick={() => restoreSnapshot(snap)} style={{ padding: '2px 6px', fontSize: 10, border: '1px solid var(--border)', borderRadius: 4, background: 'transparent', color: 'var(--text)', cursor: 'pointer' }}>Restore</button>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        </div>
      )) || (syntaxOpen && (
        <div style={floatingPanelStyle}>
          <div style={{ flexShrink: 0, padding: 10, borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)' }}>Syntax</span>
            <button type="button" onClick={() => setSyntaxOpen(false)} title="Close" style={{ padding: 4, border: '1px solid var(--border)', borderRadius: 4, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 11 }} aria-label="Close">×</button>
          </div>
          <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: 12, fontSize: 11, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <section>
              <h3 style={{ margin: '0 0 6px', fontSize: 10, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase' }}>Flowchart</h3>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'var(--font-mono)', background: 'var(--bg)', padding: 8, borderRadius: 4 }}>{`flowchart LR
  A --> B --> C
  B --> D`}</pre>
            </section>
            <section>
              <h3 style={{ margin: '0 0 6px', fontSize: 10, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase' }}>Sequence</h3>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'var(--font-mono)', background: 'var(--bg)', padding: 8, borderRadius: 4 }}>{`sequenceDiagram
  A->>B: message
  B-->>A: reply`}</pre>
            </section>
            <section>
              <h3 style={{ margin: '0 0 6px', fontSize: 10, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase' }}>Class</h3>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'var(--font-mono)', background: 'var(--bg)', padding: 8, borderRadius: 4 }}>{`classDiagram
  class Animal {
    +name
    +move()
  }`}</pre>
            </section>
            <section>
              <h3 style={{ margin: '0 0 6px', fontSize: 10, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase' }}>Links &amp; directions</h3>
              <p style={{ margin: 0, lineHeight: 1.5, color: 'var(--muted)' }}><code style={{ background: 'var(--bg)', padding: '0 4px', borderRadius: 2 }}>--&gt;</code> arrow · <code style={{ background: 'var(--bg)', padding: '0 4px', borderRadius: 2 }}>---</code> line · <code style={{ background: 'var(--bg)', padding: '0 4px', borderRadius: 2 }}>LR</code> / <code style={{ background: 'var(--bg)', padding: '0 4px', borderRadius: 2 }}>TB</code> direction</p>
            </section>
            <p style={{ margin: 0, fontSize: 10, color: 'var(--muted)' }}><a href="https://mermaid.js.org/intro/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Full docs → mermaid.js.org</a></p>
          </div>
        </div>
      )) || (aboutOpen && (
        <div style={floatingPanelStyle}>
          <div style={{ flexShrink: 0, padding: 10, borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)' }}>About</span>
            <button type="button" onClick={() => setAboutOpen(false)} title="Close" style={{ padding: 4, border: '1px solid var(--border)', borderRadius: 4, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 11 }} aria-label="Close">×</button>
          </div>
          <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: 12, display: 'flex', flexDirection: 'column', gap: 14, fontSize: 12, color: 'var(--text)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src={`${import.meta.env.BASE_URL}logo/diagramium-logo.svg`} alt="" width={40} height={40} style={{ flexShrink: 0 }} aria-hidden="true" />
              <div><h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>{APP_NAME}</h2><p style={{ margin: '2px 0 0', fontSize: 11, color: 'var(--muted)' }}>Powered by Mermaid</p></div>
            </div>
            <p style={{ margin: 0, lineHeight: 1.5 }}>Diagramium is a browser-based Mermaid diagram editor. Edit Mermaid code in the left panel and see the diagram update live on the right. All data stays in your browser; no backend required.</p>
            <section><h3 style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Motivation</h3><p style={{ margin: 0, lineHeight: 1.5, color: 'var(--muted)' }}>Built for quick diagrams and learning Mermaid. Ready to integrate AI: use <code style={{ fontSize: 10, background: 'var(--bg)', padding: '1px 4px', borderRadius: 4 }}>useSetDiagramFromAI()</code> to inject generated Mermaid code. Thanks to <a href="https://mermaid.js.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>Mermaid</a>.</p></section>
            <section><h3 style={{ margin: '0 0 8px', fontSize: 11, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Data</h3><p style={{ margin: '0 0 8px', fontSize: 11, color: 'var(--muted)', lineHeight: 1.5 }}>All data is stored locally: current diagram, saved diagrams (up to 10), snapshots, and UI preferences. Clear everything below.</p><button type="button" onClick={clearAllData} style={{ padding: '6px 12px', fontSize: 11, border: '1px solid var(--error)', borderRadius: 6, background: 'transparent', color: 'var(--error)', cursor: 'pointer' }}>Clear all data</button></section>
            <section><h3 style={{ margin: '0 0 8px', fontSize: 11, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Left strip</h3><ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', lineHeight: 1.7 }}><li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}><span style={{ width: 20, height: 20, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', borderRadius: 4 }}><Info size={14} color="var(--muted)" /></span><span><strong>About</strong> — This panel</span></li><li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}><span style={{ width: 20, height: 20, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', borderRadius: 4 }}><BookOpen size={14} color="var(--muted)" /></span><span><strong>Examples</strong> — Insert templates (Flowchart, Sequence, Class, State, ER, Gantt, Pie, Chart, Journey, Block, Quadrant, Mindmap, Timeline, Git, Starter, Others)</span></li><li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}><span style={{ width: 20, height: 20, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', borderRadius: 4 }}><Save size={14} color="var(--muted)" /></span><span><strong>Saved &amp; history</strong> — Saved diagrams and snapshot history (restore previous versions)</span></li><li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}><span style={{ width: 20, height: 20, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', borderRadius: 4 }}><FileCode size={14} color="var(--muted)" /></span><span><strong>Syntax</strong> — Mermaid cheat sheet</span></li><li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}><span style={{ width: 20, height: 20, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', borderRadius: 4 }}><HelpCircle size={14} color="var(--muted)" /></span><span><strong>How to use</strong> — Usage steps and keyboard shortcuts</span></li></ul></section>
            <section><h3 style={{ margin: '0 0 8px', fontSize: 11, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Top bar</h3><ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', lineHeight: 1.7 }}><li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}><span style={{ width: 20, height: 20, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', borderRadius: 4 }}><Maximize2 size={14} color="var(--muted)" /></span><span><strong>Fullscreen</strong> — Diagram-only view</span></li><li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}><span style={{ width: 20, height: 20, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', borderRadius: 4 }}><Undo2 size={14} color="var(--muted)" /></span><span><strong>Undo</strong> / <strong>Redo</strong></span></li><li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}><span style={{ width: 20, height: 20, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', borderRadius: 4 }}><Trash2 size={14} color="var(--muted)" /></span><span><strong>Reset</strong> — Clear editor and diagram</span></li><li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}><span style={{ width: 20, height: 20, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', borderRadius: 4 }}><Download size={14} color="var(--muted)" /></span><span><strong>Export</strong> — SVG, PNG (1x/2x), .md, .mmd, Print/PDF, copy code, copy PNG, copy shareable link, import from file</span></li><li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}><span style={{ width: 20, height: 20, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', borderRadius: 4 }}><Sun size={14} color="var(--muted)" /></span><span><strong>Theme</strong> — Dark / light</span></li></ul></section>
            <section><h3 style={{ margin: '0 0 8px', fontSize: 11, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Diagram toolbox</h3><ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', lineHeight: 1.7 }}><li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}><span style={{ width: 20, height: 20, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', borderRadius: 4 }}><Palette size={14} color="var(--muted)" /></span><span><strong>Palette</strong> — Diagram background, border, and Mermaid theme (node fill, line color)</span></li><li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}><span style={{ width: 20, height: 20, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', borderRadius: 4 }}><Crosshair size={14} color="var(--muted)" /></span><span><strong>Center</strong> — Fit diagram in view</span></li><li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}><span style={{ width: 20, height: 20, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 1, background: 'var(--bg)', borderRadius: 4 }}><Plus size={12} color="var(--muted)" /><Minus size={12} color="var(--muted)" /></span><span><strong>Zoom</strong> — Buttons or scroll wheel</span></li><li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}><span style={{ width: 20, height: 20, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', borderRadius: 4 }}><ChevronUp size={10} color="var(--muted)" /><ChevronRight size={10} color="var(--muted)" /><ChevronLeft size={10} color="var(--muted)" /><ChevronDown size={10} color="var(--muted)" /></span><span><strong>Pan</strong> — Buttons or drag on diagram</span></li><li style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}><span style={{ width: 20, height: 20, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', borderRadius: 4 }}><LayoutGrid size={14} color="var(--muted)" /></span><span><strong>Grid</strong> — Toggle background grid; optional node dragging</span></li></ul></section>
            <section><h3 style={{ margin: '0 0 8px', fontSize: 11, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Glossary</h3><ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}><li><strong>Editor</strong> — Left panel (Monaco) for Mermaid code; supports Format, snapshots, and error strip with jump-to-line.</li><li><strong>Diagram pane</strong> — Right area: live diagram plus toolbox (palette, center, zoom, pan, grid).</li><li><strong>Mermaid</strong> — Text-based diagram library; see <a href="https://mermaid.js.org/intro/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>mermaid.js.org</a>.</li><li><strong>Render debounce</strong> — Delay (200 / 500 / 1000 ms) after typing before the diagram updates; optional Pause to freeze updates.</li></ul></section>
          </div>
        </div>
      )) || (examplesOpen && (
        <div style={floatingPanelStyle}>
          <div style={{ flexShrink: 0, padding: 8, borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)' }}>Examples</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <button type="button" onClick={() => setExamplesPinned((p) => !p)} title={examplesPinned ? 'Unpin' : 'Pin'} style={{ padding: 4, border: '1px solid var(--border)', borderRadius: 4, background: examplesPinned ? 'var(--accent)' : 'transparent', color: examplesPinned ? '#fff' : 'var(--text)', cursor: 'pointer', fontSize: 10 }}>{examplesPinned ? 'Pinned' : 'Pin'}</button>
              <button type="button" onClick={() => setExamplesOpen(false)} title="Close" style={{ padding: 4, border: '1px solid var(--border)', borderRadius: 4, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 11 }} aria-label="Close">×</button>
            </div>
          </div>
          <div style={{ flexShrink: 0, padding: 12, borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src={`${import.meta.env.BASE_URL}logo/diagramium-logo.svg`} alt="" width={40} height={40} style={{ flexShrink: 0 }} aria-hidden="true" />
            <div><h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>{APP_NAME}</h2><p style={{ margin: '2px 0 0', fontSize: 11, color: 'var(--muted)' }}>Powered by Mermaid</p></div>
          </div>
          <div style={{ flexShrink: 0, padding: 8, display: 'flex', flexDirection: 'column', gap: 8, borderBottom: '1px solid var(--border)' }}>
            <div style={{ position: 'relative' }}><Search size={14} style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)', pointerEvents: 'none' }} /><input type="text" placeholder="Search examples..." value={examplesSearch} onChange={(e) => setExamplesSearch(e.target.value)} style={{ width: '100%', padding: '6px 8px 6px 28px', border: '1px solid var(--border)', borderRadius: 6, background: 'var(--bg)', color: 'var(--text)', fontSize: 12 }} aria-label="Search examples" /></div>
            <select value={examplesCategoryFilter} onChange={(e) => setExamplesCategoryFilter(e.target.value)} style={{ width: '100%', padding: '6px 8px', border: '1px solid var(--border)', borderRadius: 6, background: 'var(--bg)', color: 'var(--text)', fontSize: 12, cursor: 'pointer' }} aria-label="Filter by category"><option value="">All categories</option>{recentExampleIds.length > 0 && <option value="Recent">Recent</option>}{CATEGORY_ORDER.map((cat) => <option key={cat} value={cat}>{cat}</option>)}</select>
          </div>
          <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>{examplesByCategory.length === 0 ? <p style={{ fontSize: 12, color: 'var(--muted)' }}>No examples match.</p> : examplesByCategory.map(({ category, items }) => (<div key={category} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><div style={{ fontSize: 10, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: 2, borderBottom: '1px solid var(--border)' }}>{category}</div>{items.map((t) => (<button key={t.id} type="button" onClick={() => applyExample(t)} style={{ display: 'block', width: '100%', padding: '8px 10px', textAlign: 'left', border: '1px solid var(--border)', borderRadius: 6, background: 'var(--bg)', color: 'var(--text)', cursor: 'pointer', fontSize: 12, fontWeight: 500 }}><div>{t.name}</div><div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.code.split('\n')[0]?.trim() ?? ''}</div></button>))}</div>))}</div>
        </div>
      )) || (howToOpen && (
        <div style={floatingPanelStyle}>
          <div style={{ flexShrink: 0, padding: 10, borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)' }}>How to use</span><button type="button" onClick={() => setHowToOpen(false)} title="Close" style={{ padding: 4, border: '1px solid var(--border)', borderRadius: 4, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 11 }} aria-label="Close">×</button></div>
          <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: 12, fontSize: 12, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><img src={`${import.meta.env.BASE_URL}logo/diagramium-logo.svg`} alt="" width={40} height={40} style={{ flexShrink: 0 }} aria-hidden="true" /><div><h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>{APP_NAME}</h2><p style={{ margin: '2px 0 0', fontSize: 11, color: 'var(--muted)' }}>Powered by Mermaid</p></div></div>
            <section><h3 style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quick start</h3><ol style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}><li style={{ marginBottom: 8 }}>Type or paste Mermaid code in the left editor; the diagram updates live on the right (debounce and Pause in the editor toolbar).</li><li style={{ marginBottom: 8 }}><strong>Examples</strong> (book icon) — Search and filter by category (Flowchart, Sequence, Class, State, ER, Gantt, Pie, Chart, Journey, Block, Quadrant, Mindmap, Timeline, Git, Starter, Others); click a template to insert. Recent used appear under Recent.</li><li style={{ marginBottom: 8 }}><strong>Saved &amp; history</strong> — Save current diagram (up to 10), open a saved one, or restore from snapshot history.</li><li style={{ marginBottom: 8 }}><strong>Syntax</strong> — Mermaid cheat sheet; the diagram-type badge next to the editor also opens it.</li></ol></section>
            <section><h3 style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Top bar</h3><p style={{ margin: 0, marginBottom: 6, lineHeight: 1.5 }}><strong>Fullscreen</strong> — Diagram-only view. <strong>Undo</strong> / <strong>Redo</strong>. <strong>Reset</strong> (bin) — clear editor and diagram. <strong>Export</strong> — download SVG, PNG (1x/2x), .md, .mmd; copy code, copy PNG, copy as Markdown block; copy shareable link; Print/PDF; import from file. <strong>Theme</strong> — dark / light.</p></section>
            <section><h3 style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Diagram area</h3><p style={{ margin: 0, marginBottom: 6, lineHeight: 1.5 }}><strong>Palette</strong> — Set diagram background, border, and Mermaid theme (node fill, text, line). <strong>Center</strong> — fit diagram in view. <strong>Zoom</strong> — buttons or scroll wheel. <strong>Pan</strong> — buttons or drag on the diagram. <strong>Grid</strong> — toggle background grid; enable node dragging for movable nodes (when supported).</p></section>
            <section><h3 style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Editor</h3><p style={{ margin: 0, lineHeight: 1.5 }}>Format, Reset, snapshots (save/restore versions). Error strip shows parse/render errors with jump-to-line and copy. Split size and debounce are stored in preferences.</p></section>
            <section><h3 style={{ margin: '0 0 8px', fontSize: 11, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Keyboard shortcuts</h3><ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}><li><strong>Ctrl+Z</strong> — Undo</li><li><strong>Ctrl+Y</strong> / <strong>Ctrl+Shift+Z</strong> — Redo</li><li><strong>Ctrl+S</strong> — Save current diagram to Saved list</li><li><strong>Esc</strong> — Close panels / modals</li><li><strong>Ctrl+F</strong> — Find in editor (Monaco)</li></ul></section>
          </div>
        </div>
      )),
      document.body
    )}
    {/* Mobile header toolbox below top bar */}
    {isMobile && createPortal(
      <div
        style={{
          position: 'fixed',
          top: 'calc(env(safe-area-inset-top, 0px) + ' + TOP_BAR_HEIGHT + 'px)',
          left: 0,
          right: 0,
          zIndex: 2147483600,
          background: 'var(--surface)',
          borderBottom: '1px solid var(--border)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.35)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            padding: '6px 8px',
          }}
        >
          {previewFullscreen ? (
            <button
              type="button"
              onClick={() => setPreviewFullscreen(false)}
              title="Exit fullscreen preview"
              aria-label="Exit fullscreen preview"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, padding: 0, border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', borderRadius: 4 }}
            >
              <Minimize2 size={16} />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setPreviewFullscreen(true)}
              title="Fullscreen preview"
              aria-label="Fullscreen preview"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, padding: 0, border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', borderRadius: 4 }}
            >
              <Maximize2 size={16} />
            </button>
          )}
          <button
            type="button"
            onClick={undo}
            disabled={!canUndo}
            title="Undo (Ctrl+Z)"
            aria-label="Undo"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, padding: 0, border: 'none', background: 'transparent', color: 'var(--muted)', cursor: canUndo ? 'pointer' : 'default', borderRadius: 4, opacity: canUndo ? 1 : 0.5 }}
          >
            <Undo2 size={16} />
          </button>
          <button
            type="button"
            onClick={redo}
            disabled={!canRedo}
            title="Redo (Ctrl+Y)"
            aria-label="Redo"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, padding: 0, border: 'none', background: 'transparent', color: 'var(--muted)', cursor: canRedo ? 'pointer' : 'default', borderRadius: 4, opacity: canRedo ? 1 : 0.5 }}
          >
            <Redo2 size={16} />
          </button>
          <button
            ref={resetTriggerRef}
            type="button"
            onClick={handleResetAll}
            title="Reset editor and diagram"
            aria-label="Reset editor and diagram"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, padding: 0, border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', borderRadius: 4 }}
          >
            <Trash2 size={16} />
          </button>
          <div ref={exportRef} style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setExportOpen((o) => !o)}
              disabled={!displaySvg}
              title="Export"
              aria-label="Export"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, padding: 0, border: 'none', background: 'transparent', color: 'var(--muted)', cursor: displaySvg ? 'pointer' : 'not-allowed', borderRadius: 4, opacity: displaySvg ? 1 : 0.5 }}
            >
              <Download size={16} />
            </button>
            {exportOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: 4,
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  zIndex: 100,
                  padding: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  minWidth: 180,
                }}
              >
                <button type="button" onClick={handleExportSvg} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 12 }} title="Download SVG">
                  <FileImage size={16} /> SVG
                </button>
                <button type="button" onClick={() => handleExportPng(2)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 12 }} title="Download PNG (2x)">
                  <Image size={16} /> PNG (2x)
                </button>
                <button type="button" onClick={() => handleExportPng(1)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 12 }} title="Download PNG (1x)">
                  PNG (1x)
                </button>
                <button type="button" onClick={handleExportMarkdown} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 12 }} title="Save as Markdown file">
                  Save as .md
                </button>
                <button type="button" onClick={handleExportMmd} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 12 }} title="Save as Mermaid file">
                  Save as .mmd
                </button>
                <button type="button" onClick={handlePrint} disabled={!displaySvg} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: displaySvg ? 'pointer' : 'not-allowed', fontSize: 12, opacity: displaySvg ? 1 : 0.6 }} title="Print or Save as PDF">
                  <Printer size={16} /> Print / PDF
                </button>
                <button type="button" onClick={handleCopyPng} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 12 }} title="Copy as image">
                  <Copy size={16} /> Copy image
                </button>
                <span style={{ height: 1, background: 'var(--border)', margin: '2px 0' }} />
                <button type="button" onClick={handleCopyCode} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 12 }} title="Copy Mermaid code">
                  <Copy size={16} /> Copy code
                </button>
                <button type="button" onClick={handleCopyMarkdown} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 12 }} title="Copy as Markdown block">
                  Copy as Markdown
                </button>
                <button type="button" onClick={handleCopyLink} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 12 }} title="Copy shareable link">
                  <Link2 size={16} /> Copy link
                </button>
                <span style={{ height: 1, background: 'var(--border)', margin: '2px 0' }} />
                <button type="button" onClick={handleImportFile} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 12 }} title="Import from file">
                  <Upload size={16} /> Import file
                </button>
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => setDarkMode((d) => !d)}
            title={darkMode ? 'Light mode' : 'Dark mode'}
            aria-label={darkMode ? 'Light mode' : 'Dark mode'}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, padding: 0, border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', borderRadius: 4 }}
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            type="button"
            onClick={() => setFloatingBarExpanded((o) => !o)}
            title="Panels"
            aria-label="Panels"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              padding: '0 14px',
              height: 30,
              border: '1px solid var(--border)',
              background: 'transparent',
              color: 'var(--muted)',
              cursor: 'pointer',
              borderRadius: 999,
              marginLeft: 'auto',
              fontSize: 11,
              fontWeight: 500,
            }}
          >
            <Menu size={15} />
            <span>Panels</span>
          </button>
        </div>
      </div>,
      document.body
    )}

    {/* Top bar fixed above content */}
    {createPortal(
      <div
        className="diagramium-top-bar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: isMobile ? 'calc(env(safe-area-inset-top, 0px) + ' + TOP_BAR_HEIGHT + 'px)' : TOP_BAR_HEIGHT,
          zIndex: 2147483647,
          isolation: 'isolate',
          transform: 'translateZ(0)',
          background: 'var(--surface)',
          borderBottom: '1px solid var(--border)',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: isMobile ? 'env(safe-area-inset-top, 0px)' : 0,
          paddingLeft: 16,
          paddingRight: 16,
          pointerEvents: 'auto',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <img src={`${import.meta.env.BASE_URL}logo/diagramium-logo.svg`} alt="" width={32} height={32} style={{ display: 'block', flexShrink: 0 }} aria-hidden="true" />
          <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)' }}>{APP_NAME}</span>
        </div>
        {isMobile ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0, marginLeft: 8 }}>
          <span style={{ fontSize: 11, color: 'var(--muted)' }}>Powered by Mermaid</span>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>v{APP_VERSION}</span>
        </div>
        ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {previewFullscreen ? (
            <button type="button" onClick={() => setPreviewFullscreen(false)} title="Exit fullscreen preview" aria-label="Exit fullscreen preview" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, padding: 0, border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', borderRadius: 4 }}><Minimize2 size={14} /></button>
          ) : (
            <button type="button" onClick={() => setPreviewFullscreen(true)} title="Fullscreen preview" aria-label="Fullscreen preview" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, padding: 0, border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', borderRadius: 4 }}><Maximize2 size={14} /></button>
          )}
          <button type="button" onClick={undo} disabled={!canUndo} title="Undo (Ctrl+Z)" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, padding: 0, border: 'none', background: 'transparent', color: 'var(--muted)', cursor: canUndo ? 'pointer' : 'default', borderRadius: 4, opacity: canUndo ? 1 : 0.5 }} aria-label="Undo"><Undo2 size={14} /></button>
          <button type="button" onClick={redo} disabled={!canRedo} title="Redo (Ctrl+Y)" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, padding: 0, border: 'none', background: 'transparent', color: 'var(--muted)', cursor: canRedo ? 'pointer' : 'default', borderRadius: 4, opacity: canRedo ? 1 : 0.5 }} aria-label="Redo"><Redo2 size={14} /></button>
          <span style={{ width: 1, height: 16, background: 'var(--border)', flexShrink: 0 }} aria-hidden="true" />
          <button ref={resetTriggerRef} type="button" onClick={handleResetAll} title="Reset editor and diagram" aria-label="Reset editor and diagram" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, padding: 0, border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', borderRadius: 4 }}><Trash2 size={14} /></button>
          <span style={{ width: 1, height: 16, background: 'var(--border)', flexShrink: 0 }} aria-hidden="true" />
          <div ref={exportRef} style={{ position: 'relative' }}>
            <button type="button" onClick={() => setExportOpen((o) => !o)} disabled={!displaySvg} title="Export" aria-label="Export" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, padding: 0, border: 'none', background: 'transparent', color: 'var(--muted)', cursor: displaySvg ? 'pointer' : 'not-allowed', borderRadius: 4, opacity: displaySvg ? 1 : 0.5 }}><Download size={14} /></button>
            {exportOpen && (
              <div style={{ position: 'absolute', top: '100%', right: 0, marginTop: 4, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, boxShadow: '0 8px 24px rgba(0,0,0,0.4)', zIndex: 100, padding: 4, display: 'flex', flexDirection: 'column', gap: 2, minWidth: 180 }}>
                <button type="button" onClick={handleExportSvg} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 12 }} title="Download SVG"><FileImage size={16} /> SVG</button>
                <button type="button" onClick={() => handleExportPng(2)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 12 }} title="Download PNG (2x)"><Image size={16} /> PNG (2x)</button>
                <button type="button" onClick={() => handleExportPng(1)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 12 }} title="Download PNG (1x)">PNG (1x)</button>
                <button type="button" onClick={handleExportMarkdown} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 12 }} title="Save as Markdown file">Save as .md</button>
                <button type="button" onClick={handleExportMmd} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 12 }} title="Save as Mermaid file">Save as .mmd</button>
                <button type="button" onClick={handlePrint} disabled={!displaySvg} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: displaySvg ? 'pointer' : 'not-allowed', fontSize: 12, opacity: displaySvg ? 1 : 0.6 }} title="Print or Save as PDF"><Printer size={16} /> Print / PDF</button>
                <button type="button" onClick={handleCopyPng} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 12 }} title="Copy as image"><Copy size={16} /> Copy image</button>
                <span style={{ height: 1, background: 'var(--border)', margin: '2px 0' }} />
                <button type="button" onClick={handleCopyCode} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 12 }} title="Copy Mermaid code"><Copy size={16} /> Copy code</button>
                <button type="button" onClick={handleCopyMarkdown} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 12 }} title="Copy as Markdown block">Copy as Markdown</button>
                <button type="button" onClick={handleCopyLink} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 12 }} title="Copy shareable link"><Link2 size={16} /> Copy link</button>
                <span style={{ height: 1, background: 'var(--border)', margin: '2px 0' }} />
                <button type="button" onClick={handleImportFile} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', border: 'none', borderRadius: 6, background: 'transparent', color: 'var(--text)', cursor: 'pointer', fontSize: 12 }} title="Import from file"><Upload size={16} /> Import file</button>
              </div>
            )}
          </div>
          <span style={{ width: 1, height: 16, background: 'var(--border)', flexShrink: 0 }} aria-hidden="true" />
          <button type="button" onClick={() => setDarkMode((d) => !d)} title={darkMode ? 'Light mode' : 'Dark mode'} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, padding: 0, border: 'none', background: 'transparent', color: 'var(--muted)', cursor: 'pointer', borderRadius: 4 }} aria-label={darkMode ? 'Light mode' : 'Dark mode'}>{darkMode ? <Sun size={14} /> : <Moon size={14} />}</button>
          <span style={{ width: 1, height: 16, background: 'var(--border)', flexShrink: 0 }} aria-hidden="true" />
          <span style={{ fontSize: 11, color: 'var(--muted)' }}>Powered by Mermaid</span>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>v{APP_VERSION}</span>
        </div>
        )}
      </div>,
      document.body
    )}
    <input ref={importFileRef} type="file" accept=".md,.mmd,.txt,text/*" style={{ display: 'none' }} onChange={onImportFileChange} aria-hidden />
    </>
  );
}

export default App;
