import { DecimalPipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Host, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DatePipe, YNPipe, _HttpClient } from '@delon/theme';
import { CurrencyService } from '@delon/util/format';
import { deepCopy, deepGet } from '@delon/util/other';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  STColumn,
  STColumnFilter,
  STColumnFilterMenu,
  STData,
  STMultiSort,
  STMultiSortResultType,
  STPage,
  STReq,
  STReqReNameType,
  STRequestOptions,
  STRes,
  STRowClassName,
  STSingleSort,
  STSortMap,
  STStatistical,
  STStatisticalResult,
  STStatisticalResults,
  STStatisticalType,
} from './st.interfaces';
import { _STColumn, _STColumnButton, _STDataValue } from './st.types';

export interface STDataSourceOptions {
  pi: number;
  ps: number;
  paginator: boolean;
  data: string | STData[] | Observable<STData[]>;
  total: number;
  req: STReq;
  res: STRes;
  page: STPage;
  columns: _STColumn[];
  singleSort?: STSingleSort;
  multiSort?: STMultiSort;
  rowClassName?: STRowClassName;
  saftHtml: boolean;
}

export interface STDataSourceResult {
  /** 是否需要显示分页器 */
  pageShow: boolean;
  /** 新 `pi`，若返回 `undefined` 表示用户受控 */
  pi: number;
  /** 新 `ps`，若返回 `undefined` 表示用户受控 */
  ps: number;
  /** 新 `total`，若返回 `undefined` 表示用户受控 */
  total: number;
  /** 数据 */
  list: STData[];
  /** 统计数据 */
  statistical: STStatisticalResults;
}

@Injectable()
export class STDataSource {
  private sortTick = 0;

  constructor(
    private http: _HttpClient,
    @Host() private datePipe: DatePipe,
    @Host() private ynPipe: YNPipe,
    @Host() private numberPipe: DecimalPipe,
    private currencySrv: CurrencyService,
    private dom: DomSanitizer,
  ) {}

  process(options: STDataSourceOptions): Observable<STDataSourceResult> {
    let data$: Observable<STData[]>;
    let isRemote = false;
    const { data, res, total, page, pi, ps, paginator, columns } = options;
    let retTotal: number;
    let retPs: number;
    let retList: STData[];
    let retPi: number;
    let rawData: any;
    let showPage = page.show;

    if (typeof data === 'string') {
      isRemote = true;
      data$ = this.getByHttp(data, options).pipe(
        map(result => {
          rawData = result;
          let ret: STData[];
          if (Array.isArray(result)) {
            ret = result;
            retTotal = ret.length;
            retPs = retTotal;
            showPage = false;
          } else {
            // list
            ret = deepGet(result, res.reName!.list as string[], []);
            if (ret == null || !Array.isArray(ret)) {
              ret = [];
            }
            // total
            const resultTotal = res.reName!.total && deepGet(result, res.reName!.total as string[], null);
            retTotal = resultTotal == null ? total || 0 : +resultTotal;
          }
          return deepCopy(ret);
        }),
      );
    } else if (Array.isArray(data)) {
      data$ = of(data);
    } else {
      // a cold observable
      data$ = data;
    }

    if (!isRemote) {
      data$ = data$.pipe(
        // sort
        map((result: STData[]) => {
          rawData = result;
          let copyResult = deepCopy(result);
          const sorterFn = this.getSorterFn(columns as _STColumn[]);
          if (sorterFn) {
            copyResult = copyResult.sort(sorterFn);
          }
          return copyResult;
        }),
        // filter
        map((result: STData[]) => {
          columns
            .filter(w => w.filter)
            .forEach(c => {
              const filter = c.filter!;
              const values = this.getFilteredData(filter);
              if (values.length === 0) return;
              const onFilter = filter.fn;
              if (typeof onFilter !== 'function') {
                console.warn(`[st] Muse provide the fn function in filter`);
                return;
              }
              result = result.filter(record => values.some(v => onFilter(v, record)));
            });
          return result;
        }),
        // paging
        map((result: STData[]) => {
          if (paginator && page.front) {
            const maxPageIndex = Math.ceil(result.length / ps);
            retPi = Math.max(1, pi > maxPageIndex ? maxPageIndex : pi);
            retTotal = result.length;
            if (page.show === true) {
              return result.slice((retPi - 1) * ps, retPi * ps);
            }
          }
          return result;
        }),
      );
    }

    // pre-process
    if (typeof res.process === 'function') {
      data$ = data$.pipe(map(result => res.process!(result, rawData)));
    }

    data$ = data$.pipe(
      map(result => this.optimizeData({ result, columns, rowClassName: options.rowClassName, safeHtml: options.saftHtml })),
    );

    return data$.pipe(
      map(result => {
        retList = result;
        const realTotal = retTotal || total;
        const realPs = retPs || ps;

        return {
          pi: retPi,
          ps: retPs,
          total: retTotal,
          list: retList,
          statistical: this.genStatistical(columns as _STColumn[], retList, rawData),
          pageShow: typeof showPage === 'undefined' ? realTotal > realPs : showPage,
        } as STDataSourceResult;
      }),
    );
  }

