/**
 * Created by Canariseven on 23/6/15.
 */
angular.module("JevitecaApp")
    .directive("albumsTable", ["AlbumsProvider","$http","$q","$filter", function (AlbumsProvider,$http,$q,$filter) {
        return {
            restrict: "AE",
            templateUrl: "views/AlbumsTable.html",
            replace: true,
            scope: {
                albums: "="
            },
            link: function (scope, element) {

            }
        };
    }]);