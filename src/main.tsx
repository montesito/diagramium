/**
 * Entry: reads initial code from hash (#d/base64) or localStorage.
 */
import { StrictMode, Component, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { DiagramProvider, CODE_STORAGE_KEY } from './DiagramContext';
import './index.css';

/** Initial diagram code: hash #d/<base64> overrides localStorage. */
function getInitialCode(): string {
  try {
    const hash = window.location.hash.slice(1);
    if (hash.startsWith('d/')) {
      const decoded = decodeURIComponent(atob(hash.slice(2)));
      if (decoded) return decoded;
    }
  } catch {

  }
  try {
    const stored = localStorage.getItem(CODE_STORAGE_KEY);
    if (stored != null && stored !== '') return stored;
  } catch {

  }
  return '';
}

/** Catches render errors and shows message + stack instead of blank screen. */
class ErrorBoundary extends Component<{ children: ReactNode }, { err: Error | null }> {
  state = { err: null as Error | null };
  static getDerivedStateFromError(e: Error) {
    return { err: e };
  }
  render() {
    if (this.state.err) {
      return (
        <div style={{ padding: 24, fontFamily: 'monospace', color: '#ef4444', whiteSpace: 'pre-wrap' }}>
          <strong>Error</strong>: {this.state.err.message}
          <pre style={{ marginTop: 12, fontSize: 12 }}>{this.state.err.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const root = document.getElementById('root');
if (root) {
  try {
    createRoot(root).render(
      <StrictMode>
        <ErrorBoundary>
          <DiagramProvider initialCode={getInitialCode()}>
            <App />
          </DiagramProvider>
        </ErrorBoundary>
      </StrictMode>
    );
  } catch (e) {
    root.innerHTML = `<div style="padding:24px;color:#ef4444;font-family:monospace;white-space:pre-wrap;">Failed to start: ${e instanceof Error ? e.message : String(e)}</div>`;
  }
}
