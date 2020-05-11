<template>
  <div class="province">
    <span class="name">按省份选择：</span>
    <m-select :list="provinceList" title="省份" :value="provinceValue" :showWrapper="showProvinceWrapper"
      @change_input="provinceActive" className="province" @change-name="getProvinceName" />
    <m-select :list="cityList" title="城市" :value="cityValue" :showWrapper="showCityWrapper" @change_input="cityActive"
      :disabled="cityDisabled" />
    <span>直接搜索：</span>
    <template>
      <el-select v-model="value" filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod"
        :loading="loading">
        <el-option v-for="item in searchList" :key="item" :label="item" :value="item">
        </el-option>
      </el-select>
    </template>
  </div>
</template>

<script>
  import MSelect from '@/components/changeCity/select.vue'
  import api from "@/api/index.js"
  export default {
    data() {
      return {
        provinceList:[],
        provinceValue: '省份',
        cityList: [],
        cityValue: '城市',
        showProvinceWrapper: false,
        showCityWrapper: false,
        value: '',
        searchList: ['成都', '南充', '深圳', '西安'],
        loading: false,
        cityDisabled: true
      }
    },
    created() {
      api.getProvince().then(res => {
        // console.log(res.data.data)
        this.provinceList = res.data.data.map((item) => {
          item.name = item.provinceName;
          return item;
        });
        // console.log(this.provinceList)
        this.cityList = res.data.data
      }) .catch(function (error) {
    console.log(error);
  })

    },
    components: {
      MSelect,
    },
    methods: {
      provinceActive(flag) {
        this.showProvinceWrapper = flag;
        if (flag) {
          this.showCityWrapper = false;
        }
      },
      cityActive(flag) {
        this.showCityWrapper = flag;
        if (flag) {
          this.showProvinceWrapper = false;
        }
      },
      getProvinceName(item) {
        this.provinceValue = item.provinceName;
        this.cityDisabled = false;
        this.cityList = item.cityInfoList;
      },
      remoteMethod(e) {
        // 接口调用
        console.log(e);
      }
    }
  }
</script>

<style scoped>

</style>
