import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import { addSeconds, format } from 'date-fns';
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';

@Component({
  selector: 'count-down',
  exportAs: 'countDown',
  template: `@if (cfg()) {
    <countdown #cd [config]="cfg()" (event)="event.emit($event)" />
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [CountdownComponent]
})
export class CountDownComponent {
  @ViewChild('cd', { static: false }) readonly instance!: CountdownComponent;

  readonly config = input<CountdownConfig>();
  readonly target = input<number | Date>();
  readonly event = output<CountdownEvent>();

  protected cfg = computed(() => {
    const value = this.target();
    const config = this.config();
    if (config) return config;

    return {
      format: `HH:mm:ss`,
      stopTime: typeof value === 'number' ? addSeconds(new Date(), value).valueOf() : +format(value as Date, 't')
    };
  });
}
