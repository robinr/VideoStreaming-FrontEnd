'use strict';

videoApp.controller('MainMenuController',
	function MainMenuController($scope, $window, slidesData) {
		
		$scope.slides = slidesData.slides;

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

        $scope.updateLayout = function() {
        	$scope.nextSlide();
        }

        $scope.callSearch = function() {
        	var landingURL = "http://localhost:8000/Search.html";
        	$window.open(landingURL,"_self");
        }

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

    