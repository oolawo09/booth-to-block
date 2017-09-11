"use strict";

angular.module("blog")
    .factory("BlogService", function($http) {


        function getPosts() {
            return $http.get("blog/blog.json")
                .success(
                    function(data, status) {
                    	return data 
                    })
                .error(
                    function() {}
                );
        }


        return {
            getPosts: getPosts 
        }
    });
