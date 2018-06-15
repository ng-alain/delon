import {
  ConnectionPositionPair,
  Overlay,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ElementRef, Inject, Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import {
  ReuseContextCloseEvent,
  ReuseContextEvent,
  ReuseContextI18n,
} from './interface';
import { ReuseTabContextMenuComponent } from './reuse-tab-context-menu.component';

@Injectable()
export class ReuseTabContextService {
  private ref: OverlayRef;
  private locatePoint: HTMLElement;
  i18n: ReuseContextI18n;

  show: Subject<ReuseContextEvent> = new Subject<ReuseContextEvent>();
  close: Subject<ReuseContextCloseEvent> = new Subject<
    ReuseContextCloseEvent
  >();

  constructor(
    private overlay: Overlay,
    @Inject(DOCUMENT) private document: any,
  ) {}

  remove() {
    if (!this.ref) return;
    this.removePoint();
    this.ref.detach();
    this.ref.dispose();
    this.ref = null;
  }

  open(context: ReuseContextEvent) {
    this.remove();
    const { event, item } = context;
    this.createPoint(event);
    const fakeElement = new ElementRef(this.locatePoint);
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(fakeElement)
      .withPositions([
        new ConnectionPositionPair(
          { originX: 'start', originY: 'top' },
          { overlayX: 'start', overlayY: 'top' },
        ),
        new ConnectionPositionPair(
          { originX: 'start', originY: 'top' },
          { overlayX: 'start', overlayY: 'bottom' },
        ),
        new ConnectionPositionPair(
          { originX: 'start', originY: 'top' },
          { overlayX: 'end', overlayY: 'bottom' },
        ),
        new ConnectionPositionPair(
          { originX: 'start', originY: 'top' },
          { overlayX: 'end', overlayY: 'top' },
        ),
      ]);
    this.ref = this.overlay.create({
      positionStrategy,
      panelClass: 'reuse-tab-cm',
      scrollStrategy: this.overlay.scrollStrategies.close(),
    });
    const comp = this.ref.attach(
      new ComponentPortal(ReuseTabContextMenuComponent),
    );
    const instance = comp.instance;
    instance.i18n = this.i18n;
    instance.item = { ...item };
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
  private createPoint(e: MouseEvent): void {
    if (!this.locatePoint) {
      const container = this.document.createElement('span');
      this.document.body.appendChild(container);
      this.locatePoint = container;
    }
    this.locatePoint.style.position = `fixed`;
    this.locatePoint.style.top = `${e.clientY}px`;
    this.locatePoint.style.left = `${e.clientX}px`;
  }

  private removePoint(): void {
    if (this.locatePoint) {
      this.document.body.removeChild(this.locatePoint);
      this.locatePoint = null;
    }
  }
}
