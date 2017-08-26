
eventsApp.service("teamOverviewService", function($http, $q) {
       
       console.log("Inside teamOverviewService");
       
        var deffered1 = $q.defer();    
    
           this.getTeamRest = function() {
                console.log("Inside getTeamRest method");
                return $http.get('http://localhost:8080/TeamRest/rest/TeamService/11338')
                    .then(function(response){
                    // promise is fulfilled
                    deffered1.resolve(response.data);
                    // promise is returned
                    return deffered1.promise;
                }, function (response) {
                    // the following line rejects the promise 
                    deffered1.reject(response);
                    // promise is returned
                    return deffered1.promise;
                });
            };
           
         var deffered2 = $q.defer();
           this.getAll = function() {
               return $http.get('http://localhost:8080/TeamRest/rest/TeamService/All')
                    .then(function(response) {
                    // promise is fulfilled
                    deffered2.resolve(response.data);
                    // promise is returned
                    return deffered2.promise;
                }, function (response) {
                    // the following line rejects the promise 
                    deffered2.reject(response);
                    // promise is returned
                    return deffered2.promise;
                });
           }
       
            /*function getTeamRest() {
               return [
                   {"employee_id":11338,"employee_name":"SWAPNESH KARPE","amount":100,"month":"JAN","date":"2017-01-01"}
               ];
            }*/
           
           var deffered3 = $q.defer();
            this.addTeamMember = function(data, config) {
                return $http.post('http://localhost:8080/TeamRest/rest/TeamService/addTeam', data, config)
                    .then(function (data, status, headers, config) {
                        deffered3.resolve(response.data);
                    }, function (response) {
                        deffered3.reject(response);
                        // promise is returned
                        return deffered3.promise;
                    });
                   
            }
            
            var deffered4 = $q.defer();
            this.deleteTeamMember = function(item) {
                
                
                return $http({
                        method: 'DELETE',
                        url: 'http://localhost:8080/TeamRest/rest/TeamService/deleteTeam',
                        data: item,
                        headers: {
                            'Content-type': 'application/json;charset=utf-8'
                        }
                    })
                    .then(function (data, status, headers, config) {
                        deffered4.resolve(response.data);
                    }, function (response) {
                        deffered4.reject(response);
                        // promise is returned
                        return deffered4.promise;
                    });
            }
       
 });
       
       