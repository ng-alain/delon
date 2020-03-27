import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MentionOnSearchTypes, NzMentionComponent } from 'ng-zorro-antd/mention';
import { map, tap } from 'rxjs/operators';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { getData, getEnum } from '../../utils';
import { ControlUIWidget } from '../../widget';
import { SFMentionWidgetSchema } from './schema';

@Component({
  selector: 'sf-mention',
  templateUrl: './mention.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class MentionWidget extends ControlUIWidget<SFMentionWidgetSchema> implements OnInit {
  @ViewChild('mentions', { static: true }) private mentionChild: NzMentionComponent;
  data: SFSchemaEnum[] = [];
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
      }) as any;
    }
  }

  reset(_value: SFValue) {
    getData(this.schema, this.ui, null).subscribe(list => {
      this.data = list;
      this.detectChanges();
    });
  }

  _select(options: any) {
    if (this.ui.select) this.ui.select(options);
  }

  _search(option: MentionOnSearchTypes) {
    if (typeof this.ui.loadData !== 'function') return;

    this.loading = true;
    this.ui
      .loadData(option)
      .pipe(
        tap(() => (this.loading = false)),
        map(res => getEnum(res, null, this.schema.readOnly!)),
      )
      .subscribe(res => {
        this.data = res;
        this.detectChanges(true);
      });
  }
}
