import { Component, Inject, OnInit } from '@angular/core';
import { SFSchema } from '@delon/form';
import { _HttpClient, ALAIN_I18N_TOKEN } from '@delon/theme';
import { copy } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd';
import { CodeService } from '../../../core/code.service';
import { I18NService } from '../../../core/i18n/service';

const stackBlitzTpl = `
import { Component } from '@angular/core';
import { SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'demo',
  template: \`
  <sf [schema]="schema" [formData]="formData" [ui]="ui" [layout]="layout"
      (formSubmit)="submit($event)"
      (formChange)="change($event)"
      (formError)="error($event)"></sf>
    \`
})
export class DemoComponent {
  schema = {schema};
  formData = {formData};
  ui = {ui};
  layout = '{layout}';

  constructor(private msg: NzMessageService) { }

  submit(value: any) {
    this.msg.success(JSON.stringify(value));
  }

  change(value: any) {
    console.log('formChange', value);
  }

  error(value: any) {
    console.log('formError', value);
  }
}`;

declare var ace: any;

@Component({
  selector: 'form-validator',
  templateUrl: './validator.component.html',
})
export class FormValidatorComponent implements OnInit {
  files: any[] = [
    { name: 'basic', title: '基本' },
    { name: 'conditional', title: '条件' },
    { name: 'sort', title: '顺序' },
    { name: 'validation', title: '自定义校验' },
    { name: 'fixed', title: '不规则布局' },
  ];
  layout = 'horizontal';
  name: string;
  title: string;
  schema: string;
  schemaData: SFSchema;
  formCode: string;
  formData: {};
  uiCode: string;
  uiSchema: {};
  expand = true;

  constructor(
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private codeSrv: CodeService,
    private http: _HttpClient,
    private msg: NzMessageService,
  ) {
    const defaultIndex = 0;
    this.name = this.files[defaultIndex].name;
    this.title = this.files[defaultIndex].title;
    ace.config.set('workerPath', 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.1/');
  }

  ngOnInit(): void {
    this.getSchema();
  }

  getSchema() {
    const item = this.files.find(w => w.name === this.name);
    if (!item) return;
    this.name = item.name;
    this.title = item.title;
    if (item.cache) {
      this.schema = item.cache;
      this.run();
      return;
    }

    this.http
      .get(`./assets/schema/${item.name}.json`, null, { responseType: 'text' })
      .subscribe(res => {
        item.cache = res;
        this.schema = item.cache;
        this.run();
      });
  }

  run() {
    this.schemaData = JSON.parse(this.schema || '{}');
    this.formData = JSON.parse(this.formCode || '{}');
    this.uiSchema = JSON.parse(this.uiCode || '{}');
  }

  openOnStackBlitz() {
    const obj = {
      schema: this.schema,
      layout: this.layout,
      formData: this.formCode || '{}',
      ui: this.uiCode || '{}',
    };
    const componentCode = stackBlitzTpl.replace(
      /\{(\w+)\}/g,
      (match: string, offset: any) => (obj[offset] || '').trim(),
    );
    this.codeSrv.openOnStackBlitz(
      componentCode,
      this.title,
      `@delon/form-${this.title}-${this.name}.json`,
    );
  }

  onCopy() {
    copy(this.schema).then(() =>
      this.msg.success(this.i18n.fanyi('app.demo.copied')),
    );
  }

  submit(value: any) {
    this.msg.success(JSON.stringify(value));
  }

  change(value: any) {
    console.log('formChange', value);
  }

  error(value: any) {
    console.log('formError', value);
  }
}
