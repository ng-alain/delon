import { Directive, ElementRef, Renderer2, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

import { ACLService } from './acl.service';
import { ACLCanType } from './acl.type';

@Directive({
  selector: '[acl]',
  exportAs: 'acl'
})
export class ACLDirective {
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly renderer = inject(Renderer2);
  private readonly srv = inject(ACLService);

  private _value!: ACLCanType;

  readonly acl = input(undefined, {
    transform: (v: ACLCanType) => this.set(v)
  });
  readonly ability = input(undefined, {
    alias: 'acl-ability',
    transform: (v: ACLCanType) => this.set(this.srv.parseAbility(v))
  });

  constructor() {
    this.srv.change
      .pipe(
        takeUntilDestroyed(),
        filter(r => r != null)
      )
      .subscribe(() => this.set(this._value));
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
}
