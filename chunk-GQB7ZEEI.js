import{a as L}from"./chunk-BAPU3RXT.js";import{a as P,b as T}from"./chunk-J6XY7ONC.js";import{Ab as $,Bb as j,C as p,H as n,Ja as E,L as u,Lb as z,Sa as O,Wa as h,a as d,ba as g,ca as y,cb as x,cc as N,fa as s,ha as _,ia as C,jb as a,k as m,kd as M,ld as k,nd as c,q as f,sd as I,wa as v,xa as w,ya as b,yc as D,zb as S}from"./chunk-PQ76J5IX.js";var F=(()=>{class o{get cog(){return this._cog}set cog(e){this._cog=this.cogSrv.merge("chart",{theme:"",echartsLib:"https://cdnjs.cloudflare.com/ajax/libs/echarts/5.1.0/echarts.min.js"},e)}constructor(){this.cogSrv=s(k),this.lazySrv=s(M),this.loading=!1,this.loaded=!1,this.notify$=new m,this.cog={theme:""}}libLoad(){return this.loading?(this.loaded&&this.notify$.next(),this):(this.loading=!0,this.lazySrv.load(this.cog.echartsLib).then(()=>{let e=this.cog.echartsExtensions;return Array.isArray(e)&&e.length>0?this.lazySrv.load(e).then(()=>!0):Promise.resolve(!0)}).then(()=>{this.loaded=!0,this.notify$.next()}),this)}get notify(){return this.notify$.asObservable()}ngOnDestroy(){this.notify$.unsubscribe()}static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275prov=g({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();var Q=["container"];function Z(o,t){o&1&&a(0,"nz-skeleton")}var r=class o{set width(t){this._width=typeof t=="number"?`${t}px`:`${t}`}set height(t){this._height=typeof t=="number"?`${t}px`:`${t}`}set theme(t){this._theme=t,this._chart&&this.install()}set initOpt(t){this._initOpt=t,this._chart&&this.install()}set option(t){this._option=t,this._chart&&this.setOption(t,!0)}get chart(){return this._chart}constructor(){this.srv=s(F),this.cdr=s(N),this.ngZone=s(b),this.platform=s(I),this.destroy$=s(v),this._chart=null,this._width="100%",this._height="400px",this.on=[],this.events=new w,this.loaded=!1,this.srv.notify.pipe(c(),n(()=>!this.loaded)).subscribe(()=>this.load()),this.theme=this.srv.cog.echartsTheme}emit(t,e){this.events.emit(d({type:t,chart:this.chart},e))}load(){this.ngZone.run(()=>{this.loaded=!0,this.cdr.detectChanges()}),this.emit("ready"),this.install()}install(){this.destroy();let t=this._chart=window.echarts.init(this.node.nativeElement,this._theme,this._initOpt);return this.emit("init"),this.setOption(this._option),this.on.forEach(e=>{e.query!=null?t.on(e.eventName,e.query,i=>e.handler({event:i,chart:t})):t.on(e.eventName,i=>e.handler({event:i,chart:t}))}),this}destroy(){return this._chart&&(this._chart.dispose(),this.emit("destroy")),this}setOption(t,e=!1,i=!1){return this._chart&&(this._chart.setOption(t,e,i),this.emit("set-option",{option:t})),this}ngOnInit(){this.platform.isBrowser&&(window.echarts?this.load():this.srv.libLoad(),p(window,"resize").pipe(c(this.destroy$),n(()=>!!this._chart),u(200)).subscribe(()=>this._chart.resize()))}ngOnDestroy(){this.on.forEach(t=>this._chart?.off(t.eventName)),this.destroy()}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=_({type:o,selectors:[["chart-echarts"],["","chart-echarts",""]],viewQuery:function(e,i){if(e&1&&S(Q,7),e&2){let l;$(l=j())&&(i.node=l.first)}},hostVars:6,hostBindings:function(e,i){e&2&&h("display","inline-block")("width",i._width)("height",i._height)},inputs:{width:"width",height:"height",theme:"theme",initOpt:"initOpt",option:"option",on:"on"},outputs:{events:"events"},exportAs:["chartECharts"],standalone:!0,features:[z],decls:3,vars:5,consts:[["container",""]],template:function(e,i){e&1&&(O(0,Z,1,0,"nz-skeleton"),a(1,"div",null,0)),e&2&&(x(i.loaded?-1:0),E(),h("width",i._width)("height",i._height))},dependencies:[P],encapsulation:2,changeDetection:0})}};f([L()],r.prototype,"load",null);var q=[r],pt=(()=>{class o{static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275mod=C({type:o})}static{this.\u0275inj=y({imports:[D,T,q]})}}return o})();export{r as a,pt as b};
