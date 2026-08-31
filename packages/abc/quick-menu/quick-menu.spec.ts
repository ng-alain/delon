import { Component, DebugElement, signal, ViewChild } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { createTestContext } from '@delon/testing';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { QuickMenuComponent } from './quick-menu.component';

describe('abc: quick-menu', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
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
      context.width.set(300);
      fixture.detectChanges();
      style('width', '300px');
    });
  });

  it('#color', () => {
    context.bgColor.set('#000000');
    context.borderColor.set('#f60');
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
    context.expand.set(true);
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
      [width]="width()"
      [bgColor]="bgColor()"
      [borderColor]="borderColor()"
      [expand]="expand()"
      (expandChange)="expandChange()"
    />
  `,
  imports: [QuickMenuComponent]
})
class TestComponent {
  @ViewChild('comp', { static: true })
  comp!: QuickMenuComponent;
  readonly width = signal(200);
  readonly bgColor = signal<string | undefined>(undefined);
  readonly borderColor = signal<string | undefined>(undefined);
  readonly expand = signal(false);
  expandChange(): void {}
}
