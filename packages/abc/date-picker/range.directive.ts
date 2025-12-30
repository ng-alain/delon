import {
  AfterViewInit,
  ComponentRef,
  Directive,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
  inject,
  input,
  model
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { DelonLocaleService } from '@delon/theme';
import { AlainConfigService, AlainDateRangePickerShortcut, AlainDateRangePickerShortcutItem } from '@delon/util/config';
import { fixEndTimeOfRange, getTimeDistance } from '@delon/util/date-time';
import { assert, deepMergeKey } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { toBoolean } from 'ng-zorro-antd/core/util';
import { NzDatePickerComponent, NzRangePickerComponent, type ɵDatePickerService } from 'ng-zorro-antd/date-picker';

import { RangePickerShortcutTplComponent } from './range-shortcut.component';

@Directive({
  selector: 'nz-range-picker[extend]',
  exportAs: 'extendRangePicker'
})
export class RangePickerDirective implements OnDestroy, AfterViewInit {
  private readonly dom = inject(DomSanitizer);
  private readonly vcr = inject(ViewContainerRef);
  private readonly nativeComp = inject(NzRangePickerComponent, { host: true, optional: true });
  private readonly cogSrv = inject(AlainConfigService);

  private defaultShortcuts: AlainDateRangePickerShortcut;
  private _shortcut: AlainDateRangePickerShortcut | null = null;
  private shortcutFactory: ComponentRef<RangePickerShortcutTplComponent> | null = null;
  start: Date | null = null;
  end: Date | null = null;
  private locale = inject(DelonLocaleService).getData('datePicker');

  readonly shortcut = input(null, {
    transform: (v: AlainDateRangePickerShortcut | string | null) => {
      const cog = deepMergeKey(
        { list: [] },
        true,
        this.defaultShortcuts,
        v == null ? {} : v
      ) as AlainDateRangePickerShortcut;
      if (typeof v !== 'object') {
        cog.enabled = toBoolean(v) !== false;
      }
      this._shortcut = cog;
      this.refreshShortcut();
      return cog;
    }
  });
  readonly ngModelEnd = model.required<NzSafeAny>();

  private get dp(): NzDatePickerComponent {
    return this.nativeComp!.datePicker;
  }

  private get srv(): ɵDatePickerService {
    return this.dp.datePickerService;
  }

  constructor() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      assert(
        !!this.nativeComp,
        `It should be attached to nz-range-picker component, for example: '<nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end" shortcut></nz-range-picker>'`
      );
    }
    const cog = this.cogSrv.merge('dataRange', {
      nzFormat: 'yyyy-MM-dd',
      nzAllowClear: true,
      nzAutoFocus: false,
      nzPopupStyle: { position: 'relative' },
      nzShowToday: true,
      shortcuts: {
        enabled: false,
        closed: true,
        list: ['today', 'yesterday', '-3', '-7', 'week', 'lastWeek', 'month', 'lastMonth', 'year']
      }
    })!;
    this.defaultShortcuts = { ...cog.shortcuts } as AlainDateRangePickerShortcut;
    Object.assign(this, cog);
  }

  private cd(): void {
    (this.dp as NzSafeAny).cdr.markForCheck();
  }

  private overrideNative(): void {
    const dp = this.dp;
    dp.writeValue = (value: Date) => {
      const dates = (value && this.ngModelEnd() ? [value, this.ngModelEnd()] : []).filter(w => !!w);
      this.srv.setValue(this.srv.makeValue(dates));
      this.start = dates.length > 0 ? dates[0] : null;
      this.end = dates.length > 0 ? dates[1] : null;
      this.cd();
    };

    const oldOnChangeFn = dp.onChangeFn;
    dp.onChangeFn = (list: Array<Date | null>) => {
      let start: Date | null = null;
      let end: Date | null = null;
      if (list.length > 0 && list.filter(w => w != null).length === 2) {
        [start, end] = fixEndTimeOfRange([list[0]!, list[1]!]);
      }
      this.start = start;
      this.end = end;
      oldOnChangeFn(start);
      this.ngModelEnd.set(end);
    };
  }

  private refreshShortcut(): void {
    if (!this._shortcut) {
      return;
    }
    const { enabled } = this._shortcut;
    const list = (this._shortcut.list ?? []).map(i => {
      let item: AlainDateRangePickerShortcutItem = typeof i === 'string' ? ({} as AlainDateRangePickerShortcutItem) : i;
      if (typeof i === 'string') {
        switch (i) {
          case 'today': {
            item.fn = () => getTimeDistance('today');
            item.text = this.locale.today;
            break;
          }
          case 'yesterday': {
            item.fn = () => getTimeDistance('yesterday');
            item.text = this.locale.yesterday;
            break;
          }
          case '-3': {
            item.fn = () => getTimeDistance(-2);
            item.text = this.locale.last3Days;
            break;
          }
          case '-7': {
            item.fn = () => getTimeDistance(-6);
            item.text = this.locale.last7Days;
            break;
          }
          case 'week': {
            item.fn = () => getTimeDistance('week');
            item.text = this.locale.thisWeek;
            break;
          }
          case 'lastWeek': {
            item.fn = () => getTimeDistance('-week');
            item.text = this.locale.lastWeek;
            break;
          }
          case 'month': {
            item.fn = () => getTimeDistance('month');
            item.text = this.locale.thisMonth;
            break;
          }
          case 'lastMonth': {
            item.fn = () => getTimeDistance('-month');
            item.text = this.locale.lastMonth;
            break;
          }
          case 'year': {
            item.fn = () => getTimeDistance('year');
            item.text = this.locale.thisYear;
            break;
          }
        }
      }
      item._text = this.dom.bypassSecurityTrustHtml(item.text);
      return item;
    });
    let extraFooter: TemplateRef<NzSafeAny> | undefined;
    if (!this.nativeComp || !enabled) {
      extraFooter = undefined;
    } else {
      if (!this.shortcutFactory) {
        this.shortcutFactory = this.vcr.createComponent(RangePickerShortcutTplComponent);
      }
      const instance = this.shortcutFactory.instance;
      instance.list = list;
      instance.click = (item: AlainDateRangePickerShortcutItem) => {
        const res = item.fn([this.start, this.end]);
        this.srv.setValue(this.srv.makeValue(res as Date[]));
        this.dp.onChangeFn(res);
        this.dp.close();
      };
      extraFooter = instance.tpl();
    }
    this.nativeComp!.datePicker.extraFooter = extraFooter;
    Promise.resolve().then(() => this.cd());
  }

  ngAfterViewInit(): void {
    this.overrideNative();
    this.refreshShortcut();
  }

  ngOnDestroy(): void {
    this.shortcutFactory?.destroy();
  }
}
