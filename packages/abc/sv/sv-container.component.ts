import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  numberAttribute
} from '@angular/core';

import type { REP_TYPE } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
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
  encapsulation: ViewEncapsulation.None
})
export class SVTitleComponent implements OnInit {
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly parentComp = inject(SVContainerComponent, { host: true, optional: true });
  private readonly ren = inject(Renderer2);

  constructor() {
    if (this.parentComp == null) {
      throw new Error(`[sv-title] must include 'sv-container' component`);
    }
  }

  private setClass(): void {
    const gutter = this.parentComp!.gutter;
    const el = this.el;
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
    <div class="ant-row" [style]="margin">
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
  imports: [SVTitleComponent, NzStringTemplateOutletDirective]
})
export class SVContainerComponent {
  @Input({ alias: 'sv-container', transform: (v: unknown) => (v == null ? null : numberAttribute(v)) })
  colInCon?: REP_TYPE;
  @Input() title?: string | TemplateRef<void>;
  @Input() size?: 'small' | 'large' | 'default';
  /** 列表项间距，单位为 `px` */
  @Input({ transform: numberAttribute }) gutter!: number;
  @Input() layout!: 'horizontal' | 'vertical';
  @Input({ transform: numberAttribute }) labelWidth?: number;
  /** 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定 */
  @Input({ transform: numberAttribute }) col!: number;
  @Input({ transform: booleanAttribute }) default!: boolean;
  @Input({ transform: booleanAttribute }) noColon = false;
  @Input({ transform: booleanAttribute }) bordered = false;

  get margin(): Record<string, string> {
    return this.bordered ? {} : { 'margin-left': `${-(this.gutter / 2)}px`, 'margin-right': `${-(this.gutter / 2)}px` };
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
