import { Component } from '@angular/core';

@Component({
  template: `
<desc-list size="large" title="title" layout="vertical">
  <desc-list-item term="Firefox" detailClass="text-danger">1</desc-list-item>
</desc-list>
<form shf-wrap>
  <shf-item label="App Key">1</shf-item>
</form>
<simple-table showTotal="a-{{total}}-b"></simple-table>
<simple-table [extraParams]="params"
  [reqReName]="{pi: 'PI'}"
  [resReName]="{total: 'PI'}"
  [preDataChange]="preChange"
  reqMethod="POST"
  frontPagination
  zeroIndexedOnPage
  pagePlacement="left"
  showPagination
  showSizeChanger
  [pageSizeOptions]="[1, 2, 3]"
  showQuickJumper
  showTotal
  isPageIndexReset
  toTopInChange
  toTopOffset="10"
  >
  <ng-template #body>body</ng-template>
  <ng-template #expand>expand</ng-template>
</simple-table>
<footer-toolbar>
  <ng-template #extra>Extra</ng-template>
</footer-toolbar>
<page-header home_link="/" [home_i18n]="'a'">
  <ng-template #breadcrumb>Breadcrumb</ng-template>
  <ng-template #logo>logo</ng-template>
  <ng-template #action>action</ng-template>
  <ng-template #content>content</ng-template>
  <ng-template #tab>tab</ng-template>
  <ng-template #extra>extra</ng-template>
</page-header>
<g2-chart (render)="render($event)"></g2-chart>
`,
})
class A {}
