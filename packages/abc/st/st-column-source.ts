import { Host, Inject, Injectable, Optional } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ACLService } from '@delon/acl';
import { AlainI18NService, ALAIN_I18N_TOKEN } from '@delon/theme';
import { AlainSTConfig, deepCopy, warn } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { STRowSource } from './st-row.directive';
import { STWidgetRegistry } from './st-widget';
import { STColumn, STColumnButton, STColumnButtonPop, STColumnFilter, STColumnGroupType, STIcon, STSortMap } from './st.interfaces';

@Injectable()
export class STColumnSource {
  private cog: AlainSTConfig;

  constructor(
    private dom: DomSanitizer,
    @Host() private rowSource: STRowSource,
    @Optional() private acl: ACLService,
    @Optional() @Inject(ALAIN_I18N_TOKEN) private i18nSrv: AlainI18NService,
    private stWidgetRegistry: STWidgetRegistry,
  ) {}

  setCog(val: AlainSTConfig): void {
    this.cog = val;
  }

  private fixPop(i: STColumnButton, def: STColumnButtonPop): void {
    if (i.pop == null || i.pop === false) {
      i.pop = false;
      return;
    }

    let pop = {
      ...def,
    };
    if (typeof i.pop === 'string') {
      pop.title = i.pop;
    } else if (typeof i.pop === 'object') {
      pop = {
        ...pop,
        ...i.pop,
      };
    }

    if (typeof pop.condition !== 'function') {
      pop.condition = () => false;
    }

    i.pop = pop;
  }

  private btnCoerce(list: STColumnButton[]): STColumnButton[] {
    if (!list) return [];
    const ret: STColumnButton[] = [];
    const { modal, drawer, pop, btnIcon } = this.cog;

    for (const item of list) {
      if (this.acl && item.acl && !this.acl.can(item.acl)) {
        continue;
      }

      if (item.type === 'modal' || item.type === 'static') {
        if (item.modal == null || item.modal.component == null) {
          console.warn(`[st] Should specify modal parameter`);
          item.type = 'none';
        } else {
          item.modal = { ...{ paramsName: 'record', size: 'lg' }, ...modal, ...item.modal };
        }
      }

      if (item.type === 'drawer') {
        if (item.drawer == null || item.drawer.component == null) {
          console.warn(`[st] Should specify drawer parameter`);
          item.type = 'none';
        } else {
          item.drawer = { ...{ paramsName: 'record', size: 'lg' }, ...drawer, ...item.drawer };
        }
      }

      if (item.type === 'del' && typeof item.pop === 'undefined') {
        item.pop = true;
      }

      // pop
      this.fixPop(item, pop!);

      if (item.icon) {
        item.icon = {
          ...btnIcon,
          ...(typeof item.icon === 'string' ? { type: item.icon } : item.icon),
        };
      }

      item.children = item.children && item.children.length > 0 ? this.btnCoerce(item.children) : [];

      // i18n
      if (item.i18n && this.i18nSrv) {
        item.text = this.i18nSrv.fanyi(item.i18n);
      }

      ret.push(item);
    }
    this.btnCoerceIf(ret);
    return ret;
  }

  private btnCoerceIf(list: STColumnButton[]) {
    for (const item of list) {
      if (!item.iif) item.iif = () => true;
      item.iifBehavior = item.iifBehavior || this.cog.iifBehavior;
      if (item.children && item.children.length > 0) {
        this.btnCoerceIf(item.children);
      } else {
        item.children = [];
      }
    }
  }

  private fixedCoerce(list: STColumn[]) {
    const countReduce = (a: number, b: STColumn) => a + +b.width!.toString().replace('px', '');
    // left width
    list
      .filter(w => w.fixed && w.fixed === 'left' && w.width)
      .forEach((item, idx) => (item._left = list.slice(0, idx).reduce(countReduce, 0) + 'px'));
    // right width
    list
      .filter(w => w.fixed && w.fixed === 'right' && w.width)
      .reverse()
      .forEach((item, idx) => (item._right = (idx > 0 ? list.slice(-idx).reduce(countReduce, 0) : 0) + 'px'));
  }

