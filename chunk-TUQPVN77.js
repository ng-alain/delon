import{a as ee,b as te}from"./chunk-DL4MSDFO.js";import{a as T,b as X,c as Q,d as W,e as Y,k as Z}from"./chunk-LN3NVZMZ.js";import{B as $,C as j,F as G,H as U,w as B,x as P}from"./chunk-7OOQUBON.js";import{Bg as O,Cg as R,Db as g,Fb as C,Hb as p,Ic as S,Na as r,Nd as E,Qd as A,Tb as z,Wb as e,Xa as M,Xb as x,ec as D,ga as c,kc as L,la as f,ma as _,mb as d,ob as s,pb as k,ra as y,rb as N,ri as H,sa as I,sb as b,tb as u,td as V,ti as K,ub as n,ui as q,vb as i,wb as v,wi as J,xd as h,yd as F}from"./chunk-P5SMEL6S.js";var ae=()=>["ant-menu-item-selected"];function me(o,a){o&1&&(e(0,`
                `),n(1,"nz-tag",6),e(2,"LIB"),i(),e(3,`
              `)),o&2&&(r(),u("nzColor","blue"))}function le(o,a){if(o&1){let t=g();e(0,`
          `),n(1,"li",2),C("click",function(){let l=f(t).$implicit,ie=p(2);return _(ie.to.emit(l.url))}),e(2,`
            `),n(3,"nz-badge",3),e(4,`
              `),n(5,"span",4),e(6),i(),e(7,`
              `),n(8,"span",5),e(9),i(),e(10,`
              `),d(11,me,4,1),i(),e(12,`
          `),i(),e(13,`
        `)}if(o&2){let t=a.$implicit;r(),z("menu-deprecated",t.deprecated),u("routerLink",t.url)("routerLinkActive",L(9,ae))("nzTooltipTitle",t.deprecated?"Deprecated in "+t.deprecated:null),r(2),u("nzDot",t.hot),r(3),x(t.title),r(3),x(t.subtitle),r(2),s(t.lib?11:-1)}}function pe(o,a){if(o&1&&(e(0,`
    `),n(1,"li",1),e(2,`
      `),n(3,"ul"),e(4,`
        `),N(5,le,14,10,null,null,k),i(),e(7,`
    `),i(),e(8,`
  `)),o&2){let t=a.$implicit;r(),u("nzTitle",t.title),r(4),b(t.list)}}var w=class o{meta=c(T);i18n=c(A);cdr=c(S);destroy$=c(y);count=0;to=new I;get menus(){return this.meta.menus}ngOnInit(){this.i18n.change.pipe(E(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.count=this.meta.menus?.reduce((a,t)=>a+=t.list.length,0)}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=M({type:o,selectors:[["main-menu"],["","main-menu",""]],outputs:{to:"to"},decls:5,vars:0,consts:[["nz-menu","","nzMode","inline",1,"aside-container"],["nz-menu-group","","nzOpen","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","",2,"padding-left","54px",3,"click","routerLink","routerLinkActive","nzTooltipTitle"],[3,"nzDot"],[1,"name"],[1,"chinese"],["title","Full Library",1,"ml-sm",3,"nzColor"]],template:function(t,m){t&1&&(n(0,"ul",0),e(1,`
  `),N(2,pe,9,1,null,null,k),i(),e(4,`
`)),t&2&&(r(2),b(m.menus))},dependencies:[h,F,U,G,P,B,j,$,J,K,H,q],encapsulation:2,changeDetection:0})};function ce(o,a){if(o&1){let t=g();e(0,`
    `),n(1,"div",4),e(2,`
      `),n(3,"nz-affix"),e(4,`
        `),n(5,"div",5),C("to",function(){f(t);let l=p();return _(l.to())}),i(),e(6,`
      `),i(),e(7,`
    `),i(),e(8,`
  `)}}function de(o,a){if(o&1&&(e(0,`
          `),n(1,"a",7),e(2,`
            `),v(3,"nz-icon",8),e(4,`
            `),n(5,"span"),e(6),i(),e(7,`
            `),n(8,"span",9),e(9),i(),e(10,`
          `),i(),e(11,`
        `)),o&2){let t=p(2);r(),u("routerLink",D(t.meta.prev.url)),r(5),x(t.meta.prev.title),r(3),x(t.meta.prev.subtitle)}}function se(o,a){if(o&1&&(e(0,`
          `),n(1,"a",10),e(2,`
            `),n(3,"span"),e(4),i(),e(5,`
            `),n(6,"span",9),e(7),i(),e(8,`
            `),v(9,"nz-icon",11),e(10,`
          `),i(),e(11,`
        `)),o&2){let t=p(2);r(),u("routerLink",D(t.meta.next.url)),r(3),x(t.meta.next.title),r(3),x(t.meta.next.subtitle)}}function ue(o,a){if(o&1&&(e(0,`
      `),n(1,"div",6),e(2,`
        `),d(3,de,12,4),d(4,se,12,4),i(),e(5,`
    `)),o&2){let t=p();r(3),s(t.meta.prev?3:-1),r(),s(t.meta.next?4:-1)}}function xe(o,a){if(o&1){let t=g();e(0,`
  `),n(1,"div",12),e(2,`
    `),n(3,"div",13),e(4,`
      `),n(5,"div",14),C("click",function(){f(t);let l=p();return _(l.opened=!l.opened)}),i(),e(6,`
      `),n(7,"div",15),e(8,`
        `),n(9,"div",16),e(10,`
          `),n(11,"main-menu",17),C("to",function(){f(t);let l=p();return _(l.to())}),i(),e(12,`
        `),i(),e(13,`
        `),n(14,"div",18),C("click",function(){f(t);let l=p();return _(l.opened=!l.opened)}),v(15,"nz-icon",19),i(),e(16,`
      `),i(),e(17,`
    `),i(),e(18,`
  `),i(),e(19,`
`)}if(o&2){let t=p();r(3),z("drawer-open",t.opened)}}var ne=class o{meta=c(T);mobileSrv=c(X);cdr=c(S);destroy$=c(y);isMobile;opened=!1;ngOnInit(){this.mobileSrv.change.pipe(E(this.destroy$)).subscribe(a=>{this.isMobile=a,this.cdr.detectChanges()})}to(){this.opened=!1}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=M({type:o,selectors:[["app-content"]],hostVars:2,hostBindings:function(t,m){t&2&&z("main-wrapper",!0)},decls:16,vars:5,consts:[["nz-row",""],["nz-col","","nzXs","24","nzSm","24","nzMd","18","nzLg","18","nzXl","19","nzXXl","20"],[1,"main-container"],["small",""],["nz-col","","nzXs","24","nzSm","24","nzMd","6","nzLg","6","nzXl","5","nzXXl","4",1,"main-menu"],["main-menu","",1,"main-menu-inner",3,"to"],[1,"prev-next-nav"],[1,"prev-page",3,"routerLink"],["nzType","left",1,"footer-nav-icon-before"],[1,"chinese"],[1,"next-page",3,"routerLink"],["nzType","right",1,"footer-nav-icon-after"],[1,"drawer-wrapper"],[1,"drawer","drawer-left"],[1,"drawer-mask",3,"click"],[1,"drawer-content-wrapper"],[1,"drawer-content"],[3,"to"],[1,"drawer-button",3,"click"],["nzType","menu-unfold"]],template:function(t,m){t&1&&(n(0,"div",0),e(1,`
  `),d(2,ce,9,0),n(3,"div",1),e(4,`
    `),n(5,"div",2),e(6,`
      `),v(7,"router-outlet"),e(8,`
    `),i(),e(9,`
    `),d(10,ue,6,2),v(11,"app-footer",3),e(12,`
  `),i(),e(13,`
`),i(),e(14,`
`),d(15,xe,20,2)),t&2&&(r(2),s(m.isMobile?-1:2),r(3),z("pages-container",m.meta.isPages),r(5),s(m.meta.next||m.meta.prev?10:-1),r(5),s(m.isMobile?15:-1))},dependencies:[V,h,Z,te,ee,R,O,w,Y,W,Q],encapsulation:2,changeDetection:0})};export{ne as a};
