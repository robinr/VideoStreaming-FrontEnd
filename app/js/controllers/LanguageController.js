'use strict';

videoApp.controller('LanguageController', 
	function LanguageController($scope) {

		$scope.category  = 
				{
					languages:
							[
								{
									name : 'ENGLISH',
									posters: 
									[
										{
											movie : '/img/small/12-years-a-slave.jpg'
										},
										{
											movie : '/img/small/A_Beautiful_Mind.jpg'
										},
										{
											movie : '/img/small/avengers-2-age-of-ultron.jpg'
										},
										{
											movie : '/img/small/Cars2.jpg'
										},
										{
											movie : '/img/small/Deception.jpg'
										}
									]
								},
								{
									name : 'HINDI',
									posters:
									[
										{
											movie : '/img/small/2-states.jpg'
										},
										{
											movie : '/img/small/3-idiots.jpg'
										},
										{
											movie : '/img/small/Bhaag-Milkha-Bhaag.jpg'
										},
										{
											movie : '/img/small/Chennai-Express.jpg'
										},
										{
											movie : '/img/small/Delhi-6.jpg'
										}
									]
								},
								{
									name : 'KANNADA',
									posters:
									[
										{
											movie : '/img/small/googly.jpg'
										},
										{
											movie : '/img/small/Maleyali-Jotheyali.jpg'
										},
										{
											movie : '/img/small/mr-420-Poster.jpg'
										},
										{
											movie : '/img/small/Topiwala.jpg'
										},
										{
											movie : '/img/small/victory.jpg'
										}
									]
								},
								{
									name : 'TAMIL',
									posters:
									[
										{
											movie : '/img/small/7aamarivu.jpg'
										},
										{
											movie : '/img/small/I.jpg'
										},
										{
											movie : '/img/small/idhu_kathirvelan_kadhal.jpg'
										},
										{
											movie : '/img/small/Thalaiva.jpg'
										},
										{
											movie : '/img/small/Thillalangadi.jpg'
										}
									]
								}
							]
				}
			});

		
