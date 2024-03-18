import{a as Qe,b as qe}from"./chunk-JKRTWPTS.js";import{Ab as Re,Ba as _e,Bb as ye,Cb as Me,D as te,Da as Ce,Db as Ee,Fa as A,Fb as ke,Ge,H as ie,Ia as se,Ja as h,Kb as Ie,L as de,Lb as U,Le as ae,M as ne,Nb as Ae,Ne as Ve,Oa as xe,Qc as ze,Rc as Oe,Sa as be,Ta as b,Ua as K,Ug as Ke,Va as f,Wa as ve,Wb as De,Wc as Q,Xa as re,Yc as He,Zc as Ne,_c as P,a as N,ba as T,bg as $e,ca as _,cb as D,cc as Be,da as E,db as Y,dc as w,ec as oe,fa as pe,fb as W,gb as X,h as ue,ha as k,hb as m,hc as Ue,ia as I,ib as d,ih as Ye,jb as Te,k as ee,l as he,na as $,nb as B,od as S,pa as F,qb as p,qd as Fe,s as me,sb as u,sc as we,sd as Pe,td as je,va as l,vh as We,wa as fe,xa as ge,xh as Xe,yd as Le,zb as Se}from"./chunk-CDEDXUOP.js";var C=function(n){return n[n.Menu=0]="Menu",n[n.MenuForce=1]="MenuForce",n[n.URL=2]="URL",n}(C||{});var z=new F("REUSE_TAB_CACHED_MANAGER"),j=class{constructor(){this.list=[],this.title={},this.closable={}}};var R=new F("REUSE_TAB_STORAGE_KEY"),y=new F("REUSE_TAB_STORAGE_STATE"),L=class{get(s){return JSON.parse(localStorage.getItem(s)||"[]")||[]}update(s,a){return localStorage.setItem(s,JSON.stringify(a)),!0}remove(s){localStorage.removeItem(s)}};var x=(()=>{let s=class s{get snapshot(){return this.injector.get(Q).snapshot}get inited(){return this._inited}get curUrl(){return this.getUrl(this.snapshot)}set max(e){this._max=Math.min(Math.max(e,2),100);for(let t=this.cached.list.length;t>this._max;t--)this.cached.list.pop()}set keepingScroll(e){this._keepingScroll=e,this.initScroll()}get keepingScroll(){return this._keepingScroll}get items(){return this.cached.list}get count(){return this.cached.list.length}get change(){return this._cachedChange.asObservable()}set title(e){let t=this.curUrl;typeof e=="string"&&(e={text:e}),this.cached.title[t]=e,this.di("update current tag title: ",e),this._cachedChange.next({active:"title",url:t,title:e,list:this.cached.list})}index(e){return this.cached.list.findIndex(t=>t.url===e)}exists(e){return this.index(e)!==-1}get(e){return e&&this.cached.list.find(t=>t.url===e)||null}remove(e,t){let i=typeof e=="string"?this.index(e):e,r=i!==-1?this.cached.list[i]:null;return!r||!t&&!r.closable?!1:(this.destroy(r._handle),this.cached.list.splice(i,1),delete this.cached.title[e],!0)}close(e,t=!1){return this.removeUrlBuffer=e,this.remove(e,t),this._cachedChange.next({active:"close",url:e,list:this.cached.list}),this.di("close tag",e),!0}closeRight(e,t=!1){let i=this.index(e);for(let r=this.count-1;r>i;r--)this.remove(r,t);return this.removeUrlBuffer=null,this._cachedChange.next({active:"closeRight",url:e,list:this.cached.list}),this.di("close right tages",e),!0}clear(e=!1){this.cached.list.forEach(t=>{!e&&t.closable&&this.destroy(t._handle)}),this.cached.list=this.cached.list.filter(t=>!e&&!t.closable),this.removeUrlBuffer=null,this._cachedChange.next({active:"clear",list:this.cached.list}),this.di("clear all catch")}move(e,t){let i=this.cached.list.findIndex(o=>o.url===e);if(i===-1)return;let r=this.cached.list.slice();r.splice(t<0?r.length+t:t,0,r.splice(i,1)[0]),this.cached.list=r,this._cachedChange.next({active:"move",url:e,position:t,list:this.cached.list})}replace(e){let t=this.curUrl;this.injector.get(P).navigateByUrl(e).then(()=>{this.exists(t)?this.close(t,!0):this.removeUrlBuffer=t})}getTitle(e,t){if(this.cached.title[e])return this.cached.title[e];if(t&&t.data&&(t.data.titleI18n||t.data.title))return{text:t.data.title,i18n:t.data.titleI18n};let i=this.getMenu(e);return i?{text:i.text,i18n:i.i18n}:{text:e}}clearTitleCached(){this.cached.title={}}set closable(e){let t=this.curUrl;this.cached.closable[t]=e,this.di("update current tag closable: ",e),this._cachedChange.next({active:"closable",closable:e,list:this.cached.list})}getClosable(e,t){if(typeof this.cached.closable[e]<"u")return this.cached.closable[e];if(t&&t.data&&typeof t.data.reuseClosable=="boolean")return t.data.reuseClosable;let i=this.mode!==C.URL?this.getMenu(e):null;return i&&typeof i.reuseClosable=="boolean"?i.reuseClosable:!0}clearClosableCached(){this.cached.closable={}}getTruthRoute(e){let t=e;for(;t.firstChild;)t=t.firstChild;return t}getUrl(e){let t=this.getTruthRoute(e),i=[];for(;t;)i.push(t.url.join("/")),t=t.parent;return`/${i.filter(o=>o).reverse().join("/")}`}can(e){let t=this.getUrl(e);if(t===this.removeUrlBuffer)return!1;if(e.data&&typeof e.data.reuse=="boolean")return e.data.reuse;if(this.mode!==C.URL){let i=this.getMenu(t);if(!i)return!1;if(this.mode===C.Menu){if(i.reuse===!1)return!1}else if(!i.reuse||i.reuse!==!0)return!1;return!0}return!this.isExclude(t)}isExclude(e){return this.excludes.findIndex(t=>t.test(e))!==-1}refresh(e){this._cachedChange.next({active:"refresh",data:e})}destroy(e){e&&e.componentRef&&e.componentRef.destroy&&e.componentRef.destroy()}di(...e){}constructor(){this.injector=l(Ce),this.menuService=l(Pe),this.cached=l(z),this.stateKey=l(R),this.stateSrv=l(y),this._inited=!1,this._max=10,this._keepingScroll=!1,this._cachedChange=new he(null),this.removeUrlBuffer=null,this.positionBuffer={},this.debug=!1,this.routeParamMatchMode="strict",this.mode=C.Menu,this.excludes=[],this.storageState=!1,this.cached==null&&(this.cached={list:[],title:{},closable:{}})}init(){this.initScroll(),this._inited=!0,this.loadState()}loadState(){this.storageState&&(this.cached.list=this.stateSrv.get(this.stateKey).map(e=>({title:{text:e.title},url:e.url,position:e.position})),this._cachedChange.next({active:"loadState"}))}getMenu(e){let t=this.menuService.getPathByUrl(e);return!t||t.length===0?null:t.pop()}runHook(e,t,i="init"){if(typeof t=="number"&&(t=this.cached.list[t]._handle?.componentRef),t==null||!t.instance)return;let r=t.instance,o=r[e];typeof o=="function"&&(e==="_onReuseInit"?o.call(r,i):o.call(r))}hasInValidRoute(e){return!e.routeConfig||!!e.routeConfig.loadChildren||!!e.routeConfig.children}shouldDetach(e){return this.hasInValidRoute(e)?!1:(this.di("#shouldDetach",this.can(e),this.getUrl(e)),this.can(e))}saveCache(e,t,i){let r=this.getTruthRoute(e),o=this.getUrl(e),c=this.index(o),g={title:this.getTitle(o,r),url:o,closable:this.getClosable(o,e),_snapshot:e,_handle:t};if(c<0){if(this.items.splice(i??this.items.length,0,g),this.count>this._max){let O=this.items.findIndex(v=>v.url!==o&&v.closable);if(O!==-1){let v=this.items[O];this.remove(O,!1),te(1).pipe(ne(1)).subscribe(()=>this._cachedChange.next({active:"close",url:v.url,list:this.cached.list}))}}}else this.items[c]=g}store(e,t){let i=this.getUrl(e);t!=null&&this.saveCache(e,t);let r=this.cached.list,o={title:this.getTitle(i,e),closable:this.getClosable(i,e),position:this.getKeepingScroll(i,e)?this.positionBuffer[i]:null,url:i,_snapshot:e,_handle:t},c=this.index(i),g=r[c]?._handle?.componentRef;t==null&&g!=null&&te(100).pipe(ne(1)).subscribe(()=>this.runHook("_onReuseInit",g)),r[c]=o,this.removeUrlBuffer=null,this.di("#store","[override]",i),t&&t.componentRef&&this.runHook("_onReuseDestroy",t.componentRef),this._cachedChange.next({active:"override",item:o,list:r})}shouldAttach(e){if(this.hasInValidRoute(e))return!1;let t=this.getUrl(e),i=this.get(t),r=!!(i&&i._handle);return this.di("#shouldAttach",r,t),r||this._cachedChange.next({active:"add",url:t,list:this.cached.list}),r}retrieve(e){if(this.hasInValidRoute(e))return null;let t=this.getUrl(e),i=this.get(t),r=i&&i._handle||null;return this.di("#retrieve",t,r),r}shouldReuseRoute(e,t){let i=e.routeConfig===t.routeConfig;if(!i)return!1;let r=e.routeConfig&&e.routeConfig.path||"";return r.length>0&&~r.indexOf(":")&&(this.routeParamMatchMode==="strict"?i=this.getUrl(e)===this.getUrl(t):i=r===(t.routeConfig&&t.routeConfig.path||"")),this.di("====================="),this.di("#shouldReuseRoute",i,`${this.getUrl(t)}=>${this.getUrl(e)}`,e,t),i}getKeepingScroll(e,t){if(t&&t.data&&typeof t.data.keepingScroll=="boolean")return t.data.keepingScroll;let i=this.mode!==C.URL?this.getMenu(e):null;return i&&typeof i.keepingScroll=="boolean"?i.keepingScroll:this.keepingScroll}get isDisabledInRouter(){return this.injector.get(He,{}).scrollPositionRestoration==="disabled"}get ss(){return this.injector.get(Ye)}initScroll(){this._router$&&this._router$.unsubscribe(),this._router$=this.injector.get(P).events.subscribe(e=>{if(e instanceof ze){let t=this.curUrl;this.getKeepingScroll(t,this.getTruthRoute(this.snapshot))?this.positionBuffer[t]=this.ss.getScrollPosition(this.keepingScrollContainer):delete this.positionBuffer[t]}else if(e instanceof Oe){let t=this.curUrl,i=this.get(t);i&&i.position&&this.getKeepingScroll(t,this.getTruthRoute(this.snapshot))&&(this.isDisabledInRouter?this.ss.scrollToPosition(this.keepingScrollContainer,i.position):setTimeout(()=>this.ss.scrollToPosition(this.keepingScrollContainer,i.position),1))}})}ngOnDestroy(){let{_cachedChange:e,_router$:t}=this;this.clear(),this.cached.list=[],e.complete(),t&&t.unsubscribe()}};s.\u0275fac=function(t){return new(t||s)},s.\u0275prov=$({token:s,factory:s.\u0275fac});let n=s;return n})();function tt(n,s){if(n&1){let a=B();m(0,"li",5),p("click",function(t){k(a);let i=u();return I(i.click(t,"refresh"))}),d()}if(n&2){let a=u();f("innerHTML",a.i18n.refresh,A)}}function it(n,s){if(n&1){let a=B();m(0,"li",7),p("click",function(t){let r=k(a).$implicit,o=u(2);return I(o.click(t,"custom",r))}),d()}if(n&2){let a=s.$implicit,e=u(2);f("nzDisabled",e.isDisabled(a))("innerHTML",a.title,A),K("data-type",a.id)}}function nt(n,s){if(n&1&&(Te(0,"li",6),W(1,it,1,3,"li",8,Y)),n&2){let a=u();h(),X(a.customContextMenu)}}var q=(()=>{let s=class s{constructor(){this.i18nSrv=l(Ke),this.close=new T}set i18n(e){this._i18n=N(N({},this.i18nSrv.getData("reuseTab")),e)}get i18n(){return this._i18n}get includeNonCloseable(){return this.event.ctrlKey}notify(e){this.close.next({type:e,item:this.item,includeNonCloseable:this.includeNonCloseable})}ngOnInit(){this.includeNonCloseable&&(this.item.closable=!0)}click(e,t,i){if(e.preventDefault(),e.stopPropagation(),!(t==="close"&&!this.item.closable)&&!(t==="closeRight"&&this.item.last)){if(i){if(this.isDisabled(i))return;i.fn(this.item,i)}this.notify(t)}}isDisabled(e){return e.disabled?e.disabled(this.item):!1}closeMenu(e){e.type==="click"&&e.button===2||this.notify(null)}};s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=E({type:s,selectors:[["reuse-tab-context-menu"]],hostBindings:function(t,i){t&1&&p("click",function(o){return i.closeMenu(o)},!1,se)("contextmenu",function(o){return i.closeMenu(o)},!1,se)},inputs:{i18n:"i18n",item:"item",event:"event",customContextMenu:"customContextMenu"},outputs:{close:"close"},standalone:!0,features:[U],decls:6,vars:7,consts:[["nz-menu",""],["nz-menu-item","","data-type","refresh",3,"innerHTML"],["nz-menu-item","","data-type","close",3,"nzDisabled","innerHTML","click"],["nz-menu-item","","data-type","closeOther",3,"innerHTML","click"],["nz-menu-item","","data-type","closeRight",3,"nzDisabled","innerHTML","click"],["nz-menu-item","","data-type","refresh",3,"innerHTML","click"],["nz-menu-divider",""],["nz-menu-item","",3,"nzDisabled","innerHTML","click"],["nz-menu-item","",3,"nzDisabled","innerHTML"]],template:function(t,i){t&1&&(m(0,"ul",0),b(1,tt,1,1,"li",1),m(2,"li",2),p("click",function(o){return i.click(o,"close")}),d(),m(3,"li",3),p("click",function(o){return i.click(o,"closeOther")}),d(),m(4,"li",4),p("click",function(o){return i.click(o,"closeRight")}),d(),b(5,nt,3,0),d()),t&2&&(h(),D(1,i.item.active?1:-1),h(),f("nzDisabled",!i.item.closable)("innerHTML",i.i18n.close,A),h(),f("innerHTML",i.i18n.closeOther,A),h(),f("nzDisabled",i.item.last)("innerHTML",i.i18n.closeRight,A),h(),D(5,i.customContextMenu.length>0?5:-1))},dependencies:[Xe,We],encapsulation:2,changeDetection:0});let n=s;return n})();var M=(()=>{let s=class s{constructor(){this.overlay=l(Ve),this.ref=null,this.show=new ee,this.close=new ee}remove(){this.ref&&(this.ref.detach(),this.ref.dispose(),this.ref=null)}open(e){this.remove();let{event:t,item:i,customContextMenu:r}=e,{x:o,y:c}=t,g=[new ae({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new ae({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})],O=this.overlay.position().flexibleConnectedTo({x:o,y:c}).withPositions(g);this.ref=this.overlay.create({positionStrategy:O,panelClass:"reuse-tab__cm",scrollStrategy:this.overlay.scrollStrategies.close()});let v=this.ref.attach(new Ge(q)),H=v.instance;H.i18n=this.i18n,H.item=N({},i),H.customContextMenu=r,H.event=t;let ce=new ue;ce.add(H.close.subscribe(et=>{this.close.next(et),this.remove()})),v.onDestroy(()=>ce.unsubscribe())}};s.\u0275fac=function(t){return new(t||s)},s.\u0275prov=$({token:s,factory:s.\u0275fac});let n=s;return n})();var J=(()=>{let s=class s{set i18n(e){this.srv.i18n=e}constructor(){this.srv=l(M),this.change=new T,this.srv.show.pipe(S()).subscribe(e=>this.srv.open(e)),this.srv.close.pipe(S()).subscribe(e=>this.change.emit(e))}};s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=E({type:s,selectors:[["reuse-tab-context"]],inputs:{i18n:"i18n"},outputs:{change:"change"},standalone:!0,features:[U],decls:0,vars:0,template:function(t,i){},encapsulation:2});let n=s;return n})();var Z=(()=>{let s=class s{constructor(){this.srv=l(M)}_onContextMenu(e){this.srv.show.next({event:e,item:this.item,customContextMenu:this.customContextMenu}),e.preventDefault(),e.stopPropagation()}};s.\u0275fac=function(t){return new(t||s)},s.\u0275dir=pe({type:s,selectors:[["","reuse-tab-context-menu",""]],hostBindings:function(t,i){t&1&&p("contextmenu",function(o){return i._onContextMenu(o)})},inputs:{item:[_.None,"reuse-tab-context-menu","item"],customContextMenu:"customContextMenu"},exportAs:["reuseTabContextMenu"],standalone:!0});let n=s;return n})();var st=["tabset"];function rt(n,s){}var ot=n=>({$implicit:n});function at(n,s){if(n&1&&b(0,rt,0,0,"ng-template",6),n&2){let a=u(2).$implicit,e=u();f("ngTemplateOutlet",e.titleRender)("ngTemplateOutletContext",Ae(2,ot,a))}}function lt(n,s){if(n&1&&Ee(0),n&2){let a=u(2).$implicit;ke(" ",a.title," ")}}function ct(n,s){if(n&1){let a=B();m(0,"i",8),p("click",function(t){k(a);let i=u(2).$index,r=u();return I(r._close(t,i,!1))}),d()}}function ut(n,s){if(n&1&&(m(0,"div",5)(1,"span"),b(2,at,1,4,null,6)(3,lt,1,1),d()(),b(4,ct,1,0,"i",7)),n&2){let a=u().$implicit,e=u();f("reuse-tab-context-menu",a)("customContextMenu",e.customContextMenu),K("title",a.title),h(),ve("max-width",e.tabMaxWidth,"px"),re("reuse-tab__name-width",e.tabMaxWidth),h(),D(2,e.titleRender?2:3),h(2),D(4,a.closable?4:-1)}}function ht(n,s){if(n&1){let a=B();m(0,"nz-tab",3),p("nzClick",function(){let i=k(a).$index,r=u();return I(r._to(i))}),b(1,ut,5,9,"ng-template",null,4,De),d()}if(n&2){let a=Me(2);f("nzTitle",a)}}var Je=(()=>{let s=class s{constructor(){this.srv=l(x,{optional:!0}),this.cdr=l(Be),this.router=l(P),this.route=l(Q),this.i18nSrv=l(Fe,{optional:!0}),this.doc=l(Ue),this.platform=l(je),this.directionality=l(Le,{optional:!0}),this.stateKey=l(R),this.stateSrv=l(y),this.destroy$=l(xe),this.list=[],this.pos=0,this.dir="ltr",this.mode=C.Menu,this.debug=!1,this.allowClose=!0,this.keepingScroll=!1,this.storageState=!1,this.customContextMenu=[],this.tabBarStyle=null,this.tabType="line",this.routeParamMatchMode="strict",this.disabled=!1,this.change=new T,this.close=new T}set keepingScrollContainer(e){this._keepingScrollContainer=typeof e=="string"?this.doc.querySelector(e):e}genTit(e){return e.i18n&&this.i18nSrv?this.i18nSrv.fanyi(e.i18n):e.text}get curUrl(){return this.srv.getUrl(this.route.snapshot)}genCurItem(){let e=this.curUrl,t=this.srv.getTruthRoute(this.route.snapshot);return{url:e,title:this.genTit(this.srv.getTitle(e,t)),closable:this.allowClose&&this.srv.count>0&&this.srv.getClosable(e,t),active:!1,last:!1,index:0}}genList(e){let t=this.srv.items.map((o,c)=>({url:o.url,title:this.genTit(o.title),closable:this.allowClose&&this.srv.count>0&&this.srv.getClosable(o.url,o._snapshot),position:o.position,index:c,active:!1,last:!1})),i=this.curUrl,r=t.findIndex(o=>o.url===i)===-1;if(e&&e.active==="close"&&e.url===i){r=!1;let o=0,c=this.list.find(g=>g.url===i);c.index===t.length?o=t.length-1:c.index<t.length&&(o=Math.max(0,c.index)),this.router.navigateByUrl(t[o].url)}if(r){let o=this.pos+1;t.splice(o,0,this.genCurItem()),this.srv.saveCache(this.route.snapshot,null,o)}t.forEach((o,c)=>o.index=c),t.length===1&&(t[0].closable=!1),this.list=t,this.cdr.detectChanges(),this.updatePos()}updateTitle(e){let t=this.list.find(i=>i.url===e.url);t&&(t.title=this.genTit(e.title),this.cdr.detectChanges())}refresh(e){this.srv.runHook("_onReuseInit",this.pos===e.index?this.srv.componentRef:e.index,"refresh")}saveState(){!this.srv.inited||!this.storageState||this.stateSrv?.update(this.stateKey,this.list)}contextMenuChange(e){let t=null;switch(e.type){case"refresh":this.refresh(e.item);break;case"close":this._close(null,e.item.index,e.includeNonCloseable);break;case"closeRight":t=()=>{this.srv.closeRight(e.item.url,e.includeNonCloseable),this.close.emit(null)};break;case"closeOther":t=()=>{this.srv.clear(e.includeNonCloseable),this.close.emit(null)};break}t&&(!e.item.active&&e.item.index<=this.list.find(i=>i.active).index?this._to(e.item.index,t):t())}_to(e,t){e=Math.max(0,Math.min(e,this.list.length-1));let i=this.list[e];this.router.navigateByUrl(i.url).then(r=>{r&&(this.item=i,this.change.emit(i),t?.())})}_close(e,t,i){e!=null&&(e.preventDefault(),e.stopPropagation());let r=this.list[t];return(this.canClose?this.canClose({item:r,includeNonCloseable:i}):me(!0)).pipe(ie(o=>o)).subscribe(()=>{this.srv.close(r.url,i),this.close.emit(r),this.cdr.detectChanges()}),!1}activate(e){this.srv!=null&&(this.srv.componentRef={instance:e})}updatePos(){let e=this.srv.getUrl(this.route.snapshot),t=this.list.filter(c=>c.url===e||!this.srv.isExclude(c.url));if(t.length===0)return;let i=t[t.length-1],r=t.find(c=>c.url===e);i.last=!0;let o=r==null?i.index:r.index;t.forEach((c,g)=>c.active=o===g),this.pos=o,this.tabset.nzSelectedIndex=o,this.list=t,this.cdr.detectChanges(),this.saveState()}ngOnInit(){this.dir=this.directionality?.value,this.directionality?.change.pipe(S(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),!(!this.platform.isBrowser||this.srv==null)&&(this.srv.change.pipe(S(this.destroy$)).subscribe(e=>{switch(e?.active){case"title":this.updateTitle(e);return;case"override":if(e?.list?.length===this.list.length){this.updatePos();return}break}this.genList(e)}),this.i18nSrv?.change.pipe(ie(()=>this.srv.inited),S(this.destroy$),de(100)).subscribe(()=>this.genList({active:"title"})),this.srv.init())}ngOnChanges(e){!this.platform.isBrowser||this.srv==null||(e.max&&(this.srv.max=this.max),e.excludes&&(this.srv.excludes=this.excludes),e.mode&&(this.srv.mode=this.mode),e.routeParamMatchMode&&(this.srv.routeParamMatchMode=this.routeParamMatchMode),e.keepingScroll&&(this.srv.keepingScroll=this.keepingScroll,this.srv.keepingScrollContainer=this._keepingScrollContainer),e.storageState&&(this.srv.storageState=this.storageState),this.srv.debug=this.debug,this.cdr.detectChanges())}};s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=E({type:s,selectors:[["reuse-tab"],["","reuse-tab",""]],viewQuery:function(t,i){if(t&1&&Se(st,5),t&2){let r;Re(r=ye())&&(i.tabset=r.first)}},hostVars:10,hostBindings:function(t,i){t&2&&re("reuse-tab",!0)("reuse-tab__line",i.tabType==="line")("reuse-tab__card",i.tabType==="card")("reuse-tab__disabled",i.disabled)("reuse-tab-rtl",i.dir==="rtl")},inputs:{mode:"mode",i18n:"i18n",debug:[_.HasDecoratorInputTransform,"debug","debug",w],max:[_.HasDecoratorInputTransform,"max","max",oe],tabMaxWidth:[_.HasDecoratorInputTransform,"tabMaxWidth","tabMaxWidth",oe],excludes:"excludes",allowClose:[_.HasDecoratorInputTransform,"allowClose","allowClose",w],keepingScroll:[_.HasDecoratorInputTransform,"keepingScroll","keepingScroll",w],storageState:[_.HasDecoratorInputTransform,"storageState","storageState",w],keepingScrollContainer:"keepingScrollContainer",customContextMenu:"customContextMenu",tabBarExtraContent:"tabBarExtraContent",tabBarGutter:"tabBarGutter",tabBarStyle:"tabBarStyle",tabType:"tabType",routeParamMatchMode:"routeParamMatchMode",disabled:[_.HasDecoratorInputTransform,"disabled","disabled",w],titleRender:"titleRender",canClose:"canClose"},outputs:{change:"change",close:"close"},exportAs:["reuseTab"],standalone:!0,features:[Ie([M]),be,_e,U],decls:5,vars:7,consts:[[3,"nzSelectedIndex","nzAnimated","nzType","nzTabBarExtraContent","nzTabBarGutter","nzTabBarStyle"],["tabset",""],[3,"i18n","change"],[3,"nzTitle","nzClick"],["titleTemplate",""],[1,"reuse-tab__name",3,"reuse-tab-context-menu","customContextMenu"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["nz-icon","","nzType","close","class","reuse-tab__op"],["nz-icon","","nzType","close",1,"reuse-tab__op",3,"click"],[3,"nzTitle"]],template:function(t,i){t&1&&(m(0,"nz-tabset",0,1),W(2,ht,3,1,"nz-tab",9,Y),d(),m(4,"reuse-tab-context",2),p("change",function(o){return i.contextMenuChange(o)}),d()),t&2&&(f("nzSelectedIndex",i.pos)("nzAnimated",!1)("nzType",i.tabType)("nzTabBarExtraContent",i.tabBarExtraContent)("nzTabBarGutter",i.tabBarGutter)("nzTabBarStyle",i.tabBarStyle),h(2),X(i.list),h(2),f("i18n",i.i18n))},dependencies:[we,qe,Qe,Z,J,$e],encapsulation:2,changeDetection:0});let n=s;return n})();var V=class{constructor(){this.srv=l(x)}shouldDetach(s){return this.srv.shouldDetach(s)}store(s,a){this.srv.store(s,a)}shouldAttach(s){return this.srv.shouldAttach(s)}retrieve(s){return this.srv.retrieve(s)}shouldReuseRoute(s,a){return this.srv.shouldReuseRoute(s,a)}};var le=function(n){return n[n.CacheManager=0]="CacheManager",n[n.Store=1]="Store",n}(le||{});function Ze(n,s){return{\u0275kind:n,\u0275providers:s}}function Fi(n){let s=[x,{provide:R,useValue:n?.storeKey??"_reuse-tab-state"},(n?.cacheManager??mt()).\u0275providers,(n?.store??dt()).\u0275providers,{provide:Ne,useClass:V,deps:[x]},{provide:fe,multi:!0,useValue:()=>{let a=l(x);n?.debug&&(a.debug=n.debug),n?.mode&&(a.mode=n.mode),n?.routeParamMatchMode&&(a.routeParamMatchMode=n.routeParamMatchMode),n?.max&&(a.max=n.max),n?.excludes&&(a.excludes=n.excludes)}}];return ge(s)}function mt(){return Ze(le.CacheManager,[{provide:z,useFactory:()=>new j}])}function dt(){return Ze(le.Store,[{provide:y,useFactory:()=>new L}])}export{C as a,x as b,Je as c,Fi as d};
