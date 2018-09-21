
import { Component } from '@angular/core';

@Component({
  selector: 'components-global-footer-basic',
  template: `
  <div style="background:#f5f5f5; height: 100%;">
  <global-footer [links]="links">
    Copyright <i class="anticon anticon-menu-copyright" class="mx-sm"></i>2017<a href="//github.com/cipchk" target="_blank" class="mx-sm">卡色</a>出品
  </global-footer>
  <global-footer>
    <global-footer-item href="https://ng-alain.com/" blankTarget>帮助</global-footer-item>
    <global-footer-item href="https://github.com/ng-alain" blankTarget>
      <i class="anticon anticon-github"></i>
    </global-footer-item>
    <global-footer-item href="https://ng-alain.github.io/ng-alain/" blankTarget>预览</global-footer-item>
    Copyright <i class="anticon anticon-menu-copyright" class="mx-sm"></i>2017<a href="//github.com/cipchk" target="_blank" class="mx-sm">卡色</a>出品
  </global-footer>
  </div>
  `,
  styles: [ `:host { display: block; }` ]
})
export class DemoComponent {
  links = [
    {
      title: '帮助',
      href: 'https://ng-alain.com/',
      blankTarget: true
    },
    {
      title: 'Github',
      href: 'https://github.com/ng-alain',
      blankTarget: true
    },
    {
      title: '预览',
      href: 'https://ng-alain.github.io/ng-alain/',
      blankTarget: true
    }
  ];
}
