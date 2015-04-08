'use strict';

angular.module('PantryIO', [
  'ngRoute',
  'MainController',
  'MainDirective'
]).run(function($rootScope,$http,$window,$location,RecipesFactory){
  // if(AuthFactory.isAuthenticated()){
  //   var data = JSON.parse($window.localStorage.getItem('ga-user'));
  //   $http.defaults.headers.common.Authorization = 'Token token='+data.token;
  // } else {
  //   $location.path('/login');
  });

//   $rootScope.$on('$routeChangeStart',function(event,next){
//     if(!AuthFactory.isAuthenticated()){
//       $location.path('/login');
//     }else{
//       //something else?
//     }
//   });
// });
