app.factory("userSrv", function ($q, $http) {

    var activeUser = null;

    function User(plainUser) {
        this.id = plainUser.id;
        this.email = plainUser.email;
        this.pwd = plainUser.pwd;
        this.fullName = plainUser.fullName;
        this.address = plainUser.address;
        this.phone = plainUser.phone;

    }

    function isSignedIn() {
        return activeUser ? true : false;
    }

    function signin(email, pwd) {
        var async = $q.defer();

        activeUser = null;
        $http.get("app/Model/data/user.json").then(function(res) {
            var users = res.data;
            for (var i = 0; i < users.length && !activeUser; i++) {
                if (email === users[i].email && pwd === users[i].pwd) {
                    activeUser = new User(users[i]);
                    async.resolve(activeUser);
                }
            }
        
            if (!activeUser) {
                async.reject(401);
            }
        }, function(err) {
            async.reject(err);
        })
        
        return async.promise;
    }

    function signoff() {
        activeUser = null;
    }

    return {
        isSignedIn: isSignedIn,
        signin: signin,
        signoff: signoff
    }

});