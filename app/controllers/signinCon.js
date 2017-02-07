app.controller('signinCon', function($scope, $location, authorizeFactory, $http){
	$scope.signIn = function() {
		authorizeFactory.signIn($scope.email, $scope.password)
		.then(function(data) {
			console.log("it worked and this is here now ",data)
		})
	}
	$scope.register = function() {
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
	$scope.signout = function() {
		authorizeFactory.signOut()
		.then(function(){
			console.log("the currentUser is ",firebase.auth().currentUser)
		})
	}

	})
