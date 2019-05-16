import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Host,
  OnInit,
  Optional,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { SVContainerComponent } from './view-container.component';

@Component({
  selector: 'sv-title, [sv-title]',
  exportAs: 'svTitle',
  template: '<ng-content></ng-content>',
  host: {
    '[class.sv__title]': 'true',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SVTitleComponent implements OnInit {
  private el: HTMLElement;
  constructor(el: ElementRef, @Host() @Optional() private parent: SVContainerComponent, private ren: Renderer2) {
    if (parent == null) {
      throw new Error(`[sv-title] must include 'sv-container' component`);
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
}
