<template>
    <el-container
        class="main-container">
        <el-header
            :height="`${headerHeight}px`">
            <span
                class="title"
                :underline="false">
                <i class="el-icon-notebook-1"></i>
                数据填报中心&nbsp;-&nbsp;前端开发文档
            </span>
        </el-header>
        <el-container
            class="content-area"
            :style="{height: `calc(100% - ${headerHeight}px)`}">
            <el-aside
                ref="asideBar"
                :width="`${menuWidth}px`">
                <div
                    ref="searchInput"
                    class="search-input">
                    <el-input
                        v-model="searchKey"
                        type="text"
                        prefix-icon="el-icon-search"
                        size="mini"
                        placeholder="请输入搜索关键词"
                        clearable
                        @input="searchMenus" />
                </div>
                <div
                    class="menu-box"
                    :style="{top: `${searchHeight}px`, width: `${menuWidth - 50}px`}">
                    <template
                        v-for="menu in menus">
                        <div
                            v-if="!menu.disabled"
                            :key="menu.code"
                            class="block">
                            <div
                                class="header"
                                :class="{'hide': menu.hide}">
                                <span>{{ menu.name }}</span>
                            </div>
                            <template
                                v-for="child in menu.children">
                                <template
                                    v-if="!child.disabled">
                                    <div
                                        v-if="child.label"
                                        :key="child.code"
                                        class="label"
                                        :class="{'hide': child.hide}">
                                        <span>{{ child.name }}</span>
                                    </div>
                                    <div
                                        v-else
                                        :key="child.code"
                                        class="links"
                                        :class="{'hide': child.hide}">
                                        <div class="item">
                                            <el-link
                                                :class="{'brand-font-color': checkCurrentMenu(child.route)}"
                                                :underline="false"
                                                @click="goToRoute(child.route)">
                                                {{ child.name }}
                                            </el-link>
                                        </div>
                                    </div>
                                </template>
                            </template>
                        </div>
                    </template>
                </div>
            </el-aside>
            <el-main>
                <div class="main-content">
                    <router-view />
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import menuData from './menus/main';

export default {
    name: 'App',
    components: {},
    props: {},
    data () {
        return {
            headerHeight: 60,
            menuWidth: 300,
            searchHeight: 0,
            searchKey: null,
            menus: [],
            currentRoute: ''
        };
    },
    computed: {},
    watch: {},
    created () {
        // 初始化搜索定时器id
        this.searchTimer = null;
        // 初始化菜单数据
        const menus = menuData.slice();
        this.initMenuShowStatus(menus);
        this.menus = menus;
    },
    mounted () {
        // 获取搜索输入框的高度
        if (this.$refs.searchInput) {
            this.searchHeight = this.$refs.searchInput.offsetHeight;
        }

        // 监听路由
        this.$router.afterEach((to, from) => {
            this.currentRoute = to.path || '';
        });
    },
    methods: {
        /**
         * 搜索菜单
         *
         * @return:
         * @auther: 张盛鸿
         * @date: 2020-07-10 17:24:37
         */
        searchMenus () {
            //
            if (this.searchTimer) {
                clearTimeout(this.searchTimer);
            }
            this.searchTimer = setTimeout(() => {
                this.menus.forEach(menu => {
                    if (!this.searchKey) {
                        if (menu.children) menu.children = menu.children.map(item => ({ ...item, hide: false }));
                        menu.hide = false;
                    } else {
                        let showTag = true;
                        if (menu.children) {
                            menu.children = menu.children.map(item => {
                                if (item.label) {
                                    return { ...item, hide: true };
                                }
                                const res = item.name.indexOf(this.searchKey) >= 0;
                                if (res) showTag = false;
                                return { ...item, hide: !res };
                            });
                        }
                        menu.hide = showTag;
                    }
                });
            }, 100);
        },
        /**
         * 跳转到指定路由
         *
         * @param: path{String}
         * @return:
         * @auther: 张盛鸿
         * @date: 2020-07-10 11:18:42
         */
        goToRoute (path) {
            if (path) {
                this.$router.push({
                    path
                });
            }
        },
        /**
         * 初始化菜单数据显示状态
         *
         * @param: menu{Object} 菜单项对象
         * @return: Array
         * @auther: 张盛鸿
         * @date: 2020-07-10 17:52:53
         */
        initMenuShowStatus (menu) {
            if (Array.isArray(menu)) {
                menu.forEach(item => {
                    item.hide = false;
                    this.initMenuShowStatus(item);
                });
            } else {
                if (menu.children) {
                    menu.children.forEach(item => {
                        item.hide = false;
                        this.initMenuShowStatus(item);
                    });
                }
            }
        },
        /**
         * 检查当前路由是否匹配菜单
         * @param: menu{String}
         * @return: Boolean
         * @auther: 张盛鸿
         * @date: 2020-07-20 15:37:22
         */
        checkCurrentMenu (route = '') {
            return this.currentRoute === route;
        }
    }
};
</script>

<style lang="scss" scoped>
    @import '@styles/variables.scss';

    .main-container {
        height: 100%;

        $brand-color: #409EFF;

        .brand-font-color {
            color: $brand-color;
        }

        .el-header {
            box-sizing: border-box;
            border-bottom: 1px solid $border-color;
            padding: 0 30px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 15px;
        }

        .content-area {
            display: flex;
            justify-content: flex-start;

            .el-aside,
            .el-main {
                box-sizing: border-box;
                overflow-y: scroll;
            }

            .el-aside {
                flex-shrink: 0;
                padding: 0 20px 0 30px;
                overflow: hidden;
                position: relative;

                .search-input {
                    padding: 20px 0 15px 0;
                    width: 100%;
                }

                .menu-box {
                    padding: 15px 0 20px 0;
                    position: absolute;
                    left: 30px;
                    bottom: 0;
                    overflow-y: scroll;

                    &::-webkit-scrollbar {
                        width: 0;
                        height: 0;
                        display: none;
                    }

                    .block {
                        margin-bottom: 20px;

                        &:last-child {
                            margin-bottom: 0;
                        }

                        .hide {
                            display: none;
                        }

                        .header {
                            font-size: 15px;
                            font-weight: 500;
                            line-height: 30px;
                            margin-bottom: 5px;
                        }

                        .label {
                            font-size: 12px;
                            color: $sub-font-color;
                            line-height: 25px;
                        }

                        .links {
                            .item {
                                font-size: 14px;
                                line-height: 30px;

                                .el-link {
                                    font-weight: normal;
                                }
                            }
                        }
                    }
                }
            }

            .el-main {
                width: 100%;
                flex-shrink: 1;
                border-left: 1px solid $border-color;
                padding: 0 30px;

                &::-webkit-scrollbar {
                    width: 6px;
                    background-color: transparent;
                }

                &::-webkit-scrollbar-thumb {
                    border-radius: 20px;
                    background-color: rgba(0, 0, 0, .35);
                }

                .main-content {
                    padding: 20px 0;
                }
            }
        }
    }
</style>