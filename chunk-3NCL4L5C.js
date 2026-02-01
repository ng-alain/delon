import{d as L,e as w}from"./chunk-4AIU2P4G.js";import"./chunk-Y7XGXBST.js";import"./chunk-DUCWGQ5Q.js";import"./chunk-CPNY6N7C.js";import"./chunk-U2X7MARR.js";import"./chunk-UW2KKFB3.js";import{La as a,Rc as u,Tg as m,Ub as e,Va as l,Wb as d,Xb as D,fa as x,nc as o,oc as i,qd as C,rd as M,sb as v,tb as h,ub as g,vb as c,wb as y}from"./chunk-6YVQZL4D.js";var f=class r{now=m(new Date,"yyyy-MM-dd HH:mm:ss");static \u0275fac=function(t){return new(t||r)};static \u0275cmp=l({type:r,selectors:[["dev-lazy-layout"]],decls:12,vars:3,consts:[[1,"p-lg"]],template:function(t,p){t&1&&(e(0,`
    `),g(1,"page-header"),e(2,`
    `),v(3,"h2"),e(4),o(5,"json"),h(),e(6,`
    `),v(7,"div",0),e(8,`
      `),g(9,"router-outlet"),e(10,`
    `),h(),e(11,`
  `)),t&2&&(a(4),d("Lazy Module, ",i(5,1,p.now)))},dependencies:[M,w,L,u],encapsulation:2})};var n=class r{route=x(C);first=m(new Date,"yyyy-MM-dd HH:mm:ss");now=m(new Date,"yyyy-MM-dd HH:mm:ss");id=0;ngOnInit(){this.route.params.subscribe(s=>this.id=+s.id)}_onReuseInit(){this.now=m(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("by _onReuseInit",this.route.snapshot.url.toString())}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=l({type:r,selectors:[["dev-page"]],decls:14,vars:12,template:function(t,p){t&1&&(e(0,`
    `),c(1,"h3"),e(2,"Lazy child component"),y(),e(3,`
    `),c(4,"p"),e(5),o(6,"json"),o(7,"json"),y(),e(8,`
    `),c(9,"p"),e(10),o(11,"json"),y(),e(12),o(13,"json")),t&2&&(a(5),D("first: ",i(6,4,p.first),"\uFF0Cnow: ",i(7,6,p.now)),a(5),d("id: ",i(11,8,p.id)),a(2),d(`
    page: `,i(13,10,p.route.url),`
  `))},dependencies:[u],encapsulation:2})};var k=[{path:"",component:f,children:[{path:"",pathMatch:"full",redirectTo:"p1"},{path:"p1",component:n},{path:"p2",component:n},{path:"p3",component:n},{path:"p4",component:n},{path:"p5",component:n},{path:":id/view",component:n}]}];export{k as routes};
