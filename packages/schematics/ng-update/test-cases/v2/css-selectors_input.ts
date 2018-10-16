import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';

const a = By.css('.content__title');

@Component({
  template: `<div class="content__title">
  <h1>
    Dashboard
    <small>Welcome !</small>
  </h1>
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
</div>
  `
})
class B {}
