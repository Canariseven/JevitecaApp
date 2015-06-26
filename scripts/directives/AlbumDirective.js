/**
 * Created by Canariseven on 23/6/15.
 */
angular.module("JevitecaApp")
    .directive("album", ["$routeSegment", function ($routeSegment) {
        return {
            restrict: "AE",
            templateUrl: "views/album.html",
            replace: true,
            scope: {
                model: "="
            },
            link: function (scope, element) {
                scope.routeIsAlbums = function() {
                    return $routeSegment.startsWith( "albums" );
                };
                scope.routeIsBands = function() {
                    return $routeSegment.startsWith( "bands" );
                };
                scope.routeIsGenres = function() {
                    return $routeSegment.startsWith( "genres" );
                };
            }
        };
    }]);