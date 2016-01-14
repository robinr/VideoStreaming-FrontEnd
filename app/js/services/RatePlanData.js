videoApp.factory('rateplanData', function() {
		return {
			rateplan : {
				packages:
					[
						{
							plan  : 'SOLO',
							offer : '/assets/img/Solo.png',
							info  : 'Choose any one ?',
							text : 'Just Rs 50 per month',
							languages : 
								[
									{
										name : 'English'
									},
									{
										name : 'Hindi'
									},
									{
										name : 'Kannada'
									},
									{
										name : 'Tamil'
									}
								]
						},
						{
							plan : 'MINI',
							offer : '/assets/img/Mini.png',
							info : 'Choose any two ?',
							text :  'Just Rs 80 per month',
							languages :
								[
									{
										name : 'English'
									},
									{
										name : 'Hindi'
									},
									{
										name : 'Kannada'
									},
									{
										name : 'Tamil'
									}
								]
						},
						{
							plan : 'PLUS',
							offer : '/assets/img/Plus.png',
							info : 'Choose any three ?',
							text :  'Just Rs 120 per month',
							languages :
								[
									{
										name : 'English'
									},
									{
										name : 'Hindi'
									},
									{
										name : 'Kannada'
									},
									{
										name : 'Tamil'
									}
								]
						},
						{
							plan : 'ULTRA',
							offer : '/assets/img/Ultra.png',
							text :  'Just Rs 150 per month',
							languages :
								[
									{
										name : 'All'
									}
								]
						}

					]
			}
		}
	});