  private get(item: STData, col: _STColumn, idx: number, safeHtml: boolean): _STDataValue {
    try {
      if (col.format) {
        const formatRes = col.format(item, col, idx) || '';
        if (safeHtml && formatRes && ~formatRes.indexOf('</')) {
          return { text: formatRes, _text: this.dom.bypassSecurityTrustHtml(formatRes), org: formatRes };
        }
        return { text: formatRes, _text: formatRes, org: formatRes };
      }

      const value = deepGet(item, col.index as string[], col.default);

      let text = value;
      let color: string | undefined;
      switch (col.type) {
        case 'no':
          text = this.getNoIndex(item, col, idx);
          break;
        case 'img':
          text = value ? `<img src="${value}" class="img">` : '';
          break;
        case 'number':
          text = this.numberPipe.transform(value, col.numberDigits);
          break;
        case 'currency':
          text = this.currencySrv.format(value, col.currency?.format);
          break;
        case 'date':
          text = value === col.default ? col.default : this.datePipe.transform(value, col.dateFormat);
          break;
        case 'yn':
          text = this.ynPipe.transform(value === col.yn!.truth, col.yn!.yes!, col.yn!.no!, col.yn!.mode!, false);
          break;
        case 'enum':
          text = col.enum![value];
          break;
        case 'tag':
        case 'badge':
          const data = col.type === 'tag' ? col.tag : col.badge;
          if (data && data[text]) {
            const dataItem = data[text];
            text = dataItem.text;
            color = dataItem.color;
          } else {
            text = '';
          }
          break;
      }
      if (text == null) text = '';
      return { text, _text: safeHtml ? this.dom.bypassSecurityTrustHtml(text) : text, org: value, color, buttons: [] };
    } catch (ex) {
      const text = `INVALID DATA`;
      console.error(`Failed to get data`, item, col, ex);
      return { text, _text: text, org: text, buttons: [] };
    }
  }

  private getByHttp(url: string, options: STDataSourceOptions): Observable<{}> {
    const { req, page, paginator, pi, ps, singleSort, multiSort, columns } = options;
    const method = (req.method || 'GET').toUpperCase();
    let params = {};
    const reName = req.reName as STReqReNameType;
    if (paginator) {
      if (req.type === 'page') {
        params = {
          [reName.pi as string]: page.zeroIndexed ? pi - 1 : pi,
          [reName.ps as string]: ps,
        };
      } else {
        params = {
          [reName.skip as string]: (pi - 1) * ps,
          [reName.limit as string]: ps,
        };
      }
    }
    params = {
      ...params,
      ...req.params,
      ...this.getReqSortMap(singleSort, multiSort, columns),
      ...this.getReqFilterMap(columns),
    };

    let reqOptions: STRequestOptions = {
      params,
      body: req.body,
      headers: req.headers,
    };
    if (method === 'POST' && req.allInBody === true) {
      reqOptions = {
        body: { ...req.body, ...params },
        headers: req.headers,
      };
    }
    if (typeof req.process === 'function') {
      reqOptions = req.process(reqOptions);
    }
    if (!(reqOptions.params instanceof HttpParams)) {
      reqOptions.params = new HttpParams({ fromObject: reqOptions.params });
    }
    return this.http.request(method, url, reqOptions);
  }

