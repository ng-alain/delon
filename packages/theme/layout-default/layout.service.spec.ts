import { TestBed } from '@angular/core/testing';

import { AlainThemeModule, SettingsService } from '@delon/theme';

import { LayoutDefaultService } from './layout.service';

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
});
