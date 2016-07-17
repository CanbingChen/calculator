/**
 * Created by zhishu on 16-7-16.
 */
(function () {
    'use strict';
    var Mylogin=angular.module("Mylogin",[]);
    Mylogin.constant("userdata",[
        {
            Uname:'ccb',
            Upassword:'123456'
        },
        {
            Uname:'cb',
            Upassword:'123456'
        }
        ,
        {
            Uname:'陈灿冰',
            Upassword:'123456'
        }
    ]);
    Mylogin.controller("loginCtrl",loginCtrl);
    loginCtrl.$inject=['$scope','userdata'];
    function loginCtrl($scope,userdata) {
        $scope.check=function(){
            alert(window.location.href);
        }

    }
})();
