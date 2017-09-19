"use strict";

angular.module("blog")
    .factory("BlogService", function($http) {

        function getPosts() {
            return $http.get(options.api.base_url + '/post/all');
        }

        function publishPost(post) {
            return $http.post(options.api.base_url + '/post', { 'post': post });
        }

        function updatePost(post) {
            return $http.put(options.api.base_url + '/post', { 'post': post });
        }

        function likePost(id) {
            return $http.post(options.api.base_url + '/post/like', { 'id': id });

        }

        function unlikePost(id) {
            return $http.post(options.api.base_url + '/post/unlike', { 'id': id });

        }

        function comment(id, comments) {
            return $http.post(options.api.base_url + '/post/comment', { 'id': id, 'comments': comments })
        }

        function deletePost(id) {
            return $http.delete(options.api.base_url + '/post/' + id);
        }

        return {
            getPosts: getPosts,
            publishPost: publishPost,
            updatePost: updatePost,
            likePost: likePost,
            unlikePost: unlikePost,
            comment: comment,
            deletePost: deletePost
        }
    })

    .factory('LikeService', function($window) {
        //Contains post ids already liked by the user
        var postLiked = [];

        if ($window.sessionStorage && $window.sessionStorage.postLiked) {
            postLiked.push($window.sessionStorage.postLiked);
        }

        return {
            isAlreadyLiked: function(id) {
                if (id != null) {
                    for (var i in postLiked) {
                        if (postLiked[i] == id) {
                            return true;
                        }
                    }

                    return false;
                }

                return false;
            },

            like: function(id) {
                if (!this.isAlreadyLiked(id)) {
                    postLiked.push(id);
                    $window.sessionStorage.postLiked = postLiked;
                }
            },

            unlike: function(id) {
                if (this.isAlreadyLiked(id)) {
                    for (var i in postLiked) {
                        if (postLiked[i] == id) {
                            postLiked.splice(i, 1);
                            $window.sessionStorage.postLiked = postLiked;

                            break;
                        }
                    }
                }
            }
        }
    })