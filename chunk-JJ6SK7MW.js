import{b as Ge}from"./chunk-6EEOJUWQ.js";import{a as Ye,b as Ke}from"./chunk-UPFXGK3T.js";import{a as $e,e as Ue}from"./chunk-7US7IHHY.js";import{a as Qe,b as qe}from"./chunk-NEUQGGWU.js";import{$c as De,Ab as te,Ba as _e,Bb as ne,Cb as y,Da as fe,Db as C,Eb as D,F as me,Fb as w,Gd as Fe,H as b,Ha as he,Ja as r,Ka as f,Kb as ze,La as ge,Lb as S,Mb as ie,Na as F,Oa as Ce,Pc as Ie,Rc as G,Sa as xe,Ta as l,Ua as be,Ud as Ne,Va as c,W as de,Wb as V,Wc as Oe,Xa as Z,Y as J,_c as B,bg as Me,ca as g,cb as u,cc as $,cg as Le,da as v,db as ve,dc as x,ea as P,ec as ye,fb as N,fd as we,gb as k,ha as E,hb as p,hh as Ve,ia as H,ib as m,jb as Te,jg as Y,k as ce,kb as j,kg as K,la as ue,lb as A,md as Be,nb as M,ne as ke,oa as R,od as Q,q as pe,qb as L,qd as Pe,sb as s,sc as U,sd as Ee,tb as T,td as He,ub as z,va as h,ve as je,wd as Re,we as Ae,yd as q,zb as ee,zc as Se}from"./chunk-CDEDXUOP.js";var oe=["*"];function Je(e,t){}function Ze(e,t){if(e&1&&(p(0,"span",2),l(1,Je,0,0,"ng-template",3),Te(2,"span",4),m()),e&2){let n=s(),o=y(4);c("nzDropdownMenu",n.nzOverlay),r(),c("ngTemplateOutlet",o)}}function et(e,t){}function tt(e,t){if(e&1&&l(0,et,0,0,"ng-template",3),e&2){s();let n=y(4);c("ngTemplateOutlet",n)}}function nt(e,t){if(e&1&&(j(0),C(1),A()),e&2){let n=s(2);r(),w(" ",n.nzBreadCrumbComponent.nzSeparator," ")}}function it(e,t){if(e&1&&(p(0,"nz-breadcrumb-separator"),l(1,nt,2,1,"ng-container",5),m()),e&2){let n=s();r(),c("nzStringTemplateOutlet",n.nzBreadCrumbComponent.nzSeparator)}}function ot(e,t){e&1&&(p(0,"span",6),z(1),m())}var rt=(e,t)=>t.url;function at(e,t){if(e&1){let n=M();p(0,"nz-breadcrumb-item")(1,"a",0),L("click",function(i){let d=E(n).$implicit,_=s(2);return H(_.navigate(d.url,i))}),C(2),m()()}if(e&2){let n=t.$implicit;r(),be("href",n.url,he),r(),D(n.label)}}function lt(e,t){if(e&1&&N(0,at,3,2,"nz-breadcrumb-item",null,rt),e&2){let n=s();k(n.breadcrumbs)}}var st=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=v({type:t,selectors:[["nz-breadcrumb-separator"]],hostAttrs:[1,"ant-breadcrumb-separator"],exportAs:["nzBreadcrumbSeparator"],standalone:!0,features:[S],ngContentSelectors:oe,decls:1,vars:0,template:function(i,a){i&1&&(T(),z(0))},encapsulation:2});let e=t;return e})(),W=class{},X=(()=>{let t=class t{constructor(o){this.nzBreadCrumbComponent=o}};t.\u0275fac=function(i){return new(i||t)(f(W))},t.\u0275cmp=v({type:t,selectors:[["nz-breadcrumb-item"]],inputs:{nzOverlay:"nzOverlay"},exportAs:["nzBreadcrumbItem"],standalone:!0,features:[S],ngContentSelectors:oe,decls:5,vars:2,consts:[["class","ant-breadcrumb-overlay-link","nz-dropdown","",3,"nzDropdownMenu"],["noMenuTpl",""],["nz-dropdown","",1,"ant-breadcrumb-overlay-link",3,"nzDropdownMenu"],[3,"ngTemplateOutlet"],["nz-icon","","nzType","down"],[4,"nzStringTemplateOutlet"],[1,"ant-breadcrumb-link"]],template:function(i,a){i&1&&(T(),l(0,Ze,3,2,"span",0)(1,tt,1,1)(2,it,2,1,"nz-breadcrumb-separator")(3,ot,2,0,"ng-template",null,1,V)),i&2&&(u(0,a.nzOverlay?0:1),r(2),u(2,a.nzBreadCrumbComponent.nzSeparator?2:-1))},dependencies:[U,st,Ue,$e,Le,Me,K,Y],encapsulation:2,changeDetection:0});let e=t;return e})(),re=(()=>{let t=class t{constructor(o,i,a,d,_){this.injector=o,this.cdr=i,this.elementRef=a,this.renderer=d,this.directionality=_,this.nzAutoGenerate=!1,this.nzSeparator="/",this.nzRouteLabel="breadcrumb",this.nzRouteLabelFn=I=>I,this.breadcrumbs=[],this.dir="ltr",this.destroy$=new ce}ngOnInit(){this.nzAutoGenerate&&this.registerRouterChange(),this.directionality.change?.pipe(J(this.destroy$)).subscribe(o=>{this.dir=o,this.prepareComponentForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareComponentForRtl()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}navigate(o,i){i.preventDefault(),this.injector.get(B).navigateByUrl(o)}registerRouterChange(){try{let o=this.injector.get(B),i=this.injector.get(Oe);o.events.pipe(b(a=>a instanceof G),J(this.destroy$),de(!0)).subscribe(()=>{this.breadcrumbs=this.getBreadcrumbs(i.root),this.cdr.markForCheck()})}catch{throw new Error(`${Fe} You should import RouterModule if you want to use 'NzAutoGenerate'.`)}}getBreadcrumbs(o,i="",a=[]){let d=o.children;if(d.length===0)return a;for(let _ of d)if(_.outlet===Ie){let I=_.snapshot.url.map(O=>O.path).filter(O=>O).join("/"),le=I?`${i}/${I}`:i,se=this.nzRouteLabelFn(_.snapshot.data[this.nzRouteLabel]);if(I&&se){let O={label:se,params:_.snapshot.params,url:le};a.push(O)}return this.getBreadcrumbs(_,le,a)}return a}prepareComponentForRtl(){this.dir==="rtl"?this.renderer.addClass(this.elementRef.nativeElement,"ant-breadcrumb-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-breadcrumb-rtl")}};t.\u0275fac=function(i){return new(i||t)(f(fe),f($),f(ue),f(F),f(q,8))},t.\u0275cmp=v({type:t,selectors:[["nz-breadcrumb"]],hostAttrs:[1,"ant-breadcrumb"],inputs:{nzAutoGenerate:"nzAutoGenerate",nzSeparator:"nzSeparator",nzRouteLabel:"nzRouteLabel",nzRouteLabelFn:"nzRouteLabelFn"},exportAs:["nzBreadcrumb"],standalone:!0,features:[ze([{provide:W,useExisting:t}]),S],ngContentSelectors:oe,decls:2,vars:1,consts:[[3,"click"]],template:function(i,a){i&1&&(T(),z(0),l(1,lt,2,0)),i&2&&(r(),u(1,a.nzAutoGenerate&&a.breadcrumbs.length?1:-1))},dependencies:[X],encapsulation:2,changeDetection:0});let e=t;return pe([Ne()],e.prototype,"nzAutoGenerate",void 0),e})(),Xe=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=P({type:t}),t.\u0275inj=R({imports:[re,X]});let e=t;return e})();var ct=["conTpl"],pt=["affix"];function mt(e,t){}function dt(e,t){if(e&1&&(p(0,"nz-affix",0,2),l(2,mt,0,0,"ng-template",3),m()),e&2){let n=s(),o=y(3);c("nzOffsetTop",n.fixedOffsetTop),r(2),c("ngTemplateOutlet",o)}}function ut(e,t){}function _t(e,t){if(e&1&&l(0,ut,0,0,"ng-template",3),e&2){s();let n=y(3);c("ngTemplateOutlet",n)}}function ft(e,t){}function ht(e,t){if(e&1&&l(0,ft,0,0,"ng-template",3),e&2){let n=s(2);c("ngTemplateOutlet",n.breadcrumb)}}function gt(e,t){if(e&1&&(p(0,"a",15),C(1),m()),e&2){let n=s().$implicit;c("routerLink",n.link),r(),D(n.title)}}function Ct(e,t){if(e&1&&C(0),e&2){let n=s().$implicit;w(" ",n.title," ")}}function xt(e,t){if(e&1&&(p(0,"nz-breadcrumb-item"),l(1,gt,2,2,"a",15)(2,Ct,1,1),m()),e&2){let n=t.$implicit;r(),u(1,n.link?1:2)}}function bt(e,t){if(e&1&&(p(0,"nz-breadcrumb"),N(1,xt,3,1,"nz-breadcrumb-item",null,ve),m()),e&2){let n=s(3);r(),k(n.paths)}}function vt(e,t){if(e&1&&l(0,bt,3,0,"nz-breadcrumb"),e&2){let n=s(2);u(0,n.paths&&n.paths.length>0?0:-1)}}function Tt(e,t){}function zt(e,t){if(e&1&&(p(0,"div",16),l(1,Tt,0,0,"ng-template",3),m()),e&2){let n=s(2);r(),c("ngTemplateOutlet",n.logo)}}function yt(e,t){}function St(e,t){if(e&1&&l(0,yt,0,0,"ng-template",3),e&2){let n=s(3);c("ngTemplateOutlet",n._titleTpl)}}function It(e,t){if(e&1&&(j(0),C(1),A()),e&2){let n=s(5);r(),D(n.titleSub)}}function Ot(e,t){if(e&1&&(p(0,"small"),l(1,It,2,1,"ng-container",18),m()),e&2){let n=s(4);r(),c("nzStringTemplateOutlet",n.titleSub)}}function Dt(e,t){if(e&1&&(C(0),l(1,Ot,2,1,"small")),e&2){let n=s(3);w(" ",n._titleVal," "),r(),u(1,n.titleSub?1:-1)}}function wt(e,t){if(e&1&&(p(0,"h1",17),l(1,St,1,1,null,3)(2,Dt,2,2),m()),e&2){let n=s(2);r(),u(1,n._titleTpl?1:2)}}function Bt(e,t){}function Pt(e,t){if(e&1&&(p(0,"div",19),l(1,Bt,0,0,"ng-template",3),m()),e&2){let n=s(2);r(),c("ngTemplateOutlet",n.action)}}function Et(e,t){}function Ht(e,t){}function Rt(e,t){if(e&1&&(p(0,"div",20),l(1,Ht,0,0,"ng-template",3),m()),e&2){let n=s(2);r(),c("ngTemplateOutlet",n.extra)}}function Ft(e,t){}var Nt=()=>({rows:3}),kt=()=>({size:"large",shape:"circle"});function jt(e,t){if(e&1){let n=M();p(0,"div",4)(1,"div")(2,"nz-skeleton",5),l(3,ht,1,1,null,3)(4,vt,1,1),p(5,"div",6),l(6,zt,2,1,"div",7),p(7,"div",8)(8,"div",9),l(9,wt,3,1,"h1",10)(10,Pt,2,1,"div",11),m(),p(11,"div",9)(12,"div",12,13),L("cdkObserveContent",function(){E(n);let i=s();return H(i.checkContent())}),z(14),l(15,Et,0,0,"ng-template",3),m(),l(16,Rt,2,1,"div",14),m()()(),l(17,Ft,0,0,"ng-template",3),m()()()}if(e&2){let n=s();Z("page-header-rtl",n.dir==="rtl"),r(),Z("page-header__wide",n.wide),r(),c("nzLoading",n.loading)("nzTitle",!1)("nzActive",!0)("nzParagraph",ie(16,Nt))("nzAvatar",ie(17,kt)),r(),u(3,n.breadcrumb?3:4),r(3),u(6,n.logo?6:-1),r(3),u(9,n._titleVal||n._titleTpl?9:-1),r(),u(10,n.action?10:-1),r(5),c("ngTemplateOutlet",n.content),r(),u(16,n.extra?16:-1),r(),c("ngTemplateOutlet",n.tab)}}var At=["*"],ae=(()=>{let t=class t{get menus(){return this.menuSrv.getPathByUrl(this.router.url,this.recursiveBreadcrumb)}set title(o){o instanceof ge?(this._title=null,this._titleTpl=o,this._titleVal=""):(this._title=o,this._titleVal=this._title)}constructor(o,i,a){this.renderer=h(F),this.router=h(B),this.cdr=h($),this.menuSrv=h(Ee),this.i18nSrv=h(Pe,{optional:!0}),this.titleSrv=h(ke,{optional:!0}),this.reuseSrv=h(Ge,{optional:!0}),this.directionality=h(q,{optional:!0}),this.destroy$=h(Ce),this.inited=!1,this.isBrowser=!0,this.dir="ltr",this._titleVal="",this.paths=[],this._title=null,this._titleTpl=null,this.loading=!1,this.wide=!1,this.breadcrumb=null,this.logo=null,this.action=null,this.content=null,this.extra=null,this.tab=null,this.isBrowser=a.isBrowser,i.attach(this,"pageHeader",{home:"\u9996\u9875",homeLink:"/",autoBreadcrumb:!0,recursiveBreadcrumb:!1,autoTitle:!0,syncTitle:!0,fixed:!1,fixedOffsetTop:64}),o.notify.pipe(Q(),b(_=>this.affix&&_.type==="layout"&&_.name==="collapsed")).subscribe(()=>this.affix.updatePosition({}));let d=[this.router.events.pipe(b(_=>_ instanceof G))];this.menuSrv!=null&&d.push(this.menuSrv.change),this.i18nSrv!=null&&d.push(this.i18nSrv.change),me(...d).pipe(Q(),b(()=>this.inited)).subscribe(()=>this.refresh())}refresh(){this.setTitle().genBreadcrumb(),this.cdr.detectChanges()}genBreadcrumb(){if(this.breadcrumb||!this.autoBreadcrumb||this.menus.length<=0){this.paths=[];return}let o=[];this.menus.forEach(i=>{if(typeof i.hideInBreadcrumb<"u"&&i.hideInBreadcrumb)return;let a=i.text;i.i18n&&this.i18nSrv&&(a=this.i18nSrv.fanyi(i.i18n)),o.push({title:a,link:i.link&&[i.link]})}),this.home&&o.splice(0,0,{title:this.homeI18n&&this.i18nSrv&&this.i18nSrv.fanyi(this.homeI18n)||this.home,link:[this.homeLink]}),this.paths=o}setTitle(){if(this._title==null&&this._titleTpl==null&&this.autoTitle&&this.menus.length>0){let o=this.menus[this.menus.length-1],i=o.text;o.i18n&&this.i18nSrv&&(i=this.i18nSrv.fanyi(o.i18n)),this._titleVal=i}return this._titleVal&&this.syncTitle&&(this.titleSrv&&this.titleSrv.setTitle(this._titleVal),!this.inited&&this.reuseSrv&&(this.reuseSrv.title=this._titleVal)),this}checkContent(){Ve(this.conTpl.nativeElement)?this.renderer.setAttribute(this.conTpl.nativeElement,"hidden",""):this.renderer.removeAttribute(this.conTpl.nativeElement,"hidden")}ngOnInit(){this.dir=this.directionality?.value,this.directionality?.change.pipe(Q(this.destroy$)).subscribe(o=>{this.dir=o,this.cdr.detectChanges()}),this.refresh(),this.inited=!0}ngAfterViewInit(){this.checkContent()}ngOnChanges(){this.inited&&this.refresh()}};t.\u0275fac=function(i){return new(i||t)(f(Re),f(Be),f(He))},t.\u0275cmp=v({type:t,selectors:[["page-header"]],viewQuery:function(i,a){if(i&1&&(ee(ct,5),ee(pt,5)),i&2){let d;te(d=ne())&&(a.conTpl=d.first),te(d=ne())&&(a.affix=d.first)}},inputs:{title:"title",titleSub:"titleSub",loading:[g.HasDecoratorInputTransform,"loading","loading",x],wide:[g.HasDecoratorInputTransform,"wide","wide",x],home:"home",homeLink:"homeLink",homeI18n:"homeI18n",autoBreadcrumb:[g.HasDecoratorInputTransform,"autoBreadcrumb","autoBreadcrumb",x],autoTitle:[g.HasDecoratorInputTransform,"autoTitle","autoTitle",x],syncTitle:[g.HasDecoratorInputTransform,"syncTitle","syncTitle",x],fixed:[g.HasDecoratorInputTransform,"fixed","fixed",x],fixedOffsetTop:[g.HasDecoratorInputTransform,"fixedOffsetTop","fixedOffsetTop",ye],breadcrumb:"breadcrumb",recursiveBreadcrumb:[g.HasDecoratorInputTransform,"recursiveBreadcrumb","recursiveBreadcrumb",x],logo:"logo",action:"action",content:"content",extra:"extra",tab:"tab"},exportAs:["pageHeader"],standalone:!0,features:[xe,_e,S],ngContentSelectors:At,decls:4,vars:1,consts:[[3,"nzOffsetTop"],["phTpl",""],["affix",""],[3,"ngTemplateOutlet"],[1,"page-header"],[1,"d-block",3,"nzLoading","nzTitle","nzActive","nzParagraph","nzAvatar"],[1,"page-header__detail"],["class","page-header__logo"],[1,"page-header__main"],[1,"page-header__row"],["class","page-header__title"],["class","page-header__action"],[1,"page-header__desc",3,"cdkObserveContent"],["conTpl",""],["class","page-header__extra"],[3,"routerLink"],[1,"page-header__logo"],[1,"page-header__title"],[4,"nzStringTemplateOutlet"],[1,"page-header__action"],[1,"page-header__extra"]],template:function(i,a){i&1&&(T(),l(0,dt,3,2,"nz-affix",0)(1,_t,1,1)(2,jt,18,18,"ng-template",null,1,V)),i&2&&u(0,a.isBrowser&&a.fixed?0:1)},dependencies:[Qe,U,Ye,re,X,De,Y,je],encapsulation:2,changeDetection:0});let e=t;return e})();var Mt=[ae],Lt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=P({type:t}),t.\u0275inj=R({imports:[Se,we,Ae,qe,Ke,Xe,K,Mt]});let e=t;return e})();export{X as a,re as b,Xe as c,ae as d,Lt as e};
