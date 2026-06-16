import{a as i}from"./chunk-PJYRP6KM.js";import{a as u}from"./chunk-C3MNSEWK.js";import"./chunk-XU2NL7K2.js";import"./chunk-J335YUGO.js";import"./chunk-62ZNMC2L.js";import"./chunk-KQR6CVZA.js";import"./chunk-7O6624BH.js";import{Wa as a,sb as o,vb as l}from"./chunk-DBBCITIJ.js";var c=class t{item={name:"control",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:3,title:"Granular permissions",description:"Many times you need to control the permissions of a button. @delon/acl provides an acl directive that allows you to control the permissions of a butto...",group:"Documents",path:"packages/acl/docs/control.en-US.md",url:"/acl/control/en"},text:`<h2 id="foreword"><a class="lake-link"><i data-anchor="foreword"></i></a>Foreword</h2><p>Many times you need to control the permissions of a button. <code>&#64;delon/acl</code> provides an <code>acl</code> directive that allows you to control the permissions of a button, table, list, etc.</p>
<h2 id="principle"><a class="lake-link"><i data-anchor="principle"></i></a>Principle</h2><p><code>[acl]</code> adds a <code>acl__hide</code> style to the target element by default, and hides the unauthorized element with <code>display: none</code>, which is a simple and efficient way.</p>
<p>The corresponding <code>*aclIf</code> is a structured directive similar to <code>ngIf</code> which does not render the element when it is not authorized. <strong>Note:</strong> In order to keep it simple, it does not support <code>acl-ability</code> permission point configuration.</p>
<h2 id="demo"><a class="lake-link"><i data-anchor="demo"></i></a>DEMO</h2><h3 id="role"><a class="lake-link"><i data-anchor="role"></i></a>Role</h3><p>Displayed when the button must have a user role.</p>
<pre><code class="language-html">&lt;button [acl]=&quot;&#39;user&#39;&quot;&gt;&lt;/button&gt;
&lt;button *aclIf=&quot;&#39;user&#39;&quot;&gt;&lt;/button&gt;
</code></pre>
<p>Displayed when the button must have a user or manage role.</p>
<pre><code class="language-html">&lt;button [acl]=&quot;[&#39;user&#39;, &#39;manage&#39;]&quot;&gt;&lt;/button&gt;
&lt;button *aclIf=&quot;[&#39;user&#39;, &#39;manage&#39;]&quot;&gt;&lt;/button&gt;
</code></pre>
<p>Displayed when the button must have a user and manage role.</p>
<pre><code class="language-html">&lt;button [acl]=&quot;&#123; role: [&#39;user&#39;, &#39;manage&#39;], mode: &#39;allOf&#39; &#125;&quot;&gt;&lt;/button&gt;
&lt;button *aclIf=&quot;&#123; role: [&#39;user&#39;, &#39;manage&#39;], mode: &#39;allOf&#39; &#125;&quot;&gt;&lt;/button&gt;
</code></pre>
<p>Displayed when the input muse have a user role, displayed text when it&#39;s not authorized.</p>
<pre><code class="language-html">&lt;input nz-input *aclIf=&quot;&#39;user&#39;; else unauthorized&quot;&gt;
&lt;ng-template #unauthorized&gt;&#123;&#123;user&#125;&#125;&lt;/ng-template&gt;
</code></pre>
<p>Use <code>except</code> reverse control to displayed when it&#39;s not authorized.</p>
<pre><code class="language-html">&lt;ng-template [aclIf]=&quot;role&quot; except&gt;
  &lt;input nz-input&gt;
&lt;/ng-template&gt;
</code></pre>
<h3 id="permission"><a class="lake-link"><i data-anchor="permission"></i></a>Permission</h3><p>Displayed when the button must have a 10 value permisseion.</p>
<pre><code class="language-html">&lt;button [acl]=&quot;10&quot;&gt;&lt;/button&gt;
</code></pre>
<p>In order for the acl instruction to be a role or a permission, so the value of the parameter value is <code>string</code> which mean the role, <code>number</code> which mean the permission. Use the <code>acl-ability</code> parameter if the permission is a string.</p>
<pre><code class="language-html">&lt;button acl [acl-ability]=&quot;&#39;USER-EDIT&#39;&quot;&gt;&lt;/button&gt;
</code></pre>
<ul>
<li><code>oneOf</code> Must be valid against exactly one of the given permission (default).</li>
<li><code>allOf</code> Must be valid against all of the given permission</li>
</ul>
<p>Displayed when the button must have a <code>10</code> and <code>USER-EDIT</code> permission.</p>
<pre><code class="language-html">&lt;button [acl]=&quot;&#123; ability: [10, &#39;USER-EDIT&#39;], mode: &#39;allOf&#39; &#125;&quot;&gt;&lt;/button&gt;
</code></pre>
<p><strong>String permission</strong></p>
<p>The check permission is via the <code>can</code> method, and through <a href="/docs/global-config">Global Configuration</a> <code>acl.preCan</code> method, which can be used to implement a string to distinguish roles or permissions.</p>
<pre><code class="language-ts">// global-config.module.ts
const alainConfig: AlainConfig = &#123;
  acl: &#123;
    preCan: (roleOrAbility) =&gt; &#123;
      const str = roleOrAbility.toString();
      return str.startsWith(&#39;ability.&#39;) ? &#123; ability: [ str ] &#125; : null;
    &#125;
  &#125;
&#125;;
</code></pre>
<p>Therefore, passing a string with the beginning of <code>ability.</code> will be considered a permission point, for example:</p>
<pre><code class="language-html">&lt;button acl=&quot;ability.user.edit&quot;&gt;&lt;/button&gt;
</code></pre>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="aclif"><a class="lake-link"><i data-anchor="aclif"></i></a>*aclIf</h3><p>Property  | Description    | Type     | Default
----------|----------------|----------|-------
<code>[aclIf]</code>  | <code>can</code> method parameter   | <code>ACLCanType</code> | -
<code>[aclIfThen]</code> | Display template when authorized | <code>TemplateRef&lt;void&gt; | null</code> | -
<code>[aclIfElse]</code> | Display template when not authorized | <code>TemplateRef&lt;void&gt; | null</code> | -
<code>[except]</code> | Permissions denied to display | <code>boolean</code> | <code>false</code></p>
`,toc:[{id:"foreword",title:"Foreword"},{id:"principle",title:"Principle"},{id:"demo",title:"DEMO",children:[{id:"role",title:"Role"},{id:"permission",title:"Permission"}]},{id:"api",title:"API",children:[{id:"aclif",title:"*aclIf"}]}],raw:`---
order: 3
title: Granular permissions
type: Documents
---

## Foreword

Many times you need to control the permissions of a button. \`@delon/acl\` provides an \`acl\` directive that allows you to control the permissions of a button, table, list, etc.

## Principle

\`[acl]\` adds a \`acl__hide\` style to the target element by default, and hides the unauthorized element with \`display: none\`, which is a simple and efficient way.

The corresponding \`*aclIf\` is a structured directive similar to \`ngIf\` which does not render the element when it is not authorized. **Note:** In order to keep it simple, it does not support \`acl-ability\` permission point configuration.

## DEMO

### Role

Displayed when the button must have a user role.

\`\`\`html
<button [acl]="'user'"></button>
<button *aclIf="'user'"></button>
\`\`\`

Displayed when the button must have a user or manage role.

\`\`\`html
<button [acl]="['user', 'manage']"></button>
<button *aclIf="['user', 'manage']"></button>
\`\`\`

Displayed when the button must have a user and manage role.

\`\`\`html
<button [acl]="{ role: ['user', 'manage'], mode: 'allOf' }"></button>
<button *aclIf="{ role: ['user', 'manage'], mode: 'allOf' }"></button>
\`\`\`

Displayed when the input muse have a user role, displayed text when it's not authorized.

\`\`\`html
<input nz-input *aclIf="'user'; else unauthorized">
<ng-template #unauthorized>{{user}}</ng-template>
\`\`\`

Use \`except\` reverse control to displayed when it's not authorized.

\`\`\`html
<ng-template [aclIf]="role" except>
  <input nz-input>
</ng-template>
\`\`\`

### Permission

Displayed when the button must have a 10 value permisseion.

\`\`\`html
<button [acl]="10"></button>
\`\`\`

In order for the acl instruction to be a role or a permission, so the value of the parameter value is \`string\` which mean the role, \`number\` which mean the permission. Use the \`acl-ability\` parameter if the permission is a string.

\`\`\`html
<button acl [acl-ability]="'USER-EDIT'"></button>
\`\`\`

- \`oneOf\` Must be valid against exactly one of the given permission (default).
- \`allOf\` Must be valid against all of the given permission

Displayed when the button must have a \`10\` and \`USER-EDIT\` permission.

\`\`\`html
<button [acl]="{ ability: [10, 'USER-EDIT'], mode: 'allOf' }"></button>
\`\`\`

**String permission**

The check permission is via the \`can\` method, and through [Global Configuration](/docs/global-config) \`acl.preCan\` method, which can be used to implement a string to distinguish roles or permissions.

\`\`\`ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  acl: {
    preCan: (roleOrAbility) => {
      const str = roleOrAbility.toString();
      return str.startsWith('ability.') ? { ability: [ str ] } : null;
    }
  }
};
\`\`\`

Therefore, passing a string with the beginning of \`ability.\` will be considered a permission point, for example:

\`\`\`html
<button acl="ability.user.edit"></button>
\`\`\`

## API

### *aclIf

Property  | Description    | Type     | Default
----------|----------------|----------|-------
\`[aclIf]\`  | \`can\` method parameter   | \`ACLCanType\` | -
\`[aclIfThen]\` | Display template when authorized | \`TemplateRef<void> | null\` | -
\`[aclIfElse]\` | Display template when not authorized | \`TemplateRef<void> | null\` | -
\`[except]\` | Permissions denied to display | \`boolean\` | \`false\``},"zh-CN":{meta:{order:3,title:"\u7C92\u5EA6\u63A7\u5236",description:"\u5F88\u591A\u65F6\u5019\u9700\u8981\u5BF9\u67D0\u4E2A\u6309\u94AE\u8FDB\u884C\u6743\u9650\u63A7\u5236\uFF0C@delon/acl \u63D0\u4F9B\u4E00\u4E2A acl \u6307\u4EE4\uFF0C\u53EF\u4EE5\u5229\u7528\u89D2\u8272\u6216\u6743\u9650\u70B9\u5BF9\u67D0\u4E2A\u6309\u94AE\u3001\u8868\u683C\u3001\u5217\u8868\u7B49\u5143\u7D20\u8FDB\u884C\u6743\u9650\u63A7\u5236\u3002[acl] \u9ED8\u8BA4\u4F1A\u5728\u76EE\u6807\u5143\u7D20\u4E0A\u589E\u52A0\u4E00\u4E2A acl__hide \u6837\u5F0F\uFF0C\u5229\u7528 display: none \u6765\u9690\u85CF\u672A\u6388\u6743\u5143\u7D20\uFF0C\u5B83\u662F\u4E00\u4E2A\u7B80\u5355\u3001\u53C8\u9AD8\u6548\u7684\u65B9\u5F0F\u3002\u4EE5\u6B64\u76F8\u5BF9\u5E94...",group:"Documents",path:"packages/acl/docs/control.zh-CN.md",url:"/acl/control/zh"},text:`<h2 id="\u5199\u5728\u524D\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524D\u9762"></i></a>\u5199\u5728\u524D\u9762</h2><p>\u5F88\u591A\u65F6\u5019\u9700\u8981\u5BF9\u67D0\u4E2A\u6309\u94AE\u8FDB\u884C\u6743\u9650\u63A7\u5236\uFF0C<code>&#64;delon/acl</code> \u63D0\u4F9B\u4E00\u4E2A <code>acl</code> \u6307\u4EE4\uFF0C\u53EF\u4EE5\u5229\u7528\u89D2\u8272\u6216\u6743\u9650\u70B9\u5BF9\u67D0\u4E2A\u6309\u94AE\u3001\u8868\u683C\u3001\u5217\u8868\u7B49\u5143\u7D20\u8FDB\u884C\u6743\u9650\u63A7\u5236\u3002</p>
<h2 id="\u539F\u7406"><a class="lake-link"><i data-anchor="\u539F\u7406"></i></a>\u539F\u7406</h2><p><code>[acl]</code> \u9ED8\u8BA4\u4F1A\u5728\u76EE\u6807\u5143\u7D20\u4E0A\u589E\u52A0\u4E00\u4E2A <code>acl__hide</code> \u6837\u5F0F\uFF0C\u5229\u7528 <code>display: none</code> \u6765\u9690\u85CF\u672A\u6388\u6743\u5143\u7D20\uFF0C\u5B83\u662F\u4E00\u4E2A\u7B80\u5355\u3001\u53C8\u9AD8\u6548\u7684\u65B9\u5F0F\u3002</p>
<p>\u4EE5\u6B64\u76F8\u5BF9\u5E94\u7684 <code>*aclIf</code> \u662F\u4E00\u4E2A\u7ED3\u6784\u578B\u6307\u4EE4\uFF0C\u5B83\u7C7B\u4F3C <code>ngIf</code> \u5728\u672A\u6388\u6743\u65F6\u4F1A\u4E0D\u6E32\u67D3\u8BE5\u5143\u7D20\u3002<strong>\u6CE8\uFF1A</strong> \u4E3A\u4E86\u4FDD\u6301\u7B80\u6D01\u5B83\u5E76\u4E0D\u652F\u6301 <code>acl-ability</code> \u6743\u9650\u70B9\u914D\u7F6E\u3002</p>
<h2 id="\u793A\u4F8B"><a class="lake-link"><i data-anchor="\u793A\u4F8B"></i></a>\u793A\u4F8B</h2><h3 id="\u89D2\u8272"><a class="lake-link"><i data-anchor="\u89D2\u8272"></i></a>\u89D2\u8272</h3><p>\u6309\u94AE\u5FC5\u987B\u62E5\u6709 user \u89D2\u8272\u663E\u793A\u3002</p>
<pre><code class="language-html">&lt;button [acl]=&quot;&#39;user&#39;&quot;&gt;&lt;/button&gt;
&lt;button *aclIf=&quot;&#39;user&#39;&quot;&gt;&lt;/button&gt;
</code></pre>
<p>\u6309\u94AE\u5FC5\u987B\u62E5\u6709 user \u6216 manage \u89D2\u8272\u663E\u793A\u3002</p>
<pre><code class="language-html">&lt;button [acl]=&quot;[&#39;user&#39;, &#39;manage&#39;]&quot;&gt;&lt;/button&gt;
&lt;button *aclIf=&quot;[&#39;user&#39;, &#39;manage&#39;]&quot;&gt;&lt;/button&gt;
</code></pre>
<p>\u6309\u94AE\u5FC5\u987B\u62E5\u6709 user \u548C manage \u89D2\u8272\u663E\u793A\u3002</p>
<pre><code class="language-html">&lt;button [acl]=&quot;&#123; role: [&#39;user&#39;, &#39;manage&#39;], mode: &#39;allOf&#39; &#125;&quot;&gt;&lt;/button&gt;
&lt;button *aclIf=&quot;&#123; role: [&#39;user&#39;, &#39;manage&#39;], mode: &#39;allOf&#39; &#125;&quot;&gt;&lt;/button&gt;
</code></pre>
<p>\u5F53\u62E5\u6709 user \u89D2\u8272\u663E\u793A\u6587\u672C\u6846\uFF0C\u672A\u6388\u6743\u663E\u793A\u6587\u672C\u3002</p>
<pre><code class="language-html">&lt;input nz-input *aclIf=&quot;&#39;user&#39;; else unauthorized&quot;&gt;
&lt;ng-template #unauthorized&gt;&#123;&#123;user&#125;&#125;&lt;/ng-template&gt;
</code></pre>
<p>\u4F7F\u7528 <code>except</code> \u53CD\u5411\u63A7\u5236\uFF0C\u5F53\u672A\u62E5\u6709 user \u89D2\u8272\u65F6\u663E\u793A\u3002</p>
<pre><code class="language-html">&lt;ng-template [aclIf]=&quot;role&quot; except&gt;
  &lt;input nz-input&gt;
&lt;/ng-template&gt;
</code></pre>
<h3 id="\u6743\u9650\u70B9"><a class="lake-link"><i data-anchor="\u6743\u9650\u70B9"></i></a>\u6743\u9650\u70B9</h3><p>\u6309\u94AE\u5FC5\u987B\u62E5\u6709 10 \u6743\u9650\u70B9\u663E\u793A\u3002</p>
<pre><code class="language-html">&lt;button [acl]=&quot;10&quot;&gt;&lt;/button&gt;
</code></pre>
<p>acl \u6307\u4EE4\u4E3A\u4E86\u80FD\u6240\u4F20\u9012\u7684\u503C\u662F\u89D2\u8272\u8FD8\u662F\u6743\u9650\u70B9\uFF0C\u6240\u4EE5\u4EE5 <code>string</code> \u7C7B\u578B\u8868\u793A\u89D2\u8272\u3001<code>number</code> \u7C7B\u578B\u8868\u793A\u6743\u9650\u70B9\uFF0C\u82E5\u6743\u9650\u70B9\u4E3A\u5B57\u7B26\u4E32\uFF0C\u53EF\u4F7F\u7528\u4EE5\u4E0B\u5199\u6CD5\u3002</p>
<pre><code class="language-html">&lt;button acl [acl-ability]=&quot;&#39;USER-EDIT&#39;&quot;&gt;&lt;/button&gt;
</code></pre>
<p>\u4F7F\u7528 <code>mode: &#39;allOf&#39;</code> \u8868\u793A\u5FC5\u987B\u540C\u65F6\u62E5\u6709\u3002</p>
<ul>
<li><code>oneOf</code> \u8868\u793A\u53EA\u987B\u6EE1\u8DB3\u89D2\u8272\u6216\u6743\u9650\u70B9\u6570\u7EC4\u4E2D\u7684\u4E00\u9879\u7B97\u6709\u6548\uFF08\u9ED8\u8BA4\uFF09</li>
<li><code>allOf</code> \u8868\u793A\u5FC5\u987B\u6EE1\u8DB3\u6240\u6709\u89D2\u8272\u6216\u6743\u9650\u70B9\u6570\u7EC4\u7B97\u6709\u6548</li>
</ul>
<p>\u6309\u94AE\u5FC5\u987B\u62E5\u6709 <code>10</code> \u548C <code>USER-EDIT</code> \u6743\u9650\u70B9\u65F6\u663E\u793A\u3002</p>
<pre><code class="language-html">&lt;button [acl]=&quot;&#123; ability: [10, &#39;USER-EDIT&#39;], mode: &#39;allOf&#39; &#125;&quot;&gt;&lt;/button&gt;
</code></pre>
<p><strong>\u5B57\u7B26\u4E32\u578B\u6743\u9650\u70B9</strong></p>
<p>\u68C0\u67E5\u6743\u9650\u662F\u901A\u8FC7 <code>can</code> \u65B9\u6CD5\uFF0C\u901A\u8FC7<a href="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a> <code>acl.preCan</code> \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5229\u7528\u8BE5\u65B9\u6CD5\u6765\u5B9E\u73B0\u4E00\u4E2A\u5B57\u7B26\u4E32\u533A\u5206\u89D2\u8272\u6216\u6743\u9650\u70B9\u3002</p>
<pre><code class="language-ts">// global-config.module.ts
const alainConfig: AlainConfig = &#123;
  acl: &#123;
    preCan: (roleOrAbility) =&gt; &#123;
      const str = roleOrAbility.toString();
      return str.startsWith(&#39;ability.&#39;) ? &#123; ability: [ str ] &#125; : null;
    &#125;
  &#125;
&#125;;
</code></pre>
<p>\u56E0\u6B64\uFF0C\u5F53\u4F20\u9012\u4E00\u4E2A\u5E26\u6709 <code>ability.</code> \u5F00\u5934\u7684\u5B57\u7B26\u4E32\u4F1A\u88AB\u8BA4\u4E3A\u8FD9\u662F\u4E00\u4E2A\u6743\u9650\u70B9\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-html">&lt;button acl=&quot;ability.user.edit&quot;&gt;&lt;/button&gt;
</code></pre>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="aclif"><a class="lake-link"><i data-anchor="aclif"></i></a>*aclIf</h3><p>\u53C2\u6570      | \u8BF4\u660E            | \u7C7B\u578B     | \u9ED8\u8BA4\u503C
----------|----------------|----------|-------
<code>[aclIf]</code>  | <code>can</code> \u65B9\u6CD5\u53C2\u6570\u4F53   | <code>ACLCanType</code> | -
<code>[aclIfThen]</code> | \u5DF2\u6388\u6743\u65F6\u663E\u793A\u6A21\u677F | <code>TemplateRef&lt;void&gt; | null</code> | -
<code>[aclIfElse]</code> | \u672A\u6388\u6743\u65F6\u663E\u793A\u6A21\u677F | <code>TemplateRef&lt;void&gt; | null</code> | -
<code>[except]</code> | \u672A\u6388\u6743\u65F6\u663E\u793A | <code>boolean</code> | <code>false</code></p>
`,toc:[{id:"\u5199\u5728\u524D\u9762",title:"\u5199\u5728\u524D\u9762"},{id:"\u539F\u7406",title:"\u539F\u7406"},{id:"\u793A\u4F8B",title:"\u793A\u4F8B",children:[{id:"\u89D2\u8272",title:"\u89D2\u8272"},{id:"\u6743\u9650\u70B9",title:"\u6743\u9650\u70B9"}]},{id:"api",title:"API",children:[{id:"aclif",title:"*aclIf"}]}],raw:`---
order: 3
title: \u7C92\u5EA6\u63A7\u5236
type: Documents
---

## \u5199\u5728\u524D\u9762

\u5F88\u591A\u65F6\u5019\u9700\u8981\u5BF9\u67D0\u4E2A\u6309\u94AE\u8FDB\u884C\u6743\u9650\u63A7\u5236\uFF0C\`@delon/acl\` \u63D0\u4F9B\u4E00\u4E2A \`acl\` \u6307\u4EE4\uFF0C\u53EF\u4EE5\u5229\u7528\u89D2\u8272\u6216\u6743\u9650\u70B9\u5BF9\u67D0\u4E2A\u6309\u94AE\u3001\u8868\u683C\u3001\u5217\u8868\u7B49\u5143\u7D20\u8FDB\u884C\u6743\u9650\u63A7\u5236\u3002

## \u539F\u7406

\`[acl]\` \u9ED8\u8BA4\u4F1A\u5728\u76EE\u6807\u5143\u7D20\u4E0A\u589E\u52A0\u4E00\u4E2A \`acl__hide\` \u6837\u5F0F\uFF0C\u5229\u7528 \`display: none\` \u6765\u9690\u85CF\u672A\u6388\u6743\u5143\u7D20\uFF0C\u5B83\u662F\u4E00\u4E2A\u7B80\u5355\u3001\u53C8\u9AD8\u6548\u7684\u65B9\u5F0F\u3002

\u4EE5\u6B64\u76F8\u5BF9\u5E94\u7684 \`*aclIf\` \u662F\u4E00\u4E2A\u7ED3\u6784\u578B\u6307\u4EE4\uFF0C\u5B83\u7C7B\u4F3C \`ngIf\` \u5728\u672A\u6388\u6743\u65F6\u4F1A\u4E0D\u6E32\u67D3\u8BE5\u5143\u7D20\u3002**\u6CE8\uFF1A** \u4E3A\u4E86\u4FDD\u6301\u7B80\u6D01\u5B83\u5E76\u4E0D\u652F\u6301 \`acl-ability\` \u6743\u9650\u70B9\u914D\u7F6E\u3002

## \u793A\u4F8B

### \u89D2\u8272

\u6309\u94AE\u5FC5\u987B\u62E5\u6709 user \u89D2\u8272\u663E\u793A\u3002

\`\`\`html
<button [acl]="'user'"></button>
<button *aclIf="'user'"></button>
\`\`\`

\u6309\u94AE\u5FC5\u987B\u62E5\u6709 user \u6216 manage \u89D2\u8272\u663E\u793A\u3002

\`\`\`html
<button [acl]="['user', 'manage']"></button>
<button *aclIf="['user', 'manage']"></button>
\`\`\`

\u6309\u94AE\u5FC5\u987B\u62E5\u6709 user \u548C manage \u89D2\u8272\u663E\u793A\u3002

\`\`\`html
<button [acl]="{ role: ['user', 'manage'], mode: 'allOf' }"></button>
<button *aclIf="{ role: ['user', 'manage'], mode: 'allOf' }"></button>
\`\`\`

\u5F53\u62E5\u6709 user \u89D2\u8272\u663E\u793A\u6587\u672C\u6846\uFF0C\u672A\u6388\u6743\u663E\u793A\u6587\u672C\u3002

\`\`\`html
<input nz-input *aclIf="'user'; else unauthorized">
<ng-template #unauthorized>{{user}}</ng-template>
\`\`\`

\u4F7F\u7528 \`except\` \u53CD\u5411\u63A7\u5236\uFF0C\u5F53\u672A\u62E5\u6709 user \u89D2\u8272\u65F6\u663E\u793A\u3002

\`\`\`html
<ng-template [aclIf]="role" except>
  <input nz-input>
</ng-template>
\`\`\`

### \u6743\u9650\u70B9

\u6309\u94AE\u5FC5\u987B\u62E5\u6709 10 \u6743\u9650\u70B9\u663E\u793A\u3002

\`\`\`html
<button [acl]="10"></button>
\`\`\`

acl \u6307\u4EE4\u4E3A\u4E86\u80FD\u6240\u4F20\u9012\u7684\u503C\u662F\u89D2\u8272\u8FD8\u662F\u6743\u9650\u70B9\uFF0C\u6240\u4EE5\u4EE5 \`string\` \u7C7B\u578B\u8868\u793A\u89D2\u8272\u3001\`number\` \u7C7B\u578B\u8868\u793A\u6743\u9650\u70B9\uFF0C\u82E5\u6743\u9650\u70B9\u4E3A\u5B57\u7B26\u4E32\uFF0C\u53EF\u4F7F\u7528\u4EE5\u4E0B\u5199\u6CD5\u3002

\`\`\`html
<button acl [acl-ability]="'USER-EDIT'"></button>
\`\`\`

\u4F7F\u7528 \`mode: 'allOf'\` \u8868\u793A\u5FC5\u987B\u540C\u65F6\u62E5\u6709\u3002

- \`oneOf\` \u8868\u793A\u53EA\u987B\u6EE1\u8DB3\u89D2\u8272\u6216\u6743\u9650\u70B9\u6570\u7EC4\u4E2D\u7684\u4E00\u9879\u7B97\u6709\u6548\uFF08\u9ED8\u8BA4\uFF09
- \`allOf\` \u8868\u793A\u5FC5\u987B\u6EE1\u8DB3\u6240\u6709\u89D2\u8272\u6216\u6743\u9650\u70B9\u6570\u7EC4\u7B97\u6709\u6548

\u6309\u94AE\u5FC5\u987B\u62E5\u6709 \`10\` \u548C \`USER-EDIT\` \u6743\u9650\u70B9\u65F6\u663E\u793A\u3002

\`\`\`html
<button [acl]="{ ability: [10, 'USER-EDIT'], mode: 'allOf' }"></button>
\`\`\`

**\u5B57\u7B26\u4E32\u578B\u6743\u9650\u70B9**

\u68C0\u67E5\u6743\u9650\u662F\u901A\u8FC7 \`can\` \u65B9\u6CD5\uFF0C\u901A\u8FC7[\u5168\u5C40\u914D\u7F6E](/docs/global-config) \`acl.preCan\` \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5229\u7528\u8BE5\u65B9\u6CD5\u6765\u5B9E\u73B0\u4E00\u4E2A\u5B57\u7B26\u4E32\u533A\u5206\u89D2\u8272\u6216\u6743\u9650\u70B9\u3002

\`\`\`ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  acl: {
    preCan: (roleOrAbility) => {
      const str = roleOrAbility.toString();
      return str.startsWith('ability.') ? { ability: [ str ] } : null;
    }
  }
};
\`\`\`

\u56E0\u6B64\uFF0C\u5F53\u4F20\u9012\u4E00\u4E2A\u5E26\u6709 \`ability.\` \u5F00\u5934\u7684\u5B57\u7B26\u4E32\u4F1A\u88AB\u8BA4\u4E3A\u8FD9\u662F\u4E00\u4E2A\u6743\u9650\u70B9\uFF0C\u4F8B\u5982\uFF1A

\`\`\`html
<button acl="ability.user.edit"></button>
\`\`\`

## API

### *aclIf

\u53C2\u6570      | \u8BF4\u660E            | \u7C7B\u578B     | \u9ED8\u8BA4\u503C
----------|----------------|----------|-------
\`[aclIf]\`  | \`can\` \u65B9\u6CD5\u53C2\u6570\u4F53   | \`ACLCanType\` | -
\`[aclIfThen]\` | \u5DF2\u6388\u6743\u65F6\u663E\u793A\u6A21\u677F | \`TemplateRef<void> | null\` | -
\`[aclIfElse]\` | \u672A\u6388\u6743\u65F6\u663E\u793A\u6A21\u677F | \`TemplateRef<void> | null\` | -
\`[except]\` | \u672A\u6388\u6743\u65F6\u663E\u793A | \`boolean\` | \`false\``}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=a({type:t,selectors:[["acl-control"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&l(0,"app-docs",0),e&2&&o("codes",n.codes)("item",n.item)},dependencies:[i],encapsulation:2})};var d=class t{item={name:"getting-started",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:1,title:"Getting Started",description:"ACL (Access Control List) is a very simple role-based permission control method, you can use in any Angular projects, a online DEMOThe ACLService serv...",group:"Documents",path:"packages/acl/docs/getting-started.en-US.md",url:"/acl/getting-started/en"},text:`<p>ACL (Access Control List) is a very simple role-based permission control method, you can use in any Angular projects, a online <a href="//ng-alain.github.io/ng-alain/#/logics/acl" target="_blank" rel="noopener">DEMO</a></p>
<h2 id="about_aclservice"><a class="lake-link"><i data-anchor="about_aclservice"></i></a>About ACLService</h2><p>The <code>ACLService</code> service class contains a set of methods based on role permissions. For a better coding experience ng-alain has multiple components or modules that depend on it, such as <code>st</code>, <code>MenuService</code> etc.. So, when you encounter the <code>acl</code> attribute, it means the parameter value of the <a href="#ACLCanType">can</a> method.</p>
<h2 id="usage"><a class="lake-link"><i data-anchor="usage"></i></a>Usage</h2><p>Install <code>&#64;delon/acl</code>:</p>
<pre><code class="language-bash">npm i -S &#64;delon/acl
</code></pre>
<p>If you use Standalone, there is no need to import the <code>DelonACLModule</code> module, otherwise:</p>
<pre><code class="language-typescript">import &#123; DelonACLModule &#125; from &#39;&#64;delon/acl&#39;;

&#64;NgModule(&#123;
  imports: [
    DelonACLModule
  ]
&#125;)
export class AppModule &#123; &#125;
</code></pre>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="parameters"><a class="lake-link"><i data-anchor="parameters"></i></a>Parameters</h3><table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
<th>Global Config</th>
</tr>
</thead>
<tbody><tr>
<td><code>[guard_url]</code></td>
<td><code>string</code></td>
<td>Router URL when guard fail</td>
<td><code>/403</code></td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[preCan]</code></td>
<td><code>(roleOrAbility: ACLCanType) =&gt; ACLType</code></td>
<td><code>can</code> before execution callback</td>
<td>-</td>
<td>\u2705</td>
</tr>
</tbody></table>
<blockquote>
<p>You can override them via <a href="/docs/global-config">Global Configuration</a>.</p>
</blockquote>
<h3 id="aclservice"><a class="lake-link"><i data-anchor="aclservice"></i></a>ACLService<label class="api-type-label service">service</label></h3><table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>[change]</code></td>
<td>Listen for ACL change notifications</td>
</tr>
<tr>
<td><code>[data]</code></td>
<td>Get all ACL data</td>
</tr>
<tr>
<td><code>setFull(val: boolean)</code></td>
<td>Whether to super administrator</td>
</tr>
<tr>
<td><code>set(value: ACLType)</code></td>
<td>Set current user role or permission (automatic override)</td>
</tr>
<tr>
<td><code>setRole(roles: string[])</code></td>
<td>Set current user role (automatic override)</td>
</tr>
<tr>
<td>\`setAbility(abilities: (number</td>
<td>string)[])\`</td>
</tr>
<tr>
<td><code>add(value: ACLType)</code></td>
<td>Add role or permission to the current user</td>
</tr>
<tr>
<td><code>attachRole(roles: string[])</code></td>
<td>Attach a role to the current user</td>
</tr>
<tr>
<td>\`attachAbility(abilities: (number</td>
<td>string)[])\`</td>
</tr>
<tr>
<td><code>removeRole(roles: string[])</code></td>
<td>Remove the role for the current user</td>
</tr>
<tr>
<td>\`removeAbility(abilities: (number</td>
<td>string)[])\`</td>
</tr>
<tr>
<td><code>can(roleOrAbility: ACLCanType)</code></td>
<td>Whether the current user has a role</td>
</tr>
<tr>
<td><code>canAbility(ability: ACLCanType)</code></td>
<td>Whether the current user has a permission</td>
</tr>
</tbody></table>
<h3 id="aclcantype"><a class="lake-link"><i data-anchor="aclcantype"></i></a>ACLCanType</h3><pre><code class="language-ts">type ACLCanType = number | number[] | string | string[] | ACLType
</code></pre>
<h3 id="acltype"><a class="lake-link"><i data-anchor="acltype"></i></a>ACLType</h3><table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Summary</th>
<th>Default</th>
</tr>
</thead>
<tbody><tr>
<td><code>[role]</code></td>
<td><code>string[]</code></td>
<td>List of role</td>
<td>-</td>
</tr>
<tr>
<td><code>[ability]</code></td>
<td><code>number[], string[]</code></td>
<td>List of permission</td>
<td>-</td>
</tr>
<tr>
<td><code>[mode]</code></td>
<td><code>allOf, oneOf</code></td>
<td><code>allOf</code> Must be valid against all of the given permission.<br><code>oneOf</code> Must be valid against exactly one of the given permission.</td>
<td><code>oneOf</code></td>
</tr>
<tr>
<td><code>[except]</code></td>
<td><code>boolean</code></td>
<td>Whether it&#39;s except, when the result is <code>true</code>, it means unauthorized</td>
<td><code>false</code></td>
</tr>
</tbody></table>
`,toc:[{id:"about_aclservice",title:"About ACLService"},{id:"usage",title:"Usage"},{id:"api",title:"API",children:[{id:"parameters",title:"Parameters"},{id:"aclservice",title:"ACLService"},{id:"aclcantype",title:"ACLCanType"},{id:"acltype",title:"ACLType"}]}],raw:"---\norder: 1\ntitle: Getting Started\ntype: Documents\n---\n\nACL (Access Control List) is a very simple role-based permission control method, you can use in any Angular projects, a online [DEMO](//ng-alain.github.io/ng-alain/#/logics/acl)\n\n## About ACLService\n\nThe `ACLService` service class contains a set of methods based on role permissions. For a better coding experience ng-alain has multiple components or modules that depend on it, such as `st`, `MenuService` etc.. So, when you encounter the `acl` attribute, it means the parameter value of the [can](#ACLCanType) method.\n\n## Usage\n\nInstall `@delon/acl`:\n\n```bash\nnpm i -S @delon/acl\n```\n\nIf you use Standalone, there is no need to import the `DelonACLModule` module, otherwise:\n\n```typescript\nimport { DelonACLModule } from '@delon/acl';\n\n@NgModule({\n  imports: [\n    DelonACLModule\n  ]\n})\nexport class AppModule { }\n```\n\n## API\n\n### Parameters\n\n| Property | Description | Type | Default | Global Config |\n|----------|-------------|------|---------|---------------|\n| `[guard_url]` | `string` | Router URL when guard fail | `/403` | \u2705 |\n| `[preCan]` | `(roleOrAbility: ACLCanType) => ACLType` | `can` before execution callback | - | \u2705 |\n\n> You can override them via [Global Configuration](/docs/global-config).\n\n### ACLService\n\n| Name | Description |\n|------|-------------|\n| `[change]` | Listen for ACL change notifications |\n| `[data]` | Get all ACL data |\n| `setFull(val: boolean)` | Whether to super administrator |\n| `set(value: ACLType)` | Set current user role or permission (automatic override) |\n| `setRole(roles: string[])` | Set current user role (automatic override) |\n| `setAbility(abilities: (number | string)[])` | Set current user permission (automatic override) |\n| `add(value: ACLType)` | Add role or permission to the current user |\n| `attachRole(roles: string[])` | Attach a role to the current user |\n| `attachAbility(abilities: (number | string)[])` | Attach a permission to the current user |\n| `removeRole(roles: string[])` | Remove the role for the current user |\n| `removeAbility(abilities: (number | string)[])` | Remove the permission for the current user |\n| `can(roleOrAbility: ACLCanType)` | Whether the current user has a role |\n| `canAbility(ability: ACLCanType)` | Whether the current user has a permission |\n\n### ACLCanType\n\n```ts\ntype ACLCanType = number | number[] | string | string[] | ACLType\n```\n\n### ACLType\n\n| Name | Type | Summary | Default |\n|------|------|---------|---------|\n| `[role]` | `string[]` | List of role | - |\n| `[ability]` | `number[], string[]` | List of permission | - |\n| `[mode]` | `allOf, oneOf` | `allOf` Must be valid against all of the given permission.<br>`oneOf` Must be valid against exactly one of the given permission. | `oneOf` |\n| `[except]` | `boolean` | Whether it's except, when the result is `true`, it means unauthorized | `false` |"},"zh-CN":{meta:{order:1,title:"\u5F00\u59CB\u4F7F\u7528",description:"ACL \u5168\u79F0\u53EB\u8BBF\u95EE\u63A7\u5236\u5217\u8868\uFF08Access Control List\uFF09\uFF0C\u662F\u4E00\u79CD\u975E\u5E38\u7B80\u5355\u7684\u57FA\u4E8E\u89D2\u8272\u6743\u9650\u63A7\u5236\u65B9\u5F0F\u3002\u4E00\u4E2A\u5B8C\u5168\u72EC\u7ACB @delon/acl \u6A21\u5757\uFF08DEMO\uFF09\u3002\u5185\u90E8\u5B9E\u9645\u662F\u4E00\u4E2A ACLService \u5B83\u63D0\u4F9B\u4E00\u5957\u57FA\u4E8E\u89D2\u8272\u6743\u9650\u670D\u52A1\u7C7B\u3002\u4E3A\u4E86\u66F4\u597D\u7684\u7F16\u7801\u4F53\u9A8C ng-alain \u6709\u591A\u5904\u7EC4\u4EF6\u6216\u6A21\u5757\u4E5F\u4F9D\u8D56\u4E8E\u5B83\uFF0C\u4F8B\u5982...",group:"Documents",path:"packages/acl/docs/getting-started.zh-CN.md",url:"/acl/getting-started/zh"},text:`<p>ACL \u5168\u79F0\u53EB\u8BBF\u95EE\u63A7\u5236\u5217\u8868\uFF08Access Control List\uFF09\uFF0C\u662F\u4E00\u79CD\u975E\u5E38\u7B80\u5355\u7684\u57FA\u4E8E\u89D2\u8272\u6743\u9650\u63A7\u5236\u65B9\u5F0F\u3002\u4E00\u4E2A\u5B8C\u5168\u72EC\u7ACB <code>&#64;delon/acl</code> \u6A21\u5757\uFF08<a href="//ng-alain.github.io/ng-alain/#/logics/acl" target="_blank" rel="noopener">DEMO</a>\uFF09\u3002</p>
<h2 id="\u5982\u4F55\u8FD0\u884C"><a class="lake-link"><i data-anchor="\u5982\u4F55\u8FD0\u884C"></i></a>\u5982\u4F55\u8FD0\u884C</h2><p>\u5185\u90E8\u5B9E\u9645\u662F\u4E00\u4E2A <code>ACLService</code> \u5B83\u63D0\u4F9B\u4E00\u5957\u57FA\u4E8E\u89D2\u8272\u6743\u9650\u670D\u52A1\u7C7B\u3002\u4E3A\u4E86\u66F4\u597D\u7684\u7F16\u7801\u4F53\u9A8C ng-alain \u6709\u591A\u5904\u7EC4\u4EF6\u6216\u6A21\u5757\u4E5F\u4F9D\u8D56\u4E8E\u5B83\uFF0C\u4F8B\u5982\uFF1A<code>st</code>\u3001<code>MenuService</code> \u7B49\uFF0C\u5E76\u4E14\u8FD9\u4E9B\u4F1A\u4EE5 <code>acl</code> \u5C5E\u6027\u7684\u5F62\u5F0F\u8868\u73B0\u3002\u56E0\u6B64\uFF0C\u5F53\u9047\u5230 <code>acl</code> \u5C5E\u6027\u90FD\u8868\u793A <a href="#ACLCanType">can</a> \u65B9\u6CD5\u7684<strong>\u53C2\u6570\u503C</strong>\u3002</p>
<h2 id="\u5982\u4F55\u4F7F\u7528"><a class="lake-link"><i data-anchor="\u5982\u4F55\u4F7F\u7528"></i></a>\u5982\u4F55\u4F7F\u7528</h2><p>\u5B89\u88C5 <code>&#64;delon/acl</code> \u4F9D\u8D56\u5305\uFF1A</p>
<pre><code class="language-bash">npm i -S &#64;delon/acl
</code></pre>
<p>\u82E5\u4F7F\u7528 Standalone \u65E0\u9700\u8981\u989D\u5916\u5BFC\u5165 <code>DelonACLModule</code> \u6A21\u5757\uFF0C\u5426\u5219\uFF1A</p>
<pre><code class="language-typescript">import &#123; DelonACLModule &#125; from &#39;&#64;delon/acl&#39;;

&#64;NgModule(&#123;
  imports: [
    DelonACLModule
  ]
&#125;)
export class AppModule &#123; &#125;
</code></pre>
`,api:`<h2 id="api"><a class="lake-link"><i data-anchor="api"></i></a>API</h2><h3 id="\u53C2\u6570"><a class="lake-link"><i data-anchor="\u53C2\u6570"></i></a>\u53C2\u6570</h3><table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u5168\u5C40\u914D\u7F6E</th>
</tr>
</thead>
<tbody><tr>
<td><code>[guard_url]</code></td>
<td><code>string</code></td>
<td>\u8DEF\u7531\u5B88\u536B\u5931\u8D25\u540E\u8DF3\u8F6C</td>
<td><code>/403</code></td>
<td>\u2705</td>
</tr>
<tr>
<td><code>[preCan]</code></td>
<td><code>(roleOrAbility: ACLCanType) =&gt; ACLType</code></td>
<td><code>can</code> \u6267\u884C\u524D\u56DE\u8C03</td>
<td>-</td>
<td>\u2705</td>
</tr>
</tbody></table>
<blockquote>
<p>\u53EF\u4EE5\u901A\u8FC7<a href="/docs/global-config">\u5168\u5C40\u914D\u7F6E</a>\u8986\u76D6\u5B83\u4EEC\u3002</p>
</blockquote>
<h3 id="aclservice"><a class="lake-link"><i data-anchor="aclservice"></i></a>ACLService<label class="api-type-label service">service</label></h3><table>
<thead>
<tr>
<th>\u65B9\u6CD5</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody><tr>
<td><code>[change]</code></td>
<td>\u76D1\u542CACL\u53D8\u66F4\u901A\u77E5</td>
</tr>
<tr>
<td><code>[data]</code></td>
<td>\u83B7\u53D6\u6240\u6709ACL\u6570\u636E</td>
</tr>
<tr>
<td><code>setFull(val: boolean)</code></td>
<td>\u6807\u8BC6\u5F53\u524D\u7528\u6237\u4E3A\u5168\u91CF\uFF0C\u5373\u4E0D\u53D7\u9650</td>
</tr>
<tr>
<td><code>set(value: ACLType)</code></td>
<td>\u8BBE\u7F6E\u5F53\u524D\u7528\u6237\u89D2\u8272\u6216\u6743\u9650\u80FD\u529B\uFF08\u4F1A\u5148\u6E05\u9664\u6240\u6709\uFF09</td>
</tr>
<tr>
<td><code>setRole(roles: string[])</code></td>
<td>\u8BBE\u7F6E\u5F53\u524D\u7528\u6237\u89D2\u8272\uFF08\u4F1A\u5148\u6E05\u9664\u6240\u6709\uFF09</td>
</tr>
<tr>
<td>\`setAbility(abilities: (number</td>
<td>string)[])\`</td>
</tr>
<tr>
<td><code>add(value: ACLType)</code></td>
<td>\u4E3A\u5F53\u524D\u7528\u6237\u589E\u52A0\u89D2\u8272\u6216\u6743\u9650\u80FD\u529B</td>
</tr>
<tr>
<td><code>attachRole(roles: string[])</code></td>
<td>\u4E3A\u5F53\u524D\u7528\u6237\u9644\u52A0\u89D2\u8272</td>
</tr>
<tr>
<td>\`attachAbility(abilities: (number</td>
<td>string)[])\`</td>
</tr>
<tr>
<td><code>removeRole(roles: string[])</code></td>
<td>\u4E3A\u5F53\u524D\u7528\u6237\u79FB\u9664\u89D2\u8272</td>
</tr>
<tr>
<td>\`removeAbility(abilities: (number</td>
<td>string)[])\`</td>
</tr>
<tr>
<td><code>can(roleOrAbility: ACLCanType)</code></td>
<td>\u5F53\u524D\u7528\u6237\u662F\u5426\u6709\u5BF9\u5E94\u89D2\u8272</td>
</tr>
<tr>
<td><code>canAbility(ability: ACLCanType)</code></td>
<td>\u5F53\u524D\u7528\u6237\u662F\u5426\u6709\u5BF9\u5E94\u6743\u9650\u70B9</td>
</tr>
</tbody></table>
<h3 id="aclcantype"><a class="lake-link"><i data-anchor="aclcantype"></i></a>ACLCanType</h3><pre><code class="language-ts">type ACLCanType = number | number[] | string | string[] | ACLType
</code></pre>
<h3 id="acltype"><a class="lake-link"><i data-anchor="acltype"></i></a>ACLType</h3><table>
<thead>
<tr>
<th>\u5C5E\u6027</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
<th>\u9ED8\u8BA4</th>
</tr>
</thead>
<tbody><tr>
<td><code>[role]</code></td>
<td><code>string[]</code></td>
<td>\u89D2\u8272</td>
<td>-</td>
</tr>
<tr>
<td><code>[ability]</code></td>
<td><code>number[], string[]</code></td>
<td>\u6743\u9650\u70B9</td>
<td>-</td>
</tr>
<tr>
<td><code>[mode]</code></td>
<td><code>allOf, oneOf</code></td>
<td><code>allOf</code> \u8868\u793A\u5FC5\u987B\u6EE1\u8DB3\u6240\u6709\u89D2\u8272\u6216\u6743\u9650\u70B9\u6570\u7EC4\u7B97\u6709\u6548<br><code>oneOf</code> \u8868\u793A\u53EA\u987B\u6EE1\u8DB3\u89D2\u8272\u6216\u6743\u9650\u70B9\u6570\u7EC4\u4E2D\u7684\u4E00\u9879\u7B97\u6709\u6548</td>
<td><code>oneOf</code></td>
</tr>
<tr>
<td><code>[except]</code></td>
<td><code>boolean</code></td>
<td>\u662F\u5426\u53D6\u53CD\uFF0C\u5373\u7ED3\u679C\u4E3A <code>true</code> \u65F6\u8868\u793A\u672A\u6388\u6743</td>
<td><code>false</code></td>
</tr>
</tbody></table>
`,toc:[{id:"\u5982\u4F55\u8FD0\u884C",title:"\u5982\u4F55\u8FD0\u884C"},{id:"\u5982\u4F55\u4F7F\u7528",title:"\u5982\u4F55\u4F7F\u7528"},{id:"api",title:"API",children:[{id:"\u53C2\u6570",title:"\u53C2\u6570"},{id:"aclservice",title:"ACLService"},{id:"aclcantype",title:"ACLCanType"},{id:"acltype",title:"ACLType"}]}],raw:"---\norder: 1\ntitle: \u5F00\u59CB\u4F7F\u7528\ntype: Documents\n---\n\nACL \u5168\u79F0\u53EB\u8BBF\u95EE\u63A7\u5236\u5217\u8868\uFF08Access Control List\uFF09\uFF0C\u662F\u4E00\u79CD\u975E\u5E38\u7B80\u5355\u7684\u57FA\u4E8E\u89D2\u8272\u6743\u9650\u63A7\u5236\u65B9\u5F0F\u3002\u4E00\u4E2A\u5B8C\u5168\u72EC\u7ACB `@delon/acl` \u6A21\u5757\uFF08[DEMO](//ng-alain.github.io/ng-alain/#/logics/acl)\uFF09\u3002\n\n## \u5982\u4F55\u8FD0\u884C\n\n\u5185\u90E8\u5B9E\u9645\u662F\u4E00\u4E2A `ACLService` \u5B83\u63D0\u4F9B\u4E00\u5957\u57FA\u4E8E\u89D2\u8272\u6743\u9650\u670D\u52A1\u7C7B\u3002\u4E3A\u4E86\u66F4\u597D\u7684\u7F16\u7801\u4F53\u9A8C ng-alain \u6709\u591A\u5904\u7EC4\u4EF6\u6216\u6A21\u5757\u4E5F\u4F9D\u8D56\u4E8E\u5B83\uFF0C\u4F8B\u5982\uFF1A`st`\u3001`MenuService` \u7B49\uFF0C\u5E76\u4E14\u8FD9\u4E9B\u4F1A\u4EE5 `acl` \u5C5E\u6027\u7684\u5F62\u5F0F\u8868\u73B0\u3002\u56E0\u6B64\uFF0C\u5F53\u9047\u5230 `acl` \u5C5E\u6027\u90FD\u8868\u793A [can](#ACLCanType) \u65B9\u6CD5\u7684**\u53C2\u6570\u503C**\u3002\n\n## \u5982\u4F55\u4F7F\u7528\n\n\u5B89\u88C5 `@delon/acl` \u4F9D\u8D56\u5305\uFF1A\n\n```bash\nnpm i -S @delon/acl\n```\n\n\u82E5\u4F7F\u7528 Standalone \u65E0\u9700\u8981\u989D\u5916\u5BFC\u5165 `DelonACLModule` \u6A21\u5757\uFF0C\u5426\u5219\uFF1A\n\n```typescript\nimport { DelonACLModule } from '@delon/acl';\n\n@NgModule({\n  imports: [\n    DelonACLModule\n  ]\n})\nexport class AppModule { }\n```\n\n## API\n\n### \u53C2\u6570\n\n| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u5168\u5C40\u914D\u7F6E |\n|----|----|----|-----|------|\n| `[guard_url]` | `string` | \u8DEF\u7531\u5B88\u536B\u5931\u8D25\u540E\u8DF3\u8F6C | `/403` | \u2705 |\n| `[preCan]` | `(roleOrAbility: ACLCanType) => ACLType` | `can` \u6267\u884C\u524D\u56DE\u8C03 | - | \u2705 |\n\n> \u53EF\u4EE5\u901A\u8FC7[\u5168\u5C40\u914D\u7F6E](/docs/global-config)\u8986\u76D6\u5B83\u4EEC\u3002\n\n### ACLService\n\n| \u65B9\u6CD5 | \u8BF4\u660E |\n|----|----|\n| `[change]` | \u76D1\u542CACL\u53D8\u66F4\u901A\u77E5 |\n| `[data]` | \u83B7\u53D6\u6240\u6709ACL\u6570\u636E |\n| `setFull(val: boolean)` | \u6807\u8BC6\u5F53\u524D\u7528\u6237\u4E3A\u5168\u91CF\uFF0C\u5373\u4E0D\u53D7\u9650 |\n| `set(value: ACLType)` | \u8BBE\u7F6E\u5F53\u524D\u7528\u6237\u89D2\u8272\u6216\u6743\u9650\u80FD\u529B\uFF08\u4F1A\u5148\u6E05\u9664\u6240\u6709\uFF09 |\n| `setRole(roles: string[])` | \u8BBE\u7F6E\u5F53\u524D\u7528\u6237\u89D2\u8272\uFF08\u4F1A\u5148\u6E05\u9664\u6240\u6709\uFF09 |\n| `setAbility(abilities: (number | string)[])` | \u8BBE\u7F6E\u5F53\u524D\u7528\u6237\u6743\u9650\u80FD\u529B\uFF08\u4F1A\u5148\u6E05\u9664\u6240\u6709\uFF09 |\n| `add(value: ACLType)` | \u4E3A\u5F53\u524D\u7528\u6237\u589E\u52A0\u89D2\u8272\u6216\u6743\u9650\u80FD\u529B |\n| `attachRole(roles: string[])` | \u4E3A\u5F53\u524D\u7528\u6237\u9644\u52A0\u89D2\u8272 |\n| `attachAbility(abilities: (number | string)[])` | \u4E3A\u5F53\u524D\u7528\u6237\u9644\u52A0\u6743\u9650 |\n| `removeRole(roles: string[])` | \u4E3A\u5F53\u524D\u7528\u6237\u79FB\u9664\u89D2\u8272 |\n| `removeAbility(abilities: (number | string)[])` | \u4E3A\u5F53\u524D\u7528\u6237\u79FB\u9664\u6743\u9650 |\n| `can(roleOrAbility: ACLCanType)` | \u5F53\u524D\u7528\u6237\u662F\u5426\u6709\u5BF9\u5E94\u89D2\u8272 |\n| `canAbility(ability: ACLCanType)` | \u5F53\u524D\u7528\u6237\u662F\u5426\u6709\u5BF9\u5E94\u6743\u9650\u70B9 |\n\n### ACLCanType\n\n```ts\ntype ACLCanType = number | number[] | string | string[] | ACLType\n```\n\n### ACLType\n\n| \u5C5E\u6027 | \u7C7B\u578B | \u8BF4\u660E | \u9ED8\u8BA4 |\n|----|----|----|----|\n| `[role]` | `string[]` | \u89D2\u8272 | - |\n| `[ability]` | `number[], string[]` | \u6743\u9650\u70B9 | - |\n| `[mode]` | `allOf, oneOf` | `allOf` \u8868\u793A\u5FC5\u987B\u6EE1\u8DB3\u6240\u6709\u89D2\u8272\u6216\u6743\u9650\u70B9\u6570\u7EC4\u7B97\u6709\u6548<br>`oneOf` \u8868\u793A\u53EA\u987B\u6EE1\u8DB3\u89D2\u8272\u6216\u6743\u9650\u70B9\u6570\u7EC4\u4E2D\u7684\u4E00\u9879\u7B97\u6709\u6548 | `oneOf` |\n| `[except]` | `boolean` | \u662F\u5426\u53D6\u53CD\uFF0C\u5373\u7ED3\u679C\u4E3A `true` \u65F6\u8868\u793A\u672A\u6388\u6743 | `false` |"}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=a({type:t,selectors:[["acl-getting-started"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&l(0,"app-docs",0),e&2&&o("codes",n.codes)("item",n.item)},dependencies:[i],encapsulation:2})};var s=class t{item={name:"guard",langs:["en-US","zh-CN"],content:{"en-US":{meta:{order:3,title:"Guard",description:"Routing guard prevent unauthorized users visit the page.@delon/acl implements the generic guard functions aclCanMatch, aclCanActivate, aclCanActivateC...",group:"Documents",path:"packages/acl/docs/guard.en-US.md",url:"/acl/guard/en"},text:`<h2 id="foreword"><a class="lake-link"><i data-anchor="foreword"></i></a>Foreword</h2><p>Routing guard prevent unauthorized users visit the page.</p>
<p><code>&#64;delon/acl</code> implements the generic guard functions <code>aclCanMatch</code>, <code>aclCanActivate</code>, <code>aclCanActivateChild</code>, which allows for complex operations through simple configuration in route registration, and supports the <code>Observable</code> type.</p>
<p>Use the fixed attribute <code>guard</code> to specify the <code>ACLCanType</code> parameter value, for example:</p>
<pre><code class="language-ts">const routes: Routes = [
  &#123;
    path: &#39;auth&#39;,
    canActivate: [ aclCanActivate ],
    data: &#123; guard: &#39;user1&#39; as ACLGuardType &#125;
  &#125;,
  &#123;
    path: &#39;auth&#39;,
    canActivate: [ aclCanActivate ],
    data: &#123;
      guard: &#123;
        role: [ &#39;user1&#39; ],
        ability: [ 10, &#39;USER-EDIT&#39; ],
        mode: &#39;allOf&#39;
      &#125; as ACLGuardType,
      guard_url: &#39;/no-permisseion&#39;
    &#125;
  &#125;,
  &#123;
    path: &#39;obs&#39;,
    canActivate: [ aclCanActivate ],
    data: &#123;
      guard: ((_srv, _injector) =&gt; &#123;
        return of(&#39;user&#39;);
      &#125;) as ACLGuardFunctionType,
      guard_url: &#39;/no-permisseion&#39;
    &#125;
  &#125;
]
</code></pre>
<blockquote>
<p>The value of <code>guard</code> must match the value of <a href="/acl/api#ACLCanType">ACLCanType</a>.</p>
</blockquote>
<h2 id="demo"><a class="lake-link"><i data-anchor="demo"></i></a>DEMO</h2><pre><code class="language-ts">import &#123; of &#125; from &#39;rxjs&#39;;
import &#123; aclCanActivate, aclCanActivateChild, aclCanMatch &#125; from &#39;&#64;delon/acl&#39;;
const routes: Routes = [
  &#123;
    path: &#39;guard&#39;,
    component: GuardComponent,
    children: [
      &#123; path: &#39;auth&#39;, component: GuardAuthComponent, canActivate: [ aclCanActivate ], data: &#123; guard: &#39;user1&#39; &#125; &#125;,
      &#123; path: &#39;admin&#39;, component: GuardAdminComponent, canActivate: [ aclCanActivate ], data: &#123; guard: &#39;admin&#39; &#125; &#125;
    ],
    canActivateChild: [ aclCanActivateChild ],
    data: &#123; guard: &lt;ACLType&gt;&#123; role: [ &#39;user1&#39; ], ability: [ 10, &#39;USER-EDIT&#39; ], mode: &#39;allOf&#39; &#125; &#125;
  &#125;,
  &#123; path: &#39;pro&#39;, loadChildren: &#39;./pro/pro.module#ProModule&#39;, canMatch: [ aclCanMatch ], data: &#123; guard: 1 &#125; &#125;,
  &#123; path: &#39;pro&#39;, loadChildren: &#39;./pro/pro.module#ProModule&#39;, canMatch: [ aclCanMatch ], data: &#123; guard: of(false).pipe(map(v =&gt; &#39;admin&#39;)) &#125; &#125;
];
</code></pre>
`,api:"",toc:[{id:"foreword",title:"Foreword"},{id:"demo",title:"DEMO"}],raw:`---
order: 3
title: Guard
type: Documents
---

## Foreword

Routing guard prevent unauthorized users visit the page.

\`@delon/acl\` implements the generic guard functions \`aclCanMatch\`, \`aclCanActivate\`, \`aclCanActivateChild\`, which allows for complex operations through simple configuration in route registration, and supports the \`Observable\` type.

Use the fixed attribute \`guard\` to specify the \`ACLCanType\` parameter value, for example:

\`\`\`ts
const routes: Routes = [
  {
    path: 'auth',
    canActivate: [ aclCanActivate ],
    data: { guard: 'user1' as ACLGuardType }
  },
  {
    path: 'auth',
    canActivate: [ aclCanActivate ],
    data: {
      guard: {
        role: [ 'user1' ],
        ability: [ 10, 'USER-EDIT' ],
        mode: 'allOf'
      } as ACLGuardType,
      guard_url: '/no-permisseion'
    }
  },
  {
    path: 'obs',
    canActivate: [ aclCanActivate ],
    data: {
      guard: ((_srv, _injector) => {
        return of('user');
      }) as ACLGuardFunctionType,
      guard_url: '/no-permisseion'
    }
  }
]
\`\`\`

> The value of \`guard\` must match the value of [ACLCanType](/acl/api#ACLCanType).

## DEMO

\`\`\`ts
import { of } from 'rxjs';
import { aclCanActivate, aclCanActivateChild, aclCanMatch } from '@delon/acl';
const routes: Routes = [
  {
    path: 'guard',
    component: GuardComponent,
    children: [
      { path: 'auth', component: GuardAuthComponent, canActivate: [ aclCanActivate ], data: { guard: 'user1' } },
      { path: 'admin', component: GuardAdminComponent, canActivate: [ aclCanActivate ], data: { guard: 'admin' } }
    ],
    canActivateChild: [ aclCanActivateChild ],
    data: { guard: <ACLType>{ role: [ 'user1' ], ability: [ 10, 'USER-EDIT' ], mode: 'allOf' } }
  },
  { path: 'pro', loadChildren: './pro/pro.module#ProModule', canMatch: [ aclCanMatch ], data: { guard: 1 } },
  { path: 'pro', loadChildren: './pro/pro.module#ProModule', canMatch: [ aclCanMatch ], data: { guard: of(false).pipe(map(v => 'admin')) } }
];
\`\`\``},"zh-CN":{meta:{order:3,title:"\u8DEF\u7531\u5B88\u536B",description:"\u8DEF\u7531\u5B88\u536B\u53EF\u4EE5\u9632\u6B62\u672A\u6388\u6743\u7528\u6237\u8BBF\u95EE\u9875\u9762\u3002\u8DEF\u7531\u5B88\u536B\u9700\u8981\u5355\u72EC\u5BF9\u6BCF\u4E00\u4E2A\u8DEF\u7531\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u5F88\u591A\u65F6\u5019\u8FD9\u770B\u8D77\u6765\u5F88\u7E41\u7410\uFF0C@delon/acl \u5B9E\u73B0\u4E86\u901A\u7528\u5B88\u536B\u51FD\u6570 aclCanMatch, aclCanActivate, aclCanActivateChild\uFF0C\u53EF\u4EE5\u5728\u8DEF\u7531\u6CE8\u518C\u65F6\u900F\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u5B8C\u6210\u4E00\u4E9B\u590D\u6742\u7684\u64CD\u4F5C\uFF0C\u751A\u81F3\u652F\u6301 O...",group:"Documents",path:"packages/acl/docs/guard.zh-CN.md",url:"/acl/guard/zh"},text:`<h2 id="\u5199\u5728\u524D\u9762"><a class="lake-link"><i data-anchor="\u5199\u5728\u524D\u9762"></i></a>\u5199\u5728\u524D\u9762</h2><p>\u8DEF\u7531\u5B88\u536B\u53EF\u4EE5\u9632\u6B62\u672A\u6388\u6743\u7528\u6237\u8BBF\u95EE\u9875\u9762\u3002</p>
<p>\u8DEF\u7531\u5B88\u536B\u9700\u8981\u5355\u72EC\u5BF9\u6BCF\u4E00\u4E2A\u8DEF\u7531\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u5F88\u591A\u65F6\u5019\u8FD9\u770B\u8D77\u6765\u5F88\u7E41\u7410\uFF0C<code>&#64;delon/acl</code> \u5B9E\u73B0\u4E86\u901A\u7528\u5B88\u536B\u51FD\u6570 <code>aclCanMatch</code>, <code>aclCanActivate</code>, <code>aclCanActivateChild</code>\uFF0C\u53EF\u4EE5\u5728\u8DEF\u7531\u6CE8\u518C\u65F6\u900F\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u5B8C\u6210\u4E00\u4E9B\u590D\u6742\u7684\u64CD\u4F5C\uFF0C\u751A\u81F3\u652F\u6301 <code>Observable</code> \u7C7B\u578B\u3002</p>
<p>\u4F7F\u7528\u56FA\u5B9A\u5C5E\u6027 <code>guard</code> \u6765\u6307\u5B9A <code>ACLCanType</code> \u53C2\u6570\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code class="language-ts">const routes: Routes = [
  &#123;
    path: &#39;auth&#39;,
    canActivate: [ aclCanActivate ],
    data: &#123; guard: &#39;user1&#39; as ACLGuardType &#125;
  &#125;,
  &#123;
    path: &#39;auth&#39;,
    canActivate: [ aclCanActivate ],
    data: &#123;
      guard: &#123;
        role: [ &#39;user1&#39; ],
        ability: [ 10, &#39;USER-EDIT&#39; ],
        mode: &#39;allOf&#39;
      &#125; as ACLGuardType,
      guard_url: &#39;/no-permisseion&#39;
    &#125;
  &#125;,
  &#123;
    path: &#39;obs&#39;,
    canActivate: [ aclCanActivate ],
    data: &#123;
      guard: ((_srv, _injector) =&gt; &#123;
        return of(&#39;user&#39;);
      &#125;) as ACLGuardFunctionType,
      guard_url: &#39;/no-permisseion&#39;
    &#125;
  &#125;
]
</code></pre>
<blockquote>
<p><code>guard</code> \u7684\u503C\u5FC5\u987B\u7B26\u5408 <a href="/acl/getting-started#ACLCanType">ACLCanType</a> \u7C7B\u578B\u503C\u3002</p>
</blockquote>
<h2 id="\u793A\u4F8B"><a class="lake-link"><i data-anchor="\u793A\u4F8B"></i></a>\u793A\u4F8B</h2><pre><code class="language-ts">import &#123; of &#125; from &#39;rxjs&#39;;
import &#123; aclCanActivate, aclCanActivateChild, aclCanMatch &#125; from &#39;&#64;delon/acl&#39;;
const routes: Routes = [
  &#123;
    path: &#39;guard&#39;,
    component: GuardComponent,
    children: [
      &#123; path: &#39;auth&#39;, component: GuardAuthComponent, canActivate: [ aclCanActivate ], data: &#123; guard: &#39;user1&#39; &#125; &#125;,
      &#123; path: &#39;admin&#39;, component: GuardAdminComponent, canActivate: [ aclCanActivate ], data: &#123; guard: &#39;admin&#39; &#125; &#125;
    ],
    canActivateChild: [ aclCanActivateChild ],
    data: &#123; guard: &lt;ACLType&gt;&#123; role: [ &#39;user1&#39; ], ability: [ 10, &#39;USER-EDIT&#39; ], mode: &#39;allOf&#39; &#125; &#125;
  &#125;,
  &#123; path: &#39;pro&#39;, loadChildren: &#39;./pro/pro.module#ProModule&#39;, canMatch: [ aclCanMatch ], data: &#123; guard: 1 &#125; &#125;,
  &#123; path: &#39;pro&#39;, loadChildren: &#39;./pro/pro.module#ProModule&#39;, canMatch: [ aclCanMatch ], data: &#123; guard: of(false).pipe(map(v =&gt; &#39;admin&#39;)) &#125; &#125;
];
</code></pre>
`,api:"",toc:[{id:"\u5199\u5728\u524D\u9762",title:"\u5199\u5728\u524D\u9762"},{id:"\u793A\u4F8B",title:"\u793A\u4F8B"}],raw:`---
order: 3
title: \u8DEF\u7531\u5B88\u536B
type: Documents
---

## \u5199\u5728\u524D\u9762

\u8DEF\u7531\u5B88\u536B\u53EF\u4EE5\u9632\u6B62\u672A\u6388\u6743\u7528\u6237\u8BBF\u95EE\u9875\u9762\u3002

\u8DEF\u7531\u5B88\u536B\u9700\u8981\u5355\u72EC\u5BF9\u6BCF\u4E00\u4E2A\u8DEF\u7531\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u5F88\u591A\u65F6\u5019\u8FD9\u770B\u8D77\u6765\u5F88\u7E41\u7410\uFF0C\`@delon/acl\` \u5B9E\u73B0\u4E86\u901A\u7528\u5B88\u536B\u51FD\u6570 \`aclCanMatch\`, \`aclCanActivate\`, \`aclCanActivateChild\`\uFF0C\u53EF\u4EE5\u5728\u8DEF\u7531\u6CE8\u518C\u65F6\u900F\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u5B8C\u6210\u4E00\u4E9B\u590D\u6742\u7684\u64CD\u4F5C\uFF0C\u751A\u81F3\u652F\u6301 \`Observable\` \u7C7B\u578B\u3002

\u4F7F\u7528\u56FA\u5B9A\u5C5E\u6027 \`guard\` \u6765\u6307\u5B9A \`ACLCanType\` \u53C2\u6570\uFF0C\u4F8B\u5982\uFF1A

\`\`\`ts
const routes: Routes = [
  {
    path: 'auth',
    canActivate: [ aclCanActivate ],
    data: { guard: 'user1' as ACLGuardType }
  },
  {
    path: 'auth',
    canActivate: [ aclCanActivate ],
    data: {
      guard: {
        role: [ 'user1' ],
        ability: [ 10, 'USER-EDIT' ],
        mode: 'allOf'
      } as ACLGuardType,
      guard_url: '/no-permisseion'
    }
  },
  {
    path: 'obs',
    canActivate: [ aclCanActivate ],
    data: {
      guard: ((_srv, _injector) => {
        return of('user');
      }) as ACLGuardFunctionType,
      guard_url: '/no-permisseion'
    }
  }
]
\`\`\`

> \`guard\` \u7684\u503C\u5FC5\u987B\u7B26\u5408 [ACLCanType](/acl/getting-started#ACLCanType) \u7C7B\u578B\u503C\u3002

## \u793A\u4F8B

\`\`\`ts
import { of } from 'rxjs';
import { aclCanActivate, aclCanActivateChild, aclCanMatch } from '@delon/acl';
const routes: Routes = [
  {
    path: 'guard',
    component: GuardComponent,
    children: [
      { path: 'auth', component: GuardAuthComponent, canActivate: [ aclCanActivate ], data: { guard: 'user1' } },
      { path: 'admin', component: GuardAdminComponent, canActivate: [ aclCanActivate ], data: { guard: 'admin' } }
    ],
    canActivateChild: [ aclCanActivateChild ],
    data: { guard: <ACLType>{ role: [ 'user1' ], ability: [ 10, 'USER-EDIT' ], mode: 'allOf' } }
  },
  { path: 'pro', loadChildren: './pro/pro.module#ProModule', canMatch: [ aclCanMatch ], data: { guard: 1 } },
  { path: 'pro', loadChildren: './pro/pro.module#ProModule', canMatch: [ aclCanMatch ], data: { guard: of(false).pipe(map(v => 'admin')) } }
];
\`\`\``}}};codes=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=a({type:t,selectors:[["acl-guard"]],hostAttrs:[1,"d-block"],decls:1,vars:2,consts:[[3,"codes","item"]],template:function(e,n){e&1&&l(0,"app-docs",0),e&2&&o("codes",n.codes)("item",n.item)},dependencies:[i],encapsulation:2})};var D=[{path:"",component:u,children:[{path:"control",redirectTo:"control/zh",pathMatch:"full"},{path:"control/:lang",component:c},{path:"getting-started",redirectTo:"getting-started/zh",pathMatch:"full"},{path:"getting-started/:lang",component:d},{path:"guard",redirectTo:"guard/zh",pathMatch:"full"},{path:"guard/:lang",component:s}]}];export{D as routes};
