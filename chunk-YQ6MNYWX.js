import{b as Y,c as G}from"./chunk-XEXUGHN5.js";import{a as ie}from"./chunk-S7VNNC65.js";import{F as X,H as ee,R as te}from"./chunk-ADNPNLQV.js";import{Bb as B,Cb as e,Db as k,Ea as N,Eb as z,Ga as v,H as j,Ia as r,Ja as h,Kb as q,Mb as g,Nb as E,Nc as U,Qb as C,Rb as f,Sa as u,Ua as a,Vb as D,Wa as w,ag as J,bb as T,bc as P,bg as W,fa as F,gb as c,ha as O,hb as p,hd as Z,ib as I,kc as R,mb as b,nd as V,ne as L,pb as _,pd as $,qa as m,qc as A,qh as Q,ra as x,rb as S,sb as H,tb as K,xa as M}from"./chunk-ZSKDB3F4.js";var oe=["*"],re=t=>({background:t}),ce=t=>({"browser-mockup":t}),pe=t=>({"height.px":t}),se=t=>({"browser-scroll":t}),ae=(t,s)=>({"code-expand-icon-hide":t,"code-expand-icon-show":s}),le=(t,s)=>({"code-expand-icon-show":t,"code-expand-icon-hide":s}),de=t=>({"highlight-wrapper-expand":t});function me(t,s){if(t&1&&(e(0,`
    `),c(1,"div",14),e(2),I(3,"edit-button",15),e(4,`
    `),p(),e(5,`
    `),I(6,"div",16),e(7,`
  `)),t&2){let l=S();r(2),z(`
      `,l.item.title,`
      `),r(),a("item",l.item),r(3),a("innerHTML",l.item.summary,N)}}function xe(t,s){if(t&1){let l=b();e(0,`
          (
          `),c(1,"a",18),_("click",function(){m(l);let o=S(3);return x(o.openOnlineIDE("CodeSandbox",!0))}),e(2),C(3,"i18n"),p(),e(4,`
          )
        `)}t&2&&(r(2),k(f(3,1,"app.demo.code-sandbox-cli")))}function _e(t,s){t&1&&(e(0),C(1,"i18n"),u(2,xe,5,3)),t&2&&(z(`
        `,f(1,2,"app.demo.code-sandbox"),`
        `),r(2),T(-1))}function he(t,s){if(t&1){let l=b();e(0,`
      `),c(1,"i",17),_("click",function(){m(l);let o=S();return x(o.openOnlineIDE("CodeSandbox",!0))}),p(),e(2,`
      `),u(3,_e,3,4,"ng-template",null,1,D),e(5,`
    `)}if(t&2){let l=B(4);r(),a("nzTooltipTitle",l)}}function ue(t,s){if(t&1){let l=b();e(0),C(1,"i18n"),c(2,"a",18),_("click",function(){m(l);let o=S();return x(o.openOnlineIDE("StackBlitz",!0))}),e(3),C(4,"i18n"),p(),e(5,`
      )
    `)}t&2&&(z(`
      `,f(1,2,"app.demo.stackblitz"),`
      (
      `),r(3),k(f(4,4,"app.demo.code-sandbox-cli")))}var Ne=(()=>{let s=class s{set item(n){this._orgItem||(this._orgItem=Z(n));let o={meta:n.meta,code:n.code.trim(),title:this.i18n.get(n.meta.title),summary:this.sanitizer.bypassSecurityTrustHtml(this.i18n.get(n.summary)),browser:+n.meta.browser>0?+n.meta.browser:null,bg:n.meta.bg,urls:n.urls};this._item=o}get item(){return this._item}constructor(n,o,i,d,y,ne){this.appService=n,this.i18n=o,this.msg=i,this.codeSrv=d,this.sanitizer=y,this.cdr=ne,this.destroy$=F(M),this.copied=!1,this.theme="default",this.type="default",this.expand=!1}ngOnInit(){this.appService.theme$.pipe(V(this.destroy$)).subscribe(n=>{this.theme=n,this.check()}),this.i18n.change.pipe(j(()=>!!this._orgItem),V(this.destroy$)).subscribe(()=>{this.item.title=this.i18n.get(this._orgItem.meta.title),this.item.summary=this.i18n.get(this._orgItem.summary),this.check()})}check(){this.cdr.markForCheck()}handle(){this.expand=!this.expand,this.check()}openOnlineIDE(n="StackBlitz",o=!1){n==="StackBlitz"?this.codeSrv.openOnStackBlitz(this.item.title,this.item.code,o):this.codeSrv.openOnCodeSandbox(this.item.title,this.item.code,o)}onCopy(n){Q(n).then(()=>{this.msg.success(this.i18n.fanyi("app.demo.copied")),this.copied=!0,this.check(),setTimeout(()=>{this.copied=!1,this.check()},1e3)})}};s.\u0275fac=function(o){return new(o||s)(h(Y),h($),h(te),h(G),h(U),h(P))},s.\u0275cmp=O({type:s,selectors:[["code-box"]],hostVars:4,hostBindings:function(o,i){o&2&&w("code-box",!0)("expand",i.expand)},inputs:{item:"item",type:"type",expand:"expand"},standalone:!0,features:[q],ngContentSelectors:oe,decls:44,vars:36,consts:[["stackblitzTpl",""],["codeSandboxTpl",""],[1,"code-box-demo",3,"ngStyle"],[3,"ngClass","ngStyle"],[3,"ngClass"],[1,"code-box-meta","markdown"],[1,"code-box-actions"],["nz-tooltip","","nz-icon","","nzType","thunderbolt","nzTheme","fill",1,"code-box-code-icon",3,"click","nzTooltipTitle"],["nz-tooltip","","nz-icon","",1,"code-box-code-icon",3,"click","nzTooltipTitle","nzType"],["nz-tooltip","",1,"code-expand-icon",3,"nzTooltipTitle"],["alt","expand code",3,"click","src","ngClass"],[1,"highlight-wrapper",3,"ngClass"],[1,"highlight"],[1,"hljs","language-ts"],[1,"code-box-title"],[3,"item"],[1,"code-box-description",3,"innerHTML"],["nz-tooltip","","nz-icon","","nzType","code-sandbox",1,"code-box-code-icon",3,"click","nzTooltipTitle"],[3,"click"]],template:function(o,i){if(o&1){let d=b();H(),c(0,"section",2),e(1,`
  `),c(2,"div",3),e(3,`
    `),c(4,"div",4),e(5,`
      `),K(6),e(7,`
    `),p(),e(8,`
  `),p(),e(9,`
`),p(),e(10,`
`),c(11,"section",5),e(12,`
  `),u(13,me,8,3),c(14,"div",6),e(15,`
    `),u(16,he,6,1),c(17,"i",7),_("click",function(){return m(d),x(i.openOnlineIDE())}),p(),e(18,`
    `),u(19,ue,6,6,"ng-template",null,0,D),e(21,`
    `),c(22,"i",8),C(23,"i18n"),_("click",function(){return m(d),x(i.onCopy(i.item.code))}),p(),e(24,`
    `),c(25,"i",9),e(26,`
      `),c(27,"img",10),_("click",function(){return m(d),x(i.handle())}),p(),e(28,`
      `),c(29,"img",10),_("click",function(){return m(d),x(i.handle())}),p(),e(30,`
    `),p(),e(31,`
  `),p(),e(32,`
`),p(),e(33,`
`),c(34,"section",11),e(35,`
  `),c(36,"div",12),e(37,`
    `),c(38,"pre",13)(39,"code"),e(40),p()(),e(41,`
  `),p(),e(42,`
`),p(),e(43,`
`)}if(o&2){let d=B(20);a("ngStyle",g(20,re,i.item.bg)),r(2),a("ngClass",g(22,ce,i.item.browser))("ngStyle",g(24,pe,i.item.browser)),r(2),a("ngClass",g(26,se,i.item.browser)),r(9),T(i.type==="default"?13:-1),r(3),T(-1),r(),a("nzTooltipTitle",d),r(5),w("ant-tooltip-open",i.copied),a("nzTooltipTitle",f(23,18,"app.demo.copy"))("nzType",i.copied?"check":"snippets"),r(3),a("nzTooltipTitle",i.expand?"Hide Code":"Show Code"),r(2),a("src",i.theme==="dark"?"https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg",v)("ngClass",E(28,ae,i.expand,!i.expand)),r(2),a("src",i.theme==="dark"?"https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",v)("ngClass",E(31,le,i.expand,!i.expand)),r(5),a("ngClass",g(34,de,i.expand)),r(6),k(i.item.code)}},dependencies:[A,R,L,ee,X,W,J,ie],encapsulation:2,changeDetection:0});let t=s;return t})();export{Ne as a};
