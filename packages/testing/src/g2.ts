import { Type } from '@angular/core';
import { discardPeriodicTasks, flush, ComponentFixture, TestBed } from '@angular/core/testing';

export type PageG2Type = 'geoms' | 'views';

export class PageG2<T> {
  constructor(public fixture: ComponentFixture<T> = null) { }

  get dl() {
    return this.fixture.debugElement;
  }

  get context() {
    return this.fixture.componentInstance;
  }

  get comp() {
    // tslint:disable-next-line:no-string-literal
    return this.context['comp'];
  }

  get chart() {
    return this.comp.chart;
  }

  makeModule<M>(module: M, comp: Type<T>, options = { dc: true }): PageG2<T> {
    TestBed.configureTestingModule({
      imports: [module],
      declarations: [comp],
    });
    this.fixture = TestBed.createComponent(comp);
    if (options.dc) {
      this.dcFirst();
    }
    return this;
  }

  dcFirst() {
    this.dc();
    flush();
    discardPeriodicTasks();
    return this;
  }

  dc() {
    this.fixture.changeDetectorRef.markForCheck();
    this.fixture.detectChanges();
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
    return (this.dl.nativeElement as HTMLElement).querySelector(cls);
  }

  isCanvas(stauts: boolean = true): this {
    this.isExists('canvas', stauts);
    return this;
  }

  isText(cls: string, value: string) {
    const el = this.getEl(cls);
    expect(el ? el.textContent.trim() : '').toBe(value);
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
}
