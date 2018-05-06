import { Directive, Input, TemplateRef, OnInit } from '@angular/core';
import { SFComponent } from '../../sf.component';

@Directive({
  selector: '[sf-template]',
})
export class SFTemplateDirective implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('sf-template') path: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private table: SFComponent,
  ) {}

  ngOnInit(): void {
    this.table._addTpl(
      this.path.startsWith('/') ? this.path : `/` + this.path,
      this.templateRef,
    );
  }
}
