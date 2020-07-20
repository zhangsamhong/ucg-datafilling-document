<template>
    <div class="my-title">
        <div class="main-text">
            <span>{{ text }}</span>
        </div>
        <div
            v-if="desc"
            class="desc">
            <span>{{ desc }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyTitle',
    components: {},
    props: {
        // 标题的文字内容
        text: {
            type: String,
            default: ''
        },
        // 标题描述
        desc: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
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
    @import '@styles/variables.scss';

    .my-title {
        .main-text {
            font-size: 20px;
            line-height: 30px;
            margin-bottom: 5px;
        }

        .desc {
            margin-top: 5px;
            font-size: 14px;
            color: $sub-font-color;
            line-height: 1.8;
        }
    }
</style>