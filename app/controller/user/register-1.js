define(['require', 'util', 'ngload!china-area-selector', 'ngload!angular-pickadate'], function (require) {
    function stepClass() {
        var that = this;
        angular.forEach(arguments[0], function(value, key) {
            that[key] = value;
        });
    }
    stepClass.prototype.logic = function() {
        var that = this;

        // 区域联动控件
        that.$scope.location = {};

        // 下一步
        that.$scope.submit = function() {
            that.$state.go('tab.register', {step:2});
        };
    };
    return stepClass;
});