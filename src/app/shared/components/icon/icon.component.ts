import { Component, Input } from '@angular/core';

@Component({
  selector: 'nz-icon',
  template: `<i nz-icon [type]="type"></i>`,
})
export class IconComponent {
  @Input()
  type: string;
}
