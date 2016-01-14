'use strict';

videoApp.controller('AdminDevicesController', 
	function AdminDevicesController($scope, $window, devicesData) {

		$scope.choosen = [];
		$scope.idx = true;
		$scope.apps = devicesData.apps;

		$scope.modifypkg = function(selected, index)
		{
			if(selected == true)
			{
				for(var j = 0; j < $scope.apps.devices.length; j++)
				{
					if(index == j)
					{
						$scope.choosen[j] = true;
						console.log(selected);
						console.log(index);
						$scope.idx = false;
					}
					else
					{
						$scope.choosen[j] = false;
					}
				}
			}
			else
			{
				$scope.idx = true;
				for(var k = 0; k < $scope.apps.devices.length; k++) $scope.choosen[k] = false;
			}
		}

		$scope.callSearch = function() {
            var landingURL = "http://localhost:8000/Search.html";
            $window.open(landingURL,"_self");
            }
            
		$scope.updateDevice = function(device, form)
		{
			var empty = "Missing ";
			for(var i = 0; i < $scope.apps.devices.length; i++)
			{
				if($scope.choosen[i] == true)
				{
					if(device.deviceName == null)
					{
						empty = empty+"device Name ?";
					}
					if(device.picture == null)
					{
						empty = empty+"device picture ?";
					}
					if(device.url == null)
					{
						empty = empty+"device url ?";
					}

				}
			}
			alert(empty);
		}

		$scope.addDevice = function(device, form)
		{
			var empty = "Missing ";

			if(device.deviceName == null)
			{
					empty = empty+"device Name ?";
			}
			if(device.picture == null)
			{
					empty = empty+"device picture ?";
			}
			if(device.url == null)
			{
					empty = empty+"device url ?";
			}
			alert(empty);
		}
	});