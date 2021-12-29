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

import { AlainConfigService } from '@delon/util/config';
import { BooleanInput, InputBoolean, InputNumber, NumberInput } from '@delon/util/decorator';

@Component({
  selector: 'sv-container, [sv-container]',
  exportAs: 'svContainer',
  template: `
    <div class="ant-row" [ngStyle]="{ 'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2) }">
      <sv-title *ngIf="title">
        <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
      </sv-title>
      <ng-content></ng-content>
    </div>
  `,
  host: {
    '[class.sv__container]': 'true',
    '[class.sv__horizontal]': `layout === 'horizontal'`,
    '[class.sv__vertical]': `layout === 'vertical'`,
    '[class.sv__small]': `size === 'small'`,
    '[class.sv__large]': `size === 'large'`,
    '[class.clearfix]': `true`
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SVContainerComponent {
  static ngAcceptInputType_gutter: NumberInput;
  static ngAcceptInputType_labelWidth: NumberInput;
  static ngAcceptInputType_col: NumberInput;
  static ngAcceptInputType_default: BooleanInput;
  static ngAcceptInputType_noColon: BooleanInput;

  @Input() title?: string | TemplateRef<void>;
  @Input() size!: 'small' | 'large';
  /** 列表项间距，单位为 `px` */
  @Input() @InputNumber() gutter!: number;
  @Input() layout!: 'horizontal' | 'vertical';
  @Input() @InputNumber() labelWidth?: number;
  /** 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定 */
  @Input() @InputNumber() col!: number;
  @Input() @InputBoolean() default!: boolean;
  @Input() @InputBoolean() noColon = false;

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

@Component({
  selector: 'sv-title, [sv-title]',
  exportAs: 'svTitle',
  template: '<ng-content></ng-content>',
  host: {
    '[class.sv__title]': 'true'
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SVTitleComponent implements OnInit {
  private el: HTMLElement;
  constructor(el: ElementRef, @Host() @Optional() private parent: SVContainerComponent, private ren: Renderer2) {
    if (parent == null) {
      throw new Error(`[sv-title] must include 'sv-container' component`);
    }
    this.el = el.nativeElement;
  }

  private setClass(): void {
    const { gutter } = this.parent;
    const { el } = this;
    this.ren.setStyle(el, 'padding-left', `${gutter / 2}px`);
    this.ren.setStyle(el, 'padding-right', `${gutter / 2}px`);
  }

  ngOnInit(): void {
    this.setClass();
  }
}
