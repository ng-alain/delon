import{a as te,b as ne}from"./chunk-KXGQH2H2.js";import{a as k,b as $,c as j,d as G,q as W,r as Y,s as Z,y as ee}from"./chunk-7ULXDHLQ.js";import{F as U,H,x as O,y as P}from"./chunk-GK4IRTK3.js";import{Db as e,Eb as u,Eh as K,Gh as q,Hh as J,Ja as a,Jh as Q,Lb as T,Mb as F,Ta as _,Va as h,Vf as A,Wf as B,Xa as v,Zc as V,bd as w,cb as s,cc as E,cd as R,db as D,fa as d,fb as N,gb as b,ha as S,hb as i,ib as o,jb as z,nb as g,qa as x,qb as C,qd as y,ra as f,sb as c,sd as X,vb as I,wa as M,xa as L}from"./chunk-FML4Y3RM.js";var re=()=>["ant-menu-item-selected"];function ae(n,l){n&1&&(e(0,`
                `),i(1,"nz-tag",6),e(2,"LIB"),o(),e(3,`
              `)),n&2&&(a(),h("nzColor","blue"))}function le(n,l){if(n&1){let t=g();e(0,`
          `),i(1,"li",2),C("click",function(){let r=x(t).$implicit,p=c(2);return f(p.to.emit(r.url))}),e(2,`
            `),i(3,"nz-badge",3),e(4,`
              `),i(5,"span",4),e(6),o(),e(7,`
              `),i(8,"span",5),e(9),o(),e(10,`
              `),_(11,ae,4,1),o(),e(12,`
          `),o(),e(13,`
        `)}if(n&2){let t=l.$implicit;a(),v("menu-deprecated",t.deprecated),h("routerLink",t.url)("routerLinkActive",F(9,re))("nzTooltipTitle",t.deprecated?"Deprecated in "+t.deprecated:null),a(2),h("nzDot",t.hot),a(3),u(t.title),a(3),u(t.subtitle),a(2),s(t.lib?11:-1)}}function me(n,l){if(n&1&&(e(0,`
    `),i(1,"li",1),e(2,`
      `),i(3,"ul"),e(4,`
        `),N(5,le,14,10,null,null,D),o(),e(7,`
    `),o(),e(8,`
  `)),n&2){let t=l.$implicit;a(),h("nzTitle",t.title),a(4),b(t.list)}}var ie=(()=>{let l=class l{constructor(){this.meta=d(k),this.i18n=d(X),this.cdr=d(E),this.destroy$=d(M),this.count=0,this.to=new L}get menus(){return this.meta.menus}ngOnInit(){this.i18n.change.pipe(y(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.count=this.meta.menus?.reduce((m,r)=>m+=r.list.length,0)}};l.\u0275fac=function(r){return new(r||l)},l.\u0275cmp=S({type:l,selectors:[["main-menu"],["","main-menu",""]],outputs:{to:"to"},standalone:!0,features:[T],decls:5,vars:0,consts:[["nz-menu","","nzMode","inline",1,"aside-container"],["nz-menu-group","","nzOpen","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","",2,"padding-left","54px",3,"click","routerLink","routerLinkActive","nzTooltipTitle"],[3,"nzDot"],[1,"name"],[1,"chinese"],["title","Full Library",1,"ml-sm",3,"nzColor"]],template:function(r,p){r&1&&(i(0,"ul",0),e(1,`
  `),N(2,me,9,1,null,null,D),o(),e(4,`
`)),r&2&&(a(2),b(p.menus))},dependencies:[w,R,H,U,P,O,G,j,Q,q,K,J],encapsulation:2,changeDetection:0});let n=l;return n})();function ce(n,l){if(n&1){let t=g();e(0,`
    `),i(1,"div",4),e(2,`
      `),i(3,"nz-affix"),e(4,`
        `),i(5,"div",5),C("to",function(){x(t);let r=c();return f(r.to())}),o(),e(6,`
      `),o(),e(7,`
    `),o(),e(8,`
  `)}}function pe(n,l){if(n&1&&(e(0,`
          `),i(1,"a",7),e(2,`
            `),z(3,"i",8),e(4,`
            `),i(5,"span"),e(6),o(),e(7,`
            `),i(8,"span",9),e(9),o(),e(10,`
          `),o(),e(11,`
        `)),n&2){let t=c(2);a(),I("routerLink",t.meta.prev.url),a(5),u(t.meta.prev.title),a(3),u(t.meta.prev.subtitle)}}function de(n,l){if(n&1&&(e(0,`
          `),i(1,"a",10),e(2,`
            `),i(3,"span"),e(4),o(),e(5,`
            `),i(6,"span",9),e(7),o(),e(8,`
            `),z(9,"i",11),e(10,`
          `),o(),e(11,`
        `)),n&2){let t=c(2);a(),I("routerLink",t.meta.next.url),a(3),u(t.meta.next.title),a(3),u(t.meta.next.subtitle)}}function se(n,l){if(n&1&&(e(0,`
      `),i(1,"div",6),e(2,`
        `),_(3,pe,12,3)(4,de,12,3),o(),e(5,`
    `)),n&2){let t=c();a(3),s(t.meta.prev?3:-1),a(),s(t.meta.next?4:-1)}}function ue(n,l){if(n&1){let t=g();e(0,`
  `),i(1,"div",12),e(2,`
    `),i(3,"div",13),e(4,`
      `),i(5,"div",14),C("click",function(){x(t);let r=c();return f(r.opened=!r.opened)}),o(),e(6,`
      `),i(7,"div",15),e(8,`
        `),i(9,"div",16),e(10,`
          `),i(11,"main-menu",17),C("to",function(){x(t);let r=c();return f(r.to())}),o(),e(12,`
        `),o(),e(13,`
        `),i(14,"div",18),C("click",function(){x(t);let r=c();return f(r.opened=!r.opened)}),z(15,"i",19),o(),e(16,`
      `),o(),e(17,`
    `),o(),e(18,`
  `),o(),e(19,`
`)}if(n&2){let t=c();a(3),v("drawer-open",t.opened)}}var Ue=(()=>{let l=class l{constructor(){this.meta=d(k),this.mobileSrv=d($),this.cdr=d(E),this.destroy$=d(M),this.opened=!1}ngOnInit(){this.mobileSrv.change.pipe(y(this.destroy$)).subscribe(m=>{this.isMobile=m,this.cdr.detectChanges()})}to(){this.opened=!1}};l.\u0275fac=function(r){return new(r||l)},l.\u0275cmp=S({type:l,selectors:[["app-content"]],hostVars:2,hostBindings:function(r,p){r&2&&v("main-wrapper",!0)},standalone:!0,features:[T],decls:16,vars:5,consts:[["nz-row",""],["nz-col","","nzXs","24","nzSm","24","nzMd","18","nzLg","18","nzXl","19","nzXXl","20"],[1,"main-container"],["small",""],["nz-col","","nzXs","24","nzSm","24","nzMd","6","nzLg","6","nzXl","5","nzXXl","4",1,"main-menu"],["main-menu","",1,"main-menu-inner",3,"to"],[1,"prev-next-nav"],[1,"prev-page",3,"routerLink"],["nz-icon","","nzType","left",1,"footer-nav-icon-before"],[1,"chinese"],[1,"next-page",3,"routerLink"],["nz-icon","","nzType","right",1,"footer-nav-icon-after"],[1,"drawer-wrapper"],[1,"drawer","drawer-left"],[1,"drawer-mask",3,"click"],[1,"drawer-content-wrapper"],[1,"drawer-content"],[3,"to"],[1,"drawer-button",3,"click"],["nz-icon","","nzType","menu-unfold"]],template:function(r,p){r&1&&(i(0,"div",0),e(1,`
  `),_(2,ce,9,0),i(3,"div",1),e(4,`
    `),i(5,"div",2),e(6,`
      `),z(7,"router-outlet"),e(8,`
    `),o(),e(9,`
    `),_(10,se,6,2),z(11,"app-footer",3),e(12,`
  `),o(),e(13,`
`),o(),e(14,`
`),_(15,ue,20,2)),r&2&&(a(2),s(p.isMobile?-1:2),a(3),v("pages-container",p.meta.isPages),a(5),s(p.meta.next||p.meta.prev?10:-1),a(5),s(p.isMobile?15:-1))},dependencies:[V,w,ee,ne,te,B,A,ie,Z,Y,W],encapsulation:2,changeDetection:0});let n=l;return n})();export{Ue as a};
