app.controller("navbarCtrl", function ($scope, userSrv, $location) {

    $scope.isSignedIn = function () {
       return userSrv.isSignedIn();
    }
    $scope.signoff = function() {
        $scope.signoff();
        $location.path("/");
    }
})