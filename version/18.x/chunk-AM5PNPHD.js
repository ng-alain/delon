import{Db as e,Fb as d,Ja as r,Jg as h,Lb as s,Rb as u,Sb as f,Va as m,Yg as S,Zf as x,dg as z,fa as p,fg as D,ha as c,hb as t,hg as y,ib as n,qb as l,uc as v}from"./chunk-PQ76J5IX.js";var j=(()=>{class i{constructor(){this.modal=p(h)}ok(){this.modal.destroy(`new time: ${+new Date}`)}cancel(){this.modal.destroy()}static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=c({type:i,selectors:[["app-demo-dialog-modal"]],inputs:{record:"record"},standalone:!0,features:[s],decls:20,vars:7,consts:[[1,"modal-header"],[1,"modal-title"],[1,"modal-footer"],["nz-button","",3,"click","nzType","nzSize"]],template:function(o,a){o&1&&(e(0,`
    `),t(1,"div",0),e(2,`
      `),t(3,"div",1),e(4,"Custom component"),n(),e(5,`
    `),n(),e(6,`
    `),t(7,"p"),e(8),u(9,"json"),n(),e(10,`
    `),t(11,"div",2),e(12,`
      `),t(13,"button",3),l("click",function(){return a.cancel()}),e(14," Cancel "),n(),e(15,`
      `),t(16,"button",3),l("click",function(){return a.ok()}),e(17," OK "),n(),e(18,`
    `),n(),e(19,`
  `)),o&2&&(r(8),d("\u53C2\u6570\uFF1A",f(9,5,a.record),""),r(5),m("nzType","default")("nzSize","large"),r(3),m("nzType","primary")("nzSize","large"))},dependencies:[y,D,x,z,v],encapsulation:2})}}return i})();var W=(()=>{class i{constructor(){this.ref=p(S)}ok(){this.ref.close(`new time: ${+new Date}`),this.cancel()}cancel(){this.ref.close()}static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=c({type:i,selectors:[["app-demo-dialog-drawer"]],inputs:{record:"record"},standalone:!0,features:[s],decls:16,vars:5,consts:[[2,"height","1000px"],["routerLink","/"],[1,"drawer-footer"],["nz-button","",3,"click","nzType"]],template:function(o,a){o&1&&(e(0,`
    `),t(1,"p",0),e(2),u(3,"json"),t(4,"a",1),e(5,"Change Router"),n()(),e(6,`
    The end!
    `),t(7,"div",2),e(8,`
      `),t(9,"button",3),l("click",function(){return a.cancel()}),e(10," Cancel "),n(),e(11,`
      `),t(12,"button",3),l("click",function(){return a.ok()}),e(13," OK "),n(),e(14,`
    `),n(),e(15,`
  `)),o&2&&(r(2),d("\u53C2\u6570\uFF1A",f(3,3,a.record),","),r(7),m("nzType","default"),r(3),m("nzType","primary"))},dependencies:[y,D,x,z,v],encapsulation:2})}}return i})();export{j as a,W as b};
