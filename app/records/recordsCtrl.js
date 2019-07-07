app.controller("recordsCtrl", function ($scope, $http, recordSrv, userSrv, $location, shoppingcartSrv, $rootScope) {

  // function Record(id, bname, aname, desc, image, price) {
  //     this.id = id;
  //     this.bname = bname;
  //     this.aname = aname;
  //     this.desc = desc;
  //     this.image = image;
  //     this.price = price;
  //   }

  //   $scope.records = [];
  //   $http.get("app/Model/data/records.json").then(function(res) {
  //     // on success
  //     for (var i = 0; i < res.data.length; i++) {
  //       var record = new Record(res.data[i].id, res.data[i].bname, res.data[i].aname,
  //         res.data[i].desc, res.data[i].image, res.data[i].price);
  //         $scope.records.push(record);
  //       }
  //   }, function(err) {
  //     console.error(err);

  //   })

  // $scope.wasQueryEntered =   false;
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


  $scope.filterRecord = function (record) {

    if (!$rootScope.queryRecord) {
      return true;
    } else {
      
      if (record.aname.toLowerCase().includes($rootScope.queryRecord.toLowerCase()) ||
        record.bname.toLowerCase().includes($rootScope.queryRecord.toLowerCase())|| 
        record.genre.toLowerCase().includes($rootScope.queryRecord.toLowerCase())) {

        // $scope.wasQueryEntered =   true;
        return true;
      }
      else {
        return false;
      }

    }

  };


  //   if (record.bname.toLowerCase().includes($rootScope.queryRecord.toLowerCase()) ||
  //   record.aname.toLowerCase().includes($rootScope.queryRecord.toLowerCase())) {
  //   return $location.path("/records");
  // } else {
  //   return false;
  // }
  // }  

  // alert($rootScope.queryRecord);

  // shoppingcartSrv.addItem(record).then(function(newItem){
  //     $log.info("new item was added to cart: " + JSON.stringify(newItem));
  //     shoppingcartSrv.getActiveUserShoppingcarts().then(function(shoppingcarts) {
  //         $scope.shoppingcarts = shoppingcarts;
  //       })
  // })
  // $location.path("/shoppingcart.html")

});