  private sortCoerce(item: STColumn): STSortMap {
    const res = this.fixCoerce(item);
    res.reName = {
      ...this.cog.sortReName,
      ...res.reName,
    };
    return res;
  }

  private fixCoerce(item: STColumn): STSortMap {
    if (typeof item.sort === 'undefined') {
      return { enabled: false };
    }

    let res: STSortMap = {};

    if (typeof item.sort === 'string') {
      res.key = item.sort;
    } else if (typeof item.sort !== 'boolean') {
      res = item.sort;
    }

    if (!res.key) {
      res.key = item.indexKey;
    }

    res.enabled = true;

    return res;
  }

  private filterCoerce(item: STColumn): STColumnFilter | null {
    if (item.filter == null) {
      return null;
    }

    let res: STColumnFilter | null = item.filter;
    res.type = res.type || 'default';

    let icon = 'filter';
    let iconTheme = 'fill';
    if (res.type === 'keyword') {
      if (res.menus == null || res.menus!.length === 0) {
        res.menus = [{ value: '' }];
      }
      icon = 'search';
      iconTheme = 'outline';
    }

    if (res.menus!.length === 0) {
      return null;
    }

    if (typeof res.multiple === 'undefined') {
      res.multiple = true;
    }

    res.confirmText = res.confirmText || this.cog.filterConfirmText;
    res.clearText = res.clearText || this.cog.filterClearText;
    res.key = res.key || item.indexKey;
    res.icon = res.icon || icon;

    const baseIcon = { type: icon, theme: iconTheme } as STIcon;
    if (typeof res.icon === 'string') {
      res.icon = { ...baseIcon, type: res.icon } as STIcon;
    } else {
      res.icon = { ...baseIcon, ...res.icon };
    }

    this.updateDefault(res);

    if (this.acl) {
      res.menus = res.menus!.filter(w => this.acl.can(w.acl));
    }

    if (res.menus!.length <= 0) {
      res = null;
    }

    return res;
  }

  private restoreRender(item: STColumn) {
    if (item.renderTitle) {
      item.__renderTitle = this.rowSource.getTitle(item.renderTitle);
    }
    if (item.render) {
      item.__render = this.rowSource.getRow(item.render);
    }
  }

  private widgetCoerce(item: STColumn): void {
    if (item.type !== 'widget') return;
    if (item.widget == null || !this.stWidgetRegistry.has(item.widget.type)) {
      delete item.type;
      warn(`st: No widget for type "${item.widget?.type}"`);
    }
  }

  private genHeaders(rootColumns: STColumn[]): STColumn[][] {
    const rows: STColumn[][] = [];
    const fillRowCells = (columns: STColumn[], colIndex: number, rowIndex = 0): number[] => {
      // Init rows
      rows[rowIndex] = rows[rowIndex] || [];

      let currentColIndex = colIndex;
      const colSpans: number[] = columns.map(column => {
        const cell: STColumnGroupType = {
          column,
          colStart: currentColIndex,
        };

        let colSpan: number = 1;

        const subColumns = column.children;
        if (Array.isArray(subColumns) && subColumns.length > 0) {
          colSpan = fillRowCells(subColumns, currentColIndex, rowIndex + 1).reduce((total, count) => total + count, 0);
          cell.hasSubColumns = true;
        }

        if ('colSpan' in column) {
          colSpan = column.colSpan!;
        }

        if ('rowSpan' in column) {
          cell.rowSpan = column.rowSpan;
        }

        cell.colSpan = colSpan;
        cell.colEnd = cell.colStart + colSpan - 1;
        rows[rowIndex].push(cell);

        currentColIndex += colSpan;

        return colSpan;
      });

      return colSpans;
    };

    fillRowCells(rootColumns, 0);

    // Handle `rowSpan`
    const rowCount = rows.length;
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
      rows[rowIndex].forEach(cell => {
        if (!('rowSpan' in cell) && !cell.hasSubColumns) {
          cell.rowSpan = rowCount - rowIndex;
        }
      });
    }

