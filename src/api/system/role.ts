import request from '@/utils/request';
import { AxiosPromise } from 'axios';

/**
 * 获取角色列表
 */
export function listRoles(params:any) {
  return request({
    url: '/v1/pc/permission/role/list',
    method: 'get',
    params
  });
}
/**
 * 添加角色列表
 */
export function addRoles(data:any) {
  return request({
    url: '/v1/pc/permission/role/create',
    method: 'post',
    data
  });
}
/**
 * 修改角色列表
 */
export function editRoles(data:any) {
  return request({
    url: '/v1/pc/permission/role/update/'+data.id,
    method: 'put',
    data
  });
}
/**
 * 添加角色列表
 */
export function deleteRoles(data:any) {
  return request({
    url: '/v1/pc/permission/role/delete',
    method: 'post',
    data
  });
}
/**
 * 角色详情
 */
export function getRoleForm(id:String) {
  return request({
    url: '/v1/pc/permission/role/detail/'+id,
    method: 'get',
  });
}
/**
 * 角色绑定菜单详情列表
 */
export function getRoleMenu(params:any) {
  return request({
    url: '/v1/pc/permission/roleMenu/list',
    method: 'get',
    params
  });
}
/**
 * 角色绑定菜单提交
 */
export function getRoleUpdate(data:any) {
  return request({
    url: '/v1/pc/permission/roleMenu/update',
    method: 'post',
    data
  });
}