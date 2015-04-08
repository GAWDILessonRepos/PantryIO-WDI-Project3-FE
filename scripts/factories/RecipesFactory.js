'use strict'
angular.module('PantryIO').factory('RecipesFactory', ['$http', '$window', 'ServerUrl', function($http,$window,ServerUrl){

  // var recipes = [];
  var recipes = {};

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
    //need to parse url for query?
    return $http.patch(ServerUrl +'/food2fork/1', ingredients).success(function(data){
      console.log(data);
      angular.copy(data, recipes);
    }).error(function(){
      console.log("error");
    });
  };

  return {
    getAllRecipes: getAllRecipes,
    getRecipes: getRecipes,
    recipes: recipes
  };

}]);
