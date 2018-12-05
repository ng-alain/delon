import { Type } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

export class PageG2<T> {
  constructor(private fixture: ComponentFixture<T> = null) { }

  get dl() {
    return this.fixture.debugElement;
  }

  get context() {
    return this.fixture.componentInstance;
  }

  get comp() {
    return this.context['comp'];
  }

  makeModule<M>(module: M, comp: Type<T>, options = { dc: true }): PageG2<T> {
    TestBed.configureTestingModule({
      imports: [module],
      declarations: [comp],
    });
    this.fixture = TestBed.createComponent(comp);
    if (options.dc) {
      this.dc();
    }
    return this;
  }

  dc() {
    this.fixture.detectChanges();
    return this;
  }

  newData(data: any): this {
    this.context['data'] = data;
    this.dc()
    return this;
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
    expect(this.comp['chart'].get(key)).toBe(value);
    return this;
  }

  checkAttrOptions(key: string, value: any) {
    const x = this.comp['chart'].get('geoms')[0].get('attrOptions')[key];
    expect(x.field).toBe(value);
    return this;
  }

  isXCount(num: number) {
    const x = this.comp['chart'].getXScales();
    expect(x[0].values.length).toBe(num);
    return this;
  }

  isYCount(num: number) {
    const y = this.comp['chart'].getYScales();
    expect(y.length).toBe(1);
    expect(y[0].values.length).toBe(num);
    return this;
  }
}