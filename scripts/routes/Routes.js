'use strict';
angular.module('PantryIO').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/recipes', {
      templateUrl: 'scripts/views/recipes.html',
      controller: 'RecipesController',
      controllerAs: 'recipesController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
