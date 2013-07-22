'use strict';

angular.module('personeModule').    
    controller("FeedBackItemController", ['$scope', '$log', 'loadFeedBackDetails', function ($scope, $log, loadFeedBackDetails) {
        $scope.empty = 'empty';
        $scope.currentPersone = null;

        var onGetFeedBackDetailsSuccess = function (result) {
            $scope.currentDetails = result;
        }
        var failCb = function (error) {
            $log.error(error);
        }
        $scope.showFeedBackDetails = function (index) {
            $scope.currentPersone = $scope.reviewData[$scope.state][index];
            $scope.empty = false;

            var feedBackParams = {
                'receiverId': $scope.currentPersone.Receiver.Id,
                'receiverTeamId': $scope.currentPersone.Team.Id,
                'surveyId': $scope.currentPersone.Survey.Id
            }

            loadFeedBackDetails.getFeedBackDetails(feedBackParams, onGetFeedBackDetailsSuccess, failCb);
        }
       
        


        $scope.changeTab = function () {
            $scope.haveFeedBack = !$scope.haveFeedBack;
            $scope.empty = 'empty';
        }
        $scope.haveFeedBack = false;
    }]);