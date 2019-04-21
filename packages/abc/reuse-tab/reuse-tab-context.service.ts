import { ConnectionPositionPair, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ElementRef, Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { ReuseTabContextMenuComponent } from './reuse-tab-context-menu.component';
import {
  ReuseContextCloseEvent,
  ReuseContextEvent,
  ReuseContextI18n,
  ReuseCustomContextMenu,
} from './reuse-tab.interfaces';

@Injectable()
export class ReuseTabContextService {
  private ref: OverlayRef | null;
  i18n: ReuseContextI18n;

  show: Subject<ReuseContextEvent> = new Subject<ReuseContextEvent>();
  close: Subject<ReuseContextCloseEvent> = new Subject<ReuseContextCloseEvent>();

  constructor(private overlay: Overlay) {}

  remove() {
    if (!this.ref) return;
    this.ref.detach();
    this.ref.dispose();
    this.ref = null;
  }

  open(context: ReuseContextEvent) {
    this.remove();
    const { event, item, customContextMenu } = context;
    const fakeElement = new ElementRef({
      getBoundingClientRect: (): ClientRect => ({
        bottom: event.clientY,
        height: 0,
        left: event.clientX,
        right: event.clientX,
        top: event.clientY,
        width: 0,
      }),
    });
    const positions = [
      new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
      new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
    ];
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(fakeElement)
      .withPositions(positions);
    this.ref = this.overlay.create({
      positionStrategy,
      panelClass: 'reuse-tab__cm',
      scrollStrategy: this.overlay.scrollStrategies.close(),
    });
    const comp = this.ref.attach(new ComponentPortal(ReuseTabContextMenuComponent));
    const instance = comp.instance;
    instance.i18n = this.i18n;
    instance.item = { ...item };
    instance.customContextMenu = customContextMenu as ReuseCustomContextMenu[];
    instance.event = event;

    const sub$ = new Subscription();
    sub$.add(
      instance.close.subscribe((res: ReuseContextCloseEvent) => {
        this.close.next(res);
        this.remove();
      }),
    );
    comp.onDestroy(() => sub$.unsubscribe());
  }
}
