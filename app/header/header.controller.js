"use strict"; 

angular.module("header")
	.controller("headerController", function(sessionService){
		var vm = this;  

		vm.isAdmin = sessionService.isAdmin(); 
		vm.session = sessionService.getAdminSession(); 
		vm.logout = sessionService.destroyAdminSession(); 

	})