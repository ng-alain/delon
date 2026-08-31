import { Component, DebugElement, signal, ViewChild } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { createTestContext } from '@delon/testing';

import { TrendComponent } from './trend.component';

describe('abc: trend', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestComponent));
    fixture.detectChanges();
  });

  function isExists(cls: string, stauts: boolean = true): void {
    if (stauts) {
      expect(dl.query(By.css(cls))).not.toBeNull();
    } else {
      expect(dl.query(By.css(cls))).toBeNull();
    }
  }

  describe('#flag', () => {
    it('width up', () => {
      context.flag.set('up');
      fixture.detectChanges();
      isExists('.anticon-caret-up');
      const el = dl.query(By.css('trend')).nativeElement as HTMLElement;
      expect(el.dataset.flag).toBe('up');
    });
    it('width down', () => {
      context.flag.set('down');
      fixture.detectChanges();
      isExists('.anticon-caret-down');
      const el = dl.query(By.css('trend')).nativeElement as HTMLElement;
      expect(el.dataset.flag).toBe('down');
    });
  });

  describe('#colorful', () => {
    it('width true', () => {
      context.colorful.set(true);
      fixture.detectChanges();
      isExists('.trend__grey', false);
    });
    it('width false', () => {
      context.colorful.set(false);
      fixture.detectChanges();
      isExists('.trend__grey', true);
    });
  });

  describe('#reverseColor', () => {
    it('width true', () => {
      context.colorful.set(true);
      context.reverseColor.set(true);
      fixture.detectChanges();
      isExists('.trend__reverse', true);
    });
    it('width false', () => {
      context.colorful.set(true);
      context.reverseColor.set(false);
      fixture.detectChanges();
      isExists('.trend__reverse', false);
    });
    it('should be muse is colorful: true', () => {
      context.reverseColor.set(true);
      fixture.detectChanges();
      isExists('.trend__reverse', false);
    });
  });
});

@Component({
  template: ` <trend #comp [flag]="flag()" [colorful]="colorful()" [reverseColor]="reverseColor()" />`,
  imports: [TrendComponent]
})
class TestComponent {
  @ViewChild('comp', { static: true }) comp!: TrendComponent;
  readonly flag = signal<'up' | 'down' | undefined>(undefined);
  readonly colorful = signal<boolean | undefined>(undefined);
  readonly reverseColor = signal<boolean | undefined>(undefined);
}
