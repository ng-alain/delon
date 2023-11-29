/* eslint-disable @typescript-eslint/no-explicit-any */
import { NgClass, NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Inject,
  Input,
  OnInit,
  inject
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DomSanitizer } from '@angular/platform-browser';
import { filter } from 'rxjs';

import { ALAIN_I18N_TOKEN, I18nPipe } from '@delon/theme';
import { copy } from '@delon/util/browser';
import { deepCopy } from '@delon/util/other';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { AppService, CodeService, I18NService } from '@core';

import { EditButtonComponent } from '../edit-button/edit-button.component';

@Component({
  selector: 'code-box',
  templateUrl: './code-box.component.html',
  host: {
    '[class.code-box]': 'true',
    '[class.expand]': 'expand'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgStyle, NgClass, I18nPipe, NzToolTipModule, NzIconModule, EditButtonComponent]
})
export class CodeBoxComponent implements OnInit {
  private _item: any;
  private _orgItem: any;
  private destroy$ = inject(DestroyRef);
  copied = false;
  theme = 'default';

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
  ) {}

  ngOnInit(): void {
    this.appService.theme$.pipe(takeUntilDestroyed(this.destroy$)).subscribe(data => {
      this.theme = data;
      this.check();
    });
    this.i18n.change
      .pipe(
        filter(() => !!this._orgItem),
        takeUntilDestroyed(this.destroy$)
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
      this.codeSrv.openOnStackBlitz(this.item.title, this.item.code);
    } else {
      // this.msg.warning(`CodeSandbox does not support Angular 13, pls use StackBlitz!`);
      this.codeSrv.openOnCodeSandbox(this.item.title, this.item.code, includeCli);
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
}
