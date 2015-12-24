'use strict';

videoApp.controller('AdminDBController', 
	function AdminDBController($scope) {

	$scope.sort = 'name';
	$scope.reverse = false;
	$scope.presentPage = 0;

	$scope.subscribers = 
				[
					{
						'name'     : 'Sales Manager',
						'userID'   : 'sales@videostreaming.com',
						'role'     : 'Admin',
						'rateplan' : 'none',
						'authorize': 'active',
						'billing'  :  0
					},
					{
						'name'	   :  'Robin R',
						'userID'   :  'robinr.rao@gmail.com',
						'role'	   :  'User',
						'rateplan' :  'ULTRA',
						'authorize':  'active',
						'billing'  :  15
					},
					{
						'name'     :  'Suresh S',
						'userID'   :  'sureshk5@gmail.com',
						'role'     :  'User',
						'rateplan' :  'ULTRA',
						'authorize':  'deactive',
						'billing'  :  20
					},
					{
						'name'     :  'Scott Meyers',
						'userID'   :  'scott.m@gmail.com',
						'role'     :  'User',
						'rateplan' :  'SOLO',
						'authorize':  'active',
						'billing'  :  25	
					},
					{
						'name'	   :   'Andrew Garfield',
						'userID'   :   'AndrewGD',
						'role'     :   'User',
						'rateplan' :   'MINI',
						'authorize':   'deactive',
						'billing'  :   30
					},
					{
						'name'     :   'Admin Manager',
						'userID'   :   'admin@videostreaming.com',
						'role'     :   'Admin',
						'rateplan' :   'none',
						'authorize':   'active',
						'billing'  :    0
					},
					{
						'name'	   :  'Adams R',
						'userID'   :  'adams.r@gmail.com',
						'role'	   :  'User',
						'rateplan' :  'PLUS',
						'authorize':  'active',
						'billing'  :   35
					},
					{
						'name'     :  'Mary Poppins',
						'userID'   :  'maryp@gmail.com',
						'role'     :  'User',
						'rateplan' :  'MINI',
						'authorize':  'deactive',
						'billing'  :   40
					},
					{
						'name'     :  'James wilson',
						'userID'   :  'james.w@gmail.com',
						'role'     :  'User',
						'rateplan' :  'PLUS',
						'authorize':  'active',
						'billing'  :  45	
					},
					{
						'name'	   :   'Barry Allen',
						'userID'   :   'BarryAn',
						'role'     :   'User',
						'rateplan' :   'MINI',
						'authorize':   'deactive',
						'billing'  :   50
					}
				]
	$scope.usertotal = $scope.subscribers.length;
	$scope.usize = 4;
		$scope.unumPages = $scope.usertotal / $scope.usize;
		console.log($scope.unumPages);

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

	$scope.movies = 
			[
				{
					'name':'12 Years a Slave',
					'language':'English',
					'id':1,
					'rights' : 'Free',
					'rating' : 3
				},
				{
					'name':'A Beautiful Mind',
					'language':'English',
					'id':2,
					'rights' : 'Free',
					'rating' : 4
				},
				{
					'name':'Avengers2',
					'language':'English',
					'id':3,
					'rights' : 'Member',
					'rating' : 2
				},
				{
					'name':'Cars2',
					'language':'English',
					'id':4,
					'rights' : 'Member',
					'rating' : 2
				},
				{
					'name':'Deception',
					'language':'English',
					'id':5,
					'rights' : 'Free',
					'rating' : 3
				},
				{
					'name':'2-States',
					'language':'Hindi',
					'id':6,
					'rights' : 'Free',
					'rating' : 4
				},
				{	
					'name':'3-Idiots',
					'language':'Hindi',
					'id':7,
					'rights' : 'Member',
					'rating' : 4
				},
				{
					'name':'Bhaag Milkha Bhaag',
					'language':'Hindi',
					'id':8,
					'rights' : 'Member',
					'rating' : 3
				},
				{
					'name':'Chennai Express',
					'language':'Hindi',
					'id':9,
					'rights' : 'Free',
					'rating' : 3
				},
				{
					'name':'Delhi 6',
					'language':'Hindi',
					'id':10,
					'rights' : 'Free',
					'rating' : 4
				},
				{
					'name':'Googly',
					'language':'Kannada',
					'id':11,
					'rights' : 'Member',
					'rating' : 4
				},
				{
					'name':'Maleyali Jotheyali',
					'language':'Kannada',
					'id':12,
					'rights' : 'Free',
					'rating' : 3
				},
				{	'name':'Mr 420',
					'language':'Kannada',
					'id':13,
					'rights' : 'Member',
					'rating' : 4
				},
				{	'name':'Topiwala',
					'language':'Kannada',
					'id':14,
					'rights' : 'Free',
					'rating' : 4
				},
				{
					'name':'Victory',
					'language':'Kannada',
					'id':15,
					'rights' : 'Free',
					'rating' : 4
				},
				{
					'name':'7am Arivu',
					'language':'Tamil',
					'id':16,
					'rights' : 'Free',
					'rating' : 4
				},
				{
					'name':'I Tamil',
					'language':'Tamil',
					'id':17,
					'rights' : 'Free',
					'rating' : 4
				},
				{
					'name':'Idhu Kathirvelan Kadhal',
					'language':'Tamil',
					'id':18,
					'rights' : 'Member',
					'rating' : 3
				},
				{
					'name':'Thalaiva',
					'language':'Tamil',
					'id':19,
					'rights' : 'Member',
					'rating' : 3
				},
				{
					'name':'Thillalangadi',
					'language':'Tamil',
					'id':20,
					'rights' : 'Member',
					'rating' : 4
				}
			]




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


        $scope.bills = [
        				{
        					billing : 15,
        					userID  : 'robinr.rao@gmail.com',
        					month   : 1438367400000,
        					payment : 'payment details',
        					reminder: 'disable'
        				},
        				{
        					billing : 15,
        					userID  : 'robinr.rao@gmail.com',
        					month   : 1440959400000,
        					payment : 'payment details',
        					reminder: 'disable' 
        				}	
        			]

});