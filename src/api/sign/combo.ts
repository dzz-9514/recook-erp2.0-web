import request from '@/utils/request';
import { AxiosPromise } from 'axios';

/**
 * 获取订单详情
 *
 * @param userId
 */
export function getSetMealForm(userId: number) {
  return request({
    url: '/v1/pc/product/setMeal/detail/' + userId,
    method: 'get'
  });
}

/**
 * 添加用户
 *
 * @param data
 */
export function addSetMeal(data: any) {
  return request({
    url: '/v1/pc/product/setMeal/create',
    method: 'post',
    data: data
  });
}
/**
 * 修改用户
 *
 * @param data
 */
export function editSetMeal(data: any) {
  return request({
    url: '/v1/pc/product/setMeal/update/'+data.id,
    method: 'put',
    data: data
  });
}

/**
 * 方案类型列表
 *
 * @param data
 */
export function getSetMealTypeList(params:any) {
  return request({
    url: '/v1/pc/product/setMealType/list/',
    method: 'get',
    params
  });
}

/**
 * 删除
 *
 * @param data
 */
export function deleteSetMeal(data: any) {
  return request({
    url: '/v1/pc/product/setMeal/delete',
    method: 'post',
    data: data
  });
}
/**
 * 生成专属二维码
 *
 * @param data
 */
