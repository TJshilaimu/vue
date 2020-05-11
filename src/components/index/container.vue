<template>
  <div class="m-istyle">
    <dl :class="navList.class">
      <dt>{{navList.title}}</dt>
      <dd v-for="(item,index) in navList.list" @mouseenter="showClass(item.tab)" :class="{active: type === item.tab}">{{item.text}}
      </dd>
    </dl>
    <ul class="ibody">
      <li v-for="(showItem,index) in goodList[type]" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="showItem.image">
          <div class="cbody">
            <div class="title">{{showItem.title}}</div>
            <div class="sub-title">{{showItem.address}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{showItem.price}}</span>
              </span>
              <span class="sold bottom-right-info">{{showItem.subTitle}}</span>
            </div>
          </div>
        </el-card>
      </li>
      <!-- <li>
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image">
          <div class="cbody">
            <div class="title">新天地</div>
            <div class="sub-title">朝阳门东路</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">118</span>
              </span>
              <span class="sold bottom-right-info">木北造型</span>
            </div>
          </div>
        </el-card>
      </li>
      <li>
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image">
          <div class="cbody">
            <div class="title">新天地</div>
            <div class="sub-title">朝阳门东路</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">118</span>
              </span>
              <span class="sold bottom-right-info">木北造型</span>
            </div>
          </div>
        </el-card>
      </li> -->
    </ul>
  </div>
</template>

<script>
  import api from "@/api/index.js"
  export default {
    props:[
      'navList'
    ],
    data() {
      return {
        type:'all',
        myIndex: 0,
        goodList: []
      }
    },
    created() {

      api.getKeyWord().then(res => {
        // console.log(res)
        this.goodList = res.data.data;
        // console.log(this.goodList);

      })
    },
    methods: {
      showClass(tag) {
        this.type = tag;
      }
    }
  }
</script>

<style lang="scss">
  @import "@/assets/css/index/artistic.scss";

</style>
