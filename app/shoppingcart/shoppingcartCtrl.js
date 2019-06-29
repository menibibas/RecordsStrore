app.controller("shoppingcartCtrl", function ($scope, userSrv, $location) {

    if(!userSrv.isSignedIn()) {
        $location.path("/");
        return;
    }


    $scope.user = userSrv.getActiveUser();
    
})