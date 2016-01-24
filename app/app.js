define(['angularAMD', 'uiRouter', 'angularAnimate', 'angularResource', 'config', 'util'], function (angularAMD) {
    var app = angular.module('ngFrame', ['ui.router', 'ngAnimate', 'ngResource']);

    // 全局配置
    app.constant('settings', require('config'));

    app.run(['$rootScope', '$state', 'settings', function($rootScope, $state, settings) {
        // code...
    }]);

    app.config(function($stateProvider, $urlRouterProvider, settings) {
        $urlRouterProvider.when('', '/');

        var util = require('util');

        // AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        $stateProvider
        // ----- 启动页 -----
        .state('start', angularAMD.route({
                url: '/',
                controllerUrl: 'controller/startCtrl'
            })
        )
        // ----- 介绍页 -----
        .state('intro', angularAMD.route({
                url: '/intro',
                templateUrl: 'theme/' + settings.THEME.name + '/intro.html',
                controllerUrl: 'controller/introCtrl',
                resolve: util.get_dependences_assets(settings.THEME.deps['intro'])
            })
        )
        // setup an abstract state for the tabs directive
        .state('tab', angularAMD.route({
                url: '/tab',
                abstract: true,
                templateUrl: 'theme/' + settings.THEME.name + '/tabs.html',
                controllerUrl: 'controller/rootCtrl',
                resolve: util.get_dependences_assets(settings.THEME.deps['tab'])
            })
        )
        // Each tab has its own nav history stack:
        // ----- 首页 -----
        .state('tab.index', angularAMD.route({
                url: '/index',
                templateUrl: 'theme/' + settings.THEME.name + '/index/index.html',
                controllerUrl: 'controller/index/indexCtrl',
                resolve: util.get_dependences_assets(settings.THEME.deps['tab.index'])
            })
        )
        // ----- 用户 -----
        .state('tab.user', angularAMD.route({
                url: '/user',
                templateUrl: 'theme/' + settings.THEME.name + '/user/index.html',
                controllerUrl: 'controller/user/indexCtrl',
                resolve: util.get_dependences_assets(settings.THEME.deps['tab.user'])
            })
        )
        // 登入
        .state('tab.login', angularAMD.route({
                url: '/user/login',
                templateUrl: 'theme/' + settings.THEME.name + '/user/login.html',
                controllerUrl: 'controller/user/loginCtrl',
                resolve: util.get_dependences_assets(settings.THEME.deps['tab.login'])
            })
        )
        // 注册
        .state('tab.register', angularAMD.route({
                url: '/user/register/{step:[1-9]{0,1}}',
                templateUrl: function($stateParams) {
                    var step = parseInt($stateParams.step);
                    return 'theme/' + settings.THEME.name + '/user/register' + (step ? '-' + step : '') + '.html';
                },
                controllerUrl: 'controller/user/registerCtrl',
                resolve: util.get_dependences_assets(settings.THEME.deps['tab.register'])
            })
        )
        // ----- 帮助 -----
        .state('tab.help', angularAMD.route({
                url: '/help',
                templateUrl: 'theme/' + settings.THEME.name + '/help/menu.html',
                controllerUrl: 'controller/help/menuCtrl',
                resolve: util.get_dependences_assets(settings.THEME.deps['tab.help'])
            })
        )
        // 首页
        .state('tab.help.index', angularAMD.route({
                url: '/index',
                templateUrl: 'theme/' + settings.THEME.name + '/help/menu.index.html'
            })
        )
        // 结构
        .state('tab.help.struct', angularAMD.route({
                url: '/struct',
                templateUrl: 'theme/' + settings.THEME.name + '/help/menu.struct.html'
            })
        )
        // 示例
        .state('tab.help.example', angularAMD.route({
                url: '/example',
                templateUrl: 'theme/' + settings.THEME.name + '/help/menu.example.html'
            })
        )
        // 更新日志
        .state('tab.help.changes', angularAMD.route({
                url: '/changes',
                templateUrl: 'theme/' + settings.THEME.name + '/help/menu.changes.html',
                controllerUrl: 'controller/help/changesCtrl'
            })
        )
        ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/index');
    });

    // Bootstrap Angular when DOM is ready
    return angularAMD.bootstrap(app);
});