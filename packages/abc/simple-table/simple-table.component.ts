import {
  Component,
  Inject,
  Input,
  Output,
  OnDestroy,
  OnInit,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Renderer2,
  ElementRef,
  TemplateRef,
  SimpleChange,
  ContentChild,
  Optional,
} from '@angular/core';
import { DecimalPipe, DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ACLService } from '@delon/acl';
import { Observable, Subscription, of } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import {
  CNCurrencyPipe,
  DatePipe,
  YNPipe,
  ModalHelper,
  ALAIN_I18N_TOKEN,
  AlainI18NService,
  ModalHelperOptions,
} from '@delon/theme';
import { deepGet, deepCopy, toBoolean, toNumber } from '@delon/util';

import {
  SimpleTableColumn,
  SimpleTableChange,
  CompareFn,
  SimpleTableSelection,
  SimpleTableFilter,
  SimpleTableData,
  SimpleTableButton,
  STExportOptions,
  ResReNameType,
  ReqReNameType,
  SimpleTableMultiSort,
  SimpleTableRowClick,
  SimpleTableLoadOptions,
} from './interface';
import { AdSimpleTableConfig } from './simple-table.config';
import { SimpleTableExport } from './simple-table-export';

@Component({
  selector: 'simple-table',
  templateUrl: './simple-table.component.html',
  host: { '[class.ad-st]': 'true' },
  providers: [SimpleTableExport, CNCurrencyPipe, DatePipe, YNPipe, DecimalPipe],
  preserveWhitespaces: false,
})
export class SimpleTableComponent implements OnInit, OnChanges, OnDestroy {
  private data$: Subscription;
  private i18n$: Subscription;
  private _inited = false;
  _data: SimpleTableData[] = [];
  _url: string;
  _isAjax = false;
  _isPagination = true;
  _classMap: string[] = [];
  _allChecked = false;
  _indeterminate = false;
  _columns: SimpleTableColumn[] = [];
  _customTitles: { [key: string]: TemplateRef<any> } = {};
  _customRows: { [key: string]: TemplateRef<any> } = {};

  //#region fields

