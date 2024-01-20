import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({ name: 'url', standalone: true })
export class URLPipe implements PipeTransform {
  private readonly dom = inject(DomSanitizer);

  transform(url: string): string | SafeUrl {
    return url ? this.dom.bypassSecurityTrustUrl(url) : '';
  }
}
