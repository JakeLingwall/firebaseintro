var app = angular.module('firebaseApp', ['ngRoute', 'firebase']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/scripts/home/home.html',
      controller: 'homeCtrl'
    });
}]);