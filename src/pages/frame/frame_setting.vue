<template>
    <div class="container">
        <my-title
            text="打包配置"
            desc="webpack的打包配置文件统一放在根目录的build文件夹中，根据环境不同，打包的配置分别有4种，分别是：" />

        <my-code
            code-str="// 公用的基础打包配置
webpack.config.js

// 开发时使用到的打包配置
webpack.dev.js

// 测试时使用到的打包配置
webpack.test.js

// 部署生产环境时的打包配置
webpack.prod.js

// 抽离的loader和plugin配置，方便复用
webpack.utils.js" />

        <div class="content-block">
            <div class="title">
                <span>注意事项</span>
            </div>

            <div class="desc">
                <span>需要注意的地方有以下几点：</span>
                <br>
                <span>1. 部分目录配置有别名，在<span class="important">import</span>的时候可以直接使用；</span>
                <br>
                <img
                    src="../../static/images/frame_setting_attention_1.png"
                    alt="目录别名配置"
                    class="show-img"
                    style="width: 60%">
                <br>
                <my-code
                    code-str="// import时直接使用别名
import Comp from '@components/Comp.vue';" />
                <br>
                <span>2. <span class="important">dev</span>和<span class="important">test</span>命令会生成大量的sourcemap代码到对应css和js文件中，导致打包出来的文件体积巨大；而<span class="important">build</span>命令则不会，打包到生产环境时请注意使用正确的打包命令；</span>
                <br>
                <br>
                <span>3. 路由配置时，注意分包的名称；默认每个页面组件都是通过import()按需引入，且每一个功能模块作为一个单独的分包；</span>
                <br>
                <img
                    src="../../static/images/frame_setting_attention_3.png"
                    alt="路由配置"
                    class="show-img"
                    style="width: 100%">
                <br>
                <span>&nbsp;&nbsp;&nbsp;具体开发可以根据需要分割成不同的包，尤其是功能模块的页面比较多的时候，适当拆分成几个小包可以提高加载速度。</span>
                <br>
                <my-code
                    code-str="// 页面1、2拆分成一个包
const Page1 = () => import(/* webpackChunkName: 'bundle1' */ '@pages/page1.vue');
const Page2 = () => import(/* webpackChunkName: 'bundle1' */ '@pages/page2.vue');

// 页面3、4拆分成另一个包
const Page3 = () => import(/* webpackChunkName: 'bundle2' */ '@pages/page3.vue');
const Page4 = () => import(/* webpackChunkName: 'bundle2' */ '@pages/page4.vue');" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FrameSetting',
    components: {
    },
    props: {
    },
    data () {
        return {
        };
    },
    computed: {},
    watch: {},
    created () {
    },
    mounted () {
    },
    methods: {}
};
</script>

<style lang="scss" scoped>

</style>