app.controller("signinCtrl", function ($scope, $location, userSrv, $log) {
    $scope.invalidCredentials = false;
    $scope.email = "billy@gmail.com";
    $scope.pwd = "1234";

    $scope.signin = function () {

        userSrv.signin($scope.email, $scope.pwd).then(function (activeUser) {
            $log.info("successful sign in: " + JSON.stringify(activeUser));
            $location.path("/records");
        }, function (err) {
            $scope.invalidCredentials = true;
        });

    }

    

})