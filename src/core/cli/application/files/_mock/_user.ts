import { MockRequest, MockStatusError } from '@delon/mock';
// TIPS: mockjs 一些优化细节见：http://ng-alain.com/docs/mock
// import * as Mock from 'mockjs';

export const USERS = {
    // 支持值为 Object 和 Array
    'GET /users': { users: [1, 2], total: 2 },
    // GET 可省略
    // '/users/1': Mock.mock({ id: 1, 'rank|3': '★★★' }),
    // POST 请求
    'POST /users/1': { uid: 1 },
    // 获取请求参数 queryString、headers、body
    '/qs': (req: MockRequest) => req.queryString.pi,
    // 路由参数
    '/users/:id': (req: MockRequest) => req.params, // /users/100, output: { id: 100 }
    // 发送 Status 错误
    '/404': () => { throw new MockStatusError(404); }
};
