import {
  DestroyRef,
  Directive,
  EmbeddedViewRef,
  TemplateRef,
  ViewContainerRef,
  afterNextRender,
  booleanAttribute,
  effect,
  inject,
  input
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

import { ACLService } from './acl.service';
import { ACLCanType } from './acl.type';

@Directive({
  selector: '[aclIf]',
  exportAs: 'aclIf'
})
export class ACLIfDirective {
  private readonly srv = inject(ACLService);
  private readonly _viewContainer = inject(ViewContainerRef);
  private readonly d$ = inject(DestroyRef);

  private _thenViewRef: EmbeddedViewRef<void> | null = null;
  private _elseViewRef: EmbeddedViewRef<void> | null = null;

  readonly aclIf = input.required<ACLCanType>();
  readonly aclIfThen = input<TemplateRef<void> | null>(inject(TemplateRef<void>));
  readonly aclIfElse = input<TemplateRef<void> | null>();
  readonly except = input(false, { transform: booleanAttribute });

  constructor() {
    effect(() => this.updateView());

    afterNextRender(() => {
      this.srv.change
        .pipe(
          takeUntilDestroyed(this.d$),
          filter(r => r != null)
        )
        .subscribe(() => this.updateView());
    });
  }

  private updateView(): void {
    const res = this.srv.can(this.aclIf());
    const except = this.except();
    const then = this.aclIfThen();
    const els = this.aclIfElse();
    if ((res && !except) || (!res && except)) {
      if (!this._thenViewRef) {
        this._viewContainer.clear();
        this._elseViewRef = null;
        if (then) {
          this._thenViewRef = this._viewContainer.createEmbeddedView(then);
        }
      }
    } else {
      if (!this._elseViewRef) {
        this._viewContainer.clear();
        this._thenViewRef = null;
        if (els) {
          this._elseViewRef = this._viewContainer.createEmbeddedView(els);
        }
      }
    }
  }
}
