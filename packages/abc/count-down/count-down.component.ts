import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import { addSeconds, format } from 'date-fns';
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';

@Component({
  selector: 'count-down',
  exportAs: 'countDown',
  template: `@if (config) {
    <countdown #cd [config]="config" (event)="handleEvent($event)" />
  }`,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CountdownComponent]
})
export class CountDownComponent {
  @ViewChild('cd', { static: false }) readonly instance!: CountdownComponent;

  @Input() config?: CountdownConfig;

  /**
   * 目标时间
   */
  @Input()
  set target(value: number | Date) {
    this.config = {
      format: `HH:mm:ss`,
      stopTime: typeof value === 'number' ? addSeconds(new Date(), value).valueOf() : +format(value, 't')
    };
  }

  @Output() readonly event = new EventEmitter<CountdownEvent>();

  handleEvent(e: CountdownEvent): void {
    this.event.emit(e);
  }
}
