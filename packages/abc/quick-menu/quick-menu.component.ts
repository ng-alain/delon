import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
  TemplateRef,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  effect,
  inject,
  input,
  numberAttribute,
  output,
  signal
} from '@angular/core';

import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'quick-menu',
  exportAs: 'quickMenu',
  template: `
    <div class="quick-menu__inner">
      <div class="quick-menu__ctrl" [style]="ctrlStyle()">
        <div class="quick-menu__ctrl-icon">
          @let ic = icon();
          <ng-container *nzStringTemplateOutlet="ic">
            <nz-icon [nzType]="$any(ic)" />
          </ng-container>
        </div>
      </div>
      <ng-content />
    </div>
  `,
  host: {
    class: 'quick-menu',
    '(click)': '_click()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzIconDirective, NzStringTemplateOutletDirective]
})
export class QuickMenuComponent {
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly render = inject(Renderer2);

  readonly icon = input<string | TemplateRef<void>>('question-circle');
  readonly top = input(120, { transform: numberAttribute });
  readonly width = input(200, { transform: numberAttribute });
  readonly bgColor = input<string>();
  readonly borderColor = input<string>();
  readonly expand = input(false, { transform: booleanAttribute });
  readonly expandChange = output<boolean>();

  private show = signal(false);

  protected ctrlStyle = computed(() => {
    const ret: Record<string, string | undefined> = {
      'background-color': this.bgColor(),
      'border-color': this.borderColor()
    };
    return ret;
  });

  constructor() {
    effect(() => {
      this.show.set(this.expand());
    });
    effect(() => {
      const res: string[] = [
        `top:${this.top()}px`,
        `width:${this.width()}px`,
        `margin-right:-${this.show() ? 0 : this.width()}px`
      ];
      if (this.bgColor) {
        res.push(`background-color:${this.bgColor()}`);
      }
      if (this.borderColor) {
        res.push(`border-color:${this.borderColor()}`);
      }
      this.render.setAttribute(this.el, 'style', res.join(';'));
    });
  }

  _click(): void {
    this.show.set(!this.show());
    this.expandChange.emit(this.show());
  }
}
