import{a as nt,b as Fe,c as An,d as Pn}from"./chunk-Y6KOM4P7.js";import{a as Nn,b as In}from"./chunk-WGHE4HA3.js";import{a as Ae,b as Pe}from"./chunk-GMUSWC4O.js";import{d as Mn,g as Dn,i as zn,k as kn,l as Tn,m as Sn,o as _n}from"./chunk-Y5AXNPUN.js";import"./chunk-VUOSYIK3.js";import{a as wn,b as Gn}from"./chunk-3BW7LII6.js";import{a as En,b as Bn}from"./chunk-VX4RYKMX.js";import{a as ut,b as ft}from"./chunk-LANDAJ75.js";import"./chunk-4LMKEQTT.js";import{a as E}from"./chunk-UCKPIABN.js";import"./chunk-33YW74HO.js";import{a as S}from"./chunk-BXICUQRH.js";import{a as Fn}from"./chunk-5XANOQJV.js";import"./chunk-T6SR3K6A.js";import"./chunk-WCHKEMEB.js";import"./chunk-U4WZ6ZZW.js";import{q as bn,r as xn,s as w,t as G,u as N}from"./chunk-PKX7OMMK.js";import{F as Ft,H as At,R as et,g as gn,m as vn,v as Cn}from"./chunk-PLWMGIRY.js";import{$a as M,Ab as Nt,Ag as un,Ba as re,C as ee,Db as u,Eb as le,Eg as fn,Fa as dn,Fb as at,Ga as cn,Gb as ln,H as an,Hb as mn,Ja as d,Ka as U,L as ne,La as Tt,Na as ot,Oa as we,Pa as J,Qb as Ne,Ra as b,Rb as Ie,Sa as l,Ta as bt,Tb as Ee,Tg as H,Ua as y,Ub as It,Ug as yn,Vg as z,Xa as sn,Y as rn,Ye as ct,a as kt,ab as I,ag as Et,b as on,bb as St,bg as Bt,cg as Y,da as F,db as _t,eb as wt,eg as K,fb as s,ga as dt,gb as c,gc as pn,gg as X,ha as m,hb as p,ia as A,ib as q,ig as tt,jb as Z,jd as Be,lb as de,lf as pt,ma as oe,mc as mt,mf as ht,na as ie,oa as ae,pb as T,q as v,ra as Q,rb as k,sb as ce,tb as se,ub as $e,uc as P,vb as Ge,xb as Gt,yb as i,zb as L,zg as hn}from"./chunk-KLO4GQEX.js";function Vo(o,t){if(o&1&&(q(0),i(1),Z()),o&2){let r=k();d(1),L(r.avatar)}}function Uo(o,t){if(o&1&&(q(0),i(1),Z()),o&2){let r=k(2);d(1),L(r.title)}}function qo(o,t){if(o&1&&(s(0,"span",13),M(1,Uo,2,1,"ng-container",4),c()),o&2){let r=k();d(1),l("nzStringTemplateOutlet",r.title)}}function Zo(o,t){if(o&1&&(q(0),i(1),Z()),o&2){let r=k(2);d(1),L(r.action)}}function Qo(o,t){if(o&1&&(s(0,"span",14),M(1,Zo,2,1,"ng-container",4),c()),o&2){let r=k();d(1),l("nzStringTemplateOutlet",r.action)}}function Jo(o,t){if(o&1&&p(0,"p",15),o&2){let r=k();l("innerHTML",r.total,re)}}function Yo(o,t){if(o&1&&(q(0),i(1),Z()),o&2){let r=k(2);d(1),L(r.footer)}}function Ko(o,t){if(o&1&&(s(0,"div",16),M(1,Yo,2,1,"ng-container",4),c()),o&2){let r=k();d(1),l("nzStringTemplateOutlet",r.footer)}}var Xo=()=>({padding:"20px 24px 8px 24px"}),ti=o=>({height:o}),ei=o=>({"g2-card__fixed":o}),ni=["*"],me=class me{set contentHeight(t){this._orgHeight=t,this._height=typeof t=="number"?this._height=`${t}px`:t}constructor(t){this.cdr=t,this.bordered=!1,this.total="",this._height="auto",this.loading=!1}ngOnChanges(){this.cdr.detectChanges()}};me.\u0275fac=function(r){return new(r||me)(U(Tt))},me.\u0275cmp=m({type:me,selectors:[["g2-card"]],hostVars:2,hostBindings:function(r,e){r&2&&y("g2-card",!0)},inputs:{bordered:"bordered",avatar:"avatar",title:"title",action:"action",total:"total",contentHeight:"contentHeight",footer:"footer",loading:"loading"},exportAs:["g2Card"],features:[oe],ngContentSelectors:ni,decls:14,vars:15,consts:[[3,"nzBodyStyle","nzBordered"],[3,"nzSpinning"],[1,"g2-card__top"],[1,"g2-card__avatar"],[4,"nzStringTemplateOutlet"],[1,"g2-card__meta-wrap"],[1,"g2-card__meta"],["class","g2-card__meta-title"],["class","g2-card__meta-action"],["class","g2-card__total",3,"innerHTML"],[1,"g2-card__desc",3,"ngStyle"],[3,"ngClass"],["class","g2-card__footer"],[1,"g2-card__meta-title"],[1,"g2-card__meta-action"],[1,"g2-card__total",3,"innerHTML"],[1,"g2-card__footer"]],template:function(r,e){r&1&&(ce(),s(0,"nz-card",0)(1,"nz-spin",1)(2,"div",2)(3,"div",3),M(4,Vo,2,1,"ng-container",4),c(),s(5,"div",5)(6,"div",6),M(7,qo,2,1,"span",7)(8,Qo,2,1,"span",8),c(),M(9,Jo,1,1,"p",9),c()(),s(10,"div",10)(11,"div",11),se(12),c()(),M(13,Ko,2,1,"div",12),c()()),r&2&&(l("nzBodyStyle",le(10,Xo))("nzBordered",e.bordered),d(1),l("nzSpinning",e.loading),d(3),l("nzStringTemplateOutlet",e.avatar),d(3),I(7,e.title?7:-1),d(1),I(8,e.action?8:-1),d(1),I(9,e.total?9:-1),d(1),l("ngStyle",at(11,ti,e._height)),d(1),l("ngClass",at(13,ei,!!e._orgHeight)),d(2),I(13,e.footer?13:-1))},dependencies:[pn,mt,Nn,bn,pt],encapsulation:2,changeDetection:0});var gt=me;v([H()],gt.prototype,"bordered",void 0);v([H()],gt.prototype,"loading",void 0);var pe=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=A({type:t}),t.\u0275inj=F({imports:[P,In,xn,ht]});let o=t;return o})();function oi(o,t){o&1&&p(0,"nz-skeleton")}var ii=["*"],Ht=class Ht extends nt{constructor(){super(...arguments),this.resizeTime=0,this.render=new ot,this.resize=new ot,this.destroy=new ot}install(){this.el.nativeElement.innerHTML="",this.render.emit(this.el),this.installResizeEvent()}installResizeEvent(){this.resizeTime<=0||ee(window,"resize").pipe(rn(this.destroy$),ne(Math.min(200,this.resizeTime))).subscribe(()=>this.resize.emit(this.el))}};Ht.\u0275fac=(()=>{let t;return function(e){return(t||(t=Q(Ht)))(e||Ht)}})(),Ht.\u0275cmp=m({type:Ht,selectors:[["g2"],["g2-custom"]],hostVars:2,hostBindings:function(r,e){r&2&&bt("height",e.height,"px")},inputs:{height:"height",resizeTime:"resizeTime"},outputs:{render:"render",resize:"resize",destroy:"destroy"},exportAs:["g2Custom"],features:[J],ngContentSelectors:ii,decls:2,vars:1,template:function(r,e){r&1&&(ce(),M(0,oi,1,0,"nz-skeleton"),se(1)),r&2&&I(0,e.loaded?-1:0)},dependencies:[ut],encapsulation:2,changeDetection:0});var Lt=Ht;v([z()],Lt.prototype,"height",void 0);v([z()],Lt.prototype,"resizeTime",void 0);var On=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=A({type:t}),t.\u0275inj=F({imports:[P,ft]});let o=t;return o})();function ri(o,t){o&1&&p(0,"nz-skeleton")}var Vt=class Vt extends nt{constructor(){super(...arguments),this.color="#2f9cff",this.padding=[10,10,30,10]}install(){this.winG2.registerShape("point","pointer",{draw(f,D){let C=D.addGroup({}),x=this.parsePoint({x:0,y:0});return C.addShape("line",{attrs:{x1:x.x,y1:x.y,x2:f.x,y2:f.y,stroke:f.color,lineWidth:2.5,lineCap:"round"}}),C.addShape("circle",{attrs:{x:x.x,y:x.y,r:5.75,stroke:f.color,lineWidth:2,fill:"#fff"}}),C}});let{el:t,height:r,padding:e,format:n,theme:a}=this,h=this._chart=new this.winG2.Chart({container:t.nativeElement,autoFit:!0,height:r,padding:e,theme:a});h.legend(!1),h.animate(!1),h.tooltip(!1),h.coordinate("polar",{startAngle:-9/8*Math.PI,endAngle:1/8*Math.PI,radius:.75}),h.scale("value",{min:0,max:100,nice:!0,tickCount:6}),h.axis("1",!1),h.axis("value",{line:null,label:{offset:-14,formatter:n},tickLine:null,grid:null}),h.point().position("value*1").shape("pointer"),this.ready.next(h),this.changeData(),h.render()}changeData(){let{_chart:t,percent:r,color:e,bgColor:n,title:a}=this;if(!t)return;let h=[{name:a,value:r}],f=h[0].value;t.annotation().clear(!0),t.geometries[0].color(e),t.annotation().arc({top:!1,start:[0,.95],end:[100,.95],style:{stroke:n,lineWidth:12,lineDash:null}}),t.annotation().arc({start:[0,.95],end:[h[0].value,.95],style:{stroke:e,lineWidth:12,lineDash:null}}),t.annotation().text({position:["50%","85%"],content:a,style:{fontSize:12,fill:this.theme==="dark"?"rgba(255, 255, 255, 0.43)":"rgba(0, 0, 0, 0.43)",textAlign:"center"}}),t.annotation().text({position:["50%","90%"],content:`${f} %`,style:{fontSize:20,fill:this.theme==="dark"?"rgba(255, 255, 255, 0.85)":"rgba(0, 0, 0, 0.85)",textAlign:"center"},offsetY:15}),t.changeData(h)}};Vt.\u0275fac=(()=>{let t;return function(e){return(t||(t=Q(Vt)))(e||Vt)}})(),Vt.\u0275cmp=m({type:Vt,selectors:[["g2-gauge"]],hostVars:2,hostBindings:function(r,e){r&2&&y("g2-gauge",!0)},inputs:{title:"title",height:"height",color:"color",bgColor:"bgColor",format:"format",percent:"percent",padding:"padding"},exportAs:["g2Gauge"],features:[J],decls:1,vars:1,template:function(r,e){r&1&&M(0,ri,1,0,"nz-skeleton"),r&2&&I(0,e.loaded?-1:0)},dependencies:[ut],encapsulation:2,changeDetection:0});var Ut=Vt;v([z()],Ut.prototype,"height",void 0);v([z()],Ut.prototype,"percent",void 0);var Rn=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=A({type:t}),t.\u0275inj=F({imports:[P,ft]});let o=t;return o})();var qt=class qt extends nt{constructor(){super(...arguments),this.color="rgba(24, 144, 255, 0.2)",this.borderColor="#1890FF",this.borderWidth=2,this.height=56,this.fit=!0,this.line=!1,this.animate=!0,this.padding=[8,8,8,8],this.data=[],this.yTooltipSuffix="",this.tooltipType="default",this.clickItem=new ot}install(){let{el:t,fit:r,height:e,padding:n,xAxis:a,yAxis:h,yTooltipSuffix:f,tooltipType:D,line:C,theme:x,animate:$,color:j,borderColor:B,borderWidth:W}=this,O=this._chart=new this.winG2.Chart({container:t.nativeElement,autoFit:r,height:e,padding:n,theme:x});O.animate($),!a&&!h&&O.axis(!1),a?O.axis("x",a):O.axis("x",!1),h?O.axis("y",h):O.axis("y",!1),O.legend(!1),O.tooltip(Fe(D)),O.area().position("x*y").color(j).tooltip("x*y",(_,R)=>({name:_,value:R+f})).shape("smooth"),C&&O.line().position("x*y").shape("smooth").color(B).size(W).tooltip(!1),O.on("plot:click",_=>{let R=this._chart.getSnapRecords({x:_.x,y:_.y});this.ngZone.run(()=>this.clickItem.emit({item:R[0]._origin,ev:_}))}),this.ready.next(O),this.changeData(),O.render()}changeData(){let{_chart:t,data:r}=this;!t||!Array.isArray(r)||r.length<=0||t.changeData(r)}};qt.\u0275fac=(()=>{let t;return function(e){return(t||(t=Q(qt)))(e||qt)}})(),qt.\u0275cmp=m({type:qt,selectors:[["g2-mini-area"]],hostVars:2,hostBindings:function(r,e){r&2&&bt("height",e.height,"px")},inputs:{color:"color",borderColor:"borderColor",borderWidth:"borderWidth",height:"height",fit:"fit",line:"line",animate:"animate",xAxis:"xAxis",yAxis:"yAxis",padding:"padding",data:"data",yTooltipSuffix:"yTooltipSuffix",tooltipType:"tooltipType"},outputs:{clickItem:"clickItem"},exportAs:["g2MiniArea"],features:[J],decls:0,vars:0,template:function(r,e){},encapsulation:2,changeDetection:0});var st=qt;v([z()],st.prototype,"borderWidth",void 0);v([z()],st.prototype,"height",void 0);v([H()],st.prototype,"fit",void 0);v([H()],st.prototype,"line",void 0);v([H()],st.prototype,"animate",void 0);var he=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=A({type:t}),t.\u0275inj=F({imports:[P]});let o=t;return o})();var Zt=class Zt extends nt{constructor(){super(...arguments),this.color="#1890FF",this.height=0,this.borderWidth=5,this.padding=[8,8,8,8],this.data=[],this.yTooltipSuffix="",this.tooltipType="default",this.clickItem=new ot}install(){let{el:t,height:r,padding:e,yTooltipSuffix:n,tooltipType:a,theme:h,color:f,borderWidth:D}=this,C=this._chart=new this.winG2.Chart({container:t.nativeElement,autoFit:!0,height:r,padding:e,theme:h});C.scale({x:{type:"cat"},y:{min:0}}),C.legend(!1),C.axis(!1),C.tooltip(Fe(a,{showCrosshairs:!1})),C.interval().position("x*y").color("x*y",(x,$)=>{let j=this.data.find(B=>B.x===x&&B.y===$);return j&&j.color?j.color:f}).size(D).tooltip("x*y",(x,$)=>({name:x,value:$+n})),C.on("interval:click",x=>{this.ngZone.run(()=>this.clickItem.emit({item:x.data?.data,ev:x}))}),this.ready.next(C),this.changeData(),C.render()}changeData(){let{_chart:t,data:r}=this;!t||!Array.isArray(r)||r.length<=0||t.changeData(r)}};Zt.\u0275fac=(()=>{let t;return function(e){return(t||(t=Q(Zt)))(e||Zt)}})(),Zt.\u0275cmp=m({type:Zt,selectors:[["g2-mini-bar"]],hostVars:2,hostBindings:function(r,e){r&2&&bt("height",e.height,"px")},inputs:{color:"color",height:"height",borderWidth:"borderWidth",padding:"padding",data:"data",yTooltipSuffix:"yTooltipSuffix",tooltipType:"tooltipType"},outputs:{clickItem:"clickItem"},exportAs:["g2MiniBar"],features:[J],decls:0,vars:0,template:function(r,e){},encapsulation:2,changeDetection:0});var vt=Zt;v([z()],vt.prototype,"height",void 0);v([z()],vt.prototype,"borderWidth",void 0);var ue=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=A({type:t}),t.\u0275inj=F({imports:[P]});let o=t;return o})();var ci=o=>({"left.%":o}),jn=o=>({"background-color":o}),si=(o,t,r)=>({"background-color":o,"width.%":t,"height.px":r}),fe=class fe{constructor(t,r){this.i18n=t,this.cdr=r,this.color="#1890FF"}fixNum(t){return Math.min(Math.max(yn(t),0),100)}ngOnChanges(){this.target=this.fixNum(this.target),this.percent=this.fixNum(this.percent),this.cdr.detectChanges()}};fe.\u0275fac=function(r){return new(r||fe)(U(hn),U(Tt))},fe.\u0275cmp=m({type:fe,selectors:[["g2-mini-progress"]],hostVars:2,hostBindings:function(r,e){r&2&&y("g2-mini-progress",!0)},inputs:{color:"color",target:"target",percent:"percent",strokeWidth:"strokeWidth"},exportAs:["g2MiniProgress"],features:[oe],decls:5,vars:15,consts:[["nz-tooltip","",1,"g2-mini-progress__target",3,"nzTooltipTitle","ngStyle"],[1,"g2-mini-progress__target-item",3,"ngStyle"],[1,"g2-mini-progress__wrap"],[1,"g2-mini-progress__value",3,"ngStyle"]],template:function(r,e){r&1&&(s(0,"div",0),p(1,"span",1)(2,"span",1),c(),s(3,"div",2),p(4,"div",3),c()),r&2&&(l("nzTooltipTitle",e.i18n.getData("miniProgress").target+e.target+"%")("ngStyle",at(5,ci,e.target)),d(1),l("ngStyle",at(7,jn,e.color)),d(1),l("ngStyle",at(9,jn,e.color)),d(2),l("ngStyle",mn(11,si,e.color,e.percent,e.strokeWidth)))},dependencies:[mt,Ft],encapsulation:2,changeDetection:0});var Pt=fe;v([z()],Pt.prototype,"target",void 0);v([z()],Pt.prototype,"percent",void 0);v([z()],Pt.prototype,"strokeWidth",void 0);var $n=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=A({type:t}),t.\u0275inj=F({imports:[P,un,At]});let o=t;return o})();function mi(o,t){if(o&1&&(q(0),i(1),Z()),o&2){let r=k(2);d(1),L(r.title)}}function pi(o,t){if(o&1&&(s(0,"div",7),M(1,mi,2,1,"ng-container",4),c()),o&2){let r=k();d(1),l("nzStringTemplateOutlet",r.title)}}function hi(o,t){if(o&1&&(q(0),i(1),Z()),o&2){let r=k(2);d(1),L(r.subTitle)}}function ui(o,t){if(o&1&&(s(0,"div",8),M(1,hi,2,1,"ng-container",4),c()),o&2){let r=k();d(1),l("nzStringTemplateOutlet",r.subTitle)}}function fi(o,t){if(o&1&&(q(0),i(1),Z()),o&2){let r=k();d(1),L(r.total)}}function gi(o,t){if(o&1&&(s(0,"em",9),i(1),c()),o&2){let r=k();d(1),L(r.suffix)}}function vi(o,t){if(o&1&&(q(0),i(1),Z()),o&2){let r=k(2);d(1),L(r.subTotal)}}function Ci(o,t){if(o&1&&p(0,"i",11),o&2){let r=k(2);Ge("nzType","caret-",r.status,"")}}function yi(o,t){if(o&1&&(s(0,"span",10),M(1,vi,2,1,"ng-container",4)(2,Ci,1,1,"i",11),c()),o&2){let r=k();d(1),l("nzStringTemplateOutlet",r.subTotal),d(1),I(2,r.status?2:-1)}}var bi=o=>({"margin-top.px":o}),ge=class ge{constructor(){this.theme="light",this.gap=8}};ge.\u0275fac=function(r){return new(r||ge)},ge.\u0275cmp=m({type:ge,selectors:[["number-info"]],hostVars:6,hostBindings:function(r,e){r&2&&y("number-info",!0)("number-info__light",e.theme==="light")("number-info__default",e.theme==="default")},inputs:{title:"title",subTitle:"subTitle",total:"total",subTotal:"subTotal",suffix:"suffix",status:"status",theme:"theme",gap:"gap"},exportAs:["numberInfo"],decls:7,vars:8,consts:[["class","number-info__title"],["class","number-info__title-sub"],[1,"number-info__value",3,"ngStyle"],[1,"number-info__value-text"],[4,"nzStringTemplateOutlet"],["class","number-info__value-suffix"],["class","number-info__value-text number-info__value-sub"],[1,"number-info__title"],[1,"number-info__title-sub"],[1,"number-info__value-suffix"],[1,"number-info__value-text","number-info__value-sub"],["nz-icon","",3,"nzType"]],template:function(r,e){r&1&&(M(0,pi,2,1,"div",0)(1,ui,2,1,"div",1),s(2,"div",2)(3,"span",3),M(4,fi,2,1,"ng-container",4)(5,gi,2,1,"em",5),c(),M(6,yi,3,2,"span",6),c()),r&2&&(I(0,e.title?0:-1),d(1),I(1,e.subTitle?1:-1),d(1),l("ngStyle",at(6,bi,e.gap)),d(2),l("nzStringTemplateOutlet",e.total),d(1),I(5,e.suffix?5:-1),d(1),I(6,e.status||e.subTotal?6:-1))},dependencies:[mt,Et,pt],encapsulation:2,changeDetection:0});var xt=ge;v([z()],xt.prototype,"gap",void 0);var ve=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=A({type:t}),t.\u0275inj=F({imports:[P,Bt,ht]});let o=t;return o})();function xi(o,t){o&1&&p(0,"nz-skeleton")}function Mi(o,t){if(o&1&&(q(0),p(1,"div",9),Z()),o&2){let r=k(3);d(1),l("innerHTML",r.subTitle,re)}}function Di(o,t){if(o&1&&(s(0,"h4",7),M(1,Mi,2,1,"ng-container",8),c()),o&2){let r=k(2);d(1),l("nzStringTemplateOutlet",r.subTitle)}}function zi(o,t){if(o&1&&(q(0),p(1,"div",9),Z()),o&2){let r=k(3);d(1),l("innerHTML",r.total,re)}}function ki(o,t){if(o&1&&(s(0,"div",10),M(1,zi,2,1,"ng-container",8),c()),o&2){let r=k(2);d(1),l("nzStringTemplateOutlet",r.total)}}function Ti(o,t){if(o&1&&(s(0,"div",4),M(1,Di,2,1,"h4",5)(2,ki,2,1,"div",6),c()),o&2){let r=k();d(1),I(1,r.subTitle?1:-1),d(1),I(2,r.total?2:-1)}}var Si=o=>({"background-color":o});function _i(o,t){if(o&1){let r=de();s(0,"li",12),T("click",function(){let a=ie(r).$index,h=k(2);return ae(h._click(a))}),p(1,"span",13),s(2,"span",14),i(3),c(),p(4,"nz-divider",15),s(5,"span",16),i(6),c(),p(7,"span",17),c()}if(o&2){let r=t.$implicit,e=k(2);d(1),l("ngStyle",at(4,Si,r.checked?r.color:"#aaa")),d(2),L(r.x),d(3),Nt("",r.percent,"%"),d(1),l("innerHTML",e.valueFormat?e.valueFormat(r.y):r.y,re)}}function wi(o,t){if(o&1&&(s(0,"ul",11),_t(1,_i,8,6,"li",18,St),c()),o&2){let r=k();wt(1,r.legendData)}}var Qt=class Qt extends nt{constructor(){super(...arguments),this.legendData=[],this.isPercent=!1,this.animate=!0,this.color="rgba(24, 144, 255, 0.85)",this.height=0,this.hasLegend=!1,this.inner=.75,this.padding=[12,0,12,0],this.tooltip=!0,this.lineWidth=0,this.blockMaxWidth=380,this.select=!0,this.data=[],this.interaction="none",this.ratio={text:"\u5360\u6BD4",inverse:"\u53CD\u6BD4",color:"",inverseColor:"#F0F2F5"},this.clickItem=new ot,this.block=!1}fixData(){let{percent:t,color:r}=this;if(this.isPercent=t!=null,!this.isPercent)return;this.select=!1,this.tooltip=!1;let{text:e,inverse:n,color:a,inverseColor:h}=this.ratio;this.percentColor=f=>f===e?a||r:h,this.data=[{x:e,y:t},{x:n,y:100-t}]}updateBlock(){this.block=this._chart&&this.hasLegend&&this.el.nativeElement.clientWidth<=this.blockMaxWidth,this.cdr.detectChanges()}install(){let{node:t,height:r,padding:e,tooltip:n,inner:a,hasLegend:h,interaction:f,theme:D,animate:C,lineWidth:x,isPercent:$,percentColor:j,colors:B}=this,W=this._chart=new this.winG2.Chart({container:t.nativeElement,autoFit:!0,height:r,padding:e,theme:D});W.animate(C),n?W.tooltip({showTitle:!1,showMarkers:!1}):W.tooltip(!1),f!=="none"&&W.interaction(f),W.axis(!1).legend(!1).coordinate("theta",{innerRadius:a}),W.filter("x",(O,_)=>_.checked!==!1),W.interval().adjust("stack").position("y").style({lineWidth:x,stroke:"#fff"}).color("x",$?j:B).tooltip("x*percent",(O,_)=>({name:O,value:`${h?_:(_*100).toFixed(2)} %`})).state({}),W.scale({x:{type:"cat",range:[0,1]}}),W.on("interval:click",O=>{this.ngZone.run(()=>this.clickItem.emit({item:O.data?.data,ev:O}))}).on("afterrender",()=>{this.ngZone.run(()=>this.updateBlock())}),this.ready.next(W),this.changeData(),W.render()}changeData(){let{_chart:t,data:r}=this;if(!t||!Array.isArray(r)||r.length<=0)return;let e=r.reduce((n,a)=>n+a.y,0);for(let n of r)n.percent=e===0?0:n.y/e;t.changeData(r),this.ngZone.run(()=>this.genLegend())}genLegend(){let{hasLegend:t,isPercent:r,cdr:e,_chart:n}=this;!t||r||(this.legendData=n.geometries[0].dataArray.map(a=>{let h=a[0]._origin;return h.color=a[0].color,h.checked=!0,h.percent=(h.percent*100).toFixed(2),h}),e.detectChanges())}_click(t){let{legendData:r,_chart:e}=this;r[t].checked=!r[t].checked,e.render(!0)}onChanges(){this.fixData()}};Qt.\u0275fac=(()=>{let t;return function(e){return(t||(t=Q(Qt)))(e||Qt)}})(),Qt.\u0275cmp=m({type:Qt,selectors:[["g2-pie"]],hostVars:8,hostBindings:function(r,e){r&2&&y("g2-pie",!0)("g2-pie__legend-has",e.hasLegend)("g2-pie__legend-block",e.block)("g2-pie__mini",e.isPercent)},inputs:{animate:"animate",color:"color",subTitle:"subTitle",total:"total",height:"height",hasLegend:"hasLegend",inner:"inner",padding:"padding",percent:"percent",tooltip:"tooltip",lineWidth:"lineWidth",blockMaxWidth:"blockMaxWidth",select:"select",valueFormat:"valueFormat",data:"data",colors:"colors",interaction:"interaction",ratio:"ratio"},outputs:{clickItem:"clickItem"},exportAs:["g2Pie"],features:[J],decls:6,vars:3,consts:[[1,"g2-pie__chart"],["container",""],["class","g2-pie__total"],["class","g2-pie__legend"],[1,"g2-pie__total"],["class","g2-pie__total-title"],["class","g2-pie__total-stat"],[1,"g2-pie__total-title"],[4,"nzStringTemplateOutlet"],[3,"innerHTML"],[1,"g2-pie__total-stat"],[1,"g2-pie__legend"],[1,"g2-pie__legend-item",3,"click"],[1,"g2-pie__legend-dot",3,"ngStyle"],[1,"g2-pie__legend-title"],["nzType","vertical"],[1,"g2-pie__legend-percent"],[1,"g2-pie__legend-value",3,"innerHTML"],["class","g2-pie__legend-item"]],template:function(r,e){r&1&&(M(0,xi,1,0,"nz-skeleton"),s(1,"div",0),p(2,"div",null,1),M(4,Ti,3,2,"div",2),c(),M(5,wi,3,0,"ul",3)),r&2&&(I(0,e.loaded?-1:0),d(4),I(4,e.subTitle||e.total?4:-1),d(1),I(5,e.hasLegend&&e.legendData.length>0?5:-1))},dependencies:[mt,wn,pt,ut],encapsulation:2,changeDetection:0});var rt=Qt;v([H()],rt.prototype,"animate",void 0);v([z()],rt.prototype,"height",void 0);v([H()],rt.prototype,"hasLegend",void 0);v([z()],rt.prototype,"percent",void 0);v([H()],rt.prototype,"tooltip",void 0);v([z()],rt.prototype,"lineWidth",void 0);v([z()],rt.prototype,"blockMaxWidth",void 0);v([H()],rt.prototype,"select",void 0);var Oe=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=A({type:t}),t.\u0275inj=F({imports:[P,Gn,ht,ft]});let o=t;return o})();function Gi(o,t){o&1&&p(0,"nz-skeleton")}function Ni(o,t){if(o&1&&(q(0),s(1,"h4"),i(2),c(),Z()),o&2){let r=k();d(2),L(r.title)}}var Ii=o=>({"background-color":o});function Ei(o,t){if(o&1){let r=de();s(0,"div",4),T("click",function(){let a=ie(r).$index,h=k(2);return ae(h._click(a))}),p(1,"i",5),i(2),s(3,"h6",6),i(4),c()()}if(o&2){let r=t.$implicit,e=k(2);l("nzSpan",24/e.legendData.length),d(1),l("ngStyle",at(4,Ii,r.checked?r.color:"#aaa")),d(1),Nt(" ",r.name," "),d(2),L(r.value)}}function Bi(o,t){if(o&1&&(s(0,"div",3),_t(1,Ei,5,6,"div",7,St),c()),o&2){let r=k();wt(1,r.legendData)}}var Jt=class Jt extends nt{constructor(){super(...arguments),this.legendData=[],this.height=0,this.padding=[44,30,16,30],this.hasLegend=!0,this.tickCount=4,this.data=[],this.colors=["#1890FF","#FACC14","#2FC25B","#8543E0","#F04864","#13C2C2","#fa8c16","#a0d911"],this.clickItem=new ot}getHeight(){return this.height-(this.hasLegend?80:22)}install(){let{node:t,padding:r,theme:e,tickCount:n}=this,a=this._chart=new this.winG2.Chart({container:t.nativeElement,autoFit:!0,height:this.getHeight(),padding:r,theme:e});a.coordinate("polar"),a.legend(!1),a.axis("label",{line:null,label:{offset:8},grid:{line:{style:{stroke:"#e9e9e9",lineWidth:1,lineDash:[0,0]}}}}),a.axis("value",{grid:{line:{type:"polygon",style:{stroke:"#e9e9e9",lineWidth:1,lineDash:[0,0]}}}}),a.scale({value:{min:0,tickCount:n}}),a.filter("name",h=>{let f=this.legendData.find(D=>D.name===h);return f?f.checked!==!1:!0}),a.line().position("label*value").color("name",this.colors),a.point().position("label*value").shape("circle").size(3),a.on("point:click",h=>{this.ngZone.run(()=>this.clickItem.emit({item:h.data?.data,ev:h}))}),this.ready.next(a),this.changeData(),a.render()}changeData(){let{_chart:t,data:r}=this;!t||!Array.isArray(r)||r.length<=0||(t.changeData(r),this.ngZone.run(()=>this.genLegend()))}genLegend(){let{hasLegend:t,cdr:r,_chart:e}=this;t&&(this.legendData=e.geometries[0].dataArray.map(n=>({name:n[0]._origin.name,color:n[0].color,checked:!0,value:n.reduce((f,D)=>f+D._origin.value,0)})),r.detectChanges())}_click(t){let{legendData:r,_chart:e}=this;r[t].checked=!r[t].checked,e.render(!0)}onChanges(){this.legendData.forEach(t=>t.checked=!0)}};Jt.\u0275fac=(()=>{let t;return function(e){return(t||(t=Q(Jt)))(e||Jt)}})(),Jt.\u0275cmp=m({type:Jt,selectors:[["g2-radar"]],hostVars:4,hostBindings:function(r,e){r&2&&(bt("height",e.height,"px"),y("g2-radar",!0))},inputs:{title:"title",height:"height",padding:"padding",hasLegend:"hasLegend",tickCount:"tickCount",data:"data",colors:"colors"},outputs:{clickItem:"clickItem"},exportAs:["g2Radar"],features:[J],decls:5,vars:3,consts:[[4,"nzStringTemplateOutlet"],["container",""],["nz-row","","class","g2-radar__legend"],["nz-row","",1,"g2-radar__legend"],["nz-col","",1,"g2-radar__legend-item",3,"nzSpan","click"],[1,"g2-radar__legend-dot",3,"ngStyle"],[1,"g2-radar__legend-title"],["nz-col","","class","g2-radar__legend-item",3,"nzSpan"]],template:function(r,e){r&1&&(M(0,Gi,1,0,"nz-skeleton")(1,Ni,3,1,"ng-container",0),p(2,"div",null,1),M(4,Bi,3,0,"div",2)),r&2&&(I(0,e.loaded?-1:0),d(1),l("nzStringTemplateOutlet",e.title),d(3),I(4,e.hasLegend?4:-1))},dependencies:[mt,G,w,pt,ut],encapsulation:2,changeDetection:0});var Ot=Jt;v([z()],Ot.prototype,"height",void 0);v([H()],Ot.prototype,"hasLegend",void 0);v([z()],Ot.prototype,"tickCount",void 0);var Hn=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=A({type:t}),t.\u0275inj=F({imports:[P,N,ht,ft]});let o=t;return o})();var Yt=class Yt extends nt{constructor(){super(...arguments),this.plusColor="#40a9ff",this.minusColor="#ff4d4f",this.height=60,this.barSize=30,this.min=0,this.max=100,this.value=0,this.line=!1,this.padding=0,this.textStyle={fontSize:12,color:"#595959"},this.onlyChangeData=t=>Object.keys(t).length===1&&!!t.value}install(){let{el:t,height:r,padding:e,textStyle:n,line:a,format:h,theme:f,min:D,max:C,plusColor:x,minusColor:$,barSize:j}=this,B=this._chart=new this.winG2.Chart({container:t.nativeElement,autoFit:!0,height:r,padding:e,theme:f});B.legend(!1),B.axis(!1),B.scale({value:{max:C,min:D}}),B.tooltip(!1),B.coordinate().transpose(),B.interval().position("1*value").color("value",W=>W>0?x:$).size(j).label("value",()=>({formatter:h,style:kt({},n)})),a&&B.annotation().line({start:["50%","0%"],end:["50%","100%"],style:{stroke:"#e8e8e8",lineDash:[0,0]}}),this.ready.next(B),this.changeData(),B.render()}changeData(){let{_chart:t,value:r}=this;t&&t.changeData([{value:r}])}};Yt.\u0275fac=(()=>{let t;return function(e){return(t||(t=Q(Yt)))(e||Yt)}})(),Yt.\u0275cmp=m({type:Yt,selectors:[["g2-single-bar"]],hostVars:2,hostBindings:function(r,e){r&2&&bt("height",e.height,"px")},inputs:{plusColor:"plusColor",minusColor:"minusColor",height:"height",barSize:"barSize",min:"min",max:"max",value:"value",line:"line",format:"format",padding:"padding",textStyle:"textStyle"},exportAs:["g2SingleBar"],features:[J],decls:0,vars:0,template:function(r,e){},encapsulation:2,changeDetection:0});var Ct=Yt;v([z()],Ct.prototype,"height",void 0);v([z()],Ct.prototype,"barSize",void 0);v([z()],Ct.prototype,"min",void 0);v([z()],Ct.prototype,"max",void 0);v([z()],Ct.prototype,"value",void 0);v([H()],Ct.prototype,"line",void 0);var Ln=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=A({type:t}),t.\u0275inj=F({imports:[P]});let o=t;return o})();function Pi(o,t){o&1&&p(0,"nz-skeleton")}var Kt=class Kt extends nt{constructor(){super(...arguments),this.width=0,this.height=200,this.padding=0,this.data=[],this.clickItem=new ot}initTagCloud(){let t=this.winG2;t.registerShape("point","cloud",{draw(r,e){let n=r.data,a=e.addShape({type:"text",name:"tag-cloud-text",attrs:on(kt({},r.style),{fontSize:n.size,text:n.text,textAlign:"center",fontFamily:n.font,fill:r.color,textBaseline:"Alphabetic",x:r.x,y:r.y})});return n.rotate&&t.Util.rotate(a,n.rotate*Math.PI/180),a}})}install(){this.initTagCloud();let{el:t,padding:r,theme:e}=this;this.height===0&&(this.height=this.el.nativeElement.clientHeight),this.width===0&&(this.width=this.el.nativeElement.clientWidth);let n=this._chart=new this.winG2.Chart({container:t.nativeElement,autoFit:!1,padding:r,height:this.height,width:this.width,theme:e});n.scale({x:{nice:!1},y:{nice:!1}}),n.legend(!1),n.axis(!1),n.tooltip({showTitle:!1,showMarkers:!1}),n.coordinate().reflect(),n.point().position("x*y").color("text").shape("cloud").state({active:{style:{fillOpacity:.4}}}),n.interaction("element-active"),n.on("tag-cloud-text:click",a=>{this.ngZone.run(()=>this.clickItem.emit({item:a.data?.data,ev:a}))}),this.ready.next(n),this.changeData(),n.render()}changeData(){let{_chart:t,data:r}=this;if(!t||!Array.isArray(r)||r.length<=0)return;let e=new window.DataSet.View().source(r),n=e.range("value"),a=n[0],h=n[1];e.transform({type:"tag-cloud",fields:["name","value"],font:"Verdana",size:[this.width,this.height],padding:0,timeInterval:5e3,rotate(){let f=~~(Math.random()*4)%4;return f===2&&(f=0),f*90},fontSize(f){return(f.value-a)/(h-a)*(32-8)+8}}),t.changeData(e.rows)}installResizeEvent(){this.resize$=ee(window,"resize").pipe(an(()=>!!this._chart),ne(200)).subscribe(()=>this.changeData())}onInit(){this.installResizeEvent()}};Kt.\u0275fac=(()=>{let t;return function(e){return(t||(t=Q(Kt)))(e||Kt)}})(),Kt.\u0275cmp=m({type:Kt,selectors:[["g2-tag-cloud"]],inputs:{width:"width",height:"height",padding:"padding",data:"data"},outputs:{clickItem:"clickItem"},exportAs:["g2TagCloud"],features:[J],decls:1,vars:1,template:function(r,e){r&1&&M(0,Pi,1,0,"nz-skeleton"),r&2&&I(0,e.loaded?-1:0)},dependencies:[ut],encapsulation:2,changeDetection:0});var Xt=Kt;v([z()],Xt.prototype,"width",void 0);v([z()],Xt.prototype,"height",void 0);var Vn=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=A({type:t}),t.\u0275inj=F({imports:[P,ft]});let o=t;return o})();function Ri(o,t){if(o&1&&(q(0),s(1,"h4"),i(2),c(),Z()),o&2){let r=k();d(2),L(r.title)}}function ji(o,t){o&1&&p(0,"nz-skeleton")}var te=class te extends nt{constructor(){super(...arguments),this.maxAxis=2,this.data=[],this.colorMap={y1:"#5B8FF9",y2:"#5AD8A6",y3:"#5D7092",y4:"#F6BD16",y5:"#E86452"},this.mask="HH:mm",this.maskSlider="HH:mm",this.position="top",this.height=450,this.padding=[40,8,64,40],this.borderWidth=2,this.slider=!0,this.clickItem=new ot,this.onlyChangeData=t=>{let r=t.titleMap;return!(r&&!r.firstChange&&r.currentValue!==r.previousValue)}}install(){let{node:t,height:r,padding:e,slider:n,maxAxis:a,theme:h,maskSlider:f}=this,D=this._chart=new this.winG2.Chart({container:t.nativeElement,autoFit:!0,height:r,padding:e,theme:h});D.axis("time",{title:null}),D.axis("y1",{title:null});for(let x=2;x<=a;x++)D.axis(`y${x}`,!1);D.line().position("time*y1");for(let x=2;x<=a;x++)D.line().position(`time*y${x}`);D.tooltip({showCrosshairs:!0,shared:!0});let C=kt(kt({},[]),e);C[0]=0,n&&D.option("slider",{height:26,start:0,end:1,trendCfg:{isArea:!1},minLimit:2,formatter:x=>ct(x,f)}),D.on("plot:click",x=>{let $=this._chart.getSnapRecords({x:x.x,y:x.y});this.ngZone.run(()=>this.clickItem.emit({item:$[0]._origin,ev:x}))}),D.on("legend-item:click",x=>{let $=x?.target?.get("delegateObject").item,j=$?.id,B=D.geometries.find(W=>W.getAttribute("position").getFields()[1]===j);B&&B.changeVisible(!$.unchecked)}),this.ready.next(D),this.changeData(),D.render()}changeData(){let{_chart:t,height:r,padding:e,mask:n,titleMap:a,position:h,colorMap:f,borderWidth:D,maxAxis:C}=this,x=[...this.data];if(!t||x.length<=0)return;let $=[...Array(C)].map((_,R)=>R+1);t.legend({position:h,custom:!0,items:$.map(_=>{let R=`y${_}`;return{id:R,name:a[R],value:R,marker:{style:{fill:f[R]}}}})}),t.geometries.forEach((_,R)=>{_.color(f[`y${R+1}`]).size(D)}),t.height=r,t.padding=e,x=x.map(_=>(_.time=fn(_.time),_._time=+_.time,_)).sort((_,R)=>_._time-R._time);let j=Math.max(...$.map(_=>[...x].sort((R,Te)=>Te[`y${_}`]-R[`y${_}`])[0][`y${_}`])),B={};$.forEach(_=>{let R=`y${_}`;B[R]={alias:a[R],max:j,min:0}}),t.scale(kt({time:{type:"time",mask:n,range:[0,1]}},B));let W={start:x[0]._time,end:x[x.length-1]._time},O=x.filter(_=>_._time>=W.start&&_._time<=W.end);t.changeData(O)}};te.\u0275fac=(()=>{let t;return function(e){return(t||(t=Q(te)))(e||te)}})(),te.\u0275cmp=m({type:te,selectors:[["g2-timeline"]],inputs:{title:"title",maxAxis:"maxAxis",data:"data",titleMap:"titleMap",colorMap:"colorMap",mask:"mask",maskSlider:"maskSlider",position:"position",height:"height",padding:"padding",borderWidth:"borderWidth",slider:"slider"},outputs:{clickItem:"clickItem"},exportAs:["g2Timeline"],features:[J],decls:4,vars:2,consts:[[4,"nzStringTemplateOutlet"],["container",""]],template:function(r,e){r&1&&(M(0,Ri,3,1,"ng-container",0)(1,ji,1,0,"nz-skeleton"),p(2,"div",null,1)),r&2&&(l("nzStringTemplateOutlet",e.title),d(1),I(1,e.loaded?-1:1))},dependencies:[pt,ut],encapsulation:2,changeDetection:0});var lt=te;v([z()],lt.prototype,"maxAxis",void 0);v([z()],lt.prototype,"height",void 0);v([z()],lt.prototype,"borderWidth",void 0);v([H()],lt.prototype,"slider",void 0);var Ce=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=A({type:t}),t.\u0275inj=F({imports:[P,ht,ft]});let o=t;return o})();function $i(o,t){if(o&1&&(s(0,"span"),p(1,"i",1),c()),o&2){let r=k();sn("trend__",r.flag,""),d(1),Ge("nzType","caret-",r.flag,"")}}var Wi=["*"],ye=class ye{constructor(){this.colorful=!0,this.reverseColor=!1}};ye.\u0275fac=function(r){return new(r||ye)},ye.\u0275cmp=m({type:ye,selectors:[["trend"]],hostVars:7,hostBindings:function(r,e){r&2&&(b("data-flag",e.flag),y("trend",!0)("trend__grey",!e.colorful)("trend__reverse",e.colorful&&e.reverseColor))},inputs:{flag:"flag",colorful:"colorful",reverseColor:"reverseColor"},exportAs:["trend"],ngContentSelectors:Wi,decls:2,vars:1,consts:[[3,"class"],["nz-icon","",3,"nzType"]],template:function(r,e){r&1&&(ce(),se(0),M(1,$i,2,4,"span",0)),r&2&&(d(1),I(1,e.flag?1:-1))},dependencies:[Et],encapsulation:2,changeDetection:0});var yt=ye;v([H()],yt.prototype,"colorful",void 0);v([H()],yt.prototype,"reverseColor",void 0);var be=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=A({type:t}),t.\u0275inj=F({imports:[P,Bt]});let o=t;return o})();var Li=["container"];function Vi(o,t){if(o&1&&(q(0),i(1),Z()),o&2){let r=k(2);d(1),L(r.title)}}function Ui(o,t){if(o&1&&(s(0,"span",6),M(1,Vi,2,1,"ng-container",7),c()),o&2){let r=k();d(1),l("nzStringTemplateOutlet",r.title)}}var qi=(o,t)=>({"height.px":o,"width.px":t,overflow:"hidden"}),Zi=o=>({"width.px":o}),xe=class xe{constructor(t,r,e,n,a){this.el=t,this.renderer=r,this.ngZone=e,this.cdr=n,this.platform=a,this.resize$=null,this.animate=!0,this.delay=0,this.color="#1890FF",this.height=160}renderChart(t){if(!this.resize$)return;this.updateRadio();let{percent:r,color:e,node:n,animate:a}=this,h=Math.min(Math.max(r/100,0),100),f=this;cancelAnimationFrame(this.timer);let D=n.nativeElement,C=D.getContext("2d"),x=D.width,$=D.height,j=x/2,B=2,W=j-B;C.beginPath(),C.lineWidth=B*2;let O=x-B,_=O/8,R=B,Te=0,Mt=.2,Dt=Mt,Me=0,Je=a?.005:.015,Wt=[],Re=j-B,Ye=-(Math.PI/2),Ke=!0;for(let V=Ye;V<Ye+2*Math.PI;V+=1/(8*Math.PI))Wt.push([j+Re*Math.cos(V),j+Re*Math.sin(V)]);let Se=Wt.shift();C.strokeStyle=e,C.moveTo(Se[0],Se[1]);function Wo(){C.beginPath(),C.save();let V=[];for(let _e=R;_e<=R+O;_e+=20/O){let Ho=Te+(R+_e)/_,Lo=Math.sin(Ho)*Dt,en=_e,nn=2*W*(1-Me)+(j-W)-_*Lo;C.lineTo(en,nn),V.push([en,nn])}let tn=V.shift();C.lineTo(R+O,$),C.lineTo(R,$),C.lineTo(tn[0],tn[1]);let je=C.createLinearGradient(0,0,0,$);je.addColorStop(0,"#ffffff"),je.addColorStop(1,e),C.fillStyle=je,C.fill(),C.restore()}function Xe(){if(C.clearRect(0,0,x,$),Ke&&!t)if(Wt.length)if(a){let V=Wt.shift();C.lineTo(V[0],V[1]),C.stroke()}else{for(let V of Wt)C.lineTo(V[0],V[1]),C.stroke();Wt=[]}else Ke=!1,C.lineTo(Se[0],Se[1]),C.stroke(),Wt=null,C.globalCompositeOperation="destination-over",C.beginPath(),C.lineWidth=B,C.arc(j,j,Re,0,2*Math.PI,!0),C.beginPath(),C.save(),C.arc(j,j,j-3*B,0,2*Math.PI,!0),C.restore(),C.clip(),C.fillStyle=e;else{if(h>=.85){if(Dt>Mt/4){let V=Mt*.01;Dt-=V}}else if(h<=.1){if(Dt<Mt*1.5){let V=Mt*.01;Dt+=V}}else{if(Dt<=Mt){let V=Mt*.01;Dt+=V}if(Dt>=Mt){let V=Mt*.01;Dt-=V}}h-Me>0&&(Me+=Je),h-Me<0&&(Me-=Je),Te+=.07,Wo()}f.timer=requestAnimationFrame(Xe)}Xe()}updateRadio(){let{offsetWidth:t}=this.el.nativeElement.parentNode,r=t<this.height?t/this.height:1;this.renderer.setStyle(this.el.nativeElement,"transform",`scale(${r})`)}render(){this.renderChart(!1)}installResizeEvent(){this.resize$=ee(window,"resize").pipe(ne(200)).subscribe(()=>this.updateRadio())}ngOnInit(){this.platform.isBrowser&&(this.installResizeEvent(),this.ngZone.runOutsideAngular(()=>setTimeout(()=>this.render(),this.delay)))}ngOnChanges(){this.ngZone.runOutsideAngular(()=>this.renderChart(!0)),this.cdr.detectChanges()}ngOnDestroy(){this.timer&&cancelAnimationFrame(this.timer),this.resize$&&this.resize$.unsubscribe()}};xe.\u0275fac=function(r){return new(r||xe)(U(dn),U(cn),U(we),U(Tt),U(Be))},xe.\u0275cmp=m({type:xe,selectors:[["g2-water-wave"]],viewQuery:function(r,e){if(r&1&&Ie(Li,7),r&2){let n;Ne(n=Ee())&&(e.node=n.first)}},hostVars:2,hostBindings:function(r,e){r&2&&y("g2-water-wave",!0)},inputs:{animate:"animate",delay:"delay",title:"title",color:"color",height:"height",percent:"percent"},exportAs:["g2WaterWave"],features:[oe],decls:7,vars:11,consts:[[3,"ngStyle"],[1,"g2-water-wave__canvas",3,"width","height"],["container",""],[1,"g2-water-wave__desc",3,"ngStyle"],["class","g2-water-wave__desc-title"],[1,"g2-water-wave__desc-percent"],[1,"g2-water-wave__desc-title"],[4,"nzStringTemplateOutlet"]],template:function(r,e){r&1&&(s(0,"div",0),p(1,"canvas",1,2),c(),s(3,"div",3),M(4,Ui,2,1,"span",4),s(5,"h4",5),i(6),c()()),r&2&&(l("ngStyle",ln(6,qi,e.height,e.height)),d(1),$e("width",e.height*2),$e("height",e.height*2),d(2),l("ngStyle",at(9,Zi,e.height)),d(1),I(4,e.title?4:-1),d(2),Nt("",e.percent,"%"))},dependencies:[mt,pt],encapsulation:2,changeDetection:0});var zt=xe;v([H()],zt.prototype,"animate",void 0);v([z()],zt.prototype,"delay",void 0);v([z()],zt.prototype,"height",void 0);v([z()],zt.prototype,"percent",void 0);var Un=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=A({type:t}),t.\u0275inj=F({imports:[P,ht]});let o=t;return o})();var qn=(()=>{let t=class t{constructor(){this.item={cols:1,urls:{"en-US":"packages/chart/docs/faq.en-US.md","zh-CN":"packages/chart/docs/faq.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><h2 id="Howtoauto-resizeofthecontainer"><a class="lake-link"><i data-anchor="Howtoauto-resizeofthecontainer"></i></a>How to auto-resize of the container?</h2><p>The G2 uses <code>window.addEventListener('resize', this.onResize)</code> to detect a change in parent dom element's size. So you need to manually monitor the change in the size of the container and call <code>chart.forceFit()</code> to force resize.</p></section><example-resizable-index></example-resizable-index><section class="markdown"></section>`,meta:{order:100,title:"FAQ",type:"Documents"},toc:[{id:"Howtoauto-resizeofthecontainer",title:"How to auto-resize of the container?",h:2}]},"zh-CN":{content:'<section class="markdown"><h2 id="\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F"><a class="lake-link"><i data-anchor="\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F"></i></a>\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F</h2><p>G2 \u5F53\u524D\u7248\u672C\u5E76\u4E0D\u4F1A\u6839\u636E\u5BB9\u5668\u5BBD\u9AD8\u81EA\u9002\u5E94\uFF0C\u76EE\u524D\u53EA\u4F1A\u6839\u636E\u6D4F\u89C8\u5668\u7A97\u4F53\u5927\u5C0F\u624D\u4F1A\u91CD\u65B0\u53D8\u66F4\u56FE\u8868\u5C3A\u5BF8\uFF0C\u56E0\u6B64\u9700\u8981\u624B\u52A8\u76D1\u542C\u5BB9\u5668\u5927\u5C0F\u7684\u53D8\u5316\u5E76\u8C03\u7528 <code>chart.forceFit()</code> \u91CD\u65B0\u6E32\u67D3\u56FE\u8868\u5C3A\u5BF8\u3002</p></section><example-resizable-index></example-resizable-index><section class="markdown"></section>',meta:{order:100,title:"\u5E38\u89C1\u95EE\u9898",type:"Documents"},toc:[{id:"\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F",title:"\u5982\u4F55\u81EA\u9002\u5E94\u5BB9\u5668\u5BBD\u9AD8\uFF1F",h:2}]}},demo:!1},this.codes=[]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["app-chart-faq"]],hostVars:2,hostBindings:function(n,a){n&2&&y("d-block","true")},standalone:!0,features:[u],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(n,a){n&1&&p(0,"app-docs",0),n&2&&l("codes",a.codes)("item",a.item)},dependencies:[S],encapsulation:2});let o=t;return o})();var Zn=(()=>{let t=class t{constructor(){this.item={cols:1,urls:{"en-US":"packages/chart/docs/getting-started.en-US.md","zh-CN":"packages/chart/docs/getting-started.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>Chart provides the well-designed abstract chart components based on the <a target="_blank" href="https://antv.alipay.com/zh-cn/g2/3.x/index.html" data-url="https://antv.alipay.com/zh-cn/g2/3.x/index.html">G2</a>. These components provide the ability to use with complex mixed view or just use along for common business usage.</p><h2 id="Usage"><a class="lake-link"><i data-anchor="Usage"></i></a>Usage</h2><h3 id="G2classlibraryloading"><a class="lake-link"><i data-anchor="G2classlibraryloading"></i></a>G2 class library loading</h3><p>By default, the class library CDN address has been specified in <a href="/docs/global-config" data-url="/docs/global-config">Global Configuration</a>:</p><pre class="hljs language-ts"><code>// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { 
    // The following is the default configuration. If the project cannot be accessed from the Internet, you can directly use the \`./assets***\` path for the dependent package according to the \`angular.json\` configuration
    libs: [
      'https://gw.alipayobjects.com/os/lib/antv/g2/4.1.4/dist/g2.min.js',
      'https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.7/dist/data-set.js',
    ],
  },
};

export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        provideAlainConfig(alainConfig)
      ]
    };
  }
}</code></pre><p>Of course, you can also directly import the CDN address in <code>index.html</code>, for example:</p><pre class="hljs language-html"><code>&lt;!-- Introduce online resources, select the g2 version you need and replace the version variable --&gt;
&lt;script src="https://gw.alipayobjects.com/os/lib/antv/g2/{{version}}/dist/g2.min.js"&gt;&lt;/script&gt;</code></pre><p>You can also configure the <code>assets</code> (About <a target="_blank" href="https://angular.io/guide/workspace-config#assets-configuration" data-url="https://angular.io/guide/workspace-config#assets-configuration">assets</a> Document) option in <code>angular.json</code> to obtain the G2 library from <code>node_modules</code>, for example:</p><pre class="hljs language-json"><code>"assets": [
  {
    "glob": "**/*",
    "input": "./node_modules/@antv/g2/dist",
    "output": "/@antv/g2/"
  },
  {
    "glob": "**/*",
    "input": "./node_modules/@antv/data-set/dist",
    "output": "/@antv/data-set/"
  }
]</code></pre><p>Finally modify the <code>libs</code> parameter of the global configuration:</p><pre class="hljs language-ts"><code>// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { 
    libs: [
      './assets/@antv/g2/g2.min.js',
      './assets/@antv/data-set/data-set.js',
    ],
  },
};</code></pre><h3 id="Importmodule"><a class="lake-link"><i data-anchor="Importmodule"></i></a>Import module</h3><pre class="hljs language-ts"><code>// shared.module.ts
import { G2BarModule } from '@delon/chart/bar';

