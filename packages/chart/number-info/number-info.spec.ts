import { Component, DebugElement, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { createTestContext } from '@delon/testing';

import { NumberInfoComponent } from './number-info.component';

describe('abc: number-info', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestComponent));
    fixture.detectChanges();
  });

  function isText(cls: string, value: string): void {
    const el = dl.query(By.css(cls)).nativeElement as HTMLElement;
    expect(el ? el.textContent!.trim() : '').toBe(value);
  }

  function isExists(cls: string, stauts: boolean = true): void {
    if (stauts) {
      expect(dl.query(By.css(cls))).not.toBeNull();
    } else {
      expect(dl.query(By.css(cls))).toBeNull();
    }
  }

  describe('#title', () => {
    it('with string', () => {
      isText('.number-info__title', context.title as string);
    });
    it('with template', () => {
      context.title = context.titleTpl;
      fixture.detectChanges();
      isExists('#titleTpl');
    });
  });

  describe('#subTitle', () => {
    it('with string', () => {
      isText('.number-info__title-sub', context.subTitle as string);
    });
    it('with template', () => {
      context.subTitle = context.subTitleTpl;
      fixture.detectChanges();
      isExists('#subTitleTpl');
    });
  });

  describe('#total', () => {
    it('with string', () => {
      expect(context.total).toBe(context.comp.total!);
    });
    it('with template', () => {
      context.total = context.totalTpl;
      fixture.detectChanges();
      isExists('#totalTpl');
    });
  });

  describe('#subTotal', () => {
    it('with string', () => {
      isExists('.number-info__value-sub');
    });
    it('with template', () => {
      context.subTotal = context.subTotalTpl;
      fixture.detectChanges();
      isExists('#subTotalTpl');
    });
  });

  it('should be change theme', () => {
    isExists('.number-info__light');
    context.theme = '';
    fixture.detectChanges();
    isExists('.number-info__light', false);
  });

  it('should be change gap', () => {
    context.gap = 10;
    fixture.detectChanges();
    const el = dl.query(By.css('.number-info__value')).nativeElement as HTMLElement;
    expect(+el.style.marginTop!.replace('px', '')).toBe(10);
  });
});

@Component({
  template: `
    <number-info
      #ni
      [title]="title"
      [subTitle]="subTitle"
      [total]="total"
      [subTotal]="subTotal"
      suffix="suffix"
      [status]="status"
      [theme]="theme"
      [gap]="gap"
    />
    <ng-template #titleTpl><p id="titleTpl">titleTpl</p></ng-template>
    <ng-template #subTitleTpl><p id="subTitleTpl">subTitleTpl</p></ng-template>
    <ng-template #totalTpl><p id="totalTpl">totalTpl</p></ng-template>
    <ng-template #subTotalTpl><p id="subTotalTpl">subTotalTpl</p></ng-template>
  `,
  imports: [NumberInfoComponent]
})
class TestComponent {
  @ViewChild('ni', { static: true }) comp!: NumberInfoComponent;
  @ViewChild('titleTpl', { static: true }) titleTpl!: TemplateRef<void>;
  @ViewChild('subTitleTpl', { static: true }) subTitleTpl!: TemplateRef<void>;
  @ViewChild('totalTpl', { static: true }) totalTpl!: TemplateRef<void>;
  @ViewChild('subTotalTpl', { static: true }) subTotalTpl!: TemplateRef<void>;
  title: string | TemplateRef<void> = 'title';
  subTitle: string | TemplateRef<void> = 'subTitle';
  total: string | number | TemplateRef<void> = 'total';
  subTotal: string | number | TemplateRef<void> = 'subTotal';
  status = 'up';
  theme = 'light';
  gap = 8;
}
