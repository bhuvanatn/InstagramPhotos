angular.module('galPhoto')
.controller('GalleryCtrl',['$scope','instagram', 'Lightbox', function($scope, instagram, Lightbox){
	var instaArray =[];

instagram.Profile()
  .then(function(resp){
		$scope.fullname = resp.data.data.full_name;
		$scope.profileimage = resp.data.data.profile_picture;
	})
	.catch(function(resp){
	});

instagram.AllImage()
    .then(function(resp){
			$scope.images = resp.data.data;

			angular.forEach(resp.data.data, function(value, key){
				instaArray.push(value.images.standard_resolution);
			});

			$scope.openLightboxModal = function(index){
				Lightbox.openModal(instaArray, index);
			};
		})
		.catch(function(resp){
		});


}]);
