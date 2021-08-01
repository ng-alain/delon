import {
  AfterViewInit,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  EventEmitter,
  Host,
  Injector,
  Input,
  OnDestroy,
  Optional,
  Output,
  TemplateRef
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';

import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzDatePickerComponent, NzRangePickerComponent } from 'ng-zorro-antd/date-picker';
import { DatePickerService } from 'ng-zorro-antd/date-picker/date-picker.service';

import { AlainConfigService, AlainDateRangePickerShortcut, AlainDateRangePickerShortcutItem } from '@delon/util/config';
import { fixEndTimeOfRange, getTimeDistance } from '@delon/util/date-time';
import { assert, deepMergeKey } from '@delon/util/other';

import { RangePickerShortcutTplComponent } from './range-shortcut.component';

@Directive({
  selector: 'nz-range-picker[extend]',
  exportAs: 'extendRangePicker'
})
export class RangePickerDirective implements OnDestroy, AfterViewInit {
  static ngAcceptInputType_shortcut: AlainDateRangePickerShortcut | string | null;

  private defaultShortcuts: AlainDateRangePickerShortcut;
  private _shortcut: AlainDateRangePickerShortcut;
  private destroy$ = new Subject<void>();
  private shortcutFactory: ComponentRef<RangePickerShortcutTplComponent> | null = null;
  start: Date | null = null;
  end: Date | null = null;

  @Input()
  set shortcut(val: AlainDateRangePickerShortcut | null) {
    const item = deepMergeKey(
      { list: [] },
      true,
      this.defaultShortcuts,
      val == null ? {} : val
    ) as AlainDateRangePickerShortcut;
    if (typeof val !== 'object') {
      item.enabled = val !== false;
    }
    (item.list || []).forEach(i => {
      i._text = this.dom.bypassSecurityTrustHtml(i.text);
    });
    this._shortcut = item;
    this.refreshShortcut();
  }
  get shortcut(): AlainDateRangePickerShortcut | null {
    return this._shortcut;
  }
  @Input() ngModelEnd: NzSafeAny;
  @Output() readonly ngModelEndChange = new EventEmitter<NzSafeAny>();

  private get dp(): NzDatePickerComponent {
    return this.nativeComp.datePicker;
  }

  private get srv(): DatePickerService {
    return this.dp.datePickerService;
  }

  constructor(
    private dom: DomSanitizer,
    configSrv: AlainConfigService,
    @Host() @Optional() private nativeComp: NzRangePickerComponent,
    private resolver: ComponentFactoryResolver,
    private injector: Injector
  ) {
    assert(
      !!nativeComp,
      `It should be attached to nz-range-picker component, for example: '<nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end" shortcut></nz-range-picker>'`
    );
    const cog = configSrv.merge('dataRange', {
      nzFormat: 'yyyy-MM-dd',
      nzAllowClear: true,
      nzAutoFocus: false,
      nzPopupStyle: { position: 'relative' },
      nzShowToday: true,
      shortcuts: {
        enabled: false,
        closed: true,
        list: [
          {
            text: '今天',
            fn: () => getTimeDistance('today')
          },
          {
            text: '昨天',
            fn: () => getTimeDistance('yesterday')
          },
          {
            text: '近3天',
            fn: () => getTimeDistance(-2)
          },
          {
            text: '近7天',
            fn: () => getTimeDistance(-6)
          },
          {
            text: '本周',
            fn: () => getTimeDistance('week')
          },
          {
            text: '本月',
            fn: () => getTimeDistance('month')
          },
          {
            text: '全年',
            fn: () => getTimeDistance('year')
          }
        ]
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
      const dates = (value && this.ngModelEnd ? [value, this.ngModelEnd] : []).filter(w => !!w);
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
      this.ngModelEnd = end;
      this.ngModelEndChange.emit(end);
    };
  }

  private refreshShortcut(): void {
    if (!this._shortcut) {
      return;
    }
    const { enabled, list } = this._shortcut;
    let extraFooter: TemplateRef<NzSafeAny> | undefined;
    if (!this.nativeComp || !enabled) {
      extraFooter = undefined;
    } else {
      if (!this.shortcutFactory) {
        const factory = this.resolver.resolveComponentFactory(RangePickerShortcutTplComponent);
        this.shortcutFactory = factory.create(this.injector);
      }
      const { instance } = this.shortcutFactory;
      instance.list = list!;
      instance.click = (item: AlainDateRangePickerShortcutItem) => {
        const res = item.fn([this.start, this.end]);
        this.srv.setValue(this.srv.makeValue(res as Date[]));
        this.dp.onChangeFn(res);
        this.dp.close();
      };
      extraFooter = instance.tpl;
    }
    this.nativeComp.datePicker.extraFooter = extraFooter;
    Promise.resolve().then(() => this.cd());
  }

  ngAfterViewInit(): void {
    this.overrideNative();
    this.refreshShortcut();
  }

  private destoryShortcut(): void {
    if (this.shortcutFactory != null) {
      this.shortcutFactory.destroy();
    }
  }

  ngOnDestroy(): void {
    this.destoryShortcut();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
