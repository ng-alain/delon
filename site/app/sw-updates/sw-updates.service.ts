import { Injectable, OnDestroy } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs/observable/interval';
import { Subscription } from 'rxjs/Subscription';
import { NzModalService } from 'ng-zorro-antd';

@Injectable()
export class SwUpdatesService implements OnDestroy {
    private checkInterval = 1000 * 60 * 60 * 6;   // 6 hours
    private check$: Subscription;

    constructor(sw: SwUpdate, modal: NzModalService) {
        this.check$ = interval(this.checkInterval).subscribe(() => sw.checkForUpdate());
        sw.available.subscribe(e => {
            modal.confirm({
                nzTitle: '缓存发生变更',
                nzContent: '点确认立即生效',
                nzOnOk: () => {
                    sw.activateUpdate().then(() => document.location.reload());
                }
            });
        });
        sw.checkForUpdate();
    }

    ngOnDestroy(): void {
        this.check$.unsubscribe();
    }
}
