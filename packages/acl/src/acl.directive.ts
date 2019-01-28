import { Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';

import { ACLService } from './acl.service';
import { ACLCanType } from './acl.type';

@Directive({ selector: '[acl]' })
export class ACLDirective implements OnDestroy {
  private _value: ACLCanType;
  private change$: Subscription;

  @Input('acl')
  set acl(value: ACLCanType) {
    this.set(value);
  }

  @Input('acl-ability')
  set ability(value: ACLCanType) {
    this.set(this.srv.parseAbility(value));
  }

  private set(value: ACLCanType) {
    const CLS = 'acl__hide';
    const el = this.el.nativeElement;
    if (this.srv.can(value)) {
      this.renderer.removeClass(el, CLS);
    } else {
      this.renderer.addClass(el, CLS);
    }
    this._value = value;
  }

  constructor(private el: ElementRef, private renderer: Renderer2, private srv: ACLService) {
    this.change$ = this.srv.change.subscribe(() => this.set(this._value));
  }

  ngOnDestroy(): void {
    this.change$.unsubscribe();
  }
}
