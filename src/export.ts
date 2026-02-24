/**
 * Export helpers: download SVG/PNG/MD/MMD and copy PNG to clipboard.
 * All downloads use a temporary link and revoke the object URL after click.
 */

function isMobileDownloadEnv(): boolean {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  return /iPhone|iPad|iPod|Android/i.test(ua);
}

function triggerDownload(url: string, filename: string, revoke = true) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  if (revoke) setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/** Trigger download of the diagram as an SVG file. */
export function downloadSvg(svg: string, filename = 'diagram.svg') {
  const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  if (isMobileDownloadEnv()) {
    window.open(url, '_blank');
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } else {
    triggerDownload(url, filename);
  }
}

/** Convert SVG string to a PNG Blob. Scale 2 = 2x resolution. */
export function svgToPng(svg: string, scale = 2): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    img.onload = () => {
      const w = img.width * scale;
      const h = img.height * scale;
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        URL.revokeObjectURL(url);
        reject(new Error('Canvas context not available'));
        return;
      }
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);
      canvas.toBlob(
        (b) => {
          URL.revokeObjectURL(url);
          if (b) resolve(b);
          else reject(new Error('toBlob failed'));
        },
        'image/png',
        1
      );
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Image load failed'));
    };
    img.src = url;
  });
}

/** Download diagram as PNG. */
export async function downloadPng(svg: string, filename = 'diagram.png', scale = 2) {
  const blob = await svgToPng(svg, scale);
  const url = URL.createObjectURL(blob);
  if (isMobileDownloadEnv()) {
    window.open(url, '_blank');
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } else {
    triggerDownload(url, filename);
  }
}

/** Download code wrapped in a mermaid fenced block as .md. */
export function downloadMarkdown(code: string, filename = 'diagram.md') {
  const content = '```mermaid\n' + code + '\n```';
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  if (isMobileDownloadEnv()) {
    window.open(url, '_blank');
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } else {
    triggerDownload(url, filename);
  }
}

/** Download raw Mermaid code as .mmd. */
export function downloadMmd(code: string, filename = 'diagram.mmd') {
  const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  if (isMobileDownloadEnv()) {
    window.open(url, '_blank');
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } else {
    triggerDownload(url, filename);
  }
}

/** Copy diagram as PNG to clipboard; returns false if unsupported or failed. */
export async function copyPngToClipboard(svg: string): Promise<boolean> {
  if (!navigator.clipboard?.write) return false;
  try {
    const blob = await svgToPng(svg);
    await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
    return true;
  } catch {
    return false;
  }
}
