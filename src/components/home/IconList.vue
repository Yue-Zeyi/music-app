<!-- 图标列表 -->
<template>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-home-tj"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-home-fm"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-home-gd"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-home-phb"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.iconList {
  margin-top: 10px;
  width: 100%;
  height: 1.6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .iconItem {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>
