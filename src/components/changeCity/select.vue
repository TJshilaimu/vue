<template>
  <div :class="['choose-wrap', disabled ? 'disabled' : '']" @click="showWrap" v-document-click="documentClick">
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true,'active':showWrapper}">
        <h2>{{title}}</h2>
        <div class="wrapper">
          <div class="col" v-for="items in colList">
            <span :class="{'mt-item': true,'active' : item.provinceName === value}" v-for="item in items" @click="change(item)">{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // showWrapper: false
      }
    },
    props: [
      'list',
      'title',
      'value',
      'disabled',

      'showWrapper'
    ],
    computed: {

      colList() {
        let length = this.list.length;
        let colNum = Math.ceil(length / 12);
        let result = [];
        for (let i = 0; i < colNum; i++) {
          result.push(this.list.slice(i * 12, i * 12 + 12))
        }
        return result;
      }
    },
    methods: {
      documentClick() {
        // this.showWrapper = false;

        this.$emit('change_input', false);
        // console.log('cc')
      },
      showWrap(e) {
        e.stopPropagation()
        // this.showWrapper = true;
        if(!this.disabled){
          this.$emit('change_input', true);
        }

      },
      change(item){
        this.$emit('change-name',item);
      }
    }

  }
</script>

<style lang="scss">
  @import '@/assets/css/changeCity/select.scss';

</style>
