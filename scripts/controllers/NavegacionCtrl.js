/**
 * Created by Canariseven on 22/6/15.
 */

angular
    .module("JevitecaApp")
    .controller("NavegacionCtrl", ["$scope", "$routeSegment", function( $scope, $routeSegment ) {

        $scope.routeIsAlbums = function() {
            return $routeSegment.startsWith( "albums" );
        };
        $scope.routeIsBands = function() {
            return $routeSegment.startsWith( "bands" );
        };
        $scope.routeIsGenres = function() {
            return $routeSegment.startsWith( "genres" );
        };

    }]);