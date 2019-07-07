app.controller("recordsCtrl", function ($scope, $http, recordSrv, userSrv, $location, shoppingcartSrv, $rootScope) {

    $scope.isSignedIn = function () {
    return userSrv.isSignedIn();
  }
  $scope.signoff = function () {
    userSrv.signoff();
    $location.path("/");
  }

  recordSrv.getRecords().then(function (records) {
    $scope.records = records;

  });

  $scope.addItem = function (record) {
    shoppingcartSrv.addItem(record);
  }

  $scope.classicrock = false;
  $scope.alternativerock = false;
  $scope.eighties = false;
  $scope.seventies = false;
  $scope.britpop = false;
  $scope.rbandrap = false;

  
  function isFilteredByCategory(record) {
    if ($scope.classicrock && record.genre.includes("Classic Rock") || 
    $scope.alternativerock && record.genre.includes("Alternative Rock") ||
    $scope.eighties && record.genre.includes("80's Music") ||
    $scope.seventies && record.genre.includes("70's Music") ||
    $scope.britpop && record.genre.includes("Britpop") ||
    $scope.rbandrap && record.genre.includes("R&B and Rap")
    )

    {
          return true;
    }
         else if (!$scope.classicrock && !$scope.alternativerock && !$scope.eighties
        && !$scope.seventies && !$scope.britpop && !$scope.rbandrap ) {
          return true;
        } else {
          return false
        }
      }



  $scope.filterRecord = function (record) {

    if (!isFilteredByCategory(record)) {
      return false;
    }

    if (!$rootScope.queryRecord) {
      return true;
    } else {

      if (record.aname.toLowerCase().includes($rootScope.queryRecord.toLowerCase()) ||
        record.bname.toLowerCase().includes($rootScope.queryRecord.toLowerCase()) /*||
    record.genre.toLowerCase().includes($rootScope.queryRecord.toLowerCase())*/)  {

       
        return true;
      }
      else {
        return false;
      }

    }

  };

  
});