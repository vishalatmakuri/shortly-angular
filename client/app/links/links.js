angular.module('shortly.links', [])

.controller('LinksController', function ($http, $scope) {
  $scope.data = {'links':''}
  // Your code here

  $scope.getLinks = function() {
    $http.get('/api/links')
      .then(function (res){
        $scope.data.links = res.data
      })
  }

  $scope.getLinks()
 
});
