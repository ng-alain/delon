import { Directive, Input, OnInit, TemplateRef, inject } from '@angular/core';

import { SF_SEQ } from '../../const';
import { SFComponent } from '../../sf.component';

@Directive({
  selector: '[sf-template]'
})
export class SFTemplateDirective implements OnInit {
  private readonly table = inject(SFComponent);
  private readonly templateRef = inject(TemplateRef);

  @Input('sf-template') path!: string;

  ngOnInit(): void {
    this.table._addTpl(this.path.startsWith(SF_SEQ) ? this.path : SF_SEQ + this.path, this.templateRef);
  }
}
