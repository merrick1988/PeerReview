(function () {
    'use strict';

    angular.module('adminModule').
     controller("adminCirclesController", ['$scope', '$log', 'localStorageService', function ($scope, $log, localStorageService) {
         $scope.empty = true;
         $scope.addMode = false;
         $scope.currentCircle = {};
         $scope.currentCircle.isShowTeams = false;
         $scope.currentCircle.isShowPersones = false;
         $scope.newCircle = { name: '', teams: [], persones: [] };

         $scope.circles = [];
         $scope.teams = [];
         $scope.persones = [];

         function init() {
             getData();
         };
         function getData() {
             $scope.circles = localStorageService.get("circles") || [];
             $scope.teams = localStorageService.get("teams") || [];
             $scope.persones = localStorageService.get("persones") || [];
         };

         $scope.showCirclesDetails = function (index) {
             $scope.currentCircle = $scope.circles[index];
             $scope.empty = false;
             $scope.addMode = false;
         }
         $scope.creatOrEdit = function (editCircle) {
             $scope.empty = false;
             $scope.addMode = true;
             if (editCircle) {
                 $scope.newCircle.name = editCircle.name;
                 $scope.newCircle.teams = editCircle.teams;
                 $scope.newCircle.persones = editCircle.persones;
             }
         }
         $scope.removeCircle = function () {
             $scope.circles.splice($scope.circles.indexOf($scope.currentCircle), 1);
             $scope.currentCircle = {};
             $scope.empty = true;
             localStorageService.set("circles", $scope.circles);
         }
         $scope.showTeams = function () {
             if ($scope.currentCircle.teams.length) {
                 $scope.currentCircle.isShowTeams = !$scope.currentCircle.isShowTeams;
             }
         }
         $scope.showPersones = function () {
             if ($scope.currentCircle.persones.length) {
                 $scope.currentCircle.isShowPersones = !$scope.currentCircle.isShowPersones;
             }
         }
         /* events */
         $scope.$on("set-circles-state", init);

         /* new Circle*/

         $scope.newCircle.AddNewCircle = function () {
             $scope.circles.push({ name: $scope.newCircle.name, id: "", teams: $scope.newCircle.teams, persones: $scope.newCircle.persones });
             localStorageService.set("circles", $scope.circles);
             $scope.empty = true;
             $scope.addMode = false;
             $scope.newCircle.name = '';
             $scope.newCircle.teams = '';
             $scope.newCircle.persones = '';
         }
         $scope.newCircle.AddTeam = function () {
             $scope.newCircle.teams.push({ name: $scope.newCircle.newTeam });
         }
         $scope.newCircle.deleteTeam = function (index) {
             $scope.newCircle.teams.splice(index, 1)
         }
         $scope.newCircle.AddPersone = function () {
             $scope.newCircle.persones.push({ name: $scope.newCircle.newPersone });
         }
         $scope.newCircle.deletePersone = function (index) {
             $scope.newCircle.persones.splice(index, 1)
         }
     }]);
})();