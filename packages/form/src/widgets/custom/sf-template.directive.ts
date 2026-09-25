import { Directive, OnInit, TemplateRef, inject, input } from '@angular/core';

import { SF_SEQ } from '../../const';
import { SFComponent } from '../../sf.component';

@Directive({
  selector: '[sf-template]'
})
export class SFTemplateDirective implements OnInit {
  private readonly table = inject(SFComponent);
  private readonly templateRef = inject(TemplateRef);

  readonly path = input.required<string>({ alias: 'sf-template' });

  ngOnInit(): void {
    const path = this.path();
    this.table._addTpl(path.startsWith(SF_SEQ) ? path : SF_SEQ + path, this.templateRef);
  }
}
