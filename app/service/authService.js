angular.module("Chat").factory('AuthService', function($http, Config, $q) {

    return {
        token: null,
        isAuthenticated: false,

        authenticate: function authenticate(username, password) {
            var self = this;
            var deferred = $q.defer();
            $http.post(Config.apiUrl + "/auth", {username: username, password: password})
                .success(function authenticateSuccessCallback() {
                    console.log(arguments);

                    // @todo set token
                    self.isAuthenticated = true;
                    self.token = "@todo";

                    deferred.resolve(true);
                })
                .error(function authenticateErrorCallback() {
                    console.log(arguments);
                    deferred.reject(false);
                });

            return deferred.promise;
        }
    };
});
