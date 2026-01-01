import { Direction } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Injector,
  OnDestroy,
  ViewEncapsulation,
  afterNextRender,
  effect,
  inject,
  runInInjectionContext,
  signal,
  viewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, fromEvent } from 'rxjs';

import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/animation';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzPopoverDirective } from 'ng-zorro-antd/popover';

import { OnboardingConfig, OnboardingItem, OnboardingOpType } from './onboarding.types';

interface OnboardingLightData {
  el: HTMLElement;
  top: number;
  left: number;
  width: number;
  height: number;
  clientHeight: number;
  clientWidth: number;
}

@Component({
  selector: 'onboarding',
  template: `
    @if (!running() && config.mask) {
      <div class="onboarding__mask" (click)="handleMask()"></div>
    }
    <div
      class="onboarding__light"
      [class.onboarding__light-hide]="running()"
      [attr.style]="item.lightStyle"
      nz-popover
      [nzPopoverTitle]="item.title"
      [nzPopoverContent]="content"
      [nzPopoverVisible]="!running()"
      [nzPopoverTrigger]="null"
      [nzPopoverPlacement]="item.position"
      [nzPopoverOverlayClassName]="item.className"
      [nzPopoverOverlayStyle]="{ 'max-width.px': item.width, direction: dir }"
      [nzNoAnimation]="true"
    ></div>
    <ng-template #content>
      <ng-container *nzStringTemplateOutlet="item.content">
        <div [innerHTML]="item.content"></div>
      </ng-container>
      <div class="flex-center-between onboarding__footer">
        <span class="onboarding__total">
          @if (config.showTotal) {
            {{ active + 1 }}/{{ max }}
          }
        </span>
        <div class="onboarding__btns">
          @if (!last && item.skip !== null && item.skip !== undefined) {
            <a nz-button nzType="link" (click)="to('skip')" nzSize="small" data-btnType="skip">
              <ng-container *nzStringTemplateOutlet="item.skip">{{ item.skip }}</ng-container>
            </a>
          }
          @if (!first && item.prev !== null) {
            <a nz-button (click)="to('prev')" nzSize="small" data-btnType="prev">
              <ng-container *nzStringTemplateOutlet="item.prev">{{ item.prev }}</ng-container>
            </a>
          }
          @if (!last && item.next !== null && item.next !== undefined) {
            <a nz-button (click)="to('next')" nzType="primary" nzSize="small" data-btnType="next">
              <ng-container *nzStringTemplateOutlet="item.next">{{ item.next }}</ng-container>
            </a>
          }
          @if (last && item.done !== null && item.done !== undefined) {
            <a nz-button (click)="to('done')" nzType="primary" nzSize="small" data-btnType="done">
              <ng-container *nzStringTemplateOutlet="item.done">{{ item.done }}</ng-container>
            </a>
          }
        </div>
      </div>
    </ng-template>
  `,
  host: {
    class: 'onboarding',
    '[class.onboarding-rtl]': `dir === 'rtl'`,
    '[attr.data-onboarding-active]': `active`
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzPopoverDirective, NzStringTemplateOutletDirective, NzButtonComponent, NzNoAnimationDirective]
})
export class OnboardingComponent implements OnDestroy {
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly injector = inject(Injector);
  private readonly platform = inject(Platform);
  private readonly doc = inject(DOCUMENT);

  private prevSelectorEl?: HTMLElement;
  config!: OnboardingConfig;
  item!: OnboardingItem;
  active = 0;
  max = 0;
  readonly op = new EventEmitter<OnboardingOpType>();
  running = signal(false);
  dir: Direction = 'ltr';
  popover = viewChild.required(NzPopoverDirective);

  protected get first(): boolean {
    return this.active === 0;
  }

  protected get last(): boolean {
    return this.active === this.max - 1;
  }

  private get _getWin(): Window {
    return this.doc.defaultView ?? window;
  }

  private getLightData(): OnboardingLightData | null {
    const doc = this.doc;
    const win = this._getWin;
    const el = doc.querySelector(this.item.selectors) as HTMLElement;
    if (!el) {
      return null;
    }

    const scrollTop = win.scrollY ?? doc.documentElement.scrollTop ?? doc.body.scrollTop;
    const scrollLeft = win.scrollX ?? doc.documentElement.scrollLeft ?? doc.body.scrollLeft;
    const rect = el.getBoundingClientRect();
    const top = rect.top + scrollTop;
    const left = rect.left + scrollLeft;
    const padding = 8;
    const needPadding = top > padding && left > padding;
    const offsetPos = needPadding ? padding : 0;
    const offsetWH = needPadding ? padding * 2 : 0;
    return {
      top: top - offsetPos,
      left: left - offsetPos,
      width: rect.width + offsetWH,
      height: rect.height + offsetWH,
      el,
      clientWidth: doc.body.clientWidth,
      clientHeight: doc.body.clientHeight
    };
  }

  constructor() {
    afterNextRender(() => {
      // Waiting https://github.com/NG-ZORRO/ng-zorro-antd/issues/6491
      this.popover().component!.onClickOutside = () => {};
    });
    effect(() => {
      const running = this.running();
      if (!running) {
        runInInjectionContext(this.injector, () => {
          afterNextRender(() => {
            this.updatePosition();
          });
        });
      }
    });

    // when window resize
    fromEvent(window, 'resize')
      .pipe(takeUntilDestroyed(), debounceTime(100))
      .subscribe(() => this.updatePosition());
  }

  private scroll(pos: OnboardingLightData): void {
    this.prevSelectorEl = pos.el;
    const scrollY = pos.top - (pos.clientHeight - pos.height) / 2;
    this._getWin.scrollTo({ top: scrollY });
    this.updatePrevElStatus(true);
  }

  updateRunning(status: boolean): void {
    this.running.set(status);
  }

  private updatePosition(): void {
    if (!this.platform.isBrowser) {
      return;
    }

    const pos = this.getLightData();
    if (pos == null) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        console.warn(`Did not matches selectors [${this.item.selectors}]`);
      }
      return;
    }

    const lightStyle = (this.el.querySelector('.onboarding__light') as HTMLElement).style;
    lightStyle.top = `${pos.top}px`;
    lightStyle.left = `${pos.left}px`;
    lightStyle.width = `${pos.width}px`;
    lightStyle.height = `${pos.height}px`;

    this.updatePrevElStatus(false);
    this.scroll(pos);
  }

  private updatePrevElStatus(status: boolean): void {
    if (this.prevSelectorEl) {
      this.prevSelectorEl.classList[status ? 'add' : 'remove']('onboarding__light-el');
    }
  }

  to(type: OnboardingOpType): void {
    this.op.emit(type);
  }

  handleMask(): void {
    if (this.config.maskClosable === true) {
      this.popover().component?.hide();
      this.to('done');
    }
  }

  ngOnDestroy(): void {
    this.updatePrevElStatus(false);
  }
}
