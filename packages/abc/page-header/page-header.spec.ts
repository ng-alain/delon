import { Component, DebugElement, ViewChild, Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import {
  MenuService,
  ALAIN_I18N_TOKEN,
  TitleService,
  AlainI18NServiceFake,
  AlainI18NService,
  SettingsService,
} from '@delon/theme';

import { PageHeaderModule } from './page-header.module';
import { PageHeaderComponent } from './page-header.component';
import { ReuseTabService } from '../reuse-tab/reuse-tab.service';
import { NzAffixComponent } from 'ng-zorro-antd';

class MockI18NServiceFake extends AlainI18NServiceFake {
  fanyi(key: string) {
    return key;
  }
}

describe('abc: page-header', () => {
  let injector: Injector;
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let menuSrv: MenuService;
  let context: TestComponent;
  let route: Router;

  function genModule(other: {
    template?: string;
    providers?: any[];
    created?: boolean;
  }) {
    const imports = [RouterModule.forRoot([]), PageHeaderModule.forRoot()];
    const providers = [{ provide: APP_BASE_HREF, useValue: '/' }, SettingsService];
    if (other.providers && other.providers.length) {
      providers.push(...other.providers);
    }
    injector = TestBed.configureTestingModule({
      imports,
      declarations: [TestComponent],
      providers,
    });
    if (other.template) TestBed.overrideTemplate(TestComponent, other.template);
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    if (other.created !== false) fixture.detectChanges();
    menuSrv = injector.get(MenuService);
    route = injector.get(Router);
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
    beforeEach(() => genModule({}));

    describe('#title', () => {
      it('with string', () => {
        isExists('.page-header__title');
      });
      it('with null', () => {
        context.title = null;
        fixture.detectChanges();
        isExists('.page-header__title', false);
      });
    });

    ['breadcrumb', 'logo', 'action', 'content', 'extra', 'tab'].forEach(
      type => {
        it('#' + type, () => isExists('.' + type));
      },
    );

    describe('#fixed', () => {
      beforeEach(() => {
        context.fixed = true;
        fixture.detectChanges();
      });
      it('should working', () => {
        isExists('nz-affix', true);
      });
      it('should be update position when swithch collapsed', () => {
        const srv = injector.get(SettingsService);
        const affixComp = dl.query(By.directive(NzAffixComponent)).injector.get(NzAffixComponent, null);
        spyOn(affixComp, 'updatePosition');
        srv.setLayout('collapsed', true);
        expect(affixComp.updatePosition).toHaveBeenCalled();
      });
    });
  });

  describe('[generation breadcrumb]', () => {
    beforeEach(() => {
      genModule({
        template: `<page-header #comp [title]="title" [home]="home" [homeI18n]="homeI18n" [autoBreadcrumb]="autoBreadcrumb"></page-header>`,
      });

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
    });
  });

  describe('#title', () => {
    it('should be custom title template', () => {
      genModule({
        template: `<page-header #comp [title]="titleTpl">
          <ng-template #titleTpl>
            <div class="custom-title">title</div>
          </ng-template>
        </page-header>`,
      });
      expect(dl.queryAll(By.css('.custom-title')).length).toBe(1);
    });

    describe('[generateion title]', () => {
      beforeEach(() => {
        genModule({
          providers: [
            {
              provide: TitleService,
              useFactory: () => null
            },
            {
              provide: ReuseTabService,
              useFactory: () => null
            },
          ],
        });

        context.title = undefined;
        context.autoTitle = true;
        context.syncTitle = true;
      });

      it('should be auto generate title via menu data', () => {
        const text = 'asdf';
        spyOn(menuSrv, 'getPathByUrl').and.returnValue([{ text }]);
        fixture.detectChanges();
        checkValue('.page-header__title', text);
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
        genModule({
          providers: [
            {
              provide: TitleService,
              useClass: MockTitle,
            },
            {
              provide: ReuseTabService,
              useClass: MockReuse,
            },
          ],
        });
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

  describe('[i18n]', () => {
    let i18n: AlainI18NService;
    beforeEach(() => {
      genModule({
        created: false,
        template: `<page-header #comp [title]="title"
        [home]="home" [homeI18n]="homeI18n" [homeLink]="homeLink"
        [autoBreadcrumb]="autoBreadcrumb"></page-header>`,
        providers: [
          {
            provide: ALAIN_I18N_TOKEN,
            useClass: MockI18NServiceFake,
          },
        ],
      });
      i18n = injector.get(ALAIN_I18N_TOKEN);
    });
    it('should be refresh when i18n changed', () => {
      spyOn(context.comp, 'refresh');
      expect(context.comp.refresh).not.toHaveBeenCalled();
      i18n.use('en');
      expect(context.comp.refresh).toHaveBeenCalled();
    });
    it('in text', () => {
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
      expect(i18n.fanyi).toHaveBeenCalled();
    });
    it('in title', () => {
      const text = 'asdf';
      const i18n = 'i18n';
      context.title = undefined;
      context.autoTitle = true;
      context.autoBreadcrumb = true;
      spyOn(menuSrv, 'getPathByUrl').and.returnValue([{ text, i18n }]);
      fixture.detectChanges();
      checkValue('.page-header__title', i18n);
    });
    it('in home', () => {
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
      context.autoBreadcrumb = true;
      spyOnProperty(route, 'url').and.returnValue('/1-1/1-1-2');
      spyOn(i18n, 'fanyi');
      context.home = 'home';
      context.homeI18n = 'homeI18n';
      context.autoBreadcrumb = true;
      fixture.detectChanges();
      expect(i18n.fanyi).toHaveBeenCalled();
    });
  });
});

@Component({
  template: `
    <page-header #comp [title]="title" [autoTitle]="autoTitle" [syncTitle]="syncTitle"
        [autoBreadcrumb]="autoBreadcrumb" [home]="home" [homeI18n]="homeI18n" [homeLink]="homeLink"
        [fixed]="fixed">
        <ng-template #breadcrumb><div class="breadcrumb">面包屑</div></ng-template>
        <ng-template #logo><div class="logo">logo</div></ng-template>
        <ng-template #action><div class="action">action</div></ng-template>
        <ng-template #content><div class="content">content</div></ng-template>
        <ng-template #extra><div class="extra">extra</div></ng-template>
        <ng-template #tab><div class="tab">tab</div></ng-template>
    </page-header>
    `,
})
class TestComponent {
  @ViewChild('comp')
  comp: PageHeaderComponent;
  title = '所属类目';
  autoBreadcrumb: boolean;
  autoTitle: boolean;
  syncTitle: boolean;
  home: string;
  homeLink: string;
  homeI18n: string;
  fixed: boolean;
}
