const DirectoryStructure = () => import(/* webpackChunkName: "frame" */ '@pages/frame/directory_structure');
const RelationInstallation = () => import(/* webpackChunkName: "frame" */ '@pages/frame/relation_installation');
const FrameSetting = () => import(/* webpackChunkName: "frame" */ '@pages/frame/frame_setting');

const routes = [
    {
        name: 'DirectoryStructure',
        path: '/frame/directory_structure',
        component: DirectoryStructure
    },
    {
        name: 'RelationInstallation',
        path: '/frame/relation_installation',
        component: RelationInstallation
    },
    {
        name: 'FrameSetting',
        path: '/frame/frame_setting',
        component: FrameSetting
    }
];

export default routes;