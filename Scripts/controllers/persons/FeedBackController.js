'use strict';

angular.module('personeModule').
    controller("FeedBackController", ['$scope', '$log', 'loadReviewData', function ($scope, $log, loadReviewData) {
        $scope.state = 'Persons'; // Persons, Teams, Circles, Processes, SelfReviews
        $scope.dataIsLoading = true;
        $scope.width = '';
        var margin = 0;

        $scope.getReviewesSize = function () {
            if ($scope.reviewData) {
                return _.size($scope.reviewData[$scope.state]);
            } else {
                $log.warn("No reviewData yet")
            }
        }

        $scope.getMargin = function () {
            return margin + "px";
        }

        $scope.changeState = function (event) {
            $scope.state = event.target.id;
        }

        $scope.next = function () {
            if ($(document).width() <= 480) {
                margin -= $(window).width();
                $('.feedback-wraper').css("margin-left", margin + "px")
            }
        }
        $scope.prev = function () {
            if ($(document).width() <= 480) {
                margin += $(window).width();
                $('.feedback-wraper').css("margin-left", margin + "px")
            }
        }
        $scope.getWidth = function () {
            if ($(document).width() <= 480) {
                $scope.width = 'width : ' + $(window).outerWidth() + 'px';
            }
        }

        var onGetReviewDataSuccess = function (result) {
            $scope.reviewData = result;
            $scope.dataIsLoading = false;
        }

        var failCb = function (error) {
            $log.error(error);
        }
        
        $(window).resize(function () {
            $scope.getWidth();
            $scope.$digest();
        });
        $scope.getWidth();
        loadReviewData.getReviewData(onGetReviewDataSuccess, failCb);

    }]);