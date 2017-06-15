"use strict";

angular.module("articles")
    .controller("ArticlesController", function($stateParams, ArticlesService) {
        var vm = this;
        vm.articleId = $stateParams.articleId
        vm.article = null; 


         ArticlesService.getArticles().then(
            function(data) {
                vm.articles = data.data;

                for(var i=0; i<vm.articles.length; i++){ 
                	if(vm.articleId == i){ 
                		vm.article = vm.articles[i]; 
                	}
                }
            }
        );

    })
