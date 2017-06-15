"use strict";

angular.module("songs")
    .controller("SongsController", function($stateParams, SongsService) {
        var vm = this;
        vm.songId = $stateParams.songId
        vm.song = null; 


         SongsService.getSongs().then(
            function(data) {
                vm.songs = data.data;

                for(var i=0; i<vm.songs.length; i++){ 
                	if(vm.songId == i){ 
                		vm.song = vm.songs[i]; 
                	}
                }
            }
        );

    })
