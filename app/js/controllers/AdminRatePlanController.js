'use strict';

videoApp.controller('AdminRatePlanController', 
	function AdminRatePlanController($scope, $window, rateplanData) {

		$scope.rateplan = rateplanData.rateplan;
		$scope.show = [];
		$scope.languages = [];
		$scope.remove = [false,false,false,false];

		$scope.callSearch = function() {
            var landingURL = "http://localhost:8000/Search.html";
            $window.open(landingURL,"_self");
            }

			$scope.savePlan = function(plan,form)
			{
				var empty = "Missing ";
				if(plan.planname == null)
				{
					empty = empty+"Plan Name ?";
				}
				if(plan.price == null)
				{
					empty = empty+"Price ?";
				}
				if(plan.language == null)
				{
					empty = empty+"Language ?";
				}
				if(plan.imagefile == null)
				{
					empty = empty+"Image ?"
				}
				if(plan.options == null)
				{
					empty = empty+"Options";
				}
				plan.others = [];
				plan.others.push($scope.languages);
				alert(empty);

			}

			$scope.bundleSelect = function(selected,language)
			{

				if(selected == true)
				{
					$scope.languages.push(language);
				}
				else
				{
					if(selected == false)
					{
						var index = $scope.languages.indexOf(language);

						$scope.languages.splice(index,1)
					}
				}
			}

			$scope.deletepkg = function(selected,index)
			{

			}

			$scope.planremove = function()
			{
				alert("Plan Removed");
			}

		});