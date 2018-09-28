import {
  Component,
  Inject,
  Input,
  Output,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Renderer2,
  ElementRef,
  TemplateRef,
  SimpleChange,
  ContentChild,
  Optional,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { DecimalPipe, DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import {
  CNCurrencyPipe,
  DatePipe,
  YNPipe,
  ModalHelper,
  ModalHelperOptions,
  ALAIN_I18N_TOKEN,
  AlainI18NService,
  DrawerHelper,
  DrawerHelperOptions
} from '@delon/theme';
import {
  deepCopy,
  toBoolean,
  updateHostClass,
  InputBoolean,
  InputNumber,
} from '@delon/util';

import {
  STColumn,
  STChange,
  STColumnSelection,
  STColumnFilterMenu,
  STData,
  STColumnButton,
  STExportOptions,
  STMultiSort,
  STReq,
  STError,
  STChangeType,
  STChangeRowClick,
  STRes,
  STPage,
  STLoadOptions,
} from './table.interfaces';
import { STConfig } from './table.config';
import { STExport } from './table-export';
import { STColumnSource } from './table-column-source';
import { STRowSource } from './table-row.directive';
import { STDataSource } from './table-data-source';

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
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class STComponent implements AfterViewInit, OnChanges, OnDestroy {
  private i18n$: Subscription;
  private totalTpl = ``;
  _data: STData[] = [];
  _isPagination = true;
  _allChecked = false;
  _indeterminate = false;
  _columns: STColumn[] = [];

  // #region fields

  /** 数据源 */
  @Input()
  data: string | STData[] | Observable<STData[]>;
  /** 请求体配置 */
  @Input()
  get req() {
    return this._req;
  }
  set req(value: STReq) {
    const { req } = this.cog;
    const item = Object.assign({}, req, value);
    if (item.reName == null) {
      item.reName = deepCopy(req.reName);
    }
    this._req = item;
  }
  private _req: STReq;
  /** 返回体配置 */
  @Input()
  get res() {
    return this._res;
  }
  set res(value: STRes) {
    const { res } = this.cog;
    const item = Object.assign({}, res, value);
    item.reName = Object.assign({}, res.reName, item.reName);
    if (!Array.isArray(item.reName.list))
      item.reName.list = item.reName.list.split('.');
    if (!Array.isArray(item.reName.total))
      item.reName.total = item.reName.total.split('.');
    this._res = item;
  }
  private _res: STRes;
  /** 列描述  */
  @Input()
  columns: STColumn[] = [];
  /** 每页数量，当设置为 `0` 表示不分页，默认：`10` */
  @Input()
  @InputNumber()
  ps = 10;
  /** 当前页码 */
  @Input()
  @InputNumber()
  pi = 1;
  /** 数据总量 */
  @Input()
  @InputNumber()
  total = 0;
  /** 分页器配置 */
  @Input()
  get page() {
    return this._page;
  }
  set page(value: STPage) {
    const { page } = this.cog;
    const item = Object.assign({}, deepCopy(page), value);
    const { total } = item;
    if (typeof total === 'string' && total.length) {
      this.totalTpl = total;
    } else if (toBoolean(total)) {
      this.totalTpl = `共 {{total}} 条`;
    } else {
      this.totalTpl = '';
    }
    this._page = item;
  }
  private _page: STPage;
  /** 是否显示Loading */
  @Input()
  @InputBoolean()
  loading = false;
  /** 延迟显示加载效果的时间（防止闪烁） */
  @Input()
  @InputNumber()
  loadingDelay = 0;
  /** 是否显示边框 */
  @Input()
  @InputBoolean()
  bordered = false;
  /** table大小 */
  @Input()
  size: 'small' | 'middle' | 'default';
  /** 纵向支持滚动，也可用于指定滚动区域的高度：`{ y: '300px', x: '300px' }` */
  @Input()
  scroll: { y?: string; x?: string };
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
    this._multiSort = Object.assign(
      <STMultiSort>{
        key: 'sort',
        separator: '-',
        nameSeparator: '.',
      },
      typeof value === 'object' ? value : {},
    );
  }
  private _multiSort: STMultiSort;
  /** `header` 标题 */
  @Input()
  header: string | TemplateRef<void>;
  /** `footer` 底部 */
  @Input()
  footer: string | TemplateRef<void>;
  /** 额外 `body` 内容 */
  @ContentChild('body')
  body: TemplateRef<void>;
  /** `expand` 可展开，当数据源中包括 `expand` 表示展开状态 */
  @ContentChild('expand')
  expand: TemplateRef<{ $implicit: any; column: STColumn }>;
  @Input()
  noResult: string | TemplateRef<void>;
  @Input()
  widthConfig: string[];
  /** 请求异常时回调 */
  @Output()
  readonly error: EventEmitter<STError> = new EventEmitter<STError>();
  /**
   * 变化时回调，包括：`pi`、`ps`、`checkbox`、`radio`、`sort`、`filter`、`click`、`dblClick` 变动
   */
  @Output()
  readonly change: EventEmitter<STChange> = new EventEmitter<STChange>();
  /** 行单击多少时长之类为双击（单位：毫秒），默认：`200` */
  @Input()
  @InputNumber()
  rowClickTime = 200;

  @Input()
  @InputBoolean()
  responsiveHideHeaderFooter: boolean;

  // #endregion

  // #region compatible

  /**
   * checkbox变化时回调，参数为当前所选清单
   * @deprecated 使用 `change` 替代
   * @deprecated as of v3
   */
  @Output()
  readonly checkboxChange: EventEmitter<STData[]> = new EventEmitter<
    STData[]
    >();
  /**
   * radio变化时回调，参数为当前所选
   * @deprecated 使用 `change` 替代
   * @deprecated as of v3
   */
  @Output()
  readonly radioChange: EventEmitter<STData> = new EventEmitter<STData>();
  /**
   * 排序回调
   * @deprecated 使用 `change` 替代
   * @deprecated as of v3
   */
  @Output()
  readonly sortChange: EventEmitter<any> = new EventEmitter<any>();
  /**
   * 过滤变化时回调
   * @deprecated 使用 `change` 替代
   * @deprecated as of v3
   */
  @Output()
  readonly filterChange: EventEmitter<STColumn> = new EventEmitter<STColumn>();
  /**
   * 行单击回调
   * @deprecated 使用 `change` 替代
   * @deprecated as of v3
   */
  @Output()
  readonly rowClick: EventEmitter<STChangeRowClick> = new EventEmitter<
    STChangeRowClick
    >();
  /**
   * 行双击回调
   * @deprecated 使用 `change` 替代
   * @deprecated as of v3
   */
  @Output()
  readonly rowDblClick: EventEmitter<STChangeRowClick> = new EventEmitter<
    STChangeRowClick
    >();
  //#endregion

  constructor(
    private cd: ChangeDetectorRef,
    private cog: STConfig,
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer2,
    private exportSrv: STExport,
    @Optional()
    @Inject(ALAIN_I18N_TOKEN)
    i18nSrv: AlainI18NService,
    private modalHelper: ModalHelper,
    private drawerHelper: DrawerHelper,
    @Inject(DOCUMENT) private doc: any,
    private columnSource: STColumnSource,
    private dataSource: STDataSource,
  ) {
    Object.assign(this, deepCopy(cog));
    if (i18nSrv) {
      this.i18n$ = i18nSrv.change
        .pipe(filter(() => this._columns.length > 0))
        .subscribe(() => this.updateColumns());
    }
  }

  renderTotal(total: string, range: string[]) {
    return this.totalTpl
      ? this.totalTpl
        .replace('{{total}}', total)
        .replace('{{range[0]}}', range[0])
        .replace('{{range[1]}}', range[1])
      : '';
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

  //#region data

  private _load() {
    const { pi, ps, data, req, res, page, total, multiSort } = this;
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
        multiSort,
      })
      .then(result => {
        this.loading = false;
        if (typeof result.pi !== 'undefined') {
          this.pi = result.pi;
        }
        if (typeof result.total !== 'undefined') {
          this.total = result.total;
        }
        if (typeof result.pageShow !== 'undefined') {
          this._isPagination = result.pageShow;
        }
        this._data = result.list;
        return this._data;
      })
      .then(() => this._refCheck())
      .catch(error => {
        this.loading = false;
        this.error.emit({ type: 'req', error });
      });
  }

  /**
   * 根据页码重新加载数据
   *
   * @param pi 指定当前页码，默认：`1`
   * @param extraParams 重新指定 `extraParams` 值
   * @param options 选项
   */
  load(pi = 1, extraParams?: any, options?: STLoadOptions) {
    if (pi !== -1) this.pi = pi;
    if (typeof extraParams !== 'undefined') {
      this._req.params =
        options && options.merge
          ? Object.assign(this._req.params, extraParams)
          : extraParams;
    }
    this._change('pi');
  }

  /**
   * 重新刷新当前页
   * @param extraParams 重新指定 `extraParams` 值
   */
  reload(extraParams?: any, options?: STLoadOptions) {
    this.load(-1, extraParams, options);
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
  reset(extraParams?: any, options?: STLoadOptions) {
    this.clearCheck()
      .clearRadio()
      .clearFilter()
      .clearSort();
    this.load(1, extraParams, options);
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

  _click(e: Event, item: any, col: STColumn) {
    e.preventDefault();
    e.stopPropagation();
    const res = col.click(item, this);
    if (typeof res === 'string') {
      this.router.navigateByUrl(res);
    }
    return false;
  }

  private rowClickCount = 0;
  _rowClick(e: Event, item: any, index: number) {
    if ((e.target as HTMLElement).nodeName === 'INPUT') return;
    ++this.rowClickCount;
    if (this.rowClickCount !== 1) return;
    setTimeout(() => {
      const data = { e, item, index };
      if (this.rowClickCount === 1) {
        this.changeEmit('click', data);
        // @deprecated as of v3
        this.rowClick.emit(data);
      } else {
        this.changeEmit('dblClick', data);
        // @deprecated as of v3
        this.rowDblClick.emit(data);
      }
      this.rowClickCount = 0;
    }, this.rowClickTime);
  }

  //#endregion

  //#region sort

  sort(col: STColumn, idx: number, value: any) {
    if (this.multiSort) {
      col._sort.default = value;
    } else {
      this._columns.forEach(
        (item, index) => (item._sort.default = index === idx ? value : null),
      );
    }
    this._load();
    const res = {
      value,
      map: this.dataSource.getReqSortMap(this.multiSort, this._columns),
      column: col,
    };
    this.changeEmit('sort', res);
    // @deprecated as of v3
    this.sortChange.emit(res);
  }

  clearSort() {
    this._columns.forEach(item => (item._sort.default = null));
  }

  //#endregion

  //#region filter

  private handleFilter(col: STColumn) {
    col.filter.default = col.filter.menus.findIndex(w => w.checked) !== -1;
    this._load();
    this.changeEmit('filter', col);
    // @deprecated as of v3
    this.filterChange.emit(col);
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

  //#endregion

  //#region checkbox

  /** 清除所有 `checkbox` */
  clearCheck(): this {
    return this._checkAll(false);
  }

  private _refCheck(): this {
    const validData = this._data.filter(w => !w.disabled);
    const checkedList = validData.filter(w => w.checked === true);
    this._allChecked =
      checkedList.length > 0 && checkedList.length === validData.length;
    const allUnChecked = validData.every(value => !value.checked);
    this._indeterminate = !this._allChecked && !allUnChecked;
    this.cd.detectChanges();
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
    // @deprecated as of v3
    this.checkboxChange.emit(res);
    return this;
  }

  //#endregion

  //#region radio

  /** 清除所有 `radio` */
  clearRadio(): this {
    this._data.filter(w => w.checked).forEach(item => (item.checked = false));
    this.changeEmit('radio', null);
    // @deprecated as of v3
    this.radioChange.emit(null);
    return this;
  }

  _refRadio(checked: boolean, item: STData): this {
    // if (item.disabled === true) return;
    this._data.filter(w => !w.disabled).forEach(i => (i.checked = false));
    item.checked = checked;
    this.changeEmit('radio', item);
    // @deprecated as of v3
    this.radioChange.emit(item);
    return this;
  }

  //#endregion

  //#region buttons

  _btnClick(e: Event, record: any, btn: STColumnButton) {
    if (e) e.stopPropagation();
    if (btn.type === 'modal' || btn.type === 'static') {
      const obj = {};
      const { modal } = btn;
      obj[modal.paramsName] = record;
      const options: ModalHelperOptions = Object.assign({}, modal);
      (this.modalHelper[
        btn.type === 'modal' ? 'create' : 'createStatic'
      ] as any)(
        modal.component,
        Object.assign(obj, modal.params && modal.params(record)),
        options,
      )
        .pipe(filter(w => typeof w !== 'undefined'))
        .subscribe(res => this.btnCallback(record, btn, res));
      return;
    } else if (btn.type === 'drawer') {
      const obj = {};
      const { drawer } = btn;
      obj[drawer.paramsName] = record;
      const options: DrawerHelperOptions = Object.assign({}, drawer);
      this.drawerHelper.create(
        drawer.title,
        drawer.component,
        Object.assign(obj, drawer.params && drawer.params(record)),
        Object.assign({}, drawer)
      )
        .pipe(filter(w => typeof w !== 'undefined'))
        .subscribe(res => this.btnCallback(record, btn, res));
      return;
    } else if (btn.type === 'link') {
      const clickRes = this.btnCallback(record, btn);
      if (typeof clickRes === 'string') {
        this.router.navigateByUrl(clickRes);
      }
      return;
    }
    this.btnCallback(record, btn);
  }

  private btnCallback(record: any, btn: STColumnButton, modal?: any) {
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

  _btnText(record: any, btn: STColumnButton) {
    if (btn.format) return btn.format(record, btn);
    return btn.text;
  }

  //#endregion

  //#region export

  /**
   * 导出当前页，确保已经注册 `XlsxModule`
   * @param newData 重新指定数据，例如希望导出所有数据非常有用
   * @param opt 额外参数
   */
  export(newData?: any[], opt?: STExportOptions) {
    (newData ? of(newData) : of(this._data)).subscribe((res: any[]) =>
      this.exportSrv.export(
        Object.assign({}, opt, <STExportOptions>{
          _d: res,
          _c: this._columns,
        }),
      ),
    );
  }

  //#endregion

  private updateColumns() {
    this._columns = this.columnSource.process(this.columns);
  }

  private setClass() {
    updateHostClass(this.el.nativeElement, this.renderer, {
      [`st`]: true,
      [`st__p-${this.page.placement}`]: this.page.placement,
      [`ant-table-rep__hide-header-footer`]: this.responsiveHideHeaderFooter,
    });
  }

  ngAfterViewInit() {
    this.columnSource.restoreAllRender(this._columns);
  }

  ngOnChanges(
    changes: { [P in keyof this]?: SimpleChange } & SimpleChanges,
  ): void {
    if (changes.columns) {
      this.updateColumns();
    }
    if (changes.data && changes.data.currentValue) {
      this._load();
    }
    this.setClass();
  }

  ngOnDestroy(): void {
    if (this.i18n$) this.i18n$.unsubscribe();
  }
}
