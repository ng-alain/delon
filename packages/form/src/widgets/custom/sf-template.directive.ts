import { Directive, Input, OnInit, TemplateRef } from '@angular/core';
import { SFComponent } from '../../sf.component';

@Directive({
  selector: '[sf-template]',
})
export class SFTemplateDirective implements OnInit {
  @Input('sf-template') path: string;

  constructor(private templateRef: TemplateRef<void>, private table: SFComponent) {}

  ngOnInit(): void {
    this.table._addTpl(this.path.startsWith('/') ? this.path : `/` + this.path, this.templateRef);
  }
}
