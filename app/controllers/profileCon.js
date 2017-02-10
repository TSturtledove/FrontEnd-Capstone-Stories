app.controller('profileCon', function($scope, $location, $http, authorizeFactory, pullInfoFactory){

	pullInfoFactory.getStories()
		.then(function(stories){
			$scope.books = stories
			console.log("this is where things are for the main page: ",stories)
		})

	$scope.signout = function() {
		authorizeFactory.signOut()
		.then(function(){
			console.log("the currentUser is ",firebase.auth().currentUser)
			$location.url("/signin")
		})
	}



	//************************************
	//		getting the saved stories on the page
	//************************************
	//
	// $scope.save = function(){
	//
	// 	if(firebase.auth().currentUser == null){
	// 		console.log("no one is signed in!")
	// 	}else{
	// 			let currentUser = firebase.auth().currentUser.email
	// 		console.log("current user is ",currentUser)
	// 	// 	console.log(firebase.auth().currentUser.email)
	// 	// 	let currentUser = firebase.auth().currentUser.email
	// 		pullInfoFactory.getUsers()
	// 		.then(function(users){
	// 			angular.forEach(users, function(value, key){
	// 				// console.log("name of checked is: ",value.name)
	// 				// console.log("current name is: ",currentUser)
	//
	// 				if(currentUser == value.name){
	//
	// 					// console.log("key is ",key)
	// 					// console.log("active user is ",value.name)
	//
	// 					let savedbooks = value.mystories
	// 					pullInfoFactory.turntoarray(savedbooks, bar)
	// 					.then(function(novel){
	// 						bookarray = novel
	// 						console.log("the current array of books ",bookarray)
	// 						index = bookarray.indexOf($routeParams.storyName)
	// 						console.log("the index of the thing is ",index)//Use this for targeting to delete
	//
	// 						if($routeParams.storyName == bookarray[index]){
	// 							$scope.blockOText = "story already added to your stories"
	// 							console.log("array is ",bookarray)
	//
	// 						}else{
	// 							bookarray.splice(0, 0, $routeParams.storyName)
	// 							sendbook = bookarray.join(bar)
	// 							console.log("the sendbook value is ",sendbook)
	//
	// 							let bookList = {
	// 								mystories: sendbook
	// 							}
	// 							console.log("bookList is ",bookList)
	// 							console.log("key is ",key)
	// 							console.log("array is ",bookarray)
	// 							console.log("mystoires on firebase has been updated with sendbook info")
	//
	//
	// 							$http.patch(`https://frontend-760f7.firebaseio.com/user/${key}/.json`, JSON.stringify(bookList))
	//
	// 						}
	//
	// 					})
	//
	// 				} //if end
	// 			})
	// 		})
	// 	}
	//
	//
	// }


	//*************************
	//*************************


	})
