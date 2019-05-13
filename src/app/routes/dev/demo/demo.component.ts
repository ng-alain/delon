import { Component, OnInit } from '@angular/core';
import { STChange, STColumn } from '@delon/abc';

@Component({
  selector: 'app-demo',
  template: '<st [columns]="cols" [data]="data" (change)="change($event)"></st>',
})
export class DemoComponent implements OnInit {
  private _sortType: any = null;
  cols: STColumn[] = [{ title: 'F1', index: 'F1', sort: { compare: null } }];
  data: any[] = [];
  ngOnInit() {
    this.data = this.loadFromRemote();
  }
  change($event: STChange) {
    switch ($event.type) {
      case 'sort':
        this._sortType = $event.sort!.value;
        this.data = this.loadFromRemote();
        break;
    }
  }
  private loadFromRemote(): any[] {
    const data = [{ F1: 3 }, { F1: 5 }, { F1: 4 }, { F1: 1 }, { F1: 2 }];
    if (this._sortType === null) return data;

    return this._sortType === 'descend' ? data.sort((a, b) => b.F1 - a.F1) : data.sort((a, b) => a.F1 - b.F1);
  }
}
