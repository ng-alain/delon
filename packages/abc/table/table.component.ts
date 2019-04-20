import { DecimalPipe, DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Optional,
  Output,
  Renderer2,
  SimpleChange,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  AlainI18NService,
  ALAIN_I18N_TOKEN,
  CNCurrencyPipe,
  DatePipe,
  DelonLocaleService,
  DrawerHelper,
  LocaleData,
  ModalHelper,
  YNPipe,
} from '@delon/theme';
import {
  deepMerge,
  deepMergeKey,
  toBoolean,
  updateHostClass,
  InputBoolean,
  InputNumber,
} from '@delon/util';
import { of, Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { STColumnSource } from './table-column-source';
import { STDataSource } from './table-data-source';
import { STExport } from './table-export';
import { STRowSource } from './table-row.directive';
import { STConfig } from './table.config';
import {
  STChange,
  STChangeType,
  STColumn,
  STColumnButton,
  STColumnFilterMenu,
  STColumnSelection,
  STData,
  STError,
  STExportOptions,
  STLoadOptions,
  STMultiSort,
  STPage,
  STReq,
  STRes,
  STRowClassName,
  STSingleSort,
  STStatisticalResults,
  STWidthMode,
} from './table.interfaces';

@Component({
  selector: 'st',
  templateUrl: './table.component.html',
  providers: [
    STDataSource,
    STRowSource,
    STColumnSource,
    STExport,
    CNCurrencyPipe,
    DatePipe,
    YNPipe,
    DecimalPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class STComponent implements AfterViewInit, OnChanges, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  private totalTpl = ``;
  private locale: LocaleData = {};
  private clonePage: STPage;
  private copyCog: STConfig;
  _data: STData[] = [];
  _statistical: STStatisticalResults = {};
  _isPagination = true;
  _allChecked = false;
  _allCheckedDisabled = false;
  _indeterminate = false;
  _columns: STColumn[] = [];

  // #region fields

  @Input() data: string | STData[] | Observable<STData[]>;
  /** 请求体配置 */
  @Input()
  get req() {
    return this._req;
  }
  set req(value: STReq) {
    this._req = deepMerge({}, this._req, this.cog.req, value);
  }
  private _req: STReq;
  /** 返回体配置 */
  @Input()
  get res() {
    return this._res;
  }
  set res(value: STRes) {
    const item = deepMergeKey({}, true, this.cog.res, value);
    const reName = item.reName;
    if (!Array.isArray(reName.list)) reName.list = reName.list.split('.');
    if (!Array.isArray(reName.total)) reName.total = reName.total.split('.');
    this._res = item;
  }
  private _res: STRes;
  @Input() columns: STColumn[] = [];
  @Input() @InputNumber() ps = 10;
  @Input() @InputNumber() pi = 1;
  @Input() @InputNumber() total = 0;
  /** 分页器配置 */
  @Input()
  get page() {
    return this._page;
  }
  set page(value: STPage) {
    this.clonePage = value;
    const item = deepMergeKey({}, true, this.cog.page, value);
    const { total } = item;
    if (typeof total === 'string' && total.length) {
      this.totalTpl = total;
    } else if (toBoolean(total)) {
      this.totalTpl = this.locale.total;
    } else {
      this.totalTpl = '';
    }
    this._page = item;
  }
  private _page: STPage;
  /** 是否显示Loading */
  @Input() @InputBoolean() loading = false;
  /** 延迟显示加载效果的时间（防止闪烁） */
  @Input() @InputNumber() loadingDelay = 0;
  /** 是否显示边框 */
  @Input() @InputBoolean() bordered = false;
  /** table大小 */
  @Input() size: 'small' | 'middle' | 'default';
  /** 纵向支持滚动，也可用于指定滚动区域的高度：`{ y: '300px', x: '300px' }` */
  @Input() scroll: { y?: string; x?: string };
  /**
   * 单排序规则
   * - 若不指定，则返回：`columnName=ascend|descend`
   * - 若指定，则返回：`sort=columnName.(ascend|descend)`
   */
  @Input() singleSort: STSingleSort = null;
  private _multiSort: STMultiSort;
  /** 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用 */
  @Input()
  get multiSort() {
    return this._multiSort;
  }
  set multiSort(value: any) {
    if (typeof value === 'boolean' && !toBoolean(value)) {
      this._multiSort = null;
      return;
    }
    this._multiSort = {
      ...(typeof value === 'object' ? value : {}),
    };
  }
  @Input() rowClassName: STRowClassName;
  @Input()
  set widthMode(value: STWidthMode) {
    this._widthMode = { type: 'default', strictBehavior: 'truncate', ...value };
  }
  get widthMode() {
    return this._widthMode;
  }
  private _widthMode: STWidthMode;
  /** `header` 标题 */
  @Input() header: string | TemplateRef<void>;
  /** `footer` 底部 */
  @Input() footer: string | TemplateRef<void>;
  /** 额外 `body` 顶部内容 */
  @Input() bodyHeader: TemplateRef<STStatisticalResults>;
  /** 额外 `body` 内容 */
  @Input() body: TemplateRef<STStatisticalResults>;
  @Input() @InputBoolean() expandRowByClick = false;
  /** `expand` 可展开，当数据源中包括 `expand` 表示展开状态 */
  @Input() expand: TemplateRef<{ $implicit: {}; column: STColumn }>;
  @Input() noResult: string | TemplateRef<void>;
  @Input() widthConfig: string[];
  /** 行单击多少时长之类为双击（单位：毫秒），默认：`200` */
  @Input() @InputNumber() rowClickTime = 200;
  @Input() @InputBoolean() responsiveHideHeaderFooter: boolean;
  /** 请求异常时回调 */
  @Output() readonly error = new EventEmitter<STError>();
  /**
   * 变化时回调，包括：`pi`、`ps`、`checkbox`、`radio`、`sort`、`filter`、`click`、`dblClick` 变动
   */
  @Output() readonly change = new EventEmitter<STChange>();

  // #endregion

  constructor(
    @Optional() @Inject(ALAIN_I18N_TOKEN) i18nSrv: AlainI18NService,
    private cdr: ChangeDetectorRef,
    private cog: STConfig,
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer2,
    private exportSrv: STExport,
    private modalHelper: ModalHelper,
    private drawerHelper: DrawerHelper,
    @Inject(DOCUMENT) private doc: any,
    private columnSource: STColumnSource,
    private dataSource: STDataSource,
    private delonI18n: DelonLocaleService,
  ) {
    this.delonI18n.change.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.locale = this.delonI18n.getData('st');
      if (this._columns.length > 0) {
        this.page = this.clonePage;
        this.cd();
      }
    });

    this.copyCog = deepMergeKey(new STConfig(), true, cog);
    delete this.copyCog.multiSort;
    Object.assign(this, this.copyCog);
    if (cog.multiSort && cog.multiSort.global !== false) {
      this.multiSort = { ...cog.multiSort };
    }

    i18nSrv.change
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(() => this._columns.length > 0),
      )
      .subscribe(() => this.refreshColumns());
  }

  cd() {
    this.cdr.detectChanges();
    return this;
  }

  renderTotal(total: string, range: string[]) {
    return this.totalTpl
      ? this.totalTpl
          .replace('{{total}}', total)
          .replace('{{range[0]}}', range[0])
          .replace('{{range[1]}}', range[1])
      : '';
  }

  isTruncate(column: STColumn): boolean {
    return column.width && this.widthMode.strictBehavior === 'truncate';
  }

  columnClass(column: STColumn): string {
    return column.className || (this.isTruncate(column) ? 'text-truncate' : null);
  }

  private changeEmit(type: STChangeType, data?: any) {
    const res: STChange = {
      type,
      pi: this.pi,
      ps: this.ps,
      total: this.total,
    };
    if (data != null) {
      res[type] = data;
    }
    this.change.emit(res);
  }

  private get routerState() {
    const { pi, ps, total } = this;
    return { pi, ps, total };
  }

  // #region data

  private _load() {
    const { pi, ps, data, req, res, page, total, singleSort, multiSort, rowClassName } = this;
    this.loading = true;
    return this.dataSource
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
      })
      .then(result => {
        this.loading = false;
        if (typeof result.pi !== 'undefined') {
          this.pi = result.pi;
        }
        if (typeof result.ps !== 'undefined') {
          this.ps = result.ps;
        }
        if (typeof result.total !== 'undefined') {
          this.total = result.total;
        }
        if (typeof result.pageShow !== 'undefined') {
          this._isPagination = result.pageShow;
        }
        this._data = result.list;
        this._statistical = result.statistical;
        return this._data;
      })
      .then(() => this._refCheck())
      .catch(error => {
        this.loading = false;
        this.error.emit({ type: 'req', error });
      });
  }

  /** 清空所有数据 */
  clear(cleanStatus = true) {
    if (cleanStatus) {
      this.clearStatus();
    }
    this._data = [];
    return this.cd();
  }

  /** 清空所有状态 */
  clearStatus() {
    return this.clearCheck()
      .clearRadio()
      .clearFilter()
      .clearSort();
  }

  /**
   * 根据页码重新加载数据
   *
   * @param pi 指定当前页码，默认：`1`
   * @param extraParams 重新指定 `extraParams` 值
   * @param options 选项
   */
  load(pi = 1, extraParams?: {}, options?: STLoadOptions) {
    if (pi !== -1) this.pi = pi;
    if (typeof extraParams !== 'undefined') {
      this._req.params =
        options && options.merge ? { ...this._req.params, ...extraParams } : extraParams;
    }
    this._change('pi');
    return this;
  }

  /**
   * 重新刷新当前页
   * @param extraParams 重新指定 `extraParams` 值
   */
  reload(extraParams?: {}, options?: STLoadOptions) {
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
  reset(extraParams?: {}, options?: STLoadOptions) {
    this.clearStatus().load(1, extraParams, options);
    return this;
  }

  private _toTop() {
    if (!this.page.toTop) return;
    const el = this.el.nativeElement as HTMLElement;
    if (this.scroll) {
      el.querySelector('.ant-table-body').scrollTo(0, 0);
      return;
    }
    el.scrollIntoView();
    // fix header height
    this.doc.documentElement.scrollTop -= this.page.toTopOffset;
  }

  _change(type: 'pi' | 'ps') {
    this._load().then(() => {
      this._toTop();
    });
    this.changeEmit(type);
  }

  _click(e: Event, item: STData, col: STColumn) {
    e.preventDefault();
    e.stopPropagation();
    const res = col.click(item, this);
    if (typeof res === 'string') {
      this.router.navigateByUrl(res, { state: this.routerState });
    }
    return false;
  }

  private rowClickCount = 0;
  _rowClick(e: Event, item: STData, index: number) {
    if ((e.target as HTMLElement).nodeName === 'INPUT') return;
    const { expand, expandRowByClick, rowClickTime } = this;
    if (!!expand && item.showExpand !== false && expandRowByClick) {
      item.expand = !item.expand;
      this.changeEmit('expand', item);
      return;
    }
    ++this.rowClickCount;
    if (this.rowClickCount !== 1) return;
    setTimeout(() => {
      const data = { e, item, index };
      if (this.rowClickCount === 1) {
        this.changeEmit('click', data);
      } else {
        this.changeEmit('dblClick', data);
      }
      this.rowClickCount = 0;
    }, rowClickTime);
  }

  _expandChange(item: STData): void {
    this.changeEmit('expand', item);
  }

  /** 移除某行数据 */
  removeRow(data: STData | STData[]) {
    if (!Array.isArray(data)) {
      data = [data];
    }

    (data as STData[])
      .map(item => this._data.indexOf(item))
      .filter(pos => pos !== -1)
      .forEach(pos => this._data.splice(pos, 1));

    // recalculate no
    this._columns
      .filter(w => w.type === 'no')
      .forEach(c => this._data.forEach((i, idx) => (i._values[c.__point] = { text: this.dataSource.getNoIndex(i, c, idx), org: idx })));

    return this.cd();
  }

  // #endregion

  // #region sort

  sort(col: STColumn, idx: number, value: any) {
    if (this.multiSort) {
      col._sort.default = value;
      col._sort.tick = this.dataSource.nextSortTick;
    } else {
      this._columns.forEach((item, index) => (item._sort.default = index === idx ? value : null));
    }
    this._load();
    const res = {
      value,
      map: this.dataSource.getReqSortMap(this.singleSort, this.multiSort, this._columns),
      column: col,
    };
    this.changeEmit('sort', res);
  }

  clearSort() {
    this._columns.forEach(item => (item._sort.default = null));
    return this;
  }

  // #endregion

  // #region filter

  private handleFilter(col: STColumn) {
    col.filter.default = col.filter.menus.findIndex(w => w.checked) !== -1;
    this._load();
    this.changeEmit('filter', col);
  }

  _filterConfirm(col: STColumn) {
    this.handleFilter(col);
  }

  _filterClear(col: STColumn) {
    col.filter.menus.forEach(i => (i.checked = false));
    this.handleFilter(col);
  }

  _filterRadio(col: STColumn, item: STColumnFilterMenu, checked: boolean) {
    col.filter.menus.forEach(i => (i.checked = false));
    item.checked = checked;
  }

  clearFilter() {
    this._columns
      .filter(w => w.filter && w.filter.default === true)
      .forEach(col => {
        col.filter.default = false;
        col.filter.menus.forEach(f => (f.checked = false));
      });
    return this;
  }

  // #endregion

  // #region checkbox

  /** 清除所有 `checkbox` */
  clearCheck(): this {
    return this._checkAll(false);
  }

  private _refCheck(): this {
    const validData = this._data.filter(w => !w.disabled);
    const checkedList = validData.filter(w => w.checked === true);
    this._allChecked = checkedList.length > 0 && checkedList.length === validData.length;
    const allUnChecked = validData.every(value => !value.checked);
    this._indeterminate = !this._allChecked && !allUnChecked;
    this._allCheckedDisabled = this._data.length === this._data.filter(w => w.disabled).length;
    this.cd();
    return this;
  }

  _checkAll(checked?: boolean): this {
    checked = typeof checked === 'undefined' ? this._allChecked : checked;
    this._data.filter(w => !w.disabled).forEach(i => (i.checked = checked));
    return this._refCheck()._checkNotify();
  }

  _checkSelection(i: STData, value: boolean) {
    i.checked = value;
    return this._refCheck()._checkNotify();
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
    return this;
  }

  _refRadio(checked: boolean, item: STData): this {
    // if (item.disabled === true) return;
    this._data.filter(w => !w.disabled).forEach(i => (i.checked = false));
    item.checked = checked;
    this.changeEmit('radio', item);
    return this;
  }

  // #endregion

  // #region buttons

  _btnClick(e: Event, record: STData, btn: STColumnButton) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    if (btn.type === 'modal' || btn.type === 'static') {
      const { modal } = btn;
      const obj = { [modal.paramsName]: record };
      (this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic'] as any)(
        modal.component,
        { ...obj, ...(modal.params && modal.params(record)) },
        deepMergeKey({}, true, this.copyCog.modal, modal),
      )
        .pipe(filter(w => typeof w !== 'undefined'))
        .subscribe(res => this.btnCallback(record, btn, res));
      return;
    } else if (btn.type === 'drawer') {
      const { drawer } = btn;
      const obj = { [drawer.paramsName]: record };
      this.drawerHelper
        .create(
          drawer.title,
          drawer.component,
          { ...obj, ...(drawer.params && drawer.params(record)) },
          deepMergeKey({}, true, this.copyCog.drawer, drawer),
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

  private btnCallback(record: STData, btn: STColumnButton, modal?: any) {
    if (!btn.click) return;
    if (typeof btn.click === 'string') {
      switch (btn.click) {
        case 'load':
          this.load();
          break;
        case 'reload':
          this.reload();
          break;
      }
    } else {
      return btn.click(record, modal, this);
    }
  }

  _btnText(record: STData, btn: STColumnButton) {
    if (btn.format) return btn.format(record, btn);
    return btn.text || '';
  }

  _validBtns(item: STData, col: STColumn): STColumnButton[] {
    return col.buttons.filter(btn => btn.iif(item, btn, col));
  }

  // #endregion

  // #region export

  /**
   * 导出当前页，确保已经注册 `XlsxModule`
   * @param newData 重新指定数据，例如希望导出所有数据非常有用
   * @param opt 额外参数
   */
  export(newData?: STData[], opt?: STExportOptions) {
    (newData ? of(newData) : of(this._data)).subscribe((res: STData[]) =>
      this.exportSrv.export({
        ...opt,
        ...{
          _d: res,
          _c: this._columns,
        },
      }),
    );
  }

  // #endregion

  resetColumns() {
    return this.refreshColumns()._load();
  }

  private refreshColumns(): this {
    this._columns = this.columnSource.process(this.columns);
    return this;
  }

  private setClass() {
    const { type, strictBehavior } = this.widthMode;
    updateHostClass(this.el.nativeElement, this.renderer, {
      [`st`]: true,
      [`st__p-${this.page.placement}`]: this.page.placement,
      [`st__width-${type}`]: true,
      [`st__width-strict-${strictBehavior}`]: type === 'strict',
      [`ant-table-rep__hide-header-footer`]: this.responsiveHideHeaderFooter,
    });
  }

  ngAfterViewInit() {
    this.columnSource.restoreAllRender(this._columns);
  }

  ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
    if (changes.columns) {
      this.refreshColumns();
    }
    if (changes.data && changes.data.currentValue) {
      this._load();
    }
    this.setClass();
  }

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
