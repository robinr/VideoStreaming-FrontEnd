'use strict'

videoApp.controller('LoginController',
    function LoginController($scope,$window) {
        $scope.login = {};

        $scope.enter = function()
        {
        	var adminlandingURL = "http://localhost:8000/AdminDBoard.html";
            var userlandingURL  = "http://localhost:8000/UserDBoard.html";
        	console.log($scope.login.userID);
        	console.log($scope.login.password);
            if($scope.login.userID == "admin")
            {
                if($scope.login.password == "admin1234")
                {
                    $window.open(adminlandingURL,"_self");
                }
            }
        	else
            {
                if($scope.login.userID == "robin")
                {
                    if($scope.login.password == "test1234")
                    {
                        $window.open(userlandingURL,"_self");
                    }
                }
            }
        }

        $scope.callSearch = function() {
            var landingURL = "http://localhost:8000/Search.html";
            $window.open(landingURL,"_self");
            }
});
