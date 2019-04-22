import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({ name: 'url' })
export class URLPipe implements PipeTransform {
  constructor(private dom: DomSanitizer) {}

  transform(url: string): string | SafeUrl {
    return url ? this.dom.bypassSecurityTrustUrl(url) : '';
  }
}
