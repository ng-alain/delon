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

