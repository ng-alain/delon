import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, DebugElement, Injectable, TemplateRef, Type, ViewChild } from '@angular/core';
import { ComponentFixture, discardPeriodicTasks, flush, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';

import { dispatchDropDown } from '@delon/testing';
import { ALAIN_I18N_TOKEN, DelonLocaleModule, _HttpClient } from '@delon/theme';
import { deepCopy, deepGet } from '@delon/util/other';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationComponent } from 'ng-zorro-antd/pagination';

import { STWidgetRegistry } from './../st-widget';
import { AlainI18NService, AlainI18NServiceFake } from '../../../theme/src/services/i18n/i18n';
import { STComponent } from '../st.component';
import {
  STChange,
  STChangeType,
  STClickRowClassName,
  STColumn,
  STColumnTitle,
  STContextmenuFn,
  STCustomRequestOptions,
  STMultiSort,
  STPage,
  STReq,
  STRes,
  STWidthMode
} from '../st.interfaces';
import { STModule } from '../st.module';
import { _STColumn } from '../st.types';

export const MOCKDATE = new Date();
export const MOCKIMG = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==`;

const r = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);
export function genData(count: number): NzSafeAny[] {
  return Array(count)
    .fill({})
    .map((_item: NzSafeAny, idx: number) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
        yn: idx % 2 === 0,
        date: MOCKDATE,
        img: MOCKIMG,
        num: 11111111111.4556,
        status: Math.floor(Math.random() * 5) + 1,
        tag: r(1, 5),
        prices: {
          fix: `fix${idx + 1}`,
          total: Math.ceil(Math.random() * 10) + 200
        }
      };
    });
}

export const PS = 3;
export const DEFAULTCOUNT = PS + 1;
export const USERS: NzSafeAny[] = genData(DEFAULTCOUNT);

@Injectable()
export class MockI18NServiceFake extends AlainI18NServiceFake {
  fanyi(_key: string): string {
    return 'zh';
  }
}

export class MockNzI18nService {
  getDateLocale(): null {
    return null;
  }
}

export function genModule<T extends TestComponent>(
  type: Type<T>,
  other: {
    template?: string;
    i18n?: boolean;
    minColumn?: boolean;
    providers?: NzSafeAny[];
    createComp?: boolean;
  }
): PageObject<T> | undefined {
  other = {
    template: '',
    i18n: false,
    minColumn: false,
    providers: [],
    createComp: true,
    ...other
  };
  const imports = [
    NoopAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientTestingModule,
    RouterTestingModule.withRoutes([]),
    NzModalModule,
    NzDrawerModule,
    STModule,
    DelonLocaleModule
  ];
  const providers = [
    {
      provide: ALAIN_I18N_TOKEN,
      useClass: MockI18NServiceFake
    }
  ];
  if (other.providers!.length > 0) {
    providers.push(...other.providers!);
  }
  TestBed.configureTestingModule({
    imports,
    declarations: [TestComponent, TestExpandComponent, TestWidgetComponent],
    providers
  });
  if (other.template) TestBed.overrideTemplate(TestComponent, other.template);
  if (other.createComp) {
    return new PageObject<T>(other.minColumn, type);
  }
  return undefined;
}

export class PageObject<T extends TestComponent> {
  _changeData!: STChange;
  changeSpy: jasmine.Spy;
  readonly fixture: ComponentFixture<T>;
  readonly context: T;
  readonly dl: DebugElement;
  readonly comp: STComponent;
  readonly i18nSrv: AlainI18NService;
  readonly registerWidget: STWidgetRegistry;

  constructor(minColumn: boolean = false, type: Type<T>) {
    this.registerWidget = TestBed.inject(STWidgetRegistry);
    this.registerWidget.register('test', TestWidgetComponent);
    // ALAIN_I18N_TOKEN 默认为 root 会导致永远都会存在
    this.i18nSrv = TestBed.inject(ALAIN_I18N_TOKEN);
    // Create component
    this.fixture = TestBed.createComponent(type);
    this.dl = this.fixture.debugElement;
    this.context = this.dl.componentInstance;
    this.context.data = deepCopy(USERS);
    if (minColumn) {
      this.context.columns = [{ title: '', index: 'id' }];
    }

    spyOn(this.context as NzSafeAny, 'error');
    this.changeSpy = spyOn(this.context as NzSafeAny, 'change').and.callFake(
      ((e: NzSafeAny) => (this._changeData = e)) as NzSafeAny
    );
    this.comp = this.context.comp;
  }
  get(cls: string): DebugElement {
    return this.dl.query(By.css(cls));
  }
  getEl(cls: string): HTMLElement {
    const el = this.dl.query(By.css(cls));
    expect(el).not.toBeNull();
    return el.nativeElement as HTMLElement;
  }
  clickEl(cls: string): this {
    const el = this.getEl(cls);
    el.click();
    return this.cd();
  }
  click(cls: string): this {
    const el = this.getEl(cls);
    expect(el).not.toBeNull();
    el.click();
    this.fixture.detectChanges();
    return this;
  }
  /**
   * 获取单元格，下标从 `1` 开始
   */
  getCell(row: number = 1, column: number = 1): HTMLElement {
    const cell = (this.dl.nativeElement as HTMLElement).querySelector(
      `.st__body tr[data-index="${row - 1}"] td:nth-child(${column})`
    ) as HTMLElement;
    return cell;
  }
  /**
   * 单击单元格，下标从 `1` 开始
   */
  clickCell(rowOrCls: number | string = 1, column: number = 1, cls?: string): this {
    if (typeof rowOrCls === 'string') {
      cls = rowOrCls.toString();
      rowOrCls = 1;
    }
    let el = this.getCell(rowOrCls, column);
    if (cls) {
      el = el.querySelector(cls) as HTMLElement;
    }
    el.click();
    return this.cd();
  }
  /**
   * 断言单元格内容，下标从 `1` 开始
   *
   * @param value 当 `null` 时，表示无单元格
   * @param cls 对单元格进一步筛选
   * @param isContain 是否包含条件
   */
  expectCell(value: string | null, row: number = 1, column: number = 1, cls?: string, isContain?: boolean): this {
    let cell = this.getCell(row, column);
    if (cls) {
      cell = cell.querySelector(cls) as HTMLElement;
    }
    if (value == null) {
      expect(cell).toBeNull();
    } else {
      if (isContain === true) {
        expect(cell.innerHTML).toContain(value);
      } else {
        expect(cell.innerText.trim()).toBe(value);
      }
    }
    return this;
  }
  /** 获取标头 */
  getHead(name: string): HTMLElement {
    const el = (this.dl.nativeElement as HTMLElement).querySelector(
      `.ant-table-thead th[data-col="${name}"]`
    ) as HTMLElement;
    return el;
  }
  clickHead(name: string, cls: string): this {
    const el = this.getHead(name).querySelector(cls) as HTMLElement;
    expect(el).not.toBeNull();
    el.click();
    this.fixture.detectChanges();
    return this;
  }
  expectHead(value: string, name: string, cls?: string): this {
    let cell = this.getHead(name);
    if (cls) cell = cell.querySelector(cls) as HTMLElement;
    if (value == null) {
      expect(cell).toBeNull();
    } else {
      expect(cell.innerText.trim()).toBe(value);
    }
    return this;
  }
  /** 断言组件内 `_columns` 值 */
  expectColumn(title: string, path: string, valule: NzSafeAny): this {
    const ret = deepGet(
      this.comp._columns.find(w => (w.title as STColumnTitle).text === title),
      path
    );
    expect(ret).toBe(valule);
    return this;
  }
  /** 断言组件内 `_data` 值，下标从 `1` 开始 */
  expectData(row: number, path: string, valule: NzSafeAny, options?: { message?: string }): this {
    const ret = deepGet(this.comp._data[row - 1], path);
    if (options?.message != null) {
      expect(ret)
        .withContext(options?.message)
        .toBe(valule);
    } else {
      expect(ret).toBe(valule);
    }
    return this;
  }
  /** 切换分页 */
  go(pi: number = 2): this {
    this.getEl(`.ant-pagination [title="${pi}"]`).click();
    return this.cd();
  }
  cd(time: number = 1000): this {
    this.fixture.detectChanges();
    tick(time);
    this.fixture.detectChanges();
    return this;
  }
  updateData(data: NzSafeAny): this {
    this.context.data = data;
    return this.cd();
  }
  updateColumn(columns: STColumn[], pi: number = 1, ps: number = PS): this {
    this.context.columns = columns;
    this.context.pi = pi;
    this.context.ps = ps;
    return this.cd();
  }
  expectCompData(path: string, value: NzSafeAny): this {
    expect(deepGet(this.comp, path)).toBe(value);
    return this;
  }
  expectDataTotal(value: number): this {
    expect(deepGet(this.comp, 'total')).toBe(value);
    return this;
  }
  expectTotalPage(value: number): this {
    const a = this.dl.query(By.css('nz-pagination')).componentInstance as NzPaginationComponent;
    expect(a.getLastIndex(a.nzTotal, a.nzPageSize)).toBe(value);
    return this;
  }
  expectCurrentPageTotal(value: number): this {
    expect(this.comp._data.length).toBe(value);
    return this;
  }
  expectCompDataPi(value: number): this {
    expect(deepGet(this.comp, 'pi')).toBe(value);
    return this;
  }
  expectElCount(cls: string, count: number, expectationFailOutput?: string): this {
    const els = document.querySelectorAll(cls);
    expect(els.length)
      .withContext(expectationFailOutput ?? `HtmlElement length muse be: ${count}`)
      .toBe(count);
    return this;
  }
  expectElContent(cls: string, content: string, expectationFailOutput?: string): this {
    const el = document.querySelector(cls);
    if (content == null) {
      expect(el)
        .withContext(expectationFailOutput ?? ``)
        .toBeNull();
    } else {
      expect(el!.textContent!.trim())
        .withContext(expectationFailOutput ?? ``)
        .toBe(content);
    }
    return this;
  }
  expectChangeType(type: STChangeType, called: boolean = true): this {
    const callAll = this.changeSpy.calls.all();
    const args = callAll[callAll.length - 1].args[0];
    if (called) {
      expect(args.type).toBe(type);
    } else {
      expect(args.type).not.toBe(type);
    }
    return this;
  }
  openDropDownInHead(nams: string): this {
    dispatchDropDown(this.dl.query(By.css(`.ant-table-thead th[data-col="${nams}"]`)), 'click');
    this.fixture.detectChanges();
    return this;
  }
  openDropDownInRow(row: number = 1): this {
    dispatchDropDown(this.dl.query(By.css(`.st__body tr[data-index="${row - 1}"]`)), 'mouseleave');
    this.fixture.detectChanges();
    return this;
  }
  openContextMenu(col: number, row?: number, event?: NzSafeAny): this {
    let el: HTMLElement;
    if (typeof row === 'number') {
      el = this.getCell(row, col);
    } else {
      el = (this.dl.nativeElement as HTMLElement).querySelector(`.ant-table-thead th:nth-child(${col})`) as HTMLElement;
    }
    if (!el) {
      expect(false).withContext(`not found col: ${col}, row: ${row} element`).toBe(true);
      return this;
    }

    this.context.comp.onContextmenu({
      target: el,
      preventDefault: jasmine.createSpy(),
      stopPropagation: jasmine.createSpy(),
      ...event
    } as NzSafeAny);
    return this.cd();
  }
  clickContentMenu(idx: number): this {
    const el = document.querySelector(`.st__contextmenu li:nth-child(${idx})`);
    expect(el).withContext(`the index: ${idx} is invalid element of content menu container`).not.toBeNull();
    const fn = this.context.comp.contextmenuList[idx - 1].fn;
    expect(fn).not.toHaveBeenCalled();
    (el as HTMLElement).click();
    this.cd();
    expect(fn).toHaveBeenCalled();
    return this;
  }
  asyncEnd(): this {
    flush();
    discardPeriodicTasks();
    return this;
  }
}

@Component({
  template: `
    <st
      #st
      [data]="data"
      [req]="req"
      [res]="res"
      [columns]="columns"
      [ps]="ps"
      [pi]="pi"
      [total]="total"
      [page]="page"
      [responsive]="responsive"
      [responsiveHideHeaderFooter]="responsiveHideHeaderFooter"
      [widthMode]="widthMode"
      [loading]="loading"
      [loadingDelay]="loadingDelay"
      [virtualScroll]="virtualScroll"
      [bordered]="bordered"
      [size]="size"
      [scroll]="scroll"
      [multiSort]="multiSort"
      [noResult]="noResult"
      [widthConfig]="widthConfig"
      [clickRowClassName]="clickRowClassName"
      [showHeader]="showHeader"
      [contextmenu]="contextmenu"
      [customRequest]="customRequest"
      (change)="change($event)"
      (error)="error()"
    >
    </st>
    <ng-template #tpl let-handle="handle">
      <span>In tpl</span>
      <a class="close_in_tpl" (click)="handle.close()">close</a>
    </ng-template>
  `
})
export class TestComponent {
  @ViewChild('st', { static: true }) readonly comp!: STComponent;
  @ViewChild('tpl', { static: true }) readonly tpl!: TemplateRef<NzSafeAny>;
  data: string | NzSafeAny[] | Observable<NzSafeAny[]> | null = deepCopy(USERS);
  res: STRes = {};
  req: STReq = {};
  columns!: STColumn[];
  ps = PS;
  pi?: number;
  total?: number;
  page: STPage = {};
  loading: boolean | null = null;
  loadingDelay?: number;
  bordered?: boolean;
  size?: 'small' | 'middle' | 'default';
  scroll?: { y?: string; x?: string };
  multiSort?: boolean | STMultiSort;
  noResult = 'noResult';
  widthConfig: string[] = [];
  clickRowClassName?: STClickRowClassName | null = 'text-error';
  responsive = false;
  responsiveHideHeaderFooter = false;
  expandRowByClick = false;
  expandAccordion = false;
  widthMode: STWidthMode = {};
  virtualScroll = false;
  showHeader = true;
  customRequest?: (options: STCustomRequestOptions) => Observable<NzSafeAny>;
  contextmenu: STContextmenuFn | null = _ => [
    { text: 'a', fn: jasmine.createSpy() },
    { text: 'b', children: [{ text: 'c', fn: jasmine.createSpy() }] }
  ];

  error(): void {}
  change(): void {}
}
@Component({
  template: `
    <st
      #st
      [data]="data"
      [columns]="columns"
      [expand]="expand"
      [expandRowByClick]="expandRowByClick"
      [expandAccordion]="expandAccordion"
      (change)="change($event)"
    >
      <ng-template #expand let-item let-index="index" let-column="column">
        {{ item.id }}
      </ng-template>
    </st>
  `
})
export class TestExpandComponent extends TestComponent {}

@Component({
  template: ` <div class="widget-id-value">{{ id }}</div>
    <div class="widget-record-value">{{ record?.id }}</div>`
})
export class TestWidgetComponent {
  id!: number;
  record: NzSafeAny;
}
