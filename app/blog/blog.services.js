"use strict";

angular.module("blog")
    .factory("BlogService", function($http) {

        function() getPosts{
            return $http.get(options.api.base_url + '/post/all');
        }

        return {
            getPosts: getPosts

        }
    });


