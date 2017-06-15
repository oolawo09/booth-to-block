"use strict";

angular.module("mixtapes")
    .controller("MixtapesController", function($stateParams, MixtapesService) {
        var vm = this;
        vm.mixtapeId = $stateParams.mixtapeId
        vm.mixtape = null; 


         MixtapesService.getMixtapes().then(
            function(data) {
                vm.mixtapes = data.data;

                for(var i=0; i<vm.mixtapes.length; i++){ 
                	if(vm.mixtapeId == i){ 
                		vm.mixtape = vm.mixtapes[i]; 
                	}
                }
            }
        );

    })
