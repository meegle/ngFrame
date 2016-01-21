define(function () {
    // 服务端地址
    var SERVER_URL = 'http://service_url/';
    return {
        // 主题配置
        
        'THEME': {
            // 主题名称
            'name': 'default',
            // 依赖配置(样式/脚本)
            'deps': {
                'intro': {
                    'css': [
                        '../static/default/css/app',
                        '../static/default/css/extend'
                    ]
                },
                'tab': {
                    'css': [
                        '../static/default/css/app',
                        '../static/default/css/extend'
                    ]
                },
                'tab.help': {
                    'css': ['../static/default/css/dashboard']
                }
            }
        },
        
        /*
        'THEME': {
            'name': 'xeon',
            'deps': {
                'tab': {
                    'css': [
                        '../static/xeon/css/font-awesome.min',
                        '../static/xeon/css/prettyPhoto'
                    ]
                },
                'tab.index': {
                    'css': ['../static/xeon/css/main']
                }
            }
        },
        */
        /*
        'THEME': {
            'name': 'amoeba',
            'deps': {
                'tab': {
                    'css': ['../static/amoeba/css/font-awesome']
                },
                'tab.index': {
                    'css': [
                        '../static/amoeba/css/isotope',
                        '../static/amoeba/css/overwrite',
                        '../static/amoeba/css/style',
                        '../static/amoeba/skin/default'
                    ]
                }
            }
        },
        */
        /*
        'THEME': {
            'name': 'capture',
            'deps': {
                'tab': {
                    'css': [
                        '../static/capture/css/animate',
                        '../static/capture/css/owl.transitions',
                        '../static/capture/css/owl.carousel.css'
                    ]
                },
                'tab.index': {
                    'css': ['../static/capture/css/main'],
                    'js': [
                        '../static/capture/js/ajaxchimp',
                        '../static/capture/js/scrollTo',
                        '../static/capture/js/owl.carousel.min',
                        '../static/capture/js/wow',
                        '../static/capture/js/parallax',
                        '../static/capture/js/main'
                    ]
                }
            }
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