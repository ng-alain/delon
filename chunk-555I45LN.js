import{e as D,f as H}from"./chunk-PHXD6UQ6.js";import"./chunk-DFTH5LK6.js";import"./chunk-LANDAJ75.js";import"./chunk-4LMKEQTT.js";import"./chunk-WCHKEMEB.js";import{Ab as u,Bb as M,Db as y,Ja as l,Jb as r,Ka as x,Kb as s,Qc as g,Rc as w,Ye as c,fb as p,gb as a,ha as f,hb as v,qc as h,yb as e}from"./chunk-KLO4GQEX.js";var C=(()=>{let t=class t{constructor(){this.now=c(new Date,"yyyy-MM-dd HH:mm:ss")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=f({type:t,selectors:[["dev-lazy-layout"]],standalone:!0,features:[y],decls:12,vars:3,consts:[[1,"p-lg"]],template:function(n,d){n&1&&(e(0,`
    `),v(1,"page-header"),e(2,`
    `),p(3,"h2"),e(4),r(5,"json"),a(),e(6,`
    `),p(7,"div",0),e(8,`
      `),v(9,"router-outlet"),e(10,`
    `),a(),e(11,`
  `)),n&2&&(l(4),u("Lazy Module, ",s(5,1,d.now),""))},dependencies:[w,H,D,h],encapsulation:2});let i=t;return i})();var m=(()=>{let t=class t{constructor(o){this.route=o,this.first=c(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=c(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){this.route.params.subscribe(o=>this.id=+o.id)}_onReuseInit(){this.now=c(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("by _onReuseInit",this.route.snapshot.url.toString())}};t.\u0275fac=function(n){return new(n||t)(x(g))},t.\u0275cmp=f({type:t,selectors:[["dev-page"]],standalone:!0,features:[y],decls:14,vars:12,template:function(n,d){n&1&&(e(0,`
    `),p(1,"h3"),e(2,"Lazy child component"),a(),e(3,`
    `),p(4,"p"),e(5),r(6,"json"),r(7,"json"),a(),e(8,`
    `),p(9,"p"),e(10),r(11,"json"),a(),e(12),r(13,"json")),n&2&&(l(5),M("first: ",s(6,4,d.first),"\uFF0Cnow: ",s(7,6,d.now),""),l(5),u("id: ",s(11,8,d.id),""),l(2),u(`
    page: `,s(13,10,d.route.url),`
  `))},dependencies:[h],encapsulation:2});let i=t;return i})();var O=[{path:"",component:C,children:[{path:"",pathMatch:"full",redirectTo:"p1"},{path:"p1",component:m},{path:"p2",component:m},{path:"p3",component:m},{path:"p4",component:m},{path:"p5",component:m},{path:":id/view",component:m}]}];export{O as routes};
