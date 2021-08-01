/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { AppService, CodeService, I18NService } from '@core';

import { NzMessageService } from 'ng-zorro-antd/message';

import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { copy, deepCopy } from '@delon/util';

@Component({
  selector: 'code-box',
  templateUrl: './code-box.component.html',
  host: {
    '[class.code-box]': 'true',
    '[class.expand]': 'expand'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeBoxComponent implements OnDestroy {
  private _item: any;
  private _orgItem: any;
  private destroy$ = new Subject();
  copied = false;
  theme = 'default';

  @Input()
  set item(value: any) {
    debugger;
    if (!this._orgItem) {
      this._orgItem = deepCopy(value);
    }
    const ret: any = {
      meta: value.meta,
      code: value.code.trim(),
      title: this.i18n.get(value.meta.title),
      summary: this.sanitizer.bypassSecurityTrustHtml(this.i18n.get(value.summary)),
      browser: +value.meta.browser > 0 ? +value.meta.browser : null,
      bg: value.meta.bg,
      urls: value.urls
    };
    this._item = ret;
  }
  get item(): any {
    return this._item;
  }
  @Input() type: 'default' | 'simple' = 'default';
  @Input() expand: boolean = false;

  constructor(
    private appService: AppService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private msg: NzMessageService,
    private codeSrv: CodeService,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {
    this.appService.theme$.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.theme = data;
      this.check();
    });
    this.i18n.change
      .pipe(
        filter(() => !!this._orgItem),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.item.title = this.i18n.get(this._orgItem.meta.title);
        this.item.summary = this.i18n.get(this._orgItem.summary);
        this.check();
      });
  }

  check(): void {
    this.cdr.markForCheck();
  }

  handle(): void {
    this.expand = !this.expand;
    this.check();
  }

  openOnlineIDE(ide: 'StackBlitz' | 'CodeSandbox' = 'StackBlitz', includeCli: boolean = false): void {
    if (ide === 'StackBlitz') {
      this.codeSrv.openOnStackBlitz(this.item.code);
    } else {
      this.codeSrv.openOnCodeSandbox(this.item.code, includeCli);
    }
  }

  onCopy(value: string): void {
    copy(value).then(() => {
      this.msg.success(this.i18n.fanyi('app.demo.copied'));
      this.copied = true;
      this.check();
      setTimeout(() => {
        this.copied = false;
        this.check();
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
