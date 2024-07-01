import{f as M,g as w}from"./chunk-HRENDSG7.js";import"./chunk-IHPGORHX.js";import"./chunk-JHHLMHV5.js";import"./chunk-WXESQJI6.js";import"./chunk-U5X5LNAR.js";import{Db as e,Fb as y,Gb as f,Ja as d,Lb as h,Rb as i,Sb as o,Wc as I,Xc as x,da as u,hb as r,ib as p,jb as v,tg as a,va as c,vc as g}from"./chunk-LBINBHXL.js";var S=(()=>{let t=class t{constructor(){this.route=c(I),this.first=a(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=a(new Date,"yyyy-MM-dd HH:mm:ss")}ngOnInit(){console.log("LAYOUT LIST: ngOnInit")}_onReuseInit(){this.now=a(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LAYOUT LIST: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LAYOUT LIST: ngOnDestroy")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u({type:t,selectors:[["dev-list-layout"]],standalone:!0,features:[h],decls:18,vars:6,consts:[[1,"px-lg"]],template:function(n,s){n&1&&(e(0,`
    `),v(1,"page-header"),e(2,`
    `),r(3,"h1"),e(4,"Layout"),p(),e(5,`
    `),r(6,"p"),e(7),i(8,"json"),i(9,"json"),p(),e(10,`
    `),v(11,"hr"),e(12,`
    `),r(13,"div",0),e(14,`
      `),v(15,"router-outlet"),e(16,`
    `),p(),e(17,`
  `)),n&2&&(d(7),f("first: ",o(8,2,s.first),"\uFF0Cnow: ",o(9,4,s.now),""))},dependencies:[w,M,g,x],encapsulation:2});let m=t;return m})();var H=(()=>{let t=class t{constructor(){this.route=c(I),this.first=a(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=a(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("LIST ITEM: ngOnInit"),this.route.params.subscribe(l=>this.id=+l.id)}_onReuseInit(){this.now=a(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LIST ITEM: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LIST ITEM: ngOnDestroy")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u({type:t,selectors:[["dev-list-item"]],standalone:!0,features:[h],decls:14,vars:12,template:function(n,s){n&1&&(e(0,`
    `),r(1,"h2"),e(2,"List Item"),p(),e(3,`
    `),r(4,"p"),e(5),i(6,"json"),i(7,"json"),p(),e(8,`
    `),r(9,"p"),e(10),i(11,"json"),p(),e(12),i(13,"json")),n&2&&(d(5),f("first: ",o(6,4,s.first),"\uFF0Cnow: ",o(7,6,s.now),""),d(5),y("id: ",o(11,8,s.id),""),d(2),y(`
    page: `,o(13,10,s.route.url),`
  `))},dependencies:[g],encapsulation:2});let m=t;return m})();var L=(()=>{let t=class t{constructor(){this.route=c(I),this.first=a(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=a(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("LIST: ngOnInit"),this.route.params.subscribe(l=>this.id=+l.id)}_onReuseInit(){this.now=a(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LIST: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LIST: ngOnDestroy")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u({type:t,selectors:[["dev-list"]],standalone:!0,features:[h],decls:14,vars:12,template:function(n,s){n&1&&(e(0,`
    `),r(1,"h2"),e(2,"List"),p(),e(3,`
    `),r(4,"p"),e(5),i(6,"json"),i(7,"json"),p(),e(8,`
    `),r(9,"p"),e(10),i(11,"json"),p(),e(12),i(13,"json")),n&2&&(d(5),f("first: ",o(6,4,s.first),"\uFF0Cnow: ",o(7,6,s.now),""),d(5),y("id: ",o(11,8,s.id),""),d(2),y(`
    page: `,o(13,10,s.route.url),`
  `))},dependencies:[g],encapsulation:2});let m=t;return m})();var X=[{path:"",component:S,children:[{path:"",component:L},{path:"item",component:H}]}];export{X as routes};
