//window.onload = function(){
//    var obj_lis = document.getElementById("test").getElementsByTagName("a");
//    for(i=0;i<obj_lis.length;i++){
//        obj_lis[i].onclick = function(){
//            var value =this.innerHTML;
//            alert(value);
//        }
//    }
//}

  var nav = "";
        function value(val) {
            nav = val;
            return nav;
            
        }
//        alert(nav);

var app = angular.module("myApp", ["ui.router"]);
//配置路由
app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

      
        $stateProvider.state("toutiao", {
            url: "/list/{type}",
            templateUrl: "template/template.html",
            controller: "myController"
        }).state("shehui",{
            url: "/shehui/{type}",
            templateUrl: "template/shehui.html",
            controller: "myController"
        }).state("guonei",{
            url: "/guonei/{type}",
            templateUrl: "template/guonei.html",
            controller: "myController"
        }).state("guoji",{
            url: "/guoji/{type}",
            templateUrl: "template/guoji.html",
            controller: "myController"
        }).state("yule",{
            url: "/yule/{type}",
            templateUrl: "template/yule.html",
            controller: "myController"
        }).state("tiyu",{
            url: "/yule/{type}",
            templateUrl: "template/tiyu.html",
            controller: "myController"
        }).state("junshi",{
            url: "/junshi/{type}",
            templateUrl: "template/junshi.html",
            controller: "myController"
        }).state("keji",{
            url: "/keji/{type}",
            templateUrl: "template/keji.html",
            controller: "myController"
        })
        $urlRouterProvider.otherwise("/list/toutiao");
    }])


app.controller("myController", ["$scope", "$http", "$rootScope", function ($scope, $http, $rootScope) {
        $rootScope.isShow = false;
        $scope.list = null;
        $rootScope.num = 10;
        $rootScope.spinnerShow = true;
        $rootScope.moreShow = true;
        $http({
            method: "get",
            url: "php/php.php"
//            params:{type:type}
        }).then(function (data) {

            $scope.list = data.data;
            $rootScope.isShow = true;
            $rootScope.spinnerShow = false;

        })
        $rootScope.more = function () {
            $rootScope.num += 10;
            if ($rootScope.num == 30) {
                $rootScope.moreShow = false;
            }
        }
    }
]);

