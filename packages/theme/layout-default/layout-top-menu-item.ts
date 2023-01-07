import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

import { BooleanInput, InputBoolean } from '@delon/util/decorator';

@Component({
  selector: 'layout-default-top-menu-item',
  template: `<ng-content></ng-content>`,
  host: {
    '[class.alain-default__nav-item]': `true`,
    '[class.alain-default__top-menu-item]': `true`,
    '[class.alain-default__top-menu-item-selected]': `selected`,
    '[class.alain-default__top-menu-item-disabled]': `disabled`
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LayoutDefaultTopMenuItemComponent {
  static ngAcceptInputType_selected: BooleanInput;
  static ngAcceptInputType_disabled: BooleanInput;

  @Input() @InputBoolean() selected = false;
  @Input() @InputBoolean() disabled = false;
}
