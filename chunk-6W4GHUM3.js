import{d as C,e as M}from"./chunk-F3Z3JOW4.js";import"./chunk-SF2JONZT.js";import"./chunk-BXNGRRQN.js";import"./chunk-OMKOHD3S.js";import"./chunk-TI5Q6LGR.js";import"./chunk-IEV44IVB.js";import{Jc as u,Ma as r,Rg as s,Vb as e,Xa as y,Xb as c,Yb as g,ha as h,id as x,jc as p,jd as D,kc as a,wb as o,xb as i,yb as v}from"./chunk-BYVQI7J6.js";var f=class d{now=s(new Date,"yyyy-MM-dd HH:mm:ss");static \u0275fac=function(t){return new(t||d)};static \u0275cmp=y({type:d,selectors:[["dev-lazy-layout"]],decls:12,vars:3,consts:[[1,"p-lg"]],template:function(t,m){t&1&&(e(0,`
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
