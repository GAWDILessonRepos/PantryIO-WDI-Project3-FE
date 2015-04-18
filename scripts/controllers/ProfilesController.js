'use strict'
angular.module('MainController').controller('ProfilesController', profilesController);

profilesController.$inject= ['ProfilesFactory', '$routeParams'];

function profilesController(ProfilesFactory, $routeParams){
  var vm = this;

  vm.loadUser = function($routeParams){
    console.log("Printing routeParams");
    console.log($routeParams);
    ProfilesFactory.getUser($routeParams.userId).then(function(response){
      $location.path('/profile');
    });
  };

  vm.user = ProfilesFactory.user;
  console.log("The user is");
};
