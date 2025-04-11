import{b as Z,c as $}from"./chunk-MKMQ53XO.js";import{a as G}from"./chunk-HIIF36CB.js";import{E as J,G as W,P as Y}from"./chunk-EEXBANEL.js";import{Cb as g,Dd as E,Fb as x,Gd as R,Hb as u,Ia as M,Ib as N,J as D,Jb as P,Ka as z,Ma as r,Sa as _,Ub as w,Uh as L,Vb as e,Wb as S,Xb as y,Za as O,ad as H,db as h,fc as I,ga as V,ib as s,jc as f,kb as m,kc as C,lb as T,ma as l,na as d,oc as B,rb as b,rg as A,sa as j,sg as U,tc as F,wb as c,xb as p,xd as K,yb as k,ze as q}from"./chunk-SCDKUK6D.js";var X=["*"],ee=o=>({background:o}),te=o=>({height:o});function ie(o,i){if(o&1&&(e(0,`
    `),c(1,"div",12),e(2),k(3,"edit-button",13),e(4,`
    `),p(),e(5,`
    `),k(6,"div",14),e(7,`
  `)),o&2){let n=u();r(2),y(`
      `,n.item.title,`
      `),r(),s("item",n.item),r(3),s("innerHTML",n.item.summary,M)}}function ne(o,i){if(o&1){let n=g();e(0,`
          (
          `),c(1,"a",16),x("click",function(){l(n);let a=u(3);return d(a.openOnlineIDE("CodeSandbox",!0))}),e(2),f(3,"i18n"),p(),e(4,`
          )
        `)}o&2&&(r(2),S(C(3,1,"app.demo.code-sandbox-cli")))}function oe(o,i){o&1&&(e(0),f(1,"i18n"),h(2,ne,5,3)),o&2&&(y(`
        `,C(1,2,"app.demo.code-sandbox"),`
        `),r(2),b(-1))}function re(o,i){if(o&1){let n=g();e(0,`
      `),c(1,"nz-icon",15),x("click",function(){l(n);let a=u();return d(a.openOnlineIDE("CodeSandbox",!0))}),p(),e(2,`
      `),h(3,oe,3,4,"ng-template",null,1,B),e(5,`
    `)}if(o&2){let n=w(4);r(),s("nzTooltipTitle",n)}}function ce(o,i){if(o&1){let n=g();e(0),f(1,"i18n"),c(2,"a",16),x("click",function(){l(n);let a=u();return d(a.openOnlineIDE("StackBlitz",!0))}),e(3),f(4,"i18n"),p(),e(5,`
      )
    `)}o&2&&(y(`
      `,C(1,2,"app.demo.stackblitz"),`
      (
      `),r(3),S(C(4,4,"app.demo.code-sandbox-cli")))}var Q=class o{constructor(i,n,t,a,v,pe){this.appService=i;this.i18n=n;this.msg=t;this.codeSrv=a;this.sanitizer=v;this.cdr=pe}_item;_orgItem;destroy$=V(j);copied=!1;theme="default";set item(i){this._orgItem||(this._orgItem=K(i));let n={meta:i.meta,code:i.code.trim(),title:this.i18n.get(i.meta.title),summary:this.sanitizer.bypassSecurityTrustHtml(this.i18n.get(i.summary)),browser:+i.meta.browser>0?+i.meta.browser:null,bg:i.meta.bg,urls:i.urls};this._item=n}get item(){return this._item}type="default";expand=!1;ngOnInit(){this.appService.theme$.pipe(E(this.destroy$)).subscribe(i=>{this.theme=i,this.check()}),this.i18n.change.pipe(D(()=>!!this._orgItem),E(this.destroy$)).subscribe(()=>{this.item.title=this.i18n.get(this._orgItem.meta.title),this.item.summary=this.i18n.get(this._orgItem.summary),this.check()})}check(){this.cdr.markForCheck()}handle(){this.expand=!this.expand,this.check()}openOnlineIDE(i="StackBlitz",n=!1){i==="StackBlitz"?this.codeSrv.openOnStackBlitz(this.item.title,this.item.code,n):this.codeSrv.openOnCodeSandbox(this.item.title,this.item.code,n)}onCopy(i){L(i).then(()=>{this.msg.success(this.i18n.fanyi("app.demo.copied")),this.copied=!0,this.check(),setTimeout(()=>{this.copied=!1,this.check()},1e3)})}static \u0275fac=function(n){return new(n||o)(_(Z),_(R),_(Y),_($),_(H),_(F))};static \u0275cmp=O({type:o,selectors:[["code-box"]],hostVars:4,hostBindings:function(n,t){n&2&&m("code-box",!0)("expand",t.expand)},inputs:{item:"item",type:"type",expand:"expand"},ngContentSelectors:X,decls:44,vars:35,consts:[["stackblitzTpl",""],["codeSandboxTpl",""],[1,"code-box-demo"],[1,"code-box-meta","markdown"],[1,"code-box-actions"],["nz-tooltip","","nzType","thunderbolt","nzTheme","fill",1,"code-box-code-icon",3,"click","nzTooltipTitle"],["nz-tooltip","",1,"code-box-code-icon",3,"click","nzTooltipTitle","nzType"],["nz-tooltip","",1,"code-expand-icon",3,"nzTooltipTitle"],["alt","expand code",3,"click","src"],[1,"highlight-wrapper"],[1,"highlight"],[1,"hljs","language-ts"],[1,"code-box-title"],[3,"item"],[1,"code-box-description",3,"innerHTML"],["nz-tooltip","","nzType","code-sandbox",1,"code-box-code-icon",3,"click","nzTooltipTitle"],[3,"click"]],template:function(n,t){if(n&1){let a=g();N(),c(0,"section",2),e(1,`
  `),c(2,"div"),e(3,`
    `),c(4,"div"),e(5,`
      `),P(6),e(7,`
    `),p(),e(8,`
  `),p(),e(9,`
`),p(),e(10,`
`),c(11,"section",3),e(12,`
  `),h(13,ie,8,3),c(14,"div",4),e(15,`
    `),h(16,re,6,1),c(17,"nz-icon",5),x("click",function(){return l(a),d(t.openOnlineIDE())}),p(),e(18,`
    `),h(19,ce,6,6,"ng-template",null,0,B),e(21,`
    `),c(22,"nz-icon",6),f(23,"i18n"),x("click",function(){return l(a),d(t.onCopy(t.item.code))}),p(),e(24,`
    `),c(25,"i",7),e(26,`
      `),c(27,"img",8),x("click",function(){return l(a),d(t.handle())}),p(),e(28,`
      `),c(29,"img",8),x("click",function(){return l(a),d(t.handle())}),p(),e(30,`
    `),p(),e(31,`
  `),p(),e(32,`
`),p(),e(33,`
`),c(34,"section",9),e(35,`
  `),c(36,"div",10),e(37,`
    `),c(38,"pre",11)(39,"code"),e(40),p()(),e(41,`
  `),p(),e(42,`
`),p(),e(43,`
`)}if(n&2){let a=w(20);T(I(31,ee,t.item.bg)),r(2),T(I(33,te,t.item.browser+"px")),m("browser-mockup",t.item.browser),r(2),m("browser-scroll",t.item.browser),r(9),b(t.type==="default"?13:-1),r(3),b(-1),r(),s("nzTooltipTitle",a),r(5),m("ant-tooltip-open",t.copied),s("nzTooltipTitle",C(23,29,"app.demo.copy"))("nzType",t.copied?"check":"snippets"),r(3),s("nzTooltipTitle",t.expand?"Hide Code":"Show Code"),r(2),m("code-expand-icon-hide",t.expand)("code-expand-icon-show",!t.expand),s("src",t.theme==="dark"?"https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg",z),r(2),m("code-expand-icon-show",t.expand)("code-expand-icon-hide",!t.expand),s("src",t.theme==="dark"?"https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",z),r(5),m("highlight-wrapper-expand",t.expand),r(6),S(t.item.code)}},dependencies:[q,W,J,U,A,G],encapsulation:2,changeDetection:0})};export{Q as a};
