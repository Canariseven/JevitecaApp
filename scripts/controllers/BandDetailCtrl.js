/**
 * Created by Canariseven on 26/6/15.
 */
angular.module("JevitecaApp")
    .controller("BandDetailCtrl", ["$scope","Band","Settings", function ($scope,Band,Settings) {
        $scope.band = Band;

        $scope.getWikipediaLink = function(memberName) {
            var query = encodeURIComponent(memberName);
            return Settings.wikipedia_search + query;
        }
    }]);