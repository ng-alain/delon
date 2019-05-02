import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AlainThemeModule } from '../../theme.module';
import { AlainI18NService, AlainI18NServiceFake, ALAIN_I18N_TOKEN } from './i18n';

describe('theme: i18n', () => {
  const i18n = new AlainI18NServiceFake();

  it('#use', () => {
    i18n.use('zh-CN');
    expect(true).toBeTruthy();
  });

  it('#getLangs', () => {
    expect(i18n.getLangs().length).toBe(0);
  });

  it('#fanyi', () => {
    expect(i18n.fanyi('index')).toBe('index');
  });

  describe('[i18n pipe]', () => {
    let fixture: ComponentFixture<TestComponent>;
    let srv: AlainI18NService;

    class MockI18NService extends AlainI18NServiceFake {
      data: any = {};
      use(_lang: string) {
        this.data = {
          simple: 'a',
          param: 'a-{{value}}',
          html: '<i>asdf</i>',
        };
      }
      fanyi(key: string, data?: {}, _isSafe?: boolean) {
        let res = this.data[key] || '';
        if (data) {
          Object.keys(data).forEach(k => (res = res.replace(new RegExp(`{{${k}}}`, 'g'), data[k])));
        }
        return res;
      }
    }

    function genModule() {
      TestBed.configureTestingModule({
        imports: [AlainThemeModule.forRoot()],
        declarations: [TestComponent],
        providers: [
          {
            provide: ALAIN_I18N_TOKEN,
            useClass: MockI18NService,
            multi: false,
          },
        ],
      });
      fixture = TestBed.createComponent(TestComponent);
      srv = fixture.debugElement.injector.get(ALAIN_I18N_TOKEN);
      srv.use('en');
      fixture.detectChanges();
    }

    function check(result: string, id = 'simple') {
      const el = fixture.debugElement.query(By.css('#' + id)).nativeElement as HTMLElement;

      expect(el.textContent!.trim()).toBe(result);
    }

    it('should working', () => {
      genModule();
      check('a');
    });

    it('should be param', () => {
      genModule();
      fixture.componentInstance.key = 'param';
      fixture.componentInstance.params = { value: '1' };
      fixture.detectChanges();
      check('a-1', 'param');
    });

    it('should be safeHtml', () => {
      genModule();
      fixture.componentInstance.key = 'html';
      fixture.componentInstance.params = { value: '1' };
      fixture.componentInstance.isSafe = true;
      fixture.detectChanges();
      check('asdf', 'html');
    });
  });
});

@Component({
  template: `
    <div id="simple">{{ key | i18n }}</div>
    <div id="param">{{ key | i18n: params }}</div>
    <div id="html" [innerHTML]="key | i18n: params:isSafe"></div>
  `,
})
class TestComponent {
  key = 'simple';
  params = {};
  isSafe = true;
}
