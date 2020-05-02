<template>
  <div class="question">
    问题： {{question}}
    <button @click="handleClick('prev')" v-show="myId !== 201801">上一个</button>
    <button @click="handleClick('next')" v-show="myId !== 201803">下一个</button>
  </div>
</template>

<script>
  export default {
    // beforeRouteUpdate(to, from, next) {
    //   const id = to.params.id;
    //   this.getData(id);
    //   next();
    // },
    data() {
      return {
        myId: 0,
        question: '',
        questionList: [{
            questionId: 201801,
            title: "到底什么是es6中的class（类）？怎么实现class（类）？"
          },
          {
            questionId: 201802,
            title: "什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数？"
          },
          {
            questionId: 201803,
            title: "什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？"
          }
        ]
      }
    },
    methods: {
      getData(id) {
        const test = this.questionList.findIndex(item => item.questionId === id);
        if (test !== -1) {
          this.question = this.questionList[test].title;
          this.myId = this.questionList[test].questionId;
        }
      },
      handleClick(type) {
        if (type === 'next') {
          this.$router.push({
            name: 'question',
            params: {
              id: this.$route.params.id + 1
            }
          })
        } else {
          this.$router.push({
            name: 'question',
            params: {
              id: this.$route.params.id - 1
            }
          })
        }
      },
    },

    watch: {
      '$route': {
        handler() {
          const that = this;
          that.getData(+that.$route.params.id);
        },
        immediate: true
      }
    },
    created() {
      // const myId = +this.$route.params.id;
      // this.getData(myId);
    }
  }
</script>

<style scoped>

</style>