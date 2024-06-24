import request from '@/utils/request';
import { AxiosPromise } from 'axios';

/**
 * 获取订单详情
 *
 * @param userId
 */
export function getSolutionTypeForm(userId: number) {
  return request({
    url: '/v1/pc/product/solutionType/detail/' + userId,
    method: 'get'
  });
}

/**
 * 添加用户
 *
 * @param data
 */
export function addSolutionType(data: any) {
  return request({
    url: '/v1/pc/product/solutionType/create',
    method: 'post',
    data: data
  });
}
/**
 * 修改用户
 *
 * @param data
 */
export function editSolutionType(data: any) {
  return request({
    url: '/v1/pc/product/solutionType/update/'+data.id,
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
export function deleteSolutionType(data: any) {
  return request({
    url: '/v1/pc/product/solutionType/delete',
    method: 'post',
    data: data
  });
}
/**
 * 生成专属二维码
 *
 * @param data
 */
