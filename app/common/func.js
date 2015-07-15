/**
 * 函数集（业务逻辑相关）
 */
define(function() {
    return {
        // 判断登入状态
        check_login_status: function() {
            var status = null;
            if (localStorage.getItem('user')) {
                status = true;
            } else {
                status = false;
            }
            return status;
        }
    };
});