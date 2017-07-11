"use strict";

angular.module("articles")
    .config(function($stateProvider, $sceDelegateProvider) {

        //allow urls from other sites 
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            '*://www.youtube.com/**'
        ])

        $stateProvider

        // Article detail pages ========================================
            .state("articles", {
            url: "/articles/:articleId",
            templateUrl: "articles/articles.html",
            controllerAs: "vm",
            controller: "ArticlesController"
        });
    });
