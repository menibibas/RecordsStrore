app.factory("recordSrv", function ($q, $http, $log, userSrv) {

    function Record(id, bname, aname, desc, image, price) {
        this.id = id;
        this.bname = bname;
        this.aname = aname;
        this.desc = desc;
        this.image = image;
        this.price = price;
      }
    console.log(Record);
      function getRecords () {
        var async = $q.defer();
      
      var records = [];
      $http.get("app/Model/data/records.json").then(function(res) {
        // on success 
        
        for (var i = 0; i < res.data.length; i++) {
          var record = new Record(res.data[i].id, res.data[i].bname, res.data[i].aname,
            res.data[i].desc, res.data[i].image, res.data[i].price);
          records.push(record);
          }
     console.log(getRecords)
      async.resolve(records);
    }, function(err) {
      $log.error(err);
      async.reject(err);
    });

    return async.promise;
  }

    return {
        getRecords: getRecords
        
    }

});