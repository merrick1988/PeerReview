'use strict';

angular.module('loginModule').
    controller("loginController", function ($scope) {

        $scope.user = {
            name: '',
            password: ''
        };

    }).
    controller("registerController", function ($scope) {

        $scope.passworDontMatch = false;
        $scope.passwodChecked = false;

        $scope.user = {
            name: '',
            password: '',
            email: '',
            confirmPassword:''
        };        

        $scope.checkPassword = function () {
            if ($scope.user.confirmPassword && $scope.user.confirmPassword.length >= 6) {
                if ($scope.user.password !== $scope.user.confirmPassword) {
                    $scope.passworDontMatch = true;
                    $scope.passwodChecked = false;
                } else {
                    $scope.passwodChecked = true;
                    $scope.passworDontMatch = false;
                }
            } else {
                $scope.passwodChecked = false;
            }
        };
    });
