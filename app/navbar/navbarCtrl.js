app.controller("navbarCtrl", function ($scope, userSrv, $location, shoppingcartSrv) {

    $scope.isSignedIn = function () {
       return userSrv.isSignedIn();
    }
    $scope.signoff = function() {
        userSrv.signoff();
        $location.path("/");
    }

    $scope.shoppingLength=function() {
      return  shoppingcartSrv.shoppingLength();
      }
})