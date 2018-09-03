import {
  Component,
  Host,
  ElementRef,
  Renderer2,
  OnInit,
  Optional,
} from '@angular/core';
import { SVContainerComponent } from './view-container.component';

@Component({
  selector: 'sv-title, [sv-title]',
  template: '<ng-content></ng-content>',
  host: {
    '[class.sv__title]': 'true',
  },
})
export class SVTitleComponent implements OnInit {
  private el: HTMLElement;
  constructor(
    @Host()
    @Optional()
    private parent: SVContainerComponent,
    el: ElementRef,
    private ren: Renderer2,
  ) {
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
