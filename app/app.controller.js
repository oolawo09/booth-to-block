"use strict"

angular.module("myApp")
    .controller("HomeController", function() {
        var vm = this;

        vm.songs = [
            { artist: "Kendrick Lamar", title: "DNA" },
            { artist: "DJ Khaled", title: "I got the keys" },
            { artist: "Rihanna", title: "Man down" }
        ]
        vm.articles = [
            { preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis mi id posuere auctor. Donec fringilla, metus sed auctor pretium, urna ipsum eleifend leo, nec tristique enim felis in nisi. Donec sit amet justo a lectus convallis ultricies in id lacus. Nunc cursus vitae dui in lobortis. Ut iaculis erat ullamcorper neque ullamcorper finibus. Nam eleifend urna tortor, sit amet ornare leo fermentum vel. Fusce pulvinar erat lacus." },
            { preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis mi id posuere auctor. Donec fringilla, metus sed auctor pretium, urna ipsum eleifend leo, nec tristique enim felis in nisi. Donec sit amet justo a lectus convallis ultricies in id lacus. Nunc cursus vitae dui in lobortis. Ut iaculis erat ullamcorper neque ullamcorper finibus. Nam eleifend urna tortor, sit amet ornare leo fermentum vel. Fusce pulvinar erat lacus." },
            { preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis mi id posuere auctor. Donec fringilla, metus sed auctor pretium, urna ipsum eleifend leo, nec tristique enim felis in nisi. Donec sit amet justo a lectus convallis ultricies in id lacus. Nunc cursus vitae dui in lobortis. Ut iaculis erat ullamcorper neque ullamcorper finibus. Nam eleifend urna tortor, sit amet ornare leo fermentum vel. Fusce pulvinar erat lacus." }
        ]

        vm.mixtapes = [
            { preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis mi id posuere auctor. Donec fringilla, metus sed auctor pretium, urna ipsum eleifend leo, nec tristique enim felis in nisi. Donec sit amet justo a lectus convallis ultricies in id lacus. Nunc cursus vitae dui in lobortis. Ut iaculis erat ullamcorper neque ullamcorper finibus. Nam eleifend urna tortor, sit amet ornare leo fermentum vel. Fusce pulvinar erat lacus." },
            { preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis mi id posuere auctor. Donec fringilla, metus sed auctor pretium, urna ipsum eleifend leo, nec tristique enim felis in nisi. Donec sit amet justo a lectus convallis ultricies in id lacus. Nunc cursus vitae dui in lobortis. Ut iaculis erat ullamcorper neque ullamcorper finibus. Nam eleifend urna tortor, sit amet ornare leo fermentum vel. Fusce pulvinar erat lacus." },
            { preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis mi id posuere auctor. Donec fringilla, metus sed auctor pretium, urna ipsum eleifend leo, nec tristique enim felis in nisi. Donec sit amet justo a lectus convallis ultricies in id lacus. Nunc cursus vitae dui in lobortis. Ut iaculis erat ullamcorper neque ullamcorper finibus. Nam eleifend urna tortor, sit amet ornare leo fermentum vel. Fusce pulvinar erat lacus." }
        ]
    })
    .controller("Bookings", function() { 
    	var vm = this; 

    	vm.bookingDetails = {} ; 


    	vm.book = function(bookingDetails){ 
    		
    	}
    })
