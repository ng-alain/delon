import{Lc as ie,a as j,b as X,ba as I,d as A,f as ee,fa as O,g as T,jc as re,kd as R,m as te,v as ne}from"./chunk-FML4Y3RM.js";var fe=A((Ye,L)=>{"use strict";var H=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",n={};function d(i,o){if(!n[i]){n[i]={};for(var l=0;l<i.length;l++)n[i][i.charAt(l)]=l}return n[i][o]}var u={compressToBase64:function(i){if(i==null)return"";var o=u._compress(i,6,function(l){return t.charAt(l)});switch(o.length%4){default:case 0:return o;case 1:return o+"===";case 2:return o+"==";case 3:return o+"="}},decompressFromBase64:function(i){return i==null?"":i==""?null:u._decompress(i.length,32,function(o){return d(t,i.charAt(o))})},compressToUTF16:function(i){return i==null?"":u._compress(i,15,function(o){return e(o+32)})+" "},decompressFromUTF16:function(i){return i==null?"":i==""?null:u._decompress(i.length,16384,function(o){return i.charCodeAt(o)-32})},compressToUint8Array:function(i){for(var o=u.compress(i),l=new Uint8Array(o.length*2),s=0,p=o.length;s<p;s++){var h=o.charCodeAt(s);l[s*2]=h>>>8,l[s*2+1]=h%256}return l},decompressFromUint8Array:function(i){if(i==null)return u.decompress(i);for(var o=new Array(i.length/2),l=0,s=o.length;l<s;l++)o[l]=i[l*2]*256+i[l*2+1];var p=[];return o.forEach(function(h){p.push(e(h))}),u.decompress(p.join(""))},compressToEncodedURIComponent:function(i){return i==null?"":u._compress(i,6,function(o){return r.charAt(o)})},decompressFromEncodedURIComponent:function(i){return i==null?"":i==""?null:(i=i.replace(/ /g,"+"),u._decompress(i.length,32,function(o){return d(r,i.charAt(o))}))},compress:function(i){return u._compress(i,16,function(o){return e(o)})},_compress:function(i,o,l){if(i==null)return"";var s,p,h={},y={},v="",k="",w="",b=2,_=3,f=2,g=[],a=0,c=0,S;for(S=0;S<i.length;S+=1)if(v=i.charAt(S),Object.prototype.hasOwnProperty.call(h,v)||(h[v]=_++,y[v]=!0),k=w+v,Object.prototype.hasOwnProperty.call(h,k))w=k;else{if(Object.prototype.hasOwnProperty.call(y,w)){if(w.charCodeAt(0)<256){for(s=0;s<f;s++)a=a<<1,c==o-1?(c=0,g.push(l(a)),a=0):c++;for(p=w.charCodeAt(0),s=0;s<8;s++)a=a<<1|p&1,c==o-1?(c=0,g.push(l(a)),a=0):c++,p=p>>1}else{for(p=1,s=0;s<f;s++)a=a<<1|p,c==o-1?(c=0,g.push(l(a)),a=0):c++,p=0;for(p=w.charCodeAt(0),s=0;s<16;s++)a=a<<1|p&1,c==o-1?(c=0,g.push(l(a)),a=0):c++,p=p>>1}b--,b==0&&(b=Math.pow(2,f),f++),delete y[w]}else for(p=h[w],s=0;s<f;s++)a=a<<1|p&1,c==o-1?(c=0,g.push(l(a)),a=0):c++,p=p>>1;b--,b==0&&(b=Math.pow(2,f),f++),h[k]=_++,w=String(v)}if(w!==""){if(Object.prototype.hasOwnProperty.call(y,w)){if(w.charCodeAt(0)<256){for(s=0;s<f;s++)a=a<<1,c==o-1?(c=0,g.push(l(a)),a=0):c++;for(p=w.charCodeAt(0),s=0;s<8;s++)a=a<<1|p&1,c==o-1?(c=0,g.push(l(a)),a=0):c++,p=p>>1}else{for(p=1,s=0;s<f;s++)a=a<<1|p,c==o-1?(c=0,g.push(l(a)),a=0):c++,p=0;for(p=w.charCodeAt(0),s=0;s<16;s++)a=a<<1|p&1,c==o-1?(c=0,g.push(l(a)),a=0):c++,p=p>>1}b--,b==0&&(b=Math.pow(2,f),f++),delete y[w]}else for(p=h[w],s=0;s<f;s++)a=a<<1|p&1,c==o-1?(c=0,g.push(l(a)),a=0):c++,p=p>>1;b--,b==0&&(b=Math.pow(2,f),f++)}for(p=2,s=0;s<f;s++)a=a<<1|p&1,c==o-1?(c=0,g.push(l(a)),a=0):c++,p=p>>1;for(;;)if(a=a<<1,c==o-1){g.push(l(a));break}else c++;return g.join("")},decompress:function(i){return i==null?"":i==""?null:u._decompress(i.length,32768,function(o){return i.charCodeAt(o)})},_decompress:function(i,o,l){var s=[],p,h=4,y=4,v=3,k="",w=[],b,_,f,g,a,c,S,m={val:l(0),position:o,index:1};for(b=0;b<3;b+=1)s[b]=b;for(f=0,a=Math.pow(2,2),c=1;c!=a;)g=m.val&m.position,m.position>>=1,m.position==0&&(m.position=o,m.val=l(m.index++)),f|=(g>0?1:0)*c,c<<=1;switch(p=f){case 0:for(f=0,a=Math.pow(2,8),c=1;c!=a;)g=m.val&m.position,m.position>>=1,m.position==0&&(m.position=o,m.val=l(m.index++)),f|=(g>0?1:0)*c,c<<=1;S=e(f);break;case 1:for(f=0,a=Math.pow(2,16),c=1;c!=a;)g=m.val&m.position,m.position>>=1,m.position==0&&(m.position=o,m.val=l(m.index++)),f|=(g>0?1:0)*c,c<<=1;S=e(f);break;case 2:return""}for(s[3]=S,_=S,w.push(S);;){if(m.index>i)return"";for(f=0,a=Math.pow(2,v),c=1;c!=a;)g=m.val&m.position,m.position>>=1,m.position==0&&(m.position=o,m.val=l(m.index++)),f|=(g>0?1:0)*c,c<<=1;switch(S=f){case 0:for(f=0,a=Math.pow(2,8),c=1;c!=a;)g=m.val&m.position,m.position>>=1,m.position==0&&(m.position=o,m.val=l(m.index++)),f|=(g>0?1:0)*c,c<<=1;s[y++]=e(f),S=y-1,h--;break;case 1:for(f=0,a=Math.pow(2,16),c=1;c!=a;)g=m.val&m.position,m.position>>=1,m.position==0&&(m.position=o,m.val=l(m.index++)),f|=(g>0?1:0)*c,c<<=1;s[y++]=e(f),S=y-1,h--;break;case 2:return w.join("")}if(h==0&&(h=Math.pow(2,v),v++),s[S])k=s[S];else if(S===y)k=_+_.charAt(0);else return null;w.push(k),s[y++]=_+k.charAt(0),h--,_=k,h==0&&(h=Math.pow(2,v),v++)}}};return u}();typeof define=="function"&&define.amd?define(function(){return H}):typeof L<"u"&&L!=null?L.exports=H:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return H})});var ge=A(J=>{"use strict";Object.defineProperty(J,"__esModule",{value:!0});var Ue=fe();function Fe(e){return Ue.compressToBase64(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Be(e){return Fe(JSON.stringify(e))}J.getParameters=Be});var he=A(P=>{"use strict";P.__esModule=!0;P.getParameters=void 0;var Ge=ge();P.getParameters=Ge.getParameters});var ye=A((et,He)=>{He.exports={name:"delon",version:"18.1.0",description:"Delon is a set of essential modules for NG-ALAIN.",keywords:["delon","ng-alain","alain","antd","ng-zorro-antd","angular"],author:"cipchk <cipchk@qq.com>",license:"MIT",bugs:{url:"https://github.com/ng-alain/ng-alain/issues"},repository:{type:"git",url:"git+https://github.com/ng-alain/delon.git"},homepage:"https://ng-alain.com",engines:{node:"^18.19.1 || ^20.11.1 || ^22.0.0"},scripts:{"ng-high-memory":"node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng",prepare:"husky install",start:"npm run site:gen && ng s -o --hmr",lint:"npm run lint:ts && npm run lint:style","lint:ts":"eslint --cache . --ext .ts,.html","lint:fix":"eslint --cache . --ext .ts,.html --fix","lint:style":"npx stylelint 'packages/**/*.less'",test:"ng test --no-progress --browsers=ChromeHeadlessCI --code-coverage --no-watch","test:cli":"bash scripts/ci/build-schematics.sh -t -clone","test:integration":"bash scripts/ci/build-schematics.sh -b -t -clone -integration",build:"bash scripts/ci/build.sh",build_artifacts:"bash scripts/ci/build-artifacts.sh",analyze:"npm run ng-high-memory build -- --source-map","analyze:view":"source-map-explorer src/dist/browser/*.js","site:gen":"node scripts/site/main init && ng-alain-plugin-theme -t=themeCss","site:build":"npm run site:gen && ng b site && npm run site:ngsw && npm run site:minify && npm run site:sitemap && npm run site:helper","site:helper":"bash scripts/ci/helper.sh","site:minify":"node scripts/build/minify.js","site:sitemap":"node scripts/build/sitemap.js","site:ngsw":"node scripts/build/ngsw.js",changelog:"conventional-changelog -p angular -i CHANGELOG.md -s --pkg package.json","pre-publish":"node scripts/publish/publish.js && node scripts/publish/publish-scaffold.js","publish:next":"bash scripts/publish/publish.sh -next",publish:"bash scripts/publish/publish.sh","sync-scaffold-version":"node scripts/publish/sync-scaffold-version.js"},dependencies:{"@angular/animations":"^18.1.0","@angular/cdk":"^18.1.0","@angular/common":"^18.1.0","@angular/compiler":"^18.1.0","@angular/core":"^18.1.0","@angular/elements":"^18.1.0","@angular/forms":"^18.1.0","@angular/platform-browser":"^18.1.0","@angular/platform-browser-dynamic":"^18.1.0","@angular/platform-server":"^18.1.0","@angular/router":"^18.1.0","@angular/service-worker":"^18.1.0","@angular/ssr":"^18.1.0","@antv/data-set":"^0.11.8","@antv/g2":"^4.2.10","@github/hotkey":"^3.1.1","@ng-util/monaco-editor":"^18.0.0","@stackblitz/sdk":"^1.11.0","@webcomponents/custom-elements":"^1.6.0",ajv:"^8.17.1","ajv-formats":"^3.0.1",aos:"^3.0.0-beta.6",codesandbox:"^2.2.3",echarts:"^5.5.1",express:"^4.19.2",extend:"^3.0.2","file-saver":"^2.0.5",isutf8:"^4.0.0","ng-github-button":"^18.0.0","ng-zorro-antd":"^18.1.0","ngx-countdown":"^18.0.0","ngx-highlight-js":"^18.0.0","ngx-tinymce":"^18.0.0",qrious:"^4.0.2",rxjs:"~7.8.0",tslib:"^2.3.0","zone.js":"~0.14.3"},devDependencies:{"@angular-devkit/build-angular":"^18.1.3","@angular-eslint/builder":"^18.2.0","@angular-eslint/eslint-plugin":"^18.2.0","@angular-eslint/eslint-plugin-template":"^18.2.0","@angular-eslint/schematics":"^18.2.0","@angular-eslint/template-parser":"^18.2.0","@angular/cli":"^18.1.3","@angular/compiler-cli":"^18.1.0","@angular/language-service":"^18.1.0","@commitlint/cli":"^19.3.0","@commitlint/config-angular":"^19.3.0","@types/aos":"^3.0.7","@types/deep-extend":"^0.6.2","@types/express":"^4.17.21","@types/extend":"^3.0.4","@types/file-saver":"^2.0.7","@types/fs-extra":"^11.0.4","@types/jasmine":"~5.1.0","@types/jasminewd2":"~2.0.13","@types/mockjs":"^1.0.10","@types/node":"^18.19.39","@types/parse5":"^7.0.0","@typescript-eslint/eslint-plugin":"^8.0.0","@typescript-eslint/parser":"^8.0.0",chalk:"^5.3.0",codecov:"^3.8.3","conventional-changelog-cli":"^5.0.0",eslint:"^8.28.0","eslint-config-prettier":"~9.1.0","eslint-plugin-deprecation":"^3.0.0","eslint-plugin-header":"~3.1.1","eslint-plugin-import":"~2.25.3","eslint-plugin-jsdoc":"~46.8.2","eslint-plugin-prefer-arrow":"~1.2.2","eslint-plugin-prettier":"~5.0.0","fs-extra":"^11.2.0","html-minifier-terser":"^7.2.0",husky:"^9.1.4",jasmine:"^5.2.0","jasmine-core":"~5.1.0","jasmine-spec-reporter":"^7.0.0","jsonml.js":"^0.1.0",jszip:"^3.10.1",karma:"~6.4.0","karma-chrome-launcher":"~3.2.0","karma-coverage":"~2.2.0","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.1.0","karma-junit-reporter":"^2.0.1","karma-parallel":"^0.3.1","karma-spec-reporter":"0.0.36","karma-summary-reporter":"^4.0.1","karma-viewport":"^1.0.9","klaw-sync":"^6.0.0","less-bundle-promise":"^1.0.11","less-plugin-clean-css":"^1.6.0","less-plugin-npm-import":"^2.1.0","less-vars-to-js":"^1.3.0","lint-staged":"^15.2.8","mark-twain":"^2.0.3",mockjs:"^1.1.0",mustache:"^4.2.0","ng-alain-plugin-theme":"^18.0.0","ng-alain-sts":"^0.0.2","ng-packagr":"^18.1.0",parse5:"^7.1.2",plyr:"^3.7.8",prettier:"^3.3.3","readline-sync":"^1.4.10",screenfull:"^6.0.2",sitemap:"^8.0.0","source-map-explorer":"^2.5.3",stream:"0.0.3",stylelint:"^16.8.1","stylelint-config-clean-order":"^6.1.0","stylelint-config-standard":"^36.0.1","stylelint-declaration-block-no-ignored-properties":"^2.8.0","swagger-typescript-api":"^12.0.4",terser:"^5.31.3","ts-node":"~10.9.2","tsconfig-paths":"^4.2.0",typescript:"~5.5.2",xlsx:"^0.18.5"},"lint-staged":{"(schematics|scripts|packages)/**/!(tslint-rules|testing)/!(polyfills).{html,ts}":["eslint --fix"],"packages/**/*.less":["npm run lint:style"]},packageManager:"yarn@4.0.2"}});var oe=(()=>{let t=class t{constructor(){this.theme="default",this.theme$=new te(1)}setTheme(n){this.theme=n,this.theme$.next(n)}};t.\u0275fac=function(d){return new(d||t)},t.\u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var _e="https://stackblitz.com",se=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],Ee=["project","search","ports","settings"],xe=["light","dark"],Ae=["editor","preview"],ae={clickToLoad:e=>E("ctl",e),devToolsHeight:e=>ce("devtoolsheight",e),forceEmbedLayout:e=>E("embed",e),hideDevTools:e=>E("hidedevtools",e),hideExplorer:e=>E("hideExplorer",e),hideNavigation:e=>E("hideNavigation",e),openFile:e=>N("file",e),showSidebar:e=>Te("showSidebar",e),sidebarView:e=>$("sidebarView",e,Ee),startScript:e=>N("startScript",e),terminalHeight:e=>ce("terminalHeight",e),theme:e=>$("theme",e,xe),view:e=>$("view",e,Ae),zenMode:e=>E("zenMode",e),organization:e=>`${N("orgName",e?.name)}&${N("orgProvider",e?.provider)}`,crossOriginIsolated:e=>E("corp",e)};function le(e={}){let t=Object.entries(e).map(([r,n])=>n!=null&&ae.hasOwnProperty(r)?ae[r](n):"").filter(Boolean);return t.length?`?${t.join("&")}`:""}function E(e,t){return t===!0?`${e}=1`:""}function Te(e,t){return typeof t=="boolean"?`${e}=${t?"1":"0"}`:""}function ce(e,t){if(typeof t=="number"&&!Number.isNaN(t)){let r=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(r))}`}return""}function $(e,t="",r=[]){return r.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function N(e,t){return(Array.isArray(t)?t:[t]).filter(n=>typeof n=="string"&&n.trim()!=="").map(n=>`${e}=${encodeURIComponent(n)}`).join("&")}function pe(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function W(e,t){return`${de(t)}${e}${le(t)}`}function U(e,t){let r={forceEmbedLayout:!0};return t&&typeof t=="object"&&Object.assign(r,t),`${de(r)}${e}${le(r)}`}function de(e={}){return(typeof e.origin=="string"?e.origin:_e).replace(/\/$/,"")}function F(e,t,r){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),Ie(t,r),Oe(e,t,r),e.replaceWith(t)}function B(e){if(typeof e=="string"){let t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function G(e){return e&&e.newWindow===!1?"_self":"_blank"}function Ie(e,t={}){let r=Object.hasOwnProperty.call(t,"height")?`${t.height}`:"300",n=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",r),n?e.setAttribute("width",n):e.setAttribute("style","width:100%;")}function Oe(e,t,r={}){let n=e.allow?.split(";")?.map(d=>d.trim())??[];r.crossOriginIsolated&&!n.includes("cross-origin-isolated")&&n.push("cross-origin-isolated"),n.length>0&&(t.allow=n.join("; "))}var z=class{constructor(t){this.pending={},this.port=t,this.port.onmessage=this.messageListener.bind(this)}request({type:t,payload:r}){return new Promise((n,d)=>{let u=pe();this.pending[u]={resolve:n,reject:d},this.port.postMessage({type:t,payload:X(j({},r),{__reqid:u})})})}messageListener(t){if(typeof t.data.payload?.__reqid!="string")return;let{type:r,payload:n}=t.data,{__reqid:d,__success:u,__error:i}=n;this.pending[d]&&(u?this.pending[d].resolve(this.cleanResult(n)):this.pending[d].reject(i?`${r}: ${i}`:r),delete this.pending[d])}cleanResult(t){let r=j({},t);return delete r.__reqid,delete r.__success,delete r.__error,Object.keys(r).length?r:null}},q=class{constructor(t,r){this.editor={openFile:n=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:n}}),setCurrentFile:n=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:n}}),setTheme:n=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:n}}),setView:n=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:n}}),showSidebar:(n=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:n}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(n=>n?.url??null),setUrl:(n="/")=>{if(typeof n!="string"||!n.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${n}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:n}})}},this._rdc=new z(t),Object.defineProperty(this.preview,"origin",{value:typeof r.previewOrigin=="string"?r.previewOrigin:null,writable:!1})}applyFsDiff(t){let r=n=>n!==null&&typeof n=="object";if(!r(t)||!r(t.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(t.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:t})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}},M=[],D=class{constructor(t){this.id=pe(),this.element=t,this.pending=new Promise((r,n)=>{let d=({data:s,ports:p})=>{s?.action==="SDK_INIT_SUCCESS"&&s.id===this.id&&(this.vm=new q(p[0],s.payload),r(this.vm),i())},u=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function i(){window.clearInterval(l),window.removeEventListener("message",d)}window.addEventListener("message",d),u();let o=0,l=window.setInterval(()=>{if(this.vm){i();return}if(o>=20){i(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),M.forEach((s,p)=>{s.id===this.id&&M.splice(p,1)});return}o++,u()},500)}),M.push(this)}},Ne=e=>{let t=e instanceof Element?"element":"id";return M.find(r=>r[t]===e)??null};function Me(e,t){let r=document.createElement("input");return r.type="hidden",r.name=e,r.value=t,r}function Ce(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function ue({template:e,title:t,description:r,dependencies:n,files:d,settings:u}){if(!se.includes(e)){let s=se.map(p=>`'${p}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${s}`)}let i=[],o=(s,p,h="")=>{i.push(Me(s,typeof p=="string"?p:h))};o("project[title]",t),typeof r=="string"&&r.length>0&&o("project[description]",r),o("project[template]",e,"javascript"),n&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):o("project[dependencies]",JSON.stringify(n))),u&&o("project[settings]",JSON.stringify(u)),Object.entries(d).forEach(([s,p])=>{o(`project[files][${Ce(s)}]`,p)});let l=document.createElement("form");return l.method="POST",l.setAttribute("style","display:none!important;"),l.append(...i),l}function Le(e,t){let r=ue(e);return r.action=U("/run",t),r.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${r.outerHTML}
  <script>document.getElementById('${r.id}').submit();<\/script>
</body>
</html>`}function Pe(e,t){let r=ue(e);r.action=W("/run",t),r.target=G(t),document.body.appendChild(r),r.submit(),document.body.removeChild(r)}function C(e){return e?.contentWindow?(Ne(e)??new D(e)).pending:Promise.reject("Provided element is not an iframe.")}function Re(e,t){Pe(e,t)}function $e(e,t){let r=W(`/edit/${e}`,t),n=G(t);window.open(r,n)}function ze(e,t){let r=W(`/github/${e}`,t),n=G(t);window.open(r,n)}function qe(e,t,r){let n=B(e),d=Le(t,r),u=document.createElement("iframe");return F(n,u,r),u.contentDocument?.write(d),C(u)}function De(e,t,r){let n=B(e),d=document.createElement("iframe");return d.src=U(`/edit/${t}`,r),F(n,d,r),C(d)}function We(e,t,r){let n=B(e),d=document.createElement("iframe");return d.src=U(`/github/${t}`,r),F(n,d,r),C(d)}var me={connect:C,embedGithubProject:We,embedProject:qe,embedProjectId:De,openGithubProject:ze,openProject:Re,openProjectId:$e};var ke=ee(he());var x=ee(ye());var K={$schema:"./node_modules/@angular/cli/lib/config/schema.json",cli:{analytics:"1e1de97b-a744-405a-8b5a-0397bb3d01ce"},newProjectRoot:"projects",projects:{demo:{architect:{build:{builder:"@angular-devkit/build-angular:application",configurations:{development:{extractLicenses:!1,namedChunks:!0,optimization:!1,sourceMap:!0},production:{aot:!0,extractLicenses:!0,namedChunks:!1,optimization:!0,outputHashing:"all",sourceMap:!1}},options:{assets:[],index:"src/index.html",browser:"src/main.ts",outputPath:"dist/demo",scripts:[],styles:["src/styles.css"],tsConfig:"tsconfig.json"}},serve:{builder:"@angular-devkit/build-angular:dev-server",configurations:{development:{buildTarget:"demo:build:development"},production:{buildTarget:"demo:build:production"}},defaultConfiguration:"development"}},prefix:"app",projectType:"application",root:"",schematics:{},sourceRoot:"src"}},version:1};var V=`import { ApplicationConfig } from '@angular/core';
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
`;var Q={compileOnSave:!1,compilerOptions:{outDir:"./dist/out-tsc",forceConsistentCasingInFileNames:!0,strict:!0,noImplicitOverride:!0,noPropertyAccessFromIndexSignature:!0,noImplicitReturns:!0,noFallthroughCasesInSwitch:!0,esModuleInterop:!0,sourceMap:!0,declaration:!1,downlevelIteration:!0,experimentalDecorators:!0,moduleResolution:"node",importHelpers:!0,target:"ES2015",module:"ES2022",useDefineForClassFields:!1,lib:["ES2022","dom"]},angularCompilerOptions:{enableI18nLegacyMessageIdFormat:!1,strictInjectionParameters:!0,strictInputAccessModifiers:!0,strictTemplates:!0}};var At=(()=>{let t=class t{constructor(){this.appSrv=O(oe),this.http=O(ie),this.document=O(re)}get themePath(){return`node_modules/@delon/theme/${this.appSrv.theme}.css`}genPackage({includeCli:n=!1}){let d=x.default.dependencies["@angular/core"],u=be;n&&(u.devDependencies={"@angular-devkit/build-angular":"^17.0.0","@angular/cli":"^17.0.0","@angular/compiler-cli":"^17.0.0","@types/node":"^18.18.0","ts-node":"~10.9.1",typescript:"~5.2.2","ng-alain":"~17.0.3"});let i=j(j({},x.default.dependencies),x.default.devDependencies);return["dependencies","devDependencies"].forEach(o=>{Object.keys(u[o]||{}).forEach(l=>{u[o][l]=l.startsWith("@delon")||l==="ng-alain"?`${x.default.version}`:i[l]||"*"})}),u.dependencies["@angular/core"]=d,u}get genStartupService(){return Se({ajvVersion:x.default.dependencies.ajv.substring(1)})}get genMock(){return{"_mock/user.ts":we,"_mock/index.ts":"export * from './user';"}}parseCode(n){let d="",u="",i=/selector:[ ]?(['|"|`])([^'"`]+)/g.exec(n);i&&(d=i[2]);let o=/export class ([^ {]+)/g.exec(n);return o&&(u=o[1]),{selector:d,componentName:u,html:['<base href="/">',`<${d}>loading</${d}>`,'<div id="VERSION" style="position: fixed; bottom: 8px; right: 8px; z-index: 8888;font-size: 11px; color: #aaa;"></div>'].join(`
`)}}attachStandalone(n){return n.includes("standalone: true")?n:`${n.replace("@Component({",`@Component({
  standalone: true,
`)}`}getYarnLock(){return T(this,null,function*(){if(this.yarnLock!=null)return this.yarnLock;try{let n=yield ne(this.http.get("./assets/yarn.lock.txt",{responseType:"text"}));return this.yarnLock=n,n}catch(n){console.warn(`Unable to load yarn.lock file: ${n}`)}return""})}openOnStackBlitz(n,d,u=!1){return T(this,null,function*(){d=this.attachStandalone(d);let i=this.parseCode(d),o=R(K);o.projects.demo.architect.build.options.styles.splice(0,0,this.themePath);let l=this.genPackage({includeCli:u});l.description=n;let s=j({"angular.json":`${JSON.stringify(o,null,2)}`,"tsconfig.json":`${JSON.stringify(Q,null,2)}`,"src/index.html":i.html,"src/main.ts":Z(i.componentName),"src/app/app.component.ts":d,"src/app/app.config.ts":V,"src/app/startup.service.ts":this.genStartupService,"src/styles.css":""},this.genMock);u&&(s[".stackblitzrc"]=JSON.stringify({installDependencies:!0,startCommand:"yarn start",env:{ENABLE_CJS_IMPORTS:!0}},null,2),s["yarn.lock"]=yield this.getYarnLock(),s["package.json"]=`${JSON.stringify(l,null,2)}`),me.openProject({title:"NG-ALAIN",description:"NG-ZORRO  admin panel front-end framework",tags:["ng-alain","@delon","NG-ZORRO","ng-zorro-antd","Ant Design","Angular","ng"],dependencies:j(j({},l.dependencies),l.devDependencies),files:s,template:u?"node":"angular-cli"},{openFile:"src/app/app.config.ts,src/app/app.component.ts"})})}openOnCodeSandbox(n,d,u=!1){return T(this,null,function*(){d=this.attachStandalone(d);let i=this.parseCode(d),o=this.genMock,l=R(K);l.projects.demo.architect.build.options.styles.splice(0,0,this.themePath);let s=this.genPackage({includeCli:u});s.description=n;let p={"package.json":{content:JSON.stringify(s,null,2),isBinary:!1},"angular.json":{content:`${JSON.stringify(l,null,2)}`,isBinary:!1},"tsconfig.json":{content:`${JSON.stringify(Q,null,2)}`,isBinary:!1},"src/index.html":{content:i.html,isBinary:!1},"src/main.ts":{content:Z(i.componentName),isBinary:!1},"src/app/app.config.ts":{content:V,isBinary:!1},"src/app/app.component.ts":{content:d,isBinary:!1},"src/app/startup.service.ts":{content:this.genStartupService,isBinary:!1},"src/styles.css":{content:"",isBinary:!1},"_mock/user.ts":{content:o["_mock/user.ts"],isBinary:!1},"_mock/index.ts":{content:o["_mock/index.ts"],isBinary:!1},"yarn.lock":{content:yield this.getYarnLock(),isBinary:!1}};u&&(p["README.md"]={content:ve,isBinary:!1}),Object.keys(Y).forEach(k=>{p[k]={content:Y[k],isBinary:!1}});let h=(0,ke.getParameters)({files:p,environment:"server"}),y=this.document.createElement("form"),v=this.document.createElement("input");y.method="POST",y.action="https://codesandbox.io/api/v1/sandboxes/define",y.target="_blank",v.name="parameters",v.value=h,y.appendChild(v),this.document.body.append(y),y.submit(),this.document.body.removeChild(y)})}};t.\u0275fac=function(d){return new(d||t)},t.\u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{ye as a,oe as b,At as c};
