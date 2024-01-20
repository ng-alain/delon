import { Directive, Injectable, Input, OnInit, TemplateRef, inject } from '@angular/core';

@Injectable()
export class STRowSource {
  private titles: { [key: string]: TemplateRef<void> } = {};
  private rows: { [key: string]: TemplateRef<void> } = {};

  add(type: string | undefined, path: string, ref: TemplateRef<void>): void {
    this[type === 'title' ? 'titles' : 'rows'][path] = ref;
  }

  getTitle(path: string): TemplateRef<void> {
    return this.titles[path];
  }

  getRow(path: string): TemplateRef<void> {
    return this.rows[path];
  }
}

@Directive({ selector: '[st-row]' })
export class STRowDirective implements OnInit {
  private readonly source = inject(STRowSource, { host: true });
  private readonly ref = inject(TemplateRef);
  @Input('st-row') id!: string;

  @Input() type?: 'title';

  ngOnInit(): void {
    this.source.add(this.type, this.id, this.ref);
  }
}
