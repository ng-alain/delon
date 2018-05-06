import {
  Component,
  DebugElement,
  TemplateRef,
  ViewChild,
  Injector,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AdQuickMenuModule } from './quick-menu.module';
import { QuickMenuComponent } from './quick-menu.component';

describe('abc: quick-menu', () => {
  let injector: Injector;
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    injector = TestBed.configureTestingModule({
      imports: [AdQuickMenuModule.forRoot()],
      declarations: [TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    fixture.detectChanges();
  });

  function getEl(cls: string = `quick-menu`): HTMLElement {
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
    <quick-menu #comp [width]="width"></quick-menu>
    `,
})
class TestComponent {
  @ViewChild('comp') comp: QuickMenuComponent;
  width = 200;
}
