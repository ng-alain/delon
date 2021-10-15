import { Host, Inject, Injectable, Optional, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ACLService } from '@delon/acl';
import { AlainI18NService, ALAIN_I18N_TOKEN } from '@delon/theme';
import { AlainSTConfig } from '@delon/util/config';
import { deepCopy, warn } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { STRowSource } from './st-row.directive';
import { STWidgetRegistry } from './st-widget';
import {
  STColumn,
  STColumnButton,
  STColumnButtonPop,
  STColumnFilter,
  STColumnGroupType,
  STColumnSafeType,
  STIcon,
  STResizable,
  STSortMap,
  STWidthMode
} from './st.interfaces';
import { _STColumn, _STHeader } from './st.types';

export interface STColumnSourceProcessOptions {
  widthMode: STWidthMode;
  resizable: STResizable;
  safeType: STColumnSafeType;
}

@Injectable()
export class STColumnSource {
  private cog: AlainSTConfig;

  constructor(
    private dom: DomSanitizer,
    @Host() private rowSource: STRowSource,
    @Optional() private acl: ACLService,
    @Optional() @Inject(ALAIN_I18N_TOKEN) private i18nSrv: AlainI18NService,
    private stWidgetRegistry: STWidgetRegistry
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
      ...def
    };
    if (typeof i.pop === 'string') {
      pop.title = i.pop;
    } else if (typeof i.pop === 'object') {
      pop = {
        ...pop,
        ...i.pop
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
          console.warn(`[st] Should specify modal parameter when type is modal or static`);
          item.type = 'none';
        } else {
          item.modal = { ...{ paramsName: 'record', size: 'lg' }, ...modal, ...item.modal };
        }
      }

