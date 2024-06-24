import request from '@/utils/request';
import { AxiosPromise } from 'axios';

/**
 * 获取路由列表
 */
export function listCompany(params:any) {
  return request({
    url: '/v1/pc/user/company/list',
    method: 'get',
    params
  });
}
/**
 * 添加路由列表
 */
export function addCompany(data:any) {
  return request({
    url: '/v1/pc/user/company/create',
    method: 'post',
    data
  });
}
/**
 * 修改路由列表
 */
export function editCompany(data:any) {
  return request({
    url: '/v1/pc/user/company/update/'+data.id,
    method: 'put',
    data
  });
}
/**
 * 添加路由列表
 */
export function deleteCompany(data:any) {
  return request({
    url: '/v1/pc/user/company/delete',
    method: 'post',
    data
  });
}
/**
 * 路由详情
 */
export function getCompanyForm(id:String) {
  return request({
    url: '/v1/pc/user/company/detail/'+id,
    method: 'get',
  });
}