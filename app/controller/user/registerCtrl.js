// 注册
define(['require', 'util', 'service/utilService', './register-0', './register-1', './register-2', './register-3'], function (require) {
    return ['$scope', '$state', '$stateParams', 'utilService', function ($scope, $state, $stateParams, utilService) {
        var step = parseInt($stateParams.step);
        if (isNaN(step)) step = 0;

        // 获取当前注入
        var argObj = require('util').get_arg_obj();

        // ...
        var stepClass = require('./register-' + step);
        var stepObject = new stepClass(argObj);
        stepObject.logic();
    }];
});