app.factory("userSrv", function () {

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
        if (email === "menibibas@gmail.com" && pwd === "1234") {
            activeUser = new User({ id: 1, email: "menibibas@gmail.com", pwd: "1234", fullName: "Meni Bibas", address: "Namir 19, Tel Aviv", phone: "03-7845147" });
            async.resolve(activeUser);
        } else {
            async.reject(401);
        }
        return async.promise;
    }

    return {
        isSignedIn: isSignedIn,
        signin: signin
    }

});