import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { UserForm, UserInfo, UserPageVO, UserQuery } from './types';

/**
 * 登录成功后获取用户信息（昵称、头像、权限集合和角色集合）
 */
export function getUserInfo(): AxiosPromise {
  return request({
    url: '/v1/pc/user/agency/userInfo',
    method: 'get'
  });
}

/**
 * 获取用户分页列表
 *
 * @param queryParams
 */
export function getUserPage(
  queryParams: UserQuery
): AxiosPromise<PageResult<UserPageVO[]>> {
  return request({
    url: '/api/v1/users/page',
    method: 'get',
    params: queryParams
  });
}

/**
 * 获取用户表单详情
 *
 * @param userId
 */
export function getUserForm(userId: number): AxiosPromise<UserForm> {
  return request({
    url: 'v1/pc/user/staff/detail/' + userId,
    method: 'get'
  });
}

/**
 * 添加用户
 *
 * @param data
 */
export function addUser(data: any) {
  return request({
    url: '/v1/pc/user/staff/create',
    method: 'post',
    data: data
  });
}
/**
 * 修改用户
 *
 * @param data
 */
export function editUser(data: any) {
  return request({
    url: '/v1/pc/user/staff/update/'+data.id,
    method: 'put',
    data: data
  });
}

/**
 * 自定义输入框
 *
 * @param data
 */
export function contentField() {
  return request({
    url: '/v1/pc/user/contentField/list',
    method: 'get',
  });
}

/**
 * 删除
 *
 * @param data
 */
export function deleteUser(data: any) {
  return request({
    url: '/v1/pc/user/staff/delete',
    method: 'post',
    data: data
  });
}
/**
 * 生成专属二维码
 *
 * @param data
 */
export function staffQrCode(data: any) {
  return request({
    url: '/v1/pc/user/staffQrCode/Get',
    method: 'post',
    data: data
  });
}