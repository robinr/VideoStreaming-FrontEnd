'use strict';

videoApp.controller('RatePlanController', 
	function RatePlanController($scope, $window, rateplanData) {

		
		$scope.rateplan = rateplanData.rateplan;

		$scope.rates = {
			packages : [],
			languages : []
			};

		$scope.show = [];

		for(var i = 0; i < 4 ; i++) {
			$scope.show[i] = [];
		}

		$scope.callSearch = function() {
        	var landingURL = "http://localhost:8000/Search.html";
        	$window.open(landingURL,"_self");
			}

		$scope.stateChanged = function(selected,str,plan) {
			//console.log(selected);
			//console.log(str);
			//console.log(plan);

			if(selected === true)
			{
				if(plan === 'SOLO'){
					if($scope.rates.packages.length == 0)
					{
						$scope.rates.packages.push(plan);
						if($scope.rates.languages.length > 0)
						{
							$scope.rates.languages.splice(0,$scope.rates.languages.length);
						}
					}
					else
					{
						$scope.rates.packages.splice(0,$scope.rates.packages.length);
						$scope.rates.packages.push(plan);
						if($scope.rates.languages.length > 0)
						{
							$scope.rates.languages.splice(0,$scope.rates.languages.length);
						}
					}
					if(str === 'English'){
						$scope.show[[0,1]] = false;
						$scope.show[[0,2]] = false;
						$scope.show[[0,3]] = false;
						$scope.show[[1,0]] = false;
						$scope.show[[1,1]] = false;
						$scope.show[[1,2]] = false;
						$scope.show[[1,3]] = false;
						$scope.show[[2,0]] = false;
						$scope.show[[2,1]] = false;
						$scope.show[[2,2]] = false;
						$scope.show[[2,3]] = false;
						$scope.show[[3,0]] = false;
					}
					if(str === 'Hindi') {
						$scope.show[[0,0]] = false;
						$scope.show[[0,2]] = false;
						$scope.show[[0,3]] = false;
						$scope.show[[1,0]] = false;
						$scope.show[[1,1]] = false;
						$scope.show[[1,2]] = false;
						$scope.show[[1,3]] = false;
						$scope.show[[2,0]] = false;
						$scope.show[[2,1]] = false;
						$scope.show[[2,2]] = false;
						$scope.show[[2,3]] = false;
						$scope.show[[3,0]] = false;
					}
					if(str === 'Kannada') {
						$scope.show[[0,0]] = false;
						$scope.show[[0,1]] = false;
						$scope.show[[0,3]] = false;
						$scope.show[[1,0]] = false;
						$scope.show[[1,1]] = false;
						$scope.show[[1,2]] = false;
						$scope.show[[1,3]] = false;
						$scope.show[[2,0]] = false;
						$scope.show[[2,1]] = false;
						$scope.show[[2,2]] = false;
						$scope.show[[2,3]] = false;
						$scope.show[[3,0]] = false;
					}
					if(str === 'Tamil') {
						$scope.show[[0,0]] = false;
						$scope.show[[0,1]] = false;
						$scope.show[[0,2]] = false;
						$scope.show[[1,0]] = false;
						$scope.show[[1,1]] = false;
						$scope.show[[1,2]] = false;
						$scope.show[[1,3]] = false;
						$scope.show[[2,0]] = false;
						$scope.show[[2,1]] = false;
						$scope.show[[2,2]] = false;
						$scope.show[[2,3]] = false;
						$scope.show[[3,0]] = false;
					}
				}
				if(plan === 'MINI'){
					if($scope.rates.packages.length == 0)
					{
						$scope.rates.packages.push(plan);
						if($scope.rates.languages.length > 0)
						{
							$scope.rates.languages.splice(0,$scope.rates.languages.length);
						}
					}
					else
					{
						if($scope.rates.packages[0] != plan)
						{
							$scope.rates.languages.splice(0,$scope.rates.languages.length);
						}
						$scope.rates.packages.splice(0,$scope.rates.packages.length);
						$scope.rates.packages.push(plan);
					}
					if(str === 'English'){
                        if($scope.rates.languages.length >= 2 )
                        {
                        	var messg = $scope.rates.languages[0]+" or "+$scope.rates.languages[1]+" De-Select any one ?";
                        	alert(messg);
                        	$scope.show[[1,0]] = false;
                        }
                        else
                        {
							$scope.rates.languages.push(str);
							$scope.show[[0,0]] = false;
							$scope.show[[0,1]] = false;
							$scope.show[[0,2]] = false;
							$scope.show[[0,3]] = false;
							$scope.show[[2,0]] = false;
							$scope.show[[2,1]] = false;
							$scope.show[[2,2]] = false;
							$scope.show[[2,3]] = false;
							$scope.show[[3,0]] = false;

						}
					}
					if(str === 'Hindi') {
						if($scope.rates.languages.length >= 2 )
                        {
                        	var messg = $scope.rates.languages[0]+" or "+$scope.rates.languages[1]+" De-Select any one ?";
                        	alert(messg);
                        	$scope.show[[1,1]] = false;
                        }
                        else
                        {
							$scope.rates.languages.push(str);
							$scope.show[[0,0]] = false;
							$scope.show[[0,1]] = false;
							$scope.show[[0,2]] = false;
							$scope.show[[0,3]] = false;
							$scope.show[[2,0]] = false;
							$scope.show[[2,1]] = false;
							$scope.show[[2,2]] = false;
							$scope.show[[2,3]] = false;
							$scope.show[[3,0]] = false;
						}
					}
					if(str === 'Kannada') {
						if($scope.rates.languages.length >= 2 )
                        {
                        	var messg = $scope.rates.languages[0]+" or "+$scope.rates.languages[1]+" De-Select any one ?";
                        	alert(messg);
                        	$scope.show[[1,2]] = false;
                        }
						else
                        {
							$scope.rates.languages.push(str);
							$scope.show[[0,0]] = false;
							$scope.show[[0,1]] = false;
							$scope.show[[0,2]] = false;
							$scope.show[[0,3]] = false;
							$scope.show[[2,0]] = false;
							$scope.show[[2,1]] = false;
							$scope.show[[2,2]] = false;
							$scope.show[[2,3]] = false;
							$scope.show[[3,0]] = false;
						}
					}
					if(str === 'Tamil') {
						if($scope.rates.languages.length >= 2 )
                        {
                        	var messg = $scope.rates.languages[0]+" or "+$scope.rates.languages[1]+" De-Select any one ?";
                        	alert(messg);
                        	$scope.show[[1,3]] = false;
                        }
						else
                        {
							$scope.rates.languages.push(str);
							$scope.show[[0,0]] = false;
							$scope.show[[0,1]] = false;
							$scope.show[[0,2]] = false;
							$scope.show[[0,3]] = false;
							$scope.show[[2,0]] = false;
							$scope.show[[2,1]] = false;
							$scope.show[[2,2]] = false;
							$scope.show[[2,3]] = false;
							$scope.show[[3,0]] = false;
						}
					}
				}
				if(plan === 'PLUS'){
					if($scope.rates.packages.length == 0)
					{
						$scope.rates.packages.push(plan);
						if($scope.rates.languages.length > 0)
						{
							$scope.rates.languages.splice(0,$scope.rates.languages.length);
						}
					}
					else
					{
						if($scope.rates.packages[0] != plan)
						{
							$scope.rates.languages.splice(0,$scope.rates.languages.length);
						}
						$scope.rates.packages.splice(0,$scope.rates.packages.length);
						$scope.rates.packages.push(plan);
					}
					if(str === 'English'){
						if($scope.rates.languages.length >= 3 )
                        {
                        	var messg = $scope.rates.languages[0]+" or "+$scope.rates.languages[1]+" or "+$scope.rates.languages[2]+" De-Select any one ?";
                        	alert(messg);
                        	$scope.show[[2,0]] = false;
                        }
                        else
                        {
							$scope.rates.languages.push(str);
							$scope.show[[0,0]] = false;
							$scope.show[[0,1]] = false;
							$scope.show[[0,2]] = false;
							$scope.show[[0,3]] = false;
							$scope.show[[1,0]] = false;
							$scope.show[[1,1]] = false;
							$scope.show[[1,2]] = false;
							$scope.show[[1,3]] = false;
							$scope.show[[3,0]] = false;

						}
					}
					if(str === 'Hindi') {
						if($scope.rates.languages.length >= 3 )
                        {
                        	var messg = $scope.rates.languages[0]+" or "+$scope.rates.languages[1]+" or "+$scope.rates.languages[2]+" De-Select any one ?";
                        	alert(messg);
                        	$scope.show[[2,1]] = false;
                        }
                        else
                        {
							$scope.rates.languages.push(str);
							$scope.show[[0,0]] = false;
							$scope.show[[0,1]] = false;
							$scope.show[[0,2]] = false;
							$scope.show[[0,3]] = false;
							$scope.show[[1,0]] = false;
							$scope.show[[1,1]] = false;
							$scope.show[[1,2]] = false;
							$scope.show[[1,3]] = false;
							$scope.show[[3,0]] = false;

						}
					}
					if(str === 'Kannada') {
						if($scope.rates.languages.length >= 3 )
                        {
                        	var messg = $scope.rates.languages[0]+" or "+$scope.rates.languages[1]+" or "+$scope.rates.languages[2]+" De-Select any one ?";
                        	alert(messg);
                        	$scope.show[[2,2]] = false;
                        }
                        else
                        {
							$scope.rates.languages.push(str);
							$scope.show[[0,0]] = false;
							$scope.show[[0,1]] = false;
							$scope.show[[0,2]] = false;
							$scope.show[[0,3]] = false;
							$scope.show[[1,0]] = false;
							$scope.show[[1,1]] = false;
							$scope.show[[1,2]] = false;
							$scope.show[[1,3]] = false;
							$scope.show[[3,0]] = false;

						}
					}
					if(str === 'Tamil') {
						if($scope.rates.languages.length >= 3 )
                        {
                        	var messg = $scope.rates.languages[0]+" or "+$scope.rates.languages[1]+" or "+$scope.rates.languages[2]+" De-Select any one ?";
                        	alert(messg);
                        	$scope.show[[2,3]] = false;
                        }
                        else
                        {
							$scope.rates.languages.push(str);
							$scope.show[[0,0]] = false;
							$scope.show[[0,1]] = false;
							$scope.show[[0,2]] = false;
							$scope.show[[0,3]] = false;
							$scope.show[[1,0]] = false;
							$scope.show[[1,1]] = false;
							$scope.show[[1,2]] = false;
							$scope.show[[1,3]] = false;
							$scope.show[[3,0]] = false;

						}
					}
				}
				if(plan === 'ULTRA'){
					if($scope.rates.packages.length == 0)
					{
						$scope.rates.packages.push(plan);
						if($scope.rates.languages.length > 0)
						{
							$scope.rates.languages.splice(0,$scope.rates.languages.length);
						}
					}
					else
					{
						$scope.rates.packages.splice(0,$scope.rates.packages.length);
						$scope.rates.packages.push(plan);
						if($scope.rates.languages.length > 0)
						{
							$scope.rates.languages.splice(0,$scope.rates.languages.length);
						}
					}
					$scope.show[[0,0]] = false;
					$scope.show[[0,1]] = false;
					$scope.show[[0,2]] = false;
					$scope.show[[0,3]] = false;
					$scope.show[[1,0]] = false;
					$scope.show[[1,1]] = false;
					$scope.show[[1,2]] = false;
					$scope.show[[1,3]] = false;
					$scope.show[[2,0]] = false;
					$scope.show[[2,1]] = false;
					$scope.show[[2,2]] = false;
					$scope.show[[2,3]] = false;

					$scope.rates.languages.push('English');
					$scope.rates.languages.push('Hindi');
					$scope.rates.languages.push('Kannada');
					$scope.rates.languages.push('Tamil');
				}
			}
			else
			{
				if(plan === 'MINI')
				{
					if(str === 'English'){
						var index = $scope.rates.languages.indexOf(str);

						$scope.rates.languages.splice(index,1);
					}
					if(str === 'Hindi'){
						var index = $scope.rates.languages.indexOf(str);

						$scope.rates.languages.splice(index,1);
					}
					if(str === 'Kannada'){
						var index = $scope.rates.languages.indexOf(str);

						$scope.rates.languages.splice(index,1);
					}
					if(str === 'Tamil'){
						var index = $scope.rates.languages.indexOf(str);

						$scope.rates.languages.splice(index,1);
					}
				}
				if(plan === 'PLUS')
				{
					if(str === 'English'){
						var index = $scope.rates.languages.indexOf(str);

						$scope.rates.languages.splice(index,1);
					}
					if(str === 'Hindi'){
						var index = $scope.rates.languages.indexOf(str);

						$scope.rates.languages.splice(index,1);
					}
					if(str === 'Kannada'){
						var index = $scope.rates.languages.indexOf(str);

						$scope.rates.languages.splice(index,1);
					}
					if(str === 'Tamil'){
						var index = $scope.rates.languages.indexOf(str);

						$scope.rates.languages.splice(index,1);
					}
				}
			}
		};
});