import{a as jd,b as Hd}from"./chunk-SEOBEKIC.js";import{a as Pn,b as Fn}from"./chunk-W6FQYJJJ.js";import{a as Po,b as Fo,c as Ro,d as Ye}from"./chunk-CAMYUOBZ.js";import{d as md,e as ud,g as vn,h as Sn,i as zn,m as Z,n as X,p as Nd,q as Ed,r as Pd,s as Fd,t as Rd,u as Ad,w as Od}from"./chunk-DLIWRZVA.js";import{a as yd,b as xd,d as Sd,g as zd,i as _d,k as Td,l as wd,m as kd,o as Md}from"./chunk-DYUWTYII.js";import{a as ko,b as vd}from"./chunk-KN6AUK5A.js";import{f as Mo,h as Do,k as No,l as Ke,m as Et,n as Je,o as Nn,p as It}from"./chunk-P56PFOH7.js";import{b as rd,c as ad,d as bn,e as ld,f as cd,g as sd}from"./chunk-QWDF2CY6.js";import{a as id}from"./chunk-CSQMQXXP.js";import{a as Ve}from"./chunk-BAPU3RXT.js";import{a as Mn,b as Dn}from"./chunk-KEP5W537.js";import{a as Eo,b as Io}from"./chunk-J74DGG7F.js";import"./chunk-5TIPCXSN.js";import{a as So,b as zo,c as xn}from"./chunk-6PZE275R.js";import{a as xo,c as gd,d as vo,e as yn}from"./chunk-Y23E5CLJ.js";import{a as Dd}from"./chunk-FYXDU33L.js";import{a as Bd,b as Vd}from"./chunk-OMVTCTHK.js";import{a as H}from"./chunk-YQ6MNYWX.js";import"./chunk-XEXUGHN5.js";import{a as j}from"./chunk-YTWMHDQG.js";import{a as Ld}from"./chunk-46AY7WCX.js";import{a as En,b as In}from"./chunk-SNYW7M2S.js";import"./chunk-MXTZQIFQ.js";import"./chunk-S7VNNC65.js";import{c as Cn,d as pd,e as bd,f as Cd,g as _n,i as _o,o as To,p as wo,q as F,r as R,s as B,t as Id}from"./chunk-TQSE6GJU.js";import{F as de,H as Se,I as st,K as Xe,L as Tn,N as pt,O as wn,P as kn,R as vt,d as Ct,e as me,g as ct,h as Dt,j as $e,k as Gt,l as ve,m as gt,n as Nt,p as Qe,q as Ne,r as ie,s as ue,t as gn,v as ut,w as Ze,x as dd,z as $n}from"./chunk-ADNPNLQV.js";import{A as _i,Ab as G,Bb as _,C as an,Cb as t,D as Re,Db as V,E as ln,Ea as jt,Eb as mt,F as cn,Fa as Mi,Fb as bo,Fe as qi,Fg as Yi,Ga as Di,Gb as L,H as Oe,Hb as A,Ia as c,Ib as O,Ic as Li,Ja as $,Jb as Ae,K as Ti,Ka as He,Kb as f,L as wi,Lb as nt,M as ho,Ma as oe,Mb as Q,Me as Gi,Na as Jt,Nb as Be,Nc as ye,O as lo,Ob as Ei,Og as td,Pa as Ni,Q as sn,Qb as ne,Qd as Wi,Ra as ht,Rb as se,Sa as C,T as ki,Ta as T,Ua as s,Ub as Ii,V as fo,Va as Rt,Vb as P,W as Gn,Wa as k,Wg as ed,X as je,Za as mn,Zb as Pi,Zc as hn,Ze as De,_b as Fi,_c as Oi,a as yt,ag as Tt,ah as fn,b as bi,ba as ce,bb as M,bc as lt,bg as Ot,ca as Xt,cb as kt,cc as Y,cg as N,ch as qe,d as $l,da as pn,db as un,dc as at,dg as E,ea as go,eb as St,ec as Ri,ed as ji,f as Ci,fa as S,fb as zt,fg as D,fh as Ge,g as yi,gb as r,gc as be,gg as $i,gh as od,h as xi,ha as h,hb as a,hg as I,i as vi,ia as Kt,ib as m,ic as Ai,id as Hi,ig as Bt,j as Si,ja as fe,jb as it,jg as xe,jh as nd,k as Yt,kb as dt,kc as we,kd as We,l as rn,lb as ge,ld as At,lg as Qo,mb as w,mc as Bi,mg as Qi,nd as Mt,pa as Pt,pb as v,q as Fe,qa as y,qc as ke,ra as x,rb as b,rc as ee,rh as yo,s as le,sb as J,sc as Vi,sd as pe,tb as U,uc as Me,ue as Ue,ug as Zi,vb as $o,ve as Ui,vg as Xi,wg as Ki,wh as hd,xa as Lt,xb as te,xd as Co,xg as Ji,y as zi,ya as xt,yb as rt,yc as Ce,yd as qt,yh as fd,za as wt,zb as q}from"./chunk-ZSKDB3F4.js";var Jn=$l((Xn,Kn)=>{"use strict";(function(n,e){typeof define=="function"&&define.amd?define([],e):typeof Xn<"u"?e():(e(),n.FileSaver={})})(Xn,function(){"use strict";function n(g,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(g.type)?new Blob(["\uFEFF",g],{type:g.type}):g}function e(g,u,K){var W=new XMLHttpRequest;W.open("GET",g),W.responseType="blob",W.onload=function(){p(W.response,u,K)},W.onerror=function(){console.error("could not download file")},W.send()}function l(g){var u=new XMLHttpRequest;u.open("HEAD",g,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function d(g){try{g.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),g.dispatchEvent(u)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,i=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),p=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(g,u,K){var W=o.URL||o.webkitURL,bt=document.createElement("a");u=u||g.name||"download",bt.download=u,bt.rel="noopener",typeof g=="string"?(bt.href=g,bt.origin===location.origin?d(bt):l(bt.href)?e(g,u,K):d(bt,bt.target="_blank")):(bt.href=W.createObjectURL(g),setTimeout(function(){W.revokeObjectURL(bt.href)},4e4),setTimeout(function(){d(bt)},0))}:"msSaveOrOpenBlob"in navigator?function(g,u,K){if(u=u||g.name||"download",typeof g!="string")navigator.msSaveOrOpenBlob(n(g,K),u);else if(l(g))e(g,u,K);else{var W=document.createElement("a");W.href=g,W.target="_blank",setTimeout(function(){d(W)})}}:function(g,u,K,W){if(W=W||open("","_blank"),W&&(W.document.title=W.document.body.innerText="downloading..."),typeof g=="string")return e(g,u,K);var bt=g.type==="application/octet-stream",_t=/constructor/i.test(o.HTMLElement)||o.safari,Zt=/CriOS\/[\d]+/.test(navigator.userAgent);if((Zt||bt&&_t||i)&&typeof FileReader<"u"){var Ut=new FileReader;Ut.onloadend=function(){var ao=Ut.result;ao=Zt?ao:ao.replace(/^data:[^;]*;/,"data:attachment/file;"),W?W.location.href=ao:location=ao,W=null},Ut.readAsDataURL(g)}else{var Le=o.URL||o.webkitURL,ro=Le.createObjectURL(g);W?W.location=ro:location.href=ro,W=null,setTimeout(function(){Le.revokeObjectURL(ro)},4e4)}});o.saveAs=p.saveAs=p,typeof Kn<"u"&&(Kn.exports=p)})});var Qn=(()=>{let e=class e{constructor(){this.el=S(xt).nativeElement,this.platform=S(pe),this.destroy$=S(Lt),this.enabled=!0,this.delay=300}ngAfterViewInit(){let d=this.el;!this.platform.isBrowser||!(d instanceof HTMLElement)||!this.enabled||Re(this.delay).pipe(Mt(this.destroy$)).subscribe(()=>d.focus({preventScroll:!1}))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275dir=fe({type:e,selectors:[["","auto-focus",""],["input","autofocus","autofocus"],["textarea","autofocus","autofocus"]],inputs:{enabled:[2,"enabled","enabled",Y],delay:[2,"delay","delay",at]},exportAs:["autoFocus"],standalone:!0,features:[ht]});let n=e;return n})();function Ql(n,e){n&1&&(t(0,`
      `),r(1,"div",1),t(2,`
        `),m(3,"input",2),t(4,`
      `),a(),t(5,`
    `))}var Wd=(()=>{let e=class e{constructor(){this.showInput=!1}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-auto-focus-simple"]],standalone:!0,features:[f],decls:5,vars:1,consts:[["nz-button","",3,"click"],[1,"mt-md"],["nz-input","","auto-focus",""]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"button",0),v("click",function(){return i.showInput=!i.showInput}),t(2,"Toggle Input"),a(),t(3,`
    `),C(4,Ql,6,0)),o&2&&(c(4),M(i.showInput?4:-1))},dependencies:[I,D,N,E,pt,st,Qn],encapsulation:2});let n=e;return n})();var Ud=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/auto-focus/index.en-US.md","zh-CN":"packages/abc/auto-focus/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Allows to focus HTML-element right after its appearance, By default, it will take effect for <code>input</code> and <code>textarea</code> with <code>[autofocus="autofocus"]</code>.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="auto-focus"><a class="lake-link"><i data-anchor="auto-focus"></i></a>auto-focus<label class="api-type-label directive">directive</label><label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[enabled]</code></td><td>Whether enabled of auto focus</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>Delay of the focus (unit: ms)</td><td><code>number</code></td><td><code>300</code></td></tr></tbody></table>',meta:{type:"Other",title:"auto-focus",subtitle:"Auto focus",cols:1,module:"import { AutoFocusModule } from '@delon/abc/auto-focus';"},toc:[{id:"API",title:"API",h:2,children:[{id:"auto-focus",title:"auto-focus:standalone",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u5141\u8BB8\u5728HTML\u5143\u7D20\u51FA\u73B0\u540E\u7ACB\u5373\u5BF9\u5176\u8FDB\u884C\u8BBE\u7F6E\u7126\u70B9\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u5BF9 <code>input</code>\u3001<code>textarea</code> \u5E26\u6709 <code>[autofocus="autofocus"]</code> \u751F\u6548\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="auto-focus"><a class="lake-link"><i data-anchor="auto-focus"></i></a>auto-focus<label class="api-type-label directive">directive</label><label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[enabled]</code></td><td>\u662F\u5426\u542F\u7528</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u65F6\u957F\uFF08\u5355\u4F4D\uFF1A\u6BEB\u79D2\uFF09</td><td><code>number</code></td><td><code>300</code></td></tr></tbody></table>',meta:{type:"Other",title:"auto-focus",subtitle:"\u81EA\u52A8\u83B7\u5F97\u7126\u70B9",cols:1,module:"import { AutoFocusModule } from '@delon/abc/auto-focus';"},toc:[{id:"API",title:"API",h:2,children:[{id:"auto-focus",title:"auto-focus:standalone",h:3}]}]}},demo:!0},this.codes=[{id:"components-auto-focus-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';

import { AutoFocusDirective } from '@delon/abc/auto-focus';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'components-auto-focus-simple',
  template: \`
    <button nz-button (click)="showInput = !showInput">Toggle Input</button>
    @if (showInput) {
      <div class="mt-md">
        <input nz-input auto-focus />
      </div>
    }
  \`,
  standalone: true,
  imports: [NzButtonModule, NzInputModule, AutoFocusDirective]
})
export class ComponentsAutoFocusSimpleComponent {
  showInput = false;
}`,lang:"ts",componentName:"ComponentsAutoFocusSimpleComponent",point:0,name:"simple",urls:"packages/abc/auto-focus/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-auto-focus"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-auto-focus-simple"),t(7,`
        `),a(),t(8,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id))},dependencies:[j,H,Wd,B,R,F],encapsulation:2});let n=e;return n})();var Zl=["*"],to=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["avatar-list-item"],["","avatar-list-item",""]],inputs:{src:"src",text:"text",icon:"icon",tips:"tips"},exportAs:["avatarListItem"],standalone:!0,features:[f],ngContentSelectors:Zl,decls:1,vars:0,template:function(o,i){o&1&&(J(),U(0))},encapsulation:2,changeDetection:0});let n=e;return n})();function Xl(n,e){if(n&1&&m(0,"nz-avatar",2),n&2){let l=b().$implicit,d=b();s("nzTooltipTitle",l.tips)("nzSrc",l.src)("nzText",l.text)("nzIcon",l.icon)("nzSize",d.avatarSize)}}function Kl(n,e){if(n&1&&m(0,"nz-avatar",3),n&2){let l=b().$implicit,d=b();s("nzSrc",l.src)("nzText",l.text)("nzIcon",l.icon)("nzSize",d.avatarSize)}}function Jl(n,e){if(n&1&&(r(0,"li",1),C(1,Xl,1,5,"nz-avatar",2)(2,Kl,1,4,"nz-avatar",3),a()),n&2){let l=e.$implicit,d=b();s("ngClass",d.cls),c(),M(l.tips?1:2)}}function Yl(n,e){if(n&1&&(r(0,"li",1),m(1,"nz-avatar",4),a()),n&2){let l=b();s("ngClass",l.cls),c(),s("nzSize",l.avatarSize)("ngStyle",l.excessItemsStyle)("nzText","+"+l.exceedCount)}}var co=(()=>{let e=class e{constructor(){this.cdr=S(lt),this.directionality=S(qt),this.destroy$=S(Lt),this.inited=!1,this.items=[],this.exceedCount=0,this.dir="ltr",this.cls="",this.avatarSize="default",this.maxLength=0,this.excessItemsStyle=null}set size(d){switch(this.cls=`avatar-list__item${d==="default"?"":` avatar-list__${d}`}`,d){case"large":case"small":case"default":this.avatarSize=d;break;default:this.avatarSize="small";break}}gen(){let{_items:d}=this,o=this.maxLength>0?this.maxLength:d.length,i=d.length,p=o>0&&o>=i?i:o;this.items=d.toArray().slice(0,p),this.exceedCount=p<i?i-o:0,this.cdr.detectChanges()}ngAfterViewInit(){this.dir=this.directionality.value,this.directionality.change.pipe(Mt(this.destroy$)).subscribe(d=>{this.dir=d,this.cdr.detectChanges()}),this.gen(),this.inited=!0}ngOnChanges(){this.inited&&this.gen()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["avatar-list"]],contentQueries:function(o,i,p){if(o&1&&te(p,to,4),o&2){let g;q(g=G())&&(i._items=g)}},hostVars:4,hostBindings:function(o,i){o&2&&k("avatar-list",!0)("avatar-list-rtl",i.dir==="rtl")},inputs:{size:"size",maxLength:[2,"maxLength","maxLength",at],excessItemsStyle:"excessItemsStyle"},exportAs:["avatarList"],standalone:!0,features:[ht,Pt,f],decls:4,vars:1,consts:[[1,"avatar-list__wrap"],[3,"ngClass"],["nz-tooltip","",3,"nzTooltipTitle","nzSrc","nzText","nzIcon","nzSize"],[3,"nzSrc","nzText","nzIcon","nzSize"],[2,"cursor","auto",3,"nzSize","ngStyle","nzText"]],template:function(o,i){o&1&&(r(0,"ul",0),St(1,Jl,3,2,"li",1,kt),C(3,Yl,2,4,"li",1),a()),o&2&&(c(),zt(i.items),c(2),M(i.exceedCount>0?3:-1))},dependencies:[ke,we,Pn,de],encapsulation:2,changeDetection:0});let n=e;return n})();var Zo=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=Kt({type:e}),e.\u0275inj=Xt({imports:[Ce,Fn,Se,co]});let n=e;return n})();var tc=()=>({color:"#f56a00",backgroundColor:"#fde3cf"}),$d=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-avatar-list-maxLength"]],standalone:!0,features:[f],decls:13,vars:2,consts:[["size","mini","maxLength","3",3,"excessItemsStyle"],["tips","Jake","src","https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"],["tips","Andy","src","https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"],["tips","Niko","src","https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"],["tips","Cipchk","text","Cipchk"],["tips","heart-o","icon","heart-o"]],template:function(o,i){o&1&&(t(0," "),r(1,"avatar-list",0),t(2,`
    `),m(3,"avatar-list-item",1),t(4,`
    `),m(5,"avatar-list-item",2),t(6,`
    `),m(7,"avatar-list-item",3),t(8,`
    `),m(9,"avatar-list-item",4),t(10,`
    `),m(11,"avatar-list-item",5),t(12,`
  `),a()),o&2&&(c(),s("excessItemsStyle",nt(1,tc)))},dependencies:[Zo,co,to],encapsulation:2});let n=e;return n})();var Qd=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-avatar-list-simple"]],standalone:!0,features:[f],decls:13,vars:0,consts:[["size","mini"],["tips","Jake","src","https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"],["tips","Andy","src","https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"],["tips","Niko","src","https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"],["tips","Cipchk","text","Cipchk"],["tips","heart-o","icon","heart-o"]],template:function(o,i){o&1&&(t(0," "),r(1,"avatar-list",0),t(2,`
    `),m(3,"avatar-list-item",1),t(4,`
    `),m(5,"avatar-list-item",2),t(6,`
    `),m(7,"avatar-list-item",3),t(8,`
    `),m(9,"avatar-list-item",4),t(10,`
    `),m(11,"avatar-list-item",5),t(12,`
  `),a())},dependencies:[Zo,co,to],encapsulation:2});let n=e;return n})();var Zd=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/avatar-list/index.en-US.md","zh-CN":"packages/abc/avatar-list/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>A list of user's avatar for project or group member list frequently. If a large or small avatar-list is desired, set the <code>size</code> property to either <code>large</code> or <code>small</code> and <code>mini</code> respectively. Omit the <code>size</code> property for a avatar-list with the default size.</p></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="avatar-list"><a class="lake-link"><i data-anchor="avatar-list"></i></a>avatar-list<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[size]</code></td><td>size of list</td><td><code>'large','small','mini','default'</code></td><td><code>'default'</code></td></tr><tr><td><code>[maxLength]</code></td><td>max items to show</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[excessItemsStyle]</code></td><td>the excess item style</td><td><code>{ [key: string]: string }</code></td><td>-</td></tr></tbody></table><h3 id="avatar-list-item"><a class="lake-link"><i data-anchor="avatar-list-item"></i></a>avatar-list-item<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[tips]</code></td><td>title tips for avatar item</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[src]</code></td><td>the address of the image for an image avatar</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[text]</code></td><td>text for avatar item</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[icon]</code></td><td>icon for avatar item</td><td><code>string</code></td><td>-</td></tr></tbody></table>`,meta:{type:"Basic",title:"avatar-list",subtitle:"AvatarList",cols:1,module:"import { AvatarListModule } from '@delon/abc/avatar-list';"},toc:[{id:"API",title:"API",h:2,children:[{id:"avatar-list",title:"avatar-list:standalone",h:3},{id:"avatar-list-item",title:"avatar-list-item:standalone",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u4E00\u7EC4\u7528\u6237\u5934\u50CF\uFF0C\u5E38\u7528\u5728\u9879\u76EE/\u56E2\u961F\u6210\u5458\u5217\u8868\u3002\u53EF\u901A\u8FC7\u8BBE\u7F6E <code>size</code> \u5C5E\u6027\u6765\u6307\u5B9A\u5934\u50CF\u5927\u5C0F\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="avatar-list"><a class="lake-link"><i data-anchor="avatar-list"></i></a>avatar-list<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[size]</code></td><td>\u5934\u50CF\u5927\u5C0F</td><td><code>'large','small','mini','default'</code></td><td><code>'default'</code></td></tr><tr><td><code>[maxLength]</code></td><td>\u8981\u663E\u793A\u7684\u6700\u5927\u9879\u76EE</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[excessItemsStyle]</code></td><td>\u591A\u4F59\u7684\u9879\u76EE\u98CE\u683C</td><td><code>{ [key: string]: string }</code></td><td>-</td></tr></tbody></table><h3 id="avatar-list-item"><a class="lake-link"><i data-anchor="avatar-list-item"></i></a>avatar-list-item<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[tips]</code></td><td>\u5934\u50CF\u5C55\u793A\u6587\u6848</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[src]</code></td><td>\u5934\u50CF\u56FE\u7247\u8FDE\u63A5</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[text]</code></td><td>\u6587\u672C\u7C7B\u5934\u50CF</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[icon]</code></td><td>\u56FE\u6807\u7C7B\u578B</td><td><code>string</code></td><td>-</td></tr></tbody></table>`,meta:{type:"Basic",title:"avatar-list",subtitle:"\u7528\u6237\u5934\u50CF\u5217\u8868",cols:1,module:"import { AvatarListModule } from '@delon/abc/avatar-list';"},toc:[{id:"API",title:"API",h:2,children:[{id:"avatar-list",title:"avatar-list:standalone",h:3},{id:"avatar-list-item",title:"avatar-list-item:standalone",h:3}]}]}},demo:!0},this.codes=[{id:"components-avatar-list-maxLength",meta:{title:{"zh-CN":"\u8981\u663E\u793A\u7684\u6700\u5927\u9879\u76EE","en-US":"Max Items to Show"},order:0},summary:`<p><code>maxLength</code> attribute specifies the maximum number of items to show while <code>excessItemsStyle</code> style the excess
item component.</p>`,code:`import { Component } from '@angular/core';

import { AvatarListModule } from '@delon/abc/avatar-list';

@Component({
  selector: 'components-avatar-list-maxLength',
  template: \` <avatar-list
    size="mini"
    maxLength="3"
    [excessItemsStyle]="{ color: '#f56a00', backgroundColor: '#fde3cf' }"
  >
    <avatar-list-item tips="Jake" src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" />
    <avatar-list-item tips="Andy" src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png" />
    <avatar-list-item tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />
    <avatar-list-item tips="Cipchk" text="Cipchk" />
    <avatar-list-item tips="heart-o" icon="heart-o" />
  </avatar-list>\`,
  standalone: true,
  imports: [AvatarListModule]
})
export class ComponentsAvatarListMaxLengthComponent {}`,lang:"ts",componentName:"ComponentsAvatarListMaxLengthComponent",point:0,name:"maxLength",urls:"packages/abc/avatar-list/demo/maxLength.md",type:"demo"},{id:"components-avatar-list-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';

import { AvatarListModule } from '@delon/abc/avatar-list';

@Component({
  selector: 'components-avatar-list-simple',
  template: \` <avatar-list size="mini">
    <avatar-list-item tips="Jake" src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" />
    <avatar-list-item tips="Andy" src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png" />
    <avatar-list-item tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />
    <avatar-list-item tips="Cipchk" text="Cipchk" />
    <avatar-list-item tips="heart-o" icon="heart-o" />
  </avatar-list>\`,
  standalone: true,
  imports: [AvatarListModule]
})
export class ComponentsAvatarListSimpleComponent {}`,lang:"ts",componentName:"ComponentsAvatarListSimpleComponent",point:1,name:"simple",urls:"packages/abc/avatar-list/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-avatar-list"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-avatar-list-maxLength"),t(7,`
        `),a(),t(8,`
      
        `),r(9,"code-box",3),t(10,`
          `),m(11,"components-avatar-list-simple"),t(12,`
        `),a(),t(13,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id),c(5),s("item",i.codes[1]),T("id",i.codes[1].id))},dependencies:[j,H,$d,Qd,B,R,F],encapsulation:2});let n=e;return n})();var ec=()=>({format:"fn"}),oc=n=>({date:n}),nc=()=>({type:"mega"}),ic=()=>({mask:"999****9999"}),dc=()=>({unit:"$"}),rc=()=>({type:"cny"}),ac=()=>({type:"boolean"}),Xd=()=>({type:"img"}),lc=()=>["https://randomuser.me/api/portraits/thumb/women/46.jpg","https://randomuser.me/api/portraits/thumb/women/47.jpg"],cc=()=>({url:"https://ng-alain.com"}),sc=n=>({link:n}),pc=()=>({type:"html"}),Kd=n=>({data:n}),mc=n=>({badge:n}),uc=n=>({tag:n}),hc=()=>({label:"Label"}),fc=n=>({type:"checkbox",tooltip:"Tooltip",checkbox:n}),gc=()=>({label:"Radio"}),bc=n=>({type:"radio",tooltip:"Tooltip",radio:n}),Cc=n=>({enum:n}),yc=()=>({tooltip:"Tooltip"}),xc=()=>({unit:"\u4EBA"}),vc=()=>({text:"100",unit:"\u5143"}),Sc=()=>({key:"test",data:"new url"}),zc=n=>({widget:n}),_c=n=>({renderType:n});function Tc(n,e){if(n&1&&(t(0,`
        `),r(1,"div",1),t(2),ne(3,"json"),m(4,"cell",10),t(5," "),a(),t(6,`
      `)),n&2){let l=e.$implicit;c(2),mt(" ",se(3,2,l)," => "),c(2),s("value",l)}}function wc(n,e){if(n&1&&(t(0,`
        `),r(1,"div",1),t(2),m(3,"cell",2),t(4,`
        `),a(),t(5,`
      `)),n&2){let l=e.$implicit;c(2),mt(`
          `,l,` =>
          `),c(),s("value",l)("options",Q(3,_c,l))}}function kc(n,e){if(n&1){let l=w();t(0,`
          `),r(1,"a",20),v("click",function(){y(l);let o=b();return x(o.again())}),t(2,"Again"),a(),t(3,`
        `)}}var Jd=(()=>{let e=class e{constructor(){this.ds=S(ye),this.cdr=S(lt),this.value="string",this.imageValue="https://randomuser.me/api/portraits/thumb/women/47.jpg",this.checkbox=!1,this.radio=!0,this.disabled=!1,this.yn=!0,this.default="-",this.defaultCondition="*",this.baseList=["string",!0,!1,100,1e6,new Date],this.typeList=["primary","success","danger","warning"],this.now=new Date,this.day3=Ji(new Date,3),this.HTML="<strong>Strong</string>",this.status={WAIT:{text:"Wait",tooltip:"Refers to waiting for the user to ship"},FINISHED:{text:"Done",color:"success"}},this.loading=!0,this.asyncLoading=!0,this.safeHtml=this.ds.bypassSecurityTrustHtml("<strong>Strong Html</strong>"),this.enum={1:"Success",2:"Error"},this.enumValue=1,this.bigImg={img:{size:32,big:!0}}}ngOnInit(){this.again()}refresh(){this.value=new Date,this.cdr.detectChanges()}again(){this.asyncLoading=!0,this.async=()=>le({text:`${+new Date}`}).pipe(ho(1),lo(1e3*1),sn(()=>{this.asyncLoading=!1,this.cdr.detectChanges()})),this.cdr.detectChanges()}updateSafeHtml(){this.safeHtml=this.ds.bypassSecurityTrustHtml("alert('a');<script>alert('a')<\/script>"),this.cdr.detectChanges()}refreshImage(){this.imageValue=`https://randomuser.me/api/portraits/thumb/women/${Math.floor(Math.random()*50)+10}.jpg`,this.cdr.detectChanges()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-cell-simple"]],standalone:!0,features:[f],decls:165,vars:75,consts:[["nz-row","","nzGutter","16",1,"mt-md"],["nz-col","","nzSpan","8"],[3,"value","options"],["value","15900000000","size","large",3,"options"],["value","15900000000",3,"options"],["value","100000",3,"options"],[3,"click"],["value","https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",3,"options"],["value","Link",3,"options","disabled"],[1,"ml-sm",3,"click"],[3,"value"],["value","FINISHED",3,"options"],["value","WAIT",3,"options"],[3,"valueChange","value","options","disabled"],[3,"valueChange","value","options"],["value","small","size","small"],["value","default"],["value","large","size","large"],["value","tooltip",3,"options"],["value","Done",3,"loading"],[1,"ml-md",3,"click"],[3,"value","loading"],["value","3",3,"options"]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"div",0),t(2,`
      `),St(3,Tc,7,4,null,null,kt),r(5,"div",1),t(6," date-fn => "),m(7,"cell",2),t(8," "),a(),t(9,`
      `),r(10,"div",1),t(11," mega => "),m(12,"cell",3),t(13," "),a(),t(14,`
      `),r(15,"div",1),t(16," mask => "),m(17,"cell",4),t(18," "),a(),t(19,`
      `),r(20,"div",1),t(21," currency => "),m(22,"cell",5),t(23," "),a(),t(24,`
      `),r(25,"div",1),t(26," cny => "),m(27,"cell",5),t(28," "),a(),t(29,`
      `),r(30,"div",1),t(31,`
        yn => `),m(32,"cell",2),t(33,`
        `),r(34,"a",6),v("click",function(){return i.yn=!i.yn}),t(35,"Change Value"),a(),t(36,`
      `),a(),t(37,`
      `),r(38,"div",1),t(39,`
        img =>
        `),m(40,"cell",7),t(41,`
      `),a(),t(42,`
      `),r(43,"div",1),t(44,`
        img preview =>
        `),m(45,"cell",7),t(46,`
      `),a(),t(47,`
      `),r(48,"div",1),t(49,`
        img list =>
        `),m(50,"cell",2),t(51,`
      `),a(),t(52,`
      `),r(53,"div",1),t(54,`
        link =>
        `),m(55,"cell",8),t(56,`
        `),r(57,"a",9),v("click",function(){return i.disabled=!i.disabled}),t(58,"Change Disabled"),a(),t(59,`
      `),a(),t(60,`
      `),r(61,"div",1),t(62,`
        html =>
        `),m(63,"cell",2),t(64,`
      `),a(),t(65,`
      `),r(66,"div",1),t(67,`
        SafeHtml =>
        `),m(68,"cell",10),t(69,`
        `),r(70,"a",9),v("click",function(){return i.updateSafeHtml()}),t(71,"updateSafeHtml"),a(),t(72,`
      `),a(),t(73,`
      `),r(74,"div",1),t(75,`
        badge =>
        `),m(76,"cell",11),t(77,`
      `),a(),t(78,`
      `),r(79,"div",1),t(80,`
        tag =>
        `),m(81,"cell",12),t(82,`
      `),a(),t(83,`
      `),r(84,"div",1),t(85,`
        checkbox =>
        `),r(86,"cell",13),O("valueChange",function(g){return A(i.checkbox,g)||(i.checkbox=g),g}),a(),t(87,`
        `),r(88,"a",9),v("click",function(){return i.disabled=!i.disabled}),t(89,"Change Disabled"),a(),t(90,`
      `),a(),t(91,`
      `),r(92,"div",1),t(93,`
        radio =>
        `),r(94,"cell",13),O("valueChange",function(g){return A(i.radio,g)||(i.radio=g),g}),a(),t(95,`
        `),r(96,"a",6),v("click",function(){return i.radio=!i.radio}),t(97,"Change Value"),a(),t(98,`
        `),r(99,"a",9),v("click",function(){return i.disabled=!i.disabled}),t(100,"Change Disabled"),a(),t(101,`
      `),a(),t(102,`
      `),r(103,"div",1),t(104,`
        enum =>
        `),r(105,"cell",14),O("valueChange",function(g){return A(i.enumValue,g)||(i.enumValue=g),g}),a(),t(106,`
        `),r(107,"a",6),v("click",function(){return i.enumValue=i.enumValue===1?2:1}),t(108,"Change Value"),a(),t(109),a(),t(110,`
      `),r(111,"div",1),t(112,`
        default =>
        `),m(113,"cell",10),t(114,`
      `),a(),t(115,`
      `),St(116,wc,6,5,null,null,kt),r(118,"div",1),t(119,`
        size =>
        `),m(120,"cell",15),t(121,", "),m(122,"cell",16),t(123,`,
        `),m(124,"cell",17),t(125,`
      `),a(),t(126,`
      `),r(127,"div",1),t(128,`
        tooltip =>
        `),m(129,"cell",18),t(130,`
      `),a(),t(131,`
      `),r(132,"div",1),t(133,`
        loading =>
        `),m(134,"cell",19),t(135,`
        `),r(136,"a",20),v("click",function(){return i.loading=!i.loading}),t(137,"Change"),a(),t(138,`
      `),a(),t(139,`
      `),r(140,"div",1),t(141,`
        Async =>
        `),m(142,"cell",21),t(143,`
        `),C(144,kc,4,0),a(),t(145,`
      `),r(146,"div",1),t(147," Unit => "),m(148,"cell",22),t(149," "),a(),t(150,`
      `),r(151,"div",1),t(152," Text Unit => "),m(153,"cell",10),t(154," "),a(),t(155,`
      `),r(156,"div",1),t(157,`
        custom widget =>
        `),m(158,"cell",2),t(159,`
        `),r(160,"a",6),v("click",function(){return i.refreshImage()}),t(161,"Refresh Image"),a(),t(162,`
      `),a(),t(163,`
    `),a(),t(164,`
  `)),o&2&&(c(3),zt(i.baseList),c(4),s("value",i.day3)("options",Q(39,oc,nt(38,ec))),c(5),s("options",nt(41,nc)),c(5),s("options",nt(42,ic)),c(5),s("options",nt(43,dc)),c(5),s("options",nt(44,rc)),c(5),s("value",i.yn)("options",nt(45,ac)),c(8),s("options",nt(46,Xd)),c(5),s("options",i.bigImg),c(5),s("value",nt(47,lc))("options",nt(48,Xd)),c(5),s("options",Q(50,sc,nt(49,cc)))("disabled",i.disabled),c(8),s("value",i.HTML)("options",nt(52,pc)),c(5),s("value",i.safeHtml),c(8),s("options",Q(55,mc,Q(53,Kd,i.status))),c(5),s("options",Q(59,uc,Q(57,Kd,i.status))),c(5),L("value",i.checkbox),s("options",Q(62,fc,nt(61,hc)))("disabled",i.disabled),c(8),L("value",i.radio),s("options",Q(65,bc,nt(64,gc)))("disabled",i.disabled),c(11),L("value",i.enumValue),s("options",Q(67,Cc,i.enum)),c(4),mt("(enum value: ",i.enumValue,`)
      `),c(4),s("value",null),c(3),zt(i.typeList),c(13),s("options",nt(69,yc)),c(5),s("loading",i.loading),c(8),s("value",i.async)("loading",i.asyncLoading),c(2),M(i.asyncLoading?-1:144),c(4),s("options",nt(70,xc)),c(5),s("value",nt(71,vc)),c(5),s("value",i.imageValue)("options",Q(73,zc,nt(72,Sc))))},dependencies:[ud,md,ut,Me,B,R,F],styles:["[_nghost-%COMP%]     .ant-col{margin-bottom:8px}"],changeDetection:0});let n=e;return n})();var Yd=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/cell/index.en-US.md","zh-CN":"packages/abc/cell/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Cell formatting is supported for multiple data types, and supports widget mode.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="cell"><a class="lake-link"><i data-anchor="cell"></i></a>cell<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[value]</code></td><td>Value of the cell</td><td><code>unknown</code></td><td>-</td></tr><tr><td><code>[options]</code></td><td>Option of the cell</td><td><code><a data-toc="CellOptions">CellOptions</a></code></td><td>-</td></tr><tr><td><code>[loading]</code></td><td>Whether loading</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="CellOptions"><a class="lake-link"><i data-anchor="CellOptions"></i></a>CellOptions</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>Render type of the cell</td><td>-</td><td>-</td></tr><tr><td><code>[tooltip]</code></td><td>Text popup tip</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[renderType]</code></td><td>Render type of the cell</td><td><code>primary,success,danger,warning</code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>Size of the cell</td><td><code>large,small</code></td><td>-</td></tr><tr><td><code>[unit]</code></td><td>Unit, can also be specified by <code>value: {text: 100, unit: 'RMB'}</code></td><td><code>string</code></td><td><code>-</code></td></tr><tr><td><code>[default]</code></td><td>Default text</td><td><code>string | CellDefaultText</code></td><td>-</td></tr><tr><td><code>[mask]</code></td><td>Format mask, <a href="https://ng-alain.com/util/format/en#formatMask" data-url="https://ng-alain.com/util/format/en#formatMask">Document</a></td><td><code>string, FormatMaskOption</code></td><td>-</td></tr><tr><td><code>[widget]</code></td><td>Widget config</td><td><code>{key?: string, data?: string}</code></td><td>-</td></tr><tr><td><code>[date]</code></td><td>Date config, supports <code>minutes ago</code> formatting</td><td><code>{format?: string}</code></td><td>-</td></tr><tr><td><code>[mega]</code></td><td>Large number format filter, <a href="https://ng-alain.com/util/format/en#mega" data-url="https://ng-alain.com/util/format/en#mega">Document</a></td><td><code>CurrencyMegaOptions</code></td><td>-</td></tr><tr><td><code>[currency]</code></td><td>Currency config</td><td><code>CurrencyFormatOptions</code></td><td>-</td></tr><tr><td><code>[boolean]</code></td><td>Boolean config</td><td><code>YNOptions</code></td><td>-</td></tr><tr><td><code>[img]</code></td><td>Image config, support large image preview</td><td><code>{ size?: number; big?: boolean }</code></td><td>-</td></tr><tr><td><code>[link]</code></td><td>Link config</td><td><code>{ url?: string; target?: string }</code></td><td>-</td></tr><tr><td><code>[html]</code></td><td>HTML config</td><td><code>{ safe?: string }</code></td><td>-</td></tr><tr><td><code>[badge]</code></td><td>Badge config</td><td><code>{ data?: CellBadge }</code></td><td>-</td></tr><tr><td><code>[tag]</code></td><td>Tag config</td><td><code>{ data?: CellTag }</code></td><td>-</td></tr><tr><td><code>[checkbox]</code></td><td>Checkbox config</td><td><code>{ label?: string }</code></td><td>-</td></tr><tr><td><code>[radio]</code></td><td>Radio config</td><td><code>{ label?: string }</code></td><td>-</td></tr></tbody></table><p><strong>Type</strong></p><ul><li><p><code>string</code> String</p></li><li><p><code>number</code> Number</p></li><li><p><code>mega</code> Large number format filter, <a href="https://ng-alain.com/util/format/en#mega" data-url="https://ng-alain.com/util/format/en#mega">Document</a></p></li><li><p><code>currency</code> Currency</p></li><li><p><code>cny</code> Converted into RMB notation</p></li><li><p><code>boolean</code> Boolean</p></li><li><p><code>date</code> Date</p></li><li><p><code>img</code> Image, support large image preview</p></li><li><p><code>link</code> Link</p></li><li><p><code>html</code> HTML</p></li><li><p><code>badge</code> Badge</p></li><li><p><code>tag</code> Tag</p></li><li><p><code>checkbox</code> Checkbox (Support <code>disabled</code>)</p></li><li><p><code>radio</code> Radio (Support <code>disabled</code>)</p></li><li><p><code>enum</code> Enum</p></li><li><p><code>widget</code> Custom widget</p></li></ul><h2 id="Customwidget"><a class="lake-link"><i data-anchor="Customwidget"></i></a>Customwidget</h2><p>Just implement the <code>CellWidgetInstance</code> interface, for example:</p><pre class="hljs language-ts"><code>import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import type { CellTextResult, CellWidgetInstance } from '@delon/abc/cell';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'cell-widget-test',
  template: \`&lt;img nz-tooltip nzTooltipTitle="Client it" [src]="data.result.text" class="img" style="cursor: pointer" /&gt; \`,
  host: {
    '(click)': 'show()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ NzToolTipModule ]
})
export class CellTestWidget implements CellWidgetInstance {
  private readonly msg = inject(NzMessageService);
  static readonly KEY = 'test';

  readonly data!: CellTextResult;

  show(): void {
    this.msg.info(\`click\`);
  }
}</code></pre><p><code>data</code> is a fixed parameter, including <code>value</code>, <code>options</code> configuration items.</p><p>Finally, register the widget through <code>provideCellWidgets</code> under <code>app.config.ts</code>, for example:</p><pre class="hljs language-ts"><code>export const appConfig: ApplicationConfig = {
  providers: [
    provideCellWidgets(
      { KEY: CellTestWidget.KEY, type: CellTestWidget }
    ),
  ]
}</code></pre>`,meta:{type:"CURD",title:"cell",subtitle:"Cell Data",cols:1,order:4,module:"import { CellModule } from '@delon/abc/cell';"},toc:[{id:"API",title:"API",h:2,children:[{id:"cell",title:"cell:standalone",h:3},{id:"CellOptions",title:"CellOptions",h:3}]},{id:"Customwidget",title:"Custom widget",h:2}]},"zh-CN":{content:'<section class="markdown"><p>\u5185\u7F6E\u652F\u6301\u5341\u51E0\u79CD\u6570\u636E\u7C7B\u578B\u7684\u683C\u5F0F\u5316\uFF0C\u4E14\u652F\u6301\u5C0F\u90E8\u4EF6\u81EA\u5B9A\u4E49\u6A21\u5F0F\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="cell"><a class="lake-link"><i data-anchor="cell"></i></a>cell<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[value]</code></td><td>\u503C</td><td><code>unknown</code></td><td>-</td></tr><tr><td><code>[options]</code></td><td>\u9009\u9879</td><td><code><a data-toc="CellOptions">CellOptions</a></code></td><td>-</td></tr><tr><td><code>[loading]</code></td><td>\u662F\u5426\u52A0\u8F7D\u4E2D</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="CellOptions"><a class="lake-link"><i data-anchor="CellOptions"></i></a>CellOptions</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>\u6E32\u67D3\u7C7B\u578B</td><td>-</td><td>-</td></tr><tr><td><code>[tooltip]</code></td><td>\u6587\u5B57\u63D0\u793A</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[renderType]</code></td><td>\u6E32\u67D3\u7C7B\u578B</td><td><code>primary,success,danger,warning</code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>\u5927\u5C0F</td><td><code>large,small</code></td><td>-</td></tr><tr><td><code>[unit]</code></td><td>\u5355\u4F4D\uFF0C\u4E5F\u53EF\u901A\u8FC7 <code>value: {text: 100, unit: '\u5143'}</code> \u6765\u6307\u5B9A</td><td><code>string</code></td><td><code>-</code></td></tr><tr><td><code>[default]</code></td><td>\u9ED8\u8BA4\u6587\u672C</td><td><code>string | CellDefaultText</code></td><td>-</td></tr><tr><td><code>[mask]</code></td><td>\u683C\u5F0F\u5316\u63A9\u7801, \u53C2\u8003<a href="https://ng-alain.com/util/format/zh#formatMask" data-url="https://ng-alain.com/util/format/zh#formatMask">\u6587\u6863</a></td><td><code>string, FormatMaskOption</code></td><td>-</td></tr><tr><td><code>[widget]</code></td><td>\u5C0F\u90E8\u4EF6\u914D\u7F6E</td><td><code>{key?: string, data?: string}</code></td><td>-</td></tr><tr><td><code>[date]</code></td><td>\u65E5\u671F\u914D\u7F6E\uFF0C\u652F\u6301 <code>\u51E0\u5206\u949F\u524D</code> \u683C\u5F0F\u5316</td><td><code>{format?: string}</code></td><td>-</td></tr><tr><td><code>[mega]</code></td><td>\u5927\u6570\u636E\u683C\u5F0F\u5316\u914D\u7F6E</td><td><code>CurrencyMegaOptions</code></td><td>-</td></tr><tr><td><code>[currency]</code></td><td>\u8D27\u5E01\u914D\u7F6E</td><td><code>CurrencyFormatOptions</code></td><td>-</td></tr><tr><td><code>[boolean]</code></td><td>\u5E03\u5C14\u914D\u7F6E</td><td><code>YNOptions</code></td><td>-</td></tr><tr><td><code>[img]</code></td><td>\u56FE\u50CF\u914D\u7F6E\uFF0C\u652F\u6301\u5927\u56FE\u9884\u89C8</td><td><code>{ size?: number; big?: boolean }</code></td><td>-</td></tr><tr><td><code>[link]</code></td><td>\u94FE\u63A5\u914D\u7F6E</td><td><code>{ url?: string; target?: string }</code></td><td>-</td></tr><tr><td><code>[html]</code></td><td>HTML \u914D\u7F6E</td><td><code>{ safe?: string }</code></td><td>-</td></tr><tr><td><code>[badge]</code></td><td>\u5FBD\u7AE0\u914D\u7F6E</td><td><code>{ data?: CellBadge }</code></td><td>-</td></tr><tr><td><code>[tag]</code></td><td>\u6807\u7B7E\u914D\u7F6E</td><td><code>{ data?: CellTag }</code></td><td>-</td></tr><tr><td><code>[checkbox]</code></td><td>\u590D\u9009\u6846\u914D\u7F6E</td><td><code>{ label?: string }</code></td><td>-</td></tr><tr><td><code>[radio]</code></td><td>\u5355\u9009\u6846\u914D\u7F6E</td><td><code>{ label?: string }</code></td><td>-</td></tr></tbody></table><p><strong>\u6E32\u67D3\u7C7B\u578B</strong></p><ul><li><p><code>string</code> \u5B57\u7B26\u4E32</p></li><li><p><code>number</code> \u6570\u5B57</p></li><li><p><code>mega</code> \u5927\u6570\u636E\u683C\u5F0F\u5316</p></li><li><p><code>currency</code> \u8D27\u5E01</p></li><li><p><code>cny</code> \u8F6C\u5316\u6210\u4EBA\u6C11\u5E01\u8868\u793A\u6CD5</p></li><li><p><code>boolean</code> \u5E03\u5C14</p></li><li><p><code>date</code> \u65E5\u671F</p></li><li><p><code>img</code> \u56FE\u50CF\uFF0C\u652F\u6301\u5927\u56FE\u9884\u89C8</p></li><li><p><code>link</code> \u94FE\u63A5</p></li><li><p><code>html</code> HTML</p></li><li><p><code>badge</code> \u5FBD\u7AE0</p></li><li><p><code>tag</code> \u6807\u7B7E</p></li><li><p><code>checkbox</code> \u590D\u9009\u6846\uFF08\u652F\u6301 <code>disabled</code>\uFF09</p></li><li><p><code>radio</code> \u5355\u9009\u6846\uFF08\u652F\u6301 <code>disabled</code>\uFF09</p></li><li><p><code>enum</code> \u679A\u4E3E\u8F6C\u6362</p></li><li><p><code>widget</code> \u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6</p></li></ul><h2 id="\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6"><a class="lake-link"><i data-anchor="\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6"></i></a>\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6</h2><p>\u5B9E\u73B0 <code>CellWidgetInstance</code> \u63A5\u53E3\u5373\u53EF\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-ts"><code>import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import type { CellTextResult, CellWidgetInstance } from '@delon/abc/cell';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'cell-widget-test',
  template: \`&lt;img nz-tooltip nzTooltipTitle="Client it" [src]="data.result.text" class="img" style="cursor: pointer" /&gt; \`,
  host: {
    '(click)': 'show()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ NzToolTipModule ]
})
export class CellTestWidget implements CellWidgetInstance {
  private readonly msg = inject(NzMessageService);
  static readonly KEY = 'test';

  readonly data!: CellTextResult;

  show(): void {
    this.msg.info(\`click\`);
  }
}</code></pre><p>\u5176\u4E2D <code>data</code> \u4E3A\u56FA\u5B9A\u53C2\u6570\uFF0C\u5305\u542B <code>value</code>\u3001<code>options</code> \u914D\u7F6E\u9879\u3002</p><p>\u6700\u540E\u5728 <code>app.config.ts</code> \u4E0B\u901A\u8FC7 <code>provideCellWidgets</code> \u6CE8\u518C\u5C0F\u90E8\u4EF6\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-ts"><code>export const appConfig: ApplicationConfig = {
  providers: [
    provideCellWidgets(
      { KEY: CellTestWidget.KEY, type: CellTestWidget }
    ),
  ]
}</code></pre>`,meta:{type:"CURD",title:"cell",subtitle:"\u5355\u5143\u683C\u6570\u636E",cols:1,order:4,module:"import { CellModule } from '@delon/abc/cell';"},toc:[{id:"API",title:"API",h:2,children:[{id:"cell",title:"cell:standalone",h:3},{id:"CellOptions",title:"CellOptions",h:3}]},{id:"\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6",title:"\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6",h:2}]}},demo:!0},this.codes=[{id:"components-cell-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { delay, finalize, of, take } from 'rxjs';

import { subDays } from 'date-fns';

import { CellBadge, CellFuValue, CellModule, CellOptions, CellRenderType } from '@delon/abc/cell';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'components-cell-simple',
  template: \`
    <div nz-row nzGutter="16" class="mt-md">
      @for (i of baseList; track $index) {
        <div nz-col nzSpan="8"> {{ i | json }} => <cell [value]="i" /> </div>
      }
      <div nz-col nzSpan="8"> date-fn => <cell [value]="day3" [options]="{ date: { format: 'fn' } }" /> </div>
      <div nz-col nzSpan="8"> mega => <cell value="15900000000" size="large" [options]="{ type: 'mega' }" /> </div>
      <div nz-col nzSpan="8"> mask => <cell value="15900000000" [options]="{ mask: '999****9999' }" /> </div>
      <div nz-col nzSpan="8"> currency => <cell value="100000" [options]="{ unit: '$' }" /> </div>
      <div nz-col nzSpan="8"> cny => <cell value="100000" [options]="{ type: 'cny' }" /> </div>
      <div nz-col nzSpan="8">
        yn => <cell [value]="yn" [options]="{ type: 'boolean' }" />
        <a (click)="yn = !yn">Change Value</a>
      </div>
      <div nz-col nzSpan="8">
        img =>
        <cell
          value="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          [options]="{ type: 'img' }"
        />
      </div>
      <div nz-col nzSpan="8">
        img preview =>
        <cell value="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" [options]="bigImg" />
      </div>
      <div nz-col nzSpan="8">
        img list =>
        <cell
          [value]="[
            'https://randomuser.me/api/portraits/thumb/women/46.jpg',
            'https://randomuser.me/api/portraits/thumb/women/47.jpg'
          ]"
          [options]="{ type: 'img' }"
        />
      </div>
      <div nz-col nzSpan="8">
        link =>
        <cell value="Link" [options]="{ link: { url: 'https://ng-alain.com' } }" [disabled]="disabled" />
        <a (click)="disabled = !disabled" class="ml-sm">Change Disabled</a>
      </div>
      <div nz-col nzSpan="8">
        html =>
        <cell [value]="HTML" [options]="{ type: 'html' }" />
      </div>
      <div nz-col nzSpan="8">
        SafeHtml =>
        <cell [value]="safeHtml" />
        <a (click)="updateSafeHtml()" class="ml-sm">updateSafeHtml</a>
      </div>
      <div nz-col nzSpan="8">
        badge =>
        <cell value="FINISHED" [options]="{ badge: { data: status } }" />
      </div>
      <div nz-col nzSpan="8">
        tag =>
        <cell value="WAIT" [options]="{ tag: { data: status } }" />
      </div>
      <div nz-col nzSpan="8">
        checkbox =>
        <cell
          [(value)]="checkbox"
          [options]="{ type: 'checkbox', tooltip: 'Tooltip', checkbox: { label: 'Label' } }"
          [disabled]="disabled"
        />
        <a (click)="disabled = !disabled" class="ml-sm">Change Disabled</a>
      </div>
      <div nz-col nzSpan="8">
        radio =>
        <cell
          [(value)]="radio"
          [options]="{ type: 'radio', tooltip: 'Tooltip', radio: { label: 'Radio' } }"
          [disabled]="disabled"
        />
        <a (click)="radio = !radio">Change Value</a>
        <a (click)="disabled = !disabled" class="ml-sm">Change Disabled</a>
      </div>
      <div nz-col nzSpan="8">
        enum =>
        <cell [(value)]="enumValue" [options]="{ enum }" />
        <a (click)="enumValue = enumValue === 1 ? 2 : 1">Change Value</a>(enum value: {{ enumValue }})
      </div>
      <div nz-col nzSpan="8">
        default =>
        <cell [value]="null" />
      </div>
      @for (i of typeList; track $index) {
        <div nz-col nzSpan="8">
          {{ i }} =>
          <cell [value]="i" [options]="{ renderType: i }" />
        </div>
      }
      <div nz-col nzSpan="8">
        size =>
        <cell value="small" size="small" />, <cell value="default" />,
        <cell value="large" size="large" />
      </div>
      <div nz-col nzSpan="8">
        tooltip =>
        <cell value="tooltip" [options]="{ tooltip: 'Tooltip' }" />
      </div>
      <div nz-col nzSpan="8">
        loading =>
        <cell value="Done" [loading]="loading" />
        <a (click)="loading = !loading" class="ml-md">Change</a>
      </div>
      <div nz-col nzSpan="8">
        Async =>
        <cell [value]="async" [loading]="asyncLoading" />
        @if (!asyncLoading) {
          <a (click)="again()" class="ml-md">Again</a>
        }
      </div>
      <div nz-col nzSpan="8"> Unit => <cell value="3" [options]="{ unit: '\u4EBA' }" /> </div>
      <div nz-col nzSpan="8"> Text Unit => <cell [value]="{ text: '100', unit: '\u5143' }" /> </div>
      <div nz-col nzSpan="8">
        custom widget =>
        <cell [value]="imageValue" [options]="{ widget: { key: 'test', data: 'new url' } }" />
        <a (click)="refreshImage()">Refresh Image</a>
      </div>
    </div>
  \`,
  styles: [
    \`
      :host ::ng-deep .ant-col {
        margin-bottom: 8px;
      }
    \`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CellModule, FormsModule, JsonPipe, NzGridModule]
})
export class ComponentsCellSimpleComponent implements OnInit {
  private readonly ds = inject(DomSanitizer);
  private readonly cdr = inject(ChangeDetectorRef);
  value: unknown = 'string';
  imageValue = 'https://randomuser.me/api/portraits/thumb/women/47.jpg';
  checkbox = false;
  radio = true;
  disabled = false;
  yn = true;
  default: string = '-';
  defaultCondition: unknown = '*';
  options?: CellOptions;
  baseList = ['string', true, false, 100, 1000000, new Date()];
  typeList: CellRenderType[] = ['primary', 'success', 'danger', 'warning'];
  now = new Date();
  day3 = subDays(new Date(), 3);
  HTML = \`<strong>Strong</string>\`;
  status: CellBadge = {
    WAIT: { text: 'Wait', tooltip: 'Refers to waiting for the user to ship' },
    FINISHED: { text: 'Done', color: 'success' }
  };
  loading = true;
  asyncLoading = true;
  async?: CellFuValue;
  safeHtml = this.ds.bypassSecurityTrustHtml(\`<strong>Strong Html</strong>\`);
  enum = { 1: 'Success', 2: 'Error' };
  enumValue = 1;
  bigImg: CellOptions = {
    img: {
      size: 32,
      big: true // 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  };

  ngOnInit(): void {
    this.again();
  }

  refresh(): void {
    this.value = new Date();
    this.cdr.detectChanges();
  }

  again(): void {
    this.asyncLoading = true;
    this.async = (() =>
      of({ text: \`\${+new Date()}\` }).pipe(
        take(1),
        delay(1000 * 1),
        finalize(() => {
          this.asyncLoading = false;
          this.cdr.detectChanges();
        })
      )) as CellFuValue;
    this.cdr.detectChanges();
  }

  updateSafeHtml(): void {
    this.safeHtml = this.ds.bypassSecurityTrustHtml(\`alert('a');<script>alert('a')<\/script>\`);
    this.cdr.detectChanges();
  }

  refreshImage(): void {
    this.imageValue = \`https://randomuser.me/api/portraits/thumb/women/\${Math.floor(Math.random() * 50) + 10}.jpg\`;
    this.cdr.detectChanges();
  }
}`,lang:"ts",componentName:"ComponentsCellSimpleComponent",point:0,name:"simple",urls:"packages/abc/cell/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-cell"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-cell-simple"),t(7,`
        `),a(),t(8,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id))},dependencies:[j,H,Jd,B,R,F],encapsulation:2});let n=e;return n})();var Mc=n=>({$implicit:n});function Dc(n,e){n&1&&ge(0)}function Nc(n,e){if(n&1&&C(0,Dc,1,0,"ng-container",1),n&2){let l=b();s("ngTemplateOutlet",l.render)("ngTemplateOutletContext",Q(2,Mc,l.i))}}function Ec(n,e){if(n&1&&m(0,"span",0),n&2){let l=b();s("innerHTML",l.i.text,jt)}}var re=function(n){return n[n.ing=0]="ing",n[n.pause=1]="pause",n[n.stop=2]="stop",n[n.done=3]="done",n}(re||{}),tr=(()=>{let e=class e{constructor(d){this.ngZone=d,this.fns=[],this.commands=[],this.nextTime=0,this.ing=!1}start(){this.ing!==!0&&(this.ing=!0,this.nextTime=+new Date,this.ngZone.runOutsideAngular(()=>{this.process()}))}process(){for(;this.commands.length;)this.commands.shift()();let d=+new Date-this.nextTime,o=1+Math.floor(d/100);d=100-d%100,this.nextTime+=100*o;for(let i=0,p=this.fns.length;i<p;i+=2){let g=this.fns[i+1];if(g===0)this.fns[i](o);else{g+=2*o-1;let u=Math.floor(g/20);u>0&&this.fns[i](u),this.fns[i+1]=g%20+1}}this.ing&&setTimeout(()=>this.process(),d)}add(d,o){return this.commands.push(()=>{this.fns.push(d),this.fns.push(o===1e3?1:0),this.ing=!0}),this}remove(d){return this.commands.push(()=>{let o=this.fns.indexOf(d);o!==-1&&this.fns.splice(o,2),this.ing=this.fns.length>0}),this}};e.\u0275fac=function(o){return new(o||e)(go(Jt))},e.\u0275prov=ce({token:e,factory:e.\u0275fac});let n=e;return n})(),Ic=new pn("COUNTDOWN_CONFIG");var er=(()=>{let e=class e{set config(d){d.notify!=null&&!Array.isArray(d.notify)&&d.notify>0&&(d.notify=[d.notify]),this._config=d}get config(){return this._config}constructor(d,o,i,p,g){this.locale=d,this.timer=o,this.cdr=i,this.ngZone=p,this.defCog=g,this.frequency=1e3,this._notify={},this.status=re.ing,this.isDestroy=!1,this.i={},this.left=0,this.event=new wt}begin(){this.status=re.ing,this.callEvent("start")}restart(){this.status!==re.stop&&this.destroy(),this.init(),this.callEvent("restart")}stop(){this.status!==re.stop&&(this.status=re.stop,this.destroy(),this.callEvent("stop"))}pause(){this.status===re.stop||this.status===re.pause||(this.status=re.pause,this.callEvent("pause"))}resume(){this.status===re.stop||this.status!==re.pause||(this.status=re.ing,this.callEvent("resume"))}callEvent(d){this.event.emit({action:d,left:this.left,status:this.status,text:this.i.text})}init(){let d=this.config=yt(yt({demand:!1,leftTime:0,format:"HH:mm:ss",timezone:"+0000",formatDate:({date:p,formatStr:g,timezone:u})=>Ai(new Date(p),g,this.locale,u||"+0000")},this.defCog),this.config),o=this.frequency=~d.format.indexOf("S")?100:1e3;this.status=d.demand?re.pause:re.ing,this.getLeft();let i=this.reflow;this.reflow=(p=0,g=!1)=>i.apply(this,[p,g]),Array.isArray(d.notify)&&d.notify.forEach(p=>{if(p<1)throw new Error("The notify config must be a positive integer.");p=p*1e3,p=p-p%o,this._notify[p]=!0}),this.timer.add(this.reflow,o).start(),this.reflow(0,!0)}destroy(){return this.timer.remove(this.reflow),this}reflow(d=0,o=!1){if(this.isDestroy)return;let{status:i,config:p,_notify:g}=this;if(!o&&i!==re.ing)return;let u=this.left=this.left-this.frequency*d;u<1&&(u=0),this.i={value:u,text:p.formatDate({date:u,formatStr:p.format,timezone:p.timezone})},typeof p.prettyText=="function"&&(this.i.text=p.prettyText(this.i.text)),this.cdr.detectChanges(),(p.notify===0||g[u])&&this.ngZone.run(()=>{this.callEvent("notify")}),u===0&&this.ngZone.run(()=>{this.status=re.done,this.destroy(),this.callEvent("done")})}getLeft(){let{config:d,frequency:o}=this,i=d.leftTime*1e3,p=d.stopTime;!i&&p&&(i=p-new Date().getTime()),this.left=i-i%o}ngOnInit(){this.init(),this.config.demand||this.begin()}ngOnDestroy(){this.isDestroy=!0,this.destroy()}ngOnChanges(d){d.config.firstChange||this.restart()}};e.\u0275fac=function(o){return new(o||e)($(Fi),$(tr),$(lt),$(Jt),$(Ic,8))},e.\u0275cmp=h({type:e,selectors:[["countdown"]],hostVars:2,hostBindings:function(o,i){o&2&&k("count-down",!0)},inputs:{config:"config",render:"render"},outputs:{event:"event"},standalone:!0,features:[Ae([tr]),Pt,f],decls:2,vars:1,consts:[[3,"innerHTML"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,i){o&1&&C(0,Nc,1,4,"ng-container")(1,Ec,1,1,"span",0),o&2&&M(i.render?0:1)},dependencies:[ee],styles:[`.count-down{font-variant-numeric:tabular-nums}
`],encapsulation:2,changeDetection:0});let n=e;return n})();var Pc=["cd"];function Fc(n,e){if(n&1){let l=w();r(0,"countdown",2,0),v("event",function(o){y(l);let i=b();return x(i.handleEvent(o))}),a()}if(n&2){let l=b();s("config",l.config)}}var Ao=(()=>{let e=class e{constructor(){this.event=new wt}set target(d){this.config={format:"HH:mm:ss",stopTime:typeof d=="number"?Qi(new Date,d).valueOf():+Zi(d,"t")}}handleEvent(d){this.event.emit(d)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["count-down"]],viewQuery:function(o,i){if(o&1&&rt(Pc,5),o&2){let p;q(p=G())&&(i.instance=p.first)}},inputs:{config:"config",target:"target"},outputs:{event:"event"},exportAs:["countDown"],standalone:!0,features:[f],decls:1,vars:1,consts:[["cd",""],[3,"config"],[3,"event","config"]],template:function(o,i){o&1&&C(0,Fc,2,1,"countdown",1),o&2&&M(i.config?0:-1)},dependencies:[er],encapsulation:2,changeDetection:0});let n=e;return n})();var or=(()=>{let e=class e{constructor(){this.msg=S(vt)}handleEvent(d){d.action==="done"&&this.msg.success("finised")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-count-down-simple"]],standalone:!0,features:[f],decls:13,vars:1,consts:[["cd",""],[2,"font-size","20px",3,"event","target"],["nz-button","",3,"click"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"div"),t(2,`
      `),r(3,"count-down",1,0),v("event",function(u){return y(p),x(i.handleEvent(u))}),a(),t(5,`
    `),a(),t(6,`
    `),r(7,"button",2),v("click",function(){y(p);let u=_(4);return x(u.instance.pause())}),t(8,"Pause"),a(),t(9,`
    `),r(10,"button",2),v("click",function(){y(p);let u=_(4);return x(u.instance.resume())}),t(11,"Resume"),a(),t(12,`
  `)}o&2&&(c(3),s("target",10))},dependencies:[Ao,I,D,N,E],encapsulation:2});let n=e;return n})();var nr=(()=>{let e=class e{constructor(){this.config={format:"s.S",leftTime:30}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-count-down-accuracy"]],standalone:!0,features:[f],decls:3,vars:1,consts:[[3,"config"]],template:function(o,i){o&1&&(t(0," "),m(1,"count-down",0),t(2," ")),o&2&&(c(),s("config",i.config))},dependencies:[Ao],encapsulation:2});let n=e;return n})();var ir=(()=>{let e=class e{constructor(){this.item={cols:3,urls:{"en-US":"packages/abc/count-down/index.en-US.md","zh-CN":"packages/abc/count-down/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>The countdown component depends on <a target="_blank" href="https://github.com/cipchk/ngx-countdown" data-url="https://github.com/cipchk/ngx-countdown">ngx-countdown</a>.</p><h2 id="Dependencies"><a class="lake-link"><i data-anchor="Dependencies"></i></a>Dependencies</h2><pre class="hljs language-null"><code>npm i -S ngx-countdown</code></pre></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="count-down"><a class="lake-link"><i data-anchor="count-down"></i></a>count-down<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[target]</code></td><td>Target time, <code>number</code> means seconds</td><td><code>number | Date</code></td><td>-</td></tr><tr><td><code>[config]</code></td><td><a target="_blank" href="https://github.com/cipchk/ngx-countdown#countdownconfig" data-url="https://github.com/cipchk/ngx-countdown#countdownconfig">Config</a> paraments</td><td><code>CountdownConfig</code></td><td>-</td></tr><tr><td><code>(event)</code></td><td>Event notification</td><td><code>EventEmitter&lt;CountdownEvent></code></td><td>-</td></tr></tbody></table>',meta:{type:"Basic",title:"count-down",subtitle:"Count down",cols:3,module:"import { CountDownModule } from '@delon/abc/count-down';"},toc:[{id:"Dependencies",title:"Dependencies",h:2},{id:"API",title:"API",h:2,children:[{id:"count-down",title:"count-down:standalone",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u5012\u8BA1\u65F6\u7EC4\u4EF6\uFF0C\u4F9D\u8D56 <a target="_blank" href="https://github.com/cipchk/ngx-countdown" data-url="https://github.com/cipchk/ngx-countdown">ngx-countdown</a>\u3002</p><h2 id="\u4F9D\u8D56"><a class="lake-link"><i data-anchor="\u4F9D\u8D56"></i></a>\u4F9D\u8D56</h2><pre class="hljs language-null"><code>npm i -S ngx-countdown</code></pre></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="count-down"><a class="lake-link"><i data-anchor="count-down"></i></a>count-down<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[target]</code></td><td>\u76EE\u6807\u65F6\u95F4\uFF0C<code>number</code> \u8868\u793A\u79D2</td><td><code>number | Date</code></td><td>-</td></tr><tr><td><code>[config]</code></td><td>\u5B8C\u6574 <a target="_blank" href="https://github.com/cipchk/ngx-countdown#countdownconfig" data-url="https://github.com/cipchk/ngx-countdown#countdownconfig">Config</a> \u53C2\u6570</td><td><code>CountdownConfig</code></td><td>-</td></tr><tr><td><code>(event)</code></td><td>\u4E8B\u4EF6\u901A\u77E5</td><td><code>EventEmitter&lt;CountdownEvent></code></td><td>-</td></tr></tbody></table>',meta:{type:"Basic",title:"count-down",subtitle:"\u5012\u8BA1\u65F6",cols:3,module:"import { CountDownModule } from '@delon/abc/count-down';"},toc:[{id:"\u4F9D\u8D56",title:"\u4F9D\u8D56",h:2},{id:"API",title:"API",h:2,children:[{id:"count-down",title:"count-down:standalone",h:3}]}]}},demo:!0},this.codes=[{id:"components-count-down-simple",meta:{order:1,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"}},summary:{"zh-CN":"<p>\u7B80\u5355\u7684\u5012\u8BA1\u65F6\u7EC4\u4EF6\u4F7F\u7528\u3002</p>","en-US":"<p>The simplest usage.</p>"},code:`import { Component, inject } from '@angular/core';

import { CountdownEvent } from 'ngx-countdown';

import { CountDownComponent } from '@delon/abc/count-down';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'components-count-down-simple',
  template: \`
    <div>
      <count-down #cd [target]="10" (event)="handleEvent($event)" style="font-size: 20px;" />
    </div>
    <button nz-button (click)="cd.instance.pause()">Pause</button>
    <button nz-button (click)="cd.instance.resume()">Resume</button>
  \`,
  standalone: true,
  imports: [CountDownComponent, NzButtonModule]
})
export class ComponentsCountDownSimpleComponent {
  private readonly msg = inject(NzMessageService);

  handleEvent(e: CountdownEvent): void {
    if (e.action === 'done') {
      this.msg.success('finised');
    }
  }
}`,lang:"ts",componentName:"ComponentsCountDownSimpleComponent",point:0,name:"simple",urls:"packages/abc/count-down/demo/simple.md",type:"demo"},{id:"components-count-down-accuracy",meta:{order:2,title:{"zh-CN":"\u7CBE\u5EA6","en-US":"Accuracy"}},summary:{"zh-CN":"<p>0.1s\u7CBE\u5EA6\u4F7F\u7528\u65B9\u5F0F\u3002</p>","en-US":"<p>The <code>0.1s</code> accuracy usage.</p>"},code:`import { Component } from '@angular/core';

import { CountdownConfig } from 'ngx-countdown';

import { CountDownComponent } from '@delon/abc/count-down';

@Component({
  selector: 'components-count-down-accuracy',
  template: \` <count-down [config]="config" /> \`,
  standalone: true,
  imports: [CountDownComponent]
})
export class ComponentsCountDownAccuracyComponent {
  config: CountdownConfig = {
    format: \`s.S\`,
    leftTime: 30
  };
}`,lang:"ts",componentName:"ComponentsCountDownAccuracyComponent",point:1,name:"accuracy",urls:"packages/abc/count-down/demo/accuracy.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-count-down"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:16,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-count-down-simple"),t(7,`
        `),a(),t(8,`
      `),a(),r(9,"div",2),t(10,`
        `),r(11,"code-box",3),t(12,`
          `),m(13,"components-count-down-accuracy"),t(14,`
        `),a(),t(15,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id),c(7),s("item",i.codes[1]),T("id",i.codes[1].id))},dependencies:[j,H,or,nr,B,R,F],encapsulation:2});let n=e;return n})();var Rc=["tpl"];function Ac(n,e){if(n&1){let l=w();t(0,`
        `),r(1,"a",1),v("click",function(){let o=y(l).$implicit,i=b(2);return x(i.click(o))}),a(),t(2,`
      `)}if(n&2){let l=e.$implicit,d=e.$index;c(),k("ml-sm",d!==0),s("innerHTML",l._text,jt)}}function Bc(n,e){if(n&1&&(t(0,`
      `),St(1,Ac,3,3,null,null,kt)),n&2){let l=b();c(),zt(l.list)}}var Zn=(()=>{let e=class e{constructor(){this.list=[]}click(d){}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["ng-component"]],viewQuery:function(o,i){if(o&1&&rt(Rc,7),o&2){let p;q(p=G())&&(i.tpl=p.first)}},standalone:!0,features:[f],decls:4,vars:0,consts:[["tpl",""],[3,"click","innerHTML"]],template:function(o,i){o&1&&(t(0,`
    `),C(1,Bc,3,0,"ng-template",null,0,P),t(3,`
  `))},encapsulation:2});let n=e;return n})();var Xo=(()=>{let e=class e{set shortcut(d){let o=Hi({list:[]},!0,this.defaultShortcuts,d??{});typeof d!="object"&&(o.enabled=d!==!1),(o.list||[]).forEach(i=>{i._text=this.dom.bypassSecurityTrustHtml(i.text)}),this._shortcut=o,this.refreshShortcut()}get shortcut(){return this._shortcut}get dp(){return this.nativeComp.datePicker}get srv(){return this.dp.datePickerService}constructor(d){this.dom=S(ye),this.vcr=S(Ni),this.nativeComp=S(Do,{host:!0,optional:!0}),this._shortcut=null,this.shortcutFactory=null,this.start=null,this.end=null,this.ngModelEndChange=new wt;let o=d.merge("dataRange",{nzFormat:"yyyy-MM-dd",nzAllowClear:!0,nzAutoFocus:!1,nzPopupStyle:{position:"relative"},nzShowToday:!0,shortcuts:{enabled:!1,closed:!0,list:[{text:"\u4ECA\u5929",fn:()=>Ge("today")},{text:"\u6628\u5929",fn:()=>Ge("yesterday")},{text:"\u8FD13\u5929",fn:()=>Ge(-2)},{text:"\u8FD17\u5929",fn:()=>Ge(-6)},{text:"\u672C\u5468",fn:()=>Ge("week")},{text:"\u672C\u6708",fn:()=>Ge("month")},{text:"\u5168\u5E74",fn:()=>Ge("year")}]}});this.defaultShortcuts=yt({},o.shortcuts),Object.assign(this,o)}cd(){this.dp.cdr.markForCheck()}overrideNative(){let d=this.dp;d.writeValue=i=>{let p=(i&&this.ngModelEnd?[i,this.ngModelEnd]:[]).filter(g=>!!g);this.srv.setValue(this.srv.makeValue(p)),this.start=p.length>0?p[0]:null,this.end=p.length>0?p[1]:null,this.cd()};let o=d.onChangeFn;d.onChangeFn=i=>{let p=null,g=null;i.length>0&&i.filter(u=>u!=null).length===2&&([p,g]=od([i[0],i[1]])),this.start=p,this.end=g,o(p),this.ngModelEnd=g,this.ngModelEndChange.emit(g)}}refreshShortcut(){if(!this._shortcut)return;let{enabled:d,list:o}=this._shortcut,i;if(!this.nativeComp||!d)i=void 0;else{this.shortcutFactory||(this.shortcutFactory=this.vcr.createComponent(Zn));let{instance:p}=this.shortcutFactory;p.list=o,p.click=g=>{let u=g.fn([this.start,this.end]);this.srv.setValue(this.srv.makeValue(u)),this.dp.onChangeFn(u),this.dp.close()},i=p.tpl}this.nativeComp.datePicker.extraFooter=i,Promise.resolve().then(()=>this.cd())}ngAfterViewInit(){this.overrideNative(),this.refreshShortcut()}destoryShortcut(){this.shortcutFactory!=null&&this.shortcutFactory.destroy()}ngOnDestroy(){this.destoryShortcut()}};e.\u0275fac=function(o){return new(o||e)($(At))},e.\u0275dir=fe({type:e,selectors:[["nz-range-picker","extend",""]],inputs:{shortcut:"shortcut",ngModelEnd:"ngModelEnd"},outputs:{ngModelEndChange:"ngModelEndChange"},exportAs:["extendRangePicker"],standalone:!0});let n=e;return n})();var rr=(()=>{let e=class e{constructor(){this.i={}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-date-picker-basic"]],standalone:!0,features:[f],decls:6,vars:5,consts:[["extend","",3,"ngModelChange","ngModelEndChange","ngModel","ngModelEnd"]],template:function(o,i){o&1&&(t(0),ne(1,"json"),m(2,"br"),t(3,`
    `),r(4,"nz-range-picker",0),O("ngModelChange",function(g){return A(i.i.start,g)||(i.i.start=g),g})("ngModelEndChange",function(g){return A(i.i.end,g)||(i.i.end=g),g}),a(),t(5,`
  `)),o&2&&(mt(`
    result: `,se(1,3,i.i),""),c(4),L("ngModel",i.i.start)("ngModelEnd",i.i.end))},dependencies:[Me,ut,ct,gt,No,Mo,Do,Xo],encapsulation:2});let n=e;return n})();var ar=(()=>{let e=class e{constructor(){this.i={}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-date-picker-shortcut"]],standalone:!0,features:[f],decls:6,vars:5,consts:[["extend","","shortcut","",3,"ngModelChange","ngModelEndChange","ngModel","ngModelEnd"]],template:function(o,i){o&1&&(t(0),ne(1,"json"),m(2,"br"),t(3,`
    `),r(4,"nz-range-picker",0),O("ngModelChange",function(g){return A(i.i.start,g)||(i.i.start=g),g})("ngModelEndChange",function(g){return A(i.i.end,g)||(i.i.end=g),g}),a(),t(5,`
  `)),o&2&&(mt(`
    result: `,se(1,3,i.i),""),c(4),L("ngModel",i.i.start)("ngModelEnd",i.i.end))},dependencies:[Me,ut,ct,gt,No,Mo,Do,Xo],encapsulation:2});let n=e;return n})();var lr=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/date-picker/index.en-US.md","zh-CN":"packages/abc/date-picker/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Based on the <code>nz-range-picker</code> further optimization, better service to start and end dates.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="extend"><a class="lake-link"><i data-anchor="extend"></i></a>extend<label class="api-type-label directive">directive</label><label class="api-type-label standalone">standalone</label></h3><p>It needs to be used with <a target="_blank" href="https://ng.ant.design/components/date-picker/zh#nz-range-picker" data-url="https://ng.ant.design/components/date-picker/zh#nz-range-picker">nz-range-picker</a>, for example:</p><pre class="hljs language-html"><code>&lt;nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end"&gt;&lt;/nz-range-picker&gt;</code></pre><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[(ngModelEnd)]</code></td><td>End date, start and end values at the same time</td><td><code>Date</code></td><td>-</td><td></td></tr><tr><td><code>[shortcut]</code></td><td>Set shortcuts</td><td><code>boolean | <a data-toc="DateRangePickerShortcut">DateRangePickerShortcut</a></code></td><td><code>false</code></td><td>\u2705</td></tr></tbody></table><h4 id="DateRangePickerShortcut"><a class="lake-link"><i data-anchor="DateRangePickerShortcut"></i></a>DateRangePickerShortcut</h4><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[enabled]</code></td><td>Whether to enable</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[closed]</code></td><td>Whether to close the panel after clicking</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[enabled]</code></td><td>Shortcut list</td><td><code>DateRangePickerShortcutItem[]</code></td><td><code>\u4ECA\u5929,\u6628\u5929,\u8FD13\u5929,\u8FD17\u5929,\u672C\u5468,\u672C\u6708,\u5168\u5E74</code></td></tr></tbody></table>',meta:{type:"Form",title:"range-picker",subtitle:"Data Range",cols:1,module:"import { DatePickerModule } from '@delon/abc/date-picker';"},toc:[{id:"API",title:"API",h:2,children:[{id:"extend",title:"extend:standalone",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u57FA\u4E8E <code>nz-range-picker</code> \u8FDB\u4E00\u6B65\u4F18\u5316\uFF0C\u66F4\u597D\u7684\u670D\u52A1\u4E8E\u5F00\u59CB\u4E0E\u7ED3\u675F\u65E5\u671F\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="extend"><a class="lake-link"><i data-anchor="extend"></i></a>extend<label class="api-type-label directive">directive</label><label class="api-type-label standalone">standalone</label></h3><p>\u9700\u8981\u914D\u5408 <a target="_blank" href="https://ng.ant.design/components/date-picker/zh#nz-range-picker" data-url="https://ng.ant.design/components/date-picker/zh#nz-range-picker">nz-range-picker</a> \u4E00\u8D77\u4F7F\u7528\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-html"><code>&lt;nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end"&gt;&lt;/nz-range-picker&gt;</code></pre><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[(ngModelEnd)]</code></td><td>\u7ED3\u675F\u65E5\u671F\uFF0C\u5F00\u59CB\u4E0E\u7ED3\u675F\u540C\u65F6\u6709\u503C\u624D\u4F1A\u751F\u6548</td><td><code>Date</code></td><td>-</td><td></td></tr><tr><td><code>[shortcut]</code></td><td>\u8BBE\u7F6E\u5FEB\u6377\u952E</td><td><code>boolean, <a data-toc="DateRangePickerShortcut">DateRangePickerShortcut</a></code></td><td><code>false</code></td><td>\u2705</td></tr></tbody></table><h4 id="DateRangePickerShortcut"><a class="lake-link"><i data-anchor="DateRangePickerShortcut"></i></a>DateRangePickerShortcut</h4><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[enabled]</code></td><td>\u662F\u5426\u542F\u7528</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[closed]</code></td><td>\u662F\u5426\u70B9\u51FB\u540E\u7ACB\u5373\u5173\u95ED\u9762\u677F</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[enabled]</code></td><td>\u5FEB\u6377\u5217\u8868</td><td><code>DateRangePickerShortcutItem[]</code></td><td><code>\u4ECA\u5929,\u6628\u5929,\u8FD13\u5929,\u8FD17\u5929,\u672C\u5468,\u672C\u6708,\u5168\u5E74</code></td></tr></tbody></table>',meta:{type:"Form",title:"range-picker",subtitle:"\u65E5\u671F\u8303\u56F4",cols:1,module:"import { DatePickerModule } from '@delon/abc/date-picker';"},toc:[{id:"API",title:"API",h:2,children:[{id:"extend",title:"extend:standalone",h:3}]}]}},demo:!0},this.codes=[{id:"components-date-picker-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:{"zh-CN":"<p>\u4F7F\u7528 <code>ngModel</code>\u3001<code>ngModelEnd</code> \u6765\u8868\u793A\u5F00\u59CB\u4E0E\u7ED3\u675F\u503C\u3002</p>","en-US":"<p>Start and end values with <code>ngModel</code>, <code>ngModelEnd</code>.</p>"},code:`import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RangePickerDirective } from '@delon/abc/date-picker';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'components-date-picker-basic',
  template: \`
    result: {{ i | json }}<br />
    <nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end" />
  \`,
  standalone: true,
  imports: [JsonPipe, FormsModule, NzDatePickerModule, RangePickerDirective]
})
export class ComponentsDatePickerBasicComponent {
  i: { start?: Date; end?: Date } = {};
}`,lang:"ts",componentName:"ComponentsDatePickerBasicComponent",point:0,name:"basic",urls:"packages/abc/date-picker/demo/basic.md",type:"demo"},{id:"components-date-picker-shortcut",meta:{order:0,title:{"zh-CN":"\u5FEB\u6377\u952E","en-US":"Shortcut"}},summary:{"zh-CN":"<p>\u4F7F\u7528 <code>shortcuts</code> \u81EA\u5B9A\u4E49\u5FEB\u6377\u9762\u677F\uFF08\u652F\u6301\u5168\u5C40\u914D\u7F6E\uFF09\u3002</p>","en-US":"<p>Use <code>shortcuts</code> to customize the shortcut panel (supports global configuration).</p>"},code:`import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RangePickerDirective } from '@delon/abc/date-picker';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'components-date-picker-shortcut',
  template: \`
    result: {{ i | json }}<br />
    <nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end" shortcut />
  \`,
  standalone: true,
  imports: [JsonPipe, FormsModule, NzDatePickerModule, RangePickerDirective]
})
export class ComponentsDatePickerShortcutComponent {
  i: { start?: Date; end?: Date } = {};
}`,lang:"ts",componentName:"ComponentsDatePickerShortcutComponent",point:1,name:"shortcut",urls:"packages/abc/date-picker/demo/shortcut.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-date-picker"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-date-picker-basic"),t(7,`
        `),a(),t(8,`
      
        `),r(9,"code-box",3),t(10,`
          `),m(11,"components-date-picker-shortcut"),t(12,`
        `),a(),t(13,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id),c(5),s("item",i.codes[1]),T("id",i.codes[1].id))},dependencies:[j,H,rr,ar,B,R,F],encapsulation:2});let n=e;return n})();var cr=Ci(Jn());var Rn=(()=>{let e=class e{getDisposition(d){return(d||"").split(";").filter(i=>i.includes("=")).map(i=>{let p=i.split("="),g="UTF-8''",u=p[1];return u.startsWith(g)&&(u=u.substring(g.length)),{[p[0].trim()]:u}}).reduce((i,p)=>p,{})}constructor(){this.el=S(xt).nativeElement,this._http=S(fn),this.httpMethod="get",this.success=new wt,this.error=new wt,this.isFileSaverSupported=!1;try{this.isFileSaverSupported=!!new Blob}catch{}this.isFileSaverSupported||this.el.classList.add("down-file__not-support")}setDisabled(d){let o=this.el;o.disabled=d,o.classList[d?"add":"remove"]("down-file__disabled")}_click(d){return yi(this,null,function*(){if(!this.isFileSaverSupported||typeof this.pre=="function"&&!(yield this.pre(d))){d.stopPropagation(),d.preventDefault();return}this.setDisabled(!0),this._http.request(this.httpMethod,this.httpUrl,{params:this.httpData||{},responseType:"blob",observe:"response",body:this.httpBody}).pipe(sn(()=>this.setDisabled(!1))).subscribe({next:o=>{if(o.status!==200||o.body.size<=0){this.error.emit(o);return}let i=this.getDisposition(o.headers.get("content-disposition")),p=this.fileName;typeof p=="function"&&(p=p(o)),p=p||i["filename*"]||i.filename||o.headers.get("filename")||o.headers.get("x-filename"),(0,cr.saveAs)(o.body,decodeURI(p)),this.success.emit(o)},error:o=>this.error.emit(o)})})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275dir=fe({type:e,selectors:[["","down-file",""]],hostBindings:function(o,i){o&1&&v("click",function(g){return i._click(g)})},inputs:{httpData:[0,"http-data","httpData"],httpBody:[0,"http-body","httpBody"],httpMethod:[0,"http-method","httpMethod"],httpUrl:[0,"http-url","httpUrl"],fileName:[0,"file-name","fileName"],pre:"pre"},outputs:{success:"success",error:"error"},exportAs:["downFile"],standalone:!0});let n=e;return n})();function Vc(n,e){if(n&1&&(t(0,`
      `),r(1,"button",0),t(2),a(),t(3,`
    `)),n&2){let l=e.$implicit,d=b();c(),$o("http-url","./assets/demo",l,""),s("http-data",d.data),c(),mt(`
        `,l,`
      `)}}var sr=(()=>{let e=class e{constructor(){this.fileTypes=[".xlsx",".docx",".pptx",".pdf"],this.data={otherdata:1,time:new Date}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-down-file-simple"]],standalone:!0,features:[f],decls:3,vars:0,consts:[["nz-button","","down-file","","file-name","demo\u4E2D\u6587",1,"mr-sm",3,"http-data","http-url"]],template:function(o,i){o&1&&(t(0,`
    `),St(1,Vc,4,4,null,null,kt)),o&2&&(c(),zt(i.fileTypes))},dependencies:[Rn,I,D,N,E],encapsulation:2});let n=e;return n})();var pr=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/down-file/index.en-US.md","zh-CN":"packages/abc/down-file/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>A file download based on <code>blob</code>.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="down-file"><a class="lake-link"><i data-anchor="down-file"></i></a>down-file<label class="api-type-label directive">directive</label><label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[http-data]</code></td><td>Parameter of request</td><td><code>{}</code></td><td>-</td></tr><tr><td><code>[http-body]</code></td><td>Body of request</td><td><code>{}</code></td><td>-</td></tr><tr><td><code>[http-method]</code></td><td>Method of request</td><td><code>'POST','GET','HEAD','PUT','PATCH','DELETE'</code></td><td><code>'GET'</code></td></tr><tr><td><code>[http-url]</code></td><td>Url of request</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[file-name]</code></td><td>Specify a file name</td><td><code>string, (rep: HttpResponse&lt;Blob>) => string</code></td><td>-</td></tr><tr><td><code>[pre]</code></td><td>Callback of download</td><td><code>(ev: MouseEvent) => Promise&lt;boolean></code></td><td>-</td></tr><tr><td><code>(success)</code></td><td>Success callback</td><td><code>EventEmitter&lt;HttpResponse<Blob>></code></td><td>-</td></tr><tr><td><code>(error)</code></td><td>Error callback</td><td><code>EventEmitter&lt;any></code></td><td>-</td></tr></tbody></table><h2 id="FAQ"><a class="lake-link"><i data-anchor="FAQ"></i></a>FAQ</h2><h3 id="Filenameorder"><a class="lake-link"><i data-anchor="Filenameorder"></i></a>Filenameorder</h3><ol><li><p><code>file-name</code></p></li><li><p><code>filename*</code>, <code>filename</code> of <code>content-disposition</code></p></li><li><p><code>filename</code>, <code>x-filename</code> of <code>headers</code></p></li></ol><h3 id="SupportedBrowsers"><a class="lake-link"><i data-anchor="SupportedBrowsers"></i></a>SupportedBrowsers</h3><p>Use <code>new Blob()</code> to verify <a target="_blank" href="https://github.com/eligrey/FileSaver.js/#supported-browsers" data-url="https://github.com/eligrey/FileSaver.js/#supported-browsers">Browser Compatible</a>, The <code>down-file__not-support</code> style is added to the target element when not compatible.</p><blockquote><p>The default incompatible processing behavior is hidden. You can set the Less variable to <code>@down-file-not-support-behavior: 'disabled'</code> to can't be click.</p></blockquote>`,meta:{type:"Basic",title:"down-file",subtitle:"Download file",cols:1,module:"import { DownFileModule } from '@delon/abc/down-file';"},toc:[{id:"API",title:"API",h:2,children:[{id:"down-file",title:"down-file:standalone",h:3}]},{id:"FAQ",title:"FAQ",h:2,children:[{id:"Filenameorder",title:"File name order",h:3},{id:"SupportedBrowsers",title:"Supported Browsers",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u4E00\u4E2A\u57FA\u4E8E <code>blob</code> \u7684\u6587\u4EF6\u4E0B\u8F7D\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="down-file"><a class="lake-link"><i data-anchor="down-file"></i></a>down-file<label class="api-type-label directive">directive</label><label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[http-data]</code></td><td>URL\u8BF7\u6C42\u53C2\u6570</td><td><code>{}</code></td><td>-</td></tr><tr><td><code>[http-body]</code></td><td>POST\u8BF7\u6C42\u54CD\u5E94\u4F53</td><td><code>{}</code></td><td>-</td></tr><tr><td><code>[http-method]</code></td><td>\u8BF7\u6C42\u7C7B\u578B</td><td><code>'POST','GET','HEAD','PUT','PATCH','DELETE'</code></td><td><code>'GET'</code></td></tr><tr><td><code>[http-url]</code></td><td>\u4E0B\u8F7D\u5730\u5740</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[file-name]</code></td><td>\u6307\u5B9A\u6587\u4EF6\u540D\uFF0C\u82E5\u4E3A\u7A7A\u4ECE\u670D\u52A1\u7AEF\u8FD4\u56DE\u7684 <code>header</code> \u4E2D\u83B7\u53D6 <code>filename</code>\u3001<code>x-filename</code></td><td><code>string, (rep: HttpResponse&lt;Blob>) => string</code></td><td>-</td></tr><tr><td><code>[pre]</code></td><td>\u4E0B\u8F7D\u524D\u56DE\u8C03</td><td><code>(ev: MouseEvent) => Promise&lt;boolean></code></td><td>-</td></tr><tr><td><code>(success)</code></td><td>\u6210\u529F\u56DE\u8C03</td><td><code>EventEmitter&lt;HttpResponse<Blob>></code></td><td>-</td></tr><tr><td><code>(error)</code></td><td>\u9519\u8BEF\u56DE\u8C03</td><td><code>EventEmitter&lt;any></code></td><td>-</td></tr></tbody></table><h2 id="\u5E38\u89C1\u95EE\u9898"><a class="lake-link"><i data-anchor="\u5E38\u89C1\u95EE\u9898"></i></a>\u5E38\u89C1\u95EE\u9898</h2><h3 id="\u6587\u4EF6\u540D\u83B7\u53D6\u987A\u5E8F"><a class="lake-link"><i data-anchor="\u6587\u4EF6\u540D\u83B7\u53D6\u987A\u5E8F"></i></a>\u6587\u4EF6\u540D\u83B7\u53D6\u987A\u5E8F</h3><ol><li><p><code>file-name</code></p></li><li><p><code>content-disposition</code> \u7684 <code>filename*</code>\u3001<code>filename</code></p></li><li><p>header \u53C2\u6570 <code>filename</code>\u3001<code>x-filename</code></p></li></ol><h3 id="\u517C\u5BB9\u6027"><a class="lake-link"><i data-anchor="\u517C\u5BB9\u6027"></i></a>\u517C\u5BB9\u6027</h3><p>\u4F7F\u7528 <code>new Blob()</code> \u6765\u6821\u9A8C<a target="_blank" href="https://github.com/eligrey/FileSaver.js/#supported-browsers" data-url="https://github.com/eligrey/FileSaver.js/#supported-browsers">\u6D4F\u89C8\u5668\u517C\u5BB9</a>\uFF0C\u82E5\u4E0D\u517C\u5BB9\u4F1A\u5728\u76EE\u6807\u5143\u7D20\u4E0A\u589E\u52A0 <code>down-file__not-support</code> \u6837\u5F0F\u3002</p><blockquote><p>\u9ED8\u8BA4\u4E0D\u517C\u5BB9\u5904\u7406\u884C\u4E3A\u4E3A\u9690\u85CF\uFF0C\u53EF\u4EE5\u8BBE\u7F6E Less \u53D8\u91CF\u4E3A <code>@down-file-not-support-behavior: 'disabled'</code> \u8868\u793A\u7981\u6B62\u70B9\u51FB\u3002</p></blockquote>`,meta:{type:"Basic",title:"down-file",subtitle:"\u4E0B\u8F7D\u6587\u4EF6",cols:1,module:"import { DownFileModule } from '@delon/abc/down-file';"},toc:[{id:"API",title:"API",h:2,children:[{id:"down-file",title:"down-file:standalone",h:3}]},{id:"\u5E38\u89C1\u95EE\u9898",title:"\u5E38\u89C1\u95EE\u9898",h:2,children:[{id:"\u6587\u4EF6\u540D\u83B7\u53D6\u987A\u5E8F",title:"\u6587\u4EF6\u540D\u83B7\u53D6\u987A\u5E8F",h:3},{id:"\u517C\u5BB9\u6027",title:"\u517C\u5BB9\u6027",h:3}]}]}},demo:!0},this.codes=[{id:"components-down-file-simple",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:{"zh-CN":"<p>\u4E0B\u8F7D\u4E00\u4E2A\u6587\u4EF6\u3002</p>","en-US":"<p>Download a file.</p>"},code:`import { Component } from '@angular/core';

import { DownFileDirective } from '@delon/abc/down-file';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-down-file-simple',
  template: \`
    @for (i of fileTypes; track $index) {
      <button nz-button down-file [http-data]="data" http-url="./assets/demo{{ i }}" file-name="demo\u4E2D\u6587" class="mr-sm">
        {{ i }}
      </button>
    }
  \`,
  standalone: true,
  imports: [DownFileDirective, NzButtonModule]
})
export class ComponentsDownFileSimpleComponent {
  fileTypes = ['.xlsx', '.docx', '.pptx', '.pdf'];

  data = {
    otherdata: 1,
    time: new Date()
  };
}`,lang:"ts",componentName:"ComponentsDownFileSimpleComponent",point:0,name:"simple",urls:"packages/abc/down-file/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-down-file"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-down-file-simple"),t(7,`
        `),a(),t(8,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id))},dependencies:[j,H,sr,B,R,F],encapsulation:2});let n=e;return n})();var Lc=["orgEl"],Oc=["shadowOrgEl"],jc=["shadowTextEl"],Hc=["*"],Wc=()=>({"overflow-wrap":"break-word","word-wrap":"break-word"}),Yn=n=>({$implicit:n}),Uc=n=>({"-webkit-line-clamp":n,"-webkit-box-orient":"vertical"});function qc(n,e){n&1&&ge(0)}function Gc(n,e){if(n&1&&m(0,"div",12),n&2){let l=b(3);s("innerHTML",l.orgHtml,jt)}}function $c(n,e){if(n&1&&(r(0,"span",10),C(1,qc,1,0,"ng-container",11)(2,Gc,1,1,"ng-template",null,2,P),a()),n&2){let l=_(3),d=b().$implicit;s("nzTooltipTitle",l)("nzTooltipOverlayStyle",nt(3,Wc)),c(),s("ngTemplateOutlet",d)}}function Qc(n,e){n&1&&ge(0)}function Zc(n,e){if(n&1&&C(0,Qc,1,0,"ng-container",11),n&2){let l=b().$implicit;s("ngTemplateOutlet",l)}}function Xc(n,e){if(n&1&&C(0,$c,4,4,"span",10)(1,Zc,1,1,"ng-container"),n&2){let l=b();M(l.tooltip?0:1)}}function Kc(n,e){if(n&1&&m(0,"span",9),n&2){let l=b();s("ngClass",l.cls)}}function Jc(n,e){}function Yc(n,e){if(n&1&&t(0),n&2){let l=b(2);V(l.text)}}function ts(n,e){if(n&1&&C(0,Jc,0,0,"ng-template",13)(1,Yc,1,1,"ng-template",null,3,P),n&2){let l=_(2);b();let d=_(4);s("ngTemplateOutlet",d)("ngTemplateOutletContext",Q(2,Yn,l))}}function es(n,e){}function os(n,e){if(n&1&&m(0,"div",14),n&2){let l=b(2);s("ngClass",l.cls)("ngStyle",Q(2,Uc,l.lines))}}function ns(n,e){if(n&1&&C(0,es,0,0,"ng-template",13)(1,os,1,4,"ng-template",null,4,P),n&2){let l=_(2);b();let d=_(4);s("ngTemplateOutlet",d)("ngTemplateOutletContext",Q(2,Yn,l))}}function is(n,e){}function ds(n,e){if(n&1&&t(0),n&2){let l=b(2);V(l.linsWord)}}function rs(n,e){if(n&1&&(r(0,"div",9)(1,"div",15),C(2,is,0,0,"ng-template",13)(3,ds,1,1,"ng-template",null,5,P),m(5,"div",16,6),r(7,"div",17,7)(9,"span"),t(10),a()()()()),n&2){let l=_(4),d=b(),o=_(4);s("ngClass",d.cls),c(2),s("ngTemplateOutlet",o)("ngTemplateOutletContext",Q(5,Yn,l)),c(3),s("innerHTML",d.orgHtml,jt),c(5),V(d.text)}}var Bo=(()=>{let e=class e{constructor(){this.el=S(xt).nativeElement,this.ngZone=S(Jt),this.dom=S(ye),this.doc=S(be),this.cdr=S(lt),this.isSupportLineClamp=this.doc.body.style.webkitLineClamp!==void 0,this.inited=!1,this.type="default",this.cls={},this.text="",this.targetCount=0,this.tooltip=!1,this.fullWidthRecognition=!1,this.tail="..."}get linsWord(){let{targetCount:d,text:o,tail:i}=this;return(d>0?o.substring(0,d):"")+(d>0&&d<o.length?i:"")}get win(){return this.doc.defaultView||window}getStrFullLength(d){return d.split("").reduce((o,i)=>{let p=i.charCodeAt(0);return p>=0&&p<=128?o+1:o+2},0)}cutStrByFullLength(d,o){let i=0;return d.split("").reduce((p,g)=>{let u=g.charCodeAt(0);return u>=0&&u<=128?i+=1:i+=2,i<=o?p+g:p},"")}bisection(d,o,i,p,g,u){let K=this.tail;u.innerHTML=g.substring(0,o)+K;let W=u.offsetHeight;return W<=d?(u.innerHTML=g.substring(0,o+1)+K,W=u.offsetHeight,W>d||o===i?o:(i=o,o=p-i===1?i+1:Math.floor((p-i)/2)+i,this.bisection(d,o,i,p,g,u))):o-1<0?o:(u.innerHTML=g.substring(0,o-1)+K,W=u.offsetHeight,W<=d?o-1:(p=o,o=Math.floor((p-i)/2)+i,this.bisection(d,o,i,p,g,u)))}genType(){let{lines:d,length:o,isSupportLineClamp:i}=this;this.cls={ellipsis:!0,ellipsis__lines:d&&!i,"ellipsis__line-clamp":d&&i},!d&&!o?this.type="default":d?i?this.type="line-clamp":this.type="line":this.type="length"}gen(){let{type:d,lines:o,length:i,fullWidthRecognition:p,tail:g,orgEl:u,cdr:K,ngZone:W}=this;if(d==="length"){let bt=u.nativeElement;if(bt.children.length>0)throw new Error("Ellipsis content must be string.");let _t=bt.textContent;if((p?this.getStrFullLength(_t):_t.length)<=i||i<0)this.text=_t;else{let Ut;i-g.length<=0?Ut="":Ut=p?this.cutStrByFullLength(_t,i):_t.slice(0,i),this.text=Ut+g}W.run(()=>K.detectChanges())}else if(d==="line"){let{shadowOrgEl:bt,shadowTextEl:_t}=this,Zt=bt.nativeElement,Ut=Zt.innerText||Zt.textContent,Le=parseInt(this.win.getComputedStyle(this.getEl(".ellipsis")).lineHeight,10),ro=o*Le,ao=this.getEl(".ellipsis__handle");if(ao.style.height=`${ro}px`,Zt.offsetHeight<=ro)this.text=Ut,this.targetCount=Ut.length;else{let gi=Ut.length,ql=Math.ceil(gi/2),Gl=this.bisection(ro,ql,0,gi,Ut,_t.nativeElement.firstChild);this.text=Ut,this.targetCount=Gl}W.run(()=>K.detectChanges())}}getEl(d){return this.el.querySelector(d)}executeOnStable(d){this.ngZone.isStable?d():this.ngZone.onStable.asObservable().pipe(ho(1)).subscribe(d)}refresh(){this.genType();let{type:d,dom:o,orgEl:i,cdr:p}=this,g=i.nativeElement.innerHTML;this.orgHtml=o.bypassSecurityTrustHtml(g),p.detectChanges(),this.executeOnStable(()=>{if(this.gen(),d!=="line"){let u=this.getEl(".ellipsis");u&&(u.innerHTML=g)}})}ngAfterViewInit(){this.inited=!0,this.refresh()}ngOnChanges(){this.inited&&this.refresh()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["ellipsis"]],viewQuery:function(o,i){if(o&1&&(rt(Lc,5),rt(Oc,5),rt(jc,5)),o&2){let p;q(p=G())&&(i.orgEl=p.first),q(p=G())&&(i.shadowOrgEl=p.first),q(p=G())&&(i.shadowTextEl=p.first)}},inputs:{tooltip:[2,"tooltip","tooltip",Y],length:[2,"length","length",d=>d==null?null:at(d)],lines:[2,"lines","lines",d=>d==null?null:at(d)],fullWidthRecognition:[2,"fullWidthRecognition","fullWidthRecognition",Y],tail:"tail"},exportAs:["ellipsis"],standalone:!0,features:[ht,Pt,f],ngContentSelectors:Hc,decls:9,vars:1,consts:[["orgEl",""],["tooltipTpl",""],["titleTpl",""],["lengthTpl",""],["lineClampTpl",""],["lineTpl",""],["shadowOrgEl",""],["shadowTextEl",""],[2,"display","none",3,"cdkObserveContent"],[3,"ngClass"],["nz-tooltip","",3,"nzTooltipTitle","nzTooltipOverlayStyle"],[4,"ngTemplateOutlet"],[3,"innerHTML"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass","ngStyle"],[1,"ellipsis__handle"],[1,"ellipsis__shadow",3,"innerHTML"],[1,"ellipsis__shadow"]],template:function(o,i){if(o&1){let p=w();J(),r(0,"div",8,0),v("cdkObserveContent",function(){return y(p),x(i.refresh())}),U(2),a(),C(3,Xc,2,1,"ng-template",null,1,P)(5,Kc,1,1,"span",9)(6,ts,3,4)(7,ns,3,4)(8,rs,11,7,"div",9)}if(o&2){let p;c(5),M((p=i.type)==="default"?5:p==="length"?6:p==="line-clamp"?7:p==="line"?8:-1)}},dependencies:[Ue,de,ee,we,ke],encapsulation:2,changeDetection:0});let n=e;return n})();var mr=(()=>{let e=class e{constructor(){this.article="There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall."}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-ellipsis-number"]],standalone:!0,features:[f],decls:10,vars:2,consts:[["length","100"],[1,"mt-lg"],["length","100","tooltip",""]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"ellipsis",0),t(2),a(),t(3,`
    `),r(4,"h4",1),t(5,"Show Tooltip"),a(),t(6,`
    `),r(7,"ellipsis",2),t(8),a(),t(9,`
  `)),o&2&&(c(2),V(i.article),c(6),V(i.article))},dependencies:[Bo],encapsulation:2});let n=e;return n})();var ur=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-ellipsis-line"]],standalone:!0,features:[f],decls:10,vars:0,consts:[["lines","3","tooltip","",2,"width","200px"],["href","#cover"]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"ellipsis",0),t(2,`
      `),r(3,"p"),t(4,`
        There were injuries alleged in three `),r(5,"a",1),t(6,"cases in 2015"),a(),t(7,`, and a fourth incident in September,
        according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a
        voluntary recall.
      `),a(),t(8,`
    `),a(),t(9,`
  `))},dependencies:[Bo],encapsulation:2});let n=e;return n})();var hr=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/ellipsis/index.en-US.md","zh-CN":"packages/abc/ellipsis/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>When the text is too long, the Ellipsis automatically shortens it according to its length or the maximum number of lines.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="ellipsis"><a class="lake-link"><i data-anchor="ellipsis"></i></a>ellipsis<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[tooltip]</code></td><td>tooltip for showing the full text content when hovering over</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[length]</code></td><td>maximum number of characters in the text before being truncated</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[lines]</code></td><td>maximum number of rows in the text before being truncated</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[fullWidthRecognition]</code></td><td>whether consider full-width character length as 2 when calculate string length</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[tail]</code></td><td>specify overflow tail</td><td><code>string</code></td><td><code>'...'</code></td></tr></tbody></table>`,meta:{type:"Layout",title:"ellipsis",subtitle:"Ellipsis",cols:1,module:"import { EllipsisModule } from '@delon/abc/ellipsis';"},toc:[{id:"API",title:"API",h:2,children:[{id:"ellipsis",title:"ellipsis:standalone",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u6587\u672C\u8FC7\u957F\u81EA\u52A8\u5904\u7406\u7701\u7565\u53F7\uFF0C\u652F\u6301\u6309\u7167\u6587\u672C\u957F\u5EA6\u548C\u6700\u5927\u884C\u6570\u4E24\u79CD\u65B9\u5F0F\u622A\u53D6\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="ellipsis"><a class="lake-link"><i data-anchor="ellipsis"></i></a>ellipsis<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[tooltip]</code></td><td>\u79FB\u52A8\u5230\u6587\u672C\u5C55\u793A\u5B8C\u6574\u5185\u5BB9\u7684\u63D0\u793A</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[length]</code></td><td>\u5728\u6309\u7167\u957F\u5EA6\u622A\u53D6\u4E0B\u7684\u6587\u672C\u6700\u5927\u5B57\u7B26\u6570\uFF0C\u8D85\u8FC7\u5219\u622A\u53D6\u7701\u7565</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[lines]</code></td><td>\u5728\u6309\u7167\u884C\u6570\u622A\u53D6\u4E0B\u6700\u5927\u7684\u884C\u6570\uFF0C\u8D85\u8FC7\u5219\u622A\u53D6\u7701\u7565</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[fullWidthRecognition]</code></td><td>\u662F\u5426\u5C06\u5168\u89D2\u5B57\u7B26\u7684\u957F\u5EA6\u89C6\u4E3A2\u6765\u8BA1\u7B97\u5B57\u7B26\u4E32\u957F\u5EA6</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[tail]</code></td><td>\u6307\u5B9A\u6EA2\u51FA\u5C3E\u5DF4</td><td><code>string</code></td><td><code>'...'</code></td></tr></tbody></table>`,meta:{type:"Layout",title:"ellipsis",subtitle:"\u6587\u672C\u81EA\u52A8\u7701\u7565\u53F7",cols:1,module:"import { EllipsisModule } from '@delon/abc/ellipsis';"},toc:[{id:"API",title:"API",h:2,children:[{id:"ellipsis",title:"ellipsis:standalone",h:3}]}]}},demo:!0},this.codes=[{id:"components-ellipsis-number",meta:{order:1,title:{"zh-CN":"\u6309\u7167\u5B57\u7B26\u6570\u7701\u7565","en-US":"Truncate according to the number of character"}},summary:{"zh-CN":"<p>\u901A\u8FC7\u8BBE\u7F6E <code>length</code> \u5C5E\u6027\u6307\u5B9A\u6587\u672C\u6700\u957F\u957F\u5EA6\uFF0C\u5982\u679C\u8D85\u8FC7\u8FD9\u4E2A\u957F\u5EA6\u4F1A\u81EA\u52A8\u622A\u53D6\u3002</p>","en-US":"<p><code>length</code> attribute specifies the maximum length where the text will automatically be truncated when exceeded.</p>"},code:`import { Component } from '@angular/core';

import { EllipsisComponent } from '@delon/abc/ellipsis';

@Component({
  selector: 'components-ellipsis-number',
  template: \`
    <ellipsis length="100">{{ article }}</ellipsis>
    <h4 class="mt-lg">Show Tooltip</h4>
    <ellipsis length="100" tooltip>{{ article }}</ellipsis>
  \`,
  standalone: true,
  imports: [EllipsisComponent]
})
export class ComponentsEllipsisNumberComponent {
  article =
    'There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.';
}`,lang:"ts",componentName:"ComponentsEllipsisNumberComponent",point:0,name:"number",urls:"packages/abc/ellipsis/demo/number.md",type:"demo"},{id:"components-ellipsis-line",meta:{order:2,title:{"zh-CN":"\u6309\u7167\u884C\u6570\u7701\u7565","en-US":"Truncate according to the number of rows"}},summary:{"zh-CN":"<p>\u901A\u8FC7\u8BBE\u7F6E <code>lines</code> \u5C5E\u6027\u6307\u5B9A\u6700\u5927\u884C\u6570\uFF0C\u5982\u679C\u8D85\u8FC7\u8FD9\u4E2A\u884C\u6570\u7684\u6587\u672C\u4F1A\u81EA\u52A8\u622A\u53D6\u3002\u4F46\u662F\u5728\u8FD9\u79CD\u6A21\u5F0F\u4E0B\u6240\u6709 <code>ng-content</code> \u5C06\u4F1A\u88AB\u8F6C\u6362\u6210\u7EAF\u6587\u672C\u3002</p><p>\u5E76\u4E14\u6CE8\u610F\u5728\u8FD9\u79CD\u6A21\u5F0F\u4E0B\uFF0C\u5916\u5BB9\u5668\u9700\u8981\u6709\u6307\u5B9A\u7684\u5BBD\u5EA6\uFF08\u6216\u8BBE\u7F6E\u81EA\u8EAB\u5BBD\u5EA6\uFF09\u3002</p>","en-US":"<p><code>lines</code> attribute specifies the maximum number of rows where the text will automatically be truncated when exceeded. In this mode, all <code>ng-content</code> will be converted to plain text.</p><p>Also note that, in this mode, the outer container needs to have a specified width (or set its own width).</p>"},code:`import { Component } from '@angular/core';

import { EllipsisComponent } from '@delon/abc/ellipsis';

@Component({
  selector: 'components-ellipsis-line',
  template: \`
    <ellipsis lines="3" tooltip style="width: 200px">
      <p>
        There were injuries alleged in three <a href="#cover">cases in 2015</a>, and a fourth incident in September,
        according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a
        voluntary recall.
      </p>
    </ellipsis>
  \`,
  standalone: true,
  imports: [EllipsisComponent]
})
export class ComponentsEllipsisLineComponent {}`,lang:"ts",componentName:"ComponentsEllipsisLineComponent",point:1,name:"line",urls:"packages/abc/ellipsis/demo/line.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-ellipsis"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-ellipsis-number"),t(7,`
        `),a(),t(8,`
      
        `),r(9,"code-box",3),t(10,`
          `),m(11,"components-ellipsis-line"),t(12,`
        `),a(),t(13,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id),c(5),s("item",i.codes[1]),T("id",i.codes[1].id))},dependencies:[j,H,mr,ur,B,R,F],encapsulation:2});let n=e;return n})();var Vo=(()=>{let e=class e{constructor(d){this.el=S(xt).nativeElement,this.cdr=S(lt),this.doc=S(be),this.directionality=S(qt),this.platform=S(pe),this.destroy$=S(Lt),this.formEl=null,this._hiden=!0,this.count=0,this.dir="ltr",d.attach(this,"errorCollect",{freq:500,offsetTop:129+8*2})}get errEls(){return this.formEl.querySelectorAll(".ant-form-item-has-error")}update(){let d=this.errEls.length;d!==this.count&&(this.count=d,this._hiden=d===0,this.cdr.markForCheck())}_click(){if(this.count===0)return!1;let d=this.errEls;return(this.findParent(d[0],"[nz-form-control]")||d[0]).scrollIntoView(!0),this.doc.documentElement.scrollTop-=this.offsetTop,!0}install(){this.dir=this.directionality.value,this.directionality.change.pipe(Mt(this.destroy$)).subscribe(d=>{this.dir=d,this.cdr.detectChanges()}),ln(this.freq).pipe(Mt(this.destroy$)).subscribe(()=>this.update()),this.update()}findParent(d,o){let i=null;for(;d;){if(d.querySelector(o)){i=d;break}d=d.parentElement}return i}ngOnInit(){if(this.platform.isBrowser){if(this.formEl=this.findParent(this.el,"form"),this.formEl===null)throw new Error("No found form element");this.install()}}};e.\u0275fac=function(o){return new(o||e)($(At))},e.\u0275cmp=h({type:e,selectors:[["error-collect"],["","error-collect",""]],hostVars:6,hostBindings:function(o,i){o&1&&v("click",function(){return i._click()}),o&2&&k("error-collect",!0)("error-collect-rtl",i.dir==="rtl")("d-none",i._hiden)},inputs:{freq:[2,"freq","freq",at],offsetTop:[2,"offsetTop","offsetTop",at]},exportAs:["errorCollect"],standalone:!0,features:[ht,f],decls:3,vars:1,consts:[["nz-icon","","nzType","exclamation-circle"],[1,"error-collect__count"]],template:function(o,i){o&1&&(m(0,"i",0),r(1,"span",1),t(2),a()),o&2&&(c(2),V(i.count))},dependencies:[Tt],encapsulation:2,changeDetection:0});let n=e;return n})();var fr=(()=>{let e=class e{constructor(){this.validateForm=new $e({email:new ve(null,[me.required])})}get email(){return this.validateForm.controls.email}ngOnInit(){this.email.markAsDirty()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-error-collect-basic"]],standalone:!0,features:[f],decls:14,vars:1,consts:[["nz-form","",3,"formGroup"],["nz-input","","formControlName","email","id","email"]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"form",0),t(2,`
      `),r(3,"nz-form-item"),t(4,`
        `),r(5,"nz-form-control"),t(6,`
          `),m(7,"input",1),t(8,`
        `),a(),t(9,`
      `),a(),t(10,`
      `),m(11,"error-collect"),t(12,`
    `),a(),t(13,`
  `)),o&2&&(c(),s("formGroup",i.validateForm))},dependencies:[It,R,F,Et,Ke,Je,Ze,Nt,Ct,ct,Dt,Qe,Ne,pt,st,Vo],encapsulation:2});let n=e;return n})();var gr=(()=>{let e=class e{constructor(){this.item={cols:2,urls:{"en-US":"packages/abc/error-collect/index.en-US.md","zh-CN":"packages/abc/error-collect/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>A simple form exception messages collector that jump to element location via click icon; it must be a standard <code>form</code>.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="error-collect"><a class="lake-link"><i data-anchor="error-collect"></i></a>error-collect<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[freq]</code></td><td>Monitor frequency, unit is milliseconds</td><td><code>number</code></td><td><code>500</code></td><td>\u2705</td></tr><tr><td><code>[offsetTop]</code></td><td>Top offset, unit is <code>px</code></td><td><code>number</code></td><td><code>145</code></td><td>\u2705</td></tr></tbody></table>',meta:{type:"Form",title:"error-collect",subtitle:"Error Collect",cols:2,module:"import { ErrorCollectModule } from '@delon/abc/error-collect';"},toc:[{id:"API",title:"API",h:2,children:[{id:"error-collect",title:"error-collect:standalone",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u4E00\u4E2A\u7B80\u5355\u7684\u8868\u5355\u5F02\u5E38\u6D88\u606F\u91C7\u96C6\u5668\uFF0C\u70B9\u51FB\u56FE\u6807\u8DF3\u8F6C\u76F8\u5E94\u7684\u4F4D\u7F6E\uFF1B\u5FC5\u987B\u662F\u4E00\u4E2A\u6807\u51C6 <code>form</code> \u8868\u5355\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="error-collect"><a class="lake-link"><i data-anchor="error-collect"></i></a>error-collect<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[freq]</code></td><td>\u76D1\u542C\u9891\u7387\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>500</code></td><td>\u2705</td></tr><tr><td><code>[offsetTop]</code></td><td>\u9876\u90E8\u504F\u79FB\u503C\uFF0C\u5355\u4F4D\uFF1A<code>px</code></td><td><code>number</code></td><td><code>145</code></td><td>\u2705</td></tr></tbody></table>',meta:{type:"Form",title:"error-collect",subtitle:"\u8868\u5355\u5F02\u5E38\u6D88\u606F\u91C7\u96C6\u5668",cols:2,module:"import { ErrorCollectModule } from '@delon/abc/error-collect';"},toc:[{id:"API",title:"API",h:2,children:[{id:"error-collect",title:"error-collect:standalone",h:3}]}]}},demo:!0},this.codes=[{id:"components-error-collect-basic",meta:{order:0,title:"\u57FA\u7840"},summary:"<p>\u4E00\u822C\u914D\u5408 <code>footer-toolbar</code> \u4E00\u8D77\u4F7F\u7528\u3002</p>",code:`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ErrorCollectComponent } from '@delon/abc/error-collect';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'components-error-collect-basic',
  template: \`
    <form nz-form [formGroup]="validateForm">
      <nz-form-item>
        <nz-form-control>
          <input nz-input formControlName="email" id="email" />
        </nz-form-control>
      </nz-form-item>
      <error-collect />
    </form>
  \`,
  standalone: true,
  imports: [NzFormModule, ReactiveFormsModule, NzInputModule, ErrorCollectComponent]
})
export class ComponentsErrorCollectBasicComponent implements OnInit {
  validateForm = new FormGroup({
    email: new FormControl(null, [Validators.required])
  });

  get email(): FormControl<string | null> {
    return this.validateForm.controls.email;
  }

  ngOnInit(): void {
    this.email.markAsDirty();
  }
}`,lang:"ts",componentName:"ComponentsErrorCollectBasicComponent",point:0,name:"basic",urls:"packages/abc/error-collect/demo/basic.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-error-collect"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-error-collect-basic"),t(7,`
        `),a(),t(8,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id))},dependencies:[j,H,fr,B,R,F],encapsulation:2});let n=e;return n})();var ls=["conTpl"],cs=["*"];function ss(n,e){if(n&1&&(r(0,"button",8),t(1),a()),n&2){let l=b();s("routerLink",l.backRouterLink)("nzType","primary"),c(),mt(" ",l.locale.backToHome," ")}}var so=(()=>{let e=class e{set type(d){let o=this.typeDict[d];o&&(this.fixImg(o.img),this._type=d,this._title=o.title,this._desc="")}fixImg(d){this._img=this.dom.bypassSecurityTrustStyle(`url('${d}')`)}set img(d){this.fixImg(d)}set title(d){this._title=this.dom.bypassSecurityTrustHtml(d)}set desc(d){this._desc=this.dom.bypassSecurityTrustHtml(d)}checkContent(){this.hasCon=!yo(this.conTpl.nativeElement),this.cdr.detectChanges()}constructor(d){this.i18n=S(qe),this.dom=S(ye),this.directionality=S(qt),this.cdr=S(lt),this.destroy$=S(Lt),this.locale={},this.hasCon=!1,this.dir="ltr",this._img="",this._title="",this._desc="",this.backRouterLink="/",d.attach(this,"exception",{typeDict:{403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500"}}})}ngOnInit(){this.dir=this.directionality.value,this.directionality.change.pipe(Mt(this.destroy$)).subscribe(d=>{this.dir=d,this.cdr.detectChanges()}),this.i18n.change.pipe(Mt(this.destroy$)).subscribe(()=>{this.locale=this.i18n.getData("exception"),this.cdr.detectChanges()}),this.checkContent()}};e.\u0275fac=function(o){return new(o||e)($(At))},e.\u0275cmp=h({type:e,selectors:[["exception"]],viewQuery:function(o,i){if(o&1&&rt(ls,7),o&2){let p;q(p=G())&&(i.conTpl=p.first)}},hostVars:4,hostBindings:function(o,i){o&2&&k("exception",!0)("exception-rtl",i.dir==="rtl")},inputs:{type:"type",img:"img",title:"title",desc:"desc",backRouterLink:"backRouterLink"},exportAs:["exception"],standalone:!0,features:[f],ngContentSelectors:cs,decls:10,vars:5,consts:[["conTpl",""],[1,"exception__img-block"],[1,"exception__img"],[1,"exception__cont"],[1,"exception__cont-title",3,"innerHTML"],[1,"exception__cont-desc",3,"innerHTML"],[1,"exception__cont-actions"],[3,"cdkObserveContent"],["nz-button","",3,"routerLink","nzType"]],template:function(o,i){if(o&1){let p=w();J(),r(0,"div",1),m(1,"div",2),a(),r(2,"div",3),m(3,"h1",4)(4,"div",5),r(5,"div",6)(6,"div",7,0),v("cdkObserveContent",function(){return y(p),x(i.checkContent())}),U(8),a(),C(9,ss,2,3,"button",8),a()()}o&2&&(c(),Rt("background-image",i._img),c(2),s("innerHTML",i._title,jt),c(),s("innerHTML",i._desc||i.locale[i._type],jt),c(5),M(i.hasCon?-1:9))},dependencies:[Ue,D,Oi],encapsulation:2,changeDetection:0});let n=e;return n})();var br=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-exception-404"]],standalone:!0,features:[f],decls:2,vars:1,consts:[[3,"type"]],template:function(o,i){o&1&&(t(0," "),m(1,"exception",0)),o&2&&(c(),s("type",404))},dependencies:[so],encapsulation:2});let n=e;return n})();var Cr=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-exception-500"]],standalone:!0,features:[f],decls:2,vars:1,consts:[[3,"type"]],template:function(o,i){o&1&&(t(0," "),m(1,"exception",0)),o&2&&(c(),s("type",500))},dependencies:[so],encapsulation:2});let n=e;return n})();var yr=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-exception-403"]],standalone:!0,features:[f],decls:2,vars:1,consts:[[3,"type"]],template:function(o,i){o&1&&(t(0," "),m(1,"exception",0)),o&2&&(c(),s("type",403))},dependencies:[so],encapsulation:2});let n=e;return n})();var xr=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/exception/index.en-US.md","zh-CN":"packages/abc/exception/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Exceptions page is used to provide feedback on specific abnormal state. Usually, it contains an explanation of the error status, and provides users with suggestions or operations, to prevent users from feeling lost and confused.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="exception"><a class="lake-link"><i data-anchor="exception"></i></a>exception<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>type of exception, the corresponding default <code>title</code>, <code>desc</code>, <code>img</code> will be given if set, which can be overridden by explicit setting of <code>title</code>, <code>desc</code>, <code>img</code></td><td><code>'403','404','500'</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[title]</code></td><td>title</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>[desc]</code></td><td>supplementary description</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>[img]</code></td><td>the url of background image</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>[backRouterLink]</code></td><td>Back of router link</td><td><code>string, any[]</code></td><td><code>/</code></td><td>-</td></tr><tr><td><code>ng-content</code></td><td>suggested operations, a default 'Home' link will show if not set</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr></tbody></table>`,meta:{type:"Layout",title:"exception",subtitle:"Exception",cols:1,module:"import { ExceptionModule } from '@delon/abc/exception';"},toc:[{id:"API",title:"API",h:2,children:[{id:"exception",title:"exception:standalone",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u5F02\u5E38\u9875\u7528\u4E8E\u5BF9\u9875\u9762\u7279\u5B9A\u7684\u5F02\u5E38\u72B6\u6001\u8FDB\u884C\u53CD\u9988\u3002\u901A\u5E38\uFF0C\u5B83\u5305\u542B\u5BF9\u9519\u8BEF\u72B6\u6001\u7684\u9610\u8FF0\uFF0C\u5E76\u5411\u7528\u6237\u63D0\u4F9B\u5EFA\u8BAE\u6216\u64CD\u4F5C\uFF0C\u907F\u514D\u7528\u6237\u611F\u5230\u8FF7\u5931\u548C\u56F0\u60D1\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="exception"><a class="lake-link"><i data-anchor="exception"></i></a>exception<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>\u9875\u9762\u7C7B\u578B\uFF0C\u82E5\u914D\u7F6E\uFF0C\u5219\u81EA\u5E26\u5BF9\u5E94\u7C7B\u578B\u9ED8\u8BA4\u7684 <code>title</code>\uFF0C<code>desc</code>\uFF0C<code>img</code>\uFF0C\u6B64\u9ED8\u8BA4\u8BBE\u7F6E\u53EF\u4EE5\u88AB <code>title</code>\uFF0C<code>desc</code>\uFF0C<code>img</code> \u8986\u76D6</td><td><code>'403','404','500'</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>[desc]</code></td><td>\u8865\u5145\u63CF\u8FF0</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>[img]</code></td><td>\u80CC\u666F\u56FE\u7247\u5730\u5740</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>[backRouterLink]</code></td><td>\u540E\u9000\u8DEF\u7531\u94FE\u63A5</td><td><code>string, any[]</code></td><td><code>/</code></td><td>-</td></tr><tr><td><code>ng-content</code></td><td>\u5EFA\u8BAE\u64CD\u4F5C\uFF0C\u914D\u7F6E\u6B64\u5C5E\u6027\u65F6\u9ED8\u8BA4\u7684\u300E\u8FD4\u56DE\u9996\u9875\u300F\u6309\u94AE\u4E0D\u751F\u6548</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr></tbody></table>`,meta:{type:"Layout",title:"exception",subtitle:"\u5F02\u5E38",cols:1,module:"import { ExceptionModule } from '@delon/abc/exception';"},toc:[{id:"API",title:"API",h:2,children:[{id:"exception",title:"exception:standalone",h:3}]}]}},demo:!0},this.codes=[{id:"components-exception-404",meta:{order:0,title:404},summary:"<p>404 \u9875\u9762\u3002</p>",code:`import { Component } from '@angular/core';

import { ExceptionComponent } from '@delon/abc/exception';

@Component({
  selector: 'components-exception-404',
  template: \` <exception [type]="404" />\`,
  standalone: true,
  imports: [ExceptionComponent]
})
export class ComponentsException404Component {}`,lang:"ts",componentName:"ComponentsException404Component",point:0,name:"404",urls:"packages/abc/exception/demo/404.md",type:"demo"},{id:"components-exception-500",meta:{order:1,title:500},summary:"<p>500 \u9875\u9762\u3002</p>",code:`import { Component } from '@angular/core';

import { ExceptionComponent } from '@delon/abc/exception';

@Component({
  selector: 'components-exception-500',
  template: \` <exception [type]="500" />\`,
  standalone: true,
  imports: [ExceptionComponent]
})
export class ComponentsException500Component {}`,lang:"ts",componentName:"ComponentsException500Component",point:1,name:"500",urls:"packages/abc/exception/demo/500.md",type:"demo"},{id:"components-exception-403",meta:{order:2,title:403},summary:"<p>403 \u9875\u9762\uFF0C\u914D\u5408\u81EA\u5B9A\u4E49\u64CD\u4F5C\u3002</p>",code:`import { Component } from '@angular/core';

import { ExceptionComponent } from '@delon/abc/exception';

@Component({
  selector: 'components-exception-403',
  template: \` <exception [type]="403" />\`,
  standalone: true,
  imports: [ExceptionComponent]
})
export class ComponentsException403Component {}`,lang:"ts",componentName:"ComponentsException403Component",point:2,name:"403",urls:"packages/abc/exception/demo/403.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-exception"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:19,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-exception-404"),t(7,`
        `),a(),t(8,`
      
        `),r(9,"code-box",3),t(10,`
          `),m(11,"components-exception-500"),t(12,`
        `),a(),t(13,`
      
        `),r(14,"code-box",3),t(15,`
          `),m(16,"components-exception-403"),t(17,`
        `),a(),t(18,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id),c(5),s("item",i.codes[1]),T("id",i.codes[1].id),c(5),s("item",i.codes[2]),T("id",i.codes[2].id))},dependencies:[j,H,br,Cr,yr,B,R,F],encapsulation:2});let n=e;return n})();var ps=["*"];function ms(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b();c(),V(l.extra)}}function us(n,e){n&1&&m(0,"error-collect")}var vr="footer-toolbar__body",An=(()=>{let e=class e{constructor(){this.el=S(xt).nativeElement,this.renderer=S(oe),this.bodyCls=S(be).querySelector("body")?.classList,this.errorCollect=!1}ngOnInit(){this.renderer.addClass(this.el,"footer-toolbar"),this.bodyCls?.add(vr)}ngOnDestroy(){this.bodyCls?.remove(vr)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["footer-toolbar"]],inputs:{errorCollect:[2,"errorCollect","errorCollect",Y],extra:"extra"},exportAs:["footerToolbar"],standalone:!0,features:[ht,f],ngContentSelectors:ps,decls:5,vars:2,consts:[[1,"footer-toolbar__left"],[4,"nzStringTemplateOutlet"],[1,"footer-toolbar__right"]],template:function(o,i){o&1&&(J(),r(0,"div",0),C(1,ms,2,1,"ng-container",1),a(),r(2,"div",2),C(3,us,1,0,"error-collect"),U(4),a()),o&2&&(c(),s("nzStringTemplateOutlet",i.extra),c(2),M(i.errorCollect?3:-1))},dependencies:[Bt,Vo],encapsulation:2,changeDetection:0});let n=e;return n})();var Sr=(()=>{let e=class e{constructor(){this.form=new $e({name:new ve(null,[me.required])})}get name(){return this.form.controls.name}ngOnInit(){this.name.markAsDirty()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-footer-toolbar-basic"]],standalone:!0,features:[f],decls:18,vars:2,consts:[["nz-form","",3,"formGroup"],[3,"nzValidateStatus"],["nz-input","","formControlName","name","placeholder","required"],["errorCollect","","extra","This is extra area"],["nz-button","","nzType","primary"]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"form",0),t(2,`
      `),r(3,"nz-form-item"),t(4,`
        `),r(5,"nz-form-control",1),t(6,`
          `),m(7,"input",2),t(8,`
        `),a(),t(9,`
      `),a(),t(10,`
      `),r(11,"footer-toolbar",3),t(12,`
        `),r(13,"button",4),t(14,"Submit"),a(),t(15,`
      `),a(),t(16,`
    `),a(),t(17,`
  `)),o&2&&(c(),s("formGroup",i.form),c(4),s("nzValidateStatus",i.name))},dependencies:[It,R,F,Et,Ke,Je,Ze,Nt,Ct,ct,Dt,Qe,Ne,pt,st,An,I,D,N,E],encapsulation:2});let n=e;return n})();var zr=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/footer-toolbar/index.en-US.md","zh-CN":"packages/abc/footer-toolbar/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>A toolbar fixed at the bottom.</p><h2 id="Usage"><a class="lake-link"><i data-anchor="Usage"></i></a>Usage</h2><p>It is fixed at the bottom of the content area and does not move along with the scroll bar, which is usually used for data collection and submission for long pages.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="footer-toolbar"><a class="lake-link"><i data-anchor="footer-toolbar"></i></a>footer-toolbar<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>ng-content</code></td><td>toolbar content, align to the right</td><td><code>-</code></td><td>-</td></tr><tr><td><code>[errorCollect]</code></td><td>Whether <code>error-collect</code>, make sure to wrap inside the <code>&lt;form></code> element</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[extra]</code></td><td>extra information, align to the left</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr></tbody></table>',meta:{type:"Layout",title:"footer-toolbar",subtitle:"FooterToolbar",cols:1,module:"import { FooterToolbarModule } from '@delon/abc/footer-toolbar';"},toc:[{id:"Usage",title:"Usage",h:2},{id:"API",title:"API",h:2,children:[{id:"footer-toolbar",title:"footer-toolbar:standalone",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u56FA\u5B9A\u5728\u5E95\u90E8\u7684\u5DE5\u5177\u680F\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u4F55\u65F6\u4F7F\u7528"></i></a>\u4F55\u65F6\u4F7F\u7528</h2><p>\u56FA\u5B9A\u5728\u5185\u5BB9\u533A\u57DF\u7684\u5E95\u90E8\uFF0C\u4E0D\u968F\u6EDA\u52A8\u6761\u79FB\u52A8\uFF0C\u5E38\u7528\u4E8E\u957F\u9875\u9762\u7684\u6570\u636E\u641C\u96C6\u548C\u63D0\u4EA4\u5DE5\u4F5C\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="footer-toolbar"><a class="lake-link"><i data-anchor="footer-toolbar"></i></a>footer-toolbar<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>ng-content</code></td><td>\u5DE5\u5177\u680F\u5185\u5BB9\uFF0C\u5411\u53F3\u5BF9\u9F50</td><td><code>-</code></td><td>-</td></tr><tr><td><code>[errorCollect]</code></td><td>\u662F\u5426\u9700\u8981 <code>error-collect</code>\uFF0C\u52A1\u5FC5\u5305\u88F9\u5728 <code>&lt;form></code> \u5143\u7D20\u5185</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[extra]</code></td><td>\u989D\u5916\u4FE1\u606F\uFF0C\u5411\u5DE6\u5BF9\u9F50</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr></tbody></table>',meta:{type:"Layout",title:"footer-toolbar",subtitle:"\u5E95\u90E8\u5DE5\u5177\u680F",cols:1,module:"import { FooterToolbarModule } from '@delon/abc/footer-toolbar';"},toc:[{id:"\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528",h:2},{id:"API",title:"API",h:2,children:[{id:"footer-toolbar",title:"footer-toolbar:standalone",h:3}]}]}},demo:!0},this.codes=[{id:"components-footer-toolbar-basic",meta:{order:0,title:"\u57FA\u7840"},summary:"<p>\u6D6E\u52A8\u56FA\u5B9A\u9875\u811A\uFF0C\u5E38\u7528\u4E8E\u8868\u5355\u9875\u3002</p>",code:`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { FooterToolbarComponent } from '@delon/abc/footer-toolbar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'components-footer-toolbar-basic',
  template: \`
    <form nz-form [formGroup]="form">
      <nz-form-item>
        <nz-form-control [nzValidateStatus]="name">
          <input nz-input formControlName="name" placeholder="required" />
        </nz-form-control>
      </nz-form-item>
      <footer-toolbar errorCollect extra="This is extra area">
        <button nz-button nzType="primary">Submit</button>
      </footer-toolbar>
    </form>
  \`,
  standalone: true,
  imports: [NzFormModule, ReactiveFormsModule, NzInputModule, FooterToolbarComponent, NzButtonModule]
})
export class ComponentsFooterToolbarBasicComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(null, [Validators.required])
  });

  get name(): FormControl<string | null> {
    return this.form.controls.name;
  }

  ngOnInit(): void {
    this.name.markAsDirty();
  }
}`,lang:"ts",componentName:"ComponentsFooterToolbarBasicComponent",point:0,name:"basic",urls:"packages/abc/footer-toolbar/demo/basic.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-footer-toolbar"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-footer-toolbar-basic"),t(7,`
        `),a(),t(8,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id))},dependencies:[j,H,Sr,B,R,F],encapsulation:2});let n=e;return n})();var _r=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/full-content/index.en-US.md","zh-CN":"packages/abc/full-content/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Often used for tables with scroll bars, a simple <a target="_blank" href="https://ng-alain.surge.sh/#/delon/st" data-url="https://ng-alain.surge.sh/#/delon/st">demo</a>\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="full-content"><a class="lake-link"><i data-anchor="full-content"></i></a>full-content<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[(fullscreen)]</code></td><td>Whether full screen (not including top, sidebar area)</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[hideTitle]</code></td><td>Hide title when <code>fullscreen</code> is true</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[padding]</code></td><td>Padding of work area</td><td><code>number</code></td><td><code>24</code></td></tr></tbody></table><h3 id="full-toggle"><a class="lake-link"><i data-anchor="full-toggle"></i></a>full-toggle<label class="api-type-label directive">directive</label><label class="api-type-label standalone">standalone</label></h3><p>Switch whether it is full screen.</p><h2 id="Control"><a class="lake-link"><i data-anchor="Control"></i></a>Control</h2><p>There are three ways:</p><ul><li><p>Use <code>fullscreen</code> property, it support two-way binding</p></li><li><p>Use <code>[full-toggle]</code> directive</p></li><li><p>Use <code>FullContentService.toggle()</code> service</p></li></ul>',meta:{type:"Layout",title:"full-content",subtitle:"Full Screen Workspace",cols:1,module:"import { FullContentModule } from '@delon/abc/full-content';"},toc:[{id:"API",title:"API",h:2,children:[{id:"full-content",title:"full-content:standalone",h:3},{id:"full-toggle",title:"full-toggle:standalone",h:3}]},{id:"Control",title:"Control",h:2}]},"zh-CN":{content:'<section class="markdown"><p>\u5168\u5C4F\u5DE5\u4F5C\u533A\uFF0C\u5E38\u7528\u4E8E\u5E26\u6709\u6EDA\u52A8\u6761\u8868\u683C\uFF0C\u4E00\u4E2A\u5728\u7EBF<a target="_blank" href="https://ng-alain.surge.sh/#/delon/st" data-url="https://ng-alain.surge.sh/#/delon/st">\u793A\u4F8B</a>\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="full-content"><a class="lake-link"><i data-anchor="full-content"></i></a>full-content<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[(fullscreen)]</code></td><td>\u662F\u5426\u5B8C\u6574\u5168\u5C4F\uFF08\u4E0D\u5305\u62EC\u9876\u90E8\u3001\u4FA7\u8FB9\u680F\u7B49\uFF09</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[hideTitle]</code></td><td>\u5B8C\u6574\u5168\u5C4F\u65F6\u662F\u5426\u9690\u85CF\u6807\u9898</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[padding]</code></td><td>\u5DE5\u4F5C\u533A\u5185\u8FB9\u8DDD</td><td><code>number</code></td><td><code>24</code></td></tr></tbody></table><h3 id="full-toggle"><a class="lake-link"><i data-anchor="full-toggle"></i></a>full-toggle<label class="api-type-label directive">directive</label><label class="api-type-label standalone">standalone</label></h3><p>\u5207\u6362\u662F\u5426\u5168\u5C4F\u3002</p><h2 id="\u5168\u5C4F\u63A7\u5236"><a class="lake-link"><i data-anchor="\u5168\u5C4F\u63A7\u5236"></i></a>\u5168\u5C4F\u63A7\u5236</h2><p>\u5305\u542B\u4E09\u79CD\u65B9\u5F0F\uFF1A</p><ul><li><p>\u4F7F\u7528 <code>fullscreen</code> \u53CC\u5411\u7ED1\u5B9A</p></li><li><p>\u4F7F\u7528 <code>[full-toggle]</code> \u6307\u4EE4</p></li><li><p>\u4F7F\u7528 <code>FullContentService.toggle()</code> \u670D\u52A1</p></li></ul>',meta:{type:"Layout",title:"full-content",subtitle:"\u5168\u5C4F\u5DE5\u4F5C\u533A",cols:1,module:"import { FullContentModule } from '@delon/abc/full-content';"},toc:[{id:"API",title:"API",h:2,children:[{id:"full-content",title:"full-content:standalone",h:3},{id:"full-toggle",title:"full-toggle:standalone",h:3}]},{id:"\u5168\u5C4F\u63A7\u5236",title:"\u5168\u5C4F\u63A7\u5236",h:2}]}},demo:!1},this.codes=[]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-full-content"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(o,i){o&1&&m(0,"app-docs",0),o&2&&s("codes",i.codes)("item",i.item)},dependencies:[j],encapsulation:2});let n=e;return n})();var hs=["host"],fs=["*"];function gs(n,e){n&1&&U(0)}var Ko=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["global-footer-item"]],viewQuery:function(o,i){if(o&1&&rt(hs,7),o&2){let p;q(p=G())&&(i.host=p.first)}},inputs:{href:"href",blankTarget:[2,"blankTarget","blankTarget",Y]},exportAs:["globalFooterItem"],standalone:!0,features:[ht,f],ngContentSelectors:fs,decls:2,vars:0,consts:[["host",""]],template:function(o,i){o&1&&(J(),C(0,gs,1,0,"ng-template",null,0,P))},encapsulation:2,changeDetection:0});let n=e;return n})();var Cs=["*"];function ys(n,e){if(n&1){let l=w();r(0,"a",4),v("click",function(){let o=y(l).$implicit,i=b(2);return x(i.to(o))}),a()}if(n&2){let l=e.$implicit;s("innerHTML",l._title,jt)}}function xs(n,e){n&1&&ge(0)}function vs(n,e){if(n&1){let l=w();r(0,"a",5),v("click",function(){let o=y(l).$implicit,i=b(2);return x(i.to(o))}),C(1,xs,1,0,"ng-container",6),a()}if(n&2){let l=e.$implicit;c(),s("ngTemplateOutlet",l.host)}}function Ss(n,e){if(n&1&&(r(0,"div",0),St(1,ys,1,1,"a",2,kt),St(3,vs,2,1,"a",3,kt),a()),n&2){let l=b();c(),zt(l.links),c(2),zt(l.items)}}var Jo=(()=>{let e=class e{constructor(){this.router=S(hn),this.win=S(id),this.dom=S(ye),this.directionality=S(qt),this.cdr=S(lt),this.destroy$=S(Lt),this._links=[],this.dir="ltr"}set links(d){d.forEach(o=>o._title=this.dom.bypassSecurityTrustHtml(o.title)),this._links=d}get links(){return this._links}to(d){if(d.href){if(d.blankTarget){this.win.open(d.href);return}/^https?:\/\//.test(d.href)?this.win.location.href=d.href:this.router.navigateByUrl(d.href)}}ngOnInit(){this.dir=this.directionality.value,this.directionality.change.pipe(Mt(this.destroy$)).subscribe(d=>{this.dir=d,this.cdr.detectChanges()})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["global-footer"]],contentQueries:function(o,i,p){if(o&1&&te(p,Ko,4),o&2){let g;q(g=G())&&(i.items=g)}},hostVars:4,hostBindings:function(o,i){o&2&&k("global-footer",!0)("global-footer-rtl",i.dir==="rtl")},inputs:{links:"links"},exportAs:["globalFooter"],standalone:!0,features:[f],ngContentSelectors:Cs,decls:3,vars:1,consts:[[1,"global-footer__links"],[1,"global-footer__copyright"],[1,"global-footer__links-item",3,"innerHTML"],[1,"global-footer__links-item"],[1,"global-footer__links-item",3,"click","innerHTML"],[1,"global-footer__links-item",3,"click"],[4,"ngTemplateOutlet"]],template:function(o,i){o&1&&(J(),C(0,Ss,5,0,"div",0),r(1,"div",1),U(2),a()),o&2&&M(i.links.length>0||i.items.length>0?0:-1)},dependencies:[ee],encapsulation:2,changeDetection:0});let n=e;return n})();var Tr=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=Kt({type:e}),e.\u0275inj=Xt({imports:[Ce,ji]});let n=e;return n})();var wr=(()=>{let e=class e{constructor(){this.links=[{title:"\u5E2E\u52A9",href:"https://ng-alain.com/",blankTarget:!0},{title:"Github",href:"https://github.com/ng-alain",blankTarget:!0},{title:"\u9884\u89C8",href:"https://ng-alain.surge.sh/",blankTarget:!0}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-global-footer-basic"]],standalone:!0,features:[f],decls:11,vars:1,consts:[[2,"height","280px"],[3,"links"],["nz-icon","","nzType","copyright",1,"mx-sm"],["href","//github.com/cipchk","target","_blank",1,"mx-sm"]],template:function(o,i){o&1&&(t(0,`
    `),m(1,"div",0),t(2,`
    `),r(3,"global-footer",1),t(4,`
      Copyright`),m(5,"i",2),t(6,`
      2023
      `),r(7,"a",3),t(8,"\u5361\u8272"),a(),t(9,`\u51FA\u54C1
    `),a(),t(10,`
  `)),o&2&&(c(3),s("links",i.links))},dependencies:[Jo,Ot,Tt],styles:["[_nghost-%COMP%]{display:block}"]});let n=e;return n})();var kr=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-global-footer-custom"]],standalone:!0,features:[f],decls:22,vars:0,consts:[[2,"height","280px"],["href","https://ng-alain.com/","blankTarget",""],["href","https://github.com/ng-alain","blankTarget",""],["nz-icon","","nzType","github"],["href","https://ng-alain.surge.sh/","blankTarget",""],["nz-icon","","nzType","copyright",1,"mx-sm"],["href","//github.com/cipchk","target","_blank",1,"mx-sm"]],template:function(o,i){o&1&&(t(0,`
    `),m(1,"div",0),t(2,`
    `),r(3,"global-footer"),t(4,`
      `),r(5,"global-footer-item",1),t(6,"\u5E2E\u52A9"),a(),t(7,`
      `),r(8,"global-footer-item",2),t(9,`
        `),m(10,"i",3),t(11,`
      `),a(),t(12,`
      `),r(13,"global-footer-item",4),t(14,"\u9884\u89C8"),a(),t(15,`
      Copyright`),m(16,"i",5),t(17,`
      2023
      `),r(18,"a",6),t(19,"\u5361\u8272"),a(),t(20,`\u51FA\u54C1
    `),a(),t(21,`
  `))},dependencies:[Tr,Jo,Ko,Ot,Tt],styles:["[_nghost-%COMP%]{display:block}"]});let n=e;return n})();var Mr=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/global-footer/index.en-US.md","zh-CN":"packages/abc/global-footer/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>The footer is part of the global navigation as a supplement to the top navigation.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="global-footer"><a class="lake-link"><i data-anchor="global-footer"></i></a>global-footer<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[links]</code></td><td>Link data</td><td><code><a data-toc="GlobalFooterLink">GlobalFooterLink</a></code></td><td>-</td></tr><tr><td><code>[copyright]</code></td><td>Copyright Information</td><td><code>TemplateRef</code></td><td>-</td></tr></tbody></table><h3 id="global-footer-item"><a class="lake-link"><i data-anchor="global-footer-item"></i></a>global-footer-item<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>ng-content</code></td><td>Title</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[href]</code></td><td>Routing link</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[blankTarget]</code></td><td>Whether to open a new window</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="GlobalFooterLink"><a class="lake-link"><i data-anchor="GlobalFooterLink"></i></a>GlobalFooterLink</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>Title</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[href]</code></td><td>Routing link</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[blankTarget]</code></td><td>Whether to open a new window</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',meta:{type:"Layout",title:"global-footer",subtitle:"Global footer",cols:1,module:"import { GlobalFooterModule } from '@delon/abc/global-footer';"},toc:[{id:"API",title:"API",h:2,children:[{id:"global-footer",title:"global-footer:standalone",h:3},{id:"global-footer-item",title:"global-footer-item:standalone",h:3},{id:"GlobalFooterLink",title:"GlobalFooterLink",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u9875\u811A\u5C5E\u4E8E\u5168\u5C40\u5BFC\u822A\u7684\u4E00\u90E8\u5206\uFF0C\u4F5C\u4E3A\u5BF9\u9876\u90E8\u5BFC\u822A\u7684\u8865\u5145\uFF0C\u901A\u8FC7\u4F20\u9012\u6570\u636E\u63A7\u5236\u5C55\u793A\u5185\u5BB9\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="global-footer"><a class="lake-link"><i data-anchor="global-footer"></i></a>global-footer<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[links]</code></td><td>\u94FE\u63A5\u6570\u636E</td><td><code><a data-toc="GlobalFooterLink">GlobalFooterLink</a></code></td><td>-</td></tr><tr><td><code>[copyright]</code></td><td>\u7248\u6743\u4FE1\u606F</td><td><code>TemplateRef</code></td><td>-</td></tr></tbody></table><h3 id="global-footer-item"><a class="lake-link"><i data-anchor="global-footer-item"></i></a>global-footer-item<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>ng-content</code></td><td>\u6807\u9898</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[href]</code></td><td>\u8DEF\u7531\u94FE\u63A5</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[blankTarget]</code></td><td>\u662F\u5426\u6253\u5F00\u65B0\u7A97\u53E3</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="GlobalFooterLink"><a class="lake-link"><i data-anchor="GlobalFooterLink"></i></a>GlobalFooterLink</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[href]</code></td><td>\u8DEF\u7531\u94FE\u63A5</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[blankTarget]</code></td><td>\u662F\u5426\u6253\u5F00\u65B0\u7A97\u53E3</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',meta:{type:"Layout",title:"global-footer",subtitle:"\u5168\u5C40\u9875\u811A",cols:1,module:"import { GlobalFooterModule } from '@delon/abc/global-footer';"},toc:[{id:"API",title:"API",h:2,children:[{id:"global-footer",title:"global-footer:standalone",h:3},{id:"global-footer-item",title:"global-footer-item:standalone",h:3},{id:"GlobalFooterLink",title:"GlobalFooterLink",h:3}]}]}},demo:!0},this.codes=[{id:"components-global-footer-basic",meta:{order:0,title:"\u6F14\u793A",browser:400},summary:"<p>\u57FA\u672C\u9875\u811A\u3002</p>",code:`import { Component } from '@angular/core';

import { GlobalFooterComponent, GlobalFooterLink } from '@delon/abc/global-footer';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'components-global-footer-basic',
  template: \`
    <div style="height: 280px;"></div>
    <global-footer [links]="links">
      Copyright<i nz-icon nzType="copyright" class="mx-sm"></i>
      2023
      <a href="//github.com/cipchk" target="_blank" class="mx-sm">\u5361\u8272</a>\u51FA\u54C1
    </global-footer>
  \`,
  styles: [
    \`
      :host {
        display: block;
      }
    \`
  ],
  standalone: true,
  imports: [GlobalFooterComponent, NzIconModule]
})
export class ComponentsGlobalFooterBasicComponent {
  links: GlobalFooterLink[] = [
    {
      title: '\u5E2E\u52A9',
      href: 'https://ng-alain.com/',
      blankTarget: true
    },
    {
      title: 'Github',
      href: 'https://github.com/ng-alain',
      blankTarget: true
    },
    {
      title: '\u9884\u89C8',
      href: 'https://ng-alain.surge.sh/',
      blankTarget: true
    }
  ];
}`,lang:"ts",componentName:"ComponentsGlobalFooterBasicComponent",point:0,name:"basic",urls:"packages/abc/global-footer/demo/basic.md",type:"demo"},{id:"components-global-footer-custom",meta:{order:0,title:"\u81EA\u5B9A\u4E49",browser:400},summary:"<p>\u4F7F\u7528 <code>global-footer-item</code> \u81EA\u5B9A\u4E49\u56FE\u6807\u3002</p>",code:`import { Component } from '@angular/core';

import { GlobalFooterModule } from '@delon/abc/global-footer';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'components-global-footer-custom',
  template: \`
    <div style="height: 280px;"></div>
    <global-footer>
      <global-footer-item href="https://ng-alain.com/" blankTarget>\u5E2E\u52A9</global-footer-item>
      <global-footer-item href="https://github.com/ng-alain" blankTarget>
        <i nz-icon nzType="github"></i>
      </global-footer-item>
      <global-footer-item href="https://ng-alain.surge.sh/" blankTarget>\u9884\u89C8</global-footer-item>
      Copyright<i nz-icon nzType="copyright" class="mx-sm"></i>
      2023
      <a href="//github.com/cipchk" target="_blank" class="mx-sm">\u5361\u8272</a>\u51FA\u54C1
    </global-footer>
  \`,
  styles: [
    \`
      :host {
        display: block;
      }
    \`
  ],
  standalone: true,
  imports: [GlobalFooterModule, NzIconModule]
})
export class ComponentsGlobalFooterCustomComponent {}`,lang:"ts",componentName:"ComponentsGlobalFooterCustomComponent",point:1,name:"custom",urls:"packages/abc/global-footer/demo/custom.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-global-footer"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-global-footer-basic"),t(7,`
        `),a(),t(8,`
      
        `),r(9,"code-box",3),t(10,`
          `),m(11,"components-global-footer-custom"),t(12,`
        `),a(),t(13,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id),c(5),s("item",i.codes[1]),T("id",i.codes[1].id))},dependencies:[j,H,wr,kr,B,R,F],encapsulation:2});let n=e;return n})();var Dr=(()=>{let e=class e{constructor(){this.str=[...Array(26)].map((d,o)=>(o+10).toString(36)).join(""),this.searchValue="mn"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-highlight-simple"]],standalone:!0,features:[f],decls:14,vars:8,consts:[[1,"mb-md",3,"innerHTML"],["nzAddOnBefore","String",1,"mb-md"],["type","text","nz-input","",3,"ngModelChange","ngModel"],["nzAddOnBefore","Search Value"]],template:function(o,i){o&1&&(t(0,`
    `),m(1,"p",0),ne(2,"nzHighlight"),t(3,`
    `),r(4,"nz-input-group",1),t(5,`
      `),r(6,"input",2),O("ngModelChange",function(g){return A(i.str,g)||(i.str=g),g}),a(),t(7,`
    `),a(),t(8,`
    `),r(9,"nz-input-group",3),t(10,`
      `),r(11,"input",2),O("ngModelChange",function(g){return A(i.searchValue,g)||(i.searchValue=g),g}),a(),t(12,`
    `),a(),t(13,`
  `)),o&2&&(c(),s("innerHTML",Ii(2,3,i.str,i.searchValue,"i","highlight"),jt),c(5),L("ngModel",i.str),c(5),L("ngModel",i.searchValue))},dependencies:[Ed,Nd,pt,st,Xe,ut,Ct,ct,gt],styles:["[_nghost-%COMP%]     .highlight{color:#f50}"]});let n=e;return n})();var Nr=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/highlight/index.en-US.md","zh-CN":"packages/abc/highlight/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Highlight component from <code>ng-zorro-antd/core/highlight</code>.</p></section>',meta:{type:"Other",title:"highlight",subtitle:"Highlight",cols:1,module:"import { NzHighlightModule } from 'ng-zorro-antd/core/highlight';"},toc:[]},"zh-CN":{content:'<section class="markdown"><p>\u6765\u81EA <code>ng-zorro-antd/core/highlight</code> \u7684\u9AD8\u4EAE\u7EC4\u4EF6\u3002</p></section>',meta:{type:"Other",title:"highlight",subtitle:"\u9AD8\u4EAE",cols:1,module:"import { NzHighlightModule } from 'ng-zorro-antd/core/highlight';"},toc:[]}},demo:!0},this.codes=[{id:"components-highlight-simple",meta:{order:1,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"}},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzHighlightModule } from 'ng-zorro-antd/core/highlight';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'components-highlight-simple',
  template: \`
    <p class="mb-md" [innerHTML]="str | nzHighlight: searchValue : 'i' : 'highlight'"></p>
    <nz-input-group nzAddOnBefore="String" class="mb-md">
      <input type="text" nz-input [(ngModel)]="str" />
    </nz-input-group>
    <nz-input-group nzAddOnBefore="Search Value">
      <input type="text" nz-input [(ngModel)]="searchValue" />
    </nz-input-group>
  \`,
  styles: [
    \`
      :host ::ng-deep .highlight {
        color: #f50;
      }
    \`
  ],
  standalone: true,
  imports: [NzHighlightModule, NzInputModule, FormsModule]
})
export class ComponentsHighlightSimpleComponent {
  str = [...Array(26)].map((_, i) => (i + 10).toString(36)).join('');
  searchValue = 'mn';
}`,lang:"ts",componentName:"ComponentsHighlightSimpleComponent",point:0,name:"simple",urls:"packages/abc/highlight/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-highlight"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-highlight-simple"),t(7,`
        `),a(),t(8,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id))},dependencies:[j,H,Dr,B,R,F],encapsulation:2});let n=e;return n})();var Yo=class{constructor(e){this.children=[],this.parent=e}delete(e){let l=this.children.indexOf(e);return l===-1?!1:(this.children=this.children.slice(0,l).concat(this.children.slice(l+1)),this.children.length===0&&this.parent.delete(this),!0)}add(e){return this.children.push(e),this}},ei=class n{constructor(e){this.parent=null,this.children={},this.parent=e||null}get(e){return this.children[e]}insert(e){let l=this;for(let d=0;d<e.length;d+=1){let o=e[d],i=l.get(o);if(d===e.length-1)return i instanceof n&&(l.delete(i),i=null),i||(i=new Yo(l),l.children[o]=i),i;i instanceof Yo&&(i=null),i||(i=new n(l),l.children[o]=i),l=i}return l}delete(e){for(let l in this.children)if(this.children[l]===e){let o=delete this.children[l];return Object.keys(this.children).length===0&&this.parent&&this.parent.delete(this),o}return!1}},_s={"\xA1":"1","\u2122":"2","\xA3":"3","\xA2":"4","\u221E":"5","\xA7":"6","\xB6":"7","\u2022":"8",\u00AA:"9",\u00BA:"0","\u2013":"-","\u2260":"=","\u2044":"!","\u20AC":"@","\u2039":"#","\u203A":"$",\uFB01:"%",\uFB02:"^","\u2021":"&","\xB0":"*","\xB7":"(","\u201A":")","\u2014":"_","\xB1":"+",\u0153:"q","\u2211":"w","\xAE":"r","\u2020":"t","\xA5":"y",\u00F8:"o",\u03C0:"p","\u201C":"[","\u2018":"]","\xAB":"\\",\u0152:"Q","\u201E":"W","\xB4":"E","\u2030":"R","\u02C7":"T",\u00C1:"Y","\xA8":"U","\u02C6":"I",\u00D8:"O","\u220F":"P","\u201D":"{","\u2019":"}","\xBB":"|",\u00E5:"a",\u00DF:"s","\u2202":"d",\u0192:"f","\xA9":"g","\u02D9":"h","\u2206":"j","\u02DA":"k","\xAC":"l","\u2026":";",\u00E6:"'",\u00C5:"A",\u00CD:"S",\u00CE:"D",\u00CF:"F","\u02DD":"G",\u00D3:"H",\u00D4:"J","\uF8FF":"K",\u00D2:"L",\u00DA:":",\u00C6:'"',\u03A9:"z","\u2248":"x",\u00E7:"c","\u221A":"v","\u222B":"b",\u00B5:"m","\u2264":",","\u2265":".","\xF7":"/","\xB8":"Z","\u02DB":"X",\u00C7:"C","\u25CA":"V",\u0131:"B","\u02DC":"N",\u00C2:"M","\xAF":"<","\u02D8":">","\xBF":"?"},Ts={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+","[":"{","]":"}","\\":"|",";":":","'":'"',",":"<",".":">","/":"?",q:"Q",w:"W",e:"E",r:"R",t:"T",y:"Y",u:"U",i:"I",o:"O",p:"P",a:"A",s:"S",d:"D",f:"F",g:"G",h:"H",j:"J",k:"K",l:"L",z:"Z",x:"X",c:"C",v:"V",b:"B",n:"N",m:"M"},ws={" ":"Space","+":"Plus"};function Ir(n,e=navigator.platform){var l,d,o;let{ctrlKey:i,altKey:p,metaKey:g,shiftKey:u,key:K}=n,W=[],bt=[i,p,g,u];for(let[_t,Zt]of bt.entries())Zt&&W.push(Er[_t]);if(!Er.includes(K)){let _t=W.includes("Alt")&&oi.test(e)&&(l=_s[K])!==null&&l!==void 0?l:K,Zt=W.includes("Shift")&&oi.test(e)&&(d=Ts[_t])!==null&&d!==void 0?d:_t,Ut=(o=ws[Zt])!==null&&o!==void 0?o:Zt;W.push(Ut)}return W.join("+")}var Er=["Control","Alt","Meta","Shift"];function ks(n,e){let l;return l=Ms(n,e),l=Ds(l),l}var oi=/Mac|iPod|iPhone|iPad/i;function Ms(n,e){var l;let d=typeof window>"u"?void 0:window,o=(l=e??d?.navigator.platform)!==null&&l!==void 0?l:"",i=oi.test(o)?"Meta":"Control";return n.replace("Mod",i)}function Ds(n){let e=n.split("+").pop(),l=[];for(let d of["Control","Alt","Meta","Shift"])n.includes(d)&&l.push(d);return e&&l.push(e),l.join("+")}var Pr=" ",Ns=(()=>{class n{constructor({onReset:l}={}){this._path=[],this.timer=null,this.onReset=l}get path(){return this._path}get sequence(){return this._path.join(Pr)}registerKeypress(l){this._path=[...this._path,Ir(l)],this.startTimer()}reset(){var l;this.killTimer(),this._path=[],(l=this.onReset)===null||l===void 0||l.call(this)}killTimer(){this.timer!=null&&window.clearTimeout(this.timer),this.timer=null}startTimer(){this.killTimer(),this.timer=window.setTimeout(()=>this.reset(),n.CHORD_TIMEOUT)}}return n.CHORD_TIMEOUT=1500,n})();function ni(n){if(!(n instanceof HTMLElement))return!1;let e=n.nodeName.toLowerCase(),l=(n.getAttribute("type")||"").toLowerCase();return e==="select"||e==="textarea"||e==="input"&&l!=="submit"&&l!=="reset"&&l!=="checkbox"&&l!=="radio"&&l!=="file"||n.isContentEditable}function Es(n,e){let l=new CustomEvent("hotkey-fire",{cancelable:!0,detail:{path:e}});n.dispatchEvent(l)&&(ni(n)?n.focus():n.click())}function Is(n){let e=[],l=[""],d=!1;for(let o=0;o<n.length;o++){if(d&&n[o]===","){e.push(l),l=[""],d=!1;continue}if(n[o]===Pr){l.push(""),d=!1;continue}else n[o]==="+"?d=!1:d=!0;l[l.length-1]+=n[o]}return e.push(l),e.map(o=>o.map(i=>ks(i)).filter(i=>i!=="")).filter(o=>o.length>0)}var tn=new ei,Fr=new WeakMap,ii=tn,Bn=new Ns({onReset(){ii=tn}});function Rr(n){if(n.defaultPrevented||!(n.target instanceof Node))return;if(ni(n.target)){let l=n.target;if(!l.id||!l.ownerDocument.querySelector(`[data-hotkey-scope="${l.id}"]`))return}let e=ii.get(Ir(n));if(!e){Bn.reset();return}if(Bn.registerKeypress(n),ii=e,e instanceof Yo){let l=n.target,d=!1,o,i=ni(l);for(let p=e.children.length-1;p>=0;p-=1){o=e.children[p];let g=o.getAttribute("data-hotkey-scope");if(!i&&!g||i&&l.id===g){d=!0;break}}o&&d&&(Es(o,Bn.path),n.preventDefault()),Bn.reset()}}function Ar(n,e){Object.keys(tn.children).length===0&&document.addEventListener("keydown",Rr);let d=Is(e||n.getAttribute("data-hotkey")||"").map(o=>tn.insert(o).add(n));Fr.set(n,d)}function Br(n){let e=Fr.get(n);if(e&&e.length)for(let l of e)l&&l.delete(n);Object.keys(tn.children).length===0&&document.removeEventListener("keydown",Rr)}var di=(()=>{let e=class e{constructor(){this.el=S(xt).nativeElement,this.ngZone=S(Jt),this.platform=S(pe)}set hotkey(d){this.platform.isBrowser&&this.ngZone.runOutsideAngular(()=>Ar(this.el,d))}ngOnDestroy(){this.platform.isBrowser&&this.ngZone.runOutsideAngular(()=>Br(this.el))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275dir=fe({type:e,selectors:[["","hotkey",""]],inputs:{hotkey:"hotkey"},standalone:!0});let n=e;return n})();var Lr=(()=>{let e=class e{constructor(){this.msg=S(vt)}show(d){this.msg.info(d)}selectText(d){d.select()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-hotkey-basic"]],standalone:!0,features:[f],decls:43,vars:0,consts:[["textArea1",""],["nz-button","","nzType","primary","hotkey","Control+d,Meta+d","data-hotkey-scope","text-area-1",3,"click"],["nz-input","","id","text-area-1","rows","4","cols","40","hotkey","q",3,"focus"],["nz-button","","nzType","primary","hotkey","Control+d,Meta+d","data-hotkey-scope","text-area-2",3,"click"],["nz-input","","nzType","primary","id","text-area-2","rows","4","cols","40"],["nz-input","","hotkey","t","type","text"],["hotkey","r"],["nz-button","","nzType","link","hotkey","o k",3,"click"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"button",1),v("click",function(){return y(p),x(i.show("clicked button 1!"))}),t(2,`
      press meta+d or ctrl+d in text area 1 to click button 1
    `),a(),t(3,`
    `),m(4,"br"),t(5,`
    `),r(6,"textarea",2,0),v("focus",function(){y(p);let u=_(7);return x(i.selectText(u))}),t(8,"text area 1, press q to focus this textarea and select all text"),a(),t(9,`
    `),m(10,"br"),t(11,`
    `),r(12,"button",3),v("click",function(){return y(p),x(i.show("clicked button 2!"))}),t(13,`
      press meta+d or ctrl+d in text area 2 to click button 2
    `),a(),t(14,`
    `),m(15,"br"),t(16,`
    `),r(17,"textarea",4),t(18,"text area 2"),a(),m(19,"br"),t(20,`
    `),r(21,"label"),m(22,"input",5),t(23,"Press "),r(24,"kbd"),t(25,"t"),a(),t(26," to focus this field"),a(),m(27,"br"),t(28,`
    `),r(29,"label"),m(30,"nz-switch",6),t(31,"Press "),r(32,"kbd"),t(33,"r"),a(),t(34," to check/uncheck this checkbox"),a(),m(35,"br"),t(36,`
    `),r(37,"a",7),v("click",function(){return y(p),x(i.show("click link"))}),t(38," Press "),r(39,"kbd"),t(40,"o k"),a(),t(41," click this link "),a(),t(42,`
  `)}},dependencies:[I,D,N,E,di,pt,st,Io,Eo],styles:["[_nghost-%COMP%]   kbd[_ngcontent-%COMP%]{color:#f50;padding:0 8px}"]});let n=e;return n})();var Or=(()=>{let e=class e{constructor(){this.item={cols:2,urls:{"en-US":"packages/abc/hotkey/index.en-US.md","zh-CN":"packages/abc/hotkey/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>Based on the <a target="_blank" href="https://github.com/github/hotkey" data-url="https://github.com/github/hotkey">@github/hotke</a> hotkey library.</p><blockquote><p>If you don't know the hotkey value, you can get it through <a target="_blank" href="https://github.github.io/hotkey/examples/hotkey_mapper.html" data-url="https://github.github.io/hotkey/examples/hotkey_mapper.html">Hotkey Code</a>.</p></blockquote></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="hotkey"><a class="lake-link"><i data-anchor="hotkey"></i></a>hotkey<label class="api-type-label directive">directive</label><label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>hotkey</code></td><td>Specify <a target="_blank" href="https://github.com/github/hotkey#hotkey-string-format" data-url="https://github.com/github/hotkey#hotkey-string-format">hotkey format</a></td><td><code>string</code></td><td>-</td></tr></tbody></table>',meta:{type:"Basic",order:1,title:"hotkey",subtitle:"Hotkey",cols:2,module:"import { HotkeyModule } from '@delon/abc/hotkey';"},toc:[{id:"API",title:"API",h:2,children:[{id:"hotkey",title:"hotkey:standalone",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u57FA\u4E8E <a target="_blank" href="https://github.com/github/hotkey" data-url="https://github.com/github/hotkey">@github/hotke</a> \u70ED\u952E\u5E93\u3002</p><blockquote><p>\u5982\u679C\u4E0D\u6E05\u695A\u70ED\u952E\u503C\uFF0C\u53EF\u901A\u8FC7<a target="_blank" href="https://github.github.io/hotkey/examples/hotkey_mapper.html" data-url="https://github.github.io/hotkey/examples/hotkey_mapper.html">\u70ED\u952E\u4EE3\u7801</a>\u6765\u83B7\u53D6\u3002</p></blockquote></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="hotkey"><a class="lake-link"><i data-anchor="hotkey"></i></a>hotkey<label class="api-type-label directive">directive</label><label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>hotkey</code></td><td>\u6307\u5B9A<a target="_blank" href="https://github.com/github/hotkey#hotkey-string-format" data-url="https://github.com/github/hotkey#hotkey-string-format">\u70ED\u952E\u683C\u5F0F</a></td><td><code>string</code></td><td>-</td></tr></tbody></table>',meta:{type:"Basic",order:1,title:"hotkey",subtitle:"\u70ED\u952E",cols:2,module:"import { HotkeyModule } from '@delon/abc/hotkey';"},toc:[{id:"API",title:"API",h:2,children:[{id:"hotkey",title:"hotkey:standalone",h:3}]}]}},demo:!0},this.codes=[{id:"components-hotkey-basic",meta:{order:1,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component, inject } from '@angular/core';

import { HotkeyDirective } from '@delon/abc/hotkey';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'components-hotkey-basic',
  template: \`
    <button
      nz-button
      nzType="primary"
      (click)="show('clicked button 1!')"
      hotkey="Control+d,Meta+d"
      data-hotkey-scope="text-area-1"
    >
      press meta+d or ctrl+d in text area 1 to click button 1
    </button>
    <br />
    <textarea nz-input id="text-area-1" rows="4" cols="40" hotkey="q" #textArea1 (focus)="selectText(textArea1)">
text area 1, press q to focus this textarea and select all text</textarea
    >
    <br />
    <button
      nz-button
      nzType="primary"
      (click)="show('clicked button 2!')"
      hotkey="Control+d,Meta+d"
      data-hotkey-scope="text-area-2"
    >
      press meta+d or ctrl+d in text area 2 to click button 2
    </button>
    <br />
    <textarea nz-input nzType="primary" id="text-area-2" rows="4" cols="40">text area 2</textarea><br />
    <label><input nz-input hotkey="t" type="text" />Press <kbd>t</kbd> to focus this field</label><br />
    <label><nz-switch hotkey="r" />Press <kbd>r</kbd> to check/uncheck this checkbox</label><br />
    <a (click)="show('click link')" nz-button nzType="link" hotkey="o k"> Press <kbd>o k</kbd> click this link </a>
  \`,
  styles: [
    \`
      :host kbd {
        color: #f50;
        padding: 0 8px;
      }
    \`
  ],
  standalone: true,
  imports: [NzButtonModule, HotkeyDirective, NzInputModule, NzSwitchModule]
})
export class ComponentsHotkeyBasicComponent {
  private readonly msg = inject(NzMessageService);

  show(msg: string): void {
    this.msg.info(msg);
  }

  selectText(el: HTMLTextAreaElement): void {
    el.select();
  }
}`,lang:"ts",componentName:"ComponentsHotkeyBasicComponent",point:0,name:"basic",urls:"packages/abc/hotkey/demo/basic.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-hotkey"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-hotkey-basic"),t(7,`
        `),a(),t(8,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id))},dependencies:[j,H,Lr,B,R,F],encapsulation:2});let n=e;return n})();function Ps(n,e){if(n&1&&(r(0,"div"),t(1,`
      `),r(2,"p"),t(3),a(),t(4,`
      `),r(5,"p"),t(6),a(),t(7,`
    `),a()),n&2){let l=e.let;c(3),V(l),c(3),V(l)}}var jr=(()=>{let e=class e{constructor(){this.v1Count=0,this.v2Count=0,this.v1="v1",this.v2="v2"}get value1(){return++this.v1Count,this.v1}get value2(){return++this.v2Count,this.v2}update(){this.v1=`v1-${Math.random()}`,this.v2=`v2-${Math.random()}`}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-let-simple"]],standalone:!0,features:[f],decls:15,vars:5,consts:[[4,"let"],["nz-button","",3,"click"]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"p"),t(2),a(),t(3,`
    `),C(4,Ps,8,2,"div",0),t(5,`
    `),r(6,"p"),t(7),a(),t(8,`
    `),r(9,"p"),t(10),a(),t(11,`
    `),r(12,"button",1),v("click",function(){return i.update()}),t(13,"Random Value"),a(),t(14,`
  `)),o&2&&(c(2),bo("v1 (use *let directive) called count: ",i.v1Count,"; v2 called count: ",i.v2Count,";"),c(2),s("let",i.value1),c(3),V(i.value2),c(3),V(i.value2))},dependencies:[zn,I,D,N,E],encapsulation:2,changeDetection:0});let n=e;return n})();function Fs(n,e){if(n&1&&(it(0),t(1,`
        `),r(2,"p"),t(3),a(),t(4,`
        `),r(5,"p"),t(6),a(),t(7,`
        `),r(8,"p"),t(9),a(),t(10,`
      `),dt()),n&2){let l=e.let;c(3),mt("Timer value: ",l,""),c(3),mt("Timer value: ",l,""),c(3),mt("Timer value: ",l,"")}}function Rs(n,e){if(n&1&&(t(0,`
      `),C(1,Fs,11,3,"ng-container",0),ne(2,"async"),t(3,`
    `)),n&2){let l=b();c(),s("let",se(2,1,l.timer$))}}var Hr=(()=>{let e=class e{constructor(d){this.timer$=null,d.isBrowser&&(this.timer$=ln(1e3).pipe(fo(0)))}};e.\u0275fac=function(o){return new(o||e)($(pe))},e.\u0275cmp=h({type:e,selectors:[["components-let-async"]],standalone:!0,features:[f],decls:2,vars:1,consts:[[4,"let"]],template:function(o,i){o&1&&(t(0,`
    `),C(1,Rs,4,3)),o&2&&(c(),M(i.timer$!==null?1:-1))},dependencies:[zn,Vi],encapsulation:2,changeDetection:0});let n=e;return n})();var Wr=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/let/index.en-US.md","zh-CN":"packages/abc/let/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>Allows to reuse computed value in several places in template to avoid recalculations of getters or many <code>async</code> pipes.</p><pre class="hljs language-html"><code>&lt;div *let="value1 as v"&gt;
  &lt;p&gt;{{ v }}&lt;/p&gt;
&lt;/div&gt;
&lt;div *let="time$ | async as time"&gt;
  &lt;p&gt;{{ time }}&lt;/p&gt;
&lt;/div&gt;</code></pre></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="let"><a class="lake-link"><i data-anchor="let"></i></a>let<label class="api-type-label directive">directive</label><label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[let]</code></td><td>Expression</td><td><code>T</code></td><td>-</td><td>-</td></tr></tbody></table>',meta:{type:"Basic",order:1,title:"let",subtitle:"Let",cols:1,module:"import { LetModule } from '@delon/abc/let';"},toc:[{id:"API",title:"API",h:2,children:[{id:"let",title:"let:standalone",h:3}]}]},"zh-CN":{content:`<section class="markdown"><p>\u5141\u8BB8\u5728\u6A21\u677F\u5185\u590D\u7528\u8BA1\u7B97\u503C\uFF08\u5305\u542B\u5F02\u6B65\uFF09\uFF0C\u907F\u514D\u91CD\u590D\u91CD\u65B0\u8BA1\u7B97\u3002</p><pre class="hljs language-html"><code>&lt;div *let="value1 as v"&gt;
  &lt;p&gt;{{ v }}&lt;/p&gt;
&lt;/div&gt;
&lt;div *let="time$ | async as time"&gt;
  &lt;p&gt;{{ time }}&lt;/p&gt;
&lt;/div&gt;</code></pre></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="let"><a class="lake-link"><i data-anchor="let"></i></a>let<label class="api-type-label directive">directive</label><label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[let]</code></td><td>\u8868\u8FBE\u5F0F</td><td><code>T</code></td><td>-</td><td>-</td></tr></tbody></table>',meta:{type:"Basic",order:1,title:"let",subtitle:"\u5B9A\u4E49",cols:1,module:"import { LetModule } from '@delon/abc/let';"},toc:[{id:"API",title:"API",h:2,children:[{id:"let",title:"let:standalone",h:3}]}]}},demo:!0},this.codes=[{id:"components-let-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:1},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LetDirective } from '@delon/abc/let';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-let-simple',
  template: \`
    <p>v1 (use *let directive) called count: {{ v1Count }}; v2 called count: {{ v2Count }};</p>
    <div *let="value1 as v">
      <p>{{ v }}</p>
      <p>{{ v }}</p>
    </div>
    <p>{{ value2 }}</p>
    <p>{{ value2 }}</p>
    <button nz-button (click)="update()">Random Value</button>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LetDirective, NzButtonModule]
})
export class ComponentsLetSimpleComponent {
  v1Count = 0;
  v2Count = 0;
  v1 = 'v1';
  v2 = 'v2';

  get value1(): string {
    ++this.v1Count;
    return this.v1;
  }

  get value2(): string {
    ++this.v2Count;
    return this.v2;
  }

  update(): void {
    this.v1 = \`v1-\${Math.random()}\`;
    this.v2 = \`v2-\${Math.random()}\`;
  }
}`,lang:"ts",componentName:"ComponentsLetSimpleComponent",point:0,name:"simple",urls:"packages/abc/let/demo/simple.md",type:"demo"},{id:"components-let-async",meta:{title:{"zh-CN":"\u5F02\u6B65","en-US":"async"},order:2},summary:{"zh-CN":"<p>\u4E00\u6B21\u8BA2\u9605\u591A\u6B21\u4F7F\u7528\u3002</p>","en-US":"<p>One subscription and multiple use.</p>"},code:`import { Platform } from '@angular/cdk/platform';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, startWith } from 'rxjs';

import { LetDirective } from '@delon/abc/let';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'components-let-async',
  template: \`
    @if (timer$ !== null) {
      <ng-container *let="timer$ | async as time">
        <p>Timer value: {{ time }}</p>
        <p>Timer value: {{ time }}</p>
        <p>Timer value: {{ time }}</p>
      </ng-container>
    }
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LetDirective, AsyncPipe]
})
export class ComponentsLetAsyncComponent {
  timer$: NzSafeAny | null = null;

  constructor(platform: Platform) {
    if (!platform.isBrowser) return;

    this.timer$ = interval(1000).pipe(startWith(0));
  }
}`,lang:"ts",componentName:"ComponentsLetAsyncComponent",point:1,name:"async",urls:"packages/abc/let/demo/async.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-let"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-let-simple"),t(7,`
        `),a(),t(8,`
      
        `),r(9,"code-box",3),t(10,`
          `),m(11,"components-let-async"),t(12,`
        `),a(),t(13,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id),c(5),s("item",i.codes[1]),T("id",i.codes[1].id))},dependencies:[j,H,jr,Hr,B,R,F],encapsulation:2});let n=e;return n})();function As(n,e){n&1&&m(0,"nz-spin",2)}function Bs(n,e){if(n&1&&m(0,"i",3),n&2){let l=b(2);s("nzType",l.icon.type)("nzTheme",l.icon.theme)("nzSpin",l.icon.spin)}}function Vs(n,e){if(n&1&&m(0,"div",4),n&2){let l=b(2);s("ngStyle",l.custom.style)("innerHTML",l.custom.html,jt)}}function Ls(n,e){if(n&1&&(r(0,"div",0),C(1,As,1,0,"nz-spin",2)(2,Bs,1,3,"i",3)(3,Vs,1,2,"div",4),a()),n&2){let l,d=b();c(),M((l=d.options.type)==="spin"?1:l==="icon"?2:3)}}function Os(n,e){if(n&1&&(r(0,"div",1),t(1),a()),n&2){let l=b();c(),V(l.options.text)}}var ri=(()=>{let e=class e{constructor(){this.dir="ltr"}get icon(){return this.options.icon}get custom(){return this.options.custom}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["loading-default"]],hostVars:4,hostBindings:function(o,i){o&2&&k("loading-default",!0)("loading-default-rtl",i.dir==="rtl")},standalone:!0,features:[f],decls:2,vars:2,consts:[[1,"loading-default__icon"],[1,"loading-default__text"],["nzSimple",""],["nz-icon","",3,"nzType","nzTheme","nzSpin"],[1,"loading-default__custom",3,"ngStyle","innerHTML"]],template:function(o,i){o&1&&C(0,Ls,4,1,"div",0)(1,Os,2,1,"div",1),o&2&&(M(i.options.type!=="text"?0:-1),c(),M(i.options.text?1:-1))},dependencies:[ko,Tt,ke],encapsulation:2,changeDetection:0});let n=e;return n})();var Lo=(()=>{let e=class e{get instance(){return this.compRef!=null?this.compRef.instance:null}constructor(){this.overlay=S(Gi),this.configSrv=S(At),this.directionality=S(qt),this.compRef=null,this.opt=null,this.n$=new Yt,this.cog=this.configSrv.merge("loading",{type:"spin",text:"\u52A0\u8F7D\u4E2D...",icon:{type:"loading",theme:"outline",spin:!0},delay:0}),this.loading$=this.n$.asObservable().pipe(Ti(()=>Re(this.opt.delay))).subscribe(()=>this.create())}create(){if(this.opt==null)return;this._close(!1),this._overlayRef=this.overlay.create({positionStrategy:this.overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:this.overlay.scrollStrategies.block(),hasBackdrop:!0,backdropClass:"loading-backdrop"}),this.compRef=this._overlayRef.attach(new qi(ri));let d=this.configSrv.get("loading").direction||this.directionality.value;this.instance!=null&&(this.instance.options=this.opt,this.instance.dir=d),this.compRef.changeDetectorRef.markForCheck()}open(d){this.opt=yt(yt({},this.cog),d),this.n$.next()}_close(d){d&&(this.opt=null),this._overlayRef&&(this._overlayRef.detach(),this.compRef=null)}close(){this._close(!0)}ngOnDestroy(){this.loading$.unsubscribe()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=ce({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Ur=(()=>{let e=class e{constructor(){this.loadingSrv=S(Lo)}show(d){this.loadingSrv.open({type:d}),setTimeout(()=>this.loadingSrv.close(),1e3*3)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-loading-basic"]],standalone:!0,features:[f],decls:10,vars:0,consts:[["nz-button","",3,"click"]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"button",0),v("click",function(){return i.show("icon")}),t(2,"Icon"),a(),t(3,`
    `),r(4,"button",0),v("click",function(){return i.show("spin")}),t(5,"Spin"),a(),t(6,`
    `),r(7,"button",0),v("click",function(){return i.show("text")}),t(8,"Only Text"),a(),t(9,`
  `))},dependencies:[I,D,N,E],encapsulation:2});let n=e;return n})();var qr=(()=>{let e=class e{constructor(){this.loadingSrv=S(Lo)}show(){this.loadingSrv.open({delay:1e3}),setTimeout(()=>this.loadingSrv.close(),1e3*5)}close(){this.loadingSrv.close()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-loading-delay"]],standalone:!0,features:[f],decls:7,vars:0,consts:[["nz-button","",3,"click"]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"button",0),v("click",function(){return i.show()}),t(2,"Display after 1 seconds"),a(),t(3,`
    `),r(4,"button",0),v("click",function(){return i.close()}),t(5,"Close"),a(),t(6,`
  `))},dependencies:[I,D,N,E],encapsulation:2});let n=e;return n})();function js(n,e){if(n&1){let l=w();t(0,`
    `),r(1,"button",0),v("click",function(){let o=y(l).$implicit,i=b();return x(i.show(o))}),t(2),a(),t(3,`
  `)}if(n&2){let l=e.$implicit;c(2),V(l.name)}}var Gr=(()=>{let e=class e{constructor(){this.loadingSrv=S(Lo),this.dom=S(ye),this.customs=[{name:"Balls",style:{height:"40px",fill:"#1890ff"},html:this.dom.bypassSecurityTrustHtml(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path transform="translate(-8 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
          <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
        </path>
        <path transform="translate(2 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
          <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
        </path>
        <path transform="translate(12 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
          <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
        </path>
        <path transform="translate(24 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
          <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
        </path>
      </svg>`)},{name:"Bars",style:{fill:"#1890ff"},html:this.dom.bypassSecurityTrustHtml(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path transform="translate(2)" d="M0 12 V20 H4 V12z">
          <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />
        </path>
        <path transform="translate(8)" d="M0 12 V20 H4 V12z">
          <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.2" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />
        </path>
        <path transform="translate(14)" d="M0 12 V20 H4 V12z">
          <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.4" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
        </path>
        <path transform="translate(20)" d="M0 12 V20 H4 V12z">
          <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.6" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
        </path>
        <path transform="translate(26)" d="M0 12 V20 H4 V12z">
          <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.8" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
        </path>
      </svg>`)},{name:"Bubbles",style:{height:"40px",fill:"#1890ff"},html:this.dom.bypassSecurityTrustHtml(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <circle transform="translate(8 0)" cx="0" cy="16" r="0">
          <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"
            keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="translate(16 0)" cx="0" cy="16" r="0">
          <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"
            keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="translate(24 0)" cx="0" cy="16" r="0">
          <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"
            keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
        </circle>
      </svg>`)},{name:"Cubes",style:{height:"40px",fill:"#1890ff"},html:this.dom.bypassSecurityTrustHtml(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path transform="translate(-8 0)" d="M0 12 V20 H8 V12z">
          <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
        </path>
        <path transform="translate(2 0)" d="M0 12 V20 H8 V12z">
          <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
        </path>
        <path transform="translate(12 0)" d="M0 12 V20 H8 V12z">
          <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
        </path>
        <path transform="translate(24 0)" d="M0 12 V20 H8 V12z">
          <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
        </path>
      </svg>`)},{name:"Cylon",style:{height:"40px",fill:"#1890ff"},html:this.dom.bypassSecurityTrustHtml(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path transform="translate(0 0)" d="M0 12 V20 H4 V12z">
          <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </path>
        <path opacity="0.5" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
          <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.1s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </path>
        <path opacity="0.25" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
          <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.2s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </path>
      </svg>`)},{name:"Spin",style:{fill:"#1890ff"},html:this.dom.bypassSecurityTrustHtml(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
        <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
          <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />
        </path>
      </svg>`)},{name:"Spinning Bubbles",style:{fill:"#1890ff"},html:this.dom.bypassSecurityTrustHtml(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <circle cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(45 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(315 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
      </svg>`)},{name:"Spokes",style:{fill:"#1890ff"},html:this.dom.bypassSecurityTrustHtml(`
      <svg id="loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(0 16 16)">
          <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0"/>
        </path>
        <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(45 16 16)">
          <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.125s"/>
        </path>
        <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(90 16 16)">
          <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.25s"/>
        </path>
        <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(135 16 16)">
          <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.375s"/>
        </path>
        <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(180 16 16)">
          <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.5s"/>
        </path>
        <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(225 16 16)">
          <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.675s"/>
        </path>
        <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(270 16 16)">
          <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.75s"/>
        </path>
        <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(315 16 16)">
          <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.875s"/>
        </path>
      </svg>`)}]}show(d){this.loadingSrv.open({type:"custom",custom:d,text:"Loading...(Auto close after 3s)"}),setTimeout(()=>this.loadingSrv.close(),1e3*3)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-loading-custom"]],standalone:!0,features:[f],decls:3,vars:0,consts:[["nz-button","",3,"click"]],template:function(o,i){o&1&&(t(0," "),St(1,js,4,1,null,null,kt)),o&2&&(c(),zt(i.customs))},dependencies:[I,D,N,E],encapsulation:2});let n=e;return n})();var $r=(()=>{let e=class e{constructor(){this.item={cols:2,urls:{"en-US":"packages/abc/loading/index.en-US.md","zh-CN":"packages/abc/loading/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Global load indicator is generally used when an operation needs to interrupt the user operation.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="LoadingService"><a class="lake-link"><i data-anchor="LoadingService"></i></a>LoadingService</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>open(options?: <a data-toc="LoadingShowOptions">LoadingShowOptions</a>)</code></td><td>Open a new loading indicator</td></tr><tr><td><code>close()</code></td><td>Turn off a loading indicator</td></tr></tbody></table><h3 id="LoadingShowOptions"><a class="lake-link"><i data-anchor="LoadingShowOptions"></i></a>LoadingShowOptions</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>type</code></td><td>Show type of loading</td><td><code>LoadingType</code></td><td><code>spin</code></td><td>\u2705</td></tr><tr><td><code>text</code></td><td>Text of loading</td><td><code>string</code></td><td><code>\u52A0\u8F7D\u4E2D...</code></td><td>\u2705</td></tr><tr><td><code>icon</code></td><td>Configuration item of type <code>icon</code></td><td><code>LoadingIcon</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>custom</code></td><td>Configuration item of type <code>custom</code></td><td><code>LoadingCustom</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>delay</code></td><td>Specifies a delay in milliseconds for loading state (prevent flush), unit: milliseconds</td><td><code>number</code></td><td>-</td><td>\u2705</td></tr></tbody></table>',meta:{type:"Basic",order:2,title:"loading",subtitle:"Loading indicator",cols:2,module:"import { LoadingModule } from '@delon/abc/loading';"},toc:[{id:"API",title:"API",h:2,children:[{id:"LoadingService",title:"LoadingService",h:3},{id:"LoadingShowOptions",title:"LoadingShowOptions",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u5168\u5C40\u52A0\u8F7D\u6307\u793A\u7B26\uFF0C\u4E00\u822C\u7528\u4E8E\u67D0\u4E2A\u64CD\u4F5C\u9700\u8981\u4E2D\u65AD\u7528\u6237\u64CD\u4F5C\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="LoadingService"><a class="lake-link"><i data-anchor="LoadingService"></i></a>LoadingService</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>open(options?: <a data-toc="LoadingShowOptions">LoadingShowOptions</a>)</code></td><td>\u6253\u5F00\u4E00\u4E2A\u65B0\u52A0\u8F7D\u6307\u793A\u7B26</td></tr><tr><td><code>close()</code></td><td>\u5173\u95ED\u4E00\u4E2A\u52A0\u8F7D\u6307\u793A\u7B26</td></tr></tbody></table><h3 id="LoadingShowOptions"><a class="lake-link"><i data-anchor="LoadingShowOptions"></i></a>LoadingShowOptions</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>type</code></td><td>\u663E\u793A\u7C7B\u578B</td><td><code>LoadingType</code></td><td><code>spin</code></td><td>\u2705</td></tr><tr><td><code>text</code></td><td>\u63CF\u8FF0\u6587\u6848</td><td><code>string</code></td><td><code>\u52A0\u8F7D\u4E2D...</code></td><td>\u2705</td></tr><tr><td><code>icon</code></td><td>\u7C7B\u578B\u4E3A <code>icon</code> \u7684\u914D\u7F6E\u9879</td><td><code>LoadingIcon</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>custom</code></td><td>\u7C7B\u578B\u4E3A <code>custom</code> \u7684\u914D\u7F6E\u9879</td><td><code>LoadingCustom</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>delay</code></td><td>\u5EF6\u8FDF\u663E\u793A\u52A0\u8F7D\u6548\u679C\u7684\u65F6\u95F4\uFF08\u9632\u6B62\u95EA\u70C1\uFF09\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td>-</td><td>\u2705</td></tr></tbody></table>',meta:{type:"Basic",order:2,title:"loading",subtitle:"\u52A0\u8F7D\u6307\u793A\u7B26",cols:2,module:"import { LoadingModule } from '@delon/abc/loading';"},toc:[{id:"API",title:"API",h:2,children:[{id:"LoadingService",title:"LoadingService",h:3},{id:"LoadingShowOptions",title:"LoadingShowOptions",h:3}]}]}},demo:!0},this.codes=[{id:"components-loading-basic",meta:{order:1,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component, inject } from '@angular/core';

import { LoadingService, LoadingType } from '@delon/abc/loading';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-loading-basic',
  template: \`
    <button nz-button (click)="show('icon')">Icon</button>
    <button nz-button (click)="show('spin')">Spin</button>
    <button nz-button (click)="show('text')">Only Text</button>
  \`,
  standalone: true,
  imports: [NzButtonModule]
})
export class ComponentsLoadingBasicComponent {
  private readonly loadingSrv = inject(LoadingService);

  show(type: LoadingType): void {
    this.loadingSrv.open({ type });

    setTimeout(() => this.loadingSrv.close(), 1000 * 3);
  }
}`,lang:"ts",componentName:"ComponentsLoadingBasicComponent",point:0,name:"basic",urls:"packages/abc/loading/demo/basic.md",type:"demo"},{id:"components-loading-delay",meta:{order:1,title:{"zh-CN":"\u5EF6\u8FDF","en-US":"Delay"}},summary:{"zh-CN":"<p>\u5EF6\u8FDF\u663E\u793A loading \u6548\u679C\u3002\u5F53\u8C03\u7528 <code>open()</code> \u540E <code>delay</code> \u65F6\u95F4\u5185\u8C03\u7528 <code>close()</code>\uFF0C\u5219\u4E0D\u663E\u793A loading \u72B6\u6001\u3002</p>","en-US":"<p>Specifies a delay for loading state. If call <code>open()</code> ends during delay, loading status won't appear.</p>"},code:`import { Component, inject } from '@angular/core';

import { LoadingService } from '@delon/abc/loading';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-loading-delay',
  template: \`
    <button nz-button (click)="show()">Display after 1 seconds</button>
    <button nz-button (click)="close()">Close</button>
  \`,
  standalone: true,
  imports: [NzButtonModule]
})
export class ComponentsLoadingDelayComponent {
  private readonly loadingSrv = inject(LoadingService);

  show(): void {
    this.loadingSrv.open({ delay: 1000 });

    setTimeout(() => this.loadingSrv.close(), 1000 * 5);
  }

  close(): void {
    this.loadingSrv.close();
  }
}`,lang:"ts",componentName:"ComponentsLoadingDelayComponent",point:1,name:"delay",urls:"packages/abc/loading/demo/delay.md",type:"demo"},{id:"components-loading-custom",meta:{order:2,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u56FE\u6807","en-US":"Custom Icon"}},summary:{"zh-CN":"<p>\u8BBE\u7F6E <code>type: 'custom'</code> \u81EA\u5B9A\u4E49\u52A0\u8F7D\u6307\u793A\u7B26\u56FE\u6807\u3002</p>","en-US":"<p>Set <code>type: 'custom'</code> custom load indicator icon.</p>"},code:`import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { LoadingCustom, LoadingService } from '@delon/abc/loading';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-loading-custom',
  template: \` @for (i of customs; track $index) {
    <button nz-button (click)="show(i)">{{ i.name }}</button>
  }\`,
  standalone: true,
  imports: [NzButtonModule]
})
export class ComponentsLoadingCustomComponent {
  private readonly loadingSrv = inject(LoadingService);
  private readonly dom = inject(DomSanitizer);

  customs: LoadingCustom[] = [
    {
      name: 'Balls',
      style: {
        height: '40px',
        fill: '#1890ff'
      },
      html: this.dom.bypassSecurityTrustHtml(\`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path transform="translate(-8 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
          <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
        </path>
        <path transform="translate(2 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
          <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
        </path>
        <path transform="translate(12 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
          <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
        </path>
        <path transform="translate(24 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
          <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
        </path>
      </svg>\`)
    },
    {
      name: 'Bars',
      style: {
        fill: '#1890ff'
      },
      html: this.dom.bypassSecurityTrustHtml(\`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path transform="translate(2)" d="M0 12 V20 H4 V12z">
          <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />
        </path>
        <path transform="translate(8)" d="M0 12 V20 H4 V12z">
          <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.2" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />
        </path>
        <path transform="translate(14)" d="M0 12 V20 H4 V12z">
          <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.4" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
        </path>
        <path transform="translate(20)" d="M0 12 V20 H4 V12z">
          <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.6" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
        </path>
        <path transform="translate(26)" d="M0 12 V20 H4 V12z">
          <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.8" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
        </path>
      </svg>\`)
    },
    {
      name: 'Bubbles',
      style: {
        height: '40px',
        fill: '#1890ff'
      },
      html: this.dom.bypassSecurityTrustHtml(\`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <circle transform="translate(8 0)" cx="0" cy="16" r="0">
          <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"
            keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="translate(16 0)" cx="0" cy="16" r="0">
          <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"
            keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="translate(24 0)" cx="0" cy="16" r="0">
          <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"
            keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
        </circle>
      </svg>\`)
    },
    {
      name: 'Cubes',
      style: {
        height: '40px',
        fill: '#1890ff'
      },
      html: this.dom.bypassSecurityTrustHtml(\`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path transform="translate(-8 0)" d="M0 12 V20 H8 V12z">
          <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
        </path>
        <path transform="translate(2 0)" d="M0 12 V20 H8 V12z">
          <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
        </path>
        <path transform="translate(12 0)" d="M0 12 V20 H8 V12z">
          <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
        </path>
        <path transform="translate(24 0)" d="M0 12 V20 H8 V12z">
          <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
        </path>
      </svg>\`)
    },
    {
      name: 'Cylon',
      style: {
        height: '40px',
        fill: '#1890ff'
      },
      html: this.dom.bypassSecurityTrustHtml(\`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path transform="translate(0 0)" d="M0 12 V20 H4 V12z">
          <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </path>
        <path opacity="0.5" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
          <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.1s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </path>
        <path opacity="0.25" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
          <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.2s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </path>
      </svg>\`)
    },
    {
      name: 'Spin',
      style: {
        fill: '#1890ff'
      },
      html: this.dom.bypassSecurityTrustHtml(\`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
        <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
          <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />
        </path>
      </svg>\`)
    },
    {
      name: 'Spinning Bubbles',
      style: {
        fill: '#1890ff'
      },
      html: this.dom.bypassSecurityTrustHtml(\`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <circle cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(45 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(315 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
          <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
        </circle>
      </svg>\`)
    },
    {
      name: 'Spokes',
      style: {
        fill: '#1890ff'
      },
      html: this.dom.bypassSecurityTrustHtml(\`
      <svg id="loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(0 16 16)">
          <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0"/>
        </path>
        <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(45 16 16)">
          <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.125s"/>
        </path>
        <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(90 16 16)">
          <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.25s"/>
        </path>
        <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(135 16 16)">
          <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.375s"/>
        </path>
        <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(180 16 16)">
          <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.5s"/>
        </path>
        <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(225 16 16)">
          <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.675s"/>
        </path>
        <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(270 16 16)">
          <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.75s"/>
        </path>
        <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(315 16 16)">
          <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.875s"/>
        </path>
      </svg>\`)
    }
  ];

  show(custom: LoadingCustom): void {
    this.loadingSrv.open({
      type: 'custom',
      custom,
      text: 'Loading...(Auto close after 3s)'
    });

    setTimeout(() => this.loadingSrv.close(), 1000 * 3);
  }
}`,lang:"ts",componentName:"ComponentsLoadingCustomComponent",point:2,name:"custom",urls:"packages/abc/loading/demo/custom.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-loading"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:21,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-loading-basic"),t(7,`
        `),a(),t(8,`
      
        `),r(9,"code-box",3),t(10,`
          `),m(11,"components-loading-custom"),t(12,`
        `),a(),t(13,`
      `),a(),r(14,"div",2),t(15,`
        `),r(16,"code-box",3),t(17,`
          `),m(18,"components-loading-delay"),t(19,`
        `),a(),t(20,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id),c(5),s("item",i.codes[2]),T("id",i.codes[2].id),c(7),s("item",i.codes[1]),T("id",i.codes[1].id))},dependencies:[j,H,Ur,qr,Gr,B,R,F],encapsulation:2});let n=e;return n})();var en=(()=>{let e=class e{constructor(d){this.scriptSrv=S(We),this.pending=!1,this._lodop=null,this._init=new Yt,this._events=new Yt,this.printBuffer=[],this.defaultConfig=d.merge("lodop",{url:"//localhost:8443/CLodopfuncs.js",name:"CLODOP",companyName:"",checkMaxCount:100}),this.cog=this.defaultConfig}get cog(){return this._cog}set cog(d){this._cog=yt(yt({},this.defaultConfig),d)}get events(){return this._events.asObservable()}get lodop(){return this._lodop?le({ok:!0,lodop:this._lodop}):this.pending?this._init.asObservable():(this.request(),this._init.asObservable())}get printer(){this.check();let d=[],o=this._lodop.GET_PRINTER_COUNT();for(let i=0;i<o;i++)d.push(this._lodop.GET_PRINTER_NAME(i));return d}check(){if(!this._lodop)throw new Error("\u8BF7\u52A1\u5FC5\u5148\u8C03\u7528 lodop \u83B7\u53D6\u5BF9\u8C61")}request(){this.pending=!0;let d=`${this.cog.url}?name=${this.cog.name}`,o=this.cog.checkMaxCount,i=(g,u)=>{this._init.next({ok:g==="ok",status:g,error:u,lodop:this._lodop})},p=()=>{if(--o,this._lodop.webskt&&this._lodop.webskt.readyState===1)i("ok");else{if(o<0){i("check-limit");return}setTimeout(()=>p(),100)}};this.scriptSrv.loadScript(d).then(g=>{if(g.status!=="ok"){this.pending=!1,i("script-load-error",g[0]);return}let u=window;if(u.hasOwnProperty(this.cog.name)&&(this._lodop=u[this.cog.name]),this._lodop===null){i("load-variable-name-error",{name:this.cog.name});return}this._lodop.SET_LICENSES(this.cog.companyName,this.cog.license,this.cog.licenseA,this.cog.licenseB),p()})}reset(){this._lodop=null,this.pending=!1,this.request()}attachCode(d,o,i){this.check(),i||(i=/LODOP\.([^(]+)\(([^\n]+)?\);/i),d.split(`
`).forEach(p=>{let g=i.exec(p.trim());if(!g)return;let u=this._lodop[g[1]];if(u){let K=null;try{K=new Function(`return [${g[2]}]`)()}catch{}if(K!=null&&Array.isArray(K)&&o)for(let W=0;W<K.length;W++)typeof K[W]=="string"&&(K[W]=K[W].replace(/{{(.*?)}}/g,(bt,_t)=>o[_t.trim()]||""));u.apply(this._lodop,K)}})}design(){this.check();let d=this._lodop.PRINT_DESIGN();return new Promise(o=>{this._lodop.On_Return=(i,p)=>{d===i&&(this._lodop.On_Return=null,o(`${p}`))}})}printDo(){let d=this.printBuffer.shift();if(!d)return;this.attachCode(d.code,d.item,d.parser);let o=this._lodop.PRINT();this._lodop.On_Return=(i,p)=>{o===i&&(this._lodop.On_Return=null,this._events.next(yt({ok:p===!0,error:p===!0?null:p},d)),this.printDo())}}print(d,o,i){this.check(),o&&this.printBuffer.push(...(Array.isArray(o)?o:[o]).map(p=>({code:d,parser:i,item:p}))),this.printDo()}ngOnDestroy(){this._init.unsubscribe(),this._events.unsubscribe()}};e.\u0275fac=function(o){return new(o||e)(go(At))},e.\u0275prov=ce({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Ws(n,e){if(n&1){let l=w();t(0,`
          \u8BF7\u5148\u4E0B\u8F7D`),r(1,"a",2),t(2,"Lodop\u63D2\u4EF6"),a(),t(3,"\uFF0C \u5B89\u88C5\u540E\u70B9\u51FB"),r(4,"a",3),v("click",function(){y(l);let o=b(2);return x(o.reload())}),t(5,"\u91CD\u8BD5"),a(),t(6,`\u3002
        `)}}function Us(n,e){if(n&1&&(t(0,`
      `),r(1,"nz-alert",1),t(2,`
        `),C(3,Ws,7,0,"ng-template",null,0,P),t(5,`
      `),a(),t(6,`
    `)),n&2){let l=_(4);c(),s("nzType","warning")("nzMessage",l)}}function qs(n,e){if(n&1&&(t(0,`
                `),m(1,"nz-option",16),t(2,`
              `)),n&2){let l=e.$implicit;c(),s("nzLabel",l)("nzValue",l)}}function Gs(n,e){if(n&1&&(t(0,`
                `),m(1,"nz-option",16),t(2,`
              `)),n&2){let l=e.$implicit;c(),s("nzLabel",l)("nzValue",l)}}function $s(n,e){if(n&1){let l=w();t(0,`
      `),r(1,"form",4),t(2,`
        `),r(3,"nz-form-item",5),t(4,`
          `),r(5,"nz-form-label",6),t(6,"\u6253\u5370\u670D\u52A1\u5668"),a(),t(7,`
          `),r(8,"nz-form-control",6),t(9,`
            `),r(10,"nz-input-group"),t(11,`
              `),r(12,"div",7),t(13,`
                `),r(14,"input",8),O("ngModelChange",function(o){y(l);let i=b();return A(i.cog.url,o)||(i.cog.url=o),x(o)}),a(),t(15,`
              `),a(),t(16,`
              `),r(17,"div",7),t(18,`
                `),r(19,"button",9),v("click",function(){y(l);let o=b();return x(o.reload(null))}),t(20,"\u91CD\u65B0\u52A0\u8F7D\u6253\u5370\u673A"),a(),t(21,`
              `),a(),t(22,`
            `),a(),t(23,`
          `),a(),t(24,`
        `),a(),t(25,`
        `),r(26,"nz-form-item",5),t(27,`
          `),r(28,"nz-form-label",6),t(29,"\u6253\u5370\u673A"),a(),t(30,`
          `),r(31,"nz-form-control",6),t(32,`
            `),r(33,"nz-select",10),O("ngModelChange",function(o){y(l);let i=b();return A(i.cog.printer,o)||(i.cog.printer=o),x(o)}),v("ngModelChange",function(o){y(l);let i=b();return x(i.changePinter(o))}),t(34,`
              `),St(35,qs,3,2,null,null,kt),a(),t(37,`
          `),a(),t(38,`
        `),a(),t(39,`
        `),r(40,"nz-form-item",5),t(41,`
          `),r(42,"nz-form-label",6),t(43,"\u7EB8\u5F20\u7C7B\u578B"),a(),t(44,`
          `),r(45,"nz-form-control",6),t(46,`
            `),r(47,"nz-select",11),O("ngModelChange",function(o){y(l);let i=b();return A(i.cog.paper,o)||(i.cog.paper=o),x(o)}),t(48,`
              `),St(49,Gs,3,2,null,null,kt),a(),t(51,`
          `),a(),t(52,`
        `),a(),t(53,`
        `),r(54,"nz-form-item",5),t(55,`
          `),r(56,"nz-form-label",6),t(57,"\u6253\u5370\u5185\u5BB9"),a(),t(58,`
          `),r(59,"nz-form-control",12),t(60,`
            `),r(61,"textarea",13),O("ngModelChange",function(o){y(l);let i=b();return A(i.cog.html,o)||(i.cog.html=o),x(o)}),a(),t(62,`
          `),a(),t(63,`
        `),a(),t(64,`
        `),r(65,"nz-form-item",5),t(66,`
          `),r(67,"nz-form-control",14),t(68,`
            `),r(69,"button",15),v("click",function(){y(l);let o=b();return x(o.print(!0))}),t(70,"\u6253\u5370\u9884\u89C8"),a(),t(71,`
            `),r(72,"button",15),v("click",function(){y(l);let o=b();return x(o.print())}),t(73,"\u76F4\u63A5\u6253\u5370"),a(),t(74,`
          `),a(),t(75,`
        `),a(),t(76,`
      `),a(),t(77,`
    `)}if(n&2){let l=b();c(5),s("nzSm",6),c(3),s("nzSm",18),c(4),s("nzSpan",16),c(2),L("ngModel",l.cog.url),c(3),s("nzSpan",8),c(11),s("nzSm",6),c(3),s("nzSm",18),c(2),L("ngModel",l.cog.printer),c(2),zt(l.pinters),c(7),s("nzSm",6),c(3),s("nzSm",18),c(2),L("ngModel",l.cog.paper),c(2),zt(l.papers),c(7),s("nzSm",6),c(3),s("nzSm",18),c(2),L("ngModel",l.cog.html),c(6),s("nzSm",18)("nzOffset",6),c(2),s("nzLoading",l.printing),c(3),s("nzLoading",l.printing)}}var Xr=(()=>{let e=class e{constructor(d,o){this.lodopSrv=d,this.msg=o,this.cog={url:"https://localhost:8443/CLodopfuncs.js",printer:"",paper:"",html:`
        <h1>Title</h1>
        <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>
        <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>
        <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>
        <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>
        <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>
        `},this.error=!1,this.lodop=null,this.pinters=[],this.papers=[],this.printing=!1,this.lodopSrv.lodop.subscribe(({lodop:i,ok:p})=>{if(!p){this.error=!0;return}this.error=!1,this.msg.success("\u6253\u5370\u673A\u52A0\u8F7D\u6210\u529F"),this.lodop=i,this.pinters=this.lodopSrv.printer})}reload(d={url:"https://localhost:8443/CLodopfuncs.js"}){this.pinters=[],this.papers=[],this.cog.printer="",this.cog.paper="",this.lodopSrv.cog=yt(yt({},this.cog),d),this.error=!1,d===null&&this.lodopSrv.reset()}changePinter(d){this.papers=this.lodop.GET_PAGESIZES_LIST(d,`
`).split(`
`)}print(d=!1){let o=this.lodop;o.PRINT_INITA(10,20,810,610,"\u6D4B\u8BD5C-Lodop\u8FDC\u7A0B\u6253\u5370\u56DB\u6B65\u9AA4"),o.SET_PRINTER_INDEXA(this.cog.printer),o.SET_PRINT_PAGESIZE(0,0,0,this.cog.paper),o.ADD_PRINT_TEXT(1,1,300,200,"\u4E0B\u9762\u8F93\u51FA\u7684\u662F\u672C\u9875\u6E90\u4EE3\u7801\u53CA\u5176\u5C55\u73B0\u6548\u679C\uFF1A"),o.ADD_PRINT_TEXT(20,10,"90%","95%",this.cog.html),o.SET_PRINT_STYLEA(0,"ItemType",4),o.NewPageA(),o.ADD_PRINT_HTM(20,10,"90%","95%",this.cog.html),d?o.PREVIEW():o.PRINT()}};e.\u0275fac=function(o){return new(o||e)($(en),$(vt))},e.\u0275cmp=h({type:e,selectors:[["components-lodop-print"]],standalone:!0,features:[f],decls:3,vars:1,consts:[["message",""],[3,"nzType","nzMessage"],["href","http://c-lodop.com/download.html","target","_blank"],[3,"click"],["nz-form",""],["nz-row",""],["nz-col","",3,"nzSm"],["nz-col","",3,"nzSpan"],["nz-input","","nzPlaceHolder","https://localhost:8443/CLodopfuncs.js","name","url",3,"ngModelChange","ngModel"],["nz-button","",3,"click"],["nzPlaceHolder","\u8BF7\u9009\u62E9\u6253\u5370\u673A","nzShowSearch","","nzAllowClear","","name","printer",2,"width","90%",3,"ngModelChange","ngModel"],["nzPlaceHolder","\u8BF7\u9009\u62E9\u7EB8\u5F20\u7C7B\u578B","nzShowSearch","","nzAllowClear","","name","paper",2,"width","90%",3,"ngModelChange","ngModel"],["nz-col","","nzExtra","\u4EC5\u9650HTML\uFF0C\u66F4\u591A\u7C7B\u578B\u652F\u6301\u8BF7\u53C2\u8003\u5B98\u7F51",3,"nzSm"],["nz-input","","name","html","nzAutosize","",3,"ngModelChange","ngModel"],["nz-col","",3,"nzSm","nzOffset"],["nz-button","",3,"click","nzLoading"],[3,"nzLabel","nzValue"]],template:function(o,i){o&1&&(t(0,`
    `),C(1,Us,7,2)(2,$s,78,18)),o&2&&(c(),M(i.error?1:2))},dependencies:[It,R,F,Et,Ke,Nn,Je,In,En,B,ut,Nt,Ct,ct,Dt,gt,Gt,pt,st,Xe,Tn,I,D,N,E,wo,_o,To],encapsulation:2});let n=e;return n})();var Qs=()=>({minRows:2,maxRows:6});function Zs(n,e){n&1&&(t(0,`
          \u8BF7\u5148\u4E0B\u8F7D`),r(1,"a",2),t(2,"Lodop\u63D2\u4EF6"),a(),t(3,`\u3002
        `))}function Xs(n,e){if(n&1&&(t(0,`
      `),r(1,"nz-alert",1),t(2,`
        `),C(3,Zs,4,0,"ng-template",null,0,P),t(5,`
      `),a(),t(6,`
    `)),n&2){let l=_(4);c(),s("nzType","warning")("nzMessage",l)}}function Ks(n,e){if(n&1){let l=w();t(0,`
      `),r(1,"form",3),t(2,`
        `),r(3,"nz-form-item",4),t(4,`
          `),r(5,"nz-form-label",5),t(6,"\u6807\u9898"),a(),t(7,`
          `),r(8,"nz-form-control",5),t(9,`
            `),r(10,"input",6),O("ngModelChange",function(o){y(l);let i=b();return A(i.context.\u6807\u9898,o)||(i.context.\u6807\u9898=o),x(o)}),a(),t(11,`
          `),a(),t(12,`
        `),a(),t(13,`
        `),r(14,"nz-form-item",4),t(15,`
          `),r(16,"nz-form-label",5),t(17,"\u8D39\u7528"),a(),t(18,`
          `),r(19,"nz-form-control",5),t(20,`
            `),r(21,"input",7),O("ngModelChange",function(o){y(l);let i=b();return A(i.context.\u8D39\u7528,o)||(i.context.\u8D39\u7528=o),x(o)}),a(),t(22,`
          `),a(),t(23,`
        `),a(),t(24,`
        `),r(25,"nz-form-item",4),t(26,`
          `),r(27,"nz-form-label",5),t(28,"\u6253\u5370\u5185\u5BB9"),a(),t(29,`
          `),r(30,"nz-form-control",5),t(31,`
            `),r(32,"textarea",8),O("ngModelChange",function(o){y(l);let i=b();return A(i.code,o)||(i.code=o),x(o)}),a(),t(33,`
          `),a(),t(34,`
        `),a(),t(35,`
        `),r(36,"nz-form-item",4),t(37,`
          `),r(38,"nz-form-control",9),t(39,`
            `),r(40,"button",10),v("click",function(){y(l);let o=b();return x(o.design())}),t(41,"\u6253\u5370\u8BBE\u8BA1"),a(),t(42,`
            `),r(43,"button",11),v("click",function(){y(l);let o=b();return x(o.setup())}),t(44,"\u6253\u5370\u7EF4\u62A4"),a(),t(45,`
            `),r(46,"button",11),v("click",function(){y(l);let o=b();return x(o.print())}),t(47,"\u6253\u5370\u9884\u89C8"),a(),t(48,`
            `),r(49,"button",10),v("click",function(){y(l);let o=b();return x(o.printBatch())}),t(50,"\u6279\u91CF\u6253\u53703\u5F20"),a(),t(51,`
          `),a(),t(52,`
        `),a(),t(53,`
      `),a(),t(54,`
    `)}if(n&2){let l=b();c(5),s("nzSm",6),c(3),s("nzSm",18),c(2),L("ngModel",l.context.\u6807\u9898),c(6),s("nzSm",6),c(3),s("nzSm",18),c(2),L("ngModel",l.context.\u8D39\u7528),c(6),s("nzSm",6),c(3),s("nzSm",18),c(2),L("ngModel",l.code),s("nzAutosize",nt(14,Qs)),c(6),s("nzSm",18)("nzOffset",6),c(2),s("nzLoading",l.doing),c(9),s("nzLoading",l.doing)}}var Kr=(()=>{let e=class e{constructor(d,o){this.lodopSrv=d,this.msg=o,this.doing=!1,this.error=!1,this.lodop=null,this.context={\u6807\u9898:"\u81EA\u5B9A\u4E49\u6807\u9898",\u8D39\u7528:"100.00 \u5143"},this.code=`LODOP.PRINT_INITA(10,10,762,533,"\u6D4B\u8BD5\u5957\u6253");
LODOP.ADD_PRINT_TEXT(38,78,408,30,"{{\u6807\u9898}}");
LODOP.SET_PRINT_STYLEA(0,"FontSize",15);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#800000");
LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
LODOP.ADD_PRINT_TEXT(259,579,100,23,"{{\u8D39\u7528}}");
LODOP.ADD_PRINT_TEXT(260,520,58,24,"\u5408\u8BA1\uFF1A");`,this.lodopSrv.lodop.subscribe(({lodop:i,ok:p})=>{if(!p){this.error=!0;return}this.error=!1,this.lodop=i})}design(){this.lodopSrv.attachCode(this.code),this.doing=!0,this.lodopSrv.design().then(d=>{this.code=d,this.doing=!1})}setup(){this.lodopSrv.attachCode(this.code),this.lodop.PRINT_SETUP()}print(){this.lodopSrv.attachCode(this.code,this.context),this.lodop.PREVIEW()}printBatch(){this.doing=!0;let d=new Array(3).fill({}).map((i,p)=>yt({index:p+1},this.context));this.lodopSrv.print(`${this.code}
    LODOP.ADD_PRINT_TEXT(10,10,100,100,"\u7B2C{{index}}\u5F20");
    `,d);let o=this.lodopSrv.events.subscribe(i=>{console.log("finish",i),i.item.index===d.length-1&&(this.msg.success("\u5168\u90E8\u6253\u5370\u5B8C\u6210"),this.doing=!1,o.unsubscribe())})}};e.\u0275fac=function(o){return new(o||e)($(en),$(vt))},e.\u0275cmp=h({type:e,selectors:[["components-lodop-design"]],standalone:!0,features:[f],decls:3,vars:2,consts:[["message",""],[3,"nzType","nzMessage"],["href","http://c-lodop.com/download.html","target","_blank"],["nz-form",""],["nz-row",""],["nz-col","",3,"nzSm"],["nz-input","","name","\u6807\u9898",3,"ngModelChange","ngModel"],["nz-input","","name","\u8D39\u7528",3,"ngModelChange","ngModel"],["name","code","nz-input","",3,"ngModelChange","ngModel","nzAutosize"],["nz-col","",3,"nzSm","nzOffset"],["nz-button","",3,"click","nzLoading"],["nz-button","",3,"click"]],template:function(o,i){o&1&&(t(0,`
    `),C(1,Xs,7,2)(2,Ks,55,15)),o&2&&(c(),M(i.error?1:-1),c(),M(i.lodop&&!i.error?2:-1))},dependencies:[It,R,F,Et,Ke,Nn,Je,In,En,B,ut,Nt,Ct,ct,Dt,gt,Gt,pt,st,Tn,I,D,N,E],encapsulation:2});let n=e;return n})();var Jr=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/lodop/index.en-US.md","zh-CN":"packages/abc/lodop/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>The basic implementation of <a target="_blank" href="http://c-lodop.com/" data-url="http://c-lodop.com/">Lodop</a> printing, commercial needs to buy lodop license. (Also thanks lodop for free ng-alain for genuine KEY)</p><blockquote><p>Prerequisites for running the example must be installed <a target="_blank" href="http://c-lodop.com/download.html" data-url="http://c-lodop.com/download.html">Lodop</a>.</p></blockquote></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="LodopService"><a class="lake-link"><i data-anchor="LodopService"></i></a>LodopService</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>cog</code></td><td>Get or set config</td><td><code><a data-toc="AlainLodopConfig">AlainLodopConfig</a></code></td><td>-</td></tr><tr><td><code>events</code></td><td>process notification</td><td><code>Observable<<a data-toc="LodopPrintResult">LodopPrintResult</a>></code></td><td>-</td></tr><tr><td><code>lodop</code></td><td>Get the Lodop instance</td><td><code>Observable<<a data-toc="LodopResult">LodopResult</a>></code></td><td>-</td></tr></tbody></table><p><strong>Auxiliary API after Lodop is successfully loaded</strong></p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>printer</code></td><td>Get a list of printers</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>attachCode()</code></td><td>Attach code to the <code>lodop</code> object</td><td><code>void</code></td><td>-</td></tr><tr><td><code>design()</code></td><td>Run the print design manually after closing the return code</td><td><code>Promise&lt;string></code></td><td>-</td></tr><tr><td><code>print()</code></td><td>Print now, generally used for batch printing</td><td><code>void</code></td><td>-</td></tr></tbody></table><h3 id="LodopPrintResult"><a class="lake-link"><i data-anchor="LodopPrintResult"></i></a>LodopPrintResult</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>ok</code></td><td>Whether print is successful</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>error</code></td><td>Error message</td><td><code>string</code></td><td>-</td></tr><tr><td><code>code</code></td><td>Code of lodop</td><td><code>string</code></td><td>-</td></tr><tr><td><code>item</code></td><td>Dynamic parameter context object</td><td><code>any</code></td><td>-</td></tr><tr><td><code>parser</code></td><td>Code parsing expression</td><td><code>RegExp</code></td><td>-</td></tr></tbody></table><h3 id="LodopResult"><a class="lake-link"><i data-anchor="LodopResult"></i></a>LodopResult</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>ok</code></td><td>Whether print is successful</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>status</code></td><td>Status of result</td><td><code>string</code></td><td>-</td></tr><tr><td><code>lodop</code></td><td>Lodop instance</td><td><code>Lodop</code></td><td>-</td></tr><tr><td><code>error</code></td><td>Error message</td><td><code>any</code></td><td>-</td></tr></tbody></table><h3 id="AlainLodopConfig"><a class="lake-link"><i data-anchor="AlainLodopConfig"></i></a>AlainLodopConfig</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>companyName</code></td><td>Company name</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>license</code></td><td>License</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>licenseA</code></td><td>LicenseA</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>licenseB</code></td><td>LicenseB</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>url</code></td><td>Lodop remote script URL address</td><td><code>string</code></td><td><code>//localhost:8443/Lodopfuncs.js</code></td><td>\u2705</td></tr><tr><td><code>name</code></td><td>Lodop variable name</td><td><code>string</code></td><td><code>LODOP</code></td><td>\u2705</td></tr><tr><td><code>checkMaxCount</code></td><td>Exceeded the number of inspections as a failure, Because of Lodop needs to connect to WebSocket</td><td><code>number</code></td><td><code>100</code></td><td>\u2705</td></tr></tbody></table>',meta:{type:"Basic",order:4,title:"lodop",subtitle:"Lodop Print",cols:1,module:"import { LodopModule } from '@delon/abc/lodop';"},toc:[{id:"API",title:"API",h:2,children:[{id:"LodopService",title:"LodopService",h:3},{id:"LodopPrintResult",title:"LodopPrintResult",h:3},{id:"LodopResult",title:"LodopResult",h:3},{id:"AlainLodopConfig",title:"AlainLodopConfig",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p><a target="_blank" href="http://c-lodop.com/" data-url="http://c-lodop.com/">Lodop</a> \u6253\u5370\u7684\u57FA\u7840\u5B9E\u73B0\uFF0C\u5546\u7528\u9700\u8981\u8D2D\u4E70KEY\u3002\uFF08\u540C\u65F6\u611F\u8C22 lodop \u4E3A ng-alain \u514D\u8D39\u63D0\u4F9B\u6B63\u7248KEY\uFF09</p><blockquote><p>\u8FD0\u884C\u793A\u4F8B\u7684<strong>\u524D\u63D0\u6761\u4EF6</strong>\u5FC5\u987B\u5B89\u88C5<a target="_blank" href="http://c-lodop.com/download.html" data-url="http://c-lodop.com/download.html">Lodop</a>\u3002</p></blockquote></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="LodopService"><a class="lake-link"><i data-anchor="LodopService"></i></a>LodopService</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>cog</code></td><td>\u83B7\u53D6\u6216\u8BBE\u7F6E\u914D\u7F6E\u9879</td><td><code><a data-toc="AlainLodopConfig">AlainLodopConfig</a></code></td><td>-</td></tr><tr><td><code>events</code></td><td>\u6253\u5370\u8FC7\u7A0B\u901A\u77E5</td><td><code>Observable<<a data-toc="LodopPrintResult">LodopPrintResult</a>></code></td><td>-</td></tr><tr><td><code>lodop</code></td><td>\u83B7\u53D6 Lodop \u5BF9\u8C61</td><td><code>Observable<<a data-toc="LodopResult">LodopResult</a>></code></td><td>-</td></tr></tbody></table><p><strong>Lodop\u52A0\u8F7D\u6210\u529F\u540E\u8F85\u52A9API</strong></p><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>printer</code></td><td>\u83B7\u53D6\u6253\u5370\u673A\u5217\u8868</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>attachCode()</code></td><td>\u9644\u52A0\u4EE3\u7801\u81F3 <code>lodop</code> \u5BF9\u8C61\u4E0A</td><td><code>void</code></td><td>-</td></tr><tr><td><code>design()</code></td><td>\u8FD0\u884C\u6253\u5370\u8BBE\u8BA1\u624B\u52A8\u5173\u95ED\u540E\u8FD4\u56DE\u4EE3\u7801</td><td><code>Promise&lt;string></code></td><td>-</td></tr><tr><td><code>print()</code></td><td>\u7ACB\u5373\u6253\u5370\uFF0C\u4E00\u822C\u7528\u4E8E\u6279\u91CF\u5957\u6253</td><td><code>void</code></td><td>-</td></tr></tbody></table><h3 id="LodopPrintResult"><a class="lake-link"><i data-anchor="LodopPrintResult"></i></a>LodopPrintResult</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>ok</code></td><td>\u662F\u5426\u6253\u5370\u6210\u529F</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>error</code></td><td>\u9519\u8BEF\u4FE1\u606F</td><td><code>string</code></td><td>-</td></tr><tr><td><code>code</code></td><td>\u4EE3\u7801</td><td><code>string</code></td><td>-</td></tr><tr><td><code>item</code></td><td>\u52A8\u6001\u53C2\u6570\u4E0A\u4E0B\u6587\u5BF9\u8C61</td><td><code>any</code></td><td>-</td></tr><tr><td><code>parser</code></td><td>\u4EE3\u7801\u89E3\u6790\u8868\u8FBE\u5F0F</td><td><code>RegExp</code></td><td>-</td></tr></tbody></table><h3 id="LodopResult"><a class="lake-link"><i data-anchor="LodopResult"></i></a>LodopResult</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>ok</code></td><td>\u8868\u793A\u662F\u5426\u52A0\u8F7D\u6210\u529F</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>status</code></td><td>\u72B6\u6001\u7801</td><td><code>string</code></td><td>-</td></tr><tr><td><code>lodop</code></td><td>Lodop \u5BF9\u8C61</td><td><code>Lodop</code></td><td>-</td></tr><tr><td><code>error</code></td><td>\u9519\u8BEF\u660E\u7EC6</td><td><code>any</code></td><td>-</td></tr></tbody></table><h3 id="AlainLodopConfig"><a class="lake-link"><i data-anchor="AlainLodopConfig"></i></a>AlainLodopConfig</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>companyName</code></td><td>\u6CE8\u518C\u5355\u4F4D\u540D\u79F0</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>license</code></td><td>\u4E3B\u6CE8\u518C\u53F7</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>licenseA</code></td><td>\u9644\u52A0\u6CE8\u518C\u53F7A</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>licenseB</code></td><td>\u9644\u52A0\u6CE8\u518C\u53F7B</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>url</code></td><td>Lodop \u8FDC\u7A0B\u811A\u672CURL\u5730\u5740\uFF0C<strong>\u6CE8\u610F</strong>\u52A1\u5FC5\u4F7F\u7528 <code>name</code> \u5C5E\u6027\u6307\u5B9A\u53D8\u91CF\u503C</td><td><code>string</code></td><td><code>//localhost:8443/Lodopfuncs.js</code></td><td>\u2705</td></tr><tr><td><code>name</code></td><td>Lodop \u53D8\u91CF\u540D</td><td><code>string</code></td><td><code>LODOP</code></td><td>\u2705</td></tr><tr><td><code>checkMaxCount</code></td><td>\u68C0\u67E5\u6B21\u6570\uFF0C\u9ED8\u8BA4 <code>100</code>\uFF0C\u5F53\u68C0\u67E5\u8D85\u8FC7\u65F6\u89C6\u4E3A\u5F02\u5E38\uFF0C\u8FD9\u662F\u56E0\u4E3A Lodop \u9700\u8981\u8FDE\u63A5 WebSocket</td><td><code>number</code></td><td><code>100</code></td><td>\u2705</td></tr></tbody></table>',meta:{type:"Basic",order:4,title:"lodop",subtitle:"Lodop\u6253\u5370",cols:1,module:"import { LodopModule } from '@delon/abc/lodop';"},toc:[{id:"API",title:"API",h:2,children:[{id:"LodopService",title:"LodopService",h:3},{id:"LodopPrintResult",title:"LodopPrintResult",h:3},{id:"LodopResult",title:"LodopResult",h:3},{id:"AlainLodopConfig",title:"AlainLodopConfig",h:3}]}]}},demo:!0},this.codes=[{id:"components-lodop-print",meta:{order:1,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:{"zh-CN":"<p>\u83B7\u53D6\u6253\u5370\u670D\u52A1\u5668\uFF08\u5305\u62EC\uFF1A\u8FDC\u7A0B\uFF09\u4FE1\u606F\u3002</p>","en-US":"<p>Get print server information (including: remote).</p>"},code:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Lodop, LodopService } from '@delon/abc/lodop';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'components-lodop-print',
  template: \`
    @if (error) {
      <nz-alert [nzType]="'warning'" [nzMessage]="message">
        <ng-template #message>
          \u8BF7\u5148\u4E0B\u8F7D<a href="http://c-lodop.com/download.html" target="_blank">Lodop\u63D2\u4EF6</a>\uFF0C \u5B89\u88C5\u540E\u70B9\u51FB<a
            (click)="reload()"
            >\u91CD\u8BD5</a
          >\u3002
        </ng-template>
      </nz-alert>
    } @else {
      <form nz-form>
        <nz-form-item nz-row>
          <nz-form-label nz-col [nzSm]="6">\u6253\u5370\u670D\u52A1\u5668</nz-form-label>
          <nz-form-control nz-col [nzSm]="18">
            <nz-input-group>
              <div nz-col [nzSpan]="16">
                <input
                  nz-input
                  nzPlaceHolder="https://localhost:8443/CLodopfuncs.js"
                  [(ngModel)]="cog.url"
                  name="url"
                />
              </div>
              <div nz-col [nzSpan]="8">
                <button nz-button (click)="reload(null)">\u91CD\u65B0\u52A0\u8F7D\u6253\u5370\u673A</button>
              </div>
            </nz-input-group>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item nz-row>
          <nz-form-label nz-col [nzSm]="6">\u6253\u5370\u673A</nz-form-label>
          <nz-form-control nz-col [nzSm]="18">
            <nz-select
              style="width:90%;"
              nzPlaceHolder="\u8BF7\u9009\u62E9\u6253\u5370\u673A"
              nzShowSearch
              nzAllowClear
              [(ngModel)]="cog.printer"
              name="printer"
              (ngModelChange)="changePinter($event)"
            >
              @for (name of pinters; track $index) {
                <nz-option [nzLabel]="name" [nzValue]="name" />
              }
            </nz-select>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item nz-row>
          <nz-form-label nz-col [nzSm]="6">\u7EB8\u5F20\u7C7B\u578B</nz-form-label>
          <nz-form-control nz-col [nzSm]="18">
            <nz-select
              style="width:90%;"
              nzPlaceHolder="\u8BF7\u9009\u62E9\u7EB8\u5F20\u7C7B\u578B"
              nzShowSearch
              nzAllowClear
              [(ngModel)]="cog.paper"
              name="paper"
            >
              @for (name of papers; track $index) {
                <nz-option [nzLabel]="name" [nzValue]="name" />
              }
            </nz-select>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item nz-row>
          <nz-form-label nz-col [nzSm]="6">\u6253\u5370\u5185\u5BB9</nz-form-label>
          <nz-form-control nz-col [nzSm]="18" nzExtra="\u4EC5\u9650HTML\uFF0C\u66F4\u591A\u7C7B\u578B\u652F\u6301\u8BF7\u53C2\u8003\u5B98\u7F51">
            <textarea nz-input [(ngModel)]="cog.html" name="html" nzAutosize></textarea>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item nz-row>
          <nz-form-control nz-col [nzSm]="18" [nzOffset]="6">
            <button nz-button (click)="print(true)" [nzLoading]="printing">\u6253\u5370\u9884\u89C8</button>
            <button nz-button (click)="print()" [nzLoading]="printing">\u76F4\u63A5\u6253\u5370</button>
          </nz-form-control>
        </nz-form-item>
      </form>
    }
  \`,
  standalone: true,
  imports: [NzFormModule, NzAlertModule, NzGridModule, FormsModule, NzInputModule, NzButtonModule, NzSelectModule]
})
export class ComponentsLodopPrintComponent {
  constructor(
    private lodopSrv: LodopService,
    private msg: NzMessageService
  ) {
    this.lodopSrv.lodop.subscribe(({ lodop, ok }) => {
      if (!ok) {
        this.error = true;
        return;
      }
      this.error = false;
      this.msg.success(\`\u6253\u5370\u673A\u52A0\u8F7D\u6210\u529F\`);
      this.lodop = lodop as Lodop;
      this.pinters = this.lodopSrv.printer;
    });
  }
  cog: NzSafeAny = {
    url: 'https://localhost:8443/CLodopfuncs.js',
    printer: '',
    paper: '',
    html: \`
        <h1>Title</h1>
        <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>
        <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>
        <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>
        <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>
        <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>
        \`
  };
  error = false;
  lodop: Lodop | null = null;
  pinters: NzSafeAny[] = [];
  papers: string[] = [];

  printing = false;

  reload(options: NzSafeAny = { url: 'https://localhost:8443/CLodopfuncs.js' }): void {
    this.pinters = [];
    this.papers = [];
    this.cog.printer = '';
    this.cog.paper = '';

    this.lodopSrv.cog = { ...this.cog, ...options };
    this.error = false;
    if (options === null) this.lodopSrv.reset();
  }

  changePinter(name: string): void {
    this.papers = this.lodop!.GET_PAGESIZES_LIST(name, '\\n').split('\\n');
  }
  print(isPrivew: boolean = false): void {
    const LODOP = this.lodop!;
    LODOP.PRINT_INITA(10, 20, 810, 610, '\u6D4B\u8BD5C-Lodop\u8FDC\u7A0B\u6253\u5370\u56DB\u6B65\u9AA4');
    LODOP.SET_PRINTER_INDEXA(this.cog.printer);
    LODOP.SET_PRINT_PAGESIZE(0, 0, 0, this.cog.paper);
    LODOP.ADD_PRINT_TEXT(1, 1, 300, 200, '\u4E0B\u9762\u8F93\u51FA\u7684\u662F\u672C\u9875\u6E90\u4EE3\u7801\u53CA\u5176\u5C55\u73B0\u6548\u679C\uFF1A');
    LODOP.ADD_PRINT_TEXT(20, 10, '90%', '95%', this.cog.html);
    LODOP.SET_PRINT_STYLEA(0, 'ItemType', 4);
    LODOP.NewPageA();
    LODOP.ADD_PRINT_HTM(20, 10, '90%', '95%', this.cog.html);
    if (isPrivew) LODOP.PREVIEW();
    else LODOP.PRINT();
  }
}`,lang:"ts",componentName:"ComponentsLodopPrintComponent",point:0,name:"print",urls:"packages/abc/lodop/demo/print.md",type:"demo"},{id:"components-lodop-design",meta:{order:2,title:{"zh-CN":"\u6253\u5370\u8BBE\u8BA1","en-US":"Print design"}},summary:{"zh-CN":"<p>\u4F7F\u7528\u6253\u5370\u8BBE\u8BA1\u5BF9\u5B57\u4F53\u3001\u5B57\u53F7\u3001\u5BF9\u8C61\u6392\u7248\u7B49\uFF0C\u5E76\u5229\u7528 <code>attachCode</code> \u65B9\u6CD5\u81EA\u52A8\u9644\u52A0\u8BBE\u8BA1\u751F\u6210\u7684\u4EE3\u7801\u81F3 Lodop \u5BF9\u8C61\uFF0C\u4E14\u652F\u6301\u52A8\u6001\u53C2\u6570\u3002\u8C03\u7528 <code>print</code> \u65B9\u6CD5\u6765\u6253\u5370\u6570\u636E\u5E76\u901A\u8FC7\u76D1\u542C <code>events</code> \u5224\u65AD\u8FDB\u884C\u4E0B\u4E00\u4E2A\u6253\u5370\uFF0C\u4ECE\u800C\u5B9E\u73B0\u65E0\u9650\u5236\u6279\u91CF\u5957\u6253\u3002</p>","en-US":"<p>Use print design for font, font size, object layout, etc., and use <code>attachCode</code> method to automatically append the generated code to the Lodop instance(support dynamic parameters). Call the <code>print</code> method to print the data, and make the next print by listening <code>events</code>, that achieve unlimited batch printing.</p>"},code:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Lodop, LodopService } from '@delon/abc/lodop';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'components-lodop-design',
  template: \`
    @if (error) {
      <nz-alert [nzType]="'warning'" [nzMessage]="message">
        <ng-template #message>
          \u8BF7\u5148\u4E0B\u8F7D<a href="http://c-lodop.com/download.html" target="_blank">Lodop\u63D2\u4EF6</a>\u3002
        </ng-template>
      </nz-alert>
    }
    @if (lodop && !error) {
      <form nz-form>
        <nz-form-item nz-row>
          <nz-form-label nz-col [nzSm]="6">\u6807\u9898</nz-form-label>
          <nz-form-control nz-col [nzSm]="18">
            <input nz-input [(ngModel)]="context['\u6807\u9898']" name="\u6807\u9898" />
          </nz-form-control>
        </nz-form-item>
        <nz-form-item nz-row>
          <nz-form-label nz-col [nzSm]="6">\u8D39\u7528</nz-form-label>
          <nz-form-control nz-col [nzSm]="18">
            <input nz-input [(ngModel)]="context['\u8D39\u7528']" name="\u8D39\u7528" />
          </nz-form-control>
        </nz-form-item>
        <nz-form-item nz-row>
          <nz-form-label nz-col [nzSm]="6">\u6253\u5370\u5185\u5BB9</nz-form-label>
          <nz-form-control nz-col [nzSm]="18">
            <textarea [(ngModel)]="code" name="code" nz-input [nzAutosize]="{ minRows: 2, maxRows: 6 }"></textarea>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item nz-row>
          <nz-form-control nz-col [nzSm]="18" [nzOffset]="6">
            <button nz-button (click)="design()" [nzLoading]="doing">\u6253\u5370\u8BBE\u8BA1</button>
            <button nz-button (click)="setup()">\u6253\u5370\u7EF4\u62A4</button>
            <button nz-button (click)="print()">\u6253\u5370\u9884\u89C8</button>
            <button nz-button (click)="printBatch()" [nzLoading]="doing">\u6279\u91CF\u6253\u53703\u5F20</button>
          </nz-form-control>
        </nz-form-item>
      </form>
    }
  \`,
  standalone: true,
  imports: [NzFormModule, NzAlertModule, NzGridModule, FormsModule, NzInputModule, NzButtonModule]
})
export class ComponentsLodopDesignComponent {
  doing = false;
  error = false;
  lodop: Lodop | null = null;
  context: { \u6807\u9898: string; \u8D39\u7528: string } = {
    \u6807\u9898: '\u81EA\u5B9A\u4E49\u6807\u9898',
    \u8D39\u7528: '100.00 \u5143'
  };
  code = \`LODOP.PRINT_INITA(10,10,762,533,"\u6D4B\u8BD5\u5957\u6253");
LODOP.ADD_PRINT_TEXT(38,78,408,30,"{{\u6807\u9898}}");
LODOP.SET_PRINT_STYLEA(0,"FontSize",15);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#800000");
LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
LODOP.ADD_PRINT_TEXT(259,579,100,23,"{{\u8D39\u7528}}");
LODOP.ADD_PRINT_TEXT(260,520,58,24,"\u5408\u8BA1\uFF1A");\`;
  constructor(
    private lodopSrv: LodopService,
    private msg: NzMessageService
  ) {
    this.lodopSrv.lodop.subscribe(({ lodop, ok }) => {
      if (!ok) {
        this.error = true;
        return;
      }
      this.error = false;
      this.lodop = lodop as Lodop;
    });
  }

  design(): void {
    this.lodopSrv.attachCode(this.code);
    this.doing = true;
    this.lodopSrv.design().then(code => {
      this.code = code;
      this.doing = false;
    });
  }

  setup(): void {
    this.lodopSrv.attachCode(this.code);
    this.lodop!.PRINT_SETUP();
  }

  print(): void {
    this.lodopSrv.attachCode(this.code, this.context);
    this.lodop!.PREVIEW();
  }

  printBatch(): void {
    this.doing = true;
    const data = new Array(3).fill({}).map((_, index) => ({ index: index + 1, ...this.context }));
    this.lodopSrv.print(
      \`\${this.code}
    LODOP.ADD_PRINT_TEXT(10,10,100,100,"\u7B2C{{index}}\u5F20");
    \`,
      data
    );
    const batch$ = this.lodopSrv.events.subscribe(res => {
      console.log('finish', res);
      if (res.item.index === data.length - 1) {
        this.msg.success(\`\u5168\u90E8\u6253\u5370\u5B8C\u6210\`);
        this.doing = false;
        batch$.unsubscribe();
      }
    });
  }
}`,lang:"ts",componentName:"ComponentsLodopDesignComponent",point:1,name:"design",urls:"packages/abc/lodop/demo/design.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-lodop"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-lodop-print"),t(7,`
        `),a(),t(8,`
      
        `),r(9,"code-box",3),t(10,`
          `),m(11,"components-lodop-design"),t(12,`
        `),a(),t(13,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id),c(5),s("item",i.codes[1]),T("id",i.codes[1].id))},dependencies:[j,H,Xr,Kr,B,R,F],encapsulation:2});let n=e;return n})();var Yr=(()=>{let e=class e{constructor(){this.cogSrv=S(At),this.lazySrv=S(We),this.loading=!1,this.loaded=!1,this.notify$=new Yt}get cog(){return this._cog}set cog(d){this._cog=this.cogSrv.merge("media",{urls:["https://cdn.jsdelivr.net/npm/plyr/dist/plyr.min.js","https://cdn.jsdelivr.net/npm/plyr/dist/plyr.css"]},d)}load(){return this.loading?(this.loaded&&this.notify$.next(),this):(this.loading=!0,this.lazySrv.load(this.cog.urls).then(()=>{this.loaded=!0,this.notify$.next()}),this)}notify(){return this.notify$.asObservable().pipe(ki())}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=ce({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Js=["*"],Oo=class Oo{constructor(){this.destroy$=S(Lt),this.el=S(xt).nativeElement,this.renderer=S(oe),this.ngZone=S(Jt),this.srv=S(Yr),this.platform=S(pe),this.type="video",this.delay=0,this.ready=new wt}get player(){return this._p}initDelay(){Re(this.delay).pipe(Mt(this.destroy$)).subscribe(()=>this.ngZone.runOutsideAngular(()=>this.init()))}init(){let e=window.Plyr;if(!e)throw new Error(`No window.Plyr found, please make sure that cdn or local path exists, the current referenced path is: ${JSON.stringify(this.srv.cog.urls)}`);this.ensureElement();let l=this._p=new e(this.videoEl,yt({},this.srv.cog.options));l.on("ready",()=>this.ngZone.run(()=>this.ready.next(l))),this.uploadSource()}ensureElement(){let{type:e}=this,l=this.el.querySelector(e);l||(l=this.renderer.createElement(e),l.controls=!0,this.el.appendChild(l)),this.videoEl=l}destroy(){this._p&&this._p.destroy()}uploadSource(){if(this._p==null)return;let{source:e,type:l}=this;this._p.source=typeof e=="string"?{type:l,sources:[{src:e}]}:e}ngAfterViewInit(){this.platform.isBrowser&&(this.srv.notify().pipe(Mt(this.destroy$),ho(1)).subscribe(()=>this.initDelay()),this.srv.load())}ngOnChanges(e){this.srv.cog={options:this.options},e.source&&this.uploadSource()}ngOnDestroy(){this.destroy(),this._p=null}};Oo.\u0275fac=function(l){return new(l||Oo)},Oo.\u0275cmp=h({type:Oo,selectors:[["media"],["","media",""]],hostVars:2,hostBindings:function(l,d){l&2&&Rt("display","block")},inputs:{type:"type",source:"source",options:"options",delay:[2,"delay","delay",at]},outputs:{ready:"ready"},exportAs:["mediaComponent"],standalone:!0,features:[ht,Pt,f],ngContentSelectors:Js,decls:1,vars:0,template:function(l,d){l&1&&(J(),U(0))},encapsulation:2,changeDetection:0});var Ee=Oo;Fe([Ve()],Ee.prototype,"initDelay",null);var ta=(()=>{let e=class e{constructor(){this.mp4="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-media-mp4"]],standalone:!0,features:[f],decls:16,vars:1,consts:[["media",""],[1,"mb-sm"],["nz-button","",3,"click"],["media","",3,"source"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"div",1),t(2,`
      `),r(3,"button",2),v("click",function(){y(p);let u=_(14);return x(u.player==null?null:u.player.play())}),t(4,"Play"),a(),t(5,`
      `),r(6,"button",2),v("click",function(){y(p);let u=_(14);return x(u.player==null?null:u.player.pause())}),t(7,"Pause"),a(),t(8,`
      `),r(9,"button",2),v("click",function(){y(p);let u=_(14);return x(u.player==null?null:u.player.restart())}),t(10,"Restart"),a(),t(11,`
    `),a(),t(12,`
    `),m(13,"div",3,0),t(15,`
  `)}o&2&&(c(13),s("source",i.mp4))},dependencies:[I,D,N,E,Ee],encapsulation:2});let n=e;return n})();var ea=(()=>{let e=class e{constructor(){this.mp3="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-media-mp3"]],standalone:!0,features:[f],decls:16,vars:1,consts:[["media",""],[1,"mb-sm"],["nz-button","",3,"click"],["media","","type","audio",3,"source"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"div",1),t(2,`
      `),r(3,"button",2),v("click",function(){y(p);let u=_(14);return x(u.player==null?null:u.player.play())}),t(4,"Play"),a(),t(5,`
      `),r(6,"button",2),v("click",function(){y(p);let u=_(14);return x(u.player==null?null:u.player.pause())}),t(7,"Pause"),a(),t(8,`
      `),r(9,"button",2),v("click",function(){y(p);let u=_(14);return x(u.player==null?null:u.player.restart())}),t(10,"Restart"),a(),t(11,`
    `),a(),t(12,`
    `),m(13,"div",3,0),t(15,`
  `)}o&2&&(c(13),s("source",i.mp3))},dependencies:[I,D,N,E,Ee],encapsulation:2});let n=e;return n})();var oa=(()=>{let e=class e{constructor(){this.source={type:"video",sources:[{src:""}],tracks:[]},this.options={debug:!0,i18n:{play:"\u64AD\u653E",pause:"\u6682\u505C",speed:"\u901F\u5EA6",normal:"\u6B63\u5E38"}},this.play("video")}play(d){this.source.type=d,d==="video"?this.source.sources[0].src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4":this.source.sources[0].src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",this.source=yt({},this.source)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-media-custom"]],standalone:!0,features:[f],decls:13,vars:2,consts:[["media",""],[1,"mb-sm"],["nz-button","",3,"click"],["media","",3,"source","options"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"div",1),t(2,`
      `),r(3,"button",2),v("click",function(){return y(p),x(i.play("video"))}),t(4,"Change Play Video"),a(),t(5,`
      `),r(6,"button",2),v("click",function(){return y(p),x(i.play("audio"))}),t(7,"Change Play Audio"),a(),t(8,`
    `),a(),t(9,`
    `),m(10,"div",3,0),t(12,`
  `)}o&2&&(c(10),s("source",i.source)("options",i.options))},dependencies:[I,D,N,E,Ee],encapsulation:2});let n=e;return n})();var na=(()=>{let e=class e{constructor(){this.item={cols:2,urls:{"en-US":"packages/abc/media/index.en-US.md","zh-CN":"packages/abc/media/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>HTML5 player based on <a target="_blank" href="https://github.com/sampotts/plyr" data-url="https://github.com/sampotts/plyr">plyr</a>.</p><h2 id="Dependencies"><a class="lake-link"><i data-anchor="Dependencies"></i></a>Dependencies</h2><p>The plyr script file takes the form of lazy loading\uFF0Cyou can change the default CDN path via <a href="/docs/global-config" data-url="/docs/global-config">Global Configuration</a>. By default: <code>https://cdn.jsdelivr.net/npm/plyr/dist/plyr.min.js</code>, <code>https://cdn.jsdelivr.net/npm/plyr/dist/plyr.css</code>.</p><p><strong>Use local path</strong></p><pre class="hljs language-json"><code>// angular.json
{
  "glob": "**/{plyr.min.js,plyr.css,plyr.svg}",
  "input": "./node_modules/plyr/dist",
  "output": "assets/plyr/"
}</code></pre><pre class="hljs language-ts"><code>// global-config.module.ts
const alainConfig: AlainConfig = {
  media: {
    urls: ['assets/plyr/plyr.min.js', 'assets/plyr/plyr.css'],
    options: {
      iconUrl: 'assets/plyr/plyr.svg',
      blankVideo: 'https://cdn.plyr.io/static/blank.mp4'
    }
  }
};</code></pre></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="media"><a class="lake-link"><i data-anchor="media"></i></a>media<label class="api-type-label directive">directive</label><label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>Media type</td><td><code>audio, video</code></td><td><code>video</code></td><td>-</td></tr><tr><td><code>[source]</code></td><td>Source of the media</td><td><code>string, PlyrMediaSource</code></td><td>-</td><td>-</td></tr><tr><td><code>[options]</code></td><td>Source options of the media, please refer to <a target="_blank" href="https://github.com/sampotts/plyr#options" data-url="https://github.com/sampotts/plyr#options">plyr options</a></td><td><code>any</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[delay]</code></td><td>Delay init plyr player, unit: ms</td><td><code>number</code></td><td>-</td><td>-</td></tr><tr><td><code>(ready)</code></td><td>Ready callback</td><td><code>EventEmitter&lt;Plyr></code></td><td>-</td><td>-</td></tr></tbody></table><h2 id="FAQ"><a class="lake-link"><i data-anchor="FAQ"></i></a>FAQ</h2><h3 id="HowtousePlyrtypesmorefriendly"><a class="lake-link"><i data-anchor="HowtousePlyrtypesmorefriendly"></i></a>HowtousePlyrtypesmorefriendly</h3><pre class="hljs language-ts"><code>import type Plyr from 'plyr';</code></pre>`,meta:{type:"Basic",order:1,title:"media",subtitle:"HTML5 Media",cols:2,module:"import { MediaModule } from '@delon/abc/media';"},toc:[{id:"Dependencies",title:"Dependencies",h:2},{id:"API",title:"API",h:2,children:[{id:"media",title:"media:standalone",h:3}]},{id:"FAQ",title:"FAQ",h:2,children:[{id:"HowtousePlyrtypesmorefriendly",title:"How to use Plyr types more friendly",h:3}]}]},"zh-CN":{content:`<section class="markdown"><p>\u57FA\u4E8E <a target="_blank" href="https://github.com/sampotts/plyr" data-url="https://github.com/sampotts/plyr">plyr</a> HTML5\u64AD\u653E\u5668\u3002</p><h2 id="\u4F9D\u8D56"><a class="lake-link"><i data-anchor="\u4F9D\u8D56"></i></a>\u4F9D\u8D56</h2><p>\u7531\u4E8E plyr \u811A\u672C\u5927\u5C0F\u4EE5\u53CA\u5BF9\u89C6\u9891\u64AD\u653E\u5E76\u4E0D\u662F\u521A\u9700\u7684\u539F\u56E0\uFF0C\u56E0\u6B64\u91C7\u7528\u4E00\u79CD\u5EF6\u8FDF\u52A0\u8F7D\u811A\u672C\u7684\u5F62\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u914D\u7F6E\u6765\u6539\u53D8\u9ED8\u8BA4 CDN \u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F7F\u7528 <code>https://cdn.jsdelivr.net/npm/plyr/dist/plyr.min.js</code>\u3001<code>https://cdn.jsdelivr.net/npm/plyr/dist/plyr.css</code>\u3002</p><p><strong>\u4F7F\u7528\u672C\u5730\u8DEF\u5F84</strong></p><pre class="hljs language-json"><code>// angular.json
{
  "glob": "**/{plyr.min.js,plyr.css,plyr.svg}",
  "input": "./node_modules/plyr/dist",
  "output": "assets/plyr/"
}</code></pre><pre class="hljs language-ts"><code>// global-config.module.ts
const alainConfig: AlainConfig = {
  media: {
    urls: ['assets/plyr/plyr.min.js', 'assets/plyr/plyr.css'],
    options: {
      iconUrl: 'assets/plyr/plyr.svg',
      blankVideo: 'https://cdn.plyr.io/static/blank.mp4'
    }
  }
};</code></pre></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="media"><a class="lake-link"><i data-anchor="media"></i></a>media<label class="api-type-label directive">directive</label><label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>\u5A92\u4F53\u7C7B\u578B</td><td><code>audio, video</code></td><td><code>video</code></td><td>-</td></tr><tr><td><code>[source]</code></td><td>\u5A92\u4F53\u6570\u636E\u6E90</td><td><code>string, PlyrMediaSource</code></td><td>-</td><td>-</td></tr><tr><td><code>[options]</code></td><td>\u64AD\u653E\u5668\u53C2\u6570 <a target="_blank" href="https://github.com/sampotts/plyr#options" data-url="https://github.com/sampotts/plyr#options">plyr options</a></td><td><code>any</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u521D\u59CB\u5316\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td>-</td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u51C6\u5907\u5C31\u7EEA\u56DE\u8C03</td><td><code>EventEmitter&lt;Plyr></code></td><td>-</td><td>-</td></tr></tbody></table><h2 id="FAQ"><a class="lake-link"><i data-anchor="FAQ"></i></a>FAQ</h2><h3 id="\u5982\u4F55\u66F4\u53CB\u597D\u7684\u4F7F\u7528Plyr\u7C7B\u578B"><a class="lake-link"><i data-anchor="\u5982\u4F55\u66F4\u53CB\u597D\u7684\u4F7F\u7528Plyr\u7C7B\u578B"></i></a>\u5982\u4F55\u66F4\u53CB\u597D\u7684\u4F7F\u7528Plyr\u7C7B\u578B</h3><pre class="hljs language-ts"><code>import type Plyr from 'plyr';</code></pre>`,meta:{type:"Basic",order:1,title:"media",subtitle:"HTML5\u5A92\u4F53",cols:2,module:"import { MediaModule } from '@delon/abc/media';"},toc:[{id:"\u4F9D\u8D56",title:"\u4F9D\u8D56",h:2},{id:"API",title:"API",h:2,children:[{id:"media",title:"media:standalone",h:3}]},{id:"FAQ",title:"FAQ",h:2,children:[{id:"\u5982\u4F55\u66F4\u53CB\u597D\u7684\u4F7F\u7528Plyr\u7C7B\u578B",title:"\u5982\u4F55\u66F4\u53CB\u597D\u7684\u4F7F\u7528 Plyr \u7C7B\u578B",h:3}]}]}},demo:!0},this.codes=[{id:"components-media-mp4",meta:{order:1,title:{"zh-CN":"MP4\u57FA\u7840\u6837\u4F8B","en-US":"MP4 Basic Usage"}},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';

import { MediaComponent } from '@delon/abc/media';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-media-mp4',
  template: \`
    <div class="mb-sm">
      <button nz-button (click)="media.player?.play()">Play</button>
      <button nz-button (click)="media.player?.pause()">Pause</button>
      <button nz-button (click)="media.player?.restart()">Restart</button>
    </div>
    <div media #media [source]="mp4"></div>
  \`,
  standalone: true,
  imports: [NzButtonModule, MediaComponent]
})
export class ComponentsMediaMp4Component {
  mp4 = \`https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4\`;
}`,lang:"ts",componentName:"ComponentsMediaMp4Component",point:0,name:"mp4",urls:"packages/abc/media/demo/mp4.md",type:"demo"},{id:"components-media-mp3",meta:{order:2,title:{"zh-CN":"MP3\u57FA\u7840\u6837\u4F8B","en-US":"MP3 Basic Usage"}},summary:{"zh-CN":'<p>\u6307\u5B9A <code>type="audio"</code> \u6765\u64AD\u653E MP3\u3002</p>',"en-US":'<p>Specify <code>type="audio"</code> to play MP3.</p>'},code:`import { Component } from '@angular/core';

import { MediaComponent } from '@delon/abc/media';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-media-mp3',
  template: \`
    <div class="mb-sm">
      <button nz-button (click)="media.player?.play()">Play</button>
      <button nz-button (click)="media.player?.pause()">Pause</button>
      <button nz-button (click)="media.player?.restart()">Restart</button>
    </div>
    <div media #media type="audio" [source]="mp3"></div>
  \`,
  standalone: true,
  imports: [NzButtonModule, MediaComponent]
})
export class ComponentsMediaMp3Component {
  mp3 = \`https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3\`;
}`,lang:"ts",componentName:"ComponentsMediaMp3Component",point:1,name:"mp3",urls:"packages/abc/media/demo/mp3.md",type:"demo"},{id:"components-media-custom",meta:{order:3,title:{"zh-CN":"\u81EA\u5B9A\u4E49","en-US":"Custom"}},summary:{"zh-CN":"<p>\u6307\u5B9A <code>source</code>\u3001<code>options</code> \u6765\u81EA\u5B9A\u4E49\u64AD\u653E\u5668\u3002</p>","en-US":"<p>Specify <code>source</code> and<code>options</code> to customize the player.</p>"},code:`import { Component } from '@angular/core';

import type Plyr from 'plyr';

import { MediaComponent } from '@delon/abc/media';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-media-custom',
  template: \`
    <div class="mb-sm">
      <button nz-button (click)="play('video')">Change Play Video</button>
      <button nz-button (click)="play('audio')">Change Play Audio</button>
    </div>
    <div media #media [source]="source" [options]="options"></div>
  \`,
  standalone: true,
  imports: [NzButtonModule, MediaComponent]
})
export class ComponentsMediaCustomComponent {
  source: Plyr.SourceInfo = {
    type: 'video',
    sources: [
      {
        src: \`\`
      }
    ],
    // \u5B57\u5E55
    tracks: []
  };

  options: Plyr.Options = {
    // If you any problems, open \`debug\` and you can quickly find the issues
    debug: true,
    // controls: ['play-large'],
    i18n: {
      // For more parameters, please refer to: https://github.com/sampotts/plyr/blob/master/src/js/config/defaults.js#L151
      play: '\u64AD\u653E',
      pause: '\u6682\u505C',
      speed: '\u901F\u5EA6',
      normal: '\u6B63\u5E38'
    }
  };

  constructor() {
    this.play('video');
  }

  play(type: 'audio' | 'video'): void {
    this.source.type = type;
    if (type === 'video') {
      this.source.sources[0].src = \`https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4\`;
    } else {
      this.source.sources[0].src = \`https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3\`;
    }
    this.source = { ...this.source };
  }
}`,lang:"ts",componentName:"ComponentsMediaCustomComponent",point:2,name:"custom",urls:"packages/abc/media/demo/custom.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-media"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:21,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-media-mp4"),t(7,`
        `),a(),t(8,`
      
        `),r(9,"code-box",3),t(10,`
          `),m(11,"components-media-custom"),t(12,`
        `),a(),t(13,`
      `),a(),r(14,"div",2),t(15,`
        `),r(16,"code-box",3),t(17,`
          `),m(18,"components-media-mp3"),t(19,`
        `),a(),t(20,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id),c(5),s("item",i.codes[2]),T("id",i.codes[2].id),c(7),s("item",i.codes[1]),T("id",i.codes[1].id))},dependencies:[j,H,ta,ea,oa,B,R,F],encapsulation:2});let n=e;return n})();var oo=["*"];function np(n,e){if(n&1&&m(0,"nz-avatar",1),n&2){let l=b();s("nzSrc",l.nzSrc)}}function ip(n,e){n&1&&U(0)}var dp=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],rp=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function ap(n,e){if(n&1&&m(0,"nz-list-item-meta-avatar",0),n&2){let l=b();s("nzSrc",l.avatarStr)}}function lp(n,e){if(n&1&&(r(0,"nz-list-item-meta-avatar"),ge(1,2),a()),n&2){let l=b();c(),s("ngTemplateOutlet",l.avatarTpl)}}function cp(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(3);c(),V(l.nzTitle)}}function sp(n,e){if(n&1&&(r(0,"nz-list-item-meta-title"),C(1,cp,2,1,"ng-container",3),a()),n&2){let l=b(2);c(),s("nzStringTemplateOutlet",l.nzTitle)}}function pp(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(3);c(),V(l.nzDescription)}}function mp(n,e){if(n&1&&(r(0,"nz-list-item-meta-description"),C(1,pp,2,1,"ng-container",3),a()),n&2){let l=b(2);c(),s("nzStringTemplateOutlet",l.nzDescription)}}function up(n,e){if(n&1&&(r(0,"div",1),C(1,sp,2,1,"nz-list-item-meta-title")(2,mp,2,1,"nz-list-item-meta-description"),U(3,1),U(4,2),a()),n&2){let l=b();c(),M(l.nzTitle&&!l.titleComponent?1:-1),c(),M(l.nzDescription&&!l.descriptionComponent?2:-1)}}function hp(n,e){n&1&&U(0)}var fp=["nz-list-item-actions",""];function gp(n,e){}function bp(n,e){n&1&&m(0,"em",1)}function Cp(n,e){if(n&1&&(r(0,"li"),C(1,gp,0,0,"ng-template",0)(2,bp,1,0,"em",1),a()),n&2){let l=e.$implicit,d=e.$index,o=e.$count;c(),s("ngTemplateOutlet",l),c(),M(d!==o-1?2:-1)}}var yp=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],xp=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"],ca=(n,e)=>({$implicit:n,index:e});function vp(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(2);c(),V(l.nzHeader)}}function Sp(n,e){if(n&1&&(r(0,"nz-list-header"),C(1,vp,2,1,"ng-container",6),a()),n&2){let l=b();c(),s("nzStringTemplateOutlet",l.nzHeader)}}function zp(n,e){n&1&&m(0,"div"),n&2&&Rt("min-height",53,"px")}function _p(n,e){}function Tp(n,e){if(n&1&&(r(0,"div",7),C(1,_p,0,0,"ng-template",8),a()),n&2){let l=e.$implicit,d=e.$index,o=b(2);s("nzSpan",o.nzGrid.span||null)("nzXs",o.nzGrid.xs||null)("nzSm",o.nzGrid.sm||null)("nzMd",o.nzGrid.md||null)("nzLg",o.nzGrid.lg||null)("nzXl",o.nzGrid.xl||null)("nzXXl",o.nzGrid.xxl||null),c(),s("ngTemplateOutlet",o.nzRenderItem)("ngTemplateOutletContext",Be(9,ca,l,d))}}function wp(n,e){if(n&1&&(r(0,"div",2),St(1,Tp,2,12,"div",7,un),a()),n&2){let l=b();s("nzGutter",l.nzGrid.gutter||null),c(),zt(l.nzDataSource)}}function kp(n,e){}function Mp(n,e){if(n&1&&(it(0),C(1,kp,0,0,"ng-template",8),dt()),n&2){let l=e.$implicit,d=e.$index,o=b(2);c(),s("ngTemplateOutlet",o.nzRenderItem)("ngTemplateOutletContext",Be(2,ca,l,d))}}function Dp(n,e){if(n&1&&(r(0,"div",3),St(1,Mp,2,5,"ng-container",null,un),U(3,4),a()),n&2){let l=b();c(),zt(l.nzDataSource)}}function Np(n,e){if(n&1&&m(0,"nz-list-empty",4),n&2){let l=b();s("nzNoResult",l.nzNoResult)}}function Ep(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(2);c(),V(l.nzFooter)}}function Ip(n,e){if(n&1&&(r(0,"nz-list-footer"),C(1,Ep,2,1,"ng-container",6),a()),n&2){let l=b();c(),s("nzStringTemplateOutlet",l.nzFooter)}}function Pp(n,e){}function Fp(n,e){}function Rp(n,e){if(n&1&&(r(0,"nz-list-pagination"),C(1,Fp,0,0,"ng-template",5),a()),n&2){let l=b();c(),s("ngTemplateOutlet",l.nzPagination)}}var Ap=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],Bp=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];function Vp(n,e){if(n&1&&m(0,"ul",3),n&2){let l=b(2);s("nzActions",l.nzActions)}}function Lp(n,e){if(n&1&&(C(0,Vp,1,1,"ul",3),U(1)),n&2){let l=b();M(l.nzActions&&l.nzActions.length>0?0:-1)}}function Op(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(3);c(),V(l.nzContent)}}function jp(n,e){if(n&1&&C(0,Op,2,1,"ng-container",4),n&2){let l=b(2);s("nzStringTemplateOutlet",l.nzContent)}}function Hp(n,e){if(n&1&&(U(0,1),U(1,2),C(2,jp,1,1,"ng-container")),n&2){let l=b();c(2),M(l.nzContent?2:-1)}}function Wp(n,e){n&1&&U(0,3)}function Up(n,e){}function qp(n,e){}function Gp(n,e){}function $p(n,e){if(n&1&&(r(0,"nz-list-item-extra"),C(1,Gp,0,0,"ng-template",6),a()),n&2){let l=b(2);c(),s("ngTemplateOutlet",l.nzExtra)}}function Qp(n,e){}function Zp(n,e){if(n&1&&(r(0,"div",5),C(1,Up,0,0,"ng-template",6)(2,qp,0,0,"ng-template",6),a(),C(3,$p,2,1,"nz-list-item-extra")(4,Qp,0,0,"ng-template",6)),n&2){let l=b(),d=_(1),o=_(3),i=_(5);c(),s("ngTemplateOutlet",o),c(),s("ngTemplateOutlet",d),c(),M(l.nzExtra?3:-1),c(),s("ngTemplateOutlet",i)}}function Xp(n,e){}function Kp(n,e){}function Jp(n,e){}function Yp(n,e){}function tm(n,e){if(n&1&&C(0,Xp,0,0,"ng-template",6)(1,Kp,0,0,"ng-template",6)(2,Jp,0,0,"ng-template",6)(3,Yp,0,0,"ng-template",6),n&2){let l=b(),d=_(1),o=_(3),i=_(5);s("ngTemplateOutlet",o),c(),s("ngTemplateOutlet",l.nzExtra),c(),s("ngTemplateOutlet",i),c(),s("ngTemplateOutlet",d)}}var ia=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],standalone:!0,features:[f],ngContentSelectors:oo,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(o,i){o&1&&(J(),r(0,"h4",0),U(1),a())},encapsulation:2,changeDetection:0});let n=e;return n})(),da=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],standalone:!0,features:[f],ngContentSelectors:oo,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(o,i){o&1&&(J(),r(0,"div",0),U(1),a())},encapsulation:2,changeDetection:0});let n=e;return n})(),sa=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],standalone:!0,features:[f],ngContentSelectors:oo,decls:3,vars:1,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc"]],template:function(o,i){o&1&&(J(),r(0,"div",0),C(1,np,1,1,"nz-avatar",1)(2,ip,1,0),a()),o&2&&(c(),M(i.nzSrc?1:2))},dependencies:[Fn,Pn],encapsulation:2,changeDetection:0});let n=e;return n})(),ai=(()=>{let e=class e{set nzAvatar(d){d instanceof He?(this.avatarStr="",this.avatarTpl=d):this.avatarStr=d}constructor(d){this.elementRef=d,this.avatarStr=""}};e.\u0275fac=function(o){return new(o||e)($(xt))},e.\u0275cmp=h({type:e,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(o,i,p){if(o&1&&(te(p,da,5),te(p,ia,5)),o&2){let g;q(g=G())&&(i.descriptionComponent=g.first),q(g=G())&&(i.titleComponent=g.first)}},hostAttrs:[1,"ant-list-item-meta"],inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],standalone:!0,features:[f],ngContentSelectors:rp,decls:4,vars:3,consts:[[3,"nzSrc"],[1,"ant-list-item-meta-content"],[3,"ngTemplateOutlet"],[4,"nzStringTemplateOutlet"]],template:function(o,i){o&1&&(J(dp),C(0,ap,1,1,"nz-list-item-meta-avatar",0)(1,lp,2,1,"nz-list-item-meta-avatar"),U(2),C(3,up,5,2,"div",1)),o&2&&(M(i.avatarStr?0:-1),c(),M(i.avatarTpl?1:-1),c(2),M(i.nzTitle||i.nzDescription||i.descriptionComponent||i.titleComponent?3:-1))},dependencies:[sa,ee,ia,xe,Bt,da],encapsulation:2,changeDetection:0});let n=e;return n})(),ra=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],standalone:!0,features:[f],ngContentSelectors:oo,decls:1,vars:0,template:function(o,i){o&1&&(J(),U(0))},encapsulation:2,changeDetection:0});let n=e;return n})(),em=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["nz-list-item-action"]],viewQuery:function(o,i){if(o&1&&rt(He,7),o&2){let p;q(p=G())&&(i.templateRef=p.first)}},exportAs:["nzListItemAction"],standalone:!0,features:[f],ngContentSelectors:oo,decls:1,vars:0,template:function(o,i){o&1&&(J(),C(0,hp,1,0,"ng-template"))},encapsulation:2,changeDetection:0});let n=e;return n})(),om=(()=>{let e=class e{constructor(d,o){this.nzActions=[],this.actions=[],this.inputActionChanges$=new Yt,this.contentChildrenChanges$=_i(()=>this.nzListItemActions?le(null):this.initialized.pipe(zi(()=>this.nzListItemActions.changes.pipe(fo(this.nzListItemActions))))),this.initialized=new Yt,cn(this.contentChildrenChanges$,this.inputActionChanges$).pipe(je(o)).subscribe(()=>{this.nzActions.length?this.actions=this.nzActions:this.actions=this.nzListItemActions.map(i=>i.templateRef),d.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}ngAfterContentInit(){this.initialized.next(),this.initialized.complete()}};e.\u0275fac=function(o){return new(o||e)($(lt),$(De))},e.\u0275cmp=h({type:e,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(o,i,p){if(o&1&&te(p,em,4),o&2){let g;q(g=G())&&(i.nzListItemActions=g)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],standalone:!0,features:[Ae([De]),Pt,f],attrs:fp,decls:2,vars:0,consts:[[3,"ngTemplateOutlet"],[1,"ant-list-item-action-split"]],template:function(o,i){o&1&&St(0,Cp,3,2,"li",null,un),o&2&&zt(i.actions)},dependencies:[ee],encapsulation:2,changeDetection:0});let n=e;return n})(),pa=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],standalone:!0,features:[f],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(o,i){o&1&&m(0,"nz-embed-empty",0),o&2&&s("nzComponentName","list")("specificContent",i.nzNoResult)},dependencies:[_n,Cd],encapsulation:2,changeDetection:0});let n=e;return n})(),nm=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],standalone:!0,features:[f],ngContentSelectors:oo,decls:1,vars:0,template:function(o,i){o&1&&(J(),U(0))},encapsulation:2,changeDetection:0});let n=e;return n})(),aa=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],standalone:!0,features:[f],ngContentSelectors:oo,decls:1,vars:0,template:function(o,i){o&1&&(J(),U(0))},encapsulation:2,changeDetection:0});let n=e;return n})(),la=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],standalone:!0,features:[f],ngContentSelectors:oo,decls:1,vars:0,template:function(o,i){o&1&&(J(),U(0))},encapsulation:2,changeDetection:0});let n=e;return n})(),im=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275dir=fe({type:e,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"],standalone:!0});let n=e;return n})();var jo=(()=>{let e=class e{get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}constructor(d){this.directionality=d,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new rn(this.nzItemLayout),this.destroy$=new Yt}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(je(this.destroy$)).subscribe(d=>{this.dir=d})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(d){d.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}};e.\u0275fac=function(o){return new(o||e)($(qt,8))},e.\u0275cmp=h({type:e,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(o,i,p){if(o&1&&(te(p,aa,5),te(p,la,5),te(p,im,5)),o&2){let g;q(g=G())&&(i.nzListFooterComponent=g.first),q(g=G())&&(i.nzListPaginationComponent=g.first),q(g=G())&&(i.nzListLoadMoreDirective=g.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(o,i){o&2&&k("ant-list-rtl",i.dir==="rtl")("ant-list-vertical",i.nzItemLayout==="vertical")("ant-list-lg",i.nzSize==="large")("ant-list-sm",i.nzSize==="small")("ant-list-split",i.nzSplit)("ant-list-bordered",i.nzBordered)("ant-list-loading",i.nzLoading)("ant-list-something-after-last-item",i.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:[2,"nzBordered","nzBordered",Y],nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:[2,"nzLoading","nzLoading",Y],nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:[2,"nzSplit","nzSplit",Y],nzNoResult:"nzNoResult"},exportAs:["nzList"],standalone:!0,features:[ht,Pt,f],ngContentSelectors:xp,decls:14,vars:8,consts:[[3,"nzSpinning"],[3,"min-height"],["nz-row","",3,"nzGutter"],[1,"ant-list-items"],[3,"nzNoResult"],[3,"ngTemplateOutlet"],[4,"nzStringTemplateOutlet"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,i){o&1&&(J(yp),C(0,Sp,2,1,"nz-list-header"),U(1),r(2,"nz-spin",0),it(3),C(4,zp,1,2,"div",1)(5,wp,3,1,"div",2)(6,Dp,4,0,"div",3)(7,Np,1,1,"nz-list-empty",4),dt(),a(),C(8,Ip,2,1,"nz-list-footer"),U(9,1),C(10,Pp,0,0,"ng-template",5),U(11,2),C(12,Rp,2,1,"nz-list-pagination"),U(13,3)),o&2&&(M(i.nzHeader?0:-1),c(2),s("nzSpinning",i.nzLoading),c(2),M(i.nzLoading&&i.nzDataSource&&i.nzDataSource.length===0?4:-1),c(),M(i.nzGrid&&i.nzDataSource?5:6),c(2),M(!i.nzLoading&&i.nzDataSource&&i.nzDataSource.length===0?7:-1),c(),M(i.nzFooter?8:-1),c(2),s("ngTemplateOutlet",i.nzLoadMore),c(2),M(i.nzPagination?12:-1))},dependencies:[ee,nm,xe,Bt,vd,ko,B,R,F,pa,aa,la],encapsulation:2,changeDetection:0});let n=e;return n})(),on=(()=>{let e=class e{get isVerticalAndExtra(){return this.itemLayout==="vertical"&&(!!this.listItemExtraDirective||!!this.nzExtra)}constructor(d,o){this.parentComp=d,this.cdr=o,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(d=>{this.itemLayout=d,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}};e.\u0275fac=function(o){return new(o||e)($(jo),$(lt))},e.\u0275cmp=h({type:e,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(o,i,p){if(o&1&&te(p,ra,5),o&2){let g;q(g=G())&&(i.listItemExtraDirective=g.first)}},hostAttrs:[1,"ant-list-item"],hostVars:2,hostBindings:function(o,i){o&2&&k("ant-list-item-no-flex",i.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:[2,"nzNoFlex","nzNoFlex",Y]},exportAs:["nzListItem"],standalone:!0,features:[ht,f],ngContentSelectors:Bp,decls:8,vars:1,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["nz-list-item-actions","",3,"nzActions"],[4,"nzStringTemplateOutlet"],[1,"ant-list-item-main"],[3,"ngTemplateOutlet"]],template:function(o,i){o&1&&(J(Ap),C(0,Lp,2,1,"ng-template",null,0,P)(2,Hp,3,1,"ng-template",null,1,P)(4,Wp,1,0,"ng-template",null,2,P)(6,Zp,5,4)(7,tm,4,4)),o&2&&(c(6),M(i.isVerticalAndExtra?6:7))},dependencies:[om,xe,Bt,ee,ra],encapsulation:2,changeDetection:0});let n=e;return n})();var ma=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=Kt({type:e}),e.\u0275inj=Xt({imports:[jo,pa,on,ai,sa]});let n=e;return n})();var ua=n=>({$implicit:n});function rm(n,e){}function am(n,e){if(n&1&&C(0,rm,0,0,"ng-template",4),n&2){b();let l=_(3);s("ngTemplateOutlet",l)}}function lm(n,e){if(n&1&&m(0,"img",6),n&2){let l=b(2);T("src",l.data.emptyImage,Di)}}function cm(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(2);c(),mt(" ",l.data.emptyText||l.locale.emptyText," ")}}function sm(n,e){if(n&1&&(r(0,"div",5),C(1,lm,1,1,"img",6),r(2,"p"),C(3,cm,2,1,"ng-container",7),a()()),n&2){let l=b();c(),M(l.data.emptyImage?1:-1),c(2),s("nzStringTemplateOutlet",l.data.emptyText)}}function pm(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(2).$implicit;c(),mt(" ",l.title," ")}}function mm(n,e){if(n&1&&(r(0,"div",13)(1,"nz-tag",14),t(2),a()()),n&2){let l=b(2).$implicit;c(),s("nzColor",l.color),c(),V(l.extra)}}function um(n,e){if(n&1&&C(0,pm,2,1,"ng-container",12)(1,mm,3,2,"div",13),n&2){let l=b().$implicit;s("nzStringTemplateOutlet",l.title)("nzStringTemplateOutletContext",Q(3,ua,l)),c(),M(l.extra?1:-1)}}function hm(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(3).$implicit;c(),mt(" ",l.description," ")}}function fm(n,e){if(n&1&&(r(0,"div",15),C(1,hm,2,1,"ng-container",12),a()),n&2){let l=b(2).$implicit;c(),s("nzStringTemplateOutlet",l.description)("nzStringTemplateOutletContext",Q(2,ua,l))}}function gm(n,e){if(n&1&&(r(0,"div",16),t(1),a()),n&2){let l=b(2).$implicit;c(),V(l.datetime)}}function bm(n,e){if(n&1&&C(0,fm,2,4,"div",15)(1,gm,2,1,"div",16),n&2){let l=b().$implicit;M(l.description?0:-1),c(),M(l.datetime?1:-1)}}function Cm(n,e){if(n&1){let l=w();r(0,"nz-list-item",10),v("click",function(){let o=y(l).$implicit,i=b(2);return x(i.onClick(o))}),r(1,"nz-list-item-meta",11),C(2,um,2,5,"ng-template",null,2,P)(4,bm,2,2,"ng-template",null,3,P),a()()}if(n&2){let l=e.$implicit,d=_(3),o=_(5);k("notice-icon__item-read",l.read),c(),s("nzTitle",d)("nzDescription",o)("nzAvatar",l.avatar)}}function ym(n,e){if(n&1){let l=w();r(0,"nz-list",8),C(1,Cm,6,5,"ng-template",null,1,P),a(),r(3,"div",9),v("click",function(){y(l);let o=b();return x(o.onClear())}),t(4),a()}if(n&2){let l=_(2),d=b();s("nzDataSource",d.data.list)("nzRenderItem",l),c(4),V(d.data.clearText||d.locale.clearText)}}var Ln=(()=>{let e=class e{constructor(){this.locale={},this.select=new wt,this.clear=new wt}onClick(d){this.select.emit({title:this.data.title,item:d})}onClear(){this.clear.emit(this.data.title)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["notice-icon-tab"]],inputs:{locale:"locale",data:"data"},outputs:{select:"select",clear:"clear"},exportAs:["noticeIconTab"],standalone:!0,features:[f],decls:4,vars:1,consts:[["listTpl",""],["item",""],["nzTitle",""],["nzDescription",""],[3,"ngTemplateOutlet"],[1,"notice-icon__notfound"],["alt","not found",1,"notice-icon__notfound-img"],[4,"nzStringTemplateOutlet"],[3,"nzDataSource","nzRenderItem"],[1,"notice-icon__clear",3,"click"],[3,"click"],[3,"nzTitle","nzDescription","nzAvatar"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],[1,"notice-icon__item-extra"],[3,"nzColor"],[1,"notice-icon__item-desc"],[1,"notice-icon__item-time"]],template:function(o,i){o&1&&C(0,am,1,1,null,4)(1,sm,4,2,"div",5)(2,ym,5,3,"ng-template",null,0,P),o&2&&M(i.data.list&&i.data.list.length>0?0:1)},dependencies:[ee,Bt,jo,on,ai,Cn],encapsulation:2});let n=e;return n})();var xm=()=>({"box-shadow":"none"});function vm(n,e){if(n&1&&(r(0,"nz-badge",3),m(1,"i",4),a()),n&2){let l=b();s("nzCount",l.count)("ngClass",l.btnClass)("nzStyle",nt(4,xm)),c(),s("ngClass",l.btnIconClass)}}function Sm(n,e){}function zm(n,e){if(n&1&&C(0,Sm,0,0,"ng-template",2),n&2){b();let l=_(1);s("ngTemplateOutlet",l)}}function _m(n,e){}function Tm(n,e){if(n&1){let l=w();r(0,"nz-tab",8)(1,"notice-icon-tab",9),v("select",function(o){y(l);let i=b(3);return x(i.onSelect(o))})("clear",function(o){y(l);let i=b(3);return x(i.onClear(o))}),a()()}if(n&2){let l=e.$implicit,d=b(3);s("nzTitle",l.title),c(),s("locale",d.locale)("data",l)}}function wm(n,e){if(n&1&&(r(0,"nz-tabset",7),St(1,Tm,2,3,"nz-tab",8,kt),a()),n&2){let l=b(2);s("nzSelectedIndex",0)("nzCentered",l.centered),c(),zt(l.data)}}function km(n,e){if(n&1){let l=w();r(0,"div",5),v("nzVisibleChange",function(o){y(l);let i=b();return x(i.onVisibleChange(o))}),C(1,_m,0,0,"ng-template",2),a(),r(2,"nz-dropdown-menu",null,1)(4,"nz-spin",6),C(5,wm,3,2,"nz-tabset",7),a()()}if(n&2){let l=_(3),d=b(),o=_(1);s("nzVisible",d.popoverVisible)("nzOverlayClassName",d.overlayCls)("nzDropdownMenu",l),c(),s("ngTemplateOutlet",o),c(3),s("nzSpinning",d.loading)("nzDelay",0),c(),M(d.delayShow?5:-1)}}var Ho=(()=>{let e=class e{constructor(){this.i18n=S(qe),this.cdr=S(lt),this.locale={},this.data=[],this.loading=!1,this.popoverVisible=!1,this.centered=!1,this.select=new wt,this.clear=new wt,this.popoverVisibleChange=new wt,this.delayShow=!1}get overlayCls(){return`header-dropdown notice-icon${this.centered?"":" notice-icon__tab-left"}`}onVisibleChange(d){this.delayShow=d,this.popoverVisibleChange.emit(d),d&&Promise.resolve().then(()=>this.cdr.detectChanges())}onSelect(d){this.select.emit(d)}onClear(d){this.clear.emit(d)}ngOnInit(){this.i18n$=this.i18n.change.subscribe(()=>{this.locale=this.i18n.getData("noticeIcon"),this.cdr.markForCheck()})}ngOnChanges(){this.cdr.markForCheck()}ngOnDestroy(){this.i18n$?.unsubscribe()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["notice-icon"]],hostVars:2,hostBindings:function(o,i){o&2&&k("notice-icon__btn",!0)},inputs:{data:"data",count:[2,"count","count",at],loading:[2,"loading","loading",Y],popoverVisible:[2,"popoverVisible","popoverVisible",Y],btnClass:"btnClass",btnIconClass:"btnIconClass",centered:[2,"centered","centered",Y]},outputs:{select:"select",clear:"clear",popoverVisibleChange:"popoverVisibleChange"},exportAs:["noticeIcon"],standalone:!0,features:[ht,Pt,f],decls:4,vars:1,consts:[["badgeTpl",""],["noticeMenu","nzDropdownMenu"],[3,"ngTemplateOutlet"],[3,"nzCount","ngClass","nzStyle"],["nz-icon","","nzType","bell",3,"ngClass"],["nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzVisibleChange","nzVisible","nzOverlayClassName","nzDropdownMenu"],[3,"nzSpinning","nzDelay"],[3,"nzSelectedIndex","nzCentered"],[3,"nzTitle"],[3,"select","clear","locale","data"]],template:function(o,i){o&1&&C(0,vm,2,5,"ng-template",null,0,P)(2,zm,1,1,null,2)(3,km,6,7),o&2&&(c(2),M(i.data.length<=0?2:3))},dependencies:[we,ee,dd,Tt,xo,vo,ko,zo,So,Ln],encapsulation:2,changeDetection:0});let n=e;return n})();var ha=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-notice-icon-basic"]],standalone:!0,features:[f],decls:3,vars:0,consts:[["count","5"]],template:function(o,i){o&1&&(t(0," "),m(1,"notice-icon",0),t(2," "))},dependencies:[Ho],encapsulation:2});let n=e;return n})();var Mm=["titleTpl"],Dm=["descTpl"];function Nm(n,e){if(n&1&&t(0),n&2){let l=e.$implicit;mt(" ",l.id," Title By NgTemplate ")}}function Em(n,e){if(n&1){let l=w();t(0,`
        `),r(1,"a",4),v("click",function(){y(l);let o=b();return x(o.showOK())}),t(2),a(),t(3,`
        Descriptioin By NgTemplate
      `)}if(n&2){let l=e.$implicit;c(2),V(l.id)}}var fa=(()=>{let e=class e{constructor(){this.msg=S(vt),this.nzI18n=S(Yi),this.data=[{title:"\u901A\u77E5",list:[],emptyText:"\u4F60\u5DF2\u67E5\u770B\u6240\u6709\u901A\u77E5",emptyImage:"https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg",clearText:"\u6E05\u7A7A\u901A\u77E5"},{title:"\u6D88\u606F",list:[],emptyText:"\u60A8\u5DF2\u8BFB\u5B8C\u6240\u6709\u6D88\u606F",emptyImage:"https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg",clearText:"\u6E05\u7A7A\u6D88\u606F"},{title:"\u5F85\u529E",list:[],emptyText:"\u4F60\u5DF2\u5B8C\u6210\u6240\u6709\u5F85\u529E",emptyImage:"https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg",clearText:"\u6E05\u7A7A\u5F85\u529E"}],this.count=5,this.loading=!1}updateNoticeData(d){let o=this.data.slice();return o.forEach(i=>i.list=[]),d.forEach(i=>{let p=yt({},i);typeof p.datetime=="string"&&(p.datetime=Ki(p.datetime,"yyyy-MM-dd",new Date)),p.datetime&&(p.datetime=Xi(p.datetime,{locale:this.nzI18n.getDateLocale()})),p.extra&&p.status&&(p.color={todo:void 0,processing:"blue",urgent:"red",doing:"gold"}[p.status]),o.find(g=>g.title===p.type).list.push(p)}),o}loadData(){this.loading||(this.loading=!0,setTimeout(()=>{let d=new Date;console.log(this.descTpl),this.data=this.updateNoticeData([{id:"000000001",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"\u4F60\u6536\u5230\u4E86 14 \u4EFD\u65B0\u5468\u62A5",datetime:Qo(d,{days:10}),type:"\u901A\u77E5"},{id:"000000002",avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"\u4F60\u63A8\u8350\u7684 \u66F2\u59AE\u59AE \u5DF2\u901A\u8FC7\u7B2C\u4E09\u8F6E\u9762\u8BD5",datetime:Qo(d,{days:-3}),type:"\u901A\u77E5"},{id:"000000003",avatar:"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",title:"\u8FD9\u79CD\u6A21\u677F\u53EF\u4EE5\u533A\u5206\u591A\u79CD\u901A\u77E5\u7C7B\u578B",datetime:Qo(d,{months:-3}),read:!0,type:"\u901A\u77E5"},{id:"000000004",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",datetime:Qo(d,{years:-1}),type:"\u901A\u77E5"},{id:"000000005",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"\u5185\u5BB9\u4E0D\u8981\u8D85\u8FC7\u4E24\u884C\u5B57\uFF0C\u8D85\u51FA\u65F6\u81EA\u52A8\u622A\u65AD",datetime:"2017-08-07",type:"\u901A\u77E5"},{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u66F2\u4E3D\u4E3D \u8BC4\u8BBA\u4E86\u4F60",description:"\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F",datetime:"2017-08-07",type:"\u6D88\u606F"},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u6731\u504F\u53F3 \u56DE\u590D\u4E86\u4F60",description:"\u8FD9\u79CD\u6A21\u677F\u7528\u4E8E\u63D0\u9192\u8C01\u4E0E\u4F60\u53D1\u751F\u4E86\u4E92\u52A8\uFF0C\u5DE6\u4FA7\u653E\u300E\u8C01\u300F\u7684\u5934\u50CF",datetime:"2017-08-07",type:"\u6D88\u606F"},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:this.titleTpl,description:this.descTpl,datetime:"2017-08-07",type:"\u6D88\u606F"},{id:"000000009",title:"\u4EFB\u52A1\u540D\u79F0",description:"\u4EFB\u52A1\u9700\u8981\u5728 2017-01-12 20:00 \u524D\u542F\u52A8",extra:"\u672A\u5F00\u59CB",status:"todo",type:"\u5F85\u529E"},{id:"000000010",title:"\u7B2C\u4E09\u65B9\u7D27\u6025\u4EE3\u7801\u53D8\u66F4",description:"\u51A0\u9716\u63D0\u4EA4\u4E8E 2017-01-06\uFF0C\u9700\u5728 2017-01-07 \u524D\u5B8C\u6210\u4EE3\u7801\u53D8\u66F4\u4EFB\u52A1",extra:"\u9A6C\u4E0A\u5230\u671F",status:"urgent",type:"\u5F85\u529E"},{id:"000000011",title:"\u4FE1\u606F\u5B89\u5168\u8003\u8BD5",description:"\u6307\u6D3E\u7AF9\u5C14\u4E8E 2017-01-09 \u524D\u5B8C\u6210\u66F4\u65B0\u5E76\u53D1\u5E03",extra:"\u5DF2\u8017\u65F6 8 \u5929",status:"doing",type:"\u5F85\u529E"},{id:"000000012",title:"ABCD \u7248\u672C\u53D1\u5E03",description:"\u51A0\u9716\u63D0\u4EA4\u4E8E 2017-01-06\uFF0C\u9700\u5728 2017-01-07 \u524D\u5B8C\u6210\u4EE3\u7801\u53D8\u66F4\u4EFB\u52A1",extra:"\u8FDB\u884C\u4E2D",status:"processing",type:"\u5F85\u529E"}]),this.loading=!1},500))}clear(d){this.msg.success(`\u6E05\u7A7A\u4E86 ${d}`)}select(d){this.msg.success(`\u70B9\u51FB\u4E86 ${d.title} \u7684 ${d.item.title}`)}showOK(){this.msg.info("ok")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-notice-icon-popover"]],viewQuery:function(o,i){if(o&1&&(rt(Mm,5),rt(Dm,5)),o&2){let p;q(p=G())&&(i.titleTpl=p.first),q(p=G())&&(i.descTpl=p.first)}},standalone:!0,features:[f],decls:12,vars:3,consts:[["titleTpl",""],["descTpl",""],[2,"text-align","right","height","64px","line-height","64px","box-shadow","rgba(0, 21, 41, 0.12) 0 1px 4px","padding","0 32px","width","400px"],[3,"select","clear","popoverVisibleChange","data","count","loading"],[3,"click"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"div",2),t(2,`
      `),r(3,"notice-icon",3),v("select",function(u){return y(p),x(i.select(u))})("clear",function(u){return y(p),x(i.clear(u))})("popoverVisibleChange",function(){return y(p),x(i.loadData())}),a(),t(4,`
      `),C(5,Nm,1,1,"ng-template",null,0,P),t(7,`
      `),C(8,Em,4,1,"ng-template",null,1,P),t(10,`
    `),a(),t(11,`
  `)}o&2&&(c(3),s("data",i.data)("count",i.count)("loading",i.loading))},dependencies:[Ho],encapsulation:2});let n=e;return n})();var ga=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/notice-icon/index.en-US.md","zh-CN":"packages/abc/notice-icon/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Used on the navigation toolbar as a unified notification center for the entire product.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="notice-icon"><a class="lake-link"><i data-anchor="notice-icon"></i></a>notice-icon<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[data]</code></td><td>Data</td><td><code><a data-toc="NoticeItem">NoticeItem</a>[]</code></td><td>-</td></tr><tr><td><code>[count]</code></td><td>Total number of messages on the icon</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[loading]</code></td><td>Pop up card loading status</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[centered]</code></td><td>Whether the tab is centered</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>(select)</code></td><td>Click the callback of the list item</td><td><code>EventEmitter<<a data-toc="NoticeIconSelect">NoticeIconSelect</a>></code></td><td>-</td></tr><tr><td><code>(clear)</code></td><td>Callback for clicking the clear button</td><td><code>EventEmitter&lt;string></code></td><td>-</td></tr><tr><td><code>[popoverVisible]</code></td><td>Manual control of Popover display</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>(popoverVisibleChange)</code></td><td>Popover callback</td><td><code>EventEmitter&lt;boolean></code></td><td>-</td></tr><tr><td><code>[btnClass]</code></td><td>Class of the button</td><td><code>ngClass</code></td><td>-</td></tr><tr><td><code>[btnIconClass]</code></td><td>Class of the icon in button</td><td><code>ngClass</code></td><td>-</td></tr></tbody></table><h3 id="NoticeItem"><a class="lake-link"><i data-anchor="NoticeItem"></i></a>NoticeItem</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>Title of the item</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[list]</code></td><td>List data of the item</td><td><code><a data-toc="NoticeIconList">NoticeIconList</a>[]</code></td><td>-</td></tr><tr><td><code>[emptyText]</code></td><td>Customize empty data copy for each tab</td><td><code>string | TemplateRef&lt;void></code></td><td><code>\u65E0\u901A\u77E5</code></td></tr><tr><td><code>[emptyImage]</code></td><td>Customize the empty data image for each Tab</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[clearText]</code></td><td>Clear button text for each Tab</td><td><code>string</code></td><td><code>\u6E05\u7A7A</code></td></tr></tbody></table><h3 id="NoticeIconList"><a class="lake-link"><i data-anchor="NoticeIconList"></i></a>NoticeIconList</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[avatar]</code></td><td>Avatar image link of the icon</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>Title of the icon</td><td><code>string | TemplateRef<{ $implicit: <a data-toc="NoticeIconList">NoticeIconList</a> }></code></td><td>-</td></tr><tr><td><code>[description]</code></td><td>Description of the icon</td><td><code>string | TemplateRef<{ $implicit: <a data-toc="NoticeIconList">NoticeIconList</a> }></code></td><td>-</td></tr><tr><td><code>[datetime]</code></td><td>Timestamp of the icon</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[extra]</code></td><td>Additional information, in the upper right corner of the icon</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[read]</code></td><td>Whether readed status of the item</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="NoticeIconSelect"><a class="lake-link"><i data-anchor="NoticeIconSelect"></i></a>NoticeIconSelect</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>Title of the select item</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[item]</code></td><td>Data of the select item</td><td><code><a data-toc="NoticeItem">NoticeItem</a></code></td><td>-</td></tr></tbody></table>',meta:{type:"Business",title:"notice-icon",subtitle:"Notification menu",cols:1,module:"import { NoticeIconModule } from '@delon/abc/notice-icon';"},toc:[{id:"API",title:"API",h:2,children:[{id:"notice-icon",title:"notice-icon:standalone",h:3},{id:"NoticeItem",title:"NoticeItem",h:3},{id:"NoticeIconList",title:"NoticeIconList",h:3},{id:"NoticeIconSelect",title:"NoticeIconSelect",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u7528\u5728\u5BFC\u822A\u5DE5\u5177\u680F\u4E0A\uFF0C\u4F5C\u4E3A\u6574\u4E2A\u4EA7\u54C1\u7EDF\u4E00\u7684\u901A\u77E5\u4E2D\u5FC3\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="notice-icon"><a class="lake-link"><i data-anchor="notice-icon"></i></a>notice-icon<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code><a data-toc="NoticeItem">NoticeItem</a>[]</code></td><td>-</td></tr><tr><td><code>[count]</code></td><td>\u56FE\u6807\u4E0A\u7684\u6D88\u606F\u603B\u6570</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[loading]</code></td><td>\u5F39\u51FA\u5361\u7247\u52A0\u8F7D\u72B6\u6001</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[centered]</code></td><td>\u6807\u7B7E\u9875\u662F\u5426\u5C45\u4E2D</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>(select)</code></td><td>\u70B9\u51FB\u5217\u8868\u9879\u7684\u56DE\u8C03</td><td><code>EventEmitter<<a data-toc="NoticeIconSelect">NoticeIconSelect</a>></code></td><td>-</td></tr><tr><td><code>(clear)</code></td><td>\u70B9\u51FB\u6E05\u7A7A\u6309\u94AE\u7684\u56DE\u8C03</td><td><code>EventEmitter&lt;string></code></td><td>-</td></tr><tr><td><code>[popoverVisible]</code></td><td>\u624B\u52A8\u63A7\u5236Popover\u663E\u793A</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>(popoverVisibleChange)</code></td><td>Popover\u663E\u9690\u56DE\u8C03</td><td><code>EventEmitter&lt;boolean></code></td><td>-</td></tr><tr><td><code>[btnClass]</code></td><td>\u6309\u94AE\u7C7B</td><td><code>ngClass</code></td><td>-</td></tr><tr><td><code>[btnIconClass]</code></td><td>Icon\u56FE\u6807\u7C7B</td><td><code>ngClass</code></td><td>-</td></tr></tbody></table><h3 id="NoticeItem"><a class="lake-link"><i data-anchor="NoticeItem"></i></a>NoticeItem</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[list]</code></td><td>\u5217\u8868\u6570\u636E\uFF0C\u683C\u5F0F\u53C2\u7167\u4E0B\u8868</td><td><code><a data-toc="NoticeIconList">NoticeIconList</a>[]</code></td><td>-</td></tr><tr><td><code>[emptyText]</code></td><td>\u9488\u5BF9\u6BCF\u4E2A Tab \u5B9A\u5236\u7A7A\u6570\u636E\u6587\u6848</td><td><code>string | TemplateRef&lt;void></code></td><td><code>\u65E0\u901A\u77E5</code></td></tr><tr><td><code>[emptyImage]</code></td><td>\u9488\u5BF9\u6BCF\u4E2A Tab \u5B9A\u5236\u7A7A\u6570\u636E\u56FE\u7247</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[clearText]</code></td><td>\u9488\u5BF9\u6BCF\u4E2A Tab \u6E05\u7A7A\u6309\u94AE\u6587\u672C</td><td><code>string</code></td><td><code>\u6E05\u7A7A</code></td></tr></tbody></table><h3 id="NoticeIconList"><a class="lake-link"><i data-anchor="NoticeIconList"></i></a>NoticeIconList</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[avatar]</code></td><td>\u5934\u50CF\u56FE\u7247\u94FE\u63A5</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>string | TemplateRef<{ $implicit: <a data-toc="NoticeIconList">NoticeIconList</a> }></code></td><td>-</td></tr><tr><td><code>[description]</code></td><td>\u63CF\u8FF0\u4FE1\u606F</td><td><code>string | TemplateRef<{ $implicit: <a data-toc="NoticeIconList">NoticeIconList</a> }></code></td><td>-</td></tr><tr><td><code>[datetime]</code></td><td>\u65F6\u95F4\u6233</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[extra]</code></td><td>\u989D\u5916\u4FE1\u606F\uFF0C\u5728\u5217\u8868\u9879\u53F3\u4E0A\u89D2</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[read]</code></td><td>\u662F\u5426\u5DF2\u8BFB\u72B6\u6001</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="NoticeIconSelect"><a class="lake-link"><i data-anchor="NoticeIconSelect"></i></a>NoticeIconSelect</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[item]</code></td><td>\u6570\u636E\u9879</td><td><code><a data-toc="NoticeItem">NoticeItem</a></code></td><td>-</td></tr></tbody></table>',meta:{type:"Business",title:"notice-icon",subtitle:"\u901A\u77E5\u83DC\u5355",cols:1,module:"import { NoticeIconModule } from '@delon/abc/notice-icon';"},toc:[{id:"API",title:"API",h:2,children:[{id:"notice-icon",title:"notice-icon:standalone",h:3},{id:"NoticeItem",title:"NoticeItem",h:3},{id:"NoticeIconList",title:"NoticeIconList",h:3},{id:"NoticeIconSelect",title:"NoticeIconSelect",h:3}]}]}},demo:!0},this.codes=[{id:"components-notice-icon-basic",meta:{order:1,title:"\u901A\u77E5\u56FE\u6807"},summary:"<p>\u901A\u5E38\u7528\u5728\u5BFC\u822A\u5DE5\u5177\u680F\u4E0A\u3002</p>",code:`import { Component } from '@angular/core';

import { NoticeIconComponent } from '@delon/abc/notice-icon';

@Component({
  selector: 'components-notice-icon-basic',
  template: \` <notice-icon count="5" /> \`,
  standalone: true,
  imports: [NoticeIconComponent]
})
export class ComponentsNoticeIconBasicComponent {}`,lang:"ts",componentName:"ComponentsNoticeIconBasicComponent",point:0,name:"basic",urls:"packages/abc/notice-icon/demo/basic.md",type:"demo"},{id:"components-notice-icon-popover",meta:{order:1,title:"\u5E26\u6D6E\u5C42\u5361\u7247"},summary:"<p>\u70B9\u51FB\u5C55\u5F00\u901A\u77E5\u5361\u7247\uFF0C\u5C55\u73B0\u591A\u79CD\u7C7B\u578B\u7684\u901A\u77E5\uFF0C\u901A\u5E38\u653E\u5728\u5BFC\u822A\u5DE5\u5177\u680F\u3002</p>",code:`import { Component, TemplateRef, ViewChild, inject } from '@angular/core';

import { add, formatDistanceToNow, parse } from 'date-fns';

import { NoticeIconList, NoticeIconComponent, NoticeIconSelect, NoticeItem } from '@delon/abc/notice-icon';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'components-notice-icon-popover',
  template: \`
    <div
      style="text-align: right; height: 64px; line-height: 64px; box-shadow: rgba(0, 21, 41, 0.12) 0 1px 4px; padding: 0 32px; width: 400px;"
    >
      <notice-icon
        [data]="data"
        [count]="count"
        [loading]="loading"
        (select)="select($event)"
        (clear)="clear($event)"
        (popoverVisibleChange)="loadData()"
      />
      <ng-template #titleTpl let-i> {{ i.id }} Title By NgTemplate </ng-template>
      <ng-template #descTpl let-i>
        <a (click)="showOK()">{{ i.id }}</a>
        Descriptioin By NgTemplate
      </ng-template>
    </div>
  \`,
  standalone: true,
  imports: [NoticeIconComponent]
})
export class ComponentsNoticeIconPopoverComponent {
  private readonly msg = inject(NzMessageService);
  private readonly nzI18n = inject(NzI18nService);

  @ViewChild('titleTpl') private titleTpl!: TemplateRef<{ $implicit: NoticeIconList }>;
  @ViewChild('descTpl') private descTpl!: TemplateRef<{ $implicit: NoticeIconList }>;
  data: NoticeItem[] = [
    {
      title: '\u901A\u77E5',
      list: [],
      emptyText: '\u4F60\u5DF2\u67E5\u770B\u6240\u6709\u901A\u77E5',
      emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
      clearText: '\u6E05\u7A7A\u901A\u77E5'
    },
    {
      title: '\u6D88\u606F',
      list: [],
      emptyText: '\u60A8\u5DF2\u8BFB\u5B8C\u6240\u6709\u6D88\u606F',
      emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg',
      clearText: '\u6E05\u7A7A\u6D88\u606F'
    },
    {
      title: '\u5F85\u529E',
      list: [],
      emptyText: '\u4F60\u5DF2\u5B8C\u6210\u6240\u6709\u5F85\u529E',
      emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg',
      clearText: '\u6E05\u7A7A\u5F85\u529E'
    }
  ];
  count = 5;
  loading = false;

  updateNoticeData(notices: NoticeIconList[]): NoticeItem[] {
    const data = this.data.slice();
    data.forEach(i => (i.list = []));

    notices.forEach(item => {
      const newItem = { ...item };
      if (typeof newItem.datetime === 'string') {
        newItem.datetime = parse(newItem.datetime, 'yyyy-MM-dd', new Date());
      }
      if (newItem.datetime) {
        newItem.datetime = formatDistanceToNow(newItem.datetime as Date, { locale: this.nzI18n.getDateLocale() });
      }
      if (newItem.extra && newItem.status) {
        newItem.color = (
          {
            todo: undefined,
            processing: 'blue',
            urgent: 'red',
            doing: 'gold'
          } as { [key: string]: string | undefined }
        )[newItem.status];
      }
      data.find(w => w.title === newItem.type)!.list.push(newItem);
    });
    return data;
  }

  loadData(): void {
    if (this.loading) return;
    this.loading = true;
    setTimeout(() => {
      const now = new Date();
      console.log(this.descTpl);
      this.data = this.updateNoticeData([
        {
          id: '000000001',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          title: '\u4F60\u6536\u5230\u4E86 14 \u4EFD\u65B0\u5468\u62A5',
          datetime: add(now, { days: 10 }),
          type: '\u901A\u77E5'
        },
        {
          id: '000000002',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
          title: '\u4F60\u63A8\u8350\u7684 \u66F2\u59AE\u59AE \u5DF2\u901A\u8FC7\u7B2C\u4E09\u8F6E\u9762\u8BD5',
          datetime: add(now, { days: -3 }),
          type: '\u901A\u77E5'
        },
        {
          id: '000000003',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
          title: '\u8FD9\u79CD\u6A21\u677F\u53EF\u4EE5\u533A\u5206\u591A\u79CD\u901A\u77E5\u7C7B\u578B',
          datetime: add(now, { months: -3 }),
          read: true,
          type: '\u901A\u77E5'
        },
        {
          id: '000000004',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
          title: '\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B',
          datetime: add(now, { years: -1 }),
          type: '\u901A\u77E5'
        },
        {
          id: '000000005',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          title: '\u5185\u5BB9\u4E0D\u8981\u8D85\u8FC7\u4E24\u884C\u5B57\uFF0C\u8D85\u51FA\u65F6\u81EA\u52A8\u622A\u65AD',
          datetime: '2017-08-07',
          type: '\u901A\u77E5'
        },
        {
          id: '000000006',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
          title: '\u66F2\u4E3D\u4E3D \u8BC4\u8BBA\u4E86\u4F60',
          description: '\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F',
          datetime: '2017-08-07',
          type: '\u6D88\u606F'
        },
        {
          id: '000000007',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
          title: '\u6731\u504F\u53F3 \u56DE\u590D\u4E86\u4F60',
          description: '\u8FD9\u79CD\u6A21\u677F\u7528\u4E8E\u63D0\u9192\u8C01\u4E0E\u4F60\u53D1\u751F\u4E86\u4E92\u52A8\uFF0C\u5DE6\u4FA7\u653E\u300E\u8C01\u300F\u7684\u5934\u50CF',
          datetime: '2017-08-07',
          type: '\u6D88\u606F'
        },
        {
          id: '000000008',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
          title: this.titleTpl,
          description: this.descTpl,
          datetime: '2017-08-07',
          type: '\u6D88\u606F'
        },
        {
          id: '000000009',
          title: '\u4EFB\u52A1\u540D\u79F0',
          description: '\u4EFB\u52A1\u9700\u8981\u5728 2017-01-12 20:00 \u524D\u542F\u52A8',
          extra: '\u672A\u5F00\u59CB',
          status: 'todo',
          type: '\u5F85\u529E'
        },
        {
          id: '000000010',
          title: '\u7B2C\u4E09\u65B9\u7D27\u6025\u4EE3\u7801\u53D8\u66F4',
          description: '\u51A0\u9716\u63D0\u4EA4\u4E8E 2017-01-06\uFF0C\u9700\u5728 2017-01-07 \u524D\u5B8C\u6210\u4EE3\u7801\u53D8\u66F4\u4EFB\u52A1',
          extra: '\u9A6C\u4E0A\u5230\u671F',
          status: 'urgent',
          type: '\u5F85\u529E'
        },
        {
          id: '000000011',
          title: '\u4FE1\u606F\u5B89\u5168\u8003\u8BD5',
          description: '\u6307\u6D3E\u7AF9\u5C14\u4E8E 2017-01-09 \u524D\u5B8C\u6210\u66F4\u65B0\u5E76\u53D1\u5E03',
          extra: '\u5DF2\u8017\u65F6 8 \u5929',
          status: 'doing',
          type: '\u5F85\u529E'
        },
        {
          id: '000000012',
          title: 'ABCD \u7248\u672C\u53D1\u5E03',
          description: '\u51A0\u9716\u63D0\u4EA4\u4E8E 2017-01-06\uFF0C\u9700\u5728 2017-01-07 \u524D\u5B8C\u6210\u4EE3\u7801\u53D8\u66F4\u4EFB\u52A1',
          extra: '\u8FDB\u884C\u4E2D',
          status: 'processing',
          type: '\u5F85\u529E'
        }
      ]);

      this.loading = false;
    }, 500);
  }

  clear(type: string): void {
    this.msg.success(\`\u6E05\u7A7A\u4E86 \${type}\`);
  }

  select(res: NoticeIconSelect): void {
    this.msg.success(\`\u70B9\u51FB\u4E86 \${res.title} \u7684 \${res.item.title}\`);
  }

  showOK(): void {
    this.msg.info(\`ok\`);
  }
}`,lang:"ts",componentName:"ComponentsNoticeIconPopoverComponent",point:1,name:"popover",urls:"packages/abc/notice-icon/demo/popover.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-notice-icon"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-notice-icon-basic"),t(7,`
        `),a(),t(8,`
      
        `),r(9,"code-box",3),t(10,`
          `),m(11,"components-notice-icon-popover"),t(12,`
        `),a(),t(13,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id),c(5),s("item",i.codes[1]),T("id",i.codes[1].id))},dependencies:[j,H,ha,fa,B,R,F],encapsulation:2});let n=e;return n})();var Im=(()=>{let e=class e{constructor(){this._observedElements=new Map}ngOnDestroy(){this._observedElements.forEach((d,o)=>this._cleanupObserver(o))}observe(d){return new Si(o=>{let p=this._observeElement(d).subscribe(o);return()=>{p.unsubscribe(),this._unobserveElement(d)}})}_observeElement(d){if(this._observedElements.has(d))this._observedElements.get(d).count++;else{let o=new Yt,i=null;typeof MutationObserver<"u"&&(i=new MutationObserver(p=>o.next(p)),i.observe(d,{attributes:!0,attributeOldValue:!0,attributeFilter:["width","height","style"]})),this._observedElements.set(d,{observer:i,stream:o,count:1})}return this._observedElements.get(d).stream}_unobserveElement(d){this._observedElements.has(d)&&(this._observedElements.get(d).count--,this._observedElements.get(d).count||this._cleanupObserver(d))}_cleanupObserver(d){if(this._observedElements.has(d)){let{observer:o,stream:i}=this._observedElements.get(d);o&&o.disconnect(),i.complete(),this._observedElements.delete(d)}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=ce({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),ba=(()=>{let e=class e{constructor(){this._obs=S(Im),this.el=S(xt).nativeElement,this.ngZone=S(Jt),this._sub$=null,this.event=new wt}ngAfterViewInit(){this._sub$||this._sub()}_sub(){this._unsub();let d=this._obs.observe(this.el);this.ngZone.runOutsideAngular(()=>{this._sub$=d.subscribe(this.event)})}_unsub(){this._sub$?.unsubscribe()}ngOnDestroy(){this._unsub()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275dir=fe({type:e,selectors:[["","observeSize",""]],outputs:{event:"observeSize"},exportAs:["observeSize"],standalone:!0});let n=e;return n})();var Ca=(()=>{let e=class e{constructor(){this.width=200,this.option={tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[{name:"Pressure",type:"gauge",detail:{formatter:"{value}"},data:[{value:50,name:"SCORE"}]}]}}handleEvents(d){console.log(d)}addWidth(){this.width+=100}reduceWidth(){this.width-=100}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-observers-basic"]],standalone:!0,features:[f],decls:16,vars:3,consts:[["echart",""],[1,"mb-md"],["nz-button","",3,"click"],[3,"observeSize"],[3,"events","option"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"div",1),t(2,`
      `),r(3,"button",2),v("click",function(){return y(p),x(i.addWidth())}),t(4,"Add width of div element"),a(),t(5,`
      `),r(6,"button",2),v("click",function(){return y(p),x(i.reduceWidth())}),t(7,"Reduce width of div element"),a(),t(8,`
    `),a(),t(9,`
    `),r(10,"div",3),v("observeSize",function(){y(p);let u=_(13);return x(u==null||u.chart==null?null:u.chart.resize())}),t(11,`
      `),r(12,"chart-echarts",4,0),v("events",function(u){return y(p),x(i.handleEvents(u))}),a(),t(14,`
    `),a(),t(15,`
  `)}o&2&&(c(10),Rt("width",i.width,"px"),c(2),s("option",i.option))},dependencies:[I,D,N,E,Hd,jd,ba],encapsulation:2});let n=e;return n})();var ya=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/observers/index.en-US.md","zh-CN":"packages/abc/observers/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>The <code>ObserversModule</code> package provides convenience directives built on top of native web platform observers, such as <code>MutationObserver</code>.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="observeSize"><a class="lake-link"><i data-anchor="observeSize"></i></a>observeSize<label class="api-type-label directive">directive</label><label class="api-type-label standalone">standalone</label></h3><p>Watch the DOM size change.</p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>(observeSize)</code></td><td>Event</td><td><code>MutationRecord[]</code></td><td>-</td><td></td></tr></tbody></table>',meta:{type:"Basic",title:"Observers",order:7,module:"import { ObserversModule } from '@delon/abc/observers';"},toc:[{id:"API",title:"API",h:2,children:[{id:"observeSize",title:"observeSize:standalone",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p><code>ObserversModule</code> \u5305\u63D0\u4F9B\u4E86\u57FA\u4E8E\u539F\u751F Web \u5E73\u53F0\u7684\u89C2\u5BDF\u8005 API\uFF08\u6BD4\u5982 <code>MutationObserver</code>\uFF09 \u7684\u4FBF\u6377\u6307\u4EE4\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="observeSize"><a class="lake-link"><i data-anchor="observeSize"></i></a>observeSize<label class="api-type-label directive">directive</label><label class="api-type-label standalone">standalone</label></h3><p>\u89C2\u5BDFDOM\u5927\u5C0F\u53D8\u5316\u3002</p><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>(observeSize)</code></td><td>\u4E8B\u4EF6</td><td><code>MutationRecord[]</code></td><td>-</td><td></td></tr></tbody></table>',meta:{type:"Basic",title:"Observers",subtitle:"\u89C2\u5BDF\u8005",order:7,module:"import { ObserversModule } from '@delon/abc/observers';"},toc:[{id:"API",title:"API",h:2,children:[{id:"observeSize",title:"observeSize:standalone",h:3}]}]}},demo:!0},this.codes=[{id:"components-observers-basic",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';

import { ObserverSize } from '@delon/abc/observers';
import { ChartEChartsEvent, ChartEChartsModule, ChartEChartsOption } from '@delon/chart/chart-echarts';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-observers-basic',
  template: \`
    <div class="mb-md">
      <button nz-button (click)="addWidth()">Add width of div element</button>
      <button nz-button (click)="reduceWidth()">Reduce width of div element</button>
    </div>
    <div (observeSize)="echart?.chart?.resize()" [style.width.px]="width">
      <chart-echarts #echart [option]="option" (events)="handleEvents($event)" />
    </div>
  \`,
  standalone: true,
  imports: [NzButtonModule, ChartEChartsModule, ObserverSize]
})
export class ComponentsObserversBasicComponent {
  width = 200;

  option: ChartEChartsOption = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        detail: {
          formatter: '{value}'
        },
        data: [
          {
            value: 50,
            name: 'SCORE'
          }
        ]
      }
    ]
  };

  handleEvents(ev: ChartEChartsEvent): void {
    console.log(ev);
  }

  addWidth(): void {
    this.width += 100;
  }

  reduceWidth(): void {
    this.width -= 100;
  }
}`,lang:"ts",componentName:"ComponentsObserversBasicComponent",point:0,name:"basic",urls:"packages/abc/observers/demo/basic.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-observers"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-observers-basic"),t(7,`
        `),a(),t(8,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id))},dependencies:[j,H,Ca,B,R,F],encapsulation:2});let n=e;return n})();var Pm=["popover"],Fm=(n,e)=>({"max-width.px":n,direction:e});function Rm(n,e){if(n&1){let l=w();r(0,"div",3),v("click",function(){y(l);let o=b();return x(o.handleMask())}),a()}}function Am(n,e){if(n&1&&(it(0),m(1,"div",13),dt()),n&2){let l=b(3);c(),s("innerHTML",l.item.content,jt)}}function Bm(n,e){if(n&1&&t(0),n&2){let l=b(3);bo(" ",l.active+1,"/",l.max," ")}}function Vm(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(4);c(),V(l.item.skip)}}function Lm(n,e){if(n&1){let l=w();r(0,"a",14),v("click",function(){y(l);let o=b(3);return x(o.to("skip"))}),C(1,Vm,2,1,"ng-container",5),a()}if(n&2){let l=b(3);c(),s("nzStringTemplateOutlet",l.item.skip)}}function Om(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(4);c(),V(l.item.prev)}}function jm(n,e){if(n&1){let l=w();r(0,"a",15),v("click",function(){y(l);let o=b(3);return x(o.to("prev"))}),C(1,Om,2,1,"ng-container",5),a()}if(n&2){let l=b(3);c(),s("nzStringTemplateOutlet",l.item.prev)}}function Hm(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(4);c(),V(l.item.next)}}function Wm(n,e){if(n&1){let l=w();r(0,"a",16),v("click",function(){y(l);let o=b(3);return x(o.to("next"))}),C(1,Hm,2,1,"ng-container",5),a()}if(n&2){let l=b(3);c(),s("nzStringTemplateOutlet",l.item.next)}}function Um(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(4);c(),V(l.item.done)}}function qm(n,e){if(n&1){let l=w();r(0,"a",17),v("click",function(){y(l);let o=b(3);return x(o.to("done"))}),C(1,Um,2,1,"ng-container",5),a()}if(n&2){let l=b(3);c(),s("nzStringTemplateOutlet",l.item.done)}}function Gm(n,e){if(n&1&&(C(0,Am,2,1,"ng-container",5),r(1,"div",6)(2,"span",7),C(3,Bm,1,2),a(),r(4,"div",8),C(5,Lm,2,1,"a",9)(6,jm,2,1,"a",10)(7,Wm,2,1,"a",11)(8,qm,2,1,"a",12),a()()),n&2){let l=b(2);s("nzStringTemplateOutlet",l.item.content),c(3),M(l.config.showTotal?3:-1),c(2),M(!l.last&&l.item.skip!==null&&l.item.skip!==void 0?5:-1),c(),M(!l.first&&l.item.prev!==null?6:-1),c(),M(!l.last&&l.item.next!==null&&l.item.next!==void 0?7:-1),c(),M(l.last&&l.item.done!==null&&l.item.done!==void 0?8:-1)}}function $m(n,e){if(n&1&&(m(0,"div",4,0),C(2,Gm,9,6,"ng-template",null,1,P)),n&2){let l=_(3),d=b();k("onboarding__light-hide",d.running),s("nzPopoverTitle",d.item.title)("nzPopoverContent",l)("nzPopoverVisible",!d.running)("nzPopoverTrigger",null)("nzPopoverPlacement",d.item.position)("nzPopoverOverlayClassName",d.item.className)("nzPopoverOverlayStyle",Be(11,Fm,d.item.width,d.dir))("nzNoAnimation",!0),T("style",d.item.lightStyle,Mi)}}var li=(()=>{let e=class e{constructor(){this.el=S(xt).nativeElement,this.platform=S(pe),this.cdr=S(lt),this.doc=S(be),this.active=0,this.max=0,this.op=new wt,this.running=!1,this.dir="ltr"}get first(){return this.active===0}get last(){return this.active===this.max-1}_getDoc(){return this.doc}_getWin(){return this._getDoc().defaultView||window}getLightData(){let d=this._getDoc(),o=this._getWin(),i=d.querySelector(this.item.selectors);if(!i)return null;let p=o.scrollY||d.documentElement.scrollTop||d.body.scrollTop,g=o.scrollX||d.documentElement.scrollLeft||d.body.scrollLeft,u=i.getBoundingClientRect(),K=u.top+p,W=u.left+g,bt=8,_t=K>bt&&W>bt,Zt=_t?bt:0,Ut=_t?bt*2:0;return{top:K-Zt,left:W-Zt,width:u.width+Ut,height:u.height+Ut,el:i,clientWidth:d.body.clientWidth,clientHeight:d.body.clientHeight}}ngAfterViewInit(){this.popover.component.onClickOutside=()=>{}}scroll(d){this.prevSelectorEl=d.el;let o=d.top-(d.clientHeight-d.height)/2;this._getWin().scrollTo({top:o}),this.updatePrevElStatus(!0)}updateRunning(d){this.running=d,this.cdr.detectChanges(),d||this.updatePosition()}updatePosition(){if(!this.platform.isBrowser)return;let d=this.getLightData();if(d==null)return;let o=this.el.querySelector(".onboarding__light").style;o.top=`${d.top}px`,o.left=`${d.left}px`,o.width=`${d.width}px`,o.height=`${d.height}px`,this.updatePrevElStatus(!1),this.scroll(d)}updatePrevElStatus(d){this.prevSelectorEl&&this.prevSelectorEl.classList[d?"add":"remove"]("onboarding__light-el")}to(d){this.op.emit(d)}handleMask(){this.config.maskClosable===!0&&(this.popover.component.hide(),this.to("done"))}ngOnDestroy(){clearTimeout(this.time),this.updatePrevElStatus(!1)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["onboarding"]],viewQuery:function(o,i){if(o&1&&rt(Pm,5),o&2){let p;q(p=G())&&(i.popover=p.first)}},hostVars:5,hostBindings:function(o,i){o&2&&(T("data-onboarding-active",i.active),k("onboarding",!0)("onboarding-rtl",i.dir==="rtl"))},standalone:!0,features:[f],decls:2,vars:2,consts:[["popover","nzPopover"],["content",""],[1,"onboarding__mask"],[1,"onboarding__mask",3,"click"],["nz-popover","",1,"onboarding__light",3,"nzPopoverTitle","nzPopoverContent","nzPopoverVisible","nzPopoverTrigger","nzPopoverPlacement","nzPopoverOverlayClassName","nzPopoverOverlayStyle","nzNoAnimation"],[4,"nzStringTemplateOutlet"],[1,"flex-center-between","onboarding__footer"],[1,"onboarding__total"],[1,"onboarding__btns"],["nz-button","","nzType","link","nzSize","small","data-btnType","skip"],["nz-button","","nzSize","small","data-btnType","prev"],["nz-button","","nzType","primary","nzSize","small","data-btnType","next"],["nz-button","","nzType","primary","nzSize","small","data-btnType","done"],[3,"innerHTML"],["nz-button","","nzType","link","nzSize","small","data-btnType","skip",3,"click"],["nz-button","","nzSize","small","data-btnType","prev",3,"click"],["nz-button","","nzType","primary","nzSize","small","data-btnType","next",3,"click"],["nz-button","","nzType","primary","nzSize","small","data-btnType","done",3,"click"]],template:function(o,i){o&1&&C(0,Rm,1,0,"div",2)(1,$m,4,14),o&2&&(M(!i.running&&i.config.mask?0:-1),c(),M(i.item?1:-1))},dependencies:[Id,Bt,D,ed],encapsulation:2,changeDetection:0});let n=e;return n})();var xa=new pn("ONBOARDING_STORE_TOKEN",{providedIn:"root",factory:Qm});function Qm(){return new ci}var ci=class{get(e){return localStorage.getItem(e)}set(e,l){localStorage.setItem(e,`${l}`)}};var On=(()=>{let e=class e{constructor(){this.i18n=S(qe),this.appRef=S(Pi),this.router=S(hn),this.doc=S(be),this.configSrv=S(At),this.keyStoreSrv=S(xa),this.directionality=S(qt),this.active=0,this.running$=null,this._running=!1,this.type=null}_getDoc(){return this.doc}get running(){return this._running}attach(){let d=Ri(li,{environmentInjector:this.appRef.injector});this.compRef=d,this.appRef.attachView(d.hostView);let o=d.hostView.rootNodes[0],i=this._getDoc(),p=i.querySelector(".cdk-overlay-container");p?i.body.insertBefore(o,p):i.body.appendChild(o),this.op$=this.compRef.instance.op.subscribe(g=>{switch(g){case"next":this.next();break;case"prev":this.prev();break;default:this.done();break}})}cancelRunning(){return this.running$&&(this.running$.unsubscribe(),this.running$=null),this}updateRunning(d){return this._running=d,this.compRef.instance.updateRunning(d),this}destroy(){let d=this.config?.key;d!=null&&this.keyStoreSrv.set(d,this.config?.keyVersion),this.cancelRunning(),this.compRef&&(this.appRef.detachView(this.compRef.hostView),this.compRef.destroy(),this.op$.unsubscribe())}showItem(d=!1){let o=this.config?.items,i=yt(yt({position:"bottomLeft",before:le(!0),after:le(!0)},this.i18n.getData("onboarding")),o[this.active]),p=this.configSrv.get("onboarding").direction||this.directionality.value;Object.assign(this.compRef.instance,{item:i,config:this.config,active:this.active,max:o.length,dir:p});let g=[Gn(()=>i.url?this.router.navigateByUrl(i.url):le(!0)),Gn(()=>{let u=this.type==="prev"?i.after:i.before;return typeof u=="number"?le(!0).pipe(lo(u)):u})];d||g.push(lo(1)),this.updateRunning(!0),this.running$=le(!0).pipe(vi.apply(this,g)).subscribe({next:()=>this.cancelRunning().updateRunning(!1),error:()=>this.done()})}start(d){let o=yt({keyVersion:"",items:[],mask:!0,maskClosable:!0,showTotal:!1},d),i=o?.key;i!=null&&this.keyStoreSrv.get(i)===o.keyVersion||this.running||(this.destroy(),this.config=o,this.active=0,this.type=null,this.attach(),this.showItem(!0))}next(){if(this._running||this.active+1>=this.config.items.length){this.done();return}this.type="next",++this.active,this.showItem()}prev(){this._running||this.active-1<0||(this.type="prev",--this.active,this.showItem())}done(){this.type="done",this.destroy()}ngOnDestroy(){this.destroy()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=ce({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var va=(()=>{let e=class e{constructor(){this.msg=S(vt),this.srv=S(On),this.http=S(fn),this.def={items:[{selectors:".test1-1",content:"The user guidance is to help users better understand and use the product",width:300},{selectors:".test1-2",title:"Test2",content:"The user guidance is to help users better understand and use the product"},{selectors:".test1-3",title:"Test3",content:"The user guidance is to help users better understand and use the product"}]}}handleClick(){this.msg.info("click")}start(){this.srv.start(yt({},this.def))}viaHttp(){this.http.get("./assets/schema/onboarding.json").subscribe(d=>{console.log(d),this.srv.start(d)})}startOnce(){this.srv.start(bi(yt({},this.def),{key:"obs-once"}))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-onboarding-basic"]],standalone:!0,features:[f],decls:25,vars:0,consts:[[1,"mb-md","pb-md","border-bottom-1"],["nz-button","","nzType","primary",1,"test1-1",3,"click"],["nz-button","","nzType","link",1,"test1-2"],["nz-button","","nzType","dashed",1,"test1-3"],["nz-button","",3,"click"],["href","https://github.com/ng-alain/delon/blob/master/src/assets/schema/onboarding.json","target","_blank",1,"ml-md"]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"div",0),t(2,`
      `),r(3,"button",1),v("click",function(){return i.handleClick()}),t(4,"First Button"),a(),t(5,`
      `),r(6,"button",2),t(7,"Second Button"),a(),t(8,`
      `),r(9,"button",3),t(10,"Third Button"),a(),t(11,`
    `),a(),t(12,`
    `),r(13,"button",4),v("click",function(){return i.start()}),t(14,"Start"),a(),t(15,`
    `),r(16,"button",4),v("click",function(){return i.startOnce()}),t(17,"Start Once (Set 'key')"),a(),t(18,`
    `),r(19,"button",4),v("click",function(){return i.viaHttp()}),t(20,"Start Via Http"),a(),t(21,`
    `),r(22,"a",5),t(23,`
      onboarding.json
    `),a(),t(24,`
  `))},dependencies:[I,D,N,E],encapsulation:2});let n=e;return n})();var Sa=(()=>{let e=class e{constructor(){this.srv=S(On)}start(){this.srv.start({items:[{selectors:".test2-1",content:"The user guidance is to help users better understand and use the product",next:"Go to home",width:300,url:"/components/onboarding"},{selectors:".page-banner__slogan",content:'ng-alain is an MIT-licensed open source project. In order to achieve better and sustainable development of the project, we expect to gain more backers. You can support us in any of the following ways, Or purchasing our <a href="https://e.ng-alain.com/" target="_blank">business theme</a>',width:300,url:"/",before:200},{selectors:".test2-3",title:"Test3",content:"The user guidance is to help users better understand and use the product",url:"/components/onboarding"}]})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-onboarding-multiple-pages"]],standalone:!0,features:[f],decls:13,vars:0,consts:[[1,"mb-md","pb-md","border-bottom-1"],["nz-button","","nzType","primary",1,"test2-1"],["nz-button","","nzType","dashed",1,"test2-3"],["nz-button","",3,"click"]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"div",0),t(2,`
      `),r(3,"button",1),t(4,"First Button"),a(),t(5,`
      `),r(6,"button",2),t(7,"Third Button"),a(),t(8,`
    `),a(),t(9,`
    `),r(10,"button",3),v("click",function(){return i.start()}),t(11,"Start"),a(),t(12,`
  `))},dependencies:[I,D,N,E],encapsulation:2});let n=e;return n})();var za=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/onboarding/index.en-US.md","zh-CN":"packages/abc/onboarding/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>The user guidance is to help users better understand and use the product.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="OnboardingService"><a class="lake-link"><i data-anchor="OnboardingService"></i></a>OnboardingService</h3><p>The components only support the use of <code>OnboardingService</code> service to build.</p><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>start(data: <a data-toc="OnboardingData">OnboardingData</a>)</code></td><td>Start a new user guidance</td></tr><tr><td><code>next()</code></td><td>Next</td></tr><tr><td><code>prev()</code></td><td>Prev</td></tr><tr><td><code>done()</code></td><td>Done</td></tr></tbody></table><h3 id="OnboardingData"><a class="lake-link"><i data-anchor="OnboardingData"></i></a>OnboardingData</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[key]</code></td><td>Storage identification Key, The default is <code>localStorage</code> local storage, allowing the use of <code>ONBOARDING_STORE_TOKEN</code> to change the storage method</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[keyVersion]</code></td><td>Current version</td><td><code>unknown</code></td><td>-</td></tr><tr><td><code>[items]</code></td><td>Onboarding items</td><td><code><a data-toc="OnboardingItem">OnboardingItem</a>[]</code></td><td><code>[]</code></td></tr><tr><td><code>[mask]</code></td><td>Whether to show mask or not</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[maskClosable]</code></td><td>Clicking on the mask (area outside the onboarding) to close the onboarding or not</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[showTotal]</code></td><td>Whether to show total</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="OnboardingItem"><a class="lake-link"><i data-anchor="OnboardingItem"></i></a>OnboardingItem</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[selectors]</code></td><td>The CSS selector, which identifies the html element you want to describe</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[position]</code></td><td>Positioning of the selector element, relative to the contents of the children</td><td><code>top, left, right, bottom, topLeft, topRight, bottomLeft, bottomRight, leftTop, leftBottom, rightTop, rightBottom</code></td><td><code>bottomLeft</code></td></tr><tr><td><code>[className]</code></td><td>Class name of the panel</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[width]</code></td><td>Width of the panel</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>Headline text of the panel</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[content]</code></td><td>Detail text of the panel</td><td><code>string, SafeHtml, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[skip]</code></td><td>Skip button of the panel, <code>null</code> Don't show</td><td><code>string, TemplateRef&lt;void>, null</code></td><td><code>Skip</code></td></tr><tr><td><code>[prev]</code></td><td>Prev button of the panel, <code>null</code> Don't show</td><td><code>string, TemplateRef&lt;void>, null</code></td><td><code>Prev</code></td></tr><tr><td><code>[next]</code></td><td>Next button of the panel, <code>null</code> Don't show</td><td><code>string, TemplateRef&lt;void>, null</code></td><td><code>Next</code></td></tr><tr><td><code>[done]</code></td><td>Done button of the panel, <code>null</code> Don't show</td><td><code>string, TemplateRef&lt;void>, null</code></td><td><code>Done</code></td></tr><tr><td><code>[url]</code></td><td>Target router url</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[before]</code></td><td>Callback before entering, triggered when call <code>next</code> operates, <code>number</code> indicate delay</td><td><code>Observable&lt;any>, number</code></td><td>-</td></tr><tr><td><code>[after]</code></td><td>Callback after entering, triggered when call <code>prev</code> operates, <code>number</code> indicate delay</td><td><code>Observable&lt;any>, number</code></td><td>-</td></tr></tbody></table>`,meta:{type:"Basic",title:"onboarding",subtitle:"Onboarding",order:7,module:"import { OnboardingModule } from '@delon/abc/onboarding';"},toc:[{id:"API",title:"API",h:2,children:[{id:"OnboardingService",title:"OnboardingService",h:3},{id:"OnboardingData",title:"OnboardingData",h:3},{id:"OnboardingItem",title:"OnboardingItem",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u7528\u6237\u5F15\u5BFC\u6D41\u7A0B\uFF0C\u662F\u5E2E\u52A9\u7528\u6237\u66F4\u597D\u7684\u7406\u89E3\u548C\u4F7F\u7528\u4EA7\u54C1\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="OnboardingService"><a class="lake-link"><i data-anchor="OnboardingService"></i></a>OnboardingService</h3><p>\u7EC4\u4EF6\u53EA\u652F\u6301\u4F7F\u7528 <code>OnboardingService</code> \u670D\u52A1\u6765\u6784\u5EFA\u3002</p><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>start(data: <a data-toc="OnboardingData">OnboardingData</a>)</code></td><td>\u5F00\u542F\u65B0\u7684\u7528\u6237\u5F15\u5BFC\u6D41\u7A0B</td></tr><tr><td><code>next()</code></td><td>\u4E0B\u4E00\u9879</td></tr><tr><td><code>prev()</code></td><td>\u4E0A\u4E00\u9879</td></tr><tr><td><code>done()</code></td><td>\u5B8C\u6210</td></tr></tbody></table><h3 id="OnboardingData"><a class="lake-link"><i data-anchor="OnboardingData"></i></a>OnboardingData</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[key]</code></td><td>\u5B58\u50A8\u6807\u8BC6Key\uFF1B\u9ED8\u8BA4 <code>localStorage</code> \u672C\u5730\u5B58\u50A8\uFF0C\u5141\u8BB8\u4F7F\u7528 <code>ONBOARDING_STORE_TOKEN</code> \u53D8\u66F4\u5B58\u50A8\u65B9\u5F0F</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[keyVersion]</code></td><td>\u5F53\u524D\u7248\u672C</td><td><code>unknown</code></td><td>-</td></tr><tr><td><code>[items]</code></td><td>\u5F15\u5BFC\u9879\u5217\u8868</td><td><code><a data-toc="OnboardingItem">OnboardingItem</a>[]</code></td><td><code>[]</code></td></tr><tr><td><code>[mask]</code></td><td>\u662F\u5426\u5C55\u793A\u906E\u7F69</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[maskClosable]</code></td><td>\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5141\u8BB8\u5173\u95ED</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[showTotal]</code></td><td>\u662F\u5426\u663E\u793A\u603B\u91CF</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="OnboardingItem"><a class="lake-link"><i data-anchor="OnboardingItem"></i></a>OnboardingItem</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[selectors]</code></td><td>CSS\u9009\u9879\u9879\uFF0C\u7528\u4E8E\u67E5\u627E\u76EE\u6807\u5143\u7D20</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[position]</code></td><td>\u5F15\u5BFC\u9762\u677F\u663E\u793A\u4F4D\u7F6E</td><td><code>top, left, right, bottom, topLeft, topRight, bottomLeft, bottomRight, leftTop, leftBottom, rightTop, rightBottom</code></td><td><code>bottomLeft</code></td></tr><tr><td><code>[className]</code></td><td>\u5F15\u5BFC\u9762\u677F\u7C7B\u540D</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[width]</code></td><td>\u5F15\u5BFC\u9762\u677F\u5BBD\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>\u5F15\u5BFC\u9762\u677F\u6807\u9898</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[content]</code></td><td>\u5F15\u5BFC\u9762\u677F\u5185\u5BB9</td><td><code>string, SafeHtml, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[skip]</code></td><td>\u8DF3\u8FC7\u6309\u94AE\u6587\u672C\uFF0C<code>null</code> \u8868\u793A\u5F3A\u51FB\u4E0D\u663E\u793A</td><td><code>string, TemplateRef&lt;void>, null</code></td><td><code>\u8DF3\u8FC7</code></td></tr><tr><td><code>[prev]</code></td><td>\u8DF3\u8FC7\u6309\u94AE\u6587\u672C\uFF0C<code>null</code> \u8868\u793A\u5F3A\u51FB\u4E0D\u663E\u793A</td><td><code>string, TemplateRef&lt;void>, null</code></td><td><code>\u4E0A\u4E00\u9879</code></td></tr><tr><td><code>[next]</code></td><td>\u8DF3\u8FC7\u6309\u94AE\u6587\u672C\uFF0C<code>null</code> \u8868\u793A\u5F3A\u51FB\u4E0D\u663E\u793A</td><td><code>string, TemplateRef&lt;void>, null</code></td><td><code>\u4E0B\u4E00\u9879</code></td></tr><tr><td><code>[done]</code></td><td>\u8DF3\u8FC7\u6309\u94AE\u6587\u672C\uFF0C<code>null</code> \u8868\u793A\u5F3A\u51FB\u4E0D\u663E\u793A</td><td><code>string, TemplateRef&lt;void>, null</code></td><td><code>\u5B8C\u6210</code></td></tr><tr><td><code>[url]</code></td><td>\u76EE\u6807\u8DEF\u7531\u9875</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[before]</code></td><td>\u5F53\u89E6\u53D1 <code>next</code> \u65F6\u8868\u793A\u8FDB\u5165\u524D\u56DE\u8C03\uFF0C<code>number</code> \u8868\u793A\u5EF6\u8FDF</td><td><code>Observable&lt;any>, number</code></td><td>-</td></tr><tr><td><code>[after]</code></td><td>\u5F53\u89E6\u53D1 <code>prev</code> \u65F6\u8868\u793A\u8FDB\u5165\u524D\u56DE\u8C03\uFF0C<code>number</code> \u8868\u793A\u5EF6\u8FDF</td><td><code>Observable&lt;any>, number</code></td><td>-</td></tr></tbody></table>',meta:{type:"Basic",title:"onboarding",subtitle:"\u7528\u6237\u5F15\u5BFC\u6D41\u7A0B",order:7,module:"import { OnboardingModule } from '@delon/abc/onboarding';"},toc:[{id:"API",title:"API",h:2,children:[{id:"OnboardingService",title:"OnboardingService",h:3},{id:"OnboardingData",title:"OnboardingData",h:3},{id:"OnboardingItem",title:"OnboardingItem",h:3}]}]}},demo:!0},this.codes=[{id:"components-onboarding-basic",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component, inject } from '@angular/core';

import { OnboardingConfig, OnboardingService } from '@delon/abc/onboarding';
import { _HttpClient } from '@delon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'components-onboarding-basic',
  template: \`
    <div class="mb-md pb-md border-bottom-1">
      <button class="test1-1" nz-button nzType="primary" (click)="handleClick()">First Button</button>
      <button class="test1-2" nz-button nzType="link">Second Button</button>
      <button class="test1-3" nz-button nzType="dashed">Third Button</button>
    </div>
    <button nz-button (click)="start()">Start</button>
    <button nz-button (click)="startOnce()">Start Once (Set 'key')</button>
    <button nz-button (click)="viaHttp()">Start Via Http</button>
    <a
      href="https://github.com/ng-alain/delon/blob/master/src/assets/schema/onboarding.json"
      target="_blank"
      class="ml-md"
    >
      onboarding.json
    </a>
  \`,
  standalone: true,
  imports: [NzButtonModule]
})
export class ComponentsOnboardingBasicComponent {
  private readonly msg = inject(NzMessageService);
  private readonly srv = inject(OnboardingService);
  private readonly http = inject(_HttpClient);

  private def: OnboardingConfig = {
    items: [
      {
        selectors: '.test1-1',
        content: 'The user guidance is to help users better understand and use the product',
        width: 300
      },
      {
        selectors: '.test1-2',
        title: 'Test2',
        content: 'The user guidance is to help users better understand and use the product'
      },
      {
        selectors: '.test1-3',
        title: 'Test3',
        content: 'The user guidance is to help users better understand and use the product'
      }
    ]
  };

  handleClick(): void {
    this.msg.info(\`click\`);
  }

  start(): void {
    this.srv.start({ ...this.def });
  }

  viaHttp(): void {
    this.http.get(\`./assets/schema/onboarding.json\`).subscribe(res => {
      console.log(res);
      this.srv.start(res);
    });
  }

  startOnce(): void {
    this.srv.start({ ...this.def, key: 'obs-once' });
  }
}`,lang:"ts",componentName:"ComponentsOnboardingBasicComponent",point:0,name:"basic",urls:"packages/abc/onboarding/demo/basic.md",type:"demo"},{id:"components-onboarding-multiple-pages",meta:{title:{"zh-CN":"\u591A\u9875","en-US":"Multiple Pages"},order:1},summary:{"zh-CN":"<p>\u4F7F\u7528 <code>url</code> \u53D8\u66F4\u8DEF\u7531\u5730\u5740\uFF0C\u5EFA\u8BAE\u914D\u5408 <code>before</code> \u7684\u5EF6\u8FDF\u6765\u5904\u7406\u76EE\u6807\u9875\u662F\u5426\u5B8C\u6210\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u9047\u5230\u65E0\u6CD5\u83B7\u53D6\u76EE\u6807\u5143\u7D20\u3002</p>","en-US":"<p>Use <code>url</code> to change the routing, it's recommended to use <code>before</code> to delay, otherwise the target element may not be obtained.</p>"},code:`import { Component, inject } from '@angular/core';

import { OnboardingService } from '@delon/abc/onboarding';
import { _HttpClient } from '@delon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-onboarding-multiple-pages',
  template: \`
    <div class="mb-md pb-md border-bottom-1">
      <button class="test2-1" nz-button nzType="primary">First Button</button>
      <button class="test2-3" nz-button nzType="dashed">Third Button</button>
    </div>
    <button nz-button (click)="start()">Start</button>
  \`,
  standalone: true,
  imports: [NzButtonModule]
})
export class ComponentsOnboardingMultiplePagesComponent {
  private readonly srv = inject(OnboardingService);

  start(): void {
    this.srv.start({
      items: [
        {
          selectors: '.test2-1',
          content: 'The user guidance is to help users better understand and use the product',
          next: \`Go to home\`,
          width: 300,
          url: '/components/onboarding'
        },
        {
          selectors: '.page-banner__slogan',
          content:
            'ng-alain is an MIT-licensed open source project. In order to achieve better and sustainable development of the project, we expect to gain more backers. You can support us in any of the following ways, Or purchasing our <a href="https://e.ng-alain.com/" target="_blank">business theme</a>',
          width: 300,
          url: '/',
          before: 200
        },
        {
          selectors: '.test2-3',
          title: 'Test3',
          content: 'The user guidance is to help users better understand and use the product',
          url: '/components/onboarding'
        }
      ]
    });
  }
}`,lang:"ts",componentName:"ComponentsOnboardingMultiplePagesComponent",point:1,name:"multiple-pages",urls:"packages/abc/onboarding/demo/multiple-pages.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-onboarding"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-onboarding-basic"),t(7,`
        `),a(),t(8,`
      
        `),r(9,"code-box",3),t(10,`
          `),m(11,"components-onboarding-multiple-pages"),t(12,`
        `),a(),t(13,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id),c(5),s("item",i.codes[1]),T("id",i.codes[1].id))},dependencies:[j,H,va,Sa,B,R,F],encapsulation:2});let n=e;return n})();function Xm(n,e){n&1&&t(0,"\u9762\u5305\u5C51")}function Km(n,e){n&1&&(r(0,"div",7),t(1,"logo"),a())}function Jm(n,e){n&1&&(r(0,"div",8),t(1,"action"),a())}function Ym(n,e){n&1&&(r(0,"div",9),t(1,"content"),a())}function tu(n,e){n&1&&(r(0,"div",10),t(1,"extra"),a())}function eu(n,e){n&1&&(t(0,`
        `),r(1,"nz-tabset",11),t(2,`
          `),m(3,"nz-tab",12),t(4,`
          `),m(5,"nz-tab",13),t(6,`
          `),m(7,"nz-tab",14),t(8,`
        `),a(),t(9,`
      `)),n&2&&(c(),s("nzSize","default"))}var _a=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-page-header-structure"]],standalone:!0,features:[f],decls:22,vars:8,consts:[["breadcrumb",""],["logo",""],["action",""],["content",""],["extra",""],["tab",""],[3,"title","titleSub","breadcrumb","logo","action","extra","content","tab"],[1,"logo"],[1,"action"],[1,"desc"],[1,"extra"],[3,"nzSize"],["nzTitle","\u9875\u7B7E\u4E00"],["nzTitle","\u9875\u7B7E\u4E8C"],["nzTitle","\u9875\u7B7E\u4E09"]],template:function(o,i){if(o&1&&(t(0,`
    `),r(1,"page-header",6),t(2,`
      `),C(3,Xm,1,0,"ng-template",null,0,P),t(5,`
      `),C(6,Km,2,0,"ng-template",null,1,P),t(8,`
      `),C(9,Jm,2,0,"ng-template",null,2,P),t(11,`
      `),C(12,Ym,2,0,"ng-template",null,3,P),t(14,`
      `),C(15,tu,2,0,"ng-template",null,4,P),t(17,`
      `),C(18,eu,10,1,"ng-template",null,5,P),t(20,`
    `),a(),t(21,`
  `)),o&2){let p=_(4),g=_(7),u=_(10),K=_(13),W=_(16),bt=_(19);c(),s("title","title")("titleSub","titleSub")("breadcrumb",p)("logo",g)("action",u)("extra",W)("content",K)("tab",bt)}},dependencies:[Ye,xn,zo,So],styles:["[_nghost-%COMP%]     .logo{background:#3ba0e9;color:#fff;height:100%}[_nghost-%COMP%]     h1.title{background:#108ee9;color:#fff}[_nghost-%COMP%]     .action, [_nghost-%COMP%]     .desc, [_nghost-%COMP%]     .extra{background:#7dbcea;color:#fff}"]});let n=e;return n})();var Ta=["*"];function ou(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(2);c(),V(l.title)}}function nu(n,e){if(n&1&&(r(0,"sv-title"),C(1,ou,2,1,"ng-container",1),a()),n&2){let l=b();c(),s("nzStringTemplateOutlet",l.title)}}var Wo=(()=>{let e=class e{constructor(){if(this.el=S(xt).nativeElement,this.parentComp=S(ae,{host:!0,optional:!0}),this.ren=S(oe),this.parentComp==null)throw new Error("[sv-title] must include 'sv-container' component")}setClass(){let d=this.parentComp.gutter,o=this.el;this.ren.setStyle(o,"padding-left",`${d/2}px`),this.ren.setStyle(o,"padding-right",`${d/2}px`)}ngOnInit(){this.setClass()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["sv-title"],["","sv-title",""]],hostVars:2,hostBindings:function(o,i){o&2&&k("sv__title",!0)},exportAs:["svTitle"],standalone:!0,features:[f],ngContentSelectors:Ta,decls:1,vars:0,template:function(o,i){o&1&&(J(),U(0))},encapsulation:2,changeDetection:0});let n=e;return n})(),ae=(()=>{let e=class e{get margin(){return this.bordered?{}:{"margin-left.px":-(this.gutter/2),"margin-right.px":-(this.gutter/2)}}constructor(d){this.noColon=!1,this.bordered=!1,d.attach(this,"sv",{size:"large",gutter:32,layout:"horizontal",col:3,default:!0})}};e.\u0275fac=function(o){return new(o||e)($(At))},e.\u0275cmp=h({type:e,selectors:[["sv-container"],["","sv-container",""]],hostVars:14,hostBindings:function(o,i){o&2&&k("sv__container",!0)("sv__horizontal",i.layout==="horizontal")("sv__vertical",i.layout==="vertical")("sv__small",i.size==="small")("sv__large",i.size==="large")("sv__bordered",i.bordered)("clearfix",!0)},inputs:{colInCon:[2,"sv-container","colInCon",d=>d==null?null:at(d)],title:"title",size:"size",gutter:[2,"gutter","gutter",at],layout:"layout",labelWidth:[2,"labelWidth","labelWidth",at],col:[2,"col","col",at],default:[2,"default","default",Y],noColon:[2,"noColon","noColon",Y],bordered:[2,"bordered","bordered",Y]},exportAs:["svContainer"],standalone:!0,features:[ht,f],ngContentSelectors:Ta,decls:3,vars:2,consts:[[1,"ant-row",3,"ngStyle"],[4,"nzStringTemplateOutlet"]],template:function(o,i){o&1&&(J(),r(0,"div",0),C(1,nu,2,1,"sv-title"),U(2),a()),o&2&&(s("ngStyle",i.margin),c(),M(i.title?1:-1))},dependencies:[ke,Wo,Bt],encapsulation:2,changeDetection:0});let n=e;return n})();var iu=["*"];function du(n,e){if(n&1&&m(0,"em",0),n&2){let l=b();s("innerHTML",l.prefix,jt)}}function ru(n,e){if(n&1&&m(0,"em",2),n&2){let l=b();s("innerHTML",l.unit,jt)}}var si=(()=>{let e=class e{constructor(){this.size="default"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["sv-value"],["","sv-value",""]],hostVars:6,hostBindings:function(o,i){o&2&&k("sv__value",!0)("sv__value-small",i.size==="small")("sv__value-large",i.size==="large")},inputs:{prefix:"prefix",unit:"unit",tooltip:"tooltip",size:"size"},exportAs:["svValue"],standalone:!0,features:[f],ngContentSelectors:iu,decls:4,vars:3,consts:[[1,"sv__value-prefix",3,"innerHTML"],["nz-tooltip","",1,"sv__value-text",3,"nzTooltipTitle"],[1,"sv__value-unit",3,"innerHTML"]],template:function(o,i){o&1&&(J(),C(0,du,1,1,"em",0),r(1,"span",1),U(2),a(),C(3,ru,1,1,"em",2)),o&2&&(M(i.prefix?0:-1),c(),s("nzTooltipTitle",i.tooltip),c(2),M(i.unit?3:-1))},dependencies:[de],encapsulation:2,changeDetection:0});let n=e;return n})();var lu=["conEl"],cu=["*"];function su(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(2);c(),V(l.label)}}function pu(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(3);c(),V(l.optional)}}function mu(n,e){if(n&1&&m(0,"i",10),n&2){let l=b(3);s("nzTooltipTitle",l.optionalHelp)("nzTooltipColor",l.optionalHelpColor)}}function uu(n,e){if(n&1&&(r(0,"span",9),C(1,pu,2,1,"ng-container",7)(2,mu,1,2,"i",10),a()),n&2){let l=b(2);k("sv__label-optional-no-text",!l.optional),c(),s("nzStringTemplateOutlet",l.optional),c(),M(l.optionalHelp?2:-1)}}function hu(n,e){if(n&1&&(r(0,"div",5)(1,"span",6),C(2,su,2,1,"ng-container",7),a(),C(3,uu,3,4,"span",8),a()),n&2){let l=b();Rt("width",l.labelWidth,"px"),k("sv__label-empty",!l.label)("sv__label-width",l.labelWidth!==null&&l.labelWidth!==void 0)("sv__no-colon",l._noColon),c(2),s("nzStringTemplateOutlet",l.label),c(),M(l.optional||l.optionalHelp?3:-1)}}function fu(n,e){if(n&1&&(r(0,"span",4),t(1),a()),n&2){let l=b(2);c(),V(l.unit)}}function gu(n,e){if(n&1&&C(0,fu,2,1,"span",11),n&2){let l=b();s("nzStringTemplateOutlet",l.unit)}}var pi="sv",he=(()=>{let e=class e{get paddingValue(){return this.parentComp.bordered?null:this.parentComp.gutter/2}get labelWidth(){let{labelWidth:d,layout:o}=this.parentComp;return o==="horizontal"?d:null}constructor(){if(this.el=S(xt).nativeElement,this.parentComp=S(ae,{host:!0,optional:!0}),this.rep=S(Co),this.ren=S(oe),this.clsMap=[],this._noColon=!1,this.hideLabel=!1,this.parentComp==null)throw new Error("[sv] must include 'sv-container' component")}setClass(){let{ren:d,col:o,clsMap:i,type:p,rep:g,noColon:u}=this,K=this.parentComp,W=this.el;this._noColon=K.bordered?!0:u??K.noColon,i.forEach(_t=>d.removeClass(W,_t)),i.length=0;let bt=K.colInCon||K.col;i.push(...g.genCls(o??bt,bt)),i.push(`${pi}__item`),K.labelWidth&&i.push(`${pi}__item-fixed`),p&&i.push(`${pi}__type-${p}`),i.forEach(_t=>d.addClass(W,_t))}ngAfterViewInit(){this.setClass(),this.checkContent()}ngOnChanges(){this.setClass()}checkContent(){let{conEl:d}=this,o=this.default;if(!(o??this.parentComp?.default))return;let i=d.nativeElement,p="sv__default";i.classList.contains(p)&&i.classList.remove(p),yo(i)&&i.classList.add(p)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["sv"],["","sv",""]],viewQuery:function(o,i){if(o&1&&rt(lu,5),o&2){let p;q(p=G())&&(i.conEl=p.first)}},hostVars:4,hostBindings:function(o,i){o&2&&Rt("padding-left",i.paddingValue,"px")("padding-right",i.paddingValue,"px")},inputs:{optional:"optional",optionalHelp:"optionalHelp",optionalHelpColor:"optionalHelpColor",label:"label",unit:"unit",col:[2,"col","col",d=>d==null?null:at(d)],default:[2,"default","default",d=>d==null?null:Y(d)],type:"type",noColon:[2,"noColon","noColon",d=>d==null?null:Y(d)],hideLabel:[2,"hideLabel","hideLabel",Y]},exportAs:["sv"],standalone:!0,features:[ht,Pt,f],ngContentSelectors:cu,decls:6,vars:2,consts:[["conEl",""],[1,"sv__label",3,"sv__label-empty","sv__label-width","sv__no-colon","width"],[1,"sv__detail"],[3,"cdkObserveContent"],[1,"sv__unit"],[1,"sv__label"],[1,"sv__label-text"],[4,"nzStringTemplateOutlet"],[1,"sv__label-optional",3,"sv__label-optional-no-text"],[1,"sv__label-optional"],["nz-tooltip","","nz-icon","","nzType","question-circle",3,"nzTooltipTitle","nzTooltipColor"],["class","sv__unit",4,"nzStringTemplateOutlet"]],template:function(o,i){if(o&1){let p=w();J(),C(0,hu,4,10,"div",1),r(1,"div",2)(2,"span",3,0),v("cdkObserveContent",function(){return y(p),x(i.checkContent())}),U(4),a(),C(5,gu,1,1,"span",4),a()}o&2&&(M(i.hideLabel?-1:0),c(5),M(i.unit?5:-1))},dependencies:[Bt,de,Tt,Ue],encapsulation:2,changeDetection:0});let n=e;return n})();var _e=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=Kt({type:e}),e.\u0275inj=Xt({imports:[Ce,Ui,Se,Ot,xe]});let n=e;return n})();function Cu(n,e){n&1&&(t(0,`
        `),r(1,"nz-breadcrumb"),t(2,`
          `),r(3,"nz-breadcrumb-item")(4,"a"),t(5,"\u4E00\u7EA7\u83DC\u5355"),a()(),t(6,`
          `),r(7,"nz-breadcrumb-item")(8,"a"),t(9,"\u4E8C\u7EA7\u83DC\u5355"),a()(),t(10,`
          `),r(11,"nz-breadcrumb-item")(12,"a"),t(13,"\u4E09\u7EA7\u83DC\u5355"),a()(),t(14,`
        `),a(),t(15,`
      `))}function yu(n,e){n&1&&m(0,"img",8)}function xu(n,e){if(n&1&&(t(0,`
        `),r(1,"nz-button-group"),t(2,`
          `),r(3,"button",9),t(4,"\u64CD\u4F5C"),a(),t(5,`
          `),r(6,"button",9),t(7,"\u64CD\u4F5C"),a(),t(8,`
        `),a(),t(9,`
        `),r(10,"button",10),t(11,`
          `),m(12,"i",11),t(13,`
        `),a(),t(14,`
        `),r(15,"nz-dropdown-menu",null,6),t(17,`
          `),r(18,"ul",12),t(19,`
            `),r(20,"li",13),t(21,"\u9009\u9879\u4E00"),a(),t(22,`
            `),r(23,"li",13),t(24,"\u9009\u9879\u4E8C"),a(),t(25,`
            `),r(26,"li",13),t(27,"\u9009\u9879\u4E09"),a(),t(28,`
          `),a(),t(29,`
        `),a(),t(30,`
        `),r(31,"button",14),t(32,"\u4E3B\u64CD\u4F5C"),a(),t(33,`
      `)),n&2){let l=_(16);c(10),s("nzDropdownMenu",l),c(21),s("nzType","primary")}}function vu(n,e){if(n&1){let l=w();t(0,`
        `),r(1,"sv-container",15),t(2,`
          `),r(3,"sv",16),t(4,"\u66F2\u4E3D\u4E3D"),a(),t(5,`
          `),r(6,"sv",17),t(7,"XX \u670D\u52A1"),a(),t(8,`
          `),r(9,"sv",18),t(10,"2017-07-07"),a(),t(11,`
          `),r(12,"sv",19)(13,"a",20),v("click",function(){y(l);let o=b();return x(o.msg.success("yes"))}),t(14,"12421"),a()(),t(15,`
          `),r(16,"sv",21),t(17,"2017-07-07 ~ 2017-08-08"),a(),t(18,`
          `),r(19,"sv",22),t(20,"\u8BF7\u4E8E\u4E24\u4E2A\u5DE5\u4F5C\u65E5\u5185\u786E\u8BA4"),a(),t(21,`
        `),a(),t(22,`
      `)}}function Su(n,e){n&1&&(t(0,`
        `),r(1,"div",23),t(2,`
          `),r(3,"div",24),t(4,`
            `),r(5,"p",25),t(6,"\u72B6\u6001"),a(),t(7,`
            `),r(8,"p",26),t(9,"\u5F85\u5BA1\u6279"),a(),t(10,`
          `),a(),t(11,`
          `),r(12,"div",24),t(13,`
            `),r(14,"p",25),t(15,"\u8BA2\u5355\u91D1\u989D"),a(),t(16,`
            `),r(17,"p",26),t(18,"\xA5 568.08"),a(),t(19,`
          `),a(),t(20,`
        `),a(),t(21,`
      `))}function zu(n,e){n&1&&(t(0,`
        `),r(1,"nz-tabset",27),t(2,`
          `),m(3,"nz-tab",28),t(4,`
          `),m(5,"nz-tab",29),t(6,`
        `),a(),t(7,`
      `)),n&2&&(c(),s("nzSize","default"))}var ka=(()=>{let e=class e{constructor(){this.msg=S(vt)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-page-header-standard"]],standalone:!0,features:[f],decls:22,vars:7,consts:[["breadcrumb",""],["logo",""],["action",""],["content",""],["extra",""],["tab",""],["actionMoreMenu","nzDropdownMenu"],[3,"title","breadcrumb","logo","action","extra","content","tab"],["src","https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png"],["nz-button",""],["nz-button","","nz-dropdown","",1,"mx-sm",3,"nzDropdownMenu"],["nz-icon","","nzType","ellipsis"],["nz-menu",""],["nz-menu-item",""],["nz-button","",3,"nzType"],["size","small","col","2"],["label","\u521B\u5EFA\u4EBA"],["label","\u8BA2\u8D2D\u4EA7\u54C1"],["label","\u521B\u5EFA\u65F6\u95F4"],["label","\u5173\u8054\u5355\u636E"],[3,"click"],["label","\u751F\u6548\u65E5\u671F"],["label","\u5907\u6CE8"],["nz-row",""],["nz-col","","nzXs","24","nzSm","12"],[1,"text-grey"],[1,"text-lg"],[3,"nzSize"],["nzTitle","\u8BE6\u60C5"],["nzTitle","\u89C4\u5219"]],template:function(o,i){if(o&1&&(t(0,`
    `),r(1,"page-header",7),t(2,`
      `),C(3,Cu,16,0,"ng-template",null,0,P),t(5,`
      `),C(6,yu,1,0,"ng-template",null,1,P),t(8,`
      `),C(9,xu,34,2,"ng-template",null,2,P),t(11,`
      `),C(12,vu,23,0,"ng-template",null,3,P),t(14,`
      `),C(15,Su,22,0,"ng-template",null,4,P),t(17,`
      `),C(18,zu,8,1,"ng-template",null,5,P),t(20,`
    `),a(),t(21,`
  `)),o&2){let p=_(4),g=_(7),u=_(10),K=_(13),W=_(16),bt=_(19);c(),s("title","\u5355\u53F7\uFF1A234231029431")("breadcrumb",p)("logo",g)("action",u)("extra",W)("content",K)("tab",bt)}},dependencies:[Ye,Ro,Fo,Po,I,D,$i,N,E,yn,fd,hd,xo,vo,gd,xn,zo,So,B,R,F,Ot,Tt,_e,ae,he],encapsulation:2});let n=e;return n})();function _u(n,e){n&1&&(t(0,`
        `),r(1,"nz-breadcrumb"),t(2,`
          `),r(3,"nz-breadcrumb-item")(4,"a"),t(5,"\u4E00\u7EA7\u83DC\u5355"),a()(),t(6,`
          `),r(7,"nz-breadcrumb-item")(8,"a"),t(9,"\u4E8C\u7EA7\u83DC\u5355"),a()(),t(10,`
          `),r(11,"nz-breadcrumb-item")(12,"a"),t(13,"\u4E09\u7EA7\u83DC\u5355"),a()(),t(14,`
        `),a(),t(15,`
      `))}function Tu(n,e){n&1&&(t(0,`
        `),r(1,"div",4),t(2,`
          `),m(3,"img",5),t(4,`
        `),a(),t(5,`
      `))}function wu(n,e){n&1&&(t(0,`
        `),r(1,"p"),t(2,`\u6BB5\u843D\u793A\u610F\uFF1A\u8682\u8681\u91D1\u670D\u52A1\u8BBE\u8BA1\u5E73\u53F0
          ant.design\uFF0C\u7528\u6700\u5C0F\u7684\u5DE5\u4F5C\u91CF\uFF0C\u65E0\u7F1D\u63A5\u5165\u8682\u8681\u91D1\u670D\u751F\u6001\uFF0C\u63D0\u4F9B\u8DE8\u8D8A\u8BBE\u8BA1\u4E0E\u5F00\u53D1\u7684\u4F53\u9A8C\u89E3\u51B3\u65B9\u6848\u3002`),a(),t(3,`
        `),r(4,"div",6),t(5,`
          `),r(6,"a",7),t(7,`
            `),m(8,"img",8),t(9,`\u5FEB\u901F\u5F00\u59CB
          `),a(),t(10,`
          `),r(11,"a",7),t(12,`
            `),m(13,"img",9),t(14,`\u4EA7\u54C1\u7B80\u4ECB
          `),a(),t(15,`
          `),r(16,"a",10),t(17,`
            `),m(18,"img",11),t(19,`\u4EA7\u54C1\u6587\u6863
          `),a(),t(20,`
        `),a(),t(21,`
      `))}var Ma=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-page-header-image"]],standalone:!0,features:[f],decls:13,vars:4,consts:[["breadcrumb",""],["extra",""],["content",""],[3,"title","breadcrumb","extra","content"],[2,"margin-top","-60px","text-align","center","width","195px"],["src","https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png",1,"img-fluid"],[1,"d-flex","pt-md"],[1,"d-flex","pr-lg"],["src","https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg",1,"pr-sm"],["src","https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg",1,"pr-sm"],[1,"d-flex"],["src","https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg",1,"pr-sm"]],template:function(o,i){if(o&1&&(t(0,`
    `),r(1,"page-header",3),t(2,`
      `),C(3,_u,16,0,"ng-template",null,0,P),t(5,`
      `),C(6,Tu,6,0,"ng-template",null,1,P),t(8,`
      `),C(9,wu,22,0,"ng-template",null,2,P),t(11,`
    `),a(),t(12,`
  `)),o&2){let p=_(4),g=_(7),u=_(10);c(),s("title","\u5361\u7247\u5217\u8868")("breadcrumb",p)("extra",g)("content",u)}},dependencies:[Ye,Ro,Fo,Po],encapsulation:2});let n=e;return n})();function ku(n,e){n&1&&(t(0,`
        `),r(1,"nz-breadcrumb"),t(2,`
          `),r(3,"nz-breadcrumb-item")(4,"a"),t(5,"\u4E00\u7EA7\u83DC\u5355"),a()(),t(6,`
          `),r(7,"nz-breadcrumb-item")(8,"a"),t(9,"\u4E8C\u7EA7\u83DC\u5355"),a()(),t(10,`
          `),r(11,"nz-breadcrumb-item")(12,"a"),t(13,"\u4E09\u7EA7\u83DC\u5355"),a()(),t(14,`
        `),a(),t(15,`
      `))}var Da=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-page-header-simple"]],standalone:!0,features:[f],decls:7,vars:2,consts:[["breadcrumb",""],[3,"title","breadcrumb"]],template:function(o,i){if(o&1&&(t(0,`
    `),r(1,"page-header",1),t(2,`
      `),C(3,ku,16,0,"ng-template",null,0,P),t(5,`
    `),a(),t(6,`
  `)),o&2){let p=_(4);c(),s("title","\u9875\u9762\u6807\u9898")("breadcrumb",p)}},dependencies:[Ye,Ro,Fo,Po],encapsulation:2});let n=e;return n})();var Na=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/page-header/index.en-US.md","zh-CN":"packages/abc/page-header/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>The page header is used to declare the subject of the page and contains the most important information that the user is concerned about, so that the user can quickly understand what the current page and functions.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="page-header"><a class="lake-link"><i data-anchor="page-header"></i></a>page-header<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>Title of the page</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[titleSub]</code></td><td>Sub title of the page</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[autoTitle]</code></td><td>Whether to automatically generate the title and locate it from the main menu with the current route</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[syncTitle]</code></td><td>Whether to automatically synchronize the title to <code>TitleService</code>, <code>ReuseService</code>, only valid when <code>title</code> is of type <code>string</code></td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[home]</code></td><td>Home page text of the breadcrumb, if empty is specified, it will not be displayed</td><td><code>string</code></td><td><code>\u9996\u9875</code></td><td>\u2705</td></tr><tr><td><code>[homeLink]</code></td><td>Home page link of the breadcrumb</td><td><code>string</code></td><td><code>/</code></td><td>\u2705</td></tr><tr><td><code>[homeI18n]</code></td><td>Home page i18n of the breadcrumb</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[autoBreadcrumb]</code></td><td>Whether to automatically generate navigation, use the current route to locate from the main menu</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[recursiveBreadcrumb]</code></td><td>Search automatically upward recursively, if the menu data source contains <code>/ware</code>, then <code>/ware/1</code> is also regarded as <code>/ware</code> item</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[loading]</code></td><td>Whether loading</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[wide]</code></td><td>Whether wide</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[fixed]</code></td><td>Whether fixed mode</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[fixedOffsetTop]</code></td><td>Fixed offset of the fixed mode</td><td><code>number</code></td><td><code>64</code></td><td>\u2705</td></tr><tr><td><code>[breadcrumb]</code></td><td>Custom navigation area</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[logo]</code></td><td>Custom LOGO area</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[action]</code></td><td>Custom action area</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[content]</code></td><td>Custom content area</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[extra]</code></td><td>Customize extra information area</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[tab]</code></td><td>Custom tab area</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr></tbody></table><h2 id="FAQ"><a class="lake-link"><i data-anchor="FAQ"></i></a>FAQ</h2><h3 id="Automaticallygeneratednavigation"><a class="lake-link"><i data-anchor="Automaticallygeneratednavigation"></i></a>Automaticallygeneratednavigation</h3><p>By default, the navigation is automatically generated based on the menu data. Sometimes you may want to hide the menu data of a certain node, you can specify the menu <code>hideInBreadcrumb: true</code>.</p><h3 id="Fixedmode"><a class="lake-link"><i data-anchor="Fixedmode"></i></a>Fixedmode</h3><p>The fixed mode will override the reuse-tab component during scrolling.</p>',meta:{type:"Layout",title:"page-header",subtitle:"Page Header",cols:1,module:"import { PageHeaderModule } from '@delon/abc/page-header';"},toc:[{id:"API",title:"API",h:2,children:[{id:"page-header",title:"page-header:standalone",h:3}]},{id:"FAQ",title:"FAQ",h:2,children:[{id:"Automaticallygeneratednavigation",title:"Automatically generated navigation",h:3},{id:"Fixedmode",title:"Fixed mode",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u9875\u5934\u7528\u6765\u58F0\u660E\u9875\u9762\u7684\u4E3B\u9898\uFF0C\u5305\u542B\u4E86\u7528\u6237\u6240\u5173\u6CE8\u7684\u6700\u91CD\u8981\u7684\u4FE1\u606F\uFF0C\u4F7F\u7528\u6237\u53EF\u4EE5\u5FEB\u901F\u7406\u89E3\u5F53\u524D\u9875\u9762\u662F\u4EC0\u4E48\u4EE5\u53CA\u5B83\u7684\u529F\u80FD\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="page-header"><a class="lake-link"><i data-anchor="page-header"></i></a>page-header<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>\u6807\u9898\u540D</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[titleSub]</code></td><td>\u5B50\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[autoTitle]</code></td><td>\u662F\u5426\u81EA\u52A8\u751F\u6210\u6807\u9898\uFF0C\u4EE5\u5F53\u524D\u8DEF\u7531\u4ECE\u4E3B\u83DC\u5355\u4E2D\u5B9A\u4F4D</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[syncTitle]</code></td><td>\u662F\u5426\u81EA\u52A8\u5C06\u6807\u9898\u540C\u6B65\u81F3 <code>TitleService</code>\u3001<code>ReuseService</code> \u4E0B\uFF0C\u4EC5 <code>title</code> \u4E3A <code>string</code> \u7C7B\u578B\u65F6\u6709\u6548</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[home]</code></td><td>\u9996\u9875\u6587\u672C\uFF0C\u82E5\u6307\u5B9A\u7A7A\u8868\u793A\u4E0D\u663E\u793A</td><td><code>string</code></td><td><code>\u9996\u9875</code></td><td>\u2705</td></tr><tr><td><code>[homeLink]</code></td><td>\u9996\u9875\u94FE\u63A5</td><td><code>string</code></td><td><code>/</code></td><td>\u2705</td></tr><tr><td><code>[homeI18n]</code></td><td>\u9996\u9875\u94FE\u63A5\u56FD\u9645\u5316\u53C2\u6570</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[autoBreadcrumb]</code></td><td>\u662F\u5426\u81EA\u52A8\u751F\u6210\u5BFC\u822A\uFF0C\u4EE5\u5F53\u524D\u8DEF\u7531\u4ECE\u4E3B\u83DC\u5355\u4E2D\u5B9A\u4F4D</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[recursiveBreadcrumb]</code></td><td>\u662F\u5426\u81EA\u52A8\u5411\u4E0A\u9012\u5F52\u67E5\u627E\uFF0C\u83DC\u5355\u6570\u636E\u6E90\u5305\u542B <code>/ware</code>\uFF0C\u5219 <code>/ware/1</code> \u4E5F\u89C6\u4E3A <code>/ware</code> \u9879</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[loading]</code></td><td>\u662F\u5426\u52A0\u8F7D\u4E2D</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[wide]</code></td><td>\u662F\u5426\u5B9A\u5BBD</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[fixed]</code></td><td>\u662F\u5426\u56FA\u5B9A\u6A21\u5F0F</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[fixedOffsetTop]</code></td><td>\u56FA\u5B9A\u504F\u79FB\u503C</td><td><code>number</code></td><td><code>64</code></td><td>\u2705</td></tr><tr><td><code>[breadcrumb]</code></td><td>\u81EA\u5B9A\u4E49\u5BFC\u822A\u533A\u57DF</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[logo]</code></td><td>\u81EA\u5B9A\u4E49LOGO\u533A\u57DF</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[action]</code></td><td>\u81EA\u5B9A\u4E49\u64CD\u4F5C\u533A\u57DF</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[content]</code></td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9\u533A\u57DF</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[extra]</code></td><td>\u81EA\u5B9A\u4E49\u989D\u5916\u4FE1\u606F\u533A\u57DF</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[tab]</code></td><td>\u81EA\u5B9A\u4E49\u6807\u7B7E\u533A\u57DF</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr></tbody></table><h2 id="\u5E38\u89C1\u95EE\u9898"><a class="lake-link"><i data-anchor="\u5E38\u89C1\u95EE\u9898"></i></a>\u5E38\u89C1\u95EE\u9898</h2><h3 id="\u81EA\u52A8\u751F\u6210\u5BFC\u822A"><a class="lake-link"><i data-anchor="\u81EA\u52A8\u751F\u6210\u5BFC\u822A"></i></a>\u81EA\u52A8\u751F\u6210\u5BFC\u822A</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u6839\u636E\u83DC\u5355\u6570\u636E\u81EA\u52A8\u751F\u6210\u5BFC\u822A\uFF0C\u6709\u65F6\u4F60\u53EF\u80FD\u5E0C\u671B\u9690\u85CF\u67D0\u4E2A\u8282\u70B9\u83DC\u5355\u6570\u636E\u65F6\uFF0C\u53EF\u4EE5\u6307\u5B9A\u83DC\u5355\u7684 <code>hideInBreadcrumb: true</code>\u3002</p><h3 id="\u56FA\u5B9A\u6A21\u5F0F"><a class="lake-link"><i data-anchor="\u56FA\u5B9A\u6A21\u5F0F"></i></a>\u56FA\u5B9A\u6A21\u5F0F</h3><p>\u56FA\u5B9A\u6A21\u5F0F\u5728\u6EDA\u52A8\u8FC7\u7A0B\u4E2D\u4F1A\u8986\u76D6 <code>reuse-tab</code> \u7EC4\u4EF6\u3002</p>',meta:{type:"Layout",title:"page-header",subtitle:"\u9875\u5934",cols:1,module:"import { PageHeaderModule } from '@delon/abc/page-header';"},toc:[{id:"API",title:"API",h:2,children:[{id:"page-header",title:"page-header:standalone",h:3}]},{id:"\u5E38\u89C1\u95EE\u9898",title:"\u5E38\u89C1\u95EE\u9898",h:2,children:[{id:"\u81EA\u52A8\u751F\u6210\u5BFC\u822A",title:"\u81EA\u52A8\u751F\u6210\u5BFC\u822A",h:3},{id:"\u56FA\u5B9A\u6A21\u5F0F",title:"\u56FA\u5B9A\u6A21\u5F0F",h:3}]}]}},demo:!0},this.codes=[{id:"components-page-header-structure",meta:{order:0,title:{"en-US":"Structure","zh-CN":"\u57FA\u672C\u7ED3\u6784"},bg:"f2f4f5"},summary:"<p>\u57FA\u672C\u7ED3\u6784\uFF0C\u5177\u5907\u54CD\u5E94\u5F0F\u5E03\u5C40\u529F\u80FD\uFF0C\u4E3B\u8981\u65AD\u70B9\u4E3A 768px \u548C 576px\uFF0C\u62D6\u52A8\u7A97\u53E3\u6539\u53D8\u5927\u5C0F\u8BD5\u8BD5\u770B\u3002</p>",code:`import { Component, ViewEncapsulation } from '@angular/core';

import { PageHeaderComponent } from '@delon/abc/page-header';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'components-page-header-structure',
  template: \`
    <page-header
      [title]="'title'"
      [titleSub]="'titleSub'"
      [breadcrumb]="breadcrumb"
      [logo]="logo"
      [action]="action"
      [extra]="extra"
      [content]="content"
      [tab]="tab"
    >
      <ng-template #breadcrumb>\u9762\u5305\u5C51</ng-template>
      <ng-template #logo><div class="logo">logo</div></ng-template>
      <ng-template #action><div class="action">action</div></ng-template>
      <ng-template #content><div class="desc">content</div></ng-template>
      <ng-template #extra><div class="extra">extra</div></ng-template>
      <ng-template #tab>
        <nz-tabset [nzSize]="'default'">
          <nz-tab nzTitle="\u9875\u7B7E\u4E00" />
          <nz-tab nzTitle="\u9875\u7B7E\u4E8C" />
          <nz-tab nzTitle="\u9875\u7B7E\u4E09" />
        </nz-tabset>
      </ng-template>
    </page-header>
  \`,
  styles: [
    \`
      :host ::ng-deep .logo {
        background: #3ba0e9;
        color: #fff;
        height: 100%;
      }
      :host ::ng-deep h1.title {
        background: rgba(16, 142, 233, 1);
        color: #fff;
      }
      :host ::ng-deep .action,
      :host ::ng-deep .desc,
      :host ::ng-deep .extra {
        background: #7dbcea;
        color: #fff;
      }
    \`
  ],
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
  imports: [PageHeaderComponent, NzTabsModule]
})
export class ComponentsPageHeaderStructureComponent {}`,lang:"ts",componentName:"ComponentsPageHeaderStructureComponent",point:0,name:"structure",urls:"packages/abc/page-header/demo/structure.md",type:"demo"},{id:"components-page-header-standard",meta:{order:1,title:{"en-US":"Standard","zh-CN":"\u6807\u51C6"},bg:"f2f4f5"},summary:"<p>\u6807\u51C6\u9875\u5934\u3002</p>",code:`import { Component, inject } from '@angular/core';

import { PageHeaderComponent } from '@delon/abc/page-header';
import { SVModule } from '@delon/abc/sv';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'components-page-header-standard',
  template: \`
    <page-header
      [title]="'\u5355\u53F7\uFF1A234231029431'"
      [breadcrumb]="breadcrumb"
      [logo]="logo"
      [action]="action"
      [extra]="extra"
      [content]="content"
      [tab]="tab"
    >
      <ng-template #breadcrumb>
        <nz-breadcrumb>
          <nz-breadcrumb-item><a>\u4E00\u7EA7\u83DC\u5355</a></nz-breadcrumb-item>
          <nz-breadcrumb-item><a>\u4E8C\u7EA7\u83DC\u5355</a></nz-breadcrumb-item>
          <nz-breadcrumb-item><a>\u4E09\u7EA7\u83DC\u5355</a></nz-breadcrumb-item>
        </nz-breadcrumb>
      </ng-template>
      <ng-template #logo><img src="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png" /></ng-template>
      <ng-template #action>
        <nz-button-group>
          <button nz-button>\u64CD\u4F5C</button>
          <button nz-button>\u64CD\u4F5C</button>
        </nz-button-group>
        <button nz-button nz-dropdown [nzDropdownMenu]="actionMoreMenu" class="mx-sm">
          <i nz-icon nzType="ellipsis"></i>
        </button>
        <nz-dropdown-menu #actionMoreMenu="nzDropdownMenu">
          <ul nz-menu>
            <li nz-menu-item>\u9009\u9879\u4E00</li>
            <li nz-menu-item>\u9009\u9879\u4E8C</li>
            <li nz-menu-item>\u9009\u9879\u4E09</li>
          </ul>
        </nz-dropdown-menu>
        <button nz-button [nzType]="'primary'">\u4E3B\u64CD\u4F5C</button>
      </ng-template>
      <ng-template #content>
        <sv-container size="small" col="2">
          <sv label="\u521B\u5EFA\u4EBA">\u66F2\u4E3D\u4E3D</sv>
          <sv label="\u8BA2\u8D2D\u4EA7\u54C1">XX \u670D\u52A1</sv>
          <sv label="\u521B\u5EFA\u65F6\u95F4">2017-07-07</sv>
          <sv label="\u5173\u8054\u5355\u636E"><a (click)="msg.success('yes')">12421</a></sv>
          <sv label="\u751F\u6548\u65E5\u671F">2017-07-07 ~ 2017-08-08</sv>
          <sv label="\u5907\u6CE8">\u8BF7\u4E8E\u4E24\u4E2A\u5DE5\u4F5C\u65E5\u5185\u786E\u8BA4</sv>
        </sv-container>
      </ng-template>
      <ng-template #extra>
        <div nz-row>
          <div nz-col nzXs="24" nzSm="12">
            <p class="text-grey">\u72B6\u6001</p>
            <p class="text-lg">\u5F85\u5BA1\u6279</p>
          </div>
          <div nz-col nzXs="24" nzSm="12">
            <p class="text-grey">\u8BA2\u5355\u91D1\u989D</p>
            <p class="text-lg">\xA5 568.08</p>
          </div>
        </div>
      </ng-template>
      <ng-template #tab>
        <nz-tabset [nzSize]="'default'">
          <nz-tab nzTitle="\u8BE6\u60C5" />
          <nz-tab nzTitle="\u89C4\u5219" />
        </nz-tabset>
      </ng-template>
    </page-header>
  \`,
  standalone: true,
  imports: [
    PageHeaderComponent,
    NzBreadCrumbModule,
    NzButtonModule,
    NzDropDownModule,
    NzTabsModule,
    NzGridModule,
    NzIconModule,
    SVModule
  ]
})
export class ComponentsPageHeaderStandardComponent {
  readonly msg = inject(NzMessageService);
}`,lang:"ts",componentName:"ComponentsPageHeaderStandardComponent",point:1,name:"standard",urls:"packages/abc/page-header/demo/standard.md",type:"demo"},{id:"components-page-header-image",meta:{order:3,title:{"en-US":"With Image","zh-CN":"\u5E26\u56FE"},bg:"f2f4f5"},summary:"<p>\u5E26\u56FE\u7247\u7684\u9875\u5934\u3002</p>",code:`import { Component } from '@angular/core';

import { PageHeaderComponent } from '@delon/abc/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@Component({
  selector: 'components-page-header-image',
  template: \`
    <page-header [title]="'\u5361\u7247\u5217\u8868'" [breadcrumb]="breadcrumb" [extra]="extra" [content]="content">
      <ng-template #breadcrumb>
        <nz-breadcrumb>
          <nz-breadcrumb-item><a>\u4E00\u7EA7\u83DC\u5355</a></nz-breadcrumb-item>
          <nz-breadcrumb-item><a>\u4E8C\u7EA7\u83DC\u5355</a></nz-breadcrumb-item>
          <nz-breadcrumb-item><a>\u4E09\u7EA7\u83DC\u5355</a></nz-breadcrumb-item>
        </nz-breadcrumb>
      </ng-template>
      <ng-template #extra>
        <div style="margin-top: -60px; text-align: center; width: 195px;">
          <img class="img-fluid" src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png" />
        </div>
      </ng-template>
      <ng-template #content>
        <p
          >\u6BB5\u843D\u793A\u610F\uFF1A\u8682\u8681\u91D1\u670D\u52A1\u8BBE\u8BA1\u5E73\u53F0
          ant.design\uFF0C\u7528\u6700\u5C0F\u7684\u5DE5\u4F5C\u91CF\uFF0C\u65E0\u7F1D\u63A5\u5165\u8682\u8681\u91D1\u670D\u751F\u6001\uFF0C\u63D0\u4F9B\u8DE8\u8D8A\u8BBE\u8BA1\u4E0E\u5F00\u53D1\u7684\u4F53\u9A8C\u89E3\u51B3\u65B9\u6848\u3002</p
        >
        <div class="d-flex pt-md">
          <a class="d-flex pr-lg">
            <img class="pr-sm" src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg" />\u5FEB\u901F\u5F00\u59CB
          </a>
          <a class="d-flex pr-lg">
            <img class="pr-sm" src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg" />\u4EA7\u54C1\u7B80\u4ECB
          </a>
          <a class="d-flex">
            <img class="pr-sm" src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg" />\u4EA7\u54C1\u6587\u6863
          </a>
        </div>
      </ng-template>
    </page-header>
  \`,
  standalone: true,
  imports: [PageHeaderComponent, NzBreadCrumbModule]
})
export class ComponentsPageHeaderImageComponent {}`,lang:"ts",componentName:"ComponentsPageHeaderImageComponent",point:2,name:"image",urls:"packages/abc/page-header/demo/image.md",type:"demo"},{id:"components-page-header-simple",meta:{order:3,title:"Simple",bg:"f2f4f5"},summary:"<p>\u7B80\u5355\u7684\u9875\u5934\u3002</p>",code:`import { Component } from '@angular/core';

import { PageHeaderComponent } from '@delon/abc/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@Component({
  selector: 'components-page-header-simple',
  template: \`
    <page-header [title]="'\u9875\u9762\u6807\u9898'" [breadcrumb]="breadcrumb">
      <ng-template #breadcrumb>
        <nz-breadcrumb>
          <nz-breadcrumb-item><a>\u4E00\u7EA7\u83DC\u5355</a></nz-breadcrumb-item>
          <nz-breadcrumb-item><a>\u4E8C\u7EA7\u83DC\u5355</a></nz-breadcrumb-item>
          <nz-breadcrumb-item><a>\u4E09\u7EA7\u83DC\u5355</a></nz-breadcrumb-item>
        </nz-breadcrumb>
      </ng-template>
    </page-header>
  \`,
  standalone: true,
  imports: [PageHeaderComponent, NzBreadCrumbModule]
})
export class ComponentsPageHeaderSimpleComponent {}`,lang:"ts",componentName:"ComponentsPageHeaderSimpleComponent",point:3,name:"simple",urls:"packages/abc/page-header/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-page-header"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:24,vars:11,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-page-header-structure"),t(7,`
        `),a(),t(8,`
      
        `),r(9,"code-box",3),t(10,`
          `),m(11,"components-page-header-standard"),t(12,`
        `),a(),t(13,`
      
        `),r(14,"code-box",3),t(15,`
          `),m(16,"components-page-header-image"),t(17,`
        `),a(),t(18,`
      
        `),r(19,"code-box",3),t(20,`
          `),m(21,"components-page-header-simple"),t(22,`
        `),a(),t(23,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id),c(5),s("item",i.codes[1]),T("id",i.codes[1].id),c(5),s("item",i.codes[2]),T("id",i.codes[2].id),c(5),s("item",i.codes[3]),T("id",i.codes[3].id))},dependencies:[j,H,_a,ka,Ma,Da,B,R,F],encapsulation:2});let n=e;return n})();var Ea={lib:"https://cdn.jsdelivr.net/npm/pdfjs-dist@3.6.x/",showAll:!0,renderText:!0,showBorders:!1,originalSize:!0,fitToPage:!1,autoReSize:!0};var jn=function(n){return n[n.DISABLE=0]="DISABLE",n[n.ENABLE=1]="ENABLE",n[n.ENABLE_ENHANCE=2]="ENABLE_ENHANCE",n}(jn||{}),mi=function(n){return n[n.NONE=0]="NONE",n[n.SELF=1]="SELF",n[n.BLANK=2]="BLANK",n[n.PARENT=3]="PARENT",n[n.TOP=4]="TOP",n}(mi||{});function Mu(n,e){n&1&&m(0,"nz-skeleton")}var Ia=96/72,Du=9,Go=class Go{set src(e){this._src=e,this.load()}set pi(e){this._pi=this.getValidPi(e),this.pageViewer&&this.pageViewer.scrollPageIntoView({pageNumber:this._pi})}set showAll(e){this._showAll=e,this.resetDoc()}set renderText(e){this._renderText=e,this.pageViewer&&this.resetDoc()}set zoom(e){e<=0||(this._zoom=e)}set rotation(e){if(e%90!==0){console.warn("Invalid rotation angle, shoule be divisible by 90.");return}this._rotation=e}get loading(){return this._loading}get pdf(){return this._pdf}get findController(){return this._showAll?this.multiPageFindController:this.singlePageFindController}get pageViewer(){return this._showAll?this.multiPageViewer:this.singlePageViewer}get linkService(){return this._showAll?this.multiPageLinkService:this.singlePageLinkService}get eventBus(){return this._eventBus}get _textLayerMode(){return this._renderText?this.textLayerMode:jn.DISABLE}get win(){return this.doc.defaultView||window}get el(){return this._el.querySelector(".pdf-container")}constructor(e){this.lazySrv=S(We),this.platform=S(pe),this._el=S(xt).nativeElement,this.doc=S(be),this.cdr=S(lt),this.ngZone=S(Jt),this.destroy$=S(Lt),this.inited=!1,this.lib="",this._pi=1,this._total=0,this._showAll=!0,this._rotation=0,this._zoom=1,this._renderText=!0,this._loading=!1,this.textLayerMode=jn.ENABLE,this.showBorders=!1,this.stickToPage=!1,this.originalSize=!0,this.fitToPage=!1,this.zoomScale="page-width",this.autoReSize=!0,this.externalLinkTarget=mi.BLANK,this.change=new wt;let l=e.merge("pdf",Ea);Object.assign(this,l);let d=l.lib;this.lib=d.endsWith("/")?d:`${d}/`}getValidPi(e){if(e<1)return 1;let l=this._pdf;return l&&e>l.numPages?l.numPages:e}emit(e,l){this.ngZone.run(()=>this.change.emit(yt({type:e,pdf:this._pdf,pi:this._pi,total:this._total},l)))}initDelay(){if(!this.win.pdfjsLib)throw new Error(`No window.pdfjsLib found, please make sure that cdn or local path exists, the current referenced path is: ${JSON.stringify(this.lib)}`);this.inited=!0,this.cdr.detectChanges(),this.win.pdfjsLib.GlobalWorkerOptions.workerSrc=`${this.lib}build/pdf.worker.min.js`,Re(this.delay??0).pipe(Mt(this.destroy$)).subscribe(()=>this.load())}setLoading(e){this.ngZone.run(()=>{this._loading=e,this.cdr.detectChanges()})}load(){let{_src:e}=this;if(!this.inited||!e)return;if(this.lastSrc===e){this.render();return}this.destroy(),this.ngZone.run(()=>{this._loading=!0,this.cdr.detectChanges()}),this.setLoading(!0);let l=this.loadingTask=this.win.pdfjsLib.getDocument(e);l.onProgress=d=>this.emit("load-progress",{progress:d}),l.promise.then(d=>{this._pdf=d,this.lastSrc=e,this._total=d.numPages,this.emit("loaded"),this.pageViewer||this.setupPageViewer(),this.resetDoc(),this.render()},d=>this.emit("error",{error:d})).then(()=>this.setLoading(!1))}resetDoc(){let e=this._pdf;e&&(this.cleanDoc(),this.findController.setDocument(e),this.pageViewer.setDocument(e),this.linkService.setDocument(e,null))}cleanDoc(){this.multiPageViewer.setDocument(null),this.singlePageViewer.setDocument(null),this.multiPageLinkService.setDocument(null,null),this.singlePageLinkService.setDocument(null,null),this.multiPageFindController.setDocument(null),this.singlePageFindController.setDocument(null)}render(){let e=this.pageViewer;e&&((this._rotation!==0||e.pagesRotation!==this._rotation)&&this.timeExec(()=>{e.pagesRotation=this._rotation}),this.stickToPage&&this.timeExec(()=>{e.currentPageNumber=this._pi}),this.updateSize())}timeExec(e){this.ngZone.runOutsideAngular(()=>{Re(0).pipe(Mt(this.destroy$)).subscribe(()=>this.ngZone.runOutsideAngular(()=>e()))})}updateSize(){let e=this.pageViewer;e&&this._pdf.getPage(e.currentPageNumber).then(l=>{let{_rotation:d,_zoom:o}=this,i=d||l.rotate,p=l.getViewport({scale:o,rotation:i}).width*Ia,g=o;if(!this.originalSize||this.fitToPage&&p>this.el.clientWidth){let u=l.getViewport({scale:1,rotation:i});g=this.getScale(u.width,u.height)}e.currentScale=g})}getScale(e,l){let d=this.showBorders?2*Du:0,o=this.el,i=o.clientWidth-d,p=o.clientHeight-d;if(p===0||l===0||i===0||e===0)return 1;let g=1;switch(this.zoomScale){case"page-fit":g=Math.min(p/l,i/e);break;case"page-height":g=p/l;break;case"page-width":default:g=i/e;break}return this._zoom*g/Ia}destroy(){let{loadingTask:e}=this;e&&!e.destroyed&&e.destroy(),this._pdf&&(this._pdf.destroy(),this._pdf=null,this.cleanDoc())}setupPageViewer(){this.win.pdfjsLib.disableTextLayer=!this._renderText,this.win.pdfjsLib.externalLinkTarget=this.externalLinkTarget,this.setupMultiPageViewer(),this.setupSinglePageViewer()}createEventBus(){let e=new this.win.pdfjsViewer.EventBus;return e.on("pagesinit",l=>{this.emit("pages-init",{ev:l})}),e.on("pagerendered",l=>{this.emit("page-rendered",{ev:l})}),e.on("pagechanging",l=>{let d=l.pageNumber;d!==this._pi&&(this._pi=d,this.emit("pi",{ev:l}))}),e.on("textlayerrendered",l=>{this.emit("text-layer-rendered",{ev:l})}),e}setupMultiPageViewer(){let e=this.win.pdfjsViewer,l=this._eventBus=this.createEventBus(),d=this.multiPageLinkService=new e.PDFLinkService({eventBus:l}),o=this.multiPageFindController=new e.PDFFindController({eventBus:l,linkService:d}),i=this.multiPageViewer=new e.PDFViewer({eventBus:l,container:this.el,removePageBorders:!this.showBorders,textLayerMode:this._textLayerMode,linkService:d,findController:o});d.setViewer(i)}setupSinglePageViewer(){let e=this.win.pdfjsViewer,l=this.createEventBus(),d=this.singlePageLinkService=new e.PDFLinkService({eventBus:l}),o=this.singlePageFindController=new e.PDFFindController({eventBus:l,linkService:d}),i=this.singlePageViewer=new e.PDFSinglePageViewer({eventBus:l,container:this.el,removePageBorders:!this.showBorders,textLayerMode:this._textLayerMode,linkService:d,findController:o});d.setViewer(i),i._currentPageNumber=this._pi}ngAfterViewInit(){if(!this.platform.isBrowser)return;if(this.win.pdfjsLib){this.initDelay();return}let{lib:e}=this;this.lazySrv.load(`${e}build/pdf.min.js`).then(()=>this.lazySrv.load([`${e}web/pdf_viewer.js`,`${e}web/pdf_viewer.css`])).then(()=>this.initDelay()),this.ngZone.runOutsideAngular(()=>this.initResize())}initResize(){an(this.win,"resize").pipe(wi(100),Oe(()=>this.autoReSize&&this._pdf!=null),Mt(this.destroy$)).subscribe(()=>this.updateSize())}ngOnChanges(e){this.inited&&!e.src&&this.render()}ngOnDestroy(){this.destroy()}};Go.\u0275fac=function(l){return new(l||Go)($(At))},Go.\u0275cmp=h({type:Go,selectors:[["pdf"]],hostVars:2,hostBindings:function(l,d){l&2&&k("d-block",!0)},inputs:{src:"src",pi:[2,"pi","pi",at],showAll:[2,"showAll","showAll",Y],renderText:[2,"renderText","renderText",Y],textLayerMode:"textLayerMode",showBorders:[2,"showBorders","showBorders",Y],stickToPage:[2,"stickToPage","stickToPage",Y],originalSize:[2,"originalSize","originalSize",Y],fitToPage:[2,"fitToPage","fitToPage",Y],zoom:[2,"zoom","zoom",at],zoomScale:"zoomScale",rotation:[2,"rotation","rotation",at],autoReSize:[2,"autoReSize","autoReSize",Y],externalLinkTarget:"externalLinkTarget",delay:[2,"delay","delay",at]},outputs:{change:"change"},exportAs:["pdf"],standalone:!0,features:[ht,Pt,f],decls:3,vars:1,consts:[[1,"pdf-container"],[1,"pdfViewer"]],template:function(l,d){l&1&&(C(0,Mu,1,0,"nz-skeleton"),r(1,"div",0),m(2,"div",1),a()),l&2&&M(!d.inited||d.loading?0:-1)},dependencies:[Dd],encapsulation:2,changeDetection:0});var Te=Go;Fe([Ve()],Te.prototype,"load",null);Fe([Ve()],Te.prototype,"resetDoc",null);Fe([Ve()],Te.prototype,"updateSize",null);Fe([Ve()],Te.prototype,"destroy",null);var Pa=(()=>{let e=class e{constructor(){this.one="https://raw.githubusercontent.com/mozilla/pdf.js/master/web/compressed.tracemonkey-pldi-09.pdf",this.two="https://raw.githubusercontent.com/mozilla/pdf.js/master/examples/learning/helloworld.pdf",this.src=this.one}handle(d){console.log(d)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-pdf-basic"]],standalone:!0,features:[f],decls:6,vars:1,consts:[["nz-button","","nzType","primary",3,"click"],[2,"height","300px",3,"change","src"]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"button",0),v("click",function(){return i.src=i.src===i.one?i.two:i.one}),t(2,"Change File"),a(),t(3,`
    `),r(4,"pdf",1),v("change",function(g){return i.handle(g)}),a(),t(5,`
  `)),o&2&&(c(4),s("src",i.src))},dependencies:[I,D,N,E,Te],encapsulation:2});let n=e;return n})();var Fa=["*"];function Nu(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(2);c(),V(l.title)}}function Eu(n,e){if(n&1&&(r(0,"div",0),C(1,Nu,2,1,"ng-container",1),a()),n&2){let l=b();c(),s("nzStringTemplateOutlet",l.title)}}var Hn=(()=>{let e=class e{constructor(){if(this.parentComp=S(Vt,{host:!0,optional:!0}),this.el=S(xt).nativeElement,this.ren=S(oe),this.parentComp==null)throw new Error("[se-title] must include 'se-container' component")}setClass(){let{el:d}=this,o=this.parentComp.gutter;this.ren.setStyle(d,"padding-left",`${o/2}px`),this.ren.setStyle(d,"padding-right",`${o/2}px`)}ngOnInit(){this.setClass()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["se-title"],["","se-title",""]],hostVars:2,hostBindings:function(o,i){o&2&&k("se__title",!0)},exportAs:["seTitle"],standalone:!0,features:[f],ngContentSelectors:Fa,decls:1,vars:0,template:function(o,i){o&1&&(J(),U(0))},encapsulation:2,changeDetection:0});let n=e;return n})(),Vt=(()=>{let e=class e{get gutter(){return this.nzLayout==="horizontal"?this._gutter:0}set gutter(d){this._gutter=d}get nzLayout(){return this._nzLayout}set nzLayout(d){this._nzLayout=d,d==="inline"&&(this.size="compact")}set errors(d){this.setErrors(d)}get margin(){return-(this.gutter/2)}get errorNotify(){return this.errorNotify$.pipe(Oe(d=>d!=null))}constructor(d){this.errorNotify$=new rn(null),this.noColon=!1,this.line=!1,d.attach(this,"se",{size:"default",nzLayout:"horizontal",gutter:32,col:2,labelWidth:150,firstVisual:!1,ingoreDirty:!1})}setErrors(d){for(let o of d)this.errorNotify$.next(o)}};e.\u0275fac=function(o){return new(o||e)($(At))},e.\u0275cmp=h({type:e,selectors:[["se-container"],["","se-container",""]],hostVars:16,hostBindings:function(o,i){o&2&&(Rt("margin-left",i.margin,"px")("margin-right",i.margin,"px"),k("ant-row",!0)("se__container",!0)("se__horizontal",i.nzLayout==="horizontal")("se__vertical",i.nzLayout==="vertical")("se__inline",i.nzLayout==="inline")("se__compact",i.size==="compact"))},inputs:{colInCon:[2,"se-container","colInCon",d=>d==null?null:at(d)],col:[2,"col","col",d=>d==null?null:at(d)],labelWidth:[2,"labelWidth","labelWidth",d=>d==null?null:at(d)],noColon:[2,"noColon","noColon",Y],title:"title",gutter:[2,"gutter","gutter",at],nzLayout:"nzLayout",size:"size",firstVisual:[2,"firstVisual","firstVisual",Y],ingoreDirty:[2,"ingoreDirty","ingoreDirty",Y],line:[2,"line","line",Y],errors:"errors"},exportAs:["seContainer"],standalone:!0,features:[ht,f],ngContentSelectors:Fa,decls:2,vars:1,consts:[["se-title",""],[4,"nzStringTemplateOutlet"]],template:function(o,i){o&1&&(J(),C(0,Eu,2,1,"div",0),U(1)),o&2&&M(i.title?0:-1)},dependencies:[Hn,Bt],encapsulation:2,changeDetection:0});let n=e;return n})();var Iu=["contentElement"],Pu=["*"],Fu=(n,e)=>({"ant-form-item-required":n,"se__no-colon":e});function Ru(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(2);c(),V(l.label)}}function Au(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(3);c(),V(l.optional)}}function Bu(n,e){if(n&1&&m(0,"i",11),n&2){let l=b(3);s("nzTooltipTitle",l.optionalHelp)("nzTooltipColor",l.optionalHelpColor)}}function Vu(n,e){if(n&1&&(r(0,"span",10),C(1,Au,2,1,"ng-container",8)(2,Bu,1,2,"i",11),a()),n&2){let l=b(2);k("se__label-optional-no-text",!l.optional),c(),s("nzStringTemplateOutlet",l.optional),c(),M(l.optionalHelp?2:-1)}}function Lu(n,e){if(n&1&&(r(0,"label",2)(1,"span",7),C(2,Ru,2,1,"ng-container",8),a(),C(3,Vu,3,4,"span",9),a()),n&2){let l=b();s("ngClass",Be(4,Fu,l.required,l._noColon)),T("for",l._id),c(2),s("nzStringTemplateOutlet",l.label),c(),M(l.optional||l.optionalHelp?3:-1)}}function Ou(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(2);c(),V(l._error)}}function ju(n,e){if(n&1&&(r(0,"div",5)(1,"div",12),C(2,Ou,2,1,"ng-container",8),a()()),n&2){let l=b();s("@helpMotion",void 0),c(2),s("nzStringTemplateOutlet",l._error)}}function Hu(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(2);c(),V(l.extra)}}function Wu(n,e){if(n&1&&(r(0,"div",6),C(1,Hu,2,1,"ng-container",8),a()),n&2){let l=b();c(),s("nzStringTemplateOutlet",l.extra)}}var ui="se",Uu=0,Wt=(()=>{let e=class e{set error(d){this.errorData=typeof d=="string"||d instanceof He?{"":d}:d}set id(d){this._id=d,this._autoId=!1}get paddingValue(){return this.parentComp.gutter/2}get showErr(){return this.invalid&&!!this._error&&!this.compact}get compact(){return this.parentComp.size==="compact"}get ngControl(){return this.ngModel||this.formControlName}constructor(){if(this.parentComp=S(Vt,{host:!0,optional:!0}),this.el=S(xt).nativeElement,this.rep=S(Co),this.ren=S(oe),this.cdr=S(lt),this.statusSrv=S($n),this.destroy$=S(Lt),this.clsMap=[],this.inited=!1,this.onceFlag=!1,this.errorData={},this.isBindModel=!1,this.invalid=!1,this._labelWidth=null,this._noColon=null,this.optional=null,this.optionalHelp=null,this.required=!1,this.controlClass="",this.hideLabel=!1,this._id=`_se-${++Uu}`,this._autoId=!0,this.parentComp==null)throw new Error("[se] must include 'se-container' component");this.parentComp.errorNotify.pipe(Mt(),Oe(d=>this.inited&&this.ngControl!=null&&this.ngControl.name===d.name)).subscribe(d=>{this.error=d.error,this.updateStatus(this.ngControl.invalid)})}setClass(){let{el:d,ren:o,clsMap:i,col:p,cdr:g,line:u,labelWidth:K,rep:W,noColon:bt}=this,_t=this.parentComp;this._noColon=bt??_t.noColon,this._labelWidth=_t.nzLayout==="horizontal"?K??_t.labelWidth:null,i.forEach(Le=>o.removeClass(d,Le)),i.length=0;let Zt=_t.colInCon||_t.col,Ut=_t.nzLayout==="horizontal"?W.genCls(p??Zt,Zt):[];return i.push("ant-form-item",...Ut,`${ui}__item`),(u||_t.line)&&i.push(`${ui}__line`),i.forEach(Le=>o.addClass(d,Le)),g.detectChanges(),this}bindModel(){if(!(!this.ngControl||this.isBindModel)){if(this.isBindModel=!0,this.ngControl.statusChanges.pipe(Mt(this.destroy$)).subscribe(d=>this.updateStatus(d==="INVALID")),this._autoId){let d=this.ngControl.valueAccessor,o=(d?.elementRef||d?._elementRef)?.nativeElement;o&&(o.id?this._id=o.id:o.id=this._id)}if(this.required!==!0){let d=this.ngControl?.control?.hasValidator(me.required);d!==!0&&(d=(this.ngControl?._rawValidators).find(i=>i instanceof ie)!=null),this.required=d,this.cdr.detectChanges()}}}updateStatus(d){if(this.ngControl?.disabled||this.ngControl?.isDisabled)return;this.invalid=!this.onceFlag&&d&&this.parentComp.ingoreDirty===!1&&!this.ngControl?.dirty?!1:d;let o=this.ngControl?.errors;if(o!=null&&Object.keys(o).length>0){let i=Object.keys(o)[0]||"",p=this.errorData[i];this._error=p??(this.errorData[""]||"")}this.statusSrv.formStatusChanges.next({status:this.invalid?"error":"",hasFeedback:!1}),this.cdr.detectChanges()}checkContent(){let d=this.contentElement.nativeElement,o=`${ui}__item-empty`;yo(d)?this.ren.addClass(d,o):this.ren.removeClass(d,o)}ngAfterContentInit(){this.checkContent()}ngOnChanges(){this.onceFlag=this.parentComp.firstVisual,this.inited&&this.setClass().bindModel()}ngAfterViewInit(){this.setClass().bindModel(),this.inited=!0,this.onceFlag&&Promise.resolve().then(()=>{this.updateStatus(this.ngControl?.invalid),this.onceFlag=!1})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["se"]],contentQueries:function(o,i,p){if(o&1&&(te(p,gt,7),te(p,Ne,7)),o&2){let g;q(g=G())&&(i.ngModel=g.first),q(g=G())&&(i.formControlName=g.first)}},viewQuery:function(o,i){if(o&1&&rt(Iu,7),o&2){let p;q(p=G())&&(i.contentElement=p.first)}},hostVars:10,hostBindings:function(o,i){o&2&&(Rt("padding-left",i.paddingValue,"px")("padding-right",i.paddingValue,"px"),k("se__hide-label",i.hideLabel)("ant-form-item-has-error",i.invalid)("ant-form-item-with-help",i.showErr))},inputs:{optional:"optional",optionalHelp:"optionalHelp",optionalHelpColor:"optionalHelpColor",error:"error",extra:"extra",label:"label",col:[2,"col","col",d=>d==null?null:at(d)],required:[2,"required","required",Y],controlClass:"controlClass",line:[2,"line","line",d=>d==null?null:Y(d)],labelWidth:[2,"labelWidth","labelWidth",d=>d==null?null:at(d)],noColon:[2,"noColon","noColon",d=>d==null?null:Y(d)],hideLabel:[2,"hideLabel","hideLabel",Y],id:"id"},exportAs:["se"],standalone:!0,features:[Ae([$n]),ht,Pt,f],ngContentSelectors:Pu,decls:9,vars:10,consts:[["contentElement",""],[1,"ant-form-item-label"],[1,"se__label",3,"ngClass"],[1,"ant-form-item-control","se__control"],[1,"ant-form-item-control-input-content",3,"cdkObserveContent"],[1,"ant-form-item-explain","ant-form-item-explain-connected"],[1,"ant-form-item-extra"],[1,"se__label-text"],[4,"nzStringTemplateOutlet"],[1,"se__label-optional",3,"se__label-optional-no-text"],[1,"se__label-optional"],["nz-tooltip","","nz-icon","","nzType","question-circle",3,"nzTooltipTitle","nzTooltipColor"],["role","alert",1,"ant-form-item-explain-error"]],template:function(o,i){if(o&1){let p=w();J(),r(0,"div",1),C(1,Lu,4,7,"label",2),a(),r(2,"div",3)(3,"div")(4,"div",4,0),v("cdkObserveContent",function(){return y(p),x(i.checkContent())}),U(6),a()(),C(7,ju,3,2,"div",5)(8,Wu,2,1,"div",6),a()}o&2&&(Rt("width",i._labelWidth,"px"),k("se__nolabel",i.hideLabel||!i.label),c(),M(i.label?1:-1),c(2),mn("ant-form-item-control-input ",i.controlClass,""),c(4),M(i.showErr?7:-1),c(),M(i.extra&&!i.compact?8:-1))},dependencies:[we,Bt,de,Tt,Ue],encapsulation:2,data:{animation:[td]},changeDetection:0});let n=e;return n})();var Qt=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=Kt({type:e}),e.\u0275inj=Xt({imports:[Ce,Se,Ot,xe]});let n=e;return n})();var Gu=["pdf"],$u=(n,e)=>({$implicit:n,level:e}),Qu=n=>({$implicit:n,level:0});function Zu(n,e){if(n&1){let l=w();t(0,`
            `),r(1,"se",26),t(2,`
              `),r(3,"nz-switch",14),O("ngModelChange",function(o){y(l);let i=b();return A(i.fitToPage,o)||(i.fitToPage=o),x(o)}),a(),t(4,`
            `),a(),t(5,`
          `)}if(n&2){let l=b();c(3),L("ngModel",l.fitToPage)}}function Xu(n,e){if(n&1){let l=w();t(0,`
            `),r(1,"se",27),t(2,`
              `),r(3,"nz-select",14),O("ngModelChange",function(o){y(l);let i=b();return A(i.zoomScale,o)||(i.zoomScale=o),x(o)}),t(4,`
                `),m(5,"nz-option",28),t(6,`
                `),m(7,"nz-option",29),t(8,`
                `),m(9,"nz-option",30),t(10,`
              `),a(),t(11,`
            `),a(),t(12,`
          `)}if(n&2){let l=b();c(3),L("ngModel",l.zoomScale)}}function Ku(n,e){if(n&1){let l=w();t(0,`
            `),r(1,"se",31),t(2,`
              `),r(3,"nz-switch",14),O("ngModelChange",function(o){y(l);let i=b();return A(i.stickToPage,o)||(i.stickToPage=o),x(o)}),a(),t(4,`
            `),a(),t(5,`
          `)}if(n&2){let l=b();c(3),L("ngModel",l.stickToPage)}}function Ju(n,e){if(n&1){let l=w();t(0,`
            `),r(1,"se",32),t(2,`
              `),r(3,"nz-pagination",33),O("nzPageIndexChange",function(o){y(l);let i=b();return A(i.pi,o)||(i.pi=o),x(o)}),a(),t(4,`
            `),a(),t(5,`
          `)}if(n&2){let l=b();c(3),L("nzPageIndex",l.pi),s("nzPageSize",1)("nzTotal",l.total)}}function Yu(n,e){n&1&&(t(0,`
                `),m(1,"nz-empty"),t(2,`
              `))}function t0(n,e){n&1&&ge(0)}function e0(n,e){if(n&1&&(t(0,`
                      `),r(1,"ul"),t(2,`
                        `),C(3,t0,1,0,"ng-container",36),t(4,`
                      `),a(),t(5,`
                    `)),n&2){let l=b().$implicit,d=b().level;b();let o=_(5);c(3),s("ngTemplateOutlet",o)("ngTemplateOutletContext",Be(2,$u,l.items,d+1))}}function o0(n,e){if(n&1){let l=w();t(0,`
                  `),r(1,"li"),t(2,`
                    `),r(3,"a",35),v("click",function(){let o=y(l).$implicit,i=b(3);return x(i.navigateTo(o.dest))}),t(4),a(),t(5,`
                    `),C(6,e0,6,5),a(),t(7,`
                `)}if(n&2){let l=e.$implicit,d=b().level;c(),Rt("padding-left",d*16,"px"),c(3),V(l.title),c(2),M(l.items&&l.items.length>0?6:-1)}}function n0(n,e){if(n&1&&(t(0,`
                `),St(1,o0,8,4,null,null,kt)),n&2){let l=e.$implicit;c(),zt(l)}}function i0(n,e){n&1&&ge(0)}function d0(n,e){if(n&1&&(t(0,`
                `),r(1,"ul"),t(2,`
                  `),C(3,i0,1,0,"ng-container",36),t(4,`
                `),a(),t(5,`
              `)),n&2){b();let l=_(5),d=b();c(3),s("ngTemplateOutlet",l)("ngTemplateOutletContext",Q(2,Qu,d.outlineList))}}function r0(n,e){if(n&1&&(t(0,`
            `),r(1,"se",34),t(2,`
              `),C(3,Yu,3,0)(4,n0,3,0,"ng-template",null,3,P),t(6,`
              `),C(7,d0,6,4),a(),t(8,`
          `)),n&2){let l=b();c(),s("label",null),c(2),M(l.outlineList===null?3:-1),c(4),M(l.outlineList?7:-1)}}var Ra=(()=>{let e=class e{constructor(d){this.cdr=d,this.src="https://raw.githubusercontent.com/mozilla/pdf.js/master/web/compressed.tracemonkey-pldi-09.pdf",this.pi=1,this.total=0,this.renderText=!0,this.stickToPage=!0,this.originalSize=!0,this.fitToPage=!1,this.showAll=!0,this.zoomScale="page-width",this.rotation=0,this.zoom=1,this.autoReSize=!0,this.outline=!1,this.outlineList=null,this.q="",this.search$=new Yt,this.beforeUpload=o=>{let i=new FileReader;return i.onload=p=>{this.src=p.target.result,this.cdr.detectChanges()},i.readAsArrayBuffer(o),!1}}ngOnInit(){this.search$.subscribe(d=>{d!==this.q?(this.q=d,this.comp.eventBus?.dispatch("find",{query:this.q,highlightAll:!0})):this.comp.eventBus?.dispatch("findagain",{query:this.q,highlightAll:!0})})}change(d){switch(d.type){case"loaded":this.total=d.total,this.loadOutline();break;case"pi":this.pi=d.pi;break}d.type!=="load-progress"&&console.log(d)}uploadSrc(d){this.src=d}changeShowAllPages(d){this.stickToPage=!0}loadOutline(){this.comp.pdf?.getOutline().then(d=>{this.outlineList=d})}navigateTo(d){this.comp.linkService?.goToDestination(d)}};e.\u0275fac=function(o){return new(o||e)($(lt))},e.\u0275cmp=h({type:e,selectors:[["components-pdf-design"]],viewQuery:function(o,i){if(o&1&&rt(Gu,5),o&2){let p;q(p=G())&&(i.comp=p.first)}},standalone:!0,features:[f],decls:78,vars:28,consts:[["url",""],["qIpt",""],["pdf",""],["outlineTpl",""],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","8"],["se-container","","col","1"],["label","Url of the pdf file (Press enter to run)"],["nz-input","",3,"keyup.enter","ngModel"],["label","Local of the pdf file"],["nzAccept",".pdf",3,"nzBeforeUpload"],["nz-button",""],["nz-icon","","nzType","upload"],["label","Render Text"],[3,"ngModelChange","ngModel"],["label","Original size"],["label","Auto size"],["label","Show All Pages"],["label","Zoom"],[3,"ngModelChange","ngModel","nzStep"],["label","Rotation"],["label","Outline"],["label","Search pdf"],["nz-input","","placeholder","Search...",3,"input","keyup.enter"],["nz-col","","nzSpan","16",2,"background-color","#fafafa","padding","32px 0"],[2,"height","600px",3,"change","src","pi","renderText","showAll","originalSize","fitToPage","stickToPage","zoomScale","zoom","rotation","autoReSize"],["label","Fit to page"],["label","Zoom Scale"],["nzValue","page-height","nzLabel","Page Height"],["nzValue","page-fit","nzLabel","Page Fit"],["nzValue","page-width","nzLabel","Page Width"],["label","Stick to page "],["label","Page"],["nzSimple","",3,"nzPageIndexChange","nzPageIndex","nzPageSize","nzTotal"],[3,"label"],[3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"div",4),t(2,`
      `),r(3,"div",5),t(4,`
        `),r(5,"div",6),t(6,`
          `),r(7,"se",7),t(8,`
            `),r(9,"input",8,0),v("keyup.enter",function(){y(p);let u=_(10);return x(i.uploadSrc(u.value))}),a(),t(11,`
          `),a(),t(12,`
          `),r(13,"se",9),t(14,`
            `),r(15,"nz-upload",10),t(16,`
              `),r(17,"button",11),m(18,"i",12),t(19,"Select File"),a(),t(20,`
            `),a(),t(21,`
          `),a(),t(22,`
          `),r(23,"se",13),t(24,`
            `),r(25,"nz-switch",14),O("ngModelChange",function(u){return y(p),A(i.renderText,u)||(i.renderText=u),x(u)}),a(),t(26,`
          `),a(),t(27,`
          `),r(28,"se",15),t(29,`
            `),r(30,"nz-switch",14),O("ngModelChange",function(u){return y(p),A(i.originalSize,u)||(i.originalSize=u),x(u)}),a(),t(31,`
          `),a(),t(32,`
          `),C(33,Zu,6,1),r(34,"se",16),t(35,`
            `),r(36,"nz-switch",14),O("ngModelChange",function(u){return y(p),A(i.autoReSize,u)||(i.autoReSize=u),x(u)}),a(),t(37,`
          `),a(),t(38,`
          `),r(39,"se",17),t(40,`
            `),r(41,"nz-switch",14),O("ngModelChange",function(u){return y(p),A(i.showAll,u)||(i.showAll=u),x(u)}),v("ngModelChange",function(u){return y(p),x(i.changeShowAllPages(u))}),a(),t(42,`
          `),a(),t(43,`
          `),C(44,Xu,13,1),r(45,"se",18),t(46,`
            `),r(47,"nz-input-number",19),O("ngModelChange",function(u){return y(p),A(i.zoom,u)||(i.zoom=u),x(u)}),a(),t(48,`
          `),a(),t(49,`
          `),C(50,Ku,6,1)(51,Ju,6,3),r(52,"se",20),t(53,`
            `),r(54,"nz-input-number",19),O("ngModelChange",function(u){return y(p),A(i.rotation,u)||(i.rotation=u),x(u)}),a(),t(55,`
          `),a(),t(56,`
          `),r(57,"se",21),t(58,`
            `),r(59,"nz-switch",14),O("ngModelChange",function(u){return y(p),A(i.outline,u)||(i.outline=u),x(u)}),a(),t(60,`
          `),a(),t(61,`
          `),C(62,r0,9,3),r(63,"se",22),t(64,`
            `),r(65,"input",23,1),v("input",function(){y(p);let u=_(66);return x(i.search$.next(u.value))})("keyup.enter",function(){y(p);let u=_(66);return x(i.search$.next(u.value))}),a(),t(67,`
          `),a(),t(68,`
        `),a(),t(69,`
      `),a(),t(70,`
      `),r(71,"div",24),t(72,`
        `),r(73,"pdf",25,2),v("change",function(u){return y(p),x(i.change(u))}),a(),t(75,`
      `),a(),t(76,`
    `),a(),t(77,`
  `)}o&2&&(c(),s("nzGutter",16),c(8),s("ngModel",i.src),c(6),s("nzBeforeUpload",i.beforeUpload),c(10),L("ngModel",i.renderText),c(5),L("ngModel",i.originalSize),c(3),M(i.originalSize?33:-1),c(3),L("ngModel",i.autoReSize),c(5),L("ngModel",i.showAll),c(3),M(i.originalSize?-1:44),c(3),L("ngModel",i.zoom),s("nzStep",.1),c(3),M(i.showAll?50:-1),c(),M(i.stickToPage?51:-1),c(3),L("ngModel",i.rotation),s("nzStep",90),c(5),L("ngModel",i.outline),c(3),M(i.outline?62:-1),c(11),s("src",i.src)("pi",i.pi)("renderText",i.renderText)("showAll",i.showAll)("originalSize",i.originalSize)("fitToPage",i.fitToPage)("stickToPage",i.stickToPage)("zoomScale",i.zoomScale)("zoom",i.zoom)("rotation",i.rotation)("autoReSize",i.autoReSize))},dependencies:[I,D,N,E,Te,B,R,F,pt,st,ut,Ct,ct,gt,Ad,Rd,Qt,Vt,Wt,Ot,Tt,Io,Eo,wo,_o,To,kn,wn,xd,yd,_n,bd],encapsulation:2});let n=e;return n})();var Aa=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/pdf/index.en-US.md","zh-CN":"packages/abc/pdf/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>Pdf view based on <a target="_blank" href="https://mozilla.github.io/pdf.js/" data-url="https://mozilla.github.io/pdf.js/">pdf.js</a>.</p><p>pdf.js libary is lazy loading by default\uFF0Cyou can change the default root CDN path via <a href="/docs/global-config" data-url="/docs/global-config">Global Configuration</a>.</p><blockquote><p>The component inspired by <a target="_blank" href="https://github.com/VadimDez/ng2-pdf-viewer" data-url="https://github.com/VadimDez/ng2-pdf-viewer">ng2-pdf-viewer</a>.</p></blockquote><p><strong>Use local path</strong></p><pre class="hljs language-bash"><code>npm i -S pdfjs-dist</code></pre><pre class="hljs language-json"><code>// angular.json
{
  "glob": "{build,web}/**",
  "input": "./node_modules/pdfjs-dist/",
  "ignore": ["*.js.map", "*.d.ts"],
  "output": "assets/pdfjs/"
}</code></pre><pre class="hljs language-ts"><code>// global-config.module.ts
const alainConfig: AlainConfig = {
  pdf: {
    lib: '/assets/pdfjs/'
  }
};</code></pre></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="pdf"><a class="lake-link"><i data-anchor="pdf"></i></a>pdf<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[src]</code></td><td>Specify path of the pdf</td><td><code>string, object, UInt8Array</code></td><td>-</td><td>-</td></tr><tr><td><code>[pi]</code></td><td>Current page</td><td><code>number</code></td><td><code>1</code></td><td>-</td></tr><tr><td><code>[showAll]</code></td><td>Whether to show all pages</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[renderText]</code></td><td>Enable text rendering, allows to select text</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[textLayerMode]</code></td><td>Text rendering mode</td><td><code>PdfTextLayerMode</code></td><td><code>ENABLE</code></td><td>-</td></tr><tr><td><code>[showBorders]</code></td><td>Show page borders</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[stickToPage]</code></td><td>Sticks view to the page</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[originalSize]</code></td><td>Control document display size, <code>true</code> size will be as same as original document, <code>false</code> size will be as same as container block</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[fitToPage]</code></td><td>Works in combination with <code>originalSize</code>. You can show your document in original size, and make sure that it's not bigger then container block.</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[zoom]</code></td><td>Zoom pdf</td><td><code>number</code></td><td><code>1</code></td><td>-</td></tr><tr><td><code>[zoomScale]</code></td><td>Defines how the Zoom scale is computed</td><td><code>PdfZoomScale</code></td><td><code>page-width</code></td><td>-</td></tr><tr><td><code>[rotation]</code></td><td>Rotate PDF, Allowed step is 90 degree, ex. 0, 90, 180</td><td><code>number</code></td><td><code>0</code></td><td>-</td></tr><tr><td><code>[autoReSize]</code></td><td>Turn on or off auto resize</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[externalLinkTarget]</code></td><td>Link target of the external</td><td><code>PdfExternalLinkTarget</code></td><td><code>BLANK</code></td><td>-</td></tr><tr><td><code>[delay]</code></td><td>Delayed rendering, unit: ms</td><td><code>number</code></td><td><code>0</code></td><td>-</td></tr><tr><td><code>(change)</code></td><td>change event</td><td><code>EventEmitter&lt;PdfChangeEvent></code></td><td>-</td><td>-</td></tr></tbody></table><h3 id="Componentproperties"><a class="lake-link"><i data-anchor="Componentproperties"></i></a>Componentproperties</h3><p>Used API interfaces.</p><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>pdf</code></td><td>Current PDF instance</td></tr><tr><td><code>eventBus</code></td><td>Event bus for PDF files, eg: find document, etc.</td></tr><tr><td><code>findController</code></td><td>Find controller, now instead by <code>eventBus</code></td></tr><tr><td><code>pageViewer</code></td><td>View Controls</td></tr><tr><td><code>linkService</code></td><td>Navigation Service</td></tr></tbody></table><h2 id="FAQ"><a class="lake-link"><i data-anchor="FAQ"></i></a>FAQ</h2><h3 id="Whyneedtospecifytheheightofthepdfcomponent"><a class="lake-link"><i data-anchor="Whyneedtospecifytheheightofthepdfcomponent"></i></a>Whyneedtospecifytheheightofthepdfcomponent</h3><p>When <code>showAll</code> is enabled, if you want to make the page number control effective, you need to ensure that the height of the component is a valid value.</p>`,meta:{type:"Basic",order:3,title:"pdf",subtitle:"Pdf",cols:1,module:"import { PdfModule } from '@delon/abc/pdf';"},toc:[{id:"API",title:"API",h:2,children:[{id:"pdf",title:"pdf:standalone",h:3},{id:"Componentproperties",title:"Component properties",h:3}]},{id:"FAQ",title:"FAQ",h:2,children:[{id:"Whyneedtospecifytheheightofthepdfcomponent",title:"Why need to specify the height of the pdf component",h:3}]}]},"zh-CN":{content:`<section class="markdown"><p>\u57FA\u4E8E <a target="_blank" href="https://mozilla.github.io/pdf.js/" data-url="https://mozilla.github.io/pdf.js/">pdf.js</a> \u7684PDF\u9884\u89C8\u7EC4\u4EF6\u3002</p><p>\u9ED8\u8BA4PDF\u9884\u89C8\u5E76\u4E0D\u662F\u521A\u9700\u7684\u539F\u56E0\uFF0C\u56E0\u6B64\u91C7\u7528\u4E00\u79CD\u5EF6\u8FDF\u52A0\u8F7D\u811A\u672C\u7684\u5F62\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u914D\u7F6E\u6765\u6539\u53D8\u9ED8\u8BA4 pdf.js \u7C7B\u5E93\u7684\u6839\u8DEF\u5F84\u3002</p><blockquote><p>\u7EC4\u4EF6\u4E5F\u662F\u53D7 <a target="_blank" href="https://github.com/VadimDez/ng2-pdf-viewer" data-url="https://github.com/VadimDez/ng2-pdf-viewer">ng2-pdf-viewer</a> \u542F\u53D1\u3002</p></blockquote><p><strong>\u4F7F\u7528\u672C\u5730\u8DEF\u5F84</strong></p><pre class="hljs language-bash"><code>npm i -S pdfjs-dist</code></pre><pre class="hljs language-json"><code>// angular.json
{
  "glob": "{build,web}/**",
  "input": "./node_modules/pdfjs-dist/",
  "ignore": ["*.js.map", "*.d.ts"],
  "output": "assets/pdfjs/"
}</code></pre><pre class="hljs language-ts"><code>// global-config.module.ts
const alainConfig: AlainConfig = {
  pdf: {
    lib: '/assets/pdfjs/'
  }
};</code></pre></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="pdf"><a class="lake-link"><i data-anchor="pdf"></i></a>pdf<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[src]</code></td><td>\u6307\u5B9A\u6587\u6863\u8DEF\u5F84</td><td><code>string, object, UInt8Array</code></td><td>-</td><td>-</td></tr><tr><td><code>[pi]</code></td><td>\u5F53\u524D\u9875</td><td><code>number</code></td><td><code>1</code></td><td>-</td></tr><tr><td><code>[showAll]</code></td><td>\u662F\u5426\u663E\u793A\u5168\u90E8\u9875</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[renderText]</code></td><td>\u662F\u5426\u542F\u7528\u6587\u5B57\u5C42\uFF0C\u5F00\u542F\u540E\u5141\u8BB8\u6587\u5B57\u9009\u62E9</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[textLayerMode]</code></td><td>\u6587\u5B57\u5C42\u6E32\u67D3\u6A21\u5F0F</td><td><code>PdfTextLayerMode</code></td><td><code>ENABLE</code></td><td>-</td></tr><tr><td><code>[showBorders]</code></td><td>\u662F\u5426\u663E\u793A\u9875\u9762\u8FB9\u6846</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[stickToPage]</code></td><td>\u662F\u5426\u89C6\u91CE\u4FDD\u6301\u5728 <code>pi</code> \u9875\u4E0A</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[originalSize]</code></td><td>\u63A7\u5236\u6587\u6863\u663E\u793A\u5927\u5C0F\uFF0C<code>true</code> \u6309\u539F\u59CB\u5927\u5C0F\uFF0C<code>false</code> \u6309\u5BB9\u5668\u5927\u5C0F</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[fitToPage]</code></td><td>\u63A7\u5236\u539F\u59CB\u5C3A\u5BF8\u4E0D\u4F1A\u8D85\u51FA\u5BB9\u5668\u5927\u5C0F</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[zoom]</code></td><td>\u63A7\u5236\u7F29\u653E\u6587\u6863</td><td><code>number</code></td><td><code>1</code></td><td>-</td></tr><tr><td><code>[zoomScale]</code></td><td>\u7F29\u653E\u6587\u6863\u7684\u8BA1\u7B97\u65B9\u5F0F</td><td><code>PdfZoomScale</code></td><td><code>page-width</code></td><td>-</td></tr><tr><td><code>[rotation]</code></td><td>\u65CB\u8F6C\u6587\u6863</td><td><code>number</code></td><td><code>0</code></td><td>-</td></tr><tr><td><code>[autoReSize]</code></td><td>\u662F\u5426\u81EA\u52A8\u7F29\u653E</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[externalLinkTarget]</code></td><td>\u5916\u90E8\u94FE\u63A5\u6253\u5F00\u5F62\u5F0F</td><td><code>PdfExternalLinkTarget</code></td><td><code>BLANK</code></td><td>-</td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u521D\u59CB\u5316\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td>-</td><td>-</td></tr><tr><td><code>(change)</code></td><td>\u53D8\u66F4\u65F6\u56DE\u8C03</td><td><code>EventEmitter&lt;PdfChangeEvent></code></td><td>-</td><td>-</td></tr></tbody></table><h3 id="\u7EC4\u4EF6\u5C5E\u6027"><a class="lake-link"><i data-anchor="\u7EC4\u4EF6\u5C5E\u6027"></i></a>\u7EC4\u4EF6\u5C5E\u6027</h3><p>\u63D0\u4F9B\u4E00\u4E9B\u5E38\u7528\u7684API\u63A5\u53E3\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>pdf</code></td><td>\u5F53\u524D PDF \u5B9E\u4F8B</td></tr><tr><td><code>eventBus</code></td><td>PDF \u6587\u4EF6\u7684\u4E8B\u4EF6\u603B\u7EBF\uFF0C\u4F8B\u5982\uFF1A\u67E5\u627E\u6587\u6863\u7B49</td></tr><tr><td><code>findController</code></td><td>\u67E5\u627E\u63A7\u5236\u5668\uFF0C\u4E0D\u591F\u65B0\u7248\u672C\u5DF2\u7ECF\u88AB <code>eventBus</code> \u66FF\u4EE3</td></tr><tr><td><code>pageViewer</code></td><td>\u67E5\u770B\u63A7\u4EF6</td></tr><tr><td><code>linkService</code></td><td>\u5BFC\u822A\u670D\u52A1</td></tr></tbody></table><h2 id="\u5E38\u89C1\u95EE\u9898"><a class="lake-link"><i data-anchor="\u5E38\u89C1\u95EE\u9898"></i></a>\u5E38\u89C1\u95EE\u9898</h2><h3 id="\u4E3A\u4EC0\u4E48\u6709\u65F6\u9700\u8981\u6307\u5B9A\u9AD8\u5EA6"><a class="lake-link"><i data-anchor="\u4E3A\u4EC0\u4E48\u6709\u65F6\u9700\u8981\u6307\u5B9A\u9AD8\u5EA6"></i></a>\u4E3A\u4EC0\u4E48\u6709\u65F6\u9700\u8981\u6307\u5B9A\u9AD8\u5EA6</h3><p>\u5F53\u542F\u7528\u663E\u793A\u5168\u90E8\u9875\u65F6\uFF0C\u5982\u679C\u8981\u8BA9\u9875\u7801\u7684\u63A7\u5236\u4EA7\u751F\u6709\u6548\uFF0C\u9700\u8981\u786E\u4FDD\u7EC4\u4EF6\u7684\u9AD8\u5EA6\u662F\u4E00\u4E2A\u6709\u6548\u503C\u3002</p>',meta:{type:"Basic",order:3,title:"pdf",subtitle:"Pdf",cols:1,module:"import { PdfModule } from '@delon/abc/pdf';"},toc:[{id:"API",title:"API",h:2,children:[{id:"pdf",title:"pdf:standalone",h:3},{id:"\u7EC4\u4EF6\u5C5E\u6027",title:"\u7EC4\u4EF6\u5C5E\u6027",h:3}]},{id:"\u5E38\u89C1\u95EE\u9898",title:"\u5E38\u89C1\u95EE\u9898",h:2,children:[{id:"\u4E3A\u4EC0\u4E48\u6709\u65F6\u9700\u8981\u6307\u5B9A\u9AD8\u5EA6",title:"\u4E3A\u4EC0\u4E48\u6709\u65F6\u9700\u8981\u6307\u5B9A\u9AD8\u5EA6",h:3}]}]}},demo:!0},this.codes=[{id:"components-pdf-basic",meta:{order:1,title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"}},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';

import { PdfComponent, type PdfChangeEvent } from '@delon/abc/pdf';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-pdf-basic',
  template: \`
    <button nz-button nzType="primary" (click)="src = src === one ? two : one">Change File</button>
    <pdf [src]="src" style="height: 300px" (change)="handle($event)" />
  \`,
  standalone: true,
  imports: [NzButtonModule, PdfComponent]
})
export class ComponentsPdfBasicComponent {
  one = \`https://raw.githubusercontent.com/mozilla/pdf.js/master/web/compressed.tracemonkey-pldi-09.pdf\`;
  two = \`https://raw.githubusercontent.com/mozilla/pdf.js/master/examples/learning/helloworld.pdf\`;
  src = this.one;

  handle(ev: PdfChangeEvent): void {
    console.log(ev);
  }
}`,lang:"ts",componentName:"ComponentsPdfBasicComponent",point:0,name:"basic",urls:"packages/abc/pdf/demo/basic.md",type:"demo"},{id:"components-pdf-design",meta:{order:2,title:{"zh-CN":"\u5B9A\u5236\u5316","en-US":"Customization"}},summary:{"zh-CN":"<p>\u63D0\u4F9B\u4E30\u5BCC\u63A5\u53E3\u7528\u4E8E\u5B9A\u5236\u5316\u3002</p>","en-US":"<p>Provide rich interfaces for customization.</p>"},code:`import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

import { PdfChangeEvent, PdfComponent, PdfZoomScale } from '@delon/abc/pdf';
import { SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'components-pdf-design',
  template: \`
    <div nz-row [nzGutter]="16">
      <div nz-col nzSpan="8">
        <div se-container col="1">
          <se label="Url of the pdf file (Press enter to run)">
            <input #url nz-input [ngModel]="src" (keyup.enter)="uploadSrc(url.value)" />
          </se>
          <se label="Local of the pdf file">
            <nz-upload nzAccept=".pdf" [nzBeforeUpload]="beforeUpload">
              <button nz-button><i nz-icon nzType="upload"></i>Select File</button>
            </nz-upload>
          </se>
          <se label="Render Text">
            <nz-switch [(ngModel)]="renderText" />
          </se>
          <se label="Original size">
            <nz-switch [(ngModel)]="originalSize" />
          </se>
          @if (originalSize) {
            <se label="Fit to page">
              <nz-switch [(ngModel)]="fitToPage" />
            </se>
          }
          <se label="Auto size">
            <nz-switch [(ngModel)]="autoReSize" />
          </se>
          <se label="Show All Pages">
            <nz-switch [(ngModel)]="showAll" (ngModelChange)="changeShowAllPages($event)" />
          </se>
          @if (!originalSize) {
            <se label="Zoom Scale">
              <nz-select [(ngModel)]="zoomScale">
                <nz-option nzValue="page-height" nzLabel="Page Height" />
                <nz-option nzValue="page-fit" nzLabel="Page Fit" />
                <nz-option nzValue="page-width" nzLabel="Page Width" />
              </nz-select>
            </se>
          }
          <se label="Zoom">
            <nz-input-number [(ngModel)]="zoom" [nzStep]="0.1" />
          </se>
          @if (showAll) {
            <se label="Stick to page ">
              <nz-switch [(ngModel)]="stickToPage" />
            </se>
          }
          @if (stickToPage) {
            <se label="Page">
              <nz-pagination [(nzPageIndex)]="pi" [nzPageSize]="1" [nzTotal]="total" nzSimple />
            </se>
          }
          <se label="Rotation">
            <nz-input-number [(ngModel)]="rotation" [nzStep]="90" />
          </se>
          <se label="Outline">
            <nz-switch [(ngModel)]="outline" />
          </se>
          @if (outline) {
            <se [label]="null">
              @if (outlineList === null) {
                <nz-empty />
              }
              <ng-template #outlineTpl let-ls let-level="level">
                @for (i of ls; track $index) {
                  <li [style.paddingLeft.px]="level * 16">
                    <a (click)="navigateTo(i.dest)">{{ i.title }}</a>
                    @if (i.items && i.items.length > 0) {
                      <ul>
                        <ng-container
                          *ngTemplateOutlet="outlineTpl; context: { $implicit: i.items, level: level + 1 }"
                        />
                      </ul>
                    }
                  </li>
                }
              </ng-template>
              @if (outlineList) {
                <ul>
                  <ng-container *ngTemplateOutlet="outlineTpl; context: { $implicit: outlineList, level: 0 }" />
                </ul>
              }
            </se>
          }
          <se label="Search pdf">
            <input
              #qIpt
              nz-input
              placeholder="Search..."
              (input)="search$.next(qIpt.value)"
              (keyup.enter)="search$.next(qIpt.value)"
            />
          </se>
        </div>
      </div>
      <div nz-col nzSpan="16" style="background-color: #fafafa; padding: 32px 0;">
        <pdf
          #pdf
          [src]="src"
          [pi]="pi"
          [renderText]="renderText"
          [showAll]="showAll"
          [originalSize]="originalSize"
          [fitToPage]="fitToPage"
          [stickToPage]="stickToPage"
          [zoomScale]="zoomScale"
          [zoom]="zoom"
          [rotation]="rotation"
          [autoReSize]="autoReSize"
          (change)="change($event)"
          style="height: 600px"
        />
      </div>
    </div>
  \`,
  standalone: true,
  imports: [
    NzButtonModule,
    PdfComponent,
    NzGridModule,
    NzInputModule,
    FormsModule,
    NzUploadModule,
    SEModule,
    NzIconModule,
    NzSwitchModule,
    NzSelectModule,
    NzInputNumberModule,
    NzPaginationModule,
    NzEmptyModule
  ]
})
export class ComponentsPdfDesignComponent implements OnInit {
  @ViewChild('pdf') private comp!: PdfComponent;
  src = \`https://raw.githubusercontent.com/mozilla/pdf.js/master/web/compressed.tracemonkey-pldi-09.pdf\`;
  pi = 1;
  total = 0;
  renderText = true;
  stickToPage = true;
  originalSize = true;
  fitToPage = false;
  showAll = true;
  zoomScale: PdfZoomScale = 'page-width';
  rotation = 0;
  zoom = 1;
  autoReSize = true;
  outline = false;
  outlineList: NzSafeAny = null;
  q = '';
  search$ = new Subject<string>();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.search$.subscribe((q: string) => {
      if (q !== this.q) {
        this.q = q;
        this.comp.eventBus?.dispatch('find', {
          query: this.q,
          highlightAll: true
        });
      } else {
        this.comp.eventBus?.dispatch('findagain', {
          query: this.q,
          highlightAll: true
        });
      }
    });
  }

  change(ev: PdfChangeEvent): void {
    switch (ev.type) {
      case 'loaded':
        this.total = ev.total!;
        this.loadOutline();
        break;
      case 'pi':
        this.pi = ev.pi!;
        break;
    }

    if (ev.type !== 'load-progress') console.log(ev);
  }

  uploadSrc(src: string): void {
    this.src = src;
  }

  changeShowAllPages(_val: boolean): void {
    this.stickToPage = true;
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      this.src = e.target!.result as string;
      this.cdr.detectChanges();
    };
    reader.readAsArrayBuffer(file as unknown as Blob);
    return false;
  };

  loadOutline(): void {
    this.comp.pdf?.getOutline().then((outline: NzSafeAny) => {
      this.outlineList = outline;
    });
  }

  navigateTo(dest: string): void {
    this.comp.linkService?.goToDestination(dest);
  }
}`,lang:"ts",componentName:"ComponentsPdfDesignComponent",point:1,name:"design",urls:"packages/abc/pdf/demo/design.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-pdf"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-pdf-basic"),t(7,`
        `),a(),t(8,`
      
        `),r(9,"code-box",3),t(10,`
          `),m(11,"components-pdf-design"),t(12,`
        `),a(),t(13,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id),c(5),s("item",i.codes[1]),T("id",i.codes[1].id))},dependencies:[j,H,Pa,Ra,B,R,F],encapsulation:2});let n=e;return n})();var a0=["*"];function l0(n,e){if(n&1&&(it(0),m(1,"i",4),dt()),n&2){let l=b();c(),s("nzType",l.icon)}}var Wn=(()=>{let e=class e{constructor(){this.cdr=S(lt),this.el=S(xt).nativeElement,this.render=S(oe),this.ctrlStyle={},this.icon="question-circle",this.top=120,this.width=200,this.expand=!1,this.expandChange=new wt,this.show=!1,this.initFlag=!1}_click(){this.show=!this.show,this.expandChange.emit(this.show),this.setStyle()}setStyle(){this.ctrlStyle={"background-color":this.bgColor,"border-color":this.borderColor};let d=[`top:${this.top}px`,`width:${this.width}px`,`margin-right:-${this.show?0:this.width}px`];this.bgColor&&d.push(`background-color:${this.bgColor}`),this.borderColor&&d.push(`border-color:${this.borderColor}`),this.render.setAttribute(this.el,"style",d.join(";")),this.cdr.detectChanges()}ngOnInit(){this.initFlag=!0,this.setStyle()}ngOnChanges(){this.show=this.expand,this.initFlag&&this.setStyle()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["quick-menu"]],hostVars:2,hostBindings:function(o,i){o&1&&v("click",function(){return i._click()}),o&2&&k("quick-menu",!0)},inputs:{icon:"icon",top:[2,"top","top",at],width:[2,"width","width",at],bgColor:"bgColor",borderColor:"borderColor",expand:[2,"expand","expand",Y]},outputs:{expandChange:"expandChange"},exportAs:["quickMenu"],standalone:!0,features:[ht,Pt,f],ngContentSelectors:a0,decls:5,vars:2,consts:[[1,"quick-menu__inner"],[1,"quick-menu__ctrl",3,"ngStyle"],[1,"quick-menu__ctrl-icon"],[4,"nzStringTemplateOutlet"],["nz-icon","",3,"nzType"]],template:function(o,i){o&1&&(J(),r(0,"div",0)(1,"div",1)(2,"div",2),C(3,l0,2,1,"ng-container",3),a()(),U(4),a()),o&2&&(c(),s("ngStyle",i.ctrlStyle),c(2),s("nzStringTemplateOutlet",i.icon))},dependencies:[ke,Tt,Bt],encapsulation:2,changeDetection:0});let n=e;return n})();var Ba=(()=>{let e=class e{constructor(){this.expand=!1}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-quick-menu-simple"]],standalone:!0,features:[f],decls:30,vars:4,consts:[["nz-button","","type","button",3,"click"],[3,"expandChange","expand"],[3,"nzBordered","nzSplit"],["href","#"]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"button",0),v("click",function(){return i.expand=!i.expand}),t(2),a(),t(3,`
    `),r(4,"quick-menu",1),O("expandChange",function(g){return A(i.expand,g)||(i.expand=g),g}),t(5,`
      `),r(6,"nz-list",2),t(7,`
        `),r(8,"nz-list-item")(9,"a",3),t(10,"Link1"),a()(),t(11,`
        `),r(12,"nz-list-item")(13,"a",3),t(14,"Link2"),a()(),t(15,`
        `),r(16,"nz-list-item")(17,"a",3),t(18,"Link3"),a()(),t(19,`
        `),r(20,"nz-list-item")(21,"a",3),t(22,"Link4"),a()(),t(23,`
        `),r(24,"nz-list-item")(25,"a",3),t(26,"Link5"),a()(),t(27,`
      `),a(),t(28,`
    `),a(),t(29,`
  `)),o&2&&(c(2),V(i.expand?"\u6536\u7F29":"\u5C55\u5F00"),c(2),L("expand",i.expand),c(2),s("nzBordered",!1)("nzSplit",!1))},dependencies:[I,D,N,E,Wn,ma,jo,on],encapsulation:2});let n=e;return n})();var Va=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/quick-menu/index.en-US.md","zh-CN":"packages/abc/quick-menu/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Quick menu for the implicit auxiliary list on the right.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="quick-menu"><a class="lake-link"><i data-anchor="quick-menu"></i></a>quick-menu<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[icon]</code></td><td>Icon for the quick menu</td><td><code>string,TemplateRef&lt;void></code></td><td><code>question-circle</code></td></tr><tr><td><code>[top]</code></td><td>Icon from top</td><td><code>number</code></td><td><code>120</code></td></tr><tr><td><code>[width]</code></td><td>Width after opening</td><td><code>number</code></td><td><code>200</code></td></tr><tr><td><code>[bgColor]</code></td><td>Background for the quick menu</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[borderColor]</code></td><td>Border for the quick menu</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[expand]</code></td><td>Current expand status, double binding</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>(expandChange)</code></td><td>Expand status change callback</td><td><code>EventEmitter&lt;boolean></code></td><td>-</td></tr></tbody></table>',meta:{type:"Business",title:"quick-menu",subtitle:"Quick Menu",cols:1,module:"import { QuickMenuModule } from '@delon/abc/quick-menu';"},toc:[{id:"API",title:"API",h:2,children:[{id:"quick-menu",title:"quick-menu:standalone",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u5FEB\u901F\u83DC\u5355\uFF0C\u7528\u4E8E\u53F3\u4FA7\u9690\u5F0F\u8F85\u52A9\u5217\u8868\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="quick-menu"><a class="lake-link"><i data-anchor="quick-menu"></i></a>quick-menu<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[icon]</code></td><td>\u56FE\u6807</td><td><code>string,TemplateRef&lt;void></code></td><td><code>question-circle</code></td></tr><tr><td><code>[top]</code></td><td>\u8DDD\u79BB\u9876\u90E8</td><td><code>number</code></td><td><code>120</code></td></tr><tr><td><code>[width]</code></td><td>\u6253\u5F00\u540E\u5BBD\u5EA6</td><td><code>number</code></td><td><code>200</code></td></tr><tr><td><code>[bgColor]</code></td><td>\u80CC\u666F</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[borderColor]</code></td><td>\u8FB9\u6846\u989C\u8272</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[expand]</code></td><td>\u5F53\u524D\u5C55\u5F00\u72B6\u6001\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>(expandChange)</code></td><td>\u5F53\u524D\u5C55\u5F00\u72B6\u6001\u6539\u53D8\u56DE\u8C03\u51FD\u6570</td><td><code>EventEmitter&lt;boolean></code></td><td>-</td></tr></tbody></table>',meta:{type:"Business",title:"quick-menu",subtitle:"\u5FEB\u901F\u83DC\u5355",cols:1,module:"import { QuickMenuModule } from '@delon/abc/quick-menu';"},toc:[{id:"API",title:"API",h:2,children:[{id:"quick-menu",title:"quick-menu:standalone",h:3}]}]}},demo:!0},this.codes=[{id:"components-quick-menu-simple",meta:{order:1,title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"}},summary:{"zh-CN":"<p>\u70B9\u51FB\u53F3\u4FA7\u95EE\u53F7\u5207\u6362\u72B6\u6001\u83DC\u5355\u3002</p>","en-US":"<p>Click the question icon on the right to switch the status menu.</p>"},code:`import { Component } from '@angular/core';

import { QuickMenuComponent } from '@delon/abc/quick-menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'components-quick-menu-simple',
  template: \`
    <button nz-button type="button" (click)="expand = !expand">{{ expand ? '\u6536\u7F29' : '\u5C55\u5F00' }}</button>
    <quick-menu [(expand)]="expand">
      <nz-list [nzBordered]="false" [nzSplit]="false">
        <nz-list-item><a href="#">Link1</a></nz-list-item>
        <nz-list-item><a href="#">Link2</a></nz-list-item>
        <nz-list-item><a href="#">Link3</a></nz-list-item>
        <nz-list-item><a href="#">Link4</a></nz-list-item>
        <nz-list-item><a href="#">Link5</a></nz-list-item>
      </nz-list>
    </quick-menu>
  \`,
  standalone: true,
  imports: [NzButtonModule, QuickMenuComponent, NzListModule]
})
export class ComponentsQuickMenuSimpleComponent {
  expand = false;
}`,lang:"ts",componentName:"ComponentsQuickMenuSimpleComponent",point:0,name:"simple",urls:"packages/abc/quick-menu/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-quick-menu"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-quick-menu-simple"),t(7,`
        `),a(),t(8,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id))},dependencies:[j,H,Ba,B,R,F],encapsulation:2});let n=e;return n})();var c0=["*"];function s0(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b();c(),V(l.title)}}function p0(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(2);c(),V(l.description)}}function m0(n,e){if(n&1&&(r(0,"div",4),C(1,p0,2,1,"ng-container",3),a()),n&2){let l=b();c(),s("nzStringTemplateOutlet",l.description)}}function u0(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(2);c(),V(l.extra)}}function h0(n,e){if(n&1&&(r(0,"div",5),C(1,u0,2,1,"ng-container",3),a()),n&2){let l=b();c(),s("nzStringTemplateOutlet",l.extra)}}var no=(()=>{let e=class e{constructor(){this.cdr=S(lt),this.directionality=S(qt),this.destroy$=S(Lt),this._type="",this._icon="",this.dir="ltr"}set type(d){switch(this._type=d,d){case"success":this._icon="check-circle";break;case"error":this._icon="close-circle";break;default:this._icon=d;break}}ngOnInit(){this.dir=this.directionality.value,this.directionality.change.pipe(Mt(this.destroy$)).subscribe(d=>{this.dir=d,this.cdr.detectChanges()})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["result"]],hostVars:4,hostBindings:function(o,i){o&2&&k("result",!0)("result-rtl",i.dir==="rtl")},inputs:{type:"type",title:"title",description:"description",extra:"extra"},exportAs:["result"],standalone:!0,features:[f],ngContentSelectors:c0,decls:8,vars:7,consts:[[1,"result__icon"],["nz-icon","",3,"nzType"],[1,"result__title"],[4,"nzStringTemplateOutlet"],[1,"result__desc"],[1,"result__extra"],[1,"result__actions"]],template:function(o,i){o&1&&(J(),r(0,"div",0),m(1,"i",1),a(),r(2,"div",2),C(3,s0,2,1,"ng-container",3),a(),C(4,m0,2,1,"div",4)(5,h0,2,1,"div",5),r(6,"div",6),U(7),a()),o&2&&(c(),mn("result__icon-",i._type,""),s("nzType",i._icon),c(2),s("nzStringTemplateOutlet",i.title),c(),M(i.description?4:-1),c(),M(i.extra?5:-1))},dependencies:[Tt,Bt],encapsulation:2,changeDetection:0});let n=e;return n})();var mo=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=Kt({type:e}),e.\u0275inj=Xt({imports:[Ce,Ot,xe]});let n=e;return n})();var f0=["processDotTemplate"],g0=["itemContainer"],b0=(n,e,l)=>({$implicit:n,status:e,index:l});function C0(n,e){n&1&&m(0,"div",11)}function y0(n,e){if(n&1&&(r(0,"div",14),m(1,"nz-progress",15),a()),n&2){let l=b(2);c(),s("nzPercent",l.nzPercentage)("nzWidth",l.nzSize==="small"?32:40)("nzFormat",l.nullProcessFormat)("nzStrokeWidth",4)}}function x0(n,e){n&1&&(r(0,"span",16),m(1,"span",17),a())}function v0(n,e){n&1&&(r(0,"span",16),m(1,"span",18),a())}function S0(n,e){if(n&1&&(r(0,"span",16),t(1),a()),n&2){let l=b(2);c(),mt(" ",l.index+1," ")}}function z0(n,e){if(n&1&&(it(0),m(1,"span",19),dt()),n&2){let l=e.$implicit,d=b(3);c(),s("nzType",!d.oldAPIIcon&&l)("ngClass",d.oldAPIIcon&&l)}}function _0(n,e){if(n&1&&(r(0,"span",16),C(1,z0,2,2,"ng-container",8),a()),n&2){let l=b(2);c(),s("nzStringTemplateOutlet",l.nzIcon)}}function T0(n,e){if(n&1&&C(0,y0,2,4,"div",12)(1,x0,2,0,"span",13)(2,v0,2,0,"span",13)(3,S0,2,1,"span",13)(4,_0,2,1,"span",13),n&2){let l=b();s("ngIf",l.showProgress),c(),s("ngIf",l.nzStatus==="finish"&&!l.nzIcon),c(),s("ngIf",l.nzStatus==="error"),c(),s("ngIf",(l.nzStatus==="process"||l.nzStatus==="wait")&&!l.nzIcon),c(),s("ngIf",l.nzIcon)}}function w0(n,e){n&1&&m(0,"span",21)}function k0(n,e){}function M0(n,e){if(n&1&&(r(0,"span",16),C(1,w0,1,0,"ng-template",null,1,P)(3,k0,0,0,"ng-template",20),a()),n&2){let l=_(2),d=b();c(3),s("ngTemplateOutlet",d.customProcessTemplate||l)("ngTemplateOutletContext",Ei(2,b0,l,d.nzStatus,d.index))}}function D0(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b();c(),V(l.nzTitle)}}function N0(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b(2);c(),V(l.nzSubtitle)}}function E0(n,e){if(n&1&&(r(0,"div",22),C(1,N0,2,1,"ng-container",8),a()),n&2){let l=b();c(),s("nzStringTemplateOutlet",l.nzSubtitle)}}function I0(n,e){if(n&1&&(it(0),t(1),dt()),n&2){let l=b();c(),V(l.nzDescription)}}var P0=["*"],Un=(()=>{let e=class e{get nzStatus(){return this._status}set nzStatus(d){this._status=d,this.isCustomStatus=!0}get nzIcon(){return this._icon}set nzIcon(d){d instanceof He||(this.oldAPIIcon=typeof d=="string"&&d.indexOf("anticon")>-1),this._icon=d}get showProgress(){return this.nzPercentage!==null&&!this.nzIcon&&this.nzStatus==="process"&&this.nzPercentage>=0&&this.nzPercentage<=100}get currentIndex(){return this._currentIndex}set currentIndex(d){this._currentIndex=d,this.isCustomStatus||(this._status=d>this.index?"finish":d===this.index?this.outStatus||"":"wait")}constructor(d,o,i){this.cdr=d,this.ngZone=o,this.destroy$=i,this.nzDisabled=!1,this.nzPercentage=null,this.nzSize="default",this.isCustomStatus=!1,this._status="wait",this.oldAPIIcon=!0,this.direction="horizontal",this.index=0,this.last=!1,this.outStatus="process",this.showProcessDot=!1,this.clickable=!1,this.clickOutsideAngular$=new Yt,this.nullProcessFormat=()=>null,this._currentIndex=0}ngOnInit(){this.ngZone.runOutsideAngular(()=>an(this.itemContainer.nativeElement,"click").pipe(Oe(()=>this.clickable&&this.currentIndex!==this.index&&!this.nzDisabled),je(this.destroy$)).subscribe(()=>{this.clickOutsideAngular$.next(this.index)}))}enable(){this.nzDisabled=!1,this.cdr.markForCheck()}disable(){this.nzDisabled=!0,this.cdr.markForCheck()}markForCheck(){this.cdr.markForCheck()}};e.\u0275fac=function(o){return new(o||e)($(lt),$(Jt),$(De))},e.\u0275cmp=h({type:e,selectors:[["nz-step"]],viewQuery:function(o,i){if(o&1&&(rt(f0,5),rt(g0,7)),o&2){let p;q(p=G())&&(i.processDotTemplate=p.first),q(p=G())&&(i.itemContainer=p.first)}},hostAttrs:[1,"ant-steps-item"],hostVars:16,hostBindings:function(o,i){o&2&&k("ant-steps-item-wait",i.nzStatus==="wait")("ant-steps-item-process",i.nzStatus==="process")("ant-steps-item-finish",i.nzStatus==="finish")("ant-steps-item-error",i.nzStatus==="error")("ant-steps-item-active",i.currentIndex===i.index)("ant-steps-item-disabled",i.nzDisabled)("ant-steps-item-custom",!!i.nzIcon)("ant-steps-next-error",i.outStatus==="error"&&i.currentIndex===i.index+1)},inputs:{nzTitle:"nzTitle",nzSubtitle:"nzSubtitle",nzDescription:"nzDescription",nzDisabled:[2,"nzDisabled","nzDisabled",Y],nzPercentage:"nzPercentage",nzSize:"nzSize",nzStatus:"nzStatus",nzIcon:"nzIcon"},exportAs:["nzStep"],standalone:!0,features:[Ae([De]),ht,f],decls:12,vars:8,consts:[["itemContainer",""],["processDotTemplate",""],[1,"ant-steps-item-container",3,"tabindex"],["class","ant-steps-item-tail",4,"ngIf"],[1,"ant-steps-item-icon"],[3,"ngIf"],[1,"ant-steps-item-content"],[1,"ant-steps-item-title"],[4,"nzStringTemplateOutlet"],["class","ant-steps-item-subtitle",4,"ngIf"],[1,"ant-steps-item-description"],[1,"ant-steps-item-tail"],["class","ant-steps-progress-icon",4,"ngIf"],["class","ant-steps-icon",4,"ngIf"],[1,"ant-steps-progress-icon"],["nzType","circle",3,"nzPercent","nzWidth","nzFormat","nzStrokeWidth"],[1,"ant-steps-icon"],["nz-icon","","nzType","check"],["nz-icon","","nzType","close"],["nz-icon","",3,"nzType","ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ant-steps-icon-dot"],[1,"ant-steps-item-subtitle"]],template:function(o,i){o&1&&(r(0,"div",2,0),C(2,C0,1,0,"div",3),r(3,"div",4),C(4,T0,5,5,"ng-template",5)(5,M0,4,6,"ng-template",5),a(),r(6,"div",6)(7,"div",7),C(8,D0,2,1,"ng-container",8)(9,E0,2,1,"div",9),a(),r(10,"div",10),C(11,I0,2,1,"ng-container",8),a()()()),o&2&&(s("tabindex",i.clickable&&!i.nzDisabled?0:null),T("role",i.clickable&&!i.nzDisabled?"button":null),c(2),s("ngIf",i.last!==!0),c(2),s("ngIf",!i.showProcessDot),c(),s("ngIf",i.showProcessDot),c(3),s("nzStringTemplateOutlet",i.nzTitle),c(),s("ngIf",i.nzSubtitle),c(2),s("nzStringTemplateOutlet",i.nzDescription))},dependencies:[Bi,Fd,Pd,Ot,Tt,xe,Bt,we,ee],encapsulation:2,changeDetection:0});let n=e;return n})(),La=(()=>{let e=class e{set nzProgressDot(d){d instanceof He?(this.showProcessDot=!0,this.customProcessDotTemplate=d):this.showProcessDot=Wi(d),this.updateChildrenSteps()}constructor(d,o,i,p){this.ngZone=d,this.cdr=o,this.directionality=i,this.destroy$=p,this.nzCurrent=0,this.nzDirection="horizontal",this.nzLabelPlacement="horizontal",this.nzType="default",this.nzSize="default",this.nzStartIndex=0,this.nzStatus="process",this.nzIndexChange=new wt,this.indexChangeSubscription=xi.EMPTY,this.showProcessDot=!1,this.showProgress=!1,this.dir="ltr"}ngOnChanges(d){(d.nzStartIndex||d.nzDirection||d.nzStatus||d.nzCurrent||d.nzSize)&&this.updateChildrenSteps()}ngOnInit(){this.directionality.change?.pipe(je(this.destroy$)).subscribe(d=>{this.dir=d,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.updateChildrenSteps()}ngAfterContentInit(){this.steps&&this.steps.changes.pipe(fo(null),je(this.destroy$)).subscribe(()=>{this.updateHostProgressClass(),this.updateChildrenSteps()})}updateHostProgressClass(){this.steps&&!this.showProcessDot&&(this.showProgress=!!this.steps.toArray().find(d=>d.nzPercentage!==null))}updateChildrenSteps(){if(this.steps){let d=this.steps.length;this.steps.toArray().forEach((o,i)=>{Promise.resolve().then(()=>{o.nzSize=this.nzSize,o.outStatus=this.nzStatus,o.showProcessDot=this.showProcessDot,this.customProcessDotTemplate&&(o.customProcessTemplate=this.customProcessDotTemplate),o.clickable=this.nzIndexChange.observers.length>0,o.direction=this.nzDirection,o.index=i+this.nzStartIndex,o.currentIndex=this.nzCurrent,o.last=d===i+1,o.markForCheck()})}),this.indexChangeSubscription.unsubscribe(),this.indexChangeSubscription=cn(...this.steps.map(o=>o.clickOutsideAngular$)).pipe(je(this.destroy$)).subscribe(o=>{this.nzIndexChange.observers.length&&this.ngZone.run(()=>this.nzIndexChange.emit(o))})}}};e.\u0275fac=function(o){return new(o||e)($(Jt),$(lt),$(qt,8),$(De))},e.\u0275cmp=h({type:e,selectors:[["nz-steps"]],contentQueries:function(o,i,p){if(o&1&&te(p,Un,4),o&2){let g;q(g=G())&&(i.steps=g)}},hostAttrs:[1,"ant-steps"],hostVars:18,hostBindings:function(o,i){o&2&&k("ant-steps-horizontal",i.nzDirection==="horizontal")("ant-steps-vertical",i.nzDirection==="vertical")("ant-steps-label-horizontal",i.nzDirection==="horizontal")("ant-steps-label-vertical",(i.showProcessDot||i.nzLabelPlacement==="vertical")&&i.nzDirection==="horizontal")("ant-steps-dot",i.showProcessDot)("ant-steps-small",i.nzSize==="small")("ant-steps-navigation",i.nzType==="navigation")("ant-steps-rtl",i.dir==="rtl")("ant-steps-with-progress",i.showProgress)},inputs:{nzCurrent:"nzCurrent",nzDirection:"nzDirection",nzLabelPlacement:"nzLabelPlacement",nzType:"nzType",nzSize:"nzSize",nzStartIndex:"nzStartIndex",nzStatus:"nzStatus",nzProgressDot:"nzProgressDot"},outputs:{nzIndexChange:"nzIndexChange"},exportAs:["nzSteps"],standalone:!0,features:[Ae([De]),Pt,f],ngContentSelectors:P0,decls:1,vars:0,template:function(o,i){o&1&&(J(),U(0))},encapsulation:2,changeDetection:0});let n=e;return n})(),Oa=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=Kt({type:e}),e.\u0275inj=Xt({imports:[Un]});let n=e;return n})();function R0(n,e){n&1&&(t(0,`
              `),r(1,"div",12),t(2,`
                `),r(3,"div",13),t(4,"\u66F2\u4E3D\u4E3D"),m(5,"i",14),a(),t(6,`
                `),r(7,"div",13),t(8,"2016-12-12 12:32"),a(),t(9,`
              `),a(),t(10,`
            `))}function A0(n,e){if(n&1){let l=w();t(0,`
              `),r(1,"div",12),t(2,`
                `),r(3,"div",13),t(4,`
                  \u5468\u6BDB\u6BDB`),m(5,"i",15),t(6,`
                `),a(),t(7,`
                `),r(8,"div",13),t(9,`
                  `),r(10,"a",16),v("click",function(){y(l);let o=b(2);return x(o.msg.success("click"))}),t(11,"\u50AC\u4E00\u4E0B"),a(),t(12,`
                `),a(),t(13,`
              `),a(),t(14,`
            `)}}function B0(n,e){if(n&1&&(t(0,`
        `),r(1,"div",6),t(2,`
          `),r(3,"div",7),t(4,`
            `),r(5,"span",8),t(6,"\u9879\u76EE ID\uFF1A"),a(),t(7,`
            23421
          `),a(),t(8,`
          `),r(9,"div",7),t(10,`
            `),r(11,"span",8),t(12,"\u8D1F\u8D23\u4EBA\uFF1A"),a(),t(13,`
            \u66F2\u4E3D\u4E3D
          `),a(),t(14,`
          `),r(15,"div",7),t(16,`
            `),r(17,"span",8),t(18,"\u751F\u6548\u65F6\u95F4\uFF1A"),a(),t(19,`
            2016-12-12 ~ 2017-12-12
          `),a(),t(20,`
        `),a(),t(21,`
        `),r(22,"nz-steps",9),t(23,`
          `),r(24,"nz-step",10),t(25,`
            `),C(26,R0,11,0,"ng-template",null,1,P),t(28,`
          `),a(),t(29,`
          `),r(30,"nz-step",10),t(31,`
            `),C(32,A0,15,0,"ng-template",null,2,P),t(34,`
          `),a(),t(35,`
          `),m(36,"nz-step",11),t(37,`
          `),m(38,"nz-step",11),t(39,`
        `),a(),t(40,`
      `)),n&2){let l=_(27),d=_(33);c(),s("nzGutter",16),c(2),s("nzXs",24)("nzSm",12)("nzMd",12)("nzLg",12)("nzXl",6),c(6),s("nzXs",24)("nzSm",12)("nzMd",12)("nzLg",12)("nzXl",6),c(6),s("nzXs",24)("nzSm",24)("nzMd",24)("nzLg",24)("nzXl",12),c(7),s("nzCurrent",1),c(2),s("nzTitle","\u521B\u5EFA\u9879\u76EE")("nzDescription",l),c(6),s("nzTitle","\u90E8\u95E8\u521D\u5BA1")("nzDescription",d),c(6),s("nzTitle","\u8D22\u52A1\u590D\u6838"),c(2),s("nzTitle","\u5B8C\u6210")}}var ja=(()=>{let e=class e{constructor(){this.msg=S(vt)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-result-classic"]],standalone:!0,features:[f],decls:16,vars:3,consts:[["resultExtra",""],["createDesc",""],["checkedDesc",""],["type","success","description","\u63D0\u4EA4\u7ED3\u679C\u9875\u7528\u4E8E\u53CD\u9988\u4E00\u7CFB\u5217\u64CD\u4F5C\u4EFB\u52A1\u7684\u5904\u7406\u7ED3\u679C\uFF0C\u5982\u679C\u4EC5\u662F\u7B80\u5355\u64CD\u4F5C\uFF0C\u4F7F\u7528 Message \u5168\u5C40\u63D0\u793A\u53CD\u9988\u5373\u53EF\u3002\u672C\u6587\u5B57\u533A\u57DF\u53EF\u4EE5\u5C55\u793A\u7B80\u5355\u7684\u8865\u5145\u8BF4\u660E\uFF0C\u5982\u679C\u6709\u7C7B\u4F3C\u5C55\u793Ax\u201C\u5355\u636E\u201D\u7684\u9700\u6C42\uFF0C\u4E0B\u9762\u8FD9\u4E2A\u7070\u8272\u533A\u57DF\u53EF\u4EE5\u5448\u73B0\u6BD4\u8F83\u590D\u6742\u7684\u5185\u5BB9\u3002",3,"title","extra"],["nz-button","",3,"nzType"],["nz-button",""],["nz-row","",1,"mb-md",3,"nzGutter"],["nz-col","",3,"nzXs","nzSm","nzMd","nzLg","nzXl"],[1,"text-grey-darker"],["nzProgressDot","",3,"nzCurrent"],[3,"nzTitle","nzDescription"],[3,"nzTitle"],[2,"font-size","14px","position","relative","left","38px","text-align","left"],[2,"margin-top","8px","margin-bottom","4px"],["nz-icon","","nzType","dingding",1,"ml-sm"],["nz-icon","","nzType","dingding",1,"ml-sm",2,"color","#00a0e9"],[3,"click"]],template:function(o,i){if(o&1&&(t(0,`
    `),r(1,"result",3),t(2,`
      `),C(3,B0,41,23,"ng-template",null,0,P),t(5,`
      `),r(6,"button",4),t(7,"\u8FD4\u56DE\u5217\u8868"),a(),t(8,`
      `),r(9,"button",5),t(10,"\u67E5\u770B\u9879\u76EE"),a(),t(11,`
      `),r(12,"button",5),t(13,"\u6253 \u5370"),a(),t(14,`
    `),a(),t(15,`
  `)),o&2){let p=_(4);c(),s("title","\u63D0\u4EA4\u6210\u529F")("extra",p),c(5),s("nzType","primary")}},dependencies:[mo,no,B,R,F,Oa,La,Un,Ot,Tt,I,D,N,E],encapsulation:2});let n=e;return n})();function V0(n,e){n&1&&(t(0,`
        `),r(1,"div",3),t(2,"\u60A8\u63D0\u4EA4\u7684\u5185\u5BB9\u6709\u5982\u4E0B\u9519\u8BEF\uFF1A"),a(),t(3,`
        `),r(4,"div",4),t(5,`
          `),m(6,"i",5),t(7,`\u60A8\u7684\u8D26\u6237\u5DF2\u88AB\u51BB\u7ED3
          `),r(8,"a",6),t(9,"\u7ACB\u5373\u89E3\u51BB"),m(10,"i",7),a(),t(11,`
        `),a(),t(12,`
        `),r(13,"div"),t(14,`
          `),m(15,"i",5),t(16,`\u60A8\u7684\u8D26\u6237\u8FD8\u4E0D\u5177\u5907\u7533\u8BF7\u8D44\u683C
          `),r(17,"a",6),t(18,"\u7ACB\u5373\u5347\u7EA7"),m(19,"i",7),a(),t(20,`
        `),a(),t(21,`
      `))}var Ha=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-result-fail"]],standalone:!0,features:[f],decls:10,vars:3,consts:[["resultExtra",""],["type","error","description","\u8BF7\u6838\u5BF9\u5E76\u4FEE\u6539\u4EE5\u4E0B\u4FE1\u606F\u540E\uFF0C\u518D\u91CD\u65B0\u63D0\u4EA4\u3002",3,"title","extra"],["nz-button","",3,"nzType"],[1,"mb-md","text-lg"],[1,"mb-md"],["nz-icon","","nzType","close-circle",1,"text-error","pr-sm"],[1,"ml-md"],["nz-icon","","nzType","right",1,"pl-sm"]],template:function(o,i){if(o&1&&(t(0,`
    `),r(1,"result",1),t(2,`
      `),C(3,V0,22,0,"ng-template",null,0,P),t(5,`
      `),r(6,"button",2),t(7,"\u8FD4\u56DE\u4FEE\u6539"),a(),t(8,`
    `),a(),t(9,`
  `)),o&2){let p=_(4);c(),s("title","\u63D0\u4EA4\u5931\u8D25")("extra",p),c(5),s("nzType","primary")}},dependencies:[mo,no,Ot,Tt,I,D,N,E],encapsulation:2});let n=e;return n})();function L0(n,e){n&1&&(r(0,"div",4),t(1,"\u6807\u9898"),a())}function O0(n,e){n&1&&(r(0,"div",5),t(1,"\u7ED3\u679C\u63CF\u8FF0"),a())}var Wa=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-result-structure"]],standalone:!0,features:[f],decls:13,vars:2,consts:[["title",""],["description",""],["type","success","extra","\u5176\u4ED6\u8865\u5145\u4FE1\u606F\uFF0C\u81EA\u5E26\u7070\u5E95\u6548\u679C",3,"title","description"],[2,"background","#3ba0e9","color","#fff"],[2,"background","#7dbcea","color","#fff"],[2,"background","rgba(16, 142, 233, 1)","color","#fff"]],template:function(o,i){if(o&1&&(t(0,`
    `),r(1,"result",2),t(2,`
      `),C(3,L0,2,0,"ng-template",null,0,P),t(5,`
      `),C(6,O0,2,0,"ng-template",null,1,P),t(8,`
      `),r(9,"div",3),t(10,"\u64CD\u4F5C\u5EFA\u8BAE\uFF0C\u4E00\u822C\u653E\u7F6E\u6309\u94AE\u7EC4"),a(),t(11,`
    `),a(),t(12,`
  `)),o&2){let p=_(4),g=_(7);c(),s("title",p)("description",g)}},dependencies:[mo,no],encapsulation:2});let n=e;return n})();var Ua=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/result/index.en-US.md","zh-CN":"packages/abc/result/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Used to feedback the processing results of a series of tasks performed by the user.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="result"><a class="lake-link"><i data-anchor="result"></i></a>result<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>Types, different types come with corresponding icons</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>Title for the result</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[description]</code></td><td>Description for the result</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[extra]</code></td><td>Supplemental information, with default gray background</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>ng-content</code></td><td>Operation suggestions, Recommended to place jump links, button groups, etc.</td><td><code>ng-content</code></td><td>-</td></tr></tbody></table>',meta:{type:"Layout",title:"result",subtitle:"Result",cols:1,module:"import { ResultModule } from '@delon/abc/result';"},toc:[{id:"API",title:"API",h:2,children:[{id:"result",title:"result:standalone",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u7ED3\u679C\u9875\u7528\u4E8E\u5BF9\u7528\u6237\u8FDB\u884C\u7684\u4E00\u7CFB\u5217\u4EFB\u52A1\u5904\u7406\u7ED3\u679C\u8FDB\u884C\u53CD\u9988\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="result"><a class="lake-link"><i data-anchor="result"></i></a>result<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>\u7C7B\u578B\uFF0C\u4E0D\u540C\u7C7B\u578B\u81EA\u5E26\u5BF9\u5E94\u7684\u56FE\u6807</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[description]</code></td><td>\u7ED3\u679C\u63CF\u8FF0</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[extra]</code></td><td>\u8865\u5145\u4FE1\u606F\uFF0C\u6709\u9ED8\u8BA4\u7684\u7070\u8272\u80CC\u666F</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>ng-content</code></td><td>\u64CD\u4F5C\u5EFA\u8BAE\uFF0C\u63A8\u8350\u653E\u7F6E\u8DF3\u8F6C\u94FE\u63A5\uFF0C\u6309\u94AE\u7EC4\u7B49</td><td><code>ng-content</code></td><td>-</td></tr></tbody></table>',meta:{type:"Layout",title:"result",subtitle:"\u5904\u7406\u7ED3\u679C",cols:1,module:"import { ResultModule } from '@delon/abc/result';"},toc:[{id:"API",title:"API",h:2,children:[{id:"result",title:"result:standalone",h:3}]}]}},demo:!0},this.codes=[{id:"components-result-classic",meta:{order:0,title:"Classic"},summary:"<p>\u5178\u578B\u7ED3\u679C\u9875\u9762\u3002</p>",code:`import { Component, inject } from '@angular/core';

import { ResultModule } from '@delon/abc/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'components-result-classic',
  template: \`
    <result
      type="success"
      [title]="'\u63D0\u4EA4\u6210\u529F'"
      description="\u63D0\u4EA4\u7ED3\u679C\u9875\u7528\u4E8E\u53CD\u9988\u4E00\u7CFB\u5217\u64CD\u4F5C\u4EFB\u52A1\u7684\u5904\u7406\u7ED3\u679C\uFF0C\u5982\u679C\u4EC5\u662F\u7B80\u5355\u64CD\u4F5C\uFF0C\u4F7F\u7528 Message \u5168\u5C40\u63D0\u793A\u53CD\u9988\u5373\u53EF\u3002\u672C\u6587\u5B57\u533A\u57DF\u53EF\u4EE5\u5C55\u793A\u7B80\u5355\u7684\u8865\u5145\u8BF4\u660E\uFF0C\u5982\u679C\u6709\u7C7B\u4F3C\u5C55\u793Ax\u201C\u5355\u636E\u201D\u7684\u9700\u6C42\uFF0C\u4E0B\u9762\u8FD9\u4E2A\u7070\u8272\u533A\u57DF\u53EF\u4EE5\u5448\u73B0\u6BD4\u8F83\u590D\u6742\u7684\u5185\u5BB9\u3002"
      [extra]="resultExtra"
    >
      <ng-template #resultExtra>
        <div nz-row [nzGutter]="16" class="mb-md">
          <div nz-col [nzXs]="24" [nzSm]="12" [nzMd]="12" [nzLg]="12" [nzXl]="6">
            <span class="text-grey-darker">\u9879\u76EE ID\uFF1A</span>
            23421
          </div>
          <div nz-col [nzXs]="24" [nzSm]="12" [nzMd]="12" [nzLg]="12" [nzXl]="6">
            <span class="text-grey-darker">\u8D1F\u8D23\u4EBA\uFF1A</span>
            \u66F2\u4E3D\u4E3D
          </div>
          <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="24" [nzLg]="24" [nzXl]="12">
            <span class="text-grey-darker">\u751F\u6548\u65F6\u95F4\uFF1A</span>
            2016-12-12 ~ 2017-12-12
          </div>
        </div>
        <nz-steps [nzCurrent]="1" nzProgressDot>
          <nz-step [nzTitle]="'\u521B\u5EFA\u9879\u76EE'" [nzDescription]="createDesc">
            <ng-template #createDesc>
              <div style="font-size: 14px; position: relative; left: 38px; text-align: left;">
                <div style="margin-top: 8px; margin-bottom: 4px;"
                  >\u66F2\u4E3D\u4E3D<i nz-icon nzType="dingding" class="ml-sm"></i
                ></div>
                <div style="margin-top: 8px; margin-bottom: 4px;">2016-12-12 12:32</div>
              </div>
            </ng-template>
          </nz-step>
          <nz-step [nzTitle]="'\u90E8\u95E8\u521D\u5BA1'" [nzDescription]="checkedDesc">
            <ng-template #checkedDesc>
              <div style="font-size: 14px; position: relative; left: 38px; text-align: left;">
                <div style="margin-top: 8px; margin-bottom: 4px;">
                  \u5468\u6BDB\u6BDB<i nz-icon nzType="dingding" class="ml-sm" style="color: #00a0e9;"></i>
                </div>
                <div style="margin-top: 8px; margin-bottom: 4px;">
                  <a (click)="msg.success('click')">\u50AC\u4E00\u4E0B</a>
                </div>
              </div>
            </ng-template>
          </nz-step>
          <nz-step [nzTitle]="'\u8D22\u52A1\u590D\u6838'" />
          <nz-step [nzTitle]="'\u5B8C\u6210'" />
        </nz-steps>
      </ng-template>
      <button nz-button [nzType]="'primary'">\u8FD4\u56DE\u5217\u8868</button>
      <button nz-button>\u67E5\u770B\u9879\u76EE</button>
      <button nz-button>\u6253 \u5370</button>
    </result>
  \`,
  standalone: true,
  imports: [ResultModule, NzGridModule, NzStepsModule, NzIconModule, NzButtonModule]
})
export class ComponentsResultClassicComponent {
  readonly msg = inject(NzMessageService);
}`,lang:"ts",componentName:"ComponentsResultClassicComponent",point:0,name:"classic",urls:"packages/abc/result/demo/classic.md",type:"demo"},{id:"components-result-fail",meta:{order:0,title:"Failed"},summary:"<p>\u63D0\u4EA4\u5931\u8D25\u3002</p>",code:`import { Component } from '@angular/core';

import { ResultModule } from '@delon/abc/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'components-result-fail',
  template: \`
    <result type="error" [title]="'\u63D0\u4EA4\u5931\u8D25'" description="\u8BF7\u6838\u5BF9\u5E76\u4FEE\u6539\u4EE5\u4E0B\u4FE1\u606F\u540E\uFF0C\u518D\u91CD\u65B0\u63D0\u4EA4\u3002" [extra]="resultExtra">
      <ng-template #resultExtra>
        <div class="mb-md text-lg">\u60A8\u63D0\u4EA4\u7684\u5185\u5BB9\u6709\u5982\u4E0B\u9519\u8BEF\uFF1A</div>
        <div class="mb-md">
          <i nz-icon nzType="close-circle" class="text-error pr-sm"></i>\u60A8\u7684\u8D26\u6237\u5DF2\u88AB\u51BB\u7ED3
          <a class="ml-md">\u7ACB\u5373\u89E3\u51BB<i nz-icon nzType="right" class="pl-sm"></i></a>
        </div>
        <div>
          <i nz-icon nzType="close-circle" class="text-error pr-sm"></i>\u60A8\u7684\u8D26\u6237\u8FD8\u4E0D\u5177\u5907\u7533\u8BF7\u8D44\u683C
          <a class="ml-md">\u7ACB\u5373\u5347\u7EA7<i nz-icon nzType="right" class="pl-sm"></i></a>
        </div>
      </ng-template>
      <button nz-button [nzType]="'primary'">\u8FD4\u56DE\u4FEE\u6539</button>
    </result>
  \`,
  standalone: true,
  imports: [ResultModule, NzIconModule, NzButtonModule]
})
export class ComponentsResultFailComponent {}`,lang:"ts",componentName:"ComponentsResultFailComponent",point:1,name:"fail",urls:"packages/abc/result/demo/fail.md",type:"demo"},{id:"components-result-structure",meta:{order:0,title:"Structure"},summary:"<p>\u7ED3\u6784\u5305\u542B <code>\u5904\u7406\u7ED3\u679C</code>\uFF0C<code>\u8865\u5145\u4FE1\u606F</code> \u4EE5\u53CA <code>\u64CD\u4F5C\u5EFA\u8BAE</code> \u4E09\u4E2A\u90E8\u5206\uFF0C\u5176\u4E2D <code>\u5904\u7406\u7ED3\u679C</code> \u7531 <code>\u63D0\u793A\u56FE\u6807</code>\uFF0C<code>\u6807\u9898</code> \u548C <code>\u7ED3\u679C\u63CF\u8FF0</code> \u7EC4\u6210\u3002</p>",code:`import { Component } from '@angular/core';

import { ResultModule } from '@delon/abc/result';

@Component({
  selector: 'components-result-structure',
  template: \`
    <result type="success" [title]="title" [description]="description" extra="\u5176\u4ED6\u8865\u5145\u4FE1\u606F\uFF0C\u81EA\u5E26\u7070\u5E95\u6548\u679C">
      <ng-template #title><div style="background:#7dbcea; color: #fff;">\u6807\u9898</div></ng-template>
      <ng-template #description><div style="background:rgba(16, 142, 233, 1); color: #fff;">\u7ED3\u679C\u63CF\u8FF0</div></ng-template>
      <div style="background: #3ba0e9; color:#fff">\u64CD\u4F5C\u5EFA\u8BAE\uFF0C\u4E00\u822C\u653E\u7F6E\u6309\u94AE\u7EC4</div>
    </result>
  \`,
  standalone: true,
  imports: [ResultModule]
})
export class ComponentsResultStructureComponent {}`,lang:"ts",componentName:"ComponentsResultStructureComponent",point:2,name:"structure",urls:"packages/abc/result/demo/structure.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-result"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:19,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-result-classic"),t(7,`
        `),a(),t(8,`
      
        `),r(9,"code-box",3),t(10,`
          `),m(11,"components-result-fail"),t(12,`
        `),a(),t(13,`
      
        `),r(14,"code-box",3),t(15,`
          `),m(16,"components-result-structure"),t(17,`
        `),a(),t(18,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id),c(5),s("item",i.codes[1]),T("id",i.codes[1].id),c(5),s("item",i.codes[2]),T("id",i.codes[2].id))},dependencies:[j,H,ja,Ha,Wa,B,R,F],encapsulation:2});let n=e;return n})();var qa=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/reuse-tab/index.en-US.md","zh-CN":"packages/abc/reuse-tab/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>Reuse route tab are extremely common for admin interfaces, and the problem of component data is not lost when switching routes.</p><p>The newly opened is always the current page, and the route reuse means that when we leave the current page, if the reuse condition is met (ie: matching mode), all component states (including subcomponents) of the current route are saved, wait for the next time you enter the route to restore the component data based on the cache.</p><h2 id="Usage"><a class="lake-link"><i data-anchor="Usage"></i></a>Usage</h2><ol><li><p>Provide <code>provideReuseTabConfig()</code> configuration in <code>app.config.ts</code> file</p></li><li><p>Add <code>&lt;reuse-tab></code> in the <code>src/app/layout/basic/basic.component.ts</code> file, like this:</p></li></ol><pre class="hljs language-html"><code>- &lt;router-outlet /&gt;
+ &lt;reuse-tab #reuseTab /&gt;
+ &lt;router-outlet (activate)="reuseTab.activate($event)" (attach)="reuseTab.activate($event)" /&gt;</code></pre><blockquote><p><strong>Note: If you do not specify the <code>(activate)</code> event, you cannot refresh current tab when uncached.</strong></p></blockquote><h2 id="MatchingMode"><a class="lake-link"><i data-anchor="MatchingMode"></i></a>MatchingMode</h2><p>Inject the <code>ReuseTabService</code> class anywhere in the project and set the <code>mode</code> property, or pass <code>&lt;reuse-tab [mode]="0" /></code> Reset values.</p><p><strong>0. Menu (Default)</strong></p><p>Press the (<a href="/theme/menu#Menu" data-url="/theme/menu#Menu">Menu</a>) to configure.</p><p>Reusable:</p><pre class="hljs language-null"><code>{ text:'Dashboard' }
{ text:'Dashboard', reuse: true }</code></pre><p>Not reusable:</p><pre class="hljs language-null"><code>{ text:'Dashboard', reuse: false }</code></pre><p><strong>1. MenuForce</strong></p><p>Press the (<a href="/theme/menu#Menu" data-url="/theme/menu#Menu">Menu</a>) to force the configure.</p><p>Reusable:</p><pre class="hljs language-null"><code>{ text:'Dashboard', reuse: true }</code></pre><p>Not reusable:</p><pre class="hljs language-null"><code>{ text:'Dashboard' }
{ text:'Dashboard', reuse: false }</code></pre><p><strong>2. URL</strong></p><p>Valid for all routes, can be combined with <code>excludes</code> filtering without reusing.</p><h2 id="TabText"><a class="lake-link"><i data-anchor="TabText"></i></a>TabText</h2><p>Get the tab text in the following order:</p><ol><li><p>Overwrite text within the component with \`ReuseTabService.title = 'new title'</p></li><li><p>The <code>data</code> property in the routing configuration</p></li><li><p><code>text</code> property in menu data</p></li></ol><p>Use <code>ReuseTabService</code> example:</p><pre class="hljs language-ts"><code>export class DemoReuseTabEditComponent implements OnInit {
  id: any;

  constructor(private route: ActivatedRoute, private reuseTabService: ReuseTabService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.reuseTabService.title = \`Edit \${this.id}\`;
    });
  }
}</code></pre><h2 id="ReuseEvents"><a class="lake-link"><i data-anchor="ReuseEvents"></i></a>ReuseEvents</h2><p>Route reusing does not touch the Angular component lifecycle hooks (eg: <code>ngOnInit</code>, etc.), but often requires data to be refreshed during the reuse process, so two new lifecycle hooks are provided to temporarily resolve such problems.</p><p><strong>OnReuseInit</strong> Interface</p><ul><li><p><code>_onReuseInit(type?: ReuseHookOnReuseInitType): void;</code></p></li></ul><p>Triggered when the current route is in the reusing process, The values of <code>type</code> are:</p><p>-<code>init</code> when routing process
-<code>refresh</code> when refresh action via tab</p><p><strong>OnReuseDestroy</strong> Interface</p><ul><li><p><code>_onReuseDestroy(): void;</code></p></li></ul><p>Triggered when the current route allows reusing and leave route.</p><p>A simple example:</p><pre class="hljs language-ts"><code>import { OnReuseDestroy, OnReuseInit, ReuseHookOnReuseInitType } from '@delon/abc/reuse-tab';

@Component()
export class DemoComponent implements OnReuseInit, OnReuseDestroy {
  _onReuseInit(type: ReuseHookOnReuseInitType) {
    console.log('_onReuseInit', type);
  }
  _onReuseDestroy() {
    console.log('_onReuseDestroy');
  }
}</code></pre><h2 id="ScrollPosition"><a class="lake-link"><i data-anchor="ScrollPosition"></i></a>ScrollPosition</h2><p>Turning on <code>keepingScroll</code> will restore the previous scrollbar position after reused, pls attention to detail:</p><blockquote><p><strong>Make sure</strong> to use the routing option <a target="_blank" href="https://angular.io/api/router/ExtraOptions#scrollPositionRestoration" data-url="https://angular.io/api/router/ExtraOptions#scrollPositionRestoration">scrollPositionRestoration</a> to manage the scrollbar position.</p></blockquote><ul><li><p><code>true</code>: Keep the previous scroll bar position</p></li><li><p><code>false</code>: Do't operate on the scroll bar</p></li><li><p>If all page used route reuse, you can set <code>scrollPositionRestoration: 'disabled'</code> to avoid delayed scrolling.</p></li><li><p>If part of the page used route reuse, it's limited by <code>scrollPositionRestoration</code> <strong>priority value</strong>, there will be a <code>1ms</code> delay to restore the scrollbar position.</p></li></ul></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="ReuseTabService"><a class="lake-link"><i data-anchor="ReuseTabService"></i></a>ReuseTabService</h3><p><strong>Property</strong></p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[max]</code></td><td>Maximum of reuse</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td><code>[mode]</code></td><td>Matching Mode</td><td><code>ReuseTabMatchMode</code></td><td><code>0</code></td></tr><tr><td><code>[debug]</code></td><td>Whether Debug mode</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[keepingScroll]</code></td><td>Keep the scrollbar position</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[keepingScrollContainer]</code></td><td>Keep the scroll bar container</td><td><code>Element</code></td><td><code>window</code></td></tr><tr><td><code>[excludes]</code></td><td>Exclusion rules, limited by <code>mode=URL</code></td><td><code>RegExp[]</code></td><td>-</td></tr><tr><td><code>[items]</code></td><td>Get cached routes</td><td><code><a data-toc="ReuseTabCached">ReuseTabCached</a>[]</code></td><td>-</td></tr><tr><td><code>[count]</code></td><td>Get the number of cached routes</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[change]</code></td><td>Cache change callback</td><td><code>Observable<<a data-toc="ReuseTabNotify">ReuseTabNotify</a>></code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>Customize the current title</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[closable]</code></td><td>Customize the current <code>closable</code> state</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><p><strong>Method</strong></p><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>index(url)</code></td><td>Returns the index of the first element in the caches, and -1 otherwise</td><td><code>number</code></td></tr><tr><td><code>exists(url)</code></td><td>Exists cache by URL</td><td><code>boolean</code></td></tr><tr><td><code>get(url)</code></td><td>Get cache data by URL</td><td><code><a data-toc="ReuseTabCached">ReuseTabCached</a></code></td></tr><tr><td><code>getTitle(url, route?: ActivatedRouteSnapshot)</code></td><td>Get title</td><td><code>string</code></td></tr><tr><td><code>clearTitleCached()</code></td><td>Clear all title caches</td><td><code>void</code></td></tr><tr><td><code>getClosable(url, route?: ActivatedRouteSnapshot)</code></td><td>Get <code>closable</code> state</td><td><code>string</code></td></tr><tr><td><code>clearClosableCached()</code></td><td>Clear cached of closable</td><td><code>void</code></td></tr><tr><td><code>remove(url)</code></td><td>Remove the tag, touch change remove event</td><td><code>void</code></td></tr><tr><td><code>move(url, position)</code></td><td>Move of caches, touch change move event</td><td><code>void</code></td></tr><tr><td><code>clear()</code></td><td>Clear caches, touch change clear event</td><td><code>void</code></td></tr><tr><td><code>refresh()</code></td><td>Just touch change refresh event</td><td><code>void</code></td></tr><tr><td><code>replace(url)</code></td><td>Force closed current route (including the non-closable) and navigate back to the <code>newUrl</code> route</td><td><code>void</code></td></tr></tbody></table><h3 id="reuse-tab"><a class="lake-link"><i data-anchor="reuse-tab"></i></a>reuse-tab</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[i18n]</code></td><td>Context Menu internationalization, support HTML</td><td><code>ReuseContextI18n</code></td><td>-</td></tr><tr><td><code>[mode]</code></td><td>Matching Mode</td><td><code>ReuseTabMatchMode</code></td><td><code>0</code></td></tr><tr><td><code>[debug]</code></td><td>Whether Debug mode</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[max]</code></td><td>Maximum of reuse</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td><code>[keepingScroll]</code></td><td>Keep the scrollbar position</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[keepingScrollContainer]</code></td><td>Keep the scroll bar container</td><td><code>string | Element</code></td><td><code>window</code></td></tr><tr><td><code>[excludes]</code></td><td>Exclusion rules, limited by <code>mode=URL</code></td><td><code>RegExp[]</code></td><td>-</td></tr><tr><td><code>[allowClose]</code></td><td>Whether to allow close tab</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[customContextMenu]</code></td><td>Custom context click menu</td><td><code><a data-toc="ReuseCustomContextMenu">ReuseCustomContextMenu</a>[]</code></td><td>-</td></tr><tr><td><code>[tabBarExtraContent]</code></td><td>Extra content in tab bar</td><td><code>TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[tabBarStyle]</code></td><td>Tab bar style object</td><td><code>object</code></td><td>-</td></tr><tr><td><code>[tabBarGutter]</code></td><td>The gap between tabs</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[tabType]</code></td><td>Basic style of tabs</td><td><code>line, card</code></td><td><code>line</code></td></tr><tr><td><code>[tabMaxWidth]</code></td><td>The maximum width of each tab, unit: <code>px</code></td><td><code>number</code></td><td>-</td></tr><tr><td><code>[routeParamMatchMode]</code></td><td>Match the pattern when routing parameters are included, for example:<code>/view/:id</code><br> - <code>strict</code> Strict mode <code>/view/1</code>, <code>/view/2</code> Different pages<br> - <code>loose</code> Loose mode <code>/view/1</code>, <code>/view/2</code> Same page and only one tab of component</td><td><code>strict,loose</code></td><td><code>strict</code></td></tr><tr><td><code>[disabled]</code></td><td>Whether to disabled</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[titleRender]</code></td><td>Custom rendering of the title</td><td><code>TemplateRef&lt;{ $implicit: ReuseItem }></code></td><td>-</td></tr><tr><td><code>[storageState]</code></td><td>Whether to store the state, keep the last browser state</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[canClose]</code></td><td>A function to determine what should be closed</td><td><code>(options: { item: ReuseItem; includeNonCloseable: boolean }) => Observable&lt;boolean></code></td><td>-</td></tr><tr><td><code>(close)</code></td><td>Close callback event</td><td><code>EventEmitter</code></td><td>-</td></tr><tr><td><code>(change)</code></td><td>Callback when switching</td><td><code>EventEmitter</code></td><td>-</td></tr></tbody></table><p><strong>Context Menu</strong></p><p>The non-closeable item is forcibly removed when the keyboard <code>ctrl</code> is pressed.</p><h3 id="ReuseTabCached"><a class="lake-link"><i data-anchor="ReuseTabCached"></i></a>ReuseTabCached</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>Title</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[url]</code></td><td>URL</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[closable]</code></td><td>Whether to allow close</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="ReuseTabNotify"><a class="lake-link"><i data-anchor="ReuseTabNotify"></i></a>ReuseTabNotify</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[active]</code></td><td>Event types</td><td><code>title,close,closeRight,clear,move,closable,refresh,add</code></td><td>-</td></tr></tbody></table><h3 id="ReuseContextI18n"><a class="lake-link"><i data-anchor="ReuseContextI18n"></i></a>ReuseContextI18n</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[close]</code></td><td>Close</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[closeOther]</code></td><td>Close other tabs</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[closeRight]</code></td><td>Close tabs to the right</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[clear]</code></td><td>Clear tabs</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="ReuseCustomContextMenu"><a class="lake-link"><i data-anchor="ReuseCustomContextMenu"></i></a>ReuseCustomContextMenu</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[id]</code></td><td>Identifier for current context menu</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>Title for current context menu</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[fn]</code></td><td>Process method for current context menu</td><td><code>(item: ReuseItem, menu: <a data-toc="ReuseCustomContextMenu">ReuseCustomContextMenu</a>) => void</code></td><td>-</td></tr><tr><td><code>[disabled]</code></td><td>Whether to disabled</td><td><code>(item: ReuseItem) => boolean</code></td><td>-</td></tr></tbody></table><h3 id="Routedata"><a class="lake-link"><i data-anchor="Routedata"></i></a>Routedata</h3><p>By routing the <code>data</code> property, you can provide partial <a href="/docs/global-config" data-url="/docs/global-config">global configuration</a> for some pages, for example:</p><pre class="hljs language-ts"><code>// Specify no route
{ path: 'p1', component: DemoComponent, data: { reuse: false } }
// Specify title
{ path: 'p1', component: DemoComponent, data: { title: 'New Title' } }</code></pre><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[reuse]</code></td><td>Whether to reuse</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>Title</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[titleI18n]</code></td><td>Ii18n title key</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[reuseClosable]</code></td><td>Whether to allow close</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[keepingScroll]</code></td><td>Keep the scrollbar position</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><blockquote><p><strong>Note:</strong> The above data can also be reflected in the <a href="/theme/menu#Menu" data-url="/theme/menu#Menu">Menu</a> data.</p></blockquote><h2 id="FAQ"><a class="lake-link"><i data-anchor="FAQ"></i></a>FAQ</h2><h3 id="HowtoDebug"><a class="lake-link"><i data-anchor="HowtoDebug"></i></a>HowtoDebug</h3><p>Route reuse preserves component data state, which may bring another drawback. The Angular lifecycle hook is not triggered during the reuse process. In most cases, it can run normally. There are several common problems:</p><ul><li><p><code>OnDestroy</code> may handle the external style in component (eg: <code>body</code>), which can be resolved by Reuse Events</p></li><li><p>Turn on the <code>debug</code> mode to help you analyze</p></li></ul><h3 id="Max"><a class="lake-link"><i data-anchor="Max"></i></a>Max</h3><p>Limiting the maximum number of reuse can reduce memory growth. There are several issues to be aware of:</p><ul><li><p><code>max</code> Forces a close and ignores the closable state when value changes</p></li><li><p>When it's out of <code>max</code> range, it will turn off the first open tab (Only <strong>closable</strong>), ingore close when all pages are <strong>non-closable</strong></p></li></ul><h3 id="NotsupportedQueryStringparameters"><a class="lake-link"><i data-anchor="NotsupportedQueryStringparameters"></i></a>NotsupportedQueryStringparameters</h3><p>Route reuse preserves uses URLs to distinguish whether the same page, and QueryString query parameters will be repeatedly misused, so not supported, and the QueryString part is forced to be ignored.</p><h3 id="Multi-applicationcacheprocessing"><a class="lake-link"><i data-anchor="Multi-applicationcacheprocessing"></i></a>Multi-applicationcacheprocessing</h3><p>Use <code>provideReuseTabConfig(storeKey: 'newKey')</code> Or overriding <code>REUSE_TAB_CACHED_MANAGER</code> to change the cache storage, for example when using a micro-frontend (similar to <a target="_blank" href="https://github.com/worktile/ngx-planet" data-url="https://github.com/worktile/ngx-planet">ngx-planet</a>) can rewrite cached data to <code>window</code> guaranteed data sharing.</p>`,meta:{type:"Basic",order:1,title:"reuse-tab",subtitle:"Reuse Route Tab",cols:1,module:"import { ReuseTabModule } from '@delon/abc/reuse-tab';",standalone:!0},toc:[{id:"Usage",title:"Usage",h:2},{id:"MatchingMode",title:"Matching Mode",h:2},{id:"TabText",title:"Tab Text",h:2},{id:"ReuseEvents",title:"Reuse Events",h:2},{id:"ScrollPosition",title:"Scroll Position",h:2},{id:"API",title:"API",h:2,children:[{id:"ReuseTabService",title:"ReuseTabService",h:3},{id:"reuse-tab",title:"reuse-tab",h:3},{id:"ReuseTabCached",title:"ReuseTabCached",h:3},{id:"ReuseTabNotify",title:"ReuseTabNotify",h:3},{id:"ReuseContextI18n",title:"ReuseContextI18n",h:3},{id:"ReuseCustomContextMenu",title:"ReuseCustomContextMenu",h:3},{id:"Routedata",title:"Route data",h:3}]},{id:"FAQ",title:"FAQ",h:2,children:[{id:"HowtoDebug",title:"How to Debug",h:3},{id:"Max",title:"Max",h:3},{id:"NotsupportedQueryStringparameters",title:"Not supported QueryString parameters",h:3},{id:"Multi-applicationcacheprocessing",title:"Multi-application cache processing",h:3}]}]},"zh-CN":{content:`<section class="markdown"><p>\u590D\u7528\u6807\u7B7E\u5728\u4E2D\u53F0\u7CFB\u7EDF\u975E\u5E38\u5E38\u89C1\uFF0C\u672C\u8D28\u662F\u89E3\u51B3\u4E0D\u540C\u8DEF\u7531\u9875\u5207\u6362\u65F6\u7EC4\u4EF6\u6570\u636E\u4E0D\u4E22\u5931\u95EE\u9898\u3002</p><p>\u6700\u65B0\u6253\u5F00\u7684\u6C38\u8FDC\u662F\u5F53\u524D\u9875\uFF0C\u800C\u8DEF\u7531\u590D\u7528\u662F\u6307\u5F53\u6211\u4EEC\u79BB\u5F00\u5F53\u524D\u9875\u65F6\u82E5\u7B26\u5408\u590D\u7528\u6761\u4EF6\uFF08\u5373\uFF1A\u5339\u914D\u6A21\u5F0F\uFF09\u5219\u4FDD\u5B58\u5F53\u524D\u8DEF\u7531\u6240\u6709\u7EC4\u4EF6\u72B6\u6001\uFF08\u5305\u62EC\u5B50\u7EC4\u4EF6\uFF09\uFF0C\u5F85\u4E0B\u4E00\u6B21\u8FDB\u5165\u76F8\u540C\u8DEF\u7531\uFF08\u5373\uFF1A\u5339\u914D\u6A21\u5F0F\uFF09\u65F6\u518D\u4ECE\u4E2D\u7F13\u5B58\u4E2D\u83B7\u53D6\u5230\u3002</p><h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><ol><li><p>\u5728 <code>app.config.ts</code> \u4E0B\u63D0\u4F9B <code>provideReuseTabConfig()</code> \u914D\u7F6E</p></li><li><p>\u5728\u9700\u8981\u5C55\u793A\u6807\u7B7E\u7684\u5730\u65B9\u8C03\u7528 <code>&lt;reuse-tab></code>\uFF0C\u4E00\u822C\u5728 <code>src/app/layout/basic/basic.component.ts</code>\uFF0C\u4F8B\u5982\uFF1A</p></li></ol><pre class="hljs language-html"><code>- &lt;router-outlet /&gt;
+ &lt;reuse-tab #reuseTab /&gt;
+ &lt;router-outlet (activate)="reuseTab.activate($event)" (attach)="reuseTab.activate($event)" /&gt;</code></pre><blockquote><p><strong>\u6CE8\u610F\uFF1A\u82E5\u4E0D\u6307\u5B9A <code>(activate)</code> \u4E8B\u4EF6\uFF0C\u65E0\u6CD5\u5237\u65B0\u672A\u7F13\u5B58\u8FC7\u7684\u5F53\u524D\u6807\u7B7E\u9875\u3002</strong></p></blockquote><h2 id="\u5339\u914D\u6A21\u5F0F"><a class="lake-link"><i data-anchor="\u5339\u914D\u6A21\u5F0F"></i></a>\u5339\u914D\u6A21\u5F0F</h2><p>\u5728\u9879\u76EE\u7684\u4EFB\u4F55\u4F4D\u7F6E\u6CE8\u5165 <code>ReuseTabService</code> \u7C7B\uFF0C\u5E76\u8BBE\u7F6E <code>mode</code> \u5C5E\u6027\uFF0C\u6216\u901A\u8FC7 <code>&lt;reuse-tab [mode]="0" /></code> \u91CD\u65B0\u8BBE\u7F6E\u503C\uFF0C\u5305\u62EC\uFF1A</p><p><strong>0\u3001Menu\uFF08\u63A8\u8350\uFF0C\u9ED8\u8BA4\u503C\uFF09</strong></p><p>\u6309\u83DC\u5355 (<a href="/theme/menu#Menu" data-url="/theme/menu#Menu">Menu</a>) \u914D\u7F6E\u3002</p><p>\u53EF\u590D\u7528\uFF1A</p><pre class="hljs language-null"><code>{ text:'Dashboard' }
{ text:'Dashboard', reuse: true }</code></pre><p>\u4E0D\u53EF\u590D\u7528\uFF1A</p><pre class="hljs language-null"><code>{ text:'Dashboard', reuse: false }</code></pre><p><strong>1\u3001MenuForce</strong></p><p>\u6309\u83DC\u5355 (<a href="/theme/menu#Menu" data-url="/theme/menu#Menu">Menu</a>) \u5F3A\u5236\u914D\u7F6E\u3002</p><p>\u53EF\u590D\u7528\uFF1A</p><pre class="hljs language-null"><code>{ text:'Dashboard', reuse: true }</code></pre><p>\u4E0D\u53EF\u590D\u7528\uFF1A</p><pre class="hljs language-null"><code>{ text:'Dashboard' }
{ text:'Dashboard', reuse: false }</code></pre><p><strong>2\u3001URL</strong></p><p>\u5BF9\u6240\u6709\u8DEF\u7531\u6709\u6548\uFF0C\u53EF\u4EE5\u914D\u5408 <code>excludes</code> \u8FC7\u6EE4\u65E0\u987B\u590D\u7528\u8DEF\u7531\u3002</p><h2 id="\u6807\u7B7E\u6587\u672C"><a class="lake-link"><i data-anchor="\u6807\u7B7E\u6587\u672C"></i></a>\u6807\u7B7E\u6587\u672C</h2><p>\u6839\u636E\u4EE5\u4E0B\u987A\u5E8F\u83B7\u53D6\u6807\u7B7E\u6587\u672C\uFF1A</p><ol><li><p>\u4F7F\u7528 <code>ReuseTabService.title = 'new title'</code> \u5728\u7EC4\u4EF6\u5185\u8986\u76D6\u6587\u672C</p></li><li><p>\u8DEF\u7531\u914D\u7F6E\u4E2D <code>data</code> \u5C5E\u6027\u4E2D\u5305\u542B <code>reuseTitle</code> > <code>title</code></p></li><li><p>\u83DC\u5355\u6570\u636E\u4E2D <code>text</code> \u5C5E\u6027</p></li></ol><p><code><a data-toc="ReuseTabService">ReuseTabService</a></code> \u4EE3\u7801\u793A\u4F8B\uFF1A</p><pre class="hljs language-ts"><code>export class DemoReuseTabEditComponent implements OnInit {
  id: any;

  constructor(private route: ActivatedRoute, private reuseTabService: ReuseTabService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.reuseTabService.title = \`\u7F16\u8F91 \${this.id}\`;
    });
  }
}</code></pre><h2 id="\u751F\u547D\u5468\u671F"><a class="lake-link"><i data-anchor="\u751F\u547D\u5468\u671F"></i></a>\u751F\u547D\u5468\u671F</h2><p>\u8DEF\u7531\u590D\u7528\u4E0D\u4F1A\u89E6\u53D1\u73B0Angular\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF08\u4F8B\u5982\uFF1A<code>ngOnInit</code> \u7B49\uFF09\uFF0C\u4F46\u662F\u5F80\u5F80\u9700\u8981\u5728\u590D\u7528\u8FC7\u7A0B\u4E2D\u5237\u65B0\u6570\u636E\uFF0C\u56E0\u6B64\u63D0\u4F9B\u4E86\u4E24\u79CD\u65B0\u751F\u547D\u5468\u671F\u94A9\u5B50\u7528\u4E8E\u4E34\u65F6\u89E3\u51B3\u8FD9\u7C7B\u95EE\u9898\u3002</p><p><strong>OnReuseInit</strong> \u63A5\u53E3</p><ul><li><p><code>_onReuseInit(type?: ReuseHookOnReuseInitType): void;</code></p></li></ul><p>\u5F53\u76EE\u524D\u8DEF\u7531\u5728\u590D\u7528\u8FC7\u7A0B\u4E2D\u65F6\u89E6\u53D1\uFF0C<code>type</code> \u503C\u5206\u522B\u4E3A\uFF1A</p><ul><li><p><code>init</code> \u5F53\u8DEF\u7531\u590D\u7528\u65F6</p></li><li><p><code>refresh</code> \u5F53\u89E6\u53D1\u5237\u65B0\u52A8\u4F5C\u65F6</p></li></ul><p><strong>OnReuseDestroy</strong> \u63A5\u53E3</p><ul><li><p><code>_onReuseDestroy(): void;</code></p></li></ul><p>\u5F53\u76EE\u524D\u8DEF\u7531\u5141\u8BB8\u590D\u7528\u4E14\u8FDB\u5165\u65B0\u8DEF\u7531\u65F6\u89E6\u53D1\u3002</p><blockquote><p>\u4EE5 <code>_</code> \u5F00\u5934\u5E0C\u671B\u672A\u6765 Angular \u4F1A\u6709\u76F8\u5E94\u7684\u94A9\u5B50\u7528\u4E8E\u5FEB\u901F\u66FF\u6362\uFF0C\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\uFF1A</p></blockquote><pre class="hljs language-ts"><code>import { OnReuseDestroy, OnReuseInit, ReuseHookOnReuseInitType } from '@delon/abc/reuse-tab';

@Component()
export class DemoComponent implements OnReuseInit, OnReuseDestroy {
  _onReuseInit(type: ReuseHookOnReuseInitType) {
    console.log('_onReuseInit', type);
  }
  _onReuseDestroy() {
    console.log('_onReuseDestroy');
  }
}</code></pre><h2 id="\u6EDA\u52A8\u6761\u4F4D\u7F6E"><a class="lake-link"><i data-anchor="\u6EDA\u52A8\u6761\u4F4D\u7F6E"></i></a>\u6EDA\u52A8\u6761\u4F4D\u7F6E</h2><p>\u5F00\u542F <code>keepingScroll</code> \u4F1A\u5728\u590D\u7528\u540E\u6062\u590D\u4E4B\u524D\u7684\u6EDA\u52A8\u6761\u4F4D\u7F6E\uFF0C\u6709\u51E0\u9879\u6CE8\u610F\u7EC6\u8282\uFF1A</p><blockquote><p><strong>\u52A1\u5FC5</strong>\u4F7F\u7528\u8DEF\u7531\u9009\u9879 <a target="_blank" href="https://angular.io/api/router/ExtraOptions#scrollPositionRestoration" data-url="https://angular.io/api/router/ExtraOptions#scrollPositionRestoration">scrollPositionRestoration</a> \u6765\u7BA1\u7406\u6EDA\u52A8\u6761\u4F4D\u7F6E</p></blockquote><ul><li><p><code>true</code>\uFF1A\u8868\u793A\u4FDD\u6301\u4E4B\u524D\u6EDA\u52A8\u6761\u4F4D\u7F6E</p></li><li><p><code>false</code>\uFF1A\u8868\u793A\u4E0D\u5BF9\u6EDA\u52A8\u6761\u4EFB\u4F55\u64CD\u4F5C</p></li><li><p>\u82E5\u5168\u7AD9\u4F7F\u7528\u8DEF\u7531\u590D\u7528\u65F6\uFF0C\u5219\u8BBE\u7F6E <code>scrollPositionRestoration: 'disabled'</code>\uFF0C\u907F\u514D\u5EF6\u8FDF\u6EDA\u52A8</p></li><li><p>\u82E5\u90E8\u5206\u9875\u9762\u8DEF\u7531\u590D\u7528\u65F6\uFF0C\u5219\u53D7\u9650\u4E8E <code>scrollPositionRestoration</code> <strong>\u4F18\u5148\u503C</strong> \uFF0C\u4F1A\u6709 <code>1ms</code> \u5EF6\u8FDF\u6062\u590D\u6EDA\u52A8\u6761\u4F4D\u7F6E</p></li></ul></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="ReuseTabService"><a class="lake-link"><i data-anchor="ReuseTabService"></i></a>ReuseTabService</h3><p><strong>\u5C5E\u6027</strong></p><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[max]</code></td><td>\u5141\u8BB8\u6700\u591A\u590D\u7528\u591A\u5C11\u4E2A\u9875\u9762\uFF0C\u503C\u53D1\u751F\u53D8\u66F4\u65F6\u4F1A\u5F3A\u5236\u5173\u95ED\u4E14\u5FFD\u7565\u53EF\u5173\u95ED\u6761\u4EF6</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td><code>[mode]</code></td><td>\u8BBE\u7F6E\u5339\u914D\u6A21\u5F0F</td><td><code>ReuseTabMatchMode</code></td><td><code>0</code></td></tr><tr><td><code>[debug]</code></td><td>\u662F\u5426Debug\u6A21\u5F0F</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[keepingScroll]</code></td><td>\u4FDD\u6301\u6EDA\u52A8\u6761\u4F4D\u7F6E</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[keepingScrollContainer]</code></td><td>\u4FDD\u6301\u6EDA\u52A8\u6761\u5BB9\u5668</td><td><code>Element</code></td><td><code>window</code></td></tr><tr><td><code>[excludes]</code></td><td>\u6392\u9664\u89C4\u5219\uFF0C\u9650 <code>mode=URL</code></td><td><code>RegExp[]</code></td><td>-</td></tr><tr><td><code>[items]</code></td><td>\u83B7\u53D6\u5DF2\u7F13\u5B58\u7684\u8DEF\u7531</td><td><code><a data-toc="ReuseTabCached">ReuseTabCached</a>[]</code></td><td>-</td></tr><tr><td><code>[count]</code></td><td>\u83B7\u53D6\u5F53\u524D\u7F13\u5B58\u7684\u8DEF\u7531\u603B\u6570</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[change]</code></td><td>\u8BA2\u9605\u7F13\u5B58\u53D8\u66F4\u901A\u77E5</td><td><code>Observable<<a data-toc="ReuseTabNotify">ReuseTabNotify</a>></code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>\u81EA\u5B9A\u4E49\u5F53\u524D\u6807\u9898</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[closable]</code></td><td>\u81EA\u5B9A\u4E49\u5F53\u524D <code>closable</code> \u72B6\u6001</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><p><strong>\u65B9\u6CD5</strong></p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u8FD4\u56DE\u7C7B\u578B</th></tr></thead><tbody><tr><td><code>index(url)</code></td><td>\u83B7\u53D6\u6307\u5B9A\u8DEF\u5F84\u7F13\u5B58\u6240\u5728\u4F4D\u7F6E\uFF0C<code>-1</code> \u8868\u793A\u65E0\u7F13\u5B58</td><td><code>number</code></td></tr><tr><td><code>exists(url)</code></td><td>\u83B7\u53D6\u6307\u5B9A\u8DEF\u5F84\u7F13\u5B58\u662F\u5426\u5B58\u5728</td><td><code>boolean</code></td></tr><tr><td><code>get(url)</code></td><td>\u83B7\u53D6\u6307\u5B9A\u8DEF\u5F84\u7F13\u5B58</td><td><code><a data-toc="ReuseTabCached">ReuseTabCached</a></code></td></tr><tr><td><code>getTitle(url, route?: ActivatedRouteSnapshot)</code></td><td>\u83B7\u53D6\u6807\u9898</td><td><code>string</code></td></tr><tr><td><code>clearTitleCached()</code></td><td>\u6E05\u7A7A\u81EA\u5B9A\u4E49\u6807\u9898\u6570\u636E</td><td><code>void</code></td></tr><tr><td><code>getClosable(url, route?: ActivatedRouteSnapshot)</code></td><td>\u83B7\u53D6 <code>closable</code> \u72B6\u6001</td><td><code>string</code></td></tr><tr><td><code>clearClosableCached()</code></td><td>\u6E05\u7A7A <code>closable</code> \u7F13\u5B58</td><td><code>void</code></td></tr><tr><td><code>remove(url)</code></td><td>\u6839\u636EURL\u79FB\u9664\u6807\u7B7E\uFF0C\u540C\u65F6\u89E6 <code>change</code> remove\u4E8B\u4EF6</td><td><code>void</code></td></tr><tr><td><code>move(url, position)</code></td><td>\u79FB\u52A8\u7F13\u5B58\u6570\u636E\uFF0C\u540C\u65F6\u89E6 <code>change</code> move\u4E8B\u4EF6</td><td><code>void</code></td></tr><tr><td><code>clear()</code></td><td>\u6E05\u9664\u6240\u6709\u7F13\u5B58\uFF0C\u540C\u65F6\u89E6 <code>change</code> clear\u4E8B\u4EF6</td><td><code>void</code></td></tr><tr><td><code>refresh()</code></td><td>\u65E0\u4EFB\u4F55\u52A8\u4F5C\uFF0C\u4F46\u4F1A\u89E6 <code>change</code> refresh\u4E8B\u4EF6</td><td><code>void</code></td></tr><tr><td><code>replace(url)</code></td><td>\u5F3A\u5236\u5173\u95ED\u5F53\u524D\u8DEF\u7531\uFF08\u5305\u542B\u4E0D\u53EF\u5173\u95ED\u72B6\u6001\uFF09\uFF0C\u5E76\u91CD\u65B0\u5BFC\u822A\u81F3 <code>newUrl</code> \u8DEF\u7531</td><td><code>void</code></td></tr></tbody></table><h3 id="reuse-tab"><a class="lake-link"><i data-anchor="reuse-tab"></i></a>reuse-tab</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[i18n]</code></td><td>\u53F3\u51FB\u83DC\u5355\u56FD\u9645\u5316\uFF0C\u652F\u6301HTML</td><td><code>ReuseContextI18n</code></td><td>-</td></tr><tr><td><code>[mode]</code></td><td>\u8BBE\u7F6E\u5339\u914D\u6A21\u5F0F</td><td><code>ReuseTabMatchMode</code></td><td><code>0</code></td></tr><tr><td><code>[debug]</code></td><td>\u662F\u5426Debug\u6A21\u5F0F</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[max]</code></td><td>\u5141\u8BB8\u6700\u591A\u590D\u7528\u591A\u5C11\u4E2A\u9875\u9762</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td><code>[keepingScroll]</code></td><td>\u4FDD\u6301\u6EDA\u52A8\u6761\u4F4D\u7F6E</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[keepingScrollContainer]</code></td><td>\u4FDD\u6301\u6EDA\u52A8\u6761\u5BB9\u5668</td><td><code>string | Element</code></td><td><code>window</code></td></tr><tr><td><code>[excludes]</code></td><td>\u6392\u9664\u89C4\u5219\uFF0C\u9650 <code>mode=URL</code></td><td><code>RegExp[]</code></td><td>-</td></tr><tr><td><code>[allowClose]</code></td><td>\u5141\u8BB8\u5173\u95ED</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[customContextMenu]</code></td><td>\u81EA\u5B9A\u4E49\u53F3\u952E\u83DC\u5355</td><td><code><a data-toc="ReuseCustomContextMenu">ReuseCustomContextMenu</a>[]</code></td><td>-</td></tr><tr><td><code>[tabBarExtraContent]</code></td><td>tab bar \u4E0A\u989D\u5916\u7684\u5143\u7D20</td><td><code>TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[tabBarStyle]</code></td><td>tab bar \u7684\u6837\u5F0F\u5BF9\u8C61</td><td><code>object</code></td><td>-</td></tr><tr><td><code>[tabBarGutter]</code></td><td>tabs \u4E4B\u95F4\u7684\u95F4\u9699</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[tabType]</code></td><td>tabs \u9875\u7B7E\u7684\u57FA\u672C\u6837\u5F0F</td><td><code>line, card</code></td><td><code>line</code></td></tr><tr><td><code>[tabMaxWidth]</code></td><td>tabs \u9875\u7B7E\u6BCF\u4E00\u9879\u6700\u5927\u5BBD\u5EA6\uFF0C\u5355\u4F4D\uFF1A<code>px</code></td><td><code>number</code></td><td>-</td></tr><tr><td><code>[routeParamMatchMode]</code></td><td>\u5305\u542B\u8DEF\u7531\u53C2\u6570\u65F6\u5339\u914D\u6A21\u5F0F\uFF0C\u4F8B\u5982\uFF1A<code>/view/:id</code><br> - <code>strict</code> \u4E25\u683C\u6A21\u5F0F <code>/view/1</code>\u3001<code>/view/2</code> \u4E0D\u540C\u9875<br> - <code>loose</code> \u5BBD\u677E\u6A21\u5F0F <code>/view/1</code>\u3001<code>/view/2</code> \u76F8\u540C\u9875\u4E14\u53EA\u5448\u73B0\u4E00\u4E2A\u6807\u7B7E</td><td><code>strict,loose</code></td><td><code>strict</code></td></tr><tr><td><code>[disabled]</code></td><td>\u662F\u5426\u7981\u7528</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[titleRender]</code></td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u6E32\u67D3</td><td><code>TemplateRef&lt;{ $implicit: ReuseItem }></code></td><td>-</td></tr><tr><td><code>[storageState]</code></td><td>\u662F\u5426\u5B58\u50A8\u72B6\u6001\uFF0C\u4FDD\u6301\u6700\u540E\u4E00\u6B21\u6D4F\u89C8\u5668\u7684\u72B6\u6001</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[canClose]</code></td><td>\u5173\u95ED\u65F6\u4E8C\u6B21\u6821\u9A8C</td><td><code>(options: { item: ReuseItem; includeNonCloseable: boolean }) => Observable&lt;boolean></code></td><td>-</td></tr><tr><td><code>(close)</code></td><td>\u5173\u95ED\u56DE\u8C03</td><td><code>EventEmitter</code></td><td>-</td></tr><tr><td><code>(change)</code></td><td>\u5207\u6362\u65F6\u56DE\u8C03\uFF0C\u63A5\u6536\u7684\u53C2\u6570\u81F3\u5C11\u5305\u542B\uFF1A<code>active</code>\u3001<code>list</code> \u4E24\u4E2A\u53C2\u6570</td><td><code>EventEmitter</code></td><td>-</td></tr></tbody></table><p><strong>\u53F3\u51FB\u83DC\u5355</strong></p><p>\u5F53\u6309\u4E0B\u952E\u76D8 <code>ctrl</code> \u65F6\u4F1A\u5F3A\u5236\u79FB\u9664\u4E0D\u53EF\u5173\u95ED\u9879\u3002</p><h3 id="ReuseTabCached"><a class="lake-link"><i data-anchor="ReuseTabCached"></i></a>ReuseTabCached</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[url]</code></td><td>URL\u5730\u5740</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[closable]</code></td><td>\u662F\u5426\u5141\u8BB8\u5173\u95ED</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="ReuseTabNotify"><a class="lake-link"><i data-anchor="ReuseTabNotify"></i></a>ReuseTabNotify</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[active]</code></td><td>\u4E8B\u4EF6\u7C7B\u578B</td><td><code>title,close,closeRight,clear,move,closable,refresh,add</code></td><td>-</td></tr></tbody></table><h3 id="ReuseContextI18n"><a class="lake-link"><i data-anchor="ReuseContextI18n"></i></a>ReuseContextI18n</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[close]</code></td><td>\u5173\u95ED</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[closeOther]</code></td><td>\u5173\u95ED\u5176\u5B83</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[closeRight]</code></td><td>\u5173\u95ED\u53F3\u8FB9</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[clear]</code></td><td>\u6E05\u7A7A</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="ReuseCustomContextMenu"><a class="lake-link"><i data-anchor="ReuseCustomContextMenu"></i></a>ReuseCustomContextMenu</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[id]</code></td><td>\u552F\u4E00\u6807\u8BC6\u7B26</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[fn]</code></td><td>\u5904\u7406\u65B9\u6CD5</td><td><code>(item: ReuseItem, menu: <a data-toc="ReuseCustomContextMenu">ReuseCustomContextMenu</a>) => void</code></td><td>-</td></tr><tr><td><code>[disabled]</code></td><td>\u662F\u5426\u7981\u7528</td><td><code>(item: ReuseItem) => boolean</code></td><td>-</td></tr></tbody></table><h3 id="\u8DEF\u7531data"><a class="lake-link"><i data-anchor="\u8DEF\u7531data"></i></a>\u8DEF\u7531data</h3><p>\u900F\u8FC7\u8DEF\u7531 <code>data</code> \u9644\u52A0\u6570\u636E\uFF0C\u53EF\u4EE5\u5BF9\u90E8\u5206\u9875\u9762\u63D0\u4F9B\u8986\u76D6<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-ts"><code>// \u6307\u5B9A\u4E0D\u590D\u8DEF\u7531
{ path: 'p1', component: DemoComponent, data: { reuse: false } }
// \u6307\u5B9A\u6807\u7B7E\u6807\u9898
{ path: 'p1', component: DemoComponent, data: { title: 'New Title' } }</code></pre><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[reuse]</code></td><td>\u662F\u5426\u590D\u7528</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[titleI18n]</code></td><td>I18n\u6807\u9898Key</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[reuseClosable]</code></td><td>\u662F\u5426\u5141\u8BB8\u5173\u95ED</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[keepingScroll]</code></td><td>\u662F\u5426\u4FDD\u6301\u6EDA\u52A8\u6761</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><blockquote><p><strong>\u6CE8\uFF1A</strong> \u4EE5\u4E0A\u6570\u636E\u4E5F\u53EF\u5728 <a href="/theme/menu#Menu" data-url="/theme/menu#Menu">Menu</a> \u6570\u636E\u4E2D\u4F53\u73B0\u3002</p></blockquote><h2 id="\u5E38\u89C1\u95EE\u9898"><a class="lake-link"><i data-anchor="\u5E38\u89C1\u95EE\u9898"></i></a>\u5E38\u89C1\u95EE\u9898</h2><h3 id="\u5982\u4F55Debug\uFF1F"><a class="lake-link"><i data-anchor="\u5982\u4F55Debug\uFF1F"></i></a>\u5982\u4F55Debug\uFF1F</h3><p>\u8DEF\u7531\u590D\u7528\u4F1A\u4FDD\u7559\u7EC4\u4EF6\u72B6\u6001\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5E26\u6765\u53E6\u4E00\u4E2A\u5F0A\u7AEF\uFF1B\u590D\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u4F1A\u89E6\u53D1Angular\u751F\u547D\u5468\u671F\u52FE\u5B50\uFF0C\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u90FD\u80FD\u6B63\u5E38\u8FD0\u884C\uFF0C\u6709\u51E0\u4E2A\u5E38\u89C1\u95EE\u9898\uFF1A</p><ul><li><p><code>OnDestroy</code> \u53EF\u80FD\u4F1A\u5904\u7406\u4E00\u4E9B\u7EC4\u4EF6\u5916\u90E8\uFF08\u4F8B\u5982\uFF1A<code>body</code>\uFF09\u7684\u6837\u5F0F\u7B49\uFF0C\u53EF\u4EE5\u53C2\u8003\u751F\u547D\u5468\u671F\u89E3\u51B3\u3002</p></li><li><p>\u5F00\u542F <code>debug</code> \u6A21\u5F0F\u540E\u4F1A\u5728 <code>console</code> \u5F88\u591A\u4FE1\u606F\u8FD9\u6709\u52A9\u4E8E\u5206\u6790\u8DEF\u7531\u590D\u7528\u7684\u8FC7\u7A0B\u3002</p></li></ul><h3 id="Max\u53C2\u6570"><a class="lake-link"><i data-anchor="Max\u53C2\u6570"></i></a>Max\u53C2\u6570</h3><p>\u9650\u5B9A\u6700\u5927\u590D\u7528\u6570\u636E\u53EF\u4EE5\u51CF\u5C11\u5185\u5B58\u7684\u589E\u957F\uFF0C\u6709\u51E0\u4E2A\u95EE\u9898\u9700\u8981\u6CE8\u610F\uFF1A</p><ul><li><p><code>max</code> \u53C2\u6570\u503C\u53D1\u751F\u53D8\u66F4\u65F6\u4F1A\u5F3A\u5236\u5173\u95ED\u4E14\u5FFD\u7565\u53EF\u5173\u95ED\u6761\u4EF6</p></li><li><p>\u8D85\u51FA <code>max</code> \u503C\u65F6\uFF0C\u4F1A\u5173\u6389\u6700\u5148\u6253\u5F00 <strong>\u53EF\u5173\u95ED</strong> \u7684\u9875\u9762\uFF0C\u82E5\u6240\u6709\u9875\u9762\u90FD\u4E3A <strong>\u4E0D\u53EF\u5173\u95ED</strong> \u5219\u5FFD\u7565\u5173\u95ED</p></li></ul><h3 id="\u4E0D\u652F\u6301QueryString\u67E5\u8BE2\u53C2\u6570"><a class="lake-link"><i data-anchor="\u4E0D\u652F\u6301QueryString\u67E5\u8BE2\u53C2\u6570"></i></a>\u4E0D\u652F\u6301QueryString\u67E5\u8BE2\u53C2\u6570</h3><p>\u590D\u7528\u91C7\u7528URL\u6765\u533A\u5206\u662F\u5426\u540C\u4E00\u4E2A\u9875\u9762\uFF0C\u800C QueryString \u67E5\u8BE2\u53C2\u6570\u5F88\u5BB9\u6613\u4EA7\u751F\u91CD\u590D\u6027\u8BEF\u7528\uFF0C\u56E0\u6B64\u4E0D\u652F\u6301\u67E5\u8BE2\u53C2\u6570\uFF0C\u4E14\u5728\u590D\u7528\u8FC7\u7A0B\u4E2D\u4F1A\u5F3A\u5236\u5FFD\u7565\u6389 QueryString \u90E8\u5206\u3002</p><h3 id="\u591A\u5E94\u7528\u7F13\u5B58\u5904\u7406"><a class="lake-link"><i data-anchor="\u591A\u5E94\u7528\u7F13\u5B58\u5904\u7406"></i></a>\u591A\u5E94\u7528\u7F13\u5B58\u5904\u7406</h3><p>\u4F7F\u7528 <code>provideReuseTabConfig(storeKey: 'newKey')</code> \u6216\u901A\u8FC7\u8986\u76D6 <code>REUSE_TAB_CACHED_MANAGER</code> \u6539\u53D8\u7F13\u5B58\u5B58\u50A8 \uFF0C\u4F8B\u5982\u5728\u4F7F\u7528\u5FAE\u524D\u7AEF\uFF08\u7C7B\u4F3C<a target="_blank" href="https://github.com/worktile/ngx-planet" data-url="https://github.com/worktile/ngx-planet">ngx-planet</a>\uFF09\u53EF\u4EE5\u91CD\u5199\u7F13\u5B58\u6570\u636E\u5230 <code>window</code> \u4E0B\u6765\u5B9E\u73B0\u6570\u636E\u5171\u4EAB\u3002</p>`,meta:{type:"Basic",order:1,title:"reuse-tab",subtitle:"\u8DEF\u7531\u590D\u7528\u6807\u7B7E",cols:1,module:"import { ReuseTabModule } from '@delon/abc/reuse-tab';",standalone:!0},toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",h:2},{id:"\u5339\u914D\u6A21\u5F0F",title:"\u5339\u914D\u6A21\u5F0F",h:2},{id:"\u6807\u7B7E\u6587\u672C",title:"\u6807\u7B7E\u6587\u672C",h:2},{id:"\u751F\u547D\u5468\u671F",title:"\u751F\u547D\u5468\u671F",h:2},{id:"\u6EDA\u52A8\u6761\u4F4D\u7F6E",title:"\u6EDA\u52A8\u6761\u4F4D\u7F6E",h:2},{id:"API",title:"API",h:2,children:[{id:"ReuseTabService",title:"ReuseTabService",h:3},{id:"reuse-tab",title:"reuse-tab",h:3},{id:"ReuseTabCached",title:"ReuseTabCached",h:3},{id:"ReuseTabNotify",title:"ReuseTabNotify",h:3},{id:"ReuseContextI18n",title:"ReuseContextI18n",h:3},{id:"ReuseCustomContextMenu",title:"ReuseCustomContextMenu",h:3},{id:"\u8DEF\u7531data",title:"\u8DEF\u7531data",h:3}]},{id:"\u5E38\u89C1\u95EE\u9898",title:"\u5E38\u89C1\u95EE\u9898",h:2,children:[{id:"\u5982\u4F55Debug\uFF1F",title:"\u5982\u4F55Debug\uFF1F",h:3},{id:"Max\u53C2\u6570",title:"Max\u53C2\u6570",h:3},{id:"\u4E0D\u652F\u6301QueryString\u67E5\u8BE2\u53C2\u6570",title:"\u4E0D\u652F\u6301 QueryString \u67E5\u8BE2\u53C2\u6570",h:3},{id:"\u591A\u5E94\u7528\u7F13\u5B58\u5904\u7406",title:"\u591A\u5E94\u7528\u7F13\u5B58\u5904\u7406",h:3}]}]}},demo:!1},this.codes=[]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-reuse-tab"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(o,i){o&1&&m(0,"app-docs",0),o&2&&s("codes",i.codes)("item",i.item)},dependencies:[j],encapsulation:2});let n=e;return n})();var j0=()=>({required:"\u8BF7\u586B\u5199",pattern:"\u53EA\u80FD\u5305\u542Ba-z, 0-9\u4E4B\u95F4"}),H0=n=>({required:n,pattern:"\u53EA\u80FD\u5305\u542B0-9\u4E4B\u95F4"});function W0(n,e){if(n&1){let l=w();t(0," \u8BF7\u586B\u5199\uFF0C\u5BC6\u94A5"),r(1,"a",8),v("click",function(){y(l);let o=b();return x(o.msg.success("success"))}),t(2,"\u751F\u6210"),a(),t(3,"\u5730\u5740\u3002 ")}}var Ga=(()=>{let e=class e{constructor(){this.msg=S(vt),this.i={}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-se-basic"]],standalone:!0,features:[f],decls:23,vars:8,consts:[["f","ngForm"],["appSecretRequired",""],["nz-form","","se-container","","gutter","32"],["label","App Key",3,"error"],["type","text","nz-input","","name","ak","required","","pattern","^[a-z0-9]*$","placeholder","\u5FC5\u586B\u9879\uFF0C\u4E14\u53EA\u80FD\u5305\u542Ba-z, 0-9\u4E4B\u95F4",3,"ngModelChange","ngModel"],["label","App Secret",3,"error"],["type","text","nz-input","","name","sk","required","","maxlength","32","pattern","^[0-9]*$","placeholder","\u5FC5\u586B\u9879\uFF0C\u4E14\u53EA\u80FD\u5305\u542B0-9\u4E4B\u95F4",3,"ngModelChange","ngModel"],["nz-button","","nzType","primary",3,"disabled"],[3,"click"]],template:function(o,i){if(o&1){let p=w();t(0," "),r(1,"form",2,0),t(3,`
    `),r(4,"se",3),t(5,`
      `),r(6,"input",4),O("ngModelChange",function(u){return y(p),A(i.i.ak,u)||(i.i.ak=u),x(u)}),a(),t(7,`
    `),a(),t(8,`
    `),C(9,W0,4,0,"ng-template",null,1,P),t(11,`
    `),r(12,"se",5),t(13,`
      `),r(14,"input",6),O("ngModelChange",function(u){return y(p),A(i.i.sk,u)||(i.i.sk=u),x(u)}),a(),t(15,`
    `),a(),t(16,`
    `),r(17,"se"),t(18,`
      `),r(19,"button",7),t(20,"Save"),a(),t(21,`
    `),a(),t(22,`
  `),a()}if(o&2){let p=_(2),g=_(10);c(4),s("error",nt(5,j0)),c(2),L("ngModel",i.i.ak),c(6),s("error",Q(6,H0,g)),c(2),L("ngModel",i.i.sk),c(5),s("disabled",p.invalid)}},dependencies:[Qt,Vt,Wt,It,Et,pt,st,ut,Nt,Ct,ct,Dt,ie,ue,gn,gt,Gt,I,D,N,E],encapsulation:2});let n=e;return n})();var U0=()=>({required:"Please input your username!",pattern:"Incorrect format, muse be A"}),$a=(()=>{let e=class e{constructor(d){this.msg=d,this.validateForm=new $e({userName:new ve(null,[me.required,me.pattern(/A/)]),password:new ve(null,[me.required]),remember:new ve(!0)})}submitForm(){this.msg.success(JSON.stringify(this.validateForm.value))}updateValue(){this.validateForm.patchValue({userName:"a"})}};e.\u0275fac=function(o){return new(o||e)($(vt))},e.\u0275cmp=h({type:e,selectors:[["components-se-reactive"]],standalone:!0,features:[f],decls:22,vars:4,consts:[["nz-form","","se-container","","gutter","32","ingoreDirty","",3,"ngSubmit","formGroup"],["label","App Key","required","",3,"error"],["formControlName","userName","nz-input","","placeholder","Username"],["label","App Secret","required","","error","Please input your Password!"],["formControlName","password","nz-input","","type","password","placeholder","Password"],["nz-button","","nzType","primary",3,"disabled"],["nz-button","","nzType","link","type","button",3,"click"]],template:function(o,i){o&1&&(t(0," "),r(1,"form",0),v("ngSubmit",function(){return i.submitForm()}),t(2,`
    `),r(3,"se",1),t(4,`
      `),m(5,"input",2),t(6,`
    `),a(),t(7,`
    `),r(8,"se",3),t(9,`
      `),m(10,"input",4),t(11,`
    `),a(),t(12,`
    `),r(13,"se"),t(14,`
      `),r(15,"button",5),t(16,"Log in"),a(),t(17,`
      `),r(18,"button",6),v("click",function(){return i.updateValue()}),t(19,"Update value via patchValue"),a(),t(20,`
    `),a(),t(21,`
  `),a()),o&2&&(c(),s("formGroup",i.validateForm),c(2),s("error",nt(3,U0)),c(12),s("disabled",!i.validateForm.valid))},dependencies:[Qt,Vt,Wt,It,Et,pt,st,Ze,Nt,Ct,ct,Dt,Qe,Ne,I,D,N,E],encapsulation:2});let n=e;return n})();var Qa=(()=>{let e=class e{constructor(){this.i={}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-se-compact"]],standalone:!0,features:[f],decls:20,vars:3,consts:[["f","ngForm"],["nz-form","","se-container","","labelWidth","150","gutter","32","size","compact"],["label","App Key","error","\u8BF7\u586B\u5199","optional","(\u9009\u586B)","optionalHelp","\u901A\u8FC7\u63A7\u5236\u53F0-\u67E5\u770BKEY\u83B7\u53D6","extra","\u989D\u5916\u63D0\u793A\u4FE1\u606F"],["type","text","nz-input","","name","ak","required","",3,"ngModelChange","ngModel"],["label","App Secret","error","\u8BF7\u586B\u5199\uFF0C\u6700\u591A32\u4F4D"],["type","text","nz-input","","name","sk","required","","maxlength","32",3,"ngModelChange","ngModel"],["nz-button","","nzType","primary",3,"disabled"]],template:function(o,i){if(o&1){let p=w();t(0," "),r(1,"form",1,0),t(3,`
    `),r(4,"se",2),t(5,`
      `),r(6,"input",3),O("ngModelChange",function(u){return y(p),A(i.i.ak,u)||(i.i.ak=u),x(u)}),a(),t(7,`
    `),a(),t(8,`
    `),r(9,"se",4),t(10,`
      `),r(11,"input",5),O("ngModelChange",function(u){return y(p),A(i.i.sk,u)||(i.i.sk=u),x(u)}),a(),t(12,`
    `),a(),t(13,`
    `),r(14,"se"),t(15,`
      `),r(16,"button",6),t(17,"Save"),a(),t(18,`
    `),a(),t(19,`
  `),a()}if(o&2){let p=_(2);c(6),L("ngModel",i.i.ak),c(5),L("ngModel",i.i.sk),c(5),s("disabled",p.invalid)}},dependencies:[Qt,Vt,Wt,It,Et,pt,st,ut,Nt,Ct,ct,Dt,ie,ue,gt,Gt,I,D,N,E],encapsulation:2});let n=e;return n})();var Za=(()=>{let e=class e{constructor(){this.i={}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-se-horizontal"]],standalone:!0,features:[f],decls:20,vars:3,consts:[["f","ngForm"],["nz-form","","se-container","1","labelWidth","150"],["label","App Key","error","\u8BF7\u586B\u5199","optional","(\u9009\u586B)","optionalHelp","\u901A\u8FC7\u63A7\u5236\u53F0-\u67E5\u770BKEY\u83B7\u53D6","extra","\u989D\u5916\u63D0\u793A\u4FE1\u606F"],["type","text","nz-input","","name","ak","required","",3,"ngModelChange","ngModel"],["label","App Secret","error","\u8BF7\u586B\u5199\uFF0C\u6700\u591A32\u4F4D"],["type","text","nz-input","","name","sk","required","","maxlength","32",3,"ngModelChange","ngModel"],["nz-button","","nzType","primary",3,"disabled"]],template:function(o,i){if(o&1){let p=w();t(0," "),r(1,"form",1,0),t(3,`
    `),r(4,"se",2),t(5,`
      `),r(6,"input",3),O("ngModelChange",function(u){return y(p),A(i.i.ak,u)||(i.i.ak=u),x(u)}),a(),t(7,`
    `),a(),t(8,`
    `),r(9,"se",4),t(10,`
      `),r(11,"input",5),O("ngModelChange",function(u){return y(p),A(i.i.sk,u)||(i.i.sk=u),x(u)}),a(),t(12,`
    `),a(),t(13,`
    `),r(14,"se"),t(15,`
      `),r(16,"button",6),t(17,"Save"),a(),t(18,`
    `),a(),t(19,`
  `),a()}if(o&2){let p=_(2);c(6),L("ngModel",i.i.ak),c(5),L("ngModel",i.i.sk),c(5),s("disabled",p.invalid)}},dependencies:[Qt,Vt,Wt,It,Et,pt,st,ut,Nt,Ct,ct,Dt,ie,ue,gt,Gt,I,D,N,E],encapsulation:2});let n=e;return n})();var Xa=(()=>{let e=class e{constructor(){this.i={}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-se-inline"]],standalone:!0,features:[f],decls:20,vars:3,consts:[["f","ngForm"],["nz-form","","nzLayout","inline","se-container",""],["label","App Key","error","\u8BF7\u586B\u5199","optional","(\u9009\u586B)","optionalHelp","\u901A\u8FC7\u63A7\u5236\u53F0-\u67E5\u770BKEY\u83B7\u53D6","extra","\u989D\u5916\u63D0\u793A\u4FE1\u606F"],["type","text","nz-input","","name","ak","required","",3,"ngModelChange","ngModel"],["label","App Secret","error","\u8BF7\u586B\u5199\uFF0C\u6700\u591A32\u4F4D"],["type","text","nz-input","","name","sk","required","","maxlength","32",3,"ngModelChange","ngModel"],["nz-button","","nzType","primary",3,"disabled"]],template:function(o,i){if(o&1){let p=w();t(0," "),r(1,"form",1,0),t(3,`
    `),r(4,"se",2),t(5,`
      `),r(6,"input",3),O("ngModelChange",function(u){return y(p),A(i.i.ak,u)||(i.i.ak=u),x(u)}),a(),t(7,`
    `),a(),t(8,`
    `),r(9,"se",4),t(10,`
      `),r(11,"input",5),O("ngModelChange",function(u){return y(p),A(i.i.sk,u)||(i.i.sk=u),x(u)}),a(),t(12,`
    `),a(),t(13,`
    `),r(14,"se"),t(15,`
      `),r(16,"button",6),t(17,"Save"),a(),t(18,`
    `),a(),t(19,`
  `),a()}if(o&2){let p=_(2);c(6),L("ngModel",i.i.ak),c(5),L("ngModel",i.i.sk),c(5),s("disabled",p.invalid)}},dependencies:[Qt,Vt,Wt,It,Et,pt,st,ut,Nt,Ct,ct,Dt,ie,ue,gt,Gt,I,D,N,E],encapsulation:2});let n=e;return n})();var Ka=(()=>{let e=class e{constructor(){this.i={}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-se-vertical"]],standalone:!0,features:[f],decls:20,vars:3,consts:[["f","ngForm"],["nz-form","","nzLayout","vertical","se-container",""],["label","App Key","error","\u8BF7\u586B\u5199","optional","(\u9009\u586B)","optionalHelp","\u901A\u8FC7\u63A7\u5236\u53F0-\u67E5\u770BKEY\u83B7\u53D6","extra","\u989D\u5916\u63D0\u793A\u4FE1\u606F"],["type","text","nz-input","","name","ak","required","",3,"ngModelChange","ngModel"],["label","App Secret","error","\u8BF7\u586B\u5199\uFF0C\u6700\u591A32\u4F4D"],["type","text","nz-input","","name","sk","required","","maxlength","32",3,"ngModelChange","ngModel"],["nz-button","","nzType","primary",3,"disabled"]],template:function(o,i){if(o&1){let p=w();t(0," "),r(1,"form",1,0),t(3,`
    `),r(4,"se",2),t(5,`
      `),r(6,"input",3),O("ngModelChange",function(u){return y(p),A(i.i.ak,u)||(i.i.ak=u),x(u)}),a(),t(7,`
    `),a(),t(8,`
    `),r(9,"se",4),t(10,`
      `),r(11,"input",5),O("ngModelChange",function(u){return y(p),A(i.i.sk,u)||(i.i.sk=u),x(u)}),a(),t(12,`
    `),a(),t(13,`
    `),r(14,"se"),t(15,`
      `),r(16,"button",6),t(17,"Save"),a(),t(18,`
    `),a(),t(19,`
  `),a()}if(o&2){let p=_(2);c(6),L("ngModel",i.i.ak),c(5),L("ngModel",i.i.sk),c(5),s("disabled",p.invalid)}},dependencies:[Qt,Vt,Wt,It,Et,pt,st,ut,Nt,Ct,ct,Dt,ie,ue,gt,Gt,I,D,N,E],encapsulation:2});let n=e;return n})();function q0(n,e){n&1&&(t(0,`
        `),r(1,"button",7),t(2,"\u63D0\u53D6"),a(),t(3,`
      `))}var Ja=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-se-line"]],standalone:!0,features:[f],decls:18,vars:1,consts:[["f","ngForm"],["suffixButton",""],["nz-form","","se-container","1","size","compact","gutter","32"],["label","\u6240\u5C5E\u7C7B\u76EE","line",""],["label","\u56FE\u7247"],["nzSearch","",3,"nzAddOnAfter"],["type","text","nz-input","","placeholder","\u8BF7\u8D34\u5165\u7F51\u7EDC\u56FE\u7247\u5730\u5740"],["nz-button","","nzType","primary","nzSearch",""]],template:function(o,i){if(o&1&&(t(0," "),r(1,"form",2,0),t(3,`
    `),r(4,"se",3),t(5,"\u5934\u50CF"),a(),t(6,`
    `),r(7,"se",4),t(8,`
      `),r(9,"nz-input-group",5),t(10,`
        `),m(11,"input",6),t(12,`
      `),a(),t(13,`
      `),C(14,q0,4,0,"ng-template",null,1,P),t(16,`
    `),a(),t(17,`
  `),a()),o&2){let p=_(15);c(9),s("nzAddOnAfter",p)}},dependencies:[Qt,Vt,Wt,It,Et,pt,st,Xe,ut,Nt,Dt,Gt,I,D,N,E],encapsulation:2});let n=e;return n})();var G0=()=>({required:"\u8BF7\u586B\u5199",pattern:"\u53EA\u80FD\u5305\u542Ba-z, 0-9\u4E4B\u95F4"}),$0=n=>({required:n,pattern:"\u53EA\u80FD\u5305\u542B0-9\u4E4B\u95F4"}),Q0=()=>({required:"Please input your username!",pattern:"Incorrect format, muse be A"});function Z0(n,e){if(n&1){let l=w();t(0," \u8BF7\u586B\u5199\uFF0C\u5BC6\u94A5"),r(1,"a",14),v("click",function(){y(l);let o=b();return x(o.msg.success("success"))}),t(2,"\u751F\u6210"),a(),t(3,"\u5730\u5740\u3002 ")}}var Ya=(()=>{let e=class e{constructor(d){this.msg=d,this.validateForm=new $e({userName:new ve(null,[me.required,me.pattern(/A/)]),password:new ve(null,[me.required]),remember:new ve(!0)}),this.i={},this.ngModelErrors=[],this.reactiveErrors=[]}resetErrors(){this.ngModelErrors=[{name:"ak",error:"Required field, and can only contain a-z, 0-9"}],this.reactiveErrors=[{name:"userName",error:"Required username"},{name:"password",error:"Required password"}]}};e.\u0275fac=function(o){return new(o||e)($(vt))},e.\u0275cmp=h({type:e,selectors:[["components-se-reset-errors"]],standalone:!0,features:[f],decls:55,vars:14,consts:[["f","ngForm"],["appSecretRequired",""],[1,"mb-md"],["nz-button","",3,"click"],["nz-form","","se-container","","gutter","32",3,"errors"],["label","App Key",3,"error"],["type","text","nz-input","","name","ak","required","","pattern","^[a-z0-9]*$","placeholder","\u5FC5\u586B\u9879\uFF0C\u4E14\u53EA\u80FD\u5305\u542Ba-z, 0-9\u4E4B\u95F4",3,"ngModelChange","ngModel"],["label","App Secret",3,"error"],["type","text","nz-input","","name","sk","required","","maxlength","32","pattern","^[0-9]*$","placeholder","\u5FC5\u586B\u9879\uFF0C\u4E14\u53EA\u80FD\u5305\u542B0-9\u4E4B\u95F4",3,"ngModelChange","ngModel"],["nz-button","","nzType","primary",3,"disabled"],["nz-form","","se-container","","gutter","32",3,"formGroup","errors"],["formControlName","userName","nz-input","","placeholder","Username"],["label","App Secret","error","Please input your Password!"],["formControlName","password","nz-input","","type","password","placeholder","Password"],[3,"click"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"h3"),t(2,"Operating"),a(),t(3,`
    `),r(4,"div",2),t(5,`
      `),r(6,"button",3),v("click",function(){return y(p),x(i.resetErrors())}),t(7,"Reset all errors"),a(),t(8,`
    `),a(),t(9,`
    `),r(10,"form",4,0),t(12,`
      `),r(13,"se",5),t(14,`
        `),r(15,"input",6),O("ngModelChange",function(u){return y(p),A(i.i.ak,u)||(i.i.ak=u),x(u)}),a(),t(16,`
      `),a(),t(17,`
      `),C(18,Z0,4,0,"ng-template",null,1,P),t(20,`
      `),r(21,"se",7),t(22,`
        `),r(23,"input",8),O("ngModelChange",function(u){return y(p),A(i.i.sk,u)||(i.i.sk=u),x(u)}),a(),t(24,`
      `),a(),t(25,`
      `),r(26,"se"),t(27,`
        `),r(28,"button",9),t(29,"Save"),a(),t(30,`
      `),a(),t(31,`
    `),a(),t(32,`
    `),r(33,"h3"),t(34,"Reactive"),a(),t(35,`
    `),r(36,"form",10),t(37,`
      `),r(38,"se",5),t(39,`
        `),m(40,"input",11),t(41,`
      `),a(),t(42,`
      `),r(43,"se",12),t(44,`
        `),m(45,"input",13),t(46,`
      `),a(),t(47,`
      `),r(48,"se"),t(49,`
        `),r(50,"button",9),t(51,"Log in"),a(),t(52,`
      `),a(),t(53,`
    `),a(),t(54,`
  `)}if(o&2){let p=_(11),g=_(19);c(10),s("errors",i.ngModelErrors),c(3),s("error",nt(10,G0)),c(2),L("ngModel",i.i.ak),c(6),s("error",Q(11,$0,g)),c(2),L("ngModel",i.i.sk),c(5),s("disabled",p.invalid),c(8),s("formGroup",i.validateForm)("errors",i.reactiveErrors),c(2),s("error",nt(13,Q0)),c(12),s("disabled",!i.validateForm.valid)}},dependencies:[Qt,Vt,Wt,It,Et,pt,st,Ze,Nt,Ct,ct,Dt,ie,ue,gn,Qe,Ne,ut,gt,Gt,I,D,N,E],encapsulation:2});let n=e;return n})();function J0(n,e){n&1&&t(0," Via by ng-template ")}function Y0(n,e){if(n&1){let l=w();t(0,`
            `),r(1,"nz-select",30),O("ngModelChange",function(o){y(l);let i=b();return A(i.i.phoneNumberPrefix,o)||(i.i.phoneNumberPrefix=o),x(o)}),t(2,`
              `),m(3,"nz-option",31),t(4,`
              `),m(5,"nz-option",32),t(6,`
            `),a(),t(7,`
          `)}if(n&2){let l=b();c(),L("ngModel",l.i.phoneNumberPrefix)}}var tl=(()=>{let e=class e{constructor(){this.i={user_name:"",user_age:3,user_birthday:"",ak:"",sk:"",phoneNumberPrefix:"+86",phoneNumber:"",agree:!0,comment:""},this.columns=[{title:"id"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-se-complex"]],standalone:!0,features:[f],decls:93,vars:17,consts:[["f","ngForm"],["optionalHelpTpl",""],["addOnBeforeTemplate",""],["nz-form","","se-container","3","size","compact","gutter","24"],["label","ID","col","1",3,"optionalHelp"],["label","Name","required","","col","2","optionalHelp","The background color is #f50","optionalHelpColor","#f50"],["type","text","nz-input","","name","user_name","required","","placeholder","\u5360\u4E24\u680F",3,"ngModelChange","ngModel"],["label","Age","required",""],["name","user_age","nzAllowClear","","nzPlaceHolder","Choose",3,"ngModelChange","ngModel"],["nzLabel","1",3,"nzValue"],["nzLabel","2",3,"nzValue"],["nzLabel","3",3,"nzValue"],["nzLabel","4",3,"nzValue"],["nzLabel","5",3,"nzValue"],["label","Brithday","required",""],["name","user_birthday","nzShowTime","",3,"ngModelChange","ngModel"],["label","App Key","required",""],["type","text","nz-input","","name","ak","required","",3,"ngModelChange","ngModel"],["label","App Secret","required",""],["type","text","nz-input","","name","sk","required","","maxlength","32",3,"ngModelChange","ngModel"],["label","Phone Number","required",""],[3,"nzAddOnBefore"],["type","text","nz-input","","name","phoneNumber","required","","maxlength","32",3,"ngModelChange","ngModel"],["nz-checkbox","","name","agree",3,"ngModelChange","ngModel"],["label","Long Long Long Long Long Long Label","col","1"],["name","comment","nz-input","","rows","2","placeholder","write any thing",3,"ngModelChange","ngModel"],["hideLabel","","col","1"],["size","small",3,"columns"],["col","1"],["nz-button","","nzType","primary",3,"disabled"],["name","phoneNumberPrefix",2,"width","70px",3,"ngModelChange","ngModel"],["nzLabel","+86","nzValue","+86"],["nzLabel","+87","nzValue","+87"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"form",3,0),t(3,`
      `),r(4,"se-title"),t(5,"Title 1"),a(),t(6,`
      `),r(7,"se",4),t(8,`
        1000
        `),C(9,J0,1,0,"ng-template",null,1,P),t(11,`
      `),a(),t(12,`
      `),r(13,"se",5),t(14,`
        `),r(15,"input",6),O("ngModelChange",function(u){return y(p),A(i.i.user_name,u)||(i.i.user_name=u),x(u)}),a(),t(16,`
      `),a(),t(17,`
      `),r(18,"se",7),t(19,`
        `),r(20,"nz-select",8),O("ngModelChange",function(u){return y(p),A(i.i.user_age,u)||(i.i.user_age=u),x(u)}),t(21,`
          `),m(22,"nz-option",9),t(23,`
          `),m(24,"nz-option",10),t(25,`
          `),m(26,"nz-option",11),t(27,`
          `),m(28,"nz-option",12),t(29,`
          `),m(30,"nz-option",13),t(31,`
        `),a(),t(32,`
      `),a(),t(33,`
      `),r(34,"se",14),t(35,`
        `),r(36,"nz-date-picker",15),O("ngModelChange",function(u){return y(p),A(i.i.user_birthday,u)||(i.i.user_birthday=u),x(u)}),a(),t(37,`
      `),a(),t(38,`
      `),r(39,"se",16),t(40,`
        `),r(41,"input",17),O("ngModelChange",function(u){return y(p),A(i.i.ak,u)||(i.i.ak=u),x(u)}),a(),t(42,`
      `),a(),t(43,`
      `),r(44,"se",18),t(45,`
        `),r(46,"input",19),O("ngModelChange",function(u){return y(p),A(i.i.sk,u)||(i.i.sk=u),x(u)}),a(),t(47,`
      `),a(),t(48,`
      `),m(49,"nz-divider"),t(50,`
      `),r(51,"se",20),t(52,`
        `),r(53,"nz-input-group",21),t(54,`
          `),C(55,Y0,8,1,"ng-template",null,2,P),t(57,`
          `),r(58,"input",22),O("ngModelChange",function(u){return y(p),A(i.i.phoneNumber,u)||(i.i.phoneNumber=u),x(u)}),a(),t(59,`
        `),a(),t(60,`
      `),a(),t(61,`
      `),r(62,"se"),t(63,`
        `),r(64,"label",23),O("ngModelChange",function(u){return y(p),A(i.i.agree,u)||(i.i.agree=u),x(u)}),t(65,`
          `),r(66,"span"),t(67,"I have read the "),r(68,"a"),t(69,"agreement"),a()(),t(70,`
        `),a(),t(71,`
      `),a(),t(72,`
      `),r(73,"se-title"),t(74,"Title 2"),a(),t(75,`
      `),r(76,"se",24),t(77,`
        `),r(78,"textarea",25),O("ngModelChange",function(u){return y(p),A(i.i.comment,u)||(i.i.comment=u),x(u)}),a(),t(79,`
      `),a(),t(80,`
      `),r(81,"se",26),t(82,`
        `),m(83,"st",27),t(84,`
      `),a(),t(85,`
      `),r(86,"se",28),t(87,`
        `),r(88,"button",29),t(89,"Save"),a(),t(90,`
      `),a(),t(91,`
    `),a(),t(92,`
  `)}if(o&2){let p=_(2),g=_(10),u=_(56);c(7),s("optionalHelp",g),c(8),L("ngModel",i.i.user_name),c(5),L("ngModel",i.i.user_age),c(2),s("nzValue",1),c(2),s("nzValue",2),c(2),s("nzValue",3),c(2),s("nzValue",4),c(2),s("nzValue",5),c(6),L("ngModel",i.i.user_birthday),c(5),L("ngModel",i.i.ak),c(5),L("ngModel",i.i.sk),c(7),s("nzAddOnBefore",u),c(5),L("ngModel",i.i.phoneNumber),c(6),L("ngModel",i.i.agree),c(14),L("ngModel",i.i.comment),c(5),s("columns",i.columns),c(5),s("disabled",p.invalid)}},dependencies:[Qt,Vt,Wt,Hn,It,Et,pt,st,Xe,ut,Nt,Ct,ct,Dt,ie,ue,gt,Gt,I,D,N,E,wo,_o,To,Dn,Mn,bn,rd,No,Mo,X,Z],encapsulation:2});let n=e;return n})();var el=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/se/index.en-US.md","zh-CN":"packages/abc/se/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>A higher-order components of the form HTML template. And optimized some details:</p><ul><li><p>More friendly form validation status</p></li><li><p>Automated responsive layout</p></li><li><p>Automatic maintenance <code>id</code></p></li></ul><p>The form HTML template consists of <code>se-container</code> container (directive) and <code>se</code> component, like this:</p><pre class="hljs language-html"><code>&lt;form nz-form #f="ngForm" se-container="2"&gt;
  &lt;se label="App Key"&gt;
    &lt;input type="text" nz-input [(ngModel)]="i.ak" name="ak" required&gt;
  &lt;/se&gt;
  &lt;se label="App Secret"&gt;
    &lt;input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32"&gt;
  &lt;/se&gt;
  &lt;se&gt;
    &lt;button nz-button nzType="primary" [disabled]="f.invalid"&gt;Save&lt;/button&gt;
  &lt;/se&gt;
&lt;/form&gt;</code></pre><p>Also, automatically processed all Angular built-in validation, such as <code>required</code>, <code>maxlength</code>, <code>min</code>, <code>pattern</code>, etc., with a red border to indicate invalid value status.</p></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="se-container"><a class="lake-link"><i data-anchor="se-container"></i></a>se-container<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[gutter]</code></td><td>specify the distance between two items, unit is <code>px</code>, only <code>nzLayout:horizontal</code></td><td><code>number</code></td><td><code>32</code></td><td>\u2705</td></tr><tr><td><code>[se-container]</code></td><td>specify the maximum number of columns to display, the final columns number is determined by col setting combined with <a href="/theme/responsive" data-url="/theme/responsive">Responsive Rules</a></td><td><code>'1','2','3','4','5','6'</code></td><td>-</td><td></td></tr><tr><td><code>[col]</code></td><td>specify the maximum number of columns to display, the final columns number is determined by col setting combined with <a href="/theme/responsive" data-url="/theme/responsive">Responsive Rules</a></td><td><code>'1','2','3','4','5','6'</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[labelWidth]</code></td><td>label text of width, unit is <code>px</code></td><td><code>number</code></td><td><code>150</code></td><td>\u2705</td></tr><tr><td><code>[nzLayout]</code></td><td>type of layout when <code>inline</code> forced size is <code>compact</code></td><td><code>'horizontal','vertical','inline'</code></td><td><code>'horizontal'</code></td><td>\u2705</td></tr><tr><td><code>[size]</code></td><td>size of edit, forced ingores <code>error</code>, <code>extra</code></td><td><code>'default','compact'</code></td><td><code>'default'</code></td><td>\u2705</td></tr><tr><td><code>[firstVisual]</code></td><td>Immediately show validation error message</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[ingoreDirty]</code></td><td>Whether to ignore the <code>dirty</code> check</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[line]</code></td><td>whether separation line style</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>Display title</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[errors]</code></td><td>Batch modify <code>se</code> error value</td><td><code>SEErrorRefresh[]</code></td><td>-</td><td></td></tr><tr><td><code>[noColon]</code></td><td>Whether to not display : after label text</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr></tbody></table><h3 id="se"><a class="lake-link"><i data-anchor="se"></i></a>se<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[col]</code></td><td>specify the maximum number of columns to display, the final columns number is determined by col setting combined with <a href="/theme/responsive" data-url="/theme/responsive">Responsive Rules</a> (Inherited from <code>se-container</code>)</td><td><code>'1','2','3','4','5','6'</code></td><td>-</td></tr><tr><td><code>[label]</code></td><td>Label</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[labelWidth]</code></td><td>label text of width, unit is <code>px</code> (Inherited from <code>se-container</code>)</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[hideLabel]</code></td><td>Whether to hide the current label</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[optional]</code></td><td>Label optional information</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[optionalHelp]</code></td><td>Label optional help</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[optionalHelpColor]</code></td><td>The background color of label optional help</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[error]</code></td><td>validation error message</td><td><code>string, TemplateRef&lt;void>, { [key: string]: string, TemplateRef<void> }</code></td><td>-</td></tr><tr><td><code>[extra]</code></td><td>The extra prompt message. It is similar to help.</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[required]</code></td><td>Whether required identifier, if not set, the value is automatically set according to whether the form element has <code>RequiredValidator</code> validation</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[controlClass]</code></td><td>Control area classes</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[id]</code></td><td>Custom <code>id</code> value of component</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[line]</code></td><td>whether separation line style (Inherited from <code>se-container</code>)</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[noColon]</code></td><td>Whether to not display : after label text</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr></tbody></table><h3 id="se-title"><a class="lake-link"><i data-anchor="se-title"></i></a>se-title<label class="api-type-label standalone">standalone</label></h3><p>Display title.</p><h2 id="QA"><a class="lake-link"><i data-anchor="QA"></i></a>QA</h2><h3 id="Whencustomizethecomponentid"><a class="lake-link"><i data-anchor="Whencustomizethecomponentid"></i></a>Whencustomizethecomponentid</h3><p>Matching for and <code>id</code> values associate the label with the appropriate form control. Because <code>id</code> must be unique, and <code>ng-alain</code> automatic maintenance <code>id</code>. In most cases, you don't need to care about the binding state of <code>id</code>. When you manually specify the <code>id</code> value, the priority is higher, but you also need to maintain the corresponding <code>id</code> value of the component.</p>`,meta:{type:"CURD",title:"se",subtitle:"Edit",cols:1,order:3,module:"import { SEModule } from '@delon/abc/se';"},toc:[{id:"API",title:"API",h:2,children:[{id:"se-container",title:"se-container:standalone",h:3},{id:"se",title:"se:standalone",h:3},{id:"se-title",title:"se-title:standalone",h:3}]},{id:"QA",title:"QA",h:2,children:[{id:"Whencustomizethecomponentid",title:"When customize the component id?",h:3}]}]},"zh-CN":{content:`<section class="markdown"><p>\u7B80\u5316\u8868\u5355HTML\u6A21\u677F\u7684\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u5E76\u8FDB\u4E00\u6B65\u4F18\u5316\u4E86\u4E00\u4E9B\u7EC6\u8282\uFF1A</p><ul><li><p>\u66F4\u53CB\u597D\u7684\u8868\u5355\u6821\u9A8C\u72B6\u6001</p></li><li><p>\u81EA\u52A8\u5316\u54CD\u5E94\u5F0F\u5E03\u5C40</p></li><li><p>\u81EA\u52A8\u7EF4\u62A4\u8868\u5355 <code>id</code></p></li></ul><p>\u5B83\u7531 <code>se-container</code> \u5BB9\u5668\uFF08\u6307\u4EE4\uFF09\u548C <code>se</code> \u7EC4\u4EF6\u6765\u8868\u793A\u4E00\u4E2A\u8868\u5355\uFF0C\u4E00\u4E2A\u7B80\u5355HTML\u6A21\u677F\u8868\u5355\u662F\u8FD9\u4E48\u5199\u7684\uFF1A</p><pre class="hljs language-html"><code>&lt;form nz-form #f="ngForm" se-container="2"&gt;
  &lt;se label="App Key"&gt;
    &lt;input type="text" nz-input [(ngModel)]="i.ak" name="ak" required&gt;
  &lt;/se&gt;
  &lt;se label="App Secret"&gt;
    &lt;input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32"&gt;
  &lt;/se&gt;
  &lt;se&gt;
    &lt;button nz-button nzType="primary" [disabled]="f.invalid"&gt;Save&lt;/button&gt;
  &lt;/se&gt;
&lt;/form&gt;</code></pre><p>\u540C\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5904\u7406\u6240\u6709 Angular \u5185\u7F6E\u6821\u9A8C\u6307\u4EE4\uFF0C\u4F8B\u5982\uFF1A<code>required</code>\u3001<code>maxlength</code>\u3001<code>min</code>\u3001<code>pattern</code> \u7B49\uFF0C\u5E76\u4EE5\u7EA2\u8272\u8FB9\u6846\u6765\u8868\u793A\u65E0\u6548\u503C\u72B6\u6001\u3002</p></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="se-container"><a class="lake-link"><i data-anchor="se-container"></i></a>se-container<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[gutter]</code></td><td>\u95F4\u8DDD\uFF0C\u5F53 <code>nzLayout:horizontal</code> \u65F6\u6709\u6548</td><td><code>number</code></td><td><code>32</code></td><td>\u2705</td></tr><tr><td><code>[se-container]</code></td><td>\u6307\u5B9A\u8868\u5355\u5143\u7D20\u6700\u591A\u5206\u51E0\u5217\u5C55\u793A\uFF0C\u6700\u7EC8\u4E00\u884C\u51E0\u5217\u7531 col \u914D\u7F6E\u7ED3\u5408<a href="/theme/responsive" data-url="/theme/responsive">\u54CD\u5E94\u5F0F\u89C4\u5219</a>\u51B3\u5B9A</td><td><code>'1','2','3','4','5','6'</code></td><td>-</td><td></td></tr><tr><td><code>[col]</code></td><td>\u6307\u5B9A\u8868\u5355\u5143\u7D20\u6700\u591A\u5206\u51E0\u5217\u5C55\u793A\uFF0C\u6700\u7EC8\u4E00\u884C\u51E0\u5217\u7531 col \u914D\u7F6E\u7ED3\u5408<a href="/theme/responsive" data-url="/theme/responsive">\u54CD\u5E94\u5F0F\u89C4\u5219</a>\u51B3\u5B9A</td><td><code>'1','2','3','4','5','6'</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[labelWidth]</code></td><td>\u8868\u5355\u5143\u7D20\u9ED8\u8BA4\u6807\u7B7E\u6587\u672C\u5BBD\u5EA6\uFF0C\u5355\u4F4D\uFF1A<code>px</code></td><td><code>number</code></td><td><code>150</code></td><td>\u2705</td></tr><tr><td><code>[nzLayout]</code></td><td>\u8868\u5355\u5E03\u5C40\uFF0C\u5F53 <code>inline</code> \u65F6\u5F3A\u5236\u5927\u5C0F\u4E3A <code>compact</code></td><td><code>'horizontal','vertical','inline'</code></td><td><code>'horizontal'</code></td><td>\u2705</td></tr><tr><td><code>[size]</code></td><td>\u5927\u5C0F <code>compact</code> \u7D27\u51D1\u578B\uFF0C\u5F3A\u5236\u5FFD\u7565 <code>error</code>\u3001<code>extra</code> \u5C55\u793A</td><td><code>'default','compact'</code></td><td><code>'default'</code></td><td>\u2705</td></tr><tr><td><code>[firstVisual]</code></td><td>\u662F\u5426\u7ACB\u5373\u5448\u73B0\u9519\u8BEF\u89C6\u89C9</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[ingoreDirty]</code></td><td>\u662F\u5426\u5FFD\u7565 <code>dirty</code> \u6821\u9A8C</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[line]</code></td><td>\u5206\u9694\u7EBF</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td></td></tr><tr><td><code>[errors]</code></td><td>\u6279\u91CF\u4FEE\u6539 <code>se</code> \u9519\u8BEF\u6D88\u606F\u63CF\u8FF0</td><td><code>SEErrorRefresh[]</code></td><td>-</td><td></td></tr><tr><td><code>[noColon]</code></td><td>\u9ED8\u8BA4\u662F\u5426\u4E0D\u663E\u793A label \u540E\u9762\u7684\u5192\u53F7</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr></tbody></table><h3 id="se"><a class="lake-link"><i data-anchor="se"></i></a>se<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[col]</code></td><td>\u6307\u5B9A\u8868\u5355\u5143\u7D20\u6700\u591A\u5206\u51E0\u5217\u5C55\u793A\uFF0C\u6700\u7EC8\u4E00\u884C\u51E0\u5217\u7531 col \u914D\u7F6E\u7ED3\u5408<a href="/theme/responsive" data-url="/theme/responsive">\u54CD\u5E94\u5F0F\u89C4\u5219</a>\u51B3\u5B9A\uFF08\u7EE7\u627F\u4E8E <code>se-container</code>\uFF09</td><td><code>'1','2','3','4','5','6'</code></td><td>-</td></tr><tr><td><code>[label]</code></td><td>\u6807\u7B7E\u6587\u672C</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[labelWidth]</code></td><td>\u6807\u7B7E\u6587\u672C\u5BBD\u5EA6\uFF0C\u5355\u4F4D\uFF1A<code>px</code>\uFF08\u7EE7\u627F\u4E8E <code>se-container</code>\uFF09</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[hideLabel]</code></td><td>\u662F\u5426\u9690\u85CF\u5F53\u524D <code>label</code></td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[optional]</code></td><td>\u6807\u7B7E\u53EF\u9009\u4FE1\u606F</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[optionalHelp]</code></td><td>\u6807\u7B7E\u53EF\u9009\u5E2E\u52A9</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[optionalHelpColor]</code></td><td>\u6807\u7B7E\u53EF\u9009\u5E2E\u52A9\u80CC\u666F\u989C\u8272</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[error]</code></td><td>\u9519\u8BEF\u63CF\u8FF0</td><td><code>string, TemplateRef&lt;void>, { [key: string]: string, TemplateRef<void> }</code></td><td>-</td></tr><tr><td><code>[extra]</code></td><td>\u989D\u5916\u63D0\u793A\u4FE1\u606F</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[required]</code></td><td>\u662F\u5426\u5FC5\u586B\u9879\u6807\u8BC6\u7B26\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\u81EA\u52A8\u6839\u636E\u8868\u5355\u5143\u7D20\u662F\u5426\u6709 <code>RequiredValidator</code> \u6821\u9A8C\u6765\u8BBE\u7F6E\u503C</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[controlClass]</code></td><td>\u63A7\u4EF6\u533A\u57DF\u6837\u5F0F\u540D</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[id]</code></td><td>\u81EA\u5B9A\u4E49\u7EC4\u4EF6 <code>id</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[line]</code></td><td>\u5206\u9694\u7EBF\uFF08\u7EE7\u627F\u4E8E <code>se-container</code>\uFF09</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[noColon]</code></td><td>\u662F\u5426\u4E0D\u663E\u793A label \u540E\u9762\u7684\u5192\u53F7</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr></tbody></table><h3 id="se-title"><a class="lake-link"><i data-anchor="se-title"></i></a>se-title<label class="api-type-label standalone">standalone</label></h3><p>\u7528\u4E8E\u5C55\u793A\u6807\u9898\uFF0C\u5355\u72EC\u4E00\u884C\u3002</p><h2 id="\u5E38\u89C1\u95EE\u9898"><a class="lake-link"><i data-anchor="\u5E38\u89C1\u95EE\u9898"></i></a>\u5E38\u89C1\u95EE\u9898</h2><h3 id="\u4EC0\u4E48\u65F6\u5019\u81EA\u5B9A\u4E49\u7EC4\u4EF6id"><a class="lake-link"><i data-anchor="\u4EC0\u4E48\u65F6\u5019\u81EA\u5B9A\u4E49\u7EC4\u4EF6id"></i></a>\u4EC0\u4E48\u65F6\u5019\u81EA\u5B9A\u4E49\u7EC4\u4EF6id</h3><p>\u70B9\u51FB\u8868\u5355\u7684 Label \u4F1A\u5C06\u5149\u6807\u5B9A\u4F4D\u81F3\u76F8\u5E94\u7EC4\u4EF6\u4E0B\uFF0C\u800C <code>ng-edit</code> \u4F1A\u81EA\u52A8\u6839\u636E <code>ngModel</code> \u72B6\u6001\u5408\u7406\u7684\u8BBE\u5B9A <code>id</code>\uFF0C\u7EDD\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u4F60\u65E0\u987B\u5173\u5FC3 <code>id</code> \u7684\u7ED1\u5B9A\u72B6\u6001\uFF0C\u5F53\u7136\u82E5\u4F60\u624B\u52A8\u6307\u5B9A <code>id</code> \u503C\u5219\u4F18\u5148\u7EA7\u66F4\u9AD8\u4F46\u540C\u65F6\u4F60\u9700\u8981\u81EA\u5DF1\u7EF4\u62A4\u7EC4\u4EF6\u5BF9\u5E94\u7684 <code>id</code> \u503C\u3002</p>`,meta:{type:"CURD",title:"se",subtitle:"\u7F16\u8F91",cols:1,order:3,module:"import { SEModule } from '@delon/abc/se';"},toc:[{id:"API",title:"API",h:2,children:[{id:"se-container",title:"se-container:standalone",h:3},{id:"se",title:"se:standalone",h:3},{id:"se-title",title:"se-title:standalone",h:3}]},{id:"\u5E38\u89C1\u95EE\u9898",title:"\u5E38\u89C1\u95EE\u9898",h:2,children:[{id:"\u4EC0\u4E48\u65F6\u5019\u81EA\u5B9A\u4E49\u7EC4\u4EF6id",title:"\u4EC0\u4E48\u65F6\u5019\u81EA\u5B9A\u4E49\u7EC4\u4EF6id",h:3}]}]}},demo:!0},this.codes=[{id:"components-se-basic",meta:{order:1,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:{"zh-CN":"<p>\u4E00\u884C\u4E24\u5217\u8868\u5355\u3002</p>","en-US":"<p>1 rows & 2 columns layout form.</p>"},code:`import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'components-se-basic',
  template: \` <form nz-form #f="ngForm" se-container gutter="32">
    <se label="App Key" [error]="{ required: '\u8BF7\u586B\u5199', pattern: '\u53EA\u80FD\u5305\u542Ba-z, 0-9\u4E4B\u95F4' }">
      <input
        type="text"
        nz-input
        [(ngModel)]="i.ak"
        name="ak"
        required
        pattern="^[a-z0-9]*$"
        placeholder="\u5FC5\u586B\u9879\uFF0C\u4E14\u53EA\u80FD\u5305\u542Ba-z, 0-9\u4E4B\u95F4"
      />
    </se>
    <ng-template #appSecretRequired> \u8BF7\u586B\u5199\uFF0C\u5BC6\u94A5<a (click)="msg.success('success')">\u751F\u6210</a>\u5730\u5740\u3002 </ng-template>
    <se label="App Secret" [error]="{ required: appSecretRequired, pattern: '\u53EA\u80FD\u5305\u542B0-9\u4E4B\u95F4' }">
      <input
        type="text"
        nz-input
        [(ngModel)]="i.sk"
        name="sk"
        required
        maxlength="32"
        pattern="^[0-9]*$"
        placeholder="\u5FC5\u586B\u9879\uFF0C\u4E14\u53EA\u80FD\u5305\u542B0-9\u4E4B\u95F4"
      />
    </se>
    <se>
      <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
    </se>
  </form>\`,
  standalone: true,
  imports: [SEModule, NzFormModule, NzInputModule, FormsModule, NzButtonModule]
})
export class ComponentsSeBasicComponent {
  readonly msg = inject(NzMessageService);
  i: { ak?: string; sk?: string } = {};
}`,lang:"ts",componentName:"ComponentsSeBasicComponent",point:0,name:"basic",urls:"packages/abc/se/demo/basic.md",type:"demo"},{id:"components-se-reactive",meta:{order:2,title:{"zh-CN":"\u54CD\u5E94\u5F0F\u8868\u5355","en-US":"Reactive Form"}},summary:{"zh-CN":"<p>\u652F\u6301\u54CD\u5E94\u5F0F\u8868\u5355\u3002</p><blockquote><p><strong>\u6CE8\u610F\uFF1A</strong></p><ul><li><p>\u54CD\u5E94\u5F0F\u8868\u5355\u65E0\u6CD5\u81EA\u52A8\u83B7\u53D6 <code>Validators.required</code> \u6765\u5224\u65AD\u662F\u5426\u9700\u8981\u5FC5\u586B\u9879\u6807\u8BC6\u7B26\uFF0C\u56E0\u6B64\u9700\u8981\u624B\u52A8\u6807\u8BC6 <code>required</code> \u5C5E\u6027\u3002</p></li><li><p>\u5F53\u9700\u8981\u4F7F\u7528 <code>patchValue</code> \u8D4B\u503C\u65F6\uFF0C\u56E0\u4E3A <code>dirty</code> \u4F9D\u7136\u4FDD\u6301\u4E3A <code>false</code> \u7684\u56E0\u7D20\uFF0C\u9700\u8981\u5BF9\u6240\u6709\u8868\u5355\u5143\u7D20\u8BBE\u7F6E <code>markAsDirty()</code> \u6216\u8005\u4F7F\u7528 <code>ingoreDirty</code> \u5C5E\u6027\u5F3A\u5236\u5FFD\u7565 <code>dirty</code> \u7684\u6821\u9A8C\u3002</p></li></ul></blockquote>","en-US":"<p>Support for reactive forms.</p><blockquote><p><strong>Note: </strong></p><ul><li><p>Reactive form can't auto obtain <code>Validators.required</code> to determine whether a required item identifier is required, so it is necessary to manually identify the <code>required</code> attribute.</p></li><li><p>When you need to use <code>patchValue</code> to assign values, because <code>dirty</code> remains a factor of <code>false</code>, you need to set <code>markAsDirty()</code> on all form elements or use the <code>ingoreDirty</code> attribute to force the <code>dirty</code> check to be ignored.</p></li></ul></blockquote>"},code:`import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'components-se-reactive',
  template: \` <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()" se-container gutter="32" ingoreDirty>
    <se
      label="App Key"
      required
      [error]="{ required: 'Please input your username!', pattern: 'Incorrect format, muse be A' }"
    >
      <input formControlName="userName" nz-input placeholder="Username" />
    </se>
    <se label="App Secret" required error="Please input your Password!">
      <input formControlName="password" nz-input type="password" placeholder="Password" />
    </se>
    <se>
      <button nz-button nzType="primary" [disabled]="!validateForm.valid">Log in</button>
      <button nz-button nzType="link" type="button" (click)="updateValue()">Update value via patchValue</button>
    </se>
  </form>\`,
  standalone: true,
  imports: [SEModule, NzFormModule, NzInputModule, ReactiveFormsModule, NzButtonModule]
})
export class ComponentsSeReactiveComponent {
  validateForm = new FormGroup({
    userName: new FormControl<string | null>(null, [Validators.required, Validators.pattern(/A/)]),
    password: new FormControl(null, [Validators.required]),
    remember: new FormControl(true)
  });
  constructor(private msg: NzMessageService) {}

  submitForm(): void {
    this.msg.success(JSON.stringify(this.validateForm.value));
  }

  updateValue(): void {
    this.validateForm.patchValue({ userName: 'a' });
  }
}`,lang:"ts",componentName:"ComponentsSeReactiveComponent",point:1,name:"reactive",urls:"packages/abc/se/demo/reactive.md",type:"demo"},{id:"components-se-compact",meta:{order:3,title:{"zh-CN":"\u7D27\u51D1\u578B","en-US":"Compact Layout"}},summary:{"zh-CN":"<p>\u5F3A\u5236\u5FFD\u7565 <code>error</code>\u3001<code>extra</code> \u5C55\u793A\u3002</p>","en-US":"<p>Force ignored <code>error</code>, <code>extra</code> display.</p>"},code:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'components-se-compact',
  template: \` <form nz-form #f="ngForm" se-container labelWidth="150" gutter="32" size="compact">
    <se label="App Key" error="\u8BF7\u586B\u5199" optional="(\u9009\u586B)" optionalHelp="\u901A\u8FC7\u63A7\u5236\u53F0-\u67E5\u770BKEY\u83B7\u53D6" extra="\u989D\u5916\u63D0\u793A\u4FE1\u606F">
      <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required />
    </se>
    <se label="App Secret" error="\u8BF7\u586B\u5199\uFF0C\u6700\u591A32\u4F4D">
      <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32" />
    </se>
    <se>
      <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
    </se>
  </form>\`,
  standalone: true,
  imports: [SEModule, NzFormModule, NzInputModule, FormsModule, NzButtonModule]
})
export class ComponentsSeCompactComponent {
  i: { ak?: string; sk?: string } = {};
}`,lang:"ts",componentName:"ComponentsSeCompactComponent",point:2,name:"compact",urls:"packages/abc/se/demo/compact.md",type:"demo"},{id:"components-se-horizontal",meta:{order:4,title:{"zh-CN":"\u6C34\u5E73\u6392\u5217","en-US":"Horizontal Layout"}},summary:{"zh-CN":"<p>\u4E00\u884C\u4E00\u5217\u8868\u5355\u3002</p>","en-US":"<p>Horizontal layout form.</p>"},code:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'components-se-horizontal',
  template: \` <form nz-form #f="ngForm" se-container="1" labelWidth="150">
    <se label="App Key" error="\u8BF7\u586B\u5199" optional="(\u9009\u586B)" optionalHelp="\u901A\u8FC7\u63A7\u5236\u53F0-\u67E5\u770BKEY\u83B7\u53D6" extra="\u989D\u5916\u63D0\u793A\u4FE1\u606F">
      <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required />
    </se>
    <se label="App Secret" error="\u8BF7\u586B\u5199\uFF0C\u6700\u591A32\u4F4D">
      <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32" />
    </se>
    <se>
      <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
    </se>
  </form>\`,
  standalone: true,
  imports: [SEModule, NzFormModule, NzInputModule, FormsModule, NzButtonModule]
})
export class ComponentsSeHorizontalComponent {
  i: { ak?: string; sk?: string } = {};
}`,lang:"ts",componentName:"ComponentsSeHorizontalComponent",point:3,name:"horizontal",urls:"packages/abc/se/demo/horizontal.md",type:"demo"},{id:"components-se-inline",meta:{order:5,title:{"zh-CN":"\u5185\u8054\u5E03\u5C40","en-US":"Inline Layout"}},summary:{"zh-CN":"<p>\u82E5 <code>nzLayout: inline</code> \u65F6\u5F3A\u5236\u4F7F\u7528\u7D27\u51D1\u578B\uFF0C\u4E00\u822C\u7528\u4E8E\u641C\u7D22\u6846\u3002</p>","en-US":"<p>If <code>nzLayout: inline</code> is forced to use compact, generally used in the search box.</p>"},code:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'components-se-inline',
  template: \` <form nz-form nzLayout="inline" #f="ngForm" se-container>
    <se label="App Key" error="\u8BF7\u586B\u5199" optional="(\u9009\u586B)" optionalHelp="\u901A\u8FC7\u63A7\u5236\u53F0-\u67E5\u770BKEY\u83B7\u53D6" extra="\u989D\u5916\u63D0\u793A\u4FE1\u606F">
      <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required />
    </se>
    <se label="App Secret" error="\u8BF7\u586B\u5199\uFF0C\u6700\u591A32\u4F4D">
      <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32" />
    </se>
    <se>
      <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
    </se>
  </form>\`,
  standalone: true,
  imports: [SEModule, NzFormModule, NzInputModule, FormsModule, NzButtonModule]
})
export class ComponentsSeInlineComponent {
  i: { ak?: string; sk?: string } = {};
}`,lang:"ts",componentName:"ComponentsSeInlineComponent",point:4,name:"inline",urls:"packages/abc/se/demo/inline.md",type:"demo"},{id:"components-se-vertical",meta:{order:6,title:{"zh-CN":"\u5782\u76F4\u5E03\u5C40","en-US":"Vertical Layout"}},summary:{"zh-CN":"<p>\u5782\u76F4\u5E03\u5C40\u8868\u5355\u3002</p>","en-US":"<p>Vertical layout form.</p>"},code:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'components-se-vertical',
  template: \` <form nz-form nzLayout="vertical" #f="ngForm" se-container>
    <se label="App Key" error="\u8BF7\u586B\u5199" optional="(\u9009\u586B)" optionalHelp="\u901A\u8FC7\u63A7\u5236\u53F0-\u67E5\u770BKEY\u83B7\u53D6" extra="\u989D\u5916\u63D0\u793A\u4FE1\u606F">
      <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required />
    </se>
    <se label="App Secret" error="\u8BF7\u586B\u5199\uFF0C\u6700\u591A32\u4F4D">
      <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32" />
    </se>
    <se>
      <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
    </se>
  </form>\`,
  standalone: true,
  imports: [SEModule, NzFormModule, NzInputModule, FormsModule, NzButtonModule]
})
export class ComponentsSeVerticalComponent {
  i: { ak?: string; sk?: string } = {};
}`,lang:"ts",componentName:"ComponentsSeVerticalComponent",point:5,name:"vertical",urls:"packages/abc/se/demo/vertical.md",type:"demo"},{id:"components-se-line",meta:{order:7,title:{"zh-CN":"\u5206\u9694\u7EBF","en-US":"Separation line"}},summary:{"zh-CN":"<p>\u6784\u5EFA\u4E00\u4E2A\u5DE6\u53F3\u7ED3\u6784\u7684\u6807\u51C6\u8868\u5355\u884C\u3002</p>","en-US":"<p>Build a standard form row.</p>"},code:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'components-se-line',
  template: \` <form nz-form #f="ngForm" se-container="1" size="compact" gutter="32">
    <se label="\u6240\u5C5E\u7C7B\u76EE" line>\u5934\u50CF</se>
    <se label="\u56FE\u7247">
      <nz-input-group nzSearch [nzAddOnAfter]="suffixButton">
        <input type="text" nz-input placeholder="\u8BF7\u8D34\u5165\u7F51\u7EDC\u56FE\u7247\u5730\u5740" />
      </nz-input-group>
      <ng-template #suffixButton>
        <button nz-button nzType="primary" nzSearch>\u63D0\u53D6</button>
      </ng-template>
    </se>
  </form>\`,
  standalone: true,
  imports: [SEModule, NzFormModule, NzInputModule, FormsModule, NzButtonModule]
})
export class ComponentsSeLineComponent {}`,lang:"ts",componentName:"ComponentsSeLineComponent",point:6,name:"line",urls:"packages/abc/se/demo/line.md",type:"demo"},{id:"components-se-reset-errors",meta:{order:9,title:{"zh-CN":"\u6279\u91CF\u91CD\u7F6E\u9519\u8BEF\u6D88\u606F","en-US":"Bulk reset error value"}},summary:{"zh-CN":"<p>\u5229\u7528 <code>errors</code> \u53EF\u4EE5\u6279\u91CF\u5BF9\u6240\u6709 <code>se</code> \u7EC4\u4EF6\u91CD\u7F6E <code>error</code> \u503C\u3002</p>","en-US":"<p>Using <code>errors</code> you can reset <code>error</code> values for all <code>se</code> components in batches.</p>"},code:`import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { SEErrorRefresh, SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'components-se-reset-errors',
  template: \`
    <h3>Operating</h3>
    <div class="mb-md">
      <button nz-button (click)="resetErrors()">Reset all errors</button>
    </div>
    <form nz-form #f="ngForm" se-container [errors]="ngModelErrors" gutter="32">
      <se label="App Key" [error]="{ required: '\u8BF7\u586B\u5199', pattern: '\u53EA\u80FD\u5305\u542Ba-z, 0-9\u4E4B\u95F4' }">
        <input
          type="text"
          nz-input
          [(ngModel)]="i.ak"
          name="ak"
          required
          pattern="^[a-z0-9]*$"
          placeholder="\u5FC5\u586B\u9879\uFF0C\u4E14\u53EA\u80FD\u5305\u542Ba-z, 0-9\u4E4B\u95F4"
        />
      </se>
      <ng-template #appSecretRequired> \u8BF7\u586B\u5199\uFF0C\u5BC6\u94A5<a (click)="msg.success('success')">\u751F\u6210</a>\u5730\u5740\u3002 </ng-template>
      <se label="App Secret" [error]="{ required: appSecretRequired, pattern: '\u53EA\u80FD\u5305\u542B0-9\u4E4B\u95F4' }">
        <input
          type="text"
          nz-input
          [(ngModel)]="i.sk"
          name="sk"
          required
          maxlength="32"
          pattern="^[0-9]*$"
          placeholder="\u5FC5\u586B\u9879\uFF0C\u4E14\u53EA\u80FD\u5305\u542B0-9\u4E4B\u95F4"
        />
      </se>
      <se>
        <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
      </se>
    </form>
    <h3>Reactive</h3>
    <form nz-form [formGroup]="validateForm" se-container gutter="32" [errors]="reactiveErrors">
      <se label="App Key" [error]="{ required: 'Please input your username!', pattern: 'Incorrect format, muse be A' }">
        <input formControlName="userName" nz-input placeholder="Username" />
      </se>
      <se label="App Secret" error="Please input your Password!">
        <input formControlName="password" nz-input type="password" placeholder="Password" />
      </se>
      <se>
        <button nz-button nzType="primary" [disabled]="!validateForm.valid">Log in</button>
      </se>
    </form>
  \`,
  standalone: true,
  imports: [SEModule, NzFormModule, NzInputModule, ReactiveFormsModule, FormsModule, NzButtonModule]
})
export class ComponentsSeResetErrorsComponent {
  validateForm = new FormGroup({
    userName: new FormControl<string | null>(null, [Validators.required, Validators.pattern(/A/)]),
    password: new FormControl(null, [Validators.required]),
    remember: new FormControl(true)
  });

  i: { ak?: string; sk?: string } = {};
  ngModelErrors: SEErrorRefresh[] = [];
  reactiveErrors: SEErrorRefresh[] = [];

  constructor(public msg: NzMessageService) {}

  resetErrors(): void {
    this.ngModelErrors = [{ name: 'ak', error: 'Required field, and can only contain a-z, 0-9' }];
    this.reactiveErrors = [
      { name: 'userName', error: 'Required username' },
      { name: 'password', error: 'Required password' }
    ];
  }
}`,lang:"ts",componentName:"ComponentsSeResetErrorsComponent",point:7,name:"reset-errors",urls:"packages/abc/se/demo/reset-errors.md",type:"demo"},{id:"components-se-complex",meta:{order:10,title:{"zh-CN":"\u4E0D\u89C4\u5219\u5E03\u5C40","en-US":"Irregular Layout"}},summary:{"zh-CN":"<p>\u5229\u7528 <code>col</code> \u53EF\u4EE5\u6784\u5EFA\u590D\u6742\u4E0D\u89C4\u5219\u5E03\u5C40\u3002</p>","en-US":"<p>Use <code>col</code> to build complex irregular layouts.</p>"},code:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SEModule } from '@delon/abc/se';
import { STColumn, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'components-se-complex',
  template: \`
    <form nz-form #f="ngForm" se-container="3" size="compact" gutter="24">
      <se-title>Title 1</se-title>
      <se label="ID" col="1" [optionalHelp]="optionalHelpTpl">
        1000
        <ng-template #optionalHelpTpl> Via by ng-template </ng-template>
      </se>
      <se label="Name" required col="2" optionalHelp="The background color is #f50" optionalHelpColor="#f50">
        <input type="text" nz-input [(ngModel)]="i.user_name" name="user_name" required placeholder="\u5360\u4E24\u680F" />
      </se>
      <se label="Age" required>
        <nz-select [(ngModel)]="i.user_age" name="user_age" nzAllowClear nzPlaceHolder="Choose">
          <nz-option [nzValue]="1" nzLabel="1" />
          <nz-option [nzValue]="2" nzLabel="2" />
          <nz-option [nzValue]="3" nzLabel="3" />
          <nz-option [nzValue]="4" nzLabel="4" />
          <nz-option [nzValue]="5" nzLabel="5" />
        </nz-select>
      </se>
      <se label="Brithday" required>
        <nz-date-picker [(ngModel)]="i.user_birthday" name="user_birthday" nzShowTime />
      </se>
      <se label="App Key" required>
        <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required />
      </se>
      <se label="App Secret" required>
        <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32" />
      </se>
      <nz-divider />
      <se label="Phone Number" required>
        <nz-input-group [nzAddOnBefore]="addOnBeforeTemplate">
          <ng-template #addOnBeforeTemplate>
            <nz-select [(ngModel)]="i.phoneNumberPrefix" name="phoneNumberPrefix" style="width: 70px;">
              <nz-option nzLabel="+86" nzValue="+86" />
              <nz-option nzLabel="+87" nzValue="+87" />
            </nz-select>
          </ng-template>
          <input type="text" nz-input [(ngModel)]="i.phoneNumber" name="phoneNumber" required maxlength="32" />
        </nz-input-group>
      </se>
      <se>
        <label nz-checkbox [(ngModel)]="i.agree" name="agree">
          <span>I have read the <a>agreement</a></span>
        </label>
      </se>
      <se-title>Title 2</se-title>
      <se label="Long Long Long Long Long Long Label" col="1">
        <textarea [(ngModel)]="i.comment" name="comment" nz-input rows="2" placeholder="write any thing"></textarea>
      </se>
      <se hideLabel col="1">
        <st [columns]="columns" size="small" />
      </se>
      <se col="1">
        <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
      </se>
    </form>
  \`,
  standalone: true,
  imports: [
    SEModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    NzButtonModule,
    NzSelectModule,
    NzDividerModule,
    NzCheckboxModule,
    NzDatePickerModule,
    STModule
  ]
})
export class ComponentsSeComplexComponent {
  i = {
    user_name: '',
    user_age: 3,
    user_birthday: '',
    ak: '',
    sk: '',
    phoneNumberPrefix: '+86',
    phoneNumber: '',
    agree: true,
    comment: ''
  };
  columns: STColumn[] = [{ title: 'id' }];
}`,lang:"ts",componentName:"ComponentsSeComplexComponent",point:8,name:"complex",urls:"packages/abc/se/demo/complex.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-se"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:49,vars:21,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-se-basic"),t(7,`
        `),a(),t(8,`
      
        `),r(9,"code-box",3),t(10,`
          `),m(11,"components-se-reactive"),t(12,`
        `),a(),t(13,`
      
        `),r(14,"code-box",3),t(15,`
          `),m(16,"components-se-compact"),t(17,`
        `),a(),t(18,`
      
        `),r(19,"code-box",3),t(20,`
          `),m(21,"components-se-horizontal"),t(22,`
        `),a(),t(23,`
      
        `),r(24,"code-box",3),t(25,`
          `),m(26,"components-se-inline"),t(27,`
        `),a(),t(28,`
      
        `),r(29,"code-box",3),t(30,`
          `),m(31,"components-se-vertical"),t(32,`
        `),a(),t(33,`
      
        `),r(34,"code-box",3),t(35,`
          `),m(36,"components-se-line"),t(37,`
        `),a(),t(38,`
      
        `),r(39,"code-box",3),t(40,`
          `),m(41,"components-se-reset-errors"),t(42,`
        `),a(),t(43,`
      
        `),r(44,"code-box",3),t(45,`
          `),m(46,"components-se-complex"),t(47,`
        `),a(),t(48,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id),c(5),s("item",i.codes[1]),T("id",i.codes[1].id),c(5),s("item",i.codes[2]),T("id",i.codes[2].id),c(5),s("item",i.codes[3]),T("id",i.codes[3].id),c(5),s("item",i.codes[4]),T("id",i.codes[4].id),c(5),s("item",i.codes[5]),T("id",i.codes[5].id),c(5),s("item",i.codes[6]),T("id",i.codes[6].id),c(5),s("item",i.codes[7]),T("id",i.codes[7].id),c(5),s("item",i.codes[8]),T("id",i.codes[8].id))},dependencies:[j,H,Ga,$a,Qa,Za,Xa,Ka,Ja,Ya,tl,B,R,F],encapsulation:2});let n=e;return n})();var th=["*"],nn=(()=>{let e=class e{get marginValue(){return-(this.gutter/2)}constructor(d){d.attach(this,"sg",{gutter:32,col:2})}};e.\u0275fac=function(o){return new(o||e)($(At))},e.\u0275cmp=h({type:e,selectors:[["sg-container"],["","sg-container",""]],hostVars:8,hostBindings:function(o,i){o&2&&(Rt("margin-left",i.marginValue,"px")("margin-right",i.marginValue,"px"),k("ant-row",!0)("sg__wrap",!0))},inputs:{gutter:[2,"gutter","gutter",at],colInCon:[2,"sg-container","colInCon",d=>d==null?null:at(d)],col:[2,"col","col",d=>d==null?null:at(d)]},exportAs:["sgContainer"],standalone:!0,features:[ht,f],ngContentSelectors:th,decls:1,vars:0,template:function(o,i){o&1&&(J(),U(0))},encapsulation:2,changeDetection:0});let n=e;return n})();var oh=["*"],nh="sg",fi=(()=>{let e=class e{get paddingValue(){return this.parentComp.gutter/2}constructor(){if(this.el=S(xt).nativeElement,this.ren=S(oe),this.rep=S(Co),this.parentComp=S(nn,{host:!0,optional:!0}),this.clsMap=[],this.inited=!1,this.col=null,this.parentComp==null)throw new Error("[sg] must include 'sg-container' component")}setClass(){let{el:d,ren:o,clsMap:i,col:p}=this,g=this.parentComp;i.forEach(K=>o.removeClass(d,K)),i.length=0;let u=g.colInCon||g.col;return i.push(...this.rep.genCls(p??u,u),`${nh}__item`),i.forEach(K=>o.addClass(d,K)),this}ngOnChanges(){this.inited&&this.setClass()}ngAfterViewInit(){this.setClass(),this.inited=!0}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["sg"]],hostVars:4,hostBindings:function(o,i){o&2&&Rt("padding-left",i.paddingValue,"px")("padding-right",i.paddingValue,"px")},inputs:{col:[2,"col","col",d=>d==null?null:at(d)]},exportAs:["sg"],standalone:!0,features:[ht,Pt,f],ngContentSelectors:oh,decls:1,vars:0,template:function(o,i){o&1&&(J(),U(0))},encapsulation:2,changeDetection:0});let n=e;return n})();var ol=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=Kt({type:e}),e.\u0275inj=Xt({imports:[Ce]});let n=e;return n})();function dh(n,e){if(n&1&&(t(0,`
      `),r(1,"sg",1),t(2,`
        `),r(3,"div",2),t(4),a(),t(5,`
      `),a(),t(6,`
    `)),n&2){let l=e.$index;c(),s("col",l===5?2:null),c(3),V(l+1)}}var nl=(()=>{let e=class e{constructor(){this.ls=Array(11).fill(0)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-sg-basic"]],standalone:!0,features:[f],decls:5,vars:0,consts:[["sg-container","4"],[3,"col"],[1,"item"]],template:function(o,i){o&1&&(t(0," "),r(1,"div",0),t(2,`
    `),St(3,dh,7,2,null,null,kt),a()),o&2&&(c(3),zt(i.ls))},dependencies:[ol,nn,fi],styles:["[_nghost-%COMP%]   .sg__item[_ngcontent-%COMP%]{padding:5px 0;text-align:center;border-radius:0;min-height:30px;margin-top:8px;margin-bottom:8px;color:#fff}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]{background:#00a0e9;height:120px;line-height:120px;font-size:13px}"]});let n=e;return n})();var il=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/sg/index.en-US.md","zh-CN":"packages/abc/sg/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>A higher-order components of grid systems, that consists of <code>sg-container</code> (directive) and <code>sg</code> components:</p><pre class="hljs language-html"><code>&lt;div nz-row [nzGutter]="32"&gt;
  &lt;nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6"&gt;1&lt;/nz-col&gt;
  &lt;nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6"&gt;2&lt;/nz-col&gt;
  &lt;nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6"&gt;3&lt;/nz-col&gt;
  &lt;nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6"&gt;4&lt;/nz-col&gt;
&lt;/div&gt;</code></pre><p>More friendly:</p><pre class="hljs language-html"><code>&lt;div sg-container="4"&gt;
  &lt;sg&gt;1&lt;/sg&gt;
  &lt;sg&gt;2&lt;/sg&gt;
  &lt;sg&gt;3&lt;/sg&gt;
  &lt;sg&gt;4&lt;/sg&gt;
&lt;/div&gt;</code></pre></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="sg-container"><a class="lake-link"><i data-anchor="sg-container"></i></a>sg-container<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[gutter]</code></td><td>specify the distance between two items, unit is <code>px</code>, only <code>nzLayout:horizontal</code></td><td><code>number</code></td><td><code>32</code></td><td>\u2705</td></tr><tr><td><code>[sg-container]</code></td><td>specify the maximum number of columns to display, the final columns number is determined by col setting combined with <a href="/theme/responsive" data-url="/theme/responsive">Responsive Rules</a></td><td><code>'1','2','3','4','5','6'</code></td><td>-</td><td>-</td></tr><tr><td><code>[col]</code></td><td>specify the maximum number of columns to display, the final columns number is determined by col setting combined with <a href="/theme/responsive" data-url="/theme/responsive">Responsive Rules</a></td><td><code>'1','2','3','4','5','6'</code></td><td><code>2</code></td><td>\u2705</td></tr></tbody></table><h3 id="sg"><a class="lake-link"><i data-anchor="sg"></i></a>sg<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[col]</code></td><td>specify the maximum number of columns to display, the final columns number is determined by col setting combined with <a href="/theme/responsive" data-url="/theme/responsive">Responsive Rules</a></td><td><code>'1','2','3','4','5','6'</code></td><td>-</td></tr></tbody></table>`,meta:{type:"Layout",order:1,title:"sg",subtitle:"Simple Grid",cols:1,module:"import { SGModule } from '@delon/abc/sg';"},toc:[{id:"API",title:"API",h:2,children:[{id:"sg-container",title:"sg-container:standalone",h:3},{id:"sg",title:"sg:standalone",h:3}]}]},"zh-CN":{content:`<section class="markdown"><p>\u7B80\u5316\u6805\u683C\u7CFB\u7EDF\u8FD0\u7528\u7684\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u5B83\u7531 <code>sg-container</code> \u5BB9\u5668\uFF08\u6307\u4EE4\uFF09\u548C <code>sg</code> \u7EC4\u4EF6\u7EC4\u5408\u4EE3\u66FF\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5E03\u5C40\uFF1A</p><pre class="hljs language-html"><code>&lt;div nz-row [nzGutter]="32"&gt;
  &lt;nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6"&gt;1&lt;/nz-col&gt;
  &lt;nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6"&gt;2&lt;/nz-col&gt;
  &lt;nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6"&gt;3&lt;/nz-col&gt;
  &lt;nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6"&gt;4&lt;/nz-col&gt;
&lt;/div&gt;</code></pre><p>\u66FF\u4EE3\uFF1A</p><pre class="hljs language-html"><code>&lt;div sg-container="4"&gt;
  &lt;sg&gt;1&lt;/sg&gt;
  &lt;sg&gt;2&lt;/sg&gt;
  &lt;sg&gt;3&lt;/sg&gt;
  &lt;sg&gt;4&lt;/sg&gt;
&lt;/div&gt;</code></pre></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="sg-container"><a class="lake-link"><i data-anchor="sg-container"></i></a>sg-container<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[gutter]</code></td><td>\u95F4\u8DDD\uFF0C\u5F53 <code>nzLayout:horizontal</code> \u65F6\u6709\u6548</td><td><code>number</code></td><td><code>32</code></td><td>\u2705</td></tr><tr><td><code>[sg-container]</code></td><td>\u6307\u5B9A\u8868\u5355\u5143\u7D20\u6700\u591A\u5206\u51E0\u5217\u5C55\u793A\uFF0C\u6700\u7EC8\u4E00\u884C\u51E0\u5217\u7531 col \u914D\u7F6E\u7ED3\u5408<a href="/theme/responsive" data-url="/theme/responsive">\u54CD\u5E94\u5F0F\u89C4\u5219</a>\u51B3\u5B9A\uFF0C</td><td><code>'1','2','3','4','5','6'</code></td><td>-</td><td>-</td></tr><tr><td><code>[col]</code></td><td>\u6307\u5B9A\u8868\u5355\u5143\u7D20\u6700\u591A\u5206\u51E0\u5217\u5C55\u793A\uFF0C\u6700\u7EC8\u4E00\u884C\u51E0\u5217\u7531 col \u914D\u7F6E\u7ED3\u5408<a href="/theme/responsive" data-url="/theme/responsive">\u54CD\u5E94\u5F0F\u89C4\u5219</a>\u51B3\u5B9A\uFF0C</td><td><code>'1','2','3','4','5','6'</code></td><td><code>2</code></td><td>\u2705</td></tr></tbody></table><h3 id="sg"><a class="lake-link"><i data-anchor="sg"></i></a>sg<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[col]</code></td><td>\u6307\u5B9A\u8868\u5355\u5143\u7D20\u6700\u591A\u5206\u51E0\u5217\u5C55\u793A\uFF0C\u6700\u7EC8\u4E00\u884C\u51E0\u5217\u7531 col \u914D\u7F6E\u7ED3\u5408<a href="/theme/responsive" data-url="/theme/responsive">\u54CD\u5E94\u5F0F\u89C4\u5219</a>\u51B3\u5B9A\uFF0C</td><td><code>'1','2','3','4','5','6'</code></td><td>-</td></tr></tbody></table>`,meta:{type:"Layout",order:1,title:"sg",subtitle:"\u7B80\u6613\u6805\u683C",cols:1,module:"import { SGModule } from '@delon/abc/sg';"},toc:[{id:"API",title:"API",h:2,children:[{id:"sg-container",title:"sg-container:standalone",h:3},{id:"sg",title:"sg:standalone",h:3}]}]}},demo:!0},this.codes=[{id:"components-sg-basic",meta:{order:1,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:{"zh-CN":"<p>\u4E00\u884C\u56DB\u5217\u5E03\u5C40\u3002</p>","en-US":"<p>1 rows & 4 columns layout.</p>"},code:`import { Component } from '@angular/core';

import { SGModule } from '@delon/abc/sg';

@Component({
  selector: 'components-sg-basic',
  template: \` <div sg-container="4">
    @for (i of ls; track $index) {
      <sg [col]="$index === 5 ? 2 : null">
        <div class="item">{{ $index + 1 }}</div>
      </sg>
    }
  </div>\`,
  styles: [
    \`
      :host .sg__item {
        padding: 5px 0;
        text-align: center;
        border-radius: 0;
        min-height: 30px;
        margin-top: 8px;
        margin-bottom: 8px;
        color: #fff;
      }
      :host .item {
        background: #00a0e9;
        height: 120px;
        line-height: 120px;
        font-size: 13px;
      }
    \`
  ],
  standalone: true,
  imports: [SGModule]
})
export class ComponentsSgBasicComponent {
  ls = Array(11).fill(0);
}`,lang:"ts",componentName:"ComponentsSgBasicComponent",point:0,name:"basic",urls:"packages/abc/sg/demo/basic.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-sg"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-sg-basic"),t(7,`
        `),a(),t(8,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id))},dependencies:[j,H,nl,B,R,F],encapsulation:2});let n=e;return n})();var rh=["st"],ah=()=>({type:"strict"}),lh=n=>({params:n}),dl=(()=>{let e=class e{constructor(){this.url="/users?total=2&field=list",this.params={a:1,b:2},this.columns=[{title:"\u7F16\u53F7",index:"id",width:80},{title:"\u5934\u50CF",index:"picture.thumbnail",type:"img",width:60},{title:"\u90AE\u7BB1",index:"email",width:80},{title:"\u7535\u8BDD",index:"phone"},{title:{text:"\u4F63\u91D1",optional:"\uFF08\u5355\u4F4D\uFF1A\u5143\uFF09",optionalHelp:"\u8BA1\u7B97\u516C\u5F0F=\u8BA2\u5355\u91D1\u989D * 0.6%"},index:"price",type:"currency"},{title:"\u6CE8\u518C\u65F6\u95F4",type:"date",index:"registered"}]}setRow(){this.st.setRow(0,{price:1e8})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-basic"]],viewQuery:function(o,i){if(o&1&&rt(rh,5),o&2){let p;q(p=G())&&(i.st=p.first)}},standalone:!0,features:[f],decls:7,vars:7,consts:[["st",""],["nz-button","","nzType","primary",3,"click"],[3,"widthMode","data","req","columns"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"button",1),v("click",function(){return y(p),x(i.setRow())}),t(2,"setRow Method"),a(),t(3,`
    `),m(4,"st",2,0),t(6,`
  `)}o&2&&(c(4),s("widthMode",nt(4,ah))("data",i.url)("req",Q(5,lh,i.params))("columns",i.columns))},dependencies:[X,Z,I,D,N,E],encapsulation:2});let n=e;return n})();var ch=["customFilter"];function sh(n,e){if(n&1){let l=w();t(0,`
      `),r(1,"div",5),t(2,`
        `),r(3,"p"),t(4,"Custom body"),a(),t(5,`
        `),r(6,"button",6),v("click",function(){let o=y(l),i=o.$implicit,p=o.handle,g=b();return x(g.close(i,p,!0))}),t(7,"confirm"),a(),t(8,`
        `),r(9,"button",3),v("click",function(){let o=y(l),i=o.$implicit,p=o.handle,g=b();return x(g.close(i,p,!1))}),t(10,"reset"),a(),t(11,`
      `),a(),t(12,`
    `)}}var rl=(()=>{let e=class e{constructor(){this.msg=S(vt),this.users=[],this.columns=[]}ngOnInit(){this.columns=[{title:"\u7F16\u53F7",index:"id",type:"checkbox",selections:[{text:"\u5C0F\u4E8E25\u5C81",select:o=>o.forEach(i=>i.checked=i.age<25)},{text:"\u5927\u4E8E25\u5C81",select:o=>o.forEach(i=>i.checked=i.age>=25)}]},{title:"\u59D3\u540D",index:"name",sort:{compare:(o,i)=>o.name.length-i.name.length},filter:{type:"keyword",placeholder:"\u8F93\u5165\u540E\u6309\u56DE\u8F66\u641C\u7D22",fn:(o,i)=>!o.value||i.name.indexOf(o.value)!==-1}},{title:"\u5E74\u9F84",index:"age",sort:{compare:(o,i)=>o.age-i.age},filter:{type:"number",placeholder:"\u8303\u56F4 10 ~ 100 \u4E4B\u95F4",number:{min:10,max:100},fn:(o,i)=>o.value!=null?i.age>=+o.value:!0}},{title:"\u72B6\u6001",type:"badge",index:"status",badge:{1:{text:"Success",color:"success"},2:{text:"Error",color:"error"},3:{text:"Processing",color:"processing"},4:{text:"Default",color:"default"},5:{text:"Warning",color:"warning"}},filter:{menus:[{text:"Success",value:1},{text:"Error",value:2}],fn:(o,i)=>i.age>=o.value[0]&&i.age<=o.value[1],multiple:!0}},{title:"Date",index:"created",type:"date",filter:{type:"date",date:{mode:"date",showToday:!1,disabledDate:nd.disabledAfterDate()},fn:()=>!0}},{title:"Custom",index:"name",filter:{type:"custom",icon:{type:"search",theme:"outline"},custom:this.customFilter,showOPArea:!1,fn:(o,i)=>!o.value||i.name.indexOf(o.value)!==-1}}];let d=Array(100).fill({}).map((o,i)=>({id:i+1,name:`name ${i+1}`,age:Math.ceil(Math.random()*10)+20,status:Math.floor(Math.random()*5)+1,created:new Date}));le(d).pipe(lo(500)).subscribe(o=>this.users=o)}close(d,o,i){this.msg.info(`Process result: ${i}${i?"(only name 2)":""}`),d.menus=[{value:i?"name 2":null}],o.close(i)}change(d){console.log(d)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-custom-data"]],viewQuery:function(o,i){if(o&1&&rt(ch,7),o&2){let p;q(p=G())&&(i.customFilter=p.first)}},standalone:!0,features:[f],decls:22,vars:2,consts:[["st",""],["customFilter",""],[1,"mb-md"],["nz-button","",3,"click"],[3,"change","data","columns"],[1,"p-lg"],["nz-button","","nzType","primary",3,"click"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"div",2),t(2,`
      `),r(3,"button",3),v("click",function(){y(p);let u=_(17);return x(u.clear())}),t(4,"Clear Data"),a(),t(5,`
      `),r(6,"button",3),v("click",function(){y(p);let u=_(17);return x(u.reload())}),t(7,"Reload Data"),a(),t(8,`
      `),r(9,"button",3),v("click",function(){y(p);let u=_(17);return u.clearStatus(),x(u.reload())}),t(10,"Clear Status"),a(),t(11,`
      `),r(12,"button",3),v("click",function(){y(p);let u=_(17);return x(u.setRow(0,{className:"text-success"}))}),t(13,"Update Row ClassName"),a(),t(14,`
    `),a(),t(15,`
    `),r(16,"st",4,0),v("change",function(u){return y(p),x(i.change(u))}),a(),t(18,`
    `),C(19,sh,13,0,"ng-template",null,1,P),t(21,`
  `)}o&2&&(c(16),s("data",i.users)("columns",i.columns))},dependencies:[X,Z,I,D,N,E],encapsulation:2});let n=e;return n})();var ph=()=>({position:"both"}),mh={1:{text:"\u6210\u529F",color:"success"},2:{text:"\u9519\u8BEF",color:"error",tooltip:"TIPS"},3:{text:"\u8FDB\u884C\u4E2D",color:"processing"},4:{text:"\u9ED8\u8BA4",color:"default"},5:{text:"\u8B66\u544A",color:"warning"}},uh={1:{text:"\u6210\u529F",color:"green"},2:{text:"\u9519\u8BEF",color:"red"},3:{text:"\u8FDB\u884C\u4E2D",color:"blue"},4:{text:"\u9ED8\u8BA4",color:""},5:{text:"\u8B66\u544A",color:"orange",tooltip:"TIPS"}},dn=(n,e)=>Math.floor(Math.random()*(e-n+1)+n),al=(()=>{let e=class e{reload(){this.users=Array(10).fill({}).map((d,o)=>({id:o+1,name:`name ${o+1}`,age:dn(10,50),tag:dn(1,5),badge:dn(1,5),enum:dn(1,3),yn:[!0,!1][dn(1,5)%2],html:`<strong>${o+1}</strong> Other`}))}constructor(){this.users=[],this.columns=[{title:"\u884C\u53F7",type:"no"},{title:"\u59D3\u540D",index:"name"},{title:"\u5E74\u9F84",index:"age",type:"number"},{title:"HTML",index:"html",safeType:"safeHtml"},{title:"Text",index:"html",safeType:"text"},{title:"tag",index:"tag",type:"tag",tag:uh},{title:"badge",index:"badge",type:"badge",badge:mh},{title:"Enum",index:"enum",type:"enum",enum:{1:"\u58F9",2:"\u8D30",3:"\u53C1"}},{title:"yn",index:"yn",type:"yn"}],this.reload()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-type"]],standalone:!0,features:[f],decls:7,vars:4,consts:[["st",""],["nz-button","",3,"click"],[3,"data","columns","page"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"button",1),v("click",function(){return y(p),x(i.reload())}),t(2,"Reload"),a(),t(3,`
    `),m(4,"st",2,0),t(6,`
  `)}o&2&&(c(4),s("data",i.users)("columns",i.columns)("page",nt(3,ph)))},dependencies:[X,Z,I,D,N,E],encapsulation:2});let n=e;return n})();var hh=["st"],fh=()=>({type:"strict"}),gh=n=>({params:n}),ll=(()=>{let e=class e{constructor(){this.url="/users?total=2&field=list",this.params={a:1,b:2},this.columns=[{title:"\u7F16\u53F7",index:"id",width:55},{title:"\u7C7B\u578B",index:"type",width:60,cell:{enum:{1:"\u666E\u901A",2:"\u4F1A\u5458",3:"\u7BA1\u7406"}}},{title:"\u5934\u50CF",index:"picture.thumbnail",width:64,cell:{type:"img"}},{title:"\u90AE\u7BB1",index:"email",width:120},{title:"\u7535\u8BDD",index:"phone",cell:{mask:"999****9999"}},{title:{text:"\u4F63\u91D1",optionalHelp:"\u8BA1\u7B97\u516C\u5F0F=\u8BA2\u5355\u91D1\u989D * 0.6%"},index:"price",cell:{type:"currency",unit:"\u5143"}},{title:"\u4EBA\u6C11\u5E01\u5199\u6CD5",index:"total",cell:{type:"cny"}},{title:"Site",index:"website",width:100,cell:d=>({tooltip:d.website,link:{url:d.website}})},{title:"\u53EF\u7528",index:"disabled",width:64,cell:{type:"boolean"}},{title:"\u6CE8\u518C\u65F6\u95F4",index:"registered",width:180,cell:{type:"date"}}]}setRow(){this.st.setRow(0,{price:1e8})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-cell"]],viewQuery:function(o,i){if(o&1&&rt(hh,5),o&2){let p;q(p=G())&&(i.st=p.first)}},standalone:!0,features:[f],decls:7,vars:7,consts:[["st",""],["nz-button","","nzType","primary",3,"click"],[3,"widthMode","data","req","columns"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"button",1),v("click",function(){return y(p),x(i.setRow())}),t(2,"setRow Method"),a(),t(3,`
    `),m(4,"st",2,0),t(6,`
  `)}o&2&&(c(4),s("widthMode",nt(4,fh))("data",i.url)("req",Q(5,gh,i.params))("columns",i.columns))},dependencies:[X,Z,I,D,N,E],encapsulation:2});let n=e;return n})();var bh=n=>({params:n}),Ch=n=>({process:n}),cl=(()=>{let e=class e{constructor(){this.url="/users?total=100",this.params={a:1,b:2},this.columns=[{title:"\u7F16\u53F7",index:"id.value",type:"checkbox"},{title:"\u5934\u50CF",type:"img",width:60,index:"picture.thumbnail"},{title:"\u90AE\u7BB1",index:"email"},{title:"\u7535\u8BDD",index:"phone"},{title:"\u6CE8\u518C\u65F6\u95F4",type:"date",index:"registered"}]}change(d){console.log("change",d)}dataProcess(d){return d.map((o,i)=>(o.disabled=i===0,i===1&&(o.checked=!0),o))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-checkbox"]],standalone:!0,features:[f],decls:12,vars:8,consts:[["st",""],[1,"mb-md"],["nz-button","",3,"click"],[3,"change","data","columns","req","res"]],template:function(o,i){if(o&1){let p=w();t(0," "),r(1,"div",1),t(2,`
      `),r(3,"button",2),v("click",function(){y(p);let u=_(11);return x(u.checkAll(!0))}),t(4,"All"),a(),t(5,`
      `),r(6,"button",2),v("click",function(){y(p);let u=_(11);return x(u.clearCheck())}),t(7,"Clean"),a(),t(8,`
    `),a(),t(9,`
    `),r(10,"st",3,0),v("change",function(u){return y(p),x(i.change(u))}),a()}o&2&&(c(10),s("data",i.url)("columns",i.columns)("req",Q(4,bh,i.params))("res",Q(6,Ch,i.dataProcess)))},dependencies:[X,Z,I,D,N,E],encapsulation:2});let n=e;return n})();var yh=n=>({params:n}),xh=n=>({process:n}),sl=(()=>{let e=class e{constructor(){this.url="/users?total=300",this.params={a:1,b:2},this.columns=[{title:"\u7F16\u53F7",index:"id",type:"radio",width:70},{title:"\u5934\u50CF",type:"img",width:60,index:"picture.thumbnail"},{title:"\u90AE\u7BB1",index:"email"},{title:"\u7535\u8BDD",index:"phone"},{title:"\u6CE8\u518C\u65F6\u95F4",type:"date",index:"registered"}]}change(d){console.log("change",d)}dataChange(d){return d.map((o,i)=>(o.disabled=i===0,o.hidden=i===1,o))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-radio"]],standalone:!0,features:[f],decls:12,vars:8,consts:[["st",""],[1,"mb-md"],["nz-button","",3,"click"],[3,"change","data","columns","req","res"]],template:function(o,i){if(o&1){let p=w();t(0," "),r(1,"div",1),t(2,`
      `),r(3,"button",2),v("click",function(){y(p);let u=_(11);return x(u.setRow(1,{checked:!0}))}),t(4,"Radio second"),a(),t(5,`
      `),r(6,"button",2),v("click",function(){y(p);let u=_(11);return x(u.clearRadio())}),t(7,"Clean"),a(),t(8,`
    `),a(),t(9,`
    `),r(10,"st",3,0),v("change",function(u){return y(p),x(i.change(u))}),a()}o&2&&(c(10),s("data",i.url)("columns",i.columns)("req",Q(4,yh,i.params))("res",Q(6,xh,i.dataChange)))},dependencies:[X,Z,I,D,N,E],encapsulation:2});let n=e;return n})();var vh=()=>({type:"strict"}),Sh=n=>({params:n}),pl=(()=>{let e=class e{constructor(){this.msg=S(vt),this.url="/users?total=2&field=list",this.params={a:1,b:2},this.columns=[{title:"\u7F16\u53F7",index:"id",width:80},{title:"\u90AE\u7BB1",index:"email",width:80},{title:"\u7535\u8BDD",index:"phone"},{title:"\u6CE8\u518C\u65F6\u95F4",type:"date",index:"registered"}],this.handleContextmenu=d=>d.type==="head"?[{text:"Click me",fn:o=>this.show(d,o)}]:[{text:"Edit",fn:o=>this.show(d,o)},{text:"View",fn:o=>this.show(d,o)},{text:"Next",children:[{text:"Nothing",fn:o=>this.show(d,o)},{text:"asdf",fn:o=>this.show(d,o)}]}]}show(d,o){d.type==="head"?this.msg.info(`\u70B9\u51FB\u6807\u9898\uFF0C\u4E0B\u6807\u4E3A\uFF1A${d.colIndex}\uFF0C\u5F53\u524D\u6309\u94AE\u4E3A\uFF1A${o.text}`):this.msg.info(`\u70B9\u51FB\u5355\u5143\u683C\uFF0C\u884C\u4E0B\u6807\u4E3A\uFF1A${d.rowIndex}\uFF0C\u5217\u4E0B\u6807\u4E3A\uFF1A${d.colIndex}\uFF0C\u5F53\u524D\u6309\u94AE\u4E3A\uFF1A${o.text}`)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-contextmenu"]],standalone:!0,features:[f],decls:4,vars:8,consts:[["st",""],[3,"widthMode","data","req","columns","contextmenu"]],template:function(o,i){o&1&&(t(0,`
    `),m(1,"st",1,0),t(3,`
  `)),o&2&&(c(),s("widthMode",nt(5,vh))("data",i.url)("req",Q(6,Sh,i.params))("columns",i.columns)("contextmenu",i.handleContextmenu))},dependencies:[X,Z],encapsulation:2});let n=e;return n})();var _h=["st"];function Th(n,e){if(n&1){let l=w();t(0,`
          `),r(1,"input",5),v("ngModelChange",function(o){y(l);let i=b().index;b();let p=_(2);return x(p.setRow(i,{name:o}))}),a(),t(2,`
        `)}if(n&2){let l=b().$implicit;c(),s("ngModel",l.name)}}function wh(n,e){if(n&1&&t(0),n&2){let l=b().$implicit;mt(`
          `,l.name,`
        `)}}function kh(n,e){if(n&1&&(t(0,`
        `),C(1,Th,3,1)(2,wh,1,1)),n&2){let l=e.$implicit;c(),M(l.edit?1:2)}}function Mh(n,e){if(n&1){let l=w();t(0,`
          `),r(1,"nz-input-number",6),v("ngModelChange",function(o){y(l);let i=b().index;b();let p=_(2);return x(p.setRow(i,{age:o}))}),a(),t(2,`
        `)}if(n&2){let l=b().$implicit;c(),s("ngModel",l.age)}}function Dh(n,e){if(n&1&&t(0),n&2){let l=b().$implicit;mt(`
          `,l.age,`
        `)}}function Nh(n,e){if(n&1&&(t(0,`
        `),C(1,Mh,3,1)(2,Dh,1,1)),n&2){let l=e.$implicit;c(),M(l.edit?1:2)}}function Eh(n,e){if(n&1){let l=w();t(0,`
          `),r(1,"nz-switch",6),v("ngModelChange",function(o){y(l);let i=b().index;b();let p=_(2);return x(p.setRow(i,{enabled:o}))}),a(),t(2,`
        `)}if(n&2){let l=b().$implicit;c(),s("ngModel",l.enabled)}}function Ih(n,e){if(n&1&&t(0),n&2){let l=b().$implicit;mt(`
          `,l.enabled?"Y":"N",`
        `)}}function Ph(n,e){if(n&1&&(t(0,`
        `),C(1,Eh,3,1)(2,Ih,1,1)),n&2){let l=e.$implicit;c(),M(l.edit?1:2)}}var ml=(()=>{let e=class e{constructor(){this.msg=S(vt),this.users=Array(10).fill({}).map((d,o)=>({id:o+1,name:`name ${o+1}`,age:Math.ceil(Math.random()*10)+20,enabled:o%2===0})),this.columns=[{title:"\u7F16\u53F7",index:"id"},{title:"\u59D3\u540D",index:"name",render:"nameTpl"},{title:"\u5E74\u9F84",index:"age",render:"ageTpl"},{title:"\u542F\u7528",index:"enabled",render:"enabledTpl"},{title:"OP",buttons:[{text:"Edit",iif:d=>!d.edit,click:d=>this.updateEdit(d,!0)},{text:"Save",iif:d=>d.edit,click:d=>{this.submit(d)}},{text:"Cancel",iif:d=>d.edit,click:d=>this.updateEdit(d,!1)}]}]}submit(d){this.msg.success(JSON.stringify(this.st.pureItem(d))),this.updateEdit(d,!1)}updateEdit(d,o){this.st.setRow(d,{edit:o},{refreshSchema:!0})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-edit-row"]],viewQuery:function(o,i){if(o&1&&rt(_h,5),o&2){let p;q(p=G())&&(i.st=p.first)}},standalone:!0,features:[f],decls:11,vars:2,consts:[["st",""],[3,"data","columns"],["st-row","nameTpl"],["st-row","ageTpl"],["st-row","enabledTpl"],["nz-input","",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"st",1,0),t(3,`
      `),C(4,kh,3,1,"ng-template",2),t(5,`
      `),C(6,Nh,3,1,"ng-template",3),t(7,`
      `),C(8,Ph,3,1,"ng-template",4),t(9,`
    `),a(),t(10,`
  `)),o&2&&(c(),s("data",i.users)("columns",i.columns))},dependencies:[X,Z,vn,pt,st,ut,Ct,ct,gt,kn,wn,Io,Eo],encapsulation:2});let n=e;return n})();var Fh=n=>({params:n}),ul=(()=>{let e=class e{constructor(){this.url="/users?total=100",this.params={name:"asdf"},this.columns=[{title:"\u7F16\u53F7",index:"id",default:"-"},{title:"\u5934\u50CF",type:"img",width:60,index:"picture.thumbnail"},{title:"\u90AE\u7BB1",index:"email"},{title:"\u7535\u8BDD",index:"phone"},{title:"\u6CE8\u518C\u65F6\u95F4",type:"date",index:"registered"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-form"]],standalone:!0,features:[f],decls:15,vars:7,consts:[["st",""],[1,"mb-md"],["nz-input","","name","name","nzPlaceHolder","\u8BF7\u8F93\u5165\u59D3\u540D",1,"mr-sm",2,"width","100px",3,"ngModelChange","ngModel"],["nz-button","",3,"click","nzType"],["nz-button","",3,"click"],[3,"data","req","columns"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"div",1),t(2,`
      `),r(3,"input",2),O("ngModelChange",function(u){return y(p),A(i.params.name,u)||(i.params.name=u),x(u)}),a(),t(4,`
      `),r(5,"button",3),v("click",function(){y(p);let u=_(13);return x(u.load(1))}),t(6,"\u641C\u7D22"),a(),t(7,`
      `),r(8,"button",4),v("click",function(){y(p);let u=_(13);return i.params={},x(u.reset())}),t(9,"\u91CD\u7F6E"),a(),t(10,`
    `),a(),t(11,`
    `),m(12,"st",5,0),t(14,`
  `)}o&2&&(c(3),L("ngModel",i.params.name),c(2),s("nzType","primary"),c(7),s("data",i.url)("req",Q(5,Fh,i.params))("columns",i.columns))},dependencies:[X,Z,pt,st,ut,Ct,ct,gt,I,D,N,E],encapsulation:2});let n=e;return n})();var Rh=n=>({params:n}),hl=(()=>{let e=class e{constructor(){this.url="/users?results=3",this.params={a:1,b:2},this.clickRowClassName={exclusive:!0,fn:()=>"text-error"},this.columns=[{title:"\u7F16\u53F7",index:"id"},{title:"\u90AE\u7BB1",index:"email"},{title:"\u7535\u8BDD",index:"phone"}]}_click(d){console.log("click",d)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-row-op"]],standalone:!0,features:[f],decls:12,vars:6,consts:[["st",""],["nz-button","",3,"click"],[3,"change","data","req","columns","clickRowClassName"]],template:function(o,i){if(o&1){let p=w();t(0," "),r(1,"button",1),v("click",function(){y(p);let u=_(11);return x(u.addRow({id:1e3,email:"add@email.com",phone:"123"}))}),t(2," addRow"),a(),t(3,`
    `),r(4,"button",1),v("click",function(){y(p);let u=_(11);return x(u.removeRow(0))}),t(5," removeRow index: 0 "),a(),t(6,`
    `),r(7,"button",1),v("click",function(){y(p);let u=_(11);return x(u.setRow(0,{className:"text-success"}))}),t(8," Via setRow method "),a(),t(9,`
    `),r(10,"st",2,0),v("change",function(u){return y(p),x(i._click(u))}),a()}o&2&&(c(10),s("data",i.url)("req",Q(4,Rh,i.params))("columns",i.columns)("clickRowClassName",i.clickRowClassName))},dependencies:[X,Z,I,D,N,E],encapsulation:2});let n=e;return n})();var Ah=n=>({params:n}),fl=(()=>{let e=class e{constructor(){this.url="/users?total=200",this.params={a:1,b:2},this.columns=[{title:"\u7F16\u53F7",index:"id"},{title:"\u5934\u50CF",type:"img",width:60,index:"picture.thumbnail"},{title:"\u59D3\u540D",index:"name.last",format:(d,o,i)=>`${i+1}: ${d.name.last} ${d.name.first}`,sort:!0},{title:"\u56FD\u5BB6",index:"nat",filter:{menus:[{text:"\u4E2D\u56FD",value:"CH"},{text:"\u7F8E\u56FD",value:"US"},{text:"\u5FB7\u56FD",value:"DE"}]},sort:!0},{title:"\u6027\u522B",index:"gender",filter:{menus:[{text:"male",value:"male"},{text:"female",value:"female"}],multiple:!1},sort:!0},{title:"\u6CE8\u518C\u65F6\u95F4",type:"date",index:"registered"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-sort"]],standalone:!0,features:[f],decls:7,vars:5,consts:[["st",""],["nz-button","",3,"click"],["multiSort","",3,"data","req","columns"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"button",1),v("click",function(){y(p);let u=_(5);return x(u.reset())}),t(2,"\u91CD\u7F6E"),a(),t(3,`
    `),m(4,"st",2,0),t(6,`
  `)}o&2&&(c(4),s("data",i.url)("req",Q(3,Ah,i.params))("columns",i.columns))},dependencies:[X,Z,I,D,N,E],encapsulation:2});let n=e;return n})();function Bh(n,e){if(n&1&&t(0),n&2){let l=e.$implicit;mt(`
        `,l.description,`
      `)}}var gl=(()=>{let e=class e{constructor(){this.users=Array(10).fill({}).map((d,o)=>({id:o+1,name:`name ${o+1}`,age:Math.ceil(Math.random()*10)+20,showExpand:o!==0,description:`${o+1}. My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.`})),this.columns=[{title:"\u7F16\u53F7",index:"id"},{title:"\u59D3\u540D",index:"name"},{title:"\u5E74\u9F84",index:"age"},{buttons:[{text:"Button"}]}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-expand"]],standalone:!0,features:[f],decls:7,vars:3,consts:[["expand",""],["expandRowByClick","","expandAccordion","",3,"data","columns","expand"]],template:function(o,i){if(o&1&&(t(0,`
    `),r(1,"st",1),t(2,`
      `),C(3,Bh,1,1,"ng-template",null,0,P),t(5,`
    `),a(),t(6,`
  `)),o&2){let p=_(4);c(),s("data",i.users)("columns",i.columns)("expand",p)}},dependencies:[X,Z],encapsulation:2});let n=e;return n})();function Vh(n,e){if(n&1){let l=w();t(0),r(1,"span",7),t(2,`
          `),m(3,"i",8),t(4,`
        `),a(),t(5,`
        `),r(6,"nz-dropdown-menu",null,1),t(8,`
          `),r(9,"div",9),t(10,`
            `),r(11,"input",10),O("ngModelChange",function(o){y(l);let i=b();return A(i.searchValue,o)||(i.searchValue=o),x(o)}),a(),t(12,`
            `),r(13,"button",11),v("click",function(){y(l),b();let o=_(7);return x(o.load(2))}),t(14,"Search"),a(),t(15,`
          `),a(),t(16,`
        `),a(),t(17,`
      `)}if(n&2){let l=e.$implicit,d=_(7),o=b();mt(`
        `,l.title.text,`
        `),c(),s("nzDropdownMenu",d)("nzClickHide",!1),c(10),L("ngModel",o.searchValue),c(2),s("nzType","primary")}}function Lh(n,e){if(n&1&&(t(0,`
        `),r(1,"span",12),t(2),a(),t(3,`
      `)),n&2){let l=e.$implicit,d=e.index;c(),s("nzTooltipTitle","\u5E74\u9F84\uFF1A"+l.age),c(),bo("tooltip: ",l.age,"-",d,"")}}var Cl=(()=>{let e=class e{constructor(){this.users=Array(10).fill({}).map((d,o)=>({id:o+1,name:`name ${o+1}`,age:Math.ceil(Math.random()*10)+20})),this.columns=[{title:"\u7F16\u53F7",index:"id"},{title:"\u59D3\u540D",index:"name",iif:()=>this.isChoose("name")},{title:"\u5E74\u9F84",index:"age",iif:()=>this.isChoose("age")},{title:"\u81EA\u5B9A\u4E49",renderTitle:"customTitle",render:"custom",iif:()=>this.isChoose("custom")}],this.customColumns=[{label:"\u59D3\u540D",value:"name",checked:!0},{label:"\u5E74\u9F84",value:"age",checked:!0},{label:"\u81EA\u5B9A\u4E49",value:"custom",checked:!0}]}isChoose(d){return!!this.customColumns.find(o=>o.value===d&&o.checked)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-render"]],standalone:!0,features:[f],decls:14,vars:3,consts:[["st",""],["menuTpl","nzDropdownMenu"],[1,"mb-md"],["name","customColumns",3,"ngModelChange","ngModel"],[3,"data","columns"],["st-row","customTitle","type","title"],["st-row","custom"],["nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu","nzClickHide"],["nz-icon","","nzType","down"],[1,"ant-table-filter-dropdown","p-sm"],["type","text","nz-input","","placeholder","Search name","name","searchValue",1,"width-sm","mr-sm",3,"ngModelChange","ngModel"],["nz-button","",3,"click","nzType"],["nz-tooltip","",3,"nzTooltipTitle"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"div",2),t(2,`
      `),r(3,"nz-checkbox-group",3),O("ngModelChange",function(u){return y(p),A(i.customColumns,u)||(i.customColumns=u),x(u)}),v("ngModelChange",function(){y(p);let u=_(7);return x(u.resetColumns({emitReload:!0}))}),a(),t(4,`
    `),a(),t(5,`
    `),r(6,"st",4,0),t(8,`
      `),C(9,Vh,18,5,"ng-template",5),t(10,`
      `),C(11,Lh,4,3,"ng-template",6),t(12,`
    `),a(),t(13,`
  `)}o&2&&(c(3),L("ngModel",i.customColumns),c(3),s("data",i.users)("columns",i.columns))},dependencies:[X,Z,vn,I,D,N,E,bn,ad,ut,Ct,ct,gt,yn,xo,vo,Ot,Tt,pt,st,Se,de],encapsulation:2});let n=e;return n})();var Oh=["st"],yl=(()=>{let e=class e{constructor(){this.msg=S(vt),this.users=Array(10).fill({}).map((d,o)=>({id:o+1,name:`name ${o+1}`,age:Math.ceil(Math.random()*10)+20})),this.columns=[{title:"\u5E8F\u53F7",type:"no"},{title:"\u7F16\u53F7",index:"id"},{title:"\u59D3\u540D",index:"name"},{title:"\u5E74\u9F84",index:"age"},{title:"\u64CD\u4F5C\u533A",buttons:[{text:d=>d.ok?"Click":"Edit",icon:d=>({type:d.ok?"edit":"delete"}),className:d=>d.ok?"text-error":null,type:"modal",modal:{component:Bd},click:(d,o)=>{this.msg.success(`\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\uFF0C\u56DE\u4F20\u503C\uFF1A${JSON.stringify(o)}`),this.st.setRow(d,{ok:!d.ok})}},{text:"Drawer",type:"drawer",drawer:{title:"\u7F16\u8F91",component:Vd},click:(d,o)=>this.msg.success(`\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\uFF0C\u56DE\u4F20\u503C\uFF1A${JSON.stringify(o)}`)},{icon:"check-circle",click:d=>this.msg.info(`check-${d.name}`),iif:d=>d.id%2===0,iifBehavior:"disabled",tooltip:"Is disabled button"},{icon:"delete",type:"del",pop:{title:"Yar you sure?",okType:"danger",icon:"star"},click:(d,o,i)=>{this.msg.success(`\u6210\u529F\u5220\u9664\u3010${d.name}\u3011`),i.removeRow(d)},iif:d=>d.id%2===0},{text:"\u66F4\u591A",children:[{text:d=>d.id===1?"\u8FC7\u671F":"\u6B63\u5E38",click:d=>this.msg.error(`${d.id===1?"\u8FC7\u671F":"\u6B63\u5E38"}\u3010${d.name}\u3011`)},{text:"\u5BA1\u6838",click:d=>this.msg.info(`check-${d.name}`),iif:d=>d.id%2===0,iifBehavior:"disabled",tooltip:"This is tooltip"},{type:"divider"},{text:"\u91CD\u65B0\u5F00\u59CB",icon:"edit",click:d=>this.msg.success(`\u91CD\u65B0\u5F00\u59CB\u3010${d.name}\u3011`)}]}]}]}change(d){console.log(d)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-buttons"]],viewQuery:function(o,i){if(o&1&&rt(Oh,5),o&2){let p;q(p=G())&&(i.st=p.first)}},standalone:!0,features:[f],decls:4,vars:2,consts:[["st",""],[3,"change","data","columns"]],template:function(o,i){if(o&1){let p=w();t(0," "),r(1,"st",1,0),v("change",function(u){return y(p),x(i.change(u))}),a(),t(3," ")}o&2&&(c(),s("data",i.users)("columns",i.columns))},dependencies:[X,Z],encapsulation:2});let n=e;return n})();var jh=["st"],xl=(()=>{let e=class e{constructor(){this.url="/users?total=100",this.columns=[{title:"\u7F16\u53F7",index:"id",width:80},{title:"\u81EA\u5B9A\u4E49\u5934\u50CF",type:"widget",widget:{type:"img",params:({record:d})=>({img:d.picture.thumbnail})},width:150},{title:"\u90AE\u7BB1",index:"email"}]}changeImg(){this.st.setRow(0,{picture:{thumbnail:"https://ng-alain.com/assets/img/logo-color.svg"}},{refreshSchema:!0,emitReload:!1})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-widget"]],viewQuery:function(o,i){if(o&1&&rt(jh,5),o&2){let p;q(p=G())&&(i.st=p.first)}},standalone:!0,features:[f],decls:19,vars:2,consts:[["st",""],[1,"mb-md"],["nz-button","",3,"click"],[3,"data","columns"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"div",1),t(2,`
      `),r(3,"button",2),v("click",function(){y(p);let u=_(17);return x(u.clear())}),t(4,"Clear Data"),a(),t(5,`
      `),r(6,"button",2),v("click",function(){y(p);let u=_(17);return x(u.reload())}),t(7,"Reload Data"),a(),t(8,`
      `),r(9,"button",2),v("click",function(){y(p);let u=_(17);return u.clearStatus(),x(u.reload())}),t(10,"Clear Status"),a(),t(11,`
      `),r(12,"button",2),v("click",function(){return y(p),x(i.changeImg())}),t(13,"Change Img Data"),a(),t(14,`
    `),a(),t(15,`
    `),m(16,"st",3,0),t(18,`
  `)}o&2&&(c(16),s("data",i.url)("columns",i.columns))},dependencies:[X,Z,I,D,N,E],encapsulation:2});let n=e;return n})();var Hh=n=>({params:n}),Wh=(n,e)=>e===1?{colSpan:0}:{},vl=(()=>{let e=class e{constructor(){this.url="/users?total=2&field=list",this.params={a:1,b:2},this.columns=[{title:"\u7F16\u53F7",index:"id",sort:!0,width:100},{title:"\u5934\u50CF",type:"img",index:"picture.thumbnail",width:60},{title:"\u90AE\u7BB1",index:"email",onCell:(d,o)=>({colSpan:o===1?5:1})},{title:"first",index:"name.first",sort:!0,className:"text-center",onCell:(d,o)=>o===3?{rowSpan:2}:o===4?{rowSpan:0}:o===1?{colSpan:0}:{}},{title:"last",index:"name.last",onCell:Wh}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-colspan-rowspan"]],standalone:!0,features:[f],decls:3,vars:6,consts:[["st",""],["bordered","","size","middle",3,"data","ps","req","columns"]],template:function(o,i){o&1&&(t(0," "),m(1,"st",1,0)),o&2&&(c(),s("data",i.url)("ps",5)("req",Q(4,Hh,i.params))("columns",i.columns))},dependencies:[X,Z],encapsulation:2});let n=e;return n})();var Uh=()=>({x:"1300px"}),Sl=(()=>{let e=class e{constructor(){this.users=Array(10).fill({}).map((d,o)=>({id:o+1,name:`name ${o+1}`,age:Math.ceil(Math.random()*10)+20})),this.columns=[{title:"\u7F16\u53F71",index:"id",fixed:"left",width:100},{title:"\u7F16\u53F72",index:"id",fixed:"left",width:100},{title:"\u7F16\u53F73",index:"id",fixed:"left",width:100},{title:"\u7F16\u53F74",index:"id"},{title:"\u7F16\u53F75",index:"id"},{title:"\u7F16\u53F76",index:"id"},{title:"\u7F16\u53F77",index:"id"},{title:"\u7F16\u53F78",index:"id"},{title:"\u7F16\u53F78",index:"id"},{title:"\u7F16\u53F78",index:"id"},{title:"\u7F16\u53F78",index:"id"},{title:"\u7F16\u53F78",index:"id"},{title:"\u59D3\u540D10",index:"name",fixed:"right",width:100},{title:"\u59D3\u540D11",index:"name",fixed:"right",width:100},{title:"\u5E74\u9F8412",index:"age",fixed:"right",width:100}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-fixed"]],standalone:!0,features:[f],decls:3,vars:4,consts:[[3,"data","columns","scroll"]],template:function(o,i){o&1&&(t(0," "),m(1,"st",0),t(2," ")),o&2&&(c(),s("data",i.users)("columns",i.columns)("scroll",nt(3,Uh)))},dependencies:[X,Z],encapsulation:2});let n=e;return n})();var qh=n=>({params:n}),zl=(()=>{let e=class e{constructor(){this.url="/users?total=2&field=list",this.params={a:1,b:2},this.columns=[{title:"\u7F16\u53F7",index:"id",sort:!0,width:100},{title:"Other",children:[{title:"\u5934\u50CF",type:"img",index:"picture.thumbnail",width:60},{title:"\u90AE\u7BB1",index:"email"},{title:"\u59D3\u540D",sort:!0,children:[{title:"first",index:"name.first",sort:!0},{title:"last",index:"name.last"}]}]}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-grouping-columns"]],standalone:!0,features:[f],decls:3,vars:5,consts:[["st",""],["bordered","","size","middle",3,"data","req","columns"]],template:function(o,i){o&1&&(t(0," "),m(1,"st",1,0)),o&2&&(c(),s("data",i.url)("req",Q(3,qh,i.params))("columns",i.columns))},dependencies:[X,Z],encapsulation:2});let n=e;return n})();var Gh=n=>({params:n}),_l=(()=>{let e=class e{constructor(){this.url="/users?total=100",this.params={a:1,b:2},this.columns=[{title:"\u7F16\u53F7",index:"id"},{title:"\u5934\u50CF",type:"img",width:60,index:"picture.thumbnail"},{title:"\u90AE\u7BB1",index:"email"},{title:"\u7535\u8BDD",index:"phone"},{title:"\u6CE8\u518C\u65F6\u95F4",type:"date",index:"registered"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-responsive"]],standalone:!0,features:[f],decls:2,vars:5,consts:[["header","The header","footer","The footer","responsiveHideHeaderFooter","",3,"data","req","columns"]],template:function(o,i){o&1&&(t(0," "),m(1,"st",0)),o&2&&(c(),s("data",i.url)("req",Q(3,Gh,i.params))("columns",i.columns))},dependencies:[X,Z],encapsulation:2});let n=e;return n})();function $h(n,e){if(n&1&&(t(0,`
          `),r(1,"tr"),t(2,`
            `),r(3,"td"),t(4,"\u5408\u8BA1"),a(),t(5,`
            `),r(6,"td"),t(7),a(),t(8,`
            `),r(9,"td"),t(10),a(),t(11,`
            `),r(12,"td",4),t(13),a(),t(14,`
            `),r(15,"td",4),t(16),a(),t(17,`
            `),r(18,"td",4),t(19),a(),t(20,`
            `),r(21,"td",4),t(22),a(),t(23,`
            `),r(24,"td",4),t(25),a(),t(26,`
          `),a(),t(27,`
          `),r(28,"tr",5),t(29,`
            `),r(30,"td",6),t(31,"\u6027\u522B\u5E73\u5747\u503C"),a(),t(32,`
            `),r(33,"td",4),t(34),ne(35,"price"),a(),t(36,`
            `),m(37,"td",7),t(38,`
          `),a(),t(39,`
        `)),n&2){let l=b().$implicit;c(7),mt("",l.len.text," \u4E2A"),c(3),V(l.dc.text),c(3),V(l.sum.text),c(3),V(l.avg.text),c(3),V(l.min.text),c(3),V(l.max.text),c(3),V(l.custom.text),c(9),V(se(35,8,l.sum.value/l.len.value))}}function Qh(n,e){if(n&1&&(t(0,`
        `),C(1,$h,40,10)),n&2){b();let l=_(5);c(),M(l.count>0?1:-1)}}var Tl=(()=>{let e=class e{constructor(){this.data=Array(100).fill({}).map((d,o)=>({id:o+1,price:~~(Math.random()*100),age:~~(Math.random()*100)>50?"\u5973":"\u7537"})),this.columns=[{title:"\u884C\u53F7",type:"no"},{title:"\u7F16\u53F7",index:"id",statistical:"count",key:"len"},{title:"\u6027\u522B",index:"age",statistical:"distinctCount",key:"dc"},{title:"Sum",index:"price",type:"currency",statistical:"sum",key:"sum"},{title:"Average",index:"price",type:"currency",statistical:"average",key:"avg"},{title:"Min",index:"price",type:"currency",statistical:"min",key:"min"},{title:"Max",index:"price",type:"currency",statistical:"max",key:"max"},{title:"Custom",index:"price",type:"currency",statistical:{type:d=>({value:d[0],text:`**${d[0]}`}),currency:!1},key:"custom"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-statistical"]],standalone:!0,features:[f],decls:11,vars:3,consts:[["st",""],["bodyTpl",""],["nz-button","",3,"click"],[3,"data","columns","body"],[1,"text-right"],[1,"bg-grey-lighter"],["colspan","3"],["colspan","4"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"button",2),v("click",function(){return y(p),x(i.data=[])}),t(2,"Clean Data"),a(),t(3,`
    `),r(4,"st",3,0),t(6,`
      `),C(7,Qh,2,1,"ng-template",null,1,P),t(9,`
    `),a(),t(10,`
  `)}if(o&2){let p=_(8);c(4),s("data",i.data)("columns",i.columns)("body",p)}},dependencies:[X,Z,I,D,N,E,Od],encapsulation:2});let n=e;return n})();var Zh=["st"],Xh=()=>({x:"1300px",y:"240px"}),wl=(()=>{let e=class e{constructor(){this.destroy$=S(Lt),this.page={front:!1,show:!1},this.data=Array(2e3).fill({}).map((d,o)=>({id:o+1,price:~~(Math.random()*100)})),this.columns=[{title:"\u7F16\u53F7",index:"id",width:100},{title:"\u4EF7\u683C1",index:"price",width:100},{title:"\u4EF7\u683C2",index:"price",width:100},{title:"\u4EF7\u683C3",index:"price",width:100},{title:"\u4EF7\u683C4",index:"price",width:100},{title:"\u4EF7\u683C5",index:"price",width:100},{title:"\u4EF7\u683C6",index:"price",width:100},{title:"\u4EF7\u683C7",index:"price",width:100},{title:"\u4EF7\u683C8",index:"price",width:100},{title:"\u4EF7\u683C9",index:"price",width:100},{title:"\u4EF7\u683C10",index:"price",width:100}]}scrollToIndex(d){this.st.cdkVirtualScrollViewport?.scrollToIndex(d)}ngAfterViewInit(){this.st.cdkVirtualScrollViewport?.scrolledIndexChange.pipe(Mt(this.destroy$)).subscribe(d=>{console.log("scroll index to",d)})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-virtual"]],viewQuery:function(o,i){if(o&1&&rt(Zh,5),o&2){let p;q(p=G())&&(i.st=p.first)}},standalone:!0,features:[f],decls:7,vars:5,consts:[["st",""],["nz-button","",3,"click"],["virtualScroll","",3,"data","columns","page","scroll"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"button",1),v("click",function(){return y(p),x(i.scrollToIndex(200))}),t(2,"Scroll To Index 200"),a(),t(3,`
    `),m(4,"st",2,0),t(6,`
  `)}o&2&&(c(4),s("data",i.data)("columns",i.columns)("page",i.page)("scroll",nt(4,Xh)))},dependencies:[X,Z,I,D,N,E],encapsulation:2});let n=e;return n})();var Kh=["st"],kl=(()=>{let e=class e{constructor(){this.data=Array(1e4).fill({}).map((d,o)=>({id:o+1,picture:{thumbnail:`https://dummyimage.com/100x100&text=${Math.min(o+1,30)}`},email:`e${o+1}@qq.com`,phone:`phone - ${o+1}`,price:Math.ceil(Math.random()*1e7)+1e7,registered:new Date})),this.columns=[{title:"\u7F16\u53F7",index:"id"},{title:"\u5934\u50CF",type:"img",width:60,index:"picture.thumbnail",exported:!1},{title:"\u90AE\u7BB1",index:"email"},{title:"\u7535\u8BDD",index:"phone"},{title:"\u6570\u5B57",index:"price",type:"number",sort:{compare:(d,o)=>d.price-o.price}},{title:"\u8D27\u5E01",index:"price",type:"currency"},{title:"\u6CE8\u518C\u65F6\u95F4",type:"date",index:"registered"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-export"]],viewQuery:function(o,i){if(o&1&&rt(Kh,5),o&2){let p;q(p=G())&&(i.st=p.first)}},standalone:!0,features:[f],decls:13,vars:2,consts:[["st",""],["nz-button","",3,"click"],[1,"mt-sm",3,"data","columns"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"button",1),v("click",function(){y(p);let u=_(11);return x(u.export())}),t(2,"Export"),a(),t(3,`
    `),r(4,"button",1),v("click",function(){y(p);let u=_(11);return x(u.export(!0))}),t(5,"Export Filtered Data"),a(),t(6,`
    `),r(7,"button",1),v("click",function(){y(p);let u=_(11);return x(u.export(i.data,{filename:"via-data.xlsx",sheetname:"user"}))}),t(8,"Export via data"),a(),t(9,`
    `),m(10,"st",2,0),t(12,`
  `)}o&2&&(c(10),s("data",i.data)("columns",i.columns))},dependencies:[X,Z,I,D,N,E],encapsulation:2});let n=e;return n})();var Jh=()=>({type:"strict"}),Ml=(()=>{let e=class e{constructor(){this.url="/users?total=2&field=list",this.columns=[{title:"\u7F16\u53F7",index:"id",width:80,resizable:!1},{title:"\u5934\u50CF",type:"img",width:60,index:"picture.thumbnail"},{title:"\u90AE\u7BB1",index:"email",width:150,resizable:{minWidth:150}},{title:"\u7535\u8BDD",index:"phone"},{title:"\u4F63\u91D1",index:"price",type:"currency"},{title:"\u6CE8\u518C\u65F6\u95F4",type:"date",index:"registered"}]}onChange({type:d,resize:o}){d==="resize"&&console.log(o?.width)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-st-resizable"]],standalone:!0,features:[f],decls:3,vars:4,consts:[["resizable","",3,"change","data","columns","widthMode"]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"st",0),v("change",function(g){return i.onChange(g)}),a(),t(2,`
  `)),o&2&&(c(),s("data",i.url)("columns",i.columns)("widthMode",nt(3,Jh)))},dependencies:[X,Z],encapsulation:2});let n=e;return n})();var Dl=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/st/index.en-US.md","zh-CN":"packages/abc/st/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p><code><a data-toc="st">st</a></code> is not creating another table component, but use <strong>configurable</strong> rendering table on base of <code>nz-table</code>. this method can satisfy most scenes in admin interfaces, but it's easier to rendering table.</p><h2 id="DataSource"><a class="lake-link"><i data-anchor="DataSource"></i></a>DataSource</h2><p><code>data</code> supports multiple formats of data sources: URL and static data.</p><h3 id="URL"><a class="lake-link"><i data-anchor="URL"></i></a>URL</h3><p>The value is URL.</p><ul><li><p>Resolve request data format problems with parameters such as <code>req.params</code>, <code>req.method</code></p></li><li><p>Resolve backend data format through <code>res.reName</code> mapping data</p></li><li><p>Use <code>res.process</code> to optimize data before rendering table</p></li><li><p>Use <code>page.zeroIndexed</code> to adjust the http request when <code>pi</code> parameter follows the <code>0</code> base index, default is <code>1</code> base index</p></li><li><p>Automatically cancel paging when the response body value is an array type</p></li><li><p>Use <code>_HttpClient</code> send request, so applies to <a href="/theme/http#AlainThemeConfig" data-url="/theme/http#AlainThemeConfig">AlainThemeConfig</a> configuration</p></li></ul><h3 id="Static"><a class="lake-link"><i data-anchor="Static"></i></a>Static</h3><p>The value is <code>STData[]</code> or <code>Observable&lt;STData[]></code>, both follow the following rules:</p><ul><li><p><code>page.front</code> Front paging, default is <code>true</code></p><ul><li><p><code>true</code> controlled by <code>st</code> according to <code>data</code> length, including: sorting, filtering, etc.</p></li><li><p><code>false</code> controlled by the user through the <code>total</code> and <code>data</code> parameters, and maintains <code>(change)</code> when the page changes to reload data</p></li></ul></li><li><p>Whether <code>page.show</code> displays pager; if not specified, it will not be displayed automatically if <code>ps>total</code></p></li></ul><h3 id="FAQ"><a class="lake-link"><i data-anchor="FAQ"></i></a>FAQ</h3><p><strong>Cannot read property 'text' of undefined</strong></p><p>If the component has been rendered, this error may appear when <code>columns</code> is changed again. This is because <code>st</code> will only process the data according to <code>columns</code> each time. When the column definition changes, it may be because of the column definition. Unable to match with existing data, you may need to use <code>this.st.resetColumns({ columns: [], emitReload: true })</code> to update the column definition and reload the data.</p><p><strong>Show INVALID DATA</strong></p><p>When an exception is thrown when parsing column data, <em>INVALID DATA</em> will be forced to display. For example, when a column is specified <code>type:'number'</code>, an exception will be thrown when the actual value obtained is not a valid number type.</p></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="st"><a class="lake-link"><i data-anchor="st"></i></a>st</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[columns]</code></td><td>Columns description</td><td><code>STColumn[]</code></td><td>-</td><td>-</td></tr><tr><td><code>[data]</code></td><td>Data source</td><td><code>string, <a data-toc="STData">STData</a>[], Observable<<a data-toc="STData">STData</a>[]></code></td><td>-</td><td>-</td></tr><tr><td><code>[req]</code></td><td>Http request configuration</td><td><code><a data-toc="STReq">STReq</a></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[res]</code></td><td>Http response configuration</td><td><code><a data-toc="STRes">STRes</a></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[pi]</code></td><td>Page index</td><td><code>number</code></td><td><code>1</code></td><td>\u2705</td></tr><tr><td><code>[ps]</code></td><td>Page size, default is <code>10</code></td><td><code>number</code></td><td><code>10</code></td><td>\u2705</td></tr><tr><td><code>[total]</code></td><td>Total data count, should set when nzServerRender is true, default is <code>0</code></td><td><code>number</code></td><td><code>0</code></td><td>-</td></tr><tr><td><code>[page]</code></td><td>Pager configuration</td><td><code><a data-toc="STPage">STPage</a></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[noResult]</code></td><td>Custom no result content</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[bordered]</code></td><td>Whether to show all table borders</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[size]</code></td><td>Size of table</td><td><code>'small','middle','default'</code></td><td><code>'default'</code></td><td>\u2705</td></tr><tr><td><code>[widthMode]</code></td><td>Set the table width mode</td><td><code><a data-toc="STWidthMode">STWidthMode</a></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[rowClassName]</code></td><td>Row class name of table</td><td><code>(record: <a data-toc="STData">STData</a>, index: number) => string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[clickRowClassName]</code></td><td>Row class name of click the row</td><td><code>string, STClickRowClassNameType</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[loading]</code></td><td>Loading status of table, when specifying <code>null</code> is controlled by st</td><td><code>boolean | null</code></td><td><code>null</code></td><td>-</td></tr><tr><td><code>[loadingIndicator]</code></td><td>The spinning indicator</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[loadingDelay]</code></td><td>Specifies a delay in milliseconds for loading state (prevent flush)</td><td><code>number</code></td><td><code>0</code></td><td>\u2705</td></tr><tr><td><code>[scroll]</code></td><td>Whether table can be scrolled in x/y direction, x or y can be a string that indicates the width and height of table body</td><td><code>{ y?: string; x?: string }</code></td><td>-</td><td>-</td></tr><tr><td><code>[virtualScroll]</code></td><td>Enable virtual scroll mode\uFF0Cwork with <code>[nzScroll]</code></td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[virtualItemSize]</code></td><td>The size of the items in the list, same as <a target="_blank" href="https://material.angular.io/cdk/scrolling/api" data-url="https://material.angular.io/cdk/scrolling/api">cdk itemSize</a></td><td><code>number</code></td><td><code>54</code></td><td>\u2705</td></tr><tr><td><code>[virtualMaxBufferPx]</code></td><td>The number of pixels worth of buffer to render for when rendering new items, same as <a target="_blank" href="https://material.angular.io/cdk/scrolling/api" data-url="https://material.angular.io/cdk/scrolling/api">cdk maxBufferPx</a></td><td><code>number</code></td><td><code>200</code></td><td>\u2705</td></tr><tr><td><code>[virtualMinBufferPx]</code></td><td>The minimum amount of buffer rendered beyond the viewport (in pixels),same as <a target="_blank" href="https://material.angular.io/cdk/scrolling/api" data-url="https://material.angular.io/cdk/scrolling/api">cdk minBufferPx</a></td><td><code>number</code></td><td><code>100</code></td><td>\u2705</td></tr><tr><td><code>[virtualForTrackBy]</code></td><td>The TrackByFunction to use for tracking changes.</td><td><code>TrackByFunction&lt;T></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[singleSort]</code></td><td>Single sort config<br>If not specified, return: <code>columnName=ascend|descend</code><br>If specified, return: <code>sort=columnName.(ascend|descend)</code></td><td><code><a data-toc="STSingleSort">STSingleSort</a></code></td><td><code>null</code></td><td>\u2705</td></tr><tr><td><code>[multiSort]</code></td><td>Whether to mulit-sort, recommended use in URL data source</td><td><code>boolean, <a data-toc="STMultiSort">STMultiSort</a></code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[header]</code></td><td>Table header renderer</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[showHeader]</code></td><td>Whether show the head of the columns of the table</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td></tr><tr><td><code>[footer]</code></td><td>Table footer renderer</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[bodyHeader]</code></td><td>Table extra body renderer in header, generally used to add total rows</td><td><code>TemplateRef&lt;STStatisticalResults></code></td><td>-</td><td>-</td></tr><tr><td><code>[body]</code></td><td>Table extra body renderer, generally used to add total rows</td><td><code>TemplateRef&lt;STStatisticalResults></code></td><td>-</td><td>-</td></tr><tr><td><code>[widthConfig]</code></td><td>Set col width can not used with width of STColumn</td><td><code>string[]</code></td><td>-</td><td>-</td></tr><tr><td><code>[expandRowByClick]</code></td><td>Whether to expand row by clicking anywhere in the whole row</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[expandAccordion]</code></td><td>Accordion mode</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[expand]</code></td><td>Whether current column include expand icon</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[responsive]</code></td><td>Whether to turn on responsive</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[responsiveHideHeaderFooter]</code></td><td>Whether to display the header and footer under the small screen</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[resizable]</code></td><td>Resize header of the current table, <strong>Multiple headers not supported</strong></td><td><code><a data-toc="STResizable">STResizable</a>, boolean</code></td><td>-</td><td>-</td></tr><tr><td><code>[trackBy]</code></td><td><code>TrackByFunction</code> function of list loop <code>@for</code></td><td><code>TrackByFunction&lt;T></code></td><td>-</td><td>-</td></tr><tr><td><code>(change)</code></td><td>Events</td><td><code>EventEmitter<<a data-toc="STChange">STChange</a>></code></td><td>-</td><td>-</td></tr><tr><td><code>(error)</code></td><td>Error event</td><td><code>EventEmitter<<a data-toc="STError">STError</a>></code></td><td>-</td><td>-</td></tr></tbody></table><h3 id="Properties&Methods"><a class="lake-link"><i data-anchor="Properties&Methods"></i></a>Properties&Methods</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>[filteredData]</code></td><td>Get all data after filtering & sorting<br>- Local data: including sorting, filtering<br>- Remote data: Don't pass <code>pi</code>, <code>ps</code> parameters in http request</td></tr><tr><td><code>[count]</code></td><td>Get the number of the current page</td></tr><tr><td><code>[list]</code></td><td>Get the data of the current page</td></tr><tr><td><code>resetColumns(options?: STResetColumnsOption)</code></td><td>Reset columns</td></tr><tr><td><code>load(pi = 1, extraParams?: any, options?: STLoadOptions)</code></td><td>Load specified page</td></tr><tr><td><code>reload(extraParams?: any, options?: STLoadOptions)</code></td><td>Refresh current page</td></tr><tr><td><code>reset(extraParams?: any, options?: STLoadOptions)</code></td><td>Reset data and <code>pi</code> to <code>1</code>, including single multi-select, sort, filter status (Covered default state)</td></tr><tr><td><code>addRow(data: <a data-toc="STData">STData</a> | <a data-toc="STData">STData</a>[], options?: { index?: number })</code></td><td>Add a rows in the table</td></tr><tr><td><code>removeRow(data: <a data-toc="STData">STData</a> | <a data-toc="STData">STData</a>[] | number)</code></td><td>Remove a row in the table</td></tr><tr><td><code>setRow(index: number | <a data-toc="STData">STData</a>, item: <a data-toc="STData">STData</a>, options?: { refreshSchema?: boolean; emitReload?: boolean })</code></td><td>Sets the row value for the <code>index</code> in the table</td></tr><tr><td><code>pureItem(itemOrIndex: <a data-toc="STData">STData</a> | number)</code></td><td>Return pure data, <code>st</code> internally maintains a set of data for caching, this part of data may affect the backend</td></tr><tr><td><code>clear(cleanStatus = true)</code></td><td>Clear all data</td></tr><tr><td><code>clearStatus()</code></td><td>Clean all status (like this: single multi-select, sort, filter status)</td></tr><tr><td><code>clearCheck()</code></td><td>Clear all <code>checkbox</code></td></tr><tr><td><code>clearRadio()</code></td><td>Clear all <code>radio</code></td></tr><tr><td><code>export(newData?: <a data-toc="STData">STData</a>[] | true, opt?: <a data-toc="STExportOptions">STExportOptions</a>)</code></td><td>Export Excel and make sure you have \bimported <code>XlsxModule</code></td></tr></tbody></table><p>Some details:</p><ul><li><p><code>extraParams</code> Keep original values when is null</p></li><li><p><code>STLoadOptions.merge</code> merge mode, if <code>true</code> merges with new values instead of replacing</p></li><li><p><code>STLoadOptions.toTop</code> Whether to jump to the top, if not specified, it's determined by <code>page.toTop</code></p></li></ul><p><strong>Usage</strong></p><pre class="hljs language-ts"><code>@Component({
  template: \`
    &lt;st #st&gt;&lt;/st&gt;
    &lt;button (click)="st.load()"&gt;Load&lt;/button&gt;
    &lt;button (click)="st.reset()"&gt;Reset&lt;/button&gt;
  \`
})
class TestComponent {
  @ViewChild('st', { static: false }) comp: STComponent;
  // this.comp.load();
}</code></pre><h3 id="STReq"><a class="lake-link"><i data-anchor="STReq"></i></a>STReq</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>Pagination type, <code>page</code> used <code>pi</code>, <code>ps</code>; <code>skip</code> used <code>skip</code>, <code>limit</code></td><td><code>page,skip</code></td><td><code>page</code></td><td>\u2705</td></tr><tr><td><code>[params]</code></td><td>Request parameters, default to auto append <code>pi</code>, <code>ps</code> to URL</td><td><code>any</code></td><td>-</td><td>-</td></tr><tr><td><code>[ignoreParamNull]</code></td><td>Whether to ignore <code>null</code> or <code>unfind</code> values in parameters</td><td><code>Boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[method]</code></td><td>Request method</td><td><code>'POST','GET','HEAD','PUT','PATCH','DELETE'</code></td><td><code>'GET'</code></td><td>\u2705</td></tr><tr><td><code>[body]</code></td><td>Request body (only method is POST)</td><td><code>any</code></td><td>-</td><td>-</td></tr><tr><td><code>[headers]</code></td><td>Request header</td><td><code>any</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[reName]</code></td><td>Map name <code>pi</code>\u3001<code>ps</code></td><td><code>STReqReNameType, ((result: any, options: { pi: number; ps: number; total: number }) => { total: number; list: T[] })</code></td><td><code>{ pi: 'pi', ps: 'ps', skip: 'skip', limit: 'limit' }</code></td><td>\u2705</td></tr><tr><td><code>[allInBody]</code></td><td>Whether to request all parameter data into <code>body</code> (except <code>url</code> itself parameter)</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[lazyLoad]</code></td><td>Whether to delay loading data in first render <code>st</code> component</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[process]</code></td><td>Pre-request data processing</td><td><code>(requestOptions: STRequestOptions) => STRequestOptions</code></td><td>-</td><td>\u2705</td></tr></tbody></table><h3 id="STRes"><a class="lake-link"><i data-anchor="STRes"></i></a>STRes</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[reName]</code></td><td>Map name <code>total</code>\u3001<code>list</code>, could be set like <code>a.b.c</code></td><td><code>{total:string;list:string}</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[process]</code></td><td>Data preprocessing</td><td><code>(data: <a data-toc="STData">STData</a>[], rawData?: any) => <a data-toc="STData">STData</a>[]</code></td><td>-</td><td>\u2705</td></tr></tbody></table><h3 id="STPage"><a class="lake-link"><i data-anchor="STPage"></i></a>STPage</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[front]</code></td><td>Front paging when <code>data</code> is <code>any[]</code> or <code>Observable&lt;any[]></code></td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[zeroIndexed]</code></td><td>Whether the backend paging uses the <code>0</code> base index (only data is url)</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[position]</code></td><td>Specify the position of Pagination</td><td><code>top,bottom,both</code></td><td><code>bottom</code></td><td>\u2705</td></tr><tr><td><code>[placement]</code></td><td>Specify the direction of Pagination</td><td><code>left,center,right</code></td><td><code>right</code></td><td>\u2705</td></tr><tr><td><code>[show]</code></td><td>Whether to show pager</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[showSize]</code></td><td>Determine whether <code>ps</code> can be changed</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[pageSizes]</code></td><td>Specify the sizeChanger options</td><td><code>number[]</code></td><td><code>[10, 20, 30, 40, 50]</code></td><td>\u2705</td></tr><tr><td><code>[showQuickJumper]</code></td><td>Determine whether you can jump to pages directly</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[total]</code></td><td>To display the total number and range, support custom string template (Three variable names: <code>total</code> for total data, <code>range[0]</code> and <code>range[1]</code> for current data range; <strong>Variable name</strong> must be double curly braces wrapper)</td><td><code>boolean, string</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[toTop]</code></td><td>To top when pager changed</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[toTopOffset]</code></td><td>To top offset value</td><td><code>number</code></td><td><code>100</code></td><td>\u2705</td></tr><tr><td><code>[itemRender]</code></td><td>To customize Pagination item, same as Pagination</td><td><code>TemplateRef&lt;{ $implicit: 'page' \\| 'prev' \\| 'next', page: number }></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[simple]</code></td><td>Whether to use simple mode</td><td><code>boolean</code></td><td>-</td><td>\u2705</td></tr></tbody></table><h3 id="STError"><a class="lake-link"><i data-anchor="STError"></i></a>STError</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>Error type</td><td><code>req</code></td><td>-</td></tr><tr><td><code>[error]</code></td><td>Error message</td><td><code>any</code></td><td>-</td></tr></tbody></table><h3 id="STChange"><a class="lake-link"><i data-anchor="STChange"></i></a>STChange</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>Change type</td><td><code>STChangeType</code></td><td>-</td></tr><tr><td><code>[pi]</code></td><td>Page index</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[ps]</code></td><td>Page size</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[total]</code></td><td>Total data</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[loaded]</code></td><td>Parameters of type <code>loaded</code></td><td><code><a data-toc="STData">STData</a>[]</code></td><td>-</td></tr><tr><td><code>[checkbox]</code></td><td>Parameters of type <code>checkbox</code></td><td><code><a data-toc="STData">STData</a>[]</code></td><td>-</td></tr><tr><td><code>[radio]</code></td><td>Parameters of type <code>radio</code></td><td><code><a data-toc="STData">STData</a></code></td><td>-</td></tr><tr><td><code>[sort]</code></td><td>Parameters of type <code>sort</code></td><td><code><a data-toc="STChangeSort">STChangeSort</a></code></td><td>-</td></tr><tr><td><code>[filter]</code></td><td>Parameters of type <code>filter</code></td><td><code>STColumn</code></td><td>-</td></tr><tr><td><code>[click]</code></td><td>Parameters of type <code>click</code></td><td><code><a data-toc="STChangeRowClick">STChangeRowClick</a></code></td><td>-</td></tr><tr><td><code>[dblClick]</code></td><td>Parameters of type <code>dblClick</code></td><td><code><a data-toc="STChangeRowClick">STChangeRowClick</a></code></td><td>-</td></tr><tr><td><code>[expand]</code></td><td>Parameters of type <code>expand</code></td><td><code><a data-toc="STData">STData</a></code></td><td>-</td></tr></tbody></table><h3 id="STChangeSort"><a class="lake-link"><i data-anchor="STChangeSort"></i></a>STChangeSort</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[value]</code></td><td>Current column sort status</td><td><code>ascend,descend</code></td><td>-</td></tr><tr><td><code>[map]</code></td><td>All column sorting states</td><td><code>{ [key: string]: string }</code></td><td>-</td></tr><tr><td><code>[column]</code></td><td>Column description</td><td><code>STColumn</code></td><td>-</td></tr></tbody></table><h3 id="STChangeRowClick"><a class="lake-link"><i data-anchor="STChangeRowClick"></i></a>STChangeRowClick</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[e]</code></td><td>Current rows event</td><td><code>Event</code></td><td>-</td></tr><tr><td><code>[item]</code></td><td>Current rows data</td><td><code><a data-toc="STData">STData</a></code></td><td>-</td></tr><tr><td><code>[index]</code></td><td>Current rows index</td><td><code>number</code></td><td>-</td></tr></tbody></table><h3 id="STExportOptions"><a class="lake-link"><i data-anchor="STExportOptions"></i></a>STExportOptions</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[sheetname]</code></td><td>Sheet name</td><td><code>string</code></td><td><code>Sheet1</code></td></tr><tr><td><code>[filename]</code></td><td>Save file name</td><td><code>string</code></td><td><code>export.xslx</code></td></tr><tr><td><code>[callback]</code></td><td>Callback before saving</td><td><code>(wb: WorkBook) => void</code></td><td>-</td></tr></tbody></table><h3 id="STSingleSort"><a class="lake-link"><i data-anchor="STSingleSort"></i></a>STSingleSort</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[key]</code></td><td>Request parameter name</td><td><code>string</code></td><td><code>sort</code></td><td>\u2705</td></tr><tr><td><code>[nameSeparator]</code></td><td>Column name and state separator</td><td><code>string</code></td><td><code>.</code></td><td>\u2705</td></tr></tbody></table><h3 id="STMultiSort"><a class="lake-link"><i data-anchor="STMultiSort"></i></a>STMultiSort</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[key]</code></td><td>Request parameter name</td><td><code>string</code></td><td><code>sort</code></td><td>\u2705</td></tr><tr><td><code>[separator]</code></td><td>Separator between attributes</td><td><code>string</code></td><td><code>-</code></td><td>\u2705</td></tr><tr><td><code>[nameSeparator]</code></td><td>Column name and state separator</td><td><code>string</code></td><td><code>.</code></td><td>\u2705</td></tr><tr><td><code>[arrayParam]</code></td><td>Whether to pass parameters as an array<br><code>true</code> Indicates the use of <code>url?sort=name.asc&sort=age.desc</code><br><code>false</code> Indicates the use of <code>url?sort=name.asc-age.desc</code></td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[keepEmptyKey]</code></td><td>Whether to keep send empty key<br><code>true</code> send the <code>key</code> name anyway<br><code>false</code> don't send <code>key</code> when not sorting</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[global]</code></td><td><strong>Only global config</strong>, Whether global multi sort mode<br><code>true</code> all <code>st</code> defaults multi-sort<br><code>false</code> all <code>st</code> non-multiple sorting, just only configurable for rule</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr></tbody></table><h3 id="STData"><a class="lake-link"><i data-anchor="STData"></i></a>STData</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[checked]</code></td><td>Select or radio button <code>checked</code> status value</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[disabled]</code></td><td>Select or radio button <code>disabled</code> status value</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[expand]</code></td><td>Whether to expand the status value</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[showExpand]</code></td><td>Whether show expand icon</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[className]</code></td><td>Class name of the row</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="STColumn<TextendsSTData=any>"><a class="lake-link"><i data-anchor="STColumn<TextendsSTData=any>"></i></a>STColumn<TextendsSTData=any></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>Name of this column</td><td><code>string, <a data-toc="STColumnTitle">STColumnTitle</a></code></td><td>-</td></tr><tr><td><code>[i18n]</code></td><td>I18n key of this column</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[type]</code></td><td><code>no</code> Rows number<br><code>checkbox</code> selection<br><code>radio</code> selection<br><code>link</code> Link that triggers <code>click</code><br><code>img</code> Align to the center<br><code>number</code> Align to the right<br><code>currency</code> Align to the right<br><code>date</code> Align to the center<br><code>badge</code> <a target="_blank" href="https://ng.ant.design/components/badge/en" data-url="https://ng.ant.design/components/badge/en">Nz-Badge</a><br><code>tag</code> <a target="_blank" href="https://ng.ant.design/components/tag/en" data-url="https://ng.ant.design/components/tag/en">Nz-Tag</a><br><code>yn</code> Make boolean as <a href="/theme/yn" data-url="/theme/yn">badge</a><br><code>cell</code> Rendered using the <code>cell</code> component, see <a href="/components/cell" data-url="/components/cell">cell</a><br><code>widget</code> Custom widgets to render columns</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[cell]</code></td><td>Rendered using the <code>cell</code> component, see <a href="/components/cell" data-url="/components/cell">cell</a>.</td><td><code>CellOptions | ((record: T, column: STColumn) => CellOptions)</code></td><td>-</td></tr><tr><td><code>[index]</code></td><td>Display field of the data record, could be set like <code>a.b.c</code></td><td><code>string, string[]</code></td><td>-</td></tr><tr><td><code>[render]</code></td><td>Custom render template ID</td><td><code>string, TemplateRef<void>, TemplateRef<{ $implicit: <a data-toc="STData">STData</a>; index: number }></code></td><td>-</td></tr><tr><td><code>[renderTitle]</code></td><td>Title custom render template ID</td><td><code>string, TemplateRef&lt;void>, TemplateRef<{ $implicit: STColumn; index: number }></code></td><td>-</td></tr><tr><td><code>[default]</code></td><td>Replace with default value when no data exists (value typeof is <code>undefined</code>)</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[buttons]</code></td><td>Buttons of this column</td><td><code><a data-toc="STColumnButton">STColumnButton</a>[]</code></td><td>-</td></tr><tr><td><code>[maxMultipleButton]</code></td><td>Max button option can be showed, and the extra part are auto generated under <code>more</code></td><td><code>STColumnMaxMultipleButton, number</code></td><td>-</td></tr><tr><td><code>[width]</code></td><td>Width of this column (<strong>NOTICE:</strong> If the fixed column must be a number), e.g: <code>100</code>, <code>10%</code>, <code>100px</code></td><td><code>string,number</code></td><td>-</td></tr><tr><td><code>[fixed]</code></td><td>Set column to be fixed, must specify <code>width</code></td><td><code>left,right</code></td><td>-</td></tr><tr><td><code>[format]</code></td><td>Format value of this column</td><td><code>(item: <a data-toc="STData">STData</a>, col: STColumn, index: number) => string</code></td><td>-</td></tr><tr><td><code>[className]</code></td><td>Class name of this column, e.g: <code>text-center</code>, <code>text-right</code>, <code>text-error</code>, pls refer to <a href="/theme/tools" data-url="/theme/tools">Style Tools</a></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[colSpan]</code></td><td>Span of this column's title</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[onCell]</code></td><td>Set props on per cell</td><td><code>(item: T, index: number) => STOnCellResult;</code></td><td>-</td></tr><tr><td><code>[sort]</code></td><td>Sort config of this column, Remote Data Configuration<strong>Priority</strong> Rule: <br><code>true</code> allow sorting, should be auto generate compose <code>compare: (a, b) => a[index] - b[index]</code> method when data is local<br><code>string</code> corresponding <code>key</code> value</td><td><code>true,string,<a data-toc="STColumnSort">STColumnSort</a></code></td><td>-</td></tr><tr><td><code>[filter]</code></td><td>Filter config of this column</td><td><code><a data-toc="STColumnFilter">STColumnFilter</a></code></td><td>-</td></tr><tr><td><code>[selections]</code></td><td>Config of type is checkbox</td><td><code><a data-toc="STColumnSelection">STColumnSelection</a>[]</code></td><td>-</td></tr><tr><td><code>[numberDigits]</code></td><td>Config of type is number</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[dateFormat]</code></td><td>Config of type is date</td><td><code>yyyy-MM-dd HH:mm</code></td><td>-</td></tr><tr><td><code>[currency]</code></td><td>Currency format option, <code>type=currency</code> is valid</td><td><code>STColumnCurrency</code></td><td>-</td></tr><tr><td><code>[yn]</code></td><td>Config of type is yn</td><td><code><a data-toc="STColumnYn">STColumnYn</a></code></td><td>-</td></tr><tr><td><code>[exported]</code></td><td>Whether to allow export</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[acl]</code></td><td>ACL permission (Use <code>can()</code> verify)</td><td><code>ACLCanType</code></td><td>-</td></tr><tr><td><code>[click]</code></td><td>Callback of type is link</td><td><code>(record: <a data-toc="STData">STData</a>, instance?: STComponent) => void</code></td><td>-</td></tr><tr><td><code>[badge]</code></td><td>Config of type is badge</td><td><code><a data-toc="STColumnBadge">STColumnBadge</a></code></td><td>-</td></tr><tr><td><code>[tag]</code></td><td>Config of type is tag</td><td><code><a data-toc="STColumnTag">STColumnTag</a></code></td><td>-</td></tr><tr><td><code>[enum]</code></td><td>Config of type is enum</td><td><code>{ [key: string]: string; [key: number]: string }</code></td><td>-</td></tr><tr><td><code>[widget]</code></td><td>Config of type is widget</td><td><code><a data-toc="STWidgetColumn">STWidgetColumn</a></code></td><td>-</td></tr><tr><td><code>[noIndex]</code></td><td>Line number index start value</td><td><code>number,(item: <a data-toc="STData">STData</a>, col: STColumn, idx: number) => number</code></td><td><code>1</code></td></tr><tr><td><code>[iif]</code></td><td>Custom conditional expression<br>1. Execute only once when <code>columns</code> is assigned<br>2. Call <code>resetColumns()</code> to trigger again</td><td><code>(item: STColumn) => boolean</code></td><td>-</td></tr><tr><td><code>[statistical]</code></td><td>Statistics</td><td><code>STStatisticalType,<a data-toc="STStatistical">STStatistical</a></code></td><td>-</td></tr><tr><td><code>[resizable]</code></td><td>Resize header, <strong>Multiple headers not supported</strong></td><td><code><a data-toc="STResizable">STResizable</a>, boolean</code></td><td>-</td><td>-</td></tr><tr><td><code>[children]</code></td><td>Group columns</td><td><code>STColumn[]</code></td><td>-</td></tr><tr><td><code>[safeType]</code></td><td>Safe rendering type, Support <a href="https://ng-alain.com/docs/global-config" data-url="https://ng-alain.com/docs/global-config">global config</a></td><td><code>text,html,safeHtml</code></td><td><code>safeHtml</code></td></tr><tr><td><code>[customRequest]</code></td><td>Override the default request behavior, you can customize your own request implementation, for example: Graphql, Support <a href="https://ng-alain.com/docs/global-config" data-url="https://ng-alain.com/docs/global-config">global config</a></td><td><code>(options: STCustomRequestOptions) => Observable&lt;any></code></td><td>-</td></tr></tbody></table><h3 id="STColumnTitle"><a class="lake-link"><i data-anchor="STColumnTitle"></i></a>STColumnTitle</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[text]</code></td><td>Text of header, can be choose one of <code>text</code> or <code>i18n</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[i18n]</code></td><td>I18n key of header, can be choose one of <code>text</code> or <code>i18n</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[optional]</code></td><td>Optional information of header</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[optionalHelp]</code></td><td>Optional help of header</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="STColumnSort"><a class="lake-link"><i data-anchor="STColumnSort"></i></a>STColumnSort</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[default]</code></td><td>Default order of sorted values</td><td><code>ascend,descend</code></td><td>-</td></tr><tr><td><code>[compare]</code></td><td>Sort function for local sort, see <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" data-url="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">Array.sort</a>'s compareFunction, <code>null</code> ingore local sort but keeping sort function.</td><td><code>(a: <a data-toc="STData">STData</a>, b: <a data-toc="STData">STData</a>) => number, null</code></td><td>-</td></tr><tr><td><code>[key]</code></td><td>Unique key of this column, default is <code>index</code> property value<br><code>multiSort: false</code> => <code>key: 'name' => ?name=1&pi=1</code><br><code>multiSort: true</code> allow multiple sort keys, or use <code>STMultiSort</code> to specify multi-column sort key merge rule</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[reName]</code></td><td>Map name<br><code>{ ascend: '0', descend: '1' }</code> => <code>?name=1&pi=1</code><br><code>{ ascend: 'asc', descend: 'desc' }</code> => <code>?name=desc&pi=1</code></td><td><code>{ ascend?: string, descend?: string }</code></td><td>-</td></tr></tbody></table><h3 id="STColumnFilter"><a class="lake-link"><i data-anchor="STColumnFilter"></i></a>STColumnFilter</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>Type of the filter, <code>keyword</code> render by input</td><td><code>default,keyword,number,date,custom</code></td><td><code>default</code></td></tr><tr><td><code>[menus]</code></td><td>Filter menu config</td><td><code><a data-toc="STColumnFilterMenu">STColumnFilterMenu</a>[]</code></td><td>-</td></tr><tr><td><code>[fn]</code></td><td>Filter function for local data</td><td><code>(filter: <a data-toc="STColumnFilterMenu">STColumnFilterMenu</a>, record: <a data-toc="STData">STData</a>) => boolean</code></td><td>-</td></tr><tr><td><code>[default]</code></td><td>Whether the <code>data</code> is filtered</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[icon]</code></td><td>Customized filter icon<br>When <code>type='default'</code> default <code>filter</code><br> when <code>type='keyword'</code> default <code>search</code></td><td><code>string | <a data-toc="STIcon">STIcon</a></code></td><td><code>filter</code></td></tr><tr><td><code>[multiple]</code></td><td>Whether multiple filters can be selected</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[confirmText]</code></td><td>Text of the confirm button</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[clearText]</code></td><td>Text of the clear button</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[key]</code></td><td>Unique key of this column, default is <code>index</code> property value</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[reName]</code></td><td>Map name</td><td><code>(list: <a data-toc="STColumnFilterMenu">STColumnFilterMenu</a>[], col: STColumn) => Object</code></td><td>-</td></tr><tr><td><code>[custom]</code></td><td>Custom template</td><td><code>TemplateRef<{ $implicit: <a data-toc="STColumnFilter">STColumnFilter</a>; col: STColumn; handle: STColumnFilterHandle }></code></td><td>-</td></tr><tr><td><code>[showOPArea]</code></td><td>Whether to display the operation area</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[placeholder]</code></td><td>placeholder</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[number]</code></td><td>Option for the type is <code>number</code></td><td><code>Object</code></td><td>-</td></tr><tr><td><code>[date]</code></td><td>Option for the type is <code>date</code></td><td><code>Object</code></td><td>-</td></tr></tbody></table><h3 id="STColumnFilterMenu"><a class="lake-link"><i data-anchor="STColumnFilterMenu"></i></a>STColumnFilterMenu</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[text]</code></td><td>Filter text<br>When <code>type: 'keyword'</code> is <code>placeholder</code> value</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[value]</code></td><td>Filter value</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[checked]</code></td><td>Whether checked</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[acl]</code></td><td>ACL permission (Use <code>can()</code> verify)</td><td><code>ACLCanType</code></td><td>-</td></tr></tbody></table><h3 id="STIcon"><a class="lake-link"><i data-anchor="STIcon"></i></a>STIcon</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>Type of the ant design icon</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>[theme]</code></td><td>Type of the ant design icon</td><td><code>outline | twotone | fill</code></td><td><code>outline</code></td><td>\u2705</td></tr><tr><td><code>[spin]</code></td><td>Rotate icon with animation</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[twoToneColor]</code></td><td>Only support the two-tone icon. Specific the primary color.</td><td><code>string</code></td><td>-</td><td>v</td></tr><tr><td><code>[iconfont]</code></td><td>Type of the icon from iconfont</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr></tbody></table><h3 id="STColumnButton"><a class="lake-link"><i data-anchor="STColumnButton"></i></a>STColumnButton</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[text]</code></td><td>Text of button, coexist with icon</td><td><code>string | (record: T, btn: <a data-toc="STColumnButton">STColumnButton</a>) => string</code></td><td>-</td></tr><tr><td><code>[icon]</code></td><td>Icon of button, coexist with text</td><td><code>string | <a data-toc="STIcon">STIcon</a> | ((record: T, btn: <a data-toc="STColumnButton">STColumnButton</a><T>) => <a data-toc="STIcon">STIcon</a> | null | undefined)</code></td><td>-</td></tr><tr><td><code>[i18n]</code></td><td>I18n key of button</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[type]</code></td><td>Type of button</td><td><code>none,del,modal,static,drawer,link</code></td><td>-</td></tr><tr><td><code>[click]</code></td><td>Click callback; <br><strong>function</strong> when <code>type=modal</code> will only fire when <code>confirmed</code><br><strong>reload</strong> Refresh current page<br><strong>load</strong> load <code>1</code> page</td><td><code>(record: <a data-toc="STData">STData</a>, modal?: any, instance?: STComponent) => void | reload</code></td><td>-</td></tr><tr><td><code>[pop]</code></td><td>Whether to pop confirm</td><td><code>boolean, string, STColumnButtonPop</code></td><td><code>false</code></td></tr><tr><td><code>[modal]</code></td><td>Config of type is modal or static</td><td><code><a data-toc="STColumnButtonModal">STColumnButtonModal</a></code></td><td>-</td></tr><tr><td><code>[drawer]</code></td><td>Config of type is drawer</td><td><code><a data-toc="STColumnButtonDrawer">STColumnButtonDrawer</a></code></td><td>-</td></tr><tr><td><code>[children]</code></td><td>Drop-down menu, only supports level 1</td><td><code><a data-toc="STColumnButton">STColumnButton</a>[]</code></td><td>-</td></tr><tr><td><code>[acl]</code></td><td>ACL permission (Use <code>can()</code> verify)</td><td><code>ACLCanType</code></td><td>-</td></tr><tr><td><code>[iif]</code></td><td>Custom conditional expression</td><td><code>(item: <a data-toc="STData">STData</a>, btn: <a data-toc="STColumnButton">STColumnButton</a>, column: STColumn) => boolean</code></td><td><code>() => true</code></td></tr><tr><td><code>[iifBehavior]</code></td><td>Render button mode when the conditional expression <code>false</code> value</td><td><code>hide,disabled</code></td><td><code>hide</code></td></tr><tr><td><code>[tooltip]</code></td><td>Button popup tip</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[className]</code></td><td>Class name of this button, e.g: <code>text-error</code>, pls refer to <a href="/theme/tools" data-url="/theme/tools">Style Tools</a></td><td><code>string | ((record: T, btn: <a data-toc="STColumnButton">STColumnButton</a><T>) => NgClassType | null | undefined)</code></td><td>-</td></tr></tbody></table><h3 id="STColumnButtonModal"><a class="lake-link"><i data-anchor="STColumnButtonModal"></i></a>STColumnButtonModal</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[component]</code></td><td>Modal component class</td><td><code>any</code></td><td>-</td><td>-</td></tr><tr><td><code>[params]</code></td><td>Dialog parameter</td><td><code>(record: <a data-toc="STData">STData</a>) => Object</code></td><td>-</td><td>-</td></tr><tr><td><code>[paramsName]</code></td><td>Receive parameter name of the target component, If target component receive value is null, pls check <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L52" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L52">global-config.module.ts</a> Global settings</td><td><code>string</code></td><td><code>record</code></td><td>\u2705</td></tr><tr><td><code>[size]</code></td><td>Size of modal, support number type</td><td><code>'sm','md','lg','xl'</code></td><td><code>'lg'</code></td><td>\u2705</td></tr><tr><td><code>[exact]</code></td><td>Exact match return value, default is <code>true</code>, If the return value is not null (<code>null</code> or <code>undefined</code>) is considered successful, otherwise it is considered error.</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[includeTabs]</code></td><td>Whether to wrap the nz-tabset, fix content spacing problem</td><td><code>boolean</code></td><td>-</td><td>-</td></tr><tr><td><code>[modalOptions]</code></td><td>nz-modal raw parameters <a target="_blank" href="https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts" data-url="https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts">ModalOptions</a></td><td><code>any</code></td><td>-</td><td>\u2705</td></tr></tbody></table><h3 id="STColumnButtonDrawer"><a class="lake-link"><i data-anchor="STColumnButtonDrawer"></i></a>STColumnButtonDrawer</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>Title of drawer</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>[component]</code></td><td>Drawer component class</td><td><code>any</code></td><td>-</td><td>-</td></tr><tr><td><code>[params]</code></td><td>Dialog parameter</td><td><code>(record: <a data-toc="STData">STData</a>) => Object</code></td><td>-</td><td>-</td></tr><tr><td><code>[paramsName]</code></td><td>Receive parameter name of the target component, If target component receive value is null, pls check <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L52" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L52">global-config.module.ts</a> Global settings</td><td><code>string</code></td><td><code>record</code></td><td>\u2705</td></tr><tr><td><code>[size]</code></td><td>Size of drawer, support number type</td><td><code>'sm','md','lg','xl'</code></td><td><code>'md'</code></td><td>\u2705</td></tr><tr><td><code>[drawerOptions]</code></td><td>nz-drawer raw parameters <a target="_blank" href="https://ng.ant.design/components/drawer/zh#nzdraweroptions" data-url="https://ng.ant.design/components/drawer/zh#nzdraweroptions">NzDrawerOptions</a></td><td><code>any</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[footer]</code></td><td>Whether to include the bottom toolbar</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[footerHeight]</code></td><td>Height of bottom toolbar</td><td><code>number</code></td><td><code>55</code></td><td>\u2705</td></tr></tbody></table><h3 id="STColumnSelection"><a class="lake-link"><i data-anchor="STColumnSelection"></i></a>STColumnSelection</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[text]</code></td><td>Selection text</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[select]</code></td><td>Select callback event</td><td><code>(data: <a data-toc="STData">STData</a>[]) => void</code></td><td>-</td></tr><tr><td><code>[acl]</code></td><td>ACL permission (Use <code>can()</code> verify)</td><td><code>ACLCanType</code></td><td>-</td></tr></tbody></table><h3 id="STColumnYn"><a class="lake-link"><i data-anchor="STColumnYn"></i></a>STColumnYn</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[truth]</code></td><td>Truth condition value</td><td><code>any</code></td><td><code>true</code></td></tr><tr><td><code>[yes]</code></td><td>Badge <code>true</code> text</td><td><code>string</code></td><td><code>\u662F</code></td></tr><tr><td><code>[no]</code></td><td>Badge <code>false</code> text</td><td><code>string</code></td><td><code>\u5426</code></td></tr><tr><td><code>[mode]</code></td><td>Display mode for yn</td><td><code>full,icon,text</code></td><td><code>icon</code></td></tr></tbody></table><h3 id="STcolumnCurrency"><a class="lake-link"><i data-anchor="STcolumnCurrency"></i></a>STcolumnCurrency</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>Currency rendering type</td><td><code>commas, mega</code></td><td><code>commas</code></td></tr><tr><td><code>[format]</code></td><td>See <a href="https://ng-alain.com/util/format/en#format" data-url="https://ng-alain.com/util/format/en#format">CurrencyService.format</a></td><td><code>CurrencyFormatOptions</code></td><td>-</td></tr></tbody></table><h3 id="STColumnBadge"><a class="lake-link"><i data-anchor="STColumnBadge"></i></a>STColumnBadge</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[text]</code></td><td>Badge text</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>Badge color value</td><td><code>success,processing,default,error,warning</code></td><td>-</td></tr><tr><td><code>[tooltip]</code></td><td>Text popup tip</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="STColumnTag"><a class="lake-link"><i data-anchor="STColumnTag"></i></a>STColumnTag</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[text]</code></td><td>Tag text</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>Tag color value</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[tooltip]</code></td><td>Text popup tip</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="STWidgetColumn"><a class="lake-link"><i data-anchor="STWidgetColumn"></i></a>STWidgetColumn</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>Specify the type name, which can be customized by <code>STWidgetRegistry</code>, <a target="_blank" href="https://github.com/ng-alain/delon/blob/master/src/app/shared/st-widget/st-widget.module.ts" data-url="https://github.com/ng-alain/delon/blob/master/src/app/shared/st-widget/st-widget.module.ts">for example</a></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[params]</code></td><td>Parameters of the target component</td><td><code>(options: { record: <a data-toc="STData">STData</a>; column: STColumn }) => {}</code></td><td>-</td></tr></tbody></table><h3 id="STWidthMode"><a class="lake-link"><i data-anchor="STWidthMode"></i></a>STWidthMode</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>Type of width mode</td><td><code>strict,default</code></td><td><code>default</code></td><td>\u2705</td></tr><tr><td><code>[strictBehavior]</code></td><td>Behavior type of <code>strict</code></td><td><code>wrap,truncate</code></td><td><code>truncate</code></td><td>\u2705</td></tr></tbody></table><h3 id="STStatistical"><a class="lake-link"><i data-anchor="STStatistical"></i></a>STStatistical</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>Statistic type of current column</td><td><code>STStatisticalType | STStatisticalFn</code></td><td>-</td></tr><tr><td><code>[digits]</code></td><td>The number of digits to appear after the decimal point</td><td><code>number</code></td><td><code>2</code></td></tr><tr><td><code>[currency]</code></td><td>Whether formatting currency, default to <code>true</code> when <code>type</code> is <code>STStatisticalFn</code>,<code>sum</code>,<code>average</code>,<code>max</code>,<code>min</code></td><td><code>boolean</code></td><td>-</td></tr></tbody></table><p><strong>STStatisticalFn</strong></p><pre class="hljs language-ts"><code>(
  values: number[],
  col: STColumn,
  list: STData[],
  rawData?: any,
) => STStatisticalResult</code></pre><h3 id="STResizable"><a class="lake-link"><i data-anchor="STResizable"></i></a>STResizable</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[disabled]</code></td><td>Disable resize</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[bounds]</code></td><td>Specifies resize boundaries</td><td><code>window, parent, ElementRef&lt;HTMLElement></code></td><td><code>window</code></td></tr><tr><td><code>[maxWidth]</code></td><td>Maximum width of resizable elemen</td><td><code>number</code></td><td><code>360</code></td></tr><tr><td><code>[minWidth]</code></td><td>Minimum width of resizable element</td><td><code>number</code></td><td><code>60</code></td></tr><tr><td><code>[preview]</code></td><td>Enable preview when resizing</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h2 id="Theme"><a class="lake-link"><i data-anchor="Theme"></i></a>Theme</h2><table><thead><tr><th>Property</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>@nz-table-img-radius</code></td><td>Radius size for the image in td</td><td><code>4px</code></td></tr><tr><td><code>@nz-table-img-margin-right</code></td><td>Margin right for the image in td</td><td><code>4px</code></td></tr><tr><td><code>@nz-table-img-max-height</code></td><td>Max height for the image in td</td><td><code>32px</code></td></tr><tr><td><code>@nz-table-img-max-width</code></td><td>Max width for the image in td</td><td><code>32px</code></td></tr><tr><td><code>@nz-table-even-background</code></td><td>Even background for the row</td><td><code>none</code></td></tr><tr><td><code>@nz-table-rep-max-width</code></td><td>Trigger when the viewable area is less than</td><td><code></code></td></tr><tr><td><code>@nz-table-rep-min-width</code></td><td>Trigger when the visible area is greater than</td><td><code></code></td></tr><tr><td><code>@nz-table-rep-header-background</code></td><td>Header background in responsive</td><td><code>@border-color-split</code></td></tr><tr><td><code>@nz-table-rep-even-background</code></td><td>Event background in responsive</td><td><code>#f9f9f9</code></td></tr><tr><td><code>@nz-table-rep-column-name-color</code></td><td>Name color in responsive</td><td><code>rgba(0, 0, 0, 0.5)</code></td></tr><tr><td><code>@nz-table-rep-column-name-text-align</code></td><td>Name text align in responsive</td><td><code>right</code></td></tr><tr><td><code>@nz-table-rep-column-name-width</code></td><td>Name column width in responsive</td><td><code>100px</code></td></tr><tr><td><code>@nz-table-rep-column-name-padding-right</code></td><td>Right padding of title and content in responsive</td><td><code>8px</code></td></tr><tr><td><code>@table-row-hover-bg</code></td><td>Hover background color of the row</td><td><code>#fafafa</code></td></tr><tr><td><code>@<a data-toc="st">st</a>-btn-disabled-color</code></td><td>Text color of the button</td><td><code>rgba(0, 0, 0, 0.25)</code></td></tr><tr><td><code>@<a data-toc="st">st</a>-title-optional-color</code></td><td>Optional color of title</td><td><code>rgba(0, 0, 0, 0.35)</code></td></tr><tr><td><code>@<a data-toc="st">st</a>-resizable-handle-width</code></td><td>Width of the rasizable handle</td><td><code>1px</code></td></tr><tr><td><code>@<a data-toc="st">st</a>-resizable-handle-height</code></td><td>Height of the rasizable handle</td><td><code>60%</code></td></tr><tr><td><code>@<a data-toc="st">st</a>-resizable-handle-color</code></td><td>Color of the rasizable handle</td><td><code>@border-color-base</code></td></tr></tbody></table>`,meta:{type:"CURD",title:"st",subtitle:"Table",cols:1,order:1,module:"import { STModule } from '@delon/abc/st';"},toc:[{id:"DataSource",title:"Data Source",h:2,children:[{id:"URL",title:"URL",h:3},{id:"Static",title:"Static",h:3},{id:"FAQ",title:"FAQ",h:3}]},{id:"API",title:"API",h:2,children:[{id:"st",title:"st",h:3},{id:"Properties&Methods",title:"Properties & Methods",h:3},{id:"STReq",title:"STReq",h:3},{id:"STRes",title:"STRes",h:3},{id:"STPage",title:"STPage",h:3},{id:"STError",title:"STError",h:3},{id:"STChange",title:"STChange",h:3},{id:"STChangeSort",title:"STChangeSort",h:3},{id:"STChangeRowClick",title:"STChangeRowClick",h:3},{id:"STExportOptions",title:"STExportOptions",h:3},{id:"STSingleSort",title:"STSingleSort",h:3},{id:"STMultiSort",title:"STMultiSort",h:3},{id:"STData",title:"STData",h:3},{id:"STColumn<TextendsSTData=any>",title:"STColumn<T extends STData = any>",h:3},{id:"STColumnTitle",title:"STColumnTitle",h:3},{id:"STColumnSort",title:"STColumnSort",h:3},{id:"STColumnFilter",title:"STColumnFilter",h:3},{id:"STColumnFilterMenu",title:"STColumnFilterMenu",h:3},{id:"STIcon",title:"STIcon",h:3},{id:"STColumnButton",title:"STColumnButton",h:3},{id:"STColumnButtonModal",title:"STColumnButtonModal",h:3},{id:"STColumnButtonDrawer",title:"STColumnButtonDrawer",h:3},{id:"STColumnSelection",title:"STColumnSelection",h:3},{id:"STColumnYn",title:"STColumnYn",h:3},{id:"STcolumnCurrency",title:"STcolumnCurrency",h:3},{id:"STColumnBadge",title:"STColumnBadge",h:3},{id:"STColumnTag",title:"STColumnTag",h:3},{id:"STWidgetColumn",title:"STWidgetColumn",h:3},{id:"STWidthMode",title:"STWidthMode",h:3},{id:"STStatistical",title:"STStatistical",h:3},{id:"STResizable",title:"STResizable",h:3}]},{id:"Theme",title:"Theme",h:2}]},"zh-CN":{content:`<section class="markdown"><p><code><a data-toc="st">st</a></code> \u5E76\u4E0D\u662F\u5728\u521B\u9020\u53E6\u4E00\u4E2A\u8868\u683C\u7EC4\u4EF6\uFF0C\u800C\u662F\u5728 <code>nz-table</code> \u57FA\u7840\u4E0A\u4EE5<strong>\u53EF\u914D\u7F6E</strong>\u5F62\u5F0F\u6E32\u67D3\u8868\u683C\uFF0C\u5728\u4E2D\u540E\u53F0\u91CC\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u6EE1\u8DB3\u7EDD\u5927\u591A\u6570\u573A\u666F\uFF0C\u4F46\u53C8\u53EF\u4EE5\u66F4\u6613\u5730\u7BA1\u7406\u8868\u683C\u6E32\u67D3\u52A8\u4F5C\u3002</p><h2 id="\u5173\u4E8E\u6570\u636E\u6E90"><a class="lake-link"><i data-anchor="\u5173\u4E8E\u6570\u636E\u6E90"></i></a>\u5173\u4E8E\u6570\u636E\u6E90</h2><p><code>data</code> \u652F\u6301\u4E09\u79CD\u4E0D\u540C\u683C\u5F0F\u6570\u636E\u6E90\uFF0C\u6574\u4F53\u5206\u4E3A\uFF1AURL\u548C\u9759\u6001\u6570\u636E\u4E24\u7C7B\uFF1B\u4F46\u53EF\u4EE5\u900F\u8FC7\u53C2\u6570\u7684\u914D\u7F6E\u8FBE\u5230\u4E0D\u540C\u7684\u6548\u679C\uFF0C\u540C\u65F6\u6709\u975E\u5E38\u591A\u53C2\u6570\u53EF\u901A\u8FC7 <code>AlainSTConfig</code> \u91CD\u7F6E\u9ED8\u8BA4\u503C\uFF0C\u4F7F\u6574\u4E2A <code>st</code> \u7EC4\u4EF6\u6A21\u677F\u8FBE\u5230\u6781\u7B80\u3002</p><h3 id="URL"><a class="lake-link"><i data-anchor="URL"></i></a>URL</h3><p>\u6307\u7684\u662F\u901A\u8FC7\u4E00\u4E2A URL \u5B57\u7B26\u4E32\u6765\u83B7\u53D6\u6570\u636E\u3002</p><ul><li><p>\u901A\u8FC7 <code>req.params</code>\u3001<code>req.method</code> \u7B49\u53C2\u6570\u89E3\u51B3\u8BF7\u6C42\u6570\u636E\u683C\u5F0F\u95EE\u9898</p></li><li><p>\u901A\u8FC7 <code>res.reName</code> \u91CD\u7F6E\u6570\u636E <code>key</code> \u800C\u65E0\u987B\u62C5\u5FC3\u540E\u7AEF\u6570\u636E\u683C\u5F0F\u662F\u5426\u6EE1\u8DB3 <code>st</code> \u9700\u6C42</p></li><li><p>\u901A\u8FC7 <code>res.process</code> \u53EF\u4EE5\u5BF9\u8868\u683C\u6E32\u67D3\u524D\u5BF9\u6570\u636E\u8FDB\u4E00\u6B65\u4F18\u5316</p></li><li><p>\u901A\u8FC7 <code>page.zeroIndexed</code> \u53EF\u4EE5\u8C03\u6574 http \u8BF7\u6C42\u65F6 <code>pi</code> \u53C2\u6570\u662F\u5426\u9075\u5FAA 0 \u57FA\u7D22\u5F15\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E3A 1 \u57FA\u7D22\u5F15</p></li><li><p>\u82E5\u8FD4\u56DE\u4F53\u7684\u503C\u662F\u6570\u7EC4\u7C7B\u578B\uFF0C\u5219\u5F3A\u5236\u4E0D\u5206\u9875</p></li><li><p>\u4F7F\u7528 <code>_HttpClient</code> \u53D1\u8D77\u8BF7\u6C42\uFF0C\u56E0\u6B64\u6EE1\u8DB3 <a href="/theme/http#AlainThemeConfig" data-url="/theme/http#AlainThemeConfig">AlainThemeConfig</a> \u7684\u914D\u7F6E\u4E5F\u9002\u7528</p></li></ul><h3 id="\u9759\u6001\u6570\u636E"><a class="lake-link"><i data-anchor="\u9759\u6001\u6570\u636E"></i></a>\u9759\u6001\u6570\u636E</h3><p>\u6307\u7684\u662F\u901A\u8FC7\u6307\u5B9A\u503C\u4E3A <code>STData[]</code> \u6216 <code>Observable&lt;STData[]></code>\uFF0C\u4E8C\u8005\u90FD\u9075\u5FAA\u4EE5\u4E0B\u89C4\u5219\uFF1A</p><ul><li><p><code>page.front</code> \u524D\u7AEF\u5206\u9875\uFF0C\u9ED8\u8BA4\uFF1A<code>true</code></p><ul><li><p><code>true</code> \u7531 <code>st</code> \u6839\u636E <code>data</code> \u957F\u5EA6\u53D7\u63A7\u5206\u9875\uFF0C\u5305\u62EC\uFF1A\u6392\u5E8F\u3001\u8FC7\u6EE4\u7B49</p></li><li><p><code>false</code> \u7531\u7528\u6237\u901A\u8FC7 <code>total</code> \u548C <code>data</code> \u53C2\u6570\u53D7\u63A7\u5206\u9875\uFF0C\u5E76\u7EF4\u62A4 <code>(change)</code> \u5F53\u5206\u9875\u53D8\u66F4\u65F6\u91CD\u65B0\u52A0\u8F7D\u6570\u636E</p></li></ul></li><li><p><code>page.show</code> \u662F\u5426\u663E\u793A\u5206\u9875\u5668\uFF1B\u5F53\u672A\u6307\u5B9A\u65F6\u82E5 <code>ps>total</code> \u60C5\u51B5\u4E0B\u81EA\u52A8\u4E0D\u663E\u793A</p></li></ul><h3 id="\u5E38\u89C1\u95EE\u9898"><a class="lake-link"><i data-anchor="\u5E38\u89C1\u95EE\u9898"></i></a>\u5E38\u89C1\u95EE\u9898</h3><p><strong>Cannot read property 'text' of undefined</strong></p><p>\u82E5\u7EC4\u4EF6\u5DF2\u7ECF\u52A0\u8F7D\u5B8C\u6BD5\uFF0C\u6B64\u65F6\u5982\u679C\u518D\u6B21\u6539\u53D8 <code>columns</code> \u65F6\u53EF\u80FD\u4F1A\u51FA\u73B0\u8BE5\u9519\u8BEF\uFF0C\u8FD9\u662F\u56E0\u4E3A <code>st</code> \u6BCF\u6B21\u53EA\u4F1A\u6839\u636E <code>columns</code> \u5BF9\u6570\u636E\u5904\u7406\uFF0C\u5F53\u5217\u5B9A\u4E49\u53D1\u751F\u6539\u53D8\u540E\u53EF\u80FD\u4F1A\u56E0\u4E3A\u5217\u5B9A\u4E49\u4E0E\u73B0\u6709\u6570\u636E\u65E0\u6CD5\u914D\u5BF9\uFF0C\u53EF\u80FD\u9700\u8981\u4F7F\u7528 <code>this.st.resetColumns({ columns: [], emitReload: true })</code> \u6765\u66F4\u65B0\u5217\u5B9A\u4E49\u5E76\u91CD\u65B0\u52A0\u8F7D\u6570\u636E\u3002</p><p><strong>\u67D0\u5217\u663E\u793AINVALID DATA</strong></p><p>\u5F53\u5728\u89E3\u6790\u5217\u6570\u636E\u65F6\u629B\u51FA\u5F02\u5E38\u65F6\uFF0C\u4F1A\u5F3A\u5236\u663E\u793A <em>INVALID DATA</em>\uFF0C\u4F8B\u5982\u5F53\u67D0\u6307\u5B9A <code>type: 'number'</code> \u65F6\uFF0C\u800C\u5B9E\u9645\u83B7\u5F97\u503C\u4E3A\u975E\u6709\u6548\u6570\u5B57\u578B\u65F6\u5C31\u4F1A\u629B\u51FA\u5F02\u5E38\u3002</p></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="st"><a class="lake-link"><i data-anchor="st"></i></a>st</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[columns]</code></td><td>\u5217\u63CF\u8FF0</td><td><code>STColumn[]</code></td><td>-</td><td>-</td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E\u6E90</td><td><code>string, <a data-toc="STData">STData</a>[], Observable<<a data-toc="STData">STData</a>[]></code></td><td>-</td><td>-</td></tr><tr><td><code>[req]</code></td><td>\u8BF7\u6C42\u4F53\u914D\u7F6E</td><td><code><a data-toc="STReq">STReq</a></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[res]</code></td><td>\u8FD4\u56DE\u4F53\u914D\u7F6E</td><td><code><a data-toc="STRes">STRes</a></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[pi]</code></td><td>\u5F53\u524D\u9875\u7801</td><td><code>number</code></td><td><code>1</code></td><td>\u2705</td></tr><tr><td><code>[ps]</code></td><td>\u6BCF\u9875\u6570\u91CF\uFF0C\u9ED8\u8BA4\uFF1A<code>10</code></td><td><code>number</code></td><td><code>10</code></td><td>\u2705</td></tr><tr><td><code>[total]</code></td><td>\u5F53\u524D\u603B\u6570\u636E\uFF0C\u5728\u670D\u52A1\u5668\u6E32\u67D3\u65F6\u9700\u8981\u4F20\u5165\uFF0C\u9ED8\u8BA4\uFF1A<code>0</code></td><td><code>number</code></td><td><code>0</code></td><td>-</td></tr><tr><td><code>[page]</code></td><td>\u5206\u9875\u5668\u914D\u7F6E</td><td><code><a data-toc="STPage">STPage</a></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[noResult]</code></td><td>\u65E0\u6570\u636E\u65F6\u663E\u793A\u5185\u5BB9</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[bordered]</code></td><td>\u662F\u5426\u663E\u793A\u8FB9\u6846</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[size]</code></td><td>table\u5927\u5C0F</td><td><code>'small','middle','default'</code></td><td><code>'default'</code></td><td>\u2705</td></tr><tr><td><code>[widthMode]</code></td><td>\u8BBE\u7F6E\u8868\u683C\u5BBD\u5EA6\u6A21\u5F0F</td><td><code><a data-toc="STWidthMode">STWidthMode</a></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[rowClassName]</code></td><td>\u8868\u683C\u884C\u7684\u7C7B\u540D</td><td><code>(record: <a data-toc="STData">STData</a>, index: number) => string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[clickRowClassName]</code></td><td>\u70B9\u51FB\u884C\u5207\u6362\u7C7B\u540D</td><td><code>string, STClickRowClassNameType</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[loading]</code></td><td>\u9875\u9762\u662F\u5426\u52A0\u8F7D\u4E2D\uFF0C\u5F53\u6307\u5B9A <code>null</code> \u7531 st \u53D7\u63A7</td><td><code>boolean | null</code></td><td><code>null</code></td><td>-</td></tr><tr><td><code>[loadingIndicator]</code></td><td>\u52A0\u8F7D\u6307\u793A\u7B26</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[loadingDelay]</code></td><td>\u5EF6\u8FDF\u663E\u793A\u52A0\u8F7D\u6548\u679C\u7684\u65F6\u95F4\uFF08\u9632\u6B62\u95EA\u70C1\uFF09</td><td><code>number</code></td><td><code>0</code></td><td>\u2705</td></tr><tr><td><code>[scroll]</code></td><td>\u6A2A\u5411\u6216\u7EB5\u5411\u652F\u6301\u6EDA\u52A8\uFF0C\u4E5F\u53EF\u7528\u4E8E\u6307\u5B9A\u6EDA\u52A8\u533A\u57DF\u7684\u5BBD\u9AD8\u5EA6\uFF1A<code>{ x: "300px", y: "300px" }</code></td><td><code>{ y?: string; x?: string }</code></td><td>-</td><td>-</td></tr><tr><td><code>[virtualScroll]</code></td><td>\u662F\u5426\u542F\u7528\u865A\u62DF\u6EDA\u52A8\u6A21\u5F0F\uFF0C\u4E0E <code>[nzScroll]</code> \u914D\u5408\u4F7F\u7528</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[virtualItemSize]</code></td><td>\u865A\u62DF\u6EDA\u52A8\u65F6\u6BCF\u4E00\u5217\u7684\u9AD8\u5EA6\uFF0C\u4E0E <a target="_blank" href="https://material.angular.io/cdk/scrolling/api" data-url="https://material.angular.io/cdk/scrolling/api">cdk itemSize</a> \u76F8\u540C</td><td><code>number</code></td><td><code>54</code></td><td>\u2705</td></tr><tr><td><code>[virtualMaxBufferPx]</code></td><td>\u7F13\u51B2\u533A\u6700\u5927\u50CF\u7D20\u9AD8\u5EA6\uFF0C\u4E0E <a target="_blank" href="https://material.angular.io/cdk/scrolling/api" data-url="https://material.angular.io/cdk/scrolling/api">cdk maxBufferPx</a> \u76F8\u540C</td><td><code>number</code></td><td><code>200</code></td><td>\u2705</td></tr><tr><td><code>[virtualMinBufferPx]</code></td><td>\u7F13\u51B2\u533A\u6700\u5C0F\u50CF\u7D20\u9AD8\u5EA6\uFF0C\u4F4E\u4E8E\u8BE5\u503C\u65F6\u5C06\u52A0\u8F7D\u65B0\u7ED3\u6784\uFF0C\u4E0E <a target="_blank" href="https://material.angular.io/cdk/scrolling/api" data-url="https://material.angular.io/cdk/scrolling/api">cdk minBufferPx</a> \u76F8\u540C</td><td><code>number</code></td><td><code>100</code></td><td>\u2705</td></tr><tr><td><code>[virtualForTrackBy]</code></td><td>\u865A\u62DF\u6EDA\u52A8\u6570\u636E <code>TrackByFunction</code> \u51FD\u6570</td><td><code>TrackByFunction&lt;T></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[singleSort]</code></td><td>\u5355\u6392\u5E8F\u89C4\u5219<br>\u82E5\u4E0D\u6307\u5B9A\uFF0C\u5219\u8FD4\u56DE\uFF1A<code>columnName=ascend|descend</code><br>\u82E5\u6307\u5B9A\uFF0C\u5219\u8FD4\u56DE\uFF1A<code>sort=columnName.(ascend|descend)</code></td><td><code><a data-toc="STSingleSort">STSingleSort</a></code></td><td><code>null</code></td><td>\u2705</td></tr><tr><td><code>[multiSort]</code></td><td>\u662F\u5426\u591A\u6392\u5E8F\uFF0C\u5F53 <code>sort</code> \u591A\u4E2A\u76F8\u540C\u503C\u65F6\u81EA\u52A8\u5408\u5E76\uFF0C\u5EFA\u8BAE\u540E\u7AEF\u652F\u6301\u65F6\u4F7F\u7528</td><td><code>boolean, <a data-toc="STMultiSort">STMultiSort</a></code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[header]</code></td><td>\u8868\u683C\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[showHeader]</code></td><td>\u662F\u5426\u663E\u793A\u5217\u5934\u884C</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td></tr><tr><td><code>[footer]</code></td><td>\u8868\u683C\u5E95\u90E8</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[bodyHeader]</code></td><td>\u8868\u683C\u9876\u90E8\u989D\u5916\u5185\u5BB9\uFF0C\u4E00\u822C\u7528\u4E8E\u6DFB\u52A0\u5408\u8BA1\u884C</td><td><code>TemplateRef&lt;STStatisticalResults></code></td><td>-</td><td>-</td></tr><tr><td><code>[body]</code></td><td>\u8868\u683C\u989D\u5916\u5185\u5BB9\uFF0C\u4E00\u822C\u7528\u4E8E\u6DFB\u52A0\u5408\u8BA1\u884C</td><td><code>TemplateRef&lt;STStatisticalResults></code></td><td>-</td><td>-</td></tr><tr><td><code>[widthConfig]</code></td><td>\u8868\u5934\u5206\u7EC4\u65F6\u6307\u5B9A\u6BCF\u5217\u5BBD\u5EA6\uFF0C\u4E0E STColumn \u7684 width \u4E0D\u53EF\u6DF7\u7528</td><td><code>string[]</code></td><td>-</td><td>-</td></tr><tr><td><code>[expandRowByClick]</code></td><td>\u901A\u8FC7\u70B9\u51FB\u884C\u6765\u5C55\u5F00\u5B50\u884C</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[expandAccordion]</code></td><td>\u624B\u98CE\u7434\u6A21\u5F0F</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[expand]</code></td><td>\u5F53\u524D\u5217\u662F\u5426\u5305\u542B\u5C55\u5F00\u6309\u94AE\uFF0C\u5F53\u6570\u636E\u6E90\u4E2D\u5305\u62EC <code>expand</code> \u8868\u793A\u5C55\u5F00\u72B6\u6001</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[responsive]</code></td><td>\u662F\u5426\u5F00\u542F\u54CD\u5E94\u5F0F</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[responsiveHideHeaderFooter]</code></td><td>\u662F\u5426\u5728\u5C0F\u5C4F\u5E55\u4E0B\u624D\u663E\u793A\u9876\u90E8\u4E0E\u5E95\u90E8</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[resizable]</code></td><td>\u5F53\u524D\u8868\u683C\u6240\u6709\u5217\u7684\u8C03\u6574\u8868\u5934\u914D\u7F6E\u9879\uFF0C<strong>\u4E0D\u652F\u6301\u591A\u8868\u5934</strong></td><td><code><a data-toc="STResizable">STResizable</a>, boolean</code></td><td>-</td><td>-</td></tr><tr><td><code>[trackBy]</code></td><td><code>@for</code> \u5217\u8868\u5FAA\u73AF\u7684 <code>TrackByFunction</code> \u51FD\u6570</td><td><code>TrackByFunction&lt;T></code></td><td>-</td><td>-</td></tr><tr><td><code>(change)</code></td><td>\u53D8\u5316\u65F6\u56DE\u8C03\uFF0C\u5305\u62EC\uFF1A<code>pi</code>\u3001<code>ps</code>\u3001<code>checkbox</code>\u3001<code>radio</code>\u3001<code>sort</code>\u3001<code>filter</code>\u3001<code>click</code>\u3001<code>dblClick</code>\u3001<code>expand</code> \u53D8\u52A8</td><td><code>EventEmitter<<a data-toc="STChange">STChange</a>></code></td><td>-</td><td>-</td></tr><tr><td><code>(error)</code></td><td>\u5F02\u5E38\u65F6\u56DE\u8C03</td><td><code>EventEmitter<<a data-toc="STError">STError</a>></code></td><td>-</td><td>-</td></tr></tbody></table><h3 id="\u7EC4\u4EF6\u5C5E\u6027\u4E0E\u65B9\u6CD5"><a class="lake-link"><i data-anchor="\u7EC4\u4EF6\u5C5E\u6027\u4E0E\u65B9\u6CD5"></i></a>\u7EC4\u4EF6\u5C5E\u6027\u4E0E\u65B9\u6CD5</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>[filteredData]</code></td><td>\u83B7\u53D6\u8FC7\u6EE4\u540E\u6240\u6709\u6570\u636E<br>- \u672C\u5730\u6570\u636E\uFF1A\u5305\u542B\u6392\u5E8F\u3001\u8FC7\u6EE4\u540E\u4E0D\u5206\u9875\u6570\u636E<br>- \u8FDC\u7A0B\u6570\u636E\uFF1A\u4E0D\u4F20\u9012 <code>pi</code>\u3001<code>ps</code> \u4E24\u4E2A\u53C2\u6570</td></tr><tr><td><code>[count]</code></td><td>\u83B7\u53D6\u5F53\u524D\u9875\u7684\u6761\u76EE\u6570</td></tr><tr><td><code>[list]</code></td><td>\u83B7\u53D6\u5F53\u524D\u9875\u7684\u6570\u636E\u5217\u8868</td></tr><tr><td><code>resetColumns(options?: STResetColumnsOption)</code></td><td>\u91CD\u7F6E\u5217\u63CF\u8FF0</td></tr><tr><td><code>load(pi = 1, extraParams?: any, options?: STLoadOptions)</code></td><td>\u52A0\u8F7D\u6307\u5B9A\u9875</td></tr><tr><td><code>reload(extraParams?: any, options?: STLoadOptions)</code></td><td>\u5237\u65B0\u5F53\u524D\u9875</td></tr><tr><td><code>reset(extraParams?: any, options?: STLoadOptions)</code></td><td>\u91CD\u7F6E\u4E14\u91CD\u65B0\u8BBE\u7F6E <code>pi</code> \u4E3A <code>1</code>\uFF0C\u5305\u542B\u5355\u591A\u9009\u3001\u6392\u5E8F\u3001\u8FC7\u6EE4\u72B6\u6001\uFF08\u540C\u9ED8\u8BA4\u72B6\u6001\u4E00\u5E76\u6E05\u9664\uFF09</td></tr><tr><td><code>addRow(data: <a data-toc="STData">STData</a> | <a data-toc="STData">STData</a>[], options?: { index?: number })</code></td><td>\u6DFB\u52A0\u884C</td></tr><tr><td><code>removeRow(data: <a data-toc="STData">STData</a> | <a data-toc="STData">STData</a>[] | number)</code></td><td>\u79FB\u9664\u884C</td></tr><tr><td><code>setRow(index: number | <a data-toc="STData">STData</a>, item: <a data-toc="STData">STData</a>, options?: { refreshSchema?: boolean; emitReload?: boolean })</code></td><td>\u4FEE\u6539\u884C\u6570\u636E\uFF0C\u652F\u6301\u90E8\u5206\u5B57\u6BB5\u66F4\u65B0</td></tr><tr><td><code>pureItem(itemOrIndex: <a data-toc="STData">STData</a> | number)</code></td><td>\u8FD4\u56DE\u7EAF\u51C0\u6570\u636E\uFF0C<code>st</code> \u5185\u90E8\u4F1A\u7EF4\u62A4\u4E00\u7EC4\u7528\u4E8E\u7F13\u5B58\u7684\u6570\u636E\uFF0C\u8FD9\u90E8\u5206\u6570\u636E\u53EF\u80FD\u4F1A\u5F71\u54CD\u540E\u7AEF</td></tr><tr><td><code>clear(cleanStatus = true)</code></td><td>\u6E05\u7A7A\u6240\u6709\u6570\u636E</td></tr><tr><td><code>clearStatus()</code></td><td>\u6E05\u7A7A\u6240\u6709\u72B6\u6001\uFF08\u5305\u542B\u5355\u591A\u9009\u3001\u6392\u5E8F\u3001\u8FC7\u6EE4\u72B6\u6001\uFF09</td></tr><tr><td><code>clearCheck()</code></td><td>\u6E05\u9664\u6240\u6709 <code>checkbox</code></td></tr><tr><td><code>clearRadio()</code></td><td>\u6E05\u9664\u6240\u6709 <code>radio</code></td></tr><tr><td><code>export(newData?: <a data-toc="STData">STData</a>[] | true, opt?: <a data-toc="STExportOptions">STExportOptions</a>)</code></td><td>\u5BFC\u51FAExcel\uFF0C\u786E\u4FDD\u5DF2\u7ECF\u5BFC\u5165 <code>XlsxModule</code></td></tr></tbody></table><p>\u4E00\u4E9B\u7EC6\u8282\uFF1A</p><ul><li><p><code>extraParams</code> \u82E5\u4E0D\u4F20\u9012\u8868\u793A\u4FDD\u7559\u539F\u59CB\u503C</p></li><li><p><code>STLoadOptions.merge</code> \u662F\u5426\u5408\u5E76\u6A21\u5F0F\uFF0C\u5373 <code>extraParams</code> \u8DDF\u65B0\u503C\u5408\u5E76\u800C\u975E\u66FF\u4EE3</p></li><li><p><code>STLoadOptions.toTop</code> \u662F\u5426\u8DF3\u8F6C\u81F3\u9876\u90E8\uFF0C\u82E5\u4E0D\u6307\u5B9A\u7531 <code>page.toTop</code> \u6765\u51B3\u5B9A</p></li></ul><p><strong>\u4F7F\u7528\u65B9\u5F0F</strong></p><pre class="hljs language-ts"><code>@Component({
  template: \`
    &lt;st #st&gt;&lt;/st&gt;
    &lt;button (click)="st.load()"&gt;&lt;/button&gt;
    &lt;button (click)="st.reset()"&gt;\u91CD\u7F6E&lt;/button&gt;
  \`
})
class TestComponent {
  @ViewChild('st', { static: false }) comp: STComponent;
  // this.comp.load();
}</code></pre><h3 id="STReq"><a class="lake-link"><i data-anchor="STReq"></i></a>STReq</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>\u5206\u9875\u7C7B\u578B\uFF0C<code>page</code> \u4F7F\u7528 <code>pi</code>\uFF0C<code>ps</code> \u7EC4\u5408\uFF1B<code>skip</code> \u4F7F\u7528 <code>skip</code>\uFF0C<code>limit</code> \u7EC4\u5408</td><td><code>page,skip</code></td><td><code>page</code></td><td>\u2705</td></tr><tr><td><code>[params]</code></td><td>\u989D\u5916\u8BF7\u6C42\u53C2\u6570\uFF0C\u9ED8\u8BA4\u81EA\u52A8\u9644\u52A0 <code>pi</code>\u3001<code>ps</code> \u81F3URL</td><td><code>any</code></td><td>-</td><td>-</td></tr><tr><td><code>[ignoreParamNull]</code></td><td>\u662F\u5426\u5FFD\u7565\u53C2\u6570\u4E2D <code>null</code> \u6216 <code>undefind</code> \u503C</td><td><code>Boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[method]</code></td><td>\u8BF7\u6C42\u65B9\u6CD5</td><td><code>'POST','GET','HEAD','PUT','PATCH','DELETE'</code></td><td><code>'GET'</code></td><td>\u2705</td></tr><tr><td><code>[body]</code></td><td>\u8BF7\u6C42\u4F53 <code>body</code>\uFF0C\u5F53 <code>method: POST</code> \u65F6\u6709\u6548</td><td><code>any</code></td><td>-</td><td>-</td></tr><tr><td><code>[headers]</code></td><td>\u8BF7\u6C42\u4F53 <code>headers</code></td><td><code>any</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[reName]</code></td><td>\u91CD\u547D\u540D\u8BF7\u6C42\u53C2\u6570 <code>pi</code>\u3001<code>ps</code></td><td><code>STReqReNameType, ((result: any, options: { pi: number; ps: number; total: number }) => { total: number; list: T[] })</code></td><td><code>{ pi: 'pi', ps: 'ps', skip: 'skip', limit: 'limit' }</code></td><td>\u2705</td></tr><tr><td><code>[allInBody]</code></td><td>\u662F\u5426\u5C06\u8BF7\u6C42\u6240\u6709\u53C2\u6570\u6570\u636E\u90FD\u653E\u5165 <code>body</code> \u5F53\u4E2D\uFF08<code>url</code> \u5730\u5740\u672C\u8EAB\u53C2\u6570\u9664\u5916\uFF09\uFF0C\u4EC5\u5F53 <code>method: 'POST'</code> \u65F6\u6709\u6548</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[lazyLoad]</code></td><td>\u662F\u5426\u5EF6\u8FDF\u52A0\u8F7D\u6570\u636E\uFF0C\u5373\u6E32\u67D3\u7ED3\u675F\u540E\u4E0D\u4F1A\u4E3B\u52A8\u53D1\u8D77\u8BF7\u6C42</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[process]</code></td><td>\u8BF7\u6C42\u524D\u6570\u636E\u5904\u7406</td><td><code>(requestOptions: STRequestOptions) => STRequestOptions</code></td><td>-</td><td>\u2705</td></tr></tbody></table><h3 id="STRes"><a class="lake-link"><i data-anchor="STRes"></i></a>STRes</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[reName]</code></td><td>\u91CD\u547D\u540D\u8FD4\u56DE\u53C2\u6570 <code>total</code>\u3001<code>list</code>\uFF0C\u652F\u6301 <code>a.b.c</code> \u7684\u5D4C\u5957\u5199\u6CD5</td><td><code>{total:string;list:string}</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[process]</code></td><td>\u6570\u636E\u9884\u5904\u7406</td><td><code>(data: <a data-toc="STData">STData</a>[], rawData?: any) => <a data-toc="STData">STData</a>[]</code></td><td>-</td><td>\u2705</td></tr></tbody></table><h3 id="STPage"><a class="lake-link"><i data-anchor="STPage"></i></a>STPage</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[front]</code></td><td>\u524D\u7AEF\u5206\u9875\uFF0C\u5F53 <code>data</code> \u4E3A <code>any[]</code> \u6216 <code>Observable&lt;any[]></code> \u6709\u6548</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[zeroIndexed]</code></td><td>\u540E\u7AEF\u5206\u9875\u662F\u5426\u91C7\u7528<code>0</code>\u57FA\u7D22\u5F15\uFF0C\u53EA\u5728<code>data</code>\u7C7B\u578B\u4E3A<code>string</code>\u65F6\u6709\u6548</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[position]</code></td><td>\u6307\u5B9A\u5206\u9875\u663E\u793A\u7684\u4F4D\u7F6E</td><td><code>top,bottom,both</code></td><td><code>bottom</code></td><td>\u2705</td></tr><tr><td><code>[placement]</code></td><td>\u6307\u5B9A\u5206\u9875\u5206\u9875\u65B9\u5411</td><td><code>left,center,right</code></td><td><code>right</code></td><td>\u2705</td></tr><tr><td><code>[show]</code></td><td>\u662F\u5426\u663E\u793A\u5206\u9875\u5668</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[showSize]</code></td><td>\u662F\u5426\u663E\u793A\u5206\u9875\u5668\u4E2D\u6539\u53D8\u9875\u6570</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[pageSizes]</code></td><td>\u5206\u9875\u5668\u4E2D\u6BCF\u9875\u663E\u793A\u6761\u76EE\u6570\u4E0B\u62C9\u6846\u503C</td><td><code>number[]</code></td><td><code>[10, 20, 30, 40, 50]</code></td><td>\u2705</td></tr><tr><td><code>[showQuickJumper]</code></td><td>\u662F\u5426\u663E\u793A\u5206\u9875\u5668\u4E2D\u5FEB\u901F\u8DF3\u8F6C</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[total]</code></td><td>\u662F\u5426\u663E\u793A\u603B\u6570\u636E\u91CF\uFF0C\u5B57\u7B26\u4E32\u8868\u793A\u81EA\u5B9A\u4E49\u6A21\u677F\uFF08\u652F\u6301\u4E09\u4E2A\u53D8\u91CF\u540D\uFF1A<code>total</code> \u8868\u793A\u6570\u636E\u603B\u91CF\u3001<code>range[0]</code> \u548C <code>range[1]</code> \u8868\u793A\u5F53\u524D\u6570\u636E\u8303\u56F4\uFF1B<strong>\u53D8\u91CF\u540D</strong>\u7EDF\u4E00\u4F7F\u7528\u53CC\u82B1\u62EC\u53F7\u5305\u88F9\uFF09</td><td><code>boolean, string</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[toTop]</code></td><td>\u5207\u6362\u5206\u9875\u65F6\u8FD4\u56DE\u9876\u90E8</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[toTopOffset]</code></td><td>\u8FD4\u56DE\u9876\u90E8\u504F\u79FB\u503C</td><td><code>number</code></td><td><code>100</code></td><td>\u2705</td></tr><tr><td><code>[itemRender]</code></td><td>\u7528\u4E8E\u81EA\u5B9A\u4E49\u9875\u7801\u7684\u7ED3\u6784\uFF0C\u7528\u6CD5\u53C2\u7167 Pagination \u7EC4\u4EF6</td><td><code>TemplateRef&lt;{ $implicit: 'page' \\| 'prev' \\| 'next', page: number }></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[simple]</code></td><td>\u5F53\u6DFB\u52A0\u8BE5\u5C5E\u6027\u65F6\uFF0C\u663E\u793A\u4E3A\u7B80\u5355\u5206\u9875</td><td><code>boolean</code></td><td>-</td><td>\u2705</td></tr></tbody></table><h3 id="STError"><a class="lake-link"><i data-anchor="STError"></i></a>STError</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>\u5F02\u5E38\u7C7B\u578B\uFF0C<code>req</code> \u8868\u793AHTTP\u8BF7\u6C42</td><td><code>req</code></td><td>-</td></tr><tr><td><code>[error]</code></td><td>\u5F02\u5E38\u5185\u5BB9</td><td><code>any</code></td><td>-</td></tr></tbody></table><h3 id="STChange"><a class="lake-link"><i data-anchor="STChange"></i></a>STChange</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>\u53D8\u66F4\u7C7B\u578B\uFF0C\u5305\u62EC\uFF1A<code>loaded</code>\u3001<code>pi</code>\u3001<code>ps</code>\u3001<code>checkbox</code>\u3001<code>radio</code>\u3001<code>sort</code>\u3001<code>filter</code>\u3001<code>filterChange</code>\u3001<code>click</code>\u3001<code>dblClick</code>\u3001<code>expand</code></td><td><code>STChangeType</code></td><td>-</td></tr><tr><td><code>[pi]</code></td><td>\u5F53\u524D\u9875\u7801</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[ps]</code></td><td>\u6BCF\u9875\u6570\u91CF</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[total]</code></td><td>\u6570\u636E\u603B\u91CF</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[loaded]</code></td><td><code>loaded</code> \u53C2\u6570</td><td><code><a data-toc="STData">STData</a>[]</code></td><td>-</td></tr><tr><td><code>[checkbox]</code></td><td><code>checkbox</code> \u53C2\u6570</td><td><code><a data-toc="STData">STData</a>[]</code></td><td>-</td></tr><tr><td><code>[radio]</code></td><td><code>radio</code> \u53C2\u6570</td><td><code><a data-toc="STData">STData</a></code></td><td>-</td></tr><tr><td><code>[sort]</code></td><td>\u6392\u5E8F\u53C2\u6570</td><td><code><a data-toc="STChangeSort">STChangeSort</a></code></td><td>-</td></tr><tr><td><code>[filter]</code></td><td>\u8FC7\u6EE4\u53C2\u6570</td><td><code>STColumn</code></td><td>-</td></tr><tr><td><code>[click]</code></td><td>\u884C\u70B9\u51FB\u53C2\u6570</td><td><code><a data-toc="STChangeRowClick">STChangeRowClick</a></code></td><td>-</td></tr><tr><td><code>[dblClick]</code></td><td>\u884C\u53CC\u51FB\u53C2\u6570</td><td><code><a data-toc="STChangeRowClick">STChangeRowClick</a></code></td><td>-</td></tr><tr><td><code>[expand]</code></td><td><code>expand</code> \u53C2\u6570</td><td><code><a data-toc="STData">STData</a></code></td><td>-</td></tr></tbody></table><h3 id="STChangeSort"><a class="lake-link"><i data-anchor="STChangeSort"></i></a>STChangeSort</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[value]</code></td><td>\u5F53\u524D\u5217\u6392\u5E8F\u72B6\u6001</td><td><code>ascend,descend</code></td><td>-</td></tr><tr><td><code>[map]</code></td><td>\u6240\u6709\u5217\u6392\u5E8F\u72B6\u6001</td><td><code>{ [key: string]: string }</code></td><td>-</td></tr><tr><td><code>[column]</code></td><td>\u884C\u63CF\u8FF0</td><td><code>STColumn</code></td><td>-</td></tr></tbody></table><h3 id="STChangeRowClick"><a class="lake-link"><i data-anchor="STChangeRowClick"></i></a>STChangeRowClick</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[e]</code></td><td>\u5F53\u524D\u884C\u4E8B\u4EF6</td><td><code>Event</code></td><td>-</td></tr><tr><td><code>[item]</code></td><td>\u5F53\u524D\u884C\u6570\u636E</td><td><code><a data-toc="STData">STData</a></code></td><td>-</td></tr><tr><td><code>[index]</code></td><td>\u5F53\u524D\u884C\u7D22\u5F15</td><td><code>number</code></td><td>-</td></tr></tbody></table><h3 id="STExportOptions"><a class="lake-link"><i data-anchor="STExportOptions"></i></a>STExportOptions</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[sheetname]</code></td><td>\u5DE5\u4F5C\u8584\u540D\u79F0</td><td><code>string</code></td><td><code>Sheet1</code></td></tr><tr><td><code>[filename]</code></td><td>\u4FDD\u5B58\u7684\u6587\u4EF6\u540D</td><td><code>string</code></td><td><code>export.xslx</code></td></tr><tr><td><code>[callback]</code></td><td>\u4FDD\u5B58\u524D\u7684\u56DE\u8C03</td><td><code>(wb: WorkBook) => void</code></td><td>-</td></tr></tbody></table><h3 id="STSingleSort"><a class="lake-link"><i data-anchor="STSingleSort"></i></a>STSingleSort</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[key]</code></td><td>\u8BF7\u6C42\u53C2\u6570\u540D</td><td><code>string</code></td><td><code>sort</code></td><td>\u2705</td></tr><tr><td><code>[nameSeparator]</code></td><td>\u5217\u540D\u4E0E\u72B6\u6001\u95F4\u5206\u9694\u7B26</td><td><code>string</code></td><td><code>.</code></td><td>\u2705</td></tr></tbody></table><h3 id="STMultiSort"><a class="lake-link"><i data-anchor="STMultiSort"></i></a>STMultiSort</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[key]</code></td><td>\u8BF7\u6C42\u53C2\u6570\u540D</td><td><code>string</code></td><td><code>sort</code></td><td>\u2705</td></tr><tr><td><code>[separator]</code></td><td>\u4E0D\u540C\u5C5E\u6027\u95F4\u5206\u9694\u7B26</td><td><code>string</code></td><td><code>-</code></td><td>\u2705</td></tr><tr><td><code>[nameSeparator]</code></td><td>\u5217\u540D\u4E0E\u72B6\u6001\u95F4\u5206\u9694\u7B26</td><td><code>string</code></td><td><code>.</code></td><td>\u2705</td></tr><tr><td><code>[arrayParam]</code></td><td>\u662F\u5426\u4EE5\u6570\u7EC4\u7684\u5F62\u5F0F\u4F20\u9012\u53C2\u6570<br><code>true</code> \u8868\u793A\u4F7F\u7528 <code>url?sort=name.asc&sort=age.desc</code> \u5F62\u5F0F<br><code>false</code> \u8868\u793A\u4F7F\u7528 <code>url?sort=name.asc-age.desc</code> \u5F62\u5F0F</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[keepEmptyKey]</code></td><td>\u662F\u5426\u4FDD\u6301\u7A7A\u503C\u7684\u952E\u540D<br><code>true</code> \u8868\u793A\u4E0D\u7BA1\u662F\u5426\u6709\u6392\u5E8F\u90FD\u4F1A\u53D1\u9001 <code>key</code> \u952E\u540D<br><code>false</code> \u8868\u793A\u65E0\u6392\u5E8F\u52A8\u4F5C\u65F6\u4E0D\u4F1A\u53D1\u9001 <code>key</code> \u952E\u540D</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[global]</code></td><td><strong>\u4EC5\u9650\u5168\u5C40\u914D\u7F6E\u9879\u6709\u6548</strong>\uFF0C\u662F\u5426\u5168\u5C40\u591A\u6392\u5E8F\u6A21\u5F0F<br><code>true</code> \u8868\u793A\u6240\u6709 <code>st</code> \u9ED8\u8BA4\u4E3A\u591A\u6392\u5E8F<br><code>false</code> \u8868\u793A\u9700\u8981\u4E3A\u6BCF\u4E2A <code>st</code> \u6DFB\u52A0 <code>multiSort</code> \u624D\u4F1A\u89C6\u4E3A\u591A\u6392\u5E8F\u6A21\u5F0F</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr></tbody></table><h3 id="STData"><a class="lake-link"><i data-anchor="STData"></i></a>STData</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[checked]</code></td><td>\u9009\u62E9\u6846\u6216\u5355\u9009\u6846\u72B6\u6001\u503C</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[disabled]</code></td><td>\u9009\u62E9\u6846\u6216\u5355\u9009\u6846 <code>disabled</code> \u503C</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[expand]</code></td><td>\u662F\u5426\u5C55\u5F00\u72B6\u6001</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[showExpand]</code></td><td>\u662F\u5426\u663E\u793A\u5C55\u5F00\u6309\u94AE</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[className]</code></td><td>\u884C\u6837\u5F0F</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="STColumn<TextendsSTData=any>"><a class="lake-link"><i data-anchor="STColumn<TextendsSTData=any>"></i></a>STColumn<TextendsSTData=any></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>\u5217\u540D</td><td><code>string, <a data-toc="STColumnTitle">STColumnTitle</a></code></td><td>-</td></tr><tr><td><code>[i18n]</code></td><td>\u5217\u540Di18n</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[type]</code></td><td><code>no</code> \u884C\u53F7<br><code>checkbox</code> \u591A\u9009<br><code>radio</code> \u5355\u9009<br><code>link</code> \u94FE\u63A5\uFF0C\u53EF\u89E6\u53D1 <code>click</code><br><code>img</code> \u56FE\u50CF\u4E14\u5C45\u4E2D<br><code>number</code> \u6570\u5B57\u4E14\u5C45\u53F3<br><code>currency</code> \u8D27\u5E01\u4E14\u5C45\u53F3<br><code>date</code> \u65E5\u671F\u683C\u5F0F\u4E14\u5C45\u4E2D<br><code>badge</code> <a target="_blank" href="https://ng.ant.design/components/badge/zh" data-url="https://ng.ant.design/components/badge/zh">\u5FBD\u6807</a><br><code>tag</code> <a target="_blank" href="https://ng.ant.design/components/tag/zh" data-url="https://ng.ant.design/components/tag/zh">\u6807\u7B7E</a><br><code>yn</code> \u5C06<code>boolean</code>\u7C7B\u578B\u5FBD\u7AE0\u5316 <a href="/theme/yn" data-url="/theme/yn">document</a><br>\u4F7F\u7528 <code>cell</code> \u7EC4\u4EF6\u6E32\u67D3\uFF0C\u89C1<a href="/components/cell" data-url="/components/cell">cell</a><br><code>widget</code> \u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6\u6765\u6E32\u67D3\u5217</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[cell]</code></td><td>\u4F7F\u7528 <code>cell</code> \u7EC4\u4EF6\u6E32\u67D3\uFF0C\u89C1<a href="/components/cell" data-url="/components/cell">cell</a>\u3002</td><td><code>CellOptions | ((record: T, column: STColumn) => CellOptions)</code></td><td>-</td></tr><tr><td><code>[index]</code></td><td>\u5217\u6570\u636E\u5728\u6570\u636E\u9879\u4E2D\u5BF9\u5E94\u7684 key\uFF0C\u652F\u6301 <code>a.b.c</code> \u7684\u5D4C\u5957\u5199\u6CD5</td><td><code>string, string[]</code></td><td>-</td></tr><tr><td><code>[render]</code></td><td>\u81EA\u5B9A\u4E49\u6E32\u67D3ID</td><td><code>string, TemplateRef<void>, TemplateRef<{ $implicit: <a data-toc="STData">STData</a>; index: number }></code></td><td>-</td></tr><tr><td><code>[renderTitle]</code></td><td>\u6807\u9898\u81EA\u5B9A\u4E49\u6E32\u67D3ID</td><td><code>string, TemplateRef&lt;void>, TemplateRef<{ $implicit: STColumn; index: number }></code></td><td>-</td></tr><tr><td><code>[default]</code></td><td>\u5F53\u4E0D\u5B58\u5728\u6570\u636E\uFF08\u503C\u7C7B\u578B\u4E3A <code>undefined</code>\uFF09\u65F6\u4EE5\u9ED8\u8BA4\u503C\u66FF\u4EE3</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[buttons]</code></td><td>\u6309\u94AE\u7EC4</td><td><code><a data-toc="STColumnButton">STColumnButton</a>[]</code></td><td>-</td></tr><tr><td><code>[maxMultipleButton]</code></td><td>\u914D\u7F6E\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A\u6309\u94AE\uFF0C\u591A\u4F59\u90E8\u5206\u81EA\u52A8\u751F\u6210\u81F3 <code>\u66F4\u591A</code> \u4E0B\u9762</td><td><code>STColumnMaxMultipleButton, number</code></td><td>-</td></tr><tr><td><code>[width]</code></td><td>\u5217\u5BBD\uFF08\u6570\u5B57\u578B\u8868\u793A <code>px</code> \u503C\uFF0C<strong>\u6CE8\u610F\uFF1A</strong> \u82E5\u56FA\u5B9A\u5217\u5FC5\u987B\u662F\u6570\u5B57\uFF09\uFF0C\u4F8B\u5982\uFF1A<code>100</code>\u3001<code>10%</code>\u3001<code>100px</code></td><td><code>string,number</code></td><td>-</td></tr><tr><td><code>[fixed]</code></td><td>\u56FA\u5B9A\u524D\u540E\u5217\uFF0C\u5F53\u6307\u5B9A\u65F6\u52A1\u5FC5\u6307\u5B9A <code>width</code> \u5426\u5219\u89C6\u4E3A\u65E0\u6548</td><td><code>left,right</code></td><td>-</td></tr><tr><td><code>[format]</code></td><td>\u683C\u5F0F\u5316\u5217\u503C</td><td><code>(item: <a data-toc="STData">STData</a>, col: STColumn, index: number) => string</code></td><td>-</td></tr><tr><td><code>[className]</code></td><td>\u5217 <code>class</code> \u5C5E\u6027\u503C\uFF0C\u4F8B\u5982\uFF1A<code>text-center</code> \u5C45\u4E2D\uFF1B <code>text-right</code> \u5C45\u53F3\uFF1B <code>text-error</code> \u5F02\u5E38\u8272\uFF0C\u66F4\u591A\u53C2\u8003<a href="/theme/tools" data-url="/theme/tools">\u6837\u5F0F\u5DE5\u5177\u7C7B</a></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[colSpan]</code></td><td>\u5408\u5E76\u5217</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[onCell]</code></td><td>\u8BBE\u7F6E\u5355\u5143\u683C\u5C5E\u6027</td><td><code>(item: T, index: number) => STOnCellResult;</code></td><td>-</td></tr><tr><td><code>[sort]</code></td><td>\u6392\u5E8F\u914D\u7F6E\u9879\uFF0C\u8FDC\u7A0B\u6570\u636E\u914D\u7F6E<strong>\u4F18\u5148</strong>\u89C4\u5219\uFF1A<br><code>true</code> \u8868\u793A\u5141\u8BB8\u6392\u5E8F\uFF0C\u4E14\u82E5\u6570\u636E\u6E90\u4E3A\u672C\u5730\u6570\u636E\u65F6\u4F1A\u81EA\u52A8\u751F\u6210 <code>compare: (a, b) => a[index] - b[index]</code> \u65B9\u6CD5<br><code>string</code> \u8868\u793A\u8FDC\u7A0B\u6570\u636E\u6392\u5E8F\u76F8\u5BF9\u5E94 <code>key</code> \u503C</td><td><code>true,string,<a data-toc="STColumnSort">STColumnSort</a></code></td><td>-</td></tr><tr><td><code>[filter]</code></td><td>\u8FC7\u6EE4\u914D\u7F6E\u9879</td><td><code><a data-toc="STColumnFilter">STColumnFilter</a></code></td><td>-</td></tr><tr><td><code>[selections]</code></td><td>\u9009\u62E9\u529F\u80FD\u914D\u7F6E</td><td><code><a data-toc="STColumnSelection">STColumnSelection</a>[]</code></td><td>-</td></tr><tr><td><code>[numberDigits]</code></td><td>\u6570\u5B57\u683C\u5F0F\uFF0C<code>type=number</code> \u6709\u6548</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[dateFormat]</code></td><td>\u65E5\u671F\u683C\u5F0F\uFF0C<code>type=date</code> \u6709\u6548</td><td><code>string</code></td><td><code>yyyy-MM-dd HH:mm</code></td></tr><tr><td><code>[currency]</code></td><td>\u8D27\u5E01\u683C\u5F0F\u9009\u9879\uFF0C<code>type=currency</code> \u6709\u6548</td><td><code>STColumnCurrency</code></td><td>-</td></tr><tr><td><code>[yn]</code></td><td>\u5F53 <code>type=yn</code> \u6709\u6548</td><td><code><a data-toc="STColumnYn">STColumnYn</a></code></td><td>-</td></tr><tr><td><code>[exported]</code></td><td>\u662F\u5426\u5141\u8BB8\u5BFC\u51FA</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[acl]</code></td><td>ACL\u6743\u9650\uFF0C\u7B49\u540C <code>can()</code> \u53C2\u6570\u503C</td><td><code>ACLCanType</code></td><td>-</td></tr><tr><td><code>[click]</code></td><td>\u94FE\u63A5\u56DE\u8C03</td><td><code>(record: <a data-toc="STData">STData</a>, instance?: STComponent) => void</code></td><td>-</td></tr><tr><td><code>[badge]</code></td><td>\u5FBD\u6807\u914D\u7F6E\u9879</td><td><code><a data-toc="STColumnBadge">STColumnBadge</a></code></td><td>-</td></tr><tr><td><code>[tag]</code></td><td>\u5FBD\u6807\u914D\u7F6E\u9879</td><td><code><a data-toc="STColumnTag">STColumnTag</a></code></td><td>-</td></tr><tr><td><code>[enum]</code></td><td>\u679A\u4E3E\u914D\u7F6E\u9879</td><td><code>{ [key: string]: string; [key: number]: string }</code></td><td>-</td></tr><tr><td><code>[widget]</code></td><td>\u5C0F\u90E8\u4EF6\u914D\u7F6E\u9879</td><td><code><a data-toc="STWidgetColumn">STWidgetColumn</a></code></td><td>-</td></tr><tr><td><code>[noIndex]</code></td><td>\u884C\u53F7\u7D22\u5F15\u5F00\u59CB\u503C</td><td><code>number,(item: <a data-toc="STData">STData</a>, col: STColumn, idx: number) => number</code></td><td><code>1</code></td></tr><tr><td><code>[iif]</code></td><td>\u6761\u4EF6\u8868\u8FBE\u5F0F<br>1\u3001\u4EC5\u8D4B\u503C <code>columns</code> \u65F6\u6267\u884C\u4E00\u6B21<br>2\u3001\u53EF\u8C03\u7528 <code>resetColumns()</code> \u518D\u4E00\u6B21\u89E6\u53D1</td><td><code>(item: STColumn) => boolean</code></td><td>-</td></tr><tr><td><code>[statistical]</code></td><td>\u7EDF\u8BA1\u4FE1\u606F</td><td><code>STStatisticalType,<a data-toc="STStatistical">STStatistical</a></code></td><td>-</td></tr><tr><td><code>[resizable]</code></td><td>\u8C03\u6574\u8868\u5934\u914D\u7F6E\u9879\uFF0C<strong>\u4E0D\u652F\u6301\u591A\u8868\u5934</strong></td><td><code><a data-toc="STResizable">STResizable</a>, boolean</code></td><td>-</td><td>-</td></tr><tr><td><code>[children]</code></td><td>\u591A\u8868\u5934</td><td><code>STColumn[]</code></td><td>-</td></tr><tr><td><code>[safeType]</code></td><td>\u5B89\u5168\u6E32\u67D3\u65B9\u5F0F\uFF0C\u652F\u6301<a href="https://ng-alain.com/docs/global-config/zh" data-url="https://ng-alain.com/docs/global-config/zh">\u5168\u5C40\u914D\u7F6E</a></td><td><code>text,html,safeHtml</code></td><td><code>safeHtml</code></td></tr><tr><td><code>[customRequest]</code></td><td>\u8986\u76D6\u9ED8\u8BA4\u7684\u8BF7\u6C42\u884C\u4E3A\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u81EA\u5DF1\u7684\u8BF7\u6C42\u5B9E\u73B0\uFF0C\u4F8B\u5982\uFF1AGraphql\uFF0C\u652F\u6301<a href="https://ng-alain.com/docs/global-config/zh" data-url="https://ng-alain.com/docs/global-config/zh">\u5168\u5C40\u914D\u7F6E</a></td><td><code>(options: STCustomRequestOptions) => Observable&lt;any></code></td><td>-</td></tr></tbody></table><h3 id="STColumnTitle"><a class="lake-link"><i data-anchor="STColumnTitle"></i></a>STColumnTitle</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[text]</code></td><td>\u5217\u6807\u9898\uFF0C<code>text</code> \u4E0E <code>i18n</code> \u5FC5\u9009\u5176\u4E00</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[i18n]</code></td><td>\u5217\u6807\u9898i18n\u4E3B\u952E\uFF0C<code>text</code> \u4E0E <code>i18n</code> \u5FC5\u9009\u5176\u4E00</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[optional]</code></td><td>\u6807\u7B7E\u53EF\u9009\u4FE1\u606F</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[optionalHelp]</code></td><td>\u6807\u7B7E\u53EF\u9009\u5E2E\u52A9</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="STColumnSort"><a class="lake-link"><i data-anchor="STColumnSort"></i></a>STColumnSort</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[default]</code></td><td>\u6392\u5E8F\u7684\u53D7\u63A7\u5C5E\u6027</td><td><code>ascend,descend</code></td><td>-</td></tr><tr><td><code>[compare]</code></td><td>\u672C\u5730\u6570\u636E\u7684\u6392\u5E8F\u51FD\u6570\uFF0C\u4F7F\u7528\u4E00\u4E2A\u51FD\u6570(\u53C2\u8003 <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" data-url="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">Array.sort</a> \u7684 compareFunction)\uFF0C<code>null</code> \u5FFD\u7565\u672C\u5730\u6392\u5E8F\uFF0C\u4F46\u4FDD\u6301\u6392\u5E8F\u529F\u80FD</td><td><code>(a: any, b: any) => number, null</code></td><td>-</td></tr><tr><td><code>[key]</code></td><td>\u8FDC\u7A0B\u6570\u636E\u7684\u6392\u5E8F\u65F6\u540E\u7AEF\u76F8\u5BF9\u5E94\u7684KEY\uFF0C\u9ED8\u8BA4\u4F7F\u7528 <code>index</code> \u5C5E\u6027<br>\u82E5 <code>multiSort: false</code> \u65F6\uFF1A<code>key: 'name' => ?name=1&pi=1</code><br>\u82E5 <code>multiSort: true</code> \u5141\u8BB8\u591A\u4E2A\u6392\u5E8F key \u5B58\u5728\uFF0C\u6216\u4F7F\u7528 <code>STMultiSort</code> \u6307\u5B9A\u591A\u5217\u6392\u5E8Fkey\u5408\u5E76\u89C4\u5219</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[reName]</code></td><td>\u8FDC\u7A0B\u6570\u636E\u7684\u6392\u5E8F\u65F6\u540E\u7AEF\u76F8\u5BF9\u5E94\u7684VALUE<br><code>{ ascend: '0', descend: '1' }</code> \u7ED3\u679C <code>?name=1&pi=1</code><br><code>{ ascend: 'asc', descend: 'desc' }</code> \u7ED3\u679C <code>?name=desc&pi=1</code></td><td><code>{ ascend?: string, descend?: string }</code></td><td>-</td></tr></tbody></table><h3 id="STColumnFilter"><a class="lake-link"><i data-anchor="STColumnFilter"></i></a>STColumnFilter</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>\u7C7B\u578B\uFF0C<code>keyword</code> \u6587\u672C\u6846\u5F62\u5F0F</td><td><code>default,keyword,number,date,custom</code></td><td><code>default</code></td></tr><tr><td><code>[menus]</code></td><td>\u8868\u5934\u7684\u7B5B\u9009\u83DC\u5355\u9879\uFF0C\u81F3\u5C11\u4E00\u9879\u624D\u4F1A\u751F\u6548</td><td><code><a data-toc="STColumnFilterMenu">STColumnFilterMenu</a>[]</code></td><td>-</td></tr><tr><td><code>[fn]</code></td><td>\u672C\u5730\u6570\u636E\u7684\u7B5B\u9009\u51FD\u6570</td><td><code>(filter: <a data-toc="STColumnFilterMenu">STColumnFilterMenu</a>, record: <a data-toc="STData">STData</a>) => boolean</code></td><td>-</td></tr><tr><td><code>[default]</code></td><td>\u6807\u8BC6\u6570\u636E\u662F\u5426\u7ECF\u8FC7\u8FC7\u6EE4\uFF0C\u7B5B\u9009\u56FE\u6807\u4F1A\u9AD8\u4EAE</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[icon]</code></td><td>\u81EA\u5B9A\u4E49 fiter \u56FE\u6807<br>\u5F53 <code>type='default'</code> \u9ED8\u8BA4 <code>filter</code><br>\u5F53 <code>type='keyword'</code> \u9ED8\u8BA4 <code>search</code></td><td><code>string | <a data-toc="STIcon">STIcon</a></code></td><td><code>filter</code></td></tr><tr><td><code>[multiple]</code></td><td>\u662F\u5426\u591A\u9009</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[confirmText]</code></td><td>filter \u786E\u8BA4\u6309\u94AE\u6587\u672C</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[clearText]</code></td><td>filter \u6E05\u9664\u6309\u94AE\u6587\u672C</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[key]</code></td><td>\u8FDC\u7A0B\u6570\u636E\u7684\u8FC7\u6EE4\u65F6\u540E\u7AEF\u76F8\u5BF9\u5E94\u7684KEY\uFF0C\u9ED8\u8BA4\u4F7F\u7528 <code>index</code> \u5C5E\u6027</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[reName]</code></td><td>\u8FDC\u7A0B\u6570\u636E\u7684\u8FC7\u6EE4\u65F6\u540E\u7AEF\u76F8\u5BF9\u5E94\u7684VALUE</td><td><code>(list: <a data-toc="STColumnFilterMenu">STColumnFilterMenu</a>[], col: STColumn) => Object</code></td><td>-</td></tr><tr><td><code>[custom]</code></td><td>\u81EA\u5B9A\u4E49\u6A21\u7248</td><td><code>TemplateRef<{ $implicit: <a data-toc="STColumnFilter">STColumnFilter</a>; col: STColumn; handle: STColumnFilterHandle }></code></td><td>-</td></tr><tr><td><code>[showOPArea]</code></td><td>\u662F\u5426\u663E\u793A\u64CD\u4F5C\u533A\u57DF</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[placeholder]</code></td><td>\u5728\u6587\u5B57\u6846\u4E2D\u663E\u793A\u63D0\u793A\u8BAF\u606F</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[number]</code></td><td>\u7C7B\u578B\u4E3A <code>number</code> \u7684\u914D\u7F6E\u9879</td><td><code>Object</code></td><td>-</td></tr><tr><td><code>[date]</code></td><td>\u7C7B\u578B\u4E3A <code>date</code> \u7684\u914D\u7F6E\u9879</td><td><code>Object</code></td><td>-</td></tr></tbody></table><h3 id="STColumnFilterMenu"><a class="lake-link"><i data-anchor="STColumnFilterMenu"></i></a>STColumnFilterMenu</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[text]</code></td><td>\u6587\u672C<br>\u5F53 <code>type: 'keyword'</code> \u65F6\u8868\u793A <code>placeholder</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[value]</code></td><td>\u503C</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[checked]</code></td><td>\u662F\u5426\u9009\u4E2D</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[acl]</code></td><td>\u6743\u9650\uFF0C\u7B49\u540C <code>can()</code> \u53C2\u6570\u503C</td><td><code>ACLCanType</code></td><td>-</td></tr></tbody></table><h3 id="STColumnButton"><a class="lake-link"><i data-anchor="STColumnButton"></i></a>STColumnButton</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[text]</code></td><td>\u6587\u672C\u4E0E\u56FE\u6807\u5171\u5B58</td><td><code>string | (record: T, btn: <a data-toc="STColumnButton">STColumnButton</a>) => string</code></td><td>-</td></tr><tr><td><code>[icon]</code></td><td>\u56FE\u6807\u4E0E\u6587\u672C\u5171\u5B58</td><td><code>string | <a data-toc="STIcon">STIcon</a> | ((record: T, btn: <a data-toc="STColumnButton">STColumnButton</a><T>) => <a data-toc="STIcon">STIcon</a> | null | undefined)</code></td><td>-</td></tr><tr><td><code>[i18n]</code></td><td>\u6587\u672Ci18n</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[type]</code></td><td>\u6309\u94AE\u7C7B\u578B</td><td><code>none,del,modal,static,drawer,link</code></td><td>-</td></tr><tr><td><code>[click]</code></td><td>\u70B9\u51FB\u56DE\u8C03\uFF1B<strong>\u51FD\u6570\uFF1A</strong> <code>type=modal</code> \u53EA\u4F1A\u5728 <code>\u786E\u8BA4</code> \u65F6\u89E6\u53D1\u4E14 <code>modal</code> \u53C2\u6570\u6709\u6548<br><strong>reload\uFF1A</strong> \u91CD\u65B0\u5237\u65B0\u5F53\u524D\u9875<br><strong>load\uFF1A</strong> \u91CD\u65B0\u52A0\u8F7D\u6570\u636E\uFF0C\u5E76\u91CD\u7F6E\u9875\u7801\u4E3A\uFF1A<code>1</code></td><td><code>(record: <a data-toc="STData">STData</a>, modal?: any, instance?: STComponent) => void | reload</code></td><td>-</td></tr><tr><td><code>[pop]</code></td><td>\u662F\u5426\u9700\u8981\u6C14\u6CE1\u786E\u8BA4\u6846</td><td><code>boolean, string, STColumnButtonPop</code></td><td><code>false</code></td></tr><tr><td><code>[modal]</code></td><td>\u6A21\u6001\u6846\u914D\u7F6E</td><td><code><a data-toc="STColumnButtonModal">STColumnButtonModal</a></code></td><td>-</td></tr><tr><td><code>[drawer]</code></td><td>\u62BD\u5C49\u914D\u7F6E</td><td><code><a data-toc="STColumnButtonDrawer">STColumnButtonDrawer</a></code></td><td>-</td></tr><tr><td><code>[children]</code></td><td>\u4E0B\u62C9\u83DC\u5355\uFF0C\u5F53\u5B58\u5728\u65F6\u4EE5 <code>dropdown</code> \u5F62\u5F0F\u6E32\u67D3\uFF1B\u53EA\u652F\u6301\u4E00\u7EA7</td><td><code><a data-toc="STColumnButton">STColumnButton</a>[]</code></td><td>-</td></tr><tr><td><code>[acl]</code></td><td>ACL\u6743\u9650\uFF0C\u7B49\u540C <code>can()</code> \u53C2\u6570\u503C</td><td><code>ACLCanType</code></td><td>-</td></tr><tr><td><code>[iif]</code></td><td>\u81EA\u5B9A\u4E49\u6761\u4EF6\u8868\u8FBE\u5F0F</td><td><code>(item: <a data-toc="STData">STData</a>, btn: <a data-toc="STColumnButton">STColumnButton</a>, column: STColumn) => boolean</code></td><td><code>() => true</code></td></tr><tr><td><code>[iifBehavior]</code></td><td>\u8868\u8FBE\u5F0F <code>false</code> \u503C\u65F6\u6E32\u67D3\u65B9\u5F0F</td><td><code>hide,disabled</code></td><td><code>hide</code></td></tr><tr><td><code>[tooltip]</code></td><td>\u6309\u94AE\u6587\u5B57\u63D0\u793A</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[className]</code></td><td>\u6309\u94AE <code>class</code> \u5C5E\u6027\u503C\uFF0C\u4F8B\u5982\uFF1A<code>text-error</code> \u5F02\u5E38\u8272\uFF0C\u66F4\u591A\u53C2\u8003<a href="/theme/tools" data-url="/theme/tools">\u6837\u5F0F\u5DE5\u5177\u7C7B</a></td><td><code>string | ((record: T, btn: <a data-toc="STColumnButton">STColumnButton</a><T>) => NgClassType | null | undefined)</code></td><td>-</td></tr></tbody></table><h3 id="STIcon"><a class="lake-link"><i data-anchor="STIcon"></i></a>STIcon</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>\u56FE\u6807\u7C7B\u578B</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u56FE\u6807\u4E3B\u9898\u98CE\u683C</td><td><code>outline | twotone | fill</code></td><td><code>outline</code></td><td>\u2705</td></tr><tr><td><code>[spin]</code></td><td>\u662F\u5426\u6709\u65CB\u8F6C\u52A8\u753B</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[twoToneColor]</code></td><td>\u4EC5\u9002\u7528\u53CC\u8272\u56FE\u6807\uFF0C\u8BBE\u7F6E\u53CC\u8272\u56FE\u6807\u7684\u4E3B\u8981\u989C\u8272\uFF0C\u4EC5\u5BF9\u5F53\u524D icon \u751F\u6548</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[iconfont]</code></td><td>\u6307\u5B9A\u6765\u81EA IconFont \u7684\u56FE\u6807\u7C7B\u578B</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr></tbody></table><h3 id="STColumnButtonModal"><a class="lake-link"><i data-anchor="STColumnButtonModal"></i></a>STColumnButtonModal</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[component]</code></td><td>\u76EE\u6807\u7EC4\u4EF6\u5BF9\u8C61</td><td><code>any</code></td><td>-</td><td>-</td></tr><tr><td><code>[params]</code></td><td>\u76EE\u6807\u7EC4\u4EF6\u7684\u63A5\u6536\u53C2\u6570\u5BF9\u8C61</td><td><code>(record: <a data-toc="STData">STData</a>) => Object</code></td><td>-</td><td>-</td></tr><tr><td><code>[paramsName]</code></td><td>\u76EE\u6807\u7EC4\u4EF6\u7684\u63A5\u6536\u53C2\u6570\u540D\uFF0C\u82E5\u76EE\u6807\u7EC4\u4EF6\u63A5\u6536\u503C\u4E3A\u7A7A\u65F6\uFF0C\u68C0\u67E5 <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L52" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L52">global-config.module.ts</a> \u5168\u5C40\u8BBE\u7F6E</td><td><code>string</code></td><td><code>record</code></td><td>\u2705</td></tr><tr><td><code>[size]</code></td><td>\u5BF9\u8BDD\u6846\u5927\u5C0F\uFF0C\u652F\u6301\u6570\u5B57\u7C7B\u578B</td><td><code>'sm','md','lg','xl'</code></td><td><code>'lg'</code></td><td>\u2705</td></tr><tr><td><code>[exact]</code></td><td>\u662F\u5426\u7CBE\u51C6\uFF08\u9ED8\u8BA4\uFF1A<code>true</code>\uFF09\uFF0C\u82E5\u8FD4\u56DE\u503C\u975E\u7A7A\u503C\uFF08<code>null</code>\u6216<code>undefined</code>\uFF09\u89C6\u4E3A\u6210\u529F\uFF0C\u5426\u5219\u89C6\u4E3A\u9519\u8BEF</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[includeTabs]</code></td><td>\u662F\u5426\u5305\u88F9\u6807\u7B7E\u9875\uFF0C\u4FEE\u590D\u6A21\u6001\u5305\u542B\u6807\u7B7E\u95F4\u8DDD\u95EE\u9898</td><td><code>boolean</code></td><td>-</td><td>-</td></tr><tr><td><code>[modalOptions]</code></td><td>\u5BF9\u8BDD\u6846 <a target="_blank" href="https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts" data-url="https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts">ModalOptions</a> \u53C2\u6570</td><td><code>any</code></td><td>-</td><td>\u2705</td></tr></tbody></table><h3 id="STColumnButtonDrawer"><a class="lake-link"><i data-anchor="STColumnButtonDrawer"></i></a>STColumnButtonDrawer</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>any</code></td><td>-</td><td>-</td></tr><tr><td><code>[component]</code></td><td>\u76EE\u6807\u7EC4\u4EF6\u5BF9\u8C61</td><td><code>any</code></td><td>-</td><td>-</td></tr><tr><td><code>[params]</code></td><td>\u76EE\u6807\u7EC4\u4EF6\u7684\u63A5\u6536\u53C2\u6570\u5BF9\u8C61</td><td><code>(record: <a data-toc="STData">STData</a>) => Object</code></td><td>-</td><td>-</td></tr><tr><td><code>[paramsName]</code></td><td>\u76EE\u6807\u7EC4\u4EF6\u7684\u63A5\u6536\u53C2\u6570\u540D\uFF0C\u82E5\u76EE\u6807\u7EC4\u4EF6\u63A5\u6536\u503C\u4E3A\u7A7A\u65F6\uFF0C\u68C0\u67E5 <a target="_blank" href="https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L52" data-url="https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L52">global-config.module.ts</a> \u5168\u5C40\u8BBE\u7F6E</td><td><code>string</code></td><td><code>record</code></td><td>\u2705</td></tr><tr><td><code>[size]</code></td><td>\u62BD\u5C49\u5927\u5C0F\uFF0C\u652F\u6301\u6570\u5B57\u7C7B\u578B</td><td><code>'sm','md','lg','xl'</code></td><td><code>'md'</code></td><td>\u2705</td></tr><tr><td><code>[drawerOptions]</code></td><td>\u62BD\u5C49 <a target="_blank" href="https://ng.ant.design/components/drawer/zh#nzdraweroptions" data-url="https://ng.ant.design/components/drawer/zh#nzdraweroptions">NzDrawerOptions</a> \u53C2\u6570</td><td><code>any</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[footer]</code></td><td>\u662F\u5426\u5305\u542B\u5E95\u90E8\u5DE5\u5177\u6761</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[footerHeight]</code></td><td>\u5E95\u90E8\u5DE5\u5177\u6761\u9AD8\u5EA6</td><td><code>number</code></td><td><code>55</code></td><td>\u2705</td></tr></tbody></table><h3 id="STColumnSelection"><a class="lake-link"><i data-anchor="STColumnSelection"></i></a>STColumnSelection</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[text]</code></td><td>\u6587\u672C</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[select]</code></td><td>\u9009\u62E9\u9879\u70B9\u51FB\u56DE\u8C03\uFF0C\u5141\u8BB8\u5BF9\u53C2\u6570 <code>data.checked</code> \u8FDB\u884C\u64CD\u4F5C</td><td><code>(data: <a data-toc="STData">STData</a>[]) => void</code></td><td>-</td></tr><tr><td><code>[acl]</code></td><td>ACL\u6743\u9650\uFF0C\u7B49\u540C <code>can()</code> \u53C2\u6570\u503C</td><td><code>ACLCanType</code></td><td>-</td></tr></tbody></table><h3 id="STColumnYn"><a class="lake-link"><i data-anchor="STColumnYn"></i></a>STColumnYn</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[truth]</code></td><td>\u771F\u503C\u6761\u4EF6</td><td><code>any</code></td><td><code>true</code></td></tr><tr><td><code>[yes]</code></td><td>\u5FBD\u7AE0 <code>true</code> \u65F6\u6587\u672C</td><td><code>string</code></td><td><code>\u662F</code></td></tr><tr><td><code>[no]</code></td><td>\u5FBD\u7AE0 <code>false</code> \u65F6\u6587\u672C</td><td><code>string</code></td><td><code>\u5426</code></td></tr><tr><td><code>[mode]</code></td><td>\u663E\u793A\u6A21\u5F0F</td><td><code>full,icon,text</code></td><td><code>icon</code></td></tr></tbody></table><h3 id="STcolumnCurrency"><a class="lake-link"><i data-anchor="STcolumnCurrency"></i></a>STcolumnCurrency</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>\u8D27\u5E01\u6E32\u67D3\u7C7B\u578B</td><td><code>commas, mega</code></td><td><code>commas</code></td></tr><tr><td><code>[format]</code></td><td>\u89C1 <a href="https://ng-alain.com/util/format/zh#format" data-url="https://ng-alain.com/util/format/zh#format">CurrencyService.format</a></td><td><code>CurrencyFormatOptions</code></td><td>-</td></tr></tbody></table><h3 id="STColumnBadge"><a class="lake-link"><i data-anchor="STColumnBadge"></i></a>STColumnBadge</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[text]</code></td><td>\u6587\u672C</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>\u5FBD\u6807\u989C\u8272\u503C</td><td><code>success,processing,default,error,warning</code></td><td>-</td></tr><tr><td><code>[tooltip]</code></td><td>\u6587\u5B57\u63D0\u793A</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="STColumnTag"><a class="lake-link"><i data-anchor="STColumnTag"></i></a>STColumnTag</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[text]</code></td><td>\u6587\u672C</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>Tag\u989C\u8272\u503C</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[tooltip]</code></td><td>\u6587\u5B57\u63D0\u793A</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="STWidgetColumn"><a class="lake-link"><i data-anchor="STWidgetColumn"></i></a>STWidgetColumn</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>\u6307\u5B9A\u7C7B\u578B\u540D\uFF0C\u53EF\u901A\u8FC7\u5B9A\u4E49 <code>STWidgetRegistry</code> \u6765\u5B9A\u5236\uFF0C<a target="_blank" href="https://github.com/ng-alain/delon/blob/master/src/app/shared/st-widget/st-widget.module.ts" data-url="https://github.com/ng-alain/delon/blob/master/src/app/shared/st-widget/st-widget.module.ts">\u4F8B\u5982</a></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[params]</code></td><td>\u76EE\u6807\u7EC4\u4EF6\u7684\u53C2\u6570</td><td><code>(options: { record: <a data-toc="STData">STData</a>; column: STColumn }) => {}</code></td><td>-</td></tr></tbody></table><h3 id="STWidthMode"><a class="lake-link"><i data-anchor="STWidthMode"></i></a>STWidthMode</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>\u7C7B\u578B</td><td><code>strict,default</code></td><td><code>default</code></td><td>\u2705</td></tr><tr><td><code>[strictBehavior]</code></td><td><code>strict</code> \u7684\u884C\u4E3A\u7C7B\u578B</td><td><code>wrap,truncate</code></td><td><code>truncate</code></td><td>\u2705</td></tr></tbody></table><h3 id="STStatistical"><a class="lake-link"><i data-anchor="STStatistical"></i></a>STStatistical</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>\u7EDF\u8BA1\u7C7B\u578B</td><td><code>STStatisticalType | STStatisticalFn</code></td><td>-</td></tr><tr><td><code>[digits]</code></td><td>\u4FDD\u7559\u5C0F\u6570\u4F4D\u6570</td><td><code>number</code></td><td><code>2</code></td></tr><tr><td><code>[currency]</code></td><td>\u662F\u5426\u9700\u8981\u8D27\u5E01\u683C\u5F0F\u5316\uFF0C\u9ED8\u8BA4\u5F53 <code>type</code> \u4E3A <code>STStatisticalFn</code>\u3001 <code>sum</code>\u3001<code>average</code>\u3001<code>max</code>\u3001<code>min</code> \u65F6\u4E3A <code>true</code></td><td><code>boolean</code></td><td>-</td></tr></tbody></table><p><strong>STStatisticalFn</strong></p><pre class="hljs language-ts"><code>(
  values: number[],
  col: STColumn,
  list: STData[],
  rawData?: any,
) => STStatisticalResult</code></pre><h3 id="STResizable"><a class="lake-link"><i data-anchor="STResizable"></i></a>STResizable</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[disabled]</code></td><td>Disable resize</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[bounds]</code></td><td>\u8C03\u6574\u5C3A\u5BF8\u7684\u8FB9\u754C</td><td><code>window, parent, ElementRef&lt;HTMLElement></code></td><td><code>window</code></td></tr><tr><td><code>[maxWidth]</code></td><td>\u6700\u5927\u5BBD\u5EA6(\u8D85\u8FC7\u8FB9\u754C\u90E8\u5206\u5FFD\u7565)</td><td><code>number</code></td><td><code>360</code></td></tr><tr><td><code>[minWidth]</code></td><td>\u6700\u5C0F\u5BBD\u5EA6</td><td><code>number</code></td><td><code>60</code></td></tr><tr><td><code>[preview]</code></td><td>\u5F00\u542F\u9884\u89C8</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h2 id="Theme"><a class="lake-link"><i data-anchor="Theme"></i></a>Theme</h2><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>@nz-table-img-radius</code></td><td>\u56FE\u50CF\u5706\u89D2\u5927\u5C0F</td><td><code>4px</code></td></tr><tr><td><code>@nz-table-img-margin-right</code></td><td>\u56FE\u50CF\u53F3\u8FB9\u8DDD</td><td><code>4px</code></td></tr><tr><td><code>@nz-table-img-max-height</code></td><td>\u56FE\u50CF\u6700\u5927\u9AD8\u5EA6</td><td><code>32px</code></td></tr><tr><td><code>@nz-table-img-max-width</code></td><td>\u56FE\u50CF\u6700\u5927\u5BBD\u5EA6</td><td><code>32px</code></td></tr><tr><td><code>@nz-table-even-background</code></td><td>\u884C\u5947\u5076\u80CC\u666F\u8272</td><td><code>none</code></td></tr><tr><td><code>@nz-table-rep-max-width</code></td><td>\u53EF\u89C6\u533A\u57DF\u5C0F\u4E8E\u65F6\u89E6\u53D1</td><td><code></code></td></tr><tr><td><code>@nz-table-rep-min-width</code></td><td>\u53EF\u89C6\u533A\u57DF\u5927\u4E8E\u65F6\u89E6\u53D1</td><td><code></code></td></tr><tr><td><code>@nz-table-rep-header-background</code></td><td>\u54CD\u5E94\u5F0F\u4E0B\u6807\u9898\u80CC\u666F\u989C\u8272</td><td><code>@border-color-split</code></td></tr><tr><td><code>@nz-table-rep-even-background</code></td><td>\u54CD\u5E94\u5F0F\u4E0B\u5947\u5076\u989C\u8272</td><td><code>#f9f9f9</code></td></tr><tr><td><code>@nz-table-rep-column-name-color</code></td><td>\u54CD\u5E94\u5F0F\u4E0B\u6587\u672C\u989C\u8272</td><td><code>rgba(0, 0, 0, 0.5)</code></td></tr><tr><td><code>@nz-table-rep-column-name-text-align</code></td><td>\u54CD\u5E94\u5F0F\u4E0B\u6807\u9898\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F</td><td><code>right</code></td></tr><tr><td><code>@nz-table-rep-column-name-width</code></td><td>\u54CD\u5E94\u5F0F\u4E0B\u6807\u9898\u5BBD\u5EA6</td><td><code>100px</code></td></tr><tr><td><code>@nz-table-rep-column-name-padding-right</code></td><td>\u54CD\u5E94\u5F0F\u4E0B\u6807\u9898\u4E0E\u5185\u5BB9\u53F3\u8FB9\u8DDD</td><td><code>8px</code></td></tr><tr><td><code>@table-row-hover-bg</code></td><td>\u884C\u60AC\u505C\u80CC\u666F\u8272</td><td><code>#fafafa</code></td></tr><tr><td><code>@<a data-toc="st">st</a>-btn-disabled-color</code></td><td>\u7981\u7528\u6309\u94AE\u7684\u6587\u672C\u989C\u8272</td><td><code>rgba(0, 0, 0, 0.25)</code></td></tr><tr><td><code>@<a data-toc="st">st</a>-title-optional-color</code></td><td>\u6807\u9898\u53EF\u9009\u6587\u672C\u989C\u8272</td><td><code>rgba(0, 0, 0, 0.35)</code></td></tr><tr><td><code>@<a data-toc="st">st</a>-resizable-handle-width</code></td><td>\u62D6\u62FD\u5BBD\u5EA6</td><td><code>1px</code></td></tr><tr><td><code>@<a data-toc="st">st</a>-resizable-handle-height</code></td><td>\u62D6\u62FD\u9AD8\u5EA6</td><td><code>60%</code></td></tr><tr><td><code>@<a data-toc="st">st</a>-resizable-handle-color</code></td><td>\u62D6\u62FD\u989C\u8272</td><td><code>@border-color-base</code></td></tr></tbody></table>`,meta:{type:"CURD",title:"st",subtitle:"\u8868\u683C",cols:1,order:1,module:"import { STModule } from '@delon/abc/st';"},toc:[{id:"\u5173\u4E8E\u6570\u636E\u6E90",title:"\u5173\u4E8E\u6570\u636E\u6E90",h:2,children:[{id:"URL",title:"URL",h:3},{id:"\u9759\u6001\u6570\u636E",title:"\u9759\u6001\u6570\u636E",h:3},{id:"\u5E38\u89C1\u95EE\u9898",title:"\u5E38\u89C1\u95EE\u9898",h:3}]},{id:"API",title:"API",h:2,children:[{id:"st",title:"st",h:3},{id:"\u7EC4\u4EF6\u5C5E\u6027\u4E0E\u65B9\u6CD5",title:"\u7EC4\u4EF6\u5C5E\u6027\u4E0E\u65B9\u6CD5",h:3},{id:"STReq",title:"STReq",h:3},{id:"STRes",title:"STRes",h:3},{id:"STPage",title:"STPage",h:3},{id:"STError",title:"STError",h:3},{id:"STChange",title:"STChange",h:3},{id:"STChangeSort",title:"STChangeSort",h:3},{id:"STChangeRowClick",title:"STChangeRowClick",h:3},{id:"STExportOptions",title:"STExportOptions",h:3},{id:"STSingleSort",title:"STSingleSort",h:3},{id:"STMultiSort",title:"STMultiSort",h:3},{id:"STData",title:"STData",h:3},{id:"STColumn<TextendsSTData=any>",title:"STColumn<T extends STData = any>",h:3},{id:"STColumnTitle",title:"STColumnTitle",h:3},{id:"STColumnSort",title:"STColumnSort",h:3},{id:"STColumnFilter",title:"STColumnFilter",h:3},{id:"STColumnFilterMenu",title:"STColumnFilterMenu",h:3},{id:"STColumnButton",title:"STColumnButton",h:3},{id:"STIcon",title:"STIcon",h:3},{id:"STColumnButtonModal",title:"STColumnButtonModal",h:3},{id:"STColumnButtonDrawer",title:"STColumnButtonDrawer",h:3},{id:"STColumnSelection",title:"STColumnSelection",h:3},{id:"STColumnYn",title:"STColumnYn",h:3},{id:"STcolumnCurrency",title:"STcolumnCurrency",h:3},{id:"STColumnBadge",title:"STColumnBadge",h:3},{id:"STColumnTag",title:"STColumnTag",h:3},{id:"STWidgetColumn",title:"STWidgetColumn",h:3},{id:"STWidthMode",title:"STWidthMode",h:3},{id:"STStatistical",title:"STStatistical",h:3},{id:"STResizable",title:"STResizable",h:3}]},{id:"Theme",title:"Theme",h:2}]}},demo:!0},this.codes=[{id:"components-st-basic",meta:{order:1,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"}},summary:{"zh-CN":"<p>\u5FEB\u901F\u751F\u6210\u8868\u683C\uFF1B\u5229\u7528 <code>res</code> \u53EF\u4EE5\u9002\u914D\u540E\u7AEF\u6570\u636E\u683C\u5F0F\u3002</p>","en-US":"<p>Quickly generate tables; use <code>res</code> to adapted backend data format.</p>"},code:`import { Component, ViewChild } from '@angular/core';

import { STColumn, STComponent, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

interface User {
  id: number;
  picture: {
    thumbnail: string;
  };
  name: {
    last: string;
    first: string;
  };
  nat: string;
  gender: string;
  email: string;
  phone: string;
  price: number;
  registered: Date;
}

@Component({
  selector: 'components-st-basic',
  template: \`
    <button nz-button nzType="primary" (click)="setRow()">setRow Method</button>
    <st #st [widthMode]="{ type: 'strict' }" [data]="url" [req]="{ params: params }" [columns]="columns" />
  \`,
  standalone: true,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStBasicComponent {
  url = \`/users?total=2&field=list\`;
  params = { a: 1, b: 2 };
  @ViewChild('st', { static: false }) private st!: STComponent;
  columns: Array<STColumn<User>> = [
    { title: '\u7F16\u53F7', index: 'id', width: 80 },
    { title: '\u5934\u50CF', index: 'picture.thumbnail', type: 'img', width: 60 },
    { title: '\u90AE\u7BB1', index: 'email', width: 80 },
    { title: '\u7535\u8BDD', index: 'phone' },
    {
      title: { text: '\u4F63\u91D1', optional: '\uFF08\u5355\u4F4D\uFF1A\u5143\uFF09', optionalHelp: '\u8BA1\u7B97\u516C\u5F0F=\u8BA2\u5355\u91D1\u989D * 0.6%' },
      index: 'price',
      type: 'currency'
    },
    { title: '\u6CE8\u518C\u65F6\u95F4', type: 'date', index: 'registered' }
  ];

  setRow(): void {
    this.st.setRow(0, { price: 100000000 });
  }
}`,lang:"ts",componentName:"ComponentsStBasicComponent",point:0,name:"basic",urls:"packages/abc/st/demo/basic.md",type:"demo"},{id:"components-st-custom-data",meta:{order:2,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u6570\u636E","en-US":"Custom Data"}},summary:{"zh-CN":"<p><code>data</code> \u5C5E\u6027\u652F\u6301 <code>STData[]</code>\u3001<code>Observable<STData[]></code> \u6570\u636E\u7C7B\u578B\u3002</p>","en-US":"<p><code>data</code> property supports <code>STData[]</code>\u3001<code>Observable<STData[]></code> data types.</p>"},code:`import { Component, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { of, delay } from 'rxjs';

import { STChange, STColumn, STColumnFilter, STColumnFilterHandle, STData, STModule } from '@delon/abc/st';
import { dateTimePickerUtil } from '@delon/util/date-time';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'components-st-custom-data',
  template: \`
    <div class="mb-md">
      <button (click)="st.clear()" nz-button>Clear Data</button>
      <button (click)="st.reload()" nz-button>Reload Data</button>
      <button (click)="st.clearStatus(); st.reload()" nz-button>Clear Status</button>
      <button (click)="st.setRow(0, { className: 'text-success' })" nz-button>Update Row ClassName</button>
    </div>
    <st #st [data]="users" [columns]="columns" (change)="change($event)" />
    <ng-template #customFilter let-f let-col="col" let-handle="handle">
      <div class="p-lg">
        <p>Custom body</p>
        <button nz-button nzType="primary" (click)="close(f, handle, true)">confirm</button>
        <button nz-button (click)="close(f, handle, false)">reset</button>
      </div>
    </ng-template>
  \`,
  standalone: true,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStCustomDataComponent implements OnInit {
  private readonly msg = inject(NzMessageService);
  users: STData[] = [];
  @ViewChild('customFilter', { static: true }) readonly customFilter!: TemplateRef<{
    $implicit: STColumnFilter;
    col: STColumn;
    handle: STColumnFilterHandle;
  }>;
  columns: STColumn[] = [];

  ngOnInit(): void {
    this.columns = [
      {
        title: '\u7F16\u53F7',
        index: 'id',
        type: 'checkbox',
        selections: [
          {
            text: '\u5C0F\u4E8E25\u5C81',
            select: data => data.forEach(item => (item.checked = item.age < 25))
          },
          {
            text: '\u5927\u4E8E25\u5C81',
            select: data => data.forEach(item => (item.checked = item.age >= 25))
          }
        ]
      },
      {
        title: '\u59D3\u540D',
        index: 'name',
        sort: {
          compare: (a, b) => a.name.length - b.name.length
        },
        filter: {
          type: 'keyword',
          placeholder: '\u8F93\u5165\u540E\u6309\u56DE\u8F66\u641C\u7D22',
          fn: (filter, record) => !filter.value || record.name.indexOf(filter.value) !== -1
        }
      },
      {
        title: '\u5E74\u9F84',
        index: 'age',
        sort: {
          compare: (a, b) => a.age - b.age
        },
        filter: {
          type: 'number',
          placeholder: '\u8303\u56F4 10 ~ 100 \u4E4B\u95F4',
          number: {
            min: 10,
            max: 100
          },
          fn: (filter, record) => (filter.value != null ? record.age >= +filter.value : true)
        }
      },
      {
        title: '\u72B6\u6001',
        type: 'badge',
        index: 'status',
        badge: {
          1: { text: 'Success', color: 'success' },
          2: { text: 'Error', color: 'error' },
          3: { text: 'Processing', color: 'processing' },
          4: { text: 'Default', color: 'default' },
          5: { text: 'Warning', color: 'warning' }
        },
        filter: {
          menus: [
            { text: 'Success', value: 1 },
            { text: 'Error', value: 2 }
          ],
          fn: (filter, record) => record.age >= filter.value[0] && record.age <= filter.value[1],
          multiple: true
        }
      },
      {
        title: 'Date',
        index: 'created',
        type: 'date',
        filter: {
          type: 'date',
          date: {
            mode: 'date',
            showToday: false,
            disabledDate: dateTimePickerUtil.disabledAfterDate()
          },
          fn: () => true
        }
      },
      {
        title: 'Custom',
        index: 'name',
        filter: {
          type: 'custom',
          icon: { type: 'search', theme: 'outline' },
          custom: this.customFilter,
          showOPArea: false,
          fn: (filter, record) => !filter.value || record.name.indexOf(filter.value) !== -1
        }
      }
    ];
    const data = Array(100)
      .fill({})
      .map((_, idx) => ({
        id: idx + 1,
        name: \`name \${idx + 1}\`,
        age: Math.ceil(Math.random() * 10) + 20,
        status: Math.floor(Math.random() * 5) + 1,
        created: new Date()
      }));
    of(data)
      .pipe(delay(500))
      .subscribe(res => (this.users = res));
  }

  close(f: STColumnFilter, handle: STColumnFilterHandle, result: boolean): void {
    this.msg.info(\`Process result: \${result}\${result ? '(only name 2)' : ''}\`);
    f.menus = [{ value: result ? 'name 2' : null }];
    handle.close(result);
  }

  change(e: STChange): void {
    console.log(e);
  }
}`,lang:"ts",componentName:"ComponentsStCustomDataComponent",point:1,name:"custom-data",urls:"packages/abc/st/demo/custom-data.md",type:"demo"},{id:"components-st-type",meta:{order:2,title:{"zh-CN":"\u5217\u7C7B\u578B","en-US":"Column type"}},summary:{"zh-CN":"<p>\u652F\u6301\u5341\u79CD\u4E0D\u540C\u5217\u7C7B\u578B\uFF1A\u884C\u53F7\u3001\u591A\u9009\u3001\u5355\u9009\u3001\u5FBD\u6807\u3001\u6807\u7B7E\u3001\u56FE\u7247\u3001\u6570\u5B57\u3001\u8D27\u5E01\u3001\u65E5\u671F\u3001\u5E03\u5C14\u5FBD\u7AE0\u3001\u679A\u4E3E\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u5217\u5B8C\u6210\u66F4\u590D\u6742\u6E32\u67D3\u3002</p>","en-US":"<p>Support for ten different column types: no, checkbox, radio, badge, tag, image, number, currency, date, boolean badge, enum.</p>"},code:`import { Component } from '@angular/core';

import { STColumn, STColumnBadge, STColumnTag, STData, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

const BADGE: STColumnBadge = {
  1: { text: '\u6210\u529F', color: 'success' },
  2: { text: '\u9519\u8BEF', color: 'error', tooltip: 'TIPS' },
  3: { text: '\u8FDB\u884C\u4E2D', color: 'processing' },
  4: { text: '\u9ED8\u8BA4', color: 'default' },
  5: { text: '\u8B66\u544A', color: 'warning' }
};
const TAG: STColumnTag = {
  1: { text: '\u6210\u529F', color: 'green' },
  2: { text: '\u9519\u8BEF', color: 'red' },
  3: { text: '\u8FDB\u884C\u4E2D', color: 'blue' },
  4: { text: '\u9ED8\u8BA4', color: '' },
  5: { text: '\u8B66\u544A', color: 'orange', tooltip: 'TIPS' }
};
const r = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);

@Component({
  selector: 'components-st-type',
  template: \`
    <button nz-button (click)="reload()">Reload</button>
    <st #st [data]="users" [columns]="columns" [page]="{ position: 'both' }" />
  \`,
  standalone: true,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStTypeComponent {
  users: STData[] = [];
  columns: STColumn[] = [
    { title: '\u884C\u53F7', type: 'no' },
    { title: '\u59D3\u540D', index: 'name' },
    { title: '\u5E74\u9F84', index: 'age', type: 'number' },
    { title: 'HTML', index: 'html', safeType: 'safeHtml' },
    { title: 'Text', index: 'html', safeType: 'text' },
    { title: 'tag', index: 'tag', type: 'tag', tag: TAG },
    { title: 'badge', index: 'badge', type: 'badge', badge: BADGE },
    { title: 'Enum', index: 'enum', type: 'enum', enum: { 1: '\u58F9', 2: '\u8D30', 3: '\u53C1' } },
    { title: 'yn', index: 'yn', type: 'yn' }
  ];

  reload(): void {
    this.users = Array(10)
      .fill({})
      .map((_, idx) => ({
        id: idx + 1,
        name: \`name \${idx + 1}\`,
        age: r(10, 50),
        tag: r(1, 5),
        badge: r(1, 5),
        enum: r(1, 3),
        yn: [true, false][r(1, 5) % 2],
        html: \`<strong>\${idx + 1}</strong> Other\`
      }));
  }

  constructor() {
    this.reload();
  }
}`,lang:"ts",componentName:"ComponentsStTypeComponent",point:2,name:"type",urls:"packages/abc/st/demo/type.md",type:"demo"},{id:"components-st-cell",meta:{order:3,title:{"zh-CN":"\u5355\u5143\u683C","en-US":"Cell"}},summary:{"zh-CN":"<p>\u4F7F\u7528 <code>cell</code> \u7EC4\u4EF6\u66F4\u4E30\u5BCC\u7684\u6E32\u67D3\u3002</p>","en-US":"<p>Use the <code>cell</code> component for richer rendering.</p>"},code:`import { Component, ViewChild } from '@angular/core';

import type { CellOptions } from '@delon/abc/cell';
import { STColumn, STComponent, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-st-cell',
  template: \`
    <button nz-button nzType="primary" (click)="setRow()">setRow Method</button>
    <st #st [widthMode]="{ type: 'strict' }" [data]="url" [req]="{ params: params }" [columns]="columns" />
  \`,
  standalone: true,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStCellComponent {
  url = \`/users?total=2&field=list\`;
  params = { a: 1, b: 2 };
  @ViewChild('st', { static: false }) private st!: STComponent;
  columns: STColumn[] = [
    { title: '\u7F16\u53F7', index: 'id', width: 55 },
    { title: '\u7C7B\u578B', index: 'type', width: 60, cell: { enum: { 1: '\u666E\u901A', 2: '\u4F1A\u5458', 3: '\u7BA1\u7406' } } },
    { title: '\u5934\u50CF', index: 'picture.thumbnail', width: 64, cell: { type: 'img' } },
    { title: '\u90AE\u7BB1', index: 'email', width: 120 },
    { title: '\u7535\u8BDD', index: 'phone', cell: { mask: '999****9999' } },
    {
      title: { text: '\u4F63\u91D1', optionalHelp: '\u8BA1\u7B97\u516C\u5F0F=\u8BA2\u5355\u91D1\u989D * 0.6%' },
      index: 'price',
      cell: {
        type: 'currency',
        unit: '\u5143'
      }
    },
    {
      title: '\u4EBA\u6C11\u5E01\u5199\u6CD5',
      index: 'total',
      cell: {
        type: 'cny'
      }
    },
    {
      title: 'Site',
      index: 'website',
      width: 100,
      cell: record => {
        return {
          tooltip: record.website,
          link: {
            url: record.website
          }
        } as CellOptions;
      }
    },
    { title: '\u53EF\u7528', index: 'disabled', width: 64, cell: { type: 'boolean' } },
    { title: '\u6CE8\u518C\u65F6\u95F4', index: 'registered', width: 180, cell: { type: 'date' } }
  ];

  setRow(): void {
    this.st.setRow(0, { price: 100000000 });
  }
}`,lang:"ts",componentName:"ComponentsStCellComponent",point:3,name:"cell",urls:"packages/abc/st/demo/cell.md",type:"demo"},{id:"components-st-checkbox",meta:{order:3,title:{"zh-CN":"\u53EF\u9009\u62E9","en-US":"Checkbox"}},summary:{"zh-CN":"<p>\u5229\u7528 <code>change</code> \u76D1\u542C\u6240\u9009\u7684\u6570\u636E\u3002</p>","en-US":"<p>Use <code>change</code> event get selected data.</p>"},code:`import { Component } from '@angular/core';

import { STChange, STColumn, STData, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-st-checkbox',
  template: \` <div class="mb-md">
      <button nz-button (click)="st.checkAll(true)">All</button>
      <button nz-button (click)="st.clearCheck()">Clean</button>
    </div>
    <st
      #st
      [data]="url"
      [columns]="columns"
      [req]="{ params: params }"
      [res]="{ process: dataProcess }"
      (change)="change($event)"
    />\`,
  standalone: true,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStCheckboxComponent {
  url = \`/users?total=100\`;
  params = { a: 1, b: 2 };
  columns: STColumn[] = [
    { title: '\u7F16\u53F7', index: 'id.value', type: 'checkbox' },
    { title: '\u5934\u50CF', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '\u90AE\u7BB1', index: 'email' },
    { title: '\u7535\u8BDD', index: 'phone' },
    { title: '\u6CE8\u518C\u65F6\u95F4', type: 'date', index: 'registered' }
  ];
  change(e: STChange): void {
    console.log('change', e);
  }
  dataProcess(data: STData[]): STData[] {
    return data.map((i, index) => {
      i.disabled = index === 0;
      if (index === 1) i.checked = true;
      return i;
    });
  }
}`,lang:"ts",componentName:"ComponentsStCheckboxComponent",point:4,name:"checkbox",urls:"packages/abc/st/demo/checkbox.md",type:"demo"},{id:"components-st-radio",meta:{order:3,title:{"zh-CN":"\u5355\u9009\u6846","en-US":"Radio"}},summary:{"zh-CN":"<p>\u5229\u7528 <code>change</code> \u76D1\u542C\u6240\u9009\u7684\u6570\u636E\u3002</p>","en-US":"<p>Use <code>change</code> event get selected data.</p>"},code:`import { Component } from '@angular/core';

import { STChange, STColumn, STData, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-st-radio',
  template: \` <div class="mb-md">
      <button nz-button (click)="st.setRow(1, { checked: true })">Radio second</button>
      <button nz-button (click)="st.clearRadio()">Clean</button>
    </div>
    <st
      #st
      [data]="url"
      [columns]="columns"
      [req]="{ params: params }"
      [res]="{ process: dataChange }"
      (change)="change($event)"
    />\`,
  standalone: true,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStRadioComponent {
  url = \`/users?total=300\`;
  params = { a: 1, b: 2 };
  columns: STColumn[] = [
    { title: '\u7F16\u53F7', index: 'id', type: 'radio', width: 70 },
    { title: '\u5934\u50CF', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '\u90AE\u7BB1', index: 'email' },
    { title: '\u7535\u8BDD', index: 'phone' },
    { title: '\u6CE8\u518C\u65F6\u95F4', type: 'date', index: 'registered' }
  ];

  change(ret: STChange): void {
    console.log('change', ret);
  }

  dataChange(data: STData[]): STData[] {
    return data.map((i, index) => {
      i.disabled = index === 0;
      i.hidden = index === 1;
      return i;
    });
  }
}`,lang:"ts",componentName:"ComponentsStRadioComponent",point:5,name:"radio",urls:"packages/abc/st/demo/radio.md",type:"demo"},{id:"components-st-contextmenu",meta:{order:4,title:{"zh-CN":"\u53F3\u952E\u83DC\u5355","en-US":"Context Menu"}},summary:{"zh-CN":"<p>\u5229\u7528 <code>contextmenu</code> \u5B9E\u73B0\u70B9\u51FB\u6574\u4E2A\u8868\u683C\u53F3\u952E\u83DC\u5355\u3002</p>","en-US":"<p>Use <code>contextmenu</code> to implement the contextmenu of the table.</p>"},code:`import { Component, inject } from '@angular/core';

import { STColumn, STContextmenuFn, STContextmenuItem, STContextmenuOptions, STModule } from '@delon/abc/st';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'components-st-contextmenu',
  template: \`
    <st
      #st
      [widthMode]="{ type: 'strict' }"
      [data]="url"
      [req]="{ params: params }"
      [columns]="columns"
      [contextmenu]="handleContextmenu"
    />
  \`,
  standalone: true,
  imports: [STModule]
})
export class ComponentsStContextmenuComponent {
  private readonly msg = inject(NzMessageService);
  url = \`/users?total=2&field=list\`;
  params = { a: 1, b: 2 };
  columns: STColumn[] = [
    { title: '\u7F16\u53F7', index: 'id', width: 80 },
    { title: '\u90AE\u7BB1', index: 'email', width: 80 },
    { title: '\u7535\u8BDD', index: 'phone' },
    { title: '\u6CE8\u518C\u65F6\u95F4', type: 'date', index: 'registered' }
  ];

  private show(options: STContextmenuOptions, item: STContextmenuItem): void {
    if (options.type === 'head') {
      this.msg.info(\`\u70B9\u51FB\u6807\u9898\uFF0C\u4E0B\u6807\u4E3A\uFF1A\${options.colIndex}\uFF0C\u5F53\u524D\u6309\u94AE\u4E3A\uFF1A\${item.text}\`);
    } else {
      this.msg.info(
        \`\u70B9\u51FB\u5355\u5143\u683C\uFF0C\u884C\u4E0B\u6807\u4E3A\uFF1A\${options.rowIndex}\uFF0C\u5217\u4E0B\u6807\u4E3A\uFF1A\${options.colIndex}\uFF0C\u5F53\u524D\u6309\u94AE\u4E3A\uFF1A\${item.text}\`
      );
    }
  }

  handleContextmenu: STContextmenuFn = (options): STContextmenuItem[] => {
    if (options.type === 'head') {
      return [
        {
          text: 'Click me',
          fn: item => this.show(options, item)
        }
      ];
    }
    return [
      {
        text: 'Edit',
        fn: item => this.show(options, item)
      },
      {
        text: 'View',
        fn: item => this.show(options, item)
      },
      {
        text: 'Next',
        children: [
          {
            text: 'Nothing',
            fn: item => this.show(options, item)
          },
          {
            text: 'asdf',
            fn: item => this.show(options, item)
          }
        ]
      }
    ];
  };
}`,lang:"ts",componentName:"ComponentsStContextmenuComponent",point:6,name:"contextmenu",urls:"packages/abc/st/demo/contextmenu.md",type:"demo"},{id:"components-st-edit-row",meta:{order:4,title:{"en-US":"Editable Rows","zh-CN":"\u53EF\u7F16\u8F91\u884C"}},summary:{"zh-CN":"<p>\u5B9A\u5236\u5E26\u884C\u7F16\u8F91\u529F\u80FD\u7684\u8868\u683C\uFF0C\u81EA\u7531\u64CD\u4F5C\u884C\u5185\u5BB9\u3002</p>","en-US":"<p>Table with editable rows.</p>"},code:`import { Component, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { STColumn, STComponent, STData, STModule } from '@delon/abc/st';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'components-st-edit-row',
  template: \`
    <st #st [data]="users" [columns]="columns">
      <ng-template st-row="nameTpl" let-item let-index="index">
        @if (item.edit) {
          <input nz-input [ngModel]="item.name" (ngModelChange)="st.setRow(index, { name: $event })" />
        } @else {
          {{ item.name }}
        }
      </ng-template>
      <ng-template st-row="ageTpl" let-item let-index="index">
        @if (item.edit) {
          <nz-input-number [ngModel]="item.age" (ngModelChange)="st.setRow(index, { age: $event })" />
        } @else {
          {{ item.age }}
        }
      </ng-template>
      <ng-template st-row="enabledTpl" let-item let-index="index">
        @if (item.edit) {
          <nz-switch [ngModel]="item.enabled" (ngModelChange)="st.setRow(index, { enabled: $event })" />
        } @else {
          {{ item.enabled ? 'Y' : 'N' }}
        }
      </ng-template>
    </st>
  \`,
  standalone: true,
  imports: [STModule, NzInputModule, FormsModule, NzInputNumberModule, NzSwitchModule]
})
export class ComponentsStEditRowComponent {
  private readonly msg = inject(NzMessageService);
  @ViewChild('st') private st!: STComponent;
  users: STData[] = Array(10)
    .fill({})
    .map((_, idx) => {
      return {
        id: idx + 1,
        name: \`name \${idx + 1}\`,
        age: Math.ceil(Math.random() * 10) + 20,
        enabled: idx % 2 === 0
      };
    });
  columns: STColumn[] = [
    { title: '\u7F16\u53F7', index: 'id' },
    { title: '\u59D3\u540D', index: 'name', render: 'nameTpl' },
    { title: '\u5E74\u9F84', index: 'age', render: 'ageTpl' },
    { title: '\u542F\u7528', index: 'enabled', render: 'enabledTpl' },
    {
      title: 'OP',
      buttons: [
        {
          text: \`Edit\`,
          iif: i => !i.edit,
          click: i => this.updateEdit(i, true)
        },
        {
          text: \`Save\`,
          iif: i => i.edit,
          click: i => {
            this.submit(i);
          }
        },
        {
          text: \`Cancel\`,
          iif: i => i.edit,
          click: i => this.updateEdit(i, false)
        }
      ]
    }
  ];

  private submit(i: STData): void {
    this.msg.success(JSON.stringify(this.st.pureItem(i)));
    this.updateEdit(i, false);
  }

  private updateEdit(i: STData, edit: boolean): void {
    this.st.setRow(i, { edit }, { refreshSchema: true });
  }
}`,lang:"ts",componentName:"ComponentsStEditRowComponent",point:7,name:"edit-row",urls:"packages/abc/st/demo/edit-row.md",type:"demo"},{id:"components-st-form",meta:{order:4,title:{"zh-CN":"\u641C\u7D22\u8868\u5355","en-US":"Search form"}},summary:{"zh-CN":"<p>\u914D\u5408 <code>load()</code> & <code>reset()</code> \u5B9E\u73B0\u641C\u7D22\u8868\u5355\u3002</p>","en-US":"<p>Implement search form with <code>load()</code> & <code>reset()</code>.</p>"},code:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { STColumn, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'components-st-form',
  template: \`
    <div class="mb-md">
      <input
        nz-input
        [(ngModel)]="params.name"
        name="name"
        nzPlaceHolder="\u8BF7\u8F93\u5165\u59D3\u540D"
        style="width: 100px;"
        class="mr-sm"
      />
      <button nz-button (click)="st.load(1)" [nzType]="'primary'">\u641C\u7D22</button>
      <button nz-button (click)="params = {}; st.reset()">\u91CD\u7F6E</button>
    </div>
    <st #st [data]="url" [req]="{ params: params }" [columns]="columns" />
  \`,
  standalone: true,
  imports: [STModule, NzInputModule, FormsModule, NzButtonModule]
})
export class ComponentsStFormComponent {
  url = \`/users?total=100\`;
  params: { name?: string } = { name: 'asdf' };
  columns: STColumn[] = [
    { title: '\u7F16\u53F7', index: 'id', default: '-' },
    { title: '\u5934\u50CF', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '\u90AE\u7BB1', index: 'email' },
    { title: '\u7535\u8BDD', index: 'phone' },
    { title: '\u6CE8\u518C\u65F6\u95F4', type: 'date', index: 'registered' }
  ];
}`,lang:"ts",componentName:"ComponentsStFormComponent",point:8,name:"form",urls:"packages/abc/st/demo/form.md",type:"demo"},{id:"components-st-row-op",meta:{order:4,title:{"zh-CN":"\u884C\u64CD\u4F5C","en-US":"Row OP"}},summary:{"zh-CN":"<p>\u5229\u7528 <code>addRow</code>\u3001<code>removeRow</code>\u3001<code>setRow</code> \u65B9\u6CD5\u5BF9\u884C\u7684\u64CD\u4F5C\u3002</p><blockquote><p>\u6253\u5F00\u63A7\u5236\u9762\u677F\u4E86\u89E3\u6253\u5370\u660E\u7EC6\u3002</p></blockquote>","en-US":"<p>Operations on rows using <code>addRow</code>, <code>removeRow</code>, <code>setRow</code> methods.</p><blockquote><p>Open the control panel for print details.</p></blockquote>"},code:`import { Component } from '@angular/core';

import { STChange, STClickRowClassNameType, STColumn, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-st-row-op',
  template: \` <button nz-button (click)="st.addRow({ id: 1000, email: 'add@email.com', phone: '123' })"> addRow</button>
    <button nz-button (click)="st.removeRow(0)"> removeRow index: 0 </button>
    <button nz-button (click)="st.setRow(0, { className: 'text-success' })"> Via setRow method </button>
    <st
      #st
      [data]="url"
      [req]="{ params: params }"
      [columns]="columns"
      (change)="_click($event)"
      [clickRowClassName]="clickRowClassName"
    />\`,
  standalone: true,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStRowOpComponent {
  url = \`/users?results=3\`;
  params = { a: 1, b: 2 };
  clickRowClassName: STClickRowClassNameType = { exclusive: true, fn: () => 'text-error' };
  columns: STColumn[] = [
    { title: '\u7F16\u53F7', index: 'id' },
    { title: '\u90AE\u7BB1', index: 'email' },
    { title: '\u7535\u8BDD', index: 'phone' }
  ];

  _click(e: STChange): void {
    console.log('click', e);
  }
}`,lang:"ts",componentName:"ComponentsStRowOpComponent",point:9,name:"row-op",urls:"packages/abc/st/demo/row-op.md",type:"demo"},{id:"components-st-sort",meta:{order:5,title:{"zh-CN":"\u540E\u7AEF\u7B5B\u9009\u548C\u6392\u5E8F","en-US":"Backend filtering and sorting"}},summary:{"zh-CN":"<p>\u5229\u7528 <code>multiSort</code> \u652F\u6301\u591A\u5B57\u6BB5\u6392\u5E8F\u3002</p>","en-US":"<p>Using <code>multiSort</code> supported multi-field sorting.</p>"},code:`import { Component } from '@angular/core';

import { STColumn, STData, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

interface UserData extends STData {
  name: {
    last: string;
    first: string;
  };
}

@Component({
  selector: 'components-st-sort',
  template: \`
    <button nz-button (click)="st.reset()">\u91CD\u7F6E</button>
    <st #st [data]="url" [req]="{ params: params }" [columns]="columns" multiSort />
  \`,
  standalone: true,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStSortComponent {
  url = \`/users?total=200\`;
  params = { a: 1, b: 2 };
  columns: Array<STColumn<UserData>> = [
    { title: '\u7F16\u53F7', index: 'id' },
    { title: '\u5934\u50CF', type: 'img', width: 60, index: 'picture.thumbnail' },
    {
      title: '\u59D3\u540D',
      index: 'name.last',
      format: (item, _col, index) => \`\${index + 1}: \${item.name.last} \${item.name.first}\`,
      sort: true
    },
    {
      title: '\u56FD\u5BB6',
      index: 'nat',
      filter: {
        menus: [
          { text: '\u4E2D\u56FD', value: 'CH' },
          { text: '\u7F8E\u56FD', value: 'US' },
          { text: '\u5FB7\u56FD', value: 'DE' }
        ]
      },
      sort: true
    },
    {
      title: '\u6027\u522B',
      index: 'gender',
      filter: {
        menus: [
          { text: 'male', value: 'male' },
          { text: 'female', value: 'female' }
        ],
        multiple: false
      },
      sort: true
    },
    { title: '\u6CE8\u518C\u65F6\u95F4', type: 'date', index: 'registered' }
  ];
}`,lang:"ts",componentName:"ComponentsStSortComponent",point:10,name:"sort",urls:"packages/abc/st/demo/sort.md",type:"demo"},{id:"components-st-expand",meta:{order:6,title:{"zh-CN":"\u53EF\u5C55\u5F00","en-US":"Expandable Row"}},summary:{"zh-CN":"<p>\u4F7F\u7528 <code>#expand</code> \u6A21\u677F\u5B9E\u73B0\u53EF\u5C55\u5F00\uFF0C\u5141\u8BB8\u63A5\u6536 <code>item</code>\u3001<code>index</code>\u3001<code>column</code> \u4E09\u4E2A\u503C\u3002\u9644\u52A0\u53EF\u5B9E\u73B0\uFF1A\u5D4C\u5957\u5B50\u8868\u683C\u3002</p>","en-US":"<p>Use <code>#expand</code> template implement expandable, allowing you to receive three values: <code>item</code>, <code>index</code>, <code>column</code>. Additional achievable: nested subtables.</p>"},code:`import { Component } from '@angular/core';

import { STColumn, STData, STModule } from '@delon/abc/st';

@Component({
  selector: 'components-st-expand',
  template: \`
    <st [data]="users" [columns]="columns" [expand]="expand" expandRowByClick expandAccordion>
      <ng-template #expand let-item let-index="index" let-column="column">
        {{ item.description }}
      </ng-template>
    </st>
  \`,
  standalone: true,
  imports: [STModule]
})
export class ComponentsStExpandComponent {
  users: STData[] = Array(10)
    .fill({})
    .map((_, idx) => ({
      id: idx + 1,
      name: \`name \${idx + 1}\`,
      age: Math.ceil(Math.random() * 10) + 20,
      // \u662F\u5426\u663E\u793A\u5C55\u5F00\u6309\u94AE
      showExpand: idx !== 0,
      description: \`\${idx + 1}. My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.\`
    }));
  columns: STColumn[] = [
    { title: '\u7F16\u53F7', index: 'id' },
    { title: '\u59D3\u540D', index: 'name' },
    { title: '\u5E74\u9F84', index: 'age' },
    {
      buttons: [
        {
          text: 'Button'
        }
      ]
    }
  ];
}`,lang:"ts",componentName:"ComponentsStExpandComponent",point:11,name:"expand",urls:"packages/abc/st/demo/expand.md",type:"demo"},{id:"components-st-render",meta:{order:6,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u5217","en-US":"Custom columns"}},summary:{"zh-CN":`<p>\u521B\u5EFA\u4E00\u4E2A\u5E26\u6709 <code>st-row="custom-name"</code> \u7684 <code>ng-template</code>\uFF0C\u5E76\u5728\u5217\u63CF\u8FF0 <code>render: 'custom-name'</code> \u6307\u5B9A\u540D\u79F0\uFF1B\u6A21\u677F\u5141\u8BB8\u63A5\u6536 <code>item</code>\u3001<code>index</code>\u3001<code>column</code> \u4E09\u4E2A\u503C\u3002</p><p>\u5982\u679C\u6307\u5B9A <code>type="title"</code> \u8868\u793A\u662F\u5BF9\u6807\u9898\u81EA\u5B9A\u4E49\u5217\u3002\u9644\u52A0\u53EF\u5B9E\u73B0\uFF1A\u8868\u5934\u5206\u7EC4\u3002</p>`,"en-US":`<p>Create a <code>ng-template</code> with <code>st-row="custom-name"</code> and specify the name in the column description <code>render: 'custom-name'</code>; template receive <code>item</code>, <code>index</code>, <code>column</code> three values.</p><p>Specifying <code>type="title"</code> means to customize the column for the title. Additional achievable: header grouping.</p>`},code:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { STColumn, STData, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'components-st-render',
  template: \`
    <div class="mb-md">
      <nz-checkbox-group
        [(ngModel)]="customColumns"
        name="customColumns"
        (ngModelChange)="st.resetColumns({ emitReload: true })"
      />
    </div>
    <st #st [data]="users" [columns]="columns">
      <ng-template st-row="customTitle" type="title" let-c>
        {{ c.title.text }}
        <span nz-dropdown [nzDropdownMenu]="menuTpl" nzTrigger="click" [nzClickHide]="false" nzPlacement="bottomRight">
          <i nz-icon nzType="down"></i>
        </span>
        <nz-dropdown-menu #menuTpl="nzDropdownMenu">
          <div class="ant-table-filter-dropdown p-sm">
            <input
              type="text"
              nz-input
              placeholder="Search name"
              [(ngModel)]="searchValue"
              name="searchValue"
              class="width-sm mr-sm"
            />
            <button nz-button [nzType]="'primary'" (click)="st.load(2)">Search</button>
          </div>
        </nz-dropdown-menu>
      </ng-template>
      <ng-template st-row="custom" let-item let-index="index">
        <span nz-tooltip [nzTooltipTitle]="'\u5E74\u9F84\uFF1A' + item.age">tooltip: {{ item.age }}-{{ index }}</span>
      </ng-template>
    </st>
  \`,
  standalone: true,
  imports: [
    STModule,
    NzButtonModule,
    NzCheckboxModule,
    FormsModule,
    NzDropDownModule,
    NzIconModule,
    NzInputModule,
    NzToolTipModule
  ]
})
export class ComponentsStRenderComponent {
  searchValue?: string;
  users: STData[] = Array(10)
    .fill({})
    .map((_, idx) => {
      return {
        id: idx + 1,
        name: \`name \${idx + 1}\`,
        age: Math.ceil(Math.random() * 10) + 20
      };
    });
  columns: STColumn[] = [
    { title: '\u7F16\u53F7', index: 'id' },
    { title: '\u59D3\u540D', index: 'name', iif: () => this.isChoose('name') },
    { title: '\u5E74\u9F84', index: 'age', iif: () => this.isChoose('age') },
    {
      title: '\u81EA\u5B9A\u4E49',
      renderTitle: 'customTitle',
      render: 'custom',
      iif: () => this.isChoose('custom')
    }
  ];
  customColumns = [
    { label: '\u59D3\u540D', value: 'name', checked: true },
    { label: '\u5E74\u9F84', value: 'age', checked: true },
    { label: '\u81EA\u5B9A\u4E49', value: 'custom', checked: true }
  ];

  isChoose(key: string): boolean {
    return !!this.customColumns.find(w => w.value === key && w.checked);
  }
}`,lang:"ts",componentName:"ComponentsStRenderComponent",point:12,name:"render",urls:"packages/abc/st/demo/render.md",type:"demo"},{id:"components-st-buttons",meta:{order:7,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u6309\u94AE\u7EC4","en-US":"Custom Buttons"}},summary:{"zh-CN":'<p>\u900F\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u4EA7\u751F\u4E00\u7EC4\u65E5\u5E38\u6309\u94AE\u7EC4\uFF08\u76EE\u6807\u7EC4\u4EF6\u793A\u4F8B\uFF1A<a target="_blank" href="https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/modal.component.ts" data-url="https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/modal.component.ts">DemoModalComponent</a>\u3001<a target="_blank" href="https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/drawer.component.ts" data-url="https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/drawer.component.ts">DemoDrawerComponent</a>\uFF09\u3002</p><blockquote><p>\u5BF9\u8BDD\u6846\u7531<a href="/theme/modal" data-url="/theme/modal">ModalHelper</a>\u5904\u7406\uFF0C\u62BD\u5C49\u7531<a href="/theme/drawer" data-url="/theme/drawer">DrawerHelper</a>\u5904\u7406\u3002</p></blockquote>',"en-US":'<p>Build a button group with the <code>buttons</code> property.</p><p>Generate a set of button group with a simple configuration (example code: <a target="_blank" href="https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/modal. Component.ts" data-url="https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/modal. Component.ts">DemoModalComponent</a>, <a target="_blank" href="https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/drawer.component.ts" data-url="https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/drawer.component.ts">DemoDrawerComponent</a>).</p><blockquote><p>The modal is handled by <a href="/theme/modal" data-url="/theme/modal">ModalHelper</a> and the drawer is handled by <a href="/theme/drawer" data-url="/theme/drawer">DrawerHelper</a>.</p></blockquote>'},code:`import { Component, ViewChild, inject } from '@angular/core';

import { DemoDrawerComponent, DemoModalComponent } from '@shared';

import { STChange, STColumn, STComponent, STData, STModule } from '@delon/abc/st';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'components-st-buttons',
  template: \` <st #st [data]="users" [columns]="columns" (change)="change($event)" /> \`,
  standalone: true,
  imports: [STModule]
})
export class ComponentsStButtonsComponent {
  private readonly msg = inject(NzMessageService);
  @ViewChild('st') readonly st!: STComponent;

  users: STData[] = Array(10)
    .fill({})
    .map((_, idx) => ({
      id: idx + 1,
      name: \`name \${idx + 1}\`,
      age: Math.ceil(Math.random() * 10) + 20
    }));
  columns: STColumn[] = [
    { title: '\u5E8F\u53F7', type: 'no' },
    { title: '\u7F16\u53F7', index: 'id' },
    { title: '\u59D3\u540D', index: 'name' },
    { title: '\u5E74\u9F84', index: 'age' },
    {
      title: '\u64CD\u4F5C\u533A',
      buttons: [
        {
          text: i => (i.ok ? 'Click' : 'Edit'),
          icon: i => ({ type: i.ok ? 'edit' : 'delete' }),
          className: i => (i.ok ? 'text-error' : null),
          type: 'modal',
          modal: {
            component: DemoModalComponent
          },
          click: (i, modal) => {
            this.msg.success(\`\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\uFF0C\u56DE\u4F20\u503C\uFF1A\${JSON.stringify(modal)}\`);
            // \u89E6\u53D1\u66F4\u65B0\u6309\u94AE\u7684\u6587\u672C\u3001\u989C\u8272\u3001Icon
            this.st.setRow(i, { ok: !i.ok });
          }
        },
        {
          text: 'Drawer',
          type: 'drawer',
          drawer: {
            title: '\u7F16\u8F91',
            component: DemoDrawerComponent
          },
          click: (_record, modal) => this.msg.success(\`\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\uFF0C\u56DE\u4F20\u503C\uFF1A\${JSON.stringify(modal)}\`)
        },
        {
          icon: 'check-circle',
          click: record => this.msg.info(\`check-\${record.name}\`),
          iif: record => record.id % 2 === 0,
          iifBehavior: 'disabled',
          tooltip: \`Is disabled button\`
        },
        {
          icon: 'delete',
          type: 'del',
          pop: {
            title: 'Yar you sure?',
            okType: 'danger',
            icon: 'star'
          },
          click: (record, _modal, comp) => {
            this.msg.success(\`\u6210\u529F\u5220\u9664\u3010\${record.name}\u3011\`);
            comp!.removeRow(record);
          },
          iif: record => record.id % 2 === 0
        },
        {
          text: '\u66F4\u591A',
          children: [
            {
              text: record => (record.id === 1 ? \`\u8FC7\u671F\` : \`\u6B63\u5E38\`),
              click: record => this.msg.error(\`\${record.id === 1 ? \`\u8FC7\u671F\` : \`\u6B63\u5E38\`}\u3010\${record.name}\u3011\`)
            },
            {
              text: \`\u5BA1\u6838\`,
              click: record => this.msg.info(\`check-\${record.name}\`),
              iif: record => record.id % 2 === 0,
              iifBehavior: 'disabled',
              tooltip: 'This is tooltip'
            },
            {
              type: 'divider'
            },
            {
              text: \`\u91CD\u65B0\u5F00\u59CB\`,
              icon: 'edit',
              click: record => this.msg.success(\`\u91CD\u65B0\u5F00\u59CB\u3010\${record.name}\u3011\`)
            }
          ]
        }
      ]
    }
  ];

  change(e: STChange): void {
    console.log(e);
  }
}`,lang:"ts",componentName:"ComponentsStButtonsComponent",point:13,name:"buttons",urls:"packages/abc/st/demo/buttons.md",type:"demo"},{id:"components-st-widget",meta:{order:7,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6","en-US":"Custom Widgets"}},summary:{"zh-CN":'<p>\u7C7B\u578B\u4E3A <code>widget</code> \u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6\uFF0C\u4F8B\u5982\u70B9\u51FB\u5934\u50CF\u5904\u7406\uFF0C\u67E5\u770B<a target="_blank" href="https://github.com/ng-alain/delon/blob/master/src/app/shared/st-widget/img.ts" data-url="https://github.com/ng-alain/delon/blob/master/src/app/shared/st-widget/img.ts">\u6E90\u4EE3\u7801</a>\u3002</p>',"en-US":'<p>The type is <code>widget</code> custom widget, eg: Click on Avatar effect, View <a target="_blank" href="https://github.com/ng-alain/delon/blob/master/src/app/shared/st-widget/img.ts" data-url="https://github.com/ng-alain/delon/blob/master/src/app/shared/st-widget/img.ts">source code</a>.</p>'},code:`import { Component, ViewChild } from '@angular/core';

import { STColumn, STComponent, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-st-widget',
  template: \`
    <div class="mb-md">
      <button (click)="st.clear()" nz-button>Clear Data</button>
      <button (click)="st.reload()" nz-button>Reload Data</button>
      <button (click)="st.clearStatus(); st.reload()" nz-button>Clear Status</button>
      <button (click)="changeImg()" nz-button>Change Img Data</button>
    </div>
    <st #st [data]="url" [columns]="columns" />
  \`,
  standalone: true,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStWidgetComponent {
  url = \`/users?total=100\`;
  @ViewChild('st', { static: false }) private st!: STComponent;
  columns: STColumn[] = [
    { title: '\u7F16\u53F7', index: 'id', width: 80 },
    {
      title: '\u81EA\u5B9A\u4E49\u5934\u50CF',
      type: 'widget',
      widget: { type: 'img', params: ({ record }) => ({ img: record.picture.thumbnail }) },
      width: 150
    },
    { title: '\u90AE\u7BB1', index: 'email' }
  ];

  changeImg(): void {
    this.st.setRow(
      0,
      { picture: { thumbnail: 'https://ng-alain.com/assets/img/logo-color.svg' } },
      { refreshSchema: true, emitReload: false }
    );
  }
}`,lang:"ts",componentName:"ComponentsStWidgetComponent",point:14,name:"widget",urls:"packages/abc/st/demo/widget.md",type:"demo"},{id:"components-st-colspan-rowspan",meta:{order:8,title:{"en-US":"colSpan and rowSpan","zh-CN":"\u8868\u683C\u884C/\u5217\u5408\u5E76"}},summary:{"zh-CN":"<p>\u8868\u683C\u652F\u6301\u884C/\u5217\u5408\u5E76\uFF0C\u4F7F\u7528 <code>onCell</code> \u8FDB\u884C\u8BBE\u7F6E\uFF0C\u82E5\u8FD4\u56DE <code>colSpan</code> \u6216\u8005 <code>rowSpan</code> \u8BBE\u503C\u4E3A 0 \u65F6\uFF0C\u8BBE\u7F6E\u7684\u8868\u683C\u4E0D\u4F1A\u6E32\u67D3\u3002</p>","en-US":"<p>The table supports row/column merging, use <code>onCell</code> to set, if return <code>colSpan</code> or <code>rowSpan</code> is set to 0, the set table will not be rendered.</p>"},code:`import { Component } from '@angular/core';

import { STColumn, STData, STModule, STOnCellResult } from '@delon/abc/st';

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const sharedOnCell = (_: STData, index: number): STOnCellResult => {
  if (index === 1) {
    return { colSpan: 0 };
  }

  return {};
};

@Component({
  selector: 'components-st-colspan-rowspan',
  template: \` <st #st [data]="url" [ps]="5" [req]="{ params: params }" [columns]="columns" bordered size="middle" />\`,
  standalone: true,
  imports: [STModule]
})
export class ComponentsStColspanRowspanComponent {
  url = \`/users?total=2&field=list\`;
  params = { a: 1, b: 2 };

  columns: STColumn[] = [
    { title: '\u7F16\u53F7', index: 'id', sort: true, width: 100 },
    { title: '\u5934\u50CF', type: 'img', index: 'picture.thumbnail', width: 60 },
    {
      title: '\u90AE\u7BB1',
      index: 'email',
      onCell: (_, index) => ({
        colSpan: index === 1 ? 5 : 1
      })
    },
    {
      title: 'first',
      index: 'name.first',
      sort: true,
      className: 'text-center',
      onCell: (_, index) => {
        if (index === 3) {
          return { rowSpan: 2 };
        }
        // These two are merged into above cell
        if (index === 4) {
          return { rowSpan: 0 };
        }
        if (index === 1) {
          return { colSpan: 0 };
        }

        return {};
      }
    },
    { title: 'last', index: 'name.last', onCell: sharedOnCell }
  ];
}`,lang:"ts",componentName:"ComponentsStColspanRowspanComponent",point:15,name:"colspan-rowspan",urls:"packages/abc/st/demo/colspan-rowspan.md",type:"demo"},{id:"components-st-fixed",meta:{order:8,title:{"zh-CN":"\u56FA\u5B9A\u5217","en-US":"Fixed columns"}},summary:{"zh-CN":'<p>\u5BF9\u4E8E\u5217\u6570\u5F88\u591A\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>left</code> \u548C <code>right</code> \u56FA\u5B9A\u524D\u540E\u7684\u5217\uFF0C\u6A2A\u5411\u6EDA\u52A8\u67E5\u770B\u5176\u5B83\u6570\u636E\uFF0C\u9700\u8981\u548C <code>scroll.x</code> \u914D\u5408\u4F7F\u7528\u3002</p><blockquote><p>\u56FA\u5B9A\u5217\u4F7F\u7528\u4E86 <code>sticky</code> \u5C5E\u6027\uFF0C\u6D4F\u89C8\u5668\u652F\u6301\u60C5\u51B5\u53EF\u4EE5\u53C2\u8003<a target="_blank" href="https://caniuse.com/#feat=css-sticky" data-url="https://caniuse.com/#feat=css-sticky">\u8FD9\u91CC</a></p><ul><li><p>\u82E5\u5217\u5934\u4E0E\u5185\u5BB9\u4E0D\u5BF9\u9F50\u6216\u51FA\u73B0\u5217\u91CD\u590D\uFF0C\u8BF7\u6307\u5B9A\u5217\u7684\u5BBD\u5EA6 <code>width</code></p></li><li><p>\u5EFA\u8BAE\u6307\u5B9A <code>scroll.x</code> \u4E3A\u5927\u4E8E\u8868\u683C\u5BBD\u5EA6\u7684\u56FA\u5B9A\u503C\u6216\u767E\u5206\u6BD4\u3002\u6CE8\u610F\uFF0C\u4E14\u975E\u56FA\u5B9A\u5217\u5BBD\u5EA6\u4E4B\u548C\u4E0D\u8981\u8D85\u8FC7 <code>scroll.x</code></p></li></ul></blockquote>',"en-US":'<p>To fix some columns and scroll inside other columns, and you must set <code>scroll.x</code>, <code>left</code> and <code>right</code> meanwhile.</p><blockquote><p>We use <code>sticky</code> property to fixed column\uFF0C<a target="_blank" href="https://caniuse.com/#feat=css-sticky" data-url="https://caniuse.com/#feat=css-sticky">browsers support</a>.</p><ul><li><p>Specify the <code>width</code> of th if header and cell do not align properly.</p></li><li><p>A fixed value which is greater than table width for <code>scroll.x</code> is recommended. The sum of unfixed columns should not greater than <code>scroll.x</code>.</p></li></ul></blockquote>'},code:`import { Component } from '@angular/core';

import { STColumn, STData, STModule } from '@delon/abc/st';

@Component({
  selector: 'components-st-fixed',
  template: \` <st [data]="users" [columns]="columns" [scroll]="{ x: '1300px' }" /> \`,
  standalone: true,
  imports: [STModule]
})
export class ComponentsStFixedComponent {
  users: STData[] = Array(10)
    .fill({})
    .map((_, idx) => {
      return {
        id: idx + 1,
        name: \`name \${idx + 1}\`,
        age: Math.ceil(Math.random() * 10) + 20
      };
    });
  columns: STColumn[] = [
    { title: '\u7F16\u53F71', index: 'id', fixed: 'left', width: 100 },
    { title: '\u7F16\u53F72', index: 'id', fixed: 'left', width: 100 },
    { title: '\u7F16\u53F73', index: 'id', fixed: 'left', width: 100 },
    { title: '\u7F16\u53F74', index: 'id' },
    { title: '\u7F16\u53F75', index: 'id' },
    { title: '\u7F16\u53F76', index: 'id' },
    { title: '\u7F16\u53F77', index: 'id' },
    { title: '\u7F16\u53F78', index: 'id' },
    { title: '\u7F16\u53F78', index: 'id' },
    { title: '\u7F16\u53F78', index: 'id' },
    { title: '\u7F16\u53F78', index: 'id' },
    { title: '\u7F16\u53F78', index: 'id' },
    { title: '\u59D3\u540D10', index: 'name', fixed: 'right', width: 100 },
    { title: '\u59D3\u540D11', index: 'name', fixed: 'right', width: 100 },
    { title: '\u5E74\u9F8412', index: 'age', fixed: 'right', width: 100 }
  ];
}`,lang:"ts",componentName:"ComponentsStFixedComponent",point:16,name:"fixed",urls:"packages/abc/st/demo/fixed.md",type:"demo"},{id:"components-st-grouping-columns",meta:{order:8,title:{"en-US":"Grouping table head","zh-CN":"\u8868\u5934\u5206\u7EC4"}},summary:{"zh-CN":"<p><code>columns[n]</code> \u53EF\u4EE5\u5185\u5D4C <code>children</code>\uFF0C\u4EE5\u6E32\u67D3\u5206\u7EC4\u8868\u5934\u3002</p>","en-US":"<p>Group table head with <code>columns[n].children</code>.</p>"},code:`import { Component } from '@angular/core';

import { STColumn, STModule } from '@delon/abc/st';

@Component({
  selector: 'components-st-grouping-columns',
  template: \` <st #st [data]="url" [req]="{ params: params }" [columns]="columns" bordered size="middle" />\`,
  standalone: true,
  imports: [STModule]
})
export class ComponentsStGroupingColumnsComponent {
  url = \`/users?total=2&field=list\`;
  params = { a: 1, b: 2 };
  columns: STColumn[] = [
    { title: '\u7F16\u53F7', index: 'id', sort: true, width: 100 },
    {
      title: 'Other',
      children: [
        { title: '\u5934\u50CF', type: 'img', index: 'picture.thumbnail', width: 60 },
        { title: '\u90AE\u7BB1', index: 'email' },
        {
          title: '\u59D3\u540D',
          sort: true,
          children: [
            { title: 'first', index: 'name.first', sort: true },
            { title: 'last', index: 'name.last' }
          ]
        }
      ]
    }
  ];
}`,lang:"ts",componentName:"ComponentsStGroupingColumnsComponent",point:17,name:"grouping-columns",urls:"packages/abc/st/demo/grouping-columns.md",type:"demo"},{id:"components-st-responsive",meta:{order:9,title:{"zh-CN":"\u54CD\u5E94\u5F0F","en-US":"Responsive"}},summary:{"zh-CN":"<p>\u5C0F\u5C4F\u5E55\u4E0B\u5C06\u4EE5\u54CD\u5E94\u6A21\u5F0F\u5806\u53E0\u663E\u793A\uFF0C<code>responsiveHideHeaderFooter</code> \u5C5E\u6027\u53EF\u4EE5\u4F7F\u5927\u5C4F\u5E55\u4E0D\u663E\u793A\u5934\u548C\u5C3E\uFF0C\u53CD\u4E4B\u3002</p>","en-US":"<p>Table columns are displayed as stacked in responsive mode if the screen size becomes smaller.</p>"},code:`import { Component } from '@angular/core';

import { STColumn, STModule } from '@delon/abc/st';

@Component({
  selector: 'components-st-responsive',
  template: \` <st
    [data]="url"
    [req]="{ params: params }"
    [columns]="columns"
    header="The header"
    footer="The footer"
    responsiveHideHeaderFooter
  />\`,
  standalone: true,
  imports: [STModule]
})
export class ComponentsStResponsiveComponent {
  url = \`/users?total=100\`;
  params = { a: 1, b: 2 };
  columns: STColumn[] = [
    { title: '\u7F16\u53F7', index: 'id' },
    { title: '\u5934\u50CF', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '\u90AE\u7BB1', index: 'email' },
    { title: '\u7535\u8BDD', index: 'phone' },
    { title: '\u6CE8\u518C\u65F6\u95F4', type: 'date', index: 'registered' }
  ];
}`,lang:"ts",componentName:"ComponentsStResponsiveComponent",point:18,name:"responsive",urls:"packages/abc/st/demo/responsive.md",type:"demo"},{id:"components-st-statistical",meta:{order:10,title:{"zh-CN":"\u7EDF\u8BA1","en-US":"Statistical"}},summary:{"zh-CN":"<p>\u652F\u6301 <code>count</code>\u3001<code>distinctCount</code>\u3001<code>sum</code>\u3001<code>average</code>\u3001<code>max</code>\u3001<code>min</code>\u3001\u81EA\u5B9A\u4E49\u7EDF\u8BA1\u65B9\u6CD5\u3002</p>","en-US":"<p>Support <code>count</code>, <code>distinctCount</code>, <code>sum</code>, <code>average</code>, <code>max</code>, <code>min</code> or custom function statistics methods.</p>"},code:`import { Component } from '@angular/core';

import { STColumn, STData, STModule } from '@delon/abc/st';
import { CurrencyPricePipe } from '@delon/util';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-st-statistical',
  template: \`
    <button nz-button (click)="data = []">Clean Data</button>
    <st #st [data]="data" [columns]="columns" [body]="bodyTpl">
      <ng-template #bodyTpl let-s>
        @if (st.count > 0) {
          <tr>
            <td>\u5408\u8BA1</td>
            <td>{{ s.len.text }} \u4E2A</td>
            <td>{{ s.dc.text }}</td>
            <td class="text-right">{{ s.sum.text }}</td>
            <td class="text-right">{{ s.avg.text }}</td>
            <td class="text-right">{{ s.min.text }}</td>
            <td class="text-right">{{ s.max.text }}</td>
            <td class="text-right">{{ s.custom.text }}</td>
          </tr>
          <tr class="bg-grey-lighter">
            <td colspan="3">\u6027\u522B\u5E73\u5747\u503C</td>
            <td class="text-right">{{ s.sum.value / s.len.value | price }}</td>
            <td colspan="4"></td>
          </tr>
        }
      </ng-template>
    </st>
  \`,
  standalone: true,
  imports: [STModule, NzButtonModule, CurrencyPricePipe]
})
export class ComponentsStStatisticalComponent {
  data: STData[] = Array(100)
    .fill({})
    .map((_, idx) => ({
      id: idx + 1,
      price: ~~(Math.random() * 100),
      age: ~~(Math.random() * 100) > 50 ? '\u5973' : '\u7537'
    }));
  columns: STColumn[] = [
    { title: '\u884C\u53F7', type: 'no' },
    { title: '\u7F16\u53F7', index: 'id', statistical: 'count', key: 'len' },
    { title: '\u6027\u522B', index: 'age', statistical: 'distinctCount', key: 'dc' },
    { title: 'Sum', index: 'price', type: 'currency', statistical: 'sum', key: 'sum' },
    { title: 'Average', index: 'price', type: 'currency', statistical: 'average', key: 'avg' },
    { title: 'Min', index: 'price', type: 'currency', statistical: 'min', key: 'min' },
    { title: 'Max', index: 'price', type: 'currency', statistical: 'max', key: 'max' },
    {
      title: 'Custom',
      index: 'price',
      type: 'currency',
      statistical: { type: values => ({ value: values[0], text: \`**\${values[0]}\` }), currency: false },
      key: 'custom'
    }
  ];
}`,lang:"ts",componentName:"ComponentsStStatisticalComponent",point:19,name:"statistical",urls:"packages/abc/st/demo/statistical.md",type:"demo"},{id:"components-st-virtual",meta:{order:11,title:{"zh-CN":"\u865A\u62DF\u6EDA\u52A8","en-US":"Virtual Scroll"}},summary:{"zh-CN":'<p>\u865A\u62DF\u6EDA\u52A8\uFF0C\u7ED3\u5408 <a target="_blank" href="https://material.angular.io/cdk/scrolling/overview" data-url="https://material.angular.io/cdk/scrolling/overview">cdk scrolling</a> \u7684\u865A\u62DF\u6EDA\u52A8\uFF0C\u7528\u4E8E\u5DE8\u91CF\u6570\u636E\u52A0\u8F7D\u3002\u53EF\u4EE5\u901A\u8FC7\u83B7\u5F97 <code>cdkVirtualScrollViewport</code> \u8FDB\u884C\u8FDB\u4E00\u6B65\u64CD\u4F5C\uFF0C\u89C1\u672C\u793A\u4F8B\u53CA <a target="_blank" href="https://material.angular.io/cdk/scrolling/api#CdkVirtualScrollViewport" data-url="https://material.angular.io/cdk/scrolling/api#CdkVirtualScrollViewport">API</a>\u3002</p>',"en-US":'<p>Virtual scrolling combine with <a target="_blank" href="https://material.angular.io/cdk/scrolling/overview" data-url="https://material.angular.io/cdk/scrolling/overview">cdk scrolling</a> used to display large data, you can get <code>cdkVirtualScrollViewport</code> in <code>STComponent</code> and find more API <a target="_blank" href="https://material.angular.io/cdk/scrolling/api#CdkVirtualScrollViewport" data-url="https://material.angular.io/cdk/scrolling/api#CdkVirtualScrollViewport">here</a>.</p>'},code:`import { AfterViewInit, Component, DestroyRef, ViewChild, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { STColumn, STComponent, STModule, STPage } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-st-virtual',
  template: \`
    <button nz-button (click)="scrollToIndex(200)">Scroll To Index 200</button>
    <st #st [data]="data" [columns]="columns" [page]="page" virtualScroll [scroll]="{ x: '1300px', y: '240px' }" />
  \`,
  standalone: true,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStVirtualComponent implements AfterViewInit {
  private destroy$ = inject(DestroyRef);
  @ViewChild('st', { static: false }) st!: STComponent;

  page: STPage = {
    front: false,
    show: false
  };
  data: Array<{ id: number; price: number }> = Array(2000)
    .fill({})
    .map((_, idx) => ({
      id: idx + 1,
      price: ~~(Math.random() * 100)
    }));
  columns: STColumn[] = [
    { title: '\u7F16\u53F7', index: 'id', width: 100 },
    { title: '\u4EF7\u683C1', index: 'price', width: 100 },
    { title: '\u4EF7\u683C2', index: 'price', width: 100 },
    { title: '\u4EF7\u683C3', index: 'price', width: 100 },
    { title: '\u4EF7\u683C4', index: 'price', width: 100 },
    { title: '\u4EF7\u683C5', index: 'price', width: 100 },
    { title: '\u4EF7\u683C6', index: 'price', width: 100 },
    { title: '\u4EF7\u683C7', index: 'price', width: 100 },
    { title: '\u4EF7\u683C8', index: 'price', width: 100 },
    { title: '\u4EF7\u683C9', index: 'price', width: 100 },
    { title: '\u4EF7\u683C10', index: 'price', width: 100 }
  ];

  scrollToIndex(index: number): void {
    this.st.cdkVirtualScrollViewport?.scrollToIndex(index);
  }

  ngAfterViewInit(): void {
    this.st.cdkVirtualScrollViewport?.scrolledIndexChange.pipe(takeUntilDestroyed(this.destroy$)).subscribe(data => {
      console.log('scroll index to', data);
    });
  }
}`,lang:"ts",componentName:"ComponentsStVirtualComponent",point:20,name:"virtual",urls:"packages/abc/st/demo/virtual.md",type:"demo"},{id:"components-st-export",meta:{order:20,title:{"zh-CN":"\u5BFC\u51FAExcel","en-US":"Export Excel"}},summary:{"zh-CN":"<p>\u5C06\u8868\u683C\u6570\u636E\u4FDD\u5B58\u4E3A Excel\u3002</p>","en-US":"<p>Save the table data as Excel.</p>"},code:`import { Component, ViewChild } from '@angular/core';

import { STColumn, STComponent, STData, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-st-export',
  template: \`
    <button nz-button (click)="st.export()">Export</button>
    <button nz-button (click)="st.export(true)">Export Filtered Data</button>
    <button nz-button (click)="st.export(data, { filename: 'via-data.xlsx', sheetname: 'user' })"
      >Export via data</button
    >
    <st #st [data]="data" [columns]="columns" class="mt-sm" />
  \`,
  standalone: true,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStExportComponent {
  @ViewChild('st', { static: false }) st!: STComponent;
  data: STData[] = Array(10000)
    .fill({})
    .map((_, index) => ({
      id: index + 1,
      picture: {
        thumbnail: \`https://dummyimage.com/100x100&text=\${Math.min(index + 1, 30)}\`
      },
      email: \`e\${index + 1}@qq.com\`,
      phone: \`phone - \${index + 1}\`,
      price: Math.ceil(Math.random() * 10000000) + 10000000,
      registered: new Date()
    }));
  columns: STColumn[] = [
    { title: '\u7F16\u53F7', index: 'id' },
    {
      title: '\u5934\u50CF',
      type: 'img',
      width: 60,
      index: 'picture.thumbnail',
      exported: false
    },
    { title: '\u90AE\u7BB1', index: 'email' },
    { title: '\u7535\u8BDD', index: 'phone' },
    {
      title: '\u6570\u5B57',
      index: 'price',
      type: 'number',
      sort: {
        compare: (a, b) => a.price - b.price
      }
    },
    { title: '\u8D27\u5E01', index: 'price', type: 'currency' },
    { title: '\u6CE8\u518C\u65F6\u95F4', type: 'date', index: 'registered' }
  ];
}`,lang:"ts",componentName:"ComponentsStExportComponent",point:21,name:"export",urls:"packages/abc/st/demo/export.md",type:"demo"},{id:"components-st-resizable",meta:{order:21,title:{"zh-CN":"\u8C03\u6574\u5C3A\u5BF8","en-US":"Resizable"}},summary:{"zh-CN":`<p>\u57FA\u4E8E <a target="_blank" href="https://ng.ant.design/experimental/resizable/zh" data-url="https://ng.ant.design/experimental/resizable/zh">nz-resizable</a> \u8C03\u6574\u8868\u5934\u5BBD\u5EA6\u3002</p><blockquote><ul><li><p>\u6CE8\u610F\uFF1A\u4E0D\u8981\u5FD8\u8BB0\u5728 <code>src/styles</code> \u4E0B\u5BFC\u5165 <code>nz-resizable</code> Less \u6837\u5F0F\u6587\u4EF6\uFF08<code>@import 'ng-zorro-antd/resizable/style/entry.less';</code>\uFF09</p></li><li><p><strong>\u4E0D\u652F\u6301\u591A\u8868\u5934</strong></p></li><li><p>\u5F53\u4E0E\u8FC7\u6EE4\u3001\u6392\u5E8F\u4E00\u540C\u5B58\u5728\u65F6\u8C03\u6574\u624B\u67C4\u4F1A\u53D8\u5C0F</p></li></ul></blockquote>`,"en-US":`<p>Resize the table header base on <a target="_blank" href="https://ng.ant.design/experimental/resizable/en" data-url="https://ng.ant.design/experimental/resizable/en">nz-resizable</a>.</p><blockquote><ul><li><p>Note: Don't forget to import the <code>nz-resizable</code> Less style (<code>@import 'ng-zorro-antd/resizable/style/entry.less';</code>) file in <code>src/styles</code>.</p></li><li><p><strong>Multiple headers not supported</strong></p></li><li><p>Adjustment handles will become smaller when present with filtering and sorting</p></li></ul></blockquote>`},code:`import { Component } from '@angular/core';

import { STChange, STColumn, STModule } from '@delon/abc/st';

@Component({
  selector: 'components-st-resizable',
  template: \`
    <st [data]="url" [columns]="columns" [widthMode]="{ type: 'strict' }" resizable (change)="onChange($event)" />
  \`,
  standalone: true,
  imports: [STModule]
})
export class ComponentsStResizableComponent {
  url = \`/users?total=2&field=list\`;
  columns: STColumn[] = [
    { title: '\u7F16\u53F7', index: 'id', width: 80, resizable: false },
    { title: '\u5934\u50CF', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '\u90AE\u7BB1', index: 'email', width: 150, resizable: { minWidth: 150 } },
    { title: '\u7535\u8BDD', index: 'phone' },
    { title: '\u4F63\u91D1', index: 'price', type: 'currency' },
    { title: '\u6CE8\u518C\u65F6\u95F4', type: 'date', index: 'registered' }
  ];

  onChange({ type, resize }: STChange): void {
    if (type === 'resize') {
      console.log(resize?.width);
    }
  }
}`,lang:"ts",componentName:"ComponentsStResizableComponent",point:22,name:"resizable",urls:"packages/abc/st/demo/resizable.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-st"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:119,vars:49,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-st-basic"),t(7,`
        `),a(),t(8,`
      
        `),r(9,"code-box",3),t(10,`
          `),m(11,"components-st-custom-data"),t(12,`
        `),a(),t(13,`
      
        `),r(14,"code-box",3),t(15,`
          `),m(16,"components-st-type"),t(17,`
        `),a(),t(18,`
      
        `),r(19,"code-box",3),t(20,`
          `),m(21,"components-st-cell"),t(22,`
        `),a(),t(23,`
      
        `),r(24,"code-box",3),t(25,`
          `),m(26,"components-st-checkbox"),t(27,`
        `),a(),t(28,`
      
        `),r(29,"code-box",3),t(30,`
          `),m(31,"components-st-radio"),t(32,`
        `),a(),t(33,`
      
        `),r(34,"code-box",3),t(35,`
          `),m(36,"components-st-contextmenu"),t(37,`
        `),a(),t(38,`
      
        `),r(39,"code-box",3),t(40,`
          `),m(41,"components-st-edit-row"),t(42,`
        `),a(),t(43,`
      
        `),r(44,"code-box",3),t(45,`
          `),m(46,"components-st-form"),t(47,`
        `),a(),t(48,`
      
        `),r(49,"code-box",3),t(50,`
          `),m(51,"components-st-row-op"),t(52,`
        `),a(),t(53,`
      
        `),r(54,"code-box",3),t(55,`
          `),m(56,"components-st-sort"),t(57,`
        `),a(),t(58,`
      
        `),r(59,"code-box",3),t(60,`
          `),m(61,"components-st-expand"),t(62,`
        `),a(),t(63,`
      
        `),r(64,"code-box",3),t(65,`
          `),m(66,"components-st-render"),t(67,`
        `),a(),t(68,`
      
        `),r(69,"code-box",3),t(70,`
          `),m(71,"components-st-buttons"),t(72,`
        `),a(),t(73,`
      
        `),r(74,"code-box",3),t(75,`
          `),m(76,"components-st-widget"),t(77,`
        `),a(),t(78,`
      
        `),r(79,"code-box",3),t(80,`
          `),m(81,"components-st-colspan-rowspan"),t(82,`
        `),a(),t(83,`
      
        `),r(84,"code-box",3),t(85,`
          `),m(86,"components-st-fixed"),t(87,`
        `),a(),t(88,`
      
        `),r(89,"code-box",3),t(90,`
          `),m(91,"components-st-grouping-columns"),t(92,`
        `),a(),t(93,`
      
        `),r(94,"code-box",3),t(95,`
          `),m(96,"components-st-responsive"),t(97,`
        `),a(),t(98,`
      
        `),r(99,"code-box",3),t(100,`
          `),m(101,"components-st-statistical"),t(102,`
        `),a(),t(103,`
      
        `),r(104,"code-box",3),t(105,`
          `),m(106,"components-st-virtual"),t(107,`
        `),a(),t(108,`
      
        `),r(109,"code-box",3),t(110,`
          `),m(111,"components-st-export"),t(112,`
        `),a(),t(113,`
      
        `),r(114,"code-box",3),t(115,`
          `),m(116,"components-st-resizable"),t(117,`
        `),a(),t(118,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id),c(5),s("item",i.codes[1]),T("id",i.codes[1].id),c(5),s("item",i.codes[2]),T("id",i.codes[2].id),c(5),s("item",i.codes[3]),T("id",i.codes[3].id),c(5),s("item",i.codes[4]),T("id",i.codes[4].id),c(5),s("item",i.codes[5]),T("id",i.codes[5].id),c(5),s("item",i.codes[6]),T("id",i.codes[6].id),c(5),s("item",i.codes[7]),T("id",i.codes[7].id),c(5),s("item",i.codes[8]),T("id",i.codes[8].id),c(5),s("item",i.codes[9]),T("id",i.codes[9].id),c(5),s("item",i.codes[10]),T("id",i.codes[10].id),c(5),s("item",i.codes[11]),T("id",i.codes[11].id),c(5),s("item",i.codes[12]),T("id",i.codes[12].id),c(5),s("item",i.codes[13]),T("id",i.codes[13].id),c(5),s("item",i.codes[14]),T("id",i.codes[14].id),c(5),s("item",i.codes[15]),T("id",i.codes[15].id),c(5),s("item",i.codes[16]),T("id",i.codes[16].id),c(5),s("item",i.codes[17]),T("id",i.codes[17].id),c(5),s("item",i.codes[18]),T("id",i.codes[18].id),c(5),s("item",i.codes[19]),T("id",i.codes[19].id),c(5),s("item",i.codes[20]),T("id",i.codes[20].id),c(5),s("item",i.codes[21]),T("id",i.codes[21].id),c(5),s("item",i.codes[22]),T("id",i.codes[22].id))},dependencies:[j,H,dl,rl,al,ll,cl,sl,pl,ml,ul,hl,fl,gl,Cl,yl,xl,vl,Sl,zl,_l,Tl,wl,kl,Ml,B,R,F],encapsulation:2});let n=e;return n})();var Nl=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-sv-basic"]],standalone:!0,features:[f],decls:55,vars:0,consts:[["label","Firefox"],["label","Default"],["label","Unit","unit","\u4E2A"],["label","Col2","col","2"],["label","Value"],["prefix","\u7EA6","unit","\u4EBF","tooltip","5,011,000,000"],["label","Mulit Value"],["label","Value Size"],["size","small"],["size","large"]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"sv-container"),t(2,`
      `),r(3,"sv-title"),t(4,"title"),a(),t(5,`
      `),r(6,"sv",0),t(7,`
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      `),a(),t(8,`
      `),r(9,"sv",0),t(10,`
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      `),a(),t(11,`
      `),r(12,"sv",0),t(13,`
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      `),a(),t(14,`
      `),m(15,"nz-divider"),t(16,`
      `),m(17,"sv",1),t(18,`
      `),r(19,"sv",2),t(20,"10"),a(),t(21,`
      `),m(22,"sv",2),t(23,`
      `),r(24,"sv",3),t(25,"\u5360\u4E24\u680F"),a(),t(26,`
      `),r(27,"sv",4),t(28,`
        `),r(29,"sv-value",5),t(30,"50.11"),a(),t(31,`
      `),a(),t(32,`
      `),r(33,"sv",6),t(34,`
        `),r(35,"sv-value"),t(36,"10"),a(),t(37,`
        `),r(38,"sv-value"),t(39,"3"),a(),t(40,`
      `),a(),t(41,`
      `),r(42,"sv",7),t(43,`
        `),r(44,"sv-value"),t(45,"Default"),a(),t(46,`
        `),r(47,"sv-value",8),t(48,"Samll"),a(),t(49,`
        `),r(50,"sv-value",9),t(51,"Large"),a(),t(52,`
      `),a(),t(53,`
    `),a(),t(54,`
  `))},dependencies:[_e,ae,he,Wo,si,Dn,Mn],encapsulation:2});let n=e;return n})();function Yh(n,e){n&1&&(t(0,`
          `),r(1,"a",15),t(2,"long"),a(),t(3,`
        `))}var El=(()=>{let e=class e{constructor(){this.bordered=!0,this.size="default"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-sv-border"]],standalone:!0,features:[f],decls:54,vars:4,consts:[["label",""],[1,"mb-md"],["nz-button","",3,"click"],[1,"ml-md",3,"ngModelChange","ngModel"],["nz-radio","","nzValue","default"],["nz-radio","","nzValue","large"],["nz-radio","","nzValue","small"],["sv-container","","labelWidth","150",3,"bordered","size"],["label","ID"],["label","Name"],["label","Age"],["label","Long Optional Long Optional","optional","(RMB)"],["label","Optional","optionalHelp","Tips"],["label","Default","optionalHelp","The background color is #f50","optionalHelpColor","#f50"],["col","1",3,"label"],["nz-tooltip","test"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"div",1),t(2,`
      `),r(3,"button",2),v("click",function(){return y(p),x(i.bordered=!i.bordered)}),t(4,"\u5207\u6362\u8FB9\u6846"),a(),t(5,`
      `),r(6,"nz-radio-group",3),O("ngModelChange",function(u){return y(p),A(i.size,u)||(i.size=u),x(u)}),t(7,`
        `),r(8,"label",4),t(9,"default"),a(),t(10,`
        `),r(11,"label",5),t(12,"large"),a(),t(13,`
        `),r(14,"label",6),t(15,"small"),a(),t(16,`
      `),a(),t(17,`
    `),a(),t(18,`
    `),r(19,"div",7),t(20,`
      `),r(21,"sv",8),t(22,"1"),a(),t(23,`
      `),r(24,"sv",9),t(25,"asdf"),a(),t(26,`
      `),r(27,"sv",10),t(28,"25"),a(),t(29,`
      `),r(30,"sv",11),t(31,"Optional"),a(),t(32,`
      `),r(33,"sv",12),t(34,"Optional Help"),a(),t(35,`
      `),m(36,"sv",13),t(37,`
      `),r(38,"sv",14),t(39,`
        `),C(40,Yh,4,0,"ng-template",null,0,P),t(42,`
        `),r(43,"p"),t(44,"Custom label"),a(),t(45,`
        `),r(46,"p"),t(47,"Custom label"),a(),t(48,`
        `),r(49,"p"),t(50,"Custom label"),a(),t(51,`
      `),a(),t(52,`
    `),a(),t(53,`
  `)}if(o&2){let p=_(41);c(6),L("ngModel",i.size),c(13),s("bordered",i.bordered)("size",i.size),c(19),s("label",p)}},dependencies:[_e,ae,he,I,D,N,E,sd,cd,ld,Se,de,ut,ct,gt],encapsulation:2});let n=e;return n})();function tf(n,e){n&1&&(t(0,`
          `),r(1,"a",13),t(2,"long"),a(),t(3,`
        `))}var Il=(()=>{let e=class e{constructor(){this.msg=S(vt),this.columns=[{title:"id"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-sv-fixed"]],standalone:!0,features:[f],decls:38,vars:2,consts:[["label",""],["labelWidth","150"],["label","ID"],["label","Name"],["label","Age"],["label","Reject","type","danger","col","1"],[1,"ml-sm",3,"click"],["label","Long Optional Long Optional","optional","(RMB)"],["label","Optional","optionalHelp","Tips"],["label","Default","optionalHelp","The background color is #f50","optionalHelpColor","#f50"],[3,"label"],["hideLabel","","col","1"],["size","small",3,"columns"],["nz-tooltip","test"]],template:function(o,i){if(o&1){let p=w();t(0,`
    `),r(1,"sv-container",1),t(2,`
      `),r(3,"sv",2),t(4,"1"),a(),t(5,`
      `),r(6,"sv",3),t(7,"asdf"),a(),t(8,`
      `),r(9,"sv",4),t(10,"25"),a(),t(11,`
      `),r(12,"sv",5),t(13," OMG "),r(14,"a",6),v("click",function(){return y(p),x(i.msg.success("to"))}),t(15,"Fixed"),a(),t(16," "),a(),t(17,`
      `),r(18,"sv",7),t(19,"Optional"),a(),t(20,`
      `),r(21,"sv",8),t(22,"Optional Help"),a(),t(23,`
      `),m(24,"sv",9),t(25,`
      `),r(26,"sv",10),t(27,`
        `),C(28,tf,4,0,"ng-template",null,0,P),t(30,`
        Custom label
      `),a(),t(31,`
      `),r(32,"sv",11),t(33,`
        `),m(34,"st",12),t(35,`
      `),a(),t(36,`
    `),a(),t(37,`
  `)}if(o&2){let p=_(29);c(26),s("label",p),c(8),s("columns",i.columns)}},dependencies:[_e,ae,he,Se,de,X,Z],encapsulation:2});let n=e;return n})();var Pl=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-sv-type"]],standalone:!0,features:[f],decls:16,vars:0,consts:[["col","4"],["label","primary","type","primary"],["label","success","type","success"],["label","warning","type","warning"],["label","danger","type","danger"]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"sv-container",0),t(2,`
      `),r(3,"sv",1),t(4,"hhhh"),a(),t(5,`
      `),r(6,"sv",2),t(7,"hhhh"),a(),t(8,`
      `),r(9,"sv",3),t(10,"hhhh"),a(),t(11,`
      `),r(12,"sv",4),t(13,"hhhh"),a(),t(14,`
    `),a(),t(15,`
  `))},dependencies:[_e,ae,he],encapsulation:2});let n=e;return n})();var Fl=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-sv-vertical"]],standalone:!0,features:[f],decls:16,vars:0,consts:[["layout","vertical"],["label","Firefox"]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"sv-container",0),t(2,`
      `),r(3,"sv-title"),t(4,"title"),a(),t(5,`
      `),r(6,"sv",1),t(7,`
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      `),a(),t(8,`
      `),r(9,"sv",1),t(10,`
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      `),a(),t(11,`
      `),r(12,"sv",1),t(13,`
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      `),a(),t(14,`
    `),a(),t(15,`
  `))},dependencies:[_e,ae,he,Wo],encapsulation:2});let n=e;return n})();var Rl=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/sv/index.en-US.md","zh-CN":"packages/abc/sv/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Viewing grid system is a higher-order components based on the original <a target="_blank" href="https://ng.ant.design/components/grid/zh" data-url="https://ng.ant.design/components/grid/zh">Grid System</a> that server for view pages.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="sv-container"><a class="lake-link"><i data-anchor="sv-container"></i></a>sv-container<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[sv-container]</code></td><td>specify the maximum number of columns to display, the final columns number is determined by col setting combined with <a href="/theme/responsive" data-url="/theme/responsive">Responsive Rules</a></td><td><code>'1','2','3','4','5','6'</code></td><td><code>3</code></td><td>\u2705</td></tr><tr><td><code>[col]</code></td><td>specify the maximum number of columns to display, the final columns number is determined by col setting combined with <a href="/theme/responsive" data-url="/theme/responsive">Responsive Rules</a></td><td><code>'1','2','3','4','5','6'</code></td><td><code>3</code></td><td>\u2705</td></tr><tr><td><code>[size]</code></td><td>size of view</td><td><code>'small','large'</code></td><td><code>'large'</code></td><td>\u2705</td></tr><tr><td><code>[layout]</code></td><td>type of layout</td><td><code>'horizontal','vertical'</code></td><td><code>'horizontal'</code></td><td>\u2705</td></tr><tr><td><code>[gutter]</code></td><td>specify the distance between two items, unit is <code>px</code></td><td><code>number</code></td><td><code>32</code></td><td>\u2705</td></tr><tr><td><code>[labelWidth]</code></td><td>label text of width</td><td><code>number</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[default]</code></td><td>whether default text</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[title]</code></td><td>Display title</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[noColon]</code></td><td>Whether to not display : after label text</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[bordered]</code></td><td>Whether to display the border</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr></tbody></table><h3 id="sv"><a class="lake-link"><i data-anchor="sv"></i></a>sv<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[col]</code></td><td>specify the maximum number of columns to display, the final columns number is determined by col setting combined with <a href="/theme/responsive" data-url="/theme/responsive">Responsive Rules</a></td><td>-</td><td></td></tr><tr><td><code>[label]</code></td><td>label of view</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[unit]</code></td><td>unit of view</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[default]</code></td><td>whether default text, inherit <code>sv-container</code></td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[type]</code></td><td>type of view</td><td><code>'primary','success','danger','warning'</code></td><td>-</td></tr><tr><td><code>[optional]</code></td><td>Label optional information</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[optionalHelp]</code></td><td>Label optional help</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[optionalHelpColor]</code></td><td>The background color of label optional help</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[noColon]</code></td><td>Whether to not display : after label text</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[hideLabel]</code></td><td>Whether to hide the current label</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="sv-title"><a class="lake-link"><i data-anchor="sv-title"></i></a>sv-title<label class="api-type-label standalone">standalone</label></h3><p>Display title.</p><h3 id="sv-value"><a class="lake-link"><i data-anchor="sv-value"></i></a>sv-value<label class="api-type-label standalone">standalone</label></h3><p>\u503C\u5C55\u793A\u3002</p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[prefix]</code></td><td>Prefix of value</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[unit]</code></td><td>Unit of value</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[tooltip]</code></td><td>Tooltip text of value</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>Size of value</td><td><code>'large','small','default'</code></td><td><code>default</code></td></tr></tbody></table>`,meta:{type:"CURD",title:"sv",subtitle:"View",cols:1,order:2,module:"import { SVModule } from '@delon/abc/sv';"},toc:[{id:"API",title:"API",h:2,children:[{id:"sv-container",title:"sv-container:standalone",h:3},{id:"sv",title:"sv:standalone",h:3},{id:"sv-title",title:"sv-title:standalone",h:3},{id:"sv-value",title:"sv-value:standalone",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u67E5\u770B\u6805\u683C\u7CFB\u7EDF\u662F\u5728\u539F <a target="_blank" href="https://ng.ant.design/components/grid/zh" data-url="https://ng.ant.design/components/grid/zh">Grid \u6805\u683C</a> \u57FA\u7840\u4E0A\u6784\u5EFA\u66F4\u9AD8\u9636\u7684\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u7B80\u5316\u67E5\u770B\u9875\u5E03\u5C40\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="sv-container"><a class="lake-link"><i data-anchor="sv-container"></i></a>sv-container<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[sv-container]</code></td><td>\u6307\u5B9A\u4FE1\u606F\u6700\u591A\u5206\u51E0\u5217\u5C55\u793A\uFF0C\u6700\u7EC8\u4E00\u884C\u51E0\u5217\u7531 col \u914D\u7F6E\u7ED3\u5408<a href="/theme/responsive" data-url="/theme/responsive">\u54CD\u5E94\u5F0F\u89C4\u5219</a>\u51B3\u5B9A\uFF0C</td><td><code>'1','2','3','4','5','6'</code></td><td>-</td><td>-</td></tr><tr><td><code>[col]</code></td><td>\u6307\u5B9A\u4FE1\u606F\u6700\u591A\u5206\u51E0\u5217\u5C55\u793A\uFF0C\u6700\u7EC8\u4E00\u884C\u51E0\u5217\u7531 col \u914D\u7F6E\u7ED3\u5408<a href="/theme/responsive" data-url="/theme/responsive">\u54CD\u5E94\u5F0F\u89C4\u5219</a>\u51B3\u5B9A</td><td><code>'1','2','3','4','5','6'</code></td><td><code>3</code></td><td>\u2705</td></tr><tr><td><code>[size]</code></td><td>\u5927\u5C0F</td><td><code>'small','large'</code></td><td><code>'large'</code></td><td>\u2705</td></tr><tr><td><code>[layout]</code></td><td>\u5E03\u5C40</td><td><code>'horizontal','vertical'</code></td><td><code>'horizontal'</code></td><td>\u2705</td></tr><tr><td><code>[gutter]</code></td><td>\u95F4\u8DDD</td><td><code>number</code></td><td><code>32</code></td><td>\u2705</td></tr><tr><td><code>[labelWidth]</code></td><td>\u9ED8\u8BA4\u6807\u7B7E\u6587\u672C\u5BBD\u5EA6</td><td><code>number</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[default]</code></td><td>\u9ED8\u8BA4\u662F\u5426\u663E\u793A\u9ED8\u8BA4\u6587\u672C</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[noColon]</code></td><td>\u9ED8\u8BA4\u662F\u5426\u4E0D\u663E\u793A label \u540E\u9762\u7684\u5192\u53F7</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[bordered]</code></td><td>\u662F\u5426\u5C55\u793A\u8FB9\u6846</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr></tbody></table><h3 id="sv"><a class="lake-link"><i data-anchor="sv"></i></a>sv<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[col]</code></td><td>\u6307\u5B9A\u4FE1\u606F\u6700\u591A\u5206\u51E0\u5217\u5C55\u793A\uFF0C\u6700\u7EC8\u4E00\u884C\u51E0\u5217\u7531 col \u914D\u7F6E\u7ED3\u5408<a href="/theme/responsive" data-url="/theme/responsive">\u54CD\u5E94\u5F0F\u89C4\u5219</a>\u51B3\u5B9A\uFF0C\u7EE7\u627F <code>sv-container</code></td><td><code>'1','2','3','4','5','6'</code></td><td>-</td></tr><tr><td><code>[label]</code></td><td>\u6807\u7B7E</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[unit]</code></td><td>\u5355\u4F4D</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[default]</code></td><td>\u662F\u5426\u663E\u793A\u9ED8\u8BA4\u6587\u672C\uFF0C\u7EE7\u627F <code>sv-container</code></td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[type]</code></td><td>\u7C7B\u578B</td><td><code>'primary','success','danger','warning'</code></td><td>-</td></tr><tr><td><code>[optional]</code></td><td>\u6807\u7B7E\u53EF\u9009\u4FE1\u606F</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[optionalHelp]</code></td><td>\u6807\u7B7E\u53EF\u9009\u5E2E\u52A9</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[optionalHelpColor]</code></td><td>\u6807\u7B7E\u53EF\u9009\u5E2E\u52A9\u80CC\u666F\u989C\u8272</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[noColon]</code></td><td>\u662F\u5426\u4E0D\u663E\u793A label \u540E\u9762\u7684\u5192\u53F7</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[hideLabel]</code></td><td>\u662F\u5426\u9690\u85CF\u5F53\u524D <code>label</code></td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="sv-title"><a class="lake-link"><i data-anchor="sv-title"></i></a>sv-title<label class="api-type-label standalone">standalone</label></h3><p>\u7528\u4E8E\u5C55\u793A\u6807\u9898\uFF0C\u5355\u72EC\u4E00\u884C\u3002</p><h3 id="sv-value"><a class="lake-link"><i data-anchor="sv-value"></i></a>sv-value<label class="api-type-label standalone">standalone</label></h3><p>\u503C\u5C55\u793A\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[prefix]</code></td><td>\u524D\u7F00</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[unit]</code></td><td>\u5355\u4F4D</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[tooltip]</code></td><td>\u6587\u5B57\u63D0\u793A\u5185\u5BB9</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>\u5927\u5C0F</td><td><code>'large','small','default'</code></td><td><code>default</code></td></tr></tbody></table>`,meta:{type:"CURD",title:"sv",subtitle:"\u67E5\u770B",cols:1,order:2,module:"import { SVModule } from '@delon/abc/sv';"},toc:[{id:"API",title:"API",h:2,children:[{id:"sv-container",title:"sv-container:standalone",h:3},{id:"sv",title:"sv:standalone",h:3},{id:"sv-title",title:"sv-title:standalone",h:3},{id:"sv-value",title:"sv-value:standalone",h:3}]}]}},demo:!0},this.codes=[{id:"components-sv-basic",meta:{order:1,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"}},summary:{"zh-CN":"<p>\u57FA\u672C\u67E5\u770B\u9875\u3002</p>","en-US":"<p>The simplest view page.</p>"},code:`import { Component } from '@angular/core';

import { SVModule } from '@delon/abc/sv';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'components-sv-basic',
  template: \`
    <sv-container>
      <sv-title>title</sv-title>
      <sv label="Firefox">
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      </sv>
      <sv label="Firefox">
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      </sv>
      <sv label="Firefox">
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      </sv>
      <nz-divider />
      <sv label="Default" />
      <sv label="Unit" unit="\u4E2A">10</sv>
      <sv label="Unit" unit="\u4E2A" />
      <sv label="Col2" col="2">\u5360\u4E24\u680F</sv>
      <sv label="Value">
        <sv-value prefix="\u7EA6" unit="\u4EBF" tooltip="5,011,000,000">50.11</sv-value>
      </sv>
      <sv label="Mulit Value">
        <sv-value>10</sv-value>
        <sv-value>3</sv-value>
      </sv>
      <sv label="Value Size">
        <sv-value>Default</sv-value>
        <sv-value size="small">Samll</sv-value>
        <sv-value size="large">Large</sv-value>
      </sv>
    </sv-container>
  \`,
  standalone: true,
  imports: [SVModule, NzDividerModule]
})
export class ComponentsSvBasicComponent {}`,lang:"ts",componentName:"ComponentsSvBasicComponent",point:0,name:"basic",urls:"packages/abc/sv/demo/basic.md",type:"demo"},{id:"components-sv-border",meta:{order:2,title:{"zh-CN":"\u5E26\u8FB9\u6846\u7684","en-US":"Border"}},summary:{"zh-CN":"<p>\u5E26\u8FB9\u6846\u548C\u80CC\u666F\u989C\u8272\u3002</p>","en-US":"<p>With border and background color.</p>"},code:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SVModule } from '@delon/abc/sv';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'components-sv-border',
  template: \`
    <div class="mb-md">
      <button nz-button (click)="bordered = !bordered">\u5207\u6362\u8FB9\u6846</button>
      <nz-radio-group [(ngModel)]="size" class="ml-md">
        <label nz-radio nzValue="default">default</label>
        <label nz-radio nzValue="large">large</label>
        <label nz-radio nzValue="small">small</label>
      </nz-radio-group>
    </div>
    <div sv-container labelWidth="150" [bordered]="bordered" [size]="size">
      <sv label="ID">1</sv>
      <sv label="Name">asdf</sv>
      <sv label="Age">25</sv>
      <sv label="Long Optional Long Optional" optional="(RMB)">Optional</sv>
      <sv label="Optional" optionalHelp="Tips">Optional Help</sv>
      <sv label="Default" optionalHelp="The background color is #f50" optionalHelpColor="#f50" />
      <sv [label]="label" col="1">
        <ng-template #label>
          <a nz-tooltip="test">long</a>
        </ng-template>
        <p>Custom label</p>
        <p>Custom label</p>
        <p>Custom label</p>
      </sv>
    </div>
  \`,
  standalone: true,
  imports: [SVModule, NzButtonModule, NzRadioModule, NzToolTipModule, FormsModule]
})
export class ComponentsSvBorderComponent {
  bordered = true;
  size?: 'small' | 'large' | 'default' = 'default';
}`,lang:"ts",componentName:"ComponentsSvBorderComponent",point:1,name:"border",urls:"packages/abc/sv/demo/border.md",type:"demo"},{id:"components-sv-fixed",meta:{order:2,title:{"zh-CN":"\u56FA\u5B9A\u6807\u7B7E\u5BBD\u5EA6","en-US":"Fixed Label Width"}},summary:{"zh-CN":"<p>\u56FA\u5B9A\u6807\u7B7E\u5BBD\u5EA6\u8BA9\u5E03\u5C40\u770B\u8D77\u6765\u66F4\u52A0\u6574\u6D01\u3002</p>","en-US":"<p>Use <code>labelWidth</code> to make the layout look cleaner</p>"},code:`import { Component, inject } from '@angular/core';

import { STColumn, STModule } from '@delon/abc/st';
import { SVModule } from '@delon/abc/sv';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'components-sv-fixed',
  template: \`
    <sv-container labelWidth="150">
      <sv label="ID">1</sv>
      <sv label="Name">asdf</sv>
      <sv label="Age">25</sv>
      <sv label="Reject" type="danger" col="1"> OMG <a class="ml-sm" (click)="msg.success('to')">Fixed</a> </sv>
      <sv label="Long Optional Long Optional" optional="(RMB)">Optional</sv>
      <sv label="Optional" optionalHelp="Tips">Optional Help</sv>
      <sv label="Default" optionalHelp="The background color is #f50" optionalHelpColor="#f50" />
      <sv [label]="label">
        <ng-template #label>
          <a nz-tooltip="test">long</a>
        </ng-template>
        Custom label
      </sv>
      <sv hideLabel col="1">
        <st [columns]="columns" size="small" />
      </sv>
    </sv-container>
  \`,
  standalone: true,
  imports: [SVModule, NzToolTipModule, STModule]
})
export class ComponentsSvFixedComponent {
  readonly msg = inject(NzMessageService);
  columns: STColumn[] = [{ title: 'id' }];
}`,lang:"ts",componentName:"ComponentsSvFixedComponent",point:2,name:"fixed",urls:"packages/abc/sv/demo/fixed.md",type:"demo"},{id:"components-sv-type",meta:{order:3,title:{"zh-CN":"\u5185\u5BB9\u7C7B\u578B","en-US":"Content Type"}},summary:{"zh-CN":"<p>\u901A\u5E38\u7528\u4E8E\u5C55\u793A\u9875\uFF0C\u6210\u529F\u3001\u5F02\u5E38\u3001\u8B66\u544A\u7B49\u5B57\u6BB5\u5C55\u793A\u3002</p>","en-US":"<p>Usually used to view pages, success, danger, warning, and other fields.</p>"},code:`import { Component } from '@angular/core';

import { SVModule } from '@delon/abc/sv';

@Component({
  selector: 'components-sv-type',
  template: \`
    <sv-container col="4">
      <sv label="primary" type="primary">hhhh</sv>
      <sv label="success" type="success">hhhh</sv>
      <sv label="warning" type="warning">hhhh</sv>
      <sv label="danger" type="danger">hhhh</sv>
    </sv-container>
  \`,
  standalone: true,
  imports: [SVModule]
})
export class ComponentsSvTypeComponent {}`,lang:"ts",componentName:"ComponentsSvTypeComponent",point:3,name:"type",urls:"packages/abc/sv/demo/type.md",type:"demo"},{id:"components-sv-vertical",meta:{order:4,title:{"zh-CN":"\u5782\u76F4\u5E03\u5C40","en-US":"Vertical"}},summary:{"zh-CN":"<p>\u5782\u76F4\u5E03\u5C40\u3002</p>","en-US":"<p>Vertical layout.</p>"},code:`import { Component } from '@angular/core';

import { SVModule } from '@delon/abc/sv';

@Component({
  selector: 'components-sv-vertical',
  template: \`
    <sv-container layout="vertical">
      <sv-title>title</sv-title>
      <sv label="Firefox">
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      </sv>
      <sv label="Firefox">
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      </sv>
      <sv label="Firefox">
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      </sv>
    </sv-container>
  \`,
  standalone: true,
  imports: [SVModule]
})
export class ComponentsSvVerticalComponent {}`,lang:"ts",componentName:"ComponentsSvVerticalComponent",point:4,name:"vertical",urls:"packages/abc/sv/demo/vertical.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-sv"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:29,vars:13,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-sv-basic"),t(7,`
        `),a(),t(8,`
      
        `),r(9,"code-box",3),t(10,`
          `),m(11,"components-sv-border"),t(12,`
        `),a(),t(13,`
      
        `),r(14,"code-box",3),t(15,`
          `),m(16,"components-sv-fixed"),t(17,`
        `),a(),t(18,`
      
        `),r(19,"code-box",3),t(20,`
          `),m(21,"components-sv-type"),t(22,`
        `),a(),t(23,`
      
        `),r(24,"code-box",3),t(25,`
          `),m(26,"components-sv-vertical"),t(27,`
        `),a(),t(28,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id),c(5),s("item",i.codes[1]),T("id",i.codes[1].id),c(5),s("item",i.codes[2]),T("id",i.codes[2].id),c(5),s("item",i.codes[3]),T("id",i.codes[3].id),c(5),s("item",i.codes[4]),T("id",i.codes[4].id))},dependencies:[j,H,Nl,El,Il,Pl,Fl,B,R,F],encapsulation:2});let n=e;return n})();var ef=["*"];function of(n,e){if(n&1){let l=w();r(0,"a",1),v("click",function(){y(l);let o=b();return x(o.trigger())}),t(1),m(2,"i",2),a()}if(n&2){let l=b();c(),mt(" ",l.expand?l.locale.collapse:l.locale.expand," "),c(),Rt("transform",l.expand?"rotate(-180deg)":null)}}var qn=(()=>{let e=class e{constructor(){this.i18n=S(qe),this.directionality=S(qt),this.cdr=S(lt),this.destroy$=S(Lt),this.locale={},this.expand=!1,this.dir="ltr",this.expandable=!0,this.change=new wt}ngOnInit(){this.dir=this.directionality.value,this.directionality.change.pipe(Mt(this.destroy$)).subscribe(d=>{this.dir=d,this.cdr.detectChanges()}),this.i18n.change.pipe(Mt(this.destroy$)).subscribe(()=>{this.locale=this.i18n.getData("tagSelect"),this.cdr.detectChanges()})}trigger(){this.expand=!this.expand,this.change.emit(this.expand)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["tag-select"]],hostVars:10,hostBindings:function(o,i){o&2&&k("tag-select",!0)("tag-select-rtl",i.dir==="rtl")("tag-select-rtl__has-expand",i.dir==="rtl"&&i.expandable)("tag-select__has-expand",i.expandable)("tag-select__expanded",i.expand)},inputs:{expandable:[2,"expandable","expandable",Y]},outputs:{change:"change"},exportAs:["tagSelect"],standalone:!0,features:[ht,f],ngContentSelectors:ef,decls:2,vars:1,consts:[[1,"ant-tag","ant-tag-checkable","tag-select__trigger"],[1,"ant-tag","ant-tag-checkable","tag-select__trigger",3,"click"],["nz-icon","","nzType","down"]],template:function(o,i){o&1&&(J(),U(0),C(1,of,3,3,"a",0)),o&2&&(c(),M(i.expandable?1:-1))},dependencies:[Tt],encapsulation:2,changeDetection:0});let n=e;return n})();function nf(n,e){if(n&1){let l=w();t(0,`
        `),r(1,"nz-tag",0),O("nzCheckedChange",function(o){let i=y(l).$implicit;return A(i.value,o)||(i.value=o),x(o)}),v("nzCheckedChange",function(){let o=y(l).$implicit,i=b();return x(i.change(o))}),t(2),a(),t(3,`
      `)}if(n&2){let l=e.$implicit;c(),L("nzChecked",l.value),c(),mt(`
          `,l.text,`
        `)}}var Al=(()=>{let e=class e{constructor(){this.categories=[{id:0,text:"\u5168\u90E8",value:!1},{id:1,text:"\u7C7B\u76EE\u4E00",value:!1},{id:2,text:"\u7C7B\u76EE\u4E8C",value:!1},{id:3,text:"\u7C7B\u76EE\u4E09",value:!1},{id:4,text:"\u7C7B\u76EE\u56DB",value:!1},{id:5,text:"\u7C7B\u76EE\u4E94",value:!1},{id:6,text:"\u7C7B\u76EE\u516D",value:!1},{id:7,text:"\u7C7B\u76EE\u4E03",value:!1},{id:8,text:"\u7C7B\u76EE\u516B",value:!1},{id:9,text:"\u7C7B\u76EE\u4E5D",value:!1},{id:10,text:"\u7C7B\u76EE\u5341",value:!1},{id:11,text:"\u7C7B\u76EE\u5341\u4E00",value:!1},{id:12,text:"\u7C7B\u76EE\u5341\u4E8C",value:!1},{id:13,text:"\u7C7B\u76EE\u5341\u4E09",value:!1},{id:14,text:"\u7C7B\u76EE\u5341\u56DB",value:!1},{id:15,text:"\u7C7B\u76EE\u5341\u4E94",value:!1}]}change(d){if(d.id===0){this.categories.forEach(o=>o.value=d.value);return}this.categories.find(o=>o.id===0).value=!1}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-tag-select-simple"]],standalone:!0,features:[f],decls:6,vars:0,consts:[["nzMode","checkable",3,"nzCheckedChange","nzChecked"]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"tag-select"),t(2,`
      `),St(3,nf,4,2,null,null,kt),a(),t(5,`
  `)),o&2&&(c(3),zt(i.categories))},dependencies:[qn,pd,Cn],encapsulation:2});let n=e;return n})();var Bl=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/tag-select/index.en-US.md","zh-CN":"packages/abc/tag-select/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Increase the label expansion and retraction function.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="tag-select"><a class="lake-link"><i data-anchor="tag-select"></i></a>tag-select<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[expandable]</code></td><td>Whether to enabled</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>(change)</code></td><td>Callback</td><td><code>EventEmitter&lt;boolean></code></td><td>-</td></tr></tbody></table>',meta:{type:"Layout",title:"tag-select",subtitle:"Tag Select",cols:1,module:"import { TagSelectModule } from '@delon/abc/tag-select';"},toc:[{id:"API",title:"API",h:2,children:[{id:"tag-select",title:"tag-select:standalone",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u589E\u52A0\u6807\u7B7E\u7684\u5C55\u5F00\u4E0E\u6536\u8FDB\u529F\u80FD\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="tag-select"><a class="lake-link"><i data-anchor="tag-select"></i></a>tag-select<label class="api-type-label standalone">standalone</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[expandable]</code></td><td>\u662F\u5426\u542F\u7528 <code>\u5C55\u5F00\u4E0E\u6536\u8FDB</code></td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>(change)</code></td><td>\u5C55\u5F00\u4E0E\u6536\u8FDB\u56DE\u8C03\u51FD\u6570\uFF0C\u53C2\u6570\uFF1A<code>boolean</code></td><td><code>EventEmitter&lt;boolean></code></td><td>-</td></tr></tbody></table>',meta:{type:"Layout",title:"tag-select",subtitle:"\u6807\u7B7E\u9009\u62E9\u5668",cols:1,module:"import { TagSelectModule } from '@delon/abc/tag-select';"},toc:[{id:"API",title:"API",h:2,children:[{id:"tag-select",title:"tag-select:standalone",h:3}]}]}},demo:!0},this.codes=[{id:"components-tag-select-simple",meta:{order:0,title:"\u57FA\u7840\u6837\u4F8B"},summary:"<p>\u7ED3\u5408 <code>nz-checkable-tag</code> \u7684 <code>tag-select</code> \u7EC4\u4EF6\uFF0C\u65B9\u4FBF\u7684\u5E94\u7528\u4E8E\u7B5B\u9009\u7C7B\u76EE\u7684\u4E1A\u52A1\u573A\u666F\u4E2D\u3002</p>",code:`import { Component } from '@angular/core';

import { TagSelectComponent } from '@delon/abc/tag-select';
import { NzTagModule } from 'ng-zorro-antd/tag';

interface TagSelectDemoItem {
  id: number;
  text: string;
  value: boolean;
}

@Component({
  selector: 'components-tag-select-simple',
  template: \`
    <tag-select>
      @for (i of categories; track $index) {
        <nz-tag nzMode="checkable" [(nzChecked)]="i.value" (nzCheckedChange)="change(i)">
          {{ i.text }}
        </nz-tag>
      }
    </tag-select>
  \`,
  standalone: true,
  imports: [TagSelectComponent, NzTagModule]
})
export class ComponentsTagSelectSimpleComponent {
  categories: TagSelectDemoItem[] = [
    { id: 0, text: '\u5168\u90E8', value: false },
    { id: 1, text: '\u7C7B\u76EE\u4E00', value: false },
    { id: 2, text: '\u7C7B\u76EE\u4E8C', value: false },
    { id: 3, text: '\u7C7B\u76EE\u4E09', value: false },
    { id: 4, text: '\u7C7B\u76EE\u56DB', value: false },
    { id: 5, text: '\u7C7B\u76EE\u4E94', value: false },
    { id: 6, text: '\u7C7B\u76EE\u516D', value: false },
    { id: 7, text: '\u7C7B\u76EE\u4E03', value: false },
    { id: 8, text: '\u7C7B\u76EE\u516B', value: false },
    { id: 9, text: '\u7C7B\u76EE\u4E5D', value: false },
    { id: 10, text: '\u7C7B\u76EE\u5341', value: false },
    { id: 11, text: '\u7C7B\u76EE\u5341\u4E00', value: false },
    { id: 12, text: '\u7C7B\u76EE\u5341\u4E8C', value: false },
    { id: 13, text: '\u7C7B\u76EE\u5341\u4E09', value: false },
    { id: 14, text: '\u7C7B\u76EE\u5341\u56DB', value: false },
    { id: 15, text: '\u7C7B\u76EE\u5341\u4E94', value: false }
  ];

  change(item: TagSelectDemoItem): void {
    if (item.id === 0) {
      this.categories.forEach(i => (i.value = item.value));
      return;
    }
    this.categories.find(w => w.id === 0)!.value = false;
  }
}`,lang:"ts",componentName:"ComponentsTagSelectSimpleComponent",point:0,name:"simple",urls:"packages/abc/tag-select/demo/simple.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-tag-select"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-tag-select-simple"),t(7,`
        `),a(),t(8,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id))},dependencies:[j,H,Al,B,R,F],encapsulation:2});let n=e;return n})();var Vl=(()=>{let e=class e{constructor(d,o){this.xlsx=d,this.cdr=o}url(){this.xlsx.import("./assets/demo.xlsx").then(d=>{this.data=d,this.cdr.detectChanges()})}change(d){let o=d.target;this.xlsx.import(o.files[0]).then(i=>{this.data=i,this.cdr.detectChanges()}),o.value=""}};e.\u0275fac=function(o){return new(o||e)($(Sn),$(lt))},e.\u0275cmp=h({type:e,selectors:[["components-xlsx-import"]],standalone:!0,features:[f],decls:10,vars:3,consts:[["nz-button","",3,"click"],["type","file","multiple","false",1,"ml-sm",3,"change"],[1,"mt-sm"]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"button",0),v("click",function(){return i.url()}),t(2,"Via Url"),a(),t(3,`
    `),r(4,"input",1),v("change",function(g){return i.change(g)}),a(),t(5,`
    `),r(6,"p",2),t(7),ne(8,"json"),a(),t(9,`
  `)),o&2&&(c(7),mt("result: ",se(8,1,i.data),""))},dependencies:[I,D,N,E,Me],encapsulation:2,changeDetection:0});let n=e;return n})();var Ll=(()=>{let e=class e{constructor(){this.xlsx=S(Sn),this.users=Array(100).fill({}).map((d,o)=>({id:o+1,name:`name ${o+1}`,age:Math.ceil(Math.random()*10)+20})),this.columns=[{title:"\u7F16\u53F7",index:"id",type:"checkbox"},{title:"\u59D3\u540D",index:"name"},{title:"\u5E74\u9F84",index:"age"}]}download(d){let o=[this.columns.map(i=>i.title)];this.users.forEach(i=>o.push(this.columns.map(p=>i[p.index]))),this.xlsx.export({sheets:[{data:o,name:"sheet name"}],format:d})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-xlsx-export"]],standalone:!0,features:[f],decls:9,vars:3,consts:[["nz-button","",3,"click"],[1,"mt-sm",3,"data","ps","columns"]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"button",0),v("click",function(){return i.download("xlsx")}),t(2,"Export Xlsx"),a(),t(3,`
    `),r(4,"button",0),v("click",function(){return i.download("csv")}),t(5,"Export Csv"),a(),t(6,`
    `),m(7,"st",1),t(8,`
  `)),o&2&&(c(7),s("data",i.users)("ps",3)("columns",i.columns))},dependencies:[I,D,N,E,X,Z],encapsulation:2});let n=e;return n})();var Ol=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/xlsx/index.en-US.md","zh-CN":"packages/abc/xlsx/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>An Excel file operation based on <a target="_blank" href="http://sheetjs.com/" data-url="http://sheetjs.com/">sheetjs</a>.</p><blockquote><p>Note: You can also use <a target="_blank" href="https://github.com/protobi/js-xlsx" data-url="https://github.com/protobi/js-xlsx">js-xlsx</a> to be another Fork by sheetjs library that provides additional options including: images, styles, and more. Finally, use <code>callback</code> option to render your excel.</p></blockquote><h2 id="Dependencies"><a class="lake-link"><i data-anchor="Dependencies"></i></a>Dependencies</h2><p>The sheetjs script file takes the form of lazy loading\uFF0Cyou can change the default CDN path via <a href="/docs/global-config" data-url="/docs/global-config">Global Configuration</a>. By default: <code>https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js</code>.</p><p><strong>Use local path</strong></p><pre class="hljs language-json"><code>// angular.json
{
  "glob": "**/{xlsx.full.min,cpexcel}.js",
  "input": "./node_modules/xlsx/dist",
  "output": "assets/xlsx/"
}</code></pre><pre class="hljs language-ts"><code>// global-config.module.ts
const alainConfig: AlainConfig = {
  xlsx: {
    url: '/assets/xlsx/xlsx.full.min.js',
    modules: [\`/assets/xlsx/cpexcel.js\`]
  }
};</code></pre></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="LazyService"><a class="lake-link"><i data-anchor="LazyService"></i></a>LazyService</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>import(fileOrUrl: File | string)</code></td><td>Import Excel, return JSON</td><td><code>Promise&lt;{ [key: string]: any[][] }></code></td><td>-</td></tr><tr><td><code>export(options: <a data-toc="XlsxExportOptions">XlsxExportOptions</a>)</code></td><td>Export Excel</td><td><code>Promise&lt;void></code></td><td>-</td></tr><tr><td><code>numberToSchema(val: number)</code></td><td>Numeric to schema name</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="XlsxExportOptions"><a class="lake-link"><i data-anchor="XlsxExportOptions"></i></a>XlsxExportOptions</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[sheets]</code></td><td>Data source</td><td><code>{ [sheet: string]: WorkSheet } | XlsxExportSheet[]</code></td><td>-</td></tr><tr><td><code>[filename]</code></td><td>file name of excel</td><td><code>string</code></td><td><code>export.xlsx</code></td></tr><tr><td><code>[opts]</code></td><td>Excel options, see <a target="_blank" href="https://github.com/SheetJS/sheetjs/blob/master/docbits/81_writeopts.md" data-url="https://github.com/SheetJS/sheetjs/blob/master/docbits/81_writeopts.md">WritingOptions</a></td><td><code>WritingOptions</code></td><td>-</td></tr><tr><td><code>[callback]</code></td><td>Trigger before saving</td><td><code>(wb: WorkBook) => void</code></td><td>-</td></tr></tbody></table><h3 id="xlsx"><a class="lake-link"><i data-anchor="xlsx"></i></a>xlsx<label class="api-type-label directive">directive</label></h3><p>xlsx directive.</p><pre class="hljs language-html"><code>&lt;div [xlsx]="XlsxExportOptions"&gt;Export&lt;/div&gt;</code></pre>',meta:{type:"Basic",title:"xlsx",order:6,subtitle:"Excel",cols:1,module:"import { XlsxModule } from '@delon/abc/xlsx';"},toc:[{id:"Dependencies",title:"Dependencies",h:2},{id:"API",title:"API",h:2,children:[{id:"LazyService",title:"LazyService",h:3},{id:"XlsxExportOptions",title:"XlsxExportOptions",h:3},{id:"xlsx",title:"xlsx",h:3}]}]},"zh-CN":{content:`<section class="markdown"><p>\u4E00\u4E2A\u57FA\u4E8E <a target="_blank" href="http://sheetjs.com/" data-url="http://sheetjs.com/">SheetJS</a> \u7684Excel\u6587\u4EF6\u64CD\u4F5C\uFF0C\u5B83\u662F\u76EE\u524D\u5728\u6D4F\u89C8\u5668\u4E2D\u5305\u542B\u6700\u5168\u7684Excel\u64CD\u4F5C\u7684\u811A\u672C\u5E93\u3002</p><blockquote><p>\u6CE8\uFF1A\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528 <a target="_blank" href="https://github.com/protobi/js-xlsx" data-url="https://github.com/protobi/js-xlsx">js-xlsx</a> \u662F\u53E6\u4E00\u4E2A Fork sheetjs \u7684\u7C7B\u5E93\uFF0C\u5B83\u63D0\u4F9B\u5305\u62EC\uFF1A\u56FE\u7247\u3001\u6837\u5F0F\u7B49\u989D\u5916\u9009\u9879\u3002\u6700\u540E\u4F60\u5229\u7528 <code>callback</code> \u9009\u9879\u91CD\u8981\u6E32\u67D3\u4F60\u7684 excel\u3002</p></blockquote><h2 id="\u4F9D\u8D56"><a class="lake-link"><i data-anchor="\u4F9D\u8D56"></i></a>\u4F9D\u8D56</h2><p>\u7531\u4E8E sheetjs \u811A\u672C\u5927\u5C0F\u4EE5\u53CA\u5BF9 Excel \u7684\u64CD\u4F5C\u5E76\u4E0D\u662F\u521A\u9700\u7684\u539F\u56E0\uFF0C\u56E0\u6B64\u91C7\u7528\u4E00\u79CD\u5EF6\u8FDF\u52A0\u8F7D\u811A\u672C\u7684\u5F62\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u914D\u7F6E\u6765\u6539\u53D8\u9ED8\u8BA4 CDN \u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F7F\u7528 <code>https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js</code>\u3002</p><p><strong>\u4F7F\u7528\u672C\u5730\u8DEF\u5F84</strong></p><pre class="hljs language-json"><code>// angular.json
{
  "glob": "**/{xlsx.full.min,cpexcel}.js",
  "input": "./node_modules/xlsx/dist",
  "output": "assets/xlsx/"
}</code></pre><pre class="hljs language-ts"><code>// global-config.module.ts
const alainConfig: AlainConfig = {
  xlsx: {
    url: '/assets/xlsx/xlsx.full.min.js',
    modules: [\`/assets/xlsx/cpexcel.js\`]
  }
};</code></pre></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="LazyService"><a class="lake-link"><i data-anchor="LazyService"></i></a>LazyService</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>import(fileOrUrl: File | string)</code></td><td>\u5BFC\u5165Excel\uFF0C\u8FD4\u56DE JSON</td><td><code>Promise&lt;{ [key: string]: any[][] }></code></td><td>-</td></tr><tr><td><code>export(options: <a data-toc="XlsxExportOptions">XlsxExportOptions</a>)</code></td><td>\u5BFC\u51FAExcel</td><td><code>Promise&lt;void></code></td><td>-</td></tr><tr><td><code>numberToSchema(val: number)</code></td><td>\u6570\u503C\u8F6C\u7B26\u53F7\u540D</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="XlsxExportOptions"><a class="lake-link"><i data-anchor="XlsxExportOptions"></i></a>XlsxExportOptions</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[sheets]</code></td><td>\u6570\u636E\u6E90</td><td><code>{ [sheet: string]: WorkSheet } | XlsxExportSheet[]</code></td><td>-</td></tr><tr><td><code>[filename]</code></td><td>Excel\u6587\u4EF6\u540D</td><td><code>string</code></td><td><code>export.xlsx</code></td></tr><tr><td><code>[opts]</code></td><td>Excel\u5199\u5165\u9009\u9879\uFF0C\u89C1 <a target="_blank" href="https://github.com/SheetJS/sheetjs/blob/master/docbits/81_writeopts.md" data-url="https://github.com/SheetJS/sheetjs/blob/master/docbits/81_writeopts.md">WritingOptions</a></td><td><code>WritingOptions</code></td><td>-</td></tr><tr><td><code>[callback]</code></td><td>\u4FDD\u5B58\u524D\u89E6\u53D1</td><td><code>(wb: WorkBook) => void</code></td><td>-</td></tr></tbody></table><h3 id="xlsx"><a class="lake-link"><i data-anchor="xlsx"></i></a>xlsx<label class="api-type-label directive">directive</label></h3><p>xlsx \u6307\u4EE4\u3002</p><pre class="hljs language-html"><code>&lt;div [xlsx]="XlsxExportOptions"&gt;\u5BFC\u51FA&lt;/div&gt;</code></pre>',meta:{type:"Basic",title:"xlsx",order:6,subtitle:"Excel \u64CD\u4F5C",cols:1,module:"import { XlsxModule } from '@delon/abc/xlsx';"},toc:[{id:"\u4F9D\u8D56",title:"\u4F9D\u8D56",h:2},{id:"API",title:"API",h:2,children:[{id:"LazyService",title:"LazyService",h:3},{id:"XlsxExportOptions",title:"XlsxExportOptions",h:3},{id:"xlsx",title:"xlsx",h:3}]}]}},demo:!0},this.codes=[{id:"components-xlsx-import",meta:{order:1,title:{"zh-CN":"\u5BFC\u5165","en-US":"Import"}},summary:{"zh-CN":"<p>\u5BFC\u5165Excel\u5E76\u8F93\u51FAJSON\uFF0C\u652F\u6301 File\u3001URL \u683C\u5F0F\u3002</p>","en-US":"<p>Import Excel and output JSON, support File, URL.</p>"},code:`import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { XlsxService } from '@delon/abc/xlsx';
import { NzButtonModule } from 'ng-zorro-antd/button';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'components-xlsx-import',
  template: \`
    <button nz-button (click)="url()">Via Url</button>
    <input type="file" (change)="change($event)" multiple="false" class="ml-sm" />
    <p class="mt-sm">result: {{ data | json }}</p>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NzButtonModule, JsonPipe]
})
export class ComponentsXlsxImportComponent {
  data: NzSafeAny;

  constructor(
    private xlsx: XlsxService,
    private cdr: ChangeDetectorRef
  ) {}

  url(): void {
    this.xlsx.import(\`./assets/demo.xlsx\`).then(res => {
      this.data = res;
      this.cdr.detectChanges();
    });
  }

  change(e: Event): void {
    const node = e.target as HTMLInputElement;
    this.xlsx.import(node.files![0]).then(res => {
      this.data = res;
      this.cdr.detectChanges();
    });
    node.value = '';
  }
}`,lang:"ts",componentName:"ComponentsXlsxImportComponent",point:0,name:"import",urls:"packages/abc/xlsx/demo/import.md",type:"demo"},{id:"components-xlsx-export",meta:{order:2,title:{"zh-CN":"\u5BFC\u51FA","en-US":"Export"}},summary:{"zh-CN":"<p>\u5BFC\u51FAExcel\u5E76\u81EA\u52A8\u5F39\u51FA\u4FDD\u5B58\u5BF9\u8BDD\u6846\u3002</p>","en-US":"<p>Export Excel and automatically pop save dialog.</p>"},code:`import { Component, inject } from '@angular/core';

import { STColumn, STData, STModule } from '@delon/abc/st';
import { XlsxService } from '@delon/abc/xlsx';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-xlsx-export',
  template: \`
    <button nz-button (click)="download('xlsx')">Export Xlsx</button>
    <button nz-button (click)="download('csv')">Export Csv</button>
    <st [data]="users" [ps]="3" [columns]="columns" class="mt-sm" />
  \`,
  standalone: true,
  imports: [NzButtonModule, STModule]
})
export class ComponentsXlsxExportComponent {
  private readonly xlsx = inject(XlsxService);

  users: STData[] = Array(100)
    .fill({})
    .map((_, idx) => ({
      id: idx + 1,
      name: \`name \${idx + 1}\`,
      age: Math.ceil(Math.random() * 10) + 20
    }));
  columns: STColumn[] = [
    { title: '\u7F16\u53F7', index: 'id', type: 'checkbox' },
    { title: '\u59D3\u540D', index: 'name' },
    { title: '\u5E74\u9F84', index: 'age' }
  ];

  download(format: 'xlsx' | 'csv'): void {
    const data = [this.columns.map(i => i.title)];
    this.users.forEach(i => data.push(this.columns.map(c => i[c.index as string])));
    this.xlsx.export({
      sheets: [
        {
          data,
          name: 'sheet name'
        }
      ],
      format
    });
  }
}`,lang:"ts",componentName:"ComponentsXlsxExportComponent",point:1,name:"export",urls:"packages/abc/xlsx/demo/export.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-xlsx"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-xlsx-import"),t(7,`
        `),a(),t(8,`
      
        `),r(9,"code-box",3),t(10,`
          `),m(11,"components-xlsx-export"),t(12,`
        `),a(),t(13,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id),c(5),s("item",i.codes[1]),T("id",i.codes[1].id))},dependencies:[j,H,Vl,Ll,B,R,F],encapsulation:2});let n=e;return n})();var jl=Ci(Jn());var uo=class uo{constructor(e){this.http=S(Li),this.lazy=S(We),this.ngZone=S(Jt),this.cog=e.merge("zip",{url:"https://cdn.jsdelivr.net/npm/jszip@3/dist/jszip.min.js",utils:[]})}init(){return this.lazy.load([this.cog.url].concat(this.cog.utils))}check(e){if(!e)throw new Error("get instance via `ZipService.create()`")}read(e,l){return new Promise((d,o)=>{let i=p=>{this.ngZone.run(()=>d(p))};this.init().then(()=>{if(typeof e=="string"){this.http.request("GET",e,{responseType:"arraybuffer"}).subscribe({next:g=>{JSZip.loadAsync(g,l).then(u=>i(u))},error:g=>{o(g)}});return}let p=new FileReader;p.onload=g=>{JSZip.loadAsync(g.target.result,l).then(u=>i(u))},p.readAsBinaryString(e)})})}create(){return new Promise(e=>{this.init().then(()=>{let l=new JSZip;e(l)}).catch(()=>e(null))})}pushUrl(e,l,d){return this.check(e),new Promise((o,i)=>{this.http.request("GET",d,{responseType:"arraybuffer"}).subscribe({next:p=>{e.file(l,p),o()},error:p=>{i({url:d,error:p})}})})}save(e,l){this.check(e);let d=yt({filename:"download.zip"},l);return new Promise((o,i)=>{e.generateAsync(yt({type:"blob"},d.options),d.update).then(p=>{d.callback&&d.callback(p),(0,jl.saveAs)(p,d.filename),o()},p=>{i(p)})})}};uo.\u0275fac=function(l){return new(l||uo)(go(At))},uo.\u0275prov=ce({token:uo,factory:uo.\u0275fac,providedIn:"root"});var io=uo;Fe([Ve()],io.prototype,"read",null);function rf(n,e){if(n&1&&(t(0,`
        `),r(1,"li"),t(2),ne(3,"json"),a(),t(4,`
      `)),n&2){let l=e.$implicit;c(2),V(se(3,1,l))}}var Hl=(()=>{let e=class e{constructor(){this.zip=S(io),this.cdr=S(lt),this.data=[]}format(d){let o=d.files;this.data=Object.keys(o).map(i=>({name:i,dir:o[i].dir,date:o[i].date})),this.cdr.detectChanges()}url(){this.zip.read("./assets/demo.zip").then(d=>this.format(d))}change(d){let o=d.target.files[0];this.zip.read(o).then(i=>this.format(i))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["components-zip-read"]],standalone:!0,features:[f],decls:11,vars:0,consts:[["nz-button","",3,"click"],["type","file","multiple","false",1,"ml-sm",3,"change"]],template:function(o,i){o&1&&(t(0,`
    `),r(1,"button",0),v("click",function(){return i.url()}),t(2,"Via Url"),a(),t(3,`
    `),r(4,"input",1),v("change",function(g){return i.change(g)}),a(),t(5,`
    `),r(6,"ol"),t(7,`
      `),St(8,rf,5,3,null,null,kt),a(),t(10,`
  `)),o&2&&(c(8),zt(i.data))},dependencies:[I,D,N,E,Me],encapsulation:2,changeDetection:0});let n=e;return n})();function af(n,e){if(n&1){let l=w();t(0,`
            `),r(1,"tr"),t(2,`
              `),r(3,"td")(4,"input",3),O("ngModelChange",function(o){let i=y(l).$implicit;return A(i.path,o)||(i.path=o),x(o)}),a()(),t(5,`
              `),r(6,"td")(7,"input",3),O("ngModelChange",function(o){let i=y(l).$implicit;return A(i.url,o)||(i.url=o),x(o)}),a()(),t(8,`
            `),a(),t(9,`
          `)}if(n&2){let l=e.$implicit,d=e.$index;c(4),$o("name","path",d,""),L("ngModel",l.path),c(3),$o("name","url",d,""),L("ngModel",l.url)}}function lf(n,e){if(n&1){let l=w();t(0,`
      `),r(1,"button",0),v("click",function(){y(l);let o=b();return x(o.add())}),t(2,"new"),a(),t(3,`
      `),r(4,"button",1),v("click",function(){y(l);let o=b();return x(o.download())}),t(5,"download"),a(),t(6,`
      `),r(7,"nz-table",2),t(8,`
        `),r(9,"thead"),t(10,`
          `),r(11,"tr"),t(12,`
            `),r(13,"th")(14,"span"),t(15,"path"),a()(),t(16,`
            `),r(17,"th")(18,"span"),t(19,"url"),a()(),t(20,`
          `),a(),t(21,`
        `),a(),t(22,`
        `),r(23,"tbody"),t(24,`
          `),St(25,af,10,6,null,null,kt),a(),t(27,`
      `),a(),t(28,`
    `)}if(n&2){let l=b();c(),s("nzType","primary"),c(6),s("nzData",l.data)("nzFrontPagination",!1)("nzShowPagination",!1),c(18),zt(l.data)}}var Wl=(()=>{let e=class e{constructor(d,o,i){this.zip=d,this.msg=o,this.instance=null,this.data=[{path:"\u5C0F\u7A0B\u5E8F\u6807\u5FD7.zip",url:"https://wximg.gtimg.com/shake_tv/mina/standard_logo.zip"}],this.zip.create().then(p=>{this.instance=p,i.detectChanges()})}add(){this.data.push({path:"",url:""})}download(){let d=[];this.data.forEach(o=>{d.push(this.zip.pushUrl(this.instance,o.path,o.url))}),Promise.all(d).then(()=>{this.zip.save(this.instance).then(()=>{this.msg.success("download success"),this.data=[]})},o=>{console.warn(o),this.msg.error(JSON.stringify(o))})}};e.\u0275fac=function(o){return new(o||e)($(io),$(vt),$(lt))},e.\u0275cmp=h({type:e,selectors:[["components-zip-save"]],standalone:!0,features:[f],decls:2,vars:1,consts:[["nz-button","",3,"click","nzType"],["nz-button","",1,"ml-sm",3,"click"],[1,"mt-sm",3,"nzData","nzFrontPagination","nzShowPagination"],["nz-input","",3,"ngModelChange","ngModel","name"]],template:function(o,i){o&1&&(t(0,`
    `),C(1,lf,29,4)),o&2&&(c(),M(i.instance?1:-1))},dependencies:[I,D,N,E,Md,Td,Sd,zd,kd,_d,wd,ut,Ct,ct,gt,pt,st],encapsulation:2});let n=e;return n})();var Ul=(()=>{let e=class e{constructor(){this.item={cols:1,urls:{"en-US":"packages/abc/zip/index.en-US.md","zh-CN":"packages/abc/zip/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>A Zip file operation based on <a target="_blank" href="http://stuk.github.io/jszip/" data-url="http://stuk.github.io/jszip/">jszip</a>.</p><h2 id="Dependencies"><a class="lake-link"><i data-anchor="Dependencies"></i></a>Dependencies</h2><p>The jszip script file takes the form of lazy loading\uFF0Cyou can change the default CDN path via <a href="/docs/global-config" data-url="/docs/global-config">Global Configuration</a>. By default: <code>https://cdn.jsdelivr.net/npm/jszip@3/dist/jszip.min.js</code>.</p><p><strong>Use local path</strong></p><pre class="hljs language-json"><code>// angular.json
{
  "glob": "**/jszip.min.js",
  "input": "./node_modules/jszip/dist",
  "output": "assets/jszip/"
}</code></pre><pre class="hljs language-ts"><code>// global-config.module.ts
const alainConfig: AlainConfig = {
  zip: {
    url: '/assets/jszip/jszip.min.js'
  }
};</code></pre></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="ZipService"><a class="lake-link"><i data-anchor="ZipService"></i></a>ZipService</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>read(fileOrUrl: File | string, options?: JSZip.JSZipLoadOptions)</code></td><td>Decompression</td><td><code>Promise&lt;JSZip></code></td><td>-</td></tr><tr><td><code>create()</code></td><td>Create a Zip instance for creating a compressed file</td><td><code>Promise&lt;JSZip></code></td><td>-</td></tr><tr><td><code>pushUrl(zip: JSZip, path: string, url: string)</code></td><td>Download the URL resource and write it to zip</td><td><code>Promise&lt;void></code></td><td>-</td></tr><tr><td><code>save(zip: JSZip, options?: ZipWriteOptions)</code></td><td>Save</td><td><code>Promise&lt;void></code></td><td>-</td></tr></tbody></table>',meta:{type:"Basic",title:"zip",order:7,subtitle:"Zip",cols:1},toc:[{id:"Dependencies",title:"Dependencies",h:2},{id:"API",title:"API",h:2,children:[{id:"ZipService",title:"ZipService",h:3}]}]},"zh-CN":{content:`<section class="markdown"><p>\u4E00\u4E2A\u57FA\u4E8E <a target="_blank" href="http://stuk.github.io/jszip/" data-url="http://stuk.github.io/jszip/">jszip</a> \u7684Zip\u6587\u4EF6\u64CD\u4F5C\u3002</p><h2 id="\u4F9D\u8D56"><a class="lake-link"><i data-anchor="\u4F9D\u8D56"></i></a>\u4F9D\u8D56</h2><p>\u7531\u4E8E jszip \u811A\u672C\u5927\u5C0F\u4EE5\u53CA\u5BF9 Zip \u7684\u64CD\u4F5C\u5E76\u4E0D\u662F\u521A\u9700\u7684\u539F\u56E0\uFF0C\u56E0\u6B64\u91C7\u7528\u4E00\u79CD\u5EF6\u8FDF\u52A0\u8F7D\u811A\u672C\u7684\u5F62\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u914D\u7F6E\u6765\u6539\u53D8\u9ED8\u8BA4 CDN \u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F7F\u7528 <code>https://cdn.jsdelivr.net/npm/jszip@3/dist/jszip.min.js</code>\u3002</p><p><strong>\u4F7F\u7528\u672C\u5730\u8DEF\u5F84</strong></p><pre class="hljs language-json"><code>// angular.json
{
  "glob": "**/jszip.min.js",
  "input": "./node_modules/jszip/dist",
  "output": "assets/jszip/"
}</code></pre><pre class="hljs language-ts"><code>// global-config.module.ts
const alainConfig: AlainConfig = {
  zip: {
    url: '/assets/jszip/jszip.min.js'
  }
};</code></pre></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="ZipService"><a class="lake-link"><i data-anchor="ZipService"></i></a>ZipService</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>read(fileOrUrl: File | string, options?: JSZip.JSZipLoadOptions)</code></td><td>\u89E3\u538B</td><td><code>Promise&lt;JSZip></code></td><td>-</td></tr><tr><td><code>create()</code></td><td>\u521B\u5EFA Zip \u5B9E\u4F8B\uFF0C\u7528\u4E8E\u521B\u5EFA\u538B\u7F29\u6587\u4EF6</td><td><code>Promise&lt;JSZip></code></td><td>-</td></tr><tr><td><code>pushUrl(zip: JSZip, path: string, url: string)</code></td><td>\u4E0B\u8F7DURL\u8D44\u6E90\u5E76\u5199\u5165 zip</td><td><code>Promise&lt;void></code></td><td>-</td></tr><tr><td><code>save(zip: JSZip, options?: ZipWriteOptions)</code></td><td>\u4FDD\u5B58Zip</td><td><code>Promise&lt;void></code></td><td>-</td></tr></tbody></table>',meta:{type:"Basic",title:"zip",order:7,subtitle:"Zip \u64CD\u4F5C",cols:1},toc:[{id:"\u4F9D\u8D56",title:"\u4F9D\u8D56",h:2},{id:"API",title:"API",h:2,children:[{id:"ZipService",title:"ZipService",h:3}]}]}},demo:!0},this.codes=[{id:"components-zip-read",meta:{order:1,title:"\u89E3\u538B"},summary:{"zh-CN":"<p>\u8BFB\u53D6Zip\u6587\u4EF6\u4FE1\u606F\uFF08\u542B\u5185\u5BB9\uFF09\uFF0C\u652F\u6301 File\u3001URL \u5F62\u5F0F\u3002</p>","en-US":"<p>Read Zip file information (including content), support File, URL form.</p>"},code:`import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

import type jsZipType from 'jszip';

import { ZipService } from '@delon/abc/zip';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-zip-read',
  template: \`
    <button nz-button (click)="url()">Via Url</button>
    <input type="file" (change)="change($event)" multiple="false" class="ml-sm" />
    <ol>
      @for (i of data; track $index) {
        <li>{{ i | json }}</li>
      }
    </ol>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NzButtonModule, JsonPipe]
})
export class ComponentsZipReadComponent {
  private readonly zip = inject(ZipService);
  private readonly cdr = inject(ChangeDetectorRef);
  data: Array<{ name: string; dir: boolean; date: Date }> = [];

  private format(data: jsZipType): void {
    const files = data.files;
    this.data = Object.keys(files).map(key => ({
      name: key,
      dir: files[key].dir,
      date: files[key].date
    }));
    this.cdr.detectChanges();
  }

  url(): void {
    this.zip.read(\`./assets/demo.zip\`).then(res => this.format(res));
  }

  change(e: Event): void {
    const file = (e.target as HTMLInputElement).files![0];
    this.zip.read(file).then(res => this.format(res));
  }
}`,lang:"ts",componentName:"ComponentsZipReadComponent",point:0,name:"read",urls:"packages/abc/zip/demo/read.md",type:"demo"},{id:"components-zip-save",meta:{order:2,title:"\u538B\u7F29"},summary:{"zh-CN":"<p>\u901A\u8FC7 <code>pushUrl</code> \u53EF\u4EE5\u5FEB\u901F\u5C06URL\u8D44\u6E90\u5199\u5165 Zip \u5B9E\u4F8B\u3002</p>","en-US":"<p>Use <code>pushUrl</code> to quickly write URL resources to a Zip instance.</p>"},code:`import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type jsZipType from 'jszip';

import { ZipService } from '@delon/abc/zip';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'components-zip-save',
  template: \`
    @if (instance) {
      <button nz-button (click)="add()" [nzType]="'primary'">new</button>
      <button nz-button (click)="download()" class="ml-sm">download</button>
      <nz-table [nzData]="data" [nzFrontPagination]="false" [nzShowPagination]="false" class="mt-sm">
        <thead>
          <tr>
            <th><span>path</span></th>
            <th><span>url</span></th>
          </tr>
        </thead>
        <tbody>
          @for (i of data; track $index) {
            <tr>
              <td><input nz-input [(ngModel)]="i.path" name="path{{ $index }}" /></td>
              <td><input nz-input [(ngModel)]="i.url" name="url{{ $index }}" /></td>
            </tr>
          }
        </tbody>
      </nz-table>
    }
  \`,
  standalone: true,
  imports: [NzButtonModule, NzTableModule, FormsModule, NzInputModule]
})
export class ComponentsZipSaveComponent {
  instance: jsZipType | null = null;
  data: Array<{ path: string; url: string }> = [
    { path: '\u5C0F\u7A0B\u5E8F\u6807\u5FD7.zip', url: 'https://wximg.gtimg.com/shake_tv/mina/standard_logo.zip' }
  ];

  constructor(
    private zip: ZipService,
    private msg: NzMessageService,
    cdr: ChangeDetectorRef
  ) {
    this.zip.create().then(ret => {
      this.instance = ret;
      cdr.detectChanges();
    });
  }

  add(): void {
    this.data.push({ path: '', url: '' });
  }

  download(): void {
    const promises: Array<Promise<void>> = [];
    this.data.forEach(item => {
      promises.push(this.zip.pushUrl(this.instance, item.path, item.url));
    });
    Promise.all(promises).then(
      () => {
        this.zip.save(this.instance).then(() => {
          this.msg.success('download success');
          this.data = [];
        });
      },
      (error: {}) => {
        console.warn(error);
        this.msg.error(JSON.stringify(error));
      }
    );
  }
}`,lang:"ts",componentName:"ComponentsZipSaveComponent",point:1,name:"save",urls:"packages/abc/zip/demo/save.md",type:"demo"}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["app-components-zip"]],hostVars:2,hostBindings:function(o,i){o&2&&k("d-block","true")},standalone:!0,features:[f],decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(o,i){o&1&&(r(0,"app-docs",0)(1,"div",1)(2,"div",2),t(3,`
        `),r(4,"code-box",3),t(5,`
          `),m(6,"components-zip-read"),t(7,`
        `),a(),t(8,`
      
        `),r(9,"code-box",3),t(10,`
          `),m(11,"components-zip-save"),t(12,`
        `),a(),t(13,`
      `),a()()()),o&2&&(s("codes",i.codes)("item",i.item),c(),s("nzGutter",16),c(3),s("item",i.codes[0]),T("id",i.codes[0].id),c(5),s("item",i.codes[1]),T("id",i.codes[1].id))},dependencies:[j,H,Hl,Wl,B,R,F],encapsulation:2});let n=e;return n})();var HP=[{path:"",component:Ld,children:[{path:"",redirectTo:"sv/zh",pathMatch:"full"},{path:"auto-focus",redirectTo:"auto-focus/zh",pathMatch:"full"},{path:"auto-focus/:lang",component:Ud},{path:"avatar-list",redirectTo:"avatar-list/zh",pathMatch:"full"},{path:"avatar-list/:lang",component:Zd},{path:"cell",redirectTo:"cell/zh",pathMatch:"full"},{path:"cell/:lang",component:Yd},{path:"count-down",redirectTo:"count-down/zh",pathMatch:"full"},{path:"count-down/:lang",component:ir},{path:"date-picker",redirectTo:"date-picker/zh",pathMatch:"full"},{path:"date-picker/:lang",component:lr},{path:"down-file",redirectTo:"down-file/zh",pathMatch:"full"},{path:"down-file/:lang",component:pr},{path:"ellipsis",redirectTo:"ellipsis/zh",pathMatch:"full"},{path:"ellipsis/:lang",component:hr},{path:"error-collect",redirectTo:"error-collect/zh",pathMatch:"full"},{path:"error-collect/:lang",component:gr},{path:"exception",redirectTo:"exception/zh",pathMatch:"full"},{path:"exception/:lang",component:xr},{path:"footer-toolbar",redirectTo:"footer-toolbar/zh",pathMatch:"full"},{path:"footer-toolbar/:lang",component:zr},{path:"full-content",redirectTo:"full-content/zh",pathMatch:"full"},{path:"full-content/:lang",component:_r},{path:"global-footer",redirectTo:"global-footer/zh",pathMatch:"full"},{path:"global-footer/:lang",component:Mr},{path:"highlight",redirectTo:"highlight/zh",pathMatch:"full"},{path:"highlight/:lang",component:Nr},{path:"hotkey",redirectTo:"hotkey/zh",pathMatch:"full"},{path:"hotkey/:lang",component:Or},{path:"let",redirectTo:"let/zh",pathMatch:"full"},{path:"let/:lang",component:Wr},{path:"loading",redirectTo:"loading/zh",pathMatch:"full"},{path:"loading/:lang",component:$r},{path:"lodop",redirectTo:"lodop/zh",pathMatch:"full"},{path:"lodop/:lang",component:Jr},{path:"media",redirectTo:"media/zh",pathMatch:"full"},{path:"media/:lang",component:na},{path:"notice-icon",redirectTo:"notice-icon/zh",pathMatch:"full"},{path:"notice-icon/:lang",component:ga},{path:"observers",redirectTo:"observers/zh",pathMatch:"full"},{path:"observers/:lang",component:ya},{path:"onboarding",redirectTo:"onboarding/zh",pathMatch:"full"},{path:"onboarding/:lang",component:za},{path:"page-header",redirectTo:"page-header/zh",pathMatch:"full"},{path:"page-header/:lang",component:Na},{path:"pdf",redirectTo:"pdf/zh",pathMatch:"full"},{path:"pdf/:lang",component:Aa},{path:"quick-menu",redirectTo:"quick-menu/zh",pathMatch:"full"},{path:"quick-menu/:lang",component:Va},{path:"result",redirectTo:"result/zh",pathMatch:"full"},{path:"result/:lang",component:Ua},{path:"reuse-tab",redirectTo:"reuse-tab/zh",pathMatch:"full"},{path:"reuse-tab/:lang",component:qa},{path:"se",redirectTo:"se/zh",pathMatch:"full"},{path:"se/:lang",component:el},{path:"sg",redirectTo:"sg/zh",pathMatch:"full"},{path:"sg/:lang",component:il},{path:"st",redirectTo:"st/zh",pathMatch:"full"},{path:"st/:lang",component:Dl},{path:"sv",redirectTo:"sv/zh",pathMatch:"full"},{path:"sv/:lang",component:Rl},{path:"tag-select",redirectTo:"tag-select/zh",pathMatch:"full"},{path:"tag-select/:lang",component:Bl},{path:"xlsx",redirectTo:"xlsx/zh",pathMatch:"full"},{path:"xlsx/:lang",component:Ol},{path:"zip",redirectTo:"zip/zh",pathMatch:"full"},{path:"zip/:lang",component:Ul}]}];export{HP as routes};
