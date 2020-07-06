import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  OnDestroy,
  Optional,
  ViewEncapsulation,
} from '@angular/core';
import { OnboardingData, OnboardingItem, OnboardingOpType } from './onboarding.types';

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
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class OnboardingComponent implements OnDestroy {
  private time: any;
  private prevSelectorEl: HTMLElement;
  data: OnboardingData;
  item: OnboardingItem;
  active = 0;
  max = 0;
  readonly op = new EventEmitter<OnboardingOpType>();
  visible = false;

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
    @Optional() @Inject(DOCUMENT) private doc: any,
    private platform: Platform,
    private cdr: ChangeDetectorRef,
  ) {}

  private getLightData(): OnboardingLightData | null {
    const doc = this._getDoc();
    const win = this._getWin();
    const el = doc.querySelector(this.item.selector!) as HTMLElement;
    if (!el) {
      return null;
    }

    const scrollTop = win.pageYOffset || doc.documentElement.scrollTop || doc.body.scrollTop;
    const scrollLeft = win.pageXOffset || doc.documentElement.scrollLeft || doc.body.scrollLeft;
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
      clientHeight: doc.body.clientHeight,
    };
  }

  private scroll(pos: OnboardingLightData): void {
    this.prevSelectorEl = pos.el;
    const scrollY = pos.top - (pos.clientHeight - pos.height) / 2;
    this._getWin().scrollTo({ top: scrollY });
    this.updatePrevElStatus(true);
    this.setVisible(true);
  }

  updatePosition(options: { time?: number } = { time: 300 }): void {
    if (!this.platform.isBrowser) {
      return;
    }

    const pos = this.getLightData();
    if (pos == null) {
      return;
    }

    const lightStyle = (this.el.nativeElement.querySelector('.onboarding__light') as HTMLElement).style;
    lightStyle.top = `${pos.top}px`;
    lightStyle.left = `${pos.left}px`;
    lightStyle.width = `${pos.width}px`;
    lightStyle.height = `${pos.height}px`;

    this.updatePrevElStatus(false);
    this.setVisible(false);

    if (options.time === 0 || !this.data.animation) {
      this.scroll(pos);
      return;
    }

    this.time = setTimeout(() => this.scroll(pos), options.time);
  }

  private setVisible(status: boolean): void {
    this.visible = status;
    this.cdr.detectChanges();
  }

  private updatePrevElStatus(status: boolean): void {
    if (this.prevSelectorEl) {
      this.prevSelectorEl.classList[status ? 'add' : 'remove']('onboarding__light-el');
    }
  }

  to(type: OnboardingOpType): void {
    this.op.emit(type);
  }

  ngOnDestroy(): void {
    clearTimeout(this.time);
    this.updatePrevElStatus(false);
  }
}
