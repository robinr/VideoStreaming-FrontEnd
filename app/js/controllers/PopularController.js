'use strict';

videoApp.controller('PopularController', 
	function PopularController($scope, $window, popularData) {

		$scope.popular  = popularData.popular;

		$scope.callSearch = function() {
        	var landingURL = "http://localhost:8000/Search.html";
        	$window.open(landingURL,"_self");
        }
			
	}
);