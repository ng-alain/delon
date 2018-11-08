import { Component, Input, QueryList, ContentChildren } from '@angular/core';
import { AvatarListItemComponent } from './avatar-list-item.component';

@Component({
  selector: 'avatar-list',
  templateUrl: './avatar-list.component.html',
  host: { '[class.avatar-list]': 'true' },
  preserveWhitespaces: false,
})
export class AvatarListComponent {
  _size = '';

  _avatarSize = '';

  @Input()
  set size(value: 'large' | 'small' | 'mini' | 'default') {
    this._size = value === 'default' ? '' : value;
    switch (value) {
      case 'large':
      case 'small':
      case 'default':
        this._avatarSize = value;
        break;
      default:
        this._avatarSize = 'small';
        break;
    }
  }

  @ContentChildren(AvatarListItemComponent)
  _items: QueryList<AvatarListItemComponent>;
}
