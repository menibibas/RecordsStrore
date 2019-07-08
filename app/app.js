var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
            controller: "homeCtrl"
        }).when("/signin", {
            templateUrl: "app/signin/signin.html",
            controller: "signinCtrl"
        }).when("/signup", {
            templateUrl: "app/signup/signup.html",
            controller: "signupCtrl"
        }).when("/records", {
            templateUrl: "app/records/records.html",
            controller: "recordsCtrl"
        }).when("/recordsDetails:id", {

        }).when("/shoppingcart", {
            templateUrl: "app/shoppingcart/shoppingcart.html",
            controller: "shoppingcartCtrl"
        }).when("/checkout", {
            templateUrl: "app/checkoutcart/checkoutcart.html",
            controller: "checkoutcartCtrl"
        }).when("/contactus", {
            templateUrl: "app/contactus/contactus.html",
            controller: "contactusCtrl"
        })
})

