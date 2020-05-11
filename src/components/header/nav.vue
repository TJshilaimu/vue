<template>
<div class="m-nav">
    <ul class='nav'>
    <li class="list my">
        <router-link :to="{name: 'my'}" >我的美团</router-link>
        <dl>
            <dd>
                <router-link :to="{path: '/'}">我的订单</router-link>
            </dd>
            <dd>
                 <router-link :to="{path: '/'}">我的收藏</router-link>
            </dd>
            <dd>
                 <router-link :to="{path: '/'}">抵用券</router-link>
            </dd>
            <dd>
                 <router-link :to="{path: '/'}">账户设置</router-link>
            </dd>
        </dl>
    </li>
    <li class="list">
        <router-link :to="{name: 'my'}">手机APP</router-link>
    </li>
    <li class="list bd">
        <router-link :to="{name: 'my'}">商家中心</router-link>
        <dl>
            <dd>
                <router-link :to="{path: '/'}">登录商家中心</router-link>
            </dd>
            <dd>
                 <router-link :to="{path: '/'}">美团智能收银</router-link>
            </dd>
            <dd>
                 <router-link :to="{path: '/'}">我想合作</router-link>
            </dd>
            <dd>
                 <router-link :to="{path: '/'}">账户设置</router-link>
            </dd>
        </dl>
    </li>
    <li class="list"><router-link to="/">网站导航</router-link>
        <div class="subContainer">
            <dl class="hotel">
                <dt>
                    <router-link to="/">酒店旅游</router-link>
                </dt>
                <dd><router-link to="/">我的订单</router-link></dd>
                <dd><router-link to="/">我的收藏</router-link></dd>
                <dd><router-link to="/">抵用券</router-link></dd>
                 <dd><router-link to="/">账户设置</router-link></dd>
            </dl>
            <dl class="food">
                <dt>吃美食</dt>
                <dd>
                    <router-link :to="{path: '/'}">我的订单</router-link>
                </dd>
                <dd>
                    <router-link :to="{path: '/'}">我的收藏</router-link>
                </dd>
                <dd>
                    <router-link :to="{path: '/'}">抵用券</router-link>
                </dd>
                <dd>
                    <router-link :to="{path: '/'}">账户设置</router-link>
                </dd>
            </dl>
            <dl class="movie">
                <dt>看电影</dt>
                <dd>
                    <router-link :to="{path: '/'}">我的订单</router-link>
                </dd>
                <dd>
                    <router-link :to="{path: '/'}">我的收藏</router-link>
                </dd>
                <dd>
                    <router-link :to="{path: '/'}">抵用券</router-link>
                </dd>
                <dd>
                    <router-link :to="{path: '/'}">账户设置</router-link>
                </dd>
            </dl>
            <dl class="app">
                <dt>手机应用</dt>
                <dd>
                        <img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" title="美团app" alt="美团app">
                </dd>
                <dd>
                    <img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" title="美团app" alt="美团app">
            </dd>
             <dd>
                <img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" title="美团app" alt="美团app">
        </dd>
            </dl>
        </div>

    </li>
</ul></div></div>
</template>

<script>
export default {

}
</script>

<style>

</style>
