import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { BooleanInput, InputBoolean, InputNumber, NumberInput } from '@delon/util';

@Component({
  selector: 'quick-menu',
  exportAs: 'quickMenu',
  templateUrl: './quick-menu.component.html',
  host: {
    '[class.quick-menu]': 'true',
    '(click)': '_click()',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class QuickMenuComponent implements OnInit, OnChanges {
  static ngAcceptInputType_top: NumberInput;
  static ngAcceptInputType_width: NumberInput;
  static ngAcceptInputType_expand: BooleanInput;

  constructor(private cdr: ChangeDetectorRef, private el: ElementRef, private render: Renderer2) {}
  ctrlStyle: { [key: string]: string } = {};

  @Input() icon: string | TemplateRef<void> = 'question-circle';
  @Input() @InputNumber() top = 120;
  @Input() @InputNumber() width = 200;
  @Input() bgColor: string;
  @Input() borderColor: string;
  @Input() @InputBoolean() expand: boolean = false;
  @Output() readonly expandChange = new EventEmitter<boolean>();

  private show = false;
  private initFlag = false;

  _click(): void {
    this.show = !this.show;
    this.expandChange.emit(this.show);
    this.setStyle();
  }

  private setStyle(): void {
    this.ctrlStyle = {
      'background-color': this.bgColor,
      'border-color': this.borderColor,
    };

    const res: string[] = [`top:${this.top}px`, `width:${this.width}px`, `margin-right:-${this.show ? 0 : this.width}px`];
    if (this.bgColor) {
      res.push(`background-color:${this.bgColor}`);
    }
    if (this.borderColor) {
      res.push(`border-color:${this.borderColor}`);
    }
    this.render.setAttribute(this.el.nativeElement, 'style', res.join(';'));
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.initFlag = true;
    this.setStyle();
  }

  ngOnChanges(): void {
    this.show = this.expand;
    if (this.initFlag) {
      this.setStyle();
    }
  }
}
