import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injector, Component, DebugElement, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {
  CNCurrencyPipe,
  YNPipe,
  ModalHelper,
  AlainThemeModule,
} from '@delon/theme';
import { DelonACLModule, ACLService } from '@delon/acl';

import {
  SimpleTableFilter,
  SimpleTableColumn,
  ResReNameType,
} from './interface';
import { AdSimpleTableModule } from './simple-table.module';
import { SimpleTableComponent } from './simple-table.component';

const USERS: any[] = Array(100)
  .fill({})
  .map((item: any, idx: number) => {
    return {
      id: idx + 1,
      name: `name ${idx + 1}`,
      age: Math.ceil(Math.random() * 10) + 20,
      status: idx % 2 === 0,
      date: new Date(),
      img: `${idx + 1}.png`,
      prices: {
        total: Math.ceil(Math.random() * 10) + 200,
      },
    };
  });
const COLUMNS: SimpleTableColumn[] = [
  {
    title: 'id',
    index: 'id',
    type: 'checkbox',
    selections: [
      {
        text: '小于25岁',
        select: (data: any[]) =>
          data.forEach(item => (item.checked = item.age < 25)),
      },
      {
        text: '大于25岁',
        select: (data: any[]) =>
          data.forEach(item => (item.checked = item.age >= 25)),
      },
    ],
  },
  {
    title: 'name',
    index: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    filters: [
      { text: 'name 1', value: 'name 1' },
      { text: 'name 2', value: 'name 2' },
    ],
    filter: (filter: SimpleTableFilter, record: any) =>
      record.name.indexOf(filter.value) === 0,
  },
  { title: 'age', index: 'age', type: 'currency' },
  { title: 'total', index: 'prices.total', type: 'number' },
  { title: 'date', index: 'date', type: 'date' },
  { title: 'img', index: 'img', type: 'img' },
  { title: 'status', index: 'status', type: 'yn' },
  {
    title: 'op',
    buttons: [
      {
        text: 'del',
        type: 'del',
      },
    ],
  },
];
const PS = 3;

