// /**
//  * Created by zhishu on 16-7-16.
//  */
//
(function(){
    'use strict';
    var app=angular.module("MyList",[]);
    app.constant('listData',{
        1:[1,2,3,4,5,6,7,8,9],
        2:[10,11,12,13,14,15,16,17,18,19],
        3:[20,21,22,23,24,25,26,27,28,29]
    });
    app.value('pageCount',1);
    app.value('pageItem',1);
    app.controller("listCtrl",listCtrl);
    listCtrl.$inject=['$scope','$location','listData','pageCount','pageItem'];
    function listCtrl($scope,$location,listData,pageCount,pageItem){
        $scope.records = listData;
        $scope.pageCount=pageCount;
        $scope.test=function(){
            app.value('pageCount',pageCount++);
            $scope.pageCount=pageCount;
        };
        $scope.itemClick=function(e,page){
            if(e.target.nodeName.toUpperCase()==="A")
            {

                var id=e.target.dataset.id;
                app.value('pageItem',parseInt(id));
            }
        }
    }
})();
// var routeApp = angular.module('MyList',[]);
// routeApp.config(['$routeProvider',function ($routeProvider) {
//     $routeProvider
//         .when('/list', {
//             templateUrl: 'list.html',
//             controller: 'RouteListCtl'
//         })
//         .when('/xianQing', {
//             templateUrl: 'xianQing.html',
//             controller: 'RouteDetailCtl'
//         })
//         .otherwise({
//             redirectTo: '/list'
//         });
// }]);
