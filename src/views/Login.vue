<template>
  <div class="login">
    <div class="loginTop">登录</div>
    <div class="loginContent">
      <van-field
        type="tel"
        name="phone"
        class="phone"
        v-model="phone"
        placeholder="请输入手机号码"
      />
      <van-field
        type="password"
        name="passworld"
        class="passworld"
        v-model="password"
        placeholder="请输入密码"
      />
      <van-button type="default" class="btn" @click="Login">登录</van-button>
    </div>
  </div>
</template>
<script>
import { getLoginUser } from '@/api/api.js';
export default {
  data() {
    return {
      phone: '',
      password: '',
    };
  },
  methods: {
    Login: async function () {
      let res = await this.$store.dispatch('getLogin', {
        phone: this.phone,
        password: this.password,
      });
      console.log(res);
      if (res.data.code == 200) {
        //登录成功 跳转到个人中心
        this.$store.commit('updateIsLogin', true);
        this.$store.commit('updateToken', res.data.token);
        let result = await getLoginUser(res.data.account.id);
        console.log(result);
        this.$store.commit('updateUser', result);
        console.log();
        this.$router.push('/infoUser');
      } else {
        alert('手机号或者密码错误');
        this.password = '';
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 13.34rem;
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(220, 20, 20);
  .loginTop {
    margin-top: 1rem;
    font-size: 1rem;
    color: #fff;
  }
  .loginContent {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 1rem;
    .phone,
    .passworld {
      width: 5rem;
      height: 1rem;
      border: 0.02rem solid #999;
    }
    .btn {
      width: 2rem;
      height: 0.6rem;
    }
  }
}
</style>
