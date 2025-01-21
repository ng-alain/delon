import{a as ll,b as cl}from"./chunk-BC7SX6Y6.js";import{a as Xn,b as Kn}from"./chunk-KJE4MXBN.js";import{a as Uo,b as qo,c as Go,d as no}from"./chunk-XAFY4MOI.js";import{d as Pa,e as Ra,g as Vn,h as On,l as G,m as $,o as Ka,p as Ja,q as tl,r as el,s as ol,t as nl,v as al}from"./chunk-UNHKKIPS.js";import{a as Oa,b as ja,d as Wa,g as Ua,i as qa,k as Ga,l as $a,m as Qa,o as Za}from"./chunk-VH6OTVYY.js";import{a as Bo,b as Ha}from"./chunk-2THGRA36.js";import{f as Vo,h as Oo,k as jo,l as eo,m as kt,n as oo,o as $n,p as Dt}from"./chunk-2ATOVURD.js";import{b as ka,c as Da,d as An,e as Ma,f as Na,g as Ea}from"./chunk-AG6PSCNF.js";import{a as Ta}from"./chunk-GFQZJLBV.js";import{a as Le}from"./chunk-VSIMNQ2S.js";import{a as jn,b as Hn}from"./chunk-WBK64Q4T.js";import{a as Ho,b as Wo}from"./chunk-VSYGDKPR.js";import"./chunk-5C24NCAJ.js";import{a as Po,b as Ro,c as Bn}from"./chunk-27KJRF6V.js";import{a as Eo,c as La,d as Io,e as Ln}from"./chunk-SFDGHA5E.js";import{a as Xa}from"./chunk-AWQXRDLH.js";import{a as il,b as dl}from"./chunk-NZSANU7R.js";import{a as j}from"./chunk-ACVWIJBF.js";import"./chunk-7R5FOHEQ.js";import{a as O}from"./chunk-CQGKZ32H.js";import{a as rl}from"./chunk-ERSGKGDN.js";import{a as Qn,b as Zn}from"./chunk-DQ5EXTA3.js";import"./chunk-R54IMF6B.js";import"./chunk-7QH6PEWC.js";import{c as Fn,d as Ia,e as Ba,f as Va,g as Wn,i as Ao,o as Fo,p as Lo,q as P,r as R,s as se,t as Ya}from"./chunk-AWWA6FL6.js";import{E as ee,G as Se,H as Un,I as at,K as to,M as lt,N as qn,O as Gn,P as yt,d as ht,e as le,g as rt,h as Tt,j as Ke,k as Ut,l as ve,m as pt,n as wt,p as Je,q as De,r as te,s as ce,t as Rn,v as st,w as Ye,x as wa,z as Cr}from"./chunk-CMZ2TOIG.js";import{$b as En,$c as be,A as Vr,Aa as Ct,Ab as he,Ah as za,Ba as kn,Bb as z,Bc as ge,Bd as zt,Bg as k,C as Or,Cg as ha,Dc as ia,Dg as E,Dh as _a,E as jr,Eb as b,F as Ae,Fc as Jt,Fg as an,G as Hr,Gb as h,Gd as ye,Gg as fa,H as Sn,Hb as Z,He as Qe,Ia as jt,Ib as H,Ic as we,Ie as pa,J as He,Ja as Gr,Ka as $r,Kb as dn,Ld as Mo,Lh as No,Ma as l,Mb as Kt,Mc as Ce,Md as Wt,N as Wr,Na as tt,Nb as ot,O as Ur,Oa as qe,Ob as W,Og as ga,P as We,Pb as U,Pg as Ca,Q as Co,Qa as Yt,Qg as ba,Qh as Aa,Ra as Qr,Rb as Kr,Rg as ya,S as zn,Sa as Zr,Sb as Jr,Sh as Fa,Tb as v,Ub as e,V as qr,Vb as B,Ve as ma,Wa as u,Wb as ut,Wc as da,X as _n,Xa as $t,Xb as Nn,Y as gr,Ya as ue,Yb as F,Z as Ue,Zb as A,Zg as xa,_b as L,a as ft,ab as gt,ac as rn,ae as ca,af as ua,b as Pr,bb as f,bc as Ge,cc as Fe,d as Xl,da as de,dc as et,ea as Gt,ec as Q,f as Rr,fa as Tn,fb as Xr,fc as yo,g as Re,ga as wn,gb as _,gc as Yr,gh as va,h as Ar,ha as y,hb as c,i as Fr,ib as Et,ic as ae,j as Lr,jb as T,jc as fe,k as Br,kb as _e,l as Zt,lb as Te,ld as In,m as vn,ma as Rt,mb as Dn,mc as ta,md as ra,mg as bt,na as g,nc as I,nf as ke,ng as Vt,oa as C,og as Pt,oh as Sa,pc as ea,pg as xe,qb as w,rb as St,sb as Mn,sc as ct,sd as aa,ta as Bt,tb as xt,tc as X,te as sa,tg as M,u as ie,ub as vt,uc as dt,uh as Pn,va as At,vb as d,wa as Xt,wb as r,wd as la,wh as Ze,xb as p,ya as bo,yb as nt,yc as oa,yd as $e,za as re,zb as it,zc as na,zd as It,zg as N,zh as Xe}from"./chunk-LT2GRY6R.js";var xr=Xl((br,yr)=>{"use strict";(function(i,n){typeof define=="function"&&define.amd?define([],n):typeof br<"u"?n():(n(),i.FileSaver={})})(br,function(){"use strict";function i(D,V){return typeof V>"u"?V={autoBom:!1}:typeof V!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),V={autoBom:!V}),V.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(D.type)?new Blob(["\uFEFF",D],{type:D.type}):D}function n(D,V,mt){var q=new XMLHttpRequest;q.open("GET",D),q.responseType="blob",q.onload=function(){m(q.response,V,mt)},q.onerror=function(){console.error("could not download file")},q.send()}function t(D){var V=new XMLHttpRequest;V.open("HEAD",D,!1);try{V.send()}catch{}return 200<=V.status&&299>=V.status}function o(D){try{D.dispatchEvent(new MouseEvent("click"))}catch{var V=document.createEvent("MouseEvents");V.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),D.dispatchEvent(V)}}var a=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,s=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),m=a.saveAs||(typeof window!="object"||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(D,V,mt){var q=a.URL||a.webkitURL,_t=document.createElement("a");V=V||D.name||"download",_t.download=V,_t.rel="noopener",typeof D=="string"?(_t.href=D,_t.origin===location.origin?o(_t):t(_t.href)?n(D,V,mt):o(_t,_t.target="_blank")):(_t.href=q.createObjectURL(D),setTimeout(function(){q.revokeObjectURL(_t.href)},4e4),setTimeout(function(){o(_t)},0))}:"msSaveOrOpenBlob"in navigator?function(D,V,mt){if(V=V||D.name||"download",typeof D!="string")navigator.msSaveOrOpenBlob(i(D,mt),V);else if(t(D))n(D,V,mt);else{var q=document.createElement("a");q.href=D,q.target="_blank",setTimeout(function(){o(q)})}}:function(D,V,mt,q){if(q=q||open("","_blank"),q&&(q.document.title=q.document.body.innerText="downloading..."),typeof D=="string")return n(D,V,mt);var _t=D.type==="application/octet-stream",Lt=/constructor/i.test(a.HTMLElement)||a.safari,me=/CriOS\/[\d]+/.test(navigator.userAgent);if((me||_t&&Lt||s)&&typeof FileReader<"u"){var Pe=new FileReader;Pe.onloadend=function(){var go=Pe.result;go=me?go:go.replace(/^data:[^;]*;/,"data:attachment/file;"),q?q.location.href=go:location=go,q=null},Pe.readAsDataURL(D)}else{var xn=a.URL||a.webkitURL,Do=xn.createObjectURL(D);q?q.location=Do:location.href=Do,q=null,setTimeout(function(){xn.revokeObjectURL(Do)},4e4)}});a.saveAs=m.saveAs=m,typeof yr<"u"&&(yr.exports=m)})});var ln=class i{el=y(Ct).nativeElement;platform=y(ye);destroy$=y(Bt);enabled=re(!0,{transform:X});delay=re(300,{transform:dt});ngAfterViewInit(){let n=this.el;!this.platform.isBrowser||!(n instanceof HTMLElement)||!this.enabled()||Ae(this.delay()).pipe(zt(this.destroy$),We(1)).subscribe(()=>n.focus({preventScroll:!1}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=ue({type:i,selectors:[["","auto-focus",""],["input","autofocus","autofocus"],["textarea","autofocus","autofocus"]],inputs:{enabled:[1,"enabled"],delay:[1,"delay"]},exportAs:["autoFocus"]})};function Kl(i,n){i&1&&(e(0,`
      `),d(1,"div",1),e(2,`
        `),p(3,"input",2),e(4,`
      `),r(),e(5,`
    `))}var Jn=class i{showInput=!1;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-auto-focus-simple"]],decls:5,vars:1,consts:[["nz-button","",3,"click"],[1,"mt-md"],["nz-input","","auto-focus",""]],template:function(t,o){t&1&&(e(0,`
    `),d(1,"button",0),b("click",function(){return o.showInput=!o.showInput}),e(2,"Toggle Input"),r(),e(3,`
    `),f(4,Kl,6,0)),t&2&&(l(4),w(o.showInput?4:-1))},dependencies:[E,k,M,N,lt,at,ln],encapsulation:2})};var Yn=class i{item={cols:1,urls:{"en-US":"packages/abc/auto-focus/index.en-US.md","zh-CN":"packages/abc/auto-focus/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Allows to focus HTML-element right after its appearance, By default, it will take effect for <code>input</code> and <code>textarea</code> with <code>[autofocus="autofocus"]</code>.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="auto-focus"><a class="lake-link"><i data-anchor="auto-focus"></i></a>auto-focus<label class="api-type-label directive">directive</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[enabled]</code></td><td>Whether enabled of auto focus</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>Delay of the focus (unit: ms)</td><td><code>number</code></td><td><code>300</code></td></tr></tbody></table>',meta:{type:"Other",title:"auto-focus",subtitle:"Auto focus",cols:1,module:"import { AutoFocusModule } from '@delon/abc/auto-focus';"},toc:[{id:"API",title:"API",h:2,children:[{id:"auto-focus",title:"auto-focus",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u5141\u8BB8\u5728HTML\u5143\u7D20\u51FA\u73B0\u540E\u7ACB\u5373\u5BF9\u5176\u8FDB\u884C\u8BBE\u7F6E\u7126\u70B9\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u5BF9 <code>input</code>\u3001<code>textarea</code> \u5E26\u6709 <code>[autofocus="autofocus"]</code> \u751F\u6548\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="auto-focus"><a class="lake-link"><i data-anchor="auto-focus"></i></a>auto-focus<label class="api-type-label directive">directive</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[enabled]</code></td><td>\u662F\u5426\u542F\u7528</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u65F6\u957F\uFF08\u5355\u4F4D\uFF1A\u6BEB\u79D2\uFF09</td><td><code>number</code></td><td><code>300</code></td></tr></tbody></table>',meta:{type:"Other",title:"auto-focus",subtitle:"\u81EA\u52A8\u83B7\u5F97\u7126\u70B9",cols:1,module:"import { AutoFocusModule } from '@delon/abc/auto-focus';"},toc:[{id:"API",title:"API",h:2,children:[{id:"auto-focus",title:"auto-focus",h:3}]}]}},demo:!0};codes=[{id:"components-auto-focus-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';

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
  imports: [NzButtonModule, NzInputModule, AutoFocusDirective]
})
export class ComponentsAutoFocusSimpleComponent {
  showInput = false;
}`,lang:"ts",componentName:"ComponentsAutoFocusSimpleComponent",point:0,name:"simple",urls:"packages/abc/auto-focus/demo/simple.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-auto-focus"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-auto-focus-simple"),e(7,`
        `),r(),e(8,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id))},dependencies:[O,Jn,R,P,j],encapsulation:2})};var Jl=["*"],Me=class i{src;text;icon;tips;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["avatar-list-item"],["","avatar-list-item",""]],inputs:{src:"src",text:"text",icon:"icon",tips:"tips"},exportAs:["avatarListItem"],ngContentSelectors:Jl,decls:1,vars:0,template:function(t,o){t&1&&(Z(),H(0))},encapsulation:2,changeDetection:0})};function Yl(i,n){if(i&1&&p(0,"nz-avatar",2),i&2){let t=h().$implicit,o=h();c("nzTooltipTitle",t.tips)("nzSrc",t.src)("nzText",t.text)("nzIcon",t.icon)("nzSize",o.avatarSize)}}function tc(i,n){if(i&1&&p(0,"nz-avatar",3),i&2){let t=h().$implicit,o=h();c("nzSrc",t.src)("nzText",t.text)("nzIcon",t.icon)("nzSize",o.avatarSize)}}function ec(i,n){if(i&1&&(d(0,"li"),f(1,Yl,1,5,"nz-avatar",2)(2,tc,1,4,"nz-avatar",3),r()),i&2){let t=n.$implicit,o=h();Te(o.cls),l(),w(t.tips?1:2)}}function oc(i,n){if(i&1&&(d(0,"li"),p(1,"nz-avatar",4),r()),i&2){let t=h();Te(t.cls),l(),_e(t.excessItemsStyle),c("nzSize",t.avatarSize)("nzText","+"+t.exceedCount)}}var Be=class i{cdr=y(ct);directionality=y(Wt);destroy$=y(Bt);inited=!1;_items;items=[];exceedCount=0;dir="ltr";cls="";avatarSize="default";set size(n){switch(this.cls=`avatar-list__item${n==="default"?"":` avatar-list__${n}`}`,n){case"large":case"small":case"default":this.avatarSize=n;break;default:this.avatarSize="small";break}}maxLength=0;excessItemsStyle=null;gen(){let{_items:n}=this,t=this.maxLength>0?this.maxLength:n.length,o=n.length,a=t>0&&t>=o?o:t;this.items=n.toArray().slice(0,a),this.exceedCount=a<o?o-t:0,this.cdr.detectChanges()}ngAfterViewInit(){this.dir=this.directionality.value,this.directionality.change.pipe(zt(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),this.gen(),this.inited=!0}ngOnChanges(){this.inited&&this.gen()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["avatar-list"]],contentQueries:function(t,o,a){if(t&1&&Kt(a,Me,4),t&2){let s;W(s=U())&&(o._items=s)}},hostVars:4,hostBindings:function(t,o){t&2&&T("avatar-list",!0)("avatar-list-rtl",o.dir==="rtl")},inputs:{size:"size",maxLength:[2,"maxLength","maxLength",dt],excessItemsStyle:"excessItemsStyle"},exportAs:["avatarList"],features:[gt,Rt],decls:4,vars:1,consts:[[1,"avatar-list__wrap"],[3,"class"],["nz-tooltip","",3,"nzTooltipTitle","nzSrc","nzText","nzIcon","nzSize"],[3,"nzSrc","nzText","nzIcon","nzSize"],[2,"cursor","auto",3,"nzSize","nzText"]],template:function(t,o){t&1&&(d(0,"ul",0),xt(1,ec,3,3,"li",1,St),f(3,oc,2,6,"li",1),r()),t&2&&(l(),vt(o.items),l(2),w(o.exceedCount>0?3:-1))},dependencies:[Xn,ee],encapsulation:2,changeDetection:0})};var xo=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=$t({type:i});static \u0275inj=Gt({imports:[Ce,Kn,Se,Be]})};var nc=()=>({color:"#f56a00",backgroundColor:"#fde3cf"}),ti=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-avatar-list-maxLength"]],decls:13,vars:2,consts:[["size","mini","maxLength","3",3,"excessItemsStyle"],["tips","Jake","src","https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"],["tips","Andy","src","https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"],["tips","Niko","src","https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"],["tips","Cipchk","text","Cipchk"],["tips","heart-o","icon","heart-o"]],template:function(t,o){t&1&&(e(0," "),d(1,"avatar-list",0),e(2,`
    `),p(3,"avatar-list-item",1),e(4,`
    `),p(5,"avatar-list-item",2),e(6,`
    `),p(7,"avatar-list-item",3),e(8,`
    `),p(9,"avatar-list-item",4),e(10,`
    `),p(11,"avatar-list-item",5),e(12,`
  `),r()),t&2&&(l(),c("excessItemsStyle",et(1,nc)))},dependencies:[xo,Be,Me],encapsulation:2})};var ei=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-avatar-list-simple"]],decls:13,vars:0,consts:[["size","mini"],["tips","Jake","src","https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"],["tips","Andy","src","https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"],["tips","Niko","src","https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"],["tips","Cipchk","text","Cipchk"],["tips","heart-o","icon","heart-o"]],template:function(t,o){t&1&&(e(0," "),d(1,"avatar-list",0),e(2,`
    `),p(3,"avatar-list-item",1),e(4,`
    `),p(5,"avatar-list-item",2),e(6,`
    `),p(7,"avatar-list-item",3),e(8,`
    `),p(9,"avatar-list-item",4),e(10,`
    `),p(11,"avatar-list-item",5),e(12,`
  `),r())},dependencies:[xo,Be,Me],encapsulation:2})};var oi=class i{item={cols:1,urls:{"en-US":"packages/abc/avatar-list/index.en-US.md","zh-CN":"packages/abc/avatar-list/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>A list of user's avatar for project or group member list frequently. If a large or small avatar-list is desired, set the <code>size</code> property to either <code>large</code> or <code>small</code> and <code>mini</code> respectively. Omit the <code>size</code> property for a avatar-list with the default size.</p></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="avatar-list"><a class="lake-link"><i data-anchor="avatar-list"></i></a>avatar-list</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[size]</code></td><td>size of list</td><td><code>'large','small','mini','default'</code></td><td><code>'default'</code></td></tr><tr><td><code>[maxLength]</code></td><td>max items to show</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[excessItemsStyle]</code></td><td>the excess item style</td><td><code>{ [key: string]: string }</code></td><td>-</td></tr></tbody></table><h3 id="avatar-list-item"><a class="lake-link"><i data-anchor="avatar-list-item"></i></a>avatar-list-item</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[tips]</code></td><td>title tips for avatar item</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[src]</code></td><td>the address of the image for an image avatar</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[text]</code></td><td>text for avatar item</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[icon]</code></td><td>icon for avatar item</td><td><code>string</code></td><td>-</td></tr></tbody></table>`,meta:{type:"Basic",title:"avatar-list",subtitle:"AvatarList",cols:1,module:"import { AvatarListModule } from '@delon/abc/avatar-list';",deprecated:"20.0.0"},toc:[{id:"API",title:"API",h:2,children:[{id:"avatar-list",title:"avatar-list",h:3},{id:"avatar-list-item",title:"avatar-list-item",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u4E00\u7EC4\u7528\u6237\u5934\u50CF\uFF0C\u5E38\u7528\u5728\u9879\u76EE/\u56E2\u961F\u6210\u5458\u5217\u8868\u3002\u53EF\u901A\u8FC7\u8BBE\u7F6E <code>size</code> \u5C5E\u6027\u6765\u6307\u5B9A\u5934\u50CF\u5927\u5C0F\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="avatar-list"><a class="lake-link"><i data-anchor="avatar-list"></i></a>avatar-list</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[size]</code></td><td>\u5934\u50CF\u5927\u5C0F</td><td><code>'large','small','mini','default'</code></td><td><code>'default'</code></td></tr><tr><td><code>[maxLength]</code></td><td>\u8981\u663E\u793A\u7684\u6700\u5927\u9879\u76EE</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[excessItemsStyle]</code></td><td>\u591A\u4F59\u7684\u9879\u76EE\u98CE\u683C</td><td><code>{ [key: string]: string }</code></td><td>-</td></tr></tbody></table><h3 id="avatar-list-item"><a class="lake-link"><i data-anchor="avatar-list-item"></i></a>avatar-list-item</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[tips]</code></td><td>\u5934\u50CF\u5C55\u793A\u6587\u6848</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[src]</code></td><td>\u5934\u50CF\u56FE\u7247\u8FDE\u63A5</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[text]</code></td><td>\u6587\u672C\u7C7B\u5934\u50CF</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[icon]</code></td><td>\u56FE\u6807\u7C7B\u578B</td><td><code>string</code></td><td>-</td></tr></tbody></table>`,meta:{type:"Basic",title:"avatar-list",subtitle:"\u7528\u6237\u5934\u50CF\u5217\u8868",cols:1,module:"import { AvatarListModule } from '@delon/abc/avatar-list';",deprecated:"20.0.0"},toc:[{id:"API",title:"API",h:2,children:[{id:"avatar-list",title:"avatar-list",h:3},{id:"avatar-list-item",title:"avatar-list-item",h:3}]}]}},demo:!0};codes=[{id:"components-avatar-list-maxLength",meta:{title:{"zh-CN":"\u8981\u663E\u793A\u7684\u6700\u5927\u9879\u76EE","en-US":"Max Items to Show"},order:0},summary:`<p><code>maxLength</code> attribute specifies the maximum number of items to show while <code>excessItemsStyle</code> style the excess
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
  imports: [AvatarListModule]
})
export class ComponentsAvatarListSimpleComponent {}`,lang:"ts",componentName:"ComponentsAvatarListSimpleComponent",point:1,name:"simple",urls:"packages/abc/avatar-list/demo/simple.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-avatar-list"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-avatar-list-maxLength"),e(7,`
        `),r(),e(8,`
      
        `),d(9,"code-box",3),e(10,`
          `),p(11,"components-avatar-list-simple"),e(12,`
        `),r(),e(13,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id),l(5),c("item",o.codes[1]),_("id",o.codes[1].id))},dependencies:[O,ti,ei,R,P,j],encapsulation:2})};var ic=()=>({format:"fn"}),dc=i=>({date:i}),rc=()=>({type:"mega"}),ac=()=>({mask:"999****9999"}),lc=()=>({unit:"$"}),cc=()=>({type:"cny"}),sc=()=>({type:"boolean"}),ml=()=>({type:"img"}),pc=()=>["https://randomuser.me/api/portraits/thumb/women/46.jpg","https://randomuser.me/api/portraits/thumb/women/47.jpg"],mc=()=>({url:"https://ng-alain.com"}),uc=i=>({link:i}),hc=()=>({type:"html"}),ul=i=>({data:i}),fc=i=>({badge:i}),gc=i=>({tag:i}),Cc=()=>({label:"Label"}),bc=i=>({type:"checkbox",tooltip:"Tooltip",checkbox:i}),yc=()=>({label:"Radio"}),xc=i=>({type:"radio",tooltip:"Tooltip",radio:i}),vc=i=>({enum:i}),Sc=()=>({tooltip:"Tooltip"}),zc=()=>({unit:"\u4EBA"}),_c=()=>({text:"100",unit:"\u5143"}),Tc=()=>({key:"test",data:"new url"}),wc=i=>({widget:i}),kc=i=>({renderType:i});function Dc(i,n){if(i&1&&(e(0,`
        `),d(1,"div",1),e(2),ae(3,"json"),p(4,"cell",10),e(5," "),r(),e(6,`
      `)),i&2){let t=n.$implicit;l(2),ut(" ",fe(3,2,t)," => "),l(2),c("value",t)}}function Mc(i,n){if(i&1&&(e(0,`
        `),d(1,"div",1),e(2),p(3,"cell",2),e(4,`
        `),r(),e(5,`
      `)),i&2){let t=n.$implicit;l(2),ut(`
          `,t,` =>
          `),l(),c("value",t)("options",Q(3,kc,t))}}function Nc(i,n){if(i&1){let t=z();e(0,`
          `),d(1,"a",20),b("click",function(){g(t);let a=h();return C(a.again())}),e(2,"Again"),r(),e(3,`
        `)}}var ni=class i{ds=y(be);cdr=y(ct);value="string";imageValue="https://randomuser.me/api/portraits/thumb/women/47.jpg";checkbox=!1;radio=!0;disabled=!1;yn=!0;default="-";defaultCondition="*";options;baseList=["string",!0,!1,100,1e6,new Date];typeList=["primary","success","danger","warning"];now=new Date;day3=ya(new Date,3);HTML="<strong>Strong</string>";status={WAIT:{text:"Wait",tooltip:"Refers to waiting for the user to ship"},FINISHED:{text:"Done",color:"success"}};loading=!0;asyncLoading=!0;async;safeHtml=this.ds.bypassSecurityTrustHtml("<strong>Strong Html</strong>");enum={1:"Success",2:"Error"};enumValue=1;bigImg={img:{size:32,big:!0}};ngOnInit(){this.again()}refresh(){this.value=new Date,this.cdr.detectChanges()}again(){this.asyncLoading=!0,this.async=()=>ie({text:`${+new Date}`}).pipe(We(1),Co(1e3*1),zn(()=>{this.asyncLoading=!1,this.cdr.detectChanges()})),this.cdr.detectChanges()}updateSafeHtml(){this.safeHtml=this.ds.bypassSecurityTrustHtml("alert('a');<script>alert('a')<\/script>"),this.cdr.detectChanges()}refreshImage(){this.imageValue=`https://randomuser.me/api/portraits/thumb/women/${Math.floor(Math.random()*50)+10}.jpg`,this.cdr.detectChanges()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-cell-simple"]],decls:165,vars:75,consts:[["nz-row","","nzGutter","16",1,"mt-md"],["nz-col","","nzSpan","8"],[3,"value","options"],["value","15900000000","size","large",3,"options"],["value","15900000000",3,"options"],["value","100000",3,"options"],[3,"click"],["value","https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",3,"options"],["value","Link",3,"options","disabled"],[1,"ml-sm",3,"click"],[3,"value"],["value","FINISHED",3,"options"],["value","WAIT",3,"options"],[3,"valueChange","value","options","disabled"],[3,"valueChange","value","options"],["value","small","size","small"],["value","default"],["value","large","size","large"],["value","tooltip",3,"options"],["value","Done",3,"loading"],[1,"ml-md",3,"click"],[3,"value","loading"],["value","3",3,"options"]],template:function(t,o){t&1&&(e(0,`
    `),d(1,"div",0),e(2,`
      `),xt(3,Dc,7,4,null,null,St),d(5,"div",1),e(6," date-fn => "),p(7,"cell",2),e(8," "),r(),e(9,`
      `),d(10,"div",1),e(11," mega => "),p(12,"cell",3),e(13," "),r(),e(14,`
      `),d(15,"div",1),e(16," mask => "),p(17,"cell",4),e(18," "),r(),e(19,`
      `),d(20,"div",1),e(21," currency => "),p(22,"cell",5),e(23," "),r(),e(24,`
      `),d(25,"div",1),e(26," cny => "),p(27,"cell",5),e(28," "),r(),e(29,`
      `),d(30,"div",1),e(31,`
        yn => `),p(32,"cell",2),e(33,`
        `),d(34,"a",6),b("click",function(){return o.yn=!o.yn}),e(35,"Change Value"),r(),e(36,`
      `),r(),e(37,`
      `),d(38,"div",1),e(39,`
        img =>
        `),p(40,"cell",7),e(41,`
      `),r(),e(42,`
      `),d(43,"div",1),e(44,`
        img preview =>
        `),p(45,"cell",7),e(46,`
      `),r(),e(47,`
      `),d(48,"div",1),e(49,`
        img list =>
        `),p(50,"cell",2),e(51,`
      `),r(),e(52,`
      `),d(53,"div",1),e(54,`
        link =>
        `),p(55,"cell",8),e(56,`
        `),d(57,"a",9),b("click",function(){return o.disabled=!o.disabled}),e(58,"Change Disabled"),r(),e(59,`
      `),r(),e(60,`
      `),d(61,"div",1),e(62,`
        html =>
        `),p(63,"cell",2),e(64,`
      `),r(),e(65,`
      `),d(66,"div",1),e(67,`
        SafeHtml =>
        `),p(68,"cell",10),e(69,`
        `),d(70,"a",9),b("click",function(){return o.updateSafeHtml()}),e(71,"updateSafeHtml"),r(),e(72,`
      `),r(),e(73,`
      `),d(74,"div",1),e(75,`
        badge =>
        `),p(76,"cell",11),e(77,`
      `),r(),e(78,`
      `),d(79,"div",1),e(80,`
        tag =>
        `),p(81,"cell",12),e(82,`
      `),r(),e(83,`
      `),d(84,"div",1),e(85,`
        checkbox =>
        `),d(86,"cell",13),L("valueChange",function(s){return A(o.checkbox,s)||(o.checkbox=s),s}),r(),e(87,`
        `),d(88,"a",9),b("click",function(){return o.disabled=!o.disabled}),e(89,"Change Disabled"),r(),e(90,`
      `),r(),e(91,`
      `),d(92,"div",1),e(93,`
        radio =>
        `),d(94,"cell",13),L("valueChange",function(s){return A(o.radio,s)||(o.radio=s),s}),r(),e(95,`
        `),d(96,"a",6),b("click",function(){return o.radio=!o.radio}),e(97,"Change Value"),r(),e(98,`
        `),d(99,"a",9),b("click",function(){return o.disabled=!o.disabled}),e(100,"Change Disabled"),r(),e(101,`
      `),r(),e(102,`
      `),d(103,"div",1),e(104,`
        enum =>
        `),d(105,"cell",14),L("valueChange",function(s){return A(o.enumValue,s)||(o.enumValue=s),s}),r(),e(106,`
        `),d(107,"a",6),b("click",function(){return o.enumValue=o.enumValue===1?2:1}),e(108,"Change Value"),r(),e(109),r(),e(110,`
      `),d(111,"div",1),e(112,`
        default =>
        `),p(113,"cell",10),e(114,`
      `),r(),e(115,`
      `),xt(116,Mc,6,5,null,null,St),d(118,"div",1),e(119,`
        size =>
        `),p(120,"cell",15),e(121,", "),p(122,"cell",16),e(123,`,
        `),p(124,"cell",17),e(125,`
      `),r(),e(126,`
      `),d(127,"div",1),e(128,`
        tooltip =>
        `),p(129,"cell",18),e(130,`
      `),r(),e(131,`
      `),d(132,"div",1),e(133,`
        loading =>
        `),p(134,"cell",19),e(135,`
        `),d(136,"a",20),b("click",function(){return o.loading=!o.loading}),e(137,"Change"),r(),e(138,`
      `),r(),e(139,`
      `),d(140,"div",1),e(141,`
        Async =>
        `),p(142,"cell",21),e(143,`
        `),f(144,Nc,4,0),r(),e(145,`
      `),d(146,"div",1),e(147," Unit => "),p(148,"cell",22),e(149," "),r(),e(150,`
      `),d(151,"div",1),e(152," Text Unit => "),p(153,"cell",10),e(154," "),r(),e(155,`
      `),d(156,"div",1),e(157,`
        custom widget =>
        `),p(158,"cell",2),e(159,`
        `),d(160,"a",6),b("click",function(){return o.refreshImage()}),e(161,"Refresh Image"),r(),e(162,`
      `),r(),e(163,`
    `),r(),e(164,`
  `)),t&2&&(l(3),vt(o.baseList),l(4),c("value",o.day3)("options",Q(39,dc,et(38,ic))),l(5),c("options",et(41,rc)),l(5),c("options",et(42,ac)),l(5),c("options",et(43,lc)),l(5),c("options",et(44,cc)),l(5),c("value",o.yn)("options",et(45,sc)),l(8),c("options",et(46,ml)),l(5),c("options",o.bigImg),l(5),c("value",et(47,pc))("options",et(48,ml)),l(5),c("options",Q(50,uc,et(49,mc)))("disabled",o.disabled),l(8),c("value",o.HTML)("options",et(52,hc)),l(5),c("value",o.safeHtml),l(8),c("options",Q(55,fc,Q(53,ul,o.status))),l(5),c("options",Q(59,gc,Q(57,ul,o.status))),l(5),F("value",o.checkbox),c("options",Q(62,bc,et(61,Cc)))("disabled",o.disabled),l(8),F("value",o.radio),c("options",Q(65,xc,et(64,yc)))("disabled",o.disabled),l(11),F("value",o.enumValue),c("options",Q(67,vc,o.enum)),l(4),ut("(enum value: ",o.enumValue,`)
      `),l(4),c("value",null),l(3),vt(o.typeList),l(13),c("options",et(69,Sc)),l(5),c("loading",o.loading),l(8),c("value",o.async)("loading",o.asyncLoading),l(2),w(o.asyncLoading?-1:144),l(4),c("options",et(70,zc)),l(5),c("value",et(71,_c)),l(5),c("value",o.imageValue)("options",Q(73,wc,et(72,Tc))))},dependencies:[Ra,Pa,st,we,se,R,P],styles:["[_nghost-%COMP%]     .ant-col{margin-bottom:8px}"],changeDetection:0})};var ii=class i{item={cols:1,urls:{"en-US":"packages/abc/cell/index.en-US.md","zh-CN":"packages/abc/cell/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Cell formatting is supported for multiple data types, and supports widget mode.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="cell"><a class="lake-link"><i data-anchor="cell"></i></a>cell</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[value]</code></td><td>Value of the cell</td><td><code>unknown</code></td><td>-</td></tr><tr><td><code>[options]</code></td><td>Option of the cell</td><td><code><a data-toc="CellOptions">CellOptions</a></code></td><td>-</td></tr><tr><td><code>[loading]</code></td><td>Whether loading</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="CellOptions"><a class="lake-link"><i data-anchor="CellOptions"></i></a>CellOptions</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>Render type of the cell</td><td>-</td><td>-</td></tr><tr><td><code>[tooltip]</code></td><td>Text popup tip</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[renderType]</code></td><td>Render type of the cell</td><td><code>primary,success,danger,warning</code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>Size of the cell</td><td><code>large,small</code></td><td>-</td></tr><tr><td><code>[unit]</code></td><td>Unit, can also be specified by <code>value: {text: 100, unit: 'RMB'}</code></td><td><code>string</code></td><td><code>-</code></td></tr><tr><td><code>[default]</code></td><td>Default text</td><td><code>string | CellDefaultText</code></td><td>-</td></tr><tr><td><code>[mask]</code></td><td>Format mask, <a href="https://ng-alain.com/util/format/en#formatMask" data-url="https://ng-alain.com/util/format/en#formatMask">Document</a></td><td><code>string, FormatMaskOption</code></td><td>-</td></tr><tr><td><code>[widget]</code></td><td>Widget config</td><td><code>{key?: string, data?: string}</code></td><td>-</td></tr><tr><td><code>[date]</code></td><td>Date config, supports <code>minutes ago</code> formatting</td><td><code>{format?: string}</code></td><td>-</td></tr><tr><td><code>[mega]</code></td><td>Large number format filter, <a href="https://ng-alain.com/util/format/en#mega" data-url="https://ng-alain.com/util/format/en#mega">Document</a></td><td><code>CurrencyMegaOptions</code></td><td>-</td></tr><tr><td><code>[currency]</code></td><td>Currency config</td><td><code>CurrencyFormatOptions</code></td><td>-</td></tr><tr><td><code>[boolean]</code></td><td>Boolean config</td><td><code>YNOptions</code></td><td>-</td></tr><tr><td><code>[img]</code></td><td>Image config, support large image preview</td><td><code>{ size?: number; big?: boolean }</code></td><td>-</td></tr><tr><td><code>[link]</code></td><td>Link config</td><td><code>{ url?: string; target?: string }</code></td><td>-</td></tr><tr><td><code>[html]</code></td><td>HTML config</td><td><code>{ safe?: string }</code></td><td>-</td></tr><tr><td><code>[badge]</code></td><td>Badge config</td><td><code>{ data?: CellBadge }</code></td><td>-</td></tr><tr><td><code>[tag]</code></td><td>Tag config</td><td><code>{ data?: CellTag }</code></td><td>-</td></tr><tr><td><code>[checkbox]</code></td><td>Checkbox config</td><td><code>{ label?: string }</code></td><td>-</td></tr><tr><td><code>[radio]</code></td><td>Radio config</td><td><code>{ label?: string }</code></td><td>-</td></tr></tbody></table><p><strong>Type</strong></p><ul><li><p><code>string</code> String</p></li><li><p><code>number</code> Number</p></li><li><p><code>mega</code> Large number format filter, <a href="https://ng-alain.com/util/format/en#mega" data-url="https://ng-alain.com/util/format/en#mega">Document</a></p></li><li><p><code>currency</code> Currency</p></li><li><p><code>cny</code> Converted into RMB notation</p></li><li><p><code>boolean</code> Boolean</p></li><li><p><code>date</code> Date</p></li><li><p><code>img</code> Image, support large image preview</p></li><li><p><code>link</code> Link</p></li><li><p><code>html</code> HTML</p></li><li><p><code>badge</code> Badge</p></li><li><p><code>tag</code> Tag</p></li><li><p><code>checkbox</code> Checkbox (Support <code>disabled</code>)</p></li><li><p><code>radio</code> Radio (Support <code>disabled</code>)</p></li><li><p><code>enum</code> Enum</p></li><li><p><code>widget</code> Custom widget</p></li></ul><h2 id="Customwidget"><a class="lake-link"><i data-anchor="Customwidget"></i></a>Customwidget</h2><p>Just implement the <code>CellWidgetInstance</code> interface, for example:</p><pre class="hljs language-ts"><code>import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

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
}</code></pre>`,meta:{type:"CURD",title:"cell",subtitle:"Cell Data",cols:1,order:4,module:"import { CellModule } from '@delon/abc/cell';"},toc:[{id:"API",title:"API",h:2,children:[{id:"cell",title:"cell",h:3},{id:"CellOptions",title:"CellOptions",h:3}]},{id:"Customwidget",title:"Custom widget",h:2}]},"zh-CN":{content:'<section class="markdown"><p>\u5185\u7F6E\u652F\u6301\u5341\u51E0\u79CD\u6570\u636E\u7C7B\u578B\u7684\u683C\u5F0F\u5316\uFF0C\u4E14\u652F\u6301\u5C0F\u90E8\u4EF6\u81EA\u5B9A\u4E49\u6A21\u5F0F\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="cell"><a class="lake-link"><i data-anchor="cell"></i></a>cell</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[value]</code></td><td>\u503C</td><td><code>unknown</code></td><td>-</td></tr><tr><td><code>[options]</code></td><td>\u9009\u9879</td><td><code><a data-toc="CellOptions">CellOptions</a></code></td><td>-</td></tr><tr><td><code>[loading]</code></td><td>\u662F\u5426\u52A0\u8F7D\u4E2D</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="CellOptions"><a class="lake-link"><i data-anchor="CellOptions"></i></a>CellOptions</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>\u6E32\u67D3\u7C7B\u578B</td><td>-</td><td>-</td></tr><tr><td><code>[tooltip]</code></td><td>\u6587\u5B57\u63D0\u793A</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[renderType]</code></td><td>\u6E32\u67D3\u7C7B\u578B</td><td><code>primary,success,danger,warning</code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>\u5927\u5C0F</td><td><code>large,small</code></td><td>-</td></tr><tr><td><code>[unit]</code></td><td>\u5355\u4F4D\uFF0C\u4E5F\u53EF\u901A\u8FC7 <code>value: {text: 100, unit: '\u5143'}</code> \u6765\u6307\u5B9A</td><td><code>string</code></td><td><code>-</code></td></tr><tr><td><code>[default]</code></td><td>\u9ED8\u8BA4\u6587\u672C</td><td><code>string | CellDefaultText</code></td><td>-</td></tr><tr><td><code>[mask]</code></td><td>\u683C\u5F0F\u5316\u63A9\u7801, \u53C2\u8003<a href="https://ng-alain.com/util/format/zh#formatMask" data-url="https://ng-alain.com/util/format/zh#formatMask">\u6587\u6863</a></td><td><code>string, FormatMaskOption</code></td><td>-</td></tr><tr><td><code>[widget]</code></td><td>\u5C0F\u90E8\u4EF6\u914D\u7F6E</td><td><code>{key?: string, data?: string}</code></td><td>-</td></tr><tr><td><code>[date]</code></td><td>\u65E5\u671F\u914D\u7F6E\uFF0C\u652F\u6301 <code>\u51E0\u5206\u949F\u524D</code> \u683C\u5F0F\u5316</td><td><code>{format?: string}</code></td><td>-</td></tr><tr><td><code>[mega]</code></td><td>\u5927\u6570\u636E\u683C\u5F0F\u5316\u914D\u7F6E</td><td><code>CurrencyMegaOptions</code></td><td>-</td></tr><tr><td><code>[currency]</code></td><td>\u8D27\u5E01\u914D\u7F6E</td><td><code>CurrencyFormatOptions</code></td><td>-</td></tr><tr><td><code>[boolean]</code></td><td>\u5E03\u5C14\u914D\u7F6E</td><td><code>YNOptions</code></td><td>-</td></tr><tr><td><code>[img]</code></td><td>\u56FE\u50CF\u914D\u7F6E\uFF0C\u652F\u6301\u5927\u56FE\u9884\u89C8</td><td><code>{ size?: number; big?: boolean }</code></td><td>-</td></tr><tr><td><code>[link]</code></td><td>\u94FE\u63A5\u914D\u7F6E</td><td><code>{ url?: string; target?: string }</code></td><td>-</td></tr><tr><td><code>[html]</code></td><td>HTML \u914D\u7F6E</td><td><code>{ safe?: string }</code></td><td>-</td></tr><tr><td><code>[badge]</code></td><td>\u5FBD\u7AE0\u914D\u7F6E</td><td><code>{ data?: CellBadge }</code></td><td>-</td></tr><tr><td><code>[tag]</code></td><td>\u6807\u7B7E\u914D\u7F6E</td><td><code>{ data?: CellTag }</code></td><td>-</td></tr><tr><td><code>[checkbox]</code></td><td>\u590D\u9009\u6846\u914D\u7F6E</td><td><code>{ label?: string }</code></td><td>-</td></tr><tr><td><code>[radio]</code></td><td>\u5355\u9009\u6846\u914D\u7F6E</td><td><code>{ label?: string }</code></td><td>-</td></tr></tbody></table><p><strong>\u6E32\u67D3\u7C7B\u578B</strong></p><ul><li><p><code>string</code> \u5B57\u7B26\u4E32</p></li><li><p><code>number</code> \u6570\u5B57</p></li><li><p><code>mega</code> \u5927\u6570\u636E\u683C\u5F0F\u5316</p></li><li><p><code>currency</code> \u8D27\u5E01</p></li><li><p><code>cny</code> \u8F6C\u5316\u6210\u4EBA\u6C11\u5E01\u8868\u793A\u6CD5</p></li><li><p><code>boolean</code> \u5E03\u5C14</p></li><li><p><code>date</code> \u65E5\u671F</p></li><li><p><code>img</code> \u56FE\u50CF\uFF0C\u652F\u6301\u5927\u56FE\u9884\u89C8</p></li><li><p><code>link</code> \u94FE\u63A5</p></li><li><p><code>html</code> HTML</p></li><li><p><code>badge</code> \u5FBD\u7AE0</p></li><li><p><code>tag</code> \u6807\u7B7E</p></li><li><p><code>checkbox</code> \u590D\u9009\u6846\uFF08\u652F\u6301 <code>disabled</code>\uFF09</p></li><li><p><code>radio</code> \u5355\u9009\u6846\uFF08\u652F\u6301 <code>disabled</code>\uFF09</p></li><li><p><code>enum</code> \u679A\u4E3E\u8F6C\u6362</p></li><li><p><code>widget</code> \u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6</p></li></ul><h2 id="\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6"><a class="lake-link"><i data-anchor="\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6"></i></a>\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6</h2><p>\u5B9E\u73B0 <code>CellWidgetInstance</code> \u63A5\u53E3\u5373\u53EF\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-ts"><code>import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

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
}</code></pre>`,meta:{type:"CURD",title:"cell",subtitle:"\u5355\u5143\u683C\u6570\u636E",cols:1,order:4,module:"import { CellModule } from '@delon/abc/cell';"},toc:[{id:"API",title:"API",h:2,children:[{id:"cell",title:"cell",h:3},{id:"CellOptions",title:"CellOptions",h:3}]},{id:"\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6",title:"\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6",h:2}]}},demo:!0};codes=[{id:"components-cell-simple",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { JsonPipe } from '@angular/common';
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
}`,lang:"ts",componentName:"ComponentsCellSimpleComponent",point:0,name:"simple",urls:"packages/abc/cell/demo/simple.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-cell"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-cell-simple"),e(7,`
        `),r(),e(8,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id))},dependencies:[O,ni,R,P,j],encapsulation:2})};var Ec=i=>({$implicit:i});function Ic(i,n){i&1&&he(0)}function Pc(i,n){if(i&1&&f(0,Ic,1,0,"ng-container",1),i&2){let t=h();c("ngTemplateOutlet",t.render)("ngTemplateOutletContext",Q(2,Ec,t.i))}}function Rc(i,n){if(i&1&&p(0,"span",0),i&2){let t=h();c("innerHTML",t.i.text,jt)}}var oe=function(i){return i[i.ing=0]="ing",i[i.pause=1]="pause",i[i.stop=2]="stop",i[i.done=3]="done",i}(oe||{}),hl=(()=>{class i{constructor(){this.ngZone=y(Xt),this.fns=[],this.commands=[],this.nextTime=0,this.ing=!1}start(){this.ing!==!0&&(this.ing=!0,this.nextTime=+new Date,this.ngZone.runOutsideAngular(()=>{this.process()}))}process(){for(;this.commands.length;)this.commands.shift()();let t=+new Date-this.nextTime,o=1+Math.floor(t/100);t=100-t%100,this.nextTime+=100*o;for(let a=0,s=this.fns.length;a<s;a+=2){let m=this.fns[a+1];if(m===0)this.fns[a](o);else{m+=2*o-1;let D=Math.floor(m/20);D>0&&this.fns[a](D),this.fns[a+1]=m%20+1}}this.ing&&setTimeout(()=>this.process(),t)}add(t,o){return this.commands.push(()=>{this.fns.push(t),this.fns.push(o===1e3?1:0),this.ing=!0}),this}remove(t){return this.commands.push(()=>{let o=this.fns.indexOf(t);o!==-1&&this.fns.splice(o,2),this.ing=this.fns.length>0}),this}static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275prov=de({token:i,factory:i.\u0275fac})}}return i})(),Ac=new Tn("COUNTDOWN_CONFIG");var fl=(()=>{class i{constructor(){this.locale=y(ea),this.timer=y(hl),this.cdr=y(ct),this.ngZone=y(Xt),this.defCog=y(Ac,{optional:!0}),this.frequency=1e3,this._notify={},this.status=oe.ing,this.isDestroy=!1,this.i={},this.left=0,this.event=new At}set config(t){t.notify!=null&&!Array.isArray(t.notify)&&t.notify>0&&(t.notify=[t.notify]),this._config=t}get config(){return this._config}begin(){this.status=oe.ing,this.callEvent("start")}restart(){this.status!==oe.stop&&this.destroy(),this.init(),this.callEvent("restart")}stop(){this.status!==oe.stop&&(this.status=oe.stop,this.destroy(),this.callEvent("stop"))}pause(){this.status===oe.stop||this.status===oe.pause||(this.status=oe.pause,this.callEvent("pause"))}resume(){this.status===oe.stop||this.status!==oe.pause||(this.status=oe.ing,this.callEvent("resume"))}callEvent(t){this.event.emit({action:t,left:this.left,status:this.status,text:this.i.text})}init(){let t=this.config=ft(ft({demand:!1,leftTime:0,format:"HH:mm:ss",timezone:"+0000",formatDate:({date:s,formatStr:m,timezone:D})=>ia(new Date(s),m,this.locale,D||"+0000")},this.defCog),this.config),o=this.frequency=~t.format.indexOf("S")?100:1e3;this.status=t.demand?oe.pause:oe.ing,this.getLeft();let a=this.reflow;this.reflow=(s=0,m=!1)=>a.apply(this,[s,m]),Array.isArray(t.notify)&&t.notify.forEach(s=>{if(s<1)throw new Error("The notify config must be a positive integer.");s=s*1e3,s=s-s%o,this._notify[s]=!0}),this.timer.add(this.reflow,o).start(),this.reflow(0,!0)}destroy(){return this.timer.remove(this.reflow),this}reflow(t=0,o=!1){if(this.isDestroy)return;let{status:a,config:s,_notify:m}=this;if(!o&&a!==oe.ing)return;let D=this.left=this.left-this.frequency*t;D<1&&(D=0),this.i={value:D,text:s.formatDate({date:D,formatStr:s.format,timezone:s.timezone})},typeof s.prettyText=="function"&&(this.i.text=s.prettyText(this.i.text)),this.cdr.detectChanges(),(s.notify===0||m[D])&&this.ngZone.run(()=>{this.callEvent("notify")}),D===0&&this.ngZone.run(()=>{this.status=oe.done,this.destroy(),this.callEvent("done")})}getLeft(){let{config:t,frequency:o}=this,a=t.leftTime*1e3,s=t.stopTime;!a&&s&&(a=s-new Date().getTime()),this.left=a-a%o}ngOnInit(){this.init(),this.config.demand||this.begin()}ngOnDestroy(){this.isDestroy=!0,this.destroy()}ngOnChanges(t){t.config.firstChange||this.restart()}static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=u({type:i,selectors:[["countdown"]],hostVars:2,hostBindings:function(o,a){o&2&&T("count-down",!0)},inputs:{config:"config",render:"render"},outputs:{event:"event"},features:[Fe([hl]),Rt],decls:2,vars:1,consts:[[3,"innerHTML"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,a){o&1&&f(0,Pc,1,4,"ng-container")(1,Rc,1,1,"span",0),o&2&&w(a.render?0:1)},dependencies:[Jt],styles:[`.count-down{font-variant-numeric:tabular-nums}
`],encapsulation:2,changeDetection:0})}}return i})();var Fc=["cd"];function Lc(i,n){if(i&1){let t=z();d(0,"countdown",2,0),b("event",function(a){g(t);let s=h();return C(s.handleEvent(a))}),r()}if(i&2){let t=h();c("config",t.config)}}var ro=class i{instance;config;set target(n){this.config={format:"HH:mm:ss",stopTime:typeof n=="number"?fa(new Date,n).valueOf():+ga(n,"t")}}event=new At;handleEvent(n){this.event.emit(n)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["count-down"]],viewQuery:function(t,o){if(t&1&&ot(Fc,5),t&2){let a;W(a=U())&&(o.instance=a.first)}},inputs:{config:"config",target:"target"},outputs:{event:"event"},exportAs:["countDown"],decls:1,vars:1,consts:[["cd",""],[3,"config"],[3,"event","config"]],template:function(t,o){t&1&&f(0,Lc,2,1,"countdown",1),t&2&&w(o.config?0:-1)},dependencies:[fl],encapsulation:2,changeDetection:0})};var di=class i{msg=y(yt);handleEvent(n){n.action==="done"&&this.msg.success("finised")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-count-down-simple"]],decls:13,vars:1,consts:[["cd",""],[2,"font-size","20px",3,"event","target"],["nz-button","",3,"click"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"div"),e(2,`
      `),d(3,"count-down",1,0),b("event",function(m){return g(a),C(o.handleEvent(m))}),r(),e(5,`
    `),r(),e(6,`
    `),d(7,"button",2),b("click",function(){g(a);let m=v(4);return C(m.instance.pause())}),e(8,"Pause"),r(),e(9,`
    `),d(10,"button",2),b("click",function(){g(a);let m=v(4);return C(m.instance.resume())}),e(11,"Resume"),r(),e(12,`
  `)}t&2&&(l(3),c("target",10))},dependencies:[ro,E,k,M,N],encapsulation:2})};var ri=class i{config={format:"s.S",leftTime:30};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-count-down-accuracy"]],decls:3,vars:1,consts:[[3,"config"]],template:function(t,o){t&1&&(e(0," "),p(1,"count-down",0),e(2," ")),t&2&&(l(),c("config",o.config))},dependencies:[ro],encapsulation:2})};var ai=class i{item={cols:3,urls:{"en-US":"packages/abc/count-down/index.en-US.md","zh-CN":"packages/abc/count-down/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>The countdown component depends on <a target="_blank" href="https://github.com/cipchk/ngx-countdown" data-url="https://github.com/cipchk/ngx-countdown">ngx-countdown</a>.</p><h2 id="Dependencies"><a class="lake-link"><i data-anchor="Dependencies"></i></a>Dependencies</h2><pre class="hljs language-null"><code>npm i -S ngx-countdown</code></pre></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="count-down"><a class="lake-link"><i data-anchor="count-down"></i></a>count-down</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[target]</code></td><td>Target time, <code>number</code> means seconds</td><td><code>number | Date</code></td><td>-</td></tr><tr><td><code>[config]</code></td><td><a target="_blank" href="https://github.com/cipchk/ngx-countdown#countdownconfig" data-url="https://github.com/cipchk/ngx-countdown#countdownconfig">Config</a> paraments</td><td><code>CountdownConfig</code></td><td>-</td></tr><tr><td><code>(event)</code></td><td>Event notification</td><td><code>EventEmitter&lt;CountdownEvent></code></td><td>-</td></tr></tbody></table>',meta:{type:"Basic",title:"count-down",subtitle:"Count down",cols:3,module:"import { CountDownModule } from '@delon/abc/count-down';"},toc:[{id:"Dependencies",title:"Dependencies",h:2},{id:"API",title:"API",h:2,children:[{id:"count-down",title:"count-down",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u5012\u8BA1\u65F6\u7EC4\u4EF6\uFF0C\u4F9D\u8D56 <a target="_blank" href="https://github.com/cipchk/ngx-countdown" data-url="https://github.com/cipchk/ngx-countdown">ngx-countdown</a>\u3002</p><h2 id="\u4F9D\u8D56"><a class="lake-link"><i data-anchor="\u4F9D\u8D56"></i></a>\u4F9D\u8D56</h2><pre class="hljs language-null"><code>npm i -S ngx-countdown</code></pre></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="count-down"><a class="lake-link"><i data-anchor="count-down"></i></a>count-down</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[target]</code></td><td>\u76EE\u6807\u65F6\u95F4\uFF0C<code>number</code> \u8868\u793A\u79D2</td><td><code>number | Date</code></td><td>-</td></tr><tr><td><code>[config]</code></td><td>\u5B8C\u6574 <a target="_blank" href="https://github.com/cipchk/ngx-countdown#countdownconfig" data-url="https://github.com/cipchk/ngx-countdown#countdownconfig">Config</a> \u53C2\u6570</td><td><code>CountdownConfig</code></td><td>-</td></tr><tr><td><code>(event)</code></td><td>\u4E8B\u4EF6\u901A\u77E5</td><td><code>EventEmitter&lt;CountdownEvent></code></td><td>-</td></tr></tbody></table>',meta:{type:"Basic",title:"count-down",subtitle:"\u5012\u8BA1\u65F6",cols:3,module:"import { CountDownModule } from '@delon/abc/count-down';"},toc:[{id:"\u4F9D\u8D56",title:"\u4F9D\u8D56",h:2},{id:"API",title:"API",h:2,children:[{id:"count-down",title:"count-down",h:3}]}]}},demo:!0};codes=[{id:"components-count-down-simple",meta:{order:1,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"}},summary:{"zh-CN":"<p>\u7B80\u5355\u7684\u5012\u8BA1\u65F6\u7EC4\u4EF6\u4F7F\u7528\u3002</p>","en-US":"<p>The simplest usage.</p>"},code:`import { Component, inject } from '@angular/core';

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
  imports: [CountDownComponent]
})
export class ComponentsCountDownAccuracyComponent {
  config: CountdownConfig = {
    format: \`s.S\`,
    leftTime: 30
  };
}`,lang:"ts",componentName:"ComponentsCountDownAccuracyComponent",point:1,name:"accuracy",urls:"packages/abc/count-down/demo/accuracy.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-count-down"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:16,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-count-down-simple"),e(7,`
        `),r(),e(8,`
      `),r(),d(9,"div",2),e(10,`
        `),d(11,"code-box",3),e(12,`
          `),p(13,"components-count-down-accuracy"),e(14,`
        `),r(),e(15,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id),l(7),c("item",o.codes[1]),_("id",o.codes[1].id))},dependencies:[O,di,ri,R,P,j],encapsulation:2})};var Bc=["tpl"];function Vc(i,n){if(i&1){let t=z();e(0,`
        `),d(1,"a",1),b("click",function(){let a=g(t).$implicit,s=h(2);return C(s.click(a))}),r(),e(2,`
      `)}if(i&2){let t=n.$implicit,o=n.$index;l(),T("ml-sm",o!==0),c("innerHTML",t._text,jt)}}function Oc(i,n){if(i&1&&(e(0,`
      `),xt(1,Vc,3,3,null,null,St)),i&2){let t=h();l(),vt(t.list)}}var cn=class i{tpl;list=[];click(n){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["ng-component"]],viewQuery:function(t,o){if(t&1&&ot(Bc,7),t&2){let a;W(a=U())&&(o.tpl=a.first)}},decls:4,vars:0,consts:[["tpl",""],[3,"click","innerHTML"]],template:function(t,o){t&1&&(e(0,`
    `),f(1,Oc,3,0,"ng-template",null,0,I),e(3,`
  `))},encapsulation:2})};var vo=class i{static ngAcceptInputType_shortcut;dom=y(be);vcr=y(Qr);nativeComp=y(Oo,{host:!0,optional:!0});defaultShortcuts;_shortcut=null;shortcutFactory=null;start=null;end=null;set shortcut(n){let t=la({list:[]},!0,this.defaultShortcuts,n??{});typeof n!="object"&&(t.enabled=n!==!1),(t.list||[]).forEach(o=>{o._text=this.dom.bypassSecurityTrustHtml(o.text)}),this._shortcut=t,this.refreshShortcut()}get shortcut(){return this._shortcut}ngModelEnd;ngModelEndChange=new At;get dp(){return this.nativeComp.datePicker}get srv(){return this.dp.datePickerService}constructor(n){let t=n.merge("dataRange",{nzFormat:"yyyy-MM-dd",nzAllowClear:!0,nzAutoFocus:!1,nzPopupStyle:{position:"relative"},nzShowToday:!0,shortcuts:{enabled:!1,closed:!0,list:[{text:"\u4ECA\u5929",fn:()=>Xe("today")},{text:"\u6628\u5929",fn:()=>Xe("yesterday")},{text:"\u8FD13\u5929",fn:()=>Xe(-2)},{text:"\u8FD17\u5929",fn:()=>Xe(-6)},{text:"\u672C\u5468",fn:()=>Xe("week")},{text:"\u672C\u6708",fn:()=>Xe("month")},{text:"\u5168\u5E74",fn:()=>Xe("year")}]}});this.defaultShortcuts=ft({},t.shortcuts),Object.assign(this,t)}cd(){this.dp.cdr.markForCheck()}overrideNative(){let n=this.dp;n.writeValue=o=>{let a=(o&&this.ngModelEnd?[o,this.ngModelEnd]:[]).filter(s=>!!s);this.srv.setValue(this.srv.makeValue(a)),this.start=a.length>0?a[0]:null,this.end=a.length>0?a[1]:null,this.cd()};let t=n.onChangeFn;n.onChangeFn=o=>{let a=null,s=null;o.length>0&&o.filter(m=>m!=null).length===2&&([a,s]=za([o[0],o[1]])),this.start=a,this.end=s,t(a),this.ngModelEnd=s,this.ngModelEndChange.emit(s)}}refreshShortcut(){if(!this._shortcut)return;let{enabled:n,list:t}=this._shortcut,o;if(!this.nativeComp||!n)o=void 0;else{this.shortcutFactory||(this.shortcutFactory=this.vcr.createComponent(cn));let{instance:a}=this.shortcutFactory;a.list=t,a.click=s=>{let m=s.fn([this.start,this.end]);this.srv.setValue(this.srv.makeValue(m)),this.dp.onChangeFn(m),this.dp.close()},o=a.tpl}this.nativeComp.datePicker.extraFooter=o,Promise.resolve().then(()=>this.cd())}ngAfterViewInit(){this.overrideNative(),this.refreshShortcut()}destoryShortcut(){this.shortcutFactory!=null&&this.shortcutFactory.destroy()}ngOnDestroy(){this.destoryShortcut()}static \u0275fac=function(t){return new(t||i)(tt(It))};static \u0275dir=ue({type:i,selectors:[["nz-range-picker","extend",""]],inputs:{shortcut:"shortcut",ngModelEnd:"ngModelEnd"},outputs:{ngModelEndChange:"ngModelEndChange"},exportAs:["extendRangePicker"]})};var li=class i{i={};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-date-picker-basic"]],decls:6,vars:5,consts:[["extend","",3,"ngModelChange","ngModelEndChange","ngModel","ngModelEnd"]],template:function(t,o){t&1&&(e(0),ae(1,"json"),p(2,"br"),e(3,`
    `),d(4,"nz-range-picker",0),L("ngModelChange",function(s){return A(o.i.start,s)||(o.i.start=s),s})("ngModelEndChange",function(s){return A(o.i.end,s)||(o.i.end=s),s}),r(),e(5,`
  `)),t&2&&(ut(`
    result: `,fe(1,3,o.i),""),l(4),F("ngModel",o.i.start)("ngModelEnd",o.i.end))},dependencies:[we,st,rt,pt,jo,Vo,Oo,vo],encapsulation:2})};var ci=class i{i={};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-date-picker-shortcut"]],decls:6,vars:5,consts:[["extend","","shortcut","",3,"ngModelChange","ngModelEndChange","ngModel","ngModelEnd"]],template:function(t,o){t&1&&(e(0),ae(1,"json"),p(2,"br"),e(3,`
    `),d(4,"nz-range-picker",0),L("ngModelChange",function(s){return A(o.i.start,s)||(o.i.start=s),s})("ngModelEndChange",function(s){return A(o.i.end,s)||(o.i.end=s),s}),r(),e(5,`
  `)),t&2&&(ut(`
    result: `,fe(1,3,o.i),""),l(4),F("ngModel",o.i.start)("ngModelEnd",o.i.end))},dependencies:[we,st,rt,pt,jo,Vo,Oo,vo],encapsulation:2})};var si=class i{item={cols:1,urls:{"en-US":"packages/abc/date-picker/index.en-US.md","zh-CN":"packages/abc/date-picker/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Based on the <code>nz-range-picker</code> further optimization, better service to start and end dates.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="extend"><a class="lake-link"><i data-anchor="extend"></i></a>extend<label class="api-type-label directive">directive</label></h3><p>It needs to be used with <a target="_blank" href="https://ng.ant.design/components/date-picker/zh#nz-range-picker" data-url="https://ng.ant.design/components/date-picker/zh#nz-range-picker">nz-range-picker</a>, for example:</p><pre class="hljs language-html"><code>&lt;nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end"&gt;&lt;/nz-range-picker&gt;</code></pre><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[(ngModelEnd)]</code></td><td>End date, start and end values at the same time</td><td><code>Date</code></td><td>-</td><td></td></tr><tr><td><code>[shortcut]</code></td><td>Set shortcuts</td><td><code>boolean | <a data-toc="DateRangePickerShortcut">DateRangePickerShortcut</a></code></td><td><code>false</code></td><td>\u2705</td></tr></tbody></table><h4 id="DateRangePickerShortcut"><a class="lake-link"><i data-anchor="DateRangePickerShortcut"></i></a>DateRangePickerShortcut</h4><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[enabled]</code></td><td>Whether to enable</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[closed]</code></td><td>Whether to close the panel after clicking</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[enabled]</code></td><td>Shortcut list</td><td><code>DateRangePickerShortcutItem[]</code></td><td><code>\u4ECA\u5929,\u6628\u5929,\u8FD13\u5929,\u8FD17\u5929,\u672C\u5468,\u672C\u6708,\u5168\u5E74</code></td></tr></tbody></table>',meta:{type:"Form",title:"range-picker",subtitle:"Data Range",cols:1,module:"import { DatePickerModule } from '@delon/abc/date-picker';"},toc:[{id:"API",title:"API",h:2,children:[{id:"extend",title:"extend",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u57FA\u4E8E <code>nz-range-picker</code> \u8FDB\u4E00\u6B65\u4F18\u5316\uFF0C\u66F4\u597D\u7684\u670D\u52A1\u4E8E\u5F00\u59CB\u4E0E\u7ED3\u675F\u65E5\u671F\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="extend"><a class="lake-link"><i data-anchor="extend"></i></a>extend<label class="api-type-label directive">directive</label></h3><p>\u9700\u8981\u914D\u5408 <a target="_blank" href="https://ng.ant.design/components/date-picker/zh#nz-range-picker" data-url="https://ng.ant.design/components/date-picker/zh#nz-range-picker">nz-range-picker</a> \u4E00\u8D77\u4F7F\u7528\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-html"><code>&lt;nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end"&gt;&lt;/nz-range-picker&gt;</code></pre><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[(ngModelEnd)]</code></td><td>\u7ED3\u675F\u65E5\u671F\uFF0C\u5F00\u59CB\u4E0E\u7ED3\u675F\u540C\u65F6\u6709\u503C\u624D\u4F1A\u751F\u6548</td><td><code>Date</code></td><td>-</td><td></td></tr><tr><td><code>[shortcut]</code></td><td>\u8BBE\u7F6E\u5FEB\u6377\u952E</td><td><code>boolean, <a data-toc="DateRangePickerShortcut">DateRangePickerShortcut</a></code></td><td><code>false</code></td><td>\u2705</td></tr></tbody></table><h4 id="DateRangePickerShortcut"><a class="lake-link"><i data-anchor="DateRangePickerShortcut"></i></a>DateRangePickerShortcut</h4><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[enabled]</code></td><td>\u662F\u5426\u542F\u7528</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[closed]</code></td><td>\u662F\u5426\u70B9\u51FB\u540E\u7ACB\u5373\u5173\u95ED\u9762\u677F</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[enabled]</code></td><td>\u5FEB\u6377\u5217\u8868</td><td><code>DateRangePickerShortcutItem[]</code></td><td><code>\u4ECA\u5929,\u6628\u5929,\u8FD13\u5929,\u8FD17\u5929,\u672C\u5468,\u672C\u6708,\u5168\u5E74</code></td></tr></tbody></table>',meta:{type:"Form",title:"range-picker",subtitle:"\u65E5\u671F\u8303\u56F4",cols:1,module:"import { DatePickerModule } from '@delon/abc/date-picker';"},toc:[{id:"API",title:"API",h:2,children:[{id:"extend",title:"extend",h:3}]}]}},demo:!0};codes=[{id:"components-date-picker-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:{"zh-CN":"<p>\u4F7F\u7528 <code>ngModel</code>\u3001<code>ngModelEnd</code> \u6765\u8868\u793A\u5F00\u59CB\u4E0E\u7ED3\u675F\u503C\u3002</p>","en-US":"<p>Start and end values with <code>ngModel</code>, <code>ngModelEnd</code>.</p>"},code:`import { JsonPipe } from '@angular/common';
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
  imports: [JsonPipe, FormsModule, NzDatePickerModule, RangePickerDirective]
})
export class ComponentsDatePickerShortcutComponent {
  i: { start?: Date; end?: Date } = {};
}`,lang:"ts",componentName:"ComponentsDatePickerShortcutComponent",point:1,name:"shortcut",urls:"packages/abc/date-picker/demo/shortcut.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-date-picker"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-date-picker-basic"),e(7,`
        `),r(),e(8,`
      
        `),d(9,"code-box",3),e(10,`
          `),p(11,"components-date-picker-shortcut"),e(12,`
        `),r(),e(13,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id),l(5),c("item",o.codes[1]),_("id",o.codes[1].id))},dependencies:[O,li,ci,R,P,j],encapsulation:2})};var Cl=Rr(xr());var $o=class i{el=y(Ct).nativeElement;_http=y(Pn);httpData;httpBody;httpMethod="get";httpUrl;fileName;pre;success=new At;error=new At;getDisposition(n){return(n||"").split(";").filter(o=>o.includes("=")).map(o=>{let a=o.split("="),s="UTF-8''",m=a[1];return m.startsWith(s)&&(m=m.substring(s.length)),{[a[0].trim()]:m}}).reduce((o,a)=>a,{})}isFileSaverSupported=!1;constructor(){try{this.isFileSaverSupported=!!new Blob}catch{}this.isFileSaverSupported||this.el.classList.add("down-file__not-support")}setDisabled(n){let t=this.el;t.disabled=n,t.classList[n?"add":"remove"]("down-file__disabled")}_click(n){return Ar(this,null,function*(){if(!this.isFileSaverSupported||typeof this.pre=="function"&&!(yield this.pre(n))){n.stopPropagation(),n.preventDefault();return}this.setDisabled(!0),this._http.request(this.httpMethod,this.httpUrl,{params:this.httpData||{},responseType:"blob",observe:"response",body:this.httpBody}).pipe(zn(()=>this.setDisabled(!1))).subscribe({next:t=>{if(t.status!==200||t.body.size<=0){this.error.emit(t);return}let o=this.getDisposition(t.headers.get("content-disposition")),a=this.fileName;typeof a=="function"&&(a=a(t)),a=a||o["filename*"]||o.filename||t.headers.get("filename")||t.headers.get("x-filename"),(0,Cl.saveAs)(t.body,decodeURI(a)),this.success.emit(t)},error:t=>this.error.emit(t)})})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=ue({type:i,selectors:[["","down-file",""]],hostBindings:function(t,o){t&1&&b("click",function(s){return o._click(s)})},inputs:{httpData:[0,"http-data","httpData"],httpBody:[0,"http-body","httpBody"],httpMethod:[0,"http-method","httpMethod"],httpUrl:[0,"http-url","httpUrl"],fileName:[0,"file-name","fileName"],pre:"pre"},outputs:{success:"success",error:"error"},exportAs:["downFile"]})};function jc(i,n){if(i&1&&(e(0,`
      `),d(1,"button",0),e(2),r(),e(3,`
    `)),i&2){let t=n.$implicit,o=h();l(),dn("http-url","./assets/demo",t,""),c("http-data",o.data),l(),ut(`
        `,t,`
      `)}}var pi=class i{fileTypes=[".xlsx",".docx",".pptx",".pdf"];data={otherdata:1,time:new Date};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-down-file-simple"]],decls:3,vars:0,consts:[["nz-button","","down-file","","file-name","demo\u4E2D\u6587",1,"mr-sm",3,"http-data","http-url"]],template:function(t,o){t&1&&(e(0,`
    `),xt(1,jc,4,4,null,null,St)),t&2&&(l(),vt(o.fileTypes))},dependencies:[$o,E,k,M,N],encapsulation:2})};var mi=class i{item={cols:1,urls:{"en-US":"packages/abc/down-file/index.en-US.md","zh-CN":"packages/abc/down-file/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>A file download based on <code>blob</code>.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="down-file"><a class="lake-link"><i data-anchor="down-file"></i></a>down-file<label class="api-type-label directive">directive</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[http-data]</code></td><td>Parameter of request</td><td><code>{}</code></td><td>-</td></tr><tr><td><code>[http-body]</code></td><td>Body of request</td><td><code>{}</code></td><td>-</td></tr><tr><td><code>[http-method]</code></td><td>Method of request</td><td><code>'POST','GET','HEAD','PUT','PATCH','DELETE'</code></td><td><code>'GET'</code></td></tr><tr><td><code>[http-url]</code></td><td>Url of request</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[file-name]</code></td><td>Specify a file name</td><td><code>string, (rep: HttpResponse&lt;Blob>) => string</code></td><td>-</td></tr><tr><td><code>[pre]</code></td><td>Callback of download</td><td><code>(ev: MouseEvent) => Promise&lt;boolean></code></td><td>-</td></tr><tr><td><code>(success)</code></td><td>Success callback</td><td><code>EventEmitter&lt;HttpResponse<Blob>></code></td><td>-</td></tr><tr><td><code>(error)</code></td><td>Error callback</td><td><code>EventEmitter&lt;any></code></td><td>-</td></tr></tbody></table><h2 id="FAQ"><a class="lake-link"><i data-anchor="FAQ"></i></a>FAQ</h2><h3 id="Filenameorder"><a class="lake-link"><i data-anchor="Filenameorder"></i></a>Filenameorder</h3><ol><li><p><code>file-name</code></p></li><li><p><code>filename*</code>, <code>filename</code> of <code>content-disposition</code></p></li><li><p><code>filename</code>, <code>x-filename</code> of <code>headers</code></p></li></ol><h3 id="SupportedBrowsers"><a class="lake-link"><i data-anchor="SupportedBrowsers"></i></a>SupportedBrowsers</h3><p>Use <code>new Blob()</code> to verify <a target="_blank" href="https://github.com/eligrey/FileSaver.js/#supported-browsers" data-url="https://github.com/eligrey/FileSaver.js/#supported-browsers">Browser Compatible</a>, The <code>down-file__not-support</code> style is added to the target element when not compatible.</p><blockquote><p>The default incompatible processing behavior is hidden. You can set the Less variable to <code>@down-file-not-support-behavior: 'disabled'</code> to can't be click.</p></blockquote>`,meta:{type:"Basic",title:"down-file",subtitle:"Download file",cols:1,module:"import { DownFileModule } from '@delon/abc/down-file';"},toc:[{id:"API",title:"API",h:2,children:[{id:"down-file",title:"down-file",h:3}]},{id:"FAQ",title:"FAQ",h:2,children:[{id:"Filenameorder",title:"File name order",h:3},{id:"SupportedBrowsers",title:"Supported Browsers",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u4E00\u4E2A\u57FA\u4E8E <code>blob</code> \u7684\u6587\u4EF6\u4E0B\u8F7D\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="down-file"><a class="lake-link"><i data-anchor="down-file"></i></a>down-file<label class="api-type-label directive">directive</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[http-data]</code></td><td>URL\u8BF7\u6C42\u53C2\u6570</td><td><code>{}</code></td><td>-</td></tr><tr><td><code>[http-body]</code></td><td>POST\u8BF7\u6C42\u54CD\u5E94\u4F53</td><td><code>{}</code></td><td>-</td></tr><tr><td><code>[http-method]</code></td><td>\u8BF7\u6C42\u7C7B\u578B</td><td><code>'POST','GET','HEAD','PUT','PATCH','DELETE'</code></td><td><code>'GET'</code></td></tr><tr><td><code>[http-url]</code></td><td>\u4E0B\u8F7D\u5730\u5740</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[file-name]</code></td><td>\u6307\u5B9A\u6587\u4EF6\u540D\uFF0C\u82E5\u4E3A\u7A7A\u4ECE\u670D\u52A1\u7AEF\u8FD4\u56DE\u7684 <code>header</code> \u4E2D\u83B7\u53D6 <code>filename</code>\u3001<code>x-filename</code></td><td><code>string, (rep: HttpResponse&lt;Blob>) => string</code></td><td>-</td></tr><tr><td><code>[pre]</code></td><td>\u4E0B\u8F7D\u524D\u56DE\u8C03</td><td><code>(ev: MouseEvent) => Promise&lt;boolean></code></td><td>-</td></tr><tr><td><code>(success)</code></td><td>\u6210\u529F\u56DE\u8C03</td><td><code>EventEmitter&lt;HttpResponse<Blob>></code></td><td>-</td></tr><tr><td><code>(error)</code></td><td>\u9519\u8BEF\u56DE\u8C03</td><td><code>EventEmitter&lt;any></code></td><td>-</td></tr></tbody></table><h2 id="\u5E38\u89C1\u95EE\u9898"><a class="lake-link"><i data-anchor="\u5E38\u89C1\u95EE\u9898"></i></a>\u5E38\u89C1\u95EE\u9898</h2><h3 id="\u6587\u4EF6\u540D\u83B7\u53D6\u987A\u5E8F"><a class="lake-link"><i data-anchor="\u6587\u4EF6\u540D\u83B7\u53D6\u987A\u5E8F"></i></a>\u6587\u4EF6\u540D\u83B7\u53D6\u987A\u5E8F</h3><ol><li><p><code>file-name</code></p></li><li><p><code>content-disposition</code> \u7684 <code>filename*</code>\u3001<code>filename</code></p></li><li><p>header \u53C2\u6570 <code>filename</code>\u3001<code>x-filename</code></p></li></ol><h3 id="\u517C\u5BB9\u6027"><a class="lake-link"><i data-anchor="\u517C\u5BB9\u6027"></i></a>\u517C\u5BB9\u6027</h3><p>\u4F7F\u7528 <code>new Blob()</code> \u6765\u6821\u9A8C<a target="_blank" href="https://github.com/eligrey/FileSaver.js/#supported-browsers" data-url="https://github.com/eligrey/FileSaver.js/#supported-browsers">\u6D4F\u89C8\u5668\u517C\u5BB9</a>\uFF0C\u82E5\u4E0D\u517C\u5BB9\u4F1A\u5728\u76EE\u6807\u5143\u7D20\u4E0A\u589E\u52A0 <code>down-file__not-support</code> \u6837\u5F0F\u3002</p><blockquote><p>\u9ED8\u8BA4\u4E0D\u517C\u5BB9\u5904\u7406\u884C\u4E3A\u4E3A\u9690\u85CF\uFF0C\u53EF\u4EE5\u8BBE\u7F6E Less \u53D8\u91CF\u4E3A <code>@down-file-not-support-behavior: 'disabled'</code> \u8868\u793A\u7981\u6B62\u70B9\u51FB\u3002</p></blockquote>`,meta:{type:"Basic",title:"down-file",subtitle:"\u4E0B\u8F7D\u6587\u4EF6",cols:1,module:"import { DownFileModule } from '@delon/abc/down-file';"},toc:[{id:"API",title:"API",h:2,children:[{id:"down-file",title:"down-file",h:3}]},{id:"\u5E38\u89C1\u95EE\u9898",title:"\u5E38\u89C1\u95EE\u9898",h:2,children:[{id:"\u6587\u4EF6\u540D\u83B7\u53D6\u987A\u5E8F",title:"\u6587\u4EF6\u540D\u83B7\u53D6\u987A\u5E8F",h:3},{id:"\u517C\u5BB9\u6027",title:"\u517C\u5BB9\u6027",h:3}]}]}},demo:!0};codes=[{id:"components-down-file-simple",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:{"zh-CN":"<p>\u4E0B\u8F7D\u4E00\u4E2A\u6587\u4EF6\u3002</p>","en-US":"<p>Download a file.</p>"},code:`import { Component } from '@angular/core';

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
  imports: [DownFileDirective, NzButtonModule]
})
export class ComponentsDownFileSimpleComponent {
  fileTypes = ['.xlsx', '.docx', '.pptx', '.pdf'];

  data = {
    otherdata: 1,
    time: new Date()
  };
}`,lang:"ts",componentName:"ComponentsDownFileSimpleComponent",point:0,name:"simple",urls:"packages/abc/down-file/demo/simple.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-down-file"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-down-file-simple"),e(7,`
        `),r(),e(8,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id))},dependencies:[O,pi,R,P,j],encapsulation:2})};var Hc=["orgEl"],Wc=["shadowOrgEl"],Uc=["shadowTextEl"],qc=["*"],Gc=()=>({"overflow-wrap":"break-word","word-wrap":"break-word"}),vr=i=>({$implicit:i}),$c=i=>({"-webkit-line-clamp":i,"-webkit-box-orient":"vertical"});function Qc(i,n){i&1&&he(0)}function Zc(i,n){if(i&1&&p(0,"div",12),i&2){let t=h(3);c("innerHTML",t.orgHtml,jt)}}function Xc(i,n){if(i&1&&(d(0,"span",10),f(1,Qc,1,0,"ng-container",11)(2,Zc,1,1,"ng-template",null,2,I),r()),i&2){let t=v(3),o=h().$implicit;c("nzTooltipTitle",t)("nzTooltipOverlayStyle",et(3,Gc)),l(),c("ngTemplateOutlet",o)}}function Kc(i,n){i&1&&he(0)}function Jc(i,n){if(i&1&&f(0,Kc,1,0,"ng-container",11),i&2){let t=h().$implicit;c("ngTemplateOutlet",t)}}function Yc(i,n){if(i&1&&f(0,Xc,4,4,"span",10)(1,Jc,1,1,"ng-container"),i&2){let t=h();w(t.tooltip?0:1)}}function ts(i,n){if(i&1&&p(0,"span"),i&2){let t=h();Te(t.cls)}}function es(i,n){}function os(i,n){if(i&1&&e(0),i&2){let t=h(2);B(t.text)}}function ns(i,n){if(i&1&&f(0,es,0,0,"ng-template",13)(1,os,1,1,"ng-template",null,3,I),i&2){let t=v(2);h();let o=v(4);c("ngTemplateOutlet",o)("ngTemplateOutletContext",Q(2,vr,t))}}function is(i,n){}function ds(i,n){if(i&1&&p(0,"div"),i&2){let t=h(2);_e(Q(4,$c,t.lines)),Te(t.cls)}}function rs(i,n){if(i&1&&f(0,is,0,0,"ng-template",13)(1,ds,1,6,"ng-template",null,4,I),i&2){let t=v(2);h();let o=v(4);c("ngTemplateOutlet",o)("ngTemplateOutletContext",Q(2,vr,t))}}function as(i,n){}function ls(i,n){if(i&1&&e(0),i&2){let t=h(2);B(t.linsWord)}}function cs(i,n){if(i&1&&(d(0,"div")(1,"div",14),f(2,as,0,0,"ng-template",13)(3,ls,1,1,"ng-template",null,5,I),p(5,"div",15,6),d(7,"div",16,7)(9,"span"),e(10),r()()()()),i&2){let t=v(4),o=h(),a=v(4);Te(o.cls),l(2),c("ngTemplateOutlet",a)("ngTemplateOutletContext",Q(6,vr,t)),l(3),c("innerHTML",o.orgHtml,jt),l(5),B(o.text)}}var lo=class i{el=y(Ct).nativeElement;ngZone=y(Xt);dom=y(be);doc=y(ge);cdr=y(ct);isSupportLineClamp=this.doc.body.style.webkitLineClamp!==void 0;orgEl;shadowOrgEl;shadowTextEl;inited=!1;orgHtml;type="default";cls={};text="";targetCount=0;tooltip=!1;length;lines;fullWidthRecognition=!1;tail="...";get linsWord(){let{targetCount:n,text:t,tail:o}=this;return(n>0?t.substring(0,n):"")+(n>0&&n<t.length?o:"")}get win(){return this.doc.defaultView||window}getStrFullLength(n){return n.split("").reduce((t,o)=>{let a=o.charCodeAt(0);return a>=0&&a<=128?t+1:t+2},0)}cutStrByFullLength(n,t){let o=0;return n.split("").reduce((a,s)=>{let m=s.charCodeAt(0);return m>=0&&m<=128?o+=1:o+=2,o<=t?a+s:a},"")}bisection(n,t,o,a,s,m){let D=this.tail;m.innerHTML=s.substring(0,t)+D;let V=m.offsetHeight;return V<=n?(m.innerHTML=s.substring(0,t+1)+D,V=m.offsetHeight,V>n||t===o?t:(o=t,t=a-o===1?o+1:Math.floor((a-o)/2)+o,this.bisection(n,t,o,a,s,m))):t-1<0?t:(m.innerHTML=s.substring(0,t-1)+D,V=m.offsetHeight,V<=n?t-1:(a=t,t=Math.floor((a-o)/2)+o,this.bisection(n,t,o,a,s,m)))}genType(){let{lines:n,length:t,isSupportLineClamp:o}=this;this.cls={ellipsis:!0,ellipsis__lines:n&&!o,"ellipsis__line-clamp":n&&o},!n&&!t?this.type="default":n?o?this.type="line-clamp":this.type="line":this.type="length"}gen(){let{type:n,lines:t,length:o,fullWidthRecognition:a,tail:s,orgEl:m,cdr:D,ngZone:V}=this;if(n==="length"){let mt=m.nativeElement;if(mt.children.length>0)throw new Error("Ellipsis content must be string.");let q=mt.textContent;if((a?this.getStrFullLength(q):q.length)<=o||o<0)this.text=q;else{let Lt;o-s.length<=0?Lt="":Lt=a?this.cutStrByFullLength(q,o):q.slice(0,o),this.text=Lt+s}V.run(()=>D.detectChanges())}else if(n==="line"){let{shadowOrgEl:mt,shadowTextEl:q}=this,_t=mt.nativeElement,Lt=_t.innerText||_t.textContent,me=parseInt(this.win.getComputedStyle(this.getEl(".ellipsis")).lineHeight,10),Pe=t*me,xn=this.getEl(".ellipsis__handle");if(xn.style.height=`${Pe}px`,_t.offsetHeight<=Pe)this.text=Lt,this.targetCount=Lt.length;else{let Do=Lt.length,go=Math.ceil(Do/2),Zl=this.bisection(Pe,go,0,Do,Lt,q.nativeElement.firstChild);this.text=Lt,this.targetCount=Zl}V.run(()=>D.detectChanges())}}getEl(n){return this.el.querySelector(n)}executeOnStable(n){this.ngZone.isStable?n():this.ngZone.onStable.asObservable().pipe(We(1)).subscribe(n)}refresh(){this.genType();let{type:n,dom:t,orgEl:o,cdr:a}=this,s=o.nativeElement.innerHTML;this.orgHtml=t.bypassSecurityTrustHtml(s),a.detectChanges(),this.executeOnStable(()=>{if(this.gen(),n!=="line"){let m=this.getEl(".ellipsis");m&&(m.innerHTML=s)}})}ngAfterViewInit(){this.inited=!0,this.refresh()}ngOnChanges(){this.inited&&this.refresh()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["ellipsis"]],viewQuery:function(t,o){if(t&1&&(ot(Hc,5),ot(Wc,5),ot(Uc,5)),t&2){let a;W(a=U())&&(o.orgEl=a.first),W(a=U())&&(o.shadowOrgEl=a.first),W(a=U())&&(o.shadowTextEl=a.first)}},inputs:{tooltip:[2,"tooltip","tooltip",X],length:[2,"length","length",n=>n==null?null:dt(n)],lines:[2,"lines","lines",n=>n==null?null:dt(n)],fullWidthRecognition:[2,"fullWidthRecognition","fullWidthRecognition",X],tail:"tail"},exportAs:["ellipsis"],features:[gt,Rt],ngContentSelectors:qc,decls:9,vars:1,consts:[["orgEl",""],["tooltipTpl",""],["titleTpl",""],["lengthTpl",""],["lineClampTpl",""],["lineTpl",""],["shadowOrgEl",""],["shadowTextEl",""],[2,"display","none",3,"cdkObserveContent"],[3,"class"],["nz-tooltip","",3,"nzTooltipTitle","nzTooltipOverlayStyle"],[4,"ngTemplateOutlet"],[3,"innerHTML"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ellipsis__handle"],[1,"ellipsis__shadow",3,"innerHTML"],[1,"ellipsis__shadow"]],template:function(t,o){if(t&1){let a=z();Z(),d(0,"div",8,0),b("cdkObserveContent",function(){return g(a),C(o.refresh())}),H(2),r(),f(3,Yc,2,1,"ng-template",null,1,I)(5,ts,1,2,"span",9)(6,ns,3,4)(7,rs,3,4)(8,cs,11,8,"div",9)}if(t&2){let a;l(5),w((a=o.type)==="default"?5:a==="length"?6:a==="line-clamp"?7:a==="line"?8:-1)}},dependencies:[Qe,ee,Jt],encapsulation:2,changeDetection:0})};var ui=class i{article="There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-ellipsis-number"]],decls:10,vars:2,consts:[["length","100"],[1,"mt-lg"],["length","100","tooltip",""]],template:function(t,o){t&1&&(e(0,`
    `),d(1,"ellipsis",0),e(2),r(),e(3,`
    `),d(4,"h4",1),e(5,"Show Tooltip"),r(),e(6,`
    `),d(7,"ellipsis",2),e(8),r(),e(9,`
  `)),t&2&&(l(2),B(o.article),l(6),B(o.article))},dependencies:[lo],encapsulation:2})};var hi=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-ellipsis-line"]],decls:10,vars:0,consts:[["lines","3","tooltip","",2,"width","200px"],["href","#cover"]],template:function(t,o){t&1&&(e(0,`
    `),d(1,"ellipsis",0),e(2,`
      `),d(3,"p"),e(4,`
        There were injuries alleged in three `),d(5,"a",1),e(6,"cases in 2015"),r(),e(7,`, and a fourth incident in September,
        according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a
        voluntary recall.
      `),r(),e(8,`
    `),r(),e(9,`
  `))},dependencies:[lo],encapsulation:2})};var fi=class i{item={cols:1,urls:{"en-US":"packages/abc/ellipsis/index.en-US.md","zh-CN":"packages/abc/ellipsis/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>When the text is too long, the Ellipsis automatically shortens it according to its length or the maximum number of lines.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="ellipsis"><a class="lake-link"><i data-anchor="ellipsis"></i></a>ellipsis</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[tooltip]</code></td><td>tooltip for showing the full text content when hovering over</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[length]</code></td><td>maximum number of characters in the text before being truncated</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[lines]</code></td><td>maximum number of rows in the text before being truncated</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[fullWidthRecognition]</code></td><td>whether consider full-width character length as 2 when calculate string length</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[tail]</code></td><td>specify overflow tail</td><td><code>string</code></td><td><code>'...'</code></td></tr></tbody></table>`,meta:{type:"Layout",title:"ellipsis",subtitle:"Ellipsis",cols:1,module:"import { EllipsisModule } from '@delon/abc/ellipsis';"},toc:[{id:"API",title:"API",h:2,children:[{id:"ellipsis",title:"ellipsis",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u6587\u672C\u8FC7\u957F\u81EA\u52A8\u5904\u7406\u7701\u7565\u53F7\uFF0C\u652F\u6301\u6309\u7167\u6587\u672C\u957F\u5EA6\u548C\u6700\u5927\u884C\u6570\u4E24\u79CD\u65B9\u5F0F\u622A\u53D6\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="ellipsis"><a class="lake-link"><i data-anchor="ellipsis"></i></a>ellipsis</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[tooltip]</code></td><td>\u79FB\u52A8\u5230\u6587\u672C\u5C55\u793A\u5B8C\u6574\u5185\u5BB9\u7684\u63D0\u793A</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[length]</code></td><td>\u5728\u6309\u7167\u957F\u5EA6\u622A\u53D6\u4E0B\u7684\u6587\u672C\u6700\u5927\u5B57\u7B26\u6570\uFF0C\u8D85\u8FC7\u5219\u622A\u53D6\u7701\u7565</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[lines]</code></td><td>\u5728\u6309\u7167\u884C\u6570\u622A\u53D6\u4E0B\u6700\u5927\u7684\u884C\u6570\uFF0C\u8D85\u8FC7\u5219\u622A\u53D6\u7701\u7565</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[fullWidthRecognition]</code></td><td>\u662F\u5426\u5C06\u5168\u89D2\u5B57\u7B26\u7684\u957F\u5EA6\u89C6\u4E3A2\u6765\u8BA1\u7B97\u5B57\u7B26\u4E32\u957F\u5EA6</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[tail]</code></td><td>\u6307\u5B9A\u6EA2\u51FA\u5C3E\u5DF4</td><td><code>string</code></td><td><code>'...'</code></td></tr></tbody></table>`,meta:{type:"Layout",title:"ellipsis",subtitle:"\u6587\u672C\u81EA\u52A8\u7701\u7565\u53F7",cols:1,module:"import { EllipsisModule } from '@delon/abc/ellipsis';"},toc:[{id:"API",title:"API",h:2,children:[{id:"ellipsis",title:"ellipsis",h:3}]}]}},demo:!0};codes=[{id:"components-ellipsis-number",meta:{order:1,title:{"zh-CN":"\u6309\u7167\u5B57\u7B26\u6570\u7701\u7565","en-US":"Truncate according to the number of character"}},summary:{"zh-CN":"<p>\u901A\u8FC7\u8BBE\u7F6E <code>length</code> \u5C5E\u6027\u6307\u5B9A\u6587\u672C\u6700\u957F\u957F\u5EA6\uFF0C\u5982\u679C\u8D85\u8FC7\u8FD9\u4E2A\u957F\u5EA6\u4F1A\u81EA\u52A8\u622A\u53D6\u3002</p>","en-US":"<p><code>length</code> attribute specifies the maximum length where the text will automatically be truncated when exceeded.</p>"},code:`import { Component } from '@angular/core';

import { EllipsisComponent } from '@delon/abc/ellipsis';

@Component({
  selector: 'components-ellipsis-number',
  template: \`
    <ellipsis length="100">{{ article }}</ellipsis>
    <h4 class="mt-lg">Show Tooltip</h4>
    <ellipsis length="100" tooltip>{{ article }}</ellipsis>
  \`,
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
  imports: [EllipsisComponent]
})
export class ComponentsEllipsisLineComponent {}`,lang:"ts",componentName:"ComponentsEllipsisLineComponent",point:1,name:"line",urls:"packages/abc/ellipsis/demo/line.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-ellipsis"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-ellipsis-number"),e(7,`
        `),r(),e(8,`
      
        `),d(9,"code-box",3),e(10,`
          `),p(11,"components-ellipsis-line"),e(12,`
        `),r(),e(13,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id),l(5),c("item",o.codes[1]),_("id",o.codes[1].id))},dependencies:[O,ui,hi,R,P,j],encapsulation:2})};var co=class i{el=y(Ct).nativeElement;cdr=y(ct);doc=y(ge);directionality=y(Wt);platform=y(ye);destroy$=y(Bt);formEl=null;_hiden=!0;count=0;dir="ltr";freq;offsetTop;constructor(n){n.attach(this,"errorCollect",{freq:500,offsetTop:129+8*2})}get errEls(){return this.formEl.querySelectorAll(".ant-form-item-has-error")}update(){let n=this.errEls.length;n!==this.count&&(this.count=n,this._hiden=n===0,this.cdr.markForCheck())}_click(){if(this.count===0)return!1;let n=this.errEls;return(this.findParent(n[0],"[nz-form-control]")||n[0]).scrollIntoView(!0),this.doc.documentElement.scrollTop-=this.offsetTop,!0}install(){this.dir=this.directionality.value,this.directionality.change.pipe(zt(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),Hr(this.freq).pipe(zt(this.destroy$)).subscribe(()=>this.update()),this.update()}findParent(n,t){let o=null;for(;n;){if(n.querySelector(t)){o=n;break}n=n.parentElement}return o}ngOnInit(){if(this.platform.isBrowser){if(this.formEl=this.findParent(this.el,"form"),this.formEl===null)throw new Error("No found form element");this.install()}}static \u0275fac=function(t){return new(t||i)(tt(It))};static \u0275cmp=u({type:i,selectors:[["error-collect"],["","error-collect",""]],hostVars:6,hostBindings:function(t,o){t&1&&b("click",function(){return o._click()}),t&2&&T("error-collect",!0)("error-collect-rtl",o.dir==="rtl")("d-none",o._hiden)},inputs:{freq:[2,"freq","freq",dt],offsetTop:[2,"offsetTop","offsetTop",dt]},exportAs:["errorCollect"],features:[gt],decls:3,vars:1,consts:[["nzType","exclamation-circle"],[1,"error-collect__count"]],template:function(t,o){t&1&&(p(0,"nz-icon",0),d(1,"span",1),e(2),r()),t&2&&(l(2),B(o.count))},dependencies:[bt],encapsulation:2,changeDetection:0})};var gi=class i{validateForm=new Ke({email:new ve(null,[le.required])});get email(){return this.validateForm.controls.email}ngOnInit(){this.email.markAsDirty()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-error-collect-basic"]],decls:14,vars:1,consts:[["nz-form","",3,"formGroup"],["nz-input","","formControlName","email","id","email"]],template:function(t,o){t&1&&(e(0,`
    `),d(1,"form",0),e(2,`
      `),d(3,"nz-form-item"),e(4,`
        `),d(5,"nz-form-control"),e(6,`
          `),p(7,"input",1),e(8,`
        `),r(),e(9,`
      `),r(),e(10,`
      `),p(11,"error-collect"),e(12,`
    `),r(),e(13,`
  `)),t&2&&(l(),c("formGroup",o.validateForm))},dependencies:[Dt,R,P,kt,eo,oo,Ye,wt,ht,rt,Tt,Je,De,lt,at,co],encapsulation:2})};var Ci=class i{item={cols:2,urls:{"en-US":"packages/abc/error-collect/index.en-US.md","zh-CN":"packages/abc/error-collect/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>A simple form exception messages collector that jump to element location via click icon; it must be a standard <code>form</code>.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="error-collect"><a class="lake-link"><i data-anchor="error-collect"></i></a>error-collect</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[freq]</code></td><td>Monitor frequency, unit is milliseconds</td><td><code>number</code></td><td><code>500</code></td><td>\u2705</td></tr><tr><td><code>[offsetTop]</code></td><td>Top offset, unit is <code>px</code></td><td><code>number</code></td><td><code>145</code></td><td>\u2705</td></tr></tbody></table>',meta:{type:"Form",title:"error-collect",subtitle:"Error Collect",cols:2,module:"import { ErrorCollectModule } from '@delon/abc/error-collect';"},toc:[{id:"API",title:"API",h:2,children:[{id:"error-collect",title:"error-collect",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u4E00\u4E2A\u7B80\u5355\u7684\u8868\u5355\u5F02\u5E38\u6D88\u606F\u91C7\u96C6\u5668\uFF0C\u70B9\u51FB\u56FE\u6807\u8DF3\u8F6C\u76F8\u5E94\u7684\u4F4D\u7F6E\uFF1B\u5FC5\u987B\u662F\u4E00\u4E2A\u6807\u51C6 <code>form</code> \u8868\u5355\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="error-collect"><a class="lake-link"><i data-anchor="error-collect"></i></a>error-collect</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[freq]</code></td><td>\u76D1\u542C\u9891\u7387\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>500</code></td><td>\u2705</td></tr><tr><td><code>[offsetTop]</code></td><td>\u9876\u90E8\u504F\u79FB\u503C\uFF0C\u5355\u4F4D\uFF1A<code>px</code></td><td><code>number</code></td><td><code>145</code></td><td>\u2705</td></tr></tbody></table>',meta:{type:"Form",title:"error-collect",subtitle:"\u8868\u5355\u5F02\u5E38\u6D88\u606F\u91C7\u96C6\u5668",cols:2,module:"import { ErrorCollectModule } from '@delon/abc/error-collect';"},toc:[{id:"API",title:"API",h:2,children:[{id:"error-collect",title:"error-collect",h:3}]}]}},demo:!0};codes=[{id:"components-error-collect-basic",meta:{order:0,title:"\u57FA\u7840"},summary:"<p>\u4E00\u822C\u914D\u5408 <code>footer-toolbar</code> \u4E00\u8D77\u4F7F\u7528\u3002</p>",code:`import { Component, OnInit } from '@angular/core';
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
}`,lang:"ts",componentName:"ComponentsErrorCollectBasicComponent",point:0,name:"basic",urls:"packages/abc/error-collect/demo/basic.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-error-collect"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-error-collect-basic"),e(7,`
        `),r(),e(8,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id))},dependencies:[O,gi,R,P,j],encapsulation:2})};var ps=["conTpl"],ms=["*"];function us(i,n){if(i&1&&(d(0,"button",8),e(1),r()),i&2){let t=h();c("routerLink",t.backRouterLink)("nzType","primary"),l(),ut(" ",t.locale.backToHome," ")}}var Ve=class i{static ngAcceptInputType_type;i18n=y(Ze);dom=y(be);directionality=y(Wt);cdr=y(ct);destroy$=y(Bt);conTpl;_type;locale={};hasCon=!1;dir="ltr";_img="";_title="";_desc="";typeDict;set type(n){let t=this.typeDict[n];t&&(this.fixImg(t.img),this._type=n,this._title=t.title,this._desc="")}fixImg(n){this._img=this.dom.bypassSecurityTrustStyle(`url('${n}')`)}set img(n){this.fixImg(n)}set title(n){this._title=this.dom.bypassSecurityTrustHtml(n)}set desc(n){this._desc=this.dom.bypassSecurityTrustHtml(n)}backRouterLink="/";checkContent(){this.hasCon=!No(this.conTpl.nativeElement),this.cdr.detectChanges()}constructor(n){n.attach(this,"exception",{typeDict:{403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500"}}})}ngOnInit(){this.dir=this.directionality.value,this.directionality.change.pipe(zt(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),this.i18n.change.pipe(zt(this.destroy$)).subscribe(()=>{this.locale=this.i18n.getData("exception"),this.cdr.detectChanges()}),this.checkContent()}static \u0275fac=function(t){return new(t||i)(tt(It))};static \u0275cmp=u({type:i,selectors:[["exception"]],viewQuery:function(t,o){if(t&1&&ot(ps,7),t&2){let a;W(a=U())&&(o.conTpl=a.first)}},hostVars:4,hostBindings:function(t,o){t&2&&T("exception",!0)("exception-rtl",o.dir==="rtl")},inputs:{type:"type",img:"img",title:"title",desc:"desc",backRouterLink:"backRouterLink"},exportAs:["exception"],ngContentSelectors:ms,decls:10,vars:5,consts:[["conTpl",""],[1,"exception__img-block"],[1,"exception__img"],[1,"exception__cont"],[1,"exception__cont-title",3,"innerHTML"],[1,"exception__cont-desc",3,"innerHTML"],[1,"exception__cont-actions"],[3,"cdkObserveContent"],["nz-button","",3,"routerLink","nzType"]],template:function(t,o){if(t&1){let a=z();Z(),d(0,"div",1),p(1,"div",2),r(),d(2,"div",3),p(3,"h1",4)(4,"div",5),d(5,"div",6)(6,"div",7,0),b("cdkObserveContent",function(){return g(a),C(o.checkContent())}),H(8),r(),f(9,us,2,3,"button",8),r()()}t&2&&(l(),Et("background-image",o._img),l(2),c("innerHTML",o._title,jt),l(),c("innerHTML",o._desc||o.locale[o._type],jt),l(5),w(o.hasCon?-1:9))},dependencies:[Qe,k,ra],encapsulation:2,changeDetection:0})};var bi=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-exception-404"]],decls:2,vars:1,consts:[[3,"type"]],template:function(t,o){t&1&&(e(0," "),p(1,"exception",0)),t&2&&(l(),c("type",404))},dependencies:[Ve],encapsulation:2})};var yi=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-exception-500"]],decls:2,vars:1,consts:[[3,"type"]],template:function(t,o){t&1&&(e(0," "),p(1,"exception",0)),t&2&&(l(),c("type",500))},dependencies:[Ve],encapsulation:2})};var xi=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-exception-403"]],decls:2,vars:1,consts:[[3,"type"]],template:function(t,o){t&1&&(e(0," "),p(1,"exception",0)),t&2&&(l(),c("type",403))},dependencies:[Ve],encapsulation:2})};var vi=class i{item={cols:1,urls:{"en-US":"packages/abc/exception/index.en-US.md","zh-CN":"packages/abc/exception/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Exceptions page is used to provide feedback on specific abnormal state. Usually, it contains an explanation of the error status, and provides users with suggestions or operations, to prevent users from feeling lost and confused.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="exception"><a class="lake-link"><i data-anchor="exception"></i></a>exception</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>type of exception, the corresponding default <code>title</code>, <code>desc</code>, <code>img</code> will be given if set, which can be overridden by explicit setting of <code>title</code>, <code>desc</code>, <code>img</code></td><td><code>'403','404','500'</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[title]</code></td><td>title</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>[desc]</code></td><td>supplementary description</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>[img]</code></td><td>the url of background image</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>[backRouterLink]</code></td><td>Back of router link</td><td><code>string, any[]</code></td><td><code>/</code></td><td>-</td></tr><tr><td><code>ng-content</code></td><td>suggested operations, a default 'Home' link will show if not set</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr></tbody></table>`,meta:{type:"Layout",title:"exception",subtitle:"Exception",cols:1,module:"import { ExceptionModule } from '@delon/abc/exception';"},toc:[{id:"API",title:"API",h:2,children:[{id:"exception",title:"exception",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u5F02\u5E38\u9875\u7528\u4E8E\u5BF9\u9875\u9762\u7279\u5B9A\u7684\u5F02\u5E38\u72B6\u6001\u8FDB\u884C\u53CD\u9988\u3002\u901A\u5E38\uFF0C\u5B83\u5305\u542B\u5BF9\u9519\u8BEF\u72B6\u6001\u7684\u9610\u8FF0\uFF0C\u5E76\u5411\u7528\u6237\u63D0\u4F9B\u5EFA\u8BAE\u6216\u64CD\u4F5C\uFF0C\u907F\u514D\u7528\u6237\u611F\u5230\u8FF7\u5931\u548C\u56F0\u60D1\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="exception"><a class="lake-link"><i data-anchor="exception"></i></a>exception</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>\u9875\u9762\u7C7B\u578B\uFF0C\u82E5\u914D\u7F6E\uFF0C\u5219\u81EA\u5E26\u5BF9\u5E94\u7C7B\u578B\u9ED8\u8BA4\u7684 <code>title</code>\uFF0C<code>desc</code>\uFF0C<code>img</code>\uFF0C\u6B64\u9ED8\u8BA4\u8BBE\u7F6E\u53EF\u4EE5\u88AB <code>title</code>\uFF0C<code>desc</code>\uFF0C<code>img</code> \u8986\u76D6</td><td><code>'403','404','500'</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>[desc]</code></td><td>\u8865\u5145\u63CF\u8FF0</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>[img]</code></td><td>\u80CC\u666F\u56FE\u7247\u5730\u5740</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td><code>[backRouterLink]</code></td><td>\u540E\u9000\u8DEF\u7531\u94FE\u63A5</td><td><code>string, any[]</code></td><td><code>/</code></td><td>-</td></tr><tr><td><code>ng-content</code></td><td>\u5EFA\u8BAE\u64CD\u4F5C\uFF0C\u914D\u7F6E\u6B64\u5C5E\u6027\u65F6\u9ED8\u8BA4\u7684\u300E\u8FD4\u56DE\u9996\u9875\u300F\u6309\u94AE\u4E0D\u751F\u6548</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr></tbody></table>`,meta:{type:"Layout",title:"exception",subtitle:"\u5F02\u5E38",cols:1,module:"import { ExceptionModule } from '@delon/abc/exception';"},toc:[{id:"API",title:"API",h:2,children:[{id:"exception",title:"exception",h:3}]}]}},demo:!0};codes=[{id:"components-exception-404",meta:{order:0,title:404},summary:"<p>404 \u9875\u9762\u3002</p>",code:`import { Component } from '@angular/core';

import { ExceptionComponent } from '@delon/abc/exception';

@Component({
  selector: 'components-exception-404',
  template: \` <exception [type]="404" />\`,
  imports: [ExceptionComponent]
})
export class ComponentsException404Component {}`,lang:"ts",componentName:"ComponentsException404Component",point:0,name:"404",urls:"packages/abc/exception/demo/404.md",type:"demo"},{id:"components-exception-500",meta:{order:1,title:500},summary:"<p>500 \u9875\u9762\u3002</p>",code:`import { Component } from '@angular/core';

import { ExceptionComponent } from '@delon/abc/exception';

@Component({
  selector: 'components-exception-500',
  template: \` <exception [type]="500" />\`,
  imports: [ExceptionComponent]
})
export class ComponentsException500Component {}`,lang:"ts",componentName:"ComponentsException500Component",point:1,name:"500",urls:"packages/abc/exception/demo/500.md",type:"demo"},{id:"components-exception-403",meta:{order:2,title:403},summary:"<p>403 \u9875\u9762\uFF0C\u914D\u5408\u81EA\u5B9A\u4E49\u64CD\u4F5C\u3002</p>",code:`import { Component } from '@angular/core';

import { ExceptionComponent } from '@delon/abc/exception';

@Component({
  selector: 'components-exception-403',
  template: \` <exception [type]="403" />\`,
  imports: [ExceptionComponent]
})
export class ComponentsException403Component {}`,lang:"ts",componentName:"ComponentsException403Component",point:2,name:"403",urls:"packages/abc/exception/demo/403.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-exception"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:19,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-exception-404"),e(7,`
        `),r(),e(8,`
      
        `),d(9,"code-box",3),e(10,`
          `),p(11,"components-exception-500"),e(12,`
        `),r(),e(13,`
      
        `),d(14,"code-box",3),e(15,`
          `),p(16,"components-exception-403"),e(17,`
        `),r(),e(18,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id),l(5),c("item",o.codes[1]),_("id",o.codes[1].id),l(5),c("item",o.codes[2]),_("id",o.codes[2].id))},dependencies:[O,bi,yi,xi,R,P,j],encapsulation:2})};var hs=["*"];function fs(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h();l(),B(t.extra)}}function gs(i,n){i&1&&p(0,"error-collect")}var bl="footer-toolbar__body",Qo=class i{el=y(Ct).nativeElement;renderer=y(Yt);bodyCls=y(ge).querySelector("body")?.classList;errorCollect=!1;extra;ngOnInit(){this.renderer.addClass(this.el,"footer-toolbar"),this.bodyCls?.add(bl)}ngOnDestroy(){this.bodyCls?.remove(bl)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["footer-toolbar"]],inputs:{errorCollect:[2,"errorCollect","errorCollect",X],extra:"extra"},exportAs:["footerToolbar"],features:[gt],ngContentSelectors:hs,decls:5,vars:2,consts:[[1,"footer-toolbar__left"],[4,"nzStringTemplateOutlet"],[1,"footer-toolbar__right"]],template:function(t,o){t&1&&(Z(),d(0,"div",0),f(1,fs,2,1,"ng-container",1),r(),d(2,"div",2),f(3,gs,1,0,"error-collect"),H(4),r()),t&2&&(l(),c("nzStringTemplateOutlet",o.extra),l(2),w(o.errorCollect?3:-1))},dependencies:[Pt,co],encapsulation:2,changeDetection:0})};var Si=class i{form=new Ke({name:new ve(null,[le.required])});get name(){return this.form.controls.name}ngOnInit(){this.name.markAsDirty()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-footer-toolbar-basic"]],decls:18,vars:2,consts:[["nz-form","",3,"formGroup"],[3,"nzValidateStatus"],["nz-input","","formControlName","name","placeholder","required"],["errorCollect","","extra","This is extra area"],["nz-button","","nzType","primary"]],template:function(t,o){t&1&&(e(0,`
    `),d(1,"form",0),e(2,`
      `),d(3,"nz-form-item"),e(4,`
        `),d(5,"nz-form-control",1),e(6,`
          `),p(7,"input",2),e(8,`
        `),r(),e(9,`
      `),r(),e(10,`
      `),d(11,"footer-toolbar",3),e(12,`
        `),d(13,"button",4),e(14,"Submit"),r(),e(15,`
      `),r(),e(16,`
    `),r(),e(17,`
  `)),t&2&&(l(),c("formGroup",o.form),l(4),c("nzValidateStatus",o.name))},dependencies:[Dt,R,P,kt,eo,oo,Ye,wt,ht,rt,Tt,Je,De,lt,at,Qo,E,k,M,N],encapsulation:2})};var zi=class i{item={cols:1,urls:{"en-US":"packages/abc/footer-toolbar/index.en-US.md","zh-CN":"packages/abc/footer-toolbar/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>A toolbar fixed at the bottom.</p><h2 id="Usage"><a class="lake-link"><i data-anchor="Usage"></i></a>Usage</h2><p>It is fixed at the bottom of the content area and does not move along with the scroll bar, which is usually used for data collection and submission for long pages.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="footer-toolbar"><a class="lake-link"><i data-anchor="footer-toolbar"></i></a>footer-toolbar</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>ng-content</code></td><td>toolbar content, align to the right</td><td><code>-</code></td><td>-</td></tr><tr><td><code>[errorCollect]</code></td><td>Whether <code>error-collect</code>, make sure to wrap inside the <code>&lt;form></code> element</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[extra]</code></td><td>extra information, align to the left</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr></tbody></table>',meta:{type:"Layout",title:"footer-toolbar",subtitle:"FooterToolbar",cols:1,module:"import { FooterToolbarModule } from '@delon/abc/footer-toolbar';"},toc:[{id:"Usage",title:"Usage",h:2},{id:"API",title:"API",h:2,children:[{id:"footer-toolbar",title:"footer-toolbar",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u56FA\u5B9A\u5728\u5E95\u90E8\u7684\u5DE5\u5177\u680F\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u4F55\u65F6\u4F7F\u7528"></i></a>\u4F55\u65F6\u4F7F\u7528</h2><p>\u56FA\u5B9A\u5728\u5185\u5BB9\u533A\u57DF\u7684\u5E95\u90E8\uFF0C\u4E0D\u968F\u6EDA\u52A8\u6761\u79FB\u52A8\uFF0C\u5E38\u7528\u4E8E\u957F\u9875\u9762\u7684\u6570\u636E\u641C\u96C6\u548C\u63D0\u4EA4\u5DE5\u4F5C\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="footer-toolbar"><a class="lake-link"><i data-anchor="footer-toolbar"></i></a>footer-toolbar</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>ng-content</code></td><td>\u5DE5\u5177\u680F\u5185\u5BB9\uFF0C\u5411\u53F3\u5BF9\u9F50</td><td><code>-</code></td><td>-</td></tr><tr><td><code>[errorCollect]</code></td><td>\u662F\u5426\u9700\u8981 <code>error-collect</code>\uFF0C\u52A1\u5FC5\u5305\u88F9\u5728 <code>&lt;form></code> \u5143\u7D20\u5185</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[extra]</code></td><td>\u989D\u5916\u4FE1\u606F\uFF0C\u5411\u5DE6\u5BF9\u9F50</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr></tbody></table>',meta:{type:"Layout",title:"footer-toolbar",subtitle:"\u5E95\u90E8\u5DE5\u5177\u680F",cols:1,module:"import { FooterToolbarModule } from '@delon/abc/footer-toolbar';"},toc:[{id:"\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528",h:2},{id:"API",title:"API",h:2,children:[{id:"footer-toolbar",title:"footer-toolbar",h:3}]}]}},demo:!0};codes=[{id:"components-footer-toolbar-basic",meta:{order:0,title:"\u57FA\u7840"},summary:"<p>\u6D6E\u52A8\u56FA\u5B9A\u9875\u811A\uFF0C\u5E38\u7528\u4E8E\u8868\u5355\u9875\u3002</p>",code:`import { Component, OnInit } from '@angular/core';
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
}`,lang:"ts",componentName:"ComponentsFooterToolbarBasicComponent",point:0,name:"basic",urls:"packages/abc/footer-toolbar/demo/basic.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-footer-toolbar"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-footer-toolbar-basic"),e(7,`
        `),r(),e(8,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id))},dependencies:[O,Si,R,P,j],encapsulation:2})};var _i=class i{item={cols:1,urls:{"en-US":"packages/abc/full-content/index.en-US.md","zh-CN":"packages/abc/full-content/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Often used for tables with scroll bars, a simple <a target="_blank" href="https://ng-alain.surge.sh/#/delon/st" data-url="https://ng-alain.surge.sh/#/delon/st">demo</a>\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="full-content"><a class="lake-link"><i data-anchor="full-content"></i></a>full-content</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[(fullscreen)]</code></td><td>Whether full screen (not including top, sidebar area)</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[hideTitle]</code></td><td>Hide title when <code>fullscreen</code> is true</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[padding]</code></td><td>Padding of work area</td><td><code>number</code></td><td><code>24</code></td></tr></tbody></table><h3 id="full-toggle"><a class="lake-link"><i data-anchor="full-toggle"></i></a>full-toggle<label class="api-type-label directive">directive</label></h3><p>Switch whether it is full screen.</p><h2 id="Control"><a class="lake-link"><i data-anchor="Control"></i></a>Control</h2><p>There are three ways:</p><ul><li><p>Use <code>fullscreen</code> property, it support two-way binding</p></li><li><p>Use <code>[full-toggle]</code> directive</p></li><li><p>Use <code>FullContentService.toggle()</code> service</p></li></ul>',meta:{type:"Layout",title:"full-content",subtitle:"Full Screen Workspace",cols:1,module:"import { FullContentModule } from '@delon/abc/full-content';"},toc:[{id:"API",title:"API",h:2,children:[{id:"full-content",title:"full-content",h:3},{id:"full-toggle",title:"full-toggle",h:3}]},{id:"Control",title:"Control",h:2}]},"zh-CN":{content:'<section class="markdown"><p>\u5168\u5C4F\u5DE5\u4F5C\u533A\uFF0C\u5E38\u7528\u4E8E\u5E26\u6709\u6EDA\u52A8\u6761\u8868\u683C\uFF0C\u4E00\u4E2A\u5728\u7EBF<a target="_blank" href="https://ng-alain.surge.sh/#/delon/st" data-url="https://ng-alain.surge.sh/#/delon/st">\u793A\u4F8B</a>\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="full-content"><a class="lake-link"><i data-anchor="full-content"></i></a>full-content</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[(fullscreen)]</code></td><td>\u662F\u5426\u5B8C\u6574\u5168\u5C4F\uFF08\u4E0D\u5305\u62EC\u9876\u90E8\u3001\u4FA7\u8FB9\u680F\u7B49\uFF09</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[hideTitle]</code></td><td>\u5B8C\u6574\u5168\u5C4F\u65F6\u662F\u5426\u9690\u85CF\u6807\u9898</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[padding]</code></td><td>\u5DE5\u4F5C\u533A\u5185\u8FB9\u8DDD</td><td><code>number</code></td><td><code>24</code></td></tr></tbody></table><h3 id="full-toggle"><a class="lake-link"><i data-anchor="full-toggle"></i></a>full-toggle<label class="api-type-label directive">directive</label></h3><p>\u5207\u6362\u662F\u5426\u5168\u5C4F\u3002</p><h2 id="\u5168\u5C4F\u63A7\u5236"><a class="lake-link"><i data-anchor="\u5168\u5C4F\u63A7\u5236"></i></a>\u5168\u5C4F\u63A7\u5236</h2><p>\u5305\u542B\u4E09\u79CD\u65B9\u5F0F\uFF1A</p><ul><li><p>\u4F7F\u7528 <code>fullscreen</code> \u53CC\u5411\u7ED1\u5B9A</p></li><li><p>\u4F7F\u7528 <code>[full-toggle]</code> \u6307\u4EE4</p></li><li><p>\u4F7F\u7528 <code>FullContentService.toggle()</code> \u670D\u52A1</p></li></ul>',meta:{type:"Layout",title:"full-content",subtitle:"\u5168\u5C4F\u5DE5\u4F5C\u533A",cols:1,module:"import { FullContentModule } from '@delon/abc/full-content';"},toc:[{id:"API",title:"API",h:2,children:[{id:"full-content",title:"full-content",h:3},{id:"full-toggle",title:"full-toggle",h:3}]},{id:"\u5168\u5C4F\u63A7\u5236",title:"\u5168\u5C4F\u63A7\u5236",h:2}]}},demo:!1};codes=[];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-full-content"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:1,vars:2,consts:[[3,"codes","item"]],template:function(t,o){t&1&&p(0,"app-docs",0),t&2&&c("codes",o.codes)("item",o.item)},dependencies:[O],encapsulation:2})};var Cs=["host"],bs=["*"];function ys(i,n){i&1&&H(0)}var So=class i{host;href;blankTarget;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["global-footer-item"]],viewQuery:function(t,o){if(t&1&&ot(Cs,7),t&2){let a;W(a=U())&&(o.host=a.first)}},inputs:{href:"href",blankTarget:[2,"blankTarget","blankTarget",X]},exportAs:["globalFooterItem"],features:[gt],ngContentSelectors:bs,decls:2,vars:0,consts:[["host",""]],template:function(t,o){t&1&&(Z(),f(0,ys,1,0,"ng-template",null,0,I))},encapsulation:2,changeDetection:0})};var vs=["*"];function Ss(i,n){if(i&1){let t=z();d(0,"a",4),b("click",function(){let a=g(t).$implicit,s=h(2);return C(s.to(a))}),r()}if(i&2){let t=n.$implicit;c("innerHTML",t._title,jt)}}function zs(i,n){i&1&&he(0)}function _s(i,n){if(i&1){let t=z();d(0,"a",5),b("click",function(){let a=g(t).$implicit,s=h(2);return C(s.to(a))}),f(1,zs,1,0,"ng-container",6),r()}if(i&2){let t=n.$implicit;l(),c("ngTemplateOutlet",t.host)}}function Ts(i,n){if(i&1&&(d(0,"div",0),xt(1,Ss,1,1,"a",2,St),xt(3,_s,2,1,"a",3,St),r()),i&2){let t=h();l(),vt(t.links),l(2),vt(t.items)}}var zo=class i{router=y(In);win=y(Ta);dom=y(be);directionality=y(Wt);cdr=y(ct);destroy$=y(Bt);_links=[];dir="ltr";set links(n){n.forEach(t=>t._title=this.dom.bypassSecurityTrustHtml(t.title)),this._links=n}get links(){return this._links}items;to(n){if(n.href){if(n.blankTarget){this.win.open(n.href);return}/^https?:\/\//.test(n.href)?this.win.location.href=n.href:this.router.navigateByUrl(n.href)}}ngOnInit(){this.dir=this.directionality.value,this.directionality.change.pipe(zt(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["global-footer"]],contentQueries:function(t,o,a){if(t&1&&Kt(a,So,4),t&2){let s;W(s=U())&&(o.items=s)}},hostVars:4,hostBindings:function(t,o){t&2&&T("global-footer",!0)("global-footer-rtl",o.dir==="rtl")},inputs:{links:"links"},exportAs:["globalFooter"],ngContentSelectors:vs,decls:3,vars:1,consts:[[1,"global-footer__links"],[1,"global-footer__copyright"],[1,"global-footer__links-item",3,"innerHTML"],[1,"global-footer__links-item"],[1,"global-footer__links-item",3,"click","innerHTML"],[1,"global-footer__links-item",3,"click"],[4,"ngTemplateOutlet"]],template:function(t,o){t&1&&(Z(),f(0,Ts,5,0,"div",0),d(1,"div",1),H(2),r()),t&2&&w(o.links.length>0||o.items.length>0?0:-1)},dependencies:[Jt],encapsulation:2,changeDetection:0})};var Ti=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=$t({type:i});static \u0275inj=Gt({imports:[Ce,aa]})};var wi=class i{links=[{title:"\u5E2E\u52A9",href:"https://ng-alain.com/",blankTarget:!0},{title:"Github",href:"https://github.com/ng-alain",blankTarget:!0},{title:"\u9884\u89C8",href:"https://ng-alain.surge.sh/",blankTarget:!0}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-global-footer-basic"]],decls:11,vars:1,consts:[[2,"height","280px"],[3,"links"],["nzType","copyright",1,"mx-sm"],["href","//github.com/cipchk","target","_blank",1,"mx-sm"]],template:function(t,o){t&1&&(e(0,`
    `),p(1,"div",0),e(2,`
    `),d(3,"global-footer",1),e(4,`
      Copyright`),p(5,"nz-icon",2),e(6,`
      2023
      `),d(7,"a",3),e(8,"\u5361\u8272"),r(),e(9,`\u51FA\u54C1
    `),r(),e(10,`
  `)),t&2&&(l(3),c("links",o.links))},dependencies:[zo,Vt,bt],styles:["[_nghost-%COMP%]{display:block}"]})};var ki=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-global-footer-custom"]],decls:22,vars:0,consts:[[2,"height","280px"],["href","https://ng-alain.com/","blankTarget",""],["href","https://github.com/ng-alain","blankTarget",""],["nzType","github"],["href","https://ng-alain.surge.sh/","blankTarget",""],["nzType","copyright",1,"mx-sm"],["href","//github.com/cipchk","target","_blank",1,"mx-sm"]],template:function(t,o){t&1&&(e(0,`
    `),p(1,"div",0),e(2,`
    `),d(3,"global-footer"),e(4,`
      `),d(5,"global-footer-item",1),e(6,"\u5E2E\u52A9"),r(),e(7,`
      `),d(8,"global-footer-item",2),e(9,`
        `),p(10,"nz-icon",3),e(11,`
      `),r(),e(12,`
      `),d(13,"global-footer-item",4),e(14,"\u9884\u89C8"),r(),e(15,`
      Copyright`),p(16,"nz-icon",5),e(17,`
      2023
      `),d(18,"a",6),e(19,"\u5361\u8272"),r(),e(20,`\u51FA\u54C1
    `),r(),e(21,`
  `))},dependencies:[Ti,zo,So,Vt,bt],styles:["[_nghost-%COMP%]{display:block}"]})};var Di=class i{item={cols:1,urls:{"en-US":"packages/abc/global-footer/index.en-US.md","zh-CN":"packages/abc/global-footer/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>The footer is part of the global navigation as a supplement to the top navigation.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="global-footer"><a class="lake-link"><i data-anchor="global-footer"></i></a>global-footer</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[links]</code></td><td>Link data</td><td><code><a data-toc="GlobalFooterLink">GlobalFooterLink</a></code></td><td>-</td></tr><tr><td><code>[copyright]</code></td><td>Copyright Information</td><td><code>TemplateRef</code></td><td>-</td></tr></tbody></table><h3 id="global-footer-item"><a class="lake-link"><i data-anchor="global-footer-item"></i></a>global-footer-item</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>ng-content</code></td><td>Title</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[href]</code></td><td>Routing link</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[blankTarget]</code></td><td>Whether to open a new window</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="GlobalFooterLink"><a class="lake-link"><i data-anchor="GlobalFooterLink"></i></a>GlobalFooterLink</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>Title</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[href]</code></td><td>Routing link</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[blankTarget]</code></td><td>Whether to open a new window</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',meta:{type:"Layout",title:"global-footer",subtitle:"Global footer",cols:1,module:"import { GlobalFooterModule } from '@delon/abc/global-footer';"},toc:[{id:"API",title:"API",h:2,children:[{id:"global-footer",title:"global-footer",h:3},{id:"global-footer-item",title:"global-footer-item",h:3},{id:"GlobalFooterLink",title:"GlobalFooterLink",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u9875\u811A\u5C5E\u4E8E\u5168\u5C40\u5BFC\u822A\u7684\u4E00\u90E8\u5206\uFF0C\u4F5C\u4E3A\u5BF9\u9876\u90E8\u5BFC\u822A\u7684\u8865\u5145\uFF0C\u901A\u8FC7\u4F20\u9012\u6570\u636E\u63A7\u5236\u5C55\u793A\u5185\u5BB9\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="global-footer"><a class="lake-link"><i data-anchor="global-footer"></i></a>global-footer</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[links]</code></td><td>\u94FE\u63A5\u6570\u636E</td><td><code><a data-toc="GlobalFooterLink">GlobalFooterLink</a></code></td><td>-</td></tr><tr><td><code>[copyright]</code></td><td>\u7248\u6743\u4FE1\u606F</td><td><code>TemplateRef</code></td><td>-</td></tr></tbody></table><h3 id="global-footer-item"><a class="lake-link"><i data-anchor="global-footer-item"></i></a>global-footer-item</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>ng-content</code></td><td>\u6807\u9898</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[href]</code></td><td>\u8DEF\u7531\u94FE\u63A5</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[blankTarget]</code></td><td>\u662F\u5426\u6253\u5F00\u65B0\u7A97\u53E3</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="GlobalFooterLink"><a class="lake-link"><i data-anchor="GlobalFooterLink"></i></a>GlobalFooterLink</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[href]</code></td><td>\u8DEF\u7531\u94FE\u63A5</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[blankTarget]</code></td><td>\u662F\u5426\u6253\u5F00\u65B0\u7A97\u53E3</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',meta:{type:"Layout",title:"global-footer",subtitle:"\u5168\u5C40\u9875\u811A",cols:1,module:"import { GlobalFooterModule } from '@delon/abc/global-footer';"},toc:[{id:"API",title:"API",h:2,children:[{id:"global-footer",title:"global-footer",h:3},{id:"global-footer-item",title:"global-footer-item",h:3},{id:"GlobalFooterLink",title:"GlobalFooterLink",h:3}]}]}},demo:!0};codes=[{id:"components-global-footer-basic",meta:{order:0,title:"\u6F14\u793A",browser:400},summary:"<p>\u57FA\u672C\u9875\u811A\u3002</p>",code:`import { Component } from '@angular/core';

import { GlobalFooterComponent, GlobalFooterLink } from '@delon/abc/global-footer';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'components-global-footer-basic',
  template: \`
    <div style="height: 280px;"></div>
    <global-footer [links]="links">
      Copyright<nz-icon nzType="copyright" class="mx-sm" />
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
        <nz-icon nzType="github" />
      </global-footer-item>
      <global-footer-item href="https://ng-alain.surge.sh/" blankTarget>\u9884\u89C8</global-footer-item>
      Copyright<nz-icon nzType="copyright" class="mx-sm" />
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
  imports: [GlobalFooterModule, NzIconModule]
})
export class ComponentsGlobalFooterCustomComponent {}`,lang:"ts",componentName:"ComponentsGlobalFooterCustomComponent",point:1,name:"custom",urls:"packages/abc/global-footer/demo/custom.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-global-footer"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-global-footer-basic"),e(7,`
        `),r(),e(8,`
      
        `),d(9,"code-box",3),e(10,`
          `),p(11,"components-global-footer-custom"),e(12,`
        `),r(),e(13,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id),l(5),c("item",o.codes[1]),_("id",o.codes[1].id))},dependencies:[O,wi,ki,R,P,j],encapsulation:2})};var Mi=class i{str=[...Array(26)].map((n,t)=>(t+10).toString(36)).join("");searchValue="mn";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-highlight-simple"]],decls:14,vars:8,consts:[[1,"mb-md",3,"innerHTML"],["nzAddOnBefore","String",1,"mb-md"],["type","text","nz-input","",3,"ngModelChange","ngModel"],["nzAddOnBefore","Search Value"]],template:function(t,o){t&1&&(e(0,`
    `),p(1,"p",0),ae(2,"nzHighlight"),e(3,`
    `),d(4,"nz-input-group",1),e(5,`
      `),d(6,"input",2),L("ngModelChange",function(s){return A(o.str,s)||(o.str=s),s}),r(),e(7,`
    `),r(),e(8,`
    `),d(9,"nz-input-group",3),e(10,`
      `),d(11,"input",2),L("ngModelChange",function(s){return A(o.searchValue,s)||(o.searchValue=s),s}),r(),e(12,`
    `),r(),e(13,`
  `)),t&2&&(l(),c("innerHTML",ta(2,3,o.str,o.searchValue,"i","highlight"),jt),l(5),F("ngModel",o.str),l(5),F("ngModel",o.searchValue))},dependencies:[Ja,Ka,lt,at,to,st,ht,rt,pt],styles:["[_nghost-%COMP%]     .highlight{color:#f50}"]})};var Ni=class i{item={cols:1,urls:{"en-US":"packages/abc/highlight/index.en-US.md","zh-CN":"packages/abc/highlight/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Highlight component from <code>ng-zorro-antd/core/highlight</code>.</p></section>',meta:{type:"Other",title:"highlight",subtitle:"Highlight",cols:1,module:"import { NzHighlightModule } from 'ng-zorro-antd/core/highlight';"},toc:[]},"zh-CN":{content:'<section class="markdown"><p>\u6765\u81EA <code>ng-zorro-antd/core/highlight</code> \u7684\u9AD8\u4EAE\u7EC4\u4EF6\u3002</p></section>',meta:{type:"Other",title:"highlight",subtitle:"\u9AD8\u4EAE",cols:1,module:"import { NzHighlightModule } from 'ng-zorro-antd/core/highlight';"},toc:[]}},demo:!0};codes=[{id:"components-highlight-simple",meta:{order:1,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"}},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
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
  imports: [NzHighlightModule, NzInputModule, FormsModule]
})
export class ComponentsHighlightSimpleComponent {
  str = [...Array(26)].map((_, i) => (i + 10).toString(36)).join('');
  searchValue = 'mn';
}`,lang:"ts",componentName:"ComponentsHighlightSimpleComponent",point:0,name:"simple",urls:"packages/abc/highlight/demo/simple.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-highlight"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-highlight-simple"),e(7,`
        `),r(),e(8,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id))},dependencies:[O,Mi,R,P,j],encapsulation:2})};var sn=class{constructor(n){this.children=[],this.parent=n}delete(n){let t=this.children.indexOf(n);return t===-1?!1:(this.children=this.children.slice(0,t).concat(this.children.slice(t+1)),this.children.length===0&&this.parent.delete(this),!0)}add(n){return this.children.push(n),this}},zr=class i{constructor(n){this.parent=null,this.children={},this.parent=n||null}get(n){return this.children[n]}insert(n){let t=this;for(let o=0;o<n.length;o+=1){let a=n[o],s=t.get(a);if(o===n.length-1)return s instanceof i&&(t.delete(s),s=null),s||(s=new sn(t),t.children[a]=s),s;s instanceof sn&&(s=null),s||(s=new i(t),t.children[a]=s),t=s}return t}delete(n){for(let t in this.children)if(this.children[t]===n){let a=delete this.children[t];return Object.keys(this.children).length===0&&this.parent&&this.parent.delete(this),a}return!1}},ks={"\xA1":"1","\u2122":"2","\xA3":"3","\xA2":"4","\u221E":"5","\xA7":"6","\xB6":"7","\u2022":"8",\u00AA:"9",\u00BA:"0","\u2013":"-","\u2260":"=","\u2044":"!","\u20AC":"@","\u2039":"#","\u203A":"$",\uFB01:"%",\uFB02:"^","\u2021":"&","\xB0":"*","\xB7":"(","\u201A":")","\u2014":"_","\xB1":"+",\u0153:"q","\u2211":"w","\xAE":"r","\u2020":"t","\xA5":"y",\u00F8:"o",\u03C0:"p","\u201C":"[","\u2018":"]","\xAB":"\\",\u0152:"Q","\u201E":"W","\xB4":"E","\u2030":"R","\u02C7":"T",\u00C1:"Y","\xA8":"U","\u02C6":"I",\u00D8:"O","\u220F":"P","\u201D":"{","\u2019":"}","\xBB":"|",\u00E5:"a",\u00DF:"s","\u2202":"d",\u0192:"f","\xA9":"g","\u02D9":"h","\u2206":"j","\u02DA":"k","\xAC":"l","\u2026":";",\u00E6:"'",\u00C5:"A",\u00CD:"S",\u00CE:"D",\u00CF:"F","\u02DD":"G",\u00D3:"H",\u00D4:"J","\uF8FF":"K",\u00D2:"L",\u00DA:":",\u00C6:'"',\u03A9:"z","\u2248":"x",\u00E7:"c","\u221A":"v","\u222B":"b",\u00B5:"m","\u2264":",","\u2265":".","\xF7":"/","\xB8":"Z","\u02DB":"X",\u00C7:"C","\u25CA":"V",\u0131:"B","\u02DC":"N",\u00C2:"M","\xAF":"<","\u02D8":">","\xBF":"?"},Ds={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+","[":"{","]":"}","\\":"|",";":":","'":'"',",":"<",".":">","/":"?",q:"Q",w:"W",e:"E",r:"R",t:"T",y:"Y",u:"U",i:"I",o:"O",p:"P",a:"A",s:"S",d:"D",f:"F",g:"G",h:"H",j:"J",k:"K",l:"L",z:"Z",x:"X",c:"C",v:"V",b:"B",n:"N",m:"M"},Ms={" ":"Space","+":"Plus"};function xl(i,n=navigator.platform){var t,o,a;let{ctrlKey:s,altKey:m,metaKey:D,shiftKey:V,key:mt}=i,q=[],_t=[s,m,D,V];for(let[Lt,me]of _t.entries())me&&q.push(yl[Lt]);if(!yl.includes(mt)){let Lt=q.includes("Alt")&&_r.test(n)&&(t=ks[mt])!==null&&t!==void 0?t:mt,me=q.includes("Shift")&&_r.test(n)&&(o=Ds[Lt])!==null&&o!==void 0?o:Lt,Pe=(a=Ms[me])!==null&&a!==void 0?a:me;q.push(Pe)}return q.join("+")}var yl=["Control","Alt","Meta","Shift"];function Ns(i,n){let t;return t=Es(i,n),t=Is(t),t}var _r=/Mac|iPod|iPhone|iPad/i;function Es(i,n){var t;let o=typeof window>"u"?void 0:window,a=(t=n??o?.navigator.platform)!==null&&t!==void 0?t:"",s=_r.test(a)?"Meta":"Control";return i.replace("Mod",s)}function Is(i){let n=i.split("+").pop(),t=[];for(let o of["Control","Alt","Meta","Shift"])i.includes(o)&&t.push(o);return n&&t.push(n),t.join("+")}var vl=" ",Ps=(()=>{class i{constructor({onReset:t}={}){this._path=[],this.timer=null,this.onReset=t}get path(){return this._path}get sequence(){return this._path.join(vl)}registerKeypress(t){this._path=[...this._path,xl(t)],this.startTimer()}reset(){var t;this.killTimer(),this._path=[],(t=this.onReset)===null||t===void 0||t.call(this)}killTimer(){this.timer!=null&&window.clearTimeout(this.timer),this.timer=null}startTimer(){this.killTimer(),this.timer=window.setTimeout(()=>this.reset(),i.CHORD_TIMEOUT)}}return i.CHORD_TIMEOUT=1500,i})();function Tr(i){if(!(i instanceof HTMLElement))return!1;let n=i.nodeName.toLowerCase(),t=(i.getAttribute("type")||"").toLowerCase();return n==="select"||n==="textarea"||n==="input"&&t!=="submit"&&t!=="reset"&&t!=="checkbox"&&t!=="radio"&&t!=="file"||i.isContentEditable}function Rs(i,n){let t=new CustomEvent("hotkey-fire",{cancelable:!0,detail:{path:n}});i.dispatchEvent(t)&&(Tr(i)?i.focus():i.click())}function As(i){let n=[],t=[""],o=!1;for(let a=0;a<i.length;a++){if(o&&i[a]===","){n.push(t),t=[""],o=!1;continue}if(i[a]===vl){t.push(""),o=!1;continue}else i[a]==="+"?o=!1:o=!0;t[t.length-1]+=i[a]}return n.push(t),n.map(a=>a.map(s=>Ns(s)).filter(s=>s!=="")).filter(a=>a.length>0)}var pn=new zr,Sl=new WeakMap,wr=pn,Ei=new Ps({onReset(){wr=pn}});function zl(i){if(i.defaultPrevented||!(i.target instanceof Node))return;if(Tr(i.target)){let t=i.target;if(!t.id||!t.ownerDocument.querySelector(`[data-hotkey-scope="${t.id}"]`))return}let n=wr.get(xl(i));if(!n){Ei.reset();return}if(Ei.registerKeypress(i),wr=n,n instanceof sn){let t=i.target,o=!1,a,s=Tr(t);for(let m=n.children.length-1;m>=0;m-=1){a=n.children[m];let D=a.getAttribute("data-hotkey-scope");if(!s&&!D||s&&t.id===D){o=!0;break}}a&&o&&(Rs(a,Ei.path),i.preventDefault()),Ei.reset()}}function _l(i,n){Object.keys(pn.children).length===0&&document.addEventListener("keydown",zl);let o=As(n||i.getAttribute("data-hotkey")||"").map(a=>pn.insert(a).add(i));Sl.set(i,o)}function Tl(i){let n=Sl.get(i);if(n&&n.length)for(let t of n)t&&t.delete(i);Object.keys(pn.children).length===0&&document.removeEventListener("keydown",zl)}var mn=class i{el=y(Ct).nativeElement;ngZone=y(Xt);platform=y(ye);set hotkey(n){this.platform.isBrowser&&this.ngZone.runOutsideAngular(()=>_l(this.el,n))}ngOnDestroy(){this.platform.isBrowser&&this.ngZone.runOutsideAngular(()=>Tl(this.el))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=ue({type:i,selectors:[["","hotkey",""]],inputs:{hotkey:"hotkey"}})};var Ii=class i{msg=y(yt);show(n){this.msg.info(n)}selectText(n){n.select()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-hotkey-basic"]],decls:43,vars:0,consts:[["textArea1",""],["nz-button","","nzType","primary","hotkey","Control+d,Meta+d","data-hotkey-scope","text-area-1",3,"click"],["nz-input","","id","text-area-1","rows","4","cols","40","hotkey","q",3,"focus"],["nz-button","","nzType","primary","hotkey","Control+d,Meta+d","data-hotkey-scope","text-area-2",3,"click"],["nz-input","","nzType","primary","id","text-area-2","rows","4","cols","40"],["nz-input","","hotkey","t","type","text"],["hotkey","r"],["nz-button","","nzType","link","hotkey","o k",3,"click"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"button",1),b("click",function(){return g(a),C(o.show("clicked button 1!"))}),e(2,`
      press meta+d or ctrl+d in text area 1 to click button 1
    `),r(),e(3,`
    `),p(4,"br"),e(5,`
    `),d(6,"textarea",2,0),b("focus",function(){g(a);let m=v(7);return C(o.selectText(m))}),e(8,"text area 1, press q to focus this textarea and select all text"),r(),e(9,`
    `),p(10,"br"),e(11,`
    `),d(12,"button",3),b("click",function(){return g(a),C(o.show("clicked button 2!"))}),e(13,`
      press meta+d or ctrl+d in text area 2 to click button 2
    `),r(),e(14,`
    `),p(15,"br"),e(16,`
    `),d(17,"textarea",4),e(18,"text area 2"),r(),p(19,"br"),e(20,`
    `),d(21,"label"),p(22,"input",5),e(23,"Press "),d(24,"kbd"),e(25,"t"),r(),e(26," to focus this field"),r(),p(27,"br"),e(28,`
    `),d(29,"label"),p(30,"nz-switch",6),e(31,"Press "),d(32,"kbd"),e(33,"r"),r(),e(34," to check/uncheck this checkbox"),r(),p(35,"br"),e(36,`
    `),d(37,"a",7),b("click",function(){return g(a),C(o.show("click link"))}),e(38," Press "),d(39,"kbd"),e(40,"o k"),r(),e(41," click this link "),r(),e(42,`
  `)}},dependencies:[E,k,M,N,mn,lt,at,Wo,Ho],styles:["[_nghost-%COMP%]   kbd[_ngcontent-%COMP%]{color:#f50;padding:0 8px}"]})};var Pi=class i{item={cols:2,urls:{"en-US":"packages/abc/hotkey/index.en-US.md","zh-CN":"packages/abc/hotkey/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>Based on the <a target="_blank" href="https://github.com/github/hotkey" data-url="https://github.com/github/hotkey">@github/hotke</a> hotkey library.</p><blockquote><p>If you don't know the hotkey value, you can get it through <a target="_blank" href="https://github.github.com/hotkey/hotkey_mapper.html" data-url="https://github.github.com/hotkey/hotkey_mapper.html">Hotkey Code</a>.</p></blockquote></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="hotkey"><a class="lake-link"><i data-anchor="hotkey"></i></a>hotkey<label class="api-type-label directive">directive</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>hotkey</code></td><td>Specify <a target="_blank" href="https://github.com/github/hotkey#hotkey-string-format" data-url="https://github.com/github/hotkey#hotkey-string-format">hotkey format</a></td><td><code>string</code></td><td>-</td></tr></tbody></table>',meta:{type:"Basic",order:1,title:"hotkey",subtitle:"Hotkey",cols:2,module:"import { HotkeyModule } from '@delon/abc/hotkey';"},toc:[{id:"API",title:"API",h:2,children:[{id:"hotkey",title:"hotkey",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u57FA\u4E8E <a target="_blank" href="https://github.com/github/hotkey" data-url="https://github.com/github/hotkey">@github/hotke</a> \u70ED\u952E\u5E93\u3002</p><blockquote><p>\u5982\u679C\u4E0D\u6E05\u695A\u70ED\u952E\u503C\uFF0C\u53EF\u901A\u8FC7<a target="_blank" href="https://github.github.com/hotkey/hotkey_mapper.html" data-url="https://github.github.com/hotkey/hotkey_mapper.html">\u70ED\u952E\u4EE3\u7801</a>\u6765\u83B7\u53D6\u3002</p></blockquote></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="hotkey"><a class="lake-link"><i data-anchor="hotkey"></i></a>hotkey<label class="api-type-label directive">directive</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>hotkey</code></td><td>\u6307\u5B9A<a target="_blank" href="https://github.com/github/hotkey#hotkey-string-format" data-url="https://github.com/github/hotkey#hotkey-string-format">\u70ED\u952E\u683C\u5F0F</a></td><td><code>string</code></td><td>-</td></tr></tbody></table>',meta:{type:"Basic",order:1,title:"hotkey",subtitle:"\u70ED\u952E",cols:2,module:"import { HotkeyModule } from '@delon/abc/hotkey';"},toc:[{id:"API",title:"API",h:2,children:[{id:"hotkey",title:"hotkey",h:3}]}]}},demo:!0};codes=[{id:"components-hotkey-basic",meta:{order:1,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component, inject } from '@angular/core';

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
}`,lang:"ts",componentName:"ComponentsHotkeyBasicComponent",point:0,name:"basic",urls:"packages/abc/hotkey/demo/basic.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-hotkey"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-hotkey-basic"),e(7,`
        `),r(),e(8,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id))},dependencies:[O,Ii,R,P,j],encapsulation:2})};function Fs(i,n){i&1&&p(0,"nz-spin",2)}function Ls(i,n){if(i&1&&p(0,"nz-icon",3),i&2){let t=h(2);c("nzType",t.icon.type)("nzTheme",t.icon.theme)("nzSpin",t.icon.spin)}}function Bs(i,n){if(i&1&&p(0,"div",5),i&2){let t=h(2);_e(t.custom.style),c("innerHTML",t.custom.html,jt)}}function Vs(i,n){if(i&1&&(d(0,"div",0),f(1,Fs,1,0,"nz-spin",2)(2,Ls,1,3,"nz-icon",3)(3,Bs,1,3,"div",4),r()),i&2){let t,o=h();l(),w((t=o.options.type)==="spin"?1:t==="icon"?2:3)}}function Os(i,n){if(i&1&&(d(0,"div",1),e(1),r()),i&2){let t=h();l(),B(t.options.text)}}var un=class i{options;dir="ltr";get icon(){return this.options.icon}get custom(){return this.options.custom}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["loading-default"]],hostVars:4,hostBindings:function(t,o){t&2&&T("loading-default",!0)("loading-default-rtl",o.dir==="rtl")},decls:2,vars:2,consts:[[1,"loading-default__icon"],[1,"loading-default__text"],["nzSimple",""],[3,"nzType","nzTheme","nzSpin"],[1,"loading-default__custom",3,"style","innerHTML"],[1,"loading-default__custom",3,"innerHTML"]],template:function(t,o){t&1&&f(0,Vs,4,1,"div",0)(1,Os,2,1,"div",1),t&2&&(w(o.options.type!=="text"?0:-1),l(),w(o.options.text?1:-1))},dependencies:[Bo,bt],encapsulation:2,changeDetection:0})};var so=class i{overlay=y(ua);configSrv=y(It);directionality=y(Wt);_overlayRef;compRef=null;opt=null;cog;n$=new Zt;loading$;get instance(){return this.compRef!=null?this.compRef.instance:null}constructor(){this.cog=this.configSrv.merge("loading",{type:"spin",text:"\u52A0\u8F7D\u4E2D...",icon:{type:"loading",theme:"outline",spin:!0},delay:0}),this.loading$=this.n$.asObservable().pipe(Wr(()=>Ae(this.opt.delay))).subscribe(()=>this.create())}create(){if(this.opt==null)return;this._close(!1),this._overlayRef=this.overlay.create({positionStrategy:this.overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:this.overlay.scrollStrategies.block(),hasBackdrop:!0,backdropClass:"loading-backdrop"}),this.compRef=this._overlayRef.attach(new ma(un));let n=this.configSrv.get("loading").direction||this.directionality.value;this.instance!=null&&(this.instance.options=this.opt,this.instance.dir=n),this.compRef.changeDetectorRef.markForCheck()}open(n){this.opt=ft(ft({},this.cog),n),this.n$.next()}_close(n){n&&(this.opt=null),this._overlayRef&&(this._overlayRef.detach(),this.compRef=null)}close(){this._close(!0)}ngOnDestroy(){this.loading$.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=de({token:i,factory:i.\u0275fac,providedIn:"root"})};var Ri=class i{loadingSrv=y(so);show(n){this.loadingSrv.open({type:n}),setTimeout(()=>this.loadingSrv.close(),1e3*3)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-loading-basic"]],decls:10,vars:0,consts:[["nz-button","",3,"click"]],template:function(t,o){t&1&&(e(0,`
    `),d(1,"button",0),b("click",function(){return o.show("icon")}),e(2,"Icon"),r(),e(3,`
    `),d(4,"button",0),b("click",function(){return o.show("spin")}),e(5,"Spin"),r(),e(6,`
    `),d(7,"button",0),b("click",function(){return o.show("text")}),e(8,"Only Text"),r(),e(9,`
  `))},dependencies:[E,k,M,N],encapsulation:2})};var Ai=class i{loadingSrv=y(so);show(){this.loadingSrv.open({delay:1e3}),setTimeout(()=>this.loadingSrv.close(),1e3*5)}close(){this.loadingSrv.close()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-loading-delay"]],decls:7,vars:0,consts:[["nz-button","",3,"click"]],template:function(t,o){t&1&&(e(0,`
    `),d(1,"button",0),b("click",function(){return o.show()}),e(2,"Display after 1 seconds"),r(),e(3,`
    `),d(4,"button",0),b("click",function(){return o.close()}),e(5,"Close"),r(),e(6,`
  `))},dependencies:[E,k,M,N],encapsulation:2})};function js(i,n){if(i&1){let t=z();e(0,`
    `),d(1,"button",0),b("click",function(){let a=g(t).$implicit,s=h();return C(s.show(a))}),e(2),r(),e(3,`
  `)}if(i&2){let t=n.$implicit;l(2),B(t.name)}}var Fi=class i{loadingSrv=y(so);dom=y(be);customs=[{name:"Balls",style:{height:"40px",fill:"#1890ff"},html:this.dom.bypassSecurityTrustHtml(`
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
      </svg>`)}];show(n){this.loadingSrv.open({type:"custom",custom:n,text:"Loading...(Auto close after 3s)"}),setTimeout(()=>this.loadingSrv.close(),1e3*3)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-loading-custom"]],decls:3,vars:0,consts:[["nz-button","",3,"click"]],template:function(t,o){t&1&&(e(0," "),xt(1,js,4,1,null,null,St)),t&2&&(l(),vt(o.customs))},dependencies:[E,k,M,N],encapsulation:2})};var Li=class i{item={cols:2,urls:{"en-US":"packages/abc/loading/index.en-US.md","zh-CN":"packages/abc/loading/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Global load indicator is generally used when an operation needs to interrupt the user operation.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="LoadingService"><a class="lake-link"><i data-anchor="LoadingService"></i></a>LoadingService</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>open(options?: <a data-toc="LoadingShowOptions">LoadingShowOptions</a>)</code></td><td>Open a new loading indicator</td></tr><tr><td><code>close()</code></td><td>Turn off a loading indicator</td></tr></tbody></table><h3 id="LoadingShowOptions"><a class="lake-link"><i data-anchor="LoadingShowOptions"></i></a>LoadingShowOptions</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>type</code></td><td>Show type of loading</td><td><code>LoadingType</code></td><td><code>spin</code></td><td>\u2705</td></tr><tr><td><code>text</code></td><td>Text of loading</td><td><code>string</code></td><td><code>\u52A0\u8F7D\u4E2D...</code></td><td>\u2705</td></tr><tr><td><code>icon</code></td><td>Configuration item of type <code>icon</code></td><td><code>LoadingIcon</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>custom</code></td><td>Configuration item of type <code>custom</code></td><td><code>LoadingCustom</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>delay</code></td><td>Specifies a delay in milliseconds for loading state (prevent flush), unit: milliseconds</td><td><code>number</code></td><td>-</td><td>\u2705</td></tr></tbody></table>',meta:{type:"Basic",order:2,title:"loading",subtitle:"Loading indicator",cols:2,module:"import { LoadingModule } from '@delon/abc/loading';"},toc:[{id:"API",title:"API",h:2,children:[{id:"LoadingService",title:"LoadingService",h:3},{id:"LoadingShowOptions",title:"LoadingShowOptions",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u5168\u5C40\u52A0\u8F7D\u6307\u793A\u7B26\uFF0C\u4E00\u822C\u7528\u4E8E\u67D0\u4E2A\u64CD\u4F5C\u9700\u8981\u4E2D\u65AD\u7528\u6237\u64CD\u4F5C\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="LoadingService"><a class="lake-link"><i data-anchor="LoadingService"></i></a>LoadingService</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>open(options?: <a data-toc="LoadingShowOptions">LoadingShowOptions</a>)</code></td><td>\u6253\u5F00\u4E00\u4E2A\u65B0\u52A0\u8F7D\u6307\u793A\u7B26</td></tr><tr><td><code>close()</code></td><td>\u5173\u95ED\u4E00\u4E2A\u52A0\u8F7D\u6307\u793A\u7B26</td></tr></tbody></table><h3 id="LoadingShowOptions"><a class="lake-link"><i data-anchor="LoadingShowOptions"></i></a>LoadingShowOptions</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>type</code></td><td>\u663E\u793A\u7C7B\u578B</td><td><code>LoadingType</code></td><td><code>spin</code></td><td>\u2705</td></tr><tr><td><code>text</code></td><td>\u63CF\u8FF0\u6587\u6848</td><td><code>string</code></td><td><code>\u52A0\u8F7D\u4E2D...</code></td><td>\u2705</td></tr><tr><td><code>icon</code></td><td>\u7C7B\u578B\u4E3A <code>icon</code> \u7684\u914D\u7F6E\u9879</td><td><code>LoadingIcon</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>custom</code></td><td>\u7C7B\u578B\u4E3A <code>custom</code> \u7684\u914D\u7F6E\u9879</td><td><code>LoadingCustom</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>delay</code></td><td>\u5EF6\u8FDF\u663E\u793A\u52A0\u8F7D\u6548\u679C\u7684\u65F6\u95F4\uFF08\u9632\u6B62\u95EA\u70C1\uFF09\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td>-</td><td>\u2705</td></tr></tbody></table>',meta:{type:"Basic",order:2,title:"loading",subtitle:"\u52A0\u8F7D\u6307\u793A\u7B26",cols:2,module:"import { LoadingModule } from '@delon/abc/loading';"},toc:[{id:"API",title:"API",h:2,children:[{id:"LoadingService",title:"LoadingService",h:3},{id:"LoadingShowOptions",title:"LoadingShowOptions",h:3}]}]}},demo:!0};codes=[{id:"components-loading-basic",meta:{order:1,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component, inject } from '@angular/core';

import { LoadingService, LoadingType } from '@delon/abc/loading';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-loading-basic',
  template: \`
    <button nz-button (click)="show('icon')">Icon</button>
    <button nz-button (click)="show('spin')">Spin</button>
    <button nz-button (click)="show('text')">Only Text</button>
  \`,
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
}`,lang:"ts",componentName:"ComponentsLoadingCustomComponent",point:2,name:"custom",urls:"packages/abc/loading/demo/custom.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-loading"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:21,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-loading-basic"),e(7,`
        `),r(),e(8,`
      
        `),d(9,"code-box",3),e(10,`
          `),p(11,"components-loading-custom"),e(12,`
        `),r(),e(13,`
      `),r(),d(14,"div",2),e(15,`
        `),d(16,"code-box",3),e(17,`
          `),p(18,"components-loading-delay"),e(19,`
        `),r(),e(20,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id),l(5),c("item",o.codes[2]),_("id",o.codes[2].id),l(7),c("item",o.codes[1]),_("id",o.codes[1].id))},dependencies:[O,Ri,Ai,Fi,R,P,j],encapsulation:2})};var To=class i{scriptSrv=y($e);defaultConfig;_cog;pending=!1;_lodop=null;_init=new Zt;_events=new Zt;printBuffer=[];constructor(n){this.defaultConfig=n.merge("lodop",{url:"http://localhost:8443/CLodopfuncs.js",name:"CLODOP",companyName:"",checkMaxCount:100}),this.cog=this.defaultConfig}get cog(){return this._cog}set cog(n){this._cog=ft(ft({},this.defaultConfig),n)}get events(){return this._events.asObservable()}get lodop(){return this._lodop?ie({ok:!0,lodop:this._lodop}):this.pending?this._init.asObservable():(this.request(),this._init.asObservable())}get printer(){this.check();let n=[],t=this._lodop.GET_PRINTER_COUNT();for(let o=0;o<t;o++)n.push(this._lodop.GET_PRINTER_NAME(o));return n}check(){if(!this._lodop)throw new Error("\u8BF7\u52A1\u5FC5\u5148\u8C03\u7528 lodop \u83B7\u53D6\u5BF9\u8C61")}request(){this.pending=!0;let n=new URL(this.cog.url);n.searchParams.set("name",this.cog.name);let t=n.toString(),o=this.cog.checkMaxCount,a=(m,D)=>{this._init.next({ok:m==="ok",status:m,error:D,lodop:this._lodop})},s=()=>{if(--o,this._lodop.webskt&&this._lodop.webskt.readyState===1)a("ok");else{if(o<0){a("check-limit");return}setTimeout(()=>s(),100)}};this.scriptSrv.loadScript(t).then(m=>{if(m.status!=="ok"){this.pending=!1,a("script-load-error",m[0]);return}let D=window;if(D.hasOwnProperty(this.cog.name)&&(this._lodop=D[this.cog.name]),this._lodop===null){a("load-variable-name-error",{name:this.cog.name});return}this._lodop.SET_LICENSES(this.cog.companyName,this.cog.license,this.cog.licenseA,this.cog.licenseB),s()})}reset(){this._lodop=null,this.pending=!1,this.request()}attachCode(n,t,o){this.check(),o||(o=/LODOP\.([^(]+)\(([^\n]+)?\);/i),n.split(`
`).forEach(a=>{let s=o.exec(a.trim());if(!s)return;let m=this._lodop[s[1]];if(m){let D=null;try{D=new Function(`return [${s[2]}]`)()}catch{}if(D!=null&&Array.isArray(D)&&t)for(let V=0;V<D.length;V++)typeof D[V]=="string"&&(D[V]=D[V].replace(/{{(.*?)}}/g,(mt,q)=>t[q.trim()]||""));m.apply(this._lodop,D)}})}design(){this.check();let n=this._lodop.PRINT_DESIGN();return new Promise(t=>{this._lodop.On_Return=(o,a)=>{n===o&&(this._lodop.On_Return=null,t(`${a}`))}})}printDo(){let n=this.printBuffer.shift();if(!n)return;this.attachCode(n.code,n.item,n.parser);let t=this._lodop.PRINT();this._lodop.On_Return=(o,a)=>{t===o&&(this._lodop.On_Return=null,this._events.next(ft({ok:a===!0,error:a===!0?null:a},n)),this.printDo())}}print(n,t,o){this.check(),t&&this.printBuffer.push(...(Array.isArray(t)?t:[t]).map(a=>({code:n,parser:o,item:a}))),this.printDo()}ngOnDestroy(){this._init.unsubscribe(),this._events.unsubscribe()}static \u0275fac=function(t){return new(t||i)(wn(It))};static \u0275prov=de({token:i,factory:i.\u0275fac,providedIn:"root"})};function Ws(i,n){if(i&1){let t=z();e(0,`
          \u8BF7\u5148\u4E0B\u8F7D`),d(1,"a",2),e(2,"Lodop\u63D2\u4EF6"),r(),e(3,"\uFF0C \u5B89\u88C5\u540E\u70B9\u51FB"),d(4,"a",3),b("click",function(){g(t);let a=h(2);return C(a.reload())}),e(5,"\u91CD\u8BD5"),r(),e(6,`\u3002
        `)}}function Us(i,n){if(i&1&&(e(0,`
      `),d(1,"nz-alert",1),e(2,`
        `),f(3,Ws,7,0,"ng-template",null,0,I),e(5,`
      `),r(),e(6,`
    `)),i&2){let t=v(4);l(),c("nzType","warning")("nzMessage",t)}}function qs(i,n){if(i&1&&(e(0,`
                `),p(1,"nz-option",16),e(2,`
              `)),i&2){let t=n.$implicit;l(),c("nzLabel",t)("nzValue",t)}}function Gs(i,n){if(i&1&&(e(0,`
                `),p(1,"nz-option",16),e(2,`
              `)),i&2){let t=n.$implicit;l(),c("nzLabel",t)("nzValue",t)}}function $s(i,n){if(i&1){let t=z();e(0,`
      `),d(1,"form",4),e(2,`
        `),d(3,"nz-form-item",5),e(4,`
          `),d(5,"nz-form-label",6),e(6,"\u6253\u5370\u670D\u52A1\u5668"),r(),e(7,`
          `),d(8,"nz-form-control",6),e(9,`
            `),d(10,"nz-input-group"),e(11,`
              `),d(12,"div",7),e(13,`
                `),d(14,"input",8),L("ngModelChange",function(a){g(t);let s=h();return A(s.cog.url,a)||(s.cog.url=a),C(a)}),r(),e(15,`
              `),r(),e(16,`
              `),d(17,"div",7),e(18,`
                `),d(19,"button",9),b("click",function(){g(t);let a=h();return C(a.reload(null))}),e(20,"\u91CD\u65B0\u52A0\u8F7D\u6253\u5370\u673A"),r(),e(21,`
              `),r(),e(22,`
            `),r(),e(23,`
          `),r(),e(24,`
        `),r(),e(25,`
        `),d(26,"nz-form-item",5),e(27,`
          `),d(28,"nz-form-label",6),e(29,"\u6253\u5370\u673A"),r(),e(30,`
          `),d(31,"nz-form-control",6),e(32,`
            `),d(33,"nz-select",10),L("ngModelChange",function(a){g(t);let s=h();return A(s.cog.printer,a)||(s.cog.printer=a),C(a)}),b("ngModelChange",function(a){g(t);let s=h();return C(s.changePinter(a))}),e(34,`
              `),xt(35,qs,3,2,null,null,St),r(),e(37,`
          `),r(),e(38,`
        `),r(),e(39,`
        `),d(40,"nz-form-item",5),e(41,`
          `),d(42,"nz-form-label",6),e(43,"\u7EB8\u5F20\u7C7B\u578B"),r(),e(44,`
          `),d(45,"nz-form-control",6),e(46,`
            `),d(47,"nz-select",11),L("ngModelChange",function(a){g(t);let s=h();return A(s.cog.paper,a)||(s.cog.paper=a),C(a)}),e(48,`
              `),xt(49,Gs,3,2,null,null,St),r(),e(51,`
          `),r(),e(52,`
        `),r(),e(53,`
        `),d(54,"nz-form-item",5),e(55,`
          `),d(56,"nz-form-label",6),e(57,"\u6253\u5370\u5185\u5BB9"),r(),e(58,`
          `),d(59,"nz-form-control",12),e(60,`
            `),d(61,"textarea",13),L("ngModelChange",function(a){g(t);let s=h();return A(s.cog.html,a)||(s.cog.html=a),C(a)}),r(),e(62,`
          `),r(),e(63,`
        `),r(),e(64,`
        `),d(65,"nz-form-item",5),e(66,`
          `),d(67,"nz-form-control",14),e(68,`
            `),d(69,"button",15),b("click",function(){g(t);let a=h();return C(a.print(!0))}),e(70,"\u6253\u5370\u9884\u89C8"),r(),e(71,`
            `),d(72,"button",15),b("click",function(){g(t);let a=h();return C(a.print())}),e(73,"\u76F4\u63A5\u6253\u5370"),r(),e(74,`
          `),r(),e(75,`
        `),r(),e(76,`
      `),r(),e(77,`
    `)}if(i&2){let t=h();l(5),c("nzSm",6),l(3),c("nzSm",18),l(4),c("nzSpan",16),l(2),F("ngModel",t.cog.url),l(3),c("nzSpan",8),l(11),c("nzSm",6),l(3),c("nzSm",18),l(2),F("ngModel",t.cog.printer),l(2),vt(t.pinters),l(7),c("nzSm",6),l(3),c("nzSm",18),l(2),F("ngModel",t.cog.paper),l(2),vt(t.papers),l(7),c("nzSm",6),l(3),c("nzSm",18),l(2),F("ngModel",t.cog.html),l(6),c("nzSm",18)("nzOffset",6),l(2),c("nzLoading",t.printing),l(3),c("nzLoading",t.printing)}}var Bi=class i{constructor(n,t){this.lodopSrv=n;this.msg=t;this.lodopSrv.lodop.subscribe(({lodop:o,ok:a})=>{if(!a){this.error=!0;return}this.error=!1,this.msg.success("\u6253\u5370\u673A\u52A0\u8F7D\u6210\u529F"),this.lodop=o,this.pinters=this.lodopSrv.printer})}cog={url:"https://localhost:8443/CLodopfuncs.js",printer:"",paper:"",html:`
        <h1>Title</h1>
        <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>
        <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>
        <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>
        <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>
        <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>
        `};error=!1;lodop=null;pinters=[];papers=[];printing=!1;reload(n={url:"https://localhost:8443/CLodopfuncs.js"}){this.pinters=[],this.papers=[],this.cog.printer="",this.cog.paper="",this.lodopSrv.cog=ft(ft({},this.cog),n),this.error=!1,n===null&&this.lodopSrv.reset()}changePinter(n){this.papers=this.lodop.GET_PAGESIZES_LIST(n,`
`).split(`
`)}print(n=!1){let t=this.lodop;t.PRINT_INITA(10,20,810,610,"\u6D4B\u8BD5C-Lodop\u8FDC\u7A0B\u6253\u5370\u56DB\u6B65\u9AA4"),t.SET_PRINTER_INDEXA(this.cog.printer),t.SET_PRINT_PAGESIZE(0,0,0,this.cog.paper),t.ADD_PRINT_TEXT(1,1,300,200,"\u4E0B\u9762\u8F93\u51FA\u7684\u662F\u672C\u9875\u6E90\u4EE3\u7801\u53CA\u5176\u5C55\u73B0\u6548\u679C\uFF1A"),t.ADD_PRINT_TEXT(20,10,"90%","95%",this.cog.html),t.SET_PRINT_STYLEA(0,"ItemType",4),t.NewPageA(),t.ADD_PRINT_HTM(20,10,"90%","95%",this.cog.html),n?t.PREVIEW():t.PRINT()}static \u0275fac=function(t){return new(t||i)(tt(To),tt(yt))};static \u0275cmp=u({type:i,selectors:[["components-lodop-print"]],decls:3,vars:1,consts:[["message",""],[3,"nzType","nzMessage"],["href","http://c-lodop.com/download.html","target","_blank"],[3,"click"],["nz-form",""],["nz-row",""],["nz-col","",3,"nzSm"],["nz-col","",3,"nzSpan"],["nz-input","","nzPlaceHolder","https://localhost:8443/CLodopfuncs.js","name","url",3,"ngModelChange","ngModel"],["nz-button","",3,"click"],["nzPlaceHolder","\u8BF7\u9009\u62E9\u6253\u5370\u673A","nzShowSearch","","nzAllowClear","","name","printer",2,"width","90%",3,"ngModelChange","ngModel"],["nzPlaceHolder","\u8BF7\u9009\u62E9\u7EB8\u5F20\u7C7B\u578B","nzShowSearch","","nzAllowClear","","name","paper",2,"width","90%",3,"ngModelChange","ngModel"],["nz-col","","nzExtra","\u4EC5\u9650HTML\uFF0C\u66F4\u591A\u7C7B\u578B\u652F\u6301\u8BF7\u53C2\u8003\u5B98\u7F51",3,"nzSm"],["nz-input","","name","html","nzAutosize","",3,"ngModelChange","ngModel"],["nz-col","",3,"nzSm","nzOffset"],["nz-button","",3,"click","nzLoading"],[3,"nzLabel","nzValue"]],template:function(t,o){t&1&&(e(0,`
    `),f(1,Us,7,2)(2,$s,78,18)),t&2&&(l(),w(o.error?1:2))},dependencies:[Dt,R,P,kt,eo,$n,oo,Zn,Qn,se,st,wt,ht,rt,Tt,pt,Ut,lt,at,to,Un,E,k,M,N,Lo,Ao,Fo],encapsulation:2})};var Qs=()=>({minRows:2,maxRows:6});function Zs(i,n){i&1&&(e(0,`
          \u8BF7\u5148\u4E0B\u8F7D`),d(1,"a",2),e(2,"Lodop\u63D2\u4EF6"),r(),e(3,`\u3002
        `))}function Xs(i,n){if(i&1&&(e(0,`
      `),d(1,"nz-alert",1),e(2,`
        `),f(3,Zs,4,0,"ng-template",null,0,I),e(5,`
      `),r(),e(6,`
    `)),i&2){let t=v(4);l(),c("nzType","warning")("nzMessage",t)}}function Ks(i,n){if(i&1){let t=z();e(0,`
      `),d(1,"form",3),e(2,`
        `),d(3,"nz-form-item",4),e(4,`
          `),d(5,"nz-form-label",5),e(6,"\u6807\u9898"),r(),e(7,`
          `),d(8,"nz-form-control",5),e(9,`
            `),d(10,"input",6),L("ngModelChange",function(a){g(t);let s=h();return A(s.context.\u6807\u9898,a)||(s.context.\u6807\u9898=a),C(a)}),r(),e(11,`
          `),r(),e(12,`
        `),r(),e(13,`
        `),d(14,"nz-form-item",4),e(15,`
          `),d(16,"nz-form-label",5),e(17,"\u8D39\u7528"),r(),e(18,`
          `),d(19,"nz-form-control",5),e(20,`
            `),d(21,"input",7),L("ngModelChange",function(a){g(t);let s=h();return A(s.context.\u8D39\u7528,a)||(s.context.\u8D39\u7528=a),C(a)}),r(),e(22,`
          `),r(),e(23,`
        `),r(),e(24,`
        `),d(25,"nz-form-item",4),e(26,`
          `),d(27,"nz-form-label",5),e(28,"\u6253\u5370\u5185\u5BB9"),r(),e(29,`
          `),d(30,"nz-form-control",5),e(31,`
            `),d(32,"textarea",8),L("ngModelChange",function(a){g(t);let s=h();return A(s.code,a)||(s.code=a),C(a)}),r(),e(33,`
          `),r(),e(34,`
        `),r(),e(35,`
        `),d(36,"nz-form-item",4),e(37,`
          `),d(38,"nz-form-control",9),e(39,`
            `),d(40,"button",10),b("click",function(){g(t);let a=h();return C(a.design())}),e(41,"\u6253\u5370\u8BBE\u8BA1"),r(),e(42,`
            `),d(43,"button",11),b("click",function(){g(t);let a=h();return C(a.setup())}),e(44,"\u6253\u5370\u7EF4\u62A4"),r(),e(45,`
            `),d(46,"button",11),b("click",function(){g(t);let a=h();return C(a.print())}),e(47,"\u6253\u5370\u9884\u89C8"),r(),e(48,`
            `),d(49,"button",10),b("click",function(){g(t);let a=h();return C(a.printBatch())}),e(50,"\u6279\u91CF\u6253\u53703\u5F20"),r(),e(51,`
          `),r(),e(52,`
        `),r(),e(53,`
      `),r(),e(54,`
    `)}if(i&2){let t=h();l(5),c("nzSm",6),l(3),c("nzSm",18),l(2),F("ngModel",t.context.\u6807\u9898),l(6),c("nzSm",6),l(3),c("nzSm",18),l(2),F("ngModel",t.context.\u8D39\u7528),l(6),c("nzSm",6),l(3),c("nzSm",18),l(2),F("ngModel",t.code),c("nzAutosize",et(14,Qs)),l(6),c("nzSm",18)("nzOffset",6),l(2),c("nzLoading",t.doing),l(9),c("nzLoading",t.doing)}}var Oi=class i{constructor(n,t){this.lodopSrv=n;this.msg=t;this.lodopSrv.lodop.subscribe(({lodop:o,ok:a})=>{if(!a){this.error=!0;return}this.error=!1,this.lodop=o})}doing=!1;error=!1;lodop=null;context={\u6807\u9898:"\u81EA\u5B9A\u4E49\u6807\u9898",\u8D39\u7528:"100.00 \u5143"};code=`LODOP.PRINT_INITA(10,10,762,533,"\u6D4B\u8BD5\u5957\u6253");
LODOP.ADD_PRINT_TEXT(38,78,408,30,"{{\u6807\u9898}}");
LODOP.SET_PRINT_STYLEA(0,"FontSize",15);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#800000");
LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
LODOP.ADD_PRINT_TEXT(259,579,100,23,"{{\u8D39\u7528}}");
LODOP.ADD_PRINT_TEXT(260,520,58,24,"\u5408\u8BA1\uFF1A");`;design(){this.lodopSrv.attachCode(this.code),this.doing=!0,this.lodopSrv.design().then(n=>{this.code=n,this.doing=!1})}setup(){this.lodopSrv.attachCode(this.code),this.lodop.PRINT_SETUP()}print(){this.lodopSrv.attachCode(this.code,this.context),this.lodop.PREVIEW()}printBatch(){this.doing=!0;let n=new Array(3).fill({}).map((o,a)=>ft({index:a+1},this.context));this.lodopSrv.print(`${this.code}
    LODOP.ADD_PRINT_TEXT(10,10,100,100,"\u7B2C{{index}}\u5F20");
    `,n);let t=this.lodopSrv.events.subscribe(o=>{console.log("finish",o),o.item.index===n.length-1&&(this.msg.success("\u5168\u90E8\u6253\u5370\u5B8C\u6210"),this.doing=!1,t.unsubscribe())})}static \u0275fac=function(t){return new(t||i)(tt(To),tt(yt))};static \u0275cmp=u({type:i,selectors:[["components-lodop-design"]],decls:3,vars:2,consts:[["message",""],[3,"nzType","nzMessage"],["href","http://c-lodop.com/download.html","target","_blank"],["nz-form",""],["nz-row",""],["nz-col","",3,"nzSm"],["nz-input","","name","\u6807\u9898",3,"ngModelChange","ngModel"],["nz-input","","name","\u8D39\u7528",3,"ngModelChange","ngModel"],["name","code","nz-input","",3,"ngModelChange","ngModel","nzAutosize"],["nz-col","",3,"nzSm","nzOffset"],["nz-button","",3,"click","nzLoading"],["nz-button","",3,"click"]],template:function(t,o){t&1&&(e(0,`
    `),f(1,Xs,7,2)(2,Ks,55,15)),t&2&&(l(),w(o.error?1:-1),l(),w(o.lodop&&!o.error?2:-1))},dependencies:[Dt,R,P,kt,eo,$n,oo,Zn,Qn,se,st,wt,ht,rt,Tt,pt,Ut,lt,at,Un,E,k,M,N],encapsulation:2})};var ji=class i{item={cols:1,urls:{"en-US":"packages/abc/lodop/index.en-US.md","zh-CN":"packages/abc/lodop/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>The basic implementation of <a target="_blank" href="http://c-lodop.com/" data-url="http://c-lodop.com/">Lodop</a> printing, commercial needs to buy lodop license. (Also thanks lodop for free ng-alain for genuine KEY)</p><blockquote><p>Prerequisites for running the example must be installed <a target="_blank" href="http://c-lodop.com/download.html" data-url="http://c-lodop.com/download.html">Lodop</a>.</p></blockquote></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="LodopService"><a class="lake-link"><i data-anchor="LodopService"></i></a>LodopService</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>cog</code></td><td>Get or set config</td><td><code><a data-toc="AlainLodopConfig">AlainLodopConfig</a></code></td><td>-</td></tr><tr><td><code>events</code></td><td>process notification</td><td><code>Observable<<a data-toc="LodopPrintResult">LodopPrintResult</a>></code></td><td>-</td></tr><tr><td><code>lodop</code></td><td>Get the Lodop instance</td><td><code>Observable<<a data-toc="LodopResult">LodopResult</a>></code></td><td>-</td></tr></tbody></table><p><strong>Auxiliary API after Lodop is successfully loaded</strong></p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>printer</code></td><td>Get a list of printers</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>attachCode()</code></td><td>Attach code to the <code>lodop</code> object</td><td><code>void</code></td><td>-</td></tr><tr><td><code>design()</code></td><td>Run the print design manually after closing the return code</td><td><code>Promise&lt;string></code></td><td>-</td></tr><tr><td><code>print()</code></td><td>Print now, generally used for batch printing</td><td><code>void</code></td><td>-</td></tr></tbody></table><h3 id="LodopPrintResult"><a class="lake-link"><i data-anchor="LodopPrintResult"></i></a>LodopPrintResult</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>ok</code></td><td>Whether print is successful</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>error</code></td><td>Error message</td><td><code>string</code></td><td>-</td></tr><tr><td><code>code</code></td><td>Code of lodop</td><td><code>string</code></td><td>-</td></tr><tr><td><code>item</code></td><td>Dynamic parameter context object</td><td><code>any</code></td><td>-</td></tr><tr><td><code>parser</code></td><td>Code parsing expression</td><td><code>RegExp</code></td><td>-</td></tr></tbody></table><h3 id="LodopResult"><a class="lake-link"><i data-anchor="LodopResult"></i></a>LodopResult</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>ok</code></td><td>Whether print is successful</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>status</code></td><td>Status of result</td><td><code>string</code></td><td>-</td></tr><tr><td><code>lodop</code></td><td>Lodop instance</td><td><code>Lodop</code></td><td>-</td></tr><tr><td><code>error</code></td><td>Error message</td><td><code>any</code></td><td>-</td></tr></tbody></table><h3 id="AlainLodopConfig"><a class="lake-link"><i data-anchor="AlainLodopConfig"></i></a>AlainLodopConfig</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>companyName</code></td><td>Company name</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>license</code></td><td>License</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>licenseA</code></td><td>LicenseA</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>licenseB</code></td><td>LicenseB</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>url</code></td><td>Lodop remote script URL address</td><td><code>string</code></td><td><code>//localhost:8443/Lodopfuncs.js</code></td><td>\u2705</td></tr><tr><td><code>name</code></td><td>Lodop variable name</td><td><code>string</code></td><td><code>LODOP</code></td><td>\u2705</td></tr><tr><td><code>checkMaxCount</code></td><td>Exceeded the number of inspections as a failure, Because of Lodop needs to connect to WebSocket</td><td><code>number</code></td><td><code>100</code></td><td>\u2705</td></tr></tbody></table>',meta:{type:"Basic",order:4,title:"lodop",subtitle:"Lodop Print",cols:1,module:"import { LodopModule } from '@delon/abc/lodop';"},toc:[{id:"API",title:"API",h:2,children:[{id:"LodopService",title:"LodopService",h:3},{id:"LodopPrintResult",title:"LodopPrintResult",h:3},{id:"LodopResult",title:"LodopResult",h:3},{id:"AlainLodopConfig",title:"AlainLodopConfig",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p><a target="_blank" href="http://c-lodop.com/" data-url="http://c-lodop.com/">Lodop</a> \u6253\u5370\u7684\u57FA\u7840\u5B9E\u73B0\uFF0C\u5546\u7528\u9700\u8981\u8D2D\u4E70KEY\u3002\uFF08\u540C\u65F6\u611F\u8C22 lodop \u4E3A ng-alain \u514D\u8D39\u63D0\u4F9B\u6B63\u7248KEY\uFF09</p><blockquote><p>\u8FD0\u884C\u793A\u4F8B\u7684<strong>\u524D\u63D0\u6761\u4EF6</strong>\u5FC5\u987B\u5B89\u88C5<a target="_blank" href="http://c-lodop.com/download.html" data-url="http://c-lodop.com/download.html">Lodop</a>\u3002</p></blockquote></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="LodopService"><a class="lake-link"><i data-anchor="LodopService"></i></a>LodopService</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>cog</code></td><td>\u83B7\u53D6\u6216\u8BBE\u7F6E\u914D\u7F6E\u9879</td><td><code><a data-toc="AlainLodopConfig">AlainLodopConfig</a></code></td><td>-</td></tr><tr><td><code>events</code></td><td>\u6253\u5370\u8FC7\u7A0B\u901A\u77E5</td><td><code>Observable<<a data-toc="LodopPrintResult">LodopPrintResult</a>></code></td><td>-</td></tr><tr><td><code>lodop</code></td><td>\u83B7\u53D6 Lodop \u5BF9\u8C61</td><td><code>Observable<<a data-toc="LodopResult">LodopResult</a>></code></td><td>-</td></tr></tbody></table><p><strong>Lodop\u52A0\u8F7D\u6210\u529F\u540E\u8F85\u52A9API</strong></p><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>printer</code></td><td>\u83B7\u53D6\u6253\u5370\u673A\u5217\u8868</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>attachCode()</code></td><td>\u9644\u52A0\u4EE3\u7801\u81F3 <code>lodop</code> \u5BF9\u8C61\u4E0A</td><td><code>void</code></td><td>-</td></tr><tr><td><code>design()</code></td><td>\u8FD0\u884C\u6253\u5370\u8BBE\u8BA1\u624B\u52A8\u5173\u95ED\u540E\u8FD4\u56DE\u4EE3\u7801</td><td><code>Promise&lt;string></code></td><td>-</td></tr><tr><td><code>print()</code></td><td>\u7ACB\u5373\u6253\u5370\uFF0C\u4E00\u822C\u7528\u4E8E\u6279\u91CF\u5957\u6253</td><td><code>void</code></td><td>-</td></tr></tbody></table><h3 id="LodopPrintResult"><a class="lake-link"><i data-anchor="LodopPrintResult"></i></a>LodopPrintResult</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>ok</code></td><td>\u662F\u5426\u6253\u5370\u6210\u529F</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>error</code></td><td>\u9519\u8BEF\u4FE1\u606F</td><td><code>string</code></td><td>-</td></tr><tr><td><code>code</code></td><td>\u4EE3\u7801</td><td><code>string</code></td><td>-</td></tr><tr><td><code>item</code></td><td>\u52A8\u6001\u53C2\u6570\u4E0A\u4E0B\u6587\u5BF9\u8C61</td><td><code>any</code></td><td>-</td></tr><tr><td><code>parser</code></td><td>\u4EE3\u7801\u89E3\u6790\u8868\u8FBE\u5F0F</td><td><code>RegExp</code></td><td>-</td></tr></tbody></table><h3 id="LodopResult"><a class="lake-link"><i data-anchor="LodopResult"></i></a>LodopResult</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>ok</code></td><td>\u8868\u793A\u662F\u5426\u52A0\u8F7D\u6210\u529F</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>status</code></td><td>\u72B6\u6001\u7801</td><td><code>string</code></td><td>-</td></tr><tr><td><code>lodop</code></td><td>Lodop \u5BF9\u8C61</td><td><code>Lodop</code></td><td>-</td></tr><tr><td><code>error</code></td><td>\u9519\u8BEF\u660E\u7EC6</td><td><code>any</code></td><td>-</td></tr></tbody></table><h3 id="AlainLodopConfig"><a class="lake-link"><i data-anchor="AlainLodopConfig"></i></a>AlainLodopConfig</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>companyName</code></td><td>\u6CE8\u518C\u5355\u4F4D\u540D\u79F0</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>license</code></td><td>\u4E3B\u6CE8\u518C\u53F7</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>licenseA</code></td><td>\u9644\u52A0\u6CE8\u518C\u53F7A</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>licenseB</code></td><td>\u9644\u52A0\u6CE8\u518C\u53F7B</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>url</code></td><td>Lodop \u8FDC\u7A0B\u811A\u672CURL\u5730\u5740\uFF0C<strong>\u6CE8\u610F</strong>\u52A1\u5FC5\u4F7F\u7528 <code>name</code> \u5C5E\u6027\u6307\u5B9A\u53D8\u91CF\u503C</td><td><code>string</code></td><td><code>//localhost:8443/Lodopfuncs.js</code></td><td>\u2705</td></tr><tr><td><code>name</code></td><td>Lodop \u53D8\u91CF\u540D</td><td><code>string</code></td><td><code>LODOP</code></td><td>\u2705</td></tr><tr><td><code>checkMaxCount</code></td><td>\u68C0\u67E5\u6B21\u6570\uFF0C\u9ED8\u8BA4 <code>100</code>\uFF0C\u5F53\u68C0\u67E5\u8D85\u8FC7\u65F6\u89C6\u4E3A\u5F02\u5E38\uFF0C\u8FD9\u662F\u56E0\u4E3A Lodop \u9700\u8981\u8FDE\u63A5 WebSocket</td><td><code>number</code></td><td><code>100</code></td><td>\u2705</td></tr></tbody></table>',meta:{type:"Basic",order:4,title:"lodop",subtitle:"Lodop\u6253\u5370",cols:1,module:"import { LodopModule } from '@delon/abc/lodop';"},toc:[{id:"API",title:"API",h:2,children:[{id:"LodopService",title:"LodopService",h:3},{id:"LodopPrintResult",title:"LodopPrintResult",h:3},{id:"LodopResult",title:"LodopResult",h:3},{id:"AlainLodopConfig",title:"AlainLodopConfig",h:3}]}]}},demo:!0};codes=[{id:"components-lodop-print",meta:{order:1,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:{"zh-CN":"<p>\u83B7\u53D6\u6253\u5370\u670D\u52A1\u5668\uFF08\u5305\u62EC\uFF1A\u8FDC\u7A0B\uFF09\u4FE1\u606F\u3002</p>","en-US":"<p>Get print server information (including: remote).</p>"},code:`import { Component } from '@angular/core';
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
}`,lang:"ts",componentName:"ComponentsLodopDesignComponent",point:1,name:"design",urls:"packages/abc/lodop/demo/design.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-lodop"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-lodop-print"),e(7,`
        `),r(),e(8,`
      
        `),d(9,"code-box",3),e(10,`
          `),p(11,"components-lodop-design"),e(12,`
        `),r(),e(13,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id),l(5),c("item",o.codes[1]),_("id",o.codes[1].id))},dependencies:[O,Bi,Oi,R,P,j],encapsulation:2})};var Hi=class i{cogSrv=y(It);lazySrv=y($e);_cog;loading=!1;loaded=!1;notify$=new Zt;get cog(){return this._cog}set cog(n){this._cog=this.cogSrv.merge("media",{urls:["https://cdn.jsdelivr.net/npm/plyr/dist/plyr.min.js","https://cdn.jsdelivr.net/npm/plyr/dist/plyr.css"]},n)}load(){return this.loading?(this.loaded&&this.notify$.next(),this):(this.loading=!0,this.lazySrv.load(this.cog.urls).then(()=>{this.loaded=!0,this.notify$.next()}),this)}notify(){return this.notify$.asObservable().pipe(qr())}static \u0275fac=function(t){return new(t||i)};static \u0275prov=de({token:i,factory:i.\u0275fac,providedIn:"root"})};var Js=["*"],hn=class hn{destroy$=y(Bt);el=y(Ct).nativeElement;renderer=y(Yt);ngZone=y(Xt);srv=y(Hi);platform=y(ye);_p;videoEl;type="video";source;options;delay=0;ready=new At;get player(){return this._p}initDelay(){Ae(this.delay).pipe(zt(this.destroy$)).subscribe(()=>this.ngZone.runOutsideAngular(()=>this.init()))}init(){let n=window.Plyr;if(!n)throw new Error(`No window.Plyr found, please make sure that cdn or local path exists, the current referenced path is: ${JSON.stringify(this.srv.cog.urls)}`);this.ensureElement();let t=this._p=new n(this.videoEl,ft({},this.srv.cog.options));t.on("ready",()=>this.ngZone.run(()=>this.ready.next(t))),this.uploadSource()}ensureElement(){let{type:n}=this,t=this.el.querySelector(n);t||(t=this.renderer.createElement(n),t.controls=!0,this.el.appendChild(t)),this.videoEl=t}destroy(){this._p&&this._p.destroy()}uploadSource(){if(this._p==null)return;let{source:n,type:t}=this;this._p.source=typeof n=="string"?{type:t,sources:[{src:n}]}:n}ngAfterViewInit(){this.platform.isBrowser&&(this.srv.notify().pipe(zt(this.destroy$),We(1)).subscribe(()=>this.initDelay()),this.srv.load())}ngOnChanges(n){this.srv.cog={options:this.options},n.source&&this.uploadSource()}ngOnDestroy(){this.destroy(),this._p=null}static \u0275fac=function(t){return new(t||hn)};static \u0275cmp=u({type:hn,selectors:[["media"],["","media",""]],hostVars:2,hostBindings:function(t,o){t&2&&Et("display","block")},inputs:{type:"type",source:"source",options:"options",delay:[2,"delay","delay",dt]},outputs:{ready:"ready"},exportAs:["mediaComponent"],features:[gt,Rt],ngContentSelectors:Js,decls:1,vars:0,template:function(t,o){t&1&&(Z(),H(0))},encapsulation:2,changeDetection:0})};Re([Le()],hn.prototype,"initDelay",1);var Oe=hn;var Wi=class i{mp4="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-media-mp4"]],decls:16,vars:1,consts:[["media",""],[1,"mb-sm"],["nz-button","",3,"click"],["media","",3,"source"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"div",1),e(2,`
      `),d(3,"button",2),b("click",function(){g(a);let m=v(14);return C(m.player==null?null:m.player.play())}),e(4,"Play"),r(),e(5,`
      `),d(6,"button",2),b("click",function(){g(a);let m=v(14);return C(m.player==null?null:m.player.pause())}),e(7,"Pause"),r(),e(8,`
      `),d(9,"button",2),b("click",function(){g(a);let m=v(14);return C(m.player==null?null:m.player.restart())}),e(10,"Restart"),r(),e(11,`
    `),r(),e(12,`
    `),p(13,"div",3,0),e(15,`
  `)}t&2&&(l(13),c("source",o.mp4))},dependencies:[E,k,M,N,Oe],encapsulation:2})};var Ui=class i{mp3="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-media-mp3"]],decls:16,vars:1,consts:[["media",""],[1,"mb-sm"],["nz-button","",3,"click"],["media","","type","audio",3,"source"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"div",1),e(2,`
      `),d(3,"button",2),b("click",function(){g(a);let m=v(14);return C(m.player==null?null:m.player.play())}),e(4,"Play"),r(),e(5,`
      `),d(6,"button",2),b("click",function(){g(a);let m=v(14);return C(m.player==null?null:m.player.pause())}),e(7,"Pause"),r(),e(8,`
      `),d(9,"button",2),b("click",function(){g(a);let m=v(14);return C(m.player==null?null:m.player.restart())}),e(10,"Restart"),r(),e(11,`
    `),r(),e(12,`
    `),p(13,"div",3,0),e(15,`
  `)}t&2&&(l(13),c("source",o.mp3))},dependencies:[E,k,M,N,Oe],encapsulation:2})};var qi=class i{source={type:"video",sources:[{src:""}],tracks:[]};options={debug:!0,i18n:{play:"\u64AD\u653E",pause:"\u6682\u505C",speed:"\u901F\u5EA6",normal:"\u6B63\u5E38"}};constructor(){this.play("video")}play(n){this.source.type=n,n==="video"?this.source.sources[0].src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4":this.source.sources[0].src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",this.source=ft({},this.source)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-media-custom"]],decls:13,vars:2,consts:[["media",""],[1,"mb-sm"],["nz-button","",3,"click"],["media","",3,"source","options"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"div",1),e(2,`
      `),d(3,"button",2),b("click",function(){return g(a),C(o.play("video"))}),e(4,"Change Play Video"),r(),e(5,`
      `),d(6,"button",2),b("click",function(){return g(a),C(o.play("audio"))}),e(7,"Change Play Audio"),r(),e(8,`
    `),r(),e(9,`
    `),p(10,"div",3,0),e(12,`
  `)}t&2&&(l(10),c("source",o.source)("options",o.options))},dependencies:[E,k,M,N,Oe],encapsulation:2})};var Gi=class i{item={cols:2,urls:{"en-US":"packages/abc/media/index.en-US.md","zh-CN":"packages/abc/media/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>HTML5 player based on <a target="_blank" href="https://github.com/sampotts/plyr" data-url="https://github.com/sampotts/plyr">plyr</a>.</p><h2 id="Dependencies"><a class="lake-link"><i data-anchor="Dependencies"></i></a>Dependencies</h2><p>The plyr script file takes the form of lazy loading\uFF0Cyou can change the default CDN path via <a href="/docs/global-config" data-url="/docs/global-config">Global Configuration</a>. By default: <code>https://cdn.jsdelivr.net/npm/plyr/dist/plyr.min.js</code>, <code>https://cdn.jsdelivr.net/npm/plyr/dist/plyr.css</code>.</p><p><strong>Use local path</strong></p><pre class="hljs language-json"><code>// angular.json
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
};</code></pre></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="media"><a class="lake-link"><i data-anchor="media"></i></a>media<label class="api-type-label directive">directive</label></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>Media type</td><td><code>audio, video</code></td><td><code>video</code></td><td>-</td></tr><tr><td><code>[source]</code></td><td>Source of the media</td><td><code>string, PlyrMediaSource</code></td><td>-</td><td>-</td></tr><tr><td><code>[options]</code></td><td>Source options of the media, please refer to <a target="_blank" href="https://github.com/sampotts/plyr#options" data-url="https://github.com/sampotts/plyr#options">plyr options</a></td><td><code>any</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[delay]</code></td><td>Delay init plyr player, unit: ms</td><td><code>number</code></td><td>-</td><td>-</td></tr><tr><td><code>(ready)</code></td><td>Ready callback</td><td><code>EventEmitter&lt;Plyr></code></td><td>-</td><td>-</td></tr></tbody></table><h2 id="FAQ"><a class="lake-link"><i data-anchor="FAQ"></i></a>FAQ</h2><h3 id="HowtousePlyrtypesmorefriendly"><a class="lake-link"><i data-anchor="HowtousePlyrtypesmorefriendly"></i></a>HowtousePlyrtypesmorefriendly</h3><pre class="hljs language-ts"><code>import type Plyr from 'plyr';</code></pre>`,meta:{type:"Basic",order:1,title:"media",subtitle:"HTML5 Media",cols:2,module:"import { MediaModule } from '@delon/abc/media';"},toc:[{id:"Dependencies",title:"Dependencies",h:2},{id:"API",title:"API",h:2,children:[{id:"media",title:"media",h:3}]},{id:"FAQ",title:"FAQ",h:2,children:[{id:"HowtousePlyrtypesmorefriendly",title:"How to use Plyr types more friendly",h:3}]}]},"zh-CN":{content:`<section class="markdown"><p>\u57FA\u4E8E <a target="_blank" href="https://github.com/sampotts/plyr" data-url="https://github.com/sampotts/plyr">plyr</a> HTML5\u64AD\u653E\u5668\u3002</p><h2 id="\u4F9D\u8D56"><a class="lake-link"><i data-anchor="\u4F9D\u8D56"></i></a>\u4F9D\u8D56</h2><p>\u7531\u4E8E plyr \u811A\u672C\u5927\u5C0F\u4EE5\u53CA\u5BF9\u89C6\u9891\u64AD\u653E\u5E76\u4E0D\u662F\u521A\u9700\u7684\u539F\u56E0\uFF0C\u56E0\u6B64\u91C7\u7528\u4E00\u79CD\u5EF6\u8FDF\u52A0\u8F7D\u811A\u672C\u7684\u5F62\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u914D\u7F6E\u6765\u6539\u53D8\u9ED8\u8BA4 CDN \u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F7F\u7528 <code>https://cdn.jsdelivr.net/npm/plyr/dist/plyr.min.js</code>\u3001<code>https://cdn.jsdelivr.net/npm/plyr/dist/plyr.css</code>\u3002</p><p><strong>\u4F7F\u7528\u672C\u5730\u8DEF\u5F84</strong></p><pre class="hljs language-json"><code>// angular.json
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
};</code></pre></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="media"><a class="lake-link"><i data-anchor="media"></i></a>media<label class="api-type-label directive">directive</label></h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>\u5A92\u4F53\u7C7B\u578B</td><td><code>audio, video</code></td><td><code>video</code></td><td>-</td></tr><tr><td><code>[source]</code></td><td>\u5A92\u4F53\u6570\u636E\u6E90</td><td><code>string, PlyrMediaSource</code></td><td>-</td><td>-</td></tr><tr><td><code>[options]</code></td><td>\u64AD\u653E\u5668\u53C2\u6570 <a target="_blank" href="https://github.com/sampotts/plyr#options" data-url="https://github.com/sampotts/plyr#options">plyr options</a></td><td><code>any</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u521D\u59CB\u5316\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td>-</td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u51C6\u5907\u5C31\u7EEA\u56DE\u8C03</td><td><code>EventEmitter&lt;Plyr></code></td><td>-</td><td>-</td></tr></tbody></table><h2 id="FAQ"><a class="lake-link"><i data-anchor="FAQ"></i></a>FAQ</h2><h3 id="\u5982\u4F55\u66F4\u53CB\u597D\u7684\u4F7F\u7528Plyr\u7C7B\u578B"><a class="lake-link"><i data-anchor="\u5982\u4F55\u66F4\u53CB\u597D\u7684\u4F7F\u7528Plyr\u7C7B\u578B"></i></a>\u5982\u4F55\u66F4\u53CB\u597D\u7684\u4F7F\u7528Plyr\u7C7B\u578B</h3><pre class="hljs language-ts"><code>import type Plyr from 'plyr';</code></pre>`,meta:{type:"Basic",order:1,title:"media",subtitle:"HTML5\u5A92\u4F53",cols:2,module:"import { MediaModule } from '@delon/abc/media';"},toc:[{id:"\u4F9D\u8D56",title:"\u4F9D\u8D56",h:2},{id:"API",title:"API",h:2,children:[{id:"media",title:"media",h:3}]},{id:"FAQ",title:"FAQ",h:2,children:[{id:"\u5982\u4F55\u66F4\u53CB\u597D\u7684\u4F7F\u7528Plyr\u7C7B\u578B",title:"\u5982\u4F55\u66F4\u53CB\u597D\u7684\u4F7F\u7528 Plyr \u7C7B\u578B",h:3}]}]}},demo:!0};codes=[{id:"components-media-mp4",meta:{order:1,title:{"zh-CN":"MP4\u57FA\u7840\u6837\u4F8B","en-US":"MP4 Basic Usage"}},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';

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
}`,lang:"ts",componentName:"ComponentsMediaCustomComponent",point:2,name:"custom",urls:"packages/abc/media/demo/custom.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-media"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:21,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-media-mp4"),e(7,`
        `),r(),e(8,`
      
        `),d(9,"code-box",3),e(10,`
          `),p(11,"components-media-custom"),e(12,`
        `),r(),e(13,`
      `),r(),d(14,"div",2),e(15,`
        `),d(16,"code-box",3),e(17,`
          `),p(18,"components-media-mp3"),e(19,`
        `),r(),e(20,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id),l(5),c("item",o.codes[2]),_("id",o.codes[2].id),l(7),c("item",o.codes[1]),_("id",o.codes[1].id))},dependencies:[O,Wi,Ui,qi,R,P,j],encapsulation:2})};var po=["*"];function np(i,n){if(i&1&&p(0,"nz-avatar",1),i&2){let t=h();c("nzSrc",t.nzSrc)}}function ip(i,n){i&1&&H(0)}var dp=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],rp=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function ap(i,n){if(i&1&&p(0,"nz-list-item-meta-avatar",0),i&2){let t=h();c("nzSrc",t.avatarStr)}}function lp(i,n){if(i&1&&(d(0,"nz-list-item-meta-avatar"),he(1,2),r()),i&2){let t=h();l(),c("ngTemplateOutlet",t.avatarTpl)}}function cp(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(3);l(),B(t.nzTitle)}}function sp(i,n){if(i&1&&(d(0,"nz-list-item-meta-title"),f(1,cp,2,1,"ng-container",3),r()),i&2){let t=h(2);l(),c("nzStringTemplateOutlet",t.nzTitle)}}function pp(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(3);l(),B(t.nzDescription)}}function mp(i,n){if(i&1&&(d(0,"nz-list-item-meta-description"),f(1,pp,2,1,"ng-container",3),r()),i&2){let t=h(2);l(),c("nzStringTemplateOutlet",t.nzDescription)}}function up(i,n){if(i&1&&(d(0,"div",1),f(1,sp,2,1,"nz-list-item-meta-title")(2,mp,2,1,"nz-list-item-meta-description"),H(3,1),H(4,2),r()),i&2){let t=h();l(),w(t.nzTitle&&!t.titleComponent?1:-1),l(),w(t.nzDescription&&!t.descriptionComponent?2:-1)}}function hp(i,n){i&1&&H(0)}var fp=["nz-list-item-actions",""];function gp(i,n){}function Cp(i,n){i&1&&p(0,"em",1)}function bp(i,n){if(i&1&&(d(0,"li"),f(1,gp,0,0,"ng-template",0)(2,Cp,1,0,"em",1),r()),i&2){let t=n.$implicit,o=n.$index,a=n.$count;l(),c("ngTemplateOutlet",t),l(),w(o!==a-1?2:-1)}}var yp=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],xp=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"],Rl=(i,n)=>({$implicit:i,index:n});function vp(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(2);l(),B(t.nzHeader)}}function Sp(i,n){if(i&1&&(d(0,"nz-list-header"),f(1,vp,2,1,"ng-container",6),r()),i&2){let t=h();l(),c("nzStringTemplateOutlet",t.nzHeader)}}function zp(i,n){i&1&&p(0,"div"),i&2&&Et("min-height",53,"px")}function _p(i,n){}function Tp(i,n){if(i&1&&(d(0,"div",7),f(1,_p,0,0,"ng-template",8),r()),i&2){let t=n.$implicit,o=n.$index,a=h(2);c("nzSpan",a.nzGrid.span||null)("nzXs",a.nzGrid.xs||null)("nzSm",a.nzGrid.sm||null)("nzMd",a.nzGrid.md||null)("nzLg",a.nzGrid.lg||null)("nzXl",a.nzGrid.xl||null)("nzXXl",a.nzGrid.xxl||null),l(),c("ngTemplateOutlet",a.nzRenderItem)("ngTemplateOutletContext",yo(9,Rl,t,o))}}function wp(i,n){if(i&1&&(d(0,"div",2),xt(1,Tp,2,12,"div",7,Mn),r()),i&2){let t=h();c("nzGutter",t.nzGrid.gutter||null),l(),vt(t.nzDataSource)}}function kp(i,n){}function Dp(i,n){if(i&1&&(nt(0),f(1,kp,0,0,"ng-template",8),it()),i&2){let t=n.$implicit,o=n.$index,a=h(2);l(),c("ngTemplateOutlet",a.nzRenderItem)("ngTemplateOutletContext",yo(2,Rl,t,o))}}function Mp(i,n){if(i&1&&(d(0,"div",3),xt(1,Dp,2,5,"ng-container",null,Mn),H(3,4),r()),i&2){let t=h();l(),vt(t.nzDataSource)}}function Np(i,n){if(i&1&&p(0,"nz-list-empty",4),i&2){let t=h();c("nzNoResult",t.nzNoResult)}}function Ep(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(2);l(),B(t.nzFooter)}}function Ip(i,n){if(i&1&&(d(0,"nz-list-footer"),f(1,Ep,2,1,"ng-container",6),r()),i&2){let t=h();l(),c("nzStringTemplateOutlet",t.nzFooter)}}function Pp(i,n){}function Rp(i,n){}function Ap(i,n){if(i&1&&(d(0,"nz-list-pagination"),f(1,Rp,0,0,"ng-template",5),r()),i&2){let t=h();l(),c("ngTemplateOutlet",t.nzPagination)}}var Fp=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],Lp=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];function Bp(i,n){if(i&1&&p(0,"ul",3),i&2){let t=h(2);c("nzActions",t.nzActions)}}function Vp(i,n){if(i&1&&(f(0,Bp,1,1,"ul",3),H(1)),i&2){let t=h();w(t.nzActions&&t.nzActions.length>0?0:-1)}}function Op(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(3);l(),B(t.nzContent)}}function jp(i,n){if(i&1&&f(0,Op,2,1,"ng-container",4),i&2){let t=h(2);c("nzStringTemplateOutlet",t.nzContent)}}function Hp(i,n){if(i&1&&(H(0,1),H(1,2),f(2,jp,1,1,"ng-container")),i&2){let t=h();l(2),w(t.nzContent?2:-1)}}function Wp(i,n){i&1&&H(0,3)}function Up(i,n){}function qp(i,n){}function Gp(i,n){}function $p(i,n){if(i&1&&(d(0,"nz-list-item-extra"),f(1,Gp,0,0,"ng-template",6),r()),i&2){let t=h(2);l(),c("ngTemplateOutlet",t.nzExtra)}}function Qp(i,n){}function Zp(i,n){if(i&1&&(d(0,"div",5),f(1,Up,0,0,"ng-template",6)(2,qp,0,0,"ng-template",6),r(),f(3,$p,2,1,"nz-list-item-extra")(4,Qp,0,0,"ng-template",6)),i&2){let t=h(),o=v(1),a=v(3),s=v(5);l(),c("ngTemplateOutlet",a),l(),c("ngTemplateOutlet",o),l(),w(t.nzExtra?3:-1),l(),c("ngTemplateOutlet",s)}}function Xp(i,n){}function Kp(i,n){}function Jp(i,n){}function Yp(i,n){}function tm(i,n){if(i&1&&f(0,Xp,0,0,"ng-template",6)(1,Kp,0,0,"ng-template",6)(2,Jp,0,0,"ng-template",6)(3,Yp,0,0,"ng-template",6),i&2){let t=h(),o=v(1),a=v(3),s=v(5);c("ngTemplateOutlet",a),l(),c("ngTemplateOutlet",t.nzExtra),l(),c("ngTemplateOutlet",s),l(),c("ngTemplateOutlet",o)}}var Ml=(()=>{class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=u({type:i,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],ngContentSelectors:po,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(o,a){o&1&&(Z(),d(0,"h4",0),H(1),r())},encapsulation:2,changeDetection:0})}}return i})(),Nl=(()=>{class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=u({type:i,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],ngContentSelectors:po,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(o,a){o&1&&(Z(),d(0,"div",0),H(1),r())},encapsulation:2,changeDetection:0})}}return i})(),Al=(()=>{class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=u({type:i,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],ngContentSelectors:po,decls:3,vars:1,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc"]],template:function(o,a){o&1&&(Z(),d(0,"div",0),f(1,np,1,1,"nz-avatar",1)(2,ip,1,0),r()),o&2&&(l(),w(a.nzSrc?1:2))},dependencies:[Kn,Xn],encapsulation:2,changeDetection:0})}}return i})(),kr=(()=>{class i{set nzAvatar(t){t instanceof qe?(this.avatarStr="",this.avatarTpl=t):this.avatarStr=t}constructor(t){this.elementRef=t,this.avatarStr=""}static{this.\u0275fac=function(o){return new(o||i)(tt(Ct))}}static{this.\u0275cmp=u({type:i,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(o,a,s){if(o&1&&(Kt(s,Nl,5),Kt(s,Ml,5)),o&2){let m;W(m=U())&&(a.descriptionComponent=m.first),W(m=U())&&(a.titleComponent=m.first)}},hostAttrs:[1,"ant-list-item-meta"],inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],ngContentSelectors:rp,decls:4,vars:3,consts:[[3,"nzSrc"],[1,"ant-list-item-meta-content"],[3,"ngTemplateOutlet"],[4,"nzStringTemplateOutlet"]],template:function(o,a){o&1&&(Z(dp),f(0,ap,1,1,"nz-list-item-meta-avatar",0)(1,lp,2,1,"nz-list-item-meta-avatar"),H(2),f(3,up,5,2,"div",1)),o&2&&(w(a.avatarStr?0:-1),l(),w(a.avatarTpl?1:-1),l(2),w(a.nzTitle||a.nzDescription||a.descriptionComponent||a.titleComponent?3:-1))},dependencies:[Al,Jt,Ml,xe,Pt,Nl],encapsulation:2,changeDetection:0})}}return i})(),El=(()=>{class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=u({type:i,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:po,decls:1,vars:0,template:function(o,a){o&1&&(Z(),H(0))},encapsulation:2,changeDetection:0})}}return i})(),em=(()=>{class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=u({type:i,selectors:[["nz-list-item-action"]],viewQuery:function(o,a){if(o&1&&ot(qe,7),o&2){let s;W(s=U())&&(a.templateRef=s.first)}},exportAs:["nzListItemAction"],ngContentSelectors:po,decls:1,vars:0,template:function(o,a){o&1&&(Z(),f(0,hp,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}}return i})(),om=(()=>{class i{constructor(t,o){this.nzActions=[],this.actions=[],this.inputActionChanges$=new Zt,this.contentChildrenChanges$=Or(()=>this.nzListItemActions?ie(null):this.initialized.pipe(Vr(()=>this.nzListItemActions.changes.pipe(_n(this.nzListItemActions))))),this.initialized=new Zt,Sn(this.contentChildrenChanges$,this.inputActionChanges$).pipe(Ue(o)).subscribe(()=>{this.nzActions.length?this.actions=this.nzActions:this.actions=this.nzListItemActions.map(a=>a.templateRef),t.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}ngAfterContentInit(){this.initialized.next(),this.initialized.complete()}static{this.\u0275fac=function(o){return new(o||i)(tt(ct),tt(ke))}}static{this.\u0275cmp=u({type:i,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(o,a,s){if(o&1&&Kt(s,em,4),o&2){let m;W(m=U())&&(a.nzListItemActions=m)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[Fe([ke]),Rt],attrs:fp,decls:2,vars:0,consts:[[3,"ngTemplateOutlet"],[1,"ant-list-item-action-split"]],template:function(o,a){o&1&&xt(0,bp,3,2,"li",null,Mn),o&2&&vt(a.actions)},dependencies:[Jt],encapsulation:2,changeDetection:0})}}return i})(),Fl=(()=>{class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=u({type:i,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(o,a){o&1&&p(0,"nz-embed-empty",0),o&2&&c("nzComponentName","list")("specificContent",a.nzNoResult)},dependencies:[Wn,Va],encapsulation:2,changeDetection:0})}}return i})(),nm=(()=>{class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=u({type:i,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:po,decls:1,vars:0,template:function(o,a){o&1&&(Z(),H(0))},encapsulation:2,changeDetection:0})}}return i})(),Il=(()=>{class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=u({type:i,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:po,decls:1,vars:0,template:function(o,a){o&1&&(Z(),H(0))},encapsulation:2,changeDetection:0})}}return i})(),Pl=(()=>{class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=u({type:i,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:po,decls:1,vars:0,template:function(o,a){o&1&&(Z(),H(0))},encapsulation:2,changeDetection:0})}}return i})(),im=(()=>{class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275dir=ue({type:i,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]})}}return i})();var Zo=(()=>{class i{get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}constructor(t){this.directionality=t,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new vn(this.nzItemLayout),this.destroy$=new Zt}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(Ue(this.destroy$)).subscribe(t=>{this.dir=t})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(t){t.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}static{this.\u0275fac=function(o){return new(o||i)(tt(Wt))}}static{this.\u0275cmp=u({type:i,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(o,a,s){if(o&1&&(Kt(s,Il,5),Kt(s,Pl,5),Kt(s,im,5)),o&2){let m;W(m=U())&&(a.nzListFooterComponent=m.first),W(m=U())&&(a.nzListPaginationComponent=m.first),W(m=U())&&(a.nzListLoadMoreDirective=m.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(o,a){o&2&&T("ant-list-rtl",a.dir==="rtl")("ant-list-vertical",a.nzItemLayout==="vertical")("ant-list-lg",a.nzSize==="large")("ant-list-sm",a.nzSize==="small")("ant-list-split",a.nzSplit)("ant-list-bordered",a.nzBordered)("ant-list-loading",a.nzLoading)("ant-list-something-after-last-item",a.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:[2,"nzBordered","nzBordered",X],nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:[2,"nzLoading","nzLoading",X],nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:[2,"nzSplit","nzSplit",X],nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[gt,Rt],ngContentSelectors:xp,decls:14,vars:8,consts:[[3,"nzSpinning"],[3,"min-height"],["nz-row","",3,"nzGutter"],[1,"ant-list-items"],[3,"nzNoResult"],[3,"ngTemplateOutlet"],[4,"nzStringTemplateOutlet"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,a){o&1&&(Z(yp),f(0,Sp,2,1,"nz-list-header"),H(1),d(2,"nz-spin",0),nt(3),f(4,zp,1,2,"div",1)(5,wp,3,1,"div",2)(6,Mp,4,0,"div",3)(7,Np,1,1,"nz-list-empty",4),it(),r(),f(8,Ip,2,1,"nz-list-footer"),H(9,1),f(10,Pp,0,0,"ng-template",5),H(11,2),f(12,Ap,2,1,"nz-list-pagination"),H(13,3)),o&2&&(w(a.nzHeader?0:-1),l(2),c("nzSpinning",a.nzLoading),l(2),w(a.nzLoading&&a.nzDataSource&&a.nzDataSource.length===0?4:-1),l(),w(a.nzGrid&&a.nzDataSource?5:6),l(2),w(!a.nzLoading&&a.nzDataSource&&a.nzDataSource.length===0?7:-1),l(),w(a.nzFooter?8:-1),l(2),c("ngTemplateOutlet",a.nzLoadMore),l(2),w(a.nzPagination?12:-1))},dependencies:[Jt,nm,xe,Pt,Ha,Bo,se,R,P,Fl,Il,Pl],encapsulation:2,changeDetection:0})}}return i})(),fn=(()=>{class i{get isVerticalAndExtra(){return this.itemLayout==="vertical"&&(!!this.listItemExtraDirective||!!this.nzExtra)}constructor(t,o){this.parentComp=t,this.cdr=o,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(t=>{this.itemLayout=t,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}static{this.\u0275fac=function(o){return new(o||i)(tt(Zo),tt(ct))}}static{this.\u0275cmp=u({type:i,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(o,a,s){if(o&1&&Kt(s,El,5),o&2){let m;W(m=U())&&(a.listItemExtraDirective=m.first)}},hostAttrs:[1,"ant-list-item"],hostVars:2,hostBindings:function(o,a){o&2&&T("ant-list-item-no-flex",a.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:[2,"nzNoFlex","nzNoFlex",X]},exportAs:["nzListItem"],features:[gt],ngContentSelectors:Lp,decls:8,vars:1,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["nz-list-item-actions","",3,"nzActions"],[4,"nzStringTemplateOutlet"],[1,"ant-list-item-main"],[3,"ngTemplateOutlet"]],template:function(o,a){o&1&&(Z(Fp),f(0,Vp,2,1,"ng-template",null,0,I)(2,Hp,3,1,"ng-template",null,1,I)(4,Wp,1,0,"ng-template",null,2,I)(6,Zp,5,4)(7,tm,4,4)),o&2&&(l(6),w(a.isVerticalAndExtra?6:7))},dependencies:[om,xe,Pt,Jt,El],encapsulation:2,changeDetection:0})}}return i})();var Ll=(()=>{class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275mod=$t({type:i})}static{this.\u0275inj=Gt({imports:[Zo,Fl,fn,kr,Al]})}}return i})();var Bl=i=>({$implicit:i});function rm(i,n){}function am(i,n){if(i&1&&f(0,rm,0,0,"ng-template",4),i&2){h();let t=v(5);c("ngTemplateOutlet",t)}}function lm(i,n){if(i&1&&p(0,"img",6),i&2){h(2);let t=Ge(0);_("src",t.emptyImage,$r)}}function cm(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(2),o=Ge(0);l(),ut(" ",o.emptyText||t.locale().emptyText," ")}}function sm(i,n){if(i&1&&(d(0,"div",5),f(1,lm,1,1,"img",6),d(2,"p"),f(3,cm,2,1,"ng-container",7),r()()),i&2){h();let t=Ge(0);l(),w(t.emptyImage?1:-1),l(2),c("nzStringTemplateOutlet",t.emptyText)}}function pm(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(2).$implicit;l(),ut(" ",t.title," ")}}function mm(i,n){if(i&1&&(d(0,"div",13)(1,"nz-tag",14),e(2),r()()),i&2){let t=h(2).$implicit;l(),c("nzColor",t.color),l(),B(t.extra)}}function um(i,n){if(i&1&&f(0,pm,2,1,"ng-container",12)(1,mm,3,2,"div",13),i&2){let t=h().$implicit;c("nzStringTemplateOutlet",t.title)("nzStringTemplateOutletContext",Q(3,Bl,t)),l(),w(t.extra?1:-1)}}function hm(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(3).$implicit;l(),ut(" ",t.description," ")}}function fm(i,n){if(i&1&&(d(0,"div",15),f(1,hm,2,1,"ng-container",12),r()),i&2){let t=h(2).$implicit;l(),c("nzStringTemplateOutlet",t.description)("nzStringTemplateOutletContext",Q(2,Bl,t))}}function gm(i,n){if(i&1&&(d(0,"div",16),e(1),r()),i&2){let t=h(2).$implicit;l(),B(t.datetime)}}function Cm(i,n){if(i&1&&f(0,fm,2,4,"div",15)(1,gm,2,1,"div",16),i&2){let t=h().$implicit;w(t.description?0:-1),l(),w(t.datetime?1:-1)}}function bm(i,n){if(i&1){let t=z();d(0,"nz-list-item",10),b("click",function(){let a=g(t).$implicit,s=h(2);return C(s.onClick(a))}),d(1,"nz-list-item-meta",11),f(2,um,2,5,"ng-template",null,2,I)(4,Cm,2,2,"ng-template",null,3,I),r()()}if(i&2){let t=n.$implicit,o=v(3),a=v(5);T("notice-icon__item-read",t.read),l(),c("nzTitle",o)("nzDescription",a)("nzAvatar",t.avatar)}}function ym(i,n){if(i&1){let t=z();d(0,"nz-list",8),f(1,bm,6,5,"ng-template",null,1,I),r(),d(3,"div",9),b("click",function(){g(t);let a=h();return C(a.onClear())}),e(4),r()}if(i&2){let t=v(2),o=h(),a=Ge(0),s=Ge(1);c("nzDataSource",s)("nzRenderItem",t),l(4),B(a.clearText||o.locale().clearText)}}var Xo=class i{locale=re.required();item=re.required();select=bo();clear=bo();onClick(n){this.select.emit({title:this.item().title,item:n})}onClear(){this.clear.emit(this.item().title)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["notice-icon-tab"]],inputs:{locale:[1,"locale"],item:[1,"item"]},outputs:{select:"select",clear:"clear"},exportAs:["noticeIconTab"],decls:6,vars:3,consts:[["listTpl",""],["item",""],["nzTitle",""],["nzDescription",""],[3,"ngTemplateOutlet"],[1,"notice-icon__notfound"],["alt","not found",1,"notice-icon__notfound-img"],[4,"nzStringTemplateOutlet"],[3,"nzDataSource","nzRenderItem"],[1,"notice-icon__clear",3,"click"],[3,"click"],[3,"nzTitle","nzDescription","nzAvatar"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],[1,"notice-icon__item-extra"],[3,"nzColor"],[1,"notice-icon__item-desc"],[1,"notice-icon__item-time"]],template:function(t,o){if(t&1&&(En(0)(1),f(2,am,1,1,null,4)(3,sm,4,2,"div",5)(4,ym,5,3,"ng-template",null,0,I)),t&2){let a=rn(o.item());l();let s=rn(a.list);l(),w(s&&s.length>0?2:3)}},dependencies:[Jt,Pt,Zo,fn,kr,Fn],encapsulation:2})};var xm=()=>({"box-shadow":"none"});function vm(i,n){if(i&1&&(d(0,"nz-badge",3),p(1,"nz-icon",4),r()),i&2){let t=h();Te(t.btnClass()),c("nzCount",t.count())("nzStyle",et(6,xm)),l(),Te(t.btnIconClass())}}function Sm(i,n){}function zm(i,n){if(i&1&&f(0,Sm,0,0,"ng-template",2),i&2){h();let t=v(1);c("ngTemplateOutlet",t)}}function _m(i,n){}function Tm(i,n){if(i&1){let t=z();d(0,"nz-tab",8)(1,"notice-icon-tab",9),b("select",function(a){g(t);let s=h(3);return C(s.onSelect(a))})("clear",function(a){g(t);let s=h(3);return C(s.onClear(a))}),r()()}if(i&2){let t=n.$implicit,o=h(3);c("nzTitle",t.title),l(),c("locale",o.locale())("item",t)}}function wm(i,n){if(i&1&&(d(0,"nz-tabset",7),xt(1,Tm,2,3,"nz-tab",8,St),r()),i&2){let t=h(2),o=Ge(2);c("nzSelectedIndex",0)("nzCentered",t.centered()),l(),vt(o)}}function km(i,n){if(i&1){let t=z();d(0,"div",5),b("nzVisibleChange",function(a){g(t);let s=h();return C(s.onVisibleChange(a))}),f(1,_m,0,0,"ng-template",2),r(),d(2,"nz-dropdown-menu",null,1)(4,"nz-spin",6),f(5,wm,3,2,"nz-tabset",7),r()()}if(i&2){let t=v(3),o=h(),a=v(1);c("nzVisible",o.popoverVisible())("nzOverlayClassName",o.overlayCls())("nzDropdownMenu",t),l(),c("ngTemplateOutlet",a),l(3),c("nzSpinning",o.loading())("nzDelay",0),l(),w(o.delayShow()?5:-1)}}var mo=class i{i18n=y(Ze);i18n$;locale=kn({});data=re([]);count=re(void 0,{transform:dt});loading=re(!1,{transform:X});popoverVisible=re(!1,{transform:X});btnClass=re();btnIconClass=re();centered=re(!1,{transform:X});select=bo();clear=bo();popoverVisibleChange=bo();overlayCls=kn("");constructor(){oa(()=>{this.overlayCls.set(`header-dropdown notice-icon${this.centered()?"":" notice-icon__tab-left"}`),this.popoverVisible()||this.delayShow.set(!1)})}delayShow=kn(!1);onVisibleChange(n){this.delayShow.set(n),this.popoverVisibleChange.emit(n)}onSelect(n){this.select.emit(n)}onClear(n){this.clear.emit(n)}ngOnInit(){this.i18n$=this.i18n.change.subscribe(()=>{this.locale.set(this.i18n.getData("noticeIcon"))})}ngOnDestroy(){this.i18n$?.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["notice-icon"]],hostVars:2,hostBindings:function(t,o){t&2&&T("notice-icon__btn",!0)},inputs:{data:[1,"data"],count:[1,"count"],loading:[1,"loading"],popoverVisible:[1,"popoverVisible"],btnClass:[1,"btnClass"],btnIconClass:[1,"btnIconClass"],centered:[1,"centered"]},outputs:{select:"select",clear:"clear",popoverVisibleChange:"popoverVisibleChange"},exportAs:["noticeIcon"],decls:5,vars:2,consts:[["badgeTpl",""],["noticeMenu","nzDropdownMenu"],[3,"ngTemplateOutlet"],[3,"nzCount","nzStyle"],["nzType","bell"],["nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzVisibleChange","nzVisible","nzOverlayClassName","nzDropdownMenu"],[3,"nzSpinning","nzDelay"],[3,"nzSelectedIndex","nzCentered"],[3,"nzTitle"],[3,"select","clear","locale","item"]],template:function(t,o){if(t&1&&(f(0,vm,2,7,"ng-template",null,0,I),En(2),f(3,zm,1,1,null,2)(4,km,6,7)),t&2){l(2);let a=rn(o.data());l(),w(a.length<=0?3:4)}},dependencies:[Jt,wa,bt,Eo,Io,Bo,Ro,Po,Xo],encapsulation:2,changeDetection:0})};var $i=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-notice-icon-basic"]],decls:3,vars:0,consts:[["count","5"]],template:function(t,o){t&1&&(e(0," "),p(1,"notice-icon",0),e(2," "))},dependencies:[mo],encapsulation:2})};var Dm=["titleTpl"],Mm=["descTpl"];function Nm(i,n){if(i&1&&e(0),i&2){let t=n.$implicit;ut(" ",t.id," Title By NgTemplate ")}}function Em(i,n){if(i&1){let t=z();e(0,`
        `),d(1,"a",4),b("click",function(){g(t);let a=h();return C(a.showOK())}),e(2),r(),e(3,`
        Descriptioin By NgTemplate
      `)}if(i&2){let t=n.$implicit;l(2),B(t.id)}}var Qi=class i{msg=y(yt);nzI18n=y(xa);titleTpl;descTpl;data=[{title:"\u901A\u77E5",list:[],emptyText:"\u4F60\u5DF2\u67E5\u770B\u6240\u6709\u901A\u77E5",emptyImage:"https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg",clearText:"\u6E05\u7A7A\u901A\u77E5"},{title:"\u6D88\u606F",list:[],emptyText:"\u60A8\u5DF2\u8BFB\u5B8C\u6240\u6709\u6D88\u606F",emptyImage:"https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg",clearText:"\u6E05\u7A7A\u6D88\u606F"},{title:"\u5F85\u529E",list:[],emptyText:"\u4F60\u5DF2\u5B8C\u6210\u6240\u6709\u5F85\u529E",emptyImage:"https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg",clearText:"\u6E05\u7A7A\u5F85\u529E"}];count=5;loading=!1;updateNoticeData(n){let t=this.data.slice();return t.forEach(o=>o.list=[]),n.forEach(o=>{let a=ft({},o);typeof a.datetime=="string"&&(a.datetime=ba(a.datetime,"yyyy-MM-dd",new Date)),a.datetime&&(a.datetime=Ca(a.datetime,{locale:this.nzI18n.getDateLocale()})),a.extra&&a.status&&(a.color={todo:void 0,processing:"blue",urgent:"red",doing:"gold"}[a.status]),t.find(s=>s.title===a.type).list.push(a)}),t}loadData(){this.loading||(this.loading=!0,setTimeout(()=>{let n=new Date;console.log(this.descTpl),this.data=this.updateNoticeData([{id:"000000001",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"\u4F60\u6536\u5230\u4E86 14 \u4EFD\u65B0\u5468\u62A5",datetime:an(n,{days:10}),type:"\u901A\u77E5"},{id:"000000002",avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"\u4F60\u63A8\u8350\u7684 \u66F2\u59AE\u59AE \u5DF2\u901A\u8FC7\u7B2C\u4E09\u8F6E\u9762\u8BD5",datetime:an(n,{days:-3}),type:"\u901A\u77E5"},{id:"000000003",avatar:"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",title:"\u8FD9\u79CD\u6A21\u677F\u53EF\u4EE5\u533A\u5206\u591A\u79CD\u901A\u77E5\u7C7B\u578B",datetime:an(n,{months:-3}),read:!0,type:"\u901A\u77E5"},{id:"000000004",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",datetime:an(n,{years:-1}),type:"\u901A\u77E5"},{id:"000000005",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"\u5185\u5BB9\u4E0D\u8981\u8D85\u8FC7\u4E24\u884C\u5B57\uFF0C\u8D85\u51FA\u65F6\u81EA\u52A8\u622A\u65AD",datetime:"2017-08-07",type:"\u901A\u77E5"},{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u66F2\u4E3D\u4E3D \u8BC4\u8BBA\u4E86\u4F60",description:"\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F",datetime:"2017-08-07",type:"\u6D88\u606F"},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u6731\u504F\u53F3 \u56DE\u590D\u4E86\u4F60",description:"\u8FD9\u79CD\u6A21\u677F\u7528\u4E8E\u63D0\u9192\u8C01\u4E0E\u4F60\u53D1\u751F\u4E86\u4E92\u52A8\uFF0C\u5DE6\u4FA7\u653E\u300E\u8C01\u300F\u7684\u5934\u50CF",datetime:"2017-08-07",type:"\u6D88\u606F"},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:this.titleTpl,description:this.descTpl,datetime:"2017-08-07",type:"\u6D88\u606F"},{id:"000000009",title:"\u4EFB\u52A1\u540D\u79F0",description:"\u4EFB\u52A1\u9700\u8981\u5728 2017-01-12 20:00 \u524D\u542F\u52A8",extra:"\u672A\u5F00\u59CB",status:"todo",type:"\u5F85\u529E"},{id:"000000010",title:"\u7B2C\u4E09\u65B9\u7D27\u6025\u4EE3\u7801\u53D8\u66F4",description:"\u51A0\u9716\u63D0\u4EA4\u4E8E 2017-01-06\uFF0C\u9700\u5728 2017-01-07 \u524D\u5B8C\u6210\u4EE3\u7801\u53D8\u66F4\u4EFB\u52A1",extra:"\u9A6C\u4E0A\u5230\u671F",status:"urgent",type:"\u5F85\u529E"},{id:"000000011",title:"\u4FE1\u606F\u5B89\u5168\u8003\u8BD5",description:"\u6307\u6D3E\u7AF9\u5C14\u4E8E 2017-01-09 \u524D\u5B8C\u6210\u66F4\u65B0\u5E76\u53D1\u5E03",extra:"\u5DF2\u8017\u65F6 8 \u5929",status:"doing",type:"\u5F85\u529E"},{id:"000000012",title:"ABCD \u7248\u672C\u53D1\u5E03",description:"\u51A0\u9716\u63D0\u4EA4\u4E8E 2017-01-06\uFF0C\u9700\u5728 2017-01-07 \u524D\u5B8C\u6210\u4EE3\u7801\u53D8\u66F4\u4EFB\u52A1",extra:"\u8FDB\u884C\u4E2D",status:"processing",type:"\u5F85\u529E"}]),this.loading=!1},500))}clear(n){this.msg.success(`\u6E05\u7A7A\u4E86 ${n}`)}select(n){this.msg.success(`\u70B9\u51FB\u4E86 ${n.title} \u7684 ${n.item.title}`)}showOK(){this.msg.info("ok")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-notice-icon-popover"]],viewQuery:function(t,o){if(t&1&&(ot(Dm,5),ot(Mm,5)),t&2){let a;W(a=U())&&(o.titleTpl=a.first),W(a=U())&&(o.descTpl=a.first)}},decls:12,vars:3,consts:[["titleTpl",""],["descTpl",""],[2,"text-align","right","height","64px","line-height","64px","box-shadow","rgba(0, 21, 41, 0.12) 0 1px 4px","padding","0 32px","width","400px"],[3,"select","clear","popoverVisibleChange","data","count","loading"],[3,"click"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"div",2),e(2,`
      `),d(3,"notice-icon",3),b("select",function(m){return g(a),C(o.select(m))})("clear",function(m){return g(a),C(o.clear(m))})("popoverVisibleChange",function(){return g(a),C(o.loadData())}),r(),e(4,`
      `),f(5,Nm,1,1,"ng-template",null,0,I),e(7,`
      `),f(8,Em,4,1,"ng-template",null,1,I),e(10,`
    `),r(),e(11,`
  `)}t&2&&(l(3),c("data",o.data)("count",o.count)("loading",o.loading))},dependencies:[mo],encapsulation:2})};var Zi=class i{item={cols:1,urls:{"en-US":"packages/abc/notice-icon/index.en-US.md","zh-CN":"packages/abc/notice-icon/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Used on the navigation toolbar as a unified notification center for the entire product.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="notice-icon"><a class="lake-link"><i data-anchor="notice-icon"></i></a>notice-icon</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[data]</code></td><td>Data</td><td><code><a data-toc="NoticeItem">NoticeItem</a>[]</code></td><td>-</td></tr><tr><td><code>[count]</code></td><td>Total number of messages on the icon</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[loading]</code></td><td>Pop up card loading status</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[centered]</code></td><td>Whether the tab is centered</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>(select)</code></td><td>Click the callback of the list item</td><td><code>EventEmitter<<a data-toc="NoticeIconSelect">NoticeIconSelect</a>></code></td><td>-</td></tr><tr><td><code>(clear)</code></td><td>Callback for clicking the clear button</td><td><code>EventEmitter&lt;string></code></td><td>-</td></tr><tr><td><code>[popoverVisible]</code></td><td>Manual control of Popover display</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>(popoverVisibleChange)</code></td><td>Popover callback</td><td><code>EventEmitter&lt;boolean></code></td><td>-</td></tr><tr><td><code>[btnClass]</code></td><td>Class of the button</td><td><code>ngClass</code></td><td>-</td></tr><tr><td><code>[btnIconClass]</code></td><td>Class of the icon in button</td><td><code>ngClass</code></td><td>-</td></tr></tbody></table><h3 id="NoticeItem"><a class="lake-link"><i data-anchor="NoticeItem"></i></a>NoticeItem</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>Title of the item</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[list]</code></td><td>List data of the item</td><td><code><a data-toc="NoticeIconList">NoticeIconList</a>[]</code></td><td>-</td></tr><tr><td><code>[emptyText]</code></td><td>Customize empty data copy for each tab</td><td><code>string | TemplateRef&lt;void></code></td><td><code>\u65E0\u901A\u77E5</code></td></tr><tr><td><code>[emptyImage]</code></td><td>Customize the empty data image for each Tab</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[clearText]</code></td><td>Clear button text for each Tab</td><td><code>string</code></td><td><code>\u6E05\u7A7A</code></td></tr></tbody></table><h3 id="NoticeIconList"><a class="lake-link"><i data-anchor="NoticeIconList"></i></a>NoticeIconList</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[avatar]</code></td><td>Avatar image link of the icon</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>Title of the icon</td><td><code>string | TemplateRef<{ $implicit: <a data-toc="NoticeIconList">NoticeIconList</a> }></code></td><td>-</td></tr><tr><td><code>[description]</code></td><td>Description of the icon</td><td><code>string | TemplateRef<{ $implicit: <a data-toc="NoticeIconList">NoticeIconList</a> }></code></td><td>-</td></tr><tr><td><code>[datetime]</code></td><td>Timestamp of the icon</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[extra]</code></td><td>Additional information, in the upper right corner of the icon</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[read]</code></td><td>Whether readed status of the item</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="NoticeIconSelect"><a class="lake-link"><i data-anchor="NoticeIconSelect"></i></a>NoticeIconSelect</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>Title of the select item</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[item]</code></td><td>Data of the select item</td><td><code><a data-toc="NoticeItem">NoticeItem</a></code></td><td>-</td></tr></tbody></table>',meta:{type:"Business",title:"notice-icon",subtitle:"Notification menu",cols:1,module:"import { NoticeIconModule } from '@delon/abc/notice-icon';"},toc:[{id:"API",title:"API",h:2,children:[{id:"notice-icon",title:"notice-icon",h:3},{id:"NoticeItem",title:"NoticeItem",h:3},{id:"NoticeIconList",title:"NoticeIconList",h:3},{id:"NoticeIconSelect",title:"NoticeIconSelect",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u7528\u5728\u5BFC\u822A\u5DE5\u5177\u680F\u4E0A\uFF0C\u4F5C\u4E3A\u6574\u4E2A\u4EA7\u54C1\u7EDF\u4E00\u7684\u901A\u77E5\u4E2D\u5FC3\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="notice-icon"><a class="lake-link"><i data-anchor="notice-icon"></i></a>notice-icon</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code><a data-toc="NoticeItem">NoticeItem</a>[]</code></td><td>-</td></tr><tr><td><code>[count]</code></td><td>\u56FE\u6807\u4E0A\u7684\u6D88\u606F\u603B\u6570</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[loading]</code></td><td>\u5F39\u51FA\u5361\u7247\u52A0\u8F7D\u72B6\u6001</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[centered]</code></td><td>\u6807\u7B7E\u9875\u662F\u5426\u5C45\u4E2D</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>(select)</code></td><td>\u70B9\u51FB\u5217\u8868\u9879\u7684\u56DE\u8C03</td><td><code>EventEmitter<<a data-toc="NoticeIconSelect">NoticeIconSelect</a>></code></td><td>-</td></tr><tr><td><code>(clear)</code></td><td>\u70B9\u51FB\u6E05\u7A7A\u6309\u94AE\u7684\u56DE\u8C03</td><td><code>EventEmitter&lt;string></code></td><td>-</td></tr><tr><td><code>[popoverVisible]</code></td><td>\u624B\u52A8\u63A7\u5236Popover\u663E\u793A</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>(popoverVisibleChange)</code></td><td>Popover\u663E\u9690\u56DE\u8C03</td><td><code>EventEmitter&lt;boolean></code></td><td>-</td></tr><tr><td><code>[btnClass]</code></td><td>\u6309\u94AE\u7C7B</td><td><code>ngClass</code></td><td>-</td></tr><tr><td><code>[btnIconClass]</code></td><td>Icon\u56FE\u6807\u7C7B</td><td><code>ngClass</code></td><td>-</td></tr></tbody></table><h3 id="NoticeItem"><a class="lake-link"><i data-anchor="NoticeItem"></i></a>NoticeItem</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[list]</code></td><td>\u5217\u8868\u6570\u636E\uFF0C\u683C\u5F0F\u53C2\u7167\u4E0B\u8868</td><td><code><a data-toc="NoticeIconList">NoticeIconList</a>[]</code></td><td>-</td></tr><tr><td><code>[emptyText]</code></td><td>\u9488\u5BF9\u6BCF\u4E2A Tab \u5B9A\u5236\u7A7A\u6570\u636E\u6587\u6848</td><td><code>string | TemplateRef&lt;void></code></td><td><code>\u65E0\u901A\u77E5</code></td></tr><tr><td><code>[emptyImage]</code></td><td>\u9488\u5BF9\u6BCF\u4E2A Tab \u5B9A\u5236\u7A7A\u6570\u636E\u56FE\u7247</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[clearText]</code></td><td>\u9488\u5BF9\u6BCF\u4E2A Tab \u6E05\u7A7A\u6309\u94AE\u6587\u672C</td><td><code>string</code></td><td><code>\u6E05\u7A7A</code></td></tr></tbody></table><h3 id="NoticeIconList"><a class="lake-link"><i data-anchor="NoticeIconList"></i></a>NoticeIconList</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[avatar]</code></td><td>\u5934\u50CF\u56FE\u7247\u94FE\u63A5</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>string | TemplateRef<{ $implicit: <a data-toc="NoticeIconList">NoticeIconList</a> }></code></td><td>-</td></tr><tr><td><code>[description]</code></td><td>\u63CF\u8FF0\u4FE1\u606F</td><td><code>string | TemplateRef<{ $implicit: <a data-toc="NoticeIconList">NoticeIconList</a> }></code></td><td>-</td></tr><tr><td><code>[datetime]</code></td><td>\u65F6\u95F4\u6233</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[extra]</code></td><td>\u989D\u5916\u4FE1\u606F\uFF0C\u5728\u5217\u8868\u9879\u53F3\u4E0A\u89D2</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[read]</code></td><td>\u662F\u5426\u5DF2\u8BFB\u72B6\u6001</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="NoticeIconSelect"><a class="lake-link"><i data-anchor="NoticeIconSelect"></i></a>NoticeIconSelect</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[item]</code></td><td>\u6570\u636E\u9879</td><td><code><a data-toc="NoticeItem">NoticeItem</a></code></td><td>-</td></tr></tbody></table>',meta:{type:"Business",title:"notice-icon",subtitle:"\u901A\u77E5\u83DC\u5355",cols:1,module:"import { NoticeIconModule } from '@delon/abc/notice-icon';"},toc:[{id:"API",title:"API",h:2,children:[{id:"notice-icon",title:"notice-icon",h:3},{id:"NoticeItem",title:"NoticeItem",h:3},{id:"NoticeIconList",title:"NoticeIconList",h:3},{id:"NoticeIconSelect",title:"NoticeIconSelect",h:3}]}]}},demo:!0};codes=[{id:"components-notice-icon-basic",meta:{order:1,title:"\u901A\u77E5\u56FE\u6807"},summary:"<p>\u901A\u5E38\u7528\u5728\u5BFC\u822A\u5DE5\u5177\u680F\u4E0A\u3002</p>",code:`import { Component } from '@angular/core';

import { NoticeIconComponent } from '@delon/abc/notice-icon';

@Component({
  selector: 'components-notice-icon-basic',
  template: \` <notice-icon count="5" /> \`,
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
}`,lang:"ts",componentName:"ComponentsNoticeIconPopoverComponent",point:1,name:"popover",urls:"packages/abc/notice-icon/demo/popover.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-notice-icon"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-notice-icon-basic"),e(7,`
        `),r(),e(8,`
      
        `),d(9,"code-box",3),e(10,`
          `),p(11,"components-notice-icon-popover"),e(12,`
        `),r(),e(13,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id),l(5),c("item",o.codes[1]),_("id",o.codes[1].id))},dependencies:[O,$i,Qi,R,P,j],encapsulation:2})};var Dr=class i{_observedElements=new Map;ngOnDestroy(){this._observedElements.forEach((n,t)=>this._cleanupObserver(t))}observe(n){return new Br(t=>{let a=this._observeElement(n).subscribe(t);return()=>{a.unsubscribe(),this._unobserveElement(n)}})}_observeElement(n){if(this._observedElements.has(n))this._observedElements.get(n).count++;else{let t=new Zt,o=null;typeof MutationObserver<"u"&&(o=new MutationObserver(a=>t.next(a)),o.observe(n,{attributes:!0,attributeOldValue:!0,attributeFilter:["width","height","style"]})),this._observedElements.set(n,{observer:o,stream:t,count:1})}return this._observedElements.get(n).stream}_unobserveElement(n){this._observedElements.has(n)&&(this._observedElements.get(n).count--,this._observedElements.get(n).count||this._cleanupObserver(n))}_cleanupObserver(n){if(this._observedElements.has(n)){let{observer:t,stream:o}=this._observedElements.get(n);t&&t.disconnect(),o.complete(),this._observedElements.delete(n)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=de({token:i,factory:i.\u0275fac,providedIn:"root"})},Xi=class i{_obs=y(Dr);el=y(Ct).nativeElement;ngZone=y(Xt);_sub$=null;event=new At;ngAfterViewInit(){this._sub$||this._sub()}_sub(){this._unsub();let n=this._obs.observe(this.el);this.ngZone.runOutsideAngular(()=>{this._sub$=n.subscribe(this.event)})}_unsub(){this._sub$?.unsubscribe()}ngOnDestroy(){this._unsub()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=ue({type:i,selectors:[["","observeSize",""]],outputs:{event:"observeSize"},exportAs:["observeSize"]})};var Ki=class i{width=200;option={tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[{name:"Pressure",type:"gauge",detail:{formatter:"{value}"},data:[{value:50,name:"SCORE"}]}]};handleEvents(n){console.log(n)}addWidth(){this.width+=100}reduceWidth(){this.width-=100}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-observers-basic"]],decls:16,vars:3,consts:[["echart",""],[1,"mb-md"],["nz-button","",3,"click"],[3,"observeSize"],[3,"events","option"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"div",1),e(2,`
      `),d(3,"button",2),b("click",function(){return g(a),C(o.addWidth())}),e(4,"Add width of div element"),r(),e(5,`
      `),d(6,"button",2),b("click",function(){return g(a),C(o.reduceWidth())}),e(7,"Reduce width of div element"),r(),e(8,`
    `),r(),e(9,`
    `),d(10,"div",3),b("observeSize",function(){g(a);let m=v(13);return C(m==null||m.chart==null?null:m.chart.resize())}),e(11,`
      `),d(12,"chart-echarts",4,0),b("events",function(m){return g(a),C(o.handleEvents(m))}),r(),e(14,`
    `),r(),e(15,`
  `)}t&2&&(l(10),Et("width",o.width,"px"),l(2),c("option",o.option))},dependencies:[E,k,M,N,cl,ll,Xi],encapsulation:2})};var Ji=class i{item={cols:1,urls:{"en-US":"packages/abc/observers/index.en-US.md","zh-CN":"packages/abc/observers/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>The <code>ObserversModule</code> package provides convenience directives built on top of native web platform observers, such as <code>MutationObserver</code>.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="observeSize"><a class="lake-link"><i data-anchor="observeSize"></i></a>observeSize<label class="api-type-label directive">directive</label></h3><p>Watch the DOM size change.</p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>(observeSize)</code></td><td>Event</td><td><code>MutationRecord[]</code></td><td>-</td><td></td></tr></tbody></table>',meta:{type:"Basic",title:"Observers",order:7,module:"import { ObserversModule } from '@delon/abc/observers';"},toc:[{id:"API",title:"API",h:2,children:[{id:"observeSize",title:"observeSize",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p><code>ObserversModule</code> \u5305\u63D0\u4F9B\u4E86\u57FA\u4E8E\u539F\u751F Web \u5E73\u53F0\u7684\u89C2\u5BDF\u8005 API\uFF08\u6BD4\u5982 <code>MutationObserver</code>\uFF09 \u7684\u4FBF\u6377\u6307\u4EE4\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="observeSize"><a class="lake-link"><i data-anchor="observeSize"></i></a>observeSize<label class="api-type-label directive">directive</label></h3><p>\u89C2\u5BDFDOM\u5927\u5C0F\u53D8\u5316\u3002</p><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>(observeSize)</code></td><td>\u4E8B\u4EF6</td><td><code>MutationRecord[]</code></td><td>-</td><td></td></tr></tbody></table>',meta:{type:"Basic",title:"Observers",subtitle:"\u89C2\u5BDF\u8005",order:7,module:"import { ObserversModule } from '@delon/abc/observers';"},toc:[{id:"API",title:"API",h:2,children:[{id:"observeSize",title:"observeSize",h:3}]}]}},demo:!0};codes=[{id:"components-observers-basic",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';

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
}`,lang:"ts",componentName:"ComponentsObserversBasicComponent",point:0,name:"basic",urls:"packages/abc/observers/demo/basic.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-observers"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-observers-basic"),e(7,`
        `),r(),e(8,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id))},dependencies:[O,Ki,R,P,j],encapsulation:2})};var Im=["popover"],Pm=(i,n)=>({"max-width.px":i,direction:n});function Rm(i,n){if(i&1){let t=z();d(0,"div",3),b("click",function(){g(t);let a=h();return C(a.handleMask())}),r()}}function Am(i,n){if(i&1&&(nt(0),p(1,"div",13),it()),i&2){let t=h(3);l(),c("innerHTML",t.item.content,jt)}}function Fm(i,n){if(i&1&&e(0),i&2){let t=h(3);Nn(" ",t.active+1,"/",t.max," ")}}function Lm(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(4);l(),B(t.item.skip)}}function Bm(i,n){if(i&1){let t=z();d(0,"a",14),b("click",function(){g(t);let a=h(3);return C(a.to("skip"))}),f(1,Lm,2,1,"ng-container",5),r()}if(i&2){let t=h(3);l(),c("nzStringTemplateOutlet",t.item.skip)}}function Vm(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(4);l(),B(t.item.prev)}}function Om(i,n){if(i&1){let t=z();d(0,"a",15),b("click",function(){g(t);let a=h(3);return C(a.to("prev"))}),f(1,Vm,2,1,"ng-container",5),r()}if(i&2){let t=h(3);l(),c("nzStringTemplateOutlet",t.item.prev)}}function jm(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(4);l(),B(t.item.next)}}function Hm(i,n){if(i&1){let t=z();d(0,"a",16),b("click",function(){g(t);let a=h(3);return C(a.to("next"))}),f(1,jm,2,1,"ng-container",5),r()}if(i&2){let t=h(3);l(),c("nzStringTemplateOutlet",t.item.next)}}function Wm(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(4);l(),B(t.item.done)}}function Um(i,n){if(i&1){let t=z();d(0,"a",17),b("click",function(){g(t);let a=h(3);return C(a.to("done"))}),f(1,Wm,2,1,"ng-container",5),r()}if(i&2){let t=h(3);l(),c("nzStringTemplateOutlet",t.item.done)}}function qm(i,n){if(i&1&&(f(0,Am,2,1,"ng-container",5),d(1,"div",6)(2,"span",7),f(3,Fm,1,2),r(),d(4,"div",8),f(5,Bm,2,1,"a",9)(6,Om,2,1,"a",10)(7,Hm,2,1,"a",11)(8,Um,2,1,"a",12),r()()),i&2){let t=h(2);c("nzStringTemplateOutlet",t.item.content),l(3),w(t.config.showTotal?3:-1),l(2),w(!t.last&&t.item.skip!==null&&t.item.skip!==void 0?5:-1),l(),w(!t.first&&t.item.prev!==null?6:-1),l(),w(!t.last&&t.item.next!==null&&t.item.next!==void 0?7:-1),l(),w(t.last&&t.item.done!==null&&t.item.done!==void 0?8:-1)}}function Gm(i,n){if(i&1&&(p(0,"div",4,0),f(2,qm,9,6,"ng-template",null,1,I)),i&2){let t=v(3),o=h();T("onboarding__light-hide",o.running),c("nzPopoverTitle",o.item.title)("nzPopoverContent",t)("nzPopoverVisible",!o.running)("nzPopoverTrigger",null)("nzPopoverPlacement",o.item.position)("nzPopoverOverlayClassName",o.item.className)("nzPopoverOverlayStyle",yo(11,Pm,o.item.width,o.dir))("nzNoAnimation",!0),_("style",o.item.lightStyle,Gr)}}var gn=class i{el=y(Ct).nativeElement;platform=y(ye);cdr=y(ct);doc=y(ge);time;prevSelectorEl;config;item;active=0;max=0;op=new At;running=!1;dir="ltr";popover;get first(){return this.active===0}get last(){return this.active===this.max-1}_getDoc(){return this.doc}_getWin(){return this._getDoc().defaultView||window}getLightData(){let n=this._getDoc(),t=this._getWin(),o=n.querySelector(this.item.selectors);if(!o)return null;let a=t.scrollY||n.documentElement.scrollTop||n.body.scrollTop,s=t.scrollX||n.documentElement.scrollLeft||n.body.scrollLeft,m=o.getBoundingClientRect(),D=m.top+a,V=m.left+s,mt=8,q=D>mt&&V>mt,_t=q?mt:0,Lt=q?mt*2:0;return{top:D-_t,left:V-_t,width:m.width+Lt,height:m.height+Lt,el:o,clientWidth:n.body.clientWidth,clientHeight:n.body.clientHeight}}ngAfterViewInit(){this.popover.component.onClickOutside=()=>{}}scroll(n){this.prevSelectorEl=n.el;let t=n.top-(n.clientHeight-n.height)/2;this._getWin().scrollTo({top:t}),this.updatePrevElStatus(!0)}updateRunning(n){this.running=n,this.cdr.detectChanges(),n||this.updatePosition()}updatePosition(){if(!this.platform.isBrowser)return;let n=this.getLightData();if(n==null)return;let t=this.el.querySelector(".onboarding__light").style;t.top=`${n.top}px`,t.left=`${n.left}px`,t.width=`${n.width}px`,t.height=`${n.height}px`,this.updatePrevElStatus(!1),this.scroll(n)}updatePrevElStatus(n){this.prevSelectorEl&&this.prevSelectorEl.classList[n?"add":"remove"]("onboarding__light-el")}to(n){this.op.emit(n)}handleMask(){this.config.maskClosable===!0&&(this.popover.component.hide(),this.to("done"))}ngOnDestroy(){clearTimeout(this.time),this.updatePrevElStatus(!1)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["onboarding"]],viewQuery:function(t,o){if(t&1&&ot(Im,5),t&2){let a;W(a=U())&&(o.popover=a.first)}},hostVars:5,hostBindings:function(t,o){t&2&&(_("data-onboarding-active",o.active),T("onboarding",!0)("onboarding-rtl",o.dir==="rtl"))},decls:2,vars:2,consts:[["popover","nzPopover"],["content",""],[1,"onboarding__mask"],[1,"onboarding__mask",3,"click"],["nz-popover","",1,"onboarding__light",3,"nzPopoverTitle","nzPopoverContent","nzPopoverVisible","nzPopoverTrigger","nzPopoverPlacement","nzPopoverOverlayClassName","nzPopoverOverlayStyle","nzNoAnimation"],[4,"nzStringTemplateOutlet"],[1,"flex-center-between","onboarding__footer"],[1,"onboarding__total"],[1,"onboarding__btns"],["nz-button","","nzType","link","nzSize","small","data-btnType","skip"],["nz-button","","nzSize","small","data-btnType","prev"],["nz-button","","nzType","primary","nzSize","small","data-btnType","next"],["nz-button","","nzType","primary","nzSize","small","data-btnType","done"],[3,"innerHTML"],["nz-button","","nzType","link","nzSize","small","data-btnType","skip",3,"click"],["nz-button","","nzSize","small","data-btnType","prev",3,"click"],["nz-button","","nzType","primary","nzSize","small","data-btnType","next",3,"click"],["nz-button","","nzType","primary","nzSize","small","data-btnType","done",3,"click"]],template:function(t,o){t&1&&f(0,Rm,1,0,"div",2)(1,Gm,4,14),t&2&&(w(!o.running&&o.config.mask?0:-1),l(),w(o.item?1:-1))},dependencies:[Ya,Pt,k,Sa],encapsulation:2,changeDetection:0})};var Vl=new Tn("ONBOARDING_STORE_TOKEN",{providedIn:"root",factory:$m});function $m(){return new Mr}var Mr=class{get(n){return localStorage.getItem(n)}set(n,t){localStorage.setItem(n,`${t}`)}};var Ko=class i{i18n=y(Ze);appRef=y(Xr);router=y(In);doc=y(ge);configSrv=y(It);keyStoreSrv=y(Vl);directionality=y(Wt);compRef;op$;config;active=0;running$=null;_running=!1;type=null;_getDoc(){return this.doc}get running(){return this._running}attach(){let n=na(gn,{environmentInjector:this.appRef.injector});this.compRef=n,this.appRef.attachView(n.hostView);let t=n.hostView.rootNodes[0],o=this._getDoc(),a=o.querySelector(".cdk-overlay-container");a?o.body.insertBefore(t,a):o.body.appendChild(t),this.op$=this.compRef.instance.op.subscribe(s=>{switch(s){case"next":this.next();break;case"prev":this.prev();break;default:this.done();break}})}cancelRunning(){return this.running$&&(this.running$.unsubscribe(),this.running$=null),this}updateRunning(n){return this._running=n,this.compRef.instance.updateRunning(n),this}destroy(){let n=this.config?.key;n!=null&&this.keyStoreSrv.set(n,this.config?.keyVersion),this.cancelRunning(),this.compRef&&(this.appRef.detachView(this.compRef.hostView),this.compRef.destroy(),this.op$.unsubscribe())}showItem(n=!1){let t=this.config?.items,o=ft(ft({position:"bottomLeft",before:ie(!0),after:ie(!0)},this.i18n.getData("onboarding")),t[this.active]),a=this.configSrv.get("onboarding").direction||this.directionality.value;Object.assign(this.compRef.instance,{item:o,config:this.config,active:this.active,max:t.length,dir:a});let s=[gr(()=>o.url?this.router.navigateByUrl(o.url):ie(!0)),gr(()=>{let m=this.type==="prev"?o.after:o.before;return typeof m=="number"?ie(!0).pipe(Co(m)):m})];n||s.push(Co(1)),this.updateRunning(!0),this.running$=ie(!0).pipe(Lr.apply(this,s)).subscribe({next:()=>this.cancelRunning().updateRunning(!1),error:()=>this.done()})}start(n){let t=ft({keyVersion:"",items:[],mask:!0,maskClosable:!0,showTotal:!1},n),o=t?.key;o!=null&&this.keyStoreSrv.get(o)===t.keyVersion||this.running||(this.destroy(),this.config=t,this.active=0,this.type=null,this.attach(),this.showItem(!0))}next(){if(this._running||this.active+1>=this.config.items.length){this.done();return}this.type="next",++this.active,this.showItem()}prev(){this._running||this.active-1<0||(this.type="prev",--this.active,this.showItem())}done(){this.type="done",this.destroy()}ngOnDestroy(){this.destroy()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=de({token:i,factory:i.\u0275fac,providedIn:"root"})};var Yi=class i{msg=y(yt);srv=y(Ko);http=y(Pn);def={items:[{selectors:".test1-1",content:"The user guidance is to help users better understand and use the product",width:300},{selectors:".test1-2",title:"Test2",content:"The user guidance is to help users better understand and use the product"},{selectors:".test1-3",title:"Test3",content:"The user guidance is to help users better understand and use the product"}]};handleClick(){this.msg.info("click")}start(){this.srv.start(ft({},this.def))}viaHttp(){this.http.get("./assets/schema/onboarding.json").subscribe(n=>{console.log(n),this.srv.start(n)})}startOnce(){this.srv.start(Pr(ft({},this.def),{key:"obs-once"}))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-onboarding-basic"]],decls:25,vars:0,consts:[[1,"mb-md","pb-md","border-bottom-1"],["nz-button","","nzType","primary",1,"test1-1",3,"click"],["nz-button","","nzType","link",1,"test1-2"],["nz-button","","nzType","dashed",1,"test1-3"],["nz-button","",3,"click"],["href","https://github.com/ng-alain/delon/blob/master/src/assets/schema/onboarding.json","target","_blank",1,"ml-md"]],template:function(t,o){t&1&&(e(0,`
    `),d(1,"div",0),e(2,`
      `),d(3,"button",1),b("click",function(){return o.handleClick()}),e(4,"First Button"),r(),e(5,`
      `),d(6,"button",2),e(7,"Second Button"),r(),e(8,`
      `),d(9,"button",3),e(10,"Third Button"),r(),e(11,`
    `),r(),e(12,`
    `),d(13,"button",4),b("click",function(){return o.start()}),e(14,"Start"),r(),e(15,`
    `),d(16,"button",4),b("click",function(){return o.startOnce()}),e(17,"Start Once (Set 'key')"),r(),e(18,`
    `),d(19,"button",4),b("click",function(){return o.viaHttp()}),e(20,"Start Via Http"),r(),e(21,`
    `),d(22,"a",5),e(23,`
      onboarding.json
    `),r(),e(24,`
  `))},dependencies:[E,k,M,N],encapsulation:2})};var td=class i{srv=y(Ko);start(){this.srv.start({items:[{selectors:".test2-1",content:"The user guidance is to help users better understand and use the product",next:"Go to home",width:300,url:"/components/onboarding"},{selectors:".page-banner__slogan",content:'ng-alain is an MIT-licensed open source project. In order to achieve better and sustainable development of the project, we expect to gain more backers. You can support us in any of the following ways, Or purchasing our <a href="https://e.ng-alain.com/" target="_blank">business theme</a>',width:300,url:"/",before:200},{selectors:".test2-3",title:"Test3",content:"The user guidance is to help users better understand and use the product",url:"/components/onboarding"}]})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-onboarding-multiple-pages"]],decls:13,vars:0,consts:[[1,"mb-md","pb-md","border-bottom-1"],["nz-button","","nzType","primary",1,"test2-1"],["nz-button","","nzType","dashed",1,"test2-3"],["nz-button","",3,"click"]],template:function(t,o){t&1&&(e(0,`
    `),d(1,"div",0),e(2,`
      `),d(3,"button",1),e(4,"First Button"),r(),e(5,`
      `),d(6,"button",2),e(7,"Third Button"),r(),e(8,`
    `),r(),e(9,`
    `),d(10,"button",3),b("click",function(){return o.start()}),e(11,"Start"),r(),e(12,`
  `))},dependencies:[E,k,M,N],encapsulation:2})};var ed=class i{item={cols:1,urls:{"en-US":"packages/abc/onboarding/index.en-US.md","zh-CN":"packages/abc/onboarding/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>The user guidance is to help users better understand and use the product.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="OnboardingService"><a class="lake-link"><i data-anchor="OnboardingService"></i></a>OnboardingService</h3><p>The components only support the use of <code>OnboardingService</code> service to build.</p><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>start(data: <a data-toc="OnboardingData">OnboardingData</a>)</code></td><td>Start a new user guidance</td></tr><tr><td><code>next()</code></td><td>Next</td></tr><tr><td><code>prev()</code></td><td>Prev</td></tr><tr><td><code>done()</code></td><td>Done</td></tr></tbody></table><h3 id="OnboardingData"><a class="lake-link"><i data-anchor="OnboardingData"></i></a>OnboardingData</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[key]</code></td><td>Storage identification Key, The default is <code>localStorage</code> local storage, allowing the use of <code>ONBOARDING_STORE_TOKEN</code> to change the storage method</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[keyVersion]</code></td><td>Current version</td><td><code>unknown</code></td><td>-</td></tr><tr><td><code>[items]</code></td><td>Onboarding items</td><td><code><a data-toc="OnboardingItem">OnboardingItem</a>[]</code></td><td><code>[]</code></td></tr><tr><td><code>[mask]</code></td><td>Whether to show mask or not</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[maskClosable]</code></td><td>Clicking on the mask (area outside the onboarding) to close the onboarding or not</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[showTotal]</code></td><td>Whether to show total</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="OnboardingItem"><a class="lake-link"><i data-anchor="OnboardingItem"></i></a>OnboardingItem</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[selectors]</code></td><td>The CSS selector, which identifies the html element you want to describe</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[position]</code></td><td>Positioning of the selector element, relative to the contents of the children</td><td><code>top, left, right, bottom, topLeft, topRight, bottomLeft, bottomRight, leftTop, leftBottom, rightTop, rightBottom</code></td><td><code>bottomLeft</code></td></tr><tr><td><code>[className]</code></td><td>Class name of the panel</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[width]</code></td><td>Width of the panel</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>Headline text of the panel</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[content]</code></td><td>Detail text of the panel</td><td><code>string, SafeHtml, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[skip]</code></td><td>Skip button of the panel, <code>null</code> Don't show</td><td><code>string, TemplateRef&lt;void>, null</code></td><td><code>Skip</code></td></tr><tr><td><code>[prev]</code></td><td>Prev button of the panel, <code>null</code> Don't show</td><td><code>string, TemplateRef&lt;void>, null</code></td><td><code>Prev</code></td></tr><tr><td><code>[next]</code></td><td>Next button of the panel, <code>null</code> Don't show</td><td><code>string, TemplateRef&lt;void>, null</code></td><td><code>Next</code></td></tr><tr><td><code>[done]</code></td><td>Done button of the panel, <code>null</code> Don't show</td><td><code>string, TemplateRef&lt;void>, null</code></td><td><code>Done</code></td></tr><tr><td><code>[url]</code></td><td>Target router url</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[before]</code></td><td>Callback before entering, triggered when call <code>next</code> operates, <code>number</code> indicate delay</td><td><code>Observable&lt;any>, number</code></td><td>-</td></tr><tr><td><code>[after]</code></td><td>Callback after entering, triggered when call <code>prev</code> operates, <code>number</code> indicate delay</td><td><code>Observable&lt;any>, number</code></td><td>-</td></tr></tbody></table>`,meta:{type:"Basic",title:"onboarding",subtitle:"Onboarding",order:7,module:"import { OnboardingModule } from '@delon/abc/onboarding';"},toc:[{id:"API",title:"API",h:2,children:[{id:"OnboardingService",title:"OnboardingService",h:3},{id:"OnboardingData",title:"OnboardingData",h:3},{id:"OnboardingItem",title:"OnboardingItem",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u7528\u6237\u5F15\u5BFC\u6D41\u7A0B\uFF0C\u662F\u5E2E\u52A9\u7528\u6237\u66F4\u597D\u7684\u7406\u89E3\u548C\u4F7F\u7528\u4EA7\u54C1\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="OnboardingService"><a class="lake-link"><i data-anchor="OnboardingService"></i></a>OnboardingService</h3><p>\u7EC4\u4EF6\u53EA\u652F\u6301\u4F7F\u7528 <code>OnboardingService</code> \u670D\u52A1\u6765\u6784\u5EFA\u3002</p><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>start(data: <a data-toc="OnboardingData">OnboardingData</a>)</code></td><td>\u5F00\u542F\u65B0\u7684\u7528\u6237\u5F15\u5BFC\u6D41\u7A0B</td></tr><tr><td><code>next()</code></td><td>\u4E0B\u4E00\u9879</td></tr><tr><td><code>prev()</code></td><td>\u4E0A\u4E00\u9879</td></tr><tr><td><code>done()</code></td><td>\u5B8C\u6210</td></tr></tbody></table><h3 id="OnboardingData"><a class="lake-link"><i data-anchor="OnboardingData"></i></a>OnboardingData</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[key]</code></td><td>\u5B58\u50A8\u6807\u8BC6Key\uFF1B\u9ED8\u8BA4 <code>localStorage</code> \u672C\u5730\u5B58\u50A8\uFF0C\u5141\u8BB8\u4F7F\u7528 <code>ONBOARDING_STORE_TOKEN</code> \u53D8\u66F4\u5B58\u50A8\u65B9\u5F0F</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[keyVersion]</code></td><td>\u5F53\u524D\u7248\u672C</td><td><code>unknown</code></td><td>-</td></tr><tr><td><code>[items]</code></td><td>\u5F15\u5BFC\u9879\u5217\u8868</td><td><code><a data-toc="OnboardingItem">OnboardingItem</a>[]</code></td><td><code>[]</code></td></tr><tr><td><code>[mask]</code></td><td>\u662F\u5426\u5C55\u793A\u906E\u7F69</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[maskClosable]</code></td><td>\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5141\u8BB8\u5173\u95ED</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[showTotal]</code></td><td>\u662F\u5426\u663E\u793A\u603B\u91CF</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="OnboardingItem"><a class="lake-link"><i data-anchor="OnboardingItem"></i></a>OnboardingItem</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[selectors]</code></td><td>CSS\u9009\u9879\u9879\uFF0C\u7528\u4E8E\u67E5\u627E\u76EE\u6807\u5143\u7D20</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[position]</code></td><td>\u5F15\u5BFC\u9762\u677F\u663E\u793A\u4F4D\u7F6E</td><td><code>top, left, right, bottom, topLeft, topRight, bottomLeft, bottomRight, leftTop, leftBottom, rightTop, rightBottom</code></td><td><code>bottomLeft</code></td></tr><tr><td><code>[className]</code></td><td>\u5F15\u5BFC\u9762\u677F\u7C7B\u540D</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[width]</code></td><td>\u5F15\u5BFC\u9762\u677F\u5BBD\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>\u5F15\u5BFC\u9762\u677F\u6807\u9898</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[content]</code></td><td>\u5F15\u5BFC\u9762\u677F\u5185\u5BB9</td><td><code>string, SafeHtml, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[skip]</code></td><td>\u8DF3\u8FC7\u6309\u94AE\u6587\u672C\uFF0C<code>null</code> \u8868\u793A\u5F3A\u51FB\u4E0D\u663E\u793A</td><td><code>string, TemplateRef&lt;void>, null</code></td><td><code>\u8DF3\u8FC7</code></td></tr><tr><td><code>[prev]</code></td><td>\u8DF3\u8FC7\u6309\u94AE\u6587\u672C\uFF0C<code>null</code> \u8868\u793A\u5F3A\u51FB\u4E0D\u663E\u793A</td><td><code>string, TemplateRef&lt;void>, null</code></td><td><code>\u4E0A\u4E00\u9879</code></td></tr><tr><td><code>[next]</code></td><td>\u8DF3\u8FC7\u6309\u94AE\u6587\u672C\uFF0C<code>null</code> \u8868\u793A\u5F3A\u51FB\u4E0D\u663E\u793A</td><td><code>string, TemplateRef&lt;void>, null</code></td><td><code>\u4E0B\u4E00\u9879</code></td></tr><tr><td><code>[done]</code></td><td>\u8DF3\u8FC7\u6309\u94AE\u6587\u672C\uFF0C<code>null</code> \u8868\u793A\u5F3A\u51FB\u4E0D\u663E\u793A</td><td><code>string, TemplateRef&lt;void>, null</code></td><td><code>\u5B8C\u6210</code></td></tr><tr><td><code>[url]</code></td><td>\u76EE\u6807\u8DEF\u7531\u9875</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[before]</code></td><td>\u5F53\u89E6\u53D1 <code>next</code> \u65F6\u8868\u793A\u8FDB\u5165\u524D\u56DE\u8C03\uFF0C<code>number</code> \u8868\u793A\u5EF6\u8FDF</td><td><code>Observable&lt;any>, number</code></td><td>-</td></tr><tr><td><code>[after]</code></td><td>\u5F53\u89E6\u53D1 <code>prev</code> \u65F6\u8868\u793A\u8FDB\u5165\u524D\u56DE\u8C03\uFF0C<code>number</code> \u8868\u793A\u5EF6\u8FDF</td><td><code>Observable&lt;any>, number</code></td><td>-</td></tr></tbody></table>',meta:{type:"Basic",title:"onboarding",subtitle:"\u7528\u6237\u5F15\u5BFC\u6D41\u7A0B",order:7,module:"import { OnboardingModule } from '@delon/abc/onboarding';"},toc:[{id:"API",title:"API",h:2,children:[{id:"OnboardingService",title:"OnboardingService",h:3},{id:"OnboardingData",title:"OnboardingData",h:3},{id:"OnboardingItem",title:"OnboardingItem",h:3}]}]}},demo:!0};codes=[{id:"components-onboarding-basic",meta:{title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},order:0},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component, inject } from '@angular/core';

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
}`,lang:"ts",componentName:"ComponentsOnboardingMultiplePagesComponent",point:1,name:"multiple-pages",urls:"packages/abc/onboarding/demo/multiple-pages.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-onboarding"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-onboarding-basic"),e(7,`
        `),r(),e(8,`
      
        `),d(9,"code-box",3),e(10,`
          `),p(11,"components-onboarding-multiple-pages"),e(12,`
        `),r(),e(13,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id),l(5),c("item",o.codes[1]),_("id",o.codes[1].id))},dependencies:[O,Yi,td,R,P,j],encapsulation:2})};function Zm(i,n){i&1&&e(0,"\u9762\u5305\u5C51")}function Xm(i,n){i&1&&(d(0,"div",7),e(1,"logo"),r())}function Km(i,n){i&1&&(d(0,"div",8),e(1,"action"),r())}function Jm(i,n){i&1&&(d(0,"div",9),e(1,"content"),r())}function Ym(i,n){i&1&&(d(0,"div",10),e(1,"extra"),r())}function tu(i,n){i&1&&(e(0,`
        `),d(1,"nz-tabset",11),e(2,`
          `),p(3,"nz-tab",12),e(4,`
          `),p(5,"nz-tab",13),e(6,`
          `),p(7,"nz-tab",14),e(8,`
        `),r(),e(9,`
      `)),i&2&&(l(),c("nzSize","default"))}var od=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-page-header-structure"]],decls:22,vars:8,consts:[["breadcrumb",""],["logo",""],["action",""],["content",""],["extra",""],["tab",""],[3,"title","titleSub","breadcrumb","logo","action","extra","content","tab"],[1,"logo"],[1,"action"],[1,"desc"],[1,"extra"],[3,"nzSize"],["nzTitle","\u9875\u7B7E\u4E00"],["nzTitle","\u9875\u7B7E\u4E8C"],["nzTitle","\u9875\u7B7E\u4E09"]],template:function(t,o){if(t&1&&(e(0,`
    `),d(1,"page-header",6),e(2,`
      `),f(3,Zm,1,0,"ng-template",null,0,I),e(5,`
      `),f(6,Xm,2,0,"ng-template",null,1,I),e(8,`
      `),f(9,Km,2,0,"ng-template",null,2,I),e(11,`
      `),f(12,Jm,2,0,"ng-template",null,3,I),e(14,`
      `),f(15,Ym,2,0,"ng-template",null,4,I),e(17,`
      `),f(18,tu,10,1,"ng-template",null,5,I),e(20,`
    `),r(),e(21,`
  `)),t&2){let a=v(4),s=v(7),m=v(10),D=v(13),V=v(16),mt=v(19);l(),c("title","title")("titleSub","titleSub")("breadcrumb",a)("logo",s)("action",m)("extra",V)("content",D)("tab",mt)}},dependencies:[no,Bn,Ro,Po],styles:["[_nghost-%COMP%]     .logo{background:#3ba0e9;color:#fff;height:100%}[_nghost-%COMP%]     h1.title{background:#108ee9;color:#fff}[_nghost-%COMP%]     .action, [_nghost-%COMP%]     .desc, [_nghost-%COMP%]     .extra{background:#7dbcea;color:#fff}"]})};var Ol=["*"];function eu(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(2);l(),B(t.title)}}function ou(i,n){if(i&1&&(d(0,"sv-title"),f(1,eu,2,1,"ng-container",1),r()),i&2){let t=h();l(),c("nzStringTemplateOutlet",t.title)}}var uo=class i{el=y(Ct).nativeElement;parentComp=y(Qt,{host:!0,optional:!0});ren=y(Yt);constructor(){if(this.parentComp==null)throw new Error("[sv-title] must include 'sv-container' component")}setClass(){let n=this.parentComp.gutter,t=this.el;this.ren.setStyle(t,"padding-left",`${n/2}px`),this.ren.setStyle(t,"padding-right",`${n/2}px`)}ngOnInit(){this.setClass()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["sv-title"],["","sv-title",""]],hostVars:2,hostBindings:function(t,o){t&2&&T("sv__title",!0)},exportAs:["svTitle"],ngContentSelectors:Ol,decls:1,vars:0,template:function(t,o){t&1&&(Z(),H(0))},encapsulation:2,changeDetection:0})},Qt=class i{colInCon;title;size;gutter;layout;labelWidth;col;default;noColon=!1;bordered=!1;get margin(){return this.bordered?{}:{"margin-left":`${-(this.gutter/2)}px`,"margin-right":`${-(this.gutter/2)}px`}}constructor(n){n.attach(this,"sv",{size:"large",gutter:32,layout:"horizontal",col:3,default:!0})}static \u0275fac=function(t){return new(t||i)(tt(It))};static \u0275cmp=u({type:i,selectors:[["sv-container"],["","sv-container",""]],hostVars:14,hostBindings:function(t,o){t&2&&T("sv__container",!0)("sv__horizontal",o.layout==="horizontal")("sv__vertical",o.layout==="vertical")("sv__small",o.size==="small")("sv__large",o.size==="large")("sv__bordered",o.bordered)("clearfix",!0)},inputs:{colInCon:[2,"sv-container","colInCon",n=>n==null?null:dt(n)],title:"title",size:"size",gutter:[2,"gutter","gutter",dt],layout:"layout",labelWidth:[2,"labelWidth","labelWidth",dt],col:[2,"col","col",dt],default:[2,"default","default",X],noColon:[2,"noColon","noColon",X],bordered:[2,"bordered","bordered",X]},exportAs:["svContainer"],features:[gt],ngContentSelectors:Ol,decls:3,vars:3,consts:[[1,"ant-row"],[4,"nzStringTemplateOutlet"]],template:function(t,o){t&1&&(Z(),d(0,"div",0),f(1,ou,2,1,"sv-title"),H(2),r()),t&2&&(_e(o.margin),l(),w(o.title?1:-1))},dependencies:[uo,Pt],encapsulation:2,changeDetection:0})};var nu=["*"];function iu(i,n){if(i&1&&p(0,"em",0),i&2){let t=h();c("innerHTML",t.prefix,jt)}}function du(i,n){if(i&1&&p(0,"em",2),i&2){let t=h();c("innerHTML",t.unit,jt)}}var Cn=class i{prefix;unit;tooltip;size="default";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["sv-value"],["","sv-value",""]],hostVars:6,hostBindings:function(t,o){t&2&&T("sv__value",!0)("sv__value-small",o.size==="small")("sv__value-large",o.size==="large")},inputs:{prefix:"prefix",unit:"unit",tooltip:"tooltip",size:"size"},exportAs:["svValue"],ngContentSelectors:nu,decls:4,vars:3,consts:[[1,"sv__value-prefix",3,"innerHTML"],["nz-tooltip","",1,"sv__value-text",3,"nzTooltipTitle"],[1,"sv__value-unit",3,"innerHTML"]],template:function(t,o){t&1&&(Z(),f(0,iu,1,1,"em",0),d(1,"span",1),H(2),r(),f(3,du,1,1,"em",2)),t&2&&(w(o.prefix?0:-1),l(),c("nzTooltipTitle",o.tooltip),l(2),w(o.unit?3:-1))},dependencies:[ee],encapsulation:2,changeDetection:0})};var au=["conEl"],lu=["*"];function cu(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(2);l(),B(t.label)}}function su(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(3);l(),B(t.optional)}}function pu(i,n){if(i&1&&p(0,"nz-icon",10),i&2){let t=h(3);c("nzTooltipTitle",t.optionalHelp)("nzTooltipColor",t.optionalHelpColor)}}function mu(i,n){if(i&1&&(d(0,"span",9),f(1,su,2,1,"ng-container",7)(2,pu,1,2,"nz-icon",10),r()),i&2){let t=h(2);T("sv__label-optional-no-text",!t.optional),l(),c("nzStringTemplateOutlet",t.optional),l(),w(t.optionalHelp?2:-1)}}function uu(i,n){if(i&1&&(d(0,"div",5)(1,"span",6),f(2,cu,2,1,"ng-container",7),r(),f(3,mu,3,4,"span",8),r()),i&2){let t=h();Et("width",t.labelWidth,"px"),T("sv__label-empty",!t.label)("sv__label-width",t.labelWidth!==null&&t.labelWidth!==void 0)("sv__no-colon",t._noColon),l(2),c("nzStringTemplateOutlet",t.label),l(),w(t.optional||t.optionalHelp?3:-1)}}function hu(i,n){if(i&1&&(d(0,"span",4),e(1),r()),i&2){let t=h(2);l(),B(t.unit)}}function fu(i,n){if(i&1&&f(0,hu,2,1,"span",11),i&2){let t=h();c("nzStringTemplateOutlet",t.unit)}}var Nr="sv",ne=class i{el=y(Ct).nativeElement;parentComp=y(Qt,{host:!0,optional:!0});rep=y(Mo);ren=y(Yt);conEl;clsMap=[];_noColon=!1;optional;optionalHelp;optionalHelpColor;label;unit;col;default;type;noColon;hideLabel=!1;get paddingValue(){return this.parentComp.bordered?null:this.parentComp.gutter/2}get labelWidth(){let{labelWidth:n,layout:t}=this.parentComp;return t==="horizontal"?n:null}constructor(){if(this.parentComp==null)throw new Error("[sv] must include 'sv-container' component")}setClass(){let{ren:n,col:t,clsMap:o,type:a,rep:s,noColon:m}=this,D=this.parentComp,V=this.el;this._noColon=D.bordered?!0:m??D.noColon,o.forEach(q=>n.removeClass(V,q)),o.length=0;let mt=D.colInCon||D.col;o.push(...s.genCls(t??mt,mt)),o.push(`${Nr}__item`),D.labelWidth&&o.push(`${Nr}__item-fixed`),a&&o.push(`${Nr}__type-${a}`),o.forEach(q=>n.addClass(V,q))}ngAfterViewInit(){this.setClass(),this.checkContent()}ngOnChanges(){this.setClass()}checkContent(){let{conEl:n}=this,t=this.default;if(!(t??this.parentComp?.default))return;let o=n.nativeElement,a="sv__default";o.classList.contains(a)&&o.classList.remove(a),No(o)&&o.classList.add(a)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["sv"],["","sv",""]],viewQuery:function(t,o){if(t&1&&ot(au,5),t&2){let a;W(a=U())&&(o.conEl=a.first)}},hostVars:4,hostBindings:function(t,o){t&2&&Et("padding-left",o.paddingValue,"px")("padding-right",o.paddingValue,"px")},inputs:{optional:"optional",optionalHelp:"optionalHelp",optionalHelpColor:"optionalHelpColor",label:"label",unit:"unit",col:[2,"col","col",n=>n==null?null:dt(n)],default:[2,"default","default",n=>n==null?null:X(n)],type:"type",noColon:[2,"noColon","noColon",n=>n==null?null:X(n)],hideLabel:[2,"hideLabel","hideLabel",X]},exportAs:["sv"],features:[gt,Rt],ngContentSelectors:lu,decls:6,vars:2,consts:[["conEl",""],[1,"sv__label",3,"sv__label-empty","sv__label-width","sv__no-colon","width"],[1,"sv__detail"],[3,"cdkObserveContent"],[1,"sv__unit"],[1,"sv__label"],[1,"sv__label-text"],[4,"nzStringTemplateOutlet"],[1,"sv__label-optional",3,"sv__label-optional-no-text"],[1,"sv__label-optional"],["nz-tooltip","","nzType","question-circle",3,"nzTooltipTitle","nzTooltipColor"],["class","sv__unit",4,"nzStringTemplateOutlet"]],template:function(t,o){if(t&1){let a=z();Z(),f(0,uu,4,10,"div",1),d(1,"div",2)(2,"span",3,0),b("cdkObserveContent",function(){return g(a),C(o.checkContent())}),H(4),r(),f(5,fu,1,1,"span",4),r()}t&2&&(w(o.hideLabel?-1:0),l(5),w(o.unit?5:-1))},dependencies:[Pt,ee,bt,Qe],encapsulation:2,changeDetection:0})};var pe=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=$t({type:i});static \u0275inj=Gt({imports:[Ce,pa,Se,Vt,xe]})};function Cu(i,n){i&1&&(e(0,`
        `),d(1,"nz-breadcrumb"),e(2,`
          `),d(3,"nz-breadcrumb-item")(4,"a"),e(5,"\u4E00\u7EA7\u83DC\u5355"),r()(),e(6,`
          `),d(7,"nz-breadcrumb-item")(8,"a"),e(9,"\u4E8C\u7EA7\u83DC\u5355"),r()(),e(10,`
          `),d(11,"nz-breadcrumb-item")(12,"a"),e(13,"\u4E09\u7EA7\u83DC\u5355"),r()(),e(14,`
        `),r(),e(15,`
      `))}function bu(i,n){i&1&&p(0,"img",8)}function yu(i,n){if(i&1&&(e(0,`
        `),d(1,"nz-button-group"),e(2,`
          `),d(3,"button",9),e(4,"\u64CD\u4F5C"),r(),e(5,`
          `),d(6,"button",9),e(7,"\u64CD\u4F5C"),r(),e(8,`
        `),r(),e(9,`
        `),d(10,"button",10),e(11,`
          `),p(12,"nz-icon",11),e(13,`
        `),r(),e(14,`
        `),d(15,"nz-dropdown-menu",null,6),e(17,`
          `),d(18,"ul",12),e(19,`
            `),d(20,"li",13),e(21,"\u9009\u9879\u4E00"),r(),e(22,`
            `),d(23,"li",13),e(24,"\u9009\u9879\u4E8C"),r(),e(25,`
            `),d(26,"li",13),e(27,"\u9009\u9879\u4E09"),r(),e(28,`
          `),r(),e(29,`
        `),r(),e(30,`
        `),d(31,"button",14),e(32,"\u4E3B\u64CD\u4F5C"),r(),e(33,`
      `)),i&2){let t=v(16);l(10),c("nzDropdownMenu",t),l(21),c("nzType","primary")}}function xu(i,n){if(i&1){let t=z();e(0,`
        `),d(1,"sv-container",15),e(2,`
          `),d(3,"sv",16),e(4,"\u66F2\u4E3D\u4E3D"),r(),e(5,`
          `),d(6,"sv",17),e(7,"XX \u670D\u52A1"),r(),e(8,`
          `),d(9,"sv",18),e(10,"2017-07-07"),r(),e(11,`
          `),d(12,"sv",19)(13,"a",20),b("click",function(){g(t);let a=h();return C(a.msg.success("yes"))}),e(14,"12421"),r()(),e(15,`
          `),d(16,"sv",21),e(17,"2017-07-07 ~ 2017-08-08"),r(),e(18,`
          `),d(19,"sv",22),e(20,"\u8BF7\u4E8E\u4E24\u4E2A\u5DE5\u4F5C\u65E5\u5185\u786E\u8BA4"),r(),e(21,`
        `),r(),e(22,`
      `)}}function vu(i,n){i&1&&(e(0,`
        `),d(1,"div",23),e(2,`
          `),d(3,"div",24),e(4,`
            `),d(5,"p",25),e(6,"\u72B6\u6001"),r(),e(7,`
            `),d(8,"p",26),e(9,"\u5F85\u5BA1\u6279"),r(),e(10,`
          `),r(),e(11,`
          `),d(12,"div",24),e(13,`
            `),d(14,"p",25),e(15,"\u8BA2\u5355\u91D1\u989D"),r(),e(16,`
            `),d(17,"p",26),e(18,"\xA5 568.08"),r(),e(19,`
          `),r(),e(20,`
        `),r(),e(21,`
      `))}function Su(i,n){i&1&&(e(0,`
        `),d(1,"nz-tabset",27),e(2,`
          `),p(3,"nz-tab",28),e(4,`
          `),p(5,"nz-tab",29),e(6,`
        `),r(),e(7,`
      `)),i&2&&(l(),c("nzSize","default"))}var nd=class i{msg=y(yt);static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-page-header-standard"]],decls:22,vars:7,consts:[["breadcrumb",""],["logo",""],["action",""],["content",""],["extra",""],["tab",""],["actionMoreMenu","nzDropdownMenu"],[3,"title","breadcrumb","logo","action","extra","content","tab"],["src","https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png"],["nz-button",""],["nz-button","","nz-dropdown","",1,"mx-sm",3,"nzDropdownMenu"],["nzType","ellipsis"],["nz-menu",""],["nz-menu-item",""],["nz-button","",3,"nzType"],["size","small","col","2"],["label","\u521B\u5EFA\u4EBA"],["label","\u8BA2\u8D2D\u4EA7\u54C1"],["label","\u521B\u5EFA\u65F6\u95F4"],["label","\u5173\u8054\u5355\u636E"],[3,"click"],["label","\u751F\u6548\u65E5\u671F"],["label","\u5907\u6CE8"],["nz-row",""],["nz-col","","nzXs","24","nzSm","12"],[1,"text-grey"],[1,"text-lg"],[3,"nzSize"],["nzTitle","\u8BE6\u60C5"],["nzTitle","\u89C4\u5219"]],template:function(t,o){if(t&1&&(e(0,`
    `),d(1,"page-header",7),e(2,`
      `),f(3,Cu,16,0,"ng-template",null,0,I),e(5,`
      `),f(6,bu,1,0,"ng-template",null,1,I),e(8,`
      `),f(9,yu,34,2,"ng-template",null,2,I),e(11,`
      `),f(12,xu,23,0,"ng-template",null,3,I),e(14,`
      `),f(15,vu,22,0,"ng-template",null,4,I),e(17,`
      `),f(18,Su,8,1,"ng-template",null,5,I),e(20,`
    `),r(),e(21,`
  `)),t&2){let a=v(4),s=v(7),m=v(10),D=v(13),V=v(16),mt=v(19);l(),c("title","\u5355\u53F7\uFF1A234231029431")("breadcrumb",a)("logo",s)("action",m)("extra",V)("content",D)("tab",mt)}},dependencies:[no,Go,qo,Uo,E,k,ha,M,N,Ln,Fa,Aa,Eo,Io,La,Bn,Ro,Po,se,R,P,Vt,bt,pe,Qt,ne],encapsulation:2})};function zu(i,n){i&1&&(e(0,`
        `),d(1,"nz-breadcrumb"),e(2,`
          `),d(3,"nz-breadcrumb-item")(4,"a"),e(5,"\u4E00\u7EA7\u83DC\u5355"),r()(),e(6,`
          `),d(7,"nz-breadcrumb-item")(8,"a"),e(9,"\u4E8C\u7EA7\u83DC\u5355"),r()(),e(10,`
          `),d(11,"nz-breadcrumb-item")(12,"a"),e(13,"\u4E09\u7EA7\u83DC\u5355"),r()(),e(14,`
        `),r(),e(15,`
      `))}function _u(i,n){i&1&&(e(0,`
        `),d(1,"div",4),e(2,`
          `),p(3,"img",5),e(4,`
        `),r(),e(5,`
      `))}function Tu(i,n){i&1&&(e(0,`
        `),d(1,"p"),e(2,`\u6BB5\u843D\u793A\u610F\uFF1A\u8682\u8681\u91D1\u670D\u52A1\u8BBE\u8BA1\u5E73\u53F0
          ant.design\uFF0C\u7528\u6700\u5C0F\u7684\u5DE5\u4F5C\u91CF\uFF0C\u65E0\u7F1D\u63A5\u5165\u8682\u8681\u91D1\u670D\u751F\u6001\uFF0C\u63D0\u4F9B\u8DE8\u8D8A\u8BBE\u8BA1\u4E0E\u5F00\u53D1\u7684\u4F53\u9A8C\u89E3\u51B3\u65B9\u6848\u3002`),r(),e(3,`
        `),d(4,"div",6),e(5,`
          `),d(6,"a",7),e(7,`
            `),p(8,"img",8),e(9,`\u5FEB\u901F\u5F00\u59CB
          `),r(),e(10,`
          `),d(11,"a",7),e(12,`
            `),p(13,"img",9),e(14,`\u4EA7\u54C1\u7B80\u4ECB
          `),r(),e(15,`
          `),d(16,"a",10),e(17,`
            `),p(18,"img",11),e(19,`\u4EA7\u54C1\u6587\u6863
          `),r(),e(20,`
        `),r(),e(21,`
      `))}var id=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-page-header-image"]],decls:13,vars:4,consts:[["breadcrumb",""],["extra",""],["content",""],[3,"title","breadcrumb","extra","content"],[2,"margin-top","-60px","text-align","center","width","195px"],["src","https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png",1,"img-fluid"],[1,"d-flex","pt-md"],[1,"d-flex","pr-lg"],["src","https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg",1,"pr-sm"],["src","https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg",1,"pr-sm"],[1,"d-flex"],["src","https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg",1,"pr-sm"]],template:function(t,o){if(t&1&&(e(0,`
    `),d(1,"page-header",3),e(2,`
      `),f(3,zu,16,0,"ng-template",null,0,I),e(5,`
      `),f(6,_u,6,0,"ng-template",null,1,I),e(8,`
      `),f(9,Tu,22,0,"ng-template",null,2,I),e(11,`
    `),r(),e(12,`
  `)),t&2){let a=v(4),s=v(7),m=v(10);l(),c("title","\u5361\u7247\u5217\u8868")("breadcrumb",a)("extra",s)("content",m)}},dependencies:[no,Go,qo,Uo],encapsulation:2})};function wu(i,n){i&1&&(e(0,`
        `),d(1,"nz-breadcrumb"),e(2,`
          `),d(3,"nz-breadcrumb-item")(4,"a"),e(5,"\u4E00\u7EA7\u83DC\u5355"),r()(),e(6,`
          `),d(7,"nz-breadcrumb-item")(8,"a"),e(9,"\u4E8C\u7EA7\u83DC\u5355"),r()(),e(10,`
          `),d(11,"nz-breadcrumb-item")(12,"a"),e(13,"\u4E09\u7EA7\u83DC\u5355"),r()(),e(14,`
        `),r(),e(15,`
      `))}var dd=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-page-header-simple"]],decls:7,vars:2,consts:[["breadcrumb",""],[3,"title","breadcrumb"]],template:function(t,o){if(t&1&&(e(0,`
    `),d(1,"page-header",1),e(2,`
      `),f(3,wu,16,0,"ng-template",null,0,I),e(5,`
    `),r(),e(6,`
  `)),t&2){let a=v(4);l(),c("title","\u9875\u9762\u6807\u9898")("breadcrumb",a)}},dependencies:[no,Go,qo,Uo],encapsulation:2})};var rd=class i{item={cols:1,urls:{"en-US":"packages/abc/page-header/index.en-US.md","zh-CN":"packages/abc/page-header/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>The page header is used to declare the subject of the page and contains the most important information that the user is concerned about, so that the user can quickly understand what the current page and functions.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="page-header"><a class="lake-link"><i data-anchor="page-header"></i></a>page-header</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>Title of the page</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[titleSub]</code></td><td>Sub title of the page</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[autoTitle]</code></td><td>Whether to automatically generate the title and locate it from the main menu with the current route</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[syncTitle]</code></td><td>Whether to automatically synchronize the title to <code>TitleService</code>, <code>ReuseService</code>, only valid when <code>title</code> is of type <code>string</code></td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[home]</code></td><td>Home page text of the breadcrumb, if empty is specified, it will not be displayed</td><td><code>string</code></td><td><code>\u9996\u9875</code></td><td>\u2705</td></tr><tr><td><code>[homeLink]</code></td><td>Home page link of the breadcrumb</td><td><code>string</code></td><td><code>/</code></td><td>\u2705</td></tr><tr><td><code>[homeI18n]</code></td><td>Home page i18n of the breadcrumb</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[autoBreadcrumb]</code></td><td>Whether to automatically generate navigation, use the current route to locate from the main menu</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[recursiveBreadcrumb]</code></td><td>Search automatically upward recursively, if the menu data source contains <code>/ware</code>, then <code>/ware/1</code> is also regarded as <code>/ware</code> item</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[loading]</code></td><td>Whether loading</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[wide]</code></td><td>Whether wide</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[fixed]</code></td><td>Whether fixed mode</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[fixedOffsetTop]</code></td><td>Fixed offset of the fixed mode</td><td><code>number</code></td><td><code>64</code></td><td>\u2705</td></tr><tr><td><code>[breadcrumb]</code></td><td>Custom navigation area</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[logo]</code></td><td>Custom LOGO area</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[action]</code></td><td>Custom action area</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[content]</code></td><td>Custom content area</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[extra]</code></td><td>Customize extra information area</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[tab]</code></td><td>Custom tab area</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr></tbody></table><h2 id="FAQ"><a class="lake-link"><i data-anchor="FAQ"></i></a>FAQ</h2><h3 id="Automaticallygeneratednavigation"><a class="lake-link"><i data-anchor="Automaticallygeneratednavigation"></i></a>Automaticallygeneratednavigation</h3><p>By default, the navigation is automatically generated based on the menu data. Sometimes you may want to hide the menu data of a certain node, you can specify the menu <code>hideInBreadcrumb: true</code>.</p><h3 id="Fixedmode"><a class="lake-link"><i data-anchor="Fixedmode"></i></a>Fixedmode</h3><p>The fixed mode will override the reuse-tab component during scrolling.</p>',meta:{type:"Layout",title:"page-header",subtitle:"Page Header",cols:1,module:"import { PageHeaderModule } from '@delon/abc/page-header';"},toc:[{id:"API",title:"API",h:2,children:[{id:"page-header",title:"page-header",h:3}]},{id:"FAQ",title:"FAQ",h:2,children:[{id:"Automaticallygeneratednavigation",title:"Automatically generated navigation",h:3},{id:"Fixedmode",title:"Fixed mode",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u9875\u5934\u7528\u6765\u58F0\u660E\u9875\u9762\u7684\u4E3B\u9898\uFF0C\u5305\u542B\u4E86\u7528\u6237\u6240\u5173\u6CE8\u7684\u6700\u91CD\u8981\u7684\u4FE1\u606F\uFF0C\u4F7F\u7528\u6237\u53EF\u4EE5\u5FEB\u901F\u7406\u89E3\u5F53\u524D\u9875\u9762\u662F\u4EC0\u4E48\u4EE5\u53CA\u5B83\u7684\u529F\u80FD\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="page-header"><a class="lake-link"><i data-anchor="page-header"></i></a>page-header</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>\u6807\u9898\u540D</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[titleSub]</code></td><td>\u5B50\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[autoTitle]</code></td><td>\u662F\u5426\u81EA\u52A8\u751F\u6210\u6807\u9898\uFF0C\u4EE5\u5F53\u524D\u8DEF\u7531\u4ECE\u4E3B\u83DC\u5355\u4E2D\u5B9A\u4F4D</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[syncTitle]</code></td><td>\u662F\u5426\u81EA\u52A8\u5C06\u6807\u9898\u540C\u6B65\u81F3 <code>TitleService</code>\u3001<code>ReuseService</code> \u4E0B\uFF0C\u4EC5 <code>title</code> \u4E3A <code>string</code> \u7C7B\u578B\u65F6\u6709\u6548</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[home]</code></td><td>\u9996\u9875\u6587\u672C\uFF0C\u82E5\u6307\u5B9A\u7A7A\u8868\u793A\u4E0D\u663E\u793A</td><td><code>string</code></td><td><code>\u9996\u9875</code></td><td>\u2705</td></tr><tr><td><code>[homeLink]</code></td><td>\u9996\u9875\u94FE\u63A5</td><td><code>string</code></td><td><code>/</code></td><td>\u2705</td></tr><tr><td><code>[homeI18n]</code></td><td>\u9996\u9875\u94FE\u63A5\u56FD\u9645\u5316\u53C2\u6570</td><td><code>string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[autoBreadcrumb]</code></td><td>\u662F\u5426\u81EA\u52A8\u751F\u6210\u5BFC\u822A\uFF0C\u4EE5\u5F53\u524D\u8DEF\u7531\u4ECE\u4E3B\u83DC\u5355\u4E2D\u5B9A\u4F4D</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[recursiveBreadcrumb]</code></td><td>\u662F\u5426\u81EA\u52A8\u5411\u4E0A\u9012\u5F52\u67E5\u627E\uFF0C\u83DC\u5355\u6570\u636E\u6E90\u5305\u542B <code>/ware</code>\uFF0C\u5219 <code>/ware/1</code> \u4E5F\u89C6\u4E3A <code>/ware</code> \u9879</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[loading]</code></td><td>\u662F\u5426\u52A0\u8F7D\u4E2D</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[wide]</code></td><td>\u662F\u5426\u5B9A\u5BBD</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[fixed]</code></td><td>\u662F\u5426\u56FA\u5B9A\u6A21\u5F0F</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[fixedOffsetTop]</code></td><td>\u56FA\u5B9A\u504F\u79FB\u503C</td><td><code>number</code></td><td><code>64</code></td><td>\u2705</td></tr><tr><td><code>[breadcrumb]</code></td><td>\u81EA\u5B9A\u4E49\u5BFC\u822A\u533A\u57DF</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[logo]</code></td><td>\u81EA\u5B9A\u4E49LOGO\u533A\u57DF</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[action]</code></td><td>\u81EA\u5B9A\u4E49\u64CD\u4F5C\u533A\u57DF</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[content]</code></td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9\u533A\u57DF</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[extra]</code></td><td>\u81EA\u5B9A\u4E49\u989D\u5916\u4FE1\u606F\u533A\u57DF</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[tab]</code></td><td>\u81EA\u5B9A\u4E49\u6807\u7B7E\u533A\u57DF</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr></tbody></table><h2 id="\u5E38\u89C1\u95EE\u9898"><a class="lake-link"><i data-anchor="\u5E38\u89C1\u95EE\u9898"></i></a>\u5E38\u89C1\u95EE\u9898</h2><h3 id="\u81EA\u52A8\u751F\u6210\u5BFC\u822A"><a class="lake-link"><i data-anchor="\u81EA\u52A8\u751F\u6210\u5BFC\u822A"></i></a>\u81EA\u52A8\u751F\u6210\u5BFC\u822A</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u6839\u636E\u83DC\u5355\u6570\u636E\u81EA\u52A8\u751F\u6210\u5BFC\u822A\uFF0C\u6709\u65F6\u4F60\u53EF\u80FD\u5E0C\u671B\u9690\u85CF\u67D0\u4E2A\u8282\u70B9\u83DC\u5355\u6570\u636E\u65F6\uFF0C\u53EF\u4EE5\u6307\u5B9A\u83DC\u5355\u7684 <code>hideInBreadcrumb: true</code>\u3002</p><h3 id="\u56FA\u5B9A\u6A21\u5F0F"><a class="lake-link"><i data-anchor="\u56FA\u5B9A\u6A21\u5F0F"></i></a>\u56FA\u5B9A\u6A21\u5F0F</h3><p>\u56FA\u5B9A\u6A21\u5F0F\u5728\u6EDA\u52A8\u8FC7\u7A0B\u4E2D\u4F1A\u8986\u76D6 <code>reuse-tab</code> \u7EC4\u4EF6\u3002</p>',meta:{type:"Layout",title:"page-header",subtitle:"\u9875\u5934",cols:1,module:"import { PageHeaderModule } from '@delon/abc/page-header';"},toc:[{id:"API",title:"API",h:2,children:[{id:"page-header",title:"page-header",h:3}]},{id:"\u5E38\u89C1\u95EE\u9898",title:"\u5E38\u89C1\u95EE\u9898",h:2,children:[{id:"\u81EA\u52A8\u751F\u6210\u5BFC\u822A",title:"\u81EA\u52A8\u751F\u6210\u5BFC\u822A",h:3},{id:"\u56FA\u5B9A\u6A21\u5F0F",title:"\u56FA\u5B9A\u6A21\u5F0F",h:3}]}]}},demo:!0};codes=[{id:"components-page-header-structure",meta:{order:0,title:{"en-US":"Structure","zh-CN":"\u57FA\u672C\u7ED3\u6784"},bg:"f2f4f5"},summary:"<p>\u57FA\u672C\u7ED3\u6784\uFF0C\u5177\u5907\u54CD\u5E94\u5F0F\u5E03\u5C40\u529F\u80FD\uFF0C\u4E3B\u8981\u65AD\u70B9\u4E3A 768px \u548C 576px\uFF0C\u62D6\u52A8\u7A97\u53E3\u6539\u53D8\u5927\u5C0F\u8BD5\u8BD5\u770B\u3002</p>",code:`import { Component, ViewEncapsulation } from '@angular/core';

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
          <nz-icon nzType="ellipsis" />
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
  imports: [PageHeaderComponent, NzBreadCrumbModule]
})
export class ComponentsPageHeaderSimpleComponent {}`,lang:"ts",componentName:"ComponentsPageHeaderSimpleComponent",point:3,name:"simple",urls:"packages/abc/page-header/demo/simple.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-page-header"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:24,vars:11,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-page-header-structure"),e(7,`
        `),r(),e(8,`
      
        `),d(9,"code-box",3),e(10,`
          `),p(11,"components-page-header-standard"),e(12,`
        `),r(),e(13,`
      
        `),d(14,"code-box",3),e(15,`
          `),p(16,"components-page-header-image"),e(17,`
        `),r(),e(18,`
      
        `),d(19,"code-box",3),e(20,`
          `),p(21,"components-page-header-simple"),e(22,`
        `),r(),e(23,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id),l(5),c("item",o.codes[1]),_("id",o.codes[1].id),l(5),c("item",o.codes[2]),_("id",o.codes[2].id),l(5),c("item",o.codes[3]),_("id",o.codes[3].id))},dependencies:[O,od,nd,id,dd,R,P,j],encapsulation:2})};var Hl={lib:"https://cdn.jsdelivr.net/npm/pdfjs-dist@3.6.x/",showAll:!0,renderText:!0,showBorders:!1,originalSize:!0,fitToPage:!1,autoReSize:!0};function ku(i,n){i&1&&p(0,"nz-skeleton")}var Wl=96/72,Du=9,ho=class ho{lazySrv=y($e);platform=y(ye);_el=y(Ct).nativeElement;doc=y(ge);cdr=y(ct);ngZone=y(Xt);destroy$=y(Bt);inited=!1;lib="";_pdf;loadingTask;_src;lastSrc;_pi=1;_total=0;_showAll=!0;_rotation=0;_zoom=1;_renderText=!0;_loading=!1;multiPageViewer;multiPageLinkService;multiPageFindController;singlePageViewer;singlePageLinkService;singlePageFindController;_eventBus;set src(n){this._src=n,this.load()}set pi(n){this._pi=this.getValidPi(n),this.pageViewer&&this.pageViewer.scrollPageIntoView({pageNumber:this._pi})}set showAll(n){this._showAll=n,this.resetDoc()}set renderText(n){this._renderText=n,this.pageViewer&&this.resetDoc()}textLayerMode=1;showBorders=!1;stickToPage=!1;originalSize=!0;fitToPage=!1;set zoom(n){n<=0||(this._zoom=n)}zoomScale="page-width";set rotation(n){if(n%90!==0){console.warn("Invalid rotation angle, shoule be divisible by 90.");return}this._rotation=n}autoReSize=!0;externalLinkTarget=2;delay;change=new At;get loading(){return this._loading}get pdf(){return this._pdf}get findController(){return this._showAll?this.multiPageFindController:this.singlePageFindController}get pageViewer(){return this._showAll?this.multiPageViewer:this.singlePageViewer}get linkService(){return this._showAll?this.multiPageLinkService:this.singlePageLinkService}get eventBus(){return this._eventBus}get _textLayerMode(){return this._renderText?this.textLayerMode:0}get win(){return this.doc.defaultView||window}get el(){return this._el.querySelector(".pdf-container")}constructor(n){let t=n.merge("pdf",Hl);Object.assign(this,t);let o=t.lib;this.lib=o.endsWith("/")?o:`${o}/`}getValidPi(n){if(n<1)return 1;let t=this._pdf;return t&&n>t.numPages?t.numPages:n}emit(n,t){this.ngZone.run(()=>this.change.emit(ft({type:n,pdf:this._pdf,pi:this._pi,total:this._total},t)))}initDelay(){if(!this.win.pdfjsLib)throw new Error(`No window.pdfjsLib found, please make sure that cdn or local path exists, the current referenced path is: ${JSON.stringify(this.lib)}`);this.inited=!0,this.cdr.detectChanges(),this.win.pdfjsLib.GlobalWorkerOptions.workerSrc=`${this.lib}build/pdf.worker.min.js`,Ae(this.delay??0).pipe(zt(this.destroy$)).subscribe(()=>this.load())}setLoading(n){this.ngZone.run(()=>{this._loading=n,this.cdr.detectChanges()})}load(){let{_src:n}=this;if(!this.inited||!n)return;if(this.lastSrc===n){this.render();return}this.destroy(),this.ngZone.run(()=>{this._loading=!0,this.cdr.detectChanges()}),this.setLoading(!0);let t=this.loadingTask=this.win.pdfjsLib.getDocument(n);t.onProgress=o=>this.emit("load-progress",{progress:o}),t.promise.then(o=>{this._pdf=o,this.lastSrc=n,this._total=o.numPages,this.emit("loaded"),this.pageViewer||this.setupPageViewer(),this.resetDoc(),this.render()},o=>this.emit("error",{error:o})).then(()=>this.setLoading(!1))}resetDoc(){let n=this._pdf;n&&(this.cleanDoc(),this.findController.setDocument(n),this.pageViewer.setDocument(n),this.linkService.setDocument(n,null))}cleanDoc(){this.multiPageViewer.setDocument(null),this.singlePageViewer.setDocument(null),this.multiPageLinkService.setDocument(null,null),this.singlePageLinkService.setDocument(null,null),this.multiPageFindController.setDocument(null),this.singlePageFindController.setDocument(null)}render(){let n=this.pageViewer;n&&((this._rotation!==0||n.pagesRotation!==this._rotation)&&this.timeExec(()=>{n.pagesRotation=this._rotation}),this.stickToPage&&this.timeExec(()=>{n.currentPageNumber=this._pi}),this.updateSize())}timeExec(n){this.ngZone.runOutsideAngular(()=>{Ae(0).pipe(zt(this.destroy$)).subscribe(()=>this.ngZone.runOutsideAngular(()=>n()))})}updateSize(){let n=this.pageViewer;n&&this._pdf.getPage(n.currentPageNumber).then(t=>{let{_rotation:o,_zoom:a}=this,s=o||t.rotate,m=t.getViewport({scale:a,rotation:s}).width*Wl,D=a;if(!this.originalSize||this.fitToPage&&m>this.el.clientWidth){let V=t.getViewport({scale:1,rotation:s});D=this.getScale(V.width,V.height)}n.currentScale=D})}getScale(n,t){let o=this.showBorders?2*Du:0,a=this.el,s=a.clientWidth-o,m=a.clientHeight-o;if(m===0||t===0||s===0||n===0)return 1;let D=1;switch(this.zoomScale){case"page-fit":D=Math.min(m/t,s/n);break;case"page-height":D=m/t;break;case"page-width":default:D=s/n;break}return this._zoom*D/Wl}destroy(){let{loadingTask:n}=this;n&&!n.destroyed&&n.destroy(),this._pdf&&(this._pdf.destroy(),this._pdf=null,this.cleanDoc())}setupPageViewer(){this.win.pdfjsLib.disableTextLayer=!this._renderText,this.win.pdfjsLib.externalLinkTarget=this.externalLinkTarget,this.setupMultiPageViewer(),this.setupSinglePageViewer()}createEventBus(){let n=new this.win.pdfjsViewer.EventBus;return n.on("pagesinit",t=>{this.emit("pages-init",{ev:t})}),n.on("pagerendered",t=>{this.emit("page-rendered",{ev:t})}),n.on("pagechanging",t=>{let o=t.pageNumber;o!==this._pi&&(this._pi=o,this.emit("pi",{ev:t}))}),n.on("textlayerrendered",t=>{this.emit("text-layer-rendered",{ev:t})}),n}setupMultiPageViewer(){let n=this.win.pdfjsViewer,t=this._eventBus=this.createEventBus(),o=this.multiPageLinkService=new n.PDFLinkService({eventBus:t}),a=this.multiPageFindController=new n.PDFFindController({eventBus:t,linkService:o}),s=this.multiPageViewer=new n.PDFViewer({eventBus:t,container:this.el,removePageBorders:!this.showBorders,textLayerMode:this._textLayerMode,linkService:o,findController:a});o.setViewer(s)}setupSinglePageViewer(){let n=this.win.pdfjsViewer,t=this.createEventBus(),o=this.singlePageLinkService=new n.PDFLinkService({eventBus:t}),a=this.singlePageFindController=new n.PDFFindController({eventBus:t,linkService:o}),s=this.singlePageViewer=new n.PDFSinglePageViewer({eventBus:t,container:this.el,removePageBorders:!this.showBorders,textLayerMode:this._textLayerMode,linkService:o,findController:a});o.setViewer(s),s._currentPageNumber=this._pi}ngAfterViewInit(){if(!this.platform.isBrowser)return;if(this.win.pdfjsLib){this.initDelay();return}let{lib:n}=this;this.lazySrv.load(`${n}build/pdf.min.js`).then(()=>this.lazySrv.load([`${n}web/pdf_viewer.js`,`${n}web/pdf_viewer.css`])).then(()=>this.initDelay()),this.ngZone.runOutsideAngular(()=>this.initResize())}initResize(){jr(this.win,"resize").pipe(Ur(100),He(()=>this.autoReSize&&this._pdf!=null),zt(this.destroy$)).subscribe(()=>this.updateSize())}ngOnChanges(n){this.inited&&!n.src&&this.render()}ngOnDestroy(){this.destroy()}static \u0275fac=function(t){return new(t||ho)(tt(It))};static \u0275cmp=u({type:ho,selectors:[["pdf"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block",!0)},inputs:{src:"src",pi:[2,"pi","pi",dt],showAll:[2,"showAll","showAll",X],renderText:[2,"renderText","renderText",X],textLayerMode:"textLayerMode",showBorders:[2,"showBorders","showBorders",X],stickToPage:[2,"stickToPage","stickToPage",X],originalSize:[2,"originalSize","originalSize",X],fitToPage:[2,"fitToPage","fitToPage",X],zoom:[2,"zoom","zoom",dt],zoomScale:"zoomScale",rotation:[2,"rotation","rotation",dt],autoReSize:[2,"autoReSize","autoReSize",X],externalLinkTarget:"externalLinkTarget",delay:[2,"delay","delay",dt]},outputs:{change:"change"},exportAs:["pdf"],features:[gt,Rt],decls:3,vars:1,consts:[[1,"pdf-container"],[1,"pdfViewer"]],template:function(t,o){t&1&&(f(0,ku,1,0,"nz-skeleton"),d(1,"div",0),p(2,"div",1),r()),t&2&&w(!o.inited||o.loading?0:-1)},dependencies:[Xa],encapsulation:2,changeDetection:0})};Re([Le()],ho.prototype,"load",1),Re([Le()],ho.prototype,"resetDoc",1),Re([Le()],ho.prototype,"updateSize",1),Re([Le()],ho.prototype,"destroy",1);var fo=ho;var ad=class i{one="https://raw.githubusercontent.com/mozilla/pdf.js/master/web/compressed.tracemonkey-pldi-09.pdf";two="https://raw.githubusercontent.com/mozilla/pdf.js/master/examples/learning/helloworld.pdf";src=this.one;handle(n){console.log(n)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-pdf-basic"]],decls:6,vars:1,consts:[["nz-button","","nzType","primary",3,"click"],[2,"height","300px",3,"change","src"]],template:function(t,o){t&1&&(e(0,`
    `),d(1,"button",0),b("click",function(){return o.src=o.src===o.one?o.two:o.one}),e(2,"Change File"),r(),e(3,`
    `),d(4,"pdf",1),b("change",function(s){return o.handle(s)}),r(),e(5,`
  `)),t&2&&(l(4),c("src",o.src))},dependencies:[E,k,M,N,fo],encapsulation:2})};var Ul=["*"];function Mu(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(2);l(),B(t.title)}}function Nu(i,n){if(i&1&&(d(0,"div",0),f(1,Mu,2,1,"ng-container",1),r()),i&2){let t=h();l(),c("nzStringTemplateOutlet",t.title)}}var tn=class i{parentComp=y(Mt,{host:!0,optional:!0});el=y(Ct).nativeElement;ren=y(Yt);constructor(){if(this.parentComp==null)throw new Error("[se-title] must include 'se-container' component")}setClass(){let{el:n}=this,t=this.parentComp.gutter;this.ren.setStyle(n,"padding-left",`${t/2}px`),this.ren.setStyle(n,"padding-right",`${t/2}px`)}ngOnInit(){this.setClass()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["se-title"],["","se-title",""]],hostVars:2,hostBindings:function(t,o){t&2&&T("se__title",!0)},exportAs:["seTitle"],ngContentSelectors:Ul,decls:1,vars:0,template:function(t,o){t&1&&(Z(),H(0))},encapsulation:2,changeDetection:0})},Mt=class i{errorNotify$=new vn(null);colInCon;col;labelWidth;noColon=!1;title;get gutter(){return this.nzLayout==="horizontal"?this._gutter:0}set gutter(n){this._gutter=n}_gutter;get nzLayout(){return this._nzLayout}set nzLayout(n){this._nzLayout=n,n==="inline"&&(this.size="compact")}_nzLayout;size;firstVisual;ingoreDirty;line=!1;set errors(n){this.setErrors(n)}get margin(){return-(this.gutter/2)}get errorNotify(){return this.errorNotify$.pipe(He(n=>n!=null))}constructor(n){n.attach(this,"se",{size:"default",nzLayout:"horizontal",gutter:32,col:2,labelWidth:150,firstVisual:!1,ingoreDirty:!1})}setErrors(n){for(let t of n)this.errorNotify$.next(t)}static \u0275fac=function(t){return new(t||i)(tt(It))};static \u0275cmp=u({type:i,selectors:[["se-container"],["","se-container",""]],hostVars:16,hostBindings:function(t,o){t&2&&(Et("margin-left",o.margin,"px")("margin-right",o.margin,"px"),T("ant-row",!0)("se__container",!0)("se__horizontal",o.nzLayout==="horizontal")("se__vertical",o.nzLayout==="vertical")("se__inline",o.nzLayout==="inline")("se__compact",o.size==="compact"))},inputs:{colInCon:[2,"se-container","colInCon",n=>n==null?null:dt(n)],col:[2,"col","col",n=>n==null?null:dt(n)],labelWidth:[2,"labelWidth","labelWidth",n=>n==null?null:dt(n)],noColon:[2,"noColon","noColon",X],title:"title",gutter:[2,"gutter","gutter",dt],nzLayout:"nzLayout",size:"size",firstVisual:[2,"firstVisual","firstVisual",X],ingoreDirty:[2,"ingoreDirty","ingoreDirty",X],line:[2,"line","line",X],errors:"errors"},exportAs:["seContainer"],features:[gt],ngContentSelectors:Ul,decls:2,vars:1,consts:[["se-title",""],[4,"nzStringTemplateOutlet"]],template:function(t,o){t&1&&(Z(),f(0,Nu,2,1,"div",0),H(1)),t&2&&w(o.title?0:-1)},dependencies:[tn,Pt],encapsulation:2,changeDetection:0})};var Eu=["contentElement"],Iu=["*"];function Pu(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(2);l(),B(t.label)}}function Ru(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(3);l(),B(t.optional)}}function Au(i,n){if(i&1&&p(0,"nz-icon",12),i&2){let t=h(3);c("nzTooltipTitle",t.optionalHelp)("nzTooltipColor",t.optionalHelpColor)}}function Fu(i,n){if(i&1&&(d(0,"span",11),f(1,Ru,2,1,"ng-container",9)(2,Au,1,2,"nz-icon",12),r()),i&2){let t=h(2);T("se__label-optional-no-text",!t.optional),l(),c("nzStringTemplateOutlet",t.optional),l(),w(t.optionalHelp?2:-1)}}function Lu(i,n){if(i&1&&(d(0,"label",7)(1,"span",8),f(2,Pu,2,1,"ng-container",9),r(),f(3,Fu,3,4,"span",10),r()),i&2){let t=h();T("ant-form-item-required",t.required)("se__no-colon",t._noColon),_("for",t._id),l(2),c("nzStringTemplateOutlet",t.label),l(),w(t.optional||t.optionalHelp?3:-1)}}function Bu(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(2);l(),B(t._error)}}function Vu(i,n){if(i&1&&(d(0,"div",5)(1,"div",13),f(2,Bu,2,1,"ng-container",9),r()()),i&2){let t=h();c("@helpMotion",void 0),l(2),c("nzStringTemplateOutlet",t._error)}}function Ou(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(2);l(),B(t.extra)}}function ju(i,n){if(i&1&&(d(0,"div",6),f(1,Ou,2,1,"ng-container",9),r()),i&2){let t=h();l(),c("nzStringTemplateOutlet",t.extra)}}var Er="se",Hu=0,Ft=class i{parentComp=y(Mt,{host:!0,optional:!0});el=y(Ct).nativeElement;rep=y(Mo);ren=y(Yt);cdr=y(ct);statusSrv=y(Cr);destroy$=y(Bt);ngModel;formControlName;contentElement;clsMap=[];inited=!1;onceFlag=!1;errorData={};isBindModel=!1;invalid=!1;_labelWidth=null;_noColon=null;_error;optional=null;optionalHelp=null;optionalHelpColor;set error(n){this.errorData=typeof n=="string"||n instanceof qe?{"":n}:n}extra;label;col;required=!1;controlClass="";line;labelWidth;noColon;hideLabel=!1;set id(n){this._id=n,this._autoId=!1}_id=`_se-${++Hu}`;_autoId=!0;get paddingValue(){return this.parentComp.gutter/2}get showErr(){return this.invalid&&!!this._error&&!this.compact}get compact(){return this.parentComp.size==="compact"}get ngControl(){return this.ngModel||this.formControlName}constructor(){if(this.parentComp==null)throw new Error("[se] must include 'se-container' component");this.parentComp.errorNotify.pipe(zt(),He(n=>this.inited&&this.ngControl!=null&&this.ngControl.name===n.name)).subscribe(n=>{this.error=n.error,this.updateStatus(this.ngControl.invalid)})}setClass(){let{el:n,ren:t,clsMap:o,col:a,cdr:s,line:m,labelWidth:D,rep:V,noColon:mt}=this,q=this.parentComp;this._noColon=mt??q.noColon,this._labelWidth=q.nzLayout==="horizontal"?D??q.labelWidth:null,o.forEach(me=>t.removeClass(n,me)),o.length=0;let _t=q.colInCon||q.col,Lt=q.nzLayout==="horizontal"?V.genCls(a??_t,_t):[];return o.push("ant-form-item",...Lt,`${Er}__item`),(m||q.line)&&o.push(`${Er}__line`),o.forEach(me=>t.addClass(n,me)),s.detectChanges(),this}bindModel(){if(!(!this.ngControl||this.isBindModel)){if(this.isBindModel=!0,this.ngControl.statusChanges.pipe(zt(this.destroy$)).subscribe(n=>this.updateStatus(n==="INVALID")),this._autoId){let n=this.ngControl.valueAccessor,t=(n?.elementRef||n?._elementRef)?.nativeElement;t&&(t.id?this._id=t.id:t.id=this._id)}if(this.required!==!0){let n=this.ngControl?.control?.hasValidator(le.required);n!==!0&&(n=(this.ngControl?._rawValidators).find(o=>o instanceof te)!=null),this.required=n,this.cdr.detectChanges()}}}updateStatus(n){if(this.ngControl?.disabled||this.ngControl?.isDisabled)return;this.invalid=!this.onceFlag&&n&&this.parentComp.ingoreDirty===!1&&!this.ngControl?.dirty?!1:n;let t=this.ngControl?.errors;if(t!=null&&Object.keys(t).length>0){let o=Object.keys(t)[0]||"",a=this.errorData[o];this._error=a??(this.errorData[""]||"")}this.statusSrv.formStatusChanges.next({status:this.invalid?"error":"",hasFeedback:!1}),this.cdr.detectChanges()}checkContent(){let n=this.contentElement.nativeElement,t=`${Er}__item-empty`;No(n)?this.ren.addClass(n,t):this.ren.removeClass(n,t)}ngAfterContentInit(){this.checkContent()}ngOnChanges(){this.onceFlag=this.parentComp.firstVisual,this.inited&&this.setClass().bindModel()}ngAfterViewInit(){this.setClass().bindModel(),this.inited=!0,this.onceFlag&&Promise.resolve().then(()=>{this.updateStatus(this.ngControl?.invalid),this.onceFlag=!1})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["se"]],contentQueries:function(t,o,a){if(t&1&&(Kt(a,pt,7),Kt(a,De,7)),t&2){let s;W(s=U())&&(o.ngModel=s.first),W(s=U())&&(o.formControlName=s.first)}},viewQuery:function(t,o){if(t&1&&ot(Eu,7),t&2){let a;W(a=U())&&(o.contentElement=a.first)}},hostVars:10,hostBindings:function(t,o){t&2&&(Et("padding-left",o.paddingValue,"px")("padding-right",o.paddingValue,"px"),T("se__hide-label",o.hideLabel)("ant-form-item-has-error",o.invalid)("ant-form-item-with-help",o.showErr))},inputs:{optional:"optional",optionalHelp:"optionalHelp",optionalHelpColor:"optionalHelpColor",error:"error",extra:"extra",label:"label",col:[2,"col","col",n=>n==null?null:dt(n)],required:[2,"required","required",X],controlClass:"controlClass",line:[2,"line","line",n=>n==null?null:X(n)],labelWidth:[2,"labelWidth","labelWidth",n=>n==null?null:dt(n)],noColon:[2,"noColon","noColon",n=>n==null?null:X(n)],hideLabel:[2,"hideLabel","hideLabel",X],id:"id"},exportAs:["se"],features:[Fe([Cr]),gt,Rt],ngContentSelectors:Iu,decls:9,vars:10,consts:[["contentElement",""],[1,"ant-form-item-label"],[1,"se__label",3,"ant-form-item-required","se__no-colon"],[1,"ant-form-item-control","se__control"],[1,"ant-form-item-control-input-content",3,"cdkObserveContent"],[1,"ant-form-item-explain","ant-form-item-explain-connected"],[1,"ant-form-item-extra"],[1,"se__label"],[1,"se__label-text"],[4,"nzStringTemplateOutlet"],[1,"se__label-optional",3,"se__label-optional-no-text"],[1,"se__label-optional"],["nz-tooltip","","nzType","question-circle",3,"nzTooltipTitle","nzTooltipColor"],["role","alert",1,"ant-form-item-explain-error"]],template:function(t,o){if(t&1){let a=z();Z(),d(0,"div",1),f(1,Lu,4,7,"label",2),r(),d(2,"div",3)(3,"div")(4,"div",4,0),b("cdkObserveContent",function(){return g(a),C(o.checkContent())}),H(6),r()(),f(7,Vu,3,2,"div",5)(8,ju,2,1,"div",6),r()}t&2&&(Et("width",o._labelWidth,"px"),T("se__nolabel",o.hideLabel||!o.label),l(),w(o.label?1:-1),l(2),Dn("ant-form-item-control-input ",o.controlClass,""),l(4),w(o.showErr?7:-1),l(),w(o.extra&&!o.compact?8:-1))},dependencies:[Pt,ee,bt,Qe],encapsulation:2,data:{animation:[va]},changeDetection:0})};var Ot=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=$t({type:i});static \u0275inj=Gt({imports:[Ce,Se,Vt,xe]})};var Uu=["pdf"],qu=(i,n)=>({$implicit:i,level:n}),Gu=i=>({$implicit:i,level:0});function $u(i,n){if(i&1){let t=z();e(0,`
            `),d(1,"se",26),e(2,`
              `),d(3,"nz-switch",14),L("ngModelChange",function(a){g(t);let s=h();return A(s.fitToPage,a)||(s.fitToPage=a),C(a)}),r(),e(4,`
            `),r(),e(5,`
          `)}if(i&2){let t=h();l(3),F("ngModel",t.fitToPage)}}function Qu(i,n){if(i&1){let t=z();e(0,`
            `),d(1,"se",27),e(2,`
              `),d(3,"nz-select",14),L("ngModelChange",function(a){g(t);let s=h();return A(s.zoomScale,a)||(s.zoomScale=a),C(a)}),e(4,`
                `),p(5,"nz-option",28),e(6,`
                `),p(7,"nz-option",29),e(8,`
                `),p(9,"nz-option",30),e(10,`
              `),r(),e(11,`
            `),r(),e(12,`
          `)}if(i&2){let t=h();l(3),F("ngModel",t.zoomScale)}}function Zu(i,n){if(i&1){let t=z();e(0,`
            `),d(1,"se",31),e(2,`
              `),d(3,"nz-switch",14),L("ngModelChange",function(a){g(t);let s=h();return A(s.stickToPage,a)||(s.stickToPage=a),C(a)}),r(),e(4,`
            `),r(),e(5,`
          `)}if(i&2){let t=h();l(3),F("ngModel",t.stickToPage)}}function Xu(i,n){if(i&1){let t=z();e(0,`
            `),d(1,"se",32),e(2,`
              `),d(3,"nz-pagination",33),L("nzPageIndexChange",function(a){g(t);let s=h();return A(s.pi,a)||(s.pi=a),C(a)}),r(),e(4,`
            `),r(),e(5,`
          `)}if(i&2){let t=h();l(3),F("nzPageIndex",t.pi),c("nzPageSize",1)("nzTotal",t.total)}}function Ku(i,n){i&1&&(e(0,`
                `),p(1,"nz-empty"),e(2,`
              `))}function Ju(i,n){i&1&&he(0)}function Yu(i,n){if(i&1&&(e(0,`
                      `),d(1,"ul"),e(2,`
                        `),f(3,Ju,1,0,"ng-container",36),e(4,`
                      `),r(),e(5,`
                    `)),i&2){let t=h().$implicit,o=h().level;h();let a=v(5);l(3),c("ngTemplateOutlet",a)("ngTemplateOutletContext",yo(2,qu,t.items,o+1))}}function t0(i,n){if(i&1){let t=z();e(0,`
                  `),d(1,"li"),e(2,`
                    `),d(3,"a",35),b("click",function(){let a=g(t).$implicit,s=h(3);return C(s.navigateTo(a.dest))}),e(4),r(),e(5,`
                    `),f(6,Yu,6,5),r(),e(7,`
                `)}if(i&2){let t=n.$implicit,o=h().level;l(),Et("padding-left",o*16,"px"),l(3),B(t.title),l(2),w(t.items&&t.items.length>0?6:-1)}}function e0(i,n){if(i&1&&(e(0,`
                `),xt(1,t0,8,4,null,null,St)),i&2){let t=n.$implicit;l(),vt(t)}}function o0(i,n){i&1&&he(0)}function n0(i,n){if(i&1&&(e(0,`
                `),d(1,"ul"),e(2,`
                  `),f(3,o0,1,0,"ng-container",36),e(4,`
                `),r(),e(5,`
              `)),i&2){h();let t=v(5),o=h();l(3),c("ngTemplateOutlet",t)("ngTemplateOutletContext",Q(2,Gu,o.outlineList))}}function i0(i,n){if(i&1&&(e(0,`
            `),d(1,"se",34),e(2,`
              `),f(3,Ku,3,0)(4,e0,3,0,"ng-template",null,3,I),e(6,`
              `),f(7,n0,6,4),r(),e(8,`
          `)),i&2){let t=h();l(),c("label",null),l(2),w(t.outlineList===null?3:-1),l(4),w(t.outlineList?7:-1)}}var ld=class i{constructor(n){this.cdr=n}comp;src="https://raw.githubusercontent.com/mozilla/pdf.js/master/web/compressed.tracemonkey-pldi-09.pdf";pi=1;total=0;renderText=!0;stickToPage=!0;originalSize=!0;fitToPage=!1;showAll=!0;zoomScale="page-width";rotation=0;zoom=1;autoReSize=!0;outline=!1;outlineList=null;q="";search$=new Zt;ngOnInit(){this.search$.subscribe(n=>{n!==this.q?(this.q=n,this.comp.eventBus?.dispatch("find",{query:this.q,highlightAll:!0})):this.comp.eventBus?.dispatch("findagain",{query:this.q,highlightAll:!0})})}change(n){switch(n.type){case"loaded":this.total=n.total,this.loadOutline();break;case"pi":this.pi=n.pi;break}n.type!=="load-progress"&&console.log(n)}uploadSrc(n){this.src=n}changeShowAllPages(n){this.stickToPage=!0}beforeUpload=n=>{let t=new FileReader;return t.onload=o=>{this.src=o.target.result,this.cdr.detectChanges()},t.readAsArrayBuffer(n),!1};loadOutline(){this.comp.pdf?.getOutline().then(n=>{this.outlineList=n})}navigateTo(n){this.comp.linkService?.goToDestination(n)}static \u0275fac=function(t){return new(t||i)(tt(ct))};static \u0275cmp=u({type:i,selectors:[["components-pdf-design"]],viewQuery:function(t,o){if(t&1&&ot(Uu,5),t&2){let a;W(a=U())&&(o.comp=a.first)}},decls:78,vars:28,consts:[["url",""],["qIpt",""],["pdf",""],["outlineTpl",""],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","8"],["se-container","","col","1"],["label","Url of the pdf file (Press enter to run)"],["nz-input","",3,"keyup.enter","ngModel"],["label","Local of the pdf file"],["nzAccept",".pdf",3,"nzBeforeUpload"],["nz-button",""],["nzType","upload"],["label","Render Text"],[3,"ngModelChange","ngModel"],["label","Original size"],["label","Auto size"],["label","Show All Pages"],["label","Zoom"],[3,"ngModelChange","ngModel","nzStep"],["label","Rotation"],["label","Outline"],["label","Search pdf"],["nz-input","","placeholder","Search...",3,"input","keyup.enter"],["nz-col","","nzSpan","16",2,"background-color","#fafafa","padding","32px 0"],[2,"height","600px",3,"change","src","pi","renderText","showAll","originalSize","fitToPage","stickToPage","zoomScale","zoom","rotation","autoReSize"],["label","Fit to page"],["label","Zoom Scale"],["nzValue","page-height","nzLabel","Page Height"],["nzValue","page-fit","nzLabel","Page Fit"],["nzValue","page-width","nzLabel","Page Width"],["label","Stick to page "],["label","Page"],["nzSimple","",3,"nzPageIndexChange","nzPageIndex","nzPageSize","nzTotal"],[3,"label"],[3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"div",4),e(2,`
      `),d(3,"div",5),e(4,`
        `),d(5,"div",6),e(6,`
          `),d(7,"se",7),e(8,`
            `),d(9,"input",8,0),b("keyup.enter",function(){g(a);let m=v(10);return C(o.uploadSrc(m.value))}),r(),e(11,`
          `),r(),e(12,`
          `),d(13,"se",9),e(14,`
            `),d(15,"nz-upload",10),e(16,`
              `),d(17,"button",11),p(18,"nz-icon",12),e(19,"Select File"),r(),e(20,`
            `),r(),e(21,`
          `),r(),e(22,`
          `),d(23,"se",13),e(24,`
            `),d(25,"nz-switch",14),L("ngModelChange",function(m){return g(a),A(o.renderText,m)||(o.renderText=m),C(m)}),r(),e(26,`
          `),r(),e(27,`
          `),d(28,"se",15),e(29,`
            `),d(30,"nz-switch",14),L("ngModelChange",function(m){return g(a),A(o.originalSize,m)||(o.originalSize=m),C(m)}),r(),e(31,`
          `),r(),e(32,`
          `),f(33,$u,6,1),d(34,"se",16),e(35,`
            `),d(36,"nz-switch",14),L("ngModelChange",function(m){return g(a),A(o.autoReSize,m)||(o.autoReSize=m),C(m)}),r(),e(37,`
          `),r(),e(38,`
          `),d(39,"se",17),e(40,`
            `),d(41,"nz-switch",14),L("ngModelChange",function(m){return g(a),A(o.showAll,m)||(o.showAll=m),C(m)}),b("ngModelChange",function(m){return g(a),C(o.changeShowAllPages(m))}),r(),e(42,`
          `),r(),e(43,`
          `),f(44,Qu,13,1),d(45,"se",18),e(46,`
            `),d(47,"nz-input-number",19),L("ngModelChange",function(m){return g(a),A(o.zoom,m)||(o.zoom=m),C(m)}),r(),e(48,`
          `),r(),e(49,`
          `),f(50,Zu,6,1)(51,Xu,6,3),d(52,"se",20),e(53,`
            `),d(54,"nz-input-number",19),L("ngModelChange",function(m){return g(a),A(o.rotation,m)||(o.rotation=m),C(m)}),r(),e(55,`
          `),r(),e(56,`
          `),d(57,"se",21),e(58,`
            `),d(59,"nz-switch",14),L("ngModelChange",function(m){return g(a),A(o.outline,m)||(o.outline=m),C(m)}),r(),e(60,`
          `),r(),e(61,`
          `),f(62,i0,9,3),d(63,"se",22),e(64,`
            `),d(65,"input",23,1),b("input",function(){g(a);let m=v(66);return C(o.search$.next(m.value))})("keyup.enter",function(){g(a);let m=v(66);return C(o.search$.next(m.value))}),r(),e(67,`
          `),r(),e(68,`
        `),r(),e(69,`
      `),r(),e(70,`
      `),d(71,"div",24),e(72,`
        `),d(73,"pdf",25,2),b("change",function(m){return g(a),C(o.change(m))}),r(),e(75,`
      `),r(),e(76,`
    `),r(),e(77,`
  `)}t&2&&(l(),c("nzGutter",16),l(8),c("ngModel",o.src),l(6),c("nzBeforeUpload",o.beforeUpload),l(10),F("ngModel",o.renderText),l(5),F("ngModel",o.originalSize),l(3),w(o.originalSize?33:-1),l(3),F("ngModel",o.autoReSize),l(5),F("ngModel",o.showAll),l(3),w(o.originalSize?-1:44),l(3),F("ngModel",o.zoom),c("nzStep",.1),l(3),w(o.showAll?50:-1),l(),w(o.stickToPage?51:-1),l(3),F("ngModel",o.rotation),c("nzStep",90),l(5),F("ngModel",o.outline),l(3),w(o.outline?62:-1),l(11),c("src",o.src)("pi",o.pi)("renderText",o.renderText)("showAll",o.showAll)("originalSize",o.originalSize)("fitToPage",o.fitToPage)("stickToPage",o.stickToPage)("zoomScale",o.zoomScale)("zoom",o.zoom)("rotation",o.rotation)("autoReSize",o.autoReSize))},dependencies:[E,k,M,N,fo,se,R,P,lt,at,st,ht,rt,pt,nl,ol,Ot,Mt,Ft,Vt,bt,Wo,Ho,Lo,Ao,Fo,Gn,qn,ja,Oa,Wn,Ba],encapsulation:2})};var cd=class i{item={cols:1,urls:{"en-US":"packages/abc/pdf/index.en-US.md","zh-CN":"packages/abc/pdf/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>Pdf view based on <a target="_blank" href="https://mozilla.github.io/pdf.js/" data-url="https://mozilla.github.io/pdf.js/">pdf.js</a>.</p><p>pdf.js libary is lazy loading by default\uFF0Cyou can change the default root CDN path via <a href="/docs/global-config" data-url="/docs/global-config">Global Configuration</a>.</p><blockquote><p>The component inspired by <a target="_blank" href="https://github.com/VadimDez/ng2-pdf-viewer" data-url="https://github.com/VadimDez/ng2-pdf-viewer">ng2-pdf-viewer</a>.</p></blockquote><p><strong>Use local path</strong></p><pre class="hljs language-bash"><code>npm i -S pdfjs-dist</code></pre><pre class="hljs language-json"><code>// angular.json
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
};</code></pre></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="pdf"><a class="lake-link"><i data-anchor="pdf"></i></a>pdf</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[src]</code></td><td>Specify path of the pdf</td><td><code>string, object, UInt8Array</code></td><td>-</td><td>-</td></tr><tr><td><code>[pi]</code></td><td>Current page</td><td><code>number</code></td><td><code>1</code></td><td>-</td></tr><tr><td><code>[showAll]</code></td><td>Whether to show all pages</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[renderText]</code></td><td>Enable text rendering, allows to select text</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[textLayerMode]</code></td><td>Text rendering mode</td><td><code>PdfTextLayerMode</code></td><td><code>ENABLE</code></td><td>-</td></tr><tr><td><code>[showBorders]</code></td><td>Show page borders</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[stickToPage]</code></td><td>Sticks view to the page</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[originalSize]</code></td><td>Control document display size, <code>true</code> size will be as same as original document, <code>false</code> size will be as same as container block</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[fitToPage]</code></td><td>Works in combination with <code>originalSize</code>. You can show your document in original size, and make sure that it's not bigger then container block.</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[zoom]</code></td><td>Zoom pdf</td><td><code>number</code></td><td><code>1</code></td><td>-</td></tr><tr><td><code>[zoomScale]</code></td><td>Defines how the Zoom scale is computed</td><td><code>PdfZoomScale</code></td><td><code>page-width</code></td><td>-</td></tr><tr><td><code>[rotation]</code></td><td>Rotate PDF, Allowed step is 90 degree, ex. 0, 90, 180</td><td><code>number</code></td><td><code>0</code></td><td>-</td></tr><tr><td><code>[autoReSize]</code></td><td>Turn on or off auto resize</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[externalLinkTarget]</code></td><td>Link target of the external</td><td><code>PdfExternalLinkTarget</code></td><td><code>BLANK</code></td><td>-</td></tr><tr><td><code>[delay]</code></td><td>Delayed rendering, unit: ms</td><td><code>number</code></td><td><code>0</code></td><td>-</td></tr><tr><td><code>(change)</code></td><td>change event</td><td><code>EventEmitter&lt;PdfChangeEvent></code></td><td>-</td><td>-</td></tr></tbody></table><h3 id="Componentproperties"><a class="lake-link"><i data-anchor="Componentproperties"></i></a>Componentproperties</h3><p>Used API interfaces.</p><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code><a data-toc="pdf">pdf</a></code></td><td>Current PDF instance</td></tr><tr><td><code>eventBus</code></td><td>Event bus for PDF files, eg: find document, etc.</td></tr><tr><td><code>findController</code></td><td>Find controller, now instead by <code>eventBus</code></td></tr><tr><td><code>pageViewer</code></td><td>View Controls</td></tr><tr><td><code>linkService</code></td><td>Navigation Service</td></tr></tbody></table><h2 id="FAQ"><a class="lake-link"><i data-anchor="FAQ"></i></a>FAQ</h2><h3 id="Whyneedtospecifytheheightofthepdfcomponent"><a class="lake-link"><i data-anchor="Whyneedtospecifytheheightofthepdfcomponent"></i></a>Whyneedtospecifytheheightofthepdfcomponent</h3><p>When <code>showAll</code> is enabled, if you want to make the page number control effective, you need to ensure that the height of the component is a valid value.</p>`,meta:{type:"Basic",order:3,title:"pdf",subtitle:"Pdf",cols:1,module:"import { PdfModule } from '@delon/abc/pdf';"},toc:[{id:"API",title:"API",h:2,children:[{id:"pdf",title:"pdf",h:3},{id:"Componentproperties",title:"Component properties",h:3}]},{id:"FAQ",title:"FAQ",h:2,children:[{id:"Whyneedtospecifytheheightofthepdfcomponent",title:"Why need to specify the height of the pdf component",h:3}]}]},"zh-CN":{content:`<section class="markdown"><p>\u57FA\u4E8E <a target="_blank" href="https://mozilla.github.io/pdf.js/" data-url="https://mozilla.github.io/pdf.js/">pdf.js</a> \u7684PDF\u9884\u89C8\u7EC4\u4EF6\u3002</p><p>\u9ED8\u8BA4PDF\u9884\u89C8\u5E76\u4E0D\u662F\u521A\u9700\u7684\u539F\u56E0\uFF0C\u56E0\u6B64\u91C7\u7528\u4E00\u79CD\u5EF6\u8FDF\u52A0\u8F7D\u811A\u672C\u7684\u5F62\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u914D\u7F6E\u6765\u6539\u53D8\u9ED8\u8BA4 pdf.js \u7C7B\u5E93\u7684\u6839\u8DEF\u5F84\u3002</p><blockquote><p>\u7EC4\u4EF6\u4E5F\u662F\u53D7 <a target="_blank" href="https://github.com/VadimDez/ng2-pdf-viewer" data-url="https://github.com/VadimDez/ng2-pdf-viewer">ng2-pdf-viewer</a> \u542F\u53D1\u3002</p></blockquote><p><strong>\u4F7F\u7528\u672C\u5730\u8DEF\u5F84</strong></p><pre class="hljs language-bash"><code>npm i -S pdfjs-dist</code></pre><pre class="hljs language-json"><code>// angular.json
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
};</code></pre></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="pdf"><a class="lake-link"><i data-anchor="pdf"></i></a>pdf</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[src]</code></td><td>\u6307\u5B9A\u6587\u6863\u8DEF\u5F84</td><td><code>string, object, UInt8Array</code></td><td>-</td><td>-</td></tr><tr><td><code>[pi]</code></td><td>\u5F53\u524D\u9875</td><td><code>number</code></td><td><code>1</code></td><td>-</td></tr><tr><td><code>[showAll]</code></td><td>\u662F\u5426\u663E\u793A\u5168\u90E8\u9875</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[renderText]</code></td><td>\u662F\u5426\u542F\u7528\u6587\u5B57\u5C42\uFF0C\u5F00\u542F\u540E\u5141\u8BB8\u6587\u5B57\u9009\u62E9</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[textLayerMode]</code></td><td>\u6587\u5B57\u5C42\u6E32\u67D3\u6A21\u5F0F</td><td><code>PdfTextLayerMode</code></td><td><code>ENABLE</code></td><td>-</td></tr><tr><td><code>[showBorders]</code></td><td>\u662F\u5426\u663E\u793A\u9875\u9762\u8FB9\u6846</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[stickToPage]</code></td><td>\u662F\u5426\u89C6\u91CE\u4FDD\u6301\u5728 <code>pi</code> \u9875\u4E0A</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[originalSize]</code></td><td>\u63A7\u5236\u6587\u6863\u663E\u793A\u5927\u5C0F\uFF0C<code>true</code> \u6309\u539F\u59CB\u5927\u5C0F\uFF0C<code>false</code> \u6309\u5BB9\u5668\u5927\u5C0F</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[fitToPage]</code></td><td>\u63A7\u5236\u539F\u59CB\u5C3A\u5BF8\u4E0D\u4F1A\u8D85\u51FA\u5BB9\u5668\u5927\u5C0F</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[zoom]</code></td><td>\u63A7\u5236\u7F29\u653E\u6587\u6863</td><td><code>number</code></td><td><code>1</code></td><td>-</td></tr><tr><td><code>[zoomScale]</code></td><td>\u7F29\u653E\u6587\u6863\u7684\u8BA1\u7B97\u65B9\u5F0F</td><td><code>PdfZoomScale</code></td><td><code>page-width</code></td><td>-</td></tr><tr><td><code>[rotation]</code></td><td>\u65CB\u8F6C\u6587\u6863</td><td><code>number</code></td><td><code>0</code></td><td>-</td></tr><tr><td><code>[autoReSize]</code></td><td>\u662F\u5426\u81EA\u52A8\u7F29\u653E</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[externalLinkTarget]</code></td><td>\u5916\u90E8\u94FE\u63A5\u6253\u5F00\u5F62\u5F0F</td><td><code>PdfExternalLinkTarget</code></td><td><code>BLANK</code></td><td>-</td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u521D\u59CB\u5316\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td>-</td><td>-</td></tr><tr><td><code>(change)</code></td><td>\u53D8\u66F4\u65F6\u56DE\u8C03</td><td><code>EventEmitter&lt;PdfChangeEvent></code></td><td>-</td><td>-</td></tr></tbody></table><h3 id="\u7EC4\u4EF6\u5C5E\u6027"><a class="lake-link"><i data-anchor="\u7EC4\u4EF6\u5C5E\u6027"></i></a>\u7EC4\u4EF6\u5C5E\u6027</h3><p>\u63D0\u4F9B\u4E00\u4E9B\u5E38\u7528\u7684API\u63A5\u53E3\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code><a data-toc="pdf">pdf</a></code></td><td>\u5F53\u524D PDF \u5B9E\u4F8B</td></tr><tr><td><code>eventBus</code></td><td>PDF \u6587\u4EF6\u7684\u4E8B\u4EF6\u603B\u7EBF\uFF0C\u4F8B\u5982\uFF1A\u67E5\u627E\u6587\u6863\u7B49</td></tr><tr><td><code>findController</code></td><td>\u67E5\u627E\u63A7\u5236\u5668\uFF0C\u4E0D\u591F\u65B0\u7248\u672C\u5DF2\u7ECF\u88AB <code>eventBus</code> \u66FF\u4EE3</td></tr><tr><td><code>pageViewer</code></td><td>\u67E5\u770B\u63A7\u4EF6</td></tr><tr><td><code>linkService</code></td><td>\u5BFC\u822A\u670D\u52A1</td></tr></tbody></table><h2 id="\u5E38\u89C1\u95EE\u9898"><a class="lake-link"><i data-anchor="\u5E38\u89C1\u95EE\u9898"></i></a>\u5E38\u89C1\u95EE\u9898</h2><h3 id="\u4E3A\u4EC0\u4E48\u6709\u65F6\u9700\u8981\u6307\u5B9A\u9AD8\u5EA6"><a class="lake-link"><i data-anchor="\u4E3A\u4EC0\u4E48\u6709\u65F6\u9700\u8981\u6307\u5B9A\u9AD8\u5EA6"></i></a>\u4E3A\u4EC0\u4E48\u6709\u65F6\u9700\u8981\u6307\u5B9A\u9AD8\u5EA6</h3><p>\u5F53\u542F\u7528\u663E\u793A\u5168\u90E8\u9875\u65F6\uFF0C\u5982\u679C\u8981\u8BA9\u9875\u7801\u7684\u63A7\u5236\u4EA7\u751F\u6709\u6548\uFF0C\u9700\u8981\u786E\u4FDD\u7EC4\u4EF6\u7684\u9AD8\u5EA6\u662F\u4E00\u4E2A\u6709\u6548\u503C\u3002</p>',meta:{type:"Basic",order:3,title:"pdf",subtitle:"Pdf",cols:1,module:"import { PdfModule } from '@delon/abc/pdf';"},toc:[{id:"API",title:"API",h:2,children:[{id:"pdf",title:"pdf",h:3},{id:"\u7EC4\u4EF6\u5C5E\u6027",title:"\u7EC4\u4EF6\u5C5E\u6027",h:3}]},{id:"\u5E38\u89C1\u95EE\u9898",title:"\u5E38\u89C1\u95EE\u9898",h:2,children:[{id:"\u4E3A\u4EC0\u4E48\u6709\u65F6\u9700\u8981\u6307\u5B9A\u9AD8\u5EA6",title:"\u4E3A\u4EC0\u4E48\u6709\u65F6\u9700\u8981\u6307\u5B9A\u9AD8\u5EA6",h:3}]}]}},demo:!0};codes=[{id:"components-pdf-basic",meta:{order:1,title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"}},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';

import { PdfComponent, type PdfChangeEvent } from '@delon/abc/pdf';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-pdf-basic',
  template: \`
    <button nz-button nzType="primary" (click)="src = src === one ? two : one">Change File</button>
    <pdf [src]="src" style="height: 300px" (change)="handle($event)" />
  \`,
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
              <button nz-button><nz-icon nzType="upload" />Select File</button>
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
}`,lang:"ts",componentName:"ComponentsPdfDesignComponent",point:1,name:"design",urls:"packages/abc/pdf/demo/design.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-pdf"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-pdf-basic"),e(7,`
        `),r(),e(8,`
      
        `),d(9,"code-box",3),e(10,`
          `),p(11,"components-pdf-design"),e(12,`
        `),r(),e(13,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id),l(5),c("item",o.codes[1]),_("id",o.codes[1].id))},dependencies:[O,ad,ld,R,P,j],encapsulation:2})};var d0=["*"];function r0(i,n){if(i&1&&(nt(0),p(1,"nz-icon",4),it()),i&2){let t=h();l(),c("nzType",t.icon)}}var en=class i{cdr=y(ct);el=y(Ct).nativeElement;render=y(Yt);ctrlStyle={};icon="question-circle";top=120;width=200;bgColor;borderColor;expand=!1;expandChange=new At;show=!1;initFlag=!1;_click(){this.show=!this.show,this.expandChange.emit(this.show),this.setStyle()}setStyle(){this.ctrlStyle={"background-color":this.bgColor,"border-color":this.borderColor};let n=[`top:${this.top}px`,`width:${this.width}px`,`margin-right:-${this.show?0:this.width}px`];this.bgColor&&n.push(`background-color:${this.bgColor}`),this.borderColor&&n.push(`border-color:${this.borderColor}`),this.render.setAttribute(this.el,"style",n.join(";")),this.cdr.detectChanges()}ngOnInit(){this.initFlag=!0,this.setStyle()}ngOnChanges(){this.show=this.expand,this.initFlag&&this.setStyle()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["quick-menu"]],hostVars:2,hostBindings:function(t,o){t&1&&b("click",function(){return o._click()}),t&2&&T("quick-menu",!0)},inputs:{icon:"icon",top:[2,"top","top",dt],width:[2,"width","width",dt],bgColor:"bgColor",borderColor:"borderColor",expand:[2,"expand","expand",X]},outputs:{expandChange:"expandChange"},exportAs:["quickMenu"],features:[gt,Rt],ngContentSelectors:d0,decls:5,vars:3,consts:[[1,"quick-menu__inner"],[1,"quick-menu__ctrl"],[1,"quick-menu__ctrl-icon"],[4,"nzStringTemplateOutlet"],[3,"nzType"]],template:function(t,o){t&1&&(Z(),d(0,"div",0)(1,"div",1)(2,"div",2),f(3,r0,2,1,"ng-container",3),r()(),H(4),r()),t&2&&(l(),_e(o.ctrlStyle),l(2),c("nzStringTemplateOutlet",o.icon))},dependencies:[bt,Pt],encapsulation:2,changeDetection:0})};var sd=class i{expand=!1;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-quick-menu-simple"]],decls:30,vars:4,consts:[["nz-button","","type","button",3,"click"],[3,"expandChange","expand"],[3,"nzBordered","nzSplit"],["href","#"]],template:function(t,o){t&1&&(e(0,`
    `),d(1,"button",0),b("click",function(){return o.expand=!o.expand}),e(2),r(),e(3,`
    `),d(4,"quick-menu",1),L("expandChange",function(s){return A(o.expand,s)||(o.expand=s),s}),e(5,`
      `),d(6,"nz-list",2),e(7,`
        `),d(8,"nz-list-item")(9,"a",3),e(10,"Link1"),r()(),e(11,`
        `),d(12,"nz-list-item")(13,"a",3),e(14,"Link2"),r()(),e(15,`
        `),d(16,"nz-list-item")(17,"a",3),e(18,"Link3"),r()(),e(19,`
        `),d(20,"nz-list-item")(21,"a",3),e(22,"Link4"),r()(),e(23,`
        `),d(24,"nz-list-item")(25,"a",3),e(26,"Link5"),r()(),e(27,`
      `),r(),e(28,`
    `),r(),e(29,`
  `)),t&2&&(l(2),B(o.expand?"\u6536\u7F29":"\u5C55\u5F00"),l(2),F("expand",o.expand),l(2),c("nzBordered",!1)("nzSplit",!1))},dependencies:[E,k,M,N,en,Ll,Zo,fn],encapsulation:2})};var pd=class i{item={cols:1,urls:{"en-US":"packages/abc/quick-menu/index.en-US.md","zh-CN":"packages/abc/quick-menu/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Quick menu for the implicit auxiliary list on the right.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="quick-menu"><a class="lake-link"><i data-anchor="quick-menu"></i></a>quick-menu</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[icon]</code></td><td>Icon for the quick menu</td><td><code>string,TemplateRef&lt;void></code></td><td><code>question-circle</code></td></tr><tr><td><code>[top]</code></td><td>Icon from top</td><td><code>number</code></td><td><code>120</code></td></tr><tr><td><code>[width]</code></td><td>Width after opening</td><td><code>number</code></td><td><code>200</code></td></tr><tr><td><code>[bgColor]</code></td><td>Background for the quick menu</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[borderColor]</code></td><td>Border for the quick menu</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[expand]</code></td><td>Current expand status, double binding</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>(expandChange)</code></td><td>Expand status change callback</td><td><code>EventEmitter&lt;boolean></code></td><td>-</td></tr></tbody></table>',meta:{type:"Business",title:"quick-menu",subtitle:"Quick Menu",cols:1,module:"import { QuickMenuModule } from '@delon/abc/quick-menu';"},toc:[{id:"API",title:"API",h:2,children:[{id:"quick-menu",title:"quick-menu",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u5FEB\u901F\u83DC\u5355\uFF0C\u7528\u4E8E\u53F3\u4FA7\u9690\u5F0F\u8F85\u52A9\u5217\u8868\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="quick-menu"><a class="lake-link"><i data-anchor="quick-menu"></i></a>quick-menu</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[icon]</code></td><td>\u56FE\u6807</td><td><code>string,TemplateRef&lt;void></code></td><td><code>question-circle</code></td></tr><tr><td><code>[top]</code></td><td>\u8DDD\u79BB\u9876\u90E8</td><td><code>number</code></td><td><code>120</code></td></tr><tr><td><code>[width]</code></td><td>\u6253\u5F00\u540E\u5BBD\u5EA6</td><td><code>number</code></td><td><code>200</code></td></tr><tr><td><code>[bgColor]</code></td><td>\u80CC\u666F</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[borderColor]</code></td><td>\u8FB9\u6846\u989C\u8272</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[expand]</code></td><td>\u5F53\u524D\u5C55\u5F00\u72B6\u6001\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>(expandChange)</code></td><td>\u5F53\u524D\u5C55\u5F00\u72B6\u6001\u6539\u53D8\u56DE\u8C03\u51FD\u6570</td><td><code>EventEmitter&lt;boolean></code></td><td>-</td></tr></tbody></table>',meta:{type:"Business",title:"quick-menu",subtitle:"\u5FEB\u901F\u83DC\u5355",cols:1,module:"import { QuickMenuModule } from '@delon/abc/quick-menu';"},toc:[{id:"API",title:"API",h:2,children:[{id:"quick-menu",title:"quick-menu",h:3}]}]}},demo:!0};codes=[{id:"components-quick-menu-simple",meta:{order:1,title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"}},summary:{"zh-CN":"<p>\u70B9\u51FB\u53F3\u4FA7\u95EE\u53F7\u5207\u6362\u72B6\u6001\u83DC\u5355\u3002</p>","en-US":"<p>Click the question icon on the right to switch the status menu.</p>"},code:`import { Component } from '@angular/core';

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
  imports: [NzButtonModule, QuickMenuComponent, NzListModule]
})
export class ComponentsQuickMenuSimpleComponent {
  expand = false;
}`,lang:"ts",componentName:"ComponentsQuickMenuSimpleComponent",point:0,name:"simple",urls:"packages/abc/quick-menu/demo/simple.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-quick-menu"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-quick-menu-simple"),e(7,`
        `),r(),e(8,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id))},dependencies:[O,sd,R,P,j],encapsulation:2})};var a0=["*"];function l0(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h();l(),B(t.title)}}function c0(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(2);l(),B(t.description)}}function s0(i,n){if(i&1&&(d(0,"div",4),f(1,c0,2,1,"ng-container",3),r()),i&2){let t=h();l(),c("nzStringTemplateOutlet",t.description)}}function p0(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(2);l(),B(t.extra)}}function m0(i,n){if(i&1&&(d(0,"div",5),f(1,p0,2,1,"ng-container",3),r()),i&2){let t=h();l(),c("nzStringTemplateOutlet",t.extra)}}var Ie=class i{cdr=y(ct);directionality=y(Wt);destroy$=y(Bt);_type="";_icon="";set type(n){switch(this._type=n,n){case"success":this._icon="check-circle";break;case"error":this._icon="close-circle";break;default:this._icon=n;break}}title;description;extra;dir="ltr";ngOnInit(){this.dir=this.directionality.value,this.directionality.change.pipe(zt(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["result"]],hostVars:4,hostBindings:function(t,o){t&2&&T("result",!0)("result-rtl",o.dir==="rtl")},inputs:{type:"type",title:"title",description:"description",extra:"extra"},exportAs:["result"],ngContentSelectors:a0,decls:8,vars:7,consts:[[1,"result__icon"],[3,"nzType"],[1,"result__title"],[4,"nzStringTemplateOutlet"],[1,"result__desc"],[1,"result__extra"],[1,"result__actions"]],template:function(t,o){t&1&&(Z(),d(0,"div",0),p(1,"nz-icon",1),r(),d(2,"div",2),f(3,l0,2,1,"ng-container",3),r(),f(4,s0,2,1,"div",4)(5,m0,2,1,"div",5),d(6,"div",6),H(7),r()),t&2&&(l(),Dn("result__icon-",o._type,""),c("nzType",o._icon),l(2),c("nzStringTemplateOutlet",o.title),l(),w(o.description?4:-1),l(),w(o.extra?5:-1))},dependencies:[bt,Pt],encapsulation:2,changeDetection:0})};var je=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=$t({type:i});static \u0275inj=Gt({imports:[Ce,Vt,xe]})};var u0=["processDotTemplate"],h0=["itemContainer"],f0=(i,n,t)=>({$implicit:i,status:n,index:t});function g0(i,n){i&1&&p(0,"div",3)}function C0(i,n){if(i&1&&(d(0,"div",11),p(1,"nz-progress",12),r()),i&2){let t=h(2);l(),c("nzPercent",t.nzPercentage)("nzWidth",t.nzSize==="small"?32:40)("nzFormat",t.nullProcessFormat)("nzStrokeWidth",4)}}function b0(i,n){i&1&&(d(0,"span",5),p(1,"nz-icon",13),r())}function y0(i,n){i&1&&(d(0,"span",5),p(1,"nz-icon",14),r())}function x0(i,n){if(i&1&&(d(0,"span",5),e(1),r()),i&2){let t=h(2);l(),ut(" ",t.index+1," ")}}function v0(i,n){if(i&1&&(nt(0),p(1,"nz-icon",15),it()),i&2){let t=n.$implicit;l(),c("nzType",t)}}function S0(i,n){if(i&1&&(d(0,"span",5),f(1,v0,2,1,"ng-container",8),r()),i&2){let t=h(2);l(),c("nzStringTemplateOutlet",t.nzIcon)}}function z0(i,n){if(i&1&&f(0,C0,2,4,"div",11)(1,b0,2,0,"span",5)(2,y0,2,0,"span",5)(3,x0,2,1,"span",5)(4,S0,2,1,"span",5),i&2){let t=h();w(t.showProgress?0:-1),l(),w(t.nzStatus==="finish"&&!t.nzIcon?1:-1),l(),w(t.nzStatus==="error"?2:-1),l(),w((t.nzStatus==="process"||t.nzStatus==="wait")&&!t.nzIcon?3:-1),l(),w(t.nzIcon?4:-1)}}function _0(i,n){i&1&&p(0,"span",17)}function T0(i,n){}function w0(i,n){if(i&1&&(d(0,"span",5),f(1,_0,1,0,"ng-template",null,1,I)(3,T0,0,0,"ng-template",16),r()),i&2){let t=v(2),o=h();l(3),c("ngTemplateOutlet",o.customProcessTemplate||t)("ngTemplateOutletContext",Yr(2,f0,t,o.nzStatus,o.index))}}function k0(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h();l(),B(t.nzTitle)}}function D0(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h(2);l(),B(t.nzSubtitle)}}function M0(i,n){if(i&1&&(d(0,"div",9),f(1,D0,2,1,"ng-container",8),r()),i&2){let t=h();l(),c("nzStringTemplateOutlet",t.nzSubtitle)}}function N0(i,n){if(i&1&&(nt(0),e(1),it()),i&2){let t=h();l(),B(t.nzDescription)}}var E0=["*"],md=(()=>{class i{get nzStatus(){return this._status}set nzStatus(t){this._status=t,this.isCustomStatus=!0}get nzIcon(){return this._icon}set nzIcon(t){t instanceof qe||(this.oldAPIIcon=typeof t=="string"&&t.indexOf("anticon")>-1),this._icon=t}get showProgress(){return this.nzPercentage!==null&&!this.nzIcon&&this.nzStatus==="process"&&this.nzPercentage>=0&&this.nzPercentage<=100}get currentIndex(){return this._currentIndex}set currentIndex(t){this._currentIndex=t,this.isCustomStatus||(this._status=t>this.index?"finish":t===this.index?this.outStatus||"":"wait")}constructor(t,o){this.cdr=t,this.destroy$=o,this.nzDisabled=!1,this.nzPercentage=null,this.nzSize="default",this.isCustomStatus=!1,this._status="wait",this.oldAPIIcon=!0,this.direction="horizontal",this.index=0,this.last=!1,this.outStatus="process",this.showProcessDot=!1,this.clickable=!1,this.clickOutsideAngular$=new Zt,this.nullProcessFormat=()=>null,this._currentIndex=0}ngOnInit(){sa(this.itemContainer.nativeElement,"click").pipe(He(()=>this.clickable&&this.currentIndex!==this.index&&!this.nzDisabled),Ue(this.destroy$)).subscribe(()=>{this.clickOutsideAngular$.next(this.index)})}enable(){this.nzDisabled=!1,this.cdr.markForCheck()}disable(){this.nzDisabled=!0,this.cdr.markForCheck()}markForCheck(){this.cdr.markForCheck()}static{this.\u0275fac=function(o){return new(o||i)(tt(ct),tt(ke))}}static{this.\u0275cmp=u({type:i,selectors:[["nz-step"]],viewQuery:function(o,a){if(o&1&&(ot(u0,5),ot(h0,7)),o&2){let s;W(s=U())&&(a.processDotTemplate=s.first),W(s=U())&&(a.itemContainer=s.first)}},hostAttrs:[1,"ant-steps-item"],hostVars:16,hostBindings:function(o,a){o&2&&T("ant-steps-item-wait",a.nzStatus==="wait")("ant-steps-item-process",a.nzStatus==="process")("ant-steps-item-finish",a.nzStatus==="finish")("ant-steps-item-error",a.nzStatus==="error")("ant-steps-item-active",a.currentIndex===a.index)("ant-steps-item-disabled",a.nzDisabled)("ant-steps-item-custom",!!a.nzIcon)("ant-steps-next-error",a.outStatus==="error"&&a.currentIndex===a.index+1)},inputs:{nzTitle:"nzTitle",nzSubtitle:"nzSubtitle",nzDescription:"nzDescription",nzDisabled:[2,"nzDisabled","nzDisabled",X],nzPercentage:"nzPercentage",nzSize:"nzSize",nzStatus:"nzStatus",nzIcon:"nzIcon"},exportAs:["nzStep"],features:[Fe([ke]),gt],decls:12,vars:8,consts:[["itemContainer",""],["processDotTemplate",""],[1,"ant-steps-item-container",3,"tabindex"],[1,"ant-steps-item-tail"],[1,"ant-steps-item-icon"],[1,"ant-steps-icon"],[1,"ant-steps-item-content"],[1,"ant-steps-item-title"],[4,"nzStringTemplateOutlet"],[1,"ant-steps-item-subtitle"],[1,"ant-steps-item-description"],[1,"ant-steps-progress-icon"],["nzType","circle",3,"nzPercent","nzWidth","nzFormat","nzStrokeWidth"],["nzType","check"],["nzType","close"],[3,"nzType"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ant-steps-icon-dot"]],template:function(o,a){o&1&&(d(0,"div",2,0),f(2,g0,1,0,"div",3),d(3,"div",4),f(4,z0,5,5)(5,w0,4,6,"span",5),r(),d(6,"div",6)(7,"div",7),f(8,k0,2,1,"ng-container",8)(9,M0,2,1,"div",9),r(),d(10,"div",10),f(11,N0,2,1,"ng-container",8),r()()()),o&2&&(c("tabindex",a.clickable&&!a.nzDisabled?0:null),_("role",a.clickable&&!a.nzDisabled?"button":null),l(2),w(a.last!==!0?2:-1),l(2),w(a.showProcessDot?-1:4),l(),w(a.showProcessDot?5:-1),l(3),c("nzStringTemplateOutlet",a.nzTitle),l(),w(a.nzSubtitle?9:-1),l(2),c("nzStringTemplateOutlet",a.nzDescription))},dependencies:[el,tl,Vt,bt,xe,Pt,Jt],encapsulation:2,changeDetection:0})}}return i})(),ql=(()=>{class i{set nzProgressDot(t){t instanceof qe?(this.showProcessDot=!0,this.customProcessDotTemplate=t):this.showProcessDot=ca(t),this.updateChildrenSteps()}constructor(t,o,a,s){this.ngZone=t,this.cdr=o,this.directionality=a,this.destroy$=s,this.nzCurrent=0,this.nzDirection="horizontal",this.nzLabelPlacement="horizontal",this.nzType="default",this.nzSize="default",this.nzStartIndex=0,this.nzStatus="process",this.nzIndexChange=new At,this.indexChangeSubscription=Fr.EMPTY,this.showProcessDot=!1,this.showProgress=!1,this.dir="ltr"}ngOnChanges(t){(t.nzStartIndex||t.nzDirection||t.nzStatus||t.nzCurrent||t.nzSize)&&this.updateChildrenSteps()}ngOnInit(){this.directionality.change?.pipe(Ue(this.destroy$)).subscribe(t=>{this.dir=t,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.updateChildrenSteps()}ngAfterContentInit(){this.steps&&this.steps.changes.pipe(_n(null),Ue(this.destroy$)).subscribe(()=>{this.updateHostProgressClass(),this.updateChildrenSteps()})}updateHostProgressClass(){this.steps&&!this.showProcessDot&&(this.showProgress=!!this.steps.toArray().find(t=>t.nzPercentage!==null))}updateChildrenSteps(){if(this.steps){let t=this.steps.length;this.steps.toArray().forEach((o,a)=>{Promise.resolve().then(()=>{o.nzSize=this.nzSize,o.outStatus=this.nzStatus,o.showProcessDot=this.showProcessDot,this.customProcessDotTemplate&&(o.customProcessTemplate=this.customProcessDotTemplate),o.clickable=this.nzIndexChange.observers.length>0,o.direction=this.nzDirection,o.index=a+this.nzStartIndex,o.currentIndex=this.nzCurrent,o.last=t===a+1,o.markForCheck()})}),this.indexChangeSubscription.unsubscribe(),this.indexChangeSubscription=Sn(...this.steps.map(o=>o.clickOutsideAngular$)).pipe(Ue(this.destroy$)).subscribe(o=>{this.nzIndexChange.observers.length&&this.ngZone.run(()=>this.nzIndexChange.emit(o))})}}static{this.\u0275fac=function(o){return new(o||i)(tt(Xt),tt(ct),tt(Wt),tt(ke))}}static{this.\u0275cmp=u({type:i,selectors:[["nz-steps"]],contentQueries:function(o,a,s){if(o&1&&Kt(s,md,4),o&2){let m;W(m=U())&&(a.steps=m)}},hostAttrs:[1,"ant-steps"],hostVars:18,hostBindings:function(o,a){o&2&&T("ant-steps-horizontal",a.nzDirection==="horizontal")("ant-steps-vertical",a.nzDirection==="vertical")("ant-steps-label-horizontal",a.nzDirection==="horizontal")("ant-steps-label-vertical",(a.showProcessDot||a.nzLabelPlacement==="vertical")&&a.nzDirection==="horizontal")("ant-steps-dot",a.showProcessDot)("ant-steps-small",a.nzSize==="small")("ant-steps-navigation",a.nzType==="navigation")("ant-steps-rtl",a.dir==="rtl")("ant-steps-with-progress",a.showProgress)},inputs:{nzCurrent:"nzCurrent",nzDirection:"nzDirection",nzLabelPlacement:"nzLabelPlacement",nzType:"nzType",nzSize:"nzSize",nzStartIndex:"nzStartIndex",nzStatus:"nzStatus",nzProgressDot:"nzProgressDot"},outputs:{nzIndexChange:"nzIndexChange"},exportAs:["nzSteps"],features:[Fe([ke]),Rt],ngContentSelectors:E0,decls:1,vars:0,template:function(o,a){o&1&&(Z(),H(0))},encapsulation:2,changeDetection:0})}}return i})(),Gl=(()=>{class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275mod=$t({type:i})}static{this.\u0275inj=Gt({imports:[md]})}}return i})();function P0(i,n){i&1&&(e(0,`
              `),d(1,"div",12),e(2,`
                `),d(3,"div",13),e(4,"\u66F2\u4E3D\u4E3D"),p(5,"nz-icon",14),r(),e(6,`
                `),d(7,"div",13),e(8,"2016-12-12 12:32"),r(),e(9,`
              `),r(),e(10,`
            `))}function R0(i,n){if(i&1){let t=z();e(0,`
              `),d(1,"div",12),e(2,`
                `),d(3,"div",13),e(4,`
                  \u5468\u6BDB\u6BDB`),p(5,"nz-icon",15),e(6,`
                `),r(),e(7,`
                `),d(8,"div",13),e(9,`
                  `),d(10,"a",16),b("click",function(){g(t);let a=h(2);return C(a.msg.success("click"))}),e(11,"\u50AC\u4E00\u4E0B"),r(),e(12,`
                `),r(),e(13,`
              `),r(),e(14,`
            `)}}function A0(i,n){if(i&1&&(e(0,`
        `),d(1,"div",6),e(2,`
          `),d(3,"div",7),e(4,`
            `),d(5,"span",8),e(6,"\u9879\u76EE ID\uFF1A"),r(),e(7,`
            23421
          `),r(),e(8,`
          `),d(9,"div",7),e(10,`
            `),d(11,"span",8),e(12,"\u8D1F\u8D23\u4EBA\uFF1A"),r(),e(13,`
            \u66F2\u4E3D\u4E3D
          `),r(),e(14,`
          `),d(15,"div",7),e(16,`
            `),d(17,"span",8),e(18,"\u751F\u6548\u65F6\u95F4\uFF1A"),r(),e(19,`
            2016-12-12 ~ 2017-12-12
          `),r(),e(20,`
        `),r(),e(21,`
        `),d(22,"nz-steps",9),e(23,`
          `),d(24,"nz-step",10),e(25,`
            `),f(26,P0,11,0,"ng-template",null,1,I),e(28,`
          `),r(),e(29,`
          `),d(30,"nz-step",10),e(31,`
            `),f(32,R0,15,0,"ng-template",null,2,I),e(34,`
          `),r(),e(35,`
          `),p(36,"nz-step",11),e(37,`
          `),p(38,"nz-step",11),e(39,`
        `),r(),e(40,`
      `)),i&2){let t=v(27),o=v(33);l(),c("nzGutter",16),l(2),c("nzXs",24)("nzSm",12)("nzMd",12)("nzLg",12)("nzXl",6),l(6),c("nzXs",24)("nzSm",12)("nzMd",12)("nzLg",12)("nzXl",6),l(6),c("nzXs",24)("nzSm",24)("nzMd",24)("nzLg",24)("nzXl",12),l(7),c("nzCurrent",1),l(2),c("nzTitle","\u521B\u5EFA\u9879\u76EE")("nzDescription",t),l(6),c("nzTitle","\u90E8\u95E8\u521D\u5BA1")("nzDescription",o),l(6),c("nzTitle","\u8D22\u52A1\u590D\u6838"),l(2),c("nzTitle","\u5B8C\u6210")}}var ud=class i{msg=y(yt);static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-result-classic"]],decls:16,vars:3,consts:[["resultExtra",""],["createDesc",""],["checkedDesc",""],["type","success","description","\u63D0\u4EA4\u7ED3\u679C\u9875\u7528\u4E8E\u53CD\u9988\u4E00\u7CFB\u5217\u64CD\u4F5C\u4EFB\u52A1\u7684\u5904\u7406\u7ED3\u679C\uFF0C\u5982\u679C\u4EC5\u662F\u7B80\u5355\u64CD\u4F5C\uFF0C\u4F7F\u7528 Message \u5168\u5C40\u63D0\u793A\u53CD\u9988\u5373\u53EF\u3002\u672C\u6587\u5B57\u533A\u57DF\u53EF\u4EE5\u5C55\u793A\u7B80\u5355\u7684\u8865\u5145\u8BF4\u660E\uFF0C\u5982\u679C\u6709\u7C7B\u4F3C\u5C55\u793Ax\u201C\u5355\u636E\u201D\u7684\u9700\u6C42\uFF0C\u4E0B\u9762\u8FD9\u4E2A\u7070\u8272\u533A\u57DF\u53EF\u4EE5\u5448\u73B0\u6BD4\u8F83\u590D\u6742\u7684\u5185\u5BB9\u3002",3,"title","extra"],["nz-button","",3,"nzType"],["nz-button",""],["nz-row","",1,"mb-md",3,"nzGutter"],["nz-col","",3,"nzXs","nzSm","nzMd","nzLg","nzXl"],[1,"text-grey-darker"],["nzProgressDot","",3,"nzCurrent"],[3,"nzTitle","nzDescription"],[3,"nzTitle"],[2,"font-size","14px","position","relative","left","38px","text-align","left"],[2,"margin-top","8px","margin-bottom","4px"],["nzType","dingding",1,"ml-sm"],["nzType","dingding",1,"ml-sm",2,"color","#00a0e9"],[3,"click"]],template:function(t,o){if(t&1&&(e(0,`
    `),d(1,"result",3),e(2,`
      `),f(3,A0,41,23,"ng-template",null,0,I),e(5,`
      `),d(6,"button",4),e(7,"\u8FD4\u56DE\u5217\u8868"),r(),e(8,`
      `),d(9,"button",5),e(10,"\u67E5\u770B\u9879\u76EE"),r(),e(11,`
      `),d(12,"button",5),e(13,"\u6253 \u5370"),r(),e(14,`
    `),r(),e(15,`
  `)),t&2){let a=v(4);l(),c("title","\u63D0\u4EA4\u6210\u529F")("extra",a),l(5),c("nzType","primary")}},dependencies:[je,Ie,se,R,P,Gl,ql,md,Vt,bt,E,k,M,N],encapsulation:2})};function F0(i,n){i&1&&(e(0,`
        `),d(1,"div",3),e(2,"\u60A8\u63D0\u4EA4\u7684\u5185\u5BB9\u6709\u5982\u4E0B\u9519\u8BEF\uFF1A"),r(),e(3,`
        `),d(4,"div",4),e(5,`
          `),p(6,"nz-icon",5),e(7,`\u60A8\u7684\u8D26\u6237\u5DF2\u88AB\u51BB\u7ED3
          `),d(8,"a",6),e(9,"\u7ACB\u5373\u89E3\u51BB"),p(10,"nz-icon",7),r(),e(11,`
        `),r(),e(12,`
        `),d(13,"div"),e(14,`
          `),p(15,"nz-icon",5),e(16,`\u60A8\u7684\u8D26\u6237\u8FD8\u4E0D\u5177\u5907\u7533\u8BF7\u8D44\u683C
          `),d(17,"a",6),e(18,"\u7ACB\u5373\u5347\u7EA7"),p(19,"nz-icon",7),r(),e(20,`
        `),r(),e(21,`
      `))}var hd=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-result-fail"]],decls:10,vars:3,consts:[["resultExtra",""],["type","error","description","\u8BF7\u6838\u5BF9\u5E76\u4FEE\u6539\u4EE5\u4E0B\u4FE1\u606F\u540E\uFF0C\u518D\u91CD\u65B0\u63D0\u4EA4\u3002",3,"title","extra"],["nz-button","",3,"nzType"],[1,"mb-md","text-lg"],[1,"mb-md"],["nzType","close-circle",1,"text-error","pr-sm"],[1,"ml-md"],["nzType","right",1,"pl-sm"]],template:function(t,o){if(t&1&&(e(0,`
    `),d(1,"result",1),e(2,`
      `),f(3,F0,22,0,"ng-template",null,0,I),e(5,`
      `),d(6,"button",2),e(7,"\u8FD4\u56DE\u4FEE\u6539"),r(),e(8,`
    `),r(),e(9,`
  `)),t&2){let a=v(4);l(),c("title","\u63D0\u4EA4\u5931\u8D25")("extra",a),l(5),c("nzType","primary")}},dependencies:[je,Ie,Vt,bt,E,k,M,N],encapsulation:2})};function L0(i,n){i&1&&(d(0,"div",4),e(1,"\u6807\u9898"),r())}function B0(i,n){i&1&&(d(0,"div",5),e(1,"\u7ED3\u679C\u63CF\u8FF0"),r())}var fd=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-result-structure"]],decls:13,vars:2,consts:[["title",""],["description",""],["type","success","extra","\u5176\u4ED6\u8865\u5145\u4FE1\u606F\uFF0C\u81EA\u5E26\u7070\u5E95\u6548\u679C",3,"title","description"],[2,"background","#3ba0e9","color","#fff"],[2,"background","#7dbcea","color","#fff"],[2,"background","rgba(16, 142, 233, 1)","color","#fff"]],template:function(t,o){if(t&1&&(e(0,`
    `),d(1,"result",2),e(2,`
      `),f(3,L0,2,0,"ng-template",null,0,I),e(5,`
      `),f(6,B0,2,0,"ng-template",null,1,I),e(8,`
      `),d(9,"div",3),e(10,"\u64CD\u4F5C\u5EFA\u8BAE\uFF0C\u4E00\u822C\u653E\u7F6E\u6309\u94AE\u7EC4"),r(),e(11,`
    `),r(),e(12,`
  `)),t&2){let a=v(4),s=v(7);l(),c("title",a)("description",s)}},dependencies:[je,Ie],encapsulation:2})};var gd=class i{item={cols:1,urls:{"en-US":"packages/abc/result/index.en-US.md","zh-CN":"packages/abc/result/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><h1 id="Willberemovedinv20,Pleaseusenz-resultinstead.">Willberemovedinv20,Pleaseusenz-resultinstead.<label class="api-type-label directive">directive</label></h1><p>Used to feedback the processing results of a series of tasks performed by the user.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="result"><a class="lake-link"><i data-anchor="result"></i></a>result</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>Types, different types come with corresponding icons</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>Title for the result</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[description]</code></td><td>Description for the result</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[extra]</code></td><td>Supplemental information, with default gray background</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>ng-content</code></td><td>Operation suggestions, Recommended to place jump links, button groups, etc.</td><td><code>ng-content</code></td><td>-</td></tr></tbody></table>',meta:{type:"Layout",title:"result",subtitle:"Result",cols:1,module:"import { ResultModule } from '@delon/abc/result';",deprecated:"20.0.0"},toc:[{id:"Willberemovedinv20,Pleaseusenz-resultinstead.",title:"Will be removed in v20, Please use nz-result instead.",h:1,children:[{id:"API",title:"API",h:2},{id:"result",title:"result",h:3}]}]},"zh-CN":{content:'<section class="markdown"><h1 id="Willberemovedinv20,Pleaseusenz-resultinstead.">Willberemovedinv20,Pleaseusenz-resultinstead.<label class="api-type-label directive">directive</label></h1><p>\u7ED3\u679C\u9875\u7528\u4E8E\u5BF9\u7528\u6237\u8FDB\u884C\u7684\u4E00\u7CFB\u5217\u4EFB\u52A1\u5904\u7406\u7ED3\u679C\u8FDB\u884C\u53CD\u9988\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="result"><a class="lake-link"><i data-anchor="result"></i></a>result</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[type]</code></td><td>\u7C7B\u578B\uFF0C\u4E0D\u540C\u7C7B\u578B\u81EA\u5E26\u5BF9\u5E94\u7684\u56FE\u6807</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[description]</code></td><td>\u7ED3\u679C\u63CF\u8FF0</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[extra]</code></td><td>\u8865\u5145\u4FE1\u606F\uFF0C\u6709\u9ED8\u8BA4\u7684\u7070\u8272\u80CC\u666F</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>ng-content</code></td><td>\u64CD\u4F5C\u5EFA\u8BAE\uFF0C\u63A8\u8350\u653E\u7F6E\u8DF3\u8F6C\u94FE\u63A5\uFF0C\u6309\u94AE\u7EC4\u7B49</td><td><code>ng-content</code></td><td>-</td></tr></tbody></table>',meta:{type:"Layout",title:"result",subtitle:"\u5904\u7406\u7ED3\u679C",cols:1,module:"import { ResultModule } from '@delon/abc/result';",deprecated:"20.0.0"},toc:[{id:"Willberemovedinv20,Pleaseusenz-resultinstead.",title:"Will be removed in v20, Please use nz-result instead.",h:1,children:[{id:"API",title:"API",h:2},{id:"result",title:"result",h:3}]}]}},demo:!0};codes=[{id:"components-result-classic",meta:{order:0,title:"Classic"},summary:"<p>\u5178\u578B\u7ED3\u679C\u9875\u9762\u3002</p>",code:`import { Component, inject } from '@angular/core';

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
                  >\u66F2\u4E3D\u4E3D<nz-icon nzType="dingding" class="ml-sm" /></div>
                <div style="margin-top: 8px; margin-bottom: 4px;">2016-12-12 12:32</div>
              </div>
            </ng-template>
          </nz-step>
          <nz-step [nzTitle]="'\u90E8\u95E8\u521D\u5BA1'" [nzDescription]="checkedDesc">
            <ng-template #checkedDesc>
              <div style="font-size: 14px; position: relative; left: 38px; text-align: left;">
                <div style="margin-top: 8px; margin-bottom: 4px;">
                  \u5468\u6BDB\u6BDB<nz-icon nzType="dingding" class="ml-sm" style="color: #00a0e9;"/>
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
          <nz-icon nzType="close-circle" class="text-error pr-sm"/>\u60A8\u7684\u8D26\u6237\u5DF2\u88AB\u51BB\u7ED3
          <a class="ml-md">\u7ACB\u5373\u89E3\u51BB<nz-icon nzType="right" class="pl-sm"/></a>
        </div>
        <div>
          <nz-icon nzType="close-circle" class="text-error pr-sm"/>\u60A8\u7684\u8D26\u6237\u8FD8\u4E0D\u5177\u5907\u7533\u8BF7\u8D44\u683C
          <a class="ml-md">\u7ACB\u5373\u5347\u7EA7<nz-icon nzType="right" class="pl-sm"/></a>
        </div>
      </ng-template>
      <button nz-button [nzType]="'primary'">\u8FD4\u56DE\u4FEE\u6539</button>
    </result>
  \`,
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
  imports: [ResultModule]
})
export class ComponentsResultStructureComponent {}`,lang:"ts",componentName:"ComponentsResultStructureComponent",point:2,name:"structure",urls:"packages/abc/result/demo/structure.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-result"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:19,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-result-classic"),e(7,`
        `),r(),e(8,`
      
        `),d(9,"code-box",3),e(10,`
          `),p(11,"components-result-fail"),e(12,`
        `),r(),e(13,`
      
        `),d(14,"code-box",3),e(15,`
          `),p(16,"components-result-structure"),e(17,`
        `),r(),e(18,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id),l(5),c("item",o.codes[1]),_("id",o.codes[1].id),l(5),c("item",o.codes[2]),_("id",o.codes[2].id))},dependencies:[O,ud,hd,fd,R,P,j],encapsulation:2})};var Cd=class i{item={cols:1,urls:{"en-US":"packages/abc/reuse-tab/index.en-US.md","zh-CN":"packages/abc/reuse-tab/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>Reuse route tab are extremely common for admin interfaces, and the problem of component data is not lost when switching routes.</p><p>The newly opened is always the current page, and the route reuse means that when we leave the current page, if the reuse condition is met (ie: matching mode), all component states (including subcomponents) of the current route are saved, wait for the next time you enter the route to restore the component data based on the cache.</p><h2 id="Usage"><a class="lake-link"><i data-anchor="Usage"></i></a>Usage</h2><ol><li><p>Provide <code>provideReuseTabConfig()</code> configuration in <code>app.config.ts</code> file</p></li><li><p>Add <code>&lt;reuse-tab></code> in the <code>src/app/layout/basic/basic.component.ts</code> file, like this:</p></li></ol><pre class="hljs language-html"><code>- &lt;router-outlet /&gt;
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
{ path: 'p1', component: DemoComponent, data: { title: 'New Title' } }</code></pre><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[reuse]</code></td><td>Whether to reuse</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>Title</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[titleI18n]</code></td><td>Ii18n title key</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[reuseClosable]</code></td><td>Whether to allow close</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[keepingScroll]</code></td><td>Keep the scrollbar position</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><blockquote><p><strong>Note:</strong> The above data can also be reflected in the <a href="/theme/menu#Menu" data-url="/theme/menu#Menu">Menu</a> data.</p></blockquote><h2 id="FAQ"><a class="lake-link"><i data-anchor="FAQ"></i></a>FAQ</h2><h3 id="HowtoDebug"><a class="lake-link"><i data-anchor="HowtoDebug"></i></a>HowtoDebug</h3><p>Route reuse preserves component data state, which may bring another drawback. The Angular lifecycle hook is not triggered during the reuse process. In most cases, it can run normally. There are several common problems:</p><ul><li><p><code>OnDestroy</code> may handle the external style in component (eg: <code>body</code>), which can be resolved by Reuse Events</p></li><li><p>Turn on the <code>debug</code> mode to help you analyze</p></li></ul><h3 id="Max"><a class="lake-link"><i data-anchor="Max"></i></a>Max</h3><p>Limiting the maximum number of reuse can reduce memory growth. There are several issues to be aware of:</p><ul><li><p><code>max</code> Forces a close and ignores the closable state when value changes</p></li><li><p>When it's out of <code>max</code> range, it will turn off the first open tab (Only <strong>closable</strong>), ingore close when all pages are <strong>non-closable</strong></p></li></ul><h3 id="NotsupportedQueryStringparameters"><a class="lake-link"><i data-anchor="NotsupportedQueryStringparameters"></i></a>NotsupportedQueryStringparameters</h3><p>Route reuse preserves uses URLs to distinguish whether the same page, and QueryString query parameters will be repeatedly misused, so not supported, and the QueryString part is forced to be ignored.</p><h3 id="Multi-applicationcacheprocessing"><a class="lake-link"><i data-anchor="Multi-applicationcacheprocessing"></i></a>Multi-applicationcacheprocessing</h3><p>Use <code>provideReuseTabConfig(storeKey: 'newKey')</code> Or overriding <code>REUSE_TAB_CACHED_MANAGER</code> to change the cache storage, for example when using a micro-frontend (similar to <a target="_blank" href="https://github.com/worktile/ngx-planet" data-url="https://github.com/worktile/ngx-planet">ngx-planet</a>) can rewrite cached data to <code>window</code> guaranteed data sharing.</p>`,meta:{type:"Basic",order:1,title:"reuse-tab",subtitle:"Reuse Route Tab",cols:1,module:"import { ReuseTabModule } from '@delon/abc/reuse-tab';"},toc:[{id:"Usage",title:"Usage",h:2},{id:"MatchingMode",title:"Matching Mode",h:2},{id:"TabText",title:"Tab Text",h:2},{id:"ReuseEvents",title:"Reuse Events",h:2},{id:"ScrollPosition",title:"Scroll Position",h:2},{id:"API",title:"API",h:2,children:[{id:"ReuseTabService",title:"ReuseTabService",h:3},{id:"reuse-tab",title:"reuse-tab",h:3},{id:"ReuseTabCached",title:"ReuseTabCached",h:3},{id:"ReuseTabNotify",title:"ReuseTabNotify",h:3},{id:"ReuseContextI18n",title:"ReuseContextI18n",h:3},{id:"ReuseCustomContextMenu",title:"ReuseCustomContextMenu",h:3},{id:"Routedata",title:"Route data",h:3}]},{id:"FAQ",title:"FAQ",h:2,children:[{id:"HowtoDebug",title:"How to Debug",h:3},{id:"Max",title:"Max",h:3},{id:"NotsupportedQueryStringparameters",title:"Not supported QueryString parameters",h:3},{id:"Multi-applicationcacheprocessing",title:"Multi-application cache processing",h:3}]}]},"zh-CN":{content:`<section class="markdown"><p>\u590D\u7528\u6807\u7B7E\u5728\u4E2D\u53F0\u7CFB\u7EDF\u975E\u5E38\u5E38\u89C1\uFF0C\u672C\u8D28\u662F\u89E3\u51B3\u4E0D\u540C\u8DEF\u7531\u9875\u5207\u6362\u65F6\u7EC4\u4EF6\u6570\u636E\u4E0D\u4E22\u5931\u95EE\u9898\u3002</p><p>\u6700\u65B0\u6253\u5F00\u7684\u6C38\u8FDC\u662F\u5F53\u524D\u9875\uFF0C\u800C\u8DEF\u7531\u590D\u7528\u662F\u6307\u5F53\u6211\u4EEC\u79BB\u5F00\u5F53\u524D\u9875\u65F6\u82E5\u7B26\u5408\u590D\u7528\u6761\u4EF6\uFF08\u5373\uFF1A\u5339\u914D\u6A21\u5F0F\uFF09\u5219\u4FDD\u5B58\u5F53\u524D\u8DEF\u7531\u6240\u6709\u7EC4\u4EF6\u72B6\u6001\uFF08\u5305\u62EC\u5B50\u7EC4\u4EF6\uFF09\uFF0C\u5F85\u4E0B\u4E00\u6B21\u8FDB\u5165\u76F8\u540C\u8DEF\u7531\uFF08\u5373\uFF1A\u5339\u914D\u6A21\u5F0F\uFF09\u65F6\u518D\u4ECE\u4E2D\u7F13\u5B58\u4E2D\u83B7\u53D6\u5230\u3002</p><h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><ol><li><p>\u5728 <code>app.config.ts</code> \u4E0B\u63D0\u4F9B <code>provideReuseTabConfig()</code> \u914D\u7F6E</p></li><li><p>\u5728\u9700\u8981\u5C55\u793A\u6807\u7B7E\u7684\u5730\u65B9\u8C03\u7528 <code>&lt;reuse-tab></code>\uFF0C\u4E00\u822C\u5728 <code>src/app/layout/basic/basic.component.ts</code>\uFF0C\u4F8B\u5982\uFF1A</p></li></ol><pre class="hljs language-html"><code>- &lt;router-outlet /&gt;
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
{ path: 'p1', component: DemoComponent, data: { title: 'New Title' } }</code></pre><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[reuse]</code></td><td>\u662F\u5426\u590D\u7528</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[titleI18n]</code></td><td>I18n\u6807\u9898Key</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[reuseClosable]</code></td><td>\u662F\u5426\u5141\u8BB8\u5173\u95ED</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[keepingScroll]</code></td><td>\u662F\u5426\u4FDD\u6301\u6EDA\u52A8\u6761</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><blockquote><p><strong>\u6CE8\uFF1A</strong> \u4EE5\u4E0A\u6570\u636E\u4E5F\u53EF\u5728 <a href="/theme/menu#Menu" data-url="/theme/menu#Menu">Menu</a> \u6570\u636E\u4E2D\u4F53\u73B0\u3002</p></blockquote><h2 id="\u5E38\u89C1\u95EE\u9898"><a class="lake-link"><i data-anchor="\u5E38\u89C1\u95EE\u9898"></i></a>\u5E38\u89C1\u95EE\u9898</h2><h3 id="\u5982\u4F55Debug\uFF1F"><a class="lake-link"><i data-anchor="\u5982\u4F55Debug\uFF1F"></i></a>\u5982\u4F55Debug\uFF1F</h3><p>\u8DEF\u7531\u590D\u7528\u4F1A\u4FDD\u7559\u7EC4\u4EF6\u72B6\u6001\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5E26\u6765\u53E6\u4E00\u4E2A\u5F0A\u7AEF\uFF1B\u590D\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u4F1A\u89E6\u53D1Angular\u751F\u547D\u5468\u671F\u52FE\u5B50\uFF0C\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u90FD\u80FD\u6B63\u5E38\u8FD0\u884C\uFF0C\u6709\u51E0\u4E2A\u5E38\u89C1\u95EE\u9898\uFF1A</p><ul><li><p><code>OnDestroy</code> \u53EF\u80FD\u4F1A\u5904\u7406\u4E00\u4E9B\u7EC4\u4EF6\u5916\u90E8\uFF08\u4F8B\u5982\uFF1A<code>body</code>\uFF09\u7684\u6837\u5F0F\u7B49\uFF0C\u53EF\u4EE5\u53C2\u8003\u751F\u547D\u5468\u671F\u89E3\u51B3\u3002</p></li><li><p>\u5F00\u542F <code>debug</code> \u6A21\u5F0F\u540E\u4F1A\u5728 <code>console</code> \u5F88\u591A\u4FE1\u606F\u8FD9\u6709\u52A9\u4E8E\u5206\u6790\u8DEF\u7531\u590D\u7528\u7684\u8FC7\u7A0B\u3002</p></li></ul><h3 id="Max\u53C2\u6570"><a class="lake-link"><i data-anchor="Max\u53C2\u6570"></i></a>Max\u53C2\u6570</h3><p>\u9650\u5B9A\u6700\u5927\u590D\u7528\u6570\u636E\u53EF\u4EE5\u51CF\u5C11\u5185\u5B58\u7684\u589E\u957F\uFF0C\u6709\u51E0\u4E2A\u95EE\u9898\u9700\u8981\u6CE8\u610F\uFF1A</p><ul><li><p><code>max</code> \u53C2\u6570\u503C\u53D1\u751F\u53D8\u66F4\u65F6\u4F1A\u5F3A\u5236\u5173\u95ED\u4E14\u5FFD\u7565\u53EF\u5173\u95ED\u6761\u4EF6</p></li><li><p>\u8D85\u51FA <code>max</code> \u503C\u65F6\uFF0C\u4F1A\u5173\u6389\u6700\u5148\u6253\u5F00 <strong>\u53EF\u5173\u95ED</strong> \u7684\u9875\u9762\uFF0C\u82E5\u6240\u6709\u9875\u9762\u90FD\u4E3A <strong>\u4E0D\u53EF\u5173\u95ED</strong> \u5219\u5FFD\u7565\u5173\u95ED</p></li></ul><h3 id="\u4E0D\u652F\u6301QueryString\u67E5\u8BE2\u53C2\u6570"><a class="lake-link"><i data-anchor="\u4E0D\u652F\u6301QueryString\u67E5\u8BE2\u53C2\u6570"></i></a>\u4E0D\u652F\u6301QueryString\u67E5\u8BE2\u53C2\u6570</h3><p>\u590D\u7528\u91C7\u7528URL\u6765\u533A\u5206\u662F\u5426\u540C\u4E00\u4E2A\u9875\u9762\uFF0C\u800C QueryString \u67E5\u8BE2\u53C2\u6570\u5F88\u5BB9\u6613\u4EA7\u751F\u91CD\u590D\u6027\u8BEF\u7528\uFF0C\u56E0\u6B64\u4E0D\u652F\u6301\u67E5\u8BE2\u53C2\u6570\uFF0C\u4E14\u5728\u590D\u7528\u8FC7\u7A0B\u4E2D\u4F1A\u5F3A\u5236\u5FFD\u7565\u6389 QueryString \u90E8\u5206\u3002</p><h3 id="\u591A\u5E94\u7528\u7F13\u5B58\u5904\u7406"><a class="lake-link"><i data-anchor="\u591A\u5E94\u7528\u7F13\u5B58\u5904\u7406"></i></a>\u591A\u5E94\u7528\u7F13\u5B58\u5904\u7406</h3><p>\u4F7F\u7528 <code>provideReuseTabConfig(storeKey: 'newKey')</code> \u6216\u901A\u8FC7\u8986\u76D6 <code>REUSE_TAB_CACHED_MANAGER</code> \u6539\u53D8\u7F13\u5B58\u5B58\u50A8 \uFF0C\u4F8B\u5982\u5728\u4F7F\u7528\u5FAE\u524D\u7AEF\uFF08\u7C7B\u4F3C<a target="_blank" href="https://github.com/worktile/ngx-planet" data-url="https://github.com/worktile/ngx-planet">ngx-planet</a>\uFF09\u53EF\u4EE5\u91CD\u5199\u7F13\u5B58\u6570\u636E\u5230 <code>window</code> \u4E0B\u6765\u5B9E\u73B0\u6570\u636E\u5171\u4EAB\u3002</p>`,meta:{type:"Basic",order:1,title:"reuse-tab",subtitle:"\u8DEF\u7531\u590D\u7528\u6807\u7B7E",cols:1,module:"import { ReuseTabModule } from '@delon/abc/reuse-tab';"},toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",h:2},{id:"\u5339\u914D\u6A21\u5F0F",title:"\u5339\u914D\u6A21\u5F0F",h:2},{id:"\u6807\u7B7E\u6587\u672C",title:"\u6807\u7B7E\u6587\u672C",h:2},{id:"\u751F\u547D\u5468\u671F",title:"\u751F\u547D\u5468\u671F",h:2},{id:"\u6EDA\u52A8\u6761\u4F4D\u7F6E",title:"\u6EDA\u52A8\u6761\u4F4D\u7F6E",h:2},{id:"API",title:"API",h:2,children:[{id:"ReuseTabService",title:"ReuseTabService",h:3},{id:"reuse-tab",title:"reuse-tab",h:3},{id:"ReuseTabCached",title:"ReuseTabCached",h:3},{id:"ReuseTabNotify",title:"ReuseTabNotify",h:3},{id:"ReuseContextI18n",title:"ReuseContextI18n",h:3},{id:"ReuseCustomContextMenu",title:"ReuseCustomContextMenu",h:3},{id:"\u8DEF\u7531data",title:"\u8DEF\u7531data",h:3}]},{id:"\u5E38\u89C1\u95EE\u9898",title:"\u5E38\u89C1\u95EE\u9898",h:2,children:[{id:"\u5982\u4F55Debug\uFF1F",title:"\u5982\u4F55Debug\uFF1F",h:3},{id:"Max\u53C2\u6570",title:"Max\u53C2\u6570",h:3},{id:"\u4E0D\u652F\u6301QueryString\u67E5\u8BE2\u53C2\u6570",title:"\u4E0D\u652F\u6301 QueryString \u67E5\u8BE2\u53C2\u6570",h:3},{id:"\u591A\u5E94\u7528\u7F13\u5B58\u5904\u7406",title:"\u591A\u5E94\u7528\u7F13\u5B58\u5904\u7406",h:3}]}]}},demo:!1};codes=[];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-reuse-tab"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:1,vars:2,consts:[[3,"codes","item"]],template:function(t,o){t&1&&p(0,"app-docs",0),t&2&&c("codes",o.codes)("item",o.item)},dependencies:[O],encapsulation:2})};var V0=()=>({required:"\u8BF7\u586B\u5199",pattern:"\u53EA\u80FD\u5305\u542Ba-z, 0-9\u4E4B\u95F4"}),O0=i=>({required:i,pattern:"\u53EA\u80FD\u5305\u542B0-9\u4E4B\u95F4"});function j0(i,n){if(i&1){let t=z();e(0," \u8BF7\u586B\u5199\uFF0C\u5BC6\u94A5"),d(1,"a",8),b("click",function(){g(t);let a=h();return C(a.msg.success("success"))}),e(2,"\u751F\u6210"),r(),e(3,"\u5730\u5740\u3002 ")}}var bd=class i{msg=y(yt);i={};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-se-basic"]],decls:23,vars:8,consts:[["f","ngForm"],["appSecretRequired",""],["nz-form","","se-container","","gutter","32"],["label","App Key",3,"error"],["type","text","nz-input","","name","ak","required","","pattern","^[a-z0-9]*$","placeholder","\u5FC5\u586B\u9879\uFF0C\u4E14\u53EA\u80FD\u5305\u542Ba-z, 0-9\u4E4B\u95F4",3,"ngModelChange","ngModel"],["label","App Secret",3,"error"],["type","text","nz-input","","name","sk","required","","maxlength","32","pattern","^[0-9]*$","placeholder","\u5FC5\u586B\u9879\uFF0C\u4E14\u53EA\u80FD\u5305\u542B0-9\u4E4B\u95F4",3,"ngModelChange","ngModel"],["nz-button","","nzType","primary",3,"disabled"],[3,"click"]],template:function(t,o){if(t&1){let a=z();e(0," "),d(1,"form",2,0),e(3,`
    `),d(4,"se",3),e(5,`
      `),d(6,"input",4),L("ngModelChange",function(m){return g(a),A(o.i.ak,m)||(o.i.ak=m),C(m)}),r(),e(7,`
    `),r(),e(8,`
    `),f(9,j0,4,0,"ng-template",null,1,I),e(11,`
    `),d(12,"se",5),e(13,`
      `),d(14,"input",6),L("ngModelChange",function(m){return g(a),A(o.i.sk,m)||(o.i.sk=m),C(m)}),r(),e(15,`
    `),r(),e(16,`
    `),d(17,"se"),e(18,`
      `),d(19,"button",7),e(20,"Save"),r(),e(21,`
    `),r(),e(22,`
  `),r()}if(t&2){let a=v(2),s=v(10);l(4),c("error",et(5,V0)),l(2),F("ngModel",o.i.ak),l(6),c("error",Q(6,O0,s)),l(2),F("ngModel",o.i.sk),l(5),c("disabled",a.invalid)}},dependencies:[Ot,Mt,Ft,Dt,kt,lt,at,st,wt,ht,rt,Tt,te,ce,Rn,pt,Ut,E,k,M,N],encapsulation:2})};var H0=()=>({required:"Please input your username!",pattern:"Incorrect format, muse be A"}),yd=class i{constructor(n){this.msg=n}validateForm=new Ke({userName:new ve(null,[le.required,le.pattern(/A/)]),password:new ve(null,[le.required]),remember:new ve(!0)});submitForm(){this.msg.success(JSON.stringify(this.validateForm.value))}updateValue(){this.validateForm.patchValue({userName:"a"})}static \u0275fac=function(t){return new(t||i)(tt(yt))};static \u0275cmp=u({type:i,selectors:[["components-se-reactive"]],decls:22,vars:4,consts:[["nz-form","","se-container","","gutter","32","ingoreDirty","",3,"ngSubmit","formGroup"],["label","App Key","required","",3,"error"],["formControlName","userName","nz-input","","placeholder","Username"],["label","App Secret","required","","error","Please input your Password!"],["formControlName","password","nz-input","","type","password","placeholder","Password"],["nz-button","","nzType","primary",3,"disabled"],["nz-button","","nzType","link","type","button",3,"click"]],template:function(t,o){t&1&&(e(0," "),d(1,"form",0),b("ngSubmit",function(){return o.submitForm()}),e(2,`
    `),d(3,"se",1),e(4,`
      `),p(5,"input",2),e(6,`
    `),r(),e(7,`
    `),d(8,"se",3),e(9,`
      `),p(10,"input",4),e(11,`
    `),r(),e(12,`
    `),d(13,"se"),e(14,`
      `),d(15,"button",5),e(16,"Log in"),r(),e(17,`
      `),d(18,"button",6),b("click",function(){return o.updateValue()}),e(19,"Update value via patchValue"),r(),e(20,`
    `),r(),e(21,`
  `),r()),t&2&&(l(),c("formGroup",o.validateForm),l(2),c("error",et(3,H0)),l(12),c("disabled",!o.validateForm.valid))},dependencies:[Ot,Mt,Ft,Dt,kt,lt,at,Ye,wt,ht,rt,Tt,Je,De,E,k,M,N],encapsulation:2})};var xd=class i{i={};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-se-compact"]],decls:20,vars:3,consts:[["f","ngForm"],["nz-form","","se-container","","labelWidth","150","gutter","32","size","compact"],["label","App Key","error","\u8BF7\u586B\u5199","optional","(\u9009\u586B)","optionalHelp","\u901A\u8FC7\u63A7\u5236\u53F0-\u67E5\u770BKEY\u83B7\u53D6","extra","\u989D\u5916\u63D0\u793A\u4FE1\u606F"],["type","text","nz-input","","name","ak","required","",3,"ngModelChange","ngModel"],["label","App Secret","error","\u8BF7\u586B\u5199\uFF0C\u6700\u591A32\u4F4D"],["type","text","nz-input","","name","sk","required","","maxlength","32",3,"ngModelChange","ngModel"],["nz-button","","nzType","primary",3,"disabled"]],template:function(t,o){if(t&1){let a=z();e(0," "),d(1,"form",1,0),e(3,`
    `),d(4,"se",2),e(5,`
      `),d(6,"input",3),L("ngModelChange",function(m){return g(a),A(o.i.ak,m)||(o.i.ak=m),C(m)}),r(),e(7,`
    `),r(),e(8,`
    `),d(9,"se",4),e(10,`
      `),d(11,"input",5),L("ngModelChange",function(m){return g(a),A(o.i.sk,m)||(o.i.sk=m),C(m)}),r(),e(12,`
    `),r(),e(13,`
    `),d(14,"se"),e(15,`
      `),d(16,"button",6),e(17,"Save"),r(),e(18,`
    `),r(),e(19,`
  `),r()}if(t&2){let a=v(2);l(6),F("ngModel",o.i.ak),l(5),F("ngModel",o.i.sk),l(5),c("disabled",a.invalid)}},dependencies:[Ot,Mt,Ft,Dt,kt,lt,at,st,wt,ht,rt,Tt,te,ce,pt,Ut,E,k,M,N],encapsulation:2})};var vd=class i{i={};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-se-horizontal"]],decls:20,vars:3,consts:[["f","ngForm"],["nz-form","","se-container","1","labelWidth","150"],["label","App Key","error","\u8BF7\u586B\u5199","optional","(\u9009\u586B)","optionalHelp","\u901A\u8FC7\u63A7\u5236\u53F0-\u67E5\u770BKEY\u83B7\u53D6","extra","\u989D\u5916\u63D0\u793A\u4FE1\u606F"],["type","text","nz-input","","name","ak","required","",3,"ngModelChange","ngModel"],["label","App Secret","error","\u8BF7\u586B\u5199\uFF0C\u6700\u591A32\u4F4D"],["type","text","nz-input","","name","sk","required","","maxlength","32",3,"ngModelChange","ngModel"],["nz-button","","nzType","primary",3,"disabled"]],template:function(t,o){if(t&1){let a=z();e(0," "),d(1,"form",1,0),e(3,`
    `),d(4,"se",2),e(5,`
      `),d(6,"input",3),L("ngModelChange",function(m){return g(a),A(o.i.ak,m)||(o.i.ak=m),C(m)}),r(),e(7,`
    `),r(),e(8,`
    `),d(9,"se",4),e(10,`
      `),d(11,"input",5),L("ngModelChange",function(m){return g(a),A(o.i.sk,m)||(o.i.sk=m),C(m)}),r(),e(12,`
    `),r(),e(13,`
    `),d(14,"se"),e(15,`
      `),d(16,"button",6),e(17,"Save"),r(),e(18,`
    `),r(),e(19,`
  `),r()}if(t&2){let a=v(2);l(6),F("ngModel",o.i.ak),l(5),F("ngModel",o.i.sk),l(5),c("disabled",a.invalid)}},dependencies:[Ot,Mt,Ft,Dt,kt,lt,at,st,wt,ht,rt,Tt,te,ce,pt,Ut,E,k,M,N],encapsulation:2})};var Sd=class i{i={};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-se-inline"]],decls:20,vars:3,consts:[["f","ngForm"],["nz-form","","nzLayout","inline","se-container",""],["label","App Key","error","\u8BF7\u586B\u5199","optional","(\u9009\u586B)","optionalHelp","\u901A\u8FC7\u63A7\u5236\u53F0-\u67E5\u770BKEY\u83B7\u53D6","extra","\u989D\u5916\u63D0\u793A\u4FE1\u606F"],["type","text","nz-input","","name","ak","required","",3,"ngModelChange","ngModel"],["label","App Secret","error","\u8BF7\u586B\u5199\uFF0C\u6700\u591A32\u4F4D"],["type","text","nz-input","","name","sk","required","","maxlength","32",3,"ngModelChange","ngModel"],["nz-button","","nzType","primary",3,"disabled"]],template:function(t,o){if(t&1){let a=z();e(0," "),d(1,"form",1,0),e(3,`
    `),d(4,"se",2),e(5,`
      `),d(6,"input",3),L("ngModelChange",function(m){return g(a),A(o.i.ak,m)||(o.i.ak=m),C(m)}),r(),e(7,`
    `),r(),e(8,`
    `),d(9,"se",4),e(10,`
      `),d(11,"input",5),L("ngModelChange",function(m){return g(a),A(o.i.sk,m)||(o.i.sk=m),C(m)}),r(),e(12,`
    `),r(),e(13,`
    `),d(14,"se"),e(15,`
      `),d(16,"button",6),e(17,"Save"),r(),e(18,`
    `),r(),e(19,`
  `),r()}if(t&2){let a=v(2);l(6),F("ngModel",o.i.ak),l(5),F("ngModel",o.i.sk),l(5),c("disabled",a.invalid)}},dependencies:[Ot,Mt,Ft,Dt,kt,lt,at,st,wt,ht,rt,Tt,te,ce,pt,Ut,E,k,M,N],encapsulation:2})};var zd=class i{i={};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-se-vertical"]],decls:20,vars:3,consts:[["f","ngForm"],["nz-form","","nzLayout","vertical","se-container",""],["label","App Key","error","\u8BF7\u586B\u5199","optional","(\u9009\u586B)","optionalHelp","\u901A\u8FC7\u63A7\u5236\u53F0-\u67E5\u770BKEY\u83B7\u53D6","extra","\u989D\u5916\u63D0\u793A\u4FE1\u606F"],["type","text","nz-input","","name","ak","required","",3,"ngModelChange","ngModel"],["label","App Secret","error","\u8BF7\u586B\u5199\uFF0C\u6700\u591A32\u4F4D"],["type","text","nz-input","","name","sk","required","","maxlength","32",3,"ngModelChange","ngModel"],["nz-button","","nzType","primary",3,"disabled"]],template:function(t,o){if(t&1){let a=z();e(0," "),d(1,"form",1,0),e(3,`
    `),d(4,"se",2),e(5,`
      `),d(6,"input",3),L("ngModelChange",function(m){return g(a),A(o.i.ak,m)||(o.i.ak=m),C(m)}),r(),e(7,`
    `),r(),e(8,`
    `),d(9,"se",4),e(10,`
      `),d(11,"input",5),L("ngModelChange",function(m){return g(a),A(o.i.sk,m)||(o.i.sk=m),C(m)}),r(),e(12,`
    `),r(),e(13,`
    `),d(14,"se"),e(15,`
      `),d(16,"button",6),e(17,"Save"),r(),e(18,`
    `),r(),e(19,`
  `),r()}if(t&2){let a=v(2);l(6),F("ngModel",o.i.ak),l(5),F("ngModel",o.i.sk),l(5),c("disabled",a.invalid)}},dependencies:[Ot,Mt,Ft,Dt,kt,lt,at,st,wt,ht,rt,Tt,te,ce,pt,Ut,E,k,M,N],encapsulation:2})};function W0(i,n){i&1&&(e(0,`
        `),d(1,"button",7),e(2,"\u63D0\u53D6"),r(),e(3,`
      `))}var _d=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-se-line"]],decls:18,vars:1,consts:[["f","ngForm"],["suffixButton",""],["nz-form","","se-container","1","size","compact","gutter","32"],["label","\u6240\u5C5E\u7C7B\u76EE","line",""],["label","\u56FE\u7247"],["nzSearch","",3,"nzAddOnAfter"],["type","text","nz-input","","placeholder","\u8BF7\u8D34\u5165\u7F51\u7EDC\u56FE\u7247\u5730\u5740"],["nz-button","","nzType","primary","nzSearch",""]],template:function(t,o){if(t&1&&(e(0," "),d(1,"form",2,0),e(3,`
    `),d(4,"se",3),e(5,"\u5934\u50CF"),r(),e(6,`
    `),d(7,"se",4),e(8,`
      `),d(9,"nz-input-group",5),e(10,`
        `),p(11,"input",6),e(12,`
      `),r(),e(13,`
      `),f(14,W0,4,0,"ng-template",null,1,I),e(16,`
    `),r(),e(17,`
  `),r()),t&2){let a=v(15);l(9),c("nzAddOnAfter",a)}},dependencies:[Ot,Mt,Ft,Dt,kt,lt,at,to,st,wt,Tt,Ut,E,k,M,N],encapsulation:2})};var U0=()=>({required:"\u8BF7\u586B\u5199",pattern:"\u53EA\u80FD\u5305\u542Ba-z, 0-9\u4E4B\u95F4"}),q0=i=>({required:i,pattern:"\u53EA\u80FD\u5305\u542B0-9\u4E4B\u95F4"}),G0=()=>({required:"Please input your username!",pattern:"Incorrect format, muse be A"});function $0(i,n){if(i&1){let t=z();e(0," \u8BF7\u586B\u5199\uFF0C\u5BC6\u94A5"),d(1,"a",14),b("click",function(){g(t);let a=h();return C(a.msg.success("success"))}),e(2,"\u751F\u6210"),r(),e(3,"\u5730\u5740\u3002 ")}}var Td=class i{constructor(n){this.msg=n}validateForm=new Ke({userName:new ve(null,[le.required,le.pattern(/A/)]),password:new ve(null,[le.required]),remember:new ve(!0)});i={};ngModelErrors=[];reactiveErrors=[];resetErrors(){this.ngModelErrors=[{name:"ak",error:"Required field, and can only contain a-z, 0-9"}],this.reactiveErrors=[{name:"userName",error:"Required username"},{name:"password",error:"Required password"}]}static \u0275fac=function(t){return new(t||i)(tt(yt))};static \u0275cmp=u({type:i,selectors:[["components-se-reset-errors"]],decls:55,vars:14,consts:[["f","ngForm"],["appSecretRequired",""],[1,"mb-md"],["nz-button","",3,"click"],["nz-form","","se-container","","gutter","32",3,"errors"],["label","App Key",3,"error"],["type","text","nz-input","","name","ak","required","","pattern","^[a-z0-9]*$","placeholder","\u5FC5\u586B\u9879\uFF0C\u4E14\u53EA\u80FD\u5305\u542Ba-z, 0-9\u4E4B\u95F4",3,"ngModelChange","ngModel"],["label","App Secret",3,"error"],["type","text","nz-input","","name","sk","required","","maxlength","32","pattern","^[0-9]*$","placeholder","\u5FC5\u586B\u9879\uFF0C\u4E14\u53EA\u80FD\u5305\u542B0-9\u4E4B\u95F4",3,"ngModelChange","ngModel"],["nz-button","","nzType","primary",3,"disabled"],["nz-form","","se-container","","gutter","32",3,"formGroup","errors"],["formControlName","userName","nz-input","","placeholder","Username"],["label","App Secret","error","Please input your Password!"],["formControlName","password","nz-input","","type","password","placeholder","Password"],[3,"click"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"h3"),e(2,"Operating"),r(),e(3,`
    `),d(4,"div",2),e(5,`
      `),d(6,"button",3),b("click",function(){return g(a),C(o.resetErrors())}),e(7,"Reset all errors"),r(),e(8,`
    `),r(),e(9,`
    `),d(10,"form",4,0),e(12,`
      `),d(13,"se",5),e(14,`
        `),d(15,"input",6),L("ngModelChange",function(m){return g(a),A(o.i.ak,m)||(o.i.ak=m),C(m)}),r(),e(16,`
      `),r(),e(17,`
      `),f(18,$0,4,0,"ng-template",null,1,I),e(20,`
      `),d(21,"se",7),e(22,`
        `),d(23,"input",8),L("ngModelChange",function(m){return g(a),A(o.i.sk,m)||(o.i.sk=m),C(m)}),r(),e(24,`
      `),r(),e(25,`
      `),d(26,"se"),e(27,`
        `),d(28,"button",9),e(29,"Save"),r(),e(30,`
      `),r(),e(31,`
    `),r(),e(32,`
    `),d(33,"h3"),e(34,"Reactive"),r(),e(35,`
    `),d(36,"form",10),e(37,`
      `),d(38,"se",5),e(39,`
        `),p(40,"input",11),e(41,`
      `),r(),e(42,`
      `),d(43,"se",12),e(44,`
        `),p(45,"input",13),e(46,`
      `),r(),e(47,`
      `),d(48,"se"),e(49,`
        `),d(50,"button",9),e(51,"Log in"),r(),e(52,`
      `),r(),e(53,`
    `),r(),e(54,`
  `)}if(t&2){let a=v(11),s=v(19);l(10),c("errors",o.ngModelErrors),l(3),c("error",et(10,U0)),l(2),F("ngModel",o.i.ak),l(6),c("error",Q(11,q0,s)),l(2),F("ngModel",o.i.sk),l(5),c("disabled",a.invalid),l(8),c("formGroup",o.validateForm)("errors",o.reactiveErrors),l(2),c("error",et(13,G0)),l(12),c("disabled",!o.validateForm.valid)}},dependencies:[Ot,Mt,Ft,Dt,kt,lt,at,Ye,wt,ht,rt,Tt,te,ce,Rn,Je,De,st,pt,Ut,E,k,M,N],encapsulation:2})};function X0(i,n){i&1&&e(0," Via by ng-template ")}function K0(i,n){if(i&1){let t=z();e(0,`
            `),d(1,"nz-select",30),L("ngModelChange",function(a){g(t);let s=h();return A(s.i.phoneNumberPrefix,a)||(s.i.phoneNumberPrefix=a),C(a)}),e(2,`
              `),p(3,"nz-option",31),e(4,`
              `),p(5,"nz-option",32),e(6,`
            `),r(),e(7,`
          `)}if(i&2){let t=h();l(),F("ngModel",t.i.phoneNumberPrefix)}}var wd=class i{i={user_name:"",user_age:3,user_birthday:"",ak:"",sk:"",phoneNumberPrefix:"+86",phoneNumber:"",agree:!0,comment:""};columns=[{title:"id"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-se-complex"]],decls:93,vars:17,consts:[["f","ngForm"],["optionalHelpTpl",""],["addOnBeforeTemplate",""],["nz-form","","se-container","3","size","compact","gutter","24"],["label","ID","col","1",3,"optionalHelp"],["label","Name","required","","col","2","optionalHelp","The background color is #f50","optionalHelpColor","#f50"],["type","text","nz-input","","name","user_name","required","","placeholder","\u5360\u4E24\u680F",3,"ngModelChange","ngModel"],["label","Age","required",""],["name","user_age","nzAllowClear","","nzPlaceHolder","Choose",3,"ngModelChange","ngModel"],["nzLabel","1",3,"nzValue"],["nzLabel","2",3,"nzValue"],["nzLabel","3",3,"nzValue"],["nzLabel","4",3,"nzValue"],["nzLabel","5",3,"nzValue"],["label","Brithday","required",""],["name","user_birthday","nzShowTime","",3,"ngModelChange","ngModel"],["label","App Key","required",""],["type","text","nz-input","","name","ak","required","",3,"ngModelChange","ngModel"],["label","App Secret","required",""],["type","text","nz-input","","name","sk","required","","maxlength","32",3,"ngModelChange","ngModel"],["label","Phone Number","required",""],[3,"nzAddOnBefore"],["type","text","nz-input","","name","phoneNumber","required","","maxlength","32",3,"ngModelChange","ngModel"],["nz-checkbox","","name","agree",3,"ngModelChange","ngModel"],["label","Long Long Long Long Long Long Label","col","1"],["name","comment","nz-input","","rows","2","placeholder","write any thing",3,"ngModelChange","ngModel"],["hideLabel","","col","1"],["size","small",3,"columns"],["col","1"],["nz-button","","nzType","primary",3,"disabled"],["name","phoneNumberPrefix",2,"width","70px",3,"ngModelChange","ngModel"],["nzLabel","+86","nzValue","+86"],["nzLabel","+87","nzValue","+87"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"form",3,0),e(3,`
      `),d(4,"se-title"),e(5,"Title 1"),r(),e(6,`
      `),d(7,"se",4),e(8,`
        1000
        `),f(9,X0,1,0,"ng-template",null,1,I),e(11,`
      `),r(),e(12,`
      `),d(13,"se",5),e(14,`
        `),d(15,"input",6),L("ngModelChange",function(m){return g(a),A(o.i.user_name,m)||(o.i.user_name=m),C(m)}),r(),e(16,`
      `),r(),e(17,`
      `),d(18,"se",7),e(19,`
        `),d(20,"nz-select",8),L("ngModelChange",function(m){return g(a),A(o.i.user_age,m)||(o.i.user_age=m),C(m)}),e(21,`
          `),p(22,"nz-option",9),e(23,`
          `),p(24,"nz-option",10),e(25,`
          `),p(26,"nz-option",11),e(27,`
          `),p(28,"nz-option",12),e(29,`
          `),p(30,"nz-option",13),e(31,`
        `),r(),e(32,`
      `),r(),e(33,`
      `),d(34,"se",14),e(35,`
        `),d(36,"nz-date-picker",15),L("ngModelChange",function(m){return g(a),A(o.i.user_birthday,m)||(o.i.user_birthday=m),C(m)}),r(),e(37,`
      `),r(),e(38,`
      `),d(39,"se",16),e(40,`
        `),d(41,"input",17),L("ngModelChange",function(m){return g(a),A(o.i.ak,m)||(o.i.ak=m),C(m)}),r(),e(42,`
      `),r(),e(43,`
      `),d(44,"se",18),e(45,`
        `),d(46,"input",19),L("ngModelChange",function(m){return g(a),A(o.i.sk,m)||(o.i.sk=m),C(m)}),r(),e(47,`
      `),r(),e(48,`
      `),p(49,"nz-divider"),e(50,`
      `),d(51,"se",20),e(52,`
        `),d(53,"nz-input-group",21),e(54,`
          `),f(55,K0,8,1,"ng-template",null,2,I),e(57,`
          `),d(58,"input",22),L("ngModelChange",function(m){return g(a),A(o.i.phoneNumber,m)||(o.i.phoneNumber=m),C(m)}),r(),e(59,`
        `),r(),e(60,`
      `),r(),e(61,`
      `),d(62,"se"),e(63,`
        `),d(64,"label",23),L("ngModelChange",function(m){return g(a),A(o.i.agree,m)||(o.i.agree=m),C(m)}),e(65,`
          `),d(66,"span"),e(67,"I have read the "),d(68,"a"),e(69,"agreement"),r()(),e(70,`
        `),r(),e(71,`
      `),r(),e(72,`
      `),d(73,"se-title"),e(74,"Title 2"),r(),e(75,`
      `),d(76,"se",24),e(77,`
        `),d(78,"textarea",25),L("ngModelChange",function(m){return g(a),A(o.i.comment,m)||(o.i.comment=m),C(m)}),r(),e(79,`
      `),r(),e(80,`
      `),d(81,"se",26),e(82,`
        `),p(83,"st",27),e(84,`
      `),r(),e(85,`
      `),d(86,"se",28),e(87,`
        `),d(88,"button",29),e(89,"Save"),r(),e(90,`
      `),r(),e(91,`
    `),r(),e(92,`
  `)}if(t&2){let a=v(2),s=v(10),m=v(56);l(7),c("optionalHelp",s),l(8),F("ngModel",o.i.user_name),l(5),F("ngModel",o.i.user_age),l(2),c("nzValue",1),l(2),c("nzValue",2),l(2),c("nzValue",3),l(2),c("nzValue",4),l(2),c("nzValue",5),l(6),F("ngModel",o.i.user_birthday),l(5),F("ngModel",o.i.ak),l(5),F("ngModel",o.i.sk),l(7),c("nzAddOnBefore",m),l(5),F("ngModel",o.i.phoneNumber),l(6),F("ngModel",o.i.agree),l(14),F("ngModel",o.i.comment),l(5),c("columns",o.columns),l(5),c("disabled",a.invalid)}},dependencies:[Ot,Mt,Ft,tn,Dt,kt,lt,at,to,st,wt,ht,rt,Tt,te,ce,pt,Ut,E,k,M,N,Lo,Ao,Fo,Hn,jn,An,ka,jo,Vo,$,G],encapsulation:2})};var kd=class i{item={cols:1,urls:{"en-US":"packages/abc/se/index.en-US.md","zh-CN":"packages/abc/se/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>A higher-order components of the form HTML template. And optimized some details:</p><ul><li><p>More friendly form validation status</p></li><li><p>Automated responsive layout</p></li><li><p>Automatic maintenance <code>id</code></p></li></ul><p>The form HTML template consists of <code>se-container</code> container (directive) and <code>se</code> component, like this:</p><pre class="hljs language-html"><code>&lt;form nz-form #f="ngForm" se-container="2"&gt;
  &lt;se label="App Key"&gt;
    &lt;input type="text" nz-input [(ngModel)]="i.ak" name="ak" required&gt;
  &lt;/se&gt;
  &lt;se label="App Secret"&gt;
    &lt;input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32"&gt;
  &lt;/se&gt;
  &lt;se&gt;
    &lt;button nz-button nzType="primary" [disabled]="f.invalid"&gt;Save&lt;/button&gt;
  &lt;/se&gt;
&lt;/form&gt;</code></pre><p>Also, automatically processed all Angular built-in validation, such as <code>required</code>, <code>maxlength</code>, <code>min</code>, <code>pattern</code>, etc., with a red border to indicate invalid value status.</p></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="se-container"><a class="lake-link"><i data-anchor="se-container"></i></a>se-container</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[gutter]</code></td><td>specify the distance between two items, unit is <code>px</code>, only <code>nzLayout:horizontal</code></td><td><code>number</code></td><td><code>32</code></td><td>\u2705</td></tr><tr><td><code>[<a data-toc="se">se</a>-container]</code></td><td>specify the maximum number of columns to display, the final columns number is determined by col setting combined with <a href="/theme/responsive" data-url="/theme/responsive">Responsive Rules</a></td><td><code>'1','2','3','4','5','6'</code></td><td>-</td><td></td></tr><tr><td><code>[col]</code></td><td>specify the maximum number of columns to display, the final columns number is determined by col setting combined with <a href="/theme/responsive" data-url="/theme/responsive">Responsive Rules</a></td><td><code>'1','2','3','4','5','6'</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[labelWidth]</code></td><td>label text of width, unit is <code>px</code></td><td><code>number</code></td><td><code>150</code></td><td>\u2705</td></tr><tr><td><code>[nzLayout]</code></td><td>type of layout when <code>inline</code> forced size is <code>compact</code></td><td><code>'horizontal','vertical','inline'</code></td><td><code>'horizontal'</code></td><td>\u2705</td></tr><tr><td><code>[size]</code></td><td>size of edit, forced ingores <code>error</code>, <code>extra</code></td><td><code>'default','compact'</code></td><td><code>'default'</code></td><td>\u2705</td></tr><tr><td><code>[firstVisual]</code></td><td>Immediately show validation error message</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[ingoreDirty]</code></td><td>Whether to ignore the <code>dirty</code> check</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[line]</code></td><td>whether separation line style</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>Display title</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[errors]</code></td><td>Batch modify <code>se</code> error value</td><td><code>SEErrorRefresh[]</code></td><td>-</td><td></td></tr><tr><td><code>[noColon]</code></td><td>Whether to not display : after label text</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr></tbody></table><h3 id="se"><a class="lake-link"><i data-anchor="se"></i></a>se</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[col]</code></td><td>specify the maximum number of columns to display, the final columns number is determined by col setting combined with <a href="/theme/responsive" data-url="/theme/responsive">Responsive Rules</a> (Inherited from <code>se-container</code>)</td><td><code>'1','2','3','4','5','6'</code></td><td>-</td></tr><tr><td><code>[label]</code></td><td>Label</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[labelWidth]</code></td><td>label text of width, unit is <code>px</code> (Inherited from <code>se-container</code>)</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[hideLabel]</code></td><td>Whether to hide the current label</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[optional]</code></td><td>Label optional information</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[optionalHelp]</code></td><td>Label optional help</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[optionalHelpColor]</code></td><td>The background color of label optional help</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[error]</code></td><td>validation error message</td><td><code>string, TemplateRef&lt;void>, { [key: string]: string, TemplateRef<void> }</code></td><td>-</td></tr><tr><td><code>[extra]</code></td><td>The extra prompt message. It is similar to help.</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[required]</code></td><td>Whether required identifier, if not set, the value is automatically set according to whether the form element has <code>RequiredValidator</code> validation</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[controlClass]</code></td><td>Control area classes</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[id]</code></td><td>Custom <code>id</code> value of component</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[line]</code></td><td>whether separation line style (Inherited from <code>se-container</code>)</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[noColon]</code></td><td>Whether to not display : after label text</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr></tbody></table><h3 id="se-title"><a class="lake-link"><i data-anchor="se-title"></i></a>se-title</h3><p>Display title.</p><h2 id="QA"><a class="lake-link"><i data-anchor="QA"></i></a>QA</h2><h3 id="Whencustomizethecomponentid"><a class="lake-link"><i data-anchor="Whencustomizethecomponentid"></i></a>Whencustomizethecomponentid</h3><p>Matching for and <code>id</code> values associate the label with the appropriate form control. Because <code>id</code> must be unique, and <code>ng-alain</code> automatic maintenance <code>id</code>. In most cases, you don't need to care about the binding state of <code>id</code>. When you manually specify the <code>id</code> value, the priority is higher, but you also need to maintain the corresponding <code>id</code> value of the component.</p>`,meta:{type:"CURD",title:"se",subtitle:"Edit",cols:1,order:3,module:"import { SEModule } from '@delon/abc/se';"},toc:[{id:"API",title:"API",h:2,children:[{id:"se-container",title:"se-container",h:3},{id:"se",title:"se",h:3},{id:"se-title",title:"se-title",h:3}]},{id:"QA",title:"QA",h:2,children:[{id:"Whencustomizethecomponentid",title:"When customize the component id?",h:3}]}]},"zh-CN":{content:`<section class="markdown"><p>\u7B80\u5316\u8868\u5355HTML\u6A21\u677F\u7684\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u5E76\u8FDB\u4E00\u6B65\u4F18\u5316\u4E86\u4E00\u4E9B\u7EC6\u8282\uFF1A</p><ul><li><p>\u66F4\u53CB\u597D\u7684\u8868\u5355\u6821\u9A8C\u72B6\u6001</p></li><li><p>\u81EA\u52A8\u5316\u54CD\u5E94\u5F0F\u5E03\u5C40</p></li><li><p>\u81EA\u52A8\u7EF4\u62A4\u8868\u5355 <code>id</code></p></li></ul><p>\u5B83\u7531 <code>se-container</code> \u5BB9\u5668\uFF08\u6307\u4EE4\uFF09\u548C <code>se</code> \u7EC4\u4EF6\u6765\u8868\u793A\u4E00\u4E2A\u8868\u5355\uFF0C\u4E00\u4E2A\u7B80\u5355HTML\u6A21\u677F\u8868\u5355\u662F\u8FD9\u4E48\u5199\u7684\uFF1A</p><pre class="hljs language-html"><code>&lt;form nz-form #f="ngForm" se-container="2"&gt;
  &lt;se label="App Key"&gt;
    &lt;input type="text" nz-input [(ngModel)]="i.ak" name="ak" required&gt;
  &lt;/se&gt;
  &lt;se label="App Secret"&gt;
    &lt;input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32"&gt;
  &lt;/se&gt;
  &lt;se&gt;
    &lt;button nz-button nzType="primary" [disabled]="f.invalid"&gt;Save&lt;/button&gt;
  &lt;/se&gt;
&lt;/form&gt;</code></pre><p>\u540C\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5904\u7406\u6240\u6709 Angular \u5185\u7F6E\u6821\u9A8C\u6307\u4EE4\uFF0C\u4F8B\u5982\uFF1A<code>required</code>\u3001<code>maxlength</code>\u3001<code>min</code>\u3001<code>pattern</code> \u7B49\uFF0C\u5E76\u4EE5\u7EA2\u8272\u8FB9\u6846\u6765\u8868\u793A\u65E0\u6548\u503C\u72B6\u6001\u3002</p></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="se-container"><a class="lake-link"><i data-anchor="se-container"></i></a>se-container</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[gutter]</code></td><td>\u95F4\u8DDD\uFF0C\u5F53 <code>nzLayout:horizontal</code> \u65F6\u6709\u6548</td><td><code>number</code></td><td><code>32</code></td><td>\u2705</td></tr><tr><td><code>[<a data-toc="se">se</a>-container]</code></td><td>\u6307\u5B9A\u8868\u5355\u5143\u7D20\u6700\u591A\u5206\u51E0\u5217\u5C55\u793A\uFF0C\u6700\u7EC8\u4E00\u884C\u51E0\u5217\u7531 col \u914D\u7F6E\u7ED3\u5408<a href="/theme/responsive" data-url="/theme/responsive">\u54CD\u5E94\u5F0F\u89C4\u5219</a>\u51B3\u5B9A</td><td><code>'1','2','3','4','5','6'</code></td><td>-</td><td></td></tr><tr><td><code>[col]</code></td><td>\u6307\u5B9A\u8868\u5355\u5143\u7D20\u6700\u591A\u5206\u51E0\u5217\u5C55\u793A\uFF0C\u6700\u7EC8\u4E00\u884C\u51E0\u5217\u7531 col \u914D\u7F6E\u7ED3\u5408<a href="/theme/responsive" data-url="/theme/responsive">\u54CD\u5E94\u5F0F\u89C4\u5219</a>\u51B3\u5B9A</td><td><code>'1','2','3','4','5','6'</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[labelWidth]</code></td><td>\u8868\u5355\u5143\u7D20\u9ED8\u8BA4\u6807\u7B7E\u6587\u672C\u5BBD\u5EA6\uFF0C\u5355\u4F4D\uFF1A<code>px</code></td><td><code>number</code></td><td><code>150</code></td><td>\u2705</td></tr><tr><td><code>[nzLayout]</code></td><td>\u8868\u5355\u5E03\u5C40\uFF0C\u5F53 <code>inline</code> \u65F6\u5F3A\u5236\u5927\u5C0F\u4E3A <code>compact</code></td><td><code>'horizontal','vertical','inline'</code></td><td><code>'horizontal'</code></td><td>\u2705</td></tr><tr><td><code>[size]</code></td><td>\u5927\u5C0F <code>compact</code> \u7D27\u51D1\u578B\uFF0C\u5F3A\u5236\u5FFD\u7565 <code>error</code>\u3001<code>extra</code> \u5C55\u793A</td><td><code>'default','compact'</code></td><td><code>'default'</code></td><td>\u2705</td></tr><tr><td><code>[firstVisual]</code></td><td>\u662F\u5426\u7ACB\u5373\u5448\u73B0\u9519\u8BEF\u89C6\u89C9</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[ingoreDirty]</code></td><td>\u662F\u5426\u5FFD\u7565 <code>dirty</code> \u6821\u9A8C</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[line]</code></td><td>\u5206\u9694\u7EBF</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td></td></tr><tr><td><code>[errors]</code></td><td>\u6279\u91CF\u4FEE\u6539 <code>se</code> \u9519\u8BEF\u6D88\u606F\u63CF\u8FF0</td><td><code>SEErrorRefresh[]</code></td><td>-</td><td></td></tr><tr><td><code>[noColon]</code></td><td>\u9ED8\u8BA4\u662F\u5426\u4E0D\u663E\u793A label \u540E\u9762\u7684\u5192\u53F7</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr></tbody></table><h3 id="se"><a class="lake-link"><i data-anchor="se"></i></a>se</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[col]</code></td><td>\u6307\u5B9A\u8868\u5355\u5143\u7D20\u6700\u591A\u5206\u51E0\u5217\u5C55\u793A\uFF0C\u6700\u7EC8\u4E00\u884C\u51E0\u5217\u7531 col \u914D\u7F6E\u7ED3\u5408<a href="/theme/responsive" data-url="/theme/responsive">\u54CD\u5E94\u5F0F\u89C4\u5219</a>\u51B3\u5B9A\uFF08\u7EE7\u627F\u4E8E <code>se-container</code>\uFF09</td><td><code>'1','2','3','4','5','6'</code></td><td>-</td></tr><tr><td><code>[label]</code></td><td>\u6807\u7B7E\u6587\u672C</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[labelWidth]</code></td><td>\u6807\u7B7E\u6587\u672C\u5BBD\u5EA6\uFF0C\u5355\u4F4D\uFF1A<code>px</code>\uFF08\u7EE7\u627F\u4E8E <code>se-container</code>\uFF09</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[hideLabel]</code></td><td>\u662F\u5426\u9690\u85CF\u5F53\u524D <code>label</code></td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[optional]</code></td><td>\u6807\u7B7E\u53EF\u9009\u4FE1\u606F</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[optionalHelp]</code></td><td>\u6807\u7B7E\u53EF\u9009\u5E2E\u52A9</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[optionalHelpColor]</code></td><td>\u6807\u7B7E\u53EF\u9009\u5E2E\u52A9\u80CC\u666F\u989C\u8272</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[error]</code></td><td>\u9519\u8BEF\u63CF\u8FF0</td><td><code>string, TemplateRef&lt;void>, { [key: string]: string, TemplateRef<void> }</code></td><td>-</td></tr><tr><td><code>[extra]</code></td><td>\u989D\u5916\u63D0\u793A\u4FE1\u606F</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[required]</code></td><td>\u662F\u5426\u5FC5\u586B\u9879\u6807\u8BC6\u7B26\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\u81EA\u52A8\u6839\u636E\u8868\u5355\u5143\u7D20\u662F\u5426\u6709 <code>RequiredValidator</code> \u6821\u9A8C\u6765\u8BBE\u7F6E\u503C</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[controlClass]</code></td><td>\u63A7\u4EF6\u533A\u57DF\u6837\u5F0F\u540D</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[id]</code></td><td>\u81EA\u5B9A\u4E49\u7EC4\u4EF6 <code>id</code></td><td><code>string</code></td><td>-</td></tr><tr><td><code>[line]</code></td><td>\u5206\u9694\u7EBF\uFF08\u7EE7\u627F\u4E8E <code>se-container</code>\uFF09</td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[noColon]</code></td><td>\u662F\u5426\u4E0D\u663E\u793A label \u540E\u9762\u7684\u5192\u53F7</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr></tbody></table><h3 id="se-title"><a class="lake-link"><i data-anchor="se-title"></i></a>se-title</h3><p>\u7528\u4E8E\u5C55\u793A\u6807\u9898\uFF0C\u5355\u72EC\u4E00\u884C\u3002</p><h2 id="\u5E38\u89C1\u95EE\u9898"><a class="lake-link"><i data-anchor="\u5E38\u89C1\u95EE\u9898"></i></a>\u5E38\u89C1\u95EE\u9898</h2><h3 id="\u4EC0\u4E48\u65F6\u5019\u81EA\u5B9A\u4E49\u7EC4\u4EF6id"><a class="lake-link"><i data-anchor="\u4EC0\u4E48\u65F6\u5019\u81EA\u5B9A\u4E49\u7EC4\u4EF6id"></i></a>\u4EC0\u4E48\u65F6\u5019\u81EA\u5B9A\u4E49\u7EC4\u4EF6id</h3><p>\u70B9\u51FB\u8868\u5355\u7684 Label \u4F1A\u5C06\u5149\u6807\u5B9A\u4F4D\u81F3\u76F8\u5E94\u7EC4\u4EF6\u4E0B\uFF0C\u800C <code>ng-edit</code> \u4F1A\u81EA\u52A8\u6839\u636E <code>ngModel</code> \u72B6\u6001\u5408\u7406\u7684\u8BBE\u5B9A <code>id</code>\uFF0C\u7EDD\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u4F60\u65E0\u987B\u5173\u5FC3 <code>id</code> \u7684\u7ED1\u5B9A\u72B6\u6001\uFF0C\u5F53\u7136\u82E5\u4F60\u624B\u52A8\u6307\u5B9A <code>id</code> \u503C\u5219\u4F18\u5148\u7EA7\u66F4\u9AD8\u4F46\u540C\u65F6\u4F60\u9700\u8981\u81EA\u5DF1\u7EF4\u62A4\u7EC4\u4EF6\u5BF9\u5E94\u7684 <code>id</code> \u503C\u3002</p>`,meta:{type:"CURD",title:"se",subtitle:"\u7F16\u8F91",cols:1,order:3,module:"import { SEModule } from '@delon/abc/se';"},toc:[{id:"API",title:"API",h:2,children:[{id:"se-container",title:"se-container",h:3},{id:"se",title:"se",h:3},{id:"se-title",title:"se-title",h:3}]},{id:"\u5E38\u89C1\u95EE\u9898",title:"\u5E38\u89C1\u95EE\u9898",h:2,children:[{id:"\u4EC0\u4E48\u65F6\u5019\u81EA\u5B9A\u4E49\u7EC4\u4EF6id",title:"\u4EC0\u4E48\u65F6\u5019\u81EA\u5B9A\u4E49\u7EC4\u4EF6id",h:3}]}]}},demo:!0};codes=[{id:"components-se-basic",meta:{order:1,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:{"zh-CN":"<p>\u4E00\u884C\u4E24\u5217\u8868\u5355\u3002</p>","en-US":"<p>1 rows & 2 columns layout form.</p>"},code:`import { Component, inject } from '@angular/core';
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
}`,lang:"ts",componentName:"ComponentsSeComplexComponent",point:8,name:"complex",urls:"packages/abc/se/demo/complex.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-se"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:49,vars:21,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-se-basic"),e(7,`
        `),r(),e(8,`
      
        `),d(9,"code-box",3),e(10,`
          `),p(11,"components-se-reactive"),e(12,`
        `),r(),e(13,`
      
        `),d(14,"code-box",3),e(15,`
          `),p(16,"components-se-compact"),e(17,`
        `),r(),e(18,`
      
        `),d(19,"code-box",3),e(20,`
          `),p(21,"components-se-horizontal"),e(22,`
        `),r(),e(23,`
      
        `),d(24,"code-box",3),e(25,`
          `),p(26,"components-se-inline"),e(27,`
        `),r(),e(28,`
      
        `),d(29,"code-box",3),e(30,`
          `),p(31,"components-se-vertical"),e(32,`
        `),r(),e(33,`
      
        `),d(34,"code-box",3),e(35,`
          `),p(36,"components-se-line"),e(37,`
        `),r(),e(38,`
      
        `),d(39,"code-box",3),e(40,`
          `),p(41,"components-se-reset-errors"),e(42,`
        `),r(),e(43,`
      
        `),d(44,"code-box",3),e(45,`
          `),p(46,"components-se-complex"),e(47,`
        `),r(),e(48,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id),l(5),c("item",o.codes[1]),_("id",o.codes[1].id),l(5),c("item",o.codes[2]),_("id",o.codes[2].id),l(5),c("item",o.codes[3]),_("id",o.codes[3].id),l(5),c("item",o.codes[4]),_("id",o.codes[4].id),l(5),c("item",o.codes[5]),_("id",o.codes[5].id),l(5),c("item",o.codes[6]),_("id",o.codes[6].id),l(5),c("item",o.codes[7]),_("id",o.codes[7].id),l(5),c("item",o.codes[8]),_("id",o.codes[8].id))},dependencies:[O,bd,yd,xd,vd,Sd,zd,_d,Td,wd,R,P,j],encapsulation:2})};var J0=["*"],wo=class i{gutter;colInCon;col;get marginValue(){return-(this.gutter/2)}constructor(n){n.attach(this,"sg",{gutter:32,col:2})}static \u0275fac=function(t){return new(t||i)(tt(It))};static \u0275cmp=u({type:i,selectors:[["sg-container"],["","sg-container",""]],hostVars:8,hostBindings:function(t,o){t&2&&(Et("margin-left",o.marginValue,"px")("margin-right",o.marginValue,"px"),T("ant-row",!0)("sg__wrap",!0))},inputs:{gutter:[2,"gutter","gutter",dt],colInCon:[2,"sg-container","colInCon",n=>n==null?null:dt(n)],col:[2,"col","col",n=>n==null?null:dt(n)]},exportAs:["sgContainer"],features:[gt],ngContentSelectors:J0,decls:1,vars:0,template:function(t,o){t&1&&(Z(),H(0))},encapsulation:2,changeDetection:0})};var th=["*"],eh="sg",bn=class i{el=y(Ct).nativeElement;ren=y(Yt);rep=y(Mo);parentComp=y(wo,{host:!0,optional:!0});clsMap=[];inited=!1;col=null;get paddingValue(){return this.parentComp.gutter/2}constructor(){if(this.parentComp==null)throw new Error("[sg] must include 'sg-container' component")}setClass(){let{el:n,ren:t,clsMap:o,col:a}=this,s=this.parentComp;o.forEach(D=>t.removeClass(n,D)),o.length=0;let m=s.colInCon||s.col;return o.push(...this.rep.genCls(a??m,m),`${eh}__item`),o.forEach(D=>t.addClass(n,D)),this}ngOnChanges(){this.inited&&this.setClass()}ngAfterViewInit(){this.setClass(),this.inited=!0}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["sg"]],hostVars:4,hostBindings:function(t,o){t&2&&Et("padding-left",o.paddingValue,"px")("padding-right",o.paddingValue,"px")},inputs:{col:[2,"col","col",n=>n==null?null:dt(n)]},exportAs:["sg"],features:[gt,Rt],ngContentSelectors:th,decls:1,vars:0,template:function(t,o){t&1&&(Z(),H(0))},encapsulation:2,changeDetection:0})};var Dd=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=$t({type:i});static \u0275inj=Gt({imports:[Ce]})};function nh(i,n){if(i&1&&(e(0,`
      `),d(1,"sg",1),e(2,`
        `),d(3,"div",2),e(4),r(),e(5,`
      `),r(),e(6,`
    `)),i&2){let t=n.$index;l(),c("col",t===5?2:null),l(3),B(t+1)}}var Md=class i{ls=Array(11).fill(0);static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-sg-basic"]],decls:5,vars:0,consts:[["sg-container","4"],[3,"col"],[1,"item"]],template:function(t,o){t&1&&(e(0," "),d(1,"div",0),e(2,`
    `),xt(3,nh,7,2,null,null,St),r()),t&2&&(l(3),vt(o.ls))},dependencies:[Dd,wo,bn],styles:["[_nghost-%COMP%]   .sg__item[_ngcontent-%COMP%]{padding:5px 0;text-align:center;border-radius:0;min-height:30px;margin-top:8px;margin-bottom:8px;color:#fff}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]{background:#00a0e9;height:120px;line-height:120px;font-size:13px}"]})};var Nd=class i{item={cols:1,urls:{"en-US":"packages/abc/sg/index.en-US.md","zh-CN":"packages/abc/sg/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>A higher-order components of grid systems, that consists of <code>sg-container</code> (directive) and <code>sg</code> components:</p><pre class="hljs language-html"><code>&lt;div nz-row [nzGutter]="32"&gt;
  &lt;nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6"&gt;1&lt;/nz-col&gt;
  &lt;nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6"&gt;2&lt;/nz-col&gt;
  &lt;nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6"&gt;3&lt;/nz-col&gt;
  &lt;nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6"&gt;4&lt;/nz-col&gt;
&lt;/div&gt;</code></pre><p>More friendly:</p><pre class="hljs language-html"><code>&lt;div sg-container="4"&gt;
  &lt;sg&gt;1&lt;/sg&gt;
  &lt;sg&gt;2&lt;/sg&gt;
  &lt;sg&gt;3&lt;/sg&gt;
  &lt;sg&gt;4&lt;/sg&gt;
&lt;/div&gt;</code></pre></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="sg-container"><a class="lake-link"><i data-anchor="sg-container"></i></a>sg-container</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[gutter]</code></td><td>specify the distance between two items, unit is <code>px</code>, only <code>nzLayout:horizontal</code></td><td><code>number</code></td><td><code>32</code></td><td>\u2705</td></tr><tr><td><code>[<a data-toc="sg">sg</a>-container]</code></td><td>specify the maximum number of columns to display, the final columns number is determined by col setting combined with <a href="/theme/responsive" data-url="/theme/responsive">Responsive Rules</a></td><td><code>'1','2','3','4','5','6'</code></td><td>-</td><td>-</td></tr><tr><td><code>[col]</code></td><td>specify the maximum number of columns to display, the final columns number is determined by col setting combined with <a href="/theme/responsive" data-url="/theme/responsive">Responsive Rules</a></td><td><code>'1','2','3','4','5','6'</code></td><td><code>2</code></td><td>\u2705</td></tr></tbody></table><h3 id="sg"><a class="lake-link"><i data-anchor="sg"></i></a>sg</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[col]</code></td><td>specify the maximum number of columns to display, the final columns number is determined by col setting combined with <a href="/theme/responsive" data-url="/theme/responsive">Responsive Rules</a></td><td><code>'1','2','3','4','5','6'</code></td><td>-</td></tr></tbody></table>`,meta:{type:"Layout",order:1,title:"sg",subtitle:"Simple Grid",cols:1,module:"import { SGModule } from '@delon/abc/sg';"},toc:[{id:"API",title:"API",h:2,children:[{id:"sg-container",title:"sg-container",h:3},{id:"sg",title:"sg",h:3}]}]},"zh-CN":{content:`<section class="markdown"><p>\u7B80\u5316\u6805\u683C\u7CFB\u7EDF\u8FD0\u7528\u7684\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u5B83\u7531 <code>sg-container</code> \u5BB9\u5668\uFF08\u6307\u4EE4\uFF09\u548C <code>sg</code> \u7EC4\u4EF6\u7EC4\u5408\u4EE3\u66FF\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5E03\u5C40\uFF1A</p><pre class="hljs language-html"><code>&lt;div nz-row [nzGutter]="32"&gt;
  &lt;nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6"&gt;1&lt;/nz-col&gt;
  &lt;nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6"&gt;2&lt;/nz-col&gt;
  &lt;nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6"&gt;3&lt;/nz-col&gt;
  &lt;nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6"&gt;4&lt;/nz-col&gt;
&lt;/div&gt;</code></pre><p>\u66FF\u4EE3\uFF1A</p><pre class="hljs language-html"><code>&lt;div sg-container="4"&gt;
  &lt;sg&gt;1&lt;/sg&gt;
  &lt;sg&gt;2&lt;/sg&gt;
  &lt;sg&gt;3&lt;/sg&gt;
  &lt;sg&gt;4&lt;/sg&gt;
&lt;/div&gt;</code></pre></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="sg-container"><a class="lake-link"><i data-anchor="sg-container"></i></a>sg-container</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[gutter]</code></td><td>\u95F4\u8DDD\uFF0C\u5F53 <code>nzLayout:horizontal</code> \u65F6\u6709\u6548</td><td><code>number</code></td><td><code>32</code></td><td>\u2705</td></tr><tr><td><code>[<a data-toc="sg">sg</a>-container]</code></td><td>\u6307\u5B9A\u8868\u5355\u5143\u7D20\u6700\u591A\u5206\u51E0\u5217\u5C55\u793A\uFF0C\u6700\u7EC8\u4E00\u884C\u51E0\u5217\u7531 col \u914D\u7F6E\u7ED3\u5408<a href="/theme/responsive" data-url="/theme/responsive">\u54CD\u5E94\u5F0F\u89C4\u5219</a>\u51B3\u5B9A\uFF0C</td><td><code>'1','2','3','4','5','6'</code></td><td>-</td><td>-</td></tr><tr><td><code>[col]</code></td><td>\u6307\u5B9A\u8868\u5355\u5143\u7D20\u6700\u591A\u5206\u51E0\u5217\u5C55\u793A\uFF0C\u6700\u7EC8\u4E00\u884C\u51E0\u5217\u7531 col \u914D\u7F6E\u7ED3\u5408<a href="/theme/responsive" data-url="/theme/responsive">\u54CD\u5E94\u5F0F\u89C4\u5219</a>\u51B3\u5B9A\uFF0C</td><td><code>'1','2','3','4','5','6'</code></td><td><code>2</code></td><td>\u2705</td></tr></tbody></table><h3 id="sg"><a class="lake-link"><i data-anchor="sg"></i></a>sg</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[col]</code></td><td>\u6307\u5B9A\u8868\u5355\u5143\u7D20\u6700\u591A\u5206\u51E0\u5217\u5C55\u793A\uFF0C\u6700\u7EC8\u4E00\u884C\u51E0\u5217\u7531 col \u914D\u7F6E\u7ED3\u5408<a href="/theme/responsive" data-url="/theme/responsive">\u54CD\u5E94\u5F0F\u89C4\u5219</a>\u51B3\u5B9A\uFF0C</td><td><code>'1','2','3','4','5','6'</code></td><td>-</td></tr></tbody></table>`,meta:{type:"Layout",order:1,title:"sg",subtitle:"\u7B80\u6613\u6805\u683C",cols:1,module:"import { SGModule } from '@delon/abc/sg';"},toc:[{id:"API",title:"API",h:2,children:[{id:"sg-container",title:"sg-container",h:3},{id:"sg",title:"sg",h:3}]}]}},demo:!0};codes=[{id:"components-sg-basic",meta:{order:1,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:{"zh-CN":"<p>\u4E00\u884C\u56DB\u5217\u5E03\u5C40\u3002</p>","en-US":"<p>1 rows & 4 columns layout.</p>"},code:`import { Component } from '@angular/core';

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
  imports: [SGModule]
})
export class ComponentsSgBasicComponent {
  ls = Array(11).fill(0);
}`,lang:"ts",componentName:"ComponentsSgBasicComponent",point:0,name:"basic",urls:"packages/abc/sg/demo/basic.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-sg"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-sg-basic"),e(7,`
        `),r(),e(8,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id))},dependencies:[O,Md,R,P,j],encapsulation:2})};var ih=["st"],dh=()=>({type:"strict"}),rh=i=>({params:i}),Ed=class i{url="/users?total=2&field=list";params={a:1,b:2};st;columns=[{title:"\u7F16\u53F7",index:"id",width:80},{title:"\u5934\u50CF",index:"picture.thumbnail",type:"img",width:60},{title:"\u90AE\u7BB1",index:"email",width:80},{title:"\u7535\u8BDD",index:"phone"},{title:{text:"\u4F63\u91D1",optional:"\uFF08\u5355\u4F4D\uFF1A\u5143\uFF09",optionalHelp:"\u8BA1\u7B97\u516C\u5F0F=\u8BA2\u5355\u91D1\u989D * 0.6%"},index:"price",type:"currency"},{title:"\u6CE8\u518C\u65F6\u95F4",type:"date",index:"registered"}];setRow(){this.st.setRow(0,{price:1e8})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-basic"]],viewQuery:function(t,o){if(t&1&&ot(ih,5),t&2){let a;W(a=U())&&(o.st=a.first)}},decls:7,vars:7,consts:[["st",""],["nz-button","","nzType","primary",3,"click"],[3,"widthMode","data","req","columns"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"button",1),b("click",function(){return g(a),C(o.setRow())}),e(2,"setRow Method"),r(),e(3,`
    `),p(4,"st",2,0),e(6,`
  `)}t&2&&(l(4),c("widthMode",et(4,dh))("data",o.url)("req",Q(5,rh,o.params))("columns",o.columns))},dependencies:[$,G,E,k,M,N],encapsulation:2})};var ah=["customFilter"];function lh(i,n){if(i&1){let t=z();e(0,`
      `),d(1,"div",5),e(2,`
        `),d(3,"p"),e(4,"Custom body"),r(),e(5,`
        `),d(6,"button",6),b("click",function(){let a=g(t),s=a.$implicit,m=a.handle,D=h();return C(D.close(s,m,!0))}),e(7,"confirm"),r(),e(8,`
        `),d(9,"button",3),b("click",function(){let a=g(t),s=a.$implicit,m=a.handle,D=h();return C(D.close(s,m,!1))}),e(10,"reset"),r(),e(11,`
      `),r(),e(12,`
    `)}}var Id=class i{msg=y(yt);users=[];customFilter;columns=[];ngOnInit(){this.columns=[{title:"\u7F16\u53F7",index:"id",type:"checkbox",selections:[{text:"\u5C0F\u4E8E25\u5C81",select:t=>t.forEach(o=>o.checked=o.age<25)},{text:"\u5927\u4E8E25\u5C81",select:t=>t.forEach(o=>o.checked=o.age>=25)}]},{title:"\u59D3\u540D",index:"name",sort:{compare:(t,o)=>t.name.length-o.name.length},filter:{type:"keyword",placeholder:"\u8F93\u5165\u540E\u6309\u56DE\u8F66\u641C\u7D22",fn:(t,o)=>!t.value||o.name.indexOf(t.value)!==-1}},{title:"\u5E74\u9F84",index:"age",sort:{compare:(t,o)=>t.age-o.age},filter:{type:"number",placeholder:"\u8303\u56F4 10 ~ 100 \u4E4B\u95F4",number:{min:10,max:100},fn:(t,o)=>t.value!=null?o.age>=+t.value:!0}},{title:"\u72B6\u6001",type:"badge",index:"status",badge:{1:{text:"Success",color:"success"},2:{text:"Error",color:"error"},3:{text:"Processing",color:"processing"},4:{text:"Default",color:"default"},5:{text:"Warning",color:"warning"}},filter:{menus:[{text:"Success",value:1},{text:"Error",value:2}],fn:(t,o)=>o.age>=t.value[0]&&o.age<=t.value[1],multiple:!0}},{title:"Date",index:"created",type:"date",filter:{type:"date",date:{mode:"date",showToday:!1,disabledDate:_a.disabledAfterDate()},fn:()=>!0}},{title:"Custom",index:"name",filter:{type:"custom",icon:{type:"search",theme:"outline"},custom:this.customFilter,showOPArea:!1,fn:(t,o)=>!t.value||o.name.indexOf(t.value)!==-1}}];let n=Array(100).fill({}).map((t,o)=>({id:o+1,name:`name ${o+1}`,age:Math.ceil(Math.random()*10)+20,status:Math.floor(Math.random()*5)+1,created:new Date}));ie(n).pipe(Co(500)).subscribe(t=>this.users=t)}close(n,t,o){this.msg.info(`Process result: ${o}${o?"(only name 2)":""}`),n.menus=[{value:o?"name 2":null}],t.close(o)}change(n){console.log(n)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-custom-data"]],viewQuery:function(t,o){if(t&1&&ot(ah,7),t&2){let a;W(a=U())&&(o.customFilter=a.first)}},decls:22,vars:2,consts:[["st",""],["customFilter",""],[1,"mb-md"],["nz-button","",3,"click"],[3,"change","data","columns"],[1,"p-lg"],["nz-button","","nzType","primary",3,"click"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"div",2),e(2,`
      `),d(3,"button",3),b("click",function(){g(a);let m=v(17);return C(m.clear())}),e(4,"Clear Data"),r(),e(5,`
      `),d(6,"button",3),b("click",function(){g(a);let m=v(17);return C(m.reload())}),e(7,"Reload Data"),r(),e(8,`
      `),d(9,"button",3),b("click",function(){g(a);let m=v(17);return m.clearStatus(),C(m.reload())}),e(10,"Clear Status"),r(),e(11,`
      `),d(12,"button",3),b("click",function(){g(a);let m=v(17);return C(m.setRow(0,{className:"text-success"}))}),e(13,"Update Row ClassName"),r(),e(14,`
    `),r(),e(15,`
    `),d(16,"st",4,0),b("change",function(m){return g(a),C(o.change(m))}),r(),e(18,`
    `),f(19,lh,13,0,"ng-template",null,1,I),e(21,`
  `)}t&2&&(l(16),c("data",o.users)("columns",o.columns))},dependencies:[$,G,E,k,M,N],encapsulation:2})};var ch=()=>({position:"both"}),sh={1:{text:"\u6210\u529F",color:"success"},2:{text:"\u9519\u8BEF",color:"error",tooltip:"TIPS"},3:{text:"\u8FDB\u884C\u4E2D",color:"processing"},4:{text:"\u9ED8\u8BA4",color:"default"},5:{text:"\u8B66\u544A",color:"warning"}},ph={1:{text:"\u6210\u529F",color:"green"},2:{text:"\u9519\u8BEF",color:"red"},3:{text:"\u8FDB\u884C\u4E2D",color:"blue"},4:{text:"\u9ED8\u8BA4",color:""},5:{text:"\u8B66\u544A",color:"orange",tooltip:"TIPS"}},yn=(i,n)=>Math.floor(Math.random()*(n-i+1)+i),Pd=class i{users=[];columns=[{title:"\u884C\u53F7",type:"no"},{title:"\u59D3\u540D",index:"name"},{title:"\u5E74\u9F84",index:"age",type:"number"},{title:"HTML",index:"html",safeType:"safeHtml"},{title:"Text",index:"html",safeType:"text"},{title:"tag",index:"tag",type:"tag",tag:ph},{title:"badge",index:"badge",type:"badge",badge:sh},{title:"Enum",index:"enum",type:"enum",enum:{1:"\u58F9",2:"\u8D30",3:"\u53C1"}},{title:"yn",index:"yn",type:"yn"}];reload(){this.users=Array(10).fill({}).map((n,t)=>({id:t+1,name:`name ${t+1}`,age:yn(10,50),tag:yn(1,5),badge:yn(1,5),enum:yn(1,3),yn:[!0,!1][yn(1,5)%2],html:`<strong>${t+1}</strong> Other`}))}constructor(){this.reload()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-type"]],decls:7,vars:4,consts:[["st",""],["nz-button","",3,"click"],[3,"data","columns","page"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"button",1),b("click",function(){return g(a),C(o.reload())}),e(2,"Reload"),r(),e(3,`
    `),p(4,"st",2,0),e(6,`
  `)}t&2&&(l(4),c("data",o.users)("columns",o.columns)("page",et(3,ch)))},dependencies:[$,G,E,k,M,N],encapsulation:2})};var mh=["st"],uh=()=>({type:"strict"}),hh=i=>({params:i}),Rd=class i{url="/users?total=2&field=list";params={a:1,b:2};st;columns=[{title:"\u7F16\u53F7",index:"id",width:55},{title:"\u7C7B\u578B",index:"type",width:60,cell:{enum:{1:"\u666E\u901A",2:"\u4F1A\u5458",3:"\u7BA1\u7406"}}},{title:"\u5934\u50CF",index:"picture.thumbnail",width:64,cell:{type:"img"}},{title:"\u90AE\u7BB1",index:"email",width:120},{title:"\u7535\u8BDD",index:"phone",cell:{mask:"999****9999"}},{title:{text:"\u4F63\u91D1",optionalHelp:"\u8BA1\u7B97\u516C\u5F0F=\u8BA2\u5355\u91D1\u989D * 0.6%"},index:"price",cell:{type:"currency",unit:"\u5143"}},{title:"\u4EBA\u6C11\u5E01\u5199\u6CD5",index:"total",cell:{type:"cny"}},{title:"Site",index:"website",width:100,cell:n=>({tooltip:n.website,link:{url:n.website}})},{title:"\u53EF\u7528",index:"disabled",width:64,cell:{type:"boolean",tooltip:"\u70B9\u51FB\u53EF\u5207\u6362\u72B6\u6001"},className:"point",click:n=>{this.st.setRow(n,{disabled:!n.disabled})}},{title:"\u6CE8\u518C\u65F6\u95F4",index:"registered",width:180,cell:{type:"date"}}];setRow(){this.st.setRow(0,{price:1e8})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-cell"]],viewQuery:function(t,o){if(t&1&&ot(mh,5),t&2){let a;W(a=U())&&(o.st=a.first)}},decls:7,vars:7,consts:[["st",""],["nz-button","","nzType","primary",3,"click"],[3,"widthMode","data","req","columns"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"button",1),b("click",function(){return g(a),C(o.setRow())}),e(2,"setRow Method"),r(),e(3,`
    `),p(4,"st",2,0),e(6,`
  `)}t&2&&(l(4),c("widthMode",et(4,uh))("data",o.url)("req",Q(5,hh,o.params))("columns",o.columns))},dependencies:[$,G,E,k,M,N],encapsulation:2})};var fh=i=>({params:i}),gh=i=>({process:i}),Ad=class i{url="/users?total=100";params={a:1,b:2};columns=[{title:"\u7F16\u53F7",index:"id.value",type:"checkbox"},{title:"\u5934\u50CF",type:"img",width:60,index:"picture.thumbnail"},{title:"\u90AE\u7BB1",index:"email"},{title:"\u7535\u8BDD",index:"phone"},{title:"\u6CE8\u518C\u65F6\u95F4",type:"date",index:"registered"}];change(n){console.log("change",n)}dataProcess(n){return n.map((t,o)=>(t.disabled=o===0,o===1&&(t.checked=!0),t))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-checkbox"]],decls:12,vars:8,consts:[["st",""],[1,"mb-md"],["nz-button","",3,"click"],[3,"change","data","columns","req","res"]],template:function(t,o){if(t&1){let a=z();e(0," "),d(1,"div",1),e(2,`
      `),d(3,"button",2),b("click",function(){g(a);let m=v(11);return C(m.checkAll(!0))}),e(4,"All"),r(),e(5,`
      `),d(6,"button",2),b("click",function(){g(a);let m=v(11);return C(m.clearCheck())}),e(7,"Clean"),r(),e(8,`
    `),r(),e(9,`
    `),d(10,"st",3,0),b("change",function(m){return g(a),C(o.change(m))}),r()}t&2&&(l(10),c("data",o.url)("columns",o.columns)("req",Q(4,fh,o.params))("res",Q(6,gh,o.dataProcess)))},dependencies:[$,G,E,k,M,N],encapsulation:2})};var Ch=i=>({params:i}),bh=i=>({process:i}),Fd=class i{url="/users?total=300";params={a:1,b:2};columns=[{title:"\u7F16\u53F7",index:"id",type:"radio",width:70},{title:"\u5934\u50CF",type:"img",width:60,index:"picture.thumbnail"},{title:"\u90AE\u7BB1",index:"email"},{title:"\u7535\u8BDD",index:"phone"},{title:"\u6CE8\u518C\u65F6\u95F4",type:"date",index:"registered"}];change(n){console.log("change",n)}dataChange(n){return n.map((t,o)=>(t.disabled=o===0,t.hidden=o===1,t))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-radio"]],decls:12,vars:8,consts:[["st",""],[1,"mb-md"],["nz-button","",3,"click"],[3,"change","data","columns","req","res"]],template:function(t,o){if(t&1){let a=z();e(0," "),d(1,"div",1),e(2,`
      `),d(3,"button",2),b("click",function(){g(a);let m=v(11);return C(m.setRow(1,{checked:!0}))}),e(4,"Radio second"),r(),e(5,`
      `),d(6,"button",2),b("click",function(){g(a);let m=v(11);return C(m.clearRadio())}),e(7,"Clean"),r(),e(8,`
    `),r(),e(9,`
    `),d(10,"st",3,0),b("change",function(m){return g(a),C(o.change(m))}),r()}t&2&&(l(10),c("data",o.url)("columns",o.columns)("req",Q(4,Ch,o.params))("res",Q(6,bh,o.dataChange)))},dependencies:[$,G,E,k,M,N],encapsulation:2})};var yh=()=>({type:"strict"}),xh=i=>({params:i}),Ld=class i{msg=y(yt);url="/users?total=2&field=list";params={a:1,b:2};columns=[{title:"\u7F16\u53F7",index:"id",width:80},{title:"\u90AE\u7BB1",index:"email",width:80},{title:"\u7535\u8BDD",index:"phone"},{title:"\u6CE8\u518C\u65F6\u95F4",type:"date",index:"registered"}];show(n,t){n.type==="head"?this.msg.info(`\u70B9\u51FB\u6807\u9898\uFF0C\u4E0B\u6807\u4E3A\uFF1A${n.colIndex}\uFF0C\u5F53\u524D\u6309\u94AE\u4E3A\uFF1A${t.text}`):this.msg.info(`\u70B9\u51FB\u5355\u5143\u683C\uFF0C\u884C\u4E0B\u6807\u4E3A\uFF1A${n.rowIndex}\uFF0C\u5217\u4E0B\u6807\u4E3A\uFF1A${n.colIndex}\uFF0C\u5F53\u524D\u6309\u94AE\u4E3A\uFF1A${t.text}`)}handleContextmenu=n=>n.type==="head"?[{text:"Click me",fn:t=>this.show(n,t)}]:[{text:"Edit",fn:t=>this.show(n,t)},{text:"View",fn:t=>this.show(n,t)},{text:"Next",children:[{text:"Nothing",fn:t=>this.show(n,t)},{text:"asdf",fn:t=>this.show(n,t)}]}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-contextmenu"]],decls:4,vars:8,consts:[["st",""],[3,"widthMode","data","req","columns","contextmenu"]],template:function(t,o){t&1&&(e(0,`
    `),p(1,"st",1,0),e(3,`
  `)),t&2&&(l(),c("widthMode",et(5,yh))("data",o.url)("req",Q(6,xh,o.params))("columns",o.columns)("contextmenu",o.handleContextmenu))},dependencies:[$,G],encapsulation:2})};var Bd=class i{users=Array(10).fill({}).map((n,t)=>({id:t+1,name:`name ${t+1}`,age:Math.ceil(Math.random()*10)+20}));columns=[{title:"\u7F16\u53F74",index:"id"},{title:"\u7F16\u53F75",index:"id"},{title:"\u7F16\u53F76",index:"id"},{title:"\u7F16\u53F77",index:"id"},{title:"\u7F16\u53F78",index:"id"},{title:"\u7F16\u53F78",index:"id"},{title:"\u7F16\u53F78",index:"id"},{title:"\u7F16\u53F78",index:"id"},{title:"\u7F16\u53F78",index:"id"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-drag"]],decls:1,vars:2,consts:[["drag","",3,"data","columns"]],template:function(t,o){t&1&&p(0,"st",0),t&2&&c("data",o.users)("columns",o.columns)},dependencies:[$,G],encapsulation:2})};var Sh=["st"];function zh(i,n){if(i&1){let t=z();e(0,`
          `),d(1,"input",5),b("ngModelChange",function(a){g(t);let s=h().index;h();let m=v(2);return C(m.setRow(s,{name:a}))}),r(),e(2,`
        `)}if(i&2){let t=h().$implicit;l(),c("ngModel",t.name)}}function _h(i,n){if(i&1&&e(0),i&2){let t=h().$implicit;ut(`
          `,t.name,`
        `)}}function Th(i,n){if(i&1&&(e(0,`
        `),f(1,zh,3,1)(2,_h,1,1)),i&2){let t=n.$implicit;l(),w(t.edit?1:2)}}function wh(i,n){if(i&1){let t=z();e(0,`
          `),d(1,"nz-input-number",6),b("ngModelChange",function(a){g(t);let s=h().index;h();let m=v(2);return C(m.setRow(s,{age:a}))}),r(),e(2,`
        `)}if(i&2){let t=h().$implicit;l(),c("ngModel",t.age)}}function kh(i,n){if(i&1&&e(0),i&2){let t=h().$implicit;ut(`
          `,t.age,`
        `)}}function Dh(i,n){if(i&1&&(e(0,`
        `),f(1,wh,3,1)(2,kh,1,1)),i&2){let t=n.$implicit;l(),w(t.edit?1:2)}}function Mh(i,n){if(i&1){let t=z();e(0,`
          `),d(1,"nz-switch",6),b("ngModelChange",function(a){g(t);let s=h().index;h();let m=v(2);return C(m.setRow(s,{enabled:a}))}),r(),e(2,`
        `)}if(i&2){let t=h().$implicit;l(),c("ngModel",t.enabled)}}function Nh(i,n){if(i&1&&e(0),i&2){let t=h().$implicit;ut(`
          `,t.enabled?"Y":"N",`
        `)}}function Eh(i,n){if(i&1&&(e(0,`
        `),f(1,Mh,3,1)(2,Nh,1,1)),i&2){let t=n.$implicit;l(),w(t.edit?1:2)}}var Vd=class i{msg=y(yt);st;users=Array(10).fill({}).map((n,t)=>({id:t+1,name:`name ${t+1}`,age:Math.ceil(Math.random()*10)+20,enabled:t%2===0}));columns=[{title:"\u7F16\u53F7",index:"id"},{title:"\u59D3\u540D",index:"name",render:"nameTpl"},{title:"\u5E74\u9F84",index:"age",render:"ageTpl"},{title:"\u542F\u7528",index:"enabled",render:"enabledTpl"},{title:"OP",buttons:[{text:"Edit",iif:n=>!n.edit,click:n=>this.updateEdit(n,!0)},{text:"Save",iif:n=>n.edit,click:n=>{this.submit(n)}},{text:"Cancel",iif:n=>n.edit,click:n=>this.updateEdit(n,!1)}]}];submit(n){this.msg.success(JSON.stringify(this.st.pureItem(n))),this.updateEdit(n,!1)}updateEdit(n,t){this.st.setRow(n,{edit:t},{refreshSchema:!0})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-edit-row"]],viewQuery:function(t,o){if(t&1&&ot(Sh,5),t&2){let a;W(a=U())&&(o.st=a.first)}},decls:11,vars:2,consts:[["st",""],[3,"data","columns"],["st-row","nameTpl"],["st-row","ageTpl"],["st-row","enabledTpl"],["nz-input","",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"]],template:function(t,o){t&1&&(e(0,`
    `),d(1,"st",1,0),e(3,`
      `),f(4,Th,3,1,"ng-template",2),e(5,`
      `),f(6,Dh,3,1,"ng-template",3),e(7,`
      `),f(8,Eh,3,1,"ng-template",4),e(9,`
    `),r(),e(10,`
  `)),t&2&&(l(),c("data",o.users)("columns",o.columns))},dependencies:[$,G,Vn,lt,at,st,ht,rt,pt,Gn,qn,Wo,Ho],encapsulation:2})};var Ih=i=>({params:i}),Od=class i{url="/users?total=100";params={name:"asdf"};columns=[{title:"\u7F16\u53F7",index:"id",default:"-"},{title:"\u5934\u50CF",type:"img",width:60,index:"picture.thumbnail"},{title:"\u90AE\u7BB1",index:"email"},{title:"\u7535\u8BDD",index:"phone"},{title:"\u6CE8\u518C\u65F6\u95F4",type:"date",index:"registered"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-form"]],decls:15,vars:7,consts:[["st",""],[1,"mb-md"],["nz-input","","name","name","nzPlaceHolder","\u8BF7\u8F93\u5165\u59D3\u540D",1,"mr-sm",2,"width","100px",3,"ngModelChange","ngModel"],["nz-button","",3,"click","nzType"],["nz-button","",3,"click"],[3,"data","req","columns"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"div",1),e(2,`
      `),d(3,"input",2),L("ngModelChange",function(m){return g(a),A(o.params.name,m)||(o.params.name=m),C(m)}),r(),e(4,`
      `),d(5,"button",3),b("click",function(){g(a);let m=v(13);return C(m.load(1))}),e(6,"\u641C\u7D22"),r(),e(7,`
      `),d(8,"button",4),b("click",function(){g(a);let m=v(13);return o.params={},C(m.reset())}),e(9,"\u91CD\u7F6E"),r(),e(10,`
    `),r(),e(11,`
    `),p(12,"st",5,0),e(14,`
  `)}t&2&&(l(3),F("ngModel",o.params.name),l(2),c("nzType","primary"),l(7),c("data",o.url)("req",Q(5,Ih,o.params))("columns",o.columns))},dependencies:[$,G,lt,at,st,ht,rt,pt,E,k,M,N],encapsulation:2})};var Ph=i=>({params:i}),jd=class i{url="/users?results=3";params={a:1,b:2};clickRowClassName={exclusive:!0,fn:()=>"text-error"};columns=[{title:"\u7F16\u53F7",index:"id"},{title:"\u90AE\u7BB1",index:"email"},{title:"\u7535\u8BDD",index:"phone"}];_click(n){console.log("click",n)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-row-op"]],decls:12,vars:6,consts:[["st",""],["nz-button","",3,"click"],[3,"change","data","req","columns","clickRowClassName"]],template:function(t,o){if(t&1){let a=z();e(0," "),d(1,"button",1),b("click",function(){g(a);let m=v(11);return C(m.addRow({id:1e3,email:"add@email.com",phone:"123"}))}),e(2," addRow"),r(),e(3,`
    `),d(4,"button",1),b("click",function(){g(a);let m=v(11);return C(m.removeRow(0))}),e(5," removeRow index: 0 "),r(),e(6,`
    `),d(7,"button",1),b("click",function(){g(a);let m=v(11);return C(m.setRow(0,{className:"text-success"}))}),e(8," Via setRow method "),r(),e(9,`
    `),d(10,"st",2,0),b("change",function(m){return g(a),C(o._click(m))}),r()}t&2&&(l(10),c("data",o.url)("req",Q(4,Ph,o.params))("columns",o.columns)("clickRowClassName",o.clickRowClassName))},dependencies:[$,G,E,k,M,N],encapsulation:2})};var Rh=i=>({params:i}),Hd=class i{url="/users?total=200";params={a:1,b:2};columns=[{title:"\u7F16\u53F7",index:"id"},{title:"\u5934\u50CF",type:"img",width:60,index:"picture.thumbnail"},{title:"\u59D3\u540D",index:"name.last",format:(n,t,o)=>`${o+1}: ${n.name.last} ${n.name.first}`,sort:!0},{title:"\u56FD\u5BB6",index:"nat",filter:{menus:[{text:"\u4E2D\u56FD",value:"CH"},{text:"\u7F8E\u56FD",value:"US"},{text:"\u5FB7\u56FD",value:"DE"}]},sort:!0},{title:"\u6027\u522B",index:"gender",filter:{menus:[{text:"male",value:"male"},{text:"female",value:"female"}],multiple:!1},sort:!0},{title:"\u6CE8\u518C\u65F6\u95F4",type:"date",index:"registered"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-sort"]],decls:7,vars:5,consts:[["st",""],["nz-button","",3,"click"],["multiSort","",3,"data","req","columns"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"button",1),b("click",function(){g(a);let m=v(5);return C(m.reset())}),e(2,"\u91CD\u7F6E"),r(),e(3,`
    `),p(4,"st",2,0),e(6,`
  `)}t&2&&(l(4),c("data",o.url)("req",Q(3,Rh,o.params))("columns",o.columns))},dependencies:[$,G,E,k,M,N],encapsulation:2})};function Ah(i,n){if(i&1&&e(0),i&2){let t=n.$implicit;ut(`
        `,t.description,`
      `)}}function Fh(i,n){if(i&1&&(e(0,`
        `),p(1,"nz-icon",4),e(2,`
      `)),i&2){let t=n.$implicit;l(),c("nzType",t.expand?"up":"down")}}var Wd=class i{customIcon=!1;users=Array(10).fill({}).map((n,t)=>({id:t+1,name:`name ${t+1}`,age:Math.ceil(Math.random()*10)+20,showExpand:t!==0,description:`${t+1}. My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.`}));columns=[{title:"\u7F16\u53F7",index:"id"},{title:"\u59D3\u540D",index:"name"},{title:"\u5E74\u9F84",index:"age"},{buttons:[{text:"Button"}]}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-expand"]],decls:13,vars:4,consts:[["expand",""],["expandIcon",""],["nz-button","","nzType","primary",3,"click"],["expandRowByClick","","expandAccordion","",3,"data","columns","expand","expandIcon"],[3,"nzType"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"button",2),b("click",function(){return g(a),C(o.customIcon=!o.customIcon)}),e(2,"Use Custom Icon"),r(),e(3,`
    `),d(4,"st",3),e(5,`
      `),f(6,Ah,1,1,"ng-template",null,0,I),e(8,`
      `),f(9,Fh,3,1,"ng-template",null,1,I),e(11,`
    `),r(),e(12,`
  `)}if(t&2){let a=v(7),s=v(10);l(4),c("data",o.users)("columns",o.columns)("expand",a)("expandIcon",o.customIcon?s:null)}},dependencies:[$,G,bt,k],encapsulation:2})};function Lh(i,n){if(i&1){let t=z();e(0),d(1,"span",7),e(2,`
          `),p(3,"nz-icon",8),e(4,`
        `),r(),e(5,`
        `),d(6,"nz-dropdown-menu",null,1),e(8,`
          `),d(9,"div",9),e(10,`
            `),d(11,"input",10),L("ngModelChange",function(a){g(t);let s=h();return A(s.searchValue,a)||(s.searchValue=a),C(a)}),r(),e(12,`
            `),d(13,"button",11),b("click",function(){g(t),h();let a=v(7);return C(a.load(2))}),e(14,"Search"),r(),e(15,`
          `),r(),e(16,`
        `),r(),e(17,`
      `)}if(i&2){let t=n.$implicit,o=v(7),a=h();ut(`
        `,t.title.text,`
        `),l(),c("nzDropdownMenu",o)("nzClickHide",!1),l(10),F("ngModel",a.searchValue),l(2),c("nzType","primary")}}function Bh(i,n){if(i&1&&(e(0,`
        `),d(1,"span",12),e(2),r(),e(3,`
      `)),i&2){let t=n.$implicit,o=n.index;l(),c("nzTooltipTitle","\u5E74\u9F84\uFF1A"+t.age),l(),Nn("tooltip: ",t.age,"-",o,"")}}var Ud=class i{searchValue;users=Array(10).fill({}).map((n,t)=>({id:t+1,name:`name ${t+1}`,age:Math.ceil(Math.random()*10)+20}));columns=[{title:"\u7F16\u53F7",index:"id"},{title:"\u59D3\u540D",index:"name",iif:()=>this.isChoose("name")},{title:"\u5E74\u9F84",index:"age",iif:()=>this.isChoose("age")},{title:"\u81EA\u5B9A\u4E49",renderTitle:"customTitle",render:"custom",iif:()=>this.isChoose("custom")}];customColumns=[{label:"\u59D3\u540D",value:"name",checked:!0},{label:"\u5E74\u9F84",value:"age",checked:!0},{label:"\u81EA\u5B9A\u4E49",value:"custom",checked:!0}];isChoose(n){return!!this.customColumns.find(t=>t.value===n&&t.checked)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-render"]],decls:14,vars:3,consts:[["st",""],["menuTpl","nzDropdownMenu"],[1,"mb-md"],["name","customColumns",3,"ngModelChange","ngModel"],[3,"data","columns"],["st-row","customTitle","type","title"],["st-row","custom"],["nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu","nzClickHide"],["nzType","down"],[1,"ant-table-filter-dropdown","p-sm"],["type","text","nz-input","","placeholder","Search name","name","searchValue",1,"width-sm","mr-sm",3,"ngModelChange","ngModel"],["nz-button","",3,"click","nzType"],["nz-tooltip","",3,"nzTooltipTitle"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"div",2),e(2,`
      `),d(3,"nz-checkbox-group",3),L("ngModelChange",function(m){return g(a),A(o.customColumns,m)||(o.customColumns=m),C(m)}),b("ngModelChange",function(){g(a);let m=v(7);return C(m.resetColumns({emitReload:!0}))}),r(),e(4,`
    `),r(),e(5,`
    `),d(6,"st",4,0),e(8,`
      `),f(9,Lh,18,5,"ng-template",5),e(10,`
      `),f(11,Bh,4,3,"ng-template",6),e(12,`
    `),r(),e(13,`
  `)}t&2&&(l(3),F("ngModel",o.customColumns),l(3),c("data",o.users)("columns",o.columns))},dependencies:[$,G,Vn,E,k,M,N,An,Da,st,ht,rt,pt,Ln,Eo,Io,Vt,bt,lt,at,Se,ee],encapsulation:2})};var Vh=["st"],qd=class i{msg=y(yt);st;users=Array(10).fill({}).map((n,t)=>({id:t+1,name:`name ${t+1}`,age:Math.ceil(Math.random()*10)+20}));columns=[{title:"\u5E8F\u53F7",type:"no"},{title:"\u7F16\u53F7",index:"id"},{title:"\u59D3\u540D",index:"name"},{title:"\u5E74\u9F84",index:"age"},{title:"\u64CD\u4F5C\u533A",buttons:[{text:n=>n.ok?"Click":"Edit",icon:n=>({type:n.ok?"edit":"delete"}),className:n=>n.ok?"text-error":null,type:"modal",modal:{component:il},click:(n,t)=>{this.msg.success(`\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\uFF0C\u56DE\u4F20\u503C\uFF1A${JSON.stringify(t)}`),this.st.setRow(n,{ok:!n.ok})}},{text:"Drawer",type:"drawer",drawer:{title:"\u7F16\u8F91",component:dl},click:(n,t)=>this.msg.success(`\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\uFF0C\u56DE\u4F20\u503C\uFF1A${JSON.stringify(t)}`)},{icon:"check-circle",click:n=>this.msg.info(`check-${n.name}`),iif:n=>n.id%2===0,iifBehavior:"disabled",tooltip:"Is disabled button"},{icon:"delete",type:"del",pop:{title:"Yar you sure?",okType:"danger",icon:"star"},click:(n,t,o)=>{this.msg.success(`\u6210\u529F\u5220\u9664\u3010${n.name}\u3011`),o.removeRow(n)},iif:n=>n.id%2===0},{text:"\u66F4\u591A",children:[{text:n=>n.id===1?"\u8FC7\u671F":"\u6B63\u5E38",click:n=>this.msg.error(`${n.id===1?"\u8FC7\u671F":"\u6B63\u5E38"}\u3010${n.name}\u3011`)},{text:"\u5BA1\u6838",click:n=>this.msg.info(`check-${n.name}`),iif:n=>n.id%2===0,iifBehavior:"disabled",tooltip:"This is tooltip"},{type:"divider"},{text:"\u91CD\u65B0\u5F00\u59CB",icon:"edit",click:n=>this.msg.success(`\u91CD\u65B0\u5F00\u59CB\u3010${n.name}\u3011`)}]}]}];change(n){console.log(n)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-buttons"]],viewQuery:function(t,o){if(t&1&&ot(Vh,5),t&2){let a;W(a=U())&&(o.st=a.first)}},decls:4,vars:2,consts:[["st",""],[3,"change","data","columns"]],template:function(t,o){if(t&1){let a=z();e(0," "),d(1,"st",1,0),b("change",function(m){return g(a),C(o.change(m))}),r(),e(3," ")}t&2&&(l(),c("data",o.users)("columns",o.columns))},dependencies:[$,G],encapsulation:2})};var Oh=["st"],Gd=class i{url="/users?total=100";st;columns=[{title:"\u7F16\u53F7",index:"id",width:80},{title:"\u81EA\u5B9A\u4E49\u5934\u50CF",type:"widget",widget:{type:"img",params:({record:n})=>({img:n.picture.thumbnail})},width:150},{title:"\u90AE\u7BB1",index:"email"}];changeImg(){this.st.setRow(0,{picture:{thumbnail:"https://ng-alain.com/assets/img/logo-color.svg"}},{refreshSchema:!0,emitReload:!1})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-widget"]],viewQuery:function(t,o){if(t&1&&ot(Oh,5),t&2){let a;W(a=U())&&(o.st=a.first)}},decls:19,vars:2,consts:[["st",""],[1,"mb-md"],["nz-button","",3,"click"],[3,"data","columns"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"div",1),e(2,`
      `),d(3,"button",2),b("click",function(){g(a);let m=v(17);return C(m.clear())}),e(4,"Clear Data"),r(),e(5,`
      `),d(6,"button",2),b("click",function(){g(a);let m=v(17);return C(m.reload())}),e(7,"Reload Data"),r(),e(8,`
      `),d(9,"button",2),b("click",function(){g(a);let m=v(17);return m.clearStatus(),C(m.reload())}),e(10,"Clear Status"),r(),e(11,`
      `),d(12,"button",2),b("click",function(){return g(a),C(o.changeImg())}),e(13,"Change Img Data"),r(),e(14,`
    `),r(),e(15,`
    `),p(16,"st",3,0),e(18,`
  `)}t&2&&(l(16),c("data",o.url)("columns",o.columns))},dependencies:[$,G,E,k,M,N],encapsulation:2})};var jh=i=>({params:i}),Hh=(i,n)=>n===1?{colSpan:0}:{},$d=class i{url="/users?total=2&field=list";params={a:1,b:2};columns=[{title:"\u7F16\u53F7",index:"id",sort:!0,width:100},{title:"\u5934\u50CF",type:"img",index:"picture.thumbnail",width:60},{title:"\u90AE\u7BB1",index:"email",onCell:(n,t)=>({colSpan:t===1?5:1})},{title:"first",index:"name.first",sort:!0,className:"text-center",onCell:(n,t)=>t===3?{rowSpan:2}:t===4?{rowSpan:0}:t===1?{colSpan:0}:{}},{title:"last",index:"name.last",onCell:Hh}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-colspan-rowspan"]],decls:3,vars:6,consts:[["st",""],["bordered","","size","middle",3,"data","ps","req","columns"]],template:function(t,o){t&1&&(e(0," "),p(1,"st",1,0)),t&2&&(l(),c("data",o.url)("ps",5)("req",Q(4,jh,o.params))("columns",o.columns))},dependencies:[$,G],encapsulation:2})};var Wh=()=>({x:"1300px"}),Qd=class i{users=Array(10).fill({}).map((n,t)=>({id:t+1,name:`name ${t+1}`,age:Math.ceil(Math.random()*10)+20}));columns=[{title:"\u7F16\u53F71",index:"id",fixed:"left",width:100},{title:"\u7F16\u53F72",index:"id",fixed:"left",width:100},{title:"\u7F16\u53F73",index:"id",fixed:"left",width:100},{title:"\u7F16\u53F74",index:"id"},{title:"\u7F16\u53F75",index:"id"},{title:"\u7F16\u53F76",index:"id"},{title:"\u7F16\u53F77",index:"id"},{title:"\u7F16\u53F78",index:"id"},{title:"\u7F16\u53F78",index:"id"},{title:"\u7F16\u53F78",index:"id"},{title:"\u7F16\u53F78",index:"id"},{title:"\u7F16\u53F78",index:"id"},{title:"\u59D3\u540D10",index:"name",fixed:"right",width:100},{title:"\u59D3\u540D11",index:"name",fixed:"right",width:100},{title:"\u5E74\u9F8412",index:"age",fixed:"right",width:100}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-fixed"]],decls:3,vars:4,consts:[[3,"data","columns","scroll"]],template:function(t,o){t&1&&(e(0," "),p(1,"st",0),e(2," ")),t&2&&(l(),c("data",o.users)("columns",o.columns)("scroll",et(3,Wh)))},dependencies:[$,G],encapsulation:2})};var Uh=["st"],qh=i=>({params:i}),Zd=class i{st=Zr("st");url="/users?total=2&field=list";params={a:1,b:2};columns=[{title:"\u7F16\u53F7",index:"id",sort:!0,width:100},{title:"Other",children:[{title:"\u5934\u50CF",type:"img",index:"picture.thumbnail",width:60},{title:"\u90AE\u7BB1",index:"email"},{title:"\u59D3\u540D",sort:!0,children:[{title:"first",index:"name.first",sort:!0},{title:"last",index:"name.last"}]}]}];addRow(){this.st()?.addRow({id:3,email:"aaa6@qq.com",picture:{thumbnail:"https://randomuser.me/api/portraits/thumb/men/24.jpg"},name:{first:"first-11",last:"	last-1"}},{index:0})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-grouping-columns"]],viewQuery:function(t,o){t&1&&Kr(o.st,Uh,5),t&2&&Jr()},decls:7,vars:5,consts:[["st",""],["nz-button","","nzType","primary",3,"click"],["bordered","","size","middle",3,"data","req","columns"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"button",1),b("click",function(){return g(a),C(o.addRow())}),e(2,"addRow"),r(),e(3,`
    `),p(4,"st",2,0),e(6,`
  `)}t&2&&(l(4),c("data",o.url)("req",Q(3,qh,o.params))("columns",o.columns))},dependencies:[$,G,k],encapsulation:2})};var Gh=i=>({params:i}),Xd=class i{url="/users?total=100";params={a:1,b:2};columns=[{title:"\u7F16\u53F7",index:"id"},{title:"\u5934\u50CF",type:"img",width:60,index:"picture.thumbnail"},{title:"\u90AE\u7BB1",index:"email"},{title:"\u7535\u8BDD",index:"phone"},{title:"\u6CE8\u518C\u65F6\u95F4",type:"date",index:"registered"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-responsive"]],decls:2,vars:5,consts:[["header","The header","footer","The footer","responsiveHideHeaderFooter","",3,"data","req","columns"]],template:function(t,o){t&1&&(e(0," "),p(1,"st",0)),t&2&&(l(),c("data",o.url)("req",Q(3,Gh,o.params))("columns",o.columns))},dependencies:[$,G],encapsulation:2})};function $h(i,n){if(i&1&&(e(0,`
          `),d(1,"tr"),e(2,`
            `),d(3,"td"),e(4,"\u5408\u8BA1"),r(),e(5,`
            `),d(6,"td"),e(7),r(),e(8,`
            `),d(9,"td"),e(10),r(),e(11,`
            `),d(12,"td",4),e(13),r(),e(14,`
            `),d(15,"td",4),e(16),r(),e(17,`
            `),d(18,"td",4),e(19),r(),e(20,`
            `),d(21,"td",4),e(22),r(),e(23,`
            `),d(24,"td",4),e(25),r(),e(26,`
          `),r(),e(27,`
          `),d(28,"tr",5),e(29,`
            `),d(30,"td",6),e(31,"\u6027\u522B\u5E73\u5747\u503C"),r(),e(32,`
            `),d(33,"td",4),e(34),ae(35,"price"),r(),e(36,`
            `),p(37,"td",7),e(38,`
          `),r(),e(39,`
        `)),i&2){let t=h().$implicit;l(7),ut("",t.len.text," \u4E2A"),l(3),B(t.dc.text),l(3),B(t.sum.text),l(3),B(t.avg.text),l(3),B(t.min.text),l(3),B(t.max.text),l(3),B(t.custom.text),l(9),B(fe(35,8,t.sum.value/t.len.value))}}function Qh(i,n){if(i&1&&(e(0,`
        `),f(1,$h,40,10)),i&2){h();let t=v(5);l(),w(t.count>0?1:-1)}}var Kd=class i{data=Array(100).fill({}).map((n,t)=>({id:t+1,price:~~(Math.random()*100),age:~~(Math.random()*100)>50?"\u5973":"\u7537"}));columns=[{title:"\u884C\u53F7",type:"no"},{title:"\u7F16\u53F7",index:"id",statistical:"count",key:"len"},{title:"\u6027\u522B",index:"age",statistical:"distinctCount",key:"dc"},{title:"Sum",index:"price",type:"currency",statistical:"sum",key:"sum"},{title:"Average",index:"price",type:"currency",statistical:"average",key:"avg"},{title:"Min",index:"price",type:"currency",statistical:"min",key:"min"},{title:"Max",index:"price",type:"currency",statistical:"max",key:"max"},{title:"Custom",index:"price",type:"currency",statistical:{type:n=>({value:n[0],text:`**${n[0]}`}),currency:!1},key:"custom"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-statistical"]],decls:11,vars:3,consts:[["st",""],["bodyTpl",""],["nz-button","",3,"click"],[3,"data","columns","body"],[1,"text-right"],[1,"bg-grey-lighter"],["colspan","3"],["colspan","4"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"button",2),b("click",function(){return g(a),C(o.data=[])}),e(2,"Clean Data"),r(),e(3,`
    `),d(4,"st",3,0),e(6,`
      `),f(7,Qh,2,1,"ng-template",null,1,I),e(9,`
    `),r(),e(10,`
  `)}if(t&2){let a=v(8);l(4),c("data",o.data)("columns",o.columns)("body",a)}},dependencies:[$,G,E,k,M,N,al],encapsulation:2})};var Zh=["st"],Xh=()=>({x:"1300px",y:"240px"}),Jd=class i{destroy$=y(Bt);st;page={front:!1,show:!1};data=Array(2e3).fill({}).map((n,t)=>({id:t+1,price:~~(Math.random()*100)}));columns=[{title:"\u7F16\u53F7",index:"id",width:100},{title:"\u4EF7\u683C1",index:"price",width:100},{title:"\u4EF7\u683C2",index:"price",width:100},{title:"\u4EF7\u683C3",index:"price",width:100},{title:"\u4EF7\u683C4",index:"price",width:100},{title:"\u4EF7\u683C5",index:"price",width:100},{title:"\u4EF7\u683C6",index:"price",width:100},{title:"\u4EF7\u683C7",index:"price",width:100},{title:"\u4EF7\u683C8",index:"price",width:100},{title:"\u4EF7\u683C9",index:"price",width:100},{title:"\u4EF7\u683C10",index:"price",width:100}];scrollToIndex(n){this.st.cdkVirtualScrollViewport?.scrollToIndex(n)}ngAfterViewInit(){this.st.cdkVirtualScrollViewport?.scrolledIndexChange.pipe(zt(this.destroy$)).subscribe(n=>{console.log("scroll index to",n)})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-virtual"]],viewQuery:function(t,o){if(t&1&&ot(Zh,5),t&2){let a;W(a=U())&&(o.st=a.first)}},decls:7,vars:5,consts:[["st",""],["nz-button","",3,"click"],["virtualScroll","",3,"data","columns","page","scroll"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"button",1),b("click",function(){return g(a),C(o.scrollToIndex(200))}),e(2,"Scroll To Index 200"),r(),e(3,`
    `),p(4,"st",2,0),e(6,`
  `)}t&2&&(l(4),c("data",o.data)("columns",o.columns)("page",o.page)("scroll",et(4,Xh)))},dependencies:[$,G,E,k,M,N],encapsulation:2})};var Kh=["st"],Yd=class i{st;data=Array(1e4).fill({}).map((n,t)=>({id:t+1,picture:{thumbnail:`https://dummyimage.com/100x100&text=${Math.min(t+1,30)}`},email:`e${t+1}@qq.com`,phone:`phone - ${t+1}`,price:Math.ceil(Math.random()*1e7)+1e7,registered:new Date}));columns=[{title:"\u7F16\u53F7",index:"id"},{title:"\u5934\u50CF",type:"img",width:60,index:"picture.thumbnail",exported:!1},{title:"\u90AE\u7BB1",index:"email"},{title:"\u7535\u8BDD",index:"phone"},{title:"\u6570\u5B57",index:"price",type:"number",sort:{compare:(n,t)=>n.price-t.price}},{title:"\u8D27\u5E01",index:"price",type:"currency"},{title:"\u6CE8\u518C\u65F6\u95F4",type:"date",index:"registered"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-export"]],viewQuery:function(t,o){if(t&1&&ot(Kh,5),t&2){let a;W(a=U())&&(o.st=a.first)}},decls:13,vars:2,consts:[["st",""],["nz-button","",3,"click"],[1,"mt-sm",3,"data","columns"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"button",1),b("click",function(){g(a);let m=v(11);return C(m.export())}),e(2,"Export"),r(),e(3,`
    `),d(4,"button",1),b("click",function(){g(a);let m=v(11);return C(m.export(!0))}),e(5,"Export Filtered Data"),r(),e(6,`
    `),d(7,"button",1),b("click",function(){g(a);let m=v(11);return C(m.export(o.data,{filename:"via-data.xlsx",sheetname:"user"}))}),e(8,"Export via data"),r(),e(9,`
    `),p(10,"st",2,0),e(12,`
  `)}t&2&&(l(10),c("data",o.data)("columns",o.columns))},dependencies:[$,G,E,k,M,N],encapsulation:2})};var Jh=()=>({type:"strict"}),tr=class i{url="/users?total=2&field=list";columns=[{title:"\u7F16\u53F7",index:"id",width:80,resizable:!1},{title:"\u5934\u50CF",type:"img",width:60,index:"picture.thumbnail"},{title:"\u90AE\u7BB1",index:"email",width:150,resizable:{minWidth:150}},{title:"\u7535\u8BDD",index:"phone"},{title:"\u4F63\u91D1",index:"price",type:"currency"},{title:"\u6CE8\u518C\u65F6\u95F4",type:"date",index:"registered"}];onChange({type:n,resize:t}){n==="resize"&&console.log(t?.width)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-st-resizable"]],decls:3,vars:4,consts:[["resizable","",3,"change","data","columns","widthMode"]],template:function(t,o){t&1&&(e(0,`
    `),d(1,"st",0),b("change",function(s){return o.onChange(s)}),r(),e(2,`
  `)),t&2&&(l(),c("data",o.url)("columns",o.columns)("widthMode",et(3,Jh)))},dependencies:[$,G],encapsulation:2})};var er=class i{item={cols:1,urls:{"en-US":"packages/abc/st/index.en-US.md","zh-CN":"packages/abc/st/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p><code><a data-toc="st">st</a></code> is not creating another table component, but use <strong>configurable</strong> rendering table on base of <code>nz-table</code>. this method can satisfy most scenes in admin interfaces, but it's easier to rendering table.</p><h2 id="DataSource"><a class="lake-link"><i data-anchor="DataSource"></i></a>DataSource</h2><p><code>data</code> supports multiple formats of data sources: URL and static data.</p><h3 id="URL"><a class="lake-link"><i data-anchor="URL"></i></a>URL</h3><p>The value is URL.</p><ul><li><p>Resolve request data format problems with parameters such as <code>req.params</code>, <code>req.method</code></p></li><li><p>Resolve backend data format through <code>res.reName</code> mapping data</p></li><li><p>Use <code>res.process</code> to optimize data before rendering table</p></li><li><p>Use <code>page.zeroIndexed</code> to adjust the http request when <code>pi</code> parameter follows the <code>0</code> base index, default is <code>1</code> base index</p></li><li><p>Automatically cancel paging when the response body value is an array type</p></li><li><p>Use <code>_HttpClient</code> send request, so applies to <a href="/theme/http#AlainThemeConfig" data-url="/theme/http#AlainThemeConfig">AlainThemeConfig</a> configuration</p></li></ul><h3 id="Static"><a class="lake-link"><i data-anchor="Static"></i></a>Static</h3><p>The value is <code>STData[]</code> or <code>Observable&lt;STData[]></code>, both follow the following rules:</p><ul><li><p><code>page.front</code> Front paging, default is <code>true</code></p><ul><li><p><code>true</code> controlled by <code>st</code> according to <code>data</code> length, including: sorting, filtering, etc.</p></li><li><p><code>false</code> controlled by the user through the <code>total</code> and <code>data</code> parameters, and maintains <code>(change)</code> when the page changes to reload data</p></li></ul></li><li><p>Whether <code>page.show</code> displays pager; if not specified, it will not be displayed automatically if <code>ps>total</code></p></li></ul><h3 id="FAQ"><a class="lake-link"><i data-anchor="FAQ"></i></a>FAQ</h3><p><strong>Cannot read property 'text' of undefined</strong></p><p>If the component has been rendered, this error may appear when <code>columns</code> is changed again. This is because <code>st</code> will only process the data according to <code>columns</code> each time. When the column definition changes, it may be because of the column definition. Unable to match with existing data, you may need to use <code>this.st.resetColumns({ columns: [], emitReload: true })</code> to update the column definition and reload the data.</p><p><strong>Show INVALID DATA</strong></p><p>When an exception is thrown when parsing column data, <em>INVALID DATA</em> will be forced to display. For example, when a column is specified <code>type:'number'</code>, an exception will be thrown when the actual value obtained is not a valid number type.</p></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="st"><a class="lake-link"><i data-anchor="st"></i></a>st</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[columns]</code></td><td>Columns description</td><td><code>STColumn[]</code></td><td>-</td><td>-</td></tr><tr><td><code>[data]</code></td><td>Data source</td><td><code>string, <a data-toc="STData">STData</a>[], Observable<<a data-toc="STData">STData</a>[]></code></td><td>-</td><td>-</td></tr><tr><td><code>[req]</code></td><td>Http request configuration</td><td><code><a data-toc="STReq">STReq</a></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[res]</code></td><td>Http response configuration</td><td><code><a data-toc="STRes">STRes</a></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[pi]</code></td><td>Page index</td><td><code>number</code></td><td><code>1</code></td><td>\u2705</td></tr><tr><td><code>[ps]</code></td><td>Page size, default is <code>10</code></td><td><code>number</code></td><td><code>10</code></td><td>\u2705</td></tr><tr><td><code>[total]</code></td><td>Total data count, should set when nzServerRender is true, default is <code>0</code></td><td><code>number</code></td><td><code>0</code></td><td>-</td></tr><tr><td><code>[page]</code></td><td>Pager configuration</td><td><code><a data-toc="STPage">STPage</a></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[noResult]</code></td><td>Custom no result content</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[bordered]</code></td><td>Whether to show all table borders</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[size]</code></td><td>Size of table</td><td><code>'small','middle','default'</code></td><td><code>'default'</code></td><td>\u2705</td></tr><tr><td><code>[widthMode]</code></td><td>Set the table width mode</td><td><code><a data-toc="STWidthMode">STWidthMode</a></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[rowClassName]</code></td><td>Row class name of table</td><td><code>(record: <a data-toc="STData">STData</a>, index: number) => string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[clickRowClassName]</code></td><td>Row class name of click the row</td><td><code>string, STClickRowClassNameType</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[loading]</code></td><td>Loading status of table, when specifying <code>null</code> is controlled by st</td><td><code>boolean | null</code></td><td><code>null</code></td><td>-</td></tr><tr><td><code>[loadingIndicator]</code></td><td>The spinning indicator</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[loadingDelay]</code></td><td>Specifies a delay in milliseconds for loading state (prevent flush)</td><td><code>number</code></td><td><code>0</code></td><td>\u2705</td></tr><tr><td><code>[scroll]</code></td><td>Whether table can be scrolled in x/y direction, x or y can be a string that indicates the width and height of table body</td><td><code>{ y?: string; x?: string }</code></td><td>-</td><td>-</td></tr><tr><td><code>[virtualScroll]</code></td><td>Enable virtual scroll mode\uFF0Cwork with <code>[nzScroll]</code></td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[virtualItemSize]</code></td><td>The size of the items in the list, same as <a target="_blank" href="https://material.angular.io/cdk/scrolling/api" data-url="https://material.angular.io/cdk/scrolling/api">cdk itemSize</a></td><td><code>number</code></td><td><code>54</code></td><td>\u2705</td></tr><tr><td><code>[virtualMaxBufferPx]</code></td><td>The number of pixels worth of buffer to render for when rendering new items, same as <a target="_blank" href="https://material.angular.io/cdk/scrolling/api" data-url="https://material.angular.io/cdk/scrolling/api">cdk maxBufferPx</a></td><td><code>number</code></td><td><code>200</code></td><td>\u2705</td></tr><tr><td><code>[virtualMinBufferPx]</code></td><td>The minimum amount of buffer rendered beyond the viewport (in pixels),same as <a target="_blank" href="https://material.angular.io/cdk/scrolling/api" data-url="https://material.angular.io/cdk/scrolling/api">cdk minBufferPx</a></td><td><code>number</code></td><td><code>100</code></td><td>\u2705</td></tr><tr><td><code>[virtualForTrackBy]</code></td><td>The TrackByFunction to use for tracking changes.</td><td><code>TrackByFunction&lt;T></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[singleSort]</code></td><td>Single sort config<br>If not specified, return: <code>columnName=ascend|descend</code><br>If specified, return: <code>sort=columnName.(ascend|descend)</code></td><td><code><a data-toc="STSingleSort">STSingleSort</a></code></td><td><code>null</code></td><td>\u2705</td></tr><tr><td><code>[multiSort]</code></td><td>Whether to mulit-sort, recommended use in URL data source</td><td><code>boolean, <a data-toc="STMultiSort">STMultiSort</a></code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[header]</code></td><td>Table header renderer</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[showHeader]</code></td><td>Whether show the head of the columns of the table</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td></tr><tr><td><code>[footer]</code></td><td>Table footer renderer</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[bodyHeader]</code></td><td>Table extra body renderer in header, generally used to add total rows</td><td><code>TemplateRef&lt;STStatisticalResults></code></td><td>-</td><td>-</td></tr><tr><td><code>[body]</code></td><td>Table extra body renderer, generally used to add total rows</td><td><code>TemplateRef&lt;STStatisticalResults></code></td><td>-</td><td>-</td></tr><tr><td><code>[widthConfig]</code></td><td>Set col width can not used with width of STColumn</td><td><code>string[]</code></td><td>-</td><td>-</td></tr><tr><td><code>[expandRowByClick]</code></td><td>Whether to expand row by clicking anywhere in the whole row</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[expandAccordion]</code></td><td>Accordion mode</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[expand]</code></td><td>Whether current column include expand icon</td><td><code>TemplateRef<{ $implicit: <a data-toc="STData">STData</a>; index: number }></code></td><td>-</td><td>-</td></tr><tr><td><code>[expandIcon]</code></td><td>Custom expand icon</td><td><code>TemplateRef<{ $implicit: <a data-toc="STData">STData</a>; index: number }></code></td><td>-</td></tr><tr><td><code>[responsive]</code></td><td>Whether to turn on responsive</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[responsiveHideHeaderFooter]</code></td><td>Whether to display the header and footer under the small screen</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[resizable]</code></td><td>Resize header of the current table, <strong>Multiple headers not supported</strong></td><td><code><a data-toc="STResizable">STResizable</a>, boolean</code></td><td>-</td><td>-</td></tr><tr><td><code>[trackBy]</code></td><td><code>TrackByFunction</code> function of list loop <code>@for</code></td><td><code>TrackByFunction&lt;T></code></td><td>-</td><td>-</td></tr><tr><td><code>[drag]</code></td><td>Drag soring</td><td><code>STDragOptions, boolean</code></td><td>-</td><td>-</td></tr><tr><td><code>(change)</code></td><td>Events</td><td><code>EventEmitter<<a data-toc="STChange">STChange</a>></code></td><td>-</td><td>-</td></tr><tr><td><code>(error)</code></td><td>Error event</td><td><code>EventEmitter<<a data-toc="STError">STError</a>></code></td><td>-</td><td>-</td></tr></tbody></table><h3 id="Properties&Methods"><a class="lake-link"><i data-anchor="Properties&Methods"></i></a>Properties&Methods</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>[filteredData]</code></td><td>Get all data after filtering & sorting<br>- Local data: including sorting, filtering<br>- Remote data: Don't pass <code>pi</code>, <code>ps</code> parameters in http request</td></tr><tr><td><code>[count]</code></td><td>Get the number of the current page</td></tr><tr><td><code>[list]</code></td><td>Get the data of the current page</td></tr><tr><td><code>resetColumns(options?: STResetColumnsOption)</code></td><td>Reset columns</td></tr><tr><td><code>load(pi = 1, extraParams?: any, options?: STLoadOptions)</code></td><td>Load specified page</td></tr><tr><td><code>reload(extraParams?: any, options?: STLoadOptions)</code></td><td>Refresh current page</td></tr><tr><td><code>reset(extraParams?: any, options?: STLoadOptions)</code></td><td>Reset data and <code>pi</code> to <code>1</code>, including single multi-select, sort, filter status (Covered default state)</td></tr><tr><td><code>addRow(data: <a data-toc="STData">STData</a> | <a data-toc="STData">STData</a>[], options?: { index?: number })</code></td><td>Add a rows in the table</td></tr><tr><td><code>removeRow(data: <a data-toc="STData">STData</a> | <a data-toc="STData">STData</a>[] | number)</code></td><td>Remove a row in the table</td></tr><tr><td><code>setRow(index: number | <a data-toc="STData">STData</a>, item: <a data-toc="STData">STData</a>, options?: { refreshSchema?: boolean; emitReload?: boolean; arrayProcessMethod?: boolean })</code></td><td>Sets the row value for the <code>index</code> in the table</td></tr><tr><td><code>pureItem(itemOrIndex: <a data-toc="STData">STData</a> | number)</code></td><td>Return pure data, <code>st</code> internally maintains a set of data for caching, this part of data may affect the backend</td></tr><tr><td><code>clear(cleanStatus = true)</code></td><td>Clear all data</td></tr><tr><td><code>clearStatus()</code></td><td>Clean all status (like this: single multi-select, sort, filter status)</td></tr><tr><td><code>clearCheck()</code></td><td>Clear all <code>checkbox</code></td></tr><tr><td><code>clearRadio()</code></td><td>Clear all <code>radio</code></td></tr><tr><td><code>export(newData?: <a data-toc="STData">STData</a>[] | true, opt?: <a data-toc="STExportOptions">STExportOptions</a>)</code></td><td>Export Excel and make sure you have \bimported <code>XlsxModule</code></td></tr></tbody></table><p>Some details:</p><ul><li><p><code>extraParams</code> Keep original values when is null</p></li><li><p><code>STLoadOptions.merge</code> merge mode, if <code>true</code> merges with new values instead of replacing</p></li><li><p><code>STLoadOptions.toTop</code> Whether to jump to the top, if not specified, it's determined by <code>page.toTop</code></p></li></ul><p><strong>Usage</strong></p><pre class="hljs language-ts"><code>@Component({
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
) => STStatisticalResult</code></pre><h3 id="STResizable"><a class="lake-link"><i data-anchor="STResizable"></i></a>STResizable</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[disabled]</code></td><td>Disable resize</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[bounds]</code></td><td>Specifies resize boundaries</td><td><code>window, parent, ElementRef&lt;HTMLElement></code></td><td><code>window</code></td></tr><tr><td><code>[maxWidth]</code></td><td>Maximum width of resizable elemen</td><td><code>number</code></td><td><code>360</code></td></tr><tr><td><code>[minWidth]</code></td><td>Minimum width of resizable element</td><td><code>number</code></td><td><code>60</code></td></tr><tr><td><code>[preview]</code></td><td>Enable preview when resizing</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h2 id="Theme"><a class="lake-link"><i data-anchor="Theme"></i></a>Theme</h2><table><thead><tr><th>Property</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>@nz-table-img-radius</code></td><td>Radius size for the image in td</td><td><code>4px</code></td></tr><tr><td><code>@nz-table-img-margin-right</code></td><td>Margin right for the image in td</td><td><code>4px</code></td></tr><tr><td><code>@nz-table-img-max-height</code></td><td>Max height for the image in td</td><td><code>32px</code></td></tr><tr><td><code>@nz-table-img-max-width</code></td><td>Max width for the image in td</td><td><code>32px</code></td></tr><tr><td><code>@nz-table-even-background</code></td><td>Even background for the row</td><td><code>none</code></td></tr><tr><td><code>@nz-table-rep-max-width</code></td><td>Trigger when the viewable area is less than</td><td><code></code></td></tr><tr><td><code>@nz-table-rep-min-width</code></td><td>Trigger when the visible area is greater than</td><td><code></code></td></tr><tr><td><code>@nz-table-rep-header-background</code></td><td>Header background in responsive</td><td><code>@border-color-split</code></td></tr><tr><td><code>@nz-table-rep-even-background</code></td><td>Event background in responsive</td><td><code>#f9f9f9</code></td></tr><tr><td><code>@nz-table-rep-column-name-color</code></td><td>Name color in responsive</td><td><code>rgba(0, 0, 0, 0.5)</code></td></tr><tr><td><code>@nz-table-rep-column-name-text-align</code></td><td>Name text align in responsive</td><td><code>right</code></td></tr><tr><td><code>@nz-table-rep-column-name-width</code></td><td>Name column width in responsive</td><td><code>100px</code></td></tr><tr><td><code>@nz-table-rep-column-name-padding-right</code></td><td>Right padding of title and content in responsive</td><td><code>8px</code></td></tr><tr><td><code>@table-row-hover-bg</code></td><td>Hover background color of the row</td><td><code>#fafafa</code></td></tr><tr><td><code>@<a data-toc="st">st</a>-btn-disabled-color</code></td><td>Text color of the button</td><td><code>rgba(0, 0, 0, 0.25)</code></td></tr><tr><td><code>@<a data-toc="st">st</a>-title-optional-color</code></td><td>Optional color of title</td><td><code>rgba(0, 0, 0, 0.35)</code></td></tr><tr><td><code>@<a data-toc="st">st</a>-resizable-handle-width</code></td><td>Width of the rasizable handle</td><td><code>1px</code></td></tr><tr><td><code>@<a data-toc="st">st</a>-resizable-handle-height</code></td><td>Height of the rasizable handle</td><td><code>60%</code></td></tr><tr><td><code>@<a data-toc="st">st</a>-resizable-handle-color</code></td><td>Color of the rasizable handle</td><td><code>@border-color-base</code></td></tr></tbody></table>`,meta:{type:"CURD",title:"st",subtitle:"Table",cols:1,order:1,module:"import { STModule } from '@delon/abc/st';"},toc:[{id:"DataSource",title:"Data Source",h:2,children:[{id:"URL",title:"URL",h:3},{id:"Static",title:"Static",h:3},{id:"FAQ",title:"FAQ",h:3}]},{id:"API",title:"API",h:2,children:[{id:"st",title:"st",h:3},{id:"Properties&Methods",title:"Properties & Methods",h:3},{id:"STReq",title:"STReq",h:3},{id:"STRes",title:"STRes",h:3},{id:"STPage",title:"STPage",h:3},{id:"STError",title:"STError",h:3},{id:"STChange",title:"STChange",h:3},{id:"STChangeSort",title:"STChangeSort",h:3},{id:"STChangeRowClick",title:"STChangeRowClick",h:3},{id:"STExportOptions",title:"STExportOptions",h:3},{id:"STSingleSort",title:"STSingleSort",h:3},{id:"STMultiSort",title:"STMultiSort",h:3},{id:"STData",title:"STData",h:3},{id:"STColumn<TextendsSTData=any>",title:"STColumn<T extends STData = any>",h:3},{id:"STColumnTitle",title:"STColumnTitle",h:3},{id:"STColumnSort",title:"STColumnSort",h:3},{id:"STColumnFilter",title:"STColumnFilter",h:3},{id:"STColumnFilterMenu",title:"STColumnFilterMenu",h:3},{id:"STIcon",title:"STIcon",h:3},{id:"STColumnButton",title:"STColumnButton",h:3},{id:"STColumnButtonModal",title:"STColumnButtonModal",h:3},{id:"STColumnButtonDrawer",title:"STColumnButtonDrawer",h:3},{id:"STColumnSelection",title:"STColumnSelection",h:3},{id:"STColumnYn",title:"STColumnYn",h:3},{id:"STcolumnCurrency",title:"STcolumnCurrency",h:3},{id:"STColumnBadge",title:"STColumnBadge",h:3},{id:"STColumnTag",title:"STColumnTag",h:3},{id:"STWidgetColumn",title:"STWidgetColumn",h:3},{id:"STWidthMode",title:"STWidthMode",h:3},{id:"STStatistical",title:"STStatistical",h:3},{id:"STResizable",title:"STResizable",h:3}]},{id:"Theme",title:"Theme",h:2}]},"zh-CN":{content:`<section class="markdown"><p><code><a data-toc="st">st</a></code> \u5E76\u4E0D\u662F\u5728\u521B\u9020\u53E6\u4E00\u4E2A\u8868\u683C\u7EC4\u4EF6\uFF0C\u800C\u662F\u5728 <code>nz-table</code> \u57FA\u7840\u4E0A\u4EE5<strong>\u53EF\u914D\u7F6E</strong>\u5F62\u5F0F\u6E32\u67D3\u8868\u683C\uFF0C\u5728\u4E2D\u540E\u53F0\u91CC\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u6EE1\u8DB3\u7EDD\u5927\u591A\u6570\u573A\u666F\uFF0C\u4F46\u53C8\u53EF\u4EE5\u66F4\u6613\u5730\u7BA1\u7406\u8868\u683C\u6E32\u67D3\u52A8\u4F5C\u3002</p><h2 id="\u5173\u4E8E\u6570\u636E\u6E90"><a class="lake-link"><i data-anchor="\u5173\u4E8E\u6570\u636E\u6E90"></i></a>\u5173\u4E8E\u6570\u636E\u6E90</h2><p><code>data</code> \u652F\u6301\u4E09\u79CD\u4E0D\u540C\u683C\u5F0F\u6570\u636E\u6E90\uFF0C\u6574\u4F53\u5206\u4E3A\uFF1AURL\u548C\u9759\u6001\u6570\u636E\u4E24\u7C7B\uFF1B\u4F46\u53EF\u4EE5\u900F\u8FC7\u53C2\u6570\u7684\u914D\u7F6E\u8FBE\u5230\u4E0D\u540C\u7684\u6548\u679C\uFF0C\u540C\u65F6\u6709\u975E\u5E38\u591A\u53C2\u6570\u53EF\u901A\u8FC7 <code>AlainSTConfig</code> \u91CD\u7F6E\u9ED8\u8BA4\u503C\uFF0C\u4F7F\u6574\u4E2A <code>st</code> \u7EC4\u4EF6\u6A21\u677F\u8FBE\u5230\u6781\u7B80\u3002</p><h3 id="URL"><a class="lake-link"><i data-anchor="URL"></i></a>URL</h3><p>\u6307\u7684\u662F\u901A\u8FC7\u4E00\u4E2A URL \u5B57\u7B26\u4E32\u6765\u83B7\u53D6\u6570\u636E\u3002</p><ul><li><p>\u901A\u8FC7 <code>req.params</code>\u3001<code>req.method</code> \u7B49\u53C2\u6570\u89E3\u51B3\u8BF7\u6C42\u6570\u636E\u683C\u5F0F\u95EE\u9898</p></li><li><p>\u901A\u8FC7 <code>res.reName</code> \u91CD\u7F6E\u6570\u636E <code>key</code> \u800C\u65E0\u987B\u62C5\u5FC3\u540E\u7AEF\u6570\u636E\u683C\u5F0F\u662F\u5426\u6EE1\u8DB3 <code>st</code> \u9700\u6C42</p></li><li><p>\u901A\u8FC7 <code>res.process</code> \u53EF\u4EE5\u5BF9\u8868\u683C\u6E32\u67D3\u524D\u5BF9\u6570\u636E\u8FDB\u4E00\u6B65\u4F18\u5316</p></li><li><p>\u901A\u8FC7 <code>page.zeroIndexed</code> \u53EF\u4EE5\u8C03\u6574 http \u8BF7\u6C42\u65F6 <code>pi</code> \u53C2\u6570\u662F\u5426\u9075\u5FAA 0 \u57FA\u7D22\u5F15\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E3A 1 \u57FA\u7D22\u5F15</p></li><li><p>\u82E5\u8FD4\u56DE\u4F53\u7684\u503C\u662F\u6570\u7EC4\u7C7B\u578B\uFF0C\u5219\u5F3A\u5236\u4E0D\u5206\u9875</p></li><li><p>\u4F7F\u7528 <code>_HttpClient</code> \u53D1\u8D77\u8BF7\u6C42\uFF0C\u56E0\u6B64\u6EE1\u8DB3 <a href="/theme/http#AlainThemeConfig" data-url="/theme/http#AlainThemeConfig">AlainThemeConfig</a> \u7684\u914D\u7F6E\u4E5F\u9002\u7528</p></li></ul><h3 id="\u9759\u6001\u6570\u636E"><a class="lake-link"><i data-anchor="\u9759\u6001\u6570\u636E"></i></a>\u9759\u6001\u6570\u636E</h3><p>\u6307\u7684\u662F\u901A\u8FC7\u6307\u5B9A\u503C\u4E3A <code>STData[]</code> \u6216 <code>Observable&lt;STData[]></code>\uFF0C\u4E8C\u8005\u90FD\u9075\u5FAA\u4EE5\u4E0B\u89C4\u5219\uFF1A</p><ul><li><p><code>page.front</code> \u524D\u7AEF\u5206\u9875\uFF0C\u9ED8\u8BA4\uFF1A<code>true</code></p><ul><li><p><code>true</code> \u7531 <code>st</code> \u6839\u636E <code>data</code> \u957F\u5EA6\u53D7\u63A7\u5206\u9875\uFF0C\u5305\u62EC\uFF1A\u6392\u5E8F\u3001\u8FC7\u6EE4\u7B49</p></li><li><p><code>false</code> \u7531\u7528\u6237\u901A\u8FC7 <code>total</code> \u548C <code>data</code> \u53C2\u6570\u53D7\u63A7\u5206\u9875\uFF0C\u5E76\u7EF4\u62A4 <code>(change)</code> \u5F53\u5206\u9875\u53D8\u66F4\u65F6\u91CD\u65B0\u52A0\u8F7D\u6570\u636E</p></li></ul></li><li><p><code>page.show</code> \u662F\u5426\u663E\u793A\u5206\u9875\u5668\uFF1B\u5F53\u672A\u6307\u5B9A\u65F6\u82E5 <code>ps>total</code> \u60C5\u51B5\u4E0B\u81EA\u52A8\u4E0D\u663E\u793A</p></li></ul><h3 id="\u5E38\u89C1\u95EE\u9898"><a class="lake-link"><i data-anchor="\u5E38\u89C1\u95EE\u9898"></i></a>\u5E38\u89C1\u95EE\u9898</h3><p><strong>Cannot read property 'text' of undefined</strong></p><p>\u82E5\u7EC4\u4EF6\u5DF2\u7ECF\u52A0\u8F7D\u5B8C\u6BD5\uFF0C\u6B64\u65F6\u5982\u679C\u518D\u6B21\u6539\u53D8 <code>columns</code> \u65F6\u53EF\u80FD\u4F1A\u51FA\u73B0\u8BE5\u9519\u8BEF\uFF0C\u8FD9\u662F\u56E0\u4E3A <code>st</code> \u6BCF\u6B21\u53EA\u4F1A\u6839\u636E <code>columns</code> \u5BF9\u6570\u636E\u5904\u7406\uFF0C\u5F53\u5217\u5B9A\u4E49\u53D1\u751F\u6539\u53D8\u540E\u53EF\u80FD\u4F1A\u56E0\u4E3A\u5217\u5B9A\u4E49\u4E0E\u73B0\u6709\u6570\u636E\u65E0\u6CD5\u914D\u5BF9\uFF0C\u53EF\u80FD\u9700\u8981\u4F7F\u7528 <code>this.st.resetColumns({ columns: [], emitReload: true })</code> \u6765\u66F4\u65B0\u5217\u5B9A\u4E49\u5E76\u91CD\u65B0\u52A0\u8F7D\u6570\u636E\u3002</p><p><strong>\u67D0\u5217\u663E\u793AINVALID DATA</strong></p><p>\u5F53\u5728\u89E3\u6790\u5217\u6570\u636E\u65F6\u629B\u51FA\u5F02\u5E38\u65F6\uFF0C\u4F1A\u5F3A\u5236\u663E\u793A <em>INVALID DATA</em>\uFF0C\u4F8B\u5982\u5F53\u67D0\u6307\u5B9A <code>type: 'number'</code> \u65F6\uFF0C\u800C\u5B9E\u9645\u83B7\u5F97\u503C\u4E3A\u975E\u6709\u6548\u6570\u5B57\u578B\u65F6\u5C31\u4F1A\u629B\u51FA\u5F02\u5E38\u3002</p></section>`,api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="st"><a class="lake-link"><i data-anchor="st"></i></a>st</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[columns]</code></td><td>\u5217\u63CF\u8FF0</td><td><code>STColumn[]</code></td><td>-</td><td>-</td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E\u6E90</td><td><code>string, <a data-toc="STData">STData</a>[], Observable<<a data-toc="STData">STData</a>[]></code></td><td>-</td><td>-</td></tr><tr><td><code>[req]</code></td><td>\u8BF7\u6C42\u4F53\u914D\u7F6E</td><td><code><a data-toc="STReq">STReq</a></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[res]</code></td><td>\u8FD4\u56DE\u4F53\u914D\u7F6E</td><td><code><a data-toc="STRes">STRes</a></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[pi]</code></td><td>\u5F53\u524D\u9875\u7801</td><td><code>number</code></td><td><code>1</code></td><td>\u2705</td></tr><tr><td><code>[ps]</code></td><td>\u6BCF\u9875\u6570\u91CF\uFF0C\u9ED8\u8BA4\uFF1A<code>10</code></td><td><code>number</code></td><td><code>10</code></td><td>\u2705</td></tr><tr><td><code>[total]</code></td><td>\u5F53\u524D\u603B\u6570\u636E\uFF0C\u5728\u670D\u52A1\u5668\u6E32\u67D3\u65F6\u9700\u8981\u4F20\u5165\uFF0C\u9ED8\u8BA4\uFF1A<code>0</code></td><td><code>number</code></td><td><code>0</code></td><td>-</td></tr><tr><td><code>[page]</code></td><td>\u5206\u9875\u5668\u914D\u7F6E</td><td><code><a data-toc="STPage">STPage</a></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[noResult]</code></td><td>\u65E0\u6570\u636E\u65F6\u663E\u793A\u5185\u5BB9</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[bordered]</code></td><td>\u662F\u5426\u663E\u793A\u8FB9\u6846</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[size]</code></td><td>table\u5927\u5C0F</td><td><code>'small','middle','default'</code></td><td><code>'default'</code></td><td>\u2705</td></tr><tr><td><code>[widthMode]</code></td><td>\u8BBE\u7F6E\u8868\u683C\u5BBD\u5EA6\u6A21\u5F0F</td><td><code><a data-toc="STWidthMode">STWidthMode</a></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[rowClassName]</code></td><td>\u8868\u683C\u884C\u7684\u7C7B\u540D</td><td><code>(record: <a data-toc="STData">STData</a>, index: number) => string</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[clickRowClassName]</code></td><td>\u70B9\u51FB\u884C\u5207\u6362\u7C7B\u540D</td><td><code>string, STClickRowClassNameType</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[loading]</code></td><td>\u9875\u9762\u662F\u5426\u52A0\u8F7D\u4E2D\uFF0C\u5F53\u6307\u5B9A <code>null</code> \u7531 st \u53D7\u63A7</td><td><code>boolean | null</code></td><td><code>null</code></td><td>-</td></tr><tr><td><code>[loadingIndicator]</code></td><td>\u52A0\u8F7D\u6307\u793A\u7B26</td><td><code>TemplateRef&lt;void></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[loadingDelay]</code></td><td>\u5EF6\u8FDF\u663E\u793A\u52A0\u8F7D\u6548\u679C\u7684\u65F6\u95F4\uFF08\u9632\u6B62\u95EA\u70C1\uFF09</td><td><code>number</code></td><td><code>0</code></td><td>\u2705</td></tr><tr><td><code>[scroll]</code></td><td>\u6A2A\u5411\u6216\u7EB5\u5411\u652F\u6301\u6EDA\u52A8\uFF0C\u4E5F\u53EF\u7528\u4E8E\u6307\u5B9A\u6EDA\u52A8\u533A\u57DF\u7684\u5BBD\u9AD8\u5EA6\uFF1A<code>{ x: "300px", y: "300px" }</code></td><td><code>{ y?: string; x?: string }</code></td><td>-</td><td>-</td></tr><tr><td><code>[virtualScroll]</code></td><td>\u662F\u5426\u542F\u7528\u865A\u62DF\u6EDA\u52A8\u6A21\u5F0F\uFF0C\u4E0E <code>[nzScroll]</code> \u914D\u5408\u4F7F\u7528</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[virtualItemSize]</code></td><td>\u865A\u62DF\u6EDA\u52A8\u65F6\u6BCF\u4E00\u5217\u7684\u9AD8\u5EA6\uFF0C\u4E0E <a target="_blank" href="https://material.angular.io/cdk/scrolling/api" data-url="https://material.angular.io/cdk/scrolling/api">cdk itemSize</a> \u76F8\u540C</td><td><code>number</code></td><td><code>54</code></td><td>\u2705</td></tr><tr><td><code>[virtualMaxBufferPx]</code></td><td>\u7F13\u51B2\u533A\u6700\u5927\u50CF\u7D20\u9AD8\u5EA6\uFF0C\u4E0E <a target="_blank" href="https://material.angular.io/cdk/scrolling/api" data-url="https://material.angular.io/cdk/scrolling/api">cdk maxBufferPx</a> \u76F8\u540C</td><td><code>number</code></td><td><code>200</code></td><td>\u2705</td></tr><tr><td><code>[virtualMinBufferPx]</code></td><td>\u7F13\u51B2\u533A\u6700\u5C0F\u50CF\u7D20\u9AD8\u5EA6\uFF0C\u4F4E\u4E8E\u8BE5\u503C\u65F6\u5C06\u52A0\u8F7D\u65B0\u7ED3\u6784\uFF0C\u4E0E <a target="_blank" href="https://material.angular.io/cdk/scrolling/api" data-url="https://material.angular.io/cdk/scrolling/api">cdk minBufferPx</a> \u76F8\u540C</td><td><code>number</code></td><td><code>100</code></td><td>\u2705</td></tr><tr><td><code>[virtualForTrackBy]</code></td><td>\u865A\u62DF\u6EDA\u52A8\u6570\u636E <code>TrackByFunction</code> \u51FD\u6570</td><td><code>TrackByFunction&lt;T></code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[singleSort]</code></td><td>\u5355\u6392\u5E8F\u89C4\u5219<br>\u82E5\u4E0D\u6307\u5B9A\uFF0C\u5219\u8FD4\u56DE\uFF1A<code>columnName=ascend|descend</code><br>\u82E5\u6307\u5B9A\uFF0C\u5219\u8FD4\u56DE\uFF1A<code>sort=columnName.(ascend|descend)</code></td><td><code><a data-toc="STSingleSort">STSingleSort</a></code></td><td><code>null</code></td><td>\u2705</td></tr><tr><td><code>[multiSort]</code></td><td>\u662F\u5426\u591A\u6392\u5E8F\uFF0C\u5F53 <code>sort</code> \u591A\u4E2A\u76F8\u540C\u503C\u65F6\u81EA\u52A8\u5408\u5E76\uFF0C\u5EFA\u8BAE\u540E\u7AEF\u652F\u6301\u65F6\u4F7F\u7528</td><td><code>boolean, <a data-toc="STMultiSort">STMultiSort</a></code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[header]</code></td><td>\u8868\u683C\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[showHeader]</code></td><td>\u662F\u5426\u663E\u793A\u5217\u5934\u884C</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td></tr><tr><td><code>[footer]</code></td><td>\u8868\u683C\u5E95\u90E8</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[bodyHeader]</code></td><td>\u8868\u683C\u9876\u90E8\u989D\u5916\u5185\u5BB9\uFF0C\u4E00\u822C\u7528\u4E8E\u6DFB\u52A0\u5408\u8BA1\u884C</td><td><code>TemplateRef&lt;STStatisticalResults></code></td><td>-</td><td>-</td></tr><tr><td><code>[body]</code></td><td>\u8868\u683C\u989D\u5916\u5185\u5BB9\uFF0C\u4E00\u822C\u7528\u4E8E\u6DFB\u52A0\u5408\u8BA1\u884C</td><td><code>TemplateRef&lt;STStatisticalResults></code></td><td>-</td><td>-</td></tr><tr><td><code>[widthConfig]</code></td><td>\u8868\u5934\u5206\u7EC4\u65F6\u6307\u5B9A\u6BCF\u5217\u5BBD\u5EA6\uFF0C\u4E0E STColumn \u7684 width \u4E0D\u53EF\u6DF7\u7528</td><td><code>string[]</code></td><td>-</td><td>-</td></tr><tr><td><code>[expandRowByClick]</code></td><td>\u901A\u8FC7\u70B9\u51FB\u884C\u6765\u5C55\u5F00\u5B50\u884C</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[expandAccordion]</code></td><td>\u624B\u98CE\u7434\u6A21\u5F0F</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[expand]</code></td><td>\u5F53\u524D\u5217\u662F\u5426\u5305\u542B\u5C55\u5F00\u6309\u94AE\uFF0C\u5F53\u6570\u636E\u6E90\u4E2D\u5305\u62EC <code>expand</code> \u8868\u793A\u5C55\u5F00\u72B6\u6001</td><td><code>TemplateRef<{ $implicit: <a data-toc="STData">STData</a>; index: number }></code></td><td>-</td><td>-</td></tr><tr><td><code>[expandIcon]</code></td><td>\u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807</td><td><code>TemplateRef<{ $implicit: <a data-toc="STData">STData</a>; index: number }></code></td><td>-</td></tr><tr><td><code>[responsive]</code></td><td>\u662F\u5426\u5F00\u542F\u54CD\u5E94\u5F0F</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[responsiveHideHeaderFooter]</code></td><td>\u662F\u5426\u5728\u5C0F\u5C4F\u5E55\u4E0B\u624D\u663E\u793A\u9876\u90E8\u4E0E\u5E95\u90E8</td><td><code>boolean</code></td><td><code>false</code></td><td>\u2705</td></tr><tr><td><code>[resizable]</code></td><td>\u5F53\u524D\u8868\u683C\u6240\u6709\u5217\u7684\u8C03\u6574\u8868\u5934\u914D\u7F6E\u9879\uFF0C<strong>\u4E0D\u652F\u6301\u591A\u8868\u5934</strong></td><td><code><a data-toc="STResizable">STResizable</a>, boolean</code></td><td>-</td><td>-</td></tr><tr><td><code>[trackBy]</code></td><td><code>@for</code> \u5217\u8868\u5FAA\u73AF\u7684 <code>TrackByFunction</code> \u51FD\u6570</td><td><code>TrackByFunction&lt;T></code></td><td>-</td><td>-</td></tr><tr><td><code>[drag]</code></td><td>\u62D6\u62FD\u6392\u5E8F</td><td><code>STDragOptions, boolean</code></td><td>-</td><td>-</td></tr><tr><td><code>(change)</code></td><td>\u53D8\u5316\u65F6\u56DE\u8C03\uFF0C\u5305\u62EC\uFF1A<code>pi</code>\u3001<code>ps</code>\u3001<code>checkbox</code>\u3001<code>radio</code>\u3001<code>sort</code>\u3001<code>filter</code>\u3001<code>click</code>\u3001<code>dblClick</code>\u3001<code>expand</code> \u53D8\u52A8</td><td><code>EventEmitter<<a data-toc="STChange">STChange</a>></code></td><td>-</td><td>-</td></tr><tr><td><code>(error)</code></td><td>\u5F02\u5E38\u65F6\u56DE\u8C03</td><td><code>EventEmitter<<a data-toc="STError">STError</a>></code></td><td>-</td><td>-</td></tr></tbody></table><h3 id="\u7EC4\u4EF6\u5C5E\u6027\u4E0E\u65B9\u6CD5"><a class="lake-link"><i data-anchor="\u7EC4\u4EF6\u5C5E\u6027\u4E0E\u65B9\u6CD5"></i></a>\u7EC4\u4EF6\u5C5E\u6027\u4E0E\u65B9\u6CD5</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>[filteredData]</code></td><td>\u83B7\u53D6\u8FC7\u6EE4\u540E\u6240\u6709\u6570\u636E<br>- \u672C\u5730\u6570\u636E\uFF1A\u5305\u542B\u6392\u5E8F\u3001\u8FC7\u6EE4\u540E\u4E0D\u5206\u9875\u6570\u636E<br>- \u8FDC\u7A0B\u6570\u636E\uFF1A\u4E0D\u4F20\u9012 <code>pi</code>\u3001<code>ps</code> \u4E24\u4E2A\u53C2\u6570</td></tr><tr><td><code>[count]</code></td><td>\u83B7\u53D6\u5F53\u524D\u9875\u7684\u6761\u76EE\u6570</td></tr><tr><td><code>[list]</code></td><td>\u83B7\u53D6\u5F53\u524D\u9875\u7684\u6570\u636E\u5217\u8868</td></tr><tr><td><code>resetColumns(options?: STResetColumnsOption)</code></td><td>\u91CD\u7F6E\u5217\u63CF\u8FF0</td></tr><tr><td><code>load(pi = 1, extraParams?: any, options?: STLoadOptions)</code></td><td>\u52A0\u8F7D\u6307\u5B9A\u9875</td></tr><tr><td><code>reload(extraParams?: any, options?: STLoadOptions)</code></td><td>\u5237\u65B0\u5F53\u524D\u9875</td></tr><tr><td><code>reset(extraParams?: any, options?: STLoadOptions)</code></td><td>\u91CD\u7F6E\u4E14\u91CD\u65B0\u8BBE\u7F6E <code>pi</code> \u4E3A <code>1</code>\uFF0C\u5305\u542B\u5355\u591A\u9009\u3001\u6392\u5E8F\u3001\u8FC7\u6EE4\u72B6\u6001\uFF08\u540C\u9ED8\u8BA4\u72B6\u6001\u4E00\u5E76\u6E05\u9664\uFF09</td></tr><tr><td><code>addRow(data: <a data-toc="STData">STData</a> | <a data-toc="STData">STData</a>[], options?: { index?: number })</code></td><td>\u6DFB\u52A0\u884C</td></tr><tr><td><code>removeRow(data: <a data-toc="STData">STData</a> | <a data-toc="STData">STData</a>[] | number)</code></td><td>\u79FB\u9664\u884C</td></tr><tr><td><code>setRow(index: number | <a data-toc="STData">STData</a>, item: <a data-toc="STData">STData</a>, options?: { refreshSchema?: boolean; emitReload?: boolean; arrayProcessMethod?: boolean })</code></td><td>\u4FEE\u6539\u884C\u6570\u636E\uFF0C\u652F\u6301\u90E8\u5206\u5B57\u6BB5\u66F4\u65B0</td></tr><tr><td><code>pureItem(itemOrIndex: <a data-toc="STData">STData</a> | number)</code></td><td>\u8FD4\u56DE\u7EAF\u51C0\u6570\u636E\uFF0C<code>st</code> \u5185\u90E8\u4F1A\u7EF4\u62A4\u4E00\u7EC4\u7528\u4E8E\u7F13\u5B58\u7684\u6570\u636E\uFF0C\u8FD9\u90E8\u5206\u6570\u636E\u53EF\u80FD\u4F1A\u5F71\u54CD\u540E\u7AEF</td></tr><tr><td><code>clear(cleanStatus = true)</code></td><td>\u6E05\u7A7A\u6240\u6709\u6570\u636E</td></tr><tr><td><code>clearStatus()</code></td><td>\u6E05\u7A7A\u6240\u6709\u72B6\u6001\uFF08\u5305\u542B\u5355\u591A\u9009\u3001\u6392\u5E8F\u3001\u8FC7\u6EE4\u72B6\u6001\uFF09</td></tr><tr><td><code>clearCheck()</code></td><td>\u6E05\u9664\u6240\u6709 <code>checkbox</code></td></tr><tr><td><code>clearRadio()</code></td><td>\u6E05\u9664\u6240\u6709 <code>radio</code></td></tr><tr><td><code>export(newData?: <a data-toc="STData">STData</a>[] | true, opt?: <a data-toc="STExportOptions">STExportOptions</a>)</code></td><td>\u5BFC\u51FAExcel\uFF0C\u786E\u4FDD\u5DF2\u7ECF\u5BFC\u5165 <code>XlsxModule</code></td></tr></tbody></table><p>\u4E00\u4E9B\u7EC6\u8282\uFF1A</p><ul><li><p><code>extraParams</code> \u82E5\u4E0D\u4F20\u9012\u8868\u793A\u4FDD\u7559\u539F\u59CB\u503C</p></li><li><p><code>STLoadOptions.merge</code> \u662F\u5426\u5408\u5E76\u6A21\u5F0F\uFF0C\u5373 <code>extraParams</code> \u8DDF\u65B0\u503C\u5408\u5E76\u800C\u975E\u66FF\u4EE3</p></li><li><p><code>STLoadOptions.toTop</code> \u662F\u5426\u8DF3\u8F6C\u81F3\u9876\u90E8\uFF0C\u82E5\u4E0D\u6307\u5B9A\u7531 <code>page.toTop</code> \u6765\u51B3\u5B9A</p></li></ul><p><strong>\u4F7F\u7528\u65B9\u5F0F</strong></p><pre class="hljs language-ts"><code>@Component({
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
) => STStatisticalResult</code></pre><h3 id="STResizable"><a class="lake-link"><i data-anchor="STResizable"></i></a>STResizable</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[disabled]</code></td><td>Disable resize</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[bounds]</code></td><td>\u8C03\u6574\u5C3A\u5BF8\u7684\u8FB9\u754C</td><td><code>window, parent, ElementRef&lt;HTMLElement></code></td><td><code>window</code></td></tr><tr><td><code>[maxWidth]</code></td><td>\u6700\u5927\u5BBD\u5EA6(\u8D85\u8FC7\u8FB9\u754C\u90E8\u5206\u5FFD\u7565)</td><td><code>number</code></td><td><code>360</code></td></tr><tr><td><code>[minWidth]</code></td><td>\u6700\u5C0F\u5BBD\u5EA6</td><td><code>number</code></td><td><code>60</code></td></tr><tr><td><code>[preview]</code></td><td>\u5F00\u542F\u9884\u89C8</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h2 id="Theme"><a class="lake-link"><i data-anchor="Theme"></i></a>Theme</h2><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>@nz-table-img-radius</code></td><td>\u56FE\u50CF\u5706\u89D2\u5927\u5C0F</td><td><code>4px</code></td></tr><tr><td><code>@nz-table-img-margin-right</code></td><td>\u56FE\u50CF\u53F3\u8FB9\u8DDD</td><td><code>4px</code></td></tr><tr><td><code>@nz-table-img-max-height</code></td><td>\u56FE\u50CF\u6700\u5927\u9AD8\u5EA6</td><td><code>32px</code></td></tr><tr><td><code>@nz-table-img-max-width</code></td><td>\u56FE\u50CF\u6700\u5927\u5BBD\u5EA6</td><td><code>32px</code></td></tr><tr><td><code>@nz-table-even-background</code></td><td>\u884C\u5947\u5076\u80CC\u666F\u8272</td><td><code>none</code></td></tr><tr><td><code>@nz-table-rep-max-width</code></td><td>\u53EF\u89C6\u533A\u57DF\u5C0F\u4E8E\u65F6\u89E6\u53D1</td><td><code></code></td></tr><tr><td><code>@nz-table-rep-min-width</code></td><td>\u53EF\u89C6\u533A\u57DF\u5927\u4E8E\u65F6\u89E6\u53D1</td><td><code></code></td></tr><tr><td><code>@nz-table-rep-header-background</code></td><td>\u54CD\u5E94\u5F0F\u4E0B\u6807\u9898\u80CC\u666F\u989C\u8272</td><td><code>@border-color-split</code></td></tr><tr><td><code>@nz-table-rep-even-background</code></td><td>\u54CD\u5E94\u5F0F\u4E0B\u5947\u5076\u989C\u8272</td><td><code>#f9f9f9</code></td></tr><tr><td><code>@nz-table-rep-column-name-color</code></td><td>\u54CD\u5E94\u5F0F\u4E0B\u6587\u672C\u989C\u8272</td><td><code>rgba(0, 0, 0, 0.5)</code></td></tr><tr><td><code>@nz-table-rep-column-name-text-align</code></td><td>\u54CD\u5E94\u5F0F\u4E0B\u6807\u9898\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F</td><td><code>right</code></td></tr><tr><td><code>@nz-table-rep-column-name-width</code></td><td>\u54CD\u5E94\u5F0F\u4E0B\u6807\u9898\u5BBD\u5EA6</td><td><code>100px</code></td></tr><tr><td><code>@nz-table-rep-column-name-padding-right</code></td><td>\u54CD\u5E94\u5F0F\u4E0B\u6807\u9898\u4E0E\u5185\u5BB9\u53F3\u8FB9\u8DDD</td><td><code>8px</code></td></tr><tr><td><code>@table-row-hover-bg</code></td><td>\u884C\u60AC\u505C\u80CC\u666F\u8272</td><td><code>#fafafa</code></td></tr><tr><td><code>@<a data-toc="st">st</a>-btn-disabled-color</code></td><td>\u7981\u7528\u6309\u94AE\u7684\u6587\u672C\u989C\u8272</td><td><code>rgba(0, 0, 0, 0.25)</code></td></tr><tr><td><code>@<a data-toc="st">st</a>-title-optional-color</code></td><td>\u6807\u9898\u53EF\u9009\u6587\u672C\u989C\u8272</td><td><code>rgba(0, 0, 0, 0.35)</code></td></tr><tr><td><code>@<a data-toc="st">st</a>-resizable-handle-width</code></td><td>\u62D6\u62FD\u5BBD\u5EA6</td><td><code>1px</code></td></tr><tr><td><code>@<a data-toc="st">st</a>-resizable-handle-height</code></td><td>\u62D6\u62FD\u9AD8\u5EA6</td><td><code>60%</code></td></tr><tr><td><code>@<a data-toc="st">st</a>-resizable-handle-color</code></td><td>\u62D6\u62FD\u989C\u8272</td><td><code>@border-color-base</code></td></tr></tbody></table>`,meta:{type:"CURD",title:"st",subtitle:"\u8868\u683C",cols:1,order:1,module:"import { STModule } from '@delon/abc/st';"},toc:[{id:"\u5173\u4E8E\u6570\u636E\u6E90",title:"\u5173\u4E8E\u6570\u636E\u6E90",h:2,children:[{id:"URL",title:"URL",h:3},{id:"\u9759\u6001\u6570\u636E",title:"\u9759\u6001\u6570\u636E",h:3},{id:"\u5E38\u89C1\u95EE\u9898",title:"\u5E38\u89C1\u95EE\u9898",h:3}]},{id:"API",title:"API",h:2,children:[{id:"st",title:"st",h:3},{id:"\u7EC4\u4EF6\u5C5E\u6027\u4E0E\u65B9\u6CD5",title:"\u7EC4\u4EF6\u5C5E\u6027\u4E0E\u65B9\u6CD5",h:3},{id:"STReq",title:"STReq",h:3},{id:"STRes",title:"STRes",h:3},{id:"STPage",title:"STPage",h:3},{id:"STError",title:"STError",h:3},{id:"STChange",title:"STChange",h:3},{id:"STChangeSort",title:"STChangeSort",h:3},{id:"STChangeRowClick",title:"STChangeRowClick",h:3},{id:"STExportOptions",title:"STExportOptions",h:3},{id:"STSingleSort",title:"STSingleSort",h:3},{id:"STMultiSort",title:"STMultiSort",h:3},{id:"STData",title:"STData",h:3},{id:"STColumn<TextendsSTData=any>",title:"STColumn<T extends STData = any>",h:3},{id:"STColumnTitle",title:"STColumnTitle",h:3},{id:"STColumnSort",title:"STColumnSort",h:3},{id:"STColumnFilter",title:"STColumnFilter",h:3},{id:"STColumnFilterMenu",title:"STColumnFilterMenu",h:3},{id:"STColumnButton",title:"STColumnButton",h:3},{id:"STIcon",title:"STIcon",h:3},{id:"STColumnButtonModal",title:"STColumnButtonModal",h:3},{id:"STColumnButtonDrawer",title:"STColumnButtonDrawer",h:3},{id:"STColumnSelection",title:"STColumnSelection",h:3},{id:"STColumnYn",title:"STColumnYn",h:3},{id:"STcolumnCurrency",title:"STcolumnCurrency",h:3},{id:"STColumnBadge",title:"STColumnBadge",h:3},{id:"STColumnTag",title:"STColumnTag",h:3},{id:"STWidgetColumn",title:"STWidgetColumn",h:3},{id:"STWidthMode",title:"STWidthMode",h:3},{id:"STStatistical",title:"STStatistical",h:3},{id:"STResizable",title:"STResizable",h:3}]},{id:"Theme",title:"Theme",h:2}]}},demo:!0};codes=[{id:"components-st-basic",meta:{order:1,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"}},summary:{"zh-CN":"<p>\u5FEB\u901F\u751F\u6210\u8868\u683C\uFF1B\u5229\u7528 <code>res</code> \u53EF\u4EE5\u9002\u914D\u540E\u7AEF\u6570\u636E\u683C\u5F0F\u3002</p>","en-US":"<p>Quickly generate tables; use <code>res</code> to adapted backend data format.</p>"},code:`import { Component, ViewChild } from '@angular/core';

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
    {
      title: '\u53EF\u7528',
      index: 'disabled',
      width: 64,
      cell: { type: 'boolean', tooltip: '\u70B9\u51FB\u53EF\u5207\u6362\u72B6\u6001' },
      className: 'point',
      click: i => {
        this.st.setRow(i, { disabled: !i.disabled });
      }
    },
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
}`,lang:"ts",componentName:"ComponentsStContextmenuComponent",point:6,name:"contextmenu",urls:"packages/abc/st/demo/contextmenu.md",type:"demo"},{id:"components-st-drag",meta:{order:4,title:{"en-US":"Drag sorting","zh-CN":"\u62D6\u62FD\u6392\u5E8F"}},summary:{"zh-CN":"<p>\u4F7F\u7528 <code>drag</code> \u5B9E\u73B0\u884C\u62D6\u62FD\u6392\u5E8F\u3002</p>","en-US":"<p>Use <code>drag</code> to implement row drag sorting.</p>"},code:`import { Component } from '@angular/core';

import { STColumn, STData, STModule } from '@delon/abc/st';

@Component({
  selector: 'components-st-drag',
  template: \`<st [data]="users" [columns]="columns" drag />\`,
  imports: [STModule]
})
export class ComponentsStDragComponent {
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
    { title: '\u7F16\u53F74', index: 'id' },
    { title: '\u7F16\u53F75', index: 'id' },
    { title: '\u7F16\u53F76', index: 'id' },
    { title: '\u7F16\u53F77', index: 'id' },
    { title: '\u7F16\u53F78', index: 'id' },
    { title: '\u7F16\u53F78', index: 'id' },
    { title: '\u7F16\u53F78', index: 'id' },
    { title: '\u7F16\u53F78', index: 'id' },
    { title: '\u7F16\u53F78', index: 'id' }
  ];
}`,lang:"ts",componentName:"ComponentsStDragComponent",point:7,name:"drag",urls:"packages/abc/st/demo/drag.md",type:"demo"},{id:"components-st-edit-row",meta:{order:4,title:{"en-US":"Editable Rows","zh-CN":"\u53EF\u7F16\u8F91\u884C"}},summary:{"zh-CN":"<p>\u5B9A\u5236\u5E26\u884C\u7F16\u8F91\u529F\u80FD\u7684\u8868\u683C\uFF0C\u81EA\u7531\u64CD\u4F5C\u884C\u5185\u5BB9\u3002</p>","en-US":"<p>Table with editable rows.</p>"},code:`import { Component, ViewChild, inject } from '@angular/core';
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
}`,lang:"ts",componentName:"ComponentsStEditRowComponent",point:8,name:"edit-row",urls:"packages/abc/st/demo/edit-row.md",type:"demo"},{id:"components-st-form",meta:{order:4,title:{"zh-CN":"\u641C\u7D22\u8868\u5355","en-US":"Search form"}},summary:{"zh-CN":"<p>\u914D\u5408 <code>load()</code> & <code>reset()</code> \u5B9E\u73B0\u641C\u7D22\u8868\u5355\u3002</p>","en-US":"<p>Implement search form with <code>load()</code> & <code>reset()</code>.</p>"},code:`import { Component } from '@angular/core';
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
}`,lang:"ts",componentName:"ComponentsStFormComponent",point:9,name:"form",urls:"packages/abc/st/demo/form.md",type:"demo"},{id:"components-st-row-op",meta:{order:4,title:{"zh-CN":"\u884C\u64CD\u4F5C","en-US":"Row OP"}},summary:{"zh-CN":"<p>\u5229\u7528 <code>addRow</code>\u3001<code>removeRow</code>\u3001<code>setRow</code> \u65B9\u6CD5\u5BF9\u884C\u7684\u64CD\u4F5C\u3002</p><blockquote><p>\u6253\u5F00\u63A7\u5236\u9762\u677F\u4E86\u89E3\u6253\u5370\u660E\u7EC6\u3002</p></blockquote>","en-US":"<p>Operations on rows using <code>addRow</code>, <code>removeRow</code>, <code>setRow</code> methods.</p><blockquote><p>Open the control panel for print details.</p></blockquote>"},code:`import { Component } from '@angular/core';

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
}`,lang:"ts",componentName:"ComponentsStRowOpComponent",point:10,name:"row-op",urls:"packages/abc/st/demo/row-op.md",type:"demo"},{id:"components-st-sort",meta:{order:5,title:{"zh-CN":"\u540E\u7AEF\u7B5B\u9009\u548C\u6392\u5E8F","en-US":"Backend filtering and sorting"}},summary:{"zh-CN":"<p>\u5229\u7528 <code>multiSort</code> \u652F\u6301\u591A\u5B57\u6BB5\u6392\u5E8F\u3002</p>","en-US":"<p>Using <code>multiSort</code> supported multi-field sorting.</p>"},code:`import { Component } from '@angular/core';

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
}`,lang:"ts",componentName:"ComponentsStSortComponent",point:11,name:"sort",urls:"packages/abc/st/demo/sort.md",type:"demo"},{id:"components-st-expand",meta:{order:6,title:{"zh-CN":"\u53EF\u5C55\u5F00","en-US":"Expandable Row"}},summary:{"zh-CN":"<p>\u4F7F\u7528 <code>#expand</code> \u6A21\u677F\u5B9E\u73B0\u53EF\u5C55\u5F00\uFF0C\u5141\u8BB8\u63A5\u6536 <code>item</code>\u3001<code>index</code>\u3001<code>column</code> \u4E09\u4E2A\u503C\u3002\u9644\u52A0\u53EF\u5B9E\u73B0\uFF1A\u5D4C\u5957\u5B50\u8868\u683C\u3002</p>","en-US":"<p>Use <code>#expand</code> template implement expandable, allowing you to receive three values: <code>item</code>, <code>index</code>, <code>column</code>. Additional achievable: nested subtables.</p>"},code:`import { Component } from '@angular/core';

import { STColumn, STData, STModule } from '@delon/abc/st';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'components-st-expand',
  template: \`
    <button nz-button nzType="primary" (click)="customIcon = !customIcon">Use Custom Icon</button>
    <st
      [data]="users"
      [columns]="columns"
      [expand]="expand"
      expandRowByClick
      expandAccordion
      [expandIcon]="customIcon ? expandIcon : null"
    >
      <ng-template #expand let-item let-index="index" let-column="column">
        {{ item.description }}
      </ng-template>
      <ng-template #expandIcon let-i let-index="index">
        <nz-icon [nzType]="i.expand ? 'up' : 'down'" />
      </ng-template>
    </st>
  \`,
  imports: [STModule, NzIconDirective, NzButtonComponent]
})
export class ComponentsStExpandComponent {
  customIcon = false;
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
}`,lang:"ts",componentName:"ComponentsStExpandComponent",point:12,name:"expand",urls:"packages/abc/st/demo/expand.md",type:"demo"},{id:"components-st-render",meta:{order:6,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u5217","en-US":"Custom columns"}},summary:{"zh-CN":`<p>\u521B\u5EFA\u4E00\u4E2A\u5E26\u6709 <code>st-row="custom-name"</code> \u7684 <code>ng-template</code>\uFF0C\u5E76\u5728\u5217\u63CF\u8FF0 <code>render: 'custom-name'</code> \u6307\u5B9A\u540D\u79F0\uFF1B\u6A21\u677F\u5141\u8BB8\u63A5\u6536 <code>item</code>\u3001<code>index</code>\u3001<code>column</code> \u4E09\u4E2A\u503C\u3002</p><p>\u5982\u679C\u6307\u5B9A <code>type="title"</code> \u8868\u793A\u662F\u5BF9\u6807\u9898\u81EA\u5B9A\u4E49\u5217\u3002\u9644\u52A0\u53EF\u5B9E\u73B0\uFF1A\u8868\u5934\u5206\u7EC4\u3002</p>`,"en-US":`<p>Create a <code>ng-template</code> with <code>st-row="custom-name"</code> and specify the name in the column description <code>render: 'custom-name'</code>; template receive <code>item</code>, <code>index</code>, <code>column</code> three values.</p><p>Specifying <code>type="title"</code> means to customize the column for the title. Additional achievable: header grouping.</p>`},code:`import { Component } from '@angular/core';
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
          <nz-icon nzType="down" />
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
}`,lang:"ts",componentName:"ComponentsStRenderComponent",point:13,name:"render",urls:"packages/abc/st/demo/render.md",type:"demo"},{id:"components-st-buttons",meta:{order:7,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u6309\u94AE\u7EC4","en-US":"Custom Buttons"}},summary:{"zh-CN":'<p>\u900F\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u4EA7\u751F\u4E00\u7EC4\u65E5\u5E38\u6309\u94AE\u7EC4\uFF08\u76EE\u6807\u7EC4\u4EF6\u793A\u4F8B\uFF1A<a target="_blank" href="https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/modal.component.ts" data-url="https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/modal.component.ts">DemoModalComponent</a>\u3001<a target="_blank" href="https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/drawer.component.ts" data-url="https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/drawer.component.ts">DemoDrawerComponent</a>\uFF09\u3002</p><blockquote><p>\u5BF9\u8BDD\u6846\u7531<a href="/theme/modal" data-url="/theme/modal">ModalHelper</a>\u5904\u7406\uFF0C\u62BD\u5C49\u7531<a href="/theme/drawer" data-url="/theme/drawer">DrawerHelper</a>\u5904\u7406\u3002</p></blockquote>',"en-US":'<p>Build a button group with the <code>buttons</code> property.</p><p>Generate a set of button group with a simple configuration (example code: <a target="_blank" href="https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/modal. Component.ts" data-url="https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/modal. Component.ts">DemoModalComponent</a>, <a target="_blank" href="https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/drawer.component.ts" data-url="https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/drawer.component.ts">DemoDrawerComponent</a>).</p><blockquote><p>The modal is handled by <a href="/theme/modal" data-url="/theme/modal">ModalHelper</a> and the drawer is handled by <a href="/theme/drawer" data-url="/theme/drawer">DrawerHelper</a>.</p></blockquote>'},code:`import { Component, ViewChild, inject } from '@angular/core';

import { DemoDrawerComponent, DemoModalComponent } from '@shared';

import { STChange, STColumn, STComponent, STData, STModule } from '@delon/abc/st';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'components-st-buttons',
  template: \` <st #st [data]="users" [columns]="columns" (change)="change($event)" /> \`,
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
}`,lang:"ts",componentName:"ComponentsStButtonsComponent",point:14,name:"buttons",urls:"packages/abc/st/demo/buttons.md",type:"demo"},{id:"components-st-widget",meta:{order:7,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6","en-US":"Custom Widgets"}},summary:{"zh-CN":'<p>\u7C7B\u578B\u4E3A <code>widget</code> \u81EA\u5B9A\u4E49\u5C0F\u90E8\u4EF6\uFF0C\u4F8B\u5982\u70B9\u51FB\u5934\u50CF\u5904\u7406\uFF0C\u67E5\u770B<a target="_blank" href="https://github.com/ng-alain/delon/blob/master/src/app/shared/st-widget/img.ts" data-url="https://github.com/ng-alain/delon/blob/master/src/app/shared/st-widget/img.ts">\u6E90\u4EE3\u7801</a>\u3002</p>',"en-US":'<p>The type is <code>widget</code> custom widget, eg: Click on Avatar effect, View <a target="_blank" href="https://github.com/ng-alain/delon/blob/master/src/app/shared/st-widget/img.ts" data-url="https://github.com/ng-alain/delon/blob/master/src/app/shared/st-widget/img.ts">source code</a>.</p>'},code:`import { Component, ViewChild } from '@angular/core';

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
}`,lang:"ts",componentName:"ComponentsStWidgetComponent",point:15,name:"widget",urls:"packages/abc/st/demo/widget.md",type:"demo"},{id:"components-st-colspan-rowspan",meta:{order:8,title:{"en-US":"colSpan and rowSpan","zh-CN":"\u8868\u683C\u884C/\u5217\u5408\u5E76"}},summary:{"zh-CN":"<p>\u8868\u683C\u652F\u6301\u884C/\u5217\u5408\u5E76\uFF0C\u4F7F\u7528 <code>onCell</code> \u8FDB\u884C\u8BBE\u7F6E\uFF0C\u82E5\u8FD4\u56DE <code>colSpan</code> \u6216\u8005 <code>rowSpan</code> \u8BBE\u503C\u4E3A 0 \u65F6\uFF0C\u8BBE\u7F6E\u7684\u8868\u683C\u4E0D\u4F1A\u6E32\u67D3\u3002</p>","en-US":"<p>The table supports row/column merging, use <code>onCell</code> to set, if return <code>colSpan</code> or <code>rowSpan</code> is set to 0, the set table will not be rendered.</p>"},code:`import { Component } from '@angular/core';

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
}`,lang:"ts",componentName:"ComponentsStColspanRowspanComponent",point:16,name:"colspan-rowspan",urls:"packages/abc/st/demo/colspan-rowspan.md",type:"demo"},{id:"components-st-fixed",meta:{order:8,title:{"zh-CN":"\u56FA\u5B9A\u5217","en-US":"Fixed columns"}},summary:{"zh-CN":'<p>\u5BF9\u4E8E\u5217\u6570\u5F88\u591A\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>left</code> \u548C <code>right</code> \u56FA\u5B9A\u524D\u540E\u7684\u5217\uFF0C\u6A2A\u5411\u6EDA\u52A8\u67E5\u770B\u5176\u5B83\u6570\u636E\uFF0C\u9700\u8981\u548C <code>scroll.x</code> \u914D\u5408\u4F7F\u7528\u3002</p><blockquote><p>\u56FA\u5B9A\u5217\u4F7F\u7528\u4E86 <code>sticky</code> \u5C5E\u6027\uFF0C\u6D4F\u89C8\u5668\u652F\u6301\u60C5\u51B5\u53EF\u4EE5\u53C2\u8003<a target="_blank" href="https://caniuse.com/#feat=css-sticky" data-url="https://caniuse.com/#feat=css-sticky">\u8FD9\u91CC</a></p><ul><li><p>\u82E5\u5217\u5934\u4E0E\u5185\u5BB9\u4E0D\u5BF9\u9F50\u6216\u51FA\u73B0\u5217\u91CD\u590D\uFF0C\u8BF7\u6307\u5B9A\u5217\u7684\u5BBD\u5EA6 <code>width</code></p></li><li><p>\u5EFA\u8BAE\u6307\u5B9A <code>scroll.x</code> \u4E3A\u5927\u4E8E\u8868\u683C\u5BBD\u5EA6\u7684\u56FA\u5B9A\u503C\u6216\u767E\u5206\u6BD4\u3002\u6CE8\u610F\uFF0C\u4E14\u975E\u56FA\u5B9A\u5217\u5BBD\u5EA6\u4E4B\u548C\u4E0D\u8981\u8D85\u8FC7 <code>scroll.x</code></p></li></ul></blockquote>',"en-US":'<p>To fix some columns and scroll inside other columns, and you must set <code>scroll.x</code>, <code>left</code> and <code>right</code> meanwhile.</p><blockquote><p>We use <code>sticky</code> property to fixed column\uFF0C<a target="_blank" href="https://caniuse.com/#feat=css-sticky" data-url="https://caniuse.com/#feat=css-sticky">browsers support</a>.</p><ul><li><p>Specify the <code>width</code> of th if header and cell do not align properly.</p></li><li><p>A fixed value which is greater than table width for <code>scroll.x</code> is recommended. The sum of unfixed columns should not greater than <code>scroll.x</code>.</p></li></ul></blockquote>'},code:`import { Component } from '@angular/core';

import { STColumn, STData, STModule } from '@delon/abc/st';

@Component({
  selector: 'components-st-fixed',
  template: \` <st [data]="users" [columns]="columns" [scroll]="{ x: '1300px' }" /> \`,
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
}`,lang:"ts",componentName:"ComponentsStFixedComponent",point:17,name:"fixed",urls:"packages/abc/st/demo/fixed.md",type:"demo"},{id:"components-st-grouping-columns",meta:{order:8,title:{"en-US":"Grouping table head","zh-CN":"\u8868\u5934\u5206\u7EC4"}},summary:{"zh-CN":"<p><code>columns[n]</code> \u53EF\u4EE5\u5185\u5D4C <code>children</code>\uFF0C\u4EE5\u6E32\u67D3\u5206\u7EC4\u8868\u5934\u3002</p>","en-US":"<p>Group table head with <code>columns[n].children</code>.</p>"},code:`import { Component, viewChild } from '@angular/core';

import { STColumn, STComponent, STModule } from '@delon/abc/st';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-st-grouping-columns',
  template: \`
    <button nz-button nzType="primary" (click)="addRow()">addRow</button>
    <st #st [data]="url" [req]="{ params: params }" [columns]="columns" bordered size="middle" />
  \`,
  imports: [STModule, NzButtonComponent]
})
export class ComponentsStGroupingColumnsComponent {
  private readonly st = viewChild<STComponent>('st');
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

  addRow(): void {
    this.st()?.addRow(
      {
        id: 3,
        email: 'aaa6@qq.com',
        picture: {
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/24.jpg'
        },
        name: {
          first: 'first-11',
          last: '	last-1'
        }
      },
      { index: 0 }
    );
  }
}`,lang:"ts",componentName:"ComponentsStGroupingColumnsComponent",point:18,name:"grouping-columns",urls:"packages/abc/st/demo/grouping-columns.md",type:"demo"},{id:"components-st-responsive",meta:{order:9,title:{"zh-CN":"\u54CD\u5E94\u5F0F","en-US":"Responsive"}},summary:{"zh-CN":"<p>\u5C0F\u5C4F\u5E55\u4E0B\u5C06\u4EE5\u54CD\u5E94\u6A21\u5F0F\u5806\u53E0\u663E\u793A\uFF0C<code>responsiveHideHeaderFooter</code> \u5C5E\u6027\u53EF\u4EE5\u4F7F\u5927\u5C4F\u5E55\u4E0D\u663E\u793A\u5934\u548C\u5C3E\uFF0C\u53CD\u4E4B\u3002</p>","en-US":"<p>Table columns are displayed as stacked in responsive mode if the screen size becomes smaller.</p>"},code:`import { Component } from '@angular/core';

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
}`,lang:"ts",componentName:"ComponentsStResponsiveComponent",point:19,name:"responsive",urls:"packages/abc/st/demo/responsive.md",type:"demo"},{id:"components-st-statistical",meta:{order:10,title:{"zh-CN":"\u7EDF\u8BA1","en-US":"Statistical"}},summary:{"zh-CN":"<p>\u652F\u6301 <code>count</code>\u3001<code>distinctCount</code>\u3001<code>sum</code>\u3001<code>average</code>\u3001<code>max</code>\u3001<code>min</code>\u3001\u81EA\u5B9A\u4E49\u7EDF\u8BA1\u65B9\u6CD5\u3002</p>","en-US":"<p>Support <code>count</code>, <code>distinctCount</code>, <code>sum</code>, <code>average</code>, <code>max</code>, <code>min</code> or custom function statistics methods.</p>"},code:`import { Component } from '@angular/core';

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
}`,lang:"ts",componentName:"ComponentsStStatisticalComponent",point:20,name:"statistical",urls:"packages/abc/st/demo/statistical.md",type:"demo"},{id:"components-st-virtual",meta:{order:11,title:{"zh-CN":"\u865A\u62DF\u6EDA\u52A8","en-US":"Virtual Scroll"}},summary:{"zh-CN":'<p>\u865A\u62DF\u6EDA\u52A8\uFF0C\u7ED3\u5408 <a target="_blank" href="https://material.angular.io/cdk/scrolling/overview" data-url="https://material.angular.io/cdk/scrolling/overview">cdk scrolling</a> \u7684\u865A\u62DF\u6EDA\u52A8\uFF0C\u7528\u4E8E\u5DE8\u91CF\u6570\u636E\u52A0\u8F7D\u3002\u53EF\u4EE5\u901A\u8FC7\u83B7\u5F97 <code>cdkVirtualScrollViewport</code> \u8FDB\u884C\u8FDB\u4E00\u6B65\u64CD\u4F5C\uFF0C\u89C1\u672C\u793A\u4F8B\u53CA <a target="_blank" href="https://material.angular.io/cdk/scrolling/api#CdkVirtualScrollViewport" data-url="https://material.angular.io/cdk/scrolling/api#CdkVirtualScrollViewport">API</a>\u3002</p>',"en-US":'<p>Virtual scrolling combine with <a target="_blank" href="https://material.angular.io/cdk/scrolling/overview" data-url="https://material.angular.io/cdk/scrolling/overview">cdk scrolling</a> used to display large data, you can get <code>cdkVirtualScrollViewport</code> in <code>STComponent</code> and find more API <a target="_blank" href="https://material.angular.io/cdk/scrolling/api#CdkVirtualScrollViewport" data-url="https://material.angular.io/cdk/scrolling/api#CdkVirtualScrollViewport">here</a>.</p>'},code:`import { AfterViewInit, Component, DestroyRef, ViewChild, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { STColumn, STComponent, STModule, STPage } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-st-virtual',
  template: \`
    <button nz-button (click)="scrollToIndex(200)">Scroll To Index 200</button>
    <st #st [data]="data" [columns]="columns" [page]="page" virtualScroll [scroll]="{ x: '1300px', y: '240px' }" />
  \`,
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
}`,lang:"ts",componentName:"ComponentsStVirtualComponent",point:21,name:"virtual",urls:"packages/abc/st/demo/virtual.md",type:"demo"},{id:"components-st-export",meta:{order:20,title:{"zh-CN":"\u5BFC\u51FAExcel","en-US":"Export Excel"}},summary:{"zh-CN":"<p>\u5C06\u8868\u683C\u6570\u636E\u4FDD\u5B58\u4E3A Excel\u3002</p>","en-US":"<p>Save the table data as Excel.</p>"},code:`import { Component, ViewChild } from '@angular/core';

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
}`,lang:"ts",componentName:"ComponentsStExportComponent",point:22,name:"export",urls:"packages/abc/st/demo/export.md",type:"demo"},{id:"components-st-resizable",meta:{order:21,title:{"zh-CN":"\u8C03\u6574\u5C3A\u5BF8","en-US":"Resizable"}},summary:{"zh-CN":`<p>\u57FA\u4E8E <a target="_blank" href="https://ng.ant.design/experimental/resizable/zh" data-url="https://ng.ant.design/experimental/resizable/zh">nz-resizable</a> \u8C03\u6574\u8868\u5934\u5BBD\u5EA6\u3002</p><blockquote><ul><li><p>\u6CE8\u610F\uFF1A\u4E0D\u8981\u5FD8\u8BB0\u5728 <code>src/styles</code> \u4E0B\u5BFC\u5165 <code>nz-resizable</code> Less \u6837\u5F0F\u6587\u4EF6\uFF08<code>@import 'ng-zorro-antd/resizable/style/entry.less';</code>\uFF09</p></li><li><p><strong>\u4E0D\u652F\u6301\u591A\u8868\u5934</strong></p></li><li><p>\u5F53\u4E0E\u8FC7\u6EE4\u3001\u6392\u5E8F\u4E00\u540C\u5B58\u5728\u65F6\u8C03\u6574\u624B\u67C4\u4F1A\u53D8\u5C0F</p></li></ul></blockquote>`,"en-US":`<p>Resize the table header base on <a target="_blank" href="https://ng.ant.design/experimental/resizable/en" data-url="https://ng.ant.design/experimental/resizable/en">nz-resizable</a>.</p><blockquote><ul><li><p>Note: Don't forget to import the <code>nz-resizable</code> Less style (<code>@import 'ng-zorro-antd/resizable/style/entry.less';</code>) file in <code>src/styles</code>.</p></li><li><p><strong>Multiple headers not supported</strong></p></li><li><p>Adjustment handles will become smaller when present with filtering and sorting</p></li></ul></blockquote>`},code:`import { Component } from '@angular/core';

import { STChange, STColumn, STModule } from '@delon/abc/st';

@Component({
  selector: 'components-st-resizable',
  template: \`
    <st [data]="url" [columns]="columns" [widthMode]="{ type: 'strict' }" resizable (change)="onChange($event)" />
  \`,
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
}`,lang:"ts",componentName:"ComponentsStResizableComponent",point:23,name:"resizable",urls:"packages/abc/st/demo/resizable.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-st"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:124,vars:51,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-st-basic"),e(7,`
        `),r(),e(8,`
      
        `),d(9,"code-box",3),e(10,`
          `),p(11,"components-st-custom-data"),e(12,`
        `),r(),e(13,`
      
        `),d(14,"code-box",3),e(15,`
          `),p(16,"components-st-type"),e(17,`
        `),r(),e(18,`
      
        `),d(19,"code-box",3),e(20,`
          `),p(21,"components-st-cell"),e(22,`
        `),r(),e(23,`
      
        `),d(24,"code-box",3),e(25,`
          `),p(26,"components-st-checkbox"),e(27,`
        `),r(),e(28,`
      
        `),d(29,"code-box",3),e(30,`
          `),p(31,"components-st-radio"),e(32,`
        `),r(),e(33,`
      
        `),d(34,"code-box",3),e(35,`
          `),p(36,"components-st-contextmenu"),e(37,`
        `),r(),e(38,`
      
        `),d(39,"code-box",3),e(40,`
          `),p(41,"components-st-drag"),e(42,`
        `),r(),e(43,`
      
        `),d(44,"code-box",3),e(45,`
          `),p(46,"components-st-edit-row"),e(47,`
        `),r(),e(48,`
      
        `),d(49,"code-box",3),e(50,`
          `),p(51,"components-st-form"),e(52,`
        `),r(),e(53,`
      
        `),d(54,"code-box",3),e(55,`
          `),p(56,"components-st-row-op"),e(57,`
        `),r(),e(58,`
      
        `),d(59,"code-box",3),e(60,`
          `),p(61,"components-st-sort"),e(62,`
        `),r(),e(63,`
      
        `),d(64,"code-box",3),e(65,`
          `),p(66,"components-st-expand"),e(67,`
        `),r(),e(68,`
      
        `),d(69,"code-box",3),e(70,`
          `),p(71,"components-st-render"),e(72,`
        `),r(),e(73,`
      
        `),d(74,"code-box",3),e(75,`
          `),p(76,"components-st-buttons"),e(77,`
        `),r(),e(78,`
      
        `),d(79,"code-box",3),e(80,`
          `),p(81,"components-st-widget"),e(82,`
        `),r(),e(83,`
      
        `),d(84,"code-box",3),e(85,`
          `),p(86,"components-st-colspan-rowspan"),e(87,`
        `),r(),e(88,`
      
        `),d(89,"code-box",3),e(90,`
          `),p(91,"components-st-fixed"),e(92,`
        `),r(),e(93,`
      
        `),d(94,"code-box",3),e(95,`
          `),p(96,"components-st-grouping-columns"),e(97,`
        `),r(),e(98,`
      
        `),d(99,"code-box",3),e(100,`
          `),p(101,"components-st-responsive"),e(102,`
        `),r(),e(103,`
      
        `),d(104,"code-box",3),e(105,`
          `),p(106,"components-st-statistical"),e(107,`
        `),r(),e(108,`
      
        `),d(109,"code-box",3),e(110,`
          `),p(111,"components-st-virtual"),e(112,`
        `),r(),e(113,`
      
        `),d(114,"code-box",3),e(115,`
          `),p(116,"components-st-export"),e(117,`
        `),r(),e(118,`
      
        `),d(119,"code-box",3),e(120,`
          `),p(121,"components-st-resizable"),e(122,`
        `),r(),e(123,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id),l(5),c("item",o.codes[1]),_("id",o.codes[1].id),l(5),c("item",o.codes[2]),_("id",o.codes[2].id),l(5),c("item",o.codes[3]),_("id",o.codes[3].id),l(5),c("item",o.codes[4]),_("id",o.codes[4].id),l(5),c("item",o.codes[5]),_("id",o.codes[5].id),l(5),c("item",o.codes[6]),_("id",o.codes[6].id),l(5),c("item",o.codes[7]),_("id",o.codes[7].id),l(5),c("item",o.codes[8]),_("id",o.codes[8].id),l(5),c("item",o.codes[9]),_("id",o.codes[9].id),l(5),c("item",o.codes[10]),_("id",o.codes[10].id),l(5),c("item",o.codes[11]),_("id",o.codes[11].id),l(5),c("item",o.codes[12]),_("id",o.codes[12].id),l(5),c("item",o.codes[13]),_("id",o.codes[13].id),l(5),c("item",o.codes[14]),_("id",o.codes[14].id),l(5),c("item",o.codes[15]),_("id",o.codes[15].id),l(5),c("item",o.codes[16]),_("id",o.codes[16].id),l(5),c("item",o.codes[17]),_("id",o.codes[17].id),l(5),c("item",o.codes[18]),_("id",o.codes[18].id),l(5),c("item",o.codes[19]),_("id",o.codes[19].id),l(5),c("item",o.codes[20]),_("id",o.codes[20].id),l(5),c("item",o.codes[21]),_("id",o.codes[21].id),l(5),c("item",o.codes[22]),_("id",o.codes[22].id),l(5),c("item",o.codes[23]),_("id",o.codes[23].id))},dependencies:[O,Ed,Id,Pd,Rd,Ad,Fd,Ld,Bd,Vd,Od,jd,Hd,Wd,Ud,qd,Gd,$d,Qd,Zd,Xd,Kd,Jd,Yd,tr,R,P,j],encapsulation:2})};var or=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-sv-basic"]],decls:55,vars:0,consts:[["label","Firefox"],["label","Default"],["label","Unit","unit","\u4E2A"],["label","Col2","col","2"],["label","Value"],["prefix","\u7EA6","unit","\u4EBF","tooltip","5,011,000,000"],["label","Mulit Value"],["label","Value Size"],["size","small"],["size","large"]],template:function(t,o){t&1&&(e(0,`
    `),d(1,"sv-container"),e(2,`
      `),d(3,"sv-title"),e(4,"title"),r(),e(5,`
      `),d(6,"sv",0),e(7,`
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      `),r(),e(8,`
      `),d(9,"sv",0),e(10,`
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      `),r(),e(11,`
      `),d(12,"sv",0),e(13,`
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      `),r(),e(14,`
      `),p(15,"nz-divider"),e(16,`
      `),p(17,"sv",1),e(18,`
      `),d(19,"sv",2),e(20,"10"),r(),e(21,`
      `),p(22,"sv",2),e(23,`
      `),d(24,"sv",3),e(25,"\u5360\u4E24\u680F"),r(),e(26,`
      `),d(27,"sv",4),e(28,`
        `),d(29,"sv-value",5),e(30,"50.11"),r(),e(31,`
      `),r(),e(32,`
      `),d(33,"sv",6),e(34,`
        `),d(35,"sv-value"),e(36,"10"),r(),e(37,`
        `),d(38,"sv-value"),e(39,"3"),r(),e(40,`
      `),r(),e(41,`
      `),d(42,"sv",7),e(43,`
        `),d(44,"sv-value"),e(45,"Default"),r(),e(46,`
        `),d(47,"sv-value",8),e(48,"Samll"),r(),e(49,`
        `),d(50,"sv-value",9),e(51,"Large"),r(),e(52,`
      `),r(),e(53,`
    `),r(),e(54,`
  `))},dependencies:[pe,Qt,ne,uo,Cn,Hn,jn],encapsulation:2})};function Yh(i,n){i&1&&(e(0,`
          `),d(1,"a",15),e(2,"long"),r(),e(3,`
        `))}var nr=class i{bordered=!0;size="default";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-sv-border"]],decls:54,vars:4,consts:[["label",""],[1,"mb-md"],["nz-button","",3,"click"],[1,"ml-md",3,"ngModelChange","ngModel"],["nz-radio","","nzValue","default"],["nz-radio","","nzValue","large"],["nz-radio","","nzValue","small"],["sv-container","","labelWidth","150",3,"bordered","size"],["label","ID"],["label","Name"],["label","Age"],["label","Long Optional Long Optional","optional","(RMB)"],["label","Optional","optionalHelp","Tips"],["label","Default","optionalHelp","The background color is #f50","optionalHelpColor","#f50"],["col","1",3,"label"],["nz-tooltip","test"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"div",1),e(2,`
      `),d(3,"button",2),b("click",function(){return g(a),C(o.bordered=!o.bordered)}),e(4,"\u5207\u6362\u8FB9\u6846"),r(),e(5,`
      `),d(6,"nz-radio-group",3),L("ngModelChange",function(m){return g(a),A(o.size,m)||(o.size=m),C(m)}),e(7,`
        `),d(8,"label",4),e(9,"default"),r(),e(10,`
        `),d(11,"label",5),e(12,"large"),r(),e(13,`
        `),d(14,"label",6),e(15,"small"),r(),e(16,`
      `),r(),e(17,`
    `),r(),e(18,`
    `),d(19,"div",7),e(20,`
      `),d(21,"sv",8),e(22,"1"),r(),e(23,`
      `),d(24,"sv",9),e(25,"asdf"),r(),e(26,`
      `),d(27,"sv",10),e(28,"25"),r(),e(29,`
      `),d(30,"sv",11),e(31,"Optional"),r(),e(32,`
      `),d(33,"sv",12),e(34,"Optional Help"),r(),e(35,`
      `),p(36,"sv",13),e(37,`
      `),d(38,"sv",14),e(39,`
        `),f(40,Yh,4,0,"ng-template",null,0,I),e(42,`
        `),d(43,"p"),e(44,"Custom label"),r(),e(45,`
        `),d(46,"p"),e(47,"Custom label"),r(),e(48,`
        `),d(49,"p"),e(50,"Custom label"),r(),e(51,`
      `),r(),e(52,`
    `),r(),e(53,`
  `)}if(t&2){let a=v(41);l(6),F("ngModel",o.size),l(13),c("bordered",o.bordered)("size",o.size),l(19),c("label",a)}},dependencies:[pe,Qt,ne,E,k,M,N,Ea,Na,Ma,Se,ee,st,rt,pt],encapsulation:2})};function tf(i,n){i&1&&(e(0,`
          `),d(1,"a",13),e(2,"long"),r(),e(3,`
        `))}var ir=class i{msg=y(yt);columns=[{title:"id"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-sv-fixed"]],decls:38,vars:2,consts:[["label",""],["labelWidth","150"],["label","ID"],["label","Name"],["label","Age"],["label","Reject","type","danger","col","1"],[1,"ml-sm",3,"click"],["label","Long Optional Long Optional","optional","(RMB)"],["label","Optional","optionalHelp","Tips"],["label","Default","optionalHelp","The background color is #f50","optionalHelpColor","#f50"],[3,"label"],["hideLabel","","col","1"],["size","small",3,"columns"],["nz-tooltip","test"]],template:function(t,o){if(t&1){let a=z();e(0,`
    `),d(1,"sv-container",1),e(2,`
      `),d(3,"sv",2),e(4,"1"),r(),e(5,`
      `),d(6,"sv",3),e(7,"asdf"),r(),e(8,`
      `),d(9,"sv",4),e(10,"25"),r(),e(11,`
      `),d(12,"sv",5),e(13," OMG "),d(14,"a",6),b("click",function(){return g(a),C(o.msg.success("to"))}),e(15,"Fixed"),r(),e(16," "),r(),e(17,`
      `),d(18,"sv",7),e(19,"Optional"),r(),e(20,`
      `),d(21,"sv",8),e(22,"Optional Help"),r(),e(23,`
      `),p(24,"sv",9),e(25,`
      `),d(26,"sv",10),e(27,`
        `),f(28,tf,4,0,"ng-template",null,0,I),e(30,`
        Custom label
      `),r(),e(31,`
      `),d(32,"sv",11),e(33,`
        `),p(34,"st",12),e(35,`
      `),r(),e(36,`
    `),r(),e(37,`
  `)}if(t&2){let a=v(29);l(26),c("label",a),l(8),c("columns",o.columns)}},dependencies:[pe,Qt,ne,Se,ee,$,G],encapsulation:2})};var dr=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-sv-type"]],decls:16,vars:0,consts:[["col","4"],["label","primary","type","primary"],["label","success","type","success"],["label","warning","type","warning"],["label","danger","type","danger"]],template:function(t,o){t&1&&(e(0,`
    `),d(1,"sv-container",0),e(2,`
      `),d(3,"sv",1),e(4,"hhhh"),r(),e(5,`
      `),d(6,"sv",2),e(7,"hhhh"),r(),e(8,`
      `),d(9,"sv",3),e(10,"hhhh"),r(),e(11,`
      `),d(12,"sv",4),e(13,"hhhh"),r(),e(14,`
    `),r(),e(15,`
  `))},dependencies:[pe,Qt,ne],encapsulation:2})};var rr=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-sv-vertical"]],decls:16,vars:0,consts:[["layout","vertical"],["label","Firefox"]],template:function(t,o){t&1&&(e(0,`
    `),d(1,"sv-container",0),e(2,`
      `),d(3,"sv-title"),e(4,"title"),r(),e(5,`
      `),d(6,"sv",1),e(7,`
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      `),r(),e(8,`
      `),d(9,"sv",1),e(10,`
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      `),r(),e(11,`
      `),d(12,"sv",1),e(13,`
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      `),r(),e(14,`
    `),r(),e(15,`
  `))},dependencies:[pe,Qt,ne,uo],encapsulation:2})};var ar=class i{item={cols:1,urls:{"en-US":"packages/abc/sv/index.en-US.md","zh-CN":"packages/abc/sv/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Viewing grid system is a higher-order components based on the original <a target="_blank" href="https://ng.ant.design/components/grid/zh" data-url="https://ng.ant.design/components/grid/zh">Grid System</a> that server for view pages.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="sv-container"><a class="lake-link"><i data-anchor="sv-container"></i></a>sv-container</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Global Config</th></tr></thead><tbody><tr><td><code>[<a data-toc="sv">sv</a>-container]</code></td><td>specify the maximum number of columns to display, the final columns number is determined by col setting combined with <a href="/theme/responsive" data-url="/theme/responsive">Responsive Rules</a></td><td><code>'1','2','3','4','5','6'</code></td><td><code>3</code></td><td>\u2705</td></tr><tr><td><code>[col]</code></td><td>specify the maximum number of columns to display, the final columns number is determined by col setting combined with <a href="/theme/responsive" data-url="/theme/responsive">Responsive Rules</a></td><td><code>'1','2','3','4','5','6'</code></td><td><code>3</code></td><td>\u2705</td></tr><tr><td><code>[size]</code></td><td>size of view</td><td><code>'small','large'</code></td><td><code>'large'</code></td><td>\u2705</td></tr><tr><td><code>[layout]</code></td><td>type of layout</td><td><code>'horizontal','vertical'</code></td><td><code>'horizontal'</code></td><td>\u2705</td></tr><tr><td><code>[gutter]</code></td><td>specify the distance between two items, unit is <code>px</code></td><td><code>number</code></td><td><code>32</code></td><td>\u2705</td></tr><tr><td><code>[labelWidth]</code></td><td>label text of width</td><td><code>number</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[default]</code></td><td>whether default text</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[title]</code></td><td>Display title</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[noColon]</code></td><td>Whether to not display : after label text</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[bordered]</code></td><td>Whether to display the border</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr></tbody></table><h3 id="sv"><a class="lake-link"><i data-anchor="sv"></i></a>sv</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[col]</code></td><td>specify the maximum number of columns to display, the final columns number is determined by col setting combined with <a href="/theme/responsive" data-url="/theme/responsive">Responsive Rules</a></td><td>-</td><td></td></tr><tr><td><code>[label]</code></td><td>label of view</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[unit]</code></td><td>unit of view</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[default]</code></td><td>whether default text, inherit <code>sv-container</code></td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[type]</code></td><td>type of view</td><td><code>'primary','success','danger','warning'</code></td><td>-</td></tr><tr><td><code>[optional]</code></td><td>Label optional information</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[optionalHelp]</code></td><td>Label optional help</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[optionalHelpColor]</code></td><td>The background color of label optional help</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[noColon]</code></td><td>Whether to not display : after label text</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[hideLabel]</code></td><td>Whether to hide the current label</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="sv-title"><a class="lake-link"><i data-anchor="sv-title"></i></a>sv-title</h3><p>Display title.</p><h3 id="sv-value"><a class="lake-link"><i data-anchor="sv-value"></i></a>sv-value</h3><p>\u503C\u5C55\u793A\u3002</p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[prefix]</code></td><td>Prefix of value</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[unit]</code></td><td>Unit of value</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[tooltip]</code></td><td>Tooltip text of value</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>Size of value</td><td><code>'large','small','default'</code></td><td><code>default</code></td></tr></tbody></table>`,meta:{type:"CURD",title:"sv",subtitle:"View",cols:1,order:2,module:"import { SVModule } from '@delon/abc/sv';"},toc:[{id:"API",title:"API",h:2,children:[{id:"sv-container",title:"sv-container",h:3},{id:"sv",title:"sv",h:3},{id:"sv-title",title:"sv-title",h:3},{id:"sv-value",title:"sv-value",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u67E5\u770B\u6805\u683C\u7CFB\u7EDF\u662F\u5728\u539F <a target="_blank" href="https://ng.ant.design/components/grid/zh" data-url="https://ng.ant.design/components/grid/zh">Grid \u6805\u683C</a> \u57FA\u7840\u4E0A\u6784\u5EFA\u66F4\u9AD8\u9636\u7684\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u7B80\u5316\u67E5\u770B\u9875\u5E03\u5C40\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="sv-container"><a class="lake-link"><i data-anchor="sv-container"></i></a>sv-container</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5168\u5C40\u914D\u7F6E</th></tr></thead><tbody><tr><td><code>[<a data-toc="sv">sv</a>-container]</code></td><td>\u6307\u5B9A\u4FE1\u606F\u6700\u591A\u5206\u51E0\u5217\u5C55\u793A\uFF0C\u6700\u7EC8\u4E00\u884C\u51E0\u5217\u7531 col \u914D\u7F6E\u7ED3\u5408<a href="/theme/responsive" data-url="/theme/responsive">\u54CD\u5E94\u5F0F\u89C4\u5219</a>\u51B3\u5B9A\uFF0C</td><td><code>'1','2','3','4','5','6'</code></td><td>-</td><td>-</td></tr><tr><td><code>[col]</code></td><td>\u6307\u5B9A\u4FE1\u606F\u6700\u591A\u5206\u51E0\u5217\u5C55\u793A\uFF0C\u6700\u7EC8\u4E00\u884C\u51E0\u5217\u7531 col \u914D\u7F6E\u7ED3\u5408<a href="/theme/responsive" data-url="/theme/responsive">\u54CD\u5E94\u5F0F\u89C4\u5219</a>\u51B3\u5B9A</td><td><code>'1','2','3','4','5','6'</code></td><td><code>3</code></td><td>\u2705</td></tr><tr><td><code>[size]</code></td><td>\u5927\u5C0F</td><td><code>'small','large'</code></td><td><code>'large'</code></td><td>\u2705</td></tr><tr><td><code>[layout]</code></td><td>\u5E03\u5C40</td><td><code>'horizontal','vertical'</code></td><td><code>'horizontal'</code></td><td>\u2705</td></tr><tr><td><code>[gutter]</code></td><td>\u95F4\u8DDD</td><td><code>number</code></td><td><code>32</code></td><td>\u2705</td></tr><tr><td><code>[labelWidth]</code></td><td>\u9ED8\u8BA4\u6807\u7B7E\u6587\u672C\u5BBD\u5EA6</td><td><code>number</code></td><td>-</td><td>\u2705</td></tr><tr><td><code>[default]</code></td><td>\u9ED8\u8BA4\u662F\u5426\u663E\u793A\u9ED8\u8BA4\u6587\u672C</td><td><code>boolean</code></td><td><code>true</code></td><td>\u2705</td></tr><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td><td>-</td></tr><tr><td><code>[noColon]</code></td><td>\u9ED8\u8BA4\u662F\u5426\u4E0D\u663E\u793A label \u540E\u9762\u7684\u5192\u53F7</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[bordered]</code></td><td>\u662F\u5426\u5C55\u793A\u8FB9\u6846</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr></tbody></table><h3 id="sv"><a class="lake-link"><i data-anchor="sv"></i></a>sv</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[col]</code></td><td>\u6307\u5B9A\u4FE1\u606F\u6700\u591A\u5206\u51E0\u5217\u5C55\u793A\uFF0C\u6700\u7EC8\u4E00\u884C\u51E0\u5217\u7531 col \u914D\u7F6E\u7ED3\u5408<a href="/theme/responsive" data-url="/theme/responsive">\u54CD\u5E94\u5F0F\u89C4\u5219</a>\u51B3\u5B9A\uFF0C\u7EE7\u627F <code>sv-container</code></td><td><code>'1','2','3','4','5','6'</code></td><td>-</td></tr><tr><td><code>[label]</code></td><td>\u6807\u7B7E</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[unit]</code></td><td>\u5355\u4F4D</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[default]</code></td><td>\u662F\u5426\u663E\u793A\u9ED8\u8BA4\u6587\u672C\uFF0C\u7EE7\u627F <code>sv-container</code></td><td><code>boolean</code></td><td>-</td></tr><tr><td><code>[type]</code></td><td>\u7C7B\u578B</td><td><code>'primary','success','danger','warning'</code></td><td>-</td></tr><tr><td><code>[optional]</code></td><td>\u6807\u7B7E\u53EF\u9009\u4FE1\u606F</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[optionalHelp]</code></td><td>\u6807\u7B7E\u53EF\u9009\u5E2E\u52A9</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[optionalHelpColor]</code></td><td>\u6807\u7B7E\u53EF\u9009\u5E2E\u52A9\u80CC\u666F\u989C\u8272</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[noColon]</code></td><td>\u662F\u5426\u4E0D\u663E\u793A label \u540E\u9762\u7684\u5192\u53F7</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td></tr><tr><td><code>[hideLabel]</code></td><td>\u662F\u5426\u9690\u85CF\u5F53\u524D <code>label</code></td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="sv-title"><a class="lake-link"><i data-anchor="sv-title"></i></a>sv-title</h3><p>\u7528\u4E8E\u5C55\u793A\u6807\u9898\uFF0C\u5355\u72EC\u4E00\u884C\u3002</p><h3 id="sv-value"><a class="lake-link"><i data-anchor="sv-value"></i></a>sv-value</h3><p>\u503C\u5C55\u793A\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[prefix]</code></td><td>\u524D\u7F00</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[unit]</code></td><td>\u5355\u4F4D</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[tooltip]</code></td><td>\u6587\u5B57\u63D0\u793A\u5185\u5BB9</td><td><code>string, TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[size]</code></td><td>\u5927\u5C0F</td><td><code>'large','small','default'</code></td><td><code>default</code></td></tr></tbody></table>`,meta:{type:"CURD",title:"sv",subtitle:"\u67E5\u770B",cols:1,order:2,module:"import { SVModule } from '@delon/abc/sv';"},toc:[{id:"API",title:"API",h:2,children:[{id:"sv-container",title:"sv-container",h:3},{id:"sv",title:"sv",h:3},{id:"sv-title",title:"sv-title",h:3},{id:"sv-value",title:"sv-value",h:3}]}]}},demo:!0};codes=[{id:"components-sv-basic",meta:{order:1,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"}},summary:{"zh-CN":"<p>\u57FA\u672C\u67E5\u770B\u9875\u3002</p>","en-US":"<p>The simplest view page.</p>"},code:`import { Component } from '@angular/core';

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
  imports: [SVModule]
})
export class ComponentsSvVerticalComponent {}`,lang:"ts",componentName:"ComponentsSvVerticalComponent",point:4,name:"vertical",urls:"packages/abc/sv/demo/vertical.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-sv"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:29,vars:13,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-sv-basic"),e(7,`
        `),r(),e(8,`
      
        `),d(9,"code-box",3),e(10,`
          `),p(11,"components-sv-border"),e(12,`
        `),r(),e(13,`
      
        `),d(14,"code-box",3),e(15,`
          `),p(16,"components-sv-fixed"),e(17,`
        `),r(),e(18,`
      
        `),d(19,"code-box",3),e(20,`
          `),p(21,"components-sv-type"),e(22,`
        `),r(),e(23,`
      
        `),d(24,"code-box",3),e(25,`
          `),p(26,"components-sv-vertical"),e(27,`
        `),r(),e(28,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id),l(5),c("item",o.codes[1]),_("id",o.codes[1].id),l(5),c("item",o.codes[2]),_("id",o.codes[2].id),l(5),c("item",o.codes[3]),_("id",o.codes[3].id),l(5),c("item",o.codes[4]),_("id",o.codes[4].id))},dependencies:[O,or,nr,ir,dr,rr,R,P,j],encapsulation:2})};var ef=["*"];function of(i,n){if(i&1){let t=z();d(0,"a",1),b("click",function(){g(t);let a=h();return C(a.trigger())}),e(1),p(2,"nz-icon",2),r()}if(i&2){let t=h();l(),ut(" ",t.expand?t.locale.collapse:t.locale.expand," "),l(),Et("transform",t.expand?"rotate(-180deg)":null)}}var on=class i{i18n=y(Ze);directionality=y(Wt);cdr=y(ct);destroy$=y(Bt);locale={};expand=!1;dir="ltr";expandable=!0;change=new At;ngOnInit(){this.dir=this.directionality.value,this.directionality.change.pipe(zt(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),this.i18n.change.pipe(zt(this.destroy$)).subscribe(()=>{this.locale=this.i18n.getData("tagSelect"),this.cdr.detectChanges()})}trigger(){this.expand=!this.expand,this.change.emit(this.expand)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["tag-select"]],hostVars:10,hostBindings:function(t,o){t&2&&T("tag-select",!0)("tag-select-rtl",o.dir==="rtl")("tag-select-rtl__has-expand",o.dir==="rtl"&&o.expandable)("tag-select__has-expand",o.expandable)("tag-select__expanded",o.expand)},inputs:{expandable:[2,"expandable","expandable",X]},outputs:{change:"change"},exportAs:["tagSelect"],features:[gt],ngContentSelectors:ef,decls:2,vars:1,consts:[[1,"ant-tag","ant-tag-checkable","tag-select__trigger"],[1,"ant-tag","ant-tag-checkable","tag-select__trigger",3,"click"],["nzType","down"]],template:function(t,o){t&1&&(Z(),H(0),f(1,of,3,3,"a",0)),t&2&&(l(),w(o.expandable?1:-1))},dependencies:[bt],encapsulation:2,changeDetection:0})};function nf(i,n){if(i&1){let t=z();e(0,`
        `),d(1,"nz-tag",0),L("nzCheckedChange",function(a){let s=g(t).$implicit;return A(s.value,a)||(s.value=a),C(a)}),b("nzCheckedChange",function(){let a=g(t).$implicit,s=h();return C(s.change(a))}),e(2),r(),e(3,`
      `)}if(i&2){let t=n.$implicit;l(),F("nzChecked",t.value),l(),ut(`
          `,t.text,`
        `)}}var lr=class i{categories=[{id:0,text:"\u5168\u90E8",value:!1},{id:1,text:"\u7C7B\u76EE\u4E00",value:!1},{id:2,text:"\u7C7B\u76EE\u4E8C",value:!1},{id:3,text:"\u7C7B\u76EE\u4E09",value:!1},{id:4,text:"\u7C7B\u76EE\u56DB",value:!1},{id:5,text:"\u7C7B\u76EE\u4E94",value:!1},{id:6,text:"\u7C7B\u76EE\u516D",value:!1},{id:7,text:"\u7C7B\u76EE\u4E03",value:!1},{id:8,text:"\u7C7B\u76EE\u516B",value:!1},{id:9,text:"\u7C7B\u76EE\u4E5D",value:!1},{id:10,text:"\u7C7B\u76EE\u5341",value:!1},{id:11,text:"\u7C7B\u76EE\u5341\u4E00",value:!1},{id:12,text:"\u7C7B\u76EE\u5341\u4E8C",value:!1},{id:13,text:"\u7C7B\u76EE\u5341\u4E09",value:!1},{id:14,text:"\u7C7B\u76EE\u5341\u56DB",value:!1},{id:15,text:"\u7C7B\u76EE\u5341\u4E94",value:!1}];change(n){if(n.id===0){this.categories.forEach(t=>t.value=n.value);return}this.categories.find(t=>t.id===0).value=!1}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-tag-select-simple"]],decls:6,vars:0,consts:[["nzMode","checkable",3,"nzCheckedChange","nzChecked"]],template:function(t,o){t&1&&(e(0,`
    `),d(1,"tag-select"),e(2,`
      `),xt(3,nf,4,2,null,null,St),r(),e(5,`
  `)),t&2&&(l(3),vt(o.categories))},dependencies:[on,Ia,Fn],encapsulation:2})};var cr=class i{item={cols:1,urls:{"en-US":"packages/abc/tag-select/index.en-US.md","zh-CN":"packages/abc/tag-select/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Increase the label expansion and retraction function.</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="tag-select"><a class="lake-link"><i data-anchor="tag-select"></i></a>tag-select</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[expandable]</code></td><td>Whether to enabled</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>(change)</code></td><td>Callback</td><td><code>EventEmitter&lt;boolean></code></td><td>-</td></tr></tbody></table>',meta:{type:"Layout",title:"tag-select",subtitle:"Tag Select",cols:1,module:"import { TagSelectModule } from '@delon/abc/tag-select';"},toc:[{id:"API",title:"API",h:2,children:[{id:"tag-select",title:"tag-select",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u589E\u52A0\u6807\u7B7E\u7684\u5C55\u5F00\u4E0E\u6536\u8FDB\u529F\u80FD\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="tag-select"><a class="lake-link"><i data-anchor="tag-select"></i></a>tag-select</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[expandable]</code></td><td>\u662F\u5426\u542F\u7528 <code>\u5C55\u5F00\u4E0E\u6536\u8FDB</code></td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>(change)</code></td><td>\u5C55\u5F00\u4E0E\u6536\u8FDB\u56DE\u8C03\u51FD\u6570\uFF0C\u53C2\u6570\uFF1A<code>boolean</code></td><td><code>EventEmitter&lt;boolean></code></td><td>-</td></tr></tbody></table>',meta:{type:"Layout",title:"tag-select",subtitle:"\u6807\u7B7E\u9009\u62E9\u5668",cols:1,module:"import { TagSelectModule } from '@delon/abc/tag-select';"},toc:[{id:"API",title:"API",h:2,children:[{id:"tag-select",title:"tag-select",h:3}]}]}},demo:!0};codes=[{id:"components-tag-select-simple",meta:{order:0,title:"\u57FA\u7840\u6837\u4F8B"},summary:"<p>\u7ED3\u5408 <code>nz-checkable-tag</code> \u7684 <code>tag-select</code> \u7EC4\u4EF6\uFF0C\u65B9\u4FBF\u7684\u5E94\u7528\u4E8E\u7B5B\u9009\u7C7B\u76EE\u7684\u4E1A\u52A1\u573A\u666F\u4E2D\u3002</p>",code:`import { Component } from '@angular/core';

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
}`,lang:"ts",componentName:"ComponentsTagSelectSimpleComponent",point:0,name:"simple",urls:"packages/abc/tag-select/demo/simple.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-tag-select"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-tag-select-simple"),e(7,`
        `),r(),e(8,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id))},dependencies:[O,lr,R,P,j],encapsulation:2})};var sr=class i{constructor(n,t){this.xlsx=n;this.cdr=t}data;url(){this.xlsx.import("./assets/demo.xlsx").then(n=>{this.data=n,this.cdr.detectChanges()})}change(n){let t=n.target;this.xlsx.import(t.files[0]).then(o=>{this.data=o,this.cdr.detectChanges()}),t.value=""}static \u0275fac=function(t){return new(t||i)(tt(On),tt(ct))};static \u0275cmp=u({type:i,selectors:[["components-xlsx-import"]],decls:10,vars:3,consts:[["nz-button","",3,"click"],["type","file","multiple","false",1,"ml-sm",3,"change"],[1,"mt-sm"]],template:function(t,o){t&1&&(e(0,`
    `),d(1,"button",0),b("click",function(){return o.url()}),e(2,"Via Url"),r(),e(3,`
    `),d(4,"input",1),b("change",function(s){return o.change(s)}),r(),e(5,`
    `),d(6,"p",2),e(7),ae(8,"json"),r(),e(9,`
  `)),t&2&&(l(7),ut("result: ",fe(8,1,o.data),""))},dependencies:[E,k,M,N,we],encapsulation:2,changeDetection:0})};var pr=class i{xlsx=y(On);users=Array(100).fill({}).map((n,t)=>({id:t+1,name:`name ${t+1}`,age:Math.ceil(Math.random()*10)+20}));columns=[{title:"\u7F16\u53F7",index:"id",type:"checkbox"},{title:"\u59D3\u540D",index:"name"},{title:"\u5E74\u9F84",index:"age"}];download(n){let t=[this.columns.map(o=>o.title)];this.users.forEach(o=>t.push(this.columns.map(a=>o[a.index]))),this.xlsx.export({sheets:[{data:t,name:"sheet name"}],format:n})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-xlsx-export"]],decls:9,vars:3,consts:[["nz-button","",3,"click"],[1,"mt-sm",3,"data","ps","columns"]],template:function(t,o){t&1&&(e(0,`
    `),d(1,"button",0),b("click",function(){return o.download("xlsx")}),e(2,"Export Xlsx"),r(),e(3,`
    `),d(4,"button",0),b("click",function(){return o.download("csv")}),e(5,"Export Csv"),r(),e(6,`
    `),p(7,"st",1),e(8,`
  `)),t&2&&(l(7),c("data",o.users)("ps",3)("columns",o.columns))},dependencies:[E,k,M,N,$,G],encapsulation:2})};var mr=class i{item={cols:1,urls:{"en-US":"packages/abc/xlsx/index.en-US.md","zh-CN":"packages/abc/xlsx/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>An Excel file operation based on <a target="_blank" href="http://sheetjs.com/" data-url="http://sheetjs.com/">sheetjs</a>.</p><blockquote><p>Note: You can also use <a target="_blank" href="https://github.com/protobi/js-xlsx" data-url="https://github.com/protobi/js-xlsx">js-xlsx</a> to be another Fork by sheetjs library that provides additional options including: images, styles, and more. Finally, use <code>callback</code> option to render your excel.</p></blockquote><h2 id="Dependencies"><a class="lake-link"><i data-anchor="Dependencies"></i></a>Dependencies</h2><p>The sheetjs script file takes the form of lazy loading\uFF0Cyou can change the default CDN path via <a href="/docs/global-config" data-url="/docs/global-config">Global Configuration</a>. By default: <code>https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js</code>.</p><p><strong>Use local path</strong></p><pre class="hljs language-json"><code>// angular.json
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
};</code></pre></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="LazyService"><a class="lake-link"><i data-anchor="LazyService"></i></a>LazyService</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>import(fileOrUrl: File | string)</code></td><td>\u5BFC\u5165Excel\uFF0C\u8FD4\u56DE JSON</td><td><code>Promise&lt;{ [key: string]: any[][] }></code></td><td>-</td></tr><tr><td><code>export(options: <a data-toc="XlsxExportOptions">XlsxExportOptions</a>)</code></td><td>\u5BFC\u51FAExcel</td><td><code>Promise&lt;void></code></td><td>-</td></tr><tr><td><code>numberToSchema(val: number)</code></td><td>\u6570\u503C\u8F6C\u7B26\u53F7\u540D</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="XlsxExportOptions"><a class="lake-link"><i data-anchor="XlsxExportOptions"></i></a>XlsxExportOptions</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[sheets]</code></td><td>\u6570\u636E\u6E90</td><td><code>{ [sheet: string]: WorkSheet } | XlsxExportSheet[]</code></td><td>-</td></tr><tr><td><code>[filename]</code></td><td>Excel\u6587\u4EF6\u540D</td><td><code>string</code></td><td><code>export.xlsx</code></td></tr><tr><td><code>[opts]</code></td><td>Excel\u5199\u5165\u9009\u9879\uFF0C\u89C1 <a target="_blank" href="https://github.com/SheetJS/sheetjs/blob/master/docbits/81_writeopts.md" data-url="https://github.com/SheetJS/sheetjs/blob/master/docbits/81_writeopts.md">WritingOptions</a></td><td><code>WritingOptions</code></td><td>-</td></tr><tr><td><code>[callback]</code></td><td>\u4FDD\u5B58\u524D\u89E6\u53D1</td><td><code>(wb: WorkBook) => void</code></td><td>-</td></tr></tbody></table><h3 id="xlsx"><a class="lake-link"><i data-anchor="xlsx"></i></a>xlsx<label class="api-type-label directive">directive</label></h3><p>xlsx \u6307\u4EE4\u3002</p><pre class="hljs language-html"><code>&lt;div [xlsx]="XlsxExportOptions"&gt;\u5BFC\u51FA&lt;/div&gt;</code></pre>',meta:{type:"Basic",title:"xlsx",order:6,subtitle:"Excel \u64CD\u4F5C",cols:1,module:"import { XlsxModule } from '@delon/abc/xlsx';"},toc:[{id:"\u4F9D\u8D56",title:"\u4F9D\u8D56",h:2},{id:"API",title:"API",h:2,children:[{id:"LazyService",title:"LazyService",h:3},{id:"XlsxExportOptions",title:"XlsxExportOptions",h:3},{id:"xlsx",title:"xlsx",h:3}]}]}},demo:!0};codes=[{id:"components-xlsx-import",meta:{order:1,title:{"zh-CN":"\u5BFC\u5165","en-US":"Import"}},summary:{"zh-CN":"<p>\u5BFC\u5165Excel\u5E76\u8F93\u51FAJSON\uFF0C\u652F\u6301 File\u3001URL \u683C\u5F0F\u3002</p>","en-US":"<p>Import Excel and output JSON, support File, URL.</p>"},code:`import { JsonPipe } from '@angular/common';
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
}`,lang:"ts",componentName:"ComponentsXlsxExportComponent",point:1,name:"export",urls:"packages/abc/xlsx/demo/export.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-xlsx"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-xlsx-import"),e(7,`
        `),r(),e(8,`
      
        `),d(9,"code-box",3),e(10,`
          `),p(11,"components-xlsx-export"),e(12,`
        `),r(),e(13,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id),l(5),c("item",o.codes[1]),_("id",o.codes[1].id))},dependencies:[O,sr,pr,R,P,j],encapsulation:2})};var Ql=Rr(xr());var nn=class nn{http=y(da);lazy=y($e);ngZone=y(Xt);cog;constructor(n){this.cog=n.merge("zip",{url:"https://cdn.jsdelivr.net/npm/jszip@3/dist/jszip.min.js",utils:[]})}init(){return this.lazy.load([this.cog.url].concat(this.cog.utils))}check(n){if(!n)throw new Error("get instance via `ZipService.create()`")}read(n,t){return new Promise((o,a)=>{let s=m=>{this.ngZone.run(()=>o(m))};this.init().then(()=>{if(typeof n=="string"){this.http.request("GET",n,{responseType:"arraybuffer"}).subscribe({next:D=>{JSZip.loadAsync(D,t).then(V=>s(V))},error:D=>{a(D)}});return}let m=new FileReader;m.onload=D=>{JSZip.loadAsync(D.target.result,t).then(V=>s(V))},m.readAsBinaryString(n)})})}create(){return new Promise(n=>{this.init().then(()=>{let t=new JSZip;n(t)}).catch(()=>n(null))})}pushUrl(n,t,o){return this.check(n),new Promise((a,s)=>{this.http.request("GET",o,{responseType:"arraybuffer"}).subscribe({next:m=>{n.file(t,m),a()},error:m=>{s({url:o,error:m})}})})}save(n,t){this.check(n);let o=ft({filename:"download.zip"},t);return new Promise((a,s)=>{n.generateAsync(ft({type:"blob"},o.options),o.update).then(m=>{o.callback&&o.callback(m),(0,Ql.saveAs)(m,o.filename),a()},m=>{s(m)})})}static \u0275fac=function(t){return new(t||nn)(wn(It))};static \u0275prov=de({token:nn,factory:nn.\u0275fac,providedIn:"root"})};Re([Le()],nn.prototype,"read",1);var ko=nn;function rf(i,n){if(i&1&&(e(0,`
        `),d(1,"li"),e(2),ae(3,"json"),r(),e(4,`
      `)),i&2){let t=n.$implicit;l(2),B(fe(3,1,t))}}var ur=class i{zip=y(ko);cdr=y(ct);data=[];format(n){let t=n.files;this.data=Object.keys(t).map(o=>({name:o,dir:t[o].dir,date:t[o].date})),this.cdr.detectChanges()}url(){this.zip.read("./assets/demo.zip").then(n=>this.format(n))}change(n){let t=n.target.files[0];this.zip.read(t).then(o=>this.format(o))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["components-zip-read"]],decls:11,vars:0,consts:[["nz-button","",3,"click"],["type","file","multiple","false",1,"ml-sm",3,"change"]],template:function(t,o){t&1&&(e(0,`
    `),d(1,"button",0),b("click",function(){return o.url()}),e(2,"Via Url"),r(),e(3,`
    `),d(4,"input",1),b("change",function(s){return o.change(s)}),r(),e(5,`
    `),d(6,"ol"),e(7,`
      `),xt(8,rf,5,3,null,null,St),r(),e(10,`
  `)),t&2&&(l(8),vt(o.data))},dependencies:[E,k,M,N,we],encapsulation:2,changeDetection:0})};function af(i,n){if(i&1){let t=z();e(0,`
            `),d(1,"tr"),e(2,`
              `),d(3,"td")(4,"input",3),L("ngModelChange",function(a){let s=g(t).$implicit;return A(s.path,a)||(s.path=a),C(a)}),r()(),e(5,`
              `),d(6,"td")(7,"input",3),L("ngModelChange",function(a){let s=g(t).$implicit;return A(s.url,a)||(s.url=a),C(a)}),r()(),e(8,`
            `),r(),e(9,`
          `)}if(i&2){let t=n.$implicit,o=n.$index;l(4),dn("name","path",o,""),F("ngModel",t.path),l(3),dn("name","url",o,""),F("ngModel",t.url)}}function lf(i,n){if(i&1){let t=z();e(0,`
      `),d(1,"button",0),b("click",function(){g(t);let a=h();return C(a.add())}),e(2,"new"),r(),e(3,`
      `),d(4,"button",1),b("click",function(){g(t);let a=h();return C(a.download())}),e(5,"download"),r(),e(6,`
      `),d(7,"nz-table",2),e(8,`
        `),d(9,"thead"),e(10,`
          `),d(11,"tr"),e(12,`
            `),d(13,"th")(14,"span"),e(15,"path"),r()(),e(16,`
            `),d(17,"th")(18,"span"),e(19,"url"),r()(),e(20,`
          `),r(),e(21,`
        `),r(),e(22,`
        `),d(23,"tbody"),e(24,`
          `),xt(25,af,10,6,null,null,St),r(),e(27,`
      `),r(),e(28,`
    `)}if(i&2){let t=h();l(),c("nzType","primary"),l(6),c("nzData",t.data)("nzFrontPagination",!1)("nzShowPagination",!1),l(18),vt(t.data)}}var hr=class i{constructor(n,t,o){this.zip=n;this.msg=t;this.zip.create().then(a=>{this.instance=a,o.detectChanges()})}instance=null;data=[{path:"\u5C0F\u7A0B\u5E8F\u6807\u5FD7.zip",url:"https://wximg.gtimg.com/shake_tv/mina/standard_logo.zip"}];add(){this.data.push({path:"",url:""})}download(){let n=[];this.data.forEach(t=>{n.push(this.zip.pushUrl(this.instance,t.path,t.url))}),Promise.all(n).then(()=>{this.zip.save(this.instance).then(()=>{this.msg.success("download success"),this.data=[]})},t=>{console.warn(t),this.msg.error(JSON.stringify(t))})}static \u0275fac=function(t){return new(t||i)(tt(ko),tt(yt),tt(ct))};static \u0275cmp=u({type:i,selectors:[["components-zip-save"]],decls:2,vars:1,consts:[["nz-button","",3,"click","nzType"],["nz-button","",1,"ml-sm",3,"click"],[1,"mt-sm",3,"nzData","nzFrontPagination","nzShowPagination"],["nz-input","",3,"ngModelChange","ngModel","name"]],template:function(t,o){t&1&&(e(0,`
    `),f(1,lf,29,4)),t&2&&(l(),w(o.instance?1:-1))},dependencies:[E,k,M,N,Za,Ga,Wa,Ua,Qa,qa,$a,st,ht,rt,pt,lt,at],encapsulation:2})};var fr=class i{item={cols:1,urls:{"en-US":"packages/abc/zip/index.en-US.md","zh-CN":"packages/abc/zip/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>A Zip file operation based on <a target="_blank" href="http://stuk.github.io/jszip/" data-url="http://stuk.github.io/jszip/">jszip</a>.</p><h2 id="Dependencies"><a class="lake-link"><i data-anchor="Dependencies"></i></a>Dependencies</h2><p>The jszip script file takes the form of lazy loading\uFF0Cyou can change the default CDN path via <a href="/docs/global-config" data-url="/docs/global-config">Global Configuration</a>. By default: <code>https://cdn.jsdelivr.net/npm/jszip@3/dist/jszip.min.js</code>.</p><p><strong>Use local path</strong></p><pre class="hljs language-json"><code>// angular.json
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
};</code></pre></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="ZipService"><a class="lake-link"><i data-anchor="ZipService"></i></a>ZipService</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>read(fileOrUrl: File | string, options?: JSZip.JSZipLoadOptions)</code></td><td>\u89E3\u538B</td><td><code>Promise&lt;JSZip></code></td><td>-</td></tr><tr><td><code>create()</code></td><td>\u521B\u5EFA Zip \u5B9E\u4F8B\uFF0C\u7528\u4E8E\u521B\u5EFA\u538B\u7F29\u6587\u4EF6</td><td><code>Promise&lt;JSZip></code></td><td>-</td></tr><tr><td><code>pushUrl(zip: JSZip, path: string, url: string)</code></td><td>\u4E0B\u8F7DURL\u8D44\u6E90\u5E76\u5199\u5165 zip</td><td><code>Promise&lt;void></code></td><td>-</td></tr><tr><td><code>save(zip: JSZip, options?: ZipWriteOptions)</code></td><td>\u4FDD\u5B58Zip</td><td><code>Promise&lt;void></code></td><td>-</td></tr></tbody></table>',meta:{type:"Basic",title:"zip",order:7,subtitle:"Zip \u64CD\u4F5C",cols:1},toc:[{id:"\u4F9D\u8D56",title:"\u4F9D\u8D56",h:2},{id:"API",title:"API",h:2,children:[{id:"ZipService",title:"ZipService",h:3}]}]}},demo:!0};codes=[{id:"components-zip-read",meta:{order:1,title:"\u89E3\u538B"},summary:{"zh-CN":"<p>\u8BFB\u53D6Zip\u6587\u4EF6\u4FE1\u606F\uFF08\u542B\u5185\u5BB9\uFF09\uFF0C\u652F\u6301 File\u3001URL \u5F62\u5F0F\u3002</p>","en-US":"<p>Read Zip file information (including content), support File, URL form.</p>"},code:`import { JsonPipe } from '@angular/common';
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
}`,lang:"ts",componentName:"ComponentsZipSaveComponent",point:1,name:"save",urls:"packages/abc/zip/demo/save.md",type:"demo"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=u({type:i,selectors:[["app-components-zip"]],hostVars:2,hostBindings:function(t,o){t&2&&T("d-block","true")},decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(t,o){t&1&&(d(0,"app-docs",0)(1,"div",1)(2,"div",2),e(3,`
        `),d(4,"code-box",3),e(5,`
          `),p(6,"components-zip-read"),e(7,`
        `),r(),e(8,`
      
        `),d(9,"code-box",3),e(10,`
          `),p(11,"components-zip-save"),e(12,`
        `),r(),e(13,`
      `),r()()()),t&2&&(c("codes",o.codes)("item",o.item),l(),c("nzGutter",16),l(3),c("item",o.codes[0]),_("id",o.codes[0].id),l(5),c("item",o.codes[1]),_("id",o.codes[1].id))},dependencies:[O,ur,hr,R,P,j],encapsulation:2})};var cL=[{path:"",component:rl,children:[{path:"",redirectTo:"sv/zh",pathMatch:"full"},{path:"auto-focus",redirectTo:"auto-focus/zh",pathMatch:"full"},{path:"auto-focus/:lang",component:Yn},{path:"avatar-list",redirectTo:"avatar-list/zh",pathMatch:"full"},{path:"avatar-list/:lang",component:oi},{path:"cell",redirectTo:"cell/zh",pathMatch:"full"},{path:"cell/:lang",component:ii},{path:"count-down",redirectTo:"count-down/zh",pathMatch:"full"},{path:"count-down/:lang",component:ai},{path:"date-picker",redirectTo:"date-picker/zh",pathMatch:"full"},{path:"date-picker/:lang",component:si},{path:"down-file",redirectTo:"down-file/zh",pathMatch:"full"},{path:"down-file/:lang",component:mi},{path:"ellipsis",redirectTo:"ellipsis/zh",pathMatch:"full"},{path:"ellipsis/:lang",component:fi},{path:"error-collect",redirectTo:"error-collect/zh",pathMatch:"full"},{path:"error-collect/:lang",component:Ci},{path:"exception",redirectTo:"exception/zh",pathMatch:"full"},{path:"exception/:lang",component:vi},{path:"footer-toolbar",redirectTo:"footer-toolbar/zh",pathMatch:"full"},{path:"footer-toolbar/:lang",component:zi},{path:"full-content",redirectTo:"full-content/zh",pathMatch:"full"},{path:"full-content/:lang",component:_i},{path:"global-footer",redirectTo:"global-footer/zh",pathMatch:"full"},{path:"global-footer/:lang",component:Di},{path:"highlight",redirectTo:"highlight/zh",pathMatch:"full"},{path:"highlight/:lang",component:Ni},{path:"hotkey",redirectTo:"hotkey/zh",pathMatch:"full"},{path:"hotkey/:lang",component:Pi},{path:"loading",redirectTo:"loading/zh",pathMatch:"full"},{path:"loading/:lang",component:Li},{path:"lodop",redirectTo:"lodop/zh",pathMatch:"full"},{path:"lodop/:lang",component:ji},{path:"media",redirectTo:"media/zh",pathMatch:"full"},{path:"media/:lang",component:Gi},{path:"notice-icon",redirectTo:"notice-icon/zh",pathMatch:"full"},{path:"notice-icon/:lang",component:Zi},{path:"observers",redirectTo:"observers/zh",pathMatch:"full"},{path:"observers/:lang",component:Ji},{path:"onboarding",redirectTo:"onboarding/zh",pathMatch:"full"},{path:"onboarding/:lang",component:ed},{path:"page-header",redirectTo:"page-header/zh",pathMatch:"full"},{path:"page-header/:lang",component:rd},{path:"pdf",redirectTo:"pdf/zh",pathMatch:"full"},{path:"pdf/:lang",component:cd},{path:"quick-menu",redirectTo:"quick-menu/zh",pathMatch:"full"},{path:"quick-menu/:lang",component:pd},{path:"result",redirectTo:"result/zh",pathMatch:"full"},{path:"result/:lang",component:gd},{path:"reuse-tab",redirectTo:"reuse-tab/zh",pathMatch:"full"},{path:"reuse-tab/:lang",component:Cd},{path:"se",redirectTo:"se/zh",pathMatch:"full"},{path:"se/:lang",component:kd},{path:"sg",redirectTo:"sg/zh",pathMatch:"full"},{path:"sg/:lang",component:Nd},{path:"st",redirectTo:"st/zh",pathMatch:"full"},{path:"st/:lang",component:er},{path:"sv",redirectTo:"sv/zh",pathMatch:"full"},{path:"sv/:lang",component:ar},{path:"tag-select",redirectTo:"tag-select/zh",pathMatch:"full"},{path:"tag-select/:lang",component:cr},{path:"xlsx",redirectTo:"xlsx/zh",pathMatch:"full"},{path:"xlsx/:lang",component:mr},{path:"zip",redirectTo:"zip/zh",pathMatch:"full"},{path:"zip/:lang",component:fr}]}];export{cL as routes};
