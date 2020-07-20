<template>
    <div class="container">
        <my-title
            text="MyTableRowBtn组件"
            desc="自定义按钮组件，可配置显示确认提示窗，不限于MyTable组件内使用。" />

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
    name: 'MyTableRowBtn',
    components: {},
    props: {},
    data () {
        return {
            // props列表数据
            propsData: [
                {
                    name: 'size',
                    desc: '按钮尺寸',
                    type: 'String',
                    default: 'mini',
                    options: 'medium,small,mini',
                    require: '否'
                },
                {
                    name: 'type',
                    desc: '按钮类型，与element-ui保持一致',
                    type: 'String',
                    default: 'primary',
                    options: 'primary,success,warning,danger,info,text',
                    require: '否'
                },
                {
                    name: 'icon',
                    desc: '按钮的icon',
                    type: 'String',
                    default: '',
                    options: '',
                    require: '否'
                },
                {
                    name: 'text',
                    desc: '按钮显示的文字',
                    type: 'String',
                    default: '',
                    options: '',
                    require: '否'
                },
                {
                    name: 'isRound',
                    desc: '是否圆角按钮',
                    type: 'Boolean',
                    default: 'false',
                    options: '',
                    require: '否'
                },
                {
                    name: 'isCircle',
                    desc: '是否圆形按钮',
                    type: 'Boolean',
                    default: 'false',
                    options: '',
                    require: '否'
                },
                {
                    name: 'isPlain',
                    desc: '是否朴素按钮',
                    type: 'Boolean',
                    default: 'false',
                    options: '',
                    require: '否'
                },
                {
                    name: 'disabled',
                    desc: '是否禁用',
                    type: 'Boolean',
                    default: 'false',
                    options: '',
                    require: '否'
                },
                {
                    name: 'showConfirm',
                    desc: '是否需要确认弹窗',
                    type: 'Boolean',
                    default: 'false',
                    options: '',
                    require: '否'
                },
                {
                    name: 'confirmTips',
                    desc: '确认弹窗显示内容',
                    type: 'String',
                    default: '确定删除该内容吗？',
                    options: '',
                    require: '否'
                },
                {
                    name: 'confirmPlacement',
                    desc: '确认弹窗的显示位置',
                    type: 'String',
                    default: 'top',
                    options: '',
                    require: '否'
                }
            ],
            // events列表数据
            eventsData: [
                {
                    name: 'handleClick',
                    desc: '普通按钮点击事件'
                },
                {
                    name: 'clickConfirm',
                    desc: '点击确认弹窗的确认按钮'
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