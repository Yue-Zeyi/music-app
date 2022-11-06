<template>
  <div class="serchTop">
    <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
      <use xlink:href="#icon-zuojiantou"></use>
    </svg>
    <input type="text" placeholder="陈奕迅" v-model="searchKey" @keydown.enter="enterKey" />
  </div>
  <div class="searchHistory">
    <span class="searchSpan"> 历史</span>
    <span v-for="item in keyWorldList" :key="item" class="spanKey" @click="searchHistory(item)">{{
      item
    }}</span>
    <svg class="icon" aria-hidden="true" @click="delHistory">
      <use xlink:href="#icon-shanchu"></use>
    </svg>
  </div>
  <div class="itemList">
    <div class="item" v-for="(item, i) in searchList" :key="i">
      <div class="itemLeft" @click="updateIndex(item)">
        <span class="leftSpan">{{ i + 1 }}</span>
        <div>
          <p>{{ item.name }}</p>
          <span v-for="(item1, index) in item.ar" :key="index">{{ item1.name }}</span>
        </div>
      </div>
      <div class="itemRight">
        <svg class="icon bofang" aria-hidden="true" v-if="item.mv != 0">
          <use xlink:href="#icon-bofang3"></use>
        </svg>
        <svg class="icon liebiao" aria-hidden="true">
          <use xlink:href="#icon-caidan1"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { getSearchMusic } from '@/api/api.js';
export default {
  data() {
    return {
      keyWorldList: [],
      searchKey: '',
      searchList: [],
    };
  },
  mounted() {
    this.keyWorldList = JSON.parse(localStorage.getItem('keyWorldList'))
      ? JSON.parse(localStorage.getItem('keyWorldList'))
      : [];
  },
  methods: {
    enterKey: async function () {
      if (this.searchKey != '') {
        this.keyWorldList.unshift(this.searchKey);
        //   去重
        this.keyWorldList = [...new Set(this.keyWorldList)];
        //   console.log(new Set(this.keyWorldList));
        // 固定长度
        if (this.keyWorldList.length > 10) {
          this.keyWorldList.splice(this.keyWorldList.length - 1, 1);
        }
        localStorage.setItem('keyWorldList', JSON.stringify(this.keyWorldList));
        let { data: res } = await getSearchMusic(this.searchKey);
        // console.log(res);
        this.searchList = res.result.songs;
        console.log(this.searchList);
        this.searchKey = '';
      }
    },
    delHistory: function () {
      localStorage.removeItem('keyWorldList');
      this.keyWorldList = [];
    },
    searchHistory: async function (item) {
      let { data: res } = await getSearchMusic(item);
      console.log(res);
      this.searchList = res.result.songs;

      //   this.searchList = res.result.songs;
    },
    updateIndex: function (item) {
      this.$store.commit('pushPlayList', item);
      this.$store.commit('updatePlayListIndex', this.$store.state.playList.length - 1);
    },
  },
};
</script>

<style lang="less" scoped>
.serchTop {
  width: 100%;
  height: 1rem;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  input {
    margin-left: 20px;
    border: none;
    border-bottom: 1px solid #999;
    width: 88%;
    padding: 0.1rem;
  }
}
.searchHistory {
  width: 100%;
  padding: 0.2rem;
  .searchSpan {
    font-weight: 700;
  }
  .spanKey {
    font-size: 0.2rem;
    background-color: rgb(202, 202, 202);
    padding: 5px 10px;
    border-radius: 0.4rem;
    margin: 0.1rem 0.2rem;
    display: inline-block;
  }
  .icon {
    width: 18px;
    height: 18px;
    position: absolute;
    right: 10px;
  }
}
.itemList {
  padding: 10px;
  width: 100%;
  padding-bottom: 1.2rem;
  .item {
    width: 100%;
    height: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .itemLeft {
      width: 85%;
      height: 100%;
      display: flex;
      align-items: center;
      .leftSpan {
        display: inline-block;
        width: 0.2rem;
        text-align: center;
      }
      div {
        p {
          width: 4.54rem;
          height: 0.4rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 700;
        }
        span {
          font-weight: 400;
          font-size: 0.24rem;
          color: #999;
        }
        margin-left: 0.3rem;
      }
    }
    .itemRight {
      width: 20%;
      height: 100%;
      display: flex;
      // justify-content: space-between;
      align-items: center;
      position: relative;
      .icon {
        fill: #999;
      }
      .bofang {
        position: absolute;
        left: 0;
      }
      .liebiao {
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>
