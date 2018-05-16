import {
  Component,
  ElementRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  OnInit,
  Inject,
  HostBinding,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from '@angular/cdk/coercion';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime, filter, distinct } from 'rxjs/operators';
import { FullContentService } from './full-content.service';
import { Router, ActivationStart, ActivationEnd } from '@angular/router';

const cls = `ad-full-content-wrap`;
const fsCls = `ad-full-content-fs`;
const hideTitleCls = `ad-full-content-ht`;

@Component({
  selector: 'full-content',
  template: `<ng-content></ng-content>`,
  host: { '[class.ad-full-content]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullContentComponent
  implements AfterViewInit, OnInit, OnChanges, OnDestroy {
  private bodyEl: HTMLElement;
  private inited = false;
  private srv$: Subscription;
  private route$: Subscription;
  private id = `_full-content-${Math.random()
    .toString(36)
    .substring(2)}`;

  @HostBinding('style.height.px') _height = 0;

  // region: fields

  @Input()
  get fullscreen() {
    return this._fullscreen;
  }
  set fullscreen(value: any) {
    this._fullscreen = coerceBooleanProperty(value);
  }
  private _fullscreen;

  @Input()
  get hideTitle() {
    return this._hideTitle;
  }
  set hideTitle(value: any) {
    this._hideTitle = coerceBooleanProperty(value);
  }
  private _hideTitle = true;

  @Input()
  get padding() {
    return this._padding;
  }
  set padding(value: any) {
    this._padding = coerceNumberProperty(value);
  }
  private _padding = 24;

  @Output()
  fullscreenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  // endregion

  constructor(
    private el: ElementRef,
    private router: Router,
    private cd: ChangeDetectorRef,
    private srv: FullContentService,
    @Inject(DOCUMENT) private doc: any,
  ) {}

  ngOnInit(): void {
    this.inited = true;
    this.bodyEl = this.doc.querySelector('body');
    this.bodyEl.classList.add(cls);
    (this.el.nativeElement as HTMLElement).id = this.id;
    this.update();
    this.installResizeEvent();
    this.srv$ = <any>this.srv.change.subscribe(res => {
      if (res) this.toggle();
    });
    this.route$ = <any>this.router.events
      .pipe(
        filter(
          (e: any) =>
            e instanceof ActivationStart || e instanceof ActivationEnd,
        ),
        debounceTime(200),
      )
      .subscribe(e => {
        if (!!document.querySelector('#' + this.id)) {
          this.bodyEl.classList.add(cls);
          this.updateFsCls();
        } else {
          this.bodyEl.classList.remove(cls, fsCls, hideTitleCls);
        }
      });
  }

  ngAfterViewInit() {
    setTimeout(() => this.updateHeight());
  }

  private updateFsCls() {
    if (this.fullscreen) {
      this.bodyEl.classList.add(fsCls);
      if (this.hideTitle) this.bodyEl.classList.add(hideTitleCls);
    } else {
      this.bodyEl.classList.remove(fsCls);
      if (this.hideTitle) this.bodyEl.classList.remove(hideTitleCls);
    }
  }

  private update() {
    this.updateFsCls();
    this.fullscreenChange.emit(this.fullscreen);
  }

  private updateHeight() {
    this._height =
      this.bodyEl.getBoundingClientRect().height -
      (this.el.nativeElement as HTMLElement).getBoundingClientRect().top -
      this.padding;
    this.cd.detectChanges();
  }

  toggle() {
    this.fullscreen = !this.fullscreen;
    this.update();
    this.updateHeight();
  }

  ngOnChanges(
    changes: { [P in keyof this]?: SimpleChange } & SimpleChanges,
  ): void {
    if (this.inited) this.update();
  }

  ngOnDestroy(): void {
    this.bodyEl.classList.remove(cls, fsCls, hideTitleCls);
    this.uninstallResizeEvent();
    this.srv$.unsubscribe();
    this.route$.unsubscribe();
  }

  // region: resize

  private scroll$: Subscription = null;
  private installResizeEvent() {
    this.scroll$ = fromEvent(window, 'resize')
      .pipe(debounceTime(200))
      .subscribe(() => this.updateHeight());
  }

  private uninstallResizeEvent() {
    this.scroll$.unsubscribe();
  }

  // endregion
}
