import{a as Bt,b as Ft}from"./chunk-7EFYQGR6.js";import{a as V,b as P}from"./chunk-KXGQH2H2.js";import{a as Ht}from"./chunk-FJJ6RMUW.js";import{a as Lt}from"./chunk-7ULXDHLQ.js";import{F as bt,H as Mt,R as $}from"./chunk-GK4IRTK3.js";import{Aa as ft,Ab as L,Bb as b,C as it,Cb as w,Db as s,Eb as M,Fa as O,Fb as Ct,H as ot,Ha as dt,Ja as c,Ka as z,La as ht,Lb as I,Na as U,Nb as G,Pd as Y,Qc as St,Rb as _t,Sa as ut,Sb as xt,Ta as u,Te as Ot,Va as p,Wb as H,X as rt,Z as st,ad as F,ca as at,cb as g,cc as Tt,db as q,dc as J,ec as vt,fa as h,fb as W,gb as Z,ge as It,ha as v,hb as d,he as E,ia as ct,ib as m,ja as lt,jb as _,jc as B,k as nt,kd as At,le as Et,nb as S,nc as yt,pa as pt,pe as tt,q as T,qa as y,qb as x,qd as Dt,ra as k,re as Nt,sb as f,sd as R,tb as A,tc as kt,ub as D,uc as X,vb as gt,vd as wt,xa as N,ya as mt,yb as zt,yh as j,zb as K}from"./chunk-FML4Y3RM.js";var Wt=["ink"],Vt=["*"],Zt=t=>({"ant-anchor-wrapper-horizontal":t}),Kt=t=>({"ant-anchor-fixed":t});function Gt(t,i){}function Jt(t,i){if(t&1&&(d(0,"nz-affix",2),u(1,Gt,0,0,"ng-template",3),m()),t&2){let o=f(),n=w(3);p("nzOffsetTop",o.nzOffsetTop)("nzTarget",o.container),c(),p("ngTemplateOutlet",n)}}function Xt(t,i){}function Yt(t,i){if(t&1&&u(0,Xt,0,0,"ng-template",3),t&2){f();let o=w(3);p("ngTemplateOutlet",o)}}function te(t,i){if(t&1&&(d(0,"div",4)(1,"div",5)(2,"div",6),_(3,"div",7,1),m(),D(5),m()()),t&2){let o=f();p("ngClass",G(3,Zt,o.nzDirection==="horizontal"))("ngStyle",o.wrapperStyle),c(),p("ngClass",G(5,Kt,!o.nzAffix&&!o.nzShowInkInFixed))}}var ee=["nzTemplate"],ne=["linkTitle"];function ie(t,i){if(t&1&&(d(0,"span"),s(1),m()),t&2){let o=f();c(),M(o.titleStr)}}function oe(t,i){}function re(t,i){if(t&1&&u(0,oe,0,0,"ng-template",2),t&2){let o=f();p("ngTemplateOutlet",o.titleTpl||o.nzTemplate)}}function se(t,i){t&1&&D(0)}function Rt(t,i){if(!t||!t.getClientRects().length)return 0;let o=t.getBoundingClientRect();if(o.width||o.height){if(i===window){let n=t.ownerDocument.documentElement;return o.top-n.clientTop}return o.top-i.getBoundingClientRect().top}return o.top}var jt="ant-anchor-ink-ball-visible",ae="anchor",ce=/#([^#]+)$/,le=Nt({passive:!0}),Q=(()=>{let i=class i{constructor(n,e,r,a,l,C){this.nzConfigService=n,this.scrollSrv=e,this.cdr=r,this.platform=a,this.zone=l,this.renderer=C,this._nzModuleName=ae,this.nzAffix=!0,this.nzShowInkInFixed=!1,this.nzBounds=5,this.nzOffsetTop=void 0,this.nzTargetOffset=void 0,this.nzDirection="vertical",this.nzClick=new N,this.nzChange=new N,this.nzScroll=new N,this.visible=!1,this.wrapperStyle={"max-height":"100vh"},this.links=[],this.animating=!1,this.destroy$=new nt,this.doc=h(B)}registerLink(n){this.links.push(n)}unregisterLink(n){this.links.splice(this.links.indexOf(n),1)}getContainer(){return this.container||window}ngAfterViewInit(){this.registerScrollEvent()}ngOnDestroy(){clearTimeout(this.handleScrollTimeoutID),this.destroy$.next(!0),this.destroy$.complete()}registerScrollEvent(){this.platform.isBrowser&&(this.destroy$.next(!0),this.zone.runOutsideAngular(()=>{it(this.getContainer(),"scroll",le).pipe(st(50),rt(this.destroy$)).subscribe(()=>this.handleScroll())}),this.handleScrollTimeoutID=setTimeout(()=>this.handleScroll()))}handleScroll(){if(typeof document>"u"||this.animating)return;let n=[],r=(this.nzTargetOffset?this.nzTargetOffset:this.nzOffsetTop||0)+this.nzBounds;if(this.links.forEach(a=>{let l=ce.exec(a.nzHref.toString());if(!l)return;let C=this.doc.getElementById(l[1]);if(C){let et=Rt(C,this.getContainer());et<r&&n.push({top:et,comp:a})}}),this.visible=!!n.length,!this.visible)this.clearActive(),this.cdr.detectChanges();else{let a=n.reduce((l,C)=>C.top>l.top?C:l);this.handleActive(a.comp)}this.setVisible()}clearActive(){this.links.forEach(n=>{n.unsetActive()})}setActive(n){let e=this.activeLink,r=this.nzCurrentAnchor&&this.links.find(l=>l.nzHref===this.nzCurrentAnchor)||n;if(!r)return;r.setActive();let a=r.getLinkTitleElement();this.nzDirection==="vertical"?this.ink.nativeElement.style.top=`${a.offsetTop+a.clientHeight/2-4.5}px`:this.ink.nativeElement.style.left=`${a.offsetLeft+a.clientWidth/2}px`,this.activeLink=(n||r).nzHref,e!==this.activeLink&&this.nzChange.emit(this.activeLink)}handleActive(n){this.clearActive(),this.setActive(n),this.visible=!0,this.setVisible(),this.nzScroll.emit(n)}setVisible(){this.ink&&(this.visible?this.renderer.addClass(this.ink.nativeElement,jt):this.renderer.removeClass(this.ink.nativeElement,jt))}handleScrollTo(n){let e=this.doc.querySelector(n.nzHref);if(!e)return;this.animating=!0;let r=this.scrollSrv.getScroll(this.getContainer()),a=Rt(e,this.getContainer()),l=r+a;l-=this.nzTargetOffset!==void 0?this.nzTargetOffset:this.nzOffsetTop||0,this.scrollSrv.scrollTo(this.getContainer(),l,{callback:()=>{this.animating=!1,this.handleActive(n)}}),this.nzClick.emit(n.nzHref)}ngOnChanges(n){let{nzOffsetTop:e,nzContainer:r,nzCurrentAnchor:a}=n;if(e&&(this.wrapperStyle={"max-height":`calc(100vh - ${this.nzOffsetTop}px)`}),r){let l=this.nzContainer;this.container=typeof l=="string"?this.doc.querySelector(l):l,this.registerScrollEvent()}a&&this.setActive()}};i.\u0275fac=function(e){return new(e||i)(z(It),z(Ot),z(Tt),z(tt),z(mt),z(U))},i.\u0275cmp=v({type:i,selectors:[["nz-anchor"]],viewQuery:function(e,r){if(e&1&&K(Wt,5),e&2){let a;L(a=b())&&(r.ink=a.first)}},inputs:{nzAffix:[2,"nzAffix","nzAffix",J],nzShowInkInFixed:[2,"nzShowInkInFixed","nzShowInkInFixed",J],nzBounds:[2,"nzBounds","nzBounds",vt],nzOffsetTop:[2,"nzOffsetTop","nzOffsetTop",Y],nzTargetOffset:[2,"nzTargetOffset","nzTargetOffset",Y],nzContainer:"nzContainer",nzCurrentAnchor:"nzCurrentAnchor",nzDirection:"nzDirection"},outputs:{nzClick:"nzClick",nzChange:"nzChange",nzScroll:"nzScroll"},exportAs:["nzAnchor"],standalone:!0,features:[ut,pt,I],ngContentSelectors:Vt,decls:4,vars:1,consts:[["content",""],["ink",""],[3,"nzOffsetTop","nzTarget"],[3,"ngTemplateOutlet"],[1,"ant-anchor-wrapper",3,"ngClass","ngStyle"],[1,"ant-anchor",3,"ngClass"],[1,"ant-anchor-ink"],[1,"ant-anchor-ink-ball"]],template:function(e,r){e&1&&(A(),u(0,Jt,2,3,"nz-affix",2)(1,Yt,1,1,null,3)(2,te,6,7,"ng-template",null,0,H)),e&2&&g(r.nzAffix?0:1)},dependencies:[yt,kt,X,P,V],encapsulation:2,changeDetection:0});let t=i;return T([E()],t.prototype,"nzShowInkInFixed",void 0),T([E()],t.prototype,"nzBounds",void 0),T([E()],t.prototype,"nzOffsetTop",void 0),T([E()],t.prototype,"nzTargetOffset",void 0),t})(),Pt=(()=>{let i=class i{set nzTitle(n){n instanceof ht?(this.titleStr=null,this.titleTpl=n):this.titleStr=n}constructor(n,e,r,a){this.elementRef=n,this.anchorComp=e,this.platform=r,this.renderer=a,this.nzHref="#",this.titleStr="",this.nzDirection="vertical"}ngOnInit(){this.anchorComp.registerLink(this),this.nzDirection=this.anchorComp.nzDirection}getLinkTitleElement(){return this.linkTitle.nativeElement}setActive(){this.renderer.addClass(this.elementRef.nativeElement,"ant-anchor-link-active")}unsetActive(){this.renderer.removeClass(this.elementRef.nativeElement,"ant-anchor-link-active")}goToClick(n){n.preventDefault(),n.stopPropagation(),this.platform.isBrowser&&this.anchorComp.handleScrollTo(this)}ngOnDestroy(){this.anchorComp.unregisterLink(this)}};i.\u0275fac=function(e){return new(e||i)(z(ft),z(Q),z(tt),z(U))},i.\u0275cmp=v({type:i,selectors:[["nz-link"]],contentQueries:function(e,r,a){if(e&1&&zt(a,ee,5),e&2){let l;L(l=b())&&(r.nzTemplate=l.first)}},viewQuery:function(e,r){if(e&1&&K(ne,5),e&2){let a;L(a=b())&&(r.linkTitle=a.first)}},hostAttrs:[1,"ant-anchor-link"],inputs:{nzHref:"nzHref",nzTarget:"nzTarget",nzTitle:"nzTitle"},exportAs:["nzLink"],standalone:!0,features:[I],ngContentSelectors:Vt,decls:5,vars:5,consts:[["linkTitle",""],[1,"ant-anchor-link-title",3,"click","href","title","target"],[3,"ngTemplateOutlet"]],template:function(e,r){if(e&1){let a=S();A(),d(0,"a",1,0),x("click",function(C){return y(a),k(r.goToClick(C))}),u(2,ie,2,1,"span")(3,re,1,1,null,2),m(),u(4,se,1,0)}e&2&&(p("href",r.nzHref,dt)("title",r.titleStr)("target",r.nzTarget),c(2),g(r.titleStr?2:3),c(2),g(r.nzDirection==="vertical"?4:-1))},dependencies:[X],encapsulation:2,changeDetection:0});let t=i;return t})(),Qt=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=ct({type:i}),i.\u0275inj=at({imports:[Q]});let t=i;return t})();var Ut=(()=>{let i=class i{constructor(){this.router=h(F),this.msg=h($),this.i18n=h(R)}clickToc(n){let e=`#${n}`,r=document.querySelector(e);r&&r.scrollIntoView()}_click(n){let e=n.target;if(!e||!e.dataset||!["a","i"].includes(e.tagName.toLowerCase()))return;let r=e.dataset.anchor;if(r&&r.length>0){j(`${location.href.split("#")[0]}#${r}`).then(()=>{this.msg.success(this.i18n.fanyi("app.content.link.copied"))});return}let a=e.dataset.url;if(e.dataset.toc||a&&a.startsWith("#")){this.clickToc(e.dataset.toc||a.substring(1).replace(/ /g,"-")),n.preventDefault(),n.stopPropagation();return}if(a&&a.startsWith("/")&&!a.startsWith("//")){this.router.navigateByUrl(a);return}}};i.\u0275fac=function(e){return new(e||i)},i.\u0275dir=lt({type:i,selectors:[["","routeTransfer",""]],hostBindings:function(e,r){e&1&&x("click",function(l){return r._click(l)})},standalone:!0});let t=i;return t})();var me=["*"];function fe(t,i){if(t&1&&(s(0,`
              `),_(1,"nz-link",3),s(2,`
            `)),t&2){let o=i.$implicit;c(),p("nzHref","#"+o.id)("nzTitle",o.title)}}function de(t,i){if(t&1&&(s(0,`
            `),W(1,fe,3,2,null,null,q)),t&2){let o=f().$implicit;c(),Z(o.children)}}function he(t,i){if(t&1&&(s(0,`
        `),d(1,"nz-link",3),s(2,`
          `),u(3,de,3,0),m(),s(4,`
      `)),t&2){let o=i.$implicit;c(),p("nzHref","#"+o.id)("nzTitle",o.title),c(2),g(o.children&&o.children.length>0?3:-1)}}function ue(t,i){if(t&1){let o=S();s(0,`
  `),d(1,"nz-affix",1),s(2,`
    `),d(3,"nz-anchor",2),x("nzClick",function(e){y(o);let r=f();return k(r.goLink(e))}),s(4,`
      `),W(5,he,5,3,null,null,q),m(),s(7,`
  `),m(),s(8,`
