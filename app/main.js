require.config({
    // 加后缀, 防止缓存
    // urlArgs: 't=' + (new Date()).getTime(),

    paths: {
        // 核心
        'angular': '../lib/angular/angular.min',
        'angularAnimate': '../lib/angular/angular-animate.min',
        'angularResource': '../lib/angular/angular-resource.min',
        'angularSanitize': '../lib/angular/angular-sanitize.min',
        'angularTouch': '../lib/angular/angular-touch.min',
        'uiRouter': '../lib/angular-ui/angular-ui-router.min',
        'bootstrap': '../lib/bootstrap/js/bootstrap.min',

        // 模块化加载
        'angularAMD': '../lib/requirejs/angularAMD.min',
        'ngload': '../lib/requirejs/ngload.min',

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
            'css': '../lib/requirejs/css.min'
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