app.controller("homeCtrl", function ($scope, $http, $location, $rootScope) {

$rootScope.queryRecord = "";
$scope.filterRecord = function() {
    $location.path("/records");

}


  
 

});





// Scope.findRecord = function() {


// }

// $location.path("/records");
// }, function (err) {
//     $scope.invalidCredentials = true;
// });