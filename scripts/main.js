'use strict';

angular.module('PantryIO', [
  'ngAnimate',
  'ngResource',
  'ngRoute',
  'MainController',
  'MainDirective'
]).run(function($rootScope,$http,$window,$location,RecipesFactory, AuthFactory, ProfilesFactory){
  if(AuthFactory.isAuthenticated()){
    var data = JSON.parse($window.localStorage.getItem('ga-user'));
    $http.defaults.headers.common.Authorization = 'Token token='+data.user.token;
  } else {
    $location.path('/');
  }

  $rootScope.$on('$routeChangeStart',function(event,next){
    if(AuthFactory.isAuthenticated()){
      // ProfilesFactory.getUser();
    }else{
      ProfilesFactory.getUser();
    }
  });
});
