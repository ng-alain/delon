---
type: Layout
title: footer-toolbar
subtitle: FooterToolbar
cols: 1
module: FooterToolbarModule
---

A toolbar fixed at the bottom.

## Usage

It is fixed at the bottom of the content area and does not move along with the scroll bar, which is usually used for data collection and submission for long pages.

## API

### footer-toolbar

Property | Description | Type | Default
----|------|-----|------
`ng-content` | toolbar content, align to the right | `-` | -
`[errorCollect]` | Whether `error-collect`, make sure to wrap inside the `<form>` element | `boolean` | `false`
`[extra]` | extra information, align to the left | `string,TemplateRef<void>` | -
