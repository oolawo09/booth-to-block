"use strict"

angular.module("myApp")
    .controller("HomeController", function(ArticlesService, SongsService) {
        var vm = this;

        vm.mainArticle = {
            img: "../img/Kendrick.jpg",
            author: "Lorem Ipsum",
            title: "Kendrick drops a new album",
            preview: "Lorem ipsum dolor sit amet, te melius inermis postulant duo, ne docendi consequat reformidans per, ad eos quis eripuit. Ne habemus complectitur cum. Integre commune gubergren est in, quando oporteat cum cu. Eum eu nullam tibique adipisci, vix at fabulas urbanitas consequuntur. Tamquam voluptatum te vis. Sea ei inani nemore iracundia.",
            content: ""
        }

         SongsService.getSongs().then(
            function(data) {
                vm.songs = data.data;
            }
        );

        vm.songs = [
            { artist: "Solange", title: "Cranes in the sky", img: "../img/cranesInTheSky.jpeg" },
            { artist: "Nikki Minaj", title: "Anaconda", img: "../img/anaconda.jpeg" },
            { artist: "Rihanna", title: "Bitch better have my money", img: "../img/bbhmm.jpeg" }
        ]


        ArticlesService.getArticles().then(
            function(data) {
                vm.articles = data.data;
            }
        );

        vm.mixtapes = [
            { artist: "Joey Badass", title: "", img: "../img/joeyBadass.jpeg" },
            { artist: "Chance the Rapper", title: "", img: "../img/chanceTheRapper.jpeg" },
            { artist: "Logic", title: "", img: "../img/logic.jpeg" }
        ]
    })
