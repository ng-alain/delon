---
order: 2
title: FAQ
type: Documents
---

## Can't find G2

G2 built-in TypeScript definition file, in fact, G2 can't be used alone in Angular. Most of G2 needs to depend on `@antv/data-set` or other plugins, and these not definition files. In other words, using TypeScript import modules is not most friendly way ([#679](https://github.com/ng-alain/ng-alain/issues/679)). So `@delon/chart` use most primitive method, but there are still some details to be note:

- Import all G2 related dependencies in the `scripts` node of `angular.json`
- Define G2 related type definitions in `src/typings.d.ts`

Of course, the above [g2 plugin](/cli/plugin#g2) can be used in one step.
