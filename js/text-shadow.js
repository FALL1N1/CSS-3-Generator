var app = angular.module('textShadowMaker', ['color.picker']);

app.controller('AppCtrl', ['$scope', function($scope){

  $scope.horizontal = 0;
  $scope.vertical = 0;
  $scope.blur = 0;
  $scope.myColor = "#000";

}]);
    