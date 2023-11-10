import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AlainConfig, ALAIN_CONFIG } from '@delon/util/config';

import { AlainI18NService, ALAIN_I18N_TOKEN } from './i18n';
import { alainI18nCanActivate, alainI18nCanActivateChild } from './i18n-url.guard';
import { AlainThemeModule } from '../../theme.module';

describe('theme: i18n', () => {
  let fixture: ComponentFixture<TestComponent>;
  let srv: AlainI18NService;

  function check(result: string, id: string = 'simple'): void {
    const el = fixture.debugElement.query(By.css(`#${id}`)).nativeElement as HTMLElement;

    expect(el.textContent!.trim()).toBe(result);
  }

  describe('', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [AlainThemeModule],
        declarations: [TestComponent]
      });
      fixture = TestBed.createComponent(TestComponent);
      srv = fixture.debugElement.injector.get(ALAIN_I18N_TOKEN);
      srv.use('en', {
        simple: 'a',
        param: 'a-{{value}}'
      });
      fixture.detectChanges();
    });
    it('should working', () => {
      check('a');
    });

    it('should be param', () => {
      fixture.componentInstance.key = 'param';
      fixture.componentInstance.params = { value: '1' };
      fixture.detectChanges();
      check('a-1', 'param');
    });

    it('should be return path when is invalid', () => {
      fixture.componentInstance.key = 'invalid';
      fixture.detectChanges();
      check('invalid');
    });

    it('#flatData', () => {
      srv.use('en');
      srv.use('en', {
        name: 'Name',
        sys: {
          '': 'System',
          title: 'Title'
        }
      });
      expect(srv.fanyi('name')).toBe(`Name`);
      expect(srv.fanyi('sys')).toBe(`System`);
      expect(srv.fanyi('sys.title')).toBe(`Title`);
    });
  });

  it('#interpolation', () => {
    TestBed.configureTestingModule({
      imports: [AlainThemeModule],
      declarations: [TestComponent],
      providers: [{ provide: ALAIN_CONFIG, useValue: { themeI18n: { interpolation: ['#', '#'] } } as AlainConfig }]
    });
    fixture = TestBed.createComponent(TestComponent);
    srv = fixture.debugElement.injector.get(ALAIN_I18N_TOKEN);
    srv.use('en', {
      simple: 'a',
      param: 'a-#value#'
    });
    fixture.componentInstance.key = 'param';
    fixture.componentInstance.params = { value: '1' };
    fixture.detectChanges();
    check('a-1', 'param');
  });

  describe('Change i18n via url', () => {
    it('should be working', fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          AlainThemeModule,
          RouterTestingModule.withRoutes([
            {
              path: ':i18n',
              component: TestComponent,
              canActivate: [alainI18nCanActivate],
              canActivateChild: [alainI18nCanActivateChild]
            }
          ])
        ],
        declarations: [TestComponent]
      });
      fixture = TestBed.createComponent(TestComponent);
      srv = fixture.debugElement.injector.get(ALAIN_I18N_TOKEN);
      spyOn(srv, 'use');
      const router = TestBed.inject<Router>(Router) as Router;
      router.navigateByUrl(`/zh`);
      tick();
      expect(srv.use).toHaveBeenCalled();
    }));

    it('should be can not work', fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          AlainThemeModule,
          RouterTestingModule.withRoutes([
            { path: ':invalid', component: TestComponent, canActivate: [alainI18nCanActivate] }
          ])
        ],
        declarations: [TestComponent]
      });
      fixture = TestBed.createComponent(TestComponent);
      srv = fixture.debugElement.injector.get(ALAIN_I18N_TOKEN);
      spyOn(srv, 'use');
      const router = TestBed.inject<Router>(Router) as Router;
      router.navigateByUrl(`/zh`);
      tick();
      expect(srv.use).not.toHaveBeenCalled();
    }));

    it('should be working', fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          AlainThemeModule,
          RouterTestingModule.withRoutes([
            { path: ':lang', component: TestComponent, canActivate: [alainI18nCanActivate] }
          ])
        ],
        declarations: [TestComponent],
        providers: [{ provide: ALAIN_CONFIG, useValue: { themeI18n: { paramNameOfUrlGuard: 'lang' } } as AlainConfig }]
      });
      fixture = TestBed.createComponent(TestComponent);
      srv = fixture.debugElement.injector.get(ALAIN_I18N_TOKEN);
      spyOn(srv, 'use');
      const router = TestBed.inject<Router>(Router) as Router;
      router.navigateByUrl(`/zh`);
      tick();
      expect(srv.use).toHaveBeenCalled();
    }));
  });
});

@Component({
  template: `
    <div id="simple">{{ key | i18n }}</div>
    <div id="param">{{ key | i18n: params }}</div>
  `
})
class TestComponent {
  key = 'simple';
  params = {};
}
