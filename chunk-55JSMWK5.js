import{f as M,g as w}from"./chunk-K7662ML7.js";import"./chunk-BVEBYVNW.js";import"./chunk-ZOT3HDOF.js";import"./chunk-KX7UIM7P.js";import"./chunk-CMZ7DNJT.js";import{Fb as e,Hb as y,Ib as f,Ja as d,Kb as h,Qb as i,Rb as o,Tc as I,Uc as x,_f as a,ga as u,gb as r,hb as p,ia as c,ib as v,sc as g}from"./chunk-P6RVAZV5.js";var S=(()=>{let t=class t{constructor(){this.route=u(I),this.first=a(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=a(new Date,"yyyy-MM-dd HH:mm:ss")}ngOnInit(){console.log("LAYOUT LIST: ngOnInit")}_onReuseInit(){this.now=a(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LAYOUT LIST: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LAYOUT LIST: ngOnDestroy")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c({type:t,selectors:[["dev-list-layout"]],standalone:!0,features:[h],decls:18,vars:6,consts:[[1,"px-lg"]],template:function(n,s){n&1&&(e(0,`
    `),v(1,"page-header"),e(2,`
    `),r(3,"h1"),e(4,"Layout"),p(),e(5,`
    `),r(6,"p"),e(7),i(8,"json"),i(9,"json"),p(),e(10,`
    `),v(11,"hr"),e(12,`
    `),r(13,"div",0),e(14,`
      `),v(15,"router-outlet"),e(16,`
    `),p(),e(17,`
  `)),n&2&&(d(7),f("first: ",o(8,2,s.first),"\uFF0Cnow: ",o(9,4,s.now),""))},dependencies:[w,M,g,x],encapsulation:2});let m=t;return m})();var H=(()=>{let t=class t{constructor(){this.route=u(I),this.first=a(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=a(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("LIST ITEM: ngOnInit"),this.route.params.subscribe(l=>this.id=+l.id)}_onReuseInit(){this.now=a(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LIST ITEM: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LIST ITEM: ngOnDestroy")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c({type:t,selectors:[["dev-list-item"]],standalone:!0,features:[h],decls:14,vars:12,template:function(n,s){n&1&&(e(0,`
    `),r(1,"h2"),e(2,"List Item"),p(),e(3,`
    `),r(4,"p"),e(5),i(6,"json"),i(7,"json"),p(),e(8,`
    `),r(9,"p"),e(10),i(11,"json"),p(),e(12),i(13,"json")),n&2&&(d(5),f("first: ",o(6,4,s.first),"\uFF0Cnow: ",o(7,6,s.now),""),d(5),y("id: ",o(11,8,s.id),""),d(2),y(`
    page: `,o(13,10,s.route.url),`
  `))},dependencies:[g],encapsulation:2});let m=t;return m})();var L=(()=>{let t=class t{constructor(){this.route=u(I),this.first=a(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=a(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("LIST: ngOnInit"),this.route.params.subscribe(l=>this.id=+l.id)}_onReuseInit(){this.now=a(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LIST: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LIST: ngOnDestroy")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c({type:t,selectors:[["dev-list"]],standalone:!0,features:[h],decls:14,vars:12,template:function(n,s){n&1&&(e(0,`
    `),r(1,"h2"),e(2,"List"),p(),e(3,`
    `),r(4,"p"),e(5),i(6,"json"),i(7,"json"),p(),e(8,`
    `),r(9,"p"),e(10),i(11,"json"),p(),e(12),i(13,"json")),n&2&&(d(5),f("first: ",o(6,4,s.first),"\uFF0Cnow: ",o(7,6,s.now),""),d(5),y("id: ",o(11,8,s.id),""),d(2),y(`
    page: `,o(13,10,s.route.url),`
  `))},dependencies:[g],encapsulation:2});let m=t;return m})();var X=[{path:"",component:S,children:[{path:"",component:L},{path:"item",component:H}]}];export{X as routes};
