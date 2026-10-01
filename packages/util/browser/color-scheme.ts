import { signal, Signal } from '@angular/core';

/**
 * System color scheme
 *
 * 系统颜色方案
 */
export type ColorScheme = 'light' | 'dark';

export interface ColorSchemeOptions {
  /**
   * Fallback value used when the environment does not support `matchMedia`, e.g. SSR, default `light`
   *
   * 运行环境不支持 `matchMedia`（如 SSR）时使用的兜底值，默认 `light`
   */
  fallback?: ColorScheme;
}

const DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)';

function getMediaQueryList(): MediaQueryList | null {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return null;
  }
  return window.matchMedia(DARK_MEDIA_QUERY);
}

/**
 * Create a new signal of the system color scheme
 *
 * 创建一个新的系统颜色方案 signal
 *
 * @internal Only for unit testing, use `colorScheme` in the application.
 */
export function createColorScheme(options?: ColorSchemeOptions): Signal<ColorScheme> {
  const mediaQueryList = getMediaQueryList();
  const scheme = signal<ColorScheme>(
    mediaQueryList ? (mediaQueryList.matches ? 'dark' : 'light') : (options?.fallback ?? 'light')
  );
  mediaQueryList?.addEventListener('change', e => scheme.set(e.matches ? 'dark' : 'light'));
  return scheme;
}

let _scheme: Signal<ColorScheme> | null = null;

/**
 * System color scheme, updates in real time by following `prefers-color-scheme`
 *
 * 系统颜色方案，跟随 `prefers-color-scheme` 实时更新
 *
 * It is a global singleton, so `options` only takes effect on the first call.
 *
 * 全局单例，`options` 仅在首次调用时生效。
 */
export function colorScheme(options?: ColorSchemeOptions): Signal<ColorScheme> {
  if (_scheme) {
    return _scheme;
  }

  _scheme = createColorScheme(options);
  return _scheme;
}
