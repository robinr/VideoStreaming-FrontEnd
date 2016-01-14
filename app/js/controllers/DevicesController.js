'use strict';

videoApp.controller('DevicesController', 
	function DevicesController($scope, $window, devicesData) {

		$scope.apps = devicesData.apps;

		$scope.callSearch = function() {
        	var landingURL = "http://localhost:8000/Search.html";
        	$window.open(landingURL,"_self");
			}
			
	});