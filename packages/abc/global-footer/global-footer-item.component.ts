import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  booleanAttribute,
  input,
  viewChild
} from '@angular/core';

@Component({
  selector: 'global-footer-item',
  exportAs: 'globalFooterItem',
  template: `<ng-template #host><ng-content /></ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class GlobalFooterItemComponent {
  host = viewChild.required<TemplateRef<void>>('host');
  // @ViewChild('host', { static: true }) host!: TemplateRef<void>;
  href = input<string>();
  blankTarget = input(false, { transform: booleanAttribute });
}
