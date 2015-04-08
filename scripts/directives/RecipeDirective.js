'use strict'

angular.module('MainDirective').directive('searchForm', [function(){
  return {
    restrict: 'E',
    templateUrl: 'views/recipes.html',
    controller: 'RecipesController',
    controllerAs: 'recipesController',
    bindToController: true,
    scope: {
      ingredients: '='
    }
  };

}]);
