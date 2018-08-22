import {
  Component,
  ElementRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
  Inject,
  HostBinding,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { toBoolean, toNumber } from '@delon/util';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { NaFullContentService } from './full-content.service';

const cls = `na-full-content__wrap`;
const fsCls = `na-full-content__fs`;
const hideTitleCls = `na-full-content__ht`;

@Component({
  selector: 'na-full-content',
  template: `<ng-content></ng-content>`,
  host: { '[class.na-full-content]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NaFullContentComponent
  implements AfterViewInit, OnInit, OnChanges, OnDestroy {
  private bodyEl: HTMLElement;
  private inited = false;
  private srv$: Subscription;
  private id = `_full-content-${Math.random()
    .toString(36)
    .substring(2)}`;
  private scroll$: Subscription = null;

  @HostBinding('style.height.px')
  _height = 0;

  // #region fields

  @Input()
  get fullscreen() {
    return this._fullscreen;
  }
  set fullscreen(value: any) {
    this._fullscreen = toBoolean(value);
  }
  private _fullscreen;

  @Input()
  get hideTitle() {
    return this._hideTitle;
  }
  set hideTitle(value: any) {
    this._hideTitle = toBoolean(value);
  }
  private _hideTitle = true;

  @Input()
  get padding() {
    return this._padding;
  }
  set padding(value: any) {
    this._padding = toNumber(value);
  }
  private _padding = 24;

  @Output()
  fullscreenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  // #endregion

  constructor(
    private el: ElementRef,
    private cd: ChangeDetectorRef,
    private srv: NaFullContentService,
    @Inject(DOCUMENT) private doc: any,
  ) {}

  private updateCls() {
    if (this.fullscreen) {
      this.bodyEl.classList.add(fsCls);
      if (this.hideTitle) this.bodyEl.classList.add(hideTitleCls);
    } else {
      this.bodyEl.classList.remove(fsCls);
      if (this.hideTitle) this.bodyEl.classList.remove(hideTitleCls);
    }
  }

  private update() {
    this.updateCls();
    this.updateHeight();
    this.fullscreenChange.emit(this.fullscreen);
  }

  private updateHeight() {
    this._height =
      this.bodyEl.getBoundingClientRect().height -
      (this.el.nativeElement as HTMLElement).getBoundingClientRect().top -
      this.padding;
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    this.inited = true;
    this.bodyEl = this.doc.querySelector('body');
    (this.el.nativeElement as HTMLElement).id = this.id;

    this.updateCls();

    // when window resize
    this.scroll$ = fromEvent(window, 'resize')
      .pipe(debounceTime(200))
      .subscribe(() => this.updateHeight());

    // when servier changed
    this.srv$ = this.srv.change
      .pipe(filter(res => res !== null))
      .subscribe(() => this.toggle());
  }

  // #region reuse-tab

  _onReuseInit() {
    this.updateCls();
  }

  _onReuseDestroy() {
    this.bodyEl.classList.remove(cls, fsCls, hideTitleCls);
  }

  // #endregion

  toggle() {
    this.fullscreen = !this.fullscreen;
    this.update();
    this.updateHeight();
  }

  ngAfterViewInit() {
    setTimeout(() => this.updateHeight());
  }

  ngOnChanges(): void {
    if (this.inited) this.update();
  }

  ngOnDestroy(): void {
    this._onReuseDestroy();
    this.scroll$.unsubscribe();
    this.srv$.unsubscribe();
  }
}
