app.controller("shoppingcartCtrl", function ($scope, userSrv, $location, shoppingcartSrv) {

    if(!userSrv.isSignedIn()) {
        $location.path("/");
        return;
    }

    $scope.user = userSrv.getActiveUser();

    $scope.shoppingcarts =  shoppingcartSrv.getActiveUserShoppingcarts();
        
    $scope.addRecord=function() {
        $location.path("/records");
      }
       
       $scope.removeItem=function(index) {
        shoppingcartSrv.removeItem(index);
      }

    
    
})