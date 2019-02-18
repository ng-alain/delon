import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  TemplateRef,
} from '@angular/core';

import { InputNumber } from '@delon/util';

@Component({
  selector: 'quick-menu',
  templateUrl: './quick-menu.component.html',
  host: {
    '[class.quick-menu]': 'true',
    '(click)': '_click()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickMenuComponent implements OnInit, OnChanges {
  // #region fields

  @Input() icon: string | TemplateRef<void> = 'question-circle';
  @Input() @InputNumber() top = 120;
  @Input() @InputNumber() width = 200;
  @Input() bgColor = '#fff';
  @Input() borderColor = '#ddd';

  // #endregion

  constructor(private cdr: ChangeDetectorRef, private el: ElementRef, private render: Renderer2) {}

  private show = false;

  _click() {
    this.show = !this.show;
    this.setStyle();
  }

  ctrlStyle: { [key: string]: string } = {};
  private setStyle() {
    this.ctrlStyle = {
      'background-color': this.bgColor,
      'border-color': this.borderColor,
    };

    const res: string[] = [
      `top:${this.top}px`,
      `width:${this.width}px`,
      `background-color:${this.bgColor}`,
      `border-color:${this.borderColor}`,
      `margin-right:-${this.show ? 0 : this.width}px`,
    ];
    this.render.setAttribute(this.el.nativeElement, 'style', res.join(';'));
    this.cdr.detectChanges();
  }

  private initFlag = false;
  ngOnInit(): void {
    this.initFlag = true;
    this.setStyle();
  }
  ngOnChanges(): void {
    if (this.initFlag) this.setStyle();
  }
}
