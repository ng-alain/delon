import { Injectable, Type } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { map, Observable, of } from 'rxjs';

import { yn } from '@delon/theme';
import { AlainCellConfig, AlainConfigService } from '@delon/util/config';
import { formatDate } from '@delon/util/date-time';
import { CurrencyService, formatMask } from '@delon/util/format';
import { deepMerge } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzI18nService } from 'ng-zorro-antd/i18n';

import type {
  CellFuValue,
  CellOptions,
  CellTextResult,
  CellTextUnit,
  CellType,
  CellWidget,
  CellWidgetFn
} from './cell.types';

@Injectable({ providedIn: 'root' })
export class CellService {
  private globalOptions!: AlainCellConfig;
  private widgets: { [key: string]: CellWidget } = {
    date: {
      type: 'fn',
      ref: (value, opt) => {
        return { text: formatDate(value as string, opt.date!.format!, this.nzI18n.getDateLocale()) };
      }
    },
    mega: {
      type: 'fn',
      ref: (value, opt) => {
        const res = this.currency.mega(value as number, opt.mega);
        return { text: res.value, unit: res.unitI18n };
      }
    },
    currency: {
      type: 'fn',
      ref: (value, opt) => {
        return { text: this.currency.format(value as number, opt.currency) };
      }
    },
    cny: {
      type: 'fn',
      ref: (value, opt) => {
        return { text: this.currency.cny(value as number, opt.cny) };
      }
    },
    boolean: {
      type: 'fn',
      ref: (value, opt) => {
        return { text: this.dom.bypassSecurityTrustHtml(yn(value as boolean, opt.boolean)) };
      }
    },
    img: {
      type: 'fn',
      ref: value => {
        return { text: Array.isArray(value) ? value : [value] };
      }
    }
  };

  constructor(
    configSrv: AlainConfigService,
    private nzI18n: NzI18nService,
    private currency: CurrencyService,
    private dom: DomSanitizer
  ) {
    this.globalOptions = configSrv.merge('cell', {
      date: { format: 'yyyy-MM-dd HH:mm:ss' },
      img: { size: 32 },
      default: { text: '-' }
    })!;
  }

  registerWidget(key: string, widget: Type<unknown>): void {
    this.widgets[key] = { type: 'widget', ref: widget };
  }

  getWidget(key: string): CellWidget | undefined {
    return this.widgets[key];
  }

  private genType(value: unknown, options: CellOptions): CellType {
    if (options.type != null) return options.type;

    const typeOf = typeof value;
    // When is timestamp
    if (typeOf === 'number' && /^[0-9]{13}$/g.test(value as string)) return 'date';
    if (value instanceof Date || options.date != null) return 'date';

    // Auto detection
    if (options.widget != null) return 'widget';
    else if (options.mega != null) return 'mega';
    else if (options.currency != null) return 'currency';
    else if (options.cny != null) return 'cny';
    else if (options.img != null) return 'img';
    else if (options.link != null) return 'link';
    else if (options.html != null) return 'html';
    else if (options.badge != null) return 'badge';
    else if (options.tag != null) return 'tag';
    else if (options.checkbox != null) return 'checkbox';
    else if (options.radio != null) return 'radio';
    else if (options.enum != null) return 'enum';
    else if (typeOf === 'number') return 'number';
    else if (typeOf === 'boolean' || options.boolean != null) return 'boolean';
    else return 'string';
  }

  fixOptions(options?: CellOptions): CellOptions {
    return deepMerge({}, this.globalOptions, options);
  }

  get(value: unknown, options?: CellOptions): Observable<CellTextResult> {
    const type = this.genType(value, { ...options });
    const opt = this.fixOptions(options);
    opt.type = type;
    const isSafeHtml =
      typeof value === 'object' &&
      typeof (value as NzSafeAny)?.getTypeName === 'function' &&
      (value as NzSafeAny)?.getTypeName() != null;

    let res: CellTextResult = {
      result:
        typeof value === 'object' && !isSafeHtml
          ? (value as CellTextUnit)
          : { text: value == null ? '' : isSafeHtml ? value : `${value}` },
      options: opt
    };

    const widget = this.widgets[type];
    if (widget?.type === 'fn') {
      res.result = (widget.ref as CellWidgetFn)(value, opt);
    }

    return (typeof value === 'function' ? (value as CellFuValue)(value, opt) : of(res.result)).pipe(
      map(text => {
        res.result = text;
        switch (type) {
          case 'badge':
            res.result = { color: 'default', ...(opt.badge?.data ?? {})[value as string] };
            break;
          case 'tag':
            res.result = (opt.tag?.data ?? {})[value as string];
            break;
          case 'enum':
            res.result = { text: (opt.enum ?? {})[value as string] };
            break;
          case 'html':
            res.safeHtml = opt.html?.safe;
            break;
          case 'string':
            if (isSafeHtml) res.safeHtml = 'safeHtml';
            break;
        }
        if (opt.mask != null) {
          res.result.text = formatMask(res.result.text as string, opt.mask);
        }
        return res;
      })
    );
  }
}
