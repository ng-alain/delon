import{$c as O,a as v,b as oe,ca as x,cc as ne,d as j,f as te,fa as I,m as re}from"./chunk-JIFQ6OJY.js";var ge=j((Qe,_)=>{"use strict";var F=function(){var e=String.fromCharCode,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",t={};function u(r,n){if(!t[r]){t[r]={};for(var c=0;c<r.length;c++)t[r][r.charAt(c)]=c}return t[r][n]}var m={compressToBase64:function(r){if(r==null)return"";var n=m._compress(r,6,function(c){return o.charAt(c)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(r){return r==null?"":r==""?null:m._decompress(r.length,32,function(n){return u(o,r.charAt(n))})},compressToUTF16:function(r){return r==null?"":m._compress(r,15,function(n){return e(n+32)})+" "},decompressFromUTF16:function(r){return r==null?"":r==""?null:m._decompress(r.length,16384,function(n){return r.charCodeAt(n)-32})},compressToUint8Array:function(r){for(var n=m.compress(r),c=new Uint8Array(n.length*2),a=0,s=n.length;a<s;a++){var g=n.charCodeAt(a);c[a*2]=g>>>8,c[a*2+1]=g%256}return c},decompressFromUint8Array:function(r){if(r==null)return m.decompress(r);for(var n=new Array(r.length/2),c=0,a=n.length;c<a;c++)n[c]=r[c*2]*256+r[c*2+1];var s=[];return n.forEach(function(g){s.push(e(g))}),m.decompress(s.join(""))},compressToEncodedURIComponent:function(r){return r==null?"":m._compress(r,6,function(n){return i.charAt(n)})},decompressFromEncodedURIComponent:function(r){return r==null?"":r==""?null:(r=r.replace(/ /g,"+"),m._decompress(r.length,32,function(n){return u(i,r.charAt(n))}))},compress:function(r){return m._compress(r,16,function(n){return e(n)})},_compress:function(r,n,c){if(r==null)return"";var a,s,g={},M={},y="",w="",b="",z=2,S=3,f=2,h=[],l=0,d=0,N;for(N=0;N<r.length;N+=1)if(y=r.charAt(N),Object.prototype.hasOwnProperty.call(g,y)||(g[y]=S++,M[y]=!0),w=b+y,Object.prototype.hasOwnProperty.call(g,w))b=w;else{if(Object.prototype.hasOwnProperty.call(M,b)){if(b.charCodeAt(0)<256){for(a=0;a<f;a++)l=l<<1,d==n-1?(d=0,h.push(c(l)),l=0):d++;for(s=b.charCodeAt(0),a=0;a<8;a++)l=l<<1|s&1,d==n-1?(d=0,h.push(c(l)),l=0):d++,s=s>>1}else{for(s=1,a=0;a<f;a++)l=l<<1|s,d==n-1?(d=0,h.push(c(l)),l=0):d++,s=0;for(s=b.charCodeAt(0),a=0;a<16;a++)l=l<<1|s&1,d==n-1?(d=0,h.push(c(l)),l=0):d++,s=s>>1}z--,z==0&&(z=Math.pow(2,f),f++),delete M[b]}else for(s=g[b],a=0;a<f;a++)l=l<<1|s&1,d==n-1?(d=0,h.push(c(l)),l=0):d++,s=s>>1;z--,z==0&&(z=Math.pow(2,f),f++),g[w]=S++,b=String(y)}if(b!==""){if(Object.prototype.hasOwnProperty.call(M,b)){if(b.charCodeAt(0)<256){for(a=0;a<f;a++)l=l<<1,d==n-1?(d=0,h.push(c(l)),l=0):d++;for(s=b.charCodeAt(0),a=0;a<8;a++)l=l<<1|s&1,d==n-1?(d=0,h.push(c(l)),l=0):d++,s=s>>1}else{for(s=1,a=0;a<f;a++)l=l<<1|s,d==n-1?(d=0,h.push(c(l)),l=0):d++,s=0;for(s=b.charCodeAt(0),a=0;a<16;a++)l=l<<1|s&1,d==n-1?(d=0,h.push(c(l)),l=0):d++,s=s>>1}z--,z==0&&(z=Math.pow(2,f),f++),delete M[b]}else for(s=g[b],a=0;a<f;a++)l=l<<1|s&1,d==n-1?(d=0,h.push(c(l)),l=0):d++,s=s>>1;z--,z==0&&(z=Math.pow(2,f),f++)}for(s=2,a=0;a<f;a++)l=l<<1|s&1,d==n-1?(d=0,h.push(c(l)),l=0):d++,s=s>>1;for(;;)if(l=l<<1,d==n-1){h.push(c(l));break}else d++;return h.join("")},decompress:function(r){return r==null?"":r==""?null:m._decompress(r.length,32768,function(n){return r.charCodeAt(n)})},_decompress:function(r,n,c){var a=[],s,g=4,M=4,y=3,w="",b=[],z,S,f,h,l,d,N,p={val:c(0),position:n,index:1};for(z=0;z<3;z+=1)a[z]=z;for(f=0,l=Math.pow(2,2),d=1;d!=l;)h=p.val&p.position,p.position>>=1,p.position==0&&(p.position=n,p.val=c(p.index++)),f|=(h>0?1:0)*d,d<<=1;switch(s=f){case 0:for(f=0,l=Math.pow(2,8),d=1;d!=l;)h=p.val&p.position,p.position>>=1,p.position==0&&(p.position=n,p.val=c(p.index++)),f|=(h>0?1:0)*d,d<<=1;N=e(f);break;case 1:for(f=0,l=Math.pow(2,16),d=1;d!=l;)h=p.val&p.position,p.position>>=1,p.position==0&&(p.position=n,p.val=c(p.index++)),f|=(h>0?1:0)*d,d<<=1;N=e(f);break;case 2:return""}for(a[3]=N,S=N,b.push(N);;){if(p.index>r)return"";for(f=0,l=Math.pow(2,y),d=1;d!=l;)h=p.val&p.position,p.position>>=1,p.position==0&&(p.position=n,p.val=c(p.index++)),f|=(h>0?1:0)*d,d<<=1;switch(N=f){case 0:for(f=0,l=Math.pow(2,8),d=1;d!=l;)h=p.val&p.position,p.position>>=1,p.position==0&&(p.position=n,p.val=c(p.index++)),f|=(h>0?1:0)*d,d<<=1;a[M++]=e(f),N=M-1,g--;break;case 1:for(f=0,l=Math.pow(2,16),d=1;d!=l;)h=p.val&p.position,p.position>>=1,p.position==0&&(p.position=n,p.val=c(p.index++)),f|=(h>0?1:0)*d,d<<=1;a[M++]=e(f),N=M-1,g--;break;case 2:return b.join("")}if(g==0&&(g=Math.pow(2,y),y++),a[N])w=a[N];else if(N===M)w=S+S.charAt(0);else return null;b.push(w),a[M++]=S+w.charAt(0),g--,S=w,g==0&&(g=Math.pow(2,y),y++)}}};return m}();typeof define=="function"&&define.amd?define(function(){return F}):typeof _<"u"&&_!=null?_.exports=F:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return F})});var he=j(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});var qe=ge();function Fe(e){return qe.compressToBase64(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Ue(e){return Fe(JSON.stringify(e))}U.getParameters=Ue});var Me=j(C=>{"use strict";C.__esModule=!0;C.getParameters=void 0;var He=he();C.getParameters=He.getParameters});var we=j((fo,Je)=>{Je.exports={name:"delon",version:"17.0.2",description:"Delon is a set of essential modules for NG-ALAIN.",keywords:["delon","ng-alain","alain","antd","ng-zorro-antd","angular"],author:"cipchk <cipchk@qq.com>",license:"MIT",bugs:{url:"https://github.com/ng-alain/ng-alain/issues"},repository:{type:"git",url:"git+https://github.com/ng-alain/delon.git"},homepage:"https://ng-alain.com",engines:{node:"^18.13.0"},scripts:{"ng-high-memory":"node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng",prepare:"husky install",start:"npm run site:gen && ng s -o --hmr",lint:"bash scripts/ci/lint.sh -ts -less","lint:ts":"eslint --cache . --ext .ts,.html","lint:fix":"eslint --cache . --ext .ts,.html --fix","lint:style":"npx stylelint 'packages/**/*.less'",test:"ng test --no-progress --browsers=ChromeHeadlessCI --code-coverage --no-watch","test:cli":"bash scripts/ci/build-schematics.sh -t -clone","test:integration":"bash scripts/ci/build-schematics.sh -b -t -clone -integration",build:"bash scripts/ci/build.sh",build_artifacts:"bash scripts/ci/build-artifacts.sh",analyze:"npm run ng-high-memory build -- --source-map","analyze:view":"source-map-explorer src/dist/browser/*.js","site:gen":"node scripts/site/main init && ng-alain-plugin-theme -t=themeCss && ng-alain-plugin-theme -t=colorLess","site:build":"npm run site:gen && ng b site && npm run site:ngsw && npm run site:minify && npm run site:sitemap && npm run site:helper","site:helper":"bash scripts/ci/helper.sh","site:minify":"node scripts/build/minify.js","site:sitemap":"node scripts/build/sitemap.js","site:ngsw":"node scripts/build/ngsw.js",changelog:"conventional-changelog -p angular -i CHANGELOG.md -s --pkg package.json","pre-publish":"node scripts/publish/publish.js && node scripts/publish/publish-scaffold.js","publish:next":"bash scripts/publish/publish.sh -next",publish:"bash scripts/publish/publish.sh","sync-scaffold-version":"node scripts/publish/sync-scaffold-version.js"},dependencies:{"@angular/animations":"^17.0.0","@angular/cdk":"^17.0.0","@angular/common":"^17.0.0","@angular/compiler":"^17.0.0","@angular/core":"^17.0.0","@angular/elements":"^17.0.0","@angular/forms":"^17.0.0","@angular/platform-browser":"^17.0.0","@angular/platform-browser-dynamic":"^17.0.0","@angular/platform-server":"^17.0.0","@angular/router":"^17.0.0","@angular/service-worker":"^17.0.0","@angular/ssr":"^17.0.0","@antv/data-set":"^0.11.8","@antv/g2":"^4.2.10","@github/hotkey":"^2.3.0","@ng-util/monaco-editor":"^17.0.0","@stackblitz/sdk":"^1.9.0","@webcomponents/custom-elements":"^1.6.0",ajv:"^8.12.0","ajv-formats":"^2.1.1",aos:"^3.0.0-beta.6",codesandbox:"^2.2.3",echarts:"^5.4.3",express:"^4.18.2",extend:"^3.0.2","file-saver":"^2.0.5",isutf8:"^4.0.0","ng-antd-color-picker":"^0.0.2","ng-github-button":"^17.0.0","ng-zorro-antd":"^17.0.1","ngx-countdown":"^17.0.0","ngx-highlight-js":"^17.0.0","ngx-tinymce":"^17.0.0",qrious:"^4.0.2",rxjs:"~7.8.0",tslib:"^2.3.0","zone.js":"~0.14.2"},devDependencies:{"@angular-devkit/build-angular":"^17.0.0","@angular-eslint/builder":"^17.0.0","@angular-eslint/eslint-plugin":"^17.0.0","@angular-eslint/eslint-plugin-template":"^17.0.0","@angular-eslint/schematics":"^17.0.0","@angular-eslint/template-parser":"^17.0.0","@angular/cli":"^17.0.0","@angular/compiler-cli":"^17.0.0","@angular/language-service":"^17.0.0","@commitlint/cli":"^17.8.1","@commitlint/config-angular":"^17.8.1","@types/aos":"^3.0.7","@types/deep-extend":"^0.6.2","@types/express":"^4.17.17","@types/extend":"^3.0.4","@types/file-saver":"^2.0.7","@types/fs-extra":"^11.0.4","@types/jasmine":"~5.1.0","@types/jasminewd2":"~2.0.13","@types/mockjs":"^1.0.10","@types/node":"^18.18.0","@types/parse5":"^7.0.0","@typescript-eslint/eslint-plugin":"^6.10.0","@typescript-eslint/parser":"^6.10.0",chalk:"^5.3.0",codecov:"^3.8.3","conventional-changelog-cli":"^4.1.0",eslint:"^8.53.0","eslint-config-prettier":"~9.0.0","eslint-plugin-deprecation":"~2.0.0","eslint-plugin-import":"~2.29.0","eslint-plugin-jsdoc":"~46.5.1","eslint-plugin-prefer-arrow":"~1.2.3","eslint-plugin-prettier":"~5.0.1","fs-extra":"^11.1.1","html-minifier-terser":"^7.2.0",husky:"^8.0.3",jasmine:"^5.1.0","jasmine-core":"~5.1.0","jasmine-spec-reporter":"^7.0.0","jsonml.js":"^0.1.0",jszip:"^3.10.1",karma:"~6.4.0","karma-chrome-launcher":"~3.2.0","karma-coverage":"~2.2.0","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.1.0","karma-junit-reporter":"^2.0.1","karma-parallel":"^0.3.1","karma-spec-reporter":"0.0.36","karma-summary-reporter":"^3.1.1","karma-viewport":"^1.0.9","klaw-sync":"^6.0.0","less-bundle-promise":"^1.0.11","less-plugin-clean-css":"^1.5.1","less-plugin-npm-import":"^2.1.0","less-vars-to-js":"^1.3.0","lint-staged":"^14.0.1","mark-twain":"^2.0.3",mockjs:"^1.1.0",mustache:"^4.2.0","ng-alain-plugin-theme":"^16.0.0","ng-alain-sts":"^0.0.2","ng-packagr":"^17.0.0",parse5:"^7.1.2",plyr:"^3.7.8",prettier:"^3.1.0","readline-sync":"^1.4.10",screenfull:"^6.0.2",sitemap:"^7.1.1","source-map-explorer":"^2.5.3",stream:"0.0.2",stylelint:"^15.11.0","stylelint-config-clean-order":"^5.2.0","stylelint-config-standard":"^34.0.0","stylelint-declaration-block-no-ignored-properties":"^2.7.0","swagger-typescript-api":"^12.0.4",terser:"^5.19.2","ts-node":"~10.9.1","tsconfig-paths":"^4.2.0",typescript:"~5.2.2",xlsx:"^0.18.5"},"lint-staged":{"(schematics|scripts|packages)/**/!(tslint-rules|testing)/!(polyfills).{html,ts}":["eslint --fix"],"packages/**/*.less":["npm run lint:style"]}}});var ie=(()=>{let o=class o{constructor(){this.theme="default",this.theme$=new re(1)}setTheme(t){this.theme=t,this.theme$.next(t)}};o.\u0275fac=function(u){return new(u||o)},o.\u0275prov=x({token:o,factory:o.\u0275fac,providedIn:"root"});let e=o;return e})();var Te="https://stackblitz.com",ae=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],je=["project","search","ports","settings"],xe=["light","dark"],Ae=["editor","preview"],se={clickToLoad:e=>k("ctl",e),devToolsHeight:e=>le("devtoolsheight",e),forceEmbedLayout:e=>k("embed",e),hideDevTools:e=>k("hidedevtools",e),hideExplorer:e=>k("hideExplorer",e),hideNavigation:e=>k("hideNavigation",e),openFile:e=>de("file",e),showSidebar:e=>Ee("showSidebar",e),sidebarView:e=>P("sidebarView",e,je),startScript:e=>de("startScript",e),terminalHeight:e=>le("terminalHeight",e),theme:e=>P("theme",e,xe),view:e=>P("view",e,Ae),zenMode:e=>k("zenMode",e)};function ce(e={}){let o=Object.entries(e).map(([i,t])=>t!=null&&se.hasOwnProperty(i)?se[i](t):"").filter(Boolean);return o.length?`?${o.join("&")}`:""}function k(e,o){return o===!0?`${e}=1`:""}function Ee(e,o){return typeof o=="boolean"?`${e}=${o?"1":"0"}`:""}function le(e,o){if(typeof o=="number"&&!Number.isNaN(o)){let i=Math.min(100,Math.max(0,o));return`${e}=${encodeURIComponent(Math.round(i))}`}return""}function P(e,o="",i=[]){return i.includes(o)?`${e}=${encodeURIComponent(o)}`:""}function de(e,o){return(Array.isArray(o)?o:[o]).filter(t=>typeof t=="string"&&t.trim()!=="").map(t=>`${e}=${encodeURIComponent(t)}`).join("&")}function ue(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function $(e,o){return`${pe(o)}${e}${ce(o)}`}function G(e,o){let i={forceEmbedLayout:!0};return o&&typeof o=="object"&&Object.assign(i,o),`${pe(i)}${e}${ce(i)}`}function pe(e={}){return(typeof e.origin=="string"?e.origin:Te).replace(/\/$/,"")}function B(e,o,i){if(!o||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(o.id=e.id),e.className&&(o.className=e.className),_e(o,i),e.replaceWith(o)}function W(e){if(typeof e=="string"){let o=document.getElementById(e);if(!o)throw new Error(`Could not find element with id '${e}'`);return o}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function q(e){return e&&e.newWindow===!1?"_self":"_blank"}function _e(e,o={}){let i=Object.hasOwnProperty.call(o,"height")?`${o.height}`:"300",t=Object.hasOwnProperty.call(o,"width")?`${o.width}`:void 0;e.setAttribute("height",i),t?e.setAttribute("width",t):e.setAttribute("style","width:100%;")}var D=class{constructor(o){this.pending={},this.port=o,this.port.onmessage=this.messageListener.bind(this)}request({type:o,payload:i}){return new Promise((t,u)=>{let m=ue();this.pending[m]={resolve:t,reject:u},this.port.postMessage({type:o,payload:oe(v({},i),{__reqid:m})})})}messageListener(o){if(typeof o.data.payload?.__reqid!="string")return;let{type:i,payload:t}=o.data,{__reqid:u,__success:m,__error:r}=t;this.pending[u]&&(m?this.pending[u].resolve(this.cleanResult(t)):this.pending[u].reject(r?`${i}: ${r}`:i),delete this.pending[u])}cleanResult(o){let i=v({},o);return delete i.__reqid,delete i.__success,delete i.__error,Object.keys(i).length?i:null}},R=class{constructor(o,i){this.editor={openFile:t=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:t}}),setCurrentFile:t=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:t}}),setTheme:t=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:t}}),setView:t=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:t}}),showSidebar:(t=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:t}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(t=>t?.url??null),setUrl:(t="/")=>{if(typeof t!="string"||!t.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${t}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:t}})}},this._rdc=new D(o),Object.defineProperty(this.preview,"origin",{value:typeof i.previewOrigin=="string"?i.previewOrigin:null,writable:!1})}applyFsDiff(o){let i=t=>t!==null&&typeof t=="object";if(!i(o)||!i(o.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(o.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:o})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}},A=[],L=class{constructor(o){this.id=ue(),this.element=o,this.pending=new Promise((i,t)=>{let u=({data:a,ports:s})=>{a?.action==="SDK_INIT_SUCCESS"&&a.id===this.id&&(this.vm=new R(s[0],a.payload),i(this.vm),r())},m=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function r(){window.clearInterval(c),window.removeEventListener("message",u)}window.addEventListener("message",u),m();let n=0,c=window.setInterval(()=>{if(this.vm){r();return}if(n>=20){r(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),A.forEach((a,s)=>{a.id===this.id&&A.splice(s,1)});return}n++,m()},500)}),A.push(this)}},Ce=e=>{let o=e instanceof Element?"element":"id";return A.find(i=>i[o]===e)??null};function Ie(e,o){let i=document.createElement("input");return i.type="hidden",i.name=e,i.value=o,i}function Oe(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function me({template:e,title:o,description:i,dependencies:t,files:u,settings:m}){if(!ae.includes(e)){let a=ae.map(s=>`'${s}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${a}`)}let r=[],n=(a,s,g="")=>{r.push(Ie(a,typeof s=="string"?s:g))};n("project[title]",o),typeof i=="string"&&i.length>0&&n("project[description]",i),n("project[template]",e,"javascript"),t&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):n("project[dependencies]",JSON.stringify(t))),m&&n("project[settings]",JSON.stringify(m)),Object.entries(u).forEach(([a,s])=>{n(`project[files][${Oe(a)}]`,s)});let c=document.createElement("form");return c.method="POST",c.setAttribute("style","display:none!important;"),c.append(...r),c}function Pe(e,o){let i=me(e);return i.action=G("/run",o),i.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${i.outerHTML}
  <script>document.getElementById('${i.id}').submit();<\/script>
</body>
</html>`}function De(e,o){let i=me(e);i.action=$("/run",o),i.target=q(o),document.body.appendChild(i),i.submit(),document.body.removeChild(i)}function E(e){return e?.contentWindow?(Ce(e)??new L(e)).pending:Promise.reject("Provided element is not an iframe.")}function Re(e,o){De(e,o)}function Le(e,o){let i=$(`/edit/${e}`,o),t=q(o);window.open(i,t)}function $e(e,o){let i=$(`/github/${e}`,o),t=q(o);window.open(i,t)}function Ge(e,o,i){let t=W(e),u=Pe(o,i),m=document.createElement("iframe");return B(t,m,i),m.contentDocument?.write(u),E(m)}function Be(e,o,i){let t=W(e),u=document.createElement("iframe");return u.src=G(`/edit/${o}`,i),B(t,u,i),E(u)}function We(e,o,i){let t=W(e),u=document.createElement("iframe");return u.src=G(`/github/${o}`,i),B(t,u,i),E(u)}var fe={connect:E,embedGithubProject:We,embedProject:Ge,embedProjectId:Be,openGithubProject:$e,openProject:Re,openProjectId:Le};var ve=te(Me());var H={$schema:"./node_modules/@angular/cli/lib/config/schema.json",cli:{analytics:"1e1de97b-a744-405a-8b5a-0397bb3d01ce"},newProjectRoot:"projects",projects:{demo:{root:"",sourceRoot:"src",projectType:"application",prefix:"app",architect:{build:{builder:"@angular-devkit/build-angular:application",configurations:{development:{extractLicenses:!1,namedChunks:!0,optimization:!1,sourceMap:!0},production:{aot:!0,extractLicenses:!0,namedChunks:!1,optimization:!0,outputHashing:"all",sourceMap:!1}},options:{assets:[],index:"src/index.html",browser:"src/main.ts",outputPath:"dist/demo",scripts:[],styles:["node_modules/@delon/theme/default.css","src/styles.css"],tsConfig:"tsconfig.json"}},serve:{builder:"@angular-devkit/build-angular:dev-server",configurations:{development:{buildTarget:"demo:build:development"},production:{buildTarget:"demo:build:production"}},defaultConfiguration:"development"}}}},version:1};var J=`import { ApplicationConfig } from '@angular/core';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStartup } from './startup.service';
import {
  zh_CN as delonLang,
  AlainProvideLang,
  provideAlain,
} from '@delon/theme';
import { AlainConfig } from '@delon/util/config';
import { zh_CN as zorroLang } from 'ng-zorro-antd/i18n';
import { zhCN as dateLang } from 'date-fns/locale';
import ngLang from '@angular/common/locales/zh';
import { NzConfig, provideNzConfig } from 'ng-zorro-antd/core/config';
import { provideMockConfig } from '@delon/mock';
import * as MOCKDATA from '../../_mock';
import { withAutoCompleteWidget } from '@delon/form/widgets/autocomplete';
import { withCascaderWidget } from '@delon/form/widgets/cascader';
// import { withColorWidget } from '@delon/form/widgets/color';
import { withMentionWidget } from '@delon/form/widgets/mention';
import { withQrCodeWidget } from '@delon/form/widgets/qr-code';
import { withRateWidget } from '@delon/form/widgets/rate';
import { withSegmentedWidget } from '@delon/form/widgets/segmented';
import { withSliderWidget } from '@delon/form/widgets/slider';
import { withTagWidget } from '@delon/form/widgets/tag';
import { withTimeWidget } from '@delon/form/widgets/time';
import { withTransferWidget } from '@delon/form/widgets/transfer';
import { withTreeSelectWidget } from '@delon/form/widgets/tree-select';
import { withUploadWidget } from '@delon/form/widgets/upload';
import { provideCellWidgets } from '@delon/abc/cell';
import { provideSTWidgets } from '@delon/abc/st';
import { provideSFConfig } from '@delon/form';
import { provideReuseTabConfig } from '@delon/abc/reuse-tab';

const defaultLang: AlainProvideLang = {
  abbr: 'zh-CN',
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  delon: delonLang,
};
const alainConfig: AlainConfig = {
  st: { ps: 3 },
};
const ngZorroConfig: NzConfig = {};

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch(), withInterceptors([])),
    provideAnimations(),
    provideAlain({ config: alainConfig, defaultLang }),
    provideNzConfig(ngZorroConfig),
    provideMockConfig({ data: MOCKDATA }),
    provideCellWidgets(),
    provideSTWidgets(),
    provideSFConfig({
      widgets: [
        withAutoCompleteWidget(),
        withCascaderWidget(),
        // withColorWidget(),
        withMentionWidget(),
        withQrCodeWidget(),
        withRateWidget(),
        withSegmentedWidget(),
        withSliderWidget(),
        withTagWidget(),
        withTimeWidget(),
        withTransferWidget(),
        withTreeSelectWidget(),
        withUploadWidget(),
        // third
        // withMonacoEditorWidget(),
        // withTinymceWidget(),
      ],
    }),
    provideReuseTabConfig(),
    provideStartup(),
  ],
};
`;var V=`import { NgModule } from '@angular/core';

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
`;var Z=`import { NgModule } from '@angular/core';

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
`;var Q=e=>`import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { ${e} } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(${e}, appConfig).catch((err) =>
  console.error(err)
);
`;var be=`import { MockStatusError, MockRequest, r } from '@delon/mock';
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
};`;var X=`
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
`;var ze={name:"ng-alain",tags:["NG-ALAIN"],version:"0.0.0",scripts:{ng:"ng",start:"ng serve --disable-host-check",build:"ng build",test:"ng test",lint:"ng lint",e2e:"ng e2e"},private:!0,dependencies:{"@angular/animations":"~13.1.0","@angular/common":"~13.1.0","@angular/compiler":"~13.1.0","@angular/core":"~13.1.0","@angular/forms":"~13.1.0","@angular/platform-browser":"~13.1.0","@angular/platform-browser-dynamic":"~13.1.0","@angular/router":"~13.1.0",rxjs:"~7.4.0",tslib:"^2.3.0","zone.js":"~0.11.4"},devDependencies:{"@angular-devkit/build-angular":"~13.1.2","@angular/cli":"~13.1.2","@angular/compiler-cli":"~13.1.0","@types/jasmine":"~3.10.0","@types/node":"^12.11.1","jasmine-core":"~3.10.0",karma:"~6.3.0","karma-chrome-launcher":"~3.1.0","karma-coverage":"~2.1.0","karma-jasmine":"~4.0.0","karma-jasmine-html-reporter":"~1.7.0",typescript:"~4.5.2"}};var ye=`# Angular CLI Template

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
`;var Y={".codesandbox/tasks.json":`{
    // These tasks will run in order when initializing your CodeSandbox project.
    "setupTasks": [
      {
        "name": "Install Dependencies",
        "command": "npm install"
      }
    ],

    // These tasks can be run from CodeSandbox. Running one will open a log in the app.
    "tasks": {
      "start": {
        "name": "start",
        "command": "npm run start",
        "runAtStart": true,
        "preview": {
          "port": 4200
        }
      },
      "build": {
        "name": "build",
        "command": "ng build",
        "runAtStart": false
      },
      "test": {
        "name": "test",
        "command": "ng test",
        "runAtStart": false
      },
      "help": {
        "name": "help",
        "command": "ng help",
        "runAtStart": false
      }
    }
  }
  `,".codesandbox/template.json":`{
    "title": "Angular",
    "description": "The quickest way to get started with Angular!",
    "iconUrl": "https://github.com/codesandbox/sandbox-templates/blob/main/angular/.codesandbox/icon.png?raw=true",
    "tags": [
      "angular",
      "javascript",
      "typescript"
    ],
    "published": true
  }`,".devcontainer/devcontainer.json":`{
    "name": "Devcontainer",
    "image": "ghcr.io/codesandbox/devcontainers/typescript-node:latest"
  }
  `,".vscode/extensions.json":`{
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=827846
    "recommendations": ["cipchk.ng-alain-extension-pack"]
  }
  `,".vscode/launch.json":`{
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
      {
        "name": "ng serve",
        "type": "chrome",
        "request": "launch",
        "preLaunchTask": "npm: start",
        "url": "http://localhost:4200/"
      },
      {
        "name": "ng test",
        "type": "chrome",
        "request": "launch",
        "preLaunchTask": "npm: test",
        "url": "http://localhost:9876/debug.html"
      }
    ]
  }
  `,".vscode/tasks.json":`{
    // For more information, visit: https://go.microsoft.com/fwlink/?LinkId=733558
    "version": "2.0.0",
    "tasks": [
      {
        "type": "npm",
        "script": "start",
        "isBackground": true,
        "problemMatcher": {
          "owner": "typescript",
          "pattern": "$tsc",
          "background": {
            "activeOnStart": true,
            "beginsPattern": {
              "regexp": "(.*?)"
            },
            "endsPattern": {
              "regexp": "bundle generation complete"
            }
          }
        }
      },
      {
        "type": "npm",
        "script": "test",
        "isBackground": true,
        "problemMatcher": {
          "owner": "typescript",
          "pattern": "$tsc",
          "background": {
            "activeOnStart": true,
            "beginsPattern": {
              "regexp": "(.*?)"
            },
            "endsPattern": {
              "regexp": "bundle generation complete"
            }
          }
        }
      }
    ]
  }
  `};var Ne=e=>`import { APP_INITIALIZER, Injectable, inject, Provider } from '@angular/core';
