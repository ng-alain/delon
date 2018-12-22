import { Component, Input } from '@angular/core';

@Component({
  selector: 'avatar-list-item, [avatar-list-item]',
  template: `<ng-content></ng-content>`,
})
export class AvatarListItemComponent {
  @Input() src: string;
  @Input() text: string;
  @Input() icon: string;
  @Input() tips: string;
}