    return rows;
  }

  private cleanCond(list: STColumn[]): STColumn[] {
    const res: STColumn[] = [];
    const copyList = deepCopy(list);
    for (const item of copyList) {
      if (item.iif && !item.iif(item)) {
        continue;
      }
      if (this.acl && item.acl && !this.acl.can(item.acl)) {
        continue;
      }
      res.push(item);
    }
    return res;
  }

  process(list: STColumn[]): { columns: STColumn[]; headers: STColumn[][] } {
    if (!list || list.length === 0) throw new Error(`[st]: the columns property muse be define!`);

    const { noIndex } = this.cog;
    let checkboxCount = 0;
    let radioCount = 0;
    let point = 0;
    const columns: STColumn[] = [];

    const processItem = (item: STColumn): STColumn => {
      // index
      if (item.index) {
        if (!Array.isArray(item.index)) {
          item.index = item.index.split('.');
        }
        item.indexKey = item.index.join('.');
      }

      // #region title

      const tit = (typeof item.title === 'string' ? { text: item.title } : item.title) || {};
      if (tit.i18n && this.i18nSrv) {
        tit.text = this.i18nSrv.fanyi(tit.i18n);
      }
      if (tit.text) {
        tit._text = this.dom.bypassSecurityTrustHtml(tit.text);
      }
      item.title = tit;

      // #endregion

      // no
      if (item.type === 'no') {
        item.noIndex = item.noIndex == null ? noIndex : item.noIndex;
      }
      // checkbox
      if (item.selections == null) {
        item.selections = [];
      }
      if (item.type === 'checkbox') {
        ++checkboxCount;
        if (!item.width) {
          item.width = `${item.selections.length > 0 ? 62 : 50}px`;
        }
      }
      if (this.acl) {
        item.selections = item.selections.filter(w => this.acl.can(w.acl));
      }
      // radio
      if (item.type === 'radio') {
        ++radioCount;
        item.selections = [];
        if (!item.width) {
          item.width = '50px';
        }
      }
      // types
      if (item.type === 'yn') {
        item.yn = { truth: true, ...item.yn };
      }
      if (
        (item.type === 'link' && typeof item.click !== 'function') ||
        (item.type === 'badge' && item.badge == null) ||
        (item.type === 'tag' && item.tag == null)
      ) {
        (item as any).type = '';
      }
      // className
      if (!item.className) {
        item.className = ({
          number: 'text-right',
          currency: 'text-right',
          date: 'text-center',
        } as NzSafeAny)[item.type!];
      }
      // width
      if (typeof item.width === 'number') {
        item.width = `${item.width}px`;
      }

      // sorter
      item._sort = this.sortCoerce(item);
      // filter
      item.filter = this.filterCoerce(item) as STColumnFilter;
      // buttons
      item.buttons = this.btnCoerce(item.buttons!);
      // widget
      this.widgetCoerce(item);
      // restore custom row
      this.restoreRender(item);

      item.__point = point++;

      return item;
    };

    const processList = (data: STColumn[]): void => {
      for (const item of data) {
        if (Array.isArray(item.children)) {
          processList(item.children);
        } else {
          columns.push(processItem(item));
        }
      }
    };

    const copyList = this.cleanCond(list);
    processList(copyList);

    if (checkboxCount > 1) {
      throw new Error(`[st]: just only one column checkbox`);
    }
    if (radioCount > 1) {
      throw new Error(`[st]: just only one column radio`);
    }

    this.fixedCoerce(columns);

    return { columns, headers: this.genHeaders(copyList) };
  }

  restoreAllRender(columns: STColumn[]) {
    columns.forEach(i => this.restoreRender(i));
  }

  updateDefault(filter: STColumnFilter): this {
    if (filter.type === 'default') {
      filter.default = filter.menus!.findIndex(w => w.checked!) !== -1;
    } else {
      filter.default = !!filter.menus![0].value;
    }
    return this;
  }

  cleanFilter(col: STColumn): this {
    const f = col.filter!;
    f.default = false;
    if (f.type === 'default') {
      f.menus!.forEach(i => (i.checked = false));
    } else {
      f.menus![0].value = undefined;
    }
    return this;
  }
}