  optimizeData(options: { columns: _STColumn[]; result: STData[]; rowClassName?: STRowClassName; safeHtml: boolean }): STData[] {
    const { result, columns, rowClassName, safeHtml } = options;
    for (let i = 0, len = result.length; i < len; i++) {
      result[i]._values = columns.map(c => {
        if (Array.isArray(c.buttons) && c.buttons.length > 0) {
          return { buttons: this.genButtons(c.buttons, result[i], c) };
        }

        return this.get(result[i], c, i, c.saftHtml == null ? safeHtml : c.saftHtml);
      });
      if (rowClassName) {
        result[i]._rowClassName = rowClassName(result[i], i);
      }
    }
    return result;
  }

  getNoIndex(item: STData, col: _STColumn, idx: number): number {
    return typeof col.noIndex === 'function' ? col.noIndex(item, col, idx) : col.noIndex! + idx;
  }

  private genButtons(_btns: _STColumnButton[], item: STData, col: STColumn): _STColumnButton[] {
    const fn = (btns: _STColumnButton[]): _STColumnButton[] => {
      return deepCopy(btns).filter(btn => {
        const result = btn.iif!(item, btn, col);
        const isRenderDisabled = btn.iifBehavior === 'disabled';
        btn._result = result;
        btn._disabled = !result && isRenderDisabled;
        if (btn.children!.length > 0) {
          btn.children = fn(btn.children!);
        }
        delete btn.iif;
        return result || isRenderDisabled;
      });
    };

    const res = fn(_btns);

    const fnText = (btns: _STColumnButton[]): _STColumnButton[] => {
      for (const btn of btns) {
        btn._text = typeof btn.text === 'function' ? btn.text(item, btn) : btn.text || '';
        if (btn.children!.length > 0) {
          btn.children = fnText(btn.children!);
        }
      }
      return btns;
    };

    return fnText(res);
  }

  // #region sort

  private getValidSort(columns: _STColumn[]): STSortMap[] {
    return columns.filter(item => item._sort && item._sort.enabled && item._sort.default).map(item => item._sort!);
  }

  private getSorterFn(columns: _STColumn[]): ((a: STData, b: STData) => number) | void {
    const sortList = this.getValidSort(columns);
    if (sortList.length === 0) {
      return;
    }
    const sortItem = sortList[0];
    if (sortItem.compare === null) {
      return;
    }
    if (typeof sortItem.compare !== 'function') {
      console.warn(`[st] Muse provide the compare function in sort`);
      return;
    }

    return (a: STData, b: STData) => {
      const result = sortItem.compare!(a, b);
      if (result !== 0) {
        return sortItem.default === 'descend' ? -result : result;
      }
      return 0;
    };
  }

  get nextSortTick(): number {
    return ++this.sortTick;
  }

