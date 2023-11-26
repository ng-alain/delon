import{Zc as D,a as S,b as re,ca as A,cc as ie,d as T,f as te,fa as C,m as ne}from"./chunk-SBXYWWID.js";var he=T((eo,x)=>{"use strict";var U=function(){var e=String.fromCharCode,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",i={};function u(r,t){if(!i[r]){i[r]={};for(var c=0;c<r.length;c++)i[r][r.charAt(c)]=c}return i[r][t]}var m={compressToBase64:function(r){if(r==null)return"";var t=m._compress(r,6,function(c){return o.charAt(c)});switch(t.length%4){default:case 0:return t;case 1:return t+"===";case 2:return t+"==";case 3:return t+"="}},decompressFromBase64:function(r){return r==null?"":r==""?null:m._decompress(r.length,32,function(t){return u(o,r.charAt(t))})},compressToUTF16:function(r){return r==null?"":m._compress(r,15,function(t){return e(t+32)})+" "},decompressFromUTF16:function(r){return r==null?"":r==""?null:m._decompress(r.length,16384,function(t){return r.charCodeAt(t)-32})},compressToUint8Array:function(r){for(var t=m.compress(r),c=new Uint8Array(t.length*2),a=0,s=t.length;a<s;a++){var g=t.charCodeAt(a);c[a*2]=g>>>8,c[a*2+1]=g%256}return c},decompressFromUint8Array:function(r){if(r==null)return m.decompress(r);for(var t=new Array(r.length/2),c=0,a=t.length;c<a;c++)t[c]=r[c*2]*256+r[c*2+1];var s=[];return t.forEach(function(g){s.push(e(g))}),m.decompress(s.join(""))},compressToEncodedURIComponent:function(r){return r==null?"":m._compress(r,6,function(t){return n.charAt(t)})},decompressFromEncodedURIComponent:function(r){return r==null?"":r==""?null:(r=r.replace(/ /g,"+"),m._decompress(r.length,32,function(t){return u(n,r.charAt(t))}))},compress:function(r){return m._compress(r,16,function(t){return e(t)})},_compress:function(r,t,c){if(r==null)return"";var a,s,g={},M={},z="",v="",b="",y=2,w=3,f=2,h=[],l=0,d=0,N;for(N=0;N<r.length;N+=1)if(z=r.charAt(N),Object.prototype.hasOwnProperty.call(g,z)||(g[z]=w++,M[z]=!0),v=b+z,Object.prototype.hasOwnProperty.call(g,v))b=v;else{if(Object.prototype.hasOwnProperty.call(M,b)){if(b.charCodeAt(0)<256){for(a=0;a<f;a++)l=l<<1,d==t-1?(d=0,h.push(c(l)),l=0):d++;for(s=b.charCodeAt(0),a=0;a<8;a++)l=l<<1|s&1,d==t-1?(d=0,h.push(c(l)),l=0):d++,s=s>>1}else{for(s=1,a=0;a<f;a++)l=l<<1|s,d==t-1?(d=0,h.push(c(l)),l=0):d++,s=0;for(s=b.charCodeAt(0),a=0;a<16;a++)l=l<<1|s&1,d==t-1?(d=0,h.push(c(l)),l=0):d++,s=s>>1}y--,y==0&&(y=Math.pow(2,f),f++),delete M[b]}else for(s=g[b],a=0;a<f;a++)l=l<<1|s&1,d==t-1?(d=0,h.push(c(l)),l=0):d++,s=s>>1;y--,y==0&&(y=Math.pow(2,f),f++),g[v]=w++,b=String(z)}if(b!==""){if(Object.prototype.hasOwnProperty.call(M,b)){if(b.charCodeAt(0)<256){for(a=0;a<f;a++)l=l<<1,d==t-1?(d=0,h.push(c(l)),l=0):d++;for(s=b.charCodeAt(0),a=0;a<8;a++)l=l<<1|s&1,d==t-1?(d=0,h.push(c(l)),l=0):d++,s=s>>1}else{for(s=1,a=0;a<f;a++)l=l<<1|s,d==t-1?(d=0,h.push(c(l)),l=0):d++,s=0;for(s=b.charCodeAt(0),a=0;a<16;a++)l=l<<1|s&1,d==t-1?(d=0,h.push(c(l)),l=0):d++,s=s>>1}y--,y==0&&(y=Math.pow(2,f),f++),delete M[b]}else for(s=g[b],a=0;a<f;a++)l=l<<1|s&1,d==t-1?(d=0,h.push(c(l)),l=0):d++,s=s>>1;y--,y==0&&(y=Math.pow(2,f),f++)}for(s=2,a=0;a<f;a++)l=l<<1|s&1,d==t-1?(d=0,h.push(c(l)),l=0):d++,s=s>>1;for(;;)if(l=l<<1,d==t-1){h.push(c(l));break}else d++;return h.join("")},decompress:function(r){return r==null?"":r==""?null:m._decompress(r.length,32768,function(t){return r.charCodeAt(t)})},_decompress:function(r,t,c){var a=[],s,g=4,M=4,z=3,v="",b=[],y,w,f,h,l,d,N,p={val:c(0),position:t,index:1};for(y=0;y<3;y+=1)a[y]=y;for(f=0,l=Math.pow(2,2),d=1;d!=l;)h=p.val&p.position,p.position>>=1,p.position==0&&(p.position=t,p.val=c(p.index++)),f|=(h>0?1:0)*d,d<<=1;switch(s=f){case 0:for(f=0,l=Math.pow(2,8),d=1;d!=l;)h=p.val&p.position,p.position>>=1,p.position==0&&(p.position=t,p.val=c(p.index++)),f|=(h>0?1:0)*d,d<<=1;N=e(f);break;case 1:for(f=0,l=Math.pow(2,16),d=1;d!=l;)h=p.val&p.position,p.position>>=1,p.position==0&&(p.position=t,p.val=c(p.index++)),f|=(h>0?1:0)*d,d<<=1;N=e(f);break;case 2:return""}for(a[3]=N,w=N,b.push(N);;){if(p.index>r)return"";for(f=0,l=Math.pow(2,z),d=1;d!=l;)h=p.val&p.position,p.position>>=1,p.position==0&&(p.position=t,p.val=c(p.index++)),f|=(h>0?1:0)*d,d<<=1;switch(N=f){case 0:for(f=0,l=Math.pow(2,8),d=1;d!=l;)h=p.val&p.position,p.position>>=1,p.position==0&&(p.position=t,p.val=c(p.index++)),f|=(h>0?1:0)*d,d<<=1;a[M++]=e(f),N=M-1,g--;break;case 1:for(f=0,l=Math.pow(2,16),d=1;d!=l;)h=p.val&p.position,p.position>>=1,p.position==0&&(p.position=t,p.val=c(p.index++)),f|=(h>0?1:0)*d,d<<=1;a[M++]=e(f),N=M-1,g--;break;case 2:return b.join("")}if(g==0&&(g=Math.pow(2,z),z++),a[N])v=a[N];else if(N===M)v=w+w.charAt(0);else return null;b.push(v),a[M++]=w+v.charAt(0),g--,w=v,g==0&&(g=Math.pow(2,z),z++)}}};return m}();typeof define=="function"&&define.amd?define(function(){return U}):typeof x<"u"&&x!=null?x.exports=U:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return U})});var Me=T(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});var Ve=he();function We(e){return Ve.compressToBase64(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Ze(e){return We(JSON.stringify(e))}H.getParameters=Ze});var be=T(I=>{"use strict";I.__esModule=!0;I.getParameters=void 0;var Je=Me();I.getParameters=Je.getParameters});var ke=T((zo,Ke)=>{Ke.exports={name:"delon",version:"17.0.0",description:"Delon is a set of essential modules for NG-ALAIN.",keywords:["delon","ng-alain","alain","antd","ng-zorro-antd","angular"],author:"cipchk <cipchk@qq.com>",license:"MIT",bugs:{url:"https://github.com/ng-alain/ng-alain/issues"},repository:{type:"git",url:"git+https://github.com/ng-alain/delon.git"},homepage:"https://ng-alain.com",engines:{node:"^18.13.0"},scripts:{"ng-high-memory":"node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng",prepare:"husky install",start:"npm run site:gen && ng s -o --hmr",lint:"bash scripts/ci/lint.sh -ts -less","lint:ts":"eslint --cache . --ext .ts,.html","lint:fix":"eslint --cache . --ext .ts,.html --fix","lint:style":"npx stylelint 'packages/**/*.less'",test:"ng test --no-progress --browsers=ChromeHeadlessCI --code-coverage --no-watch","test:cli":"bash scripts/ci/build-schematics.sh -t -clone","test:integration":"bash scripts/ci/build-schematics.sh -b -t -clone -integration",build:"bash scripts/ci/build.sh",build_artifacts:"bash scripts/ci/build-artifacts.sh",analyze:"npm run ng-high-memory build -- --source-map","analyze:view":"source-map-explorer src/dist/browser/*.js","site:gen":"node scripts/site/main init && ng-alain-plugin-theme -t=themeCss && ng-alain-plugin-theme -t=colorLess","site:build":"npm run site:gen && ng b site && npm run site:ngsw && npm run site:minify && npm run site:sitemap && npm run site:helper","site:helper":"bash scripts/ci/helper.sh","site:minify":"node scripts/build/minify.js","site:sitemap":"node scripts/build/sitemap.js","site:ngsw":"node scripts/build/ngsw.js",changelog:"conventional-changelog -p angular -i CHANGELOG.md -s --pkg package.json","pre-publish":"node scripts/publish/publish.js && node scripts/publish/publish-scaffold.js","publish:next":"bash scripts/publish/publish.sh -next",publish:"bash scripts/publish/publish.sh","sync-scaffold-version":"node scripts/publish/sync-scaffold-version.js"},dependencies:{"@angular/animations":"^17.0.0","@angular/common":"^17.0.0","@angular/compiler":"^17.0.0","@angular/core":"^17.0.0","@angular/elements":"^17.0.0","@angular/forms":"^17.0.0","@angular/platform-browser":"^17.0.0","@angular/platform-browser-dynamic":"^17.0.0","@angular/platform-server":"^17.0.0","@angular/router":"^17.0.0","@angular/service-worker":"^17.0.0","@angular/ssr":"^17.0.0","@antv/data-set":"^0.11.8","@antv/g2":"^4.2.10","@github/hotkey":"^2.3.0","@ng-util/monaco-editor":"^17.0.0","@stackblitz/sdk":"^1.9.0","@webcomponents/custom-elements":"^1.6.0",ajv:"^8.12.0","ajv-formats":"^2.1.1",aos:"^3.0.0-beta.6",codesandbox:"^2.2.3",echarts:"^5.4.3",express:"^4.18.2",extend:"^3.0.2","file-saver":"^2.0.5",isutf8:"^4.0.0","ng-antd-color-picker":"^0.0.2","ng-github-button":"^17.0.0","ng-zorro-antd":"^17.0.1","ngx-countdown":"^17.0.0","ngx-highlight-js":"^17.0.0","ngx-tinymce":"^17.0.0",qrious:"^4.0.2",rxjs:"~7.8.0",tslib:"^2.3.0","zone.js":"~0.14.2"},devDependencies:{"@angular-devkit/build-angular":"^17.0.0","@angular-eslint/builder":"^17.0.0","@angular-eslint/eslint-plugin":"^17.0.0","@angular-eslint/eslint-plugin-template":"^17.0.0","@angular-eslint/schematics":"^17.0.0","@angular-eslint/template-parser":"^17.0.0","@angular/cli":"^17.0.0","@angular/compiler-cli":"^17.0.0","@angular/language-service":"^17.0.0","@commitlint/cli":"^17.8.1","@commitlint/config-angular":"^17.8.1","@types/aos":"^3.0.7","@types/deep-extend":"^0.6.2","@types/express":"^4.17.17","@types/extend":"^3.0.4","@types/file-saver":"^2.0.7","@types/fs-extra":"^11.0.4","@types/jasmine":"~5.1.0","@types/jasminewd2":"~2.0.13","@types/mockjs":"^1.0.10","@types/node":"^18.18.0","@types/parse5":"^7.0.0","@typescript-eslint/eslint-plugin":"^6.10.0","@typescript-eslint/parser":"^6.10.0",chalk:"^5.3.0",codecov:"^3.8.3","conventional-changelog-cli":"^4.1.0",eslint:"^8.53.0","eslint-config-prettier":"~9.0.0","eslint-plugin-deprecation":"~2.0.0","eslint-plugin-import":"~2.29.0","eslint-plugin-jsdoc":"~46.5.1","eslint-plugin-prefer-arrow":"~1.2.3","eslint-plugin-prettier":"~5.0.1","fs-extra":"^11.1.1","html-minifier-terser":"^7.2.0",husky:"^8.0.3",jasmine:"^5.1.0","jasmine-core":"~5.1.0","jasmine-spec-reporter":"^7.0.0","jsonml.js":"^0.1.0",jszip:"^3.10.1",karma:"~6.4.0","karma-chrome-launcher":"~3.2.0","karma-coverage":"~2.2.0","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.1.0","karma-junit-reporter":"^2.0.1","karma-parallel":"^0.3.1","karma-spec-reporter":"0.0.36","karma-summary-reporter":"^3.1.1","karma-viewport":"^1.0.9","klaw-sync":"^6.0.0","less-bundle-promise":"^1.0.11","less-plugin-clean-css":"^1.5.1","less-plugin-npm-import":"^2.1.0","less-vars-to-js":"^1.3.0","lint-staged":"^14.0.1","mark-twain":"^2.0.3",mockjs:"^1.1.0",mustache:"^4.2.0","ng-alain-plugin-theme":"^16.0.0","ng-alain-sts":"^0.0.2","ng-packagr":"^17.0.0",parse5:"^7.1.2",plyr:"^3.7.8",prettier:"^3.1.0","readline-sync":"^1.4.10",screenfull:"^6.0.2",sitemap:"^7.1.1","source-map-explorer":"^2.5.3",stream:"0.0.2",stylelint:"^15.11.0","stylelint-config-clean-order":"^5.2.0","stylelint-config-standard":"^34.0.0","stylelint-declaration-block-no-ignored-properties":"^2.7.0","swagger-typescript-api":"^12.0.4",terser:"^5.19.2","ts-node":"~10.9.1","tsconfig-paths":"^4.2.0",typescript:"~5.2.2",xlsx:"^0.18.5"},"lint-staged":{"(schematics|scripts|packages)/**/!(tslint-rules|testing)/!(polyfills).{html,ts}":["eslint --fix"],"packages/**/*.less":["npm run lint:style"]}}});var ae=(()=>{let o=class o{constructor(){this.theme="default",this.theme$=new ne(1)}setTheme(i){this.theme=i,this.theme$.next(i)}};o.\u0275fac=function(u){return new(u||o)},o.\u0275prov=A({token:o,factory:o.\u0275fac,providedIn:"root"});let e=o;return e})();var Ee="https://stackblitz.com",se=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],_e=["project","search","ports","settings"],xe=["light","dark"],Ie=["editor","preview"],le={clickToLoad:e=>k("ctl",e),devToolsHeight:e=>de("devtoolsheight",e),forceEmbedLayout:e=>k("embed",e),hideDevTools:e=>k("hidedevtools",e),hideExplorer:e=>k("hideExplorer",e),hideNavigation:e=>k("hideNavigation",e),openFile:e=>ce("file",e),showSidebar:e=>Ce("showSidebar",e),sidebarView:e=>P("sidebarView",e,_e),startScript:e=>ce("startScript",e),terminalHeight:e=>de("terminalHeight",e),theme:e=>P("theme",e,xe),view:e=>P("view",e,Ie),zenMode:e=>k("zenMode",e)};function ue(e={}){let o=Object.entries(e).map(([n,i])=>i!=null&&le.hasOwnProperty(n)?le[n](i):"").filter(Boolean);return o.length?`?${o.join("&")}`:""}function k(e,o){return o===!0?`${e}=1`:""}function Ce(e,o){return typeof o=="boolean"?`${e}=${o?"1":"0"}`:""}function de(e,o){if(typeof o=="number"&&!Number.isNaN(o)){let n=Math.min(100,Math.max(0,o));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function P(e,o="",n=[]){return n.includes(o)?`${e}=${encodeURIComponent(o)}`:""}function ce(e,o){return(Array.isArray(o)?o:[o]).filter(i=>typeof i=="string"&&i.trim()!=="").map(i=>`${e}=${encodeURIComponent(i)}`).join("&")}function pe(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function L(e,o){return`${me(o)}${e}${ue(o)}`}function G(e,o){let n={forceEmbedLayout:!0};return o&&typeof o=="object"&&Object.assign(n,o),`${me(n)}${e}${ue(n)}`}function me(e={}){return(typeof e.origin=="string"?e.origin:Ee).replace(/\/$/,"")}function $(e,o,n){if(!o||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(o.id=e.id),e.className&&(o.className=e.className),De(o,n),e.replaceWith(o)}function F(e){if(typeof e=="string"){let o=document.getElementById(e);if(!o)throw new Error(`Could not find element with id '${e}'`);return o}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function q(e){return e&&e.newWindow===!1?"_self":"_blank"}function De(e,o={}){let n=Object.hasOwnProperty.call(o,"height")?`${o.height}`:"300",i=Object.hasOwnProperty.call(o,"width")?`${o.width}`:void 0;e.setAttribute("height",n),i?e.setAttribute("width",i):e.setAttribute("style","width:100%;")}var O=class{constructor(o){this.pending={},this.port=o,this.port.onmessage=this.messageListener.bind(this)}request({type:o,payload:n}){return new Promise((i,u)=>{let m=pe();this.pending[m]={resolve:i,reject:u},this.port.postMessage({type:o,payload:re(S({},n),{__reqid:m})})})}messageListener(o){if(typeof o.data.payload?.__reqid!="string")return;let{type:n,payload:i}=o.data,{__reqid:u,__success:m,__error:r}=i;this.pending[u]&&(m?this.pending[u].resolve(this.cleanResult(i)):this.pending[u].reject(r?`${n}: ${r}`:n),delete this.pending[u])}cleanResult(o){let n=S({},o);return delete n.__reqid,delete n.__success,delete n.__error,Object.keys(n).length?n:null}},R=class{constructor(o,n){this.editor={openFile:i=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:i}}),setCurrentFile:i=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:i}}),setTheme:i=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:i}}),setView:i=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:i}}),showSidebar:(i=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:i}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(i=>i?.url??null),setUrl:(i="/")=>{if(typeof i!="string"||!i.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${i}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:i}})}},this._rdc=new O(o),Object.defineProperty(this.preview,"origin",{value:typeof n.previewOrigin=="string"?n.previewOrigin:null,writable:!1})}applyFsDiff(o){let n=i=>i!==null&&typeof i=="object";if(!n(o)||!n(o.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(o.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:o})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}},E=[],B=class{constructor(o){this.id=pe(),this.element=o,this.pending=new Promise((n,i)=>{let u=({data:a,ports:s})=>{a?.action==="SDK_INIT_SUCCESS"&&a.id===this.id&&(this.vm=new R(s[0],a.payload),n(this.vm),r())},m=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function r(){window.clearInterval(c),window.removeEventListener("message",u)}window.addEventListener("message",u),m();let t=0,c=window.setInterval(()=>{if(this.vm){r();return}if(t>=20){r(),i("Timeout: Unable to establish a connection with the StackBlitz VM"),E.forEach((a,s)=>{a.id===this.id&&E.splice(s,1)});return}t++,m()},500)}),E.push(this)}},Pe=e=>{let o=e instanceof Element?"element":"id";return E.find(n=>n[o]===e)??null};function Oe(e,o){let n=document.createElement("input");return n.type="hidden",n.name=e,n.value=o,n}function Re(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function fe({template:e,title:o,description:n,dependencies:i,files:u,settings:m}){if(!se.includes(e)){let a=se.map(s=>`'${s}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${a}`)}let r=[],t=(a,s,g="")=>{r.push(Oe(a,typeof s=="string"?s:g))};t("project[title]",o),typeof n=="string"&&n.length>0&&t("project[description]",n),t("project[template]",e,"javascript"),i&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):t("project[dependencies]",JSON.stringify(i))),m&&t("project[settings]",JSON.stringify(m)),Object.entries(u).forEach(([a,s])=>{t(`project[files][${Re(a)}]`,s)});let c=document.createElement("form");return c.method="POST",c.setAttribute("style","display:none!important;"),c.append(...r),c}function Be(e,o){let n=fe(e);return n.action=G("/run",o),n.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${n.outerHTML}
  <script>document.getElementById('${n.id}').submit();<\/script>
</body>
</html>`}function Le(e,o){let n=fe(e);n.action=L("/run",o),n.target=q(o),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}function _(e){return e?.contentWindow?(Pe(e)??new B(e)).pending:Promise.reject("Provided element is not an iframe.")}function Ge(e,o){Le(e,o)}function $e(e,o){let n=L(`/edit/${e}`,o),i=q(o);window.open(n,i)}function Fe(e,o){let n=L(`/github/${e}`,o),i=q(o);window.open(n,i)}function qe(e,o,n){let i=F(e),u=Be(o,n),m=document.createElement("iframe");return $(i,m,n),m.contentDocument?.write(u),_(m)}function Ue(e,o,n){let i=F(e),u=document.createElement("iframe");return u.src=G(`/edit/${o}`,n),$(i,u,n),_(u)}function He(e,o,n){let i=F(e),u=document.createElement("iframe");return u.src=G(`/github/${o}`,n),$(i,u,n),_(u)}var ge={connect:_,embedGithubProject:He,embedProject:qe,embedProjectId:Ue,openGithubProject:Fe,openProject:Ge,openProjectId:$e};var je=te(be());var V={$schema:"./node_modules/@angular/cli/lib/config/schema.json",version:1,newProjectRoot:"projects",projects:{demo:{root:"",sourceRoot:"src",projectType:"application",prefix:"app",architect:{build:{builder:"@angular-devkit/build-angular:browser",options:{outputPath:"dist/demo",index:"src/index.html",main:"src/main.ts",polyfills:"src/polyfills.ts",tsConfig:"tsconfig.json",assets:["src/assets"],styles:["src/styles.css"]},configurations:{production:{optimization:!0,outputHashing:"all",sourceMap:!1,extractCss:!0,namedChunks:!1,aot:!0,extractLicenses:!0,vendorChunk:!1,buildOptimizer:!0}}},serve:{builder:"@angular-devkit/build-angular:dev-server",options:{browserTarget:"demo:build"}}}}},defaultProject:"demo"};var W=e=>`import { NgModule, APP_INITIALIZER, VERSION as VERSION_NG } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { provideNzI18n, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

import { AlainThemeModule } from '@delon/theme';
import { DemoDelonABCModule } from './delon-abc.module';
import { DemoDelonChartModule } from './delon-chart.module';
import { DelonFormModule } from '@delon/form';
import { DelonACLModule } from '@delon/acl';
import { DelonCacheModule } from '@delon/cache';
import { StartupService, StartupServiceFactory } from './startup.service';
import { GlobalConfigModule } from './global-config.module';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

import { VERSION as VERSION_ALAIN } from '@delon/theme';
import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd/version';
import { ${e} } from './app.component';

@NgModule({
imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    DemoNgZorroAntdModule,
    AlainThemeModule,
    DemoDelonABCModule,
    DemoDelonChartModule,
    DelonACLModule,
    DelonCacheModule,
    DelonFormModule.forRoot(),
    GlobalConfigModule.forRoot(),
],
providers: [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true
  },
  provideNzI18n(en_US),
  { provide: NZ_ICONS, useValue: icons }
],
declarations: [ ${e} ],
bootstrap:    [ ${e} ]
})
export class AppModule {
  constructor() {
    setTimeout(() => {
      const el = document.querySelector('#VERSION');
      if (el != null) {
        el.innerHTML = \`
        VERSIONS: angular(\${VERSION_NG.full}), ng-zorro-antd(\${VERSION_ZORRO.full}), @delon(\${VERSION_ALAIN.full})
        \`;
      }
    }, 1000);
  }
}
  `;var Z=`import { NgModule } from '@angular/core';

// #region all modules
import { AvatarListModule } from '@delon/abc/avatar-list';
import { CountDownModule } from '@delon/abc/count-down';
import { DatePickerModule } from '@delon/abc/date-picker';
import { DownFileModule } from '@delon/abc/down-file';
import { EllipsisModule } from '@delon/abc/ellipsis';
import { ErrorCollectModule } from '@delon/abc/error-collect';
import { ExceptionModule } from '@delon/abc/exception';
import { FooterToolbarModule } from '@delon/abc/footer-toolbar';
import { FullContentModule } from '@delon/abc/full-content';
import { GlobalFooterModule } from '@delon/abc/global-footer';
import { LoadingModule } from '@delon/abc/loading';
import { HotkeyModule } from '@delon/abc/hotkey';
import { LodopModule } from '@delon/abc/lodop';
import { NoticeIconModule } from '@delon/abc/notice-icon';
import { ObserversModule } from '@delon/abc/observers';
import { PageHeaderModule } from '@delon/abc/page-header';
import { QRModule } from '@delon/abc/qr';
import { QuickMenuModule } from '@delon/abc/quick-menu';
import { ResultModule } from '@delon/abc/result';
import { ReuseTabModule } from '@delon/abc/reuse-tab';
import { SEModule } from '@delon/abc/se';
import { SGModule } from '@delon/abc/sg';
import { STModule } from '@delon/abc/st';
import { SVModule } from '@delon/abc/sv';
import { TagSelectModule } from '@delon/abc/tag-select';
import { MediaModule } from '@delon/abc/media';
import { XlsxModule } from '@delon/abc/xlsx';
import { OnboardingModule } from '@delon/abc/onboarding';
import { LetModule } from '@delon/abc/let';
import { AutoFocusModule } from '@delon/abc/auto-focus';
import { PdfModule } from '@delon/abc/pdf';

const MODULES = [
  ErrorCollectModule,
  FooterToolbarModule,
  DownFileModule,
  AvatarListModule,
  EllipsisModule,
  GlobalFooterModule,
  ExceptionModule,
  NoticeIconModule,
  ObserversModule,
  PageHeaderModule,
  ResultModule,
  TagSelectModule,
  CountDownModule,
  STModule,
  ReuseTabModule,
  FullContentModule,
  XlsxModule,
  LodopModule,
  QuickMenuModule,
  QRModule,
  SVModule,
  SEModule,
  SGModule,
  DatePickerModule,
  LoadingModule,
  HotkeyModule,
  MediaModule,
  OnboardingModule,
  LetModule,
  AutoFocusModule,
  PdfModule,
];

@NgModule({ exports: MODULES })
export class DemoDelonABCModule {}
`;var J=`import { NgModule } from '@angular/core';

// #region all modules

import { G2BarModule } from '@delon/chart/bar';
import { G2CardModule } from '@delon/chart/card';
import { G2CustomModule } from '@delon/chart/custom';
import { G2GaugeModule } from '@delon/chart/gauge';
import { G2MiniAreaModule } from '@delon/chart/mini-area';
import { G2MiniBarModule } from '@delon/chart/mini-bar';
import { G2MiniProgressModule } from '@delon/chart/mini-progress';
import { NumberInfoModule } from '@delon/chart/number-info';
import { G2PieModule } from '@delon/chart/pie';
import { G2RadarModule } from '@delon/chart/radar';
import { G2SingleBarModule } from '@delon/chart/single-bar';
import { G2TagCloudModule } from '@delon/chart/tag-cloud';
import { G2TimelineModule } from '@delon/chart/timeline';
import { TrendModule } from '@delon/chart/trend';
import { G2WaterWaveModule } from '@delon/chart/water-wave';
import { ChartEChartsModule } from '@delon/chart/chart-echarts';

const MODULES = [
  G2BarModule,
  G2CardModule,
  G2CustomModule,
  G2GaugeModule,
  G2MiniAreaModule,
  G2MiniBarModule,
  G2MiniProgressModule,
  G2PieModule,
  G2RadarModule,
  G2TagCloudModule,
  G2TimelineModule,
  G2WaterWaveModule,
  G2SingleBarModule,
  NumberInfoModule,
  TrendModule,
  ChartEChartsModule,
];

// #endregion

@NgModule({ exports: MODULES })
export class DemoDelonChartModule {}
`;var K=`export const environment = {
  production: false
};
`;var Q=`import { ModuleWithProviders, NgModule } from '@angular/core';
import { provideMockConfig } from '@delon/mock';
import { AlainConfig, provideAlainConfig, AlainConfigService } from '@delon/util/config';

// Please refer to: https://ng-alain.com/docs/global-config
// #region NG-ALAIN Config

import * as MOCKDATA from '../../_mock';

const alainConfig: AlainConfig = { };

const alainProvides = [{ provide: ALAIN_CONFIG, useValue: alainConfig }, provideMockConfig({ data: MOCKDATA })];

// #region reuse-tab

import { RouteReuseStrategy } from '@angular/router';
import { ReuseTabService, ReuseTabStrategy } from '@delon/abc/reuse-tab';
alainProvides.push({
  provide: RouteReuseStrategy,
  useClass: ReuseTabStrategy,
  deps: [ReuseTabService],
} as any);

// #endregion

// fix
alainProvides.push(AlainConfigService as any);

// #endregion

// Please refer to: https://ng.ant.design/docs/global-config/en#how-to-use
// #region NG-ZORRO Config

import { NzConfig, provideNzConfig } from 'ng-zorro-antd/core/config';

const ngZorroConfig: NzConfig = {};

const zorroProvides = [provideNzConfig(ngZorroConfig)];

// #endregion

@NgModule({
})
export class GlobalConfigModule {
  static forRoot(): ModuleWithProviders<GlobalConfigModule> {
    return {
      ngModule: GlobalConfigModule,
      providers: [...alainProvides, ...zorroProvides],
    };
  }
}
`;var X=`import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
`;var ye=`import './polyfills';

import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { preloaderFinished } from '@delon/theme';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

preloaderFinished();

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    defaultEncapsulation: ViewEncapsulation.Emulated,
    preserveWhitespaces: false
  })
  .then(res => {
    const win = window as NzSafeAny;
    if (win && win.appBootstrap) {
      win.appBootstrap();
    }
    return res;
  })
  .catch(err => console.error(err));
`;var ze=`import { MockStatusError, MockRequest, r } from '@delon/mock';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
// import * as Mock from 'mockjs';

export const USERS = {
  // \u652F\u6301\u503C\u4E3A Object \u548C Array
  'GET /users': (req: MockRequest) => {
    const total = req.queryString.total || 100;
    const res: NzSafeAny = {
      list: [],
      total
    };
    for (let i = 0; i < +req.queryString.ps; i++) {
      res.list.push({
        id: i + 1,
        type: r(1, 3),
        picture: {
          thumbnail: \`https://randomuser.me/api/portraits/thumb/\${r(0, 1) === 0 ? 'men' : 'women'}/\${r(1, 50)}.jpg\`
        },
        name: {
          last: \`last-\${r(1, 10)}\`,
          first: \`first-\${r(10, 20)}\`
        },
        nat: ['CH', 'US', 'DE'][i % 3],
        gender: ['male', 'female'][i % 2],
        email: \`aaa\${r(1, 10)}@qq.com\`,
        phone: \`phone-\${r(1000, 100000)}\`,
        price: r(10, 10000000),
        total: r(10, 10000000),
        website: \`https://\${r(10, 10000000)}.com/\`,
        disabled: r(1, 100) > 50,
        registered: new Date()
      });
    }
    return res;
  },
  'GET /user/check/': () => false,
  'GET /user/check/:name': (req: MockRequest) => req.params.name === 'cipchk',
  // GET POST \u53EF\u7701\u7565
  // '/users/1': Mock.mock({ id: 1, 'rank|3': '\u2605\u2605\u2605' }),
  // \u53D1\u9001 Status \u9519\u8BEF
  '/500': () => {
    throw new MockStatusError(500);
  },
  '/404': () => {
    throw new MockStatusError(404);
  },
  '/user/:id': (req: MockRequest) => {
    return { id: req.params.id, name: 'detail' };
  },
  '/user/:id/edit': (req: MockRequest) => {
    return { id: req.params.id, name: 'edit' };
  },
  '/user/:id/upload': (req: MockRequest) => {
    return { id: req.params.id, name: 'upload' };
  }
};`;var Y=`
import { NgModule } from '@angular/core';

import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzTransButtonModule } from 'ng-zorro-antd/core/trans-button';
import { NzWaveModule } from 'ng-zorro-antd/core/wave';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzResizableModule } from 'ng-zorro-antd/resizable';

@NgModule({
  exports: [
    NzAffixModule,
    NzAlertModule,
    NzAnchorModule,
    NzAutocompleteModule,
    NzAvatarModule,
    NzBackTopModule,
    NzBadgeModule,
    NzButtonModule,
    NzBreadCrumbModule,
    NzCalendarModule,
    NzCardModule,
    NzCarouselModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzCollapseModule,
    NzCommentModule,
    NzDatePickerModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzDrawerModule,
    NzDropDownModule,
    NzEmptyModule,
    NzFormModule,
    NzGridModule,
    NzI18nModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzLayoutModule,
    NzListModule,
    NzMentionModule,
    NzMenuModule,
    NzMessageModule,
    NzModalModule,
    NzNoAnimationModule,
    NzNotificationModule,
    NzPageHeaderModule,
    NzPaginationModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzProgressModule,
    NzRadioModule,
    NzRateModule,
    NzResultModule,
    NzSelectModule,
    NzSkeletonModule,
    NzSliderModule,
    NzSpinModule,
    NzStatisticModule,
    NzStepsModule,
    NzSwitchModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimePickerModule,
    NzTimelineModule,
    NzToolTipModule,
    NzTransButtonModule,
    NzTransferModule,
    NzTreeModule,
    NzTreeSelectModule,
    NzTypographyModule,
    NzUploadModule,
    NzWaveModule,
    NzResizableModule
  ]
})
export class DemoNgZorroAntdModule {

}
`;var Ne={name:"ng-alain",tags:["NG-ALAIN"],version:"0.0.0",scripts:{ng:"ng",start:"ng serve --disable-host-check",build:"ng build",test:"ng test",lint:"ng lint",e2e:"ng e2e"},private:!0,dependencies:{"@angular/animations":"~13.1.0","@angular/common":"~13.1.0","@angular/compiler":"~13.1.0","@angular/core":"~13.1.0","@angular/forms":"~13.1.0","@angular/platform-browser":"~13.1.0","@angular/platform-browser-dynamic":"~13.1.0","@angular/router":"~13.1.0",rxjs:"~7.4.0",tslib:"^2.3.0","zone.js":"~0.11.4"},devDependencies:{"@angular-devkit/build-angular":"~13.1.2","@angular/cli":"~13.1.2","@angular/compiler-cli":"~13.1.0","@types/jasmine":"~3.10.0","@types/node":"^12.11.1","jasmine-core":"~3.10.0",karma:"~6.3.0","karma-chrome-launcher":"~3.1.0","karma-coverage":"~2.1.0","karma-jasmine":"~4.0.0","karma-jasmine-html-reporter":"~1.7.0",typescript:"~4.5.2"}};var ee=`
import 'zone.js';
`;var ve=`# Angular CLI Template

This template was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Running \`ng\` commands

On the terminal on your bottom right there is a + you can click to open a new tab in it you can write any commands you want with:

\`\`\`
npm ng <your command>
npm ng g ng-alain:module news
npm ng g ng-alain:list list -m=news
\`\`\`

## QA

**502: Bad Gateway**

The solution is to click refresh on the Browser panel when the terminal displays \`\u2714 Compiled successfully.\`
`;var Se={infiniteLoopProtection:!0,hardReloadOnChange:!1,view:"browser",template:"node",container:{node:"16",port:4200}};var we=e=>`import { Injectable } from '@angular/core';
import { LazyService } from '@delon/util/other';

@Injectable()
export class StartupService {
  constructor(private lazy: LazyService) { }
  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.lazy.load([
        'https://cdnjs.cloudflare.com/ajax/libs/ajv/${e.ajvVersion}/ajv.min.js',
      ])
        .then(() => resolve(null));
    });
  }
}

export function StartupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}`;var oe={compileOnSave:!1,compilerOptions:{baseUrl:"./",outDir:"./dist/out-tsc",forceConsistentCasingInFileNames:!0,strict:!0,noImplicitOverride:!0,noPropertyAccessFromIndexSignature:!0,noImplicitReturns:!0,noFallthroughCasesInSwitch:!0,sourceMap:!0,declaration:!1,downlevelIteration:!0,experimentalDecorators:!0,moduleResolution:"node",importHelpers:!0,target:"es2017",module:"es2020",lib:["es2020","dom"],allowSyntheticDefaultImports:!0},angularCompilerOptions:{enableIvy:!0,enableI18nLegacyMessageIdFormat:!1,strictInjectionParameters:!0,strictInputAccessModifiers:!0,strictTemplates:!0}};var j=te(ke());var Go=(()=>{let o=class o{get themePath(){return`node_modules/@delon/theme/${this.appSrv.theme}.css`}genPackage({dependencies:i=[],devDependencies:u=[],includeCli:m=!1}){let r=j.default.dependencies["@angular/core"],t=r.substring(1).split(".").shift(),c=Ne;["ng-zorro-antd","date-fns","@delon/theme","@delon/abc","@delon/chart","@delon/acl","@delon/auth","@delon/cache","@delon/mock","@delon/form","@delon/util","ajv","ajv-formats",...i].forEach(s=>c.dependencies[s]="*"),m&&(u=[...u,"ng-alain","ng-alain-plugin-theme","@angular/cli","@angular/compiler-cli","@angular-devkit/build-angular"]),u.forEach(s=>c.devDependencies[s]="*");let a=S(S({},j.default.dependencies),j.default.devDependencies);return["dependencies","devDependencies"].forEach(s=>{Object.keys(c[s]).forEach(g=>{c[s][g]=g.startsWith("@delon")?`~${j.default.version}`:a[g]||"*"})}),c.dependencies["@angular/core"]=r,["@angular/cdk","@ant-design/icons-angular","ngx-countdown"].forEach(s=>{c.dependencies[s]=t}),console.log(c),c}constructor(i,u){this.appSrv=i,this.document=u}get genStartupService(){return we({ajvVersion:j.default.dependencies.ajv.substring(1)})}get genMock(){return{"_mock/user.ts":ze,"_mock/index.ts":"export * from './user';"}}parseCode(i){let u="",m="",r=/selector:[ ]?(['|"|`])([^'"`]+)/g.exec(i);r&&(u=r[2]);let t=/export class ([^ {]+)/g.exec(i);return t&&(m=t[1]),{selector:u,componentName:m,html:['<base href="/">',`<${u}>loading</${u}>`,'<div id="VERSION" style="position: fixed; bottom: 8px; right: 8px; z-index: 8888;"></div>'].join(`
`)}}openOnStackBlitz(i,u){let m=this.parseCode(u),r=D(V);r.projects.demo.architect.build.options.styles.splice(0,0,this.themePath);let t=this.genPackage({dependencies:[],devDependencies:[],includeCli:!1});t.name=i,ge.openProject({title:"NG-ALAIN",description:"NG-ZORRO  admin panel front-end framework",tags:["ng-alain","@delon","NG-ZORRO","ng-zorro-antd","Ant Design","Angular","ng"],dependencies:S(S({},t.dependencies),t.devDependencies),files:S({"angular.json":`${JSON.stringify(r,null,2)}`,"tsconfig.json":`${JSON.stringify(oe,null,2)}`,"package.json":`${JSON.stringify(t,null,2)}`,"src/environments/environment.ts":K,"src/index.html":m.html,"src/main.ts":X,"src/polyfills.ts":ee,"src/app/app.component.ts":u,"src/app/app.module.ts":W(m.componentName),"src/app/global-config.module.ts":Q,"src/app/ng-zorro-antd.module.ts":Y,"src/app/delon-abc.module.ts":Z,"src/app/delon-chart.module.ts":J,"src/app/startup.service.ts":this.genStartupService,"src/styles.css":""},this.genMock),template:"angular-cli"},{openFile:"src/app/app.component.ts"})}openOnCodeSandbox(i,u,m=!1){let r=this.parseCode(u),t=this.genMock,c=D(V);c.projects.demo.architect.build.options.styles.splice(0,0,this.themePath);let a=this.genPackage({dependencies:[],devDependencies:[],includeCli:m});a.name=i;let s={"package.json":{content:JSON.stringify(a,null,2),isBinary:!1},"angular.json":{content:`${JSON.stringify(c,null,2)}`,isBinary:!1},"tsconfig.json":{content:`${JSON.stringify(oe,null,2)}`,isBinary:!1},"src/environments/environment.ts":{content:K,isBinary:!1},"src/index.html":{content:r.html,isBinary:!1},"src/main.ts":{content:m?ye:X,isBinary:!1},"src/polyfills.ts":{content:ee,isBinary:!1},"src/app/app.module.ts":{content:W(r.componentName),isBinary:!1},"src/app/global-config.module.ts":{content:Q,isBinary:!1},"src/app/app.component.ts":{content:u,isBinary:!1},"src/app/ng-zorro-antd.module.ts":{content:Y,isBinary:!1},"src/app/delon-abc.module.ts":{content:Z,isBinary:!1},"src/app/delon-chart.module.ts":{content:J,isBinary:!1},"src/app/startup.service.ts":{content:this.genStartupService,isBinary:!1},"src/styles.css":{content:"",isBinary:!1},"_mock/user.ts":{content:t["_mock/user.ts"],isBinary:!1},"_mock/index.ts":{content:t["_mock/index.ts"],isBinary:!1}};m&&(s["README.md"]={content:ve,isBinary:!1},s["sandbox.config.json"]={content:`${JSON.stringify(Se,null,2)}`,isBinary:!1});let g=(0,je.getParameters)({files:s}),M=this.document.createElement("form"),z=this.document.createElement("input");M.method="POST",M.action="https://codesandbox.io/api/v1/sandboxes/define",M.target="_blank",z.name="parameters",z.value=g,M.appendChild(z),this.document.body.append(M),M.submit(),this.document.body.removeChild(M)}};o.\u0275fac=function(u){return new(u||o)(C(ae),C(ie))},o.\u0275prov=A({token:o,factory:o.\u0275fac,providedIn:"root"});let e=o;return e})();export{ke as a,ae as b,Go as c};
