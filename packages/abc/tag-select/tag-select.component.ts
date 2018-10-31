import {
  Component,
  HostBinding,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { InputBoolean } from '@delon/util';
import { DelonLocaleService } from '@delon/theme';

@Component({
  selector: 'tag-select',
  template: `
  <ng-content></ng-content>
  <a *ngIf="expandable" class="tag-select__trigger" (click)="trigger()">
    {{expand ? locale.collapse : locale.expand}}<i nz-icon [type]="expand ? 'up' : 'down'" class="tag-select__trigger-icon"></i>
  </a>`,
  host: { '[class.tag-select]': 'true' },
  preserveWhitespaces: false,
})
export class TagSelectComponent implements OnDestroy {
  private i18n$: Subscription;
  locale: any = {};

  /** 是否启用 `展开与收进` */
  @Input()
  @InputBoolean()
  @HostBinding('class.tag-select__has-expand')
  expandable = true;

  @HostBinding('class.tag-select__expanded')
  expand = false;

  @Output()
  readonly change = new EventEmitter<boolean>();

  constructor(private i18n: DelonLocaleService) {
    this.i18n$ = this.i18n.change.subscribe(
      () => (this.locale = this.i18n.getData('tagSelect')),
    );
  }

  trigger() {
    this.expand = !this.expand;
    this.change.emit(this.expand);
  }

  ngOnDestroy() {
    this.i18n$.unsubscribe();
  }
}
