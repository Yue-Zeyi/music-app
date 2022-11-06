import { Swipe, SwipeItem, Button, Popup, Field, CellGroup } from 'vant';
// 组件全部放到一个数组中
let plugins = [Swipe, SwipeItem, Button, Popup, Field, CellGroup];
// 循环拿到每个组件
export default function getVant(app) {
  plugins.forEach((item) => {
    return app.use(item);
  });
}
