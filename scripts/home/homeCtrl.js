angular.module('firebaseApp').controller('homeCtrl', function($scope, $firebase){

  $scope.newCostume = {};
  var fireDb = new Firebase('https://halloween-costumes.firebaseio.com/');

  //angularfire magic. =)
  var sync = $firebase(fireDb);

  //$asObject() makes your data readable. You should use it.
  $scope.costumes = sync.$asArray();
  //angular fire is lame. Use the standard libary like a boss.

  $scope.saveNewCostume = function(){
    $scope.costumes.$add($scope.newCostume)
  }

})