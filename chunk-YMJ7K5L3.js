import{b as Z,c as $}from"./chunk-URFY52WN.js";import{a as G}from"./chunk-I55ZQDZC.js";import{F as J,H as W,da as Y}from"./chunk-7BM3L5ZS.js";import{$a as k,Bb as f,Db as x,Fb as u,Fd as K,Ga as M,Gb as F,Gc as j,H as V,Hb as N,Ia as T,La as r,Ld as D,Od as q,Pb as w,Rb as _,Sb as B,Te as R,Ub as e,Va as P,Vb as b,Wb as v,Yh as L,fa as s,id as H,jc as I,ka as d,kb as g,la as m,mb as y,nc as h,oc as C,qa as O,rb as l,sb as a,sc as E,tb as p,ub as S,wg as A,xg as U}from"./chunk-HYQTCAQ6.js";var X=["*"],ee=o=>({background:o}),te=o=>({height:o});function ie(o,i){if(o&1&&(e(0,`
    `),a(1,"div",12),e(2),S(3,"edit-button",13),e(4,`
    `),p(),e(5,`
    `),S(6,"div",14),e(7,`
  `)),o&2){let n=u();r(2),v(`
      `,n.item.title,`
      `),r(),l("item",n.item),r(3),l("innerHTML",n.item.summary,M)}}function ne(o,i){if(o&1){let n=f();e(0,`
          (
          `),a(1,"a",16),x("click",function(){d(n);let c=u(3);return m(c.openOnlineIDE("CodeSandbox",!0))}),e(2),h(3,"i18n"),p(),e(4,`
          )
        `)}o&2&&(r(2),b(C(3,1,"app.demo.code-sandbox-cli")))}function oe(o,i){o&1&&(e(0),h(1,"i18n"),g(2,ne,5,3)),o&2&&(v(`
        `,C(1,2,"app.demo.code-sandbox"),`
        `),r(2),y(-1))}function re(o,i){if(o&1){let n=f();e(0,`
      `),a(1,"nz-icon",15),x("click",function(){d(n);let c=u();return m(c.openOnlineIDE("CodeSandbox",!0))}),p(),e(2,`
      `),k(3,oe,3,4,"ng-template",null,1,E),e(5,`
    `)}if(o&2){let n=w(4);r(),l("nzTooltipTitle",n)}}function ae(o,i){if(o&1){let n=f();e(0),h(1,"i18n"),a(2,"a",16),x("click",function(){d(n);let c=u();return m(c.openOnlineIDE("StackBlitz",!0))}),e(3),h(4,"i18n"),p(),e(5,`
      )
    `)}o&2&&(v(`
      `,C(1,2,"app.demo.stackblitz"),`
      (
      `),r(3),b(C(4,4,"app.demo.code-sandbox-cli")))}var Q=class o{appService=s(Z);i18n=s(q);msg=s(Y);codeSrv=s($);sanitizer=s(H);cdr=s(j);_item;_orgItem;destroy$=s(O);copied=!1;theme="default";set item(i){this._orgItem||(this._orgItem=K(i));let n={meta:i.meta,code:i.code.trim(),title:this.i18n.get(i.meta.title),summary:this.sanitizer.bypassSecurityTrustHtml(this.i18n.get(i.summary)),browser:+i.meta.browser>0?+i.meta.browser:null,bg:i.meta.bg,urls:i.urls};this._item=n}get item(){return this._item}type="default";expand=!1;ngOnInit(){this.appService.theme$.pipe(D(this.destroy$)).subscribe(i=>{this.theme=i,this.check()}),this.i18n.change.pipe(V(()=>!!this._orgItem),D(this.destroy$)).subscribe(()=>{this.item.title=this.i18n.get(this._orgItem.meta.title),this.item.summary=this.i18n.get(this._orgItem.summary),this.check()})}check(){this.cdr.markForCheck()}handle(){this.expand=!this.expand,this.check()}openOnlineIDE(i="StackBlitz",n=!1){i==="StackBlitz"?this.codeSrv.openOnStackBlitz(this.item.title,this.item.code,n):this.codeSrv.openOnCodeSandbox(this.item.title,this.item.code,n)}onCopy(i){L(i).then(()=>{this.msg.success(this.i18n.fanyi("app.demo.copied")),this.copied=!0,this.check(),setTimeout(()=>{this.copied=!1,this.check()},1e3)})}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=P({type:o,selectors:[["code-box"]],hostVars:4,hostBindings:function(n,t){n&2&&_("code-box",!0)("expand",t.expand)},inputs:{item:"item",type:"type",expand:"expand"},ngContentSelectors:X,decls:44,vars:35,consts:[["stackblitzTpl",""],["codeSandboxTpl",""],[1,"code-box-demo"],[1,"code-box-meta","markdown"],[1,"code-box-actions"],["nz-tooltip","","nzType","thunderbolt","nzTheme","fill",1,"code-box-code-icon",3,"click","nzTooltipTitle"],["nz-tooltip","",1,"code-box-code-icon",3,"click","nzTooltipTitle","nzType"],["nz-tooltip","",1,"code-expand-icon",3,"nzTooltipTitle"],["alt","expand code",3,"click","src"],[1,"highlight-wrapper"],[1,"highlight"],[1,"hljs","language-ts"],[1,"code-box-title"],[3,"item"],[1,"code-box-description",3,"innerHTML"],["nz-tooltip","","nzType","code-sandbox",1,"code-box-code-icon",3,"click","nzTooltipTitle"],[3,"click"]],template:function(n,t){if(n&1){let c=f();F(),a(0,"section",2),e(1,`
  `),a(2,"div"),e(3,`
    `),a(4,"div"),e(5,`
      `),N(6),e(7,`
    `),p(),e(8,`
  `),p(),e(9,`
`),p(),e(10,`
`),a(11,"section",3),e(12,`
  `),g(13,ie,8,3),a(14,"div",4),e(15,`
    `),g(16,re,6,1),a(17,"nz-icon",5),x("click",function(){return d(c),m(t.openOnlineIDE())}),p(),e(18,`
    `),k(19,ae,6,6,"ng-template",null,0,E),e(21,`
    `),a(22,"nz-icon",6),h(23,"i18n"),x("click",function(){return d(c),m(t.onCopy(t.item.code))}),p(),e(24,`
    `),a(25,"i",7),e(26,`
      `),a(27,"img",8),x("click",function(){return d(c),m(t.handle())}),p(),e(28,`
      `),a(29,"img",8),x("click",function(){return d(c),m(t.handle())}),p(),e(30,`
    `),p(),e(31,`
  `),p(),e(32,`
`),p(),e(33,`
`),a(34,"section",9),e(35,`
  `),a(36,"div",10),e(37,`
    `),a(38,"pre",11)(39,"code"),e(40),p()(),e(41,`
  `),p(),e(42,`
`),p(),e(43,`
`)}if(n&2){let c=w(20);B(I(31,ee,t.item.bg)),r(2),B(I(33,te,t.item.browser+"px")),_("browser-mockup",t.item.browser),r(2),_("browser-scroll",t.item.browser),r(9),y(t.type==="default"?13:-1),r(3),y(-1),r(),l("nzTooltipTitle",c),r(5),_("ant-tooltip-open",t.copied),l("nzTooltipTitle",C(23,29,"app.demo.copy"))("nzType",t.copied?"check":"snippets"),r(3),l("nzTooltipTitle",t.expand?"Hide Code":"Show Code"),r(2),_("code-expand-icon-hide",t.expand)("code-expand-icon-show",!t.expand),l("src",t.theme==="dark"?"https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg",T),r(2),_("code-expand-icon-show",t.expand)("code-expand-icon-hide",!t.expand),l("src",t.theme==="dark"?"https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",T),r(5),_("highlight-wrapper-expand",t.expand),r(6),b(t.item.code)}},dependencies:[W,J,U,A,G,R],encapsulation:2,changeDetection:0})};export{Q as a};
