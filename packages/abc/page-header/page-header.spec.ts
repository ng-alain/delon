import {
  Component,
  DebugElement,
  ViewChild,
  CUSTOM_ELEMENTS_SCHEMA,
  Injector,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import {
  MenuService,
  AlainThemeModule,
  AlainI18NService,
  ALAIN_I18N_TOKEN,
  TitleService,
} from '@delon/theme';
import { DelonACLModule } from '@delon/acl';

import { NaPageHeaderModule } from './page-header.module';
import { NaPageHeaderComponent } from './page-header.component';
import { NaPageHeaderConfig } from './page-header.config';
import { ReuseTabService } from '../reuse-tab/reuse-tab.service';

describe('abc: page-header', () => {
  let injector: Injector;
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    injector = TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        AlainThemeModule.forRoot(),
        DelonACLModule.forRoot(),
        NaPageHeaderModule.forRoot(),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [TestComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    });
  });

  function createComp() {
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    fixture.detectChanges();
  }

  function isExists(cls: string, stauts: boolean = true) {
    if (stauts) {
      expect(dl.query(By.css(cls))).not.toBeNull();
    } else {
      expect(dl.query(By.css(cls))).toBeNull();
    }
  }

  function checkValue(cls: string, value: any) {
    const el = dl.query(By.css(cls)).nativeElement as HTMLElement;
    expect(el.textContent.trim()).toBe(value);
  }

  afterEach(() => context.comp.ngOnDestroy());

  describe('[property]', () => {
    beforeEach(() => createComp());

    describe('#title', () => {
      it('with string', () => {
        isExists('.na-ph__title');
      });
      it('with null', () => {
        context.title = null;
        fixture.detectChanges();
        isExists('.na-ph__title', false);
      });
    });

    ['breadcrumb', 'logo', 'action', 'content', 'extra', 'tab'].forEach(
      type => {
        it('#' + type, () => isExists('.' + type));
      },
    );
  });

  describe('[generation breadcrumb]', () => {
    let menuSrv: MenuService;
    let route: Router;
    let i18n: AlainI18NService;
    let cog: NaPageHeaderConfig;
    beforeEach(() => {
      TestBed.overrideTemplate(
        TestComponent,
        `<na-page-header #comp [title]="title" [home]="home" [homeI18n]="homeI18n" [autoBreadcrumb]="autoBreadcrumb"></na-page-header>`,
      );
      createComp();
      route = injector.get(Router);
      cog = injector.get(NaPageHeaderConfig);
      i18n = injector.get(ALAIN_I18N_TOKEN);

      menuSrv = injector.get(MenuService);
      menuSrv.add([
        {
          text: 'root',
          children: [
            {
              text: '1-1',
              link: '/1-1',
              children: [
                { text: '1-1-1', link: '/1-1/1-1-1' },
                { text: '1-1-2', link: '/1-1/1-1-2' },
              ],
            },
          ],
        },
      ]);
    });

    it('should be', () => {
      spyOnProperty(route, 'url').and.returnValue('/1-1/1-1-2');
      context.home = '';
      context.autoBreadcrumb = true;
      fixture.detectChanges();
      expect(dl.queryAll(By.css('nz-breadcrumb-item')).length).toBe(3);
    });

    it('should be no breadcrumb when invalid url', () => {
      spyOnProperty(route, 'url').and.returnValue('/1-1/a-1-1-2');
      context.autoBreadcrumb = true;
      fixture.detectChanges();
      expect(dl.queryAll(By.css('nz-breadcrumb-item')).length).toBe(0);
    });

    it('should be hide breadcrumb', () => {
      menuSrv.add([
        {
          text: 'root',
          hideInBreadcrumb: true,
          children: [
            {
              text: '1-1',
              link: '/1-1',
              children: [
                { text: '1-1-1', link: '/1-1/1-1-1' },
                { text: '1-1-2', link: '/1-1/1-1-2' },
              ],
            },
          ],
        },
      ]);
      spyOnProperty(route, 'url').and.returnValue('/1-1/1-1-2');
      context.autoBreadcrumb = true;
      fixture.detectChanges();
      expect(dl.queryAll(By.css('nz-breadcrumb-item')).length).toBe(2);
    });

    describe('#home', () => {
      it('shoule be hide home', () => {
        spyOnProperty(route, 'url').and.returnValue('/1-1/1-1-2');
        context.home = '';
        context.autoBreadcrumb = true;
        fixture.detectChanges();
        expect(dl.queryAll(By.css('nz-breadcrumb-item')).length).toBe(3);
      });
      it('shoule be i18n', () => {
        spyOnProperty(route, 'url').and.returnValue('/1-1/1-1-2');
        spyOn(i18n, 'fanyi');
        expect(i18n.fanyi).not.toHaveBeenCalled();
        context.home = 'home';
        context.homeI18n = 'homeI18n';
        context.autoBreadcrumb = true;
        fixture.detectChanges();
        expect(i18n.fanyi).toHaveBeenCalled();
      });
    });

    describe('[i18n]', () => {
      it('should be auto fanyi i18n text', () => {
        menuSrv.add([
          {
            text: 'root',
            i18n: 'root-i18n',
            children: [
              {
                text: '1-1',
                link: '/1-1',
                children: [
                  { text: '1-1-1', link: '/1-1/1-1-1' },
                  { text: '1-1-2', link: '/1-1/1-1-2' },
                ],
              },
            ],
          },
        ]);
        spyOnProperty(route, 'url').and.returnValue('/1-1/1-1-2');
        spyOn(i18n, 'fanyi');
        expect(i18n.fanyi).not.toHaveBeenCalled();
        context.autoBreadcrumb = true;
        fixture.detectChanges();
        expect(dl.queryAll(By.css('nz-breadcrumb-item')).length).toBe(3);
        expect(i18n.fanyi).toHaveBeenCalled();
      });
      it('should be refresh when i18n changed', () => {
        spyOn(context.comp, 'refresh');
        expect(context.comp.refresh).not.toHaveBeenCalled();
        i18n.use('en');
        expect(context.comp.refresh).toHaveBeenCalled();
      });
    });
  });

  describe('#title', () => {
    it('should be custom title template', () => {
      TestBed.overrideTemplate(
        TestComponent,
        `<na-page-header #comp [title]="titleTpl">
          <ng-template #titleTpl>
            <div class="custom-title">title</div>
          </ng-template>
        </na-page-header>`,
      );
      createComp();
      expect(dl.queryAll(By.css('.custom-title')).length).toBe(1);
    });

    describe('[generateion title]', () => {
      let menuSrv: MenuService;
      let route: Router;
      let i18n: AlainI18NService;
      let cog: NaPageHeaderConfig;
      beforeEach(() => {
        createComp();
        route = injector.get(Router);
        cog = injector.get(NaPageHeaderConfig);
        i18n = injector.get(ALAIN_I18N_TOKEN);
        menuSrv = injector.get(MenuService);

        context.title = undefined;
        context.autoTitle = true;
      });

      it('should be auto generate title via menu data', () => {
        const text = 'asdf';
        spyOn(menuSrv, 'getPathByUrl').and.returnValue([{ text }]);
        fixture.detectChanges();
        checkValue('.na-ph__title', text);
      });

      it('support i18n', () => {
        const text = 'asdf';
        const i18n = 'i18n';
        spyOn(menuSrv, 'getPathByUrl').and.returnValue([{ text, i18n }]);
        fixture.detectChanges();
        checkValue('.na-ph__title', i18n);
      });
    });

    describe('[auto sync title]', () => {
      class MockTitle {
        setTitle = jasmine.createSpy();
      }
      class MockReuse {
        set title(val: string) {}
        get title(): string {
          return '';
        }
      }
      let titleSrv: TitleService;
      let reuseSrv: ReuseTabService;
      beforeEach(() => {
        TestBed.overrideProvider(TitleService, {
          useFactory: () => new MockTitle(),
          deps: [],
        });
        TestBed.overrideProvider(ReuseTabService, {
          useFactory: () => new MockReuse(),
          deps: [],
        });
        createComp();
        titleSrv = injector.get(TitleService);
        reuseSrv = injector.get(ReuseTabService);

        context.syncTitle = true;
      });

      it('should be auto sync title of document and result-tab', () => {
        const spyReuseTitle = spyOnProperty(
          reuseSrv,
          'title',
          'set',
        ).and.callThrough();
        context.title = 'test';
        fixture.detectChanges();
        expect(titleSrv.setTitle).toHaveBeenCalled();
        expect(spyReuseTitle).toHaveBeenCalled();
      });
    });
  });
});

@Component({
  template: `
    <na-page-header #comp [title]="title" [autoTitle]="autoTitle" [syncTitle]="syncTitle"
        [autoBreadcrumb]="autoBreadcrumb" [home]="home" [homeI18n]="homeI18n" [home_link]="home_link">
        <ng-template #breadcrumb><div class="breadcrumb">面包屑</div></ng-template>
        <ng-template #logo><div class="logo">logo</div></ng-template>
        <ng-template #action><div class="action">action</div></ng-template>
        <ng-template #content><div class="content">content</div></ng-template>
        <ng-template #extra><div class="extra">extra</div></ng-template>
        <ng-template #tab><div class="tab">tab</div></ng-template>
    </na-page-header>
    `,
})
class TestComponent {
  @ViewChild('comp') comp: NaPageHeaderComponent;
  title = '所属类目';
  autoBreadcrumb: boolean;
  autoTitle: boolean;
  syncTitle: boolean;
  home: string;
  home_link: string;
  homeI18n: string;
}
