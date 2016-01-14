'use strict';

videoApp.controller('PlayerController', ['$scope', '$document', '$timeout', '$window', 'playlistData', 'searchData', 'popularData',
	function PlayerController($scope, $document, $timeout, $window, playlistData, searchData, popularData) {

		$scope.presentPage = 0;
		$scope.playlist = playlistData.playlist;
		$scope.posters =  searchData.posters;
		$scope.movieslist = popularData.popular.medias;

		$scope.picked = [];


		$scope.usertotal = $scope.posters.length;
		$scope.usize = 5;
		$scope.unumPages = $scope.usertotal / $scope.usize;

		$scope.currentplaylist = [];
		$scope.currentplaylistidx;
		$scope.currentname = '';
		$scope.actors = '';
		$scope.synopsis = '';
		console.log($scope.unumPages);

	$scope.callSearch = function() {
            var landingURL = "http://localhost:8000/Search.html";
            $window.open(landingURL,"_self");
            }

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

		$scope.changePlaylist = function(select,idx,listname)
		{
			console.log(select);
			console.log(idx);
			console.log(listname);
			if(select == true)
			{
				var list = $scope.playlist.lists[idx];
				console.log(list);
				if($scope.currentplaylist != null)
				{
					$scope.currentplaylist.splice(0,$scope.currentplaylist.length);
					for(var j = 0; j < $scope.picked.length; j++) $scope.picked[j] = false;
					$scope.picked[idx] = true;
				}
				for(var i = 0; i < list.movielist.length; i++)
				{
					$scope.currentplaylist.push($scope.movieslist[list.movielist[i].mediaid]);
					console.log($scope.currentplaylist[i]);
				}
				$scope.videoSource = $scope.currentplaylist[0].content;
				console.log($scope.videoSource);
				$scope.titleDisplay = $scope.currentplaylist[0].name;
				$scope.currentname = $scope.currentplaylist[0].name;
				$scope.actors = $scope.currentplaylist[0].actors;
				$scope.synopsis = $scope.currentplaylist[0].synopsis;
				$scope.currentplaylistidx = 1;
				console.log($scope.titleDisplay);
			}
			else
			{
				if($scope.currentplaylist != null)
				{
					$scope.currentplaylist.splice(0,$scope.currentplaylist.length);
					for(var j = 0; j < $scope.picked.length; j++) $scope.picked[j] = false;
					$scope.videoSource = '/video/StarlightScamper.mp4'; 
        			$scope.titleDisplay = 'StarlightScamper';
        			$scope.videoDisplay = document.getElementById("VideoElement");
        		}
			}
		}

        $scope.pagenext();


        $scope.videoSource = '/video/StarlightScamper.mp4'; 
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
     
    $timeout( function() {
                $scope.updateLayout();
	}, 1000);
    

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

	$scope.playnext = function() {
		console.log("Entering Playnext");
		if($scope.currentplaylistidx < $scope.currentplaylist.length)
		{
			$scope.videoSource = $scope.currentplaylist[$scope.currentplaylistidx].content;
			console.log($scope.videoSource);
			$scope.videoDisplay = $scope.currentplaylist[$scope.currentplaylistidx].name;
			console.log($scope.videoDisplay);
			$scope.currentname = $scope.currentplaylist[$scope.currentplaylistidx].name;
			$scope.actors = $scope.currentplaylist[$scope.currentplaylistidx].actors;
			$scope.synopsis = $scope.currentplaylist[$scope.currentplaylistidx].synopsis;
			$scope.currentplaylistidx = $scope.currentplaylistidx + 1; 
			$scope.videoDisplay = document.getElementById("VideoElement");
			//$scope.ended = true;

			$scope.togglePlay();
		}
	}

    $scope.initPlayer = function() {
        $scope.currentTime = 0;
        $scope.totalTime = 0;
        $scope.videoDisplay.addEventListener("timeupdate", $scope.updateTime, true);
        $scope.videoDisplay.addEventListener("loadedmetadata", $scope.updateData, true);
        $scope.videoDisplay.addEventListener("ended", $scope.playnext, true);
    }
    
    

    $scope.initPlayer();



}]);

videoApp.filter('time', function() {
    return function(seconds) {
        var hh = Math.floor(seconds / 3600), mm = Math.floor(seconds / 60) % 60, ss = Math.floor(seconds) % 60;
        return hh + ":" + (mm < 10 ? "0" : "") + mm + ":" + (ss < 10 ? "0" : "") + ss;
    };
});
