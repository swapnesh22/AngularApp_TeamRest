'use strict';

eventsApp.factory('teamData', ['$q', '$http', function($q, $http) {
            
     var teamValue;
    teamValue = {};
    $http.get('http://localhost:8080/TeamRest/rest/TeamService/11338').success(function(response) {
        console.log("=============>>>>>>>>>>>>>> "+response.data); 
        return teamValue = response.data;
    });
    return teamValue;
    
         
       /*return {
           getTeamRest : getTeamRest
       };
       
       function getTeamRest() {
           return $http.get('http://localhost:8080/TeamRest/rest/TeamService/11338')
            .then(sendResponseData)
            .catch(sendTeamRestError)
       }
       function sendResponseData(response) {
           return response.data;
       }
       
       function sendTeamRestError(response) {
           return $q.reject('Error :' +response.status);
       }*/
       
       /*function getTeamRest() {
           return [
               {"employee_id":11338,"employee_name":"SWAPNESH KARPE","amount":100,"month":"JAN","date":"2017-01-01"}
           ];
       }*/
    
    
    /*var books = [];
    return {
    getBooks: function() {
      return $http.get(base_url + 'json/get_books_json').then(function(response) {
        books = response.data;
        $rootScope.$broadcast('handleSharedBooks',books);
        return books;
      })
    },
    saveBooks: function($params) {
      return $http({
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        url: base_url + 'json/save_book',
        method: "POST",
        data: $params,
      })
        .success(function(addData) {
          books = addData;
          $rootScope.$broadcast('handleSharedBooks',books);
        });
    }
  };*/
       
}]);