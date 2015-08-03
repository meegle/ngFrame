/*
    图形占位
*/
define(['app', 'holder'], function (app, Holder) {
    app.directive('holder', function() {
        return {
            link: function($scope, $element, $attrs) {
                Holder.addImage($attrs.backgroundSrc, $element[0]).run();
            }
        }
    });
});