/**
 * 清除Cdk的窗体，以便下一次使用，一般这样使用：
 * ```ts
 * afterEach(cleanCdkOverlayHtml);
 * ```
 */
export function cleanCdkOverlayHtml(): void {
  const els = document.querySelectorAll('.cdk-overlay-container');
  if (els && els.length > 0) {
    els.forEach(el => (el.innerHTML = ''));
  }
}