describe('abc: simple-table', () => {
  let injector: Injector;
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;
  let dl: DebugElement;
  let page: PageObject;
  let comp: SimpleTableComponent;

  function genModule(other: {
    acl?: boolean;
    template?: string;
    data?: any[];
  }) {
    const imports = [
      CommonModule,
      FormsModule,
      HttpClientModule,
      NgZorroAntdModule.forRoot(),
      HttpClientTestingModule,
      RouterTestingModule.withRoutes([]),
      AlainThemeModule.forRoot(),
      AdSimpleTableModule.forRoot(),
    ];
    if (other.acl) imports.push(DelonACLModule.forRoot());
    injector = TestBed.configureTestingModule({
      imports,
      declarations: [TestComponent],
    });
    if (other.template) TestBed.overrideTemplate(TestComponent, other.template);
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = dl.componentInstance;
    if (other.data) context.data = other.data;
    fixture.detectChanges();
    page = new PageObject();
  }

  afterEach(() => comp.ngOnDestroy());

  describe('[property]', () => {
    beforeEach(() => genModule({ acl: false }));

    describe('#data', () => {
      describe('with array', () => {
        it(`should render ${PS} rows`, () => {
          page.expectCount(PS);
        });
      });
      describe('with url', () => {
        let http: HttpClient;
        let httpMock: HttpTestingController;
        const URL = `/test`;
        const URLTOTAL = 3;
        const URLDATA = {
          list: Array(PS)
            .fill({})
            .map((item: any, idx: number) => {
              return {
                id: idx + 1,
                name: `name ${idx + 1}`,
                age: Math.ceil(Math.random() * 10) + 20,
                status: idx % 2 === 0,
                date: new Date(),
                img: `${idx + 1}.png`,
              };
            }),
          total: URLTOTAL,
        };
        beforeEach(() => {
          http = injector.get(HttpClient);
          httpMock = injector.get(HttpTestingController);
          context.data = URL;
        });
        it('should be get data from request', () => {
          fixture.detectChanges();
          httpMock.expectOne(w => true).flush(URLDATA);
          page.expectCount(PS).expectTotal(URLTOTAL);
        });
        it('should be custom extra paramenters', () => {
          context.extraParams = { a: '1' };
          fixture.detectChanges();
          const h = httpMock.expectOne(w => true) as TestRequest;
          expect(h.request.params.get('a')).toBe('1');
        });
        it('should be rename a request', () => {
          context.reqReName = { pi: 'pageindex', ps: 'pagesize' };
          fixture.detectChanges();
          const h = httpMock.expectOne(w => true) as TestRequest;
          expect(h.request.params.has('pi')).toBe(false);
          expect(h.request.params.has('pageindex')).toBe(true);
        });
        describe('#resReName', () => {
          beforeEach(() => spyOn(console, 'warn'));
          it('should be rename', () => {
            context.resReName = { total: ['TOTAL'], list: ['LIST'] };
            fixture.detectChanges();
            httpMock.expectOne(w => true).flush({
              TOTAL: 1,
              LIST: [],
            });
            expect(console.warn).not.toHaveBeenCalled();
            page.expectTotal(1);
          });
          it('should be rename via deep path', () => {
            context.resReName = { total: 'res.total', list: 'res.list' };
            fixture.detectChanges();
            httpMock.expectOne(w => true).flush({
              res: {
                total: 1,
                list: [],
              },
            });
            expect(console.warn).not.toHaveBeenCalled();
            page.expectTotal(1);
          });
          it('should be null arguments', () => {
            context.resReName = { total: null, list: null };
            fixture.detectChanges();
            httpMock.expectOne(w => true).flush(URLDATA);
            expect(console.warn).not.toHaveBeenCalled();
          });
        });
      });
    });

    describe('#columns', () => {
      it('should throw error when is null', () => {
        expect(() => {
          context.columns = [];
          fixture.detectChanges();
        }).toThrowError('the columns property muse be define!');
      });
    });

    describe('#showTotal', () => {
      it('with false', () => {
        context.showTotal = false;
        fixture.detectChanges();
        expect(
          (page.getEl(
            '.ant-pagination-total-text',
          ) as HTMLElement).textContent.trim().length,
        ).toBe(0);
      });
      it('with true', () => {
        context.showTotal = true;
        fixture.detectChanges();
        expect(
          (page.getEl('.ant-pagination-total-text') as HTMLElement).textContent,
        ).toContain(comp.total);
      });
      it('should be custom template', () => {
        context.pi = 1;
        context.ps = 3;
        context.showTotal = `{{total}}/{{range[0]}}/{{range[1]}}`;
        fixture.detectChanges();
        expect(
          (page.getEl(
            '.ant-pagination-total-text',
          ) as HTMLElement).textContent.trim(),
        ).toBe(`${comp.total}/${comp.pi}/${comp.ps}`);
      });
    });
  });

  describe('static data', () => {
    it('should be not pagination when data length less than ps value', () => {
      genModule({
        template: `<simple-table #st [data]="data" [ps]="ps"></simple-table>`,
      });
      context.data = USERS.slice(0, 3);
      context.ps = 4;
      fixture.detectChanges();
      page.expectCount(3).expectEls('nz-pagination', 0);
    });
  });

  describe('acl', () => {
    let acl: ACLService;

    beforeEach(() => {
      genModule({ acl: true });
      acl = injector.get(ACLService);
      acl.set({ role: ['user'] });
    });

    it('should be not [age] column', () => {
      expect(
        (dl.nativeElement as HTMLElement).querySelectorAll('[data-col="age"]')
          .length,
      ).toBe(1);
      const cols = JSON.parse(JSON.stringify(COLUMNS));
      cols.find(w => w.index === 'age').acl = 'admin';
      context.columns = cols;
      fixture.detectChanges();
      expect(
        (dl.nativeElement as HTMLElement).querySelectorAll('[data-col="age"]')
          .length,
      ).toBe(0);
    });

    it('should be not [del] button', () => {
      expect(
        (dl.nativeElement as HTMLElement).querySelectorAll('.ant-table-tbody a')
          .length,
      ).toBeGreaterThan(1);
      const cols: SimpleTableColumn[] = JSON.parse(JSON.stringify(COLUMNS));
      cols.find(w => w.title === 'op').buttons[0].acl = 'admin';
      context.columns = cols;
      fixture.detectChanges();
      expect(
        (dl.nativeElement as HTMLElement).querySelectorAll('.ant-table-tbody a')
          .length,
      ).toBe(0);
    });
  });

  class PageObject {
    constructor() {
      spyOn(context, 'reqError');
      spyOn(context, 'preDataChange');
      spyOn(context, 'change');
      spyOn(context, 'checkboxChange');
      spyOn(context, 'radioChange');
      spyOn(context, 'sortChange');
      spyOn(context, 'filterChange');
      comp = context.comp;
    }
    getEl<T>(cls: string): T;
    getEl(cls: string): any {
      const el = dl.query(By.css(cls));
      expect(el).not.toBeNull();
      return el.nativeElement as any;
    }
    expectEl(cls: string, result = true): this {
      const el = dl.query(By.css(cls));
      if (result) expect(this.getEl(cls)).not.toBeNull();
      else expect(this.getEl(cls)).toBeNull();
      return this;
    }
    expectEls(cls: string, count: number): this {
      const els = dl.queryAll(By.css(cls));
      expect(els.length).toBe(count);
      return this;
    }
    expectCount(value: number): this {
      expect(comp._data.length).toBe(value);
      return this;
    }
    expectTotal(value: number): this {
      expect(comp.total).toBe(value);
      return this;
    }
  }
});

