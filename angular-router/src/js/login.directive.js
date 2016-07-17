/**
 * Created by zhishu on 16-7-16.
 */
var Mylogin=angular.module("Mylogin", []);
Mylogin.directive("loginform",function(){
    return {
        restrict : "A",
        template : "<form><ul><li><label>用户名</label><input type='text'/></li>" +
        "<li><label>密码</label><input type='password'/></li></ul></form>"
    };
});
