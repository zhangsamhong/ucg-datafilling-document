<template>
    <div class="container">
        <my-title
            text="MyTitle组件"
            desc="自定义标题组件。" />

        <div class="content-block">
            <div class="title">
                <span>props</span>
            </div>

            <my-data-table
                :data="propsData" />
        </div>

        <div class="content-block">
            <div class="title">
                <span>events</span>
            </div>

            <my-data-table
                :data="eventsData"
                mode="events" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyTitlePage',
    components: {},
    props: {},
    data () {
        return {
            // props列表数据
            propsData: [
                {
                    name: 'topDis',
                    desc: '顶部距离',
                    type: 'Number',
                    default: '15',
                    options: '',
                    require: '否'
                },
                {
                    name: 'btmDis',
                    desc: '底部距离',
                    type: 'Number',
                    default: '15',
                    options: '',
                    require: '否'
                },
                {
                    name: 'mainBorder',
                    desc: '是否展示主标题左边边框',
                    type: 'Boolean',
                    default: 'false',
                    options: '',
                    require: '否'
                },
                {
                    name: 'mainTitle',
                    desc: '主标题的文字内容',
                    type: 'String',
                    default: '',
                    options: '',
                    require: '否'
                },
                {
                    name: 'mainTitleSize',
                    desc: '主标题的字体大小',
                    type: 'Number',
                    default: '18',
                    options: '',
                    require: '否'
                },
                {
                    name: 'tabs',
                    desc: '选项卡项目',
                    type: 'Array',
                    default: '[]',
                    options: '',
                    require: '否'
                },
                {
                    name: 'currentTab',
                    desc: '当前选中的tab的索引',
                    type: 'Number',
                    default: '0',
                    options: '',
                    require: '否'
                },
                {
                    name: 'tabFontSize',
                    desc: '当前tab文字的大小',
                    type: 'Number',
                    default: '16',
                    options: '',
                    require: '否'
                }
            ],
            // events列表数据
            eventsData: [
                {
                    name: 'update:currentTab',
                    desc: 'tabs选项的选择状态发生改变时触发的事件，带有一个参数index（当前选中tab的索引）'
                }
            ]
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