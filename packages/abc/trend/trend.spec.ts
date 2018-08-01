import { Component, DebugElement, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AdTrendModule } from './trend.module';
import { TrendComponent } from './trend.component';

describe('abc: trend', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdTrendModule.forRoot()],
      declarations: [TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    fixture.detectChanges();
  });

  function isExists(cls: string, stauts: boolean = true) {
    if (stauts) expect(dl.query(By.css(cls))).not.toBeNull();
    else expect(dl.query(By.css(cls))).toBeNull();
  }

  describe('#flag', () => {
    it('width up', () => {
      context.flag = 'up';
      fixture.detectChanges();
      isExists('.anticon-caret-up');
    });
    it('width down', () => {
      context.flag = 'down';
      fixture.detectChanges();
      isExists('.anticon-caret-down');
    });
  });

  describe('#colorful', () => {
    it('width true', () => {
      context.colorful = true;
      fixture.detectChanges();
      isExists('.grey', false);
    });
    it('width false', () => {
      context.colorful = false;
      fixture.detectChanges();
      isExists('.grey', true);
    });
  });

  describe('#reverseColor', () => {
    it('width true', () => {
      context.colorful = true;
      context.reverseColor = true;
      fixture.detectChanges();
      isExists('.reverse', true);
    });
    it('width false', () => {
      context.colorful = true;
      context.reverseColor = false;
      fixture.detectChanges();
      isExists('.reverse', false);
    });
    it('should be muse is colorful: true', () => {
      context.reverseColor = true;
      fixture.detectChanges();
      isExists('.reverse', false);
    });
  });
});

@Component({
  template: `
    <trend #comp
        [flag]="flag"
        [colorful]="colorful"
        [reverseColor]="reverseColor"></trend>`,
})
class TestComponent {
  @ViewChild('comp') comp: TrendComponent;
  flag: 'up' | 'down';
  colorful: boolean;
  reverseColor: boolean;
}
