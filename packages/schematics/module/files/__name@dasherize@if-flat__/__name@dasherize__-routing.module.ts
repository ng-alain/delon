import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'demo', component: DemoComponent },
];

@NgModule({
  imports: [RouterModule.for<%= routingScope %>(routes)],
  exports: [RouterModule]
})
export class <%= classify(name) %>RoutingModule { }
