<template>
    <div class="container">
        <my-title
            text="依赖安装"
            desc="项目开发需要使用到的包和插件的安装。" />

        <div class="content-block">
            <div class="title">
                <span>安装npm包</span>
            </div>

            <div class="desc">
                <span>推荐使用npm进行安装，不过，也可以使用cnpm进行安装</span>
            </div>

            <my-code
                code-str="// 在项目根目录下执行命令
npm i
或者
cnpm i" />
        </div>

        <div class="content-block">
            <div class="title">
                <span>安装ESlint插件</span>
            </div>

            <div class="desc">
                <span>项目采用ESlint对代码进行检查和规范。如果想全局安装ESlint，请自行手动安装全局的npm包。</span>
                <br>
                <span>为了提高开发效率和养成良好的编码习惯，建议在IDE安装相应的ESlint插件，插件一般能提供友好的错误提示、快速批量修复的功能，非常方便。</span>
                <br>
                <span>VScode建议安装<a
                    href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
                    target="_blank"
                    class="important">ESlint</a>插件和<a
                        href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
                        target="_blank"
                        class="important">Vetur</a>插件（帮助检查vue文件代码），如果是使用其他IDE进行开发，请自行查找相应的插件进行安装。</span>
            </div>
        </div>

        <div class="content-block">
            <div class="title">
                <span>运行或打包项目</span>
            </div>

            <div class="desc">
                <span>依赖安装完毕后，可以运行以下4条命令进行开发或打包：</span>
            </div>

            <my-code
                code-str="// 打开devServer运行项目并进行开发
npm run devServer

// 以开发环境的配置对项目进行打包，会生成sourcemap，方便在开发环境调试问题
npm run dev

// 以生产环境的配置对项目进行打包，会生成sourcemap，方便在准生产环境调试问题
npm run test

// 以生产环境的配置进行打包，不会生成sourcemap，最终放到生产环境时的打包命令
npm run build" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'RelationInstallation',
    components: {
    },
    props: {},
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