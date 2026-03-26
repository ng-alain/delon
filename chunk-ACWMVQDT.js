import{b as K}from"./chunk-JTRGEH7Y.js";import{a as Z}from"./chunk-2K2EYTWT.js";import{a as H}from"./chunk-RDF7BJYK.js";import{C as U,E as A,ba as R}from"./chunk-VPD4R4PE.js";import{Ag as j,Eb as d,Gb as z,H as f,Ha as b,Hb as S,Hd as M,Ib as k,Ic as I,Ja as h,Ma as r,Nd as O,Qd as P,Sb as p,Tb as y,Vb as e,Wa as _,Wb as T,We as F,Xb as w,ei as q,fa as c,kc as g,kd as D,lb as C,nb as v,oc as B,pc as E,qa as u,sb as m,tb as n,ub as o,vb as x,zg as N}from"./chunk-UENMMWRA.js";var J=["*"],W=s=>({background:s}),Y=s=>({height:s});function $(s,i){if(s&1&&(e(0,`
    `),n(1,"div",10),e(2),x(3,"edit-button",11),e(4,`
    `),o(),e(5,`
    `),x(6,"div",12),e(7,`
  `)),s&2){let a=z();r(2),w(`
      `,a.item.title,`
      `),r(),m("item",a.item),r(3),m("innerHTML",a.item.summary,b)}}var L=class s{i18n=c(P);msg=c(R);codeSrv=c(K);sanitizer=c(D);cdr=c(I);_item;_orgItem;destroy$=c(u);copied=!1;theme=H;set item(i){this._orgItem||(this._orgItem=M(i));let a={meta:i.meta,code:i.code.trim(),title:this.i18n.get(i.meta.title),summary:this.sanitizer.bypassSecurityTrustHtml(this.i18n.get(i.summary)),browser:+i.meta.browser>0?+i.meta.browser:null,bg:i.meta.bg,urls:i.urls};this._item=a}get item(){return this._item}type="default";expand=!1;ngOnInit(){this.i18n.change.pipe(f(()=>!!this._orgItem),O(this.destroy$)).subscribe(()=>{this.item.title=this.i18n.get(this._orgItem.meta.title),this.item.summary=this.i18n.get(this._orgItem.summary),this.check()})}check(){this.cdr.markForCheck()}handle(){this.expand=!this.expand,this.check()}openOnlineIDE(i="StackBlitz"){i==="StackBlitz"?this.codeSrv.openOnStackBlitz(this.item.title,this.item.code):this.codeSrv.openOnCodeSandbox(this.item.title,this.item.code)}onCopy(i){q(i).then(()=>{this.msg.success(this.i18n.fanyi("app.demo.copied")),this.copied=!0,this.check(),setTimeout(()=>{this.copied=!1,this.check()},1e3)})}static \u0275fac=function(a){return new(a||s)};static \u0275cmp=_({type:s,selectors:[["code-box"]],hostVars:4,hostBindings:function(a,t){a&2&&p("code-box",!0)("expand",t.expand)},inputs:{item:"item",type:"type",expand:"expand"},ngContentSelectors:J,decls:40,vars:33,consts:[[1,"code-box-demo"],[1,"code-box-meta","markdown"],[1,"code-box-actions"],["nz-tooltip","","nzType","thunderbolt","nzTheme","fill",1,"code-box-code-icon",3,"click"],["nz-tooltip","",1,"code-box-code-icon",3,"click","nzTooltipTitle","nzType"],["nz-tooltip","",1,"code-expand-icon",3,"nzTooltipTitle"],["alt","expand code",3,"click","src"],[1,"highlight-wrapper"],[1,"highlight"],[1,"hljs","language-ts"],[1,"code-box-title"],[3,"item"],[1,"code-box-description",3,"innerHTML"]],template:function(a,t){a&1&&(S(),n(0,"section",0),e(1,`
  `),n(2,"div"),e(3,`
    `),n(4,"div"),e(5,`
      `),k(6),e(7,`
    `),o(),e(8,`
  `),o(),e(9,`
`),o(),e(10,`
`),n(11,"section",1),e(12,`
  `),C(13,$,8,3),n(14,"div",2),e(15,`
    `),n(16,"nz-icon",3),d("click",function(){return t.openOnlineIDE()}),o(),e(17,`
    `),n(18,"nz-icon",4),B(19,"i18n"),d("click",function(){return t.onCopy(t.item.code)}),o(),e(20,`
    `),n(21,"i",5),e(22,`
      `),n(23,"img",6),d("click",function(){return t.handle()}),o(),e(24,`
      `),n(25,"img",6),d("click",function(){return t.handle()}),o(),e(26,`
    `),o(),e(27,`
  `),o(),e(28,`
`),o(),e(29,`
`),n(30,"section",7),e(31,`
  `),n(32,"div",8),e(33,`
    `),n(34,"pre",9)(35,"code"),e(36),o()(),e(37,`
  `),o(),e(38,`
`),o(),e(39,`
`)),a&2&&(y(g(29,W,t.item.bg)),r(2),y(g(31,Y,t.item.browser+"px")),p("browser-mockup",t.item.browser),r(2),p("browser-scroll",t.item.browser),r(9),v(t.type==="default"?13:-1),r(5),p("ant-tooltip-open",t.copied),m("nzTooltipTitle",E(19,27,"app.demo.copy"))("nzType",t.copied?"check":"snippets"),r(3),m("nzTooltipTitle",t.expand?"Hide Code":"Show Code"),r(2),p("code-expand-icon-hide",t.expand)("code-expand-icon-show",!t.expand),m("src",t.theme()==="dark"?"https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg",h),r(2),p("code-expand-icon-show",t.expand)("code-expand-icon-hide",!t.expand),m("src",t.theme()==="dark"?"https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",h),r(5),p("highlight-wrapper-expand",t.expand),r(6),T(t.item.code))},dependencies:[A,U,j,N,Z,F],encapsulation:2,changeDetection:0})};export{L as a};
