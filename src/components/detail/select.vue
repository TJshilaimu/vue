<template>
<div class="m-product-select">
    <dl class="tab">
        <dt>
            {{title}}
            <i class="el-icon-caret-bottom"></i>
        </dt>
        <dd class="select-title">
            <dt>{{title}}</dt>
            <span v-for="item in list" :key="item.id">{{item.name}}</span>
        </dd>
    </dl>
</div>
</template>

<script>
   export default {
props:[
    'title',
    'list'
]
 }
</script>

<style scoped>

</style>