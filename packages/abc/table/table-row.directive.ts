import { Directive, Host, Injectable, Input, OnInit, TemplateRef } from '@angular/core';

@Injectable()
export class STRowSource {
  private titles: { [key: string]: TemplateRef<void> } = {};
  private rows: { [key: string]: TemplateRef<void> } = {};

  add(type: string, path: string, ref: TemplateRef<void>) {
    this[type === 'title' ? 'titles' : 'rows'][path] = ref;
  }

  getTitle(path: string) {
    return this.titles[path];
  }

  getRow(path: string) {
    return this.rows[path];
  }
}

@Directive({ selector: '[st-row]' })
export class STRowDirective implements OnInit {
  @Input('st-row')
  id: string;

  @Input()
  type: 'title';

  constructor(private ref: TemplateRef<void>, @Host() private source: STRowSource) {}

  ngOnInit(): void {
    this.source.add(this.type, this.id, this.ref);
  }
}
