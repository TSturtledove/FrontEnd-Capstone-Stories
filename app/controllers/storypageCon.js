app.controller('storypageCon', function($scope, $http, pullInfoFactory, $routeParams){
let innerStory = []
let actualStory = []
let bar = "|"
let count = 0
let bookmark = "box"
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



//************************
//		function to turn the tale strings into array
//************************

	function turntoarray(stringToSplit, separator) {
		actualStory = stringToSplit.split(separator);
		$scope.text = actualStory
		$scope.blockOText = actualStory[count]
	}

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

			}
			// console.log("key is ",key)
			// console.log("value is ",value)
			// console.log("yo ", innerStory)
		})

//Using this "innerStory" value you can do a search by matching titles and
// pull the tale up from that, so
// if(thing you clicked in DOM == innerStory.title){
//	print tale to array and post using the functions you have here
// }

		// console.log("again ",innerStory)
		// console.log("the tale is ",innerStory.tale)
		// console.log("the title is ",innerStory.title)
		turntoarray(innerStory.tale, bar);
		console.log(actualStory)
		// console.log("data ", value[0])
		// console.log("data ", value[1].data)
	})


	//**************************
	//**************************




	console.log("here we go again::: ",actualStory)



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
