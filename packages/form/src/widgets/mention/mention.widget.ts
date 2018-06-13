import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { ControlWidget } from '../../widget';
import { getData, getEnum } from '../../utils';
import { SFSchemaEnum, SFSchemaEnumType } from '../../schema';
import { FormProperty, PropertyGroup } from '../../model/form.property';
import { NzMentionComponent } from 'ng-zorro-antd';

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
            [nzSize]="ui.size"
            [ngModel]="value"
            (ngModelChange)="setValue($event)"
            [attr.maxLength]="schema.maxLength || null"
            [attr.placeholder]="ui.placeholder"
            [nzAutosize]="ui.autosize">
          </textarea>
        </ng-container>

      </nz-mention>

    </sf-item-wrap>
    `,
  preserveWhitespaces: false,
})
export class MentionWidget extends ControlWidget implements OnInit {
  @ViewChild('mentions') mentionChild: NzMentionComponent;
  data: SFSchemaEnum[] = [];
  i: any;
  loading = false;

  ngOnInit(): void {
    this.i = {
      valueWith: this.ui.valueWith || (item => item.label),
      notFoundContent:
        this.ui.notFoundContent || '无匹配结果，轻敲空格完成输入',
      placement: this.ui.placement || 'bottom',
      prefix: this.ui.prefix || '@',
    };
    const min =
        typeof this.schema.minimum !== 'undefined' ? this.schema.minimum : -1,
      max =
        typeof this.schema.maximum !== 'undefined' ? this.schema.maximum : -1;
    if (!this.ui.validator && (min !== -1 || max !== -1)) {
      this.ui.validator = (
        value: any,
        formProperty: FormProperty,
        form: PropertyGroup,
      ) => {
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

  reset(value: any) {
    getData(this.schema, this.ui, null).subscribe(list => {
      this.data = list;
      this.detectChanges();
    });
  }

  _select(options: any) {
    if (this.ui.select) this.ui.select(options);
  }

  _search(option: any) {
    if (typeof this.ui.loadData !== 'function') return;

    this.loading = true;
    (this.ui.loadData(option) as Observable<SFSchemaEnumType[]>)
      .pipe(tap(() => (this.loading = false)), map(res => getEnum(res, null)))
      .subscribe(res => {
        this.data = res;
        this.cd.detectChanges();
      });
  }
}
