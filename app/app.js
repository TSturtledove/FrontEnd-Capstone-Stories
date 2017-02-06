const app = angular.module("storyApp", ["ngRoute"])
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");

  $routeProvider
  .when("/", {
    controller: "mainCon",
    templateUrl: "partials/main.html"

  })

  .when("/signin", {
    controller: "signinCon",
    templateUrl: "partials/signin.html"

  })

  .when("/profile", {
    controller: "profileCon",
    templateUrl: "partials/profile.html"

  })

  .when("/storypage", {
    controller: "storypageCon",
    templateUrl: "partials/storypage.html"

  })

  otherwise({
    redirectTo: "/"
  })
})
