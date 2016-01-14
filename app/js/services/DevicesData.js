videoApp.factory('devicesData',  function() {
		return {
			     apps :
			     {
					devices:
					[
						{
							name  : 'ALL-BROWSERS',
							image : '/assets/img/All-Browsers.jpg',
							url   : 'http://localhost:8000/test.html'
						},
						{
							name  : 'ANDROID-HDMI', 
							image : '/assets/img/Android-app-on-google-play.svg',
							url   : 'http://localhost:8000/test.html'
						},
						{
							name  : 'APPLE-TV',
							image : '/assets/img/App_Store_Badge_EN.png',
							url   : 'http://localhost:8000/test.html'
						},
						{
							name  : 'SAMSUNG-SMART-TV',
							image : '/assets/img/samsung-smart-tv-2.jpg',
							url   : 'http://localhost:8000/test.html'
						},
						{
							name  : 'SONY-BRAVIA-TV',
							image : '/assets/img/Sony-Bravia.jpg',
							url   : 'http://localhost:8000/test.html'
						},
						{
							name  : 'PANASONIC-VIERA-TV',
							image : '/assets/img/Panasonic-Viera.jpg',
							url   : 'http://localhost:8000/test.html'
						}
					]
				}
			}
});