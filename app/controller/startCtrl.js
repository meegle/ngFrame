define(['service/initService'], function() {
    return ['$scope', '$state', 'initService', function($scope, $state, initService) {
        // 跳转
        var isFirstEnter = true;// 是否第一次进入APP
        if (isFirstEnter) {
            $state.go('intro');
        } else {
            $state.go('tab.index');
        }
    }];
});