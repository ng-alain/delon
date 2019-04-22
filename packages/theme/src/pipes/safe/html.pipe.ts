import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'html' })
export class HTMLPipe implements PipeTransform {
  constructor(private dom: DomSanitizer) {}

  transform(html: string): string | SafeHtml {
    return html ? this.dom.bypassSecurityTrustHtml(html) : '';
  }
}
