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
	// 	let name = "The Rooster and the Sultan"
	// 	let tale = 'Long ago across the waves, in a land ruled by a greedy Sultan, there lived an old lady and her pet rooster.  One day the rooster went out into the field to peck something to eat and he uncovered a small diamond. “Cock a doodle dooo!” crowed the rooster, “I like diamonds, I’ll take this home to my lady; she likes diamonds too!”  He picked up the diamond in his beak and started to walk home.  | Along the way the rooster passed by the Sultan and his servants who were out on a walk.  The Sultan saw the diamond in the rooster’s beak and said to his servants, “Take that diamond from that silly bird and bring it with us to the palace to be added to the treasury.”  The servants caught the rooster and took his diamond as the Sultan had commanded, but the rooster grew very angry at this and kicked and shouted, “Give me back my diamond you fat Sultan!  Give me back my diamond!”  | The Sultan was greatly annoyed with the rooster when he said that and told his servants, “Throw that silly bird in a well and let us be done with this noise.”  So the servants threw the rooster in a nearby well and returned with the Sultan to the palace where they put the rooster’s diamond in the treasury.   | Now the rooster couldn’t swim so he said, “Come my stomach, drink up all the water, drink up all the water!” And so the rooster’s stomach drank and drank until there was no water left in the well.  With the well dry the rooster flew out and went to the Sultan’s palace and shouted in the window, “Give me back my diamond you fat Sultan!  Give me back my diamond!”  | The Sultan, mad at the rooster’s shouting told his servants, “Take that rude bird and throw him into a fire, and let us be done with this noise.”  So the servants caught the rooster again and threw him into a fire and left.  | But the rooster called out, “Come my stomach, spit up all the water, spit up all the water and put out the fire!”  And the rooster’s stomach spit up the water it had drunk from the well and put out the fire.  The rooster then went to the palace window again and shouted, “Give me back my diamond you fat Sultan!  Give me back my diamond!”  | The Sultan grew very angry at this and told his servants, “Take that wretched bird and throw him into a bee hive!  Let the bees sting him and kill him and let us be done with this noise!”  So the servants caught the rooster once more and threw him into a bee hive and left. |  With the bees buzzing around him the rooster said, “Come my stomach and eat up all the bees, eat up all the bees!”  And the rooster’s stomach ate up every bee in the hive.  The rooster’s stomach hummed and churned with the bees buzzing and stinging, but the rooster’s stomach was so tough that the bees couldn’t harm him.  Then the rooster went to the palace window again and shouted, “Give me back my diamond you fat Sultan!  Give me back my diamond!”  | Furious with the rooster’s shouting the Sultan told his servants, “Get the horrible thing and bring it here, what shall we do to be done with this noise?”  The servants caught the rooster and began making suggestions. “Chop off his head,” said one. “Hang him from the highest tree,” said another.  But the suggestion the Sultan liked the most was, “Sit on him and squash him flat!”  | So the servants held the rooster down, and as the Sultan was about to sit on him the rooster said,“Come my stomach, spit up all the bees, spit up all the bees and sting the Sultan!”  And the rooster’s stomach spit up all the bees and they stung the Sultan and all his servants.“Enough!” cried the Sultan, “Enough!  Take this despicable thing to the treasury and let him take back his diamond, then we will finally be done with this.”  So the servants brought the rooster to the treasury and left him. | The rooster looked over the piles of jewels and gold and diamonds and said,“Come my stomach, eat up all the treasure, eat up all the treasure and take it home to our lady!”  And the rooster’s stomach ate up as much treasure as it could, and the rooster waddled home with his diamond in his beak, and the Sultan’s treasure in his stomach.'
	// 	authorizeFactory.poststory(name, tale)
	// }

	})
