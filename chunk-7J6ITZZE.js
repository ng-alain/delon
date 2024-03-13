import{b as ee}from"./chunk-RZFJYDDF.js";import{e as ue,i as he}from"./chunk-4CJH5P6I.js";import"./chunk-O6XN67QO.js";import{a as Ce,b as ge,c as ze}from"./chunk-IHPGORHX.js";import"./chunk-A32ZBOKR.js";import{e as ne,f as ie,g as oe}from"./chunk-3URBK7CB.js";import"./chunk-XK576P4S.js";import"./chunk-WXESQJI6.js";import{b as K,c as X}from"./chunk-AF4AECKR.js";import{a as _e}from"./chunk-UUNXNAT6.js";import"./chunk-U5X5LNAR.js";import{i as me,o as le,p as se,s as de,t as pe,u as ce}from"./chunk-2GKQ4GWX.js";import{F as re,H as ae,R as fe,g as Y,m as Z,v as $}from"./chunk-XUF4VQ5T.js";import{Ab as T,Bb as b,Db as t,Hb as _,Ib as C,Ja as l,Jb as g,Ka as h,Lb as W,Rb as M,Rg as H,Sb as x,Ta as F,Va as s,ag as Q,bg as P,cb as w,cc as B,cg as G,da as V,db as N,dg as J,fb as D,fg as U,fh as te,gb as k,gg as q,ha as z,hb as o,hg as A,ia as y,ib as r,jb as S,nb as I,nd as L,ne as R,pd as j,qb as p,sb as f,wb as O,zb as v}from"./chunk-LBINBHXL.js";var Te=["schemaEditor"],be=["formCodeEditor"],Me=["uiEditor"];function xe(c,u){if(c&1&&(t(0,`
        `),S(1,"nz-option",22),t(2,`
      `)),c&2){let d=u.$implicit;l(),s("nzValue",d.name)("nzLabel",d.title)}}function Ee(c,u){if(c&1){let d=I();t(0,`
    `),o(1,"div",1),t(2,`
      `),o(3,"sf",23),p("formSubmit",function(a){z(d);let e=f();return y(e.submit(a))})("formChange",function(a){z(d);let e=f();return y(e.change(a))})("formValueChange",function(a){z(d);let e=f();return y(e.valueChange(a))})("formError",function(a){z(d);let e=f();return y(e.error(a))}),r(),t(4,`
    `),r(),t(5,`
  `)}if(c&2){let d=f();l(),s("nzSpan",d.expand?12:24),l(2),s("schema",d.schemaData)("formData",d.formData)("ui",d.uiSchema)("layout",d.layout)}}var Ve=`import { Component, inject } from '@angular/core';
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
}`,ye=(()=>{let u=class u{constructor(n,a,e,i,m,Se){this.i18n=n,this.codeSrv=a,this.http=e,this.msg=i,this.appService=m,this.cdr=Se,this.files=[{name:"basic",title:"\u57FA\u672C"},{name:"conditional",title:"\u6761\u4EF6"},{name:"sort",title:"\u987A\u5E8F"},{name:"validation",title:"\u81EA\u5B9A\u4E49\u6821\u9A8C"},{name:"fixed",title:"\u4E0D\u89C4\u5219\u5E03\u5C40"}],this.layout="horizontal",this.expand=!0,this.editorOptions={language:"json",theme:"vs"};let E=0;this.name=this.files[E].name,this.title=this.files[E].title,this.appService.theme$.pipe(L()).subscribe(ve=>{this.editorOptions={language:"json",theme:ve==="dark"?"vs-dark":"vs"}})}ngOnInit(){this.getSchema()}refreshLayout(n){setTimeout(()=>{this[n].editor?.layout()},100)}getSchema(){let n=this.files.find(a=>a.name===this.name);if(n){if(this.name=n.name,this.title=n.title,n.cache){this.schema=n.cache,this.run();return}this.http.get(`./assets/schema/${n.name}.json`,null,{responseType:"text"}).subscribe(a=>{n.cache=a,this.schema=n.cache,this.run()})}}run(){this.schemaData=JSON.parse(this.schema||"{}"),this.formData=JSON.parse(this.formCode||"{}"),this.uiSchema=JSON.parse(this.uiCode||"{}"),this.cdr.detectChanges()}openOnStackBlitz(){let n={schema:this.schema,layout:this.layout,formData:this.formCode||"{}",ui:this.uiCode||"{}"},a=Ve.replace(/\{(\w+)\}/g,(e,i)=>(n[i]||"").trim());this.codeSrv.openOnStackBlitz("sf-validator",a)}onCopy(){te(this.schema).then(()=>this.msg.success(this.i18n.fanyi("app.demo.copied")))}submit(n){this.msg.success(JSON.stringify(n))}change(n){console.log("formChange",n)}valueChange(n){console.log("formChange",n)}error(n){console.log("formError",n)}};u.\u0275fac=function(a){return new(a||u)(h(j),h(X),h(H),h(fe),h(K),h(B))},u.\u0275cmp=V({type:u,selectors:[["form-validator"]],viewQuery:function(a,e){if(a&1&&(v(Te,5),v(be,5),v(Me,5)),a&2){let i;T(i=b())&&(e.schemaEditor=i.first),T(i=b())&&(e.formCodeEditor=i.first),T(i=b())&&(e.uiEditor=i.first)}},standalone:!0,features:[W],decls:74,vars:22,consts:[["nz-row","",1,"border-bottom-1","pb-sm","mb-md"],["nz-col","",3,"nzSpan"],[3,"ngModel","ngModelChange"],[1,"ml-sm",3,"ngModel","ngModelChange"],["nz-radio-button","","nzValue","horizontal"],["nz-radio-button","","nzValue","vertical"],["nz-radio-button","","nzValue","inline"],["nz-col","",1,"text-right",3,"nzSpan"],["nz-tooltip","","nz-button","",3,"nzTooltipTitle","click"],["nz-icon","",3,"nzType"],["nz-tooltip","","nz-button","",1,"ml-sm",3,"nzTooltipTitle","click"],["nz-icon","","nzType","form"],["nz-icon","","nzType","copy"],["nz-row","",1,"border-bottom-1","pb-sm","mb-md",3,"nzGutter"],["nz-col","",3,"nzSpan","hidden"],["nzTitle","Schema",3,"nzClick"],["height","500px",3,"ngModel","options","ngModelChange"],["schemaEditor",""],["nzTitle","Form Data",3,"nzClick"],["formCodeEditor",""],["nzTitle","UI Schema",3,"nzClick"],["uiEditor",""],[3,"nzValue","nzLabel"],[3,"schema","formData","ui","layout","formSubmit","formChange","formValueChange","formError"]],template:function(a,e){a&1&&(o(0,"div",0),t(1,`
  `),o(2,"div",1),t(3,`
    `),o(4,"nz-select",2),g("ngModelChange",function(m){return C(e.name,m)||(e.name=m),m}),p("ngModelChange",function(){return e.getSchema()}),t(5,`
      `),D(6,xe,3,2,null,null,N),r(),t(8,`
    `),o(9,"nz-radio-group",3),g("ngModelChange",function(m){return C(e.layout,m)||(e.layout=m),m}),t(10,`
      `),o(11,"label",4),t(12,"\u6C34\u5E73"),r(),t(13,`
      `),o(14,"label",5),t(15,"\u5782\u76F4"),r(),t(16,`
      `),o(17,"label",6),t(18,"\u884C\u5185"),r(),t(19,`
    `),r(),t(20,`
  `),r(),t(21,`
  `),o(22,"div",7),t(23,`
    `),o(24,"nz-button-group"),t(25,`
      `),o(26,"button",8),p("click",function(){return e.expand=!e.expand}),t(27,`
        `),S(28,"i",9),t(29,`
      `),r(),t(30,`
      `),o(31,"button",10),p("click",function(){return e.openOnStackBlitz()}),M(32,"i18n"),t(33,`
        `),S(34,"i",11),t(35,`
      `),r(),t(36,`
      `),o(37,"button",10),p("click",function(){return e.onCopy()}),M(38,"i18n"),t(39,`
        `),S(40,"i",12),t(41,`
      `),r(),t(42,`
    `),r(),t(43,`
  `),r(),t(44,`
`),r(),t(45,`
`),o(46,"div",13),t(47,`
  `),o(48,"div",14),t(49,`
    `),o(50,"nz-tabset"),t(51,`
      `),o(52,"nz-tab",15),p("nzClick",function(){return e.refreshLayout("schemaEditor")}),t(53,`
        `),o(54,"nu-monaco-editor",16,17),g("ngModelChange",function(m){return C(e.schema,m)||(e.schema=m),m}),p("ngModelChange",function(){return e.run()}),r(),t(56,`
      `),r(),t(57,`
      `),o(58,"nz-tab",18),p("nzClick",function(){return e.refreshLayout("formCodeEditor")}),t(59,`
        `),o(60,"nu-monaco-editor",16,19),g("ngModelChange",function(m){return C(e.formCode,m)||(e.formCode=m),m}),p("ngModelChange",function(){return e.run()}),r(),t(62,`
      `),r(),t(63,`
      `),o(64,"nz-tab",20),p("nzClick",function(){return e.refreshLayout("uiEditor")}),t(65,`
        `),o(66,"nu-monaco-editor",16,21),g("ngModelChange",function(m){return C(e.uiCode,m)||(e.uiCode=m),m}),p("ngModelChange",function(){return e.run()}),r(),t(68,`
      `),r(),t(69,`
    `),r(),t(70,`
  `),r(),t(71,`
  `),F(72,Ee,6,5),r(),t(73,`
`)),a&2&&(l(2),s("nzSpan",18),l(2),_("ngModel",e.name),l(2),k(e.files),l(3),_("ngModel",e.layout),l(13),s("nzSpan",6),l(4),s("nzTooltipTitle",e.expand?"Hide Code":"Show Code"),l(2),O("nzType","vertical-",e.expand?"right":"left",""),l(3),s("nzTooltipTitle",x(32,18,"app.demo.stackblitz")),l(6),s("nzTooltipTitle",x(38,20,"app.demo.copy")),l(9),s("nzGutter",24),l(2),s("nzSpan",12)("hidden",!e.expand),l(6),_("ngModel",e.schema),s("options",e.editorOptions),l(6),_("ngModel",e.formCode),s("options",e.editorOptions),l(6),_("ngModel",e.uiCode),s("options",e.editorOptions),l(6),w(72,e.schemaData?72:-1))},dependencies:[$,Y,Z,ce,pe,de,se,me,le,oe,ie,ne,A,U,q,G,J,ae,re,P,Q,ze,ge,Ce,ee,he,ue,R],encapsulation:2,changeDetection:0});let c=u;return c})();var at=[{path:"",component:_e,children:[{path:"validator/:lang",component:ye,data:{titleI18n:"app.header.menu.form.validator"}}]}];export{at as routes};
