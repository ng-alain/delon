import{$a as _,Cb as pe,E as b,Fb as ue,H as d,Hb as y,He as Me,Hg as Re,Ib as fe,J as c,Jb as me,K as Q,Le as be,Ob as he,Pa as ie,Pb as ve,Qb as ye,R as U,Ra as S,Sa as r,T as q,Ta as A,Ue as B,X as K,Xe as De,Y as h,Yh as _e,Za as ne,Zh as Y,_a as j,ca as J,da as I,db as oe,dc as ze,df as g,di as Ne,fa as x,ff as N,ga as f,i as E,ib as re,kb as se,l as C,la as ee,lb as ae,m as M,ma as D,mb as le,na as R,ph as Se,q as H,r as Z,s as V,se as P,tc as ge,ua as T,uc as z,ue as we,uf as m,va as te,ve as Ce,vh as F,wb as ce,xb as de,y as u,z as G,za as v}from"./chunk-SCDKUK6D.js";var Ve=["*"];function Ie(t,O){if(t&1){let e=pe();ce(0,"div",0),ue("@slideMotion.done",function(n){D(e);let o=y();return R(o.onAnimationEvent(n))})("mouseenter",function(){D(e);let n=y();return R(n.setMouseState(!0))})("mouseleave",function(){D(e);let n=y();return R(n.setMouseState(!1))}),me(1),de()}if(t&2){let e=y();ae(e.nzOverlayStyle),le(e.nzOverlayClassName),se("ant-dropdown-rtl",e.dir==="rtl"),re("@slideMotion",void 0)("@.disabled",!!(e.noAnimation!=null&&e.noAnimation.nzNoAnimation))("nzNoAnimation",e.noAnimation==null?null:e.noAnimation.nzNoAnimation)}}var xe="dropDown",Te=[m.bottomLeft,m.bottomRight,m.topRight,m.topLeft],ut=(()=>{let t,O=[],e=[];return class W{static{let n=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;t=[Ce()],Z(null,null,t,{kind:"field",name:"nzBackdrop",static:!1,private:!1,access:{has:o=>"nzBackdrop"in o,get:o=>o.nzBackdrop,set:(o,s)=>{o.nzBackdrop=s}},metadata:n},O,e),n&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n})}nzConfigService;renderer;viewContainerRef;platform;_nzModuleName=xe;elementRef=f(v);overlay=f(N);portal;overlayRef=null;destroy$=new C;positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown");inputVisible$=new M(!1);nzTrigger$=new M("hover");overlayClose$=new C;nzDropdownMenu=null;nzTrigger="hover";nzMatchWidthElement=null;nzBackdrop=V(this,O,!1);nzClickHide=(V(this,e),!0);nzDisabled=!1;nzVisible=!1;nzOverlayClassName="";nzOverlayStyle={};nzPlacement="bottomLeft";nzVisibleChange=new T;setDropdownMenuValue(n,o){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(n,o)}constructor(n,o,s,a){this.nzConfigService=n,this.renderer=o,this.viewContainerRef=s,this.platform=a}ngAfterViewInit(){if(this.nzDropdownMenu){let n=this.elementRef.nativeElement,o=d(b(n,"mouseenter").pipe(u(()=>!0)),b(n,"mouseleave").pipe(u(()=>!1))),s=this.nzDropdownMenu.mouseState$,a=d(s,o),$=b(n,"click").pipe(u(()=>!this.nzVisible)),k=this.nzTrigger$.pipe(K(l=>l==="hover"?a:l==="click"?$:H)),w=this.nzDropdownMenu.descendantMenuItemClick$.pipe(c(()=>this.nzClickHide),u(()=>!1)),$e=d(k,w,this.overlayClose$).pipe(c(()=>!this.nzDisabled)),ke=d(this.inputVisible$,$e);G([ke,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe(u(([l,X])=>l||X),Q(150),U(),c(()=>this.platform.isBrowser),h(this.destroy$)).subscribe(l=>{let L=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:n).getBoundingClientRect().width;if(this.nzVisible!==l&&this.nzVisibleChange.emit(l),this.nzVisible=l,l){if(!this.overlayRef)this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:L,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&this.nzTrigger==="click",scrollStrategy:this.overlay.scrollStrategies.reposition()}),d(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe(c(p=>!this.elementRef.nativeElement.contains(p.target))),this.overlayRef.keydownEvents().pipe(c(p=>p.keyCode===27&&!De(p)))).pipe(h(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)});else{let p=this.overlayRef.getConfig();p.minWidth=L}this.positionStrategy.withPositions([m[this.nzPlacement],...Te]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new B(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)}else this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe(h(this.destroy$)).subscribe(l=>{l.toState==="void"&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(n){let{nzVisible:o,nzDisabled:s,nzOverlayClassName:a,nzOverlayStyle:$,nzTrigger:k}=n;if(k&&this.nzTrigger$.next(this.nzTrigger),o&&this.inputVisible$.next(this.nzVisible),s){let w=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(w,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(w,"disabled")}a&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),$&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}static \u0275fac=function(o){return new(o||W)(r(we),r(S),r(A),r(Me))};static \u0275dir=_({type:W,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:[2,"nzBackdrop","nzBackdrop",z],nzClickHide:[2,"nzClickHide","nzClickHide",z],nzDisabled:[2,"nzDisabled","nzDisabled",z],nzVisible:[2,"nzVisible","nzVisible",z],nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[ee]})}})(),Oe=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=I({})}return t})(),ft=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=_({type:t,selectors:[["a","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-link"]})}return t})(),mt=(()=>{class t{renderer;elementRef;nzButtonGroupComponent=f(Re,{host:!0,optional:!0});constructor(e,i){this.renderer=e,this.elementRef=i}ngAfterViewInit(){let e=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&e&&this.renderer.addClass(e,"ant-dropdown-button")}static \u0275fac=function(i){return new(i||t)(r(S),r(v))};static \u0275dir=_({type:t,selectors:[["","nz-button","","nz-dropdown",""]]})}return t})(),ht=(()=>{class t{cdr;elementRef;renderer;viewContainerRef;directionality;mouseState$=new M(!1);nzMenuService=f(Y);isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$;descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$;animationStateChange$=new T;nzOverlayClassName="";nzOverlayStyle={};templateRef;dir="ltr";destroy$=new C;onAnimationEvent(e){this.animationStateChange$.emit(e)}setMouseState(e){this.mouseState$.next(e)}setValue(e,i){this[e]=i,this.cdr.markForCheck()}noAnimation=f(F,{host:!0,optional:!0});constructor(e,i,n,o,s){this.cdr=e,this.elementRef=i,this.renderer=n,this.viewContainerRef=o,this.directionality=s}ngOnInit(){this.directionality.change?.pipe(h(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static \u0275fac=function(i){return new(i||t)(r(ge),r(v),r(S),r(A),r(be))};static \u0275cmp=ne({type:t,selectors:[["nz-dropdown-menu"]],viewQuery:function(i,n){if(i&1&&he(ie,7),i&2){let o;ve(o=ye())&&(n.templateRef=o.first)}},exportAs:["nzDropdownMenu"],features:[ze([Y,{provide:_e,useValue:!0}])],ngContentSelectors:Ve,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"mouseenter","mouseleave","nzNoAnimation"]],template:function(i,n){i&1&&(fe(),oe(0,Ie,2,9,"ng-template"))},dependencies:[F],encapsulation:2,data:{animation:[Se]},changeDetection:0})}return t})(),vt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=j({type:t});static \u0275inj=I({imports:[Oe,Ne]})}return t})(),Ae=[new g({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new g({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new g({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new g({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})],yt=(()=>{class t{ngZone;overlay;overlayRef=null;closeSubscription=E.EMPTY;constructor(e,i){this.ngZone=e,this.overlay=i}create(e,i){this.close(!0);let{x:n,y:o}=e;e instanceof MouseEvent&&e.preventDefault();let s=this.overlay.position().flexibleConnectedTo({x:n,y:o}).withPositions(Ae).withTransformOriginOn(".ant-dropdown");return this.overlayRef=this.overlay.create({positionStrategy:s,disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.close()}),this.closeSubscription=new E,this.closeSubscription.add(i.descendantMenuItemClick$.subscribe(()=>this.close())),this.closeSubscription.add(d(P(document,"click").pipe(c(a=>!!this.overlayRef&&!this.overlayRef.overlayElement.contains(a.target)),c(a=>a.button!==2)),P(document,"keydown").pipe(c(a=>a.key==="Escape"))).pipe(q()).subscribe(()=>this.ngZone.run(()=>this.close()))),this.overlayRef.attach(new B(i.templateRef,i.viewContainerRef))}close(e=!1){this.overlayRef&&(this.overlayRef.detach(),e&&this.overlayRef.dispose(),this.overlayRef=null,this.closeSubscription.unsubscribe())}static \u0275fac=function(i){return new(i||t)(x(te),x(N))};static \u0275prov=J({token:t,factory:t.\u0275fac,providedIn:Oe})}return t})();export{ut as a,ft as b,mt as c,ht as d,vt as e,yt as f};
