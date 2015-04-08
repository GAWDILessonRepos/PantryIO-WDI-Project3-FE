'use strict'
angular.module('PantryIO').factory('RecipesFactory', ['$http', '$window', 'ServerUrl', function($http,$window,ServerUrl){

  var recipes = [];

  var getRecipes = function(ingredients){
    console.log(ingredients.name);
    //need to parse url for query?
    return $http.get(ServerUrl +'/food2fork', ingredients).success(function(data){
      console.log(data);
    }).error(function(){
      console.log("error");
    });
  };

  return {
    getRecipes: getRecipes
  }

}]);
