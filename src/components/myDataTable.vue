<template>
    <div class="my-data-table">
        <el-table
            :data="data"
            stripe
            border>
            <el-table-column
                v-for="col in column"
                :key="col.prop"
                :prop="col.prop"
                :label="col.label"
                :width="col.width || ''" />
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'MyDataTable',
    components: {},
    props: {
        // 选项模式
        mode: {
            type: String,
            default: 'props',
            validator (val) {
                return ['props', 'events', 'custom'].indexOf(val) >= 0;
            }
        },
        // 自定义表头数据
        columnData: {
            type: Array,
            default () {
                return [];
            }
        },
        // 列表数据
        data: {
            type: Array,
            default () {
                return [];
            }
        }
    },
    data () {
        return {
            // 表头数据
            column: []
        };
    },
    computed: {},
    watch: {},
    created () {
        // 初始化表头
        this.initListData();
    },
    mounted () {
    },
    methods: {
        /**
         * 功能描述
         * @return:
         * @auther: 张盛鸿
         * @date: 2020-07-17 17:40:48
         */
        initListData () {
            switch (this.mode) {
            case 'props':
                this.column = [
                    { prop: 'name', label: '名称' },
                    { prop: 'desc', label: '描述', width: '300px' },
                    { prop: 'type', label: '数据类型' },
                    { prop: 'default', label: '默认值' },
                    { prop: 'options', label: '可选值' },
                    { prop: 'require', label: '必填', width: '80px' }
                ];
                break;
            case 'events':
                this.column = [
                    { prop: 'name', label: '名称' },
                    { prop: 'desc', label: '描述', width: '500px' }
                ];
                break;
            default:
                this.column = this.columnData.slice();
                break;
            }
        }
    }
};
</script>

<style lang="scss" scoped>

</style>