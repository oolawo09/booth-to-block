"use strict";

angular.module("core.authenticate")
    .constant("API_ENDPOINTS", {
        signup: "http://localhost:9000/register",
        login: "http://localhost:9000/login",
    })
    .constant("HTTP_HEADERS"), {
        auth_token_header: "X-AUTH-TOKEN"
    }
