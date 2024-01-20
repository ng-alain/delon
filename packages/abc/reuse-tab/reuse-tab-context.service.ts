import { ConnectionPositionPair, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, inject } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { ReuseTabContextMenuComponent } from './reuse-tab-context-menu.component';
import {
  ReuseContextCloseEvent,
  ReuseContextEvent,
  ReuseContextI18n,
  ReuseCustomContextMenu
} from './reuse-tab.interfaces';

@Injectable()
export class ReuseTabContextService {
  private readonly overlay = inject(Overlay);

  private ref: OverlayRef | null = null;
  i18n?: ReuseContextI18n;

  show: Subject<ReuseContextEvent> = new Subject<ReuseContextEvent>();
  close: Subject<ReuseContextCloseEvent> = new Subject<ReuseContextCloseEvent>();

  remove(): void {
    if (!this.ref) return;
    this.ref.detach();
    this.ref.dispose();
    this.ref = null;
  }

  open(context: ReuseContextEvent): void {
    this.remove();
    const { event, item, customContextMenu } = context;
    const { x, y } = event;
    const positions = [
      new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
      new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
    ];
    const positionStrategy = this.overlay.position().flexibleConnectedTo({ x, y }).withPositions(positions);
    this.ref = this.overlay.create({
      positionStrategy,
      panelClass: 'reuse-tab__cm',
      scrollStrategy: this.overlay.scrollStrategies.close()
    });
    const comp = this.ref.attach(new ComponentPortal(ReuseTabContextMenuComponent));
    const instance = comp.instance;
    instance.i18n = this.i18n!;
    instance.item = { ...item };
    instance.customContextMenu = customContextMenu as ReuseCustomContextMenu[];
    instance.event = event;

    const sub$ = new Subscription();
    sub$.add(
      instance.close.subscribe((res: ReuseContextCloseEvent) => {
        this.close.next(res);
        this.remove();
      })
    );
    comp.onDestroy(() => sub$.unsubscribe());
  }
}
