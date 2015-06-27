/**
 * Created by Canariseven on 23/6/15.
 */
angular.module("JevitecaApp")
    .directive("genre", [function () {
        return {
            restrict: "AE",
            templateUrl: "views/ElementTableGenre.html",
            replace: true,
            scope: {
                model: "="
            },
            link: function (scope, element) {

            }
        };
    }]);