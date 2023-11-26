import{f as M,g as w}from"./chunk-C4AR4FRY.js";import"./chunk-6WEFBRTB.js";import"./chunk-XQEG7UIJ.js";import"./chunk-DMCH6AWB.js";import"./chunk-KSQL7I2A.js";import{Ab as f,Bb as y,Db as h,Ja as l,Jb as o,Ka as u,Kb as s,Oc as I,Pc as x,We as m,fb as p,gb as a,ha as c,hb as v,qc as g,yb as e}from"./chunk-SBXYWWID.js";var H=(()=>{let t=class t{constructor(i){this.route=i,this.first=m(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=m(new Date,"yyyy-MM-dd HH:mm:ss")}ngOnInit(){console.log("LAYOUT LIST: ngOnInit")}_onReuseInit(){this.now=m(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LAYOUT LIST: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LAYOUT LIST: ngOnDestroy")}};t.\u0275fac=function(n){return new(n||t)(u(I))},t.\u0275cmp=c({type:t,selectors:[["dev-list-layout"]],standalone:!0,features:[h],decls:18,vars:6,consts:[[1,"px-lg"]],template:function(n,r){n&1&&(e(0,`
    `),v(1,"page-header"),e(2,`
    `),p(3,"h1"),e(4,"Layout"),a(),e(5,`
    `),p(6,"p"),e(7),o(8,"json"),o(9,"json"),a(),e(10,`
    `),v(11,"hr"),e(12,`
    `),p(13,"div",0),e(14,`
      `),v(15,"router-outlet"),e(16,`
    `),a(),e(17,`
  `)),n&2&&(l(7),y("first: ",s(8,2,r.first),"\uFF0Cnow: ",s(9,4,r.now),""))},dependencies:[w,M,g,x],encapsulation:2});let d=t;return d})();var L=(()=>{let t=class t{constructor(i){this.route=i,this.first=m(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=m(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("LIST ITEM: ngOnInit"),this.route.params.subscribe(i=>this.id=+i.id)}_onReuseInit(){this.now=m(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LIST ITEM: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LIST ITEM: ngOnDestroy")}};t.\u0275fac=function(n){return new(n||t)(u(I))},t.\u0275cmp=c({type:t,selectors:[["dev-list-item"]],standalone:!0,features:[h],decls:14,vars:12,template:function(n,r){n&1&&(e(0,`
    `),p(1,"h2"),e(2,"List Item"),a(),e(3,`
    `),p(4,"p"),e(5),o(6,"json"),o(7,"json"),a(),e(8,`
    `),p(9,"p"),e(10),o(11,"json"),a(),e(12),o(13,"json")),n&2&&(l(5),y("first: ",s(6,4,r.first),"\uFF0Cnow: ",s(7,6,r.now),""),l(5),f("id: ",s(11,8,r.id),""),l(2),f(`
    page: `,s(13,10,r.route.url),`
  `))},dependencies:[g],encapsulation:2});let d=t;return d})();var T=(()=>{let t=class t{constructor(i){this.route=i,this.first=m(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=m(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("LIST: ngOnInit"),this.route.params.subscribe(i=>this.id=+i.id)}_onReuseInit(){this.now=m(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LIST: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LIST: ngOnDestroy")}};t.\u0275fac=function(n){return new(n||t)(u(I))},t.\u0275cmp=c({type:t,selectors:[["dev-list"]],standalone:!0,features:[h],decls:14,vars:12,template:function(n,r){n&1&&(e(0,`
    `),p(1,"h2"),e(2,"List"),a(),e(3,`
    `),p(4,"p"),e(5),o(6,"json"),o(7,"json"),a(),e(8,`
    `),p(9,"p"),e(10),o(11,"json"),a(),e(12),o(13,"json")),n&2&&(l(5),y("first: ",s(6,4,r.first),"\uFF0Cnow: ",s(7,6,r.now),""),l(5),f("id: ",s(11,8,r.id),""),l(2),f(`
    page: `,s(13,10,r.route.url),`
  `))},dependencies:[g],encapsulation:2});let d=t;return d})();var z=[{path:"",component:H,children:[{path:"",component:T},{path:"item",component:L}]}];export{z as routes};
