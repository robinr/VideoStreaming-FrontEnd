'use strict';

videoApp.controller('AdminDBController', 
	function AdminDBController($scope, $window, subscribersData, moviesData, billingData, daterangeData) {

	$scope.sort = 'billing';
	$scope.reverse = false;
	$scope.presentPage = 0;
	$scope.show = [];

	$scope.rights = '';

	$scope.subscribers = subscribersData.subscribers;
				
	$scope.usertotal = $scope.subscribers.length;
	$scope.usize = 4;
		$scope.unumPages = $scope.usertotal / $scope.usize;
		console.log($scope.unumPages);

    $scope.callSearch = function() {
            var landingURL = "http://localhost:8000/Search.html";
            $window.open(landingURL,"_self");
            }

	$scope.upartial = function (number) {
			var start = 0;
			var end = 0;
			var res = [];

			if(number === 1) {
				start = 0;
				end = 4;
			}
			if(number === 2)
			{
				start = 4;
				end = 8;
			}
			if(number === 3)
			{
				start = 8;
				end = 12
			}
			if(number === 4)
			{
				start = 12;
				end = 16;
			}
			res = $scope.subscribers.slice(start,end);
			console.log(res.length);
			return res;
		}

		$scope.upagenext= function ()
		{
		   $scope.presentPage  = $scope.presentPage + 1;
		   $scope.usubset = $scope.upartial($scope.presentPage);	
		}
		$scope.upageprev= function ()
		{
			$scope.presentPage = $scope.presentPage - 1;
			$scope.usubset = $scope.upartial($scope.presentPage);
		}
        $scope.upagenext();



	$scope.sortType = 'id';
	$scope.sortReverse = false;
    $scope.currentPage = 0;

	$scope.movies = moviesData.movies;
			
	$scope.total = $scope.movies.length;
	$scope.size = 5;
	$scope.numPages = $scope.total / $scope.size;
	console.log($scope.numPages);

		$scope.partial = function (number) {
			var start = 0;
			var end = 0;
			var res = [];

			if(number === 1) {
				start = 0;
				end = 5;
			}
			if(number === 2)
			{
				start = 5;
				end = 10;
			}
			if(number === 3)
			{
				start = 10;
				end = 15
			}
			if(number === 4)
			{
				start = 15;
				end = 20;
			}
			res = $scope.movies.slice(start,end);
			console.log(res.length);
			return res;
		}

		$scope.pagenext= function ()
		{
		   $scope.currentPage  = $scope.currentPage + 1;
		   $scope.subset = $scope.partial($scope.currentPage);	
		}
		$scope.pageprev= function ()
		{
			$scope.currentPage = $scope.currentPage - 1;
			$scope.subset = $scope.partial($scope.currentPage);
		}
        $scope.pagenext();

        $scope.billhistory = billingData.bills;
        $scope.bills = [];
        $scope.choosen = 1;

        $scope.months = daterangeData.daterange;

        $scope.stateChanged = function(selected,count)
        {
        	console.log(selected);
        	console.log(count);

        	var allsubs = $scope.subscribers.length;

        	$scope.choosen = count;
        	if(selected == true)
        	{
        		for(var i = 0; i < allsubs; i++)
        		{
        			if( count != i) {
        				$scope.show[i] = false;
        			}
        		}
        	}
        	alert('Choose Start Month & End Month');
        }

        $scope.viewBill = function()
        {
        	var billid = $scope.subscribers[$scope.choosen].billing;
            var allbills = $scope.billhistory.length;
            var contextbills = $scope.bills.length;

            $scope.show[$scope.choosen] = true; 

            console.log("billid"+billid);

            if(contextbills > 0)
            {
            	$scope.bills.splice(0,$scope.bills.length);
            }

            if($scope.startmonth != null) 
            {
            	if($scope.endmonth != null)
            	{
            		for(var i = 0; i < allbills; i++)
        			{
        				if(billid == $scope.billhistory[i].billing)
        				{
        					if($scope.billhistory[i].month >= $scope.startmonth.UTC)
        					{ 
        						if($scope.billhistory[i].month <= $scope.endmonth.UTC)
        						{
        							$scope.bills.push($scope.billhistory[i]);
        						}
        					}
        				}
        			} 
            	}
            	else
            	{
            		alert('Choose End Month');
            	}
            }
            else
            {
            	alert('Choose Start Month & End Month');
            }
        	console.log(JSON.stringify($scope.bills));
        }

        $scope.Begin = function()
        {
        	console.log(JSON.stringify($scope.startmonth));
        }

        $scope.End = function()
        {
        	if($scope.startmonth.UTC == $scope.endmonth.UTC)
        	{
        		alert("Please select one month more the Start Month");
        		$scope.endmonth === null;
        	}
        }

        $scope.getstatus = function(value,index)
        {
        	console.log(value);
        	console.log(index);
        	$scope.subscribers[index].authorize = value;
        }

        $scope.authorize = function()
        {
        	var allactive = 0;
        	var alldeactive = 0;
        	for(var i = 0; i < $scope.subscribers.length; i++)
        	{
        		if($scope.subscribers[i].authorize == 'active')
        		{
        			allactive = allactive + 1;
        		}
        		if($scope.subscribers[i].authorize == 'deactive')
        		{
        			alldeactive = alldeactive + 1;
        		}
        	}
        	alert("active"+allactive+"deactive"+alldeactive);   // POST Method to activate users
        }

        $scope.setrights = function(value)
        {
        	$scope.rights = value;
        	console.log($scope.rights);
        } 

        $scope.upload = function(content, form)
        {
        	var empty = 'Missing';

        	if(content.moviename == null)
        	{
        		empty = empty+" MovieName";
        	} 
        	if(content.language == null)
        	{
        		empty = empty+" Language";
        	}
        	if(content.poster == null)
        	{
        		empty = empty+" Poster";
        	}
        	if(content.actor == null)
        	{
        		empty = empty+" Actor";
        	}
        	if(content.director == null)
        	{
        		empty = empty+" Director";
        	}
        	if(content.synopsis == null)
        	{
        		empty = empty+" Synopsis";
        	}
        	if(content.media == null)
        	{
        		empty = empty+" Media";
        	}
        	if($scope.rights == null)
        	{
        		empty = empty+" Rights"
        		content.right = $scope.rights;
        	}
        	alert(empty);
        }
       // $scope.viewBill();

});