  /** 数据源 */
  @Input()
  data: string | any[] | Observable<any[]>;
  /**
   * 额外请求参数，默认自动附加 `pi`、`ps` 至URL
   * - `{ status: 'new' }` => `url?pi=1&ps=10&status=new`
   */
  @Input()
  extraParams: any;
  /** 请求方法 */
  @Input()
  reqMethod: string = 'GET';
  /** 请求体 `body` */
  @Input()
  reqBody: any;
  /** 请求体 `Header` */
  @Input()
  reqHeaders: any;
  /**
   * 重命名请求参数 `pi`、`ps`
   * - `{ pi: 'Page' }` => `pi` 会被替换成 Page
   */
  @Input()
  set reqReName(value: ReqReNameType) {
    this._reqReName = Object.assign(this._reqReName, value);
  }
  get reqReName() {
    return this._reqReName;
  }
  private _reqReName: ReqReNameType = { pi: 'pi', ps: 'ps' };
  /** 请求异常时回调 */
  @Output()
  readonly reqError: EventEmitter<any> = new EventEmitter<any>();
  /**
   * 重命名返回参数 `total`、`list`
   * - `{ total: 'Total' }` => Total 会被当作 `total`
   */
  @Input()
  set resReName(cur: ResReNameType) {
    let ret: ResReNameType = {};
    if (cur) {
      if (cur.list)
        ret.list = Array.isArray(cur.list) ? cur.list : cur.list.split('.');
      else ret.list = ['list'];

      if (cur.total)
        ret.total = Array.isArray(cur.total) ? cur.total : cur.total.split('.');
      else ret.total = ['total'];
    } else {
      ret = { total: ['total'], list: ['list'] };
    }
    this._resReName = ret;
  }
  get resReName() {
    return this._resReName;
  }
  private _resReName: ResReNameType = { total: ['total'], list: ['list'] };
  /** 列描述  */
  @Input()
  columns: SimpleTableColumn[] = [];
  /** 每页数量，当设置为 `0` 表示不分页，默认：`10` */
  @Input()
  get ps() {
    return this._ps;
  }
  set ps(value: any) {
    this._ps = toNumber(value);
  }
  private _ps = 10;
  /** 当前页码 */
  @Input()
  get pi() {
    return this._pi;
  }
  set pi(value: any) {
    this._pi = toNumber(value);
  }
  private _pi = 1;
  /** 数据总量 */
  @Input()
  get total() {
    return this._total;
  }
  set total(value: any) {
    this._total = toNumber(value);
  }
  private _total = 0;
  /** 是否显示分页器 */
  @Input()
  get showPagination() {
    return this._showPagination;
  }
  set showPagination(value: any) {
    this._showPagination = toBoolean(value, true);
  }
  private _showPagination: boolean;
  /** 是否显示Loading */
  @Input()
  get loading() {
    return this._loading;
  }
  set loading(value: any) {
    this._loading = toBoolean(value);
  }
  private _loading = false;
  /** 延迟显示加载效果的时间（防止闪烁） */
  @Input()
  get loadingDelay() {
    return this._loadingDelay;
  }
  set loadingDelay(value: any) {
    this._loadingDelay = toNumber(value);
  }
  private _loadingDelay = 0;
  /** 是否显示边框 */
  @Input()
  get bordered() {
    return this._bordered;
  }
  set bordered(value: any) {
    this._bordered = toBoolean(value);
  }
  private _bordered = false;
  /** table大小 */
  @Input()
  size: 'small' | 'middle' | 'default' = 'default';
  /** 纵向支持滚动，也可用于指定滚动区域的高度：`{ y: '300px', x: '300px' }` */
  @Input()
  scroll: { y?: string; x?: string };
  /** 是否显示pagination中改变页数 */
  @Input()
  get showSizeChanger() {
    return this._showSizeChanger;
  }
  set showSizeChanger(value: any) {
    this._showSizeChanger = toBoolean(value);
  }
  private _showSizeChanger = false;
  /** pagination中每页显示条目数下拉框值 */
  @Input()
  pageSizeOptions: number[];
  /** 是否显示pagination中快速跳转 */
  @Input()
  get showQuickJumper() {
    return this._showQuickJumper;
  }
  set showQuickJumper(value: any) {
    this._showQuickJumper = toBoolean(value);
  }
  private _showQuickJumper = false;
  /** 是否显示总数据量 */
  private _totalTpl = ``;
  @Input()
  set showTotal(value: any) {
    if (typeof value === 'string' && value.length) {
      this._totalTpl = value;
    } else if (toBoolean(value)) {
      this._totalTpl = `共 {{total}} 条`;
    } else {
      this._totalTpl = '';
    }
  }
  renderTotal(total: string, range: string[]) {
    return this._totalTpl
      ? this._totalTpl
          .replace('{{total}}', total)
          .replace('{{range[0]}}', range[0])
          .replace('{{range[1]}}', range[1])
      : '';
  }
  /**
   * 前端分页，当 `data` 为`any[]` 或 `Observable<any[]>` 有效，默认：`true`
   * - `true` 由 `simple-table` 根据 `data` 长度受控分页，包括：排序、过滤等
   * - `false` 由用户通过 `total` 和 `data` 参数受控分页，并维护 `(change)` 当分页变更时重新加载数据
   */
  @Input()
  get frontPagination() {
    return this._frontPagination;
  }
  set frontPagination(value: any) {
    this._frontPagination = toBoolean(value);
  }
  private _frontPagination: boolean;
  /** 数据变更后是否保留在数据变更前的页码 */
  @Input()
  get isPageIndexReset() {
    return this._isPageIndexReset;
  }
  set isPageIndexReset(value: any) {
    this._isPageIndexReset = toBoolean(value);
  }
  private _isPageIndexReset = true;
  /** 分页方向 */
  @Input()
  pagePlacement?: 'left' | 'center' | 'right' = 'right';
  /** 切换分页时返回顶部 */
  @Input()
  get toTopInChange() {
    return this._toTopInChange;
  }
  set toTopInChange(value: any) {
    this._toTopInChange = toBoolean(value);
  }
  private _toTopInChange = true;
  /** 返回顶部偏移值 */
  @Input()
  get toTopOffset() {
    return this._toTopOffset;
  }
  set toTopOffset(value: any) {
    this._toTopOffset = toNumber(value);
  }
  private _toTopOffset = 100;
  /** 重命名排序值，`columns` 的重命名高于属性 */
  @Input()
  sortReName: { ascend?: string; descend?: string };
  /** 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用 */
  @Input()
  get multiSort() {
    return this._multiSort;
  }
  set multiSort(value: any) {
    if (typeof value === 'object') {
      this._multiSort = Object.assign(
        <SimpleTableMultiSort>{
          key: 'sort',
          separator: '-',
          name_separator: '.',
        },
        value,
      );
    } else {
      this._multiSort = toBoolean(value);
    }
  }
  private _multiSort: boolean | SimpleTableMultiSort;
  /** 数据处理前回调 */
  @Input()
  preDataChange: (data: SimpleTableData[]) => SimpleTableData[];
  /** `header` 标题 */
  @ContentChild('header')
  header: TemplateRef<void>;
  /** 额外 `body` 内容 */
  @ContentChild('body')
  body: TemplateRef<void>;
  /** `footer` 底部 */
  @ContentChild('footer')
  footer: TemplateRef<void>;
  /** `expand` 可展开，当数据源中包括 `expand` 表示展开状态 */
  @ContentChild('expand')
  expand: TemplateRef<{ $implicit: any; column: SimpleTableColumn }>;
  @Input()
  noResult: string | TemplateRef<void>;
  @Input()
  widthConfig: string[];
  /** 页码、每页数量变化时回调 */
  @Output()
  readonly change: EventEmitter<SimpleTableChange> = new EventEmitter<
    SimpleTableChange
  >();
  /** checkbox变化时回调，参数为当前所选清单 */
  @Output()
  readonly checkboxChange: EventEmitter<SimpleTableData[]> = new EventEmitter<
    SimpleTableData[]
  >();
  /** radio变化时回调，参数为当前所选 */
  @Output()
  readonly radioChange: EventEmitter<SimpleTableData> = new EventEmitter<
    SimpleTableData
  >();
  /** 排序回调 */
  @Output()
  readonly sortChange: EventEmitter<any> = new EventEmitter<any>();
  /** Filter回调 */
  @Output()
  readonly filterChange: EventEmitter<SimpleTableColumn> = new EventEmitter<
    SimpleTableColumn
  >();
  /** 行单击回调 */
  @Output()
  readonly rowClick: EventEmitter<SimpleTableRowClick> = new EventEmitter<
    SimpleTableRowClick
  >();
  /** 行双击回调 */
  @Output()
  readonly rowDblClick: EventEmitter<SimpleTableRowClick> = new EventEmitter<
    SimpleTableRowClick
  >();
  /** 行单击多少时长之类为双击（单位：毫秒），默认：`200` */
  @Input()
  rowClickTime = 200;
  /** 后端分页是否采用`1`基索引，只在`data`类型为`string`时有效 */
  @Input()
  get zeroIndexedOnPage() {
    return this._zeroIndexedOnPage;
  }
  set zeroIndexedOnPage(value: any) {
    this._zeroIndexedOnPage = toBoolean(value);
  }
  private _zeroIndexedOnPage = false;

