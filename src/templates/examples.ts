import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

{{{imports}}}

export interface LiveExample {
  title: any;
  component: any;
  additionalFiles?: string[];
  selectorName?: string;
}

export const EXAMPLE_COMPONENTS: {[key: string]: LiveExample} = {
  {{{metadata}}}
};

export const EXAMPLE_LIST = [
  {{{components}}}
];

@NgModule({
  imports: [ SharedModule ],
  declarations: EXAMPLE_LIST,
  entryComponents: EXAMPLE_LIST,
})
export class ExampleModule { }
