<template>
  <TopNav />
  <SwpierTpVue />
  <IconList />
  <MusicList />
</template>

<script>
import TopNav from '@/components/home/TopNav.vue';
import SwpierTpVue from '@/components/home/SwpierTop.vue';
import IconList from '@/components/home/IconList.vue';
import MusicList from '@/components/home/MusicList.vue';
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: { TopNav, SwpierTpVue, IconList, MusicList },
};
</script>
