(function () {
    'use strict';

    angular.module('adminModule').
        controller("administrateController", ['$scope', '$log', '$q', '$dialog',
            function ($scope, $log, $q, $dialog) {
            $scope.empty = true;
            $scope.editMode = true;
            $scope.addMode = false;
            $scope.selectedReview = { name: '', team: '', role: '',feedbackers:'', selectedPersons: [], selectedTeams: [], editMode: true};
            $scope.reviewees = [];

            $scope.currentStepNav = 0; // 0, 1, 2 ...
            $scope.changeTab = function(){
                $scope.currentStepNav
            };

            $scope.addReviewer = function () {
                if(!$scope.editMode){
                    $scope.selectedReview = { name: '', team: '', role: '',feedbackers:'', selectedPersons: [], selectedTeams: [], editMode: true};
                    $scope.reviewees.push($scope.selectedReview);
                    $scope.editMode = true;
                }
            };

            $scope.editReview = function(index){
                if(!$scope.editMode){
                    $scope.reviewees[index].editMode = true;
                    $scope.selectedReview = $scope.reviewees[index];
                    $scope.editMode = true;
                }
            };

            $scope.saveReview = function(index){
                $scope.selectedReview.editMode = false;
                $scope.reviewees[index] = $scope.selectedReview;
                $scope.selectedReview = null;
                $scope.editMode = false;
            };

            $scope.GetFeedbackers = function(){
                var feedBackModalPromise = $dialog.dialog({
                    templateUrl: "View/Admin/Survey/feedBackModal.html",
                    scope: $scope,
                    controller: 'feedBackModalController',
                    resolve: {
                        teams: function(){ return angular.copy($scope.teams)},
                        persons: function(){ return angular.copy($scope.persons)},
                        selectedPersons: function(){ return angular.copy($scope.selectedReview.selectedPersons)},
                        selectedTeams: function(){ return angular.copy($scope.selectedReview.selectedTeams)}
                    }
                });

                $q.when(feedBackModalPromise).then(function(modal){
                    modal.open().then(function(result){
                        var resultString = '';
                        if(result.selectedTeams.length){
                            $scope.selectedReview.selectedTeams = result.selectedTeams
                            resultString = _.pluck(result.selectedTeams, 'Name').join(", ");
                            if(result.selectedPersons.length){
                                resultString += ", ";
                            }
                        }
                        if(result.selectedPersons.length){
                            $scope.selectedReview.selectedPersons = result.selectedPersons;
                            resultString += _.pluck(result.selectedPersons, 'FullName').join(", ");
                        }
                       $scope.selectedReview.feedbackers = resultString;
                    });
                })
            }
            var init = function(){
                $scope.reviewees.push($scope.selectedReview);
            };

            init();
         }]).
        controller("feedBackModalController", ['$scope', '$rootScope', '$log', '$q', 'dialog', 'teams', 'persons', 'selectedPersons', 'selectedTeams',
            function ($scope, $rootScope, $log, $q, dialog, teams, persons, selectedPersons, selectedTeams) {
                $scope.close = function(){
                    dialog.close();
                };
                $scope.save = function(){
                    var result = {'selectedTeams' : $scope.selectedTeams, 'selectedPersons' : $scope.selectedPersons}
                    dialog.close(result);
                };
                $scope.teams = teams;
                $scope.persons = persons;
                $scope.selectedTeam = null;
                $scope.selectedPerson = null;
                $scope.selectedPersons = selectedPersons || [];
                $scope.selectedTeams = selectedTeams || [];

                $scope.selectTeam = function(item, array){
                    $scope.selectedTeam = _.find(array, function(team){
                        return team.Id === item.Id;
                    })
                    $scope.selectedPerson = null;
                };
                $scope.selectPerson = function(item, array, inTeam){
                    event.stopPropagation();
                    if(inTeam && $scope.selectedPersons.indexOf(item) !== -1) return
                    $scope.selectedTeam = null;
                    $scope.selectedPerson = _.find(array, function(person){
                        return person.Id === item.Id;
                    })
                };
                $scope.getPersonsByTeam = function(team){
                    return _.filter($scope.persons, function(person){
                        return person.Team == team
                    })
                };
                $scope.moveRight = function(){
                    if($scope.selectedTeam){
                        if(!$scope.selectedTeam || $scope.selectedTeams.indexOf($scope.selectedTeam) !== -1)return
                        $scope.selectedTeams.push($scope.selectedTeam);
                        $scope.teams.splice($scope.teams.indexOf($scope.selectedTeam), 1);
                        $scope.selectedTeam = null;
                    }
                    if($scope.selectedPerson){
                        if(!$scope.selectedPerson || $scope.selectedPersons.indexOf($scope.selectedPerson) !== -1)return
                        $scope.selectedPersons.push($scope.selectedPerson);
                        $scope.selectedPerson = null;
                    }
                };
                $scope.moveLeft = function(){
                    if($scope.selectedTeam){
                        if(!$scope.selectedTeam || $scope.teams.indexOf($scope.selectedTeam) !== -1)return
                        $scope.selectedTeams.splice($scope.selectedTeams.indexOf($scope.selectedTeam), 1);
                        $scope.teams.push($scope.selectedTeam);
                        $scope.selectedTeam = null;
                    }
                    if($scope.selectedPerson){
                        if(!$scope.selectedPerson)return
                        $scope.selectedPersons.splice($scope.selectedPerson, 1);
                        $scope.selectedPerson = null;
                    }
                }
            }])
})();