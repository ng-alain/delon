import { Component } from '@angular/core';

@Component({
  template: `
    <sv-container size="large" title="title" layout="vertical">
      <sv detailClass="text-danger" label="Firefox">1</sv>
    </sv-container>
    <form shf-wrap>
      <se label="App Key">1</se>
    </form>
    <st [page]="{showTotal: 'a-{{total}}-b'}"></st>
    <st
      [body]="body"
      [expand]="expand"
      [req]="{ params: params, reName: { pi: 'PI' }, method: 'POST' }"
      [res]="{ reName: { total: 'PI' }, process: preChange }"
      [page]="{
        front: true,
        zeroIndexed: true,
        placement: 'left',
        show: true,
        showSize: true,
        pageSizes: [1, 2, 3],
        showQuickJumper: true,
        showTotal: true,
        indexReset: true,
        toTop: true,
        toTopOffset: 10
      }"
    >
      <ng-template #body>body</ng-template>
      <ng-template #expand>expand</ng-template>
    </st>
    <footer-toolbar [extra]="extra">
      <ng-template #extra>Extra</ng-template>
    </footer-toolbar>
    <page-header
      homeLink="/"
      [homeI18n]="'a'"
      [breadcrumb]="phBreadcrumb"
      [logo]="phLogo"
      [action]="phAction"
      [content]="phContent"
      [tab]="phTab"
      [extra]="phExtra"
    >
      <ng-template #phBreadcrumb>Breadcrumb</ng-template>
      <ng-template #phLogo>logo</ng-template>
      <ng-template #phAction>action</ng-template>
      <ng-template #phContent>content</ng-template>
      <ng-template #phTab>tab</ng-template>
      <ng-template #phExtra>extra</ng-template>
    </page-header>
    <g2-custom (render)="render($event)"></g2-custom>
  `,
})
class A {}
