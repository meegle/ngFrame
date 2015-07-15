/**
 * 其他操作
 */
define(['app'], function (app) {
    app.factory('utilService', function($http, $q, $window, settings) {
        return {
            /*
                根据坐标获取地址
                @param lng 经度
                @param lat 纬度
            */
            get_address_by_coord: function(lng, lat) {
                var deferred = $q.defer();
                $http.get(settings.BAIDU_LBS.GET_ADDRESS_BY_COORD, {
                    params: {
                        'ak': settings.BAIDU_LBS.AK,
                        'location': lat + ',' + lng,
                        'output': 'json',
                        'pois': 1,
                        'mcode': settings.BAIDU_LBS.MCODE
                    }
                })
                .success(function(data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function(data, status, headers, config) {
                    deferred.reject(data);
                });
                return deferred.promise;
            }
        };
    });
});