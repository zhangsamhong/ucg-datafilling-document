<template>
    <div class="container">
        <my-title
            text="MyContentGridRow组件"
            desc="MyContentGrid组件的项目组件，嵌套到MyContentGrid组件内部使用。" />

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
    name: 'MyContentGridRow',
    components: {},
    props: {},
    data () {
        return {
            // props列表数据
            propsData: [
                {
                    name: 'v-model',
                    desc: '表单项内部输入控件绑定的值',
                    type: 'Any',
                    default: '',
                    options: '',
                    require: '是'
                },
                {
                    name: 'prop',
                    desc: 'FormItem组件的prop',
                    type: 'String',
                    default: '',
                    options: '',
                    require: '否'
                },
                {
                    name: 'labelWidth',
                    desc: 'label的宽度，最大值不能超过24，最小值不能低于0',
                    type: 'Number',
                    default: '3',
                    options: '',
                    require: '否'
                },
                {
                    name: 'label',
                    desc: 'label的内容',
                    type: 'String',
                    default: '',
                    options: '',
                    require: '否'
                },
                {
                    name: 'required',
                    desc: '是否必填字段，设置为true时label会显示红色的“*”',
                    type: 'Boolean',
                    default: 'false',
                    options: '',
                    require: '否'
                },
                {
                    name: 'defaultInputType',
                    desc: '默认的输入框类型',
                    type: 'String',
                    default: 'text',
                    options: 'text,number,textarea,checkbox,radio,select,date,datetime',
                    require: '否'
                },
                {
                    name: 'inputPlaceholder',
                    desc: '输入控件的placeholder',
                    type: 'String',
                    default: '',
                    options: '',
                    require: '否'
                },
                {
                    name: 'optionData',
                    desc: '选项数据，当defaultInputType为checkbox、radio或select时有效',
                    type: 'Array',
                    default: '[]',
                    options: '',
                    require: '否'
                },
                {
                    name: 'multiple',
                    desc: '是否多选',
                    type: 'Boolean',
                    default: 'false',
                    options: '',
                    require: '否'
                },
                {
                    name: 'dateFormat',
                    desc: '时间格式，当defaultInputType为date或datetime时有效',
                    type: 'String',
                    default: 'yyyy年M月d日',
                    options: '',
                    require: '否'
                },
                {
                    name: 'dateValueFormat',
                    desc: '时间值的格式，当defaultInputType为date或datetime时有效',
                    type: 'String',
                    default: 'yyyy-MM-dd',
                    options: '',
                    require: '否'
                },
                {
                    name: 'columnCount',
                    desc: '表格每一行的列数目',
                    type: 'Number',
                    default: '1',
                    options: '1,2,3,4',
                    require: '否'
                },
                {
                    name: 'isHidden',
                    desc: '是否隐藏',
                    type: 'Boolean',
                    default: 'false',
                    options: '',
                    require: '否'
                },
                {
                    name: 'checkItemStyle2',
                    desc: 'checkbox和radio特别（互换）样式，当defaultInputType为checkbox或radio时有效',
                    type: 'Boolean',
                    default: 'false',
                    options: '',
                    require: '否'
                }
            ],
            // events列表数据
            eventsData: [
                {
                    name: 'input',
                    desc: '输入控件输入内容时触发的事件'
                }
            ],
            // slots列表数据
            slotsData: [
                {
                    name: 'default',
                    desc: '自定义内容，当需要使用其他输入控件或不需要输入控件时可提供自定义内容'
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