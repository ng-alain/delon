import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, OnDestroy } from '@angular/core';
import { AlainConfigService, AlainLoadingConfig } from '@delon/util';
import { Subject, Subscription, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { LoadingDefaultComponent } from './loading.component';
import { LoadingShowOptions } from './loading.types';

@Injectable({ providedIn: 'root' })
export class LoadingService implements OnDestroy {
  private _overlayRef: OverlayRef;
  private compRef: ComponentRef<LoadingDefaultComponent> | null = null;
  private opt: LoadingShowOptions | null = null;
  private cog: AlainLoadingConfig;
  private n$ = new Subject();
  private loading$: Subscription;

  get instance() {
    return this.compRef != null ? this.compRef.instance : null;
  }

  constructor(private overlay: Overlay, configSrv: AlainConfigService) {
    this.cog = configSrv.merge<AlainLoadingConfig, 'loading'>('loading', {
      type: 'spin',
      text: '加载中...',
      icon: {
        type: 'loading',
        theme: 'outline',
        spin: true,
      },
      delay: 0,
    });
    this.loading$ = this.n$
      .asObservable()
      .pipe(debounce(() => timer(this.opt!.delay)))
      .subscribe(() => this.create());
  }

  private create() {
    if (this.opt == null) return;

    this._close(false);

    this._overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
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
