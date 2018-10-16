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
  <st [body]="body" [expand]="expand">
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
