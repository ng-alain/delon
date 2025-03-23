import{a as ee,b as te}from"./chunk-IEV44IVB.js";import{a as E,b as X,c as $,d as j,q as Q,r as W,s as Y,y as Z}from"./chunk-GHKOIKGU.js";import{E as G,G as U,x as B,y as P}from"./chunk-Q6ELG47R.js";import{Cb as g,Dd as T,Fb as _,Gd as A,Hb as p,Kb as D,Ma as r,Th as H,Vb as e,Vh as K,Wb as s,Wh as q,Xa as M,Yh as J,cb as f,ec as L,ha as c,ib as z,jd as V,kb as C,na as u,nd as h,oa as x,od as F,pg as O,qg as R,rb as d,sb as k,ta as y,tc as S,ub as N,va as I,vb as b,wb as n,xb as i,yb as v}from"./chunk-BYVQI7J6.js";var ae=()=>["ant-menu-item-selected"];function me(o,a){o&1&&(e(0,`
                `),n(1,"nz-tag",6),e(2,"LIB"),i(),e(3,`
              `)),o&2&&(r(),z("nzColor","blue"))}function le(o,a){if(o&1){let t=g();e(0,`
          `),n(1,"li",2),_("click",function(){let l=u(t).$implicit,ie=p(2);return x(ie.to.emit(l.url))}),e(2,`
            `),n(3,"nz-badge",3),e(4,`
              `),n(5,"span",4),e(6),i(),e(7,`
              `),n(8,"span",5),e(9),i(),e(10,`
              `),f(11,me,4,1),i(),e(12,`
          `),i(),e(13,`
        `)}if(o&2){let t=a.$implicit;r(),C("menu-deprecated",t.deprecated),z("routerLink",t.url)("routerLinkActive",L(9,ae))("nzTooltipTitle",t.deprecated?"Deprecated in "+t.deprecated:null),r(2),z("nzDot",t.hot),r(3),s(t.title),r(3),s(t.subtitle),r(2),d(t.lib?11:-1)}}function pe(o,a){if(o&1&&(e(0,`
    `),n(1,"li",1),e(2,`
      `),n(3,"ul"),e(4,`
        `),N(5,le,14,10,null,null,k),i(),e(7,`
    `),i(),e(8,`
  `)),o&2){let t=a.$implicit;r(),z("nzTitle",t.title),r(4),b(t.list)}}var w=class o{meta=c(E);i18n=c(A);cdr=c(S);destroy$=c(y);count=0;to=new I;get menus(){return this.meta.menus}ngOnInit(){this.i18n.change.pipe(T(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.count=this.meta.menus?.reduce((a,t)=>a+=t.list.length,0)}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=M({type:o,selectors:[["main-menu"],["","main-menu",""]],outputs:{to:"to"},decls:5,vars:0,consts:[["nz-menu","","nzMode","inline",1,"aside-container"],["nz-menu-group","","nzOpen","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","",2,"padding-left","54px",3,"click","routerLink","routerLinkActive","nzTooltipTitle"],[3,"nzDot"],[1,"name"],[1,"chinese"],["title","Full Library",1,"ml-sm",3,"nzColor"]],template:function(t,m){t&1&&(n(0,"ul",0),e(1,`
  `),N(2,pe,9,1,null,null,k),i(),e(4,`
`)),t&2&&(r(2),b(m.menus))},dependencies:[h,F,U,G,P,B,j,$,J,K,H,q],encapsulation:2,changeDetection:0})};function ce(o,a){if(o&1){let t=g();e(0,`
    `),n(1,"div",4),e(2,`
      `),n(3,"nz-affix"),e(4,`
        `),n(5,"div",5),_("to",function(){u(t);let l=p();return x(l.to())}),i(),e(6,`
      `),i(),e(7,`
    `),i(),e(8,`
  `)}}function de(o,a){if(o&1&&(e(0,`
          `),n(1,"a",7),e(2,`
            `),v(3,"nz-icon",8),e(4,`
            `),n(5,"span"),e(6),i(),e(7,`
            `),n(8,"span",9),e(9),i(),e(10,`
          `),i(),e(11,`
        `)),o&2){let t=p(2);r(),D("routerLink",t.meta.prev.url),r(5),s(t.meta.prev.title),r(3),s(t.meta.prev.subtitle)}}function se(o,a){if(o&1&&(e(0,`
          `),n(1,"a",10),e(2,`
            `),n(3,"span"),e(4),i(),e(5,`
            `),n(6,"span",9),e(7),i(),e(8,`
            `),v(9,"nz-icon",11),e(10,`
          `),i(),e(11,`
        `)),o&2){let t=p(2);r(),D("routerLink",t.meta.next.url),r(3),s(t.meta.next.title),r(3),s(t.meta.next.subtitle)}}function ue(o,a){if(o&1&&(e(0,`
      `),n(1,"div",6),e(2,`
        `),f(3,de,12,3)(4,se,12,3),i(),e(5,`
    `)),o&2){let t=p();r(3),d(t.meta.prev?3:-1),r(),d(t.meta.next?4:-1)}}function xe(o,a){if(o&1){let t=g();e(0,`
  `),n(1,"div",12),e(2,`
    `),n(3,"div",13),e(4,`
      `),n(5,"div",14),_("click",function(){u(t);let l=p();return x(l.opened=!l.opened)}),i(),e(6,`
      `),n(7,"div",15),e(8,`
        `),n(9,"div",16),e(10,`
          `),n(11,"main-menu",17),_("to",function(){u(t);let l=p();return x(l.to())}),i(),e(12,`
        `),i(),e(13,`
        `),n(14,"div",18),_("click",function(){u(t);let l=p();return x(l.opened=!l.opened)}),v(15,"nz-icon",19),i(),e(16,`
      `),i(),e(17,`
    `),i(),e(18,`
  `),i(),e(19,`
`)}if(o&2){let t=p();r(3),C("drawer-open",t.opened)}}var ne=class o{meta=c(E);mobileSrv=c(X);cdr=c(S);destroy$=c(y);isMobile;opened=!1;ngOnInit(){this.mobileSrv.change.pipe(T(this.destroy$)).subscribe(a=>{this.isMobile=a,this.cdr.detectChanges()})}to(){this.opened=!1}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=M({type:o,selectors:[["app-content"]],hostVars:2,hostBindings:function(t,m){t&2&&C("main-wrapper",!0)},decls:16,vars:5,consts:[["nz-row",""],["nz-col","","nzXs","24","nzSm","24","nzMd","18","nzLg","18","nzXl","19","nzXXl","20"],[1,"main-container"],["small",""],["nz-col","","nzXs","24","nzSm","24","nzMd","6","nzLg","6","nzXl","5","nzXXl","4",1,"main-menu"],["main-menu","",1,"main-menu-inner",3,"to"],[1,"prev-next-nav"],[1,"prev-page",3,"routerLink"],["nzType","left",1,"footer-nav-icon-before"],[1,"chinese"],[1,"next-page",3,"routerLink"],["nzType","right",1,"footer-nav-icon-after"],[1,"drawer-wrapper"],[1,"drawer","drawer-left"],[1,"drawer-mask",3,"click"],[1,"drawer-content-wrapper"],[1,"drawer-content"],[3,"to"],[1,"drawer-button",3,"click"],["nzType","menu-unfold"]],template:function(t,m){t&1&&(n(0,"div",0),e(1,`
  `),f(2,ce,9,0),n(3,"div",1),e(4,`
    `),n(5,"div",2),e(6,`
      `),v(7,"router-outlet"),e(8,`
    `),i(),e(9,`
    `),f(10,ue,6,2),v(11,"app-footer",3),e(12,`
  `),i(),e(13,`
`),i(),e(14,`
`),f(15,xe,20,2)),t&2&&(r(2),d(m.isMobile?-1:2),r(3),C("pages-container",m.meta.isPages),r(5),d(m.meta.next||m.meta.prev?10:-1),r(5),d(m.isMobile?15:-1))},dependencies:[V,h,Z,te,ee,R,O,w,Y,W,Q],encapsulation:2,changeDetection:0})};export{ne as a};
