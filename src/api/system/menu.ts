import request from '@/utils/request';
import { AxiosPromise } from 'axios';

/**
 * 获取路由列表
 */
export function listRoutes(params:any) {
  return request({
    url: '/v1/pc/permission/menu/list',
    method: 'get',
    params
  });
}
/**
 * 添加路由列表
 */
export function addRoutes(data:any) {
  return request({
    url: '/v1/pc/permission/menu/create',
    method: 'post',
    data
  });
}
/**
 * 修改路由列表
 */
export function editRoutes(data:any) {
  return request({
    url: '/v1/pc/permission/menu/update/'+data.id,
    method: 'put',
    data
  });
}
/**
 * 添加路由列表
 */
export function deleteRoutes(data:any) {
  return request({
    url: '/v1/pc/permission/menu/delete',
    method: 'post',
    data
  });
}
/**
 * 路由详情
 */
export function getMenuForm(id:String) {
  return request({
    url: '/v1/pc/permission/menu/detail/'+id,
    method: 'get',
  });
}