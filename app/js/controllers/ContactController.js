'use strict'

videoApp.controller('ContactController',
    function ContactController($scope, $window) {
        $scope.login = {};

        $scope.callSearch = function() {
            var landingURL = "http://localhost:8000/Search.html";
            $window.open(landingURL,"_self");
            }

        }
);
