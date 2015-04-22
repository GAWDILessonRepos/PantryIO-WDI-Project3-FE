'use strict';
angular.module('PantryIO').factory('RecipesFactory', ['$http', '$window', 'ServerUrl', function($http,$window,ServerUrl){

  var recipes = {};
  var array_ingredients = [];

  var getAllRecipes = function(ingredients){
    return $http.get(ServerUrl +'/food2fork').success(function(data){
      console.log(data);
      angular.copy(data, recipes);
    }).error(function(){
      console.log("error");
    });
  };

  var getRecipes = function(ingredients){
    console.log(ingredients);
    //create an array for all the ingredients entered into the search
    array_ingredients = ingredients.q.split(', ');
    console.log(array_ingredients);
    return $http.patch(ServerUrl +'/food2fork/1', ingredients).success(function(data){
      console.log(data);
      angular.copy(data, recipes);
    }).error(function(){
      console.log("error");
    });
  };

  var getOneRecipe = function(recipe_id){
    console.log("factory: trying to get a recipe");
    console.log(recipe_id);
    return $http.patch(ServerUrl +'/food2fork/2', recipe_id).success(function(data){
      console.log(data);
      angular.copy(data, recipes);
    }).error(function(){
      console.log("error");
    });
  };

  return {
    getAllRecipes: getAllRecipes,
    getRecipes: getRecipes,
    getOneRecipe: getOneRecipe,
    recipes: recipes,
    array_ingredients: array_ingredients
  };

}]);

//take each item from array of entered ingredients and compare to each item in the ingredient array generated from get request for the clicked on recipe
//see how many matches and get difference from total ingredients list length---this will be how many ingredients are left to get

