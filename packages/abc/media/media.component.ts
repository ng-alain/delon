import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
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
} from '@angular/core';
import { InputNumber } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { MediaService } from './media.service';
import { PlyrMediaSource, PlyrMediaType } from './plyr.types';

declare const Plyr: NzSafeAny;

@Component({
  selector: 'media',
  exportAs: 'mediaComponent',
  template: `<ng-content></ng-content>`,
  host: {
    '[style.display]': `'block'`,
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MediaComponent implements OnChanges, AfterViewInit, OnDestroy {
  private _p: NzSafeAny;
  private videoEl: HTMLElement;

  // #region fields

  @Input() type: PlyrMediaType = 'video';
  @Input() source: string | PlyrMediaSource;
  @Input() options: NzSafeAny;
  @Input() @InputNumber() delay = 0;
  @Output() readonly ready = new EventEmitter<NzSafeAny>();

  // #endregion

  get player(): NzSafeAny {
    return this._p;
  }

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2, private srv: MediaService, private ngZone: NgZone) {}

  private initDelay() {
    this.ngZone.runOutsideAngular(() => setTimeout(() => this.init(), this.delay));
  }

  private init(): void {
    if (!(window as any).Plyr) {
      throw new Error(
        `No window.Plyr found, please make sure that cdn or local path exists, the current referenced path is: ${JSON.stringify(
          this.srv.cog.urls,
        )}`,
      );
    }

    this.ensureElement();

    const player = (this._p = new Plyr(this.videoEl, {
      ...this.srv.cog.options,
    }));

    player.on('ready', () => this.ready.next(player));

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
    const { source, type } = this;
    this._p.source = typeof source === 'string' ? { type, sources: [{ src: source }] } : source;
  }

  ngAfterViewInit(): void {
    this.srv
      .load()
      .notify()
      .subscribe(() => this.initDelay());
  }

  ngOnChanges(changes: { [p in keyof MediaComponent]?: SimpleChange }): void {
    this.srv.cog = { options: this.options };
    if (changes.source && this._p) {
      this.uploadSource();
    }
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
