app.controller('signinCon', function($scope, $location, authorizeFactory, $http){
	$scope.signIn = function() {
		authorizeFactory.signIn($scope.email, $scope.password)
		.then(function(data) {
			console.log("it worked and this is here now ",data)
		})
	}
	$scope.register = function() {
		let userData = {
			email: $scope.email,
			password: $scope.password,
			mystories:"",
			bookmarks:""
		}
		authorizeFactory.registerUser($scope.email, $scope.password)
		.then(function() {
			console.log("uid is: ",authorizeFactory.getuid())
		})
		.then(function() {
			console.log("posting to firebase")
			authorizeFactory.postUser($scope.email, authorizeFactory.getuid())
		})
		.then(function(){
			console.log("user posted to firebase")
		})

	}

	})
