/**
 * Created by Canariseven on 26/6/15.
 */
angular.module("JevitecaApp").directive("favourites", function () {
    return {
        restrict: "EA",
        replace: true,
        scope: {
            idAlbum: "="
        },
        templateUrl: "views/Favourites.html",
        link: function (scope) {
            scope.isFavourite = function () {
                var favourite = localStorage.getItem("album_" + scope.idAlbum);
                return favourite === "true";
            };

            scope.addFavourite = function () {
                localStorage.setItem("album_" + scope.idAlbum,"true");
            };

            scope.removeFavourite = function () {
                localStorage.removeItem("album_" + scope.idAlbum);
            };
        }
    }
});