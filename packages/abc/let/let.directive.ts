import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export class LetContext<T> {
  constructor(private readonly internalDirectiveInstance: LetDirective<T>) {}

  get $implicit(): T {
    return this.internalDirectiveInstance.let;
  }

  get let(): T {
    return this.internalDirectiveInstance.let;
  }
}

@Directive({ selector: '[let]' })
export class LetDirective<T> {
  static ngTemplateContextGuard<T>(_dir: LetDirective<T>, _ctx: any): _ctx is LetDirective<T> {
    return true;
  }

  @Input() let!: T;

  constructor(@Inject(ViewContainerRef) viewContainer: ViewContainerRef, @Inject(TemplateRef) ref: TemplateRef<LetContext<T>>) {
    viewContainer.createEmbeddedView(ref, new LetContext<T>(this));
  }
}
