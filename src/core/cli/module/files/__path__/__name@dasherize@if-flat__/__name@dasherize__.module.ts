import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
<% if (routing) { %>import { <%= classify(name) %>RoutingModule } from './<%= dasherize(name) %>-routing.module';<% } %>

@NgModule({
  imports: [
    SharedModule,<% if (routing) { %>
    <%= classify(name) %>RoutingModule<% } %>
  ],
  declarations: []
})
export class <%= classify(name) %>Module { }
