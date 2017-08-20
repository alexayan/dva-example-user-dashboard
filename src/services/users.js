import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

export function fetch({ page }) {
  return request(`/users?_page=${page}&_limit=${PAGE_SIZE}`);
}

export function remove(id) {
  return request(`/users/${id}`, {
    method: 'DELETE',
  });
}

export function patch(id, values) {
  return request(`/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request('/users', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
