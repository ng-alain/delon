import { Component, OnInit } from '@angular/core';

import { MenuService, ThemesService } from '@delon/theme';

@Component({
  selector: 'app-theme',
  template: `
  <nz-tree [nzNodes]="nodes" [nzCheckable]="true"></nz-tree>
  `
})
export class ThemeComponent implements OnInit {
    constructor(private menu: MenuService, private theme: ThemesService) {}

    nodes = [];

    ngOnInit() {
      this.generateData(this.nodes, 3, 2, 1);
      this.theme.setTheme('I');
    }

    generateData(nodes, _x, _y, _z, _preKey?: any, _tns?: any) {
        const preKey = _preKey || '0';
        const tns = _tns || nodes;

        const children = [];
        for (let i = 0; i < _x; i++) {
          const key = `${preKey}-${i}`;
          tns.push({ name: key, id: key, disableCheckbox: i === 1 });
          if (i < _y) {
            children.push(key);
          }
        }
        if (_z < 0) {
          return tns;
        }
        const level = _z - 1;
        children.forEach((key, index) => {
          tns[index].children = [];
          return this.generateData(nodes, _x, _y, level, key, tns[index].children);
        });
    }
}
