(function () {
    'use strict';

    angular.module('adminModule').
     controller("adminRoleController", ['$scope', '$log', 'localStorageService', function ($scope, $log, localStorageService) {
         $scope.empty = true;
         $scope.addMode = false;
         $scope.currentRole = {};
         $scope.newRole = { name: '' };
         $scope.roles = [];

         function init() {
             getData();
         };
         function getData() {
             var data = localStorageService.get("roles");             
             if (data) {
                 $scope.roles = data;
             }
             
         };

         $scope.showRoleDetails = function (index) {
             $scope.currentRole = $scope.roles[index];
             $scope.empty = false;
             $scope.addMode = false;
         }
         $scope.creatOrEdit = function (editRole) {
             $scope.empty = false;
             $scope.addMode = true;
             if (editRole) {
                 $scope.newRole.name = editRole.name;
             }
         }
         $scope.removeRole = function () {
             $scope.roles.splice($scope.roles.indexOf($scope.currentRole), 1);
             $scope.currentRole = {};
             $scope.empty = true;
             localStorageService.set("roles", $scope.roles);
         }
         /* events */
         $scope.$on("set-roles-state", init);

         /* new Circle*/

         $scope.newRole.AddNewRole = function () {
             $scope.roles.push({ name: $scope.newRole.name});
             localStorageService.set("roles", $scope.roles);
             $scope.empty = true;
             $scope.addMode = false;
             $scope.newRole.name = '';
         }
     }]);
})();