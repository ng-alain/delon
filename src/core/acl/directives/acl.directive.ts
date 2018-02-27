import { Directive, Input, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ACLService } from '../services/acl.service';
import { ACLType } from '../services/acl.type';

@Directive({
    selector: '[acl]'
})
export class ACLDirective implements OnDestroy {
    private _value: any;
    private change$: Subscription;

    @Input('acl')
    set acl(value: number | number[] | string | string[] | ACLType) {
        this.set(value);
    }

    @Input('acl-ability')
    set ability(ability: number | string) {
        this.set(<ACLType>{
            ability: [ability],
            role: null
        });
    }

    private set(value: number | number[] | string | string[] | ACLType) {
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
        this.change$ = <any>this.srv.change.subscribe(() => this.set(this._value));
    }

    ngOnDestroy(): void {
        if (this.change$) this.change$.unsubscribe();
    }
}
