app.controller('mainCon', function($scope, $http, pullInfoFactory){
	pullInfoFactory.getStories()
		.then(function(stories){
			$scope.books = stories
			console.log("this is where things are for the main page: ",stories)
		})


	})
