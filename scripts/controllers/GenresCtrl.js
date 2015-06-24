/**
 * Created by Canariseven on 22/6/15.
 */
angular.module("JevitecaApp")
    .controller("GenresCtrl", ["$scope","Genres", function ($scope,Genres) {
        $scope.genres = Genres.data;
    }]);