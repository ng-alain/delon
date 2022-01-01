import { Direction } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  OnDestroy,
  Optional,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';
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
  templateUrl: './onboarding.component.html',
  host: {
    '[class.onboarding]': `true`,
    '[class.onboarding-rtl]': `dir === 'rtl'`,
    '[attr.data-onboarding-active]': `active`
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class OnboardingComponent implements OnDestroy, AfterViewInit {
  private time: NzSafeAny;
  private prevSelectorEl?: HTMLElement;
  config!: OnboardingConfig;
  item!: OnboardingItem;
  active = 0;
  max = 0;
  readonly op = new EventEmitter<OnboardingOpType>();
  running = false;
  dir: Direction = 'ltr';
  @ViewChild('popover', { static: false }) private popover!: NzPopoverDirective;

  get first(): boolean {
    return this.active === 0;
  }

  get last(): boolean {
    return this.active === this.max - 1;
  }

  private _getDoc(): Document {
    return this.doc;
  }

  private _getWin(): Window {
    return this._getDoc().defaultView || window;
  }

  constructor(
    private el: ElementRef<HTMLElement>,
    @Optional() @Inject(DOCUMENT) private doc: NzSafeAny,
    private platform: Platform,
    private cdr: ChangeDetectorRef
  ) {}

  private getLightData(): OnboardingLightData | null {
    const doc = this._getDoc();
    const win = this._getWin();
    const el = doc.querySelector(this.item.selectors) as HTMLElement;
    if (!el) {
      return null;
    }

    const scrollTop = win.scrollY || doc.documentElement.scrollTop || doc.body.scrollTop;
    const scrollLeft = win.scrollX || doc.documentElement.scrollLeft || doc.body.scrollLeft;
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

  ngAfterViewInit(): void {
    // Waiting https://github.com/NG-ZORRO/ng-zorro-antd/issues/6491
    this.popover.component!.onClickOutside = () => {};
  }

  private scroll(pos: OnboardingLightData): void {
    this.prevSelectorEl = pos.el;
    const scrollY = pos.top - (pos.clientHeight - pos.height) / 2;
    this._getWin().scrollTo({ top: scrollY });
    this.updatePrevElStatus(true);
  }

  updateRunning(status: boolean): void {
    this.running = status;
    this.cdr.detectChanges();
    if (!status) {
      this.updatePosition();
    }
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

    const lightStyle = (this.el.nativeElement.querySelector('.onboarding__light') as HTMLElement).style;
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
      this.popover.component!.hide();
      this.to('done');
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.time);
    this.updatePrevElStatus(false);
  }
}
