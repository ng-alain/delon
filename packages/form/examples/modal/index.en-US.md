---
title: modal
subtitle: Modal
type: Examples
---

Using a form in a modal box is a very common scenario. In fact, when you run `ng g ng-alain:edit edit`, you will get a complete example; you will get an HTML template like this:

```html
<sf mode="edit" [schema]="schema" [ui]="ui" [formData]="i" button="none">
  <div class="modal-footer">
    <button nz-button type="button" (click)="close()">Close</button>
    <button nz-button type="submit" [nzType]="'primary'" (click)="save(sf.value)" [disabled]="!sf.valid" [nzLoading]="http.loading">Save</button>
  </div>
</sf>
```

`.modal-footer` has been very friendly to integrate custom dynamic boxes.
