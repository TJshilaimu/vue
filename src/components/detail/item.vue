<template>
    <dl class="s-item">
      <dt>
        <img :src="list.image" alt="图片">
      </dt>
      <dd>
        <h3>
            <router-link to="/">{{list.title}}</router-link>
          </h3>
          <p>
            <el-rate v-model="list.score" disabled show-score text-color="#ff9900" score-template="{value}">
            </el-rate>
            <span>{{ list.score> 4.6 ? '很好' : list.score > 4 ? '好' : '一般' }}</span>
            <span>{{ list.score ? list.score : 0 }}分</span>
            <span class="s-item-comment-total"> {{list.commentNum}}人评论</span>
          </p>
          <p>
            <span  class="s-item-tab">
              <span  v-for="(v,i) in list.tab" :key="i">
                {{v+ (i < list.tab.length - 1? '|' : '') }}
              </span> 
              <span>{{list.address}}</span>
            </span>
             
         <span>
             <a href="/">
                <i class="el-icon-location"></i>
                查看地图
            </a>
         </span>
         <span class="s-item-price">人均￥ {{list.avgPrice}}</span>
            </p>
            <ul class="deal-items">
                <li class="items" v-for="(item,index) in list.dealItems" :key="index">
                    <p class="deal-title">
                        {{item.title}}
                    </p>
                    <p>
                        <span class="deal-price">
                            ￥{{item.price}}
                        </span>
                        <span class="deal-old-price">门市价￥{{item.counterPrice}}</span>
                          <span class="deal-sales">已售{{item.saleNum}}</span>
                    </p>
                </li>
            </ul>
      </dd>
    </dl>

</template>

<script>
  export default {
    props:[
      'list'
    ],
    data() {
      return {
        value: 3.7
      }
    }
  }
</script>

<style scoped>

</style>
