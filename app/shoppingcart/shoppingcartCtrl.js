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

      $scope.emptyCart = function() {
        shoppingcartSrv.emptyCart();
      }

      $scope.totalSum=function() {
       return shoppingcartSrv.totalSum();
        }

        $scope.checkout=function() {
          $location.path("/checkout");
        }
        // $scope.emptyCart = function() {
        //   $scope.shoppingcarts.length = 0;
        // }; 

        $scope.shoppingLength=function() {
          return  shoppingcartSrv.shoppingLength();
          }
    
        
})