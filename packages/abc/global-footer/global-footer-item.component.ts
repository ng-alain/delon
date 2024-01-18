import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute
} from '@angular/core';

@Component({
  selector: 'global-footer-item',
  exportAs: 'globalFooterItem',
  template: ` <ng-template #host><ng-content /></ng-template> `,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true
})
export class GlobalFooterItemComponent {
  @ViewChild('host', { static: true }) host!: TemplateRef<void>;

  @Input() href?: string;
  @Input({ transform: booleanAttribute }) blankTarget?: boolean;
}
