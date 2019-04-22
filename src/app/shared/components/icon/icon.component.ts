import { Component, Input } from '@angular/core';
import { InputBoolean } from '@delon/util';

@Component({
  selector: 'nz-icon',
  template: `
    <i nz-icon [type]="type" [theme]="theme" [spin]="spin" [twoToneColor]="twoToneColor" [iconfont]="iconfont"></i>
  `,
})
export class IconComponent {
  @Input()
  type: string;

  @Input()
  theme: 'fill' | 'outline' | 'twotone' = 'outline';

  @Input()
  @InputBoolean()
  spin = false;

  @Input()
  twoToneColor: string;

  @Input()
  iconfont: string;
}
