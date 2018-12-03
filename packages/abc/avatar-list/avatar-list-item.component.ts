import { Component, Input } from '@angular/core';
import { AvatarListComponent } from './avatar-list.component';

@Component({
  selector: 'avatar-list-item, [avatar-list-item]',
  templateUrl: './avatar-list-item.component.html',
  host: {
    '[class.avatar-list__item]': 'true',
  },
})
export class AvatarListItemComponent {
  @Input() src: string;
  @Input() text: string;
  @Input() icon: string;
  @Input() tips: string;

  get size() {
    return this.p._avatarSize;
  }

  constructor(private p: AvatarListComponent) {}
}
