import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  TemplateRef,
} from '@angular/core';
import { updateHostClass, InputNumber } from '@delon/util';

@Component({
  selector: 'number-info',
  templateUrl: './number-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberInfoComponent implements OnChanges {
  /** 标题 */
  @Input() title: string | TemplateRef<void>;
  /** 子标题 */
  @Input() subTitle: string | TemplateRef<void>;
  /** 总量 */
  @Input() total: string | TemplateRef<void>;
  /** 总量后缀 */
  @Input() subTotal: string | TemplateRef<void>;
  /** 子总量 */
  @Input() suffix: string;
  /** 增加状态 */
  @Input() status: 'up' | 'down';
  /** 状态样式 */
  @Input() theme: 'light' | 'default' = 'light';
  /** 设置数字和描述直接的间距（像素） */
  @Input() @InputNumber() gap = 8;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  setClass() {
    const { el, renderer, theme } = this;
    updateHostClass(
      el.nativeElement,
      renderer,
      {
        'number-info': true,
        [`number-info__${theme}`]: true,
      },
      true,
    );
  }

  ngOnChanges(): void {
    this.setClass();
  }
}
