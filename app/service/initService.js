/**
 * 初始化全局对象
 */
define(['app'], function (app) {
    app.factory('initService', ['$state', '$rootScope', function($state, $rootScope) {
        // 状态跳转
        $rootScope.goto = function(to, params, options) {
            if (typeof params === 'undefined') {
                params = {};
            }
            if (typeof options === 'undefined') {
                options = {reload:true};
            }
            $state.go(to, params, options);
        };

        return {};
    }]);
});