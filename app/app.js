var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html"
        }).when("/signin", {
            templateUrl: "app/signin/signin.html",
            controller: "signinCtrl"
        }).when("/signup", {

        }).when("/records", {
            templateUrl: "app/records/records.html",
            controller: "recordsCtrl"
        }).when("/recordsDetails:id", {

        })

})

