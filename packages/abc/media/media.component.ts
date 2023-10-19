import { Platform } from '@angular/cdk/platform';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  Output,
  Renderer2,
  SimpleChange,
  ViewEncapsulation,
  inject
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { timer, take } from 'rxjs';

import type Plyr from 'plyr';

import { InputNumber, NumberInput, ZoneOutside } from '@delon/util/decorator';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { MediaService } from './media.service';

export type MediaType = 'html5' | 'youtube' | 'video' | 'audio';

@Component({
  selector: 'media',
  exportAs: 'mediaComponent',
  template: `<ng-content />`,
  host: {
    '[style.display]': `'block'`
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MediaComponent implements OnChanges, AfterViewInit, OnDestroy {
  static ngAcceptInputType_delay: NumberInput;

  private _p?: Plyr | null;
  private videoEl?: HTMLElement;
  private destroy$ = inject(DestroyRef);

  @Input() type: MediaType = 'video';
  @Input() source?: string | Plyr.SourceInfo;
  @Input() options?: Plyr.Options;
  @Input() @InputNumber() delay = 0;
  @Output() readonly ready = new EventEmitter<Plyr>();

  get player(): Plyr | undefined | null {
    return this._p;
  }

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private srv: MediaService,
    private ngZone: NgZone,
    private platform: Platform
  ) {}

  @ZoneOutside()
  private initDelay(): void {
    timer(this.delay)
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(() => this.ngZone.runOutsideAngular(() => this.init()));
  }

  private init(): void {
    const winPlyr = (window as NzSafeAny).Plyr;
    if (!winPlyr) {
      throw new Error(
        `No window.Plyr found, please make sure that cdn or local path exists, the current referenced path is: ${JSON.stringify(
          this.srv.cog.urls
        )}`
      );
    }

    this.ensureElement();

    const player: Plyr = (this._p = new winPlyr(this.videoEl, {
      ...this.srv.cog.options
    }));

    player.on('ready', () => this.ngZone.run(() => this.ready.next(player)));

    this.uploadSource();
  }

  private ensureElement(): void {
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
    if (this._p == null) return;

    const { source, type } = this;
    this._p.source = (typeof source === 'string' ? { type, sources: [{ src: source }] } : source) as Plyr.SourceInfo;
  }

  ngAfterViewInit(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.srv
      .notify()
      .pipe(takeUntilDestroyed(this.destroy$), take(1))
      .subscribe(() => this.initDelay());

    this.srv.load();
  }

  ngOnChanges(changes: { [p in keyof MediaComponent]?: SimpleChange }): void {
    this.srv.cog = { options: this.options };
    if (changes.source) {
      this.uploadSource();
    }
  }

  ngOnDestroy(): void {
    this.destroy();
    this._p = null;
  }
}
