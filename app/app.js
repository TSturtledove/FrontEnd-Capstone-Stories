var config = {
    apiKey: "AIzaSyDbwkH02G26zGUloMdZZhqyKyuMvZN2EsA",
    authDomain: "frontend-760f7.firebaseapp.com",
    databaseURL: "https://frontend-760f7.firebaseio.com",
    storageBucket: "frontend-760f7.appspot.com",
    messagingSenderId: "372869057554"
  };
  firebase.initializeApp(config);




const app = angular.module("storyApp", ["ngRoute"])
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");

  $routeProvider
  .when("/", {
    controller: "mainCon",
    templateUrl: "app/partials/main.html"

  })

  .when("/signin", {
    controller: "signinCon",
    templateUrl: "app/partials/signin.html"

  })

  .when("/profile", {
    controller: "profileCon",
    templateUrl: "app/partials/profile.html"

  })

  .when("/storypage", {
    controller: "storypageCon",
    templateUrl: "app/partials/storypage.html"

  })

  .otherwise({
    redirectTo: "/"
  })
})
