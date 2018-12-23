import { Component, Inject, Input, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { copy, deepCopy } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { CodeService } from '../../../core/code.service';
import { I18NService } from './../../../core/i18n/service';

@Component({
  selector: 'code-box',
  templateUrl: './code-box.component.html',
  host: {
    '[class.code-box]': 'true',
    '[class.expand]': 'expand',
  },
})
export class CodeBoxComponent implements OnDestroy {
  private i18n$: Subscription;
  private _item: any;
  private _orgItem: any;
  @Input()
  set item(value: any) {
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
      urls: value.urls,
    };
    this._item = ret;
  }
  get item() {
    return this._item;
  }

  @Input()
  expand: boolean = false;

  constructor(
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private msg: NzMessageService,
    private codeSrv: CodeService,
    private sanitizer: DomSanitizer,
  ) {
    this.i18n$ = this.i18n.change
      .pipe(filter(w => !!this._orgItem))
      .subscribe(() => {
        this.item.title = this.i18n.get(this._orgItem.meta.title);
        this.item.summary = this.i18n.get(this._orgItem.summary);
      });
  }

  handle() {
    this.expand = !this.expand;
  }

  openOnStackBlitz() {
    this.codeSrv.openOnStackBlitz(
      this.item.code,
      this.i18n.get(this.item.meta.title),
      this.i18n.get(this.item.summary),
    );
  }

  onCopy(value: string) {
    copy(value).then(() =>
      this.msg.success(this.i18n.fanyi('app.demo.copied')),
    );
  }

  ngOnDestroy() {
    this.i18n$.unsubscribe();
  }
}
