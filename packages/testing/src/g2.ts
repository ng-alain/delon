import { Type } from '@angular/core';
import { discardPeriodicTasks, flush, tick, ComponentFixture, TestBed } from '@angular/core/testing';

export type PageG2Type = 'geoms' | 'views';

export const PageG2DataCount = 2;
export const PageG2Height = 100;

export class PageG2<T> {
  constructor(public fixture: ComponentFixture<T> | null = null) {}

  get dl() {
    return this.fixture!.debugElement;
  }

  get context() {
    return this.fixture!.componentInstance;
  }

  get comp() {
    // tslint:disable-next-line:no-string-literal
    return this.context['comp'];
  }

  get chart() {
    return this.comp.chart;
  }

  genModule<M>(module: M, comp: Type<T>) {
    TestBed.configureTestingModule({
      imports: [module],
      declarations: [comp],
    });
    return this;
  }

  genComp(comp: Type<T>, dc = false) {
    this.fixture = TestBed.createComponent(comp);
    if (dc) {
      this.dcFirst();
    }
    return this;
  }

  makeModule<M>(module: M, comp: Type<T>, options = { dc: true }): PageG2<T> {
    this.genModule(module, comp).genComp(comp, options.dc);
    return this;
  }

  dcFirst() {
    this.dc();
    flush();
    discardPeriodicTasks();
    // FIX: `Error during cleanup of component`
    if (this.comp && typeof this.comp.chart !== 'undefined') {
      spyOn(this.comp.chart, 'destroy');
    }
    return this;
  }

  dc() {
    this.fixture!.changeDetectorRef.markForCheck();
    this.fixture!.detectChanges();
    return this;
  }

  end() {
    // The 201 value is delay value
    tick(201);
    discardPeriodicTasks();
    return this;
  }

  destroy() {
    this.comp.ngOnDestroy();
  }

  newData(data: any): this {
    // tslint:disable-next-line:no-string-literal
    this.context['data'] = data;
    this.dc();
    return this;
  }

  getEls(cls: string): NodeListOf<HTMLElement> {
    return (this.dl.nativeElement as HTMLElement).querySelectorAll(cls);
  }

  getEl(cls: string): HTMLElement {
    return (this.dl.nativeElement as HTMLElement).querySelector(cls) as HTMLElement;
  }

  isCanvas(stauts: boolean = true): this {
    this.isExists('canvas', stauts);
    return this;
  }

  isText(cls: string, value: string) {
    const el = this.getEl(cls);
    expect(el ? el.textContent!.trim() : '').toBe(value);
    return this;
  }

  isExists(cls: string, stauts: boolean = true) {
    expect(this.getEl(cls) != null).toBe(stauts);
    return this;
  }

  checkOptions(key: string, value: any) {
    expect(this.chart.get(key)).toBe(value);
    return this;
  }

  checkAttrOptions(type: PageG2Type, key: string, value: any) {
    const x = this.chart.get(type)[0].get('attrOptions')[key];
    expect(x.field).toBe(value);
    return this;
  }

  isXScalesCount(num: number) {
    const x = this.chart.getXScales();
    expect(x[0].values.length).toBe(num);
    return this;
  }

  isYScalesCount(num: number) {
    const y = this.chart.getYScales();
    expect(y.length).toBe(1);
    expect(y[0].values.length).toBe(num);
    return this;
  }

  isDataCount(type: PageG2Type, num: number) {
    const results = this.chart.get(type);
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].get('data').length).toBe(num);
    return this;
  }

  checkTooltip(includeText: string | null, point?: { x: number; y: number }) {
    if (!point) {
      const g2El = this.dl.nativeElement as HTMLElement;
      point = {
        x: g2El.offsetWidth / 2,
        y: g2El.offsetHeight / 2,
      };
    }
    this.chart.showTooltip(point);
    const el = this.getEl('.g2-tooltip');
    if (includeText === null) {
      expect(el == null).toBe(true, `Shoule be not found g2-tooltip element`);
    } else {
      expect(el != null).toBe(true, `Shoule be has g2-tooltip element`);
      const text = el.textContent!.trim();
      expect(text.includes(includeText)).toBe(
        true,
        `Shoule be include "${includeText}" text of tooltip text context "${text}"`,
      );
    }
    return this;
  }
}

export function checkDelay<M, T>(module: M, comp: Type<T>, page: PageG2<T> | null = null) {
  if (page == null) {
    page = new PageG2<T>().makeModule(module, comp, { dc: false });
  }
  const context = page.context as any;
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
