import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export class LetContext<T> {
  constructor(private readonly dir: LetDirective<T>) {}

  get $implicit(): T {
    return this.dir.let;
  }

  get let(): T {
    return this.dir.let;
  }
}

@Directive({ selector: '[let]', standalone: true })
export class LetDirective<T> {
  @Input({ required: true }) let!: T;

  constructor(@Inject(ViewContainerRef) vc: ViewContainerRef, @Inject(TemplateRef) ref: TemplateRef<LetContext<T>>) {
    vc.createEmbeddedView(ref, new LetContext<T>(this));
  }

  static ngTemplateContextGuard<T>(_dir: LetDirective<T>, _ctx: NzSafeAny): _ctx is LetDirective<T> {
    return true;
  }
}
