<template>
    <div class="container">
        <my-title
            text="目录结构"
            desc="项目根目录结构情况。" />

        <div class="tree-box show-area">
            <el-tree
                :data="dirList"
                :props="propName">
                <span
                    slot-scope="{node, data}"
                    class="custom-tree-node">
                    <span>{{ node.label }}</span>
                    <span class="desc">
                        {{ data.desc || '' }}
                    </span>
                </span>
            </el-tree>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DirectoryStructure',
    components: {},
    props: {},
    data () {
        return {
            dirList: [
                {
                    label: 'build',
                    desc: '// webpack打包的配置文件',
                    children: [
                        {
                            label: 'webpack.config.js',
                            desc: '// 基础公用打包配置'
                        },
                        {
                            label: 'webpack.dev.js',
                            desc: '// 开发环境打包配置，会打开dev-server'
                        },
                        {
                            label: 'webpack.prod.js',
                            desc: '// 生产环境打包配置'
                        },
                        {
                            label: 'webpack.test.js',
                            desc: '// 测试环境打包配置，跟dev的配置接近，但不打开dev-server'
                        },
                        {
                            label: 'webpack.utils.js',
                            desc: '// 公用的loader和plugin定义配置，方便复用'
                        }
                    ]
                },
                {
                    label: 'dist',
                    desc: '// 打包后生成文件的所在目录'
                },
                {
                    label: 'src',
                    desc: '// 项目核心代码所在目录',
                    children: [
                        {
                            label: 'components',
                            desc: '// 项目公用组件目录'
                        },
                        {
                            label: 'entries',
                            desc: '// 打包入口文件目录'
                        },
                        {
                            label: 'modules',
                            desc: '// 公用js模块和类库目录'
                        },
                        {
                            label: 'pages',
                            desc: '// vue页面文件目录'
                        },
                        {
                            label: 'routes',
                            desc: '// 路由配置目录'
                        },
                        {
                            label: 'styles',
                            desc: '// 样式文件目录'
                        },
                        {
                            label: 'templates',
                            desc: '// 打包生成html文件模板目录'
                        },
                        {
                            label: 'app.vue',
                            desc: '// 项目根组件'
                        }
                    ]
                },
                {
                    label: '.babelrc',
                    desc: '// babel配置文件'
                },
                {
                    label: '.eslintignore',
                    desc: '// eslint忽略配置文件'
                },
                {
                    label: '.eslintrc.js',
                    desc: '// eslint检查规则配置文件'
                },
                {
                    label: '.gitignore',
                    desc: '// git仓库忽略配置文件'
                },
                {
                    label: 'package.json'
                },
                {
                    label: 'postcss.config.js',
                    desc: '// postcss配置文件，主要用到autoprefixer插件'
                },
                {
                    label: 'web-config.js',
                    desc: '// 网络请求配置文件，定义不同环境的请求配置'
                }
            ],
            propName: {
                label: 'label',
                children: 'children'
            }
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
    @import '@styles/variables.scss';

    .tree-box {
        margin: 15px 0;
        border: 1px solid $border-color;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, .08);

        .el-tree {
            background-color: transparent;

            .custom-tree-node {
                flex: 1;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .desc {
                    color: #CCC;
                    font-size: 13px;
                }
            }
        }
    }
</style>