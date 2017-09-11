"use strict";

angular.module("blog")
    .controller("BlogController", function(BlogService){ 
        var vm = this; 
        vm.posts = {}

        BlogService.getPosts().then( 
            function(data){
                vm.posts = data.data; 
            })
    })

    .controller("PostController", function($stateParams, BlogService) {
        var vm = this;
        vm.postId = $stateParams.postId
        vm.post = {}; 


         BlogService.getPosts().then(
            function(data) {
                vm.posts = data.data;

                for(var i=0; i<vm.posts.length; i++){ 
                	if(vm.postId == i){ 
                		vm.post = vm.posts[i]; 
                	}
                }
            }
        );

    })
