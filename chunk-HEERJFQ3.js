import{a as Ze,b as He,c as Je}from"./chunk-6WEFBRTB.js";import{b as Re,c as Pe}from"./chunk-N5S7ICZQ.js";import{a as U,b as Ue}from"./chunk-AYK2KQFL.js";import{a as $e,b as Ge}from"./chunk-T7I2OBCK.js";import{F as Ve,H as ke,I as Le,N as Oe,O as je,P as Be,R as We,d as Ie,g as R,m as P,v as Fe}from"./chunk-IX2EHRLS.js";import{$a as y,$f as j,Ab as oe,Da as q,Eb as V,Fa as K,Fb as $,Ja as o,Jd as Ce,Ka as g,La as I,Mg as Ae,Na as X,Oa as F,Qb as se,Ra as ee,Rb as le,Rg as Ne,Sa as l,Ta as te,Tb as ce,Ua as v,Ug as G,Va as ie,Zb as de,Zc as fe,Zd as ve,_d as L,_f as O,ab as A,ad as he,ag as Se,bb as ne,be as we,cc as pe,cg as be,da as M,db as ae,eb as re,eg as De,fb as c,g as Q,gb as d,gc as me,gg as Te,ha as C,hb as p,hd as ge,ia as E,ic as ue,id as xe,kd as _e,lb as x,ma as Y,md as ze,na as u,oa as f,od as ye,pb as h,q as z,qg as B,rb as m,sg as Me,tg as Ee,uc as k,yb as t,zb as N}from"./chunk-SBXYWWID.js";var Xe=["textEl"];function et(r,n){if(r&1&&p(0,"span",3),r&2){let e=m();l("nzType",e.nzIcon)}}function tt(r,n){if(r&1){let e=x();c(0,"img",4),h("error",function(a){u(e);let s=m();return f(s.imgError(a))}),d()}if(r&2){let e=m();l("src",e.nzSrc,q),ee("srcset",e.nzSrcSet)("alt",e.nzAlt)}}function it(r,n){if(r&1&&(c(0,"span",5,6),t(2),d()),r&2){let e=m();o(2),N(e.nzText)}}var nt="avatar",w=class w{constructor(n,e,i,a,s){this.nzConfigService=n,this.elementRef=e,this.cdr=i,this.platform=a,this.ngZone=s,this._nzModuleName=nt,this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new X,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(n){this.nzError.emit(n),n.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;let n=this.textEl.nativeElement,e=n.offsetWidth,i=this.el.getBoundingClientRect().width,a=this.nzGap*2<i?this.nzGap*2:8,s=i-a<e?(i-a)/e:1;n.style.transform=`scale(${s}) translateX(-50%)`,n.style.lineHeight=this.customSize||""}notifyCalc(){this.platform.isBrowser&&this.ngZone.runOutsideAngular(()=>{setTimeout(()=>{this.calcStringSize()})})}setSizeStyle(){typeof this.nzSize=="number"?this.customSize=`${this.nzSize}px`:this.customSize=null,this.cdr.markForCheck()}};w.\u0275fac=function(e){return new(e||w)(g(ve),g(K),g(I),g(ge),g(F))},w.\u0275cmp=C({type:w,selectors:[["nz-avatar"]],viewQuery:function(e,i){if(e&1&&le(Xe,5),e&2){let a;se(a=ce())&&(i.textEl=a.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(e,i){e&2&&(te("width",i.customSize)("height",i.customSize)("line-height",i.customSize)("font-size",i.hasIcon&&i.customSize?i.nzSize/2:null,"px"),v("ant-avatar-lg",i.nzSize==="large")("ant-avatar-sm",i.nzSize==="small")("ant-avatar-square",i.nzShape==="square")("ant-avatar-circle",i.nzShape==="circle")("ant-avatar-icon",i.nzIcon)("ant-avatar-image",i.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[Y],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string"],["textEl",""]],template:function(e,i){e&1&&y(0,et,1,1,"span",0)(1,tt,1,3,"img",1)(2,it,3,1,"span",2),e&2&&(l("ngIf",i.nzIcon&&i.hasIcon),o(1),l("ngIf",i.nzSrc&&i.hasSrc),o(1),l("ngIf",i.nzText&&i.hasText))},dependencies:[ue,O],encapsulation:2,changeDetection:0});var D=w;z([L()],D.prototype,"nzShape",void 0);z([L()],D.prototype,"nzSize",void 0);z([L(),Ce()],D.prototype,"nzGap",void 0);var jt=(()=>{let n=class n{};n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=E({type:n}),n.\u0275inj=M({imports:[ye,k,j,xe]});let r=n;return r})();var W="alain-default-vars",Qe=[{key:"dust",color:"#F5222D"},{key:"volcano",color:"#FA541C"},{key:"sunset",color:"#FAAD14"},{key:"cyan",color:"#13C2C2"},{key:"green",color:"#52C41A"},{key:"daybreak",color:"#1890ff"},{key:"geekblue",color:"#2F54EB"},{key:"purple",color:"#722ED1"},{key:"black",color:"#001529"}],T={"primary-color":{label:"\u4E3B\u989C\u8272",type:"color",default:"#1890ff"},"alain-default-header-hg":{label:"\u9AD8",type:"px",default:"64px",max:300,min:24},"alain-default-header-bg":{label:"\u80CC\u666F\u8272",type:"color",default:"@primary-color",tip:"\u9ED8\u8BA4\u540C\u4E3B\u8272\u7CFB"},"alain-default-header-padding":{label:"\u9876\u90E8\u5DE6\u53F3\u5185\u8FB9\u8DDD",type:"px",default:"16px"},"alain-default-aside-wd":{label:"\u5BBD\u5EA6",type:"px",default:"200px"},"alain-default-aside-bg":{label:"\u80CC\u666F",type:"color",default:"#ffffff"},"alain-default-aside-collapsed-wd":{label:"\u6536\u7F29\u5BBD\u5EA6",type:"px",default:"64px"},"alain-default-aside-nav-padding-top-bottom":{label:"\u9879\u4E0A\u4E0B\u5185\u8FB9\u8DDD",type:"px",default:"8px",step:8},"alain-default-aside-nav-fs":{label:"\u83DC\u5355\u5B57\u53F7",type:"px",default:"14px",min:14,max:30},"alain-default-aside-collapsed-nav-fs":{label:"\u6536\u7F29\u83DC\u5355\u5B57\u53F7",type:"px",default:"24px",min:24,max:32},"alain-default-aside-nav-item-height":{label:"\u83DC\u5355\u9879\u9AD8\u5EA6",type:"px",default:"38px",min:24,max:64},"alain-default-aside-nav-text-color":{label:"\u83DC\u5355\u6587\u672C\u989C\u8272",type:"color",default:"rgba(0, 0, 0, 0.65)",rgba:!0},"alain-default-aside-nav-text-hover-color":{label:"\u83DC\u5355\u6587\u672C\u60AC\u505C\u989C\u8272",type:"color",default:"@primary-color",tip:"\u9ED8\u8BA4\u540C\u4E3B\u8272\u7CFB"},"alain-default-aside-nav-group-text-color":{label:"\u83DC\u5355\u5206\u7EC4\u6587\u672C\u989C\u8272",type:"color",default:"rgba(0, 0, 0, 0.43)",rgba:!0},"alain-default-aside-nav-selected-text-color":{label:"\u83DC\u5355\u6FC0\u6D3B\u65F6\u6587\u672C\u989C\u8272",type:"color",default:"@primary-color",tip:"\u9ED8\u8BA4\u540C\u4E3B\u8272\u7CFB"},"alain-default-aside-nav-selected-bg":{label:"\u83DC\u5355\u6FC0\u6D3B\u65F6\u80CC\u666F\u989C\u8272",type:"color",default:"#fcfcfc"},"alain-default-content-bg":{label:"\u80CC\u666F\u8272",type:"color",default:"#f5f7fa"},"alain-default-content-heading-bg":{label:"\u6807\u9898\u80CC\u666F\u8272",type:"color",default:"#fafbfc"},"alain-default-content-heading-border":{label:"\u6807\u9898\u5E95\u90E8\u8FB9\u6846\u8272",type:"color",default:"#efe3e5"},"alain-default-content-padding":{label:"\u5185\u8FB9\u8DDD",type:"px",default:"24px",min:0,max:128,step:8},"form-state-visual-feedback-enabled":{label:"\u5F00\u542F\u8868\u5355\u5143\u7D20\u7684\u89C6\u89C9\u53CD\u9988",type:"switch",default:!0},"preserve-white-spaces-enabled":{label:"\u5F00\u542F preserveWhitespaces",type:"switch",default:!0},"nz-table-img-radius":{label:"\u8868\u683C\u4E2D\uFF1A\u56FE\u7247\u5706\u89D2",type:"px",default:"4px",min:0,max:128},"nz-table-img-margin-right":{label:"\u8868\u683C\u4E2D\uFF1A\u56FE\u7247\u53F3\u5916\u8FB9\u8DDD",type:"px",default:"4px",min:0,max:128},"nz-table-img-max-width":{label:"\u8868\u683C\u4E2D\uFF1A\u56FE\u7247\u6700\u5927\u5BBD\u5EA6",type:"px",default:"32px",min:8,max:128},"nz-table-img-max-height":{label:"\u8868\u683C\u4E2D\uFF1A\u56FE\u7247\u6700\u5927\u9AD8\u5EA6",type:"px",default:"32px",min:8,max:128}};var H=()=>({standalone:!0});function st(r,n){if(r&1){let e=x();t(0,`
    `),c(1,"input",1),h("ngModelChange",function(a){u(e);let s=m();return f(s.i.value=a)}),d(),t(2,`
  `)}if(r&2){let e=m();o(1),l("ngModel",e.i.value)("ngModelOptions",V(2,H))}}function lt(r,n){if(r&1){let e=x();t(0,`
    `),c(1,"input",2),h("ngModelChange",function(a){u(e);let s=m();return f(s.i.value=a)}),d(),t(2,`
  `)}if(r&2){let e=m();o(1),l("ngModel",e.i.value)("ngModelOptions",V(2,H))}}function ct(r,n){if(r&1){let e=x();t(0,`
    `),c(1,"nz-input-number",3),h("ngModelChange",function(a){u(e);let s=m();return f(s.pxVal=a)})("ngModelChange",function(a){u(e);let s=m();return f(s.pxChange(a))}),d(),t(2,`
  `)}if(r&2){let e=m();o(1),l("ngModel",e.pxVal)("nzMin",e.i.min)("nzMax",e.i.max)("nzStep",e.i.step||2)("nzFormatter",e.format)}}function dt(r,n){if(r&1){let e=x();t(0,`
    `),c(1,"nz-switch",4),h("ngModelChange",function(a){u(e);let s=m();return f(s.i.value=a)}),d(),t(2,`
  `)}if(r&2){let e=m();o(1),l("ngModel",e.i.value)("ngModelOptions",V(2,H))}}function pt(r,n){}function mt(r,n){r&1&&(t(0,`
    `),y(1,pt,0,0,"ng-template",5),t(2,`
  `))}var J=(()=>{let n=class n{constructor(){this.i={},this.pxVal=0,this.format=i=>`${i} px`}set data(i){this.i=i,i.type==="px"&&(this.pxVal=+i.value.replace("px",""))}pxChange(i){this.i.value=`${i}px`}};n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=C({type:n,selectors:[["setting-drawer-item"]],hostVars:2,hostBindings:function(a,s){a&2&&v("setting-drawer__body-item",!0)},inputs:{data:"data"},decls:12,vars:3,consts:[[1,"pl-sm","text-grey"],["nz-input","","type","color",2,"min-width","88px",3,"ngModel","ngModelOptions","ngModelChange"],["nz-input","",2,"min-width","88px",3,"ngModel","ngModelOptions","ngModelChange"],[3,"ngModel","nzMin","nzMax","nzStep","nzFormatter","ngModelChange"],["nzSize","small",3,"ngModel","ngModelOptions","ngModelChange"],["nzDrawerContent",""]],template:function(a,s){if(a&1&&(c(0,"span"),t(1),c(2,"span",0),t(3),d(),t(4,`
`),d(),t(5,`
`),y(6,st,3,3)(7,lt,3,3)(8,ct,3,5)(9,dt,3,3)(10,mt,3,0),t(11,`
`)),a&2){let _;o(1),oe(`
  `,s.i.label,`
  `),o(2),N(s.i.tip),o(3),A(6,(_=s.i.type)==="color"?6:_==="input"?7:_==="px"?8:_==="switch"?9:10)}},dependencies:[Ie,R,P,B,U,Le,je],encapsulation:2});let r=n;return r})();function ft(r,n){r&1&&(t(0,`
            `),p(1,"i",19),t(2,`
          `))}var ht=r=>({"background-color":r});function gt(r,n){if(r&1){let e=x();t(0,`
        `),c(1,"span",18),h("click",function(){let s=u(e).$implicit,_=m(2);return f(_.changeColor(s.color))}),t(2,`
          `),y(3,ft,3,0),d(),t(4,`
      `)}if(r&2){let e=n.$implicit,i=m(2);o(1),ie($(4,ht,e.color)),l("nzTooltipTitle",e.key),o(2),A(3,i.color===e.color?3:-1)}}function xt(r,n){if(r&1){let e=x();c(0,"div",4),t(1,`
    `),c(2,"div",5),t(3,`
      `),c(4,"h3",6),t(5,"\u4E3B\u9898\u8272"),d(),t(6,`
      `),ae(7,gt,5,6,null,null,ne),d(),t(9,`
    `),p(10,"nz-divider"),t(11,`
    `),c(12,"div",7),t(13,`
      `),c(14,"h3",6),t(15,"\u8BBE\u7F6E"),d(),t(16,`
      `),c(17,"nz-tabset"),t(18,`
        `),c(19,"nz-tab",8),t(20,`
          `),c(21,"div",7),t(22,`
            `),p(23,"setting-drawer-item",9),t(24,`
            `),p(25,"setting-drawer-item",9),t(26,`
            `),p(27,"setting-drawer-item",9),t(28,`
          `),d(),t(29,`
        `),d(),t(30,`
        `),c(31,"nz-tab",10),t(32,`
          `),p(33,"setting-drawer-item",9),t(34,`
          `),p(35,"setting-drawer-item",9),t(36,`
          `),p(37,"setting-drawer-item",9),t(38,`
          `),p(39,"setting-drawer-item",9),t(40,`
        `),d(),t(41,`
        `),c(42,"nz-tab",11),t(43,`
          `),p(44,"setting-drawer-item",9),t(45,`
          `),p(46,"setting-drawer-item",9),t(47,`
          `),p(48,"setting-drawer-item",9),t(49,`
          `),p(50,"setting-drawer-item",9),t(51,`
        `),d(),t(52,`
        `),c(53,"nz-tab",12),t(54,`
          `),p(55,"setting-drawer-item",9),t(56,`
          `),p(57,"setting-drawer-item",9),t(58,`
          `),p(59,"setting-drawer-item",9),t(60,`
          `),p(61,"setting-drawer-item",9),t(62,`
          `),p(63,"setting-drawer-item",9),t(64,`
          `),p(65,"setting-drawer-item",9),t(66,`
        `),d(),t(67,`
      `),d(),t(68,`
    `),d(),t(69,`
    `),p(70,"nz-divider"),t(71,`
    `),c(72,"div",7),t(73,`
      `),c(74,"div",13),t(75,`
        \u56FA\u5B9A\u5934\u548C\u4FA7\u8FB9\u680F
        `),c(76,"nz-switch",14),h("ngModelChange",function(a){u(e);let s=m();return f(s.layout.fixed=a)})("ngModelChange",function(){u(e);let a=m();return f(a.setLayout("fixed",a.layout.fixed))}),d(),t(77,`
      `),d(),t(78,`
      `),c(79,"div",13),t(80,`
        \u8272\u5F31\u6A21\u5F0F
        `),c(81,"nz-switch",14),h("ngModelChange",function(a){u(e);let s=m();return f(s.layout.colorWeak=a)})("ngModelChange",function(){u(e);let a=m();return f(a.setLayout("colorWeak",a.layout.colorWeak))}),d(),t(82,`
      `),d(),t(83,`
    `),d(),t(84,`
    `),p(85,"nz-divider"),t(86,`
    `),c(87,"button",15),h("click",function(){u(e);let a=m();return f(a.apply())}),t(88,"\u9884\u89C8"),d(),t(89,`
    `),c(90,"button",16),h("click",function(){u(e);let a=m();return f(a.reset())}),t(91,"\u91CD\u7F6E"),d(),t(92,`
    `),c(93,"button",16),h("click",function(){u(e);let a=m();return f(a.copyVar())}),t(94,"\u62F7\u8D1D"),d(),t(95,`
    `),p(96,"nz-alert",17),t(97,`
  `),d()}if(r&2){let e=m();o(7),re(e.colors),o(16),l("data",e.data["alain-default-header-hg"]),o(2),l("data",e.data["alain-default-header-bg"]),o(2),l("data",e.data["alain-default-header-padding"]),o(6),l("data",e.data["alain-default-aside-wd"]),o(2),l("data",e.data["alain-default-aside-bg"]),o(2),l("data",e.data["alain-default-aside-collapsed-wd"]),o(2),l("data",e.data["alain-default-aside-nav-padding-top-bottom"]),o(5),l("data",e.data["alain-default-content-bg"]),o(2),l("data",e.data["alain-default-content-heading-bg"]),o(2),l("data",e.data["alain-default-content-heading-border"]),o(2),l("data",e.data["alain-default-content-padding"]),o(5),l("data",e.data["form-state-visual-feedback-enabled"]),o(2),l("data",e.data["preserve-white-spaces-enabled"]),o(2),l("data",e.data["nz-table-img-radius"]),o(2),l("data",e.data["nz-table-img-margin-right"]),o(2),l("data",e.data["nz-table-img-max-width"]),o(2),l("data",e.data["nz-table-img-max-height"]),o(11),l("ngModel",e.layout.fixed),o(5),l("ngModel",e.layout.colorWeak)}}var _t=r=>({"setting-drawer__handle-opened":r}),S=class S{get layout(){return this.settingSrv.layout}constructor(n,e,i,a,s,_,Ye){this.cdr=n,this.msg=e,this.settingSrv=i,this.lazy=a,this.ngZone=s,this.doc=_,this.directionality=Ye,this.autoApplyColor=!0,this.compilingText="Compiling...",this.devTips="When the color can't be switched, you need to run it once: npm run color-less",this.lessJs="https://cdn.jsdelivr.net/npm/less",this.loadedLess=!1,this.dir$=this.directionality.change?.pipe(we()),this.dir="ltr",this.isDev=de(),this.collapse=!1,this.data={},this.colors=Qe,this.color=this.cachedData["@primary-color"]||this.DEFAULT_PRIMARY,this.resetData(this.cachedData,!1)}get cachedData(){return this.settingSrv.layout[W]||{}}get DEFAULT_PRIMARY(){return T["primary-color"].default}ngOnInit(){this.dir=this.directionality.value,this.dir$.subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),this.autoApplyColor&&this.color!==this.DEFAULT_PRIMARY&&(this.changeColor(this.color),this.runLess())}loadLess(){return Q(this,null,function*(){return this.loadedLess?Promise.resolve():this.lazy.loadStyle("./assets/color.less",{rel:"stylesheet/less"}).then(()=>{let n=this.doc.createElement("script");n.innerHTML=`
          window.less = {
            async: true,
            env: 'production',
            javascriptEnabled: true
          };
        `,this.doc.body.appendChild(n)}).then(()=>this.lazy.loadScript(this.lessJs)).then(()=>{this.loadedLess=!0})})}genVars(){let{data:n,color:e,validKeys:i}=this,a={"@primary-color":e};return i.filter(s=>s!=="primary-color").forEach(s=>a[`@${s}`]=n[s].value),this.setLayout(W,a),a}runLess(){let{ngZone:n,msg:e,cdr:i}=this,a=e.loading(this.compilingText,{nzDuration:0}).messageId;setTimeout(()=>{this.loadLess().then(()=>{window.less.modifyVars(this.genVars()).then(()=>{e.success("\u6210\u529F"),e.remove(a),n.run(()=>i.detectChanges())})})},200)}toggle(){this.collapse=!this.collapse}changeColor(n){this.color=n,Object.keys(T).filter(e=>T[e].default==="@primary-color").forEach(e=>delete this.cachedData[`@${e}`]),this.resetData(this.cachedData,!1)}setLayout(n,e){this.settingSrv.setLayout(n,e)}resetData(n,e=!0){n=n||{};let i=fe(T);Object.keys(i).forEach(a=>{let s=n[`@${a}`]||i[a].default||"";i[a].value=s==="@primary-color"?this.color:s}),this.data=i,e&&(this.cdr.detectChanges(),this.runLess())}get validKeys(){return Object.keys(this.data).filter(n=>this.data[n].value!==this.data[n].default)}apply(){this.runLess()}reset(){this.color=this.DEFAULT_PRIMARY,this.settingSrv.setLayout(W,{}),this.resetData({})}copyVar(){let n=this.genVars(),e=Object.keys(n).map(i=>`${i}: ${n[i]};`).join(`
`);Ae(e),this.msg.success("Copy success")}};S.\u0275fac=function(e){return new(e||S)(g(I),g(We),g(_e),g(he),g(F),g(pe),g(ze,8))},S.\u0275cmp=C({type:S,selectors:[["setting-drawer"]],hostVars:4,hostBindings:function(e,i){e&2&&v("setting-drawer",!0)("setting-drawer-rtl",i.dir==="rtl")},inputs:{autoApplyColor:"autoApplyColor",compilingText:"compilingText",devTips:"devTips",lessJs:"lessJs"},decls:10,vars:8,consts:[[3,"nzVisible","nzPlacement","nzWidth","nzOnClose"],["class","setting-drawer__content",4,"nzDrawerContent"],["nz-tooltip","",1,"setting-drawer__handle",3,"ngClass","nzTooltipTitle","click"],["nz-icon","",1,"setting-drawer__handle-icon",3,"nzType"],[1,"setting-drawer__content"],[1,"setting-drawer__body","setting-drawer__theme"],[1,"setting-drawer__title"],[1,"setting-drawer__body"],["nzTitle","\u9876\u90E8"],[3,"data"],["nzTitle","\u4FA7\u8FB9\u680F"],["nzTitle","\u5185\u5BB9"],["nzTitle","\u5176\u5B83"],[1,"setting-drawer__body-item"],["nzSize","small",3,"ngModel","ngModelChange"],["type","button","nz-button","","nzType","primary",3,"click"],["type","button","nz-button","",3,"click"],["nzType","warning","nzMessage","\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u53C2\u6570\u914D\u7F6E\u6587\u4EF6 src/styles/theme.less",1,"mt-md"],["nz-tooltip","",1,"setting-drawer__theme-tag",3,"nzTooltipTitle","click"],["nz-icon","","nzType","check"]],template:function(e,i){e&1&&(c(0,"nz-drawer",0),h("nzOnClose",function(){return i.toggle()}),t(1,`
  `),y(2,xt,98,19,"div",1),t(3,`
`),d(),t(4,`
`),c(5,"div",2),h("click",function(){return i.toggle()}),t(6,`
  `),p(7,"i",3),t(8,`
`),d(),t(9,`
`)),e&2&&(l("nzVisible",i.collapse)("nzPlacement",i.dir==="rtl"?"left":"right")("nzWidth",500),o(5),l("ngClass",$(6,_t,i.collapse))("nzTooltipTitle",i.isDev?i.devTips:null),o(2),l("nzType",i.collapse?"close":"setting"))},dependencies:[me,R,P,Me,B,Ve,Re,He,Ze,U,$e,O,De,Se,be,J],encapsulation:2,changeDetection:0});var b=S;z([Ne()],b.prototype,"autoApplyColor",void 0);z([G()],b.prototype,"loadLess",null);z([G()],b.prototype,"runLess",null);var Ei=(()=>{let n=class n{};n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=E({type:n}),n.\u0275inj=M({imports:[k,Fe,Ee,ke,Pe,Je,Ue,Ge,j,Oe,Be,Te]});let r=n;return r})();export{D as a,jt as b,b as c,Ei as d};
