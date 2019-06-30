app.controller("shoppingcartCtrl", function ($scope, userSrv, $location, shoppingcartSrv) {

    if(!userSrv.isSignedIn()) {
        $location.path("/");
        return;
    }


    $scope.user = userSrv.getActiveUser();

    shoppingcartSrv.getActiveUserShoppingcarts().then(function(shoppingcarts) {
        $scope.shoppingcarts = shoppingcarts;
    
      })
    
})