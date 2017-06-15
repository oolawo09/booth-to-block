"use strict";


angular.module("core.authenticate")
    .factory("Session", function() {
        //only holding an authenticationToken for now 
        //will need to flesh out this session object later 

        function create(authorisationToken, userRole) {
            this.authorisationToken = authorisationToken;
        }

        function destroy() {  
            this.authorisationToken = null;
        }

        return {
            create: create,
            destroy: destroy
        };
    });
