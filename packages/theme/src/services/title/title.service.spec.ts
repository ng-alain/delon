import { DOCUMENT } from '@angular/common';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { AlainThemeModule } from '../../theme.module';
import { AlainI18NService, AlainI18NServiceFake, ALAIN_I18N_TOKEN } from '../i18n/i18n';
import { Menu } from '../menu/interface';
import { MenuService } from '../menu/menu.service';
import { TitleService } from './title.service';

describe('Service: Title', () => {
  let getPathByUrlData: any;
  class TestTitleService {
    setTitle = jasmine.createSpy('reset');
  }

  class TestMenuService {
    getPathByUrl(): Menu[] {
      return getPathByUrlData;
    }
  }

  class TestDocument {
    querySelector(): any {
      return {
        childNodes: [],
        firstChild: {
          textContent: 'a',
        },
      };
    }
  }

  let title: TestTitleService;
  let srv: TitleService;
  let i18n: AlainI18NService;
  const alain = 'Alain';
  const notPageName = 'Not Page Name';

  function genModule(providers: any[] = [], loadI18n: boolean = true): void {
    const i18nProvider: any[] = loadI18n ? [{ provide: ALAIN_I18N_TOKEN, useClass: AlainI18NServiceFake }] : [];
    TestBed.configureTestingModule({
      imports: [AlainThemeModule, RouterTestingModule],
      providers: [TitleService, MenuService, { provide: Title, useClass: TestTitleService }, ...i18nProvider].concat(providers),
    });
    title = TestBed.inject<Title>(Title) as NzSafeAny;
    srv = TestBed.inject<TitleService>(TitleService);
    i18n = TestBed.inject(ALAIN_I18N_TOKEN);
  }

  afterEach(() => srv.ngOnDestroy());

  describe('[default]', () => {
    beforeEach(() => genModule());

    it('should set the default empty title', fakeAsync(() => {
      srv.suffix = alain;
      srv.setTitle();
      tick(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(`${notPageName} - ${alain}`);
    }));

    it('should set new title', fakeAsync(() => {
      srv.suffix = alain;
      srv.setTitle('newTitle');
      tick(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith('newTitle - ' + alain);
    }));

    it('should set new title via array', fakeAsync(() => {
      srv.suffix = alain;
      srv.setTitle(['newTitle']);
      tick(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith('newTitle - ' + alain);
    }));

    it('#separator', fakeAsync(() => {
      srv.suffix = alain;
      srv.separator = ' / ';
      srv.setTitle('newTitle');
      tick(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith('newTitle / ' + alain);
    }));

    it('#prefix', fakeAsync(() => {
      srv.prefix = alain;
      srv.setTitle('newTitle');
      tick(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(alain + ' - newTitle');
    }));

    it('#reverse', fakeAsync(() => {
      srv.reverse = true;
      srv.suffix = alain;
      srv.setTitle('newTitle');
      tick(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(alain + ' - newTitle');
    }));

    it('#default', fakeAsync(() => {
      const def = 'DEFAULT';
      srv.default = def;
      srv.setTitle();
      tick(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(def);
    }));
  });

  describe('[logic]', () => {
    describe('should be hava title via route data property', () => {
      it('with text', fakeAsync(() => {
        genModule([
          {
            provide: ActivatedRoute,
            useValue: {
              firstChild: {
                snapshot: {
                  data: {
                    title: alain,
                  },
                },
              },
            },
          },
        ]);
        srv.setTitle();
        tick(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith(alain);
      }));
      it('without', fakeAsync(() => {
        genModule([
          {
            provide: ActivatedRoute,
            useValue: {},
          },
        ]);
        srv.setTitle();
        tick(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith(notPageName);
      }));
      it('with i18n', fakeAsync(() => {
        const titleI18n = 'a';
        genModule([
          {
            provide: ActivatedRoute,
            useValue: {
              snapshot: {
                data: {
                  titleI18n,
                },
              },
            },
          },
        ]);
        spyOn(i18n, 'fanyi');
        srv.setTitle();
        tick(srv.DELAY_TIME + 1);
        expect(i18n.fanyi).toHaveBeenCalled();
      }));
    });

    describe('should be hava title via menu data property', () => {
      it('with text', fakeAsync(() => {
        getPathByUrlData = [{ text: 'home' }];
        genModule([{ provide: MenuService, useClass: TestMenuService }]);
        srv.setTitle();
        tick(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith(getPathByUrlData[0].text);
      }));
      it('with i18n', fakeAsync(() => {
        getPathByUrlData = [{ text: 'home', i18n: 'a' }];
        genModule([{ provide: MenuService, useClass: TestMenuService }]);
        srv.setTitle();
        tick(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith(getPathByUrlData[0].i18n);
      }));
      it('without menu data', fakeAsync(() => {
        getPathByUrlData = [];
        genModule([{ provide: MenuService, useClass: TestMenuService }]);
        srv.setTitle();
        tick(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith(notPageName);
      }));
    });

    describe('should be hava title via element', () => {
      it('with element', fakeAsync(() => {
        genModule([{ provide: DOCUMENT, useClass: TestDocument }]);
        srv.setTitle();
        tick(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith('a');
      }));
      it('without element', fakeAsync(() => {
        genModule([]);
        srv.setTitle();
        tick(srv.DELAY_TIME + 1);
        expect(title.setTitle).toHaveBeenCalledWith(notPageName);
      }));
    });
  });

  describe('[i18n]', () => {
    it('should be set when not i18n service', fakeAsync(() => {
      genModule([], false);
      srv.suffix = alain;
      srv.setTitle();
      tick(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(`${notPageName} - ${alain}`);
    }));
    it('should be reset title when i18n has changed', () => {
      genModule();
      spyOn(srv, 'setTitle');
      i18n.use('en');
      expect(srv.setTitle).toHaveBeenCalled();
    });
    it('#setTitleByI18n', fakeAsync(() => {
      genModule([], true);
      srv.suffix = alain;
      const key = 'aa';
      srv.setTitleByI18n(key);
      tick(srv.DELAY_TIME + 1);
      expect(title.setTitle).toHaveBeenCalledWith(`${key} - ${alain}`);
    }));
  });
});
