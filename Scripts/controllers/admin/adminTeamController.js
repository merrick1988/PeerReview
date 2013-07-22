(function () {
    'use strict';

    angular.module('adminModule').
     controller("adminTeamController", ['$scope', '$log', 'localStorageService', function ($scope, $log, localStorageService) {
         $scope.empty = true;
         $scope.addMode = false;
         $scope.currentTeam = {};
         $scope.newTeam = { name: '', circle: ''};

         $scope.circles = [];

         function init() {
             getData();
         };
         function getData() {
             $scope.circles = localStorageService.get("circles") || [];
             $scope.teams = localStorageService.get("teams") || [];
         };

         $scope.showTeamDetails = function (index) {
             $scope.currentTeam = $scope.teams[index];
             $scope.empty = false;
             $scope.addMode = false;
         }
         $scope.creatOrEdit = function (editTeam) {
             $scope.empty = false;
             $scope.addMode = true;
             if (editTeam) {
                 $scope.newTeam.name = editTeam.name;
                 $scope.newTeam.circle = editTeam.circle;
             }
         }
         $scope.removeTeam = function () {
             $scope.teams.splice($scope.teams.indexOf($scope.currentTeam), 1);
             $scope.currentTeam = {};
             $scope.empty = true;
             localStorageService.set("teams", $scope.teams);
         }
         /* events */
         $scope.$on("set-teams-state", init);

         /* new Circle*/

         $scope.newTeam.AddNewTeam = function () {
             $scope.teams.push({ name: $scope.newTeam.name, id: "", circle: $scope.newTeam.circle});
             localStorageService.set("teams", $scope.teams);
             $scope.empty = true;
             $scope.addMode = false;
             $scope.newTeam.name = '';
             $scope.newTeam.circle = '';
         }
     }]);
})();