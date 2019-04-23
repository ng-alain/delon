import { Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ACLService } from './acl.service';
import { ACLCanType } from './acl.type';

@Directive({
  selector: '[acl]',
  exportAs: 'acl',
})
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
    this._value = value;
    const CLS = 'acl__hide';
    const el = this.el.nativeElement;
    if (this.srv.can(this._value)) {
      this.renderer.removeClass(el, CLS);
    } else {
      this.renderer.addClass(el, CLS);
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2, protected srv: ACLService) {
    this.change$ = this.srv.change.pipe(filter(r => r != null)).subscribe(() => this.set(this._value));
  }

  ngOnDestroy(): void {
    this.change$.unsubscribe();
  }
}
