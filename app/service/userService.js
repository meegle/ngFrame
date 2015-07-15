/**
 * 用户相关操作
 */
define(['app'], function (app) {
    app.factory('userService', function($http, $q, $window, settings) {
        return {
            /*
                用户登入
                @param userName 账号
                @param userPass 密码
            */
            do_login: function(userName, userPass) {
                var deferred = $q.defer();
                $http({
                    method: 'POST',
                    url: settings.DATA_URI.USER_DO_LOGIN,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function(obj) {
                        var str = [];
                        for (var p in obj) {
                            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
                        }
                        return str.join('&');
                    },
                    data: {
                        'user_name': userName,
                        'user_pass': userPass
                    }
                })
                .success(function(data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function(data, status, headers, config) {
                    deferred.reject(data);
                });
                return deferred.promise;
            },
            /*
                用户登出
            */
            do_logout: function() {
                //...
            },
            /*
                获取用户详情
                @param userId 用户ID
            */
            get_info: function(userId) {
                var deferred = $q.defer();
                $http.get(settings.DATA_URI.USER_GET_INFO, {
                    'uid': userId
                })
                .success(function(data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function(data, status, headers, config) {
                    deferred.reject(data);
                });
                return deferred.promise;
            },
            /*
                用户注册
                @param postData 提交的数据
            */
            do_register: function(postData) {
                // code...
            }
        };
    });
});