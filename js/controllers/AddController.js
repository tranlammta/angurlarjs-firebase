app.controller('AddController', ['$scope', '$firebaseArray', '$location', 'FBURL', function($scope, $firebaseArray, $location, FBURL){
	
	$scope.addProduct = function() {
		var ref = new Firebase(FBURL);
		var travle = $firebaseArray(ref);
		travle.$add({
			name: $scope.travle.name,
			description: $scope.travle.description,
			loacation: $scope.travle.loacation,
			linkimage_1: $scope.travle.linkimage_1,
			linkimage_2: $scope.travle.linkimage_2,
			coordinate_1: $scope.travle.coordinate_1,
			coordinate_2: $scope.travle.coordinate_2,
			like: $scope.travle.like
		});
		$location.path('/');
	};
	
}]);