  //#endregion

  constructor(
    private defConfig: AdSimpleTableConfig,
    private http: HttpClient,
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer2,
    private exportSrv: SimpleTableExport,
    @Optional() private acl: ACLService,
    @Optional()
    @Inject(ALAIN_I18N_TOKEN)
    private i18nSrv: AlainI18NService,
    private modal: ModalHelper,
    private currenty: CNCurrencyPipe,
    private date: DatePipe,
    private yn: YNPipe,
    private number: DecimalPipe,
    @Inject(DOCUMENT) private doc: any,
  ) {
    Object.assign(this, deepCopy(defConfig));
    if (i18nSrv) {
      this.i18n$ = i18nSrv.change.subscribe(() => this.updateColumns());
    }
  }

  //#region data

  /**
   * 根据页码重新加载数据
   *
   * @param pi 指定当前页码，默认：`1`
   * @param extraParams 重新指定 `extraParams` 值
   */
  load(pi = 1, extraParams?: any, options?: SimpleTableLoadOptions) {
    if (pi !== -1) this.pi = pi;
    if (typeof extraParams !== 'undefined') {
      this.extraParams =
        options && options.merge
          ? Object.assign(this.extraParams, extraParams)
          : extraParams;
    }
    this._change('pi');
  }

  /**
   * 重新刷新当前页
   * @param extraParams 重新指定 `extraParams` 值
   */
  reload(extraParams?: any, options?: SimpleTableLoadOptions) {
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
  reset(extraParams?: any, options?: SimpleTableLoadOptions) {
    this.clearCheck();
    this.clearRadio();
    this.clearFilter();
    this.clearSort();
    this.load(1, extraParams, options);
  }

  private getAjaxData(url?: string): Observable<any> {
    const params: any = Object.assign(
      {
        [this.reqReName.pi]: this._zeroIndexedOnPage ? this.pi - 1 : this.pi,
        [this.reqReName.ps]: this.ps,
      },
      this.extraParams,
      this.getReqSortMap(),
      this.getReqFilterMap(),
    );
    return this.http
      .request(this.reqMethod || 'GET', url || this._url, {
        params,
        body: this.reqBody,
        headers: this.reqHeaders,
      })
      .pipe(
        map((res: any) => {
          // list
          let ret = deepGet(res, this.resReName.list as string[], []);
          if (ret == null || !Array.isArray(ret)) {
            ret = [];
          }
          // total
          const retTotal =
            this.resReName.total &&
            deepGet(res, this.resReName.total as string[], null);
          this.total = retTotal == null ? this.total || 0 : +retTotal;
          return <any[]>ret;
        }),
      );
  }

  private _genAjax(forceRefresh: boolean = false) {
    if (!this._isAjax) return;
    this.loading = true;
    if (forceRefresh === true) this.pi = 1;
    this.getAjaxData().subscribe(
      (res: any) => this.checkPaged().subscribeData(res),
      err => {
        this.loading = false;
        this.reqError.emit(err);
      },
    );
  }

  _genData(forceRefresh: boolean = false) {
    if (this._isAjax) return;
    let data = (<any[]>this.data).slice(0);
    // sort
    const sorterFn = this.getSorterFn();
    if (sorterFn) {
      data = data.sort(sorterFn);
    }

    // filter
    this._columns.filter(w => w.filters && w.filters.length).forEach(c => {
      const values = c.filters.filter(w => w.checked);
      if (values.length === 0) return;
      const onFilter = c.filter;
      data = data.filter(record => values.some(v => onFilter(v, record)));
    });

    if (forceRefresh) {
      if (this.isPageIndexReset) {
        this.pi = 1;
      } else {
        const maxPageIndex = Math.ceil(data.length / this.ps);
        this.pi = !this.pi
          ? 1
          : this.pi > maxPageIndex
            ? maxPageIndex
            : this.pi;
      }
    }
    this.total = this.frontPagination
      ? data.length
      : this.total <= 0
        ? data.length
        : this.total;
    this.checkPaged().subscribeData(
      this._isPagination && this.frontPagination
        ? data.slice((this.pi - 1) * this.ps, this.pi * this.ps)
        : data,
    );
  }

  private _toTop() {
    if (!this.toTopInChange) return;
    if (this.scroll) {
      (this.el.nativeElement as HTMLElement)
        .querySelector('.ant-table-body')
        .scrollTo(0, 0);
      return;
    }
    this.el.nativeElement.scrollIntoView();
    // fix header height
    this.doc.documentElement.scrollTop -= this.toTopOffset;
  }

  private checkPaged(): this {
    this._isPagination =
      typeof this.showPagination === 'undefined'
        ? this.ps > 0 && this.total > this.ps
        : this.showPagination;

    return this;
  }

  private processData() {
    if (!this.data) {
      this._isAjax = false;
      this.data = [];
      return;
    }

    this._isAjax = false;
    if (typeof this.data === 'string') {
      this._url = this.data as string;
      this._isAjax = true;
      this._genAjax(true);
    } else if (Array.isArray(this.data)) {
      this._genData(this.frontPagination);
    } else {
      if (this.data$) {
        this.data$.unsubscribe();
      }
      this.data$ = this.data
        .pipe(tap(() => (this.loading = true)))
        .subscribe(res => {
          this.data = res;
          this._genData(this.frontPagination);
        });
    }
  }

  private subscribeData(res: any[]) {
    if (this.preDataChange) res = this.preDataChange(res);
    this.loading = false;
    for (const i of res) {
      i._values = this._columns.map(c => this._get(i, c));
    }
    this._data = res;
    this._refCheck();
  }

  _change(type: 'pi' | 'ps') {
    if (!this._inited) return;
    this._genAjax();
    if (this.frontPagination) this._genData();
    this._toTop();
    this.change.emit({
      type: type,
      pi: this.pi,
      ps: this.ps,
      total: this.total,
    });
  }

  _get(item: any, col: SimpleTableColumn) {
    if (col.format) return col.format(item, col);

    const value = deepGet(item, col.index as string[], col.default);

    let ret = value;
    switch (col.type) {
      case 'img':
        ret = value ? `<img src="${value}" class="img">` : '';
        break;
      case 'number':
        ret = this.number.transform(value, col.numberDigits);
        break;
      case 'currency':
        ret = this.currenty.transform(value);
        break;
      case 'date':
        ret = this.date.transform(value, col.dateFormat);
        break;
      case 'yn':
        ret = this.yn.transform(value === col.ynTruth, col.ynYes, col.ynNo);
        break;
    }
    return ret;
  }

  _click(e: Event, item: any, col: SimpleTableColumn) {
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
    ++this.rowClickCount;
    if (this.rowClickCount !== 1) return;
    setTimeout(() => {
      if (this.rowClickCount === 1) {
        this.rowClick.emit({ e, item, index });
      } else {
        this.rowDblClick.emit({ e, item, index });
      }
      this.rowClickCount = 0;
    }, this.rowClickTime);
  }

  //#endregion

  //#region sort

  _sortMap: { [key: number]: any } = {};
  _sortColumn: SimpleTableColumn = null;
  _sortOrder: string;
  _sortIndex: number;

  private getReqSortMap(): { [key: string]: string } {
    let ret: { [key: string]: string } = {};
    const ms = this.multiSort;
    if (!ms && !this._sortOrder) return ret;

    if (ms) {
      Object.keys(this._sortMap)
        .filter(key => this._sortMap[key].enabled && this._sortMap[key].v)
        .forEach(key => {
          const item = this._sortMap[key];
          ret[item.key] =
            (item.column.sortReName || this.sortReName || {})[item.v] || item.v;
        });
      // 合并处理
      if (typeof ms === 'object') {
        ret = {
          [ms.key]: Object.keys(ret)
            .map(key => key + ms.name_separator + ret[key])
            .join(ms.separator),
        };
      }
    } else {
      const mapData = this._sortMap[this._sortIndex];
      ret[mapData.key] =
        (this._sortColumn.sortReName || this.sortReName || {})[mapData.v] ||
        mapData.v;
    }
    return ret;
  }

  private getSorterFn() {
    if (!this._sortOrder || !this._sortColumn) {
      return;
    }

    return (a: any, b: any) => {
      const result = (this._sortColumn.sorter as CompareFn)(a, b);
      if (result !== 0) {
        return this._sortOrder === 'descend' ? -result : result;
      }
      return 0;
    };
  }

  sort(index: number, value: any) {
    this._sortColumn = this._columns[index];
    this._sortOrder = value;
    this._sortIndex = index;
    if (this.multiSort) {
      this._sortMap[index].v = value;
    } else {
      Object.keys(this._sortMap).forEach(
        key => (this._sortMap[key].v = +key === index ? value : null),
      );
    }
    this._genAjax(true);
    this._genData(true);
    this.sortChange.emit({
      value,
      map: this.getReqSortMap(),
      column: this._sortColumn,
    });
  }

  clearSort() {
    Object.keys(this._sortMap).forEach(key => (this._sortMap[key].v = null));
    this._sortOrder = null;
  }

  //#endregion

  //#region filter

  private getReqFilterMap(): { [key: string]: string } {
    let ret = {};
    this._columns.filter(w => w.filtered === true).forEach(col => {
      const values = col.filters.filter(f => f.checked === true);
      let obj: Object = {};
      if (col.filterReName) {
        obj = col.filterReName(col.filters, col);
      } else {
        obj[col.filterKey || col.indexKey] = values.map(i => i.value).join(',');
      }
      ret = Object.assign(ret, obj);
    });
    return ret;
  }

  private handleFilter(col: SimpleTableColumn) {
    col.filtered = col.filters.findIndex(w => w.checked) !== -1;
    this._genAjax(true);
    this._genData(true);
    this.filterChange.emit(col);
  }

  _filterConfirm(col: SimpleTableColumn) {
    this.handleFilter(col);
  }

  _filterClear(col: SimpleTableColumn) {
    col.filters.forEach(i => (i.checked = false));
    this.handleFilter(col);
  }

  _filterRadio(
    col: SimpleTableColumn,
    item: SimpleTableFilter,
    checked: boolean,
  ) {
    col.filters.forEach(i => (i.checked = false));
    item.checked = checked;
  }

  clearFilter() {
    this._columns.filter(w => w.filtered === true).forEach(col => {
      col.filtered = false;
      col.filters.forEach(f => (f.checked = false));
    });
  }

  //#endregion

  //#region checkbox

  /** 清除所有 `checkbox` */
  clearCheck(): this {
    return this._checkAll(false);
  }

  _checkAll(checked?: boolean): this {
    checked = typeof checked === 'undefined' ? this._allChecked : checked;
    this._data.filter(w => !w.disabled).forEach(i => (i.checked = checked));
    return this._refCheck()._checkNotify();
  }

  _checkSelection(i: SimpleTableData, value: boolean) {
    i.checked = value;
    return this._refCheck()._checkNotify();
  }

  _refCheck(): this {
    const validData = this._data.filter(w => !w.disabled);
    const checkedList = validData.filter(w => w.checked === true);
    this._allChecked =
      checkedList.length > 0 && checkedList.length === validData.length;
    const allUnChecked = validData.every(value => !value.checked);
    this._indeterminate = !this._allChecked && !allUnChecked;
    return this;
  }

  _rowSelection(row: SimpleTableSelection): this {
    row.select(this._data);
    return this._refCheck()._checkNotify();
  }

  _checkNotify(): this {
    this.checkboxChange.emit(
      this._data.filter(w => !w.disabled && w.checked === true),
    );
    return this;
  }

  //#endregion

  //#region radio

  /** 清除所有 `radio` */
  clearRadio(): this {
    this._data.filter(w => w.checked).forEach(item => (item.checked = false));
    this.radioChange.emit(null);
    return this;
  }

  _refRadio(checked: boolean, item: SimpleTableData): this {
    // if (item.disabled === true) return;
    this._data.filter(w => !w.disabled).forEach(i => (i.checked = false));
    item.checked = checked;
    this.radioChange.emit(item);
    return this;
  }

  //#endregion

  //#region buttons

  private btnCoerce(list: SimpleTableButton[]): SimpleTableButton[] {
    if (!list) return [];
    const ret: SimpleTableButton[] = [];
    for (const item of list) {
      if (this.acl && item.acl && !this.acl.can(item.acl)) continue;

      if (item.type === 'del' && typeof item.pop === 'undefined')
        item.pop = true;

      if (item.pop === true) {
        item._type = 2;
        if (typeof item.popTitle === 'undefined')
          item.popTitle = `确认删除吗？`;
      }
      if (item.children && item.children.length > 0) {
        item._type = 3;
        item.children = this.btnCoerce(item.children);
      }
      if (!item._type) item._type = 1;

      // i18n
      if (item.i18n && this.i18nSrv) item.text = this.i18nSrv.fanyi(item.i18n);

      ret.push(item);
    }
    this.btnCoerceIf(ret);
    return ret;
  }

  private btnCoerceIf(list: SimpleTableButton[]) {
    for (const item of list) {
      if (!item.iif) item.iif = () => true;
      if (!item.children) {
        item.children = [];
      } else {
        this.btnCoerceIf(item.children);
      }
    }
  }

  _btnClick(e: Event, record: any, btn: SimpleTableButton) {
    if (e) e.stopPropagation();
    if (btn.type === 'modal' || btn.type === 'static') {
      const obj = {};
      obj[btn.paramName || this.defConfig.modalParamsName || 'record'] = record;
      const options: ModalHelperOptions = Object.assign({}, btn.modal);
      // TODO: deprecated
      if (btn.size) options.size = btn.size;
      if (btn.modalOptions) options.modalOptions = btn.modalOptions;

      (this.modal[btn.type === 'modal' ? 'create' : 'createStatic'] as any)(
        btn.component,
        Object.assign(obj, btn.params && btn.params(record)),
        options,
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

  private btnCallback(record: any, btn: SimpleTableButton, modal?: any) {
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

  _btnText(record: any, btn: SimpleTableButton) {
    if (btn.format) return btn.format(record, btn);
    return btn.text;
  }

  //#endregion

  //#region fixed

  private fixedCoerce(list: SimpleTableColumn[]) {
    const countReduce = (a: number, b: SimpleTableColumn) =>
      a + +b.width.toString().replace('px', '');
    // left width
    list
      .filter(w => w.fixed && w.fixed === 'left' && w.width)
      .forEach(
        (item, idx) =>
          (item._left = list.slice(0, idx).reduce(countReduce, 0) + 'px'),
      );
    // right width
    list
      .filter(w => w.fixed && w.fixed === 'right' && w.width)
      .reverse()
      .forEach(
        (item, idx) =>
          (item._right =
            (idx > 0 ? list.slice(-idx).reduce(countReduce, 0) : 0) + 'px'),
      );
  }

  //#endregion

  //#region export

  /**
   * 导出Excel，确保已经注册 `AdXlsxModule`
   * @param urlOrData 重新指定数据，例如希望导出所有数据非常有用
   * @param opt 额外参数
   */
  export(urlOrData?: string | any[], opt?: STExportOptions) {
    (urlOrData
      ? typeof urlOrData === 'string'
        ? this.getAjaxData(urlOrData)
        : of(urlOrData)
      : this._isAjax
        ? this.getAjaxData()
        : of(this.data)
    ).subscribe((res: any[]) =>
      this.exportSrv.export(
        Object.assign({}, opt, <STExportOptions>{
          _d: res,
          _c: this._columns,
        }),
      ),
    );
  }

  //#endregion

  ngOnInit(): void {
    this._inited = true;
    this.updateColumns();
    this.processData();
  }

  private setClass() {
    this._classMap.forEach(cls =>
      this.renderer.removeClass(this.el.nativeElement, cls),
    );

    this._classMap = [];
    if (this.pagePlacement)
      this._classMap.push('ad-st__p' + this.pagePlacement);

    this._classMap.forEach(cls =>
      this.renderer.addClass(this.el.nativeElement, cls),
    );
  }

  private updateColumns() {
    this._columns = [];
    if (!this.columns || this.columns.length === 0)
      throw new Error(`the columns property muse be define!`);
    let checkboxCount = 0;
    let radioCount = 0;
    const sortMap: Object = {};
    let idx = 0;
    const newColumns: SimpleTableColumn[] = [];
    const copyColumens = deepCopy(this.columns) as SimpleTableColumn[];
    for (const item of copyColumens) {
      if (this.acl && item.acl && !this.acl.can(item.acl)) continue;
      if (item.index) {
        if (!Array.isArray(item.index)) item.index = item.index.split('.');

        item.indexKey = item.index.join('.');
      }
      // rowSelection
      if (!item.selections) item.selections = [];
      if (item.type === 'checkbox') {
        ++checkboxCount;
        if (!item.width) {
          item.width = `${item.selections.length > 0 ? 60 : 50}px`;
        }
      }
      if (item.type === 'radio') {
        ++radioCount;
        item.selections = [];
        if (!item.width) item.width = '50px';
      }
      if (item.type === 'yn' && typeof item.ynTruth === 'undefined') {
        item.ynTruth = true;
      }
      if (
        (item.type === 'link' && typeof item.click !== 'function') ||
        (item.type === 'badge' && typeof item.badge === 'undefined') ||
        (item.type === 'tag' && typeof item.tag === 'undefined')
      ) {
        (item as any).type = '';
      }
      if (!item.className) {
        item.className = {
          // 'checkbox': 'text-center',
          // 'radio': 'text-center',
          number: 'text-right',
          currency: 'text-right',
          date: 'text-center',
        }[item.type];
      }

      // sorter
      if (item.sorter && typeof item.sorter === 'function') {
        sortMap[idx] = {
          enabled: true,
          v: item.sort,
          key: item.sortKey || item.indexKey,
          column: item,
        };
        if (item.sort && !this._sortColumn) {
          this._sortColumn = item;
          this._sortOrder = item.sort;
          this._sortIndex = idx;
        }
      } else {
        sortMap[idx] = {
          enabled: false,
        };
      }
      // filter
      if (!item.filter || !item.filters) item.filters = [];
      if (typeof item.filterMultiple === 'undefined')
        item.filterMultiple = true;
      if (!item.filterConfirmText) item.filterConfirmText = `确认`;
      if (!item.filterClearText) item.filterClearText = `重置`;
      if (!item.filterIcon) item.filterIcon = `anticon anticon-filter`;
      item.filtered = item.filters.findIndex(w => w.checked) !== -1;

      if (this.acl) {
        item.selections = item.selections.filter(w => this.acl.can(w.acl));
        item.filters = item.filters.filter(w => this.acl.can(w.acl));
      }

      // buttons
      item.buttons = this.btnCoerce(item.buttons);
      // i18n
      if (item.i18n && this.i18nSrv) item.title = this.i18nSrv.fanyi(item.i18n);
      // custom row
      if (item.render) {
        item.__renderTitle = this._customTitles[item.render];
        item.__render = this._customRows[item.render];
      }

      ++idx;
      newColumns.push(item);
    }
    if (checkboxCount > 1) throw new Error(`just only one column checkbox`);
    if (radioCount > 1) throw new Error(`just only one column radio`);
    this.fixedCoerce(newColumns);
    this._columns = newColumns;
    this._sortMap = sortMap;
  }

  ngOnChanges(
    changes: { [P in keyof this]?: SimpleChange } & SimpleChanges,
  ): void {
    if (changes.columns && this._inited) this.updateColumns();
    if (changes.data && this._inited) this.processData();

    this.setClass();
  }

  ngOnDestroy(): void {
    [this.data$, this.i18n$].filter(w => w).forEach(i => {
      i.unsubscribe();
      i = null;
    });
  }
}
