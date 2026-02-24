/**
 * Helpers for the editor: detect diagram type from code, parse error line numbers, suggest filenames.
 */

/** Diagram type from first line (flowchart, sequenceDiagram, etc.). */
export function getDiagramType(code: string): string {
  const trimmed = code.trim();
  if (!trimmed) return '';
  const firstLine = trimmed.split('\n')[0]?.trim() ?? '';
  const lower = firstLine.toLowerCase();
  const match = firstLine.match(/^(flowchart|graph|sequenceDiagram|classDiagram|stateDiagram|erDiagram|journey|gantt|pie|quadrantChart|requirementDiagram|mindmap|timeline|gitGraph|block|C4|sankey-beta|packet|sankey)\b/i);
  if (match) {
    const name = match[1];
    if (name === 'graph') return 'Flowchart';
    if (name === 'flowchart') return 'Flowchart';
    return name.charAt(0).toUpperCase() + name.slice(1).replace(/-([a-z])/g, (_, c) => ' ' + c.toUpperCase());
  }
  if (lower.startsWith('flowchart') || lower.startsWith('graph ')) return 'Flowchart';
  return '';
}

/** Line number from Mermaid error message. */
export function parseErrorLine(error: string): number | null {
  const m = error.match(/(?:line\s+)?(\d+)(?:\s*[:\s]|$)/i) || error.match(/\b(\d+)\s*:/);
  if (m) {
    const n = parseInt(m[1], 10);
    return n >= 1 ? n : null;
  }
  return null;
}

/** Filename from first line of code, sanitized. */
export function suggestFilename(code: string, defaultName = 'diagram'): string {
  const first = code.split('\n')[0]?.trim();
  if (!first) return defaultName;
  const sanitized = first
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 40)
    .trim();
  return sanitized || defaultName;
}
