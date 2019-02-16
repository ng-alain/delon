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
  @Input() @InputBoolean() errorCollect = false;
  @Input() extra: string | TemplateRef<void>;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private doc: any,
  ) {}

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
