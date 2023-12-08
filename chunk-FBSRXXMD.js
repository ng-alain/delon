import{a as ne,b as ie}from"./chunk-MJWBK4BK.js";import{C as te,a as I,b as $,c as G,d as U,s as Y,t as Z,u as ee}from"./chunk-LJKXQ2Z5.js";import{F as H,H as K,x as O,y as P}from"./chunk-OAR6ASNJ.js";import{$a as _,Bh as J,Ch as Q,Db as w,Eb as V,Eh as W,Ja as l,Ka as d,La as T,Ma as E,Na as F,Rc as j,Sa as h,Ua as C,Uc as y,Vc as R,ab as s,ag as A,bb as D,bg as B,db as N,de as k,eb as b,ed as X,fb as i,ga as S,gb as o,ha as M,hb as z,lb as g,na as x,oa as f,pb as v,rb as p,ub as L,yb as e,zb as u,zh as q}from"./chunk-JIFQ6OJY.js";function me(n,a){n&1&&(e(0,`
                `),i(1,"nz-tag",6),e(2,"LIB"),o(),e(3,`
              `)),n&2&&(l(1),h("nzColor","blue"))}var ce=()=>["ant-menu-item-selected"];function pe(n,a){if(n&1){let t=g();e(0,`
          `),i(1,"li",2),v("click",function(){let c=x(t).$implicit,re=p(2);return f(re.to.emit(c.url))}),e(2,`
            `),i(3,"nz-badge",3),e(4,`
              `),i(5,"span",4),e(6),o(),e(7,`
              `),i(8,"span",5),e(9),o(),e(10,`
              `),_(11,me,4,1),o(),e(12,`
          `),o(),e(13,`
        `)}if(n&2){let t=a.$implicit;l(1),C("menu-deprecated",t.deprecated),h("routerLink",t.url)("routerLinkActive",V(9,ce))("nzTooltipTitle",t.deprecated?"Deprecated in "+t.deprecated:null),l(2),h("nzDot",t.hot),l(3),u(t.title),l(3),u(t.subtitle),l(2),s(11,t.lib?11:-1)}}function de(n,a){if(n&1&&(e(0,`
    `),i(1,"li",1),e(2,`
      `),i(3,"ul"),e(4,`
        `),N(5,pe,14,10,null,null,D),o(),e(7,`
    `),o(),e(8,`
  `)),n&2){let t=a.$implicit;l(1),h("nzTitle",t.title),b(5,t.list)}}var oe=(()=>{let a=class a{get menus(){return this.meta.menus}constructor(m,r,c){this.meta=m,this.i18n=r,this.cdr=c,this.destroy$=S(E),this.count=0,this.to=new F}ngOnInit(){this.i18n.change.pipe(k(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.count=this.meta.menus?.reduce((m,r)=>m+=r.list.length,0)}};a.\u0275fac=function(r){return new(r||a)(d(I),d(X),d(T))},a.\u0275cmp=M({type:a,selectors:[["main-menu"],["","main-menu",""]],outputs:{to:"to"},standalone:!0,features:[w],decls:5,vars:0,consts:[["nz-menu","","nzMode","inline",1,"aside-container"],["nz-menu-group","","nzOpen","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","",2,"padding-left","54px",3,"routerLink","routerLinkActive","nzTooltipTitle","click"],[3,"nzDot"],[1,"name"],[1,"chinese"],["title","Full Library",1,"ml-sm",3,"nzColor"]],template:function(r,c){r&1&&(i(0,"ul",0),e(1,`
  `),N(2,de,9,1,null,null,D),o(),e(4,`
`)),r&2&&b(2,c.menus)},dependencies:[y,R,K,H,P,O,U,G,W,J,q,Q],encapsulation:2,changeDetection:0});let n=a;return n})();function se(n,a){if(n&1){let t=g();e(0,`
    `),i(1,"div",4),e(2,`
      `),i(3,"nz-affix"),e(4,`
        `),i(5,"div",5),v("to",function(){x(t);let r=p();return f(r.to())}),o(),e(6,`
      `),o(),e(7,`
    `),o(),e(8,`
  `)}}function ue(n,a){if(n&1&&(e(0,`
          `),i(1,"a",7),e(2,`
            `),z(3,"i",8),e(4,`
            `),i(5,"span"),e(6),o(),e(7,`
            `),i(8,"span",9),e(9),o(),e(10,`
          `),o(),e(11,`
        `)),n&2){let t=p(2);l(1),L("routerLink",t.meta.prev.url),l(5),u(t.meta.prev.title),l(3),u(t.meta.prev.subtitle)}}function xe(n,a){if(n&1&&(e(0,`
          `),i(1,"a",10),e(2,`
            `),i(3,"span"),e(4),o(),e(5,`
            `),i(6,"span",9),e(7),o(),e(8,`
            `),z(9,"i",11),e(10,`
          `),o(),e(11,`
        `)),n&2){let t=p(2);l(1),L("routerLink",t.meta.next.url),l(3),u(t.meta.next.title),l(3),u(t.meta.next.subtitle)}}function fe(n,a){if(n&1&&(e(0,`
      `),i(1,"div",6),e(2,`
        `),_(3,ue,12,3)(4,xe,12,3),o(),e(5,`
    `)),n&2){let t=p();l(3),s(3,t.meta.prev?3:-1),l(1),s(4,t.meta.next?4:-1)}}function _e(n,a){if(n&1){let t=g();e(0,`
  `),i(1,"div",12),e(2,`
    `),i(3,"div",13),e(4,`
      `),i(5,"div",14),v("click",function(){x(t);let r=p();return f(r.opened=!r.opened)}),o(),e(6,`
      `),i(7,"div",15),e(8,`
        `),i(9,"div",16),e(10,`
          `),i(11,"main-menu",17),v("to",function(){x(t);let r=p();return f(r.to())}),o(),e(12,`
        `),o(),e(13,`
        `),i(14,"div",18),v("click",function(){x(t);let r=p();return f(r.opened=!r.opened)}),z(15,"i",19),o(),e(16,`
      `),o(),e(17,`
    `),o(),e(18,`
  `),o(),e(19,`
`)}if(n&2){let t=p();l(3),C("drawer-open",t.opened)}}var Ke=(()=>{let a=class a{constructor(m,r,c){this.meta=m,this.mobileSrv=r,this.cdr=c,this.destroy$=S(E),this.opened=!1}ngOnInit(){this.mobileSrv.change.pipe(k(this.destroy$)).subscribe(m=>{this.isMobile=m,this.cdr.detectChanges()})}to(){this.opened=!1}};a.\u0275fac=function(r){return new(r||a)(d(I),d($),d(T))},a.\u0275cmp=M({type:a,selectors:[["app-content"]],hostVars:2,hostBindings:function(r,c){r&2&&C("main-wrapper",!0)},standalone:!0,features:[w],decls:16,vars:5,consts:[["nz-row",""],["nz-col","","nzXs","24","nzSm","24","nzMd","18","nzLg","18","nzXl","19","nzXXl","20"],[1,"main-container"],["small",""],["nz-col","","nzXs","24","nzSm","24","nzMd","6","nzLg","6","nzXl","5","nzXXl","4",1,"main-menu"],["main-menu","",1,"main-menu-inner",3,"to"],[1,"prev-next-nav"],[1,"prev-page",3,"routerLink"],["nz-icon","","nzType","left",1,"footer-nav-icon-before"],[1,"chinese"],[1,"next-page",3,"routerLink"],["nz-icon","","nzType","right",1,"footer-nav-icon-after"],[1,"drawer-wrapper"],[1,"drawer","drawer-left"],[1,"drawer-mask",3,"click"],[1,"drawer-content-wrapper"],[1,"drawer-content"],[3,"to"],[1,"drawer-button",3,"click"],["nz-icon","","nzType","menu-unfold"]],template:function(r,c){r&1&&(i(0,"div",0),e(1,`
  `),_(2,se,9,0),i(3,"div",1),e(4,`
    `),i(5,"div",2),e(6,`
      `),z(7,"router-outlet"),e(8,`
    `),o(),e(9,`
    `),_(10,fe,6,2),z(11,"app-footer",3),e(12,`
  `),o(),e(13,`
`),o(),e(14,`
`),_(15,_e,20,2)),r&2&&(l(2),s(2,c.isMobile?-1:2),l(3),C("pages-container",c.meta.isPages),l(5),s(10,c.meta.next||c.meta.prev?10:-1),l(5),s(15,c.isMobile?15:-1))},dependencies:[j,y,te,ie,ne,B,A,oe,ee,Z,Y],encapsulation:2,changeDetection:0});let n=a;return n})();export{oe as a,Ke as b};
