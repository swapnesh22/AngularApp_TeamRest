'use strict';

eventsApp.controller('TeamOverviewController', function($scope, $q, $http, teamOverviewService) {

    
        $scope.sortorder = 'name';
        $scope.boolValue = false;
        $scope.mystyle = {color:'red'};
    
        $scope.isVisible = false;
    
                
        console.log("Inside Controller");
       
        /*teamOverviewService.getTeamRest()
        .then(
            function (result) {
                console.log("Inside getTeamRest method in Controller");
                // promise was fullfilled (regardless of outcome)
                // checks for information will be peformed here
                $scope.team = result;
            },
            function (error) {
                // handle errors here
                console.log(error.statusText);
            }
        );*/
    
        $scope.teams = [];
        $scope.getAll = function() {
            teamOverviewService.getAll()
            .then(
                function (result) {
                    console.log("Inside getAll method in Controller ");
                    // promise was fullfilled (regardless of outcome)
                    // checks for information will be peformed here

                    $scope.teams = result;

                },
                function (error) {
                    // handle errors here
                    console.log(error.statusText);
                }
            );
        }
        
          
        $scope.sendData = function() {
            var data = {
                'employee_id':$scope.team.employee_id,
                'employee_name': $scope.team.employee_name,
                'amount':$scope.team.amount,
                'month':$scope.team.month
            };
            
            var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }

            teamOverviewService.addTeamMember(data, config).then( function(result) {
                console.log("Inside AddTeamMember in controller");
            },
            function(error) {
                console.log(error.statusText);
            });
            
            /*$http.post('http://localhost:8080/TeamRest/rest/TeamService/addTeam', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });*/
        };
    
        
        /*$scope.addTeamMember = function(team, newTeamForm) {
            console.log(newTeamForm);
            if (newTeamForm.$valid) {
                    window.alert('Team member '+team.employee_name+' added!');
                    $scope.teams.push($scope.team);
                    $scope.team = {};
                }
        }*/
    
        $scope.addTeamMember = function(team, newTeamForm) {
            console.log(newTeamForm);
            if (newTeamForm.$valid) {
                    $scope.sendData();
                }
        }
        
        $scope.remove = function(item) { 
            console.log("Iteam inside Delete");
            
            teamOverviewService.deleteTeamMember(item)
                .then( function(result) {
                console.log("Inside deleteTeamMember in controller");
            },
            function(error) {
                console.log(error.statusText);
            });
            
            
            /*$http({
                method: 'DELETE',
                url: 'http://localhost:8080/TeamRest/rest/TeamService/deleteTeam',
                data: item,
                headers: {
                    'Content-type': 'application/json;charset=utf-8'
                }
            })
            .then(function(response) {
                console.log(response.data);
            }, function(rejection) {
                console.log(rejection.data);
            });*/
        }
        
        $scope.update = function() {
            $scope.isVisible = true;
            
        }
        
        $scope.saveUpdate = function(teamMember) {
            $scope.isVisible = false;
            $scope.updateData(teamMember);
            
        }
        
        $scope.updateData = function(teamMember) {
            $http({
                method: 'PUT',
                url: 'http://localhost:8080/TeamRest/rest/TeamService/updateTeam',
                data: teamMember,
                headers: {
                    'Content-type': 'application/json;charset=utf-8'
                }
            })
            .then(function(response) {
                console.log(response.data);
            }, function(rejection) {
                console.log(rejection.data);
            });
        }

    });
