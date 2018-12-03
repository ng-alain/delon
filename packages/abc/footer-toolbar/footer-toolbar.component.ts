import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
} from '@angular/core';
import { InputBoolean } from '@delon/util';

const CLSBODY = 'footer-toolbar__body';

@Component({
  selector: 'footer-toolbar',
  templateUrl: './footer-toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterToolbarComponent implements OnInit, OnDestroy {
  @Input()
  @InputBoolean()
  errorCollect = false;

  _extra = '';
  _extraTpl: TemplateRef<void>;
  @Input()
  set extra(value: string | TemplateRef<void>) {
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
    // tslint:disable-next-line:no-any
    @Inject(DOCUMENT) private doc: any,
  ) { }

  private get bodyCls() {
    return this.doc.querySelector('body').classList;
  }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'footer-toolbar');
    this.bodyCls.add(CLSBODY);
  }

  ngOnDestroy() {
    this.bodyCls.remove(CLSBODY);
  }
}
