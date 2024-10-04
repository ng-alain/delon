import{b as W,c as Y}from"./chunk-UFG62NI2.js";import{a as te}from"./chunk-CGCU2SFX.js";import{F as Q,H as X,R as ee}from"./chunk-GTVNFQLK.js";import{Cb as B,Db as e,Eb as T,Fa as M,Fb as k,H as V,Ha as z,Ja as o,Ka as _,Lb as K,Nb as u,Nc as A,Ob as I,Rb as g,Sa as h,Sb as C,Va as s,Wb as E,Xa as v,Xf as L,Yf as J,cb as S,cc as q,fa as j,ha as F,hb as r,hd as U,ib as c,jb as w,nb as y,nc as P,nd as D,ne as $,pd as Z,qa as d,qb as x,qc as R,qh as G,ra as m,sb as b,tb as N,ub as H,wa as O}from"./chunk-PQ76J5IX.js";var ne=["*"],oe=t=>({background:t}),re=t=>({"browser-mockup":t}),ce=t=>({"height.px":t}),pe=t=>({"browser-scroll":t}),se=(t,a)=>({"code-expand-icon-hide":t,"code-expand-icon-show":a}),ae=(t,a)=>({"code-expand-icon-show":t,"code-expand-icon-hide":a}),le=t=>({"highlight-wrapper-expand":t});function de(t,a){if(t&1&&(e(0,`
    `),r(1,"div",14),e(2),w(3,"edit-button",15),e(4,`
    `),c(),e(5,`
    `),w(6,"div",16),e(7,`
  `)),t&2){let i=b();o(2),k(`
      `,i.item.title,`
      `),o(),s("item",i.item),o(3),s("innerHTML",i.item.summary,M)}}function me(t,a){if(t&1){let i=y();e(0,`
          (
          `),r(1,"a",18),x("click",function(){d(i);let n=b(3);return m(n.openOnlineIDE("CodeSandbox",!0))}),e(2),g(3,"i18n"),c(),e(4,`
          )
        `)}t&2&&(o(2),T(C(3,1,"app.demo.code-sandbox-cli")))}function xe(t,a){t&1&&(e(0),g(1,"i18n"),h(2,me,5,3)),t&2&&(k(`
        `,C(1,2,"app.demo.code-sandbox"),`
        `),o(2),S(-1))}function _e(t,a){if(t&1){let i=y();e(0,`
      `),r(1,"i",17),x("click",function(){d(i);let n=b();return m(n.openOnlineIDE("CodeSandbox",!0))}),c(),e(2,`
      `),h(3,xe,3,4,"ng-template",null,1,E),e(5,`
    `)}if(t&2){let i=B(4);o(),s("nzTooltipTitle",i)}}function he(t,a){if(t&1){let i=y();e(0),g(1,"i18n"),r(2,"a",18),x("click",function(){d(i);let n=b();return m(n.openOnlineIDE("StackBlitz",!0))}),e(3),g(4,"i18n"),c(),e(5,`
      )
    `)}t&2&&(k(`
      `,C(1,2,"app.demo.stackblitz"),`
      (
      `),o(3),T(C(4,4,"app.demo.code-sandbox-cli")))}var Me=(()=>{class t{set item(i){this._orgItem||(this._orgItem=U(i));let p={meta:i.meta,code:i.code.trim(),title:this.i18n.get(i.meta.title),summary:this.sanitizer.bypassSecurityTrustHtml(this.i18n.get(i.summary)),browser:+i.meta.browser>0?+i.meta.browser:null,bg:i.meta.bg,urls:i.urls};this._item=p}get item(){return this._item}constructor(i,p,n,l,f,ie){this.appService=i,this.i18n=p,this.msg=n,this.codeSrv=l,this.sanitizer=f,this.cdr=ie,this.destroy$=j(O),this.copied=!1,this.theme="default",this.type="default",this.expand=!1}ngOnInit(){this.appService.theme$.pipe(D(this.destroy$)).subscribe(i=>{this.theme=i,this.check()}),this.i18n.change.pipe(V(()=>!!this._orgItem),D(this.destroy$)).subscribe(()=>{this.item.title=this.i18n.get(this._orgItem.meta.title),this.item.summary=this.i18n.get(this._orgItem.summary),this.check()})}check(){this.cdr.markForCheck()}handle(){this.expand=!this.expand,this.check()}openOnlineIDE(i="StackBlitz",p=!1){i==="StackBlitz"?this.codeSrv.openOnStackBlitz(this.item.title,this.item.code,p):this.codeSrv.openOnCodeSandbox(this.item.title,this.item.code,p)}onCopy(i){G(i).then(()=>{this.msg.success(this.i18n.fanyi("app.demo.copied")),this.copied=!0,this.check(),setTimeout(()=>{this.copied=!1,this.check()},1e3)})}static{this.\u0275fac=function(p){return new(p||t)(_(W),_(Z),_(ee),_(Y),_(A),_(q))}}static{this.\u0275cmp=F({type:t,selectors:[["code-box"]],hostVars:4,hostBindings:function(p,n){p&2&&v("code-box",!0)("expand",n.expand)},inputs:{item:"item",type:"type",expand:"expand"},standalone:!0,features:[K],ngContentSelectors:ne,decls:44,vars:36,consts:[["stackblitzTpl",""],["codeSandboxTpl",""],[1,"code-box-demo",3,"ngStyle"],[3,"ngClass","ngStyle"],[3,"ngClass"],[1,"code-box-meta","markdown"],[1,"code-box-actions"],["nz-tooltip","","nz-icon","","nzType","thunderbolt","nzTheme","fill",1,"code-box-code-icon",3,"click","nzTooltipTitle"],["nz-tooltip","","nz-icon","",1,"code-box-code-icon",3,"click","nzTooltipTitle","nzType"],["nz-tooltip","",1,"code-expand-icon",3,"nzTooltipTitle"],["alt","expand code",3,"click","src","ngClass"],[1,"highlight-wrapper",3,"ngClass"],[1,"highlight"],[1,"hljs","language-ts"],[1,"code-box-title"],[3,"item"],[1,"code-box-description",3,"innerHTML"],["nz-tooltip","","nz-icon","","nzType","code-sandbox",1,"code-box-code-icon",3,"click","nzTooltipTitle"],[3,"click"]],template:function(p,n){if(p&1){let l=y();N(),r(0,"section",2),e(1,`
  `),r(2,"div",3),e(3,`
    `),r(4,"div",4),e(5,`
      `),H(6),e(7,`
    `),c(),e(8,`
  `),c(),e(9,`
`),c(),e(10,`
`),r(11,"section",5),e(12,`
  `),h(13,de,8,3),r(14,"div",6),e(15,`
    `),h(16,_e,6,1),r(17,"i",7),x("click",function(){return d(l),m(n.openOnlineIDE())}),c(),e(18,`
    `),h(19,he,6,6,"ng-template",null,0,E),e(21,`
    `),r(22,"i",8),g(23,"i18n"),x("click",function(){return d(l),m(n.onCopy(n.item.code))}),c(),e(24,`
    `),r(25,"i",9),e(26,`
      `),r(27,"img",10),x("click",function(){return d(l),m(n.handle())}),c(),e(28,`
      `),r(29,"img",10),x("click",function(){return d(l),m(n.handle())}),c(),e(30,`
    `),c(),e(31,`
  `),c(),e(32,`
`),c(),e(33,`
`),r(34,"section",11),e(35,`
  `),r(36,"div",12),e(37,`
    `),r(38,"pre",13)(39,"code"),e(40),c()(),e(41,`
  `),c(),e(42,`
`),c(),e(43,`
`)}if(p&2){let l=B(20);s("ngStyle",u(20,oe,n.item.bg)),o(2),s("ngClass",u(22,re,n.item.browser))("ngStyle",u(24,ce,n.item.browser)),o(2),s("ngClass",u(26,pe,n.item.browser)),o(9),S(n.type==="default"?13:-1),o(3),S(-1),o(),s("nzTooltipTitle",l),o(5),v("ant-tooltip-open",n.copied),s("nzTooltipTitle",C(23,18,"app.demo.copy"))("nzType",n.copied?"check":"snippets"),o(3),s("nzTooltipTitle",n.expand?"Hide Code":"Show Code"),o(2),s("src",n.theme==="dark"?"https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg",z)("ngClass",I(28,se,n.expand,!n.expand)),o(2),s("src",n.theme==="dark"?"https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",z)("ngClass",I(31,ae,n.expand,!n.expand)),o(5),s("ngClass",u(34,le,n.expand)),o(6),T(n.item.code)}},dependencies:[R,P,$,X,Q,J,L,te],encapsulation:2,changeDetection:0})}}return t})();export{Me as a};
