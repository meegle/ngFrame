/**
 * 工具集（数据处理相关）
 */
define(['moment', 'underscore'], function(moment, _) {
    return {
        // 获取参数对象（用于获取注入）
        get_arg_obj: function() {
            var re = /^[^(]+\(([^)]+)\)/;
            var arg = arguments.callee.caller.arguments;// 获取调用者的参数
            var argArr = re.exec(arg.callee.toString())[1].replace(/\s/g, '').split(',');
            var argObj = {};
            angular.forEach(argArr, function(value, key) {
                argObj[value] = arg[key];
            });
            return argObj;
        },
        // 根据出生日期计算年龄
        get_age_by_birthday: function(birthday) {
            if (moment(birthday, 'YYYY-MM-DD', true).isValid()) {
                var a = moment().diff(moment(birthday), 'years', true);
                return parseInt(a);
            } else {
                return 0;
            }
        },
        // 根据出生日期计算星座
        get_constellation_by_birthday: function(birthday) {
            if (moment(birthday, 'YYYY-MM-DD', true).isValid()) {
                var a = moment(birthday);
                a.add(1, 'month');
                var m = a.month();
                var d = a.date();
                var xzdata = '摩羯宝瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手';
                var zone = new Array(1222, 122, 222, 321, 421, 522, 622, 722, 822, 922, 1022, 1122, 1222);
                if ((100 * m + d) >= zone[0] || (100 * m + d) < zone[1]) {
                    var i = 0;
                } else {
                    for (var i = 1; i < 12; i++) {
                        if ((100 * m + d) >= zone[i] && (100 * m + d) < zone[i + 1]) break;
                    }
                }
                return xzdata.substring(2 * i, 2 * i + 2) + '座';
            } else {
                return '';
            }
        },
        // 获取依赖资源
        get_dependences_assets: function(assets) {
            // 加载依赖
            var _load = function(deps) {
                return [
                    '$q', function($q) {
                        var def = $q.defer();
                        require(deps, function() {
                            def.resolve();
                        });
                        return def.promise;
                    }
                ];
            };

            var resolve = {};

            if (!_.isUndefined(assets)) {
                // 获取样式依赖
                if (_.isUndefined(assets.css) || _.isArray(assets.css) === false) {
                    // ...
                } else {
                    resolve.css = _load(_.map(assets.css, function(file) {
                        return 'css!' + file;
                    }));
                }

                // 获取脚本依赖
                if (_.isUndefined(assets.js) || _.isArray(assets.js) === false) {
                    // ...
                } else {
                    resolve.js = _load(assets.js);
                }
            }

            return resolve;
        }
    };
});