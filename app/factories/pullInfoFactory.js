app.factory("pullInfoFactory", function($q, $http){
  return{
    getStories : function() {
      return $http.get("https://frontend-760f7.firebaseio.com/stories.json")
      .then(function(value){
        console.log(value)
        return value.data
      })

    },
    getUsers : function() {
      return $http.get("https://frontend-760f7.firebaseio.com/user.json")
      .then(function(value){
        console.log(value)
        return value.data
      })

    },
    //factories have to return promises
    turntoarray : function(stringToSplit, separator) {
      let defered = $q.defer();
      let newarray = stringToSplit.split(separator)
      console.log("the new array made in factory ",newarray)
      defered.resolve(newarray)
      return defered.promise
    }

  }
})
