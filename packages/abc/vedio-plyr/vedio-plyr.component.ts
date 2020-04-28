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
  ViewEncapsulation,
} from '@angular/core';
import { InputNumber } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { VedioService } from './vedio-plyr.service';

declare const Plyr: NzSafeAny;

@Component({
  selector: 'vedio-plyr',
  exportAs: 'vedioPlyr',
  template: ``,
  host: {
    '[class.vedio-plyr]': 'true',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class VedioPlyrComponent implements OnChanges, AfterViewInit, OnDestroy {
  private _p: NzSafeAny;

  // #region fields

  @Input() src: string;
  @Input() options: NzSafeAny;
  @Input() @InputNumber() delay = 0;
  // @Output() readonly change = new EventEmitter<string>();

  // #endregion

  get player(): NzSafeAny {
    return this._p;
  }

  constructor(private el: ElementRef<HTMLElement>, private srv: VedioService, private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

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
    this._p = new Plyr(this.el.nativeElement, {
      ...this.srv.cog.options,
      urls: [{ type: 'video', sources: [{ src: this.src, type: 'video/mp4' }] }],
    });
    this._p.on('error', (event: NzSafeAny) => {
      console.log(event);
      debugger;
    });
    // this.uploadSource();
  }

  private destroy(): void {
    if (this._p) {
      this._p.destroy();
    }
  }

  private uploadSource(): void {
    const { src } = this;
    const source: NzSafeAny = typeof src === 'string' ? { type: 'video', sources: [{ src }] } : src;
    this._p.source = source;
    console.log(source, this._p.source);
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
