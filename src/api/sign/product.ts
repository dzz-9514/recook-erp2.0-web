import request from '@/utils/request';
import { AxiosPromise } from 'axios';

/**
 * 获取订单详情
 *
 * @param userId
 */
export function getContractProductForm(userId: number) {
  return request({
    url: '/v1/pc/product/contractProduct/detail/' + userId,
    method: 'get'
  });
}

/**
 * 添加用户
 *
 * @param data
 */
export function addContractProduct(data: any) {
  return request({
    url: '/v1/pc/product/contractProduct/create',
    method: 'post',
    data: data
  });
}
/**
 * 修改用户
 *
 * @param data
 */
export function editContractProduct(data: any) {
  return request({
    url: '/v1/pc/product/contractProduct/update/'+data.id,
    method: 'put',
    data: data
  });
}

/**
 * 产品列表
 *
 * @param data
 */
export function getProductList(params:any) {
  return request({
    url: '/v1/pc/product/product/list',
    method: 'get',
    params
  });
}

/**
 * 删除
 *
 * @param data
 */
export function deleteContractProduct(data: any) {
  return request({
    url: '/v1/pc/product/contractProduct/delete',
    method: 'post',
    data: data
  });
}
/**
 * 生成专属二维码
 *
 * @param data
 */

