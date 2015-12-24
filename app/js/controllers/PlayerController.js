'use strict';

videoApp.controller('PlayerController', ['$scope', '$document', '$timeout', 
	function PlayerController($scope, $document, $timeout) {

		$scope.presentPage = 0;

		$scope.posters = 
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
							},
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
							},
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
							},
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
	$scope.usertotal = $scope.posters.length;
	$scope.usize = 5;
		$scope.unumPages = $scope.usertotal / $scope.usize;
		console.log($scope.unumPages);

	$scope.partial = function (number) {
			var start = 0;
			var end = 0;
			var res = [];

			if(number === 1) {
				start = 0;
				end = 6;
			}
			if(number === 2)
			{
				start = 6;
				end = 11;
			}
			if(number === 3)
			{
				start = 11;
				end = 16
			}
			if(number === 4)
			{
				start = 16;
				end = 20;
			}
			res = $scope.posters.slice(start,end);
			console.log(res.length);
			return res;
		}

		$scope.pagenext= function ()
		{
		   $scope.presentPage  = $scope.presentPage + 1;
		   $scope.subset = $scope.partial($scope.presentPage);	
		}
		$scope.pageprev= function ()
		{
			$scope.presentPage = $scope.presentPage - 1;
			$scope.subset = $scope.partial($scope.presentPage);
		}
        $scope.pagenext();


        $scope.videoSource = 'video/ernesto.mp4';
        $scope.titleDisplay = 'StarlightScamper';
        $scope.videoDisplay = document.getElementById("VideoElement");

		$scope.videoPlaying = false;
		$scope.currentTime;
		$scope.totalTime;




        $scope.togglePlay = function() { 
        if($scope.videoDisplay.paused){
            $scope.videoDisplay.play();
            $scope.videoPlaying = true;
            $('#playBtn').children("span").toggleClass("icon-play", false);
            $('#playBtn').children("span").toggleClass("icon-pause", true);
        }else{
            $scope.videoDisplay.pause();
            $scope.videoPlaying = false;
            $('#playBtn').children("span").toggleClass("icon-play", true);
            $('#playBtn').children("span").toggleClass("icon-pause", false);
        }
    }
    
    $scope.toggleMute = function() {
        if($scope.videoDisplay.volume == 0.0){
            $scope.videoDisplay.volume = 1.0;
            $('#muteBtn').children("span").toggleClass("icon-volume-up", true);
            $('#muteBtn').children("span").toggleClass("icon-volume-off", false);
        }else{
            $scope.videoDisplay.volume = 0.0;
            $('#muteBtn').children("span").toggleClass("icon-volume-up", false);
            $('#muteBtn').children("span").toggleClass("icon-volume-off", true);
        }
    }

    $scope.initPlayer = function() {
        $scope.currentTime = 0;
        $scope.totalTime = 0;
        $scope.videoDisplay.addEventListener("timeupdate", $scope.updateTime, true);
        $scope.videoDisplay.addEventListener("loadedmetadata", $scope.updateData, true);
    }
    
    $scope.updateData = function(e) {
        $scope.totalTime = e.target.duration;
    }
    
    $scope.updateTime = function(e) {
        $scope.currentTime = e.target.currentTime;
        $scope.updateLayout();
    }

    $scope.updateLayout = function() {
        if(!$scope.$$phase) {
            $scope.$apply();
        }
    }
     
    $timeout(function(){
    $scope.updateLayout();
	},100);
    

	$scope.updateTime = function(e) {
	    $scope.currentTime = e.target.currentTime;

	    if($scope.currentTime == $scope.totalTime){
	        $scope.videoDisplay.pause();
	        $scope.videoPlaying = false;
	        $scope.currentTime = 0;
	        $('#playBtn').children("span").toggleClass("icon-play", true);
	        $('#playBtn').children("span").toggleClass("icon-pause", false);
	    }

	}

    $scope.initPlayer();



}]);

videoApp.filter('time', function() {
    return function(seconds) {
        var hh = Math.floor(seconds / 3600), mm = Math.floor(seconds / 60) % 60, ss = Math.floor(seconds) % 60;
        return hh + ":" + (mm < 10 ? "0" : "") + mm + ":" + (ss < 10 ? "0" : "") + ss;
    };
});
