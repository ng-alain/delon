import{a as oe,d as re,e as le}from"./chunk-DMCH6AWB.js";import{$a as f,$f as ne,Ab as Bt,C as Y,Cb as Wt,Ce as Tt,Dh as ce,Eb as nt,Ee as Kt,F as J,Fa as L,H as wt,I as kt,Id as A,Ie as Jt,Ja as m,Jc as Ht,Ka as d,La as tt,Le as te,Me as ee,Na as p,O as At,Oa as Z,Ob as pt,Pb as st,Qb as T,Ra as ht,Rb as N,Rc as $t,S as Dt,Sa as l,Sb as V,Sc as Vt,Ta as et,Tb as _,Ua as k,Ub as ft,W as ct,Wd as Yt,Y as M,Zd as Zt,_d as U,_f as at,da as Nt,ea as Rt,fb as b,fe as qt,gb as z,h as j,ha as D,hb as F,hc as bt,ia as Et,ib as H,ic as q,id as Qt,ie as Ut,ja as O,jb as $,jf as G,k as K,kf as ie,lb as B,ma as dt,mc as Pt,md as zt,n as xt,na as y,nc as gt,o as St,oa as C,od as Xt,oe as Gt,pb as I,q as v,rb as h,s as lt,sb as mt,tb as it,uc as Ft,ud as jt,wd as vt,xb as Ot,xh as se,yb as ut,za as Mt,zb as Lt,zh as ae}from"./chunk-SBXYWWID.js";function Se(a,e){if(a&1&&(H(0),F(1,"span",1),$()),a&2){let s=e.$implicit;m(1),l("nzType",s)}}function we(a,e){if(a&1&&(H(0),ut(1),$()),a&2){let s=h().$implicit;m(1),Bt(" ",s.tab.label," ")}}var ke=()=>({visible:!1});function Ae(a,e){if(a&1){let s=B();b(0,"li",8),I("click",function(){let n=y(s).$implicit,o=h(2);return C(o.onSelect(n))})("contextmenu",function(i){let o=y(s).$implicit,r=h(2);return C(r.onContextmenu(o,i))}),f(1,we,2,1,"ng-container",9),z()}if(a&2){let s=e.$implicit;k("ant-tabs-dropdown-menu-item-disabled",s.disabled),l("nzSelected",s.active)("nzDisabled",s.disabled),m(1),l("nzStringTemplateOutlet",s.tab.label)("nzStringTemplateOutletContext",nt(6,ke))}}function De(a,e){if(a&1&&(b(0,"ul",6),f(1,Ae,2,7,"li",7),z()),a&2){let s=h();m(1),l("ngForOf",s.items)}}function Ne(a,e){if(a&1){let s=B();b(0,"button",10),I("click",function(){y(s);let i=h();return C(i.addClicked.emit())}),z()}if(a&2){let s=h();l("addIcon",s.addIcon)}}var Re=()=>({minWidth:"46px"}),Ee=["navWarp"],Me=["navList"];function Oe(a,e){if(a&1){let s=B();b(0,"button",8),I("click",function(){y(s);let i=h();return C(i.addClicked.emit())}),z()}if(a&2){let s=h();l("addIcon",s.addIcon)}}function Le(a,e){}function Be(a,e){if(a&1&&(b(0,"div",9),f(1,Le,0,0,"ng-template",10),z()),a&2){let s=h();m(1),l("ngTemplateOutlet",s.extraTemplate)}}var We=["*"],Pe=["nz-tab-body",""];function Fe(a,e){}function He(a,e){if(a&1&&(H(0),f(1,Fe,0,0,"ng-template",1),$()),a&2){let s=h();m(1),l("ngTemplateOutlet",s.content)}}function $e(a,e){if(a&1&&(H(0),F(1,"span",1),$()),a&2){let s=e.$implicit;m(1),l("nzType",s)}}var Ve=["contentTemplate"];function Qe(a,e){a&1&&it(0)}function Xe(a,e){a&1&&it(0,1)}var je=[[["","nz-tab-link",""]],"*"],Ye=["[nz-tab-link]","*"];function Ze(a,e){if(a&1&&(H(0),ut(1),$()),a&2){let s=h().$implicit;m(1),Lt(s.label)}}function qe(a,e){if(a&1){let s=B();b(0,"button",10),I("click",function(i){y(s);let n=h().index,o=h(2);return C(o.onClose(n,i))}),z()}if(a&2){let s=h().$implicit;l("closeIcon",s.nzCloseIcon)}}var Ue=()=>({visible:!0});function Ge(a,e){if(a&1){let s=B();b(0,"div",6),I("click",function(i){let n=y(s),o=n.$implicit,r=n.index,c=h(2);return C(c.clickNavItem(o,r,i))})("contextmenu",function(i){let o=y(s).$implicit,r=h(2);return C(r.contextmenuNavItem(o,i))}),b(1,"div",7),f(2,Ze,2,1,"ng-container",8)(3,qe,1,1,"button",9),z()()}if(a&2){let s=e.$implicit,t=e.index,i=h(2);et("margin-right",i.position==="horizontal"?i.nzTabBarGutter:null,"px")("margin-bottom",i.position==="vertical"?i.nzTabBarGutter:null,"px"),k("ant-tabs-tab-active",i.nzSelectedIndex===t)("ant-tabs-tab-disabled",s.nzDisabled),m(1),l("disabled",s.nzDisabled)("tab",s)("active",i.nzSelectedIndex===t),ht("tabIndex",i.getTabIndex(s,t))("aria-disabled",s.nzDisabled)("aria-selected",i.nzSelectedIndex===t&&!i.nzHideAll)("aria-controls",i.getTabContentId(t)),m(1),l("nzStringTemplateOutlet",s.label)("nzStringTemplateOutletContext",nt(18,Ue)),m(1),l("ngIf",s.nzClosable&&i.closable&&!s.nzDisabled)}}function Ke(a,e){if(a&1){let s=B();b(0,"nz-tabs-nav",4),I("tabScroll",function(i){y(s);let n=h();return C(n.nzTabListScroll.emit(i))})("selectFocusedIndex",function(i){y(s);let n=h();return C(n.setSelectedIndex(i))})("addClicked",function(){y(s);let i=h();return C(i.onAdd())}),f(1,Ge,4,19,"div",5),z()}if(a&2){let s=h();l("ngStyle",s.nzTabBarStyle)("selectedIndex",s.nzSelectedIndex||0)("inkBarAnimated",s.inkBarAnimated)("addable",s.addable)("addIcon",s.nzAddIcon)("hideBar",s.nzHideAll)("position",s.position)("extraTemplate",s.nzTabBarExtraContent),m(1),l("ngForOf",s.tabs)}}function Je(a,e){if(a&1&&F(0,"div",11),a&2){let s=e.$implicit,t=e.index,i=h();l("active",i.nzSelectedIndex===t&&!i.nzHideAll)("content",s.content)("forceRender",s.nzForceRender)("tabPaneAnimated",i.tabPaneAnimated)}}var _t=(()=>{let e=class e{constructor(t){this.elementRef=t,this.addIcon="plus",this.element=this.elementRef.nativeElement}getElementWidth(){return this.element?.offsetWidth||0}getElementHeight(){return this.element?.offsetHeight||0}};e.\u0275fac=function(i){return new(i||e)(d(L))},e.\u0275cmp=D({type:e,selectors:[["nz-tab-add-button"],["button","nz-tab-add-button",""]],hostAttrs:["aria-label","Add tab","type","button",1,"ant-tabs-nav-add"],inputs:{addIcon:"addIcon"},decls:1,vars:1,consts:[[4,"nzStringTemplateOutlet"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(i,n){i&1&&f(0,Se,2,1,"ng-container",0),i&2&&l("nzStringTemplateOutlet",n.addIcon)},dependencies:[at,G],encapsulation:2});let a=e;return a})(),de=(()=>{let e=class e{get _animated(){return this.animationMode!=="NoopAnimations"&&this.animated}constructor(t,i,n){this.elementRef=t,this.ngZone=i,this.animationMode=n,this.position="horizontal",this.animated=!0}alignToElement(t){this.ngZone.runOutsideAngular(()=>{Tt(()=>this.setStyles(t))})}setStyles(t){let i=this.elementRef.nativeElement;this.position==="horizontal"?(i.style.top="",i.style.height="",i.style.left=this.getLeftPosition(t),i.style.width=this.getElementWidth(t)):(i.style.left="",i.style.width="",i.style.top=this.getTopPosition(t),i.style.height=this.getElementHeight(t))}getLeftPosition(t){return t?`${t.offsetLeft||0}px`:"0"}getElementWidth(t){return t?`${t.offsetWidth||0}px`:"0"}getTopPosition(t){return t?`${t.offsetTop||0}px`:"0"}getElementHeight(t){return t?`${t.offsetHeight||0}px`:"0"}};e.\u0275fac=function(i){return new(i||e)(d(L),d(Z),d(Mt,8))},e.\u0275dir=O({type:e,selectors:[["nz-tabs-ink-bar"],["","nz-tabs-ink-bar",""]],hostAttrs:[1,"ant-tabs-ink-bar"],hostVars:2,hostBindings:function(i,n){i&2&&k("ant-tabs-ink-bar-animated",n._animated)},inputs:{position:"position",animated:"animated"}});let a=e;return a})(),be=(()=>{let e=class e{constructor(t){this.elementRef=t,this.disabled=!1,this.active=!1,this.el=t.nativeElement,this.parentElement=this.el.parentElement}focus(){this.el.focus()}get width(){return this.parentElement.offsetWidth}get height(){return this.parentElement.offsetHeight}get left(){return this.parentElement.offsetLeft}get top(){return this.parentElement.offsetTop}};e.\u0275fac=function(i){return new(i||e)(d(L))},e.\u0275dir=O({type:e,selectors:[["","nzTabNavItem",""]],inputs:{disabled:"disabled",tab:"tab",active:"active"}});let a=e;return a})(),he=(()=>{let e=class e{constructor(t,i){this.cdr=t,this.elementRef=i,this.items=[],this.addable=!1,this.addIcon="plus",this.addClicked=new p,this.selected=new p,this.closeAnimationWaitTimeoutId=-1,this.menuOpened=!1,this.element=this.elementRef.nativeElement}onSelect(t){t.disabled||(t.tab.nzClick.emit(),this.selected.emit(t))}onContextmenu(t,i){t.disabled||t.tab.nzContextmenu.emit(i)}showItems(){clearTimeout(this.closeAnimationWaitTimeoutId),this.menuOpened=!0,this.cdr.markForCheck()}menuVisChange(t){t||(this.closeAnimationWaitTimeoutId=setTimeout(()=>{this.menuOpened=!1,this.cdr.markForCheck()},150))}getElementWidth(){return this.element?.offsetWidth||0}getElementHeight(){return this.element?.offsetHeight||0}ngOnDestroy(){clearTimeout(this.closeAnimationWaitTimeoutId)}};e.\u0275fac=function(i){return new(i||e)(d(tt),d(L))},e.\u0275cmp=D({type:e,selectors:[["nz-tab-nav-operation"]],hostAttrs:[1,"ant-tabs-nav-operations"],hostVars:2,hostBindings:function(i,n){i&2&&k("ant-tabs-nav-operations-hidden",n.items.length===0)},inputs:{items:"items",addable:"addable",addIcon:"addIcon"},outputs:{addClicked:"addClicked",selected:"selected"},exportAs:["nzTabNavOperation"],decls:7,vars:6,consts:[["nz-dropdown","","type","button","tabindex","-1","aria-hidden","true","nzOverlayClassName","nz-tabs-dropdown",1,"ant-tabs-nav-more",3,"nzDropdownMenu","nzOverlayStyle","nzMatchWidthElement","nzVisibleChange","mouseenter"],["dropdownTrigger","nzDropdown"],["nz-icon","","nzType","ellipsis"],["menu","nzDropdownMenu"],["nz-menu","",4,"ngIf"],["nz-tab-add-button","",3,"addIcon","click",4,"ngIf"],["nz-menu",""],["nz-menu-item","","class","ant-tabs-dropdown-menu-item",3,"ant-tabs-dropdown-menu-item-disabled","nzSelected","nzDisabled","click","contextmenu",4,"ngFor","ngForOf"],["nz-menu-item","",1,"ant-tabs-dropdown-menu-item",3,"nzSelected","nzDisabled","click","contextmenu"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],["nz-tab-add-button","",3,"addIcon","click"]],template:function(i,n){if(i&1&&(b(0,"button",0,1),I("nzVisibleChange",function(r){return n.menuVisChange(r)})("mouseenter",function(){return n.showItems()}),F(2,"span",2),z(),b(3,"nz-dropdown-menu",null,3),f(5,De,2,1,"ul",4),z(),f(6,Ne,1,1,"button",5)),i&2){let o=Ot(4);l("nzDropdownMenu",o)("nzOverlayStyle",nt(5,Re))("nzMatchWidthElement",null),m(5),l("ngIf",n.menuOpened),m(1),l("ngIf",n.addable)}},dependencies:[bt,q,at,G,ae,se,oe,re,_t],encapsulation:2,changeDetection:0});let a=e;return a})(),ti=.1,me=.01,ot=20,ue=.995**ot,ei=(()=>{let e=class e{constructor(t,i){this.ngZone=t,this.elementRef=i,this.lastWheelDirection=null,this.lastWheelTimestamp=0,this.lastTimestamp=0,this.lastTimeDiff=0,this.lastMixedWheel=0,this.lastWheelPrevent=!1,this.touchPosition=null,this.lastOffset=null,this.motion=-1,this.unsubscribe=()=>{},this.offsetChange=new p,this.tabScroll=new p,this.onTouchEnd=n=>{if(!this.touchPosition)return;let o=this.lastOffset,r=this.lastTimeDiff;if(this.lastOffset=this.touchPosition=null,o){let c=o.x/r,u=o.y/r,S=Math.abs(c),R=Math.abs(u);if(Math.max(S,R)<ti)return;let w=c,E=u;this.motion=window.setInterval(()=>{if(Math.abs(w)<me&&Math.abs(E)<me){window.clearInterval(this.motion);return}w*=ue,E*=ue,this.onOffset(w*ot,E*ot,n)},ot)}},this.onTouchMove=n=>{if(!this.touchPosition)return;n.preventDefault();let{screenX:o,screenY:r}=n.touches[0],c=o-this.touchPosition.x,u=r-this.touchPosition.y;this.onOffset(c,u,n);let S=Date.now();this.lastTimeDiff=S-this.lastTimestamp,this.lastTimestamp=S,this.lastOffset={x:c,y:u},this.touchPosition={x:o,y:r}},this.onTouchStart=n=>{let{screenX:o,screenY:r}=n.touches[0];this.touchPosition={x:o,y:r},window.clearInterval(this.motion)},this.onWheel=n=>{let{deltaX:o,deltaY:r}=n,c,u=Math.abs(o),S=Math.abs(r);u===S?c=this.lastWheelDirection==="x"?o:r:u>S?(c=o,this.lastWheelDirection="x"):(c=r,this.lastWheelDirection="y");let R=Date.now(),w=Math.abs(c);(R-this.lastWheelTimestamp>100||w-this.lastMixedWheel>10)&&(this.lastWheelPrevent=!1),this.onOffset(-c,-c,n),(n.defaultPrevented||this.lastWheelPrevent)&&(this.lastWheelPrevent=!0),this.lastWheelTimestamp=R,this.lastMixedWheel=w}}ngOnInit(){this.unsubscribe=this.ngZone.runOutsideAngular(()=>{let t=this.elementRef.nativeElement,i=Y(t,"wheel"),n=Y(t,"touchstart"),o=Y(t,"touchmove"),r=Y(t,"touchend"),c=new j;return c.add(this.subscribeWrap("wheel",i,this.onWheel)),c.add(this.subscribeWrap("touchstart",n,this.onTouchStart)),c.add(this.subscribeWrap("touchmove",o,this.onTouchMove)),c.add(this.subscribeWrap("touchend",r,this.onTouchEnd)),()=>{c.unsubscribe()}})}subscribeWrap(t,i,n){return i.subscribe(o=>{this.tabScroll.emit({type:t,event:o}),o.defaultPrevented||n(o)})}onOffset(t,i,n){this.ngZone.run(()=>{this.offsetChange.emit({x:t,y:i,event:n})})}ngOnDestroy(){this.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(d(Z),d(L))},e.\u0275dir=O({type:e,selectors:[["","nzTabScrollList",""]],outputs:{offsetChange:"offsetChange",tabScroll:"tabScroll"}});let a=e;return a})(),ii=typeof requestAnimationFrame<"u"?St:xt,pe=150,fe=(()=>{let e=class e{get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let i=vt(t);this._selectedIndex!==i&&(this._selectedIndex=t,this.selectedIndexChanged=!0,this.keyManager&&this.keyManager.updateActiveItem(t))}get focusIndex(){return this.keyManager?this.keyManager.activeItemIndex:0}set focusIndex(t){!this.isValidIndex(t)||this.focusIndex===t||!this.keyManager||this.keyManager.setActiveItem(t)}get showAddButton(){return this.hiddenItems.length===0&&this.addable}constructor(t,i,n,o,r){this.cdr=t,this.ngZone=i,this.viewportRuler=n,this.nzResizeObserver=o,this.dir=r,this.indexFocused=new p,this.selectFocusedIndex=new p,this.addClicked=new p,this.tabScroll=new p,this.position="horizontal",this.addable=!1,this.hideBar=!1,this.addIcon="plus",this.inkBarAnimated=!0,this.translate=null,this.transformX=0,this.transformY=0,this.pingLeft=!1,this.pingRight=!1,this.pingTop=!1,this.pingBottom=!1,this.hiddenItems=[],this.destroy$=new K,this._selectedIndex=0,this.wrapperWidth=0,this.wrapperHeight=0,this.scrollListWidth=0,this.scrollListHeight=0,this.operationWidth=0,this.operationHeight=0,this.addButtonWidth=0,this.addButtonHeight=0,this.selectedIndexChanged=!1,this.lockAnimationTimeoutId=-1,this.cssTransformTimeWaitingId=-1}ngAfterViewInit(){let t=this.dir?this.dir.change.asObservable():lt(null),i=this.viewportRuler.change(150),n=()=>{this.updateScrollListPosition(),this.alignInkBarToSelectedTab()};this.keyManager=new Jt(this.items).withHorizontalOrientation(this.getLayoutDirection()).withWrap(),this.keyManager.updateActiveItem(this.selectedIndex),Tt(n),J(this.nzResizeObserver.observe(this.navWarpRef),this.nzResizeObserver.observe(this.navListRef)).pipe(M(this.destroy$),kt(16,ii)).subscribe(()=>{n()}),J(t,i,this.items.changes).pipe(M(this.destroy$)).subscribe(()=>{Promise.resolve().then(n),this.keyManager.withHorizontalOrientation(this.getLayoutDirection())}),this.keyManager.change.pipe(M(this.destroy$)).subscribe(o=>{this.indexFocused.emit(o),this.setTabFocus(o),this.scrollToTab(this.keyManager.activeItem)})}ngAfterContentChecked(){this.selectedIndexChanged&&(this.updateScrollListPosition(),this.alignInkBarToSelectedTab(),this.selectedIndexChanged=!1,this.cdr.markForCheck())}ngOnDestroy(){clearTimeout(this.lockAnimationTimeoutId),clearTimeout(this.cssTransformTimeWaitingId),this.destroy$.next(),this.destroy$.complete()}onSelectedFromMenu(t){let i=this.items.toArray().findIndex(n=>n===t);i!==-1&&(this.keyManager.updateActiveItem(i),this.focusIndex!==this.selectedIndex&&(this.selectFocusedIndex.emit(this.focusIndex),this.scrollToTab(t)))}onOffsetChange(t){if(this.position==="horizontal"){if(this.lockAnimationTimeoutId===-1&&(this.transformX>=0&&t.x>0||this.transformX<=this.wrapperWidth-this.scrollListWidth&&t.x<0))return;t.event.preventDefault(),this.transformX=this.clampTransformX(this.transformX+t.x),this.setTransform(this.transformX,0)}else{if(this.lockAnimationTimeoutId===-1&&(this.transformY>=0&&t.y>0||this.transformY<=this.wrapperHeight-this.scrollListHeight&&t.y<0))return;t.event.preventDefault(),this.transformY=this.clampTransformY(this.transformY+t.y),this.setTransform(0,this.transformY)}this.lockAnimation(),this.setVisibleRange(),this.setPingStatus()}handleKeydown(t){let i=this.navWarpRef.nativeElement.contains(t.target);if(!(Gt(t)||!i))switch(t.keyCode){case 37:case 38:case 39:case 40:this.lockAnimation(),this.keyManager.onKeydown(t);break;case 13:case 32:this.focusIndex!==this.selectedIndex&&this.selectFocusedIndex.emit(this.focusIndex);break;default:this.keyManager.onKeydown(t)}}isValidIndex(t){if(!this.items)return!0;let i=this.items?this.items.toArray()[t]:null;return!!i&&!i.disabled}scrollToTab(t){if(!this.items.find(n=>n===t))return;let i=this.items.toArray();if(this.position==="horizontal"){let n=this.transformX;if(this.getLayoutDirection()==="rtl"){let o=i[0].left+i[0].width-t.left-t.width;o<this.transformX?n=o:o+t.width>this.transformX+this.wrapperWidth&&(n=o+t.width-this.wrapperWidth)}else t.left<-this.transformX?n=-t.left:t.left+t.width>-this.transformX+this.wrapperWidth&&(n=-(t.left+t.width-this.wrapperWidth));this.transformX=n,this.transformY=0,this.setTransform(n,0)}else{let n=this.transformY;t.top<-this.transformY?n=-t.top:t.top+t.height>-this.transformY+this.wrapperHeight&&(n=-(t.top+t.height-this.wrapperHeight)),this.transformY=n,this.transformX=0,this.setTransform(0,n)}clearTimeout(this.cssTransformTimeWaitingId),this.cssTransformTimeWaitingId=setTimeout(()=>{this.setVisibleRange()},pe)}lockAnimation(){this.lockAnimationTimeoutId===-1&&this.ngZone.runOutsideAngular(()=>{this.navListRef.nativeElement.style.transition="none",this.lockAnimationTimeoutId=setTimeout(()=>{this.navListRef.nativeElement.style.transition="",this.lockAnimationTimeoutId=-1},pe)})}setTransform(t,i){this.navListRef.nativeElement.style.transform=`translate(${t}px, ${i}px)`}clampTransformX(t){let i=this.wrapperWidth-this.scrollListWidth;return this.getLayoutDirection()==="rtl"?Math.max(Math.min(i,t),0):Math.min(Math.max(i,t),0)}clampTransformY(t){return Math.min(Math.max(this.wrapperHeight-this.scrollListHeight,t),0)}updateScrollListPosition(){this.resetSizes(),this.transformX=this.clampTransformX(this.transformX),this.transformY=this.clampTransformY(this.transformY),this.setVisibleRange(),this.setPingStatus(),this.keyManager&&(this.keyManager.updateActiveItem(this.keyManager.activeItemIndex),this.keyManager.activeItem&&this.scrollToTab(this.keyManager.activeItem))}resetSizes(){this.addButtonWidth=this.addBtnRef?this.addBtnRef.getElementWidth():0,this.addButtonHeight=this.addBtnRef?this.addBtnRef.getElementHeight():0,this.operationWidth=this.operationRef.getElementWidth(),this.operationHeight=this.operationRef.getElementHeight(),this.wrapperWidth=this.navWarpRef.nativeElement.offsetWidth||0,this.wrapperHeight=this.navWarpRef.nativeElement.offsetHeight||0,this.scrollListHeight=this.navListRef.nativeElement.offsetHeight||0,this.scrollListWidth=this.navListRef.nativeElement.offsetWidth||0}alignInkBarToSelectedTab(){let t=this.items&&this.items.length?this.items.toArray()[this.selectedIndex]:null,i=t?t.elementRef.nativeElement:null;i&&this.inkBar.alignToElement(i.parentElement)}setPingStatus(){let t={top:!1,right:!1,bottom:!1,left:!1},i=this.navWarpRef.nativeElement;this.position==="horizontal"?this.getLayoutDirection()==="rtl"?(t.right=this.transformX>0,t.left=this.transformX+this.wrapperWidth<this.scrollListWidth):(t.left=this.transformX<0,t.right=-this.transformX+this.wrapperWidth<this.scrollListWidth):(t.top=this.transformY<0,t.bottom=-this.transformY+this.wrapperHeight<this.scrollListHeight),Object.keys(t).forEach(n=>{let o=`ant-tabs-nav-wrap-ping-${n}`;t[n]?i.classList.add(o):i.classList.remove(o)})}setVisibleRange(){let t,i,n,o,r,c,u=this.items.toArray(),S={width:0,height:0,left:0,top:0,right:0},R=g=>{let P,rt=u[g]||S;return i==="right"?P=u[0].left+u[0].width-u[g].left-u[g].width:P=rt[i],P};this.position==="horizontal"?(t="width",o=this.wrapperWidth,r=this.scrollListWidth-(this.hiddenItems.length?this.operationWidth:0),c=this.addButtonWidth,n=Math.abs(this.transformX),this.getLayoutDirection()==="rtl"?(i="right",this.pingRight=this.transformX>0,this.pingLeft=this.transformX+this.wrapperWidth<this.scrollListWidth):(this.pingLeft=this.transformX<0,this.pingRight=-this.transformX+this.wrapperWidth<this.scrollListWidth,i="left")):(t="height",o=this.wrapperHeight,r=this.scrollListHeight-(this.hiddenItems.length?this.operationHeight:0),c=this.addButtonHeight,i="top",n=-this.transformY,this.pingTop=this.transformY<0,this.pingBottom=-this.transformY+this.wrapperHeight<this.scrollListHeight);let w=o;if(r+c>o&&(w=o-c),!u.length){this.hiddenItems=[],this.cdr.markForCheck();return}let E=u.length,Ct=E;for(let g=0;g<E;g+=1){let P=R(g),rt=u[g]||S;if(P+rt[t]>n+w){Ct=g-1;break}}let It=0;for(let g=E-1;g>=0;g-=1)if(R(g)<n){It=g+1;break}let ze=u.slice(0,It),ve=u.slice(Ct+1);this.hiddenItems=[...ze,...ve],this.cdr.markForCheck()}getLayoutDirection(){return this.dir&&this.dir.value==="rtl"?"rtl":"ltr"}setTabFocus(t){}ngOnChanges(t){let{position:i}=t;i&&!i.isFirstChange()&&(this.alignInkBarToSelectedTab(),this.lockAnimation(),this.updateScrollListPosition())}};e.\u0275fac=function(i){return new(i||e)(d(tt),d(Z),d(qt),d(ce),d(zt,8))},e.\u0275cmp=D({type:e,selectors:[["nz-tabs-nav"]],contentQueries:function(i,n,o){if(i&1&&V(o,be,5),i&2){let r;T(r=_())&&(n.items=r)}},viewQuery:function(i,n){if(i&1&&(N(Ee,7),N(Me,7),N(he,7),N(_t,5),N(de,7)),i&2){let o;T(o=_())&&(n.navWarpRef=o.first),T(o=_())&&(n.navListRef=o.first),T(o=_())&&(n.operationRef=o.first),T(o=_())&&(n.addBtnRef=o.first),T(o=_())&&(n.inkBar=o.first)}},hostAttrs:["role","tablist",1,"ant-tabs-nav"],hostBindings:function(i,n){i&1&&I("keydown",function(r){return n.handleKeydown(r)})},inputs:{position:"position",addable:"addable",hideBar:"hideBar",addIcon:"addIcon",inkBarAnimated:"inkBarAnimated",extraTemplate:"extraTemplate",selectedIndex:"selectedIndex"},outputs:{indexFocused:"indexFocused",selectFocusedIndex:"selectFocusedIndex",addClicked:"addClicked",tabScroll:"tabScroll"},exportAs:["nzTabsNav"],features:[dt],ngContentSelectors:We,decls:9,vars:16,consts:[[1,"ant-tabs-nav-wrap"],["navWarp",""],["nzTabScrollList","",1,"ant-tabs-nav-list",3,"offsetChange","tabScroll"],["navList",""],["nz-tab-add-button","",3,"addIcon","click",4,"ngIf"],["nz-tabs-ink-bar","",3,"hidden","position","animated"],[3,"addIcon","addable","items","addClicked","selected"],["class","ant-tabs-extra-content",4,"ngIf"],["nz-tab-add-button","",3,"addIcon","click"],[1,"ant-tabs-extra-content"],[3,"ngTemplateOutlet"]],template:function(i,n){i&1&&(mt(),b(0,"div",0,1)(2,"div",2,3),I("offsetChange",function(r){return n.onOffsetChange(r)})("tabScroll",function(r){return n.tabScroll.emit(r)}),it(4),f(5,Oe,1,1,"button",4),F(6,"div",5),z()(),b(7,"nz-tab-nav-operation",6),I("addClicked",function(){return n.addClicked.emit()})("selected",function(r){return n.onSelectedFromMenu(r)}),z(),f(8,Be,2,1,"div",7)),i&2&&(k("ant-tabs-nav-wrap-ping-left",n.pingLeft)("ant-tabs-nav-wrap-ping-right",n.pingRight)("ant-tabs-nav-wrap-ping-top",n.pingTop)("ant-tabs-nav-wrap-ping-bottom",n.pingBottom),m(5),l("ngIf",n.showAddButton),m(1),l("hidden",n.hideBar)("position",n.position)("animated",n.inkBarAnimated),m(1),l("addIcon",n.addIcon)("addable",n.addable)("items",n.hiddenItems),m(1),l("ngIf",n.extraTemplate))},dependencies:[q,gt,de,ei,he,_t],encapsulation:2,changeDetection:0});let a=e;return a})(),ni=(()=>{let e=class e{constructor(){this.content=null,this.active=!1,this.tabPaneAnimated=!0,this.forceRender=!1}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=D({type:e,selectors:[["","nz-tab-body",""]],hostAttrs:[1,"ant-tabs-tabpane"],hostVars:12,hostBindings:function(i,n){i&2&&(ht("tabindex",n.active?0:-1)("aria-hidden",!n.active),et("visibility",n.tabPaneAnimated?n.active?null:"hidden":null)("height",n.tabPaneAnimated?n.active?null:0:null)("overflow-y",n.tabPaneAnimated?n.active?null:"none":null)("display",n.tabPaneAnimated||n.active?null:"none"),k("ant-tabs-tabpane-active",n.active))},inputs:{content:"content",active:"active",tabPaneAnimated:"tabPaneAnimated",forceRender:"forceRender"},exportAs:["nzTabBody"],attrs:Pe,decls:1,vars:1,consts:[[4,"ngIf"],[3,"ngTemplateOutlet"]],template:function(i,n){i&1&&f(0,He,2,1,"ng-container",0),i&2&&l("ngIf",n.active||n.forceRender)},dependencies:[q,gt],encapsulation:2,changeDetection:0});let a=e;return a})(),si=(()=>{let e=class e{constructor(){this.closeIcon="close"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=D({type:e,selectors:[["nz-tab-close-button"],["button","nz-tab-close-button",""]],hostAttrs:["aria-label","Close tab","type","button",1,"ant-tabs-tab-remove"],inputs:{closeIcon:"closeIcon"},decls:1,vars:1,consts:[[4,"nzStringTemplateOutlet"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(i,n){i&1&&f(0,$e,2,1,"ng-container",0),i&2&&l("nzStringTemplateOutlet",n.closeIcon)},dependencies:[at,G],encapsulation:2});let a=e;return a})(),ai=(()=>{let e=class e{constructor(t){this.templateRef=t}};e.\u0275fac=function(i){return new(i||e)(d(st,1))},e.\u0275dir=O({type:e,selectors:[["ng-template","nzTabLink",""]],exportAs:["nzTabLinkTemplate"]});let a=e;return a})(),oi=(()=>{let e=class e{constructor(t,i){this.elementRef=t,this.routerLink=i}};e.\u0275fac=function(i){return new(i||e)(d(L),d(Vt,10))},e.\u0275dir=O({type:e,selectors:[["a","nz-tab-link",""]],exportAs:["nzTabLink"]});let a=e;return a})(),ri=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=O({type:e,selectors:[["","nz-tab",""]],exportAs:["nzTab"]});let a=e;return a})(),ge=new Rt("NZ_TAB_SET"),Q=class Q{get content(){return this.template||this.contentTemplate}get label(){return this.nzTitle||this.nzTabLinkTemplateDirective?.templateRef}constructor(e){this.closestTabSet=e,this.nzTitle="",this.nzClosable=!1,this.nzCloseIcon="close",this.nzDisabled=!1,this.nzForceRender=!1,this.nzSelect=new p,this.nzDeselect=new p,this.nzClick=new p,this.nzContextmenu=new p,this.template=null,this.isActive=!1,this.position=null,this.origin=null,this.stateChanges=new K}ngOnChanges(e){let{nzTitle:s,nzDisabled:t,nzForceRender:i}=e;(s||t||i)&&this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete()}};Q.\u0275fac=function(s){return new(s||Q)(d(ge))},Q.\u0275cmp=D({type:Q,selectors:[["nz-tab"]],contentQueries:function(s,t,i){if(s&1&&(V(i,ai,5),V(i,ri,5,st),V(i,oi,5)),s&2){let n;T(n=_())&&(t.nzTabLinkTemplateDirective=n.first),T(n=_())&&(t.template=n.first),T(n=_())&&(t.linkDirective=n.first)}},viewQuery:function(s,t){if(s&1&&N(Ve,7),s&2){let i;T(i=_())&&(t.contentTemplate=i.first)}},inputs:{nzTitle:"nzTitle",nzClosable:"nzClosable",nzCloseIcon:"nzCloseIcon",nzDisabled:"nzDisabled",nzForceRender:"nzForceRender"},outputs:{nzSelect:"nzSelect",nzDeselect:"nzDeselect",nzClick:"nzClick",nzContextmenu:"nzContextmenu"},exportAs:["nzTab"],features:[dt],ngContentSelectors:Ye,decls:4,vars:0,consts:[["tabLinkTemplate",""],["contentTemplate",""]],template:function(s,t){s&1&&(mt(je),f(0,Qe,1,0,"ng-template",null,0,ft)(2,Xe,1,0,"ng-template",null,1,ft))},encapsulation:2,changeDetection:0});var X=Q;v([A()],X.prototype,"nzClosable",void 0);v([A()],X.prototype,"nzDisabled",void 0);v([A()],X.prototype,"nzForceRender",void 0);var yt=class{},li="tabs",ci=0,W=class W{get nzSelectedIndex(){return this.selectedIndex}set nzSelectedIndex(e){this.indexToSelect=vt(e,null)}get position(){return["top","bottom"].indexOf(this.nzTabPosition)===-1?"vertical":"horizontal"}get addable(){return this.nzType==="editable-card"&&!this.nzHideAdd}get closable(){return this.nzType==="editable-card"}get line(){return this.nzType==="line"}get inkBarAnimated(){return this.line&&(typeof this.nzAnimated=="boolean"?this.nzAnimated:this.nzAnimated.inkBar)}get tabPaneAnimated(){return this.position==="horizontal"&&this.line&&(typeof this.nzAnimated=="boolean"?this.nzAnimated:this.nzAnimated.tabPane)}constructor(e,s,t,i,n){this.nzConfigService=e,this.ngZone=s,this.cdr=t,this.directionality=i,this.router=n,this._nzModuleName=li,this.nzTabPosition="top",this.nzCanDeactivate=null,this.nzAddIcon="plus",this.nzTabBarStyle=null,this.nzType="line",this.nzSize="default",this.nzAnimated=!0,this.nzTabBarGutter=void 0,this.nzHideAdd=!1,this.nzCentered=!1,this.nzHideAll=!1,this.nzLinkRouter=!1,this.nzLinkExact=!0,this.nzSelectChange=new p(!0),this.nzSelectedIndexChange=new p,this.nzTabListScroll=new p,this.nzClose=new p,this.nzAdd=new p,this.allTabs=new pt,this.tabs=new pt,this.dir="ltr",this.destroy$=new K,this.indexToSelect=0,this.selectedIndex=null,this.tabLabelSubscription=j.EMPTY,this.tabsSubscription=j.EMPTY,this.canDeactivateSubscription=j.EMPTY,this.tabSetId=ci++}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(M(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.tabs.destroy(),this.tabLabelSubscription.unsubscribe(),this.tabsSubscription.unsubscribe(),this.canDeactivateSubscription.unsubscribe()}ngAfterContentInit(){this.ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>this.setUpRouter())}),this.subscribeToTabLabels(),this.subscribeToAllTabChanges(),this.tabsSubscription=this.tabs.changes.subscribe(()=>{if(this.clampTabIndex(this.indexToSelect)===this.selectedIndex){let s=this.tabs.toArray();for(let t=0;t<s.length;t++)if(s[t].isActive){this.indexToSelect=this.selectedIndex=t;break}}this.subscribeToTabLabels(),this.cdr.markForCheck()})}ngAfterContentChecked(){let e=this.indexToSelect=this.clampTabIndex(this.indexToSelect);if(this.selectedIndex!==e){let s=this.selectedIndex==null;s||this.nzSelectChange.emit(this.createChangeEvent(e)),Promise.resolve().then(()=>{this.tabs.forEach((t,i)=>t.isActive=i===e),s||this.nzSelectedIndexChange.emit(e)})}this.tabs.forEach((s,t)=>{s.position=t-e,this.selectedIndex!=null&&s.position===0&&!s.origin&&(s.origin=e-this.selectedIndex)}),this.selectedIndex!==e&&(this.selectedIndex=e,this.cdr.markForCheck())}onClose(e,s){s.preventDefault(),s.stopPropagation(),this.nzClose.emit({index:e})}onAdd(){this.nzAdd.emit()}clampTabIndex(e){return Math.min(this.tabs.length-1,Math.max(e||0,0))}createChangeEvent(e){let s=new yt;return s.index=e,this.tabs&&this.tabs.length&&(s.tab=this.tabs.toArray()[e],this.tabs.forEach((t,i)=>{i!==e&&t.nzDeselect.emit()}),s.tab.nzSelect.emit()),s}subscribeToTabLabels(){this.tabLabelSubscription&&this.tabLabelSubscription.unsubscribe(),this.tabLabelSubscription=J(...this.tabs.map(e=>e.stateChanges)).subscribe(()=>this.cdr.markForCheck())}subscribeToAllTabChanges(){this.allTabs.changes.pipe(ct(this.allTabs)).subscribe(e=>{this.tabs.reset(e.filter(s=>s.closestTabSet===this)),this.tabs.notifyOnChanges()})}canDeactivateFun(e,s){return typeof this.nzCanDeactivate=="function"?Yt(this.nzCanDeactivate(e,s)).pipe(Dt(),M(this.destroy$)):lt(!0)}clickNavItem(e,s,t){e.nzDisabled||(e.nzClick.emit(),this.isRouterLinkClickEvent(s,t)||this.setSelectedIndex(s))}isRouterLinkClickEvent(e,s){let t=s.target;return this.nzLinkRouter?!!this.tabs.toArray()[e]?.linkDirective?.elementRef.nativeElement.contains(t):!1}contextmenuNavItem(e,s){e.nzDisabled||e.nzContextmenu.emit(s)}setSelectedIndex(e){this.canDeactivateSubscription.unsubscribe(),this.canDeactivateSubscription=this.canDeactivateFun(this.selectedIndex,e).subscribe(s=>{s&&(this.nzSelectedIndex=e,this.tabNavBarRef.focusIndex=e,this.cdr.markForCheck())})}getTabIndex(e,s){return e.nzDisabled?null:this.selectedIndex===s?0:-1}getTabContentId(e){return`nz-tabs-${this.tabSetId}-tab-${e}`}setUpRouter(){if(this.nzLinkRouter){if(!this.router)throw new Error(`${jt} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`);this.router.events.pipe(M(this.destroy$),wt(e=>e instanceof Ht),ct(!0),At(0)).subscribe(()=>{this.updateRouterActive(),this.cdr.markForCheck()})}}updateRouterActive(){if(this.router.navigated){let e=this.findShouldActiveTabIndex();e!==this.selectedIndex&&this.setSelectedIndex(e),this.nzHideAll=e===-1}}findShouldActiveTabIndex(){let e=this.tabs.toArray(),s=this.isLinkActive(this.router);return e.findIndex(t=>{let i=t.linkDirective;return i?s(i.routerLink):!1})}isLinkActive(e){return s=>s?e.isActive(s.urlTree||"",{paths:this.nzLinkExact?"exact":"subset",queryParams:this.nzLinkExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"}):!1}getTabContentMarginValue(){return-(this.nzSelectedIndex||0)*100}getTabContentMarginLeft(){return this.tabPaneAnimated&&this.dir!=="rtl"?`${this.getTabContentMarginValue()}%`:""}getTabContentMarginRight(){return this.tabPaneAnimated&&this.dir==="rtl"?`${this.getTabContentMarginValue()}%`:""}};W.\u0275fac=function(s){return new(s||W)(d(Zt),d(Z),d(tt),d(zt,8),d($t,8))},W.\u0275cmp=D({type:W,selectors:[["nz-tabset"]],contentQueries:function(s,t,i){if(s&1&&V(i,X,5),s&2){let n;T(n=_())&&(t.allTabs=n)}},viewQuery:function(s,t){if(s&1&&N(fe,5),s&2){let i;T(i=_())&&(t.tabNavBarRef=i.first)}},hostAttrs:[1,"ant-tabs"],hostVars:24,hostBindings:function(s,t){s&2&&k("ant-tabs-card",t.nzType==="card"||t.nzType==="editable-card")("ant-tabs-editable",t.nzType==="editable-card")("ant-tabs-editable-card",t.nzType==="editable-card")("ant-tabs-centered",t.nzCentered)("ant-tabs-rtl",t.dir==="rtl")("ant-tabs-top",t.nzTabPosition==="top")("ant-tabs-bottom",t.nzTabPosition==="bottom")("ant-tabs-left",t.nzTabPosition==="left")("ant-tabs-right",t.nzTabPosition==="right")("ant-tabs-default",t.nzSize==="default")("ant-tabs-small",t.nzSize==="small")("ant-tabs-large",t.nzSize==="large")},inputs:{nzSelectedIndex:"nzSelectedIndex",nzTabPosition:"nzTabPosition",nzTabBarExtraContent:"nzTabBarExtraContent",nzCanDeactivate:"nzCanDeactivate",nzAddIcon:"nzAddIcon",nzTabBarStyle:"nzTabBarStyle",nzType:"nzType",nzSize:"nzSize",nzAnimated:"nzAnimated",nzTabBarGutter:"nzTabBarGutter",nzHideAdd:"nzHideAdd",nzCentered:"nzCentered",nzHideAll:"nzHideAll",nzLinkRouter:"nzLinkRouter",nzLinkExact:"nzLinkExact"},outputs:{nzSelectChange:"nzSelectChange",nzSelectedIndexChange:"nzSelectedIndexChange",nzTabListScroll:"nzTabListScroll",nzClose:"nzClose",nzAdd:"nzAdd"},exportAs:["nzTabset"],features:[Wt([{provide:ge,useExisting:W}])],decls:4,vars:16,consts:[[3,"ngStyle","selectedIndex","inkBarAnimated","addable","addIcon","hideBar","position","extraTemplate","tabScroll","selectFocusedIndex","addClicked",4,"ngIf"],[1,"ant-tabs-content-holder"],[1,"ant-tabs-content"],["nz-tab-body","",3,"active","content","forceRender","tabPaneAnimated",4,"ngFor","ngForOf"],[3,"ngStyle","selectedIndex","inkBarAnimated","addable","addIcon","hideBar","position","extraTemplate","tabScroll","selectFocusedIndex","addClicked"],["class","ant-tabs-tab",3,"margin-right","margin-bottom","ant-tabs-tab-active","ant-tabs-tab-disabled","click","contextmenu",4,"ngFor","ngForOf"],[1,"ant-tabs-tab",3,"click","contextmenu"],["role","tab","nzTabNavItem","","cdkMonitorElementFocus","",1,"ant-tabs-tab-btn",3,"disabled","tab","active"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],["nz-tab-close-button","",3,"closeIcon","click",4,"ngIf"],["nz-tab-close-button","",3,"closeIcon","click"],["nz-tab-body","",3,"active","content","forceRender","tabPaneAnimated"]],template:function(s,t){s&1&&(f(0,Ke,2,9,"nz-tabs-nav",0),b(1,"div",1)(2,"div",2),f(3,Je,1,4,"div",3),z()()),s&2&&(l("ngIf",t.tabs.length||t.addable),m(2),et("margin-left",t.getTabContentMarginLeft())("margin-right",t.getTabContentMarginRight()),k("ant-tabs-content-top",t.nzTabPosition==="top")("ant-tabs-content-bottom",t.nzTabPosition==="bottom")("ant-tabs-content-left",t.nzTabPosition==="left")("ant-tabs-content-right",t.nzTabPosition==="right")("ant-tabs-content-animated",t.tabPaneAnimated),m(1),l("ngForOf",t.tabs))},dependencies:[bt,q,Pt,G,te,fe,be,si,ni],encapsulation:2});var x=W;v([U()],x.prototype,"nzType",void 0);v([U()],x.prototype,"nzSize",void 0);v([U()],x.prototype,"nzAnimated",void 0);v([U()],x.prototype,"nzTabBarGutter",void 0);v([A()],x.prototype,"nzHideAdd",void 0);v([A()],x.prototype,"nzCentered",void 0);v([A()],x.prototype,"nzHideAll",void 0);v([A()],x.prototype,"nzLinkRouter",void 0);v([A()],x.prototype,"nzLinkExact",void 0);var sn=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=Et({type:e}),e.\u0275inj=Nt({imports:[Xt,Ft,Kt,ne,ie,Qt,ee,Ut,le]});let a=e;return a})();export{X as a,x as b,sn as c};
