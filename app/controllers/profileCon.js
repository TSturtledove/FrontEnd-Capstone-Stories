app.controller('profileCon', function($scope, $location, $http, authorizeFactory){
	$scope.signout = function() {
		authorizeFactory.signOut()
		.then(function(){
			console.log("the currentUser is ",firebase.auth().currentUser)
			$location.url("/signin")
		})
	}

	})
