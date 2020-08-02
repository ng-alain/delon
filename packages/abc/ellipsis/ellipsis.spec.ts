import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { EllipsisComponent } from './ellipsis.component';
import { EllipsisModule } from './ellipsis.module';

describe('abc: ellipsis', () => {
  let fixture: ComponentFixture<TestBaseComponent>;
  let dl: DebugElement;
  let context: TestBaseComponent;
  let page: PageObject;

  function genModule(): void {
    TestBed.configureTestingModule({
      imports: [EllipsisModule],
      declarations: [TestLengthComponent, TestLineComponent],
    });
  }

  describe('', () => {
    beforeEach(() => genModule());

    it('should be not length & line', () => {
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
      });

      it('should working', fakeAsync(() => {
        page.tick().check('There were...');
      }));

      it('should be tooltip', fakeAsync(() => {
        context.tooltip = true;
        page.tick().hasTooltip().check('There were...');
      }));

      it('should be auto hide tail', fakeAsync(() => {
        context.length = 4;
        context.text = 'asdf';
        page.tick().check('asdf');
        context.length = 1;
        context.text = 'as';
        page.tick().check('...');
      }));

      it('#fullWidthRecognition', fakeAsync(() => {
        context.fullWidthRecognition = true;
        context.text = 'cipchk,你好吗';
        page.tick().check('cipchk,你...');
      }));
    });

    describe('#line', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(TestLineComponent);
        dl = fixture.debugElement;
        context = fixture.componentInstance;
        page = new PageObject();
      });
      describe('when support line clamp', () => {
        beforeEach(fakeAsync(() => {
          // tslint:disable-next-line:no-string-literal
          page.comp['isSupportLineClamp'] = true;
          context.lines = 1;
          page.tick();
        }));
        it('should working', () => {
          // tslint:disable-next-line:no-string-literal
          expect(+page.getEl('.ellipsis')!.style!['webkitLineClamp']).toBe(context!.lines as number);
        });
      });
      describe('when not support line clamp', () => {
        beforeEach(fakeAsync(() => {
          spyOn(window, 'getComputedStyle').and.returnValue({ lineHeight: 20 } as any);
          // tslint:disable-next-line:no-string-literal
          page.comp['isSupportLineClamp'] = false;
          context.lines = 1;
          page.tick();
        }));
        it('should working', fakeAsync(() => {
          context.lines = 2;
          page.tick();
          expect((dl.nativeElement as HTMLElement).innerHTML).toContain('...');
        }));
        it('should be not innerText', fakeAsync(() => {
          const el = page.getEl('.ellipsis__shadow');
          spyOnProperty(el!, 'innerText').and.returnValue(null);
          context.lines = 2;
          page.tick();
          expect((dl.nativeElement as HTMLElement).innerHTML).toContain('...');
        }));
        it('should be raw response when html offsetHeight is smallest', () => {
          const el = page.getEl('.ellipsis__shadow');
          spyOnProperty(el!, 'offsetHeight').and.returnValue(1);
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

    getEl(cls: string): HTMLElement | null {
      return this.root.querySelector(cls);
    }

    checkCls(cls: string, count: number = 1): this {
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

    hasTooltip(result: boolean = true): this {
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
      tick(1000);
      fixture.detectChanges();
      return this;
    }
  }
});

class TestBaseComponent {
  @ViewChild('comp', { static: true }) comp: EllipsisComponent;
  tooltip = false;
  length: number | null = 10;
  lines: number | null = 3;
  fullWidthRecognition = false;
  tail = '...';
  text = `There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.`;
  html = `<p>There were injuries alleged in three <a href="#cover">cases in 2015</a>, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.</p>`;
}

@Component({
  template: `
    <ellipsis #comp [tooltip]="tooltip" [length]="length" [fullWidthRecognition]="fullWidthRecognition" [tail]="tail">{{ text }}</ellipsis>
  `,
})
class TestLengthComponent extends TestBaseComponent {}

@Component({
  template: `
    <ellipsis
      #comp
      [tooltip]="tooltip"
      [lines]="lines"
      [fullWidthRecognition]="fullWidthRecognition"
      [tail]="tail"
      style="width: 1px; display: block;"
      ><div [innerHTML]="html"></div
    ></ellipsis>
  `,
})
class TestLineComponent extends TestBaseComponent {}
