import {
  Component,
  Host,
  ElementRef,
  Renderer2,
  OnInit,
  Optional,
} from '@angular/core';
import { NaEditWrapComponent } from './edit-wrap.component';

@Component({
  selector: 'na-edit-title, [na-edit-title]',
  template: '<ng-content></ng-content>',
  host: {
    '[class.na-edit__title]': 'true',
  },
})
export class NaEditTitleComponent implements OnInit {
  private el: HTMLElement;
  constructor(
    @Host()
    @Optional()
    private parent: NaEditWrapComponent,
    el: ElementRef,
    private ren: Renderer2,
  ) {
    if (parent == null) {
      throw new Error(`[na-edit-title] must include 'na-edit-wrap' component`);
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
