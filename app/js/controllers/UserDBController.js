'use strict';

videoApp.controller('UserDBController', 
	function UserDBController($scope) {

		$scope.sort = 'name';
		$scope.reverse = false;

		$scope.movies = [
					{
						name : '12 Years in Slave',
						language : 'English',
						id : '1',
						duration : '95', 
						poster : '/img/small/12-years-a-slave.jpg',
						rating : 4,
						synopsis : 'In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.'
					},
					{
						name : 'A Beautiful Mind',
						language: 'English',
						id : '2',
						duration : '100',
						poster : '/img/small/A_Beautiful_Mind.jpg',
						rating : 4,
						synopsis : 'After a brilliant but asocial mathematician accepts secret work in cryptography, his life takes a turn for the nightmarish.'
					},
					{
						name : '3 Idiots',
						language: 'Hindi',
						id : '3',
						duration : '120',
						poster : '/img/small/3-idiots.jpg',
						rating : 4,
						synopsis : 'Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend.'
					},
					{
						name : '7aam Arivu',
						language: 'Tamil',
						id : '4',
						duration : '135',
						poster : '/img/small/7aamarivu.jpg',
						rating : 3,
						synopsis : 'A genetic engineering student tries to bring back the skills of a legend of the past and use his skills to save India from a deadly virus attack by China.'
					}
				]

		$scope.devices = 
					[
						{
							name  : 'ALL BROWSERS',
							image : '/assets/img/All-Browsers.jpg'
						},
						{
							name  : 'ANDROID HDMI', 
							image : '/assets/img/Android-app-on-google-play.svg'
						},
						{
							name  : 'APPLE TV',
							image : '/assets/img/App_Store_Badge_EN.png'
						},
						{
							name  : 'SAMSUNG SMART TV',
							image : '/assets/img/samsung-smart-tv-2.jpg'
						},
						{
							name  : 'SONY BRAVIA TV',
							image : '/assets/img/Sony-Bravia.jpg'
						},
						{
							name  : 'PANASONIC VIERA TV',
							image : '/assets/img/Panasonic-Viera.jpg'
						}
					]
});