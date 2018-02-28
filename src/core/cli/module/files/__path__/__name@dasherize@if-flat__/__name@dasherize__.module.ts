import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
<% if (routing) { %>import { <%= classify(name) %>RoutingModule } from './<%= dasherize(name) %>-routing.module';<% } %>

const COMPONENT_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,<% if (routing) { %>
    <%= classify(name) %>RoutingModule<% } %>
  ],
  declarations: [
      ...COMPONENT_NOROUNT
  ],
  entryComponents: COMPONENT_NOROUNT
})
export class <%= classify(name) %>Module { }
