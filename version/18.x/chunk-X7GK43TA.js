import{b as ee}from"./chunk-4WVT6GJN.js";import{e as fe,i as Ce}from"./chunk-OYEF4SD2.js";import"./chunk-NZN5T5JT.js";import"./chunk-ZSEM3CGD.js";import{e as ie,f as ne,g as oe}from"./chunk-VX6U3N3S.js";import"./chunk-YFEQWCQD.js";import{a as me,b as le,c as se}from"./chunk-JTOY7A5N.js";import"./chunk-KYNVQUZL.js";import"./chunk-J6XY7ONC.js";import{b as K,c as X}from"./chunk-JABXQ56R.js";import{a as ze}from"./chunk-3HMEED4I.js";import"./chunk-N5D4LKLG.js";import{i as de,o as pe,p as ce,q as ue,r as he,s as _e}from"./chunk-TDHOL7D5.js";import{F as re,H as ae,R as ge,g as Y,m as Z,v as $}from"./chunk-GTVNFQLK.js";import{Ab as V,Bb as v,Db as t,Hb as C,Ib as g,Ja as d,Jb as z,Ka as _,Lb as W,Rb as T,Sa as F,Sb as b,Va as c,Xf as Q,Yf as P,Zf as G,ah as H,cb as N,cc as B,db as D,dg as J,fb as k,fg as U,gb as I,gg as q,ha as E,hb as o,hg as A,ib as r,jb as y,nb as w,nd as L,ne as R,pd as j,qa as m,qb as u,qh as te,ra as l,sb as f,wb as O,zb as S}from"./chunk-PQ76J5IX.js";var Ve=["schemaEditor"],ve=["formCodeEditor"],we=["uiEditor"];function Te(h,M){if(h&1&&(t(0,`
        `),y(1,"nz-option",22),t(2,`
      `)),h&2){let i=M.$implicit;d(),c("nzValue",i.name)("nzLabel",i.title)}}function be(h,M){if(h&1){let i=w();t(0,`
    `),o(1,"div",4),t(2,`
      `),o(3,"sf",23),u("formSubmit",function(e){m(i);let n=f();return l(n.submit(e))})("formChange",function(e){m(i);let n=f();return l(n.change(e))})("formValueChange",function(e){m(i);let n=f();return l(n.valueChange(e))})("formError",function(e){m(i);let n=f();return l(n.error(e))}),r(),t(4,`
    `),r(),t(5,`
  `)}if(h&2){let i=f();d(),c("nzSpan",i.expand?12:24),d(2),c("schema",i.schemaData)("formData",i.formData)("ui",i.uiSchema)("layout",i.layout)}}var Me=`import { Component, inject } from '@angular/core';
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
}`,ye=(()=>{class h{constructor(i,s,e,n,p,a){this.i18n=i,this.codeSrv=s,this.http=e,this.msg=n,this.appService=p,this.cdr=a,this.files=[{name:"basic",title:"\u57FA\u672C"},{name:"conditional",title:"\u6761\u4EF6"},{name:"sort",title:"\u987A\u5E8F"},{name:"validation",title:"\u81EA\u5B9A\u4E49\u6821\u9A8C"},{name:"fixed",title:"\u4E0D\u89C4\u5219\u5E03\u5C40"}],this.layout="horizontal",this.expand=!0,this.editorOptions={language:"json",theme:"vs"};let x=0;this.name=this.files[x].name,this.title=this.files[x].title,this.appService.theme$.pipe(L()).subscribe(Se=>{this.editorOptions={language:"json",theme:Se==="dark"?"vs-dark":"vs"}})}ngOnInit(){this.getSchema()}refreshLayout(i){setTimeout(()=>{this[i].editor?.layout()},100)}getSchema(){let i=this.files.find(s=>s.name===this.name);if(i){if(this.name=i.name,this.title=i.title,i.cache){this.schema=i.cache,this.run();return}this.http.get(`./assets/schema/${i.name}.json`,null,{responseType:"text"}).subscribe(s=>{i.cache=s,this.schema=i.cache,this.run()})}}run(){this.schemaData=JSON.parse(this.schema||"{}"),this.formData=JSON.parse(this.formCode||"{}"),this.uiSchema=JSON.parse(this.uiCode||"{}"),this.cdr.detectChanges()}openOnStackBlitz(){let i={schema:this.schema,layout:this.layout,formData:this.formCode||"{}",ui:this.uiCode||"{}"},s=Me.replace(/\{(\w+)\}/g,(e,n)=>(i[n]||"").trim());this.codeSrv.openOnStackBlitz("sf-validator",s)}onCopy(){te(this.schema).then(()=>this.msg.success(this.i18n.fanyi("app.demo.copied")))}submit(i){this.msg.success(JSON.stringify(i))}change(i){console.log("formChange",i)}valueChange(i){console.log("formChange",i)}error(i){console.log("formError",i)}static{this.\u0275fac=function(s){return new(s||h)(_(j),_(X),_(H),_(ge),_(K),_(B))}}static{this.\u0275cmp=E({type:h,selectors:[["form-validator"]],viewQuery:function(s,e){if(s&1&&(S(Ve,5),S(ve,5),S(we,5)),s&2){let n;V(n=v())&&(e.schemaEditor=n.first),V(n=v())&&(e.formCodeEditor=n.first),V(n=v())&&(e.uiEditor=n.first)}},standalone:!0,features:[W],decls:74,vars:23,consts:[["schemaEditor",""],["formCodeEditor",""],["uiEditor",""],["nz-row","",1,"border-bottom-1","pb-sm","mb-md"],["nz-col","",3,"nzSpan"],[3,"ngModelChange","ngModel"],[1,"ml-sm",3,"ngModelChange","ngModel"],["nz-radio-button","","nzValue","horizontal"],["nz-radio-button","","nzValue","vertical"],["nz-radio-button","","nzValue","inline"],["nz-col","",1,"text-right",3,"nzSpan"],["nz-tooltip","","nz-button","",3,"click","nzTooltipTitle"],["nz-icon","",3,"nzType"],["nz-tooltip","","nz-button","",1,"ml-sm",3,"click","nzTooltipTitle"],["nz-icon","","nzType","form"],["nz-icon","","nzType","copy"],["nz-row","",1,"border-bottom-1","pb-sm","mb-md",3,"nzGutter"],["nz-col","",3,"nzSpan","hidden"],["nzTitle","Schema",3,"nzClick"],["height","500px",3,"ngModelChange","ngModel","options"],["nzTitle","Form Data",3,"nzClick"],["nzTitle","UI Schema",3,"nzClick"],[3,"nzValue","nzLabel"],[3,"formSubmit","formChange","formValueChange","formError","schema","formData","ui","layout"]],template:function(s,e){if(s&1){let n=w();o(0,"div",3),t(1,`
  `),o(2,"div",4),t(3,`
    `),o(4,"nz-select",5),z("ngModelChange",function(a){return m(n),g(e.name,a)||(e.name=a),l(a)}),u("ngModelChange",function(){return m(n),l(e.getSchema())}),t(5,`
      `),k(6,Te,3,2,null,null,D),r(),t(8,`
    `),o(9,"nz-radio-group",6),z("ngModelChange",function(a){return m(n),g(e.layout,a)||(e.layout=a),l(a)}),t(10,`
      `),o(11,"label",7),t(12,"\u6C34\u5E73"),r(),t(13,`
      `),o(14,"label",8),t(15,"\u5782\u76F4"),r(),t(16,`
      `),o(17,"label",9),t(18,"\u884C\u5185"),r(),t(19,`
    `),r(),t(20,`
  `),r(),t(21,`
  `),o(22,"div",10),t(23,`
    `),o(24,"nz-button-group"),t(25,`
      `),o(26,"button",11),u("click",function(){return m(n),l(e.expand=!e.expand)}),t(27,`
        `),y(28,"i",12),t(29,`
      `),r(),t(30,`
      `),o(31,"button",13),T(32,"i18n"),u("click",function(){return m(n),l(e.openOnStackBlitz())}),t(33,`
        `),y(34,"i",14),t(35,`
      `),r(),t(36,`
      `),o(37,"button",13),T(38,"i18n"),u("click",function(){return m(n),l(e.onCopy())}),t(39,`
        `),y(40,"i",15),t(41,`
      `),r(),t(42,`
    `),r(),t(43,`
  `),r(),t(44,`
`),r(),t(45,`
`),o(46,"div",16),t(47,`
  `),o(48,"div",17),t(49,`
    `),o(50,"nz-tabset"),t(51,`
      `),o(52,"nz-tab",18),u("nzClick",function(){return m(n),l(e.refreshLayout("schemaEditor"))}),t(53,`
        `),o(54,"nu-monaco-editor",19,0),z("ngModelChange",function(a){return m(n),g(e.schema,a)||(e.schema=a),l(a)}),u("ngModelChange",function(){return m(n),l(e.run())}),r(),t(56,`
      `),r(),t(57,`
      `),o(58,"nz-tab",20),u("nzClick",function(){return m(n),l(e.refreshLayout("formCodeEditor"))}),t(59,`
        `),o(60,"nu-monaco-editor",19,1),z("ngModelChange",function(a){return m(n),g(e.formCode,a)||(e.formCode=a),l(a)}),u("ngModelChange",function(){return m(n),l(e.run())}),r(),t(62,`
      `),r(),t(63,`
      `),o(64,"nz-tab",21),u("nzClick",function(){return m(n),l(e.refreshLayout("uiEditor"))}),t(65,`
        `),o(66,"nu-monaco-editor",19,2),z("ngModelChange",function(a){return m(n),g(e.uiCode,a)||(e.uiCode=a),l(a)}),u("ngModelChange",function(){return m(n),l(e.run())}),r(),t(68,`
      `),r(),t(69,`
    `),r(),t(70,`
  `),r(),t(71,`
  `),F(72,be,6,5),r(),t(73,`
`)}s&2&&(d(2),c("nzSpan",18),d(2),C("ngModel",e.name),d(2),I(e.files),d(3),C("ngModel",e.layout),d(13),c("nzSpan",6),d(4),c("nzTooltipTitle",e.expand?"Hide Code":"Show Code"),d(2),O("nzType","vertical-",e.expand?"right":"left",""),d(3),c("nzTooltipTitle",b(32,19,"app.demo.stackblitz")),d(6),c("nzTooltipTitle",b(38,21,"app.demo.copy")),d(9),c("nzGutter",24),d(2),c("nzSpan",12)("hidden",!e.expand),d(6),C("ngModel",e.schema),c("options",e.editorOptions),d(6),C("ngModel",e.formCode),c("options",e.editorOptions),d(6),C("ngModel",e.uiCode),c("options",e.editorOptions),d(6),N(e.schemaData?72:-1))},dependencies:[$,Y,Z,_e,he,ue,ce,de,pe,oe,ne,ie,A,U,q,G,J,ae,re,P,Q,se,le,me,ee,Ce,fe,R],encapsulation:2,changeDetection:0})}}return h})();var rt=[{path:"",component:ze,children:[{path:"validator/:lang",component:ye,data:{titleI18n:"app.header.menu.form.validator"}}]}];export{rt as routes};
