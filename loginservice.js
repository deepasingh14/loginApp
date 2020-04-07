
var app = angular.module('myApp');

app.factory('LoginService', function () {
    debugger;
    var admin = 'deepa';
    var pass = '12345';
    var isAuthenticated = false;

    return {
        login: function (username, password) {
            isAuthenticated = username === admin && password === pass;
            return isAuthenticated;
        },
        isAuthenticated: function () {
            return isAuthenticated;
        }
    };

});