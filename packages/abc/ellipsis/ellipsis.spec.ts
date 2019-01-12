import { Component, DebugElement, NgZone, ViewChild } from '@angular/core';
import { fakeAsync, tick, ComponentFixture, TestBed, TestBedStatic } from '@angular/core/testing';
import { configureTestSuite } from '@delon/testing';

import { By } from '@angular/platform-browser';
import { NzTooltipDirective } from 'ng-zorro-antd';
import { EllipsisComponent } from './ellipsis.component';
import { EllipsisModule } from './ellipsis.module';

describe('abc: ellipsis', () => {
  let fixture: ComponentFixture<TestBaseComponent>;
  let injector: TestBedStatic;
  let dl: DebugElement;
  let context: TestBaseComponent;
  let page: PageObject;

  function genModule() {
    injector = TestBed.configureTestingModule({
      imports: [EllipsisModule],
      declarations: [TestLengthComponent, TestLineComponent],
    });
  }

  describe('', () => {
    configureTestSuite(genModule);

    it('should be not lengthh & line', () => {
      fixture = TestBed.createComponent(TestLengthComponent);
      dl = fixture.debugElement;
      context = fixture.componentInstance;
      context.lines = null;
      context.length = null;
      fixture.detectChanges();
      page = new PageObject();
      fixture.detectChanges();
      page.checkCls('.ellipsis', 1);
    });

    describe('#length', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(TestLengthComponent);
        dl = fixture.debugElement;
        context = fixture.componentInstance;
        page = new PageObject();
        fixture.detectChanges();
      });

      it('should working', () => {
        page.check('There were...');
      });

      it('should be tooltip', () => {
        context.tooltip = true;
        fixture.detectChanges();
        page.hasTooltip().check('There were...');
      });

      it('should be auto hide tail', () => {
        context.length = 4;
        context.text = 'asdf';
        fixture.detectChanges();
        page.check('asdf');
        context.length = 1;
        context.text = 'as';
        fixture.detectChanges();
        page.check('...');
      });

      it('#fullWidthRecognition', () => {
        context.fullWidthRecognition = true;
        context.text = 'cipchk,你好吗';
        fixture.detectChanges();
        page.check('cipchk,你...');
      });
    });

    describe('#line', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(TestLineComponent);
        dl = fixture.debugElement;
        context = fixture.componentInstance;
        page = new PageObject();
      });
      describe('in chrome', () => {
        beforeEach(fakeAsync(() => {
          // tslint:disable-next-line:no-string-literal
          page.comp['isSupportLineClamp'] = true;
          context.lines = 1;
          page.tick();
        }));
        it('should working', () => {
          // tslint:disable-next-line:no-string-literal
          expect(+page.getEl('.ellipsis').style['webkitLineClamp']).toBe(context.lines);
        });
      });
      describe('in firefox', () => {
        beforeEach(fakeAsync(() => {
          spyOn(window, 'getComputedStyle').and.returnValue({ lineHeight: 20 });
          // tslint:disable-next-line:no-string-literal
          page.comp['isSupportLineClamp'] = false;
          context.lines = 1;
          page.tick();
        }));
        it('should working', fakeAsync(() => {
          context.lines = 3;
          page.tick();
          expect(page.getText()).toBe('There were injuries');
        }));
        it('should be not innerText', () => {
          const el = page.getEl('.ellipsis__shadow');
          spyOnProperty(el, 'innerText').and.returnValue(null);
          // tslint:disable-next-line:no-string-literal
          page.comp['gen']();
          expect(page.getText()).toBe('There');
        });
        it('should be raw response when html offsetHeight is smallest', () => {
          const el = page.getEl('.ellipsis__shadow');
          spyOnProperty(el, 'offsetHeight').and.returnValue(1);
          // tslint:disable-next-line:no-string-literal
          page.comp['gen']();
          expect(page.getText()).not.toBe('There');
        });
      });
    });
  });

  describe('**slow**', () => {
    it('should be throw error when include html element', fakeAsync(() => {
      expect(() => {
        genModule();
        TestBed.overrideTemplate(TestLengthComponent, `<ellipsis length="1"><p>asdf</p></ellipsis>`);
        fixture = TestBed.createComponent(TestLengthComponent);
        dl = fixture.debugElement;
        context = fixture.componentInstance;
        fixture.detectChanges();
        tick();
        fixture.detectChanges();
      }).toThrowError();
    }));
  });

  class PageObject {
    comp: EllipsisComponent;

    constructor() {
      this.comp = context.comp;
    }

    get root(): HTMLElement {
      return dl.nativeElement;
    }

    getEl(cls: string): HTMLElement {
      return this.root.querySelector(cls);
    }

    checkCls(cls: string, count = 1): this {
      expect(this.root.querySelectorAll(cls).length).toBe(count);
      return this;
    }

    get text(): string {
      return this.comp.text;
    }

    checkText(text: string): this {
      expect(this.comp.text).toBe(text);
      return this;
    }

    getText(): string {
      return this.text.substring(0, this.comp.targetCount);
    }

    hasTooltip(result = true): this {
      const list = dl.queryAll(By.directive(NzTooltipDirective));
      if (result) {
        expect(list.length).toBeGreaterThan(0);
      } else {
        expect(list.length).toBe(0);
      }
      return this;
    }

    check(text: string): this {
      expect(this.root.innerText).toBe(text);
      return this;
    }

    tick(): this {
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      return this;
    }
  }
});

class TestBaseComponent {
  @ViewChild('comp') comp: EllipsisComponent;
  tooltip = false;
  length = 10;
  lines = 3;
  fullWidthRecognition = false;
  tail = '...';
  text = `There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.`;
  html = `<p>There were injuries alleged in three <a href="#cover">cases in 2015</a>, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.</p>`;
}

@Component({
  template: `
    <ellipsis #comp [tooltip]="tooltip" [length]="length" [fullWidthRecognition]="fullWidthRecognition" [tail]="tail">{{text}}</ellipsis>
  `,
})
class TestLengthComponent extends TestBaseComponent {
}

@Component({
  template: `
    <ellipsis #comp [tooltip]="tooltip" [lines]="lines" [fullWidthRecognition]="fullWidthRecognition" [tail]="tail" style="width: 20px; display: inline-block;">
      <div [innerHTML]="html"></div>
    </ellipsis>
  `,
})
class TestLineComponent extends TestBaseComponent {
}
