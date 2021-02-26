import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { createTestContext } from '@delon/testing';
import { TrendComponent } from './trend.component';
import { TrendModule } from './trend.module';

describe('abc: trend', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TrendModule],
      declarations: [TestComponent],
    });
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
      context.flag = 'up';
      fixture.detectChanges();
      isExists('.anticon-caret-up');
      const el = dl.query(By.css('trend')).nativeElement as HTMLElement;
      expect(el.dataset.flag).toBe('up');
    });
    it('width down', () => {
      context.flag = 'down';
      fixture.detectChanges();
      isExists('.anticon-caret-down');
      const el = dl.query(By.css('trend')).nativeElement as HTMLElement;
      expect(el.dataset.flag).toBe('down');
    });
  });

  describe('#colorful', () => {
    it('width true', () => {
      context.colorful = true;
      fixture.detectChanges();
      isExists('.trend__grey', false);
    });
    it('width false', () => {
      context.colorful = false;
      fixture.detectChanges();
      isExists('.trend__grey', true);
    });
  });

  describe('#reverseColor', () => {
    it('width true', () => {
      context.colorful = true;
      context.reverseColor = true;
      fixture.detectChanges();
      isExists('.trend__reverse', true);
    });
    it('width false', () => {
      context.colorful = true;
      context.reverseColor = false;
      fixture.detectChanges();
      isExists('.trend__reverse', false);
    });
    it('should be muse is colorful: true', () => {
      context.reverseColor = true;
      fixture.detectChanges();
      isExists('.trend__reverse', false);
    });
  });
});

@Component({
  template: ` <trend #comp [flag]="flag" [colorful]="colorful" [reverseColor]="reverseColor"></trend> `,
})
class TestComponent {
  @ViewChild('comp', { static: true }) comp: TrendComponent;
  flag: 'up' | 'down';
  colorful: boolean;
  reverseColor: boolean;
}
