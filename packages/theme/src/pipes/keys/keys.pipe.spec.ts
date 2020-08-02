import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AlainThemeModule } from '../../theme.module';

describe('Pipe: keys', () => {
  let fixture: ComponentFixture<TestComponent>;

  function genModule(template?: string): void {
    TestBed.configureTestingModule({
      imports: [AlainThemeModule.forRoot()],
      declarations: [TestComponent],
    });
    if (template) TestBed.overrideTemplate(TestComponent, template);
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  }

  it('should return a array', () => {
    genModule();
    const ul = (fixture.debugElement.query(By.css('#result')).nativeElement as HTMLUListElement).querySelectorAll('li');
    expect(ul.length).toBe(2);
    expect(ul[0].textContent).toBe('name');
    expect(ul[1].textContent).toBe('address');
  });

  it('should be render a dist when key is number type', () => {
    genModule(`
    <ul id="result">
      <li *ngFor="let item of dist | keys: true">{{ item.key | json }}</li>
    </ul>
    `);
    const ul = (fixture.debugElement.query(By.css('#result')).nativeElement as HTMLUListElement).querySelectorAll('li');
    expect(ul.length).toBe(2);
    expect(ul[0].textContent).toBe('1');
    expect(ul[1].textContent).toBe('2');
  });
});

@Component({
  template: `
    <ul id="result">
      <li *ngFor="let item of data | keys">{{ item.key }}</li>
    </ul>
  `,
})
class TestComponent {
  data: any = {
    name: 'cipchk',
    address: { city: 'shanghai', district: 'changning' },
  };
  dist = { 1: '正常', 2: '删除' };
}
