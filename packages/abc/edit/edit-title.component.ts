import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Host,
  OnInit,
  Optional,
  Renderer2,
} from '@angular/core';
import { SEContainerComponent } from './edit-container.component';

@Component({
  selector: 'se-title, [se-title]',
  template: '<ng-content></ng-content>',
  host: {
    '[class.se__title]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SETitleComponent implements OnInit {
  private el: HTMLElement;
  constructor(
    @Host()
    @Optional()
    private parent: SEContainerComponent,
    el: ElementRef,
    private ren: Renderer2,
  ) {
    if (parent == null) {
      throw new Error(`[se-title] must include 'se-container' component`);
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
