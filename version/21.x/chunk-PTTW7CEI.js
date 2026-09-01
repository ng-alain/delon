import{a as I}from"./chunk-PXLNGNFL.js";import"./chunk-L5G5NHRV.js";import{a as T}from"./chunk-PJYRP6KM.js";import{a as ne}from"./chunk-C3MNSEWK.js";import"./chunk-XU2NL7K2.js";import"./chunk-J335YUGO.js";import"./chunk-62ZNMC2L.js";import{d as D,e as x}from"./chunk-KQR6CVZA.js";import{$ as w}from"./chunk-7O6624BH.js";import{$c as X,Eb as a,Hd as ee,Ma as l,Md as K,Mg as C,Ng as N,Pg as _,Qg as z,Tc as S,Tg as te,Ua as d,Vb as o,W as A,Wa as p,Xb as g,a as q,ba as L,da as Q,fa as h,gb as y,gd as Z,j,l as Y,ld as B,oc as b,pc as k,sb as m,t as U,tb as i,ub as s,vb as v,x as W}from"./chunk-DBBCITIJ.js";var ie=new Q("DC_STORE_STORAGE_TOKEN",{providedIn:"root",factory:()=>new J}),J=class{platform=h(B);get(e){return this.platform.isBrowser?JSON.parse(localStorage.getItem(e)??"null")??null:null}set(e,n){return this.platform.isBrowser&&localStorage.setItem(e,JSON.stringify(n)),!0}remove(e){this.platform.isBrowser&&localStorage.removeItem(e)}};var u=class c{store=h(ie);http=h(Z);platform=h(B);memory=new Map;notifyBuffer=new Map;meta=new Set;freqTick=3e3;freqTime;cog=h(K).merge("cache",{mode:"promise",reName:"",prefix:"",meta_key:"__cache_meta"});constructor(){this.platform.isBrowser&&(this.loadMeta(),this.startExpireNotify())}pushMeta(e){this.meta.has(e)||(this.meta.add(e),this.saveMeta())}removeMeta(e){this.meta.has(e)&&(this.meta.delete(e),this.saveMeta())}loadMeta(){let e=this.store.get(this.cog.meta_key);e&&e.v&&e.v.forEach(n=>this.meta.add(n))}saveMeta(){let e=[];this.meta.forEach(n=>e.push(n)),this.store.set(this.cog.meta_key,{v:e,e:0})}getMeta(){return this.meta}set(e,n,t={}){if(!this.platform.isBrowser)return;let r=0,{type:f,expire:ce}=this.cog;t=q({type:f,expire:ce},t),t.expire&&(r=te(new Date,t.expire).valueOf());let F=t.emitNotify!==!1;if(!(n instanceof j)){this.save(t.type,e,{v:n,e:r},F);return}return n.pipe(A(le=>{this.save(t.type,e,{v:le,e:r},F)}))}save(e,n,t,r=!0){e==="m"?this.memory.set(n,t):(this.store.set(this.cog.prefix+n,t),this.pushMeta(n)),r&&this.runNotify(n,"set")}get(e,n={}){if(!this.platform.isBrowser)return null;let t=n.mode!=="none"&&this.cog.mode==="promise",r=this.memory.has(e)?this.memory.get(e):this.store.get(this.cog.prefix+e);return!r||r.e&&r.e>0&&r.e<new Date().valueOf()?t?(this.cog.request?this.cog.request(e):this.http.get(e)).pipe(W(f=>ee(f,this.cog.reName,f)),A(f=>this.set(e,f,{type:n.type,expire:n.expire,emitNotify:n.emitNotify}))):null:t?U(r.v):r.v}getNone(e){return this.get(e,{mode:"none"})}tryGet(e,n,t={}){if(!this.platform.isBrowser)return null;let r=this.getNone(e);return r===null?n instanceof j?this.set(e,n,t):(this.set(e,n,t),n):U(r)}has(e){return this.memory.has(e)||this.meta.has(e)}_remove(e,n){if(n&&this.runNotify(e,"remove"),this.memory.has(e)){this.memory.delete(e);return}this.store.remove(this.cog.prefix+e),this.removeMeta(e)}remove(e){this.platform.isBrowser&&this._remove(e,!0)}clear(){this.platform.isBrowser&&(this.notifyBuffer.forEach((e,n)=>this.runNotify(n,"remove")),this.memory.clear(),this.meta.forEach(e=>this.store.remove(this.cog.prefix+e)))}set freq(e){this.freqTick=Math.max(20,e),this.abortExpireNotify(),this.startExpireNotify()}startExpireNotify(){this.checkExpireNotify(),this.runExpireNotify()}runExpireNotify(){this.freqTime=setTimeout(()=>{this.checkExpireNotify(),this.runExpireNotify()},this.freqTick)}checkExpireNotify(){let e=[];this.notifyBuffer.forEach((n,t)=>{this.has(t)&&this.getNone(t)===null&&e.push(t)}),e.forEach(n=>{this.runNotify(n,"expire"),this._remove(n,!1)})}abortExpireNotify(){clearTimeout(this.freqTime)}runNotify(e,n){this.notifyBuffer.has(e)&&this.notifyBuffer.get(e).next({type:n,value:this.getNone(e)})}notify(e){if(!this.notifyBuffer.has(e)){let n=new Y(this.getNone(e));this.notifyBuffer.set(e,n)}return this.notifyBuffer.get(e).asObservable()}cancelNotify(e){this.notifyBuffer.has(e)&&(this.notifyBuffer.get(e).unsubscribe(),this.notifyBuffer.delete(e))}hasNotify(e){return this.notifyBuffer.has(e)}clearNotify(){this.notifyBuffer.forEach(e=>e.unsubscribe()),this.notifyBuffer.clear()}ngOnDestroy(){this.memory.clear(),this.abortExpireNotify(),this.clearNotify()}static \u0275fac=function(n){return new(n||c)};static \u0275prov=L({token:c,factory:c.\u0275fac,providedIn:"root"})};var pe=new X(()=>({}));var O=class c{constructor(e,n){this.srv=e;this.msg=n}value;key="demo";notify$;get newValue(){return+new Date}getByHttp(){this.srv.get("https://randomuser.me/api/?results=1").subscribe(e=>{this.value=e})}registerNotify(){this.notify$&&this.notify$.unsubscribe(),this.notify$=this.srv.notify(this.key).subscribe(e=>{if(e==null){this.msg.success("register success");return}this.msg.warning(`"${this.key}" new status: ${e.type}`)})}unRegisterNotify(){this.srv.cancelNotify(this.key)}ngOnDestroy(){this.notify$&&this.notify$.unsubscribe()}static \u0275fac=function(n){return new(n||c)(d(u),d(w))};static \u0275cmp=p({type:c,selectors:[["cache-getting-started-simple"]],decls:23,vars:3,consts:[[1,"pt-sm"],["nz-button","",3,"click"]],template:function(n,t){n&1&&(i(0,"p"),o(1),b(2,"json"),s(),i(3,"div",0),o(4," Basic: "),i(5,"button",1),a("click",function(){return t.srv.set(t.key,t.newValue)}),o(6,"Set"),s(),i(7,"button",1),a("click",function(){return t.value=t.srv.getNone(t.key)}),o(8,"Get"),s(),i(9,"button",1),a("click",function(){return t.srv.remove(t.key)}),o(10,"Remove"),s(),i(11,"button",1),a("click",function(){return t.srv.clear()}),o(12,"Clear"),s()(),i(13,"div",0),o(14," Key is valid request: "),i(15,"button",1),a("click",function(){return t.getByHttp()}),o(16,"Get"),s()(),i(17,"div",0),o(18," Notify: "),i(19,"button",1),a("click",function(){return t.registerNotify()}),o(20,"Register"),s(),i(21,"button",1),a("click",function(){return t.unRegisterNotify()}),o(22,"UnRegister"),s()()),n&2&&(l(),g("value: ",k(2,1,t.value)))},dependencies:[z,_,C,N,S],encapsulation:2})};var R=class c{item={name:"getting-started",langs:["zh-CN"],content:{"zh-CN":{meta:{order:1,title:"\u5F00\u59CB\u4F7F\u7528",description:"\u901A\u5E38\u628A\u4E00\u4E9B\u8FDC\u7A0B\u6570\u636E\u7F13\u5B58\u5728\u5185\u5B58\u6216 localStorage \u6301\u4E45\u5316\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u51CF\u5C11 Http \u8BF7\u6C42\u7684\u6210\u672C\uFF1B\u8FD9\u6837\u7684\u6570\u636E\u901A\u5E38\u662F\u5B57\u5178\u3001\u57CE\u5E02\u6570\u636E\u7B49\u3002\u7F13\u5B58\u7684\u83B7\u53D6\u5E94\u8BE5\u662F\u975E\u5E38\u7B80\u5355\u7684\uFF0C\u6211\u4EEC\u4E0D\u5E94\u8BE5\u628A\u65F6\u95F4\u6D6A\u8D39\u5728\u5982\u4F55\u4FDD\u8BC1\u52A0\u8F7D\u8FD9\u4EF6\u4E8B\u60C5\u4E0A\uFF0C\u56E0\u6B64 @delon/cache \u66F4\u591A\u662F\u4EE5\u7EA6\u5B9A\u4E3A\u524D\u63D0\u3002key \u4F5C\u4E3A\u7F13\u5B58\u7684\u552F\u4E00\u952E\u503C\uFF0C\u5B83\u4E0D\u5E94\u8BE5...",group:"Documents",path:"packages/cache/docs/getting-started.md",url:"/cache/getting-started/zh"},text:`<h2 id="\u5199\u5728\u524D\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524D\u9762"></i></a>\u5199\u5728\u524D\u9762</h2><p>\u901A\u5E38\u628A\u4E00\u4E9B\u8FDC\u7A0B\u6570\u636E\u7F13\u5B58\u5728\u5185\u5B58\u6216 <code>localStorage</code> \u6301\u4E45\u5316\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u51CF\u5C11 Http \u8BF7\u6C42\u7684\u6210\u672C\uFF1B\u8FD9\u6837\u7684\u6570\u636E\u901A\u5E38\u662F\u5B57\u5178\u3001\u57CE\u5E02\u6570\u636E\u7B49\u3002</p>
<p>\u7F13\u5B58\u7684\u83B7\u53D6\u5E94\u8BE5\u662F\u975E\u5E38\u7B80\u5355\u7684\uFF0C\u6211\u4EEC\u4E0D\u5E94\u8BE5\u628A\u65F6\u95F4\u6D6A\u8D39\u5728\u5982\u4F55\u4FDD\u8BC1\u52A0\u8F7D\u8FD9\u4EF6\u4E8B\u60C5\u4E0A\uFF0C\u56E0\u6B64 <code>&#64;delon/cache</code> \u66F4\u591A\u662F\u4EE5<strong>\u7EA6\u5B9A</strong>\u4E3A\u524D\u63D0\u3002<code>key</code> \u4F5C\u4E3A\u7F13\u5B58\u7684\u552F\u4E00\u952E\u503C\uFF0C\u5B83\u4E0D\u5E94\u8BE5\u53EA\u662F\u5355\u7EAF\u7684\u4E00\u4E2A\u6807\u8BC6\u7B26\uFF0C\u5982\u679C\u9075\u5B88\u67D0\u79CD\u7EA6\u5B9A\u5B83\u7684\u5B58\u5728\u4F1A\u66F4\u6709\u4EF7\u503C\u3002<code>&#64;delon/cache</code> \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E0D\u5149\u628A <code>key</code> \u5F53\u4F5C\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u540C\u65F6\u5B83\u8FD8\u662F\u4E00\u4E2A\u7528\u4E8E\u83B7\u53D6\u8FDC\u7A0B\u6570\u636E\u7684\u6709\u6548HTTP\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-ts">cacheService.get(&#39;/data/unit&#39;);
</code></pre>
<p>\u5728\u4EE5\u5F80\u6211\u4EEC\u4F1A\u8BA4\u4E3A\uFF0C\u5728\u5B83\u4E4B\u524D\u5E94\u8BE5\u9700\u8981\u52A0\u4E00\u4E2A\uFF1A</p>
<pre><code class="language-ts">cacheService.set(&#39;/data/unit&#39;, [ &#39;\u4E2A&#39;, &#39;\u4EF6&#39; ]);
</code></pre>
<p>\u624D\u80FD\u591F\u786E\u4FDD\u83B7\u53D6\u5230\u7F13\u5B58\u6570\u636E\u3002</p>
<p>\u800C\u5BF9\u4E8E <code>&#64;delon/cache</code> \u800C\u8A00\uFF0C\u4F60\u65E0\u987B <code>set</code> \u65B9\u6CD5\uFF0C\u76F4\u63A5\u4F7F\u7528 <code>get</code> \u83B7\u53D6\u5230\u5355\u4F4D\u5B57\u5178\uFF0C\u56E0\u4E3A\u6211\u4EEC\u6709\u4E00\u79CD<strong>\u7EA6\u5B9A</strong>\uFF0C\u5F53\u7F13\u5B58\u4E0D\u5B58\u5728\u900F\u8FC7 <code>key</code> \u4F5C\u4E3AHTTP\u8BF7\u6C42\u6570\u636E\u7F13\u5B58\u540E\u518D\u8FD4\u56DE\u3002</p>
<p>\u7F13\u5B58\u7684\u83B7\u53D6\u4E0E\u8BBE\u7F6E\u90FD\u662F\u901A\u8FC7 <a href="/cache/service">CacheService</a> \u6765\u64CD\u4F5C\uFF0C\u4F60\u53EA\u9700\u8981\u5C06 <code>CacheService</code> \u5BFC\u5165\u5BF9\u5E94\u7684\u7C7B\u5F53\u4E2D\u5373\u53EF\u3002</p>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p><strong>\u5B89\u88C5</strong></p>
<pre><code class="language-bash">npm i -S &#64;delon/cache
</code></pre>
<h3 id="\u53C2\u6570"><a class="lake-link"><i data-anchor="\u53C2\u6570"></i></a>\u53C2\u6570</h3><table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u5168\u5C40\u914D\u7F6E</th>
</tr>
</thead>
<tbody><tr>
<td><code>[mode]</code></td>
<td><code>promise,none</code></td>
<td><code>promise</code></td>
<td>\u7F13\u5B58\u6A21\u5F0F\uFF1B<code>promise</code> \u7EA6\u5B9A\u6A21\u5F0F\uFF0C\u5141\u8BB8 <code>key</code> \u4F5C\u4E3A http \u83B7\u53D6\u6570\u636E\uFF1B<code>none</code> \u6B63\u5E38\u6A21\u5F0F</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[reName]</code></td>
<td><code>string</code></td>
<td>-</td>
<td>\u91CD\u547D\u540D\u8FD4\u56DE\u53C2\u6570\uFF0C\u4F8B\u5982\uFF1A<br> <code>null</code> \u8FD4\u56DE\u4F53\u4E3A\u5185\u5BB9<br><code>list</code> \u8FD4\u56DE\u4F53\u5E94 <code>&#123; list: [] &#125;</code><br><code>result.list</code> \u8FD4\u56DE\u4F53\u5E94 <code>&#123; result: &#123; list: [] &#125; &#125;</code></td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[expire]</code></td>
<td><code>number</code></td>
<td>-</td>
<td>\u8BBE\u7F6E\u9ED8\u8BA4\u8FC7\u671F\u65F6\u95F4\u503C\uFF08\u5355\u4F4D\uFF1A\u79D2\uFF09</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[prefix]</code></td>
<td><code>string</code></td>
<td>-</td>
<td>\u6301\u4E45\u5316\u6570\u636E\u952E\u503C\u524D\u7F00</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[meta_key]</code></td>
<td><code>string</code></td>
<td><code>__cache_meta</code></td>
<td>\u6301\u4E45\u5316\u6570\u636E\u5143\u6570\u636E\u5B58\u50A8\u952E\u540D</td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[request]</code></td>
<td><code>(key: string) =&gt; Observable&lt;unknown&gt;</code></td>
<td>-</td>
<td>\u81EA\u5B9A\u4E49\u8BF7\u6C42\u4F53</td>
<td>\u2705</td>
</tr>
</tbody></table>
<blockquote>
<p>\u53EF\u4EE5\u901A\u8FC7<a href="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u8986\u76D6\u5B83\u4EEC\u3002</p>
</blockquote>
`,api:"",toc:[{id:"\u5199\u5728\u524D\u9762",title:"\u5199\u5728\u524D\u9762"},{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528",children:[{id:"\u53C2\u6570",title:"\u53C2\u6570"}]}],raw:"---\norder: 1\ntitle: \u5F00\u59CB\u4F7F\u7528\ntype: Documents\n---\n\n## \u5199\u5728\u524D\u9762\n\n\u901A\u5E38\u628A\u4E00\u4E9B\u8FDC\u7A0B\u6570\u636E\u7F13\u5B58\u5728\u5185\u5B58\u6216 `localStorage` \u6301\u4E45\u5316\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u51CF\u5C11 Http \u8BF7\u6C42\u7684\u6210\u672C\uFF1B\u8FD9\u6837\u7684\u6570\u636E\u901A\u5E38\u662F\u5B57\u5178\u3001\u57CE\u5E02\u6570\u636E\u7B49\u3002\n\n\u7F13\u5B58\u7684\u83B7\u53D6\u5E94\u8BE5\u662F\u975E\u5E38\u7B80\u5355\u7684\uFF0C\u6211\u4EEC\u4E0D\u5E94\u8BE5\u628A\u65F6\u95F4\u6D6A\u8D39\u5728\u5982\u4F55\u4FDD\u8BC1\u52A0\u8F7D\u8FD9\u4EF6\u4E8B\u60C5\u4E0A\uFF0C\u56E0\u6B64 `@delon/cache` \u66F4\u591A\u662F\u4EE5**\u7EA6\u5B9A**\u4E3A\u524D\u63D0\u3002`key` \u4F5C\u4E3A\u7F13\u5B58\u7684\u552F\u4E00\u952E\u503C\uFF0C\u5B83\u4E0D\u5E94\u8BE5\u53EA\u662F\u5355\u7EAF\u7684\u4E00\u4E2A\u6807\u8BC6\u7B26\uFF0C\u5982\u679C\u9075\u5B88\u67D0\u79CD\u7EA6\u5B9A\u5B83\u7684\u5B58\u5728\u4F1A\u66F4\u6709\u4EF7\u503C\u3002`@delon/cache` \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E0D\u5149\u628A `key` \u5F53\u4F5C\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u540C\u65F6\u5B83\u8FD8\u662F\u4E00\u4E2A\u7528\u4E8E\u83B7\u53D6\u8FDC\u7A0B\u6570\u636E\u7684\u6709\u6548HTTP\uFF0C\u4F8B\u5982\uFF1A\n\n```ts\ncacheService.get('/data/unit');\n```\n\n\u5728\u4EE5\u5F80\u6211\u4EEC\u4F1A\u8BA4\u4E3A\uFF0C\u5728\u5B83\u4E4B\u524D\u5E94\u8BE5\u9700\u8981\u52A0\u4E00\u4E2A\uFF1A\n\n```ts\ncacheService.set('/data/unit', [ '\u4E2A', '\u4EF6' ]);\n```\n\n\u624D\u80FD\u591F\u786E\u4FDD\u83B7\u53D6\u5230\u7F13\u5B58\u6570\u636E\u3002\n\n\u800C\u5BF9\u4E8E `@delon/cache` \u800C\u8A00\uFF0C\u4F60\u65E0\u987B `set` \u65B9\u6CD5\uFF0C\u76F4\u63A5\u4F7F\u7528 `get` \u83B7\u53D6\u5230\u5355\u4F4D\u5B57\u5178\uFF0C\u56E0\u4E3A\u6211\u4EEC\u6709\u4E00\u79CD**\u7EA6\u5B9A**\uFF0C\u5F53\u7F13\u5B58\u4E0D\u5B58\u5728\u900F\u8FC7 `key` \u4F5C\u4E3AHTTP\u8BF7\u6C42\u6570\u636E\u7F13\u5B58\u540E\u518D\u8FD4\u56DE\u3002\n\n\u7F13\u5B58\u7684\u83B7\u53D6\u4E0E\u8BBE\u7F6E\u90FD\u662F\u901A\u8FC7 [CacheService](/cache/service) \u6765\u64CD\u4F5C\uFF0C\u4F60\u53EA\u9700\u8981\u5C06 `CacheService` \u5BFC\u5165\u5BF9\u5E94\u7684\u7C7B\u5F53\u4E2D\u5373\u53EF\u3002\n\n## \u5982\u4F55\u4F7F\u7528\n\n**\u5B89\u88C5**\n\n```bash\nnpm i -S @delon/cache\n```\n\n### \u53C2\u6570\n\n| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u5168\u5C40\u914D\u7F6E |\n|----|----|----|-----|------|\n| `[mode]` | `promise,none` | `promise` | \u7F13\u5B58\u6A21\u5F0F\uFF1B`promise` \u7EA6\u5B9A\u6A21\u5F0F\uFF0C\u5141\u8BB8 `key` \u4F5C\u4E3A http \u83B7\u53D6\u6570\u636E\uFF1B`none` \u6B63\u5E38\u6A21\u5F0F | \u2705 |\n| `[reName]` | `string` | - | \u91CD\u547D\u540D\u8FD4\u56DE\u53C2\u6570\uFF0C\u4F8B\u5982\uFF1A<br> `null` \u8FD4\u56DE\u4F53\u4E3A\u5185\u5BB9<br>`list` \u8FD4\u56DE\u4F53\u5E94 `{ list: [] }`<br>`result.list` \u8FD4\u56DE\u4F53\u5E94 `{ result: { list: [] } }` | \u2705 |\n| `[expire]` | `number` | - | \u8BBE\u7F6E\u9ED8\u8BA4\u8FC7\u671F\u65F6\u95F4\u503C\uFF08\u5355\u4F4D\uFF1A\u79D2\uFF09 | \u2705 |\n| `[prefix]` | `string` | - | \u6301\u4E45\u5316\u6570\u636E\u952E\u503C\u524D\u7F00 | \u2705 |\n| `[meta_key]` | `string` | `__cache_meta` | \u6301\u4E45\u5316\u6570\u636E\u5143\u6570\u636E\u5B58\u50A8\u952E\u540D | \u2705 |\n| `[request]` | `(key: string) => Observable<unknown>` | - | \u81EA\u5B9A\u4E49\u8BF7\u6C42\u4F53 | \u2705 |\n\n> \u53EF\u4EE5\u901A\u8FC7[\u5168\u5C40\u914D\u7F6E](/docs/global-config)\u8986\u76D6\u5B83\u4EEC\u3002"}}};codes=[{id:"cache-getting-started-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { JsonPipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CacheService } from '@delon/cache';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'cache-getting-started-simple',
  template: \`
    <p>value: {{ value | json }}</p>
    <div class="pt-sm">
      Basic:
      <button nz-button (click)="srv.set(key, newValue)">Set</button>
      <button nz-button (click)="value = srv.getNone(key)">Get</button>
      <button nz-button (click)="srv.remove(key)">Remove</button>
      <button nz-button (click)="srv.clear()">Clear</button>
    </div>
    <div class="pt-sm">
      Key is valid request:
      <button nz-button (click)="getByHttp()">Get</button>
    </div>
    <div class="pt-sm">
      Notify:
      <button nz-button (click)="registerNotify()">Register</button>
      <button nz-button (click)="unRegisterNotify()">UnRegister</button>
    </div>
  \`,
  imports: [JsonPipe, NzButtonModule]
})
export class CacheGettingStartedSimple implements OnDestroy {
  value: any;
  key = 'demo';
  private notify$?: Subscription;

  get newValue(): number {
    return +new Date();
  }

  constructor(
    public srv: CacheService,
    private msg: NzMessageService
  ) {}

  getByHttp(): void {
    this.srv.get(\`https://randomuser.me/api/?results=1\`).subscribe(res => {
      this.value = res;
    });
  }

  registerNotify(): void {
    if (this.notify$) this.notify$.unsubscribe();
    this.notify$ = this.srv.notify(this.key).subscribe(res => {
      if (res == null) {
        this.msg.success('register success');
        return;
      }
      this.msg.warning(\`"\${this.key}" new status: \${res.type}\`);
    });
  }

  unRegisterNotify(): void {
    this.srv.cancelNotify(this.key);
  }

  ngOnDestroy(): void {
    if (this.notify$) this.notify$.unsubscribe();
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/cache/docs/demo/simple.md"}];static \u0275fac=function(n){return new(n||c)};static \u0275cmp=p({type:c,selectors:[["cache-getting-started"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,t){n&1&&(i(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),v(4,"cache-getting-started-simple"),s()()()()),n&2&&(m("codes",t.codes)("item",t.item),l(),m("nzGutter",16),l(2),m("item",t.codes[0]),y("id",t.codes[0].id))},dependencies:[T,O,x,D,I],encapsulation:2})};var $=class c{constructor(e,n){this.srv=e;this.msg=n}value;key="demo";notify$;get newValue(){return+new Date}getByHttp(){this.srv.get("https://randomuser.me/api/?results=1").subscribe(e=>{this.value=e})}registerNotify(){this.notify$&&this.notify$.unsubscribe(),this.notify$=this.srv.notify(this.key).subscribe(e=>{if(e==null){this.msg.success("register success");return}this.msg.warning(`"${this.key}" new status: ${e.type}`)})}unRegisterNotify(){this.srv.cancelNotify(this.key)}ngOnDestroy(){this.notify$&&this.notify$.unsubscribe()}static \u0275fac=function(n){return new(n||c)(d(u),d(w))};static \u0275cmp=p({type:c,selectors:[["cache-interceptor-simple"]],decls:23,vars:3,consts:[[1,"pt-sm"],["nz-button","",3,"click"]],template:function(n,t){n&1&&(i(0,"p"),o(1),b(2,"json"),s(),i(3,"div",0),o(4," Basic: "),i(5,"button",1),a("click",function(){return t.srv.set(t.key,t.newValue)}),o(6,"Set"),s(),i(7,"button",1),a("click",function(){return t.value=t.srv.getNone(t.key)}),o(8,"Get"),s(),i(9,"button",1),a("click",function(){return t.srv.remove(t.key)}),o(10,"Remove"),s(),i(11,"button",1),a("click",function(){return t.srv.clear()}),o(12,"Clear"),s()(),i(13,"div",0),o(14," Key is valid request: "),i(15,"button",1),a("click",function(){return t.getByHttp()}),o(16,"Get"),s()(),i(17,"div",0),o(18," Notify: "),i(19,"button",1),a("click",function(){return t.registerNotify()}),o(20,"Register"),s(),i(21,"button",1),a("click",function(){return t.unRegisterNotify()}),o(22,"UnRegister"),s()()),n&2&&(l(),g("value: ",k(2,1,t.value)))},dependencies:[z,_,C,N,S],encapsulation:2})};var G=class c{item={name:"interceptor",langs:["zh-CN"],content:{"zh-CN":{meta:{order:3,title:"Interceptor",description:"\u642D\u914D httpCacheInterceptor Http \u62E6\u622A\u5668\uFF0C\u53EF\u4EE5\u5C06\u7F13\u5B58\u5E94\u7528\u5230 Http \u8BF7\u6C42\u5F53\u4E2D\u3002\u5B83\u53EA\u6709\u51E0\u4E2A\u7279\u5F81\uFF1A\u652F\u6301\u7F13\u5B58\u8FC7\u671F\u65F6\u95F4\u652F\u6301\u81EA\u5B9A\u4E49\u7F13\u5B58 KEY\u652F\u6301\u4EFB\u4F55 Http \u8BF7\u6C42\u3001\u4EFB\u4F55\u6570\u636E\u683C\u5F0F\u7B26\u5408 Http \u7F13\u5B58\u54CD\u5E94\u6807\u51C6 Cache-Control\u5728 withInterceptors \u4E2D\u5F15\u5165 h...",group:"Documents",path:"packages/cache/docs/interceptor.md",url:"/cache/interceptor/zh"},text:`<h1 id="\u5199\u5728\u524D\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524D\u9762"></i></a>\u5199\u5728\u524D\u9762</h1><p>\u642D\u914D <code>httpCacheInterceptor</code> Http \u62E6\u622A\u5668\uFF0C\u53EF\u4EE5\u5C06\u7F13\u5B58\u5E94\u7528\u5230 Http \u8BF7\u6C42\u5F53\u4E2D\u3002\u5B83\u53EA\u6709\u51E0\u4E2A\u7279\u5F81\uFF1A</p>
<ul>
<li>\u652F\u6301\u7F13\u5B58\u8FC7\u671F\u65F6\u95F4</li>
<li>\u652F\u6301\u81EA\u5B9A\u4E49\u7F13\u5B58 KEY</li>
<li>\u652F\u6301\u4EFB\u4F55 Http \u8BF7\u6C42\u3001\u4EFB\u4F55\u6570\u636E\u683C\u5F0F</li>
<li>\u7B26\u5408 Http \u7F13\u5B58\u54CD\u5E94\u6807\u51C6 <code>Cache-Control</code></li>
</ul>
<h1 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h1><p>\u5728 <code>withInterceptors</code> \u4E2D\u5F15\u5165 <code>httpCacheInterceptor</code>\uFF1A</p>
<pre><code class="language-ts">provideHttpClient(withInterceptors([httpCacheInterceptor]))
</code></pre>
`,api:"",toc:[],raw:`---
order: 3
title: Interceptor
type: Documents
---

# \u5199\u5728\u524D\u9762

\u642D\u914D \`httpCacheInterceptor\` Http \u62E6\u622A\u5668\uFF0C\u53EF\u4EE5\u5C06\u7F13\u5B58\u5E94\u7528\u5230 Http \u8BF7\u6C42\u5F53\u4E2D\u3002\u5B83\u53EA\u6709\u51E0\u4E2A\u7279\u5F81\uFF1A

- \u652F\u6301\u7F13\u5B58\u8FC7\u671F\u65F6\u95F4
- \u652F\u6301\u81EA\u5B9A\u4E49\u7F13\u5B58 KEY
- \u652F\u6301\u4EFB\u4F55 Http \u8BF7\u6C42\u3001\u4EFB\u4F55\u6570\u636E\u683C\u5F0F
- \u7B26\u5408 Http \u7F13\u5B58\u54CD\u5E94\u6807\u51C6 \`Cache-Control\`

# \u5982\u4F55\u4F7F\u7528

\u5728 \`withInterceptors\` \u4E2D\u5F15\u5165 \`httpCacheInterceptor\`\uFF1A

\`\`\`ts
provideHttpClient(withInterceptors([httpCacheInterceptor]))
\`\`\``}}};codes=[{id:"cache-interceptor-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { JsonPipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CacheService } from '@delon/cache';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'cache-interceptor-simple',
  template: \`
    <p>value: {{ value | json }}</p>
    <div class="pt-sm">
      Basic:
      <button nz-button (click)="srv.set(key, newValue)">Set</button>
      <button nz-button (click)="value = srv.getNone(key)">Get</button>
      <button nz-button (click)="srv.remove(key)">Remove</button>
      <button nz-button (click)="srv.clear()">Clear</button>
    </div>
    <div class="pt-sm">
      Key is valid request:
      <button nz-button (click)="getByHttp()">Get</button>
    </div>
    <div class="pt-sm">
      Notify:
      <button nz-button (click)="registerNotify()">Register</button>
      <button nz-button (click)="unRegisterNotify()">UnRegister</button>
    </div>
  \`,
  imports: [JsonPipe, NzButtonModule]
})
export class CacheInterceptorSimple implements OnDestroy {
  value: any;
  key = 'demo';
  private notify$?: Subscription;

  get newValue(): number {
    return +new Date();
  }

  constructor(
    public srv: CacheService,
    private msg: NzMessageService
  ) {}

  getByHttp(): void {
    this.srv.get(\`https://randomuser.me/api/?results=1\`).subscribe(res => {
      this.value = res;
    });
  }

  registerNotify(): void {
    if (this.notify$) this.notify$.unsubscribe();
    this.notify$ = this.srv.notify(this.key).subscribe(res => {
      if (res == null) {
        this.msg.success('register success');
        return;
      }
      this.msg.warning(\`"\${this.key}" new status: \${res.type}\`);
    });
  }

  unRegisterNotify(): void {
    this.srv.cancelNotify(this.key);
  }

  ngOnDestroy(): void {
    if (this.notify$) this.notify$.unsubscribe();
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/cache/docs/demo/simple.md"}];static \u0275fac=function(n){return new(n||c)};static \u0275cmp=p({type:c,selectors:[["cache-interceptor"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,t){n&1&&(i(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),v(4,"cache-interceptor-simple"),s()()()()),n&2&&(m("codes",t.codes)("item",t.item),l(),m("nzGutter",16),l(2),m("item",t.codes[0]),y("id",t.codes[0].id))},dependencies:[T,$,x,D,I],encapsulation:2})};var H=class c{constructor(e,n){this.srv=e;this.msg=n}value;key="demo";notify$;get newValue(){return+new Date}getByHttp(){this.srv.get("https://randomuser.me/api/?results=1").subscribe(e=>{this.value=e})}registerNotify(){this.notify$&&this.notify$.unsubscribe(),this.notify$=this.srv.notify(this.key).subscribe(e=>{if(e==null){this.msg.success("register success");return}this.msg.warning(`"${this.key}" new status: ${e.type}`)})}unRegisterNotify(){this.srv.cancelNotify(this.key)}ngOnDestroy(){this.notify$&&this.notify$.unsubscribe()}static \u0275fac=function(n){return new(n||c)(d(u),d(w))};static \u0275cmp=p({type:c,selectors:[["cache-service-simple"]],decls:23,vars:3,consts:[[1,"pt-sm"],["nz-button","",3,"click"]],template:function(n,t){n&1&&(i(0,"p"),o(1),b(2,"json"),s(),i(3,"div",0),o(4," Basic: "),i(5,"button",1),a("click",function(){return t.srv.set(t.key,t.newValue)}),o(6,"Set"),s(),i(7,"button",1),a("click",function(){return t.value=t.srv.getNone(t.key)}),o(8,"Get"),s(),i(9,"button",1),a("click",function(){return t.srv.remove(t.key)}),o(10,"Remove"),s(),i(11,"button",1),a("click",function(){return t.srv.clear()}),o(12,"Clear"),s()(),i(13,"div",0),o(14," Key is valid request: "),i(15,"button",1),a("click",function(){return t.getByHttp()}),o(16,"Get"),s()(),i(17,"div",0),o(18," Notify: "),i(19,"button",1),a("click",function(){return t.registerNotify()}),o(20,"Register"),s(),i(21,"button",1),a("click",function(){return t.unRegisterNotify()}),o(22,"UnRegister"),s()()),n&2&&(l(),g("value: ",k(2,1,t.value)))},dependencies:[z,_,C,N,S],encapsulation:2})};var P=class c{item={name:"service",langs:["zh-CN"],content:{"zh-CN":{meta:{order:2,title:"CacheService",description:"\u83B7\u53D6\u7F13\u5B58\u6570\u636E\uFF0C\u82E5 key \u4E0D\u5B58\u5728\u6216\u5DF2\u8FC7\u671F\u5219\u8FD4\u56DE null\u3002\u83B7\u53D6\u7F13\u5B58\uFF0C\u82E5\u4E0D\u5B58\u5728\u5219\u8BBE\u7F6E\u7F13\u5B58\u5BF9\u8C61\uFF0C\u53C2\u6570\u7B49\u540C set()\u3002\u662F\u5426\u7F13\u5B58 key\u3002\u79FB\u9664\u7F13\u5B58 key\u3002\u6E05\u7A7A\u6240\u6709\u7F13\u5B58\u3002key \u76D1\u542C\uFF0C\u5F53 key \u53D8\u66F4\u3001\u8FC7\u671F\u3001\u79FB\u9664\u65F6\u901A\u77E5\uFF0C\u6CE8\u610F\u4EE5\u4E0B\u82E5\u5E72\u7EC6\u8282\uFF1A\u8C03\u7528\u540E\u9664\u518D\u6B21\u8C03\u7528 cancelNotify \u5426\u5219\u6C38\u8FDC\u4E0D\u8FC7\u671F\u76D1\u542C\u5668\u6BCF ",group:"Documents",path:"packages/cache/docs/service.md",url:"/cache/service/zh"},text:"",api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="set"><a class="lake-link"><i data-anchor="set"></i></a>set()</h3><table>
<thead>
<tr>
<th>\u53C2\u6570\u540D</th>
<th>\u7C7B\u578B</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody><tr>
<td><code>key</code></td>
<td><code>string</code></td>
<td>\u7F13\u5B58\u552F\u4E00\u6807\u8BC6\u7B26</td>
</tr>
<tr>
<td><code>data</code></td>
<td>\`any</td>
<td>Observable<any>\`</td>
</tr>
<tr>
<td><code>options</code></td>
<td>\`&#123; type?: &#39;m&#39;</td>
<td>&#39;s&#39;, expire?: number, emitNotify?: boolean &#125;\`</td>
</tr>
</tbody></table>
<h3 id="get"><a class="lake-link"><i data-anchor="get"></i></a>get()</h3><table>
<thead>
<tr>
<th>\u53C2\u6570\u540D</th>
<th>\u7C7B\u578B</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody><tr>
<td><code>key</code></td>
<td><code>string</code></td>
<td>\u7F13\u5B58\u552F\u4E00\u6807\u8BC6\u7B26</td>
</tr>
<tr>
<td><code>options</code></td>
<td>\`&#123; mode?: &#39;promise&#39;</td>
<td>&#39;none&#39;, type?: &#39;m&#39;</td>
</tr>
</tbody></table>
<h3 id="getnone"><a class="lake-link"><i data-anchor="getnone"></i></a>getNone()</h3><p>\u83B7\u53D6\u7F13\u5B58\u6570\u636E\uFF0C\u82E5 <code>key</code> \u4E0D\u5B58\u5728\u6216\u5DF2\u8FC7\u671F\u5219\u8FD4\u56DE null\u3002</p>
<h3 id="tryget"><a class="lake-link"><i data-anchor="tryget"></i></a>tryGet()</h3><p>\u83B7\u53D6\u7F13\u5B58\uFF0C\u82E5\u4E0D\u5B58\u5728\u5219\u8BBE\u7F6E\u7F13\u5B58\u5BF9\u8C61\uFF0C\u53C2\u6570\u7B49\u540C <code>set()</code>\u3002</p>
<h3 id="has"><a class="lake-link"><i data-anchor="has"></i></a>has()</h3><p>\u662F\u5426\u7F13\u5B58 <code>key</code>\u3002</p>
<h3 id="remove"><a class="lake-link"><i data-anchor="remove"></i></a>remove()</h3><p>\u79FB\u9664\u7F13\u5B58 <code>key</code>\u3002</p>
<h3 id="clear"><a class="lake-link"><i data-anchor="clear"></i></a>clear()</h3><p>\u6E05\u7A7A\u6240\u6709\u7F13\u5B58\u3002</p>
<h3 id="notify"><a class="lake-link"><i data-anchor="notify"></i></a>notify()</h3><p><code>key</code> \u76D1\u542C\uFF0C\u5F53 <code>key</code> \u53D8\u66F4\u3001\u8FC7\u671F\u3001\u79FB\u9664\u65F6\u901A\u77E5\uFF0C\u6CE8\u610F\u4EE5\u4E0B\u82E5\u5E72\u7EC6\u8282\uFF1A</p>
<ul>
<li>\u8C03\u7528\u540E\u9664\u518D\u6B21\u8C03\u7528 <code>cancelNotify</code> \u5426\u5219\u6C38\u8FDC\u4E0D\u8FC7\u671F</li>
<li>\u76D1\u542C\u5668\u6BCF <code>freq</code> (\u9ED8\u8BA4\uFF1A3\u79D2) \u6267\u884C\u4E00\u6B21\u8FC7\u671F\u68C0\u67E5</li>
</ul>
<h3 id="cancelnotify"><a class="lake-link"><i data-anchor="cancelnotify"></i></a>cancelNotify()</h3><p>\u53D6\u6D88 <code>key</code> \u76D1\u542C</p>
<h3 id="hasnotify"><a class="lake-link"><i data-anchor="hasnotify"></i></a>hasNotify()</h3><p><code>key</code> \u662F\u5426\u5DF2\u7ECF\u76D1\u542C</p>
<h3 id="clearnotify"><a class="lake-link"><i data-anchor="clearnotify"></i></a>clearNotify()</h3><p>\u6E05\u7A7A\u6240\u6709 <code>key</code> \u7684\u76D1\u542C</p>
<h3 id="freq"><a class="lake-link"><i data-anchor="freq"></i></a>freq()</h3><p>\u8BBE\u7F6E\u76D1\u542C\u9891\u7387\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2\u4E14\u6700\u4F4E <code>20ms</code>\uFF0C\u9ED8\u8BA4\uFF1A<code>3000ms</code>\u3002</p>
<h2 id="lesscodegreatergetless/codegreater_\u548C_lesscodegreatertrygetless/codegreater_\u7684\u533A\u522B"><a class="lake-link"><i data-anchor="lesscodegreatergetless/codegreater_\u548C_lesscodegreatertrygetless/codegreater_\u7684\u533A\u522B"></i></a><code>get</code> \u548C <code>tryGet</code> \u7684\u533A\u522B</h2><p>\u672C\u8D28\u90FD\u662F\u83B7\u53D6\u5E76\u8FD4\u56DE\u7F13\u5B58\u6570\u636E\uFF0C<code>get</code> \u76F8\u6BD4 <code>tryGet</code> \u66F4\u7B80\u5316\uFF0C\u524D\u8005\u6309KEY\u5373\u662FURL\u7EA6\u5B9A\u7684\u98CE\u683C\uFF0C\u540E\u8005\u9700\u6307\u5B9A\u6570\u636E\u6E90\u5BF9\u8C61\u3002</p>
<h2 id="\u9177\u64CD\u4F5C"><a class="lake-link"><i data-anchor="\u9177\u64CD\u4F5C"></i></a>\u9177\u64CD\u4F5C</h2><h3 id="async_\u7BA1\u9053"><a class="lake-link"><i data-anchor="async_\u7BA1\u9053"></i></a>async \u7BA1\u9053</h3><p>RxJS \u548C <code>async</code> \u7BA1\u9053\u4E8C\u8005\u7684\u914D\u5408\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u975E\u5E38\u53CB\u597D\u7684\u4F7F\u7528\u7F13\u5B58\u6570\u636E\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-ts">&#64;Component(&#123;
  template: \`
    &#64;for (unit of units | async; track $index) &#123;
      &lt;li&gt;&#123;&#123;unit&#125;&#125;&lt;/li&gt;
    &#125;\`
&#125;)
export class Component &#123;
  units: this.srv.get(&#39;/data/unit&#39;)
&#125;
</code></pre>
<h3 id="\u7F13\u5B58\u4E0E\u8BF7\u6C42"><a class="lake-link"><i data-anchor="\u7F13\u5B58\u4E0E\u8BF7\u6C42"></i></a>\u7F13\u5B58\u4E0E\u8BF7\u6C42</h3><p>\u6709\u65F6\u9700\u8981\u4F9D\u8D56\u5B57\u5178\u83B7\u53D6\u8FDC\u7A0B\u6570\u636E\u65F6\uFF1A</p>
<pre><code class="language-ts">this.srv
  .get(&#39;/data/unit&#39;)
  .pipe(
    map(units =&gt; this.http.get(\`/trade?unit=$&#123;units&#125;\`))
  );
</code></pre>
`,toc:[{id:"api",title:"API",children:[{id:"set",title:"set()"},{id:"get",title:"get()"},{id:"getnone",title:"getNone()"},{id:"tryget",title:"tryGet()"},{id:"has",title:"has()"},{id:"remove",title:"remove()"},{id:"clear",title:"clear()"},{id:"notify",title:"notify()"},{id:"cancelnotify",title:"cancelNotify()"},{id:"hasnotify",title:"hasNotify()"},{id:"clearnotify",title:"clearNotify()"},{id:"freq",title:"freq()"}]},{id:"",title:""},{id:"\u9177\u64CD\u4F5C",title:"\u9177\u64CD\u4F5C",children:[{id:"async_\u7BA1\u9053",title:"async \u7BA1\u9053"},{id:"\u7F13\u5B58\u4E0E\u8BF7\u6C42",title:"\u7F13\u5B58\u4E0E\u8BF7\u6C42"}]}],raw:"---\norder: 2\ntitle: CacheService\ntype: Documents\n---\n\n## API\n\n### set()\n\n| \u53C2\u6570\u540D | \u7C7B\u578B | \u63CF\u8FF0 |\n| ----- | --- | --- |\n| `key` | `string` | \u7F13\u5B58\u552F\u4E00\u6807\u8BC6\u7B26 |\n| `data` | `any | Observable<any>` | \u7F13\u5B58\u6570\u636E\u6E90\uFF0C\u6570\u636E\u6E90\u4E3A `Observable` \u65F6\uFF0C\u4F9D\u7136\u8FD4\u56DE `Observable`\uFF0C\u5426\u5219\u8FD4\u56DE `void` |\n| `options` | `{ type?: 'm' | 's', expire?: number, emitNotify?: boolean }` | `type` \u5B58\u50A8\u7C7B\u578B\uFF0C'm' \u8868\u793A\u5185\u5B58\uFF0C's' \u8868\u793A\u6301\u4E45<br>`expire` \u8FC7\u671F\u65F6\u95F4\uFF0C\u5355\u4F4D `\u79D2` |\n\n### get()\n\n| \u53C2\u6570\u540D | \u7C7B\u578B | \u63CF\u8FF0 |\n| ----- | --- | --- |\n| `key` | `string` | \u7F13\u5B58\u552F\u4E00\u6807\u8BC6\u7B26 |\n| `options` | `{ mode?: 'promise' | 'none', type?: 'm' | 's', expire?: number, emitNotify?: boolean }` | `mode` \u6307\u5B9A\u83B7\u53D6\u7F13\u5B58\u7684\u6A21\u5F0F\uFF1A<br>1\u3001`promise` \u8868\u793A\u82E5\u4E0D\u5B58 `key` \u5219\u628A `key` \u5F53URL\u53D1\u8D77\u8BF7\u6C42\u5E76\u7F13\u5B58\u4E14\u8FD4\u56DE Observable<br>2\u3001`none` \u8868\u793A\u76F4\u63A5\u8FD4\u56DE\u6570\u636E\u82E5KEY\u4E0D\u5B58\u5728\u5219\u76F4\u63A5\u8FD4\u56DE `null`<br><br>`type` \u5B58\u50A8\u7C7B\u578B\uFF0C'm' \u8868\u793A\u5185\u5B58\uFF0C's' \u8868\u793A\u6301\u4E45<br>`expire` \u8FC7\u671F\u65F6\u95F4\uFF0C\u5355\u4F4D `\u79D2` |\n\n### getNone()\n\n\u83B7\u53D6\u7F13\u5B58\u6570\u636E\uFF0C\u82E5 `key` \u4E0D\u5B58\u5728\u6216\u5DF2\u8FC7\u671F\u5219\u8FD4\u56DE null\u3002\n\n### tryGet()\n\n\u83B7\u53D6\u7F13\u5B58\uFF0C\u82E5\u4E0D\u5B58\u5728\u5219\u8BBE\u7F6E\u7F13\u5B58\u5BF9\u8C61\uFF0C\u53C2\u6570\u7B49\u540C `set()`\u3002\n\n### has()\n\n\u662F\u5426\u7F13\u5B58 `key`\u3002\n\n### remove()\n\n\u79FB\u9664\u7F13\u5B58 `key`\u3002\n\n### clear()\n\n\u6E05\u7A7A\u6240\u6709\u7F13\u5B58\u3002\n\n### notify()\n\n`key` \u76D1\u542C\uFF0C\u5F53 `key` \u53D8\u66F4\u3001\u8FC7\u671F\u3001\u79FB\u9664\u65F6\u901A\u77E5\uFF0C\u6CE8\u610F\u4EE5\u4E0B\u82E5\u5E72\u7EC6\u8282\uFF1A\n\n- \u8C03\u7528\u540E\u9664\u518D\u6B21\u8C03\u7528 `cancelNotify` \u5426\u5219\u6C38\u8FDC\u4E0D\u8FC7\u671F\n- \u76D1\u542C\u5668\u6BCF `freq` (\u9ED8\u8BA4\uFF1A3\u79D2) \u6267\u884C\u4E00\u6B21\u8FC7\u671F\u68C0\u67E5\n\n### cancelNotify()\n\n\u53D6\u6D88 `key` \u76D1\u542C\n\n### hasNotify()\n\n`key` \u662F\u5426\u5DF2\u7ECF\u76D1\u542C\n\n### clearNotify()\n\n\u6E05\u7A7A\u6240\u6709 `key` \u7684\u76D1\u542C\n\n### freq()\n\n\u8BBE\u7F6E\u76D1\u542C\u9891\u7387\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2\u4E14\u6700\u4F4E `20ms`\uFF0C\u9ED8\u8BA4\uFF1A`3000ms`\u3002\n\n## `get` \u548C `tryGet` \u7684\u533A\u522B\n\n\u672C\u8D28\u90FD\u662F\u83B7\u53D6\u5E76\u8FD4\u56DE\u7F13\u5B58\u6570\u636E\uFF0C`get` \u76F8\u6BD4 `tryGet` \u66F4\u7B80\u5316\uFF0C\u524D\u8005\u6309KEY\u5373\u662FURL\u7EA6\u5B9A\u7684\u98CE\u683C\uFF0C\u540E\u8005\u9700\u6307\u5B9A\u6570\u636E\u6E90\u5BF9\u8C61\u3002\n\n## \u9177\u64CD\u4F5C\n\n### async \u7BA1\u9053\n\nRxJS \u548C `async` \u7BA1\u9053\u4E8C\u8005\u7684\u914D\u5408\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u975E\u5E38\u53CB\u597D\u7684\u4F7F\u7528\u7F13\u5B58\u6570\u636E\uFF0C\u4F8B\u5982\uFF1A\n\n```ts\n@Component({\n  template: `\n    @for (unit of units | async; track $index) {\n      <li>{{unit}}</li>\n    }`\n})\nexport class Component {\n  units: this.srv.get('/data/unit')\n}\n```\n\n### \u7F13\u5B58\u4E0E\u8BF7\u6C42\n\n\u6709\u65F6\u9700\u8981\u4F9D\u8D56\u5B57\u5178\u83B7\u53D6\u8FDC\u7A0B\u6570\u636E\u65F6\uFF1A\n\n```ts\nthis.srv\n  .get('/data/unit')\n  .pipe(\n    map(units => this.http.get(`/trade?unit=${units}`))\n  );\n```"}}};codes=[{id:"cache-service-simple",name:"simple",title:{"zh-CN":"\u57FA\u7840\u6837\u4F8B","en-US":"Basic Usage"},code:`import { JsonPipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CacheService } from '@delon/cache';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'cache-service-simple',
  template: \`
    <p>value: {{ value | json }}</p>
    <div class="pt-sm">
      Basic:
      <button nz-button (click)="srv.set(key, newValue)">Set</button>
      <button nz-button (click)="value = srv.getNone(key)">Get</button>
      <button nz-button (click)="srv.remove(key)">Remove</button>
      <button nz-button (click)="srv.clear()">Clear</button>
    </div>
    <div class="pt-sm">
      Key is valid request:
      <button nz-button (click)="getByHttp()">Get</button>
    </div>
    <div class="pt-sm">
      Notify:
      <button nz-button (click)="registerNotify()">Register</button>
      <button nz-button (click)="unRegisterNotify()">UnRegister</button>
    </div>
  \`,
  imports: [JsonPipe, NzButtonModule]
})
export class CacheServiceSimple implements OnDestroy {
  value: any;
  key = 'demo';
  private notify$?: Subscription;

  get newValue(): number {
    return +new Date();
  }

  constructor(
    public srv: CacheService,
    private msg: NzMessageService
  ) {}

  getByHttp(): void {
    this.srv.get(\`https://randomuser.me/api/?results=1\`).subscribe(res => {
      this.value = res;
    });
  }

  registerNotify(): void {
    if (this.notify$) this.notify$.unsubscribe();
    this.notify$ = this.srv.notify(this.key).subscribe(res => {
      if (res == null) {
        this.msg.success('register success');
        return;
      }
      this.msg.warning(\`"\${this.key}" new status: \${res.type}\`);
    });
  }

  unRegisterNotify(): void {
    this.srv.cancelNotify(this.key);
  }

  ngOnDestroy(): void {
    if (this.notify$) this.notify$.unsubscribe();
  }
}`,order:0,type:"demo",summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:"packages/cache/docs/demo/simple.md"}];static \u0275fac=function(n){return new(n||c)};static \u0275cmp=p({type:c,selectors:[["cache-service"]],hostAttrs:[1,"d-block"],decls:5,vars:5,consts:[[3,"codes","item"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[3,"item"]],template:function(n,t){n&1&&(i(0,"app-docs",0)(1,"div",1)(2,"div",2)(3,"code-box",3),v(4,"cache-service-simple"),s()()()()),n&2&&(m("codes",t.codes)("item",t.item),l(),m("nzGutter",16),l(2),m("item",t.codes[0]),y("id",t.codes[0].id))},dependencies:[T,H,x,D,I],encapsulation:2})};var ft=[{path:"",component:ne,children:[{path:"getting-started",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started/:lang",component:R},{path:"interceptor",redirectTo:"interceptor/zh",pathMatch:"full"},{path:"interceptor/:lang",component:G},{path:"service",redirectTo:"service/zh",pathMatch:"full"},{path:"service/:lang",component:P}]}];export{ft as routes};
