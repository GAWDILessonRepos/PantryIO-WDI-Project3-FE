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
      $location.path('/recipes');
    });
  };

  vm.loadOneRecipe = function(recipe_id){
    console.log("in loadOneRecipe");
    console.log(recipe_id);
    recipe_id = {
      rId: recipe_id
    }
    console.log(recipe_id);
    RecipesFactory.getOneRecipe(recipe_id).then(function(response){
      vm.recipe_id = {};
      $location.path('/recipe-details');
    });
  };

  vm.recipes = RecipesFactory.recipes;
  vm.array_ingredients = RecipesFactory.array_ingredients;
}

