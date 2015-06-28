/**
 * Created by Canariseven on 22/6/15.
 */
angular.module("JevitecaApp")
    .service("AlbumsProvider", ["$http", "$q", "$filter","Settings", function ($http, $q, $filter,Settings) {
        this.getAlbums = function () {
            var datos = $http.get(Settings.json_albums);
            return datos
        };

        this.getAlbumWithId = function (albumId) {
            var deferred = $q.defer();
            $http.get(Settings.json_albums).then(function (data) {
                var element = $filter("filter")(data.data, {"id": albumId})[0];
                deferred.resolve(element);
            });
            return deferred.promise;
        };

        this.queryYoutube = function (query) {
            var deferred = $q.defer();
            $http.get(Settings.youtube_search, {
                params: {
                    key: Settings.api_key_google,
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