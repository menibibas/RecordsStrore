app.controller("recordsCtrl", function ($scope, $http) {

    function Record(id, bname, aname, desc, image, price) {
        this.id = id;
        this.bname = bname;
        this.aname = aname;
        this.desc = desc;
        this.image = image;
        this.price = price;
      }
    
      $scope.records = [];
      $http.get("app/Model/data/records.json").then(function(res) {
        // on success
        for (var i = 0; i < res.data.length; i++) {
          var record = new Record(res.data[i].id, res.data[i].bname, res.data[i].aname,
            res.data[i].desc, res.data[i].image, res.data[i].price);
            $scope.records.push(record);
          }
      }, function(err) {
        console.error(err);
    
      })

      $scope.isSignedIn = function () {
        return userSrv.isSignedIn();
     }
     $scope.signoff = function() {
         userSrv.signoff();
         $location.path("/");
     }

});