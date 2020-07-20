<template>
    <div class="container">
        <my-title
            text="MyDialog组件"
            desc="自定义弹窗组件。" />

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
    name: 'MyDialog',
    components: {},
    props: {},
    data () {
        return {
            // props列表数据
            propsData: [
                {
                    name: 'show',
                    desc: '控制弹窗的显示隐藏，子组件引用时可配合.sync修饰符使用',
                    type: 'Boolean',
                    default: 'false',
                    options: '',
                    require: '否'
                },
                {
                    name: 'showTitle',
                    desc: '是否显示标题',
                    type: 'Boolean',
                    default: 'true',
                    options: '',
                    require: '否'
                },
                {
                    name: 'title',
                    desc: '标题的文字内容',
                    type: 'String',
                    default: '',
                    options: '',
                    require: '否'
                },
                {
                    name: 'showClose',
                    desc: '是否显示右上角关闭按钮',
                    type: 'Boolean',
                    default: 'true',
                    options: '',
                    require: '否'
                },
                {
                    name: 'showFooter',
                    desc: '是否显示底部按钮',
                    type: 'Boolean',
                    default: 'true',
                    options: '',
                    require: '否'
                },
                {
                    name: 'saveBtn',
                    desc: '是否显示保存按钮',
                    type: 'Boolean',
                    default: 'true',
                    options: '',
                    require: '否'
                },
                {
                    name: 'saveBtnText',
                    desc: '保存按钮显示文字',
                    type: 'String',
                    default: '保存',
                    options: '',
                    require: '否'
                },
                {
                    name: 'cancelBtnText',
                    desc: '取消按钮显示文字',
                    type: 'String',
                    default: '取消',
                    options: '',
                    require: '否'
                },
                {
                    name: 'noForm',
                    desc: '是否不渲染表单',
                    type: 'Boolean',
                    default: 'false',
                    options: '',
                    require: '否'
                },
                {
                    name: 'validate',
                    desc: '是否校验表单数据',
                    type: 'Boolean',
                    default: 'true',
                    options: '',
                    require: '否'
                },
                {
                    name: 'model',
                    desc: '表单数据模型',
                    type: 'Object',
                    default: '{}',
                    options: '',
                    require: '否'
                },
                {
                    name: 'rules',
                    desc: '是否校验表单数据',
                    type: 'Object',
                    default: '{}',
                    options: '',
                    require: '否'
                },
                {
                    name: 'formLabelWidth',
                    desc: '表单项label的宽度',
                    type: 'String',
                    default: '0px',
                    options: '',
                    require: '否'
                },
                {
                    name: 'formDisabled',
                    desc: '是否禁用表单',
                    type: 'Boolean',
                    default: 'false',
                    options: '',
                    require: '否'
                },
                {
                    name: 'formLabelPosition',
                    desc: '表单label的位置',
                    type: 'String',
                    default: 'left',
                    options: '',
                    require: '否'
                },
                {
                    name: 'width',
                    desc: '弹窗宽度',
                    type: 'String',
                    default: '50%',
                    options: '',
                    require: '否'
                },
                {
                    name: 'customClass',
                    desc: '自定义样式',
                    type: 'String',
                    default: '',
                    options: '',
                    require: '否'
                },
                {
                    name: 'top',
                    desc: '弹窗距离浏览器顶部的距离。弹窗的最大高度会根据top的值自动计算，超出时进行滚动。',
                    type: 'String',
                    default: '10vh',
                    options: '5vh,10vh,15vh,20vh,25vh,30vh,35vh,40vh,45vh',
                    require: '否'
                },
                {
                    name: 'appendToBody',
                    desc: '是否渲染到body元素内',
                    type: 'Boolean',
                    default: 'false',
                    options: '',
                    require: '否'
                },
                {
                    name: 'loading',
                    desc: '弹窗的加载状态',
                    type: 'Boolean',
                    default: 'false',
                    options: '',
                    require: '否'
                },
                {
                    name: 'appendToBody',
                    desc: 'bodyScroll',
                    type: 'Boolean',
                    default: 'false',
                    options: '',
                    require: '否'
                }
            ],
            // events列表数据
            eventsData: [
                {
                    name: 'update:show',
                    desc: '弹窗关闭时触发的事件，子组件使用show.sync时可以不用监听'
                },
                {
                    name: 'handleSave',
                    desc: '点击保存按钮时触发的事件'
                },
                {
                    name: 'handleCancel',
                    desc: '点击取消按钮时触发的事件'
                },
                {
                    name: 'open',
                    desc: '弹窗打开时触发的事件'
                },
                {
                    name: 'opened',
                    desc: '弹窗打开后触发的事件'
                },
                {
                    name: 'close',
                    desc: '弹窗关闭时触发的事件'
                },
                {
                    name: 'closed',
                    desc: '弹窗关闭后触发的事件'
                }
            ],
            // slots列表数据
            slotsData: [
                {
                    name: 'default',
                    desc: '弹窗的内容'
                },
                {
                    name: 'title',
                    desc: '自定义标题的内容，如果不提供则显示默认的标题栏'
                },
                {
                    name: 'footer',
                    desc: '自定义底部的内容，如果不提供则显示默认的按钮栏'
                },
                {
                    name: 'actBtnsBefore',
                    desc: '底部按钮的前置内容'
                },
                {
                    name: 'actBtnsBetween',
                    desc: '底部按钮的中间内容'
                },
                {
                    name: 'actBtnsAfter',
                    desc: '底部按钮的尾部内容'
                },
                {
                    name: 'extendsFooter',
                    desc: '底部栏之后的自定义内容'
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