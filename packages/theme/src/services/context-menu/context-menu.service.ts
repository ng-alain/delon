import {
  Injectable,
  ViewContainerRef,
  TemplateRef,
  ElementRef,
} from '@angular/core';
import {
  Overlay,
  OverlayRef,
  ConnectionPositionPair,
} from '@angular/cdk/overlay';
import {
  TemplatePortal,
  ComponentPortal,
  ComponentType,
} from '@angular/cdk/portal';

export type ContextMenuType = TemplateRef<{}> | ComponentType<{}>;

@Injectable({
  providedIn: 'root',
})
export class ContextMenuService {
  private ref: OverlayRef;
  private type: ContextMenuType;
  private containerRef: ViewContainerRef;

  constructor(private overlay: Overlay) {}

  close() {
    if (!this.ref) return;
    this.ref.detach();
    this.ref.dispose();
    this.ref = null;
  }

  private create(event: MouseEvent) {
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
      new ConnectionPositionPair(
        { originX: 'start', originY: 'bottom' },
        { overlayX: 'start', overlayY: 'top' },
      ),
      new ConnectionPositionPair(
        { originX: 'start', originY: 'top' },
        { overlayX: 'start', overlayY: 'bottom' },
      ),
    ];
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(fakeElement)
      .withPositions(positions);
    this.ref = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.close(),
    });
    if (this.type instanceof TemplateRef) {
      this.ref.attach(new TemplatePortal(this.type, this.containerRef));
    } else {
      this.ref.attach(new ComponentPortal(this.type, this.containerRef));
    }
    this.ref.backdropClick().subscribe(() => this.close());
  }

  show(
    event: MouseEvent,
    ref: ContextMenuType,
    containerRef: ViewContainerRef,
  ) {
    if (this.type !== ref) this.close();
    this.type = ref;
    this.containerRef = containerRef;
    this.create(event);
  }
}
