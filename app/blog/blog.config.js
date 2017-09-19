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
            })

            .state("createPost", {
                url: "/createPost",
                templateUrl: "blog/blog.post.create.html",
                controllerAs: "vm",
                controller: "PostCreationController"
            })

            .state("editPost", {
                url: "/editPost/:postId",
                templateUrl: "blog/blog.post.edit.html",
                controllerAs: "vm",
                controller: "PostEditingController"
            })



    });