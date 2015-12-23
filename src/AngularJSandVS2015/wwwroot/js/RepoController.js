var RepoController = function ($scope, github, $routeParams) {

    var onRepoComplete = function (data) {
        $scope.repository = data;
    };

    var onError = function (reason) {
        $scope.error = "Could not fetch the data";
    };

    $scope.username = $routeParams.username;
    $scope.reponame = $routeParams.reponame;

    github.getCollabs($scope.username, $scope.reponame).then(onRepoComplete, onError);
};

app.controller("RepoController", ["$scope", "github", "routeParams", RepoController]);