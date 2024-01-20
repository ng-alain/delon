import { Directive, ElementRef, Input, OnDestroy, Renderer2, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subscription, filter } from 'rxjs';

import { ACLService } from './acl.service';
import { ACLCanType } from './acl.type';

@Directive({
  selector: '[acl]',
  exportAs: 'acl',
  standalone: true
})
export class ACLDirective implements OnDestroy {
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly renderer = inject(Renderer2);
  private readonly srv = inject(ACLService);

  private _value!: ACLCanType;
  private change$: Subscription;

  @Input('acl')
  set acl(value: ACLCanType) {
    this.set(value);
  }

  @Input('acl-ability')
  set ability(value: ACLCanType) {
    this.set(this.srv.parseAbility(value));
  }

  private set(value: ACLCanType): void {
    this._value = value;
    const CLS = 'acl__hide';
    const el = this.el;
    if (this.srv.can(this._value)) {
      this.renderer.removeClass(el, CLS);
    } else {
      this.renderer.addClass(el, CLS);
    }
  }

  constructor() {
    this.change$ = this.srv.change
      .pipe(
        takeUntilDestroyed(),
        filter(r => r != null)
      )
      .subscribe(() => this.set(this._value));
  }

  ngOnDestroy(): void {
    this.change$.unsubscribe();
  }
}
