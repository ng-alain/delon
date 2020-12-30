---
type: Theme
order: 1
title: Global Parameters
---

## Public

| Name | Default | Description |
| --- | --- | --- |
| `@layout-gutter` | `8px` | Antd layout spacing (unchageable) |
| `@font-size-base` | `14px` | Antd font size (unchageable) |
| `@primary-color` | Blue | antd primary color |
| `@mobile-min` | `768px` | PC of width |
| `@mobile-max` | `767px` | Mobile of width |
| `@text-xs` | `@font-size-base - 2` | Text of xs size |
| `@text-sm` | `@font-size-base + 0` | Text of sm size |
| `@text-md` | `@font-size-base + 2` | Text of md size |
| `@text-lg` | `@font-size-base + 4` | Text of lg size |
| `@text-xl` | `@font-size-base + 8` | Text of xl size |
| `@text-xxl` | `@font-size-base + 12` | Text of xxl size |
| `@icon-sm` | `@font-size-base * 2` | Icon of sm size |
| `@icon-md` | `@font-size-base * 4` | Icon of md size |
| `@icon-lg` | `@font-size-base * 6` | Icon of lg size |
| `@icon-xl` | `@font-size-base * 8` | Icon of xl size |
| `@icon-xxl` | `@font-size-base * 10` | Icon of xxl size |
| `@h1-font-size` | `32px` | h1 font size |
| `@h2-font-size` | `24px` | h2 font size |
| `@h3-font-size` | `20px` | h3 font size |
| `@h4-font-size` | `16px` | h4 font size |
| `@h5-font-size` | `14px` | h5 font size |
| `@h6-font-size` | `12px` | h6 font size |
| `@enable-all-colors` | `false` | Turn on background, text color<br>eg: `.bg-teal`、`.text-teal` |
| `@modal-sm` | `300px` | Small modal |
| `@modal-md` | `500px` | Medium modal |
| `@modal-lg` | `900px` | Large modal |
| `@modal-lg` | `1200px` | Extra large modal |
| `@drawer-sm` | `300px` | Small drawer |
| `@drawer-md` | `500px` | Medium drawer |
| `@drawer-lg` | `900px` | Large drawer |
| `@drawer-lg` | `1200px` | Extra large drawer |
| `@code-border-color` | `#eee` | `<code>` border color |
| `@code-bg` | `#f7f7f7` | `<code>` background color |
| `@widths`  | `xs @layout-gutter * 10`<br>`sm @layout-gutter * 20`<br>`md @layout-gutter * 30`<br>`lg @layout-gutter * 40`<br>`xl @layout-gutter * 50`<br>`xxl @layout-gutter * 50` | width |
| `@border-radius-md` | `4px` | Medium border rounded corner |
| `@border-radius-lg` | `6px` | Large border rounded corner |
| `@masonry-column-gap` | `@layout-gutter * 2` | CSS waterfall flow column and column spacing |
| `@scrollbar-enabled` | `true` | Enable landscaping scrollbars |
| `@scrollbar-width` | `6px` | Scroll bar width |
| `@scrollbar-height` | `6px` | Scroll bar height |
| `@scrollbar-track-color` | `rgba(0, 0, 0, 0.3)` | Scrollbar track color |
| `@scrollbar-thumb-color` | `#6e6e6e` | Scrollbar thumb color |
| `@scrollbar-table-enabled` | `false` | Enable landscaping scrollbars of nz-table |
| `@rtl-enabled` | `false` | Wheter support RTL |

## Ng patch

### General

| Name | Default | Description |
| --- | --- | --- |
| `@preserve-white-spaces-enabled` | `true` | Fixed between buttons spacing when enabled [preserveWhitespaces](https://angular.io/api/core/Component#preserveWhitespaces) is true |
| `@preserve-sf-and-st-spaces` | `16px` | Spacing between `sf` and `st` |
| `@preserve-buttons-spaces` | Spacing between `button` and `button`(incluldes: `button`,`button-group`,`popconfirm`) |
| `@router-animation-duration` | `antFadeIn` | Route switching animation name |
| `@router-animation-duration` | `1s` | Animation duration |

## Zorro patch

### General

| Name | Default | Description |
| --- | --- | --- |
| `@forced-turn-off-nz-modal-animation-enabled` | `false` |Forced to turn off `nz-modal` animation |

### Form

| Name | Default | Description |
| --- | --- | --- |
| `@form-state-visual-feedback-enabled` | `false` | Turn on visual feedback of form invalid elements |
| `@search-form-bg` | `#fbfbfb` | Background color of simple search form |
| `@search-form-radius` | `4px` | Border rounded corner of simple search form |

### Table

By `nz-table`。

| Name | Default | Description |
| --- | --- | --- |
| `@nz-table-img-radius` | `4px` | Image rounded in the table |
| `@nz-table-img-margin-right` | `4px` | Image margin-right in the table |
| `@nz-table-img-max-width` | `32px` | Image maximum width in the table |
| `@nz-table-img-max-height` | `32px` | Image maximum height in the table |
| `@nz-table-rep-max-width` | `@mobile-max` | Triggering table response when mobile screen |
| `@nz-table-rep-header-background` | `@border-color-split` | Table responsive: title background color |
| `@nz-table-rep-even-background` | `#f9f9f9` | Table responsive: even background color |
| `@nz-table-rep-padding-vertical` | `8px` | Table responsive: Cell vertical spacing |
| `@nz-table-rep-padding-horizontal` | `8px` | Table responsive: Cell horizontal spacing |
| `@nz-table-rep-column-name-width` | `100px` | Table responsive: Column name maximum width |
| `@nz-table-rep-column-name-text-align` | `right` | Table responsive: Column name text alignment |
| `@nz-table-rep-column-name-padding-right` | `right` | Table responsive: Column name right spacing |
| `@nz-table-rep-column-name-color` | `rgba(0, 0, 0, 0.5)` | Table responsive: Column name color |

## Widgets

| Name | Default | Description |
| --- | --- | --- |
| `@badge-enabled` | `true` | Whether bootstrap badge |
| `@hafl-enabled` | `true` | Whether hafl image |
| `@abs-enabled` | `true` | Whether abs element|
| `@masonry-enabled` | `true` | Whether css masonry |
| `@setting-drawer-enabled` | `true` | Whether setting drawer css |
| `@search__form-enabled` | `true` | Pro style search form, [DEMO](https://ng-alain.surge.sh/) |
