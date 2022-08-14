import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Inject,
  Injectable,
  Injector,
  OnDestroy,
  Optional
} from '@angular/core';
import { Router } from '@angular/router';
import { of, pipe, Subscription, delay, switchMap } from 'rxjs';

import { DelonLocaleService } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { OnboardingComponent } from './onboarding.component';
import { OnboardingConfig, OnboardingItem, OnboardingOpType } from './onboarding.types';

@Injectable()
export class OnboardingService implements OnDestroy {
  private compRef!: ComponentRef<OnboardingComponent>;
  private op$!: Subscription;
  private config!: OnboardingConfig;
  private active = 0;
  private running$: Subscription | null = null;
  private _running = false;
  private type: OnboardingOpType | null = null;

  private _getDoc(): Document {
    return this.doc;
  }

  /**
   * Get whether it is booting
   *
   * 获取是否正在引导中
   */
  get running(): boolean {
    return this._running;
  }

  constructor(
    private i18n: DelonLocaleService,
    private appRef: ApplicationRef,
    // TODO: Tracking https://github.com/angular/angular/issues/45263
    private resolver: ComponentFactoryResolver,
    private router: Router,
    private injector: Injector,
    @Inject(DOCUMENT) private doc: NzSafeAny,
    private configSrv: AlainConfigService,
    @Optional() private directionality: Directionality
  ) {}

  private attach(): void {
    const compRef = (this.compRef = this.resolver.resolveComponentFactory(OnboardingComponent).create(this.injector));
    this.appRef.attachView(compRef.hostView);
    const compNode = (compRef.hostView as EmbeddedViewRef<NzSafeAny>).rootNodes[0];
    const doc = this._getDoc();
    const cdk = doc.querySelector('.cdk-overlay-container') as HTMLElement;
    if (cdk) {
      doc.body.insertBefore(compNode, cdk);
    } else {
      doc.body.appendChild(compNode);
    }
    this.op$ = this.compRef.instance.op.subscribe((type: OnboardingOpType) => {
      switch (type) {
        case 'next':
          this.next();
          break;
        case 'prev':
          this.prev();
          break;
        default:
          this.done();
          break;
      }
    });
  }

  private cancelRunning(): this {
    if (this.running$) {
      this.running$.unsubscribe();
      this.running$ = null;
    }
    return this;
  }

  private updateRunning(status: boolean): this {
    this._running = status;
    this.compRef!.instance.updateRunning(status);
    return this;
  }

  private destroy(): void {
    this.cancelRunning();
    if (this.compRef) {
      this.appRef.detachView(this.compRef.hostView);
      this.compRef.destroy();
      this.op$.unsubscribe();
    }
  }

  private showItem(isStart: boolean = false): void {
    const items = this.config.items!;
    const item = {
      position: 'bottomLeft',
      before: of(true),
      after: of(true),
      ...this.i18n.getData('onboarding'),
      ...items[this.active]
    } as OnboardingItem;
    const dir = this.configSrv.get('onboarding')!.direction || this.directionality.value;
    Object.assign(this.compRef.instance, { item, config: this.config, active: this.active, max: items.length, dir });
    const pipes = [
      switchMap(() => (item.url ? this.router.navigateByUrl(item.url) : of(true))),
      switchMap(() => {
        const obs = this.type === 'prev' ? item.after! : item.before!;
        return typeof obs === 'number' ? of(true).pipe(delay(obs)) : obs;
      })
    ];
    if (!isStart) {
      pipes.push(delay(1));
    }

    this.updateRunning(true);

    this.running$ = of(true)
      .pipe(pipe.apply(this, pipes as NzSafeAny) as NzSafeAny)
      .subscribe({
        next: () => this.cancelRunning().updateRunning(false),
        error: () => this.done()
      });
  }

  /**
   * Start a new user guidance
   *
   * 开启新的用户引导流程
   */
  start(config: OnboardingConfig): void {
    if (this.running) {
      return;
    }
    this.destroy();
    this.config = {
      items: [],
      mask: true,
      maskClosable: true,
      showTotal: false,
      ...config
    };
    this.active = 0;
    this.type = null;
    this.attach();
    this.showItem(true);
  }

  /**
   * Next
   *
   * 下一步
   */
  next(): void {
    if (this._running || this.active + 1 >= this.config.items!.length) {
      this.done();
      return;
    }
    this.type = 'next';
    ++this.active;
    this.showItem();
  }

  /**
   * Prev
   *
   * 上一步
   */
  prev(): void {
    if (this._running || this.active - 1 < 0) {
      return;
    }
    this.type = 'prev';
    --this.active;
    this.showItem();
  }

  /**
   * Done
   *
   * 完成
   */
  done(): void {
    this.type = 'done';
    this.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
