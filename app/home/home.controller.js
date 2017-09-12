"use strict"

angular.module("home")
    .controller("HomeController", function(ArticlesService, SongsService, MixtapesService, $scope) {
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



        ArticlesService.getArticles().then(
            function(data) {
                vm.articles = data.data;
                vm.mainArticle = vm.articles[0]
            }
        );



        MixtapesService.getMixtapes().then(
            function(data) {
                vm.mixtapes = data.data;
            }
        );

        $scope.currentNavItem = 'page1';


    })
