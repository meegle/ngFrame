define(['jquery'], function (j$) {
    function stepClass() {
        var that = this;
        angular.forEach(arguments[0], function(value, key) {
            that[key] = value;
        });
    }
    stepClass.prototype.logic = function() {
        var that = this;

        // 下一步
        that.$scope.submit = function() {
            that.$state.go('tab.register', {step:3});
        };
    };
    return stepClass;
});