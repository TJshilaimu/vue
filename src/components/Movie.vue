<template>
<div class="movie">
    <div class="img">
      <img :src="list.poster" alt="fengmian">
    </div>
    <div class="content">
      <h1>{{list.name}}</h1>
      <div class="top">
        <p>
          <span>电影名：{{list.ename}} </span>
          <span>类型： {{list.type}} </span>
          <span>上映地区：{{list.area}} </span>
          <span>影片时长：{{list.time}} </span>
          <span>上映时间：{{list.upDate}} </span>
          <span>评分：{{list.score}} </span>

        </p>
      </div>
      <div class="title">
       {{list.intro}}
      </div>
    </div>
</div>
</template>

<script>
   export default {
    props:['list']
 }
</script>

<style scoped>
  .movie{
    width:80%;
    height:250px;
    margin:30px 40px;
    display:flex;
    justify-content: center;
    align-items: center;
    border:1px solid #eee;
    /* background-color: blue; */
  }
  .movie .img{
    width:150px;
    height:200px;
    margin-right:40px;
    margin-left:20px;
    /* background-color: brown; */
  }
  .movie .img img{
    width:100%;
    height:100%;
  }
  .content{
    display: flex;
    height:100%;
    width:calc(100% - 150px);
    flex-direction: column;
    /* justify-content: space-around; */
  }
  .content h1{
    margin-top:20px;
    font-weight:bolder;
  }
  .content .top{
    margin-top:30px;
    color:#aaa;
  }
  .content .top p span{
    display: inline-block;
    margin-left:15px;
  }
  .content .title{
    padding-right:10px;
    margin-top:25px;
    line-height:20px;
    height:100px;
    /* background-color: brown; */
    overflow:hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;

  }

</style>