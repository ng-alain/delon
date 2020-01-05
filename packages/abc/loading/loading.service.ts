import { Injectable, ComponentRef, OnDestroy } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subject, timer, Subscription } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { LoadingShowOptions } from './loading.interfaces';
import { LoadingConfig } from './loading.config';
import { LoadingDefaultComponent } from './loading.component';

@Injectable({ providedIn: 'root' })
export class LoadingService implements OnDestroy {
  private _overlayRef: OverlayRef;
  private compRef: ComponentRef<LoadingDefaultComponent> | null = null;
  private opt: LoadingShowOptions | null = null;
  private n$ = new Subject();
  private loading$: Subscription;

  get instance() {
    return this.compRef != null ? this.compRef.instance : null;
  }

  constructor(private cog: LoadingConfig, private overlay: Overlay) {
    this.loading$ = this.n$
      .asObservable()
      .pipe(
        debounce(() => timer(this.opt!.delay)),
      )
      .subscribe(() => this.create());
  }

  private create() {
    if (this.opt == null) return;

    this._close(false);

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
    Object.assign(this.instance, { options: this.opt });
    this.compRef.changeDetectorRef.markForCheck();
  }

  open(options?: LoadingShowOptions): void {
    this.opt = { ...this.cog, ...options };

    this.n$.next();
  }

  private _close(cleanOpt: boolean): void {
    if (cleanOpt) this.opt = null;
    if (!this._overlayRef) return;
    this._overlayRef.detach();
    this.compRef = null;
  }

  close(): void {
    this._close(true);
  }

  ngOnDestroy(): void {
    this.loading$.unsubscribe();
  }
}
