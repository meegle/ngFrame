/*
    根视图
*/
define(['service/initService'], function() {
    return ['$scope', '$state', '$timeout', 'initService', function($scope, $state, $timeout, initService) {
        // 加载样式
        initService.loadCss();
        // 加载脚本
        initService.loadJs();

        // 状态监听
        $scope.$on('$stateChangeStart', function() {
            console.log('加载中...');
        });
        $scope.$on('$stateChangeSuccess', function() {
            $timeout(function() {
                console.log('加载完成!');
            }, 100);
        });
    }];
});