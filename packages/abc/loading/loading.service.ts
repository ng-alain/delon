import { Directionality } from '@angular/cdk/bidi';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, OnDestroy, Optional } from '@angular/core';
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

  get instance(): LoadingDefaultComponent | null {
    return this.compRef != null ? this.compRef.instance : null;
  }

  constructor(private overlay: Overlay, private configSrv: AlainConfigService, @Optional() private directionality: Directionality) {
    this.cog = configSrv.merge('loading', {
      type: 'spin',
      text: '加载中...',
      icon: {
        type: 'loading',
        theme: 'outline',
        spin: true,
      },
      delay: 0,
    })!;
    this.loading$ = this.n$
      .asObservable()
      .pipe(debounce(() => timer(this.opt!.delay)))
      .subscribe(() => this.create());
  }

  private create(): void {
    if (this.opt == null) return;

    this._close(false);

    this._overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true,
      backdropClass: 'loading-backdrop',
    });
    this.compRef = this._overlayRef.attach(new ComponentPortal(LoadingDefaultComponent));
    const dir = this.configSrv.get('loading')!.direction || this.directionality.value;
    Object.assign(this.instance, { options: this.opt, dir });
    this.compRef.changeDetectorRef.markForCheck();
  }

  /**
   * Open a new loading indicator
   *
   * 打开一个新加载指示符
   */
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

  /**
   * Turn off a loading indicator
   *
   * 关闭一个加载指示符
   */
  close(): void {
    this._close(true);
  }

  ngOnDestroy(): void {
    this.loading$.unsubscribe();
  }
}
