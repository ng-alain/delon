import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ReuseTabContextService } from './reuse-tab-context.service';
import { ReuseContextCloseEvent, ReuseContextI18n } from './reuse-tab.interfaces';

@Component({
  selector: 'reuse-tab-context',
  template: ``,
  standalone: true
})
export class ReuseTabContextComponent {
  private readonly srv = inject(ReuseTabContextService);

  @Input()
  set i18n(value: ReuseContextI18n | undefined) {
    this.srv.i18n = value;
  }

  @Output() readonly change = new EventEmitter<ReuseContextCloseEvent>();

  constructor() {
    this.srv.show.pipe(takeUntilDestroyed()).subscribe(context => this.srv.open(context));
    this.srv.close.pipe(takeUntilDestroyed()).subscribe(res => this.change.emit(res));
  }
}
