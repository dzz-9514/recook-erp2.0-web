import request from '@/utils/request';
import { AxiosPromise } from 'axios';

/**
 * 获取订单详情
 *
 * @param userId
 */
export function getSolutionForm(userId: number) {
  return request({
    url: '/v1/pc/product/solution/detail/' + userId,
    method: 'get'
  });
}

/**
 * 添加用户
 *
 * @param data
 */
export function addSolution(data: any) {
  return request({
    url: '/v1/pc/product/solution/create',
    method: 'post',
    data: data
  });
}
/**
 * 修改用户
 *
 * @param data
 */
export function editSolution(data: any) {
  return request({
    url: '/v1/pc/product/solution/update/'+data.id,
    method: 'put',
    data: data
  });
}

/**
 * 方案类型列表
 *
 * @param data
 */
export function getSolutionTypeList(params:any) {
  return request({
    url: '/v1/pc/product/solutionType/list/',
    method: 'get',
    params
  });
}

/**
 * 删除
 *
 * @param data
 */
export function deleteSolution(data: any) {
  return request({
    url: '/v1/pc/product/solution/delete',
    method: 'post',
    data: data
  });
}
/**
 * 生成专属二维码
 *
 * @param data
 */
