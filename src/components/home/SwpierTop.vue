<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script setup>
import { getBanner } from '@/api/api.js';
import { onMounted, reactive } from 'vue';
const state = reactive({
  images: [
    'https://unpkg.com/@vant/assets/apple-1.jpeg',
    'https://unpkg.com/@vant/assets/apple-2.jpeg',
  ],
});
onMounted(async () => {
  // axios.get('http://localhost:3000/banner?type=2').then((res) => {
  //   console.log(res);
  //   state.images = res.data.banners;
  //   console.log(state.images);
  // });
  let res = await getBanner();
  // console.log(res);
  state.images = res.data.banners;
});
</script>

<style lang="less">
#swiperTop {
  .van-swipe {
    width: 100%;
    height: 3rem;
    .van-swipe-item {
      padding: 0 0.2rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
      }
    }
    .van-swipe__indicator--active {
      background-color: rgb(219, 130, 130);
    }
  }
}
</style>
