import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ReuseContextI18n, ReuseContextCloseEvent } from './interface';
import { ReuseTabContextService } from './reuse-tab-context.service';

@Component({
    selector: 'reuse-tab-context',
    template: ``,
    preserveWhitespaces: false
})
export class ReuseTabContextComponent implements OnDestroy {

    private sub$: Subscription = new Subscription();

    @Input()
    set i18n(value: ReuseContextI18n) {
        this.srv.i18n = value;
    }

    @Output() change = new EventEmitter<ReuseContextCloseEvent>();

    constructor(
        private srv: ReuseTabContextService
    ) {
        this.sub$.add(srv.show.subscribe(context => this.srv.open(context)));
        this.sub$.add(srv.close.subscribe(res => this.change.emit(res)));
    }

    ngOnDestroy(): void {
        this.sub$.unsubscribe();
    }
}
