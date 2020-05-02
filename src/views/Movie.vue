<template>
<div class="movie">
    <movie  v-for = " list in movieList":key="list._id" :list="list"></movie>


</div>
</template>

<script>
  import Movie from '../components/Movie';
  import { mapState } from 'vuex';
  import axios from 'axios'
   export default {
     components:{
       Movie,
     },
     computed:{
       ...mapState(['movieList'])
      //  movieList(){
      //    return this.$store.state.movieList
      //  }
     },
     created(){

     }

 }
</script>

<style scoped>

</style>