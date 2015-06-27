/**
 * Created by Canariseven on 26/6/15.
 */
angular.module("JevitecaApp")
    .controller("AlbumDetailCtrl", ["$scope","Album", function ($scope,Album) {
        $scope.album = Album;
        $scope.loadSong = function(title,track){
            $scope.$broadcast("loadNewSongYoutube",title,track);
        }
        $scope.wikipedia = getWikipediaLink($scope.album.title);
        function getWikipediaLink(bandName) {
            var query = encodeURIComponent(bandName);
            return "https://es.wikipedia.org/wiki/Special:Search?search=" + query;
        }
    }]);