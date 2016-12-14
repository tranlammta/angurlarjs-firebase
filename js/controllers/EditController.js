app.controller('EditController', ['$scope','$location', '$routeParams', '$firebaseObject', 'FBURL',   
    function($scope, $location, $routeParams, $firebaseObject, FBURL){
    
    var ref = new Firebase(FBURL + $routeParams.id);
		$scope.travle = $firebaseObject(ref);
    
    $scope.editProduct = function() {
        $scope.travle.$save({
            name: $scope.travle.name,
            description: $scope.travle.description,
            loacation: $scope.travle.loacation,
            linkimage_1: $scope.travle.linkimage_1,
            linkimage_2: $scope.travle.linkimage_2,
            coordinate_1: $scope.travle.coordinate_1,
            coordinate_2: $scope.travle.coordinate_2,
            like: $scope.travle.like
        });
        $scope.edit_form.$setPristine();
        $scope.travle = {};
        $location.path('/travle');
        
    };
     
}]);