import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { DecimalPipe, DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Host,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Optional,
  Output,
  SimpleChange,
  SimpleChanges,
  TemplateRef,
  TrackByFunction,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
import { from, isObservable, Observable, of, Subject, Subscription, filter, takeUntil } from 'rxjs';

import {
  AlainI18NService,
  ALAIN_I18N_TOKEN,
  DatePipe,
  DelonLocaleService,
  DrawerHelper,
  LocaleData,
  ModalHelper,
  YNPipe
} from '@delon/theme';
import { AlainConfigService, AlainSTConfig } from '@delon/util/config';
import { BooleanInput, InputBoolean, InputNumber, NumberInput, toBoolean } from '@delon/util/decorator';
import { deepCopy, deepMergeKey } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzResizeEvent } from 'ng-zorro-antd/resizable';
import { NzTableComponent } from 'ng-zorro-antd/table';

import { STColumnSource } from './st-column-source';
import { STDataSource, STDataSourceOptions, STDataSourceResult } from './st-data-source';
import { STExport } from './st-export';
import { STRowSource } from './st-row.directive';
import { ST_DEFAULT_CONFIG } from './st.config';
import {
  STChange,
  STChangeType,
  STClickRowClassName,
  STClickRowClassNameType,
  STColumn,
  STColumnButton,
  STColumnSafeType,
  STColumnSelection,
  STContextmenuFn,
  STContextmenuItem,
  STCustomRequestOptions,
  STData,
  STError,
  STExportOptions,
  STLoadOptions,
  STMultiSort,
  STPage,
  STReq,
  STRes,
  STResetColumnsOption,
  STResizable,
  STRowClassName,
  STSingleSort,
  STStatisticalResults,
  STWidthMode
} from './st.interfaces';
import { _STColumn, _STDataValue, _STHeader, _STTdNotify, _STTdNotifyType } from './st.types';

