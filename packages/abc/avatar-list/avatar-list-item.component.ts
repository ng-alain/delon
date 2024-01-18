import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'avatar-list-item, [avatar-list-item]',
  exportAs: 'avatarListItem',
  template: `<ng-content />`,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true
})
export class AvatarListItemComponent {
  @Input() src?: string;
  @Input() text?: string;
  @Input() icon?: string;
  @Input() tips?: string;
}
