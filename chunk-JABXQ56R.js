import{Ic as ie,a as j,b as X,ba as I,d as A,f as ee,fa as O,g as T,hd as R,jc as re,m as te,v as ne}from"./chunk-PQ76J5IX.js";var fe=A((Ye,L)=>{"use strict";var H=function(){var e=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",r={};function u(i,o){if(!r[i]){r[i]={};for(var p=0;p<i.length;p++)r[i][i.charAt(p)]=p}return r[i][o]}var m={compressToBase64:function(i){if(i==null)return"";var o=m._compress(i,6,function(p){return n.charAt(p)});switch(o.length%4){default:case 0:return o;case 1:return o+"===";case 2:return o+"==";case 3:return o+"="}},decompressFromBase64:function(i){return i==null?"":i==""?null:m._decompress(i.length,32,function(o){return u(n,i.charAt(o))})},compressToUTF16:function(i){return i==null?"":m._compress(i,15,function(o){return e(o+32)})+" "},decompressFromUTF16:function(i){return i==null?"":i==""?null:m._decompress(i.length,16384,function(o){return i.charCodeAt(o)-32})},compressToUint8Array:function(i){for(var o=m.compress(i),p=new Uint8Array(o.length*2),s=0,l=o.length;s<l;s++){var g=o.charCodeAt(s);p[s*2]=g>>>8,p[s*2+1]=g%256}return p},decompressFromUint8Array:function(i){if(i==null)return m.decompress(i);for(var o=new Array(i.length/2),p=0,s=o.length;p<s;p++)o[p]=i[p*2]*256+i[p*2+1];var l=[];return o.forEach(function(g){l.push(e(g))}),m.decompress(l.join(""))},compressToEncodedURIComponent:function(i){return i==null?"":m._compress(i,6,function(o){return t.charAt(o)})},decompressFromEncodedURIComponent:function(i){return i==null?"":i==""?null:(i=i.replace(/ /g,"+"),m._decompress(i.length,32,function(o){return u(t,i.charAt(o))}))},compress:function(i){return m._compress(i,16,function(o){return e(o)})},_compress:function(i,o,p){if(i==null)return"";var s,l,g={},b={},S="",k="",y="",w=2,_=3,f=2,h=[],a=0,c=0,v;for(v=0;v<i.length;v+=1)if(S=i.charAt(v),Object.prototype.hasOwnProperty.call(g,S)||(g[S]=_++,b[S]=!0),k=y+S,Object.prototype.hasOwnProperty.call(g,k))y=k;else{if(Object.prototype.hasOwnProperty.call(b,y)){if(y.charCodeAt(0)<256){for(s=0;s<f;s++)a=a<<1,c==o-1?(c=0,h.push(p(a)),a=0):c++;for(l=y.charCodeAt(0),s=0;s<8;s++)a=a<<1|l&1,c==o-1?(c=0,h.push(p(a)),a=0):c++,l=l>>1}else{for(l=1,s=0;s<f;s++)a=a<<1|l,c==o-1?(c=0,h.push(p(a)),a=0):c++,l=0;for(l=y.charCodeAt(0),s=0;s<16;s++)a=a<<1|l&1,c==o-1?(c=0,h.push(p(a)),a=0):c++,l=l>>1}w--,w==0&&(w=Math.pow(2,f),f++),delete b[y]}else for(l=g[y],s=0;s<f;s++)a=a<<1|l&1,c==o-1?(c=0,h.push(p(a)),a=0):c++,l=l>>1;w--,w==0&&(w=Math.pow(2,f),f++),g[k]=_++,y=String(S)}if(y!==""){if(Object.prototype.hasOwnProperty.call(b,y)){if(y.charCodeAt(0)<256){for(s=0;s<f;s++)a=a<<1,c==o-1?(c=0,h.push(p(a)),a=0):c++;for(l=y.charCodeAt(0),s=0;s<8;s++)a=a<<1|l&1,c==o-1?(c=0,h.push(p(a)),a=0):c++,l=l>>1}else{for(l=1,s=0;s<f;s++)a=a<<1|l,c==o-1?(c=0,h.push(p(a)),a=0):c++,l=0;for(l=y.charCodeAt(0),s=0;s<16;s++)a=a<<1|l&1,c==o-1?(c=0,h.push(p(a)),a=0):c++,l=l>>1}w--,w==0&&(w=Math.pow(2,f),f++),delete b[y]}else for(l=g[y],s=0;s<f;s++)a=a<<1|l&1,c==o-1?(c=0,h.push(p(a)),a=0):c++,l=l>>1;w--,w==0&&(w=Math.pow(2,f),f++)}for(l=2,s=0;s<f;s++)a=a<<1|l&1,c==o-1?(c=0,h.push(p(a)),a=0):c++,l=l>>1;for(;;)if(a=a<<1,c==o-1){h.push(p(a));break}else c++;return h.join("")},decompress:function(i){return i==null?"":i==""?null:m._decompress(i.length,32768,function(o){return i.charCodeAt(o)})},_decompress:function(i,o,p){var s=[],l,g=4,b=4,S=3,k="",y=[],w,_,f,h,a,c,v,d={val:p(0),position:o,index:1};for(w=0;w<3;w+=1)s[w]=w;for(f=0,a=Math.pow(2,2),c=1;c!=a;)h=d.val&d.position,d.position>>=1,d.position==0&&(d.position=o,d.val=p(d.index++)),f|=(h>0?1:0)*c,c<<=1;switch(l=f){case 0:for(f=0,a=Math.pow(2,8),c=1;c!=a;)h=d.val&d.position,d.position>>=1,d.position==0&&(d.position=o,d.val=p(d.index++)),f|=(h>0?1:0)*c,c<<=1;v=e(f);break;case 1:for(f=0,a=Math.pow(2,16),c=1;c!=a;)h=d.val&d.position,d.position>>=1,d.position==0&&(d.position=o,d.val=p(d.index++)),f|=(h>0?1:0)*c,c<<=1;v=e(f);break;case 2:return""}for(s[3]=v,_=v,y.push(v);;){if(d.index>i)return"";for(f=0,a=Math.pow(2,S),c=1;c!=a;)h=d.val&d.position,d.position>>=1,d.position==0&&(d.position=o,d.val=p(d.index++)),f|=(h>0?1:0)*c,c<<=1;switch(v=f){case 0:for(f=0,a=Math.pow(2,8),c=1;c!=a;)h=d.val&d.position,d.position>>=1,d.position==0&&(d.position=o,d.val=p(d.index++)),f|=(h>0?1:0)*c,c<<=1;s[b++]=e(f),v=b-1,g--;break;case 1:for(f=0,a=Math.pow(2,16),c=1;c!=a;)h=d.val&d.position,d.position>>=1,d.position==0&&(d.position=o,d.val=p(d.index++)),f|=(h>0?1:0)*c,c<<=1;s[b++]=e(f),v=b-1,g--;break;case 2:return y.join("")}if(g==0&&(g=Math.pow(2,S),S++),s[v])k=s[v];else if(v===b)k=_+_.charAt(0);else return null;y.push(k),s[b++]=_+k.charAt(0),g--,_=k,g==0&&(g=Math.pow(2,S),S++)}}};return m}();typeof define=="function"&&define.amd?define(function(){return H}):typeof L<"u"&&L!=null?L.exports=H:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return H})});var ge=A(J=>{"use strict";Object.defineProperty(J,"__esModule",{value:!0});var Ue=fe();function Fe(e){return Ue.compressToBase64(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Be(e){return Fe(JSON.stringify(e))}J.getParameters=Be});var he=A(P=>{"use strict";P.__esModule=!0;P.getParameters=void 0;var Ge=ge();P.getParameters=Ge.getParameters});var ye=A((et,He)=>{He.exports={name:"delon",version:"18.3.0",description:"Delon is a set of essential modules for NG-ALAIN.",keywords:["delon","ng-alain","alain","antd","ng-zorro-antd","angular"],author:"cipchk <cipchk@qq.com>",license:"MIT",bugs:{url:"https://github.com/ng-alain/ng-alain/issues"},repository:{type:"git",url:"git+https://github.com/ng-alain/delon.git"},homepage:"https://ng-alain.com",engines:{node:"^18.19.1 || ^20.11.1 || ^22.0.0"},scripts:{"ng-high-memory":"node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng",prepare:"husky install",start:"npm run site:gen && ng s -o --hmr",lint:"npm run lint:ts && npm run lint:style","lint:ts":"eslint --cache . --ext .ts,.html","lint:fix":"eslint --cache . --ext .ts,.html --fix","lint:style":"npx stylelint 'packages/**/*.less'",test:"ng test --no-progress --browsers=ChromeHeadlessCI --code-coverage --no-watch","test:cli":"bash scripts/ci/build-schematics.sh -t -clone","test:integration":"bash scripts/ci/build-schematics.sh -b -t -clone -integration",build:"bash scripts/ci/build.sh",build_artifacts:"bash scripts/ci/build-artifacts.sh",analyze:"npm run ng-high-memory build -- --source-map","analyze:view":"source-map-explorer src/dist/browser/*.js","site:gen":"node scripts/site/main init && ng-alain-plugin-theme -t=themeCss","site:build":"npm run site:gen && ng b site && npm run site:ngsw && npm run site:minify && npm run site:sitemap && npm run site:helper","site:helper":"bash scripts/ci/helper.sh","site:minify":"node scripts/build/minify.js","site:sitemap":"node scripts/build/sitemap.js","site:ngsw":"node scripts/build/ngsw.js",changelog:"conventional-changelog -p angular -i CHANGELOG.md -s --pkg package.json","pre-publish":"node scripts/publish/publish.js && node scripts/publish/publish-scaffold.js","publish:next":"bash scripts/publish/publish.sh -next",publish:"bash scripts/publish/publish.sh","sync-scaffold-version":"node scripts/publish/sync-scaffold-version.js"},dependencies:{"@angular/animations":"^18.2.0","@angular/cdk":"^18.2.0","@angular/common":"^18.2.0","@angular/compiler":"^18.2.0","@angular/core":"^18.2.0","@angular/elements":"^18.2.0","@angular/forms":"^18.2.0","@angular/platform-browser":"^18.2.0","@angular/platform-browser-dynamic":"^18.2.0","@angular/platform-server":"^18.2.0","@angular/router":"^18.2.0","@angular/service-worker":"^18.2.0","@angular/ssr":"^18.2.0","@antv/data-set":"^0.11.8","@antv/g2":"^4.2.10","@github/hotkey":"^3.1.1","@ng-util/monaco-editor":"^18.0.0","@stackblitz/sdk":"^1.11.0","@webcomponents/custom-elements":"^1.6.0",ajv:"^8.17.1","ajv-formats":"^3.0.1",aos:"^3.0.0-beta.6",codesandbox:"^2.2.3",echarts:"^5.5.1",express:"^4.21.0",extend:"^3.0.2","file-saver":"^2.0.5",isutf8:"^4.0.1","ng-github-button":"^18.0.0","ng-zorro-antd":"^18.1.1","ngx-countdown":"^18.0.0","ngx-highlight-js":"^18.0.0","ngx-tinymce":"^18.0.0",qrious:"^4.0.2",rxjs:"~7.8.0",tslib:"^2.3.0","zone.js":"~0.14.10"},devDependencies:{"@angular-devkit/build-angular":"^18.2.7","@angular-eslint/builder":"^18.3.1","@angular-eslint/eslint-plugin":"^18.3.1","@angular-eslint/eslint-plugin-template":"^18.3.1","@angular-eslint/schematics":"^18.3.1","@angular-eslint/template-parser":"^18.3.1","@angular/cli":"^18.2.7","@angular/compiler-cli":"^18.2.0","@angular/language-service":"^18.2.0","@commitlint/cli":"^19.5.0","@commitlint/config-angular":"^19.5.0","@types/aos":"^3.0.7","@types/deep-extend":"^0.6.2","@types/express":"^5.0.0","@types/extend":"^3.0.4","@types/file-saver":"^2.0.7","@types/fs-extra":"^11.0.4","@types/jasmine":"~5.1.0","@types/jasminewd2":"~2.0.13","@types/mockjs":"^1.0.10","@types/node":"^18.19.1","@types/parse5":"^7.0.0","@typescript-eslint/eslint-plugin":"^8.8.0","@typescript-eslint/parser":"^8.8.0",chalk:"^5.3.0",codecov:"^3.8.3","conventional-changelog-cli":"^5.0.0",eslint:"^8.57.0","eslint-config-prettier":"~9.1.0","eslint-plugin-deprecation":"^3.0.0","eslint-plugin-header":"~3.1.1","eslint-plugin-import":"~2.25.3","eslint-plugin-jsdoc":"~50.3.1","eslint-plugin-prefer-arrow":"~1.2.3","eslint-plugin-prettier":"~5.2.1","fs-extra":"^11.2.0","html-minifier-terser":"^7.2.0",husky:"^9.1.5",jasmine:"^5.2.0","jasmine-core":"~5.2.0","jasmine-spec-reporter":"^7.0.0","jsonml.js":"^0.1.0",jszip:"^3.10.1",karma:"~6.4.0","karma-chrome-launcher":"~3.2.0","karma-coverage":"~2.2.0","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.1.0","karma-junit-reporter":"^2.0.1","karma-parallel":"^0.3.1","karma-spec-reporter":"0.0.36","karma-summary-reporter":"^4.0.1","karma-viewport":"^1.0.9","klaw-sync":"^6.0.0","less-bundle-promise":"^1.0.11","less-plugin-clean-css":"^1.6.0","less-plugin-npm-import":"^2.1.0","less-vars-to-js":"^1.3.0","lint-staged":"^15.2.9","mark-twain":"^2.0.3",mockjs:"^1.1.0",mustache:"^4.2.0","ng-alain-plugin-theme":"^18.0.0","ng-alain-sts":"^0.0.2","ng-packagr":"^18.2.1",parse5:"^7.1.2",plyr:"^3.7.8",prettier:"^3.3.3","readline-sync":"^1.4.10",screenfull:"^6.0.2",sitemap:"^8.0.0","source-map-explorer":"^2.5.3",stream:"0.0.3",stylelint:"^16.8.2","stylelint-config-clean-order":"^6.1.0","stylelint-config-standard":"^36.0.1","stylelint-declaration-block-no-ignored-properties":"^2.8.0","swagger-typescript-api":"^12.0.4",terser:"^5.34.1","ts-node":"~10.9.2","tsconfig-paths":"^4.2.0",typescript:"~5.5.2",xlsx:"^0.18.5"},"lint-staged":{"(schematics|scripts|packages)/**/!(tslint-rules|testing)/!(polyfills).{html,ts}":["eslint --fix"],"packages/**/*.less":["npm run lint:style"]},packageManager:"yarn@4.5.0"}});var oe=(()=>{class e{constructor(){this.theme="default",this.theme$=new te(1)}setTheme(t){this.theme=t,this.theme$.next(t)}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=I({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var _e="https://stackblitz.com",se=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],Ee=["project","search","ports","settings"],xe=["light","dark"],Ae=["editor","preview"],ae={clickToLoad:e=>E("ctl",e),devToolsHeight:e=>ce("devtoolsheight",e),forceEmbedLayout:e=>E("embed",e),hideDevTools:e=>E("hidedevtools",e),hideExplorer:e=>E("hideExplorer",e),hideNavigation:e=>E("hideNavigation",e),openFile:e=>N("file",e),showSidebar:e=>Te("showSidebar",e),sidebarView:e=>$("sidebarView",e,Ee),startScript:e=>N("startScript",e),terminalHeight:e=>ce("terminalHeight",e),theme:e=>$("theme",e,xe),view:e=>$("view",e,Ae),zenMode:e=>E("zenMode",e),organization:e=>`${N("orgName",e?.name)}&${N("orgProvider",e?.provider)}`,crossOriginIsolated:e=>E("corp",e)};function le(e={}){let n=Object.entries(e).map(([t,r])=>r!=null&&ae.hasOwnProperty(t)?ae[t](r):"").filter(Boolean);return n.length?`?${n.join("&")}`:""}function E(e,n){return n===!0?`${e}=1`:""}function Te(e,n){return typeof n=="boolean"?`${e}=${n?"1":"0"}`:""}function ce(e,n){if(typeof n=="number"&&!Number.isNaN(n)){let t=Math.min(100,Math.max(0,n));return`${e}=${encodeURIComponent(Math.round(t))}`}return""}function $(e,n="",t=[]){return t.includes(n)?`${e}=${encodeURIComponent(n)}`:""}function N(e,n){return(Array.isArray(n)?n:[n]).filter(r=>typeof r=="string"&&r.trim()!=="").map(r=>`${e}=${encodeURIComponent(r)}`).join("&")}function pe(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function W(e,n){return`${de(n)}${e}${le(n)}`}function U(e,n){let t={forceEmbedLayout:!0};return n&&typeof n=="object"&&Object.assign(t,n),`${de(t)}${e}${le(t)}`}function de(e={}){return(typeof e.origin=="string"?e.origin:_e).replace(/\/$/,"")}function F(e,n,t){if(!n||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(n.id=e.id),e.className&&(n.className=e.className),Ie(n,t),Oe(e,n,t),e.replaceWith(n)}function B(e){if(typeof e=="string"){let n=document.getElementById(e);if(!n)throw new Error(`Could not find element with id '${e}'`);return n}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function G(e){return e&&e.newWindow===!1?"_self":"_blank"}function Ie(e,n={}){let t=Object.hasOwnProperty.call(n,"height")?`${n.height}`:"300",r=Object.hasOwnProperty.call(n,"width")?`${n.width}`:void 0;e.setAttribute("height",t),r?e.setAttribute("width",r):e.setAttribute("style","width:100%;")}function Oe(e,n,t={}){let r=e.allow?.split(";")?.map(u=>u.trim())??[];t.crossOriginIsolated&&!r.includes("cross-origin-isolated")&&r.push("cross-origin-isolated"),r.length>0&&(n.allow=r.join("; "))}var z=class{constructor(n){this.pending={},this.port=n,this.port.onmessage=this.messageListener.bind(this)}request({type:n,payload:t}){return new Promise((r,u)=>{let m=pe();this.pending[m]={resolve:r,reject:u},this.port.postMessage({type:n,payload:X(j({},t),{__reqid:m})})})}messageListener(n){if(typeof n.data.payload?.__reqid!="string")return;let{type:t,payload:r}=n.data,{__reqid:u,__success:m,__error:i}=r;this.pending[u]&&(m?this.pending[u].resolve(this.cleanResult(r)):this.pending[u].reject(i?`${t}: ${i}`:t),delete this.pending[u])}cleanResult(n){let t=j({},n);return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}},q=class{constructor(n,t){this.editor={openFile:r=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:r}}),setCurrentFile:r=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:r}}),setTheme:r=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:r}}),setView:r=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:r}}),showSidebar:(r=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:r}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(r=>r?.url??null),setUrl:(r="/")=>{if(typeof r!="string"||!r.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${r}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:r}})}},this._rdc=new z(n),Object.defineProperty(this.preview,"origin",{value:typeof t.previewOrigin=="string"?t.previewOrigin:null,writable:!1})}applyFsDiff(n){let t=r=>r!==null&&typeof r=="object";if(!t(n)||!t(n.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(n.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:n})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}},M=[],D=class{constructor(n){this.id=pe(),this.element=n,this.pending=new Promise((t,r)=>{let u=({data:s,ports:l})=>{s?.action==="SDK_INIT_SUCCESS"&&s.id===this.id&&(this.vm=new q(l[0],s.payload),t(this.vm),i())},m=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function i(){window.clearInterval(p),window.removeEventListener("message",u)}window.addEventListener("message",u),m();let o=0,p=window.setInterval(()=>{if(this.vm){i();return}if(o>=20){i(),r("Timeout: Unable to establish a connection with the StackBlitz VM"),M.forEach((s,l)=>{s.id===this.id&&M.splice(l,1)});return}o++,m()},500)}),M.push(this)}},Ne=e=>{let n=e instanceof Element?"element":"id";return M.find(t=>t[n]===e)??null};function Me(e,n){let t=document.createElement("input");return t.type="hidden",t.name=e,t.value=n,t}function Ce(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function ue({template:e,title:n,description:t,dependencies:r,files:u,settings:m}){if(!se.includes(e)){let s=se.map(l=>`'${l}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${s}`)}let i=[],o=(s,l,g="")=>{i.push(Me(s,typeof l=="string"?l:g))};o("project[title]",n),typeof t=="string"&&t.length>0&&o("project[description]",t),o("project[template]",e,"javascript"),r&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):o("project[dependencies]",JSON.stringify(r))),m&&o("project[settings]",JSON.stringify(m)),Object.entries(u).forEach(([s,l])=>{o(`project[files][${Ce(s)}]`,l)});let p=document.createElement("form");return p.method="POST",p.setAttribute("style","display:none!important;"),p.append(...i),p}function Le(e,n){let t=ue(e);return t.action=U("/run",n),t.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${t.outerHTML}
  <script>document.getElementById('${t.id}').submit();<\/script>
</body>
</html>`}function Pe(e,n){let t=ue(e);t.action=W("/run",n),t.target=G(n),document.body.appendChild(t),t.submit(),document.body.removeChild(t)}function C(e){return e?.contentWindow?(Ne(e)??new D(e)).pending:Promise.reject("Provided element is not an iframe.")}function Re(e,n){Pe(e,n)}function $e(e,n){let t=W(`/edit/${e}`,n),r=G(n);window.open(t,r)}function ze(e,n){let t=W(`/github/${e}`,n),r=G(n);window.open(t,r)}function qe(e,n,t){let r=B(e),u=Le(n,t),m=document.createElement("iframe");return F(r,m,t),m.contentDocument?.write(u),C(m)}function De(e,n,t){let r=B(e),u=document.createElement("iframe");return u.src=U(`/edit/${n}`,t),F(r,u,t),C(u)}function We(e,n,t){let r=B(e),u=document.createElement("iframe");return u.src=U(`/github/${n}`,t),F(r,u,t),C(u)}var me={connect:C,embedGithubProject:We,embedProject:qe,embedProjectId:De,openGithubProject:ze,openProject:Re,openProjectId:$e};var ke=ee(he());var x=ee(ye());var K={$schema:"./node_modules/@angular/cli/lib/config/schema.json",cli:{analytics:"1e1de97b-a744-405a-8b5a-0397bb3d01ce"},newProjectRoot:"projects",projects:{demo:{architect:{build:{builder:"@angular-devkit/build-angular:application",configurations:{development:{extractLicenses:!1,namedChunks:!0,optimization:!1,sourceMap:!0},production:{aot:!0,extractLicenses:!0,namedChunks:!1,optimization:!0,outputHashing:"all",sourceMap:!1}},options:{assets:[],index:"src/index.html",browser:"src/main.ts",outputPath:"dist/demo",scripts:[],styles:["src/styles.css"],tsConfig:"tsconfig.json"}},serve:{builder:"@angular-devkit/build-angular:dev-server",configurations:{development:{buildTarget:"demo:build:development"},production:{buildTarget:"demo:build:production"}},defaultConfiguration:"development"}},prefix:"app",projectType:"application",root:"",schematics:{},sourceRoot:"src"}},version:1};var V=`import { ApplicationConfig } from '@angular/core';
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
import { mockInterceptor, provideMockConfig } from '@delon/mock';
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
    provideHttpClient(withFetch(), withInterceptors([mockInterceptor])),
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
`;var Z=e=>`import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { ${e} } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(${e}, appConfig).catch((err) =>
  console.error(err)
);
`;var we=`import { MockStatusError, MockRequest, r } from '@delon/mock';
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
};`;var be={name:"ng-alain",description:"",tags:["NG-ALAIN"],version:"0.0.0",scripts:{ng:"ng",start:"ng serve",build:"ng build",test:"ng test",lint:"ng lint",e2e:"ng e2e"},private:!0,dependencies:{"@angular/animations":"^17.1.0","@angular/common":"^17.1.0","@angular/compiler":"^17.1.0","@angular/core":"^17.1.0","@angular/forms":"^17.1.0","@angular/platform-browser":"^17.1.0","@angular/router":"^17.1.0",rxjs:"^7.8.1",tslib:"^2.6.2","zone.js":"^0.14.3","@delon/theme":"~17.0.3","@delon/abc":"~17.0.3","@delon/chart":"~17.0.3","@delon/acl":"~17.0.3","@delon/auth":"~17.0.3","@delon/cache":"~17.0.3","@delon/mock":"~17.0.3","@delon/form":"~17.0.3","@delon/util":"~17.0.3","ng-zorro-antd":"^17.1.0",ajv:"^8.12.0","ajv-formats":"^2.1.1","date-fns":"^2.16.1","@angular/cdk":"^17.0.0"}};var ve=`# Angular CLI Template

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
`;var Y={"sandbox.config.json":JSON.stringify({template:"node"},null,2),".codesandbox/tasks.json":`{
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
  `};var Se=e=>`import { APP_INITIALIZER, Injectable, inject, Provider } from '@angular/core';
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
`;var Q={compileOnSave:!1,compilerOptions:{outDir:"./dist/out-tsc",forceConsistentCasingInFileNames:!0,strict:!0,noImplicitOverride:!0,noPropertyAccessFromIndexSignature:!0,noImplicitReturns:!0,noFallthroughCasesInSwitch:!0,esModuleInterop:!0,sourceMap:!0,declaration:!1,downlevelIteration:!0,experimentalDecorators:!0,moduleResolution:"node",importHelpers:!0,target:"ES2015",module:"ES2022",useDefineForClassFields:!1,lib:["ES2022","dom"]},angularCompilerOptions:{enableI18nLegacyMessageIdFormat:!1,strictInjectionParameters:!0,strictInputAccessModifiers:!0,strictTemplates:!0}};var At=(()=>{class e{constructor(){this.appSrv=O(oe),this.http=O(ie),this.document=O(re)}get themePath(){return`node_modules/@delon/theme/${this.appSrv.theme}.css`}genPackage({includeCli:t=!1}){let r=x.default.dependencies["@angular/core"],u=be;t&&(u.devDependencies={"@angular-devkit/build-angular":"^17.0.0","@angular/cli":"^17.0.0","@angular/compiler-cli":"^17.0.0","@types/node":"^18.18.0","ts-node":"~10.9.1",typescript:"~5.2.2","ng-alain":"~17.0.3"});let m=j(j({},x.default.dependencies),x.default.devDependencies);return["dependencies","devDependencies"].forEach(i=>{Object.keys(u[i]||{}).forEach(o=>{u[i][o]=o.startsWith("@delon")||o==="ng-alain"?`${x.default.version}`:m[o]||"*"})}),u.dependencies["@angular/core"]=r,u}get genStartupService(){return Se({ajvVersion:x.default.dependencies.ajv.substring(1)})}get genMock(){return{"_mock/user.ts":we,"_mock/index.ts":"export * from './user';"}}parseCode(t){let r="",u="",m=/selector:[ ]?(['|"|`])([^'"`]+)/g.exec(t);m&&(r=m[2]);let i=/export class ([^ {]+)/g.exec(t);return i&&(u=i[1]),{selector:r,componentName:u,html:['<base href="/">',`<${r}>loading</${r}>`,'<div id="VERSION" style="position: fixed; bottom: 8px; right: 8px; z-index: 8888;font-size: 11px; color: #aaa;"></div>'].join(`
`)}}attachStandalone(t){return t.includes("standalone: true")?t:`${t.replace("@Component({",`@Component({
  standalone: true,
`)}`}getYarnLock(){return T(this,null,function*(){if(this.yarnLock!=null)return this.yarnLock;try{let t=yield ne(this.http.get("./assets/yarn.lock.txt",{responseType:"text"}));return this.yarnLock=t,t}catch(t){console.warn(`Unable to load yarn.lock file: ${t}`)}return""})}openOnStackBlitz(t,r,u=!1){return T(this,null,function*(){r=this.attachStandalone(r);let m=this.parseCode(r),i=R(K);i.projects.demo.architect.build.options.styles.splice(0,0,this.themePath);let o=this.genPackage({includeCli:u});o.description=t;let p=j({"angular.json":`${JSON.stringify(i,null,2)}`,"tsconfig.json":`${JSON.stringify(Q,null,2)}`,"src/index.html":m.html,"src/main.ts":Z(m.componentName),"src/app/app.component.ts":r,"src/app/app.config.ts":V,"src/app/startup.service.ts":this.genStartupService,"src/styles.css":""},this.genMock);u&&(p[".stackblitzrc"]=JSON.stringify({installDependencies:!0,startCommand:"yarn start",env:{ENABLE_CJS_IMPORTS:!0}},null,2),p["yarn.lock"]=yield this.getYarnLock(),p["package.json"]=`${JSON.stringify(o,null,2)}`),me.openProject({title:"NG-ALAIN",description:"NG-ZORRO  admin panel front-end framework",tags:["ng-alain","@delon","NG-ZORRO","ng-zorro-antd","Ant Design","Angular","ng"],dependencies:j(j({},o.dependencies),o.devDependencies),files:p,template:u?"node":"angular-cli"},{openFile:"src/app/app.config.ts,src/app/app.component.ts"})})}openOnCodeSandbox(t,r,u=!1){return T(this,null,function*(){r=this.attachStandalone(r);let m=this.parseCode(r),i=this.genMock,o=R(K);o.projects.demo.architect.build.options.styles.splice(0,0,this.themePath);let p=this.genPackage({includeCli:u});p.description=t;let s={"package.json":{content:JSON.stringify(p,null,2),isBinary:!1},"angular.json":{content:`${JSON.stringify(o,null,2)}`,isBinary:!1},"tsconfig.json":{content:`${JSON.stringify(Q,null,2)}`,isBinary:!1},"src/index.html":{content:m.html,isBinary:!1},"src/main.ts":{content:Z(m.componentName),isBinary:!1},"src/app/app.config.ts":{content:V,isBinary:!1},"src/app/app.component.ts":{content:r,isBinary:!1},"src/app/startup.service.ts":{content:this.genStartupService,isBinary:!1},"src/styles.css":{content:"",isBinary:!1},"_mock/user.ts":{content:i["_mock/user.ts"],isBinary:!1},"_mock/index.ts":{content:i["_mock/index.ts"],isBinary:!1},"yarn.lock":{content:yield this.getYarnLock(),isBinary:!1}};u&&(s["README.md"]={content:ve,isBinary:!1}),Object.keys(Y).forEach(S=>{s[S]={content:Y[S],isBinary:!1}});let l=(0,ke.getParameters)({files:s,environment:"server"}),g=this.document.createElement("form"),b=this.document.createElement("input");g.method="POST",g.action="https://codesandbox.io/api/v1/sandboxes/define",g.target="_blank",b.name="parameters",b.value=l,g.appendChild(b),this.document.body.append(g),g.submit(),this.document.body.removeChild(g)})}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=I({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();export{ye as a,oe as b,At as c};
