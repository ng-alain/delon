import{b as X}from"./chunk-DAZSBENE.js";import{e as de,i as ce}from"./chunk-O6WJPF3H.js";import"./chunk-WGHE4HA3.js";import{a as _e,b as fe,c as Ce}from"./chunk-DFTH5LK6.js";import"./chunk-A7J72WGS.js";import{e as Z,f as ee,g as te,h as ne}from"./chunk-VUOSYIK3.js";import"./chunk-VX4RYKMX.js";import"./chunk-4LMKEQTT.js";import{b as H,c as P}from"./chunk-33YW74HO.js";import{a as he}from"./chunk-5XANOQJV.js";import"./chunk-WCHKEMEB.js";import{i as re,o as ae,p as me,s as le,t as se,u as pe}from"./chunk-PKX7OMMK.js";import{F as ie,H as oe,R as ue,g as U,m as K,v as W}from"./chunk-PLWMGIRY.js";import{$a as E,Db as I,Ja as m,Jb as y,Ka as h,Kb as T,La as M,Og as Y,Qb as z,Rb as v,Sa as l,Tb as S,ab as V,ag as R,bb as N,bg as Q,cg as L,db as F,de as j,eb as D,ed as O,eg as $,fb as o,fe as B,gb as r,gg as G,ha as x,hb as g,hg as J,ig as q,lb as k,na as f,oa as C,pb as p,rb as _,vb as w,xg as A,yb as e}from"./chunk-KLO4GQEX.js";var Se=["schemaEditor"],ye=["formCodeEditor"],Te=["uiEditor"];function be(c,u){if(c&1&&(e(0,`
        `),g(1,"nz-option",22),e(2,`
      `)),c&2){let s=u.$implicit;m(1),l("nzValue",s.name)("nzLabel",s.title)}}function xe(c,u){if(c&1){let s=k();e(0,`
    `),o(1,"div",1),e(2,`
      `),o(3,"sf",23),p("formSubmit",function(a){f(s);let t=_();return C(t.submit(a))})("formChange",function(a){f(s);let t=_();return C(t.change(a))})("formValueChange",function(a){f(s);let t=_();return C(t.valueChange(a))})("formError",function(a){f(s);let t=_();return C(t.error(a))}),r(),e(4,`
    `),r(),e(5,`
  `)}if(c&2){let s=_();m(1),l("nzSpan",s.expand?12:24),m(2),l("schema",s.schemaData)("formData",s.formData)("ui",s.uiSchema)("layout",s.layout)}}var Me=`
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
}`,ge=(()=>{let u=class u{constructor(n,a,t,i,d,ze){this.i18n=n,this.codeSrv=a,this.http=t,this.msg=i,this.appService=d,this.cdr=ze,this.files=[{name:"basic",title:"\u57FA\u672C"},{name:"conditional",title:"\u6761\u4EF6"},{name:"sort",title:"\u987A\u5E8F"},{name:"validation",title:"\u81EA\u5B9A\u4E49\u6821\u9A8C"},{name:"fixed",title:"\u4E0D\u89C4\u5219\u5E03\u5C40"}],this.layout="horizontal",this.expand=!0,this.editorOptions={language:"json",theme:"vs"};let b=0;this.name=this.files[b].name,this.title=this.files[b].title,this.appService.theme$.pipe(j()).subscribe(ve=>{this.editorOptions={language:"json",theme:ve==="dark"?"vs-dark":"vs"}})}ngOnInit(){this.getSchema()}refreshLayout(n){setTimeout(()=>{this[n].editor?.layout()},100)}getSchema(){let n=this.files.find(a=>a.name===this.name);if(n){if(this.name=n.name,this.title=n.title,n.cache){this.schema=n.cache,this.run();return}this.http.get(`./assets/schema/${n.name}.json`,null,{responseType:"text"}).subscribe(a=>{n.cache=a,this.schema=n.cache,this.run()})}}run(){this.schemaData=JSON.parse(this.schema||"{}"),this.formData=JSON.parse(this.formCode||"{}"),this.uiSchema=JSON.parse(this.uiCode||"{}"),this.cdr.detectChanges()}openOnStackBlitz(){let n={schema:this.schema,layout:this.layout,formData:this.formCode||"{}",ui:this.uiCode||"{}"},a=Me.replace(/\{(\w+)\}/g,(t,i)=>(n[i]||"").trim());this.codeSrv.openOnStackBlitz("sf-validator",a)}onCopy(){Y(this.schema).then(()=>this.msg.success(this.i18n.fanyi("app.demo.copied")))}submit(n){this.msg.success(JSON.stringify(n))}change(n){console.log("formChange",n)}valueChange(n){console.log("formChange",n)}error(n){console.log("formError",n)}};u.\u0275fac=function(a){return new(a||u)(h(O),h(P),h(A),h(ue),h(H),h(M))},u.\u0275cmp=x({type:u,selectors:[["form-validator"]],viewQuery:function(a,t){if(a&1&&(v(Se,5),v(ye,5),v(Te,5)),a&2){let i;z(i=S())&&(t.schemaEditor=i.first),z(i=S())&&(t.formCodeEditor=i.first),z(i=S())&&(t.uiEditor=i.first)}},standalone:!0,features:[I],decls:74,vars:22,consts:[["nz-row","",1,"border-bottom-1","pb-sm","mb-md"],["nz-col","",3,"nzSpan"],[3,"ngModel","ngModelChange"],[1,"ml-sm",3,"ngModel","ngModelChange"],["nz-radio-button","","nzValue","horizontal"],["nz-radio-button","","nzValue","vertical"],["nz-radio-button","","nzValue","inline"],["nz-col","",1,"text-right",3,"nzSpan"],["nz-tooltip","","nz-button","",3,"nzTooltipTitle","click"],["nz-icon","",3,"nzType"],["nz-tooltip","","nz-button","",1,"ml-sm",3,"nzTooltipTitle","click"],["nz-icon","","nzType","form"],["nz-icon","","nzType","copy"],["nz-row","",1,"border-bottom-1","pb-sm","mb-md",3,"nzGutter"],["nz-col","",3,"nzSpan","hidden"],["nzTitle","Schema",3,"nzClick"],["height","500px",3,"ngModel","options","ngModelChange"],["schemaEditor",""],["nzTitle","Form Data",3,"nzClick"],["formCodeEditor",""],["nzTitle","UI Schema",3,"nzClick"],["uiEditor",""],[3,"nzValue","nzLabel"],[3,"schema","formData","ui","layout","formSubmit","formChange","formValueChange","formError"]],template:function(a,t){a&1&&(o(0,"div",0),e(1,`
  `),o(2,"div",1),e(3,`
    `),o(4,"nz-select",2),p("ngModelChange",function(d){return t.name=d})("ngModelChange",function(){return t.getSchema()}),e(5,`
      `),F(6,be,3,2,null,null,N),r(),e(8,`
    `),o(9,"nz-radio-group",3),p("ngModelChange",function(d){return t.layout=d}),e(10,`
      `),o(11,"label",4),e(12,"\u6C34\u5E73"),r(),e(13,`
      `),o(14,"label",5),e(15,"\u5782\u76F4"),r(),e(16,`
      `),o(17,"label",6),e(18,"\u884C\u5185"),r(),e(19,`
    `),r(),e(20,`
  `),r(),e(21,`
  `),o(22,"div",7),e(23,`
    `),o(24,"nz-button-group"),e(25,`
      `),o(26,"button",8),p("click",function(){return t.expand=!t.expand}),e(27,`
        `),g(28,"i",9),e(29,`
      `),r(),e(30,`
      `),o(31,"button",10),p("click",function(){return t.openOnStackBlitz()}),y(32,"i18n"),e(33,`
        `),g(34,"i",11),e(35,`
      `),r(),e(36,`
      `),o(37,"button",10),p("click",function(){return t.onCopy()}),y(38,"i18n"),e(39,`
        `),g(40,"i",12),e(41,`
      `),r(),e(42,`
    `),r(),e(43,`
  `),r(),e(44,`
`),r(),e(45,`
`),o(46,"div",13),e(47,`
  `),o(48,"div",14),e(49,`
    `),o(50,"nz-tabset"),e(51,`
      `),o(52,"nz-tab",15),p("nzClick",function(){return t.refreshLayout("schemaEditor")}),e(53,`
        `),o(54,"nu-monaco-editor",16,17),p("ngModelChange",function(d){return t.schema=d})("ngModelChange",function(){return t.run()}),r(),e(56,`
      `),r(),e(57,`
      `),o(58,"nz-tab",18),p("nzClick",function(){return t.refreshLayout("formCodeEditor")}),e(59,`
        `),o(60,"nu-monaco-editor",16,19),p("ngModelChange",function(d){return t.formCode=d})("ngModelChange",function(){return t.run()}),r(),e(62,`
      `),r(),e(63,`
      `),o(64,"nz-tab",20),p("nzClick",function(){return t.refreshLayout("uiEditor")}),e(65,`
        `),o(66,"nu-monaco-editor",16,21),p("ngModelChange",function(d){return t.uiCode=d})("ngModelChange",function(){return t.run()}),r(),e(68,`
      `),r(),e(69,`
    `),r(),e(70,`
  `),r(),e(71,`
  `),E(72,xe,6,5),r(),e(73,`
`)),a&2&&(m(2),l("nzSpan",18),m(2),l("ngModel",t.name),D(6,t.files),m(5),l("ngModel",t.layout),m(13),l("nzSpan",6),m(4),l("nzTooltipTitle",t.expand?"Hide Code":"Show Code"),m(2),w("nzType","vertical-",t.expand?"right":"left",""),m(3),l("nzTooltipTitle",T(32,18,"app.demo.stackblitz")),m(6),l("nzTooltipTitle",T(38,20,"app.demo.copy")),m(9),l("nzGutter",24),m(2),l("nzSpan",12)("hidden",!t.expand),m(6),l("ngModel",t.schema)("options",t.editorOptions),m(6),l("ngModel",t.formCode)("options",t.editorOptions),m(6),l("ngModel",t.uiCode)("options",t.editorOptions),m(6),V(72,t.schemaData?72:-1))},dependencies:[W,U,K,pe,se,le,me,re,ae,ne,te,Z,ee,q,G,J,L,$,oe,ie,Q,R,Ce,fe,_e,X,ce,de,B],encapsulation:2,changeDetection:0});let c=u;return c})();var ot=[{path:"",component:he,children:[{path:"validator/:lang",component:ge,data:{titleI18n:"app.header.menu.form.validator"}}]}];export{ot as routes};
