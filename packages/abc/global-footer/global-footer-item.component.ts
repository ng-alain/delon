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
  readonly host = viewChild.required<TemplateRef<void>>('host');
  readonly href = input<string>();
  readonly blankTarget = input(false, { transform: booleanAttribute });
}
