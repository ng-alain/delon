import { Component, Input } from '@angular/core';

@Component({
  selector: 'na-avatar-list-item, [na-avatar-list-item]',
  template: `<ng-content></ng-content>`,
})
export class NaAvatarListItemComponent {
  @Input() src: string;
  @Input() text: string;
  @Input() icon: string;
  @Input() tips: string;
}