@Component({
  template: `
    <simple-table #st
        [data]="data" [extraParams]="extraParams"
        [reqMehtod]="reqMehtod" [reqBody]="reqBody" [reqHeaders]="reqHeaders" [reqReName]="reqReName" (reqError)="reqError()"
        [resReName]="resReName"
        [columns]="columns"
        [ps]="ps" [pi]="pi" [total]="total"
        [showPagination]="showPagination"
        [loading]="loading" [loadingDelay]="loadingDelay"
        [bordered]="bordered" [size]="size"
        [scroll]="scroll"
        [showSizeChanger]="showSizeChanger"
        [pageSizeOptions]="pageSizeOptions"
        [showQuickJumper]="showQuickJumper"
        [showTotal]="showTotal"
        [isPageIndexReset]="isPageIndexReset"
        [pagePlacement]="pagePlacement"
        [toTopInChange]="toTopInChange" [toTopOffset]="toTopOffset"
        [sortReName]="sortReName" [multiSort]="multiSort"
        (preDataChange)="preDataChange()"
        [noResult]="noResult"
        (change)="change()"
        (checkboxChange)="checkboxChange()"
        (radioChange)="radioChange()"
        (sortChange)="sortChange()"
        (filterChange)="filterChange()">
        <ng-template #header><div id="header">header</div></ng-template>
        <ng-template #body><div id="body">body</div></ng-template>
        <ng-template #footer><div id="footer">footer</div></ng-template>
        <ng-template #expand><div id="expand">expand</div></ng-template>
    </simple-table>`,
})
class TestComponent {
  @ViewChild('st') comp: SimpleTableComponent;
  data: string | any[] = JSON.parse(JSON.stringify(USERS));
  extraParams: any;
  reqMehtod: string;
  reqBody: any;
  reqHeaders: any;
  reqReName: Object;
  reqError() {}
  resReName: ResReNameType;
  ps = PS;
  columns: SimpleTableColumn[] = JSON.parse(JSON.stringify(COLUMNS));
  pi: number;
  total: number;
  showPagination = true;
  loading: boolean;
  loadingDelay: number;
  bordered: boolean;
  size: 'small' | 'middle' | 'default';
  scroll: { y: number; x: number };
  showSizeChanger: boolean;
  pageSizeOptions: number[];
  showQuickJumper = false;
  showTotal: any;
  isPageIndexReset: boolean;
  pagePlacement?: 'left' | 'center' | 'right';
  toTopInChange: boolean;
  toTopOffset: number;
  sortReName: { ascend?: string; descend?: string };
  multiSort: boolean;
  preDataChange() {}
  noResult = 'noResult';
  change() {}
  checkboxChange() {}
  radioChange() {}
  sortChange() {}
  filterChange() {}
}
