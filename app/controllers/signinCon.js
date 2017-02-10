app.controller('signinCon', function($scope, $location, authorizeFactory, $http){
	$scope.signIn = function() {
		authorizeFactory.signIn($scope.email, $scope.password)
		.then(function(data) {
			console.log("it worked and this is here now ",data)
			$location.url("/profile")
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
			$location.url("/profile")
		})

	}

	$scope.home = function() {
			$location.url("/")
		}

	$scope.signout = function() {
		authorizeFactory.signOut()
		.then(function(){
			console.log("the currentUser is ",firebase.auth().currentUser)
		})
	}
	// $scope.post = function() {
	// 	let name = "Bacon Test"
	// 	let tale = "We will see just how well be can select a single story by clicking on it in the main page. | Plus bacon is a wonderful thing. | It is also necessary to see if I can split the data up into sections so that the array loop idea I have will work."
	// 	authorizeFactory.poststory(name, tale)
	// }

	})