@Component({
  selector: 'st',
  exportAs: 'st',
  templateUrl: './st.component.html',
  providers: [STDataSource, STRowSource, STColumnSource, STExport, DatePipe, YNPipe, DecimalPipe],
  host: {
    '[class.st]': `true`,
    '[class.st__p-left]': `page.placement === 'left'`,
    '[class.st__p-center]': `page.placement === 'center'`,
    '[class.st__width-strict]': `widthMode.type === 'strict'`,
    '[class.st__row-class]': `rowClassName`,
    '[class.ant-table-rep]': `responsive`,
    '[class.ant-table-rep__hide-header-footer]': `responsiveHideHeaderFooter`
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class STComponent implements AfterViewInit, OnChanges, OnDestroy {
  static ngAcceptInputType_ps: NumberInput;
  static ngAcceptInputType_pi: NumberInput;
  static ngAcceptInputType_total: NumberInput;
  static ngAcceptInputType_loadingDelay: NumberInput;
  static ngAcceptInputType_bordered: BooleanInput;
  static ngAcceptInputType_expandRowByClick: BooleanInput;
  static ngAcceptInputType_expandAccordion: BooleanInput;
  static ngAcceptInputType_responsive: BooleanInput;
  static ngAcceptInputType_responsiveHideHeaderFooter: BooleanInput;
  static ngAcceptInputType_virtualScroll: BooleanInput;
  static ngAcceptInputType_virtualItemSize: NumberInput;
  static ngAcceptInputType_virtualMaxBufferPx: NumberInput;
  static ngAcceptInputType_virtualMinBufferPx: NumberInput;

  private destroy$ = new Subject<void>();
  private data$?: Subscription;
  private totalTpl = ``;
  cog!: AlainSTConfig;
  private _req!: STReq;
  private _res!: STRes;
  private _page!: STPage;
  private _widthMode!: STWidthMode;
  private customWidthConfig: boolean = false;
  _widthConfig: string[] = [];
  locale: LocaleData = {};
  _loading = false;
  _data: STData[] = [];
  _statistical: STStatisticalResults = {};
  _isPagination = true;
  _allChecked = false;
  _allCheckedDisabled = false;
  _indeterminate = false;
  _headers: _STHeader[][] = [];
  _columns: _STColumn[] = [];
  contextmenuList: STContextmenuItem[] = [];
  @ViewChild('table') readonly orgTable!: NzTableComponent<STData>;
  @ViewChild('contextmenuTpl') readonly contextmenuTpl!: NzDropdownMenuComponent;

  @Input()
  get req(): STReq {
    return this._req;
  }
  set req(value: STReq) {
    this._req = deepMergeKey({}, true, this.cog.req, value);
  }
  /** 返回体配置 */
  @Input()
  get res(): STRes {
    return this._res;
  }
  set res(value: STRes) {
    const item = (this._res = deepMergeKey({}, true, this.cog.res, value));
    const reName = item.reName!;
    if (typeof reName !== 'function') {
      if (!Array.isArray(reName.list)) reName.list = reName.list!.split('.');
      if (!Array.isArray(reName.total)) reName.total = reName.total!.split('.');
    }
    this._res = item;
  }
  @Input()
  get page(): STPage {
    return this._page;
  }
  set page(value: STPage) {
    this._page = { ...this.cog.page, ...value };
    this.updateTotalTpl();
  }
  @Input() data!: string | STData[] | Observable<STData[]>;
  @Input() columns?: STColumn[] | null;
  @Input() contextmenu?: STContextmenuFn | null;
  @Input() @InputNumber() ps = 10;
  @Input() @InputNumber() pi = 1;
  @Input() @InputNumber() total = 0;
  @Input() loading: boolean | null = null;
  @Input() @InputNumber() loadingDelay = 0;
  @Input() loadingIndicator: TemplateRef<void> | null = null;
  @Input() @InputBoolean() bordered = false;
  @Input() size!: 'small' | 'middle' | 'default';
  @Input() scroll: { x?: string | null; y?: string | null } = { x: null, y: null };
  @Input() singleSort?: STSingleSort | null;
  private _multiSort?: STMultiSort;
  @Input()
  get multiSort(): NzSafeAny {
    return this._multiSort;
  }
  set multiSort(value: NzSafeAny) {
    if (
      (typeof value === 'boolean' && !toBoolean(value)) ||
      (typeof value === 'object' && Object.keys(value).length === 0)
    ) {
      this._multiSort = undefined;
      return;
    }
    this._multiSort = {
      ...(typeof value === 'object' ? value : {})
    };
  }
  @Input() rowClassName?: STRowClassName | null;
  @Input() clickRowClassName?: STClickRowClassName | null;
  @Input()
  set widthMode(value: STWidthMode) {
    this._widthMode = { ...this.cog.widthMode, ...value };
  }
  get widthMode(): STWidthMode {
    return this._widthMode;
  }
  @Input()
  set widthConfig(val: string[]) {
    this._widthConfig = val;
    this.customWidthConfig = val && val.length > 0;
  }
  private _resizable?: STResizable;
  @Input()
  set resizable(val: STResizable | boolean | string) {
    this._resizable = typeof val === 'object' ? val : { disabled: !toBoolean(val) };
  }
  @Input() header?: string | TemplateRef<void> | null;
  @Input() @InputBoolean() showHeader = true;
  @Input() footer?: string | TemplateRef<void> | null;
  @Input() bodyHeader?: TemplateRef<{ $implicit: STStatisticalResults }> | null;
  @Input() body?: TemplateRef<{ $implicit: STStatisticalResults }> | null;
  @Input() @InputBoolean() expandRowByClick = false;
  @Input() @InputBoolean() expandAccordion = false;
  @Input() expand: TemplateRef<{ $implicit: NzSafeAny; index: number }> | null = null;
  @Input() noResult?: string | TemplateRef<void> | null;
  @Input() @InputBoolean() responsive: boolean = true;
  @Input() @InputBoolean() responsiveHideHeaderFooter?: boolean;
  @Output() readonly error = new EventEmitter<STError>();
  @Output() readonly change = new EventEmitter<STChange>();
  @Input() @InputBoolean() virtualScroll = false;
  @Input() @InputNumber() virtualItemSize = 54;
  @Input() @InputNumber() virtualMaxBufferPx = 200;
  @Input() @InputNumber() virtualMinBufferPx = 100;
  @Input() customRequest?: (options: STCustomRequestOptions) => Observable<NzSafeAny>;
  @Input() virtualForTrackBy: TrackByFunction<STData> = index => index;

  /**
   * Get the number of the current page
   */
  get count(): number {
    return this._data.length;
  }

  /**
   * Get the data of the current page
   */
  get list(): STData[] {
    return this._data;
  }

  get noColumns(): boolean {
    return this.columns == null;
  }

  constructor(
    @Optional() @Inject(ALAIN_I18N_TOKEN) i18nSrv: AlainI18NService,
    private cdr: ChangeDetectorRef,
    private el: ElementRef,
    private exportSrv: STExport,
    @Inject(DOCUMENT) private doc: NzSafeAny,
    private columnSource: STColumnSource,
    private dataSource: STDataSource,
    private delonI18n: DelonLocaleService,
    configSrv: AlainConfigService,
    private cms: NzContextMenuService
  ) {
    this.delonI18n.change.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.delonI18n.getData('st');
      if (this._columns.length > 0) {
        this.updateTotalTpl();
        this.cd();
      }
    });

    i18nSrv.change
      .pipe(
        takeUntil(this.destroy$),
        filter(() => this._columns.length > 0)
      )
      .subscribe(() => this.refreshColumns());

    this.setCog(configSrv.merge('st', ST_DEFAULT_CONFIG)!);
  }

  private setCog(cog: AlainSTConfig): void {
    const copyMultiSort = { ...cog.multiSort };
    // Because multiSort.global will affect the result, it should be removed first, and multiSort will be operated again after processing.
    delete cog.multiSort;
    this.cog = cog;
    Object.assign(this, cog);

    if (copyMultiSort.global !== false) {
      this.multiSort = copyMultiSort;
    }
    this.columnSource.setCog(cog);
    this.dataSource.setCog(cog);
  }

  cd(): this {
    this.cdr.detectChanges();
    return this;
  }

  private refreshData(): this {
    this._data = [...this._data];
    return this.cd();
  }

  renderTotal(total: string, range: string[]): string {
    return this.totalTpl
      ? this.totalTpl.replace('{{total}}', total).replace('{{range[0]}}', range[0]).replace('{{range[1]}}', range[1])
      : '';
  }

  private changeEmit(type: STChangeType, data?: NzSafeAny): void {
    const res: STChange = {
      type,
      pi: this.pi,
      ps: this.ps,
      total: this.total
    };
    if (data != null) {
      res[type] = data;
    }
    this.change.emit(res);
  }

  // #region data

  /**
   * 获取过滤后所有数据
   * - 本地数据：包含排序、过滤后不分页数据
   * - 远程数据：不传递 `pi`、`ps` 两个参数
   */
  get filteredData(): Promise<STData[]> {
    return this.loadData({ paginator: false } as NzSafeAny).then(res => res.list);
  }

  private updateTotalTpl(): void {
    const { total } = this.page;
    if (typeof total === 'string' && total.length) {
      this.totalTpl = total;
    } else if (toBoolean(total)) {
      this.totalTpl = this.locale.total;
    } else {
      this.totalTpl = '';
    }
  }

  private setLoading(val: boolean): void {
    if (this.loading == null) {
      this._loading = val;
      this.cdr.detectChanges();
    }
  }

  private loadData(options?: STDataSourceOptions): Promise<STDataSourceResult> {
    const { pi, ps, data, req, res, page, total, singleSort, multiSort, rowClassName } = this;
    return new Promise((resolvePromise, rejectPromise) => {
      if (this.data$) {
        this.data$.unsubscribe();
      }

      this.data$ = this.dataSource
        .process({
          pi,
          ps,
          total,
          data,
          req,
          res,
          page,
          columns: this._columns,
          singleSort,
          multiSort,
          rowClassName,
          paginator: true,
          customRequest: this.customRequest || this.cog.customRequest,
          ...options
        })
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: result => resolvePromise(result),
          error: error => {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              console.warn('st.loadDate', error);
            }
            rejectPromise(error);
          }
        });
    });
  }

  private async loadPageData(): Promise<this> {
    this.setLoading(true);
    try {
      const result = await this.loadData();
      this.setLoading(false);
      const undefinedString = 'undefined';
      if (typeof result.pi !== undefinedString) {
        this.pi = result.pi;
      }
      if (typeof result.ps !== undefinedString) {
        this.ps = result.ps;
      }
      if (typeof result.total !== undefinedString) {
        this.total = result.total;
      }
      if (typeof result.pageShow !== undefinedString) {
        this._isPagination = result.pageShow;
      }
      this._data = result.list;
      this._statistical = result.statistical as STStatisticalResults;
      this.changeEmit('loaded', result.list);
      // Should be re-render in next tike when using virtual scroll
      // https://github.com/ng-alain/ng-alain/issues/1836
      if (this.cdkVirtualScrollViewport) {
        Promise.resolve().then(() => this.cdkVirtualScrollViewport.checkViewportSize());
      }
      return this._refCheck();
    } catch (error) {
      this.setLoading(false);
      if (!this.destroy$.closed) {
        this.cdr.detectChanges();
        this.error.emit({ type: 'req', error });
      }
      return this;
    }
  }

  /** 清空所有数据 */
  clear(cleanStatus: boolean = true): this {
    if (cleanStatus) {
      this.clearStatus();
    }
    this._data = [];
    return this.cd();
  }

  /** 清空所有状态 */
  clearStatus(): this {
    return this.clearCheck().clearRadio().clearFilter().clearSort();
  }

  /**
   * 根据页码重新加载数据
   *
   * @param pi 指定当前页码，默认：`1`
   * @param extraParams 重新指定 `extraParams` 值
   * @param options 选项
   */
  load(pi: number = 1, extraParams?: NzSafeAny, options?: STLoadOptions): this {
    if (pi !== -1) this.pi = pi;
    if (typeof extraParams !== 'undefined') {
      this.req.params = options && options.merge ? { ...this.req.params, ...extraParams } : extraParams;
    }
    this._change('pi', options);
    return this;
  }

  /**
   * 重新刷新当前页
   *
   * @param extraParams 重新指定 `extraParams` 值
   */
  reload(extraParams?: NzSafeAny, options?: STLoadOptions): this {
    return this.load(-1, extraParams, options);
  }

  /**
   * 重置且重新设置 `pi` 为 `1`，包含以下值：
   * - `check` 数据
   * - `radio` 数据
   * - `sort` 数据
   * - `fileter` 数据
   *
   * @param extraParams 重新指定 `extraParams` 值
   */
  reset(extraParams?: NzSafeAny, options?: STLoadOptions): this {
    this.clearStatus().load(1, extraParams, options);
    return this;
  }

  private _toTop(enforce?: boolean): void {
    if (!(enforce == null ? this.page.toTop : enforce)) return;
    const el = this.el.nativeElement as HTMLElement;
    el.scrollIntoView();
    // fix header height
    this.doc.documentElement.scrollTop -= this.page.toTopOffset!;
    if (this.scroll) {
      if (this.cdkVirtualScrollViewport) {
        this.cdkVirtualScrollViewport.scrollTo({
          top: 0,
          left: 0
        });
      } else {
        el.querySelector('.ant-table-body, .ant-table-content')?.scrollTo(0, 0);
      }
    }
  }

  _change(type: 'pi' | 'ps', options?: STLoadOptions): void {
    if (type === 'pi' || (type === 'ps' && this.pi <= Math.ceil(this.total / this.ps))) {
      this.loadPageData().then(() => this._toTop(options?.toTop));
    }

    this.changeEmit(type);
  }

  private closeOtherExpand(item: STData): void {
    if (this.expandAccordion === false) return;
    this._data.filter(i => i !== item).forEach(i => (i.expand = false));
  }

  _rowClick(e: Event, item: STData, index: number, dbl: boolean): void {
    const el = e.target as HTMLElement;
    if (el.nodeName === 'INPUT') return;
    const { expand, expandRowByClick } = this;
    if (!!expand && item.showExpand !== false && expandRowByClick) {
      item.expand = !item.expand;
      this.closeOtherExpand(item);
      this.changeEmit('expand', item);
      return;
    }

    const data = { e, item, index };
    if (dbl) {
      this.changeEmit('dblClick', data);
    } else {
      this._clickRowClassName(el, item, index);
      this.changeEmit('click', data);
    }
  }

  private _clickRowClassName(el: HTMLElement, item: STData, index: number): void {
    const cr = this.clickRowClassName;
    if (cr == null) return;
    const config = {
      exclusive: false,
      ...(typeof cr === 'string' ? { fn: () => cr } : cr)
    } as STClickRowClassNameType;
    const className = config.fn(item, index);
    const trEl = el.closest('tr') as HTMLElement;
    if (config.exclusive) {
      trEl.parentElement!!.querySelectorAll('tr').forEach((a: HTMLElement) => a.classList.remove(className));
    }
    if (trEl.classList.contains(className)) {
      trEl.classList.remove(className);
    } else {
      trEl.classList.add(className);
    }
  }

  _expandChange(item: STData, expand: boolean): void {
    item.expand = expand;
    this.closeOtherExpand(item);
    this.changeEmit('expand', item);
  }

  _stopPropagation(ev: Event): void {
    ev.stopPropagation();
  }

  private _refColAndData(): this {
    this._columns
      .filter(w => w.type === 'no')
      .forEach(c =>
        this._data.forEach((i, idx) => {
          const text = `${this.dataSource.getNoIndex(i, c, idx)}`;
          i._values![c.__point!] = { text, _text: text, org: idx, safeType: 'text' } as _STDataValue;
        })
      );

    return this.refreshData();
  }

  /**
   * Add a rows in the table, like this:
   *
   * ```
   * this.st.addRow(stDataItem)
   * ```
   *
   * **TIPS:** Don't change the `total` value, it is recommended to use the `reload` method if needed
   */
  addRow(data: STData | STData[], options?: { index?: number }): this {
    if (!Array.isArray(data)) data = [data];
    this._data.splice(options?.index ?? 0, 0, ...(data as STData[]));
    return this.optimizeData()._refColAndData();
  }

  /**
   * Remove a row in the table, like this:
   *
   * ```
   * this.st.removeRow(0)
   * this.st.removeRow(stDataItem)
   * ```
   *
   * **TIPS:** Don't change the `total` value, it is recommended to use the `reload` method if needed
   */
  removeRow(data: STData | STData[] | number): this {
    if (typeof data === 'number') {
      this._data.splice(data, 1);
    } else {
      if (!Array.isArray(data)) {
        data = [data];
      }

      const curData = this._data;
      for (var i = curData.length; i--; ) {
        if (data.indexOf(curData[i]) !== -1) {
          curData.splice(i, 1);
        }
      }
    }
    return this._refCheck()._refColAndData();
  }

  /**
   * Sets the row value for the `index` in the table, like this:
   *
   * - `optinos.refreshSchema` Whether to refresh of st schemas
   * - `optinos.emitReload` Whether to trigger a reload http request when data is url
   *
   * ```
   * this.st.setRow(0, { price: 100 })
   * this.st.setRow(0, { price: 100, name: 'asdf' })
   * this.st.setRow(item, { price: 100 })
   * ```
   */
  setRow(index: number | STData, item: STData, options?: { refreshSchema?: boolean; emitReload?: boolean }): this {
    options = { refreshSchema: false, emitReload: false, ...options };
    if (typeof index !== 'number') {
      index = this._data.indexOf(index);
    }
    this._data[index] = deepMergeKey(this._data[index], false, item);
    this.optimizeData();
    if (options.refreshSchema) {
      this.resetColumns({ emitReload: options.emitReload });
      return this;
    }
    return this.refreshData();
  }

  // #endregion

  // #region sort

  sort(col: _STColumn, idx: number, value: NzSafeAny): void {
    if (this.multiSort) {
      col._sort.default = value;
      col._sort.tick = this.dataSource.nextSortTick;
    } else {
      this._columns.forEach((item, index) => (item._sort.default = index === idx ? value : null));
    }
    this.cdr.detectChanges();
    this.loadPageData();
    const res = {
      value,
      map: this.dataSource.getReqSortMap(this.singleSort, this.multiSort, this._columns),
      column: col
    };
    this.changeEmit('sort', res);
  }

  clearSort(): this {
    this._columns.forEach(item => (item._sort.default = null));
    return this;
  }

  // #endregion

  // #region filter

  _handleFilter(col: _STColumn, confirm: boolean): void {
    if (!confirm) {
      this.columnSource.cleanFilter(col);
    }
    // 过滤表示一种数据的变化应重置页码为 `1`
    this.pi = 1;
    this.columnSource.updateDefault(col.filter!);
    this.loadPageData();
    this.changeEmit('filter', col);
  }

  handleFilterNotify(value?: unknown): void {
    this.changeEmit('filterChange', value);
  }

  clearFilter(): this {
    this._columns.filter(w => w.filter && w.filter.default === true).forEach(col => this.columnSource.cleanFilter(col));
    return this;
  }
  // #endregion

  // #region checkbox

  /** 清除所有 `checkbox` */
  clearCheck(): this {
    return this.checkAll(false);
  }

  private _refCheck(): this {
    const validData = this._data.filter(w => !w.disabled);
    const checkedList = validData.filter(w => w.checked === true);
    this._allChecked = checkedList.length > 0 && checkedList.length === validData.length;
    const allUnChecked = validData.every(value => !value.checked);
    this._indeterminate = !this._allChecked && !allUnChecked;
    this._allCheckedDisabled = this._data.length === this._data.filter(w => w.disabled).length;
    return this.cd();
  }

  checkAll(checked?: boolean): this {
    checked = typeof checked === 'undefined' ? this._allChecked : checked;
    this._data.filter(w => !w.disabled).forEach(i => (i.checked = checked));
    return this._refCheck()._checkNotify().refreshData();
  }

  _rowSelection(row: STColumnSelection): this {
    row.select(this._data);
    return this._refCheck()._checkNotify();
  }

  _checkNotify(): this {
    const res = this._data.filter(w => !w.disabled && w.checked === true);
    this.changeEmit('checkbox', res);
    return this;
  }

  // #endregion

  // #region radio

  /** 清除所有 `radio` */
  clearRadio(): this {
    this._data.filter(w => w.checked).forEach(item => (item.checked = false));
    this.changeEmit('radio', null);
    return this.refreshData();
  }

  // #endregion

  _handleTd(ev: _STTdNotify): void {
    switch (ev.type) {
      case 'checkbox':
        this._refCheck()._checkNotify();
        break;
      case 'radio':
        this.changeEmit('radio', ev.item);
        this.refreshData();
        break;
    }
  }

  // #region export

  /**
   * 导出当前页，确保已经注册 `XlsxModule`
   *
   * @param newData 重新指定数据；若为 `true` 表示使用 `filteredData` 数据
   * @param opt 额外参数
   */
  export(newData?: STData[] | true, opt?: STExportOptions): void {
    const data = Array.isArray(newData)
      ? this.dataSource.optimizeData({ columns: this._columns, result: newData })
      : this._data;
    (newData === true ? from(this.filteredData) : of(data)).subscribe((res: STData[]) =>
      this.exportSrv.export({
        columens: this._columns,
        ...opt,
        data: res
      })
    );
  }

  // #endregion

  // #region resizable

  colResize({ width }: NzResizeEvent, column: _STColumn): void {
    column.width = `${width}px`;
    this.changeEmit('resize', column);
  }

  // #endregion

  // #region contextmenu
  onContextmenu(event: MouseEvent): void {
    if (!this.contextmenu) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const colEl = (event.target as HTMLElement).closest('[data-col-index]') as HTMLElement;
    if (!colEl) {
      return;
    }
    const colIndex = Number(colEl.dataset.colIndex);
    const rowIndex = Number((colEl.closest('tr') as HTMLElement).dataset.index);
    const isTitle = isNaN(rowIndex);
    const obs$ = this.contextmenu({
      event,
      type: isTitle ? 'head' : 'body',
      rowIndex: isTitle ? null : rowIndex,
      colIndex,
      data: isTitle ? null : this.list[rowIndex],
      column: this._columns[colIndex]
    });
    (isObservable(obs$) ? obs$ : of(obs$))
      .pipe(
        takeUntil(this.destroy$),
        filter(res => res.length > 0)
      )
      .subscribe(res => {
        this.contextmenuList = res.map(i => {
          if (!Array.isArray(i.children)) {
            i.children = [];
          }
          return i;
        });
        this.cdr.detectChanges();
        this.cms.create(event, this.contextmenuTpl);
      });
  }
  // #endregion

  get cdkVirtualScrollViewport(): CdkVirtualScrollViewport {
    return this.orgTable.cdkVirtualScrollViewport!;
  }

  resetColumns(options?: STResetColumnsOption): Promise<this> {
    options = { emitReload: true, preClearData: false, ...options };
    if (typeof options.columns !== 'undefined') {
      this.columns = options.columns;
    }
    if (typeof options.pi !== 'undefined') {
      this.pi = options.pi;
    }
    if (typeof options.ps !== 'undefined') {
      this.ps = options.ps;
    }
    if (options.emitReload) {
      // Should clean data, Because of changing columns may cause inaccurate data
      options.preClearData = true;
    }
    if (options.preClearData) {
      this._data = [];
    }
    this.refreshColumns();
    if (options.emitReload) {
      return this.loadPageData();
    } else {
      this.cd();
      return Promise.resolve(this);
    }
  }

  private refreshColumns(): this {
    const res = this.columnSource.process(this.columns as _STColumn[], {
      widthMode: this.widthMode,
      resizable: this._resizable,
      safeType: this.cog.safeType as STColumnSafeType
    });
    this._columns = res.columns;
    this._headers = res.headers;
    if (this.customWidthConfig === false && res.headerWidths != null) {
      this._widthConfig = res.headerWidths;
    }
    return this;
  }

  private optimizeData(): this {
    this._data = this.dataSource.optimizeData({
      columns: this._columns,
      result: this._data,
      rowClassName: this.rowClassName
    });
    return this;
  }

  /**
   * Return pure data, `st` internally maintains a set of data for caching, this part of data may affect the backend
   *
   * 返回纯净数据，`st` 内部会维护一组用于缓存的数据，这部分数据可能会影响后端
   */
  pureItem(itemOrIndex: STData | number): STData | null {
    if (typeof itemOrIndex === 'number') {
      itemOrIndex = this._data[itemOrIndex];
    }
    if (!itemOrIndex) {
      return null;
    }
    const copyItem = deepCopy(itemOrIndex);
    ['_values', '_rowClassName'].forEach(key => delete copyItem[key]);
    return copyItem;
  }

  ngAfterViewInit(): void {
    this.columnSource.restoreAllRender(this._columns);
  }

  ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
    if (changes.columns) {
      this.refreshColumns().optimizeData();
    }
    const changeData = changes.data;
    if (changeData && changeData.currentValue && !(this.req.lazyLoad && changeData.firstChange)) {
      this.loadPageData();
    }
    if (changes.loading) {
      this._loading = changes.loading.currentValue;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

@Component({
  selector: 'st-td',
  templateUrl: './st-td.component.html',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class STTdComponent {
  @Input() c!: _STColumn;
  @Input() cIdx!: number;
  @Input() data!: STData[];
  @Input() i!: STData;
  @Input() index!: number;
  @Output() readonly n = new EventEmitter<_STTdNotify>();

  private get routerState(): { pi: number; ps: number; total: number } {
    const { pi, ps, total } = this.stComp;
    return { pi, ps, total };
  }

  constructor(
    @Host() private stComp: STComponent,
    private router: Router,
    private modalHelper: ModalHelper,
    private drawerHelper: DrawerHelper
  ) {}

  private report(type: _STTdNotifyType): void {
    this.n.emit({ type, item: this.i, col: this.c });
  }

  _checkbox(value: boolean): void {
    this.i.checked = value;
    this.report('checkbox');
  }

  _radio(): void {
    this.data.filter(w => !w.disabled).forEach(i => (i.checked = false));
    this.i.checked = true;
    this.report('radio');
  }

  _link(e: Event): boolean {
    this._stopPropagation(e);
    const res = this.c.click!(this.i, this.stComp);
    if (typeof res === 'string') {
      this.router.navigateByUrl(res, { state: this.routerState });
    }
    return false;
  }

  _stopPropagation(ev: Event): void {
    ev.preventDefault();
    ev.stopPropagation();
  }

  _btn(btn: STColumnButton, ev?: Event): void {
    ev?.stopPropagation();
    const cog = this.stComp.cog;
    let record = this.i;
    if (btn.type === 'modal' || btn.type === 'static') {
      if (cog.modal!.pureRecoard === true) {
        record = this.stComp.pureItem(record)!;
      }
      const modal = btn.modal!;
      const obj = { [modal.paramsName!]: record };
      (this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic'] as NzSafeAny)(
        modal.component,
        { ...obj, ...(modal.params && modal.params(record)) },
        deepMergeKey({}, true, cog.modal, modal)
      )
        .pipe(filter(w => typeof w !== 'undefined'))
        .subscribe((res: NzSafeAny) => this.btnCallback(record, btn, res));
      return;
    } else if (btn.type === 'drawer') {
      if (cog.drawer!.pureRecoard === true) {
        record = this.stComp.pureItem(record)!;
      }
      const drawer = btn.drawer!;
      const obj = { [drawer.paramsName!]: record };
      this.drawerHelper
        .create(
          drawer.title!,
          drawer.component,
          { ...obj, ...(drawer.params && drawer.params(record)) },
          deepMergeKey({}, true, cog.drawer, drawer)
        )
        .pipe(filter(w => typeof w !== 'undefined'))
        .subscribe(res => this.btnCallback(record, btn, res));
      return;
    } else if (btn.type === 'link') {
      const clickRes = this.btnCallback(record, btn);
      if (typeof clickRes === 'string') {
        this.router.navigateByUrl(clickRes, { state: this.routerState });
      }
      return;
    }
    this.btnCallback(record, btn);
  }

  private btnCallback(record: STData, btn: STColumnButton, modal?: NzSafeAny): NzSafeAny {
    if (!btn.click) return;
    if (typeof btn.click === 'string') {
      switch (btn.click) {
        case 'load':
          this.stComp.load();
          break;
        case 'reload':
          this.stComp.reload();
          break;
      }
    } else {
      return btn.click(record, modal, this.stComp);
    }
  }
}
