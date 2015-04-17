'use strict'
angular.module('PantryIO').factory('AuthFactory', ['$http', '$window', 'ServerUrl', function($http,$window,ServerUrl){

  var login = function(credentials){
      console.log(credentials);
      return $http.post(ServerUrl + '/login', credentials).success(function(response){
        _storeSession(response);
      });
    };

    var logout = function(){
      return $http.get(ServerUrl + '/logout').success(function(response){
        $window.localStorage.removeItem('ga-user');
      });
    };

    var isAuthenticated = function(){
      var data = JSON.parse($window.localStorage.getItem('ga-user'));
      //only if data.token exists, return a boolean true
      //else return false---even if this statement does not evaluate
      if(data) return !!data.token;
      return false;
    };

    var clearStorage = function(){};

    var _storeSession = function(data){
      //setItem takes in a key and then the actual data to store
      $window.localStorage.setItem('ga-user', JSON.stringify(data));
      $http.defaults.headers.common.Authorization = 'Token token =' + data.token;
    };

    return {
      login: login,
      logout: logout,
      isAuthenticated: isAuthenticated,
      clearStorage: clearStorage
    };
}]);
