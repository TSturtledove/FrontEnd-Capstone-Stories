app.controller('storypageCon', function($scope, $http, pullInfoFactory, $routeParams){
let innerStory = []
let actualStory = []
let bar = "|"
let count = 0
let bookmark = "box"
let bookarray = []
let sendbook = ""
let index = -1
	// $scope.money = "gogopowerrangers"
$scope.titleName =$routeParams.storyName

	//******************
	//  buttons for navigating the story
	//*******************
	$scope.getstuff = function(){
		if(count>=actualStory.length-1){
			count = actualStory.length
			$scope.blockOText = "End of story, please read again"
		}else{
			count++
			$scope.blockOText = actualStory[count]
		}
		// console.log(actualStory)
	}

	$scope.losestuff = function(){
		if(count<=0){
			count = 0
			$scope.blockOText = actualStory[count]
		}else{
			count--
			$scope.blockOText = actualStory[count]
		}
	}

	$scope.startstuff = function(){
		count = 0
		$scope.blockOText = actualStory[count]
	}

	$scope.endstuff = function(){
		count = actualStory.length
		$scope.blockOText = "End of story, please read again"
	}

	//***************************
	//***************************

//************************************
//	Bookmark button
//************************************

// I need to call to a function in a new factory
// that will push the bookmark info to firebase
// but that will keep all bookmark info separate based
// on story
// name of story +

$scope.mark = function(){
	bookmark = count
}

$scope.clear = function(){
	bookmark = "box"
}

$scope.gotomark = function(){
	if(bookmark == "box"){
		$scope.blockOText = "you don't have a bookmark"
	}else{
		count = bookmark
		$scope.blockOText = actualStory[count]
	}
}

$scope.save = function(){
	console.log(firebase.auth().currentUser.email)
	let currentUser = firebase.auth().currentUser.email
	pullInfoFactory.getUsers()
	.then(function(users){
		angular.forEach(users, function(value, key){
			// console.log("name of checked is: ",value.name)
			// console.log("current name is: ",currentUser)

			if(currentUser == value.name){

				// console.log("key is ",key)
				// console.log("active user is ",value.name)

				// let bookmarks = value.bookmarks
				// pullInfoFactory.turntoarray(bookmarks, bar)
				// .then(function(spot){
				// 	console.log("the current array of bookmarks ",spot)
				// })

				let savedbooks = value.mystories
				pullInfoFactory.turntoarray(savedbooks, bar)
				.then(function(novel){
					bookarray = novel
					console.log("the current array of books ",bookarray)
					index = bookarray.indexOf($routeParams.storyName)
					console.log("the index of the thing is ",index)//Use this for targeting to delete

					if($routeParams.storyName == bookarray[index]){
						$scope.blockOText = "story already added to your stories"
					}else{
						bookarray.splice(0, 0, $routeParams.storyName)
						sendbook = bookarray.join(bar)
						console.log(sendbook)

						let bookList = {
							mystories: bookarray
						}
						console.log("bookList is ",bookList)
						console.log("key is ",key)

						// $http.patch(`https://frontend-760f7.firebaseio.com/user/${key}/.json`, JSON.stringify(bookList))

					}

				})

			} //if end
		})
	})

}


//*************************
//*************************


//************************
//		function to turn the tale strings into array
//************************

	// function turntoarray(stringToSplit, separator) {
	// 	actualStory = stringToSplit.split(separator);
	// 	$scope.text = actualStory
	// 	$scope.blockOText = actualStory[count]
	// }

//*******************
//*******************


//**************************************
//		getting the overall story information
//**************************************

	pullInfoFactory.getStories()
	.then(function(stories){
		// console.log("stories data ", stories)
		currentStory = $routeParams.storyName
		angular.forEach(stories, function(value, key){
			// console.log("current title is: ",value.title)
			// console.log("current title is: ",currentStory)

			if(currentStory == value.title){
				innerStory = value
				// console.log("key is ",key)
				// console.log("value is ",value)
				// console.log("yo ", innerStory)
			}
		})

//Using this "innerStory" value you can do a search by matching titles and
// pull the tale up from that, so
// if(thing you clicked in DOM == innerStory.title){
//	print tale to array and post using the functions you have here
// }

		// console.log("again ",innerStory)
		// console.log("the tale is ",innerStory.tale)
		// console.log("the title is ",innerStory.title)
		pullInfoFactory.turntoarray(innerStory.tale, bar)
		.then(function(newstory){
			actualStory = newstory
			$scope.text = actualStory
			$scope.blockOText = actualStory[count]
			// console.log(actualStory)

		})

	})


	//**************************
	//**************************




	// console.log("here we go again::: ",actualStory)



	//*************
	//end of code
	//*************
})






//
// function splitString(stringToSplit, separator) {
//   var arrayOfStrings = stringToSplit.split(separator);
//
//   console.log('The original string is: "' + stringToSplit + '"');
//   console.log('The separator is: "' + separator + '"');
//   console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
// }
//
// var tempestString = 'Oh brave new world that has such people in it.';
// var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';
//
// var space = ' ';
// var comma = ',';
//
// splitString(tempestString, space);
// splitString(tempestString);
// splitString(monthString, comma);
