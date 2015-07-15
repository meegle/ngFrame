require.config({
    paths: {
        // 核心
        'angular': '../lib/angular/angular',
        'angularAnimate': '../lib/angular/angular-animate',
        'angularResource': '../lib/angular/angular-resource',
        'angularSanitize': '../lib/angular/angular-sanitize',
        'angularTouch': '../lib/angular/angular-touch',
        'uiRouter': '../lib/angular-ui/angular-ui-router',
        'bootstrap': '../lib/bootstrap/js/bootstrap.min',

        // 模块化加载
        'angularAMD': '../lib/requirejs/angularAMD',
        'ngload': '../lib/requirejs/ngload',

        // ----- 插件 -----
        'jquery': 'plugin/jquery',

        // 时间控件
        'angular-pickadate': 'plugin/angular-pickadate',

        // 区域联动控件
        'areaData': 'data/areaData',
        'china-area-selector': 'plugin/china-area-selector',

        // 时间处理
        'moment': 'plugin/moment.min',
        'moment-locale': 'plugin/moment.locale.zh-cn',

        // 图形占位
        'holder': 'plugin/holder.min',

        // 工具
        'underscore': '../lib/underscore/underscore.min',

        // 全局配置
        'config': 'conf/config',

        // 函数集
        'util': 'common/util',
        'func': 'common/func'
    },
    map: {
        '*': {
            'css': '../lib/requirejs/css'
        }
    },
    shim: {
        // jquery
        'jquery': {'exports': 'jquery'},

        // 核心
        'angular': {'exports': 'angular'},
        'angularAnimate': ['angular', 'css!../static/common/css/animate.min'],
        'angularResource': ['angular'],
        'angularSanitize': ['angular'],
        'angularTouch': ['angular'],
        'uiRouter': ['angular'],
        'bootstrap': ['jquery', 'css!../lib/bootstrap/css/bootstrap.min'],

        // 模块化加载
        'angularAMD': ['angular'],

        // 插件
        'china-area-selector': ['areaData'],
        'angular-pickadate': ['css!../static/common/css/angular-pickadate'],
    },
    deps: ['app', 'bootstrap']
});