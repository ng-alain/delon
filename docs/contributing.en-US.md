---
order: 40
title: Contributing
type: Other
---

The following is a set of guidelines for contributing to ng-alain. Please spend several minutes in reading these guidelines before you create an issue or pull request.

## Code of Conduct

We have adopted a [Code of Conduct](https://github.com/ng-alain/delon/blob/master/CODE_OF_CONDUCT.md) that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.

## Open Development

All work on [ng-alain](https://github.com/ng-alain/ng-alain)、[delon](https://github.com/ng-alain/delon) happens directly. Both core team members and external contributors send pull requests which go through the same review process.

## Bugs

We are using [GitHub Issues](https://github.com/ng-alain/ng-alain/issues) for bug tracing. The best way to get your bug fixed via [GitHub Issues](https://github.com/ng-alain/ng-alain/issues) and provide a reprduction with this [template](https://stackblitz.com/edit/ng-alain-setup).

Before you reporting a bug, please make sure you've searched exists issues, and read our [FAQ](https://ng-alain.com/).

## Proposing a Change

If you intend to change the public API or introduce new feature that via [GitHub Issues](https://github.com/ng-alain/ng-alain/issues).

## Your First Pull Request

Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/ng-alain/ng-alain/labels/good%20first%20issues) that contain bugs or small features that have a relatively limited scope. This is a great place to get started.

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don’t accidentally duplicate your effort.

If somebody claims an issue but doesn’t follow up for more than two weeks, it’s fine to take over it but you should still leave a comment.

## Sending a Pull Request

The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation.

**Before submitting a pull request**, please make sure the following is done:

1. Run `yarn` in the repository root.
2. If you’ve fixed a bug or added code that should be tested, add tests!
3. Ensure the test suite passes (`npm run test`).
4. Make sure your code lints (`npm run lint`). Tip: Lint runs automatically when you `git commit`.
5. Make sure rebase your code to keep the history clean.
6. Make sure your commit message meet the [guidelines](https://github.com/ng-alain/delon/blob/master/CONTRIBUTING.md#-commit-message-guidelines)

## Development Workflow

After cloning `ng-alain` or `delon`, run `yarn` to fetch its dependencies. Then, you can run several commands:

### delon

1. `npm run site` runs ng-alain.com website locally
2. `npm run lint` checks the code style
3. `npm run test` runs the complete test suite
5. `npm run release` build packages relases

### ng-alain

1. `npm run site` runs [demo site](https://ng-alain.surge.sh/) website locally
2. `npm run lint` checks the code style
3. `npm test` runs test suite
5. `npm run build` creates build of [demo site](https://ng-alain.surge.sh/)
