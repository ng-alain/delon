import { vi } from 'vitest';

import { colorScheme, createColorScheme } from './color-scheme';

interface FakeMediaQueryList {
  mql: MediaQueryList;
  change: (matches: boolean) => void;
}

function createMatchMedia(matches: boolean): FakeMediaQueryList {
  const listeners: Array<(e: MediaQueryListEvent) => void> = [];
  const mql = {
    matches,
    media: '(prefers-color-scheme: dark)',
    addEventListener: (_: string, listener: (e: MediaQueryListEvent) => void): void => {
      listeners.push(listener);
    },
    removeEventListener: (): void => void 0
  } as unknown as MediaQueryList;

  return {
    mql,
    change: (value: boolean): void => listeners.forEach(listener => listener({ matches: value } as MediaQueryListEvent))
  };
}

describe('util.#colorScheme', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe('#createColorScheme', () => {
    it('should be light when the system does not prefer dark', () => {
      vi.spyOn(window, 'matchMedia').mockReturnValue(createMatchMedia(false).mql);
      expect(createColorScheme()()).toBe('light');
    });

    it('should be dark when the system prefers dark', () => {
      vi.spyOn(window, 'matchMedia').mockReturnValue(createMatchMedia(true).mql);
      expect(createColorScheme()()).toBe('dark');
    });

    it('should follow the change event', () => {
      const { mql, change } = createMatchMedia(false);
      vi.spyOn(window, 'matchMedia').mockReturnValue(mql);

      const scheme = createColorScheme();
      expect(scheme()).toBe('light');

      change(true);
      expect(scheme()).toBe('dark');

      change(false);
      expect(scheme()).toBe('light');
    });

    it('should fallback when matchMedia is not supported', () => {
      vi.stubGlobal('matchMedia', undefined);

      expect(createColorScheme()()).toBe('light');
      expect(createColorScheme({ fallback: 'dark' })()).toBe('dark');
    });
  });

  describe('#colorScheme', () => {
    it('should be a global singleton', () => {
      const matchMedia = vi.spyOn(window, 'matchMedia').mockReturnValue(createMatchMedia(true).mql);

      const scheme = colorScheme();
      expect(scheme()).toBe('dark');
      expect(colorScheme({ fallback: 'light' })).toBe(scheme);
      expect(matchMedia).toHaveBeenCalledTimes(1);
    });
  });
});
