import {
  afterNextRender,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  inject,
  ViewChild
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NuMonacoEditorComponent } from '@ng-util/monaco-editor';

import { DelonFormModule, SFLayout, SFSchema, SFUISchema } from '@delon/form';
import { ALAIN_I18N_TOKEN, I18nPipe, _HttpClient } from '@delon/theme';
import { copy } from '@delon/util/browser';
import { NzButtonModule } from 'ng-zorro-antd/button';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceCompactComponent } from 'ng-zorro-antd/space';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

import { CodeService, SITE_THEME } from '@core';

const stackBlitzTpl = `import { Component, inject } from '@angular/core';
import { DelonFormModule, SFLayout, SFSchema, SFUISchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'demo',
  template: \`
 <sf [schema]="schema" [formData]="formData" [ui]="ui" [layout]="layout"
      (formSubmit)="submit($event)"
      (formChange)="change($event)"
      (formError)="error($event)"></sf>
    \`,
  imports: [DelonFormModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {schema};
  formData: Record<string, any> = {formData};
  ui: SFUISchema = {ui};
  layout: SFLayout = '{layout}';

  submit(value: any): void {
    this.msg.success(JSON.stringify(value));
  }

  change(value: any): void {
    console.log('formChange', value);
  }

  error(value: any): void {
    console.log('formError', value);
  }
}`;

@Component({
  selector: 'form-validator',
  template: `
    <div nz-row class="border-bottom-1 pb-sm mb-md">
      <div nz-col [nzSpan]="18">
        <nz-select [(ngModel)]="name" (ngModelChange)="getSchema()">
          @for (i of files; track $index) {
            <nz-option [nzValue]="i.name" [nzLabel]="i.title" />
          }
        </nz-select>
        <nz-radio-group [(ngModel)]="layout" class="ml-sm">
          <label nz-radio-button nzValue="horizontal">水平</label>
          <label nz-radio-button nzValue="vertical">垂直</label>
          <label nz-radio-button nzValue="inline">行内</label>
        </nz-radio-group>
      </div>
      <div nz-col [nzSpan]="6" class="text-right">
        <nz-space-compact>
          <button nz-tooltip [nzTooltipTitle]="expand ? 'Hide Code' : 'Show Code'" nz-button (click)="expand = !expand">
            <nz-icon nzType="vertical-{{ expand ? 'right' : 'left' }}" />
          </button>
          <button nz-tooltip [nzTooltipTitle]="'app.demo.stackblitz' | i18n" nz-button (click)="openOnStackBlitz()">
            <nz-icon nzType="form" />
          </button>
          <button nz-tooltip [nzTooltipTitle]="'app.demo.copy' | i18n" nz-button (click)="onCopy()">
            <nz-icon nzType="copy" />
          </button>
        </nz-space-compact>
      </div>
    </div>
    <div nz-row class="border-bottom-1 pb-sm mb-md" [nzGutter]="24">
      <div nz-col [nzSpan]="12" [hidden]="!expand">
        <nz-tabs>
          <nz-tab nzTitle="Schema" (nzClick)="refreshLayout('schemaEditor')">
            <nu-monaco-editor
              #schemaEditor
              [(ngModel)]="schema"
              (ngModelChange)="run()"
              [options]="editorOptions()"
              height="500px"
            />
          </nz-tab>
          <nz-tab nzTitle="Form Data" (nzClick)="refreshLayout('formCodeEditor')">
            <nu-monaco-editor
              #formCodeEditor
              [(ngModel)]="formCode"
              (ngModelChange)="run()"
              [options]="editorOptions()"
              height="500px"
            />
          </nz-tab>
          <nz-tab nzTitle="UI Schema" (nzClick)="refreshLayout('uiEditor')">
            <nu-monaco-editor
              #uiEditor
              [(ngModel)]="uiCode"
              (ngModelChange)="run()"
              [options]="editorOptions()"
              height="500px"
            />
          </nz-tab>
        </nz-tabs>
      </div>
      @if (schemaData) {
        <div nz-col [nzSpan]="expand ? 12 : 24">
          <sf
            [schema]="schemaData"
            [formData]="formData"
            [ui]="uiSchema"
            [layout]="layout"
            (formSubmit)="submit($event)"
            (formChange)="change($event)"
            (formValueChange)="valueChange($event)"
            (formError)="error($event)"
          />
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    NzGridModule,
    NzSelectModule,
    NzRadioModule,
    NzButtonModule,
    NzSpaceCompactComponent,
    NzTooltipModule,
    NzIconModule,
    NzTabsModule,
    NuMonacoEditorComponent,
    DelonFormModule,
    I18nPipe
  ]
})
export class FormValidatorComponent {
  private readonly i18n = inject(ALAIN_I18N_TOKEN);
  private readonly codeSrv = inject(CodeService);
  private readonly http = inject(_HttpClient);
  private readonly msg = inject(NzMessageService);
  private readonly cdr = inject(ChangeDetectorRef);

  @ViewChild('schemaEditor') private schemaEditor!: NuMonacoEditorComponent;
  @ViewChild('formCodeEditor') private formCodeEditor!: NuMonacoEditorComponent;
  @ViewChild('uiEditor') private uiEditor!: NuMonacoEditorComponent;

  files: Array<{ name: string; title: string; cache?: string }> = [
    { name: 'basic', title: '基本' },
    { name: 'conditional', title: '条件' },
    { name: 'sort', title: '顺序' },
    { name: 'validation', title: '自定义校验' },
    { name: 'fixed', title: '不规则布局' }
  ];
  layout: SFLayout = 'horizontal';
  name: string;
  title: string;
  schema!: string;
  schemaData!: SFSchema;
  formCode!: string;
  formData!: object;
  uiCode!: string;
  uiSchema!: SFUISchema;
  expand = true;
  protected editorOptions = computed(() => {
    return { language: 'json', theme: SITE_THEME() === 'dark' ? 'vs-dark' : 'vs' };
  });

  constructor() {
    const defaultIndex = 0;
    this.name = this.files[defaultIndex].name;
    this.title = this.files[defaultIndex].title;

    afterNextRender(() => this.getSchema());
  }

  refreshLayout(type: 'schemaEditor' | 'formCodeEditor' | 'uiEditor'): void {
    setTimeout(() => {
      this[type].editor?.layout();
    }, 100);
  }

  getSchema(): void {
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

  run(): void {
    this.schemaData = JSON.parse(this.schema || '{}');
    this.formData = JSON.parse(this.formCode || '{}');
    this.uiSchema = JSON.parse(this.uiCode || '{}');
    this.cdr.detectChanges();
  }

  openOnStackBlitz(): void {
    const obj: Record<string, NzSafeAny> = {
      schema: this.schema,
      layout: this.layout,
      formData: this.formCode || '{}',
      ui: this.uiCode || '{}'
    };
    const componentCode = stackBlitzTpl.replace(/\{(\w+)\}/g, (_match: string, offset: string) =>
      (obj[offset] || '').trim()
    );
    this.codeSrv.openOnStackBlitz('sf-validator', componentCode);
  }

  onCopy(): void {
    copy(this.schema).then(() => this.msg.success(this.i18n.fanyi('app.demo.copied')));
  }

  submit(value: NzSafeAny): void {
    this.msg.success(JSON.stringify(value));
  }

  change(value: NzSafeAny): void {
    console.log('formChange', value);
  }

  valueChange(value: NzSafeAny): void {
    console.log('formChange', value);
  }

  error(value: NzSafeAny): void {
    console.log('formError', value);
  }
}
