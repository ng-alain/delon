import{$a as h,Gd as B,Id as b,Ja as r,Ka as _,La as A,Sa as o,Ta as y,Ua as d,a as p,da as w,fb as g,gb as u,ha as m,hb as z,hc as x,ia as P,ib as S,ic as I,ja as T,jb as k,ma as v,mc as L,od as q,q as C,rb as l,sb as M,tb as D,uc as F}from"./chunk-SBXYWWID.js";var N=["nzType","avatar"];function O(n,e){if(n&1&&(g(0,"div",5),z(1,"nz-skeleton-element",6),u()),n&2){let s=l(2);r(1),o("nzSize",s.avatar.size||"default")("nzShape",s.avatar.shape||"circle")}}function j(n,e){if(n&1&&z(0,"h3",7),n&2){let s=l(2);y("width",s.toCSSUnit(s.title.width))}}function E(n,e){if(n&1&&z(0,"li"),n&2){let s=e.index,t=l(3);y("width",t.toCSSUnit(t.widthList[s]))}}function R(n,e){if(n&1&&(g(0,"ul",8),h(1,E,1,2,"li",9),u()),n&2){let s=l(2);r(1),o("ngForOf",s.rowsList)}}function V(n,e){if(n&1&&(S(0),h(1,O,2,2,"div",1),g(2,"div",2),h(3,j,1,2,"h3",3)(4,R,2,1,"ul",4),u(),k()),n&2){let s=l();r(1),o("ngIf",!!s.nzAvatar),r(2),o("ngIf",!!s.nzTitle),r(1),o("ngIf",!!s.nzParagraph)}}function U(n,e){n&1&&(S(0),D(1),k())}var H=["*"],c=class c{constructor(){this.nzActive=!1,this.nzBlock=!1}};c.\u0275fac=function(s){return new(s||c)},c.\u0275dir=T({type:c,selectors:[["nz-skeleton-element"]],hostAttrs:[1,"ant-skeleton","ant-skeleton-element"],hostVars:4,hostBindings:function(s,t){s&2&&d("ant-skeleton-active",t.nzActive)("ant-skeleton-block",t.nzBlock)},inputs:{nzActive:"nzActive",nzType:"nzType",nzBlock:"nzBlock"}});var f=c;C([b()],f.prototype,"nzBlock",void 0);var W=(()=>{let e=class e{constructor(){this.nzShape="circle",this.nzSize="default",this.styleMap={}}ngOnChanges(t){if(t.nzSize&&typeof this.nzSize=="number"){let i=`${this.nzSize}px`;this.styleMap={width:i,height:i,"line-height":i}}else this.styleMap={}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["nz-skeleton-element","nzType","avatar"]],inputs:{nzShape:"nzShape",nzSize:"nzSize"},features:[v],attrs:N,decls:1,vars:9,consts:[[1,"ant-skeleton-avatar",3,"ngStyle"]],template:function(i,a){i&1&&z(0,"span",0),i&2&&(d("ant-skeleton-avatar-square",a.nzShape==="square")("ant-skeleton-avatar-circle",a.nzShape==="circle")("ant-skeleton-avatar-lg",a.nzSize==="large")("ant-skeleton-avatar-sm",a.nzSize==="small"),o("ngStyle",a.styleMap))},dependencies:[L],encapsulation:2,changeDetection:0});let n=e;return n})();var Z=(()=>{let e=class e{constructor(t){this.cdr=t,this.nzActive=!1,this.nzLoading=!0,this.nzRound=!1,this.nzTitle=!0,this.nzAvatar=!1,this.nzParagraph=!0,this.rowsList=[],this.widthList=[]}toCSSUnit(t=""){return B(t)}getTitleProps(){let t=!!this.nzAvatar,i=!!this.nzParagraph,a="";return!t&&i?a="38%":t&&i&&(a="50%"),p({width:a},this.getProps(this.nzTitle))}getAvatarProps(){let t=this.nzTitle&&!this.nzParagraph?"square":"circle";return p({shape:t,size:"large"},this.getProps(this.nzAvatar))}getParagraphProps(){let t=!!this.nzAvatar,i=!!this.nzTitle,a={};return(!t||!i)&&(a.width="61%"),!t&&i?a.rows=3:a.rows=2,p(p({},a),this.getProps(this.nzParagraph))}getProps(t){return t&&typeof t=="object"?t:{}}getWidthList(){let{width:t,rows:i}=this.paragraph,a=[];return t&&Array.isArray(t)?a=t:t&&!Array.isArray(t)&&(a=[],a[i-1]=t),a}updateProps(){this.title=this.getTitleProps(),this.avatar=this.getAvatarProps(),this.paragraph=this.getParagraphProps(),this.rowsList=[...Array(this.paragraph.rows)],this.widthList=this.getWidthList(),this.cdr.markForCheck()}ngOnInit(){this.updateProps()}ngOnChanges(t){(t.nzTitle||t.nzAvatar||t.nzParagraph)&&this.updateProps()}};e.\u0275fac=function(i){return new(i||e)(_(A))},e.\u0275cmp=m({type:e,selectors:[["nz-skeleton"]],hostAttrs:[1,"ant-skeleton"],hostVars:6,hostBindings:function(i,a){i&2&&d("ant-skeleton-with-avatar",!!a.nzAvatar)("ant-skeleton-active",a.nzActive)("ant-skeleton-round",!!a.nzRound)},inputs:{nzActive:"nzActive",nzLoading:"nzLoading",nzRound:"nzRound",nzTitle:"nzTitle",nzAvatar:"nzAvatar",nzParagraph:"nzParagraph"},exportAs:["nzSkeleton"],features:[v],ngContentSelectors:H,decls:2,vars:2,consts:[[4,"ngIf"],["class","ant-skeleton-header",4,"ngIf"],[1,"ant-skeleton-content"],["class","ant-skeleton-title",3,"width",4,"ngIf"],["class","ant-skeleton-paragraph",4,"ngIf"],[1,"ant-skeleton-header"],["nzType","avatar",3,"nzSize","nzShape"],[1,"ant-skeleton-title"],[1,"ant-skeleton-paragraph"],[3,"width",4,"ngFor","ngForOf"]],template:function(i,a){i&1&&(M(),h(0,V,5,3,"ng-container",0)(1,U,2,0,"ng-container",0)),i&2&&(o("ngIf",a.nzLoading),r(1),o("ngIf",!a.nzLoading))},dependencies:[x,I,f,W],encapsulation:2,changeDetection:0});let n=e;return n})(),tt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=P({type:e}),e.\u0275inj=w({imports:[q,F]});let n=e;return n})();export{Z as a,tt as b};
