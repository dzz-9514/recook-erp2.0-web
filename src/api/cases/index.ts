import request from '@/utils/request';
import { AxiosPromise } from 'axios';

/**
 * 获取订单详情
 *
 * @param userId
 */
export function getCompanyCaseForm(userId: number) {
  return request({
    url: '/v1/pc/product/companyCase/detail/' + userId,
    method: 'get'
  });
}

/**
 * 添加用户
 *
 * @param data
 */
export function addCompanyCase(data: any) {
  return request({
    url: '/v1/pc/product/companyCase/create',
    method: 'post',
    data: data
  });
}
/**
 * 修改用户
 *
 * @param data
 */
export function editCompanyCase(data: any) {
  return request({
    url: '/v1/pc/product/companyCase/update/'+data.id,
    method: 'put',
    data: data
  });
}

/**
 * 方案类型列表
 *
 * @param data
 */
export function getCompanyCaseTypeList(params:any) {
  return request({
    url: '/v1/pc/product/companyCaseType/list/',
    method: 'get',
    params
  });
}

/**
 * 删除
 *
 * @param data
 */
export function deleteCompanyCase(data: any) {
  return request({
    url: '/v1/pc/product/companyCase/delete',
    method: 'post',
    data: data
  });
}
/**
 * 生成专属二维码
 *
 * @param data
 */
