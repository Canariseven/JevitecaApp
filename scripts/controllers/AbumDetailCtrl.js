/**
 * Created by Canariseven on 26/6/15.
 */
angular.module("JevitecaApp")
    .controller("AlbumDetailCtrl", ["$scope","Album","Settings", function ($scope,Album,Settings) {
        $scope.album = Album;
        $scope.loadSong = function(title,track){
            $scope.$broadcast("loadNewSongYoutube",title,track);
        };
        $scope.wikipedia = getWikipediaLink($scope.album.title);
        function getWikipediaLink(bandName) {
            var query = encodeURIComponent(bandName);
            return Settings.wikipedia_search + query;
        }
    }]);