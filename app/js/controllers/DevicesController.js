'use strict';

videoApp.controller('DevicesController', 
	function DevicesController($scope) {

		$scope.apps = 
			{
				devices:
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
			};
	});