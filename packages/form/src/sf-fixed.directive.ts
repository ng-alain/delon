import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnChanges,
  Renderer2,
  inject,
  input,
  numberAttribute
} from '@angular/core';

@Directive({
  selector: '[fixed-label]',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class SFFixedDirective implements AfterViewInit, OnChanges {
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly render = inject(Renderer2);

  private _inited = false;

  /** 固定标签宽度（px），`0` 表示不固定；非法值按 `0` 处理 */
  readonly num = input(0, { alias: 'fixed-label', transform: (v: unknown) => numberAttribute(v, 0) });

  private init(): void {
    const num = this.num();
    if (!this._inited || num <= 0) return;
    const el = this.el;
    const widgetEl = el.querySelector<HTMLElement>('.ant-row') ?? el;
    this.render.addClass(widgetEl, 'sf__fixed');
    const labelEl = widgetEl.querySelector('.ant-form-item-label');
    const controlEl = widgetEl.querySelector('.ant-form-item-control-wrapper,.ant-form-item-control');
    const unit = `${num}px`;
    if (labelEl) {
      this.render.setStyle(labelEl, 'flex', `0 0 ${unit}`);
      this.render.setStyle(controlEl, 'max-width', `calc(100% - ${unit})`);
    } else {
      this.render.setStyle(controlEl, 'margin-left', unit);
    }
  }

  ngAfterViewInit(): void {
    this._inited = true;
    this.init();
  }

  ngOnChanges(): void {
    if (this._inited) this.init();
  }
}
