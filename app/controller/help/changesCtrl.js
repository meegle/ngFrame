/*
    [帮助模块]菜单
*/
define(function () {
    return ['$scope', '$state', '$resource', '$timeout', function($scope, $state, $resource, $timeout) {
        $scope.dataset = [];
        $resource('test/data/changes.json').get(function(data) {
            angular.forEach(data.results, function(v, k) {
                $timeout(function() {
                    $scope.dataset.push(v);
                }, k * 200);
            });
        });
    }];
});