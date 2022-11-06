<template>
  <ItemMusicTop :playlist="state.playlist" />
  <ItemMusicList :itemList="state.itemList" :subscribedCount="state.playlist.subscribedCount" />
</template>
<script setup>
import { useRoute } from 'vue-router';
import { onMounted, reactive } from 'vue';
import { getMusciItemList, getItemList } from '@/api/api.js';
import ItemMusicTop from '@/components/item/ItemMusicTop.vue';
import ItemMusicList from '@/components/item/ItemMusicList.vue';
const state = reactive({
  playlist: {}, //歌单详情
  itemList: {}, //歌单列表
});
onMounted(async () => {
  let id = useRoute().query.id;
  // console.log(id);
  // 获取歌单详情页
  let res = await getMusciItemList(id);
  // console.log(res);
  state.playlist = res.data.playlist;
  // 获取歌单列表
  let reslist = await getItemList(id);
  // console.log(reslist);
  state.itemList = reslist.data.songs;
  // 防止页面刷新造成数据丢失，将数据保存到sessionStorage中
  sessionStorage.setItem('itemDeatil', JSON.stringify(state));
});
</script>
