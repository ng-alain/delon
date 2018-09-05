import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Inject,
  TemplateRef,
  ContentChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { toBoolean } from '@delon/util';

const CLS = 'footer-toolbar';
const CLSBODY = 'footer-toolbar__body';

@Component({
  selector: 'footer-toolbar',
  template: `
  <div class="footer-toolbar__left"><ng-container *ngIf="extra" [ngTemplateOutlet]="extra"></ng-container></div>
  <div class="footer-toolbar__right">
    <error-collect *ngIf="errorCollect"></error-collect>
    <ng-content></ng-content>
  </div>
  `,
  preserveWhitespaces: false,
})
export class FooterToolbarComponent implements OnInit, OnDestroy {
  @Input()
  get errorCollect() {
    return this._errorCollect;
  }
  set errorCollect(value: any) {
    this._errorCollect = toBoolean(value);
  }
  private _errorCollect = false;

  @ContentChild('extra') extra: TemplateRef<any>;

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
