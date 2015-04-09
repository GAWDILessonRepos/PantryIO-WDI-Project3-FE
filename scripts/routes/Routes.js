'use strict';
angular.module('PantryIO').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'scripts/views/home.html'
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
