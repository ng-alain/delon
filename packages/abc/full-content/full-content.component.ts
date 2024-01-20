import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  numberAttribute
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivationEnd, ActivationStart, Event, Router } from '@angular/router';
import { fromEvent, debounceTime, filter } from 'rxjs';

import { FullContentService } from './full-content.service';

const wrapCls = `full-content__body`;
const openedCls = `full-content__opened`;
const hideTitleCls = `full-content__hidden-title`;

@Component({
  selector: 'full-content',
  exportAs: 'fullContent',
  template: ` <ng-content /> `,
  host: {
    '[class.full-content]': 'true',
    '[style.height.px]': '_height'
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true
})
export class FullContentComponent implements AfterViewInit, OnInit, OnChanges, OnDestroy {
  private readonly destroy$ = inject(DestroyRef);
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly srv = inject(FullContentService);
  private readonly router = inject(Router);
  private readonly doc = inject(DOCUMENT);

  private bodyEl = this.doc.querySelector('body')!;
  private inited = false;
  private id = `_full-content-${Math.random().toString(36).substring(2)}`;

  _height = 0;

  @Input({ transform: booleanAttribute }) fullscreen?: boolean;
  @Input({ transform: booleanAttribute }) hideTitle = true;
  @Input({ transform: numberAttribute }) padding = 24;
  @Output() readonly fullscreenChange = new EventEmitter<boolean>();

  private updateCls(): void {
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

  private update(): void {
    this.updateCls();
    this.updateHeight();
    this.fullscreenChange.emit(this.fullscreen);
  }

  private updateHeight(): void {
    this._height = this.bodyEl.getBoundingClientRect().height - this.el.getBoundingClientRect().top - this.padding;
    this.cdr.detectChanges();
  }

  private removeInBody(): void {
    this.bodyEl.classList.remove(wrapCls, openedCls, hideTitleCls);
  }

  ngOnInit(): void {
    this.inited = true;
    this.bodyEl.classList.add(wrapCls);
    this.el.id = this.id;

    this.updateCls();

    // when window resize
    fromEvent(window, 'resize')
      .pipe(takeUntilDestroyed(this.destroy$), debounceTime(200))
      .subscribe(() => this.updateHeight());

    // when servier changed
    this.srv.change
      .pipe(
        takeUntilDestroyed(this.destroy$),
        filter(res => res !== null)
      )
      .subscribe(() => this.toggle());

    // when router changed
    this.router.events
      .pipe(
        takeUntilDestroyed(this.destroy$),
        filter((e: Event) => e instanceof ActivationStart || e instanceof ActivationEnd),
        debounceTime(200)
      )
      .subscribe(() => {
        if (!!this.doc.querySelector(`#${this.id}`)) {
          this.bodyEl.classList.add(wrapCls);
          this.updateCls();
        } else {
          this.removeInBody();
        }
      });
  }

  toggle(): void {
    this.fullscreen = !this.fullscreen;
    this.update();
    this.updateHeight();
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.updateHeight());
  }

  ngOnChanges(): void {
    if (this.inited) this.update();
  }

  ngOnDestroy(): void {
    this.removeInBody();
  }
}
