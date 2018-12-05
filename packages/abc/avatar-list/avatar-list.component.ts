import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  OnChanges,
  QueryList,
} from '@angular/core';
import { InputNumber } from '@delon/util';

import { AvatarListItemComponent } from './avatar-list-item.component';

@Component({
  selector: 'avatar-list',
  templateUrl: './avatar-list.component.html',
  host: { '[class.avatar-list]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarListComponent implements AfterViewInit, OnChanges {
  private inited = false;
  @ContentChildren(AvatarListItemComponent, { descendants: false })
  private _items !: QueryList<AvatarListItemComponent>;

  items: AvatarListItemComponent[] = [];
  exceedCount = 0;

  cls = '';
  avatarSize = '';
  @Input()
  set size(value: 'large' | 'small' | 'mini' | 'default') {
    this.cls = 'avatar-list__item' + (value === 'default' ? '' : ` avatar-list__${value}`);
    switch (value) {
      case 'large':
      case 'small':
      case 'default':
        this.avatarSize = value;
        break;
      default:
        this.avatarSize = 'small';
        break;
    }
  }
  @Input() @InputNumber() maxLength = 0;
  @Input() excessItemsStyle: {};

  constructor(private cdr: ChangeDetectorRef) { }

  private gen() {
    const { _items } = this;
    const maxLength = this.maxLength > 0 ? this.maxLength : _items.length;
    const numOfChildren = _items.length;
    const numToShow = maxLength > 0 && maxLength >= numOfChildren ? numOfChildren : maxLength;
    this.items = _items.toArray().slice(0, numToShow);
    this.exceedCount = numToShow < numOfChildren ? numOfChildren - maxLength : 0;
    this.cdr.detectChanges();
  }

  ngAfterViewInit() {
    this.gen();
    this.inited = true;
  }

  ngOnChanges() {
    if (this.inited) {
      this.gen();
    }
  }
}
