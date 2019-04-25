import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export type YNMode = 'full' | 'icon' | 'text';

const ICON_YES = `<svg viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>`;
const ICON_NO = `<svg viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>`;
const CLS_YES = `class="yn__yes"`;
const CLS_NO = `class="yn__no"`;

@Pipe({ name: 'yn' })
export class YNPipe implements PipeTransform {
  constructor(private dom: DomSanitizer) {}

  transform(value: boolean, yes: string, no: string, mode: YNMode): SafeHtml {
    let html = '';
    yes = yes || '是';
    no = no || '否';
    switch (mode) {
      case 'full':
        html = value ? `<i ${CLS_YES}>${ICON_YES}<span>${yes}</span></i>` : `<i ${CLS_NO}>${ICON_NO}<span>${no}</span></i>`;
        break;
      case 'text':
        html = value ? `<i ${CLS_YES}>${yes}</i>` : `<i ${CLS_NO}>${no}</i>`;
        break;
      default:
        html = value ? `<i ${CLS_YES} title="${yes}">${ICON_YES}</i>` : `<i ${CLS_NO} title="${no}">${ICON_NO}</i>`;
        break;
    }
    return this.dom.bypassSecurityTrustHtml(html);
  }
}
