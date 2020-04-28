import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { InputNumber } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { MediaService } from './media.service';

declare const Plyr: NzSafeAny;

@Component({
  selector: 'media',
  exportAs: 'mediaComponent',
  template: ``,
  host: {
    '[class.media]': 'true',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MediaComponent implements OnChanges, AfterViewInit, OnDestroy {
  private _p: NzSafeAny;
  private videoEl: HTMLElement;

  // #region fields

  @Input() src: string;
  @Input() type: 'video' | 'audio' = 'video';
  @Input() options: NzSafeAny;
  @Input() @InputNumber() delay = 0;
  // @Output() readonly change = new EventEmitter<string>();

  // #endregion

  get player(): NzSafeAny {
    return this._p;
  }

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private srv: MediaService,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef,
  ) {}

  private initDelay() {
    this.ngZone.runOutsideAngular(() => {
      if (this.delay > 0) {
        setTimeout(() => this.init(), this.delay);
      } else {
        this.init();
      }
    });
  }

  private init(): void {
    if (!Plyr) {
      throw new Error(
        `No Plyr object was found, please make sure that cdn or local path exists, the current referenced path is: ${JSON.stringify(
          this.srv.cog.urls,
        )}`,
      );
    }
    this.ensureElement();
    this._p = new Plyr(this.videoEl, {
      ...this.srv.cog.options,
    });
    this.uploadSource();
  }

  private ensureElement() {
    const { type } = this;
    let el = this.el.nativeElement.querySelector(type) as HTMLElement;
    if (!el) {
      el = this.renderer.createElement(type);
      (el as HTMLVideoElement).controls = true;
      this.el.nativeElement.appendChild(el);
    }
    this.videoEl = el;
  }

  private destroy(): void {
    if (this._p) {
      this._p.destroy();
    }
  }

  private uploadSource(): void {
    const { src, type } = this;
    const source: NzSafeAny = typeof src === 'string' ? { type, sources: [{ src }] } : src;
    this._p.source = source;
  }

  ngAfterViewInit(): void {
    if ((window as any).Plyr) {
      this.initDelay();
      return;
    }

    this.srv
      .load()
      .notify()
      .subscribe(() => this.initDelay());
  }

  ngOnChanges(): void {
    this.srv.cog = { options: this.options };

    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
