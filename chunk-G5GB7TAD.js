import{a as Sn,b as je}from"./chunk-KVY2M2TX.js";import{d as Qe,e as Ze}from"./chunk-S4NERJXK.js";import{a as on}from"./chunk-OSXC2BCW.js";import{a as _e}from"./chunk-5BN5PN2Q.js";import{a as xn,b as yn}from"./chunk-5ZSKOA76.js";import{a as We,b as Dn}from"./chunk-5SAYTD6G.js";import{a as gn,b as vn}from"./chunk-GEMOMIJ4.js";import{a as un,b as _n,c as fn}from"./chunk-UP7CLZET.js";import{a as cn,d as mn,e as $e}from"./chunk-CEHB3BAT.js";import"./chunk-5NPHVE65.js";import{a as bn}from"./chunk-CFI3VMUF.js";import"./chunk-O4AVNO2Y.js";import{E as Ue,G as ln,I as Cn,N as hn,P as Z,d as Xt,g as Be,m as Pe,v as Re,x as an,y as rn}from"./chunk-5L373TCB.js";import{$h as tn,Ag as ie,Cb as d,Cd as Nt,Da as ce,Db as K,Eb as X,Fa as me,Fb as ft,Fc as Ct,Fd as ue,Ff as Ht,Gb as gt,Gc as ee,Gf as Ot,Gg as oe,Gh as Ae,Ha as ut,Hb as ze,Hc as T,Ia as r,Ib as Ee,Ic as ht,Id as kt,Ig as Q,Ih as Kt,J as De,Jg as ae,Jh as Ve,Ld as z,Mb as L,Na as Te,Nb as vt,Ob as S,Oc as te,Od as It,Of as At,Pb as xt,Pe as Ft,Qa as C,Qb as tt,Qc as Dt,Qd as Ie,Ra as we,Rb as t,Rc as Ne,Sb as U,Sf as Vt,Tb as N,Ub as yt,Uf as Bt,Ug as Oe,Vb as $,Vc as bt,Vd as M,Vf as Pt,Wa as v,Wb as W,Wf as Rt,Xb as j,Xd as Fe,Ya as _t,Za as Le,Zf as Ut,_f as $t,_h as en,a as et,ac as nt,ag as Wt,cg as jt,ci as nn,da as ct,db as Y,dg as Qt,ea as be,fb as x,fc as Me,fg as Zt,g as pe,gc as k,gg as Jt,ha as u,hb as y,i as dt,ib as H,id as St,kb as O,kc as B,kh as Gt,la as f,lb as A,lc as P,ld as ke,ma as g,mb as p,md as Tt,n as pt,nb as l,nd as it,ni as sn,ob as s,od as wt,og as Yt,pb as m,pc as R,pd as Lt,pi as dn,qa as G,qd as zt,ra as Se,rd as Et,rg as qt,sg as I,si as pn,tg as He,ud as ne,vb as V,vd as Mt,wb as D,ya as mt,zb as _}from"./chunk-VMLETMXK.js";var Je=class i{cookieSrv=u(en);msg=u(Z);key="test-key";value;constructor(){this.get()}get(){this.value=this.cookieSrv.get(this.key)}set(n){this.cookieSrv.put(this.key,(+new Date).toString(),n),this.msg.success("Success")}remove(){this.cookieSrv.remove(this.key)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-demo"]],decls:16,vars:1,consts:[["classs","mb-md"],["nz-button","",3,"click"]],template:function(e,o){e&1&&(t(0,`
    `),l(1,"p",0),t(2),s(),t(3,`
    `),l(4,"button",1),_("click",function(){return o.get()}),t(5,"Get"),s(),t(6,`
    `),l(7,"button",1),_("click",function(){return o.set()}),t(8,"Set"),s(),t(9,`
    `),l(10,"button",1),_("click",function(){return o.set({expires:10})}),t(11,"Set 10s expired"),s(),t(12,`
    `),l(13,"button",1),_("click",function(){return o.remove()}),t(14,"Remove"),s(),t(15,`
  `)),e&2&&(r(2),N("Result: ",o.value||"NULL"))},dependencies:[ae,Q,ie,oe],encapsulation:2})};var kn=["host"],In=["*"];function Fn(i,n){i&1&&(t(0,`
      `),X(1),t(2,`
    `))}var q=class i{host;hidden="none";direction="right";static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["layout-default-header-item"]],viewQuery:function(e,o){if(e&1&&gt(kn,7),e&2){let a;ze(a=Ee())&&(o.host=a.first)}},inputs:{hidden:"hidden",direction:"direction"},standalone:!1,ngContentSelectors:In,decls:4,vars:0,consts:[["host",""]],template:function(e,o){e&1&&(K(),t(0,`
    `),v(1,Fn,3,0,"ng-template",null,0,R),t(3,`
  `))},encapsulation:2})};var ot={logoExpanded:"./assets/logo-full.svg",logoCollapsed:"./assets/logo.svg",logoLink:"/",showHeaderCollapse:!0,showSiderCollapse:!1,hideAside:!1,hideHeader:!1},J=class i{settings=u(M);bm=u(Gt);_options$=new pt(ot);_options=ot;get options(){return this._options}get options$(){return this._options$.asObservable()}get collapsedIcon(){let n=this.settings.layout.collapsed,e=n?"unfold":"fold";return this.settings.layout.direction==="rtl"&&(e=n?"fold":"unfold"),`menu-${e}`}constructor(){let n="only screen and (max-width: 767.99px)";this.bm.observe(n).pipe(z()).subscribe(e=>this.checkMedia(e.matches)),this.checkMedia(this.bm.isMatched(n))}checkMedia(n){this.settings.setLayout("collapsed",n)}notify(){this._options$.next(this._options)}setOptions(n){this._options=et(et({},ot),n),this.notify()}toggleCollapsed(n){this.settings.setLayout("collapsed",n??!this.settings.layout.collapsed),this.notify()}static \u0275fac=function(e){return new(e||i)};static \u0275prov=ct({token:i,factory:i.\u0275fac,providedIn:"root"})};var ve=i=>({$implicit:i});function On(i,n){if(i&1&&(t(0,`
        `),m(1,"nz-icon",3),t(2,`
      `)),i&2){let e=d(2).$implicit;r(),p("nzType",e.value)("nzTheme",e.theme)("nzSpin",e.spin)("nzTwotoneColor",e.twoToneColor)("nzIconfont",e.iconfont)("nzRotate",e.rotate)}}function An(i,n){if(i&1&&(t(0,`
        `),m(1,"nz-icon",4),t(2,`
      `)),i&2){let e=d(2).$implicit;r(),p("nzIconfont",e.iconfont)}}function Vn(i,n){if(i&1&&(t(0,`
        `),m(1,"img",5),t(2,`
      `)),i&2){let e=d(2).$implicit;r(),p("src",e.value,me)}}function Bn(i,n){if(i&1&&(t(0,`
        `),m(1,"span",6),t(2,`
      `)),i&2){let e=d(2).$implicit;r(),p("innerHTML",e.value,ce)}}function Pn(i,n){if(i&1&&(t(0,`
        `),m(1,"i"),t(2,`
      `)),i&2){let e=d(2).$implicit;r(),tt(nt("sidebar-nav__item-icon ",e.value))}}function Rn(i,n){if(i&1&&(t(0,`
    `),x(1,On,3,6)(2,An,3,1)(3,Vn,3,1)(4,Bn,3,1)(5,Pn,3,3),t(6,`
  `)),i&2){let e,o=d().$implicit;r(),y((e=o.type)==="icon"?1:e==="iconfont"?2:e==="img"?3:e==="svg"?4:5)}}function Un(i,n){if(i&1&&(t(0,`
  `),x(1,Rn,7,1)),i&2){let e=n.$implicit;r(),y(e?1:-1)}}function $n(i,n){i&1&&(t(0,`
        `),m(1,"li",7),t(2,`
      `))}function Wn(i,n){}function jn(i,n){if(i&1&&(t(0,`
                  `),l(1,"span",11),t(2,`
                    `),v(3,Wn,0,0,"ng-template",12),t(4,`
                  `),s(),t(5,`
                `)),i&2){let e=d(5).$implicit;d(2);let o=L(1);r(),p("nzTooltipTitle",e.text),r(2),p("ngTemplateOutlet",o)("ngTemplateOutletContext",k(3,ve,e.icon))}}function Qn(i,n){}function Zn(i,n){if(i&1&&(t(0,`
                  `),v(1,Qn,0,0,"ng-template",12),t(2,`
                `)),i&2){let e=d(5).$implicit;d(2);let o=L(1);r(),p("ngTemplateOutlet",o)("ngTemplateOutletContext",k(2,ve,e.icon))}}function Jn(i,n){if(i&1&&(t(0,`
                `),x(1,jn,6,5)(2,Zn,3,4)),i&2){let e=d(6);r(),y(e.collapsed?1:2)}}function Yn(i,n){if(i&1){let e=D();t(0,`
            `),l(1,"a",9),_("click",function(){f(e);let a=d(3).$implicit,c=d(2);return g(c.to(a))})("mouseenter",function(){f(e);let a=d(5);return g(a.closeSubMenu())}),t(2,`
              `),x(3,Jn,3,1),m(4,"span",10),t(5,`
            `),s(),t(6,`
          `)}if(i&2){let e=d(3).$implicit;r(),S("sidebar-nav__item-disabled",e.disabled),Y("data-id",e._id),r(2),y(e._needIcon?3:-1),r(),p("innerHTML",e._text,ce),Y("title",e.text)}}function qn(i,n){}function Gn(i,n){if(i&1){let e=D();t(0,`
            `),l(1,"a",9),_("click",function(){f(e);let a=d(3).$implicit,c=d(2);return g(c.toggleOpen(a))})("mouseenter",function(a){f(e);let c=d(3).$implicit,h=d(2);return g(h.showSubMenu(a,c))}),t(2,`
              `),v(3,qn,0,0,"ng-template",12),t(4,`
              `),m(5,"span",10),t(6,`
              `),m(7,"i",13),t(8,`
            `),s(),t(9,`
          `)}if(i&2){let e=d(3).$implicit;d(2);let o=L(1);r(3),p("ngTemplateOutlet",o)("ngTemplateOutletContext",k(4,ve,e.icon)),r(2),p("innerHTML",e._text,ce),Y("title",e.text)}}function Kn(i,n){if(i&1&&(t(0,`
            `),m(1,"nz-badge",14),t(2,`
          `)),i&2){let e=d(3).$implicit;r(),p("nzCount",e.badge)("nzDot",e.badgeDot)("nzOverflowCount",e.badgeOverflowCount?e.badgeOverflowCount:9)}}function Xn(i,n){}function ei(i,n){if(i&1&&(t(0,`
            `),l(1,"ul"),t(2,`
              `),v(3,Xn,0,0,"ng-template",12),t(4,`
            `),s(),t(5,`
          `)),i&2){let e=d(3).$implicit;d(2);let o=L(4);r(),tt(nt("sidebar-nav sidebar-nav__sub sidebar-nav__depth",e._depth)),r(2),p("ngTemplateOutlet",o)("ngTemplateOutletContext",k(5,ve,e.children))}}function ti(i,n){if(i&1&&(t(0,`
        `),l(1,"li",8),t(2,`
          `),t(3,`
          `),x(4,Yn,7,6),x(5,Gn,10,6),x(6,Kn,3,3),x(7,ei,6,7),s(),t(8,`
      `)),i&2){let e=d(2).$implicit;r(),S("sidebar-nav__selected",e._selected)("sidebar-nav__open",e.open),r(3),y(e.children.length===0?4:-1),r(),y(e.children.length>0?5:-1),r(),y(e.badge?6:-1),r(),y(e.children.length>0?7:-1)}}function ni(i,n){if(i&1&&(t(0,`
      `),x(1,$n,3,0)(2,ti,9,8)),i&2){let e=d().$implicit;r(),y(e.render_type==="divider"?1:2)}}function ii(i,n){if(i&1&&(t(0,`
    `),x(1,ni,3,1)),i&2){let e=n.$implicit;r(),y(e._hidden!==!0?1:-1)}}function oi(i,n){if(i&1&&(t(0,`
  `),O(1,ii,2,1,null,null,H)),i&2){let e=n.$implicit;r(),A(e)}}function ai(i,n){if(i&1&&(t(0,`
      `),l(1,"li",15),t(2,`
        `),m(3,"span",16),t(4,`
      `),s(),t(5,`
    `)),i&2){let e=d().$implicit;r(3),p("innerHTML",e._text,ce)}}function ri(i,n){}function li(i,n){if(i&1&&(t(0,`
    `),x(1,ai,6,1),v(2,ri,0,0,"ng-template",12),t(3,`
  `)),i&2){let e=n.$implicit;d();let o=L(4);r(),y(e.group?1:-1),r(),p("ngTemplateOutlet",o)("ngTemplateOutletContext",k(3,ve,e.children))}}var at="sidebar-nav__floating-show",rt="sidebar-nav__floating",fe=class fe{doc=u(G);win=u(on);router=u(ne);render=u(Te);menuSrv=u(Ie);settings=u(M);cdr=u(ee);ngZone=u(Le);sanitizer=u(St);bodyEl;destroy$=u(Se);floatingEl;dir=u(Fe).valueSignal;list=[];disabledAcl=!1;autoCloseUnderPad=!0;recursivePath=!0;hideEmptyChildren=!0;set openStrictly(n){this.menuSrv.openStrictly=n}maxLevelIcon=3;select=new _t;get collapsed(){return this.settings.layout.collapsed}getLinkNode(n){return n=n.nodeName==="A"?n:n.parentNode,n.nodeName!=="A"?null:n}floatingClickHandle(n){n.stopPropagation();let e=this.getLinkNode(n.target);if(e==null)return!1;let o=+e.dataset.id;if(isNaN(o))return!1;let a;return this.menuSrv.visit(this.list,c=>{!a&&c._id===o&&(a=c)}),this.to(a),this.hideAll(),n.preventDefault(),!1}clearFloating(){this.floatingEl&&(this.floatingEl.removeEventListener("click",this.floatingClickHandle.bind(this)),this.floatingEl.parentNode?.removeChild(this.floatingEl))}genFloating(){this.clearFloating(),this.floatingEl=this.render.createElement("div"),this.floatingEl.classList.add(`${rt}-container`),this.floatingEl.addEventListener("click",this.floatingClickHandle.bind(this),!1),this.bodyEl.appendChild(this.floatingEl)}genSubNode(n,e){let o=`_sidebar-nav-${e._id}`,c=(e.badge?n.nextElementSibling.nextElementSibling:n.nextElementSibling).cloneNode(!0);return c.id=o,c.classList.add(rt),c.addEventListener("mouseleave",()=>{c.classList.remove(at)},!1),this.floatingEl.appendChild(c),c}hideAll(){this.floatingEl.querySelectorAll(`.${rt}`).forEach(e=>e.classList.remove(at))}calPos(n,e){let o=n.getBoundingClientRect(),a=Math.max(this.doc.documentElement.scrollTop,this.bodyEl.scrollTop),c=Math.max(this.doc.documentElement.clientHeight,this.bodyEl.clientHeight),h=5,b=-h;c<o.top+e.clientHeight&&(b=o.top+e.clientHeight-c+h),e.style.top=`${o.top+a-b}px`,this.dir()==="rtl"?e.style.right=`${o.width+h}px`:e.style.left=`${o.right+h}px`}showSubMenu(n,e){if(this.collapsed!==!0)return;n.preventDefault();let o=n.target;this.genFloating();let a=this.genSubNode(o,e);this.hideAll(),a.classList.add(at),this.calPos(o,a)}to(n){if(this.select.emit(n),!n.disabled){if(n.externalLink){n.target==="_blank"?this.win.open(n.externalLink):this.win.location.href=n.externalLink;return}this.ngZone.run(()=>this.router.navigateByUrl(n.link))}}toggleOpen(n){this.menuSrv.toggleOpen(n)}_click(){this.isPad&&this.collapsed&&(this.openAside(!1),this.hideAll())}closeSubMenu(){this.collapsed&&this.hideAll()}openByUrl(n){let{menuSrv:e,recursivePath:o}=this;this.menuSrv.open(e.find({url:n,recursive:o}))}ngOnInit(){let{doc:n,router:e,menuSrv:o,settings:a,cdr:c}=this;this.bodyEl=n.querySelector("body"),o.change.pipe(z(this.destroy$)).subscribe(h=>{o.visit(h,(b,eo,Nn)=>{b._text=this.sanitizer.bypassSecurityTrustHtml(b.text),b._needIcon=Nn<=this.maxLevelIcon&&!!b.icon,b._aclResult||(this.disabledAcl?b.disabled=!0:b._hidden=!0);let de=b.icon;de&&de.type==="svg"&&typeof de.value=="string"&&(de.value=this.sanitizer.bypassSecurityTrustHtml(de.value))}),this.hideEmptyChildren&&this.fixHide(h),this.list=h.filter(b=>b._hidden!==!0),c.detectChanges()}),e.events.pipe(z(this.destroy$)).subscribe(h=>{h instanceof ke&&(this.openByUrl(h.urlAfterRedirects),this.underPad(),this.cdr.detectChanges())}),a.notify.pipe(z(this.destroy$),De(h=>h.type==="layout"&&h.name==="collapsed")).subscribe(()=>this.clearFloating()),this.underPad(),this.openByUrl(e.url),this.ngZone.runOutsideAngular(()=>this.genFloating())}fixHide(n){let e=o=>{for(let a of o)a.children&&a.children.length>0&&(e(a.children),a._hidden||(a._hidden=a.children.every(c=>c._hidden)))};e(n)}ngOnDestroy(){this.clearFloating()}get isPad(){return this.doc.defaultView.innerWidth<768}underPad(){this.autoCloseUnderPad&&this.isPad&&!this.collapsed&&setTimeout(()=>this.openAside(!0))}openAside(n){this.settings.setLayout("collapsed",n)}static \u0275fac=function(e){return new(e||fe)};static \u0275cmp=C({type:fe,selectors:[["layout-default-nav"]],hostVars:2,hostBindings:function(e,o){e&1&&_("click",function(){return o._click()})("click",function(){return o.closeSubMenu()},ut),e&2&&S("d-block",!0)},inputs:{disabledAcl:[2,"disabledAcl","disabledAcl",T],autoCloseUnderPad:[2,"autoCloseUnderPad","autoCloseUnderPad",T],recursivePath:[2,"recursivePath","recursivePath",T],hideEmptyChildren:[2,"hideEmptyChildren","hideEmptyChildren",T],openStrictly:[2,"openStrictly","openStrictly",T],maxLevelIcon:[2,"maxLevelIcon","maxLevelIcon",ht]},outputs:{select:"select"},standalone:!1,decls:11,vars:0,consts:[["icon",""],["tree",""],[1,"sidebar-nav"],[1,"sidebar-nav__item-icon",3,"nzType","nzTheme","nzSpin","nzTwotoneColor","nzIconfont","nzRotate"],[1,"sidebar-nav__item-icon",3,"nzIconfont"],[1,"sidebar-nav__item-icon","sidebar-nav__item-img",3,"src"],[1,"sidebar-nav__item-icon","sidebar-nav__item-svg",3,"innerHTML"],[1,"sidebar-nav__divider"],[1,"sidebar-nav__item"],[1,"sidebar-nav__item-link",3,"click","mouseenter"],[1,"sidebar-nav__item-text",3,"innerHTML"],["nz-tooltip","","nzTooltipPlacement","right",3,"nzTooltipTitle"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"sidebar-nav__sub-arrow"],["nzStandalone","",3,"nzCount","nzDot","nzOverflowCount"],[1,"sidebar-nav__item","sidebar-nav__group-title"],[3,"innerHTML"]],template:function(e,o){e&1&&(v(0,Un,2,1,"ng-template",null,0,R),t(2,`
`),v(3,oi,3,0,"ng-template",null,1,R),t(5,`
`),l(6,"ul",2),t(7,`
  `),O(8,li,4,5,null,null,H),s(),t(10,`
`)),e&2&&(r(8),A(o.list))},dependencies:[te,Ue,I,an],encapsulation:2,changeDetection:0})};pe([_e()],fe.prototype,"showSubMenu",1);var ge=fe;var En=i=>({$implicit:i});function di(i,n){i&1&&V(0)}function pi(i,n){if(i&1&&(t(0,`
        `),l(1,"li"),t(2,`
          `),v(3,di,1,0,"ng-container",5),t(4,`
        `),s(),t(5,`
      `)),i&2){let e=n.$implicit;r(),S("hidden-mobile",e.hidden==="mobile")("hidden-pc",e.hidden==="pc"),r(2),p("ngTemplateOutlet",e.host)}}function ci(i,n){if(i&1&&(t(0,`
      `),O(1,pi,6,5,null,null,H)),i&2){let e=n.$implicit;r(),A(e)}}function mi(i,n){i&1&&V(0)}function ui(i,n){if(i&1&&(t(0,`
        `),v(1,mi,1,0,"ng-container",5),t(2,`
      `)),i&2){let e=d();r(),p("ngTemplateOutlet",e.opt.logo)}}function _i(i,n){if(i&1&&(t(0,`
        `),l(1,"a",6),t(2,`
          `),m(3,"img",7),t(4,`
          `),m(5,"img",8),t(6,`
        `),s(),t(7,`
      `)),i&2){let e=d();r(),p("routerLink",e.opt.logoLink),r(2),Y("src",e.opt.logoExpanded,me)("alt",e.app.name),r(2),Y("src",e.opt.logoCollapsed,me)("alt",e.app.name)}}function fi(i,n){if(i&1){let e=D();t(0,`
          `),l(1,"li"),t(2,`
            `),l(3,"div",9),_("click",function(){f(e);let a=d();return g(a.toggleCollapsed())}),t(4,`
              `),m(5,"nz-icon",10),t(6,`
            `),s(),t(7,`
          `),s(),t(8,`
        `)}if(i&2){let e=d();r(5),p("nzType",e.collapsedIcon)}}function gi(i,n){}function vi(i,n){i&1&&V(0)}function xi(i,n){if(i&1&&(t(0,`
        `),l(1,"div",11),t(2,`
          `),v(3,vi,1,0,"ng-container",5),t(4,`
        `),s(),t(5,`
      `)),i&2){let e=d();r(3),p("ngTemplateOutlet",e.middle[0].host)}}function yi(i,n){}var xe=class i{settings=u(M);srv=u(J);cdr=u(ee);destroy$=u(Se);items;left=[];middle=[];right=[];get opt(){return this.srv.options}get app(){return this.settings.app}get collapsed(){return this.settings.layout.collapsed}get collapsedIcon(){return this.srv.collapsedIcon}refresh(){let n=this.items.toArray();this.left=n.filter(e=>e.direction==="left"),this.middle=n.filter(e=>e.direction==="middle"),this.right=n.filter(e=>e.direction==="right"),this.cdr.detectChanges()}ngAfterViewInit(){this.items.changes.pipe(z(this.destroy$)).subscribe(()=>this.refresh()),this.srv.options$.pipe(z(this.destroy$)).subscribe(()=>this.cdr.detectChanges()),this.refresh()}toggleCollapsed(){this.srv.toggleCollapsed()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["layout-default-header"]],hostVars:2,hostBindings:function(e,o){e&2&&S("alain-default__header",!0)},inputs:{items:"items"},standalone:!1,decls:24,vars:13,consts:[["render",""],[1,"alain-default__header-logo"],[1,"alain-default__nav-wrap"],[1,"alain-default__nav"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],[1,"alain-default__header-logo-link",3,"routerLink"],[1,"alain-default__header-logo-expanded"],[1,"alain-default__header-logo-collapsed"],[1,"alain-default__nav-item","alain-default__nav-item--collapse",3,"click"],[3,"nzType"],[1,"alain-default__nav","alain-default__nav-middle"]],template:function(e,o){if(e&1&&(t(0,`
    `),v(1,ci,3,0,"ng-template",null,0,R),t(3,`
    `),l(4,"div",1),t(5,`
      `),x(6,ui,3,1)(7,_i,8,5),s(),t(8,`
    `),l(9,"div",2),t(10,`
      `),l(11,"ul",3),t(12,`
        `),x(13,fi,9,1),v(14,gi,0,0,"ng-template",4),t(15,`
      `),s(),t(16,`
      `),x(17,xi,6,1),l(18,"ul",3),t(19,`
        `),v(20,yi,0,0,"ng-template",4),t(21,`
      `),s(),t(22,`
    `),s(),t(23,`
  `)),e&2){let a=L(2);r(4),vt("width",o.opt.logoFixWidth,"px"),r(2),y(o.opt.logo?6:7),r(7),y(!o.opt.hideAside&&o.opt.showHeaderCollapse?13:-1),r(),p("ngTemplateOutlet",a)("ngTemplateOutletContext",k(9,En,o.left)),r(3),y(o.middle.length>0?17:-1),r(3),p("ngTemplateOutlet",a)("ngTemplateOutletContext",k(11,En,o.right))}},dependencies:[te,Mt,I],encapsulation:2,changeDetection:0})};var hi=["*"];function Di(i,n){i&1&&(t(0,`
      `),m(1,"div",2),t(2,`
    `))}function bi(i,n){if(i&1&&(t(0,`
      `),m(1,"layout-default-header",3),t(2,`
    `)),i&2){let e=d();r(),p("items",e.headerItems)}}function Si(i,n){i&1&&V(0)}function Ti(i,n){i&1&&V(0)}function wi(i,n){i&1&&(t(0,`
              `),m(1,"layout-default-nav"),t(2,`
            `))}function Li(i,n){i&1&&V(0)}function zi(i,n){if(i&1&&(t(0,`
                `),v(1,Li,1,0,"ng-container",1),t(2,`
              `)),i&2){let e=d(3);r(),p("ngTemplateOutlet",e.asideBottom)}}function Ei(i,n){if(i&1){let e=D();t(0,`
                `),l(1,"div",8),_("click",function(){f(e);let a=d(3);return g(a.toggleCollapsed())}),t(2,`
                  `),m(3,"nz-icon",9),t(4,`
                `),s(),t(5,`
              `)}if(i&2){let e=d(3);r(3),p("nzType",e.collapsedIcon)}}function Mi(i,n){if(i&1&&(t(0,`
            `),l(1,"div",7),t(2,`
              `),x(3,zi,3,1)(4,Ei,6,1),s(),t(5,`
          `)),i&2){let e=d(2);r(3),y(e.asideBottom?3:4)}}function Ni(i,n){if(i&1&&(t(0,`
      `),l(1,"div",4),t(2,`
        `),l(3,"div",5),t(4,`
          `),l(5,"div",6),t(6,`
            `),v(7,Si,1,0,"ng-container",1),t(8,`
            `),v(9,Ti,1,0,"ng-container",1),t(10,`
            `),x(11,wi,3,0),s(),t(12,`
          `),x(13,Mi,6,1),s(),t(14,`
      `),s(),t(15,`
    `)),i&2){let e=d();r(7),p("ngTemplateOutlet",e.asideUser),r(2),p("ngTemplateOutlet",e.nav),r(2),y(e.nav?-1:11),r(2),y(e.opt.showSiderCollapse?13:-1)}}function ki(i,n){i&1&&V(0)}var ye=class i{headerItems;get opt(){return this.srv.options}set options(n){this.srv.setOptions(n)}asideUser=null;asideBottom=null;nav=null;content=null;customError;fetchingStrictly=!1;fetching=!1;isFetching=!1;get showFetching(){return this.fetchingStrictly?this.fetching:this.isFetching}get collapsed(){return this.settings.layout.collapsed}get collapsedIcon(){return this.srv.collapsedIcon}toggleCollapsed(){this.srv.toggleCollapsed()}router=u(ne);msgSrv=u(Z);settings=u(M);el=u(mt);renderer=u(Te);doc=u(G);srv=u(J);constructor(){this.router.events.pipe(z(),De(()=>!this.fetchingStrictly)).subscribe(n=>this.processEv(n)),this.srv.options$.pipe(z()).subscribe(()=>this.setClass()),this.settings.notify.pipe(z()).subscribe(()=>this.setClass())}processEv(n){if(!this.isFetching&&n instanceof wt&&(this.isFetching=!0),n instanceof it||n instanceof Tt){this.isFetching=!1;let e=this.customError===null?null:this.customError??`Could not load ${n.url} route`;e&&n instanceof it&&this.msgSrv.error(e,{nzDuration:1e3*3});return}(n instanceof ke||n instanceof Lt)&&this.isFetching&&setTimeout(()=>{this.isFetching=!1},100)}setClass(){let{el:n,doc:e,renderer:o,settings:a}=this,c=a.layout;nn(n.nativeElement,o,{"alain-default":!0,"alain-default__fixed":c.fixed,"alain-default__collapsed":c.collapsed,"alain-default__hide-aside":this.opt.hideAside,"alain-default__hide-header":this.opt.hideHeader}),e.body.classList[c.colorWeak?"add":"remove"]("color-weak")}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["layout-default"]],contentQueries:function(e,o,a){if(e&1&&ft(a,q,4),e&2){let c;ze(c=Ee())&&(o.headerItems=c)}},inputs:{options:"options",asideUser:"asideUser",asideBottom:"asideBottom",nav:"nav",content:"content",customError:"customError",fetchingStrictly:[2,"fetchingStrictly","fetchingStrictly",T],fetching:[2,"fetching","fetching",T]},exportAs:["layoutDefault"],standalone:!1,ngContentSelectors:hi,decls:11,vars:4,consts:[[1,"alain-default__content"],[4,"ngTemplateOutlet"],[1,"alain-default__progress-bar"],[3,"items"],[1,"alain-default__aside"],[1,"alain-default__aside-wrap"],[1,"alain-default__aside-inner"],[1,"alain-default__aside-link"],[1,"alain-default__aside-link-collapsed",3,"click"],[3,"nzType"]],template:function(e,o){e&1&&(K(),t(0,`
    `),x(1,Di,3,0),x(2,bi,3,1),x(3,Ni,16,4),l(4,"section",0),t(5,`
      `),v(6,ki,1,0,"ng-container",1),t(7,`
      `),X(8),t(9,`
    `),s(),t(10,`
  `)),e&2&&(r(),y(o.showFetching?1:-1),r(),y(o.opt.hideHeader?-1:2),r(),y(o.opt.hideAside?-1:3),r(3),p("ngTemplateOutlet",o.content))},dependencies:[te,I,ge,xe],encapsulation:2})};var Fi=["*"],Ce=class i{selected=!1;disabled=!1;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["layout-default-top-menu-item"]],hostVars:8,hostBindings:function(e,o){e&2&&S("alain-default__nav-item",!0)("alain-default__top-menu-item",!0)("alain-default__top-menu-item-selected",o.selected)("alain-default__top-menu-item-disabled",o.disabled)},inputs:{selected:[2,"selected","selected",T],disabled:[2,"disabled","disabled",T]},standalone:!1,ngContentSelectors:Fi,decls:1,vars:0,template:function(e,o){e&1&&(K(),X(0))},encapsulation:2,changeDetection:0})};var Ye=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=we({type:i});static \u0275inj=be({imports:[bt,Nt,ln,He,je,$e,rn]})};var qe=class i{srv=u(J);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["dev-home"]],decls:34,vars:4,consts:[[3,"autoBreadcrumb"],[1,"mb-md"],["nz-button","",3,"click"]],template:function(e,o){e&1&&(t(0,`
    `),m(1,"page-header",0),t(2,`
    home
    `),l(3,"div",1),t(4),B(5,"json"),s(),t(6,`
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
  `)),e&2&&(r(),p("autoBreadcrumb",!1),r(3),N(" options: ",P(5,2,o.srv.options)," "))},dependencies:[Ze,Qe,ae,Q,ie,oe,Ne],encapsulation:2})};var st=()=>({standalone:!0});function Bi(i,n){if(i&1){let e=D();t(0,`
    `),l(1,"input",1),j("ngModelChange",function(a){f(e);let c=d();return W(c.i.value,a)||(c.i.value=a),g(a)}),s(),t(2,`
  `)}if(i&2){let e=d();r(),$("ngModel",e.i.value),p("ngModelOptions",Me(2,st))}}function Pi(i,n){if(i&1){let e=D();t(0,`
    `),l(1,"input",2),j("ngModelChange",function(a){f(e);let c=d();return W(c.i.value,a)||(c.i.value=a),g(a)}),s(),t(2,`
  `)}if(i&2){let e=d();r(),$("ngModel",e.i.value),p("ngModelOptions",Me(2,st))}}function Ri(i,n){if(i&1){let e=D();t(0,`
    `),l(1,"nz-input-number",3),j("ngModelChange",function(a){f(e);let c=d();return W(c.pxVal,a)||(c.pxVal=a),g(a)}),_("ngModelChange",function(a){f(e);let c=d();return g(c.pxChange(a))}),s(),t(2,`
  `)}if(i&2){let e=d();r(),$("ngModel",e.pxVal),p("nzMin",e.i.min)("nzMax",e.i.max)("nzStep",e.i.step||2)("nzFormatter",e.format)}}function Ui(i,n){if(i&1){let e=D();t(0,`
    `),l(1,"nz-switch",4),j("ngModelChange",function(a){f(e);let c=d();return W(c.i.value,a)||(c.i.value=a),g(a)}),s(),t(2,`
  `)}if(i&2){let e=d();r(),$("ngModel",e.i.value),p("ngModelOptions",Me(2,st))}}function $i(i,n){}function Wi(i,n){i&1&&(t(0,`
    `),v(1,$i,0,0,"ng-template",5),t(2,`
  `))}var re=class i{i={};set data(n){this.i=n,n.type==="px"&&(this.pxVal=+n.value.replace("px",""))}pxVal=0;pxChange(n){this.i.value=`${n}px`}format=n=>`${n} px`;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["setting-drawer-item"]],hostVars:2,hostBindings:function(e,o){e&2&&S("setting-drawer__body-item",!0)},inputs:{data:"data"},decls:12,vars:3,consts:[[1,"pl-sm","text-grey"],["nz-input","","type","color",2,"width","88px",3,"ngModelChange","ngModel","ngModelOptions"],["nz-input","",2,"width","88px",3,"ngModelChange","ngModel","ngModelOptions"],[3,"ngModelChange","ngModel","nzMin","nzMax","nzStep","nzFormatter"],["nzSize","small",3,"ngModelChange","ngModel","ngModelOptions"],["nzDrawerContent",""]],template:function(e,o){if(e&1&&(l(0,"span"),t(1),l(2,"span",0),t(3),s(),t(4,`
`),s(),t(5,`
`),x(6,Bi,3,3)(7,Pi,3,3)(8,Ri,3,5)(9,Ui,3,3)(10,Wi,3,0),t(11,`
`)),e&2){let a;r(),N(`
  `,o.i.label,`
  `),r(2),U(o.i.tip),r(3),y((a=o.i.type)==="color"?6:a==="input"?7:a==="px"?8:a==="switch"?9:10)}},dependencies:[Re,Xt,Be,Pe,Cn,hn,We,Ve,Ae],encapsulation:2})};var Ge="alain-default-vars",Mn=[{key:"dust",color:"#F5222D"},{key:"volcano",color:"#FA541C"},{key:"sunset",color:"#FAAD14"},{key:"cyan",color:"#13C2C2"},{key:"green",color:"#52C41A"},{key:"daybreak",color:"#1890ff"},{key:"geekblue",color:"#2F54EB"},{key:"purple",color:"#722ED1"},{key:"black",color:"#001529"}],he={"primary-color":{label:"\u4E3B\u989C\u8272",type:"color",default:"#1890ff"},"alain-default-header-hg":{label:"\u9AD8",type:"px",default:"64px",max:300,min:24},"alain-default-header-bg":{label:"\u80CC\u666F\u8272",type:"color",default:"@primary-color",tip:"\u9ED8\u8BA4\u540C\u4E3B\u8272\u7CFB"},"alain-default-header-padding":{label:"\u9876\u90E8\u5DE6\u53F3\u5185\u8FB9\u8DDD",type:"px",default:"16px"},"alain-default-aside-wd":{label:"\u5BBD\u5EA6",type:"px",default:"200px"},"alain-default-aside-bg":{label:"\u80CC\u666F",type:"color",default:"#ffffff"},"alain-default-aside-collapsed-wd":{label:"\u6536\u7F29\u5BBD\u5EA6",type:"px",default:"64px"},"alain-default-aside-nav-padding-top-bottom":{label:"\u9879\u4E0A\u4E0B\u5185\u8FB9\u8DDD",type:"px",default:"8px",step:8},"alain-default-aside-nav-fs":{label:"\u83DC\u5355\u5B57\u53F7",type:"px",default:"14px",min:14,max:30},"alain-default-aside-collapsed-nav-fs":{label:"\u6536\u7F29\u83DC\u5355\u5B57\u53F7",type:"px",default:"24px",min:24,max:32},"alain-default-aside-nav-item-height":{label:"\u83DC\u5355\u9879\u9AD8\u5EA6",type:"px",default:"38px",min:24,max:64},"alain-default-aside-nav-text-color":{label:"\u83DC\u5355\u6587\u672C\u989C\u8272",type:"color",default:"rgba(0, 0, 0, 0.65)",rgba:!0},"alain-default-aside-nav-text-hover-color":{label:"\u83DC\u5355\u6587\u672C\u60AC\u505C\u989C\u8272",type:"color",default:"@primary-color",tip:"\u9ED8\u8BA4\u540C\u4E3B\u8272\u7CFB"},"alain-default-aside-nav-group-text-color":{label:"\u83DC\u5355\u5206\u7EC4\u6587\u672C\u989C\u8272",type:"color",default:"rgba(0, 0, 0, 0.43)",rgba:!0},"alain-default-aside-nav-selected-text-color":{label:"\u83DC\u5355\u6FC0\u6D3B\u65F6\u6587\u672C\u989C\u8272",type:"color",default:"@primary-color",tip:"\u9ED8\u8BA4\u540C\u4E3B\u8272\u7CFB"},"alain-default-aside-nav-selected-bg":{label:"\u83DC\u5355\u6FC0\u6D3B\u65F6\u80CC\u666F\u989C\u8272",type:"color",default:"#fcfcfc"},"alain-default-content-bg":{label:"\u80CC\u666F\u8272",type:"color",default:"#f5f7fa"},"alain-default-content-heading-bg":{label:"\u6807\u9898\u80CC\u666F\u8272",type:"color",default:"#fafbfc"},"alain-default-content-heading-border":{label:"\u6807\u9898\u5E95\u90E8\u8FB9\u6846\u8272",type:"color",default:"#efe3e5"},"alain-default-content-padding":{label:"\u5185\u8FB9\u8DDD",type:"px",default:"24px",min:0,max:128,step:8},"form-state-visual-feedback-enabled":{label:"\u5F00\u542F\u8868\u5355\u5143\u7D20\u7684\u89C6\u89C9\u53CD\u9988",type:"switch",default:!0},"preserve-white-spaces-enabled":{label:"\u5F00\u542F preserveWhitespaces",type:"switch",default:!0},"nz-table-img-radius":{label:"\u8868\u683C\u4E2D\uFF1A\u56FE\u7247\u5706\u89D2",type:"px",default:"4px",min:0,max:128},"nz-table-img-margin-right":{label:"\u8868\u683C\u4E2D\uFF1A\u56FE\u7247\u53F3\u5916\u8FB9\u8DDD",type:"px",default:"4px",min:0,max:128},"nz-table-img-max-width":{label:"\u8868\u683C\u4E2D\uFF1A\u56FE\u7247\u6700\u5927\u5BBD\u5EA6",type:"px",default:"32px",min:8,max:128},"nz-table-img-max-height":{label:"\u8868\u683C\u4E2D\uFF1A\u56FE\u7247\u6700\u5927\u9AD8\u5EA6",type:"px",default:"32px",min:8,max:128}};var ji=i=>({"background-color":i});function Qi(i,n){i&1&&(t(0,`
            `),m(1,"nz-icon",19),t(2,`
          `))}function Zi(i,n){if(i&1){let e=D();t(0,`
        `),l(1,"span",18),_("click",function(){let a=f(e).$implicit,c=d(2);return g(c.changeColor(a.color))}),t(2,`
          `),x(3,Qi,3,0),s(),t(4,`
      `)}if(i&2){let e=n.$implicit,o=d(2);r(),xt(k(4,ji,e.color)),p("nzTooltipTitle",e.key),r(2),y(o.color===e.color?3:-1)}}function Ji(i,n){if(i&1){let e=D();l(0,"div",4),t(1,`
    `),l(2,"div",5),t(3,`
      `),l(4,"h3",6),t(5,"\u4E3B\u9898\u8272"),s(),t(6,`
      `),O(7,Zi,5,6,null,null,H),s(),t(9,`
    `),m(10,"nz-divider"),t(11,`
    `),l(12,"div",7),t(13,`
      `),l(14,"h3",6),t(15,"\u8BBE\u7F6E"),s(),t(16,`
      `),l(17,"nz-tabs"),t(18,`
        `),l(19,"nz-tab",8),t(20,`
          `),l(21,"div",7),t(22,`
            `),m(23,"setting-drawer-item",9),t(24,`
            `),m(25,"setting-drawer-item",9),t(26,`
            `),m(27,"setting-drawer-item",9),t(28,`
          `),s(),t(29,`
        `),s(),t(30,`
        `),l(31,"nz-tab",10),t(32,`
          `),m(33,"setting-drawer-item",9),t(34,`
          `),m(35,"setting-drawer-item",9),t(36,`
          `),m(37,"setting-drawer-item",9),t(38,`
          `),m(39,"setting-drawer-item",9),t(40,`
        `),s(),t(41,`
        `),l(42,"nz-tab",11),t(43,`
          `),m(44,"setting-drawer-item",9),t(45,`
          `),m(46,"setting-drawer-item",9),t(47,`
          `),m(48,"setting-drawer-item",9),t(49,`
          `),m(50,"setting-drawer-item",9),t(51,`
        `),s(),t(52,`
        `),l(53,"nz-tab",12),t(54,`
          `),m(55,"setting-drawer-item",9),t(56,`
          `),m(57,"setting-drawer-item",9),t(58,`
          `),m(59,"setting-drawer-item",9),t(60,`
          `),m(61,"setting-drawer-item",9),t(62,`
          `),m(63,"setting-drawer-item",9),t(64,`
          `),m(65,"setting-drawer-item",9),t(66,`
        `),s(),t(67,`
      `),s(),t(68,`
    `),s(),t(69,`
    `),m(70,"nz-divider"),t(71,`
    `),l(72,"div",7),t(73,`
      `),l(74,"div",13),t(75,`
        \u56FA\u5B9A\u5934\u548C\u4FA7\u8FB9\u680F
        `),l(76,"nz-switch",14),j("ngModelChange",function(a){f(e);let c=d();return W(c.layout.fixed,a)||(c.layout.fixed=a),g(a)}),_("ngModelChange",function(){f(e);let a=d();return g(a.setLayout("fixed",a.layout.fixed))}),s(),t(77,`
      `),s(),t(78,`
      `),l(79,"div",13),t(80,`
        \u8272\u5F31\u6A21\u5F0F
        `),l(81,"nz-switch",14),j("ngModelChange",function(a){f(e);let c=d();return W(c.layout.colorWeak,a)||(c.layout.colorWeak=a),g(a)}),_("ngModelChange",function(){f(e);let a=d();return g(a.setLayout("colorWeak",a.layout.colorWeak))}),s(),t(82,`
      `),s(),t(83,`
    `),s(),t(84,`
    `),m(85,"nz-divider"),t(86,`
    `),l(87,"button",15),_("click",function(){f(e);let a=d();return g(a.apply())}),t(88,"\u9884\u89C8"),s(),t(89,`
    `),l(90,"button",16),_("click",function(){f(e);let a=d();return g(a.reset())}),t(91,"\u91CD\u7F6E"),s(),t(92,`
    `),l(93,"button",16),_("click",function(){f(e);let a=d();return g(a.copyVar())}),t(94,"\u62F7\u8D1D"),s(),t(95,`
    `),m(96,"nz-alert",17),t(97,`
  `),s()}if(i&2){let e=d();r(7),A(e.colors),r(16),p("data",e.data["alain-default-header-hg"]),r(2),p("data",e.data["alain-default-header-bg"]),r(2),p("data",e.data["alain-default-header-padding"]),r(6),p("data",e.data["alain-default-aside-wd"]),r(2),p("data",e.data["alain-default-aside-bg"]),r(2),p("data",e.data["alain-default-aside-collapsed-wd"]),r(2),p("data",e.data["alain-default-aside-nav-padding-top-bottom"]),r(5),p("data",e.data["alain-default-content-bg"]),r(2),p("data",e.data["alain-default-content-heading-bg"]),r(2),p("data",e.data["alain-default-content-heading-border"]),r(2),p("data",e.data["alain-default-content-padding"]),r(5),p("data",e.data["form-state-visual-feedback-enabled"]),r(2),p("data",e.data["preserve-white-spaces-enabled"]),r(2),p("data",e.data["nz-table-img-radius"]),r(2),p("data",e.data["nz-table-img-margin-right"]),r(2),p("data",e.data["nz-table-img-max-width"]),r(2),p("data",e.data["nz-table-img-max-height"]),r(11),$("ngModel",e.layout.fixed),r(5),$("ngModel",e.layout.colorWeak)}}var le=class le{cdr=u(ee);msg=u(Z);settingSrv=u(M);lazy=u(kt);ngZone=u(Le);doc=u(G);autoApplyColor=!0;compilingText="Compiling...";devTips="When the color can't be switched, you need to run it once: npm run color-less";lessJs="https://cdn.jsdelivr.net/npm/less";loadedLess=!1;dir=u(Fe).valueSignal;isDev=Ct();collapse=!1;get layout(){return this.settingSrv.layout}data={};color;colors=Mn;constructor(){this.color=this.cachedData["@primary-color"]||this.DEFAULT_PRIMARY,this.resetData(this.cachedData,!1)}get cachedData(){return this.settingSrv.layout[Ge]||{}}get DEFAULT_PRIMARY(){return he["primary-color"].default}ngOnInit(){this.autoApplyColor&&this.color!==this.DEFAULT_PRIMARY&&(this.changeColor(this.color),this.runLess())}loadLess(){return dt(this,null,function*(){return this.loadedLess?Promise.resolve():this.lazy.loadStyle("./assets/color.less",{rel:"stylesheet/less"}).then(()=>{let n=this.doc.createElement("script");n.innerHTML=`
          window.less = {
            async: true,
            env: 'production',
            javascriptEnabled: true
          };
        `,this.doc.body.appendChild(n)}).then(()=>this.lazy.loadScript(this.lessJs)).then(()=>{this.loadedLess=!0})})}genVars(){let{data:n,color:e,validKeys:o}=this,a={"@primary-color":e};return o.filter(c=>c!=="primary-color").forEach(c=>a[`@${c}`]=n[c].value),this.setLayout(Ge,a),a}runLess(){let{ngZone:n,msg:e,cdr:o}=this,a=e.loading(this.compilingText,{nzDuration:0}).messageId;setTimeout(()=>{this.loadLess().then(()=>{window.less.modifyVars(this.genVars()).then(()=>{e.success("\u6210\u529F"),e.remove(a),n.run(()=>o.detectChanges())})})},200)}toggle(){this.collapse=!this.collapse}changeColor(n){this.color=n,Object.keys(he).filter(e=>he[e].default==="@primary-color").forEach(e=>delete this.cachedData[`@${e}`]),this.resetData(this.cachedData,!1)}setLayout(n,e){this.settingSrv.setLayout(n,e)}resetData(n,e=!0){n=n||{};let o=ue(he);Object.keys(o).forEach(a=>{let c=n[`@${a}`]||o[a].default||"";o[a].value=c==="@primary-color"?this.color:c}),this.data=o,e&&(this.cdr.detectChanges(),this.runLess())}get validKeys(){return Object.keys(this.data).filter(n=>this.data[n].value!==this.data[n].default)}apply(){this.runLess()}reset(){this.color=this.DEFAULT_PRIMARY,this.settingSrv.setLayout(Ge,{}),this.resetData({})}copyVar(){let n=this.genVars(),e=Object.keys(n).map(o=>`${o}: ${n[o]};`).join(`
`);tn(e),this.msg.success("Copy success")}static \u0275fac=function(e){return new(e||le)};static \u0275cmp=C({type:le,selectors:[["setting-drawer"]],hostVars:4,hostBindings:function(e,o){e&2&&S("setting-drawer",!0)("setting-drawer-rtl",o.dir()==="rtl")},inputs:{autoApplyColor:[2,"autoApplyColor","autoApplyColor",T],compilingText:"compilingText",devTips:"devTips",lessJs:"lessJs"},decls:10,vars:7,consts:[[3,"nzOnClose","nzVisible","nzPlacement","nzWidth"],["class","setting-drawer__content",4,"nzDrawerContent"],["nz-tooltip","",1,"setting-drawer__handle",3,"click","nzTooltipTitle"],[1,"setting-drawer__handle-icon",3,"nzType"],[1,"setting-drawer__content"],[1,"setting-drawer__body","setting-drawer__theme"],[1,"setting-drawer__title"],[1,"setting-drawer__body"],["nzTitle","\u9876\u90E8"],[3,"data"],["nzTitle","\u4FA7\u8FB9\u680F"],["nzTitle","\u5185\u5BB9"],["nzTitle","\u5176\u5B83"],[1,"setting-drawer__body-item"],["nzSize","small",3,"ngModelChange","ngModel"],["type","button","nz-button","","nzType","primary",3,"click"],["type","button","nz-button","",3,"click"],["nzType","warning","nzMessage","\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u53C2\u6570\u914D\u7F6E\u6587\u4EF6 src/styles/theme.less",1,"mt-md"],["nz-tooltip","",1,"setting-drawer__theme-tag",3,"click","nzTooltipTitle"],["nzType","check"]],template:function(e,o){e&1&&(l(0,"nz-drawer",0),_("nzOnClose",function(){return o.toggle()}),t(1,`
  `),v(2,Ji,98,19,"div",1),t(3,`
`),s(),t(4,`
`),l(5,"div",2),_("click",function(){return o.toggle()}),t(6,`
  `),m(7,"nz-icon",3),t(8,`
`),s(),t(9,`
`)),e&2&&(p("nzVisible",o.collapse)("nzPlacement",o.dir()==="rtl"?"left":"right")("nzWidth",500),r(5),S("setting-drawer__handle-opened",o.collapse),p("nzTooltipTitle",o.isDev?o.devTips:null),r(2),p("nzType",o.collapse?"close":"setting"))},dependencies:[Re,Be,Pe,Ve,Kt,Ae,Ue,I,yn,xn,fn,_n,un,re,Dn,We,Q,bn],encapsulation:2,changeDetection:0})};pe([_e()],le.prototype,"loadLess",1),pe([_e()],le.prototype,"runLess",1);var se=le;var qi=[re,se],Ke=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=we({type:i});static \u0275inj=be({imports:[qi]})};function Gi(i,n){if(i&1){let e=D();t(0,`
          `),l(1,"layout-default-top-menu-item",12),_("click",function(){let a=f(e).$implicit,c=d();return g(c.changeMenu(a.key))}),t(2,`
            `),m(3,"nz-icon",6),t(4),s(),t(5,`
        `)}if(i&2){let e=n.$implicit;r(),p("selected",e.selected)("disabled",e.disabled),r(3),N(" ",e.label,`
          `)}}function Ki(i,n){if(i&1&&(t(0,`
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
      `)),i&2){let e=L(16),o=d();r(),p("nzDropdownMenu",e),r(2),p("nzSrc",o.user.avatar),r(5),U(o.user.name),r(3),U(o.user.email),r(10),U("menu.account.center"),r(3),U("menu.account.settings")}}var Xi=[jt,Wt,Zt,Jt,Vt,Bt,Ot,$t,Qt,Yt,Ut,At,Pt,Rt,Ht],Xe=class i{menuSrv=u(Ie);router=u(ne);i18n=u(It);iconSrv=u(qt);rtl=u(Ft);settings=u(M);msgSrv=u(Z);options={logoExpanded:"./assets/logo-full.svg",logoCollapsed:"./assets/logo.svg",hideHeader:!1,showHeaderCollapse:!0,showSiderCollapse:!0};lang="zh-CN";get user(){return this.settings.user}topMenus=[{key:"",label:"Default",selected:!0},{key:"bus",label:"Bus",selected:!1},{key:"disabled",label:"Disabbled",disabled:!0}];menus=[{text:"test",group:!0,children:[{text:"Dashboard-DISABLED",link:"/dev/home",icon:"anticon anticon-dashboard",i18n:"app.header.menu.home",badge:5},{text:"\u6D4B\u8BD5view1-id",link:"/dev/view/1",icon:"anticon anticon-appstore"},{text:"\u6D4B\u8BD5view2-id",link:"/dev/view/2",icon:"anticon anticon-appstore"},{render_type:"divider"},{text:"lazy\u6D4B\u8BD51",link:"/dev/lazy/p1",icon:"anticon anticon-appstore"},{text:"lazy\u6D4B\u8BD52",link:"/dev/lazy/p2",icon:"anticon anticon-appstore"},{text:"lazy\u6D4B\u8BD5view1-id",link:"/dev/lazy/1/view",icon:"anticon anticon-appstore"},{text:"lazy\u6D4B\u8BD5view2-id",link:"/dev/lazy/2/view",icon:"anticon anticon-appstore"},{text:"Level1",link:"#",icon:"anticon anticon-appstore",children:[{text:"Level2",link:"#",children:[{text:"Level3A",link:"/dev/l1"},{render_type:"divider"},{text:"Level3B-DISABLED",link:"/dev/l1",disabled:!0}]},{render_type:"divider"},{text:"Level2-DISABLED",link:"/dev/l2",disabled:!0}]},{text:"ABC",icon:"anticon anticon-appstore",children:[{text:"Reuse Tab1",link:"/dev/l1",i18n:"app.header.menu.docs"},{text:"Reuse Tab2",link:"/dev/l2"},{text:"Reuse Tab3",link:"/dev/l3"},{text:"Reuse Tab4",link:"/dev/l4"},{text:"Reuse Tab5",link:"/dev/l5"},{text:"Reuse Tab6",link:"/dev/l6"},{text:"Reuse Tab7",link:"/dev/l7"},{text:"Ellipsis",link:"/dev/l8"}]},{text:"LIST",icon:"anticon anticon-appstore",children:[{text:"list",link:"/dev/list"},{text:"list/item",link:"/dev/list/item"}]}]}];customContextMenu=[{id:"custom1",title:"\u81EA\u5B9A\u4E491",fn:(n,e)=>{console.log("\u81EA\u5B9A\u4E491",n,e)}},{id:"custom2",title:"\u81EA\u5B9A\u4E492",disabled:()=>!0,fn:(n,e)=>{console.log("\u81EA\u5B9A\u4E492",n,e)}}];constructor(){this.iconSrv.addIcon(...Xi)}changeMenu(n){let e={text:"test",group:!0,children:[{text:`TYPE - ${n}`,link:"/dev/view/1",icon:"anticon anticon-appstore"}]};this.menuSrv.add(n===""?ue(this.menus):[e]);for(let o of this.topMenus)o.selected=o.key===n;this.loadFirstValidMenu()}toggleCollapsedSideabar(){this.settings.setLayout("collapsed",!this.settings.layout.collapsed)}toggleLang(){this.lang=this.lang==="zh-CN"?"en-US":"zh-CN",this.i18n.use(this.lang)}ngOnInit(){this.menuSrv.add(ue(this.menus))}loadFirstValidMenu(){let n;this.menuSrv.visit(this.menuSrv.menus,e=>{n==null&&e.hide!==!0&&e.link!=null&&e.link.length>0&&(n=e)}),n!=null&&this.router.navigateByUrl(n.link)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["dev-layout"]],hostVars:2,hostBindings:function(e,o){e&2&&S("alain-default",!0)},decls:40,vars:7,consts:[["asideUserTpl",""],["reuseTab",""],["userMenu","nzDropdownMenu"],[3,"options","asideUser"],["direction","left"],["href","//github.com/ng-alain/ng-alain","target","_blank",1,"alain-default__nav-item"],["nzType","github"],["direction","middle"],["direction","right"],[1,"alain-default__nav-item",3,"click"],[3,"mode","customContextMenu"],[3,"activate","attach"],[3,"click","selected","disabled"],["nz-dropdown","","nzTrigger","click",1,"alain-default__aside-user",3,"nzDropdownMenu"],[1,"alain-default__aside-user-avatar",3,"nzSrc"],[1,"alain-default__aside-user-info"],[1,"mb0"],["nz-menu",""],["nz-menu-item","","routerLink","/pro/account/center"],["nz-menu-item","","routerLink","/pro/account/settings"]],template:function(e,o){if(e&1){let a=D();t(0,`
    `),l(1,"layout-default",3),t(2,`
      `),l(3,"layout-default-header-item",4),t(4,`
        `),l(5,"a",5),t(6,`
          `),m(7,"nz-icon",6),t(8,`
        `),s(),t(9,`
      `),s(),t(10,`
      `),l(11,"layout-default-header-item",7),t(12,`
        `),O(13,Gi,6,3,null,null,H),s(),t(15,`
      `),l(16,"layout-default-header-item",8),t(17,`
        `),l(18,"a",9),_("click",function(){return f(a),g(o.rtl.toggle())}),t(19),B(20,"uppercase"),s(),t(21,`
      `),s(),t(22,`
      `),l(23,"layout-default-header-item",8),t(24,`
        `),l(25,"a",5),t(26," githbu "),s(),t(27,`
      `),s(),t(28,`
      `),v(29,Ki,28,6,"ng-template",null,0,R),t(31,`
      `),m(32,"reuse-tab",10,1),t(34,`
      `),l(35,"router-outlet",11),_("activate",function(h){f(a);let b=L(33);return g(b.activate(h))})("attach",function(h){f(a);let b=L(33);return g(b.activate(h))}),s(),t(36,`
    `),s(),t(37,`
    `),m(38,"setting-drawer"),t(39,`
  `)}if(e&2){let a=L(30);r(),p("options",o.options)("asideUser",a),r(12),A(o.topMenus),r(6),U(P(20,5,o.rtl.nextDir)),r(13),p("mode",2)("customContextMenu",o.customContextMenu)}},dependencies:[Ye,ye,q,Ce,He,I,$e,dn,sn,cn,mn,je,Sn,pn,vn,Et,Ke,se,Dt],encapsulation:2})};var w=class i{route=u(zt);srv=u(gn);first=Oe(new Date,"yyyy-MM-dd HH:mm:ss");now=Oe(new Date,"yyyy-MM-dd HH:mm:ss");id=0;ngOnInit(){this.route.params.subscribe(n=>this.id=+n.id)}_onReuseInit(){this.now=Oe(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("by _onReuseInit",this.id)}replace(n){this.srv.replace(n)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["dev-page"]],decls:19,vars:12,consts:[["nz-button","","nzType","primary",3,"click"]],template:function(e,o){e&1&&(t(0,`
    `),m(1,"page-header"),t(2,`
    `),l(3,"p"),t(4),B(5,"json"),B(6,"json"),s(),t(7,`
    `),l(8,"p"),t(9),B(10,"json"),s(),t(11),B(12,"json"),l(13,"div"),t(14,`
      `),l(15,"button",0),_("click",function(){return o.replace("/dev/view/2")}),t(16,"Replace /dev/view/2"),s(),t(17,`
    `),s(),t(18,`
  `)),e&2&&(r(4),yt("first: ",P(5,4,o.first),"\uFF0Cnow: ",P(6,6,o.now)),r(5),N("id: ",P(10,8,o.id)),r(2),N(`
    page: `,P(12,10,o.route.url),`
    `))},dependencies:[Ze,Qe,ae,Q,ie,oe,Ne],encapsulation:2})};var Ml=[{path:"demo",component:Je},{path:"",component:Xe,children:[{path:"home",component:qe},{path:"l1",component:w},{path:"l2",component:w},{path:"l3",component:w},{path:"l4",component:w},{path:"l5",component:w},{path:"l6",component:w},{path:"l7",component:w},{path:"l8",component:w},{path:"login",component:w},{path:"view/1",component:w,data:{reuseClosable:!1}},{path:"view/:id",component:w},{path:"lazy",loadChildren:()=>import("./chunk-PAB7LP3U.js").then(i=>i.routes)},{path:"list",loadChildren:()=>import("./chunk-366TYWNR.js").then(i=>i.routes)}]}];export{Ml as routes};
