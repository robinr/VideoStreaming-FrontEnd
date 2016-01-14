'use strict';

videoApp.controller('LanguageController', 
	function LanguageController($scope, $window, languageData) {

		$scope.category  = languageData.category;

		$scope.callSearch = function() {
        	var landingURL = "http://localhost:8000/Search.html";
        	$window.open(landingURL,"_self");
			}
		});

		
