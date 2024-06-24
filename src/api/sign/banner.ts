import request from '@/utils/request';
import { AxiosPromise } from 'axios';

/**
 * 获取订单详情
 *
 * @param userId
 */
export function getBannerForm(userId: number) {
  return request({
    url: '/v1/pc/product/banner/detail/' + userId,
    method: 'get'
  });
}

/**
 * 添加用户
 *
 * @param data
 */
export function addBanner(data: any) {
  return request({
    url: '/v1/pc/product/banner/create',
    method: 'post',
    data: data
  });
}
/**
 * 修改用户
 *
 * @param data
 */
export function editBanner(data: any) {
  return request({
    url: '/v1/pc/product/banner/update/'+data.id,
    method: 'put',
    data: data
  });
}

/**
 * 签约列表
 *
 * @param data
 */
export function getContractProductList(params:any) {
  return request({
    url: '/v1/pc/product/contractProduct/list',
    method: 'get',
    params
  });
}

/**
 * 删除
 *
 * @param data
 */
export function deleteBanner(data: any) {
  return request({
    url: '/v1/pc/product/banner/delete',
    method: 'post',
    data: data
  });
}
/**
 * 生成专属二维码
 *
 * @param data
 */
