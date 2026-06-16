---
type: Business
title: notice-icon
subtitle: Notification menu
cols: 1
module: import { NoticeIconModule } from '@delon/abc/notice-icon';
---

Used on the navigation toolbar as a unified notification center for the entire product.

## API

### notice-icon

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[data]` | Data | `NoticeItem[]` | - |
| `[count]` | Total number of messages on the icon | `number` | - |
| `[loading]` | Pop up card loading status | `boolean` | `false` |
| `[centered]` | Whether the tab is centered | `boolean` | `false` |
| `(select)` | Click the callback of the list item | `EventEmitter<NoticeIconSelect>` | - |
| `(clear)` | Callback for clicking the clear button | `EventEmitter<string>` | - |
| `[popoverVisible]` | Manual control of Popover display | `boolean` | `false` |
| `(popoverVisibleChange)` | Popover callback | `EventEmitter<boolean>` | - |
| `[btnClass]` | Class of the button | `ngClass` | - |
| `[btnIconClass]` | Class of the icon in button | `ngClass` | - |

### NoticeItem

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[title]` | Title of the item | `string` | - |
| `[list]` | List data of the item | `NoticeIconList[]` | - |
| `[emptyText]` | Customize empty data copy for each tab | `string | TemplateRef<void>` | `无通知` |
| `[emptyImage]` | Customize the empty data image for each Tab | `string` | - |
| `[clearText]` | Clear button text for each Tab | `string` | `清空` |

### NoticeIconList

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[avatar]` | Avatar image link of the icon | `string` | - |
| `[title]` | Title of the icon | `string | TemplateRef<{ $implicit: NoticeIconList }>` | - |
| `[description]` | Description of the icon | `string | TemplateRef<{ $implicit: NoticeIconList }>` | - |
| `[datetime]` | Timestamp of the icon | `string` | - |
| `[extra]` | Additional information, in the upper right corner of the icon | `string` | - |
| `[read]` | Whether readed status of the item | `boolean` | - |

### NoticeIconSelect

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[title]` | Title of the select item | `string` | - |
| `[item]` | Data of the select item | `NoticeItem` | - |
| `[event]` | Click Event | `Event` | - |

---

## Examples

### undefined

```typescript
import { Component } from '@angular/core';

import { NoticeIconComponent } from '@delon/abc/notice-icon';

@Component({
  selector: 'components-notice-icon-basic',
  template: `<notice-icon count="5" />`,
  imports: [NoticeIconComponent]
})
export class ComponentsNoticeIconBasic {}
```

### undefined

