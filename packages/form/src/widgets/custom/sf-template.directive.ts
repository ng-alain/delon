import { Directive, Input, OnInit, TemplateRef } from '@angular/core';

import { SF_SEQ } from '../../const';
import { SFComponent } from '../../sf.component';

@Directive({
  selector: '[sf-template]'
})
export class SFTemplateDirective implements OnInit {
  @Input('sf-template') path: string;

  constructor(private templateRef: TemplateRef<void>, private table: SFComponent) {}

  ngOnInit(): void {
    this.table._addTpl(this.path.startsWith(SF_SEQ) ? this.path : SF_SEQ + this.path, this.templateRef);
  }
}
