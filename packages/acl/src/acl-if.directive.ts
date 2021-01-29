import { Directive, EmbeddedViewRef, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { InputBoolean } from '@delon/util/other';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ACLService } from './acl.service';
import { ACLCanType } from './acl.type';

@Directive({
  selector: '[aclIf]',
  exportAs: 'aclIf',
})
export class ACLIfDirective implements OnDestroy {
  private _value: ACLCanType;
  private _change$: Subscription;
  private _thenTemplateRef: TemplateRef<void> | null = null;
  private _elseTemplateRef: TemplateRef<void> | null = null;
  private _thenViewRef: EmbeddedViewRef<void> | null = null;
  private _elseViewRef: EmbeddedViewRef<void> | null = null;

  constructor(templateRef: TemplateRef<void>, private srv: ACLService, private _viewContainer: ViewContainerRef) {
    this._change$ = this.srv.change.pipe(filter(r => r != null)).subscribe(() => this._updateView());
    this._thenTemplateRef = templateRef;
  }

  @Input()
  set aclIf(value: ACLCanType) {
    this._value = value;
    this._updateView();
  }

  @Input()
  set aclIfThen(templateRef: TemplateRef<void> | null) {
    this._thenTemplateRef = templateRef;
    this._thenViewRef = null;
    this._updateView();
  }

  @Input()
  set aclIfElse(templateRef: TemplateRef<void> | null) {
    this._elseTemplateRef = templateRef;
    this._elseViewRef = null;
    this._updateView();
  }

  @Input() @InputBoolean() except = false;

  protected _updateView(): void {
    const res = this.srv.can(this._value);
    if ((res && !this.except) || (!res && this.except)) {
      if (!this._thenViewRef) {
        this._viewContainer.clear();
        this._elseViewRef = null;
        if (this._thenTemplateRef) {
          this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef);
        }
      }
    } else {
      if (!this._elseViewRef) {
        this._viewContainer.clear();
        this._thenViewRef = null;
        if (this._elseTemplateRef) {
          this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef);
        }
      }
    }
  }

  ngOnDestroy(): void {
    this._change$.unsubscribe();
  }
}
