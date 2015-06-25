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
                scope.imageStd = "resources/img/imgDefault.jpg";
          /*      scope.$evalAsync(function(){
                    var position = element;
                    console.log(position);
                })*/
                /*scope.routeImage = function (id) {
                    var diferido = $q.defer();
                    $http.get("resources/data/albums.json").then(
                        function (datos) {
                            debugger;
                            single_object = $filter('filter')(datos.data, function (d) {
                                return d.id === id;
                            });
                            debugger;
                            if (single_object.length == 1)
                            diferido.resolve(single_object[0].image);
                            else
                            diferido.reject("");
                        },
                        function () {
                            diferido.reject("");
                        }
                    );
                    return diferido.promise
                }*/

            }
        };
    }]);