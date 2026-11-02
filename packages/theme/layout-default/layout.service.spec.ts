import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Provider } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { AlainThemeModule, SettingsService } from '@delon/theme';

import { LayoutDefaultService } from './layout.service';

/**
 * Desktop breakpoint observer: `isMatched` is `false`, so `checkMedia()` never calls `setLayout()`
 */
function desktopBreakpointObserver(): Provider {
  return {
    provide: BreakpointObserver,
    useFactory: () => ({
      observe: vi
        .fn()
        .mockName('BreakpointObserver.observe')
        .mockReturnValue(of({ matches: false, breakpoints: {} })),
      isMatched: vi.fn().mockName('BreakpointObserver.isMatched').mockReturnValue(false)
    })
  };
}

/**
 * Rebuild the testing module with a persisted `layout` in localStorage, then create the service
 *
 * 注：模拟刷新页面 —— 布局状态来自 localStorage，应用自身不调用 `setLayout()`
 */
function createServiceWithLayout(layout: Record<string, unknown>): LayoutDefaultService {
  localStorage.setItem('layout', JSON.stringify(layout));
  TestBed.resetTestingModule();
  TestBed.configureTestingModule({
    imports: [AlainThemeModule],
    providers: [desktopBreakpointObserver()]
  });
  // `SettingsService` must be created first, it reads the persisted layout from localStorage
  TestBed.inject(SettingsService);
  return TestBed.inject(LayoutDefaultService);
}

describe('theme: #LayoutDefaultService', () => {
  let srv: LayoutDefaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AlainThemeModule]
    });
    srv = TestBed.inject(LayoutDefaultService);
  });

  it('should be working', () => {
    srv.setOptions({ hideAside: true });
    expect(srv.options().hideAside).toBe(true);
  });

  it('#toggleCollapsed', () => {
    const settings = TestBed.inject(SettingsService);
    settings.setLayout('direction', 'ltr');
    srv.toggleCollapsed(true);
    expect(srv.collapsedIcon()).toBe('menu-unfold');
    srv.toggleCollapsed(false);
    expect(srv.collapsedIcon()).toBe('menu-fold');
    srv.toggleCollapsed();
    expect(srv.collapsedIcon()).toBe('menu-unfold');
    srv.toggleCollapsed();
    expect(srv.collapsedIcon()).toBe('menu-fold');
    // when is direction
    settings.setLayout('direction', 'rtl');
    srv.toggleCollapsed(true);
    expect(srv.collapsedIcon()).toBe('menu-fold');
    srv.toggleCollapsed(false);
    expect(srv.collapsedIcon()).toBe('menu-unfold');
  });

  it('should preserve collapsed state on page refresh on desktop #2630', () => {
    // Simulate page refresh: localStorage already has collapsed=true from user preference
    localStorage.setItem('layout', JSON.stringify({ collapsed: true, fixed: true, boxed: false, lang: null }));

    // Provide a mock BreakpointObserver that simulates desktop (isMatched returns false)
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [AlainThemeModule],
      providers: [
        {
          provide: BreakpointObserver,
          useFactory: () => {
            const mock = {
              observe: vi.fn().mockName('BreakpointObserver.observe'),
              isMatched: vi.fn().mockName('BreakpointObserver.isMatched')
            };
            mock.isMatched.mockReturnValue(false);
            mock.observe.mockReturnValue(
              new Observable<BreakpointState>(subscriber => {
                subscriber.next({ matches: false, breakpoints: {} });
              })
            );
            return mock;
          }
        }
      ]
    });

    const settings = TestBed.inject(SettingsService);
    // Before LayoutDefaultService is created, settings should read collapsed=true from localStorage
    expect(settings.layout.collapsed).toBe(true);

    // LayoutDefaultService constructor calls checkMedia with isMatched=false (desktop)
    // It should NOT overwrite the persisted collapsed state
    TestBed.inject(LayoutDefaultService);
    expect(settings.layout.collapsed).toBe(true);
  });

  it('should be auto collapse on mobile', () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [AlainThemeModule],
      providers: [
        {
          provide: BreakpointObserver,
          useFactory: () => ({
            observe: vi
              .fn()
              .mockName('BreakpointObserver.observe')
              .mockReturnValue(
                new Observable<BreakpointState>(subscriber => {
                  subscriber.next({ matches: true, breakpoints: {} });
                })
              ),
            isMatched: vi.fn().mockName('BreakpointObserver.isMatched').mockReturnValue(true)
          })
        }
      ]
    });

    const settings = TestBed.inject(SettingsService);
    settings.setLayout('collapsed', false);
    TestBed.inject(LayoutDefaultService);
    expect(settings.layout.collapsed).toBe(true);
  });

  it('should initialize collapsed icon on desktop without any layout notification #2644', () => {
    // 桌面端刷新页面：`checkMedia()` 不会调用 `setLayout()`，应用自身也没有调用，
    // 因此不会有任何 `layout` 通知，图标名必须在构造时按当前状态初始化
    expect(createServiceWithLayout({ collapsed: true }).collapsedIcon()).toBe('menu-unfold');
    expect(createServiceWithLayout({ collapsed: false }).collapsedIcon()).toBe('menu-fold');
  });

  it('should initialize collapsed icon in RTL without any layout notification #2644', () => {
    expect(createServiceWithLayout({ collapsed: true, direction: 'rtl' }).collapsedIcon()).toBe('menu-fold');
    expect(createServiceWithLayout({ collapsed: false, direction: 'rtl' }).collapsedIcon()).toBe('menu-unfold');
  });
});
