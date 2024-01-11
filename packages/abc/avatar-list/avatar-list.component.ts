import { Direction, Directionality } from '@angular/cdk/bidi';
import { NgClass, NgStyle } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  OnChanges,
  Optional,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { InputNumber, NumberInput } from '@delon/util/decorator';
import { NzAvatarComponent } from 'ng-zorro-antd/avatar';
import type { NgStyleInterface, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { AvatarListItemComponent } from './avatar-list-item.component';

@Component({
  selector: 'avatar-list',
  exportAs: 'avatarList',
  templateUrl: './avatar-list.component.html',
  host: {
    '[class.avatar-list]': 'true',
    '[class.avatar-list-rtl]': `dir === 'rtl'`
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NgStyle, NgClass, NzAvatarComponent, NzToolTipModule]
})
export class AvatarListComponent implements AfterViewInit, OnChanges {
  static ngAcceptInputType_maxLength: NumberInput;

  private inited = false;
  @ContentChildren(AvatarListItemComponent, { descendants: false })
  private _items!: QueryList<AvatarListItemComponent>;
  private dir$ = this.directionality.change?.pipe(takeUntilDestroyed());

  items: AvatarListItemComponent[] = [];
  exceedCount = 0;
  dir: Direction = 'ltr';

  cls = '';
  avatarSize: NzSizeLDSType = 'default';
  @Input()
  set size(value: 'large' | 'small' | 'mini' | 'default') {
    this.cls = `avatar-list__item${value === 'default' ? '' : ` avatar-list__${value}`}`;
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
  @Input() excessItemsStyle: NgStyleInterface | null = null;

  constructor(
    private cdr: ChangeDetectorRef,
    @Optional() private directionality: Directionality
  ) {}

  private gen(): void {
    const { _items } = this;
    const maxLength = this.maxLength > 0 ? this.maxLength : _items.length;
    const numOfChildren = _items.length;
    const numToShow = maxLength > 0 && maxLength >= numOfChildren ? numOfChildren : maxLength;
    this.items = _items.toArray().slice(0, numToShow);
    this.exceedCount = numToShow < numOfChildren ? numOfChildren - maxLength : 0;
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    this.dir = this.directionality.value;
    this.dir$.subscribe((direction: Direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.gen();
    this.inited = true;
  }

  ngOnChanges(): void {
    if (this.inited) {
      this.gen();
    }
  }
}
