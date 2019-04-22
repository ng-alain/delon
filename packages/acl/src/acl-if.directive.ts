import { Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { ACLDirective } from './acl.directive';
import { ACLService } from './acl.service';
import { ACLCanType } from './acl.type';

@Directive({
  selector: '[aclIf]',
  exportAs: 'aclIf',
})
export class ACLIfDirective extends ACLDirective {
  constructor(
    private _viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<ACLCanType>,
    el: ElementRef,
    renderer: Renderer2,
    srv: ACLService,
  ) {
    super(el, renderer, srv);
  }

  @Input('aclIf')
  set acl(value: ACLCanType) {
    this.set(value);
  }

  protected _updateView(): void {
    this._viewContainer.clear();
    if (this.srv.can(this._value)) {
      this._viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
