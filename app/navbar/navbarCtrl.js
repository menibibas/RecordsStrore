app.controller("navbarCtrl", function ($scope, userSrv, $location, shoppingcartSrv, $rootScope) {

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

      $scope.clearFilter=function() {
      $rootScope.queryRecord = "";  
      }
})