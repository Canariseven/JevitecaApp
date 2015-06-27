/**
 * Created by Canariseven on 26/6/15.
 */
angular.module("JevitecaApp")
    .controller("BandDetailCtrl", ["$scope","Band", function ($scope,Band) {
        $scope.band = Band;

        $scope.getWikipediaLink = function(memberName) {
            var query = encodeURIComponent(memberName);
            return "https://es.wikipedia.org/wiki/Special:Search?search=" + query;
        }
    }]);