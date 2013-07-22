(function () {
    'use strict';

    angular.module('adminModule').
        controller("adminController", ['$scope', '$log', function ($scope, $log) {
            var tempDataTeams = '{' +
                '"NewTeam":{"Id":"00000000-0000-0000-0000-000000000000","Name":""},' +
                '"Teams":[{"Id":"142adb62-291b-4748-8baf-a1f80181e4b2","Name":"App developers"}, {"Id":"142adb62-291b-4748-8baf-a1f80181e4b3","Name":"QA"}, {"Id":"142adb62-291b-4748-8baf-a1f80181e4b4","Name":"Frontend developers"}]}';
            var tempDataRole = '{' +
                '"NewRole":{"Id":"00000000-0000-0000-0000-000000000000","Name":""},' +
                '"Roles":[{' +
                '   "Id":"45dfe267-0512-4384-b581-a1f800ddaa29",' +
                '   "Name":"Developer"' +
                '},' +
                '{"Id":"b34d97e2-7f81-491d-875c-a1f800df0199","Name":"FE Developer"},{"Id":"edfad874-3626-46b9-9e34-a1f800e47796","Name":"Owner"}]}';
            var tempDataPersons = '{' +
                '"Persons":[{' +
                '   "Id":"c4079b47-b10d-43e4-9b96-8b311adfe9b8",' +
                '   "FullName":"Ivan Ivanow",' +
                '   "Team":"App developers",' +
                '   "Role":"Developer"},' +
                '   {"Id":"4db9c7ca-9f31-4e67-9690-e15661495591","FullName":"Bogdan Sachkovskyi","Team":"App developers","Role":"Developer"},' +
                '   {"Id":"4db9c7ca-9f31-4e67-9690-e15661495592","FullName":"Name Surname","Team":"Frontend developers","Role":"Developer"},' +
                '   {"Id":"4db9c7ca-9f31-4e67-9690-e15661495593","FullName":"Another Name","Team":"Frontend developers","Role":"Developer"},' +
                '   {"Id":"07cf0311-06ff-409b-b408-ec52ee4b7df4","FullName":"Petro Petrov","Team":"App developers","Role":"Developer"}]}';
            var tempDataSurveys = '{' +
                '"Surveys":[{' +
                '"Id":"58d62c2f-3a01-40fa-ab3e-a1ff00fab7ea",' +
                '"Name":"Test Rename",' +
                '"StartDate":"\/Date(1374105600000)\/",' +
                '"StopDate":"\/Date(1375401600000)\/",' +
                '"Scale":1,' +
                '"Type":0,' +
                '"IsRunning":false,' +
                '"IsAutoStart":true,' +
                '"Recurrency":0,' +
                '"Report":0,' +
                '"Questionary":0,' +
                '"Reviewees":[{' +
                '"Id":"4db9c7ca-9f31-4e67-9690-e1566149559d",' +
                '"FullName":"Bogdan Sachkovskyi",' +
                '"Team":{"Id":"142adb62-291b-4748-8baf-a1f80181e4b2",' +
                '"Name":"App developers"},' +
                '"Role":{"Id":"45dfe267-0512-4384-b581-a1f800ddaa29",' +
                '"Name":"Developer"},' +
                '"Feedbackers":[{' +
                '"Id":"07cf0311-06ff-409b-b408-ec52ee4b7df9",' +
                '"FullName":"Petro Petrov",' +
                '"Team":{"Id":"142adb62-291b-4748-8baf-a1f80181e4b2",' +
                '"Name":"App developers"},' +
                '"Role":{"Id":"45dfe267-0512-4384-b581-a1f800ddaa29","Name":"Developer"}},' +
                '{"Id":"c4079b47-b10d-43e4-9b96-8b311adfe9b3","FullName":"Ivan Ivanow","Team":{"Id":"142adb62-291b-4748-8baf-a1f80181e4b2","Name":"App developers"},"Role":{"Id":"45dfe267-0512-4384-b581-a1f800ddaa29","Name":"Developer"}}]}]}],' +
                '"NewSurvey":{"Id":"00000000-0000-0000-0000-000000000000","Name":"","StartDate":"\/Date(1374364800000)\/","StopDate":"\/Date(1375660800000)\/","IsAutoStart":true,"IsRunning":false,"Type":0,"Scale":3,"Recurrency":0,"Report":0,"Questionary":0,"Reviewees":[],"Types":[{"Selected":true,"Text":"Person","Value":"0"},{"Selected":false,"Text":"Team","Value":"1"}],"Scales":[{"Selected":false,"Text":"NoScale","Value":"0"},{"Selected":false,"Text":"SwissSchool","Value":"1"},{"Selected":false,"Text":"GermanSchool","Value":"2"},{"Selected":true,"Text":"NPSScale","Value":"3"}],"Questionaries":[{"Selected":true,"Text":"PeerReview","Value":"0"}],"SurveyHaveReviews":false}}'
            $scope.state = 'administrate'; // administrate, reports
            $scope.surveys = JSON.parse(tempDataSurveys).Surveys;
            $scope.teams = JSON.parse(tempDataTeams).Teams;
            $scope.persons = JSON.parse(tempDataPersons).Persons;
            $scope.roles = JSON.parse(tempDataRole).Persons;

        }]);
})();