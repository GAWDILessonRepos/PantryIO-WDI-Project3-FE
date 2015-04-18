'use strict'
angular.module('PantryIO').factory('ProfilesFactory', ['$http', '$window', 'ServerUrl', function($http,$window,ServerUrl){
  var user = {};

  var getUser = function(){
    console.log("in factory get user");
    var data = JSON.parse($window.localStorage.getItem('ga-user'));
    // debugger
    console.log(data);
    var config = {
      headers: {
        'AUTHORIZATION': 'Token token=' + data.token
      }
    };

    return $http.get(ServerUrl +'/users/', config).success(function(response){
      angular.copy(response, user);
      console.log(response);
    }).error(function(data, status, headers, config){
      console.log('Youre doing it wrong: ', data, status, headers, config);
    });
  };

  return {
    user: user,
    getUser: getUser
  };
}]);
