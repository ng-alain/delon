import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  effect,
  inject,
  input,
  model,
  numberAttribute,
  signal
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
  template: `<ng-content />`,
  host: {
    class: 'full-content',
    '[style.height.px]': '_height()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class FullContentComponent implements OnDestroy {
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly srv = inject(FullContentService);
  private readonly router = inject(Router);
  private readonly doc = inject(DOCUMENT);

  private bodyEl = this.doc.querySelector('body')!;
  private id = `_full-content-${Math.random().toString(36).substring(2)}`;

  _height = signal(0);

  readonly hideTitle = input(true, { transform: booleanAttribute });
  readonly padding = input(24, { transform: numberAttribute });
  readonly fullscreen = model<boolean>();

  constructor() {
    // when window resize
    fromEvent(window, 'resize')
      .pipe(takeUntilDestroyed(), debounceTime(200))
      .subscribe(() => this.updateHeight());

    // when servier changed
    this.srv.change
      .pipe(
        takeUntilDestroyed(),
        filter(res => res !== null)
      )
      .subscribe(() => this.toggle());

    // when router changed
    this.router.events
      .pipe(
        takeUntilDestroyed(),
        filter((e: Event) => e instanceof ActivationStart || e instanceof ActivationEnd),
        debounceTime(200)
      )
      .subscribe(() => {
        if (this.doc.querySelector(`#${this.id}`)) {
          this.bodyEl.classList.add(wrapCls);
          this.updateCls();
        } else {
          this.removeInBody();
        }
      });

    afterNextRender(() => {
      this.bodyEl.classList.add(wrapCls);
      this.el.id = this.id;

      this.updateCls();
      this.updateHeight();
    });

    effect(() => this.update());
  }

  private updateCls(): void {
    const clss = this.bodyEl.classList;
    if (this.fullscreen()) {
      clss.add(openedCls);
      if (this.hideTitle()) {
        clss.add(hideTitleCls);
      }
    } else {
      clss.remove(openedCls);
      if (this.hideTitle()) {
        clss.remove(hideTitleCls);
      }
    }
  }

  private update(): void {
    this.updateCls();
    this.updateHeight();
    this.fullscreen.set(this.fullscreen());
  }

  private updateHeight(): void {
    this._height.set(this.bodyEl.getBoundingClientRect().height - this.el.getBoundingClientRect().top - this.padding());
  }

  private removeInBody(): void {
    this.bodyEl.classList.remove(wrapCls, openedCls, hideTitleCls);
  }

  toggle(): void {
    this.fullscreen.set(!this.fullscreen());
    this.update();
    this.updateHeight();
  }

  ngOnDestroy(): void {
    this.removeInBody();
  }
}
