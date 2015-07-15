// 登入
define(['require', 'underscore', 'service/userService', 'func'], function(require, _) {
    return ['$scope', '$state', '$rootScope', 'userService', '$window', '$q', 'settings', function($scope, $state, $rootScope, userService, $window, $q, settings) {
        // 判断登入状态
        if (require('func').check_login_status()) $state.go('tab.user');

        // 登入提交
        $scope.submit = function() {
            var deferred = $q.defer();
            userService.do_login(this.username, this.password).then(function(data) {
                if (data.status) {
                    deferred.promise.then(function(msg) {
                        // 存储登入状态
                        localStorage.setItem('user', angular.toJson(data.data));
                        $state.go('tab.user');
                    }, function(msg) {
                        console.log('Error:' + msg);
                        /* error */
                        alert(msg);
                    });
                } else {
                    // 登入失败
                    alert(data.info);
                }
            }, function(data) {
                alert(data);
            });
        };
    }];
});