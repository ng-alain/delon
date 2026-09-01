import{$c as wo,$o as lt,Aa as en,Ct as Hd,Gc as vt,Ii as _a,Jt as K5,Mc as u$1,Mi as _,Oc as tp,Ri as _e,Tt as I,Wo as lA,Xr as Vt,Yr as Vs,Zi as b,Zt as Ke,bl as z,ec as re,gl as ye,gs as ne,ho as ie$1,lr as S,mc as si,nl as x,pa as ci,pt as Gse,qa as g,qn as Q5,qo as le,rc as rn,tt as Fe,zs as q5}from"./chunk-DjEIGkM3.js";import{r as Ad}from"./chunk-DniIbunx.js";import{n as Ue,u as ln}from"./chunk-C8Kq7pnr.js";import{t as X}from"./main-BVCIPMT4.js";import"./chunk-BaLClJNm.js";import"./chunk-DYEIxuDB.js";import{t as rt}from"./chunk-DaGDDpY9.js";import{t as ee}from"./chunk-BSdR-Qg0.js";var ie=new b(`DC_STORE_STORAGE_TOKEN`,{providedIn:`root`,factory:()=>new J});var J=class{platform=u$1(ye);get(e){return this.platform.isBrowser?JSON.parse(localStorage.getItem(e)??`null`)??null:null}set(e,n){return this.platform.isBrowser&&localStorage.setItem(e,JSON.stringify(n)),!0}remove(e){this.platform.isBrowser&&localStorage.removeItem(e)}};var u=class c{store=u$1(ie);http=u$1(Vs);platform=u$1(ye);memory=new Map;notifyBuffer=new Map;meta=new Set;freqTick=3e3;freqTime;cog=u$1(rn).merge(`cache`,{mode:`promise`,reName:``,prefix:``,meta_key:`__cache_meta`});constructor(){this.platform.isBrowser&&(this.loadMeta(),this.startExpireNotify())}pushMeta(e){this.meta.has(e)||(this.meta.add(e),this.saveMeta())}removeMeta(e){this.meta.has(e)&&(this.meta.delete(e),this.saveMeta())}loadMeta(){let e=this.store.get(this.cog.meta_key);e&&e.v&&e.v.forEach(n=>this.meta.add(n))}saveMeta(){let e=[];this.meta.forEach(n=>e.push(n)),this.store.set(this.cog.meta_key,{v:e,e:0})}getMeta(){return this.meta}set(e,n,t={}){if(!this.platform.isBrowser)return;let r=0,{type:f,expire:ce}=this.cog;t=g({type:f,expire:ce},t),t.expire&&(r=tp(new Date,t.expire).valueOf());let F=t.emitNotify!==!1;if(!(n instanceof x)){this.save(t.type,e,{v:n,e:r},F);return}return n.pipe(Ke(le=>{this.save(t.type,e,{v:le,e:r},F)}))}save(e,n,t,r=!0){e===`m`?this.memory.set(n,t):(this.store.set(this.cog.prefix+n,t),this.pushMeta(n)),r&&this.runNotify(n,`set`)}get(e,n={}){if(!this.platform.isBrowser)return null;let t=n.mode!==`none`&&this.cog.mode===`promise`,r=this.memory.has(e)?this.memory.get(e):this.store.get(this.cog.prefix+e);return!r||r.e&&r.e>0&&r.e<new Date().valueOf()?t?(this.cog.request?this.cog.request(e):this.http.get(e)).pipe(z(f=>Gse(f,this.cog.reName,f)),Ke(f=>this.set(e,f,{type:n.type,expire:n.expire,emitNotify:n.emitNotify}))):null:t?S(r.v):r.v}getNone(e){return this.get(e,{mode:`none`})}tryGet(e,n,t={}){if(!this.platform.isBrowser)return null;let r=this.getNone(e);return r===null?n instanceof x?this.set(e,n,t):(this.set(e,n,t),n):S(r)}has(e){return this.memory.has(e)||this.meta.has(e)}_remove(e,n){if(n&&this.runNotify(e,`remove`),this.memory.has(e)){this.memory.delete(e);return}this.store.remove(this.cog.prefix+e),this.removeMeta(e)}remove(e){this.platform.isBrowser&&this._remove(e,!0)}clear(){this.platform.isBrowser&&(this.notifyBuffer.forEach((e,n)=>this.runNotify(n,`remove`)),this.memory.clear(),this.meta.forEach(e=>this.store.remove(this.cog.prefix+e)))}set freq(e){this.freqTick=Math.max(20,e),this.abortExpireNotify(),this.startExpireNotify()}startExpireNotify(){this.checkExpireNotify(),this.runExpireNotify()}runExpireNotify(){this.freqTime=setTimeout(()=>{this.checkExpireNotify(),this.runExpireNotify()},this.freqTick)}checkExpireNotify(){let e=[];this.notifyBuffer.forEach((n,t)=>{this.has(t)&&this.getNone(t)===null&&e.push(t)}),e.forEach(n=>{this.runNotify(n,`expire`),this._remove(n,!1)})}abortExpireNotify(){clearTimeout(this.freqTime)}runNotify(e,n){this.notifyBuffer.has(e)&&this.notifyBuffer.get(e).next({type:n,value:this.getNone(e)})}notify(e){if(!this.notifyBuffer.has(e)){let n=new ie$1(this.getNone(e));this.notifyBuffer.set(e,n)}return this.notifyBuffer.get(e).asObservable()}cancelNotify(e){this.notifyBuffer.has(e)&&(this.notifyBuffer.get(e).unsubscribe(),this.notifyBuffer.delete(e))}hasNotify(e){return this.notifyBuffer.has(e)}clearNotify(){this.notifyBuffer.forEach(e=>e.unsubscribe()),this.notifyBuffer.clear()}ngOnDestroy(){this.memory.clear(),this.abortExpireNotify(),this.clearNotify()}static ɵfac=function(n){return new(n||c)};static ɵprov=_({token:c,factory:c.ɵfac,providedIn:`root`})};new _a(()=>({}));var O=class c{constructor(e,n){this.srv=e;this.msg=n}srv;msg;value;key=`demo`;notify$;get newValue(){return+new Date}getByHttp(){this.srv.get(`https://randomuser.me/api/?results=1`).subscribe(e=>{this.value=e})}registerNotify(){this.notify$&&this.notify$.unsubscribe(),this.notify$=this.srv.notify(this.key).subscribe(e=>{if(e==null){this.msg.success(`register success`);return}this.msg.warning(`"${this.key}" new status: ${e.type}`)})}unRegisterNotify(){this.srv.cancelNotify(this.key)}ngOnDestroy(){this.notify$&&this.notify$.unsubscribe()}static ɵfac=function(n){return new(n||c)(vt(u),vt(Ad))};static ɵcmp=_e({type:c,selectors:[[`cache-getting-started-simple`]],decls:23,vars:3,consts:[[1,`pt-sm`],[`nz-button`,``,3,`click`]],template:function(n,t){n&1&&(ne(0,`p`),en(1),si(2,`json`),le(),ne(3,`div`,0),en(4,` Basic: `),ne(5,`button`,1),Fe(`click`,function(){return t.srv.set(t.key,t.newValue)}),en(6,`Set`),le(),ne(7,`button`,1),Fe(`click`,function(){return t.value=t.srv.getNone(t.key)}),en(8,`Get`),le(),ne(9,`button`,1),Fe(`click`,function(){return t.srv.remove(t.key)}),en(10,`Remove`),le(),ne(11,`button`,1),Fe(`click`,function(){return t.srv.clear()}),en(12,`Clear`),le()(),ne(13,`div`,0),en(14,` Key is valid request: `),ne(15,`button`,1),Fe(`click`,function(){return t.getByHttp()}),en(16,`Get`),le()(),ne(17,`div`,0),en(18,` Notify: `),ne(19,`button`,1),Fe(`click`,function(){return t.registerNotify()}),en(20,`Register`),le(),ne(21,`button`,1),Fe(`click`,function(){return t.unRegisterNotify()}),en(22,`UnRegister`),le()()),n&2&&(I(),wo(`value: `,ci(2,1,t.value)))},dependencies:[Q5,Hd,q5,K5,lA],encapsulation:2})};var R=class c{item={name:`getting-started`,langs:[`zh-CN`],content:{"zh-CN":{meta:{order:1,title:`开始使用`,description:`通常把一些远程数据缓存在内存或 localStorage 持久化，目的是为了减少 Http 请求的成本；这样的数据通常是字典、城市数据等。缓存的获取应该是非常简单的，我们不应该把时间浪费在如何保证加载这件事情上，因此 @delon/cache 更多是以约定为前提。key 作为缓存的唯一键值，它不应该...`,group:`Documents`,path:`packages/cache/docs/getting-started.md`,url:`/cache/getting-started/zh`},text:`<h2 id="\u5199\u5728\u524D\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524D\u9762"></i></a>\u5199\u5728\u524D\u9762</h2><p>\u901A\u5E38\u628A\u4E00\u4E9B\u8FDC\u7A0B\u6570\u636E\u7F13\u5B58\u5728\u5185\u5B58\u6216 <code>localStorage</code> \u6301\u4E45\u5316\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u51CF\u5C11 Http \u8BF7\u6C42\u7684\u6210\u672C\uFF1B\u8FD9\u6837\u7684\u6570\u636E\u901A\u5E38\u662F\u5B57\u5178\u3001\u57CE\u5E02\u6570\u636E\u7B49\u3002</p>
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
`,api:``,toc:[{id:`写在前面`,title:`写在前面`},{id:`如何使用`,title:`如何使用`,children:[{id:`参数`,title:`参数`}]}],raw:"---\norder: 1\ntitle: 开始使用\ntype: Documents\n---\n\n## 写在前面\n\n通常把一些远程数据缓存在内存或 `localStorage` 持久化，目的是为了减少 Http 请求的成本；这样的数据通常是字典、城市数据等。\n\n缓存的获取应该是非常简单的，我们不应该把时间浪费在如何保证加载这件事情上，因此 `@delon/cache` 更多是以**约定**为前提。`key` 作为缓存的唯一键值，它不应该只是单纯的一个标识符，如果遵守某种约定它的存在会更有价值。`@delon/cache` 默认情况下不光把 `key` 当作唯一标识符，同时它还是一个用于获取远程数据的有效HTTP，例如：\n\n```ts\ncacheService.get('/data/unit');\n```\n\n在以往我们会认为，在它之前应该需要加一个：\n\n```ts\ncacheService.set('/data/unit', [ '个', '件' ]);\n```\n\n才能够确保获取到缓存数据。\n\n而对于 `@delon/cache` 而言，你无须 `set` 方法，直接使用 `get` 获取到单位字典，因为我们有一种**约定**，当缓存不存在透过 `key` 作为HTTP请求数据缓存后再返回。\n\n缓存的获取与设置都是通过 [CacheService](/cache/service) 来操作，你只需要将 `CacheService` 导入对应的类当中即可。\n\n## 如何使用\n\n**安装**\n\n```bash\nnpm i -S @delon/cache\n```\n\n### 参数\n\n| 成员 | 说明 | 类型 | 默认值 | 全局配置 |\n|----|----|----|-----|------|\n| `[mode]` | `promise,none` | `promise` | 缓存模式；`promise` 约定模式，允许 `key` 作为 http 获取数据；`none` 正常模式 | ✅ |\n| `[reName]` | `string` | - | 重命名返回参数，例如：<br> `null` 返回体为内容<br>`list` 返回体应 `{ list: [] }`<br>`result.list` 返回体应 `{ result: { list: [] } }` | ✅ |\n| `[expire]` | `number` | - | 设置默认过期时间值（单位：秒） | ✅ |\n| `[prefix]` | `string` | - | 持久化数据键值前缀 | ✅ |\n| `[meta_key]` | `string` | `__cache_meta` | 持久化数据元数据存储键名 | ✅ |\n| `[request]` | `(key: string) => Observable<unknown>` | - | 自定义请求体 | ✅ |\n\n> 可以通过[全局配置](/docs/global-config)覆盖它们。"}}};codes=[{id:`cache-getting-started-simple`,name:`simple`,title:{"zh-CN":`基础样例`,"en-US":`Basic Usage`},code:`import { JsonPipe } from '@angular/common';
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
}`,order:0,type:`demo`,summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:`packages/cache/docs/demo/simple.md`}];static ɵfac=function(n){return new(n||c)};static ɵcmp=_e({type:c,selectors:[[`cache-getting-started`]],hostAttrs:[1,`d-block`],decls:5,vars:5,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(n,t){n&1&&(ne(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),lt(4,`cache-getting-started-simple`),le()()()()),n&2&&(re(`codes`,t.codes)(`item`,t.item),I(),re(`nzGutter`,16),I(2),re(`item`,t.codes[0]),Vt(`id`,t.codes[0].id))},dependencies:[rt,O,ln,Ue,X],encapsulation:2})};var $=class c{constructor(e,n){this.srv=e;this.msg=n}srv;msg;value;key=`demo`;notify$;get newValue(){return+new Date}getByHttp(){this.srv.get(`https://randomuser.me/api/?results=1`).subscribe(e=>{this.value=e})}registerNotify(){this.notify$&&this.notify$.unsubscribe(),this.notify$=this.srv.notify(this.key).subscribe(e=>{if(e==null){this.msg.success(`register success`);return}this.msg.warning(`"${this.key}" new status: ${e.type}`)})}unRegisterNotify(){this.srv.cancelNotify(this.key)}ngOnDestroy(){this.notify$&&this.notify$.unsubscribe()}static ɵfac=function(n){return new(n||c)(vt(u),vt(Ad))};static ɵcmp=_e({type:c,selectors:[[`cache-interceptor-simple`]],decls:23,vars:3,consts:[[1,`pt-sm`],[`nz-button`,``,3,`click`]],template:function(n,t){n&1&&(ne(0,`p`),en(1),si(2,`json`),le(),ne(3,`div`,0),en(4,` Basic: `),ne(5,`button`,1),Fe(`click`,function(){return t.srv.set(t.key,t.newValue)}),en(6,`Set`),le(),ne(7,`button`,1),Fe(`click`,function(){return t.value=t.srv.getNone(t.key)}),en(8,`Get`),le(),ne(9,`button`,1),Fe(`click`,function(){return t.srv.remove(t.key)}),en(10,`Remove`),le(),ne(11,`button`,1),Fe(`click`,function(){return t.srv.clear()}),en(12,`Clear`),le()(),ne(13,`div`,0),en(14,` Key is valid request: `),ne(15,`button`,1),Fe(`click`,function(){return t.getByHttp()}),en(16,`Get`),le()(),ne(17,`div`,0),en(18,` Notify: `),ne(19,`button`,1),Fe(`click`,function(){return t.registerNotify()}),en(20,`Register`),le(),ne(21,`button`,1),Fe(`click`,function(){return t.unRegisterNotify()}),en(22,`UnRegister`),le()()),n&2&&(I(),wo(`value: `,ci(2,1,t.value)))},dependencies:[Q5,Hd,q5,K5,lA],encapsulation:2})};var G=class c{item={name:`interceptor`,langs:[`zh-CN`],content:{"zh-CN":{meta:{order:3,title:`Interceptor`,description:`搭配 httpCacheInterceptor Http 拦截器，可以将缓存应用到 Http 请求当中。它只有几个特征：支持缓存过期时间支持自定义缓存 KEY支持任何 Http 请求、任何数据格式符合 Http 缓存响应标准 Cache-Control在 withInterceptors 中引入 h...`,group:`Documents`,path:`packages/cache/docs/interceptor.md`,url:`/cache/interceptor/zh`},text:`<h2 id="\u5199\u5728\u524D\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524D\u9762"></i></a>\u5199\u5728\u524D\u9762</h2><p>\u642D\u914D <code>httpCacheInterceptor</code> Http \u62E6\u622A\u5668\uFF0C\u53EF\u4EE5\u5C06\u7F13\u5B58\u5E94\u7528\u5230 Http \u8BF7\u6C42\u5F53\u4E2D\u3002\u5B83\u53EA\u6709\u51E0\u4E2A\u7279\u5F81\uFF1A</p>
<ul>
<li>\u652F\u6301\u7F13\u5B58\u8FC7\u671F\u65F6\u95F4</li>
<li>\u652F\u6301\u81EA\u5B9A\u4E49\u7F13\u5B58 KEY</li>
<li>\u652F\u6301\u4EFB\u4F55 Http \u8BF7\u6C42\u3001\u4EFB\u4F55\u6570\u636E\u683C\u5F0F</li>
<li>\u7B26\u5408 Http \u7F13\u5B58\u54CD\u5E94\u6807\u51C6 <code>Cache-Control</code></li>
</ul>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u5728 <code>withInterceptors</code> \u4E2D\u5F15\u5165 <code>httpCacheInterceptor</code>\uFF1A</p>
<pre><code class="language-ts">provideHttpClient(withInterceptors([httpCacheInterceptor]))
</code></pre>
`,api:``,toc:[{id:`写在前面`,title:`写在前面`},{id:`如何使用`,title:`如何使用`}],raw:`---
order: 3
title: Interceptor
type: Documents
---

## \u5199\u5728\u524D\u9762

\u642D\u914D \`httpCacheInterceptor\` Http \u62E6\u622A\u5668\uFF0C\u53EF\u4EE5\u5C06\u7F13\u5B58\u5E94\u7528\u5230 Http \u8BF7\u6C42\u5F53\u4E2D\u3002\u5B83\u53EA\u6709\u51E0\u4E2A\u7279\u5F81\uFF1A

- \u652F\u6301\u7F13\u5B58\u8FC7\u671F\u65F6\u95F4
- \u652F\u6301\u81EA\u5B9A\u4E49\u7F13\u5B58 KEY
- \u652F\u6301\u4EFB\u4F55 Http \u8BF7\u6C42\u3001\u4EFB\u4F55\u6570\u636E\u683C\u5F0F
- \u7B26\u5408 Http \u7F13\u5B58\u54CD\u5E94\u6807\u51C6 \`Cache-Control\`

## \u5982\u4F55\u4F7F\u7528

\u5728 \`withInterceptors\` \u4E2D\u5F15\u5165 \`httpCacheInterceptor\`\uFF1A

\`\`\`ts
provideHttpClient(withInterceptors([httpCacheInterceptor]))
\`\`\``}}};codes=[{id:`cache-interceptor-simple`,name:`simple`,title:{"zh-CN":`基础样例`,"en-US":`Basic Usage`},code:`import { JsonPipe } from '@angular/common';
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
}`,order:0,type:`demo`,summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:`packages/cache/docs/demo/simple.md`}];static ɵfac=function(n){return new(n||c)};static ɵcmp=_e({type:c,selectors:[[`cache-interceptor`]],hostAttrs:[1,`d-block`],decls:5,vars:5,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(n,t){n&1&&(ne(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),lt(4,`cache-interceptor-simple`),le()()()()),n&2&&(re(`codes`,t.codes)(`item`,t.item),I(),re(`nzGutter`,16),I(2),re(`item`,t.codes[0]),Vt(`id`,t.codes[0].id))},dependencies:[rt,$,ln,Ue,X],encapsulation:2})};var H=class c{constructor(e,n){this.srv=e;this.msg=n}srv;msg;value;key=`demo`;notify$;get newValue(){return+new Date}getByHttp(){this.srv.get(`https://randomuser.me/api/?results=1`).subscribe(e=>{this.value=e})}registerNotify(){this.notify$&&this.notify$.unsubscribe(),this.notify$=this.srv.notify(this.key).subscribe(e=>{if(e==null){this.msg.success(`register success`);return}this.msg.warning(`"${this.key}" new status: ${e.type}`)})}unRegisterNotify(){this.srv.cancelNotify(this.key)}ngOnDestroy(){this.notify$&&this.notify$.unsubscribe()}static ɵfac=function(n){return new(n||c)(vt(u),vt(Ad))};static ɵcmp=_e({type:c,selectors:[[`cache-service-simple`]],decls:23,vars:3,consts:[[1,`pt-sm`],[`nz-button`,``,3,`click`]],template:function(n,t){n&1&&(ne(0,`p`),en(1),si(2,`json`),le(),ne(3,`div`,0),en(4,` Basic: `),ne(5,`button`,1),Fe(`click`,function(){return t.srv.set(t.key,t.newValue)}),en(6,`Set`),le(),ne(7,`button`,1),Fe(`click`,function(){return t.value=t.srv.getNone(t.key)}),en(8,`Get`),le(),ne(9,`button`,1),Fe(`click`,function(){return t.srv.remove(t.key)}),en(10,`Remove`),le(),ne(11,`button`,1),Fe(`click`,function(){return t.srv.clear()}),en(12,`Clear`),le()(),ne(13,`div`,0),en(14,` Key is valid request: `),ne(15,`button`,1),Fe(`click`,function(){return t.getByHttp()}),en(16,`Get`),le()(),ne(17,`div`,0),en(18,` Notify: `),ne(19,`button`,1),Fe(`click`,function(){return t.registerNotify()}),en(20,`Register`),le(),ne(21,`button`,1),Fe(`click`,function(){return t.unRegisterNotify()}),en(22,`UnRegister`),le()()),n&2&&(I(),wo(`value: `,ci(2,1,t.value)))},dependencies:[Q5,Hd,q5,K5,lA],encapsulation:2})};var P=class c{item={name:`service`,langs:[`zh-CN`],content:{"zh-CN":{meta:{order:2,title:`CacheService`,description:`获取缓存数据，若 key 不存在或已过期则返回 null。获取缓存，若不存在则设置缓存对象，参数等同 set()。是否缓存 key。移除缓存 key。清空所有缓存。key 监听，当 key 变更、过期、移除时通知，注意以下若干细节：调用后除再次调用 cancelNotify 否则永远不过期监听器每 `,group:`Documents`,path:`packages/cache/docs/service.md`,url:`/cache/service/zh`},text:``,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="set"><a class="lake-link"><i data-anchor="set"></i></a>set()</h3><table>
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
`,toc:[{id:`api`,title:`API`,children:[{id:`set`,title:`set()`},{id:`get`,title:`get()`},{id:`getnone`,title:`getNone()`},{id:`tryget`,title:`tryGet()`},{id:`has`,title:`has()`},{id:`remove`,title:`remove()`},{id:`clear`,title:`clear()`},{id:`notify`,title:`notify()`},{id:`cancelnotify`,title:`cancelNotify()`},{id:`hasnotify`,title:`hasNotify()`},{id:`clearnotify`,title:`clearNotify()`},{id:`freq`,title:`freq()`}]},{id:``,title:``},{id:`酷操作`,title:`酷操作`,children:[{id:`async_管道`,title:`async 管道`},{id:`缓存与请求`,title:`缓存与请求`}]}],raw:"---\norder: 2\ntitle: CacheService\ntype: Documents\n---\n\n## API\n\n### set()\n\n| 参数名 | 类型 | 描述 |\n| ----- | --- | --- |\n| `key` | `string` | 缓存唯一标识符 |\n| `data` | `any | Observable<any>` | 缓存数据源，数据源为 `Observable` 时，依然返回 `Observable`，否则返回 `void` |\n| `options` | `{ type?: 'm' | 's', expire?: number, emitNotify?: boolean }` | `type` 存储类型，'m' 表示内存，'s' 表示持久<br>`expire` 过期时间，单位 `秒` |\n\n### get()\n\n| 参数名 | 类型 | 描述 |\n| ----- | --- | --- |\n| `key` | `string` | 缓存唯一标识符 |\n| `options` | `{ mode?: 'promise' | 'none', type?: 'm' | 's', expire?: number, emitNotify?: boolean }` | `mode` 指定获取缓存的模式：<br>1、`promise` 表示若不存 `key` 则把 `key` 当URL发起请求并缓存且返回 Observable<br>2、`none` 表示直接返回数据若KEY不存在则直接返回 `null`<br><br>`type` 存储类型，'m' 表示内存，'s' 表示持久<br>`expire` 过期时间，单位 `秒` |\n\n### getNone()\n\n获取缓存数据，若 `key` 不存在或已过期则返回 null。\n\n### tryGet()\n\n获取缓存，若不存在则设置缓存对象，参数等同 `set()`。\n\n### has()\n\n是否缓存 `key`。\n\n### remove()\n\n移除缓存 `key`。\n\n### clear()\n\n清空所有缓存。\n\n### notify()\n\n`key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：\n\n- 调用后除再次调用 `cancelNotify` 否则永远不过期\n- 监听器每 `freq` (默认：3秒) 执行一次过期检查\n\n### cancelNotify()\n\n取消 `key` 监听\n\n### hasNotify()\n\n`key` 是否已经监听\n\n### clearNotify()\n\n清空所有 `key` 的监听\n\n### freq()\n\n设置监听频率，单位：毫秒且最低 `20ms`，默认：`3000ms`。\n\n## `get` 和 `tryGet` 的区别\n\n本质都是获取并返回缓存数据，`get` 相比 `tryGet` 更简化，前者按KEY即是URL约定的风格，后者需指定数据源对象。\n\n## 酷操作\n\n### async 管道\n\nRxJS 和 `async` 管道二者的配合可以帮助我们非常友好的使用缓存数据，例如：\n\n```ts\n@Component({\n  template: `\n    @for (unit of units | async; track $index) {\n      <li>{{unit}}</li>\n    }`\n})\nexport class Component {\n  units: this.srv.get('/data/unit')\n}\n```\n\n### 缓存与请求\n\n有时需要依赖字典获取远程数据时：\n\n```ts\nthis.srv\n  .get('/data/unit')\n  .pipe(\n    map(units => this.http.get(`/trade?unit=${units}`))\n  );\n```"}}};codes=[{id:`cache-service-simple`,name:`simple`,title:{"zh-CN":`基础样例`,"en-US":`Basic Usage`},code:`import { JsonPipe } from '@angular/common';
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
}`,order:0,type:`demo`,summary:{"en-US":`<p>Simplest of usage.</p>
`,"zh-CN":`<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
`},summary_raw:{"en-US":`Simplest of usage.
`,"zh-CN":`\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
`},path:`packages/cache/docs/demo/simple.md`}];static ɵfac=function(n){return new(n||c)};static ɵcmp=_e({type:c,selectors:[[`cache-service`]],hostAttrs:[1,`d-block`],decls:5,vars:5,consts:[[3,`codes`,`item`],[`nz-row`,``,3,`nzGutter`],[`nz-col`,``,`nzSpan`,`24`],[3,`item`]],template:function(n,t){n&1&&(ne(0,`app-docs`,0)(1,`div`,1)(2,`div`,2)(3,`code-box`,3),lt(4,`cache-service-simple`),le()()()()),n&2&&(re(`codes`,t.codes)(`item`,t.item),I(),re(`nzGutter`,16),I(2),re(`item`,t.codes[0]),Vt(`id`,t.codes[0].id))},dependencies:[rt,H,ln,Ue,X],encapsulation:2})};var ft=[{path:``,component:ee,children:[{path:`getting-started`,redirectTo:`getting-started/zh`,pathMatch:`full`},{path:`getting-started/:lang`,component:R},{path:`interceptor`,redirectTo:`interceptor/zh`,pathMatch:`full`},{path:`interceptor/:lang`,component:G},{path:`service`,redirectTo:`service/zh`,pathMatch:`full`},{path:`service/:lang`,component:P}]}];export{ft as routes};