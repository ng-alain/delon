import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';

const a = By.css('.alain-default__content-title');

@Component({
  template: `
<div class="alain-default__content-title">
  <h1>
    Dashboard
    <small>Welcome !</small>
  </h1>
  <sv-container size="large" title="title" layout="vertical">
    <sv detailClass="text-danger" label="Firefox">1</sv>
  </sv-container>
  <form shf-wrap>
    <se label="App Key">1</se>
  </form>
  <st [page]="{showTotal: 'a-{{total}}-b'}"></st>
  <st [body]="body" [expand]="expand" [req]="{params: params, reName: {pi: 'PI'}, method: 'POST'}" [res]="{reName: {total: 'PI'}, process: preChange}" [page]="{front: true, zeroIndexed: true, placement: 'left', show: true, showSize: true, pageSizes: [1, 2, 3], showQuickJumper: true, showTotal: true, indexReset: true, toTop: true, toTopOffset: 10}">
    <ng-template #body>body</ng-template>
    <ng-template #expand>expand</ng-template>
  </st>
  <footer-toolbar [extra]="extra">
    <ng-template #extra>Extra</ng-template>
  </footer-toolbar>
  <page-header homeLink="/" [homeI18n]="'a'" [breadcrumb]="breadcrumb" [logo]="logo" [action]="action" [content]="content" [tab]="tab" [extra]="extra">
    <ng-template #breadcrumb>Breadcrumb</ng-template>
    <ng-template #logo>logo</ng-template>
    <ng-template #action>action</ng-template>
    <ng-template #content>content</ng-template>
    <ng-template #tab>tab</ng-template>
    <ng-template #extra>extra</ng-template>
  </page-header>
  <g2-custom (render)="render($event)"></g2-custom>
</div>
`
})
class B {}
