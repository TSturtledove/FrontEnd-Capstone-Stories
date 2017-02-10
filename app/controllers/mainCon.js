app.controller('mainCon', function($scope, $http, $location, pullInfoFactory, authorizeFactory){
	pullInfoFactory.getStories()
		.then(function(stories){
			$scope.books = stories
			console.log("this is where things are for the main page: ",stories)
		})

		$scope.signIn = function() {
				$location.url("/signin")
		}

		$scope.signout = function() {
			authorizeFactory.signOut()
			.then(function(){
				console.log("the currentUser is ",firebase.auth().currentUser)
			})
		}

		$scope.profile = function() {
			if(firebase.auth().currentUser == null){
				console.log("no one is signed in!")
				$location.url("/signin")
			}else{
				$location.url("/profile")

		}


	}
})
