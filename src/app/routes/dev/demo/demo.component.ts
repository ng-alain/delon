import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: ` <vedio-plyr [src]="mp4"></vedio-plyr> `,
})
export class DemoComponent {
  mp4 = 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4';
}
