import{b as W,c as Y}from"./chunk-S5ZNKJJV.js";import{a as te}from"./chunk-Q7UE7XQH.js";import{F as Q,H as X,R as ee}from"./chunk-QFGZFXPV.js";import{$a as _,Ab as z,Ba as j,Da as f,Db as q,Fb as h,Gb as k,H as I,Ja as o,Jb as g,Jc as U,Ka as d,Kb as u,La as F,Ma as O,Pg as G,Sa as a,Ua as y,Ub as P,ab as C,ad as V,bg as L,cg as J,ee as v,fb as r,fd as Z,ga as w,gb as c,gc as A,ge as $,ha as B,hb as b,lb as M,mc as R,na as E,oa as D,pb as m,rb as S,sb as N,tb as H,xb as K,yb as e,zb as T}from"./chunk-7RYH264L.js";function oe(t,s){if(t&1&&(e(0,`
    `),r(1,"div",14),e(2),b(3,"edit-button",15),e(4,`
    `),c(),e(5,`
    `),b(6,"div",16),e(7,`
  `)),t&2){let x=S();o(2),z(`
      `,x.item.title,`
      `),o(1),a("item",x.item),o(3),a("innerHTML",x.item.summary,j)}}function re(t,s){if(t&1){let x=M();e(0,`
        (
        `),r(1,"a",17),m("click",function(){E(x);let p=S(2);return D(p.openOnlineIDE("CodeSandbox",!0))}),e(2),g(3,"i18n"),c(),e(4,`
        )
      `)}t&2&&(o(2),T(u(3,1,"app.demo.code-sandbox-cli")))}function ce(t,s){t&1&&(e(0),g(1,"i18n"),_(2,re,5,3)),t&2&&(z(`
      `,u(1,2,"app.demo.code-sandbox"),`
      `),o(2),C(2,-1))}var pe=t=>({background:t}),se=t=>({"browser-mockup":t}),ae=t=>({"height.px":t}),le=t=>({"browser-scroll":t}),de=(t,s)=>({"code-expand-icon-hide":t,"code-expand-icon-show":s}),me=(t,s)=>({"code-expand-icon-show":t,"code-expand-icon-hide":s}),he=t=>({"highlight-wrapper-expand":t}),xe=["*"],Me=(()=>{let s=class s{set item(n){this._orgItem||(this._orgItem=V(n));let p={meta:n.meta,code:n.code.trim(),title:this.i18n.get(n.meta.title),summary:this.sanitizer.bypassSecurityTrustHtml(this.i18n.get(n.summary)),browser:+n.meta.browser>0?+n.meta.browser:null,bg:n.meta.bg,urls:n.urls};this._item=p}get item(){return this._item}constructor(n,p,i,l,ie,ne){this.appService=n,this.i18n=p,this.msg=i,this.codeSrv=l,this.sanitizer=ie,this.cdr=ne,this.destroy$=w(O),this.copied=!1,this.theme="default",this.type="default",this.expand=!1}ngOnInit(){this.appService.theme$.pipe(v(this.destroy$)).subscribe(n=>{this.theme=n,this.check()}),this.i18n.change.pipe(I(()=>!!this._orgItem),v(this.destroy$)).subscribe(()=>{this.item.title=this.i18n.get(this._orgItem.meta.title),this.item.summary=this.i18n.get(this._orgItem.summary),this.check()})}check(){this.cdr.markForCheck()}handle(){this.expand=!this.expand,this.check()}openOnlineIDE(n="StackBlitz",p=!1){n==="StackBlitz"?this.codeSrv.openOnStackBlitz(this.item.title,this.item.code):this.codeSrv.openOnCodeSandbox(this.item.title,this.item.code,p)}onCopy(n){G(n).then(()=>{this.msg.success(this.i18n.fanyi("app.demo.copied")),this.copied=!0,this.check(),setTimeout(()=>{this.copied=!1,this.check()},1e3)})}};s.\u0275fac=function(p){return new(p||s)(d(W),d(Z),d(ee),d(Y),d(U),d(F))},s.\u0275cmp=B({type:s,selectors:[["code-box"]],hostVars:4,hostBindings:function(p,i){p&2&&y("code-box",!0)("expand",i.expand)},inputs:{item:"item",type:"type",expand:"expand"},standalone:!0,features:[q],ngContentSelectors:xe,decls:46,vars:38,consts:[[1,"code-box-demo",3,"ngStyle"],[3,"ngClass","ngStyle"],[3,"ngClass"],[1,"code-box-meta","markdown"],[1,"code-box-actions"],["nz-tooltip","","nz-icon","","nzType","code-sandbox",1,"code-box-code-icon",3,"nzTooltipTitle","click"],["codeSandboxTpl",""],["nz-tooltip","","nz-icon","","nzType","thunderbolt","nzTheme","fill",1,"code-box-code-icon",3,"nzTooltipTitle","click"],["nz-tooltip","","nz-icon","",1,"code-box-code-icon",3,"nzTooltipTitle","nzType","click"],["nz-tooltip","",1,"code-expand-icon",3,"nzTooltipTitle"],["alt","expand code",3,"src","ngClass","click"],[1,"highlight-wrapper",3,"ngClass"],[1,"highlight"],[1,"hljs","language-ts"],[1,"code-box-title"],[3,"item"],[1,"code-box-description",3,"innerHTML"],[3,"click"]],template:function(p,i){if(p&1&&(N(),r(0,"section",0),e(1,`
  `),r(2,"div",1),e(3,`
    `),r(4,"div",2),e(5,`
      `),H(6),e(7,`
    `),c(),e(8,`
  `),c(),e(9,`
`),c(),e(10,`
`),r(11,"section",3),e(12,`
  `),_(13,oe,8,3),r(14,"div",4),e(15,`
    `),r(16,"i",5),m("click",function(){return i.openOnlineIDE("CodeSandbox",!0)}),c(),e(17,`
    `),_(18,ce,3,4,"ng-template",null,6,P),e(20,`
    `),r(21,"i",7),m("click",function(){return i.openOnlineIDE()}),g(22,"i18n"),c(),e(23,`
    `),r(24,"i",8),m("click",function(){return i.onCopy(i.item.code)}),g(25,"i18n"),c(),e(26,`
    `),r(27,"i",9),e(28,`
      `),r(29,"img",10),m("click",function(){return i.handle()}),c(),e(30,`
      `),r(31,"img",10),m("click",function(){return i.handle()}),c(),e(32,`
    `),c(),e(33,`
  `),c(),e(34,`
`),c(),e(35,`
`),r(36,"section",11),e(37,`
  `),r(38,"div",12),e(39,`
    `),r(40,"pre",13)(41,"code"),e(42),c()(),e(43,`
  `),c(),e(44,`
`),c(),e(45,`
`)),p&2){let l=K(19);a("ngStyle",h(22,pe,i.item.bg)),o(2),a("ngClass",h(24,se,i.item.browser))("ngStyle",h(26,ae,i.item.browser)),o(2),a("ngClass",h(28,le,i.item.browser)),o(9),C(13,i.type==="default"?13:-1),o(3),a("nzTooltipTitle",l),o(5),a("nzTooltipTitle",u(22,18,"app.demo.stackblitz")),o(3),y("ant-tooltip-open",i.copied),a("nzTooltipTitle",u(25,20,"app.demo.copy"))("nzType",i.copied?"check":"snippets"),o(3),a("nzTooltipTitle",i.expand?"Hide Code":"Show Code"),o(2),a("src",i.theme==="dark"?"https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg",f)("ngClass",k(30,de,i.expand,!i.expand)),o(2),a("src",i.theme==="dark"?"https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",f)("ngClass",k(33,me,i.expand,!i.expand)),o(5),a("ngClass",h(36,he,i.expand)),o(6),T(i.item.code)}},dependencies:[R,A,$,X,Q,J,L,te],encapsulation:2,changeDetection:0});let t=s;return t})();export{Me as a};
