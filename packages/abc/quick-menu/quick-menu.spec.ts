import { Component, DebugElement, ViewChild, Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NaQuickMenuModule } from './quick-menu.module';
import { NaQuickMenuComponent } from './quick-menu.component';

describe('abc: quick-menu', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NaQuickMenuModule.forRoot()],
      declarations: [TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    fixture.detectChanges();
  });

  function getEl(cls: string = `na-quick-menu`): HTMLElement {
    return dl.query(By.css(cls)).nativeElement as HTMLElement;
  }

  function style(name: string, value: string) {
    const el = getEl();
    expect(el.style[name]).toBe(value);
  }

  describe('#width', () => {
    it('with 200', () => {
      style('width', '200px');
    });
    it('with 300', () => {
      context.width = 300;
      fixture.detectChanges();
      style('width', '300px');
    });
  });

  describe('#click', () => {
    it('should be show when click icon', () => {
      getEl().click();
      fixture.detectChanges();
      style('margin-right', '0px');
      getEl().click();
      fixture.detectChanges();
      style('width', '200px');
    });
  });
});

@Component({
  template: `
    <na-quick-menu #comp [width]="width"></na-quick-menu>
    `,
})
class TestComponent {
  @ViewChild('comp')
  comp: NaQuickMenuComponent;
  width = 200;
}
