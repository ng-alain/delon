import { NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Host,
  Input,
  OnInit,
  Optional,
  Renderer2,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';

import type { REP_TYPE } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { BooleanInput, InputBoolean, InputNumber, NumberInput } from '@delon/util/decorator';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';

@Component({
  selector: 'sv-title, [sv-title]',
  exportAs: 'svTitle',
  template: '<ng-content />',
  host: {
    '[class.sv__title]': 'true'
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true
})
export class SVTitleComponent implements OnInit {
  constructor(
    private el: ElementRef<HTMLElement>,
    @Host() @Optional() private parent: SVContainerComponent,
    private ren: Renderer2
  ) {
    if (parent == null) {
      throw new Error(`[sv-title] must include 'sv-container' component`);
    }
  }

  private setClass(): void {
    const gutter = this.parent.gutter;
    const el = this.el.nativeElement;
    this.ren.setStyle(el, 'padding-left', `${gutter / 2}px`);
    this.ren.setStyle(el, 'padding-right', `${gutter / 2}px`);
  }

  ngOnInit(): void {
    this.setClass();
  }
}

@Component({
  selector: 'sv-container, [sv-container]',
  exportAs: 'svContainer',
  template: `
    <div class="ant-row" [ngStyle]="margin">
      @if (title) {
        <sv-title>
          <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
        </sv-title>
      }
      <ng-content />
    </div>
  `,
  host: {
    '[class.sv__container]': 'true',
    '[class.sv__horizontal]': `layout === 'horizontal'`,
    '[class.sv__vertical]': `layout === 'vertical'`,
    '[class.sv__small]': `size === 'small'`,
    '[class.sv__large]': `size === 'large'`,
    '[class.sv__bordered]': `bordered`,
    '[class.clearfix]': `true`
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NgStyle, SVTitleComponent, NzStringTemplateOutletDirective]
})
export class SVContainerComponent {
  static ngAcceptInputType_gutter: NumberInput;
  static ngAcceptInputType_labelWidth: NumberInput;
  static ngAcceptInputType_col: NumberInput;
  static ngAcceptInputType_colInCon: NumberInput;
  static ngAcceptInputType_default: BooleanInput;
  static ngAcceptInputType_noColon: BooleanInput;
  static ngAcceptInputType_bordered: BooleanInput;

  @Input('sv-container') @InputNumber(null) colInCon?: REP_TYPE;
  @Input() title?: string | TemplateRef<void>;
  @Input() size?: 'small' | 'large' | 'default';
  /** 列表项间距，单位为 `px` */
  @Input() @InputNumber() gutter!: number;
  @Input() layout!: 'horizontal' | 'vertical';
  @Input() @InputNumber() labelWidth?: number;
  /** 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定 */
  @Input() @InputNumber() col!: number;
  @Input() @InputBoolean() default!: boolean;
  @Input() @InputBoolean() noColon = false;
  @Input() @InputBoolean() bordered = false;

  get margin(): { [k: string]: number } {
    return this.bordered ? {} : { 'margin-left.px': -(this.gutter / 2), 'margin-right.px': -(this.gutter / 2) };
  }

  constructor(configSrv: AlainConfigService) {
    configSrv.attach(this, 'sv', {
      size: 'large',
      gutter: 32,
      layout: 'horizontal',
      col: 3,
      default: true
    });
  }
}
