var config = {
    apiKey: "AIzaSyDbwkH02G26zGUloMdZZhqyKyuMvZN2EsA",
    authDomain: "frontend-760f7.firebaseapp.com",
    databaseURL: "https://frontend-760f7.firebaseio.com",
    storageBucket: "frontend-760f7.appspot.com",
    messagingSenderId: "372869057554"
  };
  firebase.initializeApp(config);

  const checkForAuth = {
    checkForAuth ($location, $rootScope) {
      const authReady = firebase.auth().onAuthStateChanged(function(user){
        authReady()
        if (!user) {
          console.log("there be no one here")
        }
        else {
          $rootScope.uid = firebase.auth().currentUser.uid
          console.log("there be someone signed in")
        }
      })
    }
  }




const app = angular.module("storyApp", ["ngRoute"])
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");

  $routeProvider
  .when("/", {
    controller: "mainCon",
    templateUrl: "app/partials/main.html",
    resolve : checkForAuth


  })

  .when("/signin", {
    controller: "signinCon",
    templateUrl: "app/partials/signin.html",
    resolve : checkForAuth


  })

  .when("/profile", {
    controller: "profileCon",
    templateUrl: "app/partials/profile.html",
    resolve : checkForAuth


  })

  .when("/storypage/:storyName", {
    controller: "storypageCon",
    templateUrl: "app/partials/storypage.html",
    resolve : checkForAuth


  })

  .otherwise({
    redirectTo: "/"
  })
})
