const MyTable = () => import(/* webpackChunkName: "components-mytable" */ '@pages/components/my_table');
const MyTableRowBtn = () => import(/* webpackChunkName: "components-mytable" */ '@pages/components/my_table_row_btn');
const MyPagination = () => import(/* webpackChunkName: "components-mytable" */ '@pages/components/my_pagination');
const MyDialog = () => import(/* webpackChunkName: "components-mydialog" */ '@pages/components/my_dialog');
const MyDialogBtn = () => import(/* webpackChunkName: "components-mydialog" */ '@pages/components/my_dialog_btn');
const MyContentGrid = () => import(/* webpackChunkName: "components-mycontentgrid" */ '@pages/components/my_content_grid');
const MyContentGridRow = () => import(/* webpackChunkName: "components-mycontentgrid" */ '@pages/components/my_content_grid_row');
const MyToolbar = () => import(/* webpackChunkName: "components-mycontentgrid" */ '@pages/components/my_toolbar');
const MyTitle = () => import(/* webpackChunkName: "components-public" */ '@pages/components/my_title');
const MyInput = () => import(/* webpackChunkName: "components-public" */ '@pages/components/my_input');
const MyDateRangePicker = () => import(/* webpackChunkName: "components-public" */ '@pages/components/my_data_range_picker');
const MyNumberRangeInput = () => import(/* webpackChunkName: "components-public" */ '@pages/components/my_number_range_input');
const MyStaffSelector = () => import(/* webpackChunkName: "components-public" */ '@pages/components/my_staff_selector');

const routes = [
    {
        name: 'MyTable',
        path: '/components/my_table',
        component: MyTable
    },
    {
        name: 'MyTableRowBtn',
        path: '/components/my_table_row_btn',
        component: MyTableRowBtn
    },
    {
        name: 'MyPagination',
        path: '/components/my_pagination',
        component: MyPagination
    },
    {
        name: 'MyDialog',
        path: '/components/my_dialog',
        component: MyDialog
    },
    {
        name: 'MyDialogBtn',
        path: '/components/my_dialog_btn',
        component: MyDialogBtn
    },
    {
        name: 'MyContentGrid',
        path: '/components/my_content_grid',
        component: MyContentGrid
    },
    {
        name: 'MyContentGridRow',
        path: '/components/my_content_grid_row',
        component: MyContentGridRow
    },
    {
        name: 'MyToolbar',
        path: '/components/my_toolbar',
        component: MyToolbar
    },
    {
        name: 'MyTitle',
        path: '/components/my_title',
        component: MyTitle
    },
    {
        name: 'MyInput',
        path: '/components/my_input',
        component: MyInput
    },
    {
        name: 'MyDateRangePicker',
        path: '/components/my_data_range_picker',
        component: MyDateRangePicker
    },
    {
        name: 'MyNumberRangeInput',
        path: '/components/my_number_range_input',
        component: MyNumberRangeInput
    },
    {
        name: 'MyStaffSelector',
        path: '/components/my_staff_selector',
        component: MyStaffSelector
    }
];

export default routes;