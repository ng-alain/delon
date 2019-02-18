import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  TemplateRef,
} from '@angular/core';
import { updateHostClass, InputNumber } from '@delon/util';
import { SVConfig } from './view.config';

const prefixCls = `sv`;

@Component({
  selector: 'sv-container, [sv-container]',
  templateUrl: './view-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'svContainer',
})
export class SVContainerComponent implements OnInit, OnChanges {
  private el: HTMLElement;
  // #region fields

  @Input() title: string | TemplateRef<void>;
  @Input() size: 'small' | 'large';
  /** 列表项间距，单位为 `px` */
  @Input() @InputNumber() gutter: number;
  @Input() layout: 'horizontal' | 'vertical';
  @Input() @InputNumber(null) labelWidth: number;
  /** 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定 */
  @Input() @InputNumber() col: number;
  @Input() default: boolean;

  // #endregion

  constructor(el: ElementRef, private ren: Renderer2, cog: SVConfig) {
    this.el = el.nativeElement;
    Object.assign(this, { ...new SVConfig(), ...cog });
  }

  private setClass() {
    const { el, ren, size, layout } = this;
    updateHostClass(el, ren, {
      [`${prefixCls}__container`]: true,
      [`${prefixCls}__${size}`]: true,
      [`${prefixCls}__${layout}`]: true,
      [`clearfix`]: true,
    });
  }

  ngOnInit() {
    this.setClass();
  }

  ngOnChanges() {
    this.setClass();
  }
}
