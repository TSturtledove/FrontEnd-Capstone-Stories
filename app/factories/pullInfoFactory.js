app.factory("pullInfoFactory", function($http){
  return{
    getStories : function() {
      return $http.get("https://frontend-760f7.firebaseio.com/stories.json")
      .then(function(value){
        console.log(value)
        return value.data
      })

    }

  }
})
