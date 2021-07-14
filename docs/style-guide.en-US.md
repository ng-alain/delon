---
order: 90
title:
  en-US: Style Guide
  zh-CN: 编码规范建议
type: Advance
---

The project built by Angular CLI is already very good in terms of its directory structure. Official website also has an [Angular Style Guide](https://angular.io/guide/styleguide) ([Chinese version](https://angular.cn/guide/styleguide)) Style guide. It is recommended to read it several times. In addition, NG-ALAIN also has a part of the coding style, the following instructions may be useful for reading the code.

## Consistent code style

NG-ALAIN uses [ESLint](https://eslint.org/) to **guarantee code quality** and [Prettier](https://prettier.io/) to **optimize the code style**.

It is recommended to install several plugins for more friendly development in vscode:

- [ng-zorro snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode)
- [ng-alain snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

Of course, NG-ALAIN has prepared a complete set of extension packs for everyone, just install [NG-ALAIN Extension Pack](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-extension-pack).

## Git - pre commit Hook

The `ng lint` command provided by Angular, can be very effective in helping us find bugs and readability earlier. Isn't it cool if we can guarantee that the lint of the file in staged is automatically done before each commit in the team development process?

NG-ALAIN is configured to do lint each time you commit to staged and you can't commit if you find an error.

By default, the `*.ts`, `*.less` commit process forces the formatting of the code. You can change the rules by modifying the `husky` node of `package.json`.

> If **hint: The'.husky/pre-commit' hook was ignored because it's not set as executable.** is generated when executing `git commit -m "commit"`, it may be due to permission issues. Try to execute in the project root directory:

```bash
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```

## Style guide

### API documentation

Applications are always inevitable for the development of business components. We can not guarantee that you can remember these after a certain time. So, make sure to include the `README.md` document in each business component and describe the API, DEMO and other information. 

For example:

```markdown
## When do you use it?

Instruction

## DEMO

Instruction

## API

Parameter | Description | Type | Default
----|------|-----|------
src | The map's address  | `string` | -
```

### Module registration

Please parameter [module registration guidelines](/docs/module).

## Auxiliary item

NG-ALAIN is configured with some options for the CLI to better code.

### CLI

Vscode is the best choice for writing Angular. You can type: `ng g c list` in any directory of the project to generate the corresponding files for the component.

NG-ALAIN is configured by default without generating style files & unit tests. So you will see that only `.ts`, `.html` are generated. This is because NG-ALAIN provides a very rich style API, and custom styles are not just needed on most pages. At the same time, unit tests.

Of course, you can easily adjust the default configuration in `angular.json`.

### VSCode snippets

VSCode is the best choice for writing Angular. Naturally NG-ALAIN also created the corresponding snippets extension: [ng-zorro-vscode](//marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode) and [ng-alain-vscode](//marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode).
