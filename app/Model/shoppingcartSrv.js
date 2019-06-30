app.factory("shoppingcartSrv", function ($q, $http, $log, userSrv, recordSrv) {

    var shoppingcarts = [];
    var wasEverLoadedFromJSON = false;
    function Shoppingcart(id, qty, aname, image, price) {
        this.id = id;
        this.image = image;
        this.aname = aname;
        this.price = price;
        this.qty = qty;
    }


    function getActiveUserShoppingcarts() {
        var async = $q.defer();
        if (wasEverLoadedFromJSON) {
            async.resolve(shoppingcarts);
        } else {

            var activeUserId = userSrv.getActiveUser().id;
            wasEverLoadedFromJSON = true;
            $http.get("app/Model/data/records.json").then(function (res) {
                // on success
                for (var i = 0; i < res.data.length; i++) {
                    var shoppingcart = new Shoppingcart(res.data[i].id, res.data[i].image, res.data[i].aname,
                        res.data[i].price, res.data[i].qty);
                    shoppingcarts.push(shoppingcart);
                }

                async.resolve(shoppingcarts);
            }, function (err) {
                $log.error(err);
                async.reject(err);
            });
        }
        return async.promise;
    }

    function addItem(id, image, aname, price, qty) {
        var newItem = new Shoppingcart(id, image, aname, price, qty);
        shoppingcarts.push(newItem);

    }

    return {
        getActiveUserShoppingcarts: getActiveUserShoppingcarts
    }

});