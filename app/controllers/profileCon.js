app.controller('profileCon', function($scope, $location, $http, $route, authorizeFactory, pullInfoFactory, $routeParams){

	// let innerStory = []
	// let actualStory = []
	let bar = "|"
	// let count = 0
	// let bookmark = "box"
	let bookmarkarray = []
	let bookarray = []
	let sendbook = ""
	let index = -1
	let markindex = -1

	// pullInfoFactory.getStories()
		// .then(function(stories){
			// $scope.books = stories
			// console.log("this is where things are for the main page: ",stories)
		// })


	//*******************************************
	//navigation buttons
	//*****************************

	$scope.signout = function() {
		authorizeFactory.signOut()
		.then(function(){
			console.log("the currentUser is ",firebase.auth().currentUser)
		})
	}

	$scope.home = function() {
			$location.url("/")
		}


	//********************************************
	//*******************************************





	//************************************
	//		getting the saved stories on the page
	//************************************

	// $scope.save = function(){
	//
	// 	if(firebase.auth().currentUser == null){
	// 		console.log("no one is signed in!")
	// 	}else{
	// 			let currentUser = firebase.auth().currentUser.email
	// 		console.log("current user is ",currentUser)
	// 	// 	console.log(firebase.auth().currentUser.email)
	function poppage (){
			pullInfoFactory.getUsers()
			.then(function(users){
				if(firebase.auth().currentUser == null){
					console.log("no one is signed in")
				}else{
				let currentUser = firebase.auth().currentUser.email
				console.log("current name is: ",currentUser)

				angular.forEach(users, function(value, key){
					// console.log("name of checked is: ",value.name)
					// console.log("current name is: ",currentUser)

					if(currentUser == value.name){

						// console.log("key is ",key)
						// console.log("active user is ",value.name)

						let savedbooks = value.mystories
						pullInfoFactory.turntoarray(savedbooks, bar)
						.then(function(novel){
							$scope.storyarray = novel
							// console.log("the current array of books ",bookarray)
							// index = bookarray.indexOf($routeParams.storyName)
							// console.log("the index of the thing is ",index)//Use this for targeting to delete
							//
							// if($routeParams.storyName == bookarray[index]){
							// 	$scope.blockOText = "story already added to your stories"
							// 	console.log("array is ",bookarray)
							//
							// }else{
							// 	bookarray.splice(0, 0, $routeParams.storyName)
							// 	sendbook = bookarray.join(bar)
							// 	console.log("the sendbook value is ",sendbook)
							//
							// 	let bookList = {
							// 		mystories: sendbook
							// 	}
							// 	console.log("bookList is ",bookList)
							// 	console.log("key is ",key)
							// 	console.log("array is ",bookarray)
							// 	console.log("mystoires on firebase has been updated with sendbook info")
							//
							//
							// 	$http.patch(`https://frontend-760f7.firebaseio.com/user/${key}/.json`, JSON.stringify(bookList))
							//
							// }

						})

					} //if end
				})
			}
		})
	}



//**************
//so it only checks for important info after it varifies a user
//*************

	firebase.auth().onAuthStateChanged(function(){
		poppage()
	})




	//*************************
	//*************************



	//***********************************************
	//		New story remove button
	//***********************************************



	$scope.remove = function(page){

		console.log("The story title is ",page)

		if(firebase.auth().currentUser == null){
			console.log("no one is signed in!")
		}else{
				let currentUser = firebase.auth().currentUser.email
			console.log("current user is ",currentUser)
			pullInfoFactory.getUsers()
			.then(function(users){
				angular.forEach(users, function(value, key){
					// console.log("name of checked is: ",value.name)
					// console.log("current name is: ",currentUser)

					if(currentUser == value.name){

						// console.log("key is ",key)
						// console.log("active user is ",value.name)

						let savedbooks = value.mystories

						let bookmarks = value.bookmarks


						pullInfoFactory.turntoarray(savedbooks, bar)
						.then(function(spot){
						//	console.log("the current array of bookmarks ",spot)

							bookarray = spot
							console.log("the current array of books ",bookarray)
							index = bookarray.indexOf(page)
							console.log("the index of the thing is ",index)//Use this for targeting to delete


	//***************Where you changed code



							if(page == bookarray[index]){

								// let goto = index -1
								bookarray.splice(index, 1)
								sendbook = bookarray.join(bar)
								// console.log("the sendbooks value is ",sendbook)
								let bookList = {
									mystories: sendbook
								}
								// console.log("bookList is ",bookList)
								// console.log("key is ",key)
								// console.log("array is ",bookarray)
								console.log("mystories on firebase has been updated with sendbook info")


								$http.patch(`https://frontend-760f7.firebaseio.com/user/${key}/.json`, JSON.stringify(bookList))
								.then (function(data){
									poppage()
								})

								//*************** code for removing the bookmark for the removed story

								pullInfoFactory.turntoarray(bookmarks, bar)
								.then(function(spot){
								//	console.log("the current array of bookmarks ",spot)

									bookmarkarray = spot
									// console.log("the current array of bookmarks ",bookmarkarray)
									markindex = bookmarkarray.indexOf(page)
									// console.log("the index of the thing is ",markindex)//Use this for targeting to delete





									if(page == bookmarkarray[markindex]){

										let goto = markindex -1
										bookmarkarray.splice(goto, 2)
										sendmark = bookmarkarray.join(bar)
										// console.log("the sendmark value is ",sendmark)
										let bookmarkList = {
											bookmarks: sendmark
										}
										// console.log("bookmarkList is ",bookmarkList)
										// console.log("key is ",key)
										// console.log("array is ",bookmarkarray)
										console.log("bookmarks on firebase has been updated with sendmark info")


										$http.patch(`https://frontend-760f7.firebaseio.com/user/${key}/.json`, JSON.stringify(bookmarkList))


										// $scope.blockOText = "Bookmarks for this story have been cleared"

									}

									console.log("Doood")

								})//.then end

							// }else{
								// $scope.blockOText = "You have no bookmarks for this story"
							}
							console.log("Dogfood")

						})//.then end
						console.log("throwing")


					} //if end
					console.log("kiteflying")

				})
				console.log("opentocans")

			})
			console.log("ikuiku")

		}
		console.log("bacon")

	}





	//************************************
	//************************************




	})