@NgModule({
  imports: [ G2BarModule ],
  exports: [ G2BarModule ]
})</code></pre><h2 id="CustomG2components"><a class="lake-link"><i data-anchor="CustomG2components"></i></a>Custom G2 components</h2><p>Use the <a href="/chart/custom" data-url="/chart/custom">g2-chart</a> component to better implement custom charts.</p><h2 id="Configurecharttheme"><a class="lake-link"><i data-anchor="Configurecharttheme"></i></a>Configure chart theme</h2><p>Configure the chart theme for all G2, but only provide interfaces. For the configuration chart theme parameters, please refer to <a target="_blank" href="https://g2.antv.vision/zh/docs/manual/tutorial/theme" data-url="https://g2.antv.vision/zh/docs/manual/tutorial/theme">G2 website</a>.</p><pre class="hljs language-ts"><code>// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { theme: 'dark' },
};

export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        provideAlainConfig(alainConfig)
      ]
    };
  }
}</code></pre></section>`,meta:{order:1,title:"Getting Started",type:"Documents"},toc:[{id:"Usage",title:"Usage",h:2,children:[{id:"G2classlibraryloading",title:"G2 class library loading",h:3},{id:"Importmodule",title:"Import module",h:3}]},{id:"CustomG2components",title:"Custom G2 components",h:2},{id:"Configurecharttheme",title:"Configure chart theme",h:2}]},"zh-CN":{content:`<section class="markdown"><p>\u56FE\u8868\u662F\u57FA\u4E8E <a target="_blank" href="https://antv.alipay.com/zh-cn/g2/3.x/index.html" data-url="https://antv.alipay.com/zh-cn/g2/3.x/index.html">G2</a> (3.0) \u7684\u57FA\u7840\u4E0A\u4E8C\u6B21\u5C01\u88C5\uFF0C\u63D0\u4F9B\u4E86\u4E1A\u52A1\u4E2D\u5E38\u7528\u7684\u56FE\u8868\u5957\u4EF6\uFF0C\u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u7EC4\u5408\u8D77\u6765\u5B9E\u73B0\u590D\u6742\u7684\u5C55\u793A\u6548\u679C\u3002</p><blockquote><p>\u56FE\u8868\u7684\u4F5C\u7528\uFF0C\u662F\u5E2E\u52A9\u6211\u4EEC\u66F4\u597D\u5730\u770B\u61C2\u6570\u636E\u3002\u9009\u62E9\u4EC0\u4E48\u56FE\u8868\uFF0C\u9700\u8981\u56DE\u7B54\u7684\u9996\u8981\u95EE\u9898\u662F\u300E\u6211\u6709\u4EC0\u4E48\u6570\u636E\uFF0C\u9700\u8981\u7528\u56FE\u8868\u505A\u4EC0\u4E48\u300F\uFF0C\u800C\u4E0D\u662F \u300E\u56FE\u8868\u957F\u6210\u4EC0\u4E48\u6837\u300F \u3002</p></blockquote><table><thead><tr><th>\u5206\u7C7B\u540D</th><th>\u7EC4\u4EF6\u6E05\u5355</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>\u6BD4\u8F83\u7C7B</td><td>\u8FF7\u4F60\u67F1\u72B6\u56FE\uFF1A<code>g2-mini-bar</code><br>\u5355\u4E00\u67F1\u72B6\u56FE\uFF1A<code>g2-single-bar</code><br>\u67F1\u72B6\u56FE\uFF1A<code>g2-bar</code><br>\u96F7\u8FBE\u56FE\uFF1A<code>g2-radar</code><br>\u8FF7\u4F60\u533A\u57DF\u56FE\uFF1A<code>g2-mini-area</code><br>\u8FF7\u4F60\u8FDB\u5EA6\u6761\uFF1A<code>g2-mini-progress</code></td><td>-</td></tr><tr><td>\u5206\u5E03\u7C7B</td><td>\u6298\u7EBF\u56FE\uFF1A<code>g2-timeline</code></td><td>-</td></tr><tr><td>\u5360\u6BD4\u7C7B</td><td>\u997C\u56FE\uFF1A<code>g2-pie</code><br>\u6C34\u6CE2\u56FE\uFF1A<code>g2-water-wave</code><br>\u8FF7\u4F60\u8FDB\u5EA6\u6761\uFF1A<code>g2-mini-progress</code><br>\u8FF7\u4F60\u533A\u57DF\u56FE\uFF1A<code>g2-mini-area</code></td><td>-</td></tr><tr><td>\u533A\u95F4\u7C7B</td><td>\u4EEA\u8868\u76D8\uFF1A<code>g2-gauge</code><br>\u8FF7\u4F60\u533A\u57DF\u56FE\uFF1A<code>g2-mini-area</code></td><td>-</td></tr><tr><td>\u8D8B\u52BF\u7C7B</td><td>\u6298\u7EBF\u56FE\uFF1A<code>g2-timeline</code><br>\u8FF7\u4F60\u533A\u57DF\u56FE\uFF1A<code>g2-mini-area</code></td><td>-</td></tr><tr><td>\u65F6\u95F4\u7C7B</td><td>\u6298\u7EBF\u56FE\uFF1A<code>g2-timeline</code><br>\u8FF7\u4F60\u533A\u57DF\u56FE\uFF1A<code>g2-mini-area</code></td><td>-</td></tr><tr><td>\u5176\u5B83</td><td>\u6807\u7B7E\u4E91\uFF1A<code>g2-tag-cloud</code><br>\u56FE\u8868\u5361\u7247\uFF1A<code>g2-chart-card</code><br>\u81EA\u5B9A\u4E49\u56FE\u8868\uFF1A<code>g2-chart</code></td><td>-</td></tr></tbody></table><h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><h3 id="G2\u7C7B\u5E93\u52A0\u8F7D"><a class="lake-link"><i data-anchor="G2\u7C7B\u5E93\u52A0\u8F7D"></i></a>G2\u7C7B\u5E93\u52A0\u8F7D</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5728<a href="/docs/global-config" data-url="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u5DF2\u7ECF\u6307\u5B9A\u7C7B\u5E93 CDN \u5730\u5740\uFF1A</p><pre class="hljs language-ts"><code>// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { 
    // \u4EE5\u4E0B\u662F\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5982\u679C\u9879\u76EE\u65E0\u6CD5\u5916\u7F51\u8BBF\u95EE\uFF0C\u53EF\u4EE5\u6839\u636E \`angular.json\` \u914D\u7F6E\u5C06\u4F9D\u8D56\u5305\u76F4\u63A5\u4F7F\u7528 \`./assets***\` \u8DEF\u5F84
    libs: [
      'https://gw.alipayobjects.com/os/lib/antv/g2/4.1.4/dist/g2.min.js',
      'https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.7/dist/data-set.js',
    ],
  },
};

