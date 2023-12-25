import{b as W,c as Y}from"./chunk-MRDWR5H6.js";import{a as te}from"./chunk-7C3FA3PO.js";import{F as Q,H as X,R as ee}from"./chunk-PLWMGIRY.js";import{$a as _,$c as U,Ab as w,Ba as F,Da as S,Db as q,Fb as h,Gb as I,H as E,Ic as R,Ja as o,Jb as g,Ka as d,Kb as u,La as O,Ma as M,Og as G,Sa as a,Ua as T,Ub as V,ab as C,ag as L,bg as J,de as B,ed as Z,fb as r,fe as $,ga as D,gb as c,gc as P,ha as j,hb as v,lb as z,mc as A,na as y,oa as b,pb as m,rb as f,sb as N,tb as H,xb as K,yb as e,zb as k}from"./chunk-KLO4GQEX.js";function oe(t,s){if(t&1&&(e(0,`
    `),r(1,"div",12),e(2),v(3,"edit-button",13),e(4,`
    `),c(),e(5,`
    `),v(6,"div",14),e(7,`
  `)),t&2){let l=f();o(2),w(`
      `,l.item.title,`
      `),o(1),a("item",l.item),o(3),a("innerHTML",l.item.summary,F)}}function re(t,s){if(t&1){let l=z();e(0,`
          (
          `),r(1,"a",17),m("click",function(){y(l);let p=f(3);return b(p.openOnlineIDE("CodeSandbox",!0))}),e(2),g(3,"i18n"),c(),e(4,`
          )
        `)}t&2&&(o(2),k(u(3,1,"app.demo.code-sandbox-cli")))}function ce(t,s){t&1&&(e(0),g(1,"i18n"),_(2,re,5,3)),t&2&&(w(`
        `,u(1,2,"app.demo.code-sandbox"),`
        `),o(2),C(2,-1))}function pe(t,s){if(t&1){let l=z();e(0,`
      `),r(1,"i",15),m("click",function(){y(l);let p=f();return b(p.openOnlineIDE("CodeSandbox",!0))}),c(),e(2,`
      `),_(3,ce,3,4,"ng-template",null,16,V),e(5,`
    `)}if(t&2){let l=K(4);o(1),a("nzTooltipTitle",l)}}var se=t=>({background:t}),ae=t=>({"browser-mockup":t}),le=t=>({"height.px":t}),de=t=>({"browser-scroll":t}),me=(t,s)=>({"code-expand-icon-hide":t,"code-expand-icon-show":s}),he=(t,s)=>({"code-expand-icon-show":t,"code-expand-icon-hide":s}),xe=t=>({"highlight-wrapper-expand":t}),_e=["*"],Ne=(()=>{let s=class s{set item(n){this._orgItem||(this._orgItem=U(n));let p={meta:n.meta,code:n.code.trim(),title:this.i18n.get(n.meta.title),summary:this.sanitizer.bypassSecurityTrustHtml(this.i18n.get(n.summary)),browser:+n.meta.browser>0?+n.meta.browser:null,bg:n.meta.bg,urls:n.urls};this._item=p}get item(){return this._item}constructor(n,p,i,x,ie,ne){this.appService=n,this.i18n=p,this.msg=i,this.codeSrv=x,this.sanitizer=ie,this.cdr=ne,this.destroy$=D(M),this.copied=!1,this.theme="default",this.type="default",this.expand=!1}ngOnInit(){this.appService.theme$.pipe(B(this.destroy$)).subscribe(n=>{this.theme=n,this.check()}),this.i18n.change.pipe(E(()=>!!this._orgItem),B(this.destroy$)).subscribe(()=>{this.item.title=this.i18n.get(this._orgItem.meta.title),this.item.summary=this.i18n.get(this._orgItem.summary),this.check()})}check(){this.cdr.markForCheck()}handle(){this.expand=!this.expand,this.check()}openOnlineIDE(n="StackBlitz",p=!1){n==="StackBlitz"?this.codeSrv.openOnStackBlitz(this.item.title,this.item.code):this.codeSrv.openOnCodeSandbox(this.item.title,this.item.code,p)}onCopy(n){G(n).then(()=>{this.msg.success(this.i18n.fanyi("app.demo.copied")),this.copied=!0,this.check(),setTimeout(()=>{this.copied=!1,this.check()},1e3)})}};s.\u0275fac=function(p){return new(p||s)(d(W),d(Z),d(ee),d(Y),d(R),d(O))},s.\u0275cmp=j({type:s,selectors:[["code-box"]],hostVars:4,hostBindings:function(p,i){p&2&&T("code-box",!0)("expand",i.expand)},inputs:{item:"item",type:"type",expand:"expand"},standalone:!0,features:[q],ngContentSelectors:_e,decls:42,vars:38,consts:[[1,"code-box-demo",3,"ngStyle"],[3,"ngClass","ngStyle"],[3,"ngClass"],[1,"code-box-meta","markdown"],[1,"code-box-actions"],["nz-tooltip","","nz-icon","","nzType","thunderbolt","nzTheme","fill",1,"code-box-code-icon",3,"nzTooltipTitle","click"],["nz-tooltip","","nz-icon","",1,"code-box-code-icon",3,"nzTooltipTitle","nzType","click"],["nz-tooltip","",1,"code-expand-icon",3,"nzTooltipTitle"],["alt","expand code",3,"src","ngClass","click"],[1,"highlight-wrapper",3,"ngClass"],[1,"highlight"],[1,"hljs","language-ts"],[1,"code-box-title"],[3,"item"],[1,"code-box-description",3,"innerHTML"],["nz-tooltip","","nz-icon","","nzType","code-sandbox",1,"code-box-code-icon",3,"nzTooltipTitle","click"],["codeSandboxTpl",""],[3,"click"]],template:function(p,i){p&1&&(N(),r(0,"section",0),e(1,`
  `),r(2,"div",1),e(3,`
    `),r(4,"div",2),e(5,`
      `),H(6),e(7,`
    `),c(),e(8,`
  `),c(),e(9,`
`),c(),e(10,`
`),r(11,"section",3),e(12,`
  `),_(13,oe,8,3),r(14,"div",4),e(15,`
    `),_(16,pe,6,1),r(17,"i",5),m("click",function(){return i.openOnlineIDE()}),g(18,"i18n"),c(),e(19,`
    `),r(20,"i",6),m("click",function(){return i.onCopy(i.item.code)}),g(21,"i18n"),c(),e(22,`
    `),r(23,"i",7),e(24,`
      `),r(25,"img",8),m("click",function(){return i.handle()}),c(),e(26,`
      `),r(27,"img",8),m("click",function(){return i.handle()}),c(),e(28,`
    `),c(),e(29,`
  `),c(),e(30,`
`),c(),e(31,`
`),r(32,"section",9),e(33,`
  `),r(34,"div",10),e(35,`
    `),r(36,"pre",11)(37,"code"),e(38),c()(),e(39,`
  `),c(),e(40,`
`),c(),e(41,`
`)),p&2&&(a("ngStyle",h(22,se,i.item.bg)),o(2),a("ngClass",h(24,ae,i.item.browser))("ngStyle",h(26,le,i.item.browser)),o(2),a("ngClass",h(28,de,i.item.browser)),o(9),C(13,i.type==="default"?13:-1),o(3),C(16,-1),o(1),a("nzTooltipTitle",u(18,18,"app.demo.stackblitz")),o(3),T("ant-tooltip-open",i.copied),a("nzTooltipTitle",u(21,20,"app.demo.copy"))("nzType",i.copied?"check":"snippets"),o(3),a("nzTooltipTitle",i.expand?"Hide Code":"Show Code"),o(2),a("src",i.theme==="dark"?"https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg",S)("ngClass",I(30,me,i.expand,!i.expand)),o(2),a("src",i.theme==="dark"?"https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",S)("ngClass",I(33,he,i.expand,!i.expand)),o(5),a("ngClass",h(36,xe,i.expand)),o(6),k(i.item.code))},dependencies:[A,P,$,X,Q,J,L,te],encapsulation:2,changeDetection:0});let t=s;return t})();export{Ne as a};
