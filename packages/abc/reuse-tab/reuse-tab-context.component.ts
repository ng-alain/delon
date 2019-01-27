import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { ReuseTabContextService } from './reuse-tab-context.service';
import { ReuseContextCloseEvent, ReuseContextI18n } from './reuse-tab.interfaces';

@Component({
  selector: 'reuse-tab-context',
  template: ``,
})
export class ReuseTabContextComponent implements OnDestroy {
  private sub$: Subscription = new Subscription();

  @Input()
  set i18n(value: ReuseContextI18n) {
    this.srv.i18n = value;
  }

  @Output() readonly change = new EventEmitter<ReuseContextCloseEvent>();

  constructor(private srv: ReuseTabContextService) {
    this.sub$.add(srv.show.subscribe(context => this.srv.open(context)));
    this.sub$.add(srv.close.subscribe(res => this.change.emit(res)));
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
