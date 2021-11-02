// <%
// for (const {keyword, specifiers, path} of imports) {
// %><%= keyword %> { <%= specifiers.join(', ') %> } from '<%= path %>';
// <% }
// for (let {base, identifier, properties} of interfaces) { %>
// export interface <%= identifier %> <%= base ? `extends ${base} ` : '' %>{<%
//   for (let {name, optional, type} of properties) { %>
//   <%= name + optional %>: <%= type %>;<% } %>
// }
// <% } %>

export interface Component {
  ref: string;
  type: 'ref' | 'object';
  base?: string;
  name: string;
  rawName: string;
  deprecated: boolean;
  description?: string;
  properties: Property[];
}

// export interface Model {
//   imports: Import[];
//   interfaces: Interface[];
// }

// export interface Import {
//   types: string[];
//   path: string;
// }

// export interface Interface {
//   ref: string;
//   base?: string;
//   name: string;
//   rawName: string;
//   deprecated: boolean;
//   description?: string;
//   properties: Property[];
// }

export interface Property {
  name: string;
  optional: boolean;
  type: string;
}
