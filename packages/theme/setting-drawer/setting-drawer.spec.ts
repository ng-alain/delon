import { Component, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule, NgModel } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { createTestContext } from '@delon/testing';
import { provideNzIconsTesting } from 'ng-zorro-antd/icon/testing';

import { SettingDrawerComponent } from './setting-drawer.component';
import { SettingDrawerModule } from './setting-drawer.module';
import { AlainThemeModule } from '../src/theme.module';

@Component({
  template: `<form><setting-drawer /></form>`,
  imports: [AlainThemeModule, SettingDrawerModule, FormsModule]
})
class TestComponent {
  @ViewChild(SettingDrawerComponent, { static: true }) readonly comp!: SettingDrawerComponent;
}

describe('theme: setting-drawer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideNzIconsTesting(), provideRouter([])],
      imports: [AlainThemeModule]
    });
  });

  it('should declare the built-in ngModel as standalone so it never registers with a parent form', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { fixture, dl, context } = createTestContext(TestComponent);
    context.comp.collapse = true;
    fixture.detectChanges();

    const switches = dl.queryAll(By.css('nz-switch'));
    expect(switches.length).toBe(2);
    switches.forEach(de => expect(de.injector.get(NgModel).options?.standalone).toBe(true));

    const messages = vi
      .mocked(warn)
      .mock.calls.map(args => args.join(' '))
      .filter(msg => msg.includes('NG01354'));
    expect(messages).toEqual([]);
  });
});
