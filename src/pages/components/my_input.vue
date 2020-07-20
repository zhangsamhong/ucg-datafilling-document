<template>
    <div class="container">
        <my-title
            text="MyInput组件"
            desc="自定义输入组件。" />

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
    name: 'MyInput',
    components: {},
    props: {},
    data () {
        return {
            // props列表数据
            propsData: [
                {
                    name: 'v-model',
                    desc: '输入控件绑定的值',
                    type: 'Any',
                    default: '',
                    options: '',
                    require: '是'
                },
                {
                    name: 'defaultValue',
                    desc: '输入控件的默认值',
                    type: 'Any',
                    default: '',
                    options: '',
                    require: '否'
                },
                {
                    name: 'size',
                    desc: '输入控件的尺寸类型',
                    type: 'String',
                    default: '',
                    options: '',
                    require: '否'
                },
                {
                    name: 'searchType',
                    desc: '输入控件的类型',
                    type: 'String',
                    default: 'input',
                    options: 'input,select,cascade(多级下拉),number,date,year,dateRange,dateTimeRangeSeperate(开始时间与结束时间分开选择),numberRange(数值范围，最小值与最大值)',
                    require: '否'
                },
                {
                    name: 'optionUrl',
                    desc: '下拉选框远程数据地址',
                    type: 'String',
                    default: '',
                    options: '',
                    require: '否'
                },
                {
                    name: 'optionData',
                    desc: '下拉选框选项数据',
                    type: 'Array',
                    default: '[]',
                    options: '',
                    require: '否'
                },
                {
                    name: 'optionDictCode',
                    desc: '下拉选框数据字典的code',
                    type: 'String',
                    default: '',
                    options: '',
                    require: '否'
                },
                {
                    name: 'optionLabel',
                    desc: '下拉数据label的键名',
                    type: 'String',
                    default: 'name',
                    options: '',
                    require: '否'
                },
                {
                    name: 'optionKey',
                    desc: '下拉数据key的键名',
                    type: 'String',
                    default: 'code',
                    options: '',
                    require: '否'
                },
                {
                    name: 'dateTimeFormat',
                    desc: '时间选择格式字符串',
                    type: 'String',
                    default: '',
                    options: '',
                    require: '否'
                }
            ],
            // events列表数据
            eventsData: [
                {
                    name: 'myChange',
                    desc: '绑定的值发生改变时触发的事件，带一个参数value（最新的绑定值）'
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