import{a as En,b as We}from"./chunk-S72N6AQB.js";import{d as $e,e as je}from"./chunk-7ZF7HH6U.js";import{a as sn,m as wn,n as Ln}from"./chunk-KJ5EHGC4.js";import{a as it}from"./chunk-RQW3ZT7S.js";import"./chunk-RJ57FSQ4.js";import"./chunk-MZLXJWFR.js";import{g as Ue,h as Mn}from"./chunk-DIGRX5V5.js";import{a as Cn,b as hn}from"./chunk-KGBKS2EZ.js";import{a as yn,b as xn,c as vn}from"./chunk-Z24LY5R2.js";import{a as fn,c as gn,d as Re}from"./chunk-FL4TOGL2.js";import"./chunk-SDASDUUO.js";import{a as Nn}from"./chunk-TBIYOZ6C.js";import"./chunk-ZZ7ISDYC.js";import{$ as Sn,C as Pe,E as pn,F as bn,G as Dn,V as Tn,ba as ae,c as rn,f as Oe,l as Ve,u as Be,w as dn,x as mn}from"./chunk-VPD4R4PE.js";import{$b as j,$f as jt,$g as Ie,Ac as bt,Ag as Ee,Bb as H,Bc as C,Cb as b,Cc as Dt,Eb as _,Ed as Ot,Fc as Tt,Gb as m,H as G,Ha as ce,Hb as X,Hc as St,Hd as fe,Ib as ee,Ic as wt,Ja as ue,Jc as w,Kb as _t,Kc as Lt,Kd as Vt,La as mt,Lb as ft,Lh as Ae,Ma as r,Mb as gt,Mf as Rt,Mg as ze,Nb as yt,Nd as R,Nf as Ut,Ng as ke,Nh as an,Oa as pt,Ob as xt,Oh as He,Pb as be,Pg as oe,Qb as T,Qc as ne,Qd as Bt,Qg as Fe,Rb as vt,Sb as S,Sc as Mt,Sd as Me,Ta as ct,Tb as Ct,Tc as we,Ub as et,Ue as Pt,Vb as t,Vf as Wt,Wa as h,Wb as U,Wd as M,Xa as he,Xb as O,Xc as Nt,Yb as ht,Yd as Ne,Zb as W,_b as $,_f as $t,a as Ke,ab as v,ac as De,ag as Qt,ba as st,bb as ut,bc as Te,bg as qt,ca as Ce,cc as _e,ec as tt,ei as ln,fa as u,fg as Jt,g as Xe,gb as Y,gg as Yt,hg as Zt,jc as Se,jg as Gt,ka as f,kc as N,kd as Et,kg as Kt,la as g,lb as y,mg as Xt,nb as x,nd as Le,ng as en,ob as F,oc as V,od as zt,pa as K,pc as B,pd as nt,qb as I,qd as kt,rb as A,rd as Ft,rh as on,sa as dt,sb as p,sd as It,si as cn,tb as l,tc as P,td as At,ub as s,ui as un,vb as c,vg as tn,wa as J,wd as ie,x as lt,xd as Ht,xi as _n,ya as pe,yc as te,yg as nn,zg as z}from"./chunk-UENMMWRA.js";var In=["st"],Qe=class i{st;users=Array(10).fill({}).map((n,e)=>({id:e+1,name:`name ${e+1}`,age:Math.ceil(Math.random()*10)+20}));columns=[{title:"\u5E8F\u53F7",type:"no"},{title:"\u7F16\u53F7",index:"id"},{title:"\u59D3\u540D",index:"name"},{title:"\u5E74\u9F84",index:"age"},{title:"\u64CD\u4F5C\u533A",buttons:[{text:"\u66F4\u591A1"},{text:"\u66F4\u591A",children:[]}]}];change(n){console.log(n)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["app-demo"]],viewQuery:function(e,o){if(e&1&&_t(In,5),e&2){let a;ft(a=gt())&&(o.st=a.first)}},decls:4,vars:2,consts:[["st",""],[3,"change","data","columns"]],template:function(e,o){e&1&&(t(0," "),l(1,"st",1,0),_("change",function(d){return o.change(d)}),s(),t(3," ")),e&2&&(r(),p("data",o.users)("columns",o.columns))},dependencies:[Ln,wn],encapsulation:2})};var An=["host"],Hn=["*"];function On(i,n){i&1&&(t(0,`
      `),ee(1),t(2,`
    `))}var Q=class i{host=Dt("host");hidden=C("none");direction=C("right");static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["layout-default-header-item"]],viewQuery:function(e,o){e&1&&xt(o.host,An,5),e&2&&be()},inputs:{hidden:[1,"hidden"],direction:[1,"direction"]},ngContentSelectors:Hn,decls:4,vars:0,consts:[["host",""]],template:function(e,o){e&1&&(X(),t(0,`
    `),ut(1,On,3,0,"ng-template",null,0,P),t(3,`
  `))},encapsulation:2})};var zn={logoExpanded:"./assets/logo-full.svg",logoCollapsed:"./assets/logo.svg",logoLink:"/",showHeaderCollapse:!0,showSiderCollapse:!1,hideAside:!1,hideHeader:!1},q=class i{settings=u(M);bm=u(on);options=J(zn);collapsedIcon=J("");constructor(){let n="only screen and (max-width: 767.99px)";this.bm.observe(n).pipe(R()).subscribe(o=>this.checkMedia(o.matches)),this.checkMedia(this.bm.isMatched(n));let e=this.settings;e.notify.pipe(G(o=>o.type==="layout"),lt(()=>{let o=e.layout.collapsed;return e.layout.direction==="rtl"?o?"fold":"unfold":o?"unfold":"fold"}),R()).subscribe(o=>this.collapsedIcon.set(`menu-${o}`))}checkMedia(n){this.settings.setLayout("collapsed",n)}setOptions(n){this.options.set(Ke(Ke({},zn),n))}toggleCollapsed(n){this.settings.setLayout("collapsed",n??!this.settings.layout.collapsed)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=st({token:i,factory:i.\u0275fac,providedIn:"root"})};var kn=i=>({$implicit:i});function Bn(i,n){i&1&&H(0)}function Pn(i,n){if(i&1&&(t(0,`
        `),l(1,"li"),t(2,`
          `),v(3,Bn,1,0,"ng-container",5),t(4,`
        `),s(),t(5,`
      `)),i&2){let e=n.$implicit;r(),S("hidden-mobile",e.hidden()==="mobile")("hidden-pc",e.hidden()==="pc"),r(2),p("ngTemplateOutlet",e.host())}}function Rn(i,n){if(i&1&&(t(0,`
      `),I(1,Pn,6,5,null,null,F)),i&2){let e=n.$implicit;r(),A(e)}}function Un(i,n){i&1&&H(0)}function Wn(i,n){if(i&1&&(t(0,`
        `),v(1,Un,1,0,"ng-container",5),t(2,`
      `)),i&2){m();let e=_e(4);r(),p("ngTemplateOutlet",e.logo)}}function $n(i,n){if(i&1&&(t(0,`
        `),l(1,"a",6),t(2,`
          `),c(3,"img",7),t(4,`
          `),c(5,"img",8),t(6,`
        `),s(),t(7,`
      `)),i&2){let e=m(),o=_e(4);r(),p("routerLink",o.logoLink),r(2),Y("src",o.logoExpanded,ue)("alt",e.app.name),r(2),Y("src",o.logoCollapsed,ue)("alt",e.app.name)}}function jn(i,n){if(i&1){let e=b();t(0,`
          `),l(1,"li"),t(2,`
            `),l(3,"div",9),_("click",function(){f(e);let a=m();return g(a.srv.toggleCollapsed())}),t(4,`
              `),c(5,"nz-icon",10),t(6,`
            `),s(),t(7,`
          `),s(),t(8,`
        `)}if(i&2){let e=m();r(5),p("nzType",e.srv.collapsedIcon())}}function Qn(i,n){}function qn(i,n){i&1&&H(0)}function Jn(i,n){if(i&1&&(t(0,`
        `),l(1,"div",11),t(2,`
          `),v(3,qn,1,0,"ng-container",5),t(4,`
        `),s(),t(5,`
      `)),i&2){let e=m();r(3),p("ngTemplateOutlet",e.middle()[0].host())}}function Yn(i,n){}var ge=class i{app=u(M).app;srv=u(q);items=C.required();left=te(()=>this.items().filter(n=>n.direction()==="left"));middle=te(()=>this.items().filter(n=>n.direction()==="middle"));right=te(()=>this.items().filter(n=>n.direction()==="right"));opt=this.srv.options;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["layout-default-header"]],hostAttrs:[1,"alain-default__header"],inputs:{items:[1,"items"]},decls:26,vars:14,consts:[["render",""],[1,"alain-default__header-logo"],[1,"alain-default__nav-wrap"],[1,"alain-default__nav"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],[1,"alain-default__header-logo-link",3,"routerLink"],[1,"alain-default__header-logo-expanded"],[1,"alain-default__header-logo-collapsed"],[1,"alain-default__nav-item","alain-default__nav-item--collapse",3,"click"],[3,"nzType"],[1,"alain-default__nav","alain-default__nav-middle"]],template:function(e,o){if(e&1&&(t(0,`
    `),v(1,Rn,3,0,"ng-template",null,0,P),t(3,`
    `),De(4),t(5,`
    `),l(6,"div",1),t(7,`
      `),y(8,Wn,3,1)(9,$n,8,5),s(),t(10,`
    `),l(11,"div",2),t(12,`
      `),l(13,"ul",3),t(14,`
        `),y(15,jn,9,1),v(16,Qn,0,0,"ng-template",4),t(17,`
      `),s(),t(18,`
      `),y(19,Jn,6,1),l(20,"ul",3),t(21,`
        `),v(22,Yn,0,0,"ng-template",4),t(23,`
      `),s(),t(24,`
    `),s(),t(25,`
  `)),e&2){let a=T(2);r(4);let d=Te(o.opt());r(2),vt("width",d.logoFixWidth,"px"),r(2),x(d.logo?8:9),r(7),x(!d.hideAside&&d.showHeaderCollapse?15:-1),r(),p("ngTemplateOutlet",a)("ngTemplateOutletContext",N(10,kn,o.left())),r(3),x(o.middle().length>0?19:-1),r(3),p("ngTemplateOutlet",a)("ngTemplateOutletContext",N(12,kn,o.right()))}},dependencies:[ne,Ht,z],encapsulation:2,changeDetection:0})};var ye=i=>({$implicit:i});function Zn(i,n){if(i&1&&(t(0,`
            `),c(1,"nz-icon",3),t(2,`
          `)),i&2){let e=m(2).$implicit;r(),p("nzType",e.value)("nzTheme",e.theme)("nzSpin",e.spin)("nzTwotoneColor",e.twoToneColor)("nzIconfont",e.iconfont)("nzRotate",e.rotate)}}function Gn(i,n){if(i&1&&(t(0,`
            `),c(1,"nz-icon",4),t(2,`
          `)),i&2){let e=m(2).$implicit;r(),p("nzIconfont",e.iconfont)}}function Kn(i,n){if(i&1&&(t(0,`
            `),c(1,"img",5),t(2,`
          `)),i&2){let e=m(2).$implicit;r(),p("src",e.value,ue)}}function Xn(i,n){if(i&1&&(t(0,`
            `),c(1,"span",6),t(2,`
          `)),i&2){let e=m(2).$implicit;r(),p("innerHTML",e.value,ce)}}function ei(i,n){if(i&1&&(t(0,`
            `),c(1,"i"),t(2,`
          `)),i&2){let e=m(2).$implicit;r(),et(tt("sidebar-nav__item-icon ",e.value))}}function ti(i,n){if(i&1&&(t(0,`
        `),y(1,Zn,3,6)(2,Gn,3,1)(3,Kn,3,1)(4,Xn,3,1)(5,ei,3,3),t(6,`
      `)),i&2){let e,o=m().$implicit;r(),x((e=o.type)==="icon"?1:e==="iconfont"?2:e==="img"?3:e==="svg"?4:5)}}function ni(i,n){if(i&1&&(t(0,`
      `),y(1,ti,7,1)),i&2){let e=n.$implicit;r(),x(e?1:-1)}}function ii(i,n){i&1&&(t(0,`
            `),c(1,"li",7),t(2,`
          `))}function oi(i,n){}function ai(i,n){if(i&1&&(t(0,`
                      `),l(1,"span",11),t(2,`
                        `),v(3,oi,0,0,"ng-template",12),t(4,`
                      `),s(),t(5,`
                    `)),i&2){let e=m(5).$implicit;m(2);let o=T(2);r(),p("nzTooltipTitle",e.text),r(2),p("ngTemplateOutlet",o)("ngTemplateOutletContext",N(3,ye,e.icon))}}function ri(i,n){}function li(i,n){if(i&1&&(t(0,`
                      `),v(1,ri,0,0,"ng-template",12),t(2,`
                    `)),i&2){let e=m(5).$implicit;m(2);let o=T(2);r(),p("ngTemplateOutlet",o)("ngTemplateOutletContext",N(2,ye,e.icon))}}function si(i,n){if(i&1&&(t(0,`
                    `),y(1,ai,6,5)(2,li,3,4)),i&2){let e=m(6);r(),x(e.collapsed?1:2)}}function di(i,n){if(i&1){let e=b();t(0,`
                `),l(1,"a",9),_("click",function(){f(e);let a=m(3).$implicit,d=m(2);return g(d.to(a))})("mouseenter",function(){f(e);let a=m(5);return g(a.closeSubMenu())}),t(2,`
                  `),y(3,si,3,1),c(4,"span",10),t(5,`
                `),s(),t(6,`
              `)}if(i&2){let e=m(3).$implicit;r(),S("sidebar-nav__item-disabled",e.disabled),Y("data-id",e._id),r(2),x(e._needIcon?3:-1),r(),p("innerHTML",e._text,ce),Y("title",e.text)}}function mi(i,n){}function pi(i,n){if(i&1){let e=b();t(0,`
                `),l(1,"a",9),_("click",function(){f(e);let a=m(3).$implicit,d=m(2);return g(d.toggleOpen(a))})("mouseenter",function(a){f(e);let d=m(3).$implicit,E=m(2);return g(E.showSubMenu(a,d))}),t(2,`
                  `),v(3,mi,0,0,"ng-template",12),t(4,`
                  `),c(5,"span",10),t(6,`
                  `),c(7,"i",13),t(8,`
                `),s(),t(9,`
              `)}if(i&2){let e=m(3).$implicit;m(2);let o=T(2);r(3),p("ngTemplateOutlet",o)("ngTemplateOutletContext",N(4,ye,e.icon)),r(2),p("innerHTML",e._text,ce),Y("title",e.text)}}function ci(i,n){if(i&1&&(t(0,`
                `),c(1,"nz-badge",14),t(2,`
              `)),i&2){let e=m(3).$implicit;r(),p("nzCount",e.badge)("nzDot",e.badgeDot)("nzOverflowCount",e.badgeOverflowCount?e.badgeOverflowCount:9)}}function ui(i,n){}function _i(i,n){if(i&1&&(t(0,`
                `),l(1,"ul"),t(2,`
                  `),v(3,ui,0,0,"ng-template",12),t(4,`
                `),s(),t(5,`
              `)),i&2){let e=m(3).$implicit;m(2);let o=T(5);r(),et(tt("sidebar-nav sidebar-nav__sub sidebar-nav__depth",e._depth)),r(2),p("ngTemplateOutlet",o)("ngTemplateOutletContext",N(5,ye,e.children))}}function fi(i,n){if(i&1&&(t(0,`
            `),l(1,"li",8),t(2,`
              `),t(3,`
              `),y(4,di,7,6),y(5,pi,10,6),y(6,ci,3,3),y(7,_i,6,7),s(),t(8,`
          `)),i&2){let e=m(2).$implicit;r(),S("sidebar-nav__selected",e._selected)("sidebar-nav__open",e.open),r(3),x(e.children.length===0?4:-1),r(),x(e.children.length>0?5:-1),r(),x(e.badge?6:-1),r(),x(e.children.length>0?7:-1)}}function gi(i,n){if(i&1&&(t(0,`
          `),y(1,ii,3,0)(2,fi,9,8)),i&2){let e=m().$implicit;r(),x(e.render_type==="divider"?1:2)}}function yi(i,n){if(i&1&&(t(0,`
        `),y(1,gi,3,1)),i&2){let e=n.$implicit;r(),x(e._hidden!==!0?1:-1)}}function xi(i,n){if(i&1&&(t(0,`
      `),I(1,yi,2,1,null,null,F)),i&2){let e=n.$implicit;r(),A(e)}}function vi(i,n){if(i&1&&(t(0,`
          `),l(1,"li",15),t(2,`
            `),c(3,"span",16),t(4,`
          `),s(),t(5,`
        `)),i&2){let e=m().$implicit;r(3),p("innerHTML",e._text,ce)}}function Ci(i,n){}function hi(i,n){if(i&1&&(t(0,`
        `),y(1,vi,6,1),v(2,Ci,0,0,"ng-template",12),t(3,`
      `)),i&2){let e=n.$implicit;m();let o=T(5);r(),x(e.group?1:-1),r(),p("ngTemplateOutlet",o)("ngTemplateOutletContext",N(3,ye,e.children))}}var ot="sidebar-nav__floating-show",at="sidebar-nav__floating",re=class i{doc=u(K);win=u(sn);router=u(ie);render=u(ct);menuSrv=u(Me);settings=u(M);sanitizer=u(Et);bodyEl=this.doc.querySelector("body");floatingEl;dir=u(Ne).valueSignal;list=J([]);disabledAcl=C(!1,{transform:w});autoCloseUnderPad=C(!0,{transform:w});recursivePath=C(!0,{transform:w});hideEmptyChildren=C(!0,{transform:w});openStrictly=C();maxLevelIcon=C(3,{transform:Lt});select=bt();get collapsed(){return this.settings.layout.collapsed}constructor(){pe(()=>{let n=this.openStrictly();n!=null&&(this.menuSrv.openStrictly=n)}),this.menuSrv.change.pipe(R()).subscribe(n=>{this.menuSrv.visit(n,(e,o,a)=>{e._text=this.sanitizer.bypassSecurityTrustHtml(e.text),e._needIcon=a<=this.maxLevelIcon()&&!!e.icon,e._aclResult||(this.disabledAcl()?e.disabled=!0:e._hidden=!0);let d=e.icon;d&&d.type==="svg"&&typeof d.value=="string"&&(d.value=this.sanitizer.bypassSecurityTrustHtml(d.value))}),this.hideEmptyChildren()&&this.fixHide(n),this.list.set(n.filter(e=>e._hidden!==!0))}),this.router.events.pipe(R()).subscribe(n=>{n instanceof Le&&(this.openByUrl(n.urlAfterRedirects),this.underPad())}),this.settings.notify.pipe(R(),G(n=>n.type==="layout"&&n.name==="collapsed")).subscribe(()=>this.clearFloating()),pt(()=>{this.underPad(),this.openByUrl(this.router.url),this.genFloating()})}getLinkNode(n){return n=n.nodeName==="A"?n:n.parentNode,n.nodeName!=="A"?null:n}floatingClickHandle(n){n.stopPropagation();let e=this.getLinkNode(n.target);if(e==null)return!1;let o=+e.dataset.id;if(isNaN(o))return!1;let a;return this.menuSrv.visit(this.list(),d=>{!a&&d._id===o&&(a=d)}),this.to(a),this.hideAll(),n.preventDefault(),!1}clearFloating(){this.floatingEl&&(this.floatingEl.removeEventListener("click",this.floatingClickHandle.bind(this)),this.floatingEl.parentNode?.removeChild(this.floatingEl))}genFloating(){this.clearFloating(),this.floatingEl=this.render.createElement("div"),this.floatingEl.classList.add(`${at}-container`),this.floatingEl.addEventListener("click",this.floatingClickHandle.bind(this),!1),this.bodyEl.appendChild(this.floatingEl)}genSubNode(n,e){let o=`_sidebar-nav-${e._id}`,d=(e.badge?n.nextElementSibling.nextElementSibling:n.nextElementSibling).cloneNode(!0);return d.id=o,d.classList.add(at),d.addEventListener("mouseleave",()=>{d.classList.remove(ot)},!1),this.floatingEl.appendChild(d),d}hideAll(){this.floatingEl.querySelectorAll(`.${at}`).forEach(e=>e.classList.remove(ot))}calPos(n,e){let o=n.getBoundingClientRect(),a=Math.max(this.doc.documentElement.scrollTop,this.bodyEl.scrollTop),d=Math.max(this.doc.documentElement.clientHeight,this.bodyEl.clientHeight),E=5,Z=-E;d<o.top+e.clientHeight&&(Z=o.top+e.clientHeight-d+E),e.style.top=`${o.top+a-Z}px`,this.dir()==="rtl"?e.style.right=`${o.width+E}px`:e.style.left=`${o.right+E}px`}showSubMenu(n,e){if(this.collapsed!==!0)return;n.preventDefault();let o=n.target;this.genFloating();let a=this.genSubNode(o,e);this.hideAll(),a.classList.add(ot),this.calPos(o,a)}to(n){if(this.select.emit(n),!n.disabled){if(n.externalLink){n.target==="_blank"?this.win.open(n.externalLink):this.win.location.href=n.externalLink;return}this.router.navigateByUrl(n.link)}}toggleOpen(n){this.menuSrv.toggleOpen(n)}_click(){this.isPad&&this.collapsed&&(this.openAside(!1),this.hideAll())}closeSubMenu(){this.collapsed&&this.hideAll()}openByUrl(n){let{menuSrv:e,recursivePath:o}=this;this.menuSrv.open(e.find({url:n,recursive:o()}))}fixHide(n){let e=o=>{for(let a of o)a.children&&a.children.length>0&&(e(a.children),a._hidden||(a._hidden=a.children.every(d=>d._hidden)))};e(n)}get isPad(){return this.doc.defaultView.innerWidth<768}underPad(){this.autoCloseUnderPad()&&this.isPad&&!this.collapsed&&setTimeout(()=>this.openAside(!0))}openAside(n){this.settings.setLayout("collapsed",n)}ngOnDestroy(){this.clearFloating()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["layout-default-nav"]],hostAttrs:[1,"d-block"],hostBindings:function(e,o){e&1&&_("click",function(){return o._click()})("click",function(){return o.closeSubMenu()},mt)},inputs:{disabledAcl:[1,"disabledAcl"],autoCloseUnderPad:[1,"autoCloseUnderPad"],recursivePath:[1,"recursivePath"],hideEmptyChildren:[1,"hideEmptyChildren"],openStrictly:[1,"openStrictly"],maxLevelIcon:[1,"maxLevelIcon"]},outputs:{select:"select"},decls:12,vars:0,consts:[["icon",""],["tree",""],[1,"sidebar-nav"],[1,"sidebar-nav__item-icon",3,"nzType","nzTheme","nzSpin","nzTwotoneColor","nzIconfont","nzRotate"],[1,"sidebar-nav__item-icon",3,"nzIconfont"],[1,"sidebar-nav__item-icon","sidebar-nav__item-img",3,"src"],[1,"sidebar-nav__item-icon","sidebar-nav__item-svg",3,"innerHTML"],[1,"sidebar-nav__divider"],[1,"sidebar-nav__item"],[1,"sidebar-nav__item-link",3,"click","mouseenter"],[1,"sidebar-nav__item-text",3,"innerHTML"],["nz-tooltip","","nzTooltipPlacement","right",3,"nzTooltipTitle"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"sidebar-nav__sub-arrow"],["nzStandalone","",3,"nzCount","nzDot","nzOverflowCount"],[1,"sidebar-nav__item","sidebar-nav__group-title"],[3,"innerHTML"]],template:function(e,o){e&1&&(t(0,`
    `),v(1,ni,2,1,"ng-template",null,0,P),t(3,`
    `),v(4,xi,3,0,"ng-template",null,1,P),t(6,`
    `),l(7,"ul",2),t(8,`
      `),I(9,hi,4,5,null,null,F),s(),t(11,`
  `)),e&2&&(r(9),A(o.list()))},dependencies:[ne,z,Pe,dn],encapsulation:2,changeDetection:0})};var bi=["*"];function Di(i,n){i&1&&(t(0,`
      `),c(1,"div",2),t(2,`
    `))}function Ti(i,n){if(i&1&&(t(0,`
      `),c(1,"layout-default-header",3),t(2,`
    `)),i&2){let e=m();r(),p("items",e.headerItems())}}function Si(i,n){i&1&&H(0)}function wi(i,n){i&1&&H(0)}function Li(i,n){i&1&&(t(0,`
              `),c(1,"layout-default-nav"),t(2,`
            `))}function Mi(i,n){i&1&&H(0)}function Ni(i,n){if(i&1&&(t(0,`
                `),v(1,Mi,1,0,"ng-container",1),t(2,`
              `)),i&2){let e=m(3);r(),p("ngTemplateOutlet",e.asideBottom())}}function Ei(i,n){if(i&1){let e=b();t(0,`
                `),l(1,"div",8),_("click",function(){f(e);let a=m(3);return g(a.srv.toggleCollapsed())}),t(2,`
                  `),c(3,"nz-icon",9),t(4,`
                `),s(),t(5,`
              `)}if(i&2){let e=m(3);r(3),p("nzType",e.srv.collapsedIcon())}}function zi(i,n){if(i&1&&(t(0,`
            `),l(1,"div",7),t(2,`
              `),y(3,Ni,3,1)(4,Ei,6,1),s(),t(5,`
          `)),i&2){let e=m(2);r(3),x(e.asideBottom()?3:4)}}function ki(i,n){if(i&1&&(t(0,`
      `),l(1,"div",4),t(2,`
        `),l(3,"div",5),t(4,`
          `),l(5,"div",6),t(6,`
            `),v(7,Si,1,0,"ng-container",1),t(8,`
            `),v(9,wi,1,0,"ng-container",1),t(10,`
            `),y(11,Li,3,0),s(),t(12,`
          `),y(13,zi,6,1),s(),t(14,`
      `),s(),t(15,`
    `)),i&2){let e=m(),o=_e(1);r(7),p("ngTemplateOutlet",e.asideUser()),r(2),p("ngTemplateOutlet",e.nav()),r(2),x(e.nav()?-1:11),r(2),x(o.showSiderCollapse?13:-1)}}function Fi(i,n){i&1&&H(0)}var le=class i{router=u(ie);msgSrv=u(ae);settings=u(M);doc=u(K);srv=u(q);headerItems=Tt(Q,{descendants:!1});opt=this.srv.options;layout=this.settings.layoutSignal;options=C();asideUser=C();asideBottom=C();nav=C();content=C();customError=C();fetchingStrictly=C(!1,{transform:w});fetching=C(!1,{transform:w});isFetching=J(!1);showFetching=te(()=>this.fetchingStrictly()?this.fetching():this.isFetching());constructor(){this.router.events.pipe(R(),G(()=>!this.fetchingStrictly())).subscribe(n=>this.processEv(n)),pe(()=>{let n=this.options();this.srv.setOptions(n)}),pe(()=>{this.doc.body.classList[this.layout().colorWeak?"add":"remove"]("color-weak")})}processEv(n){if(!this.isFetching()&&n instanceof kt&&this.isFetching.set(!0),n instanceof nt||n instanceof zt){this.isFetching.set(!1);let e=this.customError(),o=e===null?null:e??`Could not load ${n.url} route`;o&&n instanceof nt&&this.msgSrv.error(o,{nzDuration:1e3*3});return}(n instanceof Le||n instanceof Ft)&&this.isFetching()&&setTimeout(()=>{this.isFetching.set(!1)},100)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["layout-default"]],contentQueries:function(e,o,a){e&1&&yt(a,o.headerItems,Q,4),e&2&&be()},hostAttrs:[1,"alain-default"],hostVars:8,hostBindings:function(e,o){e&2&&S("alain-default__fixed",o.layout().fixed)("alain-default__collapsed",o.layout().collapsed)("alain-default__hide-aside",o.opt().hideAside)("alain-default__hide-header",o.opt().hideHeader)},inputs:{options:[1,"options"],asideUser:[1,"asideUser"],asideBottom:[1,"asideBottom"],nav:[1,"nav"],content:[1,"content"],customError:[1,"customError"],fetchingStrictly:[1,"fetchingStrictly"],fetching:[1,"fetching"]},exportAs:["layoutDefault"],ngContentSelectors:bi,decls:13,vars:5,consts:[[1,"alain-default__content"],[4,"ngTemplateOutlet"],[1,"alain-default__progress-bar"],[3,"items"],[1,"alain-default__aside"],[1,"alain-default__aside-wrap"],[1,"alain-default__aside-inner"],[1,"alain-default__aside-link"],[1,"alain-default__aside-link-collapsed",3,"click"],[3,"nzType"]],template:function(e,o){if(e&1&&(X(),t(0,`
    `),De(1),t(2,`
    `),y(3,Di,3,0),y(4,Ti,3,1),y(5,ki,16,4),l(6,"section",0),t(7,`
      `),v(8,Fi,1,0,"ng-container",1),t(9,`
      `),ee(10),t(11,`
    `),s(),t(12,`
  `)),e&2){r();let a=Te(o.opt());r(2),x(o.showFetching()?3:-1),r(),x(a.hideHeader?-1:4),r(),x(a.hideAside?-1:5),r(3),p("ngTemplateOutlet",o.content())}},dependencies:[ne,ge,re,z],encapsulation:2})};var Ai=["*"],xe=class i{selected=C(!1,{transform:w});disabled=C(!1,{transform:w});static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["layout-default-top-menu-item"]],hostVars:8,hostBindings:function(e,o){e&2&&S("alain-default__nav-item",!0)("alain-default__top-menu-item",!0)("alain-default__top-menu-item-selected",o.selected())("alain-default__top-menu-item-disabled",o.disabled())},inputs:{selected:[1,"selected"],disabled:[1,"disabled"]},ngContentSelectors:Ai,decls:1,vars:0,template:function(e,o){e&1&&(X(),ee(0))},encapsulation:2,changeDetection:0})};var qe=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=he({type:i});static \u0275inj=Ce({imports:[Nt,Ot,pn,Ee,We,Re,mn,le,re]})};var Je=class i{srv=u(q);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["dev-home"]],decls:34,vars:4,consts:[[3,"autoBreadcrumb"],[1,"mb-md"],["nz-button","",3,"click"]],template:function(e,o){e&1&&(t(0,`
    `),c(1,"page-header",0),t(2,`
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
  `)),e&2&&(r(),p("autoBreadcrumb",!1),r(3),O(" options: ",B(5,2,o.srv.options)," "))},dependencies:[je,$e,Fe,oe,ze,ke,we],encapsulation:2})};var rt=()=>({standalone:!0});function Wi(i,n){if(i&1){let e=b();t(0,`
        `),l(1,"input",1),j("ngModelChange",function(a){f(e);let d=m();return $(d.i.value,a)||(d.i.value=a),g(a)}),s(),t(2,`
      `)}if(i&2){let e=m();r(),W("ngModel",e.i.value),p("ngModelOptions",Se(2,rt))}}function $i(i,n){if(i&1){let e=b();t(0,`
        `),l(1,"input",2),j("ngModelChange",function(a){f(e);let d=m();return $(d.i.value,a)||(d.i.value=a),g(a)}),s(),t(2,`
      `)}if(i&2){let e=m();r(),W("ngModel",e.i.value),p("ngModelOptions",Se(2,rt))}}function ji(i,n){if(i&1){let e=b();t(0,`
        `),l(1,"nz-input-number",3),j("ngModelChange",function(a){f(e);let d=m();return $(d.pxVal,a)||(d.pxVal=a),g(a)}),_("ngModelChange",function(a){f(e);let d=m();return g(d.pxChange(a))}),s(),t(2,`
      `)}if(i&2){let e=m();r(),W("ngModel",e.pxVal),p("nzFormatter",e.format)}}function Qi(i,n){if(i&1){let e=b();t(0,`
        `),l(1,"nz-switch",4),j("ngModelChange",function(a){f(e);let d=m();return $(d.i.value,a)||(d.i.value=a),g(a)}),s(),t(2,`
      `)}if(i&2){let e=m();r(),W("ngModel",e.i.value),p("ngModelOptions",Se(2,rt))}}function qi(i,n){}function Ji(i,n){i&1&&(t(0,`
        `),v(1,qi,0,0,"ng-template",5),t(2,`
      `))}var se=class i{i={};set data(n){this.i=n,n.type==="px"&&(this.pxVal=+n.value.replace("px",""))}pxVal=0;pxChange(n){this.i.value=`${n}px`}format=n=>`${n} px`;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["setting-drawer-item"]],hostAttrs:[1,"setting-drawer__body-item"],inputs:{data:"data"},decls:13,vars:3,consts:[[1,"pl-sm","text-grey"],["nz-input","","type","color",2,"width","88px",3,"ngModelChange","ngModel","ngModelOptions"],["nz-input","",2,"width","88px",3,"ngModelChange","ngModel","ngModelOptions"],[3,"ngModelChange","ngModel","nzFormatter"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzDrawerContent",""]],template:function(e,o){if(e&1&&(t(0,`
    `),l(1,"span"),t(2),l(3,"span",0),t(4),s(),t(5,`
    `),s(),t(6,`
    `),y(7,Wi,3,3)(8,$i,3,3)(9,ji,3,2)(10,Qi,3,3)(11,Ji,3,0),t(12,`
  `)),e&2){let a;r(2),O(`
      `,o.i.label,`
      `),r(2),U(o.i.tip),r(3),x((a=o.i.type)==="color"?7:a==="input"?8:a==="px"?9:a==="switch"?10:11)}},dependencies:[Be,rn,Oe,Ve,Tn,Sn,Ue,He,Ae],encapsulation:2})};var Ye="alain-default-vars",Fn=[{key:"dust",color:"#F5222D"},{key:"volcano",color:"#FA541C"},{key:"sunset",color:"#FAAD14"},{key:"cyan",color:"#13C2C2"},{key:"green",color:"#52C41A"},{key:"daybreak",color:"#1890ff"},{key:"geekblue",color:"#2F54EB"},{key:"purple",color:"#722ED1"},{key:"black",color:"#001529"}],ve={"primary-color":{label:"\u4E3B\u989C\u8272",type:"color",default:"#1890ff"},"alain-default-header-hg":{label:"\u9AD8",type:"px",default:"64px",max:300,min:24},"alain-default-header-bg":{label:"\u80CC\u666F\u8272",type:"color",default:"@primary-color",tip:"\u9ED8\u8BA4\u540C\u4E3B\u8272\u7CFB"},"alain-default-header-padding":{label:"\u9876\u90E8\u5DE6\u53F3\u5185\u8FB9\u8DDD",type:"px",default:"16px"},"alain-default-aside-wd":{label:"\u5BBD\u5EA6",type:"px",default:"200px"},"alain-default-aside-bg":{label:"\u80CC\u666F",type:"color",default:"#ffffff"},"alain-default-aside-collapsed-wd":{label:"\u6536\u7F29\u5BBD\u5EA6",type:"px",default:"64px"},"alain-default-aside-nav-padding-top-bottom":{label:"\u9879\u4E0A\u4E0B\u5185\u8FB9\u8DDD",type:"px",default:"8px",step:8},"alain-default-aside-nav-fs":{label:"\u83DC\u5355\u5B57\u53F7",type:"px",default:"14px",min:14,max:30},"alain-default-aside-collapsed-nav-fs":{label:"\u6536\u7F29\u83DC\u5355\u5B57\u53F7",type:"px",default:"24px",min:24,max:32},"alain-default-aside-nav-item-height":{label:"\u83DC\u5355\u9879\u9AD8\u5EA6",type:"px",default:"38px",min:24,max:64},"alain-default-aside-nav-text-color":{label:"\u83DC\u5355\u6587\u672C\u989C\u8272",type:"color",default:"rgba(0, 0, 0, 0.65)",rgba:!0},"alain-default-aside-nav-text-hover-color":{label:"\u83DC\u5355\u6587\u672C\u60AC\u505C\u989C\u8272",type:"color",default:"@primary-color",tip:"\u9ED8\u8BA4\u540C\u4E3B\u8272\u7CFB"},"alain-default-aside-nav-group-text-color":{label:"\u83DC\u5355\u5206\u7EC4\u6587\u672C\u989C\u8272",type:"color",default:"rgba(0, 0, 0, 0.43)",rgba:!0},"alain-default-aside-nav-selected-text-color":{label:"\u83DC\u5355\u6FC0\u6D3B\u65F6\u6587\u672C\u989C\u8272",type:"color",default:"@primary-color",tip:"\u9ED8\u8BA4\u540C\u4E3B\u8272\u7CFB"},"alain-default-aside-nav-selected-bg":{label:"\u83DC\u5355\u6FC0\u6D3B\u65F6\u80CC\u666F\u989C\u8272",type:"color",default:"#fcfcfc"},"alain-default-content-bg":{label:"\u80CC\u666F\u8272",type:"color",default:"#f5f7fa"},"alain-default-content-heading-bg":{label:"\u6807\u9898\u80CC\u666F\u8272",type:"color",default:"#fafbfc"},"alain-default-content-heading-border":{label:"\u6807\u9898\u5E95\u90E8\u8FB9\u6846\u8272",type:"color",default:"#efe3e5"},"alain-default-content-padding":{label:"\u5185\u8FB9\u8DDD",type:"px",default:"24px",min:0,max:128,step:8},"form-state-visual-feedback-enabled":{label:"\u5F00\u542F\u8868\u5355\u5143\u7D20\u7684\u89C6\u89C9\u53CD\u9988",type:"switch",default:!0},"preserve-white-spaces-enabled":{label:"\u5F00\u542F preserveWhitespaces",type:"switch",default:!0},"nz-table-img-radius":{label:"\u8868\u683C\u4E2D\uFF1A\u56FE\u7247\u5706\u89D2",type:"px",default:"4px",min:0,max:128},"nz-table-img-margin-right":{label:"\u8868\u683C\u4E2D\uFF1A\u56FE\u7247\u53F3\u5916\u8FB9\u8DDD",type:"px",default:"4px",min:0,max:128},"nz-table-img-max-width":{label:"\u8868\u683C\u4E2D\uFF1A\u56FE\u7247\u6700\u5927\u5BBD\u5EA6",type:"px",default:"32px",min:8,max:128},"nz-table-img-max-height":{label:"\u8868\u683C\u4E2D\uFF1A\u56FE\u7247\u6700\u5927\u9AD8\u5EA6",type:"px",default:"32px",min:8,max:128}};var Yi=i=>({"background-color":i});function Zi(i,n){i&1&&(t(0,`
            `),c(1,"nz-icon",17),t(2,`
          `))}function Gi(i,n){if(i&1){let e=b();t(0,`
        `),l(1,"span",16),_("click",function(){let a=f(e).$implicit,d=m(2);return g(d.changeColor(a.color))}),t(2,`
          `),y(3,Zi,3,0),s(),t(4,`
      `)}if(i&2){let e=n.$implicit,o=m(2);r(),Ct(N(4,Yi,e.color)),p("nzTooltipTitle",e.key),r(2),x(o.color===e.color?3:-1)}}function Ki(i,n){if(i&1){let e=b();l(0,"div",2),t(1,`
    `),l(2,"div",3),t(3,`
      `),l(4,"h3",4),t(5,"\u4E3B\u9898\u8272"),s(),t(6,`
      `),I(7,Gi,5,6,null,null,F),s(),t(9,`
    `),c(10,"nz-divider"),t(11,`
    `),l(12,"div",5),t(13,`
      `),l(14,"h3",4),t(15,"\u8BBE\u7F6E"),s(),t(16,`
      `),l(17,"nz-tabs"),t(18,`
        `),l(19,"nz-tab",6),t(20,`
          `),l(21,"div",5),t(22,`
            `),c(23,"setting-drawer-item",7),t(24,`
            `),c(25,"setting-drawer-item",7),t(26,`
            `),c(27,"setting-drawer-item",7),t(28,`
          `),s(),t(29,`
        `),s(),t(30,`
        `),l(31,"nz-tab",8),t(32,`
          `),c(33,"setting-drawer-item",7),t(34,`
          `),c(35,"setting-drawer-item",7),t(36,`
          `),c(37,"setting-drawer-item",7),t(38,`
          `),c(39,"setting-drawer-item",7),t(40,`
        `),s(),t(41,`
        `),l(42,"nz-tab",9),t(43,`
          `),c(44,"setting-drawer-item",7),t(45,`
          `),c(46,"setting-drawer-item",7),t(47,`
          `),c(48,"setting-drawer-item",7),t(49,`
          `),c(50,"setting-drawer-item",7),t(51,`
        `),s(),t(52,`
        `),l(53,"nz-tab",10),t(54,`
          `),c(55,"setting-drawer-item",7),t(56,`
          `),c(57,"setting-drawer-item",7),t(58,`
          `),c(59,"setting-drawer-item",7),t(60,`
          `),c(61,"setting-drawer-item",7),t(62,`
          `),c(63,"setting-drawer-item",7),t(64,`
          `),c(65,"setting-drawer-item",7),t(66,`
        `),s(),t(67,`
      `),s(),t(68,`
    `),s(),t(69,`
    `),c(70,"nz-divider"),t(71,`
    `),l(72,"div",5),t(73,`
      `),l(74,"div",11),t(75,`
        \u56FA\u5B9A\u5934\u548C\u4FA7\u8FB9\u680F
        `),l(76,"nz-switch",12),j("ngModelChange",function(a){f(e);let d=m();return $(d.layout.fixed,a)||(d.layout.fixed=a),g(a)}),_("ngModelChange",function(){f(e);let a=m();return g(a.setLayout("fixed",a.layout.fixed))}),s(),t(77,`
      `),s(),t(78,`
      `),l(79,"div",11),t(80,`
        \u8272\u5F31\u6A21\u5F0F
        `),l(81,"nz-switch",12),j("ngModelChange",function(a){f(e);let d=m();return $(d.layout.colorWeak,a)||(d.layout.colorWeak=a),g(a)}),_("ngModelChange",function(){f(e);let a=m();return g(a.setLayout("colorWeak",a.layout.colorWeak))}),s(),t(82,`
      `),s(),t(83,`
    `),s(),t(84,`
    `),c(85,"nz-divider"),t(86,`
    `),l(87,"button",13),_("click",function(){f(e);let a=m();return g(a.apply())}),t(88,"\u9884\u89C8"),s(),t(89,`
    `),l(90,"button",14),_("click",function(){f(e);let a=m();return g(a.reset())}),t(91,"\u91CD\u7F6E"),s(),t(92,`
    `),l(93,"button",14),_("click",function(){f(e);let a=m();return g(a.copyVar())}),t(94,"\u62F7\u8D1D"),s(),t(95,`
    `),c(96,"nz-alert",15),t(97,`
  `),s()}if(i&2){let e=m();r(7),A(e.colors),r(16),p("data",e.data["alain-default-header-hg"]),r(2),p("data",e.data["alain-default-header-bg"]),r(2),p("data",e.data["alain-default-header-padding"]),r(6),p("data",e.data["alain-default-aside-wd"]),r(2),p("data",e.data["alain-default-aside-bg"]),r(2),p("data",e.data["alain-default-aside-collapsed-wd"]),r(2),p("data",e.data["alain-default-aside-nav-padding-top-bottom"]),r(5),p("data",e.data["alain-default-content-bg"]),r(2),p("data",e.data["alain-default-content-heading-bg"]),r(2),p("data",e.data["alain-default-content-heading-border"]),r(2),p("data",e.data["alain-default-content-padding"]),r(5),p("data",e.data["form-state-visual-feedback-enabled"]),r(2),p("data",e.data["preserve-white-spaces-enabled"]),r(2),p("data",e.data["nz-table-img-radius"]),r(2),p("data",e.data["nz-table-img-margin-right"]),r(2),p("data",e.data["nz-table-img-max-width"]),r(2),p("data",e.data["nz-table-img-max-height"]),r(11),W("ngModel",e.layout.fixed),r(5),W("ngModel",e.layout.colorWeak)}}function Xi(i,n){if(i&1){let e=b();t(0,`
  `),l(1,"div",18),_("click",function(){f(e);let a=m();return g(a.toggle())}),t(2,`
    `),c(3,"nz-icon",19),t(4,`
  `),s(),t(5,`
`)}if(i&2){let e=m();r(),p("nzTooltipTitle",e.isDev?e.devTips:null)}}var de=class de{cdr=u(wt);msg=u(ae);settingSrv=u(M);lazy=u(Vt);ngZone=u(dt);doc=u(K);autoApplyColor=!0;compilingText="Compiling...";devTips="When the color can't be switched, you need to run it once: npm run color-less";lessJs="https://cdn.jsdelivr.net/npm/less";loadedLess=!1;dir=u(Ne).valueSignal;isDev=St();collapse=!1;get layout(){return this.settingSrv.layout}data={};color;colors=Fn;constructor(){this.color=this.cachedData["@primary-color"]??this.DEFAULT_PRIMARY,this.resetData(this.cachedData,!1)}get cachedData(){return this.settingSrv.layout[Ye]??{}}get DEFAULT_PRIMARY(){return ve["primary-color"].default}ngOnInit(){this.autoApplyColor&&this.color!==this.DEFAULT_PRIMARY&&(this.changeColor(this.color),this.runLess())}async loadLess(){return this.loadedLess?Promise.resolve():this.lazy.loadStyle("./assets/color.less",{rel:"stylesheet/less"}).then(()=>{let n=this.doc.createElement("script");n.innerHTML=`
          window.less = {
            async: true,
            env: 'production',
            javascriptEnabled: true
          };
        `,this.doc.body.appendChild(n)}).then(()=>this.lazy.loadScript(this.lessJs)).then(()=>{this.loadedLess=!0})}genVars(){let{data:n,color:e,validKeys:o}=this,a={"@primary-color":e};return o.filter(d=>d!=="primary-color").forEach(d=>a[`@${d}`]=n[d].value),this.setLayout(Ye,a),a}runLess(){let{ngZone:n,msg:e,cdr:o}=this,a=e.loading(this.compilingText,{nzDuration:0}).messageId;setTimeout(()=>{this.loadLess().then(()=>{window.less.modifyVars(this.genVars()).then(()=>{e.success("\u6210\u529F"),e.remove(a),n.run(()=>o.detectChanges())})})},200)}toggle(){this.collapse=!this.collapse}changeColor(n){this.color=n,Object.keys(ve).filter(e=>ve[e].default==="@primary-color").forEach(e=>delete this.cachedData[`@${e}`]),this.resetData(this.cachedData,!1)}setLayout(n,e){this.settingSrv.setLayout(n,e)}resetData(n,e=!0){n=n??{};let o=fe(ve);Object.keys(o).forEach(a=>{let d=n[`@${a}`]??o[a].default??"";o[a].value=d==="@primary-color"?this.color:d}),this.data=o,e&&(this.cdr.detectChanges(),this.runLess())}get validKeys(){return Object.keys(this.data).filter(n=>this.data[n].value!==this.data[n].default)}apply(){this.runLess()}reset(){this.color=this.DEFAULT_PRIMARY,this.settingSrv.setLayout(Ye,{}),this.resetData({})}copyVar(){let n=this.genVars(),e=Object.keys(n).map(o=>`${o}: ${n[o]};`).join(`
`);ln(e),this.msg.success("Copy success")}static \u0275fac=function(e){return new(e||de)};static \u0275cmp=h({type:de,selectors:[["setting-drawer"]],hostVars:4,hostBindings:function(e,o){e&2&&S("setting-drawer",!0)("setting-drawer-rtl",o.dir()==="rtl")},inputs:{autoApplyColor:[2,"autoApplyColor","autoApplyColor",w],compilingText:"compilingText",devTips:"devTips",lessJs:"lessJs"},decls:6,vars:4,consts:[[3,"nzOnClose","nzVisible","nzPlacement","nzWidth"],["class","setting-drawer__content",4,"nzDrawerContent"],[1,"setting-drawer__content"],[1,"setting-drawer__body","setting-drawer__theme"],[1,"setting-drawer__title"],[1,"setting-drawer__body"],["nzTitle","\u9876\u90E8"],[3,"data"],["nzTitle","\u4FA7\u8FB9\u680F"],["nzTitle","\u5185\u5BB9"],["nzTitle","\u5176\u5B83"],[1,"setting-drawer__body-item"],["nzSize","small",3,"ngModelChange","ngModel"],["type","button","nz-button","","nzType","primary",3,"click"],["type","button","nz-button","",3,"click"],["nzType","warning","nzMessage","\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u53C2\u6570\u914D\u7F6E\u6587\u4EF6 src/styles/theme.less",1,"mt-md"],["nz-tooltip","",1,"setting-drawer__theme-tag",3,"click","nzTooltipTitle"],["nzType","check"],["nz-tooltip","",1,"setting-drawer__handle",3,"click","nzTooltipTitle"],["nzType","setting",1,"setting-drawer__handle-icon"]],template:function(e,o){e&1&&(l(0,"nz-drawer",0),_("nzOnClose",function(){return o.toggle()}),t(1,`
  `),v(2,Ki,98,19,"div",1),t(3,`
`),s(),t(4,`
`),y(5,Xi,6,1)),e&2&&(p("nzVisible",o.collapse)("nzPlacement",o.dir()==="rtl"?"left":"right")("nzWidth",500),r(5),x(o.collapse?-1:5))},dependencies:[Be,Oe,Ve,He,an,Ae,Pe,z,Dn,bn,vn,xn,yn,se,Mn,Ue,oe,Nn],encapsulation:2,changeDetection:0})};Xe([it()],de.prototype,"loadLess",1),Xe([it()],de.prototype,"runLess",1);var me=de;var to=[se,me],Ze=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=he({type:i});static \u0275inj=Ce({imports:[to]})};function no(i,n){if(i&1){let e=b();t(0,`
          `),l(1,"layout-default-top-menu-item",12),_("click",function(){let a=f(e).$implicit,d=m();return g(d.changeMenu(a.key))}),t(2,`
            `),c(3,"nz-icon",6),t(4),s(),t(5,`
        `)}if(i&2){let e=n.$implicit;r(),p("selected",e.selected)("disabled",e.disabled),r(3),O(" ",e.label,`
          `)}}function io(i,n){if(i&1&&(t(0,`
        `),l(1,"div",13),t(2,`
          `),c(3,"nz-avatar",14),t(4,`
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
      `)),i&2){let e=T(16),o=m();r(),p("nzDropdownMenu",e),r(2),p("nzSrc",o.user.avatar),r(5),U(o.user.name),r(3),U(o.user.email),r(10),U("menu.account.center"),r(3),U("menu.account.settings")}}var oo=[Zt,Gt,Xt,en,jt,$t,Ut,Yt,Kt,tn,Jt,Wt,qt,Qt,Rt],Ge=class i{menuSrv=u(Me);router=u(ie);i18n=u(Bt);iconSrv=u(nn);rtl=u(Pt);settings=u(M);msgSrv=u(ae);options={logoExpanded:"./assets/logo-full.svg",logoCollapsed:"./assets/logo.svg",hideHeader:!1,showHeaderCollapse:!0,showSiderCollapse:!0};lang="zh-CN";get user(){return this.settings.user}topMenus=[{key:"",label:"Default",selected:!0},{key:"bus",label:"Bus",selected:!1},{key:"disabled",label:"Disabbled",disabled:!0}];menus=[{text:"test",group:!0,children:[{text:"Dashboard-DISABLED",link:"/dev/home",icon:"anticon anticon-dashboard",i18n:"app.header.menu.home",badge:5},{text:"\u6D4B\u8BD5view1-id",link:"/dev/view/1",icon:"anticon anticon-appstore"},{text:"\u6D4B\u8BD5view2-id",link:"/dev/view/2",icon:"anticon anticon-appstore"},{render_type:"divider"},{text:"lazy\u6D4B\u8BD51",link:"/dev/lazy/p1",icon:"anticon anticon-appstore"},{text:"lazy\u6D4B\u8BD52",link:"/dev/lazy/p2",icon:"anticon anticon-appstore"},{text:"lazy\u6D4B\u8BD5view1-id",link:"/dev/lazy/1/view",icon:"anticon anticon-appstore"},{text:"lazy\u6D4B\u8BD5view2-id",link:"/dev/lazy/2/view",icon:"anticon anticon-appstore"},{text:"Level1",link:"#",icon:"anticon anticon-appstore",children:[{text:"Level2",link:"#",children:[{text:"Level3A",link:"/dev/l1"},{render_type:"divider"},{text:"Level3B-DISABLED",link:"/dev/l1",disabled:!0}]},{render_type:"divider"},{text:"Level2-DISABLED",link:"/dev/l2",disabled:!0}]},{text:"ABC",icon:"anticon anticon-appstore",children:[{text:"Reuse Tab1",link:"/dev/l1",i18n:"app.header.menu.docs"},{text:"Reuse Tab2",link:"/dev/l2"},{text:"Reuse Tab3",link:"/dev/l3"},{text:"Reuse Tab4",link:"/dev/l4"},{text:"Reuse Tab5",link:"/dev/l5"},{text:"Reuse Tab6",link:"/dev/l6"},{text:"Reuse Tab7",link:"/dev/l7"},{text:"Ellipsis",link:"/dev/l8"}]},{text:"LIST",icon:"anticon anticon-appstore",children:[{text:"list",link:"/dev/list"},{text:"list/item",link:"/dev/list/item"}]}]}];customContextMenu=[{id:"custom1",title:"\u81EA\u5B9A\u4E491",fn:(n,e)=>{console.log("\u81EA\u5B9A\u4E491",n,e)}},{id:"custom2",title:"\u81EA\u5B9A\u4E492",disabled:()=>!0,fn:(n,e)=>{console.log("\u81EA\u5B9A\u4E492",n,e)}}];constructor(){this.iconSrv.addIcon(...oo)}changeMenu(n){let e={text:"test",group:!0,children:[{text:`TYPE - ${n}`,link:"/dev/view/1",icon:"anticon anticon-appstore"}]};this.menuSrv.add(n===""?fe(this.menus):[e]);for(let o of this.topMenus)o.selected=o.key===n;this.loadFirstValidMenu()}toggleCollapsedSideabar(){this.settings.setLayout("collapsed",!this.settings.layout.collapsed)}toggleLang(){this.lang=this.lang==="zh-CN"?"en-US":"zh-CN",this.i18n.use(this.lang)}ngOnInit(){this.menuSrv.add(fe(this.menus))}loadFirstValidMenu(){let n;this.menuSrv.visit(this.menuSrv.menus,e=>{n==null&&e.hide!==!0&&e.link!=null&&e.link.length>0&&(n=e)}),n!=null&&this.router.navigateByUrl(n.link)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["dev-layout"]],hostVars:2,hostBindings:function(e,o){e&2&&S("alain-default",!0)},decls:40,vars:7,consts:[["asideUserTpl",""],["reuseTab",""],["userMenu","nzDropdownMenu"],[3,"options","asideUser"],["direction","left"],["href","//github.com/ng-alain/ng-alain","target","_blank",1,"alain-default__nav-item"],["nzType","github"],["direction","middle"],["direction","right"],[1,"alain-default__nav-item",3,"click"],[3,"mode","customContextMenu"],[3,"activate","attach"],[3,"click","selected","disabled"],["nz-dropdown","","nzTrigger","click",1,"alain-default__aside-user",3,"nzDropdownMenu"],[1,"alain-default__aside-user-avatar",3,"nzSrc"],[1,"alain-default__aside-user-info"],[1,"mb0"],["nz-menu",""],["nz-menu-item","","routerLink","/pro/account/center"],["nz-menu-item","","routerLink","/pro/account/settings"]],template:function(e,o){if(e&1){let a=b();t(0,`
    `),l(1,"layout-default",3),t(2,`
      `),l(3,"layout-default-header-item",4),t(4,`
        `),l(5,"a",5),t(6,`
          `),c(7,"nz-icon",6),t(8,`
        `),s(),t(9,`
      `),s(),t(10,`
      `),l(11,"layout-default-header-item",7),t(12,`
        `),I(13,no,6,3,null,null,F),s(),t(15,`
      `),l(16,"layout-default-header-item",8),t(17,`
        `),l(18,"a",9),_("click",function(){return o.rtl.toggle()}),t(19),V(20,"uppercase"),s(),t(21,`
      `),s(),t(22,`
      `),l(23,"layout-default-header-item",8),t(24,`
        `),l(25,"a",5),t(26," githbu "),s(),t(27,`
      `),s(),t(28,`
      `),v(29,io,28,6,"ng-template",null,0,P),t(31,`
      `),c(32,"reuse-tab",10,1),t(34,`
      `),l(35,"router-outlet",11),_("activate",function(E){f(a);let Z=T(33);return g(Z.activate(E))})("attach",function(E){f(a);let Z=T(33);return g(Z.activate(E))}),s(),t(36,`
    `),s(),t(37,`
    `),c(38,"setting-drawer"),t(39,`
  `)}if(e&2){let a=T(30);r(),p("options",o.options)("asideUser",a),r(12),A(o.topMenus),r(6),U(B(20,5,o.rtl.nextDir)),r(13),p("mode",2)("customContextMenu",o.customContextMenu)}},dependencies:[qe,le,Q,xe,Ee,z,Re,un,cn,fn,gn,We,En,_n,hn,At,Ze,me,Mt],encapsulation:2})};var D=class i{route=u(It);srv=u(Cn);first=Ie(new Date,"yyyy-MM-dd HH:mm:ss");now=Ie(new Date,"yyyy-MM-dd HH:mm:ss");id=0;ngOnInit(){this.route.params.subscribe(n=>this.id=+n.id)}_onReuseInit(){this.now=Ie(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("by _onReuseInit",this.id)}replace(n){this.srv.replace(n)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["dev-page"]],decls:19,vars:12,consts:[["nz-button","","nzType","primary",3,"click"]],template:function(e,o){e&1&&(t(0,`
    `),c(1,"page-header"),t(2,`
    `),l(3,"p"),t(4),V(5,"json"),V(6,"json"),s(),t(7,`
    `),l(8,"p"),t(9),V(10,"json"),s(),t(11),V(12,"json"),l(13,"div"),t(14,`
      `),l(15,"button",0),_("click",function(){return o.replace("/dev/view/2")}),t(16,"Replace /dev/view/2"),s(),t(17,`
    `),s(),t(18,`
  `)),e&2&&(r(4),ht("first: ",B(5,4,o.first),"\uFF0Cnow: ",B(6,6,o.now)),r(5),O("id: ",B(10,8,o.id)),r(2),O(`
    page: `,B(12,10,o.route.url),`
    `))},dependencies:[je,$e,Fe,oe,ze,ke,we],encapsulation:2})};var Nl=[{path:"demo",component:Qe},{path:"",component:Ge,children:[{path:"home",component:Je},{path:"l1",component:D},{path:"l2",component:D},{path:"l3",component:D},{path:"l4",component:D},{path:"l5",component:D},{path:"l6",component:D},{path:"l7",component:D},{path:"l8",component:D},{path:"login",component:D},{path:"view/1",component:D,data:{reuseClosable:!1}},{path:"view/:id",component:D},{path:"lazy",loadChildren:()=>import("./chunk-ZAN3NNLW.js").then(i=>i.routes)},{path:"list",loadChildren:()=>import("./chunk-W4KK3FXP.js").then(i=>i.routes)}]}];export{Nl as routes};
