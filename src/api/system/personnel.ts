import request from '@/utils/request';
import { AxiosPromise } from 'axios';

/**
 * 获取路由列表
 */
export function listUser(params:any) {
  return request({
    url: '/v1/pc/user/user/list',
    method: 'get',
    params
  });
}
/**
 * 添加路由列表
 */
export function addUser(data:any) {
  return request({
    url: '/v1/pc/user/user/create',
    method: 'post',
    data
  });
}
/**
 * 修改路由列表
 */
export function editUser(data:any) {
  return request({
    url: '/v1/pc/user/user/update/'+data.id,
    method: 'put',
    data
  });
}
/**
 * 添加路由列表
 */
export function deleteUser(data:any) {
  return request({
    url: '/v1/pc/user/user/delete',
    method: 'post',
    data
  });
}
/**
 * 路由详情
 */
export function getUserForm(id:String) {
  return request({
    url: '/v1/pc/user/user/detail/'+id,
    method: 'get',
  });
}