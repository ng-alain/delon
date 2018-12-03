import { Component, Input, Output, EventEmitter } from '@angular/core';
import format from 'date-fns/format';
import addSeconds from 'date-fns/add_seconds';

@Component({
  selector: 'count-down',
  template: `
    <countdown *ngIf="config" [config]="config"
      (start)="_start()"
      (finished)="_finished()"
      (notify)="_notify($event)"></countdown>
  `,
})
export class CountDownComponent {
  @Input() config: any;

  /**
   * 目标时间
   */
  @Input()
  set target(value: number | Date) {
    this.config = {
      template: `$!h!:$!m!:$!s!`,
      stopTime:
        typeof value === 'number'
          ? addSeconds(new Date(), value).valueOf()
          : format(value, 'x'),
    };
  }

  @Output() readonly begin = new EventEmitter();
  @Output() readonly notify = new EventEmitter<number>();
  @Output() readonly end = new EventEmitter();

  _start() {
    this.begin.emit();
  }

  _notify(time: number) {
    this.notify.emit(time);
  }

  _finished() {
    this.end.emit();
  }
}
