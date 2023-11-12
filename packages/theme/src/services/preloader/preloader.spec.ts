import { DOCUMENT } from '@angular/common';
import { EnvironmentInjector, Injector, PLATFORM_ID, runInInjectionContext } from '@angular/core';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { stepPreloader } from './preloader';

describe('theme: preloader', () => {
  let cached: NzSafeAny = {};

  beforeEach(() => {
    cached = {};
  });

  it('should be remove preloader', () => {
    spyOn(document, 'querySelector').and.callFake((type: string) => {
      if (cached[type]) return cached[type];
      cached[type] = {
        className: [],
        style: {
          overflow: ''
        },
        addEventListener: (_key: string, fn: NzSafeAny) => {
          fn();
        }
      };
      return cached[type];
    });
    const body = document.querySelector('body')!;
    const preloader = document.querySelector('.preloader')!;
    const injector = Injector.create({
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' },
        {
          provide: DOCUMENT,
          useFactory: () => {
            return document;
          }
        }
      ]
    }) as EnvironmentInjector;
    let preloaderDone!: () => void;
    runInInjectionContext(injector, () => (preloaderDone = stepPreloader()));
    expect(body.style.overflow).toBe('hidden');
    preloaderDone();
    expect(body.style.overflow).toBe('');
    expect(preloader.className).toContain('preloader-hidden');
  });

  it('preloader value null when running --hmr', () => {
    spyOn(document, 'querySelector').and.callFake((type: string) => {
      if (type === '.preloader') return null;
      if (cached[type]) return cached[type];
      cached[type] = {
        className: [],
        style: {
          overflow: ''
        },
        addEventListener: (_key: string, fn: NzSafeAny) => {
          fn();
        }
      };
      return cached[type];
    });

    const injector = Injector.create({
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' },
        {
          provide: DOCUMENT,
          useFactory: () => {
            return document;
          }
        }
      ]
    }) as EnvironmentInjector;
    let preloaderDone!: () => void;
    runInInjectionContext(injector, () => (preloaderDone = stepPreloader()));
    preloaderDone();
    expect(document.querySelector('.preloader')).toBeNull();
  });

  it('#ssr', () => {
    spyOn(document, 'querySelector').and.callFake((type: string) => {
      if (type === '.preloader') return null;
      if (cached[type]) return cached[type];
      cached[type] = {
        className: [],
        style: {
          overflow: ''
        },
        addEventListener: (_key: string, fn: NzSafeAny) => {
          fn();
        }
      };
      return cached[type];
    });

    const injector = Injector.create({
      providers: [
        { provide: PLATFORM_ID, useValue: 'server' },
        {
          provide: DOCUMENT,
          useFactory: () => {
            return document;
          }
        }
      ]
    }) as EnvironmentInjector;
    runInInjectionContext(injector, () => stepPreloader());
    expect(document.querySelector<HTMLBodyElement>('body')?.style.overflow).toBe('');
  });
});
