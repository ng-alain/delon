import {
  Component,
  Input,
  ViewChild,
  TemplateRef,
  ElementRef,
  AfterViewInit,
  Renderer2,
} from '@angular/core';
import { isEmpty, toBoolean } from '@delon/util';

@Component({
  selector: 'desc-list-item',
  template: `
  <ng-template #tpl>
    <div class="ad-desc-list__term" *ngIf="_term || _termTpl">
      <ng-container *ngIf="_term; else _termTpl">{{_term}}</ng-container>
    </div>
    <div class="ad-desc-list__detail {{detailClass}}" (cdkObserveContent)="checkContent()" #contentElement><ng-content></ng-content></div>
  </ng-template>
  `,
  preserveWhitespaces: false,
})
export class DescListItemComponent implements AfterViewInit {
  @ViewChild('contentElement') private contentElement: ElementRef;

  // region fields

  _term = '';
  _termTpl: TemplateRef<any>;
  @Input()
  set term(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._term = null;
      this._termTpl = value;
    } else this._term = value;
  }

  @Input()
  get noDefault() {
    return this._noDefault;
  }
  set noDefault(value: any) {
    this._noDefault = toBoolean(value);
  }
  private _noDefault = false;

  @Input() detailClass: string = '';

  // endregion

  @ViewChild('tpl') tpl: TemplateRef<any>;

  constructor(private renderer: Renderer2) {}

  checkContent(): void {
    if (!this.contentElement) {
      return ;
    }
    const el = this.contentElement.nativeElement as HTMLElement;
    const cls = `ad-desc-list__default`;
    if (!this.noDefault && isEmpty(el)) {
      this.renderer.addClass(el, cls);
    } else {
      this.renderer.removeClass(el, cls);
    }
  }

  ngAfterViewInit(): void {
    this.checkContent();
  }
}
