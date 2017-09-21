"use strict";

angular.module("session")
    .factory("sessionService", function($cookies) {

        function initAdminSession(data) {
            var session = {}
            session.isAuthenticated = true;
            session.isAdmin = true;
            session.token = data.token;
            session.username = data.username;
            $cookies.putObject("adminSession", session);
        }

        function getAdminSession() {
            return $cookies.getObject("adminSession");
        }

        function isAdmin() {
            var session = {}
            session = $cookies.getObject("adminSession");
            if (session == undefined) {
                return false;
            } else {
                return session.isAdmin;
            }

        }

        function destroyAdminSession() {
            $cookies.remove("adminSession")
        }

        return {
            initAdminSession: initAdminSession,
            getAdminSession: getAdminSession,
            isAdmin: isAdmin,
            destroyAdminSession: destroyAdminSession
        };

    });