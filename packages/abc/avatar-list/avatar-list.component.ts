import { Direction, Directionality } from '@angular/cdk/bidi';
import { NgClass, NgStyle } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  DestroyRef,
  Input,
  OnChanges,
  QueryList,
  ViewEncapsulation,
  inject,
  numberAttribute
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { NzAvatarComponent } from 'ng-zorro-antd/avatar';
import type { NgStyleInterface, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';

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
  imports: [NgStyle, NgClass, NzAvatarComponent, NzTooltipDirective]
})
export class AvatarListComponent implements AfterViewInit, OnChanges {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly directionality = inject(Directionality, { optional: true });
  private readonly destroy$ = inject(DestroyRef);

  private inited = false;
  @ContentChildren(AvatarListItemComponent, { descendants: false })
  private readonly _items!: QueryList<AvatarListItemComponent>;

  items: AvatarListItemComponent[] = [];
  exceedCount = 0;
  dir?: Direction = 'ltr';

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
  @Input({ transform: numberAttribute }) maxLength = 0;
  @Input() excessItemsStyle: NgStyleInterface | null = null;

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
    this.dir = this.directionality?.value;
    this.directionality?.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe(direction => {
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
