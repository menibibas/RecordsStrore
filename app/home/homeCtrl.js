app.controller("homeCtrl", function ($scope, $http, $location) {



$scope.queryRecord = "";
$scope.filterRecord = function(record) {
if (record.bname.toLowerCase().includes($scope.queryRecord.toLowerCase()) || 
    record.aname.toLowerCase().includes($scope.queryRecord.toLowerCase())) {
  return $location.path("/records");
} else {
  return false;
}
}
});

// Scope.findRecord = function() {


// }

// $location.path("/records");
// }, function (err) {
//     $scope.invalidCredentials = true;
// });