      if (item.type === 'drawer') {
        if (item.drawer == null || item.drawer.component == null) {
          console.warn(`[st] Should specify drawer parameter when type is drawer`);
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
          ...(typeof item.icon === 'string' ? { type: item.icon } : item.icon)
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

  private btnCoerceIf(list: STColumnButton[]): void {
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

  private fixedCoerce(list: _STColumn[]): void {
    const countReduce = (a: number, b: _STColumn) => a + +b.width!.toString().replace('px', '');
    // left width
    list
      .filter(w => w.fixed && w.fixed === 'left' && w.width)
      .forEach((item, idx) => (item._left = `${list.slice(0, idx).reduce(countReduce, 0)}px`));
    // right width
    list
      .filter(w => w.fixed && w.fixed === 'right' && w.width)
      .reverse()
      .forEach((item, idx) => (item._right = `${idx > 0 ? list.slice(-idx).reduce(countReduce, 0) : 0}px`));
  }

  private sortCoerce(item: _STColumn): STSortMap {
    const res = this.fixSortCoerce(item);
    res.reName = {
      ...this.cog.sortReName,
      ...res.reName
    };
    return res;
  }

  private fixSortCoerce(item: _STColumn): STSortMap {
    if (typeof item.sort === 'undefined') {
      return { enabled: false };
    }

    let res: STSortMap = {};

    if (typeof item.sort === 'string') {
      res.key = item.sort;
    } else if (typeof item.sort !== 'boolean') {
      res = item.sort;
    } else if (typeof item.sort === 'boolean') {
      res.compare = (a, b) => a[item.indexKey!] - b[item.indexKey!];
    }

    if (!res.key) {
      res.key = item.indexKey;
    }

    res.enabled = true;

    return res;
  }

  private filterCoerce(item: _STColumn): STColumnFilter | null {
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
      res.menus = res.menus!.filter(w => this.acl.can(w.acl!));
    }

    if (res.menus!.length <= 0) {
      res = null;
    }

    return res;
  }

  private restoreRender(item: _STColumn): void {
    if (item.renderTitle) {
      item.__renderTitle =
        typeof item.renderTitle === 'string'
          ? this.rowSource.getTitle(item.renderTitle)
          : (item.renderTitle as TemplateRef<void>);
    }
    if (item.render) {
      item.__render =
        typeof item.render === 'string' ? this.rowSource.getRow(item.render) : (item.render as TemplateRef<void>);
    }
  }

  private widgetCoerce(item: _STColumn): void {
    if (item.type !== 'widget') return;
    if (item.widget == null || !this.stWidgetRegistry.has(item.widget.type)) {
      delete item.type;
      warn(`st: No widget for type "${item.widget?.type}"`);
    }
  }

  private genHeaders(rootColumns: _STColumn[]): { headers: _STHeader[][]; headerWidths: string[] | null } {
    const rows: _STHeader[][] = [];
    const widths: string[] = [];
    const fillRowCells = (columns: _STColumn[], colIndex: number, rowIndex = 0): number[] => {
      // Init rows
      rows[rowIndex] = rows[rowIndex] || [];

      let currentColIndex = colIndex;
      const colSpans: number[] = columns.map(column => {
        const cell: STColumnGroupType = {
          column,
          colStart: currentColIndex,
          hasSubColumns: false
        };

        let colSpan = 1;

        const subColumns = column.children;
        if (Array.isArray(subColumns) && subColumns.length > 0) {
          colSpan = fillRowCells(subColumns, currentColIndex, rowIndex + 1).reduce((total, count) => total + count, 0);
          cell.hasSubColumns = true;
        } else {
          widths.push((cell.column.width as string) || '');
        }

        if ('colSpan' in column) {
          colSpan = column.colSpan!;
        }

        if ('rowSpan' in column) {
          cell.rowSpan = column.rowSpan;
        }

        cell.colSpan = colSpan;
        cell.colEnd = cell.colStart + colSpan - 1;
        rows[rowIndex].push(cell as NzSafeAny);

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
        if (!('rowSpan' in cell) && !(cell as _STHeader).hasSubColumns) {
          (cell as _STHeader).rowSpan = rowCount - rowIndex;
        }
      });
    }

    return { headers: rows, headerWidths: rowCount > 1 ? widths : null };
  }

  private cleanCond(list: _STColumn[]): _STColumn[] {
    const res: _STColumn[] = [];
    const copyList = deepCopy(list);
    for (const item of copyList) {
      if (item.iif && !item.iif(item)) {
        continue;
      }
      if (this.acl && item.acl && !this.acl.can(item.acl)) {
        continue;
      }
      if (Array.isArray(item.children) && item.children.length > 0) {
        item.children = this.cleanCond(item.children);
      }
      res.push(item);
    }
    return res;
  }

  process(
    list: STColumn[],
    options: STColumnSourceProcessOptions
  ): { columns: _STColumn[]; headers: _STHeader[][]; headerWidths: string[] | null } {
    if (!list || list.length === 0) throw new Error(`[st]: the columns property muse be define!`);

    const { noIndex } = this.cog;
    let checkboxCount = 0;
    let radioCount = 0;
    let point = 0;
    const columns: _STColumn[] = [];

    const processItem = (item: _STColumn): _STColumn => {
      // index
      if (item.index) {
        if (!Array.isArray(item.index)) {
          item.index = item.index.toString().split('.');
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
        item.selections = item.selections.filter(w => this.acl.can(w.acl!));
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
        item.yn = { truth: true, ...this.cog.yn, ...item.yn };
      }
      // date
      if (item.type === 'date') {
        item.dateFormat = item.dateFormat || this.cog.date?.format;
      }
      if (
        (item.type === 'link' && typeof item.click !== 'function') ||
        (item.type === 'badge' && item.badge == null) ||
        (item.type === 'tag' && item.tag == null) ||
        (item.type === 'enum' && item.enum == null)
      ) {
        item.type = '';
      }
      item._isTruncate = !!item.width && options.widthMode.strictBehavior === 'truncate' && item.type !== 'img';
      // className
      if (!item.className) {
        item.className = (
          {
            number: 'text-right',
            currency: 'text-right',
            date: 'text-center'
          } as NzSafeAny
        )[item.type!];
      }
      item._className = item.className || (item._isTruncate ? 'text-truncate' : null);
      // width
      if (typeof item.width === 'number') {
        item._width = item.width;
        item.width = `${item.width}px`;
      }
      item._left = false;
      item._right = false;
      item.safeType = item.safeType ?? options.safeType;

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
      // resizable
      item.resizable = {
        disabled: true,
        bounds: 'window',
        minWidth: 60,
        maxWidth: 360,
        preview: true,
        ...options.resizable,
        ...(typeof item.resizable === 'boolean' ? ({ disabled: !item.resizable } as STResizable) : item.resizable)
      };

      item.__point = point++;

      return item;
    };

    const processList = (data: _STColumn[]): void => {
      for (const item of data) {
        columns.push(processItem(item));
        if (Array.isArray(item.children)) {
          processList(item.children);
        }
      }
    };

    const copyList = this.cleanCond(list as _STColumn[]);
    processList(copyList);

    if (checkboxCount > 1) {
      throw new Error(`[st]: just only one column checkbox`);
    }
    if (radioCount > 1) {
      throw new Error(`[st]: just only one column radio`);
    }

    this.fixedCoerce(columns as _STColumn[]);
    return {
      columns: columns.filter(w => !Array.isArray(w.children) || w.children.length === 0),
      ...this.genHeaders(copyList)
    };
  }

  restoreAllRender(columns: _STColumn[]): void {
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

  cleanFilter(col: _STColumn): this {
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