export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        provideAlainConfig(alainConfig)
      ]
    };
  }
}</code></pre><p>\u5F53\u7136\u4E5F\u53EF\u4EE5\u5728 <code>index.html</code> \u76F4\u63A5\u5F15\u5165 CDN \u5730\u5740\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-html"><code>&lt;!-- \u5F15\u5165\u5728\u7EBF\u8D44\u6E90\uFF0C\u9009\u62E9\u4F60\u9700\u8981\u7684 g2 \u7248\u672C\u4EE5\u66FF\u6362 version \u53D8\u91CF --&gt;
&lt;script src="https://gw.alipayobjects.com/os/lib/antv/g2/{{version}}/dist/g2.min.js"&gt;&lt;/script&gt;</code></pre><p>\u4E5F\u53EF\u4EE5\u5728 <code>angular.json</code> \u914D\u7F6E <code>assets</code> \u9009\u9879\uFF08\u6709\u5173 <a target="_blank" href="https://angular.cn/guide/workspace-config#assets-configuration" data-url="https://angular.cn/guide/workspace-config#assets-configuration">assets</a> \u6587\u6863\uFF09\uFF0C\u4ECE <code>node_modules</code> \u6765\u83B7\u5F97G2\u7C7B\u5E93\uFF0C\u4F8B\u5982\uFF1A</p><pre class="hljs language-json"><code>"assets": [
  {
    "glob": "**/*",
    "input": "./node_modules/@antv/g2/dist",
    "output": "/@antv/g2/"
  },
  {
    "glob": "**/*",
    "input": "./node_modules/@antv/data-set/dist",
    "output": "/@antv/data-set/"
  }
]</code></pre><p>\u6700\u540E\u4FEE\u6539\u5168\u5C40\u914D\u7F6E\u7684 <code>libs</code> \u53C2\u6570\u4E3A\uFF1A</p><pre class="hljs language-ts"><code>// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { 
    libs: [
      './assets/@antv/g2/g2.min.js',
      './assets/@antv/data-set/data-set.js',
    ],
  },
};</code></pre><h3 id="\u5BFC\u5165\u6A21\u5757"><a class="lake-link"><i data-anchor="\u5BFC\u5165\u6A21\u5757"></i></a>\u5BFC\u5165\u6A21\u5757</h3><pre class="hljs language-ts"><code>// shared.module.ts
import { G2BarModule } from '@delon/chart/bar';

@NgModule({
  imports: [ G2BarModule ],
  exports: [ G2BarModule ]
})</code></pre><h2 id="\u81EA\u5B9A\u4E49G2\u7EC4\u4EF6"><a class="lake-link"><i data-anchor="\u81EA\u5B9A\u4E49G2\u7EC4\u4EF6"></i></a>\u81EA\u5B9A\u4E49 G2 \u7EC4\u4EF6</h2><p>\u4F7F\u7528 <a href="/chart/custom" data-url="/chart/custom">g2-chart</a> \u7EC4\u4EF6\u5FEB\u901F\u81EA\u5B9A\u4E49\u4E00\u4E2A\u56FE\u8868\uFF0C\u53EF\u4EE5\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u7EC4\u4EF6\u6E32\u67D3\u8FC7\u7A0B\u4E2D\u6240\u4EA7\u751F\u7684\u5947\u602A\u95EE\u9898\u3002</p><h2 id="\u914D\u7F6E\u56FE\u8868\u4E3B\u9898"><a class="lake-link"><i data-anchor="\u914D\u7F6E\u56FE\u8868\u4E3B\u9898"></i></a>\u914D\u7F6E\u56FE\u8868\u4E3B\u9898</h2><p>\u5BF9\u6240\u6709 G2 \u8FDB\u884C\u914D\u7F6E\u56FE\u8868\u4E3B\u9898\uFF0C\u4F46\u53EA\u63D0\u4F9B\u63A5\u53E3\uFF0C\u6709\u5173\u914D\u7F6E\u56FE\u8868\u4E3B\u9898\u53C2\u6570\uFF0C\u8BF7\u53C2\u8003<a target="_blank" href="https://g2.antv.vision/zh/docs/manual/tutorial/theme" data-url="https://g2.antv.vision/zh/docs/manual/tutorial/theme">G2\u5B98\u7F51</a>\u3002</p><pre class="hljs language-ts"><code>// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { theme: 'dark' },
};

export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        provideAlainConfig(alainConfig)
      ]
    };
  }
}</code></pre></section>`,meta:{order:1,title:"\u5F00\u59CB\u4F7F\u7528",type:"Documents"},toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",h:2,children:[{id:"G2\u7C7B\u5E93\u52A0\u8F7D",title:"G2\u7C7B\u5E93\u52A0\u8F7D",h:3},{id:"\u5BFC\u5165\u6A21\u5757",title:"\u5BFC\u5165\u6A21\u5757",h:3}]},{id:"\u81EA\u5B9A\u4E49G2\u7EC4\u4EF6",title:"\u81EA\u5B9A\u4E49 G2 \u7EC4\u4EF6",h:2},{id:"\u914D\u7F6E\u56FE\u8868\u4E3B\u9898",title:"\u914D\u7F6E\u56FE\u8868\u4E3B\u9898",h:2}]}},demo:!1},this.codes=[]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["app-chart-getting-started"]],hostVars:2,hostBindings:function(n,a){n&2&&y("d-block","true")},standalone:!0,features:[u],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(n,a){n&1&&p(0,"app-docs",0),n&2&&l("codes",a.codes)("item",a.item)},dependencies:[S],encapsulation:2});let o=t;return o})();var Qn=(()=>{let t=class t{constructor(){this.msg=dt(et),this.salesData=this.genData()}genData(){return new Array(12).fill({}).map((e,n)=>({x:`${n+1}\u6708`,y:Math.floor(Math.random()*1e3)+200,color:n>5?"#f50":void 0}))}refresh(){this.salesData=this.genData()}handleClick(e){this.msg.info(`${e.item.x} - ${e.item.y}`)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-bar-basic"]],standalone:!0,features:[u],decls:6,vars:2,consts:[["nz-button","","nzType","primary",3,"click"],["height","200",3,"title","data","clickItem"]],template:function(n,a){n&1&&(i(0,`
    `),s(1,"button",0),T("click",function(){return a.refresh()}),i(2,"Refresh"),c(),i(3,`
    `),s(4,"g2-bar",1),T("clickItem",function(f){return a.handleClick(f)}),c(),i(5,`
  `)),n&2&&(d(4),l("title","\u9500\u552E\u989D\u8D8B\u52BF")("data",a.salesData))},dependencies:[tt,X,Y,K,Pn,An],encapsulation:2});let o=t;return o})();var Jn=(()=>{let t=class t{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/bar/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u4F7F\u7528\u5782\u76F4\u7684\u67F1\u5B50\u663E\u793A\u7C7B\u522B\u4E4B\u95F4\u7684\u6570\u503C\u6BD4\u8F83\u3002\u5176\u4E2D\u4E00\u4E2A\u8F74\u8868\u793A\u9700\u8981\u5BF9\u6BD4\u7684\u5206\u7C7B\u7EF4\u5EA6\uFF0C\u53E6\u4E00\u4E2A\u8F74\u4EE3\u8868\u76F8\u5E94\u7684\u6570\u503C\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-bar"><a class="lake-link"><i data-anchor="g2-bar"></i></a>g2-bar</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[title]</code></td><td>\u56FE\u8868\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>rgba(24, 144, 255, 0.85)</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>Array&lt;number | string> | string</code></td><td><code>[32, 0, 32, 40]</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2BarData[]</code></td><td><code>[]</code></td></tr><tr><td><code>[autoLabel]</code></td><td>\u5728\u5BBD\u5EA6\u4E0D\u8DB3\u65F6\uFF0C\u81EA\u52A8\u9690\u85CF x \u8F74\u7684 label</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[interaction]</code></td><td>\u4EA4\u4E92\u7C7B\u578B\uFF0Cnone \u65E0 element-active \u56FE\u5F62\u5143\u7D20\uFF0Cactive-region \u56FE\u8868\u7EC4\u4EF6\uFF0Cbrush \u6846\u9009\uFF0Cdrag-move \u79FB\u52A8</td><td><code>InteractionType</code></td><td><code>none</code></td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2BarClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2BarData"><a class="lake-link"><i data-anchor="G2BarData"></i></a>G2BarData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[x]</code></td><td>x\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[y]</code></td><td>y\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>\u8F74\u989C\u8272</td><td><code>string</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-bar",subtitle:"\u67F1\u72B6\u56FE",cols:1,type:"G2",module:"import { G2BarModule } from '@delon/chart/bar';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-bar",title:"g2-bar",h:3},{id:"G2BarData",title:"G2BarData",h:3}]}]}},demo:!0},this.codes=[{id:"chart-bar-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"}},summary:"<p>\u901A\u8FC7\u8BBE\u7F6E <code>x</code>\uFF0C<code>y</code> \u5C5E\u6027\uFF0C\u53EF\u4EE5\u5FEB\u901F\u7684\u6784\u5EFA\u51FA\u4E00\u4E2A\u6F02\u4EAE\u7684\u67F1\u72B6\u56FE\uFF0C\u5404\u79CD\u7EAC\u5EA6\u7684\u5173\u7CFB\u5219\u662F\u901A\u8FC7\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u5C55\u73B0\u3002</p>",code:`import { Component, inject } from '@angular/core';

