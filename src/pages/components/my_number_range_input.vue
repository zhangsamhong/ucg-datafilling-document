<template>
    <div class="container">
        <my-title
            text="MyNumberRangeInput组件"
            desc="自定义数值范围输入组件，最小值与最大值。" />

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
    name: 'MyNumberRangeInput',
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
                    name: 'size',
                    desc: '输入控件的尺寸类型',
                    type: 'String',
                    default: 'small',
                    options: '',
                    require: '否'
                },
                {
                    name: 'type',
                    desc: '输入控件的类型',
                    type: 'String',
                    default: 'daterange',
                    options: '',
                    require: '否'
                },
                {
                    name: 'rangeSeparator',
                    desc: '分隔符',
                    type: 'String',
                    default: '~',
                    options: '',
                    require: '否'
                },
                {
                    name: 'minPlaceholder',
                    desc: '最小值占位符',
                    type: 'String',
                    default: '最小值',
                    options: '',
                    require: '否'
                },
                {
                    name: 'maxPlaceholder',
                    desc: '最大值占位符',
                    type: 'String',
                    default: '最大值',
                    options: '',
                    require: '否'
                }
            ],
            // events列表数据
            eventsData: [
                {
                    name: 'changeValue',
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