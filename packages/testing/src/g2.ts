import { DebugElement, Type } from '@angular/core';
import { ComponentFixture, discardPeriodicTasks, flush, TestBed, tick } from '@angular/core/testing';

import { Chart } from '@antv/g2';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export type PageG2Type = 'geometries' | 'views';

export const PageG2DataCount = 2;
export const PageG2Height = 100;

export class PageG2<T> {
  constructor(public fixture: ComponentFixture<T> | null = null) {}

  get dl(): DebugElement {
    return this.fixture!.debugElement;
  }

  get context(): T {
    return this.fixture!.componentInstance;
  }

  get comp(): NzSafeAny {
    return (this.context as NzSafeAny)['comp'];
  }

  get chart(): Chart {
    return this.comp.chart;
  }

  genModule<M>(module: M, comp: Type<T>): this {
    TestBed.configureTestingModule({
      imports: [module],
      declarations: [comp]
    });
    return this;
  }

  genComp(comp: Type<T>, dc: boolean = false): this {
    this.fixture = TestBed.createComponent(comp);
    if (dc) {
      this.dcFirst();
    }
    return this;
  }

  makeModule<M>(module: M, comp: Type<T>, options: { dc: boolean } = { dc: true }): PageG2<T> {
    this.genModule(module, comp).genComp(comp, options.dc);
    return this;
  }

  dcFirst(): this {
    this.dc();
    flush();
    discardPeriodicTasks();
    // FIX: `Error during cleanup of component`
    if (this.comp && typeof this.comp.chart !== 'undefined') {
      spyOn(this.comp.chart, 'destroy');
    }
    return this;
  }

  dc(): this {
    this.fixture!.changeDetectorRef.markForCheck();
    this.fixture!.detectChanges();
    return this;
  }

  end(): this {
    // The 201 value is delay value
    tick(201);
    flush();
    discardPeriodicTasks();
    return this;
  }

  destroy(): void {
    this.comp.ngOnDestroy();
  }

  newData(data: NzSafeAny): this {
    (this.context as NzSafeAny)['data'] = data;
    this.dc();
    return this;
  }

  getEls(cls: string): NodeListOf<HTMLElement> {
    return (this.dl.nativeElement as HTMLElement).querySelectorAll(cls);
  }

  getEl(cls: string): HTMLElement {
    return (this.dl.nativeElement as HTMLElement).querySelector(cls) as HTMLElement;
  }

  getController(type: 'axis' | 'legend'): NzSafeAny {
    return this.chart.getController(type) as NzSafeAny;
  }

  isCanvas(stauts: boolean = true): this {
    this.isExists('canvas', stauts);
    return this;
  }

  isText(cls: string, value: string): this {
    const el = this.getEl(cls);
    expect(el ? el.textContent!.trim() : '').toBe(value);
    return this;
  }

  isExists(cls: string, stauts: boolean = true): this {
    expect(this.getEl(cls) != null).toBe(stauts);
    return this;
  }

  checkOptions(key: string, value: NzSafeAny): this {
    expect((this.chart as NzSafeAny)[key]).toBe(value);
    return this;
  }

  checkAttrOptions(type: PageG2Type, key: string, value: NzSafeAny): this {
    const x = (this.chart[type][0] as NzSafeAny).attributeOption[key];
    expect(x.field).toBe(value);
    return this;
  }

  isXScalesCount(num: number): this {
    const x = this.chart.getXScale();
    expect(x.values!.length).toBe(num);
    return this;
  }

  isYScalesCount(num: number): this {
    const y = this.chart.getYScales();
    expect(y.length).toBe(1);
    expect(y[0].values!.length).toBe(num);
    return this;
  }

  isDataCount(type: PageG2Type, num: number): this {
    const results = this.chart[type];
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].data.length).toBe(num);
    return this;
  }

  get firstDataPoint(): { x: number; y: number } {
    return this.chart.getXY((this.context as NzSafeAny)['data'][0]);
  }

  checkTooltip(_includeText: string | null, point?: { x: number; y: number }): this {
    if (!point) {
      point = this.firstDataPoint;
    }
    this.chart.showTooltip(point);
    expect(this.chart.getController('tooltip') != null).toBe(true);
    return this;
  }

  checkClickItem(): this {
    const point = this.firstDataPoint;
    const clientPoint = this.chart.canvas.getClientByPoint(point.x, point.y);
    const event = new MouseEvent('click', {
      clientX: clientPoint.x,
      clientY: clientPoint.y
    });
    (this.chart.canvas.get('el') as HTMLElement).dispatchEvent(event);
    return this;
  }
}

export function checkDelay<M, T>(module: M, comp: Type<T>, page: PageG2<T> | null = null): void {
  if (page == null) {
    page = new PageG2<T>().makeModule(module, comp, { dc: false });
  }
  const context = page.context as NzSafeAny;
  if (typeof context.delay === 'undefined') {
    console.warn(`You muse be dinfed "delay" property in test component`);
    return;
  }
  context.delay = 100;
  page.dc();
  page.comp.ngOnDestroy();
  expect(page.chart == null).toBe(true);
  tick(201);
  discardPeriodicTasks();
}
