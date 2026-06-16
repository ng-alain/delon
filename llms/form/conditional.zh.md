---
title: visibleIf
subtitle: 条件表达式
type: Examples
---

`sf` 支持两种类型的条件表达式，分别为：
- JSON Schema 标准 [if-then-else](https://ajv.js.org/json-schema.html#if-then-else) 
- 灵活性更强的 `visibleIf`

---

## 代码示例

### If样例

支持 JSON Schema 的 [if-then-else](https://ajv.js.org/json-schema.html#if-then-else) 用法。

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-conditional-if',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormConditionalIf {
  private readonly msg = inject(NzMessageService);
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
        type: 'string'
      },
      code: {
        type: 'number'
      },
      name: {
        type: 'string'
      },
      pwd: {
        type: 'string',
        ui: {
          type: 'password'
        }
      }
    },
    required: ['login_type'],
    if: {
      properties: { login_type: { enum: ['mobile'] } }
    },
    then: {
      required: ['mobile', 'code']
    },
    else: {
      required: ['name', 'pwd']
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```

### visibleIf

利用 `visibleIf` 实现更加灵活的条件表达式，可以同时支持显示与可选项；利用 `updateFeedback` 可以更新反馈状态。

```typescript
import { Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { Observable, of, Subject, catchError, delay, switchMap } from 'rxjs';

import { DelonFormModule, SFComponent, SFSchema, SFSelectWidgetSchema, SFStringWidgetSchema } from '@delon/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-conditional-visibleIf',
  template: `
    <button type="button" nz-button (click)="toggleMobile(false)">Hide mobile</button>
    <button type="button" nz-button (click)="toggleMobile(true)">Show mobile</button>
    <sf #sf [schema]="schema" (formSubmit)="submit($event)" />
  `,
  imports: [DelonFormModule, NzButtonModule]
})
export class FormConditionalVisibleIf implements OnInit, OnDestroy {
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
