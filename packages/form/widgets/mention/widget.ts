import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { map, tap } from 'rxjs';

import { ControlUIWidget, DelonFormModule, SFSchemaEnum, getData, getEnum } from '@delon/form';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzInputModule } from 'ng-zorro-antd/input';
import { MentionOnSearchTypes, NzMentionComponent, NzMentionModule } from 'ng-zorro-antd/mention';

import type { SFMentionWidgetSchema } from './schema';

@Component({
  selector: 'sf-mention',
  template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-mention
      #mentions
      [nzSuggestions]="data"
      [nzValueWith]="i.valueWith"
      [nzLoading]="loading"
      [nzNotFoundContent]="i.notFoundContent"
      [nzPlacement]="i.placement"
      [nzPrefix]="i.prefix"
      (nzOnSelect)="_select($event)"
      (nzOnSearchChange)="_search($event)"
    >
      @if (ui.inputStyle === 'textarea') {
        <textarea
          nzMentionTrigger
          nz-input
          [attr.id]="id"
          [disabled]="disabled"
          [attr.disabled]="disabled"
          [nzSize]="ui.size!"
          [ngModel]="value"
          (ngModelChange)="setValue($event)"
          [attr.maxLength]="schema.maxLength ?? null"
          [attr.placeholder]="ui.placeholder"
          cdkTextareaAutosize
          [cdkAutosizeMinRows]="i.autosize?.minRows ?? 1"
          [cdkAutosizeMaxRows]="i.autosize?.maxRows ?? 0"
        >
        </textarea>
      } @else {
        <input
          nzMentionTrigger
          nz-input
          [attr.id]="id"
          [disabled]="disabled"
          [attr.disabled]="disabled"
          [nzSize]="ui.size!"
          [ngModel]="value"
          (ngModelChange)="setValue($event)"
          [attr.maxLength]="schema.maxLength ?? null"
          [attr.placeholder]="ui.placeholder"
          autocomplete="off"
        />
      }
    </nz-mention>
  </sf-item-wrap>`,
  encapsulation: ViewEncapsulation.None,
  imports: [FormsModule, DelonFormModule, NzInputModule, NzMentionModule, CdkTextareaAutosize]
})
export class MentionWidget extends ControlUIWidget<SFMentionWidgetSchema> implements OnInit {
  static readonly KEY = 'mention';

  @ViewChild('mentions', { static: true }) private mentionChild!: NzMentionComponent;
  data: SFSchemaEnum[] = [];
  i: NzSafeAny;
  loading = false;

  ngOnInit(): void {
    const { valueWith, notFoundContent, placement, prefix, autosize } = this.ui;
    this.i = {
      valueWith: valueWith ?? (item => item.label),
      notFoundContent: notFoundContent ?? '无匹配结果，轻敲空格完成输入',
      placement: placement ?? 'bottom',
      prefix: prefix ?? '@',
      autosize: typeof autosize === 'undefined' ? true : this.ui.autosize
    };

    const { minimum, maximum } = this.schema;
    const min = typeof minimum !== 'undefined' ? minimum : -1;
    const max = typeof maximum !== 'undefined' ? maximum : -1;

    if (!this.ui.validator && (min !== -1 || max !== -1)) {
      this.ui.validator = (() => {
        const count = this.mentionChild.getMentions().length;
        if (min !== -1 && count < min) {
          return [{ keyword: 'mention', message: `最少提及 ${min} 次` }];
        }
        if (max !== -1 && count > max) {
          return [{ keyword: 'mention', message: `最多提及 ${max} 次` }];
        }
        return null;
      }) as NzSafeAny;
    }
  }

  reset(): void {
    getData(this.schema, this.ui, null).subscribe(list => {
      this.data = list;
      this.detectChanges();
    });
  }

  _select(options: NzSafeAny): void {
    if (this.ui.select) this.ui.select(options);
  }

  _search(option: MentionOnSearchTypes): void {
    if (typeof this.ui.loadData !== 'function') return;

    this.loading = true;
    this.ui
      .loadData(option)
      .pipe(
        tap(() => (this.loading = false)),
        map(res => getEnum(res, null, this.schema.readOnly!))
      )
      .subscribe(res => {
        this.data = res;
        this.detectChanges(true);
      });
  }
}
