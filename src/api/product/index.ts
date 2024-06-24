import request from '@/utils/request';
import { AxiosPromise } from 'axios';

/**
 * 获取订单详情
 *
 * @param userId
 */
export function getProductForm(userId: number) {
  return request({
    url: '/v1/pc/product/product/detail/' + userId,
    method: 'get'
  });
}

/**
 * 添加用户
 *
 * @param data
 */
export function addProduct(data: any) {
  return request({
    url: '/v1/pc/product/product/create',
    method: 'post',
    data: data
  });
}
/**
 * 修改用户
 *
 * @param data
 */
export function editProduct(data: any) {
  return request({
    url: '/v1/pc/product/product/update/'+data.id,
    method: 'put',
    data: data
  });
}

/**
 * 自定义输入框
 *
 * @param data
 */


/**
 * 删除
 *
 * @param data
 */
export function deleteProduct(data: any) {
  return request({
    url: '/v1/pc/product/product/delete',
    method: 'post',
    data: data
  });
}
/**
 * 生成专属二维码
 *
 * @param data
 */
