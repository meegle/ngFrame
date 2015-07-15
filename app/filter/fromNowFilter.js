define(['app', 'moment', 'moment-locale'], function (app, moment) {
    app.filter('fromNow', ['$filter', function($filter) {
        return function(date, diff, format) {
            var b = moment.unix(date);
            if (b.valueOf() === 0 || !b.isValid()) return 0;
            var ops = {
                format: 'YYYY-MM-DD HH:mm:ss',
                diff: 60 * 60 * 24 * 7// 七天前
            };
            if (angular.isDefined(diff)) {
                ops.diff = diff;
            }
            if (angular.isDefined(format)) {
                ops.format = format;
            }
            var a = moment();
            if (a.diff(b, 'seconds') >= ops.diff) {
                return b.format(ops.format);
            } else {
                return b.fromNow();
            }
        };
    }]);
});