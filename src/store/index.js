import { createStore } from 'vuex';
import { getMusciLyric } from '@/api/api.js';
import { getPhoneLogin } from '@/api/api.js';
export default createStore({
  state: {
    playList: [
      //播放列表默认值
      {
        al: {
          id: 123723319,
          name: '再见莫妮卡',
          pic: 109951165770805060,
          picUrl: 'https://p1.music.126.net/me6QV0CallEOlOP6Zb0b3w==/109951165770805050.jpg',
          pic_str: '109951165770805050',
        },
        id: 1824045033,
        name: '再见莫妮卡',
        ar: [{ name: '彭席彦Franky弗兰奇' }],
      },
    ],
    playListIndex: 0,
    isbtnShow: true, //暂停按钮显示
    detailShow: false, //歌区详情页显示
    lyricList: {}, //歌词
    currentTime: 0, //当前时间
    duration: 0, //歌曲总时长
    isLogin: false, //判断是否登录
    isFooterMusic: true, //判断底部组件是否现实
    token: '',
    user: {},
  },
  getters: {},
  mutations: {
    updateIsbtnShow: function (state, value) {
      state.isbtnShow = value;
    },
    pushPlayList: function (state, value) {
      state.playList.push(value);
    },
    updatePlayList: function (state, value) {
      state.playList = value;
      // console.log(state.playList);
    },
    updatePlayListIndex: function (state, value) {
      state.playListIndex = value;
    },
    updateDetailShow: function (state) {
      state.detailShow = !state.detailShow;
    },
    updateLyricList: function (state, value) {
      state.lyricList = value;
    },
    updateCurrentTime: function (state, value) {
      // console.log(state.currentTime);
      state.currentTime = value;
    },
    updateDuration: function (state, value) {
      state.duration = value;
    },
    updateIsLogin: function (state, value) {
      state.isLogin = true;
    },
    updateToken: function (state, value) {
      state.token = value;
      // 将token保存到local里面
      localStorage.setItem('token', state.token);
    },
    updateUser: function (state, value) {
      state.user = value;
    },
  },
  actions: {
    getLyric: async function (context, value) {
      let res = await getMusciLyric(value);
      // console.log(res);
      context.commit('updateLyricList', res.data.lrc);
    },
    getLogin: async function (context, value) {
      let res = await getPhoneLogin(value);
      // 将登录获取的用户信息存储到sessionStorage中，防止刷新丢失
      sessionStorage.setItem('user', JSON.stringify(res));
      return res;
    },
  },
  modules: {},
});
