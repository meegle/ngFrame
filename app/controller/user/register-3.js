define(function () {
    function stepClass() {
        var that = this;
        angular.forEach(arguments[0], function(value, key) {
            that[key] = value;
        });
    }
    stepClass.prototype.logic = function() {
        var that = this;

        that.$scope.submit = function() {
            that.$state.go('tab.login');
        };
    };
    return stepClass;
});