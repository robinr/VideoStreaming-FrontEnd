'use strict'

videoApp.controller('RegistrationController',
    function RegistrationController($scope, $window, rateplanData) {
        $scope.user = {};

        $scope.rateplan = rateplanData.rateplan;
			

			$scope.show = [];
			$scope.languages = [];
			$scope.choosen = 99;

			$scope.callSearch = function() {
            var landingURL = "http://localhost:8000/Search.html";
            $window.open(landingURL,"_self");
            }

			$scope.saveUser = function (user, form) {

					var empty = 'Missing';
					var plan;
					

					if(user.firstName == null)
					{
						empty = empty+' firstName';
					}
					if(user.lastName == null)
					{
						empty = empty+' lastName';
					}
					if(user.address1 == null)
					{
						empty = empty+' address1';
					}
					if(user.address2 == null)
					{
						empty = empty+' address2';
					}
					if(user.city == null)
					{
						empty = empty+' city';
					}
					if(user.pin == null)
					{
						empty = empty+' pin';
					}
					if(user.mobile == null)
					{
						empty = empty+' mobile';
					}
					if(user.email == null)
					{
						empty = empty+' email';
					}
					if(user.userID == null)
					{
						empty = empty+' userID';
					}
					if(user.password == null)
					{
						empty = empty+' password';
					}
					if(user.repassword == null)
					{
						empty = empty+' repassword';
					}
					if(user.file == null)
					{
						empty = empty+' Profile Picture'
					}
					alert(empty);

					if($scope.show[0] == true)
					{
						plan = 'SOLO';
					}
					if($scope.show[1] == true)
					{
						plan = 'MINI';
					}
					if($scope.show[2] == true)
					{
						plan = 'PLUS';
					}
					if($scope.show[3] == true)
					{
						plan = 'ULTRA';
					}
			}

            
            


			$scope.stateChanged = function(selected,plan) {	
				
				console.log(plan);
				if(selected == true)
				{
					if(plan == 'SOLO')
					{
						$scope.show[1] = false;
						$scope.show[2] = false;
						$scope.show[3] = false;
						$scope.choosen = 0;
					}
					if(plan == 'MINI')
					{
						$scope.show[0] = false;
						$scope.show[2] = false;
						$scope.show[3] = false;
						$scope.choosen = 1;
					}
					if(plan == 'PLUS')
					{
						$scope.show[0] = false;
						$scope.show[1] = false;
						$scope.show[3] = false;
						$scope.choosen = 2;
					}
					if(plan == 'ULTRA')
					{
						$scope.show[0] = false;
						$scope.show[1] = false;
						$scope.show[2] = false;
						$scope.choosen = 3;
					}


					if($scope.choosen == 99)
					{	
						alert('No Plan Choosen');
						$scope.show[4] = false;
						$scope.show[5] = false;
						$scope.show[6] = false;
						$scope.show[7] = false;
						$scope.show[8] = false;
						if($scope.languages.length > 0)
						{
							$scope.languages.splice(0,$scope.languages.length);
						}
					}
					else
					{
					 if($scope.choosen == 0)    
					 {   
							 	if(plan == 'English')
							 	{

							 		$scope.show[5] = false;
									$scope.show[6] = false;
									$scope.show[7] = false;
									$scope.show[8] = false;
									if($scope.languages.length > 0)
									{
										$scope.languages.splice(0,$scope.languages.length);
										$scope.languages.push('English');
									}
									else
									{
										$scope.languages.push('English');
									}
								}
							 	if(plan == 'Hindi')
							 	{
							 		$scope.show[4] = false;
									$scope.show[6] = false;
									$scope.show[7] = false;
									$scope.show[8] = false;
									if($scope.languages.length > 0)
									{
										$scope.languages.splice(0,$scope.languages.length);
										$scope.languages.push('Hindi');
									}
									else
									{
										$scope.languages.push('Hindi');
									}
							 	}
							 	if(plan == 'Kannada')
							 	{
							 		$scope.show[4] = false;
									$scope.show[5] = false;
									$scope.show[7] = false;
									$scope.show[8] = false;
									if($scope.languages.length > 0)
									{
										$scope.languages.splice(0,$scope.languages.length);
										$scope.languages.push('Kannada');
									}
									else
									{
										$scope.languages.push('Kannada');
									}
							 	}
							 	if(plan == 'Tamil')
							 	{
							 		$scope.show[4] = false;
									$scope.show[5] = false;
									$scope.show[6] = false;
									$scope.show[8] = false;
									if($scope.languages.length > 0)
									{
										$scope.languages.splice(0,$scope.languages.length);
										$scope.languages.push('Tamil');
									}
									else
									{
										$scope.languages.push('Tamil');
									}
							 	}
							 	if(plan == 'All')
							 	{
							 		alert("Not Allowed in SOLO");
							 		$scope.show[8] = false;
							 		
							 	}
					 } 
					 if($scope.choosen == 1)
					 {
							 	if(plan == 'English')
							 	{
							 		if($scope.languages.length >= 2)
							 		{
							 			var messg = $scope.languages[0]+" or "+$scope.languages[1]+" De-Select any one ?";
		                        		alert(messg);
		                        		$scope.show[4] = false;
							 		}
							 		else
							 		{
							 			$scope.languages.push('English');
							 		}
							 	}
							 	if(plan == 'Hindi')
							 	{
							 		if($scope.languages.length >= 2)
							 		{
							 			var messg = $scope.languages[0]+" or "+$scope.languages[1]+" De-Select any one ?";
		                        		alert(messg);
		                        		$scope.show[5] = false;
							 		}
							 		else
							 		{
							 			$scope.languages.push('Hindi');
							 		}
							 	}
								if(plan == 'Kannada')
							 	{
							 		if($scope.languages.length >= 2)
							 		{
							 			var messg = $scope.languages[0]+" or "+$scope.languages[1]+" De-Select any one ?";
		                        		alert(messg);
		                        		$scope.show[6] = false;
							 		}
							 		else
							 		{
							 			$scope.languages.push('Kannada');
							 		}
							 	}
							 	if(plan == 'Tamil')
							 	{
							 		if($scope.languages.length >= 2)
							 		{
							 			var messg = $scope.languages[0]+" or "+$scope.languages[1]+" De-Select any one ?";
		                        		alert(messg);
		                        		$scope.show[7] = false;
							 		}
							 		else
							 		{
							 			$scope.languages.push('Tamil');
							 		}
							 	}
							 	if(plan == 'All')
							 	{
							 		alert("Not Allowed in SOLO");
							 		$scope.show[8] = false;
							 		
							 	}
					 } 
        			 if($scope.choosen == 2)
					 {
							 	if(plan == 'English')
							 	{
							 		if($scope.languages.length >= 3)
							 		{
							 			var messg = $scope.languages[0]+" or "+$scope.languages[1]+" or "+$scope.languages[2]+"De-Select any one ?";
		                        		alert(messg);
		                        		$scope.show[4] = false;
							 		}
							 		else
							 		{
							 			$scope.languages.push('English');
							 		}
							 	}
							 	if(plan == 'Hindi')
							 	{
							 		if($scope.languages.length >= 3)
							 		{
							 			var messg = $scope.languages[0]+" or "+$scope.languages[1]+" or "+$scope.languages[2]+"De-Select any one ?";
		                        		alert(messg);
		                        		$scope.show[5] = false;
							 		}
							 		else
							 		{
							 			$scope.languages.push('Hindi');
							 		}
							 	}
								if(plan == 'Kannada')
							 	{
							 		if($scope.languages.length >= 3)
							 		{
							 			var messg = $scope.languages[0]+" or "+$scope.languages[1]+" or "+$scope.languages[2]+"De-Select any one ?";
		                        		alert(messg);
		                        		$scope.show[6] = false;
							 		}
							 		else
							 		{
							 			$scope.languages.push('Kannada');
							 		}
							 	}
							 	if(plan == 'Tamil')
							 	{
							 		if($scope.languages.length >= 3)
							 		{
							 			var messg = $scope.languages[0]+" or "+$scope.languages[1]+" or "+$scope.languages[2]+"De-Select any one ?";
		                        		alert(messg);
		                        		$scope.show[7] = false;
							 		}
							 		else
							 		{
							 			$scope.languages.push('Tamil');
							 		}
							 	}
							 	if(plan == 'All')
							 	{
							 		alert("Not Allowed in SOLO");
							 		$scope.show[8] = false;
							 		
							 	}
					 }
					 if($scope.choosen == 3)
					 {
					 		if($scope.languages.length == 0)
					 		{
					 			$scope.languages.push('English');
					 			$scope.languages.push('Hindi');
					 			$scope.languages.push('Kannada');
					 			$scope.languages.push('Tamil');
					 		}
					 		else
					 		{
					 			$scope.languages.splice(0,$scope.languages.length);
					 			$scope.languages.push('English');
					 			$scope.languages.push('Hindi');
					 			$scope.languages.push('Kannada');
					 			$scope.languages.push('Tamil');
					 		}
					 } 
        			}
        		}
        		else
        		{
        			if($scope.choosen == 1)
					 {
							 	if(plan == 'English')
							 	{
							 		var index = $scope.languages.indexOf(plan);

									$scope.languages.splice(index,1);
							 	}
							 	if(plan == 'Hindi')
							 	{
							 		var index = $scope.languages.indexOf(plan);

									$scope.languages.splice(index,1);
							 	}
							 	if(plan == 'Kannada')
							 	{
							 		var index = $scope.languages.indexOf(plan);

									$scope.languages.splice(index,1);
							 	}
							 	if(plan == 'Tamil')
							 	{
							 		var index = $scope.languages.indexOf(plan);

									$scope.languages.splice(index,1);
							 	}
					 }
					 if($scope.choosen == 2)
					 {
					 			if(plan == 'English')
							 	{
							 		var index = $scope.languages.indexOf(plan);

									$scope.languages.splice(index,1);
							 	}
							 	if(plan == 'Hindi')
							 	{
							 		var index = $scope.languages.indexOf(plan);

									$scope.languages.splice(index,1);
							 	}
							 	if(plan == 'Kannada')
							 	{
							 		var index = $scope.languages.indexOf(plan);

									$scope.languages.splice(index,1);
							 	}
							 	if(plan == 'Tamil')
							 	{
							 		var index = $scope.languages.indexOf(plan);

									$scope.languages.splice(index,1);
							 	}
					 }	
					if($scope.choosen == 3)
					{
						$scope.show[4] = false;
						$scope.show[5] = false;
						$scope.show[6] = false;
						$scope.show[7] = false;
						$scope.show[8] = false;
						if($scope.languages.length > 0)
						{
							$scope.languages.splice(0,$scope.languages.length);
						}
					}
					if(plan == 'SOLO')
					{
						$scope.choosen = 99;
					}
					if(plan == 'MINI')
					{
						$scope.choosen = 99;
					}
					if(plan == 'PLUS')
					{
						$scope.choosen = 99;
					}
					if(plan == 'ULTRA')
					{
						$scope.choosen = 99;
					}	 		
        		}
        	}
});
