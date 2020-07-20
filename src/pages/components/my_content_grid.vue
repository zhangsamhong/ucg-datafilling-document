<template>
    <div class="container">
        <my-title
            text="MyContentGrid组件"
            desc="内容输入/展示表格组件。" />

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
    name: 'MyContentGrid',
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
                    default: '0',
                    options: '',
                    require: '否'
                },
                {
                    name: 'title',
                    desc: '标题文字',
                    type: 'String',
                    default: '',
                    options: '',
                    require: '否'
                },
                {
                    name: 'showToolbar',
                    desc: '是否展示工具栏',
                    type: 'Boolean',
                    default: 'true',
                    options: '',
                    require: '否'
                },
                {
                    name: 'disabled',
                    desc: '是否禁用表单',
                    type: 'Boolean',
                    default: 'false',
                    options: '',
                    require: '否'
                },
                {
                    name: 'formData',
                    desc: '表单数据模型',
                    type: 'Object',
                    default: '{}',
                    options: '',
                    require: '否'
                },
                {
                    name: 'formRules',
                    desc: '表单验证规则',
                    type: 'Object',
                    default: '{}',
                    options: '',
                    require: '否'
                }
            ],
            // events列表数据
            eventsData: [
                {
                    name: 'handleAdd',
                    desc: '点击顶部按钮栏添加按钮时触发的事件'
                },
                {
                    name: 'handleDel',
                    desc: '点击顶部按钮栏批量删除按钮时触发的事件'
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