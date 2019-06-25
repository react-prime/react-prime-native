import generateOptions from './generateOptions';
import request from './request';

const setupRequest = ({
  method, path, body, withAuth, file, query, error, response,
}) => request(generateOptions({
  method, path, body, withAuth, file, query, error, response,
}));

export const get = args => setupRequest({ method: 'GET', ...args });

export const del = args => setupRequest({ method: 'DELETE', ...args });

export const post = args => setupRequest({ method: 'POST', ...args });

export const put = args => setupRequest({ method: 'PUT', ...args });

export const patch = args => setupRequest({ method: 'PATCH', ...args });
