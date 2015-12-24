'use strict';

videoApp.controller('MainMenuController', 
	function MainMenuController($scope) {
		
		$scope.slides= [
					{
						image:'img/large/A-beautiful-mind.jpg',
						description:'A Beautiful Mind'
					},
					{
						image:'img/large/12-years-a-slave.png',
						description:'12 years a slave'
					},
					{
						image:'img/large/cars-2-poster.jpg',
						description:'Cars 2'
					},
					{
						image:'img/large/Avengers-2-Age-of-Ultron-Free-Poster-Wallpaper.jpg',
						description:'Avengers 2'
					},
					{
						image:'img/large/Michelle_Williams_in_Deception_Wallpaper_4_1024.jpg',
						description:'Deception'
					},
					{
						image:'img/large/2states-poster.jpg',
						description:'2 States'
					},
					{
						image:'img/large/3-Idiots-Wallpaper.jpg',
						description: '3 Idiots'
					},
					{
						image:'img/large/delhi-6.jpg',
						description: 'Delhi-6'
					},
					{
						image:'img/large/Chennai-Express.jpg',
						description: 'Chennai Express'
					},
					{
						image:'img/large/Bhaag-Milka-Bhaag.jpg',
						description: 'Bhaag Milka Bhaag'
					},
					{
						image: '/img/large/googly_wallpaper.jpg',
						description: 'Googly'
					},
					{
						image: 'img/large/Maleyali_Jotheyali.jpg',
						description: 'Maleyali Jotheyali'
					}
				];

		$scope.direction = 'left';
		$scope.currentIndex = 0;

		$scope.setCurrentSlideIndex = function (index) {
			$scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
			$scope.currentIndex = index;
		};

		$scope.isCurrentSlideIndex = function (index) {
			return $scope.currentIndex === index;
		};

		$scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };



	})
	.animation('.slide-animation', function () {
	        return {
	            beforeAddClass: function (element, className, done) {
	                var scope = element.scope();

	                if (className == 'ng-hide') {
	                    var finishPoint = element.parent().width();
	                    if(scope.direction !== 'right') {
	                        finishPoint = -finishPoint;
	                    }
	                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
	                }
	                else {
	                    done();
	                }
	            },
	            removeClass: function (element, className, done) {
	                var scope = element.scope();

	                if (className == 'ng-hide') {
	                    element.removeClass('ng-hide');

	                    var startPoint = element.parent().width();
	                    if(scope.direction === 'right') {
	                        startPoint = -startPoint;
	                    }

	                    TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
	                }
	                else {
	                    done();
	                }
	            }
	        };
	    });

    