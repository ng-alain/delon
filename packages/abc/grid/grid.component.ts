import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Host,
  Input,
  OnChanges,
  Optional,
  Renderer2,
} from '@angular/core';

import { ResponsiveService } from '@delon/theme';
import { InputNumber } from '@delon/util';

import { SGContainerComponent } from './grid-container.component';

const prefixCls = `sg`;

@Component({
  selector: 'sg',
  template: `
    <ng-content></ng-content>
  `,
  host: {
    '[style.padding-left.px]': 'paddingValue',
    '[style.padding-right.px]': 'paddingValue',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SGComponent implements OnChanges, AfterViewInit {
  private el: HTMLElement;
  private clsMap: string[] = [];
  private inited = false;

  @Input() @InputNumber(null) col: number;

  get paddingValue(): number {
    return this.parent.gutter / 2;
  }

  constructor(
    el: ElementRef,
    private ren: Renderer2,
    @Optional() @Host() private parent: SGContainerComponent,
    private rep: ResponsiveService,
  ) {
    if (parent == null) {
      throw new Error(`[sg] must include 'sg-container' component`);
    }
    this.el = el.nativeElement;
  }

  private setClass(): this {
    const { el, ren, clsMap, col, parent } = this;
    clsMap.forEach(cls => ren.removeClass(el, cls));
    clsMap.length = 0;
    clsMap.push(
      ...this.rep.genCls(col != null ? col : parent.colInCon || parent.col),
      `${prefixCls}__item`,
    );
    clsMap.forEach(cls => ren.addClass(el, cls));
    return this;
  }

  ngOnChanges() {
    if (this.inited) this.setClass();
  }

  ngAfterViewInit(): void {
    this.setClass();
    this.inited = true;
  }
}
