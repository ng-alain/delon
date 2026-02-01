import{a as an}from"./chunk-XJGKKTIO.js";import{a as En,b as We}from"./chunk-55WDGQBA.js";import{f as $e,g as je}from"./chunk-UPMOSUYU.js";import{a as sn,m as wn,n as Ln}from"./chunk-2544XSSS.js";import{a as it}from"./chunk-6PBQZBWO.js";import"./chunk-RO7U22W6.js";import"./chunk-TIGRHKKK.js";import{g as Ue,h as Mn}from"./chunk-TY7EEC65.js";import{a as yn,b as hn}from"./chunk-S37YFZBA.js";import{a as xn,b as vn,c as Cn}from"./chunk-YIW3LUNL.js";import{a as fn,c as gn,d as Re}from"./chunk-YU3HWF2I.js";import"./chunk-22CD57KE.js";import{a as Nn}from"./chunk-HEFVWILE.js";import"./chunk-DL4MSDFO.js";import{F as Pe,H as pn,I as Dn,J as bn,X as Tn,ba as Sn,c as rn,da as ae,f as Oe,l as Ve,u as Be,w as dn,x as cn}from"./chunk-7OOQUBON.js";import{$b as $,Ac as Dt,Ag as nn,Bc as y,Bg as z,Cb as H,Cc as bt,Cg as Ee,Db as D,Ed as Ot,Fb as _,Fc as Tt,Hb as d,Hc as St,Hd as fe,Hh as Ae,I as G,Ia as me,Ib as X,Ic as wt,Jb as ee,Jc as w,Jg as ze,Jh as on,Ka as ue,Kc as Lt,Kd as Vt,Kg as ke,Kh as He,Lb as _t,Ma as ct,Mb as ft,Mg as oe,Na as r,Nb as gt,Nd as R,Ng as Fe,Ob as xt,Of as Rt,Pa as pt,Pb as vt,Pe as Pt,Pf as Ut,Qb as De,Qc as ne,Qd as Bt,Rb as T,Sb as Ct,Sc as Mt,Sd as Me,Tb as S,Tc as we,Ua as mt,Ub as yt,Ud as N,Vb as et,Wb as t,Wd as Ne,Xa as h,Xb as U,Xc as Nt,Xf as Wt,Ya as he,Yb as O,Yg as Ie,Zb as ht,_b as W,a as Ke,ac as j,ag as $t,bb as C,bc as be,bg as jt,ca as st,cb as ut,cc as Te,cg as Qt,da as ye,dc as _e,dg as qt,di as ln,fc as tt,g as Xe,ga as u,hb as Y,hg as Jt,ig as Yt,jg as Zt,kc as Se,kd as Et,la as f,lc as E,lg as Gt,ma as g,mb as x,mg as Kt,nd as Le,ob as v,od as zt,og as Xt,pb as F,pc as V,pd as nt,pg as en,qa as K,qc as B,qd as kt,rb as I,rd as Ft,ri as mn,sb as A,sd as It,ta as dt,tb as p,td as At,ti as un,ub as l,uc as P,va as J,vb as s,wb as m,wd as ie,wi as _n,x as lt,xa as pe,xd as Ht,xg as tn,yc as te}from"./chunk-P5SMEL6S.js";var In=["st"],Qe=class i{st;users=Array(10).fill({}).map((n,e)=>({id:e+1,name:`name ${e+1}`,age:Math.ceil(Math.random()*10)+20}));columns=[{title:"\u5E8F\u53F7",type:"no"},{title:"\u7F16\u53F7",index:"id"},{title:"\u59D3\u540D",index:"name"},{title:"\u5E74\u9F84",index:"age"},{title:"\u64CD\u4F5C\u533A",buttons:[{text:"\u66F4\u591A1"},{text:"\u66F4\u591A",children:[]}]}];change(n){console.log(n)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["app-demo"]],viewQuery:function(e,o){if(e&1&&_t(In,5),e&2){let a;ft(a=gt())&&(o.st=a.first)}},decls:4,vars:2,consts:[["st",""],[3,"change","data","columns"]],template:function(e,o){if(e&1){let a=D();t(0," "),l(1,"st",1,0),_("change",function(M){return f(a),g(o.change(M))}),s(),t(3," ")}e&2&&(r(),p("data",o.users)("columns",o.columns))},dependencies:[Ln,wn],encapsulation:2})};var An=["host"],Hn=["*"];function On(i,n){i&1&&(t(0,`
      `),ee(1),t(2,`
    `))}var Q=class i{host=bt("host");hidden=y("none");direction=y("right");static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["layout-default-header-item"]],viewQuery:function(e,o){e&1&&vt(o.host,An,5),e&2&&De()},inputs:{hidden:[1,"hidden"],direction:[1,"direction"]},ngContentSelectors:Hn,decls:4,vars:0,consts:[["host",""]],template:function(e,o){e&1&&(X(),t(0,`
    `),ut(1,On,3,0,"ng-template",null,0,P),t(3,`
  `))},encapsulation:2})};var zn={logoExpanded:"./assets/logo-full.svg",logoCollapsed:"./assets/logo.svg",logoLink:"/",showHeaderCollapse:!0,showSiderCollapse:!1,hideAside:!1,hideHeader:!1},q=class i{settings=u(N);bm=u(an);options=J(zn);collapsedIcon=J("");constructor(){let n="only screen and (max-width: 767.99px)";this.bm.observe(n).pipe(R()).subscribe(o=>this.checkMedia(o.matches)),this.checkMedia(this.bm.isMatched(n));let e=this.settings;e.notify.pipe(G(o=>o.type==="layout"),lt(()=>{let o=e.layout.collapsed;return e.layout.direction==="rtl"?o?"fold":"unfold":o?"unfold":"fold"}),R()).subscribe(o=>this.collapsedIcon.set(`menu-${o}`))}checkMedia(n){this.settings.setLayout("collapsed",n)}setOptions(n){this.options.set(Ke(Ke({},zn),n))}toggleCollapsed(n){this.settings.setLayout("collapsed",n??!this.settings.layout.collapsed)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=st({token:i,factory:i.\u0275fac,providedIn:"root"})};var kn=i=>({$implicit:i});function Bn(i,n){i&1&&H(0)}function Pn(i,n){if(i&1&&(t(0,`
        `),l(1,"li"),t(2,`
          `),C(3,Bn,1,0,"ng-container",5),t(4,`
        `),s(),t(5,`
      `)),i&2){let e=n.$implicit;r(),S("hidden-mobile",e.hidden()==="mobile")("hidden-pc",e.hidden()==="pc"),r(2),p("ngTemplateOutlet",e.host())}}function Rn(i,n){if(i&1&&(t(0,`
      `),I(1,Pn,6,5,null,null,F)),i&2){let e=n.$implicit;r(),A(e)}}function Un(i,n){i&1&&H(0)}function Wn(i,n){if(i&1&&(t(0,`
        `),C(1,Un,1,0,"ng-container",5),t(2,`
      `)),i&2){d();let e=_e(4);r(),p("ngTemplateOutlet",e.logo)}}function $n(i,n){if(i&1&&(t(0,`
        `),l(1,"a",6),t(2,`
          `),m(3,"img",7),t(4,`
          `),m(5,"img",8),t(6,`
        `),s(),t(7,`
      `)),i&2){let e=d(),o=_e(4);r(),p("routerLink",o.logoLink),r(2),Y("src",o.logoExpanded,ue)("alt",e.app.name),r(2),Y("src",o.logoCollapsed,ue)("alt",e.app.name)}}function jn(i,n){if(i&1){let e=D();t(0,`
          `),l(1,"li"),t(2,`
            `),l(3,"div",9),_("click",function(){f(e);let a=d();return g(a.srv.toggleCollapsed())}),t(4,`
              `),m(5,"nz-icon",10),t(6,`
            `),s(),t(7,`
          `),s(),t(8,`
        `)}if(i&2){let e=d();r(5),p("nzType",e.srv.collapsedIcon())}}function Qn(i,n){}function qn(i,n){i&1&&H(0)}function Jn(i,n){if(i&1&&(t(0,`
        `),l(1,"div",11),t(2,`
          `),C(3,qn,1,0,"ng-container",5),t(4,`
        `),s(),t(5,`
      `)),i&2){let e=d();r(3),p("ngTemplateOutlet",e.middle()[0].host())}}function Yn(i,n){}var ge=class i{app=u(N).app;srv=u(q);items=y.required();left=te(()=>this.items().filter(n=>n.direction()==="left"));middle=te(()=>this.items().filter(n=>n.direction()==="middle"));right=te(()=>this.items().filter(n=>n.direction()==="right"));opt=this.srv.options;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["layout-default-header"]],hostAttrs:[1,"alain-default__header"],inputs:{items:[1,"items"]},decls:26,vars:14,consts:[["render",""],[1,"alain-default__header-logo"],[1,"alain-default__nav-wrap"],[1,"alain-default__nav"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],[1,"alain-default__header-logo-link",3,"routerLink"],[1,"alain-default__header-logo-expanded"],[1,"alain-default__header-logo-collapsed"],[1,"alain-default__nav-item","alain-default__nav-item--collapse",3,"click"],[3,"nzType"],[1,"alain-default__nav","alain-default__nav-middle"]],template:function(e,o){if(e&1&&(t(0,`
    `),C(1,Rn,3,0,"ng-template",null,0,P),t(3,`
    `),be(4),t(5,`
    `),l(6,"div",1),t(7,`
      `),x(8,Wn,3,1)(9,$n,8,5),s(),t(10,`
    `),l(11,"div",2),t(12,`
      `),l(13,"ul",3),t(14,`
        `),x(15,jn,9,1),C(16,Qn,0,0,"ng-template",4),t(17,`
      `),s(),t(18,`
      `),x(19,Jn,6,1),l(20,"ul",3),t(21,`
        `),C(22,Yn,0,0,"ng-template",4),t(23,`
      `),s(),t(24,`
    `),s(),t(25,`
  `)),e&2){let a=T(2);r(4);let c=Te(o.opt());r(2),Ct("width",c.logoFixWidth,"px"),r(2),v(c.logo?8:9),r(7),v(!c.hideAside&&c.showHeaderCollapse?15:-1),r(),p("ngTemplateOutlet",a)("ngTemplateOutletContext",E(10,kn,o.left())),r(3),v(o.middle().length>0?19:-1),r(3),p("ngTemplateOutlet",a)("ngTemplateOutletContext",E(12,kn,o.right()))}},dependencies:[ne,Ht,z],encapsulation:2,changeDetection:0})};var xe=i=>({$implicit:i});function Zn(i,n){if(i&1&&(t(0,`
            `),m(1,"nz-icon",3),t(2,`
          `)),i&2){let e=d(2).$implicit;r(),p("nzType",e.value)("nzTheme",e.theme)("nzSpin",e.spin)("nzTwotoneColor",e.twoToneColor)("nzIconfont",e.iconfont)("nzRotate",e.rotate)}}function Gn(i,n){if(i&1&&(t(0,`
            `),m(1,"nz-icon",4),t(2,`
          `)),i&2){let e=d(2).$implicit;r(),p("nzIconfont",e.iconfont)}}function Kn(i,n){if(i&1&&(t(0,`
            `),m(1,"img",5),t(2,`
          `)),i&2){let e=d(2).$implicit;r(),p("src",e.value,ue)}}function Xn(i,n){if(i&1&&(t(0,`
            `),m(1,"span",6),t(2,`
          `)),i&2){let e=d(2).$implicit;r(),p("innerHTML",e.value,me)}}function ei(i,n){if(i&1&&(t(0,`
            `),m(1,"i"),t(2,`
          `)),i&2){let e=d(2).$implicit;r(),et(tt("sidebar-nav__item-icon ",e.value))}}function ti(i,n){if(i&1&&(t(0,`
        `),x(1,Zn,3,6)(2,Gn,3,1)(3,Kn,3,1)(4,Xn,3,1)(5,ei,3,3),t(6,`
      `)),i&2){let e,o=d().$implicit;r(),v((e=o.type)==="icon"?1:e==="iconfont"?2:e==="img"?3:e==="svg"?4:5)}}function ni(i,n){if(i&1&&(t(0,`
      `),x(1,ti,7,1)),i&2){let e=n.$implicit;r(),v(e?1:-1)}}function ii(i,n){i&1&&(t(0,`
            `),m(1,"li",7),t(2,`
          `))}function oi(i,n){}function ai(i,n){if(i&1&&(t(0,`
                      `),l(1,"span",11),t(2,`
                        `),C(3,oi,0,0,"ng-template",12),t(4,`
                      `),s(),t(5,`
                    `)),i&2){let e=d(5).$implicit;d(2);let o=T(2);r(),p("nzTooltipTitle",e.text),r(2),p("ngTemplateOutlet",o)("ngTemplateOutletContext",E(3,xe,e.icon))}}function ri(i,n){}function li(i,n){if(i&1&&(t(0,`
                      `),C(1,ri,0,0,"ng-template",12),t(2,`
                    `)),i&2){let e=d(5).$implicit;d(2);let o=T(2);r(),p("ngTemplateOutlet",o)("ngTemplateOutletContext",E(2,xe,e.icon))}}function si(i,n){if(i&1&&(t(0,`
                    `),x(1,ai,6,5)(2,li,3,4)),i&2){let e=d(6);r(),v(e.collapsed?1:2)}}function di(i,n){if(i&1){let e=D();t(0,`
                `),l(1,"a",9),_("click",function(){f(e);let a=d(3).$implicit,c=d(2);return g(c.to(a))})("mouseenter",function(){f(e);let a=d(5);return g(a.closeSubMenu())}),t(2,`
                  `),x(3,si,3,1),m(4,"span",10),t(5,`
                `),s(),t(6,`
              `)}if(i&2){let e=d(3).$implicit;r(),S("sidebar-nav__item-disabled",e.disabled),Y("data-id",e._id),r(2),v(e._needIcon?3:-1),r(),p("innerHTML",e._text,me),Y("title",e.text)}}function ci(i,n){}function pi(i,n){if(i&1){let e=D();t(0,`
                `),l(1,"a",9),_("click",function(){f(e);let a=d(3).$implicit,c=d(2);return g(c.toggleOpen(a))})("mouseenter",function(a){f(e);let c=d(3).$implicit,M=d(2);return g(M.showSubMenu(a,c))}),t(2,`
                  `),C(3,ci,0,0,"ng-template",12),t(4,`
                  `),m(5,"span",10),t(6,`
                  `),m(7,"i",13),t(8,`
                `),s(),t(9,`
              `)}if(i&2){let e=d(3).$implicit;d(2);let o=T(2);r(3),p("ngTemplateOutlet",o)("ngTemplateOutletContext",E(4,xe,e.icon)),r(2),p("innerHTML",e._text,me),Y("title",e.text)}}function mi(i,n){if(i&1&&(t(0,`
                `),m(1,"nz-badge",14),t(2,`
              `)),i&2){let e=d(3).$implicit;r(),p("nzCount",e.badge)("nzDot",e.badgeDot)("nzOverflowCount",e.badgeOverflowCount?e.badgeOverflowCount:9)}}function ui(i,n){}function _i(i,n){if(i&1&&(t(0,`
                `),l(1,"ul"),t(2,`
                  `),C(3,ui,0,0,"ng-template",12),t(4,`
                `),s(),t(5,`
              `)),i&2){let e=d(3).$implicit;d(2);let o=T(5);r(),et(tt("sidebar-nav sidebar-nav__sub sidebar-nav__depth",e._depth)),r(2),p("ngTemplateOutlet",o)("ngTemplateOutletContext",E(5,xe,e.children))}}function fi(i,n){if(i&1&&(t(0,`
            `),l(1,"li",8),t(2,`
              `),t(3,`
              `),x(4,di,7,6),x(5,pi,10,6),x(6,mi,3,3),x(7,_i,6,7),s(),t(8,`
          `)),i&2){let e=d(2).$implicit;r(),S("sidebar-nav__selected",e._selected)("sidebar-nav__open",e.open),r(3),v(e.children.length===0?4:-1),r(),v(e.children.length>0?5:-1),r(),v(e.badge?6:-1),r(),v(e.children.length>0?7:-1)}}function gi(i,n){if(i&1&&(t(0,`
          `),x(1,ii,3,0)(2,fi,9,8)),i&2){let e=d().$implicit;r(),v(e.render_type==="divider"?1:2)}}function xi(i,n){if(i&1&&(t(0,`
        `),x(1,gi,3,1)),i&2){let e=n.$implicit;r(),v(e._hidden!==!0?1:-1)}}function vi(i,n){if(i&1&&(t(0,`
      `),I(1,xi,2,1,null,null,F)),i&2){let e=n.$implicit;r(),A(e)}}function Ci(i,n){if(i&1&&(t(0,`
          `),l(1,"li",15),t(2,`
            `),m(3,"span",16),t(4,`
          `),s(),t(5,`
        `)),i&2){let e=d().$implicit;r(3),p("innerHTML",e._text,me)}}function yi(i,n){}function hi(i,n){if(i&1&&(t(0,`
        `),x(1,Ci,6,1),C(2,yi,0,0,"ng-template",12),t(3,`
      `)),i&2){let e=n.$implicit;d();let o=T(5);r(),v(e.group?1:-1),r(),p("ngTemplateOutlet",o)("ngTemplateOutletContext",E(3,xe,e.children))}}var ot="sidebar-nav__floating-show",at="sidebar-nav__floating",re=class i{doc=u(K);win=u(sn);router=u(ie);render=u(mt);menuSrv=u(Me);settings=u(N);sanitizer=u(Et);bodyEl=this.doc.querySelector("body");floatingEl;dir=u(Ne).valueSignal;list=J([]);disabledAcl=y(!1,{transform:w});autoCloseUnderPad=y(!0,{transform:w});recursivePath=y(!0,{transform:w});hideEmptyChildren=y(!0,{transform:w});openStrictly=y();maxLevelIcon=y(3,{transform:Lt});select=Dt();get collapsed(){return this.settings.layout.collapsed}constructor(){pe(()=>{let n=this.openStrictly();n!=null&&(this.menuSrv.openStrictly=n)}),this.menuSrv.change.pipe(R()).subscribe(n=>{this.menuSrv.visit(n,(e,o,a)=>{e._text=this.sanitizer.bypassSecurityTrustHtml(e.text),e._needIcon=a<=this.maxLevelIcon()&&!!e.icon,e._aclResult||(this.disabledAcl()?e.disabled=!0:e._hidden=!0);let c=e.icon;c&&c.type==="svg"&&typeof c.value=="string"&&(c.value=this.sanitizer.bypassSecurityTrustHtml(c.value))}),this.hideEmptyChildren()&&this.fixHide(n),this.list.set(n.filter(e=>e._hidden!==!0))}),this.router.events.pipe(R()).subscribe(n=>{n instanceof Le&&(this.openByUrl(n.urlAfterRedirects),this.underPad())}),this.settings.notify.pipe(R(),G(n=>n.type==="layout"&&n.name==="collapsed")).subscribe(()=>this.clearFloating()),pt(()=>{this.underPad(),this.openByUrl(this.router.url),this.genFloating()})}getLinkNode(n){return n=n.nodeName==="A"?n:n.parentNode,n.nodeName!=="A"?null:n}floatingClickHandle(n){n.stopPropagation();let e=this.getLinkNode(n.target);if(e==null)return!1;let o=+e.dataset.id;if(isNaN(o))return!1;let a;return this.menuSrv.visit(this.list(),c=>{!a&&c._id===o&&(a=c)}),this.to(a),this.hideAll(),n.preventDefault(),!1}clearFloating(){this.floatingEl&&(this.floatingEl.removeEventListener("click",this.floatingClickHandle.bind(this)),this.floatingEl.parentNode?.removeChild(this.floatingEl))}genFloating(){this.clearFloating(),this.floatingEl=this.render.createElement("div"),this.floatingEl.classList.add(`${at}-container`),this.floatingEl.addEventListener("click",this.floatingClickHandle.bind(this),!1),this.bodyEl.appendChild(this.floatingEl)}genSubNode(n,e){let o=`_sidebar-nav-${e._id}`,c=(e.badge?n.nextElementSibling.nextElementSibling:n.nextElementSibling).cloneNode(!0);return c.id=o,c.classList.add(at),c.addEventListener("mouseleave",()=>{c.classList.remove(ot)},!1),this.floatingEl.appendChild(c),c}hideAll(){this.floatingEl.querySelectorAll(`.${at}`).forEach(e=>e.classList.remove(ot))}calPos(n,e){let o=n.getBoundingClientRect(),a=Math.max(this.doc.documentElement.scrollTop,this.bodyEl.scrollTop),c=Math.max(this.doc.documentElement.clientHeight,this.bodyEl.clientHeight),M=5,Z=-M;c<o.top+e.clientHeight&&(Z=o.top+e.clientHeight-c+M),e.style.top=`${o.top+a-Z}px`,this.dir()==="rtl"?e.style.right=`${o.width+M}px`:e.style.left=`${o.right+M}px`}showSubMenu(n,e){if(this.collapsed!==!0)return;n.preventDefault();let o=n.target;this.genFloating();let a=this.genSubNode(o,e);this.hideAll(),a.classList.add(ot),this.calPos(o,a)}to(n){if(this.select.emit(n),!n.disabled){if(n.externalLink){n.target==="_blank"?this.win.open(n.externalLink):this.win.location.href=n.externalLink;return}this.router.navigateByUrl(n.link)}}toggleOpen(n){this.menuSrv.toggleOpen(n)}_click(){this.isPad&&this.collapsed&&(this.openAside(!1),this.hideAll())}closeSubMenu(){this.collapsed&&this.hideAll()}openByUrl(n){let{menuSrv:e,recursivePath:o}=this;this.menuSrv.open(e.find({url:n,recursive:o()}))}fixHide(n){let e=o=>{for(let a of o)a.children&&a.children.length>0&&(e(a.children),a._hidden||(a._hidden=a.children.every(c=>c._hidden)))};e(n)}get isPad(){return this.doc.defaultView.innerWidth<768}underPad(){this.autoCloseUnderPad()&&this.isPad&&!this.collapsed&&setTimeout(()=>this.openAside(!0))}openAside(n){this.settings.setLayout("collapsed",n)}ngOnDestroy(){this.clearFloating()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["layout-default-nav"]],hostAttrs:[1,"d-block"],hostBindings:function(e,o){e&1&&_("click",function(){return o._click()})("click",function(){return o.closeSubMenu()},ct)},inputs:{disabledAcl:[1,"disabledAcl"],autoCloseUnderPad:[1,"autoCloseUnderPad"],recursivePath:[1,"recursivePath"],hideEmptyChildren:[1,"hideEmptyChildren"],openStrictly:[1,"openStrictly"],maxLevelIcon:[1,"maxLevelIcon"]},outputs:{select:"select"},decls:12,vars:0,consts:[["icon",""],["tree",""],[1,"sidebar-nav"],[1,"sidebar-nav__item-icon",3,"nzType","nzTheme","nzSpin","nzTwotoneColor","nzIconfont","nzRotate"],[1,"sidebar-nav__item-icon",3,"nzIconfont"],[1,"sidebar-nav__item-icon","sidebar-nav__item-img",3,"src"],[1,"sidebar-nav__item-icon","sidebar-nav__item-svg",3,"innerHTML"],[1,"sidebar-nav__divider"],[1,"sidebar-nav__item"],[1,"sidebar-nav__item-link",3,"click","mouseenter"],[1,"sidebar-nav__item-text",3,"innerHTML"],["nz-tooltip","","nzTooltipPlacement","right",3,"nzTooltipTitle"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"sidebar-nav__sub-arrow"],["nzStandalone","",3,"nzCount","nzDot","nzOverflowCount"],[1,"sidebar-nav__item","sidebar-nav__group-title"],[3,"innerHTML"]],template:function(e,o){e&1&&(t(0,`
    `),C(1,ni,2,1,"ng-template",null,0,P),t(3,`
    `),C(4,vi,3,0,"ng-template",null,1,P),t(6,`
    `),l(7,"ul",2),t(8,`
      `),I(9,hi,4,5,null,null,F),s(),t(11,`
  `)),e&2&&(r(9),A(o.list()))},dependencies:[ne,z,Pe,dn],encapsulation:2,changeDetection:0})};var Di=["*"];function bi(i,n){i&1&&(t(0,`
      `),m(1,"div",2),t(2,`
    `))}function Ti(i,n){if(i&1&&(t(0,`
      `),m(1,"layout-default-header",3),t(2,`
    `)),i&2){let e=d();r(),p("items",e.headerItems())}}function Si(i,n){i&1&&H(0)}function wi(i,n){i&1&&H(0)}function Li(i,n){i&1&&(t(0,`
              `),m(1,"layout-default-nav"),t(2,`
            `))}function Mi(i,n){i&1&&H(0)}function Ni(i,n){if(i&1&&(t(0,`
                `),C(1,Mi,1,0,"ng-container",1),t(2,`
              `)),i&2){let e=d(3);r(),p("ngTemplateOutlet",e.asideBottom())}}function Ei(i,n){if(i&1){let e=D();t(0,`
                `),l(1,"div",8),_("click",function(){f(e);let a=d(3);return g(a.srv.toggleCollapsed())}),t(2,`
                  `),m(3,"nz-icon",9),t(4,`
                `),s(),t(5,`
              `)}if(i&2){let e=d(3);r(3),p("nzType",e.srv.collapsedIcon())}}function zi(i,n){if(i&1&&(t(0,`
            `),l(1,"div",7),t(2,`
              `),x(3,Ni,3,1)(4,Ei,6,1),s(),t(5,`
          `)),i&2){let e=d(2);r(3),v(e.asideBottom()?3:4)}}function ki(i,n){if(i&1&&(t(0,`
      `),l(1,"div",4),t(2,`
        `),l(3,"div",5),t(4,`
          `),l(5,"div",6),t(6,`
            `),C(7,Si,1,0,"ng-container",1),t(8,`
            `),C(9,wi,1,0,"ng-container",1),t(10,`
            `),x(11,Li,3,0),s(),t(12,`
          `),x(13,zi,6,1),s(),t(14,`
      `),s(),t(15,`
    `)),i&2){let e=d(),o=_e(1);r(7),p("ngTemplateOutlet",e.asideUser()),r(2),p("ngTemplateOutlet",e.nav()),r(2),v(e.nav()?-1:11),r(2),v(o.showSiderCollapse?13:-1)}}function Fi(i,n){i&1&&H(0)}var le=class i{router=u(ie);msgSrv=u(ae);settings=u(N);doc=u(K);srv=u(q);headerItems=Tt(Q,{descendants:!1});opt=this.srv.options;layout=this.settings.layoutSignal;options=y();asideUser=y();asideBottom=y();nav=y();content=y();customError=y();fetchingStrictly=y(!1,{transform:w});fetching=y(!1,{transform:w});isFetching=J(!1);showFetching=te(()=>this.fetchingStrictly()?this.fetching():this.isFetching());constructor(){this.router.events.pipe(R(),G(()=>!this.fetchingStrictly())).subscribe(n=>this.processEv(n)),pe(()=>{let n=this.options();this.srv.setOptions(n)}),pe(()=>{this.doc.body.classList[this.layout().colorWeak?"add":"remove"]("color-weak")})}processEv(n){if(!this.isFetching()&&n instanceof kt&&this.isFetching.set(!0),n instanceof nt||n instanceof zt){this.isFetching.set(!1);let e=this.customError(),o=e===null?null:e??`Could not load ${n.url} route`;o&&n instanceof nt&&this.msgSrv.error(o,{nzDuration:1e3*3});return}(n instanceof Le||n instanceof Ft)&&this.isFetching()&&setTimeout(()=>{this.isFetching.set(!1)},100)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["layout-default"]],contentQueries:function(e,o,a){e&1&&xt(a,o.headerItems,Q,4),e&2&&De()},hostAttrs:[1,"alain-default"],hostVars:8,hostBindings:function(e,o){e&2&&S("alain-default__fixed",o.layout().fixed)("alain-default__collapsed",o.layout().collapsed)("alain-default__hide-aside",o.opt().hideAside)("alain-default__hide-header",o.opt().hideHeader)},inputs:{options:[1,"options"],asideUser:[1,"asideUser"],asideBottom:[1,"asideBottom"],nav:[1,"nav"],content:[1,"content"],customError:[1,"customError"],fetchingStrictly:[1,"fetchingStrictly"],fetching:[1,"fetching"]},exportAs:["layoutDefault"],ngContentSelectors:Di,decls:13,vars:5,consts:[[1,"alain-default__content"],[4,"ngTemplateOutlet"],[1,"alain-default__progress-bar"],[3,"items"],[1,"alain-default__aside"],[1,"alain-default__aside-wrap"],[1,"alain-default__aside-inner"],[1,"alain-default__aside-link"],[1,"alain-default__aside-link-collapsed",3,"click"],[3,"nzType"]],template:function(e,o){if(e&1&&(X(),t(0,`
    `),be(1),t(2,`
    `),x(3,bi,3,0),x(4,Ti,3,1),x(5,ki,16,4),l(6,"section",0),t(7,`
      `),C(8,Fi,1,0,"ng-container",1),t(9,`
      `),ee(10),t(11,`
    `),s(),t(12,`
  `)),e&2){r();let a=Te(o.opt());r(2),v(o.showFetching()?3:-1),r(),v(a.hideHeader?-1:4),r(),v(a.hideAside?-1:5),r(3),p("ngTemplateOutlet",o.content())}},dependencies:[ne,ge,re,z],encapsulation:2})};var Ai=["*"],ve=class i{selected=y(!1,{transform:w});disabled=y(!1,{transform:w});static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["layout-default-top-menu-item"]],hostVars:8,hostBindings:function(e,o){e&2&&S("alain-default__nav-item",!0)("alain-default__top-menu-item",!0)("alain-default__top-menu-item-selected",o.selected())("alain-default__top-menu-item-disabled",o.disabled())},inputs:{selected:[1,"selected"],disabled:[1,"disabled"]},ngContentSelectors:Ai,decls:1,vars:0,template:function(e,o){e&1&&(X(),ee(0))},encapsulation:2,changeDetection:0})};var qe=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=he({type:i});static \u0275inj=ye({imports:[Nt,Ot,pn,Ee,We,Re,cn,le,re]})};var Je=class i{srv=u(q);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["dev-home"]],decls:34,vars:4,consts:[[3,"autoBreadcrumb"],[1,"mb-md"],["nz-button","",3,"click"]],template:function(e,o){e&1&&(t(0,`
    `),m(1,"page-header",0),t(2,`
    home
    `),l(3,"div",1),t(4),V(5,"json"),s(),t(6,`
    `),l(7,"div",1),t(8,`
      `),l(9,"button",2),_("click",function(){return o.srv.toggleCollapsed()}),t(10,"\u5207\u6362\u6298\u53E0"),s(),t(11,`
      `),l(12,"button",2),_("click",function(){return o.srv.setOptions({hideHeader:!0})}),t(13,"\u9690\u85CF\u9876\u90E8"),s(),t(14,`
      `),l(15,"button",2),_("click",function(){return o.srv.setOptions({hideAside:!0})}),t(16,"\u9690\u85CF\u4FA7\u8FB9\u680F"),s(),t(17,`
      `),l(18,"button",2),_("click",function(){return o.srv.setOptions({hideHeader:!0,hideAside:!0})}),t(19,"\u9690\u85CF\u9876\u90E8\u4E0E\u4FA7\u8FB9\u680F"),s(),t(20,`
      `),l(21,"button",2),_("click",function(){return o.srv.setOptions({showHeaderCollapse:!0})}),t(22,"\u663E\u793A\u9876\u90E8\u6298\u53E0\u5F00\u5173"),s(),t(23,`
      `),l(24,"button",2),_("click",function(){return o.srv.setOptions({showSiderCollapse:!0})}),t(25,"\u663E\u793A\u4FA7\u8FB9\u680F\u5E95\u90E8\u6298\u53E0\u5F00\u5173"),s(),t(26,`
      `),l(27,"button",2),_("click",function(){return o.srv.setOptions({showHeaderCollapse:!0,showSiderCollapse:!0})}),t(28,`
        \u663E\u793A\u9876\u90E8\u4E0E\u4FA7\u8FB9\u680F\u5E95\u90E8\u6298\u53E0\u5F00\u5173
      `),s(),t(29,`
      `),l(30,"button",2),_("click",function(){return o.srv.setOptions({})}),t(31,"\u6062\u590D\u9ED8\u8BA4"),s(),t(32,`
    `),s(),t(33,`
  `)),e&2&&(r(),p("autoBreadcrumb",!1),r(3),O(" options: ",B(5,2,o.srv.options)," "))},dependencies:[je,$e,Fe,oe,ze,ke,we],encapsulation:2})};var rt=()=>({standalone:!0});function Wi(i,n){if(i&1){let e=D();t(0,`
        `),l(1,"input",1),j("ngModelChange",function(a){f(e);let c=d();return $(c.i.value,a)||(c.i.value=a),g(a)}),s(),t(2,`
      `)}if(i&2){let e=d();r(),W("ngModel",e.i.value),p("ngModelOptions",Se(2,rt))}}function $i(i,n){if(i&1){let e=D();t(0,`
        `),l(1,"input",2),j("ngModelChange",function(a){f(e);let c=d();return $(c.i.value,a)||(c.i.value=a),g(a)}),s(),t(2,`
      `)}if(i&2){let e=d();r(),W("ngModel",e.i.value),p("ngModelOptions",Se(2,rt))}}function ji(i,n){if(i&1){let e=D();t(0,`
        `),l(1,"nz-input-number",3),j("ngModelChange",function(a){f(e);let c=d();return $(c.pxVal,a)||(c.pxVal=a),g(a)}),_("ngModelChange",function(a){f(e);let c=d();return g(c.pxChange(a))}),s(),t(2,`
      `)}if(i&2){let e=d();r(),W("ngModel",e.pxVal),p("nzFormatter",e.format)}}function Qi(i,n){if(i&1){let e=D();t(0,`
        `),l(1,"nz-switch",4),j("ngModelChange",function(a){f(e);let c=d();return $(c.i.value,a)||(c.i.value=a),g(a)}),s(),t(2,`
      `)}if(i&2){let e=d();r(),W("ngModel",e.i.value),p("ngModelOptions",Se(2,rt))}}function qi(i,n){}function Ji(i,n){i&1&&(t(0,`
        `),C(1,qi,0,0,"ng-template",5),t(2,`
      `))}var se=class i{i={};set data(n){this.i=n,n.type==="px"&&(this.pxVal=+n.value.replace("px",""))}pxVal=0;pxChange(n){this.i.value=`${n}px`}format=n=>`${n} px`;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["setting-drawer-item"]],hostAttrs:[1,"setting-drawer__body-item"],inputs:{data:"data"},decls:13,vars:3,consts:[[1,"pl-sm","text-grey"],["nz-input","","type","color",2,"width","88px",3,"ngModelChange","ngModel","ngModelOptions"],["nz-input","",2,"width","88px",3,"ngModelChange","ngModel","ngModelOptions"],[3,"ngModelChange","ngModel","nzFormatter"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzDrawerContent",""]],template:function(e,o){if(e&1&&(t(0,`
    `),l(1,"span"),t(2),l(3,"span",0),t(4),s(),t(5,`
    `),s(),t(6,`
    `),x(7,Wi,3,3)(8,$i,3,3)(9,ji,3,2)(10,Qi,3,3)(11,Ji,3,0),t(12,`
  `)),e&2){let a;r(2),O(`
      `,o.i.label,`
      `),r(2),U(o.i.tip),r(3),v((a=o.i.type)==="color"?7:a==="input"?8:a==="px"?9:a==="switch"?10:11)}},dependencies:[Be,rn,Oe,Ve,Tn,Sn,Ue,He,Ae],encapsulation:2})};var Ye="alain-default-vars",Fn=[{key:"dust",color:"#F5222D"},{key:"volcano",color:"#FA541C"},{key:"sunset",color:"#FAAD14"},{key:"cyan",color:"#13C2C2"},{key:"green",color:"#52C41A"},{key:"daybreak",color:"#1890ff"},{key:"geekblue",color:"#2F54EB"},{key:"purple",color:"#722ED1"},{key:"black",color:"#001529"}],Ce={"primary-color":{label:"\u4E3B\u989C\u8272",type:"color",default:"#1890ff"},"alain-default-header-hg":{label:"\u9AD8",type:"px",default:"64px",max:300,min:24},"alain-default-header-bg":{label:"\u80CC\u666F\u8272",type:"color",default:"@primary-color",tip:"\u9ED8\u8BA4\u540C\u4E3B\u8272\u7CFB"},"alain-default-header-padding":{label:"\u9876\u90E8\u5DE6\u53F3\u5185\u8FB9\u8DDD",type:"px",default:"16px"},"alain-default-aside-wd":{label:"\u5BBD\u5EA6",type:"px",default:"200px"},"alain-default-aside-bg":{label:"\u80CC\u666F",type:"color",default:"#ffffff"},"alain-default-aside-collapsed-wd":{label:"\u6536\u7F29\u5BBD\u5EA6",type:"px",default:"64px"},"alain-default-aside-nav-padding-top-bottom":{label:"\u9879\u4E0A\u4E0B\u5185\u8FB9\u8DDD",type:"px",default:"8px",step:8},"alain-default-aside-nav-fs":{label:"\u83DC\u5355\u5B57\u53F7",type:"px",default:"14px",min:14,max:30},"alain-default-aside-collapsed-nav-fs":{label:"\u6536\u7F29\u83DC\u5355\u5B57\u53F7",type:"px",default:"24px",min:24,max:32},"alain-default-aside-nav-item-height":{label:"\u83DC\u5355\u9879\u9AD8\u5EA6",type:"px",default:"38px",min:24,max:64},"alain-default-aside-nav-text-color":{label:"\u83DC\u5355\u6587\u672C\u989C\u8272",type:"color",default:"rgba(0, 0, 0, 0.65)",rgba:!0},"alain-default-aside-nav-text-hover-color":{label:"\u83DC\u5355\u6587\u672C\u60AC\u505C\u989C\u8272",type:"color",default:"@primary-color",tip:"\u9ED8\u8BA4\u540C\u4E3B\u8272\u7CFB"},"alain-default-aside-nav-group-text-color":{label:"\u83DC\u5355\u5206\u7EC4\u6587\u672C\u989C\u8272",type:"color",default:"rgba(0, 0, 0, 0.43)",rgba:!0},"alain-default-aside-nav-selected-text-color":{label:"\u83DC\u5355\u6FC0\u6D3B\u65F6\u6587\u672C\u989C\u8272",type:"color",default:"@primary-color",tip:"\u9ED8\u8BA4\u540C\u4E3B\u8272\u7CFB"},"alain-default-aside-nav-selected-bg":{label:"\u83DC\u5355\u6FC0\u6D3B\u65F6\u80CC\u666F\u989C\u8272",type:"color",default:"#fcfcfc"},"alain-default-content-bg":{label:"\u80CC\u666F\u8272",type:"color",default:"#f5f7fa"},"alain-default-content-heading-bg":{label:"\u6807\u9898\u80CC\u666F\u8272",type:"color",default:"#fafbfc"},"alain-default-content-heading-border":{label:"\u6807\u9898\u5E95\u90E8\u8FB9\u6846\u8272",type:"color",default:"#efe3e5"},"alain-default-content-padding":{label:"\u5185\u8FB9\u8DDD",type:"px",default:"24px",min:0,max:128,step:8},"form-state-visual-feedback-enabled":{label:"\u5F00\u542F\u8868\u5355\u5143\u7D20\u7684\u89C6\u89C9\u53CD\u9988",type:"switch",default:!0},"preserve-white-spaces-enabled":{label:"\u5F00\u542F preserveWhitespaces",type:"switch",default:!0},"nz-table-img-radius":{label:"\u8868\u683C\u4E2D\uFF1A\u56FE\u7247\u5706\u89D2",type:"px",default:"4px",min:0,max:128},"nz-table-img-margin-right":{label:"\u8868\u683C\u4E2D\uFF1A\u56FE\u7247\u53F3\u5916\u8FB9\u8DDD",type:"px",default:"4px",min:0,max:128},"nz-table-img-max-width":{label:"\u8868\u683C\u4E2D\uFF1A\u56FE\u7247\u6700\u5927\u5BBD\u5EA6",type:"px",default:"32px",min:8,max:128},"nz-table-img-max-height":{label:"\u8868\u683C\u4E2D\uFF1A\u56FE\u7247\u6700\u5927\u9AD8\u5EA6",type:"px",default:"32px",min:8,max:128}};var Yi=i=>({"background-color":i});function Zi(i,n){i&1&&(t(0,`
            `),m(1,"nz-icon",17),t(2,`
          `))}function Gi(i,n){if(i&1){let e=D();t(0,`
        `),l(1,"span",16),_("click",function(){let a=f(e).$implicit,c=d(2);return g(c.changeColor(a.color))}),t(2,`
          `),x(3,Zi,3,0),s(),t(4,`
      `)}if(i&2){let e=n.$implicit,o=d(2);r(),yt(E(4,Yi,e.color)),p("nzTooltipTitle",e.key),r(2),v(o.color===e.color?3:-1)}}function Ki(i,n){if(i&1){let e=D();l(0,"div",2),t(1,`
    `),l(2,"div",3),t(3,`
      `),l(4,"h3",4),t(5,"\u4E3B\u9898\u8272"),s(),t(6,`
      `),I(7,Gi,5,6,null,null,F),s(),t(9,`
    `),m(10,"nz-divider"),t(11,`
    `),l(12,"div",5),t(13,`
      `),l(14,"h3",4),t(15,"\u8BBE\u7F6E"),s(),t(16,`
      `),l(17,"nz-tabs"),t(18,`
        `),l(19,"nz-tab",6),t(20,`
          `),l(21,"div",5),t(22,`
            `),m(23,"setting-drawer-item",7),t(24,`
            `),m(25,"setting-drawer-item",7),t(26,`
            `),m(27,"setting-drawer-item",7),t(28,`
          `),s(),t(29,`
        `),s(),t(30,`
        `),l(31,"nz-tab",8),t(32,`
          `),m(33,"setting-drawer-item",7),t(34,`
          `),m(35,"setting-drawer-item",7),t(36,`
          `),m(37,"setting-drawer-item",7),t(38,`
          `),m(39,"setting-drawer-item",7),t(40,`
        `),s(),t(41,`
        `),l(42,"nz-tab",9),t(43,`
          `),m(44,"setting-drawer-item",7),t(45,`
          `),m(46,"setting-drawer-item",7),t(47,`
          `),m(48,"setting-drawer-item",7),t(49,`
          `),m(50,"setting-drawer-item",7),t(51,`
        `),s(),t(52,`
        `),l(53,"nz-tab",10),t(54,`
          `),m(55,"setting-drawer-item",7),t(56,`
          `),m(57,"setting-drawer-item",7),t(58,`
          `),m(59,"setting-drawer-item",7),t(60,`
          `),m(61,"setting-drawer-item",7),t(62,`
          `),m(63,"setting-drawer-item",7),t(64,`
          `),m(65,"setting-drawer-item",7),t(66,`
        `),s(),t(67,`
      `),s(),t(68,`
    `),s(),t(69,`
    `),m(70,"nz-divider"),t(71,`
    `),l(72,"div",5),t(73,`
      `),l(74,"div",11),t(75,`
        \u56FA\u5B9A\u5934\u548C\u4FA7\u8FB9\u680F
        `),l(76,"nz-switch",12),j("ngModelChange",function(a){f(e);let c=d();return $(c.layout.fixed,a)||(c.layout.fixed=a),g(a)}),_("ngModelChange",function(){f(e);let a=d();return g(a.setLayout("fixed",a.layout.fixed))}),s(),t(77,`
      `),s(),t(78,`
      `),l(79,"div",11),t(80,`
        \u8272\u5F31\u6A21\u5F0F
        `),l(81,"nz-switch",12),j("ngModelChange",function(a){f(e);let c=d();return $(c.layout.colorWeak,a)||(c.layout.colorWeak=a),g(a)}),_("ngModelChange",function(){f(e);let a=d();return g(a.setLayout("colorWeak",a.layout.colorWeak))}),s(),t(82,`
      `),s(),t(83,`
    `),s(),t(84,`
    `),m(85,"nz-divider"),t(86,`
    `),l(87,"button",13),_("click",function(){f(e);let a=d();return g(a.apply())}),t(88,"\u9884\u89C8"),s(),t(89,`
    `),l(90,"button",14),_("click",function(){f(e);let a=d();return g(a.reset())}),t(91,"\u91CD\u7F6E"),s(),t(92,`
    `),l(93,"button",14),_("click",function(){f(e);let a=d();return g(a.copyVar())}),t(94,"\u62F7\u8D1D"),s(),t(95,`
    `),m(96,"nz-alert",15),t(97,`
  `),s()}if(i&2){let e=d();r(7),A(e.colors),r(16),p("data",e.data["alain-default-header-hg"]),r(2),p("data",e.data["alain-default-header-bg"]),r(2),p("data",e.data["alain-default-header-padding"]),r(6),p("data",e.data["alain-default-aside-wd"]),r(2),p("data",e.data["alain-default-aside-bg"]),r(2),p("data",e.data["alain-default-aside-collapsed-wd"]),r(2),p("data",e.data["alain-default-aside-nav-padding-top-bottom"]),r(5),p("data",e.data["alain-default-content-bg"]),r(2),p("data",e.data["alain-default-content-heading-bg"]),r(2),p("data",e.data["alain-default-content-heading-border"]),r(2),p("data",e.data["alain-default-content-padding"]),r(5),p("data",e.data["form-state-visual-feedback-enabled"]),r(2),p("data",e.data["preserve-white-spaces-enabled"]),r(2),p("data",e.data["nz-table-img-radius"]),r(2),p("data",e.data["nz-table-img-margin-right"]),r(2),p("data",e.data["nz-table-img-max-width"]),r(2),p("data",e.data["nz-table-img-max-height"]),r(11),W("ngModel",e.layout.fixed),r(5),W("ngModel",e.layout.colorWeak)}}function Xi(i,n){if(i&1){let e=D();t(0,`
  `),l(1,"div",18),_("click",function(){f(e);let a=d();return g(a.toggle())}),t(2,`
    `),m(3,"nz-icon",19),t(4,`
  `),s(),t(5,`
`)}if(i&2){let e=d();r(),p("nzTooltipTitle",e.isDev?e.devTips:null)}}var de=class de{cdr=u(wt);msg=u(ae);settingSrv=u(N);lazy=u(Vt);ngZone=u(dt);doc=u(K);autoApplyColor=!0;compilingText="Compiling...";devTips="When the color can't be switched, you need to run it once: npm run color-less";lessJs="https://cdn.jsdelivr.net/npm/less";loadedLess=!1;dir=u(Ne).valueSignal;isDev=St();collapse=!1;get layout(){return this.settingSrv.layout}data={};color;colors=Fn;constructor(){this.color=this.cachedData["@primary-color"]??this.DEFAULT_PRIMARY,this.resetData(this.cachedData,!1)}get cachedData(){return this.settingSrv.layout[Ye]??{}}get DEFAULT_PRIMARY(){return Ce["primary-color"].default}ngOnInit(){this.autoApplyColor&&this.color!==this.DEFAULT_PRIMARY&&(this.changeColor(this.color),this.runLess())}async loadLess(){return this.loadedLess?Promise.resolve():this.lazy.loadStyle("./assets/color.less",{rel:"stylesheet/less"}).then(()=>{let n=this.doc.createElement("script");n.innerHTML=`
          window.less = {
            async: true,
            env: 'production',
            javascriptEnabled: true
          };
        `,this.doc.body.appendChild(n)}).then(()=>this.lazy.loadScript(this.lessJs)).then(()=>{this.loadedLess=!0})}genVars(){let{data:n,color:e,validKeys:o}=this,a={"@primary-color":e};return o.filter(c=>c!=="primary-color").forEach(c=>a[`@${c}`]=n[c].value),this.setLayout(Ye,a),a}runLess(){let{ngZone:n,msg:e,cdr:o}=this,a=e.loading(this.compilingText,{nzDuration:0}).messageId;setTimeout(()=>{this.loadLess().then(()=>{window.less.modifyVars(this.genVars()).then(()=>{e.success("\u6210\u529F"),e.remove(a),n.run(()=>o.detectChanges())})})},200)}toggle(){this.collapse=!this.collapse}changeColor(n){this.color=n,Object.keys(Ce).filter(e=>Ce[e].default==="@primary-color").forEach(e=>delete this.cachedData[`@${e}`]),this.resetData(this.cachedData,!1)}setLayout(n,e){this.settingSrv.setLayout(n,e)}resetData(n,e=!0){n=n??{};let o=fe(Ce);Object.keys(o).forEach(a=>{let c=n[`@${a}`]??o[a].default??"";o[a].value=c==="@primary-color"?this.color:c}),this.data=o,e&&(this.cdr.detectChanges(),this.runLess())}get validKeys(){return Object.keys(this.data).filter(n=>this.data[n].value!==this.data[n].default)}apply(){this.runLess()}reset(){this.color=this.DEFAULT_PRIMARY,this.settingSrv.setLayout(Ye,{}),this.resetData({})}copyVar(){let n=this.genVars(),e=Object.keys(n).map(o=>`${o}: ${n[o]};`).join(`
`);ln(e),this.msg.success("Copy success")}static \u0275fac=function(e){return new(e||de)};static \u0275cmp=h({type:de,selectors:[["setting-drawer"]],hostVars:4,hostBindings:function(e,o){e&2&&S("setting-drawer",!0)("setting-drawer-rtl",o.dir()==="rtl")},inputs:{autoApplyColor:[2,"autoApplyColor","autoApplyColor",w],compilingText:"compilingText",devTips:"devTips",lessJs:"lessJs"},decls:6,vars:4,consts:[[3,"nzOnClose","nzVisible","nzPlacement","nzWidth"],["class","setting-drawer__content",4,"nzDrawerContent"],[1,"setting-drawer__content"],[1,"setting-drawer__body","setting-drawer__theme"],[1,"setting-drawer__title"],[1,"setting-drawer__body"],["nzTitle","\u9876\u90E8"],[3,"data"],["nzTitle","\u4FA7\u8FB9\u680F"],["nzTitle","\u5185\u5BB9"],["nzTitle","\u5176\u5B83"],[1,"setting-drawer__body-item"],["nzSize","small",3,"ngModelChange","ngModel"],["type","button","nz-button","","nzType","primary",3,"click"],["type","button","nz-button","",3,"click"],["nzType","warning","nzMessage","\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u53C2\u6570\u914D\u7F6E\u6587\u4EF6 src/styles/theme.less",1,"mt-md"],["nz-tooltip","",1,"setting-drawer__theme-tag",3,"click","nzTooltipTitle"],["nzType","check"],["nz-tooltip","",1,"setting-drawer__handle",3,"click","nzTooltipTitle"],["nzType","setting",1,"setting-drawer__handle-icon"]],template:function(e,o){e&1&&(l(0,"nz-drawer",0),_("nzOnClose",function(){return o.toggle()}),t(1,`
  `),C(2,Ki,98,19,"div",1),t(3,`
`),s(),t(4,`
`),x(5,Xi,6,1)),e&2&&(p("nzVisible",o.collapse)("nzPlacement",o.dir()==="rtl"?"left":"right")("nzWidth",500),r(5),v(o.collapse?-1:5))},dependencies:[Be,Oe,Ve,He,on,Ae,Pe,z,bn,Dn,Cn,vn,xn,se,Mn,Ue,oe,Nn],encapsulation:2,changeDetection:0})};Xe([it()],de.prototype,"loadLess",1),Xe([it()],de.prototype,"runLess",1);var ce=de;var to=[se,ce],Ze=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=he({type:i});static \u0275inj=ye({imports:[to]})};function no(i,n){if(i&1){let e=D();t(0,`
          `),l(1,"layout-default-top-menu-item",12),_("click",function(){let a=f(e).$implicit,c=d();return g(c.changeMenu(a.key))}),t(2,`
            `),m(3,"nz-icon",6),t(4),s(),t(5,`
        `)}if(i&2){let e=n.$implicit;r(),p("selected",e.selected)("disabled",e.disabled),r(3),O(" ",e.label,`
          `)}}function io(i,n){if(i&1&&(t(0,`
        `),l(1,"div",13),t(2,`
          `),m(3,"nz-avatar",14),t(4,`
          `),l(5,"div",15),t(6,`
            `),l(7,"strong"),t(8),s(),t(9,`
            `),l(10,"p",16),t(11),s(),t(12,`
          `),s(),t(13,`
        `),s(),t(14,`
        `),l(15,"nz-dropdown-menu",null,2),t(17,`
          `),l(18,"ul",17),t(19,`
            `),l(20,"li",18),t(21),s(),t(22,`
            `),l(23,"li",19),t(24),s(),t(25,`
          `),s(),t(26,`
        `),s(),t(27,`
      `)),i&2){let e=T(16),o=d();r(),p("nzDropdownMenu",e),r(2),p("nzSrc",o.user.avatar),r(5),U(o.user.name),r(3),U(o.user.email),r(10),U("menu.account.center"),r(3),U("menu.account.settings")}}var oo=[Zt,Gt,Xt,en,jt,$t,Ut,Yt,Kt,tn,Jt,Wt,qt,Qt,Rt],Ge=class i{menuSrv=u(Me);router=u(ie);i18n=u(Bt);iconSrv=u(nn);rtl=u(Pt);settings=u(N);msgSrv=u(ae);options={logoExpanded:"./assets/logo-full.svg",logoCollapsed:"./assets/logo.svg",hideHeader:!1,showHeaderCollapse:!0,showSiderCollapse:!0};lang="zh-CN";get user(){return this.settings.user}topMenus=[{key:"",label:"Default",selected:!0},{key:"bus",label:"Bus",selected:!1},{key:"disabled",label:"Disabbled",disabled:!0}];menus=[{text:"test",group:!0,children:[{text:"Dashboard-DISABLED",link:"/dev/home",icon:"anticon anticon-dashboard",i18n:"app.header.menu.home",badge:5},{text:"\u6D4B\u8BD5view1-id",link:"/dev/view/1",icon:"anticon anticon-appstore"},{text:"\u6D4B\u8BD5view2-id",link:"/dev/view/2",icon:"anticon anticon-appstore"},{render_type:"divider"},{text:"lazy\u6D4B\u8BD51",link:"/dev/lazy/p1",icon:"anticon anticon-appstore"},{text:"lazy\u6D4B\u8BD52",link:"/dev/lazy/p2",icon:"anticon anticon-appstore"},{text:"lazy\u6D4B\u8BD5view1-id",link:"/dev/lazy/1/view",icon:"anticon anticon-appstore"},{text:"lazy\u6D4B\u8BD5view2-id",link:"/dev/lazy/2/view",icon:"anticon anticon-appstore"},{text:"Level1",link:"#",icon:"anticon anticon-appstore",children:[{text:"Level2",link:"#",children:[{text:"Level3A",link:"/dev/l1"},{render_type:"divider"},{text:"Level3B-DISABLED",link:"/dev/l1",disabled:!0}]},{render_type:"divider"},{text:"Level2-DISABLED",link:"/dev/l2",disabled:!0}]},{text:"ABC",icon:"anticon anticon-appstore",children:[{text:"Reuse Tab1",link:"/dev/l1",i18n:"app.header.menu.docs"},{text:"Reuse Tab2",link:"/dev/l2"},{text:"Reuse Tab3",link:"/dev/l3"},{text:"Reuse Tab4",link:"/dev/l4"},{text:"Reuse Tab5",link:"/dev/l5"},{text:"Reuse Tab6",link:"/dev/l6"},{text:"Reuse Tab7",link:"/dev/l7"},{text:"Ellipsis",link:"/dev/l8"}]},{text:"LIST",icon:"anticon anticon-appstore",children:[{text:"list",link:"/dev/list"},{text:"list/item",link:"/dev/list/item"}]}]}];customContextMenu=[{id:"custom1",title:"\u81EA\u5B9A\u4E491",fn:(n,e)=>{console.log("\u81EA\u5B9A\u4E491",n,e)}},{id:"custom2",title:"\u81EA\u5B9A\u4E492",disabled:()=>!0,fn:(n,e)=>{console.log("\u81EA\u5B9A\u4E492",n,e)}}];constructor(){this.iconSrv.addIcon(...oo)}changeMenu(n){let e={text:"test",group:!0,children:[{text:`TYPE - ${n}`,link:"/dev/view/1",icon:"anticon anticon-appstore"}]};this.menuSrv.add(n===""?fe(this.menus):[e]);for(let o of this.topMenus)o.selected=o.key===n;this.loadFirstValidMenu()}toggleCollapsedSideabar(){this.settings.setLayout("collapsed",!this.settings.layout.collapsed)}toggleLang(){this.lang=this.lang==="zh-CN"?"en-US":"zh-CN",this.i18n.use(this.lang)}ngOnInit(){this.menuSrv.add(fe(this.menus))}loadFirstValidMenu(){let n;this.menuSrv.visit(this.menuSrv.menus,e=>{n==null&&e.hide!==!0&&e.link!=null&&e.link.length>0&&(n=e)}),n!=null&&this.router.navigateByUrl(n.link)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["dev-layout"]],hostVars:2,hostBindings:function(e,o){e&2&&S("alain-default",!0)},decls:40,vars:7,consts:[["asideUserTpl",""],["reuseTab",""],["userMenu","nzDropdownMenu"],[3,"options","asideUser"],["direction","left"],["href","//github.com/ng-alain/ng-alain","target","_blank",1,"alain-default__nav-item"],["nzType","github"],["direction","middle"],["direction","right"],[1,"alain-default__nav-item",3,"click"],[3,"mode","customContextMenu"],[3,"activate","attach"],[3,"click","selected","disabled"],["nz-dropdown","","nzTrigger","click",1,"alain-default__aside-user",3,"nzDropdownMenu"],[1,"alain-default__aside-user-avatar",3,"nzSrc"],[1,"alain-default__aside-user-info"],[1,"mb0"],["nz-menu",""],["nz-menu-item","","routerLink","/pro/account/center"],["nz-menu-item","","routerLink","/pro/account/settings"]],template:function(e,o){if(e&1){let a=D();t(0,`
    `),l(1,"layout-default",3),t(2,`
      `),l(3,"layout-default-header-item",4),t(4,`
        `),l(5,"a",5),t(6,`
          `),m(7,"nz-icon",6),t(8,`
        `),s(),t(9,`
      `),s(),t(10,`
      `),l(11,"layout-default-header-item",7),t(12,`
        `),I(13,no,6,3,null,null,F),s(),t(15,`
      `),l(16,"layout-default-header-item",8),t(17,`
        `),l(18,"a",9),_("click",function(){return f(a),g(o.rtl.toggle())}),t(19),V(20,"uppercase"),s(),t(21,`
      `),s(),t(22,`
      `),l(23,"layout-default-header-item",8),t(24,`
        `),l(25,"a",5),t(26," githbu "),s(),t(27,`
      `),s(),t(28,`
      `),C(29,io,28,6,"ng-template",null,0,P),t(31,`
      `),m(32,"reuse-tab",10,1),t(34,`
      `),l(35,"router-outlet",11),_("activate",function(M){f(a);let Z=T(33);return g(Z.activate(M))})("attach",function(M){f(a);let Z=T(33);return g(Z.activate(M))}),s(),t(36,`
    `),s(),t(37,`
    `),m(38,"setting-drawer"),t(39,`
  `)}if(e&2){let a=T(30);r(),p("options",o.options)("asideUser",a),r(12),A(o.topMenus),r(6),U(B(20,5,o.rtl.nextDir)),r(13),p("mode",2)("customContextMenu",o.customContextMenu)}},dependencies:[qe,le,Q,ve,Ee,z,Re,un,mn,fn,gn,We,En,_n,hn,At,Ze,ce,Mt],encapsulation:2})};var b=class i{route=u(It);srv=u(yn);first=Ie(new Date,"yyyy-MM-dd HH:mm:ss");now=Ie(new Date,"yyyy-MM-dd HH:mm:ss");id=0;ngOnInit(){this.route.params.subscribe(n=>this.id=+n.id)}_onReuseInit(){this.now=Ie(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("by _onReuseInit",this.id)}replace(n){this.srv.replace(n)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["dev-page"]],decls:19,vars:12,consts:[["nz-button","","nzType","primary",3,"click"]],template:function(e,o){e&1&&(t(0,`
    `),m(1,"page-header"),t(2,`
    `),l(3,"p"),t(4),V(5,"json"),V(6,"json"),s(),t(7,`
    `),l(8,"p"),t(9),V(10,"json"),s(),t(11),V(12,"json"),l(13,"div"),t(14,`
      `),l(15,"button",0),_("click",function(){return o.replace("/dev/view/2")}),t(16,"Replace /dev/view/2"),s(),t(17,`
    `),s(),t(18,`
  `)),e&2&&(r(4),ht("first: ",B(5,4,o.first),"\uFF0Cnow: ",B(6,6,o.now)),r(5),O("id: ",B(10,8,o.id)),r(2),O(`
    page: `,B(12,10,o.route.url),`
    `))},dependencies:[je,$e,Fe,oe,ze,ke,we],encapsulation:2})};var Nl=[{path:"demo",component:Qe},{path:"",component:Ge,children:[{path:"home",component:Je},{path:"l1",component:b},{path:"l2",component:b},{path:"l3",component:b},{path:"l4",component:b},{path:"l5",component:b},{path:"l6",component:b},{path:"l7",component:b},{path:"l8",component:b},{path:"login",component:b},{path:"view/1",component:b,data:{reuseClosable:!1}},{path:"view/:id",component:b},{path:"lazy",loadChildren:()=>import("./chunk-XJE5HV5C.js").then(i=>i.routes)},{path:"list",loadChildren:()=>import("./chunk-OL7XTONL.js").then(i=>i.routes)}]}];export{Nl as routes};
