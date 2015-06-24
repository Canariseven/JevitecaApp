/**
 * Created by Canariseven on 23/6/15.
 */
angular.module("JevitecaApp")
    .directive("imageLoader", ["AlbumsProvider","$http","$q","$filter", function (AlbumsProvider,$http,$q,$filter) {
        return {
            restrict: "AE",
            templateUrl: "views/imageLoader.html",
            replace: true,
            scope: {
                image: "="
            },
            link: function (scope) {
                scope.routeImage = function (id) {
                    var diferido = $q.defer();
                    $http.get("resources/data/albums.json").then(
                        function (datos) {
                            debugger;
                            single_object = $filter('filter')(datos.data, function (d) {
                                return d.id === id;
                            });
                            debugger;
                            if (single_object.length == 1)
                            diferido.resolve(single_object.image);
                            else
                            diferido.reject("");
                        },
                        function () {
                            diferido.reject("");
                        }
                    );
                    return diferido.promise;
                }

            }
        };
    }]);