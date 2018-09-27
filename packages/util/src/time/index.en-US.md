---
title: time
subtitle: Date-Time
type: Type
---

## getTimeDistance

Get the time range, return `[ Date, Date]` for the start and end dates, for example: Get this week time:

```ts
getTimeDistance('week')
```

**Parameters**

- `type` Shortcut type, with `-` for last time, if specified `number` type for days
  - `today`, `-today` Today or yesterday
  - `week`, `-week` This week or last week
  - `month`, `-month` This month or last month
  - `year`, `-year` This year or last year
- `time` Specify start time, default is `now`
