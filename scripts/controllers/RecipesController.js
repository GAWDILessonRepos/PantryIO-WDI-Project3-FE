'use strict'
angular.module('MainController').controller('RecipesController', recipesController);

recipesController.$inject = ['RecipesFactory', '$location'];

function recipesController(RecipesFactory, $location){
  var vm = this;
  console.log("in recipesController");

  vm.searchRecipes = function(ingredients){
    console.log(ingredients);
    RecipesFactory.getRecipes(ingredients).then(function(response){
      vm.ingredients = {};
      $location.path('/recipes');
    });
  };
}
