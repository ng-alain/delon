import { Directionality } from '@angular/cdk/bidi';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, OnDestroy, inject } from '@angular/core';
import { Subject, Subscription, timer, debounce } from 'rxjs';

import { DelonLocaleService } from '@delon/theme';
import { AlainConfigService, AlainLoadingConfig } from '@delon/util/config';

import { LoadingDefaultComponent } from './loading.component';
import { LoadingShowOptions } from './loading.types';

@Injectable({ providedIn: 'root' })
export class LoadingService implements OnDestroy {
  private readonly overlay = inject(Overlay);
  private readonly configSrv = inject(AlainConfigService);
  private readonly directionality = inject(Directionality);
  private locale = inject(DelonLocaleService).getData('loading');

  private _overlayRef?: OverlayRef;
  private compRef: ComponentRef<LoadingDefaultComponent> | null = null;
  private opt: LoadingShowOptions | null = null;
  private cog: AlainLoadingConfig;
  private n$ = new Subject<void>();
  private loading$: Subscription;

  get instance(): LoadingDefaultComponent | null {
    return this.compRef != null ? this.compRef.instance : null;
  }

  constructor() {
    this.cog = this.configSrv.merge('loading', {
      type: 'spin',
      text: this.locale.text,
      icon: {
        type: 'loading',
        theme: 'outline',
        spin: true
      },
      delay: 0
    })!;
    this.loading$ = this.n$
      .asObservable()
      .pipe(debounce(() => timer(this.opt!.delay!)))
      .subscribe(() => this.create());
  }

  private create(): void {
    if (this.opt == null) return;

    this._close(false);

    this._overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true,
      backdropClass: 'loading-backdrop'
    });
    this.compRef = this._overlayRef.attach(new ComponentPortal(LoadingDefaultComponent));
    const dir = this.configSrv.get('loading')!.direction ?? this.directionality.value;
    if (this.instance != null) {
      this.instance!.options = this.opt;
      this.instance!.dir = dir;
    }
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
