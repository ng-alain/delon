import { Component, Input, Output, OnDestroy, OnInit, OnChanges, SimpleChanges, EventEmitter, Renderer2, ElementRef, TemplateRef, SimpleChange, QueryList, ViewChildren, AfterViewInit, ContentChildren } from '@angular/core';
import { _HttpClient, CNCurrencyPipe, MomentDatePipe, YNPipe, ModalHelper } from '@delon/theme';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { tap } from 'rxjs/operators';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { SimpleTableColumn, SimpleTableChange, CompareFn, SimpleTableSelection, SimpleTableFilter, SimpleTableData, SimpleTableButton } from './interface';
import { SimpleTableConfig } from './simple-table.config';
import { deepGet } from '../utils/utils';
import { SimpleTableRowDirective } from './simple-table-row.directive';

@Component({
    selector: 'simple-table',
    templateUrl: './simple-table.component.html',
    styleUrls: [ './simple-table.less' ],
    providers: [ CNCurrencyPipe, MomentDatePipe, YNPipe ]
})
export class SimpleTableComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

    private data$: Subscription;
    _data: (SimpleTableData)[] = [];
    _needSliceData = false;
    _isAjax = false;
    _isPagination = true;
    _classMap: string[] = [];
    _allChecked = false;
    _indeterminate = false;
    _sortMap: { [key: number ]: any } = {};
    _sortColumn: SimpleTableColumn = null;
    _sortOrder: string;
    _sortIndex: number;

    // region: fields

    /** 自定义数据源，且 `data` > `url` */
    @Input() data: any[] | Observable<any[]>;
    /** 后端URL地址 */
    @Input() url: string;
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
    @Input() reqReName: Object;
    /** 请求异常时回调 */
    @Output() reqError: EventEmitter<any> = new EventEmitter<any>();
    /**
     * 重命名返回参数 `total`、`list`
     * - `{ total: 'Total' }` => Total 会被当作 `total`
     */
    @Input() resReName: { total?: string | string[], list?: string | string[] } = { total: ['total'], list: ['list'] };
    /** 列描述  */
    @Input() columns: SimpleTableColumn[] = [];
    /** 每页数量，当设置为 `0` 表示不分页，默认：`10` */
    @Input()
    get ps() { return this._ps; }
    set ps(value: any) {
        this._ps = coerceNumberProperty(value);
    }
    private _ps = 10;
    /** 当前页码 */
    @Input()
    get pi() { return this._pi; }
    set pi(value: any) {
        this._pi = coerceNumberProperty(value);
    }
    private _pi = 1;
    /** 数据总量 */
    @Input()
    get total() { return this._total; }
    set total(value: any) {
        this._total = coerceNumberProperty(value);
    }
    private _total = 0;
    /** 是否显示Loading */
    @Input()
    get loading() { return this._loading; }
    set loading(value: any) {
        this._loading = coerceBooleanProperty(value);
    }
    private _loading = false;
    /** 是否显示边框 */
    @Input()
    get bordered() { return this._bordered; }
    set bordered(value: any) {
        this._bordered = coerceBooleanProperty(value);
    }
    private _bordered = false;
    /** table大小 */
    @Input() size: 'small' | 'middle' | 'default' = 'default';
    /** 是否显示pagination中改变页数 */
    @Input()
    get showSizeChanger() { return this._showSizeChanger; }
    set showSizeChanger(value: any) {
        this._showSizeChanger = coerceBooleanProperty(value);
    }
    private _showSizeChanger = false;
    /** pagination中每页显示条目数下拉框值 */
    @Input() pageSizeSelectorValues: number[] = [10, 20, 30, 40, 50];
    /** 是否显示pagination中快速跳转 */
    @Input()
    get showQuickJumper() { return this._showQuickJumper; }
    set showQuickJumper(value: any) {
        this._showQuickJumper = coerceBooleanProperty(value);
    }
    private _showQuickJumper = false;
    /** 是否显示总数据量 */
    @Input()
    get showTotal() { return this._showTotal; }
    set showTotal(value: any) {
        this._showTotal = coerceBooleanProperty(value);
    }
    private _showTotal = false;
    /** 数据变更后是否保留在数据变更前的页码 */
    @Input()
    get isPageIndexReset() { return this._isPageIndexReset; }
    set isPageIndexReset(value: any) {
        this._isPageIndexReset = coerceBooleanProperty(value);
    }
    private _isPageIndexReset = true;
    /** 分页方向 */
    @Input() pagePlacement?: 'left' | 'center' | 'right' = 'right';
    /** 切换分页时返回顶部 */
    @Input()
    get toTopInChange() { return this._toTopInChange; }
    set toTopInChange(value: any) {
        this._toTopInChange = coerceBooleanProperty(value);
    }
    private _toTopInChange = true;
    /** 返回顶部偏移值 */
    @Input()
    get toTopOffset() { return this._toTopOffset; }
    set toTopOffset(value: any) {
        this._toTopOffset = coerceNumberProperty(value);
    }
    private _toTopOffset = 0;
    /** 重命名排序值，`columns` 的重命名高于属性 */
    @Input() sortReName: { ascend?: string, descend?: string };
    /** 页码、每页数量变化时回调 */
    @Output() change: EventEmitter<SimpleTableChange> = new EventEmitter<SimpleTableChange>();
    /** checkbox变化时回调，参数为当前所选清单 */
    @Output() checkboxChange: EventEmitter<any[]> = new EventEmitter<any[]>();
    /** radio变化时回调，参数为当前所选 */
    @Output() radioChange: EventEmitter<any> = new EventEmitter<any>();
    /** 排序回调 */
    @Output() sortChange: EventEmitter<any> = new EventEmitter<any>();
    /** Filter回调 */
    @Output() filterChange: EventEmitter<any> = new EventEmitter<any>();

    // endregion

    constructor(
        defConfig: SimpleTableConfig,
        private _http: _HttpClient,
        private el: ElementRef,
        private renderer: Renderer2,
        private modal: ModalHelper,
        private currenty: CNCurrencyPipe,
        private date: MomentDatePipe,
        private yn: YNPipe
    ) {
        Object.assign(this, defConfig);
    }

    _change(type: 'pi' | 'ps') {
        this._genAjax();
        this._genData();
        this._toTop();
        this.change.emit({
            type: type,
            pi: this.pi,
            ps: this.ps,
            total: this.total
        });
    }

    _genAjax(forceRefresh: boolean = false) {
        if (!this._isAjax) return;
        this.loading = true;
        if (forceRefresh === true) this.pi = 1;
        const params: any = {};
        params[this.reqReName && this.reqReName['pi'] || 'pi'] = this.pi;
        params[this.reqReName && this.reqReName['ps'] || 'ps'] = this.ps;
        this._http.request(this.reqMehtod, this.url, {
            params: Object.assign(params, this.extraParams, this.getReqSortMap(), this.getReqFilterMap()),
            body: this.reqBody,
            headers: this.reqHeaders
        }).subscribe((res: any) => {
            const ret = deepGet(res, this.resReName.list as string[], null);
            if (typeof ret === 'undefined') {
                console.warn(`results muse contain '${(this.resReName.list as string[]).join('.')}' attribute.`);
                return;
            }
            if (!Array.isArray(ret)) {
                console.warn(`'${(this.resReName.list as string[]).join('.')}' muse be array type.`);
                return;
            }
            this._subscribeData(ret);

            // total
            const retTotal = this.resReName.total && deepGet(res, this.resReName.total as string[], null);
            if (typeof retTotal === 'undefined') {
                if (this.resReName.total) console.warn(`results muse contain '${(this.resReName.total as string[]).join('.')}' attribute.`);
                return;
            }
            this.total = +retTotal;
        }, err => {
            this.loading = false;
            this.reqError.emit(err);
        });
    }

    _genData(forceRefresh: boolean = false) {
        if (!this._needSliceData) return;
        let data = <any[]>this.data || [];
        // sort
        data = data.slice(0);
        const sorterFn = this.getSorterFn();
        if (sorterFn) {
            data = this.recursiveSort(data, sorterFn);
        }

        // filter
        this.columns.forEach(c => {
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
                this.pi = !this.pi ? 1 : (this.pi > maxPageIndex ? maxPageIndex : this.pi);
            }
        }
        this.total = data.length;
        this._subscribeData(data.slice((this.pi - 1) * this.ps, this.pi * this.ps));
    }

    _toTop() {
        if (!this.toTopInChange) return;
        if (this.el.nativeElement.scrollIntoView) this.el.nativeElement.scrollIntoView();
        // todo: toTopOffset
    }

    _get(item: any, col: SimpleTableColumn) {
        if (col.format) return col.format(item, col);

        const ret = deepGet(item, col.index as string[], '');
        if (!ret) return '';

        switch (col.type) {
            case 'img':
                return `<img src="${ret}" class="img">`;
            case 'currency':
                return this.currenty.transform(ret);
            case 'date':
                return this.date.transform(ret, col.dateFormat);
            case 'yn':
                return this.yn.transform(ret, col.ynYes, col.ynNo);
            default:
                break;
        }
        return ret;
    }

    private _subscribeData(res: any[]) {
        this.loading = false;
        this._data = res;
        this._refCheck();
    }

    // region: sort

    private getReqSortMap(): { [key: string]: string } {
        const ret: { [ key: string]: string } = {};
        if (!this._sortOrder) return ret;

        const map = this._sortMap[this._sortIndex];
        ret[map.key] =
            (this._sortColumn.sortReName || this.sortReName || {})[map.v] || map.v;
        return ret;
    }

    private recursiveSort(data: any[], sorterFn: (a: any, b: any) => number): any[] {
        const childrenColumnName = 'children';
        return data.sort(sorterFn).map((item: any) => (item[childrenColumnName] ? {
            ...item,
            [childrenColumnName]: this.recursiveSort(item[childrenColumnName], sorterFn),
        } : item));
    }

    private getSorterFn() {
        // _sortMap
        if (!this._sortOrder || !this._sortColumn || typeof this._sortColumn.sorter !== 'function') {
            return;
        }

        return (a: any, b: any) => {
            const result = (this._sortColumn!.sorter as CompareFn)(a, b);
            if (result !== 0) {
                return (this._sortOrder === 'descend') ? -result : result;
            }
            return 0;
        };
    }

    sort(index: number, value: any) {
        if (this._sortIndex === index && this._sortOrder === value) return;
        this._sortColumn = this.columns[index];
        this._sortOrder = value;
        this._sortIndex = index;
        Object.keys(this._sortMap).forEach(key => this._sortMap[key].v = +key === index ? value : null);
        this._genAjax(true);
        this._genData(true);
        this.sortChange.emit({ value, map: this.getReqSortMap(), column: this._sortColumn });
    }

    // endregion

    // region: filter

    private getReqFilterMap(): { [key: string]: string } {
        let ret: { [ key: string]: string } = {};
        this.columns.filter(w => w.filtered === true).forEach(col => {
            const values = col.filters.filter(f => f.checked === true);
            let obj: Object = {};
            if (col.filterReName)
                obj = col.filterReName(col.filters, col);
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
        col.filters.forEach(i => i.checked = false);
        this.handleFilter(col);
    }

    filterRadio(col: SimpleTableColumn, item: SimpleTableFilter, checked: boolean) {
        col.filters.forEach(i => i.checked = false);
        item.checked = checked;
    }

    // endregion

    // region: checkbox

    _checkAll() {
        for (const item of this._data) {
            item.checked = this._allChecked;
        }
        this._refCheck();
        this.checkboxChange.emit(this._data.filter(w => w.checked === true));
    }

    _refCheck() {
        const checkedList = this._data.filter(w => w.checked === true);
        this._allChecked = checkedList.length > 0 && checkedList.length === this._data.length;
        const allUnChecked = this._data.every(value => !value.checked);
        this._indeterminate = (!this._allChecked) && (!allUnChecked);
    }

    _rowSelection(row: SimpleTableSelection) {
        if (row.select) row.select(this._data);
        this._refCheck();
        this.checkboxChange.emit(this._data.filter(w => w.checked === true));
    }

    // endregion

    // region: radio

    _refRadio(idx: number, checked: boolean) {
        this._data.forEach(i => i.checked = false);
        this._data[idx].checked = checked;
        this.radioChange.emit({ checked, item: this._data[idx] });
    }

    // endregion

    // region: buttons

    btnClick(record: any, btn: SimpleTableButton) {
        if (btn.type === 'modal' || btn.type === 'static') {
            this.modal[btn.type === 'modal' ? 'open' : 'static'](btn.component, Object.assign({
                record
            }, btn.params && btn.params(record)), btn.size, btn.modalOptions).subscribe(res => {
                if (btn.click) btn.click(record, res);
            });
            return;
        }
        if (btn.click) btn.click(record);
    }

    btnText(record: any, btn: SimpleTableButton) {
        if (btn.format) return btn.format(record, btn);
        return btn.text;
    }

    // endregion

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }

    addRow(row: SimpleTableRowDirective) {
        const col = this.columns.find(w => w.render === row.id);
        if (col) col.__render = row.templateRef;
    }

    private updateStatus() {
        if (this.data && this.url) throw new Error(`data & url property muse be either-or`);

        this.setClass();
        // columns
        if (!this.columns) throw new Error(`the columns property muse be define!`);
        let checkboxCount = 0;
        let radioCount = 0;
        const sortMap: Object = {};
        let idx = 0;
        for (const item of this.columns) {
            if (item.index) {
                if (!Array.isArray(item.index))
                    item.index = item.index.split('.');

                item.indexKey = item.index.join('.');
            }
            if (item.type === 'checkbox') {
                ++checkboxCount;
                if (!item.width) item.width = '50px';
            }
            if (item.type === 'radio') {
                ++radioCount;
                if (!item.width) item.width = '50px';
                item.selections = [];
            }

            if (!item.className) {
                item.className = {
                    'checkbox': 'text-center',
                    'radio': 'text-center',
                    'currency': 'text-right',
                    'date': 'text-center'
                }[item.type];
            }

            // rowSelection
            if (!item.selections) item.selections = [];
            // sorter
            if (item.sorter) {
                sortMap[idx] = { v: item.sort, key: item.sortKey || item.indexKey };
                if (item.sort && !this._sortColumn) {
                    this._sortColumn = item;
                    this._sortOrder = item.sort;
                    this._sortIndex = idx;
                }
            }
            // filter
            if (!item.filter || !item.filters) item.filters = [];
            if (typeof item.filterMultiple === 'undefined') item.filterMultiple = true;
            if (!item.filterConfirmText) item.filterConfirmText = `确认`;
            if (!item.filterClearText) item.filterClearText = `重置`;
            if (!item.filterIcon) item.filterIcon = `anticon anticon-filter`;
            item.filtered = item.filters.findIndex(w => w.checked) !== -1;

            // buttons
            if (!item.buttons) item.buttons = [];
            for (const btn of item.buttons) {
                if (btn.type === 'del' && typeof btn.pop === 'undefined')
                    btn.pop = true;

                if (btn.pop === true) {
                    btn._type = 2;
                    if (typeof btn.popTitle === 'undefined') btn.popTitle = `确认删除吗？`;
                }
                if (btn.children && btn.children.length > 0) {
                    btn._type = 3;
                }
                if (!btn._type) btn._type = 1;
            }

            ++idx;
        }
        if (checkboxCount > 1) throw new Error(`just only one column checkbox`);
        if (radioCount > 1) throw new Error(`just only one column radio`);
        this._sortMap = sortMap;
        // reqReName
        if (this.reqReName) {
        }
        // resReName
        if (this.resReName) {
            if (this.resReName.list)
                if (!Array.isArray(this.resReName.list)) this.resReName.list = this.resReName.list.split('.');
            else
                this.resReName.list = ['list'];

            if (this.resReName.total)
                if (!Array.isArray(this.resReName.total)) this.resReName.total = this.resReName.total.split('.');
            else
                this.resReName.total = ['total'];
        } else {
            this.resReName = { total: ['total'], list: ['list'] };
        }

        // results
        this._isPagination = this.ps > 0;
        if (this.data) {
            this._isAjax = false;
            if (!Array.isArray(this.data)) {
                if (!this.data$) {
                    this.data$ = <any>this.data.pipe(tap(() => this.loading = true)).subscribe(this._subscribeData);
                }
            } else {
                this._needSliceData = this._isPagination && this.data.length > this.ps;
                this._genData(true);
            }
        } else {
            this._isAjax = true;
            this._genAjax(true);
        }
    }

    private setClass() {
        this._classMap.forEach(cls => this.renderer.removeClass(this.el.nativeElement, cls));

        this._classMap = [];
        if (this.pagePlacement)
            this._classMap.push('page-' + this.pagePlacement);

        this._classMap.forEach(cls => this.renderer.addClass(this.el.nativeElement, cls));
    }

    ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
        this.updateStatus();
    }

    ngOnDestroy(): void {
        if (this.data$) {
            this.data$.unsubscribe();
            this.data$ = null;
        }
    }

}
