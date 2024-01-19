import { Directive, EmbeddedViewRef, Input, OnDestroy, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subscription, filter } from 'rxjs';

import { ACLService } from './acl.service';
import { ACLCanType } from './acl.type';

@Directive({
  selector: '[aclIf]',
  exportAs: 'aclIf',
  standalone: true
})
export class ACLIfDirective implements OnDestroy {
  private readonly srv = inject(ACLService);
  private readonly _viewContainer = inject(ViewContainerRef);
  static ngAcceptInputType_except: boolean | string | undefined | null;

  private _value!: ACLCanType;
  private _change$: Subscription;
  private _thenTemplateRef: TemplateRef<void> | null = inject(TemplateRef<void>);
  private _elseTemplateRef: TemplateRef<void> | null = null;
  private _thenViewRef: EmbeddedViewRef<void> | null = null;
  private _elseViewRef: EmbeddedViewRef<void> | null = null;
  private _except = false;

  constructor() {
    this._change$ = this.srv.change
      .pipe(
        takeUntilDestroyed(),
        filter(r => r != null)
      )
      .subscribe(() => this._updateView());
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

  @Input()
  set except(value: boolean) {
    this._except = value != null && `${value}` !== 'false';
  }
  get except(): boolean {
    return this._except;
  }

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