`)}if(t&2){let o=f();c(5),Z(o.data.con.toc)}}function ge(t,i){if(t&1&&(s(0),d(1,"a",8),s(2," Help us!"),m(),s(3,`
      `)),t&2){let o=f(3);Ct(`
        `,o.data.con.meta.i18n==="need-update"?"This article need re-translated, hope that your can PR to translated it.":"This article has not been translated, hope that your can PR to translated it.",`
        `)}}function ze(t,i){if(t&1&&(s(0,`
    `),d(1,"nz-alert",7),s(2,`
      `),u(3,ge,4,1,"ng-template",null,0,H),s(5,`
    `),m(),s(6,`
  `)),t&2){let o=w(4);c(),p("nzType","warning")("nzCloseable","true")("nzMessage",o)}}function Ce(t,i){if(t&1){let o=S();s(0,`
        `),d(1,"div",9),s(2,`
          `),d(3,"span",10),_t(4,"i18n"),x("click",function(){y(o);let e=f(2);return k(e.copyModule())}),s(5,`
            IMPORT MODULE
          `),m(),s(6,`
        `),m(),s(7,`
      `)}if(t&2){let o=f(2);c(3),p("nzTooltipTitle",xt(4,1,"app.content.copy-import-module")+o.data.con.module)}}function _e(t,i){if(t&1&&(s(0,`
    `),_(1,"div",11),s(2,`
  `)),t&2){let o=f(2);c(),p("innerHTML",o.data.con.content,O)}}function xe(t,i){if(t&1&&(s(0,`
    `),_(1,"h2",12),s(2,`
    `),D(3),s(4,`
  `)),t&2){let o=f(2);c(),gt("id",o.demoStr),p("innerHTML",o.demoContent,O)}}function Te(t,i){if(t&1&&(s(0,`
    `),_(1,"div",13),s(2,`
  `)),t&2){let o=f(2);c(),p("innerHTML",o.data.con.api,O)}}function ve(t,i){if(t&1&&(s(0,`
  `),u(1,ze,7,3),d(2,"div",4),s(3,`
    `),d(4,"h1",5),s(5,`
      `),d(6,"strong"),s(7),m(),s(8,`
      `),u(9,Ce,8,3),_(10,"edit-button",6),s(11,`
    `),m(),s(12,`
  `),m(),s(13,`
  `),u(14,_e,3,1)(15,xe,5,2)(16,Te,3,1)),t&2){let o=f();c(),g(!o.meta.item.i18n||o.data.con.meta.i18n==="need-update"?1:-1),c(6),M(o.meta.item.subtitle||o.meta.item.title),c(2),g(o.data.con.module?9:-1),c(),p("item",o.item),c(4),g(o.data.con.content?14:-1),c(),g(o.data.demo?15:-1),c(),g(o.data.con.api?16:-1)}}var Tn=(()=>{let i=class i{constructor(){this.meta=h(Lt),this.i18n=h(R),this.msg=h($),this.router=h(F),this.sanitizer=h(St),this.doc=h(B),this.data={},this.isBrowser=h(wt).isBrowser,this.i18NChange$=this.i18n.change.pipe(Dt(),ot(()=>!!this.item)).subscribe(()=>{this.init()})}genData(){let n=At(this.item),e={demo:n.demo,urls:n.urls,con:n.content[this.i18n.currentLang]||n.content[this.i18n.defaultLang]};e.demo&&this.codes&&this.codes.length&&(this.genDemoTitle(),e.con.toc=this.codes.map(r=>({h:3,id:r.id,title:this.i18n.get(r.meta.title)})).concat({id:"API",title:"API",h:2})),e.con.content&&(e.con.content=this.sanitizer.bypassSecurityTrustHtml(e.con.content)),e.con.api&&(e.con.api=this.sanitizer.bypassSecurityTrustHtml(e.con.api)),e.con.meta.module&&(e.con.module=e.con.meta.module),this.data=e,setTimeout(()=>{let r=this.router.parseUrl(this.router.url).fragment||"";if(r){let a=this.doc.querySelector(`#${r}`);a&&a.scrollIntoView()}},200)}goLink(n){window&&(window.location.hash=n)}genDemoTitle(){this.demoStr=this.i18n.fanyi("app.component.examples"),this.demoContent=this.sanitizer.bypassSecurityTrustHtml(`<a class="lake-link"><i data-anchor="${this.demoStr}"></i></a>${this.demoStr}`)}init(){this.genData(),this.genDemoTitle(),this.isBrowser&&setTimeout(()=>{let n=this.doc.querySelectorAll('[class*="language-"], [class*="lang-"]');for(let e=0,r;r=n[e++];)hljs.highlightBlock(r)},250)}copyModule(){j(this.data.con.module).then(()=>{this.msg.success(this.i18n.fanyi("app.demo.copied"))})}ngOnInit(){this.init()}ngOnDestroy(){this.i18NChange$.unsubscribe()}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=v({type:i,selectors:[["app-docs"]],inputs:{codes:"codes",item:"item"},standalone:!0,features:[I],ngContentSelectors:me,decls:2,vars:2,consts:[["message",""],["nzOffsetTop","16",1,"toc-affix"],["nzShowInkInFixed","","nzAffix","false",3,"nzClick"],[3,"nzHref","nzTitle"],[1,"markdown"],[1,"flex-center"],[3,"item"],["nzBanner","",1,"my-md",3,"nzType","nzCloseable","nzMessage"],["href","//github.com/ng-alain/ng-alain/issues/74","target","_blank"],[1,"ml-sm"],["nz-tooltip","",1,"copy-import-module",3,"click","nzTooltipTitle"],["routeTransfer","",1,"markdown",3,"innerHTML"],["routeTransfer","",2,"margin","32px 0 24px 0",3,"id","innerHTML"],["routeTransfer","",1,"markdown","api-container",3,"innerHTML"]],template:function(e,r){e&1&&(A(),u(0,ue,9,0)(1,ve,17,7)),e&2&&(g(r.isBrowser&&(r.data.con.toc!=null&&r.data.con.toc.length)?0:-1),c(),g(r.meta.item?1:-1))},dependencies:[Et,Ut,P,V,Qt,Q,Pt,Ft,Bt,Mt,bt,Ht],encapsulation:2});let t=i;return t})();export{Tn as a};
