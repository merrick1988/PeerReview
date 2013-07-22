'use strict';

/* Services */

angular.module('loadService').
  factory('loadReviewData', ['$resource', function ($resource) {

      var loadReviewData = $resource('../../../PersonArea/Person/FeedBackJson');

      loadReviewData.prototype.getReviewData = function (successCb, failCb) {
          loadReviewData.get(successCb, failCb);
      }
      return new loadReviewData();
  }]).
    factory('loadFeedBackDetails', ['$resource', function ($resource) {

        var loadFeedBackDetails = $resource('../../../PersonArea/Person/LoadPersonDataJson?receiverId=:receiverId&receiverTeamId=:receiverTeamId&surveyId=:surveyId');       

        loadFeedBackDetails.prototype.getFeedBackDetails = function (params, successCb, failCb) {
            loadFeedBackDetails.get(params, successCb, failCb);
        }
        return new loadFeedBackDetails();
    }]);
