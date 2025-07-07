import{f as M,g as O}from"./chunk-JHW6FW36.js";import"./chunk-MGG2YPP2.js";import"./chunk-3YAX2XTP.js";import"./chunk-AUF4LF4Y.js";import"./chunk-YZR7MD3I.js";import"./chunk-TWWSUF4P.js";import{Jc as f,Ma as r,Tg as m,Vb as e,Xb as c,Yb as u,Za as y,ga as l,id as v,jc as n,jd as x,kc as i,wb as s,xb as p,yb as I}from"./chunk-SCDKUK6D.js";var D=class d{route=l(v);first=m(new Date,"yyyy-MM-dd HH:mm:ss");now=m(new Date,"yyyy-MM-dd HH:mm:ss");ngOnInit(){console.log("LAYOUT LIST: ngOnInit")}_onReuseInit(){this.now=m(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LAYOUT LIST: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LAYOUT LIST: ngOnDestroy")}static \u0275fac=function(t){return new(t||d)};static \u0275cmp=y({type:d,selectors:[["dev-list-layout"]],decls:18,vars:6,consts:[[1,"px-lg"]],template:function(t,o){t&1&&(e(0,`
    `),I(1,"page-header"),e(2,`
    `),s(3,"h1"),e(4,"Layout"),p(),e(5,`
    `),s(6,"p"),e(7),n(8,"json"),n(9,"json"),p(),e(10,`
    `),I(11,"hr"),e(12,`
    `),s(13,"div",0),e(14,`
      `),I(15,"router-outlet"),e(16,`
    `),p(),e(17,`
  `)),t&2&&(r(7),u("first: ",i(8,2,o.first),"\uFF0Cnow: ",i(9,4,o.now),""))},dependencies:[O,M,f,x],encapsulation:2})};var g=class d{route=l(v);first=m(new Date,"yyyy-MM-dd HH:mm:ss");now=m(new Date,"yyyy-MM-dd HH:mm:ss");id=0;ngOnInit(){console.log("LIST ITEM: ngOnInit"),this.route.params.subscribe(a=>this.id=+a.id)}_onReuseInit(){this.now=m(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LIST ITEM: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LIST ITEM: ngOnDestroy")}static \u0275fac=function(t){return new(t||d)};static \u0275cmp=y({type:d,selectors:[["dev-list-item"]],decls:14,vars:12,template:function(t,o){t&1&&(e(0,`
    `),s(1,"h2"),e(2,"List Item"),p(),e(3,`
    `),s(4,"p"),e(5),n(6,"json"),n(7,"json"),p(),e(8,`
    `),s(9,"p"),e(10),n(11,"json"),p(),e(12),n(13,"json")),t&2&&(r(5),u("first: ",i(6,4,o.first),"\uFF0Cnow: ",i(7,6,o.now),""),r(5),c("id: ",i(11,8,o.id),""),r(2),c(`
    page: `,i(13,10,o.route.url),`
  `))},dependencies:[f],encapsulation:2})};var L=class d{route=l(v);first=m(new Date,"yyyy-MM-dd HH:mm:ss");now=m(new Date,"yyyy-MM-dd HH:mm:ss");id=0;ngOnInit(){console.log("LIST: ngOnInit"),this.route.params.subscribe(a=>this.id=+a.id)}_onReuseInit(){this.now=m(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LIST: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LIST: ngOnDestroy")}static \u0275fac=function(t){return new(t||d)};static \u0275cmp=y({type:d,selectors:[["dev-list"]],decls:14,vars:12,template:function(t,o){t&1&&(e(0,`
    `),s(1,"h2"),e(2,"List"),p(),e(3,`
    `),s(4,"p"),e(5),n(6,"json"),n(7,"json"),p(),e(8,`
    `),s(9,"p"),e(10),n(11,"json"),p(),e(12),n(13,"json")),t&2&&(r(5),u("first: ",i(6,4,o.first),"\uFF0Cnow: ",i(7,6,o.now),""),r(5),c("id: ",i(11,8,o.id),""),r(2),c(`
    page: `,i(13,10,o.route.url),`
  `))},dependencies:[f],encapsulation:2})};var te=[{path:"",component:D,children:[{path:"",component:L},{path:"item",component:g}]}];export{te as routes};
