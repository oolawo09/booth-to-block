"use strict";


angular.module("profile")
    .controller("ProfileController", ["$http",
        function($http) {
            var vm = this;
            //TODO authenticate  

            // The model object that we reference 
            // in the markup 
            //TODO pull user data if authenticated 
            //api.get("http://localhost:9000/profile?email=");
            vm.user = {};

            // An array of our form fields with configuration
            // and options set. We make reference to this in
            // the 'fields' attribute on the  element
            $http.get("profile/profile.fields.json")
                .success(function(data, status) {
                    vm.fields = data; 

                }).error(function(data, status) {});


            //save profile data 
            //vm.setProfile = function() {
            //  api.post("http://localhost:9000/profile?email=" + vm.profile.email);
            //};

        }
    ]);
