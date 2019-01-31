import request from '@/utils/request';

export async function queryAllUsers() {
  return request('/adminapi/system/user/query');
}
