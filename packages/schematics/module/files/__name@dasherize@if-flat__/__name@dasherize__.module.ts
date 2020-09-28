import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
<% if (routing) { %>import { <%= classify(name) %>RoutingModule } from './<%= dasherize(name) %>-routing.module';<% } %>

const COMPONENTS: Type<void>[] = [];
const COMPONENTS_NOROUNT: Type<void>[] = [];

@NgModule({
  imports: [
    SharedModule,<% if (routing) { %>
    <%= classify(name) %>RoutingModule<% } %>
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
})
export class <%= classify(name) %>Module { }
