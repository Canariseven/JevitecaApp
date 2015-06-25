/**
 * Created by Canariseven on 23/6/15.
 */
angular.module("JevitecaApp")
    .directive("imageLoader", ["AlbumsProvider", "$http", "$q", "$filter", function (AlbumsProvider, $http, $q, $filter) {
        return {
            restrict: "AE",
            templateUrl: "views/imageElement.html",
            replace: true,
            scope: {
                id: "="
            },
            link: function (scope, element, attrs) {
                scope.$evalAsync(function () {
                    var value = routeImage(scope.id);
                    scope.image = value;
                    /*attrs.$set('src', scope.image);*/
                    console.log(value)
                });
                var routeImage = function (id) {
                    var diferido = $q.defer();
                    $http.get("resources/data/albums.json").then(
                        function (datos) {
                            single_object = $filter('filter')(datos.data, function (d) {
                                return d.id === id;
                            });
                            if (single_object.length == 1) {


                                diferido.resolve(single_object[0].image);
                            }
                            else
                                diferido.reject("");
                        },
                        function () {
                            diferido.reject("");
                        }
                    );
                    return diferido.promise
                }
            }
        };
    }]);