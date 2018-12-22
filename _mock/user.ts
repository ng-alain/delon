import { MockRequest, MockStatusError } from '@delon/mock';
// import * as Mock from 'mockjs';

const r = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

export const USERS = {
  // 支持值为 Object 和 Array
  'GET /users': (req: MockRequest) => {
    const total = req.queryString.total || 100;
    const res = {
      list: [],
      total,
    };
    const onlyList = req.queryString!.field === 'list';
    const num = onlyList ? total : +req.queryString.ps;
    for (let i = 0; i < num; i++) {
      res.list.push({
        id: i + 1,
        picture: {
          thumbnail: `https://randomuser.me/api/portraits/thumb/${r(0, 1) === 0 ? 'men' : 'women'}/${r(1, 50)}.jpg`,
        },
        name: {
          last: `last-${r(1, 10)}`,
          first: `first-${r(10, 20)}`,
        },
        nat: [ 'CH', 'US', 'DE' ][i % 3],
        gender: [ 'male', 'female' ][i % 2],
        email: `aaa${r(1, 10)}@qq.com`,
        phone: `phone-${r(1000, 100000)}`,
        price: r(10, 10000000),
        registered: new Date(),
      });
    }
    return onlyList ? res.list : res;
  },
  'GET /user/check/': () => false,
  'GET /user/check/:name': (req: MockRequest) => req.params.name === 'cipchk',
  // GET POST 可省略
  // '/users/1': Mock.mock({ id: 1, 'rank|3': '★★★' }),
  // 发送 Status 错误
  '/500': () => {
    throw new MockStatusError(500);
  },
  '/404': () => {
    throw new MockStatusError(404);
  },
  '/user/:id': (req: MockRequest) => {
    return { id: req.params.id, name: 'detail' };
  },
  '/user/:id/edit': (req: MockRequest) => {
    return { id: req.params.id, name: 'edit' };
  },
  '/user/:id/upload': (req: MockRequest) => {
    return { id: req.params.id, name: 'upload' };
  },
};
