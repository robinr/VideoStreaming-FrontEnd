'use strict';

var videoApp = angular.module('videoApp', ['ngAnimate','ngTouch']);

videoApp.directive('file', function(){
    return {
        scope: {
            file: '='
        },
        link: function(scope, el, attrs){
            el.bind('change', function(event){
                var files = event.target.files;
                var file = files[0];
                scope.file = file ? file.name : undefined;
                console.log(scope.file);
                scope.$apply();
            });
        }
    };
});

videoApp.directive("progressbar", function () {
    return {
        restrict: "A",
        scope: {
            total: "=",
            current: "="
        },
        link: function(scope, element) {

            scope.$watch("current", function(value) {
                element.css("width", scope.current / scope.total * 100 + "%");
            });
            scope.$watch("total", function(value) {
                element.css("width", scope.current / scope.total * 100 +"%");
            })
        }
    }
});




