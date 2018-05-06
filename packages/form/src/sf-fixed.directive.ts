import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({ selector: '[fixed-label]' })
export class SFFixedDirective implements AfterViewInit, OnChanges {
  private el: HTMLDivElement;
  private _inited = false;

  @Input('fixed-label') num: number;

  private init() {
    if (this._inited || this.num == null || this.num <= 0) return;
    const widgetEl = this.el.querySelector('.ant-row') || this.el;
    this.render.addClass(widgetEl, 'sf-fixed');
    const labelEl = widgetEl.querySelector('.ant-form-item-label');
    const unit = this.num + 'px';
    if (labelEl) {
      this.render.setStyle(labelEl, 'width', unit);
      this.render.setStyle(labelEl, 'flex', `0 0 ${unit}`);
    } else {
      const controlEl = widgetEl.querySelector(
        '.ant-form-item-control-wrapper',
      );
      this.render.setStyle(controlEl, 'margin-left', unit);
    }
    this._inited = true;
  }

  constructor(er: ElementRef, private render: Renderer2) {
    this.el = er.nativeElement as HTMLDivElement;
  }

  ngAfterViewInit(): void {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this._inited) this.init();
  }
}
