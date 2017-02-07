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
	$scope.signout = function() {
		authorizeFactory.signOut()
		.then(function(){
			console.log("the currentUser is ",firebase.auth().currentUser)
		})
	}
	// $scope.post = function() {
	// 	let name = "test1"
	// 	let tale = "This is a test document for the storage of stories. | I want to see if I can correctly store and then parse the various, and long blocks of text.  After storing the text I need to be able to divide them up into smaller chunks as needed for the display of the story.  This will mean the use of a splice on the parsed fake json data pulled from firebase. | It is also necessary to see if I can split the data up into sections so that the array loop idea I have will work."
	// 	authorizeFactory.poststory(name, tale)
	// }

	})
