import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { NaReuseContextI18n, NaReuseContextCloseEvent } from './interface';
import { NaReuseTabContextService } from './reuse-tab-context.service';

@Component({
  selector: 'reuse-tab-context',
  template: ``,
  preserveWhitespaces: false,
})
export class NaReuseTabContextComponent implements OnDestroy {
  private sub$: Subscription = new Subscription();

  @Input()
  set i18n(value: NaReuseContextI18n) {
    this.srv.i18n = value;
  }

  @Output() change = new EventEmitter<NaReuseContextCloseEvent>();

  constructor(private srv: NaReuseTabContextService) {
    this.sub$.add(srv.show.subscribe(context => this.srv.open(context)));
    this.sub$.add(srv.close.subscribe(res => this.change.emit(res)));
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
