import{d as D,e as x}from"./chunk-JMULUJPG.js";import"./chunk-O5PVR6JQ.js";import"./chunk-JTOY7A5N.js";import"./chunk-KYNVQUZL.js";import"./chunk-J6XY7ONC.js";import"./chunk-N5D4LKLG.js";import{Db as e,Fb as c,Gb as y,Ja as m,Lb as f,Rb as i,Sb as o,Vc as g,Wc as I,fa as l,ha as u,hb as r,ib as p,jb as v,uc as h,ug as a}from"./chunk-PQ76J5IX.js";var L=(()=>{class t{constructor(){this.route=l(g),this.first=a(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=a(new Date,"yyyy-MM-dd HH:mm:ss")}ngOnInit(){console.log("LAYOUT LIST: ngOnInit")}_onReuseInit(){this.now=a(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LAYOUT LIST: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LAYOUT LIST: ngOnDestroy")}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["dev-list-layout"]],standalone:!0,features:[f],decls:18,vars:6,consts:[[1,"px-lg"]],template:function(n,s){n&1&&(e(0,`
    `),v(1,"page-header"),e(2,`
    `),r(3,"h1"),e(4,"Layout"),p(),e(5,`
    `),r(6,"p"),e(7),i(8,"json"),i(9,"json"),p(),e(10,`
    `),v(11,"hr"),e(12,`
    `),r(13,"div",0),e(14,`
      `),v(15,"router-outlet"),e(16,`
    `),p(),e(17,`
  `)),n&2&&(m(7),y("first: ",o(8,2,s.first),"\uFF0Cnow: ",o(9,4,s.now),""))},dependencies:[x,D,h,I],encapsulation:2})}}return t})();var w=(()=>{class t{constructor(){this.route=l(g),this.first=a(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=a(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("LIST ITEM: ngOnInit"),this.route.params.subscribe(d=>this.id=+d.id)}_onReuseInit(){this.now=a(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LIST ITEM: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LIST ITEM: ngOnDestroy")}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["dev-list-item"]],standalone:!0,features:[f],decls:14,vars:12,template:function(n,s){n&1&&(e(0,`
    `),r(1,"h2"),e(2,"List Item"),p(),e(3,`
    `),r(4,"p"),e(5),i(6,"json"),i(7,"json"),p(),e(8,`
    `),r(9,"p"),e(10),i(11,"json"),p(),e(12),i(13,"json")),n&2&&(m(5),y("first: ",o(6,4,s.first),"\uFF0Cnow: ",o(7,6,s.now),""),m(5),c("id: ",o(11,8,s.id),""),m(2),c(`
    page: `,o(13,10,s.route.url),`
  `))},dependencies:[h],encapsulation:2})}}return t})();var S=(()=>{class t{constructor(){this.route=l(g),this.first=a(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=a(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("LIST: ngOnInit"),this.route.params.subscribe(d=>this.id=+d.id)}_onReuseInit(){this.now=a(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LIST: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LIST: ngOnDestroy")}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["dev-list"]],standalone:!0,features:[f],decls:14,vars:12,template:function(n,s){n&1&&(e(0,`
    `),r(1,"h2"),e(2,"List"),p(),e(3,`
    `),r(4,"p"),e(5),i(6,"json"),i(7,"json"),p(),e(8,`
    `),r(9,"p"),e(10),i(11,"json"),p(),e(12),i(13,"json")),n&2&&(m(5),y("first: ",o(6,4,s.first),"\uFF0Cnow: ",o(7,6,s.now),""),m(5),c("id: ",o(11,8,s.id),""),m(2),c(`
    page: `,o(13,10,s.route.url),`
  `))},dependencies:[h],encapsulation:2})}}return t})();var V=[{path:"",component:L,children:[{path:"",component:S},{path:"item",component:w}]}];export{V as routes};
