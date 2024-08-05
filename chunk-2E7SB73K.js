import{b as te}from"./chunk-JN26SIQB.js";import{e as Ce,i as ge}from"./chunk-W3UVR76X.js";import"./chunk-O74XELQO.js";import"./chunk-DHVVM7Y5.js";import{e as ne,f as oe,g as re}from"./chunk-HQBK4EMB.js";import"./chunk-URMU3Q2R.js";import{a as le,b as se,c as de}from"./chunk-BDMAN3C5.js";import"./chunk-RW7QBIAD.js";import"./chunk-6DAHPH4L.js";import{b as X,c as Y}from"./chunk-DWNHS637.js";import{a as ye}from"./chunk-B3FH2E3T.js";import"./chunk-KXGQH2H2.js";import{i as pe,o as ce,p as ue,q as he,r as _e,s as fe}from"./chunk-7ULXDHLQ.js";import{F as ae,H as me,R as ze,g as Z,m as $,v as ee}from"./chunk-GK4IRTK3.js";import{Ab as w,Bb as T,Db as t,Hb as z,Ib as y,Ja as d,Jb as S,Ka as C,Lb as B,Rb as M,Sb as x,Ta as N,Va as c,Vf as P,Wf as G,Xf as J,bg as U,cb as D,cc as L,db as k,dg as q,eg as A,fb as I,fg as H,fh as K,gb as O,ha as F,hb as o,ib as r,jb as V,le as Q,nb as b,qa as l,qb as h,qd as j,ra as s,sb as g,sd as R,wb as W,yh as ie,zb as v}from"./chunk-FML4Y3RM.js";var ve=["schemaEditor"],we=["formCodeEditor"],Te=["uiEditor"];function be(_,f){if(_&1&&(t(0,`
        `),V(1,"nz-option",22),t(2,`
      `)),_&2){let u=f.$implicit;d(),c("nzValue",u.name)("nzLabel",u.title)}}function Me(_,f){if(_&1){let u=b();t(0,`
    `),o(1,"div",4),t(2,`
      `),o(3,"sf",23),h("formSubmit",function(a){l(u);let e=g();return s(e.submit(a))})("formChange",function(a){l(u);let e=g();return s(e.change(a))})("formValueChange",function(a){l(u);let e=g();return s(e.valueChange(a))})("formError",function(a){l(u);let e=g();return s(e.error(a))}),r(),t(4,`
    `),r(),t(5,`
  `)}if(_&2){let u=g();d(),c("nzSpan",u.expand?12:24),d(2),c("schema",u.schemaData)("formData",u.formData)("ui",u.uiSchema)("layout",u.layout)}}var xe=`import { Component, inject } from '@angular/core';
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
  standalone: true,
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
}`,Se=(()=>{let f=class f{constructor(i,a,e,n,p,m){this.i18n=i,this.codeSrv=a,this.http=e,this.msg=n,this.appService=p,this.cdr=m,this.files=[{name:"basic",title:"\u57FA\u672C"},{name:"conditional",title:"\u6761\u4EF6"},{name:"sort",title:"\u987A\u5E8F"},{name:"validation",title:"\u81EA\u5B9A\u4E49\u6821\u9A8C"},{name:"fixed",title:"\u4E0D\u89C4\u5219\u5E03\u5C40"}],this.layout="horizontal",this.expand=!0,this.editorOptions={language:"json",theme:"vs"};let E=0;this.name=this.files[E].name,this.title=this.files[E].title,this.appService.theme$.pipe(j()).subscribe(Ve=>{this.editorOptions={language:"json",theme:Ve==="dark"?"vs-dark":"vs"}})}ngOnInit(){this.getSchema()}refreshLayout(i){setTimeout(()=>{this[i].editor?.layout()},100)}getSchema(){let i=this.files.find(a=>a.name===this.name);if(i){if(this.name=i.name,this.title=i.title,i.cache){this.schema=i.cache,this.run();return}this.http.get(`./assets/schema/${i.name}.json`,null,{responseType:"text"}).subscribe(a=>{i.cache=a,this.schema=i.cache,this.run()})}}run(){this.schemaData=JSON.parse(this.schema||"{}"),this.formData=JSON.parse(this.formCode||"{}"),this.uiSchema=JSON.parse(this.uiCode||"{}"),this.cdr.detectChanges()}openOnStackBlitz(){let i={schema:this.schema,layout:this.layout,formData:this.formCode||"{}",ui:this.uiCode||"{}"},a=xe.replace(/\{(\w+)\}/g,(e,n)=>(i[n]||"").trim());this.codeSrv.openOnStackBlitz("sf-validator",a)}onCopy(){ie(this.schema).then(()=>this.msg.success(this.i18n.fanyi("app.demo.copied")))}submit(i){this.msg.success(JSON.stringify(i))}change(i){console.log("formChange",i)}valueChange(i){console.log("formChange",i)}error(i){console.log("formError",i)}};f.\u0275fac=function(a){return new(a||f)(C(R),C(Y),C(K),C(ze),C(X),C(L))},f.\u0275cmp=F({type:f,selectors:[["form-validator"]],viewQuery:function(a,e){if(a&1&&(v(ve,5),v(we,5),v(Te,5)),a&2){let n;w(n=T())&&(e.schemaEditor=n.first),w(n=T())&&(e.formCodeEditor=n.first),w(n=T())&&(e.uiEditor=n.first)}},standalone:!0,features:[B],decls:74,vars:23,consts:[["schemaEditor",""],["formCodeEditor",""],["uiEditor",""],["nz-row","",1,"border-bottom-1","pb-sm","mb-md"],["nz-col","",3,"nzSpan"],[3,"ngModelChange","ngModel"],[1,"ml-sm",3,"ngModelChange","ngModel"],["nz-radio-button","","nzValue","horizontal"],["nz-radio-button","","nzValue","vertical"],["nz-radio-button","","nzValue","inline"],["nz-col","",1,"text-right",3,"nzSpan"],["nz-tooltip","","nz-button","",3,"click","nzTooltipTitle"],["nz-icon","",3,"nzType"],["nz-tooltip","","nz-button","",1,"ml-sm",3,"click","nzTooltipTitle"],["nz-icon","","nzType","form"],["nz-icon","","nzType","copy"],["nz-row","",1,"border-bottom-1","pb-sm","mb-md",3,"nzGutter"],["nz-col","",3,"nzSpan","hidden"],["nzTitle","Schema",3,"nzClick"],["height","500px",3,"ngModelChange","ngModel","options"],["nzTitle","Form Data",3,"nzClick"],["nzTitle","UI Schema",3,"nzClick"],[3,"nzValue","nzLabel"],[3,"formSubmit","formChange","formValueChange","formError","schema","formData","ui","layout"]],template:function(a,e){if(a&1){let n=b();o(0,"div",3),t(1,`
  `),o(2,"div",4),t(3,`
    `),o(4,"nz-select",5),S("ngModelChange",function(m){return l(n),y(e.name,m)||(e.name=m),s(m)}),h("ngModelChange",function(){return l(n),s(e.getSchema())}),t(5,`
      `),I(6,be,3,2,null,null,k),r(),t(8,`
    `),o(9,"nz-radio-group",6),S("ngModelChange",function(m){return l(n),y(e.layout,m)||(e.layout=m),s(m)}),t(10,`
      `),o(11,"label",7),t(12,"\u6C34\u5E73"),r(),t(13,`
      `),o(14,"label",8),t(15,"\u5782\u76F4"),r(),t(16,`
      `),o(17,"label",9),t(18,"\u884C\u5185"),r(),t(19,`
    `),r(),t(20,`
  `),r(),t(21,`
  `),o(22,"div",10),t(23,`
    `),o(24,"nz-button-group"),t(25,`
      `),o(26,"button",11),h("click",function(){return l(n),s(e.expand=!e.expand)}),t(27,`
        `),V(28,"i",12),t(29,`
      `),r(),t(30,`
      `),o(31,"button",13),M(32,"i18n"),h("click",function(){return l(n),s(e.openOnStackBlitz())}),t(33,`
        `),V(34,"i",14),t(35,`
      `),r(),t(36,`
      `),o(37,"button",13),M(38,"i18n"),h("click",function(){return l(n),s(e.onCopy())}),t(39,`
        `),V(40,"i",15),t(41,`
      `),r(),t(42,`
    `),r(),t(43,`
  `),r(),t(44,`
`),r(),t(45,`
`),o(46,"div",16),t(47,`
  `),o(48,"div",17),t(49,`
    `),o(50,"nz-tabset"),t(51,`
      `),o(52,"nz-tab",18),h("nzClick",function(){return l(n),s(e.refreshLayout("schemaEditor"))}),t(53,`
        `),o(54,"nu-monaco-editor",19,0),S("ngModelChange",function(m){return l(n),y(e.schema,m)||(e.schema=m),s(m)}),h("ngModelChange",function(){return l(n),s(e.run())}),r(),t(56,`
      `),r(),t(57,`
      `),o(58,"nz-tab",20),h("nzClick",function(){return l(n),s(e.refreshLayout("formCodeEditor"))}),t(59,`
        `),o(60,"nu-monaco-editor",19,1),S("ngModelChange",function(m){return l(n),y(e.formCode,m)||(e.formCode=m),s(m)}),h("ngModelChange",function(){return l(n),s(e.run())}),r(),t(62,`
      `),r(),t(63,`
      `),o(64,"nz-tab",21),h("nzClick",function(){return l(n),s(e.refreshLayout("uiEditor"))}),t(65,`
        `),o(66,"nu-monaco-editor",19,2),S("ngModelChange",function(m){return l(n),y(e.uiCode,m)||(e.uiCode=m),s(m)}),h("ngModelChange",function(){return l(n),s(e.run())}),r(),t(68,`
      `),r(),t(69,`
    `),r(),t(70,`
  `),r(),t(71,`
  `),N(72,Me,6,5),r(),t(73,`
`)}a&2&&(d(2),c("nzSpan",18),d(2),z("ngModel",e.name),d(2),O(e.files),d(3),z("ngModel",e.layout),d(13),c("nzSpan",6),d(4),c("nzTooltipTitle",e.expand?"Hide Code":"Show Code"),d(2),W("nzType","vertical-",e.expand?"right":"left",""),d(3),c("nzTooltipTitle",x(32,19,"app.demo.stackblitz")),d(6),c("nzTooltipTitle",x(38,21,"app.demo.copy")),d(9),c("nzGutter",24),d(2),c("nzSpan",12)("hidden",!e.expand),d(6),z("ngModel",e.schema),c("options",e.editorOptions),d(6),z("ngModel",e.formCode),c("options",e.editorOptions),d(6),z("ngModel",e.uiCode),c("options",e.editorOptions),d(6),D(e.schemaData?72:-1))},dependencies:[ee,Z,$,fe,_e,he,ue,pe,ce,re,oe,ne,H,q,A,J,U,me,ae,G,P,de,se,le,te,ge,Ce,Q],encapsulation:2,changeDetection:0});let _=f;return _})();var at=[{path:"",component:ye,children:[{path:"validator/:lang",component:Se,data:{titleI18n:"app.header.menu.form.validator"}}]}];export{at as routes};
