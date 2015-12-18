var viewer = angular.module("githubViewer", []);

//Alternative assignment of controller to module
//viewer.controller("MainController", function ($scope, $http) {

var MainController = function($scope, $http) {

    var onUserComplete = function (response) {
        $scope.user = response.data;
    };

    var onError = function (reason) {
        $scope.error = "Could not fetch the user";
    };

    //$http.get("https://api.github.com/users/angular")
    //    .then(onUserComplete, onError);

    $scope.search = function (username) {
        $http.get("https://api.github.com/users/" + username)
            .then(onUserComplete, onError);
    };

    $scope.message = "Github Viewer";
};

viewer.controller("MainController", ["$scope", "$http", MainController]);