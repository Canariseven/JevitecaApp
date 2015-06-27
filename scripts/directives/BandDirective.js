/**
 * Created by Canariseven on 23/6/15.
 */
angular.module("JevitecaApp")
    .directive("band", [function () {
        return {
            restrict: "AE",
            templateUrl: "views/ElementTableBand.html",
            replace: true,
            scope: {
                model: "="
            },
            link: function (scope, element) {

            }
        };
    }]);