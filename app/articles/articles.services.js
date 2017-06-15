"use strict";

angular.module("articles")
    .factory("ArticlesService", function($http) {


        function getArticles() {
            return $http.get("articles/articles.json")
                .success(
                    function(data, status) {
                    	return data 
                    })
                .error(
                    function() {}
                );
        }

        //TODO figure out this asynch thing going on here 

       /* function getArticle(id, ){ 

        	return getArticles()
        		.then(function(data, status){ 

        			var articles = data.data; 


        			for(var i=0; i<articles.length; i++){ 

        				if(i == id){ 
        					article = articles[i]; 
        				}
        			}
        		})

        } */

        return {
            getArticles: getArticles 
        }
    });
