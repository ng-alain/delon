import { Injectable, ComponentRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoadingShowOptions } from './loading.interfaces';
import { LoadingConfig } from './loading.config';
import { LoadingDefaultComponent } from './loading.component';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private _overlayRef: OverlayRef;
  private compRef: ComponentRef<LoadingDefaultComponent> | null = null;

  get instance() {
    return this.compRef!.instance;
  }

  constructor(private cog: LoadingConfig, private overlay: Overlay) {}

  open(options?: LoadingShowOptions): void {
    if (this.compRef) return;

    options = { ...this.cog, ...options };
    this._overlayRef = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true,
      backdropClass: 'loading-backdrop',
    });
    const comp = new ComponentPortal(LoadingDefaultComponent);
    this.compRef = this._overlayRef.attach(comp);
    Object.assign(this.instance, { options });
    this.compRef.changeDetectorRef.detectChanges();
  }

  close(): void {
    if (!this._overlayRef) return;
    this.compRef!.destroy();
    this._overlayRef.detach();
    this.compRef = null;
  }
}
