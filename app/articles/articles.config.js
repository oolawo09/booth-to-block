"use strict"; 

angular.module("articles")
	.config(function($stateProvider) {

        $stateProvider

        // Article detail pages ========================================
        .state("articles", {
          url: "/articles/:articleId", 
          templateUrl: "articles/articles.html", 
          controllerAs: "vm", 
          controller: "ArticlesController"
        }); 
     }); 