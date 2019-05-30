import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[stringTemplateOutlet]',
})
export class StringTemplateOutletDirective {
  private isTemplate: boolean;
  private inputTemplate: TemplateRef<void> | null = null;
  private inputViewRef: EmbeddedViewRef<void> | null = null;
  private defaultViewRef: EmbeddedViewRef<void> | null = null;

  constructor(private viewContainer: ViewContainerRef, private defaultTemplate: TemplateRef<void>) { }

  @Input()
  set stringTemplateOutlet(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this.isTemplate = true;
      this.inputTemplate = value;
    } else {
      this.isTemplate = false;
    }
    this.updateView();
  }

  updateView(): void {
    if (!this.isTemplate) {
      // use default template when input is string
      if (!this.defaultViewRef) {
        this.viewContainer.clear();
        this.inputViewRef = null;
        this.defaultViewRef = this.viewContainer.createEmbeddedView(this.defaultTemplate);
      }
    } else {
      // clear previous view if any.
      if (this.inputViewRef) {
        this.inputViewRef = null;
      }
      // use input template when input is templateRef
      this.viewContainer.clear();
      this.defaultViewRef = null;
      this.inputViewRef = this.viewContainer.createEmbeddedView(this.inputTemplate!);
    }
  }
}
