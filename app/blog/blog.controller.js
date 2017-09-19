"use strict";

angular.module("blog")
    .controller("BlogController", function(BlogService, sessionService, $state) {
        var vm = this;
        vm.posts = {};
        vm.isAdmin = sessionService.isAdmin();

        BlogService.getPosts().then(
            function(data) {
                vm.posts = data.data;
                for (var i = 0; i < vm.posts.length; i++) {
                    vm.posts[i].id = i;
                }
            })

        vm.createPost = function() {
            $state.go("createPost")
        }
    })

    .controller("PostController", function($stateParams, BlogService, LikeService, sessionService, $state) {
        var vm = this;
        vm.postId = $stateParams.postId
        vm.post = {};
        vm.id = {};
        vm.isAdmin = sessionService.isAdmin();

        BlogService.getPosts().then(
            function(data) {
                vm.posts = data.data;
                for (var i = 0; i < vm.posts.length; i++) {
                    vm.posts[i].id = i;
                }

                for (var i = 0; i < vm.posts.length; i++) {
                    if (vm.postId == i) {
                        vm.post = vm.posts[i];
                        vm.id = vm.post._id;
                    }
                }
            }
        );

        vm.likePost = function() {
            if (!LikeService.isAlreadyLiked(vm.id)) {
                BlogService.likePost(vm.id).success(function(data) {
                    vm.post.likes++;
                    LikeService.like(vm.id);
                    vm.isAlreadyLiked = true;
                }).error(function(data, status) {
                    console.log(status);
                    console.log(data);
                });
            }
        };

        vm.unlikePost = function()  {
            if (LikeService.isAlreadyLiked(vm.id)) {
                BlogService.unlikePost(vm.id).success(function(data) {
                    vm.post.likes--;
                    LikeService.unlike(vm.id);
                    vm.isAlreadyLiked = false;
                }).error(function(data, status) {
                    console.log(status);
                    console.log(data);
                });
            }
        }

        vm.comment = function(post) {
            console.log(post)
            post.comments.push(post.comment)
            if (post.comment != undefined) {
                BlogService.comment(vm.id, post.comments)
                    .success(function(data) {}).error(function(status, data) {
                        console.log(status);
                        console.log(data);
                    });
            }

        }

        vm.deletePost = function(id) {
            console.log("id ", id)
            console.log("post ", vm.post)
            if (id != undefined) {
                BlogService.deletePost(id).success(function(data) {
                    var posts = vm.posts;
                    for (var postKey in posts) {
                        if (posts[postKey]._id == id) {
                            vm.posts.splice(postKey, 1);
                            break;
                        }
                    }
                    $state.go("blog")
                }).error(function(status, data) {
                    console.log(status);
                    console.log(data);
                });
            }
        }
    })

    .controller("PostCreationController", function($state, BlogService) {
        var vm = this;

        vm.publishPost = function(post) {
            if (post.title != undefined &&
                post.content != undefined) {
                BlogService.publishPost(post)
                    .success(function(data) {
                        $state.go("blog")
                    }).error(function(status, data) {
                        console.log(status);
                        console.log(data);
                    });
            }
        }
    })

    .controller("PostEditingController", function($state, BlogService, $stateParams) {
        var vm = this;
        vm.postId = $stateParams.postId

        BlogService.getPosts().then(
            function(data) {
                vm.posts = data.data;
                for (var i = 0; i < vm.posts.length; i++) {
                    vm.posts[i].id = i;
                }

                for (var i = 0; i < vm.posts.length; i++) {
                    if (vm.postId == i) {
                        vm.post = vm.posts[i];
                        vm.id = vm.post._id;
                    }
                }
            }
        )

        vm.updatePost = function(post) {
            console.log(post)
            if (post.title != undefined &&
                post.content != undefined) {
                BlogService.updatePost(post)
                    .success(function(data) {
                        $state.go("blog")
                    }).error(function(status, data) {
                        console.log(status);
                        console.log(data);
                    });
            }
        }
    })