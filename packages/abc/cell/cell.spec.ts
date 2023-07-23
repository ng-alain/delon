import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By, DomSanitizer } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { cleanCdkOverlayHtml, createTestContext } from '@delon/testing';
import { WINDOW } from '@delon/util/token';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzImageService } from 'ng-zorro-antd/image';

import { CellComponent } from './cell.component';
import { CellModule } from './cell.module';
import { CellService } from './cell.service';
import { CellFuValue, CellOptions, CellWidgetData } from './cell.types';

const DATE = new Date(2022, 0, 1, 1, 2, 3);

describe('abc: cell', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let page: PageObject;

  const moduleAction = (): void => {
    TestBed.configureTestingModule({
      imports: [CellModule, NoopAnimationsModule, BrowserModule, RouterTestingModule.withRoutes([])],
      declarations: [TestComponent, TestWidget]
    });
  };

  describe('', () => {
    beforeEach(moduleAction);
    afterEach(() => cleanCdkOverlayHtml());

    describe('', () => {
      beforeEach(() => {
        ({ fixture, dl, context } = createTestContext(TestComponent));
        page = new PageObject();
      });

      it('value support functionn', () => {
        const fn: CellFuValue = () => of({ text: 'via fn' });
        page.update(fn).check('via fn');
      });

      describe('#type', () => {
        it('with string', () => {
          page.update('1').check('1');
        });
        it('with string and mask', () => {
          page.update('1234', { mask: '*99*' }).check('*23*');
        });
        it('with number', () => {
          page.update(100).check('100');
          page.update(1000, { type: 'number' }).check('1000');
        });
        it('with boolean', () => {
          page.update(false).count('.yn__no', 1).update(true).count('.yn__no', 0).count('.yn__yes', 1);
        });
        it('with checkbox', () => {
          page.update(false, { type: 'checkbox', checkbox: { label: 'A' } }).count('.ant-checkbox', 1);
        });
        it('with radio', () => {
          page.update(false, { type: 'radio', radio: { label: 'A' } }).count('.ant-radio', 1);
        });
        it('with mega', () => {
          page.update(1000000, { mega: {} }).check('1万');
        });
        it('with currency', () => {
          page.update(1000000, { currency: {} }).check('1,000,000');
        });
        it('with cny', () => {
          page.update(1000000, { cny: {} }).check('壹佰万元整');
        });
        it('with date', () => {
          page.update(DATE, { date: {} }).check('2022-01-01 01:02:03');
          page.update(+DATE).check('2022-01-01 01:02:03');
        });
        it('with checkbox', () => {
          page
            .update(true, { checkbox: { label: 'a' } })
            .count('.ant-checkbox', 1)
            .check('a');
        });
        it('with radio', () => {
          page
            .update(true, { radio: { label: 'a' } })
            .count('.ant-radio', 1)
            .check('a');
        });
        it('with enum', () => {
          page
            .update(1, { enum: { 1: 'Success', 2: 'Error' } })
            .check('Success')
            .update(2)
            .check('Error')
            .update(3)
            .check('')
            .update(3, { enum: undefined })
            .check('3');
        });
        describe('with img', () => {
          it('should be working', () => {
            page
              .update('1.jpg', { img: { big: true } })
              .count('.img', 1)
              .click('.img')
              .count('.ant-image-preview', 1, true);
          });
          it('when array string', () => {
            page.update(['1.jpg', '2.jpg'], { img: {} }).count('.img', 2);
          });
          it('should be preview array', () => {
            const imgSrv = TestBed.inject(NzImageService);
            spyOn(imgSrv, 'preview').and.returnValue({
              switchTo: () => {}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any);
            page
              .update(['1.jpg', '2.jpg'], { img: { big: true } })
              .count('.img', 2)
              .click('.img');
            expect(imgSrv.preview).toHaveBeenCalled();
          });
          it('should be disabled preview when big is false', () => {
            const imgSrv = TestBed.inject(NzImageService);
            spyOn(imgSrv, 'preview');
            page.update(['1.jpg', '2.jpg'], { img: {} }).count('.img', 2).click('.img');
            expect(imgSrv.preview).not.toHaveBeenCalled();
          });
          it('should be reset big image', () => {
            page.update(['1.jpg', '2.jpg'], { img: { big: src => `new${src}` } }).click('.img');
            const el = document.querySelector('.ant-image-preview-img') as HTMLImageElement;
            expect(el.src).toContain(`new1.jpg`);
          });
        });
        it('with html', () => {
          page
            .update(`<strong>1</strong>`, { html: { safe: 'html' } })
            .check('1')
            .update(`<strong>2</strong>`, { html: { safe: 'text' } })
            .check(`<strong>2</strong>`);
        });
        it('with SafeHtml', () => {
          const safeHtml = TestBed.inject(DomSanitizer).bypassSecurityTrustHtml('<a>a</a>');
          page.update(safeHtml).check('a');
        });
        describe('with link', () => {
          it('navgation router', () => {
            const router = TestBed.inject(Router);
            spyOn(router, 'navigateByUrl');
            page.update('to', { link: { url: '/router' } }).click('a');
            expect(router.navigateByUrl).toHaveBeenCalled();
          });
          it('navgation window.open', () => {
            const win = TestBed.inject(WINDOW);
            spyOn(win, 'open');
            page.update('to', { link: { url: 'https://a.com' } }).click('a');
            expect(win.open).toHaveBeenCalled();
          });
          it('should be disabled', () => {
            const router = TestBed.inject(Router);
            spyOn(router, 'navigateByUrl');
            const win = TestBed.inject(WINDOW);
            spyOn(win, 'open');
            page.update('to', { link: {} }).click('a');
            expect(router.navigateByUrl).not.toHaveBeenCalled();
            expect(win.open).not.toHaveBeenCalled();
          });
          it('should be abort when url is null', () => {
            const router = TestBed.inject(Router);
            spyOn(router, 'navigateByUrl');
            page.update('to', { link: { url: undefined } }).click('a');
            expect(router.navigateByUrl).not.toHaveBeenCalled();
          });
        });
        describe('with badge', () => {
          it('should be working', () => {
            page
              .update('1', { badge: { data: { '1': { text: 'A' } } } })
              .check('A')
              .count('.ant-badge-status-default', 1)
              .update('2', {})
              .check('2');
          });
          it('should be empty text when is invalid key', () => {
            page.update('2', { type: 'badge' }).check('');
          });
        });
        it('with tag', () => {
          page
            .update('1', { tag: { data: { '1': { text: 'A', color: '#f50' } } } })
            .check('A')
            .count('.ant-tag-has-color', 1)
            .update('2', {})
            .check('2');
        });
        describe('with widget', () => {
          it('shoule be working', () => {
            const srv = TestBed.inject(CellService);
            srv.registerWidget(TestWidget.KEY, TestWidget);
            page.update('1', { widget: { key: TestWidget.KEY, data: 'new data' } }).check('1-new data');
          });
          it('when key is invalid', () => {
            spyOn(console, 'warn');
            page.update('1', { widget: { key: 'invalid', data: 'new data' } });
            expect(console.warn).toHaveBeenCalled();
          });
        });
      });

      it('#unit', () => {
        page.update({ text: '1', unit: '%' }).check('1', '.cell span').check('%', '.unit');
      });
    });

    describe('[property]', () => {
      beforeEach(() => {
        ({ fixture, dl, context } = createTestContext(TestComponent));
        page = new PageObject();
      });

      it('#valueChange', () => {
        spyOn(context, 'valueChange');
        context.value = true;
        context.options = { type: 'checkbox' };
        fixture.detectChanges();
        expect(context.valueChange).not.toHaveBeenCalled();
        page.getEl('.ant-checkbox').click();
        fixture.detectChanges();
        expect(context.valueChange).toHaveBeenCalled();
      });

      it('#type', () => {
        context.options = { renderType: 'primary' };
        fixture.detectChanges();
        page.count('.cell__primary', 1);
        context.options = { renderType: 'success' };
        fixture.detectChanges();
        page.count('.cell__success', 1);
      });

      it('#size', () => {
        context.options = { size: 'large' };
        fixture.detectChanges();
        page.count('.cell__large', 1);
        context.options = { size: 'small' };
        fixture.detectChanges();
        page.count('.cell__small', 1);
      });

      it('#loading', () => {
        context.loading = true;
        fixture.detectChanges();
        page.count('.anticon-loading', 1);
        context.loading = false;
        fixture.detectChanges();
        page.count('.anticon-loading', 0);
      });

      it('#disabled', () => {
        context.disabled = true;
        fixture.detectChanges();
        page.count('.cell__disabled', 1);
        context.disabled = false;
        fixture.detectChanges();
        page.count('.cell__disabled', 0);
      });

      it('#default', () => {
        context.options = { default: { text: '*', condition: '1' } };
        context.value = '1';
        fixture.detectChanges();
        page.count('.cell__has-default', 1);
        context.value = '2';
        fixture.detectChanges();
        page.count('.cell__has-default', 0);
      });

      it('#unit', () => {
        context.options = { unit: '*' };
        context.value = 1;
        fixture.detectChanges();
        page.check('*', '.unit');
      });
    });

    describe('[shortcut]', () => {
      it('#currency', () => {
        TestBed.overrideTemplate(TestComponent, `<cell [currency]="currency"></cell>`);
        ({ fixture, dl, context } = createTestContext(TestComponent));
        page = new PageObject();
        context.currency = 1000;
        fixture.detectChanges();
        page.checkType('currency');
      });
    });
  });

  class PageObject {
    update(value: unknown, options?: CellOptions): this {
      context.value = value;
      if (options != null) context.options = options;
      fixture.detectChanges();
      return this;
    }
    checkType(type: string): this {
      const el = this.getEl('.cell');
      expect(el != null).toBe(true);
      expect(el.dataset.type).toBe(type);
      return this;
    }
    check(text: string, cls?: string, contain = false): this {
      const el = this.getEl(cls ?? '.cell');
      expect(el != null).toBe(true);
      if (contain) {
        expect(el.innerText.trim()).toContain(text);
      } else {
        expect(el.innerText.trim()).toBe(text);
      }
      return this;
    }
    click(cls: string): this {
      const el = dl.query(By.css(cls)).nativeElement;
      expect(el != null).toBe(true);
      el.click();
      fixture.detectChanges();
      return this;
    }
    getEl(cls: string): HTMLElement {
      return dl.query(By.css(cls)).nativeElement;
    }
    getEls(cls: string): DebugElement[] {
      return dl.queryAll(By.css(cls));
    }
    count(cls: string, count: number = 1, viaBody = false): this {
      if (viaBody) {
        expect(document.querySelectorAll(cls).length).toBe(count);
      } else {
        expect(this.getEls(cls).length).toBe(count);
      }
      return this;
    }
  }
});

@Component({
  template: `{{ data.value }}-{{ data.options.widget.data }}`
})
class TestWidget {
  static readonly KEY = 'test';

  data!: CellWidgetData;
}

@Component({
  template: `
    <cell
      #comp
      [value]="value"
      (valueChange)="valueChange($event)"
      [options]="options"
      [loading]="loading"
      [disabled]="disabled"
    ></cell>
  `
})
class TestComponent {
  @ViewChild('comp', { static: true })
  comp!: CellComponent;

  value?: unknown;
  valueChange(_?: NzSafeAny): void {}
  options?: CellOptions;
  loading = false;
  disabled = false;

  currency?: number;
}
