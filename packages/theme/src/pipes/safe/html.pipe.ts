import { PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'html' })
export class HTMLPipe implements PipeTransform {
  constructor(private dom: DomSanitizer) {}

  transform(html: string): string {
    return html ? this.dom.bypassSecurityTrustHtml(html) as any : '';
  }
}
