/*
    [帮助模块]菜单
*/
define(['require'], function (require) {
    return ['$scope', '$state', function($scope, $state) {
        // 状态跳转
        if ($state.is('tab.help')) $scope.goto('tab.help.index');

        $scope.menuList = [{
            'title': '简介',
            'state': 'tab.help.index'
        }, {
            'title': '结构',
            'state': 'tab.help.struct'
        }, {
            'title': '示例',
            'state': 'tab.help.example'
        }, {
            'title': '更新日志',
            'state': 'tab.help.changes'
        }];
    }];
});