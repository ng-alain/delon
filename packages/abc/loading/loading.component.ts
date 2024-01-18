import { Direction } from '@angular/cdk/bidi';
import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzSpinComponent } from 'ng-zorro-antd/spin';

import { LoadingCustom, LoadingIcon, LoadingShowOptions } from './loading.types';

@Component({
  selector: 'loading-default',
  templateUrl: './loading.component.html',
  host: {
    '[class.loading-default]': 'true',
    '[class.loading-default-rtl]': `dir === 'rtl'`
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NzSpinComponent, NzIconDirective, NgStyle]
})
export class LoadingDefaultComponent {
  options!: LoadingShowOptions;
  dir?: Direction = 'ltr';

  get icon(): LoadingIcon {
    return this.options.icon!;
  }

  get custom(): LoadingCustom {
    return this.options.custom!;
  }
}
