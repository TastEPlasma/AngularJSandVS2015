var viewer = angular.module("githubViewer", []);


viewer.controller("MainController", function ($scope, $http) {
    var onUserComplete = function (response) {
        $scope.user = response.data;
    };

    $scope.name = "Nothing";
});

viewer.controller("MainController", ["$scope", "$http", MainController]);