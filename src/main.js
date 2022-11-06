import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import getVant from './plugins';
// // 引入vant
// import { Button } from 'vant';
const app = createApp(App);
// app.use(Button);
// 使用这个函数
getVant(app);
app.use(store).use(router).mount('#app');
