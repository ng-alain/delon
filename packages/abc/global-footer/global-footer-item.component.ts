import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { InputBoolean } from '@delon/util';

@Component({
  selector: 'global-footer-item',
  exportAs: 'globalFooterItem',
  template: `
    <ng-template #host><ng-content></ng-content></ng-template>
  `,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class GlobalFooterItemComponent {
  @ViewChild('host', { static: true }) host: ElementRef;

  @Input() href: string;
  @Input() @InputBoolean() blankTarget: boolean;
}
