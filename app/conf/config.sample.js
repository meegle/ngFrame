define(function () {
    // 服务端地址
    var SERVER_URL = 'http://service_url/';
    return {
        // 主题配置
        
        'THEME': {
            // 主题名称
            'name': 'default',
            // 样式映射
            'css': [{
                'state': 'intro',
                'files': ['../../static/default/css/app', '../../static/default/css/extend']
            }, {
                'state': 'tab',
                'files': ['../../static/default/css/app', '../../static/default/css/extend']
            }, {
                'state': 'tab.help',// 状态
                'files': ['../../static/default/css/dashboard']// 样式文件
            }]
        },
        
        /*
        'THEME': {
            'name': 'xeon',
            'css': [{
                'state': 'tab',
                'files': ['../../static/xeon/css/font-awesome.min', '../../static/xeon/css/prettyPhoto']
            }, {
                'state': 'tab.index',
                'files': ['../../static/xeon/css/main']
            }]
        },
        */
        /*
        'THEME': {
            'name': 'amoeba',
            'css': [{
                'state': 'tab',
                'files': ['../../static/amoeba/css/font-awesome']
            }, {
                'state': 'tab.index',
                'files': ['../../static/amoeba/css/isotope', '../../static/amoeba/css/overwrite', '../../static/amoeba/css/style', '../../static/amoeba/skin/default']
            }]
        },
        */
        /*
        'THEME': {
            'name': 'capture',
            'css': [{
                'state': 'tab',
                'files': ['../../static/capture/css/animate', '../../static/capture/css/owl.transitions', '../../static/capture/css/owl.carousel.css']
            }, {
                'state': 'tab.index',
                'files': ['../../static/capture/css/main']
            }],
            'js': [{
                'state': 'tab.index',
                'files': ['../../static/capture/js/ajaxchimp', '../../static/capture/js/scrollTo', '../../static/capture/js/owl.carousel.min', '../../static/capture/js/wow', '../../static/capture/js/parallax', '../../static/capture/js/nicescroll', '../../static/capture/js/main']
            }]
        },
        */
        // 服务端接口
        'DATA_URI': {
            // code...
        },
        'BAIDU_LBS': {
            'AK': '',
            'MCODE': '',
            'GET_ADDRESS_BY_COORD': 'http://api.map.baidu.com/geocoder/v2/',// 根据坐标获取地址
        },
    };
});