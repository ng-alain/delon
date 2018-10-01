import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Inject,
  TemplateRef,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { InputBoolean } from '@delon/util';

const CLS = 'footer-toolbar';
const CLSBODY = 'footer-toolbar__body';

@Component({
  selector: 'footer-toolbar',
  templateUrl: './footer-toolbar.component.html',
  preserveWhitespaces: false,
})
export class FooterToolbarComponent implements OnInit, OnDestroy {
  @Input()
  @InputBoolean()
  errorCollect = false;

  _extra = '';
  _extraTpl: TemplateRef<any>;
  @Input()
  set extra(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._extra = null;
      this._extraTpl = value;
    } else {
      this._extra = value;
    }
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private doc: any,
  ) {}

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, CLS);
    this.doc.querySelector('body').classList.add(CLSBODY);
  }

  ngOnDestroy() {
    this.doc.querySelector('body').classList.remove(CLSBODY);
  }
}