import { G2BarClickItem, G2BarData, G2BarModule } from '@delon/chart/bar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-bar-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-bar height="200" [title]="'\u9500\u552E\u989D\u8D8B\u52BF'" [data]="salesData" (clickItem)="handleClick($event)" />
  \`,
  standalone: true,
  imports: [NzButtonModule, G2BarModule]
})
export class ChartBarBasicComponent {
  private readonly msg = inject(NzMessageService);

  salesData = this.genData();

  private genData(): G2BarData[] {
    return new Array(12).fill({}).map((_i, idx) => ({
      x: \`\${idx + 1}\u6708\`,
      y: Math.floor(Math.random() * 1000) + 200,
      color: idx > 5 ? '#f50' : undefined
    }));
  }

  refresh(): void {
    this.salesData = this.genData();
  }

  handleClick(data: G2BarClickItem): void {
    this.msg.info(\`\${data.item.x} - \${data.item.y}\`);
  }
}`,lang:"ts",componentName:"ChartBarBasicComponent",point:0,name:"basic",urls:"packages/chart/bar/demo/basic.md",type:"demo"}]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["app-chart-bar"]],hostVars:2,hostBindings:function(n,a){n&2&&y("d-block","true")},standalone:!0,features:[u],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,a){n&1&&(s(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),s(4,"code-box",3),i(5,`
          `),p(6,"chart-bar-basic"),i(7,`
        `),c(),i(8,`
      `),c()()()),n&2&&(l("codes",a.codes)("item",a.item),d(1),l("nzGutter",16),d(3),l("item",a.codes[0]),b("id",a.codes[0].id))},dependencies:[S,E,Qn,N,G,w],encapsulation:2});let o=t;return o})();function Ji(o,t){o&1&&(i(0,`
        `),p(1,"i",4),i(2,`
      `))}var Yn=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-card-style1"]],standalone:!0,features:[u],decls:13,vars:4,consts:[["footer","\u65E5\u8BBF\u95EE\u91CF 12,423","contentHeight","46",3,"title","bordered","total","action"],["action",""],["flag","up",2,"margin","0 16px 0 8px","color","rgba(0,0,0,.85)"],["flag","down",2,"margin","0 0 0 8px","color","rgba(0,0,0,.85)"],["nz-tooltip","","nzTooltipTitle","\u6307\u6807\u8BF4\u660E","nz-icon","","nzType","info-circle"]],template:function(n,a){if(n&1&&(i(0,`
    `),s(1,"g2-card",0),i(2,`
      `),M(3,Ji,3,0,"ng-template",null,1,It),i(5,`
      \u5468\u540C\u6BD4
      `),s(6,"trend",2),i(7,"12%"),c(),i(8,`
      \u65E5\u73AF\u6BD4
      `),s(9,"trend",3),i(10,"11%"),c(),i(11,`
    `),c(),i(12,`
  `)),n&2){let h=Gt(4);d(1),l("title","\u9500\u552E\u989D")("bordered",!0)("total","\xA5 126,560.00")("action",h)}},dependencies:[pe,gt,At,Ft,be,yt],encapsulation:2});let o=t;return o})();function Yi(o,t){o&1&&p(0,"img",3)}function Ki(o,t){o&1&&(i(0,`
        `),p(1,"i",4),i(2,`
      `))}var Kn=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-card-style2"]],standalone:!0,features:[u],decls:10,vars:5,consts:[["footer","\u65E5\u8BBF\u95EE\u91CF 12,423",3,"title","bordered","total","avatar","action"],["avatar",""],["action",""],["src","./assets/img/logo-color.svg",2,"width","56px","height","56px"],["nz-tooltip","","nzTooltipTitle","\u6307\u6807\u8BF4\u660E","nz-icon","","nzType","info-circle"]],template:function(n,a){if(n&1&&(i(0,`
    `),s(1,"g2-card",0),i(2,`
      `),M(3,Yi,1,0,"ng-template",null,1,It),i(5,`
      `),M(6,Ki,3,0,"ng-template",null,2,It),i(8,`
    `),c(),i(9,`
  `)),n&2){let h=Gt(4),f=Gt(7);d(1),l("title","\u79FB\u52A8\u6307\u6807")("bordered",!0)("total","\xA5 126,560.00")("avatar",h)("action",f)}},dependencies:[pe,gt,At,Ft,Bt,Et],encapsulation:2});let o=t;return o})();function Xi(o,t){o&1&&p(0,"img",3)}function ta(o,t){o&1&&(i(0,`
        `),p(1,"i",4),i(2,`
      `))}var Xn=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-card-style3"]],standalone:!0,features:[u],decls:10,vars:5,consts:[[3,"title","bordered","total","avatar","action"],["avatar",""],["action",""],["src","./assets/img/logo-color.svg",2,"width","56px","height","56px"],["nz-tooltip","","nzTooltipTitle","\u6307\u6807\u8BF4\u660E","nz-icon","","nzType","info-circle"]],template:function(n,a){if(n&1&&(i(0,`
    `),s(1,"g2-card",0),i(2,`
      `),M(3,Xi,1,0,"ng-template",null,1,It),i(5,`
      `),M(6,ta,3,0,"ng-template",null,2,It),i(8,`
    `),c(),i(9,`
  `)),n&2){let h=Gt(4),f=Gt(7);d(1),l("title","\u79FB\u52A8\u6307\u6807")("bordered",!0)("total","\xA5 126,560.00")("avatar",h)("action",f)}},dependencies:[pe,gt,At,Ft,Bt,Et],encapsulation:2});let o=t;return o})();var to=(()=>{let t=class t{constructor(){this.item={cols:2,urls:{"zh-CN":"packages/chart/card/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u56FE\u8868\u5361\u7247\uFF0C\u7528\u4E8E\u5C55\u793A\u56FE\u8868\u7684\u5361\u7247\u5BB9\u5668\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u914D\u5408\u5176\u5B83\u56FE\u8868\u5957\u4EF6\u5C55\u793A\u4E30\u5BCC\u4FE1\u606F\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-card"><a class="lake-link"><i data-anchor="g2-card"></i></a>g2-card</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>\u5361\u7247\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[avatar]</code></td><td>\u5934\u50CF</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[action]</code></td><td>\u5361\u7247\u64CD\u4F5C</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[total]</code></td><td>\u6570\u636E\u603B\u91CF\uFF08\u652F\u6301HTML\uFF09</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[footer]</code></td><td>\u5361\u7247\u5E95\u90E8</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[contentHeight]</code></td><td>\u5185\u5BB9\u533A\u57DF\u9AD8\u5EA6\uFF08\u5355\u4F4D\uFF1A<code>px</code>\uFF09</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[bordered]</code></td><td>\u662F\u5426\u663E\u793A\u8FB9\u6846</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',meta:{title:"g2-card",subtitle:"\u56FE\u8868\u5361\u7247",cols:2,type:"G2",module:"import { G2CardModule } from '@delon/chart/card';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-card",title:"g2-card",h:3}]}]}},demo:!0},this.codes=[{id:"chart-card-style1",meta:{order:0,title:{"zh-CN":"\u98CE\u683C\u4E00","en-US":"Style 1"}},summary:"<p>\u98CE\u683C\u4E00\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

import { G2CardModule } from '@delon/chart/card';
import { TrendModule } from '@delon/chart/trend';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'chart-card-style1',
  template: \`
    <g2-card
      [title]="'\u9500\u552E\u989D'"
      [bordered]="true"
      [total]="'\xA5 126,560.00'"
      footer="\u65E5\u8BBF\u95EE\u91CF 12,423"
      contentHeight="46"
      [action]="action"
    >
      <ng-template #action>
        <i nz-tooltip nzTooltipTitle="\u6307\u6807\u8BF4\u660E" nz-icon nzType="info-circle"></i>
      </ng-template>
      \u5468\u540C\u6BD4
      <trend flag="up" style="margin: 0 16px 0 8px; color: rgba(0,0,0,.85)">12%</trend>
      \u65E5\u73AF\u6BD4
      <trend flag="down" style="margin: 0 0 0 8px; color: rgba(0,0,0,.85)">11%</trend>
    </g2-card>
  \`,
  standalone: true,
  imports: [G2CardModule, NzToolTipModule, TrendModule]
})
export class ChartCardStyle1Component {}`,lang:"ts",componentName:"ChartCardStyle1Component",point:0,name:"style1",urls:"packages/chart/card/demo/style1.md",type:"demo"},{id:"chart-card-style2",meta:{order:0,title:{"zh-CN":"\u98CE\u683C\u4E8C","en-US":"Style 2"}},summary:"<p>\u98CE\u683C\u4E8C\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

import { G2CardModule } from '@delon/chart/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'chart-card-style2',
  template: \`
    <g2-card
      [title]="'\u79FB\u52A8\u6307\u6807'"
      [bordered]="true"
      [total]="'\xA5 126,560.00'"
      footer="\u65E5\u8BBF\u95EE\u91CF 12,423"
      [avatar]="avatar"
      [action]="action"
    >
      <ng-template #avatar><img style="width:56px; height: 56px" src="./assets/img/logo-color.svg" /></ng-template>
      <ng-template #action>
        <i nz-tooltip nzTooltipTitle="\u6307\u6807\u8BF4\u660E" nz-icon nzType="info-circle"></i>
      </ng-template>
    </g2-card>
  \`,
  standalone: true,
  imports: [G2CardModule, NzToolTipModule, NzIconModule]
})
export class ChartCardStyle2Component {}`,lang:"ts",componentName:"ChartCardStyle2Component",point:1,name:"style2",urls:"packages/chart/card/demo/style2.md",type:"demo"},{id:"chart-card-style3",meta:{order:0,title:{"zh-CN":"\u98CE\u683C\u4E09","en-US":"Style 3"}},summary:"<p>\u98CE\u683C\u4E09\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

import { G2CardModule } from '@delon/chart/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'chart-card-style3',
  template: \`
    <g2-card [title]="'\u79FB\u52A8\u6307\u6807'" [bordered]="true" [total]="'\xA5 126,560.00'" [avatar]="avatar" [action]="action">
      <ng-template #avatar><img style="width:56px; height: 56px" src="./assets/img/logo-color.svg" /></ng-template>
      <ng-template #action>
        <i nz-tooltip nzTooltipTitle="\u6307\u6807\u8BF4\u660E" nz-icon nzType="info-circle"></i>
      </ng-template>
    </g2-card>
  \`,
  standalone: true,
  imports: [G2CardModule, NzToolTipModule, NzIconModule]
})
export class ChartCardStyle3Component {}`,lang:"ts",componentName:"ChartCardStyle3Component",point:2,name:"style3",urls:"packages/chart/card/demo/style3.md",type:"demo"}]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["app-chart-card"]],hostVars:2,hostBindings:function(n,a){n&2&&y("d-block","true")},standalone:!0,features:[u],decls:21,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(n,a){n&1&&(s(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),s(4,"code-box",3),i(5,`
          `),p(6,"chart-card-style1"),i(7,`
        `),c(),i(8,`
      
        `),s(9,"code-box",3),i(10,`
          `),p(11,"chart-card-style3"),i(12,`
        `),c(),i(13,`
      `),c(),s(14,"div",2),i(15,`
        `),s(16,"code-box",3),i(17,`
          `),p(18,"chart-card-style2"),i(19,`
        `),c(),i(20,`
      `),c()()()),n&2&&(l("codes",a.codes)("item",a.item),d(1),l("nzGutter",16),d(3),l("item",a.codes[0]),b("id",a.codes[0].id),d(5),l("item",a.codes[2]),b("id",a.codes[2].id),d(7),l("item",a.codes[1]),b("id",a.codes[1].id))},dependencies:[S,E,Yn,Kn,Xn,N,G,w],encapsulation:2});let o=t;return o})();var eo=(()=>{let t=class t{constructor(){this.dark=!1,this.two=!1,this.option1={tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[{name:"Pressure",type:"gauge",detail:{formatter:"{value}"},data:[{value:50,name:"SCORE"}]}]},this.option2={title:{text:"ECharts \u5165\u95E8\u793A\u4F8B"},tooltip:{},legend:{data:["\u9500\u91CF"]},xAxis:{data:["\u886C\u886B","\u7F8A\u6BDB\u886B","\u96EA\u7EBA\u886B","\u88E4\u5B50","\u9AD8\u8DDF\u978B","\u889C\u5B50"]},yAxis:{},series:[{name:"\u9500\u91CF",type:"bar",data:[5,20,36,10,10,20]}]}}handleEvents(e){console.log(e)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-chart-echarts-basic"]],standalone:!0,features:[u],decls:11,vars:3,consts:[[1,"mb-md"],[3,"ngModel","ngModelChange"],["nz-button","","nzType","primary",3,"click"],[3,"option","theme","events"]],template:function(n,a){n&1&&(i(0,`
    `),s(1,"div",0),i(2,`
      `),s(3,"nz-switch",1),T("ngModelChange",function(f){return a.dark=f}),c(),i(4,` Dark
      `),s(5,"button",2),T("click",function(){return a.two=!a.two}),i(6,"Change Option"),c(),i(7,`
    `),c(),i(8,`
    `),s(9,"chart-echarts",3),T("events",function(f){return a.handleEvents(f)}),c(),i(10,`
  `)),n&2&&(d(3),l("ngModel",a.dark),d(6),l("option",a.two?a.option1:a.option2)("theme",a.dark?"dark":null))},dependencies:[Cn,gn,vn,Bn,En,tt,X,Y,K,Pe,Ae],encapsulation:2});let o=t;return o})();var no=(()=>{let t=class t{constructor(){this.msg=dt(et),this.dark=!1,this.two=!1,this.on=[{eventName:"click",handler:({event:e,chart:n})=>{this.msg.info(`${e.type}: ${e.name} - ${e.value} (${n.id})`)}}],this.option={xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]}}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-chart-echarts-on"]],standalone:!0,features:[u],decls:3,vars:2,consts:[[3,"option","on"]],template:function(n,a){n&1&&(i(0," "),p(1,"chart-echarts",0),i(2," ")),n&2&&(d(1),l("option",a.option)("on",a.on))},dependencies:[Pe,Ae],encapsulation:2});let o=t;return o})();var oo=(()=>{let t=class t{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/chart-echarts/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p><a target="_blank" href="https://echarts.apache.org/zh/index.html" data-url="https://echarts.apache.org/zh/index.html">ECharts</a> \u4E00\u4E2A\u57FA\u4E8E JavaScript \u7684\u5F00\u6E90\u53EF\u89C6\u5316\u56FE\u8868\u5E93\u3002\u4F7F\u7528\u61D2\u52A0\u8F7D ECharts \u811A\u672C\uFF0C\u5F00\u7BB1\u542F\u7528\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="chart-echarts"><a class="lake-link"><i data-anchor="chart-echarts"></i></a>chart-echarts</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[width]</code></td><td>\u56FE\u8868\u5BBD\u5EA6</td><td><code>number, string</code></td><td><code>100%</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number, string</code></td><td><code>400px</code></td></tr><tr><td><code>[option]</code></td><td><a target="_blank" href="https://echarts.apache.org/zh/option.html#title" data-url="https://echarts.apache.org/zh/option.html#title">\u914D\u7F6E\u9879</a></td><td><code>ChartEChartsOption</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td><a target="_blank" href="https://echarts.apache.org/zh/theme-builder.html" data-url="https://echarts.apache.org/zh/theme-builder.html">\u4E3B\u9898</a>\u914D\u7F6E</td><td><code>string, object</code></td><td>-</td></tr><tr><td><code>[on]</code></td><td>\u7B49\u540C\u4E8E ECharts <a target="_blank" href="https://echarts.apache.org/zh/api.html#echartsInstance.on" data-url="https://echarts.apache.org/zh/api.html#echartsInstance.on">on</a></td><td><code>ChartEChartsOn[]</code></td><td>-</td></tr><tr><td><code>(events)</code></td><td>\u4E8B\u4EF6\u56DE\u8C03</td><td><code>EventEmitter&lt;ChartEChartsEvent></code></td><td>-</td></tr></tbody></table>',meta:{title:"chart-echarts",subtitle:"ECharts",cols:1,type:"ECharts",module:"import { ChartEChartsModule } from '@delon/chart/chart-echarts';"},toc:[{id:"API",title:"API",h:2,children:[{id:"chart-echarts",title:"chart-echarts",h:3}]}]}},demo:!0},this.codes=[{id:"chart-chart-echarts-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"}},summary:{"zh-CN":"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>","en-US":"<p>Simplest of usage.</p>"},code:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChartEChartsEvent, ChartEChartsModule, ChartEChartsOption } from '@delon/chart/chart-echarts';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'chart-chart-echarts-basic',
  template: \`
    <div class="mb-md">
      <nz-switch [(ngModel)]="dark" /> Dark
      <button nz-button (click)="two = !two" nzType="primary">Change Option</button>
    </div>
    <chart-echarts [option]="two ? option1 : option2" [theme]="dark ? 'dark' : null" (events)="handleEvents($event)" />
  \`,
  standalone: true,
  imports: [FormsModule, NzSwitchModule, NzButtonModule, ChartEChartsModule]
})
export class ChartChartEchartsBasicComponent {
  dark = false;
  two = false;

  option1: ChartEChartsOption = {
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

  option2: ChartEChartsOption = {
    title: {
      text: 'ECharts \u5165\u95E8\u793A\u4F8B'
    },
    tooltip: {},
    legend: {
      data: ['\u9500\u91CF']
    },
    xAxis: {
      data: ['\u886C\u886B', '\u7F8A\u6BDB\u886B', '\u96EA\u7EBA\u886B', '\u88E4\u5B50', '\u9AD8\u8DDF\u978B', '\u889C\u5B50']
    },
    yAxis: {},
    series: [
      {
        name: '\u9500\u91CF',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  };

  handleEvents(ev: ChartEChartsEvent): void {
    console.log(ev);
  }
}`,lang:"ts",componentName:"ChartChartEchartsBasicComponent",point:0,name:"basic",urls:"packages/chart/chart-echarts/demo/basic.md",type:"demo"},{id:"chart-chart-echarts-on",meta:{order:0,title:{"zh-CN":"\u7ED1\u5B9A\u4E8B\u4EF6","en-US":"Bind event"}},summary:{"zh-CN":'<p>\u4F7F\u7528 <code>on</code> \u5C5E\u6027\uFF0C\u7B49\u540C\u4E8E ECharts <a target="_blank" href="https://echarts.apache.org/zh/api.html#echartsInstance.on" data-url="https://echarts.apache.org/zh/api.html#echartsInstance.on">on</a>\u3002</p>',"en-US":'<p>Using the <code>on</code> attribute is equivalent to ECharts <a target="_blank" href="https://echarts.apache.org/zh/api.html#echartsInstance.on" data-url="https://echarts.apache.org/zh/api.html#echartsInstance.on">on</a>.</p>'},code:`import { Component, inject } from '@angular/core';

import { ChartEChartsModule, ChartEChartsOn, ChartEChartsOption } from '@delon/chart/chart-echarts';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-chart-echarts-on',
  template: \` <chart-echarts [option]="option" [on]="on" /> \`,
  standalone: true,
  imports: [ChartEChartsModule]
})
export class ChartChartEchartsOnComponent {
  private readonly msg = inject(NzMessageService);
  dark = false;
  two = false;

  on: ChartEChartsOn[] = [
    {
      eventName: 'click',
      handler: ({ event, chart }) => {
        this.msg.info(\`\${event.type}: \${event.name} - \${event.value} (\${chart.id})\`);
      }
    }
  ];

  option: ChartEChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };
}`,lang:"ts",componentName:"ChartChartEchartsOnComponent",point:1,name:"on",urls:"packages/chart/chart-echarts/demo/on.md",type:"demo"}]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["app-chart-chart-echarts"]],hostVars:2,hostBindings:function(n,a){n&2&&y("d-block","true")},standalone:!0,features:[u],decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,a){n&1&&(s(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),s(4,"code-box",3),i(5,`
          `),p(6,"chart-chart-echarts-basic"),i(7,`
        `),c(),i(8,`
      
        `),s(9,"code-box",3),i(10,`
          `),p(11,"chart-chart-echarts-on"),i(12,`
        `),c(),i(13,`
      `),c()()()),n&2&&(l("codes",a.codes)("item",a.item),d(1),l("nzGutter",16),d(3),l("item",a.codes[0]),b("id",a.codes[0].id),d(5),l("item",a.codes[1]),b("id",a.codes[1].id))},dependencies:[S,E,eo,no,N,G,w],encapsulation:2});let o=t;return o})();var io=(()=>{let t=class t{constructor(){this.ngZone=dt(we)}render(e){this.ngZone.runOutsideAngular(()=>this.init(e.nativeElement))}init(e){let n=[{action:"\u6D4F\u89C8\u7F51\u7AD9",pv:5e4,percent:0},{action:"\u653E\u5165\u8D2D\u7269\u8F66",pv:35e3,percent:0},{action:"\u751F\u6210\u8BA2\u5355",pv:25e3,percent:0},{action:"\u652F\u4ED8\u8BA2\u5355",pv:15e3,percent:0},{action:"\u5B8C\u6210\u4EA4\u6613",pv:8e3,percent:0}].map(h=>(h.percent=h.pv/5e4,h)),a=new window.G2.Chart({container:e,autoFit:!0,height:500,width:e.clientWidth,padding:[20,120,95]});a.data(n),a.axis(!1),a.tooltip({showTitle:!1,showMarkers:!1,itemTpl:'<li style="margin-bottom:4px;list-style-type:none;padding: 0;"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}<br/><span style="padding-left: 16px;line-height: 16px;">\u6D4F\u89C8\u4EBA\u6570\uFF1A{pv}</span><br/><span style="padding-left: 16px;line-height: 16px;">\u5360\u6BD4\uFF1A{percent}</span><br/></li>'}),a.coordinate("rect").transpose().scale(1,-1),a.interval().adjust("symmetric").position("action*percent").shape("funnel").color("action",["#0050B3","#1890FF","#40A9FF","#69C0FF","#BAE7FF"]).label("action*pv",(h,f)=>({content:`${h} ${f}`}),{offset:35,labelLine:{style:{lineWidth:1,stroke:"rgba(0, 0, 0, 0.15)"}}}).tooltip("action*pv*percent",(h,f,D)=>({name:h,percent:`${+D*100}%`,pv:f})).animate({appear:{animation:"fade-in"},update:{}}),a.interaction("element-active"),a.on("beforepaint",()=>{a.annotation().clear(!0),a.getData().forEach(f=>{a.annotation().text({top:!0,position:{action:f.action,percent:"median"},content:`${+f.percent*100}%`,style:{stroke:null,fill:"#fff",textAlign:"center"}})})}),a.render()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-custom-basic"]],standalone:!0,features:[u],decls:3,vars:0,consts:[["delay","100",3,"render"]],template:function(n,a){n&1&&(i(0," "),s(1,"g2-custom",0),T("render",function(f){return a.render(f)}),c(),i(2," "))},dependencies:[On,Lt],encapsulation:2});let o=t;return o})();var ao=(()=>{let t=class t{constructor(){this.item={cols:1,urls:{"en-US":"packages/chart/custom/index.en-US.md","zh-CN":"packages/chart/custom/index.zh-CN.md"},content:{"en-US":{content:`<section class="markdown"><p>Use <code>g2-custom</code> component to package your G2 chart.</p><h2 id="Howtouse"><a class="lake-link"><i data-anchor="Howtouse"></i></a>How to use</h2><p>A simple example template:</p><pre class="hljs language-ts"><code>import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: \`
  &lt;g2-custom (render)="render($event)"&gt;&lt;/g2-custom&gt;
  \`,
})
export class DemoComponent {
  render(el: ElementRef) {
    // Coding G2 code
  }
}</code></pre><h3 id="HowtodevelopG2"><a class="lake-link"><i data-anchor="HowtodevelopG2"></i></a>How to develop G2</h3><p>If throw error <code>G2</code> not found, please refer to <a href="/chart/faq" data-url="/chart/faq">Frequently Asked Questions</a>.</p><h2 id="Links"><a class="lake-link"><i data-anchor="Links"></i></a>Links</h2><ul><li><p><a target="_blank" href="https://www.yuque.com/antv/g2-docs-en" data-url="https://www.yuque.com/antv/g2-docs-en">G2 Document</a></p></li><li><p><a target="_blank" href="https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html" data-url="https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html">G2 Demo</a></p></li></ul></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-custom"><a class="lake-link"><i data-anchor="g2-custom"></i></a>g2-custom</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[delay]</code></td><td>Delayed rendering, unit: ms</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[height]</code></td><td>Height of chart container</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[resizeTime]</code></td><td>Resize event debounce time</td><td><code>number</code></td><td><code>200</code></td></tr><tr><td><code>(render)</code></td><td>Render event</td><td><code>EventEmitter&lt;ElementRef></code></td><td>-</td></tr><tr><td><code>(resize)</code></td><td>Resize event</td><td><code>EventEmitter&lt;ElementRef></code></td><td>-</td></tr><tr><td><code>(destroy)</code></td><td>Destroy event</td><td><code>EventEmitter&lt;ElementRef></code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>Custom chart theme</td><td><code>string | LooseObject</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-chart",subtitle:"Custom Chart",cols:1,type:"G2",module:"import { G2CustomModule } from '@delon/chart/custom';"},toc:[{id:"Howtouse",title:"How to use",h:2,children:[{id:"HowtodevelopG2",title:"How to develop G2",h:3}]},{id:"Links",title:"Links",h:2},{id:"API",title:"API",h:2,children:[{id:"g2-custom",title:"g2-custom",h:3}]}]},"zh-CN":{content:`<section class="markdown"><p>\u4F7F\u7528 <code>g2-custom</code> \u7EC4\u4EF6\u53EF\u4EE5\u66F4\u5FEB\u901F\u7684\u5C01\u88C5\u81EA\u5DF1\u7684\u56FE\u8868\u7EC4\u4EF6\u3002</p><h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u4E00\u4E2A\u7B80\u5355\u793A\u4F8B\u6A21\u677F\uFF1A</p><pre class="hljs language-ts"><code>import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: \`
  &lt;g2-custom (render)="render($event)"&gt;&lt;/g2-custom&gt;
  \`,
})
export class DemoComponent {
  render(el: ElementRef) {
    // \u5F00\u59CB\u7F16\u5199 G2 \u4EE3\u7801
  }
}</code></pre><h3 id="\u5982\u4F55\u5F00\u53D1G2"><a class="lake-link"><i data-anchor="\u5982\u4F55\u5F00\u53D1G2"></i></a>\u5982\u4F55\u5F00\u53D1 G2</h3><p>\u53EF\u80FD\u4F60\u4F1A\u9047\u5230\u672A\u627E\u5230 <code>G2</code>\uFF0C\u8BF7\u53C2\u8003<a href="/chart/faq" data-url="/chart/faq">\u5E38\u89C1\u95EE\u9898</a>\u3002</p><h2 id="\u94FE\u63A5"><a class="lake-link"><i data-anchor="\u94FE\u63A5"></i></a>\u94FE\u63A5</h2><ul><li><p><a target="_blank" href="https://www.yuque.com/antv/g2-docs" data-url="https://www.yuque.com/antv/g2-docs">G2 \u6587\u6863</a></p></li><li><p><a target="_blank" href="https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html" data-url="https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html">G2 \u793A\u4F8B</a></p></li></ul></section>`,api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-custom"><a class="lake-link"><i data-anchor="g2-custom"></i></a>g2-custom</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[height]</code></td><td>\u9AD8</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[resizeTime]</code></td><td>resize \u4E8B\u4EF6\u53BB\u6296\u65F6\u957F</td><td><code>number</code></td><td><code>200</code></td></tr><tr><td><code>(render)</code></td><td>\u6E32\u67D3\u4E8B\u4EF6</td><td><code>EventEmitter&lt;ElementRef></code></td><td>-</td></tr><tr><td><code>(resize)</code></td><td>resize \u4E8B\u4EF6</td><td><code>EventEmitter&lt;ElementRef></code></td><td>-</td></tr><tr><td><code>(destroy)</code></td><td>\u9500\u6BC1\u4E8B\u4EF6</td><td><code>EventEmitter&lt;ElementRef></code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-chart",subtitle:"\u81EA\u5B9A\u4E49\u56FE\u8868",cols:1,type:"G2",module:"import { G2CustomModule } from '@delon/chart/custom';"},toc:[{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",h:2,children:[{id:"\u5982\u4F55\u5F00\u53D1G2",title:"\u5982\u4F55\u5F00\u53D1 G2",h:3}]},{id:"\u94FE\u63A5",title:"\u94FE\u63A5",h:2},{id:"API",title:"API",h:2,children:[{id:"g2-custom",title:"g2-custom",h:3}]}]}},demo:!0},this.codes=[{id:"chart-custom-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:{"zh-CN":'<p>\u6A21\u4EFF\u81EA <a target="_blank" href="https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html" data-url="https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html">antv\u57FA\u7840\u6F0F\u6597\u56FE</a>\u3002</p>',"en-US":'<p>Copy <a target="_blank" href="https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html" data-url="https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html">Basic Funnel Chart</a>\u3002</p>'},code:`import { Component, ElementRef, NgZone, inject } from '@angular/core';

import type { Chart } from '@antv/g2';

import { G2CustomModule } from '@delon/chart/custom';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'chart-custom-basic',
  template: \` <g2-custom delay="100" (render)="render($event)" /> \`,
  standalone: true,
  imports: [G2CustomModule]
})
export class ChartCustomBasicComponent {
  private readonly ngZone = inject(NgZone);

  render(el: ElementRef<HTMLDivElement>): void {
    this.ngZone.runOutsideAngular(() => this.init(el.nativeElement));
  }

  private init(el: HTMLElement): void {
    const data: Array<{ action: string; pv: number; percent: number }> = [
      { action: '\u6D4F\u89C8\u7F51\u7AD9', pv: 50000, percent: 0 },
      { action: '\u653E\u5165\u8D2D\u7269\u8F66', pv: 35000, percent: 0 },
      { action: '\u751F\u6210\u8BA2\u5355', pv: 25000, percent: 0 },
      { action: '\u652F\u4ED8\u8BA2\u5355', pv: 15000, percent: 0 },
      { action: '\u5B8C\u6210\u4EA4\u6613', pv: 8000, percent: 0 }
    ].map(row => {
      row.percent = row.pv / 50000;
      return row;
    });
    const chart: Chart = new (window as NzSafeAny).G2.Chart({
      container: el,
      autoFit: true,
      height: 500,
      width: el.clientWidth,
      padding: [20, 120, 95]
    });
    chart.data(data);
    chart.axis(false);
    chart.tooltip({
      showTitle: false,
      showMarkers: false,
      itemTpl:
        '<li style="margin-bottom:4px;list-style-type:none;padding: 0;">' +
        '<span style="background-color:{color};" class="g2-tooltip-marker"></span>' +
        '{name}<br/>' +
        '<span style="padding-left: 16px;line-height: 16px;">\u6D4F\u89C8\u4EBA\u6570\uFF1A{pv}</span><br/>' +
        '<span style="padding-left: 16px;line-height: 16px;">\u5360\u6BD4\uFF1A{percent}</span><br/>' +
        '</li>'
    });

    chart.coordinate('rect').transpose().scale(1, -1);
    chart
      .interval()
      .adjust('symmetric')
      .position('action*percent')
      .shape('funnel')
      .color('action', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF'])
      .label(
        'action*pv',
        (action, pv) => {
          return {
            content: \`\${action} \${pv}\`
          };
        },
        {
          offset: 35,
          labelLine: {
            style: {
              lineWidth: 1,
              stroke: 'rgba(0, 0, 0, 0.15)'
            }
          }
        }
      )
      .tooltip('action*pv*percent', (action, pv, percent) => {
        return {
          name: action,
          percent: \`\${+percent * 100}%\`,
          pv
        };
      })
      .animate({
        appear: {
          animation: 'fade-in'
        },
        update: {
          // annotation: 'fade-in'
        }
      });

    chart.interaction('element-active');

    chart.on('beforepaint', () => {
      chart.annotation().clear(true);
      const chartData = chart.getData();
      // \u4E2D\u95F4\u6807\u7B7E\u6587\u672C
      chartData.forEach(obj => {
        chart.annotation().text({
          top: true,
          position: {
            action: obj.action,
            percent: 'median'
          },
          content: \`\${+obj.percent * 100}%\`, // \u663E\u793A\u7684\u6587\u672C\u5185\u5BB9
          style: {
            stroke: null,
            fill: '#fff',
            textAlign: 'center'
          }
        });
      });
    });

    chart.render();
  }
}`,lang:"ts",componentName:"ChartCustomBasicComponent",point:0,name:"basic",urls:"packages/chart/custom/demo/basic.md",type:"demo"}]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["app-chart-custom"]],hostVars:2,hostBindings:function(n,a){n&2&&y("d-block","true")},standalone:!0,features:[u],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,a){n&1&&(s(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),s(4,"code-box",3),i(5,`
          `),p(6,"chart-custom-basic"),i(7,`
        `),c(),i(8,`
      `),c()()()),n&2&&(l("codes",a.codes)("item",a.item),d(1),l("nzGutter",16),d(3),l("item",a.codes[0]),b("id",a.codes[0].id))},dependencies:[S,E,io,N,G,w],encapsulation:2});let o=t;return o})();var ro=(()=>{let t=class t{constructor(e,n){this.percent=36,this.color="#2f9cff",e.isBrowser&&(this.time$=setInterval(()=>{this.percent=parseInt((Math.random()*100).toString(),10),this.color=this.percent>50?"#f50":"#2f9cff",n.detectChanges()},1e3))}ngOnDestroy(){clearInterval(this.time$)}};t.\u0275fac=function(n){return new(n||t)(U(Be),U(Tt))},t.\u0275cmp=m({type:t,selectors:[["chart-gauge-basic"]],standalone:!0,features:[u],decls:3,vars:3,consts:[["height","164",3,"title","percent","color"]],template:function(n,a){n&1&&(i(0," "),p(1,"g2-gauge",0),i(2," ")),n&2&&(d(1),l("title","\u6838\u9500\u7387")("percent",a.percent)("color",a.color))},dependencies:[Rn,Ut],encapsulation:2,changeDetection:0});let o=t;return o})();var co=(()=>{let t=class t{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/gauge/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u4E00\u79CD\u8FDB\u5EA6\u5C55\u793A\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u66F4\u76F4\u89C2\u7684\u5C55\u793A\u5F53\u524D\u7684\u8FDB\u5C55\u60C5\u51B5\uFF0C\u901A\u5E38\u4E5F\u53EF\u8868\u793A\u5360\u6BD4\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-gauge"><a class="lake-link"><i data-anchor="g2-gauge"></i></a>g2-gauge</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[title]</code></td><td>\u56FE\u8868\u6807\u9898</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>#2F9CFF</code></td></tr><tr><td><code>[bgColor]</code></td><td>\u56FE\u8868\u80CC\u666F\u8272</td><td><code>string</code></td><td><code>#F0F2F5</code></td></tr><tr><td><code>[percent]</code></td><td>\u8FDB\u5EA6\u6BD4\u4F8B</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[padding]</code></td><td>\u5185\u8FB9\u8DDD</td><td><code>Array&lt;number | string></code></td><td><code>[10, 10, 30, 10]</code></td></tr><tr><td><code>[format]</code></td><td>\u5750\u6807\u8F74\u683C\u5F0F</td><td><code>(text: string, item: {}, index: number) => string</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-gauge",subtitle:"\u4EEA\u8868\u76D8",cols:1,type:"G2",module:"import { G2GaugeModule } from '@delon/chart/gauge';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-gauge",title:"g2-gauge",h:3}]}]}},demo:!0},this.codes=[{id:"chart-gauge-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { G2GaugeModule } from '@delon/chart/gauge';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'chart-gauge-basic',
  template: \` <g2-gauge [title]="'\u6838\u9500\u7387'" height="164" [percent]="percent" [color]="color" /> \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [G2GaugeModule]
})
export class ChartGaugeBasicComponent implements OnDestroy {
  percent = 36;
  color = '#2f9cff';
  private time$: NzSafeAny;

  constructor(platform: Platform, cdr: ChangeDetectorRef) {
    if (!platform.isBrowser) return;

    this.time$ = setInterval(() => {
      this.percent = parseInt((Math.random() * 100).toString(), 10);
      this.color = this.percent > 50 ? '#f50' : '#2f9cff';
      cdr.detectChanges();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.time$);
  }
}`,lang:"ts",componentName:"ChartGaugeBasicComponent",point:0,name:"basic",urls:"packages/chart/gauge/demo/basic.md",type:"demo"}]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["app-chart-gauge"]],hostVars:2,hostBindings:function(n,a){n&2&&y("d-block","true")},standalone:!0,features:[u],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,a){n&1&&(s(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),s(4,"code-box",3),i(5,`
          `),p(6,"chart-gauge-basic"),i(7,`
        `),c(),i(8,`
      `),c()()()),n&2&&(l("codes",a.codes)("item",a.item),d(1),l("nzGutter",16),d(3),l("item",a.codes[0]),b("id",a.codes[0].id))},dependencies:[S,E,ro,N,G,w],encapsulation:2});let o=t;return o})();var so=(()=>{let t=class t{constructor(){this.msg=dt(et),this.visitData=this.genData()}genData(){let e=new Date().getTime(),n=[];for(let a=0;a<20;a+=1)n.push({x:ct(new Date(e+1e3*60*60*24*a),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10});return n}refresh(){this.visitData=this.genData()}handleClick(e){this.msg.info(`${e.item.x} - ${e.item.y}`)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-mini-area-basic"]],standalone:!0,features:[u],decls:6,vars:1,consts:[["nz-button","","nzType","primary",3,"click"],["line","","color","#cceafe","height","45",3,"data","clickItem"]],template:function(n,a){n&1&&(i(0,`
    `),s(1,"button",0),T("click",function(){return a.refresh()}),i(2,"Refresh"),c(),i(3,`
    `),s(4,"g2-mini-area",1),T("clickItem",function(f){return a.handleClick(f)}),c(),i(5,`
  `)),n&2&&(d(4),l("data",a.visitData))},dependencies:[tt,X,Y,K,he,st],encapsulation:2});let o=t;return o})();var lo=(()=>{let t=class t{constructor(){this.visitData=[]}ngOnInit(){let e=new Date().getTime();for(let n=0;n<20;n+=1)this.visitData.push({x:ct(new Date(e+1e3*60*60*24*n),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-mini-area-tooltip"]],standalone:!0,features:[u],decls:3,vars:1,consts:[["line","","color","#cceafe","height","45","yTooltipSuffix","%",3,"data"]],template:function(n,a){n&1&&(i(0," "),p(1,"g2-mini-area",0),i(2," ")),n&2&&(d(1),l("data",a.visitData))},dependencies:[he,st],encapsulation:2});let o=t;return o})();var mo=(()=>{let t=class t{constructor(){this.visitData=[]}ngOnInit(){let e=new Date().getTime();for(let n=0;n<20;n+=1)this.visitData.push({x:ct(new Date(e+1e3*60*60*24*n),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-mini-area-mini"]],standalone:!0,features:[u],decls:3,vars:1,consts:[["line","","color","#cceafe","height","45","tooltipType","mini",3,"data"]],template:function(n,a){n&1&&(i(0," "),p(1,"g2-mini-area",0),i(2," ")),n&2&&(d(1),l("data",a.visitData))},dependencies:[he,st],encapsulation:2});let o=t;return o})();var po=(()=>{let t=class t{constructor(){this.item={cols:2,urls:{"zh-CN":"packages/chart/mini-area/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u9762\u79EF\u56FE\u53C8\u53EB\u533A\u57DF\u56FE\u3002 \u5B83\u662F\u5728\u6298\u7EBF\u56FE\u7684\u57FA\u7840\u4E4B\u4E0A\u5F62\u6210\u7684, \u5B83\u5C06\u6298\u7EBF\u56FE\u4E2D\u6298\u7EBF\u4E0E\u81EA\u53D8\u91CF\u5750\u6807\u8F74\u4E4B\u95F4\u7684\u533A\u57DF\u4F7F\u7528\u989C\u8272\u6216\u8005\u7EB9\u7406\u586B\u5145\uFF0C\u8FD9\u6837\u4E00\u4E2A\u586B\u5145\u533A\u57DF\u6211\u4EEC\u53EB\u505A\u9762\u79EF\uFF0C\u989C\u8272\u7684\u586B\u5145\u53EF\u4EE5\u66F4\u597D\u7684\u7A81\u51FA\u8D8B\u52BF\u4FE1\u606F\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-mini-area"><a class="lake-link"><i data-anchor="g2-mini-area"></i></a>g2-mini-area</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>rgba(24, 144, 255, 0.2)</code></td></tr><tr><td><code>[borderColor]</code></td><td>\u56FE\u8868\u8FB9\u989C\u8272</td><td><code>string</code></td><td><code>#1890FF</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td><code>56</code></td></tr><tr><td><code>[line]</code></td><td>\u662F\u5426\u663E\u793A\u63CF\u8FB9</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[animate]</code></td><td>\u662F\u5426\u663E\u793A\u52A8\u753B</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>array</code></td><td><code>[8, 8, 8, 8]</code></td></tr><tr><td><code>[xAxis]</code></td><td><a target="_blank" href="https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc" data-url="https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc">x \u8F74\u914D\u7F6E</a></td><td><code>object</code></td><td>-</td></tr><tr><td><code>[yAxis]</code></td><td><a target="_blank" href="https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc" data-url="https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc">y \u8F74\u914D\u7F6E</a></td><td><code>object</code></td><td>-</td></tr><tr><td><code>[yTooltipSuffix]</code></td><td>y \u8F74Tooltip\u540E\u7F00\uFF0C\u4E00\u822C\u6307\u5B9A\u5355\u4F4D</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[tooltipType]</code></td><td>Tooltip\u663E\u793A\u7C7B\u578B</td><td><code>'mini','default'</code></td><td><code>'default'</code></td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2MiniAreaData[]</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2MiniAreaClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2MiniAreaData"><a class="lake-link"><i data-anchor="G2MiniAreaData"></i></a>G2MiniAreaData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[x]</code></td><td>x\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[y]</code></td><td>y\u8F74</td><td><code>any</code></td><td>-</td></tr></tbody></table>`,meta:{title:"g2-mini-area",subtitle:"\u8FF7\u4F60\u533A\u57DF\u56FE",cols:2,type:"G2",module:"import { G2MiniAreaModule } from '@delon/chart/mini-area';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-mini-area",title:"g2-mini-area",h:3},{id:"G2MiniAreaData",title:"G2MiniAreaData",h:3}]}]}},demo:!0},this.codes=[{id:"chart-mini-area-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component, inject } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaClickItem, G2MiniAreaData, G2MiniAreaModule } from '@delon/chart/mini-area';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-mini-area-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-mini-area line color="#cceafe" height="45" [data]="visitData" (clickItem)="handleClick($event)" />
  \`,
  standalone: true,
  imports: [NzButtonModule, G2MiniAreaModule]
})
export class ChartMiniAreaBasicComponent {
  private readonly msg = inject(NzMessageService);
  visitData = this.genData();

  private genData(): G2MiniAreaData[] {
    const beginDay = new Date().getTime();
    const res: G2MiniAreaData[] = [];
    for (let i = 0; i < 20; i += 1) {
      res.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
    return res;
  }

  refresh(): void {
    this.visitData = this.genData();
  }

  handleClick(data: G2MiniAreaClickItem): void {
    this.msg.info(\`\${data.item.x} - \${data.item.y}\`);
  }
}`,lang:"ts",componentName:"ChartMiniAreaBasicComponent",point:0,name:"basic",urls:"packages/chart/mini-area/demo/basic.md",type:"demo"},{id:"chart-mini-area-tooltip",meta:{order:1,title:"Tooltip"},summary:"<p>\u6307\u5B9A <code>yTooltipSuffix</code> \u503C\u6765\u8868\u793A\u5355\u4F4D\u3002</p>",code:`import { Component, OnInit } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaData, G2MiniAreaModule } from '@delon/chart/mini-area';

@Component({
  selector: 'chart-mini-area-tooltip',
  template: \` <g2-mini-area line color="#cceafe" height="45" [data]="visitData" yTooltipSuffix="%" /> \`,
  standalone: true,
  imports: [G2MiniAreaModule]
})
export class ChartMiniAreaTooltipComponent implements OnInit {
  visitData: G2MiniAreaData[] = [];
  ngOnInit(): void {
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      this.visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
  }
}`,lang:"ts",componentName:"ChartMiniAreaTooltipComponent",point:1,name:"tooltip",urls:"packages/chart/mini-area/demo/tooltip.md",type:"demo"},{id:"chart-mini-area-mini",meta:{order:2,title:"Mini tooltip"},summary:"<p>\u6307\u5B9A <code>tooltipType</code> \u503C\u6765\u8868\u793A\u7B80\u5316tooltip\uFF0C\u53EF\u4EE5\u66F4\u597D\u7684\u8FD0\u7528\u4E8E\u8868\u683C\u3002</p>",code:`import { Component, OnInit } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaData, G2MiniAreaModule } from '@delon/chart/mini-area';

@Component({
  selector: 'chart-mini-area-mini',
  template: \` <g2-mini-area line color="#cceafe" height="45" [data]="visitData" tooltipType="mini" /> \`,
  standalone: true,
  imports: [G2MiniAreaModule]
})
export class ChartMiniAreaMiniComponent implements OnInit {
  visitData: G2MiniAreaData[] = [];
  ngOnInit(): void {
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      this.visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
  }
}`,lang:"ts",componentName:"ChartMiniAreaMiniComponent",point:2,name:"mini",urls:"packages/chart/mini-area/demo/mini.md",type:"demo"}]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["app-chart-mini-area"]],hostVars:2,hostBindings:function(n,a){n&2&&y("d-block","true")},standalone:!0,features:[u],decls:21,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(n,a){n&1&&(s(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),s(4,"code-box",3),i(5,`
          `),p(6,"chart-mini-area-basic"),i(7,`
        `),c(),i(8,`
      
        `),s(9,"code-box",3),i(10,`
          `),p(11,"chart-mini-area-mini"),i(12,`
        `),c(),i(13,`
      `),c(),s(14,"div",2),i(15,`
        `),s(16,"code-box",3),i(17,`
          `),p(18,"chart-mini-area-tooltip"),i(19,`
        `),c(),i(20,`
      `),c()()()),n&2&&(l("codes",a.codes)("item",a.item),d(1),l("nzGutter",16),d(3),l("item",a.codes[0]),b("id",a.codes[0].id),d(5),l("item",a.codes[2]),b("id",a.codes[2].id),d(7),l("item",a.codes[1]),b("id",a.codes[1].id))},dependencies:[S,E,so,lo,mo,N,G,w],encapsulation:2});let o=t;return o})();var ho=(()=>{let t=class t{constructor(){this.msg=dt(et),this.visitData=this.genData()}genData(){let e=new Date().getTime(),n=[];for(let a=0;a<20;a+=1)n.push({x:ct(new Date(e+1e3*60*60*24*a),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10});return n}refresh(){this.visitData=this.genData()}handleClick(e){this.msg.info(`${e.item.x} - ${e.item.y}`)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-mini-bar-basic"]],standalone:!0,features:[u],decls:6,vars:1,consts:[["nz-button","","nzType","primary",3,"click"],["height","45",3,"data","clickItem"]],template:function(n,a){n&1&&(i(0,`
    `),s(1,"button",0),T("click",function(){return a.refresh()}),i(2,"Refresh"),c(),i(3,`
    `),s(4,"g2-mini-bar",1),T("clickItem",function(f){return a.handleClick(f)}),c(),i(5,`
  `)),n&2&&(d(4),l("data",a.visitData))},dependencies:[tt,X,Y,K,ue,vt],encapsulation:2});let o=t;return o})();var uo=(()=>{let t=class t{constructor(){this.visitData=[]}ngOnInit(){let e=new Date().getTime();for(let n=0;n<20;n+=1)this.visitData.push({x:ct(new Date(e+1e3*60*60*24*n),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-mini-bar-mini"]],standalone:!0,features:[u],decls:3,vars:1,consts:[["height","45","yTooltipSuffix","%","tooltipType","mini",3,"data"]],template:function(n,a){n&1&&(i(0," "),p(1,"g2-mini-bar",0),i(2," ")),n&2&&(d(1),l("data",a.visitData))},dependencies:[ue,vt],encapsulation:2});let o=t;return o})();var fo=(()=>{let t=class t{constructor(){this.visitData=[]}ngOnInit(){let e=new Date().getTime();for(let n=0;n<20;n+=1)this.visitData.push({x:ct(new Date(e+1e3*60*60*24*n),"yyyy-MM-dd"),y:Math.floor(Math.random()*100)+10})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-mini-bar-tooltip"]],standalone:!0,features:[u],decls:3,vars:1,consts:[["height","45","yTooltipSuffix","%",3,"data"]],template:function(n,a){n&1&&(i(0," "),p(1,"g2-mini-bar",0),i(2," ")),n&2&&(d(1),l("data",a.visitData))},dependencies:[ue,vt],encapsulation:2});let o=t;return o})();var go=(()=>{let t=class t{constructor(){this.item={cols:2,urls:{"zh-CN":"packages/chart/mini-bar/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u8FF7\u4F60\u67F1\u72B6\u56FE\u66F4\u9002\u5408\u5C55\u793A\u7B80\u5355\u7684\u533A\u95F4\u6570\u636E\uFF0C\u7B80\u6D01\u7684\u8868\u73B0\u65B9\u5F0F\u53EF\u4EE5\u5F88\u597D\u7684\u51CF\u5C11\u5927\u6570\u636E\u91CF\u7684\u89C6\u89C9\u5C55\u73B0\u538B\u529B\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-mini-bar"><a class="lake-link"><i data-anchor="g2-mini-bar"></i></a>g2-mini-bar</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>#1890FF</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[yTooltipSuffix]</code></td><td>y \u8F74Tooltip\u540E\u7F00\uFF0C\u4E00\u822C\u6307\u5B9A\u5355\u4F4D</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[tooltipType]</code></td><td>Tooltip\u663E\u793A\u7C7B\u578B</td><td><code>'mini','default'</code></td><td><code>'default'</code></td></tr><tr><td><code>[borderWidth]</code></td><td>\u7EBF\u6761\u7C97\u7EC6</td><td><code>number</code></td><td><code>5</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>array</code></td><td><code>[8, 8, 8, 8]</code></td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2MiniBarData[]</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2MiniBarClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2MiniBarData"><a class="lake-link"><i data-anchor="G2MiniBarData"></i></a>G2MiniBarData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[x]</code></td><td>x\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[y]</code></td><td>y\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>\u8F74\u989C\u8272</td><td><code>string</code></td><td>-</td></tr></tbody></table>`,meta:{title:"g2-mini-bar",subtitle:"\u8FF7\u4F60\u67F1\u72B6\u56FE",cols:2,type:"G2",module:"import { G2MiniBarModule } from '@delon/chart/mini-bar';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-mini-bar",title:"g2-mini-bar",h:3},{id:"G2MiniBarData",title:"G2MiniBarData",h:3}]}]}},demo:!0},this.codes=[{id:"chart-mini-bar-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component, inject } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniAreaClickItem, G2MiniAreaData } from '@delon/chart/mini-area';
import { G2MiniBarModule } from '@delon/chart/mini-bar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-mini-bar-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-mini-bar height="45" [data]="visitData" (clickItem)="handleClick($event)" />
  \`,
  standalone: true,
  imports: [NzButtonModule, G2MiniBarModule]
})
export class ChartMiniBarBasicComponent {
  private readonly msg = inject(NzMessageService);
  visitData = this.genData();

  private genData(): G2MiniAreaData[] {
    const beginDay = new Date().getTime();
    const res: G2MiniAreaData[] = [];
    for (let i = 0; i < 20; i += 1) {
      res.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
    return res;
  }

  refresh(): void {
    this.visitData = this.genData();
  }

  handleClick(data: G2MiniAreaClickItem): void {
    this.msg.info(\`\${data.item.x} - \${data.item.y}\`);
  }
}`,lang:"ts",componentName:"ChartMiniBarBasicComponent",point:0,name:"basic",urls:"packages/chart/mini-bar/demo/basic.md",type:"demo"},{id:"chart-mini-bar-mini",meta:{order:0,title:"Mini tooltip"},summary:"<p>\u6307\u5B9A <code>tooltipType</code> \u503C\u6765\u8868\u793A\u7B80\u5316tooltip\uFF0C\u53EF\u4EE5\u66F4\u597D\u7684\u8FD0\u7528\u4E8E\u8868\u683C\u3002</p>",code:`import { Component, OnInit } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniBarData, G2MiniBarModule } from '@delon/chart/mini-bar';

@Component({
  selector: 'chart-mini-bar-mini',
  template: \` <g2-mini-bar height="45" [data]="visitData" yTooltipSuffix="%" tooltipType="mini" /> \`,
  standalone: true,
  imports: [G2MiniBarModule]
})
export class ChartMiniBarMiniComponent implements OnInit {
  visitData: G2MiniBarData[] = [];
  ngOnInit(): void {
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      this.visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
  }
}`,lang:"ts",componentName:"ChartMiniBarMiniComponent",point:1,name:"mini",urls:"packages/chart/mini-bar/demo/mini.md",type:"demo"},{id:"chart-mini-bar-tooltip",meta:{order:0,title:"Tooltip"},summary:"<p>\u6307\u5B9A <code>yTooltipSuffix</code> \u503C\u6765\u8868\u793A\u5355\u4F4D\u3002</p>",code:`import { Component, OnInit } from '@angular/core';

import { format } from 'date-fns';

import { G2MiniBarData, G2MiniBarModule } from '@delon/chart/mini-bar';

@Component({
  selector: 'chart-mini-bar-tooltip',
  template: \` <g2-mini-bar height="45" [data]="visitData" yTooltipSuffix="%" /> \`,
  standalone: true,
  imports: [G2MiniBarModule]
})
export class ChartMiniBarTooltipComponent implements OnInit {
  visitData: G2MiniBarData[] = [];
  ngOnInit(): void {
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      this.visitData.push({
        x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
        y: Math.floor(Math.random() * 100) + 10
      });
    }
  }
}`,lang:"ts",componentName:"ChartMiniBarTooltipComponent",point:2,name:"tooltip",urls:"packages/chart/mini-bar/demo/tooltip.md",type:"demo"}]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["app-chart-mini-bar"]],hostVars:2,hostBindings:function(n,a){n&2&&y("d-block","true")},standalone:!0,features:[u],decls:21,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(n,a){n&1&&(s(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),s(4,"code-box",3),i(5,`
          `),p(6,"chart-mini-bar-basic"),i(7,`
        `),c(),i(8,`
      
        `),s(9,"code-box",3),i(10,`
          `),p(11,"chart-mini-bar-tooltip"),i(12,`
        `),c(),i(13,`
      `),c(),s(14,"div",2),i(15,`
        `),s(16,"code-box",3),i(17,`
          `),p(18,"chart-mini-bar-mini"),i(19,`
        `),c(),i(20,`
      `),c()()()),n&2&&(l("codes",a.codes)("item",a.item),d(1),l("nzGutter",16),d(3),l("item",a.codes[0]),b("id",a.codes[0].id),d(5),l("item",a.codes[2]),b("id",a.codes[2].id),d(7),l("item",a.codes[1]),b("id",a.codes[1].id))},dependencies:[S,E,ho,uo,fo,N,G,w],encapsulation:2});let o=t;return o})();var vo=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-mini-progress-basic"]],standalone:!0,features:[u],decls:3,vars:0,consts:[["percent","78","strokeWidth","8","target","80"]],template:function(n,a){n&1&&(i(0," "),p(1,"g2-mini-progress",0),i(2," "))},dependencies:[$n,Pt],encapsulation:2});let o=t;return o})();var Co=(()=>{let t=class t{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/mini-progress/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u7528\u4E8E\u663E\u793A\u8DDF\u901F\u5EA6\u76F8\u5173\u56FE\u5F62\u518D\u9002\u5408\u4E0D\u8FC7\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-mini-progress"><a class="lake-link"><i data-anchor="g2-mini-progress"></i></a>g2-mini-progress</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[target]</code></td><td>\u76EE\u6807\u6BD4\u4F8B</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[color]</code></td><td>\u8FDB\u5EA6\u6761\u989C\u8272</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[strokeWidth]</code></td><td>\u8FDB\u5EA6\u6761\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[percent]</code></td><td>\u8FDB\u5EA6\u6BD4\u4F8B</td><td><code>number</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-mini-progress",subtitle:"\u8FF7\u4F60\u8FDB\u5EA6\u6761",cols:1,type:"G2",module:"import { G2MiniProgressModule } from '@delon/chart/mini-progress';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-mini-progress",title:"g2-mini-progress",h:3}]}]}},demo:!0},this.codes=[{id:"chart-mini-progress-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

