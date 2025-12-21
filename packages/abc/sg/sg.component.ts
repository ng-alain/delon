import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  ViewEncapsulation,
  inject,
  numberAttribute
} from '@angular/core';

import { ResponsiveService } from '@delon/theme';

import { SGContainerComponent } from './sg-container.component';

const prefixCls = `sg`;

@Component({
  selector: 'sg',
  exportAs: 'sg',
  template: `<ng-content />`,
  host: {
    '[style.padding-left.px]': 'paddingValue',
    '[style.padding-right.px]': 'paddingValue'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SGComponent implements OnChanges, AfterViewInit {
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly ren = inject(Renderer2);
  private readonly rep = inject(ResponsiveService);
  private readonly parentComp = inject(SGContainerComponent, { host: true, optional: true })!;

  private clsMap: string[] = [];
  private inited = false;

  @Input({ transform: (v: unknown) => (v == null ? null : numberAttribute(v)) }) col: number | null = null;

  get paddingValue(): number {
    return this.parentComp.gutter / 2;
  }

  constructor() {
    if (this.parentComp == null) {
      throw new Error(`[sg] must include 'sg-container' component`);
    }
  }

  private setClass(): this {
    const { el, ren, clsMap, col } = this;
    const parent = this.parentComp;
    clsMap.forEach(cls => ren.removeClass(el, cls));
    clsMap.length = 0;
    const parentCol = parent.colInCon ?? parent.col;
    clsMap.push(...this.rep.genCls(col != null ? col : parentCol, parentCol), `${prefixCls}__item`);
    clsMap.forEach(cls => ren.addClass(el, cls));
    return this;
  }

  ngOnChanges(): void {
    if (this.inited) this.setClass();
  }

  ngAfterViewInit(): void {
    this.setClass();
    this.inited = true;
  }
}
