import{b as Z}from"./chunk-Q4SK6U2S.js";import{e as fe,i as he}from"./chunk-KYGMJMHJ.js";import"./chunk-YAM2LDJJ.js";import"./chunk-TUSG7BD6.js";import{e as ee,f as te,g as ie}from"./chunk-PPRFXIDT.js";import"./chunk-ZEVXAXVD.js";import{a as re,b as ae,c as me}from"./chunk-3YAX2XTP.js";import"./chunk-AUF4LF4Y.js";import"./chunk-YZR7MD3I.js";import{b as H,c as q}from"./chunk-MKMQ53XO.js";import{a as Ce}from"./chunk-MKWK23US.js";import"./chunk-TWWSUF4P.js";import{i as le,o as se,p as de,q as pe,r as ce,s as ue}from"./chunk-G2KCB6QS.js";import{E as oe,G as ne,P as _e,g as K,m as X,v as Y}from"./chunk-EEXBANEL.js";import{$b as z,Bh as J,Cb as b,Dd as L,Eg as P,Fb as u,Gd as W,Gg as Q,Hb as _,Hg as U,Ig as G,Lb as k,Ma as p,Ob as y,Pb as v,Qb as V,Sa as h,Uh as $,Vb as e,Za as T,Zb as C,_b as g,db as N,ib as c,jc as E,kc as M,ma as s,na as d,rb as x,rg as j,sb as F,sg as R,tc as O,ub as D,vb as I,wb as r,xb as a,yb as S,yg as A,ze as B}from"./chunk-SCDKUK6D.js";var ze=["schemaEditor"],Se=["formCodeEditor"],ye=["uiEditor"];function ve(f,n){if(f&1&&(e(0,`
        `),S(1,"nz-option",22),e(2,`
      `)),f&2){let o=n.$implicit;p(),c("nzValue",o.name)("nzLabel",o.title)}}function Ve(f,n){if(f&1){let o=b();e(0,`
    `),r(1,"div",4),e(2,`
      `),r(3,"sf",23),u("formSubmit",function(i){s(o);let m=_();return d(m.submit(i))})("formChange",function(i){s(o);let m=_();return d(m.change(i))})("formValueChange",function(i){s(o);let m=_();return d(m.valueChange(i))})("formError",function(i){s(o);let m=_();return d(m.error(i))}),a(),e(4,`
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
}`,w=class f{constructor(n,o,t,i,m,l){this.i18n=n;this.codeSrv=o;this.http=t;this.msg=i;this.appService=m;this.cdr=l;this.name=this.files[0].name,this.title=this.files[0].title,this.appService.theme$.pipe(L()).subscribe(ge=>{this.editorOptions={language:"json",theme:ge==="dark"?"vs-dark":"vs"}})}schemaEditor;formCodeEditor;uiEditor;files=[{name:"basic",title:"\u57FA\u672C"},{name:"conditional",title:"\u6761\u4EF6"},{name:"sort",title:"\u987A\u5E8F"},{name:"validation",title:"\u81EA\u5B9A\u4E49\u6821\u9A8C"},{name:"fixed",title:"\u4E0D\u89C4\u5219\u5E03\u5C40"}];layout="horizontal";name;title;schema;schemaData;formCode;formData;uiCode;uiSchema;expand=!0;editorOptions={language:"json",theme:"vs"};ngOnInit(){this.getSchema()}refreshLayout(n){setTimeout(()=>{this[n].editor?.layout()},100)}getSchema(){let n=this.files.find(o=>o.name===this.name);if(n){if(this.name=n.name,this.title=n.title,n.cache){this.schema=n.cache,this.run();return}this.http.get(`./assets/schema/${n.name}.json`,null,{responseType:"text"}).subscribe(o=>{n.cache=o,this.schema=n.cache,this.run()})}}run(){this.schemaData=JSON.parse(this.schema||"{}"),this.formData=JSON.parse(this.formCode||"{}"),this.uiSchema=JSON.parse(this.uiCode||"{}"),this.cdr.detectChanges()}openOnStackBlitz(){let n={schema:this.schema,layout:this.layout,formData:this.formCode||"{}",ui:this.uiCode||"{}"},o=we.replace(/\{(\w+)\}/g,(t,i)=>(n[i]||"").trim());this.codeSrv.openOnStackBlitz("sf-validator",o)}onCopy(){$(this.schema).then(()=>this.msg.success(this.i18n.fanyi("app.demo.copied")))}submit(n){this.msg.success(JSON.stringify(n))}change(n){console.log("formChange",n)}valueChange(n){console.log("formChange",n)}error(n){console.log("formError",n)}static \u0275fac=function(o){return new(o||f)(h(W),h(q),h(J),h(_e),h(H),h(O))};static \u0275cmp=T({type:f,selectors:[["form-validator"]],viewQuery:function(o,t){if(o&1&&(y(ze,5),y(Se,5),y(ye,5)),o&2){let i;v(i=V())&&(t.schemaEditor=i.first),v(i=V())&&(t.formCodeEditor=i.first),v(i=V())&&(t.uiEditor=i.first)}},decls:74,vars:23,consts:[["schemaEditor",""],["formCodeEditor",""],["uiEditor",""],["nz-row","",1,"border-bottom-1","pb-sm","mb-md"],["nz-col","",3,"nzSpan"],[3,"ngModelChange","ngModel"],[1,"ml-sm",3,"ngModelChange","ngModel"],["nz-radio-button","","nzValue","horizontal"],["nz-radio-button","","nzValue","vertical"],["nz-radio-button","","nzValue","inline"],["nz-col","",1,"text-right",3,"nzSpan"],["nz-tooltip","","nz-button","",3,"click","nzTooltipTitle"],[3,"nzType"],["nz-tooltip","","nz-button","",1,"ml-sm",3,"click","nzTooltipTitle"],["nzType","form"],["nzType","copy"],["nz-row","",1,"border-bottom-1","pb-sm","mb-md",3,"nzGutter"],["nz-col","",3,"nzSpan","hidden"],["nzTitle","Schema",3,"nzClick"],["height","500px",3,"ngModelChange","ngModel","options"],["nzTitle","Form Data",3,"nzClick"],["nzTitle","UI Schema",3,"nzClick"],[3,"nzValue","nzLabel"],[3,"formSubmit","formChange","formValueChange","formError","schema","formData","ui","layout"]],template:function(o,t){if(o&1){let i=b();r(0,"div",3),e(1,`
  `),r(2,"div",4),e(3,`
    `),r(4,"nz-select",5),z("ngModelChange",function(l){return s(i),g(t.name,l)||(t.name=l),d(l)}),u("ngModelChange",function(){return s(i),d(t.getSchema())}),e(5,`
      `),D(6,ve,3,2,null,null,F),a(),e(8,`
    `),r(9,"nz-radio-group",6),z("ngModelChange",function(l){return s(i),g(t.layout,l)||(t.layout=l),d(l)}),e(10,`
      `),r(11,"label",7),e(12,"\u6C34\u5E73"),a(),e(13,`
      `),r(14,"label",8),e(15,"\u5782\u76F4"),a(),e(16,`
      `),r(17,"label",9),e(18,"\u884C\u5185"),a(),e(19,`
    `),a(),e(20,`
  `),a(),e(21,`
  `),r(22,"div",10),e(23,`
    `),r(24,"nz-button-group"),e(25,`
      `),r(26,"button",11),u("click",function(){return s(i),d(t.expand=!t.expand)}),e(27,`
        `),S(28,"nz-icon",12),e(29,`
      `),a(),e(30,`
      `),r(31,"button",13),E(32,"i18n"),u("click",function(){return s(i),d(t.openOnStackBlitz())}),e(33,`
        `),S(34,"nz-icon",14),e(35,`
      `),a(),e(36,`
      `),r(37,"button",13),E(38,"i18n"),u("click",function(){return s(i),d(t.onCopy())}),e(39,`
        `),S(40,"nz-icon",15),e(41,`
      `),a(),e(42,`
    `),a(),e(43,`
  `),a(),e(44,`
`),a(),e(45,`
`),r(46,"div",16),e(47,`
  `),r(48,"div",17),e(49,`
    `),r(50,"nz-tabset"),e(51,`
      `),r(52,"nz-tab",18),u("nzClick",function(){return s(i),d(t.refreshLayout("schemaEditor"))}),e(53,`
        `),r(54,"nu-monaco-editor",19,0),z("ngModelChange",function(l){return s(i),g(t.schema,l)||(t.schema=l),d(l)}),u("ngModelChange",function(){return s(i),d(t.run())}),a(),e(56,`
      `),a(),e(57,`
      `),r(58,"nz-tab",20),u("nzClick",function(){return s(i),d(t.refreshLayout("formCodeEditor"))}),e(59,`
        `),r(60,"nu-monaco-editor",19,1),z("ngModelChange",function(l){return s(i),g(t.formCode,l)||(t.formCode=l),d(l)}),u("ngModelChange",function(){return s(i),d(t.run())}),a(),e(62,`
      `),a(),e(63,`
      `),r(64,"nz-tab",21),u("nzClick",function(){return s(i),d(t.refreshLayout("uiEditor"))}),e(65,`
        `),r(66,"nu-monaco-editor",19,2),z("ngModelChange",function(l){return s(i),g(t.uiCode,l)||(t.uiCode=l),d(l)}),u("ngModelChange",function(){return s(i),d(t.run())}),a(),e(68,`
      `),a(),e(69,`
    `),a(),e(70,`
  `),a(),e(71,`
  `),N(72,Ve,6,5),a(),e(73,`
`)}o&2&&(p(2),c("nzSpan",18),p(2),C("ngModel",t.name),p(2),I(t.files),p(3),C("ngModel",t.layout),p(13),c("nzSpan",6),p(4),c("nzTooltipTitle",t.expand?"Hide Code":"Show Code"),p(2),k("nzType","vertical-",t.expand?"right":"left",""),p(3),c("nzTooltipTitle",M(32,19,"app.demo.stackblitz")),p(6),c("nzTooltipTitle",M(38,21,"app.demo.copy")),p(9),c("nzGutter",24),p(2),c("nzSpan",12)("hidden",!t.expand),p(6),C("ngModel",t.schema),c("options",t.editorOptions),p(6),C("ngModel",t.formCode),c("options",t.editorOptions),p(6),C("ngModel",t.uiCode),c("options",t.editorOptions),p(6),x(t.schemaData?72:-1))},dependencies:[Y,K,X,ue,ce,pe,de,le,se,ie,te,ee,G,Q,U,A,P,ne,oe,R,j,me,ae,re,Z,he,fe,B],encapsulation:2,changeDetection:0})};var lt=[{path:"",component:Ce,children:[{path:"validator/:lang",component:w,data:{titleI18n:"app.header.menu.form.validator"}}]}];export{lt as routes};
