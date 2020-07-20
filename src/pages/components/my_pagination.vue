<template>
    <div class="container">
        <my-title
            text="MyPagination组件"
            desc="自定义分页组件，常用与MyTable组件配合实现分页列表。" />

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
    name: 'MyPagination',
    components: {},
    props: {},
    data () {
        return {
            // props列表数据
            propsData: [
                {
                    name: 'total',
                    desc: '数据总条数',
                    type: 'Number',
                    default: '',
                    options: '',
                    require: '是'
                },
                {
                    name: 'size',
                    desc: '每页数据量',
                    type: 'Number',
                    default: '10',
                    options: '',
                    require: '否'
                }
            ],
            // events列表数据
            eventsData: [
                {
                    name: 'sizeChange',
                    desc: '每页数据量发生改变时触发，带一个参数size（最新的每页数据量值）'
                },
                {
                    name: 'currentChange',
                    desc: '当前页码发生改变时触发，带一个参数page（最新的页码值）'
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