angular.module('galPhoto')
.controller('GalleryCtrl',['$scope','instagram', function($scope, instagram){

instagram.Profile()
  .then(function(resp){
		console.log("I am in Profile");
		console.log(resp);
		$scope.fullname = resp.data.data.full_name;
		$scope.profileimage = resp.data.data.profile_picture;
	})
	.catch(function(resp){
		console.log(resp);
	});
instagram.AllImage()
    .then(function(resp){
			console.log("I am in AllImage");
			console.log(resp);
			$scope.images = resp.data.data;
		})
		.catch(function(resp){
			console.log(resp);
		});
}]);
