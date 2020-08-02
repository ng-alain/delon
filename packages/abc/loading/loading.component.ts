import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { LoadingCustom, LoadingIcon, LoadingShowOptions } from './loading.types';

@Component({
  selector: 'loading-default',
  templateUrl: './loading.component.html',
  host: {
    '[class.loading-default]': 'true',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LoadingDefaultComponent {
  options: LoadingShowOptions;

  get icon(): LoadingIcon {
    return this.options.icon!;
  }

  get custom(): LoadingCustom {
    return this.options.custom!;
  }
}
