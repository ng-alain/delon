import { Host, Inject, Injectable, Optional } from '@angular/core';
import { ACLService } from '@delon/acl';
import { AlainI18NService, ALAIN_I18N_TOKEN } from '@delon/theme';
import { deepCopy } from '@delon/util';

import { STRowSource } from './table-row.directive';
import { STConfig } from './table.config';
import {
  STColumn,
  STColumnButton,
  STColumnFilter,
  STColumnSort,
} from './table.interfaces';

export interface STSortMap extends STColumnSort {
  /** 是否启用排序 */
  enabled?: boolean;
}

@Injectable()
export class STColumnSource {
  constructor(
    @Host() private rowSource: STRowSource,
    @Optional() private acl: ACLService,
    @Optional() @Inject(ALAIN_I18N_TOKEN) private i18nSrv: AlainI18NService,
    private cog: STConfig,
  ) { }

  private btnCoerce(list: STColumnButton[]): STColumnButton[] {
    if (!list) return [];
    const ret: STColumnButton[] = [];
    const { modal, drawer, popTitle, btnIcon } = this.cog;

    for (const item of list) {
      if (this.acl && item.acl && !this.acl.can(item.acl)) {
        continue;
      }

      if (item.type === 'modal' || item.type === 'static') {
        // compatible
        if (item.component != null) {
          item.modal = {
            component: item.component,
            params: item.params,
            paramsName: item.paramName || modal.paramsName,
            size: item.size || modal.size,
            modalOptions: item.modalOptions || modal.modalOptions,
          };
        }
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

      if (item.pop === true) {
        item.popTitle = item.popTitle || popTitle;
      } else {
        item.pop = false;
      }

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
      if (!item.children) {
        item.children = [];
      } else {
        this.btnCoerceIf(item.children);
      }
    }
  }

  private fixedCoerce(list: STColumn[]) {
    const countReduce = (a: number, b: STColumn) =>
      a + +b.width.toString().replace('px', '');
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
    // compatible
    if (item.sorter && typeof item.sorter === 'function') {
      return {
        enabled: true,
        // tslint:disable-next-line:no-any
        default: item.sort as any,
        compare: item.sorter,
        key: item.sortKey || item.indexKey,
        reName: item.sortReName,
      };
    }

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

  private filterCoerce(item: STColumn): STColumnFilter {
    let res: STColumnFilter = null;
    // compatible
    if (item.filters && item.filters.length > 0) {
      res = {
        confirmText: item.filterConfirmText,
        clearText: item.filterClearText,
        default: item.filtered,
        // tslint:disable-next-line:no-any
        fn: item.filter as any,
        icon: item.filterIcon,
        key: item.filterKey || item.indexKey,
        menus: item.filters,
        multiple: item.filterMultiple,
        reName: item.filterReName,
      };
    } else {
      res = item.filter;
    }

    if (res == null || res.menus.length === 0) {
      return null;
    }

    if (typeof res.multiple === 'undefined') {
      res.multiple = true;
    }
    if (!res.confirmText) {
      res.confirmText = this.cog.filterConfirmText;
    }
    if (!res.clearText) {
      res.clearText = this.cog.filterClearText;
    }
    if (!res.icon) {
      res.icon = `filter`;
    }
    if (!res.key) {
      res.key = item.indexKey;
    }

    res.default = res.menus.findIndex(w => w.checked) !== -1;

    if (this.acl) {
      res.menus = res.menus.filter(w => this.acl.can(w.acl));
    }

    if (res.menus.length <= 0) {
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

  process(list: STColumn[]): STColumn[] {
    if (!list || list.length === 0)
      throw new Error(`[st]: the columns property muse be define!`);

    const { noIndex } = this.cog;
    let checkboxCount = 0;
    let radioCount = 0;
    let point = 0;
    const columns: STColumn[] = [];
    const copyColumens = deepCopy(list) as STColumn[];
    for (const item of copyColumens) {
      if (this.acl && item.acl && !this.acl.can(item.acl)) {
        continue;
      }
      // index
      if (item.index) {
        if (!Array.isArray(item.index)) {
          item.index = item.index.split('.');
        }
        item.indexKey = item.index.join('.');
      }
      // title
      if (item.i18n && this.i18nSrv) {
        item.title = this.i18nSrv.fanyi(item.i18n);
      }
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
        // compatible
        if (item.ynTruth != null) item.yn.truth = item.ynTruth;
        if (item.ynYes != null) item.yn.yes = item.ynYes;
        if (item.ynNo != null) item.yn.no = item.ynNo;
      }
      if (
        (item.type === 'link' && typeof item.click !== 'function') ||
        (item.type === 'badge' && item.badge == null) ||
        (item.type === 'tag' && item.tag == null)
      ) {
        // tslint:disable-next-line:no-any
        (item as any).type = '';
      }
      // className
      if (!item.className) {
        item.className = {
          number: 'text-right',
          currency: 'text-right',
          date: 'text-center',
        }[item.type];
      }

      // sorter
      item._sort = this.sortCoerce(item);
      // filter
      item.filter = this.filterCoerce(item);
      // buttons
      item.buttons = this.btnCoerce(item.buttons);
      // restore custom row
      this.restoreRender(item);

      item.__point = point++;
      columns.push(item);
    }
    if (checkboxCount > 1) {
      throw new Error(`[st]: just only one column checkbox`);
    }
    if (radioCount > 1) {
      throw new Error(`[st]: just only one column radio`);
    }

    this.fixedCoerce(columns);

    return columns;
  }

  restoreAllRender(columns: STColumn[]) {
    columns.forEach(i => this.restoreRender(i));
  }
}
