import { NgStyle } from '@angular/common';
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
  booleanAttribute,
  inject,
  numberAttribute
} from '@angular/core';

import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'quick-menu',
  exportAs: 'quickMenu',
  templateUrl: './quick-menu.component.html',
  host: {
    '[class.quick-menu]': 'true',
    '(click)': '_click()'
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NgStyle, NzIconDirective, NzStringTemplateOutletDirective]
})
export class QuickMenuComponent implements OnInit, OnChanges {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly render = inject(Renderer2);

  ctrlStyle: { [key: string]: string | undefined } = {};

  @Input() icon: string | TemplateRef<void> = 'question-circle';
  @Input({ transform: numberAttribute }) top = 120;
  @Input({ transform: numberAttribute }) width = 200;
  @Input() bgColor?: string;
  @Input() borderColor?: string;
  @Input({ transform: booleanAttribute }) expand: boolean = false;
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
      'border-color': this.borderColor
    };

    const res: string[] = [
      `top:${this.top}px`,
      `width:${this.width}px`,
      `margin-right:-${this.show ? 0 : this.width}px`
    ];
    if (this.bgColor) {
      res.push(`background-color:${this.bgColor}`);
    }
    if (this.borderColor) {
      res.push(`border-color:${this.borderColor}`);
    }
    this.render.setAttribute(this.el, 'style', res.join(';'));
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
