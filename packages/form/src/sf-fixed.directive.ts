import { AfterViewInit, Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

import { InputNumber } from '@delon/util/decorator';

@Directive({ selector: '[fixed-label]' })
export class SFFixedDirective implements AfterViewInit, OnChanges {
  private _inited = false;

  @Input('fixed-label') @InputNumber() num?: number | null;

  private init(): void {
    if (!this._inited || this.num == null || this.num <= 0) return;
    const el = this.el.nativeElement;
    const widgetEl = el.querySelector<HTMLElement>('.ant-row') || el;
    this.render.addClass(widgetEl, 'sf__fixed');
    const labelEl = widgetEl.querySelector('.ant-form-item-label');
    const controlEl = widgetEl.querySelector('.ant-form-item-control-wrapper,.ant-form-item-control');
    const unit = `${this.num}px`;
    if (labelEl) {
      this.render.setStyle(labelEl, 'flex', `0 0 ${unit}`);
      this.render.setStyle(controlEl, 'max-width', `calc(100% - ${unit})`);
    } else {
      this.render.setStyle(controlEl, 'margin-left', unit);
    }
  }

  constructor(
    private el: ElementRef<HTMLElement>,
    private render: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this._inited = true;
    this.init();
  }

  ngOnChanges(): void {
    if (this._inited) this.init();
  }
}