```typescript
import { Component, DestroyRef, TemplateRef, computed, inject, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize, timer } from 'rxjs';

import { add, formatDistanceToNow, parse } from 'date-fns';

import { NoticeIconList, NoticeIconComponent, NoticeIconSelect, NoticeItem } from '@delon/abc/notice-icon';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'components-notice-icon-popover',
  template: `
    <div
      style="text-align: right; height: 64px; line-height: 64px; box-shadow: rgba(0, 21, 41, 0.12) 0 1px 4px; padding: 0 32px; width: 400px;"
    >
      <notice-icon
        [data]="data()"
        [count]="count()"
        [loading]="loading()"
        (select)="select($event)"
        (clear)="clear($event)"
        (popoverVisibleChange)="loadData()"
      />
      <ng-template #titleTpl let-i> {{ i.id }} Title By NgTemplate </ng-template>
      <ng-template #descTpl let-i>
        <a (click)="showOK()">{{ i.id }}</a>
        Descriptioin By NgTemplate
      </ng-template>
    </div>
  `,
  imports: [NoticeIconComponent]
})
export class ComponentsNoticeIconPopover {
  private readonly msg = inject(NzMessageService);
  private readonly nzI18n = inject(NzI18nService);
  private readonly d$ = inject(DestroyRef);

  titleTpl = viewChild<TemplateRef<{ $implicit: NoticeIconList }>>('descTpl');
  descTpl = viewChild<TemplateRef<{ $implicit: NoticeIconList }>>('descTpl');
  count = signal(5);
  loading = signal(false);
  types: NoticeItem[] = [
    {
      title: '通知',
      list: [],
      emptyText: '你已查看所有通知',
      emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
      clearText: '清空通知'
    },
    {
      title: '消息',
      list: [],
      emptyText: '您已读完所有消息',
      emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg',
      clearText: '清空消息'
    },
    {
      title: '待办',
      list: [],
      emptyText: '你已完成所有待办',
      emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg',
      clearText: '清空待办'
    }
  ];
  list = signal<NoticeIconList[]>([]);
  data = computed(() => {
    const data = this.types.slice();
    data.forEach(i => (i.list = []));
    this.list().forEach(item => {
      const newItem = { ...item };
      if (typeof newItem.datetime === 'string') {
        newItem.datetime = parse(newItem.datetime, 'yyyy-MM-dd', new Date());
      }
      if (newItem.datetime) {
        newItem.datetime = formatDistanceToNow(newItem.datetime as Date, { locale: this.nzI18n.getDateLocale() });
      }
      if (newItem.extra && newItem.status) {
        newItem.color = (
          {
            todo: undefined,
            processing: 'blue',
            urgent: 'red',
            doing: 'gold'
          } as Record<string, string | undefined>
        )[newItem.status];
      }
      data.find(w => w.title === newItem.type)!.list.push(newItem);
    });
    return data;
  });

  loadData(): void {
    if (this.loading()) return;
    this.loading.set(true);
    timer(500)
      .pipe(
        takeUntilDestroyed(this.d$),
        finalize(() => this.loading.set(false))
      )
      .subscribe(() => {
        const now = new Date();
        this.list.set([
          {
            id: '000000001',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
            title: '你收到了 14 份新周报',
            datetime: add(now, { days: 10 }),
            type: '通知',
            extra: '点击移除'
          },
          {
            id: '000000002',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
            title: '你推荐的 曲妮妮 已通过第三轮面试',
            datetime: add(now, { days: -3 }),
            type: '通知'
          },
          {
            id: '000000003',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
            title: '这种模板可以区分多种通知类型',
            datetime: add(now, { months: -3 }),
            read: true,
            type: '通知'
          },
          {
            id: '000000004',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
            title: '左侧图标用于区分不同的类型',
            datetime: add(now, { years: -1 }),
            type: '通知'
          },
          {
            id: '000000005',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
            title: '内容不要超过两行字，超出时自动截断',
            datetime: '2017-08-07',
            type: '通知'
          },
          {
            id: '000000006',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
            title: '曲丽丽 评论了你',
            description: '描述信息描述信息描述信息',
            datetime: '2017-08-07',
            type: '消息'
          },
          {
            id: '000000007',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
            title: '朱偏右 回复了你',
            description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
            datetime: '2017-08-07',
            type: '消息'
          },
          {
            id: '000000008',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
            title: this.titleTpl(),
            description: this.descTpl(),
            datetime: '2017-08-07',
            type: '消息'
          },
          {
            id: '000000009',
            title: '任务名称',
            description: '任务需要在 2017-01-12 20:00 前启动',
            extra: '未开始',
            status: 'todo',
            type: '待办'
          },
          {
            id: '000000010',
            title: '第三方紧急代码变更',
            description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
            extra: '马上到期',
            status: 'urgent',
            type: '待办'
          },
          {
            id: '000000011',
            title: '信息安全考试',
            description: '指派竹尔于 2017-01-09 前完成更新并发布',
            extra: '已耗时 8 天',
            status: 'doing',
            type: '待办'
          },
          {
            id: '000000012',
            title: 'ABCD 版本发布',
            description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
            extra: '进行中',
            status: 'processing',
            type: '待办'
          }
        ]);
      });
  }

  clear(type: string): void {
    this.msg.success(`清空了 ${type}`);
    this.list.set([]);
  }

  select(res: NoticeIconSelect): void {
    this.msg.success(`点击了 ${res.title} 的 ${res.item.title}`);
    if (res.item.extra === '点击移除') {
      this.msg.info(`执行了移除操作`);
      this.list.set([...this.list().filter(w => w.id !== res.item.id)]);
    }
  }

  showOK(): void {
    this.msg.info(`ok`);
  }
}
```
