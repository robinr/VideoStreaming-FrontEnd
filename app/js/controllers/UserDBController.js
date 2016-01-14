'use strict';

videoApp.controller('UserDBController', 
	function UserDBController($scope, $window, popularData, devicesData, playlistData) {

		$scope.sort = 'id';
		$scope.reverse = false;
		$scope.choosen = [];
		$scope.saving = [];
		$scope.picked = [];

		$scope.ncurrent = 0;
		$scope.plyminutes = $scope.ncurrent;
		$scope.alltotal = 450;
		$scope.newlist = true;
		$scope.modifyidx;
		$scope.modifyname;

		$scope.movies = popularData.popular.medias;

		$scope.devices = devicesData.apps.devices;

		$scope.playlist = playlistData.playlist;
		$scope.addnewlist = [];
		$scope.selecteddevice = [];


		$scope.callSearch = function() {
            var landingURL = "http://localhost:8000/Search.html";
            $window.open(landingURL,"_self");
            }

		$scope.updateList = function(select,idx)
		{
			if(select == true)
			{
				$scope.ncurrent = $scope.movies[idx].duration + $scope.ncurrent;
				$scope.plyminutes = $scope.ncurrent;
				if($scope.newlist == false)
				{
					$scope.playlist.lists[$scope.modifyidx].duration =  $scope.ncurrent;
				}
			}
			else
			{
				$scope.ncurrent = $scope.ncurrent - $scope.movies[idx].duration;
				$scope.plyminutes = $scope.ncurrent;
				if($scope.newlist == false)
				{
					$scope.playlist.lists[$scope.modifyidx].duration =  $scope.ncurrent;
				}
			}
		}


		$scope.modifyList = function(select,idx,name)
		{
			var item;
			
			if(select == true)
			{
				item = $scope.playlist.lists[idx];
				$scope.newlist = false;
				$scope.ncurrent = $scope.playlist.lists[idx].duration;
				for(var j = 0; j < $scope.movies.length; j++) $scope.choosen[j] = false;
				for(var k = 0; k < $scope.playlist.lists.length; k++) $scope.saving[k] = false;
				$scope.saving[idx] = true;
				$scope.modifyidx = idx;
				for(var i = 0; i < item.movielist.length; i++)
				{
					$scope.choosen[item.movielist[i].mediaid] = true;
				}
				$scope.modifyname = $scope.playlist.lists[idx].name;
			}
			else
			{
				$scope.ncurrent = 0;
				$scope.newlist = true;
				for(var j = 0; j < $scope.movies.length; j++) $scope.choosen[j] = false;
			}
		}

		$scope.save = function(select,name)
		{ 
			if((select == null) || (select == false))
			{
				if($scope.modifyname != null)
				 {
					var playlist = {
						"name" : $scope.modifyname,
						"duration" : $scope.ncurrent,
						 "movielist" : []
					};
					for(var i = 0; i < $scope.choosen.length; i++)
					{
						if($scope.choosen[i] == true)
						{
							var media = {
											"mediaid" : i
										}
							playlist.movielist.push(media);		
						}
					}
					console.log(JSON.stringify(playlist));	
					alert("Update");			 				 	
				 }
				 else
				 {
				 	alert("No Selection Done");
				 }
			}
						   
			if(select == true)     
			{
				var playlist = {
					"name" : name.playlistName,
					"duration" : $scope.ncurrent,
					 "movielist" : []
				};
				for(var i = 0; i < $scope.choosen.length; i++)
				{
					if($scope.choosen[i] == true)
					{
						var media = {
										"mediaid" : i
									}
							playlist.movielist.push(media);		
					}
				}
				console.log(JSON.stringify(playlist));
				alert("Saved");
			}
			
		}

		$scope.refresh = function(select)
		{
			if(select == false)
			{
				$scope.ncurrent = 0;
				for(var j = 0; j < $scope.movies.length; j++) $scope.choosen[j] = false;
				console.log("cleared");
			}
		}

		$scope.pick = function(select,idx,name)
		{
			console.log(name);
			if(select == true)
			{
				$scope.selecteddevice.push($scope.devices[idx].name);
			}
			else
			{
				var index = $scope.selecteddevice.indexOf(name);
				$scope.selecteddevice.splice(index,1);
			}
		}

		$scope.clear = function()
		{
			$scope.selecteddevice.splice(0,$scope.selecteddevice.length);
			for(var i = 0; i < $scope.devices.length; i++) $scope.picked[i] = false;
			console.log("Cleared");
		}

		$scope.submit = function()
		{
			if($scope.selecteddevice.length > 0)
			{
				var activate = {
						"userid" : 1,
						"activation" : "true",
						"devices" : []
				};
				for(var i = 0; i < $scope.selecteddevice.length; i++)
				{
					var names = {
							"name" : $scope.selecteddevice[i]
					}
					activate.devices.push(names);
				}
				console.log(JSON.stringify(activate));
			}
			console.log("Submitted");
		}

});