import {
  Component,
  Host,
  ElementRef,
  Renderer2,
  OnInit,
  OnChanges,
} from '@angular/core';
import { NaViewComponent } from './view-wrap.component';

@Component({
  selector: 'na-view-title, [na-view-title]',
  template: '<ng-content></ng-content>',
  host: {
    '[class.na-view__title]': 'true',
  },
})
export class NaViewTitleComponent implements OnInit, OnChanges {
  private el: HTMLElement;
  constructor(
    @Host() private parent: NaViewComponent,
    el: ElementRef,
    private ren: Renderer2,
  ) {
    if (parent == null) {
      throw new Error(`[na-view-title] must include 'na-view-wrap' component`);
    }
    this.el = el.nativeElement;
  }

  private setClass() {
    const { gutter } = this.parent;
    const { el } = this;
    this.ren.setStyle(el, 'padding-left', `${gutter / 2}px`);
    this.ren.setStyle(el, 'padding-right', `${gutter / 2}px`);
  }

  ngOnInit() {
    this.setClass();
  }

  ngOnChanges() {
    this.setClass();
  }
}
