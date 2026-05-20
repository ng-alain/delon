# Testing Guidelines

### Testing Framework and Tools

- Use Karma and Jasmine for unit testing
- Require 100% of code coverage
- Follow unit testing best practices
- Keep tests simple and focused
- Use testing helpers. You can find the helpers in `packages/testing/src/`
- Respect the existing testing structure
- Ensure all tests pass; if not, please fix them

### Testing Scripts

```bash
yarn test                                         # Run all tests
yarn test -- --watch                              # Watch mode
yarn test -- --include="**/st.spec.ts"            # Run tests for a specific spec file
```
