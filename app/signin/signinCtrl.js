app.controller("signinCtrl", function ($scope, $location) {
    $scope.invalidCredentials = false;
    $scope.email = "";
    $scope.pwd = "";

    $scope.signin = function () {
        if($scope.email==="menibibas@gmail.com" && $scope.pwd==="1234"){
            $location.path("/records")
        } else {
            $scope.invalidCredentials = true;
        }
    }
    
})