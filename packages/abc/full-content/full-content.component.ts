import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ActivationEnd, ActivationStart, Event, Router } from '@angular/router';
import { InputBoolean, InputNumber } from '@delon/util';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

import { FullContentService } from './full-content.service';

const wrapCls = `full-content__body`;
const openedCls = `full-content__opened`;
const hideTitleCls = `full-content__hidden-title`;

@Component({
  selector: 'full-content',
  template: `
    <ng-content></ng-content>
  `,
  host: {
    '[class.full-content]': 'true',
    '[style.height.px]': '_height',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullContentComponent implements AfterViewInit, OnInit, OnChanges, OnDestroy {
  private bodyEl: HTMLElement;
  private inited = false;
  private srv$: Subscription;
  private route$: Subscription;
  private id = `_full-content-${Math.random()
    .toString(36)
    .substring(2)}`;
  private scroll$: Subscription = null;

  _height = 0;

  // #region fields

  @Input() @InputBoolean() fullscreen: boolean;
  @Input() @InputBoolean() hideTitle = true;
  @Input() @InputNumber() padding = 24;
  @Output() readonly fullscreenChange = new EventEmitter<boolean>();

  // #endregion

  constructor(
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
    private srv: FullContentService,
    private router: Router,
    @Inject(DOCUMENT) private doc: any,
  ) {}

  private updateCls() {
    const clss = this.bodyEl.classList;
    if (this.fullscreen) {
      clss.add(openedCls);
      if (this.hideTitle) {
        clss.add(hideTitleCls);
      }
    } else {
      clss.remove(openedCls);
      if (this.hideTitle) {
        clss.remove(hideTitleCls);
      }
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
    this.cdr.detectChanges();
  }

  private removeInBody() {
    this.bodyEl.classList.remove(wrapCls, openedCls, hideTitleCls);
  }

  ngOnInit(): void {
    this.inited = true;
    this.bodyEl = this.doc.querySelector('body');
    this.bodyEl.classList.add(wrapCls);
    (this.el.nativeElement as HTMLElement).id = this.id;

    this.updateCls();

    // when window resize
    this.scroll$ = fromEvent(window, 'resize')
      .pipe(debounceTime(200))
      .subscribe(() => this.updateHeight());

    // when servier changed
    this.srv$ = this.srv.change.pipe(filter(res => res !== null)).subscribe(() => this.toggle());

    // when router changed
    this.route$ = this.router.events
      .pipe(
        filter((e: Event) => e instanceof ActivationStart || e instanceof ActivationEnd),
        debounceTime(200),
      )
      .subscribe(() => {
        if (!!this.doc.querySelector('#' + this.id)) {
          this.bodyEl.classList.add(wrapCls);
          this.updateCls();
        } else {
          this.removeInBody();
        }
      });
  }

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
    this.removeInBody();
    this.scroll$.unsubscribe();
    this.srv$.unsubscribe();
    this.route$.unsubscribe();
  }
}
