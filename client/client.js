var app = angular.module('apiApp', []);

app.controller('apiController', ['$scope', 'GitHubServices', function($scope, GitHubServices) {

    $scope.search = function() {
        document.getElementsByName('username');
        $scope.data = GitHubServices.data;
        GitHubServices.fetch($scope.username);
        console.log('from controller', GitHubServices.data);
    };
}]);


app.factory('GitHubServices', ['$http', function($http) {
    var data = {};

    function fetchAPI (username) {
        console.log(username);
        $http.jsonp('https://api.github.com/users/' + username + '/events?callback=JSON_CALLBACK').then(function(response){
            data.results = response.data;
        });
    }

    return {
        fetch: fetchAPI,
        data: data
    }
}]);
