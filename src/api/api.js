import service from '.';

// 首页轮播图
export function getBanner() {
  return service({
    method: 'GEt',
    url: '/banner?type=2',
  });
}
// 获取发现好歌单
export function getGedan() {
  return service({
    method: 'GEt',
    url: '/personalized?limit=10',
  });
}
// 获取歌单详情页
export function getMusciItemList(id) {
  return service({
    method: 'GET',
    url: `/playlist/detail?id=${id}`,
  });
}
// 获取歌单列表
export function getItemList(id) {
  return service({
    method: 'GET',
    url: `/playlist/track/all?id=${id}&limit=20&offset=0`,
  });
}
// 获取歌词
export function getMusciLyric(id) {
  return service({
    method: 'GET',
    url: `/lyric?id=${id}`,
  });
}
// 获取搜索数据/search?keywords=海阔天空
export function getSearchMusic(data) {
  return service({
    method: 'GET',
    url: `/search?keywords=${data}`,
  });
}
// 登录
export function getPhoneLogin(data) {
  return service({
    method: 'GET',
    url: `/login/cellphone?phone=${data.phone}&password=${data.password}`,
  });
}
// 获取用户详情
export function getLoginUser(data) {
  return service({
    method: 'GET',
    url: `/user/detail?uid=${data}`,
  });
}
