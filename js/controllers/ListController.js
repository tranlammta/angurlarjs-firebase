app.controller('ListController', ['$scope', '$firebaseArray', '$firebaseObject', 'FBURL', function($scope, $firebaseArray, $firebaseObject, FBURL){
  
  var travles = new Firebase(FBURL);
  $scope.travles = $firebaseArray(travles);
  
  $scope.removeProduct = function(id) {
    var ref = new Firebase(FBURL + id);
    var travle = $firebaseObject(ref)
    travle.$remove();
   };
   
}]);

 