---
order: 1
title: LLMs.txt
tag: New
group: AI
---

This guide explains how to enable AI tools to better understand @delon/*.

## What is LLMs.txt?

We support [LLMs.txt](https://llmstxt.org/) files for making the @delon/* documentation available to large language models (LLMs). This feature helps AI tools better understand our component library, its APIs, and usage patterns.

## Available Resources

### LLMs.txt Aggregated Files

We provide several aggregated files to help AI tools access our documentation:

| File                                                       | Description                                                                         |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [llms.txt](https://ng-alain.com/llms.txt)                 | Navigation file with links to all documentation and components                      |
| [llms-full.txt](https://ng-alain.com/llms-full.txt)       | Complete component documentation (English) with implementation details and examples |
| [llms-full-cn.txt](https://ng-alain.com/llms-full-cn.txt) | Complete component documentation (Chinese)                                          |

### Single Component Documentation

Access individual component documentation with `.md` suffix:

- `https://ng-alain.com/llms/components/auto-focus.en.md` (English)
- `https://ng-alain.com/llms/components/auto-focus.cn.md` (Chinese)

## Usage with AI Tools

| Tool               | Description                                                                                                                                                     | Prompt                                                                                                                             |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Cursor**         | Use `@Docs` feature to include LLMs.txt, or add prompt to `.cursor/rules`. [Documentation](https://docs.cursor.com/context/@-symbols/@-docs)                    | `Read https://ng-alain.com/llms-full.txt and understand @delon/* components. Use this knowledge when writing code with @delon/*.` |
| **Windsurf**       | Add prompt to `.windsurf/rules` or use cascade memories. [Documentation](https://docs.windsurf.com/windsurf/cascade/memories)                                   | `Read https://ng-alain.com/llms-full.txt and understand @delon/* components. Use this knowledge when writing code with @delon/*.` |
| **Claude Code**    | Add to CLAUDE.md or use `/memory` to persist. [Documentation](https://docs.anthropic.com/en/docs/claude-code)                                                   | `Read https://ng-alain.com/llms-full.txt and understand @delon/* components. Use this knowledge when writing code with @delon/*.` |
| **GitHub Copilot** | Add to `.github/copilot-instructions.md`. [Documentation](https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot) | `Read https://ng-alain.com/llms-full.txt and understand @delon/* components. Use this knowledge when writing code with @delon/*.` |
| **Codex**          | Add to `.codex/settings.json` or AGENTS.md. [Documentation](https://github.com/openai/codex)                                                                    | `Read https://ng-alain.com/llms-full.txt and understand @delon/* components. Use this knowledge when writing code with @delon/*.` |
| **Gemini CLI**     | Use `--context` parameter or add to `.gemini/config.json`. [Documentation](https://ai.google.dev/gemini-api/docs?hl=en)                                         | `Read https://ng-alain.com/llms-full.txt and understand @delon/* components. Use this knowledge when writing code with @delon/*.` |
| **Trae**           | Add to project's knowledge sources in settings. [Documentation](https://trae.ai/docs)                                                                           | `Read https://ng-alain.com/llms-full.txt and understand @delon/* components. Use this knowledge when writing code with @delon/*.` |
| **Qoder**          | Add to `.qoder/config.yml` or use `@docs` in conversation. [Documentation](https://docs.qoder.com/)                                                             | `Read https://ng-alain.com/llms-full.txt and understand @delon/* components. Use this knowledge when writing code with @delon/*.` |
| **Neovate Code**   | Run `neovate` and describe task with prompt. [Documentation](https://github.com/neovateai/neovate-code)                                                         | `Read https://ng-alain.com/llms-full.txt and understand @delon/* components. Use this knowledge when writing code with @delon/*.` |
