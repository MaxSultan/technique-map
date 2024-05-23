import { http, passthrough } from 'msw';

export const handlers = [
  http.get('*', () => {
    const req = passthrough();

    console.log(req);

    return req;
  }),
];
