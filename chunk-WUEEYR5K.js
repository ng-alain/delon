import{Fd as $,a as k,b as Y,ba as T,d as A,f as ee,fa as P,m as te,pa as ne}from"./chunk-MX2XXWDT.js";var de=A((Ve,C)=>{"use strict";var H=(function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",r={};function m(i,o){if(!r[i]){r[i]={};for(var p=0;p<i.length;p++)r[i][i.charAt(p)]=p}return r[i][o]}var u={compressToBase64:function(i){if(i==null)return"";var o=u._compress(i,6,function(p){return t.charAt(p)});switch(o.length%4){default:case 0:return o;case 1:return o+"===";case 2:return o+"==";case 3:return o+"="}},decompressFromBase64:function(i){return i==null?"":i==""?null:u._decompress(i.length,32,function(o){return m(t,i.charAt(o))})},compressToUTF16:function(i){return i==null?"":u._compress(i,15,function(o){return e(o+32)})+" "},decompressFromUTF16:function(i){return i==null?"":i==""?null:u._decompress(i.length,16384,function(o){return i.charCodeAt(o)-32})},compressToUint8Array:function(i){for(var o=u.compress(i),p=new Uint8Array(o.length*2),s=0,a=o.length;s<a;s++){var h=o.charCodeAt(s);p[s*2]=h>>>8,p[s*2+1]=h%256}return p},decompressFromUint8Array:function(i){if(i==null)return u.decompress(i);for(var o=new Array(i.length/2),p=0,s=o.length;p<s;p++)o[p]=i[p*2]*256+i[p*2+1];var a=[];return o.forEach(function(h){a.push(e(h))}),u.decompress(a.join(""))},compressToEncodedURIComponent:function(i){return i==null?"":u._compress(i,6,function(o){return n.charAt(o)})},decompressFromEncodedURIComponent:function(i){return i==null?"":i==""?null:(i=i.replace(/ /g,"+"),u._decompress(i.length,32,function(o){return m(n,i.charAt(o))}))},compress:function(i){return u._compress(i,16,function(o){return e(o)})},_compress:function(i,o,p){if(i==null)return"";var s,a,h={},b={},S="",j="",y="",w=2,_=3,g=2,f=[],c=0,l=0,v;for(v=0;v<i.length;v+=1)if(S=i.charAt(v),Object.prototype.hasOwnProperty.call(h,S)||(h[S]=_++,b[S]=!0),j=y+S,Object.prototype.hasOwnProperty.call(h,j))y=j;else{if(Object.prototype.hasOwnProperty.call(b,y)){if(y.charCodeAt(0)<256){for(s=0;s<g;s++)c=c<<1,l==o-1?(l=0,f.push(p(c)),c=0):l++;for(a=y.charCodeAt(0),s=0;s<8;s++)c=c<<1|a&1,l==o-1?(l=0,f.push(p(c)),c=0):l++,a=a>>1}else{for(a=1,s=0;s<g;s++)c=c<<1|a,l==o-1?(l=0,f.push(p(c)),c=0):l++,a=0;for(a=y.charCodeAt(0),s=0;s<16;s++)c=c<<1|a&1,l==o-1?(l=0,f.push(p(c)),c=0):l++,a=a>>1}w--,w==0&&(w=Math.pow(2,g),g++),delete b[y]}else for(a=h[y],s=0;s<g;s++)c=c<<1|a&1,l==o-1?(l=0,f.push(p(c)),c=0):l++,a=a>>1;w--,w==0&&(w=Math.pow(2,g),g++),h[j]=_++,y=String(S)}if(y!==""){if(Object.prototype.hasOwnProperty.call(b,y)){if(y.charCodeAt(0)<256){for(s=0;s<g;s++)c=c<<1,l==o-1?(l=0,f.push(p(c)),c=0):l++;for(a=y.charCodeAt(0),s=0;s<8;s++)c=c<<1|a&1,l==o-1?(l=0,f.push(p(c)),c=0):l++,a=a>>1}else{for(a=1,s=0;s<g;s++)c=c<<1|a,l==o-1?(l=0,f.push(p(c)),c=0):l++,a=0;for(a=y.charCodeAt(0),s=0;s<16;s++)c=c<<1|a&1,l==o-1?(l=0,f.push(p(c)),c=0):l++,a=a>>1}w--,w==0&&(w=Math.pow(2,g),g++),delete b[y]}else for(a=h[y],s=0;s<g;s++)c=c<<1|a&1,l==o-1?(l=0,f.push(p(c)),c=0):l++,a=a>>1;w--,w==0&&(w=Math.pow(2,g),g++)}for(a=2,s=0;s<g;s++)c=c<<1|a&1,l==o-1?(l=0,f.push(p(c)),c=0):l++,a=a>>1;for(;;)if(c=c<<1,l==o-1){f.push(p(c));break}else l++;return f.join("")},decompress:function(i){return i==null?"":i==""?null:u._decompress(i.length,32768,function(o){return i.charCodeAt(o)})},_decompress:function(i,o,p){var s=[],a,h=4,b=4,S=3,j="",y=[],w,_,g,f,c,l,v,d={val:p(0),position:o,index:1};for(w=0;w<3;w+=1)s[w]=w;for(g=0,c=Math.pow(2,2),l=1;l!=c;)f=d.val&d.position,d.position>>=1,d.position==0&&(d.position=o,d.val=p(d.index++)),g|=(f>0?1:0)*l,l<<=1;switch(a=g){case 0:for(g=0,c=Math.pow(2,8),l=1;l!=c;)f=d.val&d.position,d.position>>=1,d.position==0&&(d.position=o,d.val=p(d.index++)),g|=(f>0?1:0)*l,l<<=1;v=e(g);break;case 1:for(g=0,c=Math.pow(2,16),l=1;l!=c;)f=d.val&d.position,d.position>>=1,d.position==0&&(d.position=o,d.val=p(d.index++)),g|=(f>0?1:0)*l,l<<=1;v=e(g);break;case 2:return""}for(s[3]=v,_=v,y.push(v);;){if(d.index>i)return"";for(g=0,c=Math.pow(2,S),l=1;l!=c;)f=d.val&d.position,d.position>>=1,d.position==0&&(d.position=o,d.val=p(d.index++)),g|=(f>0?1:0)*l,l<<=1;switch(v=g){case 0:for(g=0,c=Math.pow(2,8),l=1;l!=c;)f=d.val&d.position,d.position>>=1,d.position==0&&(d.position=o,d.val=p(d.index++)),g|=(f>0?1:0)*l,l<<=1;s[b++]=e(g),v=b-1,h--;break;case 1:for(g=0,c=Math.pow(2,16),l=1;l!=c;)f=d.val&d.position,d.position>>=1,d.position==0&&(d.position=o,d.val=p(d.index++)),g|=(f>0?1:0)*l,l<<=1;s[b++]=e(g),v=b-1,h--;break;case 2:return y.join("")}if(h==0&&(h=Math.pow(2,S),S++),s[v])j=s[v];else if(v===b)j=_+_.charAt(0);else return null;y.push(j),s[b++]=_+j.charAt(0),h--,_=j,h==0&&(h=Math.pow(2,S),S++)}}};return u})();typeof define=="function"&&define.amd?define(function(){return H}):typeof C<"u"&&C!=null?C.exports=H:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return H})});var ue=A(J=>{"use strict";Object.defineProperty(J,"__esModule",{value:!0});var qe=de();function We(e){return qe.compressToBase64(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Ue(e){return We(JSON.stringify(e))}J.getParameters=Ue});var me=A(M=>{"use strict";M.__esModule=!0;M.getParameters=void 0;var Be=ue();M.getParameters=Be.getParameters});var ge=A((Xe,Fe)=>{Fe.exports={name:"delon",version:"21.0.4",description:"Delon is a set of essential modules for NG-ALAIN.",keywords:["delon","ng-alain","alain","antd","ng-zorro-antd","angular"],author:"cipchk <cipchk@qq.com>",license:"MIT",bugs:{url:"https://github.com/ng-alain/ng-alain/issues"},repository:{type:"git",url:"git+https://github.com/ng-alain/delon.git"},homepage:"https://ng-alain.com",engines:{node:"^18.19.1 || ^20.11.1 || ^22.0.0"},scripts:{prepare:"husky install",start:"npm run site:gen && ng s -o --hmr",lint:"npm run lint:ts && npm run lint:style","lint:ts":"eslint --cache","lint:fix":"eslint --cache --fix","lint:style":"npx stylelint 'packages/**/*.less'",test:"ng test --no-progress --browsers=ChromeHeadlessCI --code-coverage --no-watch","test:cli":"bash scripts/ci/build-schematics.sh -t -clone",build:"bash scripts/ci/build.sh",build_artifacts:"bash scripts/ci/build-artifacts.sh",analyze:"npm run ng build -- --source-map","analyze:view":"source-map-explorer src/dist/browser/*.js","site:gen":"tsx scripts/site/index init && ng-alain-plugin-theme -t=themeCss","site:build":"npm run site:gen && ng b site && npm run site:ngsw && npm run site:minify && npm run site:sitemap && npm run site:helper","site:helper":"bash scripts/ci/helper.sh","site:minify":"node scripts/build/minify.js","site:sitemap":"node scripts/build/sitemap.js","site:ngsw":"node scripts/build/ngsw.js",changelog:"npx conventional-changelog -p angular -i CHANGELOG.md --pkg package.json -s","pre-publish":"node scripts/publish/publish.js && node scripts/publish/publish-scaffold.js","publish:next":"bash scripts/publish/publish.sh -next",publish:"bash scripts/publish/publish.sh","pre-commit":"tsc -p packages/tsconfig.json --noEmit && lint-staged","sync-scaffold-version":"node scripts/publish/sync-scaffold-version.js"},dependencies:{"@angular/animations":"^21.1.1","@angular/cdk":"^21.1.1","@angular/common":"^21.1.1","@angular/compiler":"^21.1.1","@angular/core":"^21.1.1","@angular/elements":"^21.1.1","@angular/forms":"^21.1.1","@angular/platform-browser":"^21.1.1","@angular/platform-server":"^21.1.1","@angular/router":"^21.1.1","@angular/service-worker":"^21.1.1","@angular/ssr":"^21.1.1","@antv/data-set":"^0.11.8","@antv/g2":"^4.2.12","@github/hotkey":"^3.1.1","@ng-util/monaco-editor":"^21.1.0","@stackblitz/sdk":"^1.11.0","@webcomponents/custom-elements":"^1.6.0",ajv:"^8.17.1","ajv-formats":"^3.0.1",aos:"^3.0.0-beta.6",codesandbox:"^2.2.3",echarts:"^6.0.0",express:"^5.2.1",extend:"^3.0.2","file-saver":"^2.0.5",global:"^4.4.0",isutf8:"^4.0.1","ng-github-button":"^21.0.1","ng-zorro-antd":"^21.0.2","ngx-countdown":"^21.0.0","ngx-highlight-js":"^21.0.0","ngx-tinymce":"^21.0.0",qrious:"^4.0.2",rxjs:"~7.8.0",tslib:"^2.3.0","zone.js":"~0.15.0"},devDependencies:{"@angular/build":"^21.1.1","@angular/cli":"^21.1.1","@angular/compiler-cli":"^21.1.1","@commitlint/cli":"^20.3.1","@commitlint/config-angular":"^20.3.1","@types/aos":"^3.0.7","@types/deep-extend":"^0.6.2","@types/express":"^5.0.6","@types/extend":"^3.0.4","@types/file-saver":"^2.0.7","@types/fs-extra":"^11.0.4","@types/jasmine":"~5.1.13","@types/jasminewd2":"~2.0.13","@types/mockjs":"^1.0.10","@types/node":"^22.19.3","@types/parse5":"^7.0.0","@typescript-eslint/eslint-plugin":"^8.54.0","@typescript-eslint/parser":"^8.54.0","@typescript-eslint/utils":"^8.54.0","angular-eslint":"^21.1.0",chalk:"^5.6.2","conventional-changelog-cli":"^5.0.0",eslint:"^9.39.2","eslint-config-prettier":"^10.1.8","eslint-plugin-import":"~2.32.0","eslint-plugin-jsdoc":"~62.4.1","eslint-plugin-prefer-arrow":"~1.2.3","eslint-plugin-prettier":"~5.5.5","eslint-plugin-unused-imports":"^4.3.0","fs-extra":"^11.3.3","html-minifier-terser":"^7.2.0",husky:"^9.1.7",jasmine:"^5.13.0","jasmine-core":"~5.13.0","jasmine-spec-reporter":"^7.0.0","jsonml.js":"^0.1.0",jszip:"^3.10.1",karma:"~6.4.4","karma-chrome-launcher":"~3.2.0","karma-coverage":"~2.2.1","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.2.0","karma-junit-reporter":"^2.0.1","karma-parallel":"^0.3.1","karma-spec-reporter":"0.0.36","karma-summary-reporter":"^4.0.1","karma-viewport":"^1.0.9","klaw-sync":"^7.0.0",less:"^4.5.1","less-bundle-promise":"^1.0.11","less-plugin-clean-css":"^1.6.0","less-plugin-npm-import":"^2.1.0","less-vars-to-js":"^1.3.0","lint-staged":"^16.2.7","mark-twain":"^2.0.3",mockjs:"^1.1.0",mustache:"^4.2.0","ng-alain-plugin-theme":"^18.0.0","ng-alain-sts":"^0.0.2","ng-packagr":"^21.1.0",parse5:"^8.0.0",plyr:"^3.8.4",prettier:"^3.8.1","readline-sync":"^1.4.10",screenfull:"^6.0.2",sitemap:"^9.0.0","source-map-explorer":"^2.5.3",stream:"0.0.3",stylelint:"^17.0.0","stylelint-config-clean-order":"^8.0.0","stylelint-config-standard":"^40.0.0","stylelint-declaration-block-no-ignored-properties":"^3.0.0","stylelint-order":"^7.0.1","swagger-typescript-api":"^12.0.4",terser:"^5.46.0",tsx:"^4.21.0",typescript:"~5.9.2","typescript-eslint":"8.54.0",xlsx:"^0.18.5"},"lint-staged":{"(schematics|scripts|packages)/**/!(tslint-rules|testing)/!(polyfills).{html,ts}":["eslint --cache"],"packages/**/*.less":["npm run lint:style"]},packageManager:"yarn@4.12.0"}});var N=class e{theme="default";theme$=new te(1);setTheme(t){this.theme=t,this.theme$.next(t)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"})};var je="https://stackblitz.com",re=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],ke=["project","search","ports","settings"],_e=["light","dark"],Ee=["editor","preview"],ie={clickToLoad:e=>E("ctl",e),devToolsHeight:e=>oe("devtoolsheight",e),forceEmbedLayout:e=>E("embed",e),hideDevTools:e=>E("hidedevtools",e),hideExplorer:e=>E("hideExplorer",e),hideNavigation:e=>E("hideNavigation",e),openFile:e=>O("file",e),showSidebar:e=>xe("showSidebar",e),sidebarView:e=>L("sidebarView",e,ke),startScript:e=>O("startScript",e),terminalHeight:e=>oe("terminalHeight",e),theme:e=>L("theme",e,_e),view:e=>L("view",e,Ee),zenMode:e=>E("zenMode",e),organization:e=>`${O("orgName",e?.name)}&${O("orgProvider",e?.provider)}`,crossOriginIsolated:e=>E("corp",e)};function se(e={}){let t=Object.entries(e).map(([n,r])=>r!=null&&ie.hasOwnProperty(n)?ie[n](r):"").filter(Boolean);return t.length?`?${t.join("&")}`:""}function E(e,t){return t===!0?`${e}=1`:""}function xe(e,t){return typeof t=="boolean"?`${e}=${t?"1":"0"}`:""}function oe(e,t){if(typeof t=="number"&&!Number.isNaN(t)){let n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function L(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function O(e,t){return(Array.isArray(t)?t:[t]).filter(r=>typeof r=="string"&&r.trim()!=="").map(r=>`${e}=${encodeURIComponent(r)}`).join("&")}function ae(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function W(e,t){return`${ce(t)}${e}${se(t)}`}function U(e,t){let n={forceEmbedLayout:!0};return t&&typeof t=="object"&&Object.assign(n,t),`${ce(n)}${e}${se(n)}`}function ce(e={}){return(typeof e.origin=="string"?e.origin:je).replace(/\/$/,"")}function B(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),Ae(t,n),Te(e,t,n),e.replaceWith(t)}function F(e){if(typeof e=="string"){let t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function G(e){return e&&e.newWindow===!1?"_self":"_blank"}function Ae(e,t={}){let n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:"300",r=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),r?e.setAttribute("width",r):e.setAttribute("style","width:100%;")}function Te(e,t,n={}){let r=e.allow?.split(";")?.map(m=>m.trim())??[];n.crossOriginIsolated&&!r.includes("cross-origin-isolated")&&r.push("cross-origin-isolated"),r.length>0&&(t.allow=r.join("; "))}var z=class{constructor(t){this.pending={},this.port=t,this.port.onmessage=this.messageListener.bind(this)}request({type:t,payload:n}){return new Promise((r,m)=>{let u=ae();this.pending[u]={resolve:r,reject:m},this.port.postMessage({type:t,payload:Y(k({},n),{__reqid:u})})})}messageListener(t){if(typeof t.data.payload?.__reqid!="string")return;let{type:n,payload:r}=t.data,{__reqid:m,__success:u,__error:i}=r;this.pending[m]&&(u?this.pending[m].resolve(this.cleanResult(r)):this.pending[m].reject(i?`${n}: ${i}`:n),delete this.pending[m])}cleanResult(t){let n=k({},t);return delete n.__reqid,delete n.__success,delete n.__error,Object.keys(n).length?n:null}},D=class{constructor(t,n){this.editor={openFile:r=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:r}}),setCurrentFile:r=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:r}}),setTheme:r=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:r}}),setView:r=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:r}}),showSidebar:(r=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:r}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(r=>r?.url??null),setUrl:(r="/")=>{if(typeof r!="string"||!r.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${r}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:r}})}},this._rdc=new z(t),Object.defineProperty(this.preview,"origin",{value:typeof n.previewOrigin=="string"?n.previewOrigin:null,writable:!1})}applyFsDiff(t){let n=r=>r!==null&&typeof r=="object";if(!n(t)||!n(t.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(t.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:t})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}},I=[],q=class{constructor(t){this.id=ae(),this.element=t,this.pending=new Promise((n,r)=>{let m=({data:s,ports:a})=>{s?.action==="SDK_INIT_SUCCESS"&&s.id===this.id&&(this.vm=new D(a[0],s.payload),n(this.vm),i())},u=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function i(){window.clearInterval(p),window.removeEventListener("message",m)}window.addEventListener("message",m),u();let o=0,p=window.setInterval(()=>{if(this.vm){i();return}if(o>=20){i(),r("Timeout: Unable to establish a connection with the StackBlitz VM"),I.forEach((s,a)=>{s.id===this.id&&I.splice(a,1)});return}o++,u()},500)}),I.push(this)}},Ne=e=>{let t=e instanceof Element?"element":"id";return I.find(n=>n[t]===e)??null};function Oe(e,t){let n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function Ie(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function le({template:e,title:t,description:n,dependencies:r,files:m,settings:u}){if(!re.includes(e)){let s=re.map(a=>`'${a}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${s}`)}let i=[],o=(s,a,h="")=>{i.push(Oe(s,typeof a=="string"?a:h))};o("project[title]",t),typeof n=="string"&&n.length>0&&o("project[description]",n),o("project[template]",e,"javascript"),r&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):o("project[dependencies]",JSON.stringify(r))),u&&o("project[settings]",JSON.stringify(u)),Object.entries(m).forEach(([s,a])=>{o(`project[files][${Ie(s)}]`,a)});let p=document.createElement("form");return p.method="POST",p.setAttribute("style","display:none!important;"),p.append(...i),p}function Re(e,t){let n=le(e);return n.action=U("/run",t),n.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${n.outerHTML}
  <script>document.getElementById('${n.id}').submit();<\/script>
</body>
</html>`}function Ce(e,t){let n=le(e);n.action=W("/run",t),n.target=G(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}function R(e){return e?.contentWindow?(Ne(e)??new q(e)).pending:Promise.reject("Provided element is not an iframe.")}function Me(e,t){Ce(e,t)}function Pe(e,t){let n=W(`/edit/${e}`,t),r=G(t);window.open(n,r)}function $e(e,t){let n=W(`/github/${e}`,t),r=G(t);window.open(n,r)}function Le(e,t,n){let r=F(e),m=Re(t,n),u=document.createElement("iframe");return B(r,u,n),u.contentDocument?.write(m),R(u)}function ze(e,t,n){let r=F(e),m=document.createElement("iframe");return m.src=U(`/edit/${t}`,n),B(r,m,n),R(m)}function De(e,t,n){let r=F(e),m=document.createElement("iframe");return m.src=U(`/github/${t}`,n),B(r,m,n),R(m)}var pe={connect:R,embedGithubProject:De,embedProject:Le,embedProjectId:ze,openGithubProject:$e,openProject:Me,openProjectId:Pe};var be=ee(me());var x=ee(ge());var K={$schema:"./node_modules/@angular/cli/lib/config/schema.json",cli:{analytics:"1e1de97b-a744-405a-8b5a-0397bb3d01ce"},newProjectRoot:"projects",projects:{demo:{architect:{build:{builder:"@angular/build:application",configurations:{development:{extractLicenses:!1,namedChunks:!0,optimization:!1,sourceMap:!0},production:{aot:!0,extractLicenses:!0,namedChunks:!1,optimization:!0,outputHashing:"all",sourceMap:!1}},options:{browser:"src/main.ts",polyfills:["zone.js"],assets:[],index:"src/index.html",outputPath:"dist/demo",scripts:[],inlineStyleLanguage:"less",styles:["src/styles.css"],tsConfig:"tsconfig.json"}},serve:{builder:"@angular/build:dev-server",configurations:{development:{buildTarget:"::development"},production:{buildTarget:"::production"}},defaultConfiguration:"development"}},prefix:"app",projectType:"application",root:"",schematics:{},sourceRoot:"src"}},version:1};var V=`import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
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
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch(), withInterceptors([mockInterceptor])),
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

import { ${e} } from './app/app';
import { appConfig } from './app/app.config';

bootstrapApplication(${e}, appConfig).catch((err) =>
  console.error(err)
);
`;var fe=`import { MockStatusError, MockRequest, r } from '@delon/mock';
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
};`;var he={name:"ng-alain",description:"",tags:["NG-ALAIN"],version:"0.0.0",scripts:{ng:"ng",start:"ng serve",build:"ng build",test:"ng test",lint:"ng lint",e2e:"ng e2e"},private:!0,dependencies:{"@angular/animations":"^17.1.0","@angular/common":"^17.1.0","@angular/compiler":"^17.1.0","@angular/core":"^17.1.0","@angular/forms":"^17.1.0","@angular/platform-browser":"^17.1.0","@angular/router":"^17.1.0",rxjs:"^7.8.1",tslib:"^2.6.2","zone.js":"^0.14.3","@delon/theme":"~17.0.3","@delon/abc":"~17.0.3","@delon/chart":"~17.0.3","@delon/acl":"~17.0.3","@delon/auth":"~17.0.3","@delon/cache":"~17.0.3","@delon/mock":"~17.0.3","@delon/form":"~17.0.3","@delon/util":"~17.0.3","ng-zorro-antd":"^17.1.0",ajv:"^8.12.0","ajv-formats":"^2.1.1","date-fns":"^2.16.1","@angular/cdk":"^17.0.0"}};var ye=`# Angular CLI Template

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
`;var Q={"sandbox.config.json":JSON.stringify({template:"node"},null,2),".codesandbox/tasks.json":`{
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
  `};var we=e=>`import { APP_INITIALIZER, Injectable, inject, Provider } from '@angular/core';
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
`;var X={compileOnSave:!1,compilerOptions:{outDir:"./dist/out-tsc",forceConsistentCasingInFileNames:!0,strict:!0,noImplicitOverride:!0,noPropertyAccessFromIndexSignature:!0,noImplicitReturns:!0,noFallthroughCasesInSwitch:!0,esModuleInterop:!0,sourceMap:!0,declaration:!1,downlevelIteration:!0,experimentalDecorators:!0,moduleResolution:"node",importHelpers:!0,target:"ES2022",module:"ES2022",useDefineForClassFields:!1,lib:["ES2022","dom"]},angularCompilerOptions:{strictStandalone:!0,extendedDiagnostics:{checks:{optionalChainNotNullable:"suppress"}}}};var ve=class e{appSrv=P(N);document=P(ne);get themePath(){return`node_modules/@delon/theme/${this.appSrv.theme}.css`}genPackage({includeCli:t=!1}){let n=x.default.dependencies["@angular/core"],r=he;t&&(r.devDependencies={"@angular/cli":"^21.0.0","@angular/compiler-cli":"^21.0.0","@types/node":"^21.19.1",typescript:"~5.8.2","ng-alain":"^21.0.0"});let m=k(k({},x.default.dependencies),x.default.devDependencies);return["dependencies","devDependencies"].forEach(u=>{Object.keys(r[u]||{}).forEach(i=>{r[u][i]=i.startsWith("@delon")||i==="ng-alain"?`${x.default.version}`:m[i]||"*"})}),r.dependencies["@angular/core"]=n,console.log(r),r}get genStartupService(){return we({ajvVersion:x.default.dependencies.ajv.substring(1)})}get genMock(){return{"_mock/user.ts":fe,"_mock/index.ts":"export * from './user';"}}parseCode(t){let n="",r="",m=/selector:[ ]?(['|"|`])([^'"`]+)/g.exec(t);m&&(n=m[2]);let u=/export class ([^ {]+)/g.exec(t);return u&&(r=u[1]),{selector:n,componentName:r,html:['<base href="/">',`<${n}>loading</${n}>`,'<div id="VERSION" style="position: fixed; bottom: 8px; right: 8px; z-index: 8888;font-size: 11px; color: #aaa;"></div>'].join(`
`)}}attachStandalone(t){return t}async openOnStackBlitz(t,n,r=!1){n=this.attachStandalone(n);let m=this.parseCode(n),u=$(K);u.projects.demo.architect.build.options.styles.splice(0,0,this.themePath);let i=this.genPackage({includeCli:r});i.description=t;let o=k({"angular.json":`${JSON.stringify(u,null,2)}`,"tsconfig.json":`${JSON.stringify(X,null,2)}`,"src/index.html":m.html,"src/main.ts":Z(m.componentName),"src/app/app.ts":n,"src/app/app.config.ts":V,"src/app/startup.service.ts":this.genStartupService},this.genMock);r&&(o[".stackblitzrc"]=JSON.stringify({installDependencies:!0,startCommand:"yarn start",env:{ENABLE_CJS_IMPORTS:!0}},null,2),o["package.json"]=`${JSON.stringify(i,null,2)}`),pe.openProject({title:"NG-ALAIN",description:"NG-ZORRO  admin panel front-end framework",tags:["ng-alain","@delon","NG-ZORRO","ng-zorro-antd","Ant Design","Angular","ng"],dependencies:k(k({},i.dependencies),i.devDependencies),files:o,template:r?"node":"angular-cli"},{openFile:"src/app/app.config.ts,src/app/app.component.ts"})}async openOnCodeSandbox(t,n,r=!1){n=this.attachStandalone(n);let m=this.parseCode(n),u=this.genMock,i=$(K);i.projects.demo.architect.build.options.styles.splice(0,0,this.themePath);let o=this.genPackage({includeCli:r});o.description=t;let p={"package.json":{content:JSON.stringify(o,null,2),isBinary:!1},"angular.json":{content:`${JSON.stringify(i,null,2)}`,isBinary:!1},"tsconfig.json":{content:`${JSON.stringify(X,null,2)}`,isBinary:!1},"src/index.html":{content:m.html,isBinary:!1},"src/main.ts":{content:Z(m.componentName),isBinary:!1},"src/app/app.config.ts":{content:V,isBinary:!1},"src/app/app.component.ts":{content:n,isBinary:!1},"src/app/startup.service.ts":{content:this.genStartupService,isBinary:!1},"src/styles.css":{content:"",isBinary:!1},"_mock/user.ts":{content:u["_mock/user.ts"],isBinary:!1},"_mock/index.ts":{content:u["_mock/index.ts"],isBinary:!1}};r&&(p["README.md"]={content:ye,isBinary:!1}),Object.keys(Q).forEach(b=>{p[b]={content:Q[b],isBinary:!1}});let s=(0,be.getParameters)({files:p,environment:"server"}),a=this.document.createElement("form"),h=this.document.createElement("input");a.method="POST",a.action="https://codesandbox.io/api/v1/sandboxes/define",a.target="_blank",h.name="parameters",h.value=s,a.appendChild(h),this.document.body.append(a),a.submit(),this.document.body.removeChild(a)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"})};export{ge as a,N as b,ve as c};