  getReqSortMap(singleSort: STSingleSort | undefined, multiSort: STMultiSort | undefined, columns: _STColumn[]): STMultiSortResultType {
    let ret: STMultiSortResultType = {};
    const sortList = this.getValidSort(columns);

    if (multiSort) {
      const ms: STMultiSort = {
        key: 'sort',
        separator: '-',
        nameSeparator: '.',
        keepEmptyKey: true,
        arrayParam: false,
        ...multiSort,
      };

      const sortMap = sortList
        .sort((a, b) => a.tick - b.tick)
        .map(item => item.key! + ms.nameSeparator + ((item.reName || {})[item.default!] || item.default));

      ret = { [ms.key!]: ms.arrayParam ? sortMap : sortMap.join(ms.separator) };

      return sortMap.length === 0 && ms.keepEmptyKey === false ? {} : ret;
    }

    if (sortList.length === 0) return ret;

    const mapData = sortList[0];
    let sortFiled = mapData.key;
    let sortValue = (sortList[0].reName || {})[mapData.default!] || mapData.default;
    if (singleSort) {
      sortValue = sortFiled + (singleSort.nameSeparator || '.') + sortValue;
      sortFiled = singleSort.key || 'sort';
    }
    ret[sortFiled as string] = sortValue as string;
    return ret;
  }

  // #endregion

  // #region filter

  private getFilteredData(filter: STColumnFilter): STColumnFilterMenu[] {
    return filter.type === 'default' ? filter.menus!.filter(f => f.checked === true) : filter.menus!.slice(0, 1);
  }

  private getReqFilterMap(columns: _STColumn[]): { [key: string]: string } {
    let ret = {};
    columns
      .filter(w => w.filter && w.filter.default === true)
      .forEach(col => {
        const filter = col.filter!;
        const values = this.getFilteredData(filter);
        let obj: { [key: string]: NzSafeAny } = {};
        if (filter.reName) {
          obj = filter.reName!(filter.menus!, col);
        } else {
          obj[filter.key!] = values.map(i => i.value).join(',');
        }
        ret = { ...ret, ...obj };
      });
    return ret;
  }

  // #endregion

  // #region statistical

  private genStatistical(columns: _STColumn[], list: STData[], rawData: any): STStatisticalResults {
    const res: { [key: string]: NzSafeAny } = {};
    columns.forEach((col, index) => {
      res[col.key || col.indexKey || index] = col.statistical == null ? {} : this.getStatistical(col, index, list, rawData);
    });
    return res;
  }

  private getStatistical(col: _STColumn, index: number, list: STData[], rawData: any): STStatisticalResult {
    const val = col.statistical;
    const item: STStatistical = {
      digits: 2,
      currency: undefined,
      ...(typeof val === 'string' ? { type: val as STStatisticalType } : (val as STStatistical)),
    };
    let res: STStatisticalResult = { value: 0 };
    let currency = false;
    if (typeof item.type === 'function') {
      res = item.type(this.getValues(index, list), col, list, rawData);
      currency = true;
    } else {
      switch (item.type) {
        case 'count':
          res.value = list.length;
          break;
        case 'distinctCount':
          res.value = this.getValues(index, list).filter((value, idx, self) => self.indexOf(value) === idx).length;
          break;
        case 'sum':
          res.value = this.toFixed(this.getSum(index, list), item.digits!);
          currency = true;
          break;
        case 'average':
          res.value = this.toFixed(this.getSum(index, list) / list.length, item.digits!);
          currency = true;
          break;
        case 'max':
          res.value = Math.max(...this.getValues(index, list));
          currency = true;
          break;
        case 'min':
          res.value = Math.min(...this.getValues(index, list));
          currency = true;
          break;
      }
    }
    if (item.currency === true || (item.currency == null && currency === true)) {
      res.text = this.currencySrv.format(res.value, col.currency?.format) as string;
    } else {
      res.text = String(res.value);
    }
    return res;
  }

  private toFixed(val: number, digits: number): number {
    if (isNaN(val) || !isFinite(val)) {
      return 0;
    }
    return parseFloat(val.toFixed(digits));
  }

  private getValues(index: number, list: STData[]): number[] {
    return list.map(i => i._values[index].org).map(i => (i === '' || i == null ? 0 : i));
  }

  private getSum(index: number, list: STData[]): number {
    return this.getValues(index, list).reduce((p, i) => (p += parseFloat(String(i))), 0);
  }

  // #endregion
}
