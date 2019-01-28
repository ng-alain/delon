import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestSuite, createTestContext } from '@delon/testing';

import { QuickMenuComponent } from './quick-menu.component';
import { QuickMenuModule } from './quick-menu.module';

describe('abc: quick-menu', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [QuickMenuModule],
      declarations: [TestComponent],
    });
  });

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestComponent));
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
  @ViewChild('comp')
  comp: QuickMenuComponent;
  width = 200;
}
