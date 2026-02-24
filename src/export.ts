/**
 * Export helpers: download SVG/PNG/MD/MMD and copy PNG to clipboard.
 * All downloads use a temporary link and revoke the object URL after click.
 */

function isMobileDownloadEnv(): boolean {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  return /iPhone|iPad|iPod|Android/i.test(ua);
}

/** Strip background rects and ensure SVG canvas matches diagram bounds with transparent background. */
function makeSvgBackgroundTransparent(svg: string): string {
  let out = svg;

  // Remove Mermaid's full-canvas background rects
  out = out.replace(/<rect[^>]+class="mermaid-svg-background"[^>]*>\s*<\/rect>/gi, '');
  out = out.replace(/<rect[^>]+width="100%"[^>]+height="100%"[^>]*>\s*<\/rect>/gi, '');

  // Normalize the <svg> tag so width/height match the viewBox and background is transparent.
  const svgTagMatch = out.match(/<svg[^>]*>/i);
  if (svgTagMatch) {
    const originalTag = svgTagMatch[0];
    let attrs = originalTag.replace(/^<svg/i, '').replace(/>$/,'');

    // Extract viewBox if present
    let vbWidth: string | null = null;
    let vbHeight: string | null = null;
    const viewBoxMatch = attrs.match(/viewBox="([^"]+)"/i);
    if (viewBoxMatch) {
      const parts = viewBoxMatch[1].trim().split(/\s+/);
      if (parts.length === 4) {
        vbWidth = parts[2];
        vbHeight = parts[3];
      }
    }

    // Fallback to width/height attributes if needed
    if (!vbWidth || !vbHeight) {
      const wMatch = attrs.match(/width="([^"]+)"/i);
      const hMatch = attrs.match(/height="([^"]+)"/i);
      if (wMatch && hMatch) {
        vbWidth = wMatch[1];
        vbHeight = hMatch[1];
      }
    }

    // Force numeric width/height from viewBox so canvas tightly fits diagram
    if (vbWidth && vbHeight) {
      if (/width="[^"]*"/i.test(attrs)) {
        attrs = attrs.replace(/width="[^"]*"/i, `width="${vbWidth}"`);
      } else {
        attrs += ` width="${vbWidth}"`;
      }
      if (/height="[^"]*"/i.test(attrs)) {
        attrs = attrs.replace(/height="[^"]*"/i, `height="${vbHeight}"`);
      } else {
        attrs += ` height="${vbHeight}"`;
      }
    }

    // Ensure aspect ratio centers diagram
    if (!/preserveAspectRatio=/i.test(attrs)) {
      attrs += ' preserveAspectRatio="xMidYMid meet"';
    }

    // Remove any background from style/fill on <svg> and make it transparent
    if (/style="/i.test(attrs)) {
      attrs = attrs.replace(/style="([^"]*)"/i, (_m: string, s: string) => {
        const cleaned = s.replace(/background[^;"]*;?/gi, '').replace(/fill:[^;"]*;?/gi, '');
        return `style="${cleaned} background-color: transparent;"`;
      });
    } else {
      attrs += ' style="background-color: transparent;"';
    }

    // Drop fill attribute on <svg> if it exists (avoid solid bg)
    attrs = attrs.replace(/\sfill="[^"]*"/gi, '');

    const newTag = `<svg${attrs}>`;
    out = out.replace(originalTag, newTag);
  }

  return out;
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
  const cleaned = makeSvgBackgroundTransparent(svg);
  const blob = new Blob([cleaned], { type: 'image/svg+xml;charset=utf-8' });
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

/** Download diagram as PNG. On mobile, opens PNG in new tab via data URL so it loads reliably. */
export async function downloadPng(svg: string, filename = 'diagram.png', scale = 2) {
  const blob = await svgToPng(svg, scale);
  if (isMobileDownloadEnv()) {
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result as string);
      r.onerror = reject;
      r.readAsDataURL(blob);
    });
    window.open(dataUrl, '_blank');
  } else {
    const url = URL.createObjectURL(blob);
    triggerDownload(url, filename);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
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
