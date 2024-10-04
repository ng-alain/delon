import{a as ee,b as te}from"./chunk-N5D4LKLG.js";import{a as y,b as B,c as P,d as j,q as Q,r as W,s as Y,y as Z}from"./chunk-TDHOL7D5.js";import{F as G,H as U,x as $,y as O}from"./chunk-GTVNFQLK.js";import{$c as V,Bh as J,Db as e,Eb as s,Ja as r,Lb as M,Mb as L,Sa as _,Va as z,Wc as F,Xa as C,Xf as X,Yf as A,_c as E,cb as d,cc as T,db as k,fa as c,fb as D,gb as N,ha as g,hb as i,ib as o,jb as v,nb as h,nd as w,pd as R,qa as u,qb as f,ra as x,sb as m,vb as b,wa as S,wh as H,xa as I,yh as K,zh as q}from"./chunk-PQ76J5IX.js";var re=()=>["ant-menu-item-selected"];function ae(n,p){n&1&&(e(0,`
                `),i(1,"nz-tag",6),e(2,"LIB"),o(),e(3,`
              `)),n&2&&(r(),z("nzColor","blue"))}function le(n,p){if(n&1){let t=h();e(0,`
          `),i(1,"li",2),f("click",function(){let a=u(t).$implicit,ie=m(2);return x(ie.to.emit(a.url))}),e(2,`
            `),i(3,"nz-badge",3),e(4,`
              `),i(5,"span",4),e(6),o(),e(7,`
              `),i(8,"span",5),e(9),o(),e(10,`
              `),_(11,ae,4,1),o(),e(12,`
          `),o(),e(13,`
        `)}if(n&2){let t=p.$implicit;r(),C("menu-deprecated",t.deprecated),z("routerLink",t.url)("routerLinkActive",L(9,re))("nzTooltipTitle",t.deprecated?"Deprecated in "+t.deprecated:null),r(2),z("nzDot",t.hot),r(3),s(t.title),r(3),s(t.subtitle),r(2),d(t.lib?11:-1)}}function me(n,p){if(n&1&&(e(0,`
    `),i(1,"li",1),e(2,`
      `),i(3,"ul"),e(4,`
        `),D(5,le,14,10,null,null,k),o(),e(7,`
    `),o(),e(8,`
  `)),n&2){let t=p.$implicit;r(),z("nzTitle",t.title),r(4),N(t.list)}}var ne=(()=>{class n{constructor(){this.meta=c(y),this.i18n=c(R),this.cdr=c(T),this.destroy$=c(S),this.count=0,this.to=new I}get menus(){return this.meta.menus}ngOnInit(){this.i18n.change.pipe(w(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.count=this.meta.menus?.reduce((t,l)=>t+=l.list.length,0)}static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=g({type:n,selectors:[["main-menu"],["","main-menu",""]],outputs:{to:"to"},standalone:!0,features:[M],decls:5,vars:0,consts:[["nz-menu","","nzMode","inline",1,"aside-container"],["nz-menu-group","","nzOpen","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","",2,"padding-left","54px",3,"click","routerLink","routerLinkActive","nzTooltipTitle"],[3,"nzDot"],[1,"name"],[1,"chinese"],["title","Full Library",1,"ml-sm",3,"nzColor"]],template:function(l,a){l&1&&(i(0,"ul",0),e(1,`
  `),D(2,me,9,1,null,null,k),o(),e(4,`
`)),l&2&&(r(2),N(a.menus))},dependencies:[E,V,U,G,O,$,j,P,J,K,H,q],encapsulation:2,changeDetection:0})}}return n})();function ce(n,p){if(n&1){let t=h();e(0,`
    `),i(1,"div",4),e(2,`
      `),i(3,"nz-affix"),e(4,`
        `),i(5,"div",5),f("to",function(){u(t);let a=m();return x(a.to())}),o(),e(6,`
      `),o(),e(7,`
    `),o(),e(8,`
  `)}}function pe(n,p){if(n&1&&(e(0,`
          `),i(1,"a",7),e(2,`
            `),v(3,"i",8),e(4,`
            `),i(5,"span"),e(6),o(),e(7,`
            `),i(8,"span",9),e(9),o(),e(10,`
          `),o(),e(11,`
        `)),n&2){let t=m(2);r(),b("routerLink",t.meta.prev.url),r(5),s(t.meta.prev.title),r(3),s(t.meta.prev.subtitle)}}function de(n,p){if(n&1&&(e(0,`
          `),i(1,"a",10),e(2,`
            `),i(3,"span"),e(4),o(),e(5,`
            `),i(6,"span",9),e(7),o(),e(8,`
            `),v(9,"i",11),e(10,`
          `),o(),e(11,`
        `)),n&2){let t=m(2);r(),b("routerLink",t.meta.next.url),r(3),s(t.meta.next.title),r(3),s(t.meta.next.subtitle)}}function se(n,p){if(n&1&&(e(0,`
      `),i(1,"div",6),e(2,`
        `),_(3,pe,12,3)(4,de,12,3),o(),e(5,`
    `)),n&2){let t=m();r(3),d(t.meta.prev?3:-1),r(),d(t.meta.next?4:-1)}}function ue(n,p){if(n&1){let t=h();e(0,`
  `),i(1,"div",12),e(2,`
    `),i(3,"div",13),e(4,`
      `),i(5,"div",14),f("click",function(){u(t);let a=m();return x(a.opened=!a.opened)}),o(),e(6,`
      `),i(7,"div",15),e(8,`
        `),i(9,"div",16),e(10,`
          `),i(11,"main-menu",17),f("to",function(){u(t);let a=m();return x(a.to())}),o(),e(12,`
        `),o(),e(13,`
        `),i(14,"div",18),f("click",function(){u(t);let a=m();return x(a.opened=!a.opened)}),v(15,"i",19),o(),e(16,`
      `),o(),e(17,`
    `),o(),e(18,`
  `),o(),e(19,`
`)}if(n&2){let t=m();r(3),C("drawer-open",t.opened)}}var Ue=(()=>{class n{constructor(){this.meta=c(y),this.mobileSrv=c(B),this.cdr=c(T),this.destroy$=c(S),this.opened=!1}ngOnInit(){this.mobileSrv.change.pipe(w(this.destroy$)).subscribe(t=>{this.isMobile=t,this.cdr.detectChanges()})}to(){this.opened=!1}static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=g({type:n,selectors:[["app-content"]],hostVars:2,hostBindings:function(l,a){l&2&&C("main-wrapper",!0)},standalone:!0,features:[M],decls:16,vars:5,consts:[["nz-row",""],["nz-col","","nzXs","24","nzSm","24","nzMd","18","nzLg","18","nzXl","19","nzXXl","20"],[1,"main-container"],["small",""],["nz-col","","nzXs","24","nzSm","24","nzMd","6","nzLg","6","nzXl","5","nzXXl","4",1,"main-menu"],["main-menu","",1,"main-menu-inner",3,"to"],[1,"prev-next-nav"],[1,"prev-page",3,"routerLink"],["nz-icon","","nzType","left",1,"footer-nav-icon-before"],[1,"chinese"],[1,"next-page",3,"routerLink"],["nz-icon","","nzType","right",1,"footer-nav-icon-after"],[1,"drawer-wrapper"],[1,"drawer","drawer-left"],[1,"drawer-mask",3,"click"],[1,"drawer-content-wrapper"],[1,"drawer-content"],[3,"to"],[1,"drawer-button",3,"click"],["nz-icon","","nzType","menu-unfold"]],template:function(l,a){l&1&&(i(0,"div",0),e(1,`
  `),_(2,ce,9,0),i(3,"div",1),e(4,`
    `),i(5,"div",2),e(6,`
      `),v(7,"router-outlet"),e(8,`
    `),o(),e(9,`
    `),_(10,se,6,2),v(11,"app-footer",3),e(12,`
  `),o(),e(13,`
`),o(),e(14,`
`),_(15,ue,20,2)),l&2&&(r(2),d(a.isMobile?-1:2),r(3),C("pages-container",a.meta.isPages),r(5),d(a.meta.next||a.meta.prev?10:-1),r(5),d(a.isMobile?15:-1))},dependencies:[F,E,Z,te,ee,A,X,ne,Y,W,Q],encapsulation:2,changeDetection:0})}}return n})();export{Ue as a};
