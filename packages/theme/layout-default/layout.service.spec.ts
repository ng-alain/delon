import { TestBed } from '@angular/core/testing';

import { AlainThemeModule, Layout, SettingsService } from '@delon/theme';

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
    expect(srv.options.hideAside).toBe(true);
  });

  it('#toggleCollapsed', () => {
    const settings = TestBed.inject(SettingsService);
    (settings.layout as Layout).direction = 'ltr';
    srv.toggleCollapsed(true);
    expect(srv.collapsedIcon).toBe('menu-unfold');
    srv.toggleCollapsed(false);
    expect(srv.collapsedIcon).toBe('menu-fold');
    srv.toggleCollapsed();
    expect(srv.collapsedIcon).toBe('menu-unfold');
    srv.toggleCollapsed();
    expect(srv.collapsedIcon).toBe('menu-fold');
    // when is direction
    (settings.layout as Layout).direction = 'rtl';
    srv.toggleCollapsed(true);
    expect(srv.collapsedIcon).toBe('menu-fold');
    srv.toggleCollapsed(false);
    expect(srv.collapsedIcon).toBe('menu-unfold');
  });
});
