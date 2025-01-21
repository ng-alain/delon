import{Bg as v,Dg as D,Eb as m,Ic as u,Ma as o,Ub as e,Wa as c,Wb as d,bh as _,ha as l,hb as a,ic as s,jc as f,qh as N,tg as y,vb as t,wb as n,zg as z}from"./chunk-LT2GRY6R.js";var S=class p{modal=l(_);record;ok(){this.modal.destroy(`new time: ${+new Date}`)}cancel(){this.modal.destroy()}static \u0275fac=function(i){return new(i||p)};static \u0275cmp=c({type:p,selectors:[["app-demo-dialog-modal"]],inputs:{record:"record"},decls:20,vars:7,consts:[[1,"modal-header"],[1,"modal-title"],[1,"modal-footer"],["nz-button","",3,"click","nzType","nzSize"]],template:function(i,r){i&1&&(e(0,`
    `),t(1,"div",0),e(2,`
      `),t(3,"div",1),e(4,"Custom component"),n(),e(5,`
    `),n(),e(6,`
    `),t(7,"p"),e(8),s(9,"json"),n(),e(10,`
    `),t(11,"div",2),e(12,`
      `),t(13,"button",3),m("click",function(){return r.cancel()}),e(14," Cancel "),n(),e(15,`
      `),t(16,"button",3),m("click",function(){return r.ok()}),e(17," OK "),n(),e(18,`
    `),n(),e(19,`
  `)),i&2&&(o(8),d("\u53C2\u6570\uFF1A",f(9,5,r.record),""),o(5),a("nzType","default")("nzSize","large"),o(3),a("nzType","primary")("nzSize","large"))},dependencies:[D,v,y,z,u],encapsulation:2})};var g=class p{ref=l(N);record;ok(){this.ref.close(`new time: ${+new Date}`),this.cancel()}cancel(){this.ref.close()}static \u0275fac=function(i){return new(i||p)};static \u0275cmp=c({type:p,selectors:[["app-demo-dialog-drawer"]],inputs:{record:"record"},decls:16,vars:5,consts:[[2,"height","1000px"],["routerLink","/"],[1,"drawer-footer"],["nz-button","",3,"click","nzType"]],template:function(i,r){i&1&&(e(0,`
    `),t(1,"p",0),e(2),s(3,"json"),t(4,"a",1),e(5,"Change Router"),n()(),e(6,`
    The end!
    `),t(7,"div",2),e(8,`
      `),t(9,"button",3),m("click",function(){return r.cancel()}),e(10," Cancel "),n(),e(11,`
      `),t(12,"button",3),m("click",function(){return r.ok()}),e(13," OK "),n(),e(14,`
    `),n(),e(15,`
  `)),i&2&&(o(2),d("\u53C2\u6570\uFF1A",f(3,3,r.record),","),o(7),a("nzType","default"),o(3),a("nzType","primary"))},dependencies:[D,v,y,z,u],encapsulation:2})};export{S as a,g as b};
