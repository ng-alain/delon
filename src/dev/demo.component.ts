import { Component } from '@angular/core';

import { dateTimePickerUtil } from '@delon/util/date-time';

@Component({
  selector: 'app-demo',
  template: `
    <p>value: {{ value | _date }}</p>
    <nz-date-picker
      [(ngModel)]="value"
      nzFormat="yyyy-MM-dd HH:mm:ss"
      [nzDisabledDate]="disabledDate"
      [nzDisabledTime]="disabledDateTime"
      nzShowTime
    ></nz-date-picker>
    <br />
    <nz-date-picker nzMode="month" [nzDisabledDate]="disabledDate"></nz-date-picker>
    <br />
    <nz-date-picker nzMode="year" [nzDisabledDate]="disabledDate"></nz-date-picker>
    <br />
    <p>values: {{ values }}</p>
    <nz-range-picker
      [(ngModel)]="values"
      [nzDisabledDate]="disabledDate"
      [nzDisabledTime]="disabledDateTime"
      nzShowTime
      nzShowNow
      nzFormat="yyyy-MM-dd HH:mm:ss"
    ></nz-range-picker>
  `
})
export class DemoComponent {
  value: Date;
  values: Date[];
  disabledDate = dateTimePickerUtil.disabledBeforeDate();
  disabledDateTime = dateTimePickerUtil.disabledBeforeTime({ offsetSeconds: 60 * 5 });
  // disabledDate = dateTimePickerUtil.disabledAfterDate();
  // disabledDateTime = dateTimePickerUtil.disabledAfterTime();
}
