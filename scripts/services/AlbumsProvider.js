/**
 * Created by Canariseven on 22/6/15.
 */
angular.module("JevitecaApp")
    .service("AlbumsProvider", ["$http", "$q", "$filter", function ($http, $q, $filter) {
        this.getAlbums = function () {
            var datos = $http.get("resources/data/albums.json");
            return datos
        };

        this.getAlbumWithId = function (albumId) {
            var deferred = $q.defer();
            $http.get("resources/data/albums.json").then(function (data) {
                var element = $filter("filter")(data.data, {"id": albumId})[0];
                deferred.resolve(element);
            });
            return deferred.promise;
        };

        this.queryYoutube = function (query) {
            var Key_API_GOOGLE = "AIzaSyBzO86cIFiDdZOXS8dCE2rbYX4mQEh8Ks4";
            var deferred = $q.defer();
            $http.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: Key_API_GOOGLE,
                    type: 'video',
                    maxResults: '12',
                    part: 'id, snippet',
                    fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
                    q: query
                }
            }).then(function (data) {
                    deferred.resolve(data.data.items[0].id.videoId)
                });
            return deferred.promise;
        }
    }]);