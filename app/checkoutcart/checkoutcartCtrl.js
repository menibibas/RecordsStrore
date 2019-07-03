app.controller("checkoutcartCtrl", function ($scope, $http, $location, shoppingcartSrv) {

    $scope.totalSum=function() {
        return shoppingcartSrv.totalSum();
         }


   
    });
    