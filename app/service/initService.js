/**
 * 初始化全局对象
 */
define(['require', 'app', 'underscore'], function (require, app, _) {
    app.factory('initService', ['$state', '$rootScope', 'settings', function($state, $rootScope, settings) {
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

        return {
            // 加载样式配置
            loadCss: function() {
                var css = settings.THEME.css;
                if (_.isUndefined(css) || _.isArray(css) === false) return;
                var map = _.filter(css, function(data) {
                    return $state.includes(data.state);
                });
                _.each(map, function(obj) {
                    require(_.map(obj.files, function(file) {
                        return 'css!' + file;
                    }));
                });
            },
            // 加载脚本配置
            loadJs: function() {
                var js = settings.THEME.js;
                if (_.isUndefined(js) || _.isArray(js) === false) return;
                var map = _.filter(js, function(data) {
                    return $state.includes(data.state);
                });
                _.each(map, function(obj) {
                    require(obj.files);
                });
            }
        };
    }]);
});