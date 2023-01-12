import { HttpHeaders, HttpResponse } from "@angular/common/http";

export const TESTS = {
  '/test': { ok: true },
  '/test/cache-control': () => new HttpResponse({ body: 'cache-control', headers: new HttpHeaders({ 'cache-control': 'max-age=10' }) }),
};
