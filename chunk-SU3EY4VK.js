import{Ag as v,Dc as g,Gg as _,Hh as S,Ia as i,Ig as y,Jg as z,Qa as c,Rb as e,Rc as f,Tb as l,ha as d,kc as s,lc as u,mb as a,nb as t,ob as n,sh as N,yc as C,zb as m}from"./chunk-BCFC3QQ2.js";var h=class p{modal=d(N);record;input_value=C("");model_value=g("");ok(){this.modal.destroy(`new time: ${+new Date}`)}cancel(){this.modal.destroy()}static \u0275fac=function(o){return new(o||p)};static \u0275cmp=c({type:p,selectors:[["app-demo-dialog-modal"]],inputs:{record:"record",input_value:[1,"input_value"],model_value:[1,"model_value"]},outputs:{model_value:"model_valueChange"},decls:26,vars:9,consts:[[1,"modal-header"],[1,"modal-title"],[1,"modal-footer"],["nz-button","",3,"click","nzType","nzSize"]],template:function(o,r){o&1&&(e(0,`
    `),t(1,"div",0),e(2,`
      `),t(3,"div",1),e(4,"Custom component"),n(),e(5,`
    `),n(),e(6,`
    `),t(7,"p"),e(8),s(9,"json"),n(),e(10,`
    `),t(11,"p"),e(12),n(),e(13,`
    `),t(14,"p"),e(15),n(),e(16,`
    `),t(17,"div",2),e(18,`
      `),t(19,"button",3),m("click",function(){return r.cancel()}),e(20," Cancel "),n(),e(21,`
      `),t(22,"button",3),m("click",function(){return r.ok()}),e(23," OK "),n(),e(24,`
    `),n(),e(25,`
  `)),o&2&&(i(8),l("\u53C2\u6570\uFF1A",u(9,7,r.record)),i(4),l("input_value: ",r.input_value()),i(3),l("model_value: ",r.model_value()),i(4),a("nzType","default")("nzSize","large"),i(3),a("nzType","primary")("nzSize","large"))},dependencies:[z,y,v,_,f],encapsulation:2})};var b=class p{ref=d(S);record;ok(){this.ref.close(`new time: ${+new Date}`),this.cancel()}cancel(){this.ref.close()}static \u0275fac=function(o){return new(o||p)};static \u0275cmp=c({type:p,selectors:[["app-demo-dialog-drawer"]],inputs:{record:"record"},decls:16,vars:5,consts:[[2,"height","1000px"],["routerLink","/"],[1,"drawer-footer"],["nz-button","",3,"click","nzType"]],template:function(o,r){o&1&&(e(0,`
    `),t(1,"p",0),e(2),s(3,"json"),t(4,"a",1),e(5,"Change Router"),n()(),e(6,`
    The end!
    `),t(7,"div",2),e(8,`
      `),t(9,"button",3),m("click",function(){return r.cancel()}),e(10," Cancel "),n(),e(11,`
      `),t(12,"button",3),m("click",function(){return r.ok()}),e(13," OK "),n(),e(14,`
    `),n(),e(15,`
  `)),o&2&&(i(2),l("\u53C2\u6570\uFF1A",u(3,3,r.record),","),i(7),a("nzType","default"),i(3),a("nzType","primary"))},dependencies:[z,y,v,_,f],encapsulation:2})};export{h as a,b};
