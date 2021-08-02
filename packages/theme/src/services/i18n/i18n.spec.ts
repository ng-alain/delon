import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AlainThemeModule } from '../../theme.module';
import { AlainI18NService, ALAIN_I18N_TOKEN } from './i18n';

describe('theme: i18n', () => {
  let fixture: ComponentFixture<TestComponent>;
  let srv: AlainI18NService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AlainThemeModule.forRoot()],
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

  function check(result: string, id: string = 'simple'): void {
    const el = fixture.debugElement.query(By.css(`#${id}`)).nativeElement as HTMLElement;

    expect(el.textContent!.trim()).toBe(result);
  }

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
