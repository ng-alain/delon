import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NaTrendModule } from './trend.module';
import { NaTrendComponent } from './trend.component';

describe('abc: trend', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NaTrendModule.forRoot()],
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
      isExists('.na-trend__grey', false);
    });
    it('width false', () => {
      context.colorful = false;
      fixture.detectChanges();
      isExists('.na-trend__grey', true);
    });
  });

  describe('#reverseColor', () => {
    it('width true', () => {
      context.colorful = true;
      context.reverseColor = true;
      fixture.detectChanges();
      isExists('.na-trend__reverse', true);
    });
    it('width false', () => {
      context.colorful = true;
      context.reverseColor = false;
      fixture.detectChanges();
      isExists('.na-trend__reverse', false);
    });
    it('should be muse is colorful: true', () => {
      context.reverseColor = true;
      fixture.detectChanges();
      isExists('.na-trend__reverse', false);
    });
  });
});

@Component({
  template: `
    <na-trend #comp
        [flag]="flag"
        [colorful]="colorful"
        [reverseColor]="reverseColor"></na-trend>`,
})
class TestComponent {
  @ViewChild('comp') comp: NaTrendComponent;
  flag: 'up' | 'down';
  colorful: boolean;
  reverseColor: boolean;
}
