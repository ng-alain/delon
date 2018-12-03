import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'avatar-list',
  templateUrl: './avatar-list.component.html',
  host: { '[class.avatar-list]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    this.cdr.markForCheck();
  }

  constructor(private cdr: ChangeDetectorRef) { }
}
