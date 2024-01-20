import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'html', standalone: true })
export class HTMLPipe implements PipeTransform {
  private readonly dom = inject(DomSanitizer);

  transform(html: string): string | SafeHtml {
    return html ? this.dom.bypassSecurityTrustHtml(html) : '';
  }
}
