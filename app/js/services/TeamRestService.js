
eventsApp.factory('teamRestService', ['$http', function($http, teamRestService) {
    
    var base_url = 'http://localhost:8080/TeamRest/';
    var employeeDetails;
    var statu;
    
    return {
        getEmployee : function() {
            /*$http.get(base_url +'rest/TeamService/11338').then(function(response) {
                employeeDetails = response.data
                return employeeDetails;
            });*/
            $http({
            method:'GET',
            url:base_url +'rest/TeamService/11338',
            respondType: 'json',
            headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json',
                     'Access-Control-Allow-Credentials': true
                }
            }).success(function(data) {
                console.log("=============>>>>>>>>> "+response.data);
                employeeDetails = data;
                return employeeDetails;
            }).error(function(data, status) {
                console.log("ERROR "+status)
            }).finally(function(){
               console.log("Finally block"); 
            });
        },
        saveEmployee : function() {
            $http.post(base_url +'').then(function(response) {
                return response.data;
            });
        }
    }
    
}]);


