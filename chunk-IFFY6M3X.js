import{a as r}from"./chunk-PJYRP6KM.js";import{a as M}from"./chunk-C3MNSEWK.js";import"./chunk-XU2NL7K2.js";import"./chunk-J335YUGO.js";import"./chunk-62ZNMC2L.js";import"./chunk-KQR6CVZA.js";import"./chunk-7O6624BH.js";import{Wa as o,sb as a,vb as i}from"./chunk-DBBCITIJ.js";var l=class t{item={name:"getting-started",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:1,title:"Getting Started",description:"@delon/util is a collection of tool functions.",group:"Documents",path:"packages/util/docs/getting-started.en-US.md",url:"/util/getting-started/en"},text:`<p><code>&#64;delon/util</code> is a collection of tool functions.</p>
`,api:"",toc:[],raw:`---
order: 1
title: Getting Started
type: Documents
---

\`@delon/util\` is a collection of tool functions.`},"zh-CN":{meta:{order:1,title:"\u5F00\u59CB\u4F7F\u7528",description:"@delon/util \u662F\u4E00\u7EC4\u65E5\u5E38\u666E\u901A\u4F7F\u7528\u7684\u5DE5\u5177\u51FD\u6570\u7684\u96C6\u5408\u3002",group:"Documents",path:"packages/util/docs/getting-started.zh-CN.md",url:"/util/getting-started/zh"},text:`<p>&#64;delon/util \u662F\u4E00\u7EC4\u65E5\u5E38\u666E\u901A\u4F7F\u7528\u7684\u5DE5\u5177\u51FD\u6570\u7684\u96C6\u5408\u3002</p>
`,api:"",toc:[],raw:`---
order: 1
title: \u5F00\u59CB\u4F7F\u7528
type: Documents
---

@delon/util \u662F\u4E00\u7EC4\u65E5\u5E38\u666E\u901A\u4F7F\u7528\u7684\u5DE5\u5177\u51FD\u6570\u7684\u96C6\u5408\u3002`}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["util-getting-started"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&i(0,"app-docs",0),e&2&&a("codes",n.codes)("item",n.item)},dependencies:[r],encapsulation:2})};var p=class t{item={name:"array",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"array",subtitle:"Array&Tree,flat,groupBy,uniq",description:"Used for conversion and access between arrays and trees. It is generally used with nz-tree.You can override [ArrayService] to set the mapping name thr...",group:"Tools",order:0,path:"packages/util/array/index.en-US.md",url:"/util/array/en"},text:`<h2 id="arrayservice"><a class="lake-link"><i data-anchor="arrayservice"></i></a>ArrayService<label class="api-type-label service">service</label></h2><p>Used for conversion and access between arrays and trees. It is generally used with <code>nz-tree</code>.</p>
<blockquote>
<p>You can override [ArrayService] to set the mapping name through <a href="/docs/global-config">Global Configuration</a>.</p>
</blockquote>
<h3 id="treetoarr"><a class="lake-link"><i data-anchor="treetoarr"></i></a>treeToArr</h3><p>Convert tree structure to array structure.</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>deepMapName</code></td>
<td>Deep map name</td>
<td><code>string</code></td>
<td><code>deep</code></td>
</tr>
<tr>
<td><code>parentMapName</code></td>
<td>Parent item map name of flat array</td>
<td><code>string</code></td>
<td><code>parent</code></td>
</tr>
<tr>
<td><code>childrenMapName</code></td>
<td>Source data children map name</td>
<td><code>string</code></td>
<td><code>children</code></td>
</tr>
<tr>
<td><code>clearChildren</code></td>
<td>Whether remove <code>children</code> item</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>cb</code></td>
<td>Callback event</td>
<td><code>(item: any, parent: any, deep: number) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="arrtotree"><a class="lake-link"><i data-anchor="arrtotree"></i></a>arrToTree</h3><p>Convert array structure to tree structure.</p>
<blockquote>
<p>If <code>parent_id</code> is a string, the root value <strong>Make Sure</strong> is an empty string.</p>
</blockquote>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>idMapName</code></td>
<td>Id map name</td>
<td><code>string</code></td>
<td><code>id</code></td>
</tr>
<tr>
<td><code>parentIdMapName</code></td>
<td>Parent id map name</td>
<td><code>string</code></td>
<td><code>parent_id</code></td>
</tr>
<tr>
<td><code>rootParentIdValue</code></td>
<td>Root parent id value, the most suitable root parent id value will be automatically calculated by default</td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>childrenMapName</code></td>
<td>Children map name</td>
<td><code>string</code></td>
<td><code>children</code></td>
</tr>
<tr>
<td><code>cb</code></td>
<td>Callback event</td>
<td><code>(item: any) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="arrtotreenode"><a class="lake-link"><i data-anchor="arrtotreenode"></i></a>arrToTreeNode</h3><p>Convert array structure to <code>nz-tree</code> data structure.</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>idMapName</code></td>
<td>Id map name</td>
<td><code>string</code></td>
<td><code>id</code></td>
</tr>
<tr>
<td><code>parentIdMapName</code></td>
<td>Parent id map name</td>
<td><code>string</code></td>
<td><code>parent_id</code></td>
</tr>
<tr>
<td><code>titleMapName</code></td>
<td>Title map name</td>
<td><code>string</code></td>
<td><code>title</code></td>
</tr>
<tr>
<td><code>isLeafMapName</code></td>
<td>isLeaf map name, if value does not exist, include <code>children</code> value to determine whether it&#39;s a leaf node</td>
<td><code>string</code></td>
<td><code>isLeaf</code></td>
</tr>
<tr>
<td><code>checkedMapname</code></td>
<td>Checked map name</td>
<td><code>string</code></td>
<td><code>checked</code></td>
</tr>
<tr>
<td><code>selectedMapname</code></td>
<td>Selected map name</td>
<td><code>string</code></td>
<td><code>selected</code></td>
</tr>
<tr>
<td><code>expandedMapname</code></td>
<td>Expanded map name (Except leaf nodes)</td>
<td><code>string</code></td>
<td><code>expanded</code></td>
</tr>
<tr>
<td><code>disabledMapname</code></td>
<td>Disabled map name</td>
<td><code>string</code></td>
<td><code>disabled</code></td>
</tr>
<tr>
<td><code>cb</code></td>
<td>Callback event</td>
<td><code>(item: any, parent: any, deep: number) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="visittree"><a class="lake-link"><i data-anchor="visittree"></i></a>visitTree</h3><p>Recursive access tree.</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>childrenMapName</code></td>
<td>Children map name</td>
<td><code>string</code></td>
<td><code>children</code></td>
</tr>
</tbody></table>
<h3 id="findtree"><a class="lake-link"><i data-anchor="findtree"></i></a>findTree</h3><p>Return the value of the first tree value in the tree where predicate is true, and <code>undefined</code> otherwise.</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>childrenMapName</code></td>
<td>Children map name</td>
<td><code>string</code></td>
<td><code>children</code></td>
</tr>
</tbody></table>
<h3 id="getkeysbytreenode"><a class="lake-link"><i data-anchor="getkeysbytreenode"></i></a>getKeysByTreeNode</h3><p>Get all the selected <code>key</code> values.</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>includeHalfChecked</code></td>
<td>Whether include half-checked</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>keyMapName</code></td>
<td>Whether re-specify <code>key</code> name</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>cb</code></td>
<td>Callback event, return <code>key</code> value</td>
<td><code>(item: NzTreeNode, parent: NzTreeNode, deep: number) =&gt; any</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="flat"><a class="lake-link"><i data-anchor="flat"></i></a>flat</h3><p>Recursively flattens array.</p>
<pre><code class="language-ts">srv.flat([1, [2, 3, [4, 5, [6]]]]) =&gt; [1,2,3,4,5,6]
srv.flat([1, [2, 3, [4, 5, [6]]]], 1) =&gt; [1,2,3,[4, 5, [6]]]
</code></pre>
<h3 id="groupby"><a class="lake-link"><i data-anchor="groupby"></i></a>groupBy</h3><p>Group the array.</p>
<pre><code class="language-ts">srv.groupBy([6.1, 4.2, 6.3], Math.floor) =&gt; &#123;&quot;4&quot;:[4.2],&quot;6&quot;:[6.1,6.3]&#125;
srv.groupBy([&#39;one&#39;, &#39;two&#39;, &#39;three&#39;], v =&gt; v.length) =&gt; &#123;&quot;3&quot;:[&quot;one&quot;,&quot;two&quot;],&quot;5&quot;:[&quot;three&quot;]&#125;
</code></pre>
<h3 id="uniq"><a class="lake-link"><i data-anchor="uniq"></i></a>uniq</h3><p>Creates a duplicate-free version of an array.</p>
<pre><code class="language-ts">uniq([1, 2, 2, 3, 1]) =&gt; [1,2,3]
uniq([&#123; a: 1 &#125;, &#123; a: 1 &#125;, &#123; a: 2 &#125;], &#39;a&#39;) =&gt; [&#123;&quot;a&quot;:1&#125;,&#123;&quot;a&quot;:2&#125;]
uniq([&#123; a: 1 &#125;, &#123; a: 1 &#125;, &#123; a: 2 &#125;], i =&gt; (i.a === 1 ? &#39;a&#39; : &#39;b&#39;)) =&gt; [&#123;&quot;a&quot;:1&#125;,&#123;&quot;a&quot;:2&#125;]
</code></pre>
`,api:"",toc:[{id:"arrayservice",title:"ArrayService",children:[{id:"treetoarr",title:"treeToArr"},{id:"arrtotree",title:"arrToTree"},{id:"arrtotreenode",title:"arrToTreeNode"},{id:"visittree",title:"visitTree"},{id:"findtree",title:"findTree"},{id:"getkeysbytreenode",title:"getKeysByTreeNode"},{id:"flat",title:"flat"},{id:"groupby",title:"groupBy"},{id:"uniq",title:"uniq"}]}],raw:'---\ntitle: array\nsubtitle: Array&Tree,flat,groupBy,uniq\ntype: Tools\n---\n\n## ArrayService\n\nUsed for conversion and access between arrays and trees. It is generally used with `nz-tree`.\n\n> You can override [ArrayService] to set the mapping name through [Global Configuration](/docs/global-config).\n\n### treeToArr\n\nConvert tree structure to array structure.\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `deepMapName` | Deep map name | `string` | `deep` |\n| `parentMapName` | Parent item map name of flat array | `string` | `parent` |\n| `childrenMapName` | Source data children map name | `string` | `children` |\n| `clearChildren` | Whether remove `children` item | `boolean` | `true` |\n| `cb` | Callback event | `(item: any, parent: any, deep: number) => void` | - |\n\n### arrToTree\n\nConvert array structure to tree structure.\n\n> If `parent_id` is a string, the root value **Make Sure** is an empty string.\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `idMapName` | Id map name | `string` | `id` |\n| `parentIdMapName` | Parent id map name | `string` | `parent_id` |\n| `rootParentIdValue` | Root parent id value, the most suitable root parent id value will be automatically calculated by default | `any` | - |\n| `childrenMapName` | Children map name | `string` | `children` |\n| `cb` | Callback event | `(item: any) => void` | - |\n\n### arrToTreeNode\n\nConvert array structure to `nz-tree` data structure.\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `idMapName` | Id map name | `string` | `id` |\n| `parentIdMapName` | Parent id map name | `string` | `parent_id` |\n| `titleMapName` | Title map name | `string` | `title` |\n| `isLeafMapName` | isLeaf map name, if value does not exist, include `children` value to determine whether it\'s a leaf node | `string` | `isLeaf` |\n| `checkedMapname` | Checked map name | `string` | `checked` |\n| `selectedMapname` | Selected map name | `string` | `selected` |\n| `expandedMapname` | Expanded map name (Except leaf nodes) | `string` | `expanded` |\n| `disabledMapname` | Disabled map name | `string` | `disabled` |\n| `cb` | Callback event | `(item: any, parent: any, deep: number) => void` | - |\n\n### visitTree\n\nRecursive access tree.\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `childrenMapName` | Children map name | `string` | `children` |\n\n### findTree\n\nReturn the value of the first tree value in the tree where predicate is true, and `undefined` otherwise.\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `childrenMapName` | Children map name | `string` | `children` |\n\n### getKeysByTreeNode\n\nGet all the selected `key` values.\n\n| Property | Description | Type | Default |\n|----------|-------------|------|---------|\n| `includeHalfChecked` | Whether include half-checked | `boolean` | `true` |\n| `keyMapName` | Whether re-specify `key` name | `string` | - |\n| `cb` | Callback event, return `key` value | `(item: NzTreeNode, parent: NzTreeNode, deep: number) => any` | - |\n\n### flat\n\nRecursively flattens array.\n\n```ts\nsrv.flat([1, [2, 3, [4, 5, [6]]]]) => [1,2,3,4,5,6]\nsrv.flat([1, [2, 3, [4, 5, [6]]]], 1) => [1,2,3,[4, 5, [6]]]\n```\n\n### groupBy\n\nGroup the array.\n\n```ts\nsrv.groupBy([6.1, 4.2, 6.3], Math.floor) => {"4":[4.2],"6":[6.1,6.3]}\nsrv.groupBy([\'one\', \'two\', \'three\'], v => v.length) => {"3":["one","two"],"5":["three"]}\n```\n\n### uniq\n\nCreates a duplicate-free version of an array.\n\n```ts\nuniq([1, 2, 2, 3, 1]) => [1,2,3]\nuniq([{ a: 1 }, { a: 1 }, { a: 2 }], \'a\') => [{"a":1},{"a":2}]\nuniq([{ a: 1 }, { a: 1 }, { a: 2 }], i => (i.a === 1 ? \'a\' : \'b\')) => [{"a":1},{"a":2}]\n```'},"zh-CN":{meta:{title:"array",subtitle:"\u6570\u7EC4,\u6811,\u6241\u5E73,\u5206\u7EC4,\u53BB\u91CD",description:"ArrayService \u7528\u4E8E\u6570\u7EC4\u4E0E\u6811\u4E4B\u95F4\u7684\u8F6C\u5316\u3001\u8BBF\u95EE\u7B49\uFF0C\u4E00\u822C\u914D\u5408 nz-tree \u4E00\u8D77\u4F7F\u7528\u3002\u53EF\u4EE5\u901A\u8FC7\u5168\u5C40\u914D\u7F6E\u8986\u76D6 ArrayService \u8BBE\u7F6E\u6620\u5C04\u540D\u79F0\u3002\u5C06\u6811\u7ED3\u6784\u8F6C\u6362\u6210\u6570\u7EC4\u7ED3\u6784\u3002\u6570\u7EC4\u8F6C\u6362\u6210\u6811\u6570\u636E\u3002\u82E5 parent_id \u4E3A\u5B57\u7B26\u4E32\uFF0C\u5219\u6839\u503C\u52A1\u5FC5\u4E3A\u7A7A\u5B57\u7B26\u4E32\u3002\u6570\u7EC4\u8F6C\u6362\u6210 nz-tree \u6570\u636E\u6E90\uFF0C\u901A\u8FC7 op...",group:"Tools",order:0,path:"packages/util/array/index.zh-CN.md",url:"/util/array/zh"},text:`<h2 id="arrayservice"><a class="lake-link"><i data-anchor="arrayservice"></i></a>ArrayService<label class="api-type-label service">service</label></h2><p><code>ArrayService</code> \u7528\u4E8E\u6570\u7EC4\u4E0E\u6811\u4E4B\u95F4\u7684\u8F6C\u5316\u3001\u8BBF\u95EE\u7B49\uFF0C\u4E00\u822C\u914D\u5408 <code>nz-tree</code> \u4E00\u8D77\u4F7F\u7528\u3002</p>
<blockquote>
<p>\u53EF\u4EE5\u901A\u8FC7<a href="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u8986\u76D6 <code>ArrayService</code> \u8BBE\u7F6E\u6620\u5C04\u540D\u79F0\u3002</p>
</blockquote>
<h3 id="treetoarr"><a class="lake-link"><i data-anchor="treetoarr"></i></a>treeToArr</h3><p>\u5C06\u6811\u7ED3\u6784\u8F6C\u6362\u6210\u6570\u7EC4\u7ED3\u6784\u3002</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>deepMapName</code></td>
<td>\u6DF1\u5EA6\u9879\u540D</td>
<td><code>string</code></td>
<td><code>deep</code></td>
</tr>
<tr>
<td><code>parentMapName</code></td>
<td>\u6241\u5E73\u540E\u6570\u7EC4\u7684\u7236\u6570\u636E\u9879\u540D</td>
<td><code>string</code></td>
<td><code>parent</code></td>
</tr>
<tr>
<td><code>childrenMapName</code></td>
<td>\u6E90\u6570\u636E\u5B50\u9879\u540D</td>
<td><code>string</code></td>
<td><code>children</code></td>
</tr>
<tr>
<td><code>clearChildren</code></td>
<td>\u662F\u5426\u79FB\u9664 <code>children</code> \u8282\u70B9</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>cb</code></td>
<td>\u8F6C\u6362\u6210\u6570\u7EC4\u7ED3\u6784\u65F6\u56DE\u8C03</td>
<td><code>(item: any, parent: any, deep: number) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="arrtotree"><a class="lake-link"><i data-anchor="arrtotree"></i></a>arrToTree</h3><p>\u6570\u7EC4\u8F6C\u6362\u6210\u6811\u6570\u636E\u3002</p>
<blockquote>
<p>\u82E5 <code>parent_id</code> \u4E3A\u5B57\u7B26\u4E32\uFF0C\u5219\u6839\u503C<strong>\u52A1\u5FC5</strong>\u4E3A\u7A7A\u5B57\u7B26\u4E32\u3002</p>
</blockquote>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>idMapName</code></td>
<td>\u7F16\u53F7\u9879\u540D</td>
<td><code>string</code></td>
<td><code>id</code></td>
</tr>
<tr>
<td><code>parentIdMapName</code></td>
<td>\u7236\u7F16\u53F7\u9879\u540D</td>
<td><code>string</code></td>
<td><code>parent_id</code></td>
</tr>
<tr>
<td><code>rootParentIdValue</code></td>
<td>\u6839\u7236\u7F16\u53F7\u503C\uFF0C\u9ED8\u8BA4\u4F1A\u81EA\u52A8\u8BA1\u7B97\u5F97\u5230\u6700\u5408\u9002\u7684\u6839\u7236\u7F16\u53F7\u503C</td>
<td><code>any</code></td>
<td>-</td>
</tr>
<tr>
<td><code>childrenMapName</code></td>
<td>\u5B50\u9879\u540D</td>
<td><code>string</code></td>
<td><code>children</code></td>
</tr>
<tr>
<td><code>cb</code></td>
<td>\u8F6C\u6362\u6210\u6811\u6570\u636E\u65F6\u56DE\u8C03</td>
<td><code>(item: any) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="arrtotreenode"><a class="lake-link"><i data-anchor="arrtotreenode"></i></a>arrToTreeNode</h3><p>\u6570\u7EC4\u8F6C\u6362\u6210 <code>nz-tree</code> \u6570\u636E\u6E90\uFF0C\u901A\u8FC7 <code>options</code> \u8F6C\u5316\u9879\u540D\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>options.cb</code> \u66F4\u9AD8\u7EA7\u51B3\u5B9A\u6570\u636E\u9879\u3002</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>idMapName</code></td>
<td>\u7F16\u53F7\u9879\u540D</td>
<td><code>string</code></td>
<td><code>id</code></td>
</tr>
<tr>
<td><code>parentIdMapName</code></td>
<td>\u7236\u7F16\u53F7\u9879\u540D</td>
<td><code>string</code></td>
<td><code>parent_id</code></td>
</tr>
<tr>
<td><code>titleMapName</code></td>
<td>\u6807\u9898\u9879\u540D</td>
<td><code>string</code></td>
<td><code>title</code></td>
</tr>
<tr>
<td><code>isLeafMapName</code></td>
<td>\u662F\u5426\u53F6\u8282\u70B9\u9879\u540D\uFF0C\u82E5\u6570\u636E\u6E90\u4E0D\u5B58\u5728\u65F6\u81EA\u52A8\u6839\u636E <code>children</code> \u503C\u51B3\u5B9A\u662F\u5426\u4E3A\u53F6\u5B50\u8282\u70B9</td>
<td><code>string</code></td>
<td><code>isLeaf</code></td>
</tr>
<tr>
<td><code>checkedMapname</code></td>
<td>\u8282\u70B9 Checkbox \u662F\u5426\u9009\u4E2D\u9879\u540D</td>
<td><code>string</code></td>
<td><code>checked</code></td>
</tr>
<tr>
<td><code>selectedMapname</code></td>
<td>\u8282\u70B9\u672C\u8EAB\u662F\u5426\u9009\u4E2D\u9879\u540D</td>
<td><code>string</code></td>
<td><code>selected</code></td>
</tr>
<tr>
<td><code>expandedMapname</code></td>
<td>\u8282\u70B9\u662F\u5426\u5C55\u5F00(\u53F6\u5B50\u8282\u70B9\u65E0\u6548)\u9879\u540D</td>
<td><code>string</code></td>
<td><code>expanded</code></td>
</tr>
<tr>
<td><code>disabledMapname</code></td>
<td>\u8BBE\u7F6E\u662F\u5426\u7981\u7528\u8282\u70B9(\u4E0D\u53EF\u8FDB\u884C\u4EFB\u4F55\u64CD\u4F5C)\u9879\u540D</td>
<td><code>string</code></td>
<td><code>disabled</code></td>
</tr>
<tr>
<td><code>cb</code></td>
<td>\u8F6C\u6362\u6210\u6570\u7EC4\u7ED3\u6784\u65F6\u56DE\u8C03</td>
<td><code>(item: any, parent: any, deep: number) =&gt; void</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="visittree"><a class="lake-link"><i data-anchor="visittree"></i></a>visitTree</h3><p>\u9012\u5F52\u8BBF\u95EE\u6574\u4E2A\u6811\u3002</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>childrenMapName</code></td>
<td>\u5B50\u9879\u540D</td>
<td><code>string</code></td>
<td><code>children</code></td>
</tr>
</tbody></table>
<h3 id="findtree"><a class="lake-link"><i data-anchor="findtree"></i></a>findTree</h3><p>\u6839\u636E\u6761\u4EF6\u8FD4\u56DE\u6811\u7684\u7B2C\u4E00\u4E2A\u503C\uFF0C\u5426\u5219\u8FD4\u56DE <code>undefined</code>\u3002</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>childrenMapName</code></td>
<td>\u5B50\u9879\u540D</td>
<td><code>string</code></td>
<td><code>children</code></td>
</tr>
</tbody></table>
<h3 id="getkeysbytreenode"><a class="lake-link"><i data-anchor="getkeysbytreenode"></i></a>getKeysByTreeNode</h3><p>\u83B7\u53D6\u6240\u6709\u5DF2\u7ECF\u9009\u4E2D\u7684 <code>key</code> \u503C\u3002</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody><tr>
<td><code>includeHalfChecked</code></td>
<td>\u662F\u5426\u5305\u542B\u534A\u9009\u72B6\u6001\u7684\u503C</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>keyMapName</code></td>
<td>\u662F\u5426\u91CD\u65B0\u6307\u5B9A <code>key</code> \u952E\u540D\uFF0C\u82E5\u4E0D\u6307\u5B9A\u8868\u793A\u4F7F\u7528 <code>NzTreeNode.key</code> \u503C</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td><code>cb</code></td>
<td>\u56DE\u8C03\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u503C <code>key</code> \u503C\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E\u5176\u4ED6</td>
<td><code>(item: NzTreeNode, parent: NzTreeNode, deep: number) =&gt; any</code></td>
<td>-</td>
</tr>
</tbody></table>
<h3 id="flat"><a class="lake-link"><i data-anchor="flat"></i></a>flat</h3><p>\u9012\u5F52\u6241\u5E73\u6570\u7EC4\u3002</p>
<pre><code class="language-ts">srv.flat([1, [2, 3, [4, 5, [6]]]]) =&gt; [1,2,3,4,5,6]
srv.flat([1, [2, 3, [4, 5, [6]]]], 1) =&gt; [1,2,3,[4, 5, [6]]]
</code></pre>
<h3 id="groupby"><a class="lake-link"><i data-anchor="groupby"></i></a>groupBy</h3><p>\u5BF9\u6570\u7EC4\u8FDB\u884C\u5206\u7EC4\u3002</p>
<pre><code class="language-ts">srv.groupBy([6.1, 4.2, 6.3], Math.floor) =&gt; &#123;&quot;4&quot;:[4.2],&quot;6&quot;:[6.1,6.3]&#125;
srv.groupBy([&#39;one&#39;, &#39;two&#39;, &#39;three&#39;], v =&gt; v.length) =&gt; &#123;&quot;3&quot;:[&quot;one&quot;,&quot;two&quot;],&quot;5&quot;:[&quot;three&quot;]&#125;
</code></pre>
<h3 id="uniq"><a class="lake-link"><i data-anchor="uniq"></i></a>uniq</h3><p>\u521B\u5EFA\u53BB\u91CD\u540E\u7684\u6570\u7EC4\u3002</p>
<pre><code class="language-ts">uniq([1, 2, 2, 3, 1]) =&gt; [1,2,3]
uniq([&#123; a: 1 &#125;, &#123; a: 1 &#125;, &#123; a: 2 &#125;], &#39;a&#39;) =&gt; [&#123;&quot;a&quot;:1&#125;,&#123;&quot;a&quot;:2&#125;]
uniq([&#123; a: 1 &#125;, &#123; a: 1 &#125;, &#123; a: 2 &#125;], i =&gt; (i.a === 1 ? &#39;a&#39; : &#39;b&#39;)) =&gt; [&#123;&quot;a&quot;:1&#125;,&#123;&quot;a&quot;:2&#125;]
</code></pre>
`,api:"",toc:[{id:"arrayservice",title:"ArrayService",children:[{id:"treetoarr",title:"treeToArr"},{id:"arrtotree",title:"arrToTree"},{id:"arrtotreenode",title:"arrToTreeNode"},{id:"visittree",title:"visitTree"},{id:"findtree",title:"findTree"},{id:"getkeysbytreenode",title:"getKeysByTreeNode"},{id:"flat",title:"flat"},{id:"groupby",title:"groupBy"},{id:"uniq",title:"uniq"}]}],raw:'---\ntitle: array\nsubtitle: \u6570\u7EC4,\u6811,\u6241\u5E73,\u5206\u7EC4,\u53BB\u91CD\ntype: Tools\n---\n\n## ArrayService\n\n`ArrayService` \u7528\u4E8E\u6570\u7EC4\u4E0E\u6811\u4E4B\u95F4\u7684\u8F6C\u5316\u3001\u8BBF\u95EE\u7B49\uFF0C\u4E00\u822C\u914D\u5408 `nz-tree` \u4E00\u8D77\u4F7F\u7528\u3002\n\n> \u53EF\u4EE5\u901A\u8FC7[\u5168\u5C40\u914D\u7F6E](/docs/global-config)\u8986\u76D6 `ArrayService` \u8BBE\u7F6E\u6620\u5C04\u540D\u79F0\u3002\n\n### treeToArr\n\n\u5C06\u6811\u7ED3\u6784\u8F6C\u6362\u6210\u6570\u7EC4\u7ED3\u6784\u3002\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `deepMapName` | \u6DF1\u5EA6\u9879\u540D | `string` | `deep` |\n| `parentMapName` | \u6241\u5E73\u540E\u6570\u7EC4\u7684\u7236\u6570\u636E\u9879\u540D | `string` | `parent` |\n| `childrenMapName` | \u6E90\u6570\u636E\u5B50\u9879\u540D | `string` | `children` |\n| `clearChildren` | \u662F\u5426\u79FB\u9664 `children` \u8282\u70B9 | `boolean` | `true` |\n| `cb` | \u8F6C\u6362\u6210\u6570\u7EC4\u7ED3\u6784\u65F6\u56DE\u8C03 | `(item: any, parent: any, deep: number) => void` | - |\n\n### arrToTree\n\n\u6570\u7EC4\u8F6C\u6362\u6210\u6811\u6570\u636E\u3002\n\n> \u82E5 `parent_id` \u4E3A\u5B57\u7B26\u4E32\uFF0C\u5219\u6839\u503C**\u52A1\u5FC5**\u4E3A\u7A7A\u5B57\u7B26\u4E32\u3002\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `idMapName` | \u7F16\u53F7\u9879\u540D | `string` | `id` |\n| `parentIdMapName` | \u7236\u7F16\u53F7\u9879\u540D | `string` | `parent_id` |\n| `rootParentIdValue` | \u6839\u7236\u7F16\u53F7\u503C\uFF0C\u9ED8\u8BA4\u4F1A\u81EA\u52A8\u8BA1\u7B97\u5F97\u5230\u6700\u5408\u9002\u7684\u6839\u7236\u7F16\u53F7\u503C | `any` | - |\n| `childrenMapName` | \u5B50\u9879\u540D | `string` | `children` |\n| `cb` | \u8F6C\u6362\u6210\u6811\u6570\u636E\u65F6\u56DE\u8C03 | `(item: any) => void` | - |\n\n### arrToTreeNode\n\n\u6570\u7EC4\u8F6C\u6362\u6210 `nz-tree` \u6570\u636E\u6E90\uFF0C\u901A\u8FC7 `options` \u8F6C\u5316\u9879\u540D\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 `options.cb` \u66F4\u9AD8\u7EA7\u51B3\u5B9A\u6570\u636E\u9879\u3002\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `idMapName` | \u7F16\u53F7\u9879\u540D | `string` | `id` |\n| `parentIdMapName` | \u7236\u7F16\u53F7\u9879\u540D | `string` | `parent_id` |\n| `titleMapName` | \u6807\u9898\u9879\u540D | `string` | `title` |\n| `isLeafMapName` | \u662F\u5426\u53F6\u8282\u70B9\u9879\u540D\uFF0C\u82E5\u6570\u636E\u6E90\u4E0D\u5B58\u5728\u65F6\u81EA\u52A8\u6839\u636E `children` \u503C\u51B3\u5B9A\u662F\u5426\u4E3A\u53F6\u5B50\u8282\u70B9 | `string` | `isLeaf` |\n| `checkedMapname` | \u8282\u70B9 Checkbox \u662F\u5426\u9009\u4E2D\u9879\u540D | `string` | `checked` |\n| `selectedMapname` | \u8282\u70B9\u672C\u8EAB\u662F\u5426\u9009\u4E2D\u9879\u540D | `string` | `selected` |\n| `expandedMapname` | \u8282\u70B9\u662F\u5426\u5C55\u5F00(\u53F6\u5B50\u8282\u70B9\u65E0\u6548)\u9879\u540D | `string` | `expanded` |\n| `disabledMapname` | \u8BBE\u7F6E\u662F\u5426\u7981\u7528\u8282\u70B9(\u4E0D\u53EF\u8FDB\u884C\u4EFB\u4F55\u64CD\u4F5C)\u9879\u540D | `string` | `disabled` |\n| `cb` | \u8F6C\u6362\u6210\u6570\u7EC4\u7ED3\u6784\u65F6\u56DE\u8C03 | `(item: any, parent: any, deep: number) => void` | - |\n\n### visitTree\n\n\u9012\u5F52\u8BBF\u95EE\u6574\u4E2A\u6811\u3002\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `childrenMapName` | \u5B50\u9879\u540D | `string` | `children` |\n\n### findTree\n\n\u6839\u636E\u6761\u4EF6\u8FD4\u56DE\u6811\u7684\u7B2C\u4E00\u4E2A\u503C\uFF0C\u5426\u5219\u8FD4\u56DE `undefined`\u3002\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----------|-------------|------|---------|\n| `childrenMapName` | \u5B50\u9879\u540D | `string` | `children` |\n\n### getKeysByTreeNode\n\n\u83B7\u53D6\u6240\u6709\u5DF2\u7ECF\u9009\u4E2D\u7684 `key` \u503C\u3002\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |\n|----|----|----|-----|\n| `includeHalfChecked` | \u662F\u5426\u5305\u542B\u534A\u9009\u72B6\u6001\u7684\u503C | `boolean` | `true` |\n| `keyMapName` | \u662F\u5426\u91CD\u65B0\u6307\u5B9A `key` \u952E\u540D\uFF0C\u82E5\u4E0D\u6307\u5B9A\u8868\u793A\u4F7F\u7528 `NzTreeNode.key` \u503C | `string` | - |\n| `cb` | \u56DE\u8C03\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u503C `key` \u503C\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E\u5176\u4ED6 | `(item: NzTreeNode, parent: NzTreeNode, deep: number) => any` | - |\n\n### flat\n\n\u9012\u5F52\u6241\u5E73\u6570\u7EC4\u3002\n\n```ts\nsrv.flat([1, [2, 3, [4, 5, [6]]]]) => [1,2,3,4,5,6]\nsrv.flat([1, [2, 3, [4, 5, [6]]]], 1) => [1,2,3,[4, 5, [6]]]\n```\n\n### groupBy\n\n\u5BF9\u6570\u7EC4\u8FDB\u884C\u5206\u7EC4\u3002\n\n```ts\nsrv.groupBy([6.1, 4.2, 6.3], Math.floor) => {"4":[4.2],"6":[6.1,6.3]}\nsrv.groupBy([\'one\', \'two\', \'three\'], v => v.length) => {"3":["one","two"],"5":["three"]}\n```\n\n### uniq\n\n\u521B\u5EFA\u53BB\u91CD\u540E\u7684\u6570\u7EC4\u3002\n\n```ts\nuniq([1, 2, 2, 3, 1]) => [1,2,3]\nuniq([{ a: 1 }, { a: 1 }, { a: 2 }], \'a\') => [{"a":1},{"a":2}]\nuniq([{ a: 1 }, { a: 1 }, { a: 2 }], i => (i.a === 1 ? \'a\' : \'b\')) => [{"a":1},{"a":2}]\n```'}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["util-array"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&i(0,"app-docs",0),e&2&&a("codes",n.codes)("item",n.item)},dependencies:[r],encapsulation:2})};var m=class t{item={name:"browser",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"browser",subtitle:"Cookie, Copy, DOM etc",description:"A set of simple Cookie manipulation classes.cookie Original cookie valuegetAll Get all cookie key-value pairsget Get the value of given cookie keyput ...",group:"Tools",order:0,path:"packages/util/browser/index.en-US.md",url:"/util/browser/en"},text:`<h2 id="cookieservice"><a class="lake-link"><i data-anchor="cookieservice"></i></a>CookieService<label class="api-type-label service">service</label></h2><p>A set of simple Cookie manipulation classes.</p>
<ul>
<li><code>cookie</code> Original cookie value</li>
<li><code>getAll</code> Get all cookie key-value pairs</li>
<li><code>get</code> Get the value of given cookie <code>key</code></li>
<li><code>put</code> Sets a value for given cookie key</li>
</ul>
<example-cookie-index /><h2 id="isempty"><a class="lake-link"><i data-anchor="isempty"></i></a>isEmpty</h2><p>Used to verify <code>&lt;ng-content /&gt;</code> is empty, useful for custom components.</p>
<h2 id="updatehostclass"><a class="lake-link"><i data-anchor="updatehostclass"></i></a>updateHostClass</h2><p>Update host component style <code>class</code>, for example:</p>
<pre><code class="language-ts">updateHostClass(
  this.el.nativeElement,
  this.renderer,
  &#123;
    [ &#39;classname&#39; ]: true,
    [ &#39;classname&#39; ]: this.type === &#39;1&#39;,
    [ this.cls ]: true,
    [ \`a-$&#123;this.cls&#125;\` ]: true
  &#125;
)
</code></pre>
<h2 id="copy"><a class="lake-link"><i data-anchor="copy"></i></a>copy</h2><p>Copy text to clipboard.</p>
<h2 id="scrollservice"><a class="lake-link"><i data-anchor="scrollservice"></i></a>ScrollService<label class="api-type-label service">service</label></h2><p>Scrollbar control allows scrolling to where the specified element.</p>
<table>
<thead>
<tr>
<th>Method</th>
<th>Property</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>getScrollPosition</code></td>
<td><code>element?: Element</code></td>
<td>Retrieves the current scroll position</td>
</tr>
<tr>
<td><code>scrollToPosition</code></td>
<td>\`element: Element</td>
<td>Window, position: [number, number]\`</td>
</tr>
<tr>
<td><code>scrollToElement</code></td>
<td><code>element?: Element, topOffset = 0</code></td>
<td>Scroll to element</td>
</tr>
<tr>
<td><code>scrollToTop</code></td>
<td><code>topOffset = 0</code></td>
<td>Scroll to top</td>
</tr>
</tbody></table>
`,api:"",toc:[{id:"cookieservice",title:"CookieService"},{id:"isempty",title:"isEmpty"},{id:"updatehostclass",title:"updateHostClass"},{id:"copy",title:"copy"},{id:"scrollservice",title:"ScrollService"}],raw:`---
title: browser
subtitle: Cookie, Copy, DOM etc
type: Tools
---

## CookieService

A set of simple Cookie manipulation classes.

- \`cookie\` Original cookie value
- \`getAll\` Get all cookie key-value pairs
- \`get\` Get the value of given cookie \`key\`
- \`put\` Sets a value for given cookie key

[comment]: <demo(cookie)>

## isEmpty

Used to verify \`<ng-content />\` is empty, useful for custom components.

## updateHostClass

Update host component style \`class\`, for example:

\`\`\`ts
updateHostClass(
  this.el.nativeElement,
  this.renderer,
  {
    [ 'classname' ]: true,
    [ 'classname' ]: this.type === '1',
    [ this.cls ]: true,
    [ \`a-\${this.cls}\` ]: true
  }
)
\`\`\`

## copy

Copy text to clipboard.

## ScrollService

Scrollbar control allows scrolling to where the specified element.

| Method | Property | Description |
|--------|----------|-------------|
| \`getScrollPosition\` | \`element?: Element\` | Retrieves the current scroll position |
| \`scrollToPosition\` | \`element: Element | Window, position: [number, number]\` | Sets the scroll position |
| \`scrollToElement\` | \`element?: Element, topOffset = 0\` | Scroll to element |
| \`scrollToTop\` | \`topOffset = 0\` | Scroll to top |`},"zh-CN":{meta:{title:"browser",subtitle:"Cookie\u3001Copy\u3001DOM \u7B49",description:"\u4E00\u7EC4\u7B80\u5355\u7684 Cookie \u64CD\u4F5C\u7C7B\u3002cookie \u539F\u59CBCookie\u503CgetAll \u83B7\u53D6\u6240\u6709Cookie\u952E\u503C\u5BF9get \u83B7\u53D6\u6307\u5B9A key \u7684\u503Cput \u8BBE\u7F6E\u6307\u5B9A Cookie \u952E\u7684\u503C\u7528\u4E8E\u6821\u9A8C <ng-content /> \u662F\u5426\u4E3A\u7A7A\uFF0C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u65F6\u86EE\u6709\u7528\u3002\u66F4\u65B0\u5BBF\u4E3B\u7EC4\u4EF6\u6837\u5F0F class\uFF0C\u4F8B\u5982\uFF1A\u590D\u5236\u5B57\u7B26\u4E32\u6587\u6863\u81F3\u526A\u8D34...",group:"Tools",order:0,path:"packages/util/browser/index.zh-CN.md",url:"/util/browser/zh"},text:`<h2 id="cookieservice"><a class="lake-link"><i data-anchor="cookieservice"></i></a>CookieService<label class="api-type-label service">service</label></h2><p>\u4E00\u7EC4\u7B80\u5355\u7684 Cookie \u64CD\u4F5C\u7C7B\u3002</p>
<ul>
<li><code>cookie</code> \u539F\u59CBCookie\u503C</li>
<li><code>getAll</code> \u83B7\u53D6\u6240\u6709Cookie\u952E\u503C\u5BF9</li>
<li><code>get</code> \u83B7\u53D6\u6307\u5B9A <code>key</code> \u7684\u503C</li>
<li><code>put</code> \u8BBE\u7F6E\u6307\u5B9A Cookie \u952E\u7684\u503C</li>
</ul>
<example-cookie-index /><h2 id="isempty"><a class="lake-link"><i data-anchor="isempty"></i></a>isEmpty</h2><p>\u7528\u4E8E\u6821\u9A8C <code>&lt;ng-content /&gt;</code> \u662F\u5426\u4E3A\u7A7A\uFF0C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u65F6\u86EE\u6709\u7528\u3002</p>
<h2 id="updatehostclass"><a class="lake-link"><i data-anchor="updatehostclass"></i></a>updateHostClass</h2><p>\u66F4\u65B0\u5BBF\u4E3B\u7EC4\u4EF6\u6837\u5F0F <code>class</code>\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-ts">updateHostClass(
  this.el.nativeElement,
  this.renderer,
  &#123;
    [ &#39;classname&#39; ]: true,
    [ &#39;classname&#39; ]: this.type === &#39;1&#39;,
    [ this.cls ]: true,
    [ \`a-$&#123;this.cls&#125;\` ]: true
  &#125;
)
</code></pre>
<h2 id="copy"><a class="lake-link"><i data-anchor="copy"></i></a>copy</h2><p>\u590D\u5236\u5B57\u7B26\u4E32\u6587\u6863\u81F3\u526A\u8D34\u677F\u3002</p>
<h2 id="scrollservice"><a class="lake-link"><i data-anchor="scrollservice"></i></a>ScrollService<label class="api-type-label service">service</label></h2><p>\u6EDA\u52A8\u6761\u63A7\u5236\uFF0C\u5141\u8BB8\u6EDA\u52A8\u81F3\u6307\u5B9A\u5143\u7D20\u6240\u5904\u4F4D\u7F6E\u3002</p>
<table>
<thead>
<tr>
<th>\u63A5\u53E3\u540D</th>
<th>\u53C2\u6570</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody><tr>
<td><code>getScrollPosition</code></td>
<td><code>element?: Element</code></td>
<td>\u83B7\u53D6\u6EDA\u52A8\u6761\u4F4D\u7F6E</td>
</tr>
<tr>
<td><code>scrollToPosition</code></td>
<td>\`element: Element</td>
<td>Window, position: [number, number]\`</td>
</tr>
<tr>
<td><code>scrollToElement</code></td>
<td><code>element?: Element, topOffset = 0</code></td>
<td>\u8BBE\u7F6E\u6EDA\u52A8\u6761\u81F3\u6307\u5B9A\u5143\u7D20</td>
</tr>
<tr>
<td><code>scrollToTop</code></td>
<td><code>topOffset = 0</code></td>
<td>\u6EDA\u52A8\u81F3\u9876\u90E8</td>
</tr>
</tbody></table>
`,api:"",toc:[{id:"cookieservice",title:"CookieService"},{id:"isempty",title:"isEmpty"},{id:"updatehostclass",title:"updateHostClass"},{id:"copy",title:"copy"},{id:"scrollservice",title:"ScrollService"}],raw:`---
title: browser
subtitle: Cookie\u3001Copy\u3001DOM \u7B49
type: Tools
---

## CookieService

\u4E00\u7EC4\u7B80\u5355\u7684 Cookie \u64CD\u4F5C\u7C7B\u3002

- \`cookie\` \u539F\u59CBCookie\u503C
- \`getAll\` \u83B7\u53D6\u6240\u6709Cookie\u952E\u503C\u5BF9
- \`get\` \u83B7\u53D6\u6307\u5B9A \`key\` \u7684\u503C
- \`put\` \u8BBE\u7F6E\u6307\u5B9A Cookie \u952E\u7684\u503C

[comment]: <demo(cookie)>

## isEmpty

\u7528\u4E8E\u6821\u9A8C \`<ng-content />\` \u662F\u5426\u4E3A\u7A7A\uFF0C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u65F6\u86EE\u6709\u7528\u3002

## updateHostClass

\u66F4\u65B0\u5BBF\u4E3B\u7EC4\u4EF6\u6837\u5F0F \`class\`\uFF0C\u4F8B\u5982\uFF1A

\`\`\`ts
updateHostClass(
  this.el.nativeElement,
  this.renderer,
  {
    [ 'classname' ]: true,
    [ 'classname' ]: this.type === '1',
    [ this.cls ]: true,
    [ \`a-\${this.cls}\` ]: true
  }
)
\`\`\`

## copy

\u590D\u5236\u5B57\u7B26\u4E32\u6587\u6863\u81F3\u526A\u8D34\u677F\u3002

## ScrollService

\u6EDA\u52A8\u6761\u63A7\u5236\uFF0C\u5141\u8BB8\u6EDA\u52A8\u81F3\u6307\u5B9A\u5143\u7D20\u6240\u5904\u4F4D\u7F6E\u3002

| \u63A5\u53E3\u540D | \u53C2\u6570 | \u63CF\u8FF0 |
|-----|----|----|
| \`getScrollPosition\` | \`element?: Element\` | \u83B7\u53D6\u6EDA\u52A8\u6761\u4F4D\u7F6E |
| \`scrollToPosition\` | \`element: Element | Window, position: [number, number]\` | \u8BBE\u7F6E\u6EDA\u52A8\u6761\u4F4D\u7F6E |
| \`scrollToElement\` | \`element?: Element, topOffset = 0\` | \u8BBE\u7F6E\u6EDA\u52A8\u6761\u81F3\u6307\u5B9A\u5143\u7D20 |
| \`scrollToTop\` | \`topOffset = 0\` | \u6EDA\u52A8\u81F3\u9876\u90E8 |`}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["util-browser"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&i(0,"app-docs",0),e&2&&a("codes",n.codes)("item",n.item)},dependencies:[r],encapsulation:2})};var u=class t{item={name:"date-time",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"date-time",subtitle:"Date Time Conversion",description:"Convert to Date format, support Date, number, string types, If the argument is a number, it is treated as a timestamp.formatString If parsing fails tr...",group:"Tools",order:0,path:"packages/util/date-time/index.en-US.md",url:"/util/date-time/en"},text:`<h2 id="todate"><a class="lake-link"><i data-anchor="todate"></i></a>toDate</h2><p>Convert to <code>Date</code> format, support <code>Date, number, string</code> types, If the argument is a number, it is treated as a timestamp.</p>
<ul>
<li><code>formatString</code> If parsing fails try to parse the date by pressing <code>formatString</code></li>
<li><code>defaultValue</code> If parsing fails returned default value, default: <code>new Date(NaN)</code></li>
<li><code>timestampSecond</code> Whether the incoming value is in seconds</li>
</ul>
<h2 id="formatdate"><a class="lake-link"><i data-anchor="formatdate"></i></a>formatDate</h2><p>Format date, supports <code>Date, number, string</code> types, If the argument is a number, it is treated as a timestamp.</p>
<ul>
<li>Please refer to <a href="https://date-fns.org/v2.30.0/docs/format" target="_blank" rel="noopener">date-fnd format</a> for string format</li>
<li><code>dateLocale</code> Recommended to be consistent with NG-ZORRO by using <code>inject(NZ_DATE_LOCALE)</code></li>
</ul>
<h2 id="datetimepickerutil"><a class="lake-link"><i data-anchor="datetimepickerutil"></i></a>dateTimePickerUtil</h2><p>\u4E00\u7EC4\u9488\u5BF9 <a href="https://ng.ant.design/components/date-picker/en" target="_blank" rel="noopener">DatePicker</a> \u7684\u5DE5\u5177\u7C7B\u3002</p>
<ul>
<li><code>now</code> Current local time</li>
<li><code>date</code> Current local date (not including time part)</li>
<li><code>removeTime</code> Remove the time part of the date</li>
<li><code>format</code> Format date-time</li>
<li><code>getDiffDays</code> Calculate the number of days between two dates, <code>0</code> means the same day</li>
<li><code>disabledBeforeDate</code> Disabled Before date (Default: today), Generally serves <code>nzDisabledDate</code></li>
<li><code>disabledAfterDate</code> Disabled After date (Default: today), Generally serves <code>nzDisabledDate</code></li>
<li><code>disabledBeforeTime</code> Disabled Before time (Default: now), Generally serves <code>nzDisabledTime</code></li>
<li><code>disabledAfterTime</code> Disabled After time (Default: now), Generally serves <code>nzDisabledTime</code></li>
</ul>
<pre><code class="language-ts">disabledDate = dateTimePickerUtil.disabledBeforeDate();
disabledDateTime = dateTimePickerUtil.disabledBeforeTime(&#123; offsetSeconds: 60 * 5 &#125;);
</code></pre>
<h2 id="gettimedistance"><a class="lake-link"><i data-anchor="gettimedistance"></i></a>getTimeDistance</h2><p>Get the time range, return <code>[ Date, Date]</code> for the start and end dates, for example: Get this week time:</p>
<pre><code class="language-ts">getTimeDistance(&#39;week&#39;)
</code></pre>
<p><strong>Parameters</strong></p>
<ul>
<li><code>type</code> Shortcut type, with <code>-</code> for last time, if specified <code>number</code> type for days<ul>
<li><code>today</code>, <code>-today</code>, <code>yesterday</code> Today or yesterday</li>
<li><code>week</code>, <code>-week</code> This week or last week</li>
<li><code>month</code>, <code>-month</code> This month or last month</li>
<li><code>year</code>, <code>-year</code> This year or last year</li>
</ul>
</li>
<li><code>time</code> Specify start time, default is <code>now</code></li>
</ul>
`,api:"",toc:[{id:"todate",title:"toDate"},{id:"formatdate",title:"formatDate"},{id:"datetimepickerutil",title:"dateTimePickerUtil"},{id:"gettimedistance",title:"getTimeDistance"}],raw:"---\ntitle: date-time\nsubtitle: Date Time Conversion\ntype: Tools\n---\n\n## toDate\n\nConvert to `Date` format, support `Date, number, string` types, If the argument is a number, it is treated as a timestamp.\n\n* `formatString` If parsing fails try to parse the date by pressing `formatString`\n* `defaultValue` If parsing fails returned default value, default: `new Date(NaN)`\n* `timestampSecond` Whether the incoming value is in seconds\n\n## formatDate\n\nFormat date, supports `Date, number, string` types, If the argument is a number, it is treated as a timestamp.\n\n* Please refer to [date-fnd format](https://date-fns.org/v2.30.0/docs/format) for string format\n* `dateLocale` Recommended to be consistent with NG-ZORRO by using `inject(NZ_DATE_LOCALE)`\n\n## dateTimePickerUtil\n\n\u4E00\u7EC4\u9488\u5BF9 [DatePicker](https://ng.ant.design/components/date-picker/en) \u7684\u5DE5\u5177\u7C7B\u3002\n\n- `now` Current local time\n- `date` Current local date (not including time part)\n- `removeTime` Remove the time part of the date\n- `format` Format date-time\n- `getDiffDays` Calculate the number of days between two dates, `0` means the same day\n- `disabledBeforeDate` Disabled Before date (Default: today), Generally serves `nzDisabledDate`\n- `disabledAfterDate` Disabled After date (Default: today), Generally serves `nzDisabledDate`\n- `disabledBeforeTime` Disabled Before time (Default: now), Generally serves `nzDisabledTime`\n- `disabledAfterTime` Disabled After time (Default: now), Generally serves `nzDisabledTime`\n\n```ts\ndisabledDate = dateTimePickerUtil.disabledBeforeDate();\ndisabledDateTime = dateTimePickerUtil.disabledBeforeTime({ offsetSeconds: 60 * 5 });\n```\n\n## getTimeDistance\n\nGet the time range, return `[ Date, Date]` for the start and end dates, for example: Get this week time:\n\n```ts\ngetTimeDistance('week')\n```\n\n**Parameters**\n\n- `type` Shortcut type, with `-` for last time, if specified `number` type for days\n  - `today`, `-today`, `yesterday` Today or yesterday\n  - `week`, `-week` This week or last week\n  - `month`, `-month` This month or last month\n  - `year`, `-year` This year or last year\n- `time` Specify start time, default is `now`"},"zh-CN":{meta:{title:"date-time",subtitle:"\u65E5\u671F\u65F6\u95F4\u8F6C\u6362",description:"\u8F6C\u6362\u6210 Date \u683C\u5F0F\uFF0C\u652F\u6301 Date, number, string \u7C7B\u578B\uFF0C\u5982\u679C\u662F number \u8868\u793A Unix timestamp\u3002formatString \u5982\u679C\u8F6C\u6362\u5931\u8D25\u5C1D\u8BD5\u6839\u636E formatString \u683C\u5F0F\u6765\u8F6C\u6362defaultValue \u65E0\u6548\u65E5\u671F\u5E94\u8FD4\u56DE\u7684\u9ED8\u8BA4\u503C\uFF0C\u9ED8\u8BA4\uFF1Anew Date(NaN...",group:"Tools",order:0,path:"packages/util/date-time/index.zh-CN.md",url:"/util/date-time/zh"},text:`<h2 id="todate"><a class="lake-link"><i data-anchor="todate"></i></a>toDate</h2><p>\u8F6C\u6362\u6210 <code>Date</code> \u683C\u5F0F\uFF0C\u652F\u6301 <code>Date, number, string</code> \u7C7B\u578B\uFF0C\u5982\u679C\u662F <code>number</code> \u8868\u793A Unix timestamp\u3002</p>
<ul>
<li><code>formatString</code> \u5982\u679C\u8F6C\u6362\u5931\u8D25\u5C1D\u8BD5\u6839\u636E <code>formatString</code> \u683C\u5F0F\u6765\u8F6C\u6362</li>
<li><code>defaultValue</code> \u65E0\u6548\u65E5\u671F\u5E94\u8FD4\u56DE\u7684\u9ED8\u8BA4\u503C\uFF0C\u9ED8\u8BA4\uFF1A<code>new Date(NaN)</code></li>
<li><code>timestampSecond</code> \u4F20\u5165\u503C\u662F\u5426\u79D2\u7EA7</li>
</ul>
<h2 id="formatdate"><a class="lake-link"><i data-anchor="formatdate"></i></a>formatDate</h2><p>\u683C\u5F0F\u5316\u65E5\u671F\uFF0C\u652F\u6301 <code>Date, number, string</code> \u7C7B\u578B\uFF0C\u5982\u679C\u662F <code>number</code> \u8868\u793A Unix timestamp)\u3002</p>
<ul>
<li>\u5B57\u7B26\u4E32\u683C\u5F0F\u8BF7\u53C2\u8003 <a href="https://date-fns.org/v2.30.0/docs/format" target="_blank" rel="noopener">date-fnd format</a></li>
<li><code>dateLocale</code> \u5EFA\u8BAE\u901A\u8FC7\u4F7F\u7528 <code>inject(NZ_DATE_LOCALE)</code> \u4E0E NG-ZORRO \u4FDD\u6301\u4E00\u81F4</li>
</ul>
<h2 id="datetimepickerutil"><a class="lake-link"><i data-anchor="datetimepickerutil"></i></a>dateTimePickerUtil</h2><p>\u4E00\u7EC4\u9488\u5BF9 <a href="https://ng.ant.design/components/date-picker/en" target="_blank" rel="noopener">DatePicker</a> \u7684\u5DE5\u5177\u7C7B\u3002</p>
<ul>
<li><code>now</code> \u5F53\u524D\u672C\u5730\u65F6\u95F4</li>
<li><code>date</code> \u5F53\u524D\u672C\u5730\u65E5\u671F\uFF08\u4E0D\u5305\u542B\u65F6\u95F4\u90E8\u5206\uFF09</li>
<li><code>removeTime</code> \u79FB\u9664\u65E5\u671F\u7684\u65F6\u95F4\u90E8\u5206</li>
<li><code>format</code> \u683C\u5F0F\u5316\u65E5\u671F</li>
<li><code>getDiffDays</code> \u8BA1\u7B97\u4E24\u4E2A\u65E5\u671F\u76F8\u5DEE\u5929\u6570\uFF0C<code>0</code> \u8868\u793A\u540C\u4E00\u5929</li>
<li><code>disabledBeforeDate</code> \u7981\u7528\u4E4B\u524D\u65E5\u671F\uFF08\u9ED8\u8BA4\uFF1A\u4ECA\u5929\uFF09\uFF0C\u4E00\u822C\u670D\u52A1\u4E8E <code>nzDisabledDate</code></li>
<li><code>disabledAfterDate</code> \u7981\u7528\u4E4B\u540E\u65E5\u671F\uFF08\u9ED8\u8BA4\uFF1A\u4ECA\u5929\uFF09\uFF0C\u4E00\u822C\u670D\u52A1\u4E8E <code>nzDisabledDate</code></li>
<li><code>disabledBeforeTime</code> \u7981\u7528\u4E4B\u524D\u65F6\u95F4\uFF08\u9ED8\u8BA4\uFF1A\u73B0\u5728\uFF09\uFF0C\u4E00\u822C\u670D\u52A1\u4E8E <code>nzDisabledTime</code></li>
<li><code>disabledAfterTime</code> \u7981\u7528\u4E4B\u540E\u65F6\u95F4\uFF08\u9ED8\u8BA4\uFF1A\u73B0\u5728\uFF09\uFF0C\u4E00\u822C\u670D\u52A1\u4E8E <code>nzDisabledTime</code></li>
</ul>
<pre><code class="language-ts">disabledDate = dateTimePickerUtil.disabledBeforeDate();
disabledDateTime = dateTimePickerUtil.disabledBeforeTime(&#123; offsetSeconds: 60 * 5 &#125;);
</code></pre>
<h2 id="gettimedistance"><a class="lake-link"><i data-anchor="gettimedistance"></i></a>getTimeDistance</h2><p>\u83B7\u53D6\u65F6\u95F4\u8303\u56F4\uFF0C\u8FD4\u56DE <code>[ Date, Date]</code> \u8868\u793A\u5F00\u59CB\u4E0E\u7ED3\u675F\u65E5\u671F\uFF0C\u4F8B\u5982\uFF1A\u83B7\u53D6\u672C\u5468\u65F6\u95F4\uFF1A</p>
<pre><code class="language-ts">getTimeDistance(&#39;week&#39;)
</code></pre>
<p><strong>\u53C2\u6570</strong></p>
<ul>
<li><code>type</code> \u5FEB\u6377\u7C7B\u578B\uFF0C\u5E26 <code>-</code> \u8868\u793A\u8FC7\u53BB\u4E00\u4E2A\u65F6\u95F4\uFF0C\u82E5\u6307\u5B9A <code>number</code> \u8868\u793A\u5929\u6570<ul>
<li><code>today</code>\u3001<code>-today</code>\u3001<code>yesterday</code> \u4ECA\u5929\u6216\u6628\u5929</li>
<li><code>week</code>\u3001<code>-week</code> \u672C\u5468\u6216\u4E0A\u5468</li>
<li><code>month</code>\u3001<code>-month</code> \u672C\u6708\u6216\u4E0A\u6708</li>
<li><code>year</code>\u3001<code>-year</code> \u4ECA\u5E74\u6216\u53BB\u5E74</li>
</ul>
</li>
<li><code>time</code> \u6307\u5B9A\u5F00\u59CB\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A\uFF1A<code>now</code></li>
</ul>
`,api:"",toc:[{id:"todate",title:"toDate"},{id:"formatdate",title:"formatDate"},{id:"datetimepickerutil",title:"dateTimePickerUtil"},{id:"gettimedistance",title:"getTimeDistance"}],raw:"---\ntitle: date-time\nsubtitle: \u65E5\u671F\u65F6\u95F4\u8F6C\u6362\ntype: Tools\n---\n\n## toDate\n\n\u8F6C\u6362\u6210 `Date` \u683C\u5F0F\uFF0C\u652F\u6301 `Date, number, string` \u7C7B\u578B\uFF0C\u5982\u679C\u662F `number` \u8868\u793A Unix timestamp\u3002\n\n* `formatString` \u5982\u679C\u8F6C\u6362\u5931\u8D25\u5C1D\u8BD5\u6839\u636E `formatString` \u683C\u5F0F\u6765\u8F6C\u6362\n* `defaultValue` \u65E0\u6548\u65E5\u671F\u5E94\u8FD4\u56DE\u7684\u9ED8\u8BA4\u503C\uFF0C\u9ED8\u8BA4\uFF1A`new Date(NaN)`\n* `timestampSecond` \u4F20\u5165\u503C\u662F\u5426\u79D2\u7EA7\n\n## formatDate\n\n\u683C\u5F0F\u5316\u65E5\u671F\uFF0C\u652F\u6301 `Date, number, string` \u7C7B\u578B\uFF0C\u5982\u679C\u662F `number` \u8868\u793A Unix timestamp)\u3002\n\n* \u5B57\u7B26\u4E32\u683C\u5F0F\u8BF7\u53C2\u8003 [date-fnd format](https://date-fns.org/v2.30.0/docs/format)\n* `dateLocale` \u5EFA\u8BAE\u901A\u8FC7\u4F7F\u7528 `inject(NZ_DATE_LOCALE)` \u4E0E NG-ZORRO \u4FDD\u6301\u4E00\u81F4\n\n## dateTimePickerUtil\n\n\u4E00\u7EC4\u9488\u5BF9 [DatePicker](https://ng.ant.design/components/date-picker/en) \u7684\u5DE5\u5177\u7C7B\u3002\n\n- `now` \u5F53\u524D\u672C\u5730\u65F6\u95F4\n- `date` \u5F53\u524D\u672C\u5730\u65E5\u671F\uFF08\u4E0D\u5305\u542B\u65F6\u95F4\u90E8\u5206\uFF09\n- `removeTime` \u79FB\u9664\u65E5\u671F\u7684\u65F6\u95F4\u90E8\u5206\n- `format` \u683C\u5F0F\u5316\u65E5\u671F\n- `getDiffDays` \u8BA1\u7B97\u4E24\u4E2A\u65E5\u671F\u76F8\u5DEE\u5929\u6570\uFF0C`0` \u8868\u793A\u540C\u4E00\u5929\n- `disabledBeforeDate` \u7981\u7528\u4E4B\u524D\u65E5\u671F\uFF08\u9ED8\u8BA4\uFF1A\u4ECA\u5929\uFF09\uFF0C\u4E00\u822C\u670D\u52A1\u4E8E `nzDisabledDate`\n- `disabledAfterDate` \u7981\u7528\u4E4B\u540E\u65E5\u671F\uFF08\u9ED8\u8BA4\uFF1A\u4ECA\u5929\uFF09\uFF0C\u4E00\u822C\u670D\u52A1\u4E8E `nzDisabledDate`\n- `disabledBeforeTime` \u7981\u7528\u4E4B\u524D\u65F6\u95F4\uFF08\u9ED8\u8BA4\uFF1A\u73B0\u5728\uFF09\uFF0C\u4E00\u822C\u670D\u52A1\u4E8E `nzDisabledTime`\n- `disabledAfterTime` \u7981\u7528\u4E4B\u540E\u65F6\u95F4\uFF08\u9ED8\u8BA4\uFF1A\u73B0\u5728\uFF09\uFF0C\u4E00\u822C\u670D\u52A1\u4E8E `nzDisabledTime`\n\n```ts\ndisabledDate = dateTimePickerUtil.disabledBeforeDate();\ndisabledDateTime = dateTimePickerUtil.disabledBeforeTime({ offsetSeconds: 60 * 5 });\n```\n\n## getTimeDistance\n\n\u83B7\u53D6\u65F6\u95F4\u8303\u56F4\uFF0C\u8FD4\u56DE `[ Date, Date]` \u8868\u793A\u5F00\u59CB\u4E0E\u7ED3\u675F\u65E5\u671F\uFF0C\u4F8B\u5982\uFF1A\u83B7\u53D6\u672C\u5468\u65F6\u95F4\uFF1A\n\n```ts\ngetTimeDistance('week')\n```\n\n**\u53C2\u6570**\n\n- `type` \u5FEB\u6377\u7C7B\u578B\uFF0C\u5E26 `-` \u8868\u793A\u8FC7\u53BB\u4E00\u4E2A\u65F6\u95F4\uFF0C\u82E5\u6307\u5B9A `number` \u8868\u793A\u5929\u6570\n  - `today`\u3001`-today`\u3001`yesterday` \u4ECA\u5929\u6216\u6628\u5929\n  - `week`\u3001`-week` \u672C\u5468\u6216\u4E0A\u5468\n  - `month`\u3001`-month` \u672C\u6708\u6216\u4E0A\u6708\n  - `year`\u3001`-year` \u4ECA\u5E74\u6216\u53BB\u5E74\n- `time` \u6307\u5B9A\u5F00\u59CB\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A\uFF1A`now`"}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["util-date-time"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&i(0,"app-docs",0),e&2&&a("codes",n.codes)("item",n.item)},dependencies:[r],encapsulation:2})};var h=class t{item={name:"decorator",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"decorator",subtitle:"Decorator",description:"The decoration method runs in runOutsideAngular.The decoration method runs in run.",group:"Tools",order:0,path:"packages/util/decorator/index.en-US.md",url:"/util/decorator/en"},text:`<h2 id="zoneoutside"><a class="lake-link"><i data-anchor="zoneoutside"></i></a>&#64;ZoneOutside</h2><p>The decoration method runs in <code>runOutsideAngular</code>.</p>
<pre><code class="language-ts">class MockClass &#123;
  constructor(public ngZone: NgZone) &#123;&#125;

  &#64;ZoneOutside()
  run(): void &#123;&#125;
&#125;
</code></pre>
<h2 id="zonerun"><a class="lake-link"><i data-anchor="zonerun"></i></a>&#64;ZoneRun</h2><p>The decoration method runs in <code>run</code>.</p>
<pre><code class="language-ts">class MockClass &#123;
  constructor(public ngZone: NgZone) &#123;&#125;

  &#64;ZoneRun()
  run(): void &#123;&#125;
&#125;
</code></pre>
`,api:"",toc:[{id:"zoneoutside",title:"@ZoneOutside"},{id:"zonerun",title:"@ZoneRun"}],raw:`---
title: decorator
subtitle: Decorator
type: Tools
---

## @ZoneOutside

The decoration method runs in \`runOutsideAngular\`.

\`\`\`ts
class MockClass {
  constructor(public ngZone: NgZone) {}

  @ZoneOutside()
  run(): void {}
}
\`\`\`

## @ZoneRun

The decoration method runs in \`run\`.

\`\`\`ts
class MockClass {
  constructor(public ngZone: NgZone) {}

  @ZoneRun()
  run(): void {}
}
\`\`\``},"zh-CN":{meta:{title:"decorator",subtitle:"\u88C5\u9970\u5668",description:"\u88C5\u9970\u65B9\u6CD5\u8FD0\u884C\u5728 runOutsideAngular \u5185\u3002\u88C5\u9970\u65B9\u6CD5\u8FD0\u884C\u5728 run \u5185\u3002",group:"Tools",order:0,path:"packages/util/decorator/index.zh-CN.md",url:"/util/decorator/zh"},text:`<h2 id="zoneoutside"><a class="lake-link"><i data-anchor="zoneoutside"></i></a>&#64;ZoneOutside</h2><p>\u88C5\u9970\u65B9\u6CD5\u8FD0\u884C\u5728 <code>runOutsideAngular</code> \u5185\u3002</p>
<pre><code class="language-ts">class MockClass &#123;
  constructor(public ngZone: NgZone) &#123;&#125;

  &#64;ZoneOutside()
  run(): void &#123;&#125;
&#125;
</code></pre>
<h2 id="zonerun"><a class="lake-link"><i data-anchor="zonerun"></i></a>&#64;ZoneRun</h2><p>\u88C5\u9970\u65B9\u6CD5\u8FD0\u884C\u5728 <code>run</code> \u5185\u3002</p>
<pre><code class="language-ts">class MockClass &#123;
  constructor(public ngZone: NgZone) &#123;&#125;

  &#64;ZoneRun()
  run(): void &#123;&#125;
&#125;
</code></pre>
`,api:"",toc:[{id:"zoneoutside",title:"@ZoneOutside"},{id:"zonerun",title:"@ZoneRun"}],raw:`---
title: decorator
subtitle: \u88C5\u9970\u5668
type: Tools
---

## @ZoneOutside

\u88C5\u9970\u65B9\u6CD5\u8FD0\u884C\u5728 \`runOutsideAngular\` \u5185\u3002

\`\`\`ts
class MockClass {
  constructor(public ngZone: NgZone) {}

  @ZoneOutside()
  run(): void {}
}
\`\`\`

## @ZoneRun

\u88C5\u9970\u65B9\u6CD5\u8FD0\u884C\u5728 \`run\` \u5185\u3002

\`\`\`ts
class MockClass {
  constructor(public ngZone: NgZone) {}

  @ZoneRun()
  run(): void {}
}
\`\`\``}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["util-decorator"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&i(0,"app-docs",0),e&2&&a("codes",n.codes)("item",n.item)},dependencies:[r],encapsulation:2})};var g=class t{item={name:"form",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"form",subtitle:"Reactive Forms",description:"Match two control values, for examples:A set of validators for reactive forms, including:_Validators.num Wheter is number_Validators.int Wheter is int...",group:"Tools",order:0,path:"packages/util/form/index.en-US.md",url:"/util/form/en"},text:`<h2 id="matchcontrol"><a class="lake-link"><i data-anchor="matchcontrol"></i></a>MatchControl</h2><p>Match two control values, for examples:</p>
<pre><code class="language-ts">this.form = new FormGroup(&#123;
  pwd: new FormControl(&#39;&#39;),
  repwd: new FormControl(&#39;&#39;),
&#125;, &#123;
  validators: MatchControl(&#39;pwd&#39;, &#39;repwd&#39;),
&#125;);
</code></pre>
<h2 id="validators"><a class="lake-link"><i data-anchor="validators"></i></a>_Validators</h2><p>A set of validators for reactive forms, including:</p>
<ul>
<li><code>_Validators.num</code> Wheter is number</li>
<li><code>_Validators.int</code> Wheter is integer</li>
<li><code>_Validators.decimal</code> Wheter is decimal</li>
<li><code>_Validators.idCard</code> Wheter is People&#39;s Republic of China identity card</li>
<li><code>_Validators.mobile</code> Wheter is mobile (China)</li>
<li><code>_Validators.url</code> Wheter is url address</li>
<li><code>_Validators.ip4</code> Wheter is IP address (Support v4, v6)</li>
<li><code>_Validators.color</code> Wheter is color</li>
<li><code>_Validators.chinese</code> Wheter is chinese</li>
</ul>
<p>Every method has a corresponding form validation:</p>
<pre><code class="language-ts">this.valForm = fb.group(&#123;
  // is mobile
  mobile: [null, Validators.compose([Validators.required, _Validators.mobile])]
&#125;);
</code></pre>
`,api:"",toc:[{id:"matchcontrol",title:"MatchControl"},{id:"validators",title:"_Validators"}],raw:`---
title: form
subtitle: Reactive Forms
type: Tools
---

## MatchControl

Match two control values, for examples:

\`\`\`ts
this.form = new FormGroup({
  pwd: new FormControl(''),
  repwd: new FormControl(''),
}, {
  validators: MatchControl('pwd', 'repwd'),
});
\`\`\`

## _Validators

A set of validators for reactive forms, including:

- \`_Validators.num\` Wheter is number
- \`_Validators.int\` Wheter is integer
- \`_Validators.decimal\` Wheter is decimal
- \`_Validators.idCard\` Wheter is People's Republic of China identity card
- \`_Validators.mobile\` Wheter is mobile (China)
- \`_Validators.url\` Wheter is url address
- \`_Validators.ip4\` Wheter is IP address (Support v4, v6)
- \`_Validators.color\` Wheter is color
- \`_Validators.chinese\` Wheter is chinese

Every method has a corresponding form validation:

\`\`\`ts
this.valForm = fb.group({
  // is mobile
  mobile: [null, Validators.compose([Validators.required, _Validators.mobile])]
});
\`\`\``},"zh-CN":{meta:{title:"form",subtitle:"\u54CD\u5E94\u5F0F\u8868\u5355\u6821\u9A8C",description:"\u5339\u914D\u4E24\u4E2A\u63A7\u4EF6\u503C\uFF0C\u4F8B\u5982\uFF1A\u4E00\u5957\u7528\u4E8E\u54CD\u5E94\u5F0F\u8868\u5355\u7684\u9A8C\u8BC1\u5668\uFF0C\u5305\u542B\uFF1A_Validators.num \u662F\u5426\u4E3A\u6570\u5B57_Validators.int \u662F\u5426\u4E3A\u6574\u6570_Validators.decimal \u662F\u5426\u4E3A\u5C0F\u6570\u70B9\u6570\u503C_Validators.idCard \u662F\u5426\u4E3A\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u5C45\u6C11\u8EAB\u4EFD\u8BC1_Validators.mobile",group:"Tools",order:0,path:"packages/util/form/index.zh-CN.md",url:"/util/form/zh"},text:`<h2 id="matchcontrol"><a class="lake-link"><i data-anchor="matchcontrol"></i></a>MatchControl</h2><p>\u5339\u914D\u4E24\u4E2A\u63A7\u4EF6\u503C\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-ts">this.form = new FormGroup(&#123;
  pwd: new FormControl(&#39;&#39;),
  repwd: new FormControl(&#39;&#39;),
&#125;, &#123;
  validators: MatchControl(&#39;pwd&#39;, &#39;repwd&#39;),
&#125;);
</code></pre>
<h2 id="validators"><a class="lake-link"><i data-anchor="validators"></i></a>_Validators</h2><p>\u4E00\u5957\u7528\u4E8E\u54CD\u5E94\u5F0F\u8868\u5355\u7684\u9A8C\u8BC1\u5668\uFF0C\u5305\u542B\uFF1A</p>
<ul>
<li><code>_Validators.num</code> \u662F\u5426\u4E3A\u6570\u5B57</li>
<li><code>_Validators.int</code> \u662F\u5426\u4E3A\u6574\u6570</li>
<li><code>_Validators.decimal</code> \u662F\u5426\u4E3A\u5C0F\u6570\u70B9\u6570\u503C</li>
<li><code>_Validators.idCard</code> \u662F\u5426\u4E3A\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u5C45\u6C11\u8EAB\u4EFD\u8BC1</li>
<li><code>_Validators.mobile</code> \u662F\u5426\u4E3A\u624B\u673A\u53F7\uFF08\u4E2D\u56FD\uFF09</li>
<li><code>_Validators.url</code> \u662F\u5426URL\u5730\u5740</li>
<li><code>_Validators.ip4</code> \u662F\u5426IP\u5730\u5740\uFF08\u652F\u6301v4\u3001v6\uFF09</li>
<li><code>_Validators.color</code> \u662F\u5426\u989C\u8272\u4EE3\u7801\u503C</li>
<li><code>_Validators.chinese</code> \u662F\u5426\u4E2D\u6587</li>
</ul>
<p>\u6BCF\u4E00\u4E2A\u9A8C\u8BC1\u578B\u90FD\u5305\u62EC\u7740\u7528\u4E8E\u8868\u5355\u9A8C\u8BC1\u5668\uFF1A</p>
<pre><code class="language-ts">this.valForm = fb.group(&#123;
  // \u624B\u673A\u53F7
  mobile: [null, Validators.compose([Validators.required, _Validators.mobile])]
&#125;);
</code></pre>
`,api:"",toc:[{id:"matchcontrol",title:"MatchControl"},{id:"validators",title:"_Validators"}],raw:`---
title: form
subtitle: \u54CD\u5E94\u5F0F\u8868\u5355\u6821\u9A8C
type: Tools
---

## MatchControl

\u5339\u914D\u4E24\u4E2A\u63A7\u4EF6\u503C\uFF0C\u4F8B\u5982\uFF1A

\`\`\`ts
this.form = new FormGroup({
  pwd: new FormControl(''),
  repwd: new FormControl(''),
}, {
  validators: MatchControl('pwd', 'repwd'),
});
\`\`\`

## _Validators

\u4E00\u5957\u7528\u4E8E\u54CD\u5E94\u5F0F\u8868\u5355\u7684\u9A8C\u8BC1\u5668\uFF0C\u5305\u542B\uFF1A

- \`_Validators.num\` \u662F\u5426\u4E3A\u6570\u5B57
- \`_Validators.int\` \u662F\u5426\u4E3A\u6574\u6570
- \`_Validators.decimal\` \u662F\u5426\u4E3A\u5C0F\u6570\u70B9\u6570\u503C
- \`_Validators.idCard\` \u662F\u5426\u4E3A\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u5C45\u6C11\u8EAB\u4EFD\u8BC1
- \`_Validators.mobile\` \u662F\u5426\u4E3A\u624B\u673A\u53F7\uFF08\u4E2D\u56FD\uFF09
- \`_Validators.url\` \u662F\u5426URL\u5730\u5740
- \`_Validators.ip4\` \u662F\u5426IP\u5730\u5740\uFF08\u652F\u6301v4\u3001v6\uFF09
- \`_Validators.color\` \u662F\u5426\u989C\u8272\u4EE3\u7801\u503C
- \`_Validators.chinese\` \u662F\u5426\u4E2D\u6587

\u6BCF\u4E00\u4E2A\u9A8C\u8BC1\u578B\u90FD\u5305\u62EC\u7740\u7528\u4E8E\u8868\u5355\u9A8C\u8BC1\u5668\uFF1A

\`\`\`ts
this.valForm = fb.group({
  // \u624B\u673A\u53F7
  mobile: [null, Validators.compose([Validators.required, _Validators.mobile])]
});
\`\`\``}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["util-form"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&i(0,"app-docs",0),e&2&&a("codes",n.codes)("item",n.item)},dependencies:[r],encapsulation:2})};var f=class t{item={name:"format",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"format",subtitle:"String,Check,Currency,Mask",description:"You can override to set the startingUnit, megaUnit, precision, ingoreZeroPrecision through Global Configuration.Format a number with commas as thousan...",group:"Tools",order:0,path:"packages/util/format/index.en-US.md",url:"/util/format/en"},text:`<h2 id="currencyservice"><a class="lake-link"><i data-anchor="currencyservice"></i></a>CurrencyService<label class="api-type-label service">service</label></h2><blockquote>
<p>You can override to set the <code>startingUnit</code>, <code>megaUnit</code>, <code>precision</code>, <code>ingoreZeroPrecision</code> through <a href="/docs/global-config">Global Configuration</a>.</p>
</blockquote>
<h3 id="format"><a class="lake-link"><i data-anchor="format"></i></a>format</h3><p>Format a number with commas as thousands separators.</p>
<pre><code class="language-ts">10000 =&gt; \`10,000\`
10000.567 =&gt; \`10,000.57\`
</code></pre>
<blockquote>
<p>Use anguar <code>currency</code> pipe parse when is set, pls refer to <a href="https://angular.io/api/common/CurrencyPipe" target="_blank" rel="noopener">document</a>.</p>
</blockquote>
<h3 id="mega"><a class="lake-link"><i data-anchor="mega"></i></a>mega</h3><p>Large number format filter.</p>
<pre><code class="language-ts">1000 =&gt; &#123; value: &#39;1&#39;, unit: &#39;K&#39;, unitI18n: &#39;\u5343&#39; &#125;
12456 =&gt; &#123; value: &#39;12.46&#39;, unit: &#39;K&#39;, unitI18n: &#39;\u5343&#39; &#125;
</code></pre>
<h3 id="cny"><a class="lake-link"><i data-anchor="cny"></i></a>cny</h3><p>Converted into RMB notation.</p>
<pre><code class="language-ts">1 =&gt; \u58F9\u5143\u6574
1.34 =&gt; \u58F9\u5143\u53C1\u89D2\u8086\u5206
</code></pre>
<h2 id="format"><a class="lake-link"><i data-anchor="format"></i></a>format</h2><p>String formatting.</p>
<pre><code class="language-ts">format(&#39;this is $&#123;name&#125;&#39;, &#123; name: &#39;asdf&#39; &#125;)
// output: this is asdf
format(&#39;this is $&#123;user.name&#125;&#39;, &#123; user: &#123; name: &#39;asdf&#39; &#125; &#125;, true)
// output: this is asdf
</code></pre>
<h3 id="formatmask"><a class="lake-link"><i data-anchor="formatmask"></i></a>formatMask</h3><p>Format mask.</p>
<table>
<thead>
<tr>
<th>Character</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>0</code></td>
<td>Any numbers, if the character at that position does not match, the default is <code>0</code> to fill</td>
</tr>
<tr>
<td><code>9</code></td>
<td>Any numbers</td>
</tr>
<tr>
<td><code>#</code></td>
<td>Any letter</td>
</tr>
<tr>
<td><code>U</code></td>
<td>Convert to uppercase</td>
</tr>
<tr>
<td><code>L</code></td>
<td>Convert to lowercase</td>
</tr>
<tr>
<td><code>*</code></td>
<td>Convert to <code>*</code> character</td>
</tr>
</tbody></table>
<pre><code class="language-ts">formatMask(&#39;123&#39;, &#39;(###)&#39;) =&gt; (123)
formatMask(&#39;15900000000&#39;, &#39;999****9999&#39;) =&gt; 159****0000
formatMask(&#39;aBc&#39;, &#39;UUU&#39;) =&gt; ABC
formatMask(&#39;ABc&#39;, &#39;LLL&#39;) =&gt; abc
</code></pre>
<p>Or custom Token:</p>
<pre><code class="language-ts">const option: FormatMaskOption = &#123;
  mask: &#39;CC999&#39;,
  tokens: &#123; C: &#123; pattern: /.*/, transform: char =&gt; (char === &#39;\u4F60&#39; ? &#39;N&#39; : &#39;H&#39;) &#125; &#125;
&#125;
formatMask(&#39;\u4F60\u597D123&#39;, option) =&gt; NH123
</code></pre>
<h2 id="regex"><a class="lake-link"><i data-anchor="regex"></i></a>REGEX</h2><p>A set of common regular expressions. You can also get their regular string format through <code>REGEX_STR</code>, and cooperate with <code>new RegExp</code> to complete some additional processing.</p>
<h2 id="num"><a class="lake-link"><i data-anchor="num"></i></a>num</h2><p>Wheter is number.</p>
<h2 id="int"><a class="lake-link"><i data-anchor="int"></i></a>int</h2><p>Wheter is integer.</p>
<h2 id="decimal"><a class="lake-link"><i data-anchor="decimal"></i></a>decimal</h2><p>Wheter is decimal.</p>
<h2 id="idcard"><a class="lake-link"><i data-anchor="idcard"></i></a>idCard</h2><p>Wheter is People&#39;s Republic of China identity card.</p>
<h2 id="ismobile"><a class="lake-link"><i data-anchor="ismobile"></i></a>isMobile</h2><p>Wheter is mobile (China).</p>
<h2 id="isurl"><a class="lake-link"><i data-anchor="isurl"></i></a>isUrl</h2><p>Wheter is url address.</p>
<h2 id="isip"><a class="lake-link"><i data-anchor="isip"></i></a>isIp</h2><p>Wheter is IP address (Support v4, v6).</p>
<h2 id="iscolor"><a class="lake-link"><i data-anchor="iscolor"></i></a>isColor</h2><p>Wheter is color.</p>
<h2 id="ischinese"><a class="lake-link"><i data-anchor="ischinese"></i></a>isChinese</h2><p>Wheter is chinese.</p>
`,api:"",toc:[{id:"currencyservice",title:"CurrencyService",children:[{id:"format",title:"format"},{id:"mega",title:"mega"},{id:"cny",title:"cny"}]},{id:"format",title:"format",children:[{id:"formatmask",title:"formatMask"}]},{id:"regex",title:"REGEX"},{id:"num",title:"num"},{id:"int",title:"int"},{id:"decimal",title:"decimal"},{id:"idcard",title:"idCard"},{id:"ismobile",title:"isMobile"},{id:"isurl",title:"isUrl"},{id:"isip",title:"isIp"},{id:"iscolor",title:"isColor"},{id:"ischinese",title:"isChinese"}],raw:`---
title: format
subtitle: String,Check,Currency,Mask
type: Tools
---

## CurrencyService

> You can override to set the \`startingUnit\`, \`megaUnit\`, \`precision\`, \`ingoreZeroPrecision\` through [Global Configuration](/docs/global-config).

### format

Format a number with commas as thousands separators.

\`\`\`ts
10000 => \`10,000\`
10000.567 => \`10,000.57\`
\`\`\`

> Use anguar \`currency\` pipe parse when is set, pls refer to [document](https://angular.io/api/common/CurrencyPipe).

### mega

Large number format filter.

\`\`\`ts
1000 => { value: '1', unit: 'K', unitI18n: '\u5343' }
12456 => { value: '12.46', unit: 'K', unitI18n: '\u5343' }
\`\`\`

### cny

Converted into RMB notation.

\`\`\`ts
1 => \u58F9\u5143\u6574
1.34 => \u58F9\u5143\u53C1\u89D2\u8086\u5206
\`\`\`

## format

String formatting.

\`\`\`ts
format('this is \${name}', { name: 'asdf' })
// output: this is asdf
format('this is \${user.name}', { user: { name: 'asdf' } }, true)
// output: this is asdf
\`\`\`

### formatMask

Format mask.

| Character | Description |
| --- | --- |
| \`0\` | Any numbers, if the character at that position does not match, the default is \`0\` to fill |
| \`9\` | Any numbers |
| \`#\` | Any letter |
| \`U\` | Convert to uppercase |
| \`L\` | Convert to lowercase |
| \`*\` | Convert to \`*\` character |

\`\`\`ts
formatMask('123', '(###)') => (123)
formatMask('15900000000', '999****9999') => 159****0000
formatMask('aBc', 'UUU') => ABC
formatMask('ABc', 'LLL') => abc
\`\`\`

Or custom Token:

\`\`\`ts
const option: FormatMaskOption = {
  mask: 'CC999',
  tokens: { C: { pattern: /.*/, transform: char => (char === '\u4F60' ? 'N' : 'H') } }
}
formatMask('\u4F60\u597D123', option) => NH123
\`\`\`

## REGEX

A set of common regular expressions. You can also get their regular string format through \`REGEX_STR\`, and cooperate with \`new RegExp\` to complete some additional processing.

## num

Wheter is number.

## int

Wheter is integer.

## decimal

Wheter is decimal.

## idCard

Wheter is People's Republic of China identity card.

## isMobile

Wheter is mobile (China).

## isUrl

Wheter is url address.

## isIp

Wheter is IP address (Support v4, v6).

## isColor

Wheter is color.

## isChinese

Wheter is chinese.`},"zh-CN":{meta:{title:"format",subtitle:"\u5B57\u7B26,\u6821\u9A8C,\u8D27\u5E01,\u63A9\u7801",description:"\u53EF\u4EE5\u901A\u8FC7\u5168\u5C40\u914D\u7F6E\u8986\u76D6 startingUnit\u3001megaUnit\u3001precision\u3001ingoreZeroPrecision \u7B49\u53C2\u6570\u3002\u683C\u5F0F\u5316\u8D27\u5E01\uFF0C\u7528\u9017\u53F7\u5C06\u6570\u5B57\u683C\u5F0F\u5316\u4E3A\u5343\u4F4D\u5206\u9694\u7B26\u3002\u82E5\u6307\u5B9A\u5219\u8868\u793A\u4F7F\u7528 Angular \u81EA\u5E26\u7684 currency \u7BA1\u9053\u6765\u89E3\u6790\uFF0C\u89C1\u6587\u6863\u3002\u683C\u5F0F\u5316\u63A9\u7801\u3002\u6216\u81EA\u5B9A\u4E49Token\uFF1A\u5927\u6570\u636E\u683C\u5F0F...",group:"Tools",order:0,path:"packages/util/format/index.zh-CN.md",url:"/util/format/zh"},text:`<h2 id="currencyservice"><a class="lake-link"><i data-anchor="currencyservice"></i></a>CurrencyService<label class="api-type-label service">service</label></h2><blockquote>
<p>\u53EF\u4EE5\u901A\u8FC7<a href="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u8986\u76D6 <code>startingUnit</code>\u3001<code>megaUnit</code>\u3001<code>precision</code>\u3001<code>ingoreZeroPrecision</code> \u7B49\u53C2\u6570\u3002</p>
</blockquote>
<h3 id="format"><a class="lake-link"><i data-anchor="format"></i></a>format</h3><p>\u683C\u5F0F\u5316\u8D27\u5E01\uFF0C\u7528\u9017\u53F7\u5C06\u6570\u5B57\u683C\u5F0F\u5316\u4E3A\u5343\u4F4D\u5206\u9694\u7B26\u3002</p>
<pre><code class="language-ts">10000 =&gt; \`10,000\`
10000.567 =&gt; \`10,000.57\`
</code></pre>
<blockquote>
<p>\u82E5\u6307\u5B9A\u5219\u8868\u793A\u4F7F\u7528 Angular \u81EA\u5E26\u7684 <code>currency</code> \u7BA1\u9053\u6765\u89E3\u6790\uFF0C\u89C1<a href="https://angular.cn/api/common/CurrencyPipe" target="_blank" rel="noopener">\u6587\u6863</a>\u3002</p>
</blockquote>
<h3 id="formatmask"><a class="lake-link"><i data-anchor="formatmask"></i></a>formatMask</h3><p>\u683C\u5F0F\u5316\u63A9\u7801\u3002</p>
<table>
<thead>
<tr>
<th>\u5B57\u7B26</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody><tr>
<td><code>0</code></td>
<td>\u4EFB\u610F\u6570\u5B57\uFF0C\u82E5\u8BE5\u4F4D\u7F6E\u5B57\u7B26\u4E0D\u7B26\u5408\uFF0C\u5219\u9ED8\u8BA4\u4E3A <code>0</code> \u586B\u5145</td>
</tr>
<tr>
<td><code>9</code></td>
<td>\u4EFB\u610F\u6570\u5B57</td>
</tr>
<tr>
<td><code>#</code></td>
<td>\u4EFB\u610F\u5B57\u7B26</td>
</tr>
<tr>
<td><code>U</code></td>
<td>\u8F6C\u6362\u5927\u5199</td>
</tr>
<tr>
<td><code>L</code></td>
<td>\u8F6C\u6362\u5C0F\u5199</td>
</tr>
<tr>
<td><code>*</code></td>
<td>\u8F6C\u6362\u4E3A <code>*</code> \u5B57\u7B26</td>
</tr>
</tbody></table>
<pre><code class="language-ts">formatMask(&#39;123&#39;, &#39;(###)&#39;) =&gt; (123)
formatMask(&#39;15900000000&#39;, &#39;999****9999&#39;) =&gt; 159****0000
formatMask(&#39;aBc&#39;, &#39;UUU&#39;) =&gt; ABC
formatMask(&#39;ABc&#39;, &#39;LLL&#39;) =&gt; abc
</code></pre>
<p>\u6216\u81EA\u5B9A\u4E49Token\uFF1A</p>
<pre><code class="language-ts">const option: FormatMaskOption = &#123;
  mask: &#39;CC999&#39;,
  tokens: &#123; C: &#123; pattern: /.*/, transform: char =&gt; (char === &#39;\u4F60&#39; ? &#39;N&#39; : &#39;H&#39;) &#125; &#125;
&#125;
formatMask(&#39;\u4F60\u597D123&#39;, option) =&gt; NH123
</code></pre>
<h3 id="mega"><a class="lake-link"><i data-anchor="mega"></i></a>mega</h3><p>\u5927\u6570\u636E\u683C\u5F0F\u5316\u3002</p>
<pre><code class="language-ts">1000 =&gt; &#123; value: &#39;1&#39;, unit: &#39;K&#39;, unitI18n: &#39;\u5343&#39; &#125;
12456 =&gt; &#123; value: &#39;12.46&#39;, unit: &#39;K&#39;, unitI18n: &#39;\u5343&#39; &#125;
</code></pre>
<h3 id="cny"><a class="lake-link"><i data-anchor="cny"></i></a>cny</h3><p>\u8F6C\u5316\u6210\u4EBA\u6C11\u5E01\u8868\u793A\u6CD5\u3002</p>
<pre><code class="language-ts">1 =&gt; \u58F9\u5143\u6574
1.34 =&gt; \u58F9\u5143\u53C1\u89D2\u8086\u5206
</code></pre>
<h2 id="format"><a class="lake-link"><i data-anchor="format"></i></a>format</h2><p>\u5B57\u7B26\u4E32\u683C\u5F0F\u5316\u3002</p>
<pre><code class="language-ts">format(&#39;this is $&#123;name&#125;&#39;, &#123; name: &#39;asdf&#39; &#125;)
// output: this is asdf
format(&#39;this is $&#123;user.name&#125;&#39;, &#123; user: &#123; name: &#39;asdf&#39; &#125; &#125;, true)
// output: this is asdf
</code></pre>
<h2 id="regex"><a class="lake-link"><i data-anchor="regex"></i></a>REGEX</h2><p>\u4E00\u7EC4\u5E38\u89C1\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>REGEX_STR</code> \u6765\u83B7\u53D6\u5B83\u4EEC\u7684\u6B63\u5219\u5B57\u7B26\u4E32\u683C\u5F0F\uFF0C\u914D\u5408 <code>new RegExp</code> \u5B8C\u6210\u4E00\u4E9B\u989D\u5916\u7684\u5904\u7406\u3002</p>
<h2 id="num"><a class="lake-link"><i data-anchor="num"></i></a>num</h2><p>\u662F\u5426\u4E3A\u6570\u5B57\u3002</p>
<h2 id="int"><a class="lake-link"><i data-anchor="int"></i></a>int</h2><p>\u662F\u5426\u4E3A\u6574\u6570\u3002</p>
<h2 id="decimal"><a class="lake-link"><i data-anchor="decimal"></i></a>decimal</h2><p>\u662F\u5426\u4E3A\u5C0F\u6570\u70B9\u6570\u503C\u3002</p>
<h2 id="idcard"><a class="lake-link"><i data-anchor="idcard"></i></a>idCard</h2><p>\u662F\u5426\u4E3A\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u5C45\u6C11\u8EAB\u4EFD\u8BC1\u3002</p>
<h2 id="ismobile"><a class="lake-link"><i data-anchor="ismobile"></i></a>isMobile</h2><p>\u662F\u5426\u4E3A\u624B\u673A\u53F7\uFF08\u4E2D\u56FD\uFF09\u3002</p>
<h2 id="isurl"><a class="lake-link"><i data-anchor="isurl"></i></a>isUrl</h2><p>\u662F\u5426URL\u5730\u5740\u3002</p>
<h2 id="isip"><a class="lake-link"><i data-anchor="isip"></i></a>isIp</h2><p>\u662F\u5426IP\u5730\u5740\uFF08\u652F\u6301v4\u3001v6\uFF09\u3002</p>
<h2 id="iscolor"><a class="lake-link"><i data-anchor="iscolor"></i></a>isColor</h2><p>\u662F\u5426\u989C\u8272\u4EE3\u7801\u503C\u3002</p>
<h2 id="ischinese"><a class="lake-link"><i data-anchor="ischinese"></i></a>isChinese</h2><p>\u662F\u5426\u4E2D\u6587\u3002</p>
`,api:"",toc:[{id:"currencyservice",title:"CurrencyService",children:[{id:"format",title:"format"},{id:"formatmask",title:"formatMask"},{id:"mega",title:"mega"},{id:"cny",title:"cny"}]},{id:"format",title:"format"},{id:"regex",title:"REGEX"},{id:"num",title:"num"},{id:"int",title:"int"},{id:"decimal",title:"decimal"},{id:"idcard",title:"idCard"},{id:"ismobile",title:"isMobile"},{id:"isurl",title:"isUrl"},{id:"isip",title:"isIp"},{id:"iscolor",title:"isColor"},{id:"ischinese",title:"isChinese"}],raw:`---
title: format
subtitle: \u5B57\u7B26,\u6821\u9A8C,\u8D27\u5E01,\u63A9\u7801
type: Tools
---

## CurrencyService

> \u53EF\u4EE5\u901A\u8FC7[\u5168\u5C40\u914D\u7F6E](/docs/global-config)\u8986\u76D6 \`startingUnit\`\u3001\`megaUnit\`\u3001\`precision\`\u3001\`ingoreZeroPrecision\` \u7B49\u53C2\u6570\u3002

### format

\u683C\u5F0F\u5316\u8D27\u5E01\uFF0C\u7528\u9017\u53F7\u5C06\u6570\u5B57\u683C\u5F0F\u5316\u4E3A\u5343\u4F4D\u5206\u9694\u7B26\u3002

\`\`\`ts
10000 => \`10,000\`
10000.567 => \`10,000.57\`
\`\`\`

> \u82E5\u6307\u5B9A\u5219\u8868\u793A\u4F7F\u7528 Angular \u81EA\u5E26\u7684 \`currency\` \u7BA1\u9053\u6765\u89E3\u6790\uFF0C\u89C1[\u6587\u6863](https://angular.cn/api/common/CurrencyPipe)\u3002

### formatMask

\u683C\u5F0F\u5316\u63A9\u7801\u3002

| \u5B57\u7B26 | \u63CF\u8FF0 |
| --- | --- |
| \`0\` | \u4EFB\u610F\u6570\u5B57\uFF0C\u82E5\u8BE5\u4F4D\u7F6E\u5B57\u7B26\u4E0D\u7B26\u5408\uFF0C\u5219\u9ED8\u8BA4\u4E3A \`0\` \u586B\u5145 |
| \`9\` | \u4EFB\u610F\u6570\u5B57 |
| \`#\` | \u4EFB\u610F\u5B57\u7B26 |
| \`U\` | \u8F6C\u6362\u5927\u5199 |
| \`L\` | \u8F6C\u6362\u5C0F\u5199 |
| \`*\` | \u8F6C\u6362\u4E3A \`*\` \u5B57\u7B26 |

\`\`\`ts
formatMask('123', '(###)') => (123)
formatMask('15900000000', '999****9999') => 159****0000
formatMask('aBc', 'UUU') => ABC
formatMask('ABc', 'LLL') => abc
\`\`\`

\u6216\u81EA\u5B9A\u4E49Token\uFF1A

\`\`\`ts
const option: FormatMaskOption = {
  mask: 'CC999',
  tokens: { C: { pattern: /.*/, transform: char => (char === '\u4F60' ? 'N' : 'H') } }
}
formatMask('\u4F60\u597D123', option) => NH123
\`\`\`

### mega

\u5927\u6570\u636E\u683C\u5F0F\u5316\u3002

\`\`\`ts
1000 => { value: '1', unit: 'K', unitI18n: '\u5343' }
12456 => { value: '12.46', unit: 'K', unitI18n: '\u5343' }
\`\`\`

### cny

\u8F6C\u5316\u6210\u4EBA\u6C11\u5E01\u8868\u793A\u6CD5\u3002

\`\`\`ts
1 => \u58F9\u5143\u6574
1.34 => \u58F9\u5143\u53C1\u89D2\u8086\u5206
\`\`\`

## format

\u5B57\u7B26\u4E32\u683C\u5F0F\u5316\u3002

\`\`\`ts
format('this is \${name}', { name: 'asdf' })
// output: this is asdf
format('this is \${user.name}', { user: { name: 'asdf' } }, true)
// output: this is asdf
\`\`\`

## REGEX

\u4E00\u7EC4\u5E38\u89C1\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u4E5F\u53EF\u4EE5\u901A\u8FC7 \`REGEX_STR\` \u6765\u83B7\u53D6\u5B83\u4EEC\u7684\u6B63\u5219\u5B57\u7B26\u4E32\u683C\u5F0F\uFF0C\u914D\u5408 \`new RegExp\` \u5B8C\u6210\u4E00\u4E9B\u989D\u5916\u7684\u5904\u7406\u3002

## num

\u662F\u5426\u4E3A\u6570\u5B57\u3002

## int

\u662F\u5426\u4E3A\u6574\u6570\u3002

## decimal

\u662F\u5426\u4E3A\u5C0F\u6570\u70B9\u6570\u503C\u3002

## idCard

\u662F\u5426\u4E3A\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u5C45\u6C11\u8EAB\u4EFD\u8BC1\u3002

## isMobile

\u662F\u5426\u4E3A\u624B\u673A\u53F7\uFF08\u4E2D\u56FD\uFF09\u3002

## isUrl

\u662F\u5426URL\u5730\u5740\u3002

## isIp

\u662F\u5426IP\u5730\u5740\uFF08\u652F\u6301v4\u3001v6\uFF09\u3002

## isColor

\u662F\u5426\u989C\u8272\u4EE3\u7801\u503C\u3002

## isChinese

\u662F\u5426\u4E2D\u6587\u3002`}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["util-format"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&i(0,"app-docs",0),e&2&&a("codes",n.codes)("item",n.item)},dependencies:[r],encapsulation:2})};var y=class t{item={name:"math",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"math",subtitle:"Math, Rounding",description:"Checks if value is between start and end to, but not including end. If end is not specified, it's set to start with start then set to 0. If start is g...",group:"Tools",order:0,path:"packages/util/math/index.en-US.md",url:"/util/math/en"},text:`<h2 id="inrange"><a class="lake-link"><i data-anchor="inrange"></i></a>inRange</h2><p>Checks if <code>value</code> is between <code>start</code> and <code>end</code> to, but not including <code>end</code>. If <code>end</code> is not specified, it&#39;s set to start with <code>start</code> then set to <code>0</code>. If <code>start</code> is greater than <code>end</code> the params are swapped to support negative ranges.</p>
<pre><code class="language-ts">inRange(3, 2, 4); // true
inRange(4, 8); // true
inRange(4, 2); // false
inRange(2, 2); // false
inRange(1.2, 2); // true
inRange(-3, -2, -6); // true
</code></pre>
<h2 id="ceil"><a class="lake-link"><i data-anchor="ceil"></i></a>ceil</h2><p>Computes <code>number</code> rounded up to <code>precision</code>.</p>
<pre><code class="language-ts">ceil(4.006); // 5
ceil(6.004, 2); // 6.01
ceil(6040, -2); // 6100
</code></pre>
<h2 id="floor"><a class="lake-link"><i data-anchor="floor"></i></a>floor</h2><p>Computes <code>number</code> rounded down to <code>precision</code>.</p>
<pre><code class="language-ts">floor(4.006); // 4
floor(0.046, 2); // 0.04
floor(4060, -2); // 4000
</code></pre>
<h2 id="round"><a class="lake-link"><i data-anchor="round"></i></a>round</h2><p>Computes <code>number</code> rounded to <code>precision</code>.</p>
<pre><code class="language-ts">round(4.006); // 4
round(4.006, 2); // 4.01
round(4060, -2); // 4100
</code></pre>
`,api:"",toc:[{id:"inrange",title:"inRange"},{id:"ceil",title:"ceil"},{id:"floor",title:"floor"},{id:"round",title:"round"}],raw:"---\ntitle: math\nsubtitle: Math, Rounding\ntype: Tools\n---\n\n## inRange\n\nChecks if `value` is between `start` and `end` to, but not including `end`. If `end` is not specified, it's set to start with `start` then set to `0`. If `start` is greater than `end` the params are swapped to support negative ranges.\n\n```ts\ninRange(3, 2, 4); // true\ninRange(4, 8); // true\ninRange(4, 2); // false\ninRange(2, 2); // false\ninRange(1.2, 2); // true\ninRange(-3, -2, -6); // true\n```\n\n## ceil\n\nComputes `number` rounded up to `precision`.\n\n```ts\nceil(4.006); // 5\nceil(6.004, 2); // 6.01\nceil(6040, -2); // 6100\n```\n\n## floor\n\nComputes `number` rounded down to `precision`.\n\n```ts\nfloor(4.006); // 4\nfloor(0.046, 2); // 0.04\nfloor(4060, -2); // 4000\n```\n\n## round\n\nComputes `number` rounded to `precision`.\n\n```ts\nround(4.006); // 4\nround(4.006, 2); // 4.01\nround(4060, -2); // 4100\n```"},"zh-CN":{meta:{title:"math",subtitle:"\u8303\u56F4\u3001\u56DB\u820D\u4E94\u5165",description:"\u68C0\u67E5 value \u662F\u5426\u5728 start \u4E0E end \u4E4B\u95F4\uFF0C\u4F46\u4E0D\u5305\u62EC end\u3002 \u5982\u679C end \u6CA1\u6709\u6307\u5B9A\uFF0C\u90A3\u4E48 start \u8BBE\u7F6E\u4E3A 0\u3002 \u5982\u679C start \u5927\u4E8E end\uFF0C\u90A3\u4E48\u53C2\u6570\u4F1A\u4EA4\u6362\u4EE5\u4FBF\u652F\u6301\u8D1F\u8303\u56F4\u3002\u6839\u636E precision\uFF08\u7CBE\u5EA6\uFF09 \u5411\u4E0A\u820D\u5165 number\u3002\u6839\u636E precision\uFF08\u7CBE\u5EA6\uFF09 \u5411\u4E0B\u820D\u5165 nu...",group:"Tools",order:0,path:"packages/util/math/index.zh-CN.md",url:"/util/math/zh"},text:`<h2 id="inrange"><a class="lake-link"><i data-anchor="inrange"></i></a>inRange</h2><p>\u68C0\u67E5 <code>value</code> \u662F\u5426\u5728 <code>start</code> \u4E0E <code>end</code> \u4E4B\u95F4\uFF0C\u4F46\u4E0D\u5305\u62EC <code>end</code>\u3002 \u5982\u679C <code>end</code> \u6CA1\u6709\u6307\u5B9A\uFF0C\u90A3\u4E48 <code>start</code> \u8BBE\u7F6E\u4E3A <code>0</code>\u3002 \u5982\u679C <code>start</code> \u5927\u4E8E <code>end</code>\uFF0C\u90A3\u4E48\u53C2\u6570\u4F1A\u4EA4\u6362\u4EE5\u4FBF\u652F\u6301\u8D1F\u8303\u56F4\u3002</p>
<pre><code class="language-ts">inRange(3, 2, 4); // true
inRange(4, 8); // true
inRange(4, 2); // false
inRange(2, 2); // false
inRange(1.2, 2); // true
inRange(-3, -2, -6); // true
</code></pre>
<h2 id="ceil"><a class="lake-link"><i data-anchor="ceil"></i></a>ceil</h2><p>\u6839\u636E <code>precision</code>\uFF08\u7CBE\u5EA6\uFF09 \u5411\u4E0A\u820D\u5165 <code>number</code>\u3002</p>
<pre><code class="language-ts">ceil(4.006); // 5
ceil(6.004, 2); // 6.01
ceil(6040, -2); // 6100
</code></pre>
<h2 id="floor"><a class="lake-link"><i data-anchor="floor"></i></a>floor</h2><p>\u6839\u636E <code>precision</code>\uFF08\u7CBE\u5EA6\uFF09 \u5411\u4E0B\u820D\u5165 <code>number</code>\u3002</p>
<pre><code class="language-ts">floor(4.006); // 4
floor(0.046, 2); // 0.04
floor(4060, -2); // 4000
</code></pre>
<h2 id="round"><a class="lake-link"><i data-anchor="round"></i></a>round</h2><p>\u6839\u636E <code>precision</code>\uFF08\u7CBE\u5EA6\uFF09 \u56DB\u820D\u4E94\u5165 <code>number</code>\u3002</p>
<pre><code class="language-ts">round(4.006); // 4
round(4.006, 2); // 4.01
round(4060, -2); // 4100
</code></pre>
`,api:"",toc:[{id:"inrange",title:"inRange"},{id:"ceil",title:"ceil"},{id:"floor",title:"floor"},{id:"round",title:"round"}],raw:"---\ntitle: math\nsubtitle: \u8303\u56F4\u3001\u56DB\u820D\u4E94\u5165\ntype: Tools\n---\n\n## inRange\n\n\u68C0\u67E5 `value` \u662F\u5426\u5728 `start` \u4E0E `end` \u4E4B\u95F4\uFF0C\u4F46\u4E0D\u5305\u62EC `end`\u3002 \u5982\u679C `end` \u6CA1\u6709\u6307\u5B9A\uFF0C\u90A3\u4E48 `start` \u8BBE\u7F6E\u4E3A `0`\u3002 \u5982\u679C `start` \u5927\u4E8E `end`\uFF0C\u90A3\u4E48\u53C2\u6570\u4F1A\u4EA4\u6362\u4EE5\u4FBF\u652F\u6301\u8D1F\u8303\u56F4\u3002\n\n```ts\ninRange(3, 2, 4); // true\ninRange(4, 8); // true\ninRange(4, 2); // false\ninRange(2, 2); // false\ninRange(1.2, 2); // true\ninRange(-3, -2, -6); // true\n```\n\n## ceil\n\n\u6839\u636E `precision`\uFF08\u7CBE\u5EA6\uFF09 \u5411\u4E0A\u820D\u5165 `number`\u3002\n\n```ts\nceil(4.006); // 5\nceil(6.004, 2); // 6.01\nceil(6040, -2); // 6100\n```\n\n## floor\n\n\u6839\u636E `precision`\uFF08\u7CBE\u5EA6\uFF09 \u5411\u4E0B\u820D\u5165 `number`\u3002\n\n```ts\nfloor(4.006); // 4\nfloor(0.046, 2); // 0.04\nfloor(4060, -2); // 4000\n```\n\n## round\n\n\u6839\u636E `precision`\uFF08\u7CBE\u5EA6\uFF09 \u56DB\u820D\u4E94\u5165 `number`\u3002\n\n```ts\nround(4.006); // 4\nround(4.006, 2); // 4.01\nround(4060, -2); // 4100\n```"}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["util-math"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&i(0,"app-docs",0),e&2&&a("codes",n.codes)("item",n.item)},dependencies:[r],encapsulation:2})};var b=class t{item={name:"other",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"other",subtitle:"Deep get,copy,merge,lazy,assert",description:"Omit specified keys from an object.Gets the value at path of object, like _.get in lodash.Base on extend deep copy.Deep merge object.LazyService delay...",group:"Tools",order:0,path:"packages/util/other/index.en-US.md",url:"/util/other/en"},text:`<h2 id="omit"><a class="lake-link"><i data-anchor="omit"></i></a>omit</h2><p>Omit specified keys from an object.</p>
<pre><code class="language-ts">omit(&#123; a: 1, b: 2, c: 3 &#125;, &#39;a&#39;) // &#123; b: 2, c: 3 &#125;
omit(&#123; a: 1, b: 2, c: 3 &#125;, [&#39;a&#39;, &#39;c&#39;]) // &#123; b: 2 &#125;
omit(&#123; a: 1, b: 2 &#125;, key =&gt; key === &#39;a&#39;) // &#123; a: 1 &#125;
</code></pre>
<h2 id="deepget"><a class="lake-link"><i data-anchor="deepget"></i></a>deepGet</h2><p>Gets the value at <code>path</code> of <code>object</code>, like <code>_.get</code> in lodash.</p>
<pre><code class="language-ts">const obj = &#123;
  id: 1,
  user: &#123;
    name: &#39;cipchk&#39;,
    age: 18
  &#125;
&#125;;

deepGet(obj, &#39;id&#39;); // 1
deepGet(obj, &#39;user.age&#39;); // 18
</code></pre>
<h2 id="deepcopy"><a class="lake-link"><i data-anchor="deepcopy"></i></a>deepCopy</h2><p>Base on <a href="https://github.com/justmoon/node-extend" target="_blank" rel="noopener">extend</a> deep copy.</p>
<pre><code class="language-ts">const source = &#123; a: 1, user: &#123; name: &#39;cipchk&#39; &#125; &#125;;
const obj = deepCopy(source);
</code></pre>
<h2 id="deepmerge"><a class="lake-link"><i data-anchor="deepmerge"></i></a>deepMerge</h2><p>Deep merge object.</p>
<pre><code class="language-ts">let original = &#123; a: 1, b: &#123; c: &#39;c&#39; &#125; &#125;;
deepMerge(original, &#123; b: &#123; d: &#39;d&#39; &#125;, arr: [ 1 ] &#125;);
// output: &#123; a: 1, b: &#123; c: &#39;c&#39;, d: &#39;d&#39; &#125;, arr: [ 1 ] &#125;
</code></pre>
<h2 id="lazyservice"><a class="lake-link"><i data-anchor="lazyservice"></i></a>LazyService<label class="api-type-label service">service</label></h2><p><code>LazyService</code> delay loading JS or CSS files.</p>
<pre><code class="language-ts">import &#123; LazyService &#125; from &#39;&#64;delon/util/other&#39;;

export class AppComponent &#123;
  constructor(private lazy: LazyService) &#123;&#125;

  ngOnInit() &#123;
    this.lazy.load([ \`https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js\` ]).then(() =&gt; &#123;
      // do something
    &#125;);
  &#125;
&#125;
</code></pre>
<h2 id="assert"><a class="lake-link"><i data-anchor="assert"></i></a>assert</h2><p>Assert whether the expression and throw an error into console in dev mode.</p>
<ul>
<li><code>assert</code> Assert whether the expression</li>
<li><code>assertEmpty</code> Assert whether empty (<code>null</code> or <code>undefined</code>)</li>
<li><code>assertNumber</code> Assert whether <code>number</code> type</li>
<li><code>assertString</code> Assert whether <code>string</code> type</li>
<li><code>assertArray</code> Assert whether <code>array</code> type</li>
<li><code>assertObservable</code> Assert whether <code>Observable</code> type</li>
</ul>
`,api:"",toc:[{id:"omit",title:"omit"},{id:"deepget",title:"deepGet"},{id:"deepcopy",title:"deepCopy"},{id:"deepmerge",title:"deepMerge"},{id:"lazyservice",title:"LazyService"},{id:"assert",title:"assert"}],raw:`---
title: other
subtitle: Deep get,copy,merge,lazy,assert
type: Tools
---

## omit

Omit specified keys from an object.

\`\`\`ts
omit({ a: 1, b: 2, c: 3 }, 'a') // { b: 2, c: 3 }
omit({ a: 1, b: 2, c: 3 }, ['a', 'c']) // { b: 2 }
omit({ a: 1, b: 2 }, key => key === 'a') // { a: 1 }
\`\`\`

## deepGet

Gets the value at \`path\` of \`object\`, like \`_.get\` in lodash.

\`\`\`ts
const obj = {
  id: 1,
  user: {
    name: 'cipchk',
    age: 18
  }
};

deepGet(obj, 'id'); // 1
deepGet(obj, 'user.age'); // 18
\`\`\`

## deepCopy

Base on [extend](https://github.com/justmoon/node-extend) deep copy.

\`\`\`ts
const source = { a: 1, user: { name: 'cipchk' } };
const obj = deepCopy(source);
\`\`\`

## deepMerge

Deep merge object.

\`\`\`ts
let original = { a: 1, b: { c: 'c' } };
deepMerge(original, { b: { d: 'd' }, arr: [ 1 ] });
// output: { a: 1, b: { c: 'c', d: 'd' }, arr: [ 1 ] }
\`\`\`

## LazyService

\`LazyService\` delay loading JS or CSS files.

\`\`\`ts
import { LazyService } from '@delon/util/other';

export class AppComponent {
  constructor(private lazy: LazyService) {}

  ngOnInit() {
    this.lazy.load([ \`https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js\` ]).then(() => {
      // do something
    });
  }
}
\`\`\`

## assert

Assert whether the expression and throw an error into console in dev mode.

- \`assert\` Assert whether the expression
- \`assertEmpty\` Assert whether empty (\`null\` or \`undefined\`)
- \`assertNumber\` Assert whether \`number\` type
- \`assertString\` Assert whether \`string\` type
- \`assertArray\` Assert whether \`array\` type
- \`assertObservable\` Assert whether \`Observable\` type`},"zh-CN":{meta:{title:"other",subtitle:"\u6DF1\u83B7\u53D6\u3001\u62F7\u8D1D\u3001\u5408\u5E76\u3001\u5EF6\u8FDF\u3001\u65AD\u8A00",description:"\u5FFD\u7565 obj \u6307\u5B9A\u5C5E\u6027\u3002\u7C7B\u4F3C _.get\uFF0C\u6839\u636E path \u83B7\u53D6\u5B89\u5168\u503C\u3002\u57FA\u4E8E extend \u7684\u6DF1\u5EA6\u62F7\u8D1D\u3002\u6DF1\u5EA6\u5408\u5E76\u3002LazyService \u7528\u4E8E\u5EF6\u8FDF\u52A0\u8F7D JS \u6216 CSS \u6587\u4EF6\uFF0C\u5BF9\u4E8E\u65E0\u987B\u88AB\u6253\u5305 script.js \u4E14\u53C8\u662F\u7B2C\u4E09\u65B9\u7C7B\u5E93\u6BD4\u8F83\u5927\u65F6\uFF0C\u975E\u5E38\u6709\u7528\uFF0C\u4E00\u4E2A\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u4F8B\u5982\uFF1A\u65AD\u8A00\u8868\u8FBE\u5F0F\u662F\u5426\u7B26\u5408\u9884\u671F\uFF0C\u5E76\u5728\u5F00\u53D1...",group:"Tools",order:0,path:"packages/util/other/index.zh-CN.md",url:"/util/other/zh"},text:`<h2 id="omit"><a class="lake-link"><i data-anchor="omit"></i></a>omit</h2><p>\u5FFD\u7565 <code>obj</code> \u6307\u5B9A\u5C5E\u6027\u3002</p>
<pre><code class="language-ts">omit(&#123; a: 1, b: 2, c: 3 &#125;, &#39;a&#39;) // &#123; b: 2, c: 3 &#125;
omit(&#123; a: 1, b: 2, c: 3 &#125;, [&#39;a&#39;, &#39;c&#39;]) // &#123; b: 2 &#125;
omit(&#123; a: 1, b: 2 &#125;, key =&gt; key === &#39;a&#39;) // &#123; a: 1 &#125;
</code></pre>
<h2 id="deepget"><a class="lake-link"><i data-anchor="deepget"></i></a>deepGet</h2><p>\u7C7B\u4F3C <code>_.get</code>\uFF0C\u6839\u636E <code>path</code> \u83B7\u53D6\u5B89\u5168\u503C\u3002</p>
<pre><code class="language-ts">const obj = &#123;
  id: 1,
  user: &#123;
    name: &#39;cipchk&#39;,
    age: 18
  &#125;
&#125;;

deepGet(obj, &#39;id&#39;); // 1
deepGet(obj, &#39;user.age&#39;); // 18
</code></pre>
<h2 id="deepcopy"><a class="lake-link"><i data-anchor="deepcopy"></i></a>deepCopy</h2><p>\u57FA\u4E8E <a href="https://github.com/justmoon/node-extend" target="_blank" rel="noopener">extend</a> \u7684\u6DF1\u5EA6\u62F7\u8D1D\u3002</p>
<pre><code class="language-ts">const source = &#123; a: 1, user: &#123; name: &#39;cipchk&#39; &#125; &#125;;
const obj = deepCopy(source);
</code></pre>
<h2 id="deepmerge"><a class="lake-link"><i data-anchor="deepmerge"></i></a>deepMerge</h2><p>\u6DF1\u5EA6\u5408\u5E76\u3002</p>
<pre><code class="language-ts">let original = &#123; a: 1, b: &#123; c: &#39;c&#39; &#125; &#125;;
deepMerge(original, &#123; b: &#123; d: &#39;d&#39; &#125;, arr: [ 1 ] &#125;);
// output: &#123; a: 1, b: &#123; c: &#39;c&#39;, d: &#39;d&#39; &#125;, arr: [ 1 ] &#125;
</code></pre>
<h2 id="lazyservice"><a class="lake-link"><i data-anchor="lazyservice"></i></a>LazyService<label class="api-type-label service">service</label></h2><p><code>LazyService</code> \u7528\u4E8E\u5EF6\u8FDF\u52A0\u8F7D JS \u6216 CSS \u6587\u4EF6\uFF0C\u5BF9\u4E8E\u65E0\u987B\u88AB\u6253\u5305 script.js \u4E14\u53C8\u662F\u7B2C\u4E09\u65B9\u7C7B\u5E93\u6BD4\u8F83\u5927\u65F6\uFF0C\u975E\u5E38\u6709\u7528\uFF0C\u4E00\u4E2A\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-ts">import &#123; LazyService &#125; from &#39;&#64;delon/util/other&#39;;

export class AppComponent &#123;
  constructor(private lazy: LazyService) &#123;&#125;

  ngOnInit() &#123;
    this.lazy.load([ \`https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js\` ]).then(() =&gt; &#123;
      // do something
    &#125;);
  &#125;
&#125;
</code></pre>
<h2 id="assert"><a class="lake-link"><i data-anchor="assert"></i></a>assert</h2><p>\u65AD\u8A00\u8868\u8FBE\u5F0F\u662F\u5426\u7B26\u5408\u9884\u671F\uFF0C\u5E76\u5728\u5F00\u53D1\u6A21\u5F0F\u4E0B\u4F1A\u5728\u63A7\u5236\u53F0\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\u3002</p>
<ul>
<li><code>assert</code> \u65AD\u8A00\u8868\u8FBE\u5F0F\u662F\u5426\u7B26\u5408\u9884\u671F</li>
<li><code>assertEmpty</code> \u65AD\u8A00\u662F\u5426\u7A7A\u503C\uFF08<code>null</code> \u6216 <code>undefined</code>\uFF09</li>
<li><code>assertNumber</code> \u65AD\u8A00\u662F\u5426 <code>number</code> \u7C7B\u578B</li>
<li><code>assertString</code> \u65AD\u8A00\u662F\u5426 <code>string</code> \u7C7B\u578B</li>
<li><code>assertArray</code> \u65AD\u8A00\u662F\u5426 <code>array</code> \u7C7B\u578B</li>
<li><code>assertObservable</code> \u65AD\u8A00\u662F\u5426 <code>Observable</code> \u7C7B\u578B</li>
</ul>
`,api:"",toc:[{id:"omit",title:"omit"},{id:"deepget",title:"deepGet"},{id:"deepcopy",title:"deepCopy"},{id:"deepmerge",title:"deepMerge"},{id:"lazyservice",title:"LazyService"},{id:"assert",title:"assert"}],raw:`---
title: other
subtitle: \u6DF1\u83B7\u53D6\u3001\u62F7\u8D1D\u3001\u5408\u5E76\u3001\u5EF6\u8FDF\u3001\u65AD\u8A00
type: Tools
---

## omit

\u5FFD\u7565 \`obj\` \u6307\u5B9A\u5C5E\u6027\u3002

\`\`\`ts
omit({ a: 1, b: 2, c: 3 }, 'a') // { b: 2, c: 3 }
omit({ a: 1, b: 2, c: 3 }, ['a', 'c']) // { b: 2 }
omit({ a: 1, b: 2 }, key => key === 'a') // { a: 1 }
\`\`\`

## deepGet

\u7C7B\u4F3C \`_.get\`\uFF0C\u6839\u636E \`path\` \u83B7\u53D6\u5B89\u5168\u503C\u3002

\`\`\`ts
const obj = {
  id: 1,
  user: {
    name: 'cipchk',
    age: 18
  }
};

deepGet(obj, 'id'); // 1
deepGet(obj, 'user.age'); // 18
\`\`\`

## deepCopy

\u57FA\u4E8E [extend](https://github.com/justmoon/node-extend) \u7684\u6DF1\u5EA6\u62F7\u8D1D\u3002

\`\`\`ts
const source = { a: 1, user: { name: 'cipchk' } };
const obj = deepCopy(source);
\`\`\`

## deepMerge

\u6DF1\u5EA6\u5408\u5E76\u3002

\`\`\`ts
let original = { a: 1, b: { c: 'c' } };
deepMerge(original, { b: { d: 'd' }, arr: [ 1 ] });
// output: { a: 1, b: { c: 'c', d: 'd' }, arr: [ 1 ] }
\`\`\`

## LazyService

\`LazyService\` \u7528\u4E8E\u5EF6\u8FDF\u52A0\u8F7D JS \u6216 CSS \u6587\u4EF6\uFF0C\u5BF9\u4E8E\u65E0\u987B\u88AB\u6253\u5305 script.js \u4E14\u53C8\u662F\u7B2C\u4E09\u65B9\u7C7B\u5E93\u6BD4\u8F83\u5927\u65F6\uFF0C\u975E\u5E38\u6709\u7528\uFF0C\u4E00\u4E2A\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u4F8B\u5982\uFF1A

\`\`\`ts
import { LazyService } from '@delon/util/other';

export class AppComponent {
  constructor(private lazy: LazyService) {}

  ngOnInit() {
    this.lazy.load([ \`https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js\` ]).then(() => {
      // do something
    });
  }
}
\`\`\`

## assert

\u65AD\u8A00\u8868\u8FBE\u5F0F\u662F\u5426\u7B26\u5408\u9884\u671F\uFF0C\u5E76\u5728\u5F00\u53D1\u6A21\u5F0F\u4E0B\u4F1A\u5728\u63A7\u5236\u53F0\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\u3002

- \`assert\` \u65AD\u8A00\u8868\u8FBE\u5F0F\u662F\u5426\u7B26\u5408\u9884\u671F
- \`assertEmpty\` \u65AD\u8A00\u662F\u5426\u7A7A\u503C\uFF08\`null\` \u6216 \`undefined\`\uFF09
- \`assertNumber\` \u65AD\u8A00\u662F\u5426 \`number\` \u7C7B\u578B
- \`assertString\` \u65AD\u8A00\u662F\u5426 \`string\` \u7C7B\u578B
- \`assertArray\` \u65AD\u8A00\u662F\u5426 \`array\` \u7C7B\u578B
- \`assertObservable\` \u65AD\u8A00\u662F\u5426 \`Observable\` \u7C7B\u578B`}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["util-other"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&i(0,"app-docs",0),e&2&&a("codes",n.codes)("item",n.item)},dependencies:[r],encapsulation:2})};var k=class t{item={name:"token",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"token",subtitle:"Token",description:"Access to global window object.Use the visibilitychange event to monitor whether the browser tab is visible, which is generally used when the user lea...",group:"Tools",order:0,path:"packages/util/token/index.en-US.md",url:"/util/token/en"},text:`<h2 id="window"><a class="lake-link"><i data-anchor="window"></i></a>WINDOW</h2><p>Access to global <code>window</code> object.</p>
<h2 id="page_visibility"><a class="lake-link"><i data-anchor="page_visibility"></i></a>PAGE_VISIBILITY</h2><p>Use the <code>visibilitychange</code> event to monitor whether the browser tab is visible, which is generally used when the user leaves the browser tab to temp interrupt the backend to continue sending requests.</p>
`,api:"",toc:[{id:"window",title:"WINDOW"},{id:"page_visibility",title:"PAGE_VISIBILITY"}],raw:`---
title: token
subtitle: Token
type: Tools
---

## WINDOW

Access to global \`window\` object.

## PAGE_VISIBILITY

Use the \`visibilitychange\` event to monitor whether the browser tab is visible, which is generally used when the user leaves the browser tab to temp interrupt the backend to continue sending requests.`},"zh-CN":{meta:{title:"token",subtitle:"Token",description:"\u8BBF\u95EE\u5168\u5C40 window \u5BF9\u8C61\u3002\u901A\u8FC7 visibilitychange \u4E8B\u4EF6\u6765\u76D1\u542C\u6D4F\u89C8\u5668\u9009\u9879\u5361\u662F\u5426\u53EF\u89C1\uFF0C\u4E00\u822C\u7528\u4E8E\u5F53\u7528\u6237\u79BB\u5F00\u5E94\u7528\u65F6\u6682\u65F6\u4E2D\u65AD\u540E\u7AEF\u6301\u7EED\u53D1\u9001\u8BF7\u6C42\u65F6\u3002",group:"Tools",order:0,path:"packages/util/token/index.zh-CN.md",url:"/util/token/zh"},text:`<h2 id="window"><a class="lake-link"><i data-anchor="window"></i></a>WINDOW</h2><p>\u8BBF\u95EE\u5168\u5C40 <code>window</code> \u5BF9\u8C61\u3002</p>
<h2 id="page_visibility"><a class="lake-link"><i data-anchor="page_visibility"></i></a>PAGE_VISIBILITY</h2><p>\u901A\u8FC7 <code>visibilitychange</code> \u4E8B\u4EF6\u6765\u76D1\u542C\u6D4F\u89C8\u5668\u9009\u9879\u5361\u662F\u5426\u53EF\u89C1\uFF0C\u4E00\u822C\u7528\u4E8E\u5F53\u7528\u6237\u79BB\u5F00\u5E94\u7528\u65F6\u6682\u65F6\u4E2D\u65AD\u540E\u7AEF\u6301\u7EED\u53D1\u9001\u8BF7\u6C42\u65F6\u3002</p>
`,api:"",toc:[{id:"window",title:"WINDOW"},{id:"page_visibility",title:"PAGE_VISIBILITY"}],raw:`---
title: token
subtitle: Token
type: Tools
---

## WINDOW

\u8BBF\u95EE\u5168\u5C40 \`window\` \u5BF9\u8C61\u3002

## PAGE_VISIBILITY

\u901A\u8FC7 \`visibilitychange\` \u4E8B\u4EF6\u6765\u76D1\u542C\u6D4F\u89C8\u5668\u9009\u9879\u5361\u662F\u5426\u53EF\u89C1\uFF0C\u4E00\u822C\u7528\u4E8E\u5F53\u7528\u6237\u79BB\u5F00\u5E94\u7528\u65F6\u6682\u65F6\u4E2D\u65AD\u540E\u7AEF\u6301\u7EED\u53D1\u9001\u8BF7\u6C42\u65F6\u3002`}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["util-token"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&i(0,"app-docs",0),e&2&&a("codes",n.codes)("item",n.item)},dependencies:[r],encapsulation:2})};var v=class t{item={name:"pipes-currency",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"currency",subtitle:"Currency Pipes",module:"import { CurrencyPipeModule } from '@delon/util/pipes/currency';",description:"You can override to set the startingUnit, megaUnit, precision, ingoreZeroPrecision through Global Configuration.Format a number with commas as thousan...",group:"Pipes",order:0,path:"packages/util/pipes/currency/index.en-US.md",url:"/util/pipes-currency/en"},text:`<blockquote>
<p>You can override to set the <code>startingUnit</code>, <code>megaUnit</code>, <code>precision</code>, <code>ingoreZeroPrecision</code> through <a href="/docs/global-config">Global Configuration</a>.</p>
</blockquote>
<h2 id="price"><a class="lake-link"><i data-anchor="price"></i></a>price</h2><p>Format a number with commas as thousands separators.</p>
<example-currency-price-index /><h2 id="mega"><a class="lake-link"><i data-anchor="mega"></i></a>mega</h2><p>Large number format filter.</p>
<example-currency-mega-index /><h2 id="cny"><a class="lake-link"><i data-anchor="cny"></i></a>cny</h2><p>Converted into RMB notation.</p>
<example-currency-cny-index />`,api:"",toc:[{id:"price",title:"price"},{id:"mega",title:"mega"},{id:"cny",title:"cny"}],raw:`---
title: currency
subtitle: Currency Pipes
type: Pipes
module: import { CurrencyPipeModule } from '@delon/util/pipes/currency';
---

> You can override to set the \`startingUnit\`, \`megaUnit\`, \`precision\`, \`ingoreZeroPrecision\` through [Global Configuration](/docs/global-config).

## price

Format a number with commas as thousands separators.

[comment]: <demo(currency-price)>

## mega

Large number format filter.

[comment]: <demo(currency-mega)>

## cny

Converted into RMB notation.

[comment]: <demo(currency-cny)>`},"zh-CN":{meta:{title:"currency",subtitle:"\u8D27\u5E01\u7BA1\u9053",module:"import { CurrencyPipeModule } from '@delon/util/pipes/currency';",description:"\u53EF\u4EE5\u901A\u8FC7\u5168\u5C40\u914D\u7F6E\u8986\u76D6 startingUnit\u3001megaUnit\u3001precision\u3001ingoreZeroPrecision \u7B49\u53C2\u6570\u3002\u7528\u9017\u53F7\u5C06\u6570\u5B57\u683C\u5F0F\u5316\u4E3A\u5343\u4F4D\u5206\u9694\u7B26\u3002\u5927\u6570\u636E\u683C\u5F0F\u5316\u3002\u8F6C\u5316\u6210\u4EBA\u6C11\u5E01\u8868\u793A\u6CD5\u3002",group:"Pipes",order:0,path:"packages/util/pipes/currency/index.zh-CN.md",url:"/util/pipes-currency/zh"},text:`<blockquote>
<p>\u53EF\u4EE5\u901A\u8FC7<a href="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u8986\u76D6 <code>startingUnit</code>\u3001<code>megaUnit</code>\u3001<code>precision</code>\u3001<code>ingoreZeroPrecision</code> \u7B49\u53C2\u6570\u3002</p>
</blockquote>
<h2 id="price"><a class="lake-link"><i data-anchor="price"></i></a>price</h2><p>\u7528\u9017\u53F7\u5C06\u6570\u5B57\u683C\u5F0F\u5316\u4E3A\u5343\u4F4D\u5206\u9694\u7B26\u3002</p>
<example-currency-price-index /><h2 id="mega"><a class="lake-link"><i data-anchor="mega"></i></a>mega</h2><p>\u5927\u6570\u636E\u683C\u5F0F\u5316\u3002</p>
<example-currency-mega-index /><h2 id="cny"><a class="lake-link"><i data-anchor="cny"></i></a>cny</h2><p>\u8F6C\u5316\u6210\u4EBA\u6C11\u5E01\u8868\u793A\u6CD5\u3002</p>
<example-currency-cny-index />`,api:"",toc:[{id:"price",title:"price"},{id:"mega",title:"mega"},{id:"cny",title:"cny"}],raw:`---
title: currency
subtitle: \u8D27\u5E01\u7BA1\u9053
type: Pipes
module: import { CurrencyPipeModule } from '@delon/util/pipes/currency';
---

> \u53EF\u4EE5\u901A\u8FC7[\u5168\u5C40\u914D\u7F6E](/docs/global-config)\u8986\u76D6 \`startingUnit\`\u3001\`megaUnit\`\u3001\`precision\`\u3001\`ingoreZeroPrecision\` \u7B49\u53C2\u6570\u3002

## price

\u7528\u9017\u53F7\u5C06\u6570\u5B57\u683C\u5F0F\u5316\u4E3A\u5343\u4F4D\u5206\u9694\u7B26\u3002

[comment]: <demo(currency-price)>

## mega

\u5927\u6570\u636E\u683C\u5F0F\u5316\u3002

[comment]: <demo(currency-mega)>

## cny

\u8F6C\u5316\u6210\u4EBA\u6C11\u5E01\u8868\u793A\u6CD5\u3002

[comment]: <demo(currency-cny)>`}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["util-pipes-currency"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&i(0,"app-docs",0),e&2&&a("codes",n.codes)("item",n.item)},dependencies:[r],encapsulation:2})};var C=class t{item={name:"pipes-filter",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"filter",subtitle:"Filter",module:"import { FilterPipeModule } from '@delon/util/pipes/filter';",description:"Filter array.",group:"Pipes",order:0,path:"packages/util/pipes/filter/index.en-US.md",url:"/util/pipes-filter/en"},text:`<h2 id="filter"><a class="lake-link"><i data-anchor="filter"></i></a>filter</h2><p>Filter array.</p>
<example-filter-index />`,api:"",toc:[{id:"filter",title:"filter"}],raw:`---
title: filter
subtitle: Filter
type: Pipes
module: import { FilterPipeModule } from '@delon/util/pipes/filter';
---

## filter

Filter array.

[comment]: <demo(filter)>`},"zh-CN":{meta:{title:"filter",subtitle:"\u8FC7\u6EE4\u6570\u7EC4",module:"import { FilterPipeModule } from '@delon/util/pipes/filter';",description:"\u8FC7\u6EE4\u6570\u7EC4\u3002",group:"Pipes",order:0,path:"packages/util/pipes/filter/index.zh-CN.md",url:"/util/pipes-filter/zh"},text:`<h2 id="filter"><a class="lake-link"><i data-anchor="filter"></i></a>filter</h2><p>\u8FC7\u6EE4\u6570\u7EC4\u3002</p>
<example-filter-index />`,api:"",toc:[{id:"filter",title:"filter"}],raw:`---
title: filter
subtitle: \u8FC7\u6EE4\u6570\u7EC4
type: Pipes
module: import { FilterPipeModule } from '@delon/util/pipes/filter';
---

## filter

\u8FC7\u6EE4\u6570\u7EC4\u3002

[comment]: <demo(filter)>`}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["util-pipes-filter"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&i(0,"app-docs",0),e&2&&a("codes",n.codes)("item",n.item)},dependencies:[r],encapsulation:2})};var D=class t{item={name:"pipes-format",langs:["en-US","zh-CN"],content:{"en-US":{meta:{title:"format",subtitle:"Mask",module:"import { FormatPipeModule } from '@delon/util/pipes/format';",description:"Format mask.",group:"Pipes",order:0,path:"packages/util/pipes/format/index.en-US.md",url:"/util/pipes-format/en"},text:`<h2 id="mask"><a class="lake-link"><i data-anchor="mask"></i></a>mask</h2><p>Format mask.</p>
<example-format-mask-index />`,api:"",toc:[{id:"mask",title:"mask"}],raw:`---
title: format
subtitle: Mask
type: Pipes
module: import { FormatPipeModule } from '@delon/util/pipes/format';
---

## mask

Format mask.

[comment]: <demo(format-mask)>`},"zh-CN":{meta:{title:"format",subtitle:"\u63A9\u7801",module:"import { FormatPipeModule } from '@delon/util/pipes/format';",description:"\u683C\u5F0F\u5316\u63A9\u7801\u3002",group:"Pipes",order:0,path:"packages/util/pipes/format/index.zh-CN.md",url:"/util/pipes-format/zh"},text:`<h2 id="mask"><a class="lake-link"><i data-anchor="mask"></i></a>mask</h2><p>\u683C\u5F0F\u5316\u63A9\u7801\u3002</p>
<example-format-mask-index />`,api:"",toc:[{id:"mask",title:"mask"}],raw:`---
title: format
subtitle: \u63A9\u7801
type: Pipes
module: import { FormatPipeModule } from '@delon/util/pipes/format';
---

## mask

\u683C\u5F0F\u5316\u63A9\u7801\u3002

[comment]: <demo(format-mask)>`}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["util-pipes-format"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&i(0,"app-docs",0),e&2&&a("codes",n.codes)("item",n.item)},dependencies:[r],encapsulation:2})};var le=[{path:"",component:M,children:[{path:"getting-started",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started/:lang",component:l},{path:"array",redirectTo:"array/zh",pathMatch:"full"},{path:"array/:lang",component:p},{path:"browser",redirectTo:"browser/zh",pathMatch:"full"},{path:"browser/:lang",component:m},{path:"date-time",redirectTo:"date-time/zh",pathMatch:"full"},{path:"date-time/:lang",component:u},{path:"decorator",redirectTo:"decorator/zh",pathMatch:"full"},{path:"decorator/:lang",component:h},{path:"form",redirectTo:"form/zh",pathMatch:"full"},{path:"form/:lang",component:g},{path:"format",redirectTo:"format/zh",pathMatch:"full"},{path:"format/:lang",component:f},{path:"math",redirectTo:"math/zh",pathMatch:"full"},{path:"math/:lang",component:y},{path:"other",redirectTo:"other/zh",pathMatch:"full"},{path:"other/:lang",component:b},{path:"token",redirectTo:"token/zh",pathMatch:"full"},{path:"token/:lang",component:k},{path:"pipes-currency",redirectTo:"pipes-currency/zh",pathMatch:"full"},{path:"pipes-currency/:lang",component:v},{path:"pipes-filter",redirectTo:"pipes-filter/zh",pathMatch:"full"},{path:"pipes-filter/:lang",component:C},{path:"pipes-format",redirectTo:"pipes-format/zh",pathMatch:"full"},{path:"pipes-format/:lang",component:D}]}];export{le as routes};
