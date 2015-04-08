'use strict'
angular.module('MainController').controller('RecipesController', recipesController);

recipesController.$inject = ['RecipesFactory', '$location'];

function recipesController(RecipesFactory, $location){
  var vm = this;
  console.log("in recipesController");

  vm.loadAllRecipes = function(ingredients){
    RecipesFactory.getAllRecipes(ingredients).then(function(response){
      $location.path('/recipes');
    });
  };

  vm.searchRecipes = function(ingredients){
    console.log(ingredients);
    RecipesFactory.getRecipes(ingredients).then(function(response){
      vm.ingredients = {};
      $location.path('/recipes');
    });
  };

  vm.recipes = RecipesFactory.recipes;
}
