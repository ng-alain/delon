"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[664],{4664:(g,y,i)=>{i.r(y),i.d(y,{DevListModule:()=>c});var a=i(9132),p=i(2557),e=i(7910),t=i(4650),d=i(9761),m=i(6895);class l{constructor(n){this.route=n,this.first=(0,e.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=(0,e.Z)(new Date,"yyyy-MM-dd HH:mm:ss")}ngOnInit(){console.log("LAYOUT LIST: ngOnInit")}_onReuseInit(){this.now=(0,e.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LAYOUT LIST: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LAYOUT LIST: ngOnDestroy")}}l.\u0275fac=function(n){return new(n||l)(t.Y36(a.gz))},l.\u0275cmp=t.Xpm({type:l,selectors:[["dev-list-layout"]],decls:10,vars:6,consts:[[1,"px-lg"]],template:function(n,o){1&n&&(t._UZ(0,"page-header"),t.TgZ(1,"h1"),t._uU(2,"Layout"),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.ALo(5,"json"),t.ALo(6,"json"),t.qZA(),t._UZ(7,"hr"),t.TgZ(8,"div",0),t._UZ(9,"router-outlet"),t.qZA()),2&n&&(t.xp6(4),t.AsE("first: ",t.lcZ(5,2,o.first),"\uff0cnow: ",t.lcZ(6,4,o.now),""))},dependencies:[a.lC,d.q,m.Ts],encapsulation:2});class u{constructor(n){this.route=n,this.first=(0,e.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=(0,e.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("LIST ITEM: ngOnInit"),this.route.params.subscribe(n=>this.id=+n.id)}_onReuseInit(){this.now=(0,e.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LIST ITEM: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LIST ITEM: ngOnDestroy")}}u.\u0275fac=function(n){return new(n||u)(t.Y36(a.gz))},u.\u0275cmp=t.Xpm({type:u,selectors:[["dev-list-item"]],decls:11,vars:12,template:function(n,o){1&n&&(t.TgZ(0,"h2"),t._uU(1,"List Item"),t.qZA(),t.TgZ(2,"p"),t._uU(3),t.ALo(4,"json"),t.ALo(5,"json"),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.ALo(8,"json"),t.qZA(),t._uU(9),t.ALo(10,"json")),2&n&&(t.xp6(3),t.AsE("first: ",t.lcZ(4,4,o.first),"\uff0cnow: ",t.lcZ(5,6,o.now),""),t.xp6(4),t.hij("id: ",t.lcZ(8,8,o.id),""),t.xp6(2),t.hij(" page: ",t.lcZ(10,10,o.route.url)," "))},dependencies:[m.Ts],encapsulation:2});class r{constructor(n){this.route=n,this.first=(0,e.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=(0,e.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("LIST: ngOnInit"),this.route.params.subscribe(n=>this.id=+n.id)}_onReuseInit(){this.now=(0,e.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LIST: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LIST: ngOnDestroy")}}r.\u0275fac=function(n){return new(n||r)(t.Y36(a.gz))},r.\u0275cmp=t.Xpm({type:r,selectors:[["dev-list"]],decls:11,vars:12,template:function(n,o){1&n&&(t.TgZ(0,"h2"),t._uU(1,"List"),t.qZA(),t.TgZ(2,"p"),t._uU(3),t.ALo(4,"json"),t.ALo(5,"json"),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.ALo(8,"json"),t.qZA(),t._uU(9),t.ALo(10,"json")),2&n&&(t.xp6(3),t.AsE("first: ",t.lcZ(4,4,o.first),"\uff0cnow: ",t.lcZ(5,6,o.now),""),t.xp6(4),t.hij("id: ",t.lcZ(8,8,o.id),""),t.xp6(2),t.hij(" page: ",t.lcZ(10,10,o.route.url)," "))},dependencies:[m.Ts],encapsulation:2});const h=[{path:"",component:l,children:[{path:"",component:r},{path:"item",component:u}]}];class c{}c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[p.m,a.Bz.forChild(h)]})}}]);