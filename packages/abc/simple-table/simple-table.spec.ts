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
import { deepCopy } from '@delon/util';

import {
  SimpleTableFilter,
  SimpleTableColumn,
  ResReNameType,
  SimpleTableMultiSort,
  SimpleTableData,
} from './interface';
import { AdSimpleTableModule } from './simple-table.module';
import { SimpleTableComponent } from './simple-table.component';
import { of, Observable } from 'rxjs';

function genData(count: number) {
  return Array(count)
    .fill({})
    .map((item: any, idx: number) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
        status: idx % 2 === 0,
        date: new Date(),
        img: MOCKIMG,
        prices: {
          total: Math.ceil(Math.random() * 10) + 200,
        },
      };
    });
}

const MOCKIMG = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==`;
const PS = 3;
const DEFAULTCOUNT = PS + 1;
const USERS: any[] = genData(DEFAULTCOUNT);
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
  { title: 's1', index: 'sort1', sort: 'ascend', sorter: () => true },
  { title: 's2', index: 'sort2', sort: 'descend', sorter: () => true },
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

        it('with observable', () => {
          const obs$ = of(USERS);
          context.data = obs$;
          fixture.detectChanges();
          expect(context.change).not.toHaveBeenCalled();
          page.expectPageTotal(2)
              .to(2);
          expect(context.change).toHaveBeenCalled();
        });

        describe('#frontPagination', () => {
          it('with true', () => {
            context.frontPagination = true;
            fixture.detectChanges();
            page
              .expectTotal(DEFAULTCOUNT)
              .to(2)
              .expectCount(DEFAULTCOUNT - PS);
          });
          it('with false', () => {
            const total = 11;
            context.frontPagination = false;
            context.data = genData(total);
            context.total = total;
            context.pi = 1;
            context.ps = 5;
            fixture.detectChanges();
            page
              .expectTotal(total)
              .to(3)
              .expectCount(1);
            expect(context.change).toHaveBeenCalled();
          });
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
                img: MOCKIMG,
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
        describe('#sort', () => {
          describe('#multiSort', () => {
            it('should be multiSort', () => {
              context.multiSort = true;
              fixture.detectChanges();
              const h = httpMock.expectOne(w => true) as TestRequest;
              expect(h.request.urlWithParams).toContain(
                'sort1=ascend&sort2=descend',
              );
            });
            describe('when using SimpleTableMultiSort', () => {
              it('should combine values', () => {
                context.multiSort = <SimpleTableMultiSort>{};
                fixture.detectChanges();
                const h = httpMock.expectOne(w => true) as TestRequest;
                expect(h.request.urlWithParams).toContain(
                  'sort=sort1.ascend-sort2.descend',
                );
              });
            });
          });
          describe('#sortReName', () => {
            it('should used re-name value', () => {
              context.sortReName = { ascend: 'asc', descend: 'desc' };
              fixture.detectChanges();
              const h = httpMock.expectOne(w => true) as TestRequest;
              expect(h.request.urlWithParams).toContain('sort1=asc');
            });
          });
        });
        it('#reqError', () => {
          fixture.detectChanges();
          expect(context.reqError).not.toHaveBeenCalled();
          httpMock
            .expectOne(w => true)
            .flush(null, { status: 503, statusText: '' });
          expect(context.reqError).toHaveBeenCalled();
        });
        it('#preDataChange', () => {
          context.preDataChange = jasmine.createSpy().and.returnValue([]);
          fixture.detectChanges();
          expect(context.preDataChange).not.toHaveBeenCalled();
          httpMock.expectOne(w => true).flush(URLDATA);
          expect(context.preDataChange).toHaveBeenCalled();
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
      it('should be custom render via format', () => {
        context.data = USERS.slice(0, 3);
        context.columns = [
          {
            title: '',
            index: 'id',
            format: a => `<div class="j-format">${a.id}</div>`,
          },
        ];
        fixture.detectChanges();
        page.expectEls('.j-format', 3);
      });
      it('should be default render via default', () => {
        context.data = [{}];
        context.columns = [{ title: '', index: 'id', default: '-' }];
        fixture.detectChanges();
        const ret = page.getFirstCell().innerText;
        expect(ret).toBe('-');
      });
      describe('when specify type', () => {
        it(`with checkbox`, () => {
          page.expectEls('.ant-table-thead .ant-checkbox-wrapper', 1);
          page.expectEls('.ad-st-body .ant-checkbox-wrapper', PS);
        });
        it('with link', () => {
          const col: SimpleTableColumn[] = [
            {
              title: '',
              index: 'status',
              type: 'link',
              click: jasmine.createSpy(),
            },
          ];
          context.columns = col;
          fixture.detectChanges();
          expect(col[0].click).not.toHaveBeenCalled();
          const el = page.getFirstCell().querySelector('a');
          expect(el).not.toBeNull();
          el.click();
          fixture.detectChanges();
          expect(col[0].click).toHaveBeenCalled();
        });
        it(`with img`, () => {
          page.expectEls('.ad-st-body .img', PS);
        });
      });
    });

    describe('#showPagination', () => {
      it('should auto hide when total less than ps', () => {
        context.data = deepCopy(USERS).slice(0, 1);
        context.ps = 2;
        context.showPagination = undefined;
        fixture.detectChanges();
        page.expectEls('nz-pagination', 0);
      });
      it('should auto show when ps less than total', () => {
        context.data = deepCopy(USERS).slice(0, 3);
        context.ps = 2;
        context.showPagination = undefined;
        fixture.detectChanges();
        page.expectEls('nz-pagination', 1);
      });
      it('should always show when with true', () => {
        context.showPagination = true;
        fixture.detectChanges();
        page.expectEls('nz-pagination', 1);
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

    describe('#toTopInChange', () => {
      beforeEach(() => {
        context.toTopInChange = true;
        context.toTopOffset = 10;
        fixture.detectChanges();
      });
      it('should to top in changed page', () => {
        const el = page.getEl<HTMLElement>('simple-table');
        spyOn(el, 'scrollIntoView');
        expect(el.scrollIntoView).not.toHaveBeenCalled();
        page.to(2);
        expect(el.scrollIntoView).toHaveBeenCalled();
      });
    });
  });

  describe('[custom templates]', () => {
    it('should be custom title', () => {
      genModule({
        template: `<simple-table #st [data]="data" [columns]="columns" [ps]="ps">
          <ng-template [st-row]="age" type="title"><div class="age-title">age</div></ng-template>
        </simple-table>`,
      });
      context.data = [];
      fixture.detectChanges();
      page.expectEls('.age-title', 1);
    });
    it('should be custom row', () => {
      genModule({
        template: `<simple-table #st [data]="data" [columns]="columns" [ps]="ps">
          <ng-template [st-row]="age" let-item><div class="age">{{item.age}}</div></ng-template>
        </simple-table>`,
      });
      context.data = deepCopy(USERS).slice(0, 2);
      fixture.detectChanges();
      page.expectEls('.age', 2);
    });
    it('allow invalid id', () => {
      genModule({
        template: `<simple-table #st [data]="data" [columns]="columns" [ps]="ps">
          <ng-template [st-row]="invalid-age" type="title"><div class="age-title">age</div></ng-template>
        </simple-table>`,
      });
      context.data = [];
      fixture.detectChanges();
      page.expectEls('.age-title', 0);
    });
  });

  describe('[acl]', () => {
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

  describe('[edge]', () => {
    it('should be not pagination when data length less than ps value', () => {
      genModule({
        template: `<simple-table #st [data]="data" [columns]="columns" [ps]="ps"></simple-table>`,
      });
      context.data = USERS.slice(0, 3);
      context.ps = 4;
      fixture.detectChanges();
      page.expectCount(3).expectEls('nz-pagination', 0);
    });
  });

  class PageObject {
    constructor() {
      spyOn(context, 'reqError');
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
    getFirstCell() {
      return document.querySelector(
        '.ant-table-tbody tr td:nth-child(2)',
      ) as HTMLElement;
    }
    to(pi: number = 2): this {
      this.getEl<HTMLElement>(`.ant-pagination [title="${pi}"]`).click();
      fixture.detectChanges();
      return this;
    }
    expectEl(cls: string, result = true): this {
      const el = dl.query(By.css(cls));
      if (result) expect(this.getEl(cls)).not.toBeNull();
      else expect(this.getEl(cls)).toBeNull();
      return this;
    }
    expectEls(cls: string, count: number): this {
      const els = (dl.nativeElement as HTMLElement).querySelectorAll(cls);
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
    expectPageTotal(value: number): this {
      return this.expectEls('.ant-pagination-item', value);
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
        [frontPagination]="frontPagination"
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
        [preDataChange]="preDataChange"
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
  data: string | any[] | Observable<any[]> = deepCopy(USERS);
  extraParams: any;
  reqMehtod: string;
  reqBody: any;
  reqHeaders: any;
  reqReName: Object;
  reqError() {}
  resReName: ResReNameType;
  ps = PS;
  columns: SimpleTableColumn[] = deepCopy(COLUMNS);
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
  frontPagination: boolean = true;
  showQuickJumper = false;
  showTotal: any;
  isPageIndexReset: boolean;
  pagePlacement?: 'left' | 'center' | 'right';
  toTopInChange: boolean;
  toTopOffset: number;
  sortReName: { ascend?: string; descend?: string };
  multiSort: boolean | SimpleTableMultiSort;
  preDataChange: (data: SimpleTableData[]) => SimpleTableData[] = null;
  noResult = 'noResult';
  change() {}
  checkboxChange() {}
  radioChange() {}
  sortChange() {}
  filterChange() {}
}
