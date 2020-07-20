import Vue from 'vue';
import router from '@routes/index';
import App from './app';
import ElementUI from 'element-ui';
// 全局组件
import MyTitle from '@components/myTitle';
import MyCode from '@components/myCode';
import MyDataTable from '@components/myDataTable';

import 'element-ui/lib/theme-chalk/index.css';
import 'highlight.js/styles/default.css';
import './styles/common.scss';

// element-ui
Vue.use(ElementUI);

// 全局组件
Vue.component(MyTitle.name, MyTitle);
Vue.component(MyCode.name, MyCode);
Vue.component(MyDataTable.name, MyDataTable);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');