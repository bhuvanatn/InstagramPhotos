angular.module('galPhoto')

.factory('instagram', function($http){

	var endpointProfile = 'https://api.instagram.com/v1/users/self/?access_token=266924914.e117843.9178eca665ba473b96d267dd610666eb';
	var endpointAllImage ='https://api.instagram.com/v1/users/self/media/recent/?access_token=266924914.e117843.9178eca665ba473b96d267dd610666eb';

	return {
		Profile: function(){
			 return $http.get(endpointProfile);
		},
		AllImage: function(){
			 return $http.get(endpointAllImage);
		}
	};

});
