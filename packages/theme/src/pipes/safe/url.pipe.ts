import { PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'url' })
export class URLPipe implements PipeTransform {
  constructor(private dom: DomSanitizer) {}

  transform(url: string): string {
    return url ? this.dom.bypassSecurityTrustUrl(url) as any : '';
  }
}
