import{b as $}from"./chunk-ABJEXNSF.js";import{e as he,i as _e}from"./chunk-C72NHTXM.js";import"./chunk-53YPURAN.js";import"./chunk-ZRSAV3HZ.js";import{e as te,f as ie,g as oe}from"./chunk-G7ZKFHFV.js";import"./chunk-AWP5VEUB.js";import{a as ae,b as me,c as le}from"./chunk-I6NPULPD.js";import"./chunk-GZIX67U4.js";import"./chunk-CYLLM2WB.js";import{b as H,c as K}from"./chunk-HJ4DKBT3.js";import{a as ge}from"./chunk-7FHYC6KP.js";import"./chunk-3GAY27UX.js";import{i as se,o as de,p as pe,q as ce,r as ue,s as fe}from"./chunk-QQ6NPO7M.js";import{E as ne,G as re,P as Ce,g as X,m as Y,v as Z}from"./chunk-ELXT6WKP.js";import{$a as T,Ah as q,Cb as _,Gb as S,Gc as W,Hb as v,Ia as p,Ib as V,Ld as O,Od as B,Pe as R,Qa as x,Qh as ee,Rb as e,Vb as C,Wb as g,Xb as y,ac as L,fb as F,ha as h,hb as N,hg as A,ib as D,ig as j,kb as k,kc as b,la as l,lb as I,lc as M,ma as s,mb as c,nb as r,ng as P,ob as a,pb as z,pg as Q,vg as U,wb as E,xg as J,yg as G,zb as u}from"./chunk-ALCLPDZJ.js";var ye=["schemaEditor"],ze=["formCodeEditor"],Se=["uiEditor"];function ve(f,n){if(f&1&&(e(0,`
        `),z(1,"nz-option",21),e(2,`
      `)),f&2){let o=n.$implicit;p(),c("nzValue",o.name)("nzLabel",o.title)}}function Ve(f,n){if(f&1){let o=E();e(0,`
    `),r(1,"div",4),e(2,`
      `),r(3,"sf",22),u("formSubmit",function(i){l(o);let m=_();return s(m.submit(i))})("formChange",function(i){l(o);let m=_();return s(m.change(i))})("formValueChange",function(i){l(o);let m=_();return s(m.valueChange(i))})("formError",function(i){l(o);let m=_();return s(m.error(i))}),a(),e(4,`
    `),a(),e(5,`
  `)}if(f&2){let o=_();p(),c("nzSpan",o.expand?12:24),p(2),c("schema",o.schemaData)("formData",o.formData)("ui",o.uiSchema)("layout",o.layout)}}var we=`import { Component, inject } from '@angular/core';
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
}`,w=class f{i18n=h(B);codeSrv=h(K);http=h(q);msg=h(Ce);appService=h(H);cdr=h(W);schemaEditor;formCodeEditor;uiEditor;files=[{name:"basic",title:"\u57FA\u672C"},{name:"conditional",title:"\u6761\u4EF6"},{name:"sort",title:"\u987A\u5E8F"},{name:"validation",title:"\u81EA\u5B9A\u4E49\u6821\u9A8C"},{name:"fixed",title:"\u4E0D\u89C4\u5219\u5E03\u5C40"}];layout="horizontal";name;title;schema;schemaData;formCode;formData;uiCode;uiSchema;expand=!0;editorOptions={language:"json",theme:"vs"};constructor(){this.name=this.files[0].name,this.title=this.files[0].title,this.appService.theme$.pipe(O()).subscribe(o=>{this.editorOptions={language:"json",theme:o==="dark"?"vs-dark":"vs"}}),T(()=>this.getSchema())}refreshLayout(n){setTimeout(()=>{this[n].editor?.layout()},100)}getSchema(){let n=this.files.find(o=>o.name===this.name);if(n){if(this.name=n.name,this.title=n.title,n.cache){this.schema=n.cache,this.run();return}this.http.get(`./assets/schema/${n.name}.json`,null,{responseType:"text"}).subscribe(o=>{n.cache=o,this.schema=n.cache,this.run()})}}run(){this.schemaData=JSON.parse(this.schema||"{}"),this.formData=JSON.parse(this.formCode||"{}"),this.uiSchema=JSON.parse(this.uiCode||"{}"),this.cdr.detectChanges()}openOnStackBlitz(){let n={schema:this.schema,layout:this.layout,formData:this.formCode||"{}",ui:this.uiCode||"{}"},o=we.replace(/\{(\w+)\}/g,(t,i)=>(n[i]||"").trim());this.codeSrv.openOnStackBlitz("sf-validator",o)}onCopy(){ee(this.schema).then(()=>this.msg.success(this.i18n.fanyi("app.demo.copied")))}submit(n){this.msg.success(JSON.stringify(n))}change(n){console.log("formChange",n)}valueChange(n){console.log("formChange",n)}error(n){console.log("formError",n)}static \u0275fac=function(o){return new(o||f)};static \u0275cmp=x({type:f,selectors:[["form-validator"]],viewQuery:function(o,t){if(o&1&&(S(ye,5),S(ze,5),S(Se,5)),o&2){let i;v(i=V())&&(t.schemaEditor=i.first),v(i=V())&&(t.formCodeEditor=i.first),v(i=V())&&(t.uiEditor=i.first)}},decls:74,vars:23,consts:[["schemaEditor",""],["formCodeEditor",""],["uiEditor",""],["nz-row","",1,"border-bottom-1","pb-sm","mb-md"],["nz-col","",3,"nzSpan"],[3,"ngModelChange","ngModel"],[1,"ml-sm",3,"ngModelChange","ngModel"],["nz-radio-button","","nzValue","horizontal"],["nz-radio-button","","nzValue","vertical"],["nz-radio-button","","nzValue","inline"],["nz-col","",1,"text-right",3,"nzSpan"],["nz-tooltip","","nz-button","",3,"click","nzTooltipTitle"],[3,"nzType"],["nzType","form"],["nzType","copy"],["nz-row","",1,"border-bottom-1","pb-sm","mb-md",3,"nzGutter"],["nz-col","",3,"nzSpan","hidden"],["nzTitle","Schema",3,"nzClick"],["height","500px",3,"ngModelChange","ngModel","options"],["nzTitle","Form Data",3,"nzClick"],["nzTitle","UI Schema",3,"nzClick"],[3,"nzValue","nzLabel"],[3,"formSubmit","formChange","formValueChange","formError","schema","formData","ui","layout"]],template:function(o,t){if(o&1){let i=E();r(0,"div",3),e(1,`
  `),r(2,"div",4),e(3,`
    `),r(4,"nz-select",5),y("ngModelChange",function(d){return l(i),g(t.name,d)||(t.name=d),s(d)}),u("ngModelChange",function(){return l(i),s(t.getSchema())}),e(5,`
      `),k(6,ve,3,2,null,null,D),a(),e(8,`
    `),r(9,"nz-radio-group",6),y("ngModelChange",function(d){return l(i),g(t.layout,d)||(t.layout=d),s(d)}),e(10,`
      `),r(11,"label",7),e(12,"\u6C34\u5E73"),a(),e(13,`
      `),r(14,"label",8),e(15,"\u5782\u76F4"),a(),e(16,`
      `),r(17,"label",9),e(18,"\u884C\u5185"),a(),e(19,`
    `),a(),e(20,`
  `),a(),e(21,`
  `),r(22,"div",10),e(23,`
    `),r(24,"nz-space-compact"),e(25,`
      `),r(26,"button",11),u("click",function(){return l(i),s(t.expand=!t.expand)}),e(27,`
        `),z(28,"nz-icon",12),e(29,`
      `),a(),e(30,`
      `),r(31,"button",11),b(32,"i18n"),u("click",function(){return l(i),s(t.openOnStackBlitz())}),e(33,`
        `),z(34,"nz-icon",13),e(35,`
      `),a(),e(36,`
      `),r(37,"button",11),b(38,"i18n"),u("click",function(){return l(i),s(t.onCopy())}),e(39,`
        `),z(40,"nz-icon",14),e(41,`
      `),a(),e(42,`
    `),a(),e(43,`
  `),a(),e(44,`
`),a(),e(45,`
`),r(46,"div",15),e(47,`
  `),r(48,"div",16),e(49,`
    `),r(50,"nz-tabs"),e(51,`
      `),r(52,"nz-tab",17),u("nzClick",function(){return l(i),s(t.refreshLayout("schemaEditor"))}),e(53,`
        `),r(54,"nu-monaco-editor",18,0),y("ngModelChange",function(d){return l(i),g(t.schema,d)||(t.schema=d),s(d)}),u("ngModelChange",function(){return l(i),s(t.run())}),a(),e(56,`
      `),a(),e(57,`
      `),r(58,"nz-tab",19),u("nzClick",function(){return l(i),s(t.refreshLayout("formCodeEditor"))}),e(59,`
        `),r(60,"nu-monaco-editor",18,1),y("ngModelChange",function(d){return l(i),g(t.formCode,d)||(t.formCode=d),s(d)}),u("ngModelChange",function(){return l(i),s(t.run())}),a(),e(62,`
      `),a(),e(63,`
      `),r(64,"nz-tab",20),u("nzClick",function(){return l(i),s(t.refreshLayout("uiEditor"))}),e(65,`
        `),r(66,"nu-monaco-editor",18,2),y("ngModelChange",function(d){return l(i),g(t.uiCode,d)||(t.uiCode=d),s(d)}),u("ngModelChange",function(){return l(i),s(t.run())}),a(),e(68,`
      `),a(),e(69,`
    `),a(),e(70,`
  `),a(),e(71,`
  `),F(72,Ve,6,5),a(),e(73,`
`)}o&2&&(p(2),c("nzSpan",18),p(2),C("ngModel",t.name),p(2),I(t.files),p(3),C("ngModel",t.layout),p(13),c("nzSpan",6),p(4),c("nzTooltipTitle",t.expand?"Hide Code":"Show Code"),p(2),c("nzType",L("vertical-",t.expand?"right":"left")),p(3),c("nzTooltipTitle",M(32,19,"app.demo.stackblitz")),p(6),c("nzTooltipTitle",M(38,21,"app.demo.copy")),p(9),c("nzGutter",24),p(2),c("nzSpan",12)("hidden",!t.expand),p(6),C("ngModel",t.schema),c("options",t.editorOptions),p(6),C("ngModel",t.formCode),c("options",t.editorOptions),p(6),C("ngModel",t.uiCode),c("options",t.editorOptions),p(6),N(t.schemaData?72:-1))},dependencies:[Z,X,Y,fe,ue,ce,pe,se,de,oe,ie,te,G,J,Q,U,P,re,ne,j,A,le,me,ae,$,_e,he,R],encapsulation:2,changeDetection:0})};var dt=[{path:"",component:ge,children:[{path:"validator/:lang",component:w,data:{titleI18n:"app.header.menu.form.validator"}}]}];export{dt as routes};
