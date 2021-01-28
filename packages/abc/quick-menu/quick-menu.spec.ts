import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { createTestContext } from '@delon/testing';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { QuickMenuComponent } from './quick-menu.component';
import { QuickMenuModule } from './quick-menu.module';

describe('abc: quick-menu', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuickMenuModule],
      declarations: [TestComponent],
    });

    ({ fixture, dl, context } = createTestContext(TestComponent));
    fixture.detectChanges();
  });

  function getEl(cls: string = `quick-menu`): HTMLElement {
    return dl.query(By.css(cls)).nativeElement as HTMLElement;
  }

  function style(name: string, value: string): void {
    const el = getEl();
    expect((el.style as NzSafeAny)[name]).toBe(value);
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

  it('#color', () => {
    context.bgColor = '#000000';
    context.borderColor = '#f60';
    fixture.detectChanges();
    style('backgroundColor', 'rgb(0, 0, 0)');
    style('borderColor', 'rgb(255, 102, 0)');
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

  it('#expand', () => {
    spyOn(context, 'expandChange');
    context.expand = true;
    fixture.detectChanges();
    getEl().click();
    fixture.detectChanges();
    expect(context.expandChange).toHaveBeenCalled();
  });
});

@Component({
  template: `
    <quick-menu
      #comp
      [width]="width"
      [bgColor]="bgColor"
      [borderColor]="borderColor"
      [expand]="expand"
      (expandChange)="expandChange()"
    ></quick-menu>
  `,
})
class TestComponent {
  @ViewChild('comp', { static: true })
  comp: QuickMenuComponent;
  width = 200;
  bgColor: string;
  borderColor: string;
  expand = false;
  expandChange(): void {}
}
