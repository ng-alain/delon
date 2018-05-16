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
  QueryList,
  ViewChildren,
  ContentChildren,
  ContentChild,
  Optional,
} from '@angular/core';
import { DecimalPipe, DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ACLService } from '@delon/acl';
import { Observable, Subscription, of } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from '@angular/cdk/coercion';
import {
  CNCurrencyPipe,
  DatePipe,
  YNPipe,
  ModalHelper,
  ALAIN_I18N_TOKEN,
  AlainI18NService,
} from '@delon/theme';
import { deepGet, deepCopy } from '@delon/util';

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
} from './interface';
import { AdSimpleTableConfig } from './simple-table.config';
import { SimpleTableRowDirective } from './simple-table-row.directive';
import { SimpleTableExport } from './simple-table-export';

@Component({
  selector: 'simple-table',
  templateUrl: './simple-table.component.html',
  host: { '[class.ad-st]': 'true' },
  providers: [SimpleTableExport, CNCurrencyPipe, DatePipe, YNPipe, DecimalPipe],
  preserveWhitespaces: false,
})
export class SimpleTableComponent
  implements OnInit, OnChanges, OnDestroy {
  private data$: Subscription;
  private _inited = false;
  _data: SimpleTableData[] = [];
  _url: string;
  _isAjax = false;
  _isPagination = true;
  _classMap: string[] = [];
  _allChecked = false;
  _indeterminate = false;
  _columns: SimpleTableColumn[] = [];

  // region: fields

  /** 数据源 */
  @Input() data: string | any[] | Observable<any[]>;
  /**
   * 额外请求参数，默认自动附加 `pi`、`ps` 至URL
   * - `{ status: 'new' }` => `url?pi=1&ps=10&status=new`
   */
  @Input() extraParams: any;
  /** 请求方法 */
  @Input() reqMehtod: string = 'GET';
  /** 请求体 `body` */
  @Input() reqBody: any;
  /** 请求体 `Header` */
  @Input() reqHeaders: any;
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
  @Output() reqError: EventEmitter<any> = new EventEmitter<any>();
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
  @Input() columns: SimpleTableColumn[] = [];
  /** 每页数量，当设置为 `0` 表示不分页，默认：`10` */
  @Input()
  get ps() {
    return this._ps;
  }
  set ps(value: any) {
    this._ps = coerceNumberProperty(value);
  }
  private _ps = 10;
  /** 当前页码 */
  @Input()
  get pi() {
    return this._pi;
  }
  set pi(value: any) {
    this._pi = coerceNumberProperty(value);
  }
  private _pi = 1;
  /** 数据总量 */
  @Input()
  get total() {
    return this._total;
  }
  set total(value: any) {
    this._total = coerceNumberProperty(value);
  }
  private _total = 0;
  /** 是否显示分页器 */
  @Input()
  get showPagination() {
    return this._showPagination;
  }
  set showPagination(value: any) {
    this._showPagination = coerceBooleanProperty(value);
  }
  private _showPagination: boolean;
  /** 是否显示Loading */
  @Input()
  get loading() {
    return this._loading;
  }
  set loading(value: any) {
    this._loading = coerceBooleanProperty(value);
  }
  private _loading = false;
  /** 延迟显示加载效果的时间（防止闪烁） */
  @Input()
  get loadingDelay() {
    return this._loadingDelay;
  }
  set loadingDelay(value: any) {
    this._loadingDelay = coerceNumberProperty(value);
  }
  private _loadingDelay = 0;
  /** 是否显示边框 */
  @Input()
  get bordered() {
    return this._bordered;
  }
  set bordered(value: any) {
    this._bordered = coerceBooleanProperty(value);
  }
  private _bordered = false;
  /** table大小 */
  @Input() size: 'small' | 'middle' | 'default' = 'default';
  /** 纵向支持滚动，也可用于指定滚动区域的高度：`{ y: '300px', x: '300px' }` */
  @Input() scroll: { y: string; x: string };
  /** 是否显示pagination中改变页数 */
  @Input()
  get showSizeChanger() {
    return this._showSizeChanger;
  }
  set showSizeChanger(value: any) {
    this._showSizeChanger = coerceBooleanProperty(value);
  }
  private _showSizeChanger = false;
  /** pagination中每页显示条目数下拉框值 */
  @Input() pageSizeOptions: number[];
  /** 是否显示pagination中快速跳转 */
  @Input()
  get showQuickJumper() {
    return this._showQuickJumper;
  }
  set showQuickJumper(value: any) {
    this._showQuickJumper = coerceBooleanProperty(value);
  }
  private _showQuickJumper = false;
  /** 是否显示总数据量 */
  private _totalTpl = ``;
  @Input()
  set showTotal(value: any) {
    if (typeof value === 'string' && value.length) {
      this._totalTpl = value;
    } else if (coerceBooleanProperty(value)) {
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
  /** 数据变更后是否保留在数据变更前的页码 */
  @Input()
  get isPageIndexReset() {
    return this._isPageIndexReset;
  }
  set isPageIndexReset(value: any) {
    this._isPageIndexReset = coerceBooleanProperty(value);
  }
  private _isPageIndexReset = true;
  /** 分页方向 */
  @Input() pagePlacement?: 'left' | 'center' | 'right' = 'right';
  /** 切换分页时返回顶部 */
  @Input()
  get toTopInChange() {
    return this._toTopInChange;
  }
  set toTopInChange(value: any) {
    this._toTopInChange = coerceBooleanProperty(value);
  }
  private _toTopInChange = true;
  /** 返回顶部偏移值 */
  @Input()
  get toTopOffset() {
    return this._toTopOffset;
  }
  set toTopOffset(value: any) {
    this._toTopOffset = coerceNumberProperty(value);
  }
  private _toTopOffset = 100;
  /** 重命名排序值，`columns` 的重命名高于属性 */
  @Input() sortReName: { ascend?: string; descend?: string };
  /** 是否多排序，建议后端支持时使用，默认：`false` */
  @Input()
  get multiSort() {
    return this._multiSort;
  }
  set multiSort(value: any) {
    this._multiSort = coerceBooleanProperty(value);
  }
  private _multiSort = false;
  /** 数据处理前回调 */
  @Input() preDataChange: (data: SimpleTableData[]) => SimpleTableData[];
  /** `header` 标题 */
  @ContentChild('header') header: TemplateRef<void>;
  /** 额外 `body` 内容 */
  @ContentChild('body') body: TemplateRef<void>;
  /** `footer` 底部 */
  @ContentChild('footer') footer: TemplateRef<void>;
  /** `expand` 可展开，当数据源中包括 `expand` 表示展开状态 */
  @ContentChild('expand')
  expand: TemplateRef<{ $implicit: any; column: SimpleTableColumn }>;
  @Input() noResult: string | TemplateRef<void>;
  @Input() widthConfig: string[];
  /** 页码、每页数量变化时回调 */
  @Output()
  change: EventEmitter<SimpleTableChange> = new EventEmitter<
    SimpleTableChange
    >();
  /** checkbox变化时回调，参数为当前所选清单 */
  @Output()
  checkboxChange: EventEmitter<SimpleTableData[]> = new EventEmitter<
    SimpleTableData[]
    >();
  /** radio变化时回调，参数为当前所选 */
  @Output()
  radioChange: EventEmitter<SimpleTableData> = new EventEmitter<
    SimpleTableData
    >();
  /** 排序回调 */
  @Output() sortChange: EventEmitter<any> = new EventEmitter<any>();
  /** Filter回调 */
  @Output()
  filterChange: EventEmitter<SimpleTableColumn> = new EventEmitter<
    SimpleTableColumn
    >();

  // endregion

  constructor(
    private defConfig: AdSimpleTableConfig,
    private http: HttpClient,
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
  }

  // region: data

  private getAjaxData(url?: string): Observable<any> {
    const params: any = Object.assign(
      {
        [this.reqReName.pi]: this.pi,
        [this.reqReName.ps]: this.ps,
      },
      this.extraParams,
      this.getReqSortMap(),
      this.getReqFilterMap(),
    );
    return this.http
      .request(this.reqMehtod || 'GET', url || this._url, {
        params,
        body: this.reqBody,
        headers: this.reqHeaders,
      })
      .pipe(
        map((res: any) => {
          // list
          const ret = deepGet(res, this.resReName.list as string[], []);
          if (ret == null || !Array.isArray(ret)) return [];
          // total
          const retTotal =
            this.resReName.total &&
            deepGet(res, this.resReName.total as string[], null);
          this.total = retTotal == null ? this.total || 0 : +retTotal;
          return <any[]>ret;
        }),
    );
  }

  /**
   * 根据页码重新加载数据
   *
   * @param pi 指定当前页码，默认：`1`
   * @param extraParams 重新指定 `extraParams` 值
   */
  load(pi = 1, extraParams?: any) {
    if (pi !== -1) this.pi = pi;
    this.extraParams = extraParams || null;
    this._change('pi');
  }

  /**
   * 重新刷新当前页
   * @param extraParams 重新指定 `extraParams` 值
   */
  reload(extraParams?: any) {
    this.load(-1, extraParams);
  }

  /**
   * 重置且重新设置 `pi` 为 `1`
   *
   * @param extraParams 重新指定 `extraParams` 值
   */
  reset(extraParams?: any) {
    this.load(1, extraParams);
  }

  _change(type: 'pi' | 'ps') {
    if (!this._inited) return;
    this._genAjax();
    this._genData();
    this._toTop();
    this.change.emit({
      type: type,
      pi: this.pi,
      ps: this.ps,
      total: this.total,
    });
  }

  _genAjax(forceRefresh: boolean = false) {
    if (!this._isAjax) return;
    this.loading = true;
    if (forceRefresh === true) this.pi = 1;
    this.getAjaxData().subscribe(
      (res: any) => this._subscribeData(res),
      err => {
        this.loading = false;
        this.reqError.emit(err);
      },
    );
  }

  _genData(forceRefresh: boolean = false) {
    if (this._isAjax) return;
    let data = <any[]>this.data || [];
    // sort
    data = data.slice(0);
    const sorterFn = this.getSorterFn();
    if (sorterFn) {
      data = this.recursiveSort(data, sorterFn);
    }

    // filter
    this._columns.filter(w => w.filters && w.filters.length).forEach(c => {
      const values = c.filters.filter(w => w.checked);
      if (values.length === 0) return;
      const onFilter = c.filter;
      data = data.filter(record => {
        return values.some(v => onFilter(v, record));
      });
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
    this.total = data.length;
    this._isPagination =
      typeof this.showPagination === 'undefined'
        ? this.ps > 0 && this.total > this.ps
        : this.showPagination;
    this._subscribeData(
      this._isPagination
        ? data.slice((this.pi - 1) * this.ps, this.pi * this.ps)
        : data,
    );
  }

  _toTop() {
    if (!this.toTopInChange) return;
    if (this.scroll) {
      (this.el.nativeElement as HTMLElement)
        .querySelector('.ant-table-body')
        .scrollTo(0, 0);
      return;
    }
    if (this.el.nativeElement.scrollIntoView)
      this.el.nativeElement.scrollIntoView();
    // todo: toTopOffset
    // fix header height
    this.doc.documentElement.scrollTop -= this.toTopOffset;
  }

  _get(item: any, col: SimpleTableColumn) {
    if (col.format) return col.format(item, col);

    const value = deepGet(item, col.index as string[], col.default);
    if (typeof value === 'undefined') return col.default;

    let ret = value;
    switch (col.type) {
      case 'img':
        ret = `<img src="${value}" class="img">`;
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
    return ret || col.default;
  }

  _click(e: Event, item: any, col: SimpleTableColumn) {
    e.preventDefault();
    e.stopPropagation();
    if (col.click) col.click(item, this);
    return false;
  }

  private getDataObs(urlOrData?: string | any[]): Observable<any[]> {
    return urlOrData || Array.isArray(this.data)
      ? of((urlOrData as any[]) || (this.data as any[]))
      : (this.data as Observable<any[]>);
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
      this._genData(true);
    } else {
      if (!this.data$) {
        this.data$ = <any>this.data
          .pipe(tap(() => (this.loading = true)))
          .subscribe(res => {
            this.data = res;
            this._genData(true);
          });
      }
    }
  }

  private _subscribeData(res: any[]) {
    if (this.preDataChange) res = this.preDataChange(res);
    this.loading = false;
    this._data = res;
    this._refCheck();
  }

  // endregion

  // region: sort

  _sortMap: { [key: number]: any } = {};
  _sortColumn: SimpleTableColumn = null;
  _sortOrder: string;
  _sortIndex: number;

  private getReqSortMap(): { [key: string]: string } {
    const ret: { [key: string]: string } = {};
    if (!this._sortOrder) return ret;

    if (this.multiSort) {
      Object.keys(this._sortMap).forEach(key => {
        const item = this._sortMap[key];
        if (item.v) {
          ret[item.key] =
            (item.column.sortReName || this.sortReName || {})[item.v] || item.v;
        }
      });
    } else {
      const mapData = this._sortMap[this._sortIndex];
      ret[mapData.key] =
        (this._sortColumn.sortReName || this.sortReName || {})[mapData.v] ||
        mapData.v;
    }
    return ret;
  }

  private recursiveSort(
    data: any[],
    sorterFn: (a: any, b: any) => number,
  ): any[] {
    const childrenColumnName = 'children';
    return data.sort(sorterFn).map(
      (item: any) =>
        item[childrenColumnName]
          ? {
            ...item,
            [childrenColumnName]: this.recursiveSort(
              item[childrenColumnName],
              sorterFn,
            ),
          }
          : item,
    );
  }

  private getSorterFn() {
    // _sortMap
    if (
      !this._sortOrder ||
      !this._sortColumn ||
      typeof this._sortColumn.sorter !== 'function'
    ) {
      return;
    }

    return (a: any, b: any) => {
      const result = (this._sortColumn!.sorter as CompareFn)(a, b);
      if (result !== 0) {
        return this._sortOrder === 'descend' ? -result : result;
      }
      return 0;
    };
  }

  sort(index: number, value: any) {
    if (this._sortIndex === index && this._sortOrder === value) return;
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

  // endregion

  // region: filter

  private getReqFilterMap(): { [key: string]: string } {
    let ret: { [key: string]: string } = {};
    this._columns.filter(w => w.filtered === true).forEach(col => {
      const values = col.filters.filter(f => f.checked === true);
      let obj: Object = {};
      if (col.filterReName) obj = col.filterReName(col.filters, col);
      else
        obj[col.filterKey || col.indexKey] = values.map(i => i.value).join(',');

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

  filterConfirm(col: SimpleTableColumn) {
    this.handleFilter(col);
  }

  filterClear(col: SimpleTableColumn) {
    col.filters.forEach(i => (i.checked = false));
    this.handleFilter(col);
  }

  filterRadio(
    col: SimpleTableColumn,
    item: SimpleTableFilter,
    checked: boolean,
  ) {
    col.filters.forEach(i => (i.checked = false));
    item.checked = checked;
  }

  // endregion

  // region: checkbox

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
    if (row.select) row.select(this._data);
    return this._refCheck()._checkNotify();
  }

  _checkNotify(): this {
    this.checkboxChange.emit(
      this._data.filter(w => !w.disabled && w.checked === true),
    );
    return this;
  }

  // endregion

  // region: radio

  /** 清除所有 `radio` */
  clearRadio(): this {
    this._data.filter(w => w.checked).forEach(item => (item.checked = false));
    this.radioChange.emit(null);
    return this;
  }

  _refRadio(idx: number, checked: boolean, item: SimpleTableData): this {
    if (item.disabled === true) return;
    this._data.filter(w => !w.disabled).forEach(i => (i.checked = false));
    item.checked = checked;
    this.radioChange.emit(item);
    return this;
  }

  // endregion

  // region: buttons

  btnCoerceIf(list: SimpleTableButton[]) {
    for (const item of list) {
      if (!item.if) item.if = () => true;
      if (!item.children) item.children = [];
      if (item.children.length > 0) this.btnCoerceIf(item.children);
    }
  }

  btnClick(record: any, btn: SimpleTableButton) {
    if (btn.type === 'modal' || btn.type === 'static') {
      const obj = {};
      obj[btn.paramName || this.defConfig.modalParamsName || 'record'] = record;
      (this.modal[btn.type === 'modal' ? 'open' : 'static'] as any)(
        btn.component,
        Object.assign(obj, btn.params && btn.params(record)),
        btn.size,
        btn.modalOptions,
      )
        .pipe(filter(w => typeof w !== 'undefined'))
        .subscribe(res => {
          if (btn.click) this.btnCallback(record, btn, res);
        });
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
      btn.click(record, modal, this);
    }
  }

  btnText(record: any, btn: SimpleTableButton, withDropdown?: Boolean) {
    let text: String = '';
    if (btn.format) {
      text = btn.format(record, btn);
    } else {
      text = btn.text;
    }
    if (withDropdown) {
      text += `<i class="anticon anticon-down"></i>`;
    }
    return text;
  }

  // endregion

  // region: fixed

  fixedCoerce(list: SimpleTableColumn[]) {
    list.forEach((item, idx) => {
      if (item.fixed && item.width) {
        if (item.fixed === 'left') {
          item._left = idx === 0 ? '0px' : list[idx - 1].width;
        } else if (item.fixed === 'right') {
          item._right = idx === list.length - 1 ? '0px' : list[idx + 1].width;
        }
      }
    });
  }

  // endregion

  // region: export

  /**
   * 导出Excel，确保已经注册 `AdXlsxModule`
   * @param urlOrData 重新指定数据，例如希望导出所有数据非常有用
   * @param opt 额外参数
   */
  export(urlOrData?: string | any[], opt?: STExportOptions) {
    ((!urlOrData && this._isAjax) ||
      (urlOrData && typeof urlOrData === 'string')
      ? this.getAjaxData(urlOrData as string)
      : this.getDataObs(urlOrData)
    ).subscribe((res: any[]) =>
      this.exportSrv.export(
        Object.assign({}, opt, <STExportOptions>{
          _d: res,
          _c: this._columns,
        }),
      ),
    );
  }

  // endregion

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
    const copyColumens = deepCopy(this.columns);
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
        if (!item.width)
          item.width = `${item.selections.length > 0 ? 60 : 50}px`;
      }
      if (item.type === 'radio') {
        ++radioCount;
        item.selections = [];
        if (!item.width) item.width = '50px';
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
      if (item.type === 'yn' && typeof item.ynTruth === 'undefined')
        item.ynTruth = true;

      // sorter
      if (item.sorter) {
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
        item.selections = item.selections.filter(
          w => !w.acl || this.acl.can(w.acl),
        );
        item.filters = item.filters.filter(w => !w.acl || this.acl.can(w.acl));
      }

      // buttons
      const buttons: SimpleTableButton[] = [];
      if (item.buttons) {
        for (const btn of item.buttons) {
          if (this.acl && btn.acl && !this.acl.can(btn.acl)) continue;

          if (btn.type === 'del' && typeof btn.pop === 'undefined')
            btn.pop = true;

          if (btn.pop === true) {
            btn._type = 2;
            if (typeof btn.popTitle === 'undefined')
              btn.popTitle = `确认删除吗？`;
          }
          if (btn.children && btn.children.length > 0) {
            btn._type = 3;
            const subButtons: SimpleTableButton[] = [];
            for (const subBut of btn.children) {
              if (this.acl && subBut.acl && !this.acl.can(subBut.acl)) continue;
              if (subBut.type === 'del' && typeof subBut.pop === 'undefined')
                subBut.pop = true;

              if (subBut.pop === true) {
                subBut._type = 2;
                if (typeof subBut.popTitle === 'undefined')
                  subBut.popTitle = `确认删除吗？`;
              }
              if (!subBut._type) subBut._type = 1;

              // i18n
              if (subBut.i18n && this.i18nSrv) subBut.text = this.i18nSrv.fanyi(subBut.i18n);
              subButtons.push(subBut);
            }
            btn.children = subButtons;
          }
          if (!btn._type) btn._type = 1;

          // i18n
          if (btn.i18n && this.i18nSrv) btn.text = this.i18nSrv.fanyi(btn.i18n);

          buttons.push(btn);
        }
        if (buttons.length === 0) continue;
        this.btnCoerceIf(buttons);
      }
      item.buttons = buttons;
      // i18n
      if (item.i18n && this.i18nSrv) item.title = this.i18nSrv.fanyi(item.i18n);
      ++idx;
      newColumns.push(item);
    }
    this.fixedCoerce(newColumns);
    this._columns = newColumns;
    if (checkboxCount > 1) throw new Error(`just only one column checkbox`);
    if (radioCount > 1) throw new Error(`just only one column radio`);
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
    if (this.data$) {
      this.data$.unsubscribe();
      this.data$ = null;
    }
  }
}
