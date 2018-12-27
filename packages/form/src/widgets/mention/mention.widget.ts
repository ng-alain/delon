import { Component, OnInit, ViewChild } from '@angular/core';
import { NzMentionComponent } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SFValue } from '../../interface';
import { SFSchemaEnum, SFSchemaEnumType } from '../../schema';
import { getData, getEnum } from '../../utils';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-mention',
  template: `
    <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">

      <nz-mention #mentions
        [nzSuggestions]="data"
        [nzValueWith]="i.valueWith"
        [nzLoading]="loading"
        [nzNotFoundContent]="i.notFoundContent"
        [nzPlacement]="i.placement"
        [nzPrefix]="i.prefix"
        (nzOnSelect)="_select($event)"
        (nzOnSearchChange)="_search($event)">

        <ng-container *ngIf="ui.inputStyle !== 'textarea'">
          <input nzMentionTrigger nz-input
            [attr.id]="id"
            [disabled]="disabled"
            [attr.disabled]="disabled"
            [nzSize]="ui.size"
            [ngModel]="value"
            (ngModelChange)="setValue($event)"
            [attr.maxLength]="schema.maxLength || null"
            [attr.placeholder]="ui.placeholder"
            autocomplete="off">
        </ng-container>

        <ng-container *ngIf="ui.inputStyle === 'textarea'">
          <textarea nzMentionTrigger nz-input
            [attr.id]="id"
            [disabled]="disabled"
            [attr.disabled]="disabled"
            [nzSize]="ui.size"
            [ngModel]="value"
            (ngModelChange)="setValue($event)"
            [attr.maxLength]="schema.maxLength || null"
            [attr.placeholder]="ui.placeholder"
            [nzAutosize]="i.autosize">
          </textarea>
        </ng-container>

      </nz-mention>

    </sf-item-wrap>
    `,
})
export class MentionWidget extends ControlWidget implements OnInit {
  @ViewChild('mentions') mentionChild: NzMentionComponent;
  data: SFSchemaEnum[] = [];
  // tslint:disable-next-line:no-any
  i: any;
  loading = false;

  ngOnInit(): void {
    const { valueWith, notFoundContent, placement, prefix, autosize } = this.ui;
    this.i = {
      valueWith: valueWith || (item => item.label),
      notFoundContent: notFoundContent || '无匹配结果，轻敲空格完成输入',
      placement: placement || 'bottom',
      prefix: prefix || '@',
      autosize: typeof autosize === 'undefined' ? true : this.ui.autosize,
    };
    const min = typeof this.schema.minimum !== 'undefined' ? this.schema.minimum : -1;
    const max = typeof this.schema.maximum !== 'undefined' ? this.schema.maximum : -1;

    if (!this.ui.validator && (min !== -1 || max !== -1)) {
      this.ui.validator = () => {
        const count = this.mentionChild.getMentions().length;
        if (min !== -1 && count < min) {
          return [{ keyword: 'mention', message: `最少提及 ${min} 次` }];
        }
        if (max !== -1 && count > max) {
          return [{ keyword: 'mention', message: `最多提及 ${max} 次` }];
        }
        return null;
      };
    }
  }

  reset(value: SFValue) {
    getData(this.schema, this.ui, null).subscribe(list => {
      this.data = list;
      this.detectChanges();
    });
  }

  // tslint:disable-next-line:no-any
  _select(options: any) {
    if (this.ui.select) this.ui.select(options);
  }

  // tslint:disable-next-line:no-any
  _search(option: any) {
    if (typeof this.ui.loadData !== 'function') return;

    this.loading = true;
    (this.ui.loadData(option) as Observable<SFSchemaEnumType[]>)
      .pipe(tap(() => (this.loading = false)), map(res => getEnum(res, null, this.schema.readOnly)))
      .subscribe(res => {
        this.data = res;
        this.cd.detectChanges();
      });
  }
}
