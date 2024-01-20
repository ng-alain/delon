import{a as At,b as Ot}from"./chunk-EARTFLPV.js";import{a as Bt,b as wt}from"./chunk-L7HAQ6SN.js";import{a as zt,e as It}from"./chunk-KEWBDC3Y.js";import{a as kt,b as Dt}from"./chunk-OH6GSKKG.js";import{$b as b,$c as pt,Ab as le,Ad as ft,Ae as bt,Ba as Fe,Bb as ce,Ca as U,Cb as ue,D as Oe,Db as A,Df as Me,Ea as et,Eb as I,Ef as Tt,F as Xe,Fb as me,Fe as je,Ga as tt,Gb as N,H as D,Ha as xe,He as vt,Ib as Se,Ja as l,Jb as S,Ka as y,Kb as Pe,Kc as lt,L as qe,La as j,Lb as rt,Lc as ct,Lf as ze,Lg as yt,M as He,Ma as be,Mc as Z,Mf as Ie,Mg as Rt,Na as H,Od as _t,Qa as ve,Rc as ee,Sa as m,Ta as L,Tc as ut,Ua as p,Ub as q,Uc as k,Va as it,Vc as mt,W as Je,Wa as V,Y as Ne,a as oe,ab as g,ac as pe,bb as $,ca as de,da as fe,db as G,dc as ot,ea as ae,eb as K,fb as h,ga as u,gb as d,gd as ht,h as Ke,ha as _,hb as Te,he as gt,ia as T,ib as Y,ic as st,id as R,ja as _e,jb as Q,jc as Ue,k as se,ka as Ze,kd as ye,l as Ye,lb as z,md as Re,na as ge,nd as Ee,oa as E,oc as J,pa as M,pb as C,pe as Ct,ph as Et,q as Qe,qd as dt,qe as xt,rb as c,rh as Mt,s as We,sb as W,sd as te,tb as X,vc as at,wg as St,xa as Ce,yb as nt}from"./chunk-T6QZOGIV.js";var he=new ae("REUSE_TAB_CACHED_MANAGER");var B=function(i){return i[i.Menu=0]="Menu",i[i.MenuForce=1]="MenuForce",i[i.URL=2]="URL",i}(B||{});var ie=new ae("REUSE_TAB_STORAGE_KEY"),ne=new ae("REUSE_TAB_STORAGE_STATE");var F=(()=>{let r=class r{get snapshot(){return this.injector.get(ee).snapshot}get inited(){return this._inited}get curUrl(){return this.getUrl(this.snapshot)}set max(e){this._max=Math.min(Math.max(e,2),100);for(let t=this.cached.list.length;t>this._max;t--)this.cached.list.pop()}set keepingScroll(e){this._keepingScroll=e,this.initScroll()}get keepingScroll(){return this._keepingScroll}get items(){return this.cached.list}get count(){return this.cached.list.length}get change(){return this._cachedChange.asObservable()}set title(e){let t=this.curUrl;typeof e=="string"&&(e={text:e}),this.cached.title[t]=e,this.di("update current tag title: ",e),this._cachedChange.next({active:"title",url:t,title:e,list:this.cached.list})}index(e){return this.cached.list.findIndex(t=>t.url===e)}exists(e){return this.index(e)!==-1}get(e){return e&&this.cached.list.find(t=>t.url===e)||null}remove(e,t){let n=typeof e=="string"?this.index(e):e,s=n!==-1?this.cached.list[n]:null;return!s||!t&&!s.closable?!1:(this.destroy(s._handle),this.cached.list.splice(n,1),delete this.cached.title[e],!0)}close(e,t=!1){return this.removeUrlBuffer=e,this.remove(e,t),this._cachedChange.next({active:"close",url:e,list:this.cached.list}),this.di("close tag",e),!0}closeRight(e,t=!1){let n=this.index(e);for(let s=this.count-1;s>n;s--)this.remove(s,t);return this.removeUrlBuffer=null,this._cachedChange.next({active:"closeRight",url:e,list:this.cached.list}),this.di("close right tages",e),!0}clear(e=!1){this.cached.list.forEach(t=>{!e&&t.closable&&this.destroy(t._handle)}),this.cached.list=this.cached.list.filter(t=>!e&&!t.closable),this.removeUrlBuffer=null,this._cachedChange.next({active:"clear",list:this.cached.list}),this.di("clear all catch")}move(e,t){let n=this.cached.list.findIndex(a=>a.url===e);if(n===-1)return;let s=this.cached.list.slice();s.splice(t<0?s.length+t:t,0,s.splice(n,1)[0]),this.cached.list=s,this._cachedChange.next({active:"move",url:e,position:t,list:this.cached.list})}replace(e){let t=this.curUrl;this.injector.get(k).navigateByUrl(e).then(()=>{this.exists(t)?this.close(t,!0):this.removeUrlBuffer=t})}getTitle(e,t){if(this.cached.title[e])return this.cached.title[e];if(t&&t.data&&(t.data.titleI18n||t.data.title))return{text:t.data.title,i18n:t.data.titleI18n};let n=this.getMenu(e);return n?{text:n.text,i18n:n.i18n}:{text:e}}clearTitleCached(){this.cached.title={}}set closable(e){let t=this.curUrl;this.cached.closable[t]=e,this.di("update current tag closable: ",e),this._cachedChange.next({active:"closable",closable:e,list:this.cached.list})}getClosable(e,t){if(typeof this.cached.closable[e]<"u")return this.cached.closable[e];if(t&&t.data&&typeof t.data.reuseClosable=="boolean")return t.data.reuseClosable;let n=this.mode!==B.URL?this.getMenu(e):null;return n&&typeof n.reuseClosable=="boolean"?n.reuseClosable:!0}clearClosableCached(){this.cached.closable={}}getTruthRoute(e){let t=e;for(;t.firstChild;)t=t.firstChild;return t}getUrl(e){let t=this.getTruthRoute(e),n=[];for(;t;)n.push(t.url.join("/")),t=t.parent;return`/${n.filter(a=>a).reverse().join("/")}`}can(e){let t=this.getUrl(e);if(t===this.removeUrlBuffer)return!1;if(e.data&&typeof e.data.reuse=="boolean")return e.data.reuse;if(this.mode!==B.URL){let n=this.getMenu(t);if(!n)return!1;if(this.mode===B.Menu){if(n.reuse===!1)return!1}else if(!n.reuse||n.reuse!==!0)return!1;return!0}return!this.isExclude(t)}isExclude(e){return this.excludes.findIndex(t=>t.test(e))!==-1}refresh(e){this._cachedChange.next({active:"refresh",data:e})}destroy(e){e&&e.componentRef&&e.componentRef.destroy&&e.componentRef.destroy()}di(...e){}constructor(){this.injector=u(Ce),this.menuService=u(Re),this.cached=u(he),this.stateKey=u(ie),this.stateSrv=u(ne),this._inited=!1,this._max=10,this._keepingScroll=!1,this._cachedChange=new Ye(null),this.removeUrlBuffer=null,this.positionBuffer={},this.debug=!1,this.routeParamMatchMode="strict",this.mode=B.Menu,this.excludes=[],this.storageState=!1,this.cached==null&&(this.cached={list:[],title:{},closable:{}})}init(){this.initScroll(),this._inited=!0,this.loadState()}loadState(){this.storageState&&(this.cached.list=this.stateSrv.get(this.stateKey).map(e=>({title:{text:e.title},url:e.url,position:e.position})),this._cachedChange.next({active:"loadState"}))}getMenu(e){let t=this.menuService.getPathByUrl(e);return!t||t.length===0?null:t.pop()}runHook(e,t,n="init"){if(typeof t=="number"&&(t=this.cached.list[t]._handle?.componentRef),t==null||!t.instance)return;let s=t.instance,a=s[e];typeof a=="function"&&(e==="_onReuseInit"?a.call(s,n):a.call(s))}hasInValidRoute(e){return!e.routeConfig||!!e.routeConfig.loadChildren||!!e.routeConfig.children}shouldDetach(e){return this.hasInValidRoute(e)?!1:(this.di("#shouldDetach",this.can(e),this.getUrl(e)),this.can(e))}saveCache(e,t,n){let s=this.getTruthRoute(e),a=this.getUrl(e),f=this.index(a),x={title:this.getTitle(a,s),url:a,closable:this.getClosable(a,e),_snapshot:e,_handle:t};if(f<0){if(this.items.splice(n??this.items.length,0,x),this.count>this._max){let w=this.items.findIndex(v=>v.url!==a&&v.closable);if(w!==-1){let v=this.items[w];this.remove(w,!1),Oe(1).pipe(He(1)).subscribe(()=>this._cachedChange.next({active:"close",url:v.url,list:this.cached.list}))}}}else this.items[f]=x}store(e,t){let n=this.getUrl(e),s=this.index(n);if(s===-1)return;t!=null&&this.saveCache(e,t);let a=this.cached.list,f={title:this.getTitle(n,e),closable:this.getClosable(n,e),position:this.getKeepingScroll(n,e)?this.positionBuffer[n]:null,url:n,_snapshot:e,_handle:t},x=a[s]._handle?.componentRef;t==null&&x!=null&&Oe(100).pipe(He(1)).subscribe(()=>this.runHook("_onReuseInit",x)),a[s]=f,this.removeUrlBuffer=null,this.di("#store","[override]",n),t&&t.componentRef&&this.runHook("_onReuseDestroy",t.componentRef),this._cachedChange.next({active:"override",item:f,list:a})}shouldAttach(e){if(this.hasInValidRoute(e))return!1;let t=this.getUrl(e),n=this.get(t),s=!!(n&&n._handle);return this.di("#shouldAttach",s,t),s||this._cachedChange.next({active:"add",url:t,list:this.cached.list}),s}retrieve(e){if(this.hasInValidRoute(e))return null;let t=this.getUrl(e),n=this.get(t),s=n&&n._handle||null;return this.di("#retrieve",t,s),s}shouldReuseRoute(e,t){let n=e.routeConfig===t.routeConfig;if(!n)return!1;let s=e.routeConfig&&e.routeConfig.path||"";return s.length>0&&~s.indexOf(":")&&(this.routeParamMatchMode==="strict"?n=this.getUrl(e)===this.getUrl(t):n=s===(t.routeConfig&&t.routeConfig.path||"")),this.di("====================="),this.di("#shouldReuseRoute",n,`${this.getUrl(t)}=>${this.getUrl(e)}`,e,t),n}getKeepingScroll(e,t){if(t&&t.data&&typeof t.data.keepingScroll=="boolean")return t.data.keepingScroll;let n=this.mode!==B.URL?this.getMenu(e):null;return n&&typeof n.keepingScroll=="boolean"?n.keepingScroll:this.keepingScroll}get isDisabledInRouter(){return this.injector.get(ut,{}).scrollPositionRestoration==="disabled"}get ss(){return this.injector.get(Rt)}initScroll(){this._router$&&this._router$.unsubscribe(),this._router$=this.injector.get(k).events.subscribe(e=>{if(e instanceof ct){let t=this.curUrl;this.getKeepingScroll(t,this.getTruthRoute(this.snapshot))?this.positionBuffer[t]=this.ss.getScrollPosition(this.keepingScrollContainer):delete this.positionBuffer[t]}else if(e instanceof Z){let t=this.curUrl,n=this.get(t);n&&n.position&&this.getKeepingScroll(t,this.getTruthRoute(this.snapshot))&&(this.isDisabledInRouter?this.ss.scrollToPosition(this.keepingScrollContainer,n.position):setTimeout(()=>this.ss.scrollToPosition(this.keepingScrollContainer,n.position),1))}})}ngOnDestroy(){let{_cachedChange:e,_router$:t}=this;this.clear(),this.cached.list=[],e.complete(),t&&t.unsubscribe()}};r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=de({token:r,factory:r.\u0275fac});let i=r;return i})();function Pt(i,r){if(i&1){let o=z();h(0,"li",5),C("click",function(t){E(o);let n=c();return M(n.click(t,"refresh"))}),d()}if(i&2){let o=c();p("innerHTML",o.i18n.refresh,U)}}function Ut(i,r){if(i&1){let o=z();h(0,"li",7),C("click",function(t){let s=E(o).$implicit,a=c(2);return M(a.click(t,"custom",s))}),d()}if(i&2){let o=r.$implicit,e=c(2);p("nzDisabled",e.isDisabled(o))("innerHTML",o.title,U),L("data-type",o.id)}}function jt(i,r){if(i&1&&(Te(0,"li",6),G(1,Ut,1,3,"li",8,$)),i&2){let o=c();l(),K(o.customContextMenu)}}var ke=(()=>{let r=class r{constructor(){this.i18nSrv=u(St),this.close=new H}set i18n(e){this._i18n=oe(oe({},this.i18nSrv.getData("reuseTab")),e)}get i18n(){return this._i18n}get includeNonCloseable(){return this.event.ctrlKey}notify(e){this.close.next({type:e,item:this.item,includeNonCloseable:this.includeNonCloseable})}ngOnInit(){this.includeNonCloseable&&(this.item.closable=!0)}click(e,t,n){if(e.preventDefault(),e.stopPropagation(),!(t==="close"&&!this.item.closable)&&!(t==="closeRight"&&this.item.last)){if(n){if(this.isDisabled(n))return;n.fn(this.item,n)}this.notify(t)}}isDisabled(e){return e.disabled?e.disabled(this.item):!1}closeMenu(e){e.type==="click"&&e.button===2||this.notify(null)}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=T({type:r,selectors:[["reuse-tab-context-menu"]],hostBindings:function(t,n){t&1&&C("click",function(a){return n.closeMenu(a)},!1,Fe)("contextmenu",function(a){return n.closeMenu(a)},!1,Fe)},inputs:{i18n:"i18n",item:"item",event:"event",customContextMenu:"customContextMenu"},outputs:{close:"close"},standalone:!0,features:[S],decls:6,vars:7,consts:[["nz-menu",""],["nz-menu-item","","data-type","refresh",3,"innerHTML"],["nz-menu-item","","data-type","close",3,"nzDisabled","innerHTML","click"],["nz-menu-item","","data-type","closeOther",3,"innerHTML","click"],["nz-menu-item","","data-type","closeRight",3,"nzDisabled","innerHTML","click"],["nz-menu-item","","data-type","refresh",3,"innerHTML","click"],["nz-menu-divider",""],["nz-menu-item","",3,"nzDisabled","innerHTML","click"],["nz-menu-item","",3,"nzDisabled","innerHTML"]],template:function(t,n){t&1&&(h(0,"ul",0),m(1,Pt,1,1,"li",1),h(2,"li",2),C("click",function(a){return n.click(a,"close")}),d(),h(3,"li",3),C("click",function(a){return n.click(a,"closeOther")}),d(),h(4,"li",4),C("click",function(a){return n.click(a,"closeRight")}),d(),m(5,jt,3,0),d()),t&2&&(l(),g(1,n.item.active?1:-1),l(),p("nzDisabled",!n.item.closable)("innerHTML",n.i18n.close,U),l(),p("innerHTML",n.i18n.closeOther,U),l(),p("nzDisabled",n.item.last)("innerHTML",n.i18n.closeRight,U),l(),g(5,n.customContextMenu.length>0?5:-1))},dependencies:[Mt,Et],encapsulation:2,changeDetection:0});let i=r;return i})();var P=(()=>{let r=class r{constructor(){this.overlay=u(vt),this.ref=null,this.show=new se,this.close=new se}remove(){this.ref&&(this.ref.detach(),this.ref.dispose(),this.ref=null)}open(e){this.remove();let{event:t,item:n,customContextMenu:s}=e,{x:a,y:f}=t,x=[new je({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new je({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})],w=this.overlay.position().flexibleConnectedTo({x:a,y:f}).withPositions(x);this.ref=this.overlay.create({positionStrategy:w,panelClass:"reuse-tab__cm",scrollStrategy:this.overlay.scrollStrategies.close()});let v=this.ref.attach(new bt(ke)),re=v.instance;re.i18n=this.i18n,re.item=oe({},n),re.customContextMenu=s,re.event=t;let Ge=new Ke;Ge.add(re.close.subscribe(Ft=>{this.close.next(Ft),this.remove()})),v.onDestroy(()=>Ge.unsubscribe())}};r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=de({token:r,factory:r.\u0275fac});let i=r;return i})();var De=(()=>{let r=class r{set i18n(e){this.srv.i18n=e}constructor(){this.srv=u(P),this.change=new H,this.srv.show.pipe(R()).subscribe(e=>this.srv.open(e)),this.srv.close.pipe(R()).subscribe(e=>this.change.emit(e))}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=T({type:r,selectors:[["reuse-tab-context"]],inputs:{i18n:"i18n"},outputs:{change:"change"},standalone:!0,features:[S],decls:0,vars:0,template:function(t,n){},encapsulation:2});let i=r;return i})();var Be=(()=>{let r=class r{constructor(){this.srv=u(P)}_onContextMenu(e){this.srv.show.next({event:e,item:this.item,customContextMenu:this.customContextMenu}),e.preventDefault(),e.stopPropagation()}};r.\u0275fac=function(t){return new(t||r)},r.\u0275dir=Ze({type:r,selectors:[["","reuse-tab-context-menu",""]],hostBindings:function(t,n){t&1&&C("contextmenu",function(a){return n._onContextMenu(a)})},inputs:{item:[_.None,"reuse-tab-context-menu","item"],customContextMenu:"customContextMenu"},exportAs:["reuseTabContextMenu"],standalone:!0});let i=r;return i})();var Lt=["tabset"];function Vt(i,r){}var $t=i=>({$implicit:i});function Gt(i,r){if(i&1&&m(0,Vt,0,0,"ng-template",6),i&2){let o=c(2).$implicit,e=c();p("ngTemplateOutlet",e.titleRender)("ngTemplateOutletContext",rt(2,$t,o))}}function Kt(i,r){if(i&1&&I(0),i&2){let o=c(2).$implicit;N(" ",o.title," ")}}function Yt(i,r){if(i&1){let o=z();h(0,"i",8),C("click",function(t){E(o);let n=c(2).$index,s=c();return M(s._close(t,n,!1))}),d()}}function Qt(i,r){if(i&1&&(h(0,"div",5)(1,"span"),m(2,Gt,1,4,null,6)(3,Kt,1,1),d()(),m(4,Yt,1,0,"i",7)),i&2){let o=c().$implicit,e=c();p("reuse-tab-context-menu",o)("customContextMenu",e.customContextMenu),L("title",o.title),l(),it("max-width",e.tabMaxWidth,"px"),V("reuse-tab__name-width",e.tabMaxWidth),l(),g(2,e.titleRender?2:3),l(2),g(4,o.closable?4:-1)}}function Wt(i,r){if(i&1){let o=z();h(0,"nz-tab",3),C("nzClick",function(){let n=E(o).$index,s=c();return M(s._to(n))}),m(1,Qt,5,9,"ng-template",null,4,q),d()}if(i&2){let o=A(2);p("nzTitle",o)}}var Ht=(()=>{let r=class r{constructor(){this.srv=u(F,{optional:!0}),this.cdr=u(j),this.router=u(k),this.route=u(ee),this.i18nSrv=u(ye,{optional:!0}),this.doc=u(ot),this.platform=u(Ee),this.directionality=u(te,{optional:!0}),this.stateKey=u(ie),this.stateSrv=u(ne),this.destroy$=u(be),this.list=[],this.pos=0,this.dir="ltr",this.mode=B.Menu,this.debug=!1,this.allowClose=!0,this.keepingScroll=!1,this.storageState=!1,this.customContextMenu=[],this.tabBarStyle=null,this.tabType="line",this.routeParamMatchMode="strict",this.disabled=!1,this.change=new H,this.close=new H}set keepingScrollContainer(e){this._keepingScrollContainer=typeof e=="string"?this.doc.querySelector(e):e}genTit(e){return e.i18n&&this.i18nSrv?this.i18nSrv.fanyi(e.i18n):e.text}get curUrl(){return this.srv.getUrl(this.route.snapshot)}genCurItem(){let e=this.curUrl,t=this.srv.getTruthRoute(this.route.snapshot);return{url:e,title:this.genTit(this.srv.getTitle(e,t)),closable:this.allowClose&&this.srv.count>0&&this.srv.getClosable(e,t),active:!1,last:!1,index:0}}genList(e){let t=this.srv.items.map((a,f)=>({url:a.url,title:this.genTit(a.title),closable:this.allowClose&&this.srv.count>0&&this.srv.getClosable(a.url,a._snapshot),position:a.position,index:f,active:!1,last:!1})),n=this.curUrl,s=t.findIndex(a=>a.url===n)===-1;if(e&&e.active==="close"&&e.url===n){s=!1;let a=0,f=this.list.find(x=>x.url===n);f.index===t.length?a=t.length-1:f.index<t.length&&(a=Math.max(0,f.index)),this.router.navigateByUrl(t[a].url)}if(s){let a=this.pos+1;t.splice(a,0,this.genCurItem()),this.srv.saveCache(this.route.snapshot,null,a)}t.forEach((a,f)=>a.index=f),t.length===1&&(t[0].closable=!1),this.list=t,this.cdr.detectChanges(),this.updatePos()}updateTitle(e){let t=this.list.find(n=>n.url===e.url);t&&(t.title=this.genTit(e.title),this.cdr.detectChanges())}refresh(e){this.srv.runHook("_onReuseInit",this.pos===e.index?this.srv.componentRef:e.index,"refresh")}saveState(){!this.srv.inited||!this.storageState||this.stateSrv?.update(this.stateKey,this.list)}contextMenuChange(e){let t=null;switch(e.type){case"refresh":this.refresh(e.item);break;case"close":this._close(null,e.item.index,e.includeNonCloseable);break;case"closeRight":t=()=>{this.srv.closeRight(e.item.url,e.includeNonCloseable),this.close.emit(null)};break;case"closeOther":t=()=>{this.srv.clear(e.includeNonCloseable),this.close.emit(null)};break}t&&(!e.item.active&&e.item.index<=this.list.find(n=>n.active).index?this._to(e.item.index,t):t())}_to(e,t){e=Math.max(0,Math.min(e,this.list.length-1));let n=this.list[e];this.router.navigateByUrl(n.url).then(s=>{s&&(this.item=n,this.change.emit(n),t?.())})}_close(e,t,n){e!=null&&(e.preventDefault(),e.stopPropagation());let s=this.list[t];return(this.canClose?this.canClose({item:s,includeNonCloseable:n}):We(!0)).pipe(D(a=>a)).subscribe(()=>{this.srv.close(s.url,n),this.close.emit(s),this.cdr.detectChanges()}),!1}activate(e){this.srv!=null&&(this.srv.componentRef={instance:e})}updatePos(){let e=this.srv.getUrl(this.route.snapshot),t=this.list.filter(f=>f.url===e||!this.srv.isExclude(f.url));if(t.length===0)return;let n=t[t.length-1],s=t.find(f=>f.url===e);n.last=!0;let a=s==null?n.index:s.index;t.forEach((f,x)=>f.active=a===x),this.pos=a,this.tabset.nzSelectedIndex=a,this.list=t,this.cdr.detectChanges(),this.saveState()}ngOnInit(){this.dir=this.directionality?.value,this.directionality?.change.pipe(R(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),!(!this.platform.isBrowser||this.srv==null)&&(this.srv.change.pipe(R(this.destroy$)).subscribe(e=>{switch(e?.active){case"title":this.updateTitle(e);return;case"override":if(e?.list?.length===this.list.length){this.updatePos();return}break}this.genList(e)}),this.i18nSrv?.change.pipe(D(()=>this.srv.inited),R(this.destroy$),qe(100)).subscribe(()=>this.genList({active:"title"})),this.srv.init())}ngOnChanges(e){!this.platform.isBrowser||this.srv==null||(e.max&&(this.srv.max=this.max),e.excludes&&(this.srv.excludes=this.excludes),e.mode&&(this.srv.mode=this.mode),e.routeParamMatchMode&&(this.srv.routeParamMatchMode=this.routeParamMatchMode),e.keepingScroll&&(this.srv.keepingScroll=this.keepingScroll,this.srv.keepingScrollContainer=this._keepingScrollContainer),e.storageState&&(this.srv.storageState=this.storageState),this.srv.debug=this.debug,this.cdr.detectChanges())}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=T({type:r,selectors:[["reuse-tab"],["","reuse-tab",""]],viewQuery:function(t,n){if(t&1&&le(Lt,5),t&2){let s;ce(s=ue())&&(n.tabset=s.first)}},hostVars:10,hostBindings:function(t,n){t&2&&V("reuse-tab",!0)("reuse-tab__line",n.tabType==="line")("reuse-tab__card",n.tabType==="card")("reuse-tab__disabled",n.disabled)("reuse-tab-rtl",n.dir==="rtl")},inputs:{mode:"mode",i18n:"i18n",debug:[_.HasDecoratorInputTransform,"debug","debug",b],max:[_.HasDecoratorInputTransform,"max","max",pe],tabMaxWidth:[_.HasDecoratorInputTransform,"tabMaxWidth","tabMaxWidth",pe],excludes:"excludes",allowClose:[_.HasDecoratorInputTransform,"allowClose","allowClose",b],keepingScroll:[_.HasDecoratorInputTransform,"keepingScroll","keepingScroll",b],storageState:[_.HasDecoratorInputTransform,"storageState","storageState",b],keepingScrollContainer:"keepingScrollContainer",customContextMenu:"customContextMenu",tabBarExtraContent:"tabBarExtraContent",tabBarGutter:"tabBarGutter",tabBarStyle:"tabBarStyle",tabType:"tabType",routeParamMatchMode:"routeParamMatchMode",disabled:[_.HasDecoratorInputTransform,"disabled","disabled",b],titleRender:"titleRender",canClose:"canClose"},outputs:{change:"change",close:"close"},exportAs:["reuseTab"],standalone:!0,features:[Se([P]),ve,ge,S],decls:5,vars:7,consts:[[3,"nzSelectedIndex","nzAnimated","nzType","nzTabBarExtraContent","nzTabBarGutter","nzTabBarStyle"],["tabset",""],[3,"i18n","change"],[3,"nzTitle","nzClick"],["titleTemplate",""],[1,"reuse-tab__name",3,"reuse-tab-context-menu","customContextMenu"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["nz-icon","","nzType","close","class","reuse-tab__op"],["nz-icon","","nzType","close",1,"reuse-tab__op",3,"click"],[3,"nzTitle"]],template:function(t,n){t&1&&(h(0,"nz-tabset",0,1),G(2,Wt,3,1,"nz-tab",9,$),d(),h(4,"reuse-tab-context",2),C("change",function(a){return n.contextMenuChange(a)}),d()),t&2&&(p("nzSelectedIndex",n.pos)("nzAnimated",!1)("nzType",n.tabType)("nzTabBarExtraContent",n.tabBarExtraContent)("nzTabBarGutter",n.tabBarGutter)("nzTabBarStyle",n.tabBarStyle),l(2),K(n.list),l(2),p("i18n",n.i18n))},dependencies:[J,Ot,At,Be,De,Me],encapsulation:2,changeDetection:0});let i=r;return i})();var Le=["*"];function Zt(i,r){}function ei(i,r){if(i&1&&(Y(0),h(1,"span",3),m(2,Zt,0,0,"ng-template",4),Te(3,"span",5),d(),Q()),i&2){let o=c(),e=A(2);l(),p("nzDropdownMenu",o.nzOverlay),l(),p("ngTemplateOutlet",e)}}function ti(i,r){i&1&&(h(0,"span",6),X(1),d())}function ii(i,r){if(i&1&&(Y(0),I(1),Q()),i&2){let o=c(2);l(),N(" ",o.nzBreadCrumbComponent.nzSeparator," ")}}function ni(i,r){if(i&1&&(h(0,"nz-breadcrumb-separator"),m(1,ii,2,1,"ng-container",7),d()),i&2){let o=c();l(),p("nzStringTemplateOutlet",o.nzBreadCrumbComponent.nzSeparator)}}function ri(i,r){if(i&1){let o=z();h(0,"nz-breadcrumb-item")(1,"a",2),C("click",function(t){let s=E(o).$implicit,a=c(2);return M(a.navigate(s.url,t))}),I(2),d()()}if(i&2){let o=r.$implicit;l(),L("href",o.url,et),l(),me(o.label)}}function oi(i,r){if(i&1&&(Y(0),m(1,ri,3,2,"nz-breadcrumb-item",1),Q()),i&2){let o=c();l(),p("ngForOf",o.breadcrumbs)}}var si=(()=>{let r=class r{};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=T({type:r,selectors:[["nz-breadcrumb-separator"]],hostAttrs:[1,"ant-breadcrumb-separator"],exportAs:["nzBreadcrumbSeparator"],standalone:!0,features:[S],ngContentSelectors:Le,decls:1,vars:0,template:function(t,n){t&1&&(W(),X(0))},encapsulation:2});let i=r;return i})(),we=class{},Ae=(()=>{let r=class r{constructor(e){this.nzBreadCrumbComponent=e}};r.\u0275fac=function(t){return new(t||r)(y(we))},r.\u0275cmp=T({type:r,selectors:[["nz-breadcrumb-item"]],inputs:{nzOverlay:"nzOverlay"},exportAs:["nzBreadcrumbItem"],standalone:!0,features:[S],ngContentSelectors:Le,decls:4,vars:3,consts:[[4,"ngIf","ngIfElse"],["noMenuTpl",""],[4,"ngIf"],["nz-dropdown","",1,"ant-breadcrumb-overlay-link",3,"nzDropdownMenu"],[3,"ngTemplateOutlet"],["nz-icon","","nzType","down"],[1,"ant-breadcrumb-link"],[4,"nzStringTemplateOutlet"]],template:function(t,n){if(t&1&&(W(),m(0,ei,4,2,"ng-container",0)(1,ti,2,0,"ng-template",null,1,q)(3,ni,2,1,"nz-breadcrumb-separator",2)),t&2){let s=A(2);p("ngIf",!!n.nzOverlay)("ngIfElse",s),l(3),p("ngIf",n.nzBreadCrumbComponent.nzSeparator)}},dependencies:[Ue,J,si,It,zt,Tt,Me,Ie,ze],encapsulation:2,changeDetection:0});let i=r;return i})(),Ve=(()=>{let r=class r{constructor(e,t,n,s,a){this.injector=e,this.cdr=t,this.elementRef=n,this.renderer=s,this.directionality=a,this.nzAutoGenerate=!1,this.nzSeparator="/",this.nzRouteLabel="breadcrumb",this.nzRouteLabelFn=f=>f,this.breadcrumbs=[],this.dir="ltr",this.destroy$=new se}ngOnInit(){this.nzAutoGenerate&&this.registerRouterChange(),this.directionality.change?.pipe(Ne(this.destroy$)).subscribe(e=>{this.dir=e,this.prepareComponentForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareComponentForRtl()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}navigate(e,t){t.preventDefault(),this.injector.get(k).navigateByUrl(e)}registerRouterChange(){try{let e=this.injector.get(k),t=this.injector.get(ee);e.events.pipe(D(n=>n instanceof Z),Ne(this.destroy$),Je(!0)).subscribe(()=>{this.breadcrumbs=this.getBreadcrumbs(t.root),this.cdr.markForCheck()})}catch{throw new Error(`${ft} You should import RouterModule if you want to use 'NzAutoGenerate'.`)}}getBreadcrumbs(e,t="",n=[]){let s=e.children;if(s.length===0)return n;for(let a of s)if(a.outlet===lt){let f=a.snapshot.url.map(v=>v.path).filter(v=>v).join("/"),x=f?`${t}/${f}`:t,w=this.nzRouteLabelFn(a.snapshot.data[this.nzRouteLabel]);if(f&&w){let v={label:w,params:a.snapshot.params,url:x};n.push(v)}return this.getBreadcrumbs(a,x,n)}return n}prepareComponentForRtl(){this.dir==="rtl"?this.renderer.addClass(this.elementRef.nativeElement,"ant-breadcrumb-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-breadcrumb-rtl")}};r.\u0275fac=function(t){return new(t||r)(y(Ce),y(j),y(tt),y(xe),y(te,8))},r.\u0275cmp=T({type:r,selectors:[["nz-breadcrumb"]],hostAttrs:[1,"ant-breadcrumb"],inputs:{nzAutoGenerate:"nzAutoGenerate",nzSeparator:"nzSeparator",nzRouteLabel:"nzRouteLabel",nzRouteLabelFn:"nzRouteLabelFn"},exportAs:["nzBreadcrumb"],standalone:!0,features:[Se([{provide:we,useExisting:r}]),S],ngContentSelectors:Le,decls:2,vars:1,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(t,n){t&1&&(W(),X(0),m(1,oi,2,1,"ng-container",0)),t&2&&(l(),p("ngIf",n.nzAutoGenerate&&n.breadcrumbs.length))},dependencies:[st,Ue,Ae],encapsulation:2,changeDetection:0});let i=r;return Qe([_t()],i.prototype,"nzAutoGenerate",void 0),i})(),Nt=(()=>{let r=class r{};r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=_e({type:r}),r.\u0275inj=fe({imports:[Ve,Ae]});let i=r;return i})();var ai=["conTpl"],li=["affix"];function ci(i,r){}function ui(i,r){if(i&1&&(h(0,"nz-affix",0,2),m(2,ci,0,0,"ng-template",3),d()),i&2){let o=c(),e=A(3);p("nzOffsetTop",o.fixedOffsetTop),l(2),p("ngTemplateOutlet",e)}}function mi(i,r){}function pi(i,r){if(i&1&&m(0,mi,0,0,"ng-template",3),i&2){c();let o=A(3);p("ngTemplateOutlet",o)}}function hi(i,r){}function di(i,r){if(i&1&&m(0,hi,0,0,"ng-template",3),i&2){let o=c(2);p("ngTemplateOutlet",o.breadcrumb)}}function fi(i,r){if(i&1&&(h(0,"a",15),I(1),d()),i&2){let o=c().$implicit;p("routerLink",o.link),l(),me(o.title)}}function _i(i,r){if(i&1&&I(0),i&2){let o=c().$implicit;N(" ",o.title," ")}}function gi(i,r){if(i&1&&(h(0,"nz-breadcrumb-item"),m(1,fi,2,2,"a",15)(2,_i,1,1),d()),i&2){let o=r.$implicit;l(),g(1,o.link?1:2)}}function Ci(i,r){if(i&1&&(h(0,"nz-breadcrumb"),G(1,gi,3,1,"nz-breadcrumb-item",null,$),d()),i&2){let o=c(3);l(),K(o.paths)}}function xi(i,r){if(i&1&&m(0,Ci,3,0,"nz-breadcrumb"),i&2){let o=c(2);g(0,o.paths&&o.paths.length>0?0:-1)}}function bi(i,r){}function vi(i,r){if(i&1&&(h(0,"div",16),m(1,bi,0,0,"ng-template",3),d()),i&2){let o=c(2);l(),p("ngTemplateOutlet",o.logo)}}function Ti(i,r){}function Si(i,r){if(i&1&&m(0,Ti,0,0,"ng-template",3),i&2){let o=c(3);p("ngTemplateOutlet",o._titleTpl)}}function yi(i,r){if(i&1&&(Y(0),I(1),Q()),i&2){let o=c(5);l(),me(o.titleSub)}}function Ri(i,r){if(i&1&&(h(0,"small"),m(1,yi,2,1,"ng-container",18),d()),i&2){let o=c(4);l(),p("nzStringTemplateOutlet",o.titleSub)}}function Ei(i,r){if(i&1&&(I(0),m(1,Ri,2,1,"small")),i&2){let o=c(3);N(" ",o._titleVal," "),l(),g(1,o.titleSub?1:-1)}}function Mi(i,r){if(i&1&&(h(0,"h1",17),m(1,Si,1,1,null,3)(2,Ei,2,2),d()),i&2){let o=c(2);l(),g(1,o._titleTpl?1:2)}}function zi(i,r){}function Ii(i,r){if(i&1&&(h(0,"div",19),m(1,zi,0,0,"ng-template",3),d()),i&2){let o=c(2);l(),p("ngTemplateOutlet",o.action)}}function ki(i,r){}function Di(i,r){}function Bi(i,r){if(i&1&&(h(0,"div",20),m(1,Di,0,0,"ng-template",3),d()),i&2){let o=c(2);l(),p("ngTemplateOutlet",o.extra)}}function wi(i,r){}var Ai=()=>({rows:3}),Oi=()=>({size:"large",shape:"circle"});function Hi(i,r){if(i&1){let o=z();h(0,"div",4)(1,"div")(2,"nz-skeleton",5),m(3,di,1,1,null,3)(4,xi,1,1),h(5,"div",6),m(6,vi,2,1,"div",7),h(7,"div",8)(8,"div",9),m(9,Mi,3,1,"h1",10)(10,Ii,2,1,"div",11),d(),h(11,"div",9)(12,"div",12,13),C("cdkObserveContent",function(){E(o);let t=c();return M(t.checkContent())}),X(14),m(15,ki,0,0,"ng-template",3),d(),m(16,Bi,2,1,"div",14),d()()(),m(17,wi,0,0,"ng-template",3),d()()()}if(i&2){let o=c();V("page-header-rtl",o.dir==="rtl"),l(),V("page-header__wide",o.wide),l(),p("nzLoading",o.loading)("nzTitle",!1)("nzActive",!0)("nzParagraph",Pe(16,Ai))("nzAvatar",Pe(17,Oi)),l(),g(3,o.breadcrumb?3:4),l(3),g(6,o.logo?6:-1),l(3),g(9,o._titleVal||o._titleTpl?9:-1),l(),g(10,o.action?10:-1),l(5),p("ngTemplateOutlet",o.content),l(),g(16,o.extra?16:-1),l(),p("ngTemplateOutlet",o.tab)}}var Ni=["*"],$e=(()=>{let r=class r{get menus(){return this.menuSrv.getPathByUrl(this.router.url,this.recursiveBreadcrumb)}set title(e){e instanceof nt?(this._title=null,this._titleTpl=e,this._titleVal=""):(this._title=e,this._titleVal=this._title)}constructor(e,t,n){this.renderer=u(xe),this.router=u(k),this.cdr=u(j),this.menuSrv=u(Re),this.i18nSrv=u(ye,{optional:!0}),this.titleSrv=u(gt,{optional:!0}),this.reuseSrv=u(F,{optional:!0}),this.directionality=u(te,{optional:!0}),this.destroy$=u(be),this.inited=!1,this.isBrowser=!0,this.dir="ltr",this._titleVal="",this.paths=[],this._title=null,this._titleTpl=null,this.loading=!1,this.wide=!1,this.breadcrumb=null,this.logo=null,this.action=null,this.content=null,this.extra=null,this.tab=null,this.isBrowser=n.isBrowser,t.attach(this,"pageHeader",{home:"\u9996\u9875",homeLink:"/",autoBreadcrumb:!0,recursiveBreadcrumb:!1,autoTitle:!0,syncTitle:!0,fixed:!1,fixedOffsetTop:64}),e.notify.pipe(R(),D(a=>this.affix&&a.type==="layout"&&a.name==="collapsed")).subscribe(()=>this.affix.updatePosition({}));let s=[this.router.events.pipe(D(a=>a instanceof Z))];this.menuSrv!=null&&s.push(this.menuSrv.change),this.i18nSrv!=null&&s.push(this.i18nSrv.change),Xe(...s).pipe(R(),D(()=>this.inited)).subscribe(()=>this.refresh())}refresh(){this.setTitle().genBreadcrumb(),this.cdr.detectChanges()}genBreadcrumb(){if(this.breadcrumb||!this.autoBreadcrumb||this.menus.length<=0){this.paths=[];return}let e=[];this.menus.forEach(t=>{if(typeof t.hideInBreadcrumb<"u"&&t.hideInBreadcrumb)return;let n=t.text;t.i18n&&this.i18nSrv&&(n=this.i18nSrv.fanyi(t.i18n)),e.push({title:n,link:t.link&&[t.link]})}),this.home&&e.splice(0,0,{title:this.homeI18n&&this.i18nSrv&&this.i18nSrv.fanyi(this.homeI18n)||this.home,link:[this.homeLink]}),this.paths=e}setTitle(){if(this._title==null&&this._titleTpl==null&&this.autoTitle&&this.menus.length>0){let e=this.menus[this.menus.length-1],t=e.text;e.i18n&&this.i18nSrv&&(t=this.i18nSrv.fanyi(e.i18n)),this._titleVal=t}return this._titleVal&&this.syncTitle&&(this.titleSrv&&this.titleSrv.setTitle(this._titleVal),!this.inited&&this.reuseSrv&&(this.reuseSrv.title=this._titleVal)),this}checkContent(){yt(this.conTpl.nativeElement)?this.renderer.setAttribute(this.conTpl.nativeElement,"hidden",""):this.renderer.removeAttribute(this.conTpl.nativeElement,"hidden")}ngOnInit(){this.dir=this.directionality?.value,this.directionality?.change.pipe(R(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.refresh(),this.inited=!0}ngAfterViewInit(){this.checkContent()}ngOnChanges(){this.inited&&this.refresh()}};r.\u0275fac=function(t){return new(t||r)(y(dt),y(ht),y(Ee))},r.\u0275cmp=T({type:r,selectors:[["page-header"]],viewQuery:function(t,n){if(t&1&&(le(ai,5),le(li,5)),t&2){let s;ce(s=ue())&&(n.conTpl=s.first),ce(s=ue())&&(n.affix=s.first)}},inputs:{title:"title",titleSub:"titleSub",loading:[_.HasDecoratorInputTransform,"loading","loading",b],wide:[_.HasDecoratorInputTransform,"wide","wide",b],home:"home",homeLink:"homeLink",homeI18n:"homeI18n",autoBreadcrumb:[_.HasDecoratorInputTransform,"autoBreadcrumb","autoBreadcrumb",b],autoTitle:[_.HasDecoratorInputTransform,"autoTitle","autoTitle",b],syncTitle:[_.HasDecoratorInputTransform,"syncTitle","syncTitle",b],fixed:[_.HasDecoratorInputTransform,"fixed","fixed",b],fixedOffsetTop:[_.HasDecoratorInputTransform,"fixedOffsetTop","fixedOffsetTop",pe],breadcrumb:"breadcrumb",recursiveBreadcrumb:[_.HasDecoratorInputTransform,"recursiveBreadcrumb","recursiveBreadcrumb",b],logo:"logo",action:"action",content:"content",extra:"extra",tab:"tab"},exportAs:["pageHeader"],standalone:!0,features:[ve,ge,S],ngContentSelectors:Ni,decls:4,vars:1,consts:[[3,"nzOffsetTop"],["phTpl",""],["affix",""],[3,"ngTemplateOutlet"],[1,"page-header"],[1,"d-block",3,"nzLoading","nzTitle","nzActive","nzParagraph","nzAvatar"],[1,"page-header__detail"],["class","page-header__logo"],[1,"page-header__main"],[1,"page-header__row"],["class","page-header__title"],["class","page-header__action"],[1,"page-header__desc",3,"cdkObserveContent"],["conTpl",""],["class","page-header__extra"],[3,"routerLink"],[1,"page-header__logo"],[1,"page-header__title"],[4,"nzStringTemplateOutlet"],[1,"page-header__action"],[1,"page-header__extra"]],template:function(t,n){t&1&&(W(),m(0,ui,3,2,"nz-affix",0)(1,pi,1,1)(2,Hi,18,18,"ng-template",null,1,q)),t&2&&g(0,n.isBrowser&&n.fixed?0:1)},dependencies:[kt,J,Bt,Ve,Ae,mt,ze,Ct],encapsulation:2,changeDetection:0});let i=r;return i})();var Fi=[$e],Pi=(()=>{let r=class r{};r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=_e({type:r}),r.\u0275inj=fe({imports:[at,pt,xt,Dt,wt,Nt,Ie,Fi]});let i=r;return i})();export{F as a,Ht as b,Ae as c,Ve as d,Nt as e,$e as f,Pi as g};
