import{$a as se,$f as Ie,C as u,Cb as pe,Ch as W,F as p,Fa as I,Ga as N,H as c,I as G,Id as M,Ka as s,La as te,N as S,Na as _,Oa as ie,P as Q,Pb as me,Qb as ue,Rb as fe,S as U,Sa as ne,Tb as ve,Ua as oe,X as q,Y as z,Zd as Re,Zg as ke,_a as P,_d as Se,ca as K,da as j,fa as A,fb as re,fg as Ne,gb as ae,gc as ye,gg as Ee,h as k,ha as J,hd as we,ia as x,id as Me,ig as Y,ja as $,jg as Ve,k as b,kf as De,l as R,lb as le,le as B,lh as f,ma as ee,mc as ge,md as Ce,na as O,oa as D,od as be,oe as $e,p as H,pb as de,q as g,qe as C,rb as w,sb as ce,se as F,tb as he,uc as ze,uh as Te,ve as Oe,vh as je,w as T,wh as E,x as Z}from"./chunk-SBXYWWID.js";function _e(n,e){if(n&1){let o=le();re(0,"div",0),de("@slideMotion.done",function(t){O(o);let r=w();return D(r.onAnimationEvent(t))})("mouseenter",function(){O(o);let t=w();return D(t.setMouseState(!0))})("mouseleave",function(){O(o);let t=w();return D(t.setMouseState(!1))}),he(1),ae()}if(n&2){let o=w();oe("ant-dropdown-rtl",o.dir==="rtl"),ne("ngClass",o.nzOverlayClassName)("ngStyle",o.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",!!(o.noAnimation!=null&&o.noAnimation.nzNoAnimation))("nzNoAnimation",o.noAnimation==null?null:o.noAnimation.nzNoAnimation)}}var Pe=["*"],Be="dropDown",Fe=[f.bottomLeft,f.bottomRight,f.topRight,f.topLeft],v=class v{setDropdownMenuValue(e,o){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(e,o)}constructor(e,o,i,t,r,a){this.nzConfigService=e,this.elementRef=o,this.overlay=i,this.renderer=t,this.viewContainerRef=r,this.platform=a,this._nzModuleName=Be,this.overlayRef=null,this.destroy$=new b,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new R(!1),this.nzTrigger$=new R("hover"),this.overlayClose$=new b,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new _}ngAfterViewInit(){if(this.nzDropdownMenu){let e=this.elementRef.nativeElement,o=p(u(e,"mouseenter").pipe(S(!0)),u(e,"mouseleave").pipe(S(!1))),i=this.nzDropdownMenu.mouseState$,t=p(i,o),r=u(e,"click").pipe(T(()=>!this.nzVisible)),a=this.nzTrigger$.pipe(q(l=>l==="hover"?t:l==="click"?r:H)),h=this.nzDropdownMenu.descendantMenuItemClick$.pipe(c(()=>this.nzClickHide),S(!1)),d=p(a,h,this.overlayClose$).pipe(c(()=>!this.nzDisabled)),V=p(this.inputVisible$,d);Z([V,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe(T(([l,X])=>l||X),G(150),Q(),c(()=>this.platform.isBrowser),z(this.destroy$)).subscribe(l=>{let L=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:e).getBoundingClientRect().width;if(this.nzVisible!==l&&this.nzVisibleChange.emit(l),this.nzVisible=l,l){if(!this.overlayRef)this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:L,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&this.nzTrigger==="click",scrollStrategy:this.overlay.scrollStrategies.reposition()}),p(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe(c(m=>!this.elementRef.nativeElement.contains(m.target))),this.overlayRef.keydownEvents().pipe(c(m=>m.keyCode===27&&!$e(m)))).pipe(z(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)});else{let m=this.overlayRef.getConfig();m.minWidth=L}this.positionStrategy.withPositions([f[this.nzPlacement],...Fe]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new B(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)}else this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe(z(this.destroy$)).subscribe(l=>{l.toState==="void"&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(e){let{nzVisible:o,nzDisabled:i,nzOverlayClassName:t,nzOverlayStyle:r,nzTrigger:a}=e;if(a&&this.nzTrigger$.next(this.nzTrigger),o&&this.inputVisible$.next(this.nzVisible),i){let h=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(h,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(h,"disabled")}t&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),r&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}};v.\u0275fac=function(o){return new(o||v)(s(Re),s(I),s(F),s(N),s(P),s(we))},v.\u0275dir=$({type:v,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[ee]});var y=v;g([Se(),M()],y.prototype,"nzBackdrop",void 0);g([M()],y.prototype,"nzClickHide",void 0);g([M()],y.prototype,"nzDisabled",void 0);g([M()],y.prototype,"nzVisible",void 0);var Ae=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=x({type:e}),e.\u0275inj=j({});let n=e;return n})(),Dt=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=$({type:e,selectors:[["a","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-link"]});let n=e;return n})(),It=(()=>{let e=class e{constructor(i,t,r){this.renderer=i,this.nzButtonGroupComponent=t,this.elementRef=r}ngAfterViewInit(){let i=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&i&&this.renderer.addClass(i,"ant-dropdown-button")}};e.\u0275fac=function(t){return new(t||e)(s(N),s(Ne,9),s(I))},e.\u0275dir=$({type:e,selectors:[["","nz-button","","nz-dropdown",""]]});let n=e;return n})(),Nt=(()=>{let e=class e{onAnimationEvent(i){this.animationStateChange$.emit(i)}setMouseState(i){this.mouseState$.next(i)}setValue(i,t){this[i]=t,this.cdr.markForCheck()}constructor(i,t,r,a,h,d,V){this.cdr=i,this.elementRef=t,this.renderer=r,this.viewContainerRef=a,this.nzMenuService=h,this.directionality=d,this.noAnimation=V,this.mouseState$=new R(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new _,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new b}ngOnInit(){this.directionality.change?.pipe(z(this.destroy$)).subscribe(i=>{this.dir=i,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};e.\u0275fac=function(t){return new(t||e)(s(te),s(I),s(N),s(P),s(E),s(Ce,8),s(Y,9))},e.\u0275cmp=J({type:e,selectors:[["nz-dropdown-menu"]],viewQuery:function(t,r){if(t&1&&fe(me,7),t&2){let a;ue(a=ve())&&(r.templateRef=a.first)}},exportAs:["nzDropdownMenu"],features:[pe([E,{provide:je,useValue:!0}])],ngContentSelectors:Pe,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function(t,r){t&1&&(ce(),se(0,_e,2,7,"ng-template"))},dependencies:[ye,ge,Y],encapsulation:2,data:{animation:[ke]},changeDetection:0});let n=e;return n})(),Et=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=x({type:e}),e.\u0275inj=j({imports:[be,ze,Oe,Ee,W,Ie,Ve,Me,Te,Ae,De,W]});let n=e;return n})(),Ye=[new C({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new C({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new C({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new C({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})],Vt=(()=>{let e=class e{constructor(i,t){this.ngZone=i,this.overlay=t,this.overlayRef=null,this.closeSubscription=k.EMPTY}create(i,t){this.close(!0);let{x:r,y:a}=i;i instanceof MouseEvent&&i.preventDefault();let h=this.overlay.position().flexibleConnectedTo({x:r,y:a}).withPositions(Ye).withTransformOriginOn(".ant-dropdown");return this.overlayRef=this.overlay.create({positionStrategy:h,disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.close()}),this.closeSubscription=new k,this.closeSubscription.add(t.descendantMenuItemClick$.subscribe(()=>this.close())),this.closeSubscription.add(this.ngZone.runOutsideAngular(()=>p(u(document,"click").pipe(c(d=>!!this.overlayRef&&!this.overlayRef.overlayElement.contains(d.target)),c(d=>d.button!==2)),u(document,"keydown").pipe(c(d=>d.key==="Escape"))).pipe(U()).subscribe(()=>this.ngZone.run(()=>this.close())))),this.overlayRef.attach(new B(t.templateRef,t.viewContainerRef))}close(i=!1){this.overlayRef&&(this.overlayRef.detach(),i&&this.overlayRef.dispose(),this.overlayRef=null,this.closeSubscription.unsubscribe())}};e.\u0275fac=function(t){return new(t||e)(A(ie),A(F))},e.\u0275prov=K({token:e,factory:e.\u0275fac,providedIn:Ae});let n=e;return n})();export{y as a,Dt as b,It as c,Nt as d,Et as e,Vt as f};
