<template>
  <div class="userInfo">
    <img :src="user.data.profile.avatarUrl" alt="" class="avatarUrl" />
    <div class="name">{{ user.data.profile.nickname }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['user']),
  },
  mounted() {
    console.log(this.user);
  },
};
</script>

<style lang="less" scoped>
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
