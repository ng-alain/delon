import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { RouteTitle, TitleService } from './title.service';
import { AlainThemeModule } from '../../theme.module';
import { AlainI18NService, AlainI18NServiceFake, ALAIN_I18N_TOKEN } from '../i18n/i18n';
import { Menu } from '../menu/interface';
import { MenuService } from '../menu/menu.service';

describe('Service: Title', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  let getPathByUrlData: NzSafeAny;
  class TestTitleService {
    setTitle = vi.fn().mockName('reset');
  }

  class TestMenuService {
    getPathByUrl(): Menu[] {
      return getPathByUrlData;
    }
  }

  let title: TestTitleService;
  let srv: TitleService;
  let i18n: AlainI18NService;
  const alain = 'Alain';
  const notPageName = 'Not Page Name';

  function genModule(providers: NzSafeAny[] = [], loadI18n: boolean = true): void {
    const i18nProvider: NzSafeAny[] = loadI18n ? [{ provide: ALAIN_I18N_TOKEN, useClass: AlainI18NServiceFake }] : [];
    TestBed.configureTestingModule({
      imports: [AlainThemeModule, RouterModule.forRoot([])],
      providers: [TitleService, MenuService, { provide: Title, useClass: TestTitleService }, ...i18nProvider].concat(
        providers
      )
    });
    title = TestBed.inject<Title>(Title) as NzSafeAny;
    srv = TestBed.inject<TitleService>(TitleService);
    i18n = TestBed.inject(ALAIN_I18N_TOKEN);
  }

  afterEach(() => srv.ngOnDestroy());

  describe('[default]', () => {
    beforeEach(() => genModule());

    it('should set the default empty title', async () => {
      srv.suffix = alain;
      srv.setTitle();
      await vi.advanceTimersByTimeAsync(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(`${notPageName} - ${alain}`);
    });

    it('should be ignore when empty title & default title', async () => {
      srv.default = '';
      srv.suffix = alain;
      srv.setTitle();
      await vi.advanceTimersByTimeAsync(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(`${alain}`);
    });

    it('should set new title', async () => {
      srv.suffix = alain;
      srv.setTitle('newTitle');
      await vi.advanceTimersByTimeAsync(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(`newTitle - ${alain}`);
    });

    it('should set new title via array', async () => {
      srv.suffix = alain;
      srv.setTitle(['newTitle']);
      await vi.advanceTimersByTimeAsync(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(`newTitle - ${alain}`);
    });

    it('#separator', async () => {
      srv.suffix = alain;
      srv.separator = ' / ';
      srv.setTitle('newTitle');
      await vi.advanceTimersByTimeAsync(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(`newTitle / ${alain}`);
    });

    it('#prefix', async () => {
      srv.prefix = alain;
      srv.setTitle('newTitle');
      await vi.advanceTimersByTimeAsync(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(`${alain} - newTitle`);
    });

    it('#reverse', async () => {
      srv.reverse = true;
      srv.suffix = alain;
      srv.setTitle('newTitle');
      await vi.advanceTimersByTimeAsync(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(`${alain} - newTitle`);
    });

    it('#default', async () => {
      const def = 'DEFAULT';
      srv.default = def;
      srv.setTitle();
      await vi.advanceTimersByTimeAsync(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(def);
    });
  });

  describe('[logic]', () => {
    describe('should be hava title via route data property', () => {
      it('with text', async () => {
        genModule([
          {
            provide: ActivatedRoute,
            useValue: {
              firstChild: {
                snapshot: {
                  data: {
                    title: alain
                  }
                }
              }
            }
          }
        ]);
        srv.setTitle();
        await vi.advanceTimersByTimeAsync(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith(alain);
      });
      it('with observable', async () => {
        genModule([
          {
            provide: ActivatedRoute,
            useValue: {
              firstChild: {
                snapshot: {
                  data: {
                    title: of('a')
                  } as RouteTitle
                }
              }
            }
          }
        ]);
        srv.setTitle();
        await vi.advanceTimersByTimeAsync(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith('a');
      });
      it('without', async () => {
        genModule([
          {
            provide: ActivatedRoute,
            useValue: {}
          }
        ]);
        srv.setTitle();
        await vi.advanceTimersByTimeAsync(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith(notPageName);
      });
      it('with i18n', async () => {
        const titleI18n = 'a';
        genModule([
          {
            provide: ActivatedRoute,
            useValue: {
              snapshot: {
                data: {
                  titleI18n
                }
              }
            }
          }
        ]);
        vi.spyOn(i18n, 'fanyi').mockReturnValue(undefined as NzSafeAny);
        srv.setTitle();
        await vi.advanceTimersByTimeAsync(srv.DELAY_TIME + 1);
        expect(i18n.fanyi).toHaveBeenCalled();
      });
    });

    describe('should be hava title via menu data property', () => {
      it('with text', async () => {
        getPathByUrlData = [{ text: 'home' }];
        genModule([{ provide: MenuService, useClass: TestMenuService }]);
        srv.setTitle();
        await vi.advanceTimersByTimeAsync(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith(getPathByUrlData[0].text);
      });
      it('with i18n', async () => {
        getPathByUrlData = [{ text: 'home', i18n: 'a' }];
        genModule([{ provide: MenuService, useClass: TestMenuService }]);
        srv.setTitle();
        await vi.advanceTimersByTimeAsync(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith(getPathByUrlData[0].i18n);
      });
      it('without menu data', async () => {
        getPathByUrlData = [];
        genModule([{ provide: MenuService, useClass: TestMenuService }]);
        srv.setTitle();
        await vi.advanceTimersByTimeAsync(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith(notPageName);
      });
    });

    describe('should be hava title via element', () => {
      it('with element', async () => {
        class TestDocument {
          querySelector(): NzSafeAny {
            return {
              childNodes: [],
              firstChild: {
                textContent: 'a'
              }
            };
          }
          querySelectorAll(): NzSafeAny {
            return {
              childNodes: [],
              firstChild: {
                textContent: 'a'
              }
            };
          }
        }
        genModule([{ provide: DOCUMENT, useClass: TestDocument }]);
        srv.setTitle();
        await vi.advanceTimersByTimeAsync(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith('a');
      });
      it('with element and has children', async () => {
        class TestDocument {
          querySelector(): NzSafeAny {
            return {
              childNodes: [
                {
                  nodeType: 2,
                  textContent: 'b'
                },
                {
                  nodeType: 3,
                  textContent: 'b'
                }
              ],
              firstChild: {
                textContent: 'a'
              }
            };
          }
        }
        genModule([{ provide: DOCUMENT, useClass: TestDocument }]);
        srv.setTitle();
        await vi.advanceTimersByTimeAsync(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith('b');
      });
      it('without element', async () => {
        genModule([]);
        srv.setTitle();
        await vi.advanceTimersByTimeAsync(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith(notPageName);
      });
      it('without custom selector', async () => {
        genModule([]);
        srv.selector = 'test';
        srv.setTitle();
        await vi.advanceTimersByTimeAsync(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith(notPageName);
      });
    });
  });

  describe('[i18n]', () => {
    it('should be set when not i18n service', async () => {
      genModule([], false);
      srv.suffix = alain;
      srv.setTitle();
      await vi.advanceTimersByTimeAsync(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(`${notPageName} - ${alain}`);
    });
    it('should be reset title when i18n has changed', () => {
      genModule();
      vi.spyOn(srv, 'setTitle').mockReturnValue(undefined);
      i18n.use('en', {});
      expect(srv.setTitle).toHaveBeenCalled();
    });
    it('#setTitleByI18n', async () => {
      genModule([], true);
      srv.suffix = alain;
      const key = 'aa';
      srv.setTitleByI18n(key);
      await vi.advanceTimersByTimeAsync(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(`${key} - ${alain}`);
    });
  });
});
