app.controller('storypageCon', function($scope, $http, pullInfoFactory){
let innerStory = []
let actualStory = []
let bar = "|"
	$scope.getstuff = function(){
		pullInfoFactory.getStories()
		.then(function(stories){
			console.log("stories data ", stories)
			angular.forEach(stories, function(value, key){
				console.log("key is ",key)
				console.log("value is ",value)
				innerStory = value
				console.log("yo ", innerStory)
			})
			console.log("again ",innerStory)
			console.log("the tale is ",innerStory.tale)
			console.log("the title is ",innerStory.title)
			turntoarray(innerStory.tale, bar);
			console.log(actualStory)



			// console.log("data ", value[0])
			// console.log("data ", value[1].data)

		})
	}
	function turntoarray(stringToSplit, separator) {
		actualStory = stringToSplit.split(separator);
	}

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
