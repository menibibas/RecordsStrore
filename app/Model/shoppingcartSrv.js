app.factory("shoppingcartSrv", function ($q, $http, $log, userSrv, recordSrv) {

    var shoppingcarts = [];
    var wasEverLoadedFromJSON = false;
    function Shoppingcart(record) {
        this.image = record.image;
        this.aname = record.aname;
        this.price= record.price;
        this.qty = 1;
    }


    function getActiveUserShoppingcarts() {
      
               return shoppingcarts;
            }


    // function getActiveUserShoppingcarts() {
    //     var async = $q.defer();

    //     // async.resolve(shoppingcarts);

    //     if (wasEverLoadedFromJSON) {
    //         async.resolve(shoppingcarts);
    //     } else {

    //         var activeUserId = userSrv.getActiveUser().id;
    //         wasEverLoadedFromJSON = true;
    //         $http.get("app/Model/data/records.json").then(function (res) {
    //             // on success
    //             for (var i = 0; i < res.data.length; i++) {
    //                 var shoppingcart = new Shoppingcart(res.data[i].image, res.data[i].aname,
    //                     res.data[i].price, res.data[i].qty);
    //                 shoppingcarts.push(shoppingcart);
    //             }

    //             async.resolve(shoppingcarts);
    //         }, function (err) {
    //             wasEverLoadedFromJSON = false;
    //             async.reject(err);
    //         });
    //     }
    //     return async.promise;
    // }

    function addItem(record) {
        var newItem = new Shoppingcart(record);
        shoppingcarts.push(newItem);

    }

    function shoppingLength() {
        var length = shoppingcarts.length;
        return length;
    }
    

    function removeItem(index) {
        shoppingcarts.splice(index, 1);
    }

    function emptyCart() {
        shoppingcarts.length = 0;  
        return totalSum = 0;
    }

    
    function totalSum() {
        var sum = 0;
        for(var i=0; i<shoppingcarts.length; i++) {
            sum += (shoppingcarts[i].qty*shoppingcarts[i].price);
        }
        return sum;
    }
        
          

    return {
        getActiveUserShoppingcarts: getActiveUserShoppingcarts,
        addItem: addItem,
        shoppingLength: shoppingLength,
        removeItem: removeItem,
        emptyCart: emptyCart,
        totalSum: totalSum

        
    }

});