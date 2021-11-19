import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Host,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { DrawerHelper, ModalHelper } from '@delon/theme';
import { deepMergeKey } from '@delon/util/other';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { STComponent } from '.';
import { STColumnButton, STData } from './st.interfaces';
import { _STColumn, _STTdNotify, _STTdNotifyType } from './st.types';

@Component({
  selector: 'st-td',
  template: `
    <ng-template #btnTpl let-i>
      <ng-container *ngIf="!i.tooltip">
        <ng-template [ngTemplateOutlet]="btnItemTpl" [ngTemplateOutletContext]="{ $implicit: i }"></ng-template>
      </ng-container>
      <span *ngIf="i.tooltip" nz-tooltip [nzTooltipTitle]="i.tooltip">
        <ng-template [ngTemplateOutlet]="btnItemTpl" [ngTemplateOutletContext]="{ $implicit: i }"></ng-template>
      </span>
    </ng-template>
    <ng-template #btnItemTpl let-i>
      <a
        *ngIf="i.pop"
        nz-popconfirm
        [nzPopconfirmTitle]="i.pop.title"
        [nzIcon]="i.pop.icon"
        [nzCondition]="i.pop.condition(i)"
        [nzCancelText]="i.pop.cancelText"
        [nzOkText]="i.pop.okText"
        [nzOkType]="i.pop.okType"
        (nzOnConfirm)="_btn(i)"
        class="st__btn-text"
        [ngClass]="i.className"
        (click)="_stopPropagation($event)"
      >
        <ng-template [ngTemplateOutlet]="btnTextTpl" [ngTemplateOutletContext]="{ $implicit: i }"></ng-template>
      </a>
      <a *ngIf="!i.pop" (click)="_btn(i, $event)" class="st__btn-text" [ngClass]="i.className">
        <ng-template [ngTemplateOutlet]="btnTextTpl" [ngTemplateOutletContext]="{ $implicit: i }"></ng-template>
      </a>
    </ng-template>
    <ng-template #btnTextTpl let-i>
      <ng-container *ngIf="i.icon">
        <i
          *ngIf="!i.icon.iconfont"
          nz-icon
          [nzType]="i.icon.type"
          [nzTheme]="i.icon.theme"
          [nzSpin]="i.icon.spin"
          [nzTwotoneColor]="i.icon.twoToneColor"
        ></i>
        <i *ngIf="i.icon.iconfont" nz-icon [nzIconfont]="i.icon.iconfont"></i>
      </ng-container>
      <span [innerHTML]="i._text" [ngClass]="{ 'pl-xs': i.icon }"></span>
    </ng-template>
    <ng-template
      #render
      [ngTemplateOutlet]="c.__render!"
      [ngTemplateOutletContext]="{ $implicit: i, index: index, column: c }"
    ></ng-template>
    <ng-container *ngIf="!c.__render; else render">
      <ng-container [ngSwitch]="c.type">
        <label
          *ngSwitchCase="'checkbox'"
          nz-checkbox
          [nzDisabled]="i.disabled"
          [ngModel]="i.checked"
          (ngModelChange)="_checkbox($event)"
        ></label>
        <label
          *ngSwitchCase="'radio'"
          nz-radio
          [nzDisabled]="i.disabled"
          [ngModel]="i.checked"
          (ngModelChange)="_radio($event)"
        ></label>
        <a
          *ngSwitchCase="'link'"
          (click)="_link($event)"
          [innerHTML]="i._values[cIdx]._text"
          [attr.title]="i._values[cIdx].text"
        ></a>
        <ng-container *ngIf="i._values[cIdx].text">
          <nz-tag *ngSwitchCase="'tag'" [nzColor]="i._values[cIdx].color">
            <span [innerHTML]="i._values[cIdx]._text"></span>
          </nz-tag>
          <nz-badge
            *ngSwitchCase="'badge'"
            [nzStatus]="i._values[cIdx].color"
            [nzText]="i._values[cIdx].text"
          ></nz-badge>
        </ng-container>
        <ng-template *ngSwitchCase="'widget'" st-widget-host [record]="i" [column]="c"></ng-template
        ><ng-container *ngSwitchDefault>
          <span
            *ngIf="c.safeType !== 'text'"
            [innerHTML]="i._values[cIdx]._text"
            [attr.title]="c._isTruncate ? i._values[cIdx].text : null"
          ></span>
          <span
            *ngIf="c.safeType === 'text'"
            [innerText]="i._values[cIdx]._text"
            [attr.title]="c._isTruncate ? i._values[cIdx].text : null"
          ></span>
        </ng-container>
      </ng-container>
      <ng-container *ngFor="let btn of i._values[cIdx].buttons; let last = last">
        <a *ngIf="btn.children!.length > 0" nz-dropdown [nzDropdownMenu]="btnMenu" nzOverlayClassName="st__btn-sub">
          <span [innerHTML]="btn._text"></span>
          <i nz-icon nzType="down"></i>
        </a>
        <nz-dropdown-menu #btnMenu="nzDropdownMenu">
          <ul nz-menu>
            <ng-container *ngFor="let subBtn of btn.children!">
              <li *ngIf="subBtn.type !== 'divider'" nz-menu-item [class.st__btn-disabled]="subBtn._disabled">
                <ng-template [ngTemplateOutlet]="btnTpl" [ngTemplateOutletContext]="{ $implicit: subBtn }">
                </ng-template>
              </li>
              <li *ngIf="subBtn.type === 'divider'" nz-menu-divider></li>
            </ng-container>
          </ul>
        </nz-dropdown-menu>
        <span *ngIf="btn.children!.length === 0" [class.st__btn-disabled]="btn._disabled">
          <ng-template [ngTemplateOutlet]="btnTpl" [ngTemplateOutletContext]="{ $implicit: btn }"> </ng-template>
        </span>
        <nz-divider *ngIf="!last" nzType="vertical"></nz-divider>
      </ng-container>
    </ng-container>
  `,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class STTdComponent {
  @Input() c: _STColumn;
  @Input() cIdx: number;
  @Input() data: STData[];
  @Input() i: STData;
  @Input() index: number;
  @Output() readonly n = new EventEmitter<_STTdNotify>();

  private get routerState(): { pi: number; ps: number; total: number } {
    const { pi, ps, total } = this.stComp;
    return { pi, ps, total };
  }

  constructor(
    @Host() private stComp: STComponent,
    private router: Router,
    private modalHelper: ModalHelper,
    private drawerHelper: DrawerHelper
  ) {}

  private report(type: _STTdNotifyType) {
    this.n.emit({ type, item: this.i, col: this.c });
  }

  _checkbox(value: boolean): void {
    this.i.checked = value;
    this.report('checkbox');
  }

  _radio(checked: boolean): void {
    this.data.filter(w => !w.disabled).forEach(i => (i.checked = false));
    this.i.checked = checked;
    this.report('radio');
  }

  _link(e: Event): boolean {
    this._stopPropagation(e);
    const res = this.c.click!(this.i, this.stComp);
    if (typeof res === 'string') {
      this.router.navigateByUrl(res, { state: this.routerState });
    }
    return false;
  }

  _stopPropagation(ev: Event): void {
    ev.preventDefault();
    ev.stopPropagation();
  }

  _btn(btn: STColumnButton, ev?: Event): void {
    if (ev) {
      ev.stopPropagation();
    }
    const record = this.i;
    if (btn.type === 'modal' || btn.type === 'static') {
      const { modal } = btn;
      const obj = { [modal!.paramsName!]: record };
      (this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic'] as NzSafeAny)(
        modal!.component,
        { ...obj, ...(modal!.params && modal!.params!(record)) },
        deepMergeKey({}, true, this.stComp['cog'].modal, modal)
      )
        .pipe(filter(w => typeof w !== 'undefined'))
        .subscribe((res: NzSafeAny) => this.btnCallback(record, btn, res));
      return;
    } else if (btn.type === 'drawer') {
      const { drawer } = btn;
      const obj = { [drawer!.paramsName!]: record };
      this.drawerHelper
        .create(
          drawer!.title!,
          drawer!.component,
          { ...obj, ...(drawer!.params && drawer!.params!(record)) },
          deepMergeKey({}, true, this.stComp['cog'].drawer, drawer)
        )
        .pipe(filter(w => typeof w !== 'undefined'))
        .subscribe(res => this.btnCallback(record, btn, res));
      return;
    } else if (btn.type === 'link') {
      const clickRes = this.btnCallback(record, btn);
      if (typeof clickRes === 'string') {
        this.router.navigateByUrl(clickRes, { state: this.routerState });
      }
      return;
    }
    this.btnCallback(record, btn);
  }

  private btnCallback(record: STData, btn: STColumnButton, modal?: NzSafeAny): NzSafeAny {
    if (!btn.click) return;
    if (typeof btn.click === 'string') {
      switch (btn.click) {
        case 'load':
          this.stComp.load();
          break;
        case 'reload':
          this.stComp.reload();
          break;
      }
    } else {
      return btn.click(record, modal, this.stComp);
    }
  }
}
