'use strict'
angular.module('MainDirective').directive('gaNavbar', [function(){
  return {
    restrict: 'E',
    templateUrl: 'scripts/views/partials/navbar.html',
    controller: 'NavbarController',
    controllerAs: 'navbarController',
    bindToController: true,
    scope: {},
    link: function($scope,element,attrs){
      //manipulate the dom here.
    }
  };
}]);
