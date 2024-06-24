import request from '@/utils/request';
import { AxiosPromise } from 'axios';

/**
 * 获取客户列表
 */
export function customersList(params:any) {
  return request({
    url: '/v1/pc/product/customers/list',
    method: 'get',
    params
  });
}
/**
 * 添加客户列表
 */
export function addCustomers(data:any) {
  return request({
    url: '/v1/pc/product/customers/create',
    method: 'post',
    data
  });
}
/**
 * 修改客户列表
 */
export function editCustomers(data:any) {
  return request({
    url: '/v1/pc/product/customers/update/'+data.id,
    method: 'put',
    data
  });
}
/**
 * 添加客户列表
 */
export function deleteCustomers(data:any) {
  return request({
    url: '/v1/pc/product/customers/delete',
    method: 'post',
    data
  });
}
/**
 * 客户详情
 */
export function getCustomersForm(id:String) {
  return request({
    url: '/v1/pc/product/customers/detail/'+id,
    method: 'get',
  });
}