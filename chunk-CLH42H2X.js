import{a as te,b as ne}from"./chunk-ZZ7ISDYC.js";import{b as B,c as S,d as W,e as Y,f as Z,l as ee}from"./chunk-RDF7BJYK.js";import{C as K,E as U,w as P,x as $,y as j,z as G}from"./chunk-VPD4R4PE.js";import{Ag as R,Cb as z,Eb as C,Gb as p,Ic as L,Ma as r,Nd as A,Qd as O,Sb as y,Vb as e,Wa as g,Wb as u,dc as N,fa as x,jc as I,ka as _,la as f,lb as c,nb as d,ob as T,qa as k,qb as b,ra as h,rb as w,sb as s,si as q,tb as n,td as F,ub as i,ui as H,vb as v,vi as J,wa as D,xd as M,xi as Q,yd as V,zg as X}from"./chunk-UENMMWRA.js";var me=()=>["ant-menu-item-selected"];function le(o,a){o&1&&(e(0,`
                `),n(1,"nz-tag",6),e(2,"LIB"),i(),e(3,`
              `)),o&2&&(r(),s("nzColor","blue"))}function pe(o,a){if(o&1){let t=z();e(0,`
          `),n(1,"li",2),C("click",function(){let l=_(t).$implicit,oe=p(2);return f(oe.to.emit(l.url))}),e(2,`
            `),n(3,"nz-badge",3),e(4,`
              `),n(5,"span",4),e(6),i(),e(7,`
              `),n(8,"span",5),e(9),i(),e(10,`
              `),c(11,le,4,1),i(),e(12,`
          `),i(),e(13,`
        `)}if(o&2){let t=a.$implicit;r(),y("menu-deprecated",t.deprecated),s("routerLink",t.url)("routerLinkActive",I(9,me))("nzTooltipTitle",t.deprecated?"Deprecated in "+t.deprecated:null),r(2),s("nzDot",t.hot),r(3),u(t.title),r(3),u(t.subtitle),r(2),d(t.lib?11:-1)}}function ce(o,a){if(o&1&&(e(0,`
    `),n(1,"li",1),e(2,`
      `),n(3,"ul"),e(4,`
        `),b(5,pe,14,10,null,null,T),i(),e(7,`
    `),i(),e(8,`
  `)),o&2){let t=a.$implicit;r(),s("nzTitle",t.title),r(4),w(t.list)}}var E=class o{meta=x(S);i18n=x(O);cdr=x(L);destroy$=x(k);count=0;to=new h;get menus(){return this.meta.menus}ngOnInit(){this.i18n.change.pipe(A(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.count=this.meta.menus?.reduce((a,t)=>a+=t.list.length,0)}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=g({type:o,selectors:[["main-menu"],["","main-menu",""]],outputs:{to:"to"},decls:5,vars:0,consts:[["nz-menu","","nzMode","inline",1,"aside-container"],["nz-menu-group","","nzOpen","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","",2,"padding-left","54px",3,"click","routerLink","routerLinkActive","nzTooltipTitle"],[3,"nzDot"],[1,"name"],[1,"chinese"],["title","Full Library",1,"ml-sm",3,"nzColor"]],template:function(t,m){t&1&&(n(0,"ul",0),e(1,`
  `),b(2,ce,9,1,null,null,T),i(),e(4,`
`)),t&2&&(r(2),w(m.menus))},dependencies:[M,V,U,K,$,P,G,j,Q,H,q,J],encapsulation:2,changeDetection:0})};function de(o,a){if(o&1){let t=z();e(0,`
    `),n(1,"div",4),e(2,`
      `),n(3,"nz-affix"),e(4,`
        `),n(5,"div",5),C("to",function(){_(t);let l=p();return f(l.opened.set(!1))}),i(),e(6,`
      `),i(),e(7,`
    `),i(),e(8,`
  `)}}function se(o,a){if(o&1&&(e(0,`
          `),n(1,"a",7),e(2,`
            `),v(3,"nz-icon",8),e(4,`
            `),n(5,"span"),e(6),i(),e(7,`
            `),n(8,"span",9),e(9),i(),e(10,`
          `),i(),e(11,`
        `)),o&2){let t=p(2);r(),s("routerLink",N(t.meta.prev.url)),r(5),u(t.meta.prev.title),r(3),u(t.meta.prev.subtitle)}}function ue(o,a){if(o&1&&(e(0,`
          `),n(1,"a",10),e(2,`
            `),n(3,"span"),e(4),i(),e(5,`
            `),n(6,"span",9),e(7),i(),e(8,`
            `),v(9,"nz-icon",11),e(10,`
          `),i(),e(11,`
        `)),o&2){let t=p(2);r(),s("routerLink",N(t.meta.next.url)),r(3),u(t.meta.next.title),r(3),u(t.meta.next.subtitle)}}function xe(o,a){if(o&1&&(e(0,`
      `),n(1,"div",6),e(2,`
        `),c(3,se,12,4),c(4,ue,12,4),i(),e(5,`
    `)),o&2){let t=p();r(3),d(t.meta.prev?3:-1),r(),d(t.meta.next?4:-1)}}function _e(o,a){if(o&1){let t=z();e(0,`
  `),n(1,"div",12),e(2,`
    `),n(3,"div",13),e(4,`
      `),n(5,"div",14),C("click",function(){_(t);let l=p();return f(l.opened.set(!l.opened()))}),i(),e(6,`
      `),n(7,"div",15),e(8,`
        `),n(9,"div",16),e(10,`
          `),n(11,"main-menu",17),C("to",function(){_(t);let l=p();return f(l.opened.set(!1))}),i(),e(12,`
        `),i(),e(13,`
        `),n(14,"div",18),C("click",function(){_(t);let l=p();return f(l.opened.set(!l.opened()))}),v(15,"nz-icon",19),i(),e(16,`
      `),i(),e(17,`
    `),i(),e(18,`
  `),i(),e(19,`
`)}if(o&2){let t=p();r(3),y("drawer-open",t.opened())}}var ie=class o{meta=x(S);mobile=B;opened=D(!1);static \u0275fac=function(t){return new(t||o)};static \u0275cmp=g({type:o,selectors:[["app-content"]],hostAttrs:[1,"main-wrapper"],decls:16,vars:5,consts:[["nz-row",""],["nz-col","","nzXs","24","nzSm","24","nzMd","18","nzLg","18","nzXl","19","nzXXl","20"],[1,"main-container"],["small",""],["nz-col","","nzXs","24","nzSm","24","nzMd","6","nzLg","6","nzXl","5","nzXXl","4",1,"main-menu"],["main-menu","",1,"main-menu-inner",3,"to"],[1,"prev-next-nav"],[1,"prev-page",3,"routerLink"],["nzType","left",1,"footer-nav-icon-before"],[1,"chinese"],[1,"next-page",3,"routerLink"],["nzType","right",1,"footer-nav-icon-after"],[1,"drawer-wrapper"],[1,"drawer","drawer-left"],[1,"drawer-mask",3,"click"],[1,"drawer-content-wrapper"],[1,"drawer-content"],[3,"to"],[1,"drawer-button",3,"click"],["nzType","menu-unfold"]],template:function(t,m){t&1&&(n(0,"div",0),e(1,`
  `),c(2,de,9,0),n(3,"div",1),e(4,`
    `),n(5,"div",2),e(6,`
      `),v(7,"router-outlet"),e(8,`
    `),i(),e(9,`
    `),c(10,xe,6,2),v(11,"app-footer",3),e(12,`
  `),i(),e(13,`
`),i(),e(14,`
`),c(15,_e,20,2)),t&2&&(r(2),d(m.mobile()?-1:2),r(3),y("pages-container",m.meta.isPages),r(5),d(m.meta.next||m.meta.prev?10:-1),r(5),d(m.mobile()?15:-1))},dependencies:[F,M,ee,ne,te,R,X,E,Z,Y,W],encapsulation:2,changeDetection:0})};export{ie as a};
