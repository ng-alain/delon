import{$c as P,Dc as re,a as j,b as Q,ca as I,cc as ne,d as A,f as X,g as T,ga as O,m as ee,v as te}from"./chunk-KLO4GQEX.js";var fe=A((Ze,M)=>{"use strict";var G=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",n={};function d(i,r){if(!n[i]){n[i]={};for(var p=0;p<i.length;p++)n[i][i.charAt(p)]=p}return n[i][r]}var m={compressToBase64:function(i){if(i==null)return"";var r=m._compress(i,6,function(p){return t.charAt(p)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(i){return i==null?"":i==""?null:m._decompress(i.length,32,function(r){return d(t,i.charAt(r))})},compressToUTF16:function(i){return i==null?"":m._compress(i,15,function(r){return e(r+32)})+" "},decompressFromUTF16:function(i){return i==null?"":i==""?null:m._decompress(i.length,16384,function(r){return i.charCodeAt(r)-32})},compressToUint8Array:function(i){for(var r=m.compress(i),p=new Uint8Array(r.length*2),s=0,a=r.length;s<a;s++){var h=r.charCodeAt(s);p[s*2]=h>>>8,p[s*2+1]=h%256}return p},decompressFromUint8Array:function(i){if(i==null)return m.decompress(i);for(var r=new Array(i.length/2),p=0,s=r.length;p<s;p++)r[p]=i[p*2]*256+i[p*2+1];var a=[];return r.forEach(function(h){a.push(e(h))}),m.decompress(a.join(""))},compressToEncodedURIComponent:function(i){return i==null?"":m._compress(i,6,function(r){return o.charAt(r)})},decompressFromEncodedURIComponent:function(i){return i==null?"":i==""?null:(i=i.replace(/ /g,"+"),m._decompress(i.length,32,function(r){return d(o,i.charAt(r))}))},compress:function(i){return m._compress(i,16,function(r){return e(r)})},_compress:function(i,r,p){if(i==null)return"";var s,a,h={},y={},v="",k="",w="",b=2,_=3,f=2,g=[],c=0,l=0,S;for(S=0;S<i.length;S+=1)if(v=i.charAt(S),Object.prototype.hasOwnProperty.call(h,v)||(h[v]=_++,y[v]=!0),k=w+v,Object.prototype.hasOwnProperty.call(h,k))w=k;else{if(Object.prototype.hasOwnProperty.call(y,w)){if(w.charCodeAt(0)<256){for(s=0;s<f;s++)c=c<<1,l==r-1?(l=0,g.push(p(c)),c=0):l++;for(a=w.charCodeAt(0),s=0;s<8;s++)c=c<<1|a&1,l==r-1?(l=0,g.push(p(c)),c=0):l++,a=a>>1}else{for(a=1,s=0;s<f;s++)c=c<<1|a,l==r-1?(l=0,g.push(p(c)),c=0):l++,a=0;for(a=w.charCodeAt(0),s=0;s<16;s++)c=c<<1|a&1,l==r-1?(l=0,g.push(p(c)),c=0):l++,a=a>>1}b--,b==0&&(b=Math.pow(2,f),f++),delete y[w]}else for(a=h[w],s=0;s<f;s++)c=c<<1|a&1,l==r-1?(l=0,g.push(p(c)),c=0):l++,a=a>>1;b--,b==0&&(b=Math.pow(2,f),f++),h[k]=_++,w=String(v)}if(w!==""){if(Object.prototype.hasOwnProperty.call(y,w)){if(w.charCodeAt(0)<256){for(s=0;s<f;s++)c=c<<1,l==r-1?(l=0,g.push(p(c)),c=0):l++;for(a=w.charCodeAt(0),s=0;s<8;s++)c=c<<1|a&1,l==r-1?(l=0,g.push(p(c)),c=0):l++,a=a>>1}else{for(a=1,s=0;s<f;s++)c=c<<1|a,l==r-1?(l=0,g.push(p(c)),c=0):l++,a=0;for(a=w.charCodeAt(0),s=0;s<16;s++)c=c<<1|a&1,l==r-1?(l=0,g.push(p(c)),c=0):l++,a=a>>1}b--,b==0&&(b=Math.pow(2,f),f++),delete y[w]}else for(a=h[w],s=0;s<f;s++)c=c<<1|a&1,l==r-1?(l=0,g.push(p(c)),c=0):l++,a=a>>1;b--,b==0&&(b=Math.pow(2,f),f++)}for(a=2,s=0;s<f;s++)c=c<<1|a&1,l==r-1?(l=0,g.push(p(c)),c=0):l++,a=a>>1;for(;;)if(c=c<<1,l==r-1){g.push(p(c));break}else l++;return g.join("")},decompress:function(i){return i==null?"":i==""?null:m._decompress(i.length,32768,function(r){return i.charCodeAt(r)})},_decompress:function(i,r,p){var s=[],a,h=4,y=4,v=3,k="",w=[],b,_,f,g,c,l,S,u={val:p(0),position:r,index:1};for(b=0;b<3;b+=1)s[b]=b;for(f=0,c=Math.pow(2,2),l=1;l!=c;)g=u.val&u.position,u.position>>=1,u.position==0&&(u.position=r,u.val=p(u.index++)),f|=(g>0?1:0)*l,l<<=1;switch(a=f){case 0:for(f=0,c=Math.pow(2,8),l=1;l!=c;)g=u.val&u.position,u.position>>=1,u.position==0&&(u.position=r,u.val=p(u.index++)),f|=(g>0?1:0)*l,l<<=1;S=e(f);break;case 1:for(f=0,c=Math.pow(2,16),l=1;l!=c;)g=u.val&u.position,u.position>>=1,u.position==0&&(u.position=r,u.val=p(u.index++)),f|=(g>0?1:0)*l,l<<=1;S=e(f);break;case 2:return""}for(s[3]=S,_=S,w.push(S);;){if(u.index>i)return"";for(f=0,c=Math.pow(2,v),l=1;l!=c;)g=u.val&u.position,u.position>>=1,u.position==0&&(u.position=r,u.val=p(u.index++)),f|=(g>0?1:0)*l,l<<=1;switch(S=f){case 0:for(f=0,c=Math.pow(2,8),l=1;l!=c;)g=u.val&u.position,u.position>>=1,u.position==0&&(u.position=r,u.val=p(u.index++)),f|=(g>0?1:0)*l,l<<=1;s[y++]=e(f),S=y-1,h--;break;case 1:for(f=0,c=Math.pow(2,16),l=1;l!=c;)g=u.val&u.position,u.position>>=1,u.position==0&&(u.position=r,u.val=p(u.index++)),f|=(g>0?1:0)*l,l<<=1;s[y++]=e(f),S=y-1,h--;break;case 2:return w.join("")}if(h==0&&(h=Math.pow(2,v),v++),s[S])k=s[S];else if(S===y)k=_+_.charAt(0);else return null;w.push(k),s[y++]=_+k.charAt(0),h--,_=k,h==0&&(h=Math.pow(2,v),v++)}}};return m}();typeof define=="function"&&define.amd?define(function(){return G}):typeof M<"u"&&M!=null?M.exports=G:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return G})});var ge=A(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});var We=fe();function Ue(e){return We.compressToBase64(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Be(e){return Ue(JSON.stringify(e))}H.getParameters=Be});var he=A(L=>{"use strict";L.__esModule=!0;L.getParameters=void 0;var Fe=ge();L.getParameters=Fe.getParameters});var Se=A((ct,Ge)=>{Ge.exports={name:"delon",version:"17.0.5",description:"Delon is a set of essential modules for NG-ALAIN.",keywords:["delon","ng-alain","alain","antd","ng-zorro-antd","angular"],author:"cipchk <cipchk@qq.com>",license:"MIT",bugs:{url:"https://github.com/ng-alain/ng-alain/issues"},repository:{type:"git",url:"git+https://github.com/ng-alain/delon.git"},homepage:"https://ng-alain.com",engines:{node:"^18.13.0"},scripts:{"ng-high-memory":"node --max_old_space_size=8000 ./node_modules/@angular/cli/bin/ng",prepare:"husky install",start:"npm run site:gen && ng s -o --hmr",lint:"bash scripts/ci/lint.sh -ts -less","lint:ts":"eslint --cache . --ext .ts,.html","lint:fix":"eslint --cache . --ext .ts,.html --fix","lint:style":"npx stylelint 'packages/**/*.less'",test:"ng test --no-progress --browsers=ChromeHeadlessCI --code-coverage --no-watch","test:cli":"bash scripts/ci/build-schematics.sh -t -clone","test:integration":"bash scripts/ci/build-schematics.sh -b -t -clone -integration",build:"bash scripts/ci/build.sh",build_artifacts:"bash scripts/ci/build-artifacts.sh",analyze:"npm run ng-high-memory build -- --source-map","analyze:view":"source-map-explorer src/dist/browser/*.js","site:gen":"node scripts/site/main init && ng-alain-plugin-theme -t=themeCss && ng-alain-plugin-theme -t=colorLess","site:build":"npm run site:gen && ng b site && npm run site:ngsw && npm run site:minify && npm run site:sitemap && npm run site:helper","site:helper":"bash scripts/ci/helper.sh","site:minify":"node scripts/build/minify.js","site:sitemap":"node scripts/build/sitemap.js","site:ngsw":"node scripts/build/ngsw.js",changelog:"conventional-changelog -p angular -i CHANGELOG.md -s --pkg package.json","pre-publish":"node scripts/publish/publish.js && node scripts/publish/publish-scaffold.js","publish:next":"bash scripts/publish/publish.sh -next",publish:"bash scripts/publish/publish.sh","sync-scaffold-version":"node scripts/publish/sync-scaffold-version.js",postinstall:"ng-less-javascript-enabled-patch"},dependencies:{"@angular/animations":"^17.0.0","@angular/cdk":"^17.0.0","@angular/common":"^17.0.0","@angular/compiler":"^17.0.0","@angular/core":"^17.0.0","@angular/elements":"^17.0.0","@angular/forms":"^17.0.0","@angular/platform-browser":"^17.0.0","@angular/platform-browser-dynamic":"^17.0.0","@angular/platform-server":"^17.0.0","@angular/router":"^17.0.0","@angular/service-worker":"^17.0.0","@angular/ssr":"^17.0.0","@antv/data-set":"^0.11.8","@antv/g2":"^4.2.10","@github/hotkey":"^2.3.0","@ng-util/monaco-editor":"^17.0.0","@stackblitz/sdk":"^1.9.0","@webcomponents/custom-elements":"^1.6.0",ajv:"^8.12.0","ajv-formats":"^2.1.1",aos:"^3.0.0-beta.6",codesandbox:"^2.2.3",echarts:"^5.4.3",express:"^4.18.2",extend:"^3.0.2","file-saver":"^2.0.5",isutf8:"^4.0.0","ng-antd-color-picker":"^1.1.0","ng-github-button":"^17.0.0","ng-zorro-antd":"^17.0.1","ngx-countdown":"^17.0.0","ngx-highlight-js":"^17.0.0","ngx-tinymce":"^17.0.0",qrious:"^4.0.2",rxjs:"~7.8.0",tslib:"^2.3.0","zone.js":"~0.14.2"},devDependencies:{"@angular-devkit/build-angular":"^17.0.0","@angular-eslint/builder":"^17.0.0","@angular-eslint/eslint-plugin":"^17.0.0","@angular-eslint/eslint-plugin-template":"^17.0.0","@angular-eslint/schematics":"^17.0.0","@angular-eslint/template-parser":"^17.0.0","@angular/cli":"^17.0.0","@angular/compiler-cli":"^17.0.0","@angular/language-service":"^17.0.0","@commitlint/cli":"^17.8.1","@commitlint/config-angular":"^17.8.1","@types/aos":"^3.0.7","@types/deep-extend":"^0.6.2","@types/express":"^4.17.17","@types/extend":"^3.0.4","@types/file-saver":"^2.0.7","@types/fs-extra":"^11.0.4","@types/jasmine":"~5.1.0","@types/jasminewd2":"~2.0.13","@types/mockjs":"^1.0.10","@types/node":"^18.18.0","@types/parse5":"^7.0.0","@typescript-eslint/eslint-plugin":"^6.10.0","@typescript-eslint/parser":"^6.10.0",chalk:"^5.3.0",codecov:"^3.8.3","conventional-changelog-cli":"^4.1.0",eslint:"^8.53.0","eslint-config-prettier":"~9.0.0","eslint-plugin-deprecation":"~2.0.0","eslint-plugin-import":"~2.29.0","eslint-plugin-jsdoc":"~46.5.1","eslint-plugin-prefer-arrow":"~1.2.3","eslint-plugin-prettier":"~5.0.1","fs-extra":"^11.1.1","html-minifier-terser":"^7.2.0",husky:"^8.0.3",jasmine:"^5.1.0","jasmine-core":"~5.1.0","jasmine-spec-reporter":"^7.0.0","jsonml.js":"^0.1.0",jszip:"^3.10.1",karma:"~6.4.0","karma-chrome-launcher":"~3.2.0","karma-coverage":"~2.2.0","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.1.0","karma-junit-reporter":"^2.0.1","karma-parallel":"^0.3.1","karma-spec-reporter":"0.0.36","karma-summary-reporter":"^3.1.1","karma-viewport":"^1.0.9","klaw-sync":"^6.0.0","less-bundle-promise":"^1.0.11","less-plugin-clean-css":"^1.5.1","less-plugin-npm-import":"^2.1.0","less-vars-to-js":"^1.3.0","lint-staged":"^14.0.1","mark-twain":"^2.0.3",mockjs:"^1.1.0",mustache:"^4.2.0","ng-alain-plugin-theme":"^16.0.0","ng-alain-sts":"^0.0.2","ng-less-javascript-enabled-patch":"17.0.0","ng-packagr":"^17.0.0",parse5:"^7.1.2",plyr:"^3.7.8",prettier:"^3.1.0","readline-sync":"^1.4.10",screenfull:"^6.0.2",sitemap:"^7.1.1","source-map-explorer":"^2.5.3",stream:"0.0.2",stylelint:"^15.11.0","stylelint-config-clean-order":"^5.2.0","stylelint-config-standard":"^34.0.0","stylelint-declaration-block-no-ignored-properties":"^2.7.0","swagger-typescript-api":"^12.0.4",terser:"^5.19.2","ts-node":"~10.9.1","tsconfig-paths":"^4.2.0",typescript:"~5.2.2",xlsx:"^0.18.5"},"lint-staged":{"(schematics|scripts|packages)/**/!(tslint-rules|testing)/!(polyfills).{html,ts}":["eslint --fix"],"packages/**/*.less":["npm run lint:style"]}}});var ie=(()=>{let t=class t{constructor(){this.theme="default",this.theme$=new ee(1)}setTheme(n){this.theme=n,this.theme$.next(n)}};t.\u0275fac=function(d){return new(d||t)},t.\u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var _e="https://stackblitz.com",oe=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],Ee=["project","search","ports","settings"],xe=["light","dark"],Ae=["editor","preview"],se={clickToLoad:e=>E("ctl",e),devToolsHeight:e=>ae("devtoolsheight",e),forceEmbedLayout:e=>E("embed",e),hideDevTools:e=>E("hidedevtools",e),hideExplorer:e=>E("hideExplorer",e),hideNavigation:e=>E("hideNavigation",e),openFile:e=>ce("file",e),showSidebar:e=>Te("showSidebar",e),sidebarView:e=>R("sidebarView",e,Ee),startScript:e=>ce("startScript",e),terminalHeight:e=>ae("terminalHeight",e),theme:e=>R("theme",e,xe),view:e=>R("view",e,Ae),zenMode:e=>E("zenMode",e)};function le(e={}){let t=Object.entries(e).map(([o,n])=>n!=null&&se.hasOwnProperty(o)?se[o](n):"").filter(Boolean);return t.length?`?${t.join("&")}`:""}function E(e,t){return t===!0?`${e}=1`:""}function Te(e,t){return typeof t=="boolean"?`${e}=${t?"1":"0"}`:""}function ae(e,t){if(typeof t=="number"&&!Number.isNaN(t)){let o=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(o))}`}return""}function R(e,t="",o=[]){return o.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function ce(e,t){return(Array.isArray(t)?t:[t]).filter(n=>typeof n=="string"&&n.trim()!=="").map(n=>`${e}=${encodeURIComponent(n)}`).join("&")}function pe(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function q(e,t){return`${de(t)}${e}${le(t)}`}function W(e,t){let o={forceEmbedLayout:!0};return t&&typeof t=="object"&&Object.assign(o,t),`${de(o)}${e}${le(o)}`}function de(e={}){return(typeof e.origin=="string"?e.origin:_e).replace(/\/$/,"")}function U(e,t,o){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),Ie(t,o),e.replaceWith(t)}function B(e){if(typeof e=="string"){let t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function F(e){return e&&e.newWindow===!1?"_self":"_blank"}function Ie(e,t={}){let o=Object.hasOwnProperty.call(t,"height")?`${t.height}`:"300",n=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",o),n?e.setAttribute("width",n):e.setAttribute("style","width:100%;")}var $=class{constructor(t){this.pending={},this.port=t,this.port.onmessage=this.messageListener.bind(this)}request({type:t,payload:o}){return new Promise((n,d)=>{let m=pe();this.pending[m]={resolve:n,reject:d},this.port.postMessage({type:t,payload:Q(j({},o),{__reqid:m})})})}messageListener(t){if(typeof t.data.payload?.__reqid!="string")return;let{type:o,payload:n}=t.data,{__reqid:d,__success:m,__error:i}=n;this.pending[d]&&(m?this.pending[d].resolve(this.cleanResult(n)):this.pending[d].reject(i?`${o}: ${i}`:o),delete this.pending[d])}cleanResult(t){let o=j({},t);return delete o.__reqid,delete o.__success,delete o.__error,Object.keys(o).length?o:null}},D=class{constructor(t,o){this.editor={openFile:n=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:n}}),setCurrentFile:n=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:n}}),setTheme:n=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:n}}),setView:n=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:n}}),showSidebar:(n=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:n}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(n=>n?.url??null),setUrl:(n="/")=>{if(typeof n!="string"||!n.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${n}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:n}})}},this._rdc=new $(t),Object.defineProperty(this.preview,"origin",{value:typeof o.previewOrigin=="string"?o.previewOrigin:null,writable:!1})}applyFsDiff(t){let o=n=>n!==null&&typeof n=="object";if(!o(t)||!o(t.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(t.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:t})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}},N=[],z=class{constructor(t){this.id=pe(),this.element=t,this.pending=new Promise((o,n)=>{let d=({data:s,ports:a})=>{s?.action==="SDK_INIT_SUCCESS"&&s.id===this.id&&(this.vm=new D(a[0],s.payload),o(this.vm),i())},m=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function i(){window.clearInterval(p),window.removeEventListener("message",d)}window.addEventListener("message",d),m();let r=0,p=window.setInterval(()=>{if(this.vm){i();return}if(r>=20){i(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),N.forEach((s,a)=>{s.id===this.id&&N.splice(a,1)});return}r++,m()},500)}),N.push(this)}},Oe=e=>{let t=e instanceof Element?"element":"id";return N.find(o=>o[t]===e)??null};function Ne(e,t){let o=document.createElement("input");return o.type="hidden",o.name=e,o.value=t,o}function Ce(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function ue({template:e,title:t,description:o,dependencies:n,files:d,settings:m}){if(!oe.includes(e)){let s=oe.map(a=>`'${a}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${s}`)}let i=[],r=(s,a,h="")=>{i.push(Ne(s,typeof a=="string"?a:h))};r("project[title]",t),typeof o=="string"&&o.length>0&&r("project[description]",o),r("project[template]",e,"javascript"),n&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):r("project[dependencies]",JSON.stringify(n))),m&&r("project[settings]",JSON.stringify(m)),Object.entries(d).forEach(([s,a])=>{r(`project[files][${Ce(s)}]`,a)});let p=document.createElement("form");return p.method="POST",p.setAttribute("style","display:none!important;"),p.append(...i),p}function Me(e,t){let o=ue(e);return o.action=W("/run",t),o.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${o.outerHTML}
  <script>document.getElementById('${o.id}').submit();<\/script>
</body>
</html>`}function Le(e,t){let o=ue(e);o.action=q("/run",t),o.target=F(t),document.body.appendChild(o),o.submit(),document.body.removeChild(o)}function C(e){return e?.contentWindow?(Oe(e)??new z(e)).pending:Promise.reject("Provided element is not an iframe.")}function Pe(e,t){Le(e,t)}function Re(e,t){let o=q(`/edit/${e}`,t),n=F(t);window.open(o,n)}function $e(e,t){let o=q(`/github/${e}`,t),n=F(t);window.open(o,n)}function De(e,t,o){let n=B(e),d=Me(t,o),m=document.createElement("iframe");return U(n,m,o),m.contentDocument?.write(d),C(m)}function ze(e,t,o){let n=B(e),d=document.createElement("iframe");return d.src=W(`/edit/${t}`,o),U(n,d,o),C(d)}function qe(e,t,o){let n=B(e),d=document.createElement("iframe");return d.src=W(`/github/${t}`,o),U(n,d,o),C(d)}var me={connect:C,embedGithubProject:qe,embedProject:De,embedProjectId:ze,openGithubProject:$e,openProject:Pe,openProjectId:Re};var ke=X(he());var J={$schema:"./node_modules/@angular/cli/lib/config/schema.json",cli:{analytics:"1e1de97b-a744-405a-8b5a-0397bb3d01ce"},newProjectRoot:"projects",projects:{demo:{root:"",sourceRoot:"src",projectType:"application",prefix:"app",architect:{build:{builder:"@angular-devkit/build-angular:application",configurations:{development:{extractLicenses:!1,namedChunks:!0,optimization:!1,sourceMap:!0},production:{aot:!0,extractLicenses:!0,namedChunks:!1,optimization:!0,outputHashing:"all",sourceMap:!1}},options:{assets:[],index:"src/index.html",browser:"src/main.ts",outputPath:"dist/demo",scripts:[],styles:["src/styles.css"],tsConfig:"tsconfig.json"}},serve:{builder:"@angular-devkit/build-angular:dev-server",configurations:{development:{buildTarget:"demo:build:development"},production:{buildTarget:"demo:build:production"}},defaultConfiguration:"development"}}}},version:1};var K=`import { ApplicationConfig } from '@angular/core';
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
`;var V=e=>`import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { ${e} } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(${e}, appConfig).catch((err) =>
  console.error(err)
);
`;var ye=`import { MockStatusError, MockRequest, r } from '@delon/mock';
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
};`;var we={name:"ng-alain",description:"",tags:["NG-ALAIN"],version:"0.0.0",scripts:{ng:"ng",start:"ng serve",build:"ng build"},private:!0,dependencies:{rxjs:"~7.8.0",tslib:"^2.3.0","zone.js":"~0.14.2","@angular/core":"^17.0.0","@angular/forms":"^17.0.0","@angular/common":"^17.0.0","@angular/router":"^17.0.0","@angular/compiler":"^17.0.0","@angular/animations":"^17.0.0","@angular/platform-browser":"^17.0.0","@delon/theme":"~17.0.3","@delon/abc":"~17.0.3","@delon/chart":"~17.0.3","@delon/acl":"~17.0.3","@delon/auth":"~17.0.3","@delon/cache":"~17.0.3","@delon/mock":"~17.0.3","@delon/form":"~17.0.3","@delon/util":"~17.0.3","ng-antd-color-picker":"^0.0.2"},devDependencies:{"@angular-devkit/build-angular":"^17.0.0","@angular/cli":"^17.0.0","@angular/compiler-cli":"^17.0.0","@types/node":"^18.18.0","ts-node":"~10.9.1",typescript:"~5.2.2","ng-alain":"~17.0.3"}};var be=`# Angular CLI Template

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
`;var Z={"sandbox.config.json":JSON.stringify({template:"node"},null,2),".codesandbox/tasks.json":`{
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
  `};var ve=e=>`import { APP_INITIALIZER, Injectable, inject, Provider } from '@angular/core';
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
`;var Y={compileOnSave:!1,compilerOptions:{baseUrl:"./",outDir:"./dist/out-tsc",forceConsistentCasingInFileNames:!0,strict:!0,noImplicitOverride:!0,noPropertyAccessFromIndexSignature:!1,noImplicitReturns:!0,noFallthroughCasesInSwitch:!0,sourceMap:!0,declaration:!1,downlevelIteration:!0,experimentalDecorators:!0,moduleResolution:"node",importHelpers:!0,target:"ES2022",module:"es2020",lib:["es2020","dom"],types:[],allowSyntheticDefaultImports:!0,useDefineForClassFields:!1},files:["src/main.ts"],include:["src/**/*.d.ts"],angularCompilerOptions:{enableI18nLegacyMessageIdFormat:!1,strictInjectionParameters:!0,strictInputAccessModifiers:!0,strictTemplates:!0}};var x=X(Se());var xt=(()=>{let t=class t{constructor(){this.appSrv=O(ie),this.http=O(re),this.document=O(ne)}get themePath(){return`node_modules/@delon/theme/${this.appSrv.theme}.css`}genPackage({dependencies:n=[],devDependencies:d=[],includeCli:m=!1}){let i=x.default.dependencies["@angular/core"],r=we;["ng-zorro-antd","ng-antd-color-picker","@delon/theme","@delon/abc","@delon/chart","@delon/acl","@delon/auth","@delon/cache","@delon/mock","@delon/form","@delon/util",...n].forEach(s=>r.dependencies[s]="*"),d.forEach(s=>r.devDependencies[s]="*");let p=j(j({},x.default.dependencies),x.default.devDependencies);return["dependencies","devDependencies"].forEach(s=>{Object.keys(r[s]).forEach(a=>{r[s][a]=a.startsWith("@delon")||a==="ng-alain"?`~${x.default.version}`:p[a]||"*"})}),r.dependencies["@angular/core"]=i,r}get genStartupService(){return ve({ajvVersion:x.default.dependencies.ajv.substring(1)})}get genMock(){return{"_mock/user.ts":ye,"_mock/index.ts":"export * from './user';"}}parseCode(n){let d="",m="",i=/selector:[ ]?(['|"|`])([^'"`]+)/g.exec(n);i&&(d=i[2]);let r=/export class ([^ {]+)/g.exec(n);return r&&(m=r[1]),{selector:d,componentName:m,html:['<base href="/">',`<${d}>loading</${d}>`,'<div id="VERSION" style="position: fixed; bottom: 8px; right: 8px; z-index: 8888;font-size: 11px; color: #aaa;"></div>'].join(`
`)}}attachStandalone(n){return n.includes("standalone: true")?n:`${n.replace("@Component({",`@Component({
  standalone: true,
`)}`}getYarnLock(){return T(this,null,function*(){if(this.yarnLock!=null)return this.yarnLock;try{let n=yield te(this.http.get("./assets/yarn.lock.txt",{responseType:"text"}));return this.yarnLock=n,n}catch(n){console.warn(`Unable to load yarn.lock file: ${n}`)}return""})}openOnStackBlitz(n,d){return T(this,null,function*(){d=this.attachStandalone(d);let m=this.parseCode(d),i=P(J);i.projects.demo.architect.build.options.styles.splice(0,0,this.themePath);let r=this.genPackage({dependencies:[],devDependencies:[],includeCli:!1});r.description=n,me.openProject({title:"NG-ALAIN",description:"NG-ZORRO  admin panel front-end framework",tags:["ng-alain","@delon","NG-ZORRO","ng-zorro-antd","Ant Design","Angular","ng"],dependencies:j(j({},r.dependencies),r.devDependencies),files:j({".stackblitzrc":JSON.stringify({installDependencies:!0,startCommand:"yarn start",env:{ENABLE_CJS_IMPORTS:!0}},null,2),"yarn.lock":yield this.getYarnLock(),"angular.json":`${JSON.stringify(i,null,2)}`,"tsconfig.json":`${JSON.stringify(Y,null,2)}`,"package.json":`${JSON.stringify(r,null,2)}`,"src/index.html":m.html,"src/main.ts":V(m.componentName),"src/app/app.component.ts":d,"src/app/app.config.ts":K,"src/app/startup.service.ts":this.genStartupService,"src/styles.css":""},this.genMock),template:"node"},{openFile:"src/app/app.config.ts,src/app/app.component.ts"})})}openOnCodeSandbox(n,d,m=!1){return T(this,null,function*(){d=this.attachStandalone(d);let i=this.parseCode(d),r=this.genMock,p=P(J);p.projects.demo.architect.build.options.styles.splice(0,0,this.themePath);let s=this.genPackage({dependencies:[],devDependencies:[],includeCli:m});s.description=n;let a={"package.json":{content:JSON.stringify(s,null,2),isBinary:!1},"angular.json":{content:`${JSON.stringify(p,null,2)}`,isBinary:!1},"tsconfig.json":{content:`${JSON.stringify(Y,null,2)}`,isBinary:!1},"src/index.html":{content:i.html,isBinary:!1},"src/main.ts":{content:V(i.componentName),isBinary:!1},"src/app/app.config.ts":{content:K,isBinary:!1},"src/app/app.component.ts":{content:d,isBinary:!1},"src/app/startup.service.ts":{content:this.genStartupService,isBinary:!1},"src/styles.css":{content:"",isBinary:!1},"_mock/user.ts":{content:r["_mock/user.ts"],isBinary:!1},"_mock/index.ts":{content:r["_mock/index.ts"],isBinary:!1},"yarn.lock":{content:yield this.getYarnLock(),isBinary:!1}};m&&(a["README.md"]={content:be,isBinary:!1}),Object.keys(Z).forEach(k=>{a[k]={content:Z[k],isBinary:!1}});let h=(0,ke.getParameters)({files:a,environment:"server"}),y=this.document.createElement("form"),v=this.document.createElement("input");y.method="POST",y.action="https://codesandbox.io/api/v1/sandboxes/define",y.target="_blank",v.name="parameters",v.value=h,y.appendChild(v),this.document.body.append(y),y.submit(),this.document.body.removeChild(y)})}};t.\u0275fac=function(d){return new(d||t)},t.\u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{Se as a,ie as b,xt as c};
