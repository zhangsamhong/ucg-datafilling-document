<template>
    <div
        v-hljs
        class="my-code">
        <pre><code :class="language">{{ codeStr }}</code></pre>
    </div>
</template>

<script>
import HighlightJS from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
HighlightJS.registerLanguage('javascript', javascript);

export default {
    name: 'MyCode',
    components: {},
    directives: {
        hljs (el) {
            let blocks = el.querySelectorAll('pre code');
            if (blocks && blocks.length) {
                blocks.forEach(block => {
                    HighlightJS.highlightBlock(block);
                });
            }
        }
    },
    props: {
        // 代码文本内容
        codeStr: {
            type: String,
            default: ''
        },
        // 语言类型
        language: {
            type: String,
            default: 'javascript'
        }
    },
    data () {
        return {
        };
    },
    computed: {
    },
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

.my-code {
    width: 100%;
    overflow: hidden;

    pre {
        margin: 0;
    }

    code {
        box-sizing: border-box;
        padding: 10px 15px;
        line-height: 1.8;
        border-radius: 3px;
        border: 1px solid $border-color;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, .08);
    }
}
</style>