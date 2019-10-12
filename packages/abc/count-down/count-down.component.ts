import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import addSeconds from 'date-fns/add_seconds';
import format from 'date-fns/format';
import { CountdownEvent, CountdownConfig, CountdownComponent } from 'ngx-countdown';
import { warnDeprecation } from 'ng-zorro-antd/core';

@Component({
  selector: 'count-down',
  exportAs: 'countDown',
  template: `
    <countdown #cd *ngIf="config" [config]="config" (event)="handleEvent($event)"></countdown>
  `,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CountDownComponent implements OnInit {
  @ViewChild('cd', { static: false }) readonly instance: CountdownComponent;

  @Input() config: CountdownConfig;

  /**
   * 目标时间
   */
  @Input()
  set target(value: number | Date) {
    this.config = {
      format: `HH:mm:ss`,
      stopTime: typeof value === 'number' ? addSeconds(new Date(), value).valueOf() : +format(value, 'x'),
    };
  }

  @Output() readonly begin = new EventEmitter<void>();
  @Output() readonly notify = new EventEmitter<number>();
  @Output() readonly end = new EventEmitter<void>();

  @Output() readonly event = new EventEmitter<CountdownEvent>();

  ngOnInit(): void {
    if (this.begin.observers.length > 0 || this.notify.observers.length > 0 || this.end.observers.length > 0) {
      warnDeprecation(`begin, notify, end events is deprecated and will be removed in 9.0.0. Please use 'event' instead.`);
    }
  }

  handleEvent(e: CountdownEvent) {
    switch (e.action) {
      case 'start':
        this.begin.emit();
        break;
      case 'notify':
        this.notify.emit(e.left);
        break;
      case 'done':
        this.end.emit();
        break;
    }
    this.event.emit(e);
  }
}
