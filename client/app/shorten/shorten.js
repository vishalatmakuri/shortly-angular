angular.module('shortly.shorten', [])

.controller('ShortenController', function ($http, $scope, $location) {

  $scope.link = {
    'input':''
  }

  $scope.addLink = function() {
    console.log($scope.link)
    $http.post('/api/links', {url : $scope.link.input})
      .then(function (res){
      })
  }
});
