# Testing Guidelines

### Testing Framework and Tools

- Use Vitest for unit testing (via `@angular/build:unit-test`, browser mode / ChromiumHeadless)
- Require 100% of code coverage
- Follow unit testing best practices
- Keep tests simple and focused
- Use testing helpers. You can find the helpers in `packages/testing/src/` and `ng-zorro-antd/core/testing`
- Respect the existing testing structure
- Ensure all tests pass; if not, please fix them

### Testing Scripts

```bash
pnpm test                                                     # Run all tests (headless)
npx ng test delon --watch=false --include='packages/<pkg>/**/*.spec.ts'   # Run a subset
```
