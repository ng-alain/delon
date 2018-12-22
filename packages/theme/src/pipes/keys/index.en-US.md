---
order: 1
title: keys
subtitle: Keys
type: Pipe
---

Transforms Object or Map into an array of key value pairs.

Data:

```typescript
const data = { name: 'cipchk', address: { city: 'shanghai', district: 'changning' } };
```

Use:

```html
<div *ngFor="let item of data | keys">{{item.key}} {{item.value | json}}</div>
```

**Dictionary**

```typescript
const data = { 1: 'Normal', 2: 'Deleted' };
```

If you want to keep the key name `number` numeric:

```
<div *ngFor="let item of data | keys: true">{{item.key}} {{item.value | json}}</div>
```

> Angular `6.1.0` will support natively [KeyValuePipe](https://angular.io/api/common/KeyValuePipe).
