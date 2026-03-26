import{b as $}from"./chunk-TK5MQ3ZQ.js";import{e as he,i as _e}from"./chunk-7SWT4F4B.js";import"./chunk-5KGVXDLG.js";import"./chunk-STJEVM4X.js";import"./chunk-MZLXJWFR.js";import{d as te,e as ne,f as oe}from"./chunk-DIGRX5V5.js";import{a as ae,b as me,c as le}from"./chunk-Z24LY5R2.js";import"./chunk-FL4TOGL2.js";import"./chunk-SDASDUUO.js";import{b as K}from"./chunk-JTRGEH7Y.js";import{a as ge}from"./chunk-CLH42H2X.js";import"./chunk-ZZ7ISDYC.js";import{a as H,d as ce,e as ue,f as fe}from"./chunk-RDF7BJYK.js";import{C as ie,E as re,L as de,R as se,S as pe,ba as Ce,f as X,l as Y,u as Z}from"./chunk-VPD4R4PE.js";import{$b as y,Ag as P,Cb as V,Eb as p,Gb as _,Ic as O,Kb as I,Kg as j,Lb as S,Ma as d,Mb as v,Mg as Q,Ng as J,Oa as T,Pg as U,Qd as B,Qg as G,Qh as q,Vb as e,Wa as x,We as R,Zb as C,_b as g,ec as L,ei as ee,fa as h,ka as c,la as u,lb as N,nb as F,ob as w,oc as b,pc as M,qb as D,rb as k,sb as s,tb as i,ub as r,vb as z,yc as W,zg as A}from"./chunk-UENMMWRA.js";var ye=["schemaEditor"],ze=["formCodeEditor"],Se=["uiEditor"];function ve(f,n){if(f&1&&(e(0,`
        `),z(1,"nz-option",21),e(2,`
      `)),f&2){let o=n.$implicit;d(),s("nzValue",o.name)("nzLabel",o.title)}}function Ee(f,n){if(f&1){let o=V();e(0,`
    `),i(1,"div",4),e(2,`
      `),i(3,"sf",22),p("formSubmit",function(a){c(o);let m=_();return u(m.submit(a))})("formChange",function(a){c(o);let m=_();return u(m.change(a))})("formValueChange",function(a){c(o);let m=_();return u(m.valueChange(a))})("formError",function(a){c(o);let m=_();return u(m.error(a))}),r(),e(4,`
    `),r(),e(5,`
  `)}if(f&2){let o=_();d(),s("nzSpan",o.expand?12:24),d(2),s("schema",o.schemaData)("formData",o.formData)("ui",o.uiSchema)("layout",o.layout)}}var Ve=`import { Component, inject } from '@angular/core';
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
}`,E=class f{i18n=h(B);codeSrv=h(K);http=h(q);msg=h(Ce);cdr=h(O);schemaEditor;formCodeEditor;uiEditor;files=[{name:"basic",title:"\u57FA\u672C"},{name:"conditional",title:"\u6761\u4EF6"},{name:"sort",title:"\u987A\u5E8F"},{name:"validation",title:"\u81EA\u5B9A\u4E49\u6821\u9A8C"},{name:"fixed",title:"\u4E0D\u89C4\u5219\u5E03\u5C40"}];layout="horizontal";name;title;schema;schemaData;formCode;formData;uiCode;uiSchema;expand=!0;editorOptions=W(()=>({language:"json",theme:H()==="dark"?"vs-dark":"vs"}));constructor(){this.name=this.files[0].name,this.title=this.files[0].title,T(()=>this.getSchema())}refreshLayout(n){setTimeout(()=>{this[n].editor?.layout()},100)}getSchema(){let n=this.files.find(o=>o.name===this.name);if(n){if(this.name=n.name,this.title=n.title,n.cache){this.schema=n.cache,this.run();return}this.http.get(`./assets/schema/${n.name}.json`,null,{responseType:"text"}).subscribe(o=>{n.cache=o,this.schema=n.cache,this.run()})}}run(){this.schemaData=JSON.parse(this.schema||"{}"),this.formData=JSON.parse(this.formCode||"{}"),this.uiSchema=JSON.parse(this.uiCode||"{}"),this.cdr.detectChanges()}openOnStackBlitz(){let n={schema:this.schema,layout:this.layout,formData:this.formCode||"{}",ui:this.uiCode||"{}"},o=Ve.replace(/\{(\w+)\}/g,(t,a)=>(n[a]||"").trim());this.codeSrv.openOnStackBlitz("sf-validator",o)}onCopy(){ee(this.schema).then(()=>this.msg.success(this.i18n.fanyi("app.demo.copied")))}submit(n){this.msg.success(JSON.stringify(n))}change(n){console.log("formChange",n)}valueChange(n){console.log("formChange",n)}error(n){console.log("formError",n)}static \u0275fac=function(o){return new(o||f)};static \u0275cmp=x({type:f,selectors:[["form-validator"]],viewQuery:function(o,t){if(o&1&&I(ye,5)(ze,5)(Se,5),o&2){let a;S(a=v())&&(t.schemaEditor=a.first),S(a=v())&&(t.formCodeEditor=a.first),S(a=v())&&(t.uiEditor=a.first)}},decls:74,vars:23,consts:[["schemaEditor",""],["formCodeEditor",""],["uiEditor",""],["nz-row","",1,"border-bottom-1","pb-sm","mb-md"],["nz-col","",3,"nzSpan"],[3,"ngModelChange","ngModel"],[1,"ml-sm",3,"ngModelChange","ngModel"],["nz-radio-button","","nzValue","horizontal"],["nz-radio-button","","nzValue","vertical"],["nz-radio-button","","nzValue","inline"],["nz-col","",1,"text-right",3,"nzSpan"],["nz-tooltip","","nz-button","",3,"click","nzTooltipTitle"],[3,"nzType"],["nzType","form"],["nzType","copy"],["nz-row","",1,"border-bottom-1","pb-sm","mb-md",3,"nzGutter"],["nz-col","",3,"nzSpan","hidden"],["nzTitle","Schema",3,"nzClick"],["height","500px",3,"ngModelChange","ngModel","options"],["nzTitle","Form Data",3,"nzClick"],["nzTitle","UI Schema",3,"nzClick"],[3,"nzValue","nzLabel"],[3,"formSubmit","formChange","formValueChange","formError","schema","formData","ui","layout"]],template:function(o,t){if(o&1){let a=V();i(0,"div",3),e(1,`
  `),i(2,"div",4),e(3,`
    `),i(4,"nz-select",5),y("ngModelChange",function(l){return c(a),g(t.name,l)||(t.name=l),u(l)}),p("ngModelChange",function(){return t.getSchema()}),e(5,`
      `),D(6,ve,3,2,null,null,w),r(),e(8,`
    `),i(9,"nz-radio-group",6),y("ngModelChange",function(l){return c(a),g(t.layout,l)||(t.layout=l),u(l)}),e(10,`
      `),i(11,"label",7),e(12,"\u6C34\u5E73"),r(),e(13,`
      `),i(14,"label",8),e(15,"\u5782\u76F4"),r(),e(16,`
      `),i(17,"label",9),e(18,"\u884C\u5185"),r(),e(19,`
    `),r(),e(20,`
  `),r(),e(21,`
  `),i(22,"div",10),e(23,`
    `),i(24,"nz-space-compact"),e(25,`
      `),i(26,"button",11),p("click",function(){return t.expand=!t.expand}),e(27,`
        `),z(28,"nz-icon",12),e(29,`
      `),r(),e(30,`
      `),i(31,"button",11),b(32,"i18n"),p("click",function(){return t.openOnStackBlitz()}),e(33,`
        `),z(34,"nz-icon",13),e(35,`
      `),r(),e(36,`
      `),i(37,"button",11),b(38,"i18n"),p("click",function(){return t.onCopy()}),e(39,`
        `),z(40,"nz-icon",14),e(41,`
      `),r(),e(42,`
    `),r(),e(43,`
  `),r(),e(44,`
`),r(),e(45,`
`),i(46,"div",15),e(47,`
  `),i(48,"div",16),e(49,`
    `),i(50,"nz-tabs"),e(51,`
      `),i(52,"nz-tab",17),p("nzClick",function(){return t.refreshLayout("schemaEditor")}),e(53,`
        `),i(54,"nu-monaco-editor",18,0),y("ngModelChange",function(l){return c(a),g(t.schema,l)||(t.schema=l),u(l)}),p("ngModelChange",function(){return t.run()}),r(),e(56,`
      `),r(),e(57,`
      `),i(58,"nz-tab",19),p("nzClick",function(){return t.refreshLayout("formCodeEditor")}),e(59,`
        `),i(60,"nu-monaco-editor",18,1),y("ngModelChange",function(l){return c(a),g(t.formCode,l)||(t.formCode=l),u(l)}),p("ngModelChange",function(){return t.run()}),r(),e(62,`
      `),r(),e(63,`
      `),i(64,"nz-tab",20),p("nzClick",function(){return t.refreshLayout("uiEditor")}),e(65,`
        `),i(66,"nu-monaco-editor",18,2),y("ngModelChange",function(l){return c(a),g(t.uiCode,l)||(t.uiCode=l),u(l)}),p("ngModelChange",function(){return t.run()}),r(),e(68,`
      `),r(),e(69,`
    `),r(),e(70,`
  `),r(),e(71,`
  `),N(72,Ee,6,5),r(),e(73,`
`)}o&2&&(d(2),s("nzSpan",18),d(2),C("ngModel",t.name),d(2),k(t.files),d(3),C("ngModel",t.layout),d(13),s("nzSpan",6),d(4),s("nzTooltipTitle",t.expand?"Hide Code":"Show Code"),d(2),s("nzType",L("vertical-",t.expand?"right":"left")),d(3),s("nzTooltipTitle",M(32,19,"app.demo.stackblitz")),d(6),s("nzTooltipTitle",M(38,21,"app.demo.copy")),d(9),s("nzGutter",24),d(2),s("nzSpan",12)("hidden",!t.expand),d(6),C("ngModel",t.schema),s("options",t.editorOptions()),d(6),C("ngModel",t.formCode),s("options",t.editorOptions()),d(6),C("ngModel",t.uiCode),s("options",t.editorOptions()),d(6),F(t.schemaData?72:-1))},dependencies:[Z,X,Y,fe,ue,ce,pe,de,se,oe,ne,te,G,U,Q,J,j,re,ie,P,A,le,me,ae,$,_e,he,R],encapsulation:2,changeDetection:0})};var dt=[{path:"",component:ge,children:[{path:"validator/:lang",component:E,data:{titleI18n:"app.header.menu.form.validator"}}]}];export{dt as routes};
