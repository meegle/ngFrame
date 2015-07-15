define(['app'], function (app) {
    app.filter('nl2br', ['$filter', function($filter) {
        return function(data) {
            if (!data) return data;
            return data.replace(/\n\r?/g, '<br />');
        };
    }]);
});