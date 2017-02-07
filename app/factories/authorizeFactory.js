app.factory("authorizeFactory", function ($q, $http){

let uid = null
  return{

    signIn : function(email, password) {
      return $q.resolve(firebase.auth().signInWithEmailAndPassword(email, password))
      .then (function(data){
        console.log("the setter ran and we got this ", data)
      })
    },
    registerUser : function(email, password) {
      return $q.resolve(firebase.auth().createUserWithEmailAndPassword(email, password))
      .then(function(data){
        uid = data.uid
      })
    },
    getuid : function() {
      return uid
    },
    postUser : function(email, uid) {
      const url = "https://frontend-760f7.firebaseio.com/user.json"
      let data = {
        name: email,
        uid: uid,
        mystories: "",
        bookmarks: ""
      }
      $http.post(url, JSON.stringify(data))
    }
  }
})
