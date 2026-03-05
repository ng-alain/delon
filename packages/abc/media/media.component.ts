import { Platform } from '@angular/cdk/platform';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  Renderer2,
  ViewEncapsulation,
  afterNextRender,
  effect,
  inject,
  input,
  numberAttribute,
  output
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { take, delay } from 'rxjs';

import type * as Plyr from 'plyr';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { MediaService } from './media.service';

export type MediaType = 'html5' | 'youtube' | 'video' | 'audio';

@Component({
  selector: 'media, [media]',
  exportAs: 'mediaComponent',
  template: `<ng-content />`,
  host: {
    class: 'd-block'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MediaComponent implements OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly renderer = inject(Renderer2);
  private readonly ngZone = inject(NgZone);
  private readonly srv = inject(MediaService);
  private readonly platform = inject(Platform);

  private _p?: Plyr | null;
  private videoEl?: HTMLElement;

  readonly type = input<MediaType>('video');
  readonly source = input<string | Plyr.SourceInfo>();
  readonly options = input<Plyr.Options>();
  readonly delay = input(0, { transform: numberAttribute });
  readonly ready = output<Plyr>();

  get player(): Plyr | undefined | null {
    return this._p;
  }

  constructor() {
    this.srv
      .notify()
      .pipe(takeUntilDestroyed(), take(1), delay(this.delay()))
      .subscribe(() => this.ngZone.runOutsideAngular(() => this.init()));

    afterNextRender(() => {
      if (!this.platform.isBrowser) {
        return;
      }

      this.srv.load();
    });

    effect(() => {
      this.srv.cog = { options: this.options };
      this.uploadSource();
    });
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

    player.on('ready', () => this.ngZone.run(() => this.ready.emit(player)));

    this.uploadSource();
  }

  private ensureElement(): void {
    const type = this.type();
    let el = this.el.querySelector(type) as HTMLElement;
    if (!el) {
      el = this.renderer.createElement(type);
      (el as HTMLVideoElement).controls = true;
      this.el.appendChild(el);
    }
    this.videoEl = el;
  }

  private destroy(): void {
    this._p?.destroy();
  }

  private uploadSource(): void {
    const source = this.source();
    const type = this.type();

    if (this._p == null) return;
    this._p.source = (typeof source === 'string' ? { type, sources: [{ src: source }] } : source) as Plyr.SourceInfo;
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
