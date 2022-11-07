<template>
  <div class="topNav">
    <div class="topleft">
      <svg class="icon" aria-hidden="true" @click="$router.push('/')">
        <use xlink:href="#icon-zhuye"></use>
      </svg>
    </div>

    <div class="topright">
      <svg class="icon" aria-hidden="true" @click="toback">
        <use xlink:href="#icon-tuichu1"></use>
      </svg>
    </div>
  </div>

  <div class="userInfo">
    <img :src="this.user.data.profile.avatarUrl" alt="" class="avatarUrl" />
    <div class="name">{{ this.user.data.profile.nickname }}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    // console.log(this.user);
  },
  methods: {
    // 退出清除token和sessionStorage
    toback: function () {
      window.sessionStorage.clear();
      window.localStorage.clear();
      window.location.reload();
    },
  },
};
</script>

<script setup></script>

<style lang="less" scoped>
.topNav {
  width: 100%;
  height: 1rem;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.userInfo {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .avatarUrl {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .name {
    font-weight: 700;
    font-size: 20px;
  }
}
</style>