import { G2MiniProgressModule } from '@delon/chart/mini-progress';

@Component({
  selector: 'chart-mini-progress-basic',
  template: \` <g2-mini-progress percent="78" strokeWidth="8" target="80" /> \`,
  standalone: true,
  imports: [G2MiniProgressModule]
})
export class ChartMiniProgressBasicComponent {}`,lang:"ts",componentName:"ChartMiniProgressBasicComponent",point:0,name:"basic",urls:"packages/chart/mini-progress/demo/basic.md",type:"demo"}]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["app-chart-mini-progress"]],hostVars:2,hostBindings:function(n,a){n&2&&y("d-block","true")},standalone:!0,features:[u],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,a){n&1&&(s(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),s(4,"code-box",3),i(5,`
          `),p(6,"chart-mini-progress-basic"),i(7,`
        `),c(),i(8,`
      `),c()()()),n&2&&(l("codes",a.codes)("item",a.item),d(1),l("nzGutter",16),d(3),l("item",a.codes[0]),b("id",a.codes[0].id))},dependencies:[S,E,vo,N,G,w],encapsulation:2});let o=t;return o})();var yo=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-number-info-basic"]],standalone:!0,features:[u],decls:3,vars:0,consts:[["subTitle","\u672C\u5468\u8BBF\u95EE","total","12,321","subTotal","17.1","status","up"]],template:function(n,a){n&1&&(i(0," "),p(1,"number-info",0),i(2," "))},dependencies:[ve,xt],encapsulation:2});let o=t;return o})();var bo=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-number-info-theme"]],standalone:!0,features:[u],decls:3,vars:0,consts:[["subTitle","\u672C\u5468\u8BBF\u95EE","total","12,321","subTotal","17.1","status","down","theme","default"]],template:function(n,a){n&1&&(i(0," "),p(1,"number-info",0),i(2," "))},dependencies:[ve,xt],encapsulation:2});let o=t;return o})();var xo=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-number-info-multiple"]],standalone:!0,features:[u],decls:7,vars:0,consts:[["subTitle","\u4ECA\u65E5\u8BBF\u95EE","total","12,321"],["subTitle","\u672C\u5468\u8BBF\u95EE","total","12,32100"],["subTitle","\u672C\u6708\u8BBF\u95EE","total","12,32100000"]],template:function(n,a){n&1&&(i(0,`
    `),p(1,"number-info",0),i(2,`
    `),p(3,"number-info",1),i(4,`
    `),p(5,"number-info",2),i(6,`
  `))},dependencies:[ve,xt],encapsulation:2});let o=t;return o})();var Mo=(()=>{let t=class t{constructor(){this.item={cols:2,urls:{"en-US":"packages/chart/number-info/index.en-US.md","zh-CN":"packages/chart/number-info/index.zh-CN.md"},content:{"en-US":{content:'<section class="markdown"><p>Often used in data cards for highlighting the business data.</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="number-info"><a class="lake-link"><i data-anchor="number-info"></i></a>number-info</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>title</td><td><code>TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[subTitle]</code></td><td>subtitle</td><td><code>TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[total]</code></td><td>total amount</td><td><code>string, number</code></td><td>-</td></tr><tr><td><code>[suffix]</code></td><td>total amount suffix</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[subTotal]</code></td><td>total amount of additional information</td><td><code>string, number</code></td><td>-</td></tr><tr><td><code>[status]</code></td><td>increase state</td><td><code>'up','down'</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>state style</td><td><code>'light','default'</code></td><td><code>'light'</code></td></tr><tr><td><code>[gap]</code></td><td>set the spacing (pixels) between numbers and descriptions</td><td><code>number</code></td><td>8</td></tr></tbody></table>`,meta:{type:"G2",title:"number-info",subtitle:"NumberInfo",cols:2,module:"import { NumberInfoModule } from '@delon/chart/number-info';"},toc:[{id:"API",title:"API",h:2,children:[{id:"number-info",title:"number-info",h:3}]}]},"zh-CN":{content:'<section class="markdown"><p>\u5E38\u7528\u5728\u6570\u636E\u5361\u7247\u4E2D\uFF0C\u7528\u4E8E\u7A81\u51FA\u5C55\u793A\u67D0\u4E2A\u4E1A\u52A1\u6570\u636E\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="number-info"><a class="lake-link"><i data-anchor="number-info"></i></a>number-info</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[title]</code></td><td>\u6807\u9898</td><td><code>TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[subTitle]</code></td><td>\u5B50\u6807\u9898</td><td><code>TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[total]</code></td><td>\u603B\u91CF</td><td><code>string, number</code></td><td>-</td></tr><tr><td><code>[suffix]</code></td><td>\u603B\u91CF\u540E\u7F00</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[subTotal]</code></td><td>\u5B50\u603B\u91CF</td><td><code>string, number</code></td><td>-</td></tr><tr><td><code>[status]</code></td><td>\u589E\u52A0\u72B6\u6001</td><td><code>'up','down'</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u72B6\u6001\u6837\u5F0F</td><td><code>'light','default'</code></td><td><code>'light'</code></td></tr><tr><td><code>[gap]</code></td><td>\u8BBE\u7F6E\u6570\u5B57\u548C\u63CF\u8FF0\u76F4\u63A5\u7684\u95F4\u8DDD\uFF08\u50CF\u7D20\uFF09</td><td><code>number</code></td><td>8</td></tr></tbody></table>`,meta:{type:"G2",title:"number-info",subtitle:"\u6570\u636E\u6587\u672C",cols:2,module:"import { NumberInfoModule } from '@delon/chart/number-info';"},toc:[{id:"API",title:"API",h:2,children:[{id:"number-info",title:"number-info",h:3}]}]}},demo:!0},this.codes=[{id:"chart-number-info-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"}},summary:"<p>\u5404\u79CD\u6570\u636E\u6587\u6848\u7684\u5C55\u73B0\u65B9\u5F0F\u3002</p>",code:`import { Component } from '@angular/core';

import { NumberInfoModule } from '@delon/chart/number-info';

@Component({
  selector: 'chart-number-info-basic',
  template: \` <number-info subTitle="\u672C\u5468\u8BBF\u95EE" total="12,321" subTotal="17.1" status="up" /> \`,
  standalone: true,
  imports: [NumberInfoModule]
})
export class ChartNumberInfoBasicComponent {}`,lang:"ts",componentName:"ChartNumberInfoBasicComponent",point:0,name:"basic",urls:"packages/chart/number-info/demo/basic.md",type:"demo"},{id:"chart-number-info-theme",meta:{order:1,title:"\u4E3B\u9898"},summary:"<p>\u6697\u7CFB\u3002</p>",code:`import { Component } from '@angular/core';

import { NumberInfoModule } from '@delon/chart/number-info';

@Component({
  selector: 'chart-number-info-theme',
  template: \` <number-info subTitle="\u672C\u5468\u8BBF\u95EE" total="12,321" subTotal="17.1" status="down" theme="default" /> \`,
  standalone: true,
  imports: [NumberInfoModule]
})
export class ChartNumberInfoThemeComponent {}`,lang:"ts",componentName:"ChartNumberInfoThemeComponent",point:1,name:"theme",urls:"packages/chart/number-info/demo/theme.md",type:"demo"},{id:"chart-number-info-multiple",meta:{order:2,title:{"zh-CN":"\u591A\u5217","en-US":"Multiple"}},summary:{"zh-CN":"<p>\u591A\u4E2A<code>number-info</code>\u7EC4\u4EF6\u5728\u4E00\u8D77\u65F6\u589E\u52A0\u5206\u9694\u7B26\u3002</p>","en-US":"<p>Should be show a separator when multiple <code>number-info</code> components.</p>"},code:`import { Component } from '@angular/core';

import { NumberInfoModule } from '@delon/chart/number-info';

@Component({
  selector: 'chart-number-info-multiple',
  template: \`
    <number-info subTitle="\u4ECA\u65E5\u8BBF\u95EE" total="12,321" />
    <number-info subTitle="\u672C\u5468\u8BBF\u95EE" total="12,32100" />
    <number-info subTitle="\u672C\u6708\u8BBF\u95EE" total="12,32100000" />
  \`,
  standalone: true,
  imports: [NumberInfoModule]
})
export class ChartNumberInfoMultipleComponent {}`,lang:"ts",componentName:"ChartNumberInfoMultipleComponent",point:2,name:"multiple",urls:"packages/chart/number-info/demo/multiple.md",type:"demo"}]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["app-chart-number-info"]],hostVars:2,hostBindings:function(n,a){n&2&&y("d-block","true")},standalone:!0,features:[u],decls:21,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],[3,"item"]],template:function(n,a){n&1&&(s(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),s(4,"code-box",3),i(5,`
          `),p(6,"chart-number-info-basic"),i(7,`
        `),c(),i(8,`
      
        `),s(9,"code-box",3),i(10,`
          `),p(11,"chart-number-info-multiple"),i(12,`
        `),c(),i(13,`
      `),c(),s(14,"div",2),i(15,`
        `),s(16,"code-box",3),i(17,`
          `),p(18,"chart-number-info-theme"),i(19,`
        `),c(),i(20,`
      `),c()()()),n&2&&(l("codes",a.codes)("item",a.item),d(1),l("nzGutter",16),d(3),l("item",a.codes[0]),b("id",a.codes[0].id),d(5),l("item",a.codes[2]),b("id",a.codes[2].id),d(7),l("item",a.codes[1]),b("id",a.codes[1].id))},dependencies:[S,E,yo,bo,xo,N,G,w],encapsulation:2});let o=t;return o})();var na=["pie"],zo=(()=>{let t=class t{constructor(e){this.msg=e,this.salesPieData=[],this.total="",this.refresh()}refresh(){let e=(n=0,a=5e3)=>Math.floor(Math.random()*(a-n+1)+n);this.salesPieData=[{x:"\u5BB6\u7528\u7535\u5668",y:e()},{x:"\u98DF\u7528\u9152\u6C34",y:e()},{x:"\u4E2A\u62A4\u5065\u5EB7",y:e()},{x:"\u670D\u9970\u7BB1\u5305",y:e()},{x:"\u6BCD\u5A74\u4EA7\u54C1",y:e()}],Math.random()>.5&&this.salesPieData.push({x:"\u5176\u4ED6",y:e()}),this.total=`&yen ${this.salesPieData.reduce((n,a)=>a.y+n,0).toFixed(2)}`,this.pie&&setTimeout(()=>this.pie.changeData())}format(e){return`&yen ${e.toFixed(2)}`}handleClick(e){this.msg.info(`${e.item.x} - ${e.item.y}`)}};t.\u0275fac=function(n){return new(n||t)(U(et))},t.\u0275cmp=m({type:t,selectors:[["chart-pie-basic"]],viewQuery:function(n,a){if(n&1&&Ie(na,5),n&2){let h;Ne(h=Ee())&&(a.pie=h.first)}},standalone:!0,features:[u],decls:7,vars:4,consts:[["nz-button","","nzType","primary",3,"click"],["title","\u9500\u552E\u989D","subTitle","\u9500\u552E\u989D","height","294","repaint","false",3,"hasLegend","total","valueFormat","data","clickItem"],["pie",""]],template:function(n,a){n&1&&(i(0,`
    `),s(1,"button",0),T("click",function(){return a.refresh()}),i(2,"Refresh"),c(),i(3,`
    `),s(4,"g2-pie",1,2),T("clickItem",function(f){return a.handleClick(f)}),c(),i(6,`
  `)),n&2&&(d(4),l("hasLegend",!0)("total",a.total)("valueFormat",a.format)("data",a.salesPieData))},dependencies:[tt,X,Y,K,Oe,rt],encapsulation:2});let o=t;return o})();var ko=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-pie-mini"]],standalone:!0,features:[u],decls:6,vars:0,consts:[[2,"width","200px","display","inline-block"],["percent","28","subTitle","\u4E2D\u5F0F\u5FEB\u9910","total","28%","height","130"]],template:function(n,a){n&1&&(i(0,`
    `),s(1,"div",0),i(2,`
      `),p(3,"g2-pie",1),i(4,`
    `),c(),i(5,`
  `))},dependencies:[Oe,rt],encapsulation:2});let o=t;return o})();var To=(()=>{let t=class t{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/pie/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u7528\u4E8E\u663E\u793A\u8DDF\u901F\u5EA6\u76F8\u5173\u56FE\u5F62\u518D\u9002\u5408\u4E0D\u8FC7\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-pie"><a class="lake-link"><i data-anchor="g2-pie"></i></a>g2-pie</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[animate]</code></td><td>\u662F\u5426\u663E\u793A\u52A8\u753B</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>rgba(24, 144, 255, 0.85)</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[hasLegend]</code></td><td>\u662F\u5426\u663E\u793A legend</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>number[]</code></td><td><code>[12, 0, 12, 0]</code></td></tr><tr><td><code>[percent]</code></td><td>\u5360\u6BD4</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[lineWidth]</code></td><td>\u8FB9\u6846\u7C97\u7EC6</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[inner]</code></td><td>\u5185\u90E8\u6781\u5750\u6807\u7CFB\u7684\u534A\u5F84</td><td><code>number</code></td><td><code>0.75</code></td></tr><tr><td><code>[blockMaxWidth]</code></td><td>\u591A\u5C11\u5BBD\u5EA6\u4E3A\u5757\u663E\u793A</td><td><code>number</code></td><td><code>380</code></td></tr><tr><td><code>[tooltip]</code></td><td>\u662F\u5426\u663E\u793A tooltip</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[subTitle]</code></td><td>\u56FE\u8868\u5B50\u6807\u9898</td><td><code>string,TemplateRef&lt;void><void></code></td><td>-</td></tr><tr><td><code>[total]</code></td><td>\u603B\u91CF</td><td><code>string,number,TemplateRef&lt;void><void></code></td><td>-</td></tr><tr><td><code>[valueFormat]</code></td><td>y\u8F74\u683C\u5F0F\u5316</td><td><code>(y: number) => string</code></td><td>-</td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2PieData[]</code></td><td>-</td></tr><tr><td><code>[colors]</code></td><td>\u989C\u8272\u5217\u8868</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>[interaction]</code></td><td>\u4EA4\u4E92\u7C7B\u578B\uFF0Cnone \u65E0 element-active \u56FE\u5F62\u5143\u7D20\uFF0Cactive-region \u56FE\u8868\u7EC4\u4EF6\uFF0Cbrush \u6846\u9009\uFF0Cdrag-move \u79FB\u52A8</td><td><code>InteractionType</code></td><td><code>none</code></td></tr><tr><td><code>[ratio]</code></td><td>\u767E\u5206\u6BD4\u914D\u7F6E\u9879</td><td><code>G2PieRatio</code></td><td><code>{ text: '\u5360\u6BD4', inverse: '\u53CD\u6BD4', color: '', inverseColor: '#F0F2F5' }</code></td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2PieClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2PieData"><a class="lake-link"><i data-anchor="G2PieData"></i></a>G2PieData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[x]</code></td><td>x\u8F74</td><td><code>any</code></td><td>-</td></tr><tr><td><code>[y]</code></td><td>y\u8F74</td><td><code>number</code></td><td>-</td></tr></tbody></table>`,meta:{title:"g2-pie",subtitle:"\u997C\u72B6\u56FE",cols:1,type:"G2",module:"import { G2PieModule } from '@delon/chart/pie';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-pie",title:"g2-pie",h:3},{id:"G2PieData",title:"G2PieData",h:3}]}]}},demo:!0},this.codes=[{id:"chart-pie-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E1D\u6ED1\u66F4\u65B0\u6570\u636E\u7684\u5224\u65AD\u6807\u51C6\u662F\u4EE5\u53EA\u66F4\u65B0 <code>data</code> \u4E3A\u51C6\uFF0C\u8FD9\u91CC\u5229\u7528 <code>repaint</code> \u8FDB\u884C\u624B\u52A8\u8C03\u7528 <code>changeData</code> \u6539\u53D8\u6570\u636E\u8FBE\u5230\u4E1D\u6ED1\u66F4\u65B0\u7684\u6548\u679C\u3002</p>",code:`import { Component, ViewChild } from '@angular/core';

import { G2PieClickItem, G2PieComponent, G2PieData, G2PieModule } from '@delon/chart/pie';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-pie-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-pie
      #pie
      [hasLegend]="true"
      title="\u9500\u552E\u989D"
      subTitle="\u9500\u552E\u989D"
      [total]="total"
      [valueFormat]="format"
      [data]="salesPieData"
      height="294"
      repaint="false"
      (clickItem)="handleClick($event)"
    />
  \`,
  standalone: true,
  imports: [NzButtonModule, G2PieModule]
})
export class ChartPieBasicComponent {
  @ViewChild('pie', { static: false }) readonly pie!: G2PieComponent;
  salesPieData: G2PieData[] = [];
  total = '';

  constructor(private msg: NzMessageService) {
    this.refresh();
  }

  refresh(): void {
    const rv = (min: number = 0, max: number = 5000): number => Math.floor(Math.random() * (max - min + 1) + min);
    this.salesPieData = [
      {
        x: '\u5BB6\u7528\u7535\u5668',
        y: rv()
      },
      {
        x: '\u98DF\u7528\u9152\u6C34',
        y: rv()
      },
      {
        x: '\u4E2A\u62A4\u5065\u5EB7',
        y: rv()
      },
      {
        x: '\u670D\u9970\u7BB1\u5305',
        y: rv()
      },
      {
        x: '\u6BCD\u5A74\u4EA7\u54C1',
        y: rv()
      }
    ];
    if (Math.random() > 0.5) {
      this.salesPieData.push({
        x: '\u5176\u4ED6',
        y: rv()
      });
    }
    this.total = \`&yen \${this.salesPieData.reduce((pre, now) => now.y + pre, 0).toFixed(2)}\`;
    if (this.pie) {
      // \u7B49\u5F85\u7EC4\u4EF6\u6E32\u67D3
      setTimeout(() => this.pie.changeData());
    }
  }

  format(val: number): string {
    return \`&yen \${val.toFixed(2)}\`;
  }

  handleClick(data: G2PieClickItem): void {
    this.msg.info(\`\${data.item.x} - \${data.item.y}\`);
  }
}`,lang:"ts",componentName:"ChartPieBasicComponent",point:0,name:"basic",urls:"packages/chart/pie/demo/basic.md",type:"demo"},{id:"chart-pie-mini",meta:{order:0,title:{"zh-CN":"\u8FF7\u4F60\u578B","en-US":"Mini"}},summary:"<p>\u901A\u8FC7\u7B80\u5316 <code>pie</code> \u5C5E\u6027\u7684\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u5FEB\u901F\u7684\u5B9E\u73B0\u6781\u7B80\u7684\u997C\u72B6\u56FE\uFF0C\u53EF\u914D\u5408 <code>chart-card</code> \u7EC4\u5408\u5C55\u73B0\u66F4\u591A\u4E1A\u52A1\u573A\u666F\u3002</p>",code:`import { Component } from '@angular/core';

import { G2PieModule } from '@delon/chart/pie';

@Component({
  selector: 'chart-pie-mini',
  template: \`
    <div style="width: 200px; display: inline-block">
      <g2-pie percent="28" subTitle="\u4E2D\u5F0F\u5FEB\u9910" total="28%" height="130" />
    </div>
  \`,
  standalone: true,
  imports: [G2PieModule]
})
export class ChartPieMiniComponent {}`,lang:"ts",componentName:"ChartPieMiniComponent",point:1,name:"mini",urls:"packages/chart/pie/demo/mini.md",type:"demo"}]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["app-chart-pie"]],hostVars:2,hostBindings:function(n,a){n&2&&y("d-block","true")},standalone:!0,features:[u],decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,a){n&1&&(s(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),s(4,"code-box",3),i(5,`
          `),p(6,"chart-pie-basic"),i(7,`
        `),c(),i(8,`
      
        `),s(9,"code-box",3),i(10,`
          `),p(11,"chart-pie-mini"),i(12,`
        `),c(),i(13,`
      `),c()()()),n&2&&(l("codes",a.codes)("item",a.item),d(1),l("nzGutter",16),d(3),l("item",a.codes[0]),b("id",a.codes[0].id),d(5),l("item",a.codes[1]),b("id",a.codes[1].id))},dependencies:[S,E,zo,ko,N,G,w],encapsulation:2});let o=t;return o})();var So=(()=>{let t=class t{constructor(e){this.msg=e,this.radarData=[],this.refresh()}refresh(){let e=(f=1,D=10)=>Math.floor(Math.random()*(D-f+1)+f),n=["\u4E2A\u4EBA","\u56E2\u961F","\u90E8\u95E8"].map(f=>({name:f,ref:e(),koubei:e(),output:e(),contribute:e(),hot:e()})),a={ref:"\u5F15\u7528",koubei:"\u53E3\u7891",output:"\u4EA7\u91CF",contribute:"\u8D21\u732E",hot:"\u70ED\u5EA6"};Math.random()>.5&&delete a.hot;let h=[];n.forEach(f=>{Object.keys(f).forEach(D=>{D!=="name"&&h.push({name:f.name,label:a[D],value:f[D]})})}),this.radarData=h}handleClick(e){this.msg.info(`${e.item.label} - ${e.item.name} - ${e.item.value}`)}};t.\u0275fac=function(n){return new(n||t)(U(et))},t.\u0275cmp=m({type:t,selectors:[["chart-radar-basic"]],standalone:!0,features:[u],decls:6,vars:2,consts:[["nz-button","","nzType","primary",3,"click"],["height","286",3,"hasLegend","data","clickItem"]],template:function(n,a){n&1&&(i(0,`
    `),s(1,"button",0),T("click",function(){return a.refresh()}),i(2,"Refresh"),c(),i(3,`
    `),s(4,"g2-radar",1),T("clickItem",function(f){return a.handleClick(f)}),c(),i(5,`
  `)),n&2&&(d(4),l("hasLegend",!0)("data",a.radarData))},dependencies:[tt,X,Y,K,Hn,Ot],encapsulation:2});let o=t;return o})();var _o=(()=>{let t=class t{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/radar/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u96F7\u8FBE\u56FE\u662F\u4EE5\u76F8\u540C\u70B9\u5F00\u59CB\u7684\u8F74\u4E0A\u8868\u793A\u7684\u4E09\u4E2A\u6216\u66F4\u591A\u4E2A\u5B9A\u91CF\u53D8\u91CF\u7684\u4E8C\u7EF4\u56FE\u5F62\u7684\u5F62\u5F0F\u663E\u793A\u591A\u53D8\u91CF\u6570\u636E\u7684\u56FE\u5F62\u65B9\u6CD5\u3002\u8F74\u7684\u76F8\u5BF9\u4F4D\u7F6E\u548C\u89D2\u5EA6\u901A\u5E38\u662F\u4E0D\u77E5\u60C5\u7684\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-radar"><a class="lake-link"><i data-anchor="g2-radar"></i></a>g2-radar</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[title]</code></td><td>\u56FE\u8868\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[hasLegend]</code></td><td>\u662F\u5426\u663E\u793A legend</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>array</code></td><td><code>[24, 30, 16, 30]</code></td></tr><tr><td><code>[colors]</code></td><td>\u989C\u8272\u5217\u8868</td><td><code>string[]</code></td><td>-</td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2RadarData[]</code></td><td>-</td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2RadarClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2RadarData"><a class="lake-link"><i data-anchor="G2RadarData"></i></a>G2RadarData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[name]</code></td><td>\u540D\u79F0</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[label]</code></td><td>\u6807\u7B7E</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[value]</code></td><td>\u503C</td><td><code>number</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-radar",subtitle:"\u96F7\u8FBE\u56FE",cols:1,type:"G2",module:"import { G2RadarModule } from '@delon/chart/radar';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-radar",title:"g2-radar",h:3},{id:"G2RadarData",title:"G2RadarData",h:3}]}]}},demo:!0},this.codes=[{id:"chart-radar-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

import { G2RadarClickItem, G2RadarData, G2RadarModule } from '@delon/chart/radar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-radar-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-radar [hasLegend]="true" [data]="radarData" height="286" (clickItem)="handleClick($event)" />
  \`,
  standalone: true,
  imports: [NzButtonModule, G2RadarModule]
})
export class ChartRadarBasicComponent {
  radarData: G2RadarData[] = [];

  constructor(private msg: NzMessageService) {
    this.refresh();
  }

  refresh(): void {
    const rv = (min: number = 1, max: number = 10): number => Math.floor(Math.random() * (max - min + 1) + min);
    const radarOriginData = ['\u4E2A\u4EBA', '\u56E2\u961F', '\u90E8\u95E8'].map(name => ({
      name,
      ref: rv(),
      koubei: rv(),
      output: rv(),
      contribute: rv(),
      hot: rv()
    }));
    const radarTitleMap: { [key: string]: string } = {
      ref: '\u5F15\u7528',
      koubei: '\u53E3\u7891',
      output: '\u4EA7\u91CF',
      contribute: '\u8D21\u732E',
      hot: '\u70ED\u5EA6'
    };
    if (Math.random() > 0.5) {
      delete radarTitleMap.hot;
    }
    const res: G2RadarData[] = [];
    radarOriginData.forEach((item: { [key: string]: NzSafeAny }) => {
      Object.keys(item).forEach(key => {
        if (key !== 'name') {
          res.push({
            name: item.name,
            label: radarTitleMap[key],
            value: item[key]
          });
        }
      });
    });
    this.radarData = res;
  }

  handleClick(data: G2RadarClickItem): void {
    this.msg.info(\`\${data.item.label} - \${data.item.name} - \${data.item.value}\`);
  }
}`,lang:"ts",componentName:"ChartRadarBasicComponent",point:0,name:"basic",urls:"packages/chart/radar/demo/basic.md",type:"demo"}]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["app-chart-radar"]],hostVars:2,hostBindings:function(n,a){n&2&&y("d-block","true")},standalone:!0,features:[u],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,a){n&1&&(s(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),s(4,"code-box",3),i(5,`
          `),p(6,"chart-radar-basic"),i(7,`
        `),c(),i(8,`
      `),c()()()),n&2&&(l("codes",a.codes)("item",a.item),d(1),l("nzGutter",16),d(3),l("item",a.codes[0]),b("id",a.codes[0].id))},dependencies:[S,E,So,N,G,w],encapsulation:2});let o=t;return o})();function oa(o,t){if(o&1&&(i(0,`
          `),s(1,"tr"),i(2,`
            `),s(3,"td"),i(4),c(),i(5,`
            `),s(6,"td"),i(7,`
              `),p(8,"g2-single-bar",3),i(9,`
            `),c(),i(10,`
            `),s(11,"td"),i(12,`
              `),p(13,"g2-single-bar",4),i(14,`
            `),c(),i(15,`
          `),c(),i(16,`
        `)),o&2){let r=t.$implicit,e=t.$index;d(4),L(e+1),d(4),l("value",r.value),d(5),l("value",r.other)}}var wo=(()=>{let t=class t{constructor(){this.list=new Array(5).fill({}).map(()=>({id:Math.floor(Math.random()*1e4),value:Math.floor(Math.random()*100),other:Math.floor(Math.random()*100)>50?Math.floor(Math.random()*100):-Math.floor(Math.random()*100)}))}refresh(){this.list.forEach(e=>{e.value=Math.floor(Math.random()*100),e.other=Math.floor(Math.random()*100)>50?Math.floor(Math.random()*100):-Math.floor(Math.random()*100)})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-single-bar-basic"]],standalone:!0,features:[u],decls:27,vars:2,consts:[["nz-button","","nzType","primary",3,"click"],[3,"nzData","nzShowPagination"],["nzWidth","350px"],["height","24",3,"value"],["height","60","min","-100","line","",3,"value"]],template:function(n,a){n&1&&(i(0,`
    `),s(1,"button",0),T("click",function(){return a.refresh()}),i(2,"Refresh"),c(),i(3,`
    `),s(4,"nz-table",1),i(5,`
      `),s(6,"thead"),i(7,`
        `),s(8,"tr"),i(9,`
          `),s(10,"th"),i(11,"\u5E8F\u53F7"),c(),i(12,`
          `),s(13,"th",2),i(14,"\u670D\u52A1\u8C03\u7528\u6B21\u6570"),c(),i(15,`
          `),s(16,"th",2),i(17,"\u6570\u636E\u6709\u8D1F\u503C"),c(),i(18,`
        `),c(),i(19,`
      `),c(),i(20,`
      `),s(21,"tbody"),i(22,`
        `),_t(23,oa,17,3,null,null,St),c(),i(25,`
    `),c(),i(26,`
  `)),n&2&&(d(4),l("nzData",a.list)("nzShowPagination",!1),wt(23,a.list))},dependencies:[tt,X,Y,K,_n,kn,Mn,Dn,Sn,zn,Tn,Ln,Ct],styles:["[_nghost-%COMP%]     .ant-table tbody>tr>td{padding:0}"]});let o=t;return o})();var Go=(()=>{let t=class t{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/single-bar/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u5355\u4E00\u67F1\u72B6\u56FE\u66F4\u9002\u5408\u5728\u5217\u8868\u4E2D\u5C55\u793A\u7B80\u5355\u7684\u533A\u95F4\u6570\u636E\uFF0C\u7B80\u6D01\u7684\u8868\u73B0\u65B9\u5F0F\u53EF\u4EE5\u5F88\u597D\u7684\u51CF\u5C11\u5927\u6570\u636E\u91CF\u7684\u89C6\u89C9\u5C55\u73B0\u538B\u529B\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-single-bar"><a class="lake-link"><i data-anchor="g2-single-bar"></i></a>g2-single-bar</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[plusColor]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>#40a9ff</code></td></tr><tr><td><code>[minusColor]</code></td><td>\u8D1F\u503C\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>#ff4d4f</code></td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td><code>60</code></td></tr><tr><td><code>[barSize]</code></td><td>\u67F1\u72B6\u9AD8\u5EA6</td><td><code>number</code></td><td><code>30</code></td></tr><tr><td><code>[min]</code></td><td>\u6700\u5C0F\u503C</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[max]</code></td><td>\u6700\u5927\u503C\uFF0C\u82E5\u5C0F\u4E8E0\u8868\u793A\u663E\u793A\u8D1F\u503C</td><td><code>number</code></td><td><code>100</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>any</code></td><td><code>0</code></td></tr><tr><td><code>[value]</code></td><td>\u503C</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[format]</code></td><td>\u663E\u793A\u503C\u683C\u5F0F</td><td><code>(value: number) => string</code></td><td>-</td></tr><tr><td><code>[textStyle]</code></td><td>\u663E\u793A\u503C\u6837\u5F0F</td><td><code>any</code></td><td><code>{ fontSize: 12, color: '#595959' }</code></td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table>`,meta:{title:"g2-single-bar",subtitle:"\u5355\u4E00\u67F1\u72B6\u56FE",cols:1,type:"G2",module:"import { G2SingleBarModule } from '@delon/chart/single-bar';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-single-bar",title:"g2-single-bar",h:3}]}]}},demo:!0},this.codes=[{id:"chart-single-bar-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component, ViewEncapsulation } from '@angular/core';

import { G2SingleBarModule } from '@delon/chart/single-bar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'chart-single-bar-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <nz-table [nzData]="list" [nzShowPagination]="false">
      <thead>
        <tr>
          <th>\u5E8F\u53F7</th>
          <th nzWidth="350px">\u670D\u52A1\u8C03\u7528\u6B21\u6570</th>
          <th nzWidth="350px">\u6570\u636E\u6709\u8D1F\u503C</th>
        </tr>
      </thead>
      <tbody>
        @for (i of list; track $index) {
          <tr>
            <td>{{ $index + 1 }}</td>
            <td>
              <g2-single-bar height="24" [value]="i.value" />
            </td>
            <td>
              <g2-single-bar height="60" [value]="i.other" min="-100" line />
            </td>
          </tr>
        }
      </tbody>
    </nz-table>
  \`,
  styles: [
    \`
      :host ::ng-deep .ant-table tbody > tr > td {
        padding: 0;
      }
    \`
  ],
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
  imports: [NzButtonModule, NzTableModule, G2SingleBarModule]
})
export class ChartSingleBarBasicComponent {
  list: Array<{ id: number; value: number; other: number }> = new Array(5).fill({}).map(() => ({
    id: Math.floor(Math.random() * 10000),
    value: Math.floor(Math.random() * 100),
    other: Math.floor(Math.random() * 100) > 50 ? Math.floor(Math.random() * 100) : -Math.floor(Math.random() * 100)
  }));

  refresh(): void {
    this.list.forEach(v => {
      v.value = Math.floor(Math.random() * 100);
      v.other =
        Math.floor(Math.random() * 100) > 50 ? Math.floor(Math.random() * 100) : -Math.floor(Math.random() * 100);
    });
  }
}`,lang:"ts",componentName:"ChartSingleBarBasicComponent",point:0,name:"basic",urls:"packages/chart/single-bar/demo/basic.md",type:"demo"}]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["app-chart-single-bar"]],hostVars:2,hostBindings:function(n,a){n&2&&y("d-block","true")},standalone:!0,features:[u],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,a){n&1&&(s(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),s(4,"code-box",3),i(5,`
          `),p(6,"chart-single-bar-basic"),i(7,`
        `),c(),i(8,`
      `),c()()()),n&2&&(l("codes",a.codes)("item",a.item),d(1),l("nzGutter",16),d(3),l("item",a.codes[0]),b("id",a.codes[0].id))},dependencies:[S,E,wo,N,G,w],encapsulation:2});let o=t;return o})();var No=(()=>{let t=class t{constructor(e){this.msg=e,this.tags=[],this.refresh()}refresh(){let e=(n=1,a=10)=>Math.floor(Math.random()*(a-n+1)+n);this.tags=[{value:e(),name:"NG-ALAIN"},{value:e(),name:"AntV"},{value:e(),name:"F2"},{value:e(),name:"G2"},{value:e(),name:"G6"},{value:e(),name:"DataSet"},{value:e(),name:"\u58A8\u8005\u5B66\u9662"},{value:e(),name:"Analysis"},{value:e(),name:"Data Mining"},{value:e(),name:"Data Vis"},{value:e(),name:"Design"},{value:e(),name:"Grammar"},{value:e(),name:"Graphics"},{value:e(),name:"Graph"},{value:e(),name:"Hierarchy"},{value:e(),name:"Labeling"},{value:e(),name:"Layout"},{value:e(),name:"Quantitative"},{value:e(),name:"Relation"},{value:e(),name:"Statistics"},{value:e(),name:"\u53EF\u89C6\u5316"},{value:e(),name:"\u6570\u636E"},{value:e(),name:"\u6570\u636E\u53EF\u89C6\u5316"},{value:e(),name:"Arc Diagram"},{value:e(),name:"Bar Chart"},{value:e(),name:"Canvas"},{value:e(),name:"Chart"},{value:e(),name:"DAG"},{value:e(),name:"DG"},{value:e(),name:"Facet"},{value:e(),name:"Geo"},{value:e(),name:"Line"},{value:e(),name:"MindMap"},{value:e(),name:"Pie"},{value:e(),name:"Pizza Chart"},{value:e(),name:"Punch Card"},{value:e(),name:"SVG"},{value:e(),name:"Sunburst"},{value:e(),name:"Tree"},{value:e(),name:"UML"},{value:e(),name:"Chart"},{value:e(),name:"View"},{value:e(),name:"Geom"},{value:e(),name:"Shape"},{value:e(),name:"Scale"},{value:e(),name:"Animate"},{value:e(),name:"Global"},{value:e(),name:"Slider"},{value:e(),name:"Connector"},{value:e(),name:"Transform"},{value:e(),name:"Util"},{value:e(),name:"DomUtil"},{value:e(),name:"MatrixUtil"},{value:e(),name:"PathUtil"},{value:e(),name:"G"},{value:e(),name:"2D"},{value:e(),name:"3D"},{value:e(),name:"Line"},{value:e(),name:"Area"},{value:e(),name:"Interval"},{value:e(),name:"Schema"},{value:e(),name:"Edge"},{value:e(),name:"Polygon"},{value:e(),name:"Heatmap"},{value:e(),name:"Render"},{value:e(),name:"Tooltip"},{value:e(),name:"Axis"},{value:e(),name:"Guide"},{value:e(),name:"Coord"},{value:e(),name:"Legend"},{value:e(),name:"Path"},{value:e(),name:"Helix"},{value:e(),name:"Theta"},{value:e(),name:"Rect"},{value:e(),name:"Polar"},{value:e(),name:"Dsv"},{value:e(),name:"Csv"},{value:e(),name:"Tsv"},{value:e(),name:"GeoJSON"},{value:e(),name:"TopoJSON"},{value:e(),name:"Filter"},{value:e(),name:"Map"},{value:e(),name:"Pick"},{value:e(),name:"Rename"},{value:e(),name:"Filter"},{value:e(),name:"Map"},{value:e(),name:"Pick"},{value:e(),name:"Rename"},{value:e(),name:"Reverse"},{value:e(),name:"sort"},{value:e(),name:"Subset"},{value:e(),name:"Partition"},{value:e(),name:"Imputation"},{value:e(),name:"Fold"},{value:e(),name:"Aggregate"},{value:e(),name:"Proportion"},{value:e(),name:"Histogram"},{value:e(),name:"Quantile"},{value:e(),name:"Treemap"},{value:e(),name:"Hexagon"},{value:e(),name:"Binning"},{value:e(),name:"kernel"},{value:e(),name:"Regression"},{value:e(),name:"Density"},{value:e(),name:"Sankey"},{value:e(),name:"Voronoi"},{value:e(),name:"Projection"},{value:e(),name:"Centroid"},{value:e(),name:"H5"},{value:e(),name:"Mobile"},{value:e(),name:"K\u7EBF\u56FE"},{value:e(),name:"\u5173\u7CFB\u56FE"},{value:e(),name:"\u70DB\u5F62\u56FE"},{value:e(),name:"\u80A1\u7968\u56FE"},{value:e(),name:"\u76F4\u65B9\u56FE"},{value:e(),name:"\u91D1\u5B57\u5854\u56FE"},{value:e(),name:"\u5206\u9762"},{value:e(),name:"\u5357\u4E01\u683C\u5C14\u73AB\u7470\u56FE"},{value:e(),name:"\u997C\u56FE"},{value:e(),name:"\u7EBF\u56FE"},{value:e(),name:"\u70B9\u56FE"},{value:e(),name:"\u6563\u70B9\u56FE"},{value:e(),name:"\u5B50\u5F39\u56FE"},{value:e(),name:"\u67F1\u72B6\u56FE"},{value:e(),name:"\u4EEA\u8868\u76D8"},{value:e(),name:"\u6C14\u6CE1\u56FE"},{value:e(),name:"\u6F0F\u6597\u56FE"},{value:e(),name:"\u70ED\u529B\u56FE"},{value:e(),name:"\u7389\u73A6\u56FE"},{value:e(),name:"\u76F4\u65B9\u56FE"},{value:e(),name:"\u77E9\u5F62\u6811\u56FE"},{value:e(),name:"\u7BB1\u5F62\u56FE"},{value:e(),name:"\u8272\u5757\u56FE"},{value:e(),name:"\u87BA\u65CB\u56FE"},{value:e(),name:"\u8BCD\u4E91"},{value:e(),name:"\u8BCD\u4E91\u56FE"},{value:e(),name:"\u96F7\u8FBE\u56FE"},{value:e(),name:"\u9762\u79EF\u56FE"},{value:e(),name:"\u9A6C\u8D5B\u514B\u56FE"},{value:e(),name:"\u76D2\u987B\u56FE"},{value:e(),name:"\u5750\u6807\u8F74"},{value:e(),name:""},{value:e(),name:"Jacques Bertin"},{value:e(),name:"Leland Wilkinson"},{value:e(),name:"William Playfair"},{value:e(),name:"\u5173\u8054"},{value:e(),name:"\u5206\u5E03"},{value:e(),name:"\u533A\u95F4"},{value:e(),name:"\u5360\u6BD4"},{value:e(),name:"\u5730\u56FE"},{value:e(),name:"\u65F6\u95F4"},{value:e(),name:"\u6BD4\u8F83"},{value:e(),name:"\u6D41\u7A0B"},{value:e(),name:"\u8D8B\u52BF"},{value:e(),name:"\u4EA6\u53F6"},{value:e(),name:"\u518D\u98DE"},{value:e(),name:"\u5B8C\u767D"},{value:e(),name:"\u5DF4\u601D"},{value:e(),name:"\u5F20\u521D\u5C18"},{value:e(),name:"\u5FA1\u672F"},{value:e(),name:"\u6709\u7530"},{value:e(),name:"\u6C89\u9C7C"},{value:e(),name:"\u7389\u4F2F"},{value:e(),name:"\u753B\u5EB7"},{value:e(),name:"\u796F\u9038"},{value:e(),name:"\u7EDD\u4E91"},{value:e(),name:"\u7F57\u5BAA"},{value:e(),name:"\u8427\u5E86"},{value:e(),name:"\u8463\u73CA\u73CA"},{value:e(),name:"\u9646\u6C89"},{value:e(),name:"\u987E\u503E"},{value:e(),name:"Domo"},{value:e(),name:"GPL"},{value:e(),name:"PAI"},{value:e(),name:"SPSS"},{value:e(),name:"SYSTAT"},{value:e(),name:"Tableau"},{value:e(),name:"D3"},{value:e(),name:"Vega"},{value:e(),name:"\u7EDF\u8BA1\u56FE\u8868"}]}handleClick(e){this.msg.info(`${e.item.name} - ${e.item.value}`)}};t.\u0275fac=function(n){return new(n||t)(U(et))},t.\u0275cmp=m({type:t,selectors:[["chart-tag-cloud-basic"]],standalone:!0,features:[u],decls:6,vars:1,consts:[["nz-button","","nzType","primary",3,"click"],["height","400",3,"data","clickItem"]],template:function(n,a){n&1&&(i(0,`
    `),s(1,"button",0),T("click",function(){return a.refresh()}),i(2,"Refresh"),c(),i(3,`
    `),s(4,"g2-tag-cloud",1),T("clickItem",function(f){return a.handleClick(f)}),c(),i(5,`
  `)),n&2&&(d(4),l("data",a.tags))},dependencies:[tt,X,Y,K,Vn,Xt],encapsulation:2});let o=t;return o})();var Io=(()=>{let t=class t{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/tag-cloud/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u6807\u7B7E\u4E91\u662F\u4E00\u5957\u76F8\u5173\u7684\u6807\u7B7E\u4EE5\u53CA\u4E0E\u6B64\u76F8\u5E94\u7684\u6743\u91CD\u5C55\u793A\u65B9\u5F0F\uFF0C\u4E00\u822C\u5178\u578B\u7684\u6807\u7B7E\u4E91\u6709 30 \u81F3 150 \u4E2A\u6807\u7B7E\uFF0C\u800C\u6743\u91CD\u5F71\u54CD\u4F7F\u7528\u7684\u5B57\u4F53\u5927\u5C0F\u6216\u5176\u4ED6\u89C6\u89C9\u6548\u679C\u3002</p></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-tag-cloud"><a class="lake-link"><i data-anchor="g2-tag-cloud"></i></a>g2-tag-cloud</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>200</code></td></tr><tr><td><code>[height]</code></td><td>\u9AD8\u5EA6\u503C</td><td><code>number</code></td><td><code>200</code></td></tr><tr><td><code>[width]</code></td><td>\u5BBD\u5EA6\u503C\uFF0C\u82E5\u4E0D\u6307\u5B9A\u81EA\u52A8\u6309\u5BBF\u4E3B\u5143\u7D20\u7684\u5BBD\u5EA6</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E</td><td><code>G2TagCloudData[]</code></td><td><code>[]</code></td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2TagCloudClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2TagCloudData"><a class="lake-link"><i data-anchor="G2TagCloudData"></i></a>G2TagCloudData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[name]</code></td><td>\u540D\u79F0</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[value]</code></td><td>\u503C</td><td><code>number</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-tag-cloud",subtitle:"\u6807\u7B7E\u4E91",cols:1,type:"G2",module:"import { G2TagCloudModule } from '@delon/chart/tag-cloud';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-tag-cloud",title:"g2-tag-cloud",h:3},{id:"G2TagCloudData",title:"G2TagCloudData",h:3}]}]}},demo:!0},this.codes=[{id:"chart-tag-cloud-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

import { G2TagCloudClickItem, G2TagCloudData, G2TagCloudModule } from '@delon/chart/tag-cloud';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-tag-cloud-basic',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <g2-tag-cloud [data]="tags" height="400" (clickItem)="handleClick($event)" />
  \`,
  standalone: true,
  imports: [NzButtonModule, G2TagCloudModule]
})
export class ChartTagCloudBasicComponent {
  tags: G2TagCloudData[] = [];

  constructor(private msg: NzMessageService) {
    this.refresh();
  }

  refresh(): void {
    const rv = (min: number = 1, max: number = 10): number => Math.floor(Math.random() * (max - min + 1) + min);

    this.tags = [
      { value: rv(), name: 'NG-ALAIN' },
      { value: rv(), name: 'AntV' },
      { value: rv(), name: 'F2' },
      { value: rv(), name: 'G2' },
      { value: rv(), name: 'G6' },
      { value: rv(), name: 'DataSet' },
      { value: rv(), name: '\u58A8\u8005\u5B66\u9662' },
      { value: rv(), name: 'Analysis' },
      { value: rv(), name: 'Data Mining' },
      { value: rv(), name: 'Data Vis' },
      { value: rv(), name: 'Design' },
      { value: rv(), name: 'Grammar' },
      { value: rv(), name: 'Graphics' },
      { value: rv(), name: 'Graph' },
      { value: rv(), name: 'Hierarchy' },
      { value: rv(), name: 'Labeling' },
      { value: rv(), name: 'Layout' },
      { value: rv(), name: 'Quantitative' },
      { value: rv(), name: 'Relation' },
      { value: rv(), name: 'Statistics' },
      { value: rv(), name: '\u53EF\u89C6\u5316' },
      { value: rv(), name: '\u6570\u636E' },
      { value: rv(), name: '\u6570\u636E\u53EF\u89C6\u5316' },
      { value: rv(), name: 'Arc Diagram' },
      { value: rv(), name: 'Bar Chart' },
      { value: rv(), name: 'Canvas' },
      { value: rv(), name: 'Chart' },
      { value: rv(), name: 'DAG' },
      { value: rv(), name: 'DG' },
      { value: rv(), name: 'Facet' },
      { value: rv(), name: 'Geo' },
      { value: rv(), name: 'Line' },
      { value: rv(), name: 'MindMap' },
      { value: rv(), name: 'Pie' },
      { value: rv(), name: 'Pizza Chart' },
      { value: rv(), name: 'Punch Card' },
      { value: rv(), name: 'SVG' },
      { value: rv(), name: 'Sunburst' },
      { value: rv(), name: 'Tree' },
      { value: rv(), name: 'UML' },
      { value: rv(), name: 'Chart' },
      { value: rv(), name: 'View' },
      { value: rv(), name: 'Geom' },
      { value: rv(), name: 'Shape' },
      { value: rv(), name: 'Scale' },
      { value: rv(), name: 'Animate' },
      { value: rv(), name: 'Global' },
      { value: rv(), name: 'Slider' },
      { value: rv(), name: 'Connector' },
      { value: rv(), name: 'Transform' },
      { value: rv(), name: 'Util' },
      { value: rv(), name: 'DomUtil' },
      { value: rv(), name: 'MatrixUtil' },
      { value: rv(), name: 'PathUtil' },
      { value: rv(), name: 'G' },
      { value: rv(), name: '2D' },
      { value: rv(), name: '3D' },
      { value: rv(), name: 'Line' },
      { value: rv(), name: 'Area' },
      { value: rv(), name: 'Interval' },
      { value: rv(), name: 'Schema' },
      { value: rv(), name: 'Edge' },
      { value: rv(), name: 'Polygon' },
      { value: rv(), name: 'Heatmap' },
      { value: rv(), name: 'Render' },
      { value: rv(), name: 'Tooltip' },
      { value: rv(), name: 'Axis' },
      { value: rv(), name: 'Guide' },
      { value: rv(), name: 'Coord' },
      { value: rv(), name: 'Legend' },
      { value: rv(), name: 'Path' },
      { value: rv(), name: 'Helix' },
      { value: rv(), name: 'Theta' },
      { value: rv(), name: 'Rect' },
      { value: rv(), name: 'Polar' },
      { value: rv(), name: 'Dsv' },
      { value: rv(), name: 'Csv' },
      { value: rv(), name: 'Tsv' },
      { value: rv(), name: 'GeoJSON' },
      { value: rv(), name: 'TopoJSON' },
      { value: rv(), name: 'Filter' },
      { value: rv(), name: 'Map' },
      { value: rv(), name: 'Pick' },
      { value: rv(), name: 'Rename' },
      { value: rv(), name: 'Filter' },
      { value: rv(), name: 'Map' },
      { value: rv(), name: 'Pick' },
      { value: rv(), name: 'Rename' },
      { value: rv(), name: 'Reverse' },
      { value: rv(), name: 'sort' },
      { value: rv(), name: 'Subset' },
      { value: rv(), name: 'Partition' },
      { value: rv(), name: 'Imputation' },
      { value: rv(), name: 'Fold' },
      { value: rv(), name: 'Aggregate' },
      { value: rv(), name: 'Proportion' },
      { value: rv(), name: 'Histogram' },
      { value: rv(), name: 'Quantile' },
      { value: rv(), name: 'Treemap' },
      { value: rv(), name: 'Hexagon' },
      { value: rv(), name: 'Binning' },
      { value: rv(), name: 'kernel' },
      { value: rv(), name: 'Regression' },
      { value: rv(), name: 'Density' },
      { value: rv(), name: 'Sankey' },
      { value: rv(), name: 'Voronoi' },
      { value: rv(), name: 'Projection' },
      { value: rv(), name: 'Centroid' },
      { value: rv(), name: 'H5' },
      { value: rv(), name: 'Mobile' },
      { value: rv(), name: 'K\u7EBF\u56FE' },
      { value: rv(), name: '\u5173\u7CFB\u56FE' },
      { value: rv(), name: '\u70DB\u5F62\u56FE' },
      { value: rv(), name: '\u80A1\u7968\u56FE' },
      { value: rv(), name: '\u76F4\u65B9\u56FE' },
      { value: rv(), name: '\u91D1\u5B57\u5854\u56FE' },
      { value: rv(), name: '\u5206\u9762' },
      { value: rv(), name: '\u5357\u4E01\u683C\u5C14\u73AB\u7470\u56FE' },
      { value: rv(), name: '\u997C\u56FE' },
      { value: rv(), name: '\u7EBF\u56FE' },
      { value: rv(), name: '\u70B9\u56FE' },
      { value: rv(), name: '\u6563\u70B9\u56FE' },
      { value: rv(), name: '\u5B50\u5F39\u56FE' },
      { value: rv(), name: '\u67F1\u72B6\u56FE' },
      { value: rv(), name: '\u4EEA\u8868\u76D8' },
      { value: rv(), name: '\u6C14\u6CE1\u56FE' },
      { value: rv(), name: '\u6F0F\u6597\u56FE' },
      { value: rv(), name: '\u70ED\u529B\u56FE' },
      { value: rv(), name: '\u7389\u73A6\u56FE' },
      { value: rv(), name: '\u76F4\u65B9\u56FE' },
      { value: rv(), name: '\u77E9\u5F62\u6811\u56FE' },
      { value: rv(), name: '\u7BB1\u5F62\u56FE' },
      { value: rv(), name: '\u8272\u5757\u56FE' },
      { value: rv(), name: '\u87BA\u65CB\u56FE' },
      { value: rv(), name: '\u8BCD\u4E91' },
      { value: rv(), name: '\u8BCD\u4E91\u56FE' },
      { value: rv(), name: '\u96F7\u8FBE\u56FE' },
      { value: rv(), name: '\u9762\u79EF\u56FE' },
      { value: rv(), name: '\u9A6C\u8D5B\u514B\u56FE' },
      { value: rv(), name: '\u76D2\u987B\u56FE' },
      { value: rv(), name: '\u5750\u6807\u8F74' },
      { value: rv(), name: '' },
      { value: rv(), name: 'Jacques Bertin' },
      { value: rv(), name: 'Leland Wilkinson' },
      { value: rv(), name: 'William Playfair' },
      { value: rv(), name: '\u5173\u8054' },
      { value: rv(), name: '\u5206\u5E03' },
      { value: rv(), name: '\u533A\u95F4' },
      { value: rv(), name: '\u5360\u6BD4' },
      { value: rv(), name: '\u5730\u56FE' },
      { value: rv(), name: '\u65F6\u95F4' },
      { value: rv(), name: '\u6BD4\u8F83' },
      { value: rv(), name: '\u6D41\u7A0B' },
      { value: rv(), name: '\u8D8B\u52BF' },
      { value: rv(), name: '\u4EA6\u53F6' },
      { value: rv(), name: '\u518D\u98DE' },
      { value: rv(), name: '\u5B8C\u767D' },
      { value: rv(), name: '\u5DF4\u601D' },
      { value: rv(), name: '\u5F20\u521D\u5C18' },
      { value: rv(), name: '\u5FA1\u672F' },
      { value: rv(), name: '\u6709\u7530' },
      { value: rv(), name: '\u6C89\u9C7C' },
      { value: rv(), name: '\u7389\u4F2F' },
      { value: rv(), name: '\u753B\u5EB7' },
      { value: rv(), name: '\u796F\u9038' },
      { value: rv(), name: '\u7EDD\u4E91' },
      { value: rv(), name: '\u7F57\u5BAA' },
      { value: rv(), name: '\u8427\u5E86' },
      { value: rv(), name: '\u8463\u73CA\u73CA' },
      { value: rv(), name: '\u9646\u6C89' },
      { value: rv(), name: '\u987E\u503E' },
      { value: rv(), name: 'Domo' },
      { value: rv(), name: 'GPL' },
      { value: rv(), name: 'PAI' },
      { value: rv(), name: 'SPSS' },
      { value: rv(), name: 'SYSTAT' },
      { value: rv(), name: 'Tableau' },
      { value: rv(), name: 'D3' },
      { value: rv(), name: 'Vega' },
      { value: rv(), name: '\u7EDF\u8BA1\u56FE\u8868' }
    ];
  }

  handleClick(data: G2TagCloudClickItem): void {
    this.msg.info(\`\${data.item.name} - \${data.item.value}\`);
  }
}`,lang:"ts",componentName:"ChartTagCloudBasicComponent",point:0,name:"basic",urls:"packages/chart/tag-cloud/demo/basic.md",type:"demo"}]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["app-chart-tag-cloud"]],hostVars:2,hostBindings:function(n,a){n&2&&y("d-block","true")},standalone:!0,features:[u],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,a){n&1&&(s(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),s(4,"code-box",3),i(5,`
          `),p(6,"chart-tag-cloud-basic"),i(7,`
        `),c(),i(8,`
      `),c()()()),n&2&&(l("codes",a.codes)("item",a.item),d(1),l("nzGutter",16),d(3),l("item",a.codes[0]),b("id",a.codes[0].id))},dependencies:[S,E,No,N,G,w],encapsulation:2});let o=t;return o})();var ia=()=>({y1:"\u5BA2\u6D41\u91CF",y2:"\u652F\u4ED8\u7B14\u6570"}),Eo=(()=>{let t=class t{constructor(){this.msg=dt(et),this.chartData=[]}ngOnInit(){for(let e=0;e<20;e+=1)this.chartData.push({time:new Date().getTime()+1e3*60*30*e,y1:Math.floor(Math.random()*100)+1e3,y2:Math.floor(Math.random()*100)+10})}handleClick(e){this.msg.info(`\u5BA2\u6D41\u91CF: ${e.item.y1}, \u652F\u4ED8\u7B14\u6570: ${e.item.y2}`)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-timeline-basic"]],standalone:!0,features:[u],decls:2,vars:4,consts:[[3,"data","titleMap","height","clickItem"]],template:function(n,a){n&1&&(i(0," "),s(1,"g2-timeline",0),T("clickItem",function(f){return a.handleClick(f)}),c()),n&2&&(d(1),l("data",a.chartData)("titleMap",le(3,ia))("height",200))},dependencies:[Ce,lt],encapsulation:2});let o=t;return o})();function aa(o,t){if(o&1){let r=de();i(0,`
      `),s(1,"button",0),T("click",function(){let a=ie(r).$implicit,h=k();return ae(h.refresh(a))}),i(2),c(),i(3,`
    `)}if(o&2){let r=t.$implicit;d(2),Nt("",r," axis")}}var Bo=(()=>{let t=class t{constructor(){this.chartData=[],this.titleMap={y1:"\u6307\u68071",y2:"\u6307\u68072"},this.maxAxis=2,this.axisList=new Array(5).fill(0).map((e,n)=>n+1),this.refresh()}genData(e){let n={y1:""};for(let h=1;h<=e;h++)n[`y${h}`]=`\u6307\u6807${h}`;let a=[];for(let h=0;h<20;h+=1){let f={time:new Date().getTime()+18e5*h,y1:0};for(let D=1;D<=e;D++)f[`y${D}`]=Math.floor(Math.random()*100)+500*D;a.push(f)}return{titleMap:n,data:a}}refresh(e){this.maxAxis=e??this.maxAxis;let{titleMap:n,data:a}=this.genData(this.maxAxis);this.chartData=a,this.titleMap=n}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-timeline-max-axis"]],standalone:!0,features:[u],decls:8,vars:4,consts:[["nz-button","","nzType","primary",3,"click"],[3,"maxAxis","data","titleMap","height"]],template:function(n,a){n&1&&(i(0,`
    `),s(1,"button",0),T("click",function(){return a.refresh()}),i(2,"Refresh"),c(),i(3,`
    `),_t(4,aa,4,1,null,null,St),p(6,"g2-timeline",1),i(7,`
  `)),n&2&&(wt(4,a.axisList),d(6),l("maxAxis",a.maxAxis)("data",a.chartData)("titleMap",a.titleMap)("height",300))},dependencies:[Ce,lt,tt,X,Y,K],encapsulation:2});let o=t;return o})();var ra=()=>({y1:"\u5BA2\u6D41\u91CF",y2:"\u652F\u4ED8\u7B14\u6570"}),Fo=(()=>{let t=class t{constructor(){this.msg=dt(et),this.chartData=[]}ngOnInit(){for(let e=0;e<20;e+=1)this.chartData.push({time:new Date().getTime()+1e3*60*60*24*e,y1:Math.floor(Math.random()*100)+1e3,y2:Math.floor(Math.random()*100)+10})}handleClick(e){this.msg.info(`\u5BA2\u6D41\u91CF: ${e.item.y1}, \u652F\u4ED8\u7B14\u6570: ${e.item.y2}`)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-timeline-mask"]],standalone:!0,features:[u],decls:2,vars:4,consts:[["mask","MM\u6708DD\u65E5","maskSlider","MM\u6708dd\u65E5",3,"data","titleMap","height","clickItem"]],template:function(n,a){n&1&&(i(0," "),s(1,"g2-timeline",0),T("clickItem",function(f){return a.handleClick(f)}),c()),n&2&&(d(1),l("data",a.chartData)("titleMap",le(3,ra))("height",200))},dependencies:[Ce,lt],encapsulation:2});let o=t;return o})();var Ao=(()=>{let t=class t{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/timeline/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u4F7F\u7528 <code>timeline</code> \u7EC4\u4EF6\u53EF\u4EE5\u5B9E\u73B0\u5E26\u6709\u65F6\u95F4\u8F74\u7684\u67F1\u72B6\u56FE\u5C55\u73B0\uFF0C\u800C\u5176\u4E2D\u7684 <code>x</code> \u5C5E\u6027\uFF0C\u5219\u662F\u65F6\u95F4\u503C\u7684\u6307\u5411\uFF0C\u9ED8\u8BA4\u6700\u591A\u652F\u6301\u540C\u65F6\u5C55\u73B0\u4E24\u4E2A\u6307\u6807\uFF0C\u5206\u522B\u662F <code>y1</code> \u548C <code>y2</code>\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-timeline"><a class="lake-link"><i data-anchor="g2-timeline"></i></a>g2-timeline</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[repaint]</code></td><td>\u6570\u636E\u518D\u6B21\u53D8\u66F4\u65F6\u662F\u5426\u91CD\u7ED8</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[title]</code></td><td>\u56FE\u8868\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[maxAxis]</code></td><td>\u6700\u5927\u6307\u6807\u6570\u91CF</td><td><code>number</code></td><td><code>2</code></td></tr><tr><td><code>[data]</code></td><td>\u6570\u636E\uFF0C\u6CE8\uFF1A\u6839\u636E <code>maxAxis</code> \u503C\u4F20\u9012\u6307\u6807\u6570\u636E</td><td><code>G2TimelineData[]</code></td><td>-</td></tr><tr><td><code>[titleMap]</code></td><td>\u6307\u6807\u522B\u540D</td><td><code>G2TimelineMap</code></td><td>-</td></tr><tr><td><code>[colorMap]</code></td><td>\u989C\u8272</td><td><code>G2TimelineMap</code></td><td><code>{ y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' }</code></td></tr><tr><td><code>[height]</code></td><td>\u9AD8\u5EA6\u503C</td><td><code>number</code></td><td><code>400</code></td></tr><tr><td><code>[padding]</code></td><td>\u56FE\u8868\u5185\u90E8\u95F4\u8DDD</td><td><code>number[]</code></td><td><code>[40, 8, 64, 40]</code></td></tr><tr><td><code>[borderWidth]</code></td><td>\u7EBF\u6761</td><td><code>number</code></td><td><code>2</code></td></tr><tr><td><code>[mask]</code></td><td>\u65E5\u671F\u683C\u5F0F\uFF0C\u4F7F\u7528 <a target="_blank" href="https://g2.antv.vision/zh/docs/manual/tutorial/scale#time" data-url="https://g2.antv.vision/zh/docs/manual/tutorial/scale#time">G2 Mask\u65E5\u671F\u683C\u5F0F</a></td><td><code>string</code></td><td><code>HH:mm</code></td></tr><tr><td><code>[maskSlider]</code></td><td>\u6ED1\u52A8\u6761\u65E5\u671F\u683C\u5F0F\uFF0C\u4F7F\u7528 <a target="_blank" href="https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table" data-url="https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table">date-fns \u65E5\u671F\u683C\u5F0F</a></td><td><code>string</code></td><td><code>HH:mm</code></td></tr><tr><td><code>[position]</code></td><td>\u6807\u9898\u4F4D\u7F6E</td><td><code>'top','right','bottom','left'</code></td><td><code>'top'</code></td></tr><tr><td><code>[slider]</code></td><td>\u662F\u5426\u9700\u8981\u6ED1\u52A8\u6761</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[theme]</code></td><td>\u5B9A\u5236\u56FE\u8868\u4E3B\u9898</td><td><code>string | LooseObject</code></td><td>-</td></tr><tr><td><code>(clickItem)</code></td><td>\u70B9\u51FB\u9879\u56DE\u8C03</td><td><code>EventEmitter&lt;G2TimelineClickItem></code></td><td>-</td></tr><tr><td><code>(ready)</code></td><td>\u5F53G2\u5B8C\u6210\u521D\u59CB\u5316\u540E\u8C03\u7528</td><td><code>EventEmitter&lt;Chart></code></td><td>-</td></tr></tbody></table><h3 id="G2TimelineData"><a class="lake-link"><i data-anchor="G2TimelineData"></i></a>G2TimelineData</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[time]</code></td><td>\u65E5\u671F\u683C\u5F0F</td><td><code>Date | number</code></td><td>-</td></tr><tr><td><code>[y1]</code></td><td>\u6307\u68071\u6570\u636E</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[y2]</code></td><td>\u6307\u68072\u6570\u636E</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[y3]</code></td><td>\u6307\u68073\u6570\u636E</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[y4]</code></td><td>\u6307\u68074\u6570\u636E</td><td><code>number</code></td><td>-</td></tr><tr><td><code>[y5]</code></td><td>\u6307\u68075\u6570\u636E</td><td><code>number</code></td><td>-</td></tr></tbody></table><h3 id="G2TimelineMap"><a class="lake-link"><i data-anchor="G2TimelineMap"></i></a>G2TimelineMap</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[y1]</code></td><td>\u6307\u68071</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[y2]</code></td><td>\u6307\u68072</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[y3]</code></td><td>\u6307\u68073</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[y4]</code></td><td>\u6307\u68074</td><td><code>string</code></td><td>-</td></tr><tr><td><code>[y5]</code></td><td>\u6307\u68075</td><td><code>string</code></td><td>-</td></tr></tbody></table>`,meta:{title:"g2-timeline",subtitle:"\u6298\u7EBF\u56FE",cols:1,type:"G2",module:"import { G2TimelineModule } from '@delon/chart/timeline';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-timeline",title:"g2-timeline",h:3},{id:"G2TimelineData",title:"G2TimelineData",h:3},{id:"G2TimelineMap",title:"G2TimelineMap",h:3}]}]}},demo:!0},this.codes=[{id:"chart-timeline-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u5E26\u6709\u65F6\u95F4\u8F74\u7684\u56FE\u8868\u3002</p>",code:`import { Component, OnInit, inject } from '@angular/core';

import { G2TimelineClickItem, G2TimelineData, G2TimelineModule } from '@delon/chart/timeline';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-timeline-basic',
  template: \` <g2-timeline
    [data]="chartData"
    [titleMap]="{ y1: '\u5BA2\u6D41\u91CF', y2: '\u652F\u4ED8\u7B14\u6570' }"
    [height]="200"
    (clickItem)="handleClick($event)"
  />\`,
  standalone: true,
  imports: [G2TimelineModule]
})
export class ChartTimelineBasicComponent implements OnInit {
  private readonly msg = inject(NzMessageService);
  chartData: G2TimelineData[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 20; i += 1) {
      this.chartData.push({
        time: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 1000,
        y2: Math.floor(Math.random() * 100) + 10
      });
    }
  }

  handleClick(data: G2TimelineClickItem): void {
    this.msg.info(\`\u5BA2\u6D41\u91CF: \${data.item.y1}, \u652F\u4ED8\u7B14\u6570: \${data.item.y2}\`);
  }
}`,lang:"ts",componentName:"ChartTimelineBasicComponent",point:0,name:"basic",urls:"packages/chart/timeline/demo/basic.md",type:"demo"},{id:"chart-timeline-max-axis",meta:{order:1,title:{"zh-CN":"\u591A\u6307\u6807","en-US":"Multiple indicators"}},summary:"<p>\u5229\u7528 <code>maxAxis</code> \u5C5E\u6027\u6765\u8C03\u6574\u591A\u4E2A\u6307\u6807\uFF0C\u6700\u591A\u652F\u6301 <code>5</code> \u4E2A\u6307\u6807\u503C\u3002</p>",code:`import { Component } from '@angular/core';

import { G2TimelineData, G2TimelineMap, G2TimelineModule } from '@delon/chart/timeline';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'chart-timeline-max-axis',
  template: \`
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    @for (i of axisList; track $index) {
      <button nz-button (click)="refresh(i)" nzType="primary">{{ i }} axis</button>
    }
    <g2-timeline [maxAxis]="maxAxis" [data]="chartData" [titleMap]="titleMap" [height]="300" />
  \`,
  standalone: true,
  imports: [G2TimelineModule, NzButtonModule]
})
export class ChartTimelineMaxAxisComponent {
  chartData: G2TimelineData[] = [];
  titleMap: G2TimelineMap = { y1: '\u6307\u68071', y2: '\u6307\u68072' };
  maxAxis = 2;
  axisList = new Array(5).fill(0).map((_, idx) => idx + 1);

  constructor() {
    this.refresh();
  }

  private genData(max: number): { titleMap: G2TimelineMap; data: G2TimelineData[] } {
    const titleMap: G2TimelineMap = { y1: '' };
    for (let i = 1; i <= max; i++) {
      titleMap[\`y\${i}\`] = \`\u6307\u6807\${i}\`;
    }

    const data: G2TimelineData[] = [];
    for (let i = 0; i < 20; i += 1) {
      const item: G2TimelineData = {
        time: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: 0
      };
      for (let i = 1; i <= max; i++) {
        item[\`y\${i}\`] = Math.floor(Math.random() * 100) + 500 * i;
      }
      data.push(item);
    }
    return { titleMap, data };
  }

  refresh(max?: number): void {
    this.maxAxis = max ?? this.maxAxis;
    const { titleMap, data } = this.genData(this.maxAxis);
    this.chartData = data;
    this.titleMap = titleMap;
  }
}`,lang:"ts",componentName:"ChartTimelineMaxAxisComponent",point:1,name:"max-axis",urls:"packages/chart/timeline/demo/max-axis.md",type:"demo"},{id:"chart-timeline-mask",meta:{order:2,title:{"zh-CN":"\u65F6\u95F4\u683C\u5F0F\u5316","en-US":"Time mask format"}},summary:"<p>\u5229\u7528 <code>mask</code> \u548C <code>maskSlider</code> \u6765\u6539\u53D8\u65F6\u95F4\u683C\u5F0F\u3002</p>",code:`import { Component, OnInit, inject } from '@angular/core';

import { G2TimelineClickItem, G2TimelineData, G2TimelineModule } from '@delon/chart/timeline';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'chart-timeline-mask',
  template: \` <g2-timeline
    [data]="chartData"
    [titleMap]="{ y1: '\u5BA2\u6D41\u91CF', y2: '\u652F\u4ED8\u7B14\u6570' }"
    [height]="200"
    mask="MM\u6708DD\u65E5"
    maskSlider="MM\u6708dd\u65E5"
    (clickItem)="handleClick($event)"
  />\`,
  standalone: true,
  imports: [G2TimelineModule]
})
export class ChartTimelineMaskComponent implements OnInit {
  private readonly msg = inject(NzMessageService);
  chartData: G2TimelineData[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 20; i += 1) {
      this.chartData.push({
        time: new Date().getTime() + 1000 * 60 * 60 * 24 * i,
        y1: Math.floor(Math.random() * 100) + 1000,
        y2: Math.floor(Math.random() * 100) + 10
      });
    }
  }

  handleClick(data: G2TimelineClickItem): void {
    this.msg.info(\`\u5BA2\u6D41\u91CF: \${data.item.y1}, \u652F\u4ED8\u7B14\u6570: \${data.item.y2}\`);
  }
}`,lang:"ts",componentName:"ChartTimelineMaskComponent",point:2,name:"mask",urls:"packages/chart/timeline/demo/mask.md",type:"demo"}]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["app-chart-timeline"]],hostVars:2,hostBindings:function(n,a){n&2&&y("d-block","true")},standalone:!0,features:[u],decls:19,vars:9,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,a){n&1&&(s(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),s(4,"code-box",3),i(5,`
          `),p(6,"chart-timeline-basic"),i(7,`
        `),c(),i(8,`
      
        `),s(9,"code-box",3),i(10,`
          `),p(11,"chart-timeline-max-axis"),i(12,`
        `),c(),i(13,`
      
        `),s(14,"code-box",3),i(15,`
          `),p(16,"chart-timeline-mask"),i(17,`
        `),c(),i(18,`
      `),c()()()),n&2&&(l("codes",a.codes)("item",a.item),d(1),l("nzGutter",16),d(3),l("item",a.codes[0]),b("id",a.codes[0].id),d(5),l("item",a.codes[1]),b("id",a.codes[1].id),d(5),l("item",a.codes[2]),b("id",a.codes[2].id))},dependencies:[S,E,Eo,Bo,Fo,N,G,w],encapsulation:2});let o=t;return o})();var Po=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-trend-basic"]],standalone:!0,features:[u],decls:7,vars:0,consts:[["flag","up"],["flag","down",1,"ml-sm"]],template:function(n,a){n&1&&(i(0,`
    `),s(1,"trend",0),i(2,"12%"),c(),i(3,`
    `),s(4,"trend",1),i(5,"11%"),c(),i(6,`
  `))},dependencies:[be,yt],encapsulation:2});let o=t;return o})();var Oo=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-trend-reverse"]],standalone:!0,features:[u],decls:7,vars:0,consts:[["flag","up","reverseColor",""],["flag","down","reverseColor","",1,"ml-sm"]],template:function(n,a){n&1&&(i(0,`
    `),s(1,"trend",0),i(2,"12%"),c(),i(3,`
    `),s(4,"trend",1),i(5,"11%"),c(),i(6,`
  `))},dependencies:[be,yt],encapsulation:2});let o=t;return o})();var Ro=(()=>{let t=class t{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/trend/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u8D8B\u52BF\u7B26\u53F7\uFF0C\u6807\u8BB0\u4E0A\u5347\u548C\u4E0B\u964D\u8D8B\u52BF\u3002\u901A\u5E38\u7528\u7EFF\u8272\u4EE3\u8868\u201C\u597D\u201D\uFF0C\u7EA2\u8272\u4EE3\u8868\u201C\u4E0D\u597D\u201D\uFF0C\u80A1\u7968\u6DA8\u8DCC\u573A\u666F\u9664\u5916\u3002</p></section>',api:`<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="trend"><a class="lake-link"><i data-anchor="trend"></i></a>trend</h3><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[colorful]</code></td><td>\u662F\u5426\u5F69\u8272\u6807\u8BB0</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[flag]</code></td><td>\u4E0A\u5347\u4E0B\u964D\u6807\u8BC6</td><td><code>'up','down'</code></td><td>-</td></tr><tr><td><code>[reverseColor]</code></td><td>\u989C\u8272\u53CD\u8F6C</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>`,meta:{type:"G2",title:"trend",subtitle:"\u8D8B\u52BF\u6807\u8BB0",cols:1,module:"import { TrendModule } from '@delon/chart/trend';"},toc:[{id:"API",title:"API",h:2,children:[{id:"trend",title:"trend",h:3}]}]}},demo:!0},this.codes=[{id:"chart-trend-basic",meta:{order:0,title:"\u6F14\u793A"},summary:"<p>\u5728\u6570\u503C\u80CC\u540E\u6DFB\u52A0\u4E00\u4E2A\u5C0F\u56FE\u6807\u6765\u6807\u8BC6\u6DA8\u8DCC\u60C5\u51B5\u3002</p>",code:`import { Component } from '@angular/core';

