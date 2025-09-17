import{d as h,e as C}from"./chunk-JWMPURWA.js";import"./chunk-SOPA5KSJ.js";import"./chunk-6EQ2YOYD.js";import"./chunk-KZKDNBQM.js";import"./chunk-53L4MXOU.js";import"./chunk-TM6UIXI6.js";import{Ia as m,Qa as y,Rb as e,Rc as f,Tb as c,Ub as u,Ug as s,ha as l,kc as n,lc as i,nb as I,ob as D,pb as g,qb as a,qd as v,rb as d,rd as O}from"./chunk-BCFC3QQ2.js";var L=class r{route=l(v);first=s(new Date,"yyyy-MM-dd HH:mm:ss");now=s(new Date,"yyyy-MM-dd HH:mm:ss");ngOnInit(){console.log("LAYOUT LIST: ngOnInit")}_onReuseInit(){this.now=s(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LAYOUT LIST: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LAYOUT LIST: ngOnDestroy")}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=y({type:r,selectors:[["dev-list-layout"]],decls:18,vars:6,consts:[[1,"px-lg"]],template:function(t,o){t&1&&(e(0,`
    `),g(1,"page-header"),e(2,`
    `),I(3,"h1"),e(4,"Layout"),D(),e(5,`
    `),I(6,"p"),e(7),n(8,"json"),n(9,"json"),D(),e(10,`
    `),g(11,"hr"),e(12,`
    `),I(13,"div",0),e(14,`
      `),g(15,"router-outlet"),e(16,`
    `),D(),e(17,`
  `)),t&2&&(m(7),u("first: ",i(8,2,o.first),"\uFF0Cnow: ",i(9,4,o.now)))},dependencies:[C,h,O,f],encapsulation:2})};var x=class r{route=l(v);first=s(new Date,"yyyy-MM-dd HH:mm:ss");now=s(new Date,"yyyy-MM-dd HH:mm:ss");id=0;ngOnInit(){console.log("LIST ITEM: ngOnInit"),this.route.params.subscribe(p=>this.id=+p.id)}_onReuseInit(){this.now=s(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LIST ITEM: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LIST ITEM: ngOnDestroy")}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=y({type:r,selectors:[["dev-list-item"]],decls:14,vars:12,template:function(t,o){t&1&&(e(0,`
    `),a(1,"h2"),e(2,"List Item"),d(),e(3,`
    `),a(4,"p"),e(5),n(6,"json"),n(7,"json"),d(),e(8,`
    `),a(9,"p"),e(10),n(11,"json"),d(),e(12),n(13,"json")),t&2&&(m(5),u("first: ",i(6,4,o.first),"\uFF0Cnow: ",i(7,6,o.now)),m(5),c("id: ",i(11,8,o.id)),m(2),c(`
    page: `,i(13,10,o.route.url),`
  `))},dependencies:[f],encapsulation:2})};var M=class r{route=l(v);first=s(new Date,"yyyy-MM-dd HH:mm:ss");now=s(new Date,"yyyy-MM-dd HH:mm:ss");id=0;ngOnInit(){console.log("LIST: ngOnInit"),this.route.params.subscribe(p=>this.id=+p.id)}_onReuseInit(){this.now=s(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LIST: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LIST: ngOnDestroy")}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=y({type:r,selectors:[["dev-list"]],decls:14,vars:12,template:function(t,o){t&1&&(e(0,`
    `),a(1,"h2"),e(2,"List"),d(),e(3,`
    `),a(4,"p"),e(5),n(6,"json"),n(7,"json"),d(),e(8,`
    `),a(9,"p"),e(10),n(11,"json"),d(),e(12),n(13,"json")),t&2&&(m(5),u("first: ",i(6,4,o.first),"\uFF0Cnow: ",i(7,6,o.now)),m(5),c("id: ",i(11,8,o.id)),m(2),c(`
    page: `,i(13,10,o.route.url),`
  `))},dependencies:[f],encapsulation:2})};var ie=[{path:"",component:L,children:[{path:"",component:M},{path:"item",component:x}]}];export{ie as routes};
