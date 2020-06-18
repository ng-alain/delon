import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AppService, CodeService, I18NService } from '@core';
import { SFSchema } from '@delon/form';
import { ALAIN_I18N_TOKEN, _HttpClient } from '@delon/theme';
import { copy } from '@delon/util';
import { NuMonacoEditorComponent } from '@ng-util/monaco-editor';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const stackBlitzTpl = `
import { Component } from '@angular/core';
import { SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

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
export class FormValidatorComponent implements OnInit, OnDestroy {
  @ViewChild('schemaEditor') private schemaEditor: NuMonacoEditorComponent;
  @ViewChild('formCodeEditor') private formCodeEditor: NuMonacoEditorComponent;
  @ViewChild('uiEditor') private uiEditor: NuMonacoEditorComponent;

  private destroy$ = new Subject();
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
  editorOptions = { language: 'json', theme: 'vs' };

  constructor(
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private codeSrv: CodeService,
    private http: _HttpClient,
    private msg: NzMessageService,
    private appService: AppService,
  ) {
    const defaultIndex = 0;
    this.name = this.files[defaultIndex].name;
    this.title = this.files[defaultIndex].title;
    this.appService.theme$.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.editorOptions = { language: 'json', theme: data === 'dark' ? 'vs-dark' : 'vs' };
    });
  }

  ngOnInit(): void {
    this.getSchema();
  }

  refreshLayout(type: 'schemaEditor' | 'formCodeEditor' | 'uiEditor'): void {
    setTimeout(() => {
      this[type].editor.layout();
    }, 100);
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

    this.http.get(`./assets/schema/${item.name}.json`, null, { responseType: 'text' }).subscribe(res => {
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
    const obj: { [key: string]: NzSafeAny } = {
      schema: this.schema,
      layout: this.layout,
      formData: this.formCode || '{}',
      ui: this.uiCode || '{}',
    };
    const componentCode = stackBlitzTpl.replace(/\{(\w+)\}/g, (_match: string, offset: any) => (obj[offset] || '').trim());
    this.codeSrv.openOnStackBlitz(componentCode);
  }

  onCopy() {
    copy(this.schema).then(() => this.msg.success(this.i18n.fanyi('app.demo.copied')));
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

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
