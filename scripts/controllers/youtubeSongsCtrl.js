/**
 * Created by Canariseven on 26/6/15.
 */
angular.module("JevitecaApp")
    .controller("YoutubeSongsCtrl", ["$scope","AlbumsProvider","$q","$sce","Settings", function ($scope,AlbumsProvider,$q,$sce,Settings) {

        getSong($scope.album.title,$scope.album.tracklist[0]).then(function(song){
            $scope.song = $sce.trustAsResourceUrl(Settings.youtube_url_embed+song);
        });

        $scope.$on("loadNewSongYoutube", function (event, title, track) {
            getSong(title,track).then(function(song){
                $scope.song = $sce.trustAsResourceUrl(Settings.youtube_url_embed+song);

            });
        });

        function getSong(title,track){
            var deferred = $q.defer();
                deferred.resolve(AlbumsProvider.queryYoutube(title+ " " + track));
            return deferred.promise;
        }

        function getYouTubeLink(bandName, trackName) {
            var query = encodeURIComponent((bandName + "%20" + trackName).toLowerCase());
            return "https://www.youtube.com/results?search_query=" + query;
        }



    }]);