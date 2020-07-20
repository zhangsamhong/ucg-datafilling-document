<template>
    <div class="container">
        <my-title
            text="MyStaffSelector组件"
            desc="自定义组织架构员工选择组件。" />

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
    name: 'MyStaffSelector',
    components: {},
    props: {},
    data () {
        return {
            // props列表数据
            propsData: [
                {
                    name: 'inputName',
                    desc: 'input输入控件的name值',
                    type: 'String',
                    default: 'staff',
                    options: '',
                    require: '否'
                },
                {
                    name: 'inputClass',
                    desc: 'input输入控件的自定义class',
                    type: 'String',
                    default: '',
                    options: '',
                    require: '否'
                },
                {
                    name: 'inputDisabled',
                    desc: '是否禁用',
                    type: 'Boolean',
                    default: 'false',
                    options: '',
                    require: '否'
                },
                {
                    name: 'inputSuffixIcon',
                    desc: 'input的后置icon',
                    type: 'String',
                    default: 'el-icon-s-custom',
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
                    name: 'inputPrefixIcon',
                    desc: 'input的前置icon',
                    type: 'String',
                    default: '',
                    options: '',
                    require: '否'
                },
                {
                    name: 'inputPlaceholder',
                    desc: 'input的placeholder',
                    type: 'String',
                    default: '请选择',
                    options: '',
                    require: '否'
                },
                {
                    name: 'inputDefaultValue',
                    desc: '输入框默认显示值',
                    type: 'String',
                    default: '',
                    options: '',
                    require: '否'
                },
                {
                    name: 'popTitle',
                    desc: '弹窗的标题',
                    type: 'String',
                    default: '',
                    options: '',
                    require: '否'
                },
                {
                    name: 'popPlacement',
                    desc: '弹框位置',
                    type: 'String',
                    default: 'right',
                    options: '',
                    require: '否'
                },
                {
                    name: 'popWidth',
                    desc: '弹窗宽度，单位px',
                    type: 'Number',
                    default: '700',
                    options: '',
                    require: '否'
                },
                {
                    name: 'popHeight',
                    desc: '弹窗高度，单位px',
                    type: 'Number',
                    default: '650',
                    options: '',
                    require: '否'
                },
                {
                    name: 'popTrigger',
                    desc: '弹窗触发方式',
                    type: 'String',
                    default: 'click',
                    options: 'click,custom',
                    require: '否'
                },
                {
                    name: 'selectMode',
                    desc: '选择模式',
                    type: 'String',
                    default: 'single',
                    options: 'single,multiple',
                    require: '否'
                }
            ],
            // events列表数据
            eventsData: [
                {
                    name: 'onSelected',
                    desc: '确认选择项目后触发的事件，带有一个参数value（当前选择的数据，多选时为数组）'
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