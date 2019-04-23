import { Directive, Input, TemplateRef, ViewContainerRef, EmbeddedViewRef, OnDestroy } from '@angular/core';
import { ACLService } from './acl.service';
import { ACLCanType } from './acl.type';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

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

  protected _updateView(): void {
    if (this.srv.can(this._value)) {
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
