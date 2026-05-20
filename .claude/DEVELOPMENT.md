# Coding Style Guide

### Basic Coding Guidelines

- Written in TypeScript and Angular.
- Each template must be defined in the component `*.ts` file using the `template` property of the `@Component` decorator.
- Each official style must be defined in the component's `index.less` file.
- Support Server Side Rendering (SSR).
- All imports of `@delon/*` and `ng-zorro-antd` packages must use absolute paths. Example:

```typescript
import { STComponent } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';
```

### Component Development

- All code added to a component must be covered by unit tests. For guidelines on how to write unit tests, see the [testing](./TESTING.md) file.
- New development on existing components must respect the existing structure; where possible, use modern Angular features.
- New components must be developed using the latest Angular features.
- New features must be documented and include a demo. Guidelines on how to document can be found [here](./DOCUMENTATION.md).

### TypeScript Guidelines

- Use generics where appropriate to enhance type flexibility.
- Use intersection types (&) to combine multiple types.
- Use literal union types to define a limited set of options.
- Avoid using `enum` in favor of union types and `as const`.
- Rely on TypeScript's type inference whenever possible.
- Use type assertions (`as`) only when necessary.

### Responsiveness and Theming Support

- Components should display well on different screen sizes.
- All components must support dark mode.
- Components should support right-to-left (RTL) text directions.
- Use logical CSS properties (e.g., `margin-inline-start`) instead of directional properties (e.g., `margin-left`).
