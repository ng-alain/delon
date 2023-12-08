---
title:
  zh-CN: visibleIf
  en-US: visibleIf
order: 2
---

## zh-CN

利用 `visibleIf` 实现更加灵活的条件表达式，可以同时支持显示与可选项；利用 `updateFeedback` 可以更新反馈状态。

## en-US

Use `visibleIf` to implement more flexible conditional expressions, which can support both display and required items. Feedback status can be updated with `updateFeedback`.

```ts
import { Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { Observable, of, Subject, catchError, delay, switchMap } from 'rxjs';

import { DelonFormModule, SFComponent, SFSchema, SFSelectWidgetSchema, SFStringWidgetSchema } from '@delon/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <button type="button" nz-button (click)="toggleMobile(false)">Hide mobile</button>
    <button type="button" nz-button (click)="toggleMobile(true)">Show mobile</button>
    <sf #sf [schema]="schema" (formSubmit)="submit($event)" />
  `,
  standalone: true,
  imports: [DelonFormModule, NzButtonModule]
})
export class DemoComponent implements OnInit, OnDestroy {
  private readonly msg = inject(NzMessageService);

  @ViewChild('sf', { static: true }) sf!: SFComponent;
  private searchDepartment$ = new Subject<string>();

  schema: SFSchema = {
    properties: {
      login_type: {
        type: 'string',
        title: '登录方式',
        enum: [
          { label: '手机', value: 'mobile' },
          { label: '账密', value: 'account' }
        ],
        default: 'mobile',
        ui: {
          widget: 'radio',
          styleType: 'button'
        }
      },
      mobile: {
        type: 'string',
        description: 'Try typing: ng-alain',
        ui: {
          changeDebounceTime: 100,
          change: q => {
            this.sf.getProperty('/department')?.updateFeedback('validating');
            this.searchDepartment$.next(q);
          },
          visibleIf: {
            login_type: val => (val === 'mobile' ? { required: true, show: true } : null)
          }
        } as SFStringWidgetSchema
      },
      code: {
        type: 'number',
        ui: {
          visibleIf: {
            login_type: ['mobile']
          }
        }
      },
      type: {
        type: 'string',
        title: '类型',
        enum: ['内网', '外网'],
        default: '内网',
        ui: {
          widget: 'select',
          visibleIf: {
            login_type: val => val === 'mobile'
          }
        }
      },
      department: {
        type: 'string',
        title: 'Department',
        default: '部门1',
        ui: {
          widget: 'select',
          visibleIf: {
            type: ['内网']
          }
        } as SFSelectWidgetSchema
      },
      remark: {
        type: 'string',
        title: 'Remark',
        ui: {
          visibleIf: {
            type: val => (val === '内网' ? { required: true, show: true } : null)
          }
        }
      },
      adr: {
        type: 'string',
        title: 'Address',
        ui: {
          visibleIf: {
            type: val => (val === '外网' ? { required: true, show: true } : null)
          }
        }
      },
      name: {
        type: 'string',
        ui: {
          visibleIf: {
            login_type: ['account']
          }
        }
      },
      pwd: {
        type: 'string',
        ui: {
          type: 'password',
          visibleIf: {
            login_type: ['account']
          }
        }
      }
    },
    required: ['login_type'],
    ui: { debug: true }
  };

  ngOnInit(): void {
    const mockHttp = (q: string): Observable<string[]> =>
      of(
        q === 'ng-alain'
          ? new Array(5).fill(0).map((_, idx) => `NG-ALAIN部门${idx + 1}`)
          : new Array(3).fill(0).map((_, idx) => `部门${idx + 1}`)
      ).pipe(
        delay(500),
        catchError(() => [])
      );

    this.searchDepartment$
      .asObservable()
      .pipe(switchMap(mockHttp))
      .subscribe(list => {
        const departmentProperty = this.sf.getProperty('/department')!;
        departmentProperty.schema.enum = list;
        departmentProperty.schema.default = list[0];
        departmentProperty.widget.reset(list[0]);
        this.sf.getProperty('/department')?.updateFeedback();
      });
  }

  toggleMobile(status: boolean): void {
    const mobileProperty = this.sf.getProperty('/mobile');
    mobileProperty?.setVisible(status)?.widget?.detectChanges();
  }

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  ngOnDestroy(): void {
    this.searchDepartment$.complete();
  }
}
```