import { LazyService } from '@delon/util/other';
import { VERSION as VERSION_NG } from '@angular/core';
import { VERSION as VERSION_ALAIN } from '@delon/theme';
import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd/version';

export function provideStartup(): Provider[] {
  return [
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: (startupService: StartupService) => () => startupService.load(),
      deps: [StartupService],
      multi: true
    }
  ];
}

@Injectable()
export class StartupService {
  private lazy = inject(LazyService);

  load(): Promise<any> {
    const el = document.querySelector('#VERSION');
    if (el != null) {
      el.innerHTML = \`
      VERSIONS: angular(\${VERSION_NG.full}), ng-zorro-antd(\${VERSION_ZORRO.full}), @delon(\${VERSION_ALAIN.full})
      \`;
    }

    return new Promise((resolve, reject) => {
      this.lazy.load([
        'https://cdnjs.cloudflare.com/ajax/libs/ajv/${e.ajvVersion}/ajv.min.js',
      ])
        .then(() => resolve(null));
    });
  }
}
`;var ee={compileOnSave:!1,compilerOptions:{outDir:"./dist/app",forceConsistentCasingInFileNames:!0,strict:!0,noImplicitOverride:!0,noPropertyAccessFromIndexSignature:!0,noImplicitReturns:!0,noFallthroughCasesInSwitch:!0,esModuleInterop:!0,sourceMap:!0,declaration:!1,downlevelIteration:!0,experimentalDecorators:!0,moduleResolution:"node",importHelpers:!0,target:"ES2015",module:"ES2022",useDefineForClassFields:!1,lib:["ES2022","dom"],types:[]},files:["src/main.ts"],include:["src/**/*.d.ts"],angularCompilerOptions:{enableI18nLegacyMessageIdFormat:!1,strictInjectionParameters:!0,strictInputAccessModifiers:!0,strictTemplates:!0}};var T=te(we());var _o=(()=>{let o=class o{get themePath(){return`node_modules/@delon/theme/${this.appSrv.theme}.css`}genPackage({dependencies:t=[],devDependencies:u=[],includeCli:m=!1}){let r=T.default.dependencies["@angular/core"],n=r.substring(1).split(".").shift(),c=ze;["ng-zorro-antd","ng-antd-color-picker","date-fns","@delon/theme","@delon/abc","@delon/chart","@delon/acl","@delon/auth","@delon/cache","@delon/mock","@delon/form","@delon/util","ajv","ajv-formats",...t].forEach(s=>c.dependencies[s]="*"),m&&(u=[...u,"ng-alain","ng-alain-plugin-theme","@angular/cli","@angular/compiler-cli","@angular-devkit/build-angular"]),u.forEach(s=>c.devDependencies[s]="*");let a=v(v({},T.default.dependencies),T.default.devDependencies);return["dependencies","devDependencies"].forEach(s=>{Object.keys(c[s]).forEach(g=>{c[s][g]=g.startsWith("@delon")?`~${T.default.version}`:a[g]||"*"})}),c.dependencies["@angular/core"]=r,["@angular/cdk","@ant-design/icons-angular","ngx-countdown"].forEach(s=>{c.dependencies[s]=n}),console.log(c),c}constructor(t,u){this.appSrv=t,this.document=u}get genStartupService(){return Ne({ajvVersion:T.default.dependencies.ajv.substring(1)})}get genMock(){return{"_mock/user.ts":be,"_mock/index.ts":"export * from './user';"}}parseCode(t){let u="",m="",r=/selector:[ ]?(['|"|`])([^'"`]+)/g.exec(t);r&&(u=r[2]);let n=/export class ([^ {]+)/g.exec(t);return n&&(m=n[1]),{selector:u,componentName:m,html:['<base href="/">',`<${u}>loading</${u}>`,'<div id="VERSION" style="position: fixed; bottom: 8px; right: 8px; z-index: 8888;"></div>'].join(`
`)}}attachStandalone(t){return t.includes("standalone: true")?t:`import { DemoDelonABCModule } from './delon-abc.module';
import { DemoDelonChartModule } from './delon-chart.module';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
${t.replace("@Component({",`@Component({
  standalone: true,
  // Just automatically generated code, please import as needed
  imports: [DemoNgZorroAntdModule, DemoDelonABCModule, DemoDelonChartModule],`)}`}openOnStackBlitz(t,u){u=this.attachStandalone(u);let m=this.parseCode(u),r=O(H);r.projects.demo.architect.build.options.styles.splice(0,0,this.themePath);let n=this.genPackage({dependencies:[],devDependencies:[],includeCli:!1});n.name="NG-ALAIN",n.description=t,fe.openProject({title:"NG-ALAIN",description:"NG-ZORRO  admin panel front-end framework",tags:["ng-alain","@delon","NG-ZORRO","ng-zorro-antd","Ant Design","Angular","ng"],dependencies:v(v({},n.dependencies),n.devDependencies),files:v({"angular.json":`${JSON.stringify(r,null,2)}`,"tsconfig.json":`${JSON.stringify(ee,null,2)}`,"package.json":`${JSON.stringify(n,null,2)}`,"src/environments/environment.ts":K,"src/index.html":m.html,"src/main.ts":Q(m.componentName),"src/app/app.component.ts":u,"src/app/app.config.ts":J,"src/app/ng-zorro-antd.module.ts":X,"src/app/delon-abc.module.ts":V,"src/app/delon-chart.module.ts":Z,"src/app/startup.service.ts":this.genStartupService,"src/styles.css":""},this.genMock),template:"angular-cli"},{openFile:"src/app/app.component.ts"})}openOnCodeSandbox(t,u,m=!1){u=this.attachStandalone(u);let r=this.parseCode(u),n=this.genMock,c=O(H);c.projects.demo.architect.build.options.styles.splice(0,0,this.themePath);let a=this.genPackage({dependencies:[],devDependencies:[],includeCli:m});a.name="NG-ALAIN",a.description=t;let s={"package.json":{content:JSON.stringify(a,null,2),isBinary:!1},"angular.json":{content:`${JSON.stringify(c,null,2)}`,isBinary:!1},"tsconfig.json":{content:`${JSON.stringify(ee,null,2)}`,isBinary:!1},"src/environments/environment.ts":{content:K,isBinary:!1},"src/index.html":{content:r.html,isBinary:!1},"src/main.ts":{content:Q(r.componentName),isBinary:!1},"src/app/app.config.ts":{content:J,isBinary:!1},"src/app/app.component.ts":{content:u,isBinary:!1},"src/app/ng-zorro-antd.module.ts":{content:X,isBinary:!1},"src/app/delon-abc.module.ts":{content:V,isBinary:!1},"src/app/delon-chart.module.ts":{content:Z,isBinary:!1},"src/app/startup.service.ts":{content:this.genStartupService,isBinary:!1},"src/styles.css":{content:"",isBinary:!1},"_mock/user.ts":{content:n["_mock/user.ts"],isBinary:!1},"_mock/index.ts":{content:n["_mock/index.ts"],isBinary:!1}};m&&(s["README.md"]={content:ye,isBinary:!1}),Object.keys(Y).forEach(w=>{s[w]={content:Y[w],isBinary:!1}});let g=(0,ve.getParameters)({files:s}),M=this.document.createElement("form"),y=this.document.createElement("input");M.method="POST",M.action="https://codesandbox.io/api/v1/sandboxes/define",M.target="_blank",y.name="parameters",y.value=g,M.appendChild(y),this.document.body.append(M),M.submit(),this.document.body.removeChild(M)}};o.\u0275fac=function(u){return new(u||o)(I(ie),I(ne))},o.\u0275prov=x({token:o,factory:o.\u0275fac,providedIn:"root"});let e=o;return e})();export{we as a,ie as b,_o as c};
