import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
<% if (routing) { %>import { <%= classify(name) %>RoutingModule } from './<%= dasherize(name) %>-routing.module';<% } %>

const COMPONENTS: Type<void>[] = [];

@NgModule({
  imports: [
    SharedModule,<% if (routing) { %>
    <%= classify(name) %>RoutingModule<% } %>
  ],
  declarations: COMPONENTS,
})
export class <%= classify(name) %>Module { }
