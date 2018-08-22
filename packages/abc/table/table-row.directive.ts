import {
  Directive,
  Input,
  TemplateRef,
  OnInit,
  Injectable,
  Host,
} from '@angular/core';

@Injectable()
export class NaTableRowSource {
  private titles: { [key: string]: TemplateRef<any> } = {};
  private rows: { [key: string]: TemplateRef<any> } = {};

  add(type: string, path: string, ref: TemplateRef<any>) {
    this[type === 'title' ? 'titles' : 'rows'][path] = ref;
  }

  getTitle(path: string) {
    return this.titles[path];
  }

  getRow(path: string) {
    return this.rows[path];
  }

  get res() {
    return { titles: this.titles, rows: this.rows };
  }
}

@Directive({ selector: '[st-row]' })
export class NaTableRowDirective implements OnInit {
  @Input('st-row')
  id: string;

  @Input()
  type: 'title';

  constructor(
    private ref: TemplateRef<any>,
    @Host() private source: NaTableRowSource,
  ) {}

  ngOnInit(): void {
    this.source.add(this.type, this.id, this.ref);
  }
}
