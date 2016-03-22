 var app = angular.module('tag',[]);

app.controller('TagController', function($scope, $http) {
      $scope.tags = [];
    $scope.loadTags = function(query) {
      return $http.get('/api/tag_autocomplete/'+query+'.json?query=');
    };
  });