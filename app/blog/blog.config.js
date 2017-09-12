"use strict";

angular.module("blog")
    .config(function($stateProvider, $sceDelegateProvider) {



        $stateProvider
            


            // Blog pages ========================================
            .state("blog", {
                url: "/blog",
                templateUrl: "blog/blog.html",
                controllerAs: "vm",
                controller: "BlogController"
            })

            .state("post", {
                url: "/post/:postId",
                templateUrl: "blog/blog.post.html",
                controllerAs: "vm",
                controller: "PostController"
            });


    });