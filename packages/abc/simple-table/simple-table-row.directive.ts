import { Directive, Input, TemplateRef, OnInit } from '@angular/core';
import { SimpleTableComponent } from './simple-table.component';

@Directive({ selector: '[st-row]' })
export class SimpleTableRowDirective implements OnInit {
  @Input('st-row')
  id: string;

  @Input()
  type: 'title';

  constructor(
    private ref: TemplateRef<any>,
    private parent: SimpleTableComponent,
  ) {}

  ngOnInit(): void {
    const { _columns, _customTitles, _customRows } = this.parent;
    const col = _columns.find(w => w.render === this.id);
    if (!col) return;

    switch (this.type) {
      case 'title':
        col.__renderTitle = this.ref;
        _customTitles[this.id] = this.ref;
        break;
      default:
        col.__render = this.ref;
        _customRows[this.id] = this.ref;
        break;
    }
  }
}
