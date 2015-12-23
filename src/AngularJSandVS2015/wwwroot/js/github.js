
var github = function ($http) {

    var getUser = function (username) {
        return $http.get("https://api.github.com/users/" + username)
            .then(function (response) {
                return response.data;
            });
    };

    var getRepos = function (user) {
        return $http.get(user.repos_url)
            .then(function (response) {
                return response.data;
            });
    };

    var getCollabs = function (user, repo) {
        return $http.get(INSERT CORRECT URL HERE)
            .then(function (response) {
                return response.data;
            });
    };


    return {
        getUser: getUser,
        getRepos: getRepos,
        getCollabs: getCollabs
    };
};


var module = angular.module("githubViewer");
module.factory("github", github);

