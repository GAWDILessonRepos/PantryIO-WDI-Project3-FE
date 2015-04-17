'use strict'
angular.module('MainDirective').directive('loginForm', [function(){
  return {
    //only want directive to be implemented as an element like <login-form></login-form>
    restrict: 'E',
    //html that the directive will mark-up
    templateUrl: 'scripts/views/login-form.html',
    controller: 'LoginController',
    controllerAs: 'loginController',
    //all the attributes going into the directive need to be bound to the controller
    bindToController: true,
    scope: {
      credentials: '='
    }
  };
}]);
