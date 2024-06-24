import request from '@/utils/request';
import { AxiosPromise } from 'axios';

/**
 * 获取订单详情
 *
 * @param userId
 */
export function getCompanyOrderForm(userId: number) {
  return request({
    url: '/v1/pc/product/companyOrder/detail/' + userId,
    method: 'get'
  });
}

/**
 * 添加用户
 *
 * @param data
 */
export function addCompanyOrder(data: any) {
  return request({
    url: '/v1/pc/product/companyOrder/create',
    method: 'post',
    data: data
  });
}
/**
 * 修改用户
 *
 * @param data
 */
export function editCompanyOrder(data: any) {
  return request({
    url: '/v1/pc/product/companyOrder/update/'+data.id,
    method: 'put',
    data: data
  });
}

/**
 * 删除
 *
 * @param data
 */
export function deleteCompanyOrder(data: any) {
  return request({
    url: '/v1/pc/product/companyOrder/delete',
    method: 'post',
    data: data
  });
}
/**
 * 用户列表
 *
 * @param params
 */
export function getUserList(params:any) {
  return request({
    url: '/v1/pc/user/staff/list/',
    method: 'get',
    params
  });
}
/**
 * 套餐列表
 *
 * @param params
 */
export function getComboList(params:any) {
  return request({
    url: '/v1/pc/product/setMeal/list/',
    method: 'get',
    params
  });
}

