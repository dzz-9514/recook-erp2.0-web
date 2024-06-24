import request from '@/utils/request';
import { AxiosPromise } from 'axios';

/**
 * 获取公司统计
 */
export function statistics() {
  return request({
    url: '/v1/pc/agency/statistics/info',
    method: 'get',
  });
}
/**
 * 获取公司业绩统计
 */
export function companyPerformance(params:any) {
  return request({
    url: '/v1/pc/agency/companyPerformance/statistics',
    method: 'get',
    params
  });
}
