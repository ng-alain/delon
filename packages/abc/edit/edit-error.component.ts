import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'se-error',
  exportAs: 'seError',
  animations: [
    trigger('errorAnt', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(-5px)',
        }),
        animate(
          '0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
          style({
            opacity: 1,
            transform: 'translateY(0)',
          }),
        ),
      ]),
      transition('* => void', [
        style({
          opacity: 1,
          transform: 'translateY(0)',
        }),
        animate(
          '0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
          style({
            opacity: 0,
            transform: 'translateY(-5px)',
          }),
        ),
      ]),
    ]),
  ],
  template: `
    <div [@errorAnt]><ng-content></ng-content></div>
  `,
  host: {
    '[class.ant-form-explain]': 'true',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SEErrorComponent {}
