'use strict';
angular.module('PantryIO').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'scripts/views/home.html',
      controller: 'HomeController'
    })
    .when('/login', {
      templateUrl: 'scripts/views/login.html'
    })
    .when('/profile', {
      templateUrl: 'scripts/views/profile.html',
      controller: 'ProfilesController',
      controllerAs: 'profilesController'
    })
    .when('/recipes', {
      templateUrl: 'scripts/views/recipes.html',
      controller: 'RecipesController',
      controllerAs: 'recipesController'
    })
    .when('/recipe-details', {
      templateUrl: 'scripts/views/recipe-details.html',
      controller: 'RecipesController',
      controllerAs: 'recipesController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
