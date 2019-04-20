import { Component, OnInit } from '@angular/core';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { getData, toBool } from '../../utils';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-select',
  templateUrl: './select.widget.html',
})
export class SelectWidget extends ControlWidget implements OnInit {
  i: any;
  data: SFSchemaEnum[];
  _value: any;
  hasGroup = false;

  ngOnInit(): void {
    this.i = {
      autoClearSearchValue: toBool(this.ui.autoClearSearchValue, true),
      allowClear: this.ui.allowClear,
      autoFocus: toBool(this.ui.autoFocus, false),
      dropdownClassName: this.ui.dropdownClassName || null,
      dropdownMatchSelectWidth: toBool(this.ui.dropdownMatchSelectWidth, true),
      serverSearch: toBool(this.ui.serverSearch, false),
      maxMultipleCount: this.ui.maxMultipleCount || Infinity,
      mode: this.ui.mode || 'default',
      notFoundContent: this.ui.notFoundContent,
      showSearch: toBool(this.ui.showSearch, true),
      tokenSeparators: this.ui.tokenSeparators || [],
      maxTagCount: this.ui.maxTagCount || null,
    };
  }

  reset(value: SFValue) {
    getData(this.schema, this.ui, this.formProperty.formData).subscribe(list => {
      this._value = value;
      this.data = list;
      this.hasGroup = list.filter(w => w.group === true).length > 0;
      this.detectChanges();
    });
  }

  change(values: SFValue) {
    if (this.ui.change) {
      this.ui.change(values);
    }
    this.setValue(values);
  }

  openChange(value: boolean) {
    if (this.ui.openChange) {
      this.ui.openChange(value);
    }
  }

  searchChange(text: string) {
    if (this.ui.onSearch) {
      this.ui.onSearch(text).then((res: SFSchemaEnum[]) => {
        this.data = res;
        this.detectChanges();
      });
      return;
    }
    this.detectChanges();
  }

  scrollToBottom() {
    if (this.ui.scrollToBottom) {
      this.ui.scrollToBottom();
    }
  }
}
