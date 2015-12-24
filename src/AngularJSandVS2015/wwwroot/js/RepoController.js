

var RepoController = function ($scope, github, $routeParams) {

    var onRepoComplete = function (data) {
        $scope.repo = data;
    };

    var onError = function (reason) {
        $scope.error = reason;
    };

    var username = $routeParams.username;
    var reponame = $routeParams.reponame;

    github.getRepoDetails(username, reponame).then(onRepoComplete, onError);
};

app.controller("RepoController", ["$scope", "github", "$routeParams", RepoController]);