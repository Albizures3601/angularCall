var myApp = angular.module('myApp', []);
myApp.factory('aProvider', function() {
   console.log("factory");
	return {};
});

myApp.directive("test1", function() {
    console.log("directive setup");
    return {
        compile: function() {console.log("directive compile");}
    }
});

myApp.directive("test2", function() {
    return {
        link: function() {console.log("directive link");}
    }
});

myApp.run(function() {
    console.log("app run");
});

myApp.config( function() {
    console.log("app config");
});

myApp.controller('myCtrl', function($scope,aProvider) {
    console.log("app controller");
});

