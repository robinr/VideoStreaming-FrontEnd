'use strict';

videoApp.controller('PopularController', 
	function PopularController($scope) {

		$scope.popular  = 
			{
				medias: 
				[
					{
						name : '12 Years in Slave',
						language : 'English',
						id : '1',
						duration : '95', 
						poster : '/img/small/12-years-a-slave.jpg',
						actors : 'Stars: Chiwetel Ejiofor, Michael Kenneth Williams, Michael Fassbender',
						synopsis : 'In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.',
						director : 'Director: Steve McQueen'
					},
					{
						name : 'A Beautiful Mind',
						language: 'English',
						id : '2',
						duration : '100',
						poster : '/img/small/A_Beautiful_Mind.jpg',
						actors : 'Stars: Russell Crowe, Ed Harris, Jennifer Connelly',
						synopsis : 'After a brilliant but asocial mathematician accepts secret work in cryptography, his life takes a turn for the nightmarish.',
						director : 'Director : Ron Howard'
					},
					{
						name : '3 Idiots',
						language: 'Hindi',
						id : '3',
						duration : '120',
						poster : '/img/small/3-idiots.jpg',
						actors : 'Stars: Aamir Khan, Madhavan, Sharman Joshi, Kareena Kapoor',
						synopsis : 'Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend.',
						director : 'Director:Rajkumar Hirani '
					},
					{
						name : '7aam Arivu',
						language: 'Tamil',
						id : '4',
						duration : '135',
						poster : '/img/small/7aamarivu.jpg',
						actors : 'Stars: Suriya, Shruti K. Haasan, Johnny Nguyen',
						synopsis : 'A genetic engineering student tries to bring back the skills of a legend of the past and use his skills to save India from a deadly virus attack by China.',
						director : 'Director: A.R. Murugadoss'
					}
				]
			}
	}
);