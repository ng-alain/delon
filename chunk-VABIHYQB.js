import{d as C,e as M}from"./chunk-3CO5BSTL.js";import"./chunk-JCDC4JKB.js";import"./chunk-RHWRVCSA.js";import"./chunk-PX2RSEZZ.js";import"./chunk-PJGEYEFA.js";import"./chunk-HMM7XDUC.js";import{Ic as u,Ma as r,Og as s,Ub as e,Wa as y,Wb as c,Xb as g,ha as h,hd as x,ic as p,id as D,jc as a,vb as o,wb as i,xb as v}from"./chunk-QFOSDDRE.js";var f=class d{now=s(new Date,"yyyy-MM-dd HH:mm:ss");static \u0275fac=function(t){return new(t||d)};static \u0275cmp=y({type:d,selectors:[["dev-lazy-layout"]],decls:12,vars:3,consts:[[1,"p-lg"]],template:function(t,m){t&1&&(e(0,`
    `),v(1,"page-header"),e(2,`
    `),o(3,"h2"),e(4),p(5,"json"),i(),e(6,`
    `),o(7,"div",0),e(8,`
      `),v(9,"router-outlet"),e(10,`
    `),i(),e(11,`
  `)),t&2&&(r(4),c("Lazy Module, ",a(5,1,m.now),""))},dependencies:[D,M,C,u],encapsulation:2})};var n=class d{route=h(x);first=s(new Date,"yyyy-MM-dd HH:mm:ss");now=s(new Date,"yyyy-MM-dd HH:mm:ss");id=0;ngOnInit(){this.route.params.subscribe(l=>this.id=+l.id)}_onReuseInit(){this.now=s(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("by _onReuseInit",this.route.snapshot.url.toString())}static \u0275fac=function(t){return new(t||d)};static \u0275cmp=y({type:d,selectors:[["dev-page"]],decls:14,vars:12,template:function(t,m){t&1&&(e(0,`
    `),o(1,"h3"),e(2,"Lazy child component"),i(),e(3,`
    `),o(4,"p"),e(5),p(6,"json"),p(7,"json"),i(),e(8,`
    `),o(9,"p"),e(10),p(11,"json"),i(),e(12),p(13,"json")),t&2&&(r(5),g("first: ",a(6,4,m.first),"\uFF0Cnow: ",a(7,6,m.now),""),r(5),c("id: ",a(11,8,m.id),""),r(2),c(`
    page: `,a(13,10,m.route.url),`
  `))},dependencies:[u],encapsulation:2})};var _=[{path:"",component:f,children:[{path:"",pathMatch:"full",redirectTo:"p1"},{path:"p1",component:n},{path:"p2",component:n},{path:"p3",component:n},{path:"p4",component:n},{path:"p5",component:n},{path:":id/view",component:n}]}];export{_ as routes};