import { TrendModule } from '@delon/chart/trend';

@Component({
  selector: 'chart-trend-basic',
  template: \`
    <trend flag="up">12%</trend>
    <trend flag="down" class="ml-sm">11%</trend>
  \`,
  standalone: true,
  imports: [TrendModule]
})
export class ChartTrendBasicComponent {}`,lang:"ts",componentName:"ChartTrendBasicComponent",point:0,name:"basic",urls:"packages/chart/trend/demo/basic.md",type:"demo"},{id:"chart-trend-reverse",meta:{order:1,title:"\u989C\u8272\u53CD\u8F6C"},summary:"<p>\u5728\u6570\u503C\u80CC\u540E\u6DFB\u52A0\u4E00\u4E2A\u5C0F\u56FE\u6807\u6765\u6807\u8BC6\u6DA8\u8DCC\u60C5\u51B5\u3002</p>",code:`import { Component } from '@angular/core';

import { TrendModule } from '@delon/chart/trend';

@Component({
  selector: 'chart-trend-reverse',
  template: \`
    <trend flag="up" reverseColor>12%</trend>
    <trend flag="down" reverseColor class="ml-sm">11%</trend>
  \`,
  standalone: true,
  imports: [TrendModule]
})
export class ChartTrendReverseComponent {}`,lang:"ts",componentName:"ChartTrendReverseComponent",point:1,name:"reverse",urls:"packages/chart/trend/demo/reverse.md",type:"demo"}]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["app-chart-trend"]],hostVars:2,hostBindings:function(n,a){n&2&&y("d-block","true")},standalone:!0,features:[u],decls:14,vars:7,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,a){n&1&&(s(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),s(4,"code-box",3),i(5,`
          `),p(6,"chart-trend-basic"),i(7,`
        `),c(),i(8,`
      
        `),s(9,"code-box",3),i(10,`
          `),p(11,"chart-trend-reverse"),i(12,`
        `),c(),i(13,`
      `),c()()()),n&2&&(l("codes",a.codes)("item",a.item),d(1),l("nzGutter",16),d(3),l("item",a.codes[0]),b("id",a.codes[0].id),d(5),l("item",a.codes[1]),b("id",a.codes[1].id))},dependencies:[S,E,Po,Oo,N,G,w],encapsulation:2});let o=t;return o})();var jo=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["chart-water-wave-basic"]],hostVars:2,hostBindings:function(n,a){n&2&&y("d-block",!0)},standalone:!0,features:[u],decls:3,vars:3,consts:[[3,"title","percent","height"]],template:function(n,a){n&1&&(i(0," "),p(1,"g2-water-wave",0),i(2," ")),n&2&&(d(1),l("title","\u8865\u8D34\u8D44\u91D1\u5269\u4F59")("percent",34)("height",161))},dependencies:[Un,zt],encapsulation:2});let o=t;return o})();var $o=(()=>{let t=class t{constructor(){this.item={cols:1,urls:{"zh-CN":"packages/chart/water-wave/index.md"},content:{"zh-CN":{content:'<section class="markdown"><p>\u6C34\u6CE2\u56FE\u662F\u4E00\u79CD\u6BD4\u4F8B\u7684\u5C55\u793A\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u66F4\u76F4\u89C2\u7684\u5C55\u793A\u5173\u952E\u503C\u7684\u5360\u6BD4\u3002</p><blockquote><p>\u9ED8\u8BA4\u4E0D\u652F\u6301\u7236\u5143\u7D20\u81EA\u9002\u5E94\uFF0C\u53EF\u4EE5\u76D1\u542C\u7236\u5143\u7D20\u7684\u53D8\u5316\u5E76\u4F7F\u7528 <code>render()</code> \u65B9\u6CD5\u6765\u91CD\u7F6E\u6E32\u67D3\u3002</p></blockquote></section>',api:'<h2 id="API"><a class="lake-link"><i data-anchor="API"></i></a>API</h2><h3 id="g2-water-wave"><a class="lake-link"><i data-anchor="g2-water-wave"></i></a>g2-water-wave</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>[animate]</code></td><td>\u662F\u5426\u663E\u793A\u52A8\u753B</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td><code>[delay]</code></td><td>\u5EF6\u8FDF\u6E32\u67D3\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>[title]</code></td><td>\u56FE\u8868\u6807\u9898</td><td><code>string,TemplateRef&lt;void></code></td><td>-</td></tr><tr><td><code>[height]</code></td><td>\u56FE\u8868\u9AD8\u5EA6</td><td><code>number</code></td><td><code>160</code></td></tr><tr><td><code>[color]</code></td><td>\u56FE\u8868\u989C\u8272</td><td><code>string</code></td><td><code>#1890FF</code></td></tr><tr><td><code>[percent]</code></td><td>\u8FDB\u5EA6\u6BD4\u4F8B</td><td><code>number</code></td><td>-</td></tr></tbody></table>',meta:{title:"g2-water-wave",subtitle:"\u6C34\u6CE2\u56FE",cols:1,type:"G2",module:"import { G2WaterWaveModule } from '@delon/chart/water-wave';"},toc:[{id:"API",title:"API",h:2,children:[{id:"g2-water-wave",title:"g2-water-wave",h:3}]}]}},demo:!0},this.codes=[{id:"chart-water-wave-basic",meta:{order:0,title:{"zh-CN":"\u57FA\u7840","en-US":"Basic"}},summary:"<p>\u57FA\u7840\u7528\u6CD5\u3002</p>",code:`import { Component } from '@angular/core';

import { G2WaterWaveModule } from '@delon/chart/water-wave';

@Component({
  selector: 'chart-water-wave-basic',
  template: \` <g2-water-wave [title]="'\u8865\u8D34\u8D44\u91D1\u5269\u4F59'" [percent]="34" [height]="161" /> \`,
  host: {
    '[class.d-block]': 'true'
  },
  standalone: true,
  imports: [G2WaterWaveModule]
})
export class ChartWaterWaveBasicComponent {}`,lang:"ts",componentName:"ChartWaterWaveBasicComponent",point:0,name:"basic",urls:"packages/chart/water-wave/demo/basic.md",type:"demo"}]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["app-chart-water-wave"]],hostVars:2,hostBindings:function(n,a){n&2&&y("d-block","true")},standalone:!0,features:[u],decls:9,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,a){n&1&&(s(0,"app-docs",0)(1,"div",1)(2,"div",2),i(3,`
        `),s(4,"code-box",3),i(5,`
          `),p(6,"chart-water-wave-basic"),i(7,`
        `),c(),i(8,`
      `),c()()()),n&2&&(l("codes",a.codes)("item",a.item),d(1),l("nzGutter",16),d(3),l("item",a.codes[0]),b("id",a.codes[0].id))},dependencies:[S,E,jo,N,G,w],encapsulation:2});let o=t;return o})();var rh=[{path:"",component:Fn,children:[{path:"",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"faq",redirectTo:"faq/zh",pathMatch:"full"},{path:"faq/:lang",component:qn},{path:"getting-started",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started/:lang",component:Zn},{path:"bar",redirectTo:"bar/zh",pathMatch:"full"},{path:"bar/:lang",component:Jn},{path:"card",redirectTo:"card/zh",pathMatch:"full"},{path:"card/:lang",component:to},{path:"chart-echarts",redirectTo:"chart-echarts/zh",pathMatch:"full"},{path:"chart-echarts/:lang",component:oo},{path:"custom",redirectTo:"custom/zh",pathMatch:"full"},{path:"custom/:lang",component:ao},{path:"gauge",redirectTo:"gauge/zh",pathMatch:"full"},{path:"gauge/:lang",component:co},{path:"mini-area",redirectTo:"mini-area/zh",pathMatch:"full"},{path:"mini-area/:lang",component:po},{path:"mini-bar",redirectTo:"mini-bar/zh",pathMatch:"full"},{path:"mini-bar/:lang",component:go},{path:"mini-progress",redirectTo:"mini-progress/zh",pathMatch:"full"},{path:"mini-progress/:lang",component:Co},{path:"number-info",redirectTo:"number-info/zh",pathMatch:"full"},{path:"number-info/:lang",component:Mo},{path:"pie",redirectTo:"pie/zh",pathMatch:"full"},{path:"pie/:lang",component:To},{path:"radar",redirectTo:"radar/zh",pathMatch:"full"},{path:"radar/:lang",component:_o},{path:"single-bar",redirectTo:"single-bar/zh",pathMatch:"full"},{path:"single-bar/:lang",component:Go},{path:"tag-cloud",redirectTo:"tag-cloud/zh",pathMatch:"full"},{path:"tag-cloud/:lang",component:Io},{path:"timeline",redirectTo:"timeline/zh",pathMatch:"full"},{path:"timeline/:lang",component:Ao},{path:"trend",redirectTo:"trend/zh",pathMatch:"full"},{path:"trend/:lang",component:Ro},{path:"water-wave",redirectTo:"water-wave/zh",pathMatch:"full"},{path:"water-wave/:lang",component:$o}]}];export{rh as routes};
