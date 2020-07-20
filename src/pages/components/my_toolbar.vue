<template>
    <div class="container">
        <my-title
            text="MyToolbar组件"
            desc="顶部栏组件，默认展示添加和批量删除按钮，可自定义展示内容。" />

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

        <div class="content-block">
            <div class="title">
                <span>slots</span>
            </div>

            <my-data-table
                :data="slotsData"
                mode="events" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyToolbar',
    components: {},
    props: {},
    data () {
        return {
            // props列表数据
            propsData: [
                {
                    name: 'title',
                    desc: '标题文字，如果提供该值，则不会显示按钮栏的内容',
                    type: 'String',
                    default: '',
                    options: '',
                    require: '否'
                },
                {
                    name: 'addBtn',
                    desc: '是否显示添加按钮',
                    type: 'Boolean',
                    default: 'true',
                    options: '',
                    require: '否'
                },
                {
                    name: 'delBtn',
                    desc: '是否显示删除按钮',
                    type: 'Boolean',
                    default: 'true',
                    options: '',
                    require: '否'
                },
                {
                    name: 'cancelBtn',
                    desc: '是否显示取消按钮',
                    type: 'Boolean',
                    default: 'false',
                    options: '',
                    require: '否'
                },
                {
                    name: 'border',
                    desc: '是否有边框',
                    type: 'Boolean',
                    default: 'false',
                    options: '',
                    require: '否'
                }
            ],
            // events列表数据
            eventsData: [
                {
                    name: 'handleAdd',
                    desc: '点击添加按钮时触发的事件'
                },
                {
                    name: 'handleDel',
                    desc: '点击批量删除按钮时触发的事件'
                },
                {
                    name: 'handleCancel',
                    desc: '点击取消按钮时触发的事件'
                }
            ],
            // slots列表数据
            slotsData: [
                {
                    name: 'customToolbar',
                    desc: '自定义Toolbar的内